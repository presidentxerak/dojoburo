import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-2nde',
  chapters: [
    /* ================================================================== */
    /* VARIATIONS ET EXTREMUMS                                              */
    /* ================================================================== */
    {
      id: 'variations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sens-variation',
          title: "Sens de variation et tableau de variations",
          minutes: 30,
          objectives: [
            "Définir une fonction croissante, décroissante ou constante sur un intervalle, au sens large et au sens strict.",
            "Lire les variations d'une fonction sur sa courbe et les résumer dans un tableau de variations.",
            "Comparer deux images à l'aide du sens de variation d'une fonction.",
            "Démontrer le sens de variation d'une fonction affine ou de la fonction carré sur un intervalle.",
          ],
          course: [
            {
              heading: "Fonction croissante, fonction décroissante",
              paragraphs: [
                "Intuitivement, une fonction est croissante sur un intervalle lorsque sa courbe « monte » quand on la parcourt de la gauche vers la droite, et décroissante lorsqu'elle « descend ». On peut penser à un randonneur qui avance toujours vers l'est sur une route de montagne : sur une portion croissante, son altitude augmente quand il avance ; sur une portion décroissante, elle diminue.",
                "Définition précise : soit f une fonction et I un intervalle contenu dans son ensemble de définition. On dit que f est croissante sur I si, pour tous réels a et b de I, a < b entraîne f(a) ≤ f(b). On dit que f est strictement croissante sur I si a < b entraîne f(a) < f(b). Une fonction croissante conserve donc l'ordre : les images sont rangées dans le même ordre que les nombres de départ.",
                "De même, f est décroissante sur I si, pour tous a et b de I, a < b entraîne f(a) ≥ f(b), et strictement décroissante si a < b entraîne f(a) > f(b) : une fonction décroissante renverse l'ordre. Enfin, f est constante sur I si f(a) = f(b) pour tous a et b de I. Une fonction qui est soit croissante, soit décroissante sur I est dite monotone sur I.",
              ],
              box: { label: "Définition", text: "f est strictement croissante sur I si, pour tous a et b de I, a < b entraîne f(a) < f(b). f est strictement décroissante sur I si, pour tous a et b de I, a < b entraîne f(a) > f(b). Avec ≤ et ≥ au lieu de < et >, on parle de croissance et de décroissance au sens large." },
            },
            {
              heading: "Le tableau de variations",
              paragraphs: [
                "Le tableau de variations résume le comportement d'une fonction. Sa première ligne contient les valeurs de x : les bornes de l'ensemble de définition et les valeurs où le sens de variation change. Sa seconde ligne contient des flèches : une flèche montante sur un intervalle où f est croissante, une flèche descendante où f est décroissante. Aux extrémités des flèches, on écrit les images correspondantes.",
                "Exemple : f est définie sur [-3 ; 5], décroissante sur [-3 ; 1] et croissante sur [1 ; 5], avec f(-3) = 4, f(1) = -2 et f(5) = 6. Son tableau s'écrit : sur la ligne des x, -3, puis 1, puis 5 ; sur la ligne de f(x), 4 en haut à gauche, une flèche qui descend jusqu'à -2, puis une flèche qui remonte jusqu'à 6. On le résume parfois ainsi : 4 ↘ -2 ↗ 6.",
                "Le tableau ne donne pas toutes les valeurs de f : il indique seulement comment elles évoluent. Il permet cependant de répondre à de nombreuses questions, par exemple : sur [-3 ; 1], f(x) prend toutes ses valeurs entre -2 et 4 si sa courbe se trace sans lever le crayon, ce qui est le cas de toutes les fonctions étudiées en seconde.",
              ],
              box: { label: "Repère", text: "Première ligne : les valeurs de x (bornes et changements de sens), rangées dans l'ordre croissant. Seconde ligne : des flèches montantes ou descendantes, avec les images aux extrémités de chaque flèche." },
            },
            {
              heading: "Comparer des images grâce au sens de variation",
              paragraphs: [
                "Le sens de variation permet de comparer des images sans les calculer. Si f est strictement croissante sur I et si a et b sont dans I avec a < b, alors f(a) < f(b). Si f est strictement décroissante sur I, alors a < b entraîne f(a) > f(b). Exemple : f est strictement décroissante sur [0 ; 10] ; comme 2,5 < 3,7, on a f(2,5) > f(3,7).",
                "Attention : les deux nombres doivent appartenir à un même intervalle sur lequel f est monotone. Avec la fonction du tableau précédent, on ne peut pas comparer f(0) et f(3) directement : 0 est dans [-3 ; 1] où f décroît, 3 est dans [1 ; 5] où f croît. Le tableau indique seulement que f(0) est compris entre -2 et 4, et f(3) entre -2 et 6.",
                "Enfin, connaître deux valeurs ne suffit jamais à établir un sens de variation : f(1) < f(3) ne prouve pas que f est croissante sur [1 ; 3], car la courbe peut descendre puis remonter entre 1 et 3. Pour démontrer une croissance, il faut un raisonnement valable pour tous les nombres a et b de l'intervalle.",
              ],
              box: { label: "À retenir", text: "Une fonction strictement croissante conserve l'ordre, une fonction strictement décroissante le renverse. On ne compare deux images ainsi que si les deux nombres sont dans un même intervalle où la fonction est monotone." },
            },
            {
              heading: "Démontrer un sens de variation",
              paragraphs: [
                "Pour démontrer qu'une fonction est croissante sur I, on prend deux réels quelconques a et b de I avec a < b, puis on étudie le signe de la différence f(b) - f(a). Si cette différence est positive (strictement), f est (strictement) croissante ; si elle est négative, f est décroissante.",
                "Fonctions affines : pour f(x) = mx + p, on a f(b) - f(a) = mb + p - ma - p = m(b - a). Comme b - a > 0, cette différence a le signe de m. Donc f est strictement croissante sur ℝ si m > 0, strictement décroissante si m < 0, et constante si m = 0. Par exemple, f(x) = -3x + 7 est strictement décroissante sur ℝ.",
                "Fonction carré sur [0 ; +∞[ : si 0 ≤ a < b, alors b² - a² = (b - a)(b + a). Le facteur b - a est strictement positif, et b + a aussi, car b > 0 et a ≥ 0. Le produit est donc strictement positif : a² < b². La fonction carré est strictement croissante sur [0 ; +∞[.",
              ],
              box: { label: "Méthode", text: "Pour étudier le sens de variation de f sur I : prendre a et b dans I avec a < b, calculer f(b) - f(a), factoriser si besoin, puis conclure selon le signe obtenu." },
            },
          ],
          keyPoints: [
            "f croissante sur I : pour tous a < b dans I, f(a) ≤ f(b) ; strictement croissante : f(a) < f(b).",
            "f décroissante sur I : pour tous a < b dans I, f(a) ≥ f(b) ; elle renverse l'ordre.",
            "Le tableau de variations donne les valeurs de x où le sens change et les images aux extrémités des flèches.",
            "On ne compare deux images avec le sens de variation que dans un même intervalle où f est monotone.",
            "f(x) = mx + p est croissante si m > 0, décroissante si m < 0, constante si m = 0.",
            "Pour démontrer un sens de variation, on étudie le signe de f(b) - f(a) pour a < b.",
          ],
          example: {
            statement: "Une fonction f est définie sur [-4 ; 6]. Elle est strictement décroissante sur [-4 ; -1], strictement croissante sur [-1 ; 3] et strictement décroissante sur [3 ; 6], avec f(-4) = 3, f(-1) = -2, f(3) = 5 et f(6) = 1. Dressez son tableau de variations, puis comparez f(-3) et f(-2), puis f(0) et f(2). Peut-on comparer f(-3) et f(4) ?",
            solution: [
              "Tableau : sur la ligne des x, on écrit -4, -1, 3 et 6. Sur la ligne de f(x) : 3 ↘ -2 ↗ 5 ↘ 1, c'est-à-dire une flèche descendante de 3 à -2, une flèche montante de -2 à 5, puis une flèche descendante de 5 à 1.",
              "Les nombres -3 et -2 appartiennent tous deux à [-4 ; -1], où f est strictement décroissante. Comme -3 < -2, l'ordre est renversé : f(-3) > f(-2).",
              "Les nombres 0 et 2 appartiennent tous deux à [-1 ; 3], où f est strictement croissante. Comme 0 < 2, l'ordre est conservé : f(0) < f(2).",
              "Le nombre -3 est dans [-4 ; -1] : f(-3) est compris entre -2 et 3. Le nombre 4 est dans [3 ; 6] : f(4) est compris entre 1 et 5.",
              "Ces deux encadrements se chevauchent (entre 1 et 3) et les deux nombres ne sont pas dans un même intervalle de monotonie.",
              "Conclusion : f(-3) > f(-2), f(0) < f(2), et le tableau ne permet pas de comparer f(-3) et f(4).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une fonction g est définie sur [-5 ; 4]. Elle est strictement décroissante sur [-5 ; -2], strictement croissante sur [-2 ; 1] et strictement décroissante sur [1 ; 4]. On sait que g(-5) = 2, g(-2) = -3, g(1) = 4 et g(4) = 0. a) Dressez le tableau de variations de g. b) Comparez g(-4) et g(-3). c) Comparez g(0,5) et g(0,8). d) Comparez g(2) et g(3).",
              hint: "Repérez pour chaque couple l'intervalle de monotonie qui contient les deux nombres, puis demandez-vous si l'ordre est conservé ou renversé.",
              solution: [
                "a) Ligne des x : -5, -2, 1, 4. Ligne de g(x) : 2 ↘ -3 ↗ 4 ↘ 0.",
                "b) -4 et -3 sont dans [-5 ; -2], où g est strictement décroissante. Comme -4 < -3, on obtient g(-4) > g(-3).",
                "c) 0,5 et 0,8 sont dans [-2 ; 1], où g est strictement croissante. Comme 0,5 < 0,8, on obtient g(0,5) < g(0,8).",
                "d) 2 et 3 sont dans [1 ; 4], où g est strictement décroissante. Comme 2 < 3, on obtient g(2) > g(3).",
              ],
            },
            {
              level: 2,
              statement: "On considère les fonctions f et g définies sur ℝ par f(x) = -3x + 7 et g(x) = 2x - 5. a) Pour deux réels a < b, calculez f(b) - f(a) et déduisez-en le sens de variation de f. b) Faites de même pour g. c) Sans calculatrice, comparez f(√2) et f(1,4), puis g(-1,01) et g(-1).",
              hint: "Factorisez la différence f(b) - f(a) par (b - a), dont vous connaissez le signe. Pour c), rappelez-vous que √2 ≈ 1,414.",
              solution: [
                "a) f(b) - f(a) = (-3b + 7) - (-3a + 7) = -3b + 3a = -3(b - a). Comme b - a > 0, on a -3(b - a) < 0, donc f(b) < f(a) : f est strictement décroissante sur ℝ.",
                "b) g(b) - g(a) = (2b - 5) - (2a - 5) = 2(b - a) > 0, donc g(a) < g(b) : g est strictement croissante sur ℝ.",
                "c) On a √2 ≈ 1,414, donc 1,4 < √2. Comme f est strictement décroissante, l'ordre est renversé : f(1,4) > f(√2), c'est-à-dire f(√2) < f(1,4).",
                "Comme -1,01 < -1 et g est strictement croissante, l'ordre est conservé : g(-1,01) < g(-1).",
                "Contrôle numérique : f(1,4) = 2,8 et f(√2) ≈ 2,757 ; g(-1,01) = -7,02 et g(-1) = -7.",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction carré, définie sur ℝ par f(x) = x². a) Soient a et b deux réels tels que a < b ≤ 0. Factorisez b² - a², étudiez le signe de chaque facteur et démontrez que f est strictement décroissante sur ]-∞ ; 0]. b) Sans calculer, comparez (-3,2)² et (-2,9)². c) On définit h sur ]-∞ ; 0] par h(x) = 3 - x². Démontrez que h est strictement croissante sur ]-∞ ; 0].",
              hint: "Utilisez l'identité b² - a² = (b - a)(b + a). Si a < b ≤ 0, que dire du signe de a + b ? Pour c), partez de l'inégalité obtenue en a) et multipliez par -1.",
              solution: [
                "a) b² - a² = (b - a)(b + a). Comme a < b, on a b - a > 0. Comme a < b ≤ 0, on a a < 0 et b ≤ 0, donc a + b < 0.",
                "Le produit d'un nombre strictement positif par un nombre strictement négatif est strictement négatif : b² - a² < 0, donc b² < a², c'est-à-dire f(b) < f(a).",
                "Ainsi, pour tous a < b dans ]-∞ ; 0], f(a) > f(b) : la fonction carré est strictement décroissante sur ]-∞ ; 0].",
                "b) On a -3,2 < -2,9 ≤ 0. La fonction carré renverse l'ordre sur ]-∞ ; 0], donc (-3,2)² > (-2,9)². Contrôle : 10,24 > 8,41.",
                "c) Soient a < b ≤ 0. D'après a), a² > b². En multipliant par -1, l'inégalité change de sens : -a² < -b². En ajoutant 3 : 3 - a² < 3 - b², donc h(a) < h(b).",
                "Conclusion : h conserve l'ordre sur ]-∞ ; 0], elle y est strictement croissante.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre compréhension du sens de variation.",
            statements: [
              { text: "Si f(1) < f(3), alors f est croissante sur [1 ; 3].", true: false, why: "Deux valeurs ne suffisent pas : la courbe peut descendre puis remonter entre 1 et 3." },
              { text: "Une fonction strictement décroissante sur I renverse l'ordre : si a < b dans I, alors f(a) > f(b).", true: true, why: "C'est exactement la définition de la stricte décroissance." },
              { text: "La fonction x ↦ -2x + 5 est croissante sur ℝ, car 5 > 0.", true: false, why: "Le sens de variation dépend du coefficient de x, ici -2 < 0 : la fonction est décroissante." },
              { text: "Une fonction constante sur I est à la fois croissante et décroissante sur I, au sens large.", true: true, why: "On a f(a) = f(b), donc à la fois f(a) ≤ f(b) et f(a) ≥ f(b)." },
              { text: "Dans un tableau de variations, une flèche montante indique que la fonction est croissante sur l'intervalle correspondant.", true: true, why: "Les flèches traduisent le sens de variation : montante pour croissante, descendante pour décroissante." },
              { text: "Si f(0) = 2 et f(4) = 2, alors f est constante sur [0 ; 4].", true: false, why: "La fonction peut varier entre 0 et 4 et reprendre la même valeur en 4, comme une parabole." },
            ],
          },
          quiz: [
            { q: "f est strictement croissante sur [0 ; 10]. Que peut-on dire de f(3) et de f(7) ?", options: ["f(3) > f(7)", "f(3) < f(7)", "f(3) = f(7)", "On ne peut pas les comparer"], answer: 1, why: "3 et 7 sont dans [0 ; 10] et 3 < 7 ; une fonction strictement croissante conserve l'ordre." },
            { q: "Laquelle de ces fonctions est strictement décroissante sur ℝ ?", options: ["f(x) = 4x - 1", "f(x) = x + 10", "f(x) = 0,5x - 300", "f(x) = -0,5x + 3"], answer: 3, why: "Une fonction affine est strictement décroissante quand son coefficient directeur est négatif, ici -0,5." },
            { q: "Le tableau de f sur [-2 ; 4] est : f(-2) = 1 ↘ f(1) = -3 ↗ f(4) = 2. Sur quel intervalle f est-elle croissante ?", options: ["[1 ; 4]", "[-2 ; 1]", "[-3 ; 2]", "[-2 ; 4]"], answer: 0, why: "La flèche montante va de x = 1 à x = 4. L'intervalle [-3 ; 2] décrit des valeurs de f(x), pas de x." },
            { q: "Pour démontrer que f est croissante sur I, il faut montrer que :", options: ["f(0) < f(1) pour deux réels bien choisis", "la courbe de f passe par l'origine", "pour tous a < b dans I, f(a) ≤ f(b)", "f(x) est positif pour tout x de I"], answer: 2, why: "La définition porte sur tous les couples de I. Le signe de f(x) ne renseigne pas sur ses variations." },
            { q: "f est strictement décroissante sur [0 ; +∞[. Comment se comparent f(√5) et f(2,2) ?", options: ["f(√5) > f(2,2)", "f(√5) < f(2,2)", "f(√5) = f(2,2)"], answer: 1, why: "√5 ≈ 2,236, donc 2,2 < √5 ; f renverse l'ordre, d'où f(√5) < f(2,2)." },
          ],
          trap: "Conclure qu'une fonction est croissante à partir de deux valeurs seulement, ou garder le sens de l'inégalité avec une fonction décroissante : une fonction décroissante renverse l'ordre des images.",
          method: "Pour comparer deux images, vérifiez d'abord que les deux nombres sont dans un même intervalle où la fonction est monotone, comparez les nombres, puis appliquez la règle : ordre conservé si la fonction est croissante, renversé si elle est décroissante.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'extremums',
          title: "Maximum et minimum d'une fonction",
          minutes: 30,
          objectives: [
            "Définir le maximum et le minimum d'une fonction sur un intervalle.",
            "Lire un extremum sur une courbe ou dans un tableau de variations, en tenant compte des bornes.",
            "Démontrer qu'un nombre est le maximum ou le minimum d'une fonction en étudiant le signe d'une différence.",
            "Résoudre un problème d'optimisation simple à l'aide d'un extremum.",
          ],
          course: [
            {
              heading: "Définitions",
              paragraphs: [
                "Soit f une fonction définie sur un intervalle I. Dire que M est le maximum de f sur I signifie deux choses : d'une part, pour tout x de I, f(x) ≤ M ; d'autre part, il existe au moins un réel a de I tel que f(a) = M. On dit que le maximum M est atteint en a. De même, m est le minimum de f sur I si f(x) ≥ m pour tout x de I et s'il existe un réel b de I tel que f(b) = m.",
                "Un maximum ou un minimum s'appelle un extremum. Il faut bien distinguer la valeur de l'extremum (une valeur de f(x), lue sur l'axe des ordonnées) et l'endroit où il est atteint (une valeur de x, lue sur l'axe des abscisses). Sur une courbe, le maximum correspond à l'ordonnée du point le plus haut, le minimum à l'ordonnée du point le plus bas.",
                "Les deux conditions sont indispensables. Par exemple, la fonction f(x) = x définie sur l'intervalle ouvert ]0 ; 1[ vérifie f(x) < 1 pour tout x, mais elle n'atteint jamais la valeur 1 : elle n'a pas de maximum sur cet intervalle (ni de minimum, pour la même raison en 0).",
              ],
              box: { label: "Définition", text: "M est le maximum de f sur I si, pour tout x de I, f(x) ≤ M, et s'il existe a dans I tel que f(a) = M. m est le minimum de f sur I si, pour tout x de I, f(x) ≥ m, et s'il existe b dans I tel que f(b) = m." },
            },
            {
              heading: "Lire un extremum dans un tableau de variations",
              paragraphs: [
                "Dans un tableau de variations, les valeurs candidates pour un maximum sont les valeurs placées en haut des flèches, y compris aux bornes de l'intervalle. On les compare toutes pour trouver la plus grande. Pour le minimum, on compare les valeurs placées en bas des flèches.",
                "Exemple : f est définie sur [-3 ; 5] avec le tableau 6 ↘ -1 ↗ 4 ↘ 2, pour x = -3, 0, 3 et 5. Les valeurs en haut des flèches sont 6 (en x = -3) et 4 (en x = 3). Le maximum de f sur [-3 ; 5] est donc 6, atteint en -3, et non 4. Les valeurs en bas des flèches sont -1 (en x = 0) et 2 (en x = 5) : le minimum est -1, atteint en 0.",
                "Le maximum dépend de l'intervalle choisi. Avec la même fonction, sur l'intervalle [0 ; 5], le maximum est 4, atteint en 3. On parle parfois de maximum local pour une valeur qui est la plus grande seulement au voisinage d'un point, comme 4 ici.",
              ],
              box: { label: "À retenir", text: "Pour lire un maximum dans un tableau, on compare toutes les valeurs situées en haut des flèches, y compris celles des bornes. Le maximum est une valeur de f(x) ; on précise ensuite en quelle valeur de x il est atteint." },
            },
            {
              heading: "Démontrer qu'un nombre est un extremum",
              paragraphs: [
                "Pour démontrer que M est le maximum de f sur I, on montre que f(x) - M ≤ 0 pour tout x de I, puis on exhibe un réel a de I tel que f(a) = M. Pour un minimum m, on montre que f(x) - m ≥ 0. L'outil le plus courant est le carré : pour tout réel X, X² ≥ 0, avec égalité seulement si X = 0.",
                "Exemple : f(x) = -x² + 6x - 4 sur ℝ. On vérifie que f(x) = 5 - (x - 3)², car 5 - (x² - 6x + 9) = -x² + 6x - 4. Alors f(x) - 5 = -(x - 3)², qui est négatif ou nul pour tout x : f(x) ≤ 5. De plus f(3) = 5 - 0 = 5. Donc 5 est le maximum de f sur ℝ, atteint en x = 3.",
              ],
              box: { label: "Méthode", text: "Maximum M : prouver que f(x) - M ≤ 0 pour tout x de I, puis trouver a dans I avec f(a) = M. Minimum m : prouver que f(x) - m ≥ 0 pour tout x de I, puis trouver b dans I avec f(b) = m." },
            },
            {
              heading: "Optimiser : chercher la meilleure valeur",
              paragraphs: [
                "De nombreux problèmes concrets demandent une valeur la plus grande ou la plus petite possible : une aire maximale, un coût minimal, une distance minimale. On modélise la grandeur par une fonction, puis on cherche son extremum sur l'intervalle imposé par la situation.",
                "Exemple : un rectangle a un périmètre de 20 cm. Si l'un de ses côtés mesure x cm, avec x dans ]0 ; 10[, l'autre mesure 10 - x et l'aire vaut A(x) = x(10 - x) = -x² + 10x. On vérifie que A(x) = 25 - (x - 5)². Donc A(x) ≤ 25 pour tout x, et A(5) = 25 : l'aire maximale vaut 25 cm², obtenue pour le carré de côté 5 cm.",
                "Lorsque l'on ne sait pas démontrer, on peut approcher un extremum par balayage : on calcule f(x) pour des valeurs régulièrement espacées (avec un tableur, la calculatrice ou une boucle en Python) et on repère la plus grande. Cette méthode donne une valeur approchée et une conjecture, pas une preuve.",
              ],
            },
          ],
          keyPoints: [
            "M est le maximum de f sur I si f(x) ≤ M pour tout x de I et si M est atteint en un réel a de I.",
            "Un extremum est une valeur de f(x) ; on précise toujours en quelle valeur de x il est atteint.",
            "Dans un tableau, le maximum se cherche parmi toutes les valeurs en haut des flèches, bornes comprises.",
            "Pour démontrer un maximum M : étudier le signe de f(x) - M, souvent grâce à un carré.",
            "Le maximum dépend de l'intervalle sur lequel on étudie la fonction.",
            "Un balayage numérique donne une conjecture, pas une démonstration.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = x² - 4x + 1. a) Vérifiez que, pour tout réel x, f(x) = (x - 2)² - 3. b) Démontrez que f admet un minimum sur ℝ, dont vous donnerez la valeur et l'endroit où il est atteint.",
            solution: [
              "a) On développe : (x - 2)² - 3 = x² - 4x + 4 - 3 = x² - 4x + 1 = f(x).",
              "b) On étudie le signe de f(x) - (-3) = f(x) + 3 = (x - 2)².",
              "Un carré est toujours positif ou nul : pour tout réel x, (x - 2)² ≥ 0, donc f(x) ≥ -3.",
              "De plus, f(2) = (2 - 2)² - 3 = -3 : la valeur -3 est atteinte.",
              "Conclusion : f admet sur ℝ un minimum égal à -3, atteint en x = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une fonction g est définie sur [-2 ; 6] par son tableau de variations : g(-2) = -1, g croît jusqu'à g(1) = 5, décroît jusqu'à g(4) = -3, puis croît jusqu'à g(6) = 2. a) Quel est le maximum de g sur [-2 ; 6] ? En quelle valeur est-il atteint ? b) Quel est le minimum de g sur [-2 ; 6] ? c) Donnez le maximum et le minimum de g sur [-2 ; 1].",
              hint: "Comparez toutes les valeurs situées en haut des flèches (pour le maximum) et toutes celles situées en bas (pour le minimum), bornes comprises.",
              solution: [
                "a) Les valeurs en haut des flèches sont 5 (en x = 1) et 2 (en x = 6). La plus grande est 5 : le maximum de g sur [-2 ; 6] est 5, atteint en x = 1.",
                "b) Les valeurs en bas des flèches sont -1 (en x = -2) et -3 (en x = 4). La plus petite est -3 : le minimum de g sur [-2 ; 6] est -3, atteint en x = 4.",
                "c) Sur [-2 ; 1], g est croissante : elle part de -1 et monte jusqu'à 5.",
                "Le minimum de g sur [-2 ; 1] est donc -1, atteint en -2, et le maximum est 5, atteint en 1.",
              ],
            },
            {
              level: 2,
              statement: "Soit f la fonction définie sur ℝ par f(x) = 2x² + 8x + 3. a) Vérifiez que, pour tout réel x, f(x) = 2(x + 2)² - 5. b) Démontrez que f admet un minimum sur ℝ et précisez-le. c) La fonction f admet-elle un maximum sur ℝ ? Justifiez.",
              hint: "Pour b), étudiez le signe de f(x) + 5. Pour c), montrez que, pour x ≥ 0, f(x) ≥ 8x + 3, et demandez-vous si f(x) peut dépasser n'importe quel nombre.",
              solution: [
                "a) 2(x + 2)² - 5 = 2(x² + 4x + 4) - 5 = 2x² + 8x + 8 - 5 = 2x² + 8x + 3 = f(x).",
                "b) f(x) - (-5) = 2(x + 2)². Comme un carré est positif ou nul et que 2 > 0, on a f(x) + 5 ≥ 0, donc f(x) ≥ -5 pour tout x.",
                "De plus f(-2) = 2 × 0 - 5 = -5. Le minimum de f sur ℝ est -5, atteint en x = -2.",
                "c) Pour x ≥ 0, 2x² ≥ 0, donc f(x) ≥ 8x + 3. Soit M un nombre quelconque : pour x positif et supérieur à (M - 3)/8, on a 8x + 3 > M, donc f(x) > M.",
                "Aucun nombre M ne vérifie f(x) ≤ M pour tout x : f n'admet pas de maximum sur ℝ.",
              ],
            },
            {
              level: 3,
              statement: "Un jardinier dispose de 40 m de grillage pour clôturer un enclos rectangulaire adossé à un mur : le côté le long du mur n'a pas besoin de grillage. On note x la longueur, en mètres, de chacun des deux côtés perpendiculaires au mur, avec 0 < x < 20. a) Exprimez la longueur du côté parallèle au mur, puis montrez que l'aire de l'enclos vaut A(x) = -2x² + 40x. b) Vérifiez que A(x) = 200 - 2(x - 10)². c) Déduisez-en l'aire maximale de l'enclos et ses dimensions. d) Dressez le tableau de variations de A sur ]0 ; 20[.",
              hint: "Le grillage couvre deux côtés de longueur x et un côté parallèle au mur. Pour c), étudiez le signe de A(x) - 200.",
              solution: [
                "a) Les deux côtés perpendiculaires au mur utilisent 2x mètres de grillage ; le côté parallèle au mur mesure donc 40 - 2x mètres.",
                "L'aire du rectangle vaut A(x) = x(40 - 2x) = 40x - 2x² = -2x² + 40x.",
                "b) 200 - 2(x - 10)² = 200 - 2(x² - 20x + 100) = 200 - 2x² + 40x - 200 = -2x² + 40x = A(x).",
                "c) A(x) - 200 = -2(x - 10)² ≤ 0 pour tout x, donc A(x) ≤ 200. De plus, 10 appartient à ]0 ; 20[ et A(10) = 200.",
                "L'aire maximale vaut 200 m², obtenue pour x = 10 m : l'enclos mesure 10 m sur 40 - 20 = 20 m.",
                "d) A est croissante sur ]0 ; 10] et décroissante sur [10 ; 20[, avec le maximum 200 en x = 10. En effet, pour x proche de 0 ou de 20, l'aire est proche de 0.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa description.",
            pairs: [
              { left: "Maximum de f sur I", right: "Plus grande valeur de f(x) pour x dans I, effectivement atteinte" },
              { left: "Minimum de f sur I", right: "Plus petite valeur de f(x) pour x dans I, effectivement atteinte" },
              { left: "Extremum", right: "Un maximum ou un minimum" },
              { left: "f(x) = 7 - (x - 1)²", right: "Maximum 7, atteint en x = 1" },
              { left: "f(x) = (x + 2)² - 3", right: "Minimum -3, atteint en x = -2" },
              { left: "f(x) = x sur ]0 ; 1[", right: "Ni maximum ni minimum sur cet intervalle" },
            ],
          },
          quiz: [
            { q: "Le tableau de f est : f(-1) = 2 ↗ f(2) = 7 ↘ f(5) = -4. Quel est le maximum de f sur [-1 ; 5] ?", options: ["2", "5", "7", "-4"], answer: 2, why: "La seule valeur en haut d'une flèche est 7, atteinte en x = 2 ; 5 est une valeur de x." },
            { q: "Avec le même tableau, quel est le minimum de f sur [-1 ; 5] ?", options: ["-4, atteint en 5", "2, atteint en -1", "7, atteint en 2", "-1, atteint en 2"], answer: 0, why: "Les valeurs en bas des flèches sont 2 (en -1) et -4 (en 5) ; la plus petite est -4." },
            { q: "Pour tout réel x, f(x) = 3 - (x + 4)². Alors :", options: ["f a un minimum égal à 3", "f a un maximum égal à -4", "f a un minimum égal à -4", "f a un maximum égal à 3"], answer: 3, why: "-(x + 4)² ≤ 0 donc f(x) ≤ 3, et f(-4) = 3 : le maximum est 3, atteint en -4." },
            { q: "Pour prouver que 5 est le maximum de f sur ℝ, il faut montrer que :", options: ["f(x) ≤ 5 pour tout x, sans rien d'autre", "f(x) ≤ 5 pour tout x et f(a) = 5 pour un réel a", "f(0) = 5", "f(x) < 5 pour tout x réel et f(x) s'approche de 5 sans l'atteindre"], answer: 1, why: "Un maximum doit majorer toutes les valeurs de f et être atteint en au moins un point." },
            { q: "La fonction f(x) = 2x + 1, définie sur [0 ; 3], a pour maximum :", options: ["7", "3", "1", "Elle n'en a pas"], answer: 0, why: "f est croissante (coefficient 2 > 0), donc son maximum est atteint à la borne droite : f(3) = 7." },
          ],
          trap: "Prendre pour maximum la valeur haute située au milieu du tableau en oubliant les bornes de l'intervalle, ou confondre le maximum (une valeur de f(x)) avec l'endroit où il est atteint (une valeur de x).",
          method: "Pour justifier un extremum, rédigez toujours deux phrases : « pour tout x de I, f(x) ≤ M » (obtenue en étudiant le signe de f(x) - M) et « f(a) = M » pour un réel a de I que vous nommez.",
        },
      ],
    },
    /* ================================================================== */
    /* DROITES DU PLAN                                                      */
    /* ================================================================== */
    {
      id: 'droites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-droite',
          title: "Équations de droites et coefficient directeur",
          minutes: 35,
          objectives: [
            "Déterminer une équation cartésienne d'une droite connaissant un point et un vecteur directeur.",
            "Passer d'une équation cartésienne à l'équation réduite, et inversement.",
            "Calculer le coefficient directeur d'une droite passant par deux points et l'interpréter.",
            "Tracer une droite à partir de son équation et vérifier qu'un point lui appartient.",
          ],
          course: [
            {
              heading: "Vecteur directeur et équation cartésienne",
              paragraphs: [
                "Le plan est muni d'un repère. Une droite d est entièrement déterminée par un point A et une direction, donnée par un vecteur non nul u appelé vecteur directeur de d. Un point M appartient à d si et seulement si les vecteurs AM et u sont colinéaires, c'est-à-dire si leur déterminant est nul : pour AM(x' ; y') et u(α ; β), det(AM, u) = x'β - y'α = 0.",
                "Exemple : la droite d passe par A(1 ; 2) et a pour vecteur directeur u(3 ; 1). Pour M(x ; y), on a AM(x - 1 ; y - 2), donc det(AM, u) = (x - 1) × 1 - (y - 2) × 3 = x - 1 - 3y + 6 = x - 3y + 5. Ainsi M appartient à d si et seulement si x - 3y + 5 = 0 : c'est une équation cartésienne de d. Contrôle avec A : 1 - 6 + 5 = 0.",
                "Plus généralement, toute droite admet une équation de la forme ax + by + c = 0, où a et b ne sont pas tous les deux nuls, et le vecteur de coordonnées (-b ; a) est un vecteur directeur de cette droite. Réciproquement, l'ensemble des points vérifiant une telle équation est une droite. Une droite a une infinité d'équations cartésiennes : en multipliant tous les coefficients par un même nombre non nul, on obtient une autre équation de la même droite.",
              ],
              box: { label: "Propriété", text: "Toute droite du plan admet une équation cartésienne ax + by + c = 0, avec (a ; b) ≠ (0 ; 0). Le vecteur u(-b ; a) est alors un vecteur directeur de la droite." },
            },
            {
              heading: "L'équation réduite",
              paragraphs: [
                "Si b ≠ 0, on peut isoler y dans ax + by + c = 0 : by = -ax - c, donc y = (-a/b)x - c/b. On obtient une équation de la forme y = mx + p, appelée équation réduite de la droite. Le nombre m est le coefficient directeur (ou pente) de la droite, et p est son ordonnée à l'origine : la droite coupe l'axe des ordonnées au point (0 ; p). L'équation réduite est unique.",
                "Si b = 0, l'équation devient ax + c = 0, soit x = -c/a : tous les points de la droite ont la même abscisse. La droite est alors parallèle à l'axe des ordonnées (on dit verticale) et son équation réduite est de la forme x = k. Une droite verticale n'a pas de coefficient directeur.",
                "Pour une droite d'équation y = mx + p, le vecteur (1 ; m) est un vecteur directeur : quand on avance de 1 unité vers la droite, on monte de m unités (ou on descend si m < 0). Si m = 0, la droite y = p est parallèle à l'axe des abscisses (horizontale).",
              ],
              box: { label: "À retenir", text: "Toute droite non parallèle à l'axe des ordonnées a une unique équation réduite y = mx + p (m : coefficient directeur, p : ordonnée à l'origine, vecteur directeur (1 ; m)). Une droite parallèle à l'axe des ordonnées a une équation x = k." },
            },
            {
              heading: "Calculer le coefficient directeur à partir de deux points",
              paragraphs: [
                "Si A(xA ; yA) et B(xB ; yB) sont deux points d'une droite non verticale (donc xA ≠ xB), son coefficient directeur vaut m = (yB - yA)/(xB - xA). Ce quotient mesure la variation de y divisée par la variation de x : c'est la même idée que la pente d'une route, exprimée comme un dénivelé divisé par une distance horizontale.",
                "Exemple : A(1 ; 3) et B(4 ; 9). On calcule m = (9 - 3)/(4 - 1) = 6/3 = 2. L'équation réduite s'écrit y = 2x + p. Comme A appartient à la droite, 3 = 2 × 1 + p, donc p = 1. La droite (AB) a pour équation y = 2x + 1. Contrôle avec B : 2 × 4 + 1 = 9.",
                "Si xA = xB, la droite (AB) est verticale, d'équation x = xA : le calcul de m est impossible, car on diviserait par 0. Un programme Python qui calcule (yB - yA)/(xB - xA) provoque d'ailleurs une erreur de division par zéro dans ce cas.",
              ],
              box: { label: "Formule", text: "Pour A(xA ; yA) et B(xB ; yB) avec xA ≠ xB, le coefficient directeur de (AB) est m = (yB - yA)/(xB - xA)." },
            },
            {
              heading: "Lire, tracer et vérifier",
              paragraphs: [
                "Pour tracer la droite d'équation y = mx + p, il suffit de placer deux de ses points, par exemple (0 ; p) et (1 ; m + p), ou deux points d'abscisses plus espacées pour gagner en précision. Inversement, sur un graphique, on lit p à l'intersection avec l'axe des ordonnées, puis m en avançant d'une unité vers la droite et en mesurant de combien on monte ou on descend.",
                "Un point appartient à une droite si et seulement si ses coordonnées vérifient l'équation. Par exemple, C(2 ; 7) n'appartient pas à la droite y = 2x + 1, car 2 × 2 + 1 = 5 ≠ 7 ; en revanche D(-1 ; -1) lui appartient, car 2 × (-1) + 1 = -1.",
              ],
            },
          ],
          keyPoints: [
            "Une équation cartésienne s'écrit ax + by + c = 0 ; u(-b ; a) est un vecteur directeur.",
            "M appartient à la droite passant par A de vecteur directeur u si et seulement si det(AM, u) = 0.",
            "Équation réduite : y = mx + p, avec m le coefficient directeur et p l'ordonnée à l'origine.",
            "Une droite parallèle à l'axe des ordonnées a une équation x = k et pas de coefficient directeur.",
            "Coefficient directeur de (AB) : m = (yB - yA)/(xB - xA), si xA ≠ xB.",
            "Un point appartient à une droite si et seulement si ses coordonnées vérifient son équation.",
          ],
          example: {
            statement: "Dans un repère, on donne A(-2 ; 5) et B(4 ; 2). Déterminez l'équation réduite de la droite (AB), puis une équation cartésienne et un vecteur directeur à coordonnées entières. Le point C(10 ; -1) appartient-il à (AB) ?",
            solution: [
              "Comme xA ≠ xB, la droite n'est pas verticale. Son coefficient directeur vaut m = (2 - 5)/(4 - (-2)) = -3/6 = -0,5.",
              "L'équation réduite est de la forme y = -0,5x + p. Avec A : 5 = -0,5 × (-2) + p = 1 + p, donc p = 4.",
              "La droite (AB) a pour équation réduite y = -0,5x + 4. Contrôle avec B : -0,5 × 4 + 4 = 2.",
              "En multipliant par 2 : 2y = -x + 8, soit x + 2y - 8 = 0, qui est une équation cartésienne de (AB).",
              "Un vecteur directeur est (-b ; a) = (-2 ; 1). Contrôle : AB(6 ; -3) = -3 × (-2 ; 1), les deux vecteurs sont bien colinéaires.",
              "Pour C : 10 + 2 × (-1) - 8 = 0. Les coordonnées vérifient l'équation, donc C appartient à (AB).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des droites suivantes, donnez le coefficient directeur et l'ordonnée à l'origine lorsqu'ils existent, puis dites si le point A(2 ; 1) appartient à la droite. d₁ : y = 3x - 5 ; d₂ : y = -x + 4 ; d₃ : y = 7 ; d₄ : x = 2.",
              hint: "Remplacez x par 2 dans chaque équation et comparez le résultat avec l'ordonnée 1. Pour d₄, l'équation ne contient pas y.",
              solution: [
                "d₁ : m = 3 et p = -5. On calcule 3 × 2 - 5 = 1 : A appartient à d₁.",
                "d₂ : m = -1 et p = 4. On calcule -2 + 4 = 2 ≠ 1 : A n'appartient pas à d₂.",
                "d₃ : m = 0 et p = 7 (droite horizontale). Tous ses points ont pour ordonnée 7 ≠ 1 : A n'appartient pas à d₃.",
                "d₄ : droite verticale, sans coefficient directeur ni ordonnée à l'origine. Tous ses points ont pour abscisse 2 : A appartient à d₄.",
              ],
            },
            {
              level: 2,
              statement: "a) Déterminez l'équation réduite de la droite (AB), avec A(1 ; -2) et B(3 ; 4). b) Déterminez une équation cartésienne de la droite d passant par C(-1 ; 2) et de vecteur directeur u(2 ; -5). c) Donnez l'équation réduite de d.",
              hint: "Pour b), écrivez les coordonnées du vecteur CM pour un point M(x ; y), puis traduisez det(CM, u) = 0.",
              solution: [
                "a) m = (4 - (-2))/(3 - 1) = 6/2 = 3. Avec A : -2 = 3 × 1 + p, donc p = -5. (AB) : y = 3x - 5. Contrôle avec B : 9 - 5 = 4.",
                "b) Pour M(x ; y), CM(x + 1 ; y - 2). det(CM, u) = (x + 1) × (-5) - (y - 2) × 2 = -5x - 5 - 2y + 4 = -5x - 2y - 1.",
                "M appartient à d si et seulement si -5x - 2y - 1 = 0, soit, en multipliant par -1 : 5x + 2y + 1 = 0.",
                "Contrôle avec C : 5 × (-1) + 2 × 2 + 1 = 0. Et le vecteur (-b ; a) = (-2 ; 5) est bien colinéaire à u(2 ; -5).",
                "c) 2y = -5x - 1, donc y = -2,5x - 0,5.",
              ],
            },
            {
              level: 3,
              statement: "Dans un repère, on considère les points A(-3 ; 1), B(1 ; 3) et C(5 ; 5), ainsi que la droite d d'équation 3x - 2y + 4 = 0. a) Déterminez l'équation réduite de (AB). b) Les points A, B et C sont-ils alignés ? c) Donnez un vecteur directeur de d, son équation réduite, puis les coordonnées de ses points d'intersection avec les axes. d) Un élève écrit la fonction Python def coef(xA, yA, xB, yB): return (yB - yA) / (xB - xA). Que renvoie coef(-3, 1, 1, 3) ? Dans quel cas cette fonction provoque-t-elle une erreur, et que signifie ce cas pour la droite ?",
              hint: "Pour b), regardez si C vérifie l'équation de (AB). Pour c), un point de l'axe des ordonnées a une abscisse nulle, un point de l'axe des abscisses a une ordonnée nulle.",
              solution: [
                "a) m = (3 - 1)/(1 - (-3)) = 2/4 = 0,5. Avec A : 1 = 0,5 × (-3) + p = -1,5 + p, donc p = 2,5. (AB) : y = 0,5x + 2,5. Contrôle avec B : 0,5 + 2,5 = 3.",
                "b) Pour C : 0,5 × 5 + 2,5 = 5, qui est bien l'ordonnée de C. Donc C appartient à (AB) : les points A, B et C sont alignés.",
                "c) Ici a = 3 et b = -2, donc (-b ; a) = (2 ; 3) est un vecteur directeur de d. En isolant y : 2y = 3x + 4, donc y = 1,5x + 2.",
                "Intersection avec l'axe des ordonnées (x = 0) : y = 2, point (0 ; 2). Intersection avec l'axe des abscisses (y = 0) : 1,5x + 2 = 0, donc x = -2/1,5 = -4/3, point (-4/3 ; 0).",
                "d) coef(-3, 1, 1, 3) renvoie (3 - 1)/(1 - (-3)) = 2/4 = 0.5, le coefficient directeur trouvé en a).",
                "La fonction provoque une erreur (division par zéro) lorsque xA = xB : la droite (AB) est alors parallèle à l'axe des ordonnées et n'a pas de coefficient directeur.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer l'équation réduite de la droite (AB).",
            items: [
              "Vérifier que xA ≠ xB (sinon la droite a pour équation x = xA)",
              "Calculer m = (yB - yA)/(xB - xA)",
              "Écrire l'équation sous la forme y = mx + p avec la valeur de m trouvée",
              "Remplacer x et y par les coordonnées de A pour obtenir une équation d'inconnue p",
              "Résoudre cette équation pour trouver p",
              "Vérifier que les coordonnées de B satisfont l'équation obtenue",
            ],
          },
          quiz: [
            { q: "Quel est le coefficient directeur de la droite passant par A(2 ; 1) et B(5 ; 10) ?", options: ["9", "1/3", "-3", "3"], answer: 3, why: "m = (10 - 1)/(5 - 2) = 9/3 = 3. Le quotient inversé donnerait 1/3." },
            { q: "Quelle droite a pour ordonnée à l'origine -2 ?", options: ["y = -2x + 5", "y = 4x - 2", "x = -2", "y = 2x + 2"], answer: 1, why: "Dans y = mx + p, l'ordonnée à l'origine est p : ici p = -2 pour y = 4x - 2." },
            { q: "Un vecteur directeur de la droite d'équation 2x - 5y + 1 = 0 est :", options: ["(2 ; -5)", "(-5 ; 2)", "(5 ; 2)", "(1 ; 2)"], answer: 2, why: "Pour ax + by + c = 0, le vecteur (-b ; a) convient : ici (5 ; 2)." },
            { q: "La droite d'équation x = 4 :", options: ["est parallèle à l'axe des ordonnées", "a pour coefficient directeur 4", "passe par l'origine du repère", "est parallèle à l'axe des abscisses"], answer: 0, why: "Tous ses points ont pour abscisse 4 : elle est verticale et n'a pas de coefficient directeur." },
            { q: "Le point C(3 ; 2) appartient à la droite d'équation :", options: ["y = 2x - 3", "y = -x + 4", "y = x - 1", "x + y = 6"], answer: 2, why: "3 - 1 = 2 : les coordonnées de C vérifient y = x - 1, et aucune autre équation proposée." },
          ],
          trap: "Inverser le quotient en calculant (xB - xA)/(yB - yA) au lieu de (yB - yA)/(xB - xA), ou croire que la droite d'équation x = k a pour coefficient directeur k, alors qu'elle n'en a pas.",
          method: "Après avoir trouvé une équation de droite, vérifiez-la en remplaçant x et y par les coordonnées des deux points connus : chacun doit rendre l'égalité vraie. Cette vérification prend quelques secondes et détecte presque toutes les erreurs de signe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'droites-paralleles',
          title: "Droites parallèles et droites sécantes",
          minutes: 30,
          objectives: [
            "Caractériser le parallélisme de deux droites par la colinéarité de leurs vecteurs directeurs.",
            "Reconnaître deux droites parallèles ou sécantes à partir de leurs équations réduites ou cartésiennes.",
            "Déterminer une équation de la parallèle à une droite donnée passant par un point.",
            "Utiliser le parallélisme pour démontrer une propriété géométrique, par exemple qu'un quadrilatère est un parallélogramme.",
          ],
          course: [
            {
              heading: "Le critère des vecteurs directeurs",
              paragraphs: [
                "Deux droites du plan sont soit parallèles, soit sécantes (elles se coupent alors en un seul point). Deux droites parallèles peuvent être strictement parallèles (aucun point commun) ou confondues (tous leurs points sont communs). Deux droites sont parallèles si et seulement si elles ont la même direction, c'est-à-dire si leurs vecteurs directeurs sont colinéaires.",
                "On teste la colinéarité avec le déterminant : pour u(x ; y) et v(x' ; y'), det(u, v) = xy' - yx'. Les droites sont parallèles si det(u, v) = 0 et sécantes si det(u, v) ≠ 0. Exemple : u(2 ; 3) et v(4 ; 6) donnent det = 2 × 6 - 3 × 4 = 0, donc des droites parallèles.",
                "Avec des équations cartésiennes ax + by + c = 0 et a'x + b'y + c' = 0, les vecteurs directeurs sont (-b ; a) et (-b' ; a'). Leur déterminant vaut (-b)a' - a(-b') = ab' - a'b. Les droites sont donc parallèles si et seulement si ab' - a'b = 0.",
              ],
              box: { label: "Propriété", text: "Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires. Avec ax + by + c = 0 et a'x + b'y + c' = 0 : parallèles si ab' - a'b = 0, sécantes si ab' - a'b ≠ 0." },
            },
            {
              heading: "Le critère des équations réduites",
              paragraphs: [
                "Pour deux droites non verticales d'équations y = mx + p et y = m'x + p', le critère devient très simple : elles sont parallèles si et seulement si m = m'. En effet, (1 ; m) et (1 ; m') sont des vecteurs directeurs, de déterminant 1 × m' - m × 1 = m' - m. Si de plus p = p', les droites sont confondues ; si p ≠ p', elles sont strictement parallèles.",
                "Si m ≠ m', les droites sont sécantes. Attention : avoir la même ordonnée à l'origine ne rend pas deux droites parallèles. Les droites y = 2x + 5 et y = -2x + 5 se coupent au point (0 ; 5), précisément parce qu'elles ont le même p et des coefficients directeurs différents.",
                "Les droites verticales se traitent à part : deux droites d'équations x = k et x = k' sont toujours parallèles (confondues si k = k'). Une droite verticale et une droite non verticale sont toujours sécantes, même si la seconde a une pente très grande.",
              ],
              box: { label: "À retenir", text: "y = mx + p et y = m'x + p' sont parallèles si et seulement si m = m' ; confondues si de plus p = p'. Si m ≠ m', elles sont sécantes." },
            },
            {
              heading: "Construire une parallèle et démontrer",
              paragraphs: [
                "Pour obtenir l'équation de la parallèle à une droite d passant par un point A, on garde la direction de d et on ajuste la constante. Exemple : parallèle à y = -2x + 3 passant par A(1 ; 4). Elle a pour équation y = -2x + p, et 4 = -2 × 1 + p donne p = 6 : y = -2x + 6.",
                "Avec une équation cartésienne, on garde a et b. Exemple : parallèle à 3x - y + 2 = 0 passant par B(2 ; -1). Elle a une équation 3x - y + c = 0, et 3 × 2 - (-1) + c = 0 donne c = -7 : 3x - y - 7 = 0.",
                "Le parallélisme sert à démontrer. Pour prouver qu'un quadrilatère ABCD est un parallélogramme, on peut montrer que (AB) est parallèle à (DC) et que (AD) est parallèle à (BC), en comparant les coefficients directeurs, à condition que les quatre points ne soient pas alignés. Pour prouver que trois points sont alignés, on montre que deux des droites qu'ils définissent ont le même coefficient directeur et un point commun.",
              ],
            },
          ],
          keyPoints: [
            "Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires.",
            "ax + by + c = 0 et a'x + b'y + c' = 0 sont parallèles si et seulement si ab' - a'b = 0.",
            "y = mx + p et y = m'x + p' sont parallèles si et seulement si m = m' ; confondues si de plus p = p'.",
            "Des droites confondues sont parallèles ; des droites de pentes différentes sont sécantes.",
            "La parallèle à y = mx + p passant par A a pour équation y = mx + p', p' étant calculé avec A.",
          ],
          example: {
            statement: "Les droites d : 4x - 6y + 1 = 0 et d' : -2x + 3y + 5 = 0 sont-elles parallèles ? Si oui, sont-elles confondues ou strictement parallèles ?",
            solution: [
              "On a a = 4, b = -6, a' = -2, b' = 3. On calcule ab' - a'b = 4 × 3 - (-2) × (-6) = 12 - 12 = 0 : les droites sont parallèles.",
              "Pour savoir si elles sont confondues, on prend un point de d' et on teste s'il est sur d. Pour x = 0 dans d' : 3y + 5 = 0, donc y = -5/3. Le point (0 ; -5/3) est sur d'.",
              "On remplace dans l'équation de d : 4 × 0 - 6 × (-5/3) + 1 = 10 + 1 = 11 ≠ 0. Ce point n'est pas sur d.",
              "Contrôle par les équations réduites : d s'écrit y = (2/3)x + 1/6 et d' s'écrit y = (2/3)x - 5/3. Même coefficient directeur, ordonnées à l'origine différentes.",
              "Conclusion : d et d' sont strictement parallèles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère les droites d₁ : y = 2x + 1 ; d₂ : y = -2x + 1 ; d₃ : y = 2x - 7 ; d₄ : y = 1 ; d₅ : 4x - 2y + 2 = 0. Indiquez les droites parallèles entre elles, en précisant si elles sont confondues ou strictement parallèles.",
              hint: "Écrivez d'abord d₅ sous forme réduite, puis comparez les coefficients directeurs et les ordonnées à l'origine.",
              solution: [
                "Équation réduite de d₅ : 2y = 4x + 2, donc y = 2x + 1. C'est la même équation que d₁ : d₁ et d₅ sont confondues.",
                "d₁ et d₃ ont le même coefficient directeur 2 mais des ordonnées à l'origine différentes (1 et -7) : elles sont strictement parallèles. Il en est de même pour d₃ et d₅.",
                "d₂ a pour coefficient directeur -2 et d₄ a pour coefficient directeur 0 : ces valeurs sont différentes entre elles et différentes de 2.",
                "Conclusion : d₁ et d₅ sont confondues, elles sont strictement parallèles à d₃ ; d₂ et d₄ sont sécantes à toutes les autres droites.",
              ],
            },
            {
              level: 2,
              statement: "a) Déterminez l'équation réduite de la parallèle à d : y = 0,5x - 3 passant par A(-4 ; 2). b) Déterminez une équation cartésienne de la parallèle à d' : 2x + 5y - 1 = 0 passant par B(3 ; 1). c) Pour quelle valeur du réel k la droite d'équation y = (k - 1)x + 2 est-elle parallèle à la droite d'équation y = 3x - 4 ?",
              hint: "Une parallèle garde le même coefficient directeur (ou les mêmes coefficients a et b) ; seule la constante change, et on la calcule avec le point donné.",
              solution: [
                "a) La parallèle a une équation y = 0,5x + p. Avec A : 2 = 0,5 × (-4) + p = -2 + p, donc p = 4. Équation : y = 0,5x + 4.",
                "b) La parallèle a une équation 2x + 5y + c = 0. Avec B : 2 × 3 + 5 × 1 + c = 0, soit 11 + c = 0, donc c = -11. Équation : 2x + 5y - 11 = 0.",
                "Contrôle : B vérifie 6 + 5 - 11 = 0, et c = -11 ≠ -1, donc cette droite est bien distincte de d'.",
                "c) Les droites sont parallèles si et seulement si leurs coefficients directeurs sont égaux : k - 1 = 3, donc k = 4.",
              ],
            },
            {
              level: 3,
              statement: "Dans un repère, on donne A(0 ; 1), B(4 ; 3), C(5 ; -1) et D(1 ; -3). a) Calculez les coefficients directeurs des droites (AB), (DC), (AD) et (BC). b) Démontrez que ABCD est un parallélogramme. c) Contrôlez ce résultat en comparant les vecteurs AB et DC. d) Pour quelle valeur du réel k la droite d'équation kx + 2y - 3 = 0 est-elle parallèle à (AB) ?",
              hint: "Pour b), un quadrilatère dont les côtés opposés sont parallèles deux à deux est un parallélogramme, à condition que ses sommets ne soient pas alignés. Pour d), utilisez le vecteur directeur (-b ; a) et le déterminant.",
              solution: [
                "a) m(AB) = (3 - 1)/(4 - 0) = 0,5 ; m(DC) = (-1 - (-3))/(5 - 1) = 2/4 = 0,5 ; m(AD) = (-3 - 1)/(1 - 0) = -4 ; m(BC) = (-1 - 3)/(5 - 4) = -4.",
                "b) (AB) et (DC) ont le même coefficient directeur 0,5 : elles sont parallèles. (AD) et (BC) ont le même coefficient directeur -4 : elles sont parallèles.",
                "Comme 0,5 ≠ -4, les droites (AB) et (AD) sont sécantes en A : les points A, B et D ne sont pas alignés. Les côtés opposés de ABCD sont parallèles deux à deux, donc ABCD est un parallélogramme.",
                "c) AB(4 - 0 ; 3 - 1) = (4 ; 2) et DC(5 - 1 ; -1 - (-3)) = (4 ; 2). Les vecteurs sont égaux, ce qui caractérise aussi le parallélogramme ABCD.",
                "d) Un vecteur directeur de la droite kx + 2y - 3 = 0 est (-2 ; k). Elle est parallèle à (AB) si det((-2 ; k), (4 ; 2)) = 0, soit -2 × 2 - k × 4 = 0, donc -4 - 4k = 0 et k = -1.",
                "Contrôle : pour k = -1, -x + 2y - 3 = 0 s'écrit y = 0,5x + 1,5, de coefficient directeur 0,5.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Parallèles ou sécantes ? Dites si chaque affirmation est vraie ou fausse.",
            statements: [
              { text: "Les droites d'équations y = 3x + 1 et y = 3x - 4 sont parallèles.", true: true, why: "Elles ont le même coefficient directeur 3 et des ordonnées à l'origine différentes : elles sont strictement parallèles." },
              { text: "Deux droites confondues sont considérées comme parallèles.", true: true, why: "Elles ont la même direction ; « confondues » est un cas particulier de « parallèles »." },
              { text: "Les droites y = 2x + 5 et y = -2x + 5 sont parallèles, car elles ont la même ordonnée à l'origine.", true: false, why: "Leurs coefficients directeurs diffèrent : elles se coupent au point (0 ; 5)." },
              { text: "Les droites d'équations x = 3 et x = -1 sont parallèles.", true: true, why: "Ce sont deux droites verticales, toutes deux parallèles à l'axe des ordonnées." },
              { text: "Les droites 2x + y - 1 = 0 et 4x + 2y + 3 = 0 sont sécantes.", true: false, why: "ab' - a'b = 2 × 2 - 4 × 1 = 0 : elles sont parallèles." },
              { text: "Si deux droites ont des vecteurs directeurs non colinéaires, elles sont sécantes.", true: true, why: "Des directions différentes imposent un unique point d'intersection." },
              { text: "Une droite verticale et la droite y = 1000x peuvent être parallèles.", true: false, why: "Une droite verticale est toujours sécante à une droite non verticale, quelle que soit sa pente." },
            ],
          },
          quiz: [
            { q: "Quelle droite est parallèle à la droite d'équation y = -4x + 7 ?", options: ["y = -4x - 1", "y = 4x + 7", "y = 7x - 4", "y = -x/4 + 7"], answer: 0, why: "Elle a le même coefficient directeur -4 ; une ordonnée à l'origine identique ne suffit pas." },
            { q: "Les droites 3x - y + 2 = 0 et 6x - 2y + 4 = 0 sont :", options: ["sécantes en un seul point", "strictement parallèles", "confondues", "perpendiculaires"], answer: 2, why: "La seconde équation est la première multipliée par 2 : elles décrivent la même droite." },
            { q: "Deux droites de vecteurs directeurs u(2 ; 3) et v(4 ; 6) sont :", options: ["sécantes en un point unique de coordonnées positives", "parallèles ou confondues", "perpendiculaires"], answer: 1, why: "det(u, v) = 2 × 6 - 3 × 4 = 0 : les vecteurs sont colinéaires, les droites sont parallèles." },
            { q: "La parallèle à y = 2x + 1 passant par A(1 ; 5) a pour équation :", options: ["y = 2x + 5", "y = x + 4", "y = 5x + 1", "y = 2x + 3"], answer: 3, why: "On garde m = 2 et on calcule p avec A : 5 = 2 + p, donc p = 3." },
            { q: "Pour quelle valeur de k la droite y = kx + 1 est-elle parallèle à la droite 6x - 3y + 2 = 0 ?", options: ["k = 6", "k = 2", "k = -3", "k = -2"], answer: 1, why: "6x - 3y + 2 = 0 s'écrit y = 2x + 2/3, de coefficient directeur 2." },
          ],
          trap: "Conclure au parallélisme parce que les ordonnées à l'origine sont égales, alors que c'est le coefficient directeur qui décide, ou oublier de distinguer « strictement parallèles » et « confondues ».",
          method: "Mettez d'abord les deux équations sous la même forme (réduite ou cartésienne), comparez les coefficients directeurs ou calculez ab' - a'b, puis testez un point de l'une dans l'équation de l'autre pour trancher entre strictement parallèles et confondues.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'intersection-droites',
          title: "Déterminer le point d'intersection de deux droites",
          minutes: 35,
          objectives: [
            "Traduire la recherche du point d'intersection de deux droites par un système de deux équations linéaires à deux inconnues.",
            "Résoudre un système par substitution ou par combinaison linéaire.",
            "Interpréter graphiquement le nombre de solutions d'un système (aucune, une seule, une infinité).",
            "Modéliser un problème concret par un système et interpréter sa solution.",
          ],
          course: [
            {
              heading: "Intersection et système d'équations",
              paragraphs: [
                "Un point M(x ; y) appartient à deux droites d et d' si et seulement si ses coordonnées vérifient les deux équations à la fois. Chercher le point d'intersection revient donc à résoudre un système de deux équations linéaires à deux inconnues, que l'on note avec une accolade : ax + by = c et a'x + b'y = c'. Une solution est un couple (x ; y) qui vérifie les deux équations.",
                "Trois cas se présentent. Si les droites sont sécantes (ab' - a'b ≠ 0), le système a une solution unique : les coordonnées du point d'intersection. Si elles sont strictement parallèles, le système n'a aucune solution. Si elles sont confondues, il a une infinité de solutions : les coordonnées de tous les points de la droite.",
                "Avant de calculer, il est donc utile de vérifier que ab' - a'b ≠ 0 : on sait alors qu'on doit trouver exactement un couple solution. Si l'on trouve une contradiction (comme 0 = 7), c'est le signe que les droites sont strictement parallèles.",
              ],
              box: { label: "Propriété", text: "Le système ax + by = c, a'x + b'y = c' admet une unique solution si et seulement si ab' - a'b ≠ 0. Cette solution est le couple des coordonnées du point d'intersection des deux droites." },
            },
            {
              heading: "La méthode par substitution",
              paragraphs: [
                "Lorsque les deux équations sont sous forme réduite, on égalise les deux expressions de y. Exemple : y = 2x - 1 et y = -x + 5. On écrit 2x - 1 = -x + 5, donc 3x = 6 et x = 2. On en déduit y = 2 × 2 - 1 = 3. Contrôle dans la seconde équation : -2 + 5 = 3. Le point d'intersection est (2 ; 3).",
                "Plus généralement, on exprime une inconnue en fonction de l'autre dans l'une des équations, puis on remplace (on substitue) dans l'autre. Exemple : x + 2y = 7 et 3x - y = 7. La première donne x = 7 - 2y. En remplaçant : 3(7 - 2y) - y = 7, soit 21 - 7y = 7, donc y = 2, puis x = 7 - 4 = 3. Contrôle : 3 × 3 - 2 = 7. La solution est (3 ; 2).",
              ],
              box: { label: "Méthode", text: "Substitution : isoler une inconnue dans une équation (de préférence celle dont le coefficient vaut 1 ou -1), la remplacer dans l'autre équation, résoudre, puis calculer la seconde inconnue." },
            },
            {
              heading: "La méthode par combinaison linéaire",
              paragraphs: [
                "Lorsque aucune inconnue n'a de coefficient simple, on multiplie les équations par des nombres bien choisis pour que les coefficients d'une inconnue deviennent opposés, puis on additionne : cette inconnue disparaît. Exemple : 2x + 3y = 8 et 5x - 2y = 1. On multiplie la première par 2 et la seconde par 3 : 4x + 6y = 16 et 15x - 6y = 3.",
                "En additionnant membre à membre, on obtient 19x = 19, donc x = 1. On remplace dans la première équation : 2 + 3y = 8, donc y = 2. Contrôle dans la seconde : 5 × 1 - 2 × 2 = 1. La solution est (1 ; 2).",
                "Cette méthode s'applique à tous les systèmes. Si, après combinaison, les deux inconnues disparaissent, on obtient soit une égalité toujours vraie (0 = 0 : droites confondues), soit une égalité impossible (0 = 5 : droites strictement parallèles).",
              ],
            },
            {
              heading: "Interpréter et modéliser",
              paragraphs: [
                "Graphiquement, on peut lire une valeur approchée du point d'intersection en traçant les deux droites ; le calcul donne la valeur exacte. Les deux approches se contrôlent mutuellement : un point trouvé par le calcul doit être cohérent avec la figure.",
                "Les systèmes modélisent de nombreuses situations : comparer deux tarifs, retrouver deux quantités connaissant leur somme et une autre relation, déterminer le moment où deux grandeurs deviennent égales. Il faut alors bien définir les inconnues (avec leur unité), écrire les deux équations, résoudre, puis rédiger une conclusion qui répond à la question posée.",
              ],
              box: { label: "À retenir", text: "Une solution doit toujours être vérifiée dans les deux équations. Dans un problème, la réponse est une phrase qui donne le sens concret des valeurs trouvées." },
            },
          ],
          keyPoints: [
            "Le point d'intersection a des coordonnées qui vérifient les deux équations : on résout un système.",
            "ab' - a'b ≠ 0 : une solution unique ; droites parallèles : aucune solution ou une infinité.",
            "Substitution : isoler une inconnue et la remplacer dans l'autre équation.",
            "Combinaison : rendre opposés les coefficients d'une inconnue, puis additionner.",
            "Toujours vérifier le couple trouvé dans les deux équations.",
          ],
          example: {
            statement: "Déterminez, s'il existe, le point d'intersection des droites d : 2x - y - 3 = 0 et d' : x + 3y - 5 = 0.",
            solution: [
              "On calcule ab' - a'b = 2 × 3 - 1 × (-1) = 6 + 1 = 7 ≠ 0 : les droites sont sécantes, il y a un unique point d'intersection.",
              "Dans l'équation de d, le coefficient de y vaut -1 : on isole y, ce qui donne y = 2x - 3.",
              "On remplace dans d' : x + 3(2x - 3) - 5 = 0, soit x + 6x - 9 - 5 = 0, donc 7x = 14 et x = 2.",
              "On en déduit y = 2 × 2 - 3 = 1.",
              "Vérification dans d' : 2 + 3 × 1 - 5 = 0. Vérification dans d : 4 - 1 - 3 = 0.",
              "Conclusion : les droites d et d' se coupent au point de coordonnées (2 ; 1).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminez le point d'intersection des droites d'équations y = 3x - 4 et y = -2x + 6.",
              hint: "Les deux équations donnent y : écrivez que les deux expressions sont égales.",
              solution: [
                "Les coefficients directeurs 3 et -2 sont différents : les droites sont sécantes.",
                "On résout 3x - 4 = -2x + 6, soit 5x = 10, donc x = 2.",
                "Alors y = 3 × 2 - 4 = 2. Contrôle : -2 × 2 + 6 = 2.",
                "Le point d'intersection est (2 ; 2).",
              ],
            },
            {
              level: 2,
              statement: "a) Résolvez par combinaison linéaire le système 3x + 2y = 4 et 2x - 3y = 7, puis interprétez le résultat en termes de droites. b) Résolvez le système x - 2y = 3 et -2x + 4y = 1. Que peut-on dire des droites correspondantes ?",
              hint: "Pour a), multipliez la première équation par 3 et la seconde par 2 pour éliminer y. Pour b), commencez par calculer ab' - a'b.",
              solution: [
                "a) En multipliant la première équation par 3 et la seconde par 2 : 9x + 6y = 12 et 4x - 6y = 14.",
                "En additionnant : 13x = 26, donc x = 2. Dans la première équation : 6 + 2y = 4, donc y = -1.",
                "Contrôle dans la seconde : 2 × 2 - 3 × (-1) = 4 + 3 = 7. Le système a pour unique solution (2 ; -1) : les deux droites se coupent au point (2 ; -1).",
                "b) ab' - a'b = 1 × 4 - (-2) × (-2) = 4 - 4 = 0 : les droites sont parallèles.",
                "En multipliant la première équation par 2 et en l'ajoutant à la seconde : 2x - 4y - 2x + 4y = 6 + 1, soit 0 = 7, ce qui est impossible.",
                "Le système n'a aucune solution : les droites sont strictement parallèles.",
              ],
            },
            {
              level: 3,
              statement: "Une salle de sport propose trois formules (données fictives). Formule A : 30 € d'inscription, puis 6 € par séance. Formule B : 12 € par séance, sans inscription. Formule C : un forfait de 90 € pour un nombre illimité de séances. On note x le nombre de séances. a) Exprimez le coût A(x) et le coût B(x). b) Pour quel nombre de séances les formules A et B coûtent-elles le même prix ? Quel est ce prix ? c) Pour quels nombres de séances la formule A est-elle plus avantageuse que la formule B ? d) À partir de combien de séances la formule C est-elle strictement la moins chère des trois ?",
              hint: "Les coûts A(x) et B(x) sont des fonctions affines ; leurs courbes sont des droites dont il faut chercher l'intersection. Pour d), cherchez quand A(x) dépasse 90.",
              solution: [
                "a) A(x) = 6x + 30 et B(x) = 12x, pour x entier naturel.",
                "b) On résout 12x = 6x + 30, soit 6x = 30, donc x = 5. Alors A(5) = B(5) = 60 : pour 5 séances, les deux formules coûtent 60 €.",
                "c) A(x) < B(x) équivaut à 6x + 30 < 12x, soit 30 < 6x, donc x > 5. La formule A est plus avantageuse que B à partir de 6 séances. Contrôle : A(6) = 66 € et B(6) = 72 €.",
                "d) Au-delà de 5 séances, la moins chère de A et B est A. On résout A(x) = 90 : 6x + 30 = 90, donc x = 10. Pour 10 séances, A et C coûtent 90 €.",
                "Pour x > 10, A(x) > 90 et B(x) > A(x) : la formule C est strictement la moins chère. Contrôle : A(11) = 96 € et B(11) = 132 €.",
                "Conclusion : jusqu'à 4 séances, B est la moins chère ; à 5 séances, A et B se valent ; de 6 à 9 séances, A est la moins chère ; à 10 séances, A et C se valent ; à partir de 11 séances, C est strictement la moins chère.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque système à son ensemble de solutions.",
            pairs: [
              { left: "y = x + 1 et y = -x + 3", right: "(1 ; 2)" },
              { left: "x + y = 5 et x - y = 1", right: "(3 ; 2)" },
              { left: "y = 2x + 1 et y = 2x - 3", right: "Aucune solution : droites strictement parallèles" },
              { left: "x - y = 2 et 2x - 2y = 4", right: "Une infinité de solutions : droites confondues" },
              { left: "2x + y = 0 et x = 1", right: "(1 ; -2)" },
              { left: "y = 3 et y = x - 1", right: "(4 ; 3)" },
            ],
          },
          quiz: [
            { q: "Le point d'intersection des droites y = 2x et y = -x + 6 est :", options: ["(4 ; 2)", "(2 ; 4)", "(6 ; 12)", "(3 ; 3)"], answer: 1, why: "2x = -x + 6 donne x = 2, puis y = 4 ; attention à l'ordre des coordonnées (x ; y)." },
            { q: "Un système dont les deux droites sont strictement parallèles a :", options: ["aucune solution", "une seule solution", "deux solutions", "une infinité de solutions"], answer: 0, why: "Des droites strictement parallèles n'ont aucun point commun." },
            { q: "Pour le système 2x + 3y = 1 et 4x + 6y = 5, le nombre ab' - a'b vaut :", options: ["12", "-12", "0", "5"], answer: 2, why: "2 × 6 - 4 × 3 = 12 - 12 = 0 : les droites sont parallèles." },
            { q: "Dans le système x + y = 10 et x - y = 4, en additionnant les deux équations, on obtient :", options: ["2y = 14", "x = 14", "2x = 6", "2x = 14"], answer: 3, why: "y et -y s'éliminent : x + x = 10 + 4, soit 2x = 14, d'où x = 7 et y = 3." },
            { q: "Le couple (1 ; 3) est-il solution du système 2x + y = 5 et x - y = -2 ?", options: ["Oui, il vérifie les deux équations", "Non, il ne vérifie que la première", "Non, il ne vérifie que la seconde", "Non, il n'en vérifie aucune"], answer: 0, why: "2 × 1 + 3 = 5 et 1 - 3 = -2 : les deux égalités sont vraies." },
          ],
          trap: "S'arrêter après avoir trouvé x en oubliant de calculer y, ou donner un couple sans le vérifier dans les deux équations, ce qui laisse passer une erreur de signe.",
          method: "Choisissez la méthode selon la forme : égalisez les deux expressions de y si les équations sont réduites, substituez si une inconnue a pour coefficient 1 ou -1, combinez sinon. Terminez toujours en remplaçant le couple trouvé dans les deux équations.",
        },
      ],
    },
    /* ================================================================== */
    /* FONCTIONS DE RÉFÉRENCE ET SIGNE                                      */
    /* ================================================================== */
    {
      id: 'fonctions-reference',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-affines',
          title: "Fonctions affines : variations et signe",
          minutes: 30,
          objectives: [
            "Reconnaître une fonction affine et interpréter son coefficient directeur comme un taux de variation.",
            "Relier le sens de variation d'une fonction affine au signe de son coefficient directeur.",
            "Déterminer le signe d'une fonction affine et dresser son tableau de signes.",
            "Déterminer l'expression d'une fonction affine à partir de deux images.",
          ],
          course: [
            {
              heading: "Définition et taux de variation",
              paragraphs: [
                "Une fonction affine est une fonction définie sur ℝ par f(x) = mx + p, où m et p sont deux réels fixés. Sa courbe représentative est la droite d'équation y = mx + p : m est son coefficient directeur et p son ordonnée à l'origine, car f(0) = p. Lorsque p = 0, la fonction f(x) = mx est linéaire (elle traduit une situation de proportionnalité) ; lorsque m = 0, la fonction f(x) = p est constante.",
                "Pour deux réels distincts a et b, on a f(b) - f(a) = m(b - a), donc (f(b) - f(a))/(b - a) = m. Ce quotient s'appelle le taux de variation de f entre a et b : pour une fonction affine, il est le même quels que soient a et b. Autrement dit, les accroissements de f(x) sont proportionnels aux accroissements de x. Exemple : pour f(x) = 3x - 2, f(5) - f(1) = 13 - 1 = 12 = 3 × (5 - 1).",
                "Concrètement, une situation est modélisée par une fonction affine quand une grandeur augmente (ou diminue) toujours de la même quantité pour chaque unité supplémentaire : un forfait de téléphone avec un coût fixe et un prix par minute, un réservoir qui se vide à débit constant, etc.",
              ],
              box: { label: "Définition", text: "f est affine si f(x) = mx + p pour tout réel x. Pour tous réels a ≠ b, (f(b) - f(a))/(b - a) = m : le taux de variation d'une fonction affine est constant, égal à m." },
            },
            {
              heading: "Sens de variation",
              paragraphs: [
                "Soient a < b. Comme f(b) - f(a) = m(b - a) et b - a > 0, la différence f(b) - f(a) a le signe de m. On en déduit : si m > 0, f est strictement croissante sur ℝ ; si m < 0, f est strictement décroissante sur ℝ ; si m = 0, f est constante sur ℝ.",
                "Le terme constant p ne joue aucun rôle dans le sens de variation : f(x) = -2x + 100 est décroissante malgré le « + 100 », et g(x) = 0,1x - 50 est croissante malgré le « - 50 ». Graphiquement, une droite de coefficient directeur positif monte de gauche à droite, une droite de coefficient directeur négatif descend.",
              ],
              box: { label: "Propriété", text: "f(x) = mx + p est strictement croissante sur ℝ si m > 0, strictement décroissante sur ℝ si m < 0, constante si m = 0." },
            },
            {
              heading: "Signe d'une fonction affine",
              paragraphs: [
                "Si m ≠ 0, l'équation mx + p = 0 a une unique solution x₀ = -p/m, appelée zéro de f (ou racine). C'est l'abscisse du point où la droite coupe l'axe des abscisses. Comme f est monotone, elle change de signe en x₀ et seulement en x₀.",
                "Si m > 0, f est croissante : f(x) < 0 pour x < x₀ et f(x) > 0 pour x > x₀. Si m < 0, c'est l'inverse : f(x) > 0 pour x < x₀ et f(x) < 0 pour x > x₀. Un moyen mnémotechnique : on écrit à droite du zéro le signe de m, et à gauche le signe contraire.",
                "Exemple : f(x) = -2x + 6. Le zéro est x₀ = -6/(-2) = 3 et m = -2 < 0. Donc f(x) > 0 sur ]-∞ ; 3[, f(3) = 0 et f(x) < 0 sur ]3 ; +∞[. Dans un tableau de signes, on écrit sur la première ligne -∞, 3, +∞, et sur la seconde le signe +, puis 0 sous le 3, puis le signe -. Contrôle avec une valeur test : f(0) = 6 > 0.",
              ],
              box: { label: "Règle", text: "Pour f(x) = mx + p avec m ≠ 0 : f s'annule en x₀ = -p/m ; f(x) a le signe de m pour x > x₀ et le signe contraire de m pour x < x₀." },
            },
            {
              heading: "Retrouver une fonction affine à partir de deux images",
              paragraphs: [
                "Si l'on connaît deux images f(x₁) et f(x₂) avec x₁ ≠ x₂, on calcule d'abord m = (f(x₂) - f(x₁))/(x₂ - x₁), puis p à l'aide de l'une des deux images. Exemple : f(2) = 5 et f(6) = -3. On a m = (-3 - 5)/(6 - 2) = -8/4 = -2. Puis 5 = -2 × 2 + p, donc p = 9. Ainsi f(x) = -2x + 9. Contrôle : f(6) = -12 + 9 = -3.",
              ],
            },
          ],
          keyPoints: [
            "f(x) = mx + p : m est le coefficient directeur, p = f(0) l'ordonnée à l'origine.",
            "Le taux de variation d'une fonction affine est constant : (f(b) - f(a))/(b - a) = m.",
            "m > 0 : f strictement croissante ; m < 0 : strictement décroissante ; m = 0 : constante.",
            "Zéro de f : x₀ = -p/m. À droite du zéro, f(x) a le signe de m ; à gauche, le signe contraire.",
            "Avec deux images : m = (f(x₂) - f(x₁))/(x₂ - x₁), puis p grâce à une image.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = -4x + 10. Donnez son sens de variation, dressez son tableau de signes, puis résolvez l'inéquation f(x) > 0.",
            solution: [
              "Le coefficient directeur est m = -4 < 0 : f est strictement décroissante sur ℝ.",
              "Zéro : -4x + 10 = 0 équivaut à x = 10/4 = 2,5.",
              "Comme m < 0, f(x) est positive à gauche du zéro et négative à droite. Tableau de signes : sur la ligne des x, -∞, 2,5, +∞ ; sur la ligne de f(x), +, puis 0, puis -.",
              "Contrôle avec des valeurs tests : f(0) = 10 > 0 et f(3) = -2 < 0.",
              "f(x) > 0 équivaut à x < 2,5 : l'ensemble des solutions est S = ]-∞ ; 2,5[.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des fonctions suivantes, définies sur ℝ, donnez le sens de variation, le zéro et le tableau de signes : f(x) = 5x - 15 ; g(x) = -x + 2 ; h(x) = 0,5x.",
              hint: "Lisez le signe du coefficient de x, résolvez l'équation « expression = 0 », puis appliquez la règle : signe de m à droite du zéro.",
              solution: [
                "f : m = 5 > 0, donc f est strictement croissante. Zéro : 5x - 15 = 0 donne x = 3. Signes : f(x) < 0 sur ]-∞ ; 3[, f(3) = 0, f(x) > 0 sur ]3 ; +∞[.",
                "g : m = -1 < 0, donc g est strictement décroissante. Zéro : -x + 2 = 0 donne x = 2. Signes : g(x) > 0 sur ]-∞ ; 2[, g(2) = 0, g(x) < 0 sur ]2 ; +∞[.",
                "h : m = 0,5 > 0, donc h est strictement croissante. Zéro : 0,5x = 0 donne x = 0. Signes : h(x) < 0 sur ]-∞ ; 0[, h(0) = 0, h(x) > 0 sur ]0 ; +∞[.",
              ],
            },
            {
              level: 2,
              statement: "Une fonction affine f vérifie f(-1) = 7 et f(3) = -1. a) Déterminez l'expression de f(x). b) Dressez le tableau de signes de f. c) Résolvez l'inéquation f(x) ≤ 0.",
              hint: "Calculez m avec les deux images, puis p avec l'une d'elles. Vérifiez votre expression avec l'autre image.",
              solution: [
                "a) m = (f(3) - f(-1))/(3 - (-1)) = (-1 - 7)/4 = -8/4 = -2. Avec f(-1) = 7 : -2 × (-1) + p = 7, soit 2 + p = 7, donc p = 5.",
                "Ainsi f(x) = -2x + 5. Contrôle : f(3) = -6 + 5 = -1.",
                "b) Zéro : -2x + 5 = 0 donne x = 2,5. Comme m = -2 < 0 : f(x) > 0 sur ]-∞ ; 2,5[, f(2,5) = 0 et f(x) < 0 sur ]2,5 ; +∞[.",
                "c) f(x) ≤ 0 équivaut à x ≥ 2,5 : S = [2,5 ; +∞[. Le crochet est fermé en 2,5, car l'inégalité est large.",
              ],
            },
            {
              level: 3,
              statement: "Une compagnie de taxis facture 4 € la prise en charge, puis 1,50 € par kilomètre parcouru ; une seconde compagnie facture 2,10 € par kilomètre, sans prise en charge (données fictives). On note x la distance parcourue, en km, et C(x) et D(x) les prix respectifs, en euros. a) Exprimez C(x) et D(x) et précisez le sens de variation de C. b) Avec un budget de 25 €, quelle distance maximale peut-on parcourir avec la première compagnie ? c) Étudiez le signe de D(x) - C(x) selon les valeurs de x ≥ 0. d) Déduisez-en la compagnie la plus avantageuse selon la distance.",
              hint: "D(x) - C(x) est encore une fonction affine : calculez son zéro et utilisez la règle des signes.",
              solution: [
                "a) C(x) = 1,5x + 4 et D(x) = 2,1x. Le coefficient de C est 1,5 > 0 : C est croissante, le prix augmente avec la distance.",
                "b) On résout C(x) ≤ 25 : 1,5x + 4 ≤ 25, soit 1,5x ≤ 21, donc x ≤ 14. On peut parcourir au plus 14 km.",
                "c) D(x) - C(x) = 2,1x - 1,5x - 4 = 0,6x - 4. Zéro : 0,6x = 4, donc x = 4/0,6 = 20/3 ≈ 6,67.",
                "Comme 0,6 > 0 : D(x) - C(x) < 0 pour 0 ≤ x < 20/3 et D(x) - C(x) > 0 pour x > 20/3.",
                "d) Pour une distance inférieure à 20/3 km (environ 6,67 km), D(x) < C(x) : la seconde compagnie est moins chère. Au-delà, la première compagnie est moins chère ; pour 20/3 km exactement, les prix sont égaux (14 €).",
                "Contrôle : pour 5 km, C = 11,50 € et D = 10,50 € ; pour 10 km, C = 19 € et D = 21 €.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Fonctions affines : vrai ou faux ?",
            statements: [
              { text: "La fonction f(x) = 7 - 2x est décroissante sur ℝ.", true: true, why: "Elle s'écrit f(x) = -2x + 7, de coefficient directeur -2 < 0." },
              { text: "La fonction f(x) = -3x + 1 est négative sur tout ℝ.", true: false, why: "Elle s'annule en 1/3 et elle est positive pour x < 1/3 : f(0) = 1." },
              { text: "Une fonction affine de coefficient directeur non nul change de signe exactement une fois.", true: true, why: "Elle est strictement monotone et s'annule en un seul point, x₀ = -p/m." },
              { text: "Si m > 0, la fonction x ↦ mx + p est négative à droite de son zéro.", true: false, why: "À droite du zéro, f(x) a le signe de m : elle est positive." },
              { text: "La fonction constante f(x) = -4 est une fonction affine.", true: true, why: "C'est le cas m = 0 et p = -4." },
              { text: "Pour f(x) = mx + p, on a toujours f(b) - f(a) = m(b - a).", true: true, why: "Les termes p s'éliminent : mb + p - ma - p = m(b - a)." },
              { text: "Le zéro de la fonction f(x) = 2x + 8 est 4.", true: false, why: "2x + 8 = 0 donne x = -4 ; f(4) = 16." },
            ],
          },
          quiz: [
            { q: "Quel est le sens de variation de f(x) = -0,2x + 100 sur ℝ ?", options: ["croissant, car 100 > 0", "constant", "décroissant, car -0,2 < 0", "croissant puis décroissant"], answer: 2, why: "Seul le coefficient de x décide du sens de variation ; ici il est négatif." },
            { q: "Le zéro de f(x) = 3x - 12 est :", options: ["-4", "12", "-12", "4"], answer: 3, why: "3x - 12 = 0 donne x = 12/3 = 4." },
            { q: "Sur quel intervalle f(x) = -2x + 6 est-elle strictement positive ?", options: ["]3 ; +∞[", "]-∞ ; 3[", "]-∞ ; 6[", "]-3 ; +∞["], answer: 1, why: "Le zéro est 3 et m < 0 : f est positive à gauche de 3." },
            { q: "Une fonction affine f vérifie f(0) = 4 et f(2) = 10. Alors :", options: ["f(x) = 3x + 4", "f(x) = 4x + 3", "f(x) = 6x + 4", "f(x) = 3x + 10"], answer: 0, why: "p = f(0) = 4 et m = (10 - 4)/(2 - 0) = 3." },
            { q: "Pour f(x) = mx + p avec m > 0, quel est le signe de f(x) à droite de son zéro ?", options: ["négatif", "nul", "celui de p", "positif"], answer: 3, why: "f est croissante : après s'être annulée, elle devient positive. À droite du zéro, on lit le signe de m." },
          ],
          trap: "Lire le sens de variation sur le terme constant (« + 6, donc croissante ») au lieu du coefficient de x, ou se tromper de signe en calculant le zéro : la solution de mx + p = 0 est -p/m, et non p/m.",
          method: "Pour le signe d'une fonction affine, calculez son zéro, placez-le dans le tableau, écrivez à sa droite le signe de m et à sa gauche le signe contraire, puis vérifiez avec une valeur test simple comme x = 0.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tableau-signes',
          title: "Étudier le signe d'une expression : le tableau de signes",
          minutes: 35,
          objectives: [
            "Étudier le signe d'un produit ou d'un quotient de facteurs du premier degré à l'aide d'un tableau de signes.",
            "Repérer les valeurs interdites d'un quotient et les signaler dans le tableau.",
            "Résoudre une inéquation en se ramenant à l'étude du signe d'une expression factorisée.",
          ],
          course: [
            {
              heading: "Le signe d'un produit",
              paragraphs: [
                "La règle des signes s'applique à un produit de deux facteurs : le produit de deux nombres de même signe est positif, celui de deux nombres de signes contraires est négatif. De plus, un produit est nul si et seulement si l'un au moins de ses facteurs est nul. Ainsi, pour connaître le signe de (2x - 6)(-x + 1), il suffit de connaître le signe de chaque facteur.",
                "Chaque facteur du premier degré ax + b (avec a ≠ 0) a un signe que l'on sait étudier : il s'annule en -b/a, prend le signe de a à droite de ce zéro et le signe contraire à gauche. Le tableau de signes rassemble ces informations sur une même grille, une ligne par facteur, puis une dernière ligne pour le produit.",
              ],
              box: { label: "Règle", text: "Un produit est positif si ses deux facteurs ont le même signe, négatif s'ils sont de signes contraires, et nul si et seulement si l'un des facteurs est nul." },
            },
            {
              heading: "Construire un tableau de signes",
              paragraphs: [
                "Exemple : signe de P(x) = (2x - 6)(-x + 1). Le facteur 2x - 6 s'annule en 3 ; le facteur -x + 1 s'annule en 1. Sur la première ligne du tableau, on écrit -∞, 1, 3, +∞, les zéros étant rangés dans l'ordre croissant. On trace un trait vertical sous chaque zéro.",
                "Ligne de 2x - 6 (coefficient 2 > 0) : - sur ]-∞ ; 1[, - sur ]1 ; 3[, 0 sous le 3, + sur ]3 ; +∞[. Ligne de -x + 1 (coefficient -1 < 0) : + sur ]-∞ ; 1[, 0 sous le 1, - sur ]1 ; 3[, - sur ]3 ; +∞[.",
                "Ligne du produit, colonne par colonne : sur ]-∞ ; 1[, (-) × (+) donne - ; sur ]1 ; 3[, (-) × (-) donne + ; sur ]3 ; +∞[, (+) × (-) donne -. On place un 0 sous 1 et sous 3. Conclusion : P(x) < 0 sur ]-∞ ; 1[ ∪ ]3 ; +∞[, P(x) > 0 sur ]1 ; 3[. Contrôle : P(2) = (-2) × (-1) = 2 > 0.",
              ],
              box: { label: "Méthode", text: "1. Chercher le zéro de chaque facteur. 2. Les ranger dans l'ordre croissant sur la première ligne. 3. Une ligne par facteur avec son signe. 4. Dernière ligne : règle des signes, colonne par colonne." },
            },
            {
              heading: "Le signe d'un quotient",
              paragraphs: [
                "La règle des signes est la même pour un quotient A/B : il est positif si A et B ont le même signe, négatif sinon. Mais un quotient n'existe pas lorsque son dénominateur est nul : les valeurs qui annulent B sont des valeurs interdites. Dans le tableau, on les signale par une double barre verticale sur la ligne du quotient.",
                "Exemple : Q(x) = (x + 2)/(x - 4). Le numérateur s'annule en -2 (alors Q(x) = 0) ; le dénominateur s'annule en 4 (valeur interdite). Signes : sur ]-∞ ; -2[, (-)/(-) donne + ; sur ]-2 ; 4[, (+)/(-) donne - ; sur ]4 ; +∞[, (+)/(+) donne +. Sur la dernière ligne, on écrit 0 sous -2 et une double barre sous 4.",
              ],
              box: { label: "À retenir", text: "Un quotient s'annule quand son numérateur s'annule (et que son dénominateur ne s'annule pas). Les valeurs qui annulent le dénominateur sont interdites : double barre dans le tableau, crochet toujours ouvert dans les solutions." },
            },
            {
              heading: "Résoudre une inéquation avec un tableau de signes",
              paragraphs: [
                "Pour résoudre une inéquation, on se ramène à la comparaison d'une expression avec 0 : on transpose tous les termes dans un même membre, on factorise, puis on dresse le tableau de signes et on lit les intervalles qui conviennent. On choisit des crochets fermés aux zéros si l'inégalité est large (≤ ou ≥), ouverts si elle est stricte, et toujours ouverts aux valeurs interdites.",
                "Exemple : résoudre x² ≤ 3x. On écrit x² - 3x ≤ 0, soit x(x - 3) ≤ 0. Les zéros sont 0 et 3 ; le produit est négatif entre eux. Donc S = [0 ; 3]. Il ne faut surtout pas diviser par x : on obtiendrait x ≤ 3, ce qui est faux pour x = -1, puisque (-1)² = 1 n'est pas inférieur ou égal à -3.",
                "Exemple avec un quotient : (x + 2)/(x - 4) ≥ 0. D'après le tableau précédent, S = ]-∞ ; -2] ∪ ]4 ; +∞[ : -2 est inclus car le quotient y vaut 0, et 4 est exclu car c'est une valeur interdite.",
              ],
            },
          ],
          keyPoints: [
            "Le signe d'un produit ou d'un quotient se déduit du signe de chaque facteur par la règle des signes.",
            "Le facteur ax + b s'annule en -b/a et a le signe de a à droite de ce zéro.",
            "Les zéros sont rangés dans l'ordre croissant sur la première ligne du tableau.",
            "Une valeur qui annule le dénominateur est interdite : double barre et crochet ouvert.",
            "Pour une inéquation : tout dans un membre, factoriser, tableau de signes, lecture des intervalles.",
            "On ne divise jamais les deux membres par une expression dont on ne connaît pas le signe.",
          ],
          example: {
            statement: "Résolvez dans ℝ l'inéquation (2x + 3)(4 - x) ≥ 0.",
            solution: [
              "Zéros des facteurs : 2x + 3 = 0 donne x = -1,5 ; 4 - x = 0 donne x = 4. Première ligne du tableau : -∞, -1,5, 4, +∞.",
              "Ligne de 2x + 3 (coefficient 2 > 0) : - sur ]-∞ ; -1,5[, 0 en -1,5, + ensuite.",
              "Ligne de 4 - x (coefficient -1 < 0) : + avant 4, 0 en 4, - sur ]4 ; +∞[.",
              "Ligne du produit : sur ]-∞ ; -1,5[, (-) × (+) donne - ; sur ]-1,5 ; 4[, (+) × (+) donne + ; sur ]4 ; +∞[, (+) × (-) donne -. Des 0 sous -1,5 et 4.",
              "Contrôle : pour x = 0, (3) × (4) = 12 > 0, ce qui est cohérent avec le signe + sur ]-1,5 ; 4[.",
              "L'inégalité est large, donc les zéros sont inclus : S = [-1,5 ; 4].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dressez le tableau de signes de P(x) = (x - 5)(x + 3), puis résolvez l'inéquation (x - 5)(x + 3) < 0.",
              hint: "Les deux facteurs ont un coefficient de x égal à 1 : chacun est négatif avant son zéro et positif après.",
              solution: [
                "Zéros : x + 3 = 0 donne -3 ; x - 5 = 0 donne 5. Première ligne : -∞, -3, 5, +∞.",
                "x + 3 : - sur ]-∞ ; -3[, + ensuite. x - 5 : - sur ]-∞ ; 5[, + sur ]5 ; +∞[.",
                "Produit : + sur ]-∞ ; -3[, - sur ]-3 ; 5[, + sur ]5 ; +∞[, avec 0 en -3 et en 5.",
                "P(x) < 0 sur ]-3 ; 5[ (inégalité stricte, crochets ouverts) : S = ]-3 ; 5[. Contrôle : P(0) = -15 < 0.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ l'inéquation (1 - 2x)/(x + 3) ≤ 0.",
              hint: "Repérez d'abord la valeur interdite. Attention au signe du coefficient de x dans 1 - 2x.",
              solution: [
                "Valeur interdite : x + 3 = 0 pour x = -3. Zéro du numérateur : 1 - 2x = 0 pour x = 0,5.",
                "1 - 2x (coefficient -2 < 0) : + sur ]-∞ ; 0,5[, 0 en 0,5, - ensuite. x + 3 : - sur ]-∞ ; -3[, + sur ]-3 ; +∞[.",
                "Quotient : sur ]-∞ ; -3[, (+)/(-) donne - ; double barre en -3 ; sur ]-3 ; 0,5[, (+)/(+) donne + ; 0 en 0,5 ; sur ]0,5 ; +∞[, (-)/(+) donne -.",
                "Contrôles : pour x = -4, 9/(-1) = -9 < 0 ; pour x = 1, -1/4 < 0 ; pour x = 0, 1/3 > 0.",
                "Le quotient est négatif ou nul sur ]-∞ ; -3[ et sur [0,5 ; +∞[. S = ]-∞ ; -3[ ∪ [0,5 ; +∞[, avec -3 exclu (valeur interdite) et 0,5 inclus (le quotient y est nul).",
              ],
            },
            {
              level: 3,
              statement: "a) Résolvez dans ℝ l'inéquation x² ≥ 5x. b) Résolvez dans ℝ l'inéquation (2x - 1)² ≤ (x + 4)², en commençant par tout ramener dans le membre de gauche et en factorisant à l'aide d'une identité remarquable.",
              hint: "Pour b), une différence de deux carrés A² - B² se factorise en (A - B)(A + B).",
              solution: [
                "a) x² ≥ 5x équivaut à x² - 5x ≥ 0, soit x(x - 5) ≥ 0. Les zéros sont 0 et 5.",
                "Le produit est positif à l'extérieur des zéros et négatif entre eux (les deux facteurs ont un coefficient positif). S = ]-∞ ; 0] ∪ [5 ; +∞[.",
                "b) (2x - 1)² ≤ (x + 4)² équivaut à (2x - 1)² - (x + 4)² ≤ 0.",
                "Avec A = 2x - 1 et B = x + 4 : (A - B)(A + B) = (2x - 1 - x - 4)(2x - 1 + x + 4) = (x - 5)(3x + 3).",
                "Zéros : 5 et -1. Les deux facteurs ont un coefficient positif : le produit est négatif entre -1 et 5, positif à l'extérieur.",
                "Inégalité large : S = [-1 ; 5]. Contrôles : pour x = 0, 1 ≤ 16 est vrai ; pour x = 6, 121 ≤ 100 est faux ; pour x = -2, 25 ≤ 4 est faux.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de résolution d'une inéquation par un tableau de signes.",
            items: [
              "Transposer tous les termes dans un même membre pour comparer à 0",
              "Factoriser l'expression obtenue",
              "Chercher la valeur qui annule chaque facteur",
              "Ranger ces valeurs dans l'ordre croissant sur la première ligne du tableau",
              "Écrire le signe de chaque facteur sur sa propre ligne",
              "En déduire le signe de l'expression par la règle des signes",
              "Lire les intervalles solutions en choisissant crochets ouverts ou fermés",
            ],
          },
          quiz: [
            { q: "Quel est le signe de (x - 1)(x - 4) pour x = 2 ?", options: ["positif", "nul", "on ne peut pas savoir", "négatif"], answer: 3, why: "(2 - 1)(2 - 4) = 1 × (-2) = -2 : entre les deux zéros, le produit est négatif." },
            { q: "L'ensemble des solutions de x(x - 2) < 0 est :", options: ["]-∞ ; 0[ ∪ ]2 ; +∞[", "[0 ; 2]", "]0 ; 2[", "]2 ; +∞["], answer: 2, why: "Le produit est négatif entre ses zéros 0 et 2 ; l'inégalité stricte impose des crochets ouverts." },
            { q: "Dans le tableau de signes de (x + 1)/(x - 3), la valeur 3 est :", options: ["une valeur interdite (double barre)", "une valeur où le quotient vaut 0", "une valeur où le quotient est positif", "sans importance"], answer: 0, why: "3 annule le dénominateur : le quotient n'y est pas défini." },
            { q: "Pour résoudre x² > 4x, la bonne démarche est :", options: ["diviser par x pour obtenir x > 4", "étudier le signe de x(x - 4)", "prendre la racine carrée des deux membres", "remplacer x par 4 et conclure"], answer: 1, why: "On se ramène à x² - 4x > 0, puis on factorise. Diviser par x, dont le signe est inconnu, perd les solutions négatives." },
            { q: "L'expression -3x + 6 est strictement positive sur :", options: ["]2 ; +∞[", "]-∞ ; -2[", "]-∞ ; 2[", "ℝ tout entier"], answer: 2, why: "Le zéro est 2 et le coefficient -3 est négatif : l'expression est positive à gauche de 2." },
          ],
          trap: "Diviser les deux membres d'une inéquation par une expression contenant x (x² > 4x devenant x > 4), ce qui fait perdre des solutions, ou oublier la double barre et le crochet ouvert aux valeurs qui annulent un dénominateur.",
          method: "Avant de remplir le tableau, ramenez-vous à « expression comparée à 0 » sous forme factorisée. Une fois le tableau rempli, contrôlez chaque colonne en remplaçant x par une valeur simple de l'intervalle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'carre-inverse',
          title: "Les fonctions carré et inverse",
          minutes: 35,
          objectives: [
            "Connaître les variations et la courbe représentative des fonctions carré et inverse.",
            "Résoudre les équations x² = k et 1/x = k, et des inéquations simples comme x² < k ou 1/x ≥ k.",
            "Comparer des carrés ou des inverses et encadrer x² ou 1/x à partir d'un encadrement de x.",
            "Démontrer les variations de ces fonctions sur un intervalle à l'aide d'une différence.",
          ],
          course: [
            {
              heading: "La fonction carré",
              paragraphs: [
                "La fonction carré est définie sur ℝ par f(x) = x². Pour tout réel x, x² ≥ 0, et x² = 0 seulement pour x = 0. Quelques valeurs : f(-3) = 9, f(-2) = 4, f(-1) = 1, f(0) = 0, f(1) = 1, f(2) = 4, f(3) = 9. On remarque que f(-x) = f(x) : la courbe est symétrique par rapport à l'axe des ordonnées. On dit que la fonction carré est paire.",
                "La fonction carré est strictement décroissante sur ]-∞ ; 0] et strictement croissante sur [0 ; +∞[. Elle admet un minimum égal à 0, atteint en 0. Démonstration sur [0 ; +∞[ : si 0 ≤ a < b, alors b² - a² = (b - a)(b + a), produit de deux nombres strictement positifs, donc a² < b². Sur ]-∞ ; 0], le même calcul donne b + a < 0, donc a² > b².",
                "Sa courbe représentative s'appelle une parabole, de sommet l'origine O du repère, tournée vers le haut. Tableau de variations : sur la ligne des x, -∞, 0, +∞ ; une flèche qui descend jusqu'à 0, puis une flèche qui remonte.",
              ],
              box: { label: "Propriété", text: "La fonction carré x ↦ x² est définie sur ℝ, strictement décroissante sur ]-∞ ; 0] et strictement croissante sur [0 ; +∞[. Sa courbe est une parabole symétrique par rapport à l'axe des ordonnées." },
            },
            {
              heading: "Utiliser la fonction carré",
              paragraphs: [
                "Équation x² = k : si k > 0, elle a deux solutions, √k et -√k ; si k = 0, une seule solution, 0 ; si k < 0, aucune solution, car un carré n'est jamais négatif. Exemple : x² = 7 a pour solutions -√7 et √7. Graphiquement, on cherche les abscisses des points d'intersection de la parabole avec la droite horizontale y = k.",
                "Inéquations : pour k > 0, x² < k équivaut à -√k < x < √k, et x² > k équivaut à x < -√k ou x > √k. Exemple : x² < 9 équivaut à x ∈ ]-3 ; 3[ ; x² ≥ 4 équivaut à x ∈ ]-∞ ; -2] ∪ [2 ; +∞[. Un croquis de la parabole évite les erreurs : on garde la partie de la courbe située sous (ou au-dessus de) la droite y = k.",
                "Comparaison et encadrement : sur [0 ; +∞[, la fonction carré conserve l'ordre ; sur ]-∞ ; 0], elle le renverse. Si 1 ≤ x ≤ 3, alors 1 ≤ x² ≤ 9 ; si -4 ≤ x ≤ -1, alors 1 ≤ x² ≤ 16. Si l'intervalle contient 0, il faut découper : si -3 ≤ x ≤ 2, alors 0 ≤ x² ≤ 9, car le minimum 0 est atteint en 0 et le maximum est le plus grand des deux nombres 9 et 4.",
              ],
              box: { label: "À retenir", text: "x² = k : deux solutions ±√k si k > 0, une solution 0 si k = 0, aucune si k < 0. Pour k > 0 : x² < k équivaut à -√k < x < √k." },
            },
            {
              heading: "La fonction inverse",
              paragraphs: [
                "La fonction inverse est définie par f(x) = 1/x pour tout réel x non nul : 0 n'a pas d'image, car on ne divise pas par 0. Son ensemble de définition est ℝ* = ]-∞ ; 0[ ∪ ]0 ; +∞[. Quelques valeurs : f(-2) = -0,5, f(-1) = -1, f(0,5) = 2, f(1) = 1, f(2) = 0,5, f(4) = 0,25. Comme f(-x) = -f(x), la courbe est symétrique par rapport à l'origine : on dit que la fonction inverse est impaire.",
                "La fonction inverse est strictement décroissante sur ]-∞ ; 0[ et strictement décroissante sur ]0 ; +∞[. Démonstration sur ]0 ; +∞[ : si 0 < a < b, alors 1/b - 1/a = (a - b)/(ab). Le numérateur est négatif et le dénominateur positif, donc 1/b < 1/a. Attention : elle n'est pas décroissante sur ℝ* tout entier, car -1 < 1 et pourtant f(-1) = -1 < f(1) = 1.",
                "Sa courbe s'appelle une hyperbole ; elle est formée de deux branches, l'une dans la zone x > 0, y > 0, l'autre dans la zone x < 0, y < 0. Le signe de 1/x est celui de x. Dans le tableau de variations, on place une double barre sous 0.",
              ],
              box: { label: "Propriété", text: "La fonction inverse x ↦ 1/x est définie sur ℝ* = ]-∞ ; 0[ ∪ ]0 ; +∞[, strictement décroissante sur ]-∞ ; 0[ et sur ]0 ; +∞[. Sa courbe est une hyperbole symétrique par rapport à l'origine." },
            },
            {
              heading: "Utiliser la fonction inverse",
              paragraphs: [
                "Équation 1/x = k : si k ≠ 0, elle a une unique solution x = 1/k ; si k = 0, elle n'a aucune solution, car 1/x n'est jamais nul. Exemple : 1/x = 4 donne x = 0,25. Comparaison : si 0 < a < b, alors 1/a > 1/b ; par exemple 1/0,3 > 1/0,31. Encadrement : si 2 ≤ x ≤ 5, alors 1/5 ≤ 1/x ≤ 1/2.",
                "Inéquations : il faut distinguer les x positifs et les x négatifs. Exemple : 1/x ≥ 2. Pour x < 0, 1/x est négatif, donc jamais supérieur à 2. Pour x > 0, la fonction inverse étant décroissante, 1/x ≥ 2 = 1/0,5 équivaut à x ≤ 0,5. Donc S = ]0 ; 0,5].",
                "Position relative : pour 0 < x < 1, on a x² < x < 1/x ; pour x > 1, c'est l'inverse : 1/x < x < x². Par exemple, pour x = 0,5 : 0,25 < 0,5 < 2 ; pour x = 2 : 0,5 < 2 < 4. Retenir ces deux exemples suffit souvent pour retrouver la règle.",
              ],
            },
          ],
          keyPoints: [
            "Carré : définie sur ℝ, décroissante sur ]-∞ ; 0], croissante sur [0 ; +∞[, minimum 0 en 0, parabole.",
            "x² = k : ±√k si k > 0 ; 0 si k = 0 ; aucune solution si k < 0.",
            "Inverse : définie sur ℝ*, décroissante sur ]-∞ ; 0[ et sur ]0 ; +∞[ séparément, hyperbole.",
            "1/x = k : x = 1/k si k ≠ 0 ; aucune solution si k = 0.",
            "Encadrer x² : découper selon le signe de x ; encadrer 1/x pour x > 0 : l'ordre est renversé.",
            "La fonction carré est paire (courbe symétrique par rapport à l'axe des ordonnées), la fonction inverse impaire (symétrie par rapport à l'origine).",
          ],
          example: {
            statement: "a) Résolvez dans ℝ les équations x² = 7 et x² = -3. b) Résolvez l'inéquation x² > 16. c) Sachant que 2 ≤ x ≤ 5, donnez un encadrement de x² et de 1/x.",
            solution: [
              "a) 7 > 0, donc x² = 7 a deux solutions : S = {-√7 ; √7}. Un carré n'est jamais négatif, donc x² = -3 n'a aucune solution : S = ∅.",
              "b) 16 = 4². La parabole est au-dessus de la droite y = 16 pour x < -4 ou x > 4. Donc S = ]-∞ ; -4[ ∪ ]4 ; +∞[.",
              "Contrôle : pour x = 5, 25 > 16 ; pour x = 0, 0 > 16 est faux.",
              "c) Les nombres 2 et 5 sont positifs, et la fonction carré est croissante sur [0 ; +∞[ : elle conserve l'ordre, donc 4 ≤ x² ≤ 25.",
              "La fonction inverse est décroissante sur ]0 ; +∞[ : elle renverse l'ordre, donc 1/5 ≤ 1/x ≤ 1/2, soit 0,2 ≤ 1/x ≤ 0,5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans calculatrice, comparez les nombres suivants en justifiant à l'aide du sens de variation de la fonction carré ou de la fonction inverse. a) (-2,5)² et (-2,4)². b) 1/0,3 et 1/0,31. c) 1/(-5) et 1/(-4). d) 3,1² et π².",
              hint: "Repérez si les nombres sont tous positifs ou tous négatifs, puis demandez-vous si la fonction conserve ou renverse l'ordre sur cet intervalle. Pour d), π ≈ 3,14.",
              solution: [
                "a) -2,5 < -2,4 ≤ 0 et la fonction carré est décroissante sur ]-∞ ; 0] : elle renverse l'ordre, donc (-2,5)² > (-2,4)². Contrôle : 6,25 > 5,76.",
                "b) 0 < 0,3 < 0,31 et la fonction inverse est décroissante sur ]0 ; +∞[ : 1/0,3 > 1/0,31.",
                "c) -5 < -4 < 0 et la fonction inverse est décroissante sur ]-∞ ; 0[ : 1/(-5) > 1/(-4). Contrôle : -0,2 > -0,25.",
                "d) 0 ≤ 3,1 < π et la fonction carré est croissante sur [0 ; +∞[ : 3,1² < π².",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ : a) x² = 49 ; b) x² = -4 ; c) x² < 25 ; d) x² ≥ 3 ; e) 1/x = 4 ; f) 1/x = 0.",
              hint: "Pour les inéquations, tracez rapidement la parabole et la droite horizontale y = k, puis lisez les abscisses des points situés sous ou au-dessus de la droite.",
              solution: [
                "a) 49 > 0 : x = 7 ou x = -7. S = {-7 ; 7}.",
                "b) Un carré n'est jamais négatif : S = ∅.",
                "c) x² < 25 équivaut à -5 < x < 5 : S = ]-5 ; 5[.",
                "d) x² ≥ 3 équivaut à x ≤ -√3 ou x ≥ √3 : S = ]-∞ ; -√3] ∪ [√3 ; +∞[.",
                "e) 4 ≠ 0 : x = 1/4 = 0,25. S = {0,25}.",
                "f) Un quotient de numérateur 1 n'est jamais nul : S = ∅.",
              ],
            },
            {
              level: 3,
              statement: "a) Sachant que -3 ≤ x ≤ 2, donnez le meilleur encadrement possible de x². b) Sachant que 1 ≤ x ≤ 4, encadrez 1/x, puis 3 + 1/x. c) Résolvez dans ℝ* l'inéquation 1/x < 2. d) Démontrez que, pour tout réel x de ]0 ; 1[, x² < x.",
              hint: "Pour a), découpez l'intervalle en [-3 ; 0] et [0 ; 2]. Pour c), distinguez x < 0 et x > 0. Pour d), étudiez le signe de x² - x = x(x - 1).",
              solution: [
                "a) Si -3 ≤ x ≤ 0, la fonction carré renverse l'ordre : 0 ≤ x² ≤ 9. Si 0 ≤ x ≤ 2, elle le conserve : 0 ≤ x² ≤ 4. En réunissant : 0 ≤ x² ≤ 9, et ces deux bornes sont atteintes (en 0 et en -3).",
                "b) 1 et 4 sont positifs et la fonction inverse renverse l'ordre sur ]0 ; +∞[ : 1/4 ≤ 1/x ≤ 1, soit 0,25 ≤ 1/x ≤ 1. En ajoutant 3 : 3,25 ≤ 3 + 1/x ≤ 4.",
                "c) Si x < 0, alors 1/x < 0 < 2 : tous les réels strictement négatifs sont solutions.",
                "Si x > 0, comme 2 = 1/0,5 et que la fonction inverse est décroissante sur ]0 ; +∞[, 1/x < 1/0,5 équivaut à x > 0,5. Donc S = ]-∞ ; 0[ ∪ ]0,5 ; +∞[.",
                "d) x² - x = x(x - 1). Pour 0 < x < 1, on a x > 0 et x - 1 < 0, donc x(x - 1) < 0, c'est-à-dire x² < x. Exemple : 0,5² = 0,25 < 0,5.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque équation ou inéquation à son ensemble de solutions.",
            pairs: [
              { left: "x² = 9", right: "S = {-3 ; 3}" },
              { left: "x² = -9", right: "S = ∅" },
              { left: "x² < 9", right: "S = ]-3 ; 3[" },
              { left: "x² ≥ 9", right: "S = ]-∞ ; -3] ∪ [3 ; +∞[" },
              { left: "1/x = 3", right: "S = {1/3}" },
              { left: "1/x > 0", right: "S = ]0 ; +∞[" },
            ],
          },
          quiz: [
            { q: "Sur quel intervalle la fonction carré est-elle décroissante ?", options: ["]-∞ ; 0]", "[0 ; +∞[", "ℝ", "]-∞ ; +∞["], answer: 0, why: "La parabole descend jusqu'à l'origine, puis remonte : la fonction carré est décroissante sur ]-∞ ; 0]." },
            { q: "Quel est l'ensemble de définition de la fonction inverse ?", options: ["ℝ", "ℝ*", "]0 ; +∞[", "[0 ; +∞["], answer: 1, why: "Seul 0 n'a pas d'inverse : l'ensemble de définition est ℝ* = ]-∞ ; 0[ ∪ ]0 ; +∞[." },
            { q: "Si -4 ≤ x ≤ -1, alors :", options: ["16 ≤ x² ≤ 1", "-16 ≤ x² ≤ -1", "0 ≤ x² ≤ 16", "1 ≤ x² ≤ 16"], answer: 3, why: "Sur ]-∞ ; 0], la fonction carré renverse l'ordre : (-1)² = 1 et (-4)² = 16, donc 1 ≤ x² ≤ 16." },
            { q: "Combien de solutions l'équation x² = 5 admet-elle ?", options: ["Aucune", "Une seule", "Deux", "Une infinité"], answer: 2, why: "5 > 0 : les solutions sont √5 et -√5." },
            { q: "Comparez 1/3,1 et 1/3,01.", options: ["1/3,1 > 1/3,01", "1/3,1 < 1/3,01", "1/3,1 = 1/3,01"], answer: 1, why: "0 < 3,01 < 3,1 et la fonction inverse renverse l'ordre sur ]0 ; +∞[ : 1/3,01 > 1/3,1." },
          ],
          trap: "Écrire que x² = 9 donne seulement x = 3 en oubliant -3, élever au carré un encadrement qui contient des négatifs (de -3 ≤ x ≤ 2, on ne peut pas déduire 9 ≤ x² ≤ 4), ou affirmer que la fonction inverse est décroissante sur ℝ* tout entier.",
          method: "Avant de comparer des carrés ou des inverses, situez les nombres : sont-ils tous positifs, tous négatifs, ou de part et d'autre de 0 ? Tracez ensuite un croquis rapide de la parabole ou de l'hyperbole pour lire le sens de l'inégalité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'valeur-absolue',
          title: "La fonction valeur absolue",
          minutes: 30,
          objectives: [
            "Définir la valeur absolue d'un nombre réel et la calculer, y compris pour une expression comme |π - 4|.",
            "Interpréter |x - a| comme la distance entre x et a sur la droite numérique.",
            "Connaître les variations et la courbe de la fonction valeur absolue.",
            "Résoudre des équations et des inéquations du type |x - a| = r et |x - a| ≤ r.",
          ],
          course: [
            {
              heading: "Valeur absolue d'un nombre réel",
              paragraphs: [
                "La valeur absolue d'un réel x, notée |x|, est égale à x si x ≥ 0 et à -x si x < 0. Exemples : |5| = 5, |-3,2| = 3,2, |0| = 0. Lorsque x est négatif, -x est positif : la valeur absolue est donc toujours positive ou nulle. On l'interprète comme la « taille » du nombre, indépendamment de son signe.",
                "Pour une expression, on doit connaître son signe. Comme π ≈ 3,14 < 4, le nombre π - 4 est négatif, donc |π - 4| = -(π - 4) = 4 - π. De même, |√2 - 1| = √2 - 1, car √2 ≈ 1,41 > 1. Plus généralement, |2x - 6| vaut 2x - 6 si x ≥ 3, et -2x + 6 si x < 3.",
                "Propriétés utiles : |-x| = |x| ; |x| = 0 si et seulement si x = 0 ; √(x²) = |x| pour tout réel x (et non x, car par exemple √((-3)²) = √9 = 3). En revanche, |a + b| n'est pas toujours égal à |a| + |b| : |1 + (-1)| = 0, alors que |1| + |-1| = 2.",
              ],
              box: { label: "Définition", text: "Pour tout réel x : |x| = x si x ≥ 0, et |x| = -x si x < 0. La valeur absolue est toujours positive ou nulle, et √(x²) = |x|." },
            },
            {
              heading: "Valeur absolue et distance",
              paragraphs: [
                "Sur une droite graduée, |a - b| est la distance entre les points d'abscisses a et b. Par exemple, la distance entre 2 et 7 est |2 - 7| = |-5| = 5, et la distance entre -3 et 4 est |-3 - 4| = 7. En particulier, |x| = |x - 0| est la distance entre x et 0.",
                "Cette interprétation permet de résoudre sans calcul. L'équation |x - 3| = 2 signifie que x est à distance 2 de 3 : x = 1 ou x = 5. L'inéquation |x - 3| ≤ 2 signifie que x est à distance au plus 2 de 3 : x ∈ [1 ; 5]. Pour |x + 1| ≤ 3, on écrit |x - (-1)| ≤ 3 : x est à distance au plus 3 de -1, donc x ∈ [-4 ; 2].",
                "Ce lien est très utilisé pour les valeurs approchées : dire que 3,14 est une valeur approchée de π à 0,01 près signifie que |π - 3,14| ≤ 0,01, c'est-à-dire π ∈ [3,13 ; 3,15].",
              ],
              box: { label: "Propriété", text: "Pour tout réel a et tout réel r > 0 : |x - a| = r équivaut à x = a - r ou x = a + r ; |x - a| ≤ r équivaut à x ∈ [a - r ; a + r] ; |x - a| > r équivaut à x < a - r ou x > a + r." },
            },
            {
              heading: "La fonction valeur absolue",
              paragraphs: [
                "La fonction valeur absolue est définie sur ℝ par f(x) = |x|. Sur [0 ; +∞[, elle coïncide avec x ↦ x ; sur ]-∞ ; 0], elle coïncide avec x ↦ -x. Sa courbe est donc formée de deux demi-droites issues de l'origine : celle d'équation y = -x pour x ≤ 0 et celle d'équation y = x pour x ≥ 0. Elle a la forme d'un V.",
                "La fonction valeur absolue est strictement décroissante sur ]-∞ ; 0] et strictement croissante sur [0 ; +∞[ ; elle admet un minimum égal à 0, atteint en 0. Comme |-x| = |x|, sa courbe est symétrique par rapport à l'axe des ordonnées : c'est une fonction paire, comme la fonction carré, dont elle a le même tableau de variations mais pas la même courbe (un V au lieu d'une parabole).",
              ],
              box: { label: "À retenir", text: "x ↦ |x| est définie sur ℝ, décroissante sur ]-∞ ; 0], croissante sur [0 ; +∞[, de minimum 0 en 0. Sa courbe est formée des demi-droites y = -x (x ≤ 0) et y = x (x ≥ 0)." },
            },
            {
              heading: "Résoudre des équations et des inéquations",
              paragraphs: [
                "Pour |x - a| = r : si r > 0, deux solutions a - r et a + r ; si r = 0, une seule solution a ; si r < 0, aucune solution, car une valeur absolue n'est jamais négative. Exemple : |x - 2| = 5 donne x = -3 ou x = 7 ; |x - 1| = -2 n'a pas de solution.",
                "On peut aussi résoudre par le calcul : |X| ≤ r équivaut à -r ≤ X ≤ r. Exemple : |2x - 4| ≤ 6 équivaut à -6 ≤ 2x - 4 ≤ 6, soit -2 ≤ 2x ≤ 10, donc -1 ≤ x ≤ 5. Le dessin sur la droite graduée reste le meilleur moyen de vérifier : on place le centre, on reporte la distance de chaque côté, et l'on garde l'intérieur (pour ≤) ou l'extérieur (pour ≥).",
              ],
            },
          ],
          keyPoints: [
            "|x| = x si x ≥ 0 et |x| = -x si x < 0 ; une valeur absolue est toujours positive ou nulle.",
            "|a - b| est la distance entre a et b sur la droite graduée.",
            "|x - a| ≤ r équivaut à x ∈ [a - r ; a + r] ; |x - a| > r équivaut à x < a - r ou x > a + r.",
            "|x - a| = r a deux solutions si r > 0, une si r = 0, aucune si r < 0.",
            "x ↦ |x| est décroissante sur ]-∞ ; 0], croissante sur [0 ; +∞[, de courbe en forme de V.",
            "√(x²) = |x|, mais |a + b| n'est pas toujours égal à |a| + |b|.",
          ],
          example: {
            statement: "Résolvez dans ℝ : a) |x - 4| = 3 ; b) |x - 4| ≤ 3 ; c) |x + 2| > 1.",
            solution: [
              "a) |x - 4| = 3 signifie que x est à distance 3 de 4 : x = 4 - 3 = 1 ou x = 4 + 3 = 7. S = {1 ; 7}.",
              "b) |x - 4| ≤ 3 signifie que x est à distance au plus 3 de 4 : x est entre 1 et 7. S = [1 ; 7].",
              "c) On écrit |x + 2| = |x - (-2)| : c'est la distance entre x et -2.",
              "Cette distance doit être strictement supérieure à 1 : x < -2 - 1 = -3 ou x > -2 + 1 = -1.",
              "S = ]-∞ ; -3[ ∪ ]-1 ; +∞[. Contrôle : pour x = 0, |2| = 2 > 1 est vrai ; pour x = -2, |0| = 0 > 1 est faux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez, sans symbole de valeur absolue, les nombres suivants : |-7| ; |3 - 8| ; |√2 - 1| ; |2 - √5| ; |π - 3|.",
              hint: "Déterminez le signe de l'expression entre les barres : si elle est positive, elle reste inchangée ; si elle est négative, on prend son opposé.",
              solution: [
                "|-7| = 7, car -7 < 0.",
                "|3 - 8| = |-5| = 5.",
                "√2 ≈ 1,414 > 1, donc √2 - 1 > 0 et |√2 - 1| = √2 - 1.",
                "√5 ≈ 2,236 > 2, donc 2 - √5 < 0 et |2 - √5| = -(2 - √5) = √5 - 2.",
                "π ≈ 3,14 > 3, donc π - 3 > 0 et |π - 3| = π - 3.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ : a) |x - 2| = 5 ; b) |x + 3| = 0 ; c) |x - 1| = -2 ; d) |x - 1| < 4 ; e) |x + 5| ≥ 2.",
              hint: "Écrivez chaque expression sous la forme |x - a|, puis traduisez en distance à a sur une droite graduée.",
              solution: [
                "a) x est à distance 5 de 2 : x = -3 ou x = 7. S = {-3 ; 7}.",
                "b) |x + 3| = 0 équivaut à x + 3 = 0 : S = {-3}.",
                "c) Une valeur absolue n'est jamais négative : S = ∅.",
                "d) x est à distance strictement inférieure à 4 de 1 : -3 < x < 5. S = ]-3 ; 5[.",
                "e) |x + 5| = |x - (-5)| : x est à distance au moins 2 de -5, donc x ≤ -7 ou x ≥ -3. S = ]-∞ ; -7] ∪ [-3 ; +∞[.",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction définie sur ℝ par f(x) = |2x - 4|. a) Écrivez f(x) sans valeur absolue, selon les valeurs de x. b) Dressez le tableau de variations de f. c) Résolvez l'inéquation f(x) ≤ 6. d) Écrivez la condition « x ∈ [2,9 ; 3,1] » à l'aide d'une valeur absolue.",
              hint: "Pour a), cherchez quand 2x - 4 est positif. Pour d), le centre de l'intervalle est la moyenne de ses bornes, et le rayon est la moitié de sa longueur.",
              solution: [
                "a) 2x - 4 ≥ 0 équivaut à x ≥ 2. Donc f(x) = 2x - 4 si x ≥ 2, et f(x) = -(2x - 4) = -2x + 4 si x < 2.",
                "b) Sur ]-∞ ; 2], f(x) = -2x + 4 est décroissante (coefficient -2) ; sur [2 ; +∞[, f(x) = 2x - 4 est croissante (coefficient 2). Le minimum est f(2) = 0.",
                "c) |2x - 4| ≤ 6 équivaut à -6 ≤ 2x - 4 ≤ 6, soit -2 ≤ 2x ≤ 10, donc -1 ≤ x ≤ 5. S = [-1 ; 5].",
                "Contrôle : f(-1) = |-6| = 6 et f(5) = |6| = 6 ; f(0) = 4 ≤ 6.",
                "d) Le centre de [2,9 ; 3,1] est (2,9 + 3,1)/2 = 3 et son rayon est (3,1 - 2,9)/2 = 0,1. La condition s'écrit |x - 3| ≤ 0,1.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Valeur absolue : vrai ou faux ?",
            statements: [
              { text: "|-6| = 6.", true: true, why: "-6 est négatif, donc |-6| = -(-6) = 6." },
              { text: "Pour tout réel x, |x| = x.", true: false, why: "C'est faux pour x négatif : |-2| = 2 ≠ -2." },
              { text: "|x - 5| est la distance entre x et 5 sur la droite graduée.", true: true, why: "C'est l'interprétation de |a - b| comme distance entre a et b." },
              { text: "L'équation |x| = -4 a deux solutions : 4 et -4.", true: false, why: "Une valeur absolue est toujours positive ou nulle : il n'y a aucune solution." },
              { text: "|x - 1| ≤ 2 équivaut à x ∈ [-1 ; 3].", true: true, why: "x est à distance au plus 2 de 1, donc entre 1 - 2 et 1 + 2." },
              { text: "La fonction valeur absolue est croissante sur ℝ.", true: false, why: "Elle est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[." },
              { text: "Pour tout réel x, √(x²) = |x|.", true: true, why: "Une racine carrée est positive : √((-3)²) = 3 = |-3|." },
              { text: "Pour tous réels a et b, |a + b| = |a| + |b|.", true: false, why: "Contre-exemple : |1 + (-1)| = 0 alors que |1| + |-1| = 2." },
            ],
          },
          quiz: [
            { q: "Combien vaut |3 - π| ?", options: ["3 - π", "π - 3", "3 + π", "-3 - π"], answer: 1, why: "π ≈ 3,14 > 3, donc 3 - π < 0 et sa valeur absolue est son opposé, π - 3." },
            { q: "L'ensemble des solutions de |x - 2| = 3 est :", options: ["{5}", "{-5 ; 1}", "{-1 ; 5}", "{-1 ; 1 ; 5}"], answer: 2, why: "x est à distance 3 de 2 : x = 2 - 3 = -1 ou x = 2 + 3 = 5." },
            { q: "|x + 4| < 1 équivaut à :", options: ["x ∈ ]-5 ; -3[", "x ∈ ]3 ; 5[", "x ∈ ]-1 ; 1[", "x ∈ ]-∞ ; -5[ ∪ ]-3 ; +∞["], answer: 0, why: "|x + 4| est la distance entre x et -4 ; elle est inférieure à 1 entre -5 et -3." },
            { q: "Sur quel intervalle la fonction valeur absolue est-elle décroissante ?", options: ["ℝ", "[0 ; +∞[", "Aucun", "]-∞ ; 0]"], answer: 3, why: "Pour x ≤ 0, |x| = -x : la fonction y est décroissante." },
            { q: "Quel réel x vérifie à la fois |x| = 2,5 et x < 0 ?", options: ["-2,5", "2,5", "-0,25", "-5"], answer: 0, why: "|x| = 2,5 donne x = 2,5 ou x = -2,5 ; seule la seconde valeur est négative." },
          ],
          trap: "Croire que la valeur absolue « supprime le signe moins » à l'intérieur d'une expression : |x - 5| n'est pas égal à x + 5, et |a + b| n'est pas toujours égal à |a| + |b|.",
          method: "Traduisez |x - a| par « la distance de x à a ». Placez a sur une droite graduée, reportez r de chaque côté, puis lisez l'ensemble des solutions : l'intérieur pour ≤, l'extérieur pour ≥.",
        },
      ],
    },
    /* ================================================================== */
    /* PROBABILITÉS                                                         */
    /* ================================================================== */
    {
      id: 'probabilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-evenements',
          title: "Modèle de probabilité et événements",
          minutes: 30,
          objectives: [
            "Décrire une expérience aléatoire par son univers et définir une loi de probabilité sur cet univers.",
            "Calculer la probabilité d'un événement, notamment dans une situation d'équiprobabilité.",
            "Utiliser l'événement contraire, la réunion et l'intersection de deux événements.",
            "Appliquer la formule P(A∪B) = P(A) + P(B) - P(A∩B).",
          ],
          course: [
            {
              heading: "Expérience aléatoire, univers et loi de probabilité",
              paragraphs: [
                "Une expérience est aléatoire lorsqu'on connaît tous ses résultats possibles sans pouvoir prévoir lequel se produira : lancer un dé, tirer une carte, choisir une personne au hasard. Chaque résultat possible s'appelle une issue, et l'ensemble de toutes les issues s'appelle l'univers, noté Ω (oméga). Pour le lancer d'un dé à six faces, Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6}.",
                "Définir une loi de probabilité sur un univers fini Ω = {x₁ ; x₂ ; ... ; xₙ}, c'est associer à chaque issue xᵢ un nombre pᵢ, sa probabilité, avec deux conditions : chaque pᵢ est compris entre 0 et 1, et la somme p₁ + p₂ + ... + pₙ vaut 1. Exemple : un dé truqué peut avoir pour loi P(1) = P(2) = P(3) = P(4) = P(5) = 0,1 et P(6) = 0,5.",
                "Le choix de la loi est un modèle de la réalité. On le justifie par la symétrie de la situation (un dé équilibré, une pièce bien faite) ou par l'observation : lorsque l'on répète l'expérience un grand nombre de fois, la fréquence d'apparition d'une issue se stabilise autour de sa probabilité.",
              ],
              box: { label: "Définition", text: "Une loi de probabilité sur Ω = {x₁ ; ... ; xₙ} associe à chaque issue xᵢ un nombre pᵢ tel que 0 ≤ pᵢ ≤ 1 et p₁ + p₂ + ... + pₙ = 1." },
            },
            {
              heading: "Événements et équiprobabilité",
              paragraphs: [
                "Un événement est une partie de l'univers, c'est-à-dire un ensemble d'issues. Par exemple, pour un dé, l'événement A « obtenir un nombre pair » est A = {2 ; 4 ; 6}. Un événement élémentaire ne contient qu'une issue ; l'événement certain est Ω lui-même ; l'événement impossible, noté ∅, ne contient aucune issue. La probabilité d'un événement est la somme des probabilités des issues qui le composent : P(Ω) = 1 et P(∅) = 0.",
                "Lorsque toutes les issues ont la même probabilité, on parle d'équiprobabilité (c'est ce qu'indiquent les mots « équilibré », « au hasard », « indiscernables au toucher »). Si Ω contient n issues, chacune a pour probabilité 1/n, et pour tout événement A : P(A) = (nombre d'issues de A)/(nombre d'issues de Ω).",
                "Exemple : on tire une carte au hasard dans un jeu de 32 cartes. L'événement R « obtenir un roi » contient 4 issues, donc P(R) = 4/32 = 1/8. L'événement C « obtenir un cœur » contient 8 issues, donc P(C) = 8/32 = 1/4.",
              ],
              box: { label: "Formule", text: "En situation d'équiprobabilité : P(A) = nombre d'issues favorables à A / nombre total d'issues." },
            },
            {
              heading: "Contraire, intersection, réunion",
              paragraphs: [
                "L'événement contraire de A, noté Ā (on lit « A barre »), est formé des issues de Ω qui ne sont pas dans A : il est réalisé exactement quand A ne l'est pas. Comme P(A) + P(Ā) = 1, on a P(Ā) = 1 - P(A). Cette formule est précieuse lorsque Ā est plus simple à étudier que A.",
                "L'intersection A∩B (on lit « A inter B ») est l'événement « A et B » : il est réalisé quand les deux événements le sont. La réunion A∪B (on lit « A union B ») est l'événement « A ou B » : il est réalisé quand au moins l'un des deux l'est. Le « ou » des mathématiques est inclusif : il comprend le cas où les deux sont réalisés.",
                "Deux événements sont incompatibles (ou disjoints) lorsqu'ils ne peuvent pas se produire en même temps, c'est-à-dire lorsque A∩B = ∅. Par exemple, avec un dé, « obtenir 1 » et « obtenir un nombre pair » sont incompatibles. Un événement et son contraire sont toujours incompatibles.",
              ],
            },
            {
              heading: "La probabilité d'une réunion",
              paragraphs: [
                "Pour tous événements A et B : P(A∪B) = P(A) + P(B) - P(A∩B). On retranche P(A∩B) parce que les issues communes à A et à B ont été comptées deux fois dans P(A) + P(B). Si A et B sont incompatibles, P(A∩B) = 0 et la formule devient P(A∪B) = P(A) + P(B).",
                "Exemple avec un dé équilibré : A « nombre pair » = {2 ; 4 ; 6} et B « nombre supérieur ou égal à 5 » = {5 ; 6}. On a A∩B = {6}, donc P(A∪B) = 3/6 + 2/6 - 1/6 = 4/6 = 2/3. Contrôle direct : A∪B = {2 ; 4 ; 5 ; 6} contient 4 issues sur 6.",
                "Pour organiser les données, un tableau à double entrée ou un diagramme (deux ensembles qui se chevauchent) est souvent très utile : la zone commune représente A∩B, l'ensemble des deux zones représente A∪B.",
              ],
              box: { label: "Propriété", text: "P(Ā) = 1 - P(A). Pour tous événements A et B : P(A∪B) = P(A) + P(B) - P(A∩B). Si A et B sont incompatibles : P(A∪B) = P(A) + P(B)." },
            },
          ],
          keyPoints: [
            "L'univers Ω est l'ensemble des issues ; un événement est une partie de Ω.",
            "Une loi de probabilité attribue à chaque issue un nombre entre 0 et 1, la somme valant 1.",
            "Équiprobabilité : P(A) = nombre d'issues favorables / nombre total d'issues.",
            "P(Ā) = 1 - P(A).",
            "P(A∪B) = P(A) + P(B) - P(A∩B) ; si A∩B = ∅, P(A∪B) = P(A) + P(B).",
          ],
          example: {
            statement: "Un dé à six faces est truqué : P(1) = 0,1, P(2) = 0,1, P(3) = 0,2, P(4) = 0,1, P(5) = 0,2. a) Calculez P(6). b) Soit A « obtenir un nombre pair » et B « obtenir au moins 4 ». Calculez P(A), P(B), P(A∩B), P(A∪B) et P(Ā).",
            solution: [
              "a) La somme des probabilités vaut 1 : P(6) = 1 - (0,1 + 0,1 + 0,2 + 0,1 + 0,2) = 1 - 0,7 = 0,3.",
              "b) A = {2 ; 4 ; 6}, donc P(A) = 0,1 + 0,1 + 0,3 = 0,5. B = {4 ; 5 ; 6}, donc P(B) = 0,1 + 0,2 + 0,3 = 0,6.",
              "A∩B = {4 ; 6}, donc P(A∩B) = 0,1 + 0,3 = 0,4.",
              "P(A∪B) = P(A) + P(B) - P(A∩B) = 0,5 + 0,6 - 0,4 = 0,7.",
              "Contrôle direct : A∪B = {2 ; 4 ; 5 ; 6}, de probabilité 0,1 + 0,1 + 0,2 + 0,3 = 0,7.",
              "P(Ā) = 1 - 0,5 = 0,5 ; en effet Ā = {1 ; 3 ; 5}, de probabilité 0,1 + 0,2 + 0,2 = 0,5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une urne contient 5 boules rouges, 3 boules vertes et 2 boules bleues, indiscernables au toucher. On tire une boule au hasard. a) Calculez la probabilité de chaque couleur. b) Calculez la probabilité de ne pas obtenir une boule rouge. c) Calculez la probabilité d'obtenir une boule verte ou bleue.",
              hint: "« Indiscernables au toucher » signifie que les 10 boules ont toutes la même probabilité d'être tirées.",
              solution: [
                "a) Il y a 10 boules équiprobables : P(R) = 5/10 = 0,5 ; P(V) = 3/10 = 0,3 ; P(B) = 2/10 = 0,2. Contrôle : 0,5 + 0,3 + 0,2 = 1.",
                "b) Ne pas obtenir de boule rouge est l'événement contraire de R : P(R̄) = 1 - 0,5 = 0,5.",
                "c) Les événements V et B sont incompatibles (une boule n'a qu'une couleur) : P(V∪B) = 0,3 + 0,2 = 0,5. C'est cohérent avec b), puisque « verte ou bleue » est ici le contraire de « rouge ».",
              ],
            },
            {
              level: 2,
              statement: "On lance un dé équilibré à six faces. On considère les événements A « le nombre est pair », B « le nombre est un multiple de 3 » et C « le nombre est inférieur ou égal à 2 ». a) Écrivez A, B, C, A∩B et A∪B sous forme d'ensembles. b) Calculez P(A∪B) de deux façons. c) Les événements B et C sont-ils incompatibles ? Calculez P(B∪C). d) Calculez P(C̄).",
              hint: "Listez les issues de chaque événement ; pour b), utilisez la formule de la réunion puis un comptage direct.",
              solution: [
                "a) A = {2 ; 4 ; 6}, B = {3 ; 6}, C = {1 ; 2}, A∩B = {6}, A∪B = {2 ; 3 ; 4 ; 6}.",
                "b) Par la formule : P(A∪B) = 3/6 + 2/6 - 1/6 = 4/6 = 2/3. Par comptage : A∪B contient 4 issues sur 6, donc P(A∪B) = 4/6 = 2/3.",
                "c) B∩C = ∅ : aucun nombre n'est à la fois multiple de 3 et inférieur ou égal à 2. B et C sont incompatibles, donc P(B∪C) = 2/6 + 2/6 = 4/6 = 2/3.",
                "d) P(C̄) = 1 - 2/6 = 4/6 = 2/3. En effet C̄ = {3 ; 4 ; 5 ; 6}.",
              ],
            },
            {
              level: 3,
              statement: "Dans un lycée de 400 élèves (données fictives), 160 élèves pratiquent un sport en club, 120 jouent d'un instrument de musique, et 50 font les deux. On choisit un élève au hasard. On note S « l'élève pratique un sport en club » et M « l'élève joue d'un instrument ». a) Calculez P(S), P(M) et P(S∩M). b) Calculez la probabilité que l'élève pratique au moins une des deux activités. c) Calculez la probabilité qu'il ne pratique aucune des deux. d) Calculez la probabilité qu'il pratique un sport en club mais ne joue pas d'instrument. e) Construisez le tableau à double entrée des effectifs pour vérifier vos résultats.",
              hint: "« Au moins une des deux » correspond à S∪M ; « aucune des deux » est l'événement contraire de S∪M.",
              solution: [
                "a) P(S) = 160/400 = 0,4 ; P(M) = 120/400 = 0,3 ; P(S∩M) = 50/400 = 0,125.",
                "b) P(S∪M) = P(S) + P(M) - P(S∩M) = 0,4 + 0,3 - 0,125 = 0,575.",
                "c) « Aucune des deux » est le contraire de S∪M : 1 - 0,575 = 0,425.",
                "d) Les élèves qui font du sport sans instrument sont 160 - 50 = 110 : la probabilité vaut 110/400 = 0,275.",
                "e) Tableau des effectifs : sport et instrument 50 ; sport sans instrument 110 ; instrument sans sport 120 - 50 = 70 ; ni l'un ni l'autre 400 - 50 - 110 - 70 = 170. Total : 50 + 110 + 70 + 170 = 400.",
                "Contrôles : (50 + 110 + 70)/400 = 230/400 = 0,575 et 170/400 = 0,425, ce qui confirme b) et c).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa signification.",
            pairs: [
              { left: "Univers Ω", right: "Ensemble de toutes les issues possibles" },
              { left: "Événement contraire Ā", right: "Réalisé exactement quand A ne l'est pas" },
              { left: "A∩B", right: "A et B sont réalisés tous les deux" },
              { left: "A∪B", right: "Au moins un des deux événements est réalisé" },
              { left: "Événements incompatibles", right: "Ils ne peuvent pas se produire en même temps" },
              { left: "Événement impossible", right: "Ne contient aucune issue, sa probabilité vaut 0" },
            ],
          },
          quiz: [
            { q: "On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité d'obtenir un cœur ?", options: ["1/32", "1/8", "1/4", "1/2"], answer: 2, why: "Le jeu compte 8 cœurs sur 32 cartes équiprobables : 8/32 = 1/4." },
            { q: "Si P(A) = 0,35, alors P(Ā) vaut :", options: ["0,65", "0,35", "-0,35", "1,35"], answer: 0, why: "P(Ā) = 1 - P(A) = 1 - 0,35 = 0,65 ; une probabilité est toujours entre 0 et 1." },
            { q: "P(A) = 0,5, P(B) = 0,4 et P(A∩B) = 0,1. Que vaut P(A∪B) ?", options: ["0,9", "0,8", "0,2", "1"], answer: 1, why: "P(A∪B) = 0,5 + 0,4 - 0,1 = 0,8 : on retire ce qui a été compté deux fois." },
            { q: "Deux événements A et B sont incompatibles lorsque :", options: ["P(A) = P(B)", "A∪B = Ω", "P(A) + P(B) = 1", "A∩B = ∅"], answer: 3, why: "Incompatibles signifie qu'ils n'ont aucune issue commune." },
            { q: "Une loi de probabilité sur Ω = {a ; b ; c} donne P(a) = 0,2 et P(b) = 0,5. Alors P(c) vaut :", options: ["0,7", "0,5", "0,3", "1"], answer: 2, why: "La somme des probabilités vaut 1 : P(c) = 1 - 0,2 - 0,5 = 0,3." },
          ],
          trap: "Additionner P(A) et P(B) pour obtenir P(A∪B) alors que A et B ne sont pas incompatibles : les issues communes sont alors comptées deux fois, et il faut retrancher P(A∩B).",
          method: "Écrivez d'abord l'univers et chaque événement sous forme d'ensemble d'issues, vérifiez que la somme des probabilités de la loi vaut 1, puis contrôlez que chaque résultat obtenu est bien compris entre 0 et 1.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'probabilites-conditionnelles',
          title: "Probabilités conditionnelles et arbres pondérés",
          minutes: 35,
          objectives: [
            "Calculer une probabilité conditionnelle P_A(B) à partir d'un tableau croisé ou de la définition.",
            "Distinguer P_A(B), P_B(A) et P(A∩B) dans un énoncé.",
            "Construire et exploiter un arbre pondéré à deux niveaux.",
            "Calculer la probabilité d'un événement en additionnant les probabilités des chemins qui y mènent.",
          ],
          course: [
            {
              heading: "Probabilité de B sachant A",
              paragraphs: [
                "Il arrive que l'on dispose d'une information partielle : on sait que l'événement A est réalisé. On restreint alors l'univers à A, et l'on se demande quelle est la probabilité que B soit aussi réalisé. Exemple (données fictives) : dans un lycée de 300 élèves, 180 sont demi-pensionnaires et, parmi eux, 60 sont en seconde. Si l'on choisit au hasard un élève demi-pensionnaire, la probabilité qu'il soit en seconde est 60/180 = 1/3.",
                "Définition : soient A et B deux événements avec P(A) ≠ 0. La probabilité de B sachant A est P_A(B) = P(A∩B)/P(A). Dans l'exemple, avec D « demi-pensionnaire » et S « en seconde » : P(D) = 180/300 = 0,6, P(D∩S) = 60/300 = 0,2, donc P_D(S) = 0,2/0,6 = 1/3. On retrouve le résultat obtenu en comptant.",
                "L'ordre compte : P_D(S) est la proportion d'élèves de seconde parmi les demi-pensionnaires, tandis que P_S(D) est la proportion de demi-pensionnaires parmi les élèves de seconde. Si le lycée compte 100 élèves de seconde, P_S(D) = 60/100 = 0,6, très différent de 1/3.",
              ],
              box: { label: "Définition", text: "Pour P(A) ≠ 0, la probabilité de B sachant A est P_A(B) = P(A∩B)/P(A). Comme toute probabilité, elle est comprise entre 0 et 1, et P_A(B̄) = 1 - P_A(B)." },
            },
            {
              heading: "La formule du produit et la lecture d'un énoncé",
              paragraphs: [
                "De la définition, on déduit la formule du produit : P(A∩B) = P(A) × P_A(B). Exemple : 40 % des clients d'un magasin ont une carte de fidélité et, parmi eux, 25 % achètent aussi en ligne (données fictives). La probabilité qu'un client pris au hasard ait la carte et achète en ligne vaut 0,4 × 0,25 = 0,1.",
                "Pour bien traduire un énoncé, on repère les mots clés. « Parmi les A, x % sont B » ou « sachant que A est réalisé » annoncent P_A(B). « x % des personnes sont A et B » annonce P(A∩B). « x % des personnes sont B », sans autre précision, annonce P(B). Écrire chaque donnée avec sa notation avant de calculer évite la plupart des erreurs.",
                "Remarque : lorsque P_A(B) = P(B), savoir que A est réalisé ne change pas la probabilité de B ; on dit alors que A et B sont indépendants. Cette notion sera approfondie en classe de première.",
              ],
              box: { label: "Formule", text: "P(A∩B) = P(A) × P_A(B). « Parmi », « sachant que » : probabilité conditionnelle. « Et » : intersection." },
            },
            {
              heading: "Les arbres pondérés",
              paragraphs: [
                "Un arbre pondéré représente une expérience en plusieurs étapes. Au premier niveau, deux branches partent de la racine vers A et Ā, avec les probabilités P(A) et P(Ā). Au second niveau, de chacun de ces nœuds partent deux branches vers B et B̄, avec les probabilités conditionnelles : P_A(B) et P_A(B̄) après A, P_Ā(B) et P_Ā(B̄) après Ā.",
                "Trois règles permettent d'exploiter l'arbre. Règle 1 : la somme des probabilités des branches issues d'un même nœud vaut 1. Règle 2 : la probabilité d'un chemin (par exemple A puis B) est le produit des probabilités de ses branches ; c'est la formule du produit P(A∩B) = P(A) × P_A(B). Règle 3 : la probabilité d'un événement est la somme des probabilités des chemins qui y mènent : P(B) = P(A∩B) + P(Ā∩B).",
                "Exemple (données fictives) : une usine fabrique 60 % de ses pièces avec la machine A et 40 % avec la machine Ā ; 5 % des pièces de la machine A et 10 % des pièces de l'autre machine sont défectueuses (événement D). Alors P(D) = 0,6 × 0,05 + 0,4 × 0,1 = 0,03 + 0,04 = 0,07. Sachant qu'une pièce est défectueuse, la probabilité qu'elle vienne de la machine A est P_D(A) = 0,03/0,07 = 3/7 ≈ 0,43.",
              ],
              box: { label: "Règle", text: "Sur un arbre pondéré : la somme des branches issues d'un nœud vaut 1 ; la probabilité d'un chemin est le produit de ses branches ; P(B) = P(A∩B) + P(Ā∩B)." },
            },
          ],
          keyPoints: [
            "P_A(B) = P(A∩B)/P(A), pour P(A) ≠ 0 : c'est la probabilité de B quand on sait que A est réalisé.",
            "P_A(B) et P_B(A) sont en général différents : l'ordre compte.",
            "Formule du produit : P(A∩B) = P(A) × P_A(B).",
            "Arbre : la somme des branches issues d'un nœud vaut 1 ; un chemin se calcule par produit.",
            "P(B) = P(A∩B) + P(Ā∩B) : on additionne les chemins qui mènent à B.",
            "« Parmi », « sachant que » : conditionnelle ; « et » : intersection.",
          ],
          example: {
            statement: "Dans un lycée (données fictives), 70 % des élèves prennent le bus (événement B). Parmi les élèves qui prennent le bus, 20 % arrivent en retard au moins une fois par mois (événement R) ; parmi les autres élèves, cette proportion est de 10 %. On choisit un élève au hasard. a) Construisez l'arbre pondéré. b) Calculez P(B∩R). c) Calculez P(R). d) Un élève est arrivé en retard au moins une fois ce mois-ci. Quelle est la probabilité qu'il prenne le bus ?",
            solution: [
              "a) Premier niveau : P(B) = 0,7 et P(B̄) = 0,3. Second niveau : P_B(R) = 0,2 et P_B(R̄) = 0,8 ; P_B̄(R) = 0,1 et P_B̄(R̄) = 0,9.",
              "b) P(B∩R) = P(B) × P_B(R) = 0,7 × 0,2 = 0,14.",
              "c) P(B̄∩R) = 0,3 × 0,1 = 0,03. Les deux chemins qui mènent à R donnent P(R) = 0,14 + 0,03 = 0,17.",
              "d) On cherche P_R(B) = P(B∩R)/P(R) = 0,14/0,17 = 14/17 ≈ 0,824.",
              "Conclusion : environ 82 % des élèves arrivés en retard prennent le bus, alors que seuls 70 % des élèves le prennent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un cinéma a accueilli 200 spectateurs (données fictives), répartis ainsi : 70 adultes et 50 enfants ont vu le film A ; 50 adultes et 30 enfants ont vu le film B. On choisit un spectateur au hasard. On note E « le spectateur est un enfant » et A « le spectateur a vu le film A ». Calculez P(E∩A), P_E(A) et P_A(E).",
              hint: "Pour P_E(A), on ne regarde que les enfants ; pour P_A(E), on ne regarde que les spectateurs du film A.",
              solution: [
                "Effectifs : enfants 50 + 30 = 80 ; spectateurs du film A 70 + 50 = 120 ; enfants ayant vu le film A : 50.",
                "P(E∩A) = 50/200 = 0,25.",
                "P_E(A) = 50/80 = 0,625 : parmi les enfants, 62,5 % ont vu le film A.",
                "P_A(E) = 50/120 = 5/12 ≈ 0,417 : parmi les spectateurs du film A, environ 41,7 % sont des enfants.",
                "Contrôle par la formule du produit : P(E) × P_E(A) = 0,4 × 0,625 = 0,25 = P(E∩A).",
              ],
            },
            {
              level: 2,
              statement: "On donne P(A) = 0,3, P_A(B) = 0,6 et P_Ā(B) = 0,2. a) Construisez l'arbre pondéré complet. b) Calculez P(A∩B) et P(Ā∩B). c) Déduisez-en P(B). d) Calculez P_B(A).",
              hint: "Complétez chaque nœud pour que la somme de ses branches vaille 1, puis multipliez le long des chemins.",
              solution: [
                "a) Premier niveau : P(A) = 0,3 et P(Ā) = 0,7. Après A : P_A(B) = 0,6 et P_A(B̄) = 0,4. Après Ā : P_Ā(B) = 0,2 et P_Ā(B̄) = 0,8.",
                "b) P(A∩B) = 0,3 × 0,6 = 0,18 et P(Ā∩B) = 0,7 × 0,2 = 0,14.",
                "c) P(B) = 0,18 + 0,14 = 0,32.",
                "d) P_B(A) = P(A∩B)/P(B) = 0,18/0,32 = 0,5625.",
              ],
            },
            {
              level: 3,
              statement: "Une entreprise fabrique des ampoules sur deux machines (données fictives). La machine M₁ produit 60 % des ampoules et la machine M₂ le reste. 3 % des ampoules produites par M₁ sont défectueuses, contre 5 % de celles produites par M₂. On prélève une ampoule au hasard dans la production et on note D l'événement « l'ampoule est défectueuse ». a) Construisez un arbre pondéré décrivant la situation. b) Calculez la probabilité que l'ampoule provienne de M₁ et soit défectueuse. c) Démontrez que P(D) = 0,038. d) L'ampoule prélevée est défectueuse. Calculez la probabilité qu'elle provienne de M₁, arrondie au millième. e) Commentez ce résultat.",
              hint: "Le premier niveau de l'arbre porte sur la machine, le second sur le défaut. Pour d), on cherche P_D(M₁).",
              solution: [
                "a) Premier niveau : P(M₁) = 0,6 et P(M₂) = 0,4. Après M₁ : P_M₁(D) = 0,03 et P_M₁(D̄) = 0,97. Après M₂ : P_M₂(D) = 0,05 et P_M₂(D̄) = 0,95.",
                "b) P(M₁∩D) = 0,6 × 0,03 = 0,018.",
                "c) P(M₂∩D) = 0,4 × 0,05 = 0,02. Les deux chemins menant à D donnent P(D) = 0,018 + 0,02 = 0,038.",
                "d) P_D(M₁) = P(M₁∩D)/P(D) = 0,018/0,038 = 9/19 ≈ 0,474.",
                "e) Bien que M₁ produise 60 % des ampoules, une ampoule défectueuse provient de M₁ avec une probabilité d'environ 0,474 seulement, et donc de M₂ avec une probabilité d'environ 0,526 : M₂, plus défaillante, est surreprésentée parmi les ampoules défectueuses.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer P(B), puis P_B(A), à l'aide d'un arbre pondéré.",
            items: [
              "Nommer les événements de l'énoncé, A et B, ainsi que leurs contraires",
              "Tracer le premier niveau de l'arbre avec P(A) et P(Ā)",
              "Tracer le second niveau avec les probabilités conditionnelles sachant A et sachant Ā",
              "Calculer P(A∩B) et P(Ā∩B) en multipliant le long des chemins",
              "Additionner les probabilités des chemins qui mènent à B pour obtenir P(B)",
              "Diviser P(A∩B) par P(B) pour obtenir P_B(A)",
            ],
          },
          quiz: [
            { q: "P(A) = 0,4 et P(A∩B) = 0,1. Que vaut P_A(B) ?", options: ["0,04", "0,5", "0,1", "0,25"], answer: 3, why: "P_A(B) = P(A∩B)/P(A) = 0,1/0,4 = 0,25." },
            { q: "Dans un arbre pondéré, la probabilité d'un chemin s'obtient en :", options: ["additionnant les probabilités de ses branches", "multipliant les probabilités de ses branches", "prenant la plus petite de ses branches"], answer: 1, why: "C'est la formule du produit : P(A∩B) = P(A) × P_A(B)." },
            { q: "« Parmi les élèves internes, 30 % font du théâtre. » Avec I « interne » et T « théâtre », cette donnée s'écrit :", options: ["P_I(T) = 0,3", "P(I∩T) = 0,3", "P_T(I) = 0,3", "P(T) = 0,3"], answer: 0, why: "« Parmi les internes » restreint l'univers aux internes : c'est la probabilité de T sachant I." },
            { q: "P(A) = 0,6, P_A(B) = 0,5 et P_Ā(B) = 0,25. Que vaut P(B) ?", options: ["0,75", "0,3", "0,4", "0,125"], answer: 2, why: "P(B) = 0,6 × 0,5 + 0,4 × 0,25 = 0,3 + 0,1 = 0,4." },
            { q: "Les probabilités des branches issues d'un même nœud d'un arbre pondéré ont pour somme :", options: ["0", "1", "la probabilité du nœud", "100"], answer: 1, why: "Les branches issues d'un nœud décrivent un événement et son contraire : leurs probabilités se complètent à 1." },
          ],
          trap: "Confondre P_A(B), « parmi les A, la proportion de B », avec P(A∩B), « A et B », ou avec P_B(A) : l'ordre compte, et P_A(B) et P_B(A) sont en général différents.",
          method: "Repérez les mots de l'énoncé : « parmi » et « sachant que » annoncent une probabilité conditionnelle, à placer sur une branche du second niveau ; « et » annonce une intersection, qui se lit au bout d'un chemin. Vérifiez ensuite que chaque nœud a des branches de somme 1.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'simulation-python',
          title: "Simuler une expérience aléatoire avec Python",
          minutes: 35,
          objectives: [
            "Utiliser les fonctions random() et randint() du module random pour simuler une expérience aléatoire.",
            "Écrire une fonction Python qui répète une expérience n fois et renvoie la fréquence d'un événement.",
            "Interpréter la fluctuation des fréquences et leur stabilisation autour de la probabilité quand n augmente.",
            "Estimer une probabilité par simulation et confronter le résultat à un calcul.",
          ],
          course: [
            {
              heading: "Les outils de Python pour le hasard",
              paragraphs: [
                "Le module random de Python fournit des nombres pseudo-aléatoires. On l'importe en début de programme par from random import random, randint. L'instruction random() renvoie un nombre décimal pris au hasard dans l'intervalle [0 ; 1[ (0 est possible, 1 ne l'est pas), de façon uniforme. L'instruction randint(a, b) renvoie un entier pris au hasard entre a et b, les deux bornes étant comprises.",
                "Simuler une expérience simple : le lancer d'un dé équilibré s'écrit randint(1, 6) ; le lancer d'une pièce peut s'écrire randint(0, 1), en codant pile par 1 et face par 0. Pour un événement de probabilité p quelconque, on teste random() < p : cette condition est vraie avec une probabilité p, car la longueur de l'intervalle [0 ; p[ est p. Par exemple, random() < 0.3 est vrai dans 30 % des cas environ.",
              ],
              box: { label: "Repère", text: "from random import random, randint. random() : décimal au hasard dans [0 ; 1[. randint(a, b) : entier au hasard entre a et b inclus. random() < p : condition vraie avec une probabilité p." },
            },
            {
              heading: "Répéter l'expérience et compter",
              paragraphs: [
                "Pour estimer la probabilité d'un événement, on répète l'expérience n fois et l'on calcule la fréquence f = (nombre de réalisations)/n. En Python, on utilise un compteur c initialisé à 0, une boucle for k in range(n) qui répète l'expérience n fois, un test if qui ajoute 1 au compteur quand l'événement est réalisé, et l'on renvoie c / n à la fin.",
                "Exemple : fréquence d'apparition du 6 sur n lancers. Ligne 1 : def frequence_six(n): ; ligne 2 : c = 0 ; ligne 3 : for k in range(n): ; ligne 4, décalée dans la boucle : if randint(1, 6) == 6: ; ligne 5, décalée sous le if : c = c + 1 ; ligne 6, hors de la boucle : return c / n. L'appel frequence_six(10000) renvoie une valeur proche de 1/6 ≈ 0,167, différente à chaque exécution.",
                "Attention à la modélisation : pour la somme de deux dés, il faut simuler chaque dé, s = randint(1, 6) + randint(1, 6), et non écrire randint(2, 12). Cette dernière instruction rendrait les onze sommes équiprobables, alors que la somme 7 (6 façons sur 36) est bien plus probable que la somme 2 (1 façon sur 36).",
              ],
            },
            {
              heading: "Fluctuation et stabilisation des fréquences",
              paragraphs: [
                "Deux simulations de même taille donnent en général des fréquences différentes : c'est la fluctuation d'échantillonnage. Cent lancers d'une pièce équilibrée peuvent donner 46 piles une fois et 55 la fois suivante. En revanche, plus le nombre n de répétitions est grand, plus la fréquence observée a tendance à se rapprocher de la probabilité : c'est la loi des grands nombres, que l'on constate ici par la simulation.",
                "On peut préciser l'ampleur de la fluctuation. Pour un événement de probabilité p et des échantillons de taille n assez grande, on observe par simulation que, dans environ 95 % des échantillons (ou davantage), la fréquence f vérifie |f - p| ≤ 1/√n, c'est-à-dire f ∈ [p - 1/√n ; p + 1/√n]. Exemple : pour n = 400, 1/√n = 0,05 ; avec une pièce équilibrée, la fréquence de pile se situe entre 0,45 et 0,55 dans environ 95 % des échantillons.",
                "Cet écart en 1/√n montre qu'il faut multiplier la taille de l'échantillon par 4 pour diviser l'écart typique par 2 : passer de 100 à 10 000 lancers rend l'estimation environ 10 fois plus précise.",
              ],
              box: { label: "À retenir", text: "Une fréquence fluctue d'un échantillon à l'autre, mais se stabilise autour de la probabilité quand n augmente. Pour n assez grand, f ∈ [p - 1/√n ; p + 1/√n] dans environ 95 % des échantillons." },
            },
            {
              heading: "Estimer une probabilité inconnue",
              paragraphs: [
                "La simulation est particulièrement utile lorsque le calcul exact est long ou difficile. Exemple : quelle est la probabilité d'obtenir au moins un 6 en lançant quatre fois un dé ? On peut simuler quatre lancers, tester si l'un d'eux vaut 6, répéter 100 000 fois et calculer la fréquence. On obtient une valeur proche de 0,52. Le calcul exact, par l'événement contraire « aucun 6 », donne 1 - (5/6)⁴ ≈ 0,518.",
                "La démarche complète est donc : modéliser une expérience, la programmer, la répéter un grand nombre de fois, observer la fréquence, puis, quand c'est possible, la confronter à un calcul de probabilité. Si les deux ne concordent pas du tout, il faut soupçonner une erreur dans le programme ou dans le raisonnement.",
              ],
            },
          ],
          keyPoints: [
            "random() renvoie un décimal de [0 ; 1[ ; randint(a, b) un entier entre a et b inclus.",
            "random() < p simule un événement de probabilité p.",
            "Pour estimer une probabilité : boucle de n répétitions, compteur, puis fréquence c / n.",
            "Chaque élément aléatoire se simule séparément : deux dés, deux appels à randint(1, 6).",
            "Les fréquences fluctuent mais se stabilisent autour de p quand n augmente.",
            "Pour n assez grand, f ∈ [p - 1/√n ; p + 1/√n] dans environ 95 % des échantillons.",
          ],
          example: {
            statement: "On lance deux dés équilibrés à six faces et l'on s'intéresse à l'événement S « la somme vaut 7 ». a) Calculez P(S). b) Écrivez une fonction Python somme7(n) qui simule n lancers des deux dés et renvoie la fréquence de S. c) Un appel somme7(10000) renvoie 0.1702. Ce résultat est-il cohérent avec P(S) ?",
            solution: [
              "a) Il y a 6 × 6 = 36 couples équiprobables. Les couples de somme 7 sont (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2), (6 ; 1) : il y en a 6. Donc P(S) = 6/36 = 1/6 ≈ 0,1667.",
              "b) Ligne 1 : def somme7(n): ; ligne 2 : c = 0 ; ligne 3 : for k in range(n): ; ligne 4 (dans la boucle) : s = randint(1, 6) + randint(1, 6) ; ligne 5 (dans la boucle) : if s == 7: c = c + 1 ; ligne 6 (hors de la boucle) : return c / n.",
              "On simule chaque dé séparément : écrire randint(2, 12) serait faux, car les sommes ne sont pas équiprobables.",
              "c) Pour n = 10 000, 1/√n = 1/100 = 0,01. L'intervalle [p - 0,01 ; p + 0,01] vaut environ [0,1567 ; 0,1767].",
              "La fréquence 0,1702 appartient à cet intervalle : le résultat est cohérent avec P(S) = 1/6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des instructions Python suivantes, dites quelle expérience aléatoire elle peut simuler et avec quelle probabilité la condition est vraie lorsqu'il y en a une : a) randint(1, 6) ; b) randint(0, 1) == 1 ; c) random() < 0.3 ; d) randint(1, 4) == 1 ; e) random() >= 0.8.",
              hint: "randint(a, b) choisit un entier parmi b - a + 1 entiers équiprobables ; random() < p est vrai avec une probabilité p.",
              solution: [
                "a) Le lancer d'un dé équilibré à six faces : un entier de 1 à 6, chacun avec la probabilité 1/6.",
                "b) Le lancer d'une pièce équilibrée : la condition est vraie avec la probabilité 1/2.",
                "c) Un événement de probabilité 0,3, par exemple « réussir un tir » pour un joueur qui réussit 30 % de ses tirs : la condition est vraie avec la probabilité 0,3.",
                "d) randint(1, 4) choisit un entier parmi 4 équiprobables : la condition est vraie avec la probabilité 1/4 = 0,25.",
                "e) random() >= 0.8 est le contraire de random() < 0.8 : la condition est vraie avec la probabilité 1 - 0,8 = 0,2.",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez une fonction Python frequence(n) qui simule n lancers d'un dé équilibré et renvoie la fréquence des résultats supérieurs ou égaux à 5. b) Quelle est la probabilité de cet événement ? c) Un appel frequence(10000) renvoie 0.3421. Ce résultat est-il plausible ? Justifiez à l'aide de l'intervalle [p - 1/√n ; p + 1/√n].",
              hint: "Utilisez un compteur, une boucle for et un test if randint(1, 6) >= 5. Pour c), calculez 1/√10000.",
              solution: [
                "a) Ligne 1 : def frequence(n): ; ligne 2 : c = 0 ; ligne 3 : for k in range(n): ; ligne 4 (dans la boucle) : if randint(1, 6) >= 5: c = c + 1 ; ligne 5 (hors de la boucle) : return c / n.",
                "b) Les issues favorables sont 5 et 6 : p = 2/6 = 1/3 ≈ 0,3333.",
                "c) Pour n = 10 000, 1/√n = 1/100 = 0,01. L'intervalle vaut environ [0,3233 ; 0,3433].",
                "La fréquence 0,3421 appartient à cet intervalle : le résultat est plausible, il correspond à une fluctuation normale.",
              ],
            },
            {
              level: 3,
              statement: "Une basketteuse réussit chacun de ses lancers francs avec une probabilité de 0,7 (données fictives), et l'on admet que ses lancers sont indépendants les uns des autres : sur un arbre, chaque branche « réussi » porte la probabilité 0,7, quel que soit le résultat des lancers précédents. Elle effectue une série de 3 lancers. a) Écrivez une fonction tir() qui renvoie 1 si le lancer est réussi et 0 sinon. b) Écrivez une fonction serie() qui simule 3 lancers et renvoie le nombre de réussites. c) Écrivez une fonction estimation(n) qui renvoie la fréquence des séries comportant au moins 2 réussites sur n séries simulées. d) À l'aide d'un arbre, calculez la probabilité exacte d'obtenir au moins 2 réussites. e) Un appel estimation(2500) renvoie 0.79. Est-ce cohérent ?",
              hint: "Pour d), « au moins 2 réussites » regroupe les chemins à 3 réussites et les chemins à exactement 2 réussites ; comptez ces derniers.",
              solution: [
                "a) def tir(): puis, en retrait, if random() < 0.7: return 1, et sinon return 0. La condition random() < 0.7 est vraie avec la probabilité 0,7.",
                "b) def serie(): puis, en retrait, return tir() + tir() + tir(). Chaque appel à tir() simule un nouveau lancer, et la somme compte les réussites.",
                "c) def estimation(n): puis c = 0 ; for k in range(n): ; dans la boucle, if serie() >= 2: c = c + 1 ; hors de la boucle, return c / n.",
                "d) Chemin RRR : 0,7³ = 0,343. Exactement 2 réussites : les chemins RRÉ, RÉR et ÉRR (É pour échec), chacun de probabilité 0,7 × 0,7 × 0,3 = 0,147, soit 3 × 0,147 = 0,441.",
                "Donc P(au moins 2 réussites) = 0,343 + 0,441 = 0,784.",
                "e) Pour n = 2 500, 1/√n = 1/50 = 0,02. L'intervalle vaut [0,764 ; 0,804]. La fréquence 0,79 y appartient : la simulation est cohérente avec le calcul.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Simulation en Python : vrai ou faux ?",
            statements: [
              { text: "randint(1, 6) peut renvoyer 6.", true: true, why: "Les deux bornes de randint sont incluses." },
              { text: "random() peut renvoyer 1.", true: false, why: "random() renvoie un nombre de l'intervalle [0 ; 1[, qui exclut 1." },
              { text: "Pour simuler la somme de deux dés, randint(2, 12) convient.", true: false, why: "Les onze sommes ne sont pas équiprobables : il faut additionner deux appels à randint(1, 6)." },
              { text: "La condition random() < 0.25 est vraie avec une probabilité 0,25.", true: true, why: "L'intervalle [0 ; 0,25[ a pour longueur 0,25." },
              { text: "Deux simulations de 100 lancers donnent toujours la même fréquence.", true: false, why: "Les fréquences fluctuent d'un échantillon à l'autre." },
              { text: "Plus le nombre de répétitions est grand, plus la fréquence a tendance à se rapprocher de la probabilité.", true: true, why: "C'est la loi des grands nombres, observée par la simulation." },
              { text: "Avec un million de lancers d'une pièce équilibrée, la fréquence de pile vaut forcément exactement 0,5.", true: false, why: "Elle en sera très proche, mais une fluctuation reste possible." },
            ],
          },
          quiz: [
            { q: "Quelle instruction simule le lancer d'un dé équilibré à six faces ?", options: ["randint(1, 6)", "randint(0, 6)", "random() * 6", "randint(1, 7)"], answer: 0, why: "randint(1, 6) renvoie un entier entre 1 et 6, bornes comprises, de façon équiprobable." },
            { q: "Quelle condition est vraie avec une probabilité de 0,4 ?", options: ["random() > 0.4", "randint(0, 4) == 4", "random() == 0.4", "random() < 0.4"], answer: 3, why: "random() est uniforme sur [0 ; 1[ : il tombe dans [0 ; 0,4[ avec une probabilité 0,4." },
            { q: "On simule 400 lancers d'une pièce équilibrée. Dans environ 95 % des cas, la fréquence de pile se trouve dans l'intervalle :", options: ["[0,49 ; 0,51]", "[0,4 ; 0,6]", "[0,45 ; 0,55]", "[0 ; 1]"], answer: 2, why: "1/√400 = 0,05, donc l'intervalle est [0,5 - 0,05 ; 0,5 + 0,05]." },
            { q: "Après c = 0, la boucle for k in range(50): c = c + 1 s'exécute. Que vaut c à la fin ?", options: ["49", "50", "51", "1"], answer: 1, why: "range(50) produit les 50 valeurs de 0 à 49 : on ajoute 1 cinquante fois." },
            { q: "Pourquoi répète-t-on une simulation un grand nombre de fois ?", options: ["Pour obtenir la probabilité exacte sans aucun écart", "Parce que Python refuse les boucles courtes", "Pour rendre le programme plus rapide", "Pour stabiliser la fréquence près de p"], answer: 3, why: "Avec un grand n, la fréquence fluctue moins et se rapproche de la probabilité, sans jamais l'égaler à coup sûr." },
          ],
          trap: "Simuler la somme de deux dés par randint(2, 12), comme si les onze sommes étaient équiprobables, ou croire qu'une fréquence observée est égale à la probabilité alors qu'elle fluctue d'un échantillon à l'autre.",
          method: "Avant de coder, décrivez en français une réalisation de l'expérience, puis la répétition et le comptage. Testez ensuite votre programme sur un cas dont vous connaissez la probabilité (un dé, une pièce) pour vérifier qu'il donne une fréquence proche.",
        },
      ],
    },
  ],
}
