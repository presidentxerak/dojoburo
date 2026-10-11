import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-2nde',
  chapters: [
    /* ================================================================== */
    /* ENSEMBLES DE NOMBRES ET INTERVALLES                                 */
    /* ================================================================== */
    {
      id: 'ensembles-nombres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ensembles-n-z-d-q-r',
          title: 'Les ensembles de nombres N, Z, D, Q et R',
          minutes: 30,
          objectives: [
            "Connaître les ensembles ℕ, ℤ, 𝔻, ℚ et ℝ et les relations d'inclusion entre eux.",
            "Utiliser les notations ∈, ∉ et ⊂ pour situer un nombre dans un ensemble.",
            "Reconnaître un nombre décimal, un nombre rationnel et un nombre irrationnel.",
            "Démontrer que 1/3 n'est pas un nombre décimal et comprendre pourquoi √2 est irrationnel.",
          ],
          course: [
            {
              heading: "Entiers naturels et entiers relatifs",
              paragraphs: [
                "Un ensemble est une collection d'objets, appelés ses éléments. L'ensemble des entiers naturels, noté ℕ, contient 0, 1, 2, 3, 4, et ainsi de suite sans fin : ce sont les nombres qui servent à compter. On écrit 5 ∈ ℕ, qui se lit « 5 appartient à ℕ », et -3 ∉ ℕ, qui se lit « -3 n'appartient pas à ℕ ».",
                "Dans ℕ, on ne peut pas toujours soustraire : 3 - 7 n'est pas un entier naturel. On agrandit donc ℕ en lui ajoutant les opposés des entiers naturels. On obtient l'ensemble des entiers relatifs, noté ℤ, qui contient ..., -3, -2, -1, 0, 1, 2, 3, ... Ainsi -3 ∈ ℤ et 3 - 7 = -4 ∈ ℤ.",
                "Tout entier naturel est aussi un entier relatif. On dit que ℕ est inclus dans ℤ et on écrit ℕ ⊂ ℤ. Attention aux notations : le symbole ∈ relie un nombre et un ensemble (7 ∈ ℕ), alors que le symbole ⊂ relie deux ensembles (ℕ ⊂ ℤ).",
              ],
              box: { label: "Définition", text: "ℕ = {0 ; 1 ; 2 ; 3 ; ...} est l'ensemble des entiers naturels. ℤ = {... ; -2 ; -1 ; 0 ; 1 ; 2 ; ...} est l'ensemble des entiers relatifs. On a ℕ ⊂ ℤ." },
            },
            {
              heading: "Les nombres décimaux",
              paragraphs: [
                "Un nombre décimal est un nombre qui peut s'écrire sous la forme a/10ⁿ, où a est un entier relatif et n un entier naturel. Autrement dit, c'est un nombre dont l'écriture décimale s'arrête après un nombre fini de chiffres. L'ensemble des nombres décimaux est noté 𝔻.",
                "Exemples : 2,35 = 235/10² est décimal ; -0,7 = -7/10 est décimal ; 3/4 = 75/100 = 0,75 est décimal même s'il est écrit sous forme de fraction. Tout entier relatif est décimal, car 7 = 7/10⁰ : on a donc ℤ ⊂ 𝔻.",
                "En revanche, 1/3 = 0,333... n'est pas décimal. Démonstration par l'absurde : supposons que 1/3 = a/10ⁿ avec a entier. Alors 3a = 10ⁿ, donc 10ⁿ serait un multiple de 3. Or la somme des chiffres de 10ⁿ (un 1 suivi de zéros) vaut 1, qui n'est pas un multiple de 3 : c'est impossible. Donc 1/3 ∉ 𝔻.",
                "Un critère pratique : une fraction irréductible est un nombre décimal si et seulement si son dénominateur n'a pas d'autres facteurs premiers que 2 et 5. Par exemple 7/20 est décimal (20 = 2² × 5), alors que 5/6 ne l'est pas (6 = 2 × 3).",
              ],
              box: { label: "Définition", text: "Un nombre décimal est un nombre qui s'écrit a/10ⁿ avec a ∈ ℤ et n ∈ ℕ. Son écriture décimale est finie. On a ℤ ⊂ 𝔻." },
            },
            {
              heading: "Les nombres rationnels",
              paragraphs: [
                "Un nombre rationnel est un nombre qui peut s'écrire comme le quotient a/b de deux entiers relatifs, avec b ≠ 0. L'ensemble des nombres rationnels est noté ℚ (pour « quotient »). Par exemple 1/3, -5/7 et 22/7 sont rationnels. Tout décimal a/10ⁿ est un quotient d'entiers, donc 𝔻 ⊂ ℚ.",
                "L'écriture décimale d'un rationnel est soit finie (c'est alors un décimal), soit infinie et périodique : un même bloc de chiffres se répète indéfiniment. Ainsi 1/7 = 0,142857142857... avec le bloc 142857 qui se répète, et 2/3 = 0,666... Ces nombres sont rationnels sans être décimaux.",
              ],
              box: { label: "Définition", text: "Un nombre rationnel est un nombre qui s'écrit a/b avec a ∈ ℤ, b ∈ ℤ et b ≠ 0. On a 𝔻 ⊂ ℚ." },
            },
            {
              heading: "Les nombres réels et les irrationnels",
              paragraphs: [
                "On place les nombres sur une droite graduée, munie d'une origine et d'une unité. Chaque point de cette droite a pour abscisse un nombre, et l'ensemble de toutes ces abscisses est l'ensemble des nombres réels, noté ℝ. Les entiers, les décimaux et les rationnels sont des réels, mais il existe des réels qui ne sont pas rationnels : on les appelle les nombres irrationnels.",
                "Le nombre √2, longueur de la diagonale d'un carré de côté 1, est irrationnel. Idée de la démonstration par l'absurde : si √2 = p/q avec p/q irréductible, alors p² = 2q², donc p² est pair et p aussi ; en écrivant p = 2k, on obtient 4k² = 2q², soit q² = 2k², donc q est pair. Ainsi p et q seraient tous deux pairs, ce qui contredit le fait que p/q est irréductible.",
                "Le nombre π est lui aussi irrationnel (on l'admet), tout comme √3 ou √5. La calculatrice n'en donne que des valeurs approchées : elle affiche √2 ≈ 1,414213562, mais 1,414213562 n'est pas égal à √2, puisque c'est un décimal. On vérifie par exemple que 1,414² = 1,999396, qui n'est pas égal à 2.",
              ],
              box: { label: "À retenir", text: "ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. Un réel qui n'est pas rationnel est irrationnel : √2, √3, π en sont des exemples. Une valeur affichée par la calculatrice n'est qu'une valeur approchée de ces nombres." },
            },
          ],
          keyPoints: [
            "ℕ : entiers naturels (0, 1, 2...) ; ℤ : entiers relatifs (... -1, 0, 1 ...).",
            "𝔻 : nombres de la forme a/10ⁿ, dont l'écriture décimale est finie, comme 0,75 ou -2,3.",
            "ℚ : quotients a/b d'entiers avec b ≠ 0 ; écriture décimale finie ou infinie périodique.",
            "ℝ : abscisses de tous les points d'une droite graduée ; les réels non rationnels sont irrationnels.",
            "ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ ; ∈ relie un nombre et un ensemble, ⊂ relie deux ensembles.",
            "1/3 n'est pas décimal ; √2 et π sont irrationnels.",
          ],
          example: {
            statement: "Donnez le plus petit ensemble de nombres (parmi ℕ, ℤ, 𝔻, ℚ et ℝ) auquel appartient chacun des nombres suivants : -4 ; 3/8 ; 2/3 ; √9 ; 12/4 ; √5 ; -1,25.",
            solution: [
              "-4 est un entier négatif : il appartient à ℤ mais pas à ℕ. Plus petit ensemble : ℤ.",
              "3/8 = 0,375 a une écriture décimale finie (375/1000) : il appartient à 𝔻 mais n'est pas entier. Plus petit ensemble : 𝔻.",
              "2/3 = 0,666... a une écriture décimale infinie (dénominateur 3) : il appartient à ℚ mais pas à 𝔻. Plus petit ensemble : ℚ.",
              "√9 = 3 et 12/4 = 3 : après simplification, ce sont des entiers naturels. Plus petit ensemble : ℕ.",
              "√5 n'est pas rationnel, car 5 n'est pas le carré d'un entier (on l'admet ici, comme pour √2). Plus petit ensemble : ℝ.",
              "-1,25 = -125/100 est décimal mais n'est pas entier. Plus petit ensemble : 𝔻.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le symbole ∈ ou ∉ : a) -7 ... ℕ ; b) 0,04 ... 𝔻 ; c) 5/11 ... 𝔻 ; d) √16 ... ℕ ; e) -21/7 ... ℤ ; f) 1/3 ... ℚ.",
              hint: "Simplifiez chaque nombre avant de conclure, et pour une fraction, regardez si son écriture décimale s'arrête.",
              solution: [
                "a) -7 est négatif, donc -7 ∉ ℕ.",
                "b) 0,04 = 4/100 = 4/10², donc 0,04 ∈ 𝔻.",
                "c) 5/11 = 0,4545... a une écriture décimale infinie (le dénominateur 11 n'est pas formé de 2 et de 5), donc 5/11 ∉ 𝔻.",
                "d) √16 = 4, donc √16 ∈ ℕ.",
                "e) -21/7 = -3, donc -21/7 ∈ ℤ.",
                "f) 1/3 est un quotient de deux entiers, donc 1/3 ∈ ℚ.",
              ],
            },
            {
              level: 2,
              statement: "a) Montrez que 7/20 est un nombre décimal et donnez son écriture décimale. b) Démontrez par l'absurde que 7/12 n'est pas un nombre décimal. c) Donnez une valeur approchée de 7/12 au centième près.",
              hint: "Pour a), cherchez à écrire la fraction avec un dénominateur 100. Pour b), supposez 7/12 = a/10ⁿ et utilisez le critère de divisibilité par 3.",
              solution: [
                "a) 7/20 = (7 × 5)/(20 × 5) = 35/100 = 0,35. C'est un nombre de la forme a/10², donc 7/20 ∈ 𝔻.",
                "b) Supposons que 7/12 = a/10ⁿ avec a ∈ ℤ et n ∈ ℕ. En faisant les produits en croix : 7 × 10ⁿ = 12a.",
                "Or 12a = 3 × 4a est un multiple de 3 ; donc 7 × 10ⁿ serait un multiple de 3.",
                "Mais l'écriture de 7 × 10ⁿ est un 7 suivi de n zéros : la somme de ses chiffres vaut 7, qui n'est pas un multiple de 3. C'est une contradiction.",
                "Donc 7/12 n'est pas un nombre décimal : 7/12 ∈ ℚ mais 7/12 ∉ 𝔻.",
                "c) 7/12 = 0,58333..., donc 7/12 ≈ 0,58 au centième près.",
              ],
            },
            {
              level: 3,
              statement: "On veut démontrer que √3 est irrationnel. a) Soit p un entier qui n'est pas un multiple de 3 : il s'écrit p = 3k + 1 ou p = 3k + 2 avec k entier. Montrez que, dans les deux cas, p² n'est pas un multiple de 3. b) Déduisez-en que si p² est un multiple de 3, alors p est un multiple de 3. c) Supposons que √3 = p/q, avec p et q entiers naturels non nuls et p/q irréductible. Montrez que p² = 3q², puis que p et q sont tous deux multiples de 3. Concluez.",
              hint: "En a), développez (3k + 1)² et (3k + 2)² et faites apparaître 3 × (un entier) + un reste. En b), utilisez la contraposée de a). En c), écrivez p = 3m.",
              solution: [
                "a) Si p = 3k + 1 : p² = 9k² + 6k + 1 = 3(3k² + 2k) + 1, qui n'est pas un multiple de 3 (le reste est 1).",
                "Si p = 3k + 2 : p² = 9k² + 12k + 4 = 3(3k² + 4k + 1) + 1, qui n'est pas un multiple de 3 non plus.",
                "b) On a montré : « si p n'est pas multiple de 3, alors p² n'est pas multiple de 3 ». Sa contraposée, qui est donc vraie aussi, s'énonce : « si p² est multiple de 3, alors p est multiple de 3 ».",
                "c) Si √3 = p/q, alors en élevant au carré : 3 = p²/q², donc p² = 3q². Ainsi p² est multiple de 3, donc p aussi d'après b) : p = 3m avec m entier.",
                "En remplaçant : (3m)² = 3q², soit 9m² = 3q², donc q² = 3m². Ainsi q² est multiple de 3, donc q aussi.",
                "Conclusion : p et q seraient tous deux multiples de 3, ce qui contredit le fait que p/q est irréductible. L'hypothèse est fausse : √3 est irrationnel.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque nombre au plus petit ensemble auquel il appartient.",
            pairs: [
              { left: "√49", right: "ℕ" },
              { left: "-12", right: "ℤ, mais pas ℕ" },
              { left: "0,125", right: "𝔻, mais pas ℤ" },
              { left: "5/6", right: "ℚ, mais pas 𝔻" },
              { left: "√7", right: "ℝ, mais pas ℚ" },
            ],
          },
          quiz: [
            {
              q: "Quel est le plus petit ensemble qui contient -18/3 ?",
              options: ["ℕ", "𝔻", "ℚ", "ℤ"],
              answer: 3,
              why: "-18/3 = -6 est un entier négatif : il appartient à ℤ mais pas à ℕ.",
            },
            {
              q: "Lequel de ces nombres n'est pas décimal ?",
              options: ["3/4", "2/3", "7/25", "-9/5"],
              answer: 1,
              why: "3/4 = 0,75, 7/25 = 0,28 et -9/5 = -1,8 sont décimaux, alors que 2/3 = 0,666... a une écriture décimale infinie.",
            },
            {
              q: "Quelle écriture est correcte ?",
              options: ["ℚ ⊂ 𝔻", "ℤ ⊂ ℕ", "ℝ ⊂ ℚ", "𝔻 ⊂ ℚ"],
              answer: 3,
              why: "Tout décimal a/10ⁿ est un quotient de deux entiers, donc tout décimal est rationnel : 𝔻 ⊂ ℚ.",
            },
            {
              q: "Le développement décimal de 1/7 est :",
              options: ["fini", "infini et périodique", "infini et non périodique"],
              answer: 1,
              why: "1/7 est rationnel sans être décimal : son écriture est infinie et le bloc 142857 se répète.",
            },
            {
              q: "Pourquoi 1,4142 n'est-il pas égal à √2 ?",
              options: ["Parce que 1,4142² ≠ 2", "Parce que √2 est négatif", "Parce que 1,4142 n'est pas réel", "Parce que √2 est un entier"],
              answer: 0,
              why: "Le carré de √2 vaut exactement 2, alors que 1,4142² = 1,99996164 : 1,4142 n'est qu'une valeur approchée.",
            },
          ],
          trap: "Classer un nombre sans le simplifier : 12/4 = 3 est un entier naturel et 3/8 = 0,375 est un décimal, même s'ils sont écrits sous forme de fraction. Autre erreur : prendre la valeur affichée par la calculatrice pour la valeur exacte de √2 ou de π.",
          method: "Pour classer un nombre, simplifiez-le d'abord (racines carrées parfaites, fractions), puis posez-vous les questions dans l'ordre : est-ce un entier positif ? un entier ? un nombre à écriture décimale finie ? un quotient d'entiers ? Le premier « oui » donne le plus petit ensemble.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'intervalles',
          title: 'Intervalles, réunion et intersection',
          minutes: 25,
          objectives: [
            "Représenter un intervalle sur une droite graduée et le noter avec des crochets.",
            "Traduire une inégalité ou un encadrement par l'appartenance à un intervalle, et inversement.",
            "Déterminer l'intersection et la réunion de deux intervalles.",
          ],
          course: [
            {
              heading: "Les intervalles bornés",
              paragraphs: [
                "Soient a et b deux réels avec a < b. L'intervalle fermé [a ; b] est l'ensemble des réels x tels que a ≤ x ≤ b. Les nombres a et b sont les bornes de l'intervalle ; ici, elles appartiennent à l'intervalle. Par exemple, [2 ; 5] contient 2, 3,7, √10 et 5.",
                "On peut exclure une borne en tournant le crochet vers l'extérieur. L'intervalle ouvert ]a ; b[ est l'ensemble des réels x tels que a < x < b ; on définit de même [a ; b[ (a ≤ x < b) et ]a ; b] (a < x ≤ b). Ainsi 5 ∉ [2 ; 5[ mais 4,999 ∈ [2 ; 5[. Retenez l'image : un crochet tourné vers le nombre « l'attrape », un crochet tourné à l'opposé le laisse dehors.",
                "Sur une droite graduée, on colorie la partie de la droite qui correspond à l'intervalle et on dessine les crochets aux bornes, dans le bon sens. En France, on sépare les bornes par un point-virgule, car la virgule sert à écrire les décimaux : [1,5 ; 3] ne laisse aucune ambiguïté.",
              ],
              box: { label: "Définition", text: "Pour a < b : x ∈ [a ; b] ⇔ a ≤ x ≤ b ; x ∈ ]a ; b[ ⇔ a < x < b ; x ∈ [a ; b[ ⇔ a ≤ x < b ; x ∈ ]a ; b] ⇔ a < x ≤ b." },
            },
            {
              heading: "Les intervalles non bornés",
              paragraphs: [
                "Pour décrire tous les réels supérieurs ou égaux à a, on utilise le symbole +∞ (« plus l'infini ») : x ≥ a se traduit par x ∈ [a ; +∞[ et x > a par x ∈ ]a ; +∞[. De même, x ≤ b se traduit par x ∈ ]-∞ ; b] et x < b par x ∈ ]-∞ ; b[.",
                "Les symboles +∞ et -∞ ne sont pas des nombres : aucun réel x ne les atteint. Du côté de l'infini, le crochet est donc toujours ouvert. L'ensemble de tous les réels s'écrit ℝ = ]-∞ ; +∞[. Par exemple, « la température est strictement positive » se traduit par T ∈ ]0 ; +∞[.",
              ],
              box: { label: "À retenir", text: "x ≥ a ⇔ x ∈ [a ; +∞[ ; x > a ⇔ x ∈ ]a ; +∞[ ; x ≤ b ⇔ x ∈ ]-∞ ; b] ; x < b ⇔ x ∈ ]-∞ ; b[. Le crochet est toujours ouvert du côté de +∞ ou de -∞." },
            },
            {
              heading: "Intersection et réunion",
              paragraphs: [
                "L'intersection de deux ensembles A et B, notée A ∩ B (lire « A inter B »), est l'ensemble des éléments qui appartiennent à A et à B. La réunion, notée A ∪ B (lire « A union B »), est l'ensemble des éléments qui appartiennent à A ou à B, c'est-à-dire à au moins l'un des deux. Le « et » correspond à ∩, le « ou » à ∪.",
                "Exemple : I = [-2 ; 3] et J = ]1 ; 6]. En représentant I et J sur une même droite graduée, on lit I ∩ J = ]1 ; 3] (la partie coloriée deux fois) et I ∪ J = [-2 ; 6] (tout ce qui est colorié au moins une fois). On contrôle les bornes : 1 n'est pas dans J, donc il n'est pas dans I ∩ J ; 3 est dans I et dans J, donc 3 ∈ I ∩ J.",
                "Deux intervalles peuvent n'avoir aucun élément commun : [0 ; 1] ∩ [2 ; 5] = ∅, où ∅ désigne l'ensemble vide. Leur réunion [0 ; 1] ∪ [2 ; 5] n'est pas un intervalle, car il y a un « trou » entre 1 et 2 ; on la laisse écrite sous cette forme.",
              ],
              box: { label: "Définition", text: "A ∩ B : éléments communs à A et à B. A ∪ B : éléments de A ou de B (au moins de l'un des deux). ∅ désigne l'ensemble vide." },
            },
            {
              heading: "Encadrements et valeurs approchées",
              paragraphs: [
                "Un encadrement d'un réel par deux nombres revient à dire qu'il appartient à un intervalle. Ainsi 3,14 < π < 3,15 s'écrit π ∈ ]3,14 ; 3,15[ : c'est un encadrement d'amplitude 0,01, c'est-à-dire au centième. L'amplitude de l'intervalle [a ; b] est la différence b - a.",
                "Le centre de l'intervalle [a ; b] est le milieu de ses bornes, (a + b)/2. Par exemple, l'intervalle [2,5 ; 3,5] a pour centre 3 et pour amplitude 1 : il contient tous les réels situés à une distance au plus 0,5 de 3. Cette idée de distance au centre sera reprise avec la valeur absolue.",
              ],
            },
          ],
          keyPoints: [
            "[a ; b] : a ≤ x ≤ b ; ]a ; b[ : a < x < b ; le crochet tourné vers le nombre l'inclut.",
            "Du côté de +∞ ou -∞, le crochet est toujours ouvert ; ℝ = ]-∞ ; +∞[.",
            "A ∩ B (« et ») : ce qui est commun aux deux ; A ∪ B (« ou ») : ce qui est dans au moins l'un des deux.",
            "∅ est l'ensemble vide ; une réunion d'intervalles disjoints n'est pas un intervalle.",
            "On représente les intervalles sur une même droite graduée, puis on contrôle chaque borne.",
          ],
          example: {
            statement: "On donne I = ]-3 ; 4] et J = [1 ; +∞[. a) Traduisez x ∈ I et x ∈ J par des inégalités. b) Déterminez I ∩ J et I ∪ J.",
            solution: [
              "a) x ∈ I ⇔ -3 < x ≤ 4 et x ∈ J ⇔ x ≥ 1.",
              "b) On représente I et J sur une même droite graduée : I va de -3 (exclu) à 4 (inclus), J part de 1 (inclus) et s'étend jusqu'à +∞.",
              "La partie commune va de 1 à 4. Contrôle des bornes : 1 appartient à I et à J, 4 appartient à I et à J. Donc I ∩ J = [1 ; 4].",
              "La réunion commence à -3, qui n'appartient ni à I ni à J, et s'étend jusqu'à +∞, sans trou puisque les deux intervalles se chevauchent. Donc I ∪ J = ]-3 ; +∞[.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez par un intervalle : a) -1 ≤ x < 5 ; b) x > 2 ; c) x ≤ -3. Traduisez par une ou deux inégalités : d) x ∈ ]0 ; 7] ; e) x ∈ ]-∞ ; 4[.",
              hint: "Une inégalité large (≤ ou ≥) donne un crochet fermé, une inégalité stricte (< ou >) un crochet ouvert.",
              solution: [
                "a) -1 ≤ x < 5 ⇔ x ∈ [-1 ; 5[.",
                "b) x > 2 ⇔ x ∈ ]2 ; +∞[.",
                "c) x ≤ -3 ⇔ x ∈ ]-∞ ; -3].",
                "d) x ∈ ]0 ; 7] ⇔ 0 < x ≤ 7.",
                "e) x ∈ ]-∞ ; 4[ ⇔ x < 4.",
              ],
            },
            {
              level: 2,
              statement: "On donne A = [-5 ; 2[, B = ]-1 ; 6] et C = [3 ; +∞[. Déterminez A ∩ B, A ∪ B, A ∩ C, B ∩ C et B ∪ C.",
              hint: "Représentez les trois intervalles l'un au-dessus de l'autre sur une même droite graduée, puis traitez les bornes une par une.",
              solution: [
                "A ∩ B : la partie commune va de -1 (exclu, car -1 ∉ B) à 2 (exclu, car 2 ∉ A). Donc A ∩ B = ]-1 ; 2[.",
                "A ∪ B : elle va de -5 (inclus dans A) à 6 (inclus dans B), sans trou. Donc A ∪ B = [-5 ; 6].",
                "A ∩ C : tout élément de A est inférieur à 2, tout élément de C est supérieur ou égal à 3. Donc A ∩ C = ∅.",
                "B ∩ C : la partie commune va de 3 (inclus dans B et dans C) à 6 (inclus dans B et dans C). Donc B ∩ C = [3 ; 6].",
                "B ∪ C : elle va de -1 (exclu) jusqu'à +∞. Donc B ∪ C = ]-1 ; +∞[.",
              ],
            },
            {
              level: 3,
              statement: "a) Écrivez l'ensemble des réels x tels que -1 ≤ x < 4 comme l'intersection de deux intervalles non bornés. b) Écrivez l'ensemble des réels qui n'appartiennent pas à [-1 ; 4[ comme une réunion de deux intervalles. c) Déterminez [-3 ; 2] ∩ [-1 ; 4[, puis l'intersection de [-3 ; 2] avec l'ensemble trouvé en b).",
              hint: "-1 ≤ x < 4 signifie « x ≥ -1 et x < 4 ». Un réel n'est pas dans [-1 ; 4[ s'il est strictement inférieur à -1 ou supérieur ou égal à 4.",
              solution: [
                "a) -1 ≤ x < 4 ⇔ (x ≥ -1 et x < 4) ⇔ x ∈ [-1 ; +∞[ ∩ ]-∞ ; 4[.",
                "b) x ∉ [-1 ; 4[ ⇔ (x < -1 ou x ≥ 4). L'ensemble cherché est ]-∞ ; -1[ ∪ [4 ; +∞[.",
                "c) [-3 ; 2] ∩ [-1 ; 4[ : la partie commune va de -1 (inclus dans les deux) à 2 (inclus dans les deux). Résultat : [-1 ; 2].",
                "Ensuite, un réel de [-3 ; 2] est inférieur ou égal à 2, donc il ne peut pas appartenir à [4 ; +∞[ : seule la partie ]-∞ ; -1[ intervient.",
                "[-3 ; 2] ∩ ]-∞ ; -1[ = [-3 ; -1[ (on garde -3, on exclut -1).",
                "Contrôle : [-3 ; -1[ ∪ [-1 ; 2] = [-3 ; 2], ce qui est cohérent, car chaque réel de [-3 ; 2] est soit dans [-1 ; 4[, soit en dehors.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les intervalles.",
            statements: [
              { text: "3 ∈ ]3 ; 7]", true: false, why: "Le crochet est tourné vers l'extérieur en 3 : la borne 3 est exclue." },
              { text: "[2 ; 5] ∩ [4 ; 9] = [4 ; 5]", true: true, why: "Les réels communs aux deux intervalles vont de 4 à 5, bornes comprises." },
              { text: "On peut écrire [1 ; +∞]", true: false, why: "+∞ n'est pas un nombre : le crochet est toujours ouvert de ce côté, on écrit [1 ; +∞[." },
              { text: "]-∞ ; 0[ ∪ ]0 ; +∞[ = ℝ", true: false, why: "Le nombre 0 n'appartient à aucun des deux intervalles : la réunion est ℝ privé de 0." },
              { text: "-2,5 ∈ [-3 ; -2]", true: true, why: "On a bien -3 ≤ -2,5 ≤ -2." },
              { text: "[0 ; 1] ∪ [1 ; 2] = [0 ; 2]", true: true, why: "Les deux intervalles se touchent en 1, qui appartient aux deux : il n'y a pas de trou." },
              { text: "x > 4 se traduit par x ∈ [4 ; +∞[", true: false, why: "L'inégalité est stricte : 4 est exclu, on écrit ]4 ; +∞[." },
            ],
          },
          quiz: [
            {
              q: "Quel intervalle correspond à -2 < x ≤ 3 ?",
              options: ["[-2 ; 3[", "]-2 ; 3[", "[-2 ; 3]", "]-2 ; 3]"],
              answer: 3,
              why: "-2 est exclu (inégalité stricte, crochet ouvert) et 3 est inclus (inégalité large, crochet fermé).",
            },
            {
              q: "Que vaut [0 ; 6] ∩ ]4 ; 10] ?",
              options: ["[0 ; 10]", "]4 ; 6]", "[4 ; 6]", "∅"],
              answer: 1,
              why: "Les réels communs sont strictement supérieurs à 4 (4 ∉ ]4 ; 10]) et inférieurs ou égaux à 6.",
            },
            {
              q: "Que vaut ]-∞ ; 2] ∪ [-1 ; 5[ ?",
              options: ["]-∞ ; 5[", "[-1 ; 2]", "]-∞ ; 5]", "ℝ"],
              answer: 0,
              why: "Les deux intervalles se chevauchent ; la réunion part de -∞ et s'arrête à 5, exclu car 5 ∉ [-1 ; 5[.",
            },
            {
              q: "Lequel de ces nombres appartient à ]-1 ; 0[ ?",
              options: ["-1", "0", "-0,5", "-1,05"],
              answer: 2,
              why: "-0,5 est strictement compris entre -1 et 0 ; -1 et 0 sont exclus, et -1,05 est inférieur à -1.",
            },
            {
              q: "Quel est le centre de l'intervalle [3 ; 11] ?",
              options: ["4", "8", "14", "7"],
              answer: 3,
              why: "Le centre est le milieu des bornes : (3 + 11)/2 = 7.",
            },
          ],
          trap: "Fermer le crochet du côté de l'infini, en écrivant [2 ; +∞], ou mal orienter un crochet pour une inégalité stricte : x > 4 donne ]4 ; +∞[. Autre confusion fréquente : prendre l'intersection (« et ») pour la réunion (« ou »).",
          method: "Représentez toujours les intervalles sur une même droite graduée, l'un au-dessus de l'autre, avec des couleurs différentes : l'intersection est la partie coloriée deux fois, la réunion tout ce qui est colorié au moins une fois. Contrôlez ensuite chaque borne : appartient-elle aux deux intervalles, à un seul, à aucun ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'implication-quantificateurs',
          title: 'Implication, contraposée et quantificateurs',
          minutes: 30,
          objectives: [
            "Formuler une implication, sa réciproque et sa contraposée, et reconnaître une équivalence.",
            "Utiliser les quantificateurs « pour tout » et « il existe ».",
            "Réfuter une proposition universelle à l'aide d'un contre-exemple.",
            "Distinguer condition nécessaire et condition suffisante.",
          ],
          course: [
            {
              heading: "Propositions et implication",
              paragraphs: [
                "En mathématiques, une proposition est un énoncé qui est soit vrai, soit faux. « 7 est un nombre premier » est une proposition vraie ; « 10 est impair » est une proposition fausse. Une phrase comme « x est positif » dépend de x : elle devient une proposition dès que l'on fixe la valeur de x.",
                "Une implication est une proposition de la forme « si P, alors Q », notée P ⇒ Q. Elle affirme que chaque fois que P est vraie, Q est vraie aussi. Par exemple : « si un entier se termine par 0, alors il est pair » est une implication vraie. P s'appelle l'hypothèse et Q la conclusion.",
                "Une implication P ⇒ Q est fausse seulement s'il existe un cas où P est vraie et Q fausse. Ainsi « si x² = 4, alors x = 2 » est fausse, car pour x = -2, l'hypothèse x² = 4 est vraie et la conclusion x = 2 est fausse.",
              ],
              box: { label: "Définition", text: "L'implication P ⇒ Q (« si P, alors Q ») est vraie lorsque, dans tous les cas où P est vraie, Q est vraie. Elle est fausse s'il existe un cas où P est vraie et Q fausse." },
            },
            {
              heading: "Réciproque et équivalence",
              paragraphs: [
                "La réciproque de l'implication P ⇒ Q est l'implication Q ⇒ P : on échange l'hypothèse et la conclusion. Une implication vraie peut avoir une réciproque fausse. « Si un entier se termine par 0, alors il est pair » est vraie, mais sa réciproque « si un entier est pair, alors il se termine par 0 » est fausse : 12 est pair et se termine par 2.",
                "Lorsque P ⇒ Q et sa réciproque Q ⇒ P sont toutes les deux vraies, on dit que P et Q sont équivalentes et on écrit P ⇔ Q, qui se lit « P si et seulement si Q ». Par exemple, vous connaissez depuis le collège le théorème de Pythagore et sa réciproque : le triangle ABC est rectangle en A si et seulement si BC² = AB² + AC².",
              ],
            },
            {
              heading: "La contraposée",
              paragraphs: [
                "La contraposée de l'implication P ⇒ Q est l'implication « si non Q, alors non P », où « non P » désigne la négation de P. Par exemple, la contraposée de « s'il pleut, alors le sol est mouillé » est « si le sol n'est pas mouillé, alors il ne pleut pas ».",
                "Une implication et sa contraposée sont toujours vraies ou fausses en même temps. On utilise la contraposée quand elle est plus facile à démontrer. Exemple : pour démontrer « si n² est pair, alors n est pair », on démontre la contraposée « si n est impair, alors n² est impair » : si n = 2k + 1 avec k entier, alors n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, qui est impair.",
                "La contraposée du théorème de Pythagore sert à prouver qu'un triangle n'est pas rectangle : si BC² ≠ AB² + AC², alors le triangle ABC n'est pas rectangle en A.",
              ],
              box: { label: "Propriété", text: "Une implication P ⇒ Q et sa contraposée (non Q) ⇒ (non P) ont toujours la même valeur de vérité. Ce n'est pas le cas de la réciproque Q ⇒ P." },
            },
            {
              heading: "Quantificateurs et contre-exemple",
              paragraphs: [
                "Le quantificateur universel « pour tout » (ou « quel que soit »), noté ∀, indique qu'une propriété est vraie pour tous les éléments d'un ensemble : « pour tout réel x, x² ≥ 0 » est vraie. Le quantificateur existentiel « il existe », noté ∃, indique qu'elle est vraie pour au moins un élément : « il existe un réel x tel que x² = 2 » est vraie, avec x = √2.",
                "Pour démontrer qu'une proposition « pour tout x, P(x) » est fausse, il suffit d'un contre-exemple, c'est-à-dire d'une valeur de x pour laquelle P(x) est fausse. Ainsi « pour tout réel x, x² ≥ x » est fausse : pour x = 0,5, on a x² = 0,25 < 0,5. En revanche, des exemples, même nombreux, ne démontrent jamais une propriété « pour tout ».",
                "La négation de « pour tout x, P(x) » est « il existe x tel que non P(x) ». Par exemple, la négation de « tous les élèves de la classe ont un stylo » est « au moins un élève de la classe n'a pas de stylo », et non « aucun élève n'a de stylo ».",
              ],
            },
            {
              heading: "Condition nécessaire, condition suffisante",
              paragraphs: [
                "Lorsque l'implication P ⇒ Q est vraie, on dit que P est une condition suffisante pour Q (il suffit que P soit vraie pour que Q le soit) et que Q est une condition nécessaire pour P (il faut que Q soit vraie pour que P puisse l'être). Lorsque P ⇔ Q, P est une condition nécessaire et suffisante pour Q.",
                "Exemple : « être un carré » ⇒ « être un rectangle ». Être un carré est une condition suffisante pour être un rectangle, mais pas nécessaire (un rectangle de 2 cm sur 5 cm n'est pas un carré). Être un rectangle est une condition nécessaire pour être un carré, mais pas suffisante.",
              ],
              box: { label: "À retenir", text: "Si P ⇒ Q est vraie : P est une condition suffisante pour Q, et Q est une condition nécessaire pour P. Si P ⇔ Q : condition nécessaire et suffisante." },
            },
          ],
          keyPoints: [
            "P ⇒ Q est fausse seulement s'il existe un cas où P est vraie et Q fausse.",
            "Réciproque de P ⇒ Q : Q ⇒ P, qui peut être fausse même si P ⇒ Q est vraie.",
            "Contraposée de P ⇒ Q : (non Q) ⇒ (non P), toujours de même valeur de vérité que P ⇒ Q.",
            "P ⇔ Q : l'implication et sa réciproque sont vraies (« si et seulement si »).",
            "Un seul contre-exemple suffit pour réfuter un « pour tout » ; des exemples ne le démontrent pas.",
            "Négation de « pour tout x, P(x) » : « il existe x tel que non P(x) ».",
            "Si P ⇒ Q : P est suffisante pour Q, Q est nécessaire pour P.",
          ],
          example: {
            statement: "On considère la proposition : « Pour tout réel x, si x² = 9, alors x = 3. » Est-elle vraie ? Énoncez sa réciproque et sa contraposée, et dites si elles sont vraies.",
            solution: [
              "On cherche un contre-exemple : pour x = -3, on a x² = 9 (l'hypothèse est vraie) mais x ≠ 3 (la conclusion est fausse). La proposition est donc fausse.",
              "Réciproque : « si x = 3, alors x² = 9 ». Elle est vraie, car 3² = 9.",
              "Contraposée : « si x ≠ 3, alors x² ≠ 9 ». Elle est fausse, avec le même contre-exemple x = -3 : x ≠ 3 mais x² = 9.",
              "On vérifie la cohérence : la proposition et sa contraposée sont bien toutes les deux fausses.",
              "Énoncé correct : pour tout réel x, x² = 9 ⇔ (x = 3 ou x = -3).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des implications suivantes, dites si elle est vraie, énoncez sa réciproque et dites si cette réciproque est vraie. a) « Si un quadrilatère est un rectangle, alors ses diagonales ont la même longueur. » b) « Pour tout réel x, si x = 2, alors x² = 4. »",
              hint: "Pour montrer qu'une réciproque est fausse, cherchez un contre-exemple : une figure ou un nombre qui vérifie la nouvelle hypothèse sans vérifier la nouvelle conclusion.",
              solution: [
                "a) L'implication est vraie : les diagonales d'un rectangle ont la même longueur (propriété vue au collège).",
                "Réciproque : « si les diagonales d'un quadrilatère ont la même longueur, alors c'est un rectangle ». Elle est fausse : un trapèze isocèle non rectangle a des diagonales de même longueur.",
                "b) L'implication est vraie : si x = 2, alors x² = 2² = 4.",
                "Réciproque : « si x² = 4, alors x = 2 ». Elle est fausse : pour x = -2, x² = 4 mais x ≠ 2.",
              ],
            },
            {
              level: 2,
              statement: "Dites si chaque proposition est vraie ou fausse, en justifiant par une démonstration ou un contre-exemple. a) Pour tout réel x, (x + 1)² = x² + 1. b) Il existe un réel x tel que (x + 1)² = x² + 1. c) Pour tout entier naturel n, n² + n est pair. d) Pour tout réel x non nul, x + 1/x ≥ 2.",
              hint: "Testez d'abord des valeurs simples (0, 1, -1). Pour c), factorisez n² + n et pensez à deux entiers consécutifs.",
              solution: [
                "a) Fausse. Contre-exemple : pour x = 1, (x + 1)² = 4 alors que x² + 1 = 2.",
                "b) Vraie. Pour x = 0 : (0 + 1)² = 1 et 0² + 1 = 1. Une seule valeur suffit pour un « il existe ».",
                "c) Vraie. n² + n = n(n + 1) est le produit de deux entiers consécutifs. L'un des deux est pair, donc le produit est pair.",
                "d) Fausse. Contre-exemple : pour x = -1, x + 1/x = -1 + (-1) = -2, qui n'est pas supérieur ou égal à 2.",
              ],
            },
            {
              level: 3,
              statement: "a) Soit n un entier. Démontrez par contraposée que si n² est impair, alors n est impair. b) Écrivez la négation de la proposition « pour tout entier naturel n, n² + 1 est un nombre premier », puis dites laquelle des deux est vraie. c) Pour un entier n, on considère P : « n est un multiple de 4 » et Q : « n est pair ». L'implication P ⇒ Q est-elle vraie ? Et Q ⇒ P ? Complétez alors avec « nécessaire » ou « suffisante » : « être pair est une condition ... pour être multiple de 4 ».",
              hint: "En a), la contraposée est « si n est pair, alors n² est pair » : écrivez n = 2k. En b), testez n = 0, 1, 2, 3.",
              solution: [
                "a) La contraposée est : « si n est pair, alors n² est pair ». Si n est pair, n = 2k avec k entier, donc n² = 4k² = 2 × (2k²), qui est pair.",
                "La contraposée est vraie, donc l'implication « si n² est impair, alors n est impair » est vraie.",
                "b) Négation : « il existe un entier naturel n tel que n² + 1 n'est pas un nombre premier ».",
                "On teste : n = 1 donne 2 (premier), n = 2 donne 5 (premier), n = 3 donne 10 = 2 × 5, qui n'est pas premier. La négation est donc vraie et la proposition de départ est fausse.",
                "c) P ⇒ Q est vraie : si n = 4k, alors n = 2 × (2k) est pair. Q ⇒ P est fausse : 6 est pair mais n'est pas un multiple de 4.",
                "Conclusion : être pair est une condition nécessaire (mais pas suffisante) pour être multiple de 4.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de logique à sa description.",
            pairs: [
              { left: "Implication « si P, alors Q »", right: "P ⇒ Q" },
              { left: "Réciproque de P ⇒ Q", right: "Q ⇒ P" },
              { left: "Contraposée de P ⇒ Q", right: "(non Q) ⇒ (non P)" },
              { left: "Équivalence", right: "P ⇒ Q et Q ⇒ P sont toutes deux vraies" },
              { left: "Contre-exemple à P ⇒ Q", right: "Un cas où P est vraie et Q fausse" },
              { left: "Quantificateur universel", right: "« Pour tout », noté ∀" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la contraposée de « s'il pleut, alors le sol est mouillé » ?",
              options: ["Si le sol est mouillé, alors il pleut", "Si le sol n'est pas mouillé, alors il ne pleut pas", "S'il ne pleut pas, alors le sol n'est pas du tout mouillé", "Il pleut et le sol n'est pas mouillé"],
              answer: 1,
              why: "La contraposée de P ⇒ Q est (non Q) ⇒ (non P) : on part de la négation de la conclusion.",
            },
            {
              q: "Pour démontrer qu'une proposition « pour tout x, P(x) » est fausse, il suffit :",
              options: ["de trouver un exemple où P(x) est vraie", "de tester dix valeurs de x", "de tracer une courbe", "de trouver un contre-exemple"],
              answer: 3,
              why: "Une seule valeur de x pour laquelle P(x) est fausse suffit à réfuter une proposition universelle.",
            },
            {
              q: "Laquelle de ces propositions est vraie ?",
              options: ["Pour tout réel x, x² > 0", "Il existe un réel x tel que x² = -1", "Pour tout réel x, x² ≥ 0", "Pour tout réel x, x² ≥ x"],
              answer: 2,
              why: "Un carré est toujours positif ou nul. La première est fausse pour x = 0, la quatrième pour x = 0,5, et aucun carré de réel ne vaut -1.",
            },
            {
              q: "Pour un entier, « être un multiple de 10 » est, pour « être pair », une condition :",
              options: ["suffisante mais pas nécessaire", "nécessaire mais pas suffisante", "nécessaire et suffisante", "ni nécessaire ni suffisante"],
              answer: 0,
              why: "Un multiple de 10 est toujours pair (suffisante), mais 4 est pair sans être multiple de 10 (pas nécessaire).",
            },
            {
              q: "Quelle est la négation de « tous les élèves de la classe ont un stylo » ?",
              options: ["Aucun élève n'a de stylo", "Au moins un élève n'a pas de stylo", "La moitié des élèves n'a pas de stylo", "Un seul élève a un stylo"],
              answer: 1,
              why: "La négation de « pour tout » est « il existe ... qui ne ... pas » : il suffit d'un élève sans stylo.",
            },
          ],
          trap: "Confondre une implication et sa réciproque : « si un entier se termine par 5, alors il est multiple de 5 » est vraie, mais « si un entier est multiple de 5, alors il se termine par 5 » est fausse (10). Autre erreur : croire que quelques exemples démontrent une propriété « pour tout ».",
          method: "Avant de démontrer une proposition « pour tout », cherchez rapidement un contre-exemple avec des valeurs simples (0, 1, -1, 0,5, un nombre négatif). Si vous n'en trouvez pas, démontrez dans le cas général ; si la démonstration directe bloque, essayez la contraposée.",
        },
      ],
    },

    /* ================================================================== */
    /* ARITHMÉTIQUE, PUISSANCES ET RACINES CARRÉES                          */
    /* ================================================================== */
    {
      id: 'arithmetique-calcul',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'multiples-diviseurs',
          title: 'Multiples, diviseurs et nombres premiers',
          minutes: 30,
          objectives: [
            "Reconnaître un multiple ou un diviseur d'un entier et utiliser les critères de divisibilité.",
            "Démontrer qu'une somme de multiples d'un entier a est un multiple de a, et raisonner sur les nombres pairs et impairs.",
            "Reconnaître un nombre premier et décomposer un entier en produit de facteurs premiers.",
            "Rendre une fraction irréductible à l'aide de la décomposition en facteurs premiers.",
          ],
          course: [
            {
              heading: "Multiples et diviseurs",
              paragraphs: [
                "Soient a et b deux entiers relatifs. On dit que a est un multiple de b s'il existe un entier relatif k tel que a = k × b. Lorsque b ≠ 0, on dit aussi que b est un diviseur de a, ou que b divise a. Par exemple, 42 = 6 × 7 : 42 est un multiple de 6 et de 7, et 6 et 7 sont des diviseurs de 42. De même, -15 = (-3) × 5 est un multiple de 5.",
                "Le nombre 0 est un multiple de tous les entiers, car 0 = 0 × b. Tout entier a est divisible par 1 et par lui-même. Les diviseurs positifs de 12 sont 1, 2, 3, 4, 6 et 12 : on les trouve en les associant par paires dont le produit vaut 12 (1 × 12, 2 × 6, 3 × 4).",
                "Les critères de divisibilité, vus au collège, évitent de poser les divisions. Un entier est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou 8 ; par 5 s'il se termine par 0 ou 5 ; par 10 s'il se termine par 0 ; par 3 si la somme de ses chiffres est un multiple de 3 ; par 9 si la somme de ses chiffres est un multiple de 9 ; par 4 si le nombre formé par ses deux derniers chiffres est un multiple de 4.",
              ],
              box: { label: "Définition", text: "a est un multiple de b s'il existe un entier k tel que a = k × b. Si b ≠ 0, on dit aussi que b est un diviseur de a (ou que b divise a)." },
            },
            {
              heading: "Nombres pairs, impairs et sommes de multiples",
              paragraphs: [
                "Un entier n est pair s'il est un multiple de 2, c'est-à-dire s'il s'écrit n = 2k avec k entier. Il est impair s'il s'écrit n = 2k + 1 avec k entier. Ces écritures permettent de démontrer des propriétés valables pour tous les entiers, et pas seulement de les vérifier sur des exemples.",
                "Propriété : si a et b sont deux multiples d'un entier c, alors a + b est aussi un multiple de c. Démonstration : a = k × c et b = k' × c avec k et k' entiers, donc a + b = k × c + k' × c = (k + k') × c, et k + k' est un entier. Par exemple, 35 et 56 sont des multiples de 7, donc 35 + 56 = 91 aussi (91 = 13 × 7).",
                "Propriété : le carré d'un nombre impair est impair. Démonstration : si n = 2k + 1, alors n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, qui est de la forme 2K + 1 avec K = 2k² + 2k entier. Sur le même modèle, on montre que la somme de deux nombres impairs est paire : (2k + 1) + (2k' + 1) = 2(k + k' + 1).",
              ],
              box: { label: "Propriété", text: "n pair ⇔ n = 2k ; n impair ⇔ n = 2k + 1 (k entier). La somme de deux multiples de c est un multiple de c. Le carré d'un nombre impair est impair." },
            },
            {
              heading: "Les nombres premiers",
              paragraphs: [
                "Un nombre premier est un entier naturel qui admet exactement deux diviseurs positifs distincts : 1 et lui-même. Les nombres premiers inférieurs à 50 sont 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 et 47. Le nombre 1 n'est pas premier, car il n'a qu'un seul diviseur positif. Le nombre 2 est le seul nombre premier pair.",
                "Pour savoir si un entier n ≥ 2 est premier, il suffit de tester sa divisibilité par les nombres premiers p tels que p² ≤ n. En effet, si n = a × b avec 1 < a ≤ b, alors a² ≤ a × b = n. Exemple : pour 97, on teste 2, 3, 5 et 7 (car 11² = 121 > 97) ; aucun ne divise 97, donc 97 est premier. En revanche, 91 = 7 × 13 n'est pas premier.",
              ],
              box: { label: "Définition", text: "Un nombre premier est un entier naturel ayant exactement deux diviseurs positifs : 1 et lui-même. 1 n'est pas premier ; 2 est le seul nombre premier pair." },
            },
            {
              heading: "Décomposition en facteurs premiers et fractions irréductibles",
              paragraphs: [
                "Tout entier naturel supérieur ou égal à 2 peut s'écrire comme un produit de nombres premiers, et cette décomposition est unique, à l'ordre des facteurs près (on l'admet). Pour l'obtenir, on divise successivement par les nombres premiers 2, 3, 5, 7... tant que c'est possible. Par exemple : 360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2³ × 45 = 2³ × 3 × 15 = 2³ × 3² × 5.",
                "Une fraction est irréductible lorsque son numérateur et son dénominateur n'ont pas d'autre diviseur positif commun que 1. Pour rendre une fraction irréductible, on décompose numérateur et dénominateur, puis on simplifie par tous les facteurs communs. Exemple : 84 = 2² × 3 × 7 et 126 = 2 × 3² × 7 ont en commun 2 × 3 × 7 = 42, donc 84/126 = (42 × 2)/(42 × 3) = 2/3.",
              ],
              box: { label: "Méthode", text: "Pour rendre a/b irréductible : décomposer a et b en produits de facteurs premiers, repérer les facteurs communs, puis diviser le numérateur et le dénominateur par leur produit." },
            },
          ],
          keyPoints: [
            "a est un multiple de b s'il existe un entier k tel que a = k × b ; b est alors un diviseur de a.",
            "Pair : n = 2k ; impair : n = 2k + 1, avec k entier.",
            "Une somme de multiples de c est un multiple de c ; le carré d'un impair est impair.",
            "Un nombre premier a exactement deux diviseurs positifs : 1 et lui-même ; 1 n'est pas premier.",
            "Pour tester n, on essaie les nombres premiers p tels que p² ≤ n.",
            "Tout entier n ≥ 2 se décompose de façon unique en produit de facteurs premiers : 360 = 2³ × 3² × 5.",
          ],
          example: {
            statement: "Décomposez 1 260 et 1 050 en produits de facteurs premiers, puis écrivez la fraction 1 260/1 050 sous forme irréductible.",
            solution: [
              "1 260 = 2 × 630 = 2 × 2 × 315. 315 se termine par 5 et la somme de ses chiffres vaut 9 : 315 = 3 × 105 = 3 × 3 × 35 = 3 × 3 × 5 × 7.",
              "Donc 1 260 = 2² × 3² × 5 × 7. Contrôle : 4 × 9 × 5 × 7 = 36 × 35 = 1 260.",
              "1 050 = 2 × 525 = 2 × 3 × 175 = 2 × 3 × 5 × 35 = 2 × 3 × 5 × 5 × 7, donc 1 050 = 2 × 3 × 5² × 7. Contrôle : 2 × 3 × 25 × 7 = 150 × 7 = 1 050.",
              "Les facteurs communs sont 2, 3, 5 et 7 (une fois chacun) : leur produit vaut 2 × 3 × 5 × 7 = 210.",
              "1 260 = 210 × 6 et 1 050 = 210 × 5, donc 1 260/1 050 = 6/5.",
              "6 = 2 × 3 et 5 n'ont aucun facteur premier commun : la fraction irréductible est 6/5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Le nombre 1 518 est-il divisible par 2, par 3, par 4, par 5, par 9, par 10 ? Justifiez avec les critères de divisibilité. b) 1 518 est-il un nombre premier ?",
              hint: "Regardez le chiffre des unités, la somme des chiffres et le nombre formé par les deux derniers chiffres.",
              solution: [
                "Le chiffre des unités est 8 : 1 518 est divisible par 2, mais pas par 5 ni par 10.",
                "La somme des chiffres vaut 1 + 5 + 1 + 8 = 15 : c'est un multiple de 3 mais pas de 9. Donc 1 518 est divisible par 3, mais pas par 9.",
                "Les deux derniers chiffres forment 18, qui n'est pas un multiple de 4 : 1 518 n'est pas divisible par 4.",
                "b) 1 518 a d'autres diviseurs que 1 et lui-même (par exemple 2 et 3), donc il n'est pas premier. On a d'ailleurs 1 518 = 2 × 3 × 11 × 23.",
              ],
            },
            {
              level: 2,
              statement: "a) Décomposez 252 et 588 en produits de facteurs premiers. b) Écrivez la fraction 252/588 sous forme irréductible. c) Le nombre 211 est-il premier ? Justifiez.",
              hint: "Pour c), il suffit de tester les nombres premiers dont le carré est inférieur ou égal à 211.",
              solution: [
                "a) 252 = 2 × 126 = 2 × 2 × 63 = 2² × 9 × 7 = 2² × 3² × 7. Contrôle : 4 × 9 × 7 = 252.",
                "588 = 2 × 294 = 2 × 2 × 147 = 2² × 3 × 49 = 2² × 3 × 7². Contrôle : 4 × 3 × 49 = 588.",
                "b) Facteurs communs : 2², 3 et 7, de produit 4 × 3 × 7 = 84. Or 252 = 84 × 3 et 588 = 84 × 7, donc 252/588 = 3/7.",
                "c) On a 14² = 196 ≤ 211 < 225 = 15², donc on teste les nombres premiers 2, 3, 5, 7, 11 et 13.",
                "211 est impair ; la somme de ses chiffres vaut 4, donc il n'est pas divisible par 3 ; il ne se termine ni par 0 ni par 5 ; 7 × 30 = 210, 11 × 19 = 209 et 13 × 16 = 208, donc ni 7, ni 11, ni 13 ne divisent 211.",
                "Conclusion : 211 est un nombre premier.",
              ],
            },
            {
              level: 3,
              statement: "a) Démontrez que la somme de trois entiers consécutifs est toujours un multiple de 3. b) Soit n un entier impair, que l'on écrit n = 2k + 1 avec k entier. Montrez que n² - 1 = 4k(k + 1). c) Justifiez que k(k + 1) est pair, puis déduisez-en que n² - 1 est un multiple de 8. d) Vérifiez ce résultat pour n = 7 et n = 11.",
              hint: "Notez n, n + 1 et n + 2 les trois entiers consécutifs. Pour c), parmi deux entiers consécutifs, l'un est forcément pair.",
              solution: [
                "a) Trois entiers consécutifs s'écrivent n, n + 1 et n + 2 avec n entier. Leur somme vaut 3n + 3 = 3(n + 1), qui est un multiple de 3.",
                "b) n² - 1 = (2k + 1)² - 1 = 4k² + 4k + 1 - 1 = 4k² + 4k = 4k(k + 1).",
                "c) k et k + 1 sont deux entiers consécutifs : l'un des deux est pair, donc leur produit est pair. On peut écrire k(k + 1) = 2m avec m entier.",
                "Alors n² - 1 = 4 × 2m = 8m : n² - 1 est un multiple de 8.",
                "d) Pour n = 7 : 49 - 1 = 48 = 8 × 6. Pour n = 11 : 121 - 1 = 120 = 8 × 15. Le résultat est vérifié.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la décomposition de 180 en produit de facteurs premiers.",
            items: [
              "180 est pair : 180 = 2 × 90",
              "90 est pair : 90 = 2 × 45",
              "45 n'est pas pair, mais la somme de ses chiffres vaut 9 : 45 = 3 × 15",
              "15 = 3 × 5",
              "5 est premier : on s'arrête",
              "Conclusion : 180 = 2² × 3² × 5",
            ],
          },
          quiz: [
            {
              q: "Lequel de ces nombres est premier ?",
              options: ["51", "57", "87", "59"],
              answer: 3,
              why: "51 = 3 × 17, 57 = 3 × 19 et 87 = 3 × 29, alors que 59 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (et 8² = 64 > 59).",
            },
            {
              q: "Quelle est la décomposition en facteurs premiers de 72 ?",
              options: ["2² × 3³", "2³ × 3²", "8 × 9", "2 × 36"],
              answer: 1,
              why: "72 = 8 × 9 = 2³ × 3². Les écritures 8 × 9 et 2 × 36 sont justes mais ne sont pas des produits de facteurs premiers.",
            },
            {
              q: "Le nombre 4 725 est divisible par :",
              options: ["2", "4", "9", "10"],
              answer: 2,
              why: "La somme des chiffres vaut 4 + 7 + 2 + 5 = 18, multiple de 9. Le nombre est impair, donc non divisible par 2, 4 ou 10.",
            },
            {
              q: "Si a = 2k + 1 avec k entier, alors a² est :",
              options: ["toujours pair", "pair ou impair selon k", "un multiple de 4", "toujours impair"],
              answer: 3,
              why: "a² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 : le carré d'un nombre impair est impair.",
            },
            {
              q: "Quelle est la forme irréductible de 45/75 ?",
              options: ["3/5", "9/15", "15/25", "5/3"],
              answer: 0,
              why: "45 = 3² × 5 et 75 = 3 × 5² ont en commun 3 × 5 = 15 ; 45/75 = (15 × 3)/(15 × 5) = 3/5.",
            },
          ],
          trap: "Croire que 1 est un nombre premier (il n'a qu'un seul diviseur positif), ou s'arrêter trop tôt dans une simplification : 18/24 = 9/12 n'est pas encore irréductible, car 9/12 = 3/4.",
          method: "Pour démontrer une propriété sur les entiers, traduisez d'abord les mots en écritures : « pair » devient 2k, « impair » devient 2k + 1, « multiple de a » devient a × k, avec k entier. Puis calculez jusqu'à faire apparaître la forme voulue, par exemple 2 × (un entier) + 1.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'puissances',
          title: 'Calculer avec les puissances',
          minutes: 25,
          objectives: [
            "Calculer avec des puissances d'exposant entier relatif en utilisant les règles de calcul.",
            "Simplifier une expression contenant des puissances.",
            "Écrire un nombre en notation scientifique et l'utiliser pour calculer ou estimer un ordre de grandeur.",
          ],
          course: [
            {
              heading: "Puissances d'exposant entier relatif",
              paragraphs: [
                "Pour un réel a et un entier naturel n ≥ 1, aⁿ désigne le produit de n facteurs égaux à a : aⁿ = a × a × ... × a. Le nombre n est l'exposant. Ainsi 2⁵ = 2 × 2 × 2 × 2 × 2 = 32 et a¹ = a. Par convention, pour a ≠ 0, a⁰ = 1.",
                "Pour a ≠ 0 et n entier naturel, on pose a⁻ⁿ = 1/aⁿ : a⁻ⁿ est l'inverse de aⁿ. Par exemple 2⁻³ = 1/2³ = 1/8 = 0,125 et 10⁻² = 1/100 = 0,01. Un exposant négatif ne rend pas le nombre négatif : 2⁻³ est positif.",
                "Attention au rôle des parenthèses : (-3)² = (-3) × (-3) = 9, alors que -3² = -(3 × 3) = -9, car l'exposant ne porte que sur le nombre écrit juste avant lui. Une puissance d'un nombre négatif est positive si l'exposant est pair et négative s'il est impair : (-2)⁴ = 16 et (-2)³ = -8.",
              ],
              box: { label: "Définition", text: "aⁿ = a × a × ... × a (n facteurs) ; a⁰ = 1 et a⁻ⁿ = 1/aⁿ pour a ≠ 0. Par exemple 3⁴ = 81, 5⁰ = 1, 10⁻³ = 0,001." },
            },
            {
              heading: "Les règles de calcul",
              paragraphs: [
                "Pour a et b non nuls et m, n entiers relatifs : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ/aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ (on multiplie les exposants) ; (a × b)ⁿ = aⁿ × bⁿ ; (a/b)ⁿ = aⁿ/bⁿ. Ces règles se comprennent en comptant les facteurs : 2³ × 2⁴ = (2 × 2 × 2) × (2 × 2 × 2 × 2) = 2⁷.",
                "Exemples : 5⁶/5⁴ = 5² = 25 ; (3²)³ = 3⁶ = 729 ; 10⁻² × 10⁵ = 10³ ; 2³ × 5³ = (2 × 5)³ = 10³ = 1 000 ; 7⁴/7⁶ = 7⁻² = 1/49.",
                "Il n'existe aucune règle pour une somme ou une différence de puissances : 2³ + 2⁴ = 8 + 16 = 24, ce qui n'est pas 2⁷ = 128. On peut en revanche factoriser : 2³ + 2⁴ = 2³ × (1 + 2) = 3 × 2³.",
              ],
              box: { label: "Règle", text: "aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ/aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ ; (ab)ⁿ = aⁿbⁿ ; (a/b)ⁿ = aⁿ/bⁿ. Aucune règle pour aᵐ + aⁿ." },
            },
            {
              heading: "Puissances de 10 et notation scientifique",
              paragraphs: [
                "Pour n entier naturel, 10ⁿ s'écrit avec un 1 suivi de n zéros (10⁶ = 1 000 000) et 10⁻ⁿ s'écrit 0,0...01 avec le chiffre 1 en n-ième position après la virgule (10⁻⁴ = 0,0001). Multiplier par 10ⁿ décale la virgule de n rangs vers la droite, multiplier par 10⁻ⁿ la décale de n rangs vers la gauche.",
                "La notation scientifique d'un nombre décimal positif est son écriture sous la forme a × 10ⁿ, avec 1 ≤ a < 10 et n entier relatif. Ainsi 345 000 = 3,45 × 10⁵ et 0,000 72 = 7,2 × 10⁻⁴. Pour un nombre négatif, on écrit l'opposé : -0,005 = -5 × 10⁻³. La puissance de 10 donne l'ordre de grandeur.",
                "Cette écriture est indispensable en sciences : la vitesse de la lumière dans le vide vaut environ 3 × 10⁸ m/s et la masse d'un électron environ 9,1 × 10⁻³¹ kg. Les préfixes des unités correspondent aussi à des puissances de 10 : kilo (10³), méga (10⁶), giga (10⁹), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹).",
              ],
              box: { label: "Définition", text: "Notation scientifique d'un nombre positif : a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif. Exemples : 52 000 = 5,2 × 10⁴ et 0,003 = 3 × 10⁻³." },
            },
          ],
          keyPoints: [
            "a⁰ = 1 et a⁻ⁿ = 1/aⁿ (a ≠ 0) ; un exposant négatif ne rend pas le nombre négatif.",
            "aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ.",
            "(ab)ⁿ = aⁿbⁿ et (a/b)ⁿ = aⁿ/bⁿ ; pas de règle pour une somme de puissances.",
            "(-3)² = 9 mais -3² = -9 : l'exposant porte sur ce qui est juste avant lui.",
            "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10.",
          ],
          example: {
            statement: "Calculez et donnez le résultat sous la forme la plus simple : A = (2⁵ × 2⁻³)/2⁴ ; B = (3² × 5)³/(3⁴ × 5²) ; C = (6 × 10⁵ × 4 × 10⁻²)/(8 × 10⁻³), en notation scientifique.",
            solution: [
              "A : au numérateur, 2⁵ × 2⁻³ = 2⁵⁻³ = 2². Donc A = 2²/2⁴ = 2²⁻⁴ = 2⁻² = 1/4 = 0,25.",
              "B : (3² × 5)³ = (3²)³ × 5³ = 3⁶ × 5³. Donc B = (3⁶ × 5³)/(3⁴ × 5²) = 3⁶⁻⁴ × 5³⁻² = 3² × 5 = 45.",
              "C : on regroupe les nombres et les puissances de 10. C = (6 × 4)/8 × (10⁵ × 10⁻²)/10⁻³.",
              "(6 × 4)/8 = 24/8 = 3 et (10⁵ × 10⁻²)/10⁻³ = 10³/10⁻³ = 10³⁺³ = 10⁶.",
              "Donc C = 3 × 10⁶, qui est bien en notation scientifique puisque 1 ≤ 3 < 10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez sous la forme d'une seule puissance, puis calculez si possible : a) 7³ × 7⁵ ; b) 4⁹/4⁶ ; c) (2⁻³)² ; d) 10⁻⁴ × 10⁷ ; e) 3⁵ × 3⁻⁵ ; f) 5² × 2².",
              hint: "Même base : additionnez ou soustrayez les exposants. Même exposant et bases différentes : (ab)ⁿ = aⁿbⁿ.",
              solution: [
                "a) 7³ × 7⁵ = 7³⁺⁵ = 7⁸.",
                "b) 4⁹/4⁶ = 4⁹⁻⁶ = 4³ = 64.",
                "c) (2⁻³)² = 2⁻⁶ = 1/64 (on multiplie les exposants : -3 × 2 = -6).",
                "d) 10⁻⁴ × 10⁷ = 10⁻⁴⁺⁷ = 10³ = 1 000.",
                "e) 3⁵ × 3⁻⁵ = 3⁰ = 1.",
                "f) 5² × 2² = (5 × 2)² = 10² = 100.",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez en notation scientifique : 0,000 052 ; 47 300 000 ; 52 × 10⁴ ; 0,8 × 10⁻³. b) Calculez D = (5 × 10⁻³ × 1,2 × 10⁸)/(3 × 10²) et donnez le résultat en notation scientifique, puis en écriture décimale.",
              hint: "Déplacez la virgule pour obtenir un nombre entre 1 et 10, et compensez avec l'exposant de 10. Pour D, regroupez les nombres d'un côté et les puissances de 10 de l'autre.",
              solution: [
                "0,000 052 = 5,2 × 10⁻⁵ (la virgule se déplace de 5 rangs vers la droite).",
                "47 300 000 = 4,73 × 10⁷.",
                "52 × 10⁴ = 5,2 × 10¹ × 10⁴ = 5,2 × 10⁵.",
                "0,8 × 10⁻³ = 8 × 10⁻¹ × 10⁻³ = 8 × 10⁻⁴.",
                "b) D = (5 × 1,2)/3 × (10⁻³ × 10⁸)/10² = 6/3 × 10⁵/10² = 2 × 10³.",
                "En écriture décimale : D = 2 000.",
              ],
            },
            {
              level: 3,
              statement: "a) La distance moyenne entre la Terre et le Soleil vaut environ 1,5 × 10⁸ km, et la lumière parcourt environ 3 × 10⁵ km par seconde. Calculez le temps mis par la lumière du Soleil pour nous parvenir, en secondes, puis en minutes et secondes. b) Démontrez que, pour tout entier naturel n, 2ⁿ⁺¹ + 2ⁿ = 3 × 2ⁿ. c) Déduisez-en la valeur de E = (2²⁰²⁷ + 2²⁰²⁶)/2²⁰²⁶.",
              hint: "En a), temps = distance/vitesse. En b), écrivez 2ⁿ⁺¹ = 2 × 2ⁿ, puis factorisez par 2ⁿ.",
              solution: [
                "a) t = (1,5 × 10⁸)/(3 × 10⁵) = (1,5/3) × 10⁸⁻⁵ = 0,5 × 10³ = 500 s.",
                "500 s = 8 × 60 s + 20 s, soit environ 8 min 20 s.",
                "b) 2ⁿ⁺¹ = 2ⁿ × 2¹ = 2 × 2ⁿ. Donc 2ⁿ⁺¹ + 2ⁿ = 2 × 2ⁿ + 1 × 2ⁿ = (2 + 1) × 2ⁿ = 3 × 2ⁿ.",
                "c) Avec n = 2026 : 2²⁰²⁷ + 2²⁰²⁶ = 3 × 2²⁰²⁶.",
                "Donc E = (3 × 2²⁰²⁶)/2²⁰²⁶ = 3.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Repérez les erreurs classiques sur les puissances.",
            statements: [
              { text: "2³ × 2⁴ = 2¹²", true: false, why: "On additionne les exposants : 2³ × 2⁴ = 2⁷." },
              { text: "(-3)² = -9", true: false, why: "(-3)² = (-3) × (-3) = 9 : le carré d'un nombre non nul est positif." },
              { text: "5⁰ = 1", true: true, why: "Par convention, a⁰ = 1 pour tout réel a non nul." },
              { text: "10⁻³ = 0,001", true: true, why: "10⁻³ = 1/10³ = 1/1 000 = 0,001." },
              { text: "2⁻² est un nombre négatif", true: false, why: "2⁻² = 1/2² = 1/4 = 0,25, qui est positif." },
              { text: "3² + 3² = 3⁴", true: false, why: "3² + 3² = 9 + 9 = 18, alors que 3⁴ = 81. En fait 3² + 3² = 2 × 3²." },
              { text: "(2 × 5)³ = 2³ × 5³", true: true, why: "C'est la règle (ab)ⁿ = aⁿbⁿ : les deux valent 1 000." },
              { text: "12 × 10⁴ est en notation scientifique", true: false, why: "Le premier facteur doit être compris entre 1 et 10 : on écrit 1,2 × 10⁵." },
            ],
          },
          quiz: [
            {
              q: "Que vaut 2⁻³ ?",
              options: ["-8", "-6", "1/8", "1/6"],
              answer: 2,
              why: "2⁻³ = 1/2³ = 1/8 : l'exposant négatif donne l'inverse, pas un nombre négatif.",
            },
            {
              q: "Quelle est la notation scientifique de 0,000 38 ?",
              options: ["38 × 10⁻⁵", "3,8 × 10⁻⁴", "3,8 × 10⁴", "0,38 × 10⁻³"],
              answer: 1,
              why: "Il faut un premier facteur entre 1 et 10 : 0,000 38 = 3,8 × 0,0001 = 3,8 × 10⁻⁴.",
            },
            {
              q: "Que vaut (5²)³ ?",
              options: ["5⁵", "5⁸", "25³ × 5", "5⁶"],
              answer: 3,
              why: "Pour une puissance de puissance, on multiplie les exposants : (5²)³ = 5⁶, car 2 × 3 = 6.",
            },
            {
              q: "Que vaut 10⁷ × 10⁻⁹ ?",
              options: ["10⁻²", "10²", "10⁻⁶³", "10¹⁶"],
              answer: 0,
              why: "On additionne les exposants : 7 + (-9) = -2.",
            },
            {
              q: "Quel est le signe de (-7)¹¹ ?",
              options: ["positif", "nul", "négatif", "cela dépend"],
              answer: 2,
              why: "Une puissance d'exposant impair d'un nombre négatif est négative.",
            },
          ],
          trap: "Confondre (-3)² = 9 et -3² = -9 : sans parenthèses, l'exposant ne porte que sur 3. Autre erreur fréquente : additionner les exposants dans une somme, alors que 2³ + 2⁴ = 24 et non 2⁷.",
          method: "Pour vérifier une règle dont vous doutez, testez-la sur de petits nombres : 2² × 2³ = 4 × 8 = 32 = 2⁵ confirme qu'on additionne les exposants. En notation scientifique, regroupez les nombres d'un côté et les puissances de 10 de l'autre, puis réajustez pour que le premier facteur soit compris entre 1 et 10.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'racines-carrees',
          title: 'Calculer avec les racines carrées',
          minutes: 30,
          objectives: [
            "Connaître la définition de la racine carrée d'un nombre positif.",
            "Utiliser les égalités √(ab) = √a × √b et √(a/b) = √a/√b pour simplifier une écriture.",
            "Démontrer que √(a + b) < √a + √b pour a et b strictement positifs.",
            "Écrire une racine carrée sous la forme a√b et réduire une somme de racines carrées.",
          ],
          course: [
            {
              heading: "Définition de la racine carrée",
              paragraphs: [
                "Pour un réel a positif ou nul, la racine carrée de a, notée √a, est l'unique nombre positif ou nul dont le carré vaut a. Ainsi √25 = 5, car 5 ≥ 0 et 5² = 25 ; √0 = 0 ; √0,49 = 0,7. La racine carrée d'un nombre strictement négatif n'existe pas dans ℝ, car un carré n'est jamais négatif : √(-4) n'a pas de sens.",
                "Par définition, pour a ≥ 0, (√a)² = a. En revanche, √(a²) n'est pas toujours égal à a : √(a²) = a si a ≥ 0, mais √(a²) = -a si a < 0. Par exemple √((-3)²) = √9 = 3, et non -3. Géométriquement, √a est la longueur du côté d'un carré d'aire a : un carré d'aire 2 cm² a un côté de √2 cm.",
                "Les carrés parfaits 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 ont des racines entières. Pour les autres entiers, la racine carrée est un nombre irrationnel, dont la calculatrice ne donne qu'une valeur approchée : √3 ≈ 1,732.",
              ],
              box: { label: "Définition", text: "Pour a ≥ 0, √a est le nombre positif ou nul dont le carré est a : (√a)² = a. √a n'existe pas pour a < 0, et √(a²) = a seulement si a ≥ 0." },
            },
            {
              heading: "Produit et quotient",
              paragraphs: [
                "Pour a ≥ 0 et b ≥ 0 : √(ab) = √a × √b. Démonstration : le nombre √a × √b est positif, et son carré vaut (√a)² × (√b)² = ab. C'est donc le nombre positif dont le carré est ab, c'est-à-dire √(ab). De même, pour a ≥ 0 et b > 0 : √(a/b) = √a/√b.",
                "Ces égalités servent à simplifier : √50 = √(25 × 2) = √25 × √2 = 5√2 ; √72 = √(36 × 2) = 6√2 ; √(9/16) = √9/√16 = 3/4. Elles servent aussi dans l'autre sens : √2 × √8 = √16 = 4 et √75/√3 = √25 = 5.",
              ],
              box: { label: "Propriété", text: "Pour a ≥ 0 et b ≥ 0 : √(ab) = √a × √b. Pour a ≥ 0 et b > 0 : √(a/b) = √a/√b." },
            },
            {
              heading: "Pas de règle pour la somme",
              paragraphs: [
                "Il n'existe pas de règle analogue pour l'addition : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. Plus précisément, pour a > 0 et b > 0, on a toujours √(a + b) < √a + √b.",
                "Démonstration : les deux nombres √(a + b) et √a + √b sont positifs. Or deux nombres positifs sont rangés dans le même ordre que leurs carrés. On compare donc les carrés : (√(a + b))² = a + b, et (√a + √b)² = a + 2√a√b + b. Comme a > 0 et b > 0, 2√a√b > 0, donc a + b < a + 2√a√b + b. Ainsi √(a + b) < √a + √b.",
              ],
              box: { label: "À retenir", text: "Pour a > 0 et b > 0 : √(a + b) < √a + √b. On ne « sépare » jamais une racine carrée de somme." },
            },
            {
              heading: "Simplifier et réduire",
              paragraphs: [
                "Écrire √n sous la forme a√b, c'est extraire le plus grand carré parfait qui divise n, pour que b soit l'entier le plus petit possible. Exemple : 48 = 16 × 3, donc √48 = 4√3. Écrire √48 = 2√12 est juste mais incomplet, car 12 contient encore le carré 4.",
                "On additionne des racines carrées comme des termes semblables en calcul littéral, à condition qu'elles portent sur le même nombre : 3√2 + 5√2 = 8√2. Il faut souvent simplifier d'abord : √12 + √27 = 2√3 + 3√3 = 5√3. En revanche, 2√3 + 4√5 ne se réduit pas.",
                "Pour écrire un quotient sans racine carrée au dénominateur, on multiplie le numérateur et le dénominateur par cette racine : 1/√2 = √2/(√2 × √2) = √2/2, et 6/√3 = 6√3/3 = 2√3.",
              ],
            },
          ],
          keyPoints: [
            "Pour a ≥ 0, √a ≥ 0 et (√a)² = a ; √a n'existe pas si a < 0.",
            "√(a²) = a si a ≥ 0, mais √((-3)²) = 3.",
            "√(ab) = √a × √b et √(a/b) = √a/√b (a, b positifs, b ≠ 0 pour le quotient).",
            "Pour a > 0 et b > 0, √(a + b) < √a + √b : pas de règle pour la somme.",
            "Simplifier : extraire le plus grand carré parfait, par exemple √72 = √(36 × 2) = 6√2.",
            "On ne réduit que des racines portant sur le même nombre : 3√2 + 5√2 = 8√2.",
          ],
          example: {
            statement: "a) Écrivez A = √75 - 2√12 + √27 sous la forme a√3, avec a entier. b) Développez et réduisez B = (3 + √2)².",
            solution: [
              "a) On simplifie chaque racine en extrayant un carré parfait : √75 = √(25 × 3) = 5√3.",
              "√12 = √(4 × 3) = 2√3, donc 2√12 = 4√3 ; et √27 = √(9 × 3) = 3√3.",
              "A = 5√3 - 4√3 + 3√3 = (5 - 4 + 3)√3 = 4√3.",
              "b) On utilise (a + b)² = a² + 2ab + b² avec a = 3 et b = √2.",
              "B = 3² + 2 × 3 × √2 + (√2)² = 9 + 6√2 + 2 = 11 + 6√2.",
              "Contrôle à la calculatrice : A ≈ 6,928 et 4√3 ≈ 6,928 ; B ≈ 19,485 et 11 + 6√2 ≈ 19,485.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez sans calculatrice : a) √144 ; b) √0,09 ; c) (√7)² ; d) √3 × √12 ; e) √50/√2 ; f) √((-5)²).",
              hint: "Pour d) et e), regroupez sous une seule racine avec √a × √b = √(ab) et √a/√b = √(a/b).",
              solution: [
                "a) √144 = 12, car 12² = 144.",
                "b) √0,09 = 0,3, car 0,3² = 0,09.",
                "c) (√7)² = 7, par définition de la racine carrée.",
                "d) √3 × √12 = √36 = 6.",
                "e) √50/√2 = √(50/2) = √25 = 5.",
                "f) √((-5)²) = √25 = 5 (et non -5, une racine carrée est positive).",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez sous la forme a√b, avec b entier le plus petit possible : √18 ; √200 ; √45 ; √8. b) Déduisez-en l'écriture de C = √18 + √200 - 3√8 sous la forme a√2.",
              hint: "Cherchez le plus grand carré parfait qui divise le nombre sous la racine : 9 pour 18, 100 pour 200...",
              solution: [
                "a) √18 = √(9 × 2) = 3√2.",
                "√200 = √(100 × 2) = 10√2.",
                "√45 = √(9 × 5) = 3√5.",
                "√8 = √(4 × 2) = 2√2.",
                "b) C = 3√2 + 10√2 - 3 × 2√2 = 3√2 + 10√2 - 6√2 = 7√2.",
              ],
            },
            {
              level: 3,
              statement: "Un rectangle a pour longueur √72 cm et pour largeur √8 cm. a) Calculez son aire (valeur exacte). b) Calculez son périmètre sous la forme a√2. c) Calculez la longueur de sa diagonale, sous la forme a√5. d) Comparez la diagonale à la somme √72 + √8 et expliquez le résultat à l'aide du cours.",
              hint: "Pour la diagonale, utilisez le théorème de Pythagore : d² = longueur² + largeur².",
              solution: [
                "a) Aire = √72 × √8 = √(72 × 8) = √576 = 24 cm² (car 24² = 576).",
                "b) √72 = 6√2 et √8 = 2√2. Périmètre = 2 × (6√2 + 2√2) = 2 × 8√2 = 16√2 cm.",
                "c) D'après le théorème de Pythagore, d² = (√72)² + (√8)² = 72 + 8 = 80, donc d = √80 = √(16 × 5) = 4√5 cm.",
                "d) √72 + √8 = 8√2 ≈ 11,31 cm, alors que d = 4√5 ≈ 8,94 cm. La diagonale est plus courte.",
                "C'est la propriété du cours : d = √(72 + 8) < √72 + √8, car √(a + b) < √a + √b pour a et b strictement positifs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa forme simplifiée.",
            pairs: [
              { left: "√50", right: "5√2" },
              { left: "√(4/9)", right: "2/3" },
              { left: "√3 × √27", right: "9" },
              { left: "(√6)²", right: "6" },
              { left: "√((-4)²)", right: "4" },
              { left: "√12 + √3", right: "3√3" },
            ],
          },
          quiz: [
            {
              q: "Que vaut √(16 + 9) ?",
              options: ["7", "25", "5", "√7"],
              answer: 2,
              why: "On calcule d'abord sous la racine : √(16 + 9) = √25 = 5, et non √16 + √9 = 7.",
            },
            {
              q: "Quelle est l'écriture simplifiée de √98 ?",
              options: ["7√2", "2√7", "49√2", "9√8"],
              answer: 0,
              why: "98 = 49 × 2, donc √98 = √49 × √2 = 7√2.",
            },
            {
              q: "Que vaut √((-6)²) ?",
              options: ["-6", "36", "n'existe pas", "6"],
              answer: 3,
              why: "(-6)² = 36 et √36 = 6 : une racine carrée est toujours positive ou nulle.",
            },
            {
              q: "Que vaut 2√3 × 5√3 ?",
              options: ["10√3", "30", "7√3", "10√6"],
              answer: 1,
              why: "2√3 × 5√3 = (2 × 5) × (√3 × √3) = 10 × 3 = 30.",
            },
            {
              q: "Pour a > 0 et b > 0, quelle affirmation est toujours vraie ?",
              options: ["√(a + b) = √a + √b", "√(a + b) > √a + √b", "√(ab) = √a + √b", "√(a + b) < √a + √b"],
              answer: 3,
              why: "En comparant les carrés, (√a + √b)² = a + b + 2√a√b > a + b, donc √(a + b) < √a + √b.",
            },
          ],
          trap: "Écrire √(a + b) = √a + √b : c'est faux dès que a et b sont strictement positifs, par exemple √(9 + 16) = 5 alors que √9 + √16 = 7. Seuls le produit et le quotient se « séparent ».",
          method: "Pour simplifier √n, cherchez le plus grand carré parfait qui divise n (4, 9, 16, 25, 36, 49, 64, 81, 100...) : √72 = √(36 × 2) = 6√2. Contrôlez ensuite à la calculatrice que l'expression de départ et le résultat ont la même valeur approchée.",
        },
      ],
    },

    /* ================================================================== */
    /* VECTEURS DU PLAN                                                     */
    /* ================================================================== */
    {
      id: 'vecteurs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'translation-vecteur',
          title: 'Translation et vecteur',
          minutes: 30,
          objectives: [
            "Définir la translation qui transforme un point A en un point B et le vecteur AB⃗ associé.",
            "Caractériser un vecteur non nul par sa direction, son sens et sa norme.",
            "Traduire l'égalité de deux vecteurs par un parallélogramme, et inversement.",
            "Reconnaître le vecteur nul et le vecteur opposé d'un vecteur.",
          ],
          course: [
            {
              heading: "La translation",
              paragraphs: [
                "Soient A et B deux points du plan. La translation qui transforme A en B est la transformation qui fait « glisser » tous les points du plan de la même façon : dans la même direction que la droite (AB), dans le même sens que de A vers B, et sur la même longueur AB. Pensez à un tapis roulant : tous les objets posés dessus se déplacent ensemble, du même trajet.",
                "L'image d'un point M par cette translation est le point M' tel que ABM'M est un parallélogramme (éventuellement aplati, si M est sur la droite (AB)). Les segments [AM'] et [BM] ont alors le même milieu. Une translation conserve les longueurs, les angles, l'alignement et le parallélisme : l'image d'une figure est une figure superposable, simplement déplacée.",
              ],
              box: { label: "Définition", text: "L'image d'un point M par la translation qui transforme A en B est l'unique point M' tel que ABM'M soit un parallélogramme, éventuellement aplati." },
            },
            {
              heading: "Le vecteur AB⃗",
              paragraphs: [
                "À la translation qui transforme A en B, on associe le vecteur AB⃗. On dit que cette translation est la translation de vecteur AB⃗. Le point A est l'origine du vecteur et le point B son extrémité. On représente le vecteur par une flèche allant de A vers B.",
                "Lorsque A et B sont distincts, le vecteur AB⃗ est caractérisé par trois éléments : sa direction (celle de la droite (AB)), son sens (de A vers B) et sa norme, c'est-à-dire sa longueur, notée ‖AB⃗‖ = AB. Deux droites parallèles ont la même direction ; sur une direction donnée, il y a deux sens possibles.",
                "Un vecteur peut aussi être noté par une seule lettre, comme u⃗ ou v⃗, lorsqu'on ne précise pas son origine. Un même vecteur u⃗ a une infinité de représentants : toutes les flèches de même direction, de même sens et de même longueur.",
              ],
              box: { label: "À retenir", text: "Un vecteur non nul AB⃗ est caractérisé par sa direction (la droite (AB)), son sens (de A vers B) et sa norme ‖AB⃗‖ = AB." },
            },
            {
              heading: "Égalité de deux vecteurs et parallélogramme",
              paragraphs: [
                "Deux vecteurs sont égaux lorsqu'ils ont la même direction, le même sens et la même norme ; autrement dit, lorsqu'ils définissent la même translation. Dire que AB⃗ = CD⃗, c'est dire que la translation qui transforme A en B transforme aussi C en D.",
                "Propriété : AB⃗ = CD⃗ si et seulement si ABDC est un parallélogramme (éventuellement aplati). Attention à l'ordre des lettres : ce n'est pas ABCD. On parcourt le contour A, B, D, C. On peut aussi l'exprimer avec les diagonales : AB⃗ = CD⃗ si et seulement si [AD] et [BC] ont le même milieu.",
                "Cas particulier utile : I est le milieu du segment [AB] si et seulement si AI⃗ = IB⃗. Les deux flèches ont la même direction, le même sens et la même longueur AB/2.",
              ],
              box: { label: "Propriété", text: "AB⃗ = CD⃗ ⇔ ABDC est un parallélogramme (éventuellement aplati) ⇔ [AD] et [BC] ont le même milieu. I est le milieu de [AB] ⇔ AI⃗ = IB⃗." },
            },
            {
              heading: "Vecteur nul et vecteur opposé",
              paragraphs: [
                "Le vecteur AA⃗, associé à la translation qui laisse chaque point à sa place, est le vecteur nul, noté 0⃗. Ainsi AA⃗ = BB⃗ = 0⃗. Le vecteur nul n'a ni direction ni sens, et sa norme vaut 0.",
                "Le vecteur opposé du vecteur AB⃗ est le vecteur BA⃗ : il a la même direction et la même norme que AB⃗, mais le sens contraire. On le note -AB⃗, donc BA⃗ = -AB⃗. Si ABCD est un parallélogramme, AB⃗ = DC⃗, et donc CD⃗ = -AB⃗ = BA⃗.",
              ],
              box: { label: "Définition", text: "AA⃗ = 0⃗ est le vecteur nul. Le vecteur opposé de AB⃗ est BA⃗ = -AB⃗ : même direction, même norme, sens contraire." },
            },
          ],
          keyPoints: [
            "La translation de vecteur AB⃗ transforme M en M' tel que ABM'M est un parallélogramme.",
            "Un vecteur non nul : une direction, un sens, une norme (sa longueur).",
            "AB⃗ = CD⃗ ⇔ ABDC est un parallélogramme (attention à l'ordre des lettres).",
            "I milieu de [AB] ⇔ AI⃗ = IB⃗.",
            "AA⃗ = 0⃗ ; l'opposé de AB⃗ est BA⃗ = -AB⃗.",
          ],
          example: {
            statement: "ABCD est un parallélogramme de centre O. a) Citez un vecteur égal à AB⃗ et un vecteur égal à AO⃗. b) Quelle est l'image de D par la translation de vecteur AB⃗ ? c) Citez deux vecteurs opposés à AB⃗.",
            solution: [
              "a) ABCD est un parallélogramme, donc [AC] et [BD] ont le même milieu O. En parcourant le contour dans l'ordre A, B, C, D, on obtient AB⃗ = DC⃗ (même direction, même sens, même longueur).",
              "O est le milieu de [AC], donc AO⃗ = OC⃗.",
              "b) L'image de D par la translation de vecteur AB⃗ est le point D' tel que DD'⃗ = AB⃗. Or AB⃗ = DC⃗ : c'est donc le point C.",
              "c) L'opposé de AB⃗ est BA⃗. De plus, CD⃗ = -DC⃗ = -AB⃗. Les vecteurs BA⃗ et CD⃗ sont donc opposés à AB⃗.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "ABCD est un parallélogramme. Complétez : a) AB⃗ = ...⃗ ; b) AD⃗ = ...⃗ ; c) CB⃗ = ...⃗. d) Quelle est l'image du point B par la translation de vecteur AD⃗ ?",
              hint: "Dans un parallélogramme ABCD, les côtés opposés [AB] et [DC] sont parallèles et de même longueur ; faites une figure pour vérifier le sens des flèches.",
              solution: [
                "a) AB⃗ = DC⃗ (même direction, même sens, même longueur).",
                "b) AD⃗ = BC⃗.",
                "c) CB⃗ = DA⃗ (c'est l'opposé de BC⃗ = AD⃗).",
                "d) L'image de B est le point B' tel que BB'⃗ = AD⃗. Or AD⃗ = BC⃗, donc B' = C.",
              ],
            },
            {
              level: 2,
              statement: "A, B et C sont trois points non alignés. a) Construisez le point D tel que AB⃗ = CD⃗. Quelle est la nature du quadrilatère ABDC ? b) Construisez le point E, image de C par la translation de vecteur BA⃗. c) Démontrez que C est le milieu du segment [DE].",
              hint: "Pour c), comparez les vecteurs DC⃗ et CE⃗ en les exprimant à l'aide de AB⃗.",
              solution: [
                "a) AB⃗ = CD⃗, donc ABDC est un parallélogramme (non aplati, car A, B et C ne sont pas alignés).",
                "b) E est le point tel que CE⃗ = BA⃗ : on trace depuis C une flèche de même direction, même sens et même longueur que de B vers A.",
                "c) D'une part, DC⃗ = -CD⃗ = -AB⃗ = BA⃗. D'autre part, CE⃗ = BA⃗.",
                "Donc DC⃗ = CE⃗, ce qui signifie que C est le milieu de [DE].",
              ],
            },
            {
              level: 3,
              statement: "Soit ABC un triangle et I le milieu de [AC]. On note D le symétrique de B par rapport à I. a) Démontrez que ABCD est un parallélogramme, puis que AB⃗ = DC⃗. b) Soit E l'image de C par la translation de vecteur AB⃗. Démontrez que C est le milieu de [DE]. c) Démontrez que ABEC est un parallélogramme.",
              hint: "Un quadrilatère dont les diagonales ont le même milieu est un parallélogramme. Pour b) et c), comparez des vecteurs à AB⃗.",
              solution: [
                "a) D est le symétrique de B par rapport à I, donc I est le milieu de [BD]. Comme I est aussi le milieu de [AC], les diagonales [AC] et [BD] du quadrilatère ABCD ont le même milieu : ABCD est un parallélogramme.",
                "Dans le parallélogramme ABCD, on a donc AB⃗ = DC⃗.",
                "b) E est l'image de C par la translation de vecteur AB⃗, donc CE⃗ = AB⃗. Avec a), DC⃗ = AB⃗ = CE⃗.",
                "L'égalité DC⃗ = CE⃗ signifie que C est le milieu de [DE].",
                "c) On a AB⃗ = CE⃗. D'après le cours, AB⃗ = CE⃗ équivaut à « ABEC est un parallélogramme » (éventuellement aplati).",
                "Il n'est pas aplati, car C n'est pas sur la droite (AB) (ABC est un triangle). Donc ABEC est un parallélogramme.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les vecteurs et les translations.",
            statements: [
              { text: "Si AB⃗ = CD⃗, alors ABCD est un parallélogramme.", true: false, why: "C'est ABDC qui est un parallélogramme : l'ordre des lettres compte." },
              { text: "Deux vecteurs de même norme sont égaux.", true: false, why: "Il faut aussi la même direction et le même sens." },
              { text: "AB⃗ et BA⃗ ont la même norme.", true: true, why: "Ce sont deux vecteurs opposés : même longueur AB, sens contraires." },
              { text: "I est le milieu de [AB] si et seulement si AI⃗ = IB⃗.", true: true, why: "AI⃗ et IB⃗ ont alors la même direction, le même sens et la même longueur AB/2." },
              { text: "Le vecteur AA⃗ est le vecteur nul.", true: true, why: "La translation qui transforme A en A laisse tous les points en place." },
              { text: "Si AB⃗ = CD⃗, alors les droites (AB) et (CD) sont parallèles ou confondues.", true: true, why: "Deux vecteurs égaux ont la même direction." },
              { text: "Deux vecteurs de même direction ont toujours le même sens.", true: false, why: "Sur une même direction, il y a deux sens possibles : AB⃗ et BA⃗ ont la même direction mais des sens contraires." },
            ],
          },
          quiz: [
            {
              q: "ABCD est un parallélogramme. Quel vecteur est égal à AB⃗ ?",
              options: ["DC⃗", "CD⃗", "BC⃗", "AD⃗"],
              answer: 0,
              why: "Dans le parallélogramme ABCD, [AB] et [DC] sont parallèles, de même longueur, et les flèches vont dans le même sens.",
            },
            {
              q: "L'image de M par la translation de vecteur AB⃗ est le point N tel que :",
              options: ["ABMN est un parallélogramme", "AMBN est un parallélogramme", "ABNM est un parallélogramme", "N est le milieu de [AB]"],
              answer: 2,
              why: "On a MN⃗ = AB⃗, ce qui équivaut à « ABNM est un parallélogramme », éventuellement aplati.",
            },
            {
              q: "Quelles caractéristiques définissent un vecteur non nul ?",
              options: ["Un point d'origine imposé et une longueur", "Une droite et le milieu d'un segment", "Uniquement sa longueur", "Une direction, un sens et une norme"],
              answer: 3,
              why: "Un vecteur non nul est déterminé par sa direction, son sens et sa norme ; il peut être représenté à partir de n'importe quelle origine.",
            },
            {
              q: "Si AB⃗ = CD⃗, que peut-on affirmer ?",
              options: ["A = C", "AB = CD", "(AB) ⊥ (CD)", "AC = BC"],
              answer: 1,
              why: "Deux vecteurs égaux ont la même norme, donc AB = CD.",
            },
            {
              q: "Quel est l'opposé du vecteur AB⃗ ?",
              options: ["BA⃗", "AB⃗ lui-même", "Le vecteur nul", "2AB⃗"],
              answer: 0,
              why: "BA⃗ a la même direction et la même norme que AB⃗, avec le sens contraire : BA⃗ = -AB⃗.",
            },
          ],
          trap: "Se tromper dans l'ordre des lettres : AB⃗ = CD⃗ signifie que ABDC (et non ABCD) est un parallélogramme. Il faut parcourir le contour A, puis B, puis D, puis C.",
          method: "Avant de conclure à une égalité de vecteurs, faites une figure et vérifiez les trois caractéristiques : même direction (droites parallèles), même sens (flèches dans le même sens), même longueur. Pour un parallélogramme, lisez les lettres dans l'ordre où l'on parcourt son contour.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'somme-chasles',
          title: 'Somme de vecteurs et relation de Chasles',
          minutes: 30,
          objectives: [
            "Construire la somme de deux vecteurs en enchaînant deux translations.",
            "Utiliser la relation de Chasles pour simplifier une somme de vecteurs.",
            "Utiliser la règle du parallélogramme et calculer la différence de deux vecteurs.",
          ],
          course: [
            {
              heading: "Somme de deux vecteurs",
              paragraphs: [
                "Appliquer la translation de vecteur u⃗, puis la translation de vecteur v⃗, revient à appliquer une seule translation. Son vecteur est appelé la somme de u⃗ et v⃗, notée u⃗ + v⃗. Pour la construire, on place les vecteurs « bout à bout » : on trace u⃗ = AB⃗ à partir d'un point A, puis v⃗ = BC⃗ à partir de l'extrémité B ; la somme est le vecteur AC⃗.",
                "Analogie : un randonneur marche 3 km vers l'est, puis 4 km vers le nord. Son déplacement total est le vecteur qui va directement de son point de départ à son point d'arrivée. D'après le théorème de Pythagore, il se trouve à √(3² + 4²) = 5 km de son point de départ, et non à 7 km : en général, la norme d'une somme n'est pas la somme des normes.",
              ],
              box: { label: "Définition", text: "La somme u⃗ + v⃗ est le vecteur de la translation obtenue en appliquant la translation de vecteur u⃗ puis celle de vecteur v⃗. Si u⃗ = AB⃗ et v⃗ = BC⃗, alors u⃗ + v⃗ = AC⃗." },
            },
            {
              heading: "La relation de Chasles",
              paragraphs: [
                "La construction précédente donne une égalité fondamentale, appelée relation de Chasles, du nom du mathématicien français Michel Chasles (1793-1880) : pour tous points A, B et C du plan, AB⃗ + BC⃗ = AC⃗. L'extrémité du premier vecteur doit être l'origine du second ; la lettre « intérieure » B disparaît.",
                "On l'utilise dans les deux sens. Pour simplifier : AB⃗ + BC⃗ + CD⃗ = AC⃗ + CD⃗ = AD⃗. Pour décomposer un vecteur en passant par un point M choisi : AB⃗ = AM⃗ + MB⃗. Elle donne aussi AB⃗ + BA⃗ = AA⃗ = 0⃗, ce qui confirme que BA⃗ est l'opposé de AB⃗.",
              ],
              box: { label: "Propriété", text: "Relation de Chasles : pour tous points A, B et C, AB⃗ + BC⃗ = AC⃗." },
            },
            {
              heading: "La règle du parallélogramme",
              paragraphs: [
                "Lorsque deux vecteurs ont la même origine, on ne peut pas appliquer directement la relation de Chasles. On utilise alors la règle du parallélogramme : AB⃗ + AD⃗ = AC⃗ si et seulement si ABCD est un parallélogramme. La somme est portée par la diagonale issue de l'origine commune.",
                "Démonstration du sens direct : si ABCD est un parallélogramme, alors AD⃗ = BC⃗. Donc AB⃗ + AD⃗ = AB⃗ + BC⃗ = AC⃗ par la relation de Chasles. Concrètement, pour construire u⃗ + v⃗ à partir d'un point A, on peut tracer AB⃗ = u⃗ et AD⃗ = v⃗, compléter le parallélogramme ABCD et lire la diagonale AC⃗.",
              ],
              box: { label: "Propriété", text: "Règle du parallélogramme : AB⃗ + AD⃗ = AC⃗ ⇔ ABCD est un parallélogramme." },
            },
            {
              heading: "Différence de deux vecteurs et règles de calcul",
              paragraphs: [
                "Soustraire un vecteur, c'est ajouter son opposé : u⃗ - v⃗ = u⃗ + (-v⃗). Par exemple, AB⃗ - AC⃗ = AB⃗ + CA⃗ = CA⃗ + AB⃗ = CB⃗. On retient que -AC⃗ = CA⃗ : on inverse les lettres au lieu d'écrire un signe moins.",
                "L'addition des vecteurs se calcule comme celle des nombres : on peut changer l'ordre des termes (u⃗ + v⃗ = v⃗ + u⃗) et les regrouper comme on veut ((u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗)). De plus, u⃗ + 0⃗ = u⃗ et u⃗ + (-u⃗) = 0⃗. Ces règles permettent de réordonner une somme pour faire apparaître des relations de Chasles.",
              ],
              box: { label: "Règle", text: "u⃗ - v⃗ = u⃗ + (-v⃗) et -AB⃗ = BA⃗. L'ordre des termes d'une somme de vecteurs ne compte pas." },
            },
          ],
          keyPoints: [
            "Pour construire u⃗ + v⃗, on place les vecteurs bout à bout.",
            "Relation de Chasles : AB⃗ + BC⃗ = AC⃗ pour tous points A, B, C.",
            "Règle du parallélogramme : AB⃗ + AD⃗ = AC⃗ ⇔ ABCD est un parallélogramme.",
            "u⃗ - v⃗ = u⃗ + (-v⃗) et -AB⃗ = BA⃗ ; AB⃗ + BA⃗ = 0⃗.",
            "En général, ‖u⃗ + v⃗‖ ≠ ‖u⃗‖ + ‖v⃗‖.",
          ],
          example: {
            statement: "Simplifiez les sommes suivantes en un seul vecteur : u⃗ = AC⃗ - BC⃗ + BD⃗ et v⃗ = MA⃗ - MB⃗ + AB⃗.",
            solution: [
              "u⃗ : on remplace la soustraction par l'addition de l'opposé : -BC⃗ = CB⃗. Donc u⃗ = AC⃗ + CB⃗ + BD⃗.",
              "Par la relation de Chasles, AC⃗ + CB⃗ = AB⃗, puis AB⃗ + BD⃗ = AD⃗. Donc u⃗ = AD⃗.",
              "v⃗ : -MB⃗ = BM⃗, donc v⃗ = MA⃗ + BM⃗ + AB⃗. On réordonne pour enchaîner les lettres : v⃗ = BM⃗ + MA⃗ + AB⃗.",
              "BM⃗ + MA⃗ = BA⃗, puis BA⃗ + AB⃗ = BB⃗ = 0⃗. Donc v⃗ = 0⃗.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez chaque somme sous la forme d'un seul vecteur : a) AB⃗ + BC⃗ ; b) MN⃗ + NP⃗ + PQ⃗ ; c) AB⃗ + BA⃗ ; d) CA⃗ + AB⃗ + BD⃗ ; e) AB⃗ - AC⃗.",
              hint: "Repérez les vecteurs qui s'enchaînent (l'extrémité de l'un est l'origine du suivant). Pour e), écrivez -AC⃗ = CA⃗.",
              solution: [
                "a) AB⃗ + BC⃗ = AC⃗ (relation de Chasles).",
                "b) MN⃗ + NP⃗ + PQ⃗ = MP⃗ + PQ⃗ = MQ⃗.",
                "c) AB⃗ + BA⃗ = AA⃗ = 0⃗.",
                "d) CA⃗ + AB⃗ + BD⃗ = CB⃗ + BD⃗ = CD⃗.",
                "e) AB⃗ - AC⃗ = AB⃗ + CA⃗ = CA⃗ + AB⃗ = CB⃗.",
              ],
            },
            {
              level: 2,
              statement: "ABCD est un parallélogramme de centre O. Écrivez sous la forme d'un seul vecteur : a) AB⃗ + AD⃗ ; b) AB⃗ + CD⃗ ; c) OA⃗ + OC⃗ ; d) DA⃗ + DC⃗ ; e) AB⃗ - AD⃗.",
              hint: "Utilisez les égalités du parallélogramme (AB⃗ = DC⃗, AD⃗ = BC⃗), le fait que O est le milieu des diagonales, la règle du parallélogramme et la relation de Chasles.",
              solution: [
                "a) ABCD est un parallélogramme, donc par la règle du parallélogramme AB⃗ + AD⃗ = AC⃗.",
                "b) CD⃗ = -DC⃗ = -AB⃗ = BA⃗, donc AB⃗ + CD⃗ = AB⃗ + BA⃗ = 0⃗.",
                "c) O est le milieu de [AC], donc OC⃗ = AO⃗ = -OA⃗. Ainsi OA⃗ + OC⃗ = 0⃗.",
                "d) DC⃗ = AB⃗, donc DA⃗ + DC⃗ = DA⃗ + AB⃗ = DB⃗ (relation de Chasles).",
                "e) AB⃗ - AD⃗ = AB⃗ + DA⃗ = DA⃗ + AB⃗ = DB⃗.",
              ],
            },
            {
              level: 3,
              statement: "a) Soient A, B, C et D quatre points quelconques. Démontrez que AB⃗ + CD⃗ = AD⃗ + CB⃗. b) Soit ABC un triangle et M le point défini par AM⃗ = AB⃗ + AC⃗. Démontrez que ABMC est un parallélogramme, puis que le milieu I de [BC] est aussi le milieu de [AM]. c) Démontrez que MB⃗ + MC⃗ = MA⃗.",
              hint: "En a), décomposez AB⃗ en passant par le point D. En c), exprimez MB⃗ et MC⃗ à l'aide de AC⃗ et AB⃗ grâce au parallélogramme.",
              solution: [
                "a) Par la relation de Chasles, AB⃗ = AD⃗ + DB⃗. Donc AB⃗ + CD⃗ = AD⃗ + DB⃗ + CD⃗ = AD⃗ + (CD⃗ + DB⃗) = AD⃗ + CB⃗.",
                "b) D'après la règle du parallélogramme, AB⃗ + AC⃗ = AM⃗ équivaut à « ABMC est un parallélogramme ». Il n'est pas aplati, car A, B et C ne sont pas alignés.",
                "Les diagonales d'un parallélogramme se coupent en leur milieu : [AM] et [BC] ont le même milieu, qui est donc I.",
                "c) Dans le parallélogramme ABMC : AB⃗ = CM⃗ et AC⃗ = BM⃗. Donc MB⃗ = -BM⃗ = -AC⃗ et MC⃗ = -CM⃗ = -AB⃗.",
                "Ainsi MB⃗ + MC⃗ = -AC⃗ - AB⃗ = -(AB⃗ + AC⃗) = -AM⃗ = MA⃗.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction de la somme u⃗ + v⃗.",
            items: [
              "Choisir un point A comme point de départ",
              "Placer le point B tel que AB⃗ = u⃗",
              "À partir de B, extrémité de u⃗, placer le point C tel que BC⃗ = v⃗",
              "Tracer la flèche qui va de A à C",
              "Conclure par la relation de Chasles : u⃗ + v⃗ = AB⃗ + BC⃗ = AC⃗",
            ],
          },
          quiz: [
            {
              q: "Que vaut AB⃗ + BC⃗ + CA⃗ ?",
              options: ["AC⃗", "2AB⃗", "0⃗", "BA⃗"],
              answer: 2,
              why: "AB⃗ + BC⃗ = AC⃗, puis AC⃗ + CA⃗ = AA⃗ = 0⃗ : on revient au point de départ.",
            },
            {
              q: "ABCD est un parallélogramme. Que vaut AB⃗ + AD⃗ ?",
              options: ["AC⃗", "BD⃗", "DB⃗", "CA⃗"],
              answer: 0,
              why: "C'est la règle du parallélogramme : la somme est portée par la diagonale issue de A.",
            },
            {
              q: "Que vaut MA⃗ - MB⃗ ?",
              options: ["AB⃗", "0⃗", "2MA⃗", "BA⃗"],
              answer: 3,
              why: "MA⃗ - MB⃗ = MA⃗ + BM⃗ = BM⃗ + MA⃗ = BA⃗.",
            },
            {
              q: "Quelle égalité traduit la relation de Chasles ?",
              options: ["AB⃗ + AC⃗ = BC⃗", "AB⃗ + CB⃗ = AC⃗", "AB⃗ + BC⃗ = AC⃗", "AB⃗ - BC⃗ = AC⃗"],
              answer: 2,
              why: "L'extrémité B du premier vecteur est l'origine du second : AB⃗ + BC⃗ = AC⃗.",
            },
            {
              q: "Un randonneur marche 3 km vers l'est, puis 4 km vers le nord. À quelle distance est-il de son point de départ ?",
              options: ["7 km", "5 km", "1 km", "12 km"],
              answer: 1,
              why: "Le déplacement total est la somme des deux vecteurs ; sa norme vaut √(3² + 4²) = 5 km, et non 3 + 4.",
            },
          ],
          trap: "Additionner les longueurs au lieu des vecteurs : en général ‖u⃗ + v⃗‖ ≠ ‖u⃗‖ + ‖v⃗‖. Autre erreur : appliquer la relation de Chasles à AB⃗ + CD⃗, alors que l'extrémité du premier vecteur n'est pas l'origine du second.",
          method: "Pour simplifier une somme, transformez d'abord chaque soustraction en addition de l'opposé (-BC⃗ = CB⃗), puis réordonnez les termes pour que chaque vecteur commence là où finit le précédent : les lettres intérieures s'éliminent comme dans une chaîne de dominos.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'produit-reel-vecteur',
          title: 'Produit d\'un vecteur par un nombre réel',
          minutes: 30,
          objectives: [
            "Construire le vecteur ku⃗ à partir d'un vecteur u⃗ et d'un réel k.",
            "Utiliser les règles de calcul sur les vecteurs pour simplifier une expression.",
            "Reconnaître deux vecteurs colinéaires et en déduire un parallélisme ou un alignement.",
          ],
          course: [
            {
              heading: "Le vecteur ku⃗",
              paragraphs: [
                "Soient u⃗ un vecteur non nul et k un réel non nul. Le produit de u⃗ par k est le vecteur noté ku⃗ qui a la même direction que u⃗, le même sens que u⃗ si k > 0 et le sens contraire si k < 0, et pour norme ‖ku⃗‖ = |k| × ‖u⃗‖, où |k| désigne k si k est positif et -k si k est négatif. Si k = 0 ou si u⃗ = 0⃗, on pose ku⃗ = 0⃗.",
                "Exemples : 2u⃗ a le même sens que u⃗ et une longueur double ; -u⃗ est l'opposé de u⃗ ; ½u⃗ a le même sens et une longueur moitié ; -3u⃗ a le sens contraire et une longueur triple. Ainsi ‖-3u⃗‖ = 3‖u⃗‖ : une norme n'est jamais négative.",
                "On peut placer un point à l'aide d'un produit par un réel. Si AM⃗ = ⅔AB⃗, le point M est sur le segment [AB], aux deux tiers de la longueur en partant de A. Si AN⃗ = -2AB⃗, le point N est sur la droite (AB), du côté opposé à B par rapport à A, et AN = 2AB.",
              ],
              box: { label: "Définition", text: "Pour u⃗ ≠ 0⃗ et k ≠ 0 : ku⃗ a la même direction que u⃗, le même sens si k > 0, le sens contraire si k < 0, et ‖ku⃗‖ = |k| × ‖u⃗‖. Si k = 0 ou u⃗ = 0⃗, ku⃗ = 0⃗." },
            },
            {
              heading: "Règles de calcul",
              paragraphs: [
                "Pour tous vecteurs u⃗, v⃗ et tous réels k, k' : k(u⃗ + v⃗) = ku⃗ + kv⃗ ; (k + k')u⃗ = ku⃗ + k'u⃗ ; k(k'u⃗) = (kk')u⃗ ; 1u⃗ = u⃗. Ces règles ressemblent à celles du calcul littéral : on développe et on réduit de la même façon, en regroupant les termes en u⃗ d'un côté et en v⃗ de l'autre.",
                "Exemple : 3(u⃗ - 2v⃗) + 2(u⃗ + v⃗) = 3u⃗ - 6v⃗ + 2u⃗ + 2v⃗ = 5u⃗ - 4v⃗. Attention : on ne réduit jamais 5u⃗ - 4v⃗ en un seul terme si u⃗ et v⃗ n'ont pas la même direction, de même qu'on ne réduit pas 5x - 4y.",
              ],
              box: { label: "Règle", text: "k(u⃗ + v⃗) = ku⃗ + kv⃗ ; (k + k')u⃗ = ku⃗ + k'u⃗ ; k(k'u⃗) = (kk')u⃗." },
            },
            {
              heading: "Milieu d'un segment",
              paragraphs: [
                "Le produit par un réel donne de nouvelles caractérisations du milieu. I est le milieu de [AB] si et seulement si AI⃗ = ½AB⃗, ou encore AB⃗ = 2AI⃗, ou encore IA⃗ + IB⃗ = 0⃗ (les vecteurs IA⃗ et IB⃗ sont opposés).",
                "Ces égalités sont très utiles dans les démonstrations. Par exemple, si I est le milieu de [BC], alors pour tout point A, AI⃗ = AB⃗ + BI⃗ = AB⃗ + ½BC⃗ = AB⃗ + ½(BA⃗ + AC⃗) = ½AB⃗ + ½AC⃗.",
              ],
              box: { label: "Propriété", text: "I milieu de [AB] ⇔ AI⃗ = ½AB⃗ ⇔ AB⃗ = 2AI⃗ ⇔ IA⃗ + IB⃗ = 0⃗." },
            },
            {
              heading: "Vecteurs colinéaires",
              paragraphs: [
                "Deux vecteurs u⃗ et v⃗ sont colinéaires lorsque l'un est le produit de l'autre par un réel : il existe un réel k tel que v⃗ = ku⃗, ou bien u⃗ = 0⃗. Deux vecteurs non nuls sont colinéaires si et seulement s'ils ont la même direction. Le vecteur nul est colinéaire à tous les vecteurs.",
                "La colinéarité traduit des propriétés géométriques. Les droites (AB) et (CD) sont parallèles si et seulement si les vecteurs AB⃗ et CD⃗ sont colinéaires. Les points A, B et C sont alignés si et seulement si les vecteurs AB⃗ et AC⃗ sont colinéaires. Vous verrez dans le chapitre sur les coordonnées un critère de calcul pour reconnaître des vecteurs colinéaires.",
              ],
              box: { label: "Propriété", text: "u⃗ et v⃗ sont colinéaires s'il existe un réel k tel que v⃗ = ku⃗ (ou si u⃗ = 0⃗). (AB) ∥ (CD) ⇔ AB⃗ et CD⃗ colinéaires. A, B, C alignés ⇔ AB⃗ et AC⃗ colinéaires." },
            },
          ],
          keyPoints: [
            "ku⃗ : même direction que u⃗, même sens si k > 0, sens contraire si k < 0, norme |k| × ‖u⃗‖.",
            "k(u⃗ + v⃗) = ku⃗ + kv⃗ et (k + k')u⃗ = ku⃗ + k'u⃗ : on calcule comme en calcul littéral.",
            "I milieu de [AB] ⇔ AI⃗ = ½AB⃗ ⇔ IA⃗ + IB⃗ = 0⃗.",
            "u⃗ et v⃗ colinéaires : v⃗ = ku⃗ pour un réel k (ou u⃗ = 0⃗).",
            "(AB) ∥ (CD) ⇔ AB⃗ et CD⃗ colinéaires ; A, B, C alignés ⇔ AB⃗ et AC⃗ colinéaires.",
          ],
          example: {
            statement: "ABC est un triangle. On définit les points D et E par AD⃗ = 3AB⃗ et AE⃗ = 3AC⃗. Démontrez que les droites (DE) et (BC) sont parallèles et comparez les longueurs DE et BC.",
            solution: [
              "On exprime DE⃗ à l'aide de la relation de Chasles : DE⃗ = DA⃗ + AE⃗.",
              "DA⃗ = -AD⃗ = -3AB⃗, donc DE⃗ = -3AB⃗ + 3AC⃗ = 3(-AB⃗ + AC⃗).",
              "Or -AB⃗ + AC⃗ = BA⃗ + AC⃗ = BC⃗. Donc DE⃗ = 3BC⃗.",
              "Les vecteurs DE⃗ et BC⃗ sont colinéaires, donc les droites (DE) et (BC) sont parallèles (elles ne sont pas confondues, car D est sur (AB) et différent de B).",
              "De plus ‖DE⃗‖ = 3‖BC⃗‖, donc DE = 3BC. On retrouve une configuration de Thalès.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Simplifiez les expressions suivantes : a) 2u⃗ + 5u⃗ ; b) 3(u⃗ + v⃗) - u⃗ ; c) -2(u⃗ - 3v⃗) + 4u⃗ ; d) ½(4u⃗ - 2v⃗).",
              hint: "Développez comme en calcul littéral, puis regroupez les termes en u⃗ et les termes en v⃗.",
              solution: [
                "a) 2u⃗ + 5u⃗ = (2 + 5)u⃗ = 7u⃗.",
                "b) 3(u⃗ + v⃗) - u⃗ = 3u⃗ + 3v⃗ - u⃗ = 2u⃗ + 3v⃗.",
                "c) -2(u⃗ - 3v⃗) + 4u⃗ = -2u⃗ + 6v⃗ + 4u⃗ = 2u⃗ + 6v⃗.",
                "d) ½(4u⃗ - 2v⃗) = 2u⃗ - v⃗.",
              ],
            },
            {
              level: 2,
              statement: "A et B sont deux points tels que AB = 8 cm. On définit les points M et N par AM⃗ = ¾AB⃗ et AN⃗ = -½AB⃗. a) Placez M et N sur une figure. b) Exprimez MN⃗ et BM⃗ en fonction de AB⃗. c) Calculez les longueurs AM, AN et MN.",
              hint: "Pour b), utilisez la relation de Chasles : MN⃗ = MA⃗ + AN⃗ et BM⃗ = BA⃗ + AM⃗.",
              solution: [
                "a) M est sur [AB], aux trois quarts en partant de A. N est sur la droite (AB), du côté opposé à B par rapport à A, à une distance de A égale à la moitié de AB.",
                "b) MN⃗ = MA⃗ + AN⃗ = -¾AB⃗ - ½AB⃗ = -(5/4)AB⃗.",
                "BM⃗ = BA⃗ + AM⃗ = -AB⃗ + ¾AB⃗ = -¼AB⃗.",
                "c) AM = ¾ × 8 = 6 cm ; AN = ½ × 8 = 4 cm ; MN = (5/4) × 8 = 10 cm.",
                "Contrôle : M et N sont de part et d'autre de A, donc MN = AM + AN = 6 + 4 = 10 cm.",
              ],
            },
            {
              level: 3,
              statement: "Soit ABC un triangle. On note D le symétrique de B par rapport à A, E le point tel que AE⃗ = ⅓AC⃗, et I le milieu de [BC]. a) Exprimez DE⃗ en fonction de AB⃗ et AC⃗. b) Démontrez que AI⃗ = ½AB⃗ + ½AC⃗. c) Déduisez-en DI⃗ en fonction de AB⃗ et AC⃗. d) Démontrez que les points D, E et I sont alignés.",
              hint: "A est le milieu de [BD], donc DA⃗ = AB⃗. Pour d), cherchez un réel k tel que DI⃗ = kDE⃗.",
              solution: [
                "a) D est le symétrique de B par rapport à A, donc A est le milieu de [DB] et DA⃗ = AB⃗. Par la relation de Chasles : DE⃗ = DA⃗ + AE⃗ = AB⃗ + ⅓AC⃗.",
                "b) AI⃗ = AB⃗ + BI⃗ = AB⃗ + ½BC⃗ = AB⃗ + ½(BA⃗ + AC⃗) = AB⃗ - ½AB⃗ + ½AC⃗ = ½AB⃗ + ½AC⃗.",
                "c) DI⃗ = DA⃗ + AI⃗ = AB⃗ + ½AB⃗ + ½AC⃗ = (3/2)AB⃗ + ½AC⃗.",
                "d) On remarque que (3/2)DE⃗ = (3/2)AB⃗ + (3/2) × ⅓AC⃗ = (3/2)AB⃗ + ½AC⃗ = DI⃗.",
                "Donc DI⃗ = (3/2)DE⃗ : les vecteurs DI⃗ et DE⃗ sont colinéaires, et ils ont le point D en commun.",
                "Conclusion : les points D, E et I sont alignés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque vecteur, exprimé à partir d'un vecteur u⃗ non nul, à sa description.",
            pairs: [
              { left: "2u⃗", right: "Même sens que u⃗, deux fois plus long" },
              { left: "-u⃗", right: "Sens contraire, même longueur" },
              { left: "½u⃗", right: "Même sens, deux fois plus court" },
              { left: "-3u⃗", right: "Sens contraire, trois fois plus long" },
              { left: "0u⃗", right: "Le vecteur nul" },
            ],
          },
          quiz: [
            {
              q: "Si v⃗ = -2u⃗ avec u⃗ non nul, alors :",
              options: ["v⃗ a le même sens que u⃗", "v⃗ est deux fois plus court que u⃗", "‖v⃗‖ = 2‖u⃗‖, sens contraire", "v⃗ et u⃗ ne sont pas colinéaires"],
              answer: 2,
              why: "Le coefficient -2 est négatif : sens contraire ; sa valeur absolue vaut 2 : norme double.",
            },
            {
              q: "Que vaut 2(u⃗ + 3v⃗) - 3u⃗ ?",
              options: ["-u⃗ + 6v⃗", "5u⃗ + 6v⃗", "-u⃗ + 3v⃗", "u⃗ + 6v⃗"],
              answer: 0,
              why: "2(u⃗ + 3v⃗) - 3u⃗ = 2u⃗ + 6v⃗ - 3u⃗ = -u⃗ + 6v⃗.",
            },
            {
              q: "I est le milieu de [AB]. Quelle égalité est vraie ?",
              options: ["AB⃗ = ½AI⃗", "AI⃗ = 2AB⃗", "IA⃗ = IB⃗", "AB⃗ = 2AI⃗"],
              answer: 3,
              why: "AI⃗ = ½AB⃗, donc AB⃗ = 2AI⃗. En revanche IA⃗ et IB⃗ sont opposés, et non égaux.",
            },
            {
              q: "Les points A, B et C sont alignés si et seulement si :",
              options: ["AB⃗ et AC⃗ ont la même norme", "AB⃗ et AC⃗ sont colinéaires", "AB⃗ + AC⃗ = BC⃗", "le triangle ABC est isocèle en A"],
              answer: 1,
              why: "A, B et C sont alignés exactement lorsque les vecteurs AB⃗ et AC⃗ ont la même direction (ou que l'un est nul).",
            },
            {
              q: "Le vecteur nul est colinéaire :",
              options: ["à tous les vecteurs", "à aucun vecteur", "seulement à lui-même"],
              answer: 0,
              why: "Pour tout vecteur u⃗, 0⃗ = 0 × u⃗ : le vecteur nul est colinéaire à tout vecteur.",
            },
          ],
          trap: "Oublier qu'un coefficient négatif change le sens du vecteur, ou écrire ‖-3u⃗‖ = -3‖u⃗‖ : une norme est toujours positive, et ‖-3u⃗‖ = 3‖u⃗‖.",
          method: "Pour démontrer un alignement ou un parallélisme, exprimez les deux vecteurs utiles en fonction des deux mêmes vecteurs de base (par exemple AB⃗ et AC⃗) à l'aide de la relation de Chasles, puis cherchez un réel k tel que l'un soit égal à k fois l'autre.",
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
          id: 'developper-reduire',
          title: 'Développer et réduire une expression',
          minutes: 25,
          objectives: [
            "Développer une expression à l'aide de la simple et de la double distributivité.",
            "Réduire une expression en regroupant les termes semblables.",
            "Supprimer correctement des parenthèses précédées d'un signe moins.",
          ],
          course: [
            {
              heading: "Vocabulaire du calcul littéral",
              paragraphs: [
                "Une expression littérale contient une ou plusieurs lettres qui désignent des nombres. Dans une somme, les nombres que l'on additionne s'appellent des termes ; dans un produit, les nombres que l'on multiplie s'appellent des facteurs. Ainsi, 3x² - 5x + 2 est une somme de trois termes, et (x + 1)(2x - 3) est un produit de deux facteurs.",
                "Développer une expression, c'est transformer un produit en une somme. Réduire une somme, c'est regrouper les termes semblables, c'est-à-dire ceux qui contiennent la même puissance de x : 3x² + 5x - x² + 2x - 4 = 2x² + 7x - 4. On ordonne en général le résultat suivant les puissances décroissantes de x.",
                "Rappels : x × x = x², alors que x + x = 2x ; 3x × 2x = 6x² ; un terme en x² et un terme en x ne se regroupent jamais (2x² + 3x ne se simplifie pas).",
              ],
              box: { label: "Définition", text: "Développer : transformer un produit en somme. Réduire : regrouper les termes semblables (même puissance de x) pour écrire la somme avec le moins de termes possible." },
            },
            {
              heading: "La simple distributivité",
              paragraphs: [
                "Pour tous réels k, a et b : k(a + b) = ka + kb et k(a - b) = ka - kb. Le facteur k se « distribue » sur chaque terme de la parenthèse, avec son signe. Exemples : 5(2x + 3) = 10x + 15 ; -3(2x - 5) = -6x + 15, car (-3) × (-5) = 15 ; x(4x - 1) = 4x² - x.",
                "La distributivité explique aussi le calcul mental : 7 × 102 = 7 × (100 + 2) = 700 + 14 = 714. Elle se lit dans les deux sens : de gauche à droite, on développe ; de droite à gauche, on factorise (ce sera l'objet de la leçon suivante).",
              ],
              box: { label: "Propriété", text: "k(a + b) = ka + kb et k(a - b) = ka - kb, pour tous réels k, a et b." },
            },
            {
              heading: "La double distributivité",
              paragraphs: [
                "Pour tous réels a, b, c et d : (a + b)(c + d) = ac + ad + bc + bd. Chaque terme du premier facteur multiplie chaque terme du second, ce qui donne quatre produits. Visualisez un rectangle de côtés a + b et c + d, découpé en quatre rectangles d'aires ac, ad, bc et bd : l'aire totale est la somme des quatre.",
                "Exemple : (2x + 3)(x - 4) = 2x × x + 2x × (-4) + 3 × x + 3 × (-4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12. Contrôle avec x = 1 : (2 + 3)(1 - 4) = 5 × (-3) = -15 et 2 - 5 - 12 = -15. Les deux résultats concordent.",
              ],
              box: { label: "Propriété", text: "(a + b)(c + d) = ac + ad + bc + bd. On fait les quatre produits, en tenant compte des signes, puis on réduit." },
            },
            {
              heading: "Parenthèses précédées d'un signe moins",
              paragraphs: [
                "Un signe moins devant une parenthèse revient à multiplier par -1 : -(a + b) = -a - b et -(a - b) = -a + b. On supprime donc la parenthèse en changeant le signe de chacun de ses termes. Exemple : 5x - (3x - 7) = 5x - 3x + 7 = 2x + 7.",
                "Lorsque la parenthèse contient un produit à développer, on développe d'abord le produit en gardant des parenthèses, puis on les supprime. Exemple : 4 - (x - 2)(x + 3) = 4 - (x² + 3x - 2x - 6) = 4 - (x² + x - 6) = 4 - x² - x + 6 = -x² - x + 10.",
              ],
              box: { label: "Règle", text: "-(a + b) = -a - b et -(a - b) = -a + b : on change le signe de tous les termes de la parenthèse." },
            },
          ],
          keyPoints: [
            "Développer : produit → somme ; réduire : regrouper les termes de même puissance de x.",
            "k(a + b) = ka + kb, en distribuant k avec son signe.",
            "(a + b)(c + d) = ac + ad + bc + bd : quatre produits, puis on réduit.",
            "-(a - b) = -a + b : un moins devant une parenthèse change tous les signes.",
            "x × x = x² mais x + x = 2x.",
            "On contrôle un développement en remplaçant x par une valeur simple.",
          ],
          example: {
            statement: "Développez et réduisez E = (3x - 2)(2x + 5) - 2(x² - 4x + 1).",
            solution: [
              "On développe le premier produit par double distributivité : (3x - 2)(2x + 5) = 6x² + 15x - 4x - 10 = 6x² + 11x - 10.",
              "On développe le second produit par simple distributivité, avec le facteur -2 : -2(x² - 4x + 1) = -2x² + 8x - 2.",
              "On additionne : E = 6x² + 11x - 10 - 2x² + 8x - 2.",
              "On regroupe les termes semblables : E = (6 - 2)x² + (11 + 8)x + (-10 - 2) = 4x² + 19x - 12.",
              "Contrôle avec x = 1 : (3 - 2)(2 + 5) - 2(1 - 4 + 1) = 7 + 4 = 11, et 4 + 19 - 12 = 11.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Développez et réduisez : A = 4(2x - 3) ; B = -x(5 - x) ; C = (x + 2)(x + 7) ; D = (2x - 1)(3 - x).",
              hint: "Distribuez chaque facteur avec son signe, puis regroupez les termes de même puissance de x.",
              solution: [
                "A = 4 × 2x - 4 × 3 = 8x - 12.",
                "B = -x × 5 + (-x) × (-x) = -5x + x² = x² - 5x.",
                "C = x² + 7x + 2x + 14 = x² + 9x + 14.",
                "D = 2x × 3 + 2x × (-x) - 1 × 3 - 1 × (-x) = 6x - 2x² - 3 + x = -2x² + 7x - 3.",
                "Contrôle de D avec x = 1 : (2 - 1)(3 - 1) = 2 et -2 + 7 - 3 = 2.",
              ],
            },
            {
              level: 2,
              statement: "Soit F = (x - 3)(2x + 1) - (x + 4)(x - 2). a) Développez et réduisez F. b) Calculez F pour x = -2 de deux façons : avec l'expression de départ, puis avec la forme réduite.",
              hint: "Développez chaque produit entre parenthèses avant de supprimer le signe moins qui précède le second.",
              solution: [
                "a) (x - 3)(2x + 1) = 2x² + x - 6x - 3 = 2x² - 5x - 3.",
                "(x + 4)(x - 2) = x² - 2x + 4x - 8 = x² + 2x - 8.",
                "F = (2x² - 5x - 3) - (x² + 2x - 8) = 2x² - 5x - 3 - x² - 2x + 8 = x² - 7x + 5.",
                "b) Avec l'expression de départ : (-2 - 3)(-4 + 1) - (-2 + 4)(-2 - 2) = (-5) × (-3) - 2 × (-4) = 15 + 8 = 23.",
                "Avec la forme réduite : (-2)² - 7 × (-2) + 5 = 4 + 14 + 5 = 23. Les deux résultats concordent.",
              ],
            },
            {
              level: 3,
              statement: "On considère le programme de calcul suivant : choisir un nombre ; lui ajouter 3 ; multiplier le résultat par le nombre de départ diminué de 1 ; soustraire au résultat le carré du nombre de départ. a) Appliquez le programme au nombre 5. b) On note x le nombre de départ. Exprimez le résultat en fonction de x, puis montrez qu'il est égal à 2x - 3. c) Quel nombre de départ faut-il choisir pour obtenir 0 ? d) Démontrez que, si l'on choisit un nombre entier, le résultat est toujours un nombre impair.",
              hint: "Traduisez chaque étape par une expression : (x + 3), puis (x + 3)(x - 1), puis on soustrait x². Pour d), écrivez 2x - 3 sous la forme 2 × (un entier) + 1.",
              solution: [
                "a) 5 + 3 = 8 ; 8 × (5 - 1) = 32 ; 32 - 5² = 32 - 25 = 7.",
                "b) Le résultat est R = (x + 3)(x - 1) - x² = x² - x + 3x - 3 - x² = 2x - 3.",
                "Contrôle avec x = 5 : 2 × 5 - 3 = 7, comme en a).",
                "c) 2x - 3 = 0 ⇔ 2x = 3 ⇔ x = 1,5. Il faut choisir 1,5.",
                "d) Si x est un entier, 2x - 3 = 2x - 4 + 1 = 2(x - 2) + 1, avec x - 2 entier : le résultat est impair.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Chassez les erreurs de développement.",
            statements: [
              { text: "-(x - 5) = -x + 5", true: true, why: "Le signe moins change le signe de chaque terme de la parenthèse." },
              { text: "3(x + 4) = 3x + 4", true: false, why: "Le facteur 3 multiplie les deux termes : 3(x + 4) = 3x + 12." },
              { text: "(x + 2)(x + 3) = x² + 5x + 6", true: true, why: "x² + 3x + 2x + 6 = x² + 5x + 6." },
              { text: "x × x = 2x", true: false, why: "x × x = x² ; c'est x + x qui vaut 2x." },
              { text: "2x + 3x² se réduit en 5x³", true: false, why: "Un terme en x et un terme en x² ne se regroupent pas : 3x² + 2x reste ainsi." },
              { text: "-2(3 - x) = -6 + 2x", true: true, why: "(-2) × 3 = -6 et (-2) × (-x) = 2x." },
              { text: "(x - 1)(x + 4) = x² + 3x - 4", true: true, why: "x² + 4x - x - 4 = x² + 3x - 4." },
              { text: "5 - (2x + 1) = 4 + 2x", true: false, why: "5 - 2x - 1 = 4 - 2x : le terme 2x change de signe." },
            ],
          },
          quiz: [
            {
              q: "Que donne le développement de -4(x - 3) ?",
              options: ["-4x - 12", "-4x + 12", "-4x - 3", "4x - 12"],
              answer: 1,
              why: "(-4) × x = -4x et (-4) × (-3) = 12.",
            },
            {
              q: "Quelle est la forme réduite de 3x² - 2x + 5 - x² + 7x ?",
              options: ["4x² + 5x + 5", "2x² - 9x + 5", "2x² + 5x + 5", "7x² + 5"],
              answer: 2,
              why: "3x² - x² = 2x², -2x + 7x = 5x, et la constante 5 reste.",
            },
            {
              q: "Que donne le développement de (x - 2)(x + 5) ?",
              options: ["x² + 3x - 10", "x² - 10", "x² - 3x - 10", "x² + 7x - 10"],
              answer: 0,
              why: "x² + 5x - 2x - 10 = x² + 3x - 10.",
            },
            {
              q: "Que vaut 7 - (3 - 2x) ?",
              options: ["4 - 2x", "10 - 2x", "10 + 2x", "4 + 2x"],
              answer: 3,
              why: "7 - 3 + 2x = 4 + 2x : le moins devant la parenthèse change le signe de -2x.",
            },
            {
              q: "Quel est le coefficient de x dans le développement de (2x + 1)(3x - 4) ?",
              options: ["-8", "3", "-5", "11"],
              answer: 2,
              why: "Les termes en x sont 2x × (-4) = -8x et 1 × 3x = 3x, soit -5x au total.",
            },
          ],
          trap: "Oublier de changer tous les signes en supprimant une parenthèse précédée d'un moins : 5x - (3x - 7) = 2x + 7 et non 2x - 7. Autre confusion fréquente : écrire x × x = 2x au lieu de x².",
          method: "Après un développement, vérifiez en remplaçant x par une valeur simple (0, 1 ou 2) dans l'expression de départ et dans le résultat : les deux nombres obtenus doivent être égaux. Un seul test qui échoue prouve une erreur ; un test réussi ne prouve rien, mais rassure.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'identites-remarquables',
          title: 'Les identités remarquables pour factoriser',
          minutes: 30,
          objectives: [
            "Connaître et utiliser les identités remarquables (a + b)², (a - b)² et (a + b)(a - b).",
            "Factoriser une expression à l'aide d'un facteur commun.",
            "Factoriser une expression en reconnaissant une identité remarquable.",
          ],
          course: [
            {
              heading: "Les trois identités remarquables",
              paragraphs: [
                "Pour tous réels a et b : (a + b)² = a² + 2ab + b² ; (a - b)² = a² - 2ab + b² ; (a + b)(a - b) = a² - b². Elles se démontrent par double distributivité : (a + b)² = (a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b². Le terme 2ab s'appelle le double produit.",
                "Exemples de développement : (x + 3)² = x² + 6x + 9 ; (2x - 5)² = (2x)² - 2 × 2x × 5 + 5² = 4x² - 20x + 25 ; (x + 4)(x - 4) = x² - 16. Elles servent aussi en calcul mental : 101² = (100 + 1)² = 10 000 + 200 + 1 = 10 201, et 99 × 101 = (100 - 1)(100 + 1) = 10 000 - 1 = 9 999.",
              ],
              box: { label: "Formule", text: "(a + b)² = a² + 2ab + b² ; (a - b)² = a² - 2ab + b² ; (a + b)(a - b) = a² - b²." },
            },
            {
              heading: "Factoriser avec un facteur commun",
              paragraphs: [
                "Factoriser une expression, c'est la transformer en un produit. La première méthode consiste à repérer un facteur commun à tous les termes et à utiliser la distributivité « à l'envers » : ka + kb = k(a + b). Exemple : 6x² - 9x = 3x × 2x - 3x × 3 = 3x(2x - 3).",
                "Le facteur commun peut être une expression entre parenthèses : (x + 1)(2x - 3) + (x + 1)(x + 5) = (x + 1)[(2x - 3) + (x + 5)] = (x + 1)(3x + 2). Attention au signe moins : (x + 2)(3x - 1) - (x + 2)(x - 4) = (x + 2)[(3x - 1) - (x - 4)] = (x + 2)(3x - 1 - x + 4) = (x + 2)(2x + 3).",
                "Le facteur commun peut aussi être caché : dans (x - 3)² + 2(x - 3), on écrit (x - 3)² = (x - 3)(x - 3), ce qui donne (x - 3)[(x - 3) + 2] = (x - 3)(x - 1).",
              ],
              box: { label: "Méthode", text: "ka + kb = k(a + b) : repérer le facteur commun k, l'écrire devant, puis écrire entre crochets ce qui reste de chaque terme, en conservant les signes." },
            },
            {
              heading: "Factoriser avec une identité remarquable",
              paragraphs: [
                "Lues de droite à gauche, les identités remarquables permettent de factoriser : a² + 2ab + b² = (a + b)² ; a² - 2ab + b² = (a - b)² ; a² - b² = (a + b)(a - b). La plus utilisée est la différence de deux carrés : x² - 25 = x² - 5² = (x - 5)(x + 5) et 9x² - 4 = (3x)² - 2² = (3x - 2)(3x + 2).",
                "Pour reconnaître a² + 2ab + b², on repère deux carrés, puis on vérifie le double produit. Dans 4x² - 12x + 9, on a 4x² = (2x)² et 9 = 3², avec 2 × 2x × 3 = 12x : donc 4x² - 12x + 9 = (2x - 3)². En revanche, x² + 6x + 5 n'est pas de cette forme, car le carré de 3 vaut 9 et non 5.",
                "Les termes a et b peuvent être eux-mêmes des expressions : (x + 1)² - 16 = (x + 1)² - 4² = [(x + 1) - 4][(x + 1) + 4] = (x - 3)(x + 5).",
              ],
              box: { label: "Formule", text: "a² + 2ab + b² = (a + b)² ; a² - 2ab + b² = (a - b)² ; a² - b² = (a - b)(a + b)." },
            },
            {
              heading: "Une démarche en trois questions",
              paragraphs: [
                "Face à une expression à factoriser, posez-vous les questions dans l'ordre. 1) Y a-t-il un facteur commun, éventuellement caché ? 2) Est-ce une différence de deux carrés a² - b² ? 3) Est-ce un trinôme de la forme a² ± 2ab + b², avec le bon double produit ? Si aucune réponse n'est positive, l'expression ne se factorise pas avec ces outils, ou doit d'abord être transformée.",
                "Une somme de deux carrés comme x² + 4 ne se factorise pas avec les identités remarquables : seule la différence a² - b² se factorise. Une factorisation se contrôle toujours en redéveloppant le résultat.",
              ],
            },
          ],
          keyPoints: [
            "(a + b)² = a² + 2ab + b² et (a - b)² = a² - 2ab + b² : ne pas oublier le double produit.",
            "(a + b)(a - b) = a² - b².",
            "Factoriser : transformer une somme en produit.",
            "Facteur commun : ka + kb = k(a + b), avec des crochets si le facteur est une expression.",
            "a² - b² = (a - b)(a + b) ; une somme de deux carrés ne se factorise pas ainsi.",
            "On vérifie une factorisation en la redéveloppant.",
          ],
          example: {
            statement: "Factorisez : A = 16x² - 9 ; B = x² - 14x + 49 ; C = (2x + 1)² - (x - 3)².",
            solution: [
              "A est une différence de deux carrés : 16x² = (4x)² et 9 = 3². Donc A = (4x - 3)(4x + 3).",
              "B : x² = x², 49 = 7² et le double produit 2 × x × 7 = 14x apparaît avec un signe moins. Donc B = (x - 7)².",
              "C est de la forme a² - b² avec a = 2x + 1 et b = x - 3. Donc C = [(2x + 1) - (x - 3)][(2x + 1) + (x - 3)].",
              "On supprime les parenthèses intérieures : C = (2x + 1 - x + 3)(2x + 1 + x - 3) = (x + 4)(3x - 2).",
              "Contrôle de C avec x = 0 : 1² - (-3)² = 1 - 9 = -8 et (0 + 4)(0 - 2) = -8.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Développez à l'aide des identités remarquables : a) (x + 6)² ; b) (3x - 1)² ; c) (5 - 2x)(5 + 2x) ; d) (2x + 7)².",
              hint: "Identifiez a et b, puis appliquez la formule ; n'oubliez pas le double produit 2ab.",
              solution: [
                "a) (x + 6)² = x² + 2 × x × 6 + 6² = x² + 12x + 36.",
                "b) (3x - 1)² = (3x)² - 2 × 3x × 1 + 1² = 9x² - 6x + 1.",
                "c) (5 - 2x)(5 + 2x) = 5² - (2x)² = 25 - 4x².",
                "d) (2x + 7)² = (2x)² + 2 × 2x × 7 + 7² = 4x² + 28x + 49.",
              ],
            },
            {
              level: 2,
              statement: "Factorisez : a) 5x² + 15x ; b) x² - 49 ; c) 25x² + 20x + 4 ; d) (x - 2)(4x + 1) - (x - 2)(x + 6) ; e) 1 - 36x².",
              hint: "Suivez la démarche : facteur commun d'abord, puis différence de deux carrés, puis carré d'une somme ou d'une différence (vérifiez le double produit).",
              solution: [
                "a) Facteur commun 5x : 5x² + 15x = 5x(x + 3).",
                "b) Différence de deux carrés : x² - 49 = x² - 7² = (x - 7)(x + 7).",
                "c) 25x² = (5x)², 4 = 2² et 2 × 5x × 2 = 20x : 25x² + 20x + 4 = (5x + 2)².",
                "d) Facteur commun (x - 2) : (x - 2)[(4x + 1) - (x + 6)] = (x - 2)(4x + 1 - x - 6) = (x - 2)(3x - 5).",
                "e) 1 - 36x² = 1² - (6x)² = (1 - 6x)(1 + 6x).",
              ],
            },
            {
              level: 3,
              statement: "Soit E = (3x - 2)² - (x + 4)². a) Développez et réduisez E. b) Factorisez E, puis montrez que E = 4(x - 3)(2x + 1). c) Résolvez l'équation E = 0. d) Sans calculatrice, calculez 1 003² - 997² à l'aide d'une identité remarquable.",
              hint: "En b), E est de la forme a² - b². Dans chaque facteur obtenu, cherchez ensuite un facteur 2 à mettre en évidence. En c), utilisez la propriété du produit nul vue au collège.",
              solution: [
                "a) E = (9x² - 12x + 4) - (x² + 8x + 16) = 9x² - 12x + 4 - x² - 8x - 16 = 8x² - 20x - 12.",
                "b) E = [(3x - 2) - (x + 4)][(3x - 2) + (x + 4)] = (2x - 6)(4x + 2).",
                "Or 2x - 6 = 2(x - 3) et 4x + 2 = 2(2x + 1), donc E = 2(x - 3) × 2(2x + 1) = 4(x - 3)(2x + 1).",
                "Contrôle : 4(x - 3)(2x + 1) = 4(2x² + x - 6x - 3) = 4(2x² - 5x - 3) = 8x² - 20x - 12, comme en a).",
                "c) Un produit est nul si et seulement si l'un de ses facteurs est nul : x - 3 = 0 ou 2x + 1 = 0, soit x = 3 ou x = -1/2.",
                "d) 1 003² - 997² = (1 003 - 997)(1 003 + 997) = 6 × 2 000 = 12 000.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la factorisation de (x + 5)² - 4x².",
            items: [
              "Reconnaître une différence de deux carrés a² - b²",
              "Identifier a = x + 5 et b = 2x, car 4x² = (2x)²",
              "Écrire (a - b)(a + b) = [(x + 5) - 2x][(x + 5) + 2x]",
              "Réduire chaque facteur : (5 - x)(3x + 5)",
              "Contrôler avec x = 0 : 25 - 0 = 25 et 5 × 5 = 25",
            ],
          },
          quiz: [
            {
              q: "Que donne le développement de (x - 7)² ?",
              options: ["x² - 49", "x² - 14x + 49", "x² - 14x - 49", "x² + 49"],
              answer: 1,
              why: "(a - b)² = a² - 2ab + b² avec a = x et b = 7 : x² - 14x + 49. Le carré b² = 49 est toujours positif.",
            },
            {
              q: "Quelle est la factorisation de 9x² - 25 ?",
              options: ["(3x - 5)(3x + 5)", "(3x - 5)²", "(9x - 25)(9x + 25)", "(3x + 5)²"],
              answer: 0,
              why: "9x² - 25 = (3x)² - 5² est une différence de deux carrés.",
            },
            {
              q: "Quelle expression est égale à (x + 3)² ?",
              options: ["x² + 9", "x² + 3x + 9", "x² + 6x + 6", "x² + 6x + 9"],
              answer: 3,
              why: "(x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9.",
            },
            {
              q: "Quelle est la factorisation de x² + 8x + 16 ?",
              options: ["(x + 8)²", "(x + 4)(x - 4)", "(x + 4)²", "(x + 2)(x + 8)"],
              answer: 2,
              why: "16 = 4² et 2 × x × 4 = 8x : on reconnaît a² + 2ab + b² avec a = x et b = 4.",
            },
            {
              q: "Que vaut 51² - 49² ?",
              options: ["100", "200", "4", "2 500"],
              answer: 1,
              why: "51² - 49² = (51 - 49)(51 + 49) = 2 × 100 = 200.",
            },
          ],
          trap: "Écrire (a + b)² = a² + b² en oubliant le double produit : (x + 3)² = x² + 6x + 9 et non x² + 9. De même, seule une différence de deux carrés se factorise par a² - b² = (a - b)(a + b) : x² + 25 ne se factorise pas ainsi.",
          method: "Avant de factoriser par a² + 2ab + b², vérifiez le double produit : pour 4x² + 12x + 9, a = 2x et b = 3 donnent 2ab = 12x, donc c'est bien (2x + 3)². Contrôlez toujours une factorisation en la redéveloppant mentalement.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'choisir-forme',
          title: 'Choisir la forme adaptée d\'une expression',
          minutes: 30,
          objectives: [
            "Reconnaître la forme développée, la forme factorisée et la forme canonique d'une même expression.",
            "Démontrer que deux expressions sont égales, ou ne le sont pas.",
            "Choisir la forme la plus adaptée pour calculer une image, résoudre une équation ou trouver un extremum.",
            "Comparer deux expressions en étudiant le signe de leur différence.",
          ],
          course: [
            {
              heading: "Plusieurs écritures d'une même expression",
              paragraphs: [
                "Une même expression peut s'écrire de plusieurs façons. Par exemple, pour tout réel x, f(x) = (x - 3)² - 4 = x² - 6x + 5 = (x - 1)(x - 5). La première écriture, qui fait apparaître un carré, s'appelle une forme canonique (vous l'étudierez en détail en première) ; la deuxième est la forme développée réduite ; la troisième est une forme factorisée.",
                "Pour démontrer que deux expressions sont égales pour tout x, on les transforme par des calculs valables pour tout x, en général en développant et en réduisant chacune d'elles. Ici : (x - 3)² - 4 = x² - 6x + 9 - 4 = x² - 6x + 5, et (x - 1)(x - 5) = x² - 5x - x + 5 = x² - 6x + 5. Les trois écritures sont donc égales.",
                "À l'inverse, pour démontrer que deux expressions ne sont pas égales, il suffit de trouver une valeur de x pour laquelle elles donnent des résultats différents (un contre-exemple). Par exemple, (x + 1)² et x² + 1 ne sont pas égales : pour x = 1, la première vaut 4 et la seconde 2.",
              ],
              box: { label: "À retenir", text: "Égalité pour tout x : on la démontre par le calcul (développer, réduire, factoriser). Non-égalité : une seule valeur de x qui donne deux résultats différents suffit." },
            },
            {
              heading: "Calculer des images et résoudre des équations",
              paragraphs: [
                "Chaque forme rend certains calculs plus rapides. Avec f(x) = (x - 3)² - 4 = x² - 6x + 5 = (x - 1)(x - 5) : pour calculer f(0), la forme développée donne immédiatement 5 ; pour f(3), la forme canonique donne 0² - 4 = -4 ; pour f(1) ou f(5), la forme factorisée donne immédiatement 0.",
                "Pour résoudre f(x) = 0, on utilise la forme factorisée et la propriété du produit nul : (x - 1)(x - 5) = 0 ⇔ x = 1 ou x = 5. Pour résoudre f(x) = 5, on utilise la forme développée : x² - 6x + 5 = 5 ⇔ x² - 6x = 0 ⇔ x(x - 6) = 0 ⇔ x = 0 ou x = 6. Pour résoudre f(x) = -4, on utilise la forme canonique : (x - 3)² = 0 ⇔ x = 3.",
              ],
              box: { label: "Méthode", text: "Équation f(x) = 0 ou étude de signe : forme factorisée. Image de 0 ou équation f(x) = terme constant : forme développée. Extremum : forme canonique." },
            },
            {
              heading: "Trouver un extremum avec la forme canonique",
              paragraphs: [
                "La forme canonique permet de trouver un minimum ou un maximum. Pour tout réel x, (x - 3)² ≥ 0, car un carré est toujours positif ou nul. Donc f(x) = (x - 3)² - 4 ≥ -4, et l'égalité f(x) = -4 a lieu seulement pour x = 3. On en conclut que f admet un minimum égal à -4, atteint en x = 3.",
                "De même, si g(x) = 7 - 2(x + 1)², alors -2(x + 1)² ≤ 0 pour tout x, donc g(x) ≤ 7, avec égalité pour x = -1 : g admet un maximum égal à 7, atteint en x = -1. Aucune des deux autres formes ne permet de voir aussi directement cet extremum.",
              ],
            },
            {
              heading: "Comparer deux expressions : le signe de la différence",
              paragraphs: [
                "Pour comparer deux nombres A et B, on étudie le signe de leur différence : si A - B ≥ 0, alors A ≥ B ; si A - B ≤ 0, alors A ≤ B. On choisit alors pour A - B la forme qui permet le mieux de lire son signe : souvent une forme factorisée ou un carré.",
                "Exemple : comparons x² + 1 et 2x pour tout réel x. On calcule la différence : (x² + 1) - 2x = x² - 2x + 1 = (x - 1)². Un carré est positif ou nul, donc x² + 1 - 2x ≥ 0, c'est-à-dire x² + 1 ≥ 2x pour tout réel x, avec égalité seulement pour x = 1.",
              ],
              box: { label: "Propriété", text: "A ≥ B ⇔ A - B ≥ 0. Pour comparer deux expressions, on étudie le signe de leur différence, écrite sous une forme adaptée (produit ou carré)." },
            },
          ],
          keyPoints: [
            "Une même expression a plusieurs formes : développée, factorisée, canonique.",
            "Égalité pour tout x : se démontre par le calcul ; non-égalité : un contre-exemple suffit.",
            "f(x) = 0 : forme factorisée et produit nul.",
            "Image de 0, équation avec le même terme constant : forme développée.",
            "Minimum ou maximum : forme canonique, car un carré est toujours positif ou nul.",
            "Comparer A et B : étudier le signe de A - B.",
          ],
          example: {
            statement: "Soit g(x) = (2x + 1)² - 9 pour tout réel x. a) Montrez que g(x) = 4x² + 4x - 8 et que g(x) = 4(x - 1)(x + 2). b) En choisissant la forme adaptée, calculez g(0), puis résolvez g(x) = 0 et g(x) = -8. c) Déterminez le minimum de g.",
            solution: [
              "a) Développement : (2x + 1)² - 9 = 4x² + 4x + 1 - 9 = 4x² + 4x - 8.",
              "Factorisation (différence de deux carrés) : (2x + 1)² - 3² = (2x + 1 - 3)(2x + 1 + 3) = (2x - 2)(2x + 4) = 2(x - 1) × 2(x + 2) = 4(x - 1)(x + 2).",
              "b) Forme développée : g(0) = -8.",
              "Forme factorisée : g(x) = 0 ⇔ x - 1 = 0 ou x + 2 = 0 ⇔ x = 1 ou x = -2.",
              "Forme développée : g(x) = -8 ⇔ 4x² + 4x = 0 ⇔ 4x(x + 1) = 0 ⇔ x = 0 ou x = -1.",
              "c) Forme canonique : (2x + 1)² ≥ 0, donc g(x) ≥ -9, avec égalité pour 2x + 1 = 0, soit x = -1/2. Le minimum de g est -9, atteint en x = -1/2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit h(x) = (x + 2)² - 1 pour tout réel x. a) Montrez que h(x) = x² + 4x + 3, puis que h(x) = (x + 1)(x + 3). b) En choisissant à chaque fois la forme la plus adaptée, calculez h(0) et h(-2), puis résolvez h(x) = 0.",
              hint: "Pour la forme factorisée, reconnaissez une différence de deux carrés : (x + 2)² - 1².",
              solution: [
                "a) (x + 2)² - 1 = x² + 4x + 4 - 1 = x² + 4x + 3.",
                "(x + 2)² - 1² = (x + 2 - 1)(x + 2 + 1) = (x + 1)(x + 3).",
                "b) Forme développée : h(0) = 3.",
                "Forme canonique : h(-2) = 0² - 1 = -1.",
                "Forme factorisée : h(x) = 0 ⇔ x + 1 = 0 ou x + 3 = 0 ⇔ x = -1 ou x = -3.",
              ],
            },
            {
              level: 2,
              statement: "Soit f(x) = 2(x - 3)² - 8 pour tout réel x. a) Développez et réduisez f(x). b) Factorisez f(x). c) Résolvez les équations f(x) = 0, f(x) = 10 et f(x) = -8 en choisissant la forme adaptée. d) Déterminez le minimum de f.",
              hint: "Pour b), mettez d'abord 2 en facteur : f(x) = 2[(x - 3)² - 4], puis reconnaissez une différence de deux carrés.",
              solution: [
                "a) f(x) = 2(x² - 6x + 9) - 8 = 2x² - 12x + 18 - 8 = 2x² - 12x + 10.",
                "b) f(x) = 2[(x - 3)² - 2²] = 2(x - 3 - 2)(x - 3 + 2) = 2(x - 5)(x - 1).",
                "c) f(x) = 0 : forme factorisée, x - 5 = 0 ou x - 1 = 0, donc x = 5 ou x = 1.",
                "f(x) = 10 : forme développée, 2x² - 12x + 10 = 10 ⇔ 2x² - 12x = 0 ⇔ 2x(x - 6) = 0, donc x = 0 ou x = 6.",
                "f(x) = -8 : forme canonique, 2(x - 3)² = 0 ⇔ x = 3.",
                "d) (x - 3)² ≥ 0, donc 2(x - 3)² ≥ 0 et f(x) ≥ -8, avec égalité pour x = 3. Le minimum de f est -8, atteint en x = 3.",
              ],
            },
            {
              level: 3,
              statement: "Une petite entreprise fabrique x centaines d'objets par semaine, avec 0 ≤ x ≤ 40. Son bénéfice hebdomadaire, en centaines d'euros, est modélisé par B(x) = -2x² + 80x - 600 (données fictives). a) Démontrez que B(x) = -2(x - 20)² + 200 et que B(x) = -2(x - 10)(x - 30). b) Que vaut B(0) ? Interprétez. c) Pour quelles productions le bénéfice est-il nul ? d) Quelle production donne le bénéfice maximal, et quel est ce bénéfice en euros ? e) Pour quelles productions le bénéfice vaut-il -600 ?",
              hint: "Développez les deux expressions proposées pour la question a). Ensuite, choisissez : forme développée pour B(0) et pour B(x) = -600, forme factorisée pour B(x) = 0, forme canonique pour le maximum.",
              solution: [
                "a) -2(x - 20)² + 200 = -2(x² - 40x + 400) + 200 = -2x² + 80x - 800 + 200 = -2x² + 80x - 600. Et -2(x - 10)(x - 30) = -2(x² - 40x + 300) = -2x² + 80x - 600.",
                "b) Forme développée : B(0) = -600. Sans production, l'entreprise perd 600 centaines d'euros, soit 60 000 euros : ce sont ses charges fixes dans ce modèle.",
                "c) Forme factorisée : B(x) = 0 ⇔ x - 10 = 0 ou x - 30 = 0 ⇔ x = 10 ou x = 30, soit 1 000 ou 3 000 objets par semaine.",
                "d) Forme canonique : -2(x - 20)² ≤ 0, donc B(x) ≤ 200, avec égalité pour x = 20. Le bénéfice maximal est atteint pour 2 000 objets ; il vaut 200 centaines d'euros, soit 20 000 euros.",
                "e) Forme développée : -2x² + 80x - 600 = -600 ⇔ -2x² + 80x = 0 ⇔ -2x(x - 40) = 0 ⇔ x = 0 ou x = 40.",
                "Le bénéfice vaut -600 pour une production nulle ou pour 4 000 objets par semaine.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Pour f(x) = (x - 3)² - 4 = x² - 6x + 5 = (x - 1)(x - 5), reliez chaque question à sa réponse en choisissant mentalement la forme la plus adaptée.",
            pairs: [
              { left: "f(0)", right: "5" },
              { left: "f(1)", right: "0" },
              { left: "f(-1)", right: "12" },
              { left: "Solutions de f(x) = 0", right: "1 et 5" },
              { left: "Solutions de f(x) = 5", right: "0 et 6" },
              { left: "Minimum de f", right: "-4, atteint en x = 3" },
            ],
          },
          quiz: [
            {
              q: "Pour résoudre f(x) = 0, quelle forme est la plus adaptée ?",
              options: ["La forme développée", "La forme factorisée", "La forme canonique", "Aucune, il faut une calculatrice"],
              answer: 1,
              why: "Avec un produit, on applique la propriété du produit nul : un produit est nul si et seulement si l'un de ses facteurs est nul.",
            },
            {
              q: "Sachant que f(x) = (x + 1)² - 9, que vaut le minimum de f sur ℝ ?",
              options: ["-9", "1", "-1", "9"],
              answer: 0,
              why: "(x + 1)² ≥ 0, donc f(x) ≥ -9, avec égalité pour x = -1.",
            },
            {
              q: "Soit f(x) = (x - 2)(x + 4). Que vaut f(0) ?",
              options: ["8", "2", "-2", "-8"],
              answer: 3,
              why: "f(0) = (0 - 2)(0 + 4) = -2 × 4 = -8.",
            },
            {
              q: "Pour comparer deux nombres A et B, on peut :",
              options: ["comparer A² et B² dans tous les cas", "calculer A × B", "étudier le signe de A - B", "comparer leurs premiers chiffres"],
              answer: 2,
              why: "A ≥ B équivaut à A - B ≥ 0. Comparer les carrés ne marche que pour des nombres positifs.",
            },
            {
              q: "Pour démontrer que deux expressions sont égales pour tout x, il faut :",
              options: ["les tester pour x = 0 et x = 1", "développer et réduire chacune d'elles", "tracer leurs courbes à la calculatrice", "vérifier qu'elles ont le même premier terme"],
              answer: 1,
              why: "Des tests ou des courbes ne prouvent rien pour tout x ; seul un calcul algébrique valable pour tout x le démontre.",
            },
          ],
          trap: "Croire que tester quelques valeurs suffit à démontrer que deux expressions sont égales : il faut un calcul valable pour tout x. En revanche, une seule valeur qui donne deux résultats différents suffit à prouver qu'elles ne sont pas égales.",
          method: "Avant de calculer, demandez-vous de quoi la question a besoin : d'un produit (équation f(x) = 0), d'une somme (image de 0, équation avec le même terme constant) ou d'un carré (minimum ou maximum). Écrivez une fois pour toutes les différentes formes au brouillon, vérifiez qu'elles sont égales, puis choisissez.",
        },
      ],
    },
  ],
}
