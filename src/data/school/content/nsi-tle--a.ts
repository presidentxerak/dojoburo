import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'nsi-tle',
  chapters: [
    /* ================================================================== */
    /* RÉCURSIVITÉ, MODULARITÉ ET MISE AU POINT                             */
    /* ================================================================== */
    {
      id: 'recursivite-modularite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'recursivite',
          title: 'La récursivité',
          minutes: 35,
          objectives: [
            "Écrire un programme récursif, en identifiant le cas de base et l'appel récursif.",
            "Analyser le fonctionnement d'un programme récursif à l'aide de la pile d'appels.",
            "Justifier la terminaison d'une fonction récursive et repérer une récursion infinie.",
            "Comparer une version récursive et une version itérative d'un même calcul.",
          ],
          course: [
            {
              heading: "Une fonction qui s'appelle elle-même",
              paragraphs: [
                "Une fonction est dite récursive lorsqu'elle s'appelle elle-même dans sa propre définition. L'idée consiste à ramener la résolution d'un problème à la résolution du même problème sur une donnée plus petite, jusqu'à atteindre un cas si simple que la réponse est immédiate. Les poupées russes en donnent une image : pour compter les poupées, on ouvre la plus grande, on compte une poupée, puis on recommence avec la poupée qu'elle contient, jusqu'à la plus petite, qui ne s'ouvre pas.",
                "Exemple classique : la factorielle d'un entier naturel n, notée n!, est le produit 1 × 2 × ... × n, avec par convention 0! = 1. On remarque que n! = n × (n - 1)! dès que n ≥ 1. Cette relation de récurrence se traduit directement en Python : def fact(n): return 1 if n == 0 else n * fact(n - 1). Ainsi fact(4) vaut 4 × fact(3), qui vaut 4 × 3 × fact(2), et ainsi de suite jusqu'à fact(0), qui vaut 1. On obtient 24.",
              ],
              box: { label: "Définition", text: "Une fonction récursive est une fonction qui contient, dans son corps, au moins un appel à elle-même. Elle comporte toujours au moins un cas de base, traité sans appel récursif, et au moins un appel récursif portant sur une donnée plus petite." },
            },
            {
              heading: "Cas de base et terminaison",
              paragraphs: [
                "Une fonction récursive correcte comporte deux ingrédients. Le cas de base (ou condition d'arrêt) est la situation où la fonction renvoie un résultat sans s'appeler : pour la factorielle, n == 0. Le cas récursif ramène le problème à une donnée strictement plus « petite » : n - 1 au lieu de n. Il faut que la suite des appels atteigne forcément le cas de base.",
                "Pour justifier la terminaison, on exhibe une quantité entière positive qui diminue strictement à chaque appel : ici l'entier n, qui passe de n à n - 1 et finit par valoir 0. Si l'on oublie le cas de base, ou si l'on appelle fact avec un argument négatif, la descente ne s'arrête jamais : Python lève alors l'exception RecursionError (maximum recursion depth exceeded), car il limite par défaut la profondeur des appels à 1000 environ.",
                "Pour éviter ce piège, on précise dans la documentation que n doit être un entier positif ou nul, et on peut le vérifier par une assertion placée en début de fonction (assert n >= 0). Le cas de base doit aussi couvrir la plus petite valeur possible : une fonction qui teste seulement n == 1 mais reçoit 0 descendra indéfiniment vers -1, -2, -3...",
              ],
              box: { label: "Règle", text: "Avant d'écrire une fonction récursive, répondez à trois questions : quel est le cas de base ? comment le problème se ramène-t-il au même problème sur une donnée plus petite ? pourquoi la suite des appels atteint-elle toujours le cas de base ?" },
            },
            {
              heading: "La pile d'appels",
              paragraphs: [
                "À chaque appel de fonction, Python crée un contexte (ou cadre) qui contient les paramètres et les variables locales de cet appel, ainsi que l'endroit où reprendre l'exécution une fois l'appel terminé. Ces contextes sont rangés dans la pile d'appels : le dernier appel lancé est le premier à se terminer. Lors d'un calcul récursif, la pile grandit pendant la phase de descente, puis se vide pendant la phase de remontée.",
                "Pour fact(3) : fact(3) attend fact(2), qui attend fact(1), qui attend fact(0). La pile contient alors quatre contextes. fact(0) renvoie 1 ; fact(1) peut finir son calcul et renvoie 1 × 1 = 1 ; fact(2) renvoie 2 × 1 = 2 ; enfin fact(3) renvoie 3 × 2 = 6. Les multiplications ne sont effectuées qu'à la remontée. Chaque contexte occupe de la mémoire : une récursion très profonde peut saturer la pile, ce qui justifie la limite imposée par Python (on la lit avec sys.getrecursionlimit()).",
              ],
              box: { label: "À retenir", text: "Appels en cours = contextes empilés. Descente : les appels s'empilent jusqu'au cas de base. Remontée : les appels se terminent dans l'ordre inverse, chacun transmettant son résultat à l'appel qui l'attendait." },
            },
            {
              heading: "Récursif ou itératif ?",
              paragraphs: [
                "Tout calcul récursif peut s'écrire avec une boucle (version itérative), et inversement. La version récursive est souvent plus proche de la définition mathématique et plus courte : elle s'impose naturellement pour les structures elles-mêmes récursives, comme les listes chaînées ou les arbres, et pour les méthodes « diviser pour régner » (recherche dichotomique, tri fusion). La version itérative consomme moins de mémoire, puisqu'elle n'empile pas de contextes.",
                "Une fonction peut contenir plusieurs appels récursifs : on parle de récursivité multiple. La suite de Fibonacci, définie par F(0) = 0, F(1) = 1 et F(n) = F(n - 1) + F(n - 2), s'écrit en une ligne, mais la version naïve recalcule de nombreuses fois les mêmes valeurs : le nombre d'appels croît de façon exponentielle avec n. On y remédie en mémorisant les résultats déjà calculés (mémoïsation), idée reprise en programmation dynamique, ou en écrivant une boucle.",
              ],
            },
          ],
          keyPoints: [
            "Une fonction récursive s'appelle elle-même ; elle comporte au moins un cas de base, traité sans appel récursif.",
            "Chaque appel récursif doit porter sur une donnée plus petite, de façon à atteindre toujours le cas de base.",
            "La terminaison se justifie par une quantité entière positive qui décroît strictement à chaque appel.",
            "Les appels en attente sont stockés dans la pile d'appels ; une récursion trop profonde provoque une RecursionError en Python.",
            "Récursif et itératif sont équivalents ; la récursivité multiple naïve (Fibonacci) peut répéter énormément de calculs.",
          ],
          example: {
            statement: "Écrire une fonction récursive puissance(x, n) qui renvoie xⁿ pour un nombre x et un entier naturel n, sans utiliser l'opérateur **. Détailler ensuite l'évaluation de puissance(2, 3).",
            solution: [
              "Cas de base : x⁰ = 1 pour tout x, donc puissance(x, 0) renvoie 1.",
              "Cas récursif : pour n ≥ 1, xⁿ = x × xⁿ⁻¹, donc puissance(x, n) renvoie x * puissance(x, n - 1).",
              "Code : def puissance(x, n): return 1 if n == 0 else x * puissance(x, n - 1).",
              "Terminaison : n est un entier positif qui diminue de 1 à chaque appel, il atteint donc 0.",
              "Descente : puissance(2, 3) = 2 × puissance(2, 2) = 2 × 2 × puissance(2, 1) = 2 × 2 × 2 × puissance(2, 0).",
              "Remontée : puissance(2, 0) renvoie 1, puis puissance(2, 1) renvoie 2, puissance(2, 2) renvoie 4 et puissance(2, 3) renvoie 8.",
              "Réponse : puissance(2, 3) vaut 8, obtenu après 4 appels de la fonction.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire une fonction récursive somme(n) qui renvoie la somme 0 + 1 + 2 + ... + n pour un entier naturel n. Calculer ensuite somme(4) en détaillant les appels.",
              hint: "Exprimez somme(n) à l'aide de somme(n - 1), puis cherchez la valeur de somme(0).",
              solution: [
                "Cas de base : somme(0) = 0.",
                "Cas récursif : pour n ≥ 1, somme(n) = n + somme(n - 1).",
                "Code : def somme(n): return 0 if n == 0 else n + somme(n - 1).",
                "Appels : somme(4) = 4 + somme(3) = 4 + 3 + somme(2) = 4 + 3 + 2 + somme(1) = 4 + 3 + 2 + 1 + somme(0).",
                "Remontée : somme(0) = 0, somme(1) = 1, somme(2) = 3, somme(3) = 6, somme(4) = 10.",
                "Résultat : somme(4) = 10 (on vérifie avec la formule n(n + 1) ÷ 2 = 4 × 5 ÷ 2 = 10).",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction suivante, écrite sur une ligne : def mystere(s): return '' if s == '' else mystere(s[1:]) + s[0]. Rappel : s[0] est le premier caractère de la chaîne s et s[1:] la chaîne privée de son premier caractère. a) Que renvoie mystere('nsi') ? Détailler les appels. b) Combien d'appels sont effectués ? c) Que fait cette fonction en général ?",
              hint: "Écrivez la descente des appels jusqu'à la chaîne vide, puis reconstruisez le résultat en remontant.",
              solution: [
                "a) mystere('nsi') = mystere('si') + 'n'.",
                "Puis mystere('si') = mystere('i') + 's' et mystere('i') = mystere('') + 'i'.",
                "Cas de base : mystere('') renvoie la chaîne vide ''.",
                "Remontée : mystere('i') = 'i', puis mystere('si') = 'i' + 's' = 'is', puis mystere('nsi') = 'is' + 'n' = 'isn'.",
                "b) Les appels portent sur 'nsi', 'si', 'i' et '' : 4 appels, soit la longueur de la chaîne plus un.",
                "c) La fonction renvoie la chaîne écrite à l'envers : mystere('nsi') vaut 'isn'.",
              ],
            },
            {
              level: 3,
              statement: "La suite de Fibonacci est définie par F(0) = 0, F(1) = 1 et, pour n ≥ 2, F(n) = F(n - 1) + F(n - 2). 1. Écrire une fonction récursive fib(n) qui renvoie F(n). 2. Calculer fib(5). 3. On note C(n) le nombre total d'appels de fib (appel initial compris) lors du calcul de fib(n). Justifier que C(0) = C(1) = 1 et que C(n) = 1 + C(n - 1) + C(n - 2) pour n ≥ 2, puis calculer C(5). 4. Combien de fois fib(2) est-il appelé lors du calcul de fib(5) ? Expliquer pourquoi cette version est inefficace et proposer une version itérative.",
              hint: "Dessinez l'arbre des appels de fib(5) : chaque appel fib(k) avec k ≥ 2 déclenche deux appels, fib(k - 1) et fib(k - 2).",
              solution: [
                "1. def fib(n): return n if n <= 1 else fib(n - 1) + fib(n - 2). Les cas de base n = 0 et n = 1 renvoient n.",
                "2. F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5 : fib(5) renvoie 5.",
                "3. Pour n ≤ 1, il n'y a que l'appel initial, d'où C(0) = C(1) = 1. Pour n ≥ 2, l'appel fib(n) compte pour 1 et déclenche fib(n - 1) et fib(n - 2), d'où C(n) = 1 + C(n - 1) + C(n - 2).",
                "On obtient C(2) = 1 + 1 + 1 = 3, C(3) = 1 + 3 + 1 = 5, C(4) = 1 + 5 + 3 = 9, C(5) = 1 + 9 + 5 = 15.",
                "4. fib(5) appelle fib(4) et fib(3) ; fib(4) appelle fib(3) et fib(2) ; chacun des deux appels à fib(3) appelle fib(2). fib(2) est donc appelé 3 fois.",
                "Les mêmes valeurs sont recalculées de nombreuses fois, et le nombre d'appels croît de façon exponentielle avec n.",
                "Version itérative : on initialise a, b = 0, 1, puis on répète n fois l'affectation a, b = b, a + b, et on renvoie a. Elle n'effectue que n tours de boucle.",
                "Résultat : fib(5) = 5, C(5) = 15 appels, dont 3 appels à fib(2).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la récursivité.",
            statements: [
              { text: "Une fonction récursive sans cas de base finit par s'arrêter normalement grâce à Python.", true: false, why: "Python l'interrompt par une RecursionError : c'est une erreur, pas une terminaison normale." },
              { text: "Dans fact(n) = n * fact(n - 1), les multiplications sont effectuées pendant la remontée.", true: true, why: "Chaque appel attend le résultat de l'appel suivant avant de pouvoir multiplier." },
              { text: "Tout algorithme récursif peut être écrit de façon itérative.", true: true, why: "On peut toujours remplacer la pile d'appels par une boucle et, si besoin, une pile explicite." },
              { text: "Une version récursive est toujours plus rapide qu'une version itérative.", true: false, why: "Elle empile des contextes et peut répéter des calculs, comme Fibonacci naïf." },
              { text: "Le cas de base est traité sans appel récursif.", true: true, why: "C'est précisément ce qui arrête la descente des appels." },
              { text: "Avec def fact(n): return 1 if n == 0 else n * fact(n - 1), l'appel fact(-1) renvoie 1.", true: false, why: "L'argument descend vers -2, -3... et n'atteint jamais 0 : RecursionError." },
              { text: "Le corps d'une fonction peut contenir deux appels récursifs.", true: true, why: "C'est la récursivité multiple, comme dans fib(n - 1) + fib(n - 2)." },
            ],
          },
          quiz: [
            { q: "Quel est le cas de base de def fact(n): return 1 if n == 0 else n * fact(n - 1) ?", options: ["n * fact(n - 1)", "n == 0, qui renvoie 1", "fact(n - 1) appelé avec n positif", "Il n'y en a pas, la fonction est infinie"], answer: 1, why: "Quand n vaut 0, la fonction renvoie 1 sans s'appeler : c'est le cas de base." },
            { q: "Que se passe-t-il en Python si une fonction récursive n'atteint jamais son cas de base ?", options: ["Elle renvoie None après 1000 appels", "Le programme tourne sans fin sans jamais s'arrêter", "Elle renvoie la dernière valeur calculée", "Une exception RecursionError est levée"], answer: 3, why: "Python limite la profondeur de la pile d'appels et lève une RecursionError quand elle est dépassée." },
            { q: "Combien d'appels de fact sont effectués pour calculer fact(5) ?", options: ["6", "5", "4", "120"], answer: 0, why: "fact(5), fact(4), fact(3), fact(2), fact(1) et fact(0) : six appels." },
            { q: "Que renvoie f(3) avec def f(n): return 0 if n == 0 else 2 + f(n - 1) ?", options: ["3", "8", "6", "5"], answer: 2, why: "f(3) = 2 + f(2) = 2 + 2 + f(1) = 2 + 2 + 2 + f(0) = 6." },
            { q: "Quelle structure Python utilise-t-il pour mémoriser les appels de fonction en attente ?", options: ["Une file", "La pile d'appels", "Un dictionnaire global", "Un arbre binaire de recherche"], answer: 1, why: "Les contextes des appels en cours sont empilés ; le dernier appel lancé est le premier terminé." },
          ],
          trap: "Oublier le cas de base, ou écrire un cas de base qui n'est jamais atteint (tester n == 1 alors que la fonction peut recevoir 0, ou recevoir un argument négatif) : la récursion ne s'arrête pas et Python lève une RecursionError.",
          method: "Pour écrire une fonction récursive, rédigez d'abord la relation mathématique (cas de base et relation de récurrence), traduisez-la ligne à ligne en Python, puis vérifiez à la main sur une petite valeur en écrivant la descente des appels et la remontée des résultats.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'modularite',
          title: 'Modularité : modules, interfaces et API',
          minutes: 30,
          objectives: [
            "Utiliser des API ou des bibliothèques en exploitant leur documentation.",
            "Créer des modules simples et les documenter.",
            "Distinguer l'interface d'un module, publique et documentée, de son implémentation.",
          ],
          course: [
            {
              heading: "Découper un programme en modules",
              paragraphs: [
                "Un programme important n'est pas écrit d'un seul bloc : on le découpe en modules, chacun chargé d'une tâche précise (calculs, affichage, accès aux données...). En Python, un module est simplement un fichier .py qui regroupe des fonctions, des classes et des constantes. Un paquet (package) est un dossier qui rassemble plusieurs modules. Cette modularité facilite la lecture, les tests, la réutilisation du code et le travail en équipe, chacun pouvant développer un module différent.",
                "On utilise un module grâce à l'instruction import. Avec import math, on écrit math.sqrt(2) : le nom du module sert de préfixe, ce qui évite toute confusion avec une autre fonction nommée sqrt. Avec from math import sqrt, pi, on importe seulement certains noms, utilisés sans préfixe. Avec import random as rd, on donne un alias au module (rd.randint(1, 6)). La forme from module import * importe tous les noms sans préfixe : elle est déconseillée, car un nom importé peut en masquer un autre sans que l'on s'en rende compte.",
              ],
              box: { label: "Repère", text: "import math → math.sqrt(2) ; from math import sqrt → sqrt(2) ; import random as rd → rd.randint(1, 6). La bibliothèque standard (math, random, time, collections...) est fournie avec Python ; les bibliothèques externes s'installent avec l'outil pip." },
            },
            {
              heading: "Interface et documentation",
              paragraphs: [
                "Pour utiliser un module, il n'est pas nécessaire de connaître son code : il suffit de connaître son interface, c'est-à-dire la liste des fonctions (ou classes) proposées, avec pour chacune son nom, ses paramètres, ce qu'elle renvoie, ses conditions d'utilisation (préconditions) et ses éventuels effets. La manière dont ces fonctions sont programmées s'appelle l'implémentation : elle reste cachée à l'utilisateur.",
                "L'interface est décrite par la documentation. En Python, chaque fonction se documente par une chaîne de documentation (docstring), placée entre triples guillemets juste sous la ligne def. On la consulte avec help(nom_de_la_fonction), et dir(module) liste les noms définis dans un module. Exploiter la documentation, c'est y lire précisément ce qui compte : par exemple, random.randint(a, b) renvoie un entier compris entre a et b inclus, alors que random.randrange(a, b) exclut b.",
              ],
              box: { label: "Définition", text: "Interface d'un module : ce que l'utilisateur doit savoir pour s'en servir (noms, paramètres, valeurs renvoyées, préconditions, effets). Implémentation : le code qui réalise ces fonctionnalités. On peut changer l'implémentation sans changer l'interface." },
            },
            {
              heading: "Créer et documenter son propre module",
              paragraphs: [
                "Créer un module, c'est écrire un fichier, par exemple geometrie.py, contenant des fonctions documentées. Un autre programme placé dans le même dossier l'utilise avec import geometrie, puis geometrie.aire_disque(3). Chaque docstring indique ce que fait la fonction, le type des paramètres et du résultat, et les préconditions, par exemple : « Renvoie l'aire d'un disque de rayon r. r est un nombre positif ou nul. »",
                "Deux conventions sont utiles. Un nom commençant par un tiret bas (_aide) signale une fonction interne, qui ne fait pas partie de l'interface et que l'utilisateur ne doit pas appeler. Le bloc if __name__ == '__main__': placé en fin de fichier contient des tests qui s'exécutent seulement quand on lance le module directement, et non quand on l'importe : on peut ainsi tester un module sans gêner les programmes qui l'utilisent.",
              ],
            },
            {
              heading: "Les API",
              paragraphs: [
                "Une API (Application Programming Interface, interface de programmation) est l'ensemble des fonctions, classes ou requêtes qu'un logiciel, une bibliothèque ou un service met à la disposition des programmeurs, avec sa documentation. L'interface d'un module Python est une API. De nombreux services en ligne (cartographie, données publiques, météo...) proposent aussi une API web : un programme leur envoie une requête HTTP à une adresse précise et reçoit en réponse des données, souvent au format JSON, qu'il peut ensuite traiter.",
                "L'intérêt d'une API est de séparer celui qui fournit un service de celui qui l'utilise. Tant que l'interface reste la même, le fournisseur peut améliorer son implémentation (la rendre plus rapide, corriger des bugs) sans que les programmes clients aient à être modifiés. C'est pourquoi il faut s'en tenir strictement à ce que dit la documentation, sans dépendre de détails internes qui pourraient changer.",
              ],
            },
          ],
          keyPoints: [
            "Un module Python est un fichier .py ; un paquet est un dossier de modules.",
            "import math impose le préfixe math. ; from math import sqrt importe un nom sans préfixe ; import random as rd crée un alias.",
            "L'interface dit quoi (noms, paramètres, résultats, préconditions) ; l'implémentation dit comment.",
            "On documente chaque fonction par une docstring, consultable avec help().",
            "Une API est l'interface qu'un logiciel ou un service offre aux programmeurs ; on s'en tient à sa documentation.",
          ],
          example: {
            statement: "La documentation du module random indique : randint(a, b) renvoie un entier N tel que a ≤ N ≤ b. Écrire un programme qui simule 1000 lancers d'un dé équilibré à six faces et affiche la fréquence d'apparition du 6.",
            solution: [
              "Importer le module : import random.",
              "Lire la documentation : les deux bornes sont incluses, donc un lancer de dé s'écrit random.randint(1, 6). Avec randrange, il faudrait écrire random.randrange(1, 7).",
              "Initialiser un compteur : nb_six = 0.",
              "Répéter 1000 fois (for _ in range(1000)) : tirer de = random.randint(1, 6) et, si de == 6, ajouter 1 à nb_six.",
              "Afficher la fréquence : print(nb_six / 1000).",
              "Résultat : la fréquence affichée varie d'une exécution à l'autre mais reste proche de 1/6 ≈ 0,167.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un programme commence par from math import sqrt, pi. Pour chacune des instructions suivantes, dire si elle s'exécute correctement et, si oui, ce qu'elle affiche : a) print(sqrt(16)) ; b) print(math.sqrt(16)) ; c) print(round(pi, 2)) ; d) print(cos(0)).",
              hint: "Seuls les noms cités après import sont disponibles, et ils s'utilisent sans préfixe.",
              solution: [
                "a) sqrt a été importé : print(sqrt(16)) affiche 4.0 (la racine carrée renvoie un flottant).",
                "b) Le nom math n'a pas été défini (on n'a pas écrit import math) : NameError.",
                "c) pi a été importé : round(pi, 2) vaut 3.14, qui est affiché.",
                "d) cos n'a pas été importé : NameError. Il faudrait écrire from math import sqrt, pi, cos.",
                "Bilan : a et c fonctionnent, b et d provoquent une NameError.",
              ],
            },
            {
              level: 2,
              statement: "Créer un module temperature.py contenant deux fonctions documentées : vers_fahrenheit(c), qui convertit une température de degrés Celsius en degrés Fahrenheit (F = C × 9/5 + 32), et vers_celsius(f), qui fait la conversion inverse. Ajouter un bloc de tests exécuté uniquement quand le module est lancé directement. Écrire enfin un programme principal qui importe le module et convertit 100 °C.",
              hint: "Inversez la formule : C = (F - 32) × 5/9. Pensez au bloc if __name__ == '__main__':.",
              solution: [
                "Fonction 1 : def vers_fahrenheit(c), avec la docstring « Renvoie en degrés Fahrenheit la température c donnée en degrés Celsius (c est un nombre). », puis return c * 9 / 5 + 32.",
                "Fonction 2 : def vers_celsius(f), avec la docstring « Renvoie en degrés Celsius la température f donnée en degrés Fahrenheit. », puis return (f - 32) * 5 / 9.",
                "Tests en fin de fichier, sous if __name__ == '__main__': : assert vers_fahrenheit(0) == 32, assert vers_fahrenheit(100) == 212 et assert vers_celsius(-40) == -40.",
                "Programme principal (dans le même dossier) : import temperature, puis print(temperature.vers_fahrenheit(100)).",
                "Lors de l'import, les tests ne sont pas exécutés, car __name__ vaut alors 'temperature' et non '__main__'.",
                "Résultat : le programme affiche 212.0, soit 100 °C = 212 °F.",
              ],
            },
            {
              level: 3,
              statement: "Un module duree.py propose l'interface suivante. en_secondes(h, m, s) : renvoie le nombre total de secondes d'une durée de h heures, m minutes et s secondes (entiers positifs ou nuls, m et s inférieurs à 60). en_hms(t) : renvoie le tuple (h, m, s) correspondant à une durée de t secondes (t entier positif ou nul). 1. Écrire une implémentation de ces deux fonctions. 2. Que renvoie en_hms(3725) ? 3. En utilisant uniquement l'interface du module, écrire une fonction ajouter(d1, d2) qui reçoit deux durées sous forme de tuples (h, m, s) et renvoie leur somme sous la même forme ; calculer ajouter((1, 30, 45), (0, 45, 30)). 4. Le développeur du module modifie le code de en_hms sans changer sa documentation. Faut-il modifier la fonction ajouter ? Justifier.",
              hint: "Utilisez la division entière // et le reste %, et dans ajouter, passez par le nombre total de secondes.",
              solution: [
                "1. en_secondes : return h * 3600 + m * 60 + s.",
                "en_hms : h = t // 3600, puis reste = t % 3600, m = reste // 60, s = reste % 60, et return (h, m, s).",
                "2. 3725 // 3600 = 1, reste 125 ; 125 // 60 = 2, reste 5 : en_hms(3725) renvoie (1, 2, 5).",
                "3. Après import duree : h1, m1, s1 = d1 ; h2, m2, s2 = d2 ; total = duree.en_secondes(h1, m1, s1) + duree.en_secondes(h2, m2, s2) ; return duree.en_hms(total).",
                "Calcul : 1 h 30 min 45 s = 5445 s et 45 min 30 s = 2730 s ; total 8175 s ; 8175 // 3600 = 2, reste 975 ; 975 // 60 = 16, reste 15.",
                "4. Non : ajouter n'utilise que l'interface (noms, paramètres, résultats documentés). Tant que celle-ci est respectée, un changement d'implémentation est sans effet sur les programmes utilisateurs.",
                "Résultats : en_hms(3725) = (1, 2, 5) et ajouter((1, 30, 45), (0, 45, 30)) = (2, 16, 15).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque instruction ou notion à sa description.",
            pairs: [
              { left: "import math", right: "Donne accès au module, avec un préfixe : math.sqrt(2)" },
              { left: "from math import sqrt", right: "Importe un seul nom, utilisable sans préfixe" },
              { left: "import random as rd", right: "Importe le module sous un alias plus court" },
              { left: "help(f)", right: "Affiche la documentation de la fonction f" },
              { left: "Docstring", right: "Chaîne de documentation placée sous la ligne def" },
              { left: "API", right: "Interface qu'un logiciel ou un service offre aux programmeurs" },
            ],
          },
          quiz: [
            { q: "Après import math, comment calcule-t-on la racine carrée de 2 ?", options: ["sqrt(2)", "math(sqrt(2))", "math.sqrt(2)", "import.sqrt(2)"], answer: 2, why: "Avec import math, les fonctions du module s'utilisent avec le préfixe math." },
            { q: "Qu'appelle-t-on l'interface d'un module ?", options: ["Ce qu'il faut savoir pour l'utiliser", "Le code source complet de toutes ses fonctions", "La fenêtre graphique qui l'affiche à l'écran", "Le dossier dans lequel il est enregistré"], answer: 0, why: "L'interface regroupe les noms, paramètres, résultats et préconditions ; le code relève de l'implémentation." },
            { q: "Pourquoi déconseille-t-on from module import * ?", options: ["Cette forme est plus lente à l'exécution", "Les fonctions importées perdent leur documentation", "Cette syntaxe n'existe pas en Python", "Un nom importé peut en masquer un autre"], answer: 3, why: "Tous les noms arrivent sans préfixe et peuvent écraser des noms déjà définis, sans avertissement." },
            { q: "Que vaut la variable __name__ dans un module que l'on importe ?", options: ["'__main__'", "Le nom du module", "None", "Le nom du programme qui l'importe"], answer: 1, why: "__name__ vaut '__main__' seulement pour le fichier lancé directement ; un module importé reçoit son propre nom." },
            { q: "Que signifie le sigle API ?", options: ["Application Programming Interface", "Automatic Program Installer", "Advanced Python Instruction", "Application Protocol for the Internet"], answer: 0, why: "API signifie Application Programming Interface, c'est-à-dire interface de programmation." },
          ],
          trap: "Confondre les formes d'import : après from math import sqrt, écrire math.sqrt(2) provoque une NameError, et après import math, écrire sqrt(2) aussi. Autre erreur fréquente : lire trop vite la documentation (randint inclut la borne supérieure, randrange l'exclut).",
          method: "Avant d'utiliser une fonction d'une bibliothèque, lisez sa documentation avec help() et notez trois choses : les paramètres attendus, la nature du résultat, et les cas particuliers (bornes incluses ou exclues, préconditions). Testez-la ensuite sur un exemple dont vous connaissez la réponse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'mise-au-point',
          title: 'Mettre au point un programme et gérer les bugs',
          minutes: 30,
          objectives: [
            "Identifier les causes typiques de bugs : typage, effets de bord, débordements dans les tableaux, conditions non exhaustives, choix des inégalités, calculs sur les flottants, nommage.",
            "Interpréter un message d'erreur de Python pour localiser et corriger un bug.",
            "Utiliser la spécification, les assertions et des jeux de tests pour mettre au point un programme.",
          ],
          course: [
            {
              heading: "Trois familles d'erreurs",
              paragraphs: [
                "Les erreurs de syntaxe (SyntaxError, IndentationError) sont détectées avant l'exécution : parenthèse oubliée, deux-points manquant après un if, indentation incohérente. Les erreurs d'exécution (exceptions) surviennent pendant le fonctionnement : TypeError (opération sur des types incompatibles), NameError (nom inconnu), IndexError (indice hors du tableau), KeyError (clé absente d'un dictionnaire), ZeroDivisionError, ValueError (valeur inadaptée, comme int('douze')), RecursionError.",
                "La troisième famille est la plus redoutable : les erreurs de logique. Le programme s'exécute sans message, mais le résultat est faux. Seuls des tests bien choisis permettent de les révéler. Lorsqu'une exception est levée, Python affiche une trace (traceback) qui se lit de bas en haut : la dernière ligne donne le type de l'erreur et un message, les lignes précédentes indiquent le fichier et le numéro de ligne où elle s'est produite, ainsi que la suite des appels qui y ont mené.",
              ],
              box: { label: "À retenir", text: "Erreur de syntaxe : le programme ne démarre pas. Exception : le programme s'arrête avec un message (type de l'erreur, ligne). Erreur de logique : aucun message, mais un résultat faux, que seuls les tests révèlent." },
            },
            {
              heading: "Les causes typiques de bugs",
              paragraphs: [
                "Typage : input() renvoie toujours une chaîne, si bien que input() + 1 lève une TypeError ; il faut convertir avec int(). Débordement dans un tableau : les indices d'un tableau t vont de 0 à len(t) - 1, donc t[len(t)] lève une IndexError, comme une boucle for i in range(1, len(t) + 1). Choix des inégalités : écrire < au lieu de ≤ décale une borne d'une unité (erreur « de un »), par exemple dans une recherche dichotomique ou un test d'admission (note ≥ 10 et non note > 10).",
                "Condition non exhaustive : si une fonction contient if x > 0: return 1 et elif x < 0: return -1, le cas x == 0 n'est pas traité et la fonction renvoie None sans prévenir. Flottants : les nombres réels sont représentés de façon approchée, si bien que 0.1 + 0.2 == 0.3 vaut False ; on compare deux flottants avec une tolérance, abs(a - b) < 1e-9, ou avec math.isclose(a, b). Nommage : des noms vagues (a, x2, liste2) ou trop proches favorisent les confusions ; un nom explicite (nb_eleves, moyenne_classe) documente déjà le code.",
                "Effets de bord non désirés : une liste est un objet modifiable (mutable), et une fonction reçoit une référence vers elle, pas une copie. Une fonction qui modifie la liste reçue en paramètre modifie donc la liste de l'appelant. De même, b = a ne copie pas une liste a : les deux noms désignent le même objet, et b.append(5) modifie aussi a. Pour obtenir une copie indépendante, on écrit b = a.copy() ou b = list(a), ou l'on construit une nouvelle liste.",
              ],
            },
            {
              heading: "Spécifier, affirmer, tester",
              paragraphs: [
                "La spécification d'une fonction, écrite dans sa docstring, précise ses préconditions (ce qui doit être vrai sur les paramètres) et ses postconditions (ce que vérifie le résultat). Une assertion, assert condition, 'message', vérifie une condition pendant l'exécution : si elle est fausse, Python lève une AssertionError avec le message. Placée en début de fonction, elle signale immédiatement un appel qui ne respecte pas les préconditions, au lieu de laisser le bug se propager.",
                "Un jeu de tests est une liste d'appels dont on connaît le résultat attendu, souvent écrite sous forme d'assertions : assert maximum([3, 8, 1]) == 8. On y inclut les cas courants mais surtout les cas limites : tableau vide ou à un seul élément, valeurs négatives ou nulles, valeur cherchée au début ou à la fin, bornes des intervalles. Comme l'a souligné l'informaticien Edsger Dijkstra, un test peut montrer la présence d'un bug mais jamais prouver son absence : plus les tests sont variés, plus la confiance est grande.",
              ],
              box: { label: "Règle", text: "Écrivez les tests avant ou en même temps que la fonction, en prévoyant au moins un cas courant, un cas limite pour chaque condition (bornes, tableau vide) et des valeurs particulières (négatives, nulles, égales)." },
            },
            {
              heading: "Une démarche de débogage",
              paragraphs: [
                "Face à un bug, on procède avec méthode. On reproduit d'abord l'erreur avec une entrée précise et la plus simple possible. On localise ensuite l'endroit fautif, à l'aide du message d'erreur ou en affichant des valeurs intermédiaires avec print. On formule une hypothèse sur la cause et on la vérifie. Le débogueur d'un environnement de développement permet d'exécuter le programme pas à pas, de poser des points d'arrêt et d'observer les variables.",
                "Une fois la correction faite, on relance tous les tests, y compris ceux qui passaient déjà : on vérifie ainsi qu'elle n'a rien cassé ailleurs (tests de non-régression). On ajoute enfin un test correspondant au bug corrigé, pour qu'il ne puisse plus revenir sans être détecté.",
              ],
            },
          ],
          keyPoints: [
            "Trois familles : erreurs de syntaxe, exceptions à l'exécution, erreurs de logique (sans message).",
            "Une trace d'erreur se lit de bas en haut : type de l'erreur, message, puis ligne en cause.",
            "Indices d'un tableau t : de 0 à len(t) - 1 ; t[len(t)] provoque une IndexError.",
            "On ne teste jamais l'égalité de deux flottants : on compare abs(a - b) à une petite tolérance.",
            "b = a ne copie pas une liste ; une fonction qui modifie une liste reçue la modifie aussi pour l'appelant.",
            "Assertions et jeux de tests (avec cas limites) détectent les bugs, sans prouver leur absence.",
          ],
          example: {
            statement: "La fonction suivante doit renvoyer le plus grand élément d'un tableau non vide d'entiers : def maximum(t): on pose m = 0, puis pour chaque x de t, si x > m alors m = x ; enfin return m. Elle passe le test maximum([3, 8, 1]) == 8. Trouver un cas où elle se trompe, expliquer le bug et le corriger.",
            solution: [
              "Chercher un cas limite : toutes les valeurs négatives. maximum([-5, -2, -8]) renvoie 0, alors que le maximum est -2.",
              "Cause : m est initialisé à 0, valeur qui n'appartient pas forcément au tableau ; aucun élément négatif ne dépasse 0.",
              "Correction : initialiser m avec le premier élément, m = t[0], puis parcourir le tableau.",
              "Précondition : t doit être non vide, sinon t[0] lève une IndexError. On l'écrit dans la docstring et on la vérifie par assert len(t) > 0, 'tableau vide'.",
              "Jeu de tests : assert maximum([3, 8, 1]) == 8, assert maximum([-5, -2, -8]) == -2, assert maximum([7]) == 7, assert maximum([4, 4]) == 4.",
              "Conclusion : le bug venait d'une initialisation arbitraire ; la version corrigée passe tous les tests, y compris les cas limites.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquer le type d'erreur levé par chacune des instructions suivantes : a) int('douze') ; b) [1, 2, 3][3] ; c) 'âge : ' + 17 ; d) {'a': 1}['b'] ; e) 5 / 0.",
              hint: "Demandez-vous à chaque fois : le type est-il incompatible, l'indice hors limites, la clé absente, la valeur inadaptée ?",
              solution: [
                "a) La chaîne 'douze' ne représente pas un entier : ValueError.",
                "b) Le tableau a 3 éléments, d'indices 0, 1 et 2 ; l'indice 3 n'existe pas : IndexError.",
                "c) On ne peut pas additionner une chaîne et un entier : TypeError (il faudrait écrire str(17)).",
                "d) La clé 'b' n'est pas dans le dictionnaire : KeyError.",
                "e) Division par zéro : ZeroDivisionError.",
                "Bilan : ValueError, IndexError, TypeError, KeyError, ZeroDivisionError.",
              ],
            },
            {
              level: 2,
              statement: "Un élève a écrit la fonction moyenne(notes) suivante : total = 0, puis pour i dans range(1, len(notes)), total = total + notes[i] ; enfin return total / len(notes). 1. Que renvoie moyenne([10, 12, 14]) ? Quelle est la valeur attendue ? 2. Corriger le bug. 3. Que se passe-t-il pour moyenne([]) ? Proposer une protection. 4. Écrire trois tests.",
              hint: "Listez les valeurs prises par i dans range(1, 3).",
              solution: [
                "1. range(1, 3) donne i = 1 puis i = 2 : total = 12 + 14 = 26, et la fonction renvoie 26 / 3 ≈ 8,67. La valeur attendue est (10 + 12 + 14) / 3 = 12.",
                "Cause : la boucle commence à l'indice 1 et oublie le premier élément (erreur de borne).",
                "2. Correction : for i in range(len(notes)), ou plus simplement for note in notes: total = total + note.",
                "3. Avec une liste vide, len(notes) vaut 0 : ZeroDivisionError. On ajoute en début de fonction assert len(notes) > 0, 'liste vide', et on l'indique comme précondition dans la docstring.",
                "4. Tests : assert moyenne([10, 12, 14]) == 12, assert moyenne([15]) == 15, assert moyenne([0, 20]) == 10.",
                "Résultat : la version corrigée renvoie 12 pour [10, 12, 14].",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction def ajouter_bonus(notes, bonus): qui exécute for i in range(len(notes)): notes[i] = notes[i] + bonus, puis return notes. On exécute : classe = [12, 15] ; nouvelles = ajouter_bonus(classe, 2) ; print(classe, nouvelles). 1. Qu'affiche ce programme ? Expliquer. 2. Réécrire la fonction pour qu'elle renvoie une nouvelle liste sans modifier celle qu'elle reçoit. 3. Un élève teste assert ajouter_bonus([0.1], 0.2) == [0.3] et obtient une AssertionError. Expliquer et proposer un test correct. 4. Modifier la fonction pour qu'aucune note ne dépasse 20, et proposer un test.",
              hint: "Une liste est un objet mutable : le paramètre notes et la variable classe désignent le même objet.",
              solution: [
                "1. Le programme affiche [14, 17] [14, 17].",
                "Explication : notes désigne la même liste que classe ; la boucle la modifie en place (effet de bord), puis la fonction renvoie cette même liste. classe et nouvelles sont donc un seul et même objet.",
                "2. Version sans effet de bord : def ajouter_bonus(notes, bonus): return [n + bonus for n in notes]. La liste reçue n'est plus modifiée : print(classe, nouvelles) affiche [12, 15] [14, 17].",
                "3. 0.1 + 0.2 vaut 0.30000000000000004 en flottant, car 0.1 et 0.2 n'ont pas de représentation binaire exacte : l'égalité stricte échoue.",
                "Test correct : r = ajouter_bonus([0.1], 0.2), puis assert abs(r[0] - 0.3) < 1e-9 (ou assert math.isclose(r[0], 0.3)).",
                "4. return [min(20, n + bonus) for n in notes] ; test : assert ajouter_bonus([19, 10], 2) == [20, 12].",
                "Résultat : avec la version corrigée, classe reste [12, 15] et les notes bonifiées sont [14, 17].",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une démarche de débogage.",
            items: [
              "Reproduire le bug avec une entrée précise et simple",
              "Lire le message d'erreur et localiser la ligne en cause",
              "Formuler une hypothèse sur la cause",
              "Vérifier l'hypothèse avec des affichages ou le débogueur",
              "Corriger le code",
              "Relancer tous les tests, anciens compris",
              "Ajouter un test qui couvre le bug corrigé",
            ],
          },
          quiz: [
            { q: "Que vaut l'expression 0.1 + 0.2 == 0.3 en Python ?", options: ["True", "Une erreur TypeError", "0.3", "False"], answer: 3, why: "0.1 + 0.2 vaut 0.30000000000000004 : les flottants sont des valeurs approchées, on les compare avec une tolérance." },
            { q: "Quelle exception provoque t[len(t)] pour un tableau t non vide ?", options: ["KeyError", "IndexError", "TypeError", "ValueError"], answer: 1, why: "Le dernier indice valide est len(t) - 1 ; l'indice len(t) est hors du tableau." },
            { q: "Après a = [1, 2], puis b = a et b.append(3), que contient a ?", options: ["[1, 2]", "[3]", "[1, 2, 3]", "[1, 2, [3]]"], answer: 2, why: "b = a ne copie pas la liste : a et b désignent le même objet, modifié par append." },
            { q: "Quelle famille d'erreurs ne produit aucun message de Python ?", options: ["Les erreurs de logique", "Les erreurs de syntaxe", "Les exceptions comme IndexError", "Les erreurs d'indentation"], answer: 0, why: "Le programme s'exécute normalement mais calcule un résultat faux : seuls les tests le révèlent." },
            { q: "Que fait l'instruction assert len(t) > 0, 'tableau vide' si t est vide ?", options: ["Elle renvoie False et continue", "Elle affiche un avertissement puis continue", "Elle lève une AssertionError", "Elle ajoute un élément au tableau"], answer: 2, why: "Une assertion fausse interrompt le programme par une AssertionError accompagnée du message." },
          ],
          trap: "Croire qu'un programme est juste parce qu'il passe un test : sans cas limites (tableau vide, valeurs négatives, bornes), les erreurs de borne et les initialisations arbitraires comme m = 0 passent inaperçues.",
          method: "Pour chaque fonction, écrivez d'abord sa docstring avec les préconditions, puis une série d'assertions de test comprenant un cas courant et tous les cas limites ; quand un test échoue, réduisez l'entrée au plus petit exemple qui reproduit l'erreur avant de modifier le code.",
        },
      ],
    },

    /* ================================================================== */
    /* LA PROGRAMMATION ORIENTÉE OBJET                                      */
    /* ================================================================== */
    {
      id: 'programmation-objet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'classes-et-objets',
          title: 'Classes, attributs, méthodes et objets',
          minutes: 35,
          objectives: [
            "Employer le vocabulaire de la programmation objet : classe, attribut, méthode, objet (instance).",
            "Écrire la définition d'une classe en Python, avec son constructeur.",
            "Accéder aux attributs et aux méthodes d'une classe.",
          ],
          course: [
            {
              heading: "Classes et objets",
              paragraphs: [
                "La programmation orientée objet regroupe dans une même entité des données et les opérations qui agissent sur ces données. Une classe est un modèle, un plan de construction, qui décrit les caractéristiques communes d'une famille d'objets. Un objet est un exemplaire concret fabriqué à partir de ce modèle : on dit que c'est une instance de la classe. Comme un plan d'architecte permet de construire plusieurs maisons de même forme mais habitées différemment, une classe permet de créer de nombreux objets ayant chacun leurs propres valeurs.",
                "En Python, on définit une classe avec le mot-clé class suivi de son nom, écrit par convention avec une majuscule : class Point:. La méthode spéciale __init__, appelée constructeur, est exécutée automatiquement à la création de chaque objet ; elle initialise ses attributs. Pour un point du plan : def __init__(self, x, y): suivi de self.x = x et self.y = y. L'instruction p = Point(2, 3) crée une instance de Point dont l'attribut x vaut 2 et l'attribut y vaut 3.",
              ],
              box: { label: "Définition", text: "Classe : modèle qui définit des attributs et des méthodes. Objet (instance) : exemplaire créé à partir d'une classe. Attribut : variable propre à un objet, qui décrit son état. Méthode : fonction définie dans la classe, qui agit sur un objet." },
            },
            {
              heading: "Les attributs et le paramètre self",
              paragraphs: [
                "Les attributs d'un objet décrivent son état. On y accède par la notation pointée : p.x vaut 2, et l'affectation p.x = 5 modifie l'attribut x de l'objet p. Chaque instance possède ses propres attributs : si q = Point(0, 0), modifier p.x ne change pas q.x. Lire un attribut qui n'existe pas provoque une AttributeError.",
                "Le paramètre self, premier paramètre de chaque méthode, désigne l'objet sur lequel la méthode travaille. Dans le constructeur, self.x = x signifie : « créer, dans l'objet en cours de construction, un attribut x qui reçoit la valeur du paramètre x ». Le nom self est une convention universellement respectée en Python. On ne le passe jamais explicitement : Python le fournit lui-même à chaque appel.",
              ],
            },
            {
              heading: "Les méthodes",
              paragraphs: [
                "Une méthode est une fonction définie à l'intérieur de la classe. Elle reçoit self en premier paramètre et peut lire ou modifier les attributs de l'objet. Pour la classe Point, on peut écrire def distance_origine(self): return (self.x ** 2 + self.y ** 2) ** 0.5. L'appel se fait avec la notation pointée : pour p = Point(3, 4), p.distance_origine() renvoie 5.0. Python traduit cet appel en Point.distance_origine(p) : l'objet p devient self.",
                "Certaines méthodes renvoient une information sans modifier l'objet (on parle d'accesseurs), d'autres modifient son état (mutateurs). Par exemple, une classe Compte dotée d'un attribut solde peut avoir une méthode deposer(self, montant) qui exécute self.solde = self.solde + montant. Après c = Compte(100) puis c.deposer(50), l'attribut c.solde vaut 150. Les méthodes permettent aussi de garantir que l'état reste cohérent, par exemple en refusant un retrait supérieur au solde.",
              ],
              box: { label: "Repère", text: "Définir : class Nom:, puis def __init__(self, ...): et def methode(self, ...):. Créer : obj = Nom(arguments). Accéder : obj.attribut. Appeler : obj.methode(arguments), sans écrire self." },
            },
            {
              heading: "Objets et références",
              paragraphs: [
                "Une variable ne contient pas l'objet lui-même mais une référence vers lui. Après q = p, les deux noms désignent le même objet : q.x = 10 modifie aussi p.x. À l'inverse, deux objets créés séparément avec les mêmes valeurs, Point(1, 2) et Point(1, 2), sont deux objets distincts : par défaut, l'opérateur == compare alors leur identité et renvoie False. Pour comparer leurs contenus, on écrit une méthode dédiée, ou l'on compare les attributs un à un.",
                "Python propose d'autres méthodes spéciales, encadrées par deux tirets bas : __str__, par exemple, définit le texte affiché par print(p). Par convention, un attribut dont le nom commence par un tiret bas (self._solde) est réservé à l'usage interne de la classe : l'utilisateur doit passer par les méthodes. Le programme de terminale n'aborde ni l'héritage ni le polymorphisme, mais l'essentiel est là : regrouper données et traitements, et masquer les détails internes derrière des méthodes.",
              ],
            },
          ],
          keyPoints: [
            "Une classe est un modèle ; un objet est une instance créée à partir de ce modèle : obj = Classe(...).",
            "Le constructeur __init__ initialise les attributs à la création de l'objet.",
            "self désigne l'objet courant ; c'est le premier paramètre de toute méthode, mais on ne l'écrit pas à l'appel.",
            "Notation pointée : obj.attribut pour un attribut, obj.methode() pour une méthode.",
            "Une variable contient une référence : après q = p, p et q désignent le même objet.",
          ],
          example: {
            statement: "Écrire une classe Rectangle dont le constructeur reçoit une largeur et une hauteur, avec deux méthodes aire() et perimetre(). Créer le rectangle r de largeur 4 et de hauteur 3, puis donner r.aire() et r.perimetre().",
            solution: [
              "En-tête : class Rectangle:.",
              "Constructeur : def __init__(self, largeur, hauteur): avec self.largeur = largeur et self.hauteur = hauteur.",
              "Méthode aire : def aire(self): return self.largeur * self.hauteur.",
              "Méthode perimetre : def perimetre(self): return 2 * (self.largeur + self.hauteur).",
              "Création de l'objet : r = Rectangle(4, 3). Python appelle __init__ avec self = r, largeur = 4 et hauteur = 3.",
              "Appels : r.aire() renvoie 4 × 3 = 12 et r.perimetre() renvoie 2 × (4 + 3) = 14.",
              "Réponse : aire 12, périmètre 14.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la classe Chien : son constructeur __init__(self, nom, age) affecte self.nom = nom et self.age = age, et sa méthode anniversaire(self) exécute self.age = self.age + 1. On exécute : rex = Chien('Rex', 3), puis rex.anniversaire(), puis print(rex.nom, rex.age). 1. Nommer la classe, ses attributs, ses méthodes et l'instance créée. 2. Qu'affiche le programme ?",
              hint: "Les attributs sont les noms précédés de self. dans le constructeur.",
              solution: [
                "1. Classe : Chien. Attributs : nom et age. Méthodes : __init__ (le constructeur) et anniversaire. Instance : l'objet désigné par rex.",
                "À la création, rex.nom vaut 'Rex' et rex.age vaut 3.",
                "rex.anniversaire() exécute self.age = self.age + 1 avec self = rex : rex.age passe à 4.",
                "2. Le programme affiche Rex 4.",
              ],
            },
            {
              level: 2,
              statement: "Écrire une classe CompteBancaire dont le constructeur reçoit le nom du titulaire et crée un attribut solde valant 0. Elle possède une méthode deposer(montant), qui ajoute montant au solde, et une méthode retirer(montant), qui retire montant et renvoie True si le solde est suffisant, et sinon ne modifie rien et renvoie False. Donner ensuite les valeurs renvoyées et le solde final après : c = CompteBancaire('Inès') ; c.deposer(100) ; c.retirer(30) ; c.retirer(80).",
              hint: "Dans retirer, comparez montant à self.solde avant toute modification.",
              solution: [
                "Constructeur : def __init__(self, titulaire): avec self.titulaire = titulaire et self.solde = 0.",
                "deposer : def deposer(self, montant): self.solde = self.solde + montant.",
                "retirer : si montant <= self.solde, faire self.solde = self.solde - montant et renvoyer True ; sinon renvoyer False sans rien modifier.",
                "Exécution : après c.deposer(100), le solde vaut 100. c.retirer(30) : 30 ≤ 100, le solde passe à 70 et la méthode renvoie True.",
                "c.retirer(80) : 80 > 70, le retrait est refusé, la méthode renvoie False et le solde reste 70.",
                "Résultat : True, puis False, et c.solde vaut 70.",
              ],
            },
            {
              level: 3,
              statement: "On définit une classe Fraction pour représenter des fractions num/den. 1. Écrire le constructeur, qui reçoit num et den (entiers) et vérifie par une assertion que den est non nul. 2. Écrire une méthode egale(self, autre) qui renvoie True si les deux fractions sont égales, en utilisant le produit en croix. Que renvoie Fraction(1, 2).egale(Fraction(2, 4)) ? 3. Écrire une méthode produit(self, autre) qui renvoie une nouvelle Fraction égale au produit des deux. Donner les attributs de f = Fraction(2, 3).produit(Fraction(3, 5)) et vérifier que f est égale à Fraction(2, 5). 4. Expliquer pourquoi Fraction(1, 2) == Fraction(1, 2) renvoie False.",
              hint: "a/b = c/d équivaut à a × d = b × c lorsque b et d sont non nuls.",
              solution: [
                "1. def __init__(self, num, den): assert den != 0, 'dénominateur nul', puis self.num = num et self.den = den.",
                "2. def egale(self, autre): return self.num * autre.den == autre.num * self.den.",
                "Fraction(1, 2).egale(Fraction(2, 4)) : 1 × 4 = 4 et 2 × 2 = 4, la méthode renvoie True.",
                "3. def produit(self, autre): return Fraction(self.num * autre.num, self.den * autre.den).",
                "f = Fraction(2 × 3, 3 × 5) = Fraction(6, 15) : f.num vaut 6 et f.den vaut 15. f.egale(Fraction(2, 5)) : 6 × 5 = 30 et 15 × 2 = 30, donc True.",
                "4. Les deux expressions créent deux objets distincts. Sans méthode spéciale __eq__, l'opérateur == compare l'identité des objets, pas leurs attributs : il renvoie False.",
                "Résultats : True, f = 6/15 (égale à 2/5), et == renvoie False car les deux objets sont différents.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : classes et objets.",
            statements: [
              { text: "Une classe et un objet désignent la même chose.", true: false, why: "La classe est le modèle ; l'objet est une instance créée à partir de ce modèle." },
              { text: "Le constructeur __init__ est appelé automatiquement à la création d'un objet.", true: true, why: "p = Point(2, 3) déclenche l'appel de __init__ avec self = p, x = 2 et y = 3." },
              { text: "Pour appeler une méthode, il faut écrire self entre les parenthèses : p.distance(self).", true: false, why: "Python fournit self automatiquement : on écrit p.distance()." },
              { text: "Deux instances d'une même classe ont forcément les mêmes valeurs d'attributs.", true: false, why: "Chaque instance possède ses propres attributs, avec ses propres valeurs." },
              { text: "Après q = p, modifier q.x modifie aussi p.x.", true: true, why: "p et q sont deux références vers le même objet." },
              { text: "Lire un attribut inexistant provoque une AttributeError.", true: true, why: "L'objet ne possède pas cet attribut : Python le signale par une AttributeError." },
              { text: "Une méthode peut modifier les attributs de l'objet sur lequel elle est appelée.", true: true, why: "C'est le cas de deposer, qui modifie self.solde." },
            ],
          },
          quiz: [
            { q: "Dans p = Point(2, 3), que représente p ?", options: ["Une instance de la classe Point", "La définition de la classe Point elle-même", "Une méthode de Point", "Un attribut de la classe"], answer: 0, why: "Point(2, 3) fabrique un objet à partir de la classe Point : p désigne cette instance." },
            { q: "Quel est le rôle de la méthode __init__ ?", options: ["Afficher l'objet avec print", "Supprimer l'objet de la mémoire", "Initialiser les attributs", "Comparer deux objets"], answer: 2, why: "Le constructeur __init__ est exécuté à la création de l'objet et initialise ses attributs." },
            { q: "Pour c = Compte(100), quelle instruction appelle correctement la méthode deposer(self, montant) ?", options: ["deposer(c, self, 50)", "c.deposer(50)", "c.deposer(self, 50)", "Compte.deposer(50)"], answer: 1, why: "On utilise la notation pointée sans écrire self : Python passe c comme premier argument." },
            { q: "Que désigne self dans une méthode ?", options: ["La classe dans laquelle la méthode est définie", "Le module courant", "Le premier attribut du constructeur", "L'objet sur lequel la méthode est appelée"], answer: 3, why: "Lors de l'appel p.methode(), Python transmet l'objet p au paramètre self." },
            { q: "Après p = Point(1, 2), puis q = p et q.x = 7, que vaut p.x ?", options: ["1", "7", "2", "Une erreur"], answer: 1, why: "q = p ne crée pas de nouvel objet : modifier q.x modifie l'unique objet, donc p.x vaut 7." },
          ],
          trap: "Oublier self : soit dans la liste des paramètres d'une méthode (TypeError à l'appel), soit devant un attribut, par exemple écrire x = x au lieu de self.x = x dans le constructeur, ce qui crée une simple variable locale : l'attribut n'existe pas et sa lecture provoque une AttributeError.",
          method: "Pour écrire une classe, listez d'abord sur papier ses attributs (l'état) et ses méthodes (les actions), avec pour chaque méthode ce qu'elle reçoit et ce qu'elle renvoie ; écrivez ensuite le constructeur, puis testez chaque méthode sur un objet créé dans la console.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'interface-implementation',
          title: 'Interface et implémentation d\'une structure de données',
          minutes: 30,
          objectives: [
            "Spécifier une structure de données par son interface.",
            "Distinguer interface et implémentation.",
            "Écrire plusieurs implémentations d'une même structure de données et comparer le coût de leurs opérations.",
          ],
          course: [
            {
              heading: "Type abstrait et interface",
              paragraphs: [
                "Une structure de données organise des informations pour en faciliter le traitement. On la décrit d'abord de façon abstraite, par ce qu'on peut faire avec elle : c'est un type abstrait de données. Son interface est la liste des opérations disponibles, avec pour chacune son nom, ses paramètres, son résultat, ses préconditions et son effet. L'interface ne dit rien de la manière dont les données sont rangées en mémoire.",
                "Exemple : le type abstrait Ensemble (collection sans doublon et sans ordre) peut être spécifié par cinq opérations. creer_ensemble() renvoie un ensemble vide ; est_vide(E) renvoie True si E ne contient aucun élément ; ajouter(E, x) ajoute x à E s'il n'y est pas déjà ; contient(E, x) renvoie True si x appartient à E ; taille(E) renvoie le nombre d'éléments. Un utilisateur peut écrire des programmes complets avec ces seules opérations, sans savoir comment elles sont programmées.",
              ],
              box: { label: "Définition", text: "Interface (ou spécification) d'une structure : les opérations qu'elle offre et ce qu'elles font. Implémentation : la représentation concrète des données en mémoire et le code des opérations. Une même interface peut avoir plusieurs implémentations." },
            },
            {
              heading: "Plusieurs implémentations d'une même interface",
              paragraphs: [
                "Implémenter un type abstrait, c'est choisir une représentation concrète et programmer chaque opération. Pour l'Ensemble, première possibilité : une liste Python sans doublon, où ajouter vérifie que x n'est pas déjà présent avant de faire append, et où contient parcourt la liste. Deuxième possibilité : un dictionnaire dont les clés sont les éléments (les valeurs associées, par exemple True, ne servent pas). Troisième possibilité, si les éléments sont des entiers de 0 à 99 : un tableau de 100 booléens, où la case d'indice x vaut True si x est présent.",
                "Ces implémentations respectent la même interface mais n'ont pas les mêmes performances. Avec une liste, contient doit parcourir jusqu'à n éléments : son coût est linéaire. Avec un dictionnaire, la recherche d'une clé se fait en temps constant en moyenne. Avec le tableau de booléens, contient est en temps constant, mais la structure ne convient qu'à de petits entiers et occupe 100 cases même pour un ensemble presque vide. Choisir une implémentation, c'est faire un compromis entre temps, mémoire et généralité.",
              ],
              box: { label: "À retenir", text: "Même interface, implémentations différentes : les programmes utilisateurs fonctionnent à l'identique, seul le coût des opérations change (linéaire pour une recherche dans une liste, constant en moyenne pour une clé de dictionnaire)." },
            },
            {
              heading: "Implémenter avec une classe",
              paragraphs: [
                "La programmation objet se prête bien à l'implémentation : les opérations de l'interface deviennent les méthodes d'une classe, et la représentation interne est stockée dans des attributs que l'utilisateur n'a pas à manipuler. Par exemple, une classe Ensemble dont le constructeur crée self._elements = [], dont la méthode ajouter(self, x) fait self._elements.append(x) si x not in self._elements, et dont la méthode contient(self, x) renvoie x in self._elements. Le tiret bas signale que _elements fait partie de l'implémentation.",
                "Si l'on remplace plus tard la liste par un dictionnaire (self._elements = {}, puis self._elements[x] = True pour ajouter, et x in self._elements pour tester), aucun programme utilisant e.ajouter(5) ou e.contient(5) n'a besoin d'être modifié. Le programme officiel recommande d'ailleurs de découvrir cette abstraction en écrivant plusieurs implémentations d'une structure simple, comme la file, réalisable avec un tableau ou avec deux piles (voir la leçon sur les files).",
              ],
            },
            {
              heading: "Pourquoi séparer interface et implémentation",
              paragraphs: [
                "Cette séparation est un principe central du génie logiciel. Elle permet de travailler à plusieurs : l'un écrit la structure, l'autre l'utilise, en ne se mettant d'accord que sur l'interface. Elle permet d'améliorer une implémentation, par exemple pour la rendre plus rapide, sans toucher au reste du programme. Elle permet enfin de raisonner sur un algorithme à un niveau abstrait (« j'empile, je dépile ») sans se perdre dans les détails de la mémoire.",
                "La contrepartie est une discipline : un programme utilisateur ne doit jamais accéder directement à la représentation interne (par exemple e._elements[0]), sinon il dépend de l'implémentation et cessera de fonctionner au premier changement. On retrouve exactement la logique des modules et des API étudiée dans le chapitre précédent.",
              ],
            },
          ],
          keyPoints: [
            "Un type abstrait de données est défini par son interface : les opérations, leurs paramètres, leurs résultats et leurs préconditions.",
            "L'implémentation choisit une représentation concrète et programme chaque opération.",
            "Une même interface peut avoir plusieurs implémentations, de coûts différents.",
            "Rechercher un élément : coût linéaire dans une liste, constant en moyenne pour une clé de dictionnaire.",
            "Le programme utilisateur n'emploie que l'interface ; il ne touche jamais aux attributs internes.",
          ],
          example: {
            statement: "On implémente l'Ensemble par une classe dont l'attribut interne est une liste. Écrire les méthodes ajouter, contient et taille, puis donner le contenu interne après e = Ensemble(), e.ajouter(4), e.ajouter(7), e.ajouter(4). Que renvoient e.contient(7) et e.taille() ?",
            solution: [
              "Constructeur : def __init__(self): self._elements = [].",
              "ajouter : def ajouter(self, x): si x not in self._elements, alors self._elements.append(x). Le test évite les doublons, exigés par l'interface.",
              "contient : def contient(self, x): return x in self._elements ; taille : def taille(self): return len(self._elements).",
              "Exécution : après ajouter(4), la liste interne vaut [4] ; après ajouter(7), [4, 7] ; le second ajouter(4) ne fait rien car 4 est déjà présent.",
              "e.contient(7) renvoie True et e.taille() renvoie 2.",
              "Remarque : contient parcourt la liste, son coût est linéaire en la taille de l'ensemble.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une structure Ensemble, classer chacune des informations suivantes dans l'interface ou dans l'implémentation : a) « taille(E) renvoie le nombre d'éléments de E » ; b) « les éléments sont rangés dans une liste Python » ; c) « contient(E, x) renvoie un booléen » ; d) « on utilise un dictionnaire dont les clés sont les éléments » ; e) « ajouter(E, x) ne modifie pas E si x y figure déjà ».",
              hint: "L'interface dit ce que fait une opération ; l'implémentation dit comment les données sont stockées.",
              solution: [
                "a) Décrit le résultat d'une opération : interface.",
                "b) Décrit la représentation en mémoire : implémentation.",
                "c) Décrit le type du résultat : interface.",
                "d) Choix de représentation : implémentation.",
                "e) Décrit l'effet d'une opération, visible par l'utilisateur : interface.",
                "Bilan : a, c et e relèvent de l'interface ; b et d de l'implémentation.",
              ],
            },
            {
              level: 2,
              statement: "Le type abstrait Point a pour interface : creer_point(x, y), abscisse(p), ordonnee(p). 1. Écrire une implémentation où un point est un tuple (x, y). 2. Écrire une seconde implémentation où un point est un dictionnaire {'x': x, 'y': y}. 3. En n'utilisant que l'interface, écrire distance(p1, p2) et calculer la distance entre les points de coordonnées (1, 2) et (4, 6).",
              hint: "La distance vaut la racine carrée de (x₂ - x₁)² + (y₂ - y₁)².",
              solution: [
                "1. Tuple : creer_point renvoie (x, y) ; abscisse(p) renvoie p[0] ; ordonnee(p) renvoie p[1].",
                "2. Dictionnaire : creer_point renvoie {'x': x, 'y': y} ; abscisse(p) renvoie p['x'] ; ordonnee(p) renvoie p['y'].",
                "3. def distance(p1, p2): dx = abscisse(p2) - abscisse(p1), dy = ordonnee(p2) - ordonnee(p1), puis return (dx ** 2 + dy ** 2) ** 0.5.",
                "Cette fonction ne mentionne ni tuple ni dictionnaire : elle fonctionne avec les deux implémentations sans modification.",
                "Calcul : dx = 4 - 1 = 3 et dy = 6 - 2 = 4, d'où √(9 + 16) = √25 = 5.",
                "Résultat : la distance vaut 5 (5.0 en Python).",
              ],
            },
            {
              level: 3,
              statement: "Un club gère les inscriptions à une sortie par une classe Inscriptions d'interface : inscrire(nom) ajoute le nom s'il n'est pas déjà inscrit ; est_inscrit(nom) renvoie un booléen ; effectif() renvoie le nombre d'inscrits. 1. Écrire une implémentation dont l'attribut interne est une liste. 2. Quel est, dans le pire des cas, le nombre de comparaisons effectuées par est_inscrit pour n inscrits ? 3. Écrire une seconde implémentation fondée sur un dictionnaire et donner le coût moyen de est_inscrit. 4. Un programme utilisateur contient la ligne print(club._noms[0]). Expliquer pourquoi c'est une mauvaise pratique.",
              hint: "x in liste compare x à chaque élément jusqu'à le trouver ; dans un dictionnaire, la recherche d'une clé ne parcourt pas les autres clés.",
              solution: [
                "1. __init__ : self._noms = [] ; inscrire : si nom not in self._noms, self._noms.append(nom) ; est_inscrit : return nom in self._noms ; effectif : return len(self._noms).",
                "2. Si le nom est absent, il est comparé aux n noms : n comparaisons, soit un coût linéaire.",
                "3. __init__ : self._noms = {} ; inscrire : self._noms[nom] = True (une clé ne peut figurer qu'une fois, donc pas de doublon) ; est_inscrit : return nom in self._noms ; effectif : return len(self._noms).",
                "Avec un dictionnaire (table de hachage), est_inscrit s'exécute en temps constant en moyenne, quel que soit n.",
                "4. _noms appartient à l'implémentation : avec la seconde version, c'est un dictionnaire et club._noms[0] provoque une KeyError. Le programme utilisateur doit se limiter aux méthodes de l'interface.",
                "Conclusion : les deux implémentations offrent la même interface ; la seconde est plus efficace pour la recherche.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "Type abstrait", right: "Structure décrite uniquement par les opérations qu'elle offre" },
              { left: "Interface", right: "Noms, paramètres, résultats et préconditions des opérations" },
              { left: "Implémentation", right: "Représentation concrète des données et code des opérations" },
              { left: "Recherche dans une liste", right: "Coût linéaire dans le pire des cas" },
              { left: "Recherche d'une clé dans un dictionnaire", right: "Coût constant en moyenne" },
              { left: "Attribut _elements", right: "Détail interne que l'utilisateur ne doit pas manipuler" },
            ],
          },
          quiz: [
            { q: "Que décrit l'interface d'une structure de données ?", options: ["La façon dont les données sont rangées en mémoire", "Le langage de programmation utilisé", "Les opérations disponibles et leur effet", "La vitesse du processeur nécessaire"], answer: 2, why: "L'interface liste les opérations et ce qu'elles font, sans rien dire de la représentation en mémoire." },
            { q: "Laquelle de ces affirmations relève de l'implémentation ?", options: ["contient(E, x) renvoie un booléen", "ajouter(E, x) ne crée jamais de doublon dans E", "taille(E) renvoie un entier positif", "Les éléments sont dans un dictionnaire"], answer: 3, why: "Le choix d'un dictionnaire est une décision de représentation ; les trois autres décrivent le comportement des opérations." },
            { q: "Quel est le coût de la recherche d'un élément dans une liste Python de n éléments, dans le pire des cas ?", options: ["Linéaire, proportionnel à n", "Constant", "Quadratique, proportionnel à n²", "Logarithmique, proportionnel à log n"], answer: 0, why: "Si l'élément est absent, il faut le comparer aux n éléments de la liste." },
            { q: "Pourquoi un programme utilisateur ne doit-il pas accéder à e._elements ?", options: ["Python l'interdit et lève toujours une erreur", "Il dépendrait de l'implémentation, qui peut changer", "Les listes sont toujours plus lentes que les dictionnaires", "L'attribut est effacé juste après l'appel du constructeur"], answer: 1, why: "Python ne l'interdit pas, mais le programme cesserait de fonctionner si la représentation interne changeait." },
            { q: "On remplace l'implémentation par liste de la classe Ensemble par une implémentation par dictionnaire. Que faut-il modifier dans les programmes qui utilisent e.ajouter et e.contient ?", options: ["Tous les appels de méthodes", "Les noms des variables", "Les instructions d'import", "Rien du tout"], answer: 3, why: "L'interface est inchangée : les programmes qui n'utilisent qu'elle fonctionnent sans modification." },
          ],
          trap: "Mélanger les niveaux : utiliser dans un programme les détails de l'implémentation (indices de la liste interne, attribut _elements) au lieu des seules opérations de l'interface, ce qui rend le programme faux dès que l'implémentation change.",
          method: "Pour chaque structure, écrivez d'abord l'interface sous forme de tableau (opération, paramètres, résultat, précondition) ; implémentez-la ensuite, puis testez-la avec un programme qui n'utilise que l'interface : si ce programme fonctionne sans changement avec deux implémentations, la séparation est réussie.",
        },
      ],
    },

    /* ================================================================== */
    /* LISTES, PILES, FILES ET DICTIONNAIRES                                */
    /* ================================================================== */
    {
      id: 'structures-lineaires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'listes-chainees',
          title: 'Les listes chaînées',
          minutes: 35,
          objectives: [
            "Spécifier le type abstrait liste par son interface (liste vide, ajout en tête, tête, queue).",
            "Implémenter une liste chaînée à l'aide d'une classe Cellule.",
            "Écrire des fonctions récursives et itératives de parcours d'une liste chaînée.",
            "Comparer liste chaînée et tableau selon le coût des opérations.",
          ],
          course: [
            {
              heading: "Le type abstrait liste",
              paragraphs: [
                "Une liste est une suite finie et ordonnée d'éléments, que l'on traite à partir de son premier élément. Son interface minimale comprend : creer_liste_vide() ; est_vide(L) ; ajouter_en_tete(L, x), qui renvoie la liste obtenue en plaçant x devant les éléments de L ; tete(L), qui renvoie le premier élément d'une liste non vide ; queue(L), qui renvoie la liste privée de son premier élément, pour une liste non vide.",
                "Cette définition est récursive : une liste est soit vide, soit formée d'une tête (un élément) suivie d'une queue (une liste). La liste 1, 2, 3 s'obtient ainsi par ajouter_en_tete(ajouter_en_tete(ajouter_en_tete(vide, 3), 2), 1). Attention au vocabulaire : le type list de Python n'est pas une liste chaînée mais un tableau dynamique, aux propriétés différentes.",
              ],
              box: { label: "Définition", text: "Une liste est soit la liste vide, soit un couple (tête, queue) où la tête est un élément et la queue une liste. Opérations : liste vide, est_vide, ajouter_en_tete, tete et queue (ces deux dernières sur une liste non vide)." },
            },
            {
              heading: "Implémentation chaînée",
              paragraphs: [
                "Une liste chaînée est formée de cellules (ou maillons). Chaque cellule contient une valeur et une référence vers la cellule suivante ; la dernière cellule pointe vers None, qui représente aussi la liste vide. En Python, on définit class Cellule: avec le constructeur def __init__(self, valeur, suivante): qui exécute self.valeur = valeur et self.suivante = suivante. La liste 1, 2, 3 s'écrit L = Cellule(1, Cellule(2, Cellule(3, None))), ce que l'on schématise par 1 → 2 → 3 → None.",
                "Les cellules ne sont pas forcément rangées côte à côte en mémoire : c'est le chaînage par références qui donne l'ordre. On accède à la tête par L.valeur, à la queue par L.suivante, au deuxième élément par L.suivante.valeur. Ajouter en tête revient à créer une seule nouvelle cellule qui pointe vers l'ancienne liste : L = Cellule(0, L). Les cellules existantes ne sont ni copiées ni déplacées.",
              ],
            },
            {
              heading: "Parcourir une liste chaînée",
              paragraphs: [
                "La structure récursive des listes appelle des fonctions récursives. La longueur d'une liste vaut 0 si elle est vide, et sinon 1 plus la longueur de sa queue : def longueur(L): return 0 if L is None else 1 + longueur(L.suivante). De la même façon, l'élément d'indice k s'obtient en renvoyant L.valeur si k == 0, et sinon l'élément d'indice k - 1 de L.suivante.",
                "On peut aussi parcourir la liste avec une boucle, à l'aide d'une variable qui avance de cellule en cellule : on initialise c = L et n = 0, puis, tant que c is not None, on ajoute 1 à n et on fait c = c.suivante. La version itérative n'utilise pas la pile d'appels et convient aux listes très longues. Dans les deux cas, on veille à ne jamais lire c.valeur quand c vaut None, ce qui provoquerait une AttributeError.",
              ],
              box: { label: "Repère", text: "Parcours itératif : c = L, puis tant que c is not None, traiter c.valeur puis avancer avec c = c.suivante. Parcours récursif : cas de base L is None, sinon traiter L.valeur et appeler la fonction sur L.suivante." },
            },
            {
              heading: "Liste chaînée ou tableau ?",
              paragraphs: [
                "Les deux structures n'ont pas les mêmes coûts. Dans une liste chaînée, l'ajout et la suppression en tête se font en temps constant (une cellule créée ou détachée), mais l'accès au k-ième élément exige de suivre k références : coût linéaire. Calculer la longueur est aussi linéaire, sauf si l'on mémorise la taille dans un attribut.",
                "Dans un tableau, comme le type list de Python, l'accès à t[k] se fait en temps constant, car les cases sont contiguës et l'adresse se calcule directement. En revanche, insérer en tête (t.insert(0, x)) oblige à décaler tous les éléments : coût linéaire. On choisit donc une liste chaînée quand on ajoute et retire surtout en tête, et un tableau quand on accède souvent aux éléments par leur indice.",
              ],
              box: { label: "À retenir", text: "Liste chaînée : ajout ou retrait en tête en temps constant, accès au k-ième élément en temps proportionnel à k. Tableau : accès par indice en temps constant, insertion en tête en temps proportionnel à la taille." },
            },
          ],
          keyPoints: [
            "Une liste est soit vide, soit une tête suivie d'une queue qui est elle-même une liste.",
            "Une liste chaînée est une suite de cellules (valeur, suivante) ; None représente la liste vide et la fin de la liste.",
            "Ajouter en tête : L = Cellule(x, L), en temps constant.",
            "Parcours : c = L puis, tant que c is not None, traiter c.valeur et avancer avec c = c.suivante.",
            "Accès au k-ième élément : coût linéaire dans une liste chaînée, constant dans un tableau.",
            "Le type list de Python est un tableau dynamique, pas une liste chaînée.",
          ],
          example: {
            statement: "Écrire une fonction récursive somme(L) qui renvoie la somme des valeurs d'une liste chaînée d'entiers (la liste vide a pour somme 0), puis calculer somme(L) pour L = Cellule(4, Cellule(7, Cellule(1, None))).",
            solution: [
              "Cas de base : si L is None, la liste est vide, on renvoie 0.",
              "Cas récursif : sinon, la somme vaut la tête plus la somme de la queue, L.valeur + somme(L.suivante).",
              "Code : def somme(L): return 0 if L is None else L.valeur + somme(L.suivante).",
              "Appels : somme(4 → 7 → 1 → None) = 4 + somme(7 → 1 → None) = 4 + 7 + somme(1 → None) = 4 + 7 + 1 + somme(None).",
              "Remontée : somme(None) = 0, puis 1, puis 8, puis 12.",
              "Réponse : somme(L) vaut 12.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On exécute L = Cellule(5, Cellule(8, Cellule(2, None))). Donner la valeur de : a) L.valeur ; b) L.suivante.valeur ; c) L.suivante.suivante.valeur ; d) L.suivante.suivante.suivante. e) On exécute ensuite L = Cellule(9, L). Schématiser la nouvelle liste.",
              hint: "Chaque .suivante fait avancer d'une cellule ; la dernière cellule pointe vers None.",
              solution: [
                "a) L.valeur est la tête : 5.",
                "b) L.suivante est la cellule contenant 8 : L.suivante.valeur vaut 8.",
                "c) Deux cellules plus loin : 2.",
                "d) La cellule contenant 2 est la dernière, elle pointe vers None : L.suivante.suivante.suivante vaut None.",
                "e) Une nouvelle cellule de valeur 9 est créée devant l'ancienne liste : 9 → 5 → 8 → 2 → None.",
              ],
            },
            {
              level: 2,
              statement: "Écrire une fonction appartient(L, x) qui renvoie True si x est une valeur de la liste chaînée L et False sinon, d'abord en version récursive, puis en version itérative. Indiquer le nombre de cellules examinées par appartient(L, 3) pour L = 4 → 3 → 9 → None, puis par appartient(L, 6).",
              hint: "Cas de base de la version récursive : la liste vide ne contient rien. Dans la version itérative, on peut renvoyer True dès que la valeur est trouvée.",
              solution: [
                "Version récursive : si L is None, renvoyer False ; si L.valeur == x, renvoyer True ; sinon renvoyer appartient(L.suivante, x).",
                "Version itérative : c = L ; tant que c is not None : si c.valeur == x, renvoyer True, sinon c = c.suivante ; après la boucle, renvoyer False.",
                "appartient(L, 3) : on examine la cellule 4 (différente de 3), puis la cellule 3, qui convient : True après 2 cellules examinées.",
                "appartient(L, 6) : on examine 4, 3 et 9, puis on atteint None : False après 3 cellules examinées.",
                "Coût : dans le pire des cas (valeur absente), toutes les cellules sont examinées ; le coût est linéaire.",
                "Résultats : True (2 cellules) et False (3 cellules).",
              ],
            },
            {
              level: 3,
              statement: "On utilise la classe Cellule (attributs valeur et suivante) et la valeur None pour la liste vide. 1. Écrire une fonction renverser(L) qui renvoie une nouvelle liste contenant les mêmes valeurs dans l'ordre inverse, en parcourant L et en ajoutant chaque valeur en tête d'une liste résultat. L'appliquer à 1 → 2 → 3 → None. 2. Écrire une fonction récursive concatener(L1, L2) qui renvoie une liste formée des valeurs de L1 suivies de celles de L2, sans modifier L1. 3. Combien de cellules concatener crée-t-elle si L1 a n éléments et L2 en a m ? Justifier. 4. Pourquoi ne peut-on pas obtenir en temps constant le dernier élément d'une liste chaînée ainsi implémentée ?",
              hint: "Pour concatener : si L1 est vide, le résultat est L2 ; sinon, c'est la tête de L1 suivie de la concaténation de la queue de L1 avec L2.",
              solution: [
                "1. def renverser(L): r = None et c = L ; tant que c is not None : r = Cellule(c.valeur, r) puis c = c.suivante ; enfin return r.",
                "Sur 1 → 2 → 3 : r devient 1 → None, puis 2 → 1 → None, puis 3 → 2 → 1 → None. Le résultat est 3 → 2 → 1 → None.",
                "2. def concatener(L1, L2): return L2 if L1 is None else Cellule(L1.valeur, concatener(L1.suivante, L2)).",
                "3. Un appel récursif est effectué pour chacune des n cellules de L1, et chacun crée une cellule ; le cas de base renvoie L2 telle quelle, sans copie. On crée donc n cellules, et le coût est proportionnel à n, indépendamment de m.",
                "Remarque : la fin du résultat partage les cellules de L2 ; modifier ensuite L2 modifierait aussi le résultat.",
                "4. Seule la première cellule est directement accessible ; pour atteindre la dernière, il faut suivre toutes les références : coût linéaire. Il faudrait mémoriser en plus une référence vers la dernière cellule.",
                "Résultats : renverser donne 3 → 2 → 1 → None ; concatener crée n cellules.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les listes chaînées.",
            statements: [
              { text: "Le type list de Python est une liste chaînée.", true: false, why: "C'est un tableau dynamique : l'accès par indice s'y fait en temps constant." },
              { text: "Ajouter un élément en tête d'une liste chaînée se fait en temps constant.", true: true, why: "On crée une seule cellule qui pointe vers l'ancienne liste." },
              { text: "Pour lire le 1000e élément d'une liste chaînée, un seul accès suffit.", true: false, why: "Il faut suivre 999 références depuis la tête." },
              { text: "La valeur None peut représenter la liste vide.", true: true, why: "C'est aussi la valeur vers laquelle pointe la dernière cellule." },
              { text: "Les cellules d'une liste chaînée sont forcément contiguës en mémoire.", true: false, why: "C'est le chaînage par références qui donne l'ordre, pas la position en mémoire." },
              { text: "La queue d'une liste non vide est elle-même une liste.", true: true, why: "C'est la définition récursive des listes." },
              { text: "Lire c.valeur alors que c vaut None provoque une erreur.", true: true, why: "None n'a pas d'attribut valeur : Python lève une AttributeError." },
            ],
          },
          quiz: [
            { q: "Que contient une cellule d'une liste chaînée ?", options: ["Uniquement une valeur, sans aucune autre information", "Une valeur et une référence vers la suivante", "Un indice et une valeur", "La longueur totale de la liste"], answer: 1, why: "Chaque cellule stocke sa valeur et la référence de la cellule suivante (None pour la dernière)." },
            { q: "Quel est le coût de l'accès au k-ième élément d'une liste chaînée ?", options: ["Proportionnel à k", "Constant", "Proportionnel à k²", "Nul, la valeur est stockée dans la tête"], answer: 0, why: "Il faut partir de la tête et suivre k références, une par cellule." },
            { q: "Pour L = Cellule(3, Cellule(6, None)), que vaut L.suivante.valeur ?", options: ["3", "None", "6", "Cellule(6, None)"], answer: 2, why: "L.suivante est la deuxième cellule, dont la valeur est 6." },
            { q: "Quelle instruction ajoute 0 en tête de la liste chaînée L ?", options: ["L.valeur = 0", "L.suivante = Cellule(0, None)", "L = Cellule(L, 0)", "L = Cellule(0, L)"], answer: 3, why: "On crée une cellule de valeur 0 dont la suivante est l'ancienne liste L." },
            { q: "Dans quel cas un tableau est-il préférable à une liste chaînée ?", options: ["Quand on accède souvent aux éléments par indice", "Quand on ajoute très souvent des éléments en tête", "Quand on retire très souvent le premier élément", "Jamais, un tableau est toujours moins efficace"], answer: 0, why: "Le tableau donne accès à t[k] en temps constant, alors que la liste chaînée doit suivre k références." },
          ],
          trap: "Oublier le cas de la liste vide (None) : lire L.valeur ou avancer avec c.suivante sans avoir vérifié que c n'est pas None provoque une AttributeError, en particulier en fin de parcours.",
          method: "Dessinez systématiquement les cellules sous forme de boîtes reliées par des flèches, avec None à la fin, et simulez votre fonction sur trois cas : la liste vide, une liste d'un seul élément et une liste de trois éléments.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'piles',
          title: 'Les piles',
          minutes: 30,
          objectives: [
            "Spécifier le type abstrait pile par son interface et le distinguer des autres structures par le jeu de ses opérations.",
            "Implémenter une pile à l'aide d'un tableau Python ou d'une liste chaînée.",
            "Utiliser une pile pour résoudre un problème : vérification du parenthésage, évaluation d'une expression postfixée.",
          ],
          course: [
            {
              heading: "Le principe LIFO",
              paragraphs: [
                "Une pile est une structure linéaire dans laquelle on ajoute et on retire les éléments du même côté, appelé le sommet. Le dernier élément ajouté est le premier retiré : c'est le mode LIFO (Last In, First Out, « dernier entré, premier sorti »). L'image est celle d'une pile d'assiettes : on pose une assiette sur le dessus, et c'est aussi sur le dessus que l'on prend la suivante.",
                "L'interface d'une pile comprend : creer_pile_vide() ; est_vide(P) ; empiler(P, x), qui place x au sommet ; depiler(P), qui retire l'élément du sommet et le renvoie, sur une pile non vide ; et souvent sommet(P), qui renvoie l'élément du sommet sans le retirer, et taille(P). Dépiler une pile vide est une erreur : c'est une précondition à vérifier.",
              ],
              box: { label: "Définition", text: "Pile : structure LIFO. Opérations : creer_pile_vide, est_vide, empiler (push), depiler (pop, sur une pile non vide), éventuellement sommet et taille. On n'accède qu'à l'élément du sommet." },
            },
            {
              heading: "Deux implémentations",
              paragraphs: [
                "Avec un tableau Python (type list), le sommet est la fin du tableau : empiler(x) s'écrit self.contenu.append(x), dépiler s'écrit self.contenu.pop(), et est_vide teste len(self.contenu) == 0. Ces deux opérations se font en temps constant (en moyenne pour append). On encapsule le tout dans une classe Pile dont la méthode depiler vérifie d'abord que la pile n'est pas vide.",
                "Avec une liste chaînée, le sommet est la tête de la liste : empiler revient à faire self.haut = Cellule(x, self.haut) ; dépiler, à lire self.haut.valeur puis à faire self.haut = self.haut.suivante. Là encore, chaque opération est en temps constant. On évite en revanche d'utiliser le début d'un tableau Python comme sommet : insert(0, x) et pop(0) décalent tous les éléments et coûtent un temps linéaire.",
              ],
            },
            {
              heading: "Les piles en informatique",
              paragraphs: [
                "Les piles sont partout. La pile d'appels conserve les contextes des fonctions en cours, ce qui rend la récursivité possible. La fonction « annuler » d'un éditeur empile chaque action et dépile la dernière pour l'annuler. Le bouton « retour » d'un navigateur s'appuie sur la pile des pages visitées. Le parcours en profondeur d'un graphe, étudié plus loin, utilise aussi une pile.",
                "Vérifier qu'une expression est bien parenthésée est un exemple classique. On lit les caractères de gauche à droite : on empile chaque parenthèse ouvrante ; à chaque fermante, la pile ne doit pas être vide et l'ouvrante dépilée doit lui correspondre (une parenthèse avec une parenthèse, un crochet avec un crochet, une accolade avec une accolade). À la fin, la pile doit être vide. Ainsi « ([]) » est correcte, alors que « ([)] » ne l'est pas : à la lecture de la parenthèse fermante, on dépile un crochet ouvrant, qui ne lui correspond pas.",
              ],
            },
            {
              heading: "Évaluer une expression postfixée",
              paragraphs: [
                "En notation postfixée (ou polonaise inverse), l'opérateur est écrit après ses deux opérandes : 3 + 4 s'écrit 3 4 +, et (3 + 4) × 2 s'écrit 3 4 + 2 ×. Cette notation se passe de parenthèses et s'évalue avec une pile. On lit les éléments de gauche à droite : un nombre est empilé ; pour un opérateur, on dépile deux valeurs, b puis a, on calcule a opérateur b et on empile le résultat. À la fin, la pile contient une seule valeur : le résultat.",
                "Pour 3 4 + 2 × : on empile 3, puis 4 ; le + dépile 4 et 3 et empile 7 ; on empile 2 ; le × dépile 2 et 7 et empile 14. Le résultat est 14. L'ordre de dépilement compte pour la soustraction et la division : pour 8 2 -, on dépile b = 2 puis a = 8 et l'on calcule 8 - 2 = 6, et non 2 - 8.",
              ],
              box: { label: "Règle", text: "Expression postfixée : un nombre est empilé ; pour un opérateur, dépiler b, puis dépiler a, et empiler a opérateur b. Le résultat est l'unique valeur restant dans la pile." },
            },
          ],
          keyPoints: [
            "Une pile suit le mode LIFO : le dernier élément empilé est le premier dépilé.",
            "Interface : creer_pile_vide, est_vide, empiler, depiler (sur une pile non vide), sommet, taille.",
            "Avec une list Python, le sommet est la fin : append et pop() sont en temps constant.",
            "Applications : pile d'appels, annulation, historique de navigation, parenthésage, expressions postfixées, parcours en profondeur.",
            "Postfixé : pour un opérateur, dépiler b puis a et empiler a opérateur b.",
          ],
          example: {
            statement: "Évaluer à l'aide d'une pile l'expression postfixée 5 1 2 + 4 × + 3 -, en donnant l'état de la pile (sommet à droite) après chaque élément lu.",
            solution: [
              "5 : empiler → [5]. 1 : empiler → [5, 1]. 2 : empiler → [5, 1, 2].",
              "+ : dépiler 2 et 1, empiler 1 + 2 = 3 → [5, 3].",
              "4 : empiler → [5, 3, 4].",
              "× : dépiler 4 et 3, empiler 3 × 4 = 12 → [5, 12].",
              "+ : dépiler 12 et 5, empiler 5 + 12 = 17 → [17].",
              "3 : empiler → [17, 3]. - : dépiler b = 3 puis a = 17, empiler 17 - 3 = 14 → [14].",
              "Résultat : la pile contient une seule valeur, 14, qui correspond à l'expression 5 + (1 + 2) × 4 - 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une pile P est vide. On effectue dans l'ordre : empiler(P, 4), empiler(P, 7), empiler(P, 2), depiler(P), empiler(P, 9), sommet(P), depiler(P), depiler(P). Donner la valeur renvoyée par chaque opération qui renvoie quelque chose, puis le contenu final de la pile.",
              hint: "Notez l'état de la pile après chaque opération, avec le sommet à droite.",
              solution: [
                "Après les trois empilements : [4, 7, 2].",
                "depiler renvoie 2 → [4, 7]. empiler 9 → [4, 7, 9].",
                "sommet renvoie 9 sans le retirer → [4, 7, 9].",
                "depiler renvoie 9 → [4, 7]. depiler renvoie 7 → [4].",
                "Résultat : valeurs renvoyées 2, 9, 9 et 7 ; la pile finale contient seulement 4.",
              ],
            },
            {
              level: 2,
              statement: "1. Écrire en notation postfixée l'expression (2 + 3) × (7 - 4). 2. Évaluer avec une pile l'expression postfixée 6 2 / 3 4 × +, en donnant l'état de la pile (sommet à droite) après chaque élément lu.",
              hint: "Écrivez chaque parenthèse sous forme postfixée, puis placez à la fin l'opérateur qui les relie.",
              solution: [
                "1. 2 + 3 s'écrit 2 3 + et 7 - 4 s'écrit 7 4 - ; le produit s'écrit donc 2 3 + 7 4 - ×.",
                "Vérification : 2 3 + donne 5, 7 4 - donne 3, puis × donne 15, qui est bien (2 + 3) × (7 - 4).",
                "2. 6 → [6] ; 2 → [6, 2] ; / : dépiler 2 puis 6, empiler 6 / 2 = 3 → [3].",
                "3 → [3, 3] ; 4 → [3, 3, 4] ; × : dépiler 4 et 3, empiler 12 → [3, 12].",
                "+ : dépiler 12 et 3, empiler 15 → [15].",
                "Résultat : 2 3 + 7 4 - × pour la question 1, et la valeur 15 pour la question 2.",
              ],
            },
            {
              level: 3,
              statement: "On dispose d'une classe Pile dont l'interface est : Pile() crée une pile vide, est_vide(), empiler(x), depiler(). 1. Écrire une fonction bien_parenthesee(expr) qui renvoie True si la chaîne expr, ne contenant que des parenthèses, crochets et accolades, est correctement parenthésée, et False sinon. 2. Dérouler la fonction sur '{[()]}' puis sur '([)]' en indiquant le contenu de la pile. 3. Que renvoie la fonction pour '(()' ? Quelle instruction le garantit ? 4. Écrire une fonction taille(p) qui renvoie le nombre d'éléments de la pile p en n'utilisant que l'interface, et telle que p soit identique avant et après l'appel.",
              hint: "Utilisez un dictionnaire qui associe à chaque fermante son ouvrante : {')': '(', ']': '[', '}': '{'}. Pour la taille, dépilez dans une pile auxiliaire, puis remettez tout en place.",
              solution: [
                "1. On crée p = Pile() et assoc = {')': '(', ']': '[', '}': '{'}. Pour chaque caractère c de expr : si c est une ouvrante, on l'empile ; sinon, si p.est_vide() ou si p.depiler() != assoc[c], on renvoie False. Après la boucle, on renvoie p.est_vide().",
                "2. '{[()]}' : on empile {, puis [, puis ( (pile « { [ ( », sommet à droite). La fermante ) dépile (, qui correspond : pile « { [ ». ] dépile [ : pile « { ». } dépile { : pile vide. La fonction renvoie True.",
                "'([)]' : on empile ( puis [ (pile « ( [ »). La fermante ) dépile [, qui ne correspond pas à ( : la fonction renvoie False.",
                "3. '(()' : on empile ( puis ( (pile « ( ( »), puis ) dépile ( : pile « ( ». La boucle se termine mais la pile n'est pas vide : la dernière instruction, return p.est_vide(), renvoie False.",
                "4. def taille(p): aux = Pile() et n = 0 ; tant que not p.est_vide() : aux.empiler(p.depiler()) et n = n + 1 ; puis tant que not aux.est_vide() : p.empiler(aux.depiler()) ; enfin return n.",
                "Le second transfert rétablit l'ordre initial, car passer deux fois par une pile inverse deux fois l'ordre des éléments.",
                "Résultats : True pour '{[()]}', False pour '([)]' et pour '(()'.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'évaluation de l'expression postfixée 2 3 4 × +.",
            items: [
              "Empiler 2",
              "Empiler 3",
              "Empiler 4",
              "Lire × : dépiler 4 et 3, empiler 12",
              "Lire + : dépiler 12 et 2, empiler 14",
              "Lire le résultat 14, seule valeur restante",
            ],
          },
          quiz: [
            { q: "Que signifie LIFO ?", options: ["Le premier entré est le premier sorti", "Les éléments sortent par ordre croissant", "Le plus petit élément sort en premier", "Le dernier entré est le premier sorti"], answer: 3, why: "Last In, First Out : dans une pile, le dernier élément empilé est le premier dépilé." },
            { q: "Avec une list Python t utilisée comme pile, quelle instruction dépile le sommet ?", options: ["t.pop(0)", "t.remove()", "t.pop()", "del t[0]"], answer: 2, why: "Le sommet est la fin du tableau : t.pop() le retire et le renvoie en temps constant." },
            { q: "Que vaut l'expression postfixée 9 3 - 2 × ?", options: ["-12", "12", "3", "15"], answer: 1, why: "9 3 - donne 9 - 3 = 6, puis 6 2 × donne 12." },
            { q: "Lors de la vérification du parenthésage de '(()', que contient la pile à la fin de la lecture ?", options: ["Une parenthèse ouvrante", "Rien, elle est vide", "Deux parenthèses ouvrantes", "Une parenthèse fermante"], answer: 0, why: "Deux ouvrantes sont empilées, la fermante en dépile une : il en reste une, donc l'expression est incorrecte." },
            { q: "Quelle situation utilise naturellement une pile ?", options: ["Servir les clients d'un guichet dans l'ordre d'arrivée", "Gérer une file d'impression", "Annuler les dernières actions dans un éditeur", "Trier des notes par ordre croissant"], answer: 2, why: "On annule d'abord la dernière action effectuée : c'est le mode LIFO." },
          ],
          trap: "Inverser l'ordre des opérandes lors d'une soustraction ou d'une division en notation postfixée : le premier élément dépilé est le second opérande (pour 8 2 -, on calcule 8 - 2 et non 2 - 8). Autre erreur : dépiler une pile vide sans l'avoir testée.",
          method: "Pour toute question sur une pile, tracez l'état de la pile après chaque opération, toujours avec le sommet du même côté (à droite par exemple), et vérifiez avant chaque dépilement que la pile n'est pas vide.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'files',
          title: 'Les files',
          minutes: 30,
          objectives: [
            "Spécifier le type abstrait file par son interface et distinguer les modes FIFO et LIFO.",
            "Implémenter une file de plusieurs façons : tableau, liste chaînée, deux piles.",
            "Choisir entre pile et file selon la situation à modéliser.",
          ],
          course: [
            {
              heading: "Le principe FIFO",
              paragraphs: [
                "Une file est une structure linéaire dans laquelle on ajoute les éléments à une extrémité, la queue (ou l'arrière), et on les retire à l'autre, la tête (ou l'avant). Le premier élément ajouté est le premier retiré : c'est le mode FIFO (First In, First Out, « premier entré, premier sorti »). C'est le fonctionnement d'une file d'attente à un guichet : on s'y place à l'arrière et on est servi quand on arrive à l'avant.",
                "L'interface d'une file comprend : creer_file_vide() ; est_vide(F) ; enfiler(F, x), qui ajoute x en queue ; defiler(F), qui retire l'élément de tête et le renvoie, sur une file non vide ; et souvent premier(F), qui renvoie l'élément de tête sans le retirer, et taille(F). Pile et file ont des interfaces presque identiques : seul l'ordre de sortie les distingue.",
              ],
              box: { label: "Définition", text: "File : structure FIFO. Opérations : creer_file_vide, est_vide, enfiler (en queue), defiler (en tête, sur une file non vide), éventuellement premier et taille." },
            },
            {
              heading: "Implémenter une file",
              paragraphs: [
                "Avec un tableau Python, on peut enfiler avec append et défiler avec pop(0). C'est simple mais coûteux : pop(0) décale tous les éléments restants, d'où un coût linéaire. Une liste chaînée convient mieux, à condition de garder deux références, l'une vers la première cellule (pour défiler) et l'autre vers la dernière (pour enfiler) : les deux opérations sont alors en temps constant. On peut aussi utiliser un tableau de taille fixe géré de façon circulaire, avec deux indices de début et de fin qui reviennent à 0 lorsqu'ils atteignent la fin du tableau.",
                "Python fournit dans le module collections la classe deque (double-ended queue, file à deux bouts), qui permet d'ajouter et de retirer aux deux extrémités en temps constant : append pour enfiler et popleft pour défiler. En pratique, c'est la solution à privilégier pour une file en Python.",
              ],
            },
            {
              heading: "Une file avec deux piles",
              paragraphs: [
                "Le programme cite un exemple remarquable : implémenter une file à l'aide de deux piles. La pile entree reçoit les éléments enfilés. La pile sortie fournit les éléments défilés. Pour défiler, si sortie est vide, on y transvase tous les éléments de entree (on les dépile un à un et on les empile dans sortie), ce qui inverse leur ordre : le plus ancien se retrouve au sommet de sortie. On dépile alors sortie.",
                "Chaque élément est empilé et dépilé au plus une fois dans chaque pile, si bien que le coût moyen d'une opération reste constant, même si un défilement qui provoque un transvasement coûte ponctuellement plus cher. On parle de coût amorti constant. Cet exemple illustre parfaitement la séparation entre interface et implémentation : l'utilisateur manipule une file, sans savoir qu'elle est faite de deux piles.",
              ],
              box: { label: "À retenir", text: "File avec deux piles : enfiler, c'est empiler dans entree. Défiler : si sortie est vide, transvaser toute la pile entree dans sortie ; puis dépiler sortie." },
            },
            {
              heading: "Pile ou file ?",
              paragraphs: [
                "On choisit une file lorsque l'ordre d'arrivée doit être respecté : file d'impression, requêtes adressées à un serveur, tâches en attente du processeur, mémoire tampon (buffer) entre un clavier et un programme, parcours en largeur d'un graphe ou d'un arbre. On choisit une pile lorsque c'est le plus récent qui doit être traité en premier : annulation, retour arrière, appels de fonctions, parcours en profondeur.",
                "Un même algorithme peut changer de nature selon la structure : si l'on remplace la file d'un parcours en largeur par une pile, on obtient un parcours en profondeur. Distinguer les structures par le jeu de leurs opérations et par l'ordre dans lequel elles restituent les éléments est donc une compétence clé du programme.",
              ],
            },
          ],
          keyPoints: [
            "Une file suit le mode FIFO : le premier élément enfilé est le premier défilé.",
            "Interface : creer_file_vide, est_vide, enfiler (en queue), defiler (en tête), premier, taille.",
            "pop(0) sur une list Python coûte un temps linéaire ; collections.deque offre append et popleft en temps constant.",
            "Avec deux piles : on enfile dans entree ; pour défiler, on transvase entree dans sortie si sortie est vide, puis on dépile sortie.",
            "File : ordre d'arrivée (impression, serveur, parcours en largeur) ; pile : le plus récent d'abord.",
          ],
          example: {
            statement: "Une file est implémentée par deux piles entree et sortie (sommet à droite), initialement vides. On effectue : enfiler 1, enfiler 2, enfiler 3, defiler, enfiler 4, defiler, defiler, defiler. Donner l'état des deux piles et la valeur renvoyée à chaque défilement.",
            solution: [
              "Enfiler 1, 2, 3 : entree = [1, 2, 3], sortie = [].",
              "Premier defiler : sortie est vide, on transvase en dépilant 3, 2 puis 1 de entree pour les empiler dans sortie : sortie = [3, 2, 1] et entree = []. On dépile sortie : valeur 1, sortie = [3, 2].",
              "Enfiler 4 : entree = [4], sortie = [3, 2].",
              "Deuxième defiler : sortie n'est pas vide, on la dépile : valeur 2, sortie = [3].",
              "Troisième defiler : valeur 3, sortie = [].",
              "Quatrième defiler : sortie est vide, on transvase entree : sortie = [4], entree = [] ; on dépile : valeur 4.",
              "Résultat : les valeurs sont défilées dans l'ordre 1, 2, 3, 4, c'est-à-dire dans l'ordre d'arrivée, comme l'exige une file.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une file F est vide. On effectue dans l'ordre : enfiler(F, 'A'), enfiler(F, 'B'), enfiler(F, 'C'), defiler(F), enfiler(F, 'D'), defiler(F). Donner les valeurs renvoyées et le contenu final de la file (tête à gauche). Comparer avec le résultat obtenu par une pile soumise aux opérations empiler et depiler correspondantes.",
              hint: "Dans une file, on retire toujours l'élément arrivé le plus tôt.",
              solution: [
                "Après trois enfilements : A B C (A en tête).",
                "defiler renvoie A → B C. enfiler D → B C D.",
                "defiler renvoie B → C D.",
                "File : valeurs renvoyées A puis B, contenu final C D.",
                "Avec une pile : après A, B, C, depiler renvoie C → A B ; empiler D → A B D ; depiler renvoie D → A B.",
                "Résultat : avec la file, A et B sont renvoyés et il reste C D ; avec la pile, C et D sont renvoyés et il reste A B.",
              ],
            },
            {
              level: 2,
              statement: "Cinq joueurs A, B, C, D, E sont placés dans une file, A en tête. À chaque tour, on fait passer deux fois le joueur de tête en queue (défiler puis enfiler), puis on élimine le joueur de tête (défiler sans réenfiler). On recommence jusqu'à ce qu'il ne reste qu'un joueur. 1. Donner l'ordre d'élimination et le gagnant. 2. Écrire en Python une fonction gagnant(joueurs) qui réalise ce jeu avec collections.deque.",
              hint: "Écrivez le contenu de la file au début de chaque tour, tête à gauche.",
              solution: [
                "Tour 1 : A B C D E → B C D E A → C D E A B ; C est éliminé. File : D E A B.",
                "Tour 2 : D E A B → E A B D → A B D E ; A est éliminé. File : B D E.",
                "Tour 3 : B D E → D E B → E B D ; E est éliminé. File : B D.",
                "Tour 4 : B D → D B → B D ; B est éliminé. Il reste D.",
                "2. from collections import deque ; def gagnant(joueurs): f = deque(joueurs) ; tant que len(f) > 1 : répéter deux fois f.append(f.popleft()), puis exécuter f.popleft() ; enfin return f[0].",
                "Résultat : ordre d'élimination C, A, E, B ; le gagnant est D.",
              ],
            },
            {
              level: 3,
              statement: "On implémente une file par une classe File à deux attributs, self.entree et self.sortie, deux listes Python utilisées comme piles (sommet à la fin). 1. Écrire le constructeur et les méthodes est_vide() et enfiler(x). 2. Écrire la méthode defiler(), qui suppose la file non vide. 3. On exécute : f = File(), f.enfiler(10), f.enfiler(20), f.defiler(), f.enfiler(30), f.enfiler(40), f.defiler(), f.defiler(). Donner les valeurs renvoyées et le contenu des attributs à la fin. 4. Combien d'opérations append et pop (au total) subit au plus un élément enfilé puis défilé ? En déduire le coût moyen d'une opération.",
              hint: "Un élément est empilé dans entree, dépilé de entree, empilé dans sortie, puis dépilé de sortie.",
              solution: [
                "1. __init__ : self.entree = [] et self.sortie = []. est_vide : return len(self.entree) == 0 and len(self.sortie) == 0. enfiler : self.entree.append(x).",
                "2. defiler : si len(self.sortie) == 0, alors tant que len(self.entree) > 0 : self.sortie.append(self.entree.pop()) ; puis return self.sortie.pop().",
                "3. enfiler 10 et 20 : entree = [10, 20]. defiler : transvasement, sortie = [20, 10] et entree = [] ; on renvoie 10, sortie = [20].",
                "enfiler 30 et 40 : entree = [30, 40], sortie = [20]. defiler : sortie n'est pas vide, on renvoie 20, sortie = [].",
                "defiler : sortie est vide, transvasement : sortie = [40, 30] et entree = [] ; on renvoie 30, sortie = [40].",
                "Valeurs renvoyées : 10, 20 et 30. À la fin, entree = [] et sortie = [40] : la file contient encore 40.",
                "4. Chaque élément subit au plus 4 opérations : un append dans entree, un pop de entree, un append dans sortie et un pop de sortie. Pour n éléments enfilés puis défilés, il y a donc au plus 4n opérations : le coût moyen par opération est constant (coût amorti).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa description.",
            pairs: [
              { left: "FIFO", right: "Premier entré, premier sorti" },
              { left: "LIFO", right: "Dernier entré, premier sorti" },
              { left: "enfiler", right: "Ajouter un élément en queue de file" },
              { left: "defiler", right: "Retirer et renvoyer l'élément de tête" },
              { left: "pop(0) sur une list Python", right: "Retrait en tête de coût linéaire" },
              { left: "collections.deque", right: "Ajout et retrait aux deux bouts en temps constant" },
            ],
          },
          quiz: [
            { q: "On enfile 5, puis 8, puis 3 dans une file vide, puis on défile une fois. Quelle valeur obtient-on ?", options: ["5", "3", "8", "16"], answer: 0, why: "Dans une file, le premier élément enfilé, 5, est le premier défilé." },
            { q: "Quelle situation se modélise naturellement par une file ?", options: ["Le bouton annuler d'un éditeur de texte", "Les documents en attente d'une imprimante", "La pile des appels d'une fonction récursive", "Le bouton retour d'un navigateur web"], answer: 1, why: "Les documents sont imprimés dans l'ordre d'arrivée : c'est le mode FIFO." },
            { q: "Pourquoi défiler avec pop(0) sur une list Python est-il peu efficace ?", options: ["pop(0) n'existe pas en Python", "La list est entièrement triée à chaque appel", "pop(0) retire en réalité le dernier élément", "Les éléments restants sont tous décalés"], answer: 3, why: "Retirer la première case d'un tableau oblige à décaler tous les autres éléments : coût linéaire." },
            { q: "Dans une file faite de deux piles, quand transvase-t-on entree dans sortie ?", options: ["À chaque enfilement", "À chaque défilement, systématiquement", "Lors d'un défilement, si sortie est vide", "Jamais, les deux piles sont indépendantes"], answer: 2, why: "On ne transvase que lorsque sortie est vide, ce qui garantit l'ordre FIFO et un coût amorti constant." },
            { q: "Quel parcours de graphe utilise une file ?", options: ["Le parcours en profondeur", "Le parcours en largeur", "Le parcours d'une pile d'appels", "Aucun parcours"], answer: 1, why: "Le parcours en largeur traite les sommets dans l'ordre où ils sont découverts, grâce à une file." },
          ],
          trap: "Confondre la tête et la queue d'une file : on enfile en queue et on défile en tête. Autre erreur classique : défiler avec pop() au lieu de pop(0) sur une list Python, ce qui retire le dernier élément arrivé et transforme la file en pile.",
          method: "Pour choisir entre pile et file, posez-vous une seule question : quel élément doit être traité en premier, le plus ancien (file) ou le plus récent (pile) ? Vérifiez ensuite votre choix en simulant trois opérations à la main.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'dictionnaires',
          title: 'Dictionnaires : index et clé',
          minutes: 30,
          objectives: [
            "Spécifier le type abstrait dictionnaire (tableau associatif) et utiliser les dictionnaires de Python.",
            "Distinguer l'index d'un tableau et la clé d'un dictionnaire.",
            "Distinguer la recherche d'une valeur dans une liste et dans un dictionnaire.",
            "Choisir une structure de données adaptée à la situation à modéliser.",
          ],
          course: [
            {
              heading: "Clés et valeurs",
              paragraphs: [
                "Un dictionnaire (ou tableau associatif) est une structure qui associe des valeurs à des clés. Chaque clé est unique et donne accès à une seule valeur, comme un mot d'un dictionnaire de langue donne accès à sa définition. Dans un tableau, on accède à un élément par son index, un entier de 0 à n - 1 qui indique une position. Dans un dictionnaire, on y accède par une clé, qui peut être une chaîne, un entier ou un tuple : on écrit notes['Lina'] au lieu de devoir se souvenir que Lina est à la position 3.",
                "L'interface du type abstrait dictionnaire comprend : créer un dictionnaire vide ; ajouter une association clé-valeur (ou modifier la valeur si la clé existe déjà) ; lire la valeur associée à une clé présente ; supprimer une clé ; tester si une clé est présente. On peut aussi parcourir l'ensemble des clés.",
              ],
              box: { label: "Définition", text: "Un dictionnaire est un ensemble de couples (clé, valeur) dans lequel chaque clé est unique. On accède à une valeur par sa clé, et non par une position comme dans un tableau." },
            },
            {
              heading: "Les dictionnaires en Python",
              paragraphs: [
                "En Python, on écrit d = {'pomme': 3, 'kiwi': 5}, ou d = {} pour un dictionnaire vide. d['kiwi'] renvoie 5 ; d['poire'] = 2 ajoute une association, et d['pomme'] = 4 modifie la valeur existante. 'pomme' in d teste la présence d'une clé (et non d'une valeur). del d['kiwi'] supprime une clé. len(d) donne le nombre de clés. Lire une clé absente, d['banane'], lève une KeyError ; d.get('banane', 0) renvoie la valeur par défaut 0 sans erreur.",
                "On parcourt les clés avec for cle in d, les valeurs avec d.values() et les couples avec for cle, valeur in d.items(). Depuis la version 3.7 de Python, l'ordre de parcours est l'ordre d'insertion. Les clés doivent être d'un type non modifiable (immuable) : chaînes, nombres, tuples. Une liste ne peut pas servir de clé : d[[1, 2]] = 0 lève TypeError: unhashable type: 'list' ; on utilise le tuple (1, 2) à la place.",
              ],
              box: { label: "Repère", text: "d[cle] : lire (KeyError si absente) ; d[cle] = v : ajouter ou modifier ; cle in d : tester ; del d[cle] : supprimer ; d.get(cle, defaut) : lire sans erreur ; d.keys(), d.values(), d.items() : parcourir." },
            },
            {
              heading: "Pourquoi la recherche est rapide : le hachage",
              paragraphs: [
                "Python implémente les dictionnaires par des tables de hachage. Une fonction de hachage calcule, à partir de la clé, un entier qui détermine la case d'un tableau interne où ranger le couple. Pour retrouver une clé, on recalcule ce même entier et l'on va directement à la bonne case, sans parcourir les autres. Lorsque deux clés tombent sur la même case (collision), un mécanisme interne les départage. C'est aussi pourquoi une clé ne doit pas être modifiable : si elle changeait, son hachage changerait et on ne la retrouverait plus.",
                "Il en résulte une différence de coût essentielle. Rechercher une valeur dans une liste de n éléments (x in liste) oblige à la comparer aux éléments un par un : coût linéaire. Tester la présence d'une clé dans un dictionnaire (cle in d) se fait en temps constant en moyenne, quelle que soit sa taille. Attention : rechercher une valeur parmi les valeurs d'un dictionnaire (v in d.values()) reste linéaire, car le hachage ne porte que sur les clés.",
              ],
              box: { label: "À retenir", text: "Recherche dans une liste : coût linéaire. Recherche d'une clé dans un dictionnaire : coût constant en moyenne. Recherche d'une valeur parmi les valeurs d'un dictionnaire : coût linéaire." },
            },
            {
              heading: "Choisir la bonne structure",
              paragraphs: [
                "Un dictionnaire convient dès que l'on doit retrouver rapidement une information à partir d'un identifiant : annuaire (nom → numéro), compteur d'occurrences (mot → nombre d'apparitions), traduction (mot → mot), stock (référence → quantité), mémorisation des résultats d'une fonction (argument → résultat). Un tableau convient pour des données ordonnées auxquelles on accède par position, une pile ou une file pour des éléments à traiter dans un ordre précis.",
                "Exemple : pour compter les mots d'un texte, on initialise compte = {}, puis, pour chaque mot, on écrit compte[mot] = compte.get(mot, 0) + 1. Avec une liste de couples (mot, nombre), il faudrait parcourir toute la liste à chaque mot pour retrouver le bon couple, ce qui deviendrait très lent sur un long texte.",
              ],
            },
          ],
          keyPoints: [
            "Un dictionnaire associe à chaque clé unique une valeur ; on y accède par la clé, pas par une position.",
            "Index : position entière dans un tableau ; clé : identifiant (chaîne, nombre, tuple) dans un dictionnaire.",
            "d[cle] lève une KeyError si la clé est absente ; d.get(cle, defaut) l'évite.",
            "Les clés doivent être immuables : une liste ne peut pas être une clé, un tuple oui.",
            "Recherche : linéaire dans une liste, constante en moyenne pour une clé de dictionnaire (table de hachage).",
            "cle in d teste les clés, pas les valeurs.",
          ],
          example: {
            statement: "Écrire une fonction occurrences(texte) qui renvoie un dictionnaire associant à chaque caractère d'une chaîne son nombre d'apparitions, puis donner occurrences('abracadabra').",
            solution: [
              "On crée un dictionnaire vide : compte = {}.",
              "Pour chaque caractère c de texte : si c in compte, on fait compte[c] = compte[c] + 1 ; sinon compte[c] = 1. Version équivalente : compte[c] = compte.get(c, 0) + 1.",
              "On renvoie compte.",
              "Lecture de 'abracadabra' : a, b, r, a, c, a, d, a, b, r, a, soit 11 caractères.",
              "Décompte : a apparaît 5 fois, b 2 fois, r 2 fois, c 1 fois, d 1 fois (5 + 2 + 2 + 1 + 1 = 11).",
              "Résultat : {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}, dans l'ordre de première apparition des caractères.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On exécute d = {'pomme': 3, 'kiwi': 5}. Donner le résultat ou l'effet de chaque instruction, exécutées dans l'ordre : a) d['kiwi'] ; b) d['poire'] = 2 ; c) 'pomme' in d ; d) 5 in d ; e) len(d) ; f) d['banane'] ; g) d.get('banane', 0).",
              hint: "L'opérateur in teste les clés, pas les valeurs.",
              solution: [
                "a) 5.",
                "b) Ajoute la clé 'poire' associée à 2 : d = {'pomme': 3, 'kiwi': 5, 'poire': 2}.",
                "c) True, car 'pomme' est une clé.",
                "d) False : 5 est une valeur, mais pas une clé.",
                "e) 3 (trois clés).",
                "f) KeyError : la clé 'banane' est absente.",
                "g) 0 : la clé est absente, get renvoie la valeur par défaut sans erreur.",
              ],
            },
            {
              level: 2,
              statement: "Un répertoire est stocké sous la forme du dictionnaire rep = {'Alice': '0601', 'Bilal': '0602', 'Chloé': '0603'} (numéros abrégés). 1. Écrire une instruction qui affiche le numéro de Bilal, puis une qui ajoute Driss avec le numéro '0604'. 2. Écrire une fonction proprietaire(rep, numero) qui renvoie le nom associé à un numéro, ou None s'il n'existe pas. 3. Comparer le coût de la recherche d'un numéro à partir d'un nom et celui de la recherche d'un nom à partir d'un numéro. 4. Écrire une fonction inverser(rep) qui renvoie le dictionnaire numéro → nom.",
              hint: "Pour retrouver un nom à partir d'un numéro, il faut parcourir les couples (nom, numéro).",
              solution: [
                "1. print(rep['Bilal']) affiche 0602 ; rep['Driss'] = '0604' ajoute l'entrée.",
                "2. def proprietaire(rep, numero): pour chaque couple nom, num de rep.items(), si num == numero, renvoyer nom ; après la boucle, renvoyer None.",
                "3. La recherche d'un numéro par nom utilise la clé : temps constant en moyenne. La recherche d'un nom par numéro parcourt les couples un à un : coût linéaire en le nombre d'entrées.",
                "4. def inverser(rep): inv = {} ; pour chaque couple nom, num de rep.items() : inv[num] = nom ; return inv. La recherche par numéro devient alors une recherche de clé.",
                "Remarque : l'inversion suppose que deux personnes n'ont pas le même numéro, sinon une clé serait écrasée.",
                "Résultat : avec inv = inverser(rep), inv['0603'] renvoie 'Chloé' en temps constant en moyenne.",
              ],
            },
            {
              level: 3,
              statement: "Un enseignant stocke les résultats d'un QCM en plusieurs parties dans une liste de tuples : resultats = [('Ana', 14), ('Malo', 9), ('Ana', 3), ('Yaël', 12), ('Malo', 6)]. Chaque élève peut avoir plusieurs tuples, un par partie, et son total est la somme de ses points. 1. Écrire une fonction totaux(resultats) qui renvoie un dictionnaire élève → total, et donner son résultat. 2. Écrire une fonction meilleur(d) qui renvoie le nom de l'élève de plus grand total (les totaux sont positifs ou nuls). 3. L'enseignant veut aussi enregistrer des notes par couple (élève, matière). Peut-il utiliser la clé ['Ana', 'NSI'] ? Proposer une solution. 4. Expliquer pourquoi le dictionnaire est préférable à une liste de couples (élève, total) pour mettre à jour les totaux lorsqu'il y a beaucoup d'élèves.",
              hint: "Utilisez d.get(nom, 0) pour cumuler, et parcourez d.items() en mémorisant le meilleur couple rencontré.",
              solution: [
                "1. def totaux(resultats): d = {} ; pour chaque couple nom, points de resultats : d[nom] = d.get(nom, 0) + points ; return d.",
                "Calcul : Ana 14 + 3 = 17, Malo 9 + 6 = 15, Yaël 12 : totaux renvoie {'Ana': 17, 'Malo': 15, 'Yaël': 12}.",
                "2. def meilleur(d): nom_max = None et total_max = -1 ; pour chaque couple nom, total de d.items() : si total > total_max, alors nom_max = nom et total_max = total ; return nom_max. Ici, meilleur renvoie 'Ana'.",
                "3. Non : une liste est modifiable, donc non hachable, et d[['Ana', 'NSI']] = 15 lève TypeError: unhashable type: 'list'. On utilise un tuple, immuable : d[('Ana', 'NSI')] = 15.",
                "4. Avec une liste de couples, chaque mise à jour oblige à parcourir la liste pour retrouver l'élève : coût linéaire par mise à jour. Avec un dictionnaire, l'accès par clé se fait en temps constant en moyenne.",
                "Résultats : {'Ana': 17, 'Malo': 15, 'Yaël': 12}, et la meilleure élève est Ana.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les dictionnaires.",
            statements: [
              { text: "Dans un dictionnaire, deux associations peuvent avoir la même clé.", true: false, why: "Chaque clé est unique : une nouvelle affectation remplace l'ancienne valeur." },
              { text: "Deux clés différentes peuvent être associées à la même valeur.", true: true, why: "Seules les clés doivent être uniques, pas les valeurs." },
              { text: "'kiwi' in d teste si 'kiwi' est une valeur du dictionnaire.", true: false, why: "L'opérateur in teste les clés ; pour les valeurs, il faut écrire 'kiwi' in d.values()." },
              { text: "Un tuple peut servir de clé.", true: true, why: "Un tuple est immuable, donc hachable." },
              { text: "Une liste peut servir de clé.", true: false, why: "Une liste est modifiable : Python lève TypeError: unhashable type: 'list'." },
              { text: "Tester la présence d'une clé dans un grand dictionnaire est en moyenne bien plus rapide que chercher un élément dans une longue liste.", true: true, why: "Temps constant en moyenne grâce au hachage, contre un coût linéaire pour la liste." },
              { text: "Lire d['x'] quand la clé 'x' est absente renvoie None.", true: false, why: "Python lève une KeyError ; c'est d.get('x') qui renverrait None." },
            ],
          },
          quiz: [
            { q: "Pour d = {'a': 1, 'b': 2}, que vaut d['b'] ?", options: ["'b'", "1", "2", "KeyError"], answer: 2, why: "d['b'] renvoie la valeur associée à la clé 'b', c'est-à-dire 2." },
            { q: "Quelle instruction lève une erreur ?", options: ["d[[1, 2]] = 'x'", "d[(1, 2)] = 'x'", "d['12'] = 'x'", "d[12] = 'x'"], answer: 0, why: "Une liste est modifiable, donc non hachable : elle ne peut pas servir de clé." },
            { q: "Quel est le coût moyen du test cle in d pour un dictionnaire de n clés ?", options: ["Proportionnel à n", "Constant", "Proportionnel à n²", "Proportionnel à log n"], answer: 1, why: "La table de hachage permet d'aller directement à la case de la clé, quelle que soit la taille." },
            { q: "Pour d = {'x': 10}, que renvoie d.get('y', 0) ?", options: ["None", "KeyError", "10", "0"], answer: 3, why: "La clé 'y' est absente : get renvoie la valeur par défaut fournie, 0." },
            { q: "Pour d = {'pomme': 3}, que vaut l'expression 3 in d ?", options: ["False", "True", "3", "KeyError"], answer: 0, why: "in teste les clés : 3 est une valeur, pas une clé." },
          ],
          trap: "Croire que l'opérateur in teste les valeurs d'un dictionnaire : 'pomme' in d teste les clés, et 3 in d vaut False même si 3 est une valeur. Autre erreur : lire d[cle] sans vérifier la présence de la clé, d'où une KeyError.",
          method: "Avant de coder, demandez-vous par quoi vous rechercherez l'information : si c'est par un identifiant (nom, référence, mot), faites-en la clé d'un dictionnaire ; si c'est par une position, utilisez un tableau. Écrivez ensuite un petit exemple du dictionnaire attendu, avec deux ou trois couples.",
        },
      ],
    },
  ],
}
