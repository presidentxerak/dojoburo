import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'nsi-1re',
  chapters: [
    /* ================================================================== */
    /* ALGORITHMIQUE : PARCOURS ET TRIS                                     */
    /* ================================================================== */
    {
      id: 'parcours-tris',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'parcours-sequentiel',
          title: 'Parcours séquentiel : recherche, maximum, moyenne',
          minutes: 30,
          objectives: [
            "Écrire un algorithme de recherche d'une occurrence dans un tableau, par parcours séquentiel.",
            "Écrire un algorithme de recherche d'un extremum (maximum ou minimum) dans un tableau.",
            "Calculer une moyenne à l'aide d'un accumulateur.",
            "Justifier que le coût d'un parcours séquentiel est linéaire.",
          ],
          course: [
            {
              heading: "Parcourir un tableau, case par case",
              paragraphs: [
                "Parcourir séquentiellement un tableau, c'est examiner ses éléments un par un, du premier au dernier, dans l'ordre des indices. En Python, un tableau est représenté par une liste : t = [12, 7, 15, 9]. Ses éléments sont repérés par leurs indices 0, 1, 2, 3, et len(t) donne le nombre d'éléments, appelé la taille du tableau, souvent notée n.",
                "Deux écritures de la boucle sont possibles. La boucle sur les indices, for i in range(len(t)), donne accès à la position i et à la valeur t[i] : elle est nécessaire quand on veut connaître la position d'un élément. La boucle sur les valeurs, for v in t, donne directement chaque valeur v : elle est plus lisible quand seule la valeur compte (somme, comptage, test d'appartenance).",
                "Un parcours peut être complet (on examine toutes les cases, par exemple pour une somme) ou interrompu dès qu'on a trouvé ce qu'on cherche (par exemple avec return dans une fonction de recherche). Dans les deux cas, on n'examine jamais une case plus d'une fois.",
              ],
              box: { label: "Définition", text: "Un parcours séquentiel d'un tableau de taille n examine les éléments un par un, dans l'ordre des indices de 0 à n - 1. Il peut s'arrêter avant la fin si la réponse est déjà connue." },
            },
            {
              heading: "Rechercher une occurrence",
              paragraphs: [
                "Pour savoir si une valeur x apparaît dans un tableau t, on compare x à chaque élément. Dès qu'un élément est égal à x, la réponse est oui ; si la boucle se termine sans l'avoir trouvé, la réponse est non. En Python : def appartient(t, x): for v in t: if v == x: return True. Puis, après la boucle (et non dans la boucle) : return False.",
                "Pour obtenir la position de la première occurrence, on parcourt les indices : def indice(t, x): for i in range(len(t)): if t[i] == x: return i. Après la boucle : return -1 (ou None), valeur conventionnelle qui signale l'absence. Pour compter les occurrences, on utilise un compteur initialisé à 0, augmenté de 1 à chaque élément égal à x, et renvoyé après un parcours complet.",
                "Python possède l'opérateur in (x in t) et la méthode t.index(x), mais ils effectuent eux aussi un parcours séquentiel : ils ne sont pas plus rapides en nombre de comparaisons. Savoir écrire ce parcours soi-même est un attendu du programme.",
              ],
              box: { label: "À retenir", text: "Le return False d'une recherche se place après la boucle : on ne peut conclure à l'absence qu'après avoir examiné toutes les cases." },
            },
            {
              heading: "Rechercher un extremum",
              paragraphs: [
                "Pour trouver le maximum d'un tableau non vide, on garde dans une variable m le plus grand élément rencontré jusqu'ici. On l'initialise avec le premier élément, m = t[0], puis on parcourt les éléments suivants : si un élément v est strictement plus grand que m, il devient le nouveau maximum provisoire (m = v). À la fin du parcours, m contient le maximum du tableau.",
                "Initialiser m à 0 est une erreur classique : si toutes les valeurs sont négatives, par exemple des températures [-3, -8, -1], la fonction renverrait 0, qui n'est même pas dans le tableau. Le minimum se cherche de la même façon, en remplaçant le test v > m par v < m. Si l'on veut la position du maximum, on mémorise son indice imax plutôt que sa valeur, et on compare t[i] à t[imax].",
              ],
              box: { label: "Règle", text: "Maximum d'un tableau non vide t : m = t[0], puis pour chaque élément v suivant, si v > m alors m = v. La précondition « t non vide » doit être précisée, car t[0] n'existe pas pour une liste vide." },
            },
            {
              heading: "Calculer une moyenne et mesurer le coût",
              paragraphs: [
                "Pour calculer une moyenne, on utilise un accumulateur : une variable s initialisée à 0 à laquelle on ajoute chaque élément. Après le parcours, la moyenne vaut s / len(t). Par exemple, pour t = [12, 8, 15, 10], s prend successivement les valeurs 12, 20, 35, 45, et la moyenne vaut 45 / 4 = 11,25. Le tableau doit être non vide, sinon la division par 0 provoque une erreur ZeroDivisionError.",
                "Le coût d'un algorithme mesure le nombre d'opérations élémentaires (comparaisons, additions, affectations) qu'il effectue en fonction de la taille n des données. Un parcours séquentiel effectue au plus une ou deux opérations par case, soit un nombre d'opérations proportionnel à n : on dit que son coût est linéaire. Si la taille du tableau double, le temps d'exécution double à peu près.",
                "Pour une recherche, le coût dépend des données. Dans le meilleur cas, la valeur cherchée est dans la première case : une seule comparaison. Dans le pire cas, la valeur est absente ou dans la dernière case : n comparaisons. On retient en général le pire cas, qui garantit une borne quelle que soit l'entrée.",
              ],
              box: { label: "À retenir", text: "Recherche d'occurrence, extremum, somme, moyenne : un seul parcours, donc un coût linéaire (de l'ordre de n opérations, noté O(n)) dans le pire cas." },
            },
          ],
          keyPoints: [
            "Un parcours séquentiel examine les cases une par une, de l'indice 0 à l'indice n - 1.",
            "for i in range(len(t)) donne les positions ; for v in t donne directement les valeurs.",
            "Recherche : return True dès que l'élément est trouvé, return False seulement après la boucle.",
            "Maximum : initialiser avec t[0] (jamais avec 0), puis remplacer dès qu'un élément est strictement plus grand.",
            "Moyenne : accumulateur s initialisé à 0, puis s / len(t), pour un tableau non vide.",
            "Le coût d'un parcours séquentiel est linéaire : n comparaisons au pire pour un tableau de taille n.",
          ],
          example: {
            statement: "Écrire une fonction indice_max(t) qui renvoie l'indice de la première occurrence du maximum d'un tableau non vide t, puis dérouler son exécution sur t = [12, 7, 15, 9, 15, 4] et compter les comparaisons.",
            solution: [
              "Idée : on mémorise l'indice imax du plus grand élément rencontré, en commençant par imax = 0.",
              "Code : def indice_max(t): imax = 0 ; for i in range(1, len(t)): if t[i] > t[imax]: imax = i. Après la boucle : return imax.",
              "i = 1 : 7 > 12 est faux, imax reste 0. i = 2 : 15 > 12 est vrai, imax devient 2.",
              "i = 3 : 9 > 15 est faux. i = 4 : 15 > 15 est faux (comparaison stricte), imax reste 2. i = 5 : 4 > 15 est faux.",
              "La comparaison stricte garantit qu'on garde la première occurrence du maximum ; avec >=, on obtiendrait la dernière (indice 4).",
              "Nombre de comparaisons : une par valeur de i, de 1 à 5, soit 5 = n - 1 comparaisons pour n = 6.",
              "Réponse : indice_max(t) renvoie 2, après 5 comparaisons.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire une fonction nb_occurrences(t, x) qui renvoie le nombre de fois où la valeur x apparaît dans le tableau t. Donner ensuite la valeur de nb_occurrences([3, 1, 3, 3, 2, 1], 3) et de nb_occurrences([3, 1, 3, 3, 2, 1], 5).",
              hint: "Utilisez un compteur initialisé à 0, et parcourez tout le tableau sans vous arrêter en chemin.",
              solution: [
                "On initialise un compteur c = 0, puis on parcourt toutes les valeurs v de t ; à chaque fois que v == x, on augmente c de 1.",
                "Code : def nb_occurrences(t, x): c = 0 ; for v in t: if v == x: c = c + 1. Après la boucle : return c.",
                "Pour x = 3 : les valeurs égales à 3 sont aux indices 0, 2 et 3, donc c vaut 3.",
                "Pour x = 5 : aucune valeur n'est égale à 5, le compteur reste à 0.",
                "Résultat : nb_occurrences([3, 1, 3, 3, 2, 1], 3) vaut 3 et nb_occurrences([3, 1, 3, 3, 2, 1], 5) vaut 0.",
              ],
            },
            {
              level: 2,
              statement: "Les notes d'un élève sont rangées dans t = [12, 8, 15, 10, 14, 7] (données fictives). 1. Écrire une fonction moyenne(t) pour un tableau non vide. 2. Écrire une fonction nb_au_dessus(t) qui renvoie le nombre de notes strictement supérieures à la moyenne. 3. Calculer les deux résultats pour t et préciser combien de parcours du tableau sont effectués.",
              hint: "La fonction nb_au_dessus peut appeler moyenne une seule fois, avant sa boucle, et ranger le résultat dans une variable.",
              solution: [
                "1. def moyenne(t): s = 0 ; for v in t: s = s + v. Après la boucle : return s / len(t).",
                "2. def nb_au_dessus(t): m = moyenne(t) ; c = 0 ; for v in t: if v > m: c = c + 1. Après la boucle : return c.",
                "3. Somme : 12 + 8 + 15 + 10 + 14 + 7 = 66, donc la moyenne vaut 66 / 6 = 11.",
                "Notes strictement supérieures à 11 : 12, 15 et 14, soit 3 notes (8, 10 et 7 sont inférieures).",
                "Parcours : un pour la moyenne, un pour le comptage, soit 2 parcours ; le coût reste linéaire (environ 2n opérations).",
                "Si l'on écrivait if v > moyenne(t) dans la boucle, la moyenne serait recalculée à chaque tour : n parcours de n cases, un coût quadratique inutile.",
                "Résultat : moyenne 11, et 3 notes au-dessus de la moyenne.",
              ],
            },
            {
              level: 3,
              statement: "Une station relève les températures de six matinées, en degrés Celsius : t = [-3, 2, -5, 0, 4, -1] (données fictives). 1. Expliquer pourquoi une fonction de maximum qui initialise sa variable à 0 renverrait un résultat faux pour le tableau [-3, -5, -1]. 2. Écrire une fonction extremes(t) qui renvoie le couple (minimum, maximum) d'un tableau non vide en un seul parcours. 3. Donner extremes(t) et l'amplitude thermique (maximum moins minimum). 4. Combien de comparaisons votre fonction effectue-t-elle pour un tableau de taille n ? Que devient approximativement le temps d'exécution si l'on traite un tableau dix fois plus grand ?",
              hint: "Initialisez le minimum et le maximum avec t[0], puis comparez chaque élément suivant aux deux valeurs provisoires.",
              solution: [
                "1. Avec m = 0 au départ, aucune valeur de [-3, -5, -1] n'est strictement supérieure à 0 : m reste à 0 et la fonction renvoie 0, valeur absente du tableau. Le maximum réel est -1.",
                "2. def extremes(t): mini = t[0] ; maxi = t[0] ; for v in t[1:]: if v < mini: mini = v ; if v > maxi: maxi = v. Après la boucle : return (mini, maxi). Les deux tests sont indépendants, au même niveau dans la boucle.",
                "3. Déroulé : départ mini = maxi = -3 ; 2 donne maxi = 2 ; -5 donne mini = -5 ; 0 ne change rien ; 4 donne maxi = 4 ; -1 ne change rien.",
                "extremes(t) vaut (-5, 4) et l'amplitude vaut 4 - (-5) = 9 degrés.",
                "4. Pour chacun des n - 1 éléments suivant le premier, on fait 2 comparaisons : 2(n - 1) comparaisons, soit 10 pour n = 6.",
                "Le coût est linéaire : pour un tableau dix fois plus grand, le temps d'exécution est environ multiplié par 10.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le parcours séquentiel d'un tableau.",
            statements: [
              { text: "Pour chercher le maximum d'un tableau, on peut toujours initialiser la variable à 0.", true: false, why: "Si toutes les valeurs sont négatives, le résultat serait 0, absent du tableau : on initialise avec t[0]." },
              { text: "Dans une fonction de recherche, return False doit être placé après la boucle.", true: true, why: "On ne peut conclure à l'absence qu'après avoir comparé x à tous les éléments." },
              { text: "L'expression x in t est plus rapide qu'un parcours séquentiel en nombre de comparaisons.", true: false, why: "Sur une liste, in effectue lui aussi un parcours séquentiel : n comparaisons au pire." },
              { text: "Si la taille d'un tableau double, le temps d'un parcours séquentiel double à peu près.", true: true, why: "Le coût est linéaire : le nombre d'opérations est proportionnel à n." },
              { text: "Une recherche séquentielle effectue toujours exactement n comparaisons.", true: false, why: "Elle peut s'arrêter dès que l'élément est trouvé : une seule comparaison dans le meilleur cas." },
              { text: "Le calcul d'une moyenne n'est possible que pour un tableau non vide.", true: true, why: "Pour un tableau vide, s / len(t) provoque une division par 0." },
            ],
          },
          quiz: [
            { q: "Que renvoie f([4, 9, 2, 9]) avec def f(t): m = t[0] ; for v in t: if v > m: m = v, puis return m après la boucle ?", options: ["4", "2", "9", "18"], answer: 2, why: "m passe de 4 à 9 ; ni 2 ni le second 9 ne sont strictement supérieurs à 9." },
            { q: "Pourquoi initialise-t-on le maximum avec t[0] plutôt qu'avec 0 ?", options: ["Pour obtenir un résultat juste même si toutes les valeurs sont négatives", "Parce que Python interdit d'affecter la valeur 0 à une variable avant une boucle for", "Pour que la boucle s'arrête automatiquement au premier élément strictement plus grand", "Parce que la valeur 0 est réservée aux tableaux vides dans toutes les fonctions Python"], answer: 0, why: "Avec 0, un tableau de valeurs toutes négatives donnerait 0, qui n'est pas dans le tableau." },
            { q: "Combien de comparaisons effectue au pire une recherche séquentielle dans un tableau de 500 éléments ?", options: ["1", "9", "250", "500"], answer: 3, why: "Dans le pire cas (valeur absente ou en dernière position), on compare x aux 500 éléments." },
            { q: "Quelle valeur renvoie une fonction moyenne correcte pour t = [12, 8, 15, 10] ?", options: ["11", "11,25", "45", "11,75"], answer: 1, why: "La somme vaut 45 et 45 / 4 = 11,25." },
            { q: "Quel est le coût d'un algorithme qui calcule la somme des éléments d'un tableau de taille n ?", options: ["Constant", "Quadratique", "Linéaire", "Logarithmique"], answer: 2, why: "On effectue une addition par case, soit n additions : le coût est proportionnel à n." },
          ],
          trap: "Placer le return False d'une recherche dans un else à l'intérieur de la boucle : la fonction s'arrête alors dès le premier élément différent de x, sans examiner les suivants. Autre erreur fréquente : initialiser un maximum à 0 au lieu de t[0].",
          method: "Avant de rendre une fonction de parcours, testez-la sur trois tableaux choisis : un où la réponse est au début, un où elle est à la fin, un où elle est absente (ou dont toutes les valeurs sont négatives pour un maximum). Ces cas limites révèlent presque toutes les erreurs.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'tri-par-selection',
          title: 'Le tri par sélection',
          minutes: 30,
          objectives: [
            "Décrire le principe du tri par sélection et dérouler l'algorithme sur un exemple.",
            "Écrire en Python un algorithme de tri par sélection.",
            "Décrire un invariant de boucle qui prouve la correction du tri par sélection.",
            "Montrer que le coût du tri par sélection est quadratique.",
          ],
          course: [
            {
              heading: "Le principe : sélectionner le plus petit",
              paragraphs: [
                "Trier un tableau, c'est réordonner ses éléments dans l'ordre croissant (ou décroissant). Le tri par sélection procède ainsi : on cherche le plus petit élément du tableau et on l'échange avec l'élément en position 0 ; on cherche ensuite le plus petit élément parmi ceux qui restent (positions 1 à n - 1) et on l'échange avec l'élément en position 1 ; et ainsi de suite.",
                "Analogie : pour ranger des copies par note croissante, on parcourt la pile pour trouver la plus faible note, on la pose en premier, puis on recommence avec les copies restantes. À chaque étape, la partie gauche du tableau est triée et définitive : ses éléments ne bougeront plus.",
                "Après n - 1 étapes, le tableau est trié : le dernier élément restant est forcément le plus grand. Le tri se fait en place, c'est-à-dire dans le tableau lui-même, sans en créer de copie.",
              ],
              box: { label: "Définition", text: "Tri par sélection : pour i allant de 0 à n - 2, on sélectionne le minimum de la partie t[i], t[i + 1], ..., t[n - 1], puis on l'échange avec t[i]." },
            },
            {
              heading: "L'algorithme en Python",
              paragraphs: [
                "Le code comporte deux boucles imbriquées. La boucle externe fixe la position i à remplir. La boucle interne cherche l'indice imin du minimum de la partie non triée : def tri_selection(t): n = len(t) ; for i in range(n - 1): imin = i ; for j in range(i + 1, n): if t[j] < t[imin]: imin = j. Puis, après la boucle interne mais toujours dans la boucle externe : t[i], t[imin] = t[imin], t[i].",
                "L'instruction t[i], t[imin] = t[imin], t[i] échange les deux valeurs en une seule ligne grâce à l'affectation multiple de Python. Sans elle, il faudrait une variable temporaire : tmp = t[i] ; t[i] = t[imin] ; t[imin] = tmp. La fonction ne renvoie rien : elle modifie la liste reçue en paramètre, car une liste Python est mutable.",
                "Déroulé sur t = [5, 2, 8, 1, 9, 3] : pour i = 0, le minimum est 1 (indice 3), on obtient [1, 2, 8, 5, 9, 3]. Pour i = 1, le minimum de la partie restante est 2, déjà en place. Pour i = 2, le minimum est 3 : [1, 2, 3, 5, 9, 8]. Pour i = 3, 5 est déjà en place. Pour i = 4, le minimum est 8 : [1, 2, 3, 5, 8, 9].",
              ],
            },
            {
              heading: "Pourquoi l'algorithme est correct : l'invariant",
              paragraphs: [
                "Un invariant de boucle est une propriété vraie avant le premier tour de boucle et qui reste vraie après chaque tour. Pour le tri par sélection, l'invariant est : « après le tour d'indice i, la partie t[0], ..., t[i] est triée dans l'ordre croissant et contient les i + 1 plus petits éléments du tableau ».",
                "Cet invariant est vrai au départ (partie vide). Il se conserve : au tour i, on place en position i le plus petit des éléments restants, qui est supérieur ou égal à tous ceux déjà placés et inférieur ou égal à tous ceux qui restent. À la fin du dernier tour (i = n - 2), les n - 1 premiers éléments sont triés et sont les plus petits ; le dernier est donc le plus grand, et tout le tableau est trié.",
              ],
              box: { label: "Propriété", text: "Invariant du tri par sélection : après le tour i, t[0..i] est trié et contient les i + 1 plus petites valeurs du tableau, rangées à leur place définitive." },
            },
            {
              heading: "Le coût : quadratique dans tous les cas",
              paragraphs: [
                "Comptons les comparaisons t[j] < t[imin]. Au tour i = 0, la boucle interne en fait n - 1 ; au tour i = 1, n - 2 ; ... ; au dernier tour, 1. Au total : (n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2 comparaisons. Pour n = 6, on obtient 15 comparaisons ; pour n = 1 000, 499 500.",
                "Ce nombre est de l'ordre de n² / 2 : on dit que le coût est quadratique (noté O(n²)). Si la taille du tableau est multipliée par 10, le nombre de comparaisons est multiplié par environ 100. Ce nombre ne dépend pas de l'ordre initial des données : même un tableau déjà trié demande n(n - 1) / 2 comparaisons. En revanche, le nombre d'échanges est faible : au plus n - 1.",
              ],
              box: { label: "Formule", text: "1 + 2 + ... + (n - 1) = n(n - 1) / 2. Le tri par sélection effectue toujours n(n - 1) / 2 comparaisons : coût quadratique, meilleur cas compris." },
            },
          ],
          keyPoints: [
            "Principe : à l'étape i, on cherche le minimum de t[i..n-1] et on l'échange avec t[i].",
            "Deux boucles imbriquées : la boucle externe fixe la place, la boucle interne cherche l'indice du minimum.",
            "Échange en Python : t[i], t[imin] = t[imin], t[i]. Le tri se fait en place, sans return.",
            "Invariant : après le tour i, t[0..i] est trié et contient les i + 1 plus petits éléments.",
            "Comparaisons : n(n - 1) / 2 dans tous les cas, soit un coût quadratique ; au plus n - 1 échanges.",
          ],
          example: {
            statement: "Dérouler le tri par sélection sur t = [7, 3, 9, 3, 1] en donnant l'état du tableau après chaque tour de la boucle externe, puis indiquer le nombre de comparaisons et le nombre d'échanges qui modifient réellement le tableau.",
            solution: [
              "n = 5, donc la boucle externe va de i = 0 à i = 3.",
              "i = 0 : le minimum de [7, 3, 9, 3, 1] est 1, à l'indice 4. Échange de t[0] et t[4] : [1, 3, 9, 3, 7].",
              "i = 1 : dans [3, 9, 3, 7], imin reste 1 (le second 3 n'est pas strictement plus petit). Échange de t[1] avec lui-même : [1, 3, 9, 3, 7], inchangé.",
              "i = 2 : dans [9, 3, 7], le minimum est 3, à l'indice 3. Échange : [1, 3, 3, 9, 7].",
              "i = 3 : dans [9, 7], le minimum est 7, à l'indice 4. Échange : [1, 3, 3, 7, 9].",
              "Comparaisons : 4 + 3 + 2 + 1 = 10 = 5 × 4 / 2. Échanges qui modifient le tableau : aux tours 0, 2 et 3, soit 3.",
              "Réponse : le tableau trié est [1, 3, 3, 7, 9], obtenu après 10 comparaisons et 3 échanges effectifs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dérouler le tri par sélection sur t = [4, 1, 3, 2] : donner l'état du tableau après chaque tour de la boucle externe et le nombre total de comparaisons.",
              hint: "À chaque tour i, cherchez le minimum uniquement parmi les cases d'indice i à 3, puis échangez-le avec la case i.",
              solution: [
                "i = 0 : le minimum de [4, 1, 3, 2] est 1 (indice 1). Échange de t[0] et t[1] : [1, 4, 3, 2].",
                "i = 1 : le minimum de [4, 3, 2] est 2 (indice 3). Échange de t[1] et t[3] : [1, 2, 3, 4].",
                "i = 2 : le minimum de [3, 4] est 3, déjà en place : [1, 2, 3, 4].",
                "Comparaisons : 3 + 2 + 1 = 6, ce qui correspond à n(n - 1) / 2 = 4 × 3 / 2.",
                "Résultat : [1, 2, 3, 4] après 3 tours et 6 comparaisons.",
              ],
            },
            {
              level: 2,
              statement: "1. Calculer le nombre de comparaisons effectuées par le tri par sélection pour n = 10, n = 100 et n = 1 000. 2. Par combien ce nombre est-il environ multiplié quand n est multiplié par 10 ? 3. Quelle modification de la fonction tri_selection permet de trier dans l'ordre décroissant ?",
              hint: "Utilisez la formule n(n - 1) / 2, puis comparez les résultats successifs entre eux.",
              solution: [
                "1. n = 10 : 10 × 9 / 2 = 45. n = 100 : 100 × 99 / 2 = 4 950. n = 1 000 : 1 000 × 999 / 2 = 499 500.",
                "2. De 45 à 4 950, le facteur est 110 ; de 4 950 à 499 500, il est environ 100,9. Le nombre de comparaisons est environ multiplié par 100 = 10², signe d'un coût quadratique.",
                "3. On cherche le maximum au lieu du minimum : il suffit de remplacer le test t[j] < t[imin] par t[j] > t[imin] (la variable gagnerait à être renommée imax).",
                "Résultat : 45, 4 950 et 499 500 comparaisons ; facteur environ 100 ; test inversé pour l'ordre décroissant.",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction suivante, à compléter : def tri_selection(t): n = len(t) ; for i in range(n - 1): imin = ... ; for j in range(..., n): if t[j] < t[imin]: imin = j. Puis, après la boucle interne : t[i], t[imin] = ... 1. Compléter les trois pointillés. 2. Énoncer l'invariant de la boucle externe et expliquer pourquoi il entraîne que le tableau est trié à la fin. 3. Un tableau de 2 000 éléments est trié par cette fonction en 0,4 s sur un ordinateur donné (données fictives). Estimer la durée pour 6 000 éléments. 4. Un élève affirme qu'un tableau déjà trié est traité beaucoup plus vite. A-t-il raison ?",
              hint: "Pour la question 3, demandez-vous par combien est multiplié n², puisque le coût est quadratique.",
              solution: [
                "1. imin = i ; for j in range(i + 1, n) ; t[i], t[imin] = t[imin], t[i].",
                "2. Invariant : après le tour i, t[0..i] est trié et contient les i + 1 plus petits éléments du tableau. Après le dernier tour (i = n - 2), t[0..n-2] contient les n - 1 plus petits éléments triés, donc t[n - 1] est le plus grand : tout le tableau est trié.",
                "3. n est multiplié par 3, donc le nombre de comparaisons (de l'ordre de n²) est multiplié par environ 3² = 9. Durée estimée : 0,4 × 9 = 3,6 s.",
                "4. Non : les boucles ne s'arrêtent jamais plus tôt, le tri par sélection effectue toujours n(n - 1) / 2 comparaisons. Seuls les échanges deviennent inutiles (chaque élément est échangé avec lui-même).",
                "Résultat : environ 3,6 s pour 6 000 éléments, et aucun gain notable sur un tableau déjà trié.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un tour du tri par sélection, à l'étape i.",
            items: [
              "Supposer provisoirement que le minimum est en position i (imin = i)",
              "Parcourir les cases d'indice i + 1 à n - 1",
              "Mettre à jour imin chaque fois qu'une case est strictement plus petite que t[imin]",
              "Échanger t[i] et t[imin]",
              "Passer à la position suivante, i + 1",
            ],
          },
          quiz: [
            { q: "Quel est l'état de [6, 4, 5, 1] après le premier tour du tri par sélection ?", options: ["[4, 6, 5, 1]", "[1, 4, 5, 6]", "[1, 6, 5, 4]", "[4, 5, 1, 6]"], answer: 1, why: "Le minimum 1 (indice 3) est échangé avec t[0] = 6 : on obtient [1, 4, 5, 6], déjà trié ici." },
            { q: "Combien de comparaisons le tri par sélection effectue-t-il sur un tableau de 8 éléments ?", options: ["8", "64", "56", "28"], answer: 3, why: "n(n - 1) / 2 = 8 × 7 / 2 = 28." },
            { q: "Quel est le coût du tri par sélection sur un tableau déjà trié ?", options: ["Quadratique", "Linéaire, car aucun échange n'est utile", "Constant", "Logarithmique"], answer: 0, why: "Les deux boucles sont parcourues entièrement quel que soit l'ordre initial : n(n - 1) / 2 comparaisons." },
            { q: "Que contient la partie t[0..i] après le tour i du tri par sélection ?", options: ["Les i + 1 premiers éléments du tableau initial, triés", "Les i + 1 plus grands éléments", "Les i + 1 plus petits éléments, triés", "Des éléments quelconques"], answer: 2, why: "C'est l'invariant : chaque tour place à sa position définitive le plus petit des éléments restants." },
            { q: "Combien d'échanges le tri par sélection fait-il au plus sur un tableau de taille n ?", options: ["n(n - 1) / 2", "n - 1", "n²", "2n"], answer: 1, why: "Un échange par tour de la boucle externe, qui compte n - 1 tours." },
          ],
          trap: "Chercher le minimum dans tout le tableau à chaque tour (boucle interne qui démarre à 0 au lieu de i + 1) : on ramène alors des éléments déjà placés et le tableau n'est pas trié. Autre erreur : échanger à l'intérieur de la boucle interne au lieu d'attendre la fin de la recherche du minimum.",
          method: "Pour dérouler un tri à la main, tracez un tableau avec une ligne par tour : l'indice i, l'indice du minimum trouvé, puis l'état du tableau après l'échange. Séparez d'un trait vertical la partie déjà triée : vous vérifiez ainsi l'invariant à chaque ligne.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'tri-par-insertion',
          title: 'Le tri par insertion',
          minutes: 30,
          objectives: [
            "Décrire le principe du tri par insertion et dérouler l'algorithme sur un exemple.",
            "Écrire en Python un algorithme de tri par insertion.",
            "Décrire un invariant de boucle qui prouve la correction du tri par insertion.",
            "Montrer que le coût du tri par insertion est quadratique dans le pire cas et linéaire dans le meilleur cas.",
          ],
          course: [
            {
              heading: "Le principe : insérer à sa place",
              paragraphs: [
                "Le tri par insertion imite la façon dont on trie des cartes à jouer dans sa main : on prend les cartes une par une, et on insère chaque nouvelle carte à sa place parmi celles déjà rangées, en décalant d'un cran vers la droite celles qui sont plus grandes.",
                "Sur un tableau t, on considère que la partie t[0] (un seul élément) est triée. On prend ensuite t[1] et on l'insère à sa place dans t[0..1] ; puis t[2], que l'on insère dans t[0..2] ; et ainsi de suite jusqu'à t[n - 1]. Contrairement au tri par sélection, la partie gauche est triée mais pas définitive : un élément plus petit arrivant plus tard peut encore la décaler.",
              ],
              box: { label: "Définition", text: "Tri par insertion : pour i allant de 1 à n - 1, on mémorise cle = t[i], on décale vers la droite les éléments de t[0..i-1] strictement plus grands que cle, puis on place cle dans la case libérée." },
            },
            {
              heading: "L'algorithme en Python",
              paragraphs: [
                "def tri_insertion(t): for i in range(1, len(t)): cle = t[i] ; j = i - 1 ; while j >= 0 and t[j] > cle: t[j + 1] = t[j] ; j = j - 1. Puis, après la boucle while (toujours dans la boucle for) : t[j + 1] = cle. Comme pour le tri par sélection, le tri se fait en place et la fonction ne renvoie rien.",
                "La variable cle est indispensable : le premier décalage écrase t[i]. La condition j >= 0 arrête le décalage quand on atteint le début du tableau ; elle est écrite en premier, car l'opérateur and n'évalue pas la seconde condition si la première est fausse (évaluation paresseuse). On ne lit donc jamais t[-1] : en Python, cette expression ne provoque pas d'erreur (elle désigne le dernier élément), ce qui rendrait une faute de logique silencieuse.",
                "Déroulé sur t = [5, 2, 4, 6, 1, 3] : i = 1, on insère 2 avant 5 : [2, 5, 4, 6, 1, 3]. i = 2, on insère 4 entre 2 et 5 : [2, 4, 5, 6, 1, 3]. i = 3, 6 reste en place. i = 4, on décale 6, 5, 4 et 2 pour placer 1 en tête : [1, 2, 4, 5, 6, 3]. i = 5, on décale 6, 5 et 4 pour placer 3 : [1, 2, 3, 4, 5, 6].",
              ],
            },
            {
              heading: "L'invariant de boucle",
              paragraphs: [
                "L'invariant du tri par insertion est : « au début du tour d'indice i, la partie t[0..i-1] est triée et contient exactement les éléments qui s'y trouvaient au départ ». Il est vrai pour i = 1, car une partie d'un seul élément est triée. Il se conserve, car le tour i insère t[i] à la bonne place dans une partie triée, ce qui donne une partie t[0..i] triée.",
                "À la sortie de la boucle, i a pris la valeur n - 1 au dernier tour, donc t[0..n-1], c'est-à-dire tout le tableau, est trié. La boucle while termine à chaque tour, car j diminue de 1 à chaque passage et la boucle s'arrête au plus tard quand j vaut -1.",
              ],
              box: { label: "Propriété", text: "Invariant du tri par insertion : avant le tour i, t[0..i-1] est trié (mais ses éléments ne sont pas forcément les plus petits du tableau)." },
            },
            {
              heading: "Le coût : meilleur cas et pire cas",
              paragraphs: [
                "Le nombre de comparaisons dépend de l'ordre initial. Dans le pire cas, le tableau est trié dans l'ordre décroissant : chaque élément doit remonter jusqu'au début, ce qui demande i comparaisons et i décalages au tour i. Total : 1 + 2 + ... + (n - 1) = n(n - 1) / 2. Le coût est quadratique.",
                "Dans le meilleur cas, le tableau est déjà trié : à chaque tour, la première comparaison t[i - 1] > cle est fausse, il n'y a aucun décalage. On fait n - 1 comparaisons : le coût est linéaire. Le tri par insertion est donc très efficace sur des données presque triées, ce qui le distingue du tri par sélection, toujours quadratique.",
              ],
              box: { label: "À retenir", text: "Tri par insertion : n(n - 1) / 2 comparaisons dans le pire cas (ordre décroissant), n - 1 dans le meilleur cas (déjà trié). Coût quadratique dans le pire cas." },
            },
          ],
          keyPoints: [
            "Principe : comme des cartes en main, on insère chaque élément à sa place dans la partie gauche déjà triée.",
            "On mémorise cle = t[i] avant de décaler, car le premier décalage écrase t[i].",
            "Condition de la boucle : while j >= 0 and t[j] > cle, avec j >= 0 écrit en premier.",
            "Invariant : avant le tour i, t[0..i-1] est trié.",
            "Pire cas (ordre décroissant) : n(n - 1) / 2 comparaisons, coût quadratique ; meilleur cas (déjà trié) : n - 1, coût linéaire.",
          ],
          example: {
            statement: "Dérouler le tri par insertion sur t = [8, 3, 5, 1] en donnant, à chaque tour, la valeur de cle, les décalages effectués et l'état du tableau. Compter les comparaisons t[j] > cle.",
            solution: [
              "i = 1, cle = 3 : 8 > 3, on décale 8 (j passe à -1, la boucle s'arrête sans autre comparaison). On place 3 en t[0] : [3, 8, 5, 1]. 1 comparaison.",
              "i = 2, cle = 5 : 8 > 5, on décale 8 ; 3 > 5 est faux, on s'arrête. On place 5 en t[1] : [3, 5, 8, 1]. 2 comparaisons.",
              "i = 3, cle = 1 : 8 > 1, 5 > 1 et 3 > 1, on décale les trois ; j vaut -1, on s'arrête. On place 1 en t[0] : [1, 3, 5, 8]. 3 comparaisons.",
              "Total : 1 + 2 + 3 = 6 comparaisons et 1 + 1 + 3 = 5 décalages.",
              "Réponse : le tableau trié est [1, 3, 5, 8], obtenu après 6 comparaisons.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dérouler le tri par insertion sur t = [3, 1, 2] en donnant l'état du tableau après chaque tour de la boucle for.",
              hint: "Au tour i, mémorisez cle = t[i] et comparez-la aux éléments situés à sa gauche, de droite à gauche.",
              solution: [
                "i = 1, cle = 1 : 3 > 1, on décale 3, puis on place 1 en t[0] : [1, 3, 2].",
                "i = 2, cle = 2 : 3 > 2, on décale 3 ; 1 > 2 est faux, on s'arrête et on place 2 en t[1] : [1, 2, 3].",
                "Résultat : [1, 3, 2] après le premier tour, puis [1, 2, 3].",
              ],
            },
            {
              level: 2,
              statement: "1. Compter les comparaisons t[j] > cle et les décalages effectués par le tri par insertion sur [1, 2, 3, 4, 5], puis sur [5, 4, 3, 2, 1]. 2. En déduire le meilleur cas et le pire cas pour un tableau de taille n, et le coût correspondant.",
              hint: "Sur le tableau croissant, regardez ce qui se passe dès la première comparaison de chaque tour ; sur le tableau décroissant, chaque élément remonte jusqu'en tête.",
              solution: [
                "Tableau croissant : à chaque tour i (de 1 à 4), t[i - 1] > cle est faux dès la première comparaison. 4 comparaisons, 0 décalage.",
                "Tableau décroissant : au tour i, cle est plus petite que les i éléments à sa gauche, il faut i comparaisons et i décalages. Total : 1 + 2 + 3 + 4 = 10 comparaisons et 10 décalages.",
                "Cas général : meilleur cas (tableau déjà trié), n - 1 comparaisons, coût linéaire.",
                "Pire cas (tableau trié dans l'ordre décroissant), n(n - 1) / 2 comparaisons, coût quadratique. Pour n = 5, on retrouve 5 × 4 / 2 = 10.",
                "Résultat : 4 comparaisons dans le meilleur cas, 10 dans le pire cas pour n = 5.",
              ],
            },
            {
              level: 3,
              statement: "Un logiciel reçoit chaque jour une liste de 6 mesures presque triée, par exemple t = [1, 2, 4, 3, 5, 6] (données fictives). 1. Dérouler le tri par insertion sur t et compter les comparaisons t[j] > cle. 2. Combien de comparaisons le tri par sélection ferait-il sur le même tableau ? 3. Lequel des deux tris est le plus adapté à ce type de données ? Justifier. 4. Énoncer l'invariant de la boucle for du tri par insertion et expliquer comment il prouve la correction de l'algorithme.",
              hint: "Sur ce tableau, un seul élément n'est pas à sa place : regardez à quel tour il est traité.",
              solution: [
                "1. i = 1 (cle = 2) : 1 > 2 faux, 1 comparaison. i = 2 (cle = 4) : 2 > 4 faux, 1 comparaison. i = 3 (cle = 3) : 4 > 3 vrai, on décale 4, puis 2 > 3 faux, 2 comparaisons ; le tableau devient [1, 2, 3, 4, 5, 6].",
                "i = 4 (cle = 5) : 4 > 5 faux, 1 comparaison. i = 5 (cle = 6) : 5 > 6 faux, 1 comparaison. Total : 1 + 1 + 2 + 1 + 1 = 6 comparaisons et 1 décalage.",
                "2. Le tri par sélection fait toujours n(n - 1) / 2 comparaisons, soit 6 × 5 / 2 = 15.",
                "3. Le tri par insertion est plus adapté : sur des données presque triées, il s'approche de son meilleur cas (coût presque linéaire), alors que le tri par sélection reste quadratique.",
                "4. Invariant : avant le tour i, t[0..i-1] est trié. Vrai pour i = 1 ; conservé car chaque tour insère t[i] à sa place dans la partie triée ; après le dernier tour (i = n - 1), t[0..n-1] est trié, donc tout le tableau.",
                "Résultat : 6 comparaisons pour le tri par insertion contre 15 pour le tri par sélection.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément du tri par insertion à son rôle.",
            pairs: [
              { left: "cle = t[i]", right: "Mémorise l'élément à insérer avant qu'il soit écrasé" },
              { left: "j >= 0", right: "Arrête le décalage au début du tableau" },
              { left: "t[j] > cle", right: "Teste si l'élément de gauche doit être décalé" },
              { left: "t[j + 1] = t[j]", right: "Décale un élément d'une case vers la droite" },
              { left: "t[j + 1] = cle", right: "Place l'élément dans la case libérée" },
              { left: "Tableau déjà trié", right: "Meilleur cas : n - 1 comparaisons" },
            ],
          },
          quiz: [
            { q: "Quel est l'état de [4, 7, 2, 5] après les deux premiers tours (i = 1 puis i = 2) du tri par insertion ?", options: ["[2, 4, 5, 7]", "[2, 4, 7, 5]", "[4, 2, 7, 5]", "[2, 7, 4, 5]"], answer: 1, why: "i = 1 : 7 reste en place. i = 2 : 2 est inséré en tête, on obtient [2, 4, 7, 5]." },
            { q: "Combien de comparaisons le tri par insertion fait-il sur un tableau déjà trié de 10 éléments ?", options: ["9", "45", "10", "100"], answer: 0, why: "Chaque tour s'arrête dès la première comparaison : n - 1 = 9 comparaisons." },
            { q: "Pourquoi mémorise-t-on t[i] dans une variable cle ?", options: ["Pour accélérer la boucle for", "Parce que le premier décalage écrase la case t[i]", "Pour pouvoir renvoyer cette valeur", "Parce qu'une liste Python ne peut pas être modifiée"], answer: 1, why: "L'instruction t[j + 1] = t[j] avec j = i - 1 écrit dans t[i] : sans copie, sa valeur serait perdue." },
            { q: "Quel est le pire cas du tri par insertion ?", options: ["Un tableau déjà trié", "Un tableau dont tous les éléments sont égaux", "Un tableau de deux éléments", "Un tableau trié dans l'ordre décroissant"], answer: 3, why: "Chaque élément doit alors remonter jusqu'en tête : n(n - 1) / 2 comparaisons." },
            { q: "Quelle propriété est un invariant de la boucle for du tri par insertion ?", options: ["t[0..i-1] contient les i plus petits éléments", "t[i..n-1] est trié", "t[0..i-1] est trié avant le tour i", "t[i] est le maximum du tableau"], answer: 2, why: "La partie gauche est triée, mais ses éléments ne sont pas forcément les plus petits : c'est la différence avec le tri par sélection." },
          ],
          trap: "Confondre les invariants des deux tris : dans le tri par insertion, la partie gauche est triée mais ne contient pas forcément les plus petits éléments du tableau, alors que c'est le cas dans le tri par sélection. Autre erreur : oublier de mémoriser t[i] dans cle avant les décalages.",
          method: "Pour distinguer les deux tris, retenez une image : la sélection « va chercher » le plus petit élément dans la partie de droite, l'insertion « prend le suivant » et lui cherche une place dans la partie de gauche. Vérifiez vos déroulés en contrôlant l'invariant à chaque ligne.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cout-correction',
          title: 'Coût, terminaison et correction d’un algorithme',
          minutes: 35,
          objectives: [
            "Évaluer le coût d'un algorithme en comptant ses opérations élémentaires en fonction de la taille des données.",
            "Distinguer un coût constant, linéaire et quadratique.",
            "Justifier la terminaison d'une boucle à l'aide d'un variant.",
            "Prouver la correction d'un algorithme à l'aide d'un invariant de boucle.",
          ],
          course: [
            {
              heading: "Trois questions sur un algorithme",
              paragraphs: [
                "Écrire un algorithme ne suffit pas : il faut pouvoir répondre à trois questions. S'arrête-t-il toujours ? C'est la terminaison. Donne-t-il le bon résultat pour toutes les entrées qui respectent sa spécification ? C'est la correction. Combien d'opérations effectue-t-il ? C'est le coût, ou complexité.",
                "Des tests sur quelques exemples peuvent révéler une erreur, mais ne prouvent pas qu'il n'y en a pas : on ne peut pas tester toutes les entrées possibles. Les notions de variant et d'invariant permettent de raisonner sur toutes les exécutions à la fois.",
              ],
            },
            {
              heading: "Terminaison : le variant de boucle",
              paragraphs: [
                "Une boucle for sur range(n) ou sur une liste qui n'est pas modifiée dans le corps de la boucle se termine toujours : le nombre de tours est fixé à l'avance. Le risque de boucle infinie vient des boucles while, dont la condition peut rester vraie indéfiniment.",
                "Pour prouver qu'une boucle while se termine, on exhibe un variant : une quantité à valeurs entières, positive tant que la boucle tourne, et qui diminue strictement à chaque tour. Une suite d'entiers positifs strictement décroissante ne peut pas être infinie, donc la boucle s'arrête. Dans le tri par insertion, j est un variant de la boucle while : il diminue de 1 à chaque tour et la boucle s'arrête au plus tard quand j vaut -1.",
                "Contre-exemple : avec n = 7 et la boucle while n != 0: n = n - 2, n prend les valeurs 7, 5, 3, 1, -1, -3... et ne vaut jamais 0 : la boucle ne s'arrête pas. Écrire while n > 0 corrige le problème : n est alors un variant.",
              ],
              box: { label: "Définition", text: "Un variant de boucle est une quantité entière, positive à chaque passage dans la boucle, qui décroît strictement à chaque tour. Son existence prouve la terminaison de la boucle." },
            },
            {
              heading: "Correction : l'invariant de boucle",
              paragraphs: [
                "Un invariant de boucle est une propriété qui vérifie trois conditions. Initialisation : elle est vraie avant le premier tour. Conservation : si elle est vraie au début d'un tour, elle est encore vraie à la fin de ce tour. Conclusion : à la sortie de la boucle, l'invariant, combiné avec la condition d'arrêt, donne le résultat attendu.",
                "Exemple avec la somme : s = 0 ; for i in range(n): s = s + t[i]. Invariant : « avant le tour i, s vaut t[0] + ... + t[i - 1] ». Initialisation : avant le tour 0, s vaut 0, somme vide. Conservation : le tour i ajoute t[i], donc s vaut t[0] + ... + t[i]. Conclusion : après le dernier tour (i = n - 1), s vaut la somme de tous les éléments.",
                "Le raisonnement ressemble à une récurrence en mathématiques. Pour le maximum, l'invariant est « m est le maximum de t[0..i-1] » ; pour le tri par sélection, « t[0..i] est trié et contient les i + 1 plus petits éléments » ; pour le tri par insertion, « t[0..i-1] est trié ».",
              ],
              box: { label: "Règle", text: "Prouver un invariant : 1. initialisation (vrai avant le premier tour) ; 2. conservation (un tour le préserve) ; 3. conclusion (à la sortie, il donne le résultat)." },
            },
            {
              heading: "Le coût : constant, linéaire, quadratique",
              paragraphs: [
                "On évalue le coût en comptant les opérations élémentaires en fonction de la taille n des données, le plus souvent dans le pire cas. Un nombre d'opérations qui ne dépend pas de n (accéder à t[0], échanger deux cases) donne un coût constant. Une boucle simple sur les n éléments donne un coût linéaire, de l'ordre de n. Deux boucles imbriquées sur les n éléments donnent un coût quadratique, de l'ordre de n².",
                "Les ordres de grandeur comptent plus que les constantes : 3n + 2 et n sont tous deux linéaires ; n(n - 1) / 2 est quadratique. En pratique, si n est multiplié par 10, la durée d'un algorithme linéaire est multipliée par environ 10, celle d'un algorithme quadratique par environ 100. On peut le vérifier expérimentalement en mesurant des durées avec le module time (time.time() ou time.perf_counter()).",
                "Récapitulatif : parcours séquentiel, recherche d'un extremum, calcul d'une moyenne, coût linéaire ; tri par sélection, coût quadratique dans tous les cas ; tri par insertion, coût quadratique dans le pire cas et linéaire dans le meilleur cas.",
              ],
              box: { label: "À retenir", text: "Constant : indépendant de n. Linéaire : de l'ordre de n (une boucle). Quadratique : de l'ordre de n² (deux boucles imbriquées). n × 10 donne une durée × 10 en linéaire et × 100 en quadratique." },
            },
          ],
          keyPoints: [
            "Terminaison : l'algorithme s'arrête ; correction : il donne le bon résultat ; coût : nombre d'opérations selon n.",
            "Une boucle for sur un range se termine toujours ; une boucle while se prouve avec un variant.",
            "Variant : quantité entière positive qui décroît strictement à chaque tour.",
            "Invariant : vrai avant le premier tour, conservé par chaque tour, et qui donne le résultat à la sortie.",
            "Coût linéaire : n × 10 donne environ une durée × 10 ; coût quadratique : environ × 100.",
            "Des tests peuvent montrer une erreur, mais seule une preuve garantit la correction pour toutes les entrées.",
          ],
          example: {
            statement: "On considère la fonction def compte_pairs(t): c = 0 ; for v in t: if v % 2 == 0: c = c + 1. Après la boucle : return c. 1. Justifier sa terminaison. 2. Proposer un invariant et prouver la correction. 3. Donner son coût.",
            solution: [
              "1. La boucle for parcourt une liste qui n'est pas modifiée : elle fait exactement len(t) tours, donc la fonction se termine.",
              "2. Invariant : « après avoir traité les k premiers éléments, c est le nombre d'éléments pairs parmi eux ».",
              "Initialisation : avant le premier tour, k = 0 et c = 0, il n'y a aucun élément pair parmi zéro élément.",
              "Conservation : on traite l'élément suivant v ; s'il est pair (v % 2 == 0), c augmente de 1, sinon c ne change pas. L'invariant reste vrai pour k + 1 éléments.",
              "Conclusion : à la sortie, les n éléments ont été traités, donc c est le nombre total d'éléments pairs.",
              "3. Un test et au plus une addition par élément : environ 2n opérations, le coût est linéaire.",
              "Réponse : la fonction termine (boucle for), elle est correcte (invariant prouvé) et son coût est linéaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner le coût (constant, linéaire ou quadratique) de chacun des fragments suivants, pour une liste t de taille n. A : x = t[0] + t[-1]. B : for v in t: print(v). C : for i in range(n): for j in range(n): if t[i] == t[j]: c = c + 1. D : for k in range(10): print(t[0]).",
              hint: "Comptez combien de fois le corps de chaque boucle est exécuté, en fonction de n.",
              solution: [
                "A : deux accès et une addition, quel que soit n : coût constant.",
                "B : un affichage par élément, n affichages : coût linéaire.",
                "C : deux boucles imbriquées de n tours chacune, soit n × n = n² tests : coût quadratique.",
                "D : 10 tours, nombre fixe qui ne dépend pas de n : coût constant.",
                "Résultat : A constant, B linéaire, C quadratique, D constant.",
              ],
            },
            {
              level: 2,
              statement: "On considère deux fonctions. f1 : def f1(n): while n > 0: n = n - 2. Puis : return n. f2 : def f2(n): while n != 0: n = n - 2. Puis : return n. 1. Que renvoient f1(7) et f1(8) ? 2. Que se passe-t-il pour f2(7) ? 3. Proposer un variant prouvant que f1 termine pour tout entier n.",
              hint: "Écrivez la suite des valeurs prises par n à chaque tour, et regardez si la condition de la boucle devient fausse.",
              solution: [
                "1. f1(7) : n prend les valeurs 7, 5, 3, 1, -1 ; à -1, la condition n > 0 est fausse, la fonction renvoie -1. f1(8) : 8, 6, 4, 2, 0, la fonction renvoie 0.",
                "2. f2(7) : n prend les valeurs 7, 5, 3, 1, -1, -3... et ne vaut jamais 0 (n reste impair) : la boucle ne s'arrête jamais.",
                "3. Variant pour f1 : la valeur de n elle-même. Tant que la boucle tourne, n > 0, donc n est un entier positif ; à chaque tour, n diminue de 2, donc strictement. La boucle s'arrête donc après un nombre fini de tours.",
                "Si n ≤ 0 au départ, la boucle ne fait aucun tour et la fonction termine immédiatement.",
                "Résultat : f1(7) = -1, f1(8) = 0, f2(7) boucle indéfiniment, et n est un variant pour f1.",
              ],
            },
            {
              level: 3,
              statement: "Sur un ordinateur donné, on mesure les durées suivantes (données fictives) : une recherche séquentielle dans un tableau de 1 000 éléments prend 0,0001 s et un tri par sélection de ce même tableau prend 0,05 s. 1. Estimer les deux durées pour un tableau de 4 000 éléments. 2. Estimer la durée du tri par sélection pour 1 000 000 d'éléments, et l'exprimer en heures. 3. Proposer un invariant de la boucle de la fonction def maximum(t): m = t[0] ; for i in range(1, len(t)): if t[i] > m: m = t[i]. Après la boucle : return m. Rédiger la preuve de correction.",
              hint: "Recherche séquentielle : coût linéaire. Tri par sélection : coût quadratique. Calculez le facteur appliqué à n, puis à n².",
              solution: [
                "1. n est multiplié par 4. Recherche (linéaire) : 0,0001 × 4 = 0,0004 s. Tri par sélection (quadratique) : 0,05 × 4² = 0,05 × 16 = 0,8 s.",
                "2. n est multiplié par 1 000, donc n² par 1 000 000. Durée : 0,05 × 1 000 000 = 50 000 s, soit 50 000 / 3 600 ≈ 13,9 heures.",
                "3. Invariant : « au début du tour i, m est le maximum de t[0..i-1] ».",
                "Initialisation : avant le tour i = 1, m = t[0], qui est bien le maximum de t[0..0].",
                "Conservation : au tour i, si t[i] > m, m prend la valeur t[i], sinon m ne change pas ; dans les deux cas, m devient le maximum de t[0..i].",
                "Conclusion : après le dernier tour (i = n - 1), m est le maximum de t[0..n-1], c'est-à-dire de tout le tableau.",
                "Résultat : 0,0004 s et 0,8 s pour 4 000 éléments ; environ 13,9 heures pour trier un million d'éléments par sélection, d'où l'intérêt de tris plus efficaces.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : coût, terminaison et correction.",
            statements: [
              { text: "Si un programme passe tous ses tests, il est prouvé correct.", true: false, why: "Les tests ne couvrent que quelques entrées : ils peuvent révéler une erreur, pas prouver son absence." },
              { text: "Une boucle for i in range(n) se termine toujours.", true: true, why: "Le nombre de tours, n, est fixé avant le début de la boucle." },
              { text: "Un variant est une quantité entière positive qui décroît strictement à chaque tour.", true: true, why: "Une telle suite d'entiers ne peut pas décroître indéfiniment : la boucle s'arrête." },
              { text: "Un invariant de boucle doit être vrai seulement à la fin de la boucle.", true: false, why: "Il doit être vrai avant le premier tour et conservé par chaque tour : c'est ce qui le rend utile." },
              { text: "Un algorithme de coût 3n + 5 est quadratique.", true: false, why: "Le nombre d'opérations est de l'ordre de n : le coût est linéaire." },
              { text: "Pour un algorithme quadratique, multiplier n par 10 multiplie la durée par environ 100.", true: true, why: "Le nombre d'opérations est de l'ordre de n², et (10n)² = 100n²." },
            ],
          },
          quiz: [
            { q: "Quel est le coût de deux boucles for imbriquées de n tours chacune, dont le corps fait une comparaison ?", options: ["Linéaire", "Constant", "Quadratique", "Logarithmique"], answer: 2, why: "Le corps est exécuté n × n = n² fois." },
            { q: "Quelle quantité est un variant de la boucle while i < n: i = i + 1, pour des entiers i et n ?", options: ["n - i", "i", "n + i", "i × n"], answer: 0, why: "n - i est un entier positif tant que la boucle tourne et diminue de 1 à chaque tour." },
            { q: "Quelle étape ne fait pas partie de la preuve d'un invariant ?", options: ["L'initialisation", "La conservation", "La conclusion à la sortie de la boucle", "Le chronométrage"], answer: 3, why: "La preuve repose sur un raisonnement (initialisation, conservation, conclusion), pas sur une mesure." },
            { q: "Un algorithme linéaire traite 2 000 éléments en 0,3 s. Quelle durée prévoir pour 6 000 éléments ?", options: ["0,6 s", "0,9 s", "2,7 s", "1,8 s"], answer: 1, why: "n est multiplié par 3, donc la durée d'un algorithme linéaire aussi : 0,3 × 3 = 0,9 s." },
            { q: "Pour n = 9, que fait la boucle while n != 0: n = n - 2 ?", options: ["Elle s'arrête quand n vaut 1", "Elle s'arrête quand n vaut -1", "Elle ne s'arrête jamais", "Elle ne fait aucun tour"], answer: 2, why: "n reste impair (9, 7, 5, 3, 1, -1...) et ne vaut jamais 0." },
          ],
          trap: "Croire qu'un programme est correct parce qu'il fonctionne sur deux ou trois exemples, ou confondre variant et invariant : le variant (une quantité qui décroît) prouve la terminaison, l'invariant (une propriété qui reste vraie) prouve la correction.",
          method: "Pour trouver un invariant, demandez-vous ce que la boucle a déjà accompli après i tours, en une phrase : « s contient la somme des i premiers éléments », « la partie gauche est triée ». Rédigez ensuite les trois étapes (initialisation, conservation, conclusion) sous forme de trois phrases courtes.",
        },
      ],
    },
    /* ================================================================== */
    /* ALGORITHMIQUE : DICHOTOMIE, GLOUTONS, K PLUS PROCHES VOISINS         */
    /* ================================================================== */
    {
      id: 'dichotomie-glouton-knn',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'recherche-dichotomique',
          title: 'La recherche dichotomique dans un tableau trié',
          minutes: 35,
          objectives: [
            "Écrire un algorithme de recherche dichotomique dans un tableau trié.",
            "Dérouler la recherche dichotomique en suivant l'évolution des bornes.",
            "Montrer la terminaison de la recherche dichotomique à l'aide d'un variant de boucle.",
            "Comparer le coût de la recherche dichotomique à celui de la recherche séquentielle.",
          ],
          course: [
            {
              heading: "Diviser la zone de recherche par deux",
              paragraphs: [
                "Pour chercher un mot dans un dictionnaire papier, on ne lit pas les pages une par une : on ouvre au milieu, on regarde si le mot est avant ou après, et on recommence dans la bonne moitié. Cette méthode n'est possible que parce que les mots sont rangés dans l'ordre alphabétique. C'est le principe de la recherche dichotomique (du grec dikhotomia, « division en deux »).",
                "Dans un tableau t trié dans l'ordre croissant, on cherche une valeur x. On compare x à l'élément du milieu t[m]. S'il est égal, on a trouvé. Si t[m] < x, la valeur x ne peut se trouver que dans la moitié droite, puisque tous les éléments de gauche sont inférieurs ou égaux à t[m]. Si t[m] > x, elle ne peut se trouver que dans la moitié gauche. À chaque étape, on élimine environ la moitié des éléments restants.",
              ],
              box: { label: "Définition", text: "La recherche dichotomique cherche une valeur dans un tableau trié en comparant la valeur cherchée à l'élément du milieu de la zone de recherche, puis en poursuivant dans la seule moitié qui peut la contenir." },
            },
            {
              heading: "L'algorithme en Python",
              paragraphs: [
                "On délimite la zone de recherche par deux indices : g (gauche) et d (droite). def recherche_dicho(t, x): g = 0 ; d = len(t) - 1 ; while g <= d: m = (g + d) // 2 ; if t[m] == x: return m ; elif t[m] < x: g = m + 1 ; else: d = m - 1. Après la boucle : return -1, qui signale que x est absent.",
                "L'opérateur // donne le quotient entier : pour g = 5 et d = 9, m = 14 // 2 = 7 ; pour g = 5 et d = 6, m = 11 // 2 = 5. Les mises à jour g = m + 1 et d = m - 1 excluent la case m, déjà examinée. La boucle s'arrête soit parce qu'on a trouvé x, soit parce que la zone est vide (g > d).",
                "Déroulé : t = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] et x = 23. Tour 1 : g = 0, d = 9, m = 4, t[4] = 16 < 23, donc g = 5. Tour 2 : g = 5, d = 9, m = 7, t[7] = 56 > 23, donc d = 6. Tour 3 : g = 5, d = 6, m = 5, t[5] = 23 : la fonction renvoie 5. Trois comparaisons ont suffi, contre six pour une recherche séquentielle.",
              ],
              box: { label: "Règle", text: "Précondition indispensable : le tableau doit être trié. Sur un tableau non trié, la recherche dichotomique peut affirmer à tort qu'une valeur présente est absente." },
            },
            {
              heading: "Terminaison : un variant de boucle",
              paragraphs: [
                "La boucle est un while : il faut prouver qu'elle s'arrête. On prend comme variant la largeur de la zone, d - g + 1, nombre d'éléments encore candidats. C'est un entier, positif tant que g ≤ d. Comme g ≤ m ≤ d, la mise à jour g = m + 1 donne une nouvelle largeur d - m, strictement plus petite que d - g + 1 ; la mise à jour d = m - 1 donne m - g, elle aussi strictement plus petite.",
                "La largeur, entier positif, diminue strictement à chaque tour : la boucle ne peut tourner qu'un nombre fini de fois. Si l'on écrivait g = m au lieu de g = m + 1, la zone pourrait ne plus rétrécir : avec t = [1, 3] et x = 5, on aurait g = 0, d = 1, m = 0 indéfiniment.",
              ],
              box: { label: "Propriété", text: "Variant de la recherche dichotomique : la largeur d - g + 1 de la zone de recherche, entier positif qui décroît strictement à chaque tour (elle est au moins divisée par deux)." },
            },
            {
              heading: "Le coût : logarithmique",
              paragraphs: [
                "À chaque tour, la largeur de la zone est au moins divisée par 2. Partant de n éléments, après k tours, il en reste au plus n / 2ᵏ. La recherche s'arrête donc au plus après un nombre de tours égal au nombre de divisions par 2 nécessaires pour passer de n à 1, augmenté de 1. Ce nombre de divisions est, à un arrondi près, le logarithme en base 2 de n, noté log₂(n), le nombre x tel que 2ˣ = n. Pour n = 1 000, au plus 10 tours ; pour n = 1 000 000, au plus 20 ; pour un milliard, au plus 30.",
                "On dit que le coût est logarithmique. Il est bien plus faible que celui de la recherche séquentielle, linéaire : un million de comparaisons au pire contre 20. Cet avantage suppose que le tableau soit trié ; si l'on doit le trier avant une seule recherche, le tri coûte plus cher que la recherche séquentielle. La dichotomie est rentable quand on effectue de nombreuses recherches dans un même tableau trié.",
              ],
              box: { label: "À retenir", text: "Nombre maximal de tours : le plus petit k tel que 2ᵏ > n. Pour n = 1 000 : 10 (2¹⁰ = 1 024). Pour n = 1 000 000 : 20 (2²⁰ = 1 048 576). Doubler n n'ajoute qu'un tour." },
            },
          ],
          keyPoints: [
            "La recherche dichotomique ne fonctionne que sur un tableau trié.",
            "On compare x à t[m] avec m = (g + d) // 2, puis on garde la moitié gauche (d = m - 1) ou droite (g = m + 1).",
            "La boucle tourne tant que g <= d ; si la zone devient vide, on renvoie -1.",
            "Variant : la largeur d - g + 1, entier positif strictement décroissant, prouve la terminaison.",
            "Coût logarithmique : au plus 10 tours pour 1 000 éléments, 20 pour un million.",
          ],
          example: {
            statement: "On applique recherche_dicho au tableau t = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] avec x = 40. Dérouler l'algorithme en donnant g, d et m à chaque tour, puis indiquer le résultat et le nombre de comparaisons de x avec un élément.",
            solution: [
              "Tour 1 : g = 0, d = 9, m = 4 ; t[4] = 16 < 40, donc g = 5.",
              "Tour 2 : g = 5, d = 9, m = 7 ; t[7] = 56 > 40, donc d = 6.",
              "Tour 3 : g = 5, d = 6, m = 5 ; t[5] = 23 < 40, donc g = 6.",
              "Tour 4 : g = 6, d = 6, m = 6 ; t[6] = 38 < 40, donc g = 7.",
              "Maintenant g = 7 > d = 6 : la zone est vide, la boucle s'arrête.",
              "Réponse : la fonction renvoie -1 (40 est absent), après 4 tours, contre 10 comparaisons pour une recherche séquentielle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dérouler la recherche dichotomique de x = 12 dans t = [3, 7, 12, 18, 25, 31, 40] en donnant g, d et m à chaque tour, ainsi que la valeur renvoyée.",
              hint: "Calculez m = (g + d) // 2 avec la division entière, puis comparez t[m] à 12.",
              solution: [
                "Tour 1 : g = 0, d = 6, m = 3 ; t[3] = 18 > 12, donc d = 2.",
                "Tour 2 : g = 0, d = 2, m = 1 ; t[1] = 7 < 12, donc g = 2.",
                "Tour 3 : g = 2, d = 2, m = 2 ; t[2] = 12 : la valeur est trouvée.",
                "Résultat : la fonction renvoie l'indice 2, après 3 tours.",
              ],
            },
            {
              level: 2,
              statement: "1. Quel est le nombre maximal de tours de la recherche dichotomique pour un tableau trié de 1 000 éléments ? de 1 000 000 d'éléments ? Comparer avec la recherche séquentielle. 2. On applique, par erreur, la recherche dichotomique au tableau non trié t = [5, 1, 9, 3, 7] avec x = 1. Dérouler l'algorithme et commenter le résultat.",
              hint: "Pour la question 1, cherchez la plus petite puissance de 2 strictement supérieure à n. Pour la question 2, appliquez l'algorithme mécaniquement.",
              solution: [
                "1. 2¹⁰ = 1 024 > 1 000, donc au plus 10 tours pour 1 000 éléments, contre 1 000 comparaisons au pire en recherche séquentielle.",
                "2²⁰ = 1 048 576 > 1 000 000, donc au plus 20 tours pour un million d'éléments, contre un million de comparaisons au pire en recherche séquentielle.",
                "2. Tour 1 : g = 0, d = 4, m = 2 ; t[2] = 9 > 1, donc d = 1.",
                "Tour 2 : g = 0, d = 1, m = 0 ; t[0] = 5 > 1, donc d = -1. Alors g = 0 > d = -1 : la boucle s'arrête et la fonction renvoie -1.",
                "Commentaire : 1 est pourtant présent à l'indice 1. Le résultat est faux car la précondition (tableau trié) n'est pas respectée.",
                "Résultat : 10 et 20 tours au plus ; sur un tableau non trié, la fonction peut renvoyer -1 pour une valeur présente.",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction recherche_dicho du cours. 1. Montrer que la quantité d - g + 1 est un variant de la boucle while : préciser pourquoi c'est un entier positif dans la boucle et pourquoi elle décroît strictement dans chacun des deux cas de mise à jour. 2. Un élève remplace g = m + 1 par g = m. Donner un tableau de deux éléments et une valeur x pour lesquels la fonction ne s'arrête pas. 3. Un dictionnaire numérique contient 100 000 mots triés (données fictives). Combien de comparaisons faut-il au plus pour savoir si un mot y figure ?",
              hint: "Utilisez l'encadrement g ≤ m ≤ d, vrai dès que g ≤ d. Pour la question 3, encadrez 100 000 entre deux puissances de 2.",
              solution: [
                "1. Dans la boucle, g ≤ d, donc d - g + 1 ≥ 1 : c'est un entier strictement positif. De plus m = (g + d) // 2 vérifie g ≤ m ≤ d.",
                "Cas g = m + 1 : la nouvelle largeur vaut d - (m + 1) + 1 = d - m, et d - m ≤ d - g < d - g + 1, car m ≥ g.",
                "Cas d = m - 1 : la nouvelle largeur vaut (m - 1) - g + 1 = m - g, et m - g ≤ d - g < d - g + 1, car m ≤ d. Dans les deux cas, la largeur décroît strictement : la boucle termine.",
                "2. Avec t = [1, 3] et x = 5 : g = 0, d = 1, m = 0, t[0] = 1 < 5, donc g = m = 0. On retrouve exactement g = 0 et d = 1 : la boucle tourne indéfiniment.",
                "3. 2¹⁶ = 65 536 < 100 000 < 2¹⁷ = 131 072 : il faut au plus 17 comparaisons.",
                "Résultat : la largeur est un variant ; g = m peut boucler indéfiniment ; 17 comparaisons au plus pour 100 000 mots.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la recherche dichotomique.",
            statements: [
              { text: "La recherche dichotomique fonctionne sur n'importe quel tableau.", true: false, why: "Le tableau doit être trié, sinon on peut éliminer la moitié qui contient la valeur." },
              { text: "Pour un tableau trié de 1 000 éléments, 10 tours suffisent toujours.", true: true, why: "2¹⁰ = 1 024 > 1 000 : la zone est vide ou la valeur trouvée après au plus 10 tours." },
              { text: "Si l'on double la taille du tableau, le nombre maximal de tours double aussi.", true: false, why: "Il n'augmente que de 1 : le coût est logarithmique." },
              { text: "La boucle s'arrête quand g devient strictement supérieur à d.", true: true, why: "La zone de recherche est alors vide : la valeur est absente." },
              { text: "Remplacer g = m + 1 par g = m ne change rien au résultat.", true: false, why: "La zone peut ne plus rétrécir et la boucle peut ne jamais s'arrêter." },
              { text: "La largeur d - g + 1 de la zone est un variant de la boucle.", true: true, why: "C'est un entier positif dans la boucle, qui diminue strictement à chaque tour." },
            ],
          },
          quiz: [
            { q: "Dans t = [4, 9, 15, 21, 30], quelle case est examinée en premier par la recherche dichotomique ?", options: ["t[0] = 4", "t[1] = 9", "t[2] = 15", "t[4] = 30"], answer: 2, why: "g = 0 et d = 4, donc m = 4 // 2 = 2 : on examine t[2] = 15." },
            { q: "Combien de tours faut-il au plus pour un tableau trié de 500 éléments ?", options: ["9", "250", "500", "25"], answer: 0, why: "2⁹ = 512 > 500 : au plus 9 tours." },
            { q: "Avec g = 3 et d = 8, quelle est la valeur de m = (g + d) // 2 ?", options: ["6", "5,5", "5", "4"], answer: 2, why: "11 // 2 = 5 : la division entière ignore la partie décimale." },
            { q: "Quel est le coût de la recherche dichotomique ?", options: ["Linéaire, de l'ordre de n", "Logarithmique", "Quadratique, de l'ordre de n²", "Constant"], answer: 1, why: "La zone est divisée par deux à chaque tour : environ log₂(n) tours." },
            { q: "Que renvoie la fonction du cours si x est absent du tableau ?", options: ["0", "L'indice du plus proche", "None après une erreur", "-1"], answer: 3, why: "La boucle s'arrête quand g > d et la fonction renvoie -1, valeur conventionnelle d'absence." },
          ],
          trap: "Appliquer la dichotomie à un tableau non trié, ou se tromper dans la mise à jour des bornes (g = m au lieu de g = m + 1, condition while g < d au lieu de g <= d) : on obtient des boucles infinies ou des valeurs présentes déclarées absentes.",
          method: "Déroulez toujours la recherche dans un tableau à trois colonnes (g, d, m), une ligne par tour, et vérifiez à chaque ligne que la largeur d - g + 1 diminue. Testez aussi trois cas : valeur au début, valeur à la fin, valeur absente.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'algorithmes-gloutons',
          title: 'Les algorithmes gloutons : le rendu de monnaie',
          minutes: 30,
          objectives: [
            "Résoudre un problème d'optimisation grâce à un algorithme glouton.",
            "Écrire en Python l'algorithme glouton du rendu de monnaie.",
            "Identifier, sur un contre-exemple, qu'un algorithme glouton ne fournit pas toujours une solution optimale.",
          ],
          course: [
            {
              heading: "Problèmes d'optimisation et stratégie gloutonne",
              paragraphs: [
                "Un problème d'optimisation consiste à choisir, parmi de nombreuses solutions possibles, une solution qui minimise ou maximise une quantité : rendre une somme avec le moins de pièces possible, remplir un sac avec des objets de valeur totale maximale sans dépasser un poids, organiser un emploi du temps. Tester toutes les solutions possibles devient vite impossible, car leur nombre explose.",
                "Un algorithme glouton construit une solution étape par étape, en faisant à chaque étape le choix qui semble le meilleur sur le moment (localement optimal), sans jamais revenir sur ses choix. Cette stratégie est simple et rapide. Mais un choix optimal sur le moment ne conduit pas forcément à la meilleure solution globale : un algorithme glouton fournit une solution, pas toujours la solution optimale.",
              ],
              box: { label: "Définition", text: "Un algorithme glouton résout un problème d'optimisation en faisant, à chaque étape, le choix localement le meilleur, sans revenir en arrière. Il est rapide, mais ne garantit pas toujours une solution optimale." },
            },
            {
              heading: "Le rendu de monnaie",
              paragraphs: [
                "Un commerçant doit rendre une somme en utilisant le moins possible de pièces et de billets. On suppose qu'il dispose d'autant d'exemplaires qu'il le souhaite de chaque valeur. Stratégie gloutonne : prendre à chaque étape la plus grande valeur inférieure ou égale à la somme restant à rendre, la soustraire, et recommencer jusqu'à ce que la somme restante soit nulle.",
                "Avec les valeurs en euros 1, 2, 5, 10, 20, 50, 100 et 200, pour rendre 87 € : 50 (reste 37), 20 (reste 17), 10 (reste 7), 5 (reste 2), 2 (reste 0). On rend 5 pièces ou billets. Pour le système des euros, on peut démontrer que l'algorithme glouton donne toujours le nombre minimal de pièces et billets : on dit que ce système est canonique.",
              ],
              box: { label: "Règle", text: "Rendu glouton : tant que la somme restante est non nulle, prendre la plus grande valeur qui ne dépasse pas la somme restante et la soustraire." },
            },
            {
              heading: "L'algorithme en Python",
              paragraphs: [
                "On range les valeurs dans une liste triée par ordre décroissant, par exemple pieces = [200, 100, 50, 20, 10, 5, 2, 1]. def rendu_glouton(somme, pieces): rendu = [] ; i = 0 ; while somme > 0: if pieces[i] <= somme: rendu.append(pieces[i]) ; somme = somme - pieces[i] ; else: i = i + 1. Après la boucle : return rendu. On ne passe à la valeur suivante (i = i + 1) que lorsque la valeur courante est trop grande.",
                "La présence de la valeur 1 dans la liste garantit qu'on peut toujours finir de rendre la monnaie pour une somme entière. La terminaison se prouve avec un variant : la quantité somme + (nombre de valeurs restant à essayer) décroît strictement à chaque tour. L'algorithme est rapide : il fait au plus un tour par pièce rendue et un tour par valeur de la liste.",
              ],
            },
            {
              heading: "Quand le glouton échoue",
              paragraphs: [
                "Considérons un système fictif de pièces de 1, 3 et 4 unités, et une somme de 6. L'algorithme glouton prend 4 (reste 2), puis 1 (reste 1), puis 1 : il rend 3 pièces. Or 3 + 3 = 6 n'utilise que 2 pièces. Ce système n'est pas canonique : le choix localement le meilleur (la plus grande pièce) conduit à une solution qui n'est pas optimale.",
                "Le même phénomène apparaît dans le problème du sac à dos : choisir d'abord les objets ayant le meilleur rapport valeur sur masse est une stratégie gloutonne raisonnable, mais elle ne donne pas toujours la meilleure valeur totale. Pour obtenir une solution optimale à coup sûr, il faut d'autres méthodes (essayer toutes les combinaisons, ou la programmation dynamique, étudiée en Terminale), plus coûteuses.",
              ],
              box: { label: "À retenir", text: "Un seul contre-exemple suffit à montrer qu'un algorithme glouton n'est pas optimal. Le système {1, 3, 4} pour rendre 6 en est un : 4 + 1 + 1 (glouton) contre 3 + 3 (optimal)." },
            },
          ],
          keyPoints: [
            "Un problème d'optimisation cherche la meilleure solution parmi toutes les solutions possibles.",
            "Un algorithme glouton fait à chaque étape le choix localement le meilleur, sans revenir en arrière.",
            "Rendu de monnaie : on prend toujours la plus grande valeur qui ne dépasse pas la somme restante.",
            "Pour le système des euros (système canonique), le rendu glouton est optimal.",
            "Pour certains systèmes, comme {1, 3, 4}, le glouton n'est pas optimal : 6 = 4 + 1 + 1 au lieu de 3 + 3.",
          ],
          example: {
            statement: "Avec les valeurs en euros [200, 100, 50, 20, 10, 5, 2, 1], appliquer l'algorithme glouton pour rendre 263 €. Donner la liste renvoyée par rendu_glouton(263, pieces) et le nombre de tours de la boucle while.",
            solution: [
              "i = 0 : 200 ≤ 263, on rend 200, reste 63 (1 tour). 200 > 63 : i passe à 1 (1 tour).",
              "i = 1 : 100 > 63, i passe à 2 (1 tour). i = 2 : 50 ≤ 63, on rend 50, reste 13 (1 tour) ; 50 > 13, i passe à 3 (1 tour).",
              "i = 3 : 20 > 13, i passe à 4 (1 tour). i = 4 : 10 ≤ 13, on rend 10, reste 3 (1 tour) ; 10 > 3, i passe à 5 (1 tour).",
              "i = 5 : 5 > 3, i passe à 6 (1 tour). i = 6 : 2 ≤ 3, on rend 2, reste 1 (1 tour) ; 2 > 1, i passe à 7 (1 tour).",
              "i = 7 : 1 ≤ 1, on rend 1, reste 0 (1 tour). La condition somme > 0 est fausse, la boucle s'arrête.",
              "Tours : 5 pièces rendues et 7 changements de valeur, soit 12 tours.",
              "Réponse : la fonction renvoie [200, 50, 10, 2, 1], soit 5 pièces et billets.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec les valeurs en euros 1, 2, 5, 10, 20, 50, 100 et 200, appliquer l'algorithme glouton pour rendre 38 €, puis 99 €. Donner à chaque fois la liste des valeurs rendues et leur nombre.",
              hint: "À chaque étape, prenez la plus grande valeur qui ne dépasse pas la somme restante.",
              solution: [
                "38 € : 20 (reste 18), 10 (reste 8), 5 (reste 3), 2 (reste 1), 1 (reste 0).",
                "On rend [20, 10, 5, 2, 1], soit 5 valeurs.",
                "99 € : 50 (reste 49), 20 (reste 29), 20 (reste 9), 5 (reste 4), 2 (reste 2), 2 (reste 0).",
                "On rend [50, 20, 20, 5, 2, 2], soit 6 valeurs.",
                "Résultat : 5 valeurs pour 38 €, 6 valeurs pour 99 €.",
              ],
            },
            {
              level: 2,
              statement: "Un pays imaginaire utilise des pièces de 1, 3 et 4 unités (système fictif). 1. Appliquer l'algorithme glouton pour rendre 6 unités, puis 10 unités. 2. Trouver pour chacune de ces sommes une solution utilisant moins de pièces. 3. Que peut-on en conclure sur ce système ?",
              hint: "Pour la question 2, essayez d'utiliser plusieurs pièces de 3.",
              solution: [
                "1. Pour 6 : 4 (reste 2), 1 (reste 1), 1 (reste 0), soit 3 pièces. Pour 10 : 4 (reste 6), 4 (reste 2), 1, 1, soit 4 pièces.",
                "2. 6 = 3 + 3 : 2 pièces. 10 = 4 + 3 + 3 : 3 pièces.",
                "3. Le glouton ne donne pas le nombre minimal de pièces : ce système n'est pas canonique. Un seul contre-exemple suffit à le prouver.",
                "Résultat : glouton 3 et 4 pièces, contre 2 et 3 pièces pour les solutions optimales.",
              ],
            },
            {
              level: 3,
              statement: "Un randonneur peut emporter au plus 10 kg dans son sac. Il hésite entre trois objets (données fictives) : A (6 kg, valeur 30), B (5 kg, valeur 24), C (5 kg, valeur 24). Stratégie gloutonne : trier les objets par rapport valeur / masse décroissant, puis les prendre dans cet ordre lorsqu'ils tiennent encore dans le sac. 1. Calculer les trois rapports et appliquer la stratégie gloutonne. 2. Trouver une meilleure solution. 3. Écrire une fonction sac_glouton(objets, capacite) où objets est une liste de triplets (nom, masse, valeur) déjà triée par rapport décroissant, qui renvoie la liste des noms choisis. 4. Conclure.",
              hint: "Après avoir pris A, regardez la masse restante et vérifiez si B ou C peuvent encore entrer.",
              solution: [
                "1. Rapports : A, 30 / 6 = 5 ; B, 24 / 5 = 4,8 ; C, 24 / 5 = 4,8. Ordre : A, B, C.",
                "On prend A (6 kg, reste 4 kg). B (5 kg) ne tient plus, C (5 kg) non plus. Valeur totale : 30.",
                "2. B et C ensemble : 5 + 5 = 10 kg, ce qui respecte la limite, pour une valeur 24 + 24 = 48 > 30.",
                "3. def sac_glouton(objets, capacite): choix = [] ; masse = 0 ; for (nom, m, v) in objets: if masse + m <= capacite: choix.append(nom) ; masse = masse + m. Après la boucle : return choix.",
                "Appel : sac_glouton([('A', 6, 30), ('B', 5, 24), ('C', 5, 24)], 10) renvoie ['A'].",
                "4. Le choix glouton du meilleur rapport a empêché de prendre B et C : la stratégie gloutonne fournit une solution rapidement, mais pas toujours la solution optimale.",
                "Résultat : glouton, valeur 30 ; optimum, valeur 48 avec B et C.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Problème d'optimisation", right: "Chercher la meilleure solution selon un critère (minimum ou maximum)" },
              { left: "Algorithme glouton", right: "Fait à chaque étape le choix localement le meilleur, sans revenir en arrière" },
              { left: "Système canonique", right: "Système de pièces pour lequel le rendu glouton est toujours optimal" },
              { left: "Solution optimale", right: "Solution qui atteint le meilleur critère possible" },
              { left: "Contre-exemple", right: "Un seul cas qui suffit à prouver qu'une affirmation générale est fausse" },
              { left: "Problème du sac à dos", right: "Choisir des objets de valeur totale maximale sans dépasser une masse" },
            ],
          },
          quiz: [
            { q: "Avec les euros, combien de pièces et billets le glouton rend-il pour 47 € ?", options: ["3", "5", "4", "6"], answer: 2, why: "20 + 20 + 5 + 2 = 47 : le glouton rend 4 valeurs (deux billets de 20, un billet de 5, une pièce de 2)." },
            { q: "Qu'est-ce qui caractérise un algorithme glouton ?", options: ["Il essaie toutes les solutions possibles avant de choisir la meilleure", "Il fait le meilleur choix local sans revenir en arrière", "Il trie toujours les données par ordre croissant", "Il trouve toujours la solution optimale, quel que soit le problème"], answer: 1, why: "Il construit la solution pas à pas, en choisissant ce qui paraît le meilleur à chaque étape, sans remettre en cause ses choix." },
            { q: "Dans le système fictif {1, 3, 4}, combien de pièces le glouton rend-il pour 6 ?", options: ["3", "2", "1", "4"], answer: 0, why: "4 + 1 + 1 : 3 pièces, alors que 3 + 3 n'en utilise que 2." },
            { q: "Pourquoi la pièce de 1 est-elle utile dans la liste des valeurs ?", options: ["Elle accélère l'algorithme en réduisant le nombre de tours", "Elle rend le système canonique", "Elle trie la liste", "Elle permet de toujours terminer le rendu"], answer: 3, why: "Avec une pièce de 1, toute somme entière restante peut être rendue : la boucle se termine avec une somme nulle." },
            { q: "Le système des euros est dit canonique. Cela signifie que :", options: ["le glouton y est toujours optimal", "il ne contient que des puissances de 10", "il ne compte que huit valeurs", "le glouton y fait toujours une seule étape"], answer: 0, why: "Pour un système canonique, le rendu glouton donne toujours le nombre minimal de pièces et billets." },
          ],
          trap: "Croire qu'un algorithme glouton donne toujours la meilleure solution parce qu'il fait « le meilleur choix » à chaque étape : un choix localement optimal peut empêcher d'atteindre l'optimum global, comme le montre le système {1, 3, 4}.",
          method: "Pour tester un algorithme glouton, cherchez un petit contre-exemple : calculez à la main la solution gloutonne, puis essayez systématiquement les autres combinaisons sur des valeurs faibles. Si une combinaison fait mieux, le glouton n'est pas optimal pour ce problème.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'k-plus-proches-voisins',
          title: 'L’algorithme des k plus proches voisins',
          minutes: 35,
          objectives: [
            "Écrire un algorithme qui prédit la classe d'un élément en fonction de la classe majoritaire de ses k plus proches voisins.",
            "Calculer une distance entre deux données décrites par des caractéristiques numériques.",
            "Analyser l'influence du choix de k et de la distance sur la prédiction.",
          ],
          course: [
            {
              heading: "Classer une donnée nouvelle",
              paragraphs: [
                "On dispose d'une table de données déjà classées : par exemple des fleurs décrites par la longueur et la largeur de leurs pétales, chacune associée à son espèce (sa classe). Une nouvelle fleur arrive, dont on connaît les mesures mais pas l'espèce. L'algorithme des k plus proches voisins (k-NN, pour k nearest neighbours) prédit sa classe en regardant les données connues qui lui ressemblent le plus.",
                "Principe : on calcule la distance entre la nouvelle donnée et chacune des données de la table, on retient les k données les plus proches (ses k plus proches voisins), et on attribue à la nouvelle donnée la classe la plus représentée parmi ces k voisins (vote majoritaire). C'est un exemple simple d'apprentissage automatique : la machine ne suit pas une règle écrite à la main, elle s'appuie sur des exemples.",
              ],
              box: { label: "Définition", text: "Algorithme des k plus proches voisins : pour prédire la classe d'une donnée, on cherche les k données connues les plus proches selon une distance, puis on lui attribue la classe majoritaire parmi ces k voisins." },
            },
            {
              heading: "Mesurer la ressemblance : la distance",
              paragraphs: [
                "Chaque donnée est décrite par des caractéristiques numériques, que l'on voit comme les coordonnées d'un point. Pour deux points A(x₁, y₁) et B(x₂, y₂), la distance euclidienne, celle de la règle graduée, vaut √((x₂ - x₁)² + (y₂ - y₁)²). Par exemple, entre (1, 2) et (4, 6) : √(3² + 4²) = √25 = 5.",
                "D'autres distances existent, comme la distance de Manhattan, |x₂ - x₁| + |y₂ - y₁|, qui correspond au trajet dans une ville quadrillée : entre (1, 2) et (4, 6), elle vaut 3 + 4 = 7. Le choix de la distance peut modifier la liste des plus proches voisins, donc la prédiction.",
                "Attention aux échelles : si une caractéristique est une masse en grammes (de 100 à 300) et l'autre un diamètre en centimètres (de 5 à 10), les écarts de masse écrasent les écarts de diamètre dans le calcul. On ramène alors souvent les caractéristiques à une même échelle (normalisation) avant de calculer les distances.",
              ],
              box: { label: "Formule", text: "Distance euclidienne : d(A, B) = √((x₂ - x₁)² + (y₂ - y₁)²). Distance de Manhattan : d(A, B) = |x₂ - x₁| + |y₂ - y₁|." },
            },
            {
              heading: "L'algorithme et le choix de k",
              paragraphs: [
                "En Python, avec une table de triplets (x, y, classe) : on construit la liste des couples (distance, classe) par d = [(distance(p, nouveau), p[2]) for p in table], on la trie avec d.sort() (les couples sont comparés d'abord selon leur premier élément, la distance), on garde les k premiers avec d[:k], puis on compte les classes dans un dictionnaire et on renvoie la plus fréquente.",
                "Le choix de k compte. Avec k = 1, la prédiction dépend d'un seul voisin : une donnée mal étiquetée ou atypique suffit à fausser le résultat. Avec un k trop grand, on finit par prendre en compte des données éloignées, et la classe la plus nombreuse dans la table l'emporte. Avec deux classes, on choisit souvent k impair pour éviter les égalités lors du vote.",
                "Le coût de l'algorithme est dominé par le calcul des n distances et par le tri de la liste des distances. L'algorithme ne « résume » pas la table : il doit la conserver en entier et refaire tous les calculs pour chaque nouvelle donnée.",
              ],
              box: { label: "À retenir", text: "Étapes : 1. calculer les distances à toutes les données ; 2. trier par distance croissante ; 3. garder les k premières ; 4. renvoyer la classe majoritaire. Le résultat dépend de k et de la distance choisie." },
            },
          ],
          keyPoints: [
            "k-NN prédit la classe d'une donnée par vote majoritaire parmi ses k plus proches voisins.",
            "Distance euclidienne : √((x₂ - x₁)² + (y₂ - y₁)²) ; distance de Manhattan : |x₂ - x₁| + |y₂ - y₁|.",
            "Étapes : calculer toutes les distances, trier, garder les k premières, compter les classes.",
            "k trop petit : sensible aux données atypiques ; k trop grand : la classe majoritaire de la table l'emporte.",
            "Avec deux classes, un k impair évite les égalités ; des caractéristiques d'échelles différentes doivent être normalisées.",
          ],
          example: {
            statement: "Une table contient six points classés (données fictives) : A1 (3, 4) classe A ; B1 (4, 2) classe B ; B2 (5, 3) classe B ; A2 (1, 4) classe A ; A3 (1, 1) classe A ; B3 (6, 5) classe B. Prédire la classe du point N (3, 3) avec k = 1, puis avec k = 3, en utilisant la distance euclidienne.",
            solution: [
              "Distances à N : A1, √(0² + 1²) = 1 ; B1, √(1² + 1²) = √2 ≈ 1,41 ; B2, √(2² + 0²) = 2.",
              "A2, √(2² + 1²) = √5 ≈ 2,24 ; A3, √(2² + 2²) = √8 ≈ 2,83 ; B3, √(3² + 2²) = √13 ≈ 3,61.",
              "Ordre croissant : A1 (1), B1 (1,41), B2 (2), A2 (2,24), A3 (2,83), B3 (3,61).",
              "k = 1 : le plus proche voisin est A1, la prédiction est A.",
              "k = 3 : les voisins sont A1, B1 et B2, soit une voix pour A et deux pour B : la prédiction est B.",
              "Réponse : N est classé A avec k = 1 et B avec k = 3 ; le choix de k change la prédiction.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la distance euclidienne et la distance de Manhattan entre les points P (1, 2) et Q (4, 6), puis entre R (-2, 3) et S (2, 0).",
              hint: "Calculez d'abord les écarts x₂ - x₁ et y₂ - y₁, puis appliquez chaque formule.",
              solution: [
                "P et Q : écarts 4 - 1 = 3 et 6 - 2 = 4.",
                "Euclidienne : √(3² + 4²) = √(9 + 16) = √25 = 5. Manhattan : 3 + 4 = 7.",
                "R et S : écarts 2 - (-2) = 4 et 0 - 3 = -3.",
                "Euclidienne : √(4² + (-3)²) = √(16 + 9) = 5. Manhattan : |4| + |-3| = 7.",
                "Résultat : distance euclidienne 5 et distance de Manhattan 7 dans les deux cas.",
              ],
            },
            {
              level: 2,
              statement: "Une table contient six points (données fictives) : R1 (0, 0), R2 (1, 2), R3 (2, 0) de classe rouge, et B1 (4, 3), B2 (6, 2), B3 (4, 6) de classe bleu. Prédire la classe du point N (3, 2) avec la distance euclidienne, pour k = 1, k = 3 et k = 5.",
              hint: "Calculez les six distances, rangez-les dans l'ordre croissant, puis comptez les classes parmi les k premiers.",
              solution: [
                "Distances : R1, √(9 + 4) = √13 ≈ 3,61 ; R2, √(4 + 0) = 2 ; R3, √(1 + 4) = √5 ≈ 2,24.",
                "B1, √(1 + 1) = √2 ≈ 1,41 ; B2, √(9 + 0) = 3 ; B3, √(1 + 16) = √17 ≈ 4,12.",
                "Ordre croissant : B1 (1,41), R2 (2), R3 (2,24), B2 (3), R1 (3,61), B3 (4,12).",
                "k = 1 : B1 seul, prédiction bleu. k = 3 : B1, R2, R3, soit 2 rouges contre 1 bleu, prédiction rouge.",
                "k = 5 : B1, R2, R3, B2, R1, soit 3 rouges contre 2 bleus, prédiction rouge.",
                "Résultat : bleu pour k = 1, rouge pour k = 3 et k = 5.",
              ],
            },
            {
              level: 3,
              statement: "On représente une table par une liste de triplets (x, y, classe). 1. Écrire une fonction distance(p, q) qui renvoie la distance euclidienne entre deux points p et q (on utilisera la fonction sqrt du module math). 2. Écrire une fonction kppv(table, nouveau, k) qui renvoie la classe majoritaire parmi les k plus proches voisins de nouveau, donné sous la forme (x, y). 3. Avec table = [(1, 1, 'chat'), (2, 1, 'chat'), (5, 5, 'chien'), (6, 5, 'chien'), (2, 2, 'chien')] (données fictives), que renvoie kppv(table, (1, 2), 3) ? 4. Pourquoi, avec deux classes, choisit-on de préférence un k impair ?",
              hint: "Construisez la liste des couples (distance, classe), triez-la, puis comptez les classes des k premiers couples dans un dictionnaire.",
              solution: [
                "1. from math import sqrt, puis def distance(p, q): return sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2).",
                "2. def kppv(table, nouveau, k): d = [(distance(p, nouveau), p[2]) for p in table] ; d.sort() ; compte = {} ; for (dist, c) in d[:k]: compte[c] = compte.get(c, 0) + 1.",
                "Suite de kppv, après la boucle : meilleure = None ; for c in compte: if meilleure is None or compte[c] > compte[meilleure]: meilleure = c. Enfin : return meilleure.",
                "3. Distances à (1, 2) : (1, 1) chat, 1 ; (2, 1) chat, √2 ≈ 1,41 ; (2, 2) chien, 1 ; (5, 5) chien, 5 ; (6, 5) chien, √34 ≈ 5,83.",
                "Après tri : (1, chat), (1, chien), (1,41, chat), (5, chien), (5,83, chien). Les 3 premiers donnent 2 chats et 1 chien : la fonction renvoie 'chat'.",
                "4. Avec deux classes et k impair, le vote ne peut pas être à égalité : l'une des deux classes a forcément la majorité.",
                "Résultat : kppv(table, (1, 2), 3) renvoie 'chat'.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'algorithme des k plus proches voisins.",
            items: [
              "Calculer la distance entre la nouvelle donnée et chaque donnée de la table",
              "Trier les données par distance croissante",
              "Garder les k premières données de la liste triée",
              "Compter combien de fois chaque classe apparaît parmi ces k voisins",
              "Attribuer à la nouvelle donnée la classe majoritaire",
            ],
          },
          quiz: [
            { q: "Quelle est la distance euclidienne entre (0, 0) et (6, 8) ?", options: ["14", "48", "100", "10"], answer: 3, why: "√(6² + 8²) = √(36 + 64) = √100 = 10." },
            { q: "Quelle est la distance de Manhattan entre (1, 5) et (4, 1) ?", options: ["5", "7", "25", "3"], answer: 1, why: "|4 - 1| + |1 - 5| = 3 + 4 = 7." },
            { q: "Parmi 5 voisins, 3 sont de classe A et 2 de classe B. Quelle classe prédit l'algorithme avec k = 5 ?", options: ["A", "B", "Aucune", "Les deux"], answer: 0, why: "La classe majoritaire parmi les 5 voisins est A, avec 3 voix contre 2." },
            { q: "Quel est le principal défaut d'un k égal à 1 ?", options: ["Le calcul des distances devient impossible à réaliser", "Une seule donnée atypique peut fausser la prédiction", "Il faut trier la table deux fois de suite avant le vote", "La distance ne peut plus être calculée"], answer: 1, why: "La prédiction repose sur un seul voisin : s'il est mal étiqueté ou atypique, elle est fausse." },
            { q: "Pourquoi normalise-t-on parfois les caractéristiques avant de calculer les distances ?", options: ["Pour trier la liste des distances plus rapidement", "Pour réduire le nombre de données à conserver dans la table", "Pour que chaque caractéristique pèse de façon comparable", "Pour rendre k impair"], answer: 2, why: "Des écarts en grammes de l'ordre de 100 domineraient des écarts en centimètres de l'ordre de 1 dans le calcul de la distance." },
          ],
          trap: "Croire que l'algorithme donne une réponse certaine : la prédiction dépend du choix de k, de la distance et de la qualité des données. Autre erreur fréquente : oublier de trier les distances avant de prendre les k premières.",
          method: "Pour appliquer k-NN à la main, construisez un tableau à trois colonnes (donnée, distance, classe), rangez les lignes par distance croissante, puis tracez un trait sous la k-ième ligne : il ne reste qu'à compter les classes au-dessus du trait.",
        },
      ],
    },
    /* ================================================================== */
    /* ARCHITECTURE DES MACHINES ET SYSTÈMES D'EXPLOITATION                 */
    /* ================================================================== */
    {
      id: 'architecture-os',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'von-neumann',
          title: 'Le modèle de von Neumann et le langage machine',
          minutes: 35,
          objectives: [
            "Distinguer les rôles et les caractéristiques des différents constituants d'une machine selon le modèle de von Neumann.",
            "Décrire le cycle d'exécution d'une instruction par le processeur.",
            "Dérouler l'exécution d'une séquence d'instructions simples du type langage machine.",
          ],
          course: [
            {
              heading: "Le modèle de von Neumann",
              paragraphs: [
                "En 1945, le mathématicien John von Neumann rédige, à partir des travaux de l'équipe qui construit l'ordinateur EDVAC aux États-Unis, un rapport qui décrit l'organisation d'un calculateur. Son idée principale : le programme est enregistré dans la même mémoire que les données, sous forme de nombres. On peut ainsi changer de programme sans recâbler la machine. Presque tous les ordinateurs actuels reprennent cette organisation.",
                "Le modèle comporte quatre parties. L'unité arithmétique et logique (UAL) effectue les calculs (addition, soustraction, comparaison, opérations logiques). L'unité de commande lit les instructions une à une, les décode et pilote les autres parties. La mémoire contient le programme et les données. Les dispositifs d'entrée et de sortie échangent des informations avec l'extérieur. L'UAL et l'unité de commande forment ensemble le processeur (CPU, Central Processing Unit).",
                "Ces parties communiquent par des bus, ensembles de fils qui transportent des signaux binaires : le bus de données transporte les valeurs, le bus d'adresses indique la case mémoire concernée, le bus de commande précise l'opération (lecture ou écriture). Comme instructions et données passent par le même chemin, ce transfert limite la vitesse : on parle de goulot d'étranglement de von Neumann.",
              ],
              box: { label: "Définition", text: "Modèle de von Neumann : un processeur (unité arithmétique et logique et unité de commande), une mémoire unique contenant programme et données, des entrées et sorties, reliés par des bus." },
            },
            {
              heading: "Registres, mémoires et cycle d'exécution",
              paragraphs: [
                "Le processeur contient de petites mémoires très rapides, les registres. Certains servent aux calculs (par exemple R0, R1, R2...). Deux registres jouent un rôle particulier : le compteur ordinal (ou compteur de programme) contient l'adresse de la prochaine instruction à exécuter, et le registre d'instruction contient l'instruction en cours.",
                "Les mémoires forment une hiérarchie : des registres (quelques octets, extrêmement rapides) à la mémoire cache, puis à la mémoire vive (RAM, plusieurs gigaoctets, volatile : son contenu disparaît sans alimentation), et enfin aux mémoires de masse (disque dur, SSD), lentes mais de très grande capacité et non volatiles. Plus une mémoire est rapide, plus elle est petite et coûteuse.",
                "Le processeur répète sans cesse le même cycle : il charge depuis la mémoire l'instruction dont l'adresse est dans le compteur ordinal, la décode, l'exécute (par exemple un calcul de l'UAL ou un transfert avec la mémoire), puis passe à l'instruction suivante. Le rythme est donné par une horloge, dont la fréquence se mesure en gigahertz. Depuis le milieu des années 2000, les processeurs grand public comportent plusieurs cœurs, capables d'exécuter plusieurs cycles en parallèle.",
              ],
              box: { label: "À retenir", text: "Cycle d'exécution : chargement de l'instruction pointée par le compteur ordinal, décodage, exécution, passage à l'instruction suivante. Le compteur ordinal contient l'adresse de la prochaine instruction." },
            },
            {
              heading: "Langage machine et langage d'assemblage",
              paragraphs: [
                "Le processeur n'exécute que des instructions codées en binaire, propres à sa famille : c'est le langage machine. Chaque instruction est un mot binaire qui contient un code d'opération (quelle action effectuer) et des opérandes (sur quels registres, quelle adresse, quelle valeur). Pour les rendre lisibles, on les écrit en langage d'assemblage, avec des mnémoniques comme ADD ou LOAD ; un programme, l'assembleur, les traduit en binaire. Un programme Python, lui, est traduit en une longue suite de telles instructions.",
                "Dans cette leçon, on utilise un langage d'assemblage simplifié. MOV R1, #5 : R1 reçoit la valeur 5. LOAD R0, 20 : R0 reçoit le contenu de la case mémoire d'adresse 20. STORE R2, 22 : la case 22 reçoit le contenu de R2. ADD R2, R0, R1 : R2 reçoit R0 + R1 (le dernier opérande peut être une valeur, comme #1). SUB R3, R0, R1 : R3 reçoit R0 - R1. HALT arrête le programme.",
                "Les sauts permettent les tests et les boucles. CMP R0, R1 compare R0 et R1. BEQ n saute à l'instruction numéro n si, lors du dernier CMP, les deux valeurs étaient égales ; BGT n saute si la première était strictement plus grande ; B n saute toujours. Un saut modifie simplement le compteur ordinal : au lieu de passer à l'instruction suivante, le processeur reprend à l'instruction n.",
              ],
              box: { label: "Repère", text: "Une instruction if ou while d'un langage de haut niveau devient, en langage machine, une comparaison (CMP) suivie d'un saut conditionnel (BEQ, BGT...) et, pour une boucle, d'un saut inconditionnel (B) vers le début." },
            },
          ],
          keyPoints: [
            "Modèle de von Neumann (1945) : programme et données sont rangés dans la même mémoire.",
            "Processeur = unité arithmétique et logique (calculs) + unité de commande (lecture, décodage, pilotage).",
            "Les bus de données, d'adresses et de commande relient processeur, mémoire et entrées-sorties.",
            "Le compteur ordinal contient l'adresse de la prochaine instruction ; un saut modifie sa valeur.",
            "Hiérarchie des mémoires : registres, cache, RAM (volatile), mémoires de masse (lentes, grande capacité).",
            "Langage machine : instructions binaires ; langage d'assemblage : la même chose écrite avec des mnémoniques.",
          ],
          example: {
            statement: "La case mémoire 20 contient 7 et la case 21 contient 4. On exécute : 0 LOAD R0, 20 ; 1 LOAD R1, 21 ; 2 ADD R2, R0, R1 ; 3 SUB R3, R0, R1 ; 4 STORE R2, 22 ; 5 STORE R3, 23 ; 6 HALT. Donner le contenu des registres et des cases 22 et 23 à la fin.",
            solution: [
              "Instruction 0 : R0 reçoit le contenu de la case 20, donc R0 = 7.",
              "Instruction 1 : R1 reçoit le contenu de la case 21, donc R1 = 4.",
              "Instruction 2 : R2 = R0 + R1 = 7 + 4 = 11.",
              "Instruction 3 : R3 = R0 - R1 = 7 - 4 = 3.",
              "Instructions 4 et 5 : la case 22 reçoit 11 et la case 23 reçoit 3. Instruction 6 : arrêt.",
              "Réponse : R0 = 7, R1 = 4, R2 = 11, R3 = 3 ; la case 22 contient 11 et la case 23 contient 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec le langage d'assemblage simplifié du cours (MOV Rd, #n : Rd reçoit n ; ADD Rd, Ra, Rb : Rd reçoit Ra + Rb ; STORE Rs, adr : la case adr reçoit Rs), on exécute : 0 MOV R0, #6 ; 1 MOV R1, #2 ; 2 ADD R0, R0, R1 ; 3 ADD R0, R0, R0 ; 4 STORE R0, 30 ; 5 HALT. Donner la valeur de R0 après chaque instruction et le contenu final de la case 30.",
              hint: "Dans ADD R0, R0, R1, l'ancienne valeur de R0 est lue avant d'être remplacée par le résultat.",
              solution: [
                "Après 0 : R0 = 6. Après 1 : R0 = 6 (R1 = 2).",
                "Après 2 : R0 = 6 + 2 = 8.",
                "Après 3 : R0 = 8 + 8 = 16.",
                "Après 4 : la case 30 reçoit 16. L'instruction 5 arrête le programme.",
                "Résultat : R0 vaut successivement 6, 6, 8, 16, et la case 30 contient 16.",
              ],
            },
            {
              level: 2,
              statement: "On utilise le langage du cours (LOAD, STORE, CMP Ra, Rb, BGT n : saut à l'instruction n si, lors du dernier CMP, Ra était strictement plus grand que Rb). Programme : 0 LOAD R0, 40 ; 1 LOAD R1, 41 ; 2 CMP R0, R1 ; 3 BGT 6 ; 4 STORE R1, 42 ; 5 HALT ; 6 STORE R0, 42 ; 7 HALT. 1. Dérouler le programme quand la case 40 contient 12 et la case 41 contient 17, en donnant la suite des valeurs du compteur ordinal. 2. Même question avec 20 et 9. 3. Que calcule ce programme ?",
              hint: "Le compteur ordinal passe normalement à l'instruction suivante ; il ne prend la valeur 6 que si le saut BGT est effectué.",
              solution: [
                "1. R0 = 12, R1 = 17. CMP : 12 > 17 est faux, donc BGT ne saute pas. On exécute 4 : la case 42 reçoit 17, puis 5 : arrêt.",
                "Compteur ordinal : 0, 1, 2, 3, 4, 5 (6 instructions exécutées).",
                "2. R0 = 20, R1 = 9. CMP : 20 > 9 est vrai, donc BGT saute à 6 : la case 42 reçoit 20, puis 7 : arrêt.",
                "Compteur ordinal : 0, 1, 2, 3, 6, 7 (6 instructions exécutées ; 4 et 5 sont sautées).",
                "3. La case 42 reçoit la plus grande des deux valeurs : le programme calcule le maximum des cases 40 et 41, comme if a > b: m = a, else: m = b en Python.",
                "Résultat : 17 dans le premier cas, 20 dans le second ; le programme calcule un maximum.",
              ],
            },
            {
              level: 3,
              statement: "La case 100 contient 5 et la case 101 contient 3. On exécute, avec le langage du cours (BEQ n : saut à n si, lors du dernier CMP, les deux valeurs étaient égales ; B n : saut inconditionnel à n) : 0 LOAD R0, 100 ; 1 LOAD R1, 101 ; 2 MOV R2, #0 ; 3 MOV R3, #0 ; 4 CMP R3, R1 ; 5 BEQ 9 ; 6 ADD R2, R2, R0 ; 7 ADD R3, R3, #1 ; 8 B 4 ; 9 STORE R2, 102 ; 10 HALT. 1. Dérouler le programme en donnant R2 et R3 à chaque passage par l'instruction 4. 2. Quel est le contenu final de la case 102 ? Que calcule ce programme ? 3. Combien d'instructions sont exécutées au total ? 4. Écrire un programme Python équivalent avec une boucle while.",
              hint: "Les instructions 4 à 8 forment une boucle : repérez la condition de sortie (BEQ 9) et la variable qui compte les tours.",
              solution: [
                "1. Au départ R0 = 5, R1 = 3, R2 = 0, R3 = 0. Passages par 4 : (R2, R3) = (0, 0), puis (5, 1), puis (10, 2), puis (15, 3).",
                "Aux trois premiers passages, R3 ≠ R1 : on exécute 6, 7 et 8. Au quatrième, R3 = R1 = 3 : BEQ saute à 9.",
                "2. L'instruction 9 range R2 = 15 dans la case 102. Le programme calcule 5 × 3 = 15 par additions répétées : il ajoute R0 à R2, R1 fois.",
                "3. Instructions 0 à 3 : 4 ; trois tours complets de 4 à 8 : 3 × 5 = 15 ; dernier passage par 4 et 5 : 2 ; instructions 9 et 10 : 2. Total : 4 + 15 + 2 + 2 = 23.",
                "4. a = 5 ; b = 3 ; r = 0 ; i = 0 ; while i != b: r = r + a ; i = i + 1. Après la boucle : resultat = r.",
                "Résultat : la case 102 contient 15 = 5 × 3, après 23 instructions exécutées.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle d'exécution d'une instruction.",
            items: [
              "Le compteur ordinal indique l'adresse de l'instruction à exécuter",
              "L'instruction est lue en mémoire et copiée dans le registre d'instruction",
              "L'unité de commande décode l'instruction",
              "L'instruction est exécutée, par exemple un calcul de l'unité arithmétique et logique",
              "Le cycle recommence avec l'instruction suivante",
            ],
          },
          quiz: [
            { q: "Quelle est l'idée principale du modèle de von Neumann ?", options: ["Le programme et les données sont rangés dans la même mémoire", "Chaque programme possède son propre processeur et sa propre mémoire", "Les données sont stockées uniquement sur le disque dur, jamais en mémoire", "Le processeur ne fait que des additions"], answer: 0, why: "Le programme enregistré en mémoire, comme les données, permet de changer de programme sans modifier la machine." },
            { q: "Que contient le compteur ordinal ?", options: ["Le nombre d'instructions déjà exécutées", "Le résultat du dernier calcul", "L'adresse de la prochaine instruction", "La fréquence de l'horloge"], answer: 2, why: "Il indique où lire la prochaine instruction ; un saut modifie sa valeur." },
            { q: "Quelle mémoire est volatile ?", options: ["Le disque dur", "La RAM", "Le SSD", "La clé USB"], answer: 1, why: "Le contenu de la RAM disparaît quand l'alimentation est coupée, contrairement aux mémoires de masse." },
            { q: "Après MOV R0, #4 puis ADD R0, R0, #3, que vaut R0 ?", options: ["4", "3", "12", "7"], answer: 3, why: "R0 reçoit 4, puis R0 + 3 = 7." },
            { q: "Quelle partie du processeur effectue les additions et les comparaisons ?", options: ["Le bus de données", "L'UAL", "L'unité de commande", "La mémoire cache"], answer: 1, why: "L'UAL réalise les opérations arithmétiques et logiques ; l'unité de commande pilote leur enchaînement." },
          ],
          trap: "Confondre l'unité de commande, qui lit, décode et enchaîne les instructions, avec l'unité arithmétique et logique, qui effectue les calculs. Autre erreur fréquente : oublier qu'un saut conditionnel non effectué laisse le compteur ordinal passer simplement à l'instruction suivante.",
          method: "Pour dérouler un programme en langage d'assemblage, construisez un tableau avec une colonne pour le compteur ordinal, une par registre et une par case mémoire utilisée. Écrivez une ligne par instruction exécutée, sans sauter d'étape, surtout dans les boucles.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-exploitation',
          title: 'Le système d’exploitation et la ligne de commande',
          minutes: 35,
          objectives: [
            "Identifier les fonctions d'un système d'exploitation.",
            "Utiliser les commandes de base en ligne de commande.",
            "Gérer les droits et permissions d'accès aux fichiers.",
          ],
          course: [
            {
              heading: "Le rôle du système d'exploitation",
              paragraphs: [
                "Le système d'exploitation (OS, Operating System) est le logiciel qui fait l'intermédiaire entre le matériel et les autres programmes. Il démarre en premier et reste actif en permanence. Il gère le processeur (il partage son temps entre les programmes en cours, appelés processus), la mémoire (il attribue à chaque processus une zone de mémoire et l'isole des autres), les fichiers (il les organise en une arborescence de répertoires) et les périphériques (il communique avec eux par des programmes appelés pilotes).",
                "Il assure aussi la sécurité : il gère les comptes des utilisateurs et contrôle qui a le droit de lire, de modifier ou d'exécuter chaque fichier. Enfin, il offre une interface, graphique (fenêtres, icônes) ou textuelle (ligne de commande). Grâce à lui, un programmeur n'a pas à connaître le détail du matériel : il demande au système d'ouvrir un fichier ou d'afficher une fenêtre.",
              ],
              box: { label: "Définition", text: "Le système d'exploitation gère les ressources de la machine (processeur, mémoire, fichiers, périphériques) et les met à disposition des programmes et des utilisateurs, en contrôlant les droits d'accès." },
            },
            {
              heading: "Systèmes libres et propriétaires",
              paragraphs: [
                "Le système Unix est créé en 1969 aux laboratoires Bell (AT&T) par Ken Thompson et Dennis Ritchie. En 1983, Richard Stallman lance le projet GNU, qui vise à écrire un système de type Unix entièrement libre. En 1991, Linus Torvalds crée le noyau Linux ; associé aux outils GNU, il forme les systèmes GNU/Linux (distributions Debian, Ubuntu, Fedora...). Le système Android est lui aussi construit sur le noyau Linux.",
                "Un logiciel libre peut être utilisé, étudié, modifié et redistribué librement : son code source est accessible. Un logiciel propriétaire limite ces droits ; son code source n'est en général pas public. Windows (Microsoft) et macOS ou iOS (Apple) sont des systèmes propriétaires ; macOS est dérivé d'Unix. Les systèmes GNU/Linux dominent sur les serveurs et les superordinateurs.",
              ],
            },
            {
              heading: "La ligne de commande",
              paragraphs: [
                "Dans un terminal, on tape des commandes interprétées par un programme appelé shell (par exemple bash). Les fichiers sont rangés dans une arborescence dont la racine se note /. Le répertoire personnel de l'utilisatrice alice est /home/alice, abrégé ~. Un chemin absolu part de la racine (/home/alice/nsi/tp1.py) ; un chemin relatif part du répertoire courant (nsi/tp1.py). Le répertoire courant se note . et le répertoire parent se note ..",
                "Commandes de base : pwd affiche le répertoire courant ; ls liste son contenu (ls -l avec les détails) ; cd nsi entre dans le répertoire nsi, cd .. remonte d'un niveau ; mkdir projet crée un répertoire ; touch notes.txt crée un fichier vide ; cat notes.txt affiche le contenu d'un fichier ; cp a.txt b.txt copie ; mv a.txt docs/ déplace, et mv a.txt b.txt renomme ; rm a.txt supprime un fichier ; rmdir supprime un répertoire vide ; man ls affiche le manuel d'une commande.",
                "La commande rm supprime définitivement : il n'y a pas de corbeille dans le terminal. Avec rm -r, on supprime un répertoire et tout son contenu : une erreur de chemin peut effacer beaucoup de fichiers. On vérifie toujours le répertoire courant avec pwd avant une suppression.",
              ],
              box: { label: "À retenir", text: "pwd (où suis-je), ls (contenu), cd (se déplacer), mkdir (créer un répertoire), cp (copier), mv (déplacer ou renommer), rm (supprimer, sans corbeille), cat (afficher), chmod (changer les droits)." },
            },
            {
              heading: "Droits et permissions",
              paragraphs: [
                "Chaque fichier appartient à un utilisateur (son propriétaire) et à un groupe. Trois droits existent : r (read, lire), w (write, modifier), x (execute, exécuter un programme ; pour un répertoire, le traverser). Ils sont attribués à trois catégories : le propriétaire (u, user), le groupe (g, group) et les autres (o, others). La commande ls -l les affiche : dans -rwxr-x--- alice eleves script.sh, le premier caractère indique le type (- pour un fichier, d pour un répertoire), puis viennent trois triplets : rwx pour alice, r-x pour le groupe eleves, --- pour les autres.",
                "La commande chmod modifie les droits. En notation symbolique : chmod u+x script.sh ajoute l'exécution au propriétaire, chmod o-r notes.txt retire la lecture aux autres. En notation octale, chaque triplet est un chiffre obtenu en additionnant r = 4, w = 2, x = 1 : rwx = 7, r-x = 5, r-- = 4, --- = 0. Ainsi chmod 750 script.sh donne rwxr-x---, et chmod 644 notes.txt donne rw-r--r--. L'administrateur (root) possède tous les droits sur le système.",
              ],
              box: { label: "Règle", text: "Notation octale : r = 4, w = 2, x = 1, un chiffre par catégorie dans l'ordre propriétaire, groupe, autres. 755 = rwxr-xr-x ; 644 = rw-r--r-- ; 700 = rwx------." },
            },
          ],
          keyPoints: [
            "L'OS gère processeur (processus), mémoire, fichiers, périphériques (pilotes) et droits des utilisateurs.",
            "Unix (1969), projet GNU (1983), noyau Linux (1991) ; Windows et macOS sont propriétaires.",
            "Chemin absolu : depuis la racine / ; chemin relatif : depuis le répertoire courant ; .. désigne le parent.",
            "Commandes : pwd, ls, cd, mkdir, touch, cat, cp, mv, rm, rmdir, chmod, man.",
            "Droits r, w, x pour le propriétaire (u), le groupe (g) et les autres (o).",
            "Notation octale : r = 4, w = 2, x = 1 ; chmod 750 donne rwxr-x---.",
          ],
          example: {
            statement: "La commande ls -l affiche la ligne simplifiée -rw-r--r-- alice eleves rapport.txt. 1. Interpréter les droits et les écrire en notation octale. 2. Quelle commande permet de donner les droits rwxr-x--- à ce fichier ? 3. Qui peut alors lire le fichier ?",
            solution: [
              "Le premier caractère, -, indique un fichier ordinaire (et non un répertoire).",
              "rw- : alice, propriétaire, peut lire et modifier ; r-- : les membres du groupe eleves peuvent seulement lire ; r-- : les autres peuvent seulement lire.",
              "Octal : rw- = 4 + 2 = 6, r-- = 4, r-- = 4, soit 644.",
              "rwx = 4 + 2 + 1 = 7, r-x = 4 + 1 = 5, --- = 0 : la commande est chmod 750 rapport.txt.",
              "Après cette commande, alice et les membres du groupe eleves peuvent lire le fichier ; les autres utilisateurs ne le peuvent plus.",
              "Réponse : droits 644 au départ ; chmod 750 rapport.txt ; seuls alice et le groupe eleves peuvent ensuite le lire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une utilisatrice se trouve dans /home/alice. Elle tape successivement : mkdir nsi, cd nsi, mkdir tp1, cd tp1, pwd, cd ../.., pwd. Qu'affichent les deux commandes pwd ?",
              hint: "Chaque cd modifie le répertoire courant ; .. remonte d'un niveau dans l'arborescence.",
              solution: [
                "mkdir nsi crée /home/alice/nsi ; cd nsi fait de ce répertoire le répertoire courant.",
                "mkdir tp1 crée /home/alice/nsi/tp1 ; cd tp1 y entre. Le premier pwd affiche /home/alice/nsi/tp1.",
                "cd ../.. remonte de deux niveaux : de tp1 à nsi, puis de nsi à alice. Le second pwd affiche /home/alice.",
                "Résultat : /home/alice/nsi/tp1, puis /home/alice.",
              ],
            },
            {
              level: 2,
              statement: "1. Écrire en notation octale les droits rwxr-x--x et rw-rw-r--. 2. Écrire en notation symbolique les droits 640 et 755. 3. Un fichier a les droits rw-r--r--. Quels droits obtient-on après chmod u+x, puis après chmod go-r ? Donner le résultat en notation symbolique et octale.",
              hint: "Additionnez r = 4, w = 2 et x = 1 dans chaque triplet, dans l'ordre propriétaire, groupe, autres.",
              solution: [
                "1. rwx = 7, r-x = 5, --x = 1, donc 751. rw- = 6, rw- = 6, r-- = 4, donc 664.",
                "2. 640 : 6 = rw-, 4 = r--, 0 = ---, donc rw-r-----. 755 : rwxr-xr-x.",
                "3. chmod u+x ajoute x au propriétaire : rwxr--r--, soit 744.",
                "Puis chmod go-r retire r au groupe et aux autres : rwx------, soit 700.",
                "Résultat : 751, 664, rw-r-----, rwxr-xr-x ; puis 744 et enfin 700.",
              ],
            },
            {
              level: 3,
              statement: "Un élève se trouve dans son répertoire /home/eleve, qui contient un répertoire docs dans lequel se trouve le fichier notes.txt. Il tape successivement : 1) mkdir projet ; 2) cp docs/notes.txt projet/ ; 3) mv projet/notes.txt projet/bilan.txt ; 4) cd projet ; 5) ls ; 6) chmod 640 bilan.txt ; 7) rm ../docs/notes.txt. Questions : a) Donner le chemin absolu de bilan.txt. b) Qu'affiche la commande 5 ? c) Interpréter les droits de bilan.txt après la commande 6. d) Que contient le répertoire docs après la commande 7 ? Pourquoi faut-il être prudent avec rm ? e) Quelle commande ajoute le droit d'exécution au seul propriétaire d'un fichier script.sh ?",
              hint: "Suivez l'arborescence étape par étape sur un schéma, en notant le répertoire courant après chaque cd.",
              solution: [
                "a) Les commandes 2 et 3 créent une copie de notes.txt dans projet, puis la renomment : le chemin absolu est /home/eleve/projet/bilan.txt.",
                "b) Le répertoire courant est /home/eleve/projet, qui contient seulement bilan.txt : ls affiche bilan.txt.",
                "c) 640 = rw-r----- : le propriétaire peut lire et modifier, le groupe peut seulement lire, les autres n'ont aucun droit.",
                "d) Depuis /home/eleve/projet, ../docs/notes.txt désigne /home/eleve/docs/notes.txt, qui est supprimé : docs est vide. La copie bilan.txt subsiste.",
                "rm efface définitivement, sans corbeille ni confirmation : une erreur de chemin ne se rattrape pas, d'où l'intérêt de vérifier avec pwd et ls avant.",
                "e) chmod u+x script.sh.",
                "Résultat : /home/eleve/projet/bilan.txt, affichage bilan.txt, droits rw-r-----, docs vide, chmod u+x script.sh.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque commande à son effet.",
            pairs: [
              { left: "pwd", right: "Affiche le chemin du répertoire courant" },
              { left: "cd ..", right: "Remonte au répertoire parent" },
              { left: "mkdir projet", right: "Crée un répertoire nommé projet" },
              { left: "mv a.txt b.txt", right: "Renomme le fichier a.txt en b.txt" },
              { left: "rm a.txt", right: "Supprime définitivement le fichier a.txt" },
              { left: "chmod 755 run.sh", right: "Donne les droits rwxr-xr-x au fichier run.sh" },
            ],
          },
          quiz: [
            { q: "Quelle n'est pas une fonction d'un système d'exploitation ?", options: ["Gérer la mémoire des processus", "Contrôler les droits d'accès aux fichiers", "Corriger les fautes d'orthographe d'un texte", "Communiquer avec les périphériques grâce aux pilotes"], answer: 2, why: "La correction orthographique est le rôle d'une application ; l'OS gère les ressources de la machine." },
            { q: "Quels droits correspondent à chmod 754 ?", options: ["rwxr-xr--", "rwxrw-r--", "rw-r-xr--", "rwxr--r-x"], answer: 0, why: "7 = rwx, 5 = r-x, 4 = r-- : rwxr-xr--." },
            { q: "Depuis /home/alice/nsi, quel chemin désigne /home/alice/photos ?", options: ["photos", "/photos", "../photos", "/alice/photos"], answer: 2, why: ".. remonte à /home/alice, qui contient photos." },
            { q: "Qui a créé le noyau Linux en 1991 ?", options: ["Richard Stallman", "Ken Thompson", "Bill Gates", "Linus Torvalds"], answer: 3, why: "Linus Torvalds a créé le noyau Linux ; Richard Stallman a lancé le projet GNU en 1983." },
            { q: "Pour un répertoire, que permet le droit x ?", options: ["Le supprimer", "Le traverser pour accéder à son contenu", "Le copier sur une clé USB ou un autre support", "L'exécuter comme un programme"], answer: 1, why: "Sur un répertoire, x autorise à y entrer et à accéder aux fichiers qu'il contient." },
          ],
          trap: "Confondre l'ordre des triplets ou les valeurs octales : dans chmod 640, le 6 concerne le propriétaire, le 4 le groupe et le 0 les autres. Autre erreur fréquente : confondre chemin absolu (qui commence par /) et chemin relatif.",
          method: "Pour convertir des droits, écrivez sous chaque triplet les poids 4, 2, 1 et additionnez ceux dont la lettre est présente. Pour suivre une suite de commandes, dessinez l'arborescence et marquez d'une flèche le répertoire courant après chaque cd.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'peripheriques-capteurs',
          title: 'Périphériques, capteurs et actionneurs',
          minutes: 30,
          objectives: [
            "Distinguer les périphériques d'entrée, de sortie et d'entrée-sortie.",
            "Identifier le rôle des capteurs et des actionneurs.",
            "Réaliser par programmation une interface homme-machine répondant à un cahier des charges donné.",
          ],
          course: [
            {
              heading: "Les périphériques",
              paragraphs: [
                "Un périphérique est un dispositif relié à l'unité centrale qui lui permet d'échanger des informations avec l'extérieur. Un périphérique d'entrée envoie des informations vers l'ordinateur (clavier, souris, microphone, webcam, scanner) ; un périphérique de sortie en reçoit (écran, imprimante, haut-parleur) ; un périphérique d'entrée-sortie fait les deux (écran tactile, disque dur externe, clé USB, carte réseau).",
                "Les périphériques se branchent sur des ports (USB, HDMI...) ou communiquent sans fil (Bluetooth, Wi-Fi). Chacun possède un contrôleur, circuit qui traduit les signaux, et le système d'exploitation dialogue avec lui grâce à un pilote. Pour savoir qu'un périphérique a une donnée à transmettre (touche enfoncée, paquet reçu), le processeur peut l'interroger régulièrement (scrutation) ou être prévenu par un signal, appelé interruption, qui lui fait suspendre son travail pour traiter l'événement.",
              ],
              box: { label: "Définition", text: "Périphérique d'entrée : envoie des données à l'ordinateur. Périphérique de sortie : reçoit des données de l'ordinateur. Périphérique d'entrée-sortie : fait les deux." },
            },
            {
              heading: "Capteurs et actionneurs",
              paragraphs: [
                "Les objets connectés, les robots et les systèmes embarqués (dans une voiture, un lave-linge, un thermostat) interagissent avec le monde physique. Un capteur mesure une grandeur physique (température, luminosité, distance, accélération, pression d'un bouton) et la transforme en un signal électrique exploitable. Un actionneur agit sur le monde physique à partir d'une commande électrique : un moteur, une LED, un buzzer, une électrovanne, un servomoteur.",
                "Le signal d'un capteur est souvent analogique : une tension qui varie de façon continue. Un convertisseur analogique-numérique (CAN) le transforme en un nombre entier. Sur n bits, il peut produire 2ⁿ valeurs différentes : 256 valeurs sur 8 bits (de 0 à 255), 1 024 sur 10 bits (de 0 à 1 023). Plus le nombre de bits est grand, plus la mesure est fine.",
                "Un système embarqué fonctionne selon une chaîne : le capteur acquiert l'information, le microcontrôleur (petit ordinateur sur une seule puce) la traite selon son programme, l'actionneur agit. Le programme tourne en boucle : lire les capteurs, décider, commander les actionneurs, attendre un peu, et recommencer.",
              ],
              box: { label: "À retenir", text: "Capteur : grandeur physique vers signal (entrée). Actionneur : commande vers action physique (sortie). Chaîne : capteur, traitement par le microcontrôleur, actionneur." },
            },
            {
              heading: "Programmer une interface homme-machine",
              paragraphs: [
                "Une interface homme-machine (IHM) est l'ensemble des moyens qui permettent à une personne d'interagir avec une machine : boutons, écran, voyants, sons. Un cahier des charges décrit ce que l'interface doit faire : « quand on appuie sur le bouton A, afficher la température ; quand on appuie sur le bouton B, afficher un cœur ». Le programmeur traduit chaque exigence en une condition sur les capteurs et une action sur les sorties.",
                "La carte BBC micro:bit, souvent utilisée au lycée, se programme en Python (MicroPython). Elle possède deux boutons, un capteur de température, un accéléromètre et une matrice de 25 LED. Programme répondant au cahier des charges ci-dessus : from microbit import * ; while True: if button_a.was_pressed(): display.scroll(str(temperature())) ; if button_b.was_pressed(): display.show(Image.HEART) ; sleep(100). La pause de 100 millisecondes évite d'occuper le processeur inutilement.",
                "Pour éviter qu'un actionneur ne change d'état sans arrêt autour d'un seuil (un chauffage qui s'allume et s'éteint chaque seconde vers 20 °C), on utilise souvent deux seuils : on allume en dessous de 19 °C, on éteint au-dessus de 21 °C, et on ne change rien entre les deux.",
              ],
            },
          ],
          keyPoints: [
            "Périphériques d'entrée (clavier, souris), de sortie (écran, imprimante), d'entrée-sortie (écran tactile, clé USB).",
            "Le système d'exploitation communique avec les périphériques grâce à des pilotes ; un périphérique peut signaler un événement par une interruption.",
            "Un capteur mesure une grandeur physique ; un actionneur agit sur le monde physique.",
            "Un CAN sur n bits fournit 2ⁿ valeurs : 256 sur 8 bits, 1 024 sur 10 bits.",
            "Programme embarqué : une boucle sans fin qui lit les capteurs, décide et commande les actionneurs.",
          ],
          example: {
            statement: "Cahier des charges pour une carte micro:bit : quand on appuie sur le bouton A, afficher la température ; quand on appuie sur le bouton B, afficher un cœur. 1. Identifier les capteurs et les sorties utilisés. 2. Écrire le programme. 3. Expliquer le rôle de la boucle while True.",
            solution: [
              "1. Capteurs (entrées) : les boutons A et B et le capteur de température. Sortie : la matrice de LED, qui affiche le texte ou l'image.",
              "2. from microbit import *, puis while True: if button_a.was_pressed(): display.scroll(str(temperature())).",
              "Toujours dans la boucle : if button_b.was_pressed(): display.show(Image.HEART), puis sleep(100).",
              "temperature() renvoie un entier ; str le convertit en texte, car display.scroll fait défiler une chaîne de caractères.",
              "3. La boucle while True répète indéfiniment la lecture des boutons : le programme doit réagir à tout moment, tant que la carte est alimentée.",
              "Réponse : boutons et capteur de température en entrée, matrice de LED en sortie, et une boucle infinie qui teste les boutons toutes les 100 ms.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer les éléments suivants en périphériques d'entrée, de sortie ou d'entrée-sortie : clavier, écran, imprimante, microphone, clé USB, webcam, haut-parleur, écran tactile. Classer ensuite en capteurs ou actionneurs : thermomètre électronique, moteur, capteur de distance à ultrasons, LED, buzzer, bouton-poussoir.",
              hint: "Demandez-vous dans quel sens circule l'information : vers l'ordinateur, depuis l'ordinateur, ou dans les deux sens.",
              solution: [
                "Entrée : clavier, microphone, webcam.",
                "Sortie : écran, imprimante, haut-parleur.",
                "Entrée-sortie : clé USB (on y lit et on y écrit), écran tactile (il affiche et détecte le toucher).",
                "Capteurs : thermomètre électronique, capteur de distance à ultrasons, bouton-poussoir.",
                "Actionneurs : moteur, LED, buzzer.",
              ],
            },
            {
              level: 2,
              statement: "Un capteur de température est relié à un convertisseur analogique-numérique sur 8 bits. La valeur 0 correspond à 0 °C et la valeur 255 à 51 °C, la relation étant proportionnelle (données fictives). 1. Combien de valeurs différentes le convertisseur peut-il produire ? 2. À quel écart de température correspond une unité ? 3. Quelle température correspond à la valeur lue 120 ? 4. Quelle valeur lit-on pour 30 °C ? 5. Combien de valeurs aurait-on avec un convertisseur sur 10 bits ?",
              hint: "Sur n bits, on peut coder 2ⁿ valeurs. Une unité vaut 51 °C divisé par 255.",
              solution: [
                "1. 2⁸ = 256 valeurs, de 0 à 255.",
                "2. Une unité correspond à 51 / 255 = 0,2 °C.",
                "3. 120 × 0,2 = 24 °C.",
                "4. 30 / 0,2 = 150.",
                "5. 2¹⁰ = 1 024 valeurs : la mesure serait environ quatre fois plus fine.",
                "Résultat : 256 valeurs, 0,2 °C par unité, 24 °C pour 120, valeur 150 pour 30 °C, 1 024 valeurs sur 10 bits.",
              ],
            },
            {
              level: 3,
              statement: "On programme le système d'aération d'une serre. On dispose d'une bibliothèque fictive serre qui fournit : lire_temperature() (renvoie la température en °C), ouvrir_fenetre(), fermer_fenetre() et attendre(ms). Cahier des charges : si la température dépasse 30 °C, ouvrir la fenêtre ; si elle descend sous 25 °C, la fermer ; entre les deux, ne rien changer. La température est relevée toutes les minutes. 1. Identifier le capteur et l'actionneur. 2. Écrire le programme. 3. La fenêtre étant fermée au départ, on relève successivement 24, 28, 31, 29, 26, 24 °C. Indiquer l'état de la fenêtre après chaque relevé. 4. Pourquoi utilise-t-on deux seuils plutôt qu'un seul ?",
              hint: "Dans la boucle, écrivez deux tests indépendants : l'un pour la température haute, l'autre pour la température basse.",
              solution: [
                "1. Capteur : le capteur de température (lire_temperature). Actionneur : le moteur de la fenêtre (ouvrir_fenetre, fermer_fenetre).",
                "2. from serre import *, puis while True: t = lire_temperature() ; if t > 30: ouvrir_fenetre() ; elif t < 25: fermer_fenetre(). Enfin, toujours dans la boucle : attendre(60000).",
                "3. 24 °C : moins de 25, on ferme (elle l'était déjà) : fermée. 28 °C : entre les seuils, rien ne change : fermée.",
                "31 °C : plus de 30, on ouvre : ouverte. 29 °C puis 26 °C : entre les seuils : ouverte.",
                "24 °C : moins de 25, on ferme : fermée.",
                "4. Avec un seul seuil, par exemple 28 °C, une température qui oscille autour de 28 °C ferait ouvrir et fermer la fenêtre sans arrêt, ce qui use le moteur. L'écart entre les deux seuils stabilise le système.",
                "Résultat : fermée, fermée, ouverte, ouverte, ouverte, fermée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : périphériques, capteurs et actionneurs.",
            statements: [
              { text: "Un écran tactile est un périphérique d'entrée-sortie.", true: true, why: "Il affiche des informations (sortie) et détecte le toucher (entrée)." },
              { text: "Un moteur est un capteur.", true: false, why: "Il agit sur le monde physique à partir d'une commande : c'est un actionneur." },
              { text: "Un convertisseur sur 10 bits fournit 1 024 valeurs différentes.", true: true, why: "2¹⁰ = 1 024, de 0 à 1 023." },
              { text: "Un pilote est un circuit électronique soudé sur la carte mère.", true: false, why: "Un pilote est un logiciel qui permet au système d'exploitation de dialoguer avec un périphérique." },
              { text: "Un bouton-poussoir est un capteur.", true: true, why: "Il transforme une action physique (l'appui) en signal électrique." },
              { text: "Le programme d'un système embarqué s'arrête dès qu'il a lu une première fois ses capteurs.", true: false, why: "Il tourne en boucle pour réagir en permanence aux changements." },
              { text: "Une interruption permet à un périphérique de signaler un événement au processeur.", true: true, why: "Le processeur suspend alors son travail pour traiter l'événement, puis le reprend." },
            ],
          },
          quiz: [
            { q: "Lequel de ces dispositifs est un actionneur ?", options: ["Un thermomètre électronique", "Un buzzer", "Un accéléromètre", "Un capteur de luminosité"], answer: 1, why: "Le buzzer produit un son sur commande : il agit sur le monde physique." },
            { q: "Combien de valeurs un convertisseur analogique-numérique sur 8 bits peut-il produire ?", options: ["8", "255", "256", "512"], answer: 2, why: "2⁸ = 256 valeurs, numérotées de 0 à 255." },
            { q: "Quel est le rôle d'un pilote de périphérique ?", options: ["Faire dialoguer le système et le périphérique", "Alimenter le périphérique en électricité", "Accélérer le processeur lors des calculs", "Stocker les fichiers personnels de l'utilisateur"], answer: 0, why: "Le pilote est le logiciel qui traduit les demandes du système en commandes comprises par le périphérique." },
            { q: "Pourquoi le programme d'une carte micro:bit est-il souvent écrit dans une boucle while True ?", options: ["Pour économiser la mémoire", "Pour éviter les erreurs de syntaxe", "Pour accélérer l'affichage sur la matrice de LED", "Pour réagir en permanence aux capteurs"], answer: 3, why: "La boucle répète sans fin la lecture des capteurs et la commande des sorties." },
            { q: "Une clé USB est un périphérique :", options: ["d'entrée seulement", "de sortie seulement", "d'entrée-sortie", "qui n'est pas un périphérique"], answer: 2, why: "On peut y lire et y écrire des données." },
          ],
          trap: "Confondre capteur et actionneur en se fiant à l'objet plutôt qu'au sens de l'information : un capteur transforme une grandeur physique en signal pour la machine, un actionneur transforme une commande de la machine en action physique.",
          method: "Face à un cahier des charges, écrivez d'abord un tableau à trois colonnes : la condition (que mesure-t-on ?), le capteur utilisé, l'action et l'actionneur commandé. Chaque ligne devient un if dans la boucle du programme. Testez ensuite le programme sur une suite de valeurs, comme dans un déroulé.",
        },
      ],
    },
    /* ================================================================== */
    /* LES RÉSEAUX                                                          */
    /* ================================================================== */
    {
      id: 'reseaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'paquets-protocoles',
          title: 'Transmettre des données : paquets, adresses, protocoles',
          minutes: 35,
          objectives: [
            "Mettre en évidence l'intérêt du découpage des données en paquets et de leur encapsulation.",
            "Identifier le rôle des adresses IP et MAC, du masque de sous-réseau et des équipements d'un réseau.",
            "Distinguer les rôles des protocoles IP, TCP et UDP dans un modèle en couches.",
          ],
          course: [
            {
              heading: "Découper les données en paquets",
              paragraphs: [
                "Un réseau informatique relie des machines qui échangent des données ; Internet est un réseau de réseaux. Pour envoyer un fichier, on ne l'expédie pas d'un bloc : on le découpe en petits morceaux, les paquets, qui voyagent indépendamment les uns des autres et sont réassemblés à l'arrivée. On parle de commutation de paquets.",
                "Ce découpage présente plusieurs avantages. Un même câble est partagé entre de nombreuses communications, dont les paquets s'intercalent. Si un paquet est perdu ou abîmé, on ne renvoie que ce paquet, pas tout le fichier. Si une liaison tombe en panne, les paquets suivants peuvent emprunter un autre chemin. En contrepartie, les paquets peuvent arriver dans le désordre ou se perdre : il faut des règles pour les numéroter, les remettre en ordre et redemander ceux qui manquent.",
              ],
              box: { label: "Définition", text: "Un protocole est un ensemble de règles qui fixent le format des messages échangés et la façon de les échanger (qui parle, dans quel ordre, que faire en cas d'erreur)." },
            },
            {
              heading: "Des couches et l'encapsulation",
              paragraphs: [
                "La communication est organisée en couches, chacune rendant un service à la couche du dessus. Le modèle utilisé sur Internet, dit TCP/IP, en compte quatre. La couche application contient les protocoles des logiciels (HTTP pour le Web, DNS pour les noms de domaine, SMTP pour le courrier). La couche transport (TCP ou UDP) découpe les données et les fait parvenir au bon programme, repéré par un numéro de port (80 pour HTTP, 443 pour HTTPS).",
                "La couche internet (protocole IP) achemine chaque paquet de proche en proche jusqu'à la machine destinataire, grâce aux adresses IP. La couche accès réseau (Ethernet, Wi-Fi) transmet les données sur le support physique jusqu'à la machine voisine, grâce aux adresses MAC. Le modèle théorique OSI, plus détaillé, compte sept couches.",
                "À l'envoi, chaque couche ajoute à ce qu'elle reçoit un en-tête contenant ses propres informations : c'est l'encapsulation, comme une lettre glissée dans une enveloppe, elle-même placée dans un colis. Le segment TCP contient les ports ; le paquet IP ajoute les adresses IP ; la trame Ethernet ajoute les adresses MAC. À la réception, chaque couche retire son en-tête et transmet le contenu à la couche supérieure : c'est la désencapsulation.",
              ],
              box: { label: "À retenir", text: "Application (HTTP, DNS), transport (TCP, UDP : ports), internet (IP : adresses IP), accès réseau (Ethernet, Wi-Fi : adresses MAC). Chaque couche ajoute son en-tête à l'envoi et le retire à la réception." },
            },
            {
              heading: "Adresses et équipements",
              paragraphs: [
                "Une adresse IPv4 est un nombre de 32 bits, écrit sous la forme de quatre octets en décimal séparés par des points, chacun entre 0 et 255 : 192.168.1.37. Le masque de sous-réseau indique combien de bits, en partant de la gauche, désignent le réseau ; les autres désignent la machine. En notation CIDR, 192.168.1.37/24 signifie que les 24 premiers bits (192.168.1) identifient le réseau. Les adresses IPv6, sur 128 bits, ont été créées car les quelque 4 milliards d'adresses IPv4 (2³²) ne suffisent plus.",
                "Dans un réseau /24, il reste 8 bits pour les machines, soit 2⁸ = 256 adresses. Deux sont réservées : l'adresse du réseau (tous les bits machine à 0, ici 192.168.1.0) et l'adresse de diffusion (tous à 1, ici 192.168.1.255). On peut donc adresser 254 machines. Deux machines dont les adresses ont la même partie réseau communiquent directement ; sinon, elles passent par un routeur.",
                "Une adresse MAC, sur 48 bits, écrite en hexadécimal (par exemple 3C:52:82:1A:F0:07), identifie une carte réseau. Le commutateur (switch) relie les machines d'un même réseau local et transmet chaque trame vers la bonne machine grâce aux adresses MAC. Le routeur relie des réseaux différents et choisit, grâce à sa table de routage, vers quel réseau voisin envoyer chaque paquet, d'après l'adresse IP de destination. Le service DNS traduit un nom comme www.exemple.fr en adresse IP.",
              ],
              box: { label: "Règle", text: "Pour un masque /n, n bits désignent le réseau et 32 - n bits la machine. Nombre de machines adressables : 2 puissance (32 - n), moins 2 (adresses du réseau et de diffusion exclues)." },
            },
            {
              heading: "TCP et UDP",
              paragraphs: [
                "Le protocole IP fait « au mieux » : il ne garantit ni l'arrivée des paquets, ni leur ordre. Le protocole TCP ajoute la fiabilité : il établit une connexion, numérote les segments, fait accuser réception des données par le destinataire, renvoie ce qui n'a pas été acquitté et remet les données dans l'ordre. On l'utilise quand aucune donnée ne doit manquer : pages Web, courriers, fichiers.",
                "Le protocole UDP, plus simple, envoie les données sans connexion ni accusé de réception : il est plus rapide, mais une perte n'est pas corrigée. On l'utilise quand la rapidité compte plus qu'une perte occasionnelle, comme la visioconférence, les jeux en ligne ou les requêtes DNS.",
              ],
            },
          ],
          keyPoints: [
            "Les données sont découpées en paquets qui voyagent indépendamment et sont réassemblés à l'arrivée.",
            "Encapsulation : chaque couche ajoute un en-tête (ports TCP, adresses IP, adresses MAC).",
            "IPv4 : 32 bits, quatre octets ; /24 signifie 24 bits pour le réseau, 254 machines adressables.",
            "Le commutateur utilise les adresses MAC dans un réseau local ; le routeur relie des réseaux grâce aux adresses IP.",
            "TCP : fiable (accusés de réception, renvoi, remise en ordre) ; UDP : rapide, sans garantie.",
            "Le DNS traduit un nom de domaine en adresse IP.",
          ],
          example: {
            statement: "Une machine a pour adresse 192.168.1.37/24. 1. Quelle est l'adresse de son réseau ? 2. Combien de machines ce réseau peut-il contenir ? 3. Peut-elle communiquer directement avec 192.168.1.200 ? avec 192.168.2.5 ?",
            solution: [
              "1. Le masque /24 garde les 24 premiers bits, c'est-à-dire les trois premiers octets 192.168.1 ; les bits machine sont mis à 0. Adresse du réseau : 192.168.1.0.",
              "2. Il reste 32 - 24 = 8 bits pour les machines : 2⁸ = 256 adresses, moins l'adresse du réseau (192.168.1.0) et l'adresse de diffusion (192.168.1.255), soit 254 machines.",
              "3. 192.168.1.200 commence par 192.168.1 : même réseau, la communication est directe (par l'intermédiaire d'un commutateur).",
              "192.168.2.5 commence par 192.168.2 : réseau différent, les paquets doivent passer par un routeur.",
              "Réponse : réseau 192.168.1.0, 254 machines, communication directe avec 192.168.1.200, via un routeur avec 192.168.2.5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire l'adresse IPv4 192.168.1.37 en binaire, octet par octet. Combien de bits comporte-t-elle au total ?",
              hint: "Décomposez chaque nombre en somme de puissances de 2 : 128, 64, 32, 16, 8, 4, 2, 1.",
              solution: [
                "192 = 128 + 64, donc 11000000.",
                "168 = 128 + 32 + 8, donc 10101000.",
                "1 = 00000001.",
                "37 = 32 + 4 + 1, donc 00100101.",
                "Résultat : 11000000.10101000.00000001.00100101, soit 4 × 8 = 32 bits.",
              ],
            },
            {
              level: 2,
              statement: "Une machine a pour adresse 172.16.5.20/16. 1. Combien de bits désignent le réseau ? la machine ? 2. Donner l'adresse du réseau et l'adresse de diffusion. 3. Combien de machines ce réseau peut-il contenir ? 4. Les machines 172.16.200.3 et 172.17.5.20 sont-elles dans le même réseau qu'elle ?",
              hint: "Avec /16, les deux premiers octets désignent le réseau.",
              solution: [
                "1. 16 bits pour le réseau (172.16), 32 - 16 = 16 bits pour la machine.",
                "2. Adresse du réseau : bits machine à 0, soit 172.16.0.0. Adresse de diffusion : bits machine à 1, soit 172.16.255.255.",
                "3. 2¹⁶ - 2 = 65 536 - 2 = 65 534 machines.",
                "4. 172.16.200.3 commence par 172.16 : même réseau. 172.17.5.20 commence par 172.17 : réseau différent, il faut passer par un routeur.",
                "Résultat : réseau 172.16.0.0, diffusion 172.16.255.255, 65 534 machines ; seule 172.16.200.3 est dans le même réseau.",
              ],
            },
            {
              level: 3,
              statement: "On envoie 4 000 octets de données par TCP sur un réseau Ethernet. On admet que chaque segment transporte au plus 1 460 octets de données, que les en-têtes TCP et IP mesurent chacun 20 octets et que la trame Ethernet ajoute 18 octets (en-tête et code de contrôle). 1. Combien de paquets faut-il, et combien d'octets de données chacun contient-il ? 2. Combien d'octets sont transmis au total ? Quelle part représentent les en-têtes ? 3. Le deuxième paquet est perdu. Que se passe-t-il avec TCP ? Que se passerait-il si le fichier était envoyé d'un seul bloc ? 4. Décrire l'encapsulation d'un paquet, de la couche application à la couche accès réseau.",
              hint: "Divisez 4 000 par 1 460 et arrondissez à l'entier supérieur. Chaque paquet porte ses propres en-têtes.",
              solution: [
                "1. 4 000 / 1 460 ≈ 2,74 : il faut 3 paquets, contenant 1 460, 1 460 et 4 000 - 2 920 = 1 080 octets de données.",
                "2. En-têtes par paquet : 20 + 20 + 18 = 58 octets. Total : 4 000 + 3 × 58 = 4 000 + 174 = 4 174 octets.",
                "Part des en-têtes : 174 / 4 174 ≈ 0,042, soit environ 4,2 % des octets transmis.",
                "3. Le destinataire n'acquitte pas les données du deuxième paquet : TCP le renvoie, seul, et le destinataire remet les données dans l'ordre. D'un seul bloc, une seule erreur obligerait à renvoyer les 4 000 octets.",
                "4. Les données de l'application reçoivent l'en-tête TCP (ports) : c'est un segment. Le segment reçoit l'en-tête IP (adresses IP) : c'est un paquet. Le paquet reçoit l'en-tête Ethernet (adresses MAC) et un code de contrôle : c'est une trame, émise sur le support physique.",
                "Résultat : 3 paquets, 4 174 octets transmis dont environ 4,2 % d'en-têtes ; seul le paquet perdu est renvoyé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre l'envoi d'une requête Web, de l'application au câble.",
            items: [
              "Le navigateur produit une requête HTTP",
              "La couche transport (TCP) découpe les données et ajoute les numéros de port",
              "La couche internet (IP) ajoute les adresses IP source et destination",
              "La couche accès réseau (Ethernet) ajoute les adresses MAC et forme une trame",
              "La trame est émise sur le support physique sous forme de signaux",
            ],
          },
          quiz: [
            { q: "Combien de bits comporte une adresse IPv4 ?", options: ["16", "32", "48", "128"], answer: 1, why: "Quatre octets de 8 bits : 32 bits. 48 bits correspondent à une adresse MAC et 128 bits à IPv6." },
            { q: "Combien de machines peut-on adresser dans un réseau /24 ?", options: ["254", "256", "24", "255"], answer: 0, why: "2⁸ = 256 adresses, moins l'adresse du réseau et l'adresse de diffusion." },
            { q: "Quel équipement relie deux réseaux différents en s'appuyant sur les adresses IP ?", options: ["Un commutateur", "Une carte réseau", "Un câble Ethernet", "Un routeur"], answer: 3, why: "Le routeur choisit la route d'après l'adresse IP de destination ; le commutateur reste dans un réseau local." },
            { q: "Quel protocole garantit que les données arrivent toutes et dans l'ordre ?", options: ["UDP", "IP", "TCP", "Ethernet"], answer: 2, why: "TCP numérote, fait acquitter et renvoie les segments perdus ; UDP et IP ne garantissent rien." },
            { q: "Quel est le rôle du DNS ?", options: ["Chiffrer les échanges entre le client et le serveur", "Traduire un nom de domaine en adresse IP", "Attribuer les adresses MAC", "Découper les fichiers en paquets avant leur envoi"], answer: 1, why: "Le DNS associe à un nom comme www.exemple.fr l'adresse IP du serveur correspondant." },
          ],
          trap: "Confondre adresse IP et adresse MAC, ou commutateur et routeur : l'adresse MAC (48 bits) identifie une carte réseau et sert au commutateur dans un réseau local ; l'adresse IP (32 bits en IPv4) identifie une machine dans un réseau et sert au routeur pour passer d'un réseau à un autre.",
          method: "Pour un calcul d'adresse, écrivez l'adresse et séparez d'un trait la partie réseau (les n premiers bits pour un masque /n) de la partie machine. Mettez la partie machine à 0 pour l'adresse du réseau, à 1 pour l'adresse de diffusion ; le nombre de machines vaut 2 puissance (32 - n), moins 2.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'bit-alterne',
          title: 'Fiabiliser une transmission : le protocole du bit alterné',
          minutes: 30,
          objectives: [
            "Expliquer le rôle des accusés de réception et des délais de retransmission.",
            "Dérouler le fonctionnement d'un protocole simple de récupération de perte de paquets : le protocole du bit alterné.",
            "Identifier les limites du protocole du bit alterné.",
          ],
          course: [
            {
              heading: "Le problème : des pertes et des doublons",
              paragraphs: [
                "Sur un réseau, une trame peut être perdue (collision, brouillage, saturation d'un équipement) ou abîmée ; une trame abîmée, détectée grâce à un code de contrôle, est simplement jetée, ce qui revient à une perte. Pour s'assurer qu'un message est arrivé, le récepteur renvoie un accusé de réception, ou acquittement (ACK). Si l'émetteur ne reçoit pas d'acquittement au bout d'un certain délai (temporisation, ou timeout), il renvoie le message.",
                "Ce mécanisme crée un nouveau problème. Si c'est l'acquittement qui est perdu, le message était bien arrivé, mais l'émetteur le renvoie : le récepteur le reçoit deux fois. Sans moyen de distinguer un nouveau message d'une copie, il accepterait un doublon, par exemple un virement enregistré deux fois. Il faut donc marquer les messages.",
              ],
              box: { label: "Définition", text: "Acquittement (ACK) : message envoyé par le récepteur pour confirmer la bonne réception d'une trame. Temporisation (timeout) : délai au-delà duquel l'émetteur, sans acquittement, renvoie la trame." },
            },
            {
              heading: "Le protocole du bit alterné",
              paragraphs: [
                "L'idée : numéroter les trames avec un seul bit, qui vaut alternativement 0 et 1. L'émetteur envoie une trame à la fois, accompagnée de son bit de contrôle, puis attend l'acquittement portant le même bit. Ce n'est qu'à sa réception qu'il inverse le bit et passe au message suivant. Si la temporisation expire avant, il renvoie la même trame, avec le même bit.",
                "Le récepteur connaît le bit qu'il attend (0 au départ). S'il reçoit une trame portant ce bit, c'est un nouveau message : il l'accepte, envoie un acquittement portant ce bit, puis inverse le bit attendu. S'il reçoit une trame portant l'autre bit, c'est une copie d'un message déjà reçu (son acquittement a dû se perdre) : il l'ignore, mais renvoie quand même un acquittement portant ce bit, sinon l'émetteur renverrait la trame indéfiniment.",
              ],
              box: { label: "Règle", text: "Émetteur : envoyer (message, b), attendre ACK b ; à sa réception, b devient 1 - b et on passe au message suivant ; sans ACK à temps, renvoyer (message, b). Récepteur : si le bit reçu est le bit attendu, accepter et inverser le bit attendu ; dans tous les cas, acquitter avec le bit reçu." },
            },
            {
              heading: "Dérouler le protocole",
              paragraphs: [
                "Cas sans incident : l'émetteur envoie (M1, 0) ; le récepteur, qui attend 0, accepte M1, répond ACK 0 et attend désormais 1. L'émetteur reçoit ACK 0, envoie (M2, 1), et ainsi de suite. Cas d'une trame perdue : (M2, 1) disparaît ; aucun acquittement ne revient, la temporisation expire, l'émetteur renvoie (M2, 1), que le récepteur accepte normalement.",
                "Cas d'un acquittement perdu : le récepteur a accepté (M2, 1), envoyé ACK 1 et attend 0. ACK 1 est perdu. La temporisation expire, l'émetteur renvoie (M2, 1). Le récepteur, qui attend 0, reconnaît une copie : il l'ignore et renvoie ACK 1. L'émetteur reçoit ACK 1 et passe à (M3, 0). Chaque message n'a été accepté qu'une seule fois.",
              ],
            },
            {
              heading: "Les limites",
              paragraphs: [
                "Le protocole est lent : l'émetteur n'envoie qu'une trame à la fois et attend son acquittement. Le débit est limité par le temps d'aller-retour : si un aller-retour dure 20 ms, on n'envoie au mieux que 50 trames par seconde, quelle que soit la capacité de la liaison. Les protocoles réels, comme TCP, envoient plusieurs segments avant de recevoir les acquittements, numérotés avec des numéros bien plus grands qu'un seul bit.",
                "Le protocole suppose aussi que les trames ne se doublent pas en route : un seul bit ne permet de distinguer que deux messages consécutifs. Si une très vieille copie, retardée, arrivait après plusieurs échanges, elle pourrait être confondue avec un nouveau message. Il suppose enfin que les trames abîmées sont détectées par un code de contrôle et traitées comme perdues.",
              ],
              box: { label: "À retenir", text: "Le bit alterné récupère les pertes de trames et d'acquittements sans créer de doublons, mais il n'envoie qu'une trame à la fois (lent) et suppose que les trames ne se doublent pas en route." },
            },
          ],
          keyPoints: [
            "Le récepteur confirme chaque trame par un acquittement ; sans acquittement à temps, l'émetteur renvoie la trame.",
            "Sans numérotation, la perte d'un acquittement provoque l'acceptation d'un doublon.",
            "Bit alterné : chaque trame porte un bit 0 ou 1, inversé à chaque nouveau message.",
            "Le récepteur accepte une trame seulement si elle porte le bit attendu, mais acquitte toujours le bit reçu.",
            "Limites : une seule trame à la fois (débit limité par l'aller-retour) et pas de doublement des trames en route.",
          ],
          example: {
            statement: "Un émetteur envoie trois messages M1, M2, M3 avec le protocole du bit alterné. L'acquittement de M2 est perdu une fois ; tout le reste se passe bien. Décrire les échanges et vérifier que chaque message est accepté une seule fois.",
            solution: [
              "L'émetteur envoie (M1, 0). Le récepteur attend 0 : il accepte M1, renvoie ACK 0 et attend 1. L'émetteur reçoit ACK 0 et passe au bit 1.",
              "L'émetteur envoie (M2, 1). Le récepteur attend 1 : il accepte M2, renvoie ACK 1 et attend 0. ACK 1 est perdu.",
              "La temporisation expire : l'émetteur renvoie (M2, 1).",
              "Le récepteur attend 0 et reçoit le bit 1 : c'est une copie. Il l'ignore et renvoie ACK 1. L'émetteur reçoit ACK 1 et passe au bit 0.",
              "L'émetteur envoie (M3, 0). Le récepteur attend 0 : il accepte M3, renvoie ACK 0. L'émetteur reçoit ACK 0.",
              "Réponse : 4 trames envoyées (M2 deux fois), 4 acquittements émis dont un perdu, et M1, M2, M3 acceptés chacun une seule fois.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec le protocole du bit alterné, l'émetteur envoie un seul message M1. La première trame (M1, 0) est perdue. Décrire les échanges jusqu'à ce que l'émetteur soit sûr de la réception, et compter les trames envoyées.",
              hint: "Sans trame reçue, le récepteur n'envoie rien : c'est l'expiration de la temporisation qui fait réagir l'émetteur.",
              solution: [
                "L'émetteur envoie (M1, 0), qui est perdue. Le récepteur ne reçoit rien et n'envoie aucun acquittement.",
                "La temporisation expire : l'émetteur renvoie (M1, 0).",
                "Le récepteur attend 0 : il accepte M1, renvoie ACK 0 et attend désormais 1.",
                "L'émetteur reçoit ACK 0 : il sait que M1 est arrivé et inverse son bit, qui vaut 1 pour un éventuel message suivant.",
                "Résultat : 2 trames envoyées et 1 acquittement ; M1 accepté une seule fois.",
              ],
            },
            {
              level: 2,
              statement: "On utilise un protocole simplifié sans bit de contrôle : le récepteur accepte toute trame reçue et l'acquitte ; l'émetteur renvoie une trame si l'acquittement n'arrive pas à temps. 1. Montrer, sur un exemple où l'acquittement du message M1 est perdu, que ce protocole peut faire accepter un doublon. 2. Montrer que le protocole du bit alterné évite ce problème dans le même scénario.",
              hint: "Mettez-vous à la place du récepteur : quand la copie de M1 arrive, peut-il savoir qu'il l'a déjà reçue ?",
              solution: [
                "1. L'émetteur envoie M1 ; le récepteur l'accepte et envoie un acquittement, qui est perdu.",
                "La temporisation expire, l'émetteur renvoie M1. Le récepteur, qui accepte tout, accepte M1 une seconde fois : doublon.",
                "2. Avec le bit alterné : l'émetteur envoie (M1, 0) ; le récepteur l'accepte, envoie ACK 0 (perdu) et attend 1.",
                "L'émetteur renvoie (M1, 0). Le récepteur attend 1 et reçoit 0 : il reconnaît une copie, l'ignore et renvoie ACK 0.",
                "Résultat : sans bit, M1 est accepté deux fois ; avec le bit alterné, il n'est accepté qu'une fois.",
              ],
            },
            {
              level: 3,
              statement: "Un émetteur envoie quatre messages M1, M2, M3, M4 avec le protocole du bit alterné. La première émission de M2 est perdue, et le premier acquittement de M3 est perdu. Tout le reste se passe bien. 1. Indiquer le bit de contrôle de chaque message. 2. Décrire les échanges, en précisant à chaque étape le bit attendu par le récepteur. 3. Combien de trames l'émetteur envoie-t-il ? Combien d'acquittements le récepteur émet-il ? 4. Un aller-retour (trame puis acquittement) dure 20 ms (données fictives). Quelle est la durée minimale de transmission de 100 messages sans aucune perte ? Pourquoi est-ce une limite du protocole ?",
              hint: "Le bit change uniquement quand l'émetteur reçoit le bon acquittement : un renvoi garde le même bit.",
              solution: [
                "1. Les bits alternent à chaque nouveau message : M1 : 0, M2 : 1, M3 : 0, M4 : 1.",
                "2. (M1, 0) : le récepteur attend 0, accepte, ACK 0, attend 1. (M2, 1) est perdue ; après la temporisation, (M2, 1) est renvoyée : acceptée, ACK 1, attend 0.",
                "(M3, 0) : acceptée, ACK 0 perdu, le récepteur attend 1. Après la temporisation, (M3, 0) est renvoyée : le récepteur attend 1, c'est une copie, ignorée, mais ACK 0 est renvoyé.",
                "(M4, 1) : le récepteur attend 1, accepte, ACK 1. Chaque message a été accepté une seule fois.",
                "3. Trames : M1 une fois, M2 deux fois, M3 deux fois, M4 une fois, soit 6. Acquittements : 1 pour M1, 1 pour M2 (la trame perdue n'a rien déclenché), 2 pour M3, 1 pour M4, soit 5.",
                "4. Une seule trame à la fois : au moins 100 × 20 ms = 2 000 ms = 2 s, quelle que soit la capacité de la liaison. Le débit est limité par le temps d'aller-retour, d'où des protocoles réels qui envoient plusieurs trames sans attendre.",
                "Résultat : bits 0, 1, 0, 1 ; 6 trames et 5 acquittements ; au moins 2 s pour 100 messages.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le protocole du bit alterné.",
            statements: [
              { text: "Quand la temporisation expire, l'émetteur renvoie la trame avec le même bit.", true: true, why: "Le bit ne change qu'à la réception du bon acquittement : c'est le même message." },
              { text: "Le récepteur n'acquitte pas une trame qu'il reconnaît comme une copie.", true: false, why: "Il doit l'acquitter, sinon l'émetteur la renverrait sans fin." },
              { text: "Sans bit de contrôle, la perte d'un acquittement peut faire accepter un doublon.", true: true, why: "Le récepteur ne peut pas distinguer la copie d'un nouveau message." },
              { text: "Le protocole du bit alterné permet d'envoyer plusieurs trames à la fois.", true: false, why: "L'émetteur attend l'acquittement de chaque trame avant d'envoyer la suivante." },
              { text: "Le bit de contrôle des messages successifs vaut 0, 1, 0, 1...", true: true, why: "Il est inversé à chaque nouveau message, d'où le nom de bit alterné." },
              { text: "Une trame abîmée détectée par le code de contrôle est traitée comme une trame perdue.", true: true, why: "Elle est jetée, aucun acquittement n'est envoyé, et la temporisation provoque son renvoi." },
              { text: "Le protocole du bit alterné est très rapide sur les liaisons à long temps d'aller-retour.", true: false, why: "Il attend un aller-retour complet par trame : plus l'aller-retour est long, plus il est lent." },
            ],
          },
          quiz: [
            { q: "Le récepteur attend le bit 1 et reçoit (M, 0). Que fait-il ?", options: ["Il accepte M et attend 0", "Il ignore M sans rien envoyer", "Il ignore M et renvoie ACK 0", "Il accepte M et renvoie ACK 1"], answer: 2, why: "C'est une copie d'un message déjà accepté : il l'ignore mais l'acquitte, pour que l'émetteur passe à la suite." },
            { q: "Quand l'émetteur inverse-t-il son bit de contrôle ?", options: ["Quand il reçoit l'acquittement portant son bit", "À chaque envoi de trame, y compris lors d'un renvoi", "Quand la temporisation expire", "Toutes les deux trames"], answer: 0, why: "Recevoir ACK b prouve que le message est arrivé : l'émetteur passe au suivant avec l'autre bit." },
            { q: "Quel est le bit du cinquième message d'une transmission qui commence au bit 0 ?", options: ["1", "5", "0", "Cela dépend des pertes"], answer: 2, why: "Les bits alternent 0, 1, 0, 1, 0 : le cinquième message porte 0, quelles que soient les pertes, car un renvoi garde le même bit." },
            { q: "À quoi sert la temporisation ?", options: ["À chiffrer la trame avant son émission sur le réseau", "À déclencher le renvoi d'une trame non acquittée", "À accélérer le récepteur", "À numéroter les trames"], answer: 1, why: "Sans acquittement au bout du délai, l'émetteur considère la trame comme perdue et la renvoie." },
            { q: "Quelle est la principale limite du protocole du bit alterné ?", options: ["Il accepte les doublons", "Il ne récupère pas les pertes de trames ni d'acquittements", "Il exige des adresses IPv6", "Il n'envoie qu'une trame à la fois"], answer: 3, why: "L'émetteur attend chaque acquittement : le débit est limité par le temps d'aller-retour." },
          ],
          trap: "Croire que le récepteur ne doit pas répondre à une copie, ou que l'émetteur change de bit à chaque envoi : le bit ne change qu'à la réception du bon acquittement, et le récepteur acquitte toujours la trame reçue, même ignorée.",
          method: "Pour dérouler le protocole, tracez deux lignes verticales (émetteur et récepteur) et dessinez chaque trame et chaque acquittement par une flèche oblique, une croix marquant une perte. Notez à côté de chaque flèche le bit transporté et, côté récepteur, le bit attendu.",
        },
      ],
    },
    /* ================================================================== */
    /* INTERACTIONS SUR LE WEB                                              */
    /* ================================================================== */
    {
      id: 'web',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'html-css-javascript',
          title: 'Pages Web et événements : HTML, CSS, JavaScript',
          minutes: 35,
          objectives: [
            "Identifier les rôles respectifs de HTML, CSS et JavaScript dans une page Web.",
            "Identifier les différents composants graphiques permettant d'interagir avec une application Web.",
            "Identifier les événements que les fonctions associées aux différents composants graphiques sont capables de traiter.",
            "Analyser et modifier les méthodes exécutées lors d'un clic sur un bouton d'une page Web.",
          ],
          course: [
            {
              heading: "HTML : la structure et le contenu",
              paragraphs: [
                "Une page Web est un fichier texte écrit en HTML (HyperText Markup Language), un langage de balisage. Les balises, écrites entre chevrons, indiquent la nature de chaque élément : <h1>Titre</h1> pour un titre principal, <p>...</p> pour un paragraphe, <a href='page2.html'>lien</a> pour un lien hypertexte, <img src='logo.png' alt='Logo'> pour une image, <ul> et <li> pour une liste. La plupart des balises vont par paires : une balise ouvrante et une balise fermante, qui commence par une barre oblique.",
                "Un document HTML commence par <!DOCTYPE html>, puis l'élément <html> contient deux parties : <head>, avec les informations sur la page (titre dans l'onglet, encodage, lien vers la feuille de style), et <body>, avec le contenu affiché. Les attributs précisent un élément : href donne la cible d'un lien, src le fichier d'une image, id un identifiant unique dans la page, class une catégorie que plusieurs éléments peuvent partager.",
              ],
              box: { label: "Définition", text: "HTML décrit la structure et le contenu d'une page à l'aide de balises. Un attribut id identifie un élément unique ; un attribut class regroupe plusieurs éléments." },
            },
            {
              heading: "CSS : la présentation",
              paragraphs: [
                "Le langage CSS (Cascading Style Sheets) définit l'apparence : couleurs, polices, tailles, marges, disposition. Une règle CSS associe un sélecteur à des déclarations : p { color: navy; font-size: 18px; } met en bleu marine tous les paragraphes. Le sélecteur .important vise les éléments de classe important, le sélecteur #titre vise l'élément d'identifiant titre.",
                "Séparer le contenu (HTML) de la présentation (CSS) permet de changer l'apparence de tout un site en modifiant une seule feuille de style, généralement placée dans un fichier .css relié à chaque page. Quand plusieurs règles s'appliquent à un même élément, la plus précise l'emporte (un identifiant est plus précis qu'une classe, elle-même plus précise qu'un nom de balise) : c'est le principe de la cascade.",
              ],
            },
            {
              heading: "JavaScript : réagir aux événements",
              paragraphs: [
                "JavaScript est un langage de programmation exécuté par le navigateur, donc sur la machine du client. Il peut modifier la page après son chargement, sans redemander de page au serveur. Le navigateur représente la page par un arbre d'objets, le DOM (Document Object Model) ; document.getElementById('score') renvoie l'élément d'identifiant score, et l'affectation element.textContent = 'Bravo' remplace son texte.",
                "Un événement est une action détectée par le navigateur : un clic (click), le survol par la souris (mouseover), une touche enfoncée (keydown), une saisie dans un champ (input), un changement de choix (change), l'envoi d'un formulaire (submit), la fin du chargement de la page (load). On associe à un événement une fonction, appelée quand il se produit : bouton.addEventListener('click', ajouter) exécute la fonction ajouter à chaque clic. On rencontre aussi l'écriture <button onclick='ajouter()'>.",
                "Les variables JavaScript vivent dans la mémoire de la page : si l'on recharge la page, elles reprennent leur valeur initiale. Un compteur de clics repart donc de 0 après un rechargement, sauf si l'on mémorise sa valeur ailleurs.",
              ],
              box: { label: "À retenir", text: "HTML : le contenu. CSS : la présentation. JavaScript : le comportement, exécuté par le navigateur du client en réponse à des événements (click, input, change, mouseover, keydown, submit, load)." },
            },
            {
              heading: "Les composants graphiques",
              paragraphs: [
                "Une application Web propose des composants graphiques avec lesquels l'utilisateur interagit : le bouton (<button>), le champ de texte (<input type='text'>), la case à cocher (<input type='checkbox'>), le bouton radio (<input type='radio'>, un seul choix parmi un groupe), la liste déroulante (<select> avec des <option>), le curseur (<input type='range'>), la zone de texte sur plusieurs lignes (<textarea>) et le lien.",
                "Chaque composant produit des événements adaptés : un bouton réagit surtout au clic ; un champ de texte à la saisie (input) ou à la validation (change) ; une case à cocher, une liste déroulante ou un curseur au changement de valeur (change). La valeur saisie dans un champ se lit avec sa propriété value, l'état d'une case à cocher avec sa propriété checked (true ou false).",
              ],
            },
          ],
          keyPoints: [
            "HTML structure le contenu avec des balises ; id identifie un élément unique, class un groupe d'éléments.",
            "CSS met en forme : sélecteur { propriété: valeur; } ; .classe et #identifiant sont des sélecteurs.",
            "JavaScript est exécuté par le navigateur du client et modifie la page grâce au DOM.",
            "addEventListener('click', f) associe la fonction f au clic sur un élément.",
            "Composants : bouton, champ de texte, case à cocher, bouton radio, liste déroulante, curseur ; on lit value ou checked.",
            "Recharger la page réinitialise les variables JavaScript.",
          ],
          example: {
            statement: "Une page contient <p id='score'>0</p> et <button id='plus'>Ajouter</button>, avec le script : let n = 0; document.getElementById('plus').addEventListener('click', function () { n = n + 1; document.getElementById('score').textContent = n; }); 1. Qu'affiche le paragraphe après trois clics ? 2. Et après un rechargement de la page ? 3. Où ce code est-il exécuté ?",
            solution: [
              "Au chargement, n vaut 0 et le paragraphe affiche 0.",
              "À chaque clic sur le bouton plus, la fonction est appelée : n augmente de 1 et le texte du paragraphe d'identifiant score est remplacé par n.",
              "1. Après trois clics, n vaut 3 et le paragraphe affiche 3.",
              "2. Le rechargement réexécute le script depuis le début : n repart de 0 et le paragraphe affiche 0.",
              "3. Le code est exécuté par le navigateur, sur la machine du client ; aucune requête n'est envoyée au serveur lors des clics.",
              "Réponse : 3 après trois clics, 0 après rechargement, exécution côté client.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne la feuille de style : p { color: red; } .important { font-weight: bold; } #titre { font-size: 32px; }. Et le code HTML : <h1 id='titre'>NSI</h1> <p>Premier paragraphe</p> <p class='important'>Second paragraphe</p>. 1. Pour chaque élément, indiquer les règles qui s'appliquent. 2. Quelle est la différence entre un sélecteur commençant par un point et un sélecteur commençant par un dièse ?",
              hint: "Un sélecteur sans signe vise une balise, .nom vise une classe, #nom vise un identifiant.",
              solution: [
                "Le titre h1 a l'identifiant titre : la règle #titre s'applique, il est écrit en 32 pixels. La règle p ne le concerne pas.",
                "Le premier paragraphe est un p sans classe : il est écrit en rouge.",
                "Le second paragraphe est un p de classe important : il est écrit en rouge et en gras.",
                "2. .important vise tous les éléments de classe important (il peut y en avoir plusieurs) ; #titre vise l'unique élément d'identifiant titre.",
                "Résultat : titre en 32 px, premier paragraphe rouge, second paragraphe rouge et gras.",
              ],
            },
            {
              level: 2,
              statement: "Une page contient un bouton <button id='theme'>Mode sombre</button> et le script : let sombre = false; document.getElementById('theme').addEventListener('click', function () { sombre = !sombre; if (sombre) { document.body.style.backgroundColor = 'black'; } else { document.body.style.backgroundColor = 'white'; } }); 1. Quelle est la couleur du fond après 1, 2, puis 3 clics ? 2. Que se passe-t-il si l'on remplace 'click' par 'mouseover' ? 3. Modifier la fonction pour que le texte du bouton devienne Mode clair quand le fond est noir, et Mode sombre sinon.",
              hint: "L'opérateur ! inverse un booléen : true devient false et inversement.",
              solution: [
                "1. Au départ, sombre vaut false. Après 1 clic, sombre vaut true : fond noir. Après 2 clics, false : fond blanc. Après 3 clics, true : fond noir.",
                "2. La fonction serait appelée chaque fois que la souris passe sur le bouton, sans clic : le fond changerait à chaque survol.",
                "3. Dans le bloc if (sombre), on ajoute document.getElementById('theme').textContent = 'Mode clair';",
                "Dans le bloc else, on ajoute document.getElementById('theme').textContent = 'Mode sombre';",
                "Résultat : noir, blanc, noir ; changement au survol avec mouseover ; texte du bouton mis à jour dans chaque branche.",
              ],
            },
            {
              level: 3,
              statement: "Une page contient : <input id='prenom' type='text'> <button id='ok'>Valider</button> <p id='message'></p>, et le script : document.getElementById('ok').addEventListener('click', function () { const p = document.getElementById('prenom').value; document.getElementById('message').textContent = 'Bonjour ' + p + ' !'; }); 1. L'utilisateur tape Léa puis clique sur Valider. Qu'affiche la page ? 2. Ce traitement nécessite-t-il un échange avec le serveur ? Justifier. 3. Modifier le script pour afficher aussi le nombre de caractères du prénom (en JavaScript, p.length). Que s'affiche-t-il pour Léa ? 4. Quel événement faudrait-il utiliser, et sur quel élément, pour que le message se mette à jour à chaque lettre tapée, sans cliquer ? 5. Que se passe-t-il si JavaScript est désactivé dans le navigateur ?",
              hint: "La propriété value d'un champ de texte contient ce que l'utilisateur a tapé ; l'événement input se produit à chaque modification du champ.",
              solution: [
                "1. La fonction lit la valeur du champ, Léa, et écrit dans le paragraphe : « Bonjour Léa ! ».",
                "2. Non : le script est exécuté par le navigateur, sur la machine du client, et modifie la page grâce au DOM, sans envoyer de requête au serveur.",
                "3. On remplace la dernière instruction par document.getElementById('message').textContent = 'Bonjour ' + p + ' ! Votre prénom compte ' + p.length + ' caractères.'; Pour Léa, p.length vaut 3 : « Bonjour Léa ! Votre prénom compte 3 caractères. ».",
                "4. On associe la fonction à l'événement 'input' du champ prenom : document.getElementById('prenom').addEventListener('input', function () { ... }).",
                "5. Le script n'est pas exécuté : le champ et le bouton s'affichent, mais un clic ne produit aucun message.",
                "Résultat : « Bonjour Léa ! », traitement entièrement côté client, 3 caractères pour Léa, événement input sur le champ.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à son rôle dans une page Web.",
            pairs: [
              { left: "<a href='cours.html'>", right: "Crée un lien hypertexte vers une autre page" },
              { left: "#menu { color: navy; }", right: "Règle CSS qui vise l'élément d'identifiant menu" },
              { left: "addEventListener('click', f)", right: "Exécute la fonction f à chaque clic sur l'élément" },
              { left: "<input type='checkbox'>", right: "Case à cocher, dont l'état se lit avec checked" },
              { left: "Événement input", right: "Se produit à chaque modification d'un champ de texte" },
              { left: "DOM", right: "Arbre d'objets qui représente la page dans le navigateur" },
            ],
          },
          quiz: [
            { q: "Quel langage décrit l'apparence (couleurs, polices, marges) d'une page Web ?", options: ["HTML", "JavaScript", "CSS", "Python"], answer: 2, why: "CSS gère la présentation ; HTML structure le contenu et JavaScript gère le comportement." },
            { q: "Où le code JavaScript d'une page est-il exécuté ?", options: ["Dans le navigateur du client", "Sur le serveur, avant l'envoi de la page", "Dans le routeur du réseau local", "Sur le serveur DNS du fournisseur d'accès"], answer: 0, why: "Le navigateur télécharge le script avec la page et l'exécute sur la machine de l'utilisateur." },
            { q: "Quel sélecteur CSS vise tous les éléments de classe note ?", options: ["#note", "note", "<note>", ".note"], answer: 3, why: "Le point vise une classe ; le dièse vise un identifiant ; un nom seul vise une balise." },
            { q: "Que signale l'événement mouseover ?", options: ["Un clic sur l'élément", "Le survol par la souris", "L'appui sur une touche du clavier", "La fin du chargement de la page"], answer: 1, why: "mouseover signale le passage de la souris au-dessus de l'élément ; un clic produit click, une touche keydown, la fin du chargement load." },
            { q: "Comment lit-on le texte tapé dans un champ <input type='text'> ?", options: ["Avec sa propriété value", "Avec sa propriété checked", "Avec sa propriété href", "Avec sa propriété src"], answer: 0, why: "value contient la saisie ; checked sert aux cases à cocher, href aux liens, src aux images." },
          ],
          trap: "Croire que JavaScript s'exécute sur le serveur, ou confondre les rôles : HTML pour le contenu, CSS pour l'apparence, JavaScript pour le comportement. Autre erreur fréquente : confondre .nom (classe, plusieurs éléments) et #nom (identifiant, un seul élément).",
          method: "Pour analyser un script lié à un bouton, repérez trois choses : l'élément visé (getElementById), l'événement écouté (click, input...), et ce que fait la fonction appelée. Simulez ensuite plusieurs actions de l'utilisateur en notant la valeur des variables après chacune.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'client-serveur-http',
          title: 'Le modèle client-serveur et le protocole HTTP',
          minutes: 35,
          objectives: [
            "Décrire le modèle client-serveur et analyser une URL.",
            "Décrire une requête et une réponse HTTP et interpréter les principaux codes de réponse.",
            "Distinguer ce qui est exécuté sur le client ou sur le serveur et dans quel ordre, ainsi que ce qui est mémorisé dans le client et retransmis au serveur.",
            "Reconnaître quand et pourquoi la transmission est chiffrée.",
          ],
          course: [
            {
              heading: "Le modèle client-serveur",
              paragraphs: [
                "Sur le Web, deux rôles s'opposent. Le client (le navigateur de l'utilisateur) envoie des requêtes ; le serveur (un programme qui tourne en permanence sur une machine connectée à Internet) attend les requêtes et renvoie des réponses. Un même serveur répond à de nombreux clients. Le Web a été inventé en 1989 au CERN par Tim Berners-Lee, qui a conçu HTML, les adresses des pages et le protocole HTTP.",
                "Une ressource est désignée par une URL, par exemple https://www.exemple.fr/cours/nsi.html?chap=3. On y lit le protocole (https), le nom de domaine du serveur (www.exemple.fr), traduit en adresse IP par le DNS, le chemin de la ressource sur le serveur (/cours/nsi.html) et, après le point d'interrogation, des paramètres (chap=3). Le port, s'il n'est pas écrit, vaut 80 pour HTTP et 443 pour HTTPS.",
              ],
              box: { label: "Définition", text: "Modèle client-serveur : le client envoie une requête, le serveur la traite et renvoie une réponse. URL : protocole://nom-de-domaine/chemin?paramètres." },
            },
            {
              heading: "Requêtes et réponses HTTP",
              paragraphs: [
                "HTTP (HyperText Transfer Protocol) est le protocole de la couche application qui régit ces échanges. Une requête commence par une ligne contenant la méthode, le chemin et la version : GET /cours/nsi.html HTTP/1.1. Suivent des en-têtes, comme Host: www.exemple.fr (le serveur visé) ou User-Agent (le navigateur utilisé). La méthode GET demande une ressource ; la méthode POST envoie des données au serveur, dans le corps de la requête.",
                "La réponse commence par une ligne d'état, par exemple HTTP/1.1 200 OK, suivie d'en-têtes (Content-Type: text/html indique la nature du contenu), d'une ligne vide, puis du corps : le code HTML de la page, une image... Le code de réponse résume le résultat : 200 (succès), 301 (la ressource a été déplacée définitivement, le navigateur est redirigé), 403 (accès interdit), 404 (ressource introuvable), 500 (erreur interne du serveur).",
                "Pour afficher une page, le navigateur envoie souvent de nombreuses requêtes : une pour le fichier HTML, puis une pour chaque feuille de style, script ou image qu'il référence.",
              ],
              box: { label: "À retenir", text: "Codes de réponse : 2xx succès (200 OK), 3xx redirection (301), 4xx erreur du client (403 interdit, 404 introuvable), 5xx erreur du serveur (500)." },
            },
            {
              heading: "Ce qui s'exécute où, et dans quel ordre",
              paragraphs: [
                "Une page statique est un fichier enregistré tel quel sur le serveur, renvoyé à l'identique à tous les clients. Une page dynamique est fabriquée à chaque requête par un programme du serveur, écrit par exemple en PHP ou en Python : il peut consulter une base de données et produire un code HTML différent selon l'utilisateur (son panier, ses messages).",
                "L'ordre est toujours le même. Le client envoie la requête ; le serveur exécute son programme et produit du HTML ; il l'envoie ; le navigateur reçoit ce HTML, l'affiche et exécute alors les scripts JavaScript qu'il contient. Le client ne voit jamais le code PHP, seulement son résultat ; à l'inverse, le serveur n'exécute pas le JavaScript, qu'il se contente d'envoyer.",
                "HTTP est un protocole sans état : chaque requête est traitée indépendamment des précédentes, le serveur ne se souvient pas du client. Pour suivre un utilisateur (connexion, panier), le serveur envoie un cookie avec l'en-tête Set-Cookie ; le navigateur le mémorise et le renvoie automatiquement, dans l'en-tête Cookie, à chaque requête vers ce site. Un cookie contient souvent un identifiant de session, qui permet au serveur de retrouver les données de l'utilisateur.",
              ],
              box: { label: "Règle", text: "Ordre d'exécution : requête du client, programme du serveur (PHP, Python), envoi du HTML, affichage et exécution du JavaScript par le navigateur. Les cookies sont mémorisés par le client et renvoyés au serveur à chaque requête." },
            },
            {
              heading: "HTTPS : chiffrer les échanges",
              paragraphs: [
                "Avec HTTP, les requêtes et les réponses circulent en clair : toute personne qui intercepte le trafic (sur un Wi-Fi public, par exemple) peut lire les pages, les cookies, les mots de passe. HTTPS ajoute une couche de chiffrement, TLS : le contenu des échanges (chemin, paramètres, en-têtes, cookies, corps) devient illisible pour un tiers, et ne peut pas être modifié sans que cela se voie.",
                "HTTPS authentifie aussi le serveur grâce à un certificat, délivré par une autorité de certification : le navigateur vérifie qu'il dialogue bien avec le site annoncé et affiche un cadenas. Le chiffrement est indispensable dès qu'on transmet des données sensibles (identifiants, paiement, données personnelles), et il est aujourd'hui utilisé par la grande majorité des sites.",
              ],
            },
          ],
          keyPoints: [
            "Le client envoie une requête, le serveur renvoie une réponse ; le Web est né au CERN en 1989 (Tim Berners-Lee).",
            "URL : protocole, nom de domaine, chemin, paramètres après ? ; port 80 pour HTTP, 443 pour HTTPS.",
            "Codes : 200 succès, 301 redirection, 403 interdit, 404 introuvable, 500 erreur du serveur.",
            "Le serveur exécute PHP ou Python et envoie du HTML ; le navigateur affiche et exécute ensuite le JavaScript.",
            "HTTP est sans état : les cookies, mémorisés par le client, sont renvoyés au serveur à chaque requête.",
            "HTTPS chiffre les échanges (TLS) et authentifie le serveur par un certificat.",
          ],
          example: {
            statement: "Analyser l'URL https://www.exemple.fr/cours/nsi.html?chap=3, puis écrire la première ligne de la requête envoyée par le navigateur et la première ligne d'une réponse de succès. Que verrait-on si la page n'existait pas ?",
            solution: [
              "Protocole : https, donc échanges chiffrés, port 443 par défaut.",
              "Nom de domaine : www.exemple.fr, que le DNS traduit en adresse IP du serveur.",
              "Chemin : /cours/nsi.html ; paramètre : chap, de valeur 3.",
              "Première ligne de la requête : GET /cours/nsi.html?chap=3 HTTP/1.1, suivie de l'en-tête Host: www.exemple.fr.",
              "Première ligne de la réponse en cas de succès : HTTP/1.1 200 OK, suivie notamment de Content-Type: text/html, puis du code HTML.",
              "Si la page n'existait pas, la ligne d'état serait HTTP/1.1 404 Not Found.",
              "Réponse : https, www.exemple.fr, /cours/nsi.html, chap=3 ; requête GET, réponse 200 ou 404.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposer les URL suivantes en protocole, nom de domaine, port (écrit ou implicite), chemin et paramètres : 1. http://lycee.exemple.org/actualites/index.html ; 2. https://meteo.exemple.fr/prevision.php?ville=Lyon&jours=3.",
              hint: "Le port implicite dépend du protocole ; les paramètres suivent le point d'interrogation et sont séparés par &.",
              solution: [
                "1. Protocole http ; domaine lycee.exemple.org ; port implicite 80 ; chemin /actualites/index.html ; aucun paramètre.",
                "2. Protocole https ; domaine meteo.exemple.fr ; port implicite 443 ; chemin /prevision.php.",
                "Paramètres de l'URL 2 : ville, de valeur Lyon, et jours, de valeur 3.",
                "Résultat : port 80 pour la première URL, 443 pour la seconde, qui transmet deux paramètres au programme prevision.php.",
              ],
            },
            {
              level: 2,
              statement: "1. Un navigateur envoie la requête GET /images/logo.png HTTP/1.1 avec l'en-tête Host: www.exemple.fr, et reçoit une réponse commençant par HTTP/1.1 404 Not Found. Expliquer cet échange. 2. Donner la signification des codes 200, 301, 403 et 500, et dire pour chacun si le problème éventuel vient du client ou du serveur. 3. Pour afficher une page HTML qui utilise une feuille de style et trois images, combien de requêtes le navigateur envoie-t-il au minimum ?",
              hint: "Le premier chiffre du code indique la famille : 2 succès, 3 redirection, 4 erreur du client, 5 erreur du serveur.",
              solution: [
                "1. Le navigateur demande au serveur www.exemple.fr le fichier /images/logo.png ; le serveur répond que cette ressource est introuvable (404) : le chemin est faux ou le fichier a été supprimé.",
                "2. 200 : succès, la ressource est renvoyée. 301 : ressource déplacée définitivement, redirection vers la nouvelle adresse.",
                "403 : accès interdit, erreur du côté de la demande (le client n'a pas le droit). 500 : erreur interne, le programme du serveur a échoué : le problème vient du serveur.",
                "3. Une requête pour le fichier HTML, une pour la feuille de style, une par image : 1 + 1 + 3 = 5 requêtes au minimum.",
                "Résultat : ressource introuvable dans le premier cas ; 5 requêtes pour la page.",
              ],
            },
            {
              level: 3,
              statement: "Sur un site marchand, l'utilisateur connecté demande la page panier.php. Le serveur exécute un programme PHP qui lit le cookie session=ab12 envoyé par le navigateur, consulte une base de données et produit une page HTML listant les articles. Cette page contient un script JavaScript qui recalcule le total quand l'utilisateur modifie une quantité. 1. Ranger dans l'ordre chronologique et attribuer au client ou au serveur : exécution du PHP, envoi de la requête, exécution du JavaScript, envoi du HTML. 2. Qu'est-ce qui est mémorisé par le client et retransmis au serveur ? Pourquoi ce mécanisme est-il nécessaire ? 3. L'utilisateur peut-il lire le code PHP en affichant le code source de la page ? et le code JavaScript ? 4. Pourquoi ce site doit-il utiliser HTTPS ? Que pourrait faire un espion sur un Wi-Fi public si le site utilisait HTTP ?",
              hint: "Le serveur ne reçoit que des requêtes et n'envoie que du texte (HTML, CSS, JavaScript) ; le navigateur n'exécute que ce qu'il reçoit.",
              solution: [
                "1. Envoi de la requête GET /panier.php avec le cookie (client), exécution du PHP (serveur), envoi du HTML produit (serveur), exécution du JavaScript à chaque modification de quantité (client).",
                "2. Le cookie session=ab12, mémorisé par le navigateur et renvoyé dans l'en-tête Cookie à chaque requête vers ce site. HTTP est sans état : sans ce cookie, le serveur ne saurait pas à quel utilisateur appartient la requête.",
                "3. Non pour le PHP : il est exécuté sur le serveur et seul son résultat (du HTML) est envoyé. Oui pour le JavaScript : il est envoyé au navigateur pour y être exécuté, donc visible dans le code source.",
                "4. Avec HTTP, tout circule en clair : un espion pourrait lire le contenu du panier, les données personnelles, et surtout copier le cookie de session pour se faire passer pour l'utilisateur.",
                "HTTPS chiffre la requête, le cookie et la réponse, et garantit par un certificat que le navigateur dialogue avec le vrai site.",
                "Résultat : requête, PHP, HTML, JavaScript ; le cookie fait le lien entre les requêtes ; HTTPS protège ce cookie et les données.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'affichage d'une page Web.",
            items: [
              "L'utilisateur saisit l'adresse https://www.exemple.fr/index.html",
              "Le navigateur obtient l'adresse IP du serveur grâce au DNS",
              "Le navigateur établit une connexion sécurisée avec le serveur",
              "Le navigateur envoie la requête GET /index.html",
              "Le serveur renvoie une réponse avec le code 200 et le code HTML",
              "Le navigateur affiche la page et exécute ses scripts JavaScript",
            ],
          },
          quiz: [
            { q: "Que signifie le code de réponse 404 ?", options: ["Accès interdit", "Erreur interne du serveur", "Ressource introuvable", "Page déplacée"], answer: 2, why: "404 Not Found : le serveur ne trouve pas la ressource demandée." },
            { q: "Dans https://www.exemple.fr/blog/article.html, quel est le chemin de la ressource ?", options: ["https", "/blog/article.html", "www.exemple.fr", "https://www.exemple.fr/blog"], answer: 1, why: "Le chemin suit le nom de domaine et désigne la ressource sur le serveur." },
            { q: "Pourquoi les sites utilisent-ils des cookies ?", options: ["Pour chiffrer les pages envoyées par le serveur au client", "Pour accélérer la traduction des noms par le DNS", "Parce que HTTP ne garde pas la mémoire des requêtes", "Pour remplacer le HTML"], answer: 2, why: "HTTP est sans état : le cookie renvoyé à chaque requête permet au serveur de reconnaître le client." },
            { q: "Dans une page produite par PHP et contenant du JavaScript, qu'est-ce qui s'exécute en premier ?", options: ["Le code PHP, sur le serveur", "Le JavaScript, sur le client", "Les deux en même temps", "Le CSS, sur le serveur"], answer: 0, why: "Le serveur exécute le PHP pour fabriquer le HTML ; le navigateur exécute le JavaScript après réception." },
            { q: "Quel est le port utilisé par défaut par HTTPS ?", options: ["80", "53", "8080", "443"], answer: 3, why: "HTTPS utilise le port 443 par défaut, HTTP le port 80." },
          ],
          trap: "Confondre ce qui s'exécute sur le serveur (PHP, Python, accès à la base de données) et ce qui s'exécute sur le client (JavaScript) : le serveur ne voit jamais le JavaScript s'exécuter et le client ne voit jamais le code PHP. Autre erreur : croire que le serveur se souvient du client sans cookie.",
          method: "Pour toute question sur une application Web, dessinez une frise avec deux colonnes, client et serveur, et placez chaque action dans la bonne colonne, dans l'ordre : requête, traitement sur le serveur, réponse, exécution dans le navigateur. Notez en marge ce qui voyage sur le réseau (URL, cookies, HTML) et s'il est chiffré.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'formulaires-get-post',
          title: 'Les formulaires : méthodes GET et POST',
          minutes: 30,
          objectives: [
            "Analyser le fonctionnement d'un formulaire simple et écrire son code HTML.",
            "Distinguer les transmissions de paramètres par les requêtes GET ou POST.",
            "Choisir la méthode adaptée et identifier les précautions de sécurité liées à l'envoi de données.",
          ],
          course: [
            {
              heading: "Le formulaire HTML",
              paragraphs: [
                "Un formulaire permet à l'utilisateur d'envoyer des données au serveur : recherche, inscription, connexion, message. Il est délimité par la balise <form>, dont l'attribut action indique le programme du serveur qui traitera les données et l'attribut method la méthode HTTP (get ou post). Par exemple : <form action='recherche.php' method='get'>. Si l'attribut method est absent, la méthode GET est utilisée.",
                "À l'intérieur, chaque champ possède un attribut name, qui sera le nom du paramètre envoyé : <input type='text' name='q'> pour un texte, <input type='password' name='mdp'> pour un mot de passe (masqué à l'écran), <select name='niveau'> avec des <option value='1re'> pour une liste déroulante, des cases à cocher, des boutons radio, une zone <textarea>. Le bouton <input type='submit' value='Envoyer'> déclenche l'envoi. Un champ sans attribut name n'est pas transmis.",
                "À l'envoi, le navigateur construit des couples nom=valeur, séparés par &, par exemple q=tri+insertion&niveau=1re. Les caractères spéciaux sont encodés : l'espace devient + (ou %20), et é devient %C3%A9, codes des deux octets de ce caractère en UTF-8.",
              ],
              box: { label: "Définition", text: "<form action='programme' method='get ou post'> : action désigne le programme du serveur qui reçoit les données ; chaque champ est envoyé sous la forme nom=valeur, le nom venant de son attribut name." },
            },
            {
              heading: "La méthode GET",
              paragraphs: [
                "Avec la méthode GET, les paramètres sont ajoutés à la fin de l'URL, après un point d'interrogation : le formulaire ci-dessus envoie la requête GET /recherche.php?q=tri+insertion&niveau=1re. Les paramètres sont donc visibles dans la barre d'adresse, enregistrés dans l'historique du navigateur et souvent dans les journaux du serveur ; l'URL peut être copiée, partagée ou mise en favori. Sa longueur est limitée en pratique.",
                "GET convient aux requêtes qui se contentent de lire des informations sans rien modifier sur le serveur : une recherche, un filtre, le choix d'une page. Envoyer deux fois la même requête GET doit donner le même résultat, sans effet secondaire.",
              ],
            },
            {
              heading: "La méthode POST",
              paragraphs: [
                "Avec la méthode POST, les paramètres ne figurent pas dans l'URL : ils sont placés dans le corps de la requête, après les en-têtes. La requête POST /connexion.php HTTP/1.1 contient par exemple, dans son corps, identifiant=lea&mdp=secret. Les données n'apparaissent ni dans la barre d'adresse, ni dans l'historique, et leur taille n'est pas limitée de la même façon (on peut envoyer un long message ou un fichier).",
                "POST convient aux envois qui modifient quelque chose sur le serveur (inscription, publication d'un message, commande) et aux données confidentielles comme les mots de passe. Côté serveur, le programme récupère les valeurs par leur nom, par exemple en PHP avec $_GET['q'] pour une requête GET et $_POST['mdp'] pour une requête POST.",
              ],
              box: { label: "À retenir", text: "GET : paramètres dans l'URL, visibles, pour lire ou rechercher. POST : paramètres dans le corps de la requête, pour modifier ou envoyer des données confidentielles. Dans les deux cas, sans HTTPS, tout circule en clair." },
            },
            {
              heading: "Sécurité des données envoyées",
              paragraphs: [
                "POST n'est pas un chiffrement : les données ne sont pas visibles dans l'URL, mais elles circulent en clair dans la requête. Un espion qui intercepte le trafic d'une page en HTTP lit aussi bien les paramètres d'un POST que ceux d'un GET. Seul HTTPS chiffre la requête entière, URL et corps compris. Un formulaire de connexion doit donc utiliser POST et HTTPS.",
                "Une vérification en JavaScript (un champ obligatoire, un mot de passe d'au moins 8 caractères) améliore le confort de l'utilisateur, mais ne protège pas le serveur : n'importe qui peut désactiver JavaScript ou envoyer une requête fabriquée à la main. Le programme du serveur doit donc toujours vérifier lui-même les données reçues : ne jamais faire confiance aux données venant du client.",
              ],
              box: { label: "Règle", text: "Mot de passe : méthode POST et connexion HTTPS. Toute donnée reçue d'un formulaire doit être vérifiée par le serveur, même si elle a déjà été contrôlée en JavaScript." },
            },
          ],
          keyPoints: [
            "<form action='...' method='...'> : action indique le programme du serveur, method la méthode HTTP (GET par défaut).",
            "Chaque champ est envoyé sous la forme nom=valeur, avec le nom donné par l'attribut name ; les couples sont séparés par &.",
            "GET : paramètres dans l'URL après ?, visibles et enregistrés dans l'historique ; pour les recherches.",
            "POST : paramètres dans le corps de la requête ; pour les modifications et les données confidentielles.",
            "POST ne chiffre rien : seul HTTPS protège les données pendant le transport.",
            "Le serveur doit toujours vérifier les données reçues, même déjà contrôlées en JavaScript.",
          ],
          example: {
            statement: "On donne le formulaire : <form action='recherche.php' method='get'> <input type='text' name='q'> <select name='niveau'> <option value='2nde'>Seconde</option> <option value='1re'>Première</option> </select> <input type='submit' value='Chercher'> </form>, sur le site https://www.exemple.fr. L'utilisateur tape tri insertion et choisit Première. 1. Écrire l'URL demandée. 2. Comment le programme recherche.php peut-il lire le niveau ? 3. Que changerait method='post' ?",
            solution: [
              "Les champs transmis sont q (le texte tapé) et niveau (la valeur de l'option choisie, 1re, et non le texte affiché Première).",
              "L'espace de tri insertion est encodé par + : q=tri+insertion.",
              "1. Méthode GET, donc paramètres dans l'URL : https://www.exemple.fr/recherche.php?q=tri+insertion&niveau=1re.",
              "2. En PHP, le programme lit $_GET['niveau'], qui vaut 1re.",
              "3. Avec POST, l'URL serait simplement https://www.exemple.fr/recherche.php ; les paramètres q=tri+insertion&niveau=1re seraient dans le corps de la requête, et lus avec $_POST.",
              "Réponse : recherche.php?q=tri+insertion&niveau=1re en GET ; avec POST, les mêmes paramètres voyagent dans le corps de la requête.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un navigateur affiche l'URL https://meteo.exemple.fr/prevision.php?ville=Lyon&jours=3 après l'envoi d'un formulaire. 1. Quelle méthode le formulaire utilise-t-il ? 2. Quels sont les noms des champs et les valeurs envoyées ? 3. Quel est le programme qui traite les données ?",
              hint: "Les paramètres visibles dans l'URL, après le point d'interrogation, sont la marque d'une méthode précise.",
              solution: [
                "1. Les paramètres apparaissent dans l'URL : la méthode est GET.",
                "2. Deux champs : ville, de valeur Lyon, et jours, de valeur 3.",
                "3. Le programme prevision.php du serveur meteo.exemple.fr, indiqué par l'attribut action du formulaire.",
                "Résultat : méthode GET, ville = Lyon et jours = 3, traités par prevision.php.",
              ],
            },
            {
              level: 2,
              statement: "1. Écrire le code HTML d'un formulaire de connexion qui envoie au programme connexion.php un identifiant et un mot de passe, avec un bouton Se connecter. 2. Justifier le choix de la méthode et du type de chaque champ. 3. L'utilisatrice saisit lea et soleil2026 (données fictives). Écrire ce que contient le corps de la requête envoyée.",
              hint: "Chaque champ a besoin d'un attribut name ; le type password masque la saisie à l'écran.",
              solution: [
                "1. <form action='connexion.php' method='post'> <label>Identifiant : <input type='text' name='identifiant'></label> <label>Mot de passe : <input type='password' name='mdp'></label> <input type='submit' value='Se connecter'> </form>.",
                "2. Méthode POST : le mot de passe ne doit pas apparaître dans l'URL, l'historique ou les journaux du serveur. Le type password masque les caractères à l'écran, mais ne chiffre rien.",
                "Le site doit en outre être servi en HTTPS pour que la requête soit chiffrée pendant son transport.",
                "3. Le corps de la requête POST /connexion.php contient : identifiant=lea&mdp=soleil2026.",
                "Résultat : formulaire en POST avec un champ text et un champ password ; corps identifiant=lea&mdp=soleil2026.",
              ],
            },
            {
              level: 3,
              statement: "Le site http://www.exemple.fr propose un formulaire d'inscription : <form action='inscription.php' method='get'> avec trois champs nommés nom, prenom et mdp. Une utilisatrice saisit Martin, Léa et chat2026 (données fictives). Un script JavaScript vérifie, avant l'envoi, que le mot de passe compte au moins 8 caractères. 1. Écrire l'URL obtenue après l'envoi (le caractère é est encodé %C3%A9). 2. Citer trois inconvénients de ce choix pour le mot de passe. 3. On passe à method='post'. Un espion connecté au même Wi-Fi public peut-il encore lire le mot de passe ? Que faut-il faire ? 4. La vérification en JavaScript suffit-elle à garantir que le serveur ne recevra jamais un mot de passe trop court ? Justifier.",
              hint: "Distinguez deux questions : les données sont-elles visibles dans l'URL ? les données sont-elles chiffrées pendant le transport ?",
              solution: [
                "1. http://www.exemple.fr/inscription.php?nom=Martin&prenom=L%C3%A9a&mdp=chat2026.",
                "2. Le mot de passe est visible dans la barre d'adresse (par une personne qui regarde l'écran), enregistré dans l'historique du navigateur, et souvent conservé dans les journaux du serveur ; il peut aussi être transmis si l'on partage l'URL.",
                "De plus, une inscription modifie les données du serveur : la méthode POST est la méthode adaptée.",
                "3. Oui : avec POST, le mot de passe n'est plus dans l'URL, mais il circule en clair dans le corps de la requête, car le site utilise HTTP. Il faut servir le site en HTTPS, qui chiffre la requête entière.",
                "4. Non : JavaScript s'exécute sur le client, qui peut le désactiver ou envoyer directement une requête fabriquée vers inscription.php. Le programme du serveur doit vérifier lui-même la longueur du mot de passe.",
                "Résultat : URL avec nom, prenom et mdp en clair ; il faut POST, HTTPS et une vérification côté serveur.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les formulaires et les méthodes GET et POST.",
            statements: [
              { text: "Avec la méthode GET, les paramètres apparaissent dans l'URL.", true: true, why: "Ils sont ajoutés après un point d'interrogation, sous la forme nom=valeur séparés par &." },
              { text: "La méthode POST chiffre les données envoyées.", true: false, why: "Les données sont dans le corps de la requête, mais en clair : seul HTTPS chiffre." },
              { text: "Un champ sans attribut name n'est pas transmis au serveur.", true: true, why: "Le nom du paramètre vient de l'attribut name : sans lui, le navigateur n'envoie pas le champ." },
              { text: "Si l'attribut method est absent, le formulaire utilise POST.", true: false, why: "La méthode par défaut est GET." },
              { text: "Une vérification en JavaScript dispense le serveur de vérifier les données.", true: false, why: "Le client peut désactiver JavaScript ou fabriquer sa requête : le serveur doit toujours vérifier." },
              { text: "Une recherche peut utiliser GET, ce qui permet de partager l'URL des résultats.", true: true, why: "Les paramètres étant dans l'URL, celle-ci peut être copiée ou mise en favori." },
              { text: "Le type password chiffre le mot de passe avant son envoi.", true: false, why: "Il masque seulement la saisie à l'écran ; le chiffrement vient de HTTPS." },
            ],
          },
          quiz: [
            { q: "Quelle URL produit un formulaire en GET vers note.php avec les champs eleve = Tom et matiere = nsi ?", options: ["note.php?eleve=Tom&matiere=nsi", "note.php/eleve/Tom/matiere/nsi", "note.php&eleve=Tom?matiere=nsi", "note.php#eleve=Tom,matiere=nsi"], answer: 0, why: "Les paramètres suivent un point d'interrogation, sous la forme nom=valeur, séparés par &." },
            { q: "Où se trouvent les paramètres d'une requête POST ?", options: ["Dans l'URL", "Dans un cookie enregistré par le navigateur", "Dans le corps de la requête", "Dans le nom de domaine"], answer: 2, why: "Avec POST, les couples nom=valeur sont placés après les en-têtes, dans le corps de la requête." },
            { q: "Quelle méthode convient le mieux pour un moteur de recherche ?", options: ["POST, pour cacher les mots", "GET, pour une simple lecture", "Aucune des deux", "POST, pour accélérer l'envoi des mots"], answer: 1, why: "Une recherche ne modifie rien sur le serveur et son URL peut être partagée : GET est adapté." },
            { q: "Un site en HTTP envoie un mot de passe par POST. Un espion sur le réseau peut-il le lire ?", options: ["Non, POST le chiffre", "Non, il est masqué par le type password", "Seulement s'il connaît le serveur", "Oui, la requête circule en clair"], answer: 3, why: "POST ne chiffre pas : sans HTTPS, le corps de la requête est lisible par qui intercepte le trafic." },
            { q: "Quel attribut d'un champ donne le nom du paramètre envoyé ?", options: ["id", "value", "name", "type"], answer: 2, why: "Le paramètre est envoyé sous la forme name=valeur ; id sert au CSS et au JavaScript." },
          ],
          trap: "Croire que POST est « sécurisé » parce que les données ne sont pas visibles dans l'URL : elles circulent en clair dans le corps de la requête tant que le site n'utilise pas HTTPS. Autre erreur : oublier l'attribut name d'un champ, qui n'est alors pas envoyé.",
          method: "Face à un formulaire, posez-vous deux questions séparées. Où sont les données ? Dans l'URL (GET) ou dans le corps de la requête (POST). Sont-elles chiffrées ? Oui seulement avec HTTPS. Écrivez ensuite la requête complète, ligne de méthode comprise, pour vérifier votre réponse.",
        },
      ],
    },
  ],
}
