import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-2nde',
  chapters: [
    /* ================================================================== */
    /* GÉNÉRALITÉS SUR LES FONCTIONS                                       */
    /* ================================================================== */
    {
      id: 'fonctions-generalites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notion-fonction',
          title: "Fonction, image, antécédent et domaine de définition",
          minutes: 30,
          objectives: [
            "Déterminer l'image d'un nombre par une fonction définie par une formule, un tableau de valeurs ou une courbe.",
            "Rechercher les antécédents éventuels d'un nombre par une fonction.",
            "Déterminer le domaine de définition d'une fonction donnée par une expression ou par une situation.",
            "Utiliser le vocabulaire et les notations f : x ↦ f(x), image, antécédent.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une fonction ?",
              paragraphs: [
                "Une fonction f définie sur un ensemble D de nombres réels est un procédé qui, à chaque nombre x de D, associe un unique nombre réel, noté f(x). On écrit f : x ↦ f(x), ce qui se lit « f est la fonction qui à x associe f(x) ». Le nombre x est appelé la variable. Par exemple, la fonction f : x ↦ 3x + 1 associe à chaque réel x le nombre 3x + 1 : au nombre 2, elle associe 3 × 2 + 1 = 7.",
                "On peut se représenter une fonction comme une machine : on y fait entrer un nombre x, la machine applique toujours la même règle, et il en sort un seul nombre f(x). Le mot essentiel est « unique » : à une même valeur d'entrée ne peut correspondre qu'une seule valeur de sortie. Une fonction peut être donnée par une formule (une expression algébrique), par un tableau de valeurs, par une courbe, ou encore par un algorithme ou un programme.",
                "Il faut bien distinguer f et f(x) : f désigne la fonction (le procédé), tandis que f(x) est un nombre, l'image de x. Dans la vie courante, de nombreuses grandeurs dépendent d'une autre : le prix payé en fonction de la quantité achetée, l'aire d'un disque en fonction de son rayon (r ↦ πr²), la température relevée en fonction de l'heure.",
              ],
              box: { label: "Définition", text: "Soit D un ensemble de nombres réels. Définir une fonction f sur D, c'est associer à chaque réel x de D un unique réel, noté f(x). On écrit f : D → ℝ, x ↦ f(x)." },
            },
            {
              heading: "Image et antécédent",
              paragraphs: [
                "Si f(a) = b, on dit que b est l'image de a par f, et que a est un antécédent de b par f. Avec f(x) = x² - 3 : f(4) = 16 - 3 = 13, donc 13 est l'image de 4, et 4 est un antécédent de 13. Pour calculer une image, on remplace x par la valeur donnée, en plaçant les nombres négatifs entre parenthèses : f(-2) = (-2)² - 3 = 4 - 3 = 1.",
                "Un nombre du domaine a toujours une seule image, mais un nombre peut avoir zéro, un ou plusieurs antécédents. Toujours avec f(x) = x² - 3 : les antécédents de 6 sont les solutions de x² - 3 = 6, c'est-à-dire x² = 9, soit x = 3 ou x = -3. Le nombre -3 a pour seul antécédent 0 (car x² = 0 donne x = 0), et le nombre -5 n'a aucun antécédent, car x² = -2 est impossible : un carré n'est jamais négatif.",
                "Chercher les antécédents de b revient donc toujours à résoudre l'équation f(x) = b. Dans un tableau de valeurs, l'image se lit sur la seconde ligne, sous la valeur de x ; les antécédents d'un nombre se lisent sur la première ligne, au-dessus de chaque case où ce nombre apparaît. Un tableau ne montre cependant que les valeurs qu'il contient : il peut exister d'autres antécédents.",
              ],
              box: { label: "Repère", text: "Image : on connaît x, on calcule f(x) (une seule réponse). Antécédent : on connaît la valeur b, on cherche x en résolvant f(x) = b (zéro, une ou plusieurs réponses)." },
            },
            {
              heading: "Domaine de définition",
              paragraphs: [
                "Le domaine (ou ensemble) de définition d'une fonction f est l'ensemble de tous les réels x pour lesquels f(x) existe ; on le note souvent Df. Lorsque f est donnée par une expression sans autre précision, on cherche les valeurs interdites. En seconde, deux situations sont à connaître : on ne peut pas diviser par 0, et on ne peut pas prendre la racine carrée d'un nombre strictement négatif.",
                "Exemple 1 : g(x) = 5/(x - 2). Le dénominateur s'annule lorsque x - 2 = 0, c'est-à-dire pour x = 2. La valeur 2 est interdite et Dg = ℝ \\ {2} (lu « ℝ privé de 2 »), que l'on peut aussi écrire ]-∞ ; 2[ ∪ ]2 ; +∞[. Exemple 2 : h(x) = √(x + 4). Il faut x + 4 ≥ 0, soit x ≥ -4, donc Dh = [-4 ; +∞[. Exemple 3 : une expression comme x² - 3, sans quotient ni racine, est définie pour tout réel : son domaine est ℝ.",
                "Le domaine peut aussi être imposé par la situation étudiée. Si A(x) désigne l'aire d'un carré de côté x centimètres, la formule A(x) = x² a un sens pour tout réel, mais une longueur est positive : dans le problème, on étudie A sur [0 ; +∞[, ou sur ]0 ; +∞[ si l'on exclut le carré réduit à un point.",
              ],
              box: { label: "Règle", text: "Une valeur interdite est un réel qui annule un dénominateur. Sous une racine carrée, l'expression doit être positive ou nulle. Le domaine de définition est l'ensemble des réels qui ne posent aucun de ces problèmes (et qui ont un sens dans la situation)." },
            },
          ],
          keyPoints: [
            "Une fonction f associe à chaque réel x de son domaine un unique réel f(x) ; on note f : x ↦ f(x).",
            "Si f(a) = b : b est l'image de a, et a est un antécédent de b.",
            "Un nombre du domaine a une seule image ; un nombre peut avoir 0, 1 ou plusieurs antécédents.",
            "Chercher les antécédents de b, c'est résoudre l'équation f(x) = b.",
            "Valeurs interdites : un dénominateur ne doit pas s'annuler, une racine carrée porte sur un nombre positif ou nul.",
            "f est la fonction, f(x) est un nombre : on ne confond pas les deux.",
          ],
          example: {
            statement: "Soit f la fonction définie par f(x) = (x + 1)/(x - 3). a) Déterminez le domaine de définition de f. b) Calculez l'image de 5 et l'image de -1. c) Déterminez le ou les antécédents de 2 par f.",
            solution: [
              "a) Le dénominateur x - 3 s'annule pour x = 3 : c'est la seule valeur interdite. Donc Df = ℝ \\ {3}.",
              "b) f(5) = (5 + 1)/(5 - 3) = 6/2 = 3. L'image de 5 est 3.",
              "f(-1) = (-1 + 1)/(-1 - 3) = 0/(-4) = 0. L'image de -1 est 0 : un numérateur nul ne pose aucun problème, seul le dénominateur ne doit pas s'annuler.",
              "c) On cherche x ≠ 3 tel que (x + 1)/(x - 3) = 2. En multipliant les deux membres par x - 3, qui n'est pas nul : x + 1 = 2(x - 3), soit x + 1 = 2x - 6.",
              "On en déduit 1 + 6 = 2x - x, donc x = 7. La valeur 7 est différente de 3 : elle appartient bien au domaine.",
              "Vérification : f(7) = 8/4 = 2. Conclusion : Df = ℝ \\ {3}, f(5) = 3, f(-1) = 0, et 2 a un unique antécédent, le nombre 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur ℝ par f(x) = 2x² - 5x + 1. a) Calculez f(0), f(3), f(-2) et f(1/2). b) Quel est le domaine de définition de la fonction g définie par g(x) = 5/(2x - 8) ?",
              hint: "Remplacez x par chaque valeur écrite entre parenthèses et respectez les priorités : le carré d'abord, puis les produits, puis les sommes. Pour g, cherchez la valeur de x qui annule le dénominateur.",
              solution: [
                "f(0) = 2 × 0² - 5 × 0 + 1 = 1.",
                "f(3) = 2 × 9 - 5 × 3 + 1 = 18 - 15 + 1 = 4.",
                "f(-2) = 2 × (-2)² - 5 × (-2) + 1 = 2 × 4 + 10 + 1 = 19.",
                "f(1/2) = 2 × 1/4 - 5/2 + 1 = 1/2 - 5/2 + 1 = -2 + 1 = -1.",
                "b) 2x - 8 = 0 équivaut à x = 4. La seule valeur interdite est 4, donc Dg = ℝ \\ {4}.",
              ],
            },
            {
              level: 2,
              statement: "Une fonction f définie sur ℝ est donnée par le tableau de valeurs suivant. Ligne des x : -3 ; -2 ; -1 ; 0 ; 1 ; 2 ; 3. Ligne des f(x) : 5 ; 0 ; -3 ; -4 ; -3 ; 0 ; 5. a) Lisez l'image de -1 et l'image de 0. b) D'après le tableau, quels sont les antécédents de 0 ? et ceux de -3 ? c) On admet que f(x) = x² - 4. Vérifiez cette formule pour deux valeurs du tableau, puis déterminez tous les antécédents de 5 et de -5 par f.",
              hint: "Pour un antécédent, partez de la ligne des f(x) et remontez vers la ligne des x. Au c), résolvez x² - 4 = 5, puis x² - 4 = -5.",
              solution: [
                "a) Sous x = -1, on lit -3 : f(-1) = -3. Sous x = 0, on lit -4 : f(0) = -4.",
                "b) Le nombre 0 apparaît sous x = -2 et sous x = 2 : d'après le tableau, 0 a pour antécédents -2 et 2. De même, -3 a pour antécédents -1 et 1.",
                "c) Vérification : f(3) = 9 - 4 = 5 et f(-1) = 1 - 4 = -3, ce qui est conforme au tableau.",
                "Antécédents de 5 : x² - 4 = 5 équivaut à x² = 9, soit x = 3 ou x = -3. Le nombre 5 a deux antécédents, -3 et 3.",
                "Antécédents de -5 : x² - 4 = -5 équivaut à x² = -1, ce qui est impossible car un carré est toujours positif ou nul. Le nombre -5 n'a aucun antécédent par f.",
              ],
            },
            {
              level: 3,
              statement: "Un rectangle a un périmètre de 20 cm. On note x la longueur, en cm, de l'un de ses côtés, et A(x) son aire en cm². a) Exprimez la longueur de l'autre côté en fonction de x, puis montrez que A(x) = x(10 - x). b) Quel est l'ensemble des valeurs possibles de x dans ce problème ? c) Calculez A(3). d) Montrez que A(x) = 25 - (x - 5)², puis déterminez les antécédents de 21 et de 25 par A. e) Le rectangle peut-il avoir une aire de 30 cm² ?",
              hint: "La somme de deux côtés consécutifs vaut la moitié du périmètre. Pour d), développez 25 - (x - 5)², puis résolvez (x - 5)² = 4 et (x - 5)² = 0.",
              solution: [
                "a) Le demi-périmètre vaut 10 cm, donc l'autre côté mesure 10 - x. L'aire est A(x) = x(10 - x).",
                "b) Les deux côtés doivent être strictement positifs : x > 0 et 10 - x > 0, soit 0 < x < 10. Dans ce problème, A est définie sur ]0 ; 10[.",
                "c) A(3) = 3 × 7 = 21 : l'aire vaut 21 cm².",
                "d) 25 - (x - 5)² = 25 - (x² - 10x + 25) = -x² + 10x = x(10 - x) = A(x).",
                "A(x) = 21 équivaut à (x - 5)² = 4, soit x - 5 = 2 ou x - 5 = -2, donc x = 7 ou x = 3. Les deux valeurs sont dans ]0 ; 10[ : 21 a deux antécédents, 3 et 7 (c'est le même rectangle de 3 cm sur 7 cm, pris dans un sens ou dans l'autre).",
                "A(x) = 25 équivaut à (x - 5)² = 0, soit x = 5 : 25 a un seul antécédent, 5 (le rectangle est alors un carré).",
                "e) A(x) = 30 équivaudrait à (x - 5)² = -5, ce qui est impossible. Comme (x - 5)² ≥ 0, on a toujours A(x) ≤ 25 : l'aire ne peut pas valoir 30 cm².",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre maîtrise du vocabulaire des fonctions.",
            statements: [
              { text: "Un nombre peut avoir deux images différentes par une même fonction.", true: false, why: "Par définition, chaque x du domaine a une image unique." },
              { text: "Un nombre peut avoir plusieurs antécédents par une même fonction.", true: true, why: "Avec f(x) = x², le nombre 9 a deux antécédents : -3 et 3." },
              { text: "Le domaine de définition de x ↦ 1/x est ℝ.", true: false, why: "On ne peut pas diviser par 0 : le domaine est ℝ \\ {0}." },
              { text: "Si f(2) = 7, alors 2 est un antécédent de 7.", true: true, why: "f(a) = b signifie que a est un antécédent de b et que b est l'image de a." },
              { text: "Par la fonction x ↦ √x, le nombre -4 a une image.", true: false, why: "La racine carrée d'un nombre strictement négatif n'existe pas : -4 n'appartient pas au domaine [0 ; +∞[." },
              { text: "Pour f(x) = x² + 1, le nombre 0 n'a pas d'antécédent.", true: true, why: "x² + 1 = 0 donnerait x² = -1, impossible : f(x) est toujours supérieur ou égal à 1." },
              { text: "L'écriture f(x) désigne la fonction elle-même.", true: false, why: "f est la fonction ; f(x) est un nombre, l'image de x par f." },
            ],
          },
          quiz: [
            {
              q: "Soit f(x) = -x² + 4. Quelle est l'image de -3 ?",
              options: ["13", "-9", "-5", "5"],
              answer: 2,
              why: "f(-3) = -(-3)² + 4 = -9 + 4 = -5 : on élève -3 au carré, puis on prend l'opposé du résultat.",
            },
            {
              q: "Par la fonction g(x) = 2x - 6, quel est l'antécédent de 4 ?",
              options: ["5", "2", "-1", "14"],
              answer: 0,
              why: "On résout 2x - 6 = 4, soit 2x = 10 et x = 5. Le nombre 2 est l'image de 4, pas son antécédent.",
            },
            {
              q: "Quel est le domaine de définition de f(x) = 3/(x + 7) ?",
              options: ["ℝ", "ℝ \\ {7}", "[-7 ; +∞[", "ℝ \\ {-7}"],
              answer: 3,
              why: "Le dénominateur x + 7 s'annule pour x = -7 : c'est la seule valeur interdite.",
            },
            {
              q: "Combien le nombre 9 a-t-il d'antécédents par la fonction carré x ↦ x² ?",
              options: ["Aucun", "Deux : -3 et 3", "Un seul, le nombre 3", "Une infinité"],
              answer: 1,
              why: "x² = 9 a deux solutions, 3 et -3, car (-3)² = 9 aussi.",
            },
            {
              q: "Pour f(x) = √(x - 5), lequel de ces nombres a une image ?",
              options: ["0", "4", "6", "-5"],
              answer: 2,
              why: "Il faut x - 5 ≥ 0, soit x ≥ 5 : seul 6 convient, et f(6) = √1 = 1.",
            },
          ],
          trap: "Croire qu'un nombre n'a qu'un seul antécédent, ou confondre image et antécédent : pour f(x) = x², l'image de 3 est 9, mais les antécédents de 9 sont -3 et 3 (on oublie souvent la solution négative).",
          method: "Avant de répondre, repérez si l'on vous donne x (calcul d'image : on remplace) ou la valeur de f(x) (recherche d'antécédents : on résout une équation). Pour un domaine de définition, listez systématiquement les dénominateurs et les racines carrées de l'expression.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'courbe-resolution-graphique',
          title: "Courbe représentative et résolutions graphiques",
          minutes: 30,
          objectives: [
            "Déterminer si un point appartient à la courbe représentative d'une fonction.",
            "Lire graphiquement des images et des antécédents.",
            "Résoudre graphiquement des équations du type f(x) = k et f(x) = g(x).",
            "Résoudre graphiquement des inéquations du type f(x) < k et f(x) < g(x).",
          ],
          course: [
            {
              heading: "La courbe représentative d'une fonction",
              paragraphs: [
                "Dans un repère du plan, la courbe représentative de la fonction f, notée Cf, est l'ensemble des points M de coordonnées (x ; f(x)), lorsque x parcourt le domaine de définition de f. On dit que Cf a pour équation y = f(x) : l'abscisse d'un point de la courbe est un nombre x du domaine, et son ordonnée est l'image f(x) de ce nombre.",
                "Pour savoir si un point A(a ; b) appartient à Cf, on calcule f(a) et on compare le résultat à b. Avec f(x) = x² - 2x - 3 : f(4) = 16 - 8 - 3 = 5, donc le point A(4 ; 5) appartient à Cf ; en revanche f(-2) = 4 + 4 - 3 = 5 ≠ 4, donc le point B(-2 ; 4) n'appartient pas à Cf.",
                "Pour tracer une courbe, on dresse un tableau de valeurs (à la main ou avec le menu « table » de la calculatrice), on place les points obtenus, puis on les relie par une courbe régulière. Plus le pas est petit, plus le tracé est fidèle. Une courbe tracée reste une approximation : elle permet de conjecturer, le calcul permet de prouver.",
              ],
              box: { label: "Propriété", text: "Le point M(a ; b) appartient à la courbe Cf si et seulement si a appartient au domaine de définition de f et b = f(a)." },
            },
            {
              heading: "Lire des images et des antécédents",
              paragraphs: [
                "Image de a : on repère a sur l'axe des abscisses, on se déplace verticalement jusqu'à la courbe, puis on lit l'ordonnée du point obtenu sur l'axe des ordonnées. Comme une fonction n'associe qu'une image à chaque x, une droite verticale coupe la courbe d'une fonction en un point au plus.",
                "Antécédents de k : on trace la droite horizontale d'équation y = k, on repère tous ses points d'intersection avec la courbe, puis on lit leurs abscisses. Selon le nombre de points d'intersection, k a zéro, un ou plusieurs antécédents. Les lectures graphiques donnent des valeurs approchées : on écrit par exemple « environ 1,4 », sauf si l'on peut vérifier la valeur exacte par le calcul.",
              ],
              box: { label: "À retenir", text: "Image : lecture verticale, puis on lit le résultat sur l'axe des ordonnées. Antécédents : lecture horizontale le long de la droite y = k, puis on lit les résultats sur l'axe des abscisses." },
            },
            {
              heading: "Résoudre graphiquement une équation",
              paragraphs: [
                "Les solutions de l'équation f(x) = k sont les abscisses des points d'intersection de Cf avec la droite horizontale d'équation y = k. En particulier, les solutions de f(x) = 0 sont les abscisses des points où Cf coupe l'axe des abscisses. Avec f(x) = x² - 2x - 3, la courbe coupe l'axe des abscisses en deux points, d'abscisses -1 et 3 ; on le vérifie par le calcul : f(-1) = 1 + 2 - 3 = 0 et f(3) = 9 - 6 - 3 = 0, donc S = {-1 ; 3}.",
                "Les solutions de l'équation f(x) = g(x) sont les abscisses des points d'intersection des courbes Cf et Cg. Attention : on donne les abscisses, et non les points eux-mêmes. Si Cf et Cg se coupent en A(-1 ; 1) et B(2 ; 4), l'ensemble des solutions est S = {-1 ; 2}, et non l'ensemble des deux points.",
              ],
              box: { label: "Méthode", text: "f(x) = k : abscisses des points communs à Cf et à la droite d'équation y = k. f(x) = g(x) : abscisses des points communs à Cf et à Cg. Les solutions s'écrivent sous la forme S = {...}." },
            },
            {
              heading: "Résoudre graphiquement une inéquation",
              paragraphs: [
                "Les solutions de l'inéquation f(x) > k sont les abscisses des points de Cf situés strictement au-dessus de la droite d'équation y = k ; celles de f(x) < k sont les abscisses des points situés strictement en dessous. Pour f(x) ≥ k ou f(x) ≤ k, on ajoute les solutions de l'équation f(x) = k : les crochets correspondants sont alors fermés.",
                "De même, les solutions de f(x) < g(x) sont les abscisses des points où Cf est strictement en dessous de Cg. Exemple : avec f(x) = x² et g(x) = x + 2, la parabole est sous la droite entre les abscisses -1 et 2, donc f(x) < g(x) a pour ensemble de solutions ]-1 ; 2[, et f(x) ≤ g(x) a pour ensemble [-1 ; 2]. Les solutions d'une inéquation sont en général des intervalles ou des réunions d'intervalles, que l'on obtient en projetant la partie utile de la courbe sur l'axe des abscisses.",
              ],
              box: { label: "Règle", text: "Inégalité stricte (< ou >) : les solutions de l'égalité sont exclues, crochets ouverts. Inégalité large (≤ ou ≥) : elles sont incluses, crochets fermés (sauf en -∞, en +∞ et aux bornes exclues du domaine)." },
            },
          ],
          keyPoints: [
            "Cf est l'ensemble des points M(x ; f(x)) pour x dans le domaine de f : son équation est y = f(x).",
            "Le point A(a ; b) appartient à Cf si et seulement si b = f(a).",
            "f(x) = k : abscisses des points d'intersection de Cf et de la droite d'équation y = k.",
            "f(x) = g(x) : abscisses des points d'intersection de Cf et de Cg.",
            "f(x) < g(x) : abscisses des points où Cf est strictement sous Cg ; les solutions sont souvent des intervalles.",
            "Une lecture graphique donne des valeurs approchées : on la confirme par le calcul quand c'est possible.",
          ],
          example: {
            statement: "Soit f la fonction définie sur [-2 ; 4] par f(x) = x² - 2x - 3. a) Dressez le tableau de valeurs de f pour les entiers de -2 à 4. b) À l'aide du tableau et de l'allure de la courbe, résolvez graphiquement f(x) = 0, puis f(x) < 0. c) Le point C(0,5 ; -3,75) appartient-il à la courbe Cf ?",
            solution: [
              "a) f(-2) = 4 + 4 - 3 = 5 ; f(-1) = 1 + 2 - 3 = 0 ; f(0) = -3 ; f(1) = 1 - 2 - 3 = -4 ; f(2) = 4 - 4 - 3 = -3 ; f(3) = 9 - 6 - 3 = 0 ; f(4) = 16 - 8 - 3 = 5.",
              "On place ces points et on les relie : on obtient une parabole tournée vers le haut, dont le point le plus bas est (1 ; -4).",
              "b) La courbe coupe l'axe des abscisses aux points d'abscisses -1 et 3, où les images valent exactement 0 d'après le tableau. Donc f(x) = 0 a pour ensemble de solutions S = {-1 ; 3}.",
              "Pour x strictement compris entre -1 et 3, les points de la courbe sont sous l'axe des abscisses ; ailleurs sur [-2 ; 4], ils sont au-dessus ou sur l'axe. Donc f(x) < 0 a pour ensemble de solutions S = ]-1 ; 3[ (bornes exclues car l'inégalité est stricte).",
              "c) f(0,5) = 0,25 - 1 - 3 = -3,75 : l'ordonnée de C est égale à l'image de son abscisse, donc C appartient à Cf.",
              "Conclusion : f(x) = 0 pour x = -1 ou x = 3, f(x) < 0 pour x ∈ ]-1 ; 3[, et C appartient à Cf.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur ℝ par f(x) = 3x - x². a) Les points A(2 ; 2), B(-1 ; 2) et O(0 ; 0) appartiennent-ils à la courbe Cf ? b) Déterminez l'ordonnée du point de Cf d'abscisse 5. c) Déterminez les abscisses des points de Cf situés sur l'axe des abscisses.",
              hint: "Un point (a ; b) est sur Cf lorsque f(a) = b. Pour c), un point de l'axe des abscisses a une ordonnée nulle : factorisez 3x - x² par x.",
              solution: [
                "a) f(2) = 6 - 4 = 2 : le point A(2 ; 2) appartient à Cf.",
                "f(-1) = -3 - 1 = -4 ≠ 2 : le point B(-1 ; 2) n'appartient pas à Cf.",
                "f(0) = 0 : le point O(0 ; 0) appartient à Cf.",
                "b) f(5) = 15 - 25 = -10 : le point de Cf d'abscisse 5 a pour ordonnée -10.",
                "c) On résout f(x) = 0 : 3x - x² = x(3 - x) = 0. Un produit est nul si et seulement si l'un de ses facteurs est nul : x = 0 ou x = 3. La courbe Cf coupe l'axe des abscisses aux points d'abscisses 0 et 3.",
              ],
            },
            {
              level: 2,
              statement: "Une fonction f est définie sur [-3 ; 5]. Sa courbe passe par les points A(-3 ; 6), B(-1 ; 0), C(1 ; -2), D(3 ; 0) et E(5 ; 6) ; elle descend régulièrement de A jusqu'à C, puis monte régulièrement de C jusqu'à E. a) Résolvez graphiquement f(x) = 0 et f(x) = -2. b) Résolvez graphiquement f(x) < 0, puis f(x) ≥ 0. c) Combien l'équation f(x) = 3 a-t-elle de solutions ? Et l'équation f(x) = 7 ?",
              hint: "Faites un schéma rapide en plaçant les cinq points et en les reliant dans l'ordre. Pour f(x) ≥ 0, n'oubliez ni les points où f(x) = 0, ni les deux morceaux de courbe concernés.",
              solution: [
                "a) La courbe coupe l'axe des abscisses en B et en D : f(x) = 0 a pour ensemble de solutions S = {-1 ; 3}.",
                "La valeur -2 n'est atteinte qu'au point le plus bas, C : l'équation f(x) = -2 a pour unique solution x = 1.",
                "b) La courbe est strictement sous l'axe des abscisses entre B et D : f(x) < 0 pour x ∈ ]-1 ; 3[.",
                "Elle est sur ou au-dessus de l'axe de A à B et de D à E : f(x) ≥ 0 pour x ∈ [-3 ; -1] ∪ [3 ; 5].",
                "c) Sur [-3 ; 1], f descend de 6 à -2 : la droite d'équation y = 3 coupe ce morceau une fois, entre -3 et -1. Sur [1 ; 5], f monte de -2 à 6 : la droite le coupe une seconde fois, entre 3 et 5. L'équation f(x) = 3 a donc deux solutions.",
                "La plus grande valeur prise par f est 6 : la droite d'équation y = 7 ne coupe pas la courbe, et l'équation f(x) = 7 n'a aucune solution.",
              ],
            },
            {
              level: 3,
              statement: "Soit f et g les fonctions définies sur [-3 ; 3] par f(x) = x² et g(x) = x + 2. a) Dressez un tableau de valeurs de f et de g pour les entiers de -3 à 3. b) Résolvez graphiquement f(x) = g(x), en précisant les points d'intersection des deux courbes. c) Résolvez graphiquement f(x) ≤ g(x). d) Démontrez que f(x) - g(x) = (x + 1)(x - 2), puis confirmez par le calcul le résultat du b).",
              hint: "Comparez les deux lignes du tableau : les courbes se coupent là où f(x) et g(x) sont égaux. Pour c), cherchez sur quel intervalle la parabole est sous la droite ou la touche.",
              solution: [
                "a) Pour x = -3, -2, -1, 0, 1, 2, 3 : f(x) vaut 9 ; 4 ; 1 ; 0 ; 1 ; 4 ; 9 et g(x) vaut -1 ; 0 ; 1 ; 2 ; 3 ; 4 ; 5.",
                "b) f(x) = g(x) pour x = -1 (valeur commune 1) et pour x = 2 (valeur commune 4). Les courbes se coupent en A(-1 ; 1) et B(2 ; 4), donc S = {-1 ; 2}.",
                "c) Pour x = 0 et x = 1, f(x) < g(x) : entre -1 et 2, la parabole est sous la droite. Pour x = -3, x = -2 et x = 3, elle est au-dessus. Donc f(x) ≤ g(x) pour x ∈ [-1 ; 2], bornes incluses car l'inégalité est large.",
                "d) (x + 1)(x - 2) = x² - 2x + x - 2 = x² - x - 2, et f(x) - g(x) = x² - (x + 2) = x² - x - 2 : les deux expressions sont égales.",
                "f(x) = g(x) équivaut à f(x) - g(x) = 0, soit (x + 1)(x - 2) = 0, donc x = -1 ou x = 2. On retrouve S = {-1 ; 2}, cette fois de façon certaine.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque question posée sur un graphique à ce qu'il faut y lire.",
            pairs: [
              { left: "Lire l'image de 2", right: "L'ordonnée du point de la courbe d'abscisse 2" },
              { left: "Lire les antécédents de 2", right: "Les abscisses des points de la courbe d'ordonnée 2" },
              { left: "Résoudre f(x) = g(x)", right: "Les abscisses des points d'intersection de Cf et Cg" },
              { left: "Résoudre f(x) > 0", right: "Les abscisses des points de Cf strictement au-dessus de l'axe des abscisses" },
              { left: "Résoudre f(x) ≤ g(x)", right: "Les abscisses des points de Cf situés sur ou sous Cg" },
              { left: "Le point A(a ; b) est sur Cf", right: "b = f(a)" },
            ],
          },
          quiz: [
            {
              q: "La courbe de f passe par le point (2 ; -5). Que peut-on affirmer ?",
              options: ["f(-5) = 2", "f(2) = -5", "2 est l'image de -5", "-5 a pour image 2"],
              answer: 1,
              why: "Un point (x ; y) de la courbe vérifie y = f(x) : ici f(2) = -5.",
            },
            {
              q: "Sur un graphique, les solutions de l'équation f(x) = g(x) sont :",
              options: ["les ordonnées des points d'intersection de Cf et Cg", "les points d'intersection de Cf et de l'axe des abscisses", "les images des points d'intersection", "les abscisses des points d'intersection de Cf et Cg"],
              answer: 3,
              why: "Une solution est une valeur de x : on lit donc les abscisses des points communs aux deux courbes.",
            },
            {
              q: "La courbe de f est strictement au-dessus de la droite y = 2 exactement pour les x de ]0 ; 4[. Quel est l'ensemble des solutions de f(x) > 2 ?",
              options: ["]0 ; 4[", "[0 ; 4]", "{0 ; 4}", "]2 ; +∞["],
              answer: 0,
              why: "L'inégalité est stricte et l'on lit les abscisses : S = ]0 ; 4[.",
            },
            {
              q: "La droite d'équation y = k coupe la courbe de f en trois points. Que peut-on dire du nombre k ?",
              options: ["k a trois images par f", "k n'est pas dans le domaine de f", "k a trois antécédents par f", "f n'est pas une fonction"],
              answer: 2,
              why: "Chaque point d'intersection a pour ordonnée k : son abscisse est un antécédent de k.",
            },
            {
              q: "Pour f(x) = x² - 1, le point de Cf d'abscisse -3 a pour ordonnée :",
              options: ["-10", "-7", "10", "8"],
              answer: 3,
              why: "f(-3) = (-3)² - 1 = 9 - 1 = 8.",
            },
          ],
          trap: "Donner comme solutions d'une équation les points d'intersection, ou leurs ordonnées, au lieu de leurs abscisses : si Cf et Cg se coupent en (2 ; 4), la solution de f(x) = g(x) est x = 2, et non 4.",
          method: "Pour chaque lecture graphique, tracez au crayon les traits de construction (une verticale pour une image, une horizontale pour des antécédents), puis vérifiez par le calcul chaque valeur qui semble tomber juste sur le quadrillage.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-python',
          title: "Écrire une fonction en Python",
          minutes: 30,
          objectives: [
            "Définir une fonction en Python avec l'instruction def, un ou plusieurs paramètres et l'instruction return.",
            "Appeler une fonction et interpréter la valeur qu'elle renvoie.",
            "Traduire une fonction mathématique, éventuellement définie par morceaux, en fonction Python.",
            "Utiliser une fonction dans une boucle pour calculer une série de valeurs.",
          ],
          course: [
            {
              heading: "Définir une fonction en Python",
              paragraphs: [
                "En Python, une fonction est un bloc d'instructions auquel on donne un nom, qui reçoit des valeurs (ses paramètres) et qui renvoie un résultat. Elle se définit avec le mot-clé def, suivi du nom de la fonction, des paramètres entre parenthèses et de deux-points. Les instructions qui suivent sont décalées vers la droite (indentées, en général de quatre espaces) : c'est l'indentation qui indique à Python où commence et où finit le corps de la fonction.",
                "Pour traduire f(x) = 3x² - 2, on écrit sur une première ligne « def f(x): » puis, sur la ligne suivante, en retrait, « return 3*x**2 - 2 ». En Python, la multiplication s'écrit avec * et ne peut pas être sous-entendue (3x provoque une erreur), la puissance s'écrit ** (x**2 pour x², et non x^2) et la division s'écrit /. L'instruction return met fin à la fonction et renvoie la valeur calculée.",
                "Une fonction peut avoir plusieurs paramètres, séparés par des virgules. Par exemple, la fonction « def aire_rectangle(L, l): » suivie, en retrait, de « return L*l » renvoie l'aire d'un rectangle de dimensions L et l. On choisit des noms explicites, sans accents ni espaces : on écrit aire_rectangle, et non aire rectangle.",
              ],
              box: { label: "Syntaxe", text: "En-tête : def nom(param1, param2): avec les deux-points. Corps : les instructions, en retrait de quatre espaces. Pour finir : return suivi de la valeur renvoyée." },
            },
            {
              heading: "Appeler une fonction : return n'est pas print",
              paragraphs: [
                "Définir une fonction ne calcule rien : il faut ensuite l'appeler, en écrivant son nom suivi d'une valeur entre parenthèses. Après avoir exécuté le script qui contient la fonction f précédente, taper f(2) dans la console donne 10, car 3 × 2² - 2 = 12 - 2 = 10. On peut aussi stocker le résultat dans une variable (y = f(2)) ou l'utiliser dans un calcul : f(2) + f(0) vaut 10 + (-2) = 8.",
                "Il ne faut pas confondre return et print. L'instruction print affiche une valeur à l'écran, mais ne la transmet pas au reste du programme ; return renvoie la valeur, qui peut alors être réutilisée. Une fonction qui se termine par print(3*x**2 - 2) au lieu de return affiche bien le nombre, mais elle ne renvoie rien (en Python, elle renvoie la valeur spéciale None) et f(2) + 1 provoque une erreur. Une analogie : print, c'est écrire le résultat au tableau ; return, c'est le remettre en main propre à celui qui l'a demandé.",
                "Les variables créées à l'intérieur d'une fonction sont locales : elles n'existent que pendant l'exécution de la fonction. Dès qu'une instruction return est exécutée, la fonction s'arrête ; les lignes placées après un return dans le même bloc ne sont jamais exécutées.",
              ],
              box: { label: "À retenir", text: "return renvoie une valeur réutilisable et arrête la fonction ; print se contente d'afficher. En mathématiques comme en Python, f(2) désigne la valeur obtenue pour x = 2." },
            },
            {
              heading: "Conditions, booléens et boucles",
              paragraphs: [
                "Une fonction peut contenir une instruction conditionnelle : if (si), elif (sinon si), else (sinon). C'est utile pour une fonction définie par morceaux ou pour un tarif. Exemple : la fonction g définie par g(x) = -x si x < 0 et g(x) = x si x ≥ 0 (c'est la valeur absolue) se traduit par « def g(x): », puis, en retrait, « if x < 0: », puis, avec un retrait supplémentaire, « return -x », puis, au premier retrait, « else: » et enfin, avec un retrait supplémentaire, « return x ».",
                "Une fonction peut aussi renvoyer un booléen, True (vrai) ou False (faux). Pour tester si un point A(a ; b) appartient à la courbe de f(x) = x² - 3x + 1, on peut écrire « def appartient(a, b): » puis, en retrait, « return b == a**2 - 3*a + 1 ». Attention : le symbole = sert à affecter une valeur à une variable, tandis que == sert à tester une égalité. Avec des nombres décimaux, ce test peut être faussé par les arrondis de l'ordinateur ; il est fiable avec des entiers.",
                "Enfin, on peut appeler une fonction dans une boucle pour produire un tableau de valeurs : « for x in range(-2, 3): » suivi, en retrait, de « print(x, f(x)) » affiche les images des entiers de -2 à 2. On rappelle que range(a, b) parcourt les entiers de a inclus à b exclu.",
              ],
              box: { label: "Repère", text: "if condition: puis elif autre_condition: puis else:, chacun suivi d'un bloc en retrait. Comparaisons : <, <=, >, >=, == (égal), != (différent). range(a, b) parcourt les entiers de a à b - 1." },
            },
          ],
          keyPoints: [
            "Une fonction Python se définit par def nom(paramètres): suivi d'un bloc en retrait.",
            "return renvoie le résultat et termine la fonction ; print ne fait qu'afficher.",
            "En Python : 3*x pour la multiplication, x**2 pour la puissance, / pour la division.",
            "Définir une fonction ne l'exécute pas : il faut l'appeler, par exemple avec f(2).",
            "if, elif et else permettent de programmer une fonction définie par morceaux.",
            "= affecte une valeur, == teste une égalité ; range(a, b) va de a jusqu'à b - 1.",
          ],
          example: {
            statement: "Une place de cinéma coûte 9 € ; à partir de 5 places achetées, une réduction de 10 % s'applique sur le total (données fictives). Écrivez une fonction Python prix qui reçoit le nombre n de places et renvoie le prix à payer, puis calculez prix(3) et prix(6).",
            solution: [
              "Le paramètre est n, le nombre de places. Sans réduction, le prix est 9 × n ; avec la réduction de 10 %, on multiplie ce total par 0,9.",
              "Ligne 1 : def prix(n):",
              "Ligne 2, en retrait de 4 espaces : if n < 5: ; ligne 3, en retrait de 8 espaces : return 9*n",
              "Ligne 4, en retrait de 4 espaces : else: ; ligne 5, en retrait de 8 espaces : return 9*n*0.9",
              "Appel prix(3) : 3 < 5, donc la fonction renvoie 9 × 3 = 27.",
              "Appel prix(6) : la condition 6 < 5 est fausse, donc elle renvoie 9 × 6 × 0,9 = 54 × 0,9 = 48,6 (Python écrit 48.6, avec un point décimal).",
              "Conclusion : 3 places coûtent 27 € et 6 places coûtent 48,60 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Écrivez une fonction Python g qui traduit g(x) = 5x - 7. b) Que renvoient g(4) et g(-2) ? c) Un élève a écrit « def h(x): » puis, en retrait, « return 2x^2 + 1 » pour traduire h(x) = 2x² + 1. Corrigez la deuxième ligne.",
              hint: "N'oubliez ni les deux-points, ni le retrait, ni le signe * entre un nombre et une variable. En Python, la puissance s'écrit **.",
              solution: [
                "a) Ligne 1 : def g(x): ; ligne 2, en retrait : return 5*x - 7",
                "b) g(4) = 5 × 4 - 7 = 20 - 7 = 13 et g(-2) = 5 × (-2) - 7 = -10 - 7 = -17.",
                "c) 2x n'est pas compris par Python (il faut 2*x) et ^ ne désigne pas la puissance (il faut **). La ligne correcte est : return 2*x**2 + 1",
                "Vérification : h(3) renvoie alors 2 × 9 + 1 = 19.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction Python suivante, décrite ligne par ligne. Ligne 1 : def tarif(age): ; ligne 2 (retrait de 4 espaces) : if age < 12: ; ligne 3 (retrait de 8) : return 5 ; ligne 4 (retrait de 4) : elif age < 18: ; ligne 5 (retrait de 8) : return 8 ; ligne 6 (retrait de 4) : else: ; ligne 7 (retrait de 8) : return 11. a) Que renvoient tarif(10), tarif(12), tarif(17) et tarif(18) ? b) Décrivez par une phrase la règle de tarification. c) Modifiez la fonction pour que les personnes de 65 ans ou plus paient 7 (données fictives).",
              hint: "Python teste les conditions de haut en bas et s'arrête au premier test vrai : le elif n'est examiné que si le if était faux.",
              solution: [
                "a) tarif(10) : 10 < 12 est vrai, la fonction renvoie 5.",
                "tarif(12) : 12 < 12 est faux ; on teste alors 12 < 18, qui est vrai : elle renvoie 8. De même, tarif(17) renvoie 8.",
                "tarif(18) : 18 < 12 et 18 < 18 sont faux, on passe au else : elle renvoie 11.",
                "b) Le tarif est de 5 avant 12 ans, de 8 de 12 à 17 ans, et de 11 à partir de 18 ans.",
                "c) On insère un cas avant le else : ligne 6 (retrait de 4) : elif age >= 65: ; ligne 7 (retrait de 8) : return 7 ; puis else: et return 11 comme avant.",
                "Ainsi tarif(70) renvoie 7 et tarif(40) renvoie toujours 11. L'ordre des tests compte : le test age >= 65 doit être placé avant le else.",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction définie sur ℝ par f(x) = x² - 4x + 1. a) Écrivez une fonction Python f qui la traduit. b) On ajoute la fonction tableau, décrite ligne par ligne. Ligne 1 : def tableau(a, b): ; ligne 2 (retrait de 4) : for x in range(a, b + 1): ; ligne 3 (retrait de 8) : print(x, f(x)). Qu'affiche l'appel tableau(0, 4) ? Pourquoi a-t-on écrit b + 1 ? c) D'après cet affichage, conjecturez la valeur minimale de f et les solutions de f(x) = -2. d) Démontrez que f(x) = (x - 2)² - 3 et confirmez vos conjectures.",
              hint: "Calculez à la main f(0), f(1), f(2), f(3) et f(4) pour prévoir l'affichage. Pour d), développez (x - 2)² avec une identité remarquable.",
              solution: [
                "a) Ligne 1 : def f(x): ; ligne 2, en retrait : return x**2 - 4*x + 1",
                "b) range(0, 5) parcourt 0, 1, 2, 3 et 4. Python affiche une ligne par valeur : 0 1, puis 1 -2, puis 2 -3, puis 3 -2, puis 4 1.",
                "On écrit b + 1 car range(a, b) s'arrête à b - 1 : sans le + 1, la valeur x = 4 ne serait pas traitée.",
                "c) Conjecture : f semble atteindre sa plus petite valeur, -3, en x = 2, et les valeurs placées symétriquement autour de 2 sont égales. L'équation f(x) = -2 semble avoir pour solutions 1 et 3.",
                "d) (x - 2)² - 3 = x² - 4x + 4 - 3 = x² - 4x + 1 = f(x).",
                "Un carré est positif ou nul, donc f(x) ≥ -3 pour tout réel x, avec égalité seulement si x = 2 : le minimum de f est -3, atteint en 2.",
                "f(x) = -2 équivaut à (x - 2)² = 1, soit x - 2 = 1 ou x - 2 = -1, donc x = 3 ou x = 1. Les deux conjectures sont démontrées.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les lignes de ce programme, qui calcule puis affiche le prix TTC d'un article de 50 € hors taxes avec une TVA de 20 %.",
            items: [
              "def prix_ttc(ht):",
              "(en retrait) tva = ht * 0.2",
              "(en retrait) ttc = ht + tva",
              "(en retrait) return ttc",
              "resultat = prix_ttc(50)",
              "print(resultat)",
            ],
          },
          quiz: [
            {
              q: "Quelle ligne traduit correctement f(x) = 4x³ dans le corps d'une fonction Python ?",
              options: ["return 4*x**3", "return 4x**3", "return 4 * x ^ 3", "print 4x³"],
              answer: 0,
              why: "La multiplication doit être écrite avec * et la puissance avec ** ; return renvoie la valeur.",
            },
            {
              q: "Une fonction f se termine par print(x + 1) au lieu de return x + 1. Que se passe-t-il quand on exécute y = f(2) ?",
              options: ["y vaut 3", "Python refuse d'exécuter la définition de la fonction", "3 s'affiche mais y vaut None", "y vaut 2"],
              answer: 2,
              why: "print affiche 3 à l'écran, mais la fonction ne renvoie rien : y reçoit la valeur spéciale None.",
            },
            {
              q: "Une fonction Python g renvoie x si x > 0, et -2*x sinon. Que renvoie g(-3) ?",
              options: ["-3", "6", "-6", "3"],
              answer: 1,
              why: "-3 > 0 est faux : on passe au cas « sinon », qui renvoie -2 × (-3) = 6.",
            },
            {
              q: "Quels entiers parcourt range(2, 6) ?",
              options: ["2, 3, 4, 5, 6", "3, 4, 5, 6", "3, 4, 5", "2, 3, 4, 5"],
              answer: 3,
              why: "range(a, b) commence à a inclus et s'arrête juste avant b.",
            },
            {
              q: "Quel symbole teste en Python si deux valeurs sont égales ?",
              options: ["==", "=", ":=", "!="],
              answer: 0,
              why: "== compare deux valeurs ; = affecte une valeur à une variable et != teste une différence.",
            },
          ],
          trap: "Oublier les deux-points après def ou if, négliger le retrait, ou écrire 3x et x^2 au lieu de 3*x et x**2 ; autre erreur fréquente : utiliser print au lieu de return, si bien que la fonction ne renvoie aucune valeur réutilisable.",
          method: "Testez toujours votre fonction sur une ou deux valeurs dont vous connaissez le résultat, calculé à la main (par exemple f(0) et f(1)), avant de l'utiliser dans un programme plus long.",
        },
      ],
    },
    /* ================================================================== */
    /* VECTEURS ET COORDONNÉES DANS UN REPÈRE                              */
    /* ================================================================== */
    {
      id: 'coordonnees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'coordonnees-vecteur',
          title: "Coordonnées d'un vecteur, d'une somme, d'un produit par un réel",
          minutes: 30,
          objectives: [
            "Calculer les coordonnées d'un vecteur AB⃗ à partir des coordonnées des points A et B.",
            "Calculer les coordonnées d'une somme de vecteurs et du produit d'un vecteur par un nombre réel.",
            "Utiliser l'égalité de deux vecteurs pour déterminer les coordonnées d'un point, notamment le quatrième sommet d'un parallélogramme.",
          ],
          course: [
            {
              heading: "Base, repère et coordonnées d'un vecteur",
              paragraphs: [
                "Une base du plan est un couple (i⃗, j⃗) de deux vecteurs non colinéaires. Un repère est la donnée d'un point O, l'origine, et d'une base : on le note (O ; i⃗, j⃗). Le repère est dit orthonormé lorsque i⃗ et j⃗ ont des directions perpendiculaires et ont pour norme (longueur) 1. Tout vecteur u⃗ du plan s'écrit d'une seule façon u⃗ = x i⃗ + y j⃗ : les réels x et y sont les coordonnées de u⃗ dans la base (i⃗, j⃗).",
                "On note u⃗(x ; y), et l'on écrit souvent les coordonnées d'un vecteur en colonne, x au-dessus de y, pour les distinguer de celles d'un point. Concrètement, x indique le déplacement horizontal (vers la droite si x > 0, vers la gauche si x < 0) et y le déplacement vertical (vers le haut si y > 0). Le vecteur u⃗(3 ; -2), c'est « 3 carreaux vers la droite, 2 carreaux vers le bas », quel que soit le point de départ. Le vecteur nul 0⃗ a pour coordonnées (0 ; 0).",
                "Deux vecteurs sont égaux si et seulement s'ils ont les mêmes coordonnées dans une même base. C'est le pont entre la géométrie et le calcul : une égalité de vecteurs se traduit par deux égalités de nombres, l'une pour les abscisses, l'autre pour les ordonnées.",
              ],
              box: { label: "Définition", text: "Dans une base (i⃗, j⃗), le vecteur u⃗ a pour coordonnées (x ; y) lorsque u⃗ = x i⃗ + y j⃗. Deux vecteurs sont égaux si et seulement si leurs coordonnées sont égales." },
            },
            {
              heading: "Coordonnées du vecteur AB⃗",
              paragraphs: [
                "Dans un repère (O ; i⃗, j⃗), si A(xA ; yA) et B(xB ; yB), alors le vecteur AB⃗ a pour coordonnées (xB - xA ; yB - yA). On calcule toujours « arrivée moins départ ». Par exemple, avec A(2 ; -1) et B(5 ; 3) : AB⃗(5 - 2 ; 3 - (-1)), soit AB⃗(3 ; 4). Le vecteur BA⃗, qui va dans l'autre sens, a pour coordonnées (-3 ; -4) : c'est l'opposé de AB⃗.",
                "Cette formule permet de traduire des propriétés géométriques. Le quadrilatère ABCD est un parallélogramme (éventuellement aplati) si et seulement si AB⃗ = DC⃗. Avec A(1 ; 2), B(4 ; 3) et C(6 ; 7), cherchons D(x ; y) tel que ABCD soit un parallélogramme : AB⃗(3 ; 1) et DC⃗(6 - x ; 7 - y). L'égalité donne 6 - x = 3 et 7 - y = 1, donc x = 3 et y = 6 : D(3 ; 6).",
              ],
              box: { label: "Formule", text: "A(xA ; yA) et B(xB ; yB) donnent AB⃗(xB - xA ; yB - yA). ABCD est un parallélogramme si et seulement si AB⃗ = DC⃗ (attention à l'ordre des lettres)." },
            },
            {
              heading: "Somme de vecteurs et produit par un réel",
              paragraphs: [
                "Si u⃗(x ; y) et v⃗(x' ; y'), alors la somme u⃗ + v⃗ a pour coordonnées (x + x' ; y + y') : on additionne les abscisses entre elles et les ordonnées entre elles. Cela correspond à l'enchaînement de deux déplacements : 3 carreaux vers la droite puis 1 vers la gauche, c'est 2 carreaux vers la droite. Par exemple, avec u⃗(3 ; -2) et v⃗(-1 ; 5), le vecteur u⃗ + v⃗ a pour coordonnées (2 ; 3).",
                "Si k est un nombre réel, le vecteur k u⃗ a pour coordonnées (kx ; ky). Avec u⃗(3 ; -2) : 2u⃗(6 ; -4), -u⃗(-3 ; 2) et ½u⃗(1,5 ; -1). On en déduit les coordonnées de toute combinaison : u⃗ - v⃗ = u⃗ + (-1)v⃗ a pour coordonnées (x - x' ; y - y'), et 2u⃗ - 3v⃗ a pour coordonnées (2 × 3 - 3 × (-1) ; 2 × (-2) - 3 × 5), soit (9 ; -19).",
                "Ces règles permettent aussi de trouver un point défini par une égalité vectorielle. Si A(1 ; 2) et u⃗(4 ; -6), le point M tel que AM⃗ = ½u⃗ vérifie AM⃗(2 ; -3), donc xM - 1 = 2 et yM - 2 = -3, d'où M(3 ; -1).",
              ],
              box: { label: "Propriété", text: "Pour u⃗(x ; y), v⃗(x' ; y') et k réel : u⃗ + v⃗ a pour coordonnées (x + x' ; y + y'), u⃗ - v⃗ a pour coordonnées (x - x' ; y - y') et k u⃗ a pour coordonnées (kx ; ky)." },
            },
          ],
          keyPoints: [
            "u⃗ = x i⃗ + y j⃗ : (x ; y) sont les coordonnées de u⃗ dans la base (i⃗, j⃗).",
            "AB⃗ a pour coordonnées (xB - xA ; yB - yA) : arrivée moins départ.",
            "Deux vecteurs sont égaux si et seulement s'ils ont les mêmes coordonnées.",
            "u⃗ + v⃗ a pour coordonnées (x + x' ; y + y') et k u⃗ a pour coordonnées (kx ; ky).",
            "ABCD est un parallélogramme si et seulement si AB⃗ = DC⃗.",
          ],
          example: {
            statement: "Dans un repère, on donne A(-2 ; 1), B(3 ; 4) et C(5 ; -2). a) Calculez les coordonnées de AB⃗ et de AC⃗. b) Calculez les coordonnées du vecteur w⃗ = 2AB⃗ - AC⃗. c) Déterminez les coordonnées du point D tel que ABCD soit un parallélogramme.",
            solution: [
              "a) AB⃗(3 - (-2) ; 4 - 1), soit AB⃗(5 ; 3). AC⃗(5 - (-2) ; -2 - 1), soit AC⃗(7 ; -3).",
              "b) 2AB⃗ a pour coordonnées (10 ; 6). Donc w⃗ = 2AB⃗ - AC⃗ a pour coordonnées (10 - 7 ; 6 - (-3)), soit w⃗(3 ; 9).",
              "c) On note D(x ; y). ABCD est un parallélogramme si et seulement si AB⃗ = DC⃗, avec DC⃗(5 - x ; -2 - y).",
              "On obtient 5 - x = 5 et -2 - y = 3, donc x = 0 et y = -5.",
              "Contrôle : le milieu de [AC] est (1,5 ; -0,5) et celui de [BD] est ((3 + 0)/2 ; (4 - 5)/2) = (1,5 ; -0,5) : les diagonales ont bien le même milieu.",
              "Conclusion : AB⃗(5 ; 3), AC⃗(7 ; -3), w⃗(3 ; 9) et D(0 ; -5).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne les points E(4 ; -3) et F(-1 ; 2), et les vecteurs u⃗(2 ; -5) et v⃗(-3 ; 1). a) Calculez les coordonnées de EF⃗ et de FE⃗. b) Calculez les coordonnées de u⃗ + v⃗, de 3u⃗ et de u⃗ - 2v⃗.",
              hint: "Pour EF⃗, calculez « arrivée moins départ » : coordonnées de F moins coordonnées de E. Pour u⃗ - 2v⃗, calculez d'abord 2v⃗.",
              solution: [
                "a) EF⃗(-1 - 4 ; 2 - (-3)), soit EF⃗(-5 ; 5). FE⃗ est l'opposé de EF⃗ : FE⃗(5 ; -5).",
                "b) u⃗ + v⃗ a pour coordonnées (2 + (-3) ; -5 + 1) = (-1 ; -4).",
                "3u⃗ a pour coordonnées (3 × 2 ; 3 × (-5)) = (6 ; -15).",
                "2v⃗ a pour coordonnées (-6 ; 2), donc u⃗ - 2v⃗ a pour coordonnées (2 - (-6) ; -5 - 2) = (8 ; -7).",
              ],
            },
            {
              level: 2,
              statement: "On donne A(1 ; -2), B(4 ; 2) et C(-1 ; 3). a) Déterminez les coordonnées du point M tel que AM⃗ = BC⃗. b) Déterminez les coordonnées du point N tel que CN⃗ = 2AB⃗. c) Déterminez les coordonnées du point P, image de C par la translation de vecteur AB⃗.",
              hint: "Notez (x ; y) les coordonnées du point cherché, écrivez les coordonnées des deux vecteurs, puis égalez abscisses et ordonnées. L'image de C par la translation de vecteur AB⃗ est le point P tel que CP⃗ = AB⃗.",
              solution: [
                "a) BC⃗(-1 - 4 ; 3 - 2) = (-5 ; 1). Avec M(x ; y), AM⃗(x - 1 ; y + 2). AM⃗ = BC⃗ donne x - 1 = -5 et y + 2 = 1, donc M(-4 ; -1).",
                "b) AB⃗(4 - 1 ; 2 - (-2)) = (3 ; 4), donc 2AB⃗ a pour coordonnées (6 ; 8). Avec N(x ; y), CN⃗(x + 1 ; y - 3). On obtient x + 1 = 6 et y - 3 = 8, donc N(5 ; 11).",
                "c) P(x ; y) vérifie CP⃗ = AB⃗, soit x + 1 = 3 et y - 3 = 4, donc P(2 ; 7).",
                "Contrôle de c) : CP⃗(2 - (-1) ; 7 - 3) = (3 ; 4), qui sont bien les coordonnées de AB⃗.",
              ],
            },
            {
              level: 3,
              statement: "Dans un repère, on donne A(-1 ; 2), B(3 ; 0) et C(4 ; 3). a) Déterminez les coordonnées du point D tel que ABCD soit un parallélogramme. b) Calculez les coordonnées de AB⃗ + AD⃗ et comparez-les à celles de AC⃗. Quelle règle reconnaissez-vous ? c) Déterminez les coordonnées du point G tel que GA⃗ + GB⃗ + GC⃗ = 0⃗ (on admet que G est le centre de gravité du triangle ABC).",
              hint: "Pour c), notez G(x ; y), exprimez les coordonnées des trois vecteurs GA⃗, GB⃗ et GC⃗ en fonction de x et y, additionnez-les, puis écrivez que la somme a pour coordonnées (0 ; 0).",
              solution: [
                "a) On note D(x ; y). AB⃗(4 ; -2) et DC⃗(4 - x ; 3 - y). AB⃗ = DC⃗ donne 4 - x = 4 et 3 - y = -2, donc D(0 ; 5).",
                "b) AD⃗(0 - (-1) ; 5 - 2), soit AD⃗(1 ; 3). Donc AB⃗ + AD⃗ a pour coordonnées (4 + 1 ; -2 + 3) = (5 ; 1).",
                "AC⃗(4 - (-1) ; 3 - 2) = (5 ; 1). Ainsi AB⃗ + AD⃗ = AC⃗ : c'est la règle du parallélogramme (la somme de deux vecteurs de même origine est portée par la diagonale du parallélogramme qu'ils construisent).",
                "c) On note G(x ; y). GA⃗(-1 - x ; 2 - y), GB⃗(3 - x ; -y) et GC⃗(4 - x ; 3 - y).",
                "La somme GA⃗ + GB⃗ + GC⃗ a pour coordonnées (-1 - x + 3 - x + 4 - x ; 2 - y - y + 3 - y) = (6 - 3x ; 5 - 3y).",
                "Elle est nulle si et seulement si 6 - 3x = 0 et 5 - 3y = 0, soit x = 2 et y = 5/3.",
                "Conclusion : D(0 ; 5), AB⃗ + AD⃗ = AC⃗ et G(2 ; 5/3). On remarque que les coordonnées de G sont les moyennes de celles de A, B et C.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Avec u⃗(2 ; -3) et v⃗(-1 ; 4), reliez chaque vecteur à ses coordonnées.",
            pairs: [
              { left: "u⃗ + v⃗", right: "(1 ; 1)" },
              { left: "u⃗ - v⃗", right: "(3 ; -7)" },
              { left: "3u⃗", right: "(6 ; -9)" },
              { left: "-v⃗", right: "(1 ; -4)" },
              { left: "2u⃗ + v⃗", right: "(3 ; -2)" },
              { left: "AB⃗ avec A(1 ; 1) et B(3 ; -2)", right: "(2 ; -3)" },
            ],
          },
          quiz: [
            {
              q: "On donne A(3 ; -1) et B(1 ; 4). Quelles sont les coordonnées de AB⃗ ?",
              options: ["(2 ; -5)", "(4 ; 3)", "(-2 ; 3)", "(-2 ; 5)"],
              answer: 3,
              why: "AB⃗(xB - xA ; yB - yA) = (1 - 3 ; 4 - (-1)) = (-2 ; 5).",
            },
            {
              q: "Le vecteur u⃗ a pour coordonnées (4 ; -2). Quelles sont les coordonnées de -3u⃗ ?",
              options: ["(-12 ; -6)", "(-12 ; 6)", "(1 ; -5)", "(12 ; -6)"],
              answer: 1,
              why: "On multiplie chaque coordonnée par -3 : -3 × 4 = -12 et -3 × (-2) = 6.",
            },
            {
              q: "Le quadrilatère ABCD est un parallélogramme si et seulement si :",
              options: ["AB⃗ = DC⃗", "AB⃗ = CD⃗", "AC⃗ = BD⃗", "AD⃗ = CB⃗"],
              answer: 0,
              why: "Les côtés [AB] et [DC] sont parallèles, de même longueur et parcourus dans le même sens : AB⃗ = DC⃗.",
            },
            {
              q: "Avec u⃗(1 ; 3) et v⃗(-4 ; 2), le vecteur u⃗ + 2v⃗ a pour coordonnées :",
              options: ["(-3 ; 5)", "(-6 ; 10)", "(-7 ; 7)", "(2 ; 7)"],
              answer: 2,
              why: "2v⃗ a pour coordonnées (-8 ; 4), donc u⃗ + 2v⃗ a pour coordonnées (1 - 8 ; 3 + 4) = (-7 ; 7).",
            },
            {
              q: "Les vecteurs u⃗(x ; 5) et v⃗(-2 ; y) sont égaux. Que valent x et y ?",
              options: ["x = 5 et y = -2", "x = -2 et y = 5", "x = 2 et y = -5", "Impossible à savoir"],
              answer: 1,
              why: "Deux vecteurs égaux ont la même abscisse et la même ordonnée : x = -2 et 5 = y.",
            },
          ],
          trap: "Calculer les coordonnées de AB⃗ en faisant « départ moins arrivée » (xA - xB) au lieu de xB - xA : on obtient alors BA⃗, le vecteur opposé. Autre erreur : écrire AB⃗ = CD⃗ au lieu de AB⃗ = DC⃗ pour un parallélogramme ABCD.",
          method: "Faites un schéma à main levée avant tout calcul : il permet de prévoir le signe des coordonnées (vers la droite ou la gauche, vers le haut ou le bas) et de repérer immédiatement une erreur de signe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'milieu-distance',
          title: "Milieu d'un segment et distance entre deux points",
          minutes: 30,
          objectives: [
            "Calculer les coordonnées du milieu d'un segment.",
            "Calculer la distance entre deux points et la norme d'un vecteur dans un repère orthonormé.",
            "Utiliser ces formules pour démontrer la nature d'un triangle ou d'un quadrilatère.",
          ],
          course: [
            {
              heading: "Coordonnées du milieu d'un segment",
              paragraphs: [
                "Dans un repère quelconque (O ; i⃗, j⃗), le milieu I du segment [AB], avec A(xA ; yA) et B(xB ; yB), a pour coordonnées xI = (xA + xB)/2 et yI = (yA + yB)/2. Les coordonnées du milieu sont les moyennes des coordonnées des extrémités. Par exemple, le milieu de [AB] avec A(-3 ; 4) et B(5 ; 0) est I((-3 + 5)/2 ; (4 + 0)/2), soit I(1 ; 2).",
                "Cette formule se justifie avec les vecteurs : I est le milieu de [AB] si et seulement si AI⃗ = ½AB⃗. En coordonnées, xI - xA = ½(xB - xA), donc xI = xA + ½xB - ½xA = (xA + xB)/2, et de même pour l'ordonnée. Elle sert aussi à l'envers : si I(1 ; 2) est le milieu de [AB] et A(-3 ; 4), alors (-3 + xB)/2 = 1 donne xB = 5, et (4 + yB)/2 = 2 donne yB = 0.",
                "Application essentielle : un quadrilatère ABCD est un parallélogramme si et seulement si ses diagonales [AC] et [BD] ont le même milieu. Il suffit donc de calculer deux milieux et de les comparer.",
              ],
              box: { label: "Formule", text: "Le milieu I de [AB] a pour coordonnées ((xA + xB)/2 ; (yA + yB)/2). Cette formule est valable dans tout repère, orthonormé ou non." },
            },
            {
              heading: "Distance entre deux points et norme d'un vecteur",
              paragraphs: [
                "Dans un repère orthonormé, la distance entre A(xA ; yA) et B(xB ; yB) est AB = √((xB - xA)² + (yB - yA)²). Cette formule vient du théorème de Pythagore : on construit le triangle rectangle dont l'hypoténuse est [AB] et dont les côtés de l'angle droit, parallèles aux axes, ont pour longueurs les écarts entre les abscisses et entre les ordonnées. Exemple : A(1 ; 2) et B(4 ; 6) donnent AB = √(3² + 4²) = √(9 + 16) = √25 = 5.",
                "La norme d'un vecteur u⃗, notée ‖u⃗‖, est sa longueur. Dans une base orthonormée, si u⃗(x ; y), alors ‖u⃗‖ = √(x² + y²). Ainsi AB = ‖AB⃗‖. Par exemple, u⃗(-5 ; 12) a pour norme √(25 + 144) = √169 = 13. Le signe des coordonnées n'a pas d'importance, puisqu'elles sont élevées au carré : (xB - xA)² = (xA - xB)², donc AB = BA.",
                "Attention : la formule de distance n'est valable que dans un repère orthonormé. Si les axes ne sont pas perpendiculaires, ou si les unités diffèrent sur les deux axes, le théorème de Pythagore ne s'applique plus de cette façon. On donne souvent le résultat sous la forme d'une racine simplifiée : √(4² + 2²) = √20 = √(4 × 5) = 2√5.",
              ],
              box: { label: "Formule", text: "Dans un repère orthonormé : AB = √((xB - xA)² + (yB - yA)²) et, pour u⃗(x ; y), ‖u⃗‖ = √(x² + y²)." },
            },
            {
              heading: "Démontrer la nature d'une figure",
              paragraphs: [
                "Ces formules permettent de démontrer des propriétés géométriques par le calcul. Un triangle ABC est isocèle en A si AB = AC, équilatéral si ses trois côtés sont égaux, et rectangle en A si BC² = AB² + AC² (réciproque du théorème de Pythagore). On compare de préférence les carrés des longueurs, ce qui évite les racines carrées.",
                "Pour un quadrilatère ABCD : c'est un parallélogramme si ses diagonales ont le même milieu ; un parallélogramme est un rectangle si de plus ses diagonales ont la même longueur, un losange si deux côtés consécutifs ont la même longueur, et un carré s'il est à la fois rectangle et losange. On peut aussi déterminer un cercle : le cercle de diamètre [AB] a pour centre le milieu de [AB] et pour rayon AB/2, et un point M lui appartient si et seulement si sa distance au centre est égale au rayon.",
              ],
              box: { label: "Méthode", text: "Triangle rectangle en A : calculer AB², AC² et BC², puis vérifier que BC² = AB² + AC². Rectangle : diagonales de même milieu et de même longueur. Losange : diagonales de même milieu et deux côtés consécutifs de même longueur." },
            },
          ],
          keyPoints: [
            "Milieu de [AB] : ((xA + xB)/2 ; (yA + yB)/2), dans n'importe quel repère.",
            "Distance, en repère orthonormé uniquement : AB = √((xB - xA)² + (yB - yA)²).",
            "Norme : ‖u⃗‖ = √(x² + y²) pour u⃗(x ; y), et AB = ‖AB⃗‖.",
            "ABCD est un parallélogramme si et seulement si [AC] et [BD] ont le même milieu.",
            "Triangle rectangle : on compare les carrés des longueurs grâce à la réciproque du théorème de Pythagore.",
            "On simplifie les racines carrées : √20 = √(4 × 5) = 2√5.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(-1 ; 2), B(1 ; -2) et C(5 ; 0). a) Démontrez que le triangle ABC est rectangle et isocèle en B. b) Déterminez les coordonnées du point D tel que ABCD soit un parallélogramme, puis justifiez que ABCD est un carré. c) Donnez le centre et le rayon du cercle circonscrit au triangle ABC.",
            solution: [
              "a) AB² = (1 - (-1))² + (-2 - 2)² = 4 + 16 = 20 ; BC² = (5 - 1)² + (0 - (-2))² = 16 + 4 = 20 ; AC² = (5 - (-1))² + (0 - 2)² = 36 + 4 = 40.",
              "AB² + BC² = 20 + 20 = 40 = AC² : d'après la réciproque du théorème de Pythagore, ABC est rectangle en B. De plus AB² = BC², donc AB = BC : le triangle est isocèle en B.",
              "b) ABCD est un parallélogramme si et seulement si [AC] et [BD] ont le même milieu. Le milieu de [AC] est I((-1 + 5)/2 ; (2 + 0)/2) = I(2 ; 1).",
              "Avec D(x ; y), le milieu de [BD] est ((1 + x)/2 ; (-2 + y)/2). On veut (1 + x)/2 = 2 et (-2 + y)/2 = 1, d'où x = 3 et y = 4 : D(3 ; 4).",
              "ABCD est un parallélogramme qui a un angle droit en B et deux côtés consécutifs égaux (AB = BC) : c'est à la fois un rectangle et un losange, donc un carré.",
              "c) Le cercle circonscrit à un triangle rectangle a pour diamètre l'hypoténuse [AC] : son centre est I(2 ; 1) et son rayon vaut AC/2 = √40/2 = 2√10/2 = √10.",
              "Conclusion : ABC est rectangle isocèle en B, D(3 ; 4), ABCD est un carré, et le cercle circonscrit a pour centre I(2 ; 1) et pour rayon √10 (environ 3,16).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, on donne E(2 ; -3), F(-4 ; 5) et le vecteur u⃗(-6 ; 8). a) Calculez les coordonnées du milieu K de [EF]. b) Calculez la distance EF. c) Calculez ‖u⃗‖. Que remarquez-vous ?",
              hint: "Le milieu se calcule avec des moyennes ; la distance avec la racine carrée de la somme des carrés des écarts. Pour c), comparez u⃗ et EF⃗.",
              solution: [
                "a) K((2 + (-4))/2 ; (-3 + 5)/2), soit K(-1 ; 1).",
                "b) EF = √((-4 - 2)² + (5 - (-3))²) = √(36 + 64) = √100 = 10.",
                "c) ‖u⃗‖ = √((-6)² + 8²) = √(36 + 64) = √100 = 10.",
                "On remarque que EF⃗(-4 - 2 ; 5 + 3) = (-6 ; 8) : u⃗ = EF⃗, donc il est normal que ‖u⃗‖ = EF = 10.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthonormé, on donne A(2 ; 1) et I(-1 ; 3). a) Déterminez les coordonnées du point B tel que I soit le milieu de [AB]. b) Calculez la longueur AB et donnez-la sous la forme a√b, avec b entier le plus petit possible. c) Le point M(1 ; 6) appartient-il au cercle de diamètre [AB] ?",
              hint: "Pour a), écrivez (2 + xB)/2 = -1 et (1 + yB)/2 = 3. Pour c), le cercle a pour centre I et pour rayon AB/2 : comparez IM à ce rayon.",
              solution: [
                "a) (2 + xB)/2 = -1 donne 2 + xB = -2, soit xB = -4. (1 + yB)/2 = 3 donne 1 + yB = 6, soit yB = 5. Donc B(-4 ; 5).",
                "b) AB = √((-4 - 2)² + (5 - 1)²) = √(36 + 16) = √52 = √(4 × 13) = 2√13.",
                "c) Le cercle de diamètre [AB] a pour centre I(-1 ; 3) et pour rayon AB/2 = √13.",
                "IM = √((1 - (-1))² + (6 - 3)²) = √(4 + 9) = √13.",
                "IM est égal au rayon : le point M appartient au cercle de diamètre [AB].",
              ],
            },
            {
              level: 3,
              statement: "Dans un repère orthonormé, on donne A(-1 ; 1), B(3 ; -1), C(4 ; 1) et D(0 ; 3). a) Démontrez que ABCD est un parallélogramme. b) Démontrez que ABCD est un rectangle. c) ABCD est-il un carré ? d) Calculez l'aire de ABCD.",
              hint: "Comparez les milieux des diagonales, puis leurs longueurs. Pour c), comparez deux côtés consécutifs. L'aire d'un rectangle est le produit de deux côtés consécutifs.",
              solution: [
                "a) Milieu de [AC] : ((-1 + 4)/2 ; (1 + 1)/2) = (1,5 ; 1). Milieu de [BD] : ((3 + 0)/2 ; (-1 + 3)/2) = (1,5 ; 1).",
                "Les diagonales ont le même milieu : ABCD est un parallélogramme.",
                "b) AC² = (4 - (-1))² + (1 - 1)² = 25 et BD² = (0 - 3)² + (3 - (-1))² = 9 + 16 = 25. Donc AC = BD = 5.",
                "Un parallélogramme dont les diagonales ont la même longueur est un rectangle : ABCD est un rectangle.",
                "c) AB² = (3 - (-1))² + (-1 - 1)² = 16 + 4 = 20 et BC² = (4 - 3)² + (1 - (-1))² = 1 + 4 = 5. Comme AB ≠ BC, le rectangle n'est pas un losange : ce n'est pas un carré.",
                "d) Aire = AB × BC = √20 × √5 = √100 = 10.",
                "Contrôle : AB² + BC² = 20 + 5 = 25 = AC², ce qui confirme l'angle droit en B. L'aire de ABCD vaut 10 unités d'aire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Milieux, distances et normes.",
            statements: [
              { text: "La formule du milieu n'est valable que dans un repère orthonormé.", true: false, why: "Le milieu se calcule par des moyennes dans tout repère ; c'est la formule de distance qui exige un repère orthonormé." },
              { text: "On trouve la même valeur de AB si l'on calcule xA - xB au lieu de xB - xA.", true: true, why: "Les écarts sont élevés au carré, et (xA - xB)² = (xB - xA)²." },
              { text: "√(3² + 4²) = 3 + 4 = 7.", true: false, why: "La racine d'une somme n'est pas la somme des termes : √(9 + 16) = √25 = 5." },
              { text: "Si [AC] et [BD] ont le même milieu, alors ABCD est un parallélogramme.", true: true, why: "C'est la caractérisation du parallélogramme par ses diagonales." },
              { text: "Un parallélogramme dont les diagonales ont la même longueur est un losange.", true: false, why: "C'est un rectangle ; un losange a deux côtés consécutifs de même longueur." },
              { text: "Dans une base orthonormée, la norme du vecteur u⃗(-3 ; -4) est égale à 5.", true: true, why: "‖u⃗‖ = √(9 + 16) = 5 : une norme est toujours positive ou nulle." },
              { text: "Le milieu de [AB], avec A(2 ; 6) et B(4 ; 0), est le point (1 ; -3).", true: false, why: "On fait la moyenne et non la demi-différence : le milieu est (3 ; 3)." },
            ],
          },
          quiz: [
            {
              q: "Quel est le milieu du segment [AB], avec A(-4 ; 7) et B(2 ; -1) ?",
              options: ["(-3 ; 4)", "(-1 ; 3)", "(-2 ; 6)", "(3 ; -4)"],
              answer: 1,
              why: "Moyennes des coordonnées : (-4 + 2)/2 = -1 et (7 - 1)/2 = 3.",
            },
            {
              q: "Dans un repère orthonormé, quelle est la distance entre A(1 ; -2) et B(7 ; 6) ?",
              options: ["14", "√28", "10", "100"],
              answer: 2,
              why: "AB = √(6² + 8²) = √(36 + 64) = √100 = 10.",
            },
            {
              q: "Quelle est la norme du vecteur u⃗(2 ; -1) dans une base orthonormée ?",
              options: ["√5", "1", "√3", "3"],
              answer: 0,
              why: "‖u⃗‖ = √(2² + (-1)²) = √(4 + 1) = √5.",
            },
            {
              q: "Un parallélogramme a des diagonales de même longueur. C'est donc :",
              options: ["un losange", "un trapèze quelconque", "un carré, forcément", "un rectangle"],
              answer: 3,
              why: "Un parallélogramme dont les diagonales ont la même longueur est un rectangle ; ce n'est un carré que si, en plus, ses côtés consécutifs sont égaux.",
            },
            {
              q: "Les longueurs d'un triangle ABC vérifient AB² = 10, AC² = 40 et BC² = 50. Que peut-on conclure ?",
              options: ["ABC est isocèle en A", "ABC est équilatéral", "ABC est rectangle en A", "ABC est rectangle en C"],
              answer: 2,
              why: "AB² + AC² = 10 + 40 = 50 = BC² : le triangle est rectangle au sommet opposé au plus grand côté [BC], c'est-à-dire en A.",
            },
          ],
          trap: "Utiliser la formule de distance dans un repère qui n'est pas orthonormé, ou écrire √(a² + b²) = a + b. Autre confusion fréquente : calculer le milieu avec une différence, (xB - xA)/2, au lieu de la moyenne (xA + xB)/2.",
          method: "Pour démontrer la nature d'une figure, annoncez d'abord la propriété utilisée (par exemple « un parallélogramme dont les diagonales ont la même longueur est un rectangle »), faites ensuite les calculs, et comparez des carrés de longueurs plutôt que des racines.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'colinearite',
          title: "Colinéarité et combinaison linéaire de deux vecteurs",
          minutes: 35,
          objectives: [
            "Reconnaître deux vecteurs colinéaires et calculer le déterminant de deux vecteurs dans une base orthonormée.",
            "Utiliser le critère de colinéarité pour démontrer un alignement de points ou un parallélisme de droites.",
            "Exprimer un vecteur comme combinaison linéaire de deux vecteurs non colinéaires.",
          ],
          course: [
            {
              heading: "Vecteurs colinéaires",
              paragraphs: [
                "Deux vecteurs u⃗ et v⃗ sont colinéaires lorsque l'un est égal au produit de l'autre par un nombre réel : il existe un réel k tel que v⃗ = k u⃗ (ou u⃗ = k v⃗). Géométriquement, deux vecteurs non nuls sont colinéaires lorsqu'ils ont la même direction ; ils peuvent avoir le même sens (k > 0) ou des sens contraires (k < 0). Par convention, le vecteur nul est colinéaire à tout vecteur, puisque 0⃗ = 0 × u⃗.",
                "En coordonnées, u⃗(2 ; -3) et v⃗(-6 ; 9) sont colinéaires, car v⃗ = -3u⃗ : -3 × 2 = -6 et -3 × (-3) = 9. En revanche, u⃗(2 ; -3) et w⃗(4 ; 5) ne le sont pas : pour passer de 2 à 4, il faudrait k = 2, mais 2 × (-3) = -6 ≠ 5. Les coordonnées de deux vecteurs colinéaires sont proportionnelles.",
              ],
              box: { label: "Définition", text: "Les vecteurs u⃗ et v⃗ sont colinéaires s'il existe un réel k tel que v⃗ = k u⃗ ou u⃗ = k v⃗. Deux vecteurs non nuls sont colinéaires si et seulement s'ils ont la même direction." },
            },
            {
              heading: "Le déterminant, critère de colinéarité",
              paragraphs: [
                "Dans une base orthonormée, le déterminant des vecteurs u⃗(x ; y) et v⃗(x' ; y') est le nombre det(u⃗, v⃗) = xy' - x'y. On le retient en écrivant les coordonnées en colonnes côte à côte et en effectuant un produit en croix : le produit de la diagonale descendante moins celui de la diagonale montante. Par exemple, pour u⃗(2 ; -3) et v⃗(-6 ; 9) : det(u⃗, v⃗) = 2 × 9 - (-6) × (-3) = 18 - 18 = 0.",
                "Propriété : u⃗ et v⃗ sont colinéaires si et seulement si det(u⃗, v⃗) = 0. C'est la traduction de la proportionnalité des coordonnées sous la forme de l'égalité des produits en croix xy' = x'y. Pour u⃗(2 ; -3) et w⃗(4 ; 5), on obtient det(u⃗, w⃗) = 2 × 5 - 4 × (-3) = 10 + 12 = 22 ≠ 0 : ces vecteurs ne sont pas colinéaires. Ce critère est pratique, car il fonctionne même lorsque certaines coordonnées sont nulles.",
              ],
              box: { label: "Propriété", text: "Pour u⃗(x ; y) et v⃗(x' ; y'), det(u⃗, v⃗) = xy' - x'y. Les vecteurs u⃗ et v⃗ sont colinéaires si et seulement si det(u⃗, v⃗) = 0." },
            },
            {
              heading: "Alignement et parallélisme",
              paragraphs: [
                "Trois points A, B et C sont alignés si et seulement si les vecteurs AB⃗ et AC⃗ sont colinéaires. En effet, si AC⃗ = k AB⃗, les droites (AB) et (AC) ont la même direction et le point A en commun : elles sont confondues. Exemple : A(1 ; 2), B(3 ; 5) et C(7 ; 11). AB⃗(2 ; 3), AC⃗(6 ; 9) et det(AB⃗, AC⃗) = 2 × 9 - 6 × 3 = 0 : les points sont alignés (d'ailleurs AC⃗ = 3AB⃗).",
                "Deux droites (AB) et (CD) sont parallèles si et seulement si les vecteurs AB⃗ et CD⃗ sont colinéaires. Attention à la différence : pour l'alignement, les deux vecteurs ont un point commun ; pour le parallélisme, les droites peuvent être distinctes ou confondues. Pour démontrer qu'un quadrilatère est un trapèze, on montre que deux de ses côtés opposés sont portés par des droites parallèles.",
              ],
              box: { label: "Méthode", text: "A, B et C sont alignés si et seulement si det(AB⃗, AC⃗) = 0. Les droites (AB) et (CD) sont parallèles si et seulement si det(AB⃗, CD⃗) = 0." },
            },
            {
              heading: "Combinaison linéaire de deux vecteurs",
              paragraphs: [
                "Une combinaison linéaire des vecteurs u⃗ et v⃗ est un vecteur de la forme a u⃗ + b v⃗, où a et b sont des réels. Lorsque u⃗ et v⃗ ne sont pas colinéaires, ils forment une base du plan, et tout vecteur w⃗ du plan s'écrit d'une seule façon w⃗ = a u⃗ + b v⃗. C'est la généralisation de l'écriture w⃗ = x i⃗ + y j⃗ dans la base (i⃗, j⃗).",
                "Pour trouver a et b, on traduit l'égalité en coordonnées et on résout un système. Exemple : u⃗(1 ; 2), v⃗(3 ; -1) et w⃗(7 ; 0). On cherche a et b tels que a + 3b = 7 et 2a - b = 0. La seconde équation donne b = 2a ; en remplaçant, a + 6a = 7, donc a = 1 et b = 2. Vérification : u⃗ + 2v⃗ a pour coordonnées (1 + 6 ; 2 - 2) = (7 ; 0). Ainsi w⃗ = u⃗ + 2v⃗.",
              ],
              box: { label: "Propriété", text: "Si u⃗ et v⃗ ne sont pas colinéaires, c'est-à-dire si det(u⃗, v⃗) ≠ 0, tout vecteur w⃗ du plan s'écrit de manière unique w⃗ = a u⃗ + b v⃗, avec a et b réels." },
            },
          ],
          keyPoints: [
            "u⃗ et v⃗ sont colinéaires s'il existe un réel k tel que v⃗ = k u⃗ (ou u⃗ = k v⃗).",
            "det(u⃗, v⃗) = xy' - x'y ; les vecteurs sont colinéaires si et seulement si det(u⃗, v⃗) = 0.",
            "A, B et C sont alignés si et seulement si AB⃗ et AC⃗ sont colinéaires.",
            "(AB) et (CD) sont parallèles si et seulement si AB⃗ et CD⃗ sont colinéaires.",
            "Deux vecteurs non colinéaires forment une base : tout vecteur s'écrit a u⃗ + b v⃗ de façon unique.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(-2 ; 3), B(1 ; 1), C(7 ; -3) et D(4 ; 5). a) Les points A, B et C sont-ils alignés ? b) Les droites (AD) et (BC) sont-elles parallèles ? c) Déterminez le réel y pour que le point E(10 ; y) appartienne à la droite (AB).",
            solution: [
              "a) AB⃗(1 - (-2) ; 1 - 3) = (3 ; -2) et AC⃗(7 - (-2) ; -3 - 3) = (9 ; -6).",
              "det(AB⃗, AC⃗) = 3 × (-6) - 9 × (-2) = -18 + 18 = 0. Les vecteurs sont colinéaires (AC⃗ = 3AB⃗) : A, B et C sont alignés.",
              "b) AD⃗(4 - (-2) ; 5 - 3) = (6 ; 2) et BC⃗(7 - 1 ; -3 - 1) = (6 ; -4).",
              "det(AD⃗, BC⃗) = 6 × (-4) - 6 × 2 = -24 - 12 = -36 ≠ 0 : les droites (AD) et (BC) ne sont pas parallèles.",
              "c) Avec E(10 ; y) : AE⃗(12 ; y - 3). Les points A, B et E sont alignés si et seulement si det(AB⃗, AE⃗) = 3(y - 3) - 12 × (-2) = 0, soit 3y - 9 + 24 = 0, c'est-à-dire 3y + 15 = 0, donc y = -5.",
              "Vérification : AE⃗(12 ; -8) = 4AB⃗. Conclusion : A, B et C sont alignés, (AD) et (BC) ne sont pas parallèles, et E(10 ; -5).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans chaque cas, calculez det(u⃗, v⃗) et dites si les vecteurs sont colinéaires ; si oui, donnez le réel k tel que v⃗ = k u⃗. a) u⃗(4 ; -10) et v⃗(-6 ; 15). b) u⃗(3 ; 5) et v⃗(5 ; 3). c) u⃗(0 ; 2) et v⃗(0 ; -7).",
              hint: "det(u⃗, v⃗) = xy' - x'y. Lorsqu'il est nul, divisez une coordonnée non nulle de v⃗ par la coordonnée correspondante de u⃗ pour obtenir k.",
              solution: [
                "a) det(u⃗, v⃗) = 4 × 15 - (-6) × (-10) = 60 - 60 = 0 : colinéaires. k = -6/4 = -1,5, et l'on vérifie que -1,5 × (-10) = 15. Donc v⃗ = -1,5u⃗.",
                "b) det(u⃗, v⃗) = 3 × 3 - 5 × 5 = 9 - 25 = -16 ≠ 0 : ces vecteurs ne sont pas colinéaires.",
                "c) det(u⃗, v⃗) = 0 × (-7) - 0 × 2 = 0 : colinéaires. k = -7/2 = -3,5, et l'on a bien -3,5 × 0 = 0. Donc v⃗ = -3,5u⃗.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthonormé, on donne A(0 ; 1), B(4 ; 3), C(5 ; 6) et D(-1 ; 3). a) Démontrez que les droites (AB) et (DC) sont parallèles. b) ABCD est-il un parallélogramme ? Quelle est la nature de ce quadrilatère ? c) Déterminez le réel m pour que le point M(m ; 7) appartienne à la droite (AB).",
              hint: "Pour b), comparez AB⃗ et DC⃗ : sont-ils égaux, ou seulement colinéaires ? Pour c), écrivez que det(AB⃗, AM⃗) = 0.",
              solution: [
                "a) AB⃗(4 ; 2) et DC⃗(5 - (-1) ; 6 - 3) = (6 ; 3). det(AB⃗, DC⃗) = 4 × 3 - 6 × 2 = 12 - 12 = 0 : les vecteurs sont colinéaires, donc (AB) et (DC) sont parallèles.",
                "b) DC⃗ = 1,5AB⃗, donc AB⃗ ≠ DC⃗ : ABCD n'est pas un parallélogramme.",
                "Vérifions les deux autres côtés : AD⃗(-1 ; 2) et BC⃗(1 ; 3), det(AD⃗, BC⃗) = -1 × 3 - 1 × 2 = -5 ≠ 0. Les côtés [AD] et [BC] ne sont pas parallèles : ABCD est un trapèze de bases [AB] et [DC].",
                "c) AM⃗(m ; 6). det(AB⃗, AM⃗) = 4 × 6 - m × 2 = 24 - 2m. Il est nul si et seulement si m = 12.",
                "Vérification : AM⃗(12 ; 6) = 3AB⃗. Le point M(12 ; 7) appartient à la droite (AB).",
              ],
            },
            {
              level: 3,
              statement: "On donne les vecteurs u⃗(2 ; 1), v⃗(-1 ; 3) et w⃗(8 ; 11). a) Démontrez que u⃗ et v⃗ ne sont pas colinéaires. b) Déterminez les réels a et b tels que w⃗ = a u⃗ + b v⃗. c) Déterminez le réel t pour lequel le vecteur z⃗(t ; 6) est colinéaire à u⃗, puis écrivez z⃗ en fonction de u⃗. d) Un point P vérifie AP⃗ = 5u⃗ + 2v⃗, avec A(-3 ; 1). Quelles sont ses coordonnées ?",
              hint: "Pour b), écrivez le système 2a - b = 8 et a + 3b = 11, puis exprimez b en fonction de a dans la première équation. Pour d), utilisez le résultat de b).",
              solution: [
                "a) det(u⃗, v⃗) = 2 × 3 - (-1) × 1 = 6 + 1 = 7 ≠ 0 : u⃗ et v⃗ ne sont pas colinéaires, ils forment une base.",
                "b) a u⃗ + b v⃗ a pour coordonnées (2a - b ; a + 3b). On résout 2a - b = 8 et a + 3b = 11.",
                "La première équation donne b = 2a - 8. En remplaçant : a + 3(2a - 8) = 11, soit 7a - 24 = 11, donc 7a = 35 et a = 5, puis b = 2 × 5 - 8 = 2.",
                "Vérification : 5u⃗ + 2v⃗ a pour coordonnées (10 - 2 ; 5 + 6) = (8 ; 11). Donc w⃗ = 5u⃗ + 2v⃗.",
                "c) det(u⃗, z⃗) = 2 × 6 - t × 1 = 12 - t. Il est nul si et seulement si t = 12. Alors z⃗(12 ; 6) = 6u⃗.",
                "d) AP⃗ = 5u⃗ + 2v⃗ = w⃗, donc AP⃗(8 ; 11). Avec P(x ; y) : x + 3 = 8 et y - 1 = 11, d'où P(5 ; 12).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de cette démonstration : les points A(1 ; 1), B(3 ; 4) et C(7 ; 10) sont-ils alignés ?",
            items: [
              "AB⃗ a pour coordonnées (2 ; 3) et AC⃗ a pour coordonnées (6 ; 9)",
              "det(AB⃗, AC⃗) = 2 × 9 - 6 × 3",
              "det(AB⃗, AC⃗) = 18 - 18 = 0",
              "Les vecteurs AB⃗ et AC⃗ sont donc colinéaires",
              "Les droites (AB) et (AC) sont parallèles et ont le point A en commun",
              "Conclusion : les points A, B et C sont alignés",
            ],
          },
          quiz: [
            {
              q: "Quel est le déterminant des vecteurs u⃗(3 ; -2) et v⃗(5 ; 4) ?",
              options: ["22", "2", "-22", "7"],
              answer: 0,
              why: "det(u⃗, v⃗) = 3 × 4 - 5 × (-2) = 12 + 10 = 22.",
            },
            {
              q: "Pour quelle valeur de x les vecteurs u⃗(x ; 6) et v⃗(2 ; 3) sont-ils colinéaires ?",
              options: ["1", "9", "3", "4"],
              answer: 3,
              why: "det(u⃗, v⃗) = 3x - 2 × 6 = 3x - 12, qui est nul pour x = 4 (et alors u⃗ = 2v⃗).",
            },
            {
              q: "Trois points A, B et C sont alignés si et seulement si :",
              options: ["AB = AC", "AB⃗ et AC⃗ sont colinéaires", "AB⃗ et AC⃗ ont la même norme", "det(AB⃗, AC⃗) est différent de 0"],
              answer: 1,
              why: "Des vecteurs AB⃗ et AC⃗ colinéaires donnent des droites (AB) et (AC) parallèles passant par A, donc confondues.",
            },
            {
              q: "Le vecteur w⃗(5 ; 1) s'écrit a u⃗ + b v⃗ avec u⃗(1 ; 1) et v⃗(1 ; -1). Que valent a et b ?",
              options: ["a = 2 et b = 3", "a = 5 et b = 1", "a = 3 et b = 2", "a = 4 et b = 1"],
              answer: 2,
              why: "On résout a + b = 5 et a - b = 1 : en additionnant, 2a = 6, donc a = 3 et b = 2.",
            },
            {
              q: "Les droites (AB) et (CD) sont parallèles lorsque :",
              options: ["det(AB⃗, CD⃗) = 0", "AB = CD", "AB⃗ et CD⃗ ont la même norme", "les points A, B, C et D sont distincts"],
              answer: 0,
              why: "Les droites sont parallèles si et seulement si leurs vecteurs AB⃗ et CD⃗ sont colinéaires, c'est-à-dire de déterminant nul.",
            },
          ],
          trap: "Confondre colinéarité et égalité : u⃗(1 ; 2) et v⃗(-3 ; -6) sont colinéaires sans être égaux (v⃗ = -3u⃗). Autre erreur : se tromper dans le produit en croix, det(u⃗, v⃗) = xy' - x'y, et non xx' - yy'.",
          method: "Avant de calculer un déterminant, écrivez les deux vecteurs en colonnes côte à côte ; si le déterminant est nul, cherchez le coefficient k (en divisant deux coordonnées correspondantes non nulles) pour contrôler votre résultat.",
        },
      ],
    },
    /* ================================================================== */
    /* STATISTIQUES ET CROISEMENT DE VARIABLES                             */
    /* ================================================================== */
    {
      id: 'statistiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'proportions-evolutions',
          title: "Proportions, pourcentages et évolutions successives",
          minutes: 30,
          objectives: [
            "Calculer une proportion, l'exprimer en pourcentage et calculer une proportion de proportion.",
            "Calculer un taux d'évolution et le coefficient multiplicateur associé.",
            "Calculer le taux d'évolution global d'évolutions successives et le taux d'évolution réciproque.",
          ],
          course: [
            {
              heading: "Proportion et pourcentage",
              paragraphs: [
                "On considère une population E (un ensemble d'individus) d'effectif nE, et une partie A de cette population, d'effectif nA. La proportion de A dans E est le nombre p = nA/nE. C'est un nombre compris entre 0 et 1, que l'on peut écrire sous forme décimale, fractionnaire ou en pourcentage. Par exemple, dans un lycée de 1 200 élèves (données fictives), 420 sont en seconde : la proportion d'élèves de seconde est 420/1 200 = 0,35, soit 35 %.",
                "Inversement, connaissant la proportion p et l'effectif total nE, on calcule nA = p × nE : 35 % de 1 200, c'est 0,35 × 1 200 = 420. Prendre t % d'une quantité revient à la multiplier par t/100.",
                "Proportion de proportion : si A est une partie de B, elle-même partie de E, alors la proportion de A dans E est le produit des proportions : p = p1 × p2, où p1 est la proportion de A dans B et p2 celle de B dans E. Si 35 % des élèves sont en seconde et que 40 % des élèves de seconde sont demi-pensionnaires, alors les élèves de seconde demi-pensionnaires représentent 0,4 × 0,35 = 0,14, soit 14 % de l'ensemble des élèves.",
              ],
              box: { label: "Formule", text: "Proportion : p = nA/nE, avec 0 ≤ p ≤ 1. Effectif : nA = p × nE. Proportion de proportion : p = p1 × p2 (on multiplie, on n'additionne pas)." },
            },
            {
              heading: "Taux d'évolution et coefficient multiplicateur",
              paragraphs: [
                "Lorsqu'une grandeur passe d'une valeur initiale V0 (non nulle) à une valeur finale V1, la variation absolue est V1 - V0 et la variation relative, ou taux d'évolution, est t = (V1 - V0)/V0. Le taux s'exprime souvent en pourcentage : il est positif pour une hausse et négatif pour une baisse. Si un prix passe de 80 € à 92 €, la variation absolue est de 12 € et le taux d'évolution est 12/80 = 0,15, soit une hausse de 15 %.",
                "Le coefficient multiplicateur est le nombre CM = V1/V0 = 1 + t : on passe de la valeur initiale à la valeur finale en multipliant par CM. Augmenter de t %, c'est multiplier par 1 + t/100 ; diminuer de t %, c'est multiplier par 1 - t/100. Ainsi, une hausse de 15 % correspond à CM = 1,15, une baisse de 8 % à CM = 0,92, et une hausse de 100 % à CM = 2 (un doublement). Un CM supérieur à 1 traduit une hausse, un CM compris entre 0 et 1 une baisse.",
              ],
              box: { label: "Formule", text: "Taux d'évolution : t = (V1 - V0)/V0. Coefficient multiplicateur : CM = V1/V0 = 1 + t. Hausse de t % : multiplier par 1 + t/100. Baisse de t % : multiplier par 1 - t/100." },
            },
            {
              heading: "Évolutions successives et évolution réciproque",
              paragraphs: [
                "Lorsqu'une grandeur subit plusieurs évolutions successives, le coefficient multiplicateur global est le produit des coefficients multiplicateurs : CM = CM1 × CM2. Le taux global est alors T = CM - 1. Exemple : une hausse de 20 % suivie d'une baisse de 20 % donne CM = 1,2 × 0,8 = 0,96, donc T = -0,04 : c'est une baisse de 4 %, et non une évolution nulle. Les pourcentages successifs ne s'additionnent pas, car le second s'applique à une valeur qui a déjà changé.",
                "L'évolution réciproque est celle qui permet de revenir à la valeur initiale. Si CM est le coefficient de l'évolution de départ, le coefficient réciproque est 1/CM. Après une hausse de 25 % (CM = 1,25), il faut multiplier par 1/1,25 = 0,8 pour revenir au départ : c'est une baisse de 20 %, et non de 25 %. Réciproquement, après une baisse de 20 % (CM = 0,8), il faut une hausse de 25 %, car 1/0,8 = 1,25.",
              ],
              box: { label: "À retenir", text: "Évolutions successives : on multiplie les coefficients multiplicateurs. Taux global : T = CM global - 1. Évolution réciproque : coefficient 1/CM. Les taux ne s'additionnent pas, et une hausse de t % n'est pas compensée par une baisse de t %." },
            },
          ],
          keyPoints: [
            "Proportion de A dans E : p = nA/nE ; effectif : nA = p × nE.",
            "Proportion de proportion : p = p1 × p2.",
            "Taux d'évolution : t = (V1 - V0)/V0 ; coefficient multiplicateur : CM = 1 + t.",
            "Hausse de t % : multiplier par 1 + t/100 ; baisse de t % : multiplier par 1 - t/100.",
            "Évolutions successives : CM global = produit des CM ; taux global = CM global - 1.",
            "Évolution réciproque : coefficient 1/CM ; une hausse de 25 % est compensée par une baisse de 20 %.",
          ],
          example: {
            statement: "Le prix d'un vélo est de 450 € (données fictives). Il augmente de 12 %, puis baisse de 10 %. a) Quel est le prix final ? b) Quel est le taux d'évolution global ? c) Quel taux d'évolution faudrait-il appliquer au prix final pour revenir à 450 € ? Arrondissez à 0,01 %.",
            solution: [
              "a) Hausse de 12 % : CM1 = 1 + 12/100 = 1,12. Baisse de 10 % : CM2 = 1 - 10/100 = 0,9.",
              "Coefficient global : CM = 1,12 × 0,9 = 1,008. Prix final : 450 × 1,008 = 453,60 €.",
              "Contrôle étape par étape : 450 × 1,12 = 504 €, puis 504 × 0,9 = 453,60 €.",
              "b) Taux global : T = 1,008 - 1 = 0,008, soit une hausse de 0,8 % (et non de 12 - 10 = 2 %).",
              "c) Le coefficient réciproque est 1/1,008 ≈ 0,99206 ; le taux correspondant est environ 0,99206 - 1 = -0,00794, soit une baisse d'environ 0,79 %.",
              "Conclusion : le prix final est 453,60 €, l'évolution globale est une hausse de 0,8 %, et il faudrait une baisse d'environ 0,79 % pour revenir à 450 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Dans une classe de 32 élèves (données fictives), 12 pratiquent un sport en club. Quelle est la proportion de ces élèves, en pourcentage ? b) Un article coûte 60 €. Calculez son prix après une hausse de 15 %, puis, en repartant de 60 €, après une baisse de 15 %. c) Donnez le coefficient multiplicateur associé à une baisse de 3 %, puis à une hausse de 150 %.",
              hint: "Une proportion est un quotient « partie sur total ». Une hausse de t % revient à multiplier par 1 + t/100, une baisse de t % à multiplier par 1 - t/100.",
              solution: [
                "a) p = 12/32 = 0,375, soit 37,5 % des élèves.",
                "b) Après une hausse de 15 % : 60 × 1,15 = 69 €. Après une baisse de 15 % : 60 × 0,85 = 51 €.",
                "c) Baisse de 3 % : CM = 1 - 0,03 = 0,97. Hausse de 150 % : CM = 1 + 1,5 = 2,5 (la valeur est multipliée par 2,5).",
              ],
            },
            {
              level: 2,
              statement: "La population d'une commune (données fictives) est passée de 8 000 habitants en 2015 à 8 600 habitants en 2020, puis à 8 170 habitants en 2025. a) Calculez le taux d'évolution entre 2015 et 2020, puis entre 2020 et 2025. b) Calculez le taux d'évolution global entre 2015 et 2025 de deux façons différentes. c) Dans une autre commune, 55 % des habitants sont des femmes et 30 % de ces femmes ont plus de 60 ans. Quelle proportion de la population totale représentent les femmes de plus de 60 ans ?",
              hint: "Pour b), calculez directement (V2025 - V2015)/V2015, puis vérifiez avec le produit des coefficients multiplicateurs. Pour c), il s'agit d'une proportion de proportion.",
              solution: [
                "a) De 2015 à 2020 : t1 = (8 600 - 8 000)/8 000 = 600/8 000 = 0,075, soit une hausse de 7,5 %.",
                "De 2020 à 2025 : t2 = (8 170 - 8 600)/8 600 = -430/8 600 = -0,05, soit une baisse de 5 %.",
                "b) Première méthode : T = (8 170 - 8 000)/8 000 = 170/8 000 = 0,02125, soit une hausse de 2,125 %.",
                "Seconde méthode : CM = 1,075 × 0,95 = 1,02125, donc T = 1,02125 - 1 = 0,02125. On retrouve une hausse de 2,125 % (et non 7,5 - 5 = 2,5 %).",
                "c) p = 0,30 × 0,55 = 0,165 : les femmes de plus de 60 ans représentent 16,5 % de la population.",
              ],
            },
            {
              level: 3,
              statement: "Une action en bourse (données fictives) perd 40 % de sa valeur la première année. a) Quel taux d'évolution devrait-elle connaître la deuxième année pour retrouver sa valeur initiale ? Arrondissez à 0,1 %. b) En réalité, elle augmente de 30 % la deuxième année, puis encore de 30 % la troisième année. A-t-elle retrouvé sa valeur initiale au bout de trois ans ? Donnez le taux d'évolution global. c) Une autre grandeur subit deux hausses successives de même taux t et augmente au total de 21 %. Déterminez t.",
              hint: "Traduisez chaque évolution par un coefficient multiplicateur. Pour c), le coefficient global est (1 + t)², et il vaut 1,21.",
              solution: [
                "a) Une baisse de 40 % correspond à CM = 0,6. Le coefficient réciproque est 1/0,6 = 5/3 ≈ 1,6667, soit un taux d'environ +66,7 %. Il faudrait une hausse d'environ 66,7 % (et non de 40 %).",
                "b) CM global sur trois ans : 0,6 × 1,3 × 1,3 = 0,6 × 1,69 = 1,014.",
                "Le taux global est T = 1,014 - 1 = 0,014 : l'action a gagné 1,4 % par rapport à sa valeur initiale, qu'elle a donc dépassée.",
                "c) On a (1 + t)² = 1,21. Comme 1 + t est positif, 1 + t = √1,21 = 1,1.",
                "Donc t = 0,1 : chacune des deux hausses est de 10 %. Vérification : 1,1 × 1,1 = 1,21.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque évolution au calcul qui permet d'obtenir la valeur finale.",
            pairs: [
              { left: "Hausse de 20 %", right: "Multiplier par 1,2" },
              { left: "Baisse de 20 %", right: "Multiplier par 0,8" },
              { left: "Hausse de 3 %", right: "Multiplier par 1,03" },
              { left: "Baisse de 3 %", right: "Multiplier par 0,97" },
              { left: "Hausse de 100 %", right: "Multiplier par 2" },
              { left: "Hausse de 20 % puis baisse de 20 %", right: "Multiplier par 0,96" },
            ],
          },
          quiz: [
            {
              q: "Quel est le coefficient multiplicateur associé à une baisse de 35 % ?",
              options: ["0,35", "0,65", "1,35", "-0,35"],
              answer: 1,
              why: "Baisser de 35 %, c'est multiplier par 1 - 0,35 = 0,65.",
            },
            {
              q: "Un prix augmente de 10 %, puis à nouveau de 10 %. Quel est le taux d'évolution global ?",
              options: ["20 %", "100 %", "1 %", "21 %"],
              answer: 3,
              why: "CM global = 1,1 × 1,1 = 1,21, donc le taux global est de 21 %.",
            },
            {
              q: "Une valeur baisse de 50 %. Quelle hausse permet de revenir à la valeur initiale ?",
              options: ["50 %", "150 %", "100 %", "200 %"],
              answer: 2,
              why: "Le coefficient réciproque est 1/0,5 = 2 : il faut doubler la valeur, soit une hausse de 100 %.",
            },
            {
              q: "Dans un club, 60 % des membres sont mineurs et 25 % des mineurs sont des filles. Quelle est la proportion de filles mineures parmi tous les membres ?",
              options: ["15 %", "35 %", "85 %", "40 %"],
              answer: 0,
              why: "Proportion de proportion : 0,25 × 0,60 = 0,15, soit 15 %.",
            },
            {
              q: "Un loyer passe de 500 € à 540 €. Quel est le taux d'évolution ?",
              options: ["40 %", "8 %", "7,4 %", "4 %"],
              answer: 1,
              why: "t = (540 - 500)/500 = 40/500 = 0,08 : on divise par la valeur initiale, pas par la valeur finale.",
            },
          ],
          trap: "Additionner les pourcentages d'évolutions successives (une hausse de 20 % puis une baisse de 20 % ne donnent pas 0 %, mais une baisse de 4 %), ou croire qu'une baisse de t % compense une hausse de t %.",
          method: "Traduisez systématiquement chaque pourcentage d'évolution en coefficient multiplicateur avant tout calcul, puis contrôlez la vraisemblance : un coefficient supérieur à 1 doit donner une valeur finale plus grande que la valeur initiale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'indicateurs-statistiques',
          title: "Indicateurs de position et de dispersion",
          minutes: 35,
          objectives: [
            "Calculer la moyenne, éventuellement pondérée, d'une série statistique et utiliser la linéarité de la moyenne.",
            "Déterminer la médiane et les quartiles d'une série statistique.",
            "Calculer et interpréter l'étendue, l'écart interquartile et l'écart type.",
          ],
          course: [
            {
              heading: "La moyenne",
              paragraphs: [
                "Une série statistique donne les valeurs x1, x2, ..., xp d'un caractère, avec les effectifs n1, n2, ..., np ; l'effectif total est N = n1 + n2 + ... + np. La moyenne est x̄ = (n1x1 + n2x2 + ... + npxp)/N. On parle de moyenne pondérée, car chaque valeur compte autant de fois que son effectif (ou son coefficient). Par exemple, des notes de 12 (coefficient 2), 8 (coefficient 1) et 15 (coefficient 3) donnent x̄ = (24 + 8 + 45)/6 = 77/6 ≈ 12,8.",
                "Linéarité de la moyenne : si l'on transforme toutes les valeurs par yi = a xi + b, la nouvelle moyenne est ȳ = a x̄ + b. Si un professeur ajoute 1 point à toutes les copies, la moyenne augmente de 1 ; si l'on convertit des températures avec F = 1,8C + 32, une moyenne de 20 °C devient 1,8 × 20 + 32 = 68 °F. Lorsque les valeurs sont regroupées en classes, on obtient une valeur approchée de la moyenne en remplaçant chaque classe par son centre.",
                "La moyenne est sensible aux valeurs extrêmes : dans une entreprise où 9 salariés gagnent 2 000 € et le dirigeant 20 000 € (données fictives), le salaire moyen est (9 × 2 000 + 20 000)/10 = 3 800 €, alors qu'aucune personne ne gagne ce montant. C'est pourquoi on la complète par d'autres indicateurs.",
              ],
              box: { label: "Formule", text: "Moyenne pondérée : x̄ = (n1x1 + n2x2 + ... + npxp)/N. Linéarité : si yi = a xi + b pour toutes les valeurs, alors ȳ = a x̄ + b." },
            },
            {
              heading: "Médiane et quartiles",
              paragraphs: [
                "La médiane Me partage la série, rangée dans l'ordre croissant, en deux groupes de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales. Si l'effectif N est impair, Me est la valeur de rang (N + 1)/2 ; si N est pair, on prend la moyenne des valeurs de rangs N/2 et N/2 + 1. Pour 3 ; 5 ; 8 ; 9 ; 14, Me = 8 ; pour 3 ; 5 ; 8 ; 9 ; 14 ; 20, Me = (8 + 9)/2 = 8,5.",
                "Le premier quartile Q1 est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui soient inférieures ou égales ; le troisième quartile Q3 est la plus petite valeur de la série telle qu'au moins 75 % des valeurs lui soient inférieures ou égales. En pratique, on calcule N/4 et 3N/4, on les arrondit à l'entier supérieur s'ils ne sont pas entiers, et on lit les valeurs de ces rangs. Contrairement à la médiane, les quartiles sont toujours des valeurs de la série.",
                "Exemple : la série 2 ; 4 ; 4 ; 5 ; 7 ; 8 ; 10 ; 11 ; 12 ; 15 a pour effectif N = 10. Me = (7 + 8)/2 = 7,5. N/4 = 2,5, arrondi à 3 : Q1 est la 3e valeur, soit 4. 3N/4 = 7,5, arrondi à 8 : Q3 est la 8e valeur, soit 11. La médiane et les quartiles sont peu sensibles aux valeurs extrêmes : remplacer 15 par 150 ne les modifie pas.",
              ],
              box: { label: "Méthode", text: "Ranger les valeurs dans l'ordre croissant. Médiane : valeur de rang (N + 1)/2 si N est impair, moyenne des valeurs de rangs N/2 et N/2 + 1 si N est pair. Q1 : rang N/4, arrondi à l'entier supérieur. Q3 : rang 3N/4, arrondi à l'entier supérieur." },
            },
            {
              heading: "Indicateurs de dispersion",
              paragraphs: [
                "Les indicateurs de dispersion mesurent l'étalement des valeurs. L'étendue est la différence entre la plus grande et la plus petite valeur ; elle est très sensible aux valeurs extrêmes. L'écart interquartile est Q3 - Q1 : l'intervalle [Q1 ; Q3] contient environ la moitié centrale des valeurs. Dans l'exemple précédent, l'étendue vaut 15 - 2 = 13 et l'écart interquartile 11 - 4 = 7.",
                "L'écart type, noté σ (sigma), mesure la dispersion des valeurs autour de la moyenne. On calcule d'abord la variance V, moyenne des carrés des écarts à la moyenne : V = (n1(x1 - x̄)² + ... + np(xp - x̄)²)/N, puis σ = √V. Exemple : pour la série 6 ; 8 ; 10 ; 12 ; 14, on a x̄ = 10, les écarts à la moyenne sont -4, -2, 0, 2 et 4, donc V = (16 + 4 + 0 + 4 + 16)/5 = 8 et σ = √8 ≈ 2,83. En pratique, on obtient σ avec la calculatrice ou un tableur.",
                "On associe en général la moyenne à l'écart type, et la médiane à l'écart interquartile. Pour comparer deux séries de même moyenne, celle qui a le plus petit écart type est la plus homogène : ses valeurs sont plus regroupées autour de la moyenne.",
              ],
              box: { label: "À retenir", text: "Étendue = max - min. Écart interquartile = Q3 - Q1. Écart type : σ = √V, où V est la moyenne des carrés des écarts à la moyenne. Plus σ est petit, plus la série est concentrée autour de sa moyenne." },
            },
          ],
          keyPoints: [
            "Moyenne pondérée : x̄ = (n1x1 + ... + npxp)/N ; elle est sensible aux valeurs extrêmes.",
            "Linéarité : si toutes les valeurs deviennent a x + b, la moyenne devient a x̄ + b.",
            "Médiane : elle partage la série ordonnée en deux moitiés ; rang (N + 1)/2 si N est impair.",
            "Q1 et Q3 : valeurs de rangs N/4 et 3N/4, arrondis à l'entier supérieur.",
            "Étendue = max - min ; écart interquartile = Q3 - Q1.",
            "Écart type σ = √V : il mesure la dispersion des valeurs autour de la moyenne.",
          ],
          example: {
            statement: "Voici les notes de 12 élèves à un contrôle (données fictives) : 9 ; 14 ; 11 ; 6 ; 15 ; 12 ; 8 ; 11 ; 17 ; 13 ; 10 ; 12. Déterminez la moyenne, la médiane, les quartiles, l'étendue et l'écart interquartile de cette série.",
            solution: [
              "On range les valeurs dans l'ordre croissant : 6 ; 8 ; 9 ; 10 ; 11 ; 11 ; 12 ; 12 ; 13 ; 14 ; 15 ; 17. L'effectif total est N = 12.",
              "Moyenne : la somme des notes vaut 138, donc x̄ = 138/12 = 11,5.",
              "Médiane : N est pair, on prend la moyenne des 6e et 7e valeurs : Me = (11 + 12)/2 = 11,5.",
              "Premier quartile : N/4 = 3, donc Q1 est la 3e valeur : Q1 = 9. Troisième quartile : 3N/4 = 9, donc Q3 est la 9e valeur : Q3 = 13.",
              "Étendue : 17 - 6 = 11. Écart interquartile : Q3 - Q1 = 13 - 9 = 4.",
              "Conclusion : x̄ = 11,5 ; Me = 11,5 ; Q1 = 9 ; Q3 = 13 ; étendue 11 ; écart interquartile 4. Au moins la moitié des notes se situent entre 9 et 13.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un élève a obtenu les notes suivantes (données fictives) : 14 (coefficient 3), 10 (coefficient 2) et 16 (coefficient 1). a) Calculez sa moyenne. b) Le professeur ajoute 1,5 point à chaque note. Quelle est la nouvelle moyenne ? c) Quelle note, de coefficient 2, l'élève devrait-il obtenir à un quatrième devoir pour que sa moyenne (sans les points ajoutés) soit égale à 14 ?",
              hint: "Multipliez chaque note par son coefficient et divisez par la somme des coefficients. Pour c), notez x la note cherchée : la somme des coefficients devient 8.",
              solution: [
                "a) x̄ = (14 × 3 + 10 × 2 + 16 × 1)/(3 + 2 + 1) = (42 + 20 + 16)/6 = 78/6 = 13.",
                "b) Par linéarité de la moyenne, ajouter 1,5 à chaque note ajoute 1,5 à la moyenne : 13 + 1,5 = 14,5.",
                "c) On veut (78 + 2x)/8 = 14, soit 78 + 2x = 112, donc 2x = 34 et x = 17.",
                "Vérification : (78 + 34)/8 = 112/8 = 14. L'élève doit obtenir 17.",
              ],
            },
            {
              level: 2,
              statement: "On a demandé à 25 élèves leur nombre de frères et sœurs (données fictives). Valeurs : 0 ; 1 ; 2 ; 3 ; 4. Effectifs : 4 ; 9 ; 7 ; 3 ; 2. Calculez la moyenne, la médiane, le premier et le troisième quartile, puis l'étendue et l'écart interquartile de cette série.",
              hint: "Dressez la ligne des effectifs cumulés croissants : elle indique jusqu'à quel rang va chaque valeur.",
              solution: [
                "Moyenne : x̄ = (0 × 4 + 1 × 9 + 2 × 7 + 3 × 3 + 4 × 2)/25 = (0 + 9 + 14 + 9 + 8)/25 = 40/25 = 1,6.",
                "Effectifs cumulés croissants : 4 ; 13 ; 20 ; 23 ; 25. La valeur 0 occupe les rangs 1 à 4, la valeur 1 les rangs 5 à 13, la valeur 2 les rangs 14 à 20, la valeur 3 les rangs 21 à 23 et la valeur 4 les rangs 24 et 25.",
                "Médiane : N = 25 est impair, Me est la valeur de rang 13, soit Me = 1.",
                "Q1 : 25/4 = 6,25, arrondi à 7 ; la 7e valeur est 1, donc Q1 = 1. Q3 : 3 × 25/4 = 18,75, arrondi à 19 ; la 19e valeur est 2, donc Q3 = 2.",
                "Étendue : 4 - 0 = 4. Écart interquartile : 2 - 1 = 1.",
              ],
            },
            {
              level: 3,
              statement: "Deux archers (données fictives) obtiennent les scores suivants sur cinq tirs. Archer A : 7 ; 8 ; 9 ; 10 ; 11. Archer B : 5 ; 9 ; 9 ; 9 ; 13. a) Calculez la moyenne de chaque série. b) Calculez l'écart type de chaque série. c) Calculez l'écart interquartile de chaque série. Les deux indicateurs de dispersion donnent-ils la même conclusion ? d) Les scores de A sont multipliés par 10 pour un nouveau barème. Que deviennent sa moyenne et son écart type ?",
              hint: "Pour l'écart type, calculez les écarts à la moyenne, élevez-les au carré, faites la moyenne de ces carrés, puis prenez la racine carrée. Pour d), regardez ce que deviennent les écarts à la moyenne.",
              solution: [
                "a) Moyenne de A : (7 + 8 + 9 + 10 + 11)/5 = 45/5 = 9. Moyenne de B : (5 + 9 + 9 + 9 + 13)/5 = 45/5 = 9.",
                "b) A : écarts -2 ; -1 ; 0 ; 1 ; 2, donc V = (4 + 1 + 0 + 1 + 4)/5 = 2 et σ = √2 ≈ 1,41.",
                "B : écarts -4 ; 0 ; 0 ; 0 ; 4, donc V = (16 + 0 + 0 + 0 + 16)/5 = 6,4 et σ = √6,4 ≈ 2,53.",
                "c) N = 5 : Q1 est la 2e valeur (5/4 = 1,25 arrondi à 2) et Q3 la 4e valeur (3,75 arrondi à 4). A : Q1 = 8, Q3 = 10, écart interquartile 2. B : Q1 = 9, Q3 = 9, écart interquartile 0.",
                "Les conclusions diffèrent : l'écart type, sensible aux deux tirs extrêmes de B (5 et 13), désigne A comme plus régulier ; l'écart interquartile, qui ignore les valeurs extrêmes, montre que la moitié centrale des tirs de B est parfaitement groupée. Un indicateur seul ne suffit pas toujours.",
                "d) Par linéarité, la nouvelle moyenne de A est 10 × 9 = 90. Chaque écart à la moyenne est multiplié par 10, chaque carré par 100, donc V devient 200 et σ devient √200 = 10√2 ≈ 14,1 : l'écart type est lui aussi multiplié par 10.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer les quartiles et l'écart interquartile d'une série.",
            items: [
              "Ranger les valeurs dans l'ordre croissant et compter l'effectif total N",
              "Calculer N/4 et 3N/4",
              "Arrondir ces deux nombres à l'entier supérieur s'ils ne sont pas entiers",
              "Lire les valeurs situées à ces rangs : ce sont Q1 et Q3",
              "Calculer l'écart interquartile Q3 - Q1",
            ],
          },
          quiz: [
            {
              q: "Quelle est la médiane de la série 4 ; 7 ; 9 ; 12 ; 15 ; 21 ?",
              options: ["9", "12", "10,5", "11,3"],
              answer: 2,
              why: "N = 6 est pair : Me est la moyenne des 3e et 4e valeurs, (9 + 12)/2 = 10,5.",
            },
            {
              q: "Une série a pour moyenne 12. On multiplie toutes les valeurs par 2, puis on ajoute 3. Quelle est la nouvelle moyenne ?",
              options: ["27", "15", "24", "30"],
              answer: 0,
              why: "Par linéarité de la moyenne : 2 × 12 + 3 = 27.",
            },
            {
              q: "Une série comporte 20 valeurs rangées dans l'ordre croissant. Quel est le rang du premier quartile ?",
              options: ["4", "6", "10", "5"],
              answer: 3,
              why: "N/4 = 20/4 = 5, qui est entier : Q1 est la 5e valeur.",
            },
            {
              q: "Que mesure l'écart type d'une série ?",
              options: ["La valeur qui partage la série en deux moitiés", "La dispersion autour de la moyenne", "La différence entre le maximum et le minimum", "Le nombre de valeurs supérieures à la moyenne"],
              answer: 1,
              why: "L'écart type est la racine carrée de la moyenne des carrés des écarts à la moyenne : il mesure l'éloignement des valeurs par rapport à x̄.",
            },
            {
              q: "Dans une série, on remplace la plus grande valeur par une valeur beaucoup plus grande. Quel indicateur ne change pas ?",
              options: ["La moyenne", "L'étendue", "L'écart type", "La médiane"],
              answer: 3,
              why: "La médiane ne dépend que de l'ordre des valeurs centrales ; la moyenne, l'étendue et l'écart type augmentent.",
            },
          ],
          trap: "Oublier de ranger les valeurs dans l'ordre croissant avant de chercher la médiane ou les quartiles, ou calculer une moyenne pondérée en divisant par le nombre de valeurs distinctes au lieu de l'effectif total (ou de la somme des coefficients).",
          method: "Pour une série donnée par un tableau d'effectifs, ajoutez une ligne des effectifs cumulés croissants : elle permet de trouver immédiatement la valeur qui correspond à un rang donné (médiane, Q1, Q3).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tableaux-croises',
          title: "Tableaux croisés : fréquences marginales et conditionnelles",
          minutes: 30,
          objectives: [
            "Construire et compléter un tableau croisé d'effectifs pour deux variables qualitatives.",
            "Calculer des fréquences marginales et des fréquences conditionnelles.",
            "Interpréter et comparer des fréquences conditionnelles pour étudier le lien entre deux variables.",
          ],
          course: [
            {
              heading: "Croiser deux variables qualitatives",
              paragraphs: [
                "Lorsqu'on étudie simultanément deux variables qualitatives (ou catégorielles) sur une même population, par exemple le niveau d'un élève et son moyen de transport, on présente les effectifs dans un tableau croisé, aussi appelé tableau à double entrée. Chaque case donne l'effectif des individus qui présentent à la fois une modalité de la première variable et une modalité de la seconde. La dernière ligne et la dernière colonne contiennent les totaux : ce sont les effectifs marginaux.",
                "Exemple (données fictives) : on interroge 200 élèves d'un lycée sur leur niveau (seconde ou terminale) et sur leur pratique d'un sport en club. En seconde, 48 font du sport en club et 72 n'en font pas, soit 120 élèves ; en terminale, 24 en font et 56 n'en font pas, soit 80 élèves. Les totaux des colonnes sont 72 sportifs en club et 128 élèves sans club, pour un total général de 200.",
                "Pour compléter un tableau croisé, on utilise le fait que la somme des cases d'une ligne est égale au total de cette ligne, et de même pour les colonnes. Un contrôle indispensable : la somme des totaux des lignes et la somme des totaux des colonnes sont toutes deux égales à l'effectif total.",
              ],
              box: { label: "Définition", text: "Un tableau croisé d'effectifs répartit une population selon deux variables qualitatives. Chaque case contient l'effectif des individus présentant simultanément deux modalités ; les totaux des lignes et des colonnes sont les effectifs marginaux." },
            },
            {
              heading: "Fréquences marginales",
              paragraphs: [
                "Une fréquence marginale est le quotient d'un effectif marginal par l'effectif total. Elle décrit la répartition de la population selon une seule des deux variables. Dans l'exemple, la fréquence marginale des élèves de seconde est 120/200 = 0,6, soit 60 %, et celle des élèves qui pratiquent un sport en club est 72/200 = 0,36, soit 36 %.",
                "On peut aussi rapporter l'effectif d'une case à l'effectif total : les élèves de seconde qui font du sport en club représentent 48/200 = 0,24, soit 24 % de l'ensemble des élèves interrogés. En divisant toutes les cases par l'effectif total, on obtient un tableau des fréquences dont la case du total général vaut 1, soit 100 %.",
              ],
              box: { label: "Formule", text: "Fréquence marginale de A : effectif marginal de A divisé par l'effectif total. Fréquence de la case « A et B » dans la population : effectif de cette case divisé par l'effectif total." },
            },
            {
              heading: "Fréquences conditionnelles",
              paragraphs: [
                "La fréquence conditionnelle de B parmi A, notée fA(B), est la proportion des individus présentant la modalité B parmi ceux qui présentent la modalité A : fA(B) = effectif de (A et B)/effectif de A. On ne divise plus par l'effectif total, mais par l'effectif de la sous-population A. Dans l'exemple, parmi les élèves de seconde, la fréquence des sportifs en club est 48/120 = 0,4, soit 40 % ; parmi les élèves de terminale, elle est 24/80 = 0,3, soit 30 %.",
                "Il ne faut pas confondre fA(B) et fB(A). Parmi les sportifs en club, la fréquence des élèves de seconde est 48/72 ≈ 0,667, soit environ 66,7 % : ce nombre ne répond pas à la même question que les 40 % précédents. Le groupe qui suit le mot « parmi » désigne toujours la population de référence, c'est-à-dire le dénominateur.",
                "Comparer des fréquences conditionnelles permet d'étudier le lien entre deux variables : ici, la pratique d'un sport en club est plus fréquente en seconde (40 %) qu'en terminale (30 %). Comparer les effectifs bruts (48 contre 24) serait trompeur, car les deux groupes n'ont pas la même taille. Ces calculs préparent la notion de probabilité conditionnelle.",
              ],
              box: { label: "Formule", text: "fA(B) = effectif de (A et B) / effectif de A. On lit « fréquence de B parmi A ». Le dénominateur est l'effectif de la population de référence, celle qui suit le mot « parmi »." },
            },
          ],
          keyPoints: [
            "Un tableau croisé répartit une population selon deux variables qualitatives ; les totaux sont les effectifs marginaux.",
            "Contrôle : somme des totaux des lignes = somme des totaux des colonnes = effectif total.",
            "Fréquence marginale : effectif marginal divisé par l'effectif total.",
            "Fréquence conditionnelle de B parmi A : fA(B) = effectif de (A et B) / effectif de A.",
            "fA(B) et fB(A) sont en général différentes : le dénominateur change.",
            "Pour comparer des groupes de tailles différentes, on compare des fréquences conditionnelles, pas des effectifs.",
          ],
          example: {
            statement: "Une enquête (données fictives) porte sur 400 personnes : 250 sont abonnées à une plateforme de vidéo, dont 150 ont moins de 30 ans ; parmi les personnes non abonnées, 40 ont moins de 30 ans. a) Construisez le tableau croisé selon l'âge (moins de 30 ans, 30 ans et plus) et l'abonnement (abonné, non abonné). b) Calculez la fréquence marginale des moins de 30 ans. c) Calculez la fréquence des abonnés parmi les moins de 30 ans, puis parmi les 30 ans et plus. Interprétez.",
            solution: [
              "a) Non-abonnés : 400 - 250 = 150. Abonnés de 30 ans et plus : 250 - 150 = 100. Non-abonnés de 30 ans et plus : 150 - 40 = 110.",
              "Tableau (lignes : âge ; colonnes : abonné, non abonné, total). Moins de 30 ans : 150 ; 40 ; 190. Trente ans et plus : 100 ; 110 ; 210. Total : 250 ; 150 ; 400.",
              "Contrôle : 190 + 210 = 400 et 250 + 150 = 400.",
              "b) Fréquence marginale des moins de 30 ans : 190/400 = 0,475, soit 47,5 %.",
              "c) Parmi les moins de 30 ans : 150/190 ≈ 0,789, soit environ 78,9 % d'abonnés. Parmi les 30 ans et plus : 100/210 ≈ 0,476, soit environ 47,6 % d'abonnés.",
              "Interprétation : dans cet échantillon, l'abonnement est nettement plus fréquent chez les moins de 30 ans (environ 79 %) que chez les 30 ans et plus (environ 48 %).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On a interrogé 150 élèves de seconde (données fictives) sur leur langue vivante B (espagnol ou allemand) et leur régime (externe ou demi-pensionnaire). On sait que : parmi les 110 hispanistes, 30 sont externes ; parmi les germanistes, 28 sont demi-pensionnaires. a) Construisez et complétez le tableau croisé. b) Calculez la fréquence marginale des germanistes, arrondie à 0,1 %.",
              hint: "Commencez par les totaux que l'on peut déduire directement (nombre de germanistes), puis complétez chaque ligne et chaque colonne par différence.",
              solution: [
                "a) Germanistes : 150 - 110 = 40. Hispanistes demi-pensionnaires : 110 - 30 = 80. Germanistes externes : 40 - 28 = 12.",
                "Totaux des colonnes : externes 30 + 12 = 42 ; demi-pensionnaires 80 + 28 = 108.",
                "Tableau (lignes : langue ; colonnes : externe, demi-pensionnaire, total). Espagnol : 30 ; 80 ; 110. Allemand : 12 ; 28 ; 40. Total : 42 ; 108 ; 150. Contrôle : 42 + 108 = 150.",
                "b) Fréquence marginale des germanistes : 40/150 ≈ 0,267, soit environ 26,7 %.",
              ],
            },
            {
              level: 2,
              statement: "Dans une entreprise de 500 salariés (données fictives), on croise le lieu d'habitation et le mode de transport. En ville : voiture 60, transports en commun 140, vélo 50. Hors de la ville : voiture 180, transports en commun 50, vélo 20. a) Calculez les totaux et la fréquence marginale des cyclistes. b) Calculez la fréquence des automobilistes parmi les salariés habitant hors de la ville, puis parmi ceux habitant en ville. c) Calculez la fréquence des habitants de la ville parmi les cyclistes. d) Commentez.",
              hint: "Repérez à chaque fois la population qui suit le mot « parmi » : son effectif est le dénominateur.",
              solution: [
                "a) En ville : 60 + 140 + 50 = 250 salariés ; hors de la ville : 180 + 50 + 20 = 250. Voiture : 240 ; transports en commun : 190 ; vélo : 70 ; total : 500.",
                "Fréquence marginale des cyclistes : 70/500 = 0,14, soit 14 %.",
                "b) Parmi les salariés habitant hors de la ville : 180/250 = 0,72, soit 72 %. Parmi ceux habitant en ville : 60/250 = 0,24, soit 24 %.",
                "c) Parmi les cyclistes : 50/70 ≈ 0,714, soit environ 71,4 % habitent en ville.",
                "d) Dans cette entreprise, la voiture est trois fois plus fréquente chez les salariés habitant hors de la ville (72 % contre 24 %), et les cyclistes sont majoritairement des habitants de la ville.",
              ],
            },
            {
              level: 3,
              statement: "Un lycée compte 800 élèves (données fictives), dont 45 % de garçons. 30 % des garçons et 40 % des filles sont inscrits à l'association sportive (AS). a) Construisez le tableau croisé des effectifs (sexe ; inscrit ou non à l'AS). b) Calculez la fréquence des inscrits à l'AS dans le lycée. c) Parmi les inscrits à l'AS, quelle est la proportion de filles, arrondie à 0,1 % ? d) Un élève affirme : « S'il y a plus de filles que de garçons à l'AS, c'est uniquement parce que les filles sont plus nombreuses au lycée. » Discutez cette affirmation à l'aide d'un calcul.",
              hint: "Calculez d'abord les effectifs de garçons et de filles, puis appliquez les pourcentages à chaque groupe. Pour d), cherchez combien de filles seraient inscrites si leur taux d'inscription était le même que celui des garçons.",
              solution: [
                "a) Garçons : 0,45 × 800 = 360 ; filles : 800 - 360 = 440. Garçons inscrits : 0,30 × 360 = 108 ; filles inscrites : 0,40 × 440 = 176.",
                "Tableau (lignes : sexe ; colonnes : inscrit, non inscrit, total). Garçons : 108 ; 252 ; 360. Filles : 176 ; 264 ; 440. Total : 284 ; 516 ; 800.",
                "b) Fréquence des inscrits : 284/800 = 0,355, soit 35,5 %. Contrôle : 0,45 × 0,30 + 0,55 × 0,40 = 0,135 + 0,22 = 0,355.",
                "c) Parmi les inscrits, la fréquence des filles est 176/284 ≈ 0,620, soit environ 62,0 %.",
                "d) Si les filles s'inscrivaient au même taux que les garçons (30 %), il y aurait 0,30 × 440 = 132 filles inscrites : elles seraient déjà plus nombreuses que les 108 garçons, à cause de leur effectif plus grand.",
                "Mais il y en a en réalité 176, car leur taux d'inscription est plus élevé (40 % contre 30 %). L'affirmation est donc fausse : les deux effets (effectif plus grand et fréquence conditionnelle plus élevée) se cumulent.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Tableaux croisés et fréquences.",
            statements: [
              { text: "La fréquence de B parmi A se calcule en divisant par l'effectif total.", true: false, why: "On divise par l'effectif de A, la population de référence." },
              { text: "Dans un tableau croisé, la somme des totaux des lignes est égale à l'effectif total.", true: true, why: "Chaque individu est compté une fois et une seule dans une ligne." },
              { text: "Les fréquences fA(B) et fB(A) sont toujours égales.", true: false, why: "Elles ont le même numérateur, mais pas le même dénominateur." },
              { text: "Une fréquence marginale ne concerne qu'une seule des deux variables.", true: true, why: "Elle se calcule à partir d'un total de ligne ou de colonne." },
              { text: "Si 48 élèves de seconde et 24 élèves de terminale font du sport, le sport est forcément plus pratiqué en seconde.", true: false, why: "Il faut comparer des fréquences conditionnelles, car les deux groupes peuvent avoir des tailles très différentes." },
              { text: "Une fréquence conditionnelle est toujours comprise entre 0 et 1.", true: true, why: "C'est la proportion d'une partie dans un groupe : elle ne peut pas dépasser 100 %." },
            ],
          },
          quiz: [
            {
              q: "Sur 200 personnes, il y a 80 filles, dont 20 gauchères, et 120 garçons, dont 24 gauchers (données fictives). Quelle est la fréquence des gauchers parmi les garçons ?",
              options: ["12 %", "22 %", "24 %", "20 %"],
              answer: 3,
              why: "Parmi les garçons : 24/120 = 0,2, soit 20 %. On divise par l'effectif des garçons.",
            },
            {
              q: "Avec les mêmes données, quelle est la fréquence marginale des gauchers ?",
              options: ["20 %", "22 %", "44 %", "25 %"],
              answer: 1,
              why: "Il y a 20 + 24 = 44 gauchers sur 200 personnes : 44/200 = 0,22, soit 22 %.",
            },
            {
              q: "Avec les mêmes données, quelle est la fréquence des filles parmi les gauchers ?",
              options: ["Environ 45,5 %", "Environ 25,0 %", "Environ 10,0 %", "Environ 40,0 %"],
              answer: 0,
              why: "Parmi les 44 gauchers, 20 sont des filles : 20/44 ≈ 0,455.",
            },
            {
              q: "La fréquence conditionnelle fA(B) se calcule par :",
              options: ["effectif de (A et B) / effectif total", "effectif de A / effectif total", "effectif de (A et B) / effectif de A", "effectif de (A et B) / effectif de B"],
              answer: 2,
              why: "La population de référence est A : on divise l'effectif de la case (A et B) par l'effectif de A.",
            },
            {
              q: "Pourquoi compare-t-on deux groupes avec des fréquences conditionnelles plutôt qu'avec des effectifs ?",
              options: ["Les groupes n'ont pas forcément la même taille", "Les effectifs d'un tableau croisé sont souvent faux", "Une fréquence se calcule plus vite qu'un effectif", "On ne peut pas additionner des effectifs"],
              answer: 0,
              why: "Un grand groupe peut compter plus d'individus concernés tout en ayant une proportion plus faible : seules les fréquences permettent une comparaison équitable.",
            },
          ],
          trap: "Se tromper de dénominateur : la fréquence des sportifs parmi les élèves de seconde se calcule en divisant par le nombre d'élèves de seconde, et non par l'effectif total ni par le nombre de sportifs.",
          method: "Avant chaque calcul, reformulez la question avec le mot « parmi » : la population qui suit « parmi » donne le dénominateur, et la case qui réunit les deux caractères donne le numérateur.",
        },
      ],
    },
    /* ================================================================== */
    /* ÉQUATIONS ET INÉQUATIONS                                            */
    /* ================================================================== */
    {
      id: 'equations-inequations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'equations-premier-degre',
          title: "Résoudre une équation du premier degré",
          minutes: 25,
          objectives: [
            "Résoudre une équation du premier degré à une inconnue en utilisant les règles de transformation des égalités.",
            "Reconnaître une équation qui se ramène au premier degré après développement et réduction.",
            "Mettre un problème en équation, le résoudre et interpréter la solution.",
          ],
          course: [
            {
              heading: "Équation, solution, équations équivalentes",
              paragraphs: [
                "Une équation d'inconnue x est une égalité entre deux expressions qui contiennent x. Une solution est une valeur de x pour laquelle l'égalité est vraie ; résoudre l'équation, c'est trouver toutes ses solutions. On note S l'ensemble des solutions. Par exemple, 3 est solution de 2x + 1 = 7, car 2 × 3 + 1 = 7 ; en revanche, 2 n'est pas solution, car 2 × 2 + 1 = 5 ≠ 7.",
                "Deux équations sont équivalentes lorsqu'elles ont exactement les mêmes solutions. Pour résoudre, on transforme l'équation en une suite d'équations équivalentes de plus en plus simples, jusqu'à isoler x. Deux règles le permettent : on peut ajouter ou soustraire un même nombre (ou une même expression) aux deux membres ; on peut multiplier ou diviser les deux membres par un même nombre non nul. Une image utile : l'équation est une balance en équilibre ; tant que l'on fait la même chose des deux côtés, l'équilibre est conservé.",
              ],
              box: { label: "Règle", text: "On obtient une équation équivalente en ajoutant (ou en soustrayant) un même nombre aux deux membres, ou en multipliant (ou en divisant) les deux membres par un même nombre non nul." },
            },
            {
              heading: "Résoudre ax + b = 0 et ax + b = cx + d",
              paragraphs: [
                "Une équation du premier degré se ramène à la forme ax + b = 0, avec a ≠ 0. Elle a alors une unique solution, x = -b/a. Exemple : 5x - 15 = 0 donne 5x = 15, puis x = 3. Pour une équation de la forme ax + b = cx + d, on regroupe les termes en x dans un membre et les constantes dans l'autre. Exemple : 7x - 4 = 3x + 8. On soustrait 3x : 4x - 4 = 8 ; on ajoute 4 : 4x = 12 ; on divise par 4 : x = 3. Donc S = {3}.",
                "Lorsque l'équation contient des parenthèses, on développe et on réduit d'abord. Avec des fractions, on peut multiplier les deux membres par un dénominateur commun pour les faire disparaître. Exemple : x/2 + 1 = x/3 + 2. En multipliant les deux membres par 6 : 3x + 6 = 2x + 12, donc x = 6. Contrôle : 6/2 + 1 = 4 et 6/3 + 2 = 4.",
                "Deux cas particuliers apparaissent lorsque les termes en x disparaissent. Si l'on aboutit à une égalité fausse, comme 0x = 5, l'équation n'a aucune solution : S = ∅. Si l'on aboutit à une égalité toujours vraie, comme 0x = 0, tout réel est solution : S = ℝ. Par exemple, 2(x + 3) = 2x + 1 donne 2x + 6 = 2x + 1, puis 6 = 1, ce qui est faux : l'équation n'a aucune solution.",
              ],
              box: { label: "À retenir", text: "L'équation ax + b = 0, avec a ≠ 0, a une unique solution : x = -b/a. Si x disparaît : égalité fausse, S = ∅ ; égalité toujours vraie, S = ℝ." },
            },
            {
              heading: "Mettre un problème en équation",
              paragraphs: [
                "Pour résoudre un problème, on suit quatre étapes : choisir l'inconnue, en précisant ce qu'elle représente et son unité ; traduire l'énoncé par une équation ; résoudre l'équation ; vérifier la solution et répondre par une phrase, en contrôlant qu'elle a un sens dans la situation (une longueur positive, un nombre de personnes entier, etc.).",
                "Exemple (données fictives) : un abonnement de cinéma coûte 30 € par an et donne droit à des places à 6 €, alors que la place sans abonnement coûte 11 €. Pour combien de places les deux formules coûtent-elles le même prix ? Soit x le nombre de places. On résout 30 + 6x = 11x, soit 30 = 5x, donc x = 6. Vérification : 30 + 6 × 6 = 66 et 11 × 6 = 66. Pour 6 places, les deux formules coûtent 66 € ; au-delà, l'abonnement devient plus avantageux.",
              ],
              box: { label: "Méthode", text: "1. Choisir l'inconnue. 2. Traduire l'énoncé par une équation. 3. Résoudre. 4. Vérifier, puis conclure par une phrase qui répond à la question posée." },
            },
          ],
          keyPoints: [
            "Résoudre une équation, c'est trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie.",
            "On peut ajouter un même nombre aux deux membres, ou les multiplier par un même nombre non nul.",
            "L'équation ax + b = 0 (a ≠ 0) a pour unique solution x = -b/a.",
            "On développe et on réduit, puis on regroupe les termes en x d'un côté et les nombres de l'autre.",
            "Si x disparaît : égalité fausse, S = ∅ ; égalité toujours vraie, S = ℝ.",
            "Dans un problème, on vérifie la solution et on conclut par une phrase.",
          ],
          example: {
            statement: "Résolvez l'équation 3(x - 2) + 5 = 2x - 4, puis vérifiez votre résultat.",
            solution: [
              "On développe le membre de gauche : 3(x - 2) + 5 = 3x - 6 + 5 = 3x - 1. L'équation devient 3x - 1 = 2x - 4.",
              "On soustrait 2x aux deux membres : x - 1 = -4.",
              "On ajoute 1 aux deux membres : x = -3.",
              "Vérification dans l'équation de départ : à gauche, 3(-3 - 2) + 5 = 3 × (-5) + 5 = -10 ; à droite, 2 × (-3) - 4 = -10. Les deux membres sont égaux.",
              "Conclusion : S = {-3}.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résolvez les équations suivantes : a) 4x + 9 = 1 ; b) 5 - 2x = 3x + 20 ; c) 3(2x - 1) = 6x + 4.",
              hint: "Regroupez les termes en x dans un membre et les nombres dans l'autre. Au c), développez d'abord, et observez ce qui arrive aux termes en x.",
              solution: [
                "a) 4x + 9 = 1 donne 4x = 1 - 9 = -8, puis x = -8/4 = -2. S = {-2}.",
                "b) 5 - 2x = 3x + 20 donne 5 - 20 = 3x + 2x, soit -15 = 5x, donc x = -3. Vérification : 5 - 2 × (-3) = 11 et 3 × (-3) + 20 = 11. S = {-3}.",
                "c) 3(2x - 1) = 6x + 4 donne 6x - 3 = 6x + 4, puis -3 = 4 en soustrayant 6x : c'est faux. L'équation n'a aucune solution : S = ∅.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez les équations suivantes : a) (x + 1)/3 = (2x - 1)/4 ; b) 2(x - 3) - (4 - x) = 3x - 10 ; c) (x - 2)² = x² + 8.",
              hint: "Au a), multipliez les deux membres par 12. Au b), attention au signe moins devant la parenthèse. Au c), développez (x - 2)² : les termes en x² disparaissent.",
              solution: [
                "a) En multipliant par 12 : 4(x + 1) = 3(2x - 1), soit 4x + 4 = 6x - 3, donc 7 = 2x et x = 7/2 = 3,5.",
                "Vérification : (3,5 + 1)/3 = 4,5/3 = 1,5 et (7 - 1)/4 = 6/4 = 1,5. S = {3,5}.",
                "b) 2(x - 3) - (4 - x) = 2x - 6 - 4 + x = 3x - 10. L'équation s'écrit 3x - 10 = 3x - 10, ce qui est vrai pour tout x : S = ℝ.",
                "c) (x - 2)² = x² - 4x + 4. L'équation devient x² - 4x + 4 = x² + 8, soit -4x + 4 = 8 en soustrayant x², donc -4x = 4 et x = -1.",
                "Vérification : (-1 - 2)² = 9 et (-1)² + 8 = 9. S = {-1}.",
              ],
            },
            {
              level: 3,
              statement: "La longueur d'un rectangle dépasse sa largeur de 5 cm. Si l'on augmente la largeur de 3 cm et que l'on diminue la longueur de 2 cm, l'aire augmente de 21 cm². On note x la largeur initiale, en cm. a) Exprimez l'aire initiale et la nouvelle aire en fonction de x. b) Traduisez l'énoncé par une équation et montrez qu'elle se ramène au premier degré. c) Déterminez les dimensions du rectangle initial et vérifiez. d) Quelle est la nature de la nouvelle figure ?",
              hint: "La longueur initiale est x + 5. Après transformation, la largeur vaut x + 3 et la longueur x + 5 - 2 = x + 3. Développez les deux aires : les termes en x² se simplifient.",
              solution: [
                "a) Aire initiale : x(x + 5) = x² + 5x. Nouvelles dimensions : x + 3 et x + 3, donc nouvelle aire : (x + 3)² = x² + 6x + 9.",
                "b) L'énoncé se traduit par x² + 6x + 9 = x² + 5x + 21. En soustrayant x² aux deux membres, on obtient 6x + 9 = 5x + 21 : c'est une équation du premier degré.",
                "c) 6x - 5x = 21 - 9, donc x = 12. Le rectangle initial mesure 12 cm de large et 17 cm de long.",
                "Vérification : aire initiale 12 × 17 = 204 cm² ; nouvelle aire 15 × 15 = 225 cm² ; 225 - 204 = 21 cm². C'est conforme à l'énoncé.",
                "d) La nouvelle figure a ses deux dimensions égales à 15 cm : c'est un carré.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution de l'équation 4(x + 1) - 7 = x + 6.",
            items: [
              "4(x + 1) - 7 = x + 6",
              "4x + 4 - 7 = x + 6",
              "4x - 3 = x + 6",
              "4x - x = 6 + 3",
              "3x = 9",
              "x = 3",
              "S = {3}",
            ],
          },
          quiz: [
            {
              q: "Quelle est la solution de l'équation 6x - 4 = 2x + 8 ?",
              options: ["1", "3", "1,5", "-3"],
              answer: 1,
              why: "6x - 2x = 8 + 4, soit 4x = 12, donc x = 3. Vérification : 18 - 4 = 14 et 6 + 8 = 14.",
            },
            {
              q: "Laquelle de ces transformations ne garantit pas d'obtenir une équation équivalente ?",
              options: ["Ajouter 5 aux deux membres", "Diviser les deux membres par -2", "Soustraire 3x aux deux membres", "Multiplier chaque membre par 0"],
              answer: 3,
              why: "Multiplier par 0 donne 0 = 0 quelle que soit l'équation : on perd toute l'information. On ne multiplie que par un nombre non nul.",
            },
            {
              q: "Quelles sont les solutions de l'équation 2(x + 1) = 2x + 2 ?",
              options: ["Tout réel x", "Aucune solution", "Seulement x = 0", "Seulement x = 1"],
              answer: 0,
              why: "En développant, on obtient 2x + 2 = 2x + 2, égalité vraie pour tout x : S = ℝ.",
            },
            {
              q: "Quelle est la solution de l'équation x/4 - 1 = 2 ?",
              options: ["4", "0,75", "12", "3"],
              answer: 2,
              why: "x/4 = 3, donc x = 3 × 4 = 12. Vérification : 12/4 - 1 = 2.",
            },
            {
              q: "Un nombre augmenté de 7 est égal au triple de ce nombre. Quel est ce nombre ?",
              options: ["7", "3,5", "21", "-3,5"],
              answer: 1,
              why: "x + 7 = 3x donne 7 = 2x, soit x = 3,5. Vérification : 3,5 + 7 = 10,5 = 3 × 3,5.",
            },
          ],
          trap: "Appliquer mécaniquement « on change de côté, on change de signe » et se tromper, notamment avec une parenthèse précédée d'un signe moins : -(4 - x) = -4 + x, et non -4 - x. Autre erreur : diviser par le coefficient de x sans tenir compte de son signe.",
          method: "Vérifiez toujours votre solution en la remplaçant dans l'équation de départ (et non dans une étape intermédiaire) : les deux membres doivent donner exactement le même nombre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-produit-nul',
          title: "Équations produit nul et équations x² = a",
          minutes: 30,
          objectives: [
            "Résoudre une équation produit nul.",
            "Factoriser une expression pour se ramener à une équation produit nul.",
            "Résoudre une équation de la forme x² = a selon le signe de a.",
          ],
          course: [
            {
              heading: "La propriété du produit nul",
              paragraphs: [
                "Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul. Autrement dit, pour tous réels A et B : A × B = 0 équivaut à A = 0 ou B = 0. Cette propriété est propre au nombre 0 : si A × B = 6, on ne peut rien en déduire directement sur A ou sur B, car il existe une infinité de façons d'obtenir 6 comme produit de deux nombres.",
                "Exemple : résoudre (2x - 6)(x + 5) = 0. Un produit est nul si et seulement si l'un de ses facteurs est nul : 2x - 6 = 0 ou x + 5 = 0, soit x = 3 ou x = -5. Donc S = {-5 ; 3}. La propriété s'étend à plus de deux facteurs : x(x - 1)(3x + 2) = 0 équivaut à x = 0 ou x = 1 ou x = -2/3.",
              ],
              box: { label: "Propriété", text: "Un produit est nul si et seulement si l'un au moins de ses facteurs est nul : A × B = 0 équivaut à A = 0 ou B = 0." },
            },
            {
              heading: "Se ramener à une équation produit nul",
              paragraphs: [
                "En seconde, une équation du second degré se résout sans formule générale : on ramène tout dans un seul membre pour obtenir « ... = 0 », puis on factorise ce membre, avec un facteur commun ou une identité remarquable (a² - b² = (a - b)(a + b), a² - 2ab + b² = (a - b)², a² + 2ab + b² = (a + b)²). On conclut avec la propriété du produit nul.",
                "Exemple 1 : x² = 5x. On écrit x² - 5x = 0, puis x(x - 5) = 0, donc x = 0 ou x = 5 : S = {0 ; 5}. Diviser les deux membres par x serait une erreur, car on perdrait la solution 0 (on ne peut diviser que par un nombre non nul). Exemple 2 : (x + 2)² - 9 = 0. On reconnaît a² - b² avec a = x + 2 et b = 3 : (x + 2 - 3)(x + 2 + 3) = 0, soit (x - 1)(x + 5) = 0, donc S = {-5 ; 1}.",
                "Exemple 3 : (x - 1)(2x + 3) = (x - 1)(x + 7). On ne simplifie pas par x - 1, qui peut être nul. On passe tout dans le membre de gauche : (x - 1)(2x + 3) - (x - 1)(x + 7) = 0, puis on factorise par x - 1 : (x - 1)[(2x + 3) - (x + 7)] = 0, soit (x - 1)(x - 4) = 0. Donc S = {1 ; 4}.",
              ],
              box: { label: "Méthode", text: "1. Tout ramener dans un membre pour obtenir « ... = 0 ». 2. Factoriser (facteur commun, identité remarquable). 3. Appliquer la propriété du produit nul. 4. Conclure par l'ensemble des solutions." },
            },
            {
              heading: "Les équations x² = a",
              paragraphs: [
                "On s'intéresse aux équations de la forme x² = a, où a est un réel donné. Trois cas se présentent selon le signe de a. Si a > 0, l'équation a deux solutions, √a et -√a : en effet, x² - a = 0 s'écrit (x - √a)(x + √a) = 0. Si a = 0, elle a une seule solution, 0. Si a < 0, elle n'a aucune solution réelle, car un carré est toujours positif ou nul.",
                "Exemples : x² = 49 a pour solutions -7 et 7 ; x² = 7 a pour solutions -√7 et √7 ; x² = -4 n'a aucune solution, S = ∅. Le même raisonnement s'applique au carré d'une expression : (x - 3)² = 16 donne x - 3 = 4 ou x - 3 = -4, soit x = 7 ou x = -1. Graphiquement, les solutions de x² = a sont les abscisses des points d'intersection de la parabole d'équation y = x² avec la droite horizontale d'équation y = a.",
              ],
              box: { label: "Propriété", text: "Équation x² = a : si a > 0, deux solutions, -√a et √a ; si a = 0, une seule solution, 0 ; si a < 0, aucune solution réelle." },
            },
          ],
          keyPoints: [
            "A × B = 0 équivaut à A = 0 ou B = 0 ; cette propriété ne vaut que pour 0.",
            "Pour une équation de degré 2 : tout passer dans un membre, factoriser, puis utiliser le produit nul.",
            "On ne divise jamais les deux membres par une expression qui peut être nulle : on perdrait des solutions.",
            "x² = a avec a > 0 : deux solutions, -√a et √a.",
            "x² = 0 : une seule solution, 0 ; x² = a avec a < 0 : aucune solution réelle.",
          ],
          example: {
            statement: "Résolvez dans ℝ les équations suivantes : a) (3x + 1)(x - 4) = 0 ; b) 4x² - 25 = 0 ; c) x² + 6x + 9 = 0.",
            solution: [
              "a) Un produit est nul si et seulement si l'un de ses facteurs est nul : 3x + 1 = 0 ou x - 4 = 0.",
              "Donc x = -1/3 ou x = 4 : S = {-1/3 ; 4}.",
              "b) On reconnaît a² - b² avec a = 2x et b = 5 : 4x² - 25 = (2x - 5)(2x + 5). L'équation devient (2x - 5)(2x + 5) = 0.",
              "Donc 2x - 5 = 0 ou 2x + 5 = 0, soit x = 5/2 ou x = -5/2 : S = {-5/2 ; 5/2}. On retrouve ce résultat en écrivant x² = 25/4, dont les solutions sont -5/2 et 5/2.",
              "c) On reconnaît a² + 2ab + b² avec a = x et b = 3 : x² + 6x + 9 = (x + 3)². L'équation devient (x + 3)² = 0.",
              "Un carré est nul si et seulement si le nombre élevé au carré est nul : x + 3 = 0, donc x = -3 et S = {-3}.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résolvez dans ℝ : a) (x - 7)(2x + 8) = 0 ; b) x(5 - x) = 0 ; c) x² = 81 ; d) x² = -9 ; e) x² = 12.",
              hint: "Pour a) et b), écrivez que l'un des facteurs est nul. Pour c), d) et e), regardez le signe du second membre ; pensez à simplifier √12.",
              solution: [
                "a) x - 7 = 0 ou 2x + 8 = 0, soit x = 7 ou x = -4 : S = {-4 ; 7}.",
                "b) x = 0 ou 5 - x = 0, soit x = 0 ou x = 5 : S = {0 ; 5}.",
                "c) 81 > 0 : x = 9 ou x = -9, S = {-9 ; 9}.",
                "d) -9 < 0 : un carré ne peut pas être négatif, S = ∅.",
                "e) 12 > 0 : x = √12 ou x = -√12. Comme √12 = √(4 × 3) = 2√3, S = {-2√3 ; 2√3}.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ en factorisant : a) 3x² = 12x ; b) (2x - 1)² - 16 = 0 ; c) x² - 10x + 25 = 0 ; d) (x + 4)(x - 3) = 2(x + 4).",
              hint: "Ramenez d'abord tout dans un seul membre. Cherchez un facteur commun (a et d) ou une identité remarquable (b et c). Au d), ne divisez pas par x + 4.",
              solution: [
                "a) 3x² - 12x = 0, soit 3x(x - 4) = 0. Donc x = 0 ou x = 4 : S = {0 ; 4}.",
                "b) On reconnaît a² - b² avec a = 2x - 1 et b = 4 : (2x - 1 - 4)(2x - 1 + 4) = 0, soit (2x - 5)(2x + 3) = 0. Donc x = 5/2 ou x = -3/2 : S = {-3/2 ; 5/2}.",
                "c) x² - 10x + 25 = (x - 5)², donc (x - 5)² = 0, d'où x = 5 : S = {5}.",
                "d) (x + 4)(x - 3) - 2(x + 4) = 0, soit (x + 4)[(x - 3) - 2] = 0, c'est-à-dire (x + 4)(x - 5) = 0. Donc x = -4 ou x = 5 : S = {-4 ; 5}.",
                "Vérification du d) pour x = 5 : 9 × 2 = 18 et 2 × 9 = 18. Pour x = -4, les deux membres valent 0.",
              ],
            },
            {
              level: 3,
              statement: "Un jardin carré a un côté de x mètres, avec x > 0. On l'agrandit en ajoutant 4 m à chaque côté, de sorte qu'il reste carré. a) Exprimez l'aire du nouveau jardin en fonction de x. b) On veut que la nouvelle aire soit égale à 100 m². Montrez que cela revient à résoudre (x - 6)(x + 14) = 0, puis concluez. c) On veut maintenant que l'aire du nouveau jardin soit le double de l'aire initiale. Montrez que cela revient à résoudre (x + 4)² = (√2 x)², puis déterminez x : valeur exacte, puis arrondi au centimètre.",
              hint: "Pour b), écrivez (x + 4)² - 100 = 0 et reconnaissez a² - b². Pour c), 2x² = (√2 x)² ; deux nombres positifs qui ont le même carré sont égaux.",
              solution: [
                "a) Le nouveau côté mesure x + 4, donc la nouvelle aire est (x + 4)² m².",
                "b) (x + 4)² = 100 équivaut à (x + 4)² - 10² = 0, soit (x + 4 - 10)(x + 4 + 10) = 0, c'est-à-dire (x - 6)(x + 14) = 0.",
                "Donc x = 6 ou x = -14. Comme x > 0, seule x = 6 convient : le jardin initial a un côté de 6 m (vérification : 10² = 100).",
                "c) L'aire initiale est x², donc on veut (x + 4)² = 2x². Or 2x² = (√2)² × x² = (√2 x)² : l'équation s'écrit (x + 4)² = (√2 x)².",
                "Comme x > 0, les nombres x + 4 et √2 x sont positifs ; ayant le même carré, ils sont égaux : x + 4 = √2 x, soit 4 = (√2 - 1)x, donc x = 4/(√2 - 1).",
                "En multipliant le numérateur et le dénominateur par √2 + 1, et comme (√2 - 1)(√2 + 1) = 2 - 1 = 1, on obtient x = 4(√2 + 1) = 4√2 + 4 ≈ 9,66 m.",
                "Vérification approchée : x + 4 ≈ 13,66 et 13,66² ≈ 186,5 ; 2 × 9,66² ≈ 186,6. Les deux aires sont bien égales aux arrondis près.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque équation à son ensemble de solutions.",
            pairs: [
              { left: "(x - 2)(x + 3) = 0", right: "S = {-3 ; 2}" },
              { left: "x² = 16", right: "S = {-4 ; 4}" },
              { left: "x² = -16", right: "S = ∅" },
              { left: "x² = 0", right: "S = {0}" },
              { left: "x² = 3x", right: "S = {0 ; 3}" },
              { left: "(x - 4)² = 0", right: "S = {4}" },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les solutions de l'équation (x + 6)(3x - 9) = 0 ?",
              options: ["6 et -3", "-6 et 9", "-6 et 3", "6 et 3"],
              answer: 2,
              why: "x + 6 = 0 donne x = -6 et 3x - 9 = 0 donne x = 3.",
            },
            {
              q: "Quel est l'ensemble des solutions de l'équation x² = 25 ?",
              options: ["{-5 ; 5}", "{5}", "{-25 ; 25}", "∅"],
              answer: 0,
              why: "25 > 0 : l'équation a deux solutions, √25 = 5 et -5.",
            },
            {
              q: "Pour résoudre x² = 7x, un élève divise les deux membres par x et trouve x = 7. Qu'a-t-il oublié ?",
              options: ["La solution -7", "La solution √7", "Rien, c'est juste", "La solution 0"],
              answer: 3,
              why: "x² - 7x = x(x - 7) = 0 donne x = 0 ou x = 7 ; diviser par x, qui peut être nul, fait perdre la solution 0.",
            },
            {
              q: "Combien de solutions réelles l'équation x² = -3 a-t-elle ?",
              options: ["Deux", "Aucune", "Une seule", "Une infinité"],
              answer: 1,
              why: "Un carré est toujours positif ou nul : il ne peut pas valoir -3.",
            },
            {
              q: "Quelle factorisation permet de résoudre l'équation x² - 49 = 0 ?",
              options: ["(x - 7)²", "(x - 49)(x + 49)", "(x - 7)(x + 7)", "x(x - 49)"],
              answer: 2,
              why: "x² - 49 = x² - 7² = (x - 7)(x + 7), d'où les solutions -7 et 7.",
            },
          ],
          trap: "Diviser les deux membres par x (ou par une expression comme x - 1) pour simplifier, ce qui fait perdre la solution qui annule cette expression ; ou oublier la solution négative de x² = a : x² = 9 a deux solutions, -3 et 3.",
          method: "Avant d'appliquer la propriété du produit nul, vérifiez que vous avez bien un produit égal à 0 : si le second membre n'est pas 0, ou si l'expression est une somme, transformez d'abord l'équation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'inequations',
          title: "Résoudre une inéquation et écrire les solutions en intervalle",
          minutes: 30,
          objectives: [
            "Résoudre une inéquation du premier degré en appliquant les règles de transformation des inégalités.",
            "Écrire l'ensemble des solutions d'une inéquation sous forme d'intervalle et le représenter sur une droite graduée.",
            "Mettre un problème en inéquation et interpréter les solutions.",
          ],
          course: [
            {
              heading: "Inéquations et règles de calcul",
              paragraphs: [
                "Une inéquation d'inconnue x est une inégalité (avec <, ≤, > ou ≥) entre deux expressions contenant x. Une solution est une valeur de x qui rend l'inégalité vraie ; résoudre l'inéquation, c'est trouver l'ensemble de toutes ses solutions. Contrairement à une équation du premier degré, qui a en général une seule solution, une inéquation du premier degré en a une infinité : par exemple, tous les réels strictement supérieurs à 2 vérifient x + 3 > 5.",
                "Les règles de transformation ressemblent à celles des équations, avec une différence essentielle. On peut ajouter ou soustraire un même nombre aux deux membres sans changer le sens de l'inégalité. On peut multiplier ou diviser les deux membres par un même nombre strictement positif sans changer le sens. Mais si l'on multiplie ou divise par un nombre strictement négatif, il faut changer le sens de l'inégalité : 2 < 5, mais -2 > -5.",
              ],
              box: { label: "Règle", text: "Ajouter ou soustraire un même nombre : le sens est conservé. Multiplier ou diviser par un nombre strictement positif : le sens est conservé. Multiplier ou diviser par un nombre strictement négatif : le sens de l'inégalité change." },
            },
            {
              heading: "Résoudre une inéquation du premier degré",
              paragraphs: [
                "On procède comme pour une équation : on développe et on réduit, on regroupe les termes en x dans un membre et les constantes dans l'autre, puis on divise par le coefficient de x, en faisant attention à son signe. Exemple 1 : 3x - 5 ≤ 7. On ajoute 5 : 3x ≤ 12 ; on divise par 3, qui est positif : x ≤ 4. Exemple 2 : 2 - 4x > 14. On soustrait 2 : -4x > 12 ; on divise par -4, qui est négatif, donc on change le sens : x < -3.",
                "Exemple 3 : 5x + 1 ≥ 2x - 8. On soustrait 2x : 3x + 1 ≥ -8 ; on soustrait 1 : 3x ≥ -9 ; on divise par 3 : x ≥ -3. Pour contrôler, on teste une valeur : 0 doit être solution (5 × 0 + 1 = 1 et 2 × 0 - 8 = -8, or 1 ≥ -8 est vrai), et -4 ne doit pas l'être (5 × (-4) + 1 = -19 et 2 × (-4) - 8 = -16, or -19 ≥ -16 est faux). Ce test ne remplace pas la résolution, mais il détecte la plupart des erreurs de sens.",
              ],
              box: { label: "À retenir", text: "Pour résoudre ax + b < c avec a ≠ 0 : isoler ax, puis diviser par a. Si a > 0, on garde le sens de l'inégalité ; si a < 0, on le change." },
            },
            {
              heading: "Écrire les solutions sous forme d'intervalle",
              paragraphs: [
                "L'ensemble des solutions d'une inéquation du premier degré est un intervalle. On utilise les notations suivantes : x ≤ 4 correspond à ]-∞ ; 4] ; x < -3 à ]-∞ ; -3[ ; x ≥ -3 à [-3 ; +∞[ ; x > 2 à ]2 ; +∞[. Le crochet est tourné vers le nombre lorsque celui-ci est inclus (inégalité large) et tourné vers l'extérieur lorsqu'il est exclu (inégalité stricte). Du côté de -∞ ou de +∞, le crochet est toujours ouvert, car l'infini n'est pas un nombre.",
                "Sur une droite graduée, on représente l'ensemble des solutions en coloriant la partie concernée de la droite, avec un crochet fermé ou ouvert à la borne. Lorsqu'on combine deux conditions, on prend l'intersection des intervalles : les x qui vérifient à la fois x ≥ -1 et x < 3 forment l'intervalle [-1 ; 3[. C'est le cas d'un encadrement comme -1 ≤ 2x + 1 < 7, que l'on résout en transformant les trois membres en même temps : -2 ≤ 2x < 6, puis -1 ≤ x < 3.",
              ],
              box: { label: "Repère", text: "x ≤ a : ]-∞ ; a]. x < a : ]-∞ ; a[. x ≥ a : [a ; +∞[. x > a : ]a ; +∞[. a ≤ x < b : [a ; b[. Le crochet est toujours ouvert du côté de -∞ et de +∞." },
            },
          ],
          keyPoints: [
            "Ajouter ou soustraire un même nombre ne change pas le sens d'une inégalité.",
            "Multiplier ou diviser par un nombre strictement positif conserve le sens ; par un nombre strictement négatif, on le change.",
            "L'ensemble des solutions d'une inéquation du premier degré est un intervalle.",
            "Inégalité stricte : crochet ouvert ; inégalité large : crochet fermé ; toujours ouvert en -∞ et en +∞.",
            "On contrôle le sens en testant une valeur simple, comme 0, dans l'inéquation de départ.",
          ],
          example: {
            statement: "Résolvez l'inéquation 4(x - 1) - 3 > 7x + 2 et donnez l'ensemble de ses solutions sous forme d'intervalle.",
            solution: [
              "On développe : 4(x - 1) - 3 = 4x - 4 - 3 = 4x - 7. L'inéquation devient 4x - 7 > 7x + 2.",
              "On soustrait 7x aux deux membres : -3x - 7 > 2.",
              "On ajoute 7 aux deux membres : -3x > 9.",
              "On divise par -3, qui est strictement négatif : on change le sens de l'inégalité, d'où x < -3.",
              "Contrôle : pour x = -4, 4 × (-5) - 3 = -23 et 7 × (-4) + 2 = -26, et -23 > -26 est vrai ; pour x = 0, on obtient -7 > 2, qui est faux. C'est cohérent.",
              "Conclusion : S = ]-∞ ; -3[.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résolvez les inéquations suivantes et donnez l'ensemble des solutions sous forme d'intervalle : a) 2x + 7 ≤ 15 ; b) -5x < 20 ; c) 3 - x ≥ 2x + 9.",
              hint: "Isolez le terme en x, puis divisez par son coefficient. Si ce coefficient est négatif, changez le sens de l'inégalité.",
              solution: [
                "a) 2x ≤ 15 - 7 = 8, puis x ≤ 4 (division par 2, positif) : S = ]-∞ ; 4].",
                "b) On divise par -5, négatif, donc on change le sens : x > -4. S = ]-4 ; +∞[.",
                "c) 3 - 9 ≥ 2x + x, soit -6 ≥ 3x, donc -2 ≥ x, c'est-à-dire x ≤ -2 : S = ]-∞ ; -2].",
                "Contrôle du c) avec x = -3 : 3 - (-3) = 6 et 2 × (-3) + 9 = 3, or 6 ≥ 3 est vrai, et -3 appartient bien à ]-∞ ; -2].",
              ],
            },
            {
              level: 2,
              statement: "a) Résolvez l'inéquation (2x - 1)/3 < (x + 4)/2. b) Résolvez l'encadrement -3 < 1 - 2x ≤ 5 et donnez l'ensemble des solutions sous forme d'intervalle. c) Quels sont les nombres entiers solutions de l'encadrement du b) ?",
              hint: "Au a), multipliez les deux membres par 6, qui est positif. Au b), effectuez la même opération sur les trois membres ; en divisant par -2, les deux inégalités changent de sens.",
              solution: [
                "a) En multipliant par 6 (positif) : 2(2x - 1) < 3(x + 4), soit 4x - 2 < 3x + 12, donc x < 14. S = ]-∞ ; 14[.",
                "b) On soustrait 1 aux trois membres : -4 < -2x ≤ 4.",
                "On divise les trois membres par -2, négatif : les inégalités changent de sens, 2 > x ≥ -2, c'est-à-dire -2 ≤ x < 2. S = [-2 ; 2[.",
                "Contrôle des bornes : pour x = -2, 1 - 2 × (-2) = 5 et 5 ≤ 5 est vrai (borne incluse) ; pour x = 2, 1 - 4 = -3 et -3 < -3 est faux (borne exclue).",
                "c) Les entiers de [-2 ; 2[ sont -2, -1, 0 et 1.",
              ],
            },
            {
              level: 3,
              statement: "Deux agences louent une voiture pour une journée (données fictives). Agence A : 40 € plus 0,25 € par kilomètre parcouru. Agence B : 70 € plus 0,15 € par kilomètre parcouru. On note x le nombre de kilomètres parcourus (x ≥ 0). a) Exprimez le prix payé chez chaque agence en fonction de x. b) Pour quelles distances l'agence B est-elle strictement moins chère que l'agence A ? c) Un client dispose d'au plus 100 € et choisit l'agence A. Quelles distances peut-il parcourir ? d) Pour quelles distances le prix chez B est-il compris entre 85 € et 100 € (bornes incluses) ?",
              hint: "Traduisez chaque question par une inéquation ou un encadrement. Pensez à tenir compte de la condition x ≥ 0 dans l'ensemble des solutions.",
              solution: [
                "a) Prix chez A : 40 + 0,25x ; prix chez B : 70 + 0,15x (en euros).",
                "b) On résout 70 + 0,15x < 40 + 0,25x, soit 30 < 0,10x, donc x > 300 (division par 0,10, positif). L'agence B est moins chère au-delà de 300 km : S = ]300 ; +∞[.",
                "Contrôle : pour 400 km, A coûte 140 € et B coûte 130 €.",
                "c) On résout 40 + 0,25x ≤ 100, soit 0,25x ≤ 60, donc x ≤ 240. Avec x ≥ 0, le client peut parcourir une distance de l'intervalle [0 ; 240], en kilomètres.",
                "d) On résout 85 ≤ 70 + 0,15x ≤ 100. En soustrayant 70 : 15 ≤ 0,15x ≤ 30 ; en divisant par 0,15 : 100 ≤ x ≤ 200.",
                "Conclusion : le prix chez B est compris entre 85 € et 100 € pour une distance comprise entre 100 et 200 km, soit x ∈ [100 ; 200].",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Inéquations et intervalles.",
            statements: [
              { text: "Si -2x < 6, alors x < -3.", true: false, why: "On divise par -2, qui est négatif : le sens change, donc x > -3." },
              { text: "Si x + 5 ≥ 2, alors x ≥ -3.", true: true, why: "On soustrait 5 aux deux membres, ce qui ne change pas le sens." },
              { text: "L'ensemble des solutions de x > 4 est [4 ; +∞[.", true: false, why: "4 n'est pas solution, car l'inégalité est stricte : S = ]4 ; +∞[." },
              { text: "Multiplier les deux membres d'une inégalité par 3 conserve son sens.", true: true, why: "3 est strictement positif." },
              { text: "On peut écrire l'intervalle [-∞ ; 2].", true: false, why: "Le crochet est toujours ouvert du côté de l'infini : on écrit ]-∞ ; 2]." },
              { text: "Les réels x tels que -1 ≤ x < 3 forment l'intervalle [-1 ; 3[.", true: true, why: "-1 est inclus (crochet fermé) et 3 est exclu (crochet ouvert)." },
              { text: "Une inéquation du premier degré a toujours une seule solution.", true: false, why: "Elle en a en général une infinité, qui forment un intervalle." },
            ],
          },
          quiz: [
            {
              q: "Quel est l'ensemble des solutions de l'inéquation 3x - 2 > 10 ?",
              options: ["]-∞ ; 4[", "[4 ; +∞[", "]-∞ ; 4]", "]4 ; +∞["],
              answer: 3,
              why: "3x > 12, donc x > 4 ; l'inégalité est stricte, donc 4 est exclu.",
            },
            {
              q: "Quel est l'ensemble des solutions de l'inéquation -2x ≥ 8 ?",
              options: ["[-4 ; +∞[", "]-∞ ; -4]", "]-∞ ; 4]", "[4 ; +∞["],
              answer: 1,
              why: "On divise par -2, négatif, donc on change le sens : x ≤ -4.",
            },
            {
              q: "Laquelle de ces transformations change le sens d'une inégalité ?",
              options: ["Ajouter -5 aux deux membres", "Multiplier les deux membres par 2", "Diviser les deux membres par -3", "Soustraire 4 aux deux membres"],
              answer: 2,
              why: "Seules la multiplication et la division par un nombre strictement négatif changent le sens.",
            },
            {
              q: "Quel intervalle correspond aux réels x tels que -2 < x ≤ 5 ?",
              options: ["]-2 ; 5]", "[-2 ; 5[", "]-2 ; 5[", "[-2 ; 5]"],
              answer: 0,
              why: "-2 est exclu (crochet ouvert) et 5 est inclus (crochet fermé).",
            },
            {
              q: "Le nombre 0 est-il solution de l'inéquation 5 - 3x < x - 1 ?",
              options: ["Oui, car 5 > 0", "Oui, car 0 est toujours solution", "On ne peut pas savoir sans résoudre", "Non, car 5 < -1 est faux"],
              answer: 3,
              why: "Pour x = 0, l'inéquation devient 5 < -1, ce qui est faux : 0 n'est pas solution.",
            },
          ],
          trap: "Oublier de changer le sens de l'inégalité quand on multiplie ou divise par un nombre négatif (de -2x < 6, on déduit x > -3, et non x < -3), ou mal orienter les crochets en écrivant l'intervalle des solutions.",
          method: "Après chaque résolution, testez une valeur simple (souvent 0) dans l'inéquation de départ : si votre intervalle annonce qu'elle est solution alors qu'elle ne vérifie pas l'inégalité, il y a une erreur de sens.",
        },
      ],
    },
  ],
}
