import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-4e',
  chapters: [
    /* ================================================================== */
    /* MULTIPLIER ET DIVISER DES NOMBRES RELATIFS                          */
    /* ================================================================== */
    {
      id: 'nombres-relatifs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'multiplication-relatifs',
          title: 'Multiplier des nombres relatifs : la règle des signes',
          minutes: 30,
          objectives: [
            "Calculer le produit de deux nombres relatifs en appliquant la règle des signes.",
            "Déterminer le signe d'un produit de plusieurs nombres relatifs.",
            "Organiser un calcul de produit pour le simplifier.",
          ],
          course: [
            {
              heading: "Le produit de deux nombres relatifs",
              paragraphs: [
                "Un nombre relatif a un signe (+ ou -) et une distance à zéro : -7 a le signe « - » et sa distance à zéro est 7. Pour multiplier deux nombres relatifs, on s'occupe séparément de ces deux informations : on multiplie les distances à zéro, puis on cherche le signe du résultat.",
                "Commençons par un produit avec un seul nombre négatif. Si vous perdez 3 € par jour pendant 4 jours, votre argent varie de (-3) + (-3) + (-3) + (-3) = -12 €. On écrit donc 4 × (-3) = -12, et de même (-3) × 4 = -12 : le produit d'un nombre positif et d'un nombre négatif est négatif.",
                "Et le produit de deux nombres négatifs ? Observez cette suite : (-3) × 2 = -6, (-3) × 1 = -3, (-3) × 0 = 0. Chaque fois que le second facteur diminue de 1, le résultat augmente de 3. En continuant la régularité : (-3) × (-1) = 3, puis (-3) × (-2) = 6. Le produit de deux nombres négatifs est donc positif.",
              ],
              box: { label: "Règle", text: "Le produit de deux nombres de même signe est positif. Le produit de deux nombres de signes contraires est négatif. La distance à zéro du produit est le produit des distances à zéro. Exemples : (-5) × (-4) = 20 ; (-5) × 4 = -20 ; 5 × (-4) = -20." },
            },
            {
              heading: "Le signe d'un produit de plusieurs facteurs",
              paragraphs: [
                "Pour un produit de plusieurs nombres relatifs, on multiplie les facteurs deux par deux. Chaque paire de facteurs négatifs donne un résultat positif : seuls les facteurs négatifs « en trop » comptent. Il suffit donc de compter les facteurs négatifs.",
                "Si le nombre de facteurs négatifs est pair (0, 2, 4...), le produit est positif. S'il est impair (1, 3, 5...), le produit est négatif. Exemple : dans (-2) × (-5) × (-1) × 3, il y a trois facteurs négatifs, donc le produit est négatif ; comme 2 × 5 × 1 × 3 = 30, le produit vaut -30.",
                "Attention au cas du zéro : si l'un des facteurs est égal à 0, le produit est nul, quel que soit le nombre de facteurs négatifs. Ainsi (-8) × 0 × (-125) = 0. Le nombre 0 n'est ni positif ni négatif.",
              ],
              box: { label: "Propriété", text: "Un produit de nombres relatifs non nuls est positif si le nombre de facteurs négatifs est pair, et négatif si ce nombre est impair. Un produit dont l'un des facteurs est nul est égal à 0." },
            },
            {
              heading: "Écrire et organiser un produit",
              paragraphs: [
                "On place un nombre négatif entre parenthèses quand il suit un signe opératoire : on écrit 5 × (-2) et non 5 × -2. Multiplier un nombre par -1 donne son opposé : (-1) × 7 = -7 et (-1) × (-7) = 7.",
                "Le carré d'un nombre négatif est positif : (-3)² = (-3) × (-3) = 9. Les parenthèses sont indispensables, car -3² signifie « l'opposé de 3² », c'est-à-dire -9. À la calculatrice, tapez bien (-3)².",
                "Dans un produit, on peut changer l'ordre des facteurs et les regrouper comme on veut. Cela permet de calculer plus vite : (-25) × 7 × (-4) = [(-25) × (-4)] × 7 = 100 × 7 = 700. On cherche les paires qui donnent 10, 100 ou 1 000.",
              ],
              box: { label: "À retenir", text: "(-1) × a est l'opposé de a. Le carré d'un nombre relatif est toujours positif ou nul : (-6)² = 36. On peut changer l'ordre des facteurs d'un produit sans changer le résultat." },
            },
          ],
          keyPoints: [
            "Pour multiplier deux relatifs, on multiplie les distances à zéro, puis on applique la règle des signes.",
            "Deux nombres de même signe ont un produit positif ; deux nombres de signes contraires ont un produit négatif.",
            "Un nombre pair de facteurs négatifs donne un produit positif ; un nombre impair donne un produit négatif.",
            "Si un facteur est nul, le produit est nul.",
            "(-3)² = 9, mais -3² = -9 : attention aux parenthèses.",
            "La règle des signes concerne les produits, pas les sommes : (-3) + (-5) = -8.",
          ],
          example: {
            statement: "Calculez A = (-6) × 7, B = (-8) × (-1,5) et C = (-2) × 5 × (-3) × (-1).",
            solution: [
              "A : les deux facteurs sont de signes contraires, le produit est négatif. Comme 6 × 7 = 42, A = -42.",
              "B : les deux facteurs sont négatifs, donc de même signe : le produit est positif. Comme 8 × 1,5 = 12, B = 12.",
              "C : on compte les facteurs négatifs : -2, -3 et -1, soit trois facteurs. Trois est impair : le produit est négatif.",
              "On multiplie les distances à zéro : 2 × 5 × 3 × 1 = 30.",
              "Réponse : A = -42, B = 12 et C = -30.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) (-9) × 4 ; b) (-7) × (-8) ; c) 2,5 × (-6) ; d) (-0,3) × (-20) ; e) (-1) × (-13) ; f) 0 × (-45).",
              hint: "Pour chaque produit, décidez d'abord du signe (même signe ou signes contraires), puis multipliez les nombres sans leur signe.",
              solution: [
                "a) Signes contraires, résultat négatif : 9 × 4 = 36, donc (-9) × 4 = -36.",
                "b) Même signe, résultat positif : 7 × 8 = 56, donc (-7) × (-8) = 56.",
                "c) Signes contraires : 2,5 × 6 = 15, donc 2,5 × (-6) = -15.",
                "d) Même signe : 0,3 × 20 = 6, donc (-0,3) × (-20) = 6.",
                "e) Même signe : (-1) × (-13) = 13 (multiplier par -1 donne l'opposé de -13).",
                "f) Un facteur est nul : 0 × (-45) = 0.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque produit, donnez d'abord son signe sans calculer, puis calculez-le. E = (-2) × (-3) × (-4) × 5 ; F = (-1) × (-1) × (-1) × (-1) × (-1) × (-1) ; G = (-25) × 13 × (-4) ; H = (-7) × 0 × (-9).",
              hint: "Comptez les facteurs négatifs : un nombre pair donne un produit positif, un nombre impair un produit négatif. Pour G, regroupez astucieusement deux facteurs.",
              solution: [
                "E : trois facteurs négatifs (-2, -3, -4), nombre impair, donc E est négatif. 2 × 3 × 4 × 5 = 120, donc E = -120.",
                "F : six facteurs négatifs, nombre pair, donc F est positif. 1 × 1 × 1 × 1 × 1 × 1 = 1, donc F = 1.",
                "G : deux facteurs négatifs, nombre pair, donc G est positif. On regroupe : 25 × 4 = 100, puis 100 × 13 = 1 300. Donc G = 1 300.",
                "H : l'un des facteurs est 0, donc H = 0 (le produit n'est ni positif ni négatif).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un jeu de questions (données fictives), une bonne réponse rapporte 3 points, une mauvaise réponse fait perdre 2 points, c'est-à-dire qu'elle compte pour -2, et une question sans réponse compte pour 0. Il y a 15 questions. a) Léa a 8 bonnes réponses, 6 mauvaises et 1 sans réponse. Calculez son score. b) Sam a 5 bonnes réponses, 9 mauvaises et 1 sans réponse. Calculez son score. c) Tom a répondu aux 15 questions et son score est 0. Combien a-t-il eu de bonnes réponses ? Justifiez.",
              hint: "Le score est une somme de produits : (nombre de bonnes réponses) × 3 + (nombre de mauvaises) × (-2). Pour la question c, essayez plusieurs nombres de bonnes réponses, les autres étant mauvaises.",
              solution: [
                "a) Score de Léa : 8 × 3 + 6 × (-2) + 1 × 0 = 24 + (-12) + 0 = 12 points.",
                "b) Score de Sam : 5 × 3 + 9 × (-2) + 1 × 0 = 15 + (-18) = -3 points. Son score est négatif.",
                "c) Si Tom a b bonnes réponses, il a 15 - b mauvaises réponses. On essaie des valeurs. Avec 5 bonnes : 15 + 10 × (-2) = 15 - 20 = -5. Avec 6 bonnes : 18 + 9 × (-2) = 18 - 18 = 0. Avec 7 bonnes : 21 + 8 × (-2) = 21 - 16 = 5.",
                "Chaque bonne réponse de plus ajoute 3 points et retire une mauvaise réponse (donc ajoute encore 2 points) : le score augmente de 5 à chaque fois. Seule la valeur 6 donne 0.",
                "Réponse : Tom a eu 6 bonnes réponses (et 9 mauvaises).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les produits de nombres relatifs.",
            statements: [
              { text: "(-3) × (-5) = -15.", true: false, why: "Les deux facteurs ont le même signe : le produit est positif, il vaut 15." },
              { text: "Le produit de deux nombres négatifs est positif.", true: true, why: "C'est la règle des signes : deux facteurs de même signe donnent un produit positif." },
              { text: "(-2) × (-2) × (-2) est positif.", true: false, why: "Il y a trois facteurs négatifs, un nombre impair : le produit vaut -8." },
              { text: "Multiplier un nombre par -1 donne son opposé.", true: true, why: "(-1) × 7 = -7 et (-1) × (-7) = 7." },
              { text: "(-4)² = 16.", true: true, why: "(-4)² = (-4) × (-4) = 16 : le carré d'un nombre est toujours positif ou nul." },
              { text: "(-3) + (-5) = 8, car « moins par moins donne plus ».", true: false, why: "La règle des signes ne s'applique qu'aux produits et aux quotients. Ici, c'est une somme : (-3) + (-5) = -8." },
              { text: "Un produit qui contient le facteur 0 est nul, même avec des facteurs négatifs.", true: true, why: "Multiplier par 0 donne toujours 0." },
            ],
          },
          quiz: [
            { q: "Combien vaut (-7) × (-6) ?", options: ["-42", "42", "-13", "13"], answer: 1, why: "Les deux facteurs sont négatifs : le produit est positif, et 7 × 6 = 42." },
            { q: "Quel est le signe de (-1) × 2 × (-3) × (-4) × (-5) ?", options: ["Positif", "Négatif", "Nul", "Impossible à savoir sans calculer"], answer: 0, why: "Il y a quatre facteurs négatifs, un nombre pair : le produit est positif (il vaut 120)." },
            { q: "Quel produit est égal à -24 ?", options: ["(-4) × (-6)", "(-2) × (-12)", "(-3) × 8", "6 × 4"], answer: 2, why: "(-3) × 8 a deux facteurs de signes contraires : le résultat est négatif et vaut -24. Les autres produits valent 24." },
            { q: "Par quel nombre faut-il multiplier -5 pour obtenir 35 ?", options: ["7", "-30", "30", "-7"], answer: 3, why: "Le résultat est positif, donc le facteur cherché est négatif comme -5 : (-5) × (-7) = 35." },
            { q: "Le produit de sept nombres négatifs est :", options: ["toujours positif", "toujours négatif", "parfois positif, parfois négatif"], answer: 1, why: "Sept est un nombre impair de facteurs négatifs : le produit est toujours négatif." },
          ],
          trap: "Appliquer la règle des signes de la multiplication à une addition, en écrivant (-3) + (-5) = 8 parce que « moins par moins donne plus ». La règle des signes ne vaut que pour les produits et les quotients : (-3) + (-5) = -8.",
          method: "Traitez toujours le signe en premier, en comptant les facteurs négatifs, puis calculez le produit des nombres sans leur signe. Vérifiez enfin l'ordre de grandeur du résultat.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'division-relatifs',
          title: 'Diviser des nombres relatifs',
          minutes: 30,
          objectives: [
            "Calculer le quotient de deux nombres relatifs.",
            "Appliquer la règle des signes à un quotient et à une écriture fractionnaire.",
            "Utiliser le lien entre multiplication et division pour vérifier un calcul.",
          ],
          course: [
            {
              heading: "Diviser, c'est chercher un facteur manquant",
              paragraphs: [
                "Diviser a par b (avec b différent de 0), c'est chercher le nombre q tel que b × q = a. Par exemple, 12 ÷ 3 = 4 parce que 3 × 4 = 12. Cette définition reste vraie avec les nombres relatifs : elle permet de trouver le signe d'un quotient à partir de la règle des signes du produit.",
                "Calculons (-12) ÷ 3 : on cherche le nombre qui, multiplié par 3, donne -12. C'est -4, car 3 × (-4) = -12. Calculons (-12) ÷ (-3) : on cherche le nombre qui, multiplié par -3, donne -12. C'est 4, car (-3) × 4 = -12. Enfin 12 ÷ (-3) = -4, car (-3) × (-4) = 12.",
                "On retrouve exactement la même règle des signes que pour la multiplication. La distance à zéro du quotient est le quotient des distances à zéro : 12 ÷ 3 = 4.",
              ],
              box: { label: "Règle", text: "Le quotient de deux nombres de même signe est positif. Le quotient de deux nombres de signes contraires est négatif. Exemples : (-20) ÷ (-5) = 4 ; (-20) ÷ 5 = -4 ; 20 ÷ (-5) = -4. On ne divise jamais par 0." },
            },
            {
              heading: "Le quotient en écriture fractionnaire",
              paragraphs: [
                "Le quotient de a par b s'écrit aussi a/b, avec un trait de fraction. Ainsi (-15)/6 = (-15) ÷ 6 = -2,5. Comme 15/(-6), -15/6 et -(15/6) donnent tous le même résultat, le signe « - » d'une fraction peut se placer au numérateur, au dénominateur ou devant la fraction.",
                "Si le numérateur et le dénominateur sont tous les deux négatifs, le quotient est positif : (-9)/(-4) = 9/4 = 2,25. En pratique, on écrit le résultat avec un dénominateur positif, et le signe « - » éventuel devant la fraction ou au numérateur : on préfère -3/4 à 3/(-4).",
              ],
              box: { label: "Propriété", text: "Pour tous nombres a et b, avec b non nul : (-a)/b = a/(-b) = -(a/b) et (-a)/(-b) = a/b." },
            },
            {
              heading: "Cas particuliers et calculs enchaînés",
              paragraphs: [
                "0 divisé par un nombre non nul donne 0 : 0 ÷ (-5) = 0, car (-5) × 0 = 0. En revanche, diviser par 0 est impossible : aucun nombre multiplié par 0 ne peut donner -7, donc (-7) ÷ 0 n'existe pas. Diviser par -1 donne l'opposé : 8 ÷ (-1) = -8.",
                "Tous les quotients ne tombent pas juste. (-10) ÷ 3 = -10/3, et la calculatrice affiche -3,333... On garde l'écriture fractionnaire -10/3 comme valeur exacte, ou l'on donne une valeur approchée : -10/3 ≈ -3,33 au centième près.",
                "Dans un calcul qui ne contient que des multiplications et des divisions, on peut déterminer le signe d'un coup en comptant les nombres négatifs, comme pour un produit. Exemple : (-6) × (-5) ÷ (-3) contient trois nombres négatifs, donc le résultat est négatif ; 6 × 5 ÷ 3 = 10, donc le résultat vaut -10.",
              ],
              box: { label: "À retenir", text: "Pour vérifier un quotient, on fait la multiplication inverse : (-56) ÷ 8 = -7 est juste car 8 × (-7) = -56." },
            },
          ],
          keyPoints: [
            "a ÷ b = q signifie b × q = a (avec b non nul).",
            "Le quotient de deux nombres de même signe est positif ; de signes contraires, il est négatif.",
            "(-a)/b = a/(-b) = -(a/b) et (-a)/(-b) = a/b.",
            "0 ÷ b = 0, mais on ne divise jamais par 0.",
            "Avec seulement des produits et des quotients, on compte les nombres négatifs pour trouver le signe.",
            "On vérifie un quotient par une multiplication.",
          ],
          example: {
            statement: "Calculez A = (-56) ÷ 8, B = (-4,5) ÷ (-0,9), C = 36/(-9) et D = (-8) × 9 ÷ (-12).",
            solution: [
              "A : signes contraires, le quotient est négatif ; 56 ÷ 8 = 7, donc A = -7. Vérification : 8 × (-7) = -56.",
              "B : même signe, le quotient est positif ; 4,5 ÷ 0,9 = 5, donc B = 5. Vérification : (-0,9) × 5 = -4,5.",
              "C : signes contraires, le quotient est négatif ; 36 ÷ 9 = 4, donc C = -4.",
              "D : on calcule de gauche à droite. (-8) × 9 = -72, puis (-72) ÷ (-12) = 6 (même signe, quotient positif).",
              "Réponse : A = -7, B = 5, C = -4 et D = 6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) (-42) ÷ 6 ; b) (-63) ÷ (-9) ; c) 48 ÷ (-4) ; d) (-1,2) ÷ 4 ; e) 0 ÷ (-7) ; f) (-50)/(-0,5).",
              hint: "Décidez d'abord du signe du quotient, puis divisez les nombres sans leur signe. Vérifiez chaque résultat par une multiplication.",
              solution: [
                "a) Signes contraires : 42 ÷ 6 = 7, donc (-42) ÷ 6 = -7.",
                "b) Même signe : 63 ÷ 9 = 7, donc (-63) ÷ (-9) = 7.",
                "c) Signes contraires : 48 ÷ 4 = 12, donc 48 ÷ (-4) = -12.",
                "d) Signes contraires : 1,2 ÷ 4 = 0,3, donc (-1,2) ÷ 4 = -0,3.",
                "e) 0 ÷ (-7) = 0, car (-7) × 0 = 0.",
                "f) Même signe : 50 ÷ 0,5 = 100 (il y a 100 demis dans 50), donc (-50)/(-0,5) = 100.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le nombre qui convient : a) (-6) × ... = 54 ; b) ... × 7 = -91 ; c) (-120) ÷ ... = 8 ; d) ... ÷ (-4) = -2,5. e) Donnez une valeur approchée au centième de (-20) ÷ 7.",
              hint: "Un facteur manquant s'obtient par une division : dans (-6) × ... = 54, le nombre cherché est 54 ÷ (-6). Pour d, pensez que le nombre cherché est égal à (-2,5) × (-4).",
              solution: [
                "a) Le nombre cherché est 54 ÷ (-6) = -9. Vérification : (-6) × (-9) = 54.",
                "b) Le nombre cherché est (-91) ÷ 7 = -13. Vérification : (-13) × 7 = -91.",
                "c) On cherche le nombre par lequel diviser -120 pour obtenir 8 : c'est (-120) ÷ 8 = -15. Vérification : (-120) ÷ (-15) = 8.",
                "d) Le nombre cherché est (-2,5) × (-4) = 10. Vérification : 10 ÷ (-4) = -2,5.",
                "e) 20 ÷ 7 ≈ 2,857, et le quotient est négatif (signes contraires) : (-20) ÷ 7 ≈ -2,86 au centième près.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici les températures relevées à 7 h pendant cinq jours dans une ville (données fictives) : -4 °C ; -7 °C ; 2 °C ; -3 °C ; -8 °C. a) Calculez la température moyenne de ces cinq relevés. b) Un soir, la température passe de 5 °C à 18 h à une température plus basse, en baissant chaque heure de la même quantité. Elle a baissé de 18 °C en 6 heures. De combien varie-t-elle en une heure ? Quelle température fait-il à 22 h ? c) La semaine suivante, la moyenne de cinq relevés est -2,4 °C. Quelle est la somme de ces cinq relevés ?",
              hint: "La moyenne est la somme des valeurs divisée par leur nombre. Une baisse de 18 °C est une variation de -18 °C.",
              solution: [
                "a) Somme des relevés : (-4) + (-7) + 2 + (-3) + (-8) = -22 + 2 = -20.",
                "Moyenne : (-20) ÷ 5 = -4. La température moyenne est -4 °C.",
                "b) Variation par heure : (-18) ÷ 6 = -3. La température baisse de 3 °C par heure.",
                "De 18 h à 22 h, il s'écoule 4 heures : la variation est 4 × (-3) = -12 °C. À 22 h, il fait 5 + (-12) = -7 °C.",
                "c) Si la moyenne de cinq relevés vaut -2,4, alors leur somme vaut (-2,4) × 5 = -12. Vérification : (-12) ÷ 5 = -2,4.",
                "Réponses : a) -4 °C ; b) -3 °C par heure, et -7 °C à 22 h ; c) la somme vaut -12 °C.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque quotient à sa valeur.",
            pairs: [
              { left: "(-36) ÷ 4", right: "-9" },
              { left: "(-36) ÷ (-4)", right: "9" },
              { left: "36 ÷ (-12)", right: "-3" },
              { left: "(-3) ÷ (-12)", right: "0,25" },
              { left: "0 ÷ (-9)", right: "0" },
              { left: "(-4,5) ÷ 0,9", right: "-5" },
            ],
          },
          quiz: [
            { q: "Combien vaut (-45) ÷ (-5) ?", options: ["-9", "1/9", "-40", "9"], answer: 3, why: "Les deux nombres sont négatifs : le quotient est positif, et 45 ÷ 5 = 9." },
            { q: "Quelle écriture est égale à 3/(-4) ?", options: ["-3/4", "3/4", "-3/(-4)", "4/(-3)"], answer: 0, why: "Le signe « - » peut passer du dénominateur au numérateur : 3/(-4) = -3/4 = -0,75." },
            { q: "Quel est le signe de (-8) × (-3) ÷ (-6) ?", options: ["Positif", "Il est nul", "Négatif"], answer: 2, why: "Il y a trois nombres négatifs, un nombre impair : le résultat est négatif (il vaut -4)." },
            { q: "Pour vérifier que (-72) ÷ 8 = -9, on calcule :", options: ["(-9) + 8", "8 × (-9)", "(-72) × 8", "(-72) - 9"], answer: 1, why: "Un quotient se vérifie par la multiplication : 8 × (-9) doit redonner -72, ce qui est le cas." },
            { q: "Que vaut (-7) ÷ 0 ?", options: ["0, car on divise par 0", "-7, car diviser par 0 ne change rien", "Rien : on ne divise pas par 0"], answer: 2, why: "Aucun nombre multiplié par 0 ne donne -7 : la division par 0 n'existe pas." },
          ],
          trap: "Oublier le signe du dénominateur, en écrivant 15/(-3) = 5 au lieu de -5, ou croire que la division a une règle des signes différente de celle de la multiplication : c'est exactement la même.",
          method: "Vérifiez chaque quotient par une multiplication : si vous trouvez (-56) ÷ 8 = -7, contrôlez que 8 × (-7) redonne bien -56. Cette vérification corrige à la fois le signe et la valeur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'enchainer-calculs',
          title: 'Enchaîner les calculs : priorités opératoires',
          minutes: 35,
          objectives: [
            "Effectuer un calcul en respectant les priorités opératoires.",
            "Calculer une expression avec des nombres relatifs, des parenthèses, des crochets ou un trait de fraction.",
            "Saisir correctement un calcul à la calculatrice.",
          ],
          course: [
            {
              heading: "L'ordre des opérations",
              paragraphs: [
                "Un calcul comme 2 + 3 × 4 ne se fait pas de gauche à droite : la multiplication est prioritaire, donc 2 + 3 × 4 = 2 + 12 = 14 (et non 5 × 4 = 20). Ces règles de priorité sont les mêmes partout dans le monde, et votre calculatrice les applique aussi : tout le monde trouve ainsi le même résultat.",
                "On effectue d'abord les calculs entre parenthèses, en commençant par les plus intérieures. Ensuite viennent les multiplications et les divisions, de gauche à droite. Enfin, on effectue les additions et les soustractions, de gauche à droite.",
                "« De gauche à droite » compte vraiment : 24 ÷ 4 × 2 = 6 × 2 = 12, et non 24 ÷ 8 = 3. De même, 10 - 4 + 3 = 6 + 3 = 9, et non 10 - 7 = 3.",
              ],
              box: { label: "Règle", text: "1. Les calculs entre parenthèses (ou crochets), en commençant par les plus intérieurs. 2. Les multiplications et les divisions, de gauche à droite. 3. Les additions et les soustractions, de gauche à droite." },
            },
            {
              heading: "Les priorités avec des nombres relatifs",
              paragraphs: [
                "Les priorités ne changent pas avec les nombres relatifs, mais il faut appliquer la bonne règle à chaque opération : la règle des signes pour les produits et les quotients, et les règles d'addition pour les sommes. Exemple : -3 + 4 × (-2) = -3 + (-8) = -11.",
                "Soustraire un nombre, c'est additionner son opposé : 5 - (-3) = 5 + 3 = 8 et -2 - 7 = -2 + (-7) = -9. Dans un long calcul, on peut transformer toutes les soustractions en additions, puis regrouper les nombres positifs d'un côté et les nombres négatifs de l'autre.",
                "Exemple complet : A = -7 - 3 × (-4) + 10 ÷ (-2). On calcule d'abord le produit et le quotient : 3 × (-4) = -12 et 10 ÷ (-2) = -5. Donc A = -7 - (-12) + (-5) = -7 + 12 - 5 = 0.",
              ],
            },
            {
              heading: "Crochets et trait de fraction",
              paragraphs: [
                "Quand des parenthèses sont à l'intérieur d'autres parenthèses, on remplace souvent les parenthèses extérieures par des crochets, pour mieux s'y retrouver. On commence toujours par l'intérieur. Exemple : -2 × [7 - 3 × (5 - 8)] = -2 × [7 - 3 × (-3)] = -2 × [7 - (-9)] = -2 × 16 = -32.",
                "Le trait de fraction joue le rôle de parenthèses invisibles : il regroupe tout le numérateur et tout le dénominateur. Pour calculer (2 - 8)/(-3 + 1), on calcule séparément le numérateur, 2 - 8 = -6, et le dénominateur, -3 + 1 = -2, puis on divise : (-6)/(-2) = 3.",
              ],
              box: { label: "À retenir", text: "Le trait de fraction regroupe le numérateur et le dénominateur comme des parenthèses : on les calcule séparément avant de diviser." },
            },
            {
              heading: "À la calculatrice et sur une seule ligne",
              paragraphs: [
                "La calculatrice respecte les priorités, mais elle ne voit pas les parenthèses invisibles du trait de fraction. Pour calculer (2 - 8)/(-3 + 1), il faut taper (2 - 8) ÷ (-3 + 1). Si vous tapez 2 - 8 ÷ -3 + 1, la calculatrice effectue d'abord 8 ÷ (-3), et le résultat est faux.",
                "Utilisez aussi la touche du signe « - » des nombres négatifs, souvent notée (-), qui est différente de la touche de la soustraction sur beaucoup de modèles. Enfin, contrôlez toujours le résultat par un ordre de grandeur ou par un calcul à la main.",
              ],
            },
          ],
          keyPoints: [
            "Ordre : parenthèses (de l'intérieur vers l'extérieur), puis × et ÷ de gauche à droite, puis + et - de gauche à droite.",
            "Avec des relatifs, les priorités ne changent pas : -3 + 4 × (-2) = -3 + (-8) = -11.",
            "Soustraire un nombre, c'est additionner son opposé : 5 - (-3) = 5 + 3.",
            "Le trait de fraction regroupe le numérateur et le dénominateur : on les calcule séparément.",
            "À la calculatrice, on ajoute les parenthèses du numérateur et du dénominateur.",
          ],
          example: {
            statement: "Calculez B = 12 - 5 × (3 - 7) ÷ (-2), en détaillant chaque étape.",
            solution: [
              "On commence par la parenthèse : 3 - 7 = -4. Donc B = 12 - 5 × (-4) ÷ (-2).",
              "On effectue la multiplication et la division de gauche à droite : 5 × (-4) = -20, puis (-20) ÷ (-2) = 10.",
              "Donc B = 12 - 10.",
              "On termine par la soustraction : B = 2.",
              "Réponse : B = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez en détaillant les étapes : a) -6 + 4 × (-3) ; b) (-6 + 4) × (-3) ; c) 20 - (-8) ÷ 2 ; d) [20 - (-8)] ÷ 2.",
              hint: "Dans a et c, la multiplication ou la division passe avant l'addition ou la soustraction. Dans b et d, les parenthèses et les crochets passent en premier.",
              solution: [
                "a) -6 + 4 × (-3) = -6 + (-12) = -18.",
                "b) (-6 + 4) × (-3) = (-2) × (-3) = 6.",
                "c) 20 - (-8) ÷ 2 = 20 - (-4) = 20 + 4 = 24.",
                "d) [20 - (-8)] ÷ 2 = (20 + 8) ÷ 2 = 28 ÷ 2 = 14.",
                "Les mêmes nombres donnent des résultats différents selon la place des parenthèses : -18 et 6, puis 24 et 14.",
              ],
            },
            {
              level: 2,
              statement: "Calculez : C = 5 × (-2) - 3 × (-4) × (-1) ; D = (-15 + 3)/(2 - 6) ; E = -2 × [7 - 3 × (5 - 8)].",
              hint: "Pour C, calculez les deux produits avant la soustraction. Pour D, calculez séparément le numérateur et le dénominateur. Pour E, partez de la parenthèse la plus intérieure.",
              solution: [
                "C : 5 × (-2) = -10 et 3 × (-4) × (-1) = 12 (deux facteurs négatifs). Donc C = -10 - 12 = -22.",
                "D : numérateur -15 + 3 = -12 ; dénominateur 2 - 6 = -4. Donc D = (-12)/(-4) = 3.",
                "E : 5 - 8 = -3, puis 3 × (-3) = -9, puis 7 - (-9) = 7 + 9 = 16.",
                "Enfin -2 × 16 = -32, donc E = -32.",
                "Réponses : C = -22, D = 3 et E = -32.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On considère l'expression 4 - 6 × 2 - 5. a) Calculez-la sans ajouter de parenthèses. b) Placez des parenthèses pour que le résultat soit -9. c) Placez des parenthèses pour que le résultat soit 22. d) Placez deux paires de parenthèses pour que le résultat soit 6.",
              hint: "Essayez les différentes positions possibles : autour de 4 - 6, autour de 2 - 5, ou les deux. Calculez à chaque fois en respectant les priorités.",
              solution: [
                "a) Sans parenthèses, la multiplication passe d'abord : 4 - 12 - 5 = -8 - 5 = -13.",
                "b) (4 - 6) × 2 - 5 = (-2) × 2 - 5 = -4 - 5 = -9.",
                "c) 4 - 6 × (2 - 5) = 4 - 6 × (-3) = 4 - (-18) = 4 + 18 = 22.",
                "d) (4 - 6) × (2 - 5) = (-2) × (-3) = 6.",
                "Réponses : a) -13 ; b) (4 - 6) × 2 - 5 ; c) 4 - 6 × (2 - 5) ; d) (4 - 6) × (2 - 5).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul de F = 10 - 2 × [3 - (1 - 6)] ÷ 4.",
            items: [
              "Calculer la parenthèse intérieure : 1 - 6 = -5",
              "Calculer le crochet : 3 - (-5) = 8",
              "Effectuer la multiplication : 2 × 8 = 16",
              "Effectuer la division : 16 ÷ 4 = 4",
              "Effectuer la soustraction : 10 - 4 = 6",
            ],
          },
          quiz: [
            { q: "Combien vaut -2 + 3 × (-4) ?", options: ["-14", "4", "-20", "14"], answer: 0, why: "La multiplication passe d'abord : 3 × (-4) = -12, puis -2 + (-12) = -14." },
            { q: "Combien vaut (-2 + 3) × (-4) ?", options: ["4", "-14", "20", "-4"], answer: 3, why: "La parenthèse passe d'abord : -2 + 3 = 1, puis 1 × (-4) = -4." },
            { q: "Dans 8 - 12 ÷ (-4) × 2, quelle opération effectue-t-on en premier ?", options: ["La soustraction 8 - 12", "La division 12 ÷ (-4)", "La multiplication (-4) × 2"], answer: 1, why: "La division et la multiplication passent avant la soustraction, et entre elles on va de gauche à droite : on commence par 12 ÷ (-4)." },
            { q: "Combien vaut (6 - 18)/(-3 - 1) ?", options: ["-3", "-6", "3", "12"], answer: 2, why: "Numérateur : 6 - 18 = -12. Dénominateur : -3 - 1 = -4. Et (-12)/(-4) = 3." },
            { q: "Quelle saisie à la calculatrice donne bien (6 - 18)/(-3 - 1) ?", options: ["(6 - 18) ÷ (-3 - 1)", "6 - 18 ÷ (-3 - 1)", "((6 - 18) ÷ (-3)) - 1"], answer: 0, why: "Le trait de fraction regroupe le numérateur et le dénominateur : il faut les mettre tous les deux entre parenthèses." },
          ],
          trap: "Calculer de gauche à droite sans respecter les priorités : -2 + 3 × (-4) ne vaut pas 1 × (-4) = -4, mais -2 + (-12) = -14, car la multiplication passe avant l'addition.",
          method: "Avant chaque ligne de calcul, soulignez l'opération prioritaire, puis recopiez à l'identique tout ce qui n'a pas encore été calculé. Une seule opération par ligne au début : c'est plus long, mais vous ne perdrez ni signe ni nombre.",
        },
      ],
    },
    /* ================================================================== */
    /* LE THÉORÈME DE PYTHAGORE                                             */
    /* ================================================================== */
    {
      id: 'pythagore',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'carres-racines',
          title: 'Carrés et racines carrées',
          minutes: 30,
          objectives: [
            "Calculer le carré d'un nombre, positif ou négatif.",
            "Connaître les carrés parfaits de 1 à 144.",
            "Déterminer la racine carrée d'un nombre positif, de façon exacte ou approchée à la calculatrice.",
            "Encadrer une racine carrée entre deux nombres entiers consécutifs.",
          ],
          course: [
            {
              heading: "Le carré d'un nombre",
              paragraphs: [
                "Le carré d'un nombre a est le produit de ce nombre par lui-même : a² = a × a. On lit « a au carré ». Ce nom vient de la géométrie : un carré de côté 7 cm a une aire de 7 × 7 = 7² = 49 cm².",
                "On calcule le carré de n'importe quel nombre : 0,3² = 0,3 × 0,3 = 0,09 ; 1,5² = 2,25. Le carré d'un nombre négatif est positif, d'après la règle des signes : (-5)² = (-5) × (-5) = 25. Un carré n'est donc jamais négatif.",
                "Attention à ne pas confondre le carré et le double : 3² = 3 × 3 = 9, alors que le double de 3 est 2 × 3 = 6.",
              ],
              box: { label: "Définition", text: "Le carré d'un nombre a est a² = a × a. Pour tout nombre a, positif ou négatif, a² est positif ou nul." },
            },
            {
              heading: "Les carrés parfaits",
              paragraphs: [
                "On appelle carré parfait le carré d'un nombre entier. Les carrés parfaits de 1 à 144 sont à connaître par cœur, car ils reviennent sans cesse dans les calculs, et en particulier avec le théorème de Pythagore.",
                "1² = 1 ; 2² = 4 ; 3² = 9 ; 4² = 16 ; 5² = 25 ; 6² = 36 ; 7² = 49 ; 8² = 64 ; 9² = 81 ; 10² = 100 ; 11² = 121 ; 12² = 144. Un moyen de les retenir : récitez-les comme une table de multiplication, un nombre « fois lui-même ».",
              ],
              box: { label: "À retenir", text: "Carrés parfaits : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 (les carrés des entiers de 1 à 12)." },
            },
            {
              heading: "La racine carrée d'un nombre positif",
              paragraphs: [
                "Un carré a une aire de 49 cm². Quelle est la longueur de son côté ? On cherche le nombre positif dont le carré vaut 49 : c'est 7, car 7² = 49. On dit que 7 est la racine carrée de 49, et l'on écrit √49 = 7.",
                "Remarquez que (-7)² = 49 aussi. Pourtant √49 = 7 et non -7 : par définition, la racine carrée est toujours le nombre positif. Exemples : √100 = 10, √1 = 1, √0 = 0, √0,36 = 0,6 car 0,6² = 0,36.",
                "Un carré n'étant jamais négatif, aucun nombre n'a pour carré -4 : la racine carrée d'un nombre négatif n'existe pas. √(-4) n'a pas de sens, et la calculatrice affiche une erreur.",
              ],
              box: { label: "Définition", text: "Pour tout nombre a positif ou nul, la racine carrée de a, notée √a, est le nombre positif dont le carré est égal à a : (√a)² = a. Par exemple √81 = 9 car 9² = 81 et 9 est positif." },
            },
            {
              heading: "Racines non entières : encadrer et arrondir",
              paragraphs: [
                "√20 n'est pas un nombre entier, car 20 n'est pas un carré parfait. On peut l'encadrer avec les carrés parfaits qui entourent 20 : 16 < 20 < 25, donc √16 < √20 < √25, c'est-à-dire 4 < √20 < 5.",
                "Pour une valeur plus précise, on utilise la touche √ de la calculatrice : elle affiche √20 ≈ 4,472135955. On arrondit selon la précision demandée : √20 ≈ 4,5 au dixième, ou √20 ≈ 4,47 au centième. L'écriture √20 est la valeur exacte ; 4,47 n'en est qu'une valeur approchée, puisque 4,47² = 19,9809.",
              ],
              box: { label: "Méthode", text: "Pour encadrer √a entre deux entiers, on cherche les deux carrés parfaits consécutifs qui entourent a. Exemple : 49 < 58 < 64, donc 7 < √58 < 8." },
            },
          ],
          keyPoints: [
            "a² = a × a, et un carré est toujours positif ou nul : (-5)² = 25.",
            "Carrés parfaits : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.",
            "√a est le nombre positif dont le carré vaut a : √49 = 7.",
            "La racine carrée d'un nombre négatif n'existe pas.",
            "Pour encadrer √a, on l'entoure de deux carrés parfaits : 16 < 20 < 25 donne 4 < √20 < 5.",
            "La calculatrice donne une valeur approchée, qu'on arrondit à la précision demandée.",
          ],
          example: {
            statement: "Un carré a une aire de 50 cm². a) Entre quels nombres entiers consécutifs la longueur de son côté est-elle comprise ? b) Donnez une valeur approchée de cette longueur au millimètre près.",
            solution: [
              "La longueur c du côté vérifie c² = 50, avec c positif : c = √50 cm.",
              "a) 49 < 50 < 64, donc √49 < √50 < √64, c'est-à-dire 7 < √50 < 8. Le côté mesure entre 7 cm et 8 cm.",
              "b) La calculatrice affiche √50 ≈ 7,0710678. Un millimètre vaut 0,1 cm : on arrondit au dixième de centimètre.",
              "Réponse : le côté mesure √50 cm, soit environ 7,1 cm au millimètre près.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez sans calculatrice : a) 9² ; b) (-6)² ; c) 1,2² ; d) √81 ; e) √144 ; f) √0,25.",
              hint: "Pour un carré, multipliez le nombre par lui-même. Pour une racine carrée, cherchez le nombre positif dont le carré donne le nombre sous le radical.",
              solution: [
                "a) 9² = 9 × 9 = 81.",
                "b) (-6)² = (-6) × (-6) = 36.",
                "c) 1,2² = 1,2 × 1,2 = 1,44.",
                "d) √81 = 9, car 9² = 81.",
                "e) √144 = 12, car 12² = 144.",
                "f) √0,25 = 0,5, car 0,5² = 0,25.",
              ],
            },
            {
              level: 2,
              statement: "a) Encadrez chacun des nombres √30, √75 et √110 entre deux nombres entiers consécutifs, sans calculatrice. b) À l'aide de la calculatrice, donnez ensuite une valeur approchée de chacun au dixième près, et vérifiez qu'elle est cohérente avec votre encadrement.",
              hint: "Cherchez les deux carrés parfaits qui entourent 30, puis 75, puis 110. Pour arrondir au dixième, regardez le chiffre des centièmes.",
              solution: [
                "a) 25 < 30 < 36, donc 5 < √30 < 6.",
                "64 < 75 < 81, donc 8 < √75 < 9.",
                "100 < 110 < 121, donc 10 < √110 < 11.",
                "b) La calculatrice affiche √30 ≈ 5,477, donc √30 ≈ 5,5 ; √75 ≈ 8,660, donc √75 ≈ 8,7 ; √110 ≈ 10,488, donc √110 ≈ 10,5.",
                "Chaque valeur est bien comprise dans l'encadrement trouvé à la question a.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un jardinier veut semer une pelouse carrée d'une aire de 200 m² (données fictives). a) Entre quels entiers consécutifs la longueur du côté est-elle comprise ? b) Donnez cette longueur au centimètre près. c) Il veut entourer la pelouse d'une clôture vendue en rouleaux de 10 m. Combien de rouleaux doit-il acheter au minimum ? d) Sa voisine affirme : « Pour une pelouse deux fois plus grande en aire, il suffit de doubler la longueur du côté. » A-t-elle raison ? Justifiez avec un exemple.",
              hint: "Le côté mesure √200 m. Le périmètre d'un carré vaut 4 fois le côté. Pour d, comparez l'aire d'un carré de côté 10 m et celle d'un carré de côté 20 m.",
              solution: [
                "a) 196 < 200 < 225, donc √196 < √200 < √225, c'est-à-dire 14 < √200 < 15. Le côté mesure entre 14 m et 15 m.",
                "b) La calculatrice affiche √200 ≈ 14,142135. Au centimètre près, c'est-à-dire au centième de mètre : le côté mesure environ 14,14 m.",
                "c) Périmètre : 4 × 14,142 ≈ 56,57 m. Cinq rouleaux ne font que 50 m, c'est trop peu ; six rouleaux font 60 m. Il doit acheter 6 rouleaux.",
                "d) Non. Un carré de 10 m de côté a une aire de 10² = 100 m². En doublant le côté, on obtient 20² = 400 m², soit quatre fois plus d'aire, et non deux fois plus.",
                "Pour doubler l'aire de 200 m², il faudrait un côté de √400 = 20 m, et non 2 × 14,14 = 28,28 m.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque calcul à son résultat.",
            pairs: [
              { left: "√64", right: "8" },
              { left: "(-9)²", right: "81" },
              { left: "√121", right: "11" },
              { left: "0,5²", right: "0,25" },
              { left: "√0,49", right: "0,7" },
              { left: "12²", right: "144" },
            ],
          },
          quiz: [
            { q: "Combien vaut (-8)² ?", options: ["-16", "-64", "64", "16"], answer: 2, why: "(-8)² = (-8) × (-8) = 64 : le produit de deux nombres négatifs est positif." },
            { q: "Combien vaut √36 ?", options: ["18", "6", "-6", "1 296"], answer: 1, why: "6² = 36 et 6 est positif : √36 = 6. Une racine carrée n'est jamais négative." },
            { q: "Entre quels entiers consécutifs se trouve √58 ?", options: ["5 et 6", "28 et 29", "6 et 7", "7 et 8"], answer: 3, why: "49 < 58 < 64, donc √49 < √58 < √64, soit 7 < √58 < 8." },
            { q: "Pourquoi √(-9) n'existe-t-il pas ?", options: ["Parce qu'un carré n'est jamais négatif", "Parce que -9 n'est pas un carré parfait, 9 étant impair", "Parce que la calculatrice ne sait pas le calculer"], answer: 0, why: "Aucun nombre n'a un carré égal à -9, puisqu'un carré est toujours positif ou nul." },
            { q: "Une valeur approchée de √10 au centième est :", options: ["3,17", "3,16", "5", "100"], answer: 1, why: "La calculatrice affiche √10 ≈ 3,1623 : arrondi au centième, cela donne 3,16." },
          ],
          trap: "Confondre le carré avec le double (3² = 9, et non 6) ou la racine carrée avec la moitié (√16 = 4, et non 8). Autre erreur : écrire √49 = -7, alors qu'une racine carrée est toujours positive.",
          method: "Apprenez les douze carrés parfaits par cœur et récitez-les dans les deux sens : 7² = 49 et √49 = 7. Pour vérifier une racine carrée, élevez votre résultat au carré : vous devez retrouver le nombre de départ.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'theoreme-pythagore',
          title: 'Calculer une longueur avec le théorème de Pythagore',
          minutes: 35,
          objectives: [
            "Identifier l'hypoténuse d'un triangle rectangle.",
            "Connaître et énoncer le théorème de Pythagore.",
            "Calculer la longueur d'un côté d'un triangle rectangle à partir des deux autres.",
            "Rédiger un calcul de longueur avec le théorème de Pythagore.",
          ],
          course: [
            {
              heading: "Le vocabulaire du triangle rectangle",
              paragraphs: [
                "Un triangle rectangle a un angle droit. Le côté situé en face de l'angle droit s'appelle l'hypoténuse : c'est toujours le plus long côté du triangle. Les deux autres côtés forment l'angle droit ; on les appelle les côtés de l'angle droit.",
                "Si le triangle ABC est rectangle en A, l'angle droit est au sommet A. L'hypoténuse est le côté opposé à A, c'est-à-dire [BC]. Les côtés de l'angle droit sont [AB] et [AC]. Le nom du sommet de l'angle droit suffit donc pour trouver l'hypoténuse : c'est le côté qui ne contient pas ce sommet.",
              ],
              box: { label: "Définition", text: "Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit. C'est le plus long des trois côtés." },
            },
            {
              heading: "L'énoncé du théorème",
              paragraphs: [
                "Le théorème porte le nom de Pythagore, un savant grec du VIe siècle avant J.-C. La propriété était pourtant déjà connue et utilisée bien avant lui, notamment par des scribes de Mésopotamie. Elle relie les longueurs des trois côtés d'un triangle rectangle.",
                "Prenons un triangle rectangle dont les côtés de l'angle droit mesurent 3 cm et 4 cm, et l'hypoténuse 5 cm. Construisons un carré sur chaque côté. Les aires des deux petits carrés valent 3² = 9 cm² et 4² = 16 cm² ; celle du grand carré vaut 5² = 25 cm². Et 9 + 16 = 25 : l'aire du carré construit sur l'hypoténuse est la somme des aires des deux autres carrés.",
                "Ce n'est pas un hasard propre à cet exemple : cette égalité est vraie dans tous les triangles rectangles, quelles que soient leurs dimensions. C'est ce qu'affirme le théorème de Pythagore.",
              ],
              box: { label: "Théorème", text: "Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. Si ABC est rectangle en A, alors BC² = AB² + AC²." },
            },
            {
              heading: "Calculer la longueur de l'hypoténuse",
              paragraphs: [
                "Quand on connaît les deux côtés de l'angle droit, on additionne leurs carrés. Exemple : ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm. D'après le théorème de Pythagore, BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100. Donc BC = √100 = 10 cm.",
                "Attention : il ne faut pas oublier la dernière étape. BC² = 100 ne signifie pas que BC = 100 ! La longueur cherchée est la racine carrée de 100. Et l'on ne peut pas raccourcir le calcul : √(36 + 64) = 10, alors que 6 + 8 = 14.",
              ],
            },
            {
              heading: "Calculer la longueur d'un côté de l'angle droit",
              paragraphs: [
                "Quand on connaît l'hypoténuse et un côté de l'angle droit, on écrit la même égalité, puis on soustrait. Exemple : ABC est rectangle en A, avec BC = 13 cm et AB = 5 cm. On a BC² = AB² + AC², donc 13² = 5² + AC², c'est-à-dire 169 = 25 + AC².",
                "Donc AC² = 169 - 25 = 144, et AC = √144 = 12 cm. Si le résultat n'est pas un carré parfait, on donne la valeur exacte avec √, puis une valeur approchée. Par exemple, si AC² = 51, alors AC = √51 ≈ 7,1 cm au millimètre près.",
              ],
              box: { label: "Méthode", text: "1. Nommer le triangle rectangle et son angle droit. 2. Repérer l'hypoténuse. 3. Écrire l'égalité de Pythagore en commençant par l'hypoténuse. 4. Remplacer par les longueurs connues. 5. Calculer le carré cherché (somme ou différence). 6. Conclure avec la racine carrée." },
            },
          ],
          keyPoints: [
            "L'hypoténuse est le côté opposé à l'angle droit, et le plus long côté.",
            "Si ABC est rectangle en A, alors BC² = AB² + AC².",
            "Pour l'hypoténuse : on additionne les carrés des deux autres côtés.",
            "Pour un côté de l'angle droit : on soustrait au carré de l'hypoténuse le carré de l'autre côté.",
            "On termine toujours par la racine carrée : BC² = 100 donne BC = 10.",
            "√(a² + b²) n'est pas égal à a + b : √(36 + 64) = 10, pas 14.",
          ],
          example: {
            statement: "Le triangle DEF est rectangle en E, avec DE = 4,5 cm et EF = 6 cm. Calculez la longueur DF.",
            solution: [
              "Le triangle DEF est rectangle en E : son hypoténuse est le côté opposé à E, c'est-à-dire [DF].",
              "D'après le théorème de Pythagore : DF² = DE² + EF².",
              "On remplace : DF² = 4,5² + 6² = 20,25 + 36 = 56,25.",
              "DF est une longueur, donc positive : DF = √56,25 = 7,5.",
              "Réponse : DF = 7,5 cm. Vérification : DF est bien le plus long côté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle RST est rectangle en S, avec RS = 9 cm et ST = 12 cm. Calculez la longueur RT.",
              hint: "L'angle droit est en S : l'hypoténuse est le côté qui ne contient pas la lettre S.",
              solution: [
                "Le triangle RST est rectangle en S : son hypoténuse est [RT].",
                "D'après le théorème de Pythagore : RT² = RS² + ST².",
                "RT² = 9² + 12² = 81 + 144 = 225.",
                "RT = √225 = 15.",
                "Réponse : RT = 15 cm.",
              ],
            },
            {
              level: 2,
              statement: "Le triangle MNP est rectangle en N, avec MP = 10 cm et MN = 7 cm. Calculez la longueur NP, puis donnez-en une valeur approchée au millimètre près.",
              hint: "Ici, l'hypoténuse [MP] est connue : c'est un côté de l'angle droit qu'on cherche. Écrivez l'égalité, puis soustrayez.",
              solution: [
                "Le triangle MNP est rectangle en N : son hypoténuse est [MP].",
                "D'après le théorème de Pythagore : MP² = MN² + NP², donc 10² = 7² + NP², soit 100 = 49 + NP².",
                "NP² = 100 - 49 = 51.",
                "NP = √51 cm (valeur exacte). La calculatrice affiche √51 ≈ 7,1414.",
                "Réponse : NP = √51 cm ≈ 7,1 cm au millimètre près. Vérification : 7,1 < 10, l'hypoténuse reste bien le plus long côté.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une échelle de 5 m de long est appuyée contre un mur vertical. Le sol est horizontal et le pied de l'échelle est posé à 1,4 m du pied du mur (données fictives). a) À quelle hauteur le haut de l'échelle touche-t-il le mur ? b) On éloigne le pied de l'échelle pour le placer à 1,8 m du mur. Le haut de l'échelle glisse le long du mur. À quelle hauteur touche-t-il maintenant le mur (au centimètre près) ? c) De combien de centimètres environ le haut de l'échelle est-il descendu ?",
              hint: "Le mur, le sol et l'échelle forment un triangle rectangle : l'angle droit est entre le mur et le sol. L'échelle est donc l'hypoténuse.",
              solution: [
                "Le mur est vertical et le sol horizontal : le mur, le sol et l'échelle forment un triangle rectangle au pied du mur, dont l'hypoténuse est l'échelle (5 m).",
                "a) D'après le théorème de Pythagore : 5² = 1,4² + h², donc 25 = 1,96 + h², et h² = 25 - 1,96 = 23,04. Donc h = √23,04 = 4,8 m.",
                "b) Avec le pied à 1,8 m : 25 = 1,8² + h², donc h² = 25 - 3,24 = 21,76, et h = √21,76 ≈ 4,6648. Au centimètre près, h ≈ 4,66 m.",
                "c) Le haut de l'échelle est descendu d'environ 4,80 - 4,66 = 0,14 m, soit environ 14 cm.",
                "Réponses : a) 4,8 m ; b) environ 4,66 m ; c) environ 14 cm. Le pied a reculé de 40 cm, mais le haut n'est descendu que d'environ 14 cm.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la rédaction : ABC est rectangle en A, AB = 5 cm et AC = 12 cm ; calculer BC.",
            items: [
              "Le triangle ABC est rectangle en A.",
              "Son hypoténuse est [BC], le côté opposé à l'angle droit.",
              "D'après le théorème de Pythagore : BC² = AB² + AC².",
              "On remplace : BC² = 5² + 12².",
              "On calcule : BC² = 25 + 144 = 169.",
              "On conclut : BC = √169 = 13 cm.",
            ],
          },
          quiz: [
            { q: "Le triangle KLM est rectangle en L. Quelle est son hypoténuse ?", options: ["[KM]", "[KL]", "[LM]"], answer: 0, why: "L'hypoténuse est le côté opposé à l'angle droit : c'est le côté qui ne contient pas le sommet L." },
            { q: "Dans un triangle ABC rectangle en C, l'égalité de Pythagore s'écrit :", options: ["BC² = AB² + AC²", "AC² = AB² + BC²", "AB² = AC² + BC²", "AB = AC + BC"], answer: 2, why: "L'angle droit est en C, donc l'hypoténuse est [AB] : AB² = AC² + BC²." },
            { q: "Les côtés de l'angle droit d'un triangle rectangle mesurent 6 cm et 8 cm. L'hypoténuse mesure :", options: ["14 cm", "10 cm", "100 cm", "48 cm"], answer: 1, why: "6² + 8² = 36 + 64 = 100, et √100 = 10. Attention à ne pas oublier la racine carrée." },
            { q: "L'hypoténuse d'un triangle rectangle mesure 10 cm et un autre côté 6 cm. Le troisième côté mesure :", options: ["4 cm", "16 cm", "√136 cm", "8 cm"], answer: 3, why: "10² - 6² = 100 - 36 = 64, et √64 = 8. On soustrait, car le côté cherché n'est pas l'hypoténuse." },
            { q: "Un écran rectangulaire mesure 40 cm sur 30 cm. Sa diagonale mesure :", options: ["70 cm", "35 cm", "50 cm", "1 200 cm"], answer: 2, why: "La diagonale est l'hypoténuse d'un triangle rectangle : 40² + 30² = 1 600 + 900 = 2 500, et √2 500 = 50." },
          ],
          trap: "Additionner les carrés alors que la longueur cherchée n'est pas l'hypoténuse (il faut alors soustraire), ou oublier la racine carrée finale : BC² = 100 donne BC = 10, et non 100.",
          method: "Avant tout calcul, repassez en couleur le côté opposé à l'angle droit et écrivez l'égalité en commençant toujours par lui. À la fin, vérifiez que l'hypoténuse trouvée ou donnée est bien le plus long des trois côtés.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reciproque-pythagore',
          title: 'Démontrer qu\'un triangle est rectangle, ou qu\'il ne l\'est pas',
          minutes: 35,
          objectives: [
            "Utiliser la réciproque du théorème de Pythagore pour démontrer qu'un triangle est rectangle.",
            "Utiliser la contraposée du théorème de Pythagore pour démontrer qu'un triangle n'est pas rectangle.",
            "Rédiger une démonstration en calculant séparément les deux membres de l'égalité.",
          ],
          course: [
            {
              heading: "Un théorème et sa réciproque",
              paragraphs: [
                "Le théorème de Pythagore s'écrit sous la forme « si... alors... » : si un triangle est rectangle, alors l'égalité de Pythagore est vraie. Échanger le « si » et le « alors » donne la phrase réciproque : si l'égalité de Pythagore est vraie, alors le triangle est rectangle.",
                "Une réciproque n'est pas toujours vraie. Exemple : « Si un animal est un chat, alors il a quatre pattes » est vrai ; la réciproque, « Si un animal a quatre pattes, alors c'est un chat », est fausse (pensez au chien). Pour le théorème de Pythagore, en revanche, les mathématiciens ont démontré que la réciproque est vraie.",
              ],
              box: { label: "Propriété", text: "Réciproque du théorème de Pythagore : si, dans un triangle ABC, BC² = AB² + AC², alors le triangle ABC est rectangle en A." },
            },
            {
              heading: "Démontrer qu'un triangle est rectangle",
              paragraphs: [
                "On connaît les trois longueurs d'un triangle et l'on veut savoir s'il est rectangle. On repère d'abord le plus grand côté : s'il y a un angle droit, ce côté en est l'hypoténuse. Ensuite, on calcule séparément, d'une part le carré du plus grand côté, d'autre part la somme des carrés des deux autres côtés. Enfin, on compare.",
                "Exemple : DEF avec DE = 8 cm, EF = 15 cm et DF = 17 cm. Le plus grand côté est [DF]. D'une part, DF² = 17² = 289. D'autre part, DE² + EF² = 64 + 225 = 289. On constate que DF² = DE² + EF². D'après la réciproque du théorème de Pythagore, le triangle DEF est rectangle en E.",
                "L'angle droit est toujours au sommet opposé au plus grand côté : ici, [DF] ne contient pas E, donc l'angle droit est en E.",
              ],
            },
            {
              heading: "Démontrer qu'un triangle n'est pas rectangle",
              paragraphs: [
                "Si le carré du plus grand côté n'est pas égal à la somme des carrés des deux autres, le triangle ne peut pas être rectangle : s'il l'était, le théorème de Pythagore donnerait l'égalité. Cette forme du théorème s'appelle sa contraposée.",
                "Exemple : KLM avec KL = 6 cm, LM = 7 cm et KM = 9 cm. D'une part, KM² = 81. D'autre part, KL² + LM² = 36 + 49 = 85. Comme 81 ≠ 85, l'égalité de Pythagore n'est pas vérifiée : d'après la contraposée du théorème de Pythagore, le triangle KLM n'est pas rectangle.",
              ],
              box: { label: "Propriété", text: "Contraposée du théorème de Pythagore : si, dans un triangle ABC dont [BC] est le plus grand côté, BC² ≠ AB² + AC², alors le triangle ABC n'est pas rectangle." },
            },
            {
              heading: "Les précautions de rédaction",
              paragraphs: [
                "On n'écrit jamais l'égalité BC² = AB² + AC² au début de la démonstration : c'est justement ce que l'on cherche à vérifier. On écrit « D'une part... », « D'autre part... », puis « On constate que... » avant de conclure.",
                "Une mesure sur une figure ne prouve rien : un angle qui « a l'air droit » peut mesurer 89°. Seul le calcul démontre. Avec des nombres décimaux, le calcul reste le même : pour 2,5 cm, 6 cm et 6,5 cm, on trouve 6,5² = 42,25 et 2,5² + 6² = 6,25 + 36 = 42,25, donc le triangle est rectangle.",
              ],
              box: { label: "À retenir", text: "Plus grand côté au carré = somme des deux autres carrés : rectangle (réciproque). Différent : pas rectangle (contraposée). L'angle droit est au sommet opposé au plus grand côté." },
            },
          ],
          keyPoints: [
            "On repère le plus grand côté, puis on calcule séparément son carré et la somme des carrés des deux autres.",
            "Si les deux résultats sont égaux, le triangle est rectangle : c'est la réciproque du théorème de Pythagore.",
            "S'ils sont différents, le triangle n'est pas rectangle : c'est la contraposée du théorème de Pythagore.",
            "L'angle droit est au sommet opposé au plus grand côté.",
            "On n'écrit pas l'égalité de Pythagore avant de l'avoir vérifiée, et une mesure sur la figure ne prouve rien.",
          ],
          example: {
            statement: "Le triangle RST a pour côtés RS = 2,8 cm, ST = 4,5 cm et RT = 5,3 cm. Est-il rectangle ? Justifiez.",
            solution: [
              "Le plus grand côté est [RT].",
              "D'une part : RT² = 5,3² = 28,09.",
              "D'autre part : RS² + ST² = 2,8² + 4,5² = 7,84 + 20,25 = 28,09.",
              "On constate que RT² = RS² + ST².",
              "D'après la réciproque du théorème de Pythagore, le triangle RST est rectangle en S (le sommet opposé à [RT]).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle ABC a pour côtés AB = 20 cm, BC = 21 cm et AC = 29 cm. Démontrez qu'il est rectangle et précisez en quel sommet.",
              hint: "Le plus grand côté est [AC]. Calculez séparément AC² et AB² + BC².",
              solution: [
                "Le plus grand côté est [AC].",
                "D'une part : AC² = 29² = 841.",
                "D'autre part : AB² + BC² = 20² + 21² = 400 + 441 = 841.",
                "On constate que AC² = AB² + BC².",
                "D'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en B, le sommet opposé à [AC].",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des triangles suivants, dites s'il est rectangle ou non, en justifiant. a) KLM avec KL = 7 cm, LM = 9 cm et KM = 11 cm. b) PQR avec PQ = 3,6 cm, QR = 1,5 cm et PR = 3,9 cm.",
              hint: "Pour chaque triangle, commencez par trouver le plus grand côté. Puis citez la bonne propriété : réciproque si l'égalité est vraie, contraposée sinon.",
              solution: [
                "a) Le plus grand côté est [KM]. D'une part : KM² = 11² = 121. D'autre part : KL² + LM² = 49 + 81 = 130.",
                "121 ≠ 130 : d'après la contraposée du théorème de Pythagore, le triangle KLM n'est pas rectangle.",
                "b) Le plus grand côté est [PR]. D'une part : PR² = 3,9² = 15,21. D'autre part : PQ² + QR² = 3,6² + 1,5² = 12,96 + 2,25 = 15,21.",
                "On constate que PR² = PQ² + QR² : d'après la réciproque du théorème de Pythagore, le triangle PQR est rectangle en Q.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Un menuisier fabrique un cadre de porte rectangulaire de 1,2 m sur 0,9 m (données fictives). Pour contrôler que les coins sont bien droits, il mesure la diagonale et trouve 1,52 m. Le coin est-il droit ? b) Quelle longueur de diagonale aurait-il dû trouver ? c) Pour tracer un angle droit sur un terrain, on peut utiliser une corde partagée par des nœuds en 12 intervalles égaux, et former un triangle dont les côtés mesurent 3, 4 et 5 intervalles. Expliquez pourquoi on obtient un angle droit.",
              hint: "Les deux côtés du cadre et la diagonale forment un triangle. Le coin est droit si et seulement si l'égalité de Pythagore est vérifiée.",
              solution: [
                "a) Dans le triangle formé par les deux côtés du cadre et la diagonale, le plus grand côté est la diagonale. D'une part : 1,52² = 2,3104. D'autre part : 1,2² + 0,9² = 1,44 + 0,81 = 2,25.",
                "2,3104 ≠ 2,25 : d'après la contraposée du théorème de Pythagore, ce triangle n'est pas rectangle. Le coin n'est pas droit, le cadre doit être corrigé.",
                "b) Si le coin était droit, le théorème de Pythagore donnerait : diagonale² = 2,25, donc diagonale = √2,25 = 1,5 m.",
                "c) Avec une longueur d'intervalle u, les côtés mesurent 3u, 4u et 5u. Le plus grand côté est 5u : (5u)² = 25u², et (3u)² + (4u)² = 9u² + 16u² = 25u².",
                "L'égalité est vérifiée : d'après la réciproque du théorème de Pythagore, le triangle est rectangle, et l'angle droit est opposé au côté de 5 intervalles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur la réciproque et la contraposée.",
            statements: [
              { text: "Si le carré du plus grand côté est égal à la somme des carrés des deux autres, le triangle est rectangle.", true: true, why: "C'est la réciproque du théorème de Pythagore." },
              { text: "Un triangle de côtés 6 cm, 8 cm et 10 cm est rectangle.", true: true, why: "10² = 100 et 6² + 8² = 36 + 64 = 100 : l'égalité est vérifiée." },
              { text: "Un triangle de côtés 4 cm, 5 cm et 6 cm est rectangle.", true: false, why: "6² = 36 alors que 4² + 5² = 16 + 25 = 41 : il n'est pas rectangle." },
              { text: "L'angle droit est au sommet opposé au plus grand côté.", true: true, why: "Le plus grand côté est l'hypoténuse, toujours en face de l'angle droit." },
              { text: "Si un angle semble droit sur la figure, cela suffit à prouver que le triangle est rectangle.", true: false, why: "Une mesure ou une impression visuelle n'est pas une démonstration : seul le calcul prouve." },
              { text: "On commence la démonstration en écrivant BC² = AB² + AC².", true: false, why: "C'est ce qu'il faut vérifier : on calcule séparément les deux membres, puis on compare." },
              { text: "Pour montrer qu'un triangle n'est pas rectangle, on utilise la contraposée du théorème de Pythagore.", true: true, why: "Si l'égalité n'est pas vérifiée avec le plus grand côté, le triangle ne peut pas être rectangle." },
            ],
          },
          quiz: [
            { q: "Le triangle de côtés 5 cm, 12 cm et 13 cm est :", options: ["isocèle", "équilatéral", "quelconque non rectangle", "rectangle"], answer: 3, why: "13² = 169 et 5² + 12² = 25 + 144 = 169 : d'après la réciproque du théorème de Pythagore, il est rectangle." },
            { q: "Le triangle EFG a pour côtés EF = 15, FG = 8 et EG = 17. Il est rectangle en :", options: ["E", "F", "G"], answer: 1, why: "17² = 289 = 225 + 64. Le plus grand côté est [EG], et le sommet qui lui est opposé est F." },
            { q: "Pour montrer qu'un triangle n'est pas rectangle, on utilise :", options: ["la contraposée du théorème", "le théorème de Pythagore lui-même", "la réciproque du théorème", "une mesure au rapporteur"], answer: 0, why: "La contraposée affirme que si l'égalité n'est pas vérifiée, le triangle n'est pas rectangle." },
            { q: "Un triangle a pour côtés 7, 24 et 25. Pour savoir s'il est rectangle, on compare :", options: ["7² et 24² + 25²", "24² et 7² + 25²", "25² et 7² + 24²", "7 + 24 et 25"], answer: 2, why: "On compare toujours le carré du plus grand côté à la somme des carrés des deux autres. Ici, 625 = 49 + 576 : il est rectangle." },
            { q: "Dans un triangle MNP dont [MP] est le plus grand côté, on trouve MP² = 50 et MN² + NP² = 49. Que conclure ?", options: ["MNP est rectangle en N", "MNP n'est pas rectangle", "On ne peut rien conclure"], answer: 1, why: "50 ≠ 49 : d'après la contraposée du théorème de Pythagore, MNP n'est pas rectangle, même si l'écart est petit." },
          ],
          trap: "Écrire dès la première ligne l'égalité de Pythagore comme si elle était vraie, ou comparer le carré d'un côté qui n'est pas le plus long. Il faut calculer séparément le carré du plus grand côté et la somme des deux autres carrés, puis comparer.",
          method: "Rédigez toujours en quatre temps : « Le plus grand côté est... », « D'une part... », « D'autre part... », « On constate que... donc, d'après... ». Terminez en nommant la propriété utilisée : réciproque si c'est égal, contraposée si c'est différent.",
        },
      ],
    },
    /* ================================================================== */
    /* CALCULER AVEC LES FRACTIONS                                          */
    /* ================================================================== */
    {
      id: 'fractions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fractions-irreductibles',
          title: 'Nombres premiers et fractions irréductibles',
          minutes: 35,
          objectives: [
            "Reconnaître un nombre premier et connaître les nombres premiers inférieurs à 30.",
            "Décomposer un nombre entier en produit de facteurs premiers.",
            "Simplifier une fraction pour la rendre irréductible.",
          ],
          course: [
            {
              heading: "Rappel : les nombres premiers",
              paragraphs: [
                "Un nombre premier est un nombre entier qui a exactement deux diviseurs distincts : 1 et lui-même. 2, 3, 5 et 7 sont premiers ; 9 ne l'est pas, car 9 = 3 × 3 ; 1 n'est pas premier, car il n'a qu'un seul diviseur. Le nombre 2 est le seul nombre premier pair.",
                "Les nombres premiers inférieurs à 30 sont 2, 3, 5, 7, 11, 13, 17, 19, 23 et 29. Pour savoir si un nombre est premier, on essaie de le diviser par 2, 3, 5, 7..., en s'aidant des critères de divisibilité, et l'on s'arrête quand le carré du diviseur essayé dépasse le nombre. Exemple : 37 n'est divisible ni par 2, ni par 3, ni par 5, et 7² = 49 > 37 : 37 est premier.",
              ],
              box: { label: "Définition", text: "Un nombre premier est un nombre entier qui admet exactement deux diviseurs : 1 et lui-même. Nombres premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29." },
            },
            {
              heading: "Décomposer un nombre en produit de facteurs premiers",
              paragraphs: [
                "Les nombres premiers sont les « briques » des nombres entiers : tout nombre entier supérieur ou égal à 2 peut s'écrire comme un produit de nombres premiers. Par exemple, 84 = 2 × 2 × 3 × 7. Cette écriture s'appelle la décomposition en produit de facteurs premiers. Elle est unique, à l'ordre des facteurs près.",
                "Pour l'obtenir, on divise le nombre par le plus petit nombre premier possible, puis on recommence avec le quotient, jusqu'à obtenir 1. Exemple avec 360 : 360 ÷ 2 = 180 ; 180 ÷ 2 = 90 ; 90 ÷ 2 = 45 ; 45 ÷ 3 = 15 ; 15 ÷ 3 = 5 ; 5 ÷ 5 = 1. Donc 360 = 2 × 2 × 2 × 3 × 3 × 5, que l'on peut aussi écrire 2³ × 3² × 5.",
                "Vérifiez toujours en recalculant le produit : 2 × 2 × 2 = 8, 8 × 3 × 3 = 72 et 72 × 5 = 360. Attention : 360 = 36 × 10 est une égalité juste, mais ce n'est pas une décomposition en facteurs premiers, car 36 et 10 ne sont pas premiers.",
              ],
              box: { label: "Méthode", text: "Diviser par 2 tant que c'est possible, puis par 3, puis par 5, puis par 7, etc. Les diviseurs utilisés, écrits en produit, forment la décomposition. On s'arrête quand le quotient vaut 1." },
            },
            {
              heading: "Les fractions irréductibles",
              paragraphs: [
                "Simplifier une fraction, c'est diviser son numérateur et son dénominateur par un même nombre non nul : on obtient une fraction égale, écrite avec des nombres plus petits. Par exemple, 18/24 = (18 ÷ 6)/(24 ÷ 6) = 3/4.",
                "Une fraction est irréductible lorsque son numérateur et son dénominateur n'ont pas d'autre diviseur commun que 1 : on ne peut plus la simplifier. 3/4 est irréductible ; 12/18 ne l'est pas, car 12 et 18 sont tous deux divisibles par 6. Remarquez que 8/9 est irréductible, alors que ni 8 ni 9 ne sont des nombres premiers.",
              ],
              box: { label: "Définition", text: "Une fraction est irréductible lorsque le seul diviseur commun positif à son numérateur et à son dénominateur est 1." },
            },
            {
              heading: "Rendre une fraction irréductible",
              paragraphs: [
                "Première méthode, par étapes : on simplifie autant de fois que nécessaire grâce aux critères de divisibilité. 48/72 = 24/36 (division par 2) = 8/12 (par 3) = 2/3 (par 4). On s'arrête quand le numérateur et le dénominateur n'ont plus de diviseur commun autre que 1.",
                "Deuxième méthode, plus sûre : on décompose le numérateur et le dénominateur en produits de facteurs premiers, puis on supprime les facteurs communs. 84/126 = (2 × 2 × 3 × 7)/(2 × 3 × 3 × 7). Les facteurs communs sont 2, 3 et 7 : on les supprime, et il reste 2/3. La fraction obtenue est irréductible du premier coup.",
                "Les mêmes méthodes s'appliquent aux fractions négatives : on simplifie la distance à zéro et l'on garde le signe. Par exemple, -18/24 = -3/4.",
              ],
              box: { label: "Méthode", text: "1. Décomposer le numérateur et le dénominateur en facteurs premiers. 2. Supprimer les facteurs premiers communs, autant de fois qu'ils apparaissent des deux côtés. 3. Calculer les produits restants : la fraction est irréductible." },
            },
          ],
          keyPoints: [
            "Un nombre premier a exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier.",
            "Premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
            "Tout entier supérieur ou égal à 2 se décompose de façon unique en produit de facteurs premiers : 84 = 2 × 2 × 3 × 7.",
            "Pour décomposer, on divise par 2, 3, 5, 7... tant que c'est possible, jusqu'à obtenir 1.",
            "Une fraction est irréductible quand son numérateur et son dénominateur n'ont que 1 comme diviseur commun.",
            "Pour rendre une fraction irréductible, on décompose ses deux termes et l'on supprime les facteurs premiers communs.",
          ],
          example: {
            statement: "Rendez irréductible la fraction 150/210.",
            solution: [
              "On décompose 150 : 150 ÷ 2 = 75 ; 75 ÷ 3 = 25 ; 25 ÷ 5 = 5 ; 5 ÷ 5 = 1. Donc 150 = 2 × 3 × 5 × 5.",
              "On décompose 210 : 210 ÷ 2 = 105 ; 105 ÷ 3 = 35 ; 35 ÷ 5 = 7 ; 7 ÷ 7 = 1. Donc 210 = 2 × 3 × 5 × 7.",
              "150/210 = (2 × 3 × 5 × 5)/(2 × 3 × 5 × 7). Les facteurs communs sont 2, 3 et 5.",
              "On les supprime : il reste 5/7. Les nombres 5 et 7 n'ont que 1 comme diviseur commun.",
              "Réponse : 150/210 = 5/7, fraction irréductible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez en produit de facteurs premiers les nombres 60, 98 et 225.",
              hint: "Divisez par 2 tant que c'est possible, puis par 3, puis par 5, puis par 7. Pour 225, qui est impair, commencez par 3 (la somme de ses chiffres est 9).",
              solution: [
                "60 ÷ 2 = 30 ; 30 ÷ 2 = 15 ; 15 ÷ 3 = 5 ; 5 ÷ 5 = 1. Donc 60 = 2 × 2 × 3 × 5.",
                "98 ÷ 2 = 49 ; 49 ÷ 7 = 7 ; 7 ÷ 7 = 1. Donc 98 = 2 × 7 × 7.",
                "225 ÷ 3 = 75 ; 75 ÷ 3 = 25 ; 25 ÷ 5 = 5 ; 5 ÷ 5 = 1. Donc 225 = 3 × 3 × 5 × 5.",
                "Vérifications : 4 × 15 = 60 ; 2 × 49 = 98 ; 9 × 25 = 225.",
              ],
            },
            {
              level: 2,
              statement: "Rendez irréductibles les fractions suivantes, en décomposant le numérateur et le dénominateur : a) 42/56 ; b) 90/126 ; c) 132/220.",
              hint: "Après la décomposition, barrez chaque facteur premier qui apparaît à la fois en haut et en bas, autant de fois qu'il apparaît des deux côtés.",
              solution: [
                "a) 42 = 2 × 3 × 7 et 56 = 2 × 2 × 2 × 7. On supprime 2 et 7 : 42/56 = 3/(2 × 2) = 3/4.",
                "b) 90 = 2 × 3 × 3 × 5 et 126 = 2 × 3 × 3 × 7. On supprime 2, 3 et 3 : 90/126 = 5/7.",
                "c) 132 = 2 × 2 × 3 × 11 et 220 = 2 × 2 × 5 × 11. On supprime 2, 2 et 11 : 132/220 = 3/5.",
                "Réponses : 3/4, 5/7 et 3/5, qui sont toutes irréductibles.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un fleuriste dispose de 168 roses et de 120 tulipes (données fictives). Il veut composer des bouquets tous identiques, c'est-à-dire avec le même nombre de roses et le même nombre de tulipes dans chaque bouquet, en utilisant toutes ses fleurs. a) Décomposez 168 et 120 en produit de facteurs premiers. b) Quel est le plus grand nombre de bouquets qu'il peut composer ? c) Combien chaque bouquet contient-il de roses et de tulipes ? d) Quelle fraction des fleurs sont des roses ? Donnez-la sous forme irréductible.",
              hint: "Le nombre de bouquets doit diviser à la fois 168 et 120. Le plus grand diviseur commun s'obtient en multipliant les facteurs premiers communs aux deux décompositions.",
              solution: [
                "a) 168 ÷ 2 = 84 ; 84 ÷ 2 = 42 ; 42 ÷ 2 = 21 ; 21 ÷ 3 = 7 ; 7 ÷ 7 = 1. Donc 168 = 2 × 2 × 2 × 3 × 7. De même, 120 = 2 × 2 × 2 × 3 × 5.",
                "b) Le nombre de bouquets doit être un diviseur commun de 168 et de 120. Les facteurs premiers communs sont 2, 2, 2 et 3, dont le produit vaut 24. Le plus grand nombre de bouquets est donc 24.",
                "c) Chaque bouquet contient 168 ÷ 24 = 7 roses et 120 ÷ 24 = 5 tulipes. On retrouve les facteurs restants des décompositions : 7 et 5.",
                "d) Il y a 168 + 120 = 288 fleurs, dont 168 roses : la fraction est 168/288. Comme 168 = 24 × 7 et 288 = 24 × 12, on a 168/288 = 7/12.",
                "Les nombres 7 et 12 n'ont que 1 comme diviseur commun : 7/12 est irréductible. Réponses : 24 bouquets de 7 roses et 5 tulipes ; les roses représentent 7/12 des fleurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque nombre à sa décomposition en produit de facteurs premiers.",
            pairs: [
              { left: "12", right: "2 × 2 × 3" },
              { left: "30", right: "2 × 3 × 5" },
              { left: "45", right: "3 × 3 × 5" },
              { left: "49", right: "7 × 7" },
              { left: "56", right: "2 × 2 × 2 × 7" },
              { left: "77", right: "7 × 11" },
            ],
          },
          quiz: [
            { q: "Lequel de ces nombres est premier ?", options: ["21", "27", "29", "33"], answer: 2, why: "29 n'est divisible ni par 2, ni par 3, ni par 5, et 7² = 49 > 29. Les autres sont des multiples de 3." },
            { q: "Quelle est la décomposition en produit de facteurs premiers de 72 ?", options: ["2 × 2 × 2 × 3 × 3", "8 × 9", "2 × 2 × 2 × 2 × 3 × 3", "2 × 2 × 3 × 3 × 3"], answer: 0, why: "72 = 8 × 9 = 2 × 2 × 2 × 3 × 3 ; 8 et 9 ne sont pas premiers, et les deux autres produits valent 144 et 108." },
            { q: "Quelle fraction est irréductible ?", options: ["14/21", "15/35", "12/18", "16/27"], answer: 3, why: "16 = 2 × 2 × 2 × 2 et 27 = 3 × 3 × 3 n'ont aucun facteur premier commun. Les autres se simplifient par 7, 5 et 6." },
            { q: "La forme irréductible de 45/60 est :", options: ["9/12", "3/4", "15/20", "5/6"], answer: 1, why: "45 = 3 × 3 × 5 et 60 = 2 × 2 × 3 × 5 : on supprime 3 et 5, il reste 3/4. 9/12 et 15/20 sont égales, mais pas irréductibles." },
            { q: "Une fraction est irréductible lorsque :", options: ["seul 1 divise à la fois son numérateur et son dénominateur", "son numérateur et son dénominateur sont tous deux des nombres premiers", "son numérateur est plus petit que son dénominateur, sinon on la simplifie"], answer: 0, why: "C'est la définition : on ne peut plus la simplifier. 8/9 est irréductible bien que ni 8 ni 9 ne soient premiers." },
          ],
          trap: "S'arrêter trop tôt dans la simplification (24/36 = 12/18 n'est pas irréductible), ou croire qu'une fraction irréductible doit avoir un numérateur et un dénominateur premiers : 8/9 est irréductible alors que ni 8 ni 9 ne sont premiers.",
          method: "Décomposez le numérateur et le dénominateur, puis barrez les facteurs premiers communs : vous obtenez la fraction irréductible du premier coup. Vérifiez chaque décomposition en recalculant le produit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'addition-fractions',
          title: 'Additionner et soustraire des fractions',
          minutes: 35,
          objectives: [
            "Additionner et soustraire des fractions de dénominateurs quelconques.",
            "Choisir un dénominateur commun, de préférence le plus petit.",
            "Calculer une somme ou une différence de fractions positives ou négatives.",
            "Résoudre un problème avec des sommes et des différences de fractions.",
          ],
          course: [
            {
              heading: "Rappel : des fractions de même dénominateur",
              paragraphs: [
                "Pour additionner des fractions qui ont le même dénominateur, on additionne les numérateurs et l'on garde le dénominateur : 2/7 + 3/7 = 5/7, comme 2 septièmes plus 3 septièmes font 5 septièmes. Pour une soustraction, on soustrait les numérateurs : 9/10 - 4/10 = 5/10 = 1/2.",
                "Quand un dénominateur est un multiple de l'autre, on ne transforme qu'une seule fraction : 2/3 + 5/12 = 8/12 + 5/12 = 13/12, car 12 = 3 × 4 et 2/3 = 8/12. Rappel essentiel : on n'additionne jamais les dénominateurs. 1/4 + 1/4 font deux quarts, soit 2/4 = 1/2, et non 2/8.",
              ],
              box: { label: "Règle", text: "a/d + b/d = (a + b)/d et a/d - b/d = (a - b)/d : on additionne ou l'on soustrait les numérateurs, et l'on garde le dénominateur commun." },
            },
            {
              heading: "Des dénominateurs quelconques",
              paragraphs: [
                "Comment calculer 2/3 + 3/4 ? Ni 3 ni 4 n'est un multiple de l'autre. On cherche un dénominateur commun, c'est-à-dire un nombre qui est à la fois multiple de 3 et de 4 : 12 convient. On écrit 2/3 = 8/12 et 3/4 = 9/12, donc 2/3 + 3/4 = 8/12 + 9/12 = 17/12.",
                "Le produit des deux dénominateurs est toujours un dénominateur commun, mais ce n'est pas toujours le plus petit. Pour 5/6 + 3/8, on récite les multiples du plus grand dénominateur, 8 : 8, 16, 24. Le nombre 24 est aussi un multiple de 6, donc 5/6 + 3/8 = 20/24 + 9/24 = 29/24.",
                "Avec 6 × 8 = 48, on aurait trouvé 40/48 + 18/48 = 58/48, puis il aurait fallu simplifier par 2 : 58/48 = 29/24. Le résultat est le même, mais les calculs sont plus lourds.",
              ],
              box: { label: "Méthode", text: "1. Chercher un multiple commun aux dénominateurs, de préférence le plus petit. 2. Écrire chaque fraction avec ce dénominateur, en multipliant son numérateur et son dénominateur par un même nombre. 3. Additionner ou soustraire les numérateurs. 4. Simplifier le résultat si possible." },
            },
            {
              heading: "Avec des nombres relatifs",
              paragraphs: [
                "Les fractions peuvent être négatives, et une différence de fractions peut donner un résultat négatif. On applique aux numérateurs les règles de calcul des nombres relatifs : 1/4 - 5/6 = 3/12 - 10/12 = (3 - 10)/12 = -7/12.",
                "Autres exemples : -2/5 + 3/10 = -4/10 + 3/10 = -1/10. Un nombre entier s'écrit avec n'importe quel dénominateur : -2 + 3/4 = -8/4 + 3/4 = -5/4. Pour soustraire une fraction négative, on additionne son opposé : 1/3 - (-1/6) = 2/6 + 1/6 = 3/6 = 1/2.",
              ],
            },
            {
              heading: "Résoudre un problème",
              paragraphs: [
                "Dans un problème, la quantité totale (une classe, un trajet, un budget) correspond au nombre 1. Exemple (données fictives) : dans une classe, 1/3 des élèves viennent en bus et 2/5 à pied ; les autres viennent à vélo. Fraction des élèves en bus ou à pied : 1/3 + 2/5 = 5/15 + 6/15 = 11/15. Fraction à vélo : 1 - 11/15 = 15/15 - 11/15 = 4/15.",
                "Si la classe compte 30 élèves, les 4/15 de 30 donnent 30 ÷ 15 × 4 = 8 élèves à vélo. Vérification : 10 élèves en bus (1/3 de 30), 12 à pied (2/5 de 30), et 10 + 12 + 8 = 30.",
              ],
              box: { label: "À retenir", text: "Le tout vaut 1, que l'on écrit avec le dénominateur utile : 1 = 15/15. Ce qui reste = 1 - ce qui est déjà pris." },
            },
          ],
          keyPoints: [
            "On n'additionne jamais les dénominateurs : on met d'abord les fractions au même dénominateur.",
            "Un dénominateur commun est un multiple commun des dénominateurs ; on choisit de préférence le plus petit.",
            "Pour le trouver, on récite les multiples du plus grand dénominateur jusqu'à tomber sur un multiple de l'autre.",
            "Avec des fractions négatives, on applique aux numérateurs les règles des nombres relatifs : 1/4 - 5/6 = -7/12.",
            "Un entier s'écrit avec le dénominateur voulu : -2 = -8/4.",
            "On simplifie le résultat à la fin.",
          ],
          example: {
            statement: "Calculez A = 5/6 - 3/4 + 1/3 et donnez le résultat sous forme irréductible.",
            solution: [
              "Les dénominateurs sont 6, 4 et 3. Les multiples de 6 sont 6, 12, 18... ; 12 est aussi un multiple de 4 et de 3 : on prend 12.",
              "5/6 = 10/12 ; 3/4 = 9/12 ; 1/3 = 4/12.",
              "A = 10/12 - 9/12 + 4/12 = (10 - 9 + 4)/12 = 5/12.",
              "5 et 12 n'ont que 1 comme diviseur commun : la fraction est irréductible.",
              "Réponse : A = 5/12.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez et donnez le résultat sous forme irréductible : a) 1/2 + 1/3 ; b) 3/5 - 1/4 ; c) 7/9 + 5/6 ; d) 2 - 3/7.",
              hint: "Pour chaque calcul, cherchez le plus petit multiple commun des deux dénominateurs. Pour d, écrivez 2 avec le dénominateur 7.",
              solution: [
                "a) Dénominateur commun 6 : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
                "b) Dénominateur commun 20 : 3/5 - 1/4 = 12/20 - 5/20 = 7/20.",
                "c) Multiples de 9 : 9, 18 ; 18 est un multiple de 6. Donc 7/9 + 5/6 = 14/18 + 15/18 = 29/18.",
                "d) 2 = 14/7, donc 2 - 3/7 = 14/7 - 3/7 = 11/7.",
                "Réponses : 5/6 ; 7/20 ; 29/18 ; 11/7 (toutes irréductibles).",
              ],
            },
            {
              level: 2,
              statement: "Calculez et donnez le résultat sous forme irréductible : E = -3/4 + 5/6 ; F = 2/9 - 7/12 ; G = -1/6 - 3/10 ; H = 7/8 - (1/2 - 3/4).",
              hint: "Cherchez à chaque fois le plus petit dénominateur commun (12, 36 et 30 pour E, F et G). Pour H, calculez d'abord la parenthèse.",
              solution: [
                "E : dénominateur 12. -3/4 + 5/6 = -9/12 + 10/12 = 1/12.",
                "F : dénominateur 36. 2/9 - 7/12 = 8/36 - 21/36 = -13/36.",
                "G : dénominateur 30. -1/6 - 3/10 = -5/30 - 9/30 = -14/30 = -7/15 (simplification par 2).",
                "H : la parenthèse d'abord : 1/2 - 3/4 = 2/4 - 3/4 = -1/4. Puis 7/8 - (-1/4) = 7/8 + 2/8 = 9/8.",
                "Réponses : E = 1/12 ; F = -13/36 ; G = -7/15 ; H = 9/8.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un groupe fait une randonnée en trois jours (données fictives). Le premier jour, il parcourt les 2/5 du trajet total ; le deuxième jour, le tiers du trajet total. a) Quelle fraction du trajet a-t-il parcourue en deux jours ? b) Quelle fraction lui reste-t-il à parcourir le troisième jour ? c) Le troisième jour, il parcourt 16 km. Quelle est la longueur totale du trajet ? d) Vérifiez votre réponse en calculant la distance parcourue chaque jour.",
              hint: "Le trajet total vaut 1. Pour la question c, si 4 quinzièmes du trajet font 16 km, combien fait un quinzième ?",
              solution: [
                "a) 2/5 + 1/3 = 6/15 + 5/15 = 11/15 du trajet en deux jours.",
                "b) Il reste 1 - 11/15 = 15/15 - 11/15 = 4/15 du trajet.",
                "c) Les 4/15 du trajet font 16 km, donc 1/15 du trajet fait 16 ÷ 4 = 4 km, et le trajet entier fait 15 × 4 = 60 km.",
                "d) Premier jour : 2/5 de 60 = 60 ÷ 5 × 2 = 24 km. Deuxième jour : 1/3 de 60 = 20 km. Troisième jour : 16 km. Total : 24 + 20 + 16 = 60 km.",
                "Réponse : le trajet mesure 60 km.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Repérez les erreurs classiques sur les sommes de fractions.",
            statements: [
              { text: "1/3 + 1/4 = 2/7.", true: false, why: "On n'additionne pas les dénominateurs : 1/3 + 1/4 = 4/12 + 3/12 = 7/12." },
              { text: "Pour additionner 2/3 et 1/5, on peut prendre 15 comme dénominateur commun.", true: true, why: "15 est un multiple de 3 et de 5 : 2/3 + 1/5 = 10/15 + 3/15 = 13/15." },
              { text: "Le produit des deux dénominateurs est toujours un dénominateur commun.", true: true, why: "Il est multiple de chacun d'eux, même s'il n'est pas toujours le plus petit." },
              { text: "5/6 - 5/8 = 0.", true: false, why: "Les numérateurs sont égaux mais pas les parts : 5/6 - 5/8 = 20/24 - 15/24 = 5/24." },
              { text: "1 - 3/8 = 5/8.", true: true, why: "1 = 8/8, et 8/8 - 3/8 = 5/8." },
              { text: "-1/2 + 1/3 est un nombre négatif.", true: true, why: "-1/2 + 1/3 = -3/6 + 2/6 = -1/6." },
              { text: "Avant d'additionner deux fractions, il faut obligatoirement les rendre irréductibles.", true: false, why: "Ce n'est pas nécessaire : on simplifie le résultat à la fin." },
            ],
          },
          quiz: [
            { q: "Combien vaut 1/2 + 2/5 ?", options: ["3/7", "9/10", "3/10", "2/10"], answer: 1, why: "1/2 + 2/5 = 5/10 + 4/10 = 9/10." },
            { q: "Quel est le plus petit dénominateur commun à 5/6 et 7/9 ?", options: ["54", "15", "9", "18"], answer: 3, why: "18 est le plus petit nombre qui est à la fois multiple de 6 et de 9. 54 convient aussi, mais il est plus grand." },
            { q: "Combien vaut 3/4 - 5/6 ?", options: ["-2/2", "1/12", "-1/12", "-2/10"], answer: 2, why: "3/4 - 5/6 = 9/12 - 10/12 = -1/12." },
            { q: "Combien vaut 3 - 4/5 ?", options: ["11/5", "-1/5", "7/5", "1/5"], answer: 0, why: "3 = 15/5, donc 3 - 4/5 = 15/5 - 4/5 = 11/5." },
            { q: "Dans un sac, 1/4 des billes sont rouges et 1/6 sont bleues ; les autres sont vertes. Quelle fraction des billes est verte ?", options: ["2/10", "5/12", "1/2", "7/12"], answer: 3, why: "Rouges et bleues : 3/12 + 2/12 = 5/12. Vertes : 12/12 - 5/12 = 7/12." },
          ],
          trap: "Additionner les numérateurs entre eux et les dénominateurs entre eux : 1/3 + 1/4 n'est pas égal à 2/7. On met d'abord les deux fractions au même dénominateur : 4/12 + 3/12 = 7/12.",
          method: "Pour trouver le plus petit dénominateur commun, récitez la table du plus grand dénominateur jusqu'à tomber sur un multiple de l'autre. Contrôlez ensuite l'ordre de grandeur : 1/3 + 1/4 doit être un peu plus grand que 1/2, et 7/12 l'est bien.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'multiplication-division-fractions',
          title: 'Multiplier et diviser des fractions',
          minutes: 35,
          objectives: [
            "Multiplier deux fractions, positives ou négatives.",
            "Simplifier un produit de fractions avant de le calculer.",
            "Déterminer l'inverse d'un nombre non nul.",
            "Diviser par une fraction en multipliant par son inverse.",
          ],
          course: [
            {
              heading: "Multiplier deux fractions",
              paragraphs: [
                "Prenez la moitié des trois quarts d'une pizza. Les trois quarts font 3 parts sur 4 ; en coupant chaque part en deux, la pizza entière compte 8 parts, et la moitié des trois quarts en représente 3 : la moitié de 3/4, c'est 3/8. On écrit 1/2 × 3/4 = (1 × 3)/(2 × 4) = 3/8. Prendre une fraction d'une quantité, c'est multiplier par cette fraction.",
                "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux : pas besoin de dénominateur commun. Pour multiplier un nombre entier par une fraction, on multiplie seulement le numérateur : 5 × 2/3 = 10/3, car 5 = 5/1.",
                "Les signes suivent la règle des signes : -2/3 × 4/5 = -8/15 et (-2/3) × (-4/5) = 8/15.",
              ],
              box: { label: "Règle", text: "a/b × c/d = (a × c)/(b × d), avec b et d non nuls. On multiplie les numérateurs entre eux et les dénominateurs entre eux." },
            },
            {
              heading: "Simplifier avant de calculer",
              paragraphs: [
                "Avant d'effectuer les produits, il est souvent malin de décomposer et de simplifier. Exemple : 6/35 × 14/9 = (6 × 14)/(35 × 9). On décompose chaque nombre : (2 × 3 × 2 × 7)/(5 × 7 × 3 × 3). On supprime les facteurs communs 3 et 7 : il reste (2 × 2)/(5 × 3) = 4/15.",
                "Sans simplifier d'abord, on aurait obtenu 84/315, qu'il aurait encore fallu simplifier par 21. Simplifier avant de multiplier évite les grands nombres et donne directement la fraction irréductible.",
              ],
            },
            {
              heading: "L'inverse d'un nombre",
              paragraphs: [
                "Deux nombres sont inverses l'un de l'autre lorsque leur produit est égal à 1. L'inverse de 5 est 1/5, car 5 × 1/5 = 1. L'inverse de 2/7 est 7/2, car 2/7 × 7/2 = 14/14 = 1 : pour obtenir l'inverse d'une fraction, on échange son numérateur et son dénominateur.",
                "L'inverse d'un nombre a le même signe que lui : l'inverse de -2/3 est -3/2, car (-2/3) × (-3/2) = 6/6 = 1. Ne confondez pas l'inverse et l'opposé : l'opposé de -2/3 est 2/3 (leur somme vaut 0), alors que son inverse est -3/2 (leur produit vaut 1).",
                "Le nombre 0 n'a pas d'inverse : 0 multiplié par n'importe quel nombre donne 0, jamais 1.",
              ],
              box: { label: "Définition", text: "Deux nombres sont inverses l'un de l'autre si leur produit vaut 1. L'inverse d'un nombre a non nul est 1/a. Si a et b sont non nuls, l'inverse de a/b est b/a. 0 n'a pas d'inverse." },
            },
            {
              heading: "Diviser par une fraction",
              paragraphs: [
                "Combien de verres de 1/4 L peut-on remplir avec 3 L d'eau ? Chaque litre remplit 4 verres, donc 3 L en remplissent 3 × 4 = 12. On a calculé 3 ÷ 1/4 = 3 × 4 = 12 : diviser par 1/4 revient à multiplier par 4, l'inverse de 1/4.",
                "C'est une règle générale : diviser par un nombre non nul, c'est multiplier par son inverse. Exemple : 2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = 3/2. Avec des signes : -3/4 ÷ 9/8 = -3/4 × 8/9 = -24/36 = -2/3. Seule la fraction par laquelle on divise est retournée.",
              ],
              box: { label: "Règle", text: "a/b ÷ c/d = a/b × d/c, avec b, c et d non nuls. Diviser par une fraction, c'est multiplier par son inverse." },
            },
          ],
          keyPoints: [
            "a/b × c/d = (a × c)/(b × d) : pas besoin de dénominateur commun pour multiplier.",
            "Prendre une fraction d'une quantité, c'est multiplier par cette fraction.",
            "Décomposer et simplifier avant de multiplier évite les grands nombres.",
            "Deux nombres sont inverses si leur produit vaut 1 : l'inverse de a/b est b/a, et 0 n'a pas d'inverse.",
            "L'inverse garde le signe : l'inverse de -2/3 est -3/2, alors que son opposé est 2/3.",
            "Diviser par une fraction, c'est multiplier par son inverse : a/b ÷ c/d = a/b × d/c.",
          ],
          example: {
            statement: "Calculez A = 5/6 × 9/10 et B = -7/12 ÷ 14/9. Donnez les résultats sous forme irréductible.",
            solution: [
              "A = (5 × 9)/(6 × 10). On décompose : (5 × 3 × 3)/(2 × 3 × 2 × 5).",
              "On supprime les facteurs communs 3 et 5 : A = 3/(2 × 2) = 3/4.",
              "B : diviser par 14/9, c'est multiplier par son inverse 9/14. Donc B = -7/12 × 9/14.",
              "Le résultat est négatif. On décompose : (7 × 3 × 3)/(2 × 2 × 3 × 2 × 7). On supprime 3 et 7 : il reste 3/(2 × 2 × 2) = 3/8.",
              "Réponse : A = 3/4 et B = -3/8.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Calculez 2/3 × 4/5. b) Calculez 7 × 3/14 et simplifiez. c) Calculez -3/8 × 4/9 et simplifiez. d) Donnez l'inverse de chacun des nombres 4 ; 2/7 ; -5/3 ; 0,5.",
              hint: "Multipliez les numérateurs entre eux et les dénominateurs entre eux. Pour l'inverse d'une fraction, échangez numérateur et dénominateur sans changer le signe.",
              solution: [
                "a) 2/3 × 4/5 = (2 × 4)/(3 × 5) = 8/15.",
                "b) 7 × 3/14 = 21/14 = 3/2 (simplification par 7).",
                "c) -3/8 × 4/9 = -12/72 = -1/6 (simplification par 12).",
                "d) L'inverse de 4 est 1/4 ; l'inverse de 2/7 est 7/2 ; l'inverse de -5/3 est -3/5 ; l'inverse de 0,5 est 2, car 0,5 × 2 = 1.",
              ],
            },
            {
              level: 2,
              statement: "Calculez et donnez le résultat sous forme irréductible : a) 5/6 ÷ 10/9 ; b) -4/7 ÷ 2 ; c) 6 ÷ 3/5 ; d) (-9/10) ÷ (-3/4).",
              hint: "Remplacez chaque division par une multiplication par l'inverse du diviseur. L'inverse de 2 est 1/2.",
              solution: [
                "a) 5/6 ÷ 10/9 = 5/6 × 9/10 = 45/60 = 3/4 (simplification par 15).",
                "b) -4/7 ÷ 2 = -4/7 × 1/2 = -4/14 = -2/7.",
                "c) 6 ÷ 3/5 = 6 × 5/3 = 30/3 = 10.",
                "d) (-9/10) ÷ (-3/4) = (-9/10) × (-4/3) = 36/30 = 6/5 (deux facteurs négatifs, résultat positif ; simplification par 6).",
                "Réponses : 3/4 ; -2/7 ; 10 ; 6/5.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une bouteille de jus de fruits contient 3/4 L (données fictives). a) Combien de verres de 3/20 L peut-on remplir avec une bouteille ? b) Lina boit les 2/3 d'une bouteille. Quelle quantité de jus a-t-elle bue, en litres ? c) Un pack contient 6 bouteilles. Quelle quantité de jus contient-il ? Combien de verres de 3/20 L permet-il de remplir ? d) Sans calculatrice, calculez K = (1/2 + 1/3) ÷ (1 - 1/6).",
              hint: "Pour a, on cherche combien de fois 3/20 est contenu dans 3/4 : c'est une division. Pour b, prendre les 2/3 d'une quantité, c'est multiplier par 2/3. Pour d, calculez d'abord chaque parenthèse.",
              solution: [
                "a) 3/4 ÷ 3/20 = 3/4 × 20/3 = 60/12 = 5. On peut remplir 5 verres.",
                "b) 2/3 × 3/4 = 6/12 = 1/2. Lina a bu 1/2 L, soit 0,5 L.",
                "c) 6 × 3/4 = 18/4 = 9/2 = 4,5 L. Nombre de verres : 9/2 ÷ 3/20 = 9/2 × 20/3 = 180/6 = 30 verres (c'est bien 6 × 5).",
                "d) 1/2 + 1/3 = 3/6 + 2/6 = 5/6 et 1 - 1/6 = 5/6. Donc K = 5/6 ÷ 5/6 = 5/6 × 6/5 = 1.",
                "Réponses : a) 5 verres ; b) 1/2 L ; c) 9/2 L, soit 30 verres ; d) K = 1.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul de 5/6 ÷ (-10/9).",
            items: [
              "Repérer la fraction par laquelle on divise : -10/9",
              "Écrire son inverse : -9/10",
              "Remplacer la division par une multiplication : 5/6 × (-9/10)",
              "Multiplier en appliquant la règle des signes : -45/60",
              "Simplifier par 15 : -3/4",
            ],
          },
          quiz: [
            { q: "Combien vaut 3/5 × 2/7 ?", options: ["6/35", "5/12", "21/10", "6/12"], answer: 0, why: "On multiplie les numérateurs (3 × 2 = 6) et les dénominateurs (5 × 7 = 35)." },
            { q: "Quel est l'inverse de -4/9 ?", options: ["4/9", "9/4", "-9/4", "-4/9"], answer: 2, why: "(-4/9) × (-9/4) = 36/36 = 1. L'inverse garde le signe ; 4/9 est l'opposé." },
            { q: "Diviser par 2/3, c'est :", options: ["multiplier par 2/3", "multiplier par 3/2", "diviser par 3/2", "multiplier par -2/3"], answer: 1, why: "Diviser par un nombre non nul, c'est multiplier par son inverse, et l'inverse de 2/3 est 3/2." },
            { q: "Combien vaut 4 ÷ 1/2 ?", options: ["2", "1/8", "4/2", "8"], answer: 3, why: "4 ÷ 1/2 = 4 × 2 = 8 : il y a 8 demis dans 4." },
            { q: "Combien valent les 3/4 de 2/9 ?", options: ["5/13", "27/8", "1/6", "8/27"], answer: 2, why: "3/4 × 2/9 = 6/36 = 1/6 : prendre une fraction d'une quantité, c'est multiplier." },
          ],
          trap: "Confondre l'inverse et l'opposé (l'inverse de -2/3 est -3/2, et non 2/3), ou retourner la mauvaise fraction : dans 2/3 ÷ 4/9, seule 4/9, la fraction par laquelle on divise, est remplacée par son inverse.",
          method: "Pour une division, retournez d'abord la seconde fraction, puis traitez une simple multiplication. Avant de multiplier, écrivez numérateurs et dénominateurs en produits et barrez les facteurs communs : le résultat sera irréductible directement.",
        },
      ],
    },
  ],
}
