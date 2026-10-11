import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'nsi-1re',
  chapters: [
    /* ================================================================== */
    /* REPRÉSENTER LES DONNÉES : TYPES CONSTRUITS                           */
    /* ================================================================== */
    {
      id: 'types-construits',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'p-uplets',
          title: 'Les p-uplets et p-uplets nommés',
          minutes: 30,
          objectives: [
            "Construire un p-uplet et lire ses éléments grâce à leurs indices.",
            "Écrire une fonction renvoyant un p-uplet de valeurs, et récupérer ces valeurs par affectation multiple.",
            "Représenter un p-uplet nommé (enregistrement) et accéder à ses champs par leur nom.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un p-uplet ?",
              paragraphs: [
                "Un p-uplet est une suite ordonnée et finie de p valeurs, appelées composantes. Pour p = 2 on parle de couple, pour p = 3 de triplet. Les composantes peuvent être de types différents : un élève peut être décrit par le triplet ('Lina', 16, 14.5), qui réunit un nom (chaîne), un âge (entier) et une moyenne (flottant). En Python, les p-uplets ont le type tuple : on les écrit entre parenthèses, les composantes étant séparées par des virgules.",
                "Comme pour une chaîne de caractères, chaque composante est repérée par son indice, qui commence à 0. Avec eleve = ('Lina', 16, 14.5), eleve[0] vaut 'Lina', eleve[2] vaut 14.5, et len(eleve) vaut 3. L'indice du dernier élément est donc len(eleve) - 1 ; demander eleve[3] provoque une erreur IndexError. On parcourt un p-uplet avec une boucle for x in eleve, et l'on teste l'appartenance avec in : 16 in eleve vaut True.",
                "Attention à l'écriture d'un p-uplet à une seule composante : c'est la virgule, et non la parenthèse, qui fabrique le p-uplet. Ainsi (7,) est un p-uplet de longueur 1, alors que (7) est simplement l'entier 7 entouré de parenthèses. Le p-uplet vide s'écrit (). Les parenthèses peuvent d'ailleurs être omises quand il n'y a pas d'ambiguïté : t = 1, 2 construit le couple (1, 2).",
              ],
              box: { label: "Définition", text: "Un p-uplet (type tuple en Python) est une suite ordonnée de p valeurs, éventuellement de types différents, notée entre parenthèses : (3, -2), ('Lina', 16, 14.5). On accède à la composante d'indice i par t[i], les indices allant de 0 à len(t) - 1." },
            },
            {
              heading: "Un type immuable",
              paragraphs: [
                "Un p-uplet est immuable (on dit aussi non mutable) : une fois créé, on ne peut ni modifier, ni ajouter, ni supprimer une composante. Avec eleve = ('Lina', 16, 14.5), l'instruction eleve[1] = 17 provoque l'erreur TypeError: 'tuple' object does not support item assignment. Pour obtenir un élève de 17 ans, on construit un nouveau p-uplet et on l'affecte à la variable : eleve = (eleve[0], 17, eleve[2]).",
                "Cette immuabilité est une garantie : une fonction qui reçoit un p-uplet ne peut pas le modifier par erreur. Elle permet aussi d'utiliser un p-uplet comme clé de dictionnaire, ce qu'une liste ne permet pas. Les opérations qui ne modifient rien restent possibles : la concaténation (1, 2) + (3,) donne le nouveau p-uplet (1, 2, 3), et la comparaison se fait dans l'ordre lexicographique, composante par composante, comme les mots du dictionnaire : (2, 5) < (2, 9) vaut True car les premières composantes sont égales et 5 < 9.",
              ],
              box: { label: "À retenir", text: "Un p-uplet ne se modifie pas : t[i] = v provoque une TypeError. On construit un nouveau p-uplet si une valeur doit changer. Les comparaisons de p-uplets se font composante par composante, dans l'ordre lexicographique." },
            },
            {
              heading: "Une fonction qui renvoie plusieurs valeurs",
              paragraphs: [
                "Une fonction Python ne renvoie qu'un seul objet, mais cet objet peut être un p-uplet : c'est la manière usuelle de renvoyer plusieurs résultats. Par exemple def division(a, b): return a // b, a % b renvoie le couple formé du quotient et du reste de la division euclidienne de a par b. L'appel division(17, 5) renvoie (3, 2), car 17 = 5 × 3 + 2. La fonction prédéfinie divmod fait exactement la même chose.",
                "On récupère les composantes par affectation multiple (on dit aussi déballage) : q, r = division(17, 5) affecte 3 à q et 2 à r. Le nombre de variables à gauche doit être égal au nombre de composantes, sinon Python lève une erreur ValueError (too many values to unpack, ou not enough values to unpack). Le même mécanisme permet d'échanger deux variables en une ligne : a, b = b, a construit le couple (b, a), puis le déballe dans a et b.",
              ],
              box: { label: "Repère", text: "return a // b, a % b renvoie un couple. q, r = division(17, 5) donne q = 3 et r = 2. a, b = b, a échange les valeurs de a et b." },
            },
            {
              heading: "Les p-uplets nommés",
              paragraphs: [
                "Dans un p-uplet, il faut se souvenir que l'indice 1 correspond à l'âge et l'indice 2 à la moyenne : le code eleve[2] est peu lisible. Un p-uplet nommé associe un nom (on dit un descripteur, ou un champ) à chaque composante. On parle aussi d'enregistrement : c'est la structure d'une fiche, ou d'une ligne de tableur dont les colonnes ont un titre.",
                "En Python, on représente le plus souvent un p-uplet nommé par un dictionnaire dont les clés sont les noms des champs : eleve = {'nom': 'Lina', 'age': 16, 'moyenne': 14.5}. On accède alors à un champ par son nom : eleve['age'] vaut 16. Le module collections propose aussi la fonction namedtuple : avec Eleve = namedtuple('Eleve', ['nom', 'age']) puis e = Eleve('Lina', 16), on lit e.nom et e.age, et l'objet reste immuable. Les p-uplets nommés qui partagent les mêmes descripteurs forment une table, notion étudiée dans le chapitre sur les données en tables.",
              ],
              box: { label: "Définition", text: "Un p-uplet nommé (ou enregistrement) est un p-uplet dont chaque composante est désignée par un nom de champ plutôt que par sa position. En Python, on l'implémente couramment par un dictionnaire : {'nom': 'Lina', 'age': 16}." },
            },
          ],
          keyPoints: [
            "Un p-uplet (tuple) est une suite ordonnée de valeurs, éventuellement de types différents : t = ('Lina', 16, 14.5).",
            "Les indices vont de 0 à len(t) - 1 ; un p-uplet à une seule composante s'écrit avec une virgule : (7,).",
            "Un p-uplet est immuable : t[i] = v provoque une TypeError.",
            "Une fonction renvoie plusieurs valeurs sous forme de p-uplet ; on les récupère par affectation multiple : q, r = divmod(17, 5).",
            "Un p-uplet nommé désigne ses composantes par des noms de champs ; en Python, on l'implémente couramment par un dictionnaire.",
          ],
          example: {
            statement: "Écrire une fonction min_max(t) qui reçoit une liste non vide de nombres et renvoie le couple (plus petite valeur, plus grande valeur), sans utiliser les fonctions min et max. Que contiennent mini et maxi après mini, maxi = min_max([4, -1, 7, 2]) ?",
            solution: [
              "On initialise les deux résultats avec le premier élément, qui existe puisque la liste est non vide : petit = t[0] et grand = t[0].",
              "On parcourt la liste : for x in t: if x < petit: petit = x ; if x > grand: grand = x (les deux tests sont indépendants, au même niveau dans la boucle).",
              "Après la boucle, on renvoie le couple : return petit, grand.",
              "Déroulement sur [4, -1, 7, 2] : au départ petit = grand = 4 ; avec -1, petit devient -1 ; avec 7, grand devient 7 ; avec 2, rien ne change.",
              "L'appel renvoie le couple (-1, 7), déballé par l'affectation multiple.",
              "Réponse : mini vaut -1 et maxi vaut 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On définit ville = ('Nantes', 44, 'Loire-Atlantique'). Donner la valeur de : a) ville[0] ; b) ville[2] ; c) len(ville) ; d) ville[1] + 1. e) Que se passe-t-il si l'on exécute ville[1] = 45 ?",
              hint: "Les indices commencent à 0, et un p-uplet ne peut pas être modifié.",
              solution: [
                "a) La composante d'indice 0 est la première : ville[0] vaut 'Nantes'.",
                "b) La composante d'indice 2 est la troisième : ville[2] vaut 'Loire-Atlantique'.",
                "c) Le p-uplet a trois composantes : len(ville) vaut 3.",
                "d) ville[1] vaut 44, donc ville[1] + 1 vaut 45 (ville n'est pas modifié).",
                "e) Un p-uplet est immuable : Python lève une erreur TypeError ('tuple' object does not support item assignment).",
              ],
            },
            {
              level: 2,
              statement: "Écrire une fonction bilan(notes) qui reçoit une liste non vide de notes et renvoie le couple (moyenne, nombre de notes supérieures ou égales à 10). Donner ensuite les valeurs de m et n après m, n = bilan([12, 8, 15, 9]).",
              hint: "Parcourez la liste une seule fois en mettant à jour deux variables : la somme et le compteur. Renvoyez les deux résultats séparés par une virgule.",
              solution: [
                "On initialise s = 0 et n = 0.",
                "Boucle : for x in notes: s = s + x ; if x >= 10: n = n + 1.",
                "Après la boucle : return s / len(notes), n. La fonction renvoie un couple.",
                "Calcul sur [12, 8, 15, 9] : s = 12 + 8 + 15 + 9 = 44, donc la moyenne vaut 44 / 4 = 11.0.",
                "Les notes supérieures ou égales à 10 sont 12 et 15 : n = 2.",
                "Résultat : bilan([12, 8, 15, 9]) renvoie (11.0, 2), donc m vaut 11.0 et n vaut 2.",
              ],
            },
            {
              level: 3,
              statement: "Un point du plan est représenté par le couple de ses coordonnées (x, y). 1. Écrire une fonction milieu(a, b) qui renvoie le milieu du segment [AB], et une fonction distance(a, b) qui renvoie la distance AB (on utilisera sqrt du module math). 2. Calculer milieu((1, 2), (4, 6)) et distance((1, 2), (4, 6)). 3. Écrire une fonction plus_proche(points) qui renvoie le point de la liste non vide points le plus proche de l'origine O = (0, 0), puis l'appliquer à [(3, 4), (-1, 1), (0, -2)]. 4. Que renvoie sorted([(3, 4), (-1, 1), (0, -2)]) ? Justifier.",
              hint: "Déballez les couples (xa, ya = a) pour écrire les formules. Le milieu a pour coordonnées les moyennes des coordonnées, et AB = √((xb - xa)² + (yb - ya)²).",
              solution: [
                "1. def milieu(a, b): xa, ya = a ; xb, yb = b ; return (xa + xb) / 2, (ya + yb) / 2.",
                "def distance(a, b): xa, ya = a ; xb, yb = b ; return sqrt((xb - xa) ** 2 + (yb - ya) ** 2), après from math import sqrt.",
                "2. milieu((1, 2), (4, 6)) renvoie ((1 + 4) / 2, (2 + 6) / 2) = (2.5, 4.0). distance((1, 2), (4, 6)) = √(3² + 4²) = √25 = 5.0.",
                "3. def plus_proche(points): meilleur = points[0] ; for p in points: if distance(p, (0, 0)) < distance(meilleur, (0, 0)): meilleur = p. Après la boucle : return meilleur.",
                "Les distances à l'origine sont √(9 + 16) = 5 pour (3, 4), √2 ≈ 1,41 pour (-1, 1) et 2 pour (0, -2) : la fonction renvoie (-1, 1).",
                "4. Les couples sont comparés dans l'ordre lexicographique, d'abord sur la première composante : -1 < 0 < 3.",
                "Résultat : milieu (2.5, 4.0), distance 5.0, point le plus proche (-1, 1), et sorted renvoie [(-1, 1), (0, -2), (3, 4)].",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression Python à sa valeur.",
            pairs: [
              { left: "len((4, 7, 1))", right: "3" },
              { left: "(4, 7, 1)[2]", right: "1" },
              { left: "(1, 2) + (3,)", right: "(1, 2, 3)" },
              { left: "type((7,))", right: "tuple" },
              { left: "type((7))", right: "int" },
              { left: "(2, 5) < (2, 9)", right: "True" },
            ],
          },
          quiz: [
            { q: "Que vaut len(('a', 'b', 'c', 'd')) ?", options: ["3", "5", "4", "Une erreur, car les éléments sont des chaînes"], answer: 2, why: "Le p-uplet contient quatre composantes, d'indices 0 à 3." },
            { q: "Quelle écriture définit un p-uplet de longueur 1 contenant 5 ?", options: ["(5,)", "(5)", "[5]", "tuple 5 sans parenthèses"], answer: 0, why: "C'est la virgule qui fabrique le p-uplet : (5) est seulement l'entier 5." },
            { q: "Avec t = (4, 5), que provoque l'instruction t[0] = 1 ?", options: ["t devient (1, 5)", "t devient (1, 4, 5)", "Rien, l'instruction est ignorée", "Une erreur TypeError"], answer: 3, why: "Un p-uplet est immuable : on ne peut pas affecter une de ses composantes." },
            { q: "Que valent q et r après q, r = divmod(23, 4) ?", options: ["q = 3 et r = 5", "q = 5 et r = 3", "q = 5.75 et r = 0", "q = 23 et r = 4"], answer: 1, why: "23 = 4 × 5 + 3 : le quotient vaut 5 et le reste 3, renvoyés dans le couple (5, 3)." },
            { q: "Avec eleve = {'nom': 'Lina', 'age': 16}, comment lire l'âge ?", options: ["eleve[1]", "eleve.age()", "eleve['age']", "eleve('age')"], answer: 2, why: "Ce p-uplet nommé est un dictionnaire : on accède au champ par son nom, entre crochets." },
          ],
          trap: "Croire que (7) est un p-uplet à un élément, alors que c'est l'entier 7 : il faut écrire (7,). Autre erreur fréquente : tenter de modifier une composante avec t[i] = v, ce qui provoque une TypeError puisque le p-uplet est immuable.",
          method: "Pour chaque fonction qui renvoie un p-uplet, écrivez dans sa documentation l'ordre exact des composantes (par exemple « renvoie (quotient, reste) »), puis vérifiez à l'appel que le nombre de variables de l'affectation multiple est égal au nombre de composantes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'tableaux-listes',
          title: 'Les tableaux : listes, compréhension, matrices',
          minutes: 35,
          objectives: [
            "Lire et modifier les éléments d'un tableau grâce à leurs index.",
            "Itérer sur les éléments d'un tableau, par indice ou par valeur.",
            "Construire un tableau par compréhension.",
            "Utiliser des tableaux de tableaux pour représenter des matrices : notation a[i][j].",
          ],
          course: [
            {
              heading: "Le tableau indexé",
              paragraphs: [
                "Un tableau est une suite de valeurs, en général de même type, rangées dans des cases numérotées. En Python, un tableau est représenté par une liste (type list), écrite entre crochets : t = [12, 5, 8, 20]. Chaque élément est repéré par son indice (ou index), à partir de 0 : t[0] vaut 12, t[3] vaut 20. La longueur len(t) vaut 4, et le dernier élément a l'indice len(t) - 1 = 3. Python accepte aussi les indices négatifs : t[-1] désigne le dernier élément.",
                "Contrairement au p-uplet, le tableau est mutable : on peut modifier un élément par affectation. Après t[1] = 7, la liste devient [12, 7, 8, 20]. Lire ou écrire en dehors des indices valides, par exemple t[4], provoque l'erreur IndexError: list index out of range : c'est un débordement de tableau, l'une des erreurs les plus fréquentes. On crée facilement un tableau de taille donnée : [0] * 5 vaut [0, 0, 0, 0, 0].",
              ],
              box: { label: "Définition", text: "Un tableau (liste Python) est une suite de valeurs accessibles par leur indice : t[i], avec 0 ≤ i ≤ len(t) - 1. On lit un élément avec t[i] et on le modifie avec t[i] = v." },
            },
            {
              heading: "Parcourir un tableau",
              paragraphs: [
                "Il existe deux façons d'itérer sur un tableau. Le parcours par valeur, for x in t, donne directement les éléments : il suffit pour calculer une somme ou chercher une valeur. Le parcours par indice, for i in range(len(t)), donne les indices 0, 1, ..., len(t) - 1 : il est nécessaire quand on doit connaître la position d'un élément ou le modifier, par exemple for i in range(len(t)): t[i] = 2 * t[i] double tous les éléments.",
                "En pratique, les listes Python peuvent aussi grandir : t.append(x) ajoute x à la fin, et t + u construit la concaténation des deux listes. Une précaution importante concerne la copie : u = t ne copie pas la liste, mais donne un second nom au même tableau. Après u[0] = 99, t[0] vaut aussi 99. Pour obtenir une copie indépendante, on écrit u = list(t) ou u = t.copy(). De même, une fonction qui modifie une liste reçue en paramètre modifie la liste de l'appelant : c'est un effet de bord.",
              ],
              box: { label: "À retenir", text: "for x in t parcourt les valeurs ; for i in range(len(t)) parcourt les indices. u = t ne copie pas : u et t désignent le même tableau. Copie indépendante : u = list(t)." },
            },
            {
              heading: "Construire un tableau par compréhension",
              paragraphs: [
                "Python permet de construire un tableau en décrivant ses éléments, comme on définit un ensemble en mathématiques. La syntaxe [expression for x in sequence] calcule l'expression pour chaque valeur de x : [i * i for i in range(5)] vaut [0, 1, 4, 9, 16]. On peut ajouter une condition de filtrage : [x for x in t if x % 2 == 0] ne garde que les éléments pairs de t.",
                "La compréhension remplace une boucle avec ajouts successifs, en plus court et plus lisible. Par exemple, avec notes = [12, 7, 15, 9], l'expression [n for n in notes if n >= 10] vaut [12, 15] et [n + 1 for n in notes] vaut [13, 8, 16, 10]. L'expression peut être quelconque : [len(m) for m in ['nsi', 'python']] vaut [3, 6]. Une compréhension construit toujours un nouveau tableau, sans modifier la séquence parcourue.",
              ],
              box: { label: "Formule", text: "[expression for x in sequence if condition] : pour chaque x de la séquence qui vérifie la condition, la valeur de l'expression est ajoutée au nouveau tableau. La partie if est facultative." },
            },
            {
              heading: "Les matrices : tableaux de tableaux",
              paragraphs: [
                "Un tableau peut contenir des tableaux. On représente ainsi une matrice, c'est-à-dire un tableau à deux dimensions organisé en lignes et en colonnes : m = [[1, 2, 3], [4, 5, 6]] a 2 lignes et 3 colonnes. m[i] est la ligne d'indice i (m[1] vaut [4, 5, 6]) et m[i][j] est l'élément situé ligne i, colonne j : m[1][0] vaut 4. Le nombre de lignes est len(m) et le nombre de colonnes len(m[0]).",
                "On parcourt une matrice avec deux boucles imbriquées : for i in range(len(m)): for j in range(len(m[0])): ... traite chaque case m[i][j]. Les matrices servent à représenter une image (chaque case est un pixel), une grille de jeu ou un tableau de résultats. Pour créer une matrice de n lignes et p colonnes remplie de 0, on écrit [[0] * p for i in range(n)]. L'écriture [[0] * p] * n est un piège : elle répète n fois la même ligne, et modifier une case modifie alors toute la colonne.",
              ],
              box: { label: "Repère", text: "m[i][j] : ligne i, colonne j. Nombre de lignes : len(m). Nombre de colonnes : len(m[0]). Création correcte d'une matrice n × p nulle : [[0] * p for i in range(n)]." },
            },
          ],
          keyPoints: [
            "Un tableau Python est une liste : t[i] lit l'élément d'indice i, avec 0 ≤ i ≤ len(t) - 1 ; t[i] = v le modifie.",
            "Un indice hors des bornes provoque une IndexError (débordement de tableau).",
            "for x in t parcourt les valeurs ; for i in range(len(t)) parcourt les indices.",
            "u = t ne copie pas la liste : il faut u = list(t) pour une copie indépendante.",
            "Compréhension : [expression for x in sequence if condition].",
            "Matrice : tableau de tableaux ; m[i][j] désigne la ligne i et la colonne j.",
          ],
          example: {
            statement: "On considère la matrice m = [[2, 0, 1], [3, 5, 4]]. a) Donner ses dimensions et la valeur de m[1][2]. b) Écrire une fonction somme_matrice(m) qui renvoie la somme de tous ses éléments, et calculer somme_matrice(m). c) Écrire par compréhension la liste des sommes de chaque ligne.",
            solution: [
              "a) len(m) = 2 lignes et len(m[0]) = 3 colonnes. m[1] est la ligne [3, 5, 4], donc m[1][2] vaut 4.",
              "b) def somme_matrice(m): s = 0 ; for i in range(len(m)): for j in range(len(m[i])): s = s + m[i][j]. Après les deux boucles : return s.",
              "Calcul : 2 + 0 + 1 + 3 + 5 + 4 = 15.",
              "c) [sum(ligne) for ligne in m] parcourt les lignes : la première a pour somme 3, la seconde 12.",
              "Réponse : matrice 2 × 3, m[1][2] = 4, somme_matrice(m) = 15 et la liste des sommes des lignes vaut [3, 12].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On définit t = [7, 3, 9, 1, 6]. Donner : a) t[0] ; b) t[2] ; c) t[-1] ; d) len(t). e) Que contient t après t[1] = 10 ? f) Que provoque l'instruction print(t[5]) ?",
              hint: "Numérotez les cases à partir de 0 ; t[-1] est le dernier élément.",
              solution: [
                "a) t[0] vaut 7.",
                "b) t[2] vaut 9 (troisième élément).",
                "c) t[-1] est le dernier élément : 6.",
                "d) len(t) vaut 5.",
                "e) L'élément d'indice 1 est remplacé : t vaut [7, 10, 9, 1, 6].",
                "f) Les indices valides vont de 0 à 4 : t[5] provoque une erreur IndexError.",
              ],
            },
            {
              level: 2,
              statement: "a) Que valent [2 * x for x in range(4)] et [x for x in [5, 12, 8, 15, 3] if x > 7] ? b) Écrire par compréhension la liste des carrés des entiers impairs compris entre 1 et 9, et donner sa valeur. c) Écrire par compréhension la liste des longueurs des mots de ['nsi', 'python', 'liste'], et donner sa valeur.",
              hint: "range(4) donne 0, 1, 2, 3. Un entier k est impair lorsque k % 2 == 1.",
              solution: [
                "a) [2 * x for x in range(4)] vaut [0, 2, 4, 6].",
                "Les éléments strictement supérieurs à 7 sont 12, 8 et 15 : [x for x in [5, 12, 8, 15, 3] if x > 7] vaut [12, 8, 15], dans l'ordre de la liste.",
                "b) [k * k for k in range(1, 10) if k % 2 == 1] : les impairs sont 1, 3, 5, 7, 9, d'où [1, 9, 25, 49, 81].",
                "c) [len(m) for m in ['nsi', 'python', 'liste']] vaut [3, 6, 5].",
                "Résultat : [0, 2, 4, 6], [12, 8, 15], [1, 9, 25, 49, 81] et [3, 6, 5].",
              ],
            },
            {
              level: 3,
              statement: "Une image en niveaux de gris est représentée par une matrice d'entiers entre 0 (noir) et 255 (blanc) (données fictives) : img = [[0, 50, 100, 150], [200, 250, 255, 10], [30, 60, 90, 120]]. 1. Donner les dimensions de l'image et la valeur de img[1][2]. 2. Écrire une fonction negatif(img) qui renvoie, par compréhension, une nouvelle image où chaque niveau p est remplacé par 255 - p ; donner la première ligne du résultat. 3. Écrire une fonction position_max(img) qui renvoie le couple (i, j) de la case la plus claire (la première trouvée en cas d'égalité) ; que renvoie-t-elle ici ? 4. Un élève crée une image noire avec m = [[0] * 4] * 3, puis exécute m[0][0] = 255. Que contient m ? Expliquer et corriger.",
              hint: "Une compréhension peut en contenir une autre : la compréhension extérieure parcourt les lignes, la compréhension intérieure parcourt les pixels d'une ligne.",
              solution: [
                "1. len(img) = 3 lignes et len(img[0]) = 4 colonnes : image de 3 × 4 pixels. img[1] = [200, 250, 255, 10], donc img[1][2] vaut 255.",
                "2. def negatif(img): return [[255 - p for p in ligne] for ligne in img]. Première ligne : [255 - 0, 255 - 50, 255 - 100, 255 - 150] = [255, 205, 155, 105].",
                "3. def position_max(img): meilleur = (0, 0) ; for i in range(len(img)): for j in range(len(img[0])): if img[i][j] > img[meilleur[0]][meilleur[1]]: meilleur = (i, j). Après les boucles : return meilleur.",
                "Le plus grand niveau est 255, atteint uniquement ligne 1, colonne 2 : la fonction renvoie (1, 2). Le test strict > garde la première case en cas d'égalité.",
                "4. [[0] * 4] * 3 répète trois fois la même ligne (le même objet liste). Modifier m[0][0] modifie donc cette ligne unique, vue trois fois : m vaut [[255, 0, 0, 0], [255, 0, 0, 0], [255, 0, 0, 0]].",
                "Correction : m = [[0] * 4 for i in range(3)] crée trois lignes distinctes ; après m[0][0] = 255, seule la première ligne change.",
                "Résultat : image 3 × 4, img[1][2] = 255, première ligne du négatif [255, 205, 155, 105], position_max(img) = (1, 2).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les tableaux en Python.",
            statements: [
              { text: "Avec t = [4, 8, 15], t[1] vaut 4.", true: false, why: "Les indices commencent à 0 : t[1] vaut 8, et t[0] vaut 4." },
              { text: "Pour toute liste t, t[len(t)] provoque une IndexError.", true: true, why: "Le dernier indice valide est len(t) - 1." },
              { text: "[x * 2 for x in [1, 2, 3]] vaut [2, 4, 6].", true: true, why: "L'expression x * 2 est calculée pour chaque élément." },
              { text: "Après u = t puis u[0] = 99, la liste t n'est pas modifiée.", true: false, why: "u et t désignent le même tableau : t[0] vaut aussi 99." },
              { text: "Dans une matrice m, m[i][j] est l'élément de la ligne i et de la colonne j.", true: true, why: "m[i] est la ligne i, puis [j] choisit la colonne." },
              { text: "[[0] * 3] * 2 crée deux lignes indépendantes.", true: false, why: "La même ligne est répétée : il faut [[0] * 3 for i in range(2)]." },
              { text: "La boucle for x in t donne les indices de t.", true: false, why: "Elle donne les valeurs ; les indices s'obtiennent avec range(len(t))." },
            ],
          },
          quiz: [
            { q: "Avec t = [10, 20, 30, 40], que vaut t[2] ?", options: ["20", "30", "40", "Une erreur IndexError"], answer: 1, why: "L'indice 2 désigne le troisième élément, car on compte à partir de 0." },
            { q: "Que vaut [k for k in range(6) if k % 3 == 0] ?", options: ["[0, 3]", "[3, 6]", "[0, 3, 6]", "[1, 2, 4, 5]"], answer: 0, why: "range(6) donne 0 à 5 ; seuls 0 et 3 sont multiples de 3 (6 est exclu)." },
            { q: "Avec m = [[1, 2], [3, 4], [5, 6]], que vaut m[2][1] ?", options: ["3", "4", "5", "6"], answer: 3, why: "m[2] est la ligne [5, 6], et l'élément d'indice 1 de cette ligne est 6." },
            { q: "Avec la même matrice m = [[1, 2], [3, 4], [5, 6]], que vaut len(m) ?", options: ["2, le nombre de colonnes", "6, le nombre total d'éléments", "3", "1"], answer: 2, why: "len(m) compte les éléments de m, c'est-à-dire ses lignes : il y en a 3." },
            { q: "Que contient t après t = [1, 2, 3] ; u = t ; u.append(4) ?", options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Une erreur, car t n'a pas été modifié directement"], answer: 1, why: "u et t désignent la même liste : l'ajout fait par u est visible par t." },
          ],
          trap: "Oublier que les indices commencent à 0, et écrire range(1, len(t) + 1) ou t[len(t)], ce qui saute le premier élément et provoque un débordement (IndexError). Autre erreur classique : croire que u = t copie la liste.",
          method: "Avant d'écrire une boucle sur un tableau, demandez-vous si vous avez besoin des positions (parcours par indice) ou seulement des valeurs (parcours par valeur), puis testez votre code sur une petite liste de 3 éléments en écrivant à la main la valeur de i et de t[i] à chaque tour.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'dictionnaires',
          title: 'Les dictionnaires : clés et valeurs',
          minutes: 30,
          objectives: [
            "Construire une entrée de dictionnaire et accéder à une valeur par sa clé.",
            "Itérer sur les éléments d'un dictionnaire avec les méthodes keys(), values() et items().",
            "Utiliser un dictionnaire pour compter des occurrences ou représenter un enregistrement.",
          ],
          course: [
            {
              heading: "Associer des clés à des valeurs",
              paragraphs: [
                "Un dictionnaire est une collection de couples clé : valeur. On n'accède pas aux éléments par leur position, comme dans un tableau, mais par leur clé, comme on cherche un mot dans un dictionnaire de langue pour lire sa définition. En Python (type dict), on l'écrit entre accolades : prix = {'pomme': 3, 'kiwi': 5}. L'expression prix['kiwi'] vaut 5, et len(prix) vaut 2, le nombre de couples. Le dictionnaire vide s'écrit {}.",
                "Les clés d'un dictionnaire sont uniques : une même clé ne peut pas apparaître deux fois. Elles doivent être d'un type immuable, comme une chaîne, un entier ou un p-uplet ; une liste ne peut pas servir de clé. Les valeurs, elles, peuvent être de n'importe quel type, et deux clés peuvent avoir la même valeur. Demander une clé absente, par exemple prix['poire'], provoque l'erreur KeyError.",
              ],
              box: { label: "Définition", text: "Un dictionnaire (dict) est un ensemble de couples clé : valeur, où chaque clé est unique et immuable. On lit la valeur associée à la clé k avec d[k] ; une clé absente provoque une KeyError." },
            },
            {
              heading: "Construire et modifier un dictionnaire",
              paragraphs: [
                "Un dictionnaire est mutable. L'affectation d[cle] = valeur crée une nouvelle entrée si la clé est absente, et remplace la valeur si la clé existe déjà : après prix['poire'] = 2, prix contient trois couples ; après prix['pomme'] = 4, il en contient toujours trois, mais la pomme coûte 4. L'instruction del prix['kiwi'] supprime une entrée.",
                "Pour éviter une KeyError, on teste la présence d'une clé avec l'opérateur in : 'kiwi' in prix vaut True ou False. Attention, in teste les clés et non les valeurs : 5 in prix vaut False même si une valeur vaut 5. La méthode get permet aussi de prévoir une valeur par défaut : prix.get('mangue', 0) renvoie 0 si la clé 'mangue' est absente, sans erreur. Enfin, un dictionnaire peut se construire par compréhension : {x: x * x for x in range(4)} vaut {0: 0, 1: 1, 2: 4, 3: 9}.",
              ],
              box: { label: "Repère", text: "d[k] = v : ajoute ou remplace. del d[k] : supprime. k in d : teste la présence de la clé k. d.get(k, defaut) : valeur de k, ou defaut si k est absente." },
            },
            {
              heading: "Itérer sur un dictionnaire",
              paragraphs: [
                "La boucle for cle in d parcourt les clés du dictionnaire. Trois méthodes donnent des vues sur son contenu : d.keys() pour les clés, d.values() pour les valeurs et d.items() pour les couples (clé, valeur). La forme la plus utile est for cle, valeur in d.items(), qui déballe chaque couple : for fruit, p in prix.items(): print(fruit, p) affiche chaque fruit et son prix.",
                "Depuis la version 3.7 de Python, un dictionnaire conserve l'ordre dans lequel les clés ont été insérées : le parcours suit cet ordre. Il ne faut pas pour autant chercher à accéder au « deuxième élément » : un dictionnaire n'a pas d'indices. Pour calculer la somme des prix, on écrit sum(prix.values()) ; pour obtenir la liste des clés, list(prix.keys()) ou simplement list(prix).",
              ],
              box: { label: "À retenir", text: "for k in d : les clés. for v in d.values() : les valeurs. for k, v in d.items() : les couples clé, valeur. L'ordre de parcours est l'ordre d'insertion des clés." },
            },
            {
              heading: "Deux usages essentiels",
              paragraphs: [
                "Premier usage : compter des occurrences. Pour compter les lettres d'un mot, on part d'un dictionnaire vide et, pour chaque lettre, on ajoute la clé avec la valeur 1 si elle est absente, ou on augmente sa valeur de 1 si elle est présente : d = {} ; for c in mot: if c in d: d[c] = d[c] + 1 ; else: d[c] = 1. Ce schéma sert à compter des votes, des mots d'un texte ou des réponses à un sondage.",
                "Second usage : représenter un enregistrement (p-uplet nommé), dont les clés sont les noms des champs. Les métadonnées EXIF d'une photographie en sont un bon exemple : un dictionnaire comme {'modele': 'XY-20', 'largeur': 4000, 'hauteur': 3000, 'date': '2026-05-14'} (données fictives) décrit l'appareil, la taille et la date de prise de vue. L'accès par clé est aussi très efficace : chercher une clé dans un dictionnaire prend en moyenne un temps quasi constant, alors que chercher une valeur dans une liste impose de la parcourir.",
              ],
            },
          ],
          keyPoints: [
            "Un dictionnaire associe des valeurs à des clés uniques et immuables : d = {'pomme': 3, 'kiwi': 5}.",
            "d[k] lit la valeur de la clé k ; une clé absente provoque une KeyError.",
            "d[k] = v ajoute une entrée ou remplace la valeur ; del d[k] supprime l'entrée.",
            "k in d teste la présence d'une clé, jamais d'une valeur.",
            "Itérer : for k in d, d.keys(), d.values(), et for k, v in d.items().",
            "Schéma de comptage : si la clé est présente, on ajoute 1 à sa valeur ; sinon, on la crée avec la valeur 1.",
          ],
          example: {
            statement: "Écrire une fonction occurrences(mot) qui renvoie un dictionnaire donnant, pour chaque lettre du mot, son nombre d'apparitions. Que renvoie occurrences('banane') ?",
            solution: [
              "On part d'un dictionnaire vide : d = {}.",
              "On parcourt les lettres : for c in mot: if c in d: d[c] = d[c] + 1 ; else: d[c] = 1. Après la boucle : return d.",
              "Déroulement sur les six lettres b, a, n, a, n, e : 'b' est ajoutée avec 1, puis 'a' avec 1, puis 'n' avec 1.",
              "La quatrième lettre, 'a', est déjà présente : sa valeur passe à 2. La cinquième, 'n', passe aussi à 2. La sixième, 'e', est ajoutée avec 1.",
              "Vérification : 1 + 2 + 2 + 1 = 6, soit le nombre de lettres du mot.",
              "Réponse : occurrences('banane') renvoie {'b': 1, 'a': 2, 'n': 2, 'e': 1}, les clés apparaissant dans l'ordre de leur première rencontre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On définit stock = {'stylo': 12, 'cahier': 5, 'gomme': 8}. a) Que vaut stock['cahier'] ? b) Écrire l'instruction qui ajoute 3 règles (clé 'regle'). c) Écrire l'instruction qui fixe le nombre de stylos à 10. d) Que vaut alors len(stock) ? e) Que provoque stock['feutre'], et que renvoie stock.get('feutre', 0) ?",
              hint: "La même syntaxe d[k] = v sert à ajouter une clé absente et à remplacer la valeur d'une clé présente.",
              solution: [
                "a) stock['cahier'] vaut 5.",
                "b) stock['regle'] = 3 crée une nouvelle entrée.",
                "c) stock['stylo'] = 10 remplace l'ancienne valeur 12.",
                "d) Le dictionnaire contient les clés 'stylo', 'cahier', 'gomme' et 'regle' : len(stock) vaut 4.",
                "e) La clé 'feutre' est absente : stock['feutre'] provoque une KeyError, alors que stock.get('feutre', 0) renvoie 0 sans erreur.",
              ],
            },
            {
              level: 2,
              statement: "On reprend stock = {'stylo': 10, 'cahier': 5, 'gomme': 8, 'regle': 3}. a) Écrire une fonction total(stock) qui renvoie le nombre total d'articles, et calculer total(stock). b) Écrire une fonction a_commander(stock, seuil) qui renvoie la liste des articles dont la quantité est strictement inférieure à seuil, et donner a_commander(stock, 6).",
              hint: "Utilisez values() pour le total, et items() pour disposer à la fois du nom de l'article et de sa quantité.",
              solution: [
                "a) def total(stock): s = 0 ; for q in stock.values(): s = s + q. Après la boucle : return s. (On peut aussi écrire return sum(stock.values()).)",
                "total(stock) = 10 + 5 + 8 + 3 = 26.",
                "b) def a_commander(stock, seuil): return [article for article, q in stock.items() if q < seuil].",
                "Avec seuil = 6 : stylo (10) et gomme (8) ne sont pas retenus ; cahier (5) et regle (3) le sont, dans l'ordre d'insertion.",
                "Résultat : total(stock) vaut 26 et a_commander(stock, 6) vaut ['cahier', 'regle'].",
              ],
            },
            {
              level: 3,
              statement: "Lors d'une élection de délégués, les bulletins sont rangés dans la liste votes = ['A', 'B', 'A', 'C', 'B', 'A']. 1. Écrire une fonction depouiller(votes) qui renvoie le dictionnaire des voix de chaque candidat, et donner son résultat. 2. Écrire une fonction gagnant(resultats) qui renvoie le candidat ayant le plus de voix (le premier rencontré en cas d'égalité). 3. On veut inverser le dictionnaire codes = {'fr': 'France', 'it': 'Italie', 'es': 'Espagne'}, c'est-à-dire obtenir un dictionnaire qui associe à chaque pays son code. Écrire cette inversion par compréhension. Pourquoi l'inversion de resultats poserait-elle problème si deux candidats avaient le même nombre de voix ?",
              hint: "Pour le gagnant, mémorisez le meilleur candidat rencontré en parcourant les couples (candidat, voix). Pour l'inversion, chaque valeur devient une clé.",
              solution: [
                "1. def depouiller(votes): d = {} ; for v in votes: if v in d: d[v] = d[v] + 1 ; else: d[v] = 1. Après la boucle : return d.",
                "A apparaît 3 fois, B 2 fois et C 1 fois : depouiller(votes) renvoie {'A': 3, 'B': 2, 'C': 1}.",
                "2. def gagnant(resultats): meilleur = None ; for c, n in resultats.items(): if meilleur is None or n > resultats[meilleur]: meilleur = c. Après la boucle : return meilleur. Ici, la fonction renvoie 'A'.",
                "3. inverse = {pays: code for code, pays in codes.items()} vaut {'France': 'fr', 'Italie': 'it', 'Espagne': 'es'}.",
                "Dans l'inverse de resultats, les nombres de voix deviendraient des clés. Comme une clé est unique, deux candidats à égalité donneraient la même clé : la seconde affectation écraserait la première et un candidat disparaîtrait.",
                "Résultat : {'A': 3, 'B': 2, 'C': 1}, gagnant 'A', et une inversion qui n'est fiable que si toutes les valeurs sont distinctes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "On exécute d = {} ; for c in 'abba': if c in d: d[c] = d[c] + 1 ; else: d[c] = 1. Remettez dans l'ordre les états successifs du dictionnaire d.",
            items: [
              "{}",
              "{'a': 1}",
              "{'a': 1, 'b': 1}",
              "{'a': 1, 'b': 2}",
              "{'a': 2, 'b': 2}",
            ],
          },
          quiz: [
            { q: "Avec d = {'a': 1, 'b': 2}, que vaut d['b'] ?", options: ["'b'", "1", "2", "Une erreur, car un dictionnaire n'a pas d'indice"], answer: 2, why: "d['b'] renvoie la valeur associée à la clé 'b', soit 2." },
            { q: "Lequel de ces objets ne peut pas être une clé de dictionnaire ?", options: ["'nsi'", "[1, 2]", "42", "(1, 2)"], answer: 1, why: "Une clé doit être immuable : une liste est mutable, contrairement à une chaîne, un entier ou un p-uplet." },
            { q: "Que vaut len(d) après d = {'x': 1} ; d['x'] = 5 ; d['y'] = 2 ?", options: ["3", "1", "7", "2"], answer: 3, why: "d['x'] = 5 remplace la valeur existante, puis d['y'] = 2 ajoute une clé : il y a deux couples." },
            { q: "Dans for k, v in d.items(), que représentent k et v ?", options: ["Une clé et sa valeur", "Un indice et la valeur rangée à cet indice", "Deux clés consécutives du dictionnaire", "La première et la dernière valeur"], answer: 0, why: "items() donne les couples (clé, valeur), déballés dans k et v." },
            { q: "Que vaut 'Lina' in {'nom': 'Lina'} ?", options: ["True", "False", "'nom'", "Une erreur KeyError"], answer: 1, why: "L'opérateur in teste les clés : la seule clé est 'nom', et 'Lina' n'est qu'une valeur." },
          ],
          trap: "Croire que l'opérateur in teste les valeurs d'un dictionnaire, alors qu'il teste uniquement les clés ; ou lire d[k] sans vérifier que la clé k existe, ce qui provoque une KeyError.",
          method: "Quand vous manipulez un dictionnaire, écrivez à côté du code un petit exemple de son contenu (par exemple {'A': 3, 'B': 2}) : vous saurez alors immédiatement ce que désignent les clés, les valeurs, et ce que donne chaque parcours.",
        },
      ],
    },

    /* ================================================================== */
    /* SPÉCIFIER, TESTER, METTRE AU POINT                                   */
    /* ================================================================== */
    {
      id: 'mise-au-point',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'specification-assertions',
          title: 'Spécifier une fonction : préconditions, postconditions, assertions',
          minutes: 30,
          objectives: [
            "Prototyper une fonction : nom, paramètres et type du résultat.",
            "Décrire les préconditions sur les arguments et les postconditions sur les résultats.",
            "Utiliser des assertions pour vérifier une précondition ou une postcondition.",
          ],
          course: [
            {
              heading: "Prototype et spécification",
              paragraphs: [
                "Avant d'écrire le corps d'une fonction, on fixe son prototype, c'est-à-dire la façon de l'appeler : son nom, la liste de ses paramètres avec leur type, et le type de la valeur renvoyée. En Python, on peut indiquer ces types par des annotations : def moyenne(notes: list) -> float. Ces annotations servent de documentation ; Python ne les vérifie pas à l'exécution, et l'appel moyenne('abc') n'est pas refusé pour autant.",
                "La spécification d'une fonction décrit ce qu'elle fait, sans dire comment : c'est un contrat entre celui qui écrit la fonction et celui qui l'utilise. Elle précise les conditions d'utilisation (préconditions) et ce que la fonction garantit en retour (postconditions). En Python, on l'écrit dans la chaîne de documentation (docstring), placée entre triples guillemets juste sous la ligne def ; on l'affiche avec help(moyenne).",
              ],
              box: { label: "Définition", text: "Prototype : nom de la fonction, paramètres (et leurs types), type du résultat. Spécification : description de ce que fait la fonction, avec ses préconditions et ses postconditions. Elle s'écrit dans la docstring." },
            },
            {
              heading: "Préconditions et postconditions",
              paragraphs: [
                "Une précondition est une condition que les arguments doivent vérifier au moment de l'appel. Pour moyenne(notes), on exige que notes soit une liste non vide de nombres compris entre 0 et 20. Si une précondition n'est pas respectée, la fonction n'a plus aucune obligation : elle peut renvoyer un résultat absurde ou provoquer une erreur (ici, une division par zéro si la liste est vide). C'est à l'appelant de respecter les préconditions.",
                "Une postcondition est une propriété que le résultat (ou l'état du programme) vérifie à la fin de l'exécution, lorsque les préconditions étaient remplies. Pour moyenne(notes), le résultat est compris entre la plus petite et la plus grande note. Pour une fonction de tri, la liste renvoyée est rangée dans l'ordre croissant et contient les mêmes éléments que la liste reçue. Une bonne postcondition est vérifiable : elle relie précisément le résultat aux arguments.",
              ],
              box: { label: "À retenir", text: "Précondition : ce que l'appelant doit garantir avant l'appel (sur les arguments). Postcondition : ce que la fonction garantit après l'appel (sur le résultat), si les préconditions étaient respectées." },
            },
            {
              heading: "Les assertions",
              paragraphs: [
                "Une assertion est une instruction qui vérifie qu'une condition est vraie à un endroit du programme. En Python, on écrit assert condition, ou assert condition, message. Si la condition est vraie, rien ne se passe et l'exécution continue. Si elle est fausse, Python interrompt le programme en levant l'erreur AssertionError, accompagnée du message éventuel : assert len(notes) > 0, 'liste vide' signale clairement la cause du problème.",
                "On place les assertions qui vérifient les préconditions au début de la fonction, et celles qui vérifient les postconditions juste avant le return. Une erreur est alors détectée au plus près de sa cause, au lieu de produire plus loin un résultat faux difficile à expliquer. Les assertions sont un outil de mise au point : elles peuvent être désactivées (en lançant Python avec l'option -O), et ne remplacent ni la documentation ni la vérification des saisies d'un utilisateur dans un programme définitif.",
              ],
              box: { label: "Règle", text: "assert condition, message : si la condition est fausse, une AssertionError est levée avec le message ; sinon, rien ne se passe. Préconditions en début de fonction, postconditions juste avant le return." },
            },
            {
              heading: "Un exemple complet",
              paragraphs: [
                "Voici une fonction spécifiée et protégée par des assertions. def moyenne(notes: list) -> float, avec pour docstring : « Renvoie la moyenne des nombres de la liste notes. Précondition : notes est une liste non vide de nombres entre 0 et 20. Postcondition : le résultat est compris entre min(notes) et max(notes). »",
                "Le corps commence par assert len(notes) > 0, 'liste vide', puis calcule s = sum(notes) et m = s / len(notes), vérifie assert min(notes) <= m <= max(notes) et se termine par return m. L'appel moyenne([12, 15, 9]) renvoie 12.0 sans rien signaler ; l'appel moyenne([]) s'arrête sur l'AssertionError « liste vide », message bien plus parlant que la ZeroDivisionError qui se serait produite sinon.",
              ],
            },
          ],
          keyPoints: [
            "Le prototype d'une fonction donne son nom, ses paramètres et le type de son résultat ; les annotations de type ne sont pas vérifiées par Python.",
            "La spécification (dans la docstring) dit ce que fait la fonction, avec ses préconditions et ses postconditions.",
            "Précondition : condition sur les arguments, à garantir par l'appelant.",
            "Postcondition : propriété du résultat, garantie par la fonction si les préconditions sont respectées.",
            "assert condition, message lève une AssertionError si la condition est fausse, et ne fait rien sinon.",
          ],
          example: {
            statement: "Spécifier puis écrire une fonction indice_max(t) qui renvoie l'indice de la première occurrence de la plus grande valeur d'une liste de nombres. Protéger la fonction par des assertions, puis donner indice_max([3, 9, 2, 9]) et le comportement de indice_max([]).",
            solution: [
              "Prototype : def indice_max(t: list) -> int.",
              "Précondition : t est une liste non vide de nombres. Postcondition : le résultat i vérifie 0 ≤ i < len(t) et t[i] est supérieur ou égal à tous les éléments de t.",
              "Début du corps : assert len(t) > 0, 'liste vide'.",
              "Calcul : i_max = 0 ; for i in range(1, len(t)): if t[i] > t[i_max]: i_max = i. Le test strict > conserve la première occurrence du maximum.",
              "Avant le return : for x in t: assert x <= t[i_max] (vérification de la postcondition), puis return i_max.",
              "Pour [3, 9, 2, 9] : i_max passe de 0 à 1 (9 > 3), puis ne change plus (2 < 9 et 9 n'est pas strictement supérieur à 9).",
              "Réponse : indice_max([3, 9, 2, 9]) renvoie 1, et indice_max([]) lève une AssertionError avec le message « liste vide ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la fonction def quotient(a, b): return a / b. a) Quelle précondition faut-il imposer sur b ? b) Écrire l'assertion à placer au début de la fonction, avec un message. c) Que se passe-t-il lors de l'appel quotient(5, 0), avec puis sans cette assertion ?",
              hint: "Cherchez la valeur de b pour laquelle le calcul a / b est impossible.",
              solution: [
                "a) La division par zéro est impossible : il faut b ≠ 0.",
                "b) assert b != 0, 'division par zéro'.",
                "c) Avec l'assertion : l'appel s'arrête sur une AssertionError portant le message « division par zéro ».",
                "Sans l'assertion : le calcul 5 / 0 provoque une ZeroDivisionError.",
                "Résultat : la précondition est b ≠ 0 ; l'assertion transforme une erreur de calcul en un message qui nomme la précondition violée.",
              ],
            },
            {
              level: 2,
              statement: "Une note finale est calculée à partir d'une note d'écrit (coefficient 2) et d'une note d'oral (coefficient 1). a) Écrire le prototype et la spécification (préconditions, postcondition) de la fonction note_finale(ecrit, oral). b) Écrire la fonction avec une assertion pour chaque précondition et une pour la postcondition. c) Calculer note_finale(14, 11).",
              hint: "La note finale est la moyenne pondérée (2 × ecrit + oral) / 3 ; une moyenne de deux nombres est toujours comprise entre eux.",
              solution: [
                "a) Prototype : def note_finale(ecrit: float, oral: float) -> float. Préconditions : 0 ≤ ecrit ≤ 20 et 0 ≤ oral ≤ 20. Postcondition : le résultat est compris entre min(ecrit, oral) et max(ecrit, oral).",
                "b) Corps : assert 0 <= ecrit <= 20, 'écrit hors bornes' ; assert 0 <= oral <= 20, 'oral hors bornes' ; n = (2 * ecrit + oral) / 3.",
                "Puis : assert min(ecrit, oral) <= n <= max(ecrit, oral) ; return n.",
                "c) (2 × 14 + 11) / 3 = (28 + 11) / 3 = 39 / 3 = 13.0. La postcondition est vérifiée, car 11 ≤ 13 ≤ 14.",
                "Résultat : note_finale(14, 11) renvoie 13.0.",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction suivante. def rang(t, x): assert x in t, 'valeur absente' ; i = 0 ; while t[i] != x: i = i + 1. Après la boucle : return i. 1. Rédiger la spécification de rang (précondition et postcondition). 2. Que renvoie rang([4, 7, 7, 2], 7) ? 3. Que se passe-t-il lors de l'appel rang([4, 7], 5) ? 4. Même question si l'on supprime l'assertion. 5. Écrire une assertion qui vérifie, avant le return, une partie de la postcondition.",
              hint: "Suivez à la main les valeurs de i et de t[i] à chaque tour de la boucle while.",
              solution: [
                "1. Précondition : t est une liste et x est un élément de t. Postcondition : le résultat i vérifie t[i] == x, et aucun élément d'indice inférieur à i n'est égal à x (c'est l'indice de la première occurrence).",
                "2. i = 0 : t[0] = 4 ≠ 7, donc i devient 1 ; t[1] = 7, la boucle s'arrête. rang([4, 7, 7, 2], 7) renvoie 1.",
                "3. 5 n'est pas dans [4, 7] : l'assertion est fausse et l'appel s'arrête sur une AssertionError avec le message « valeur absente ».",
                "4. Sans l'assertion : i passe à 1 (4 ≠ 5), puis à 2 (7 ≠ 5) ; l'évaluation de t[2] provoque une IndexError, car les indices valides sont 0 et 1.",
                "5. Avant le return : assert t[i] == x, 'postcondition non vérifiée'.",
                "Résultat : rang([4, 7, 7, 2], 7) vaut 1 ; l'assertion de précondition remplace un débordement de tableau peu explicite par un message clair.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : spécification et assertions.",
            statements: [
              { text: "Une assertion dont la condition est vraie ne produit aucun affichage.", true: true, why: "Elle ne fait rien quand la condition est vraie ; l'exécution continue." },
              { text: "Les annotations de type, comme n: int, sont vérifiées par Python à l'exécution.", true: false, why: "Ce sont des indications pour le lecteur et les outils : Python ne les contrôle pas." },
              { text: "Si une précondition n'est pas respectée, la fonction ne garantit plus rien sur son résultat.", true: true, why: "Le contrat n'engage la fonction que si l'appelant respecte les préconditions." },
              { text: "Une postcondition décrit ce qui doit être vrai avant l'appel de la fonction.", true: false, why: "C'est la définition d'une précondition ; la postcondition porte sur la fin de l'exécution." },
              { text: "assert b != 0, 'diviseur nul' lève une AssertionError lorsque b vaut 0.", true: true, why: "La condition b != 0 est alors fausse." },
              { text: "Une fonction bien protégée par des assertions n'a pas besoin de docstring.", true: false, why: "Les assertions vérifient le contrat, mais c'est la documentation qui l'explique à l'utilisateur." },
              { text: "La docstring d'une fonction s'affiche avec help(nom_de_la_fonction).", true: true, why: "help lit la chaîne de documentation placée sous la ligne def." },
            ],
          },
          quiz: [
            { q: "Qu'appelle-t-on une précondition ?", options: ["Une condition que le résultat renvoyé par la fonction doit toujours vérifier", "Une instruction exécutée juste avant la fonction", "Un commentaire placé au début du programme", "Une condition à vérifier par les arguments lors de l'appel"], answer: 3, why: "La précondition porte sur les arguments : c'est l'appelant qui doit la garantir." },
            { q: "Que produit l'instruction assert 2 + 2 == 5 ?", options: ["Rien ne se passe", "Le programme affiche False", "Une erreur AssertionError", "Python affiche un avertissement puis continue l'exécution"], answer: 2, why: "La condition est fausse : l'exécution s'arrête sur une AssertionError." },
            { q: "Quelle précondition naturelle imposer à racine(x), qui renvoie √x ?", options: ["x > 0", "x ≥ 0", "x ≠ 0", "x est un entier"], answer: 1, why: "La racine carrée est définie pour tout réel positif ou nul, y compris 0." },
            { q: "Où place-t-on une assertion qui vérifie une postcondition ?", options: ["Juste avant le return, sur le résultat", "En première ligne de la fonction", "Dans le programme principal, avant l'appel", "Dans le nom de la fonction"], answer: 0, why: "La postcondition porte sur le résultat : on la vérifie une fois celui-ci calculé." },
            { q: "Avec def f(n: int) -> int: return n * 2, que renvoie f(2.5) ?", options: ["Une erreur TypeError, car 2.5 n'est pas un entier", "4, car 2.5 est d'abord converti en 2", "5.0", "None"], answer: 2, why: "Les annotations ne sont pas vérifiées : le calcul 2.5 * 2 est effectué normalement et donne 5.0." },
          ],
          trap: "Confondre précondition et postcondition : la précondition porte sur les arguments avant l'appel, la postcondition sur le résultat après l'exécution. Autre erreur : croire que les annotations de type empêchent un mauvais appel, alors que Python ne les vérifie pas.",
          method: "Pour spécifier une fonction, complétez systématiquement trois lignes avant de coder : « Entrées et conditions sur ces entrées », « Résultat et propriété garantie », « Exemple d'appel et valeur attendue ». Traduisez ensuite les deux premières en assertions.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'tests-mise-au-point',
          title: 'Tester et corriger un programme',
          minutes: 35,
          objectives: [
            "Utiliser des jeux de tests pour vérifier une fonction, en incluant les cas limites.",
            "Identifier les erreurs classiques : typage, débordements, inégalités, flottants, effets de bord.",
            "Localiser et corriger un bug à partir d'un message d'erreur ou d'un test qui échoue.",
          ],
          course: [
            {
              heading: "Pourquoi et comment tester",
              paragraphs: [
                "Tester une fonction, c'est l'exécuter sur des entrées choisies dont on connaît à l'avance le résultat attendu, et comparer. Un jeu de tests est un ensemble de tels couples (entrée, résultat attendu). En Python, chaque test s'écrit simplement par une assertion : assert maximum([3, 8, 2]) == 8. Si toutes les assertions passent, le programme se termine sans message ; sinon, l'AssertionError indique la ligne du test qui échoue.",
                "La qualité d'un jeu de tests compte plus que le nombre de tests. Il doit contenir des cas généraux, mais surtout des cas limites, là où se cachent la plupart des erreurs : liste vide, liste d'un seul élément, valeur cherchée en première ou en dernière position, valeurs toutes égales, nombres négatifs, bornes d'un intervalle (une note égale à 10 si le critère est « au moins 10 »). Il est utile d'écrire les tests avant la fonction : ils obligent à préciser ce qu'elle doit faire.",
              ],
              box: { label: "À retenir", text: "Un jeu de tests : des entrées et les résultats attendus, vérifiés par des assertions. Toujours y inclure les cas limites (vide, un seul élément, bornes, valeurs égales, extrémités)." },
            },
            {
              heading: "Ce que les tests prouvent, et ce qu'ils ne prouvent pas",
              paragraphs: [
                "Le succès d'un jeu de tests ne garantit pas la correction d'un programme : il montre seulement que le programme donne le bon résultat pour les entrées testées. L'informaticien néerlandais Edsger Dijkstra a souligné cette idée : les tests peuvent révéler la présence d'erreurs, jamais prouver leur absence. Un test qui échoue est donc une information précieuse, et un jeu de tests bien choisi réduit fortement le risque d'erreur sans l'annuler.",
                "On peut placer des exemples directement dans la docstring, sous la forme d'une ligne >>> maximum([3, 8, 2]) suivie d'une ligne donnant le résultat attendu, 8. Le module doctest de la bibliothèque standard exécute ces exemples et signale ceux qui ne donnent pas le résultat annoncé : il suffit d'écrire import doctest puis doctest.testmod(). La documentation sert ainsi à la fois d'explication et de test.",
              ],
            },
            {
              heading: "Les erreurs classiques",
              paragraphs: [
                "Problèmes de typage : input() renvoie toujours une chaîne, donc input('Âge ? ') + 1 provoque une TypeError, et '3' + '4' vaut '34' et non 7 ; il faut convertir avec int() ou float(). Débordements de tableau : une boucle for i in range(len(t) + 1) finit par lire t[len(t)] et provoque une IndexError. Choix des inégalités : écrire > au lieu de >= exclut la borne, une erreur dite « de un ».",
                "Instruction conditionnelle non exhaustive : une fonction qui teste if n > 0 puis elif n < 0 oublie le cas n == 0 et renvoie alors None. Comparaisons entre flottants : 0.1 + 0.2 == 0.3 vaut False, car 0.1 + 0.2 vaut 0.30000000000000004 ; on compare plutôt abs(a - b) < 1e-9. Effets de bord non désirés : une fonction qui modifie la liste reçue en paramètre modifie la liste de l'appelant. Enfin, un mauvais nommage des variables (a, b, x2) rend ces erreurs plus difficiles à voir.",
              ],
              box: { label: "Repère", text: "Typage (chaîne au lieu de nombre), débordement d'indice, < au lieu de ≤, cas oublié dans un if, égalité entre flottants, liste modifiée par effet de bord, variable mal nommée : les sept suspects habituels." },
            },
            {
              heading: "Une méthode de mise au point",
              paragraphs: [
                "Quand un programme s'arrête sur une erreur, on lit d'abord le message (la trace) en partant de la fin : la dernière ligne donne le type d'erreur (SyntaxError, NameError, TypeError, IndexError, KeyError, ZeroDivisionError...) et une explication, les lignes précédentes donnent le fichier et le numéro de la ligne fautive. Quand le programme ne s'arrête pas mais donne un résultat faux, c'est un test qui révèle le problème.",
                "On reproduit ensuite le bug sur l'exemple le plus petit possible, on observe les valeurs intermédiaires (en ajoutant des print provisoires, ou avec le débogueur d'un environnement comme Thonny, qui exécute le programme pas à pas), on formule une hypothèse sur la cause, puis on corrige. On relance enfin tous les tests, pas seulement celui qui échouait : une correction peut casser autre chose (on parle de régression). Le test qui a révélé le bug est conservé dans le jeu de tests.",
              ],
              box: { label: "Règle", text: "Lire le message d'erreur, reproduire sur un petit exemple, observer les valeurs, formuler une hypothèse, corriger, relancer tous les tests et garder le test qui a révélé le bug." },
            },
          ],
          keyPoints: [
            "Un test compare le résultat obtenu au résultat attendu : assert f(entree) == attendu.",
            "Un bon jeu de tests contient des cas généraux et des cas limites (liste vide, un élément, bornes, extrémités).",
            "Le succès des tests ne prouve pas que le programme est correct.",
            "Erreurs classiques : typage, débordement d'indice, choix des inégalités, cas oublié, flottants, effets de bord, mauvais nommage.",
            "On lit un message d'erreur par la fin : type d'erreur, puis numéro de ligne.",
            "Après une correction, on relance tous les tests pour éviter les régressions.",
          ],
          example: {
            statement: "Un élève a écrit def maximum(t): m = 0 ; for x in t: if x > m: m = x. Après la boucle : return m. Il teste assert maximum([3, 8, 2]) == 8, qui passe. Proposer un test qui révèle un bug, expliquer la cause et corriger la fonction.",
            solution: [
              "Le premier test passe, mais il ne contient que des nombres positifs : c'est un cas général, pas un cas limite.",
              "Test avec des nombres tous négatifs : assert maximum([-5, -2, -9]) == -2.",
              "Déroulement : m vaut 0 au départ ; aucun élément n'est strictement supérieur à 0, donc m n'est jamais modifié et la fonction renvoie 0. Le test échoue.",
              "Cause : l'initialisation m = 0 suppose que le maximum est positif. Il faut partir d'un élément de la liste.",
              "Correction : assert len(t) > 0, 'liste vide' ; m = t[0], le reste de la fonction étant inchangé.",
              "On relance les deux tests, qui passent, et on ajoute un test à un seul élément : assert maximum([4]) == 4.",
              "Réponse : le test maximum([-5, -2, -9]) == -2 révèle le bug, corrigé en initialisant m avec t[0] (liste supposée non vide).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La fonction compte(t, x) doit renvoyer le nombre d'apparitions de x dans la liste t. Écrire un jeu de cinq tests sous forme d'assertions, en précisant pour chacun le cas qu'il couvre.",
              hint: "Pensez au cas général, à une valeur absente, à la liste vide, à une liste où toutes les valeurs sont égales, et à une liste d'un seul élément.",
              solution: [
                "Cas général, avec x présent aux extrémités : assert compte([1, 2, 1, 3, 1], 1) == 3.",
                "Valeur absente : assert compte([1, 2, 3], 5) == 0.",
                "Liste vide : assert compte([], 4) == 0.",
                "Toutes les valeurs égales à x : assert compte([7, 7, 7], 7) == 3.",
                "Liste d'un seul élément : assert compte([2], 2) == 1.",
                "Résultat : cinq assertions couvrant un cas général et quatre cas limites.",
              ],
            },
            {
              level: 2,
              statement: "La fonction suivante doit renvoyer la moyenne d'une liste non vide de nombres : def moyenne(t): s = 0 ; for i in range(1, len(t)): s = s + t[i]. Après la boucle : return s / len(t). a) Que renvoie moyenne([10, 20, 30]) ? Quelle valeur était attendue ? b) Le test assert moyenne([0, 10]) == 5 passe-t-il ? Qu'en conclure ? c) Corriger la fonction.",
              hint: "Écrivez la liste des valeurs prises par i : range(1, len(t)) commence-t-il au premier indice ?",
              solution: [
                "a) range(1, 3) donne i = 1 puis i = 2 : s = 20 + 30 = 50, et la fonction renvoie 50 / 3 ≈ 16.67 au lieu de 20.",
                "Le premier élément, d'indice 0, n'est jamais ajouté.",
                "b) Avec [0, 10] : s = 10 et la fonction renvoie 10 / 2 = 5, qui est bien le résultat attendu. Le test passe, car l'élément oublié vaut 0.",
                "Conclusion : un test qui passe ne prouve pas que la fonction est correcte.",
                "c) Correction : for i in range(len(t)), ou plus simplement for x in t: s = s + x. On peut aussi ajouter assert len(t) > 0 pour la précondition.",
                "Résultat : la version corrigée renvoie 20.0 pour [10, 20, 30].",
              ],
            },
            {
              level: 3,
              statement: "Une fonction doit compter les notes supérieures ou égales à 10 dans une liste : def nb_admis(notes): n = 0 ; for i in range(len(notes) + 1): if notes[i] > 10: n = n + 1. Après la boucle : return n. 1. Que se passe-t-il lors de l'appel nb_admis([12, 10, 8]) ? 2. Identifier les deux erreurs de cette fonction et les corriger. 3. On corrige seulement le range. Le test assert nb_admis([15, 3]) == 1 passe-t-il ? Proposer un test qui révèle la seconde erreur. 4. Proposer un jeu de tests complet pour la version corrigée.",
              hint: "Suivez la valeur de i jusqu'au dernier tour de boucle, puis demandez-vous si une note égale à 10 est bien comptée.",
              solution: [
                "1. i = 0 : 12 > 10, n = 1 ; i = 1 : 10 > 10 est faux ; i = 2 : 8 > 10 est faux ; i = 3 : notes[3] n'existe pas, l'appel s'arrête sur une IndexError.",
                "2. Première erreur, un débordement : range(len(notes) + 1) va jusqu'à len(notes) ; il faut range(len(notes)).",
                "Seconde erreur, une inégalité mal choisie : > exclut la note 10 ; il faut notes[i] >= 10.",
                "3. Avec le seul range corrigé, nb_admis([15, 3]) vaut 1 : le test passe, car aucune note n'est égale à 10. Le test assert nb_admis([12, 10, 8]) == 2 échoue (la fonction renvoie 1) et révèle l'erreur.",
                "4. Jeu de tests : assert nb_admis([12, 10, 8]) == 2 (borne 10) ; assert nb_admis([]) == 0 (liste vide) ; assert nb_admis([9.5, 3]) == 0 (aucun admis) ; assert nb_admis([20, 10, 15]) == 3 (tous admis) ; assert nb_admis([10]) == 1 (un seul élément).",
                "Résultat : version corrigée for i in range(len(notes)): if notes[i] >= 10: n = n + 1, qui renvoie 2 pour [12, 10, 8].",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque erreur Python à une instruction qui la provoque.",
            pairs: [
              { left: "IndexError", right: "t[5] avec t = [1, 2, 3, 4, 5]" },
              { left: "KeyError", right: "d['z'] avec d = {'a': 1}" },
              { left: "TypeError", right: "'3' + 4" },
              { left: "NameError", right: "print(total) sans avoir défini total" },
              { left: "ZeroDivisionError", right: "7 / 0" },
              { left: "AssertionError", right: "assert len([]) > 0" },
            ],
          },
          quiz: [
            { q: "Pourquoi un jeu de tests réussi ne prouve-t-il pas qu'un programme est correct ?", options: ["Parce que les tests sont souvent faux", "Parce qu'il ne couvre que certaines entrées", "Parce que Python ignore les assertions", "Parce que les tests ralentissent le programme et en faussent les résultats"], answer: 1, why: "Les tests vérifient seulement les cas essayés ; une erreur peut se cacher dans un cas non testé." },
            { q: "Que vaut 0.1 + 0.2 == 0.3 en Python ?", options: ["False", "True", "0.3", "Une erreur TypeError"], answer: 0, why: "0.1 + 0.2 vaut 0.30000000000000004 à cause de la représentation binaire des flottants." },
            { q: "Pour tester une fonction qui travaille sur une liste, quelle entrée est un cas limite ?", options: ["[3, 8, 1]", "[10, 20, 30, 40]", "[5, 2, 7, 1]", "[]"], answer: 3, why: "La liste vide est le cas extrême, souvent oublié : division par zéro, accès à t[0] impossible..." },
            { q: "Que provoque input('Âge ? ') + 1 ?", options: ["L'âge augmenté de 1", "Une erreur TypeError", "La chaîne saisie suivie de 1", "Une erreur NameError"], answer: 1, why: "input renvoie une chaîne, et l'on ne peut pas additionner une chaîne et un entier." },
            { q: "Après avoir corrigé un bug, que faut-il faire ?", options: ["Supprimer les tests qui échouaient", "Relancer seulement le test qui avait échoué", "Relancer tous les tests", "Ajouter des affichages dans chaque fonction"], answer: 2, why: "Une correction peut introduire une nouvelle erreur ailleurs : on vérifie l'absence de régression." },
          ],
          trap: "Ne tester que des cas « faciles » (nombres positifs, listes de plusieurs éléments) et conclure que la fonction est correcte : les erreurs se cachent dans les cas limites (liste vide, borne de l'intervalle, valeurs négatives).",
          method: "Pour chaque fonction, écrivez au moins un test par cas limite avant même de la coder ; quand un bug apparaît, réduisez l'entrée jusqu'au plus petit exemple qui échoue, puis suivez à la main les valeurs des variables sur cet exemple.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'bibliotheques-langages',
          title: 'Utiliser des bibliothèques et comparer des langages',
          minutes: 30,
          objectives: [
            "Utiliser la documentation d'une bibliothèque pour appeler correctement ses fonctions.",
            "Importer un module de plusieurs façons et en utiliser les fonctions.",
            "Repérer, dans un nouveau langage de programmation, les traits communs et les traits particuliers à ce langage.",
          ],
          course: [
            {
              heading: "Modules et bibliothèques",
              paragraphs: [
                "Une bibliothèque est un ensemble de fonctions, déjà écrites et testées, que l'on réutilise au lieu de les reprogrammer. En Python, elle se présente sous forme de modules (un module est un fichier de code). La bibliothèque standard est fournie avec Python : math (fonctions mathématiques), random (hasard), csv (fichiers de données), time, turtle... D'autres bibliothèques, dites externes, s'installent avec l'outil pip : matplotlib pour tracer des graphiques, pandas pour traiter des tables.",
                "On importe un module de plusieurs façons. Avec import math, on écrit math.sqrt(16) : le préfixe indique d'où vient la fonction. Avec from math import sqrt, on écrit directement sqrt(16). Avec import random as rd, on utilise un alias : rd.randint(1, 6). La forme from math import * importe tous les noms sans préfixe ; elle est déconseillée, car elle peut masquer une fonction du programme portant le même nom.",
              ],
              box: { label: "Repère", text: "import math → math.sqrt(16) ; from math import sqrt → sqrt(16) ; import random as rd → rd.randint(1, 6). Bibliothèque standard : fournie avec Python. Bibliothèque externe : à installer avec pip." },
            },
            {
              heading: "Lire la documentation",
              paragraphs: [
                "Pour utiliser une fonction sans connaître son code, on lit sa documentation : help(math.sqrt) l'affiche dans l'interpréteur, dir(math) liste les noms du module, et la documentation officielle de Python décrit chaque module en détail. On y cherche quatre informations : les paramètres attendus, la valeur renvoyée et son type, les conditions d'utilisation, et les erreurs possibles.",
                "Les détails comptent. random.randint(a, b) renvoie un entier entre a et b, b inclus, alors que random.randrange(a, b) exclut b, comme range. math.sqrt(16) renvoie le flottant 4.0 et non l'entier 4, et math.sqrt(-1) lève une ValueError. math.floor(x) renvoie le plus grand entier inférieur ou égal à x, alors que int(x) supprime la partie décimale : les deux coïncident pour les positifs, mais math.floor(-2.5) vaut -3 et int(-2.5) vaut -2.",
              ],
              box: { label: "À retenir", text: "Dans une documentation, lisez les paramètres, le résultat et son type, les conditions d'utilisation et les erreurs. Exemple : randint(1, 6) peut renvoyer 6, randrange(1, 6) jamais." },
            },
            {
              heading: "La diversité des langages",
              paragraphs: [
                "Il existe un grand nombre de langages de programmation, conçus pour des usages différents : C pour les systèmes et les programmes rapides, JavaScript pour les pages Web, Java pour les applications, SQL pour interroger des bases de données, Python pour l'enseignement, le calcul scientifique et l'automatisation. Ils diffèrent par leur syntaxe : Python délimite les blocs par l'indentation, alors que C, Java et JavaScript utilisent des accolades { } et terminent les instructions par un point-virgule.",
                "Ils diffèrent aussi par leur fonctionnement. Le typage est dynamique en Python et en JavaScript (une variable n'a pas de type déclaré), statique en C et en Java (on écrit int n = 0 et la variable n ne peut contenir qu'un entier). Un programme C est compilé, c'est-à-dire traduit à l'avance en langage machine, alors que Python est exécuté par un interpréteur. Même les opérations de base varient : en C, la division de deux entiers donne un entier (7 / 2 vaut 3), alors qu'en Python 7 / 2 vaut 3.5 et 7 // 2 vaut 3.",
              ],
            },
            {
              heading: "L'unité des langages",
              paragraphs: [
                "Malgré ces différences, les langages impératifs partagent les mêmes constructions : variables et affectation, instructions conditionnelles, boucles bornées et non bornées, fonctions. Celui qui sait programmer dans un langage apprend vite un autre langage en cherchant ces constructions. Comparons une fonction qui calcule 1 + 2 + ... + n. En Python : def somme(n): s = 0 ; for i in range(1, n + 1): s = s + i. Après la boucle : return s.",
                "En JavaScript : function somme(n) { let s = 0; for (let i = 1; i <= n; i++) { s = s + i; } return s; }. En C : int somme(int n) { int s = 0; for (int i = 1; i <= n; i++) { s = s + i; } return s; }. On retrouve partout la même structure : une variable initialisée, une boucle de 1 à n, une affectation, un retour. Les différences sont de surface : mots-clés (def, function, int), accolades, déclaration des types, écriture i++ pour augmenter i de 1, booléens True en Python et true en JavaScript, opérateurs and, or, not en Python et &&, ||, ! en C et en JavaScript.",
              ],
              box: { label: "Règle", text: "Face à un langage inconnu, repérez : comment on déclare une variable, comment on écrit un test, une boucle et une fonction, comment sont délimités les blocs, et comment se comportent les types (division entière, booléens)." },
            },
          ],
          keyPoints: [
            "Une bibliothèque regroupe des fonctions réutilisables ; en Python, elle s'importe avec import, from ... import, ou import ... as.",
            "La documentation (help, dir, documentation officielle) donne les paramètres, le résultat, les conditions et les erreurs.",
            "random.randint(a, b) inclut b ; random.randrange(a, b) l'exclut.",
            "Les langages diffèrent par la syntaxe (indentation ou accolades), le typage (dynamique ou statique) et l'exécution (interprétée ou compilée).",
            "Les langages impératifs partagent variables, conditionnelles, boucles et fonctions.",
          ],
          example: {
            statement: "La documentation du module math indique que math.gcd(a, b) renvoie le plus grand commun diviseur des entiers a et b. Écrire une fonction simplifier(num, den) qui renvoie le couple (numérateur, dénominateur) de la fraction num / den rendue irréductible, puis calculer simplifier(84, 36).",
            solution: [
              "On importe la fonction : from math import gcd.",
              "On divise numérateur et dénominateur par leur PGCD, en division entière pour garder des entiers : def simplifier(num, den): d = gcd(num, den) ; return num // d, den // d.",
              "Calcul du PGCD : 84 = 2² × 3 × 7 et 36 = 2² × 3², donc gcd(84, 36) = 2² × 3 = 12.",
              "84 // 12 = 7 et 36 // 12 = 3.",
              "Réponse : simplifier(84, 36) renvoie (7, 3), soit la fraction 7/3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Écrire l'appel qui calcule la racine carrée de 16 après chacune des importations suivantes : import math ; from math import sqrt ; import math as m. Quelle valeur est renvoyée ? b) Quelles valeurs peut renvoyer random.randint(1, 6) ? et random.randrange(1, 6) ?",
              hint: "Le nom à écrire devant la fonction dépend de la forme de l'importation. Pour randrange, pensez au comportement de range.",
              solution: [
                "a) Après import math : math.sqrt(16). Après from math import sqrt : sqrt(16). Après import math as m : m.sqrt(16).",
                "Dans les trois cas, la valeur renvoyée est le flottant 4.0.",
                "b) random.randint(1, 6) renvoie un entier parmi 1, 2, 3, 4, 5, 6 (la borne 6 est incluse).",
                "random.randrange(1, 6) renvoie un entier parmi 1, 2, 3, 4, 5 (la borne 6 est exclue).",
                "Résultat : 4.0 dans les trois cas ; randint simule un dé à six faces, pas randrange(1, 6).",
              ],
            },
            {
              level: 2,
              statement: "On donne la fonction JavaScript suivante : function compte(t, x) { let n = 0; for (let i = 0; i < t.length; i++) { if (t[i] === x) { n = n + 1; } } return n; }. a) Que fait cette fonction ? b) Relever deux traits communs avec Python et trois différences d'écriture. c) La traduire en Python et donner la valeur de compte([1, 3, 1], 1).",
              hint: "t.length joue le rôle de len(t), et === est le test d'égalité stricte de JavaScript.",
              solution: [
                "a) Elle compte le nombre d'éléments du tableau t égaux à x.",
                "b) Traits communs : une variable compteur initialisée à 0, une boucle sur les indices de 0 à la longueur moins 1, un test d'égalité, une valeur renvoyée par return.",
                "Différences : blocs délimités par des accolades au lieu de l'indentation ; déclaration des variables avec let ; longueur notée t.length au lieu de len(t) ; égalité notée === au lieu de == ; incrémentation i++.",
                "c) def compte(t, x): n = 0 ; for i in range(len(t)): if t[i] == x: n = n + 1. Après la boucle : return n.",
                "Résultat : compte([1, 3, 1], 1) vaut 2.",
              ],
            },
            {
              level: 3,
              statement: "On donne la fonction C suivante : int f(int n) { int r = 0; while (n > 0) { r = r + n % 10; n = n / 10; } return r; }. 1. Calculer f(472) en détaillant chaque tour de boucle, et dire ce que calcule f. 2. Un élève la traduit en Python mot à mot : def f(n): r = 0 ; while n > 0: r = r + n % 10 ; n = n / 10. Après la boucle : return r. Expliquer pourquoi le résultat est faux. 3. Corriger la traduction.",
              hint: "En C, n et 10 sont des entiers : n / 10 est une division entière. Que vaut 472 / 10 en Python ?",
              solution: [
                "1. Tour 1 : r = 0 + 472 % 10 = 2, n = 472 / 10 = 47 (division entière en C). Tour 2 : r = 2 + 7 = 9, n = 4. Tour 3 : r = 9 + 4 = 13, n = 0. La boucle s'arrête.",
                "f(472) vaut 13 : la fonction calcule la somme des chiffres de n.",
                "2. En Python, / est la division décimale : 472 / 10 vaut 47.2, puis 4.72, 0.472... n devient un flottant qui ne s'annule qu'après plusieurs centaines de divisions.",
                "Les restes ajoutés sont eux aussi décimaux (47.2 % 10 vaut environ 7.2) : la fonction renvoie un flottant voisin de 14.44 au lieu de 13.",
                "3. Il faut la division entière de Python : n = n // 10. La traduction correcte est def f(n): r = 0 ; while n > 0: r = r + n % 10 ; n = n // 10. Après la boucle : return r.",
                "Résultat : f(472) = 13 ; une même écriture (/) n'a pas le même sens en C et en Python.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : bibliothèques et langages.",
            statements: [
              { text: "random.randint(1, 6) peut renvoyer 6.", true: true, why: "Avec randint, la borne supérieure est incluse." },
              { text: "En Python, les blocs d'instructions sont délimités par des accolades.", true: false, why: "Python utilise l'indentation ; les accolades délimitent les blocs en C, Java ou JavaScript." },
              { text: "Les boucles, les conditionnelles et les fonctions existent dans la plupart des langages impératifs.", true: true, why: "Ce sont les constructions communes à ces langages, seule leur écriture change." },
              { text: "En C, il faut déclarer le type d'une variable avant de l'utiliser.", true: true, why: "C est un langage à typage statique : on écrit par exemple int n = 0." },
              { text: "from math import * est la forme d'importation recommandée.", true: false, why: "Elle importe tous les noms sans préfixe et peut masquer des fonctions du programme." },
              { text: "En C, la division 7 / 2 entre deux entiers vaut 3.5.", true: false, why: "Entre deux entiers, la division C est entière : 7 / 2 vaut 3." },
              { text: "La bibliothèque matplotlib est fournie avec toute installation de Python.", true: false, why: "C'est une bibliothèque externe, à installer avec pip." },
            ],
          },
          quiz: [
            { q: "Après import math, comment calcule-t-on √9 ?", options: ["sqrt(9)", "math.sqrt(9)", "math(sqrt, 9)", "import.sqrt(9)"], answer: 1, why: "Avec import math, les fonctions du module s'utilisent avec le préfixe math." },
            { q: "Quelles valeurs peut renvoyer random.randrange(0, 10) ?", options: ["Les entiers de 0 à 10", "Les entiers de 1 à 10", "Les entiers de 0 à 9", "Les nombres réels entre 0 et 10"], answer: 2, why: "Comme range, randrange exclut la borne supérieure." },
            { q: "Comment Python délimite-t-il les blocs d'instructions ?", options: ["Par des accolades { }", "Par les mots begin et end", "Par des points-virgules", "Par l'indentation"], answer: 3, why: "En Python, l'indentation fait partie de la syntaxe : elle délimite les blocs." },
            { q: "Quelle fonction affiche la documentation d'une fonction Python ?", options: ["help", "print", "type", "len"], answer: 0, why: "help(f) affiche la docstring et la signature de la fonction f." },
            { q: "Quel opérateur JavaScript correspond au and de Python ?", options: ["and", "&&", "||", "!"], answer: 1, why: "En JavaScript comme en C, le et logique s'écrit &&, le ou ||, la négation !." },
          ],
          trap: "Traduire un programme d'un langage à l'autre mot à mot sans vérifier le sens des opérateurs : la division / est entière entre deux entiers en C mais décimale en Python, où la division entière s'écrit //.",
          method: "Avant d'utiliser une fonction de bibliothèque, lisez sa documentation et testez-la dans l'interpréteur sur deux ou trois valeurs, dont une valeur limite (borne, nombre négatif, zéro) : vous vérifiez ainsi les bornes incluses ou exclues et le type du résultat.",
        },
      ],
    },

    /* ================================================================== */
    /* TRAITER DES DONNÉES EN TABLES                                        */
    /* ================================================================== */
    {
      id: 'donnees-en-tables',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fichiers-csv',
          title: 'Importer une table depuis un fichier CSV',
          minutes: 30,
          objectives: [
            "Identifier les descripteurs, les enregistrements et le séparateur d'un fichier CSV.",
            "Importer une table depuis un fichier texte tabulé ou un fichier CSV.",
            "Représenter une table par un tableau de p-uplets nommés (dictionnaires) partageant les mêmes descripteurs.",
            "Convertir les valeurs lues dans le type adapté.",
          ],
          course: [
            {
              heading: "Données en tables et format CSV",
              paragraphs: [
                "Une table est une collection de données organisées en lignes et en colonnes, comme une feuille de tableur. Chaque ligne est un enregistrement (un élève, un pays, une mesure) ; chaque colonne correspond à un descripteur (on dit aussi attribut), qui a un nom et un domaine de valeurs : l'âge est un entier, la ville une chaîne, la moyenne un flottant entre 0 et 20. Tous les enregistrements partagent les mêmes descripteurs.",
                "Le format CSV (comma-separated values, valeurs séparées par des virgules) est un format texte très répandu pour échanger des tables entre logiciels : tableurs, sites de données ouvertes, programmes. Chaque ligne du fichier est un enregistrement, les valeurs étant séparées par un caractère appelé séparateur. La première ligne contient en général les descripteurs. En France, le séparateur est souvent le point-virgule, car la virgule sert de séparateur décimal. Un fichier texte tabulé fonctionne de la même façon, avec une tabulation comme séparateur.",
                "Exemple : un fichier eleves.csv dont les lignes sont « nom;age;ville », puis « Lina;16;Lyon », « Hugo;17;Lille » et « Sara;16;Nice » décrit une table de trois enregistrements et trois descripteurs (nom, age, ville), avec le point-virgule comme séparateur.",
              ],
              box: { label: "Définition", text: "Table : ensemble d'enregistrements (lignes) partageant les mêmes descripteurs (colonnes). Fichier CSV : fichier texte où chaque ligne est un enregistrement, les valeurs étant séparées par un séparateur (virgule ou point-virgule), la première ligne donnant les descripteurs." },
            },
            {
              heading: "Représenter une table en Python",
              paragraphs: [
                "Première représentation : un tableau doublement indexé, c'est-à-dire une liste de listes. Avec t = [['nom', 'age', 'ville'], ['Lina', '16', 'Lyon'], ['Hugo', '17', 'Lille']], t[2][2] vaut 'Lille'. Cette forme est simple, mais il faut se souvenir que la ville est en colonne 2, et la ligne d'indice 0 contient les descripteurs, pas des données.",
                "Seconde représentation, plus lisible : une liste de p-uplets nommés, chaque enregistrement étant un dictionnaire dont les clés sont les descripteurs. Avec table = [{'nom': 'Lina', 'age': 16, 'ville': 'Lyon'}, {'nom': 'Hugo', 'age': 17, 'ville': 'Lille'}], table[1]['ville'] vaut 'Lille' : on lit la ligne par son indice et la colonne par son nom. C'est cette représentation que l'on utilise le plus souvent pour rechercher, trier et fusionner.",
              ],
              box: { label: "Repère", text: "table[i] : l'enregistrement d'indice i (un dictionnaire). table[i]['ville'] : la valeur du descripteur ville dans cet enregistrement. len(table) : le nombre d'enregistrements." },
            },
            {
              heading: "Importer avec le module csv",
              paragraphs: [
                "Le module csv de la bibliothèque standard lit les fichiers CSV. On ouvre le fichier avec with open('eleves.csv', encoding='utf-8', newline='') as f: ; le bloc with garantit que le fichier sera fermé à la fin, même en cas d'erreur, et l'encodage utf-8 permet de lire correctement les lettres accentuées. On crée ensuite un lecteur : lecteur = csv.DictReader(f, delimiter=';').",
                "csv.DictReader utilise la première ligne comme liste des descripteurs et fournit chaque ligne suivante sous la forme d'un dictionnaire. On construit la table par compréhension, dans le bloc with : table = [dict(ligne) for ligne in lecteur]. Si le fichier n'a pas de ligne d'en-tête, ou si l'on préfère des listes, csv.reader(f, delimiter=';') fournit chaque ligne comme une liste de chaînes, en-tête compris.",
              ],
              box: { label: "Formule", text: "import csv ; with open('eleves.csv', encoding='utf-8', newline='') as f: table = [dict(ligne) for ligne in csv.DictReader(f, delimiter=';')]. Chaque élément de table est un dictionnaire." },
            },
            {
              heading: "Convertir les types et vérifier la table",
              paragraphs: [
                "Un fichier CSV ne contient que du texte : toutes les valeurs lues sont des chaînes. Après l'import, table[0]['age'] vaut '16' et non 16, et la somme des âges provoquerait une erreur, ou une concaténation de chaînes. Il faut donc convertir chaque champ numérique : for ligne in table: ligne['age'] = int(ligne['age']). Pour un nombre décimal écrit avec une virgule, comme '14,5', float('14,5') provoque une ValueError : on remplace d'abord la virgule, float(s.replace(',', '.')).",
                "Après l'import, on vérifie que la table est conforme : nombre d'enregistrements attendu (len(table)), présence de tous les descripteurs, absence de champs vides, valeurs dans leur domaine. Sans le module csv, on peut aussi lire le fichier ligne par ligne : ligne.strip().split(';') supprime le saut de ligne final puis découpe la ligne selon le séparateur. Cette méthode simple échoue toutefois quand une valeur contient elle-même le séparateur entre guillemets, cas que le module csv gère correctement.",
              ],
              box: { label: "À retenir", text: "Toutes les valeurs lues dans un CSV sont des chaînes : convertissez avec int() ou float() avant tout calcul, après avoir remplacé une éventuelle virgule décimale par un point." },
            },
          ],
          keyPoints: [
            "Une table est formée d'enregistrements (lignes) qui partagent les mêmes descripteurs (colonnes).",
            "Un fichier CSV est un fichier texte : un enregistrement par ligne, un séparateur (virgule ou point-virgule), les descripteurs en première ligne.",
            "On représente une table par une liste de dictionnaires : table[i]['descripteur'].",
            "csv.DictReader(f, delimiter=';') fournit chaque ligne sous forme de dictionnaire ; le bloc with ferme le fichier automatiquement.",
            "Toutes les valeurs lues sont des chaînes : il faut les convertir avec int() ou float().",
          ],
          example: {
            statement: "Le fichier eleves.csv contient les lignes « nom;age;ville », « Lina;16;Lyon », « Hugo;17;Lille » et « Sara;16;Nice ». Écrire le programme qui l'importe sous forme d'une liste de dictionnaires, avec l'âge converti en entier. Donner ensuite len(table), table[1]['ville'] et la moyenne des âges.",
            solution: [
              "On importe le module : import csv, puis on crée une table vide : table = [].",
              "Ouverture et lecture : with open('eleves.csv', encoding='utf-8', newline='') as f: lecteur = csv.DictReader(f, delimiter=';') ; for ligne in lecteur: ligne['age'] = int(ligne['age']) ; table.append(ligne).",
              "La table obtenue est [{'nom': 'Lina', 'age': 16, 'ville': 'Lyon'}, {'nom': 'Hugo', 'age': 17, 'ville': 'Lille'}, {'nom': 'Sara', 'age': 16, 'ville': 'Nice'}].",
              "La ligne d'en-tête a servi de descripteurs : len(table) vaut 3 et table[1]['ville'] vaut 'Lille'.",
              "Moyenne des âges : sum([l['age'] for l in table]) / len(table) = (16 + 17 + 16) / 3 = 49 / 3 ≈ 16.33. Ce calcul n'est possible que grâce à la conversion en entiers.",
              "Réponse : 3 enregistrements, table[1]['ville'] = 'Lille', âge moyen d'environ 16,33 ans.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le fichier pays.csv contient les lignes « pays;capitale;continent », « France;Paris;Europe », « Japon;Tokyo;Asie » et « Pérou;Lima;Amérique ». a) Quels sont les descripteurs et le séparateur ? b) Combien la table compte-t-elle d'enregistrements ? c) Après un import avec csv.DictReader dans une liste table, que vaut table[1]['capitale'] ? d) Après un import avec csv.reader dans une liste lignes (en-tête compris), que vaut lignes[2][0] ?",
              hint: "DictReader utilise l'en-tête comme clés et ne le place pas dans la table ; csv.reader le garde comme première ligne.",
              solution: [
                "a) Les descripteurs sont pays, capitale et continent ; le séparateur est le point-virgule.",
                "b) Trois lignes de données suivent l'en-tête : la table compte 3 enregistrements.",
                "c) Avec DictReader, table[0] est la France et table[1] le Japon : table[1]['capitale'] vaut 'Tokyo'.",
                "d) Avec csv.reader, lignes[0] est l'en-tête, lignes[1] la France et lignes[2] le Japon : lignes[2][0] vaut 'Japon'.",
                "Résultat : 3 descripteurs, 3 enregistrements, 'Tokyo' et 'Japon'.",
              ],
            },
            {
              level: 2,
              statement: "Le fichier mesures.csv (données fictives) contient les lignes « nom;taille;masse », « Ana;1.62;55 », « Bilal;1.78;70 » et « Chloé;1.70;61 ». Il est importé avec csv.DictReader dans une liste table. a) Que vaut table[0]['masse'] + table[1]['masse'] ? b) Écrire la boucle qui convertit la taille en flottant et la masse en entier. c) Calculer ensuite la taille moyenne et la masse moyenne.",
              hint: "Avant conversion, les valeurs sont des chaînes, et + entre deux chaînes les met bout à bout.",
              solution: [
                "a) Les valeurs sont des chaînes : '55' + '70' vaut '5570', une concaténation et non une addition.",
                "b) for ligne in table: ligne['taille'] = float(ligne['taille']) ; ligne['masse'] = int(ligne['masse']).",
                "c) Taille moyenne : (1.62 + 1.78 + 1.70) / 3 = 5.10 / 3 ≈ 1.70 m (Python peut afficher 1.7000000000000002, à cause de l'arrondi des flottants).",
                "Masse moyenne : (55 + 70 + 61) / 3 = 186 / 3 = 62.0 kg.",
                "Résultat : '5570' avant conversion ; après conversion, taille moyenne d'environ 1,70 m et masse moyenne de 62 kg.",
              ],
            },
            {
              level: 3,
              statement: "On veut importer un fichier CSV sans le module csv. On propose : def lire_csv(nom, sep): with open(nom, encoding='utf-8') as f: lignes = f.readlines(). Après le with : descripteurs = lignes[0].strip().split(sep) ; table = [] ; for i in range(1, len(lignes)): valeurs = lignes[i].strip().split(sep) ; assert len(valeurs) == len(descripteurs), 'ligne ' + str(i) + ' incomplète' ; table.append({descripteurs[j]: valeurs[j] for j in range(len(descripteurs))}). Après la boucle : return table. 1. À quoi sert strip() ? Que deviendrait le dernier descripteur sans lui ? 2. Que renvoie lire_csv pour un fichier dont les lignes sont « nom;age », « Lina;16 » et « Hugo;17 », avec sep = ';' ? 3. On ajoute une quatrième ligne « Dina ». Que se passe-t-il ? 4. Citer une limite de cette fonction par rapport au module csv.",
              hint: "readlines() renvoie chaque ligne du fichier avec son caractère de fin de ligne '\\n'. Suivez la valeur de i pour la question 3.",
              solution: [
                "1. strip() supprime les espaces et le saut de ligne '\\n' en fin de ligne. Sans lui, le dernier descripteur serait 'age\\n' au lieu de 'age', et table[0]['age'] provoquerait une KeyError.",
                "2. descripteurs vaut ['nom', 'age']. Pour i = 1, valeurs = ['Lina', '16'] ; pour i = 2, valeurs = ['Hugo', '17'].",
                "La fonction renvoie [{'nom': 'Lina', 'age': '16'}, {'nom': 'Hugo', 'age': '17'}] ; les âges restent des chaînes.",
                "3. Pour i = 3, valeurs = ['Dina'] contient 1 valeur au lieu de 2 : l'assertion est fausse et l'import s'arrête sur une AssertionError avec le message « ligne 3 incomplète ». C'est un test de cohérence.",
                "4. Si une valeur contient le séparateur (par exemple un champ entre guillemets comme « Paris; France »), split la coupe en deux, alors que le module csv reconnaît les champs entre guillemets. La fonction ne convertit pas non plus les types.",
                "Résultat : une table de deux dictionnaires, une erreur explicite pour la ligne incomplète, et une limite sur les champs contenant le séparateur.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'import d'un fichier CSV dans une table (la liste table = [] a été créée au début).",
            items: [
              "import csv",
              "with open('eleves.csv', encoding='utf-8', newline='') as f:",
              "lecteur = csv.DictReader(f, delimiter=';')",
              "for ligne in lecteur:",
              "ligne['age'] = int(ligne['age']) puis table.append(ligne)",
              "Après la fermeture du fichier : print(len(table))",
            ],
          },
          quiz: [
            { q: "Que contient en général la première ligne d'un fichier CSV ?", options: ["Les descripteurs (noms des colonnes)", "Le premier enregistrement de la table", "Le nombre de lignes du fichier", "Le nom du fichier et sa date de création"], answer: 0, why: "L'en-tête donne les noms des colonnes ; csv.DictReader s'en sert comme clés." },
            { q: "Après un import avec csv.DictReader, de quel type est la valeur '16' lue dans la colonne age ?", options: ["int", "float", "bool", "str"], answer: 3, why: "Un fichier CSV ne contient que du texte : toute valeur lue est une chaîne, à convertir." },
            { q: "Que produit float('12,5') en Python ?", options: ["12.5", "125.0, la virgule étant ignorée", "Une erreur ValueError", "12"], answer: 2, why: "Python attend un point décimal : il faut d'abord remplacer la virgule par un point." },
            { q: "La table est une liste de dictionnaires. Comment lire la ville du troisième enregistrement ?", options: ["table[2]['ville']", "table[3]['ville']", "table['ville'][2]", "table[2][ville]"], answer: 0, why: "Le troisième enregistrement a l'indice 2, puis on lit le descripteur 'ville' (une chaîne, entre guillemets)." },
            { q: "Pourquoi ouvrir le fichier avec un bloc with ?", options: ["Pour lire le fichier plus vite", "Pour convertir automatiquement les nombres lus", "Pour choisir le séparateur", "Pour fermer le fichier automatiquement"], answer: 3, why: "À la sortie du bloc with, le fichier est fermé, même si une erreur s'est produite." },
          ],
          trap: "Oublier que toutes les valeurs lues dans un fichier CSV sont des chaînes : additionner des âges non convertis met les chaînes bout à bout ('16' + '17' vaut '1617') ou provoque une TypeError. Autre erreur : se tromper de séparateur (virgule au lieu de point-virgule), ce qui donne une seule colonne.",
          method: "Après chaque import, affichez len(table) et table[0] : vous vérifiez d'un coup d'œil le nombre d'enregistrements, les noms des descripteurs, le séparateur et le type des valeurs, avant d'écrire le moindre calcul.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'recherche-selection',
          title: 'Rechercher et sélectionner dans une table',
          minutes: 30,
          objectives: [
            "Rechercher les lignes d'une table vérifiant des critères exprimés en logique propositionnelle.",
            "Sélectionner des lignes et des colonnes d'une table par compréhension.",
            "Calculer un effectif ou une moyenne sur une sélection.",
            "Rechercher des doublons et effectuer des tests de cohérence sur une table.",
          ],
          course: [
            {
              heading: "Rechercher un enregistrement",
              paragraphs: [
                "Dans toute cette leçon, la table est une liste de dictionnaires. Exemple (données fictives) : eleves = [{'nom': 'Ali', 'age': 16, 'ville': 'Lyon', 'note': 13.5}, {'nom': 'Béa', 'age': 17, 'ville': 'Lille', 'note': 9.0}, {'nom': 'Chen', 'age': 16, 'ville': 'Lille', 'note': 15.0}, {'nom': 'Dora', 'age': 15, 'ville': 'Lyon', 'note': 11.0}, {'nom': 'Eli', 'age': 17, 'ville': 'Nice', 'note': 16.5}].",
                "Rechercher un enregistrement, c'est parcourir la table jusqu'à trouver une ligne qui vérifie le critère. def chercher(table, nom): for l in table: if l['nom'] == nom: return l. Après la boucle : return None. Le return placé dans la boucle arrête la recherche dès la première ligne trouvée ; si aucune ligne ne convient, la fonction renvoie None, valeur qu'il faut tester avant de l'utiliser. chercher(eleves, 'Chen') renvoie le dictionnaire de Chen, et chercher(eleves, 'Zoé') renvoie None.",
              ],
            },
            {
              heading: "Sélectionner des lignes selon des critères",
              paragraphs: [
                "Sélectionner, c'est construire la nouvelle table des lignes qui vérifient un critère. La compréhension s'y prête parfaitement : [l for l in eleves if l['ville'] == 'Lyon'] renvoie les lignes d'Ali et de Dora. Le critère est une expression booléenne, que l'on peut construire avec les opérateurs logiques and, or et not, comme en logique propositionnelle.",
                "Par exemple, l['age'] >= 16 and l['ville'] != 'Lyon' sélectionne les élèves d'au moins 16 ans qui n'habitent pas Lyon (Béa, Chen, Eli). Avec plusieurs opérateurs, les parenthèses sont indispensables pour dire ce que l'on veut : l['age'] >= 16 and (l['ville'] == 'Lyon' or l['ville'] == 'Lille') n'a pas le même sens sans parenthèses, car and est prioritaire sur or. Les lois de De Morgan aident à écrire une négation : not (A and B) équivaut à (not A) or (not B), et not (A or B) à (not A) and (not B).",
              ],
              box: { label: "Règle", text: "Sélection : [l for l in table if critere]. Le critère combine des comparaisons avec and, or, not ; and est prioritaire sur or, d'où l'usage des parenthèses. De Morgan : not (A and B) ⇔ not A or not B." },
            },
            {
              heading: "Projeter et agréger",
              paragraphs: [
                "Une projection ne garde que certaines colonnes : [l['nom'] for l in eleves] donne la liste des noms, et [(l['nom'], l['note']) for l in eleves] la liste des couples (nom, note). On combine souvent sélection et projection : [l['nom'] for l in eleves if l['note'] >= 12] vaut ['Ali', 'Chen', 'Eli'].",
                "On calcule ensuite des valeurs agrégées sur la sélection : l'effectif avec len(selection), une somme avec sum([l['note'] for l in selection]), une moyenne en divisant cette somme par l'effectif (en vérifiant que la sélection n'est pas vide), ou un maximum avec max. Par exemple, la note moyenne des élèves de Lille est (9.0 + 15.0) / 2 = 12.0.",
              ],
              box: { label: "Repère", text: "Sélection : on garde des lignes. Projection : on garde des colonnes. Agrégation : on calcule un effectif, une somme, une moyenne ou un maximum sur la sélection." },
            },
            {
              heading: "Doublons et tests de cohérence",
              paragraphs: [
                "Une table réelle contient souvent des erreurs : un même enregistrement saisi deux fois (doublon), une valeur hors de son domaine (une note de 21, un âge négatif), un champ vide. Pour détecter les doublons, on compte les apparitions de chaque identifiant à l'aide d'un dictionnaire, puis on garde ceux qui apparaissent plus d'une fois. Pour vérifier la cohérence, on sélectionne les lignes qui ne respectent pas le domaine : [l for l in table if not (0 <= l['note'] <= 20)].",
                "Ces tests se font avant tout calcul, car une seule valeur aberrante fausse une moyenne et un doublon compte deux fois le même élève. Un descripteur qui identifie chaque ligne de façon unique (un numéro d'élève, par exemple) facilite ces vérifications : deux lignes portant le même identifiant signalent un doublon ou une erreur de saisie.",
              ],
              box: { label: "À retenir", text: "Avant d'exploiter une table : chercher les doublons (identifiants répétés) et les valeurs hors domaine (tests de cohérence), puis corriger ou écarter les lignes fautives." },
            },
          ],
          keyPoints: [
            "Rechercher : parcourir la table et renvoyer la première ligne qui convient, ou None si aucune ne convient.",
            "Sélectionner : [l for l in table if critere], le critère étant construit avec and, or, not.",
            "and est prioritaire sur or : utilisez des parenthèses ; not (A and B) équivaut à not A or not B.",
            "Projeter : ne garder que certaines colonnes, par exemple [l['nom'] for l in table].",
            "Avant tout calcul, rechercher les doublons et tester la cohérence des valeurs avec leur domaine.",
          ],
          example: {
            statement: "Avec la table eleves du cours (Ali, 16 ans, Lyon, 13.5 ; Béa, 17 ans, Lille, 9.0 ; Chen, 16 ans, Lille, 15.0 ; Dora, 15 ans, Lyon, 11.0 ; Eli, 17 ans, Nice, 16.5), obtenir la liste des noms des élèves d'au moins 16 ans habitant Lyon ou Lille, puis la note moyenne de ces élèves.",
            solution: [
              "Critère : l['age'] >= 16 and (l['ville'] == 'Lyon' or l['ville'] == 'Lille'). Les parenthèses sont nécessaires, car and est prioritaire sur or.",
              "Sélection : selection = [l for l in eleves if l['age'] >= 16 and (l['ville'] == 'Lyon' or l['ville'] == 'Lille')].",
              "Examen des lignes : Ali (16, Lyon) oui ; Béa (17, Lille) oui ; Chen (16, Lille) oui ; Dora a 15 ans, non ; Eli habite Nice, non.",
              "Projection : [l['nom'] for l in selection] vaut ['Ali', 'Béa', 'Chen'].",
              "Moyenne : sum([l['note'] for l in selection]) / len(selection) = (13.5 + 9.0 + 15.0) / 3 = 37.5 / 3 = 12.5.",
              "Réponse : ['Ali', 'Béa', 'Chen'], avec une note moyenne de 12.5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On reprend la table eleves du cours (Ali, 16 ans, Lyon, 13.5 ; Béa, 17 ans, Lille, 9.0 ; Chen, 16 ans, Lille, 15.0 ; Dora, 15 ans, Lyon, 11.0 ; Eli, 17 ans, Nice, 16.5). a) Que vaut [l['nom'] for l in eleves if l['note'] >= 12] ? b) Écrire une expression qui donne le nombre d'élèves habitant Lyon, et donner sa valeur. c) Écrire la sélection des élèves de 17 ans ayant une note strictement inférieure à 10, et donner les noms obtenus.",
              hint: "Examinez les cinq lignes une par une en évaluant le critère.",
              solution: [
                "a) Notes d'au moins 12 : Ali (13.5), Chen (15.0), Eli (16.5). Le résultat est ['Ali', 'Chen', 'Eli'].",
                "b) len([l for l in eleves if l['ville'] == 'Lyon']) vaut 2 (Ali et Dora).",
                "c) [l for l in eleves if l['age'] == 17 and l['note'] < 10] : Béa (17 ans, 9.0) convient ; Eli a 17 ans mais 16.5.",
                "Résultat : ['Ali', 'Chen', 'Eli'], 2 élèves à Lyon, et seulement Béa pour la question c.",
              ],
            },
            {
              level: 2,
              statement: "Avec la même table eleves : a) Écrire la fonction chercher(table, nom) qui renvoie l'enregistrement de l'élève nommé nom, ou None s'il n'existe pas. Que renvoie chercher(eleves, 'Dora')['note'] ? b) Écrire une fonction moyenne_ville(table, ville) qui renvoie la note moyenne des élèves d'une ville, ou None si aucun élève n'y habite. Calculer moyenne_ville(eleves, 'Lille'), moyenne_ville(eleves, 'Nice') et moyenne_ville(eleves, 'Paris').",
              hint: "Pour la moyenne, construisez d'abord la liste des notes de la ville, puis traitez le cas où cette liste est vide avant de diviser.",
              solution: [
                "a) def chercher(table, nom): for l in table: if l['nom'] == nom: return l. Après la boucle : return None.",
                "chercher(eleves, 'Dora') renvoie le dictionnaire de Dora, donc chercher(eleves, 'Dora')['note'] vaut 11.0.",
                "b) def moyenne_ville(table, ville): notes = [l['note'] for l in table if l['ville'] == ville] ; if len(notes) == 0: return None ; return sum(notes) / len(notes).",
                "Lille : (9.0 + 15.0) / 2 = 12.0. Nice : une seule élève, Eli, donc 16.5.",
                "Paris : aucune ligne, la liste est vide et la fonction renvoie None au lieu de provoquer une division par zéro.",
                "Résultat : 11.0 ; puis 12.0, 16.5 et None.",
              ],
            },
            {
              level: 3,
              statement: "Une table d'inscriptions (données fictives) contient : [{'id': 101, 'nom': 'Ali', 'note': 13.5}, {'id': 102, 'nom': 'Béa', 'note': 21.0}, {'id': 101, 'nom': 'Ali', 'note': 13.5}, {'id': 103, 'nom': 'Chen', 'note': -1.0}, {'id': 104, 'nom': 'Dora', 'note': 11.0}]. 1. Écrire une fonction doublons(table) qui renvoie la liste des identifiants présents plusieurs fois, et donner son résultat. 2. Écrire une fonction incoherentes(table) qui renvoie la liste des identifiants dont la note n'est pas comprise entre 0 et 20, et donner son résultat. 3. Réécrire le critère not (0 <= l['note'] <= 20) sans not. 4. On supprime les doublons (en gardant une ligne par identifiant) et les lignes incohérentes. Quelle est la note moyenne de la table nettoyée ?",
              hint: "Pour les doublons, comptez les identifiants dans un dictionnaire, comme on compte des lettres. Pour la question 3, appliquez une loi de De Morgan à (0 <= note) and (note <= 20).",
              solution: [
                "1. def doublons(table): compte = {} ; for l in table: if l['id'] in compte: compte[l['id']] = compte[l['id']] + 1 ; else: compte[l['id']] = 1. Après la boucle : return [i for i, n in compte.items() if n > 1].",
                "compte vaut {101: 2, 102: 1, 103: 1, 104: 1}, donc doublons renvoie [101].",
                "2. def incoherentes(table): return [l['id'] for l in table if not (0 <= l['note'] <= 20)]. La note 21.0 (id 102) et la note -1.0 (id 103) sont hors domaine : le résultat est [102, 103].",
                "3. not (0 <= note and note <= 20) équivaut à not (0 <= note) or not (note <= 20), c'est-à-dire l['note'] < 0 or l['note'] > 20.",
                "4. Il reste une ligne pour Ali (101, 13.5) et la ligne de Dora (104, 11.0) : moyenne (13.5 + 11.0) / 2 = 24.5 / 2 = 12.25.",
                "Résultat : doublons [101], incohérences [102, 103], moyenne de la table nettoyée 12.25 (sans nettoyage, on aurait obtenu (13.5 + 21 + 13.5 - 1 + 11) / 5 = 58 / 5 = 11.6, une valeur faussée).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque critère, exprimé en français, à l'expression Python qui le traduit (l désigne une ligne de la table).",
            pairs: [
              { left: "Les élèves de Lyon", right: "l['ville'] == 'Lyon'" },
              { left: "Au moins 16 ans, sans habiter Lyon", right: "l['age'] >= 16 and l['ville'] != 'Lyon'" },
              { left: "Les élèves de Lyon ou de Nice", right: "l['ville'] == 'Lyon' or l['ville'] == 'Nice'" },
              { left: "Une note hors de l'intervalle [0, 20]", right: "l['note'] < 0 or l['note'] > 20" },
              { left: "Ni de Lille, ni âgé de 15 ans", right: "not (l['ville'] == 'Lille' or l['age'] == 15)" },
            ],
          },
          quiz: [
            { q: "Avec t = [{'nom': 'Ali', 'age': 16}, {'nom': 'Béa', 'age': 17}, {'nom': 'Chen', 'age': 18}], que vaut [l['nom'] for l in t if l['age'] > 16] ?", options: ["['Béa', 'Chen']", "['Ali', 'Béa', 'Chen']", "['Chen']", "[17, 18]"], answer: 0, why: "Béa (17) et Chen (18) ont strictement plus de 16 ans ; la projection garde leurs noms." },
            { q: "À quelle expression not (A and B) est-elle équivalente ?", options: ["not A and not B", "A or B", "not A or B", "not A or not B"], answer: 3, why: "C'est une loi de De Morgan : la négation d'un et est le ou des négations." },
            { q: "Qu'est-ce qu'une projection sur une table ?", options: ["Ne garder que certaines lignes de la table", "Ne garder que certaines colonnes", "Trier la table", "Compter les lignes"], answer: 1, why: "La projection garde des colonnes (descripteurs) ; la sélection garde des lignes." },
            { q: "Avec def chercher(table, nom): for l in table: if l['nom'] == nom: return l (puis return None après la boucle), que renvoie chercher(t, 'Zoé') si Zoé n'est pas dans t ?", options: ["None", "Une erreur KeyError", "La dernière ligne de la table", "Une ligne vide {}"], answer: 0, why: "Aucune ligne ne convient : la boucle se termine et la fonction atteint return None." },
            { q: "Quel est l'objectif d'un test de cohérence sur une table ?", options: ["Trier la table selon une colonne", "Ajouter des lignes manquantes au hasard", "Repérer les valeurs impossibles ou les doublons", "Accélérer les recherches dans la table plus tard"], answer: 2, why: "On vérifie que les valeurs respectent leur domaine et que les enregistrements ne sont pas répétés." },
          ],
          trap: "Oublier les parenthèses dans un critère qui mélange and et or : l['age'] >= 16 and l['ville'] == 'Lyon' or l['ville'] == 'Lille' sélectionne aussi les élèves de Lille de moins de 16 ans, car and est évalué avant or.",
          method: "Écrivez d'abord le critère en français, découpez-le en conditions élémentaires reliées par et, ou, non, puis traduisez chaque condition ; vérifiez enfin la sélection à la main sur trois ou quatre lignes, dont une qui ne doit pas être retenue.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'trier-fusionner',
          title: 'Trier une table et fusionner deux tables',
          minutes: 35,
          objectives: [
            "Trier une table suivant une colonne, dans l'ordre croissant ou décroissant.",
            "Trier une table selon plusieurs critères.",
            "Construire une nouvelle table en combinant les données de deux tables.",
            "Identifier le domaine de valeurs d'une colonne commune avant une fusion.",
          ],
          course: [
            {
              heading: "Trier une table suivant une colonne",
              paragraphs: [
                "Trier une table, c'est ranger ses enregistrements selon les valeurs d'un descripteur. On utilise la fonction de tri intégrée à Python. sorted(table, key=cle) renvoie une nouvelle liste triée, sans modifier table ; le paramètre key reçoit une fonction qui, à chaque ligne, associe la valeur selon laquelle on trie. On peut la définir à part, def cle_note(l): return l['note'], puis écrire sorted(eleves, key=cle_note), ou l'écrire directement avec une fonction anonyme : sorted(eleves, key=lambda l: l['note']).",
                "Par défaut, le tri est croissant ; reverse=True donne l'ordre décroissant. La méthode table.sort(key=cle) trie la liste elle-même, sur place, et renvoie None : écrire table = table.sort(key=cle) fait donc perdre la table. Les chaînes sont triées dans l'ordre lexicographique des codes des caractères : les majuscules passent avant les minuscules, et les lettres accentuées après toutes les lettres non accentuées, de sorte que 'Émile' est rangé après 'Zoé'.",
              ],
              box: { label: "Formule", text: "sorted(table, key=lambda l: l['note'], reverse=True) : nouvelle table triée par note décroissante. table.sort(key=...) : tri sur place, renvoie None." },
            },
            {
              heading: "Trier selon plusieurs critères",
              paragraphs: [
                "Pour trier selon plusieurs critères, par exemple par ville puis, dans chaque ville, par note décroissante, on donne une clé qui renvoie un p-uplet : key=lambda l: (l['ville'], -l['note']). Les p-uplets sont comparés composante par composante : on compare d'abord les villes, et seulement en cas d'égalité les opposés des notes, ce qui range les notes dans l'ordre décroissant.",
                "Le tri de Python est stable : deux lignes dont les clés sont égales restent dans leur ordre de départ. On peut en profiter pour trier en deux passes, d'abord selon le critère secondaire, puis selon le critère principal. Ainsi, trier les élèves par nom, puis par âge, donne une table rangée par âge où les élèves de même âge sont dans l'ordre alphabétique.",
              ],
              box: { label: "À retenir", text: "Plusieurs critères : clé sous forme de p-uplet, (critère principal, critère secondaire). Le tri de Python est stable : à clé égale, l'ordre initial est conservé." },
            },
            {
              heading: "Fusionner deux tables",
              paragraphs: [
                "Fusionner, c'est construire une nouvelle table à partir de deux tables. Premier cas : les deux tables ont les mêmes descripteurs, par exemple les élèves de deux classes. On les réunit par concaténation, classe_a + classe_b, en vérifiant ensuite l'absence de doublons si certains élèves pouvaient figurer dans les deux tables.",
                "Second cas : les deux tables ont des descripteurs différents mais une colonne commune, par exemple une table eleves (nom, age, ville, note) et une table clubs (nom, club). La jointure associe chaque ligne de la première table aux lignes de la seconde qui ont la même valeur dans la colonne commune, et réunit leurs descripteurs : on obtient des lignes (nom, age, ville, note, club). Une ligne sans correspondance dans l'autre table n'apparaît pas dans le résultat.",
                "En Python : def jointure(t1, t2, cle): resultat = [] ; for a in t1: for b in t2: if a[cle] == b[cle]: ligne = dict(a) ; for d in b: ligne[d] = b[d] ; resultat.append(ligne). Après les boucles : return resultat. dict(a) crée une copie de la ligne, pour ne pas modifier t1 par effet de bord. Cette version compare chaque ligne de t1 à chaque ligne de t2 : len(t1) × len(t2) comparaisons.",
              ],
              box: { label: "Définition", text: "Jointure de deux tables sur une colonne commune : nouvelle table dont chaque ligne réunit une ligne de la première table et une ligne de la seconde ayant la même valeur dans cette colonne." },
            },
            {
              heading: "Le domaine de valeurs de la colonne commune",
              paragraphs: [
                "Une fusion n'a de sens que si la colonne commune a le même domaine de valeurs dans les deux tables : même type et même écriture. Si une table écrit le code d'un département sous forme d'entier, 69, et l'autre sous forme de chaîne, '69', le test 69 == '69' vaut False et aucune ligne ne se rejoint. De même, 'Lyon', 'LYON' et ' Lyon' sont trois chaînes différentes.",
                "Avant de fusionner, on vérifie donc les types et l'écriture des valeurs, et on les harmonise si nécessaire (conversion avec int() ou str(), passage en minuscules avec lower(), suppression des espaces avec strip()). Après la fusion, on contrôle le nombre de lignes obtenues : les lignes sans correspondance ont disparu, ce qui peut être voulu ou signaler une incohérence entre les deux tables.",
              ],
            },
          ],
          keyPoints: [
            "sorted(table, key=...) renvoie une nouvelle table triée ; table.sort(key=...) trie sur place et renvoie None.",
            "reverse=True donne l'ordre décroissant ; une clé p-uplet permet de trier selon plusieurs critères.",
            "Le tri de Python est stable : à clé égale, l'ordre initial est conservé.",
            "Deux tables de mêmes descripteurs se réunissent par concaténation ; deux tables ayant une colonne commune se combinent par jointure.",
            "La colonne commune doit avoir le même domaine de valeurs (type et écriture) dans les deux tables.",
          ],
          example: {
            statement: "Avec la table eleves (Ali, 16 ans, Lyon, 13.5 ; Béa, 17 ans, Lille, 9.0 ; Chen, 16 ans, Lille, 15.0 ; Dora, 15 ans, Lyon, 11.0 ; Eli, 17 ans, Nice, 16.5), écrire l'instruction qui produit le classement des élèves par note décroissante, puis donner les noms dans l'ordre obtenu et le nom du premier.",
            solution: [
              "On trie selon la colonne note : la clé est lambda l: l['note'].",
              "On veut l'ordre décroissant : classement = sorted(eleves, key=lambda l: l['note'], reverse=True). La table eleves n'est pas modifiée.",
              "Les notes sont 13.5, 9.0, 15.0, 11.0 et 16.5 ; rangées de la plus grande à la plus petite : 16.5, 15.0, 13.5, 11.0, 9.0.",
              "Projection des noms : [l['nom'] for l in classement] vaut ['Eli', 'Chen', 'Ali', 'Dora', 'Béa'].",
              "Réponse : le classement est Eli, Chen, Ali, Dora, Béa, et classement[0]['nom'] vaut 'Eli'.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec la même table eleves (Ali, 16 ans ; Béa, 17 ans ; Chen, 16 ans ; Dora, 15 ans ; Eli, 17 ans, dans cet ordre), donner la liste des noms dans l'ordre obtenu par sorted(eleves, key=lambda l: l['age']). Justifier l'ordre des élèves de même âge.",
              hint: "Rangez d'abord les âges dans l'ordre croissant, puis rappelez-vous que le tri de Python est stable.",
              solution: [
                "Âges : Dora 15 ; Ali et Chen 16 ; Béa et Eli 17.",
                "À âge égal, le tri stable conserve l'ordre de la table de départ : Ali avant Chen, Béa avant Eli.",
                "Résultat : ['Dora', 'Ali', 'Chen', 'Béa', 'Eli'].",
              ],
            },
            {
              level: 2,
              statement: "a) Avec la table eleves (Ali, Lyon, 13.5 ; Béa, Lille, 9.0 ; Chen, Lille, 15.0 ; Dora, Lyon, 11.0 ; Eli, Nice, 16.5), donner l'ordre des noms obtenu par sorted(eleves, key=lambda l: (l['ville'], -l['note'])). b) Un élève écrit eleves = eleves.sort(key=lambda l: l['nom']). Que contient eleves ensuite ? Corriger. c) Que renvoie sorted(['Zoé', 'Émile', 'Ali']) ?",
              hint: "La clé est un couple : on compare d'abord les villes, puis, à ville égale, les opposés des notes.",
              solution: [
                "a) Villes dans l'ordre alphabétique : Lille, Lyon, Nice. Lille : Chen (15.0) avant Béa (9.0), car -15.0 < -9.0. Lyon : Ali (13.5) avant Dora (11.0). Nice : Eli.",
                "L'ordre est donc ['Chen', 'Béa', 'Ali', 'Dora', 'Eli'].",
                "b) sort trie la liste sur place et renvoie None : eleves vaut None et la table est perdue. Correction : eleves.sort(key=lambda l: l['nom']) seul, ou eleves = sorted(eleves, key=lambda l: l['nom']).",
                "c) Le tri compare les codes des caractères : 'A' et 'Z' sont des majuscules non accentuées, alors que 'É' a un code plus grand que toutes les lettres non accentuées. Le résultat est ['Ali', 'Zoé', 'Émile'].",
                "Résultat : Chen, Béa, Ali, Dora, Eli ; None pour l'écriture fautive ; ['Ali', 'Zoé', 'Émile'].",
              ],
            },
            {
              level: 3,
              statement: "On dispose de la table eleves (Ali, 16 ans, Lyon, 13.5 ; Béa, 17 ans, Lille, 9.0 ; Chen, 16 ans, Lille, 15.0 ; Dora, 15 ans, Lyon, 11.0 ; Eli, 17 ans, Nice, 16.5) et de la table clubs = [{'nom': 'Ali', 'club': 'échecs'}, {'nom': 'Chen', 'club': 'robotique'}, {'nom': 'Eli', 'club': 'théâtre'}, {'nom': 'Zoé', 'club': 'chorale'}] (données fictives). 1. Donner le résultat de jointure(eleves, clubs, 'nom') avec la fonction du cours. 2. Combien de comparaisons a[cle] == b[cle] sont effectuées ? 3. Quelles lignes des deux tables n'apparaissent pas dans le résultat, et pourquoi ? 4. Si la table clubs écrivait les noms en majuscules ('ALI', 'CHEN'...), que donnerait la jointure ? Proposer une solution. 5. Proposer une version qui ne parcourt t2 qu'une seule fois, à l'aide d'un dictionnaire.",
              hint: "Pour chaque élève, cherchez dans clubs une ligne portant le même nom. Pour la question 5, construisez d'abord un dictionnaire qui associe à chaque nom sa ligne de clubs.",
              solution: [
                "1. Ali, Chen et Eli ont une ligne dans clubs : le résultat est [{'nom': 'Ali', 'age': 16, 'ville': 'Lyon', 'note': 13.5, 'club': 'échecs'}, {'nom': 'Chen', 'age': 16, 'ville': 'Lille', 'note': 15.0, 'club': 'robotique'}, {'nom': 'Eli', 'age': 17, 'ville': 'Nice', 'note': 16.5, 'club': 'théâtre'}].",
                "2. Chacune des 5 lignes de eleves est comparée aux 4 lignes de clubs : 5 × 4 = 20 comparaisons.",
                "3. Béa et Dora n'ont pas de club, et Zoé n'est pas dans la table eleves : ces lignes, sans correspondance, disparaissent du résultat.",
                "4. 'Ali' == 'ALI' vaut False : aucune ligne ne se rejoint et le résultat est vide. Il faut harmoniser le domaine de valeurs, par exemple en comparant a[cle].lower() == b[cle].lower().",
                "5. index = {b[cle]: b for b in t2} ; puis for a in t1: if a[cle] in index: ligne = dict(a) ; for d in index[a[cle]]: ligne[d] = index[a[cle]][d] ; resultat.append(ligne). Cette version suppose que chaque valeur de la colonne commune n'apparaît qu'une fois dans t2.",
                "Résultat : une table de 3 lignes (Ali, Chen, Eli) avec leur club, obtenue après 20 comparaisons dans la version du cours.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces chaînes dans l'ordre renvoyé par sorted(['banane', 'Cerise', 'abricot', 'Datte', 'éclair']).",
            items: [
              "Cerise",
              "Datte",
              "abricot",
              "banane",
              "éclair",
            ],
          },
          quiz: [
            { q: "Quelle différence y a-t-il entre sorted(t) et t.sort() ?", options: ["Aucune, ce sont deux écritures équivalentes", "sorted trie toujours par ordre décroissant", "t.sort() renvoie une copie triée et laisse t inchangée", "sorted crée une liste triée ; sort modifie t"], answer: 3, why: "sorted renvoie une nouvelle liste et ne touche pas à t ; t.sort() trie t sur place et renvoie None." },
            { q: "Que vaut u après t = [3, 1, 2] ; u = t.sort() ?", options: ["[1, 2, 3]", "[3, 1, 2]", "None", "[3, 2, 1]"], answer: 2, why: "La méthode sort trie t sur place et ne renvoie rien, c'est-à-dire None." },
            { q: "Quel paramètre de sorted donne l'ordre décroissant ?", options: ["reverse=True", "key=-1", "order='desc'", "decreasing=True"], answer: 0, why: "Le paramètre reverse=True inverse l'ordre du tri." },
            { q: "Lors d'une jointure, que deviennent les lignes de la première table sans correspondance dans la seconde ?", options: ["Elles sont ajoutées avec des valeurs vides", "Elles provoquent une erreur KeyError", "Elles sont placées à la fin du résultat", "Elles sont absentes du résultat"], answer: 3, why: "La jointure ne garde que les couples de lignes ayant la même valeur dans la colonne commune." },
            { q: "Que renvoie sorted(['b', 'A', 'a', 'B']) ?", options: ["['A', 'B', 'a', 'b']", "['a', 'A', 'b', 'B']", "['A', 'a', 'B', 'b']", "['b', 'a', 'B', 'A']"], answer: 0, why: "Les chaînes sont comparées par codes de caractères : toutes les majuscules passent avant les minuscules." },
          ],
          trap: "Écrire table = table.sort(...) : la méthode sort trie sur place et renvoie None, si bien que la table est perdue. Pour une fusion, l'erreur fréquente est de joindre deux colonnes dont les valeurs n'ont pas le même type ou la même écriture (69 et '69', 'Lyon' et 'LYON').",
          method: "Avant de trier ou de fusionner, écrivez sur un petit exemple de trois lignes le résultat attendu à la main ; comparez-le ensuite au résultat du programme, en vérifiant aussi le nombre de lignes obtenues.",
        },
      ],
    },
  ],
}
