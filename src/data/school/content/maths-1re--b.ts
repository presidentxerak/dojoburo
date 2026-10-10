import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-1re',
  chapters: [
    /* ==================================================================== */
    /* VARIATIONS ET COURBES REPRÉSENTATIVES                                  */
    /* ==================================================================== */
    {
      id: 'variations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'signe-derivee-variations',
          title: 'Signe de la dérivée et sens de variation',
          minutes: 30,
          objectives: [
            "Relier le signe de la fonction dérivée au sens de variation d'une fonction sur un intervalle.",
            "Étudier le signe d'une fonction dérivée (affine, trinôme, produit ou quotient) à l'aide d'un tableau de signes.",
            "Dresser le tableau de variations d'une fonction à partir du signe de sa dérivée.",
          ],
          course: [
            {
              heading: "Du nombre dérivé au sens de variation",
              paragraphs: [
                "Le nombre dérivé f'(a) est le coefficient directeur de la tangente à la courbe de f au point d'abscisse a : c'est une information locale, valable près de a. Si, en tout point d'un intervalle, les tangentes « montent » (coefficient directeur positif), la courbe monte sur tout cet intervalle. Pensez à une route de montagne : si la pente est positive à chaque instant du trajet, l'altitude ne fait qu'augmenter.",
                "Ce passage du local (le signe de f'(x) en chaque point) au global (le sens de variation sur un intervalle) est le résultat central de ce chapitre. Il est admis en Première. La réciproque est vraie aussi : une fonction dérivable et croissante sur un intervalle a une dérivée positive ou nulle sur cet intervalle.",
              ],
              box: { label: "Propriété", text: "Soit f une fonction dérivable sur un intervalle I. Si f'(x) ≥ 0 pour tout x de I, f est croissante sur I. Si f'(x) ≤ 0 pour tout x de I, f est décroissante sur I. Si f'(x) = 0 pour tout x de I, f est constante sur I. Si f'(x) > 0 sur I, sauf en un nombre fini de points où elle s'annule, f est strictement croissante sur I (de même pour décroissante)." },
            },
            {
              heading: "L'importance du mot « intervalle »",
              paragraphs: [
                "La propriété ne s'applique que sur un intervalle. La fonction inverse f(x) = 1/x a pour dérivée f'(x) = -1/x², strictement négative sur ]-∞ ; 0[ et sur ]0 ; +∞[. Elle est donc strictement décroissante sur chacun de ces deux intervalles. Mais elle n'est pas décroissante sur la réunion : -1 < 1 et pourtant f(-1) = -1 < f(1) = 1.",
                "Une dérivée peut s'annuler en un point isolé sans que la monotonie soit interrompue. Pour f(x) = x³, on a f'(x) = 3x², qui est positive et ne s'annule qu'en 0 : f est strictement croissante sur R. La courbe a simplement une tangente horizontale en l'origine.",
              ],
            },
            {
              heading: "Étudier le signe de f'(x)",
              paragraphs: [
                "Tout le travail consiste à connaître le signe de f'(x). Les outils sont ceux du second degré et du tableau de signes. Une expression affine ax + b (a ≠ 0) est du signe de a à droite de sa racine -b/a. Un trinôme ax² + bx + c est du signe de a à l'extérieur de ses racines et du signe opposé entre elles. Un carré, une somme de carrés comme x² + 1 ou un dénominateur de la forme (x + 1)² sont positifs.",
                "D'où la règle d'or : factorisez f'(x) autant que possible, puis étudiez le signe de chaque facteur dans un tableau de signes. Exemple : pour f(x) = x³ - 3x, f'(x) = 3x² - 3 = 3(x - 1)(x + 1). Ce trinôme de coefficient 3 > 0 est positif à l'extérieur des racines -1 et 1, négatif entre elles.",
              ],
            },
            {
              heading: "Dresser le tableau de variations",
              paragraphs: [
                "Le tableau de variations comporte trois lignes. La ligne de x contient les bornes de l'intervalle d'étude et les valeurs où f'(x) s'annule en changeant de signe. La ligne du signe de f'(x) reprend le résultat de l'étude de signe. La ligne des variations porte des flèches montantes (f' > 0) ou descendantes (f' < 0), avec aux extrémités des flèches les images calculées.",
                "Pour f(x) = x³ - 3x : f(-1) = -1 + 3 = 2 et f(1) = 1 - 3 = -2. La fonction est croissante sur ]-∞ ; -1], décroissante sur [-1 ; 1], croissante sur [1 ; +∞[. Vérifiez toujours la cohérence : une flèche montante doit aller d'une valeur vers une valeur plus grande.",
              ],
              box: { label: "À retenir", text: "Méthode : calculer f'(x), la factoriser, étudier son signe dans un tableau, en déduire les flèches, puis calculer les images aux valeurs placées dans la ligne de x." },
            },
          ],
          keyPoints: [
            "Sur un intervalle I : f'(x) ≥ 0 donne f croissante, f'(x) ≤ 0 donne f décroissante, f'(x) = 0 donne f constante.",
            "Si f' est strictement positive sauf en des points isolés où elle s'annule, f est strictement croissante (exemple : x³).",
            "La propriété ne vaut que sur un intervalle : 1/x n'est pas décroissante sur R privé de 0.",
            "Factoriser f'(x) avant d'en étudier le signe : affine, trinôme, carrés et dénominateurs positifs.",
            "Le tableau de variations : ligne de x, ligne du signe de f'(x), ligne des flèches avec les images calculées.",
          ],
          example: {
            statement: "Dresser le tableau de variations de la fonction f définie sur R par f(x) = 2x³ - 9x² + 12x - 4.",
            solution: [
              "f est un polynôme, donc dérivable sur R, et f'(x) = 6x² - 18x + 12.",
              "On factorise : f'(x) = 6(x² - 3x + 2). Le trinôme x² - 3x + 2 a pour racines 1 et 2 (1 - 3 + 2 = 0 et 4 - 6 + 2 = 0), donc f'(x) = 6(x - 1)(x - 2).",
              "Signe : le trinôme a un coefficient 6 > 0, donc f'(x) > 0 sur ]-∞ ; 1[ et sur ]2 ; +∞[, et f'(x) < 0 sur ]1 ; 2[.",
              "Images : f(1) = 2 - 9 + 12 - 4 = 1 et f(2) = 16 - 36 + 24 - 4 = 0.",
              "Conclusion : f est croissante sur ]-∞ ; 1] (jusqu'à la valeur 1), décroissante sur [1 ; 2] (de 1 à 0), puis croissante sur [2 ; +∞[ (à partir de 0).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur R par f(x) = -2x² + 8x + 1. Calculer f'(x), étudier son signe et dresser le tableau de variations de f.",
              hint: "La dérivée est une expression affine : cherchez la valeur qui l'annule, puis regardez le signe du coefficient de x.",
              solution: [
                "f'(x) = -4x + 8.",
                "-4x + 8 = 0 équivaut à x = 2. Le coefficient -4 est négatif, donc f'(x) > 0 pour x < 2 et f'(x) < 0 pour x > 2.",
                "f(2) = -2 × 4 + 16 + 1 = 9.",
                "f est croissante sur ]-∞ ; 2] et décroissante sur [2 ; +∞[, avec la valeur 9 en x = 2.",
              ],
            },
            {
              level: 2,
              statement: "Soit g la fonction définie sur ]0 ; +∞[ par g(x) = x + 4/x. Montrer que g'(x) = (x - 2)(x + 2)/x², puis dresser le tableau de variations de g sur ]0 ; +∞[.",
              hint: "La dérivée de 4/x est -4/x². Mettez ensuite au même dénominateur et reconnaissez une différence de deux carrés.",
              solution: [
                "g'(x) = 1 - 4/x² = (x² - 4)/x² = (x - 2)(x + 2)/x².",
                "Sur ]0 ; +∞[, x + 2 > 0 et x² > 0 : le signe de g'(x) est celui de x - 2.",
                "Donc g'(x) < 0 sur ]0 ; 2[ et g'(x) > 0 sur ]2 ; +∞[.",
                "g(2) = 2 + 4/2 = 4.",
                "g est décroissante sur ]0 ; 2] et croissante sur [2 ; +∞[ ; elle atteint la valeur 4 en x = 2.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On considère la fonction f définie sur ]1 ; +∞[ par f(x) = (x² + 3)/(x - 1). 1) Montrer que pour tout x > 1, f'(x) = (x² - 2x - 3)/(x - 1)². 2) Étudier le signe de f'(x) sur ]1 ; +∞[. 3) Dresser le tableau de variations de f. 4) En déduire que pour tout x > 1, x² + 3 ≥ 6(x - 1).",
              hint: "Utilisez (u/v)' = (u'v - uv')/v², factorisez le trinôme du numérateur, et pour la dernière question cherchez le minimum de f.",
              solution: [
                "1) Avec u(x) = x² + 3 et v(x) = x - 1 : f'(x) = (2x(x - 1) - (x² + 3) × 1)/(x - 1)² = (2x² - 2x - x² - 3)/(x - 1)² = (x² - 2x - 3)/(x - 1)².",
                "2) x² - 2x - 3 a pour racines -1 et 3 (1 + 2 - 3 = 0 et 9 - 6 - 3 = 0), donc x² - 2x - 3 = (x + 1)(x - 3). Sur ]1 ; +∞[, x + 1 > 0 et (x - 1)² > 0 : f'(x) est du signe de x - 3.",
                "Donc f'(x) < 0 sur ]1 ; 3[ et f'(x) > 0 sur ]3 ; +∞[.",
                "3) f(3) = (9 + 3)/(3 - 1) = 6. f est décroissante sur ]1 ; 3] et croissante sur [3 ; +∞[.",
                "4) D'après le tableau, 6 est le minimum de f sur ]1 ; +∞[ : pour tout x > 1, (x² + 3)/(x - 1) ≥ 6.",
                "Comme x - 1 > 0, on multiplie sans changer le sens : x² + 3 ≥ 6(x - 1). (Contrôle : cela revient à x² - 6x + 9 ≥ 0, soit (x - 3)² ≥ 0, ce qui est vrai.)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fonction à son sens de variation.",
            pairs: [
              { left: "f(x) = -3x + 5", right: "Strictement décroissante sur R, car f'(x) = -3" },
              { left: "f(x) = x³", right: "Strictement croissante sur R, f' ne s'annulant qu'en 0" },
              { left: "f(x) = x² - 4x", right: "Décroissante sur ]-∞ ; 2], croissante sur [2 ; +∞[" },
              { left: "f(x) = -x² + 6x", right: "Croissante sur ]-∞ ; 3], décroissante sur [3 ; +∞[" },
              { left: "f(x) = 1/x", right: "Décroissante sur ]-∞ ; 0[ et sur ]0 ; +∞[, séparément" },
              { left: "f(x) = x³ - 3x", right: "Croissante, puis décroissante sur [-1 ; 1], puis croissante" },
            ],
          },
          quiz: [
            { q: "Si f'(x) = (x - 2)² pour tout réel x, alors f est :", options: ["décroissante sur ]-∞ ; 2]", "strictement croissante sur R", "constante sur R", "croissante puis décroissante"], answer: 1, why: "f'(x) est positive et ne s'annule qu'en 2, point isolé : f est strictement croissante sur R." },
            { q: "On sait que f'(x) = -2x + 6. Sur quel intervalle f est-elle croissante ?", options: ["[3 ; +∞[", "[-3 ; +∞[", "]-∞ ; -3]", "]-∞ ; 3]"], answer: 3, why: "-2x + 6 ≥ 0 équivaut à x ≤ 3 : f' est positive sur ]-∞ ; 3], donc f y est croissante." },
            { q: "Quel est le signe de f'(x) = 3(x - 1)(x + 4) sur ]-4 ; 1[ ?", options: ["négatif", "positif", "nul", "on ne peut pas savoir"], answer: 0, why: "Un trinôme de coefficient 3 > 0 est négatif entre ses racines -4 et 1." },
            { q: "La fonction inverse a pour dérivée -1/x² < 0 sur R privé de 0. Laquelle de ces affirmations est vraie ?", options: ["f est décroissante sur R privé de 0", "f(-1) > f(1)", "f est décroissante sur ]0 ; +∞[", "f est croissante sur ]-∞ ; 0["], answer: 2, why: "La propriété s'applique sur chaque intervalle séparément ; sur la réunion, elle est fausse puisque f(-1) = -1 < f(1) = 1." },
            { q: "Dans un tableau de variations, la ligne de x contient :", options: ["les valeurs qui annulent la fonction f", "les bornes et les zéros de f'(x)", "les extremums de f'(x)", "les images des entiers"], answer: 1, why: "On y place les bornes de l'intervalle d'étude et les valeurs où f'(x) s'annule en changeant de signe." },
          ],
          trap: "Confondre le signe de f(x) et le signe de f'(x) : c'est le signe de la dérivée qui donne les variations. Autre erreur classique : conclure qu'une fonction est décroissante sur une réunion d'intervalles, comme 1/x sur R privé de 0.",
          method: "Factorisez toujours f'(x) au maximum avant d'en étudier le signe, puis contrôlez votre tableau en calculant une image intermédiaire : elle doit être cohérente avec le sens des flèches.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'extremums',
          title: 'Extremums d’une fonction et problèmes d’optimisation',
          minutes: 30,
          objectives: [
            "Déterminer les extremums d'une fonction sur un intervalle à partir de son tableau de variations.",
            "Utiliser le fait qu'en un extremum local situé à l'intérieur de l'intervalle, la dérivée s'annule, et savoir que la réciproque est fausse.",
            "Résoudre un problème d'optimisation en le modélisant par une fonction.",
          ],
          course: [
            {
              heading: "Maximum, minimum, extremum",
              paragraphs: [
                "Soit f une fonction définie sur un intervalle I et a un réel de I. On dit que f(a) est le maximum de f sur I si f(x) ≤ f(a) pour tout x de I, et que f(a) est le minimum de f sur I si f(x) ≥ f(a) pour tout x de I. Un extremum est un maximum ou un minimum. Attention au vocabulaire : le maximum est la valeur f(a), il est atteint en x = a.",
                "On parle d'extremum local lorsque l'inégalité n'est vraie que sur un intervalle ouvert contenant a, et non sur tout I : c'est un « sommet » ou un « creux » de la courbe, qui n'est pas forcément le plus haut ou le plus bas de toute la courbe.",
              ],
              box: { label: "Définition", text: "f(a) est un maximum local de f s'il existe un intervalle ouvert J contenant a tel que f(x) ≤ f(a) pour tout x de J ∩ I. On définit de même un minimum local avec f(x) ≥ f(a)." },
            },
            {
              heading: "Extremum et dérivée",
              paragraphs: [
                "Si f est dérivable sur un intervalle ouvert I et admet un extremum local en a, alors f'(a) = 0 : au sommet ou au creux, la tangente est horizontale. La réciproque est fausse : pour f(x) = x³, f'(0) = 0, mais f est strictement croissante et n'a pas d'extremum en 0.",
                "Le bon critère est le changement de signe : si f'(x) s'annule en a en changeant de signe, f admet un extremum local en a. Passage de + à - : maximum local. Passage de - à + : minimum local.",
                "Sur un intervalle fermé, un extremum peut aussi être atteint à une borne, sans que la dérivée s'y annule. Pour f(x) = x² sur [1 ; 3], f'(x) = 2x ne s'annule jamais, mais le minimum 1 est atteint en 1 et le maximum 9 en 3.",
              ],
              box: { label: "Propriété", text: "Si f est dérivable sur un intervalle ouvert I et si f'(x) s'annule en a en changeant de signe, alors f(a) est un extremum local de f. Si f admet un extremum local en a, alors f'(a) = 0, mais f'(a) = 0 ne suffit pas." },
            },
            {
              heading: "Résoudre un problème d'optimisation",
              paragraphs: [
                "Optimiser, c'est chercher la valeur d'une variable qui rend une quantité (aire, volume, coût, bénéfice) la plus grande ou la plus petite possible. La démarche est toujours la même : choisir la variable et son intervalle, exprimer la quantité en fonction de cette variable, étudier les variations de la fonction obtenue, puis répondre à la question posée dans le contexte, avec les unités.",
                "Exemple : un rectangle a un périmètre de 20 cm. Si sa largeur est x (en cm), avec x dans [0 ; 5], sa longueur est 10 - x et son aire A(x) = x(10 - x) = 10x - x². A'(x) = 10 - 2x s'annule en 5 en passant de + à -. L'aire est maximale pour x = 5 : le rectangle est un carré de côté 5 cm, d'aire 25 cm².",
              ],
              box: { label: "À retenir", text: "Optimisation : variable et intervalle, fonction à étudier, dérivée et signe, tableau de variations, conclusion rédigée dans le contexte (valeur de la variable, valeur optimale, unités)." },
            },
          ],
          keyPoints: [
            "Le maximum de f sur I est la valeur f(a) ; il est atteint en x = a.",
            "Si f admet un extremum local en a, intérieur à l'intervalle, alors f'(a) = 0.",
            "f'(a) = 0 ne suffit pas : x³ a une dérivée nulle en 0 sans extremum.",
            "Si f' s'annule en changeant de signe, il y a un extremum local : + puis - donne un maximum, - puis + un minimum.",
            "Sur un intervalle fermé, comparez aussi les valeurs aux bornes.",
            "Optimiser : modéliser par une fonction, l'étudier, conclure dans le contexte.",
          ],
          example: {
            statement: "Dans une feuille carrée de 12 cm de côté, on découpe aux quatre coins un carré de côté x cm, puis on relève les bords pour former une boîte sans couvercle. Quelle valeur de x rend le volume maximal ?",
            solution: [
              "Variable : x doit vérifier 0 < x < 6 (on ne peut pas découper plus de la moitié du côté). Le fond est un carré de côté 12 - 2x et la hauteur vaut x, donc V(x) = x(12 - 2x)².",
              "Dérivée d'un produit : V'(x) = (12 - 2x)² + x × 2(12 - 2x) × (-2) = (12 - 2x)[(12 - 2x) - 4x] = (12 - 2x)(12 - 6x).",
              "Sur ]0 ; 6[, 12 - 2x > 0, donc V'(x) est du signe de 12 - 6x : positif pour x < 2, négatif pour x > 2.",
              "V est croissante sur ]0 ; 2] et décroissante sur [2 ; 6[ : elle admet un maximum en x = 2.",
              "V(2) = 2 × 8² = 128. Le volume est maximal pour des carrés de 2 cm de côté ; il vaut alors 128 cm³.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur [0 ; 5] par f(x) = x² - 6x + 5. Dresser le tableau de variations de f, puis donner son minimum et son maximum sur [0 ; 5], en précisant où ils sont atteints.",
              hint: "N'oubliez pas de calculer les images aux deux bornes 0 et 5, puis comparez-les à la valeur au point où f' s'annule.",
              solution: [
                "f'(x) = 2x - 6, qui s'annule en 3, est négative sur [0 ; 3[ et positive sur ]3 ; 5].",
                "f est décroissante sur [0 ; 3] et croissante sur [3 ; 5].",
                "f(0) = 5, f(3) = 9 - 18 + 5 = -4, f(5) = 25 - 30 + 5 = 0.",
                "Le minimum de f sur [0 ; 5] est -4, atteint en x = 3. Le maximum est 5, atteint en x = 0 (à une borne, où f' ne s'annule pas).",
              ],
            },
            {
              level: 2,
              statement: "Soit g la fonction définie sur [-3 ; 3] par g(x) = x³ - 12x. Étudier les variations de g, puis déterminer ses extremums locaux et ses extremums sur [-3 ; 3].",
              hint: "Factorisez g'(x) = 3x² - 12 en utilisant une différence de deux carrés.",
              solution: [
                "g'(x) = 3x² - 12 = 3(x² - 4) = 3(x - 2)(x + 2).",
                "Trinôme de coefficient 3 > 0 : g'(x) > 0 sur [-3 ; -2[ et sur ]2 ; 3], g'(x) < 0 sur ]-2 ; 2[.",
                "g(-3) = -27 + 36 = 9, g(-2) = -8 + 24 = 16, g(2) = 8 - 24 = -16, g(3) = 27 - 36 = -9.",
                "g est croissante sur [-3 ; -2], décroissante sur [-2 ; 2], croissante sur [2 ; 3].",
                "Maximum local 16 en x = -2 et minimum local -16 en x = 2. Comme 16 > 9 et -16 < -9, ce sont aussi le maximum et le minimum de g sur [-3 ; 3].",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Une entreprise fabrique chaque jour x centaines d'objets, avec x dans [0 ; 10]. Son bénéfice, en milliers d'euros, est modélisé par B(x) = -x³ + 15x² - 48x - 20. 1) Calculer B'(x) et vérifier que B'(x) = -3(x - 2)(x - 8). 2) Dresser le tableau de variations de B sur [0 ; 10]. 3) Combien d'objets faut-il fabriquer pour un bénéfice maximal ? Quel est ce bénéfice ?",
              hint: "Développez -3(x - 2)(x - 8) pour la vérification, puis étudiez le signe d'un trinôme de coefficient -3 < 0. Comparez enfin le maximum local à la valeur en 0.",
              solution: [
                "1) B'(x) = -3x² + 30x - 48. Et -3(x - 2)(x - 8) = -3(x² - 10x + 16) = -3x² + 30x - 48 : l'égalité est vérifiée.",
                "2) Coefficient -3 < 0 : B'(x) < 0 sur [0 ; 2[ et sur ]8 ; 10], B'(x) > 0 sur ]2 ; 8[.",
                "B(0) = -20 ; B(2) = -8 + 60 - 96 - 20 = -64 ; B(8) = -512 + 960 - 384 - 20 = 44 ; B(10) = -1000 + 1500 - 480 - 20 = 0.",
                "B est décroissante sur [0 ; 2] (de -20 à -64), croissante sur [2 ; 8] (de -64 à 44), décroissante sur [8 ; 10] (de 44 à 0).",
                "3) Le maximum de B sur [0 ; 10] est 44, atteint en x = 8 (il dépasse B(0) = -20). L'entreprise doit fabriquer 800 objets par jour ; son bénéfice est alors de 44 000 euros.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les extremums.",
            statements: [
              { text: "Si f'(a) = 0, alors f admet un extremum en a.", true: false, why: "Contre-exemple : x³ a une dérivée nulle en 0, mais elle est strictement croissante." },
              { text: "Si f, dérivable sur un intervalle ouvert, admet un maximum local en a, alors f'(a) = 0.", true: true, why: "Au sommet, la tangente est horizontale." },
              { text: "Un extremum peut être atteint à une borne d'un intervalle fermé sans que f' s'y annule.", true: true, why: "x² sur [1 ; 3] atteint son maximum 9 en 3, alors que f'(3) = 6." },
              { text: "Le maximum d'une fonction est la valeur de x où il est atteint.", true: false, why: "Le maximum est la valeur f(a) ; a est l'endroit où il est atteint." },
              { text: "Si f' s'annule en a en passant de + à -, f admet un maximum local en a.", true: true, why: "f monte puis descend : c'est un sommet." },
              { text: "Toute fonction dérivable admet un maximum sur R.", true: false, why: "f(x) = x n'a pas de maximum sur R." },
              { text: "Un minimum local est toujours le minimum sur tout l'intervalle d'étude.", true: false, why: "x³ - 12x a un minimum local -16 en 2, mais prend des valeurs plus petites pour x très négatif." },
            ],
          },
          quiz: [
            { q: "Soit f(x) = x³ - 3x. En quelles valeurs f' s'annule-t-elle ?", options: ["0 et 3", "-3 et 3", "-1 et 1", "√3 seulement"], answer: 2, why: "f'(x) = 3x² - 3 = 3(x - 1)(x + 1) s'annule en -1 et en 1." },
            { q: "Le maximum sur R de f(x) = -x² + 4x + 1 vaut :", options: ["5", "2", "1", "4"], answer: 0, why: "f'(x) = -2x + 4 s'annule en 2 en passant de + à -, et f(2) = -4 + 8 + 1 = 5." },
            { q: "On sait que f'(x) = x². En 0, la fonction f :", options: ["admet un maximum", "admet un minimum local strict", "admet un extremum local", "n'admet pas d'extremum"], answer: 3, why: "f' s'annule en 0 sans changer de signe : f est croissante et n'a pas d'extremum en 0." },
            { q: "Un rectangle a un périmètre de 20 cm. Son aire maximale vaut :", options: ["20 cm²", "25 cm²", "50 cm²", "100 cm²"], answer: 1, why: "A(x) = x(10 - x) est maximale en x = 5 : c'est un carré de côté 5 cm, d'aire 25 cm²." },
            { q: "Dans un problème d'optimisation, la première étape consiste à :", options: ["dériver immédiatement la quantité donnée", "dresser le tableau de variations", "choisir la variable et son intervalle", "calculer toutes les images entières"], answer: 2, why: "Sans variable ni intervalle, on ne peut ni écrire la fonction ni conclure correctement." },
          ],
          trap: "Croire qu'une dérivée nulle garantit un extremum (x³ en 0 prouve le contraire), ou oublier de comparer avec les valeurs aux bornes d'un intervalle fermé, où le maximum est parfois atteint.",
          method: "Dans un problème d'optimisation, écrivez d'abord « Soit x ... avec x dans ... », et terminez par une phrase qui répond exactement à la question : la valeur de la variable, la valeur optimale et l'unité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etude-de-fonction',
          title: 'Étudier une fonction de A à Z',
          minutes: 35,
          objectives: [
            "Mener l'étude complète d'une fonction : ensemble de définition, dérivée, signe de la dérivée, variations, extremums.",
            "Exploiter les variations d'une fonction pour établir une inégalité.",
            "Étudier la position relative de deux courbes représentatives.",
            "Tracer l'allure d'une courbe à partir de son tableau de variations et de ses tangentes horizontales.",
          ],
          course: [
            {
              heading: "Le plan d'étude",
              paragraphs: [
                "Étudier une fonction, c'est enchaîner des étapes dans un ordre précis. On détermine l'ensemble de définition (et l'ensemble où f est dérivable), on calcule f'(x), on la factorise, on étudie son signe, on dresse le tableau de variations avec les images aux valeurs clés, puis on en tire les extremums et l'allure de la courbe.",
                "Chaque étape doit être justifiée. Pour le signe, on donne la raison de chaque facteur : « x + 3 > 0 car x > -1 », « (x + 1)² > 0 », « x² + 1 > 0 ». Un tableau sans justification ne rapporte pas tous les points à l'examen.",
              ],
            },
            {
              heading: "Un exemple complet",
              paragraphs: [
                "Soit f(x) = x³/3 - x² - 3x + 1 sur R. C'est un polynôme, dérivable sur R, et f'(x) = x² - 2x - 3. Ce trinôme a pour racines -1 et 3 (1 + 2 - 3 = 0 et 9 - 6 - 3 = 0), donc f'(x) = (x + 1)(x - 3).",
                "Coefficient 1 > 0 : f'(x) > 0 à l'extérieur de [-1 ; 3], f'(x) < 0 entre -1 et 3. On calcule f(-1) = -1/3 - 1 + 3 + 1 = 8/3 et f(3) = 9 - 9 - 9 + 1 = -8. La fonction est croissante sur ]-∞ ; -1], décroissante sur [-1 ; 3], croissante sur [3 ; +∞[, avec un maximum local 8/3 et un minimum local -8.",
                "Pour tracer l'allure, on place les points (-1 ; 8/3) et (3 ; -8), on y dessine des tangentes horizontales, on ajoute un ou deux points (par exemple f(0) = 1) et on relie en respectant les flèches.",
              ],
            },
            {
              heading: "Établir une inégalité grâce aux variations",
              paragraphs: [
                "Pour démontrer que f(x) ≥ m pour tout x de I, il suffit de montrer que le minimum de f sur I vaut m (ou est supérieur à m). Exemple : pour tout x > 0, x + 1/x ≥ 2. On pose h(x) = x + 1/x sur ]0 ; +∞[ : h'(x) = 1 - 1/x² = (x - 1)(x + 1)/x², du signe de x - 1. h est décroissante sur ]0 ; 1] et croissante sur [1 ; +∞[, de minimum h(1) = 2.",
                "Pour comparer deux expressions A(x) et B(x), on étudie souvent la fonction différence d(x) = A(x) - B(x) : si son minimum est positif ou nul, alors A(x) ≥ B(x) partout.",
              ],
              box: { label: "Règle", text: "Si m est le minimum de f sur I, alors f(x) ≥ m pour tout x de I. Si M est le maximum de f sur I, alors f(x) ≤ M pour tout x de I." },
            },
            {
              heading: "Position relative de deux courbes",
              paragraphs: [
                "Pour savoir si la courbe C_f est au-dessus ou au-dessous de la courbe C_g, on étudie le signe de la différence f(x) - g(x). Là où f(x) - g(x) > 0, C_f est au-dessus de C_g ; là où f(x) - g(x) < 0, elle est au-dessous ; là où f(x) - g(x) = 0, les courbes se coupent.",
                "Exemple : f(x) = x³ et g(x) = x. On a f(x) - g(x) = x³ - x = x(x - 1)(x + 1). Un tableau de signes donne : C_f est au-dessus de C_g sur ]-1 ; 0[ et sur ]1 ; +∞[, au-dessous sur ]-∞ ; -1[ et sur ]0 ; 1[, et les courbes se coupent aux points d'abscisses -1, 0 et 1.",
              ],
              box: { label: "Propriété", text: "C_f est au-dessus de C_g sur un intervalle I si et seulement si f(x) - g(x) ≥ 0 pour tout x de I. La même méthode sert pour la position d'une courbe par rapport à une tangente ou à une droite." },
            },
          ],
          keyPoints: [
            "Étude : ensemble de définition, f'(x), factorisation, signe, tableau de variations, extremums, allure de la courbe.",
            "Chaque signe se justifie : facteur par facteur, carrés et dénominateurs carrés positifs.",
            "Pour prouver f(x) ≥ m sur I, montrer que le minimum de f sur I est supérieur ou égal à m.",
            "Comparer A(x) et B(x) : étudier la différence A(x) - B(x).",
            "Position de C_f et C_g : signe de f(x) - g(x) ; les zéros donnent les points d'intersection.",
          ],
          example: {
            statement: "Démontrer que pour tout réel x, x⁴ - 4x + 3 ≥ 0.",
            solution: [
              "On pose f(x) = x⁴ - 4x + 3, définie et dérivable sur R : f'(x) = 4x³ - 4 = 4(x³ - 1).",
              "La fonction cube est strictement croissante sur R et 1³ = 1, donc x³ - 1 < 0 pour x < 1 et x³ - 1 > 0 pour x > 1.",
              "f est décroissante sur ]-∞ ; 1] et croissante sur [1 ; +∞[ : elle admet un minimum en x = 1.",
              "f(1) = 1 - 4 + 3 = 0.",
              "Le minimum de f sur R est 0, donc pour tout réel x, x⁴ - 4x + 3 ≥ 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Étudier la fonction f définie sur R par f(x) = 2x³ - 3x² - 12x + 5 : dérivée, signe de la dérivée, tableau de variations, extremums locaux. Donner les équations des tangentes horizontales.",
              hint: "Mettez 6 en facteur dans f'(x), puis cherchez deux racines entières du trinôme restant.",
              solution: [
                "f'(x) = 6x² - 6x - 12 = 6(x² - x - 2) = 6(x - 2)(x + 1) (racines 2 et -1 : 4 - 2 - 2 = 0 et 1 + 1 - 2 = 0).",
                "Coefficient 6 > 0 : f'(x) > 0 sur ]-∞ ; -1[ et sur ]2 ; +∞[, f'(x) < 0 sur ]-1 ; 2[.",
                "f(-1) = -2 - 3 + 12 + 5 = 12 et f(2) = 16 - 12 - 24 + 5 = -15.",
                "f est croissante sur ]-∞ ; -1], décroissante sur [-1 ; 2], croissante sur [2 ; +∞[. Maximum local 12 en -1, minimum local -15 en 2.",
                "Les tangentes horizontales sont les droites d'équations y = 12 (en x = -1) et y = -15 (en x = 2).",
              ],
            },
            {
              level: 2,
              statement: "Soit f(x) = x³ et g(x) = 3x - 2 définies sur R, et d(x) = f(x) - g(x). 1) Vérifier que d(x) = (x - 1)²(x + 2). 2) Étudier le signe de d(x). 3) En déduire la position relative de la courbe de f et de la droite d'équation y = 3x - 2.",
              hint: "Développez (x - 1)²(x + 2) en commençant par (x - 1)² = x² - 2x + 1. Le facteur (x - 1)² est un carré.",
              solution: [
                "1) (x - 1)²(x + 2) = (x² - 2x + 1)(x + 2) = x³ + 2x² - 2x² - 4x + x + 2 = x³ - 3x + 2 = x³ - (3x - 2) = d(x).",
                "2) (x - 1)² ≥ 0, nul seulement en 1. Donc d(x) est du signe de x + 2, sauf en 1 où il est nul : d(x) < 0 pour x < -2, d(x) = 0 pour x = -2 ou x = 1, d(x) > 0 sinon.",
                "3) La courbe de f est au-dessous de la droite sur ]-∞ ; -2[ et au-dessus sur ]-2 ; 1[ et sur ]1 ; +∞[.",
                "Elles se coupent en x = -2, point (-2 ; -8), et se touchent en x = 1, point (1 ; 1), sans que la courbe traverse la droite.",
                "Remarque : f'(1) = 3 et f(1) = 1, donc y = 3x - 2 est exactement la tangente à la courbe de f en 1.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f la fonction définie sur ]-1 ; +∞[ par f(x) = (x² + 3x + 6)/(x + 1). 1) Montrer que f'(x) = (x² + 2x - 3)/(x + 1)². 2) Dresser le tableau de variations de f. 3) En déduire que pour tout x > -1, x² + 3x + 6 ≥ 5(x + 1). 4) Déterminer l'équation de la tangente T à la courbe de f en 0, puis étudier la position de la courbe par rapport à T.",
              hint: "Factorisez x² + 2x - 3 (une racine évidente est 1). Pour la dernière question, calculez f(x) - (équation de T) et mettez au même dénominateur.",
              solution: [
                "1) f'(x) = ((2x + 3)(x + 1) - (x² + 3x + 6))/(x + 1)² = (2x² + 5x + 3 - x² - 3x - 6)/(x + 1)² = (x² + 2x - 3)/(x + 1)².",
                "2) x² + 2x - 3 = (x - 1)(x + 3). Sur ]-1 ; +∞[, x + 3 > 0 et (x + 1)² > 0 : f'(x) est du signe de x - 1. f est décroissante sur ]-1 ; 1] et croissante sur [1 ; +∞[, avec f(1) = 10/2 = 5.",
                "3) Le minimum de f sur ]-1 ; +∞[ est 5, donc f(x) ≥ 5. Comme x + 1 > 0, on multiplie : x² + 3x + 6 ≥ 5(x + 1).",
                "4) f(0) = 6 et f'(0) = -3/1 = -3, donc T : y = -3x + 6.",
                "f(x) - (-3x + 6) = (x² + 3x + 6 - (-3x + 6)(x + 1))/(x + 1) = (x² + 3x + 6 - (-3x² + 3x + 6))/(x + 1) = 4x²/(x + 1).",
                "Sur ]-1 ; +∞[, 4x² ≥ 0 et x + 1 > 0 : la différence est positive ou nulle. La courbe est au-dessus de T, et la touche seulement au point (0 ; 6).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude d'une fonction.",
            items: [
              "Déterminer l'ensemble de définition et de dérivabilité.",
              "Calculer la dérivée f'(x).",
              "Factoriser f'(x) ou la mettre au même dénominateur.",
              "Étudier le signe de f'(x) dans un tableau de signes.",
              "Dresser le tableau de variations avec les images aux valeurs clés.",
              "Lire les extremums et tracer l'allure de la courbe.",
            ],
          },
          quiz: [
            { q: "Pour étudier la position relative des courbes de f et de g, on étudie le signe de :", options: ["f(x) - g(x)", "f'(x) - g'(x)", "f(x) × g(x)", "f'(x)"], answer: 0, why: "La courbe de f est au-dessus de celle de g exactement là où f(x) - g(x) est positif." },
            { q: "Le minimum sur R de f(x) = x⁴ - 4x + 3 vaut :", options: ["3", "-4", "0", "1"], answer: 2, why: "f'(x) = 4(x³ - 1) change de signe en 1, et f(1) = 1 - 4 + 3 = 0." },
            { q: "Pour montrer que f(x) ≥ 0 pour tout x de I, il suffit de montrer que :", options: ["f'(x) est positive ou nulle sur tout l'intervalle I", "f admet sur I un minimum positif ou nul", "f(0) est positif ou nul", "f est définie sur I"], answer: 1, why: "Si le minimum m de f sur I vérifie m ≥ 0, alors f(x) ≥ m ≥ 0 partout sur I. Une fonction croissante peut très bien être négative." },
            { q: "La courbe de f(x) = x³ et la droite d'équation y = 3x - 2 :", options: ["n'ont aucun point commun", "ont trois points communs distincts", "ont un seul point commun, en x = 1", "se coupent en x = -2 et x = 1"], answer: 3, why: "x³ - 3x + 2 = (x - 1)²(x + 2) s'annule en -2 et en 1 ; en 1, la droite est tangente à la courbe." },
            { q: "Une tangente horizontale au point d'abscisse a de la courbe de f signifie :", options: ["f'(a) = 0", "f(a) = 0", "f'(a) = 1", "f(a) = f'(a)"], answer: 0, why: "Le coefficient directeur de la tangente est f'(a) ; il est nul pour une droite horizontale." },
          ],
          trap: "Oublier de restreindre l'étude du signe à l'ensemble de définition : sur ]-1 ; +∞[, un facteur comme x + 3 est toujours positif et ne doit pas créer de changement de signe dans le tableau.",
          method: "Après avoir dressé un tableau de variations, relisez-le comme un contrôleur : chaque flèche montante va-t-elle bien vers une valeur plus grande ? Une image calculée en un point intermédiaire confirme-t-elle le sens ?",
        },
      ],
    },
    /* ==================================================================== */
    /* PROBABILITÉS CONDITIONNELLES ET INDÉPENDANCE                           */
    /* ==================================================================== */
    {
      id: 'probabilites-conditionnelles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'probabilite-conditionnelle',
          title: 'Probabilité conditionnelle et tableaux croisés',
          minutes: 30,
          objectives: [
            "Calculer une probabilité conditionnelle à partir de la définition P_A(B) = P(A∩B) / P(A).",
            "Lire des probabilités conditionnelles dans un tableau croisé d'effectifs.",
            "Distinguer P_A(B), P_B(A) et P(A∩B) dans un énoncé.",
          ],
          course: [
            {
              heading: "Restreindre l'univers : la probabilité sachant A",
              paragraphs: [
                "Dans une expérience aléatoire, on dispose parfois d'une information partielle : l'événement A est réalisé. Les issues possibles ne sont plus toutes celles de l'univers Ω, mais seulement celles de A. La probabilité de B doit alors être recalculée à l'intérieur de A : c'est la probabilité conditionnelle de B sachant A, notée P_A(B) (on lit « P de B sachant A »).",
                "Exemple : on lance un dé équilibré à six faces. Soit A « le résultat est pair » = {2 ; 4 ; 6} et B « le résultat est supérieur ou égal à 4 » = {4 ; 5 ; 6}. Sans information, P(B) = 3/6 = 1/2. Si l'on sait que le résultat est pair, il ne reste que trois issues équiprobables, dont deux (4 et 6) réalisent B : P_A(B) = 2/3. L'information a modifié la probabilité.",
              ],
              box: { label: "Définition", text: "Soit A un événement de probabilité non nulle. La probabilité de B sachant A est le nombre P_A(B) = P(A∩B) / P(A). En situation d'équiprobabilité, P_A(B) = card(A∩B) / card(A), où card désigne le nombre d'issues." },
            },
            {
              heading: "Lire un tableau croisé d'effectifs",
              paragraphs: [
                "Un tableau croisé (ou tableau à double entrée) répartit une population selon deux critères. Lorsqu'on choisit un individu au hasard, chaque probabilité conditionnelle se lit comme une proportion à l'intérieur d'une ligne ou d'une colonne : le dénominateur est le total de la ligne ou de la colonne qui correspond à la condition.",
                "Exemple : dans un lycée de 400 élèves, 220 sont des filles (F) et 180 des garçons (G) ; 90 filles et 108 garçons pratiquent un sport en club (S), soit 198 élèves. On choisit un élève au hasard. P(S) = 198/400 = 0,495. P_F(S) = 90/220 = 9/22 ≈ 0,41 : c'est la proportion de sportives parmi les filles. P_S(F) = 90/198 = 5/11 ≈ 0,45 : c'est la proportion de filles parmi les sportifs.",
                "Ces deux nombres sont différents : P_F(S) et P_S(F) n'ont ni le même dénominateur ni le même sens. Dans un énoncé, le mot « parmi » désigne toujours l'événement par lequel on conditionne, celui qui se place en indice.",
              ],
              box: { label: "À retenir", text: "Dans un tableau croisé, P_A(B) = (effectif de A et B) / (effectif total de A). On divise par le total de la condition, jamais par l'effectif total de la population." },
            },
            {
              heading: "Formule du produit et propriétés",
              paragraphs: [
                "De la définition, on tire la formule du produit : P(A∩B) = P(A) × P_A(B). Elle sert lorsque l'énoncé donne une proportion « parmi » un groupe. Exemple : 40 % des clients d'un magasin ont la carte de fidélité et, parmi eux, 25 % achètent aussi en ligne. La probabilité qu'un client pris au hasard ait la carte et achète en ligne vaut 0,4 × 0,25 = 0,1.",
                "P_A est une probabilité : ses valeurs sont comprises entre 0 et 1, P_A(A) = 1, et pour l'événement contraire B̄ (lu « B barre » ou « non B »), P_A(B̄) = 1 - P_A(B). Si A et B sont incompatibles (A∩B = ∅), alors P_A(B) = 0 : sachant que A est réalisé, B ne peut pas se produire.",
              ],
              box: { label: "Propriété", text: "Si P(A) ≠ 0 : P(A∩B) = P(A) × P_A(B), 0 ≤ P_A(B) ≤ 1 et P_A(B̄) = 1 - P_A(B). Si de plus P(B) ≠ 0, on a aussi P(A∩B) = P(B) × P_B(A)." },
            },
          ],
          keyPoints: [
            "P_A(B) = P(A∩B) / P(A), défini lorsque P(A) ≠ 0 ; on lit « probabilité de B sachant A ».",
            "Formule du produit : P(A∩B) = P(A) × P_A(B).",
            "Dans un tableau croisé, on divise par le total de la ligne ou de la colonne de la condition.",
            "« Parmi les ... » désigne l'événement par lequel on conditionne.",
            "P_A(B) et P_B(A) sont en général différents.",
            "P_A(B̄) = 1 - P_A(B).",
          ],
          example: {
            statement: "Une salle de sport interroge 500 clients : 300 femmes (F) et 200 hommes (H). Parmi eux, 120 femmes et 100 hommes ont souscrit l'abonnement annuel (A). On choisit un client au hasard. 1) Construire le tableau croisé. 2) Calculer P(A), P_F(A) et P_H(A). 3) Un client a souscrit l'abonnement annuel : quelle est la probabilité que ce soit un homme ?",
            solution: [
              "1) Tableau : F et A : 120 ; F et Ā : 300 - 120 = 180 ; H et A : 100 ; H et Ā : 200 - 100 = 100. Totaux des colonnes : A : 220, Ā : 280, total général 500.",
              "2) P(A) = 220/500 = 0,44.",
              "P_F(A) = 120/300 = 0,4 : 40 % des femmes ont l'abonnement annuel. P_H(A) = 100/200 = 0,5 : c'est le cas de la moitié des hommes.",
              "3) On cherche P_A(H) : on se place dans la colonne A, d'effectif 220. P_A(H) = 100/220 = 5/11 ≈ 0,455.",
              "Réponse : sachant qu'un client a l'abonnement annuel, la probabilité que ce soit un homme est 5/11, soit environ 0,455.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "A et B sont deux événements tels que P(A) = 0,4, P(B) = 0,5 et P(A∩B) = 0,1. Calculer P_A(B), P_B(A) et P_A(B̄).",
              hint: "Appliquez la définition en divisant P(A∩B) par la probabilité de l'événement placé en indice.",
              solution: [
                "P_A(B) = P(A∩B) / P(A) = 0,1 / 0,4 = 0,25.",
                "P_B(A) = P(A∩B) / P(B) = 0,1 / 0,5 = 0,2.",
                "P_A(B̄) = 1 - P_A(B) = 1 - 0,25 = 0,75.",
                "Résultat : P_A(B) = 0,25, P_B(A) = 0,2 et P_A(B̄) = 0,75 ; on remarque que P_A(B) ≠ P_B(A).",
              ],
            },
            {
              level: 2,
              statement: "Un magasin a vendu 250 téléviseurs : 150 de la marque X et les autres de la marque Y. 12 % des téléviseurs X et 20 % des téléviseurs Y ont été rapportés pour une panne pendant la garantie (événement D). On choisit au hasard la fiche d'un téléviseur vendu. 1) Construire le tableau croisé des effectifs. 2) Calculer P(D) et P_X(D). 3) Le téléviseur choisi a été rapporté en panne : quelle est la probabilité qu'il soit de la marque X ?",
              hint: "Calculez d'abord 12 % de 150 et 20 % de 100. Pour la question 3, l'événement connu est D : divisez par le nombre total de téléviseurs rapportés en panne.",
              solution: [
                "1) Marque Y : 250 - 150 = 100 téléviseurs. X et D : 0,12 × 150 = 18 ; X et D̄ : 150 - 18 = 132 ; Y et D : 0,2 × 100 = 20 ; Y et D̄ : 80. Total D : 38 ; total D̄ : 212.",
                "2) P(D) = 38/250 = 0,152. P_X(D) = 18/150 = 0,12, ce qui correspond bien aux 12 % de l'énoncé.",
                "3) On cherche P_D(X) = 18/38 = 9/19 ≈ 0,474.",
                "Résultat : un téléviseur rapporté en panne est de la marque X avec une probabilité 9/19, soit environ 0,47, alors que la marque X représente 60 % des ventes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un club sportif, 30 % des adhérents sont mineurs (événement M). Parmi les mineurs, 60 % font de la compétition (événement C). Au total, 50 % des adhérents font de la compétition. On choisit un adhérent au hasard. 1) Traduire les données de l'énoncé à l'aide de probabilités. 2) Calculer P(M∩C). 3) Calculer la probabilité qu'un compétiteur choisi au hasard soit mineur. 4) Calculer P(M̄∩C), puis la probabilité qu'un adhérent majeur fasse de la compétition (arrondir à 10⁻³). 5) Le club compte 1 000 adhérents : dresser le tableau croisé des effectifs.",
              hint: "« Parmi les mineurs » se traduit par une probabilité sachant M. Pour la question 4, C est la réunion des événements incompatibles M∩C et M̄∩C.",
              solution: [
                "1) P(M) = 0,3, P_M(C) = 0,6 et P(C) = 0,5.",
                "2) P(M∩C) = P(M) × P_M(C) = 0,3 × 0,6 = 0,18.",
                "3) On cherche P_C(M) = P(M∩C) / P(C) = 0,18 / 0,5 = 0,36.",
                "4) P(C) = P(M∩C) + P(M̄∩C), donc P(M̄∩C) = 0,5 - 0,18 = 0,32. Comme P(M̄) = 0,7, on obtient P_M̄(C) = 0,32 / 0,7 = 16/35 ≈ 0,457.",
                "5) Sur 1 000 adhérents : mineurs compétiteurs 180 ; mineurs non compétiteurs 300 - 180 = 120 ; majeurs compétiteurs 500 - 180 = 320 ; majeurs non compétiteurs 700 - 320 = 380. Totaux : 500 compétiteurs et 500 non-compétiteurs.",
                "Conclusion : 36 % des compétiteurs sont mineurs, et un adhérent majeur fait de la compétition avec une probabilité d'environ 0,457.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notation à sa signification.",
            pairs: [
              { left: "P(A∩B)", right: "Probabilité que A et B soient tous deux réalisés" },
              { left: "P_A(B)", right: "Probabilité de B sachant que A est réalisé" },
              { left: "P_B(A)", right: "Probabilité de A sachant que B est réalisé" },
              { left: "P_A(B̄)", right: "1 - P_A(B)" },
              { left: "P(A∪B)", right: "P(A) + P(B) - P(A∩B)" },
            ],
          },
          quiz: [
            { q: "On sait que P(A) = 0,5 et P(A∩B) = 0,2. Que vaut P_A(B) ?", options: ["0,1", "0,4", "0,7", "2,5"], answer: 1, why: "P_A(B) = P(A∩B) / P(A) = 0,2 / 0,5 = 0,4." },
            { q: "Sur 200 élèves, 80 sont internes et, parmi eux, 20 sont en Première. On choisit un interne au hasard. Probabilité qu'il soit en Première ?", options: ["0,1", "0,4", "0,25"], answer: 2, why: "On se restreint aux 80 internes : 20/80 = 0,25. Le calcul 20/200 donnerait P(I∩P), pas la probabilité conditionnelle." },
            { q: "Si P(A) ≠ 0, que vaut P_A(A) ?", options: ["0", "P(A)", "1", "P(A)²"], answer: 2, why: "Sachant que A est réalisé, A est certain : P_A(A) = P(A) / P(A) = 1." },
            { q: "La formule P_A(B) = P(A∩B) / P(A) exige :", options: ["P(A) ≠ 0", "P(B) ≠ 0", "A et B disjoints", "P(A∩B) ≠ 0"], answer: 0, why: "On divise par P(A), qui doit donc être non nul." },
            { q: "A et B sont incompatibles et P(A) ≠ 0. Alors P_A(B) vaut :", options: ["P(B)", "1", "1 - P(B)", "0"], answer: 3, why: "A∩B = ∅, donc P(A∩B) = 0 et P_A(B) = 0 : sachant A, B est impossible." },
          ],
          trap: "Confondre P_A(B), P_B(A) et P(A∩B) : dans « 60 % des mineurs font de la compétition », 0,6 est P_M(C), et non P(M∩C) ni P_C(M).",
          method: "Avant tout calcul, réécrivez chaque phrase de l'énoncé sous forme de probabilité : « parmi les X » ou « sachant X » place X en indice ; « et » ou « à la fois » donne une intersection.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'arbres-probabilites-totales',
          title: 'Arbres pondérés et formule des probabilités totales',
          minutes: 35,
          objectives: [
            "Construire et interpréter un arbre pondéré.",
            "Calculer la probabilité d'un événement à l'aide de la formule des probabilités totales.",
            "Inverser un conditionnement : calculer P_B(A) connaissant P_A(B).",
          ],
          course: [
            {
              heading: "Construire un arbre pondéré",
              paragraphs: [
                "Un arbre pondéré représente une expérience en plusieurs étapes. Les branches issues de la racine portent les probabilités des événements de la première étape, par exemple P(A) et P(Ā). Les branches suivantes portent des probabilités conditionnelles : sur la branche qui va de A vers B, on écrit P_A(B), et sur celle qui va de Ā vers B, on écrit P_Ā(B).",
                "Trois règles permettent de l'exploiter. La somme des probabilités des branches issues d'un même nœud vaut 1 (par exemple P_A(B) + P_A(B̄) = 1). Un chemin complet représente une intersection. La probabilité d'un chemin est le produit des probabilités portées par ses branches : c'est la formule du produit, P(A∩B) = P(A) × P_A(B).",
              ],
              box: { label: "Règle", text: "Nœud : la somme des branches qui en partent vaut 1. Chemin : sa probabilité est le produit des probabilités de ses branches. Événement : sa probabilité est la somme des probabilités des chemins qui y mènent." },
            },
            {
              heading: "Partition et formule des probabilités totales",
              paragraphs: [
                "Des événements A₁, A₂, ..., Aₙ de probabilités non nulles forment une partition de l'univers Ω s'ils sont deux à deux incompatibles et si leur réunion est Ω : chaque issue appartient à un et un seul de ces événements. Le cas le plus fréquent est la partition formée par un événement A et son contraire Ā.",
                "Un événement B se découpe alors selon la partition : B est la réunion des événements A₁∩B, A₂∩B, ..., Aₙ∩B, qui sont deux à deux incompatibles. On additionne donc leurs probabilités. Sur l'arbre, cela revient à additionner les probabilités de tous les chemins qui aboutissent à B.",
              ],
              box: { label: "Formule", text: "Si A₁, ..., Aₙ forment une partition de Ω, alors P(B) = P(A₁∩B) + ... + P(Aₙ∩B) = P(A₁) × P_A₁(B) + ... + P(Aₙ) × P_Aₙ(B). Avec A et Ā : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B)." },
            },
            {
              heading: "Inverser le conditionnement",
              paragraphs: [
                "L'arbre donne naturellement P_A(B), mais la question porte souvent sur P_B(A) : sachant que l'on a observé B, quelle est la probabilité que A soit réalisé ? On calcule d'abord P(B) par la formule des probabilités totales, puis P_B(A) = P(A∩B) / P(B).",
                "Exemple, dans un modèle fictif : une maladie touche 2 % d'une population ; un test est positif chez 95 % des malades et chez 3 % des personnes saines. Avec M « être malade » et T « le test est positif » : P(T) = 0,02 × 0,95 + 0,98 × 0,03 = 0,019 + 0,0294 = 0,0484. Puis P_T(M) = 0,019 / 0,0484 ≈ 0,39. Un test positif ne signifie donc pas que la personne est malade avec une forte probabilité : la maladie étant rare, une grande partie des tests positifs concerne des personnes saines.",
              ],
              box: { label: "À retenir", text: "Pour calculer P_B(A) à partir d'un arbre construit selon A puis B : calculer P(A∩B) par le produit le long du chemin, calculer P(B) par la formule des probabilités totales, puis diviser." },
            },
          ],
          keyPoints: [
            "Premier niveau de l'arbre : P(A) et P(Ā). Second niveau : P_A(B), P_A(B̄), P_Ā(B), P_Ā(B̄).",
            "Les branches issues d'un même nœud ont une somme égale à 1.",
            "Probabilité d'un chemin = produit des probabilités de ses branches.",
            "Probabilités totales : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B).",
            "Partition : événements deux à deux incompatibles dont la réunion est l'univers.",
            "Pour inverser : P_B(A) = P(A∩B) / P(B), après avoir calculé P(B).",
          ],
          example: {
            statement: "Une usine fabrique des pièces sur deux machines. La machine M₁ produit 60 % des pièces et la machine M₂ le reste. 2 % des pièces de M₁ et 5 % des pièces de M₂ sont défectueuses (événement D). On prélève une pièce au hasard. 1) Construire l'arbre pondéré. 2) Calculer P(D). 3) La pièce est défectueuse : quelle est la probabilité qu'elle provienne de M₁ ?",
            solution: [
              "1) Premier niveau : P(M₁) = 0,6 et P(M₂) = 0,4. Second niveau : P_M₁(D) = 0,02 et P_M₁(D̄) = 0,98 ; P_M₂(D) = 0,05 et P_M₂(D̄) = 0,95.",
              "2) M₁ et M₂ forment une partition. P(M₁∩D) = 0,6 × 0,02 = 0,012 et P(M₂∩D) = 0,4 × 0,05 = 0,02.",
              "Formule des probabilités totales : P(D) = 0,012 + 0,02 = 0,032.",
              "3) P_D(M₁) = P(M₁∩D) / P(D) = 0,012 / 0,032 = 0,375.",
              "Réponse : 3,2 % des pièces sont défectueuses, et une pièce défectueuse provient de M₁ avec une probabilité 0,375, bien que M₁ fabrique 60 % des pièces.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère un arbre pondéré dans lequel P(A) = 0,7, P_A(B) = 0,2 et P_Ā(B) = 0,6. 1) Compléter toutes les branches de l'arbre. 2) Calculer P(A∩B) et P(Ā∩B). 3) En déduire P(B), puis P_B(A).",
              hint: "Sur chaque nœud, la somme des branches vaut 1. Pour P(B), additionnez les deux chemins qui mènent à B.",
              solution: [
                "1) P(Ā) = 1 - 0,7 = 0,3 ; P_A(B̄) = 1 - 0,2 = 0,8 ; P_Ā(B̄) = 1 - 0,6 = 0,4.",
                "2) P(A∩B) = 0,7 × 0,2 = 0,14 et P(Ā∩B) = 0,3 × 0,6 = 0,18.",
                "3) Formule des probabilités totales : P(B) = 0,14 + 0,18 = 0,32.",
                "P_B(A) = P(A∩B) / P(B) = 0,14 / 0,32 = 0,4375.",
                "Résultat : P(B) = 0,32 et P_B(A) = 0,4375.",
              ],
            },
            {
              level: 2,
              statement: "Un fabricant de vélos achète ses freins à trois fournisseurs : F₁ fournit 50 % des freins, F₂ 30 % et F₃ 20 %. Les proportions de freins défectueux sont respectivement de 1 %, 2 % et 4 %. On choisit un frein au hasard et on note D l'événement « le frein est défectueux ». 1) Construire l'arbre pondéré. 2) Calculer P(D). 3) Un frein est défectueux : quelle est la probabilité qu'il provienne de F₃ ? Arrondir à 10⁻³.",
              hint: "Les trois fournisseurs forment une partition : l'arbre a trois branches au premier niveau, et la formule des probabilités totales comporte trois termes.",
              solution: [
                "1) Premier niveau : P(F₁) = 0,5 ; P(F₂) = 0,3 ; P(F₃) = 0,2. Second niveau : P_F₁(D) = 0,01, P_F₂(D) = 0,02, P_F₃(D) = 0,04, et les branches vers D̄ portent 0,99 ; 0,98 ; 0,96.",
                "2) P(D) = 0,5 × 0,01 + 0,3 × 0,02 + 0,2 × 0,04 = 0,005 + 0,006 + 0,008 = 0,019.",
                "3) P_D(F₃) = P(F₃∩D) / P(D) = 0,008 / 0,019 = 8/19 ≈ 0,421.",
                "Résultat : 1,9 % des freins sont défectueux, et un frein défectueux provient de F₃ avec une probabilité d'environ 0,421, alors que F₃ ne fournit que 20 % des freins.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans une ville, 40 % des habitants utilisent les transports en commun (événement T). Parmi eux, 70 % se déclarent satisfaits de l'offre de mobilité (événement S). Une enquête montre que 58 % de l'ensemble des habitants sont satisfaits. On interroge un habitant au hasard. 1) Représenter la situation par un arbre pondéré, en notant x = P_T̄(S). 2) Calculer P(T∩S). 3) À l'aide de la formule des probabilités totales, montrer que x = 0,5. 4) L'habitant interrogé est satisfait : quelle est la probabilité qu'il utilise les transports en commun ? Arrondir à 10⁻³. 5) Calculer la probabilité qu'un habitant soit insatisfait sachant qu'il utilise les transports en commun.",
              hint: "Écrivez P(S) = P(T∩S) + P(T̄∩S) avec P(T̄∩S) = 0,6x, puis résolvez l'équation du premier degré obtenue.",
              solution: [
                "1) Premier niveau : P(T) = 0,4 et P(T̄) = 0,6. Second niveau : P_T(S) = 0,7 et P_T(S̄) = 0,3 ; P_T̄(S) = x et P_T̄(S̄) = 1 - x.",
                "2) P(T∩S) = 0,4 × 0,7 = 0,28.",
                "3) T et T̄ forment une partition, donc P(S) = P(T∩S) + P(T̄∩S), soit 0,58 = 0,28 + 0,6x. D'où 0,6x = 0,3 et x = 0,5.",
                "4) P_S(T) = P(T∩S) / P(S) = 0,28 / 0,58 = 14/29 ≈ 0,483.",
                "5) P_T(S̄) = 1 - P_T(S) = 1 - 0,7 = 0,3.",
                "Conclusion : la moitié des non-utilisateurs sont satisfaits ; un habitant satisfait utilise les transports en commun avec une probabilité d'environ 0,483 ; un utilisateur est insatisfait avec une probabilité de 0,3.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un calcul avec un arbre pondéré.",
            items: [
              "Identifier les événements et la partition de la première étape.",
              "Tracer l'arbre et placer P(A) et P(Ā) sur les premières branches.",
              "Placer les probabilités conditionnelles sur les branches du second niveau.",
              "Compléter chaque nœud pour que la somme des branches vaille 1.",
              "Calculer par produit la probabilité de chaque chemin menant à B.",
              "Additionner ces probabilités pour obtenir P(B).",
              "Si on le demande, calculer P_B(A) = P(A∩B) / P(B).",
            ],
          },
          quiz: [
            { q: "Dans un arbre pondéré, la somme des probabilités des branches issues d'un même nœud vaut :", options: ["la probabilité de ce nœud", "1", "0", "cela dépend de l'arbre"], answer: 1, why: "Les branches issues d'un nœud correspondent à des événements contraires (ou à une partition) : leurs probabilités ont pour somme 1." },
            { q: "P(A) = 0,4, P_A(B) = 0,5 et P_Ā(B) = 0,25. Que vaut P(B) ?", options: ["0,75", "0,125", "0,35", "0,2"], answer: 2, why: "P(B) = 0,4 × 0,5 + 0,6 × 0,25 = 0,2 + 0,15 = 0,35." },
            { q: "Avec les mêmes données (P(A) = 0,4, P_A(B) = 0,5, P(B) = 0,35), que vaut P_B(A) ?", options: ["4/7", "0,5", "0,2", "3/7"], answer: 0, why: "P_B(A) = P(A∩B) / P(B) = 0,2 / 0,35 = 4/7." },
            { q: "Sur la branche qui va de A vers B, au second niveau d'un arbre, on lit :", options: ["P(B)", "P(A∩B)", "P_B(A)", "P_A(B)"], answer: 3, why: "Les branches du second niveau portent des probabilités conditionnelles : celle qui part de A vers B porte P_A(B)." },
            { q: "Les événements A₁, A₂, A₃ forment une partition de l'univers lorsque :", options: ["ils ont tous la même probabilité", "ils sont deux à deux incompatibles et leur réunion est l'univers", "leurs probabilités valent chacune 1/3"], answer: 1, why: "C'est la définition : chaque issue appartient à un et un seul des trois événements." },
          ],
          trap: "Additionner les probabilités le long d'un chemin au lieu de les multiplier, ou écrire P(B) au lieu de P_A(B) sur une branche du second niveau.",
          method: "Après avoir tracé un arbre, vérifiez chaque nœud (somme égale à 1), puis contrôlez que la somme des probabilités de tous les chemins vaut 1 : ce test rapide détecte la plupart des erreurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'independance',
          title: 'Événements indépendants et succession de deux épreuves',
          minutes: 30,
          objectives: [
            "Reconnaître et démontrer l'indépendance de deux événements.",
            "Distinguer événements indépendants et événements incompatibles.",
            "Modéliser la succession de deux épreuves indépendantes par un arbre ou un tableau.",
          ],
          course: [
            {
              heading: "Deux événements indépendants",
              paragraphs: [
                "Intuitivement, deux événements sont indépendants lorsque savoir que l'un est réalisé ne change pas la probabilité de l'autre : P_A(B) = P(B). En remplaçant P_A(B) par P(A∩B) / P(A), on obtient une définition qui n'exige pas que P(A) soit non nul et qui joue le même rôle pour A et pour B.",
                "Exemple : on lance un dé équilibré. A « le résultat est pair » = {2 ; 4 ; 6} et B « le résultat est inférieur ou égal à 2 » = {1 ; 2}. A∩B = {2}, donc P(A∩B) = 1/6, et P(A) × P(B) = 1/2 × 1/3 = 1/6. Les événements A et B sont indépendants : savoir que le résultat est pair ne change pas la probabilité qu'il soit inférieur ou égal à 2 (P_A(B) = 1/3 = P(B)).",
              ],
              box: { label: "Définition", text: "Deux événements A et B sont indépendants lorsque P(A∩B) = P(A) × P(B). Si P(A) ≠ 0, cela équivaut à P_A(B) = P(B)." },
            },
            {
              heading: "Indépendants ne veut pas dire incompatibles",
              paragraphs: [
                "Deux événements incompatibles ne peuvent pas se produire ensemble : P(A∩B) = 0. Si leurs probabilités sont non nulles, P(A) × P(B) > 0, donc ils ne sont pas indépendants. C'est même le contraire de l'indépendance : savoir que A est réalisé rend B impossible. Avec le dé, « obtenir 1 » et « obtenir 6 » sont incompatibles, et donc dépendants.",
                "Propriété à savoir démontrer : si A et B sont indépendants, alors Ā et B le sont aussi. En effet, B est la réunion des événements incompatibles A∩B et Ā∩B, donc P(Ā∩B) = P(B) - P(A∩B) = P(B) - P(A) × P(B) = P(B) × (1 - P(A)) = P(Ā) × P(B).",
              ],
              box: { label: "Propriété", text: "Si A et B sont indépendants, alors Ā et B, A et B̄, Ā et B̄ sont aussi indépendants. Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants." },
            },
            {
              heading: "Succession de deux épreuves indépendantes",
              paragraphs: [
                "On réalise deux épreuves l'une après l'autre, de sorte que le résultat de la première n'influence pas la seconde : lancer une pièce puis un dé, effectuer deux tirages avec remise, ou modéliser deux tirs successifs d'un joueur dont la réussite ne dépend pas du tir précédent. Une issue est alors un couple (résultat 1 ; résultat 2), et sa probabilité est le produit des probabilités des deux résultats.",
                "Sur l'arbre, l'indépendance se voit : les branches du second niveau portent les mêmes probabilités quel que soit le résultat de la première épreuve. Exemple : on lance une pièce équilibrée puis un dé équilibré ; P(« Pile » puis « 6 ») = 1/2 × 1/6 = 1/12. En revanche, deux tirages sans remise ne sont pas indépendants : la composition de l'urne change après le premier tirage.",
                "Pour « au moins un succès » en deux épreuves indépendantes, on passe par l'événement contraire « aucun succès ». Si chaque tir réussit avec la probabilité 0,7, P(au moins une réussite) = 1 - 0,3 × 0,3 = 1 - 0,09 = 0,91.",
              ],
              box: { label: "À retenir", text: "Pour deux épreuves indépendantes, la probabilité d'un couple de résultats est le produit de leurs probabilités. Des tirages avec remise sont indépendants, des tirages sans remise ne le sont pas." },
            },
          ],
          keyPoints: [
            "A et B indépendants : P(A∩B) = P(A) × P(B) ; si P(A) ≠ 0, cela équivaut à P_A(B) = P(B).",
            "Incompatibles (A∩B = ∅) et indépendants sont deux notions différentes, presque opposées.",
            "Si A et B sont indépendants, Ā et B le sont aussi.",
            "Deux épreuves indépendantes : la probabilité d'un couple de résultats est le produit des probabilités.",
            "Avec remise : épreuves indépendantes ; sans remise : épreuves dépendantes.",
            "« Au moins un » : passer par l'événement contraire « aucun ».",
          ],
          example: {
            statement: "Une urne contient 3 boules rouges et 2 boules vertes, indiscernables au toucher. On tire une boule, on note sa couleur, on la remet, puis on tire une seconde boule. 1) Calculer la probabilité d'obtenir deux boules de la même couleur. 2) Même question si la première boule n'est pas remise dans l'urne.",
            solution: [
              "1) Avec remise, les deux tirages sont indépendants et identiques : à chaque tirage, P(R) = 3/5 = 0,6 et P(V) = 2/5 = 0,4.",
              "P(RR) = 0,6 × 0,6 = 0,36 et P(VV) = 0,4 × 0,4 = 0,16. Ces deux issues sont incompatibles, donc P(même couleur) = 0,36 + 0,16 = 0,52.",
              "2) Sans remise, après une rouge il reste 2 rouges et 2 vertes ; après une verte, 3 rouges et 1 verte. Les branches du second niveau changent : les tirages ne sont plus indépendants.",
              "P(RR) = 3/5 × 2/4 = 6/20 et P(VV) = 2/5 × 1/4 = 2/20, donc P(même couleur) = 8/20 = 0,4.",
              "Réponse : 0,52 avec remise, 0,4 sans remise.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) A et B sont deux événements tels que P(A) = 0,3, P(B) = 0,5 et P(A∩B) = 0,15. Sont-ils indépendants ? Calculer P(A∪B). 2) C et D sont deux événements tels que P(C) = 0,4, P(D) = 0,25 et P(C∩D) = 0,12. Sont-ils indépendants ?",
              hint: "Calculez le produit des deux probabilités et comparez-le à la probabilité de l'intersection. Pour la réunion, utilisez P(A∪B) = P(A) + P(B) - P(A∩B).",
              solution: [
                "1) P(A) × P(B) = 0,3 × 0,5 = 0,15 = P(A∩B) : A et B sont indépendants.",
                "P(A∪B) = 0,3 + 0,5 - 0,15 = 0,65.",
                "2) P(C) × P(D) = 0,4 × 0,25 = 0,1, alors que P(C∩D) = 0,12 ≠ 0,1 : C et D ne sont pas indépendants.",
                "Résultat : A et B sont indépendants, avec P(A∪B) = 0,65 ; C et D ne le sont pas.",
              ],
            },
            {
              level: 2,
              statement: "Un lycée compte 200 élèves de Première : 120 filles et 80 garçons. 60 filles et 40 garçons pratiquent la musique (événement M). On choisit un élève au hasard ; F désigne l'événement « l'élève est une fille ». 1) Calculer P(F), P(M) et P(F∩M). 2) Les événements F et M sont-ils indépendants ? 3) Calculer P_F(M) et interpréter. 4) Sans nouveau calcul, que peut-on dire des événements F̄ et M̄ ?",
              hint: "Comparez P(F∩M) au produit P(F) × P(M). Pour la dernière question, pensez à la propriété sur les événements contraires.",
              solution: [
                "1) P(F) = 120/200 = 0,6 ; P(M) = (60 + 40)/200 = 0,5 ; P(F∩M) = 60/200 = 0,3.",
                "2) P(F) × P(M) = 0,6 × 0,5 = 0,3 = P(F∩M) : F et M sont indépendants.",
                "3) P_F(M) = 60/120 = 0,5 = P(M) : la proportion de musiciens est la même chez les filles que dans l'ensemble des élèves de Première.",
                "4) Si F et M sont indépendants, leurs contraires le sont aussi : F̄ et M̄ sont indépendants. Contrôle : P(F̄∩M̄) = 40/200 = 0,2 et P(F̄) × P(M̄) = 0,4 × 0,5 = 0,2.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Un jeu consiste à lancer deux fois de suite un dé équilibré à six faces ; les deux lancers sont indépendants. À chaque lancer, on note S l'événement « obtenir 6 ». Le joueur gagne s'il obtient au moins un 6. 1) Représenter la situation par un arbre pondéré à deux niveaux. 2) Calculer la probabilité de n'obtenir aucun 6. 3) En déduire la probabilité de gagner. 4) Calculer la probabilité d'obtenir exactement un 6. 5) Le joueur a gagné : quelle est la probabilité qu'il ait obtenu deux 6 ?",
              hint: "« Au moins un 6 » est le contraire de « aucun 6 ». Pour la dernière question, l'événement « obtenir deux 6 » est inclus dans l'événement « gagner ».",
              solution: [
                "1) À chaque lancer, P(S) = 1/6 et P(S̄) = 5/6. Les branches du second niveau sont les mêmes après S et après S̄, car les lancers sont indépendants.",
                "2) P(aucun 6) = 5/6 × 5/6 = 25/36.",
                "3) P(gagner) = 1 - 25/36 = 11/36 ≈ 0,306.",
                "4) Exactement un 6 : chemins (S ; S̄) et (S̄ ; S), de probabilité 1/6 × 5/6 = 5/36 chacun. Total : 10/36 = 5/18.",
                "5) Notons G « gagner » et D « obtenir deux 6 », avec P(D) = 1/36. Comme D est inclus dans G, P(G∩D) = P(D), donc P_G(D) = (1/36) / (11/36) = 1/11.",
                "Contrôle : 25/36 + 10/36 + 1/36 = 1. Réponses : 25/36 ; 11/36 ; 5/18 ; 1/11.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ne confondez pas indépendance et incompatibilité.",
            statements: [
              { text: "Deux événements incompatibles de probabilités non nulles sont indépendants.", true: false, why: "P(A∩B) = 0 alors que P(A) × P(B) > 0 : ils sont dépendants." },
              { text: "Si A et B sont indépendants, alors P(A∩B) = P(A) × P(B).", true: true, why: "C'est la définition de l'indépendance." },
              { text: "Si A et B sont indépendants et P(A) ≠ 0, alors P_A(B) = P(B).", true: true, why: "Savoir que A est réalisé ne change pas la probabilité de B." },
              { text: "Si A et B sont indépendants, alors Ā et B le sont aussi.", true: true, why: "P(Ā∩B) = P(B) - P(A)P(B) = P(Ā)P(B)." },
              { text: "Deux tirages successifs sans remise dans une urne sont des épreuves indépendantes.", true: false, why: "Le premier tirage modifie la composition de l'urne, donc les probabilités du second." },
              { text: "On lance deux fois une pièce équilibrée : P(Pile puis Pile) = 1/2.", true: false, why: "Les lancers sont indépendants : 1/2 × 1/2 = 1/4." },
              { text: "Pour deux épreuves indépendantes, les branches du second niveau portent les mêmes probabilités quel que soit le premier résultat.", true: true, why: "C'est la traduction de l'indépendance sur l'arbre." },
            ],
          },
          quiz: [
            { q: "A et B sont indépendants, avec P(A) = 0,2 et P(B) = 0,5. Que vaut P(A∩B) ?", options: ["0,7", "0,1", "0,4", "0,25"], answer: 1, why: "Par indépendance, P(A∩B) = P(A) × P(B) = 0,2 × 0,5 = 0,1." },
            { q: "Avec les mêmes données, que vaut P(A∪B) ?", options: ["0,6", "0,7", "0,1", "0,5"], answer: 0, why: "P(A∪B) = P(A) + P(B) - P(A∩B) = 0,2 + 0,5 - 0,1 = 0,6." },
            { q: "Un tireur atteint la cible avec la probabilité 0,8 à chaque tir, les tirs étant indépendants. Probabilité de manquer deux tirs de suite ?", options: ["0,2", "0,4", "0,64", "0,04"], answer: 3, why: "Chaque tir est manqué avec la probabilité 0,2, et par indépendance 0,2 × 0,2 = 0,04." },
            { q: "A et B sont incompatibles, avec P(A) = 0,3 et P(B) = 0,4. Les événements A et B sont :", options: ["indépendants", "non indépendants", "on ne peut pas conclure sans arbre"], answer: 1, why: "P(A∩B) = 0 alors que P(A) × P(B) = 0,12 : l'égalité de la définition n'est pas vérifiée." },
            { q: "On lance deux fois une pièce équilibrée. Probabilité d'obtenir exactement un Pile ?", options: ["1/4", "1/3", "1/2", "3/4"], answer: 2, why: "Deux chemins conviennent, (P ; F) et (F ; P), chacun de probabilité 1/4 : total 1/2." },
          ],
          trap: "Confondre « indépendants » et « incompatibles » : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants, puisque P(A∩B) = 0 alors que P(A) × P(B) > 0.",
          method: "Pour justifier une indépendance, calculez séparément P(A∩B) et P(A) × P(B), puis comparez les deux nombres dans une phrase de conclusion. Ne supposez l'indépendance que si l'énoncé l'indique ou si l'expérience l'impose (tirages avec remise, lancers successifs).",
        },
      ],
    },
    /* ==================================================================== */
    /* LA FONCTION EXPONENTIELLE                                              */
    /* ==================================================================== */
    {
      id: 'exponentielle',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'definition-exponentielle',
          title: 'Définir la fonction exponentielle : f’ = f et f(0) = 1',
          minutes: 30,
          objectives: [
            "Connaître la définition de la fonction exponentielle comme unique fonction dérivable sur R égale à sa dérivée et valant 1 en 0.",
            "Démontrer que exp(x) × exp(-x) = 1 et en déduire que exp ne s'annule pas.",
            "Calculer la dérivée d'une fonction comportant une exponentielle.",
            "Construire une approximation de la fonction exponentielle par la méthode d'Euler.",
          ],
          course: [
            {
              heading: "Une fonction égale à sa dérivée",
              paragraphs: [
                "Dans de nombreux phénomènes, la vitesse de variation d'une quantité est proportionnelle à cette quantité : plus une population de bactéries est nombreuse, plus elle augmente vite ; plus une substance radioactive est abondante, plus elle se désintègre vite. Le cas le plus simple est celui d'une fonction égale à sa propre dérivée : f' = f.",
                "La fonction nulle vérifie f' = f, mais elle ne présente aucun intérêt. On impose donc une condition initiale, f(0) = 1. Le théorème suivant est admis en Première : il garantit qu'une telle fonction existe et qu'il n'y en a qu'une.",
              ],
              box: { label: "Définition", text: "Il existe une unique fonction f dérivable sur R telle que f' = f et f(0) = 1. On l'appelle fonction exponentielle et on la note exp. Ainsi, pour tout réel x, exp'(x) = exp(x), et exp(0) = 1." },
            },
            {
              heading: "exp ne s'annule pas, et elle est unique",
              paragraphs: [
                "Démonstration à connaître. Posons φ(x) = exp(x) × exp(-x). La fonction x ↦ exp(-x) est la composée de exp et de la fonction affine x ↦ -x : sa dérivée est x ↦ -exp(-x). Par la formule du produit, φ'(x) = exp(x) × exp(-x) + exp(x) × (-exp(-x)) = 0. La fonction φ est donc constante sur R, égale à φ(0) = exp(0) × exp(0) = 1.",
                "Conséquences : pour tout réel x, exp(x) × exp(-x) = 1. Un produit égal à 1 n'a aucun facteur nul, donc exp(x) ≠ 0 pour tout x, et exp(-x) = 1/exp(x). L'unicité s'en déduit : si g est dérivable sur R avec g' = g et g(0) = 1, le quotient g/exp a pour dérivée (g' × exp - g × exp') / exp² = (g × exp - g × exp) / exp² = 0 ; il est constant, égal à g(0)/exp(0) = 1, donc g = exp.",
              ],
              box: { label: "Propriété", text: "Pour tout réel x : exp(x) ≠ 0, exp(x) × exp(-x) = 1 et exp(-x) = 1/exp(x)." },
            },
            {
              heading: "Approcher exp : la méthode d'Euler",
              paragraphs: [
                "Puisque exp'(x) = exp(x), l'approximation affine de exp au voisinage de x s'écrit, pour h petit : exp(x + h) ≈ exp(x) + h × exp(x) = (1 + h) exp(x). En partant de exp(0) = 1 et en avançant par pas de h, on obtient des valeurs approchées : y₀ = 1 et yₙ₊₁ = (1 + h) yₙ. Les nombres yₙ forment une suite géométrique de raison 1 + h.",
                "Avec h = 0,1, dix pas mènent de 0 à 1 : exp(1) ≈ 1,1¹⁰ ≈ 2,594. Plus le pas est petit, meilleure est l'approximation. La valeur exacte de exp(1) est un nombre irrationnel noté e, dont une valeur approchée est 2,718. Cette méthode se programme facilement en Python avec une boucle.",
              ],
              box: { label: "Repère", text: "Le nombre e = exp(1) ≈ 2,71828. On note aussi exp(x) = eˣ, ce qui se lit « e exposant x » ; cette notation est justifiée par les propriétés algébriques de la leçon suivante. Ainsi e⁰ = 1 et e¹ = e." },
            },
            {
              heading: "Dériver avec l'exponentielle",
              paragraphs: [
                "Toutes les règles de dérivation s'appliquent. Si f(x) = 3eˣ + x², alors f'(x) = 3eˣ + 2x. Si f(x) = x eˣ, la formule (uv)' = u'v + uv' donne f'(x) = 1 × eˣ + x × eˣ = (x + 1)eˣ. Si f(x) = eˣ/x sur ]0 ; +∞[, alors f'(x) = (x eˣ - eˣ)/x² = (x - 1)eˣ/x².",
                "Pour une composée affine, la règle de dérivation de x ↦ g(ax + b) donne : la dérivée de x ↦ exp(ax + b) est x ↦ a exp(ax + b). Par exemple, la dérivée de x ↦ e⁻ˣ est x ↦ -e⁻ˣ, et celle de x ↦ exp(3x - 1) est x ↦ 3 exp(3x - 1). Lorsque l'exposant est long, on préfère souvent écrire exp(...) plutôt qu'une puissance de e.",
              ],
              box: { label: "Formule", text: "exp' = exp. Pour tous réels a et b, la dérivée de x ↦ exp(ax + b) est x ↦ a × exp(ax + b)." },
            },
          ],
          keyPoints: [
            "exp est l'unique fonction dérivable sur R telle que exp' = exp et exp(0) = 1.",
            "Pour tout réel x : exp(x) × exp(-x) = 1, donc exp(x) ≠ 0 et exp(-x) = 1/exp(x).",
            "e = exp(1) ≈ 2,718 ; on note exp(x) = eˣ.",
            "Dérivée de x ↦ exp(ax + b) : x ↦ a × exp(ax + b).",
            "Méthode d'Euler : exp(x + h) ≈ (1 + h) exp(x) pour h petit.",
          ],
          example: {
            statement: "Soit f la fonction définie sur R par f(x) = (2x - 3)eˣ. Calculer f'(x), puis déterminer une équation de la tangente à la courbe de f au point d'abscisse 0.",
            solution: [
              "f est le produit de u(x) = 2x - 3 et v(x) = eˣ, avec u'(x) = 2 et v'(x) = eˣ.",
              "f'(x) = 2eˣ + (2x - 3)eˣ = (2 + 2x - 3)eˣ = (2x - 1)eˣ.",
              "f(0) = (0 - 3) × e⁰ = -3 et f'(0) = (0 - 1) × e⁰ = -1.",
              "La tangente a pour équation y = f'(0)(x - 0) + f(0), soit y = -x - 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la fonction dérivée de chacune des fonctions suivantes. a) f(x) = 2eˣ + x³ sur R. b) g(x) = x eˣ sur R. c) h(x) = eˣ/x sur ]0 ; +∞[. d) k(x) = exp(5x + 2) sur R.",
              hint: "Utilisez exp' = exp, puis les formules (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v² et la dérivée de exp(ax + b).",
              solution: [
                "a) f'(x) = 2eˣ + 3x².",
                "b) g'(x) = 1 × eˣ + x × eˣ = (x + 1)eˣ.",
                "c) h'(x) = (eˣ × x - eˣ × 1)/x² = (x - 1)eˣ/x².",
                "d) k'(x) = 5 exp(5x + 2).",
              ],
            },
            {
              level: 2,
              statement: "On applique la méthode d'Euler à la fonction exponentielle sur [0 ; 1] avec le pas h = 0,25 : y₀ = 1 et, pour tout entier naturel n, yₙ₊₁ = (1 + h) yₙ. 1) Calculer y₁, y₂, y₃ et y₄. 2) Quelle valeur approchée de e obtient-on ? La comparer avec e ≈ 2,718. 3) Exprimer yₙ en fonction de n et préciser la nature de la suite. 4) Avec le pas h = 0,1, quelle valeur approchée de e obtient-on ?",
              hint: "Chaque étape multiplie par 1,25. Après quatre pas de 0,25, on est arrivé à x = 1.",
              solution: [
                "1) y₁ = 1,25 ; y₂ = 1,25² = 1,5625 ; y₃ = 1,25³ = 1,953125 ; y₄ = 1,25⁴ = 2,44140625.",
                "2) y₄ approche exp(1) = e : on obtient e ≈ 2,441, soit un écart d'environ 0,277 avec 2,718. Le pas est trop grand pour une bonne précision.",
                "3) La suite (yₙ) est géométrique de raison 1,25 et de premier terme 1 : yₙ = 1,25ⁿ.",
                "4) Avec h = 0,1, il faut dix pas : e ≈ 1,1¹⁰ ≈ 2,594, approximation meilleure (écart d'environ 0,124).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On cherche les fonctions f dérivables sur R telles que f' = 2f et f(0) = 3. Soit f une telle fonction, et g la fonction définie sur R par g(x) = f(x) × exp(-2x). 1) Calculer la dérivée de la fonction x ↦ exp(-2x). 2) Montrer que g'(x) = 0 pour tout réel x. 3) En déduire que pour tout réel x, f(x) = 3 exp(2x). 4) Vérifier réciproquement que la fonction x ↦ 3 exp(2x) convient.",
              hint: "Dérivez g comme un produit, remplacez f'(x) par 2f(x), puis utilisez exp(2x) × exp(-2x) = 1, qui vient de exp(X) × exp(-X) = 1 avec X = 2x.",
              solution: [
                "1) C'est exp(ax + b) avec a = -2 et b = 0 : sa dérivée est x ↦ -2 exp(-2x).",
                "2) g'(x) = f'(x) exp(-2x) + f(x) × (-2 exp(-2x)) = 2f(x) exp(-2x) - 2f(x) exp(-2x) = 0.",
                "3) g est donc constante sur R : g(x) = g(0) = f(0) × exp(0) = 3. Ainsi f(x) exp(-2x) = 3 pour tout réel x.",
                "En multipliant par exp(2x) et en utilisant exp(2x) × exp(-2x) = 1, on obtient f(x) = 3 exp(2x).",
                "4) Si f(x) = 3 exp(2x), alors f'(x) = 3 × 2 exp(2x) = 2f(x), et f(0) = 3 × 1 = 3 : la fonction convient.",
                "Conclusion : la seule fonction solution est x ↦ 3 exp(2x).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez votre compréhension de la définition de exp.",
            statements: [
              { text: "La fonction exponentielle est la seule fonction dérivable sur R égale à sa dérivée.", true: false, why: "La fonction 2exp, ou la fonction nulle, vérifient aussi f' = f : l'unicité exige en plus f(0) = 1." },
              { text: "exp(0) = 1.", true: true, why: "C'est la condition initiale de la définition." },
              { text: "La dérivée de eˣ est x eˣ⁻¹.", true: false, why: "Ce n'est pas une puissance de x : la dérivée de eˣ est eˣ." },
              { text: "Pour tout réel x, exp(x) × exp(-x) = 1.", true: true, why: "La fonction φ(x) = exp(x)exp(-x) a une dérivée nulle et vaut 1 en 0." },
              { text: "exp(x) peut s'annuler pour une valeur de x très négative.", true: false, why: "exp(x) × exp(-x) = 1 empêche exp(x) d'être nul." },
              { text: "e = exp(1) vaut environ 2,718.", true: true, why: "e ≈ 2,71828 est un nombre irrationnel." },
              { text: "La dérivée de x ↦ e³ˣ est x ↦ e³ˣ.", true: false, why: "Pour exp(ax + b), on multiplie par a : la dérivée est x ↦ 3e³ˣ." },
            ],
          },
          quiz: [
            { q: "Quelle est la dérivée de f(x) = 5eˣ ?", options: ["eˣ", "5eˣ", "5x eˣ", "5"], answer: 1, why: "La dérivée de k × exp est k × exp' = k × exp." },
            { q: "exp(0) vaut :", options: ["0", "e", "1", "on ne peut pas le savoir"], answer: 2, why: "La définition impose exp(0) = 1." },
            { q: "La dérivée de f(x) = x eˣ est :", options: ["(x + 1)eˣ", "eˣ", "x eˣ", "(x - 1)eˣ"], answer: 0, why: "(uv)' = u'v + uv' donne 1 × eˣ + x × eˣ = (x + 1)eˣ." },
            { q: "Pour tout réel x, exp(-x) est égal à :", options: ["-exp(x)", "exp(x) - 1", "exp(1/x)", "1/exp(x)"], answer: 3, why: "exp(x) × exp(-x) = 1, donc exp(-x) = 1/exp(x)." },
            { q: "La méthode d'Euler de pas h approche exp grâce à la relation :", options: ["exp(x + h) ≈ exp(x) + h", "exp(x + h) ≈ h exp(x)", "exp(x + h) ≈ (1 + h) exp(x)", "exp(x + h) ≈ exp(x) + exp(h) + 1"], answer: 2, why: "L'approximation affine donne exp(x + h) ≈ exp(x) + h exp'(x) = (1 + h) exp(x)." },
          ],
          trap: "Dériver eˣ comme une puissance, en écrivant x eˣ⁻¹ : la variable x est en exposant, et la dérivée de eˣ est eˣ elle-même. Autre oubli fréquent : le facteur a en dérivant exp(ax + b).",
          method: "Après chaque dérivée contenant une exponentielle, factorisez par cette exponentielle, par exemple f'(x) = (2x - 1)eˣ : cette forme sera indispensable pour étudier le signe, puisque l'exponentielle ne s'annule jamais.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'proprietes-exponentielle',
          title: 'Propriétés algébriques et calculs avec l’exponentielle',
          minutes: 30,
          objectives: [
            "Transformer une expression grâce aux propriétés algébriques de la fonction exponentielle.",
            "Résoudre une équation ou une inéquation faisant intervenir la fonction exponentielle.",
            "Reconnaître la suite (exp(na)) comme une suite géométrique.",
          ],
          course: [
            {
              heading: "La relation fonctionnelle",
              paragraphs: [
                "Propriété fondamentale : pour tous réels a et b, exp(a + b) = exp(a) × exp(b). L'exponentielle transforme une somme en produit. Démonstration : fixons b et posons h(x) = exp(x + b) × exp(-x). Alors h'(x) = exp(x + b) × exp(-x) - exp(x + b) × exp(-x) = 0, donc h est constante, égale à h(0) = exp(b). Ainsi exp(x + b) × exp(-x) = exp(b), et en multipliant par exp(x), puisque exp(-x) × exp(x) = 1, on obtient exp(x + b) = exp(x) × exp(b).",
                "On en déduit les autres règles. exp(a - b) = exp(a + (-b)) = exp(a) × exp(-b) = exp(a)/exp(b). Pour un entier naturel n, en appliquant la relation n fois, exp(na) = (exp(a))ⁿ ; avec exp(-a) = 1/exp(a), cette formule reste vraie pour n entier négatif.",
              ],
              box: { label: "Propriété", text: "Pour tous réels a et b et tout entier relatif n : exp(a + b) = exp(a) × exp(b) ; exp(-a) = 1/exp(a) ; exp(a - b) = exp(a)/exp(b) ; exp(na) = (exp(a))ⁿ." },
            },
            {
              heading: "La notation eˣ et les règles de calcul",
              paragraphs: [
                "En particulier, exp(n) = exp(n × 1) = (exp(1))ⁿ = eⁿ pour tout entier n : l'exponentielle prolonge les puissances entières du nombre e. C'est pourquoi on note exp(x) = eˣ pour tout réel x. Les règles de calcul sont alors celles des puissances que vous connaissez : eᵃ × eᵇ = eᵃ⁺ᵇ, eᵃ/eᵇ = eᵃ⁻ᵇ, (eᵃ)ⁿ = eⁿᵃ et e⁻ᵃ = 1/eᵃ.",
                "Exemples : e³ × e⁻⁵ = e⁻² ; (e²)⁴ / e⁶ = e⁸⁻⁶ = e² ; pour tout réel x, eˣ⁺¹ × e¹⁻ˣ = e². Attention : il n'existe aucune règle pour une somme. eᵃ + eᵇ n'est pas égal à eᵃ⁺ᵇ : par exemple e⁰ + e⁰ = 2, alors que e⁰⁺⁰ = 1.",
              ],
            },
            {
              heading: "Signe de l'exponentielle et suites géométriques",
              paragraphs: [
                "Pour tout réel x, exp(x) = exp(x/2 + x/2) = (exp(x/2))², qui est positif ou nul ; comme exp(x) ≠ 0, on obtient exp(x) > 0. L'exponentielle est strictement positive sur R. Puisque exp' = exp, sa dérivée est strictement positive : exp est strictement croissante sur R.",
                "Pour tout réel a, la suite définie par uₙ = exp(na) = (eᵃ)ⁿ est géométrique de raison eᵃ, puisque uₙ₊₁ = exp(na + a) = eᵃ × uₙ. Par exemple, la suite uₙ = exp(0,1n) est géométrique de raison exp(0,1) ≈ 1,105. C'est le lien entre un modèle continu (une fonction exponentielle) et un modèle discret (une suite géométrique).",
              ],
              box: { label: "À retenir", text: "Pour tout réel x, eˣ > 0. Pour tout réel a, la suite (exp(na)) est géométrique de raison eᵃ et de premier terme 1." },
            },
            {
              heading: "Résoudre des équations et des inéquations",
              paragraphs: [
                "Comme exp est strictement croissante sur R, elle conserve l'ordre et ne prend jamais deux fois la même valeur. Pour résoudre une équation ou une inéquation, on écrit chaque membre sous la forme d'une seule exponentielle, puis on compare les exposants. Par exemple, e²ˣ⁻¹ = e³ équivaut à 2x - 1 = 3, soit x = 2 ; et eˣ < e⁻²ˣ équivaut à x < -2x, soit x < 0.",
                "Une équation comme eˣ = -2 n'a pas de solution, puisque eˣ > 0. Et comme 1 = e⁰, l'équation eˣ = 1 équivaut à x = 0, et l'inéquation eˣ > 1 équivaut à x > 0.",
              ],
              box: { label: "Propriété", text: "Pour tous réels a et b : eᵃ = eᵇ équivaut à a = b ; eᵃ < eᵇ équivaut à a < b ; eᵃ ≤ eᵇ équivaut à a ≤ b." },
            },
          ],
          keyPoints: [
            "exp(a + b) = exp(a) × exp(b) : l'exponentielle transforme une somme en produit.",
            "eᵃ × eᵇ = eᵃ⁺ᵇ ; eᵃ/eᵇ = eᵃ⁻ᵇ ; (eᵃ)ⁿ = eⁿᵃ ; e⁻ᵃ = 1/eᵃ.",
            "Aucune règle pour une somme : eᵃ + eᵇ est en général différent de eᵃ⁺ᵇ.",
            "eˣ > 0 pour tout réel x : une équation eˣ = k avec k ≤ 0 n'a pas de solution.",
            "eᵃ = eᵇ équivaut à a = b ; eᵃ < eᵇ équivaut à a < b.",
            "La suite (exp(na)) est géométrique de raison eᵃ.",
          ],
          example: {
            statement: "Résoudre dans R : 1) exp(x²) = exp(3x - 2) ; 2) e²ˣ⁺¹ > e.",
            solution: [
              "1) Les deux membres sont des exponentielles : exp(x²) = exp(3x - 2) équivaut à x² = 3x - 2, soit x² - 3x + 2 = 0.",
              "Ce trinôme a pour discriminant Δ = 9 - 8 = 1 et pour racines (3 - 1)/2 = 1 et (3 + 1)/2 = 2.",
              "L'ensemble des solutions est {1 ; 2}.",
              "2) Comme e = e¹, l'inéquation e²ˣ⁺¹ > e¹ équivaut à 2x + 1 > 1, soit x > 0.",
              "L'ensemble des solutions est ]0 ; +∞[.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Simplifier les expressions suivantes : A = e³ × e⁻⁵ ; B = (e²)⁴ / e⁶ ; C = eˣ⁺¹ × e¹⁻ˣ (pour x réel) ; D = (eˣ)² × e⁻²ˣ (pour x réel).",
              hint: "Regroupez tout en une seule exponentielle : on additionne les exposants pour un produit, on les soustrait pour un quotient, on les multiplie pour une puissance.",
              solution: [
                "A = e³⁻⁵ = e⁻², soit 1/e².",
                "B = e⁸ / e⁶ = e⁸⁻⁶ = e².",
                "C = exp((x + 1) + (1 - x)) = exp(2) = e².",
                "D = e²ˣ × e⁻²ˣ = e⁰ = 1.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre dans R : a) e³ˣ⁻² = 1 ; b) e²ˣ = eˣ⁺⁴ ; c) exp(2x - 1) ≤ exp(x + 3) ; d) eˣ = -2 ; e) e⁻ˣ > e².",
              hint: "Écrivez 1 = e⁰, puis comparez les exposants. Pour une inéquation, l'ordre est conservé car exp est strictement croissante.",
              solution: [
                "a) e³ˣ⁻² = e⁰ équivaut à 3x - 2 = 0, soit x = 2/3. S = {2/3}.",
                "b) e²ˣ = eˣ⁺⁴ équivaut à 2x = x + 4, soit x = 4. S = {4}.",
                "c) L'inéquation équivaut à 2x - 1 ≤ x + 3, soit x ≤ 4. S = ]-∞ ; 4].",
                "d) Pour tout réel x, eˣ > 0 > -2 : l'équation n'a pas de solution, S = ∅.",
                "e) e⁻ˣ > e² équivaut à -x > 2, soit x < -2. S = ]-∞ ; -2[.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. 1) Soit (uₙ) la suite définie pour tout entier naturel n par uₙ = exp(1 - 2n). Montrer que (uₙ) est géométrique ; préciser sa raison, son premier terme et son sens de variation. 2) a) Vérifier que pour tout réel X, X² - (e + 1)X + e = (X - 1)(X - e). b) En déduire les solutions dans R de l'équation e²ˣ - (e + 1)eˣ + e = 0.",
              hint: "Pour 1), calculez uₙ₊₁/uₙ et écrivez-le comme une seule exponentielle. Pour 2b), posez X = eˣ et remarquez que e²ˣ = (eˣ)².",
              solution: [
                "1) Pour tout n, uₙ > 0 et uₙ₊₁/uₙ = exp(1 - 2(n + 1)) / exp(1 - 2n) = exp(1 - 2n - 2 - 1 + 2n) = exp(-2) = e⁻².",
                "(uₙ) est donc géométrique de raison q = e⁻² et de premier terme u₀ = exp(1) = e. Comme u₀ > 0 et 0 < q < 1 (car e² > 1), la suite est strictement décroissante.",
                "2a) (X - 1)(X - e) = X² - eX - X + e = X² - (e + 1)X + e.",
                "2b) En posant X = eˣ, on a e²ˣ = X², et l'équation devient X² - (e + 1)X + e = 0, soit (X - 1)(X - e) = 0, donc X = 1 ou X = e.",
                "eˣ = 1 = e⁰ donne x = 0 ; eˣ = e = e¹ donne x = 1.",
                "L'ensemble des solutions est {0 ; 1}.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression à sa forme simplifiée.",
            pairs: [
              { left: "exp(a) × exp(b)", right: "exp(a + b)" },
              { left: "exp(a) / exp(b)", right: "exp(a - b)" },
              { left: "(exp(a))ⁿ", right: "exp(na)" },
              { left: "exp(-a)", right: "1 / exp(a)" },
              { left: "exp(0)", right: "1" },
              { left: "exp(1)", right: "e, environ 2,718" },
            ],
          },
          quiz: [
            { q: "e⁵ × e⁻² vaut :", options: ["e⁻¹⁰", "e³", "e⁷", "e⁻³"], answer: 1, why: "On additionne les exposants : 5 + (-2) = 3." },
            { q: "(e³)² vaut :", options: ["e⁹", "e⁵", "e⁶"], answer: 2, why: "Pour une puissance de puissance, on multiplie les exposants : 3 × 2 = 6." },
            { q: "L'équation eˣ = 0 :", options: ["n'a pas de solution", "a pour solution 0", "a pour solution 1", "a pour solution -1"], answer: 0, why: "Pour tout réel x, eˣ > 0 : la valeur 0 n'est jamais atteinte." },
            { q: "L'inéquation e²ˣ⁺¹ > e⁵ équivaut à :", options: ["x > 5", "x > 2", "x < 2", "x > 3"], answer: 1, why: "exp est strictement croissante : 2x + 1 > 5, soit x > 2." },
            { q: "La suite définie par uₙ = exp(0,3n) est :", options: ["arithmétique de raison 0,3", "géométrique de raison 0,3", "arithmétique de raison exp(0,3)", "géométrique de raison exp(0,3)"], answer: 3, why: "uₙ₊₁ = exp(0,3n + 0,3) = exp(0,3) × uₙ : on multiplie à chaque rang par exp(0,3)." },
          ],
          trap: "Écrire eᵃ + eᵇ = eᵃ⁺ᵇ : seul le produit se transforme en somme d'exposants. Autre erreur : oublier que eˣ > 0 et chercher une solution à une équation comme eˣ = -2.",
          method: "Pour résoudre, ramenez chaque membre à une seule exponentielle (en écrivant au besoin 1 = e⁰ et e = e¹), comparez les exposants, puis vérifiez une solution en la remplaçant dans l'équation de départ.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etude-exponentielle',
          title: 'Variations, courbe et fonctions t ↦ exp(kt)',
          minutes: 35,
          objectives: [
            "Connaître le signe, le sens de variation et la courbe représentative de la fonction exponentielle.",
            "Étudier les variations d'une fonction comportant une exponentielle.",
            "Modéliser une croissance ou une décroissance exponentielle par une fonction t ↦ exp(kt).",
          ],
          course: [
            {
              heading: "Sens de variation et courbe de exp",
              paragraphs: [
                "La fonction exponentielle est strictement positive et égale à sa dérivée : exp'(x) = exp(x) > 0. Elle est donc strictement croissante sur R. Sa courbe passe par les points (0 ; 1) et (1 ; e) et se situe entièrement au-dessus de l'axe des abscisses. Quand x devient très négatif, eˣ devient très proche de 0 (par exemple e⁻¹⁰ ≈ 0,000045) ; quand x devient grand, eˣ augmente extrêmement vite (e¹⁰ ≈ 22 026).",
                "Quelques valeurs utiles : e⁻¹ ≈ 0,368, e ≈ 2,718 et e² ≈ 7,389. Comme exp est croissante et e⁰ = 1, on a 0 < eˣ < 1 pour x < 0 et eˣ > 1 pour x > 0.",
              ],
              box: { label: "Propriété", text: "exp est strictement positive et strictement croissante sur R. Sa courbe passe par (0 ; 1) et (1 ; e). Pour x < 0, 0 < eˣ < 1 ; pour x > 0, eˣ > 1." },
            },
            {
              heading: "Tangente en 0 et position de la courbe",
              paragraphs: [
                "La tangente à la courbe de exp au point d'abscisse 0 a pour équation y = exp'(0)(x - 0) + exp(0), soit y = x + 1. On démontre que la courbe est toujours au-dessus de cette tangente. Posons d(x) = eˣ - x - 1. Alors d'(x) = eˣ - 1, négatif pour x < 0 et positif pour x > 0. La fonction d est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[ ; son minimum est d(0) = 1 - 0 - 1 = 0. Donc d(x) ≥ 0 pour tout réel x.",
              ],
              box: { label: "Propriété", text: "Pour tout réel x, eˣ ≥ x + 1, avec égalité seulement pour x = 0. La courbe de exp est au-dessus de sa tangente au point d'abscisse 0." },
            },
            {
              heading: "Les fonctions t ↦ exp(kt)",
              paragraphs: [
                "Soit k un réel. La fonction f définie sur R par f(t) = exp(kt) est dérivable, de dérivée f'(t) = k exp(kt). Comme exp(kt) > 0, f'(t) est du signe de k. Si k > 0, f est strictement croissante : elle modélise une croissance exponentielle. Si k < 0, f est strictement décroissante : elle modélise une décroissance exponentielle. Si k = 0, f est constante, égale à 1.",
                "Plus |k| est grand, plus la variation est rapide. Ces fonctions modélisent des phénomènes continus : une population qui croît d'un même pourcentage par unité de temps, la quantité de noyaux radioactifs d'un échantillon, l'écart de température entre un objet qui refroidit et la pièce, la concentration d'un médicament éliminé par l'organisme. On utilise souvent la forme f(t) = A exp(kt), avec A = f(0).",
              ],
              box: { label: "Formule", text: "Pour tout réel k, la dérivée de t ↦ exp(kt) est t ↦ k exp(kt). Si k > 0, la fonction est strictement croissante ; si k < 0, elle est strictement décroissante." },
            },
            {
              heading: "Du continu au discret",
              paragraphs: [
                "Si f(t) = A exp(kt), les valeurs aux instants entiers forment une suite géométrique : uₙ = f(n) = A exp(kn) = A × (eᵏ)ⁿ, de raison eᵏ. Par exemple, si une quantité suit le modèle f(t) = 500 exp(-0,2t), avec t en heures, elle est multipliée par exp(-0,2) ≈ 0,819 chaque heure : elle perd environ 18 % de sa valeur toutes les heures. Le modèle continu (la fonction) et le modèle discret (la suite) décrivent le même phénomène.",
              ],
              box: { label: "À retenir", text: "Pour étudier le signe d'une expression u(x) × eˣ ou u(t) × exp(kt), il suffit d'étudier le signe de u, puisque l'exponentielle est strictement positive." },
            },
          ],
          keyPoints: [
            "exp'(x) = exp(x) > 0 : exp est strictement croissante sur R.",
            "Courbe de exp : elle passe par (0 ; 1) et (1 ; e) et reste au-dessus de l'axe des abscisses.",
            "Tangente en 0 : y = x + 1 ; pour tout réel x, eˣ ≥ x + 1.",
            "La dérivée de exp(kt) est k exp(kt) : fonction croissante si k > 0, décroissante si k < 0.",
            "Le signe de u(x) × eˣ est celui de u(x).",
            "Aux instants entiers, A exp(kt) donne une suite géométrique de raison eᵏ.",
          ],
          example: {
            statement: "Étudier les variations de la fonction f définie sur R par f(x) = (x - 1)eˣ et donner son minimum.",
            solution: [
              "f = uv avec u(x) = x - 1, u'(x) = 1, v(x) = eˣ et v'(x) = eˣ.",
              "f'(x) = eˣ + (x - 1)eˣ = x eˣ.",
              "Comme eˣ > 0, f'(x) est du signe de x : négatif sur ]-∞ ; 0[, positif sur ]0 ; +∞[.",
              "f est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[.",
              "Son minimum est f(0) = (0 - 1) × e⁰ = -1, atteint en x = 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Étudier le sens de variation sur [0 ; +∞[ des fonctions f et g définies par f(t) = 5 exp(-0,2t) et g(t) = 2 exp(0,5t). Calculer f(0) et g(0).",
              hint: "Utilisez la dérivée de exp(kt), qui est k exp(kt), et le fait qu'une exponentielle est strictement positive.",
              solution: [
                "f'(t) = 5 × (-0,2) exp(-0,2t) = -exp(-0,2t) < 0 : f est strictement décroissante sur [0 ; +∞[.",
                "g'(t) = 2 × 0,5 exp(0,5t) = exp(0,5t) > 0 : g est strictement croissante sur [0 ; +∞[.",
                "f(0) = 5 × e⁰ = 5 et g(0) = 2 × e⁰ = 2.",
                "Résultat : f décroît à partir de 5, g croît à partir de 2.",
              ],
            },
            {
              level: 2,
              statement: "Soit f la fonction définie sur R par f(x) = x e⁻ˣ. 1) Montrer que f'(x) = (1 - x)e⁻ˣ. 2) Dresser le tableau de variations de f. 3) En déduire que pour tout réel x, x e⁻ˣ ≤ 1/e.",
              hint: "La dérivée de x ↦ e⁻ˣ est x ↦ -e⁻ˣ. Le facteur e⁻ˣ est strictement positif, il ne change pas le signe.",
              solution: [
                "1) f = uv avec u(x) = x et v(x) = e⁻ˣ : f'(x) = 1 × e⁻ˣ + x × (-e⁻ˣ) = (1 - x)e⁻ˣ.",
                "2) e⁻ˣ > 0, donc f'(x) est du signe de 1 - x : positif sur ]-∞ ; 1[, négatif sur ]1 ; +∞[. f est croissante sur ]-∞ ; 1] et décroissante sur [1 ; +∞[.",
                "f(1) = 1 × e⁻¹ = 1/e ≈ 0,368.",
                "3) Le maximum de f sur R est 1/e, atteint en x = 1 : pour tout réel x, x e⁻ˣ ≤ 1/e.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Après la prise d'un médicament, on modélise sa concentration dans le sang, en mg/L, par C(t) = 4t exp(-0,5t), où t est le temps en heures, avec t ∈ [0 ; 10]. 1) Montrer que C'(t) = (4 - 2t) exp(-0,5t). 2) Dresser le tableau de variations de C sur [0 ; 10]. 3) À quel instant la concentration est-elle maximale ? Donner cette concentration maximale, en valeur exacte puis arrondie à 0,01. 4) On admet que le médicament n'est plus actif lorsque sa concentration est inférieure à 0,5 mg/L. Est-ce le cas au bout de 10 heures ?",
              hint: "Dérivez un produit : (4t)' = 4 et la dérivée de exp(-0,5t) est -0,5 exp(-0,5t). Factorisez ensuite par exp(-0,5t), strictement positif.",
              solution: [
                "1) C'(t) = 4 exp(-0,5t) + 4t × (-0,5) exp(-0,5t) = (4 - 2t) exp(-0,5t).",
                "2) exp(-0,5t) > 0, donc C'(t) est du signe de 4 - 2t : positif sur [0 ; 2[, négatif sur ]2 ; 10]. C est croissante sur [0 ; 2] et décroissante sur [2 ; 10].",
                "Valeurs : C(0) = 0 ; C(2) = 8 exp(-1) = 8/e ; C(10) = 40 exp(-5).",
                "3) La concentration est maximale au bout de 2 heures ; elle vaut alors 8/e ≈ 2,94 mg/L.",
                "4) C(10) = 40 e⁻⁵ ≈ 0,27 mg/L, qui est inférieur à 0,5 mg/L : au bout de 10 heures, le médicament n'est plus actif.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude de f(x) = (x - 1)eˣ.",
            items: [
              "Reconnaître un produit u × v avec u(x) = x - 1 et v(x) = eˣ.",
              "Calculer f'(x) = eˣ + (x - 1)eˣ.",
              "Factoriser : f'(x) = x eˣ.",
              "Utiliser eˣ > 0 : f'(x) est du signe de x.",
              "Dresser le tableau : f décroissante sur ]-∞ ; 0], croissante sur [0 ; +∞[.",
              "Calculer le minimum f(0) = -1.",
            ],
          },
          quiz: [
            { q: "La fonction t ↦ exp(-3t) est :", options: ["strictement croissante sur R", "strictement décroissante sur R", "croissante puis décroissante", "constante sur R"], answer: 1, why: "Sa dérivée -3 exp(-3t) est strictement négative." },
            { q: "La dérivée de f(t) = 2 exp(4t) est :", options: ["8 exp(4t)", "2 exp(4t)", "8t exp(4t)", "exp(8t)"], answer: 0, why: "On multiplie par k = 4 : 2 × 4 exp(4t) = 8 exp(4t)." },
            { q: "Une équation de la tangente à la courbe de exp au point d'abscisse 0 est :", options: ["y = x", "y = ex", "y = x + 1", "y = 1"], answer: 2, why: "exp(0) = 1 et exp'(0) = 1, donc y = 1 × (x - 0) + 1 = x + 1." },
            { q: "Le signe de (x - 2)eˣ est :", options: ["toujours positif", "celui de eˣ - 2", "toujours négatif", "celui de x - 2"], answer: 3, why: "eˣ > 0 ne change pas le signe : seul le facteur x - 2 compte." },
            { q: "Pour tout réel x, eˣ ≥ x + 1. Pour x = 1, on obtient :", options: ["e ≥ 2", "e ≥ 1", "e ≤ 2"], answer: 0, why: "En remplaçant x par 1 : e¹ ≥ 1 + 1, soit e ≥ 2 (et en effet e ≈ 2,718)." },
          ],
          trap: "Oublier le facteur k en dérivant exp(kt) (la dérivée de exp(-0,5t) est -0,5 exp(-0,5t)), ou étudier inutilement le signe de l'exponentielle, alors qu'elle est toujours strictement positive.",
          method: "Dans une dérivée de la forme u(x) × exp(...), écrivez explicitement « exp(...) > 0, donc f'(x) est du signe de u(x) » : cette phrase est attendue dans la rédaction et simplifie toute l'étude.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA TRIGONOMÉTRIE                                                       */
    /* ==================================================================== */
    {
      id: 'trigonometrie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cercle-trigonometrique',
          title: 'Le cercle trigonométrique et le radian',
          minutes: 25,
          objectives: [
            "Placer sur le cercle trigonométrique le point image d'un réel.",
            "Convertir une mesure d'angle de degrés en radians et inversement.",
            "Déterminer le réel de ]-π ; π] qui a le même point image qu'un réel donné.",
          ],
          course: [
            {
              heading: "Le cercle trigonométrique",
              paragraphs: [
                "Dans un repère orthonormé (O ; I, J), le cercle trigonométrique est le cercle de centre O et de rayon 1, sur lequel on choisit un sens de parcours : le sens direct (on dit aussi sens positif ou sens trigonométrique) est le sens inverse des aiguilles d'une montre. Le point I(1 ; 0) sert d'origine. Comme le rayon vaut 1, la longueur du cercle vaut 2π, celle d'un demi-cercle π, et celle d'un quart de cercle π/2.",
              ],
              box: { label: "Définition", text: "Le cercle trigonométrique est le cercle de centre O, de rayon 1, orienté dans le sens direct, c'est-à-dire le sens inverse des aiguilles d'une montre." },
            },
            {
              heading: "Le radian",
              paragraphs: [
                "Sur le cercle trigonométrique, on mesure un angle par la longueur de l'arc qu'il intercepte : un angle de 1 radian (noté 1 rad) intercepte un arc de longueur 1. Le tour complet, d'un arc de longueur 2π, mesure 2π rad et correspond à 360°. Les mesures en radians et en degrés sont proportionnelles : π rad = 180°, donc 1 rad = 180/π degrés, soit environ 57,3°.",
                "Correspondances à connaître : 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 120° = 2π/3, 135° = 3π/4, 150° = 5π/6, 180° = π, 360° = 2π. Sur un cercle de rayon R, un angle de θ radians intercepte un arc de longueur R × θ : c'est l'intérêt du radian, qui relie directement l'angle et la longueur parcourue.",
              ],
              box: { label: "Formule", text: "Mesure en radians = mesure en degrés × π/180. Mesure en degrés = mesure en radians × 180/π. Longueur d'un arc de cercle de rayon R et d'angle θ en radians : L = Rθ." },
            },
            {
              heading: "Enrouler la droite des réels",
              paragraphs: [
                "Imaginez une droite graduée, tangente au cercle en I, dont l'origine est placée en I et qui est orientée vers le haut. En l'enroulant autour du cercle comme un fil, chaque réel x vient se placer sur un point M du cercle : on dit que M est le point image de x. Les réels positifs s'enroulent dans le sens direct, les réels négatifs dans le sens indirect. Ainsi π/2 a pour image J(0 ; 1), π a pour image le point I'(-1 ; 0) et -π/2 le point J'(0 ; -1).",
                "Un tour complet mesure 2π : les réels x, x + 2π, x - 2π, x + 4π, ... ont tous la même image. Plus généralement, x et x + 2kπ, avec k entier relatif, sont associés au même point. Parmi tous ces réels, un seul appartient à l'intervalle ]-π ; π] : c'est souvent lui que l'on cherche pour placer le point. Exemple : 17π/3 = 18π/3 - π/3 = 6π - π/3, donc 17π/3 et -π/3 ont la même image.",
              ],
              box: { label: "Propriété", text: "Pour tout réel x et tout entier relatif k, les réels x et x + 2kπ ont le même point image sur le cercle trigonométrique." },
            },
          ],
          keyPoints: [
            "Cercle trigonométrique : centre O, rayon 1, sens direct = sens inverse des aiguilles d'une montre.",
            "Un tour complet : 2π rad = 360° ; π rad = 180°.",
            "Conversion : degrés × π/180 donne des radians ; radians × 180/π donne des degrés.",
            "Longueur d'un arc : L = Rθ, avec θ en radians.",
            "x et x + 2kπ (k entier relatif) ont le même point image sur le cercle.",
            "Pour placer un réel, chercher le réel associé dans ]-π ; π] en ajoutant ou en retranchant des multiples de 2π.",
          ],
          example: {
            statement: "1) Convertir 150° en radians. 2) Déterminer le réel de ]-π ; π] qui a le même point image que 17π/3, puis indiquer où se trouve ce point sur le cercle.",
            solution: [
              "1) 150 × π/180 = 150π/180 = 5π/6. Donc 150° = 5π/6 rad.",
              "2) On retranche un multiple de 2π = 6π/3 : 17π/3 - 6π = 17π/3 - 18π/3 = -π/3.",
              "-π/3 appartient bien à ]-π ; π], car -π < -π/3 ≤ π.",
              "Le point image s'obtient en partant de I et en tournant de π/3 (60°) dans le sens indirect : il se trouve sous l'axe des abscisses, à droite de l'axe des ordonnées.",
              "Réponse : 150° = 5π/6 rad ; 17π/3 a le même point image que -π/3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Convertir en radians : 120° et 225°. 2) Convertir en degrés : 3π/4 rad et π/12 rad.",
              hint: "Multipliez par π/180 pour passer des degrés aux radians, et par 180/π dans l'autre sens. Simplifiez les fractions.",
              solution: [
                "120 × π/180 = 2π/3 rad (car 120/180 = 2/3).",
                "225 × π/180 = 5π/4 rad (car 225/180 = 5/4).",
                "3π/4 × 180/π = 540/4 = 135°.",
                "π/12 × 180/π = 180/12 = 15°.",
                "Résultat : 120° = 2π/3 rad ; 225° = 5π/4 rad ; 3π/4 rad = 135° ; π/12 rad = 15°.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des réels suivants, déterminer le réel de ]-π ; π] qui a le même point image sur le cercle trigonométrique : 9π/4 ; -7π/6 ; 31π/6 ; 15π.",
              hint: "Ajoutez ou retranchez 2π (c'est-à-dire 8π/4, 12π/6, ...) autant de fois que nécessaire, jusqu'à obtenir un réel de ]-π ; π].",
              solution: [
                "9π/4 - 2π = 9π/4 - 8π/4 = π/4.",
                "-7π/6 + 2π = -7π/6 + 12π/6 = 5π/6.",
                "31π/6 - 6π = 31π/6 - 36π/6 = -5π/6, qui appartient à ]-π ; π].",
                "15π - 14π = π, qui appartient à ]-π ; π] (la borne π est incluse, la borne -π ne l'est pas).",
                "Résultat : π/4 ; 5π/6 ; -5π/6 ; π.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Une roue de rayon 0,3 m tourne autour de son axe ; on suit un point A de sa jante. 1) Quelle distance parcourt A lorsque la roue tourne de π/3 rad ? Donner la valeur exacte, puis une valeur approchée au centimètre. 2) De quel angle, en radians puis en degrés (arrondi au degré), la roue doit-elle tourner pour que A parcoure 1 m ? 3) La roue roule sans glisser sur 10 m. Combien de tours complets effectue-t-elle ?",
              hint: "Utilisez L = Rθ avec θ en radians. Un tour complet correspond à 2π rad, soit une distance de 2π × 0,3 = 0,6π m.",
              solution: [
                "1) L = 0,3 × π/3 = 0,1π m ≈ 0,31 m, soit environ 31 cm.",
                "2) θ = L/R = 1/0,3 = 10/3 rad ≈ 3,33 rad. En degrés : 10/3 × 180/π = 600/π ≈ 191°.",
                "3) Rouler sans glisser sur 10 m signifie qu'un point de la jante parcourt 10 m d'arc. Un tour correspond à 0,6π m ≈ 1,885 m.",
                "Nombre de tours : 10/(0,6π) = 50/(3π) ≈ 5,31.",
                "Conclusion : la roue effectue 5 tours complets, plus environ 0,3 tour.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mesure en degrés à sa mesure en radians.",
            pairs: [
              { left: "30°", right: "π/6" },
              { left: "45°", right: "π/4" },
              { left: "60°", right: "π/3" },
              { left: "90°", right: "π/2" },
              { left: "180°", right: "π" },
              { left: "270°", right: "3π/2" },
            ],
          },
          quiz: [
            { q: "Combien de radians mesure un tour complet ?", options: ["π", "360", "2π", "π/2"], answer: 2, why: "Le cercle trigonométrique a pour rayon 1, donc pour longueur 2π : un tour mesure 2π rad." },
            { q: "Que vaut 135° en radians ?", options: ["3π/4", "2π/3", "5π/6", "3π/2"], answer: 0, why: "135 × π/180 = 3π/4." },
            { q: "Le réel 25π/6 a le même point image que :", options: ["5π/6", "π/6", "-π/6", "π/3"], answer: 1, why: "25π/6 - 4π = 25π/6 - 24π/6 = π/6 : ils diffèrent de deux tours." },
            { q: "Sur le cercle trigonométrique, le sens direct est :", options: ["le sens des aiguilles d'une montre", "le sens inverse des aiguilles d'une montre", "un sens choisi librement à chaque exercice, selon la figure"], answer: 1, why: "Par convention, le sens direct (ou trigonométrique) est le sens inverse des aiguilles d'une montre." },
            { q: "Un angle de 1 radian mesure environ :", options: ["1°", "3,14°", "90°", "57°"], answer: 3, why: "1 rad = 180/π degrés, soit environ 57,3°." },
          ],
          trap: "Croire que deux réels différents ont forcément des points images différents : 17π/3 et -π/3 désignent le même point, car ils diffèrent de 6π, c'est-à-dire de trois tours.",
          method: "Pour placer un réel de la forme aπ/b, écrivez-le comme un multiple de 2π plus un reste dans ]-π ; π] (par exemple 17π/3 = 6π - π/3), puis repérez ce reste par rapport aux valeurs π/6, π/4, π/3 et π/2.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cosinus-sinus',
          title: 'Cosinus et sinus d’un réel, angles associés',
          minutes: 30,
          objectives: [
            "Définir le cosinus et le sinus d'un réel à l'aide du cercle trigonométrique.",
            "Connaître les valeurs remarquables et la relation cos²x + sin²x = 1.",
            "Déterminer, par lecture du cercle trigonométrique, le cosinus et le sinus d'angles associés à un angle donné.",
          ],
          course: [
            {
              heading: "Cosinus et sinus d'un réel",
              paragraphs: [
                "Soit x un réel et M son point image sur le cercle trigonométrique. Le cosinus de x, noté cos x, est l'abscisse de M ; le sinus de x, noté sin x, est son ordonnée. Ainsi M a pour coordonnées (cos x ; sin x). Lorsque x appartient à ]0 ; π/2[, on retrouve le cosinus et le sinus d'un angle aigu vus au collège dans le triangle rectangle (côté adjacent sur hypoténuse, côté opposé sur hypoténuse), avec une hypoténuse OM = 1.",
                "La relation cos²x + sin²x = 1 vient du théorème de Pythagore, puisque OM = 1. Elle permet de calculer l'un des deux nombres connaissant l'autre, le signe étant donné par la position du point M : cos x est positif lorsque M est à droite de l'axe des ordonnées, sin x est positif lorsque M est au-dessus de l'axe des abscisses.",
              ],
              box: { label: "Propriété", text: "Pour tout réel x et tout entier relatif k : -1 ≤ cos x ≤ 1 ; -1 ≤ sin x ≤ 1 ; cos²x + sin²x = 1 ; cos(x + 2kπ) = cos x et sin(x + 2kπ) = sin x." },
            },
            {
              heading: "Valeurs remarquables",
              paragraphs: [
                "Valeurs à connaître : cos 0 = 1 et sin 0 = 0 ; cos(π/6) = √3/2 et sin(π/6) = 1/2 ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = 1/2 et sin(π/3) = √3/2 ; cos(π/2) = 0 et sin(π/2) = 1 ; cos π = -1 et sin π = 0.",
                "Un moyen mnémotechnique : pour 0, π/6, π/4, π/3 et π/2, les sinus valent √0/2, √1/2, √2/2, √3/2 et √4/2, c'est-à-dire 0, 1/2, √2/2, √3/2 et 1 ; les cosinus parcourent la même liste dans l'ordre inverse.",
              ],
            },
            {
              heading: "Angles associés",
              paragraphs: [
                "Les symétries du cercle relient les cosinus et sinus de réels associés à x. La symétrie par rapport à l'axe des abscisses envoie le point image de x sur celui de -x ; la symétrie par rapport à l'axe des ordonnées l'envoie sur celui de π - x ; la symétrie de centre O l'envoie sur celui de π + x ; la symétrie par rapport à la droite d'équation y = x l'envoie sur celui de π/2 - x.",
                "Application : cos(5π/6) = cos(π - π/6) = -cos(π/6) = -√3/2 ; sin(-π/4) = -sin(π/4) = -√2/2 ; cos(4π/3) = cos(π + π/3) = -cos(π/3) = -1/2. Plutôt que d'apprendre les formules par cœur, retrouvez-les en dessinant les deux points symétriques sur le cercle.",
              ],
              box: { label: "Formule", text: "cos(-x) = cos x et sin(-x) = -sin x. cos(π - x) = -cos x et sin(π - x) = sin x. cos(π + x) = -cos x et sin(π + x) = -sin x. cos(π/2 - x) = sin x et sin(π/2 - x) = cos x. cos(π/2 + x) = -sin x et sin(π/2 + x) = cos x." },
            },
            {
              heading: "Lire des équations sur le cercle",
              paragraphs: [
                "Résoudre cos x = 1/2 sur ]-π ; π], c'est chercher les points du cercle d'abscisse 1/2 : la droite verticale formée des points d'abscisse 1/2 coupe le cercle en deux points, images de π/3 et de -π/3. De même, l'équation sin x = 1/2 a pour solutions π/6 et 5π/6 sur ]-π ; π] (points d'ordonnée 1/2). Sur R, il faut ajouter à chaque solution tous les multiples de 2π.",
              ],
            },
          ],
          keyPoints: [
            "M(cos x ; sin x) : cos x est l'abscisse et sin x l'ordonnée du point image de x.",
            "-1 ≤ cos x ≤ 1, -1 ≤ sin x ≤ 1 et cos²x + sin²x = 1.",
            "π/6 : (√3/2 ; 1/2) ; π/4 : (√2/2 ; √2/2) ; π/3 : (1/2 ; √3/2).",
            "cos(-x) = cos x, sin(-x) = -sin x ; cos(π - x) = -cos x, sin(π - x) = sin x.",
            "cos(π + x) = -cos x, sin(π + x) = -sin x ; cos(π/2 - x) = sin x, sin(π/2 - x) = cos x.",
            "Les signes de cos x et de sin x se lisent sur le cercle, selon le quart de cercle où se trouve M.",
          ],
          example: {
            statement: "On sait que x ∈ [π/2 ; π] et que sin x = 3/5. Calculer cos x, puis sin(π - x), cos(-x) et cos(π + x).",
            solution: [
              "cos²x = 1 - sin²x = 1 - 9/25 = 16/25, donc cos x = 4/5 ou cos x = -4/5.",
              "Pour x ∈ [π/2 ; π], le point M est à gauche de l'axe des ordonnées (ou sur cet axe) : cos x ≤ 0. Donc cos x = -4/5.",
              "sin(π - x) = sin x = 3/5.",
              "cos(-x) = cos x = -4/5 et cos(π + x) = -cos x = 4/5.",
              "Réponse : cos x = -4/5 ; sin(π - x) = 3/5 ; cos(-x) = -4/5 ; cos(π + x) = 4/5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer les valeurs exactes de : cos(2π/3) ; sin(5π/4) ; cos(-π/6) ; sin(7π/6).",
              hint: "Écrivez chaque réel à l'aide d'une valeur remarquable : 2π/3 = π - π/3, 5π/4 = π + π/4, 7π/6 = π + π/6.",
              solution: [
                "cos(2π/3) = cos(π - π/3) = -cos(π/3) = -1/2.",
                "sin(5π/4) = sin(π + π/4) = -sin(π/4) = -√2/2.",
                "cos(-π/6) = cos(π/6) = √3/2.",
                "sin(7π/6) = sin(π + π/6) = -sin(π/6) = -1/2.",
                "Résultat : -1/2 ; -√2/2 ; √3/2 ; -1/2.",
              ],
            },
            {
              level: 2,
              statement: "Pour tout réel x, on pose A(x) = cos(π - x) + cos(-x) + sin(π/2 - x) + sin(π + x). 1) Simplifier A(x). 2) Calculer A(π/4) de deux façons pour contrôler le résultat.",
              hint: "Remplacez chaque terme grâce aux formules des angles associés, puis regroupez les termes semblables.",
              solution: [
                "1) cos(π - x) = -cos x ; cos(-x) = cos x ; sin(π/2 - x) = cos x ; sin(π + x) = -sin x.",
                "A(x) = -cos x + cos x + cos x - sin x = cos x - sin x.",
                "2) Avec la forme simplifiée : A(π/4) = √2/2 - √2/2 = 0.",
                "Directement : A(π/4) = cos(3π/4) + cos(-π/4) + sin(π/4) + sin(5π/4) = -√2/2 + √2/2 + √2/2 - √2/2 = 0.",
                "Les deux calculs concordent : A(x) = cos x - sin x.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. 1) Résoudre dans ]-π ; π] l'équation sin x = √3/2. 2) Résoudre dans ]-π ; π] l'équation cos x = -√2/2. 3) On donne un réel a ∈ [-π/2 ; 0] tel que cos a = 1/3. Calculer sin a, puis sin(π + a) et cos(π/2 - a). 4) Résoudre dans ]-π ; π] l'inéquation cos x ≥ 1/2.",
              hint: "Faites une figure : cherchez les points du cercle d'ordonnée √3/2, puis ceux d'abscisse -√2/2. Pour 3), utilisez cos²a + sin²a = 1 et le signe de sin a lorsque a ∈ [-π/2 ; 0].",
              solution: [
                "1) sin(π/3) = √3/2 et sin(π - π/3) = sin(2π/3) = √3/2. Les deux points d'ordonnée √3/2 sont les images de π/3 et de 2π/3 : S = {π/3 ; 2π/3}.",
                "2) cos(3π/4) = -cos(π/4) = -√2/2 et cos(-3π/4) = cos(3π/4) = -√2/2 : S = {-3π/4 ; 3π/4}.",
                "3) sin²a = 1 - 1/9 = 8/9. Pour a ∈ [-π/2 ; 0], le point image est sous l'axe des abscisses (ou sur cet axe), donc sin a ≤ 0 et sin a = -√(8/9) = -2√2/3.",
                "sin(π + a) = -sin a = 2√2/3 et cos(π/2 - a) = sin a = -2√2/3.",
                "4) Les points du cercle d'abscisse supérieure ou égale à 1/2 forment l'arc qui va de l'image de -π/3 à celle de π/3 en passant par I : S = [-π/3 ; π/3].",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Aidez-vous d'un cercle trigonométrique dessiné au brouillon.",
            statements: [
              { text: "Pour tout réel x, cos²x + sin²x = 1.", true: true, why: "C'est le théorème de Pythagore dans le cercle de rayon 1." },
              { text: "Pour tout réel x, sin(-x) = sin x.", true: false, why: "Les points images de x et de -x sont symétriques par rapport à l'axe des abscisses : sin(-x) = -sin x." },
              { text: "Pour tout réel x, cos(π - x) = -cos x.", true: true, why: "Symétrie par rapport à l'axe des ordonnées : l'abscisse change de signe." },
              { text: "cos(π/3) = √3/2.", true: false, why: "cos(π/3) = 1/2 ; c'est sin(π/3) qui vaut √3/2." },
              { text: "Il existe un réel x tel que sin x = 1,2.", true: false, why: "Le sinus est toujours compris entre -1 et 1." },
              { text: "Pour tout réel x, cos(x + 2π) = cos x.", true: true, why: "x et x + 2π ont le même point image sur le cercle." },
              { text: "Pour tout réel x, sin(π/2 - x) = cos x.", true: true, why: "Symétrie par rapport à la droite d'équation y = x : abscisse et ordonnée s'échangent." },
              { text: "cos(5π/6) est positif.", true: false, why: "Le point image de 5π/6 est à gauche de l'axe des ordonnées : cos(5π/6) = -√3/2." },
            ],
          },
          quiz: [
            { q: "sin(π/6) vaut :", options: ["√3/2", "1/2", "√2/2", "1"], answer: 1, why: "Le point image de π/6 a pour coordonnées (√3/2 ; 1/2)." },
            { q: "Pour tout réel x, cos(π + x) est égal à :", options: ["cos x", "-sin x", "-cos x", "sin x"], answer: 2, why: "Les points images de x et de π + x sont symétriques par rapport à O : les deux coordonnées changent de signe." },
            { q: "Si x ∈ [0 ; π] et cos x = -0,6, alors sin x vaut :", options: ["0,8", "-0,8", "0,4", "0,64"], answer: 0, why: "sin²x = 1 - 0,36 = 0,64 et sin x ≥ 0 sur [0 ; π], donc sin x = 0,8." },
            { q: "cos(-π/4) vaut :", options: ["-√2/2", "√2/2", "-1/2", "1/2"], answer: 1, why: "cos(-x) = cos x, donc cos(-π/4) = cos(π/4) = √2/2." },
            { q: "Sur ]-π ; π], les solutions de cos x = 0 sont :", options: ["0 et π", "π/2 seulement", "π seulement", "-π/2 et π/2"], answer: 3, why: "Les points d'abscisse 0 sont J et J', images de π/2 et de -π/2." },
          ],
          trap: "Se tromper de signe en appliquant les formules des angles associés, par exemple écrire sin(-x) = sin x, ou oublier le signe imposé par l'intervalle quand on utilise cos²x + sin²x = 1.",
          method: "Dessinez systématiquement un petit cercle trigonométrique au brouillon : placez le point image, son symétrique, et lisez les signes de l'abscisse et de l'ordonnée avant d'écrire la formule.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-cos-sin',
          title: 'Les fonctions cosinus et sinus : parité, périodicité, courbes',
          minutes: 30,
          objectives: [
            "Traduire graphiquement la parité et la périodicité des fonctions cosinus et sinus.",
            "Lier la représentation graphique des fonctions cosinus et sinus au cercle trigonométrique.",
            "Étudier la parité et la périodicité d'une fonction trigonométrique simple.",
          ],
          course: [
            {
              heading: "Deux fonctions définies sur R",
              paragraphs: [
                "À tout réel x, on associe cos x et sin x : on définit ainsi les fonctions cosinus et sinus sur R. Leurs valeurs sont comprises entre -1 et 1. Leurs courbes représentatives, appelées sinusoïdes, sont des vagues régulières qui oscillent entre les droites d'équations y = -1 et y = 1. Elles servent à modéliser des phénomènes périodiques : marées, courant alternatif, ondes sonores, oscillations d'un pendule.",
              ],
            },
            {
              heading: "Périodicité",
              paragraphs: [
                "Une fonction f définie sur R est périodique de période T (T > 0) si, pour tout réel x, f(x + T) = f(x). Sa courbe est alors inchangée par la translation qui décale chaque point de T unités vers la droite : il suffit de la tracer sur un intervalle de longueur T, puis de reproduire ce motif.",
                "Comme x et x + 2π ont le même point image sur le cercle, cos(x + 2π) = cos x et sin(x + 2π) = sin x pour tout réel x : les fonctions cosinus et sinus sont périodiques de période 2π. Par exemple, la fonction x ↦ cos(2x) est périodique de période π, car cos(2(x + π)) = cos(2x + 2π) = cos(2x).",
              ],
              box: { label: "Définition", text: "f est périodique de période T > 0 si, pour tout réel x, f(x + T) = f(x). Les fonctions cosinus et sinus sont périodiques de période 2π." },
            },
            {
              heading: "Parité",
              paragraphs: [
                "Une fonction f définie sur un ensemble D symétrique par rapport à 0 est paire si f(-x) = f(x) pour tout x de D : sa courbe est symétrique par rapport à l'axe des ordonnées (comme celle de x ↦ x²). Elle est impaire si f(-x) = -f(x) pour tout x de D : sa courbe est symétrique par rapport à l'origine O (comme celle de x ↦ x³).",
                "Puisque cos(-x) = cos x, la fonction cosinus est paire ; puisque sin(-x) = -sin x, la fonction sinus est impaire. Une fonction impaire définie en 0 vérifie f(0) = 0 : c'est un test rapide. Grâce à la parité et à la périodicité, il suffit d'étudier cosinus et sinus sur [0 ; π] : on complète par symétrie sur [-π ; 0], puis par translations de 2π.",
              ],
              box: { label: "Propriété", text: "Pour tout réel x, cos(-x) = cos x : la fonction cosinus est paire, sa courbe est symétrique par rapport à l'axe des ordonnées. Pour tout réel x, sin(-x) = -sin x : la fonction sinus est impaire, sa courbe est symétrique par rapport à l'origine." },
            },
            {
              heading: "Variations et courbes",
              paragraphs: [
                "Lorsque x parcourt [0 ; π], le point image parcourt le demi-cercle supérieur, de I vers I'(-1 ; 0) : son abscisse diminue de 1 à -1, donc la fonction cosinus est décroissante sur [0 ; π]. Son ordonnée augmente de 0 à 1 sur [0 ; π/2], puis diminue de 1 à 0 sur [π/2 ; π]. Par parité, cosinus est croissante sur [-π ; 0] ; sinus est décroissante sur [-π ; -π/2] et croissante sur [-π/2 ; π/2].",
                "La courbe de cosinus coupe l'axe des abscisses aux points d'abscisses π/2 + kπ et atteint 1 en 2kπ ; celle de sinus s'annule en kπ et atteint 1 en π/2 + 2kπ (k entier relatif). Les deux courbes ont la même forme : comme cos x = sin(x + π/2), la courbe de cosinus se déduit de celle de sinus par une translation de π/2 vers la gauche.",
              ],
            },
          ],
          keyPoints: [
            "cos et sin sont définies sur R, à valeurs dans [-1 ; 1].",
            "Périodicité : cos(x + 2π) = cos x et sin(x + 2π) = sin x ; les courbes se répètent tous les 2π.",
            "cos est paire (courbe symétrique par rapport à l'axe des ordonnées), sin est impaire (symétrique par rapport à l'origine).",
            "Sur [0 ; π] : cos décroît de 1 à -1 ; sin croît de 0 à 1 sur [0 ; π/2], puis décroît de 1 à 0.",
            "cos s'annule en π/2 + kπ, sin s'annule en kπ (k entier relatif).",
            "La courbe de cos est celle de sin translatée de π/2 vers la gauche.",
          ],
          example: {
            statement: "Soit f la fonction définie sur R par f(x) = cos(2x). Montrer que f est périodique de période π et paire, puis en déduire un intervalle d'étude le plus petit possible.",
            solution: [
              "Périodicité : pour tout réel x, f(x + π) = cos(2x + 2π) = cos(2x) = f(x). f est périodique de période π.",
              "Parité : R est symétrique par rapport à 0 et, pour tout réel x, f(-x) = cos(-2x) = cos(2x) = f(x). f est paire.",
              "Par périodicité, il suffit d'étudier f sur un intervalle de longueur π, par exemple [-π/2 ; π/2].",
              "Par parité, il suffit de l'étudier sur [0 ; π/2], puis de compléter par symétrie par rapport à l'axe des ordonnées.",
              "Conclusion : on étudie f sur [0 ; π/2], puis on complète la courbe par symétrie et par translations de π.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Étudier la parité des fonctions définies sur R par : f(x) = x² cos x ; g(x) = sin x / (1 + x²) ; h(x) = sin x + cos x.",
              hint: "Calculez l'image de -x et comparez-la à l'image de x et à son opposé. Pour montrer qu'une fonction n'est ni paire ni impaire, un contre-exemple numérique suffit.",
              solution: [
                "f(-x) = (-x)² cos(-x) = x² cos x = f(x) : f est paire.",
                "g(-x) = sin(-x) / (1 + (-x)²) = -sin x / (1 + x²) = -g(x) : g est impaire.",
                "h(0) = 0 + 1 = 1 ≠ 0, donc h n'est pas impaire. h(π/2) = 1 + 0 = 1 et h(-π/2) = -1 + 0 = -1 ≠ h(π/2), donc h n'est pas paire.",
                "Résultat : f est paire, g est impaire, h n'est ni paire ni impaire.",
              ],
            },
            {
              level: 2,
              statement: "Soit f et g les fonctions définies sur R par f(x) = sin(3x) et g(x) = 3 cos x + 1. 1) Montrer que f est périodique de période 2π/3 et impaire. 2) Calculer f(π/6) et f(π/2). 3) Déterminer le maximum et le minimum de g sur R, ainsi qu'une valeur de x où chacun est atteint.",
              hint: "Pour 1), calculez f(x + 2π/3) en développant 3(x + 2π/3). Pour 3), partez de l'encadrement -1 ≤ cos x ≤ 1.",
              solution: [
                "1) f(x + 2π/3) = sin(3x + 2π) = sin(3x) = f(x) : f est périodique de période 2π/3. f(-x) = sin(-3x) = -sin(3x) = -f(x) : f est impaire.",
                "2) f(π/6) = sin(π/2) = 1 et f(π/2) = sin(3π/2) = sin(π + π/2) = -sin(π/2) = -1.",
                "3) -1 ≤ cos x ≤ 1, donc -3 ≤ 3 cos x ≤ 3 et -2 ≤ g(x) ≤ 4.",
                "Le maximum 4 est atteint lorsque cos x = 1, par exemple en x = 0 ; le minimum -2 est atteint lorsque cos x = -1, par exemple en x = π.",
                "Résultat : f(π/6) = 1 et f(π/2) = -1 ; g a pour maximum 4 et pour minimum -2.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un port, on modélise la hauteur d'eau, en mètres, par h(t) = 4 + 2 cos(πt/6), où t est le temps en heures écoulé depuis minuit, avec t ∈ [0 ; 24]. 1) Calculer h(0), h(3) et h(6). 2) Montrer que pour tout réel t, h(t + 12) = h(t), et interpréter. 3) Justifier que 2 ≤ h(t) ≤ 6 et donner les instants des marées hautes et des marées basses sur [0 ; 24]. 4) Un bateau ne peut entrer au port que si la hauteur d'eau est d'au moins 5 m. Déterminer les instants de [0 ; 24] où h(t) = 5, puis les périodes où le bateau peut entrer.",
              hint: "Pour 3), cos(πt/6) = 1 lorsque πt/6 est un multiple de 2π. Pour 4), résolvez cos X = 1/2 en lisant le cercle, avec X = πt/6, sans oublier les multiples de 2π.",
              solution: [
                "1) h(0) = 4 + 2 cos 0 = 6 ; h(3) = 4 + 2 cos(π/2) = 4 ; h(6) = 4 + 2 cos π = 2.",
                "2) h(t + 12) = 4 + 2 cos(πt/6 + 2π) = 4 + 2 cos(πt/6) = h(t). La hauteur d'eau se répète toutes les 12 heures.",
                "3) -1 ≤ cos(πt/6) ≤ 1 donne 2 ≤ h(t) ≤ 6. h(t) = 6 quand πt/6 = 2kπ, soit t = 12k : marées hautes à 0 h, 12 h et 24 h. h(t) = 2 quand πt/6 = π + 2kπ, soit t = 6 + 12k : marées basses à 6 h et à 18 h.",
                "4) h(t) = 5 équivaut à cos(πt/6) = 1/2. Sur le cercle, cos X = 1/2 pour X = π/3 + 2kπ ou X = -π/3 + 2kπ.",
                "πt/6 = π/3 + 2kπ donne t = 2 + 12k ; πt/6 = -π/3 + 2kπ donne t = -2 + 12k. Dans [0 ; 24] : t = 2, t = 10, t = 14 et t = 22.",
                "Conclusion : la hauteur vaut 5 m à 2 h, 10 h, 14 h et 22 h ; elle est d'au moins 5 m, et le bateau peut entrer, sur [0 ; 2], [10 ; 14] et [22 ; 24].",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du tracé de la courbe de cosinus sur R.",
            items: [
              "Étudier les variations de cosinus sur [0 ; π] à l'aide du cercle trigonométrique.",
              "Tracer la courbe sur [0 ; π] en plaçant les valeurs remarquables.",
              "Compléter sur [-π ; 0] par symétrie par rapport à l'axe des ordonnées (parité).",
              "Obtenir ainsi la courbe sur [-π ; π], intervalle de longueur 2π.",
              "Reproduire ce motif par translations de 2π vers la droite et vers la gauche (périodicité).",
            ],
          },
          quiz: [
            { q: "La fonction sinus est :", options: ["paire", "impaire", "ni paire ni impaire"], answer: 1, why: "Pour tout réel x, sin(-x) = -sin x." },
            { q: "La plus petite période positive de la fonction cosinus est :", options: ["π", "π/2", "2π", "4π"], answer: 2, why: "cos(x + 2π) = cos x pour tout x ; et une période T devrait vérifier cos T = cos 0 = 1, ce qui impose que T soit un multiple de 2π." },
            { q: "La courbe d'une fonction paire est symétrique par rapport :", options: ["à l'axe des ordonnées", "à l'origine du repère", "à l'axe des abscisses", "à la droite d'équation y = x"], answer: 0, why: "f(-x) = f(x) : les points d'abscisses x et -x sont à la même hauteur." },
            { q: "Sur [0 ; π], la fonction cosinus est :", options: ["croissante", "décroissante", "croissante puis décroissante", "décroissante puis croissante"], answer: 1, why: "Le point image parcourt le demi-cercle supérieur de I vers I' : son abscisse diminue de 1 à -1." },
            { q: "Combien de solutions l'équation sin x = 0 a-t-elle dans [0 ; 4π] ?", options: ["2", "4", "3", "5"], answer: 3, why: "sin x = 0 pour x = kπ : 0, π, 2π, 3π et 4π, soit 5 solutions." },
          ],
          trap: "Confondre parité et périodicité, ou conclure qu'une fonction est paire parce que f(-x) = f(x) pour une seule valeur de x : l'égalité doit être vraie pour tout x de l'ensemble de définition.",
          method: "Pour étudier une fonction trigonométrique, réduisez l'intervalle d'étude : la périodicité ramène à un intervalle de longueur T, la parité à sa moitié positive. Vérifiez ensuite la courbe en plaçant quelques valeurs remarquables.",
        },
      ],
    },
  ],
}
