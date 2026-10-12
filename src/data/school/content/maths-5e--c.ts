import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-5e',
  chapters: [
    /* ================================================================== */
    /* PREMIERS PAS EN CALCUL LITTÉRAL                                      */
    /* ================================================================== */
    {
      id: 'calcul-litteral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'expressions-litterales',
          title: 'Écrire une expression littérale',
          minutes: 30,
          objectives: [
            "Comprendre qu'une lettre peut désigner un nombre quelconque.",
            "Écrire une expression littérale pour traduire une situation, une phrase ou un programme de calcul.",
            "Appliquer les conventions d'écriture : supprimer le signe × devant une lettre ou une parenthèse.",
          ],
          course: [
            {
              heading: "Une lettre pour désigner un nombre",
              paragraphs: [
                "Au marché, un cahier coûte 2 €. Pour 3 cahiers, on paie 2 × 3 = 6 €. Pour 10 cahiers, on paie 2 × 10 = 20 €. Pour un nombre quelconque de cahiers, que l'on appelle n, on paie 2 × n euros. La lettre n remplace un nombre que l'on ne connaît pas encore, ou qui peut changer.",
                "Une expression littérale est une expression qui contient une ou plusieurs lettres, chacune désignant un nombre. Par exemple, 2 × n, x + 7 ou 3 × a + 5 sont des expressions littérales. On choisit souvent la lettre x, mais on peut prendre n'importe quelle lettre : n pour un nombre d'objets, c pour un côté, t pour un temps.",
                "L'intérêt est de pouvoir écrire une seule fois un calcul qui marche pour tous les nombres. Au lieu de faire une liste de prix pour 1, 2, 3... cahiers, une seule expression, 2 × n, les donne tous.",
              ],
              box: { label: "Définition", text: "Une expression littérale est une expression mathématique dans laquelle une ou plusieurs lettres désignent des nombres." },
            },
            {
              heading: "Les conventions d'écriture",
              paragraphs: [
                "Pour alléger l'écriture, on peut supprimer le signe × dans trois cas : entre un nombre et une lettre (3 × x s'écrit 3x), entre deux lettres (a × b s'écrit ab), et devant une parenthèse (4 × (x + 1) s'écrit 4(x + 1)).",
                "On écrit toujours le nombre devant la lettre : x × 5 s'écrit 5x, et non x5. De plus, 1 × x s'écrit simplement x, et 0 × x vaut 0.",
                "Attention : on ne supprime jamais le signe × entre deux nombres. 3 × 4 ne s'écrit pas 34, car 34 est le nombre trente-quatre. On garde aussi les signes + et -, qui ne disparaissent jamais : 3 + x reste 3 + x.",
              ],
              box: { label: "Règle", text: "On peut supprimer le signe × entre un nombre et une lettre (3x), entre deux lettres (ab) et devant une parenthèse (4(x + 1)). Jamais entre deux nombres." },
            },
            {
              heading: "Traduire une phrase ou une situation",
              paragraphs: [
                "Certains mots du français se traduisent directement : le double de x s'écrit 2x, le triple de x s'écrit 3x, la moitié de x s'écrit x ÷ 2, x augmenté de 4 s'écrit x + 4, x diminué de 4 s'écrit x - 4.",
                "L'ordre des mots compte. « Le triple de la somme de x et de 2 » s'écrit 3(x + 2) : on fait d'abord la somme, puis on la triple, d'où les parenthèses. « La somme du triple de x et de 2 » s'écrit 3x + 2 : on triple d'abord x, puis on ajoute 2.",
                "En géométrie, les formules sont des expressions littérales. Le périmètre d'un carré de côté c est c + c + c + c, c'est-à-dire 4c. Le périmètre d'un rectangle de longueur L et de largeur l est 2L + 2l, que l'on peut aussi écrire 2(L + l).",
              ],
            },
            {
              heading: "Traduire un programme de calcul",
              paragraphs: [
                "Prenons le programme : « Choisir un nombre, le multiplier par 3, puis ajouter 5 au résultat. » Si l'on appelle x le nombre choisi, on obtient d'abord 3 × x, puis 3 × x + 5. Le programme se traduit donc par l'expression 3x + 5.",
                "Si le programme dit « Choisir un nombre, lui ajouter 5, puis multiplier le résultat par 3 », il faut des parenthèses : (x + 5) × 3, que l'on écrit 3(x + 5). Les parenthèses montrent que l'addition est faite en premier.",
              ],
              box: { label: "À retenir", text: "Quand une étape porte sur tout le résultat précédent, on met ce résultat entre parenthèses. Exemple : ajouter 5, puis multiplier par 3 donne 3(x + 5)." },
            },
          ],
          keyPoints: [
            "Une expression littérale contient des lettres qui désignent des nombres.",
            "3 × x s'écrit 3x ; a × b s'écrit ab ; 4 × (x + 1) s'écrit 4(x + 1).",
            "On ne supprime jamais le signe × entre deux nombres : 3 × 4 n'est pas 34.",
            "Le double de x : 2x ; le triple : 3x ; la moitié : x ÷ 2 ; x augmenté de 4 : x + 4.",
            "Quand une étape porte sur tout le résultat précédent, on utilise des parenthèses.",
            "Périmètre d'un carré de côté c : 4c ; d'un rectangle : 2L + 2l, ou 2(L + l).",
          ],
          example: {
            statement: "Traduisez par une expression littérale le programme suivant : « Choisir un nombre, lui soustraire 2, puis multiplier le résultat par 5. » Simplifiez l'écriture.",
            solution: [
              "On appelle x le nombre choisi.",
              "On lui soustrait 2 : on obtient x - 2.",
              "On multiplie tout ce résultat par 5 : il faut des parenthèses, ce qui donne (x - 2) × 5.",
              "On écrit le nombre devant et on supprime le signe × devant la parenthèse : 5(x - 2).",
              "Le programme se traduit par l'expression 5(x - 2).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez chaque expression sans signe × quand c'est possible. a) 5 × x b) a × b c) 2 × (y + 3) d) x × 7 e) 1 × t f) 6 × 2",
              hint: "Le signe × disparaît entre un nombre et une lettre, entre deux lettres et devant une parenthèse, mais jamais entre deux nombres.",
              solution: [
                "a) 5 × x s'écrit 5x.",
                "b) a × b s'écrit ab.",
                "c) 2 × (y + 3) s'écrit 2(y + 3).",
                "d) x × 7 s'écrit 7x : on place le nombre devant la lettre.",
                "e) 1 × t s'écrit t.",
                "f) 6 × 2 reste 6 × 2 (ou se calcule : 12). On ne peut pas écrire 62.",
              ],
            },
            {
              level: 2,
              statement: "Traduisez chaque phrase par une expression littérale, en appelant x le nombre. a) le double de x b) x augmenté de 4 c) le triple de la somme de x et de 2 d) la somme du triple de x et de 2 e) la moitié de x, diminuée de 1",
              hint: "Repérez l'opération faite en dernier : c'est elle qui donne son nom à l'expression (« la somme de... », « le triple de... »).",
              solution: [
                "a) Le double de x : 2x.",
                "b) x augmenté de 4 : x + 4.",
                "c) Le triple de la somme de x et de 2 : on fait d'abord la somme x + 2, puis on la multiplie par 3, donc 3(x + 2).",
                "d) La somme du triple de x et de 2 : on triple d'abord x, puis on ajoute 2, donc 3x + 2.",
                "e) La moitié de x, diminuée de 1 : x ÷ 2 - 1.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Avec des allumettes, on construit une rangée de carrés collés les uns aux autres. Il faut 4 allumettes pour 1 carré, 7 allumettes pour 2 carrés, 10 allumettes pour 3 carrés. a) Combien faut-il d'allumettes pour 4 carrés ? b) Écrivez une expression du nombre d'allumettes pour n carrés. c) Combien faut-il d'allumettes pour 50 carrés ?",
              hint: "Chaque nouveau carré ajoute 3 allumettes, car il partage un côté avec le carré précédent. Le premier carré a besoin d'une allumette de plus.",
              solution: [
                "a) On passe de 10 à 10 + 3 = 13 allumettes pour 4 carrés.",
                "b) On pose d'abord 1 allumette verticale, puis chaque carré demande 3 allumettes de plus (le haut, le bas et le côté droit). Pour n carrés, il faut donc 3n + 1 allumettes.",
                "On vérifie : pour n = 1, 3 × 1 + 1 = 4 ; pour n = 2, 3 × 2 + 1 = 7 ; pour n = 3, 3 × 3 + 1 = 10. L'expression convient.",
                "c) Pour n = 50 : 3 × 50 + 1 = 150 + 1 = 151.",
                "Il faut 151 allumettes pour 50 carrés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à l'expression littérale qui la traduit.",
            pairs: [
              { left: "Le double de x", right: "2x" },
              { left: "x augmenté de 2", right: "x + 2" },
              { left: "Le triple de la somme de x et de 2", right: "3(x + 2)" },
              { left: "La somme du triple de x et de 2", right: "3x + 2" },
              { left: "Le carré de x", right: "x × x" },
              { left: "La moitié de x", right: "x ÷ 2" },
            ],
          },
          quiz: [
            {
              q: "Comment s'écrit 7 × a sans le signe × ?",
              options: ["a7", "7 + a", "7a", "77"],
              answer: 2,
              why: "Entre un nombre et une lettre, on supprime le signe × et on écrit le nombre devant : 7a.",
            },
            {
              q: "Dans quel cas ne peut-on PAS supprimer le signe × ?",
              options: ["3 × 5", "3 × y", "a × b", "2 × (x + 1)"],
              answer: 0,
              why: "Entre deux nombres, le signe × reste : sans lui, 3 × 5 deviendrait 35, qui est un autre nombre.",
            },
            {
              q: "Le périmètre d'un carré de côté c s'écrit :",
              options: ["c + 4", "4c", "c × c"],
              answer: 1,
              why: "Le carré a quatre côtés de longueur c : c + c + c + c = 4c. L'expression c × c donne son aire.",
            },
            {
              q: "« Choisir un nombre x, lui ajouter 1, puis multiplier le résultat par 6. » On obtient :",
              options: ["6x + 1", "x + 6", "6 + x + 1", "6(x + 1)"],
              answer: 3,
              why: "La multiplication porte sur tout le résultat x + 1, donc il faut des parenthèses : 6(x + 1).",
            },
            {
              q: "Un stylo coûte 3 € et une gomme 1 €. Combien paie-t-on pour n stylos et une gomme ?",
              options: ["3n + 1", "3 + n + 1", "4n"],
              answer: 0,
              why: "Les n stylos coûtent 3 × n = 3n euros, et on ajoute 1 € pour la gomme : 3n + 1.",
            },
          ],
          trap: "Confondre 3(x + 2) et 3x + 2 : dans la première expression, on triple toute la somme ; dans la seconde, on ne triple que x. Autre erreur fréquente : écrire 34 pour 3 × 4.",
          method: "Pour traduire une phrase, cherchez l'opération faite en dernier : « le triple de la somme » est un produit, « la somme du triple » est une somme. Vérifiez ensuite votre expression en remplaçant la lettre par un petit nombre, comme 1 ou 2.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'substituer-tester',
          title: 'Calculer une expression, tester une égalité',
          minutes: 30,
          objectives: [
            "Calculer la valeur d'une expression littérale en remplaçant la lettre par un nombre.",
            "Tester si une égalité est vraie pour une valeur donnée de la lettre.",
            "Utiliser un contre-exemple pour montrer qu'une égalité n'est pas toujours vraie.",
          ],
          course: [
            {
              heading: "Remplacer une lettre par un nombre",
              paragraphs: [
                "Calculer une expression pour une valeur de la lettre, c'est remplacer la lettre par ce nombre partout où elle apparaît, puis effectuer le calcul. On dit aussi que l'on substitue un nombre à la lettre.",
                "Avant de remplacer, on rétablit les signes × qui avaient été supprimés. Par exemple, pour calculer 3x + 5 quand x = 4, on écrit 3 × 4 + 5. Sans cette précaution, on risquerait d'écrire 34 + 5, ce qui est faux.",
                "On respecte ensuite les priorités opératoires : d'abord les calculs entre parenthèses, puis les multiplications et les divisions, enfin les additions et les soustractions. Ainsi 3 × 4 + 5 = 12 + 5 = 17.",
              ],
              box: { label: "Méthode", text: "Rétablir les signes ×, remplacer la lettre par le nombre partout, puis calculer en respectant les priorités opératoires." },
            },
            {
              heading: "Une expression prend plusieurs valeurs",
              paragraphs: [
                "Une même expression donne des résultats différents selon la valeur de la lettre. Pour A = 2x + 1 : si x = 0, A = 2 × 0 + 1 = 1 ; si x = 3, A = 2 × 3 + 1 = 7 ; si x = 2,5, A = 2 × 2,5 + 1 = 6.",
                "On peut présenter ces calculs dans un tableau de valeurs, avec les valeurs de x sur une ligne et les valeurs de l'expression sur la suivante. C'est pratique pour comparer deux expressions ou pour chercher une valeur qui convient.",
                "Quand la lettre apparaît plusieurs fois, on la remplace partout par le même nombre. Pour B = x + 4x avec x = 2 : B = 2 + 4 × 2 = 2 + 8 = 10.",
              ],
            },
            {
              heading: "Tester une égalité",
              paragraphs: [
                "Une égalité avec une lettre, comme 2x + 3 = 5x - 6, n'est pas forcément vraie : cela dépend de la valeur de x. Pour la tester, on calcule séparément le membre de gauche et le membre de droite, puis on compare les deux résultats.",
                "Pour x = 3 : à gauche, 2 × 3 + 3 = 9 ; à droite, 5 × 3 - 6 = 9. Les deux membres sont égaux, donc l'égalité est vraie pour x = 3. Pour x = 2 : à gauche, 2 × 2 + 3 = 7 ; à droite, 5 × 2 - 6 = 4. Comme 7 ≠ 4, l'égalité est fausse pour x = 2.",
              ],
              box: { label: "Méthode", text: "Pour tester une égalité, on calcule chaque membre séparément avec la même valeur de la lettre. Si les deux résultats sont égaux, l'égalité est vraie pour cette valeur ; sinon, elle est fausse." },
            },
            {
              heading: "Le contre-exemple",
              paragraphs: [
                "Si une égalité est vraie pour une valeur, cela ne prouve pas qu'elle est vraie pour toutes les valeurs. Dans l'exemple précédent, 2x + 3 = 5x - 6 est vraie pour x = 3 mais fausse pour x = 2.",
                "En revanche, une seule valeur pour laquelle l'égalité est fausse suffit à prouver qu'elle n'est pas toujours vraie. Cette valeur s'appelle un contre-exemple. Par exemple, pour montrer que x + x = x × x n'est pas toujours vrai, il suffit de prendre x = 3 : 3 + 3 = 6 mais 3 × 3 = 9.",
              ],
              box: { label: "À retenir", text: "Un exemple ne prouve pas qu'une égalité est toujours vraie. Un seul contre-exemple prouve qu'elle n'est pas toujours vraie." },
            },
          ],
          keyPoints: [
            "Pour calculer une expression, on rétablit les signes ×, puis on remplace la lettre par le nombre.",
            "On respecte les priorités : parenthèses, puis × et ÷, puis + et -.",
            "La lettre est remplacée par le même nombre partout où elle apparaît.",
            "Pour tester une égalité, on calcule chaque membre séparément et on compare.",
            "Un seul contre-exemple suffit à montrer qu'une égalité n'est pas toujours vraie.",
          ],
          example: {
            statement: "On donne A = 4x - 3 et B = 2x + 5. Calculez A et B pour x = 4. L'égalité 4x - 3 = 2x + 5 est-elle vraie pour x = 4 ?",
            solution: [
              "On rétablit les signes × : A = 4 × x - 3 et B = 2 × x + 5.",
              "Pour x = 4 : A = 4 × 4 - 3 = 16 - 3 = 13.",
              "Pour x = 4 : B = 2 × 4 + 5 = 8 + 5 = 13.",
              "Les deux membres valent 13 : ils sont égaux.",
              "L'égalité 4x - 3 = 2x + 5 est vraie pour x = 4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne A = 5x + 2. Calculez A pour x = 3, pour x = 0, puis pour x = 1,5.",
              hint: "Écrivez d'abord A = 5 × x + 2, puis remplacez x. La multiplication passe avant l'addition.",
              solution: [
                "Pour x = 3 : A = 5 × 3 + 2 = 15 + 2 = 17.",
                "Pour x = 0 : A = 5 × 0 + 2 = 0 + 2 = 2.",
                "Pour x = 1,5 : A = 5 × 1,5 + 2 = 7,5 + 2 = 9,5.",
                "A vaut 17, puis 2, puis 9,5.",
              ],
            },
            {
              level: 2,
              statement: "On considère l'égalité 3(x + 2) = 4x + 1. a) Testez-la pour x = 5. b) Testez-la pour x = 2. c) Peut-on dire que cette égalité est vraie pour tous les nombres x ?",
              hint: "Calculez le membre de gauche et le membre de droite séparément. Dans 3(x + 2), le calcul entre parenthèses passe en premier.",
              solution: [
                "a) Pour x = 5 : à gauche, 3 × (5 + 2) = 3 × 7 = 21 ; à droite, 4 × 5 + 1 = 20 + 1 = 21. Les deux membres sont égaux : l'égalité est vraie pour x = 5.",
                "b) Pour x = 2 : à gauche, 3 × (2 + 2) = 3 × 4 = 12 ; à droite, 4 × 2 + 1 = 8 + 1 = 9. Comme 12 ≠ 9, l'égalité est fausse pour x = 2.",
                "c) Non : x = 2 est un contre-exemple. L'égalité n'est pas vraie pour tous les nombres x.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un triangle équilatéral a des côtés de longueur x + 2 (en cm). Un carré a des côtés de longueur x (en cm). a) Écrivez le périmètre de chaque figure en fonction de x. b) En testant les valeurs entières x = 4, x = 5, x = 6 et x = 7, trouvez la valeur de x pour laquelle les deux figures ont le même périmètre.",
              hint: "Un triangle équilatéral a trois côtés égaux et un carré en a quatre. Présentez vos calculs dans un tableau.",
              solution: [
                "a) Périmètre du triangle : 3 × (x + 2), c'est-à-dire 3(x + 2). Périmètre du carré : 4 × x, c'est-à-dire 4x.",
                "Pour x = 4 : triangle 3 × 6 = 18 cm, carré 4 × 4 = 16 cm. Différents.",
                "Pour x = 5 : triangle 3 × 7 = 21 cm, carré 4 × 5 = 20 cm. Différents.",
                "Pour x = 6 : triangle 3 × 8 = 24 cm, carré 4 × 6 = 24 cm. Égaux.",
                "Pour x = 7 : triangle 3 × 9 = 27 cm, carré 4 × 7 = 28 cm. Différents : le carré est désormais plus long.",
                "b) Les deux figures ont le même périmètre, 24 cm, pour x = 6.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour tester l'égalité 2x + 1 = x + 4 pour x = 3.",
            items: [
              "Rétablir les signes × : 2 × x + 1 = x + 4",
              "Remplacer x par 3 dans le membre de gauche : 2 × 3 + 1",
              "Calculer le membre de gauche : 6 + 1 = 7",
              "Remplacer x par 3 dans le membre de droite et calculer : 3 + 4 = 7",
              "Comparer : 7 = 7",
              "Conclure : l'égalité est vraie pour x = 3",
            ],
          },
          quiz: [
            {
              q: "Combien vaut 3x + 2 pour x = 4 ?",
              options: ["36", "14", "20", "9"],
              answer: 1,
              why: "On rétablit le signe × : 3 × 4 + 2 = 12 + 2 = 14. Le résultat 36 vient de l'erreur qui consiste à écrire 34 + 2.",
            },
            {
              q: "Combien vaut 2(x + 5) pour x = 1 ?",
              options: ["7", "11", "12"],
              answer: 2,
              why: "On calcule d'abord la parenthèse : 1 + 5 = 6, puis 2 × 6 = 12.",
            },
            {
              q: "L'égalité 5x = x + 8 est vraie pour :",
              options: ["x = 1", "x = 3", "x = 4", "x = 2"],
              answer: 3,
              why: "Pour x = 2 : 5 × 2 = 10 et 2 + 8 = 10. Les deux membres sont égaux.",
            },
            {
              q: "Pour x = 3, on trouve 2 × 3 + 3 = 9 et 3 × 3 = 9. Que peut-on conclure de l'égalité 2x + 3 = 3x ?",
              options: ["Elle est vraie pour x = 3", "Elle est vraie pour tout x", "Elle est toujours fausse"],
              answer: 0,
              why: "Un seul exemple ne prouve rien pour les autres valeurs : on sait seulement qu'elle est vraie pour x = 3 (pour x = 1, elle est fausse : 5 ≠ 3).",
            },
            {
              q: "Qu'est-ce qu'un contre-exemple ?",
              options: ["Une valeur qui vérifie l'égalité dans tous les cas", "Une valeur qui rend l'égalité fausse", "Une égalité qui est toujours vraie", "Un calcul qui ne contient aucune lettre"],
              answer: 1,
              why: "Un contre-exemple est une valeur pour laquelle l'égalité est fausse. Il suffit à prouver qu'elle n'est pas toujours vraie.",
            },
          ],
          trap: "Remplacer la lettre sans rétablir le signe × : pour x = 4, 3x devient 3 × 4 = 12, et non 34. Autre erreur : croire qu'une égalité vérifiée pour une valeur est vraie pour toutes.",
          method: "Écrivez toujours une ligne intermédiaire où la lettre est remplacée par le nombre, signes × compris, avant de calculer. Pour tester une égalité, calculez chaque membre sur une ligne séparée, puis comparez.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'carres-et-cubes',
          title: 'Le carré et le cube d\'un nombre',
          minutes: 25,
          objectives: [
            "Calculer le carré et le cube d'un nombre entier ou décimal.",
            "Utiliser les notations a² et a³ et les lire correctement.",
            "Respecter la priorité du carré et du cube dans un calcul.",
            "Utiliser le carré et le cube pour calculer une aire de carré et un volume de cube.",
          ],
          course: [
            {
              heading: "Le carré d'un nombre",
              paragraphs: [
                "Le carré d'un nombre est le produit de ce nombre par lui-même. Le carré de 5 est 5 × 5 = 25. On le note 5², et on lit « 5 au carré » ou « 5 exposant 2 ». Le petit 2 en haut s'appelle l'exposant : il indique combien de fois le nombre est multiplié par lui-même.",
                "Le nom vient de la géométrie : un carré de côté 5 cm a une aire de 5 × 5 = 25 cm². De façon générale, l'aire d'un carré de côté c est c × c = c².",
                "Il est utile de connaître les premiers carrés par cœur : 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100, 11² = 121, 12² = 144.",
              ],
              box: { label: "Définition", text: "Le carré d'un nombre a est a × a. On le note a² et on lit « a au carré »." },
            },
            {
              heading: "Le cube d'un nombre",
              paragraphs: [
                "Le cube d'un nombre est le produit de trois facteurs égaux à ce nombre. Le cube de 2 est 2 × 2 × 2 = 8. On le note 2³, et on lit « 2 au cube » ou « 2 exposant 3 ».",
                "Là encore, le nom vient de la géométrie : un cube d'arête 2 cm a un volume de 2 × 2 × 2 = 8 cm³. Le volume d'un cube d'arête c est c × c × c = c³.",
                "Les premiers cubes à connaître : 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 10³ = 1 000. On remarque que 10² = 100 (un 1 suivi de deux zéros) et 10³ = 1 000 (un 1 suivi de trois zéros).",
              ],
              box: { label: "Définition", text: "Le cube d'un nombre a est a × a × a. On le note a³ et on lit « a au cube »." },
            },
            {
              heading: "Carrés et cubes des nombres décimaux",
              paragraphs: [
                "On calcule le carré ou le cube d'un nombre décimal de la même façon, en multipliant. Par exemple, 1,5² = 1,5 × 1,5 = 2,25 et 0,3² = 0,3 × 0,3 = 0,09. On compte les chiffres après la virgule comme dans toute multiplication : 0,3 × 0,3 a deux chiffres après la virgule.",
                "Attention, pour un nombre compris entre 0 et 1, le carré est plus petit que le nombre : 0,5² = 0,25, et 0,25 est plus petit que 0,5. Pour un nombre plus grand que 1, le carré est plus grand que le nombre : 3² = 9.",
              ],
            },
            {
              heading: "Les priorités et les erreurs à éviter",
              paragraphs: [
                "Le carré et le cube sont prioritaires sur la multiplication et l'addition. Dans 2 × 3², on calcule d'abord 3² = 9, puis 2 × 9 = 18. En revanche, dans (2 × 3)², on calcule d'abord la parenthèse : 6² = 36. Les deux résultats sont différents.",
                "De même, 4 + 1² = 4 + 1 = 5, alors que (4 + 1)² = 5² = 25. L'exposant ne s'applique qu'au nombre (ou à la parenthèse) écrit juste avant lui.",
                "Ne confondez pas le carré avec le double : 3² = 3 × 3 = 9, alors que le double de 3 est 2 × 3 = 6. Ne confondez pas non plus le cube avec le triple : 2³ = 8, alors que le triple de 2 est 6. Avec une lettre, x² = x × x, mais 2x = x + x.",
              ],
              box: { label: "Règle", text: "Ordre des calculs : d'abord les parenthèses, puis les carrés et les cubes, puis × et ÷, enfin + et -." },
            },
          ],
          keyPoints: [
            "a² = a × a (a au carré) ; a³ = a × a × a (a au cube).",
            "Aire d'un carré de côté c : c² ; volume d'un cube d'arête c : c³.",
            "Ne pas confondre : 3² = 9 mais 2 × 3 = 6 ; 2³ = 8 mais 3 × 2 = 6.",
            "Le carré et le cube passent avant × et + : 2 × 3² = 18, mais (2 × 3)² = 36.",
            "Carrés à connaître : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Cubes : 1, 8, 27, 64, 125.",
          ],
          example: {
            statement: "Un carré a un côté de 7 cm et un cube a une arête de 4 cm. Calculez l'aire du carré et le volume du cube.",
            solution: [
              "L'aire d'un carré de côté c est c². Ici, 7² = 7 × 7 = 49.",
              "L'aire du carré est 49 cm².",
              "Le volume d'un cube d'arête c est c³. Ici, 4³ = 4 × 4 × 4 = 16 × 4 = 64.",
              "Le volume du cube est 64 cm³.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) 5² b) 3³ c) 10³ d) 0,3² e) 1,5²",
              hint: "Écrivez d'abord le produit : par exemple, 3³ = 3 × 3 × 3.",
              solution: [
                "a) 5² = 5 × 5 = 25.",
                "b) 3³ = 3 × 3 × 3 = 9 × 3 = 27.",
                "c) 10³ = 10 × 10 × 10 = 1 000.",
                "d) 0,3² = 0,3 × 0,3 = 0,09.",
                "e) 1,5² = 1,5 × 1,5 = 2,25.",
              ],
            },
            {
              level: 2,
              statement: "Calculez en respectant les priorités : A = 2 × 5² ; B = (2 × 5)² ; C = 3 + 2³ ; D = 4² - 3² ; E = (4 - 3)².",
              hint: "Les parenthèses d'abord, puis les carrés et les cubes, puis les multiplications, enfin les additions et les soustractions.",
              solution: [
                "A = 2 × 5² = 2 × 25 = 50.",
                "B = (2 × 5)² = 10² = 100.",
                "C = 3 + 2³ = 3 + 8 = 11.",
                "D = 4² - 3² = 16 - 9 = 7.",
                "E = (4 - 3)² = 1² = 1.",
                "On remarque que A ≠ B et D ≠ E : la place des parenthèses change le résultat.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Trouvez le nombre entier dont le carré vaut 225, puis le nombre entier dont le cube vaut 216. b) On construit un grand cube de 6 cm d'arête avec des petits cubes de 1 cm d'arête. Combien de petits cubes faut-il ? c) On peint toutes les faces extérieures du grand cube. Quelle est l'aire totale à peindre ?",
              hint: "Pour a), essayez des nombres : 10² = 100 et 20² = 400, donc le nombre cherché est entre 10 et 20. Pour c), un cube a 6 faces carrées identiques.",
              solution: [
                "a) 15² = 15 × 15 = 225, donc le nombre est 15. Ensuite 5³ = 125 et 6³ = 6 × 6 × 6 = 36 × 6 = 216, donc le nombre est 6.",
                "b) Le nombre de petits cubes est égal au volume du grand cube en cm³ : 6³ = 216. Il faut 216 petits cubes.",
                "c) Chaque face est un carré de 6 cm de côté, d'aire 6² = 36 cm². Le cube a 6 faces : 6 × 36 = 216.",
                "L'aire à peindre est 216 cm². Le volume vaut 216 cm³ : les nombres sont égaux, mais ce ne sont pas les mêmes grandeurs ni les mêmes unités.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Carrés et cubes.",
            statements: [
              { text: "3² = 6", true: false, why: "3² = 3 × 3 = 9. Le nombre 6 est le double de 3, pas son carré." },
              { text: "2³ = 8", true: true, why: "2³ = 2 × 2 × 2 = 8." },
              { text: "10³ = 1 000", true: true, why: "10 × 10 × 10 = 1 000 : un 1 suivi de trois zéros." },
              { text: "0,5² = 0,25", true: true, why: "0,5 × 0,5 = 0,25 : pour un nombre entre 0 et 1, le carré est plus petit que le nombre." },
              { text: "2 × 3² = 36", true: false, why: "Le carré est prioritaire : 2 × 9 = 18. C'est (2 × 3)² qui vaut 36." },
              { text: "x² et 2x désignent toujours le même nombre", true: false, why: "x² = x × x et 2x = x + x. Pour x = 3, on obtient 9 et 6 : c'est un contre-exemple." },
              { text: "Le volume d'un cube d'arête 3 cm est 27 cm³", true: true, why: "3³ = 3 × 3 × 3 = 27, donc 27 cm³." },
            ],
          },
          quiz: [
            {
              q: "Combien vaut 6² ?",
              options: ["12", "36", "66", "8"],
              answer: 1,
              why: "6² = 6 × 6 = 36. Le nombre 12 est le double de 6.",
            },
            {
              q: "Combien vaut 4³ ?",
              options: ["12", "16", "64"],
              answer: 2,
              why: "4³ = 4 × 4 × 4 = 16 × 4 = 64.",
            },
            {
              q: "Combien vaut 3 + 2² ?",
              options: ["7", "25", "10", "12"],
              answer: 0,
              why: "Le carré passe avant l'addition : 2² = 4, puis 3 + 4 = 7. C'est (3 + 2)² qui vaut 25.",
            },
            {
              q: "Quelle est l'aire d'un carré de 9 m de côté ?",
              options: ["36 m²", "18 m²", "729 m²", "81 m²"],
              answer: 3,
              why: "Aire = côté² = 9² = 81 m². Le nombre 36 est le périmètre en mètres, et 729 est 9³.",
            },
            {
              q: "Combien vaut 0,2² ?",
              options: ["0,4", "0,04", "0,22"],
              answer: 1,
              why: "0,2 × 0,2 = 0,04 : le produit a deux chiffres après la virgule.",
            },
          ],
          trap: "Confondre le carré avec le double (écrire 5² = 10) ou le cube avec le triple (écrire 2³ = 6). L'exposant indique le nombre de facteurs égaux, pas un multiplicateur.",
          method: "Pour ne jamais vous tromper, réécrivez toujours la puissance comme un produit avant de calculer : 5² = 5 × 5, 2³ = 2 × 2 × 2. Apprenez par cœur les carrés jusqu'à 12² et les cubes jusqu'à 5³.",
        },
      ],
    },

    /* ================================================================== */
    /* PROGRAMMER AVEC DES BLOCS                                            */
    /* ================================================================== */
    {
      id: 'pensee-informatique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sequence-instructions',
          title: 'Séquencer des instructions dans un programme par blocs',
          minutes: 30,
          objectives: [
            "Distinguer un algorithme et un programme.",
            "Écrire un programme par blocs comme une suite d'instructions exécutées dans l'ordre.",
            "Déplacer un lutin sur la scène en utilisant les coordonnées et l'orientation.",
            "Repérer et corriger une erreur (un bug) dans un programme simple.",
          ],
          course: [
            {
              heading: "Algorithme et programme",
              paragraphs: [
                "Un algorithme est une suite finie d'instructions précises qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine ou l'itinéraire pour aller au collège sont des exemples d'algorithmes de la vie courante : on suit les étapes l'une après l'autre.",
                "Un programme est un algorithme écrit dans un langage que l'ordinateur comprend. Au collège, on utilise souvent un langage par blocs, comme Scratch : chaque instruction est un bloc que l'on emboîte sous le précédent. L'ordinateur exécute les blocs dans l'ordre, de haut en bas, un par un.",
                "Un programme commence par un bloc de départ, appelé événement, par exemple « quand le drapeau vert est cliqué ». Tous les blocs accrochés en dessous forment une séquence d'instructions.",
              ],
              box: { label: "Définition", text: "Un algorithme est une suite finie d'instructions qui résout un problème. Un programme est un algorithme traduit dans un langage compris par l'ordinateur." },
            },
            {
              heading: "La scène et le lutin",
              paragraphs: [
                "Dans Scratch, le personnage que l'on programme s'appelle un lutin. Il se déplace sur la scène, un rectangle muni d'un repère : l'abscisse x va de -240 (bord gauche) à 240 (bord droit) et l'ordonnée y va de -180 (bord bas) à 180 (bord haut). Le centre de la scène est le point de coordonnées (0 ; 0).",
                "Le lutin a aussi une orientation, mesurée en degrés : 90 signifie qu'il regarde vers la droite, 0 vers le haut, 180 vers le bas et -90 vers la gauche. Le bloc « avancer de 50 pas » le déplace de 50 unités dans la direction où il regarde.",
              ],
              box: { label: "Repère", text: "Orientation 90 : vers la droite. Orientation 0 : vers le haut. Orientation 180 : vers le bas. Orientation -90 : vers la gauche." },
            },
            {
              heading: "Les blocs de mouvement et le stylo",
              paragraphs: [
                "Les principaux blocs de mouvement sont : « aller à x : 0 y : 0 » (le lutin se place directement en un point), « s'orienter à 90 » (le lutin se tourne dans une direction précise), « avancer de 50 pas », « tourner droite de 90 degrés » (dans le sens des aiguilles d'une montre) et « tourner gauche de 90 degrés » (dans le sens inverse).",
                "Pour dessiner, on utilise les blocs du stylo : « stylo en position d'écriture » fait laisser une trace au lutin quand il se déplace, et « relever le stylo » arrête la trace. Le bloc « effacer tout » nettoie la scène au début du programme.",
                "Par exemple, un lutin placé en (0 ; 0) et orienté à 90 qui exécute « avancer de 100 pas » arrive en (100 ; 0). S'il exécute ensuite « tourner gauche de 90 degrés », il regarde vers le haut (orientation 0), et « avancer de 50 pas » l'amène en (100 ; 50).",
              ],
            },
            {
              heading: "L'ordre compte : bugs et corrections",
              paragraphs: [
                "Comme dans une recette, l'ordre des instructions change le résultat. Si l'on écrit « tourner gauche de 90 degrés » avant « avancer de 100 pas » au lieu d'après, le lutin part vers le haut au lieu de partir vers la droite, et le dessin n'est plus le même.",
                "Une erreur dans un programme s'appelle un bug. Pour la trouver, on exécute le programme à la main, bloc par bloc, en notant après chaque instruction la position et l'orientation du lutin. Dès que le résultat noté ne correspond plus à ce que l'on voulait, on a trouvé le bloc fautif.",
              ],
              box: { label: "Méthode", text: "Pour vérifier un programme, faites un tableau : une ligne par bloc, avec la position (x ; y) et l'orientation du lutin après ce bloc." },
            },
          ],
          keyPoints: [
            "Un programme est une suite d'instructions exécutées dans l'ordre, de haut en bas.",
            "Un programme par blocs commence par un événement, comme « quand le drapeau vert est cliqué ».",
            "Sur la scène, x va de -240 à 240 et y de -180 à 180 ; le centre est (0 ; 0).",
            "Orientation 90 : droite ; 0 : haut ; 180 : bas ; -90 : gauche.",
            "« stylo en position d'écriture » laisse une trace, « relever le stylo » l'arrête.",
            "Un bug se trouve en exécutant le programme à la main, bloc par bloc.",
          ],
          example: {
            statement: "Un lutin est en (0 ; 0), orienté à 90. Il exécute : « avancer de 80 pas », « tourner gauche de 90 degrés », « avancer de 50 pas », « tourner gauche de 90 degrés », « avancer de 30 pas ». Où arrive-t-il, et dans quelle direction regarde-t-il ?",
            solution: [
              "Au départ : position (0 ; 0), orientation 90 (vers la droite).",
              "« avancer de 80 pas » : il va vers la droite, en (80 ; 0).",
              "« tourner gauche de 90 degrés » : il regarde maintenant vers le haut (orientation 0).",
              "« avancer de 50 pas » : il monte, en (80 ; 50).",
              "« tourner gauche de 90 degrés » : il regarde vers la gauche (orientation -90).",
              "« avancer de 30 pas » : il va vers la gauche, en (80 - 30 ; 50), c'est-à-dire (50 ; 50).",
              "Le lutin arrive en (50 ; 50) et regarde vers la gauche.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un lutin est en (0 ; 0), orienté à 90. Il exécute : « avancer de 100 pas », « tourner gauche de 90 degrés », « avancer de 50 pas ». Donnez sa position finale et son orientation.",
              hint: "Notez la position et l'orientation après chaque bloc. Tourner à gauche quand on regarde vers la droite fait regarder vers le haut.",
              solution: [
                "Après « avancer de 100 pas » : position (100 ; 0), orientation 90.",
                "Après « tourner gauche de 90 degrés » : position inchangée, orientation 0 (vers le haut).",
                "Après « avancer de 50 pas » : position (100 ; 50).",
                "Le lutin finit en (100 ; 50) et regarde vers le haut.",
              ],
            },
            {
              level: 2,
              statement: "Le lutin est en (0 ; 0), orienté à 90, et son stylo est en position d'écriture. Écrivez la suite de blocs qui lui fait dessiner un rectangle de 120 pas de longueur et de 60 pas de largeur, en tournant toujours à gauche. Donnez les coordonnées des quatre sommets.",
              hint: "Un rectangle a quatre côtés et quatre angles droits : il faut alterner « avancer » et « tourner gauche de 90 degrés ».",
              solution: [
                "« avancer de 120 pas » : le lutin trace le premier côté et arrive en (120 ; 0).",
                "« tourner gauche de 90 degrés » puis « avancer de 60 pas » : il monte en (120 ; 60).",
                "« tourner gauche de 90 degrés » puis « avancer de 120 pas » : il va vers la gauche en (0 ; 60).",
                "« tourner gauche de 90 degrés » puis « avancer de 60 pas » : il descend et revient en (0 ; 0).",
                "On peut ajouter un dernier « tourner gauche de 90 degrés » pour qu'il regarde de nouveau vers la droite.",
                "Les sommets du rectangle sont (0 ; 0), (120 ; 0), (120 ; 60) et (0 ; 60).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un programme : « quand le drapeau vert est cliqué », « aller à x : 0 y : 0 », « s'orienter à 90 », « stylo en position d'écriture », « avancer de 60 pas », « tourner gauche de 90 degrés », « avancer de 60 pas », « tourner droite de 90 degrés », « avancer de 60 pas », « tourner gauche de 90 degrés », « avancer de 60 pas ». a) Donnez la position du lutin après chaque bloc « avancer ». b) Quelle figure est dessinée ? c) Quels blocs faut-il ajouter à la fin pour dessiner une marche de plus ?",
              hint: "Tourner à gauche quand on regarde vers la droite fait regarder vers le haut ; tourner à droite quand on regarde vers le haut fait regarder vers la droite.",
              solution: [
                "Départ : (0 ; 0), orientation 90.",
                "Premier « avancer » : (60 ; 0). Puis le lutin tourne vers le haut.",
                "Deuxième « avancer » : (60 ; 60). Puis il tourne à droite et regarde de nouveau vers la droite.",
                "Troisième « avancer » : (120 ; 60). Puis il tourne vers le haut.",
                "Quatrième « avancer » : (120 ; 120).",
                "b) Le tracé alterne un segment horizontal et un segment vertical de même longueur : c'est un escalier de deux marches.",
                "c) Il faut ajouter « tourner droite de 90 degrés », « avancer de 60 pas », « tourner gauche de 90 degrés », « avancer de 60 pas ». Le lutin finit alors en (180 ; 180).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Le lutin regarde déjà vers la droite. Il doit partir de (0 ; 0), passer par (100 ; 0) puis (100 ; 50), et finir en (20 ; 50). Remettez les blocs dans l'ordre.",
            items: [
              "quand le drapeau vert est cliqué",
              "aller à x : 0 y : 0",
              "avancer de 100 pas",
              "s'orienter à 0",
              "avancer de 50 pas",
              "s'orienter à -90",
              "avancer de 80 pas",
            ],
          },
          quiz: [
            {
              q: "Dans quel ordre l'ordinateur exécute-t-il les blocs d'un programme ?",
              options: ["Dans un ordre choisi au hasard", "Du bas vers le haut", "De haut en bas, un par un", "Tous en même temps"],
              answer: 2,
              why: "Les blocs d'une séquence sont exécutés l'un après l'autre, de haut en bas, dans l'ordre où ils sont emboîtés.",
            },
            {
              q: "Un lutin orienté à 0 regarde :",
              options: ["vers le haut", "vers la droite", "vers le bas"],
              answer: 0,
              why: "Dans Scratch, 0 correspond au haut, 90 à la droite, 180 au bas et -90 à la gauche.",
            },
            {
              q: "Quelles sont les coordonnées du centre de la scène ?",
              options: ["(240 ; 180)", "(0 ; 0)", "(-240 ; -180)", "(480 ; 360)"],
              answer: 1,
              why: "L'abscisse va de -240 à 240 et l'ordonnée de -180 à 180 : le centre est le point (0 ; 0).",
            },
            {
              q: "Un lutin en (0 ; 0), orienté à 90, exécute « avancer de 70 pas ». Où est-il ?",
              options: ["(0 ; 70)", "(70 ; 70)", "(-70 ; 0)", "(70 ; 0)"],
              answer: 3,
              why: "Orienté à 90, il avance vers la droite : son abscisse augmente de 70 et son ordonnée ne change pas.",
            },
            {
              q: "Comment appelle-t-on une erreur dans un programme ?",
              options: ["un lutin", "un bug", "un bloc"],
              answer: 1,
              why: "Une erreur de programmation s'appelle un bug. La corriger, c'est déboguer le programme.",
            },
          ],
          trap: "Confondre « tourner droite » et « tourner gauche », ou oublier que l'orientation se garde d'un bloc à l'autre : après un virage, tous les « avancer » suivants partent dans la nouvelle direction.",
          method: "Exécutez le programme à la main avant de le lancer : sur un brouillon quadrillé, suivez le lutin bloc par bloc en notant sa position et son orientation. Vous repérerez ainsi les bugs avant l'ordinateur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'boucles',
          title: 'Répéter des instructions avec une boucle',
          minutes: 30,
          objectives: [
            "Reconnaître une suite d'instructions qui se répète dans un programme.",
            "Utiliser une boucle « répéter » pour écrire un programme plus court.",
            "Programmer le tracé d'un polygone régulier en choisissant l'angle de rotation.",
            "Prévoir le résultat d'un programme qui contient une boucle.",
          ],
          course: [
            {
              heading: "Pourquoi une boucle ?",
              paragraphs: [
                "Pour dessiner un carré de côté 100, on peut écrire huit blocs : « avancer de 100 pas », « tourner droite de 90 degrés », quatre fois de suite. Les deux mêmes blocs se répètent. C'est long à écrire, et une erreur de recopie est vite arrivée.",
                "Une boucle permet de faire répéter des instructions sans les recopier. Le bloc « répéter 4 fois » entoure les instructions à répéter : on l'appelle le corps de la boucle. Le carré s'écrit alors : « répéter 4 fois [ avancer de 100 pas ; tourner droite de 90 degrés ] ».",
                "Dans la vie courante, on utilise déjà des boucles : « faites 10 tours de piste » ou « répétez 3 fois la poésie » sont des instructions répétées un nombre de fois connu à l'avance.",
              ],
              box: { label: "Définition", text: "Une boucle « répéter n fois » exécute n fois de suite les instructions qu'elle contient, puis le programme continue avec le bloc placé après la boucle." },
            },
            {
              heading: "Tracer un polygone régulier",
              paragraphs: [
                "Un polygone régulier a tous ses côtés de même longueur et tous ses angles de même mesure : le triangle équilatéral, le carré, le pentagone régulier (5 côtés), l'hexagone régulier (6 côtés), l'octogone régulier (8 côtés).",
                "Pour le tracer, le lutin répète « avancer ; tourner » autant de fois qu'il y a de côtés. Quand il revient à son point de départ, il a fait un tour complet sur lui-même, soit 360°. Pour un polygone régulier à n côtés, il doit donc tourner de 360 ÷ n degrés à chaque sommet.",
                "Pour un triangle équilatéral, l'angle de rotation est 360 ÷ 3 = 120°, et non 60°. Le lutin ne tourne pas de l'angle intérieur du triangle, mais de l'angle dont il change de direction. Pour un hexagone régulier, c'est 360 ÷ 6 = 60°.",
              ],
              box: { label: "Formule", text: "Polygone régulier à n côtés : répéter n fois [ avancer de (côté) pas ; tourner de 360 ÷ n degrés ]." },
            },
            {
              heading: "Prévoir ce que fait une boucle",
              paragraphs: [
                "Pour prévoir le résultat, on compte combien de fois chaque bloc est exécuté. Dans « répéter 5 fois [ avancer de 20 pas ] », le lutin avance 5 fois de 20 pas, soit 100 pas au total, en ligne droite.",
                "Une boucle peut en contenir une autre : on parle de boucles imbriquées. Dans « répéter 3 fois [ répéter 2 fois [ dire Bonjour ] ] », le lutin dit Bonjour 3 × 2 = 6 fois. Il existe aussi le bloc « répéter indéfiniment », qui ne s'arrête que lorsqu'on clique sur le bouton stop : il sert par exemple à animer un lutin en continu.",
              ],
              box: { label: "À retenir", text: "Dans une boucle « répéter n fois », chaque bloc du corps est exécuté n fois. Avec deux boucles imbriquées, on multiplie les nombres de répétitions." },
            },
          ],
          keyPoints: [
            "Une boucle « répéter n fois » évite de recopier n fois les mêmes blocs.",
            "Les blocs placés à l'intérieur de la boucle forment son corps.",
            "Polygone régulier à n côtés : tourner de 360 ÷ n degrés à chaque sommet.",
            "Triangle équilatéral : 120° ; carré : 90° ; hexagone régulier : 60°.",
            "Boucles imbriquées : on multiplie les nombres de répétitions.",
          ],
          example: {
            statement: "Écrivez un programme avec une boucle qui fait tracer au lutin un hexagone régulier de côté 50 pas. Quelle distance totale le lutin parcourt-il ?",
            solution: [
              "Un hexagone régulier a 6 côtés de même longueur : la boucle doit être répétée 6 fois.",
              "À chaque sommet, le lutin tourne de 360 ÷ 6 = 60 degrés.",
              "Programme : « quand le drapeau vert est cliqué », « stylo en position d'écriture », « répéter 6 fois [ avancer de 50 pas ; tourner droite de 60 degrés ] ».",
              "Le lutin avance 6 fois de 50 pas : 6 × 50 = 300.",
              "Il parcourt 300 pas, ce qui est le périmètre de l'hexagone.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Que dessine le programme « stylo en position d'écriture ; répéter 4 fois [ avancer de 50 pas ; tourner droite de 90 degrés ] » ? b) Combien de pas le lutin parcourt-il en tout ?",
              hint: "Comptez le nombre de côtés tracés et regardez l'angle de rotation.",
              solution: [
                "a) Le lutin trace 4 segments de 50 pas en tournant de 90° à chaque fois : il dessine un carré de côté 50 pas.",
                "b) Il avance 4 fois de 50 pas : 4 × 50 = 200.",
                "Le lutin parcourt 200 pas, le périmètre du carré.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez, avec une boucle, un programme qui trace : a) un pentagone régulier de côté 80 pas ; b) un octogone régulier de côté 40 pas. Précisez l'angle de rotation à chaque fois.",
              hint: "Divisez 360 par le nombre de côtés pour trouver l'angle de rotation.",
              solution: [
                "a) Un pentagone a 5 côtés : l'angle de rotation est 360 ÷ 5 = 72 degrés.",
                "Programme : « stylo en position d'écriture ; répéter 5 fois [ avancer de 80 pas ; tourner droite de 72 degrés ] ».",
                "b) Un octogone a 8 côtés : l'angle de rotation est 360 ÷ 8 = 45 degrés.",
                "Programme : « stylo en position d'écriture ; répéter 8 fois [ avancer de 40 pas ; tourner droite de 45 degrés ] ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le lutin est en (0 ; 0), orienté à 90. Il exécute : « stylo en position d'écriture ; répéter 3 fois [ répéter 4 fois [ avancer de 30 pas ; tourner droite de 90 degrés ] ; avancer de 30 pas ] ». a) Que dessine la boucle intérieure ? b) Combien de fois le bloc « avancer de 30 pas » est-il exécuté en tout ? c) Où le lutin finit-il, et quelle figure voit-on ?",
              hint: "Après la boucle intérieure, le lutin est revenu à son point de départ, orienté comme au début. Le bloc « avancer de 30 pas » placé après la boucle intérieure le décale vers la droite.",
              solution: [
                "a) La boucle intérieure trace un carré de côté 30 pas, en tournant vers la droite (le carré est donc en dessous du lutin). Le lutin revient à son point de départ, orienté à 90.",
                "b) À chaque tour de la grande boucle, « avancer de 30 pas » est exécuté 4 fois dans le carré, puis 1 fois après : 5 fois. La grande boucle tourne 3 fois : 3 × 5 = 15 fois en tout.",
                "c) Après chaque carré, le lutin avance de 30 pas vers la droite. Il part de (0 ; 0), puis (30 ; 0), puis (60 ; 0), et finit en (90 ; 0).",
                "On voit trois carrés de côté 30 pas collés les uns aux autres, qui forment ensemble un rectangle de 90 pas sur 30 pas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les boucles et les polygones.",
            statements: [
              { text: "Pour un triangle équilatéral, le lutin tourne de 60° à chaque sommet.", true: false, why: "Il tourne de 360 ÷ 3 = 120°. L'angle de 60° est l'angle intérieur du triangle, pas l'angle de rotation." },
              { text: "Pour un carré, le lutin tourne de 90° à chaque sommet.", true: true, why: "360 ÷ 4 = 90." },
              { text: "« répéter 5 fois [ avancer de 10 pas ] » fait avancer le lutin de 50 pas.", true: true, why: "Le bloc est exécuté 5 fois : 5 × 10 = 50 pas." },
              { text: "Les blocs placés après une boucle sont répétés eux aussi.", true: false, why: "Seuls les blocs à l'intérieur de la boucle sont répétés. Les blocs suivants sont exécutés une fois, quand la boucle est finie." },
              { text: "Pour un hexagone régulier, l'angle de rotation est 60°.", true: true, why: "360 ÷ 6 = 60." },
              { text: "Deux boucles imbriquées de 3 et 4 répétitions exécutent 7 fois le bloc intérieur.", true: false, why: "On multiplie : 3 × 4 = 12 fois." },
              { text: "« répéter indéfiniment » ne s'arrête que si l'on arrête le programme.", true: true, why: "Cette boucle n'a pas de nombre de répétitions : elle tourne jusqu'à ce que l'on clique sur stop." },
            ],
          },
          quiz: [
            {
              q: "Quel angle de rotation faut-il pour tracer un pentagone régulier ?",
              options: ["72°", "108°", "60°", "90°"],
              answer: 0,
              why: "Le lutin fait un tour complet en 5 virages : 360 ÷ 5 = 72°.",
            },
            {
              q: "Combien de fois le lutin dit-il Bonjour avec « répéter 4 fois [ répéter 3 fois [ dire Bonjour ] ] » ?",
              options: ["7", "4", "12"],
              answer: 2,
              why: "Les boucles sont imbriquées : on multiplie les répétitions, 4 × 3 = 12.",
            },
            {
              q: "Que dessine « répéter 3 fois [ avancer de 100 pas ; tourner droite de 120 degrés ] » ?",
              options: ["Un carré", "Un hexagone régulier", "Une ligne droite de 300 pas", "Un triangle équilatéral"],
              answer: 3,
              why: "Trois côtés de 100 pas et une rotation de 360 ÷ 3 = 120° : c'est un triangle équilatéral.",
            },
            {
              q: "Comment s'appellent les blocs placés à l'intérieur d'une boucle ?",
              options: ["Le corps de la boucle", "L'événement de départ du programme", "Le lutin", "La scène"],
              answer: 0,
              why: "Les instructions répétées forment le corps de la boucle.",
            },
            {
              q: "Pour tracer un polygone régulier à 10 côtés, on tourne à chaque sommet de :",
              options: ["10°", "36°", "100°"],
              answer: 1,
              why: "360 ÷ 10 = 36°.",
            },
          ],
          trap: "Utiliser l'angle intérieur du polygone au lieu de l'angle de rotation : pour un triangle équilatéral, le lutin doit tourner de 120°, et non de 60°. Autre erreur : laisser hors de la boucle un bloc qui doit se répéter, par exemple « tourner droite de 90 degrés » : le lutin trace alors une seule longue ligne droite.",
          method: "Avant d'écrire une boucle, repérez dans le programme les blocs qui se répètent à l'identique et comptez combien de fois. Pour un polygone régulier, vérifiez toujours que nombre de côtés × angle de rotation = 360°.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'formules-en-blocs',
          title: 'Programmer une formule et lire des données',
          minutes: 30,
          objectives: [
            "Demander une donnée à l'utilisateur et utiliser sa réponse dans un programme.",
            "Traduire une formule ou un programme de calcul en blocs d'opérations emboîtés.",
            "Ranger une donnée dans une variable pour la réutiliser.",
            "Tester un programme avec des valeurs dont on connaît le résultat.",
          ],
          course: [
            {
              heading: "Lire une donnée : demander et réponse",
              paragraphs: [
                "Un programme peut poser une question à l'utilisateur. Dans Scratch, le bloc « demander Quel est votre nombre ? et attendre » affiche la question et une zone de saisie. Le programme s'arrête jusqu'à ce que l'utilisateur tape une valeur et valide.",
                "Ce que l'utilisateur a tapé est rangé dans le bloc « réponse ». On peut ensuite placer ce bloc dans d'autres blocs, par exemple « dire réponse » pour l'afficher dans une bulle, ou dans une opération pour faire un calcul avec.",
              ],
              box: { label: "À retenir", text: "« demander ... et attendre » lit une donnée tapée au clavier ; le bloc « réponse » contient cette donnée." },
            },
            {
              heading: "Les blocs d'opérations",
              paragraphs: [
                "Les blocs verts d'opérations font des calculs : addition (+), soustraction (-), multiplication et division. Attention, dans Scratch, la multiplication s'écrit avec une étoile * et la division avec une barre oblique /, comme sur la plupart des ordinateurs.",
                "Pour programmer une formule, on emboîte les blocs les uns dans les autres. Le bloc le plus à l'intérieur est calculé en premier : l'emboîtement joue le rôle des parenthèses. Par exemple, pour calculer 3x + 5 avec x = réponse, on place le bloc « réponse * 3 » dans la case de gauche du bloc « ... + 5 ».",
                "Pour 3(x + 5), c'est l'inverse : on place le bloc « réponse + 5 » dans le bloc « ... * 3 ». L'addition, à l'intérieur, est faite d'abord. L'ordre d'emboîtement doit donc suivre l'ordre des calculs.",
              ],
              box: { label: "Règle", text: "Le bloc d'opération le plus à l'intérieur est calculé en premier. On emboîte les blocs dans l'ordre du programme de calcul." },
            },
            {
              heading: "Garder une donnée dans une variable",
              paragraphs: [
                "Le bloc « réponse » ne garde que la dernière réponse : si le programme pose une deuxième question, la première réponse est perdue. Pour la conserver, on la range dans une variable, une boîte qui porte un nom et qui contient une valeur.",
                "Par exemple, pour calculer l'aire d'un rectangle, on crée deux variables, L et l. Le programme fait : « demander Longueur ? et attendre », « mettre L à réponse », « demander Largeur ? et attendre », « mettre l à réponse », puis « dire L * l ».",
              ],
            },
            {
              heading: "Tester un programme",
              paragraphs: [
                "Un programme peut fonctionner sans erreur et donner pourtant un résultat faux, par exemple si les blocs sont emboîtés dans le mauvais ordre. Pour le vérifier, on le teste avec des valeurs simples dont on connaît le résultat à l'avance.",
                "Pour un programme qui doit calculer le périmètre d'un carré, on tape 5 : il doit afficher 20. S'il affiche 25, il calcule l'aire et non le périmètre. On fait plusieurs essais, dont un avec 0 et un avec un nombre décimal comme 2,5. Dans Scratch, le nombre décimal se tape avec un point : 2.5.",
              ],
            },
          ],
          keyPoints: [
            "« demander ... et attendre » lit une donnée ; « réponse » la contient.",
            "Dans Scratch, × s'écrit * et ÷ s'écrit /.",
            "Le bloc le plus à l'intérieur est calculé en premier : l'emboîtement remplace les parenthèses.",
            "Une variable est une boîte nommée qui garde une valeur ; « mettre L à réponse » la remplit.",
            "On teste un programme avec des valeurs dont on connaît le résultat.",
          ],
          example: {
            statement: "Écrivez un programme qui demande le côté d'un carré et affiche son périmètre. Testez-le avec un côté de 7.",
            solution: [
              "Le périmètre d'un carré de côté c est 4 × c.",
              "On commence par « quand le drapeau vert est cliqué ».",
              "On lit la donnée : « demander Côté du carré ? et attendre ». La valeur tapée est dans « réponse ».",
              "On affiche le calcul : « dire 4 * réponse », en plaçant le bloc « réponse » dans le bloc de multiplication.",
              "Test : si l'utilisateur tape 7, le lutin dit 4 × 7 = 28.",
              "Le programme affiche 28, ce qui est bien le périmètre d'un carré de côté 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un programme contient : « demander Choisissez un nombre et attendre », puis « dire (réponse * 2) + 3 », le bloc « réponse * 2 » étant placé dans la case de gauche du bloc d'addition. Qu'affiche-t-il si l'on tape 6 ? Et si l'on tape 2.5 (le nombre 2,5, que Scratch écrit avec un point) ?",
              hint: "Le bloc intérieur, la multiplication, est calculé en premier.",
              solution: [
                "Pour 6 : d'abord 6 × 2 = 12, puis 12 + 3 = 15. Le lutin dit 15.",
                "Pour 2,5 : d'abord 2,5 × 2 = 5, puis 5 + 3 = 8. Le lutin dit 8.",
                "Ce programme calcule l'expression 2x + 3.",
              ],
            },
            {
              level: 2,
              statement: "On veut programmer : « Choisir un nombre, lui ajouter 4, puis multiplier le résultat par 3. » a) Écrivez l'expression correspondante avec x. b) Décrivez l'emboîtement des blocs. c) Qu'afficherait un programme mal emboîté, qui calcule (réponse * 3) + 4, si l'on tape 5 ? Comparez avec le bon résultat.",
              hint: "L'addition doit être faite en premier : elle doit donc être le bloc intérieur.",
              solution: [
                "a) On ajoute 4, puis on multiplie le tout par 3 : 3(x + 4).",
                "b) On place le bloc « réponse + 4 » dans la case de gauche du bloc « ... * 3 », puis le tout dans « dire ». Le bloc d'addition, à l'intérieur, est calculé en premier.",
                "Bon programme avec 5 : 5 + 4 = 9, puis 9 × 3 = 27.",
                "c) Programme mal emboîté avec 5 : 5 × 3 = 15, puis 15 + 4 = 19.",
                "Les résultats diffèrent (27 et 19) : l'ordre d'emboîtement change le calcul.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut un programme qui demande la longueur et la largeur d'un rectangle, puis affiche son aire et son périmètre. a) Expliquez pourquoi il ne suffit pas d'utiliser deux fois le bloc « réponse ». b) Écrivez le programme avec deux variables L et l. c) Qu'affiche-t-il pour une longueur de 8 et une largeur de 5 ?",
              hint: "Le bloc « réponse » ne garde que la dernière valeur tapée. Rangez chaque réponse dans une variable juste après la question.",
              solution: [
                "a) Après la deuxième question, « réponse » contient la largeur : la longueur a été remplacée. Il faut donc la ranger avant de poser la deuxième question.",
                "b) « quand le drapeau vert est cliqué », « demander Longueur ? et attendre », « mettre L à réponse », « demander Largeur ? et attendre », « mettre l à réponse », « dire L * l pendant 2 secondes », « dire (L + l) * 2 ».",
                "Pour le périmètre, le bloc « L + l » est placé dans le bloc « ... * 2 », car on additionne d'abord les deux dimensions.",
                "c) Aire : 8 × 5 = 40. Périmètre : (8 + 5) × 2 = 13 × 2 = 26.",
                "Le programme affiche 40, puis 26.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque bloc à ce qu'il fait.",
            pairs: [
              { left: "quand le drapeau vert est cliqué", right: "Lance le programme" },
              { left: "demander ... et attendre", right: "Pose une question et attend la saisie" },
              { left: "réponse", right: "Contient la valeur tapée par l'utilisateur" },
              { left: "mettre L à réponse", right: "Range la valeur tapée dans la variable L" },
              { left: "réponse * 3", right: "Multiplie la valeur tapée par 3" },
              { left: "dire ...", right: "Affiche un message dans une bulle" },
            ],
          },
          quiz: [
            {
              q: "Dans Scratch, quel signe désigne la multiplication ?",
              options: ["x", "*", "/", ":"],
              answer: 1,
              why: "La multiplication s'écrit avec une étoile *, et la division avec une barre oblique /.",
            },
            {
              q: "On tape 4. Qu'affiche « dire (réponse + 1) * 5 », le bloc d'addition étant à l'intérieur ?",
              options: ["9", "21", "25", "45"],
              answer: 2,
              why: "Le bloc intérieur est calculé d'abord : 4 + 1 = 5, puis 5 × 5 = 25.",
            },
            {
              q: "Que contient le bloc « réponse » après deux questions successives ?",
              options: ["La dernière réponse", "La première réponse", "La somme des deux"],
              answer: 0,
              why: "« réponse » ne garde que la dernière valeur tapée. Pour conserver la première, il faut la ranger dans une variable.",
            },
            {
              q: "Quel emboîtement calcule 2x + 7 quand x est la réponse ?",
              options: ["(réponse + 7) * 2", "réponse + 7 * 2", "(réponse + 2) * 7", "(réponse * 2) + 7"],
              answer: 3,
              why: "On multiplie d'abord par 2, donc le bloc « réponse * 2 » est à l'intérieur du bloc d'addition.",
            },
            {
              q: "Un programme doit afficher le périmètre d'un carré. On tape 5 et il affiche 25. Que se passe-t-il ?",
              options: ["Il est juste", "Il calcule l'aire", "Il calcule le double"],
              answer: 1,
              why: "Le périmètre d'un carré de côté 5 est 20. Le résultat 25 = 5 × 5 est l'aire : le programme est faux.",
            },
          ],
          trap: "Emboîter les blocs d'opérations dans le mauvais ordre : le bloc intérieur est calculé en premier, donc pour 3(x + 4) l'addition doit être à l'intérieur de la multiplication. Autre piège : utiliser « réponse » après une deuxième question en croyant qu'elle contient encore la première.",
          method: "Écrivez d'abord la formule sur papier avec ses parenthèses, puis construisez les blocs de l'intérieur vers l'extérieur. Testez toujours avec une valeur simple, comme 1, 2 ou 10, dont vous connaissez le résultat.",
        },
      ],
    },

    /* ================================================================== */
    /* ORGANISER ET REPRÉSENTER DES DONNÉES                                 */
    /* ================================================================== */
    {
      id: 'statistiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'effectifs-frequences',
          title: 'Effectifs et fréquences',
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire des statistiques : population, caractère, valeur, effectif.",
            "Recueillir et organiser des données dans un tableau d'effectifs.",
            "Calculer une fréquence et l'exprimer sous forme de fraction, de nombre décimal et de pourcentage.",
          ],
          course: [
            {
              heading: "Le vocabulaire des statistiques",
              paragraphs: [
                "Faire des statistiques, c'est recueillir des données sur un groupe, puis les organiser pour les comprendre. Le groupe étudié s'appelle la population, et chacun de ses membres est un individu. Si l'on interroge les élèves d'une classe sur leur sport préféré, la population est la classe et chaque élève est un individu.",
                "Ce que l'on étudie s'appelle le caractère : le sport préféré, la taille, le nombre de frères et sœurs. Un caractère peut être qualitatif, quand ses valeurs sont des mots (football, natation...), ou quantitatif, quand ses valeurs sont des nombres (1,52 m, 3 frères...).",
              ],
              box: { label: "Vocabulaire", text: "Population : le groupe étudié. Individu : un membre de ce groupe. Caractère : ce que l'on étudie. Valeur : une réponse possible pour ce caractère." },
            },
            {
              heading: "Les effectifs",
              paragraphs: [
                "L'effectif d'une valeur est le nombre d'individus qui ont cette valeur. L'effectif total est le nombre total d'individus de la population : c'est la somme de tous les effectifs.",
                "Pour organiser les données, on les compte et on les range dans un tableau d'effectifs. Par exemple (données fictives), dans une classe de 25 élèves : football 8, natation 5, basket 7, tennis 5. On vérifie que 8 + 5 + 7 + 5 = 25 : la somme des effectifs est bien l'effectif total.",
                "Quand le caractère est quantitatif et prend beaucoup de valeurs différentes, comme la taille, on regroupe les valeurs en classes, c'est-à-dire en intervalles : par exemple, de 140 cm (inclus) à 150 cm (exclu), ce que l'on note 140 ≤ t < 150. On compte alors l'effectif de chaque classe.",
              ],
            },
            {
              heading: "Les fréquences",
              paragraphs: [
                "L'effectif seul ne permet pas toujours de comparer : 8 élèves sur 25, ce n'est pas la même chose que 8 élèves sur 100. On calcule donc la fréquence, qui indique la part de la population qui a une valeur donnée.",
                "La fréquence d'une valeur est le quotient de son effectif par l'effectif total. Pour le football : 8 ÷ 25 = 0,32. On peut l'écrire sous forme de fraction (8/25), de nombre décimal (0,32) ou de pourcentage (32 %). Pour passer du décimal au pourcentage, on multiplie par 100.",
                "Une fréquence est toujours comprise entre 0 et 1 (entre 0 % et 100 %). La somme des fréquences de toutes les valeurs est égale à 1, c'est-à-dire 100 %. Dans l'exemple : 0,32 + 0,2 + 0,28 + 0,2 = 1.",
              ],
              box: { label: "Formule", text: "Fréquence d'une valeur = effectif de cette valeur ÷ effectif total. Elle est comprise entre 0 et 1, et la somme de toutes les fréquences vaut 1 (100 %)." },
            },
          ],
          keyPoints: [
            "Population : le groupe étudié ; caractère : ce que l'on étudie ; effectif : le nombre d'individus ayant une valeur.",
            "La somme des effectifs est égale à l'effectif total.",
            "Fréquence = effectif ÷ effectif total.",
            "Une fréquence s'écrit en fraction, en décimal ou en pourcentage : 1/4 = 0,25 = 25 %.",
            "Une fréquence est entre 0 et 1, et la somme des fréquences vaut 1 (100 %).",
          ],
          example: {
            statement: "Données fictives : on a demandé à 25 élèves leur sport préféré. Football : 8 ; natation : 5 ; basket : 7 ; tennis : 5. Calculez la fréquence de chaque sport, en nombre décimal et en pourcentage.",
            solution: [
              "L'effectif total est 8 + 5 + 7 + 5 = 25.",
              "Football : 8 ÷ 25 = 0,32, soit 32 %.",
              "Natation : 5 ÷ 25 = 0,2, soit 20 %.",
              "Basket : 7 ÷ 25 = 0,28, soit 28 %.",
              "Tennis : 5 ÷ 25 = 0,2, soit 20 %.",
              "Vérification : 32 + 20 + 28 + 20 = 100 %. Les fréquences sont 0,32 ; 0,2 ; 0,28 et 0,2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives : dans une classe de 24 élèves, 6 élèves portent des lunettes. Calculez la fréquence des élèves qui portent des lunettes, sous forme de fraction simplifiée, de nombre décimal et de pourcentage. Quelle est la fréquence des élèves qui n'en portent pas ?",
              hint: "Divisez l'effectif (6) par l'effectif total (24), puis simplifiez la fraction.",
              solution: [
                "Fréquence : 6/24. On simplifie par 6 : 6/24 = 1/4.",
                "En nombre décimal : 1 ÷ 4 = 0,25. En pourcentage : 25 %.",
                "Les élèves sans lunettes sont 24 - 6 = 18 : 18/24 = 3/4 = 0,75 = 75 %.",
                "On vérifie : 25 % + 75 % = 100 %.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : on a interrogé 40 élèves sur leur moyen de transport pour venir au collège. À pied : 14 ; vélo : 6 ; bus : 12 ; voiture : 8. a) Vérifiez l'effectif total. b) Calculez la fréquence de chaque moyen de transport en nombre décimal, puis en pourcentage. c) Vérifiez votre résultat.",
              hint: "Divisez chaque effectif par 40. Pour obtenir un pourcentage, multipliez le nombre décimal par 100.",
              solution: [
                "a) 14 + 6 + 12 + 8 = 40 : l'effectif total est bien 40.",
                "b) À pied : 14 ÷ 40 = 0,35, soit 35 %.",
                "Vélo : 6 ÷ 40 = 0,15, soit 15 %.",
                "Bus : 12 ÷ 40 = 0,3, soit 30 %.",
                "Voiture : 8 ÷ 40 = 0,2, soit 20 %.",
                "c) 0,35 + 0,15 + 0,3 + 0,2 = 1, soit 100 % : les calculs sont cohérents.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : dans une enquête sur la cantine, 45 élèves ont répondu qu'ils y déjeunent. La fréquence de cette réponse est 0,6. a) Combien d'élèves ont été interrogés ? b) Combien ne déjeunent pas à la cantine, et quelle est la fréquence de cette réponse en pourcentage ?",
              hint: "0,6 = 6/10 = 3/5 : 45 élèves représentent 3 parts sur 5. Cherchez combien d'élèves représente une part.",
              solution: [
                "a) La fréquence 0,6 s'écrit 6/10, c'est-à-dire 3/5. Donc 45 élèves représentent 3 cinquièmes des élèves interrogés.",
                "Un cinquième représente 45 ÷ 3 = 15 élèves, donc les cinq cinquièmes représentent 15 × 5 = 75 élèves.",
                "On vérifie : 45 ÷ 75 = 0,6. On a interrogé 75 élèves.",
                "b) Les élèves qui ne déjeunent pas à la cantine sont 75 - 45 = 30.",
                "Leur fréquence est 30 ÷ 75 = 0,4, soit 40 %. On vérifie : 60 % + 40 % = 100 %.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque fréquence écrite en fraction à son écriture décimale et en pourcentage.",
            pairs: [
              { left: "1/2", right: "0,5 ou 50 %" },
              { left: "1/4", right: "0,25 ou 25 %" },
              { left: "3/4", right: "0,75 ou 75 %" },
              { left: "1/5", right: "0,2 ou 20 %" },
              { left: "1/10", right: "0,1 ou 10 %" },
              { left: "2/5", right: "0,4 ou 40 %" },
            ],
          },
          quiz: [
            {
              q: "On interroge les 30 élèves d'une classe sur leur couleur préférée. Quelle est la population ?",
              options: ["La couleur préférée de chaque élève", "Le nombre 30", "Les élèves de la classe", "Le bleu"],
              answer: 2,
              why: "La population est le groupe étudié : les élèves de la classe. La couleur préférée est le caractère.",
            },
            {
              q: "Sur 20 élèves, 5 jouent d'un instrument. Quelle est la fréquence ?",
              options: ["0,25", "5", "0,5", "20 %"],
              answer: 0,
              why: "Fréquence = 5 ÷ 20 = 0,25, soit 25 %.",
            },
            {
              q: "Que vaut la somme de toutes les fréquences d'une série ?",
              options: ["L'effectif total", "1", "0", "100"],
              answer: 1,
              why: "La somme des fréquences vaut 1, c'est-à-dire 100 %.",
            },
            {
              q: "Une fréquence de 0,08 correspond à :",
              options: ["80 %", "0,8 %", "8 %"],
              answer: 2,
              why: "On multiplie par 100 : 0,08 × 100 = 8, donc 8 %.",
            },
            {
              q: "Le nombre de frères et sœurs est un caractère :",
              options: ["qualitatif", "quantitatif", "fréquentiel"],
              answer: 1,
              why: "Ses valeurs sont des nombres (0, 1, 2...) : c'est un caractère quantitatif.",
            },
          ],
          trap: "Diviser l'effectif total par l'effectif au lieu de l'inverse : la fréquence est toujours effectif ÷ effectif total, et elle ne peut jamais dépasser 1. Autre erreur : écrire 0,5 % pour 0,5 au lieu de 50 %.",
          method: "Après avoir calculé toutes les fréquences, additionnez-les : vous devez trouver 1 (ou 100 %). Si ce n'est pas le cas, une erreur de calcul ou de comptage s'est glissée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'diagrammes',
          title: 'Lire et construire des diagrammes',
          minutes: 35,
          objectives: [
            "Lire et interpréter un diagramme en barres, un diagramme circulaire et un graphique d'évolution.",
            "Construire un diagramme en barres à partir d'un tableau d'effectifs.",
            "Calculer les angles d'un diagramme circulaire.",
            "Repérer un graphique trompeur.",
          ],
          course: [
            {
              heading: "Le diagramme en barres",
              paragraphs: [
                "Dans un diagramme en barres (on dit aussi diagramme en bâtons quand les barres sont fines), chaque valeur du caractère est représentée par une barre. La hauteur de la barre est proportionnelle à l'effectif : une barre deux fois plus haute représente un effectif deux fois plus grand.",
                "Pour le construire, on trace deux axes. Sur l'axe horizontal, on place les valeurs, avec des barres de même largeur et régulièrement espacées. Sur l'axe vertical, on gradue les effectifs régulièrement, en partant de 0. On n'oublie pas le titre et le nom des axes.",
                "Ce diagramme permet de comparer d'un coup d'œil les effectifs : on voit tout de suite quelle valeur est la plus fréquente.",
              ],
            },
            {
              heading: "Le diagramme circulaire",
              paragraphs: [
                "Un diagramme circulaire représente la population entière par un disque. Chaque valeur occupe un secteur (une part de disque) dont l'angle est proportionnel à l'effectif. Le disque entier, 360°, représente l'effectif total.",
                "Pour calculer l'angle d'un secteur, on multiplie la fréquence de la valeur par 360°. Par exemple, une valeur de fréquence 0,25 (un quart) occupe 0,25 × 360 = 90°, un quart de disque. On trace ensuite les secteurs au rapporteur, les uns à la suite des autres.",
                "Il existe aussi le diagramme semi-circulaire, où la population entière est représentée par un demi-disque : on multiplie alors la fréquence par 180°.",
              ],
              box: { label: "Formule", text: "Angle d'un secteur = fréquence × 360°, ou bien (effectif ÷ effectif total) × 360°. La somme des angles vaut 360°." },
            },
            {
              heading: "Le graphique d'évolution et l'histogramme",
              paragraphs: [
                "Pour montrer comment une grandeur évolue dans le temps (une température heure par heure, une population année après année), on utilise un graphique en ligne brisée : on place un point pour chaque date, puis on relie les points. On lit si la grandeur augmente, diminue ou reste stable.",
                "Quand les données sont regroupées en classes de même largeur (par exemple des tailles de 140 à 150 cm, de 150 à 160 cm...), on utilise un histogramme : des rectangles collés les uns aux autres, un par classe, dont la hauteur correspond à l'effectif.",
              ],
            },
            {
              heading: "Lire un graphique avec un esprit critique",
              paragraphs: [
                "Avant de lire un graphique, on regarde son titre, le nom des axes, les unités et la graduation. Un graphique peut être trompeur : si l'axe vertical ne commence pas à 0, de petites différences paraissent énormes.",
                "Par exemple, si un club passe de 100 à 120 adhérents et que l'axe commence à 90, la première barre mesure 10 graduations et la seconde 30 : elle semble trois fois plus haute, alors que l'augmentation réelle n'est que de 20 %. Il faut donc toujours lire les nombres, pas seulement les formes.",
              ],
              box: { label: "À retenir", text: "Avant d'interpréter un graphique : lire le titre, les axes, les unités, et vérifier où commence la graduation." },
            },
          ],
          keyPoints: [
            "Diagramme en barres : la hauteur de chaque barre est proportionnelle à l'effectif ; l'axe vertical commence à 0.",
            "Diagramme circulaire : angle = fréquence × 360° ; la somme des angles vaut 360°.",
            "Diagramme semi-circulaire : angle = fréquence × 180°.",
            "Graphique en ligne brisée : pour montrer une évolution dans le temps.",
            "Histogramme : des rectangles collés, pour des données regroupées en classes.",
            "Toujours lire le titre, les axes et la graduation avant d'interpréter.",
          ],
          example: {
            statement: "Données fictives : 24 élèves ont indiqué leur moyen de transport. Bus : 12 ; à pied : 6 ; vélo : 4 ; voiture : 2. Calculez les angles du diagramme circulaire.",
            solution: [
              "L'effectif total est 12 + 6 + 4 + 2 = 24.",
              "Bus : 12 ÷ 24 × 360 = 0,5 × 360 = 180°.",
              "À pied : 6 ÷ 24 × 360 = 0,25 × 360 = 90°.",
              "Vélo : 4 ÷ 24 × 360 = 1 440 ÷ 24 = 60°.",
              "Voiture : 2 ÷ 24 × 360 = 720 ÷ 24 = 30°.",
              "Vérification : 180 + 90 + 60 + 30 = 360°. Les angles sont 180°, 90°, 60° et 30°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives : un diagramme en barres indique le nombre de livres empruntés au CDI. Lundi : la barre monte à 12 ; mardi : 18 ; jeudi : 9 ; vendredi : 21. a) Quel jour a-t-on emprunté le plus de livres ? b) Combien de livres ont été empruntés en tout ? c) Combien de livres de plus le vendredi que le jeudi ? d) Quelle est la fréquence des emprunts du lundi ?",
              hint: "Pour la fréquence, divisez l'effectif du lundi par l'effectif total.",
              solution: [
                "a) La barre la plus haute est celle du vendredi : 21 livres.",
                "b) 12 + 18 + 9 + 21 = 60 livres.",
                "c) 21 - 9 = 12 livres de plus le vendredi.",
                "d) 12 ÷ 60 = 0,2, soit 20 % des emprunts.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : 36 élèves ont choisi leur couleur préférée. Rouge : 9 ; bleu : 12 ; vert : 6 ; jaune : 9. Calculez l'angle de chaque secteur du diagramme circulaire, puis vérifiez.",
              hint: "Un élève correspond à 360 ÷ 36 = 10°.",
              solution: [
                "Chaque élève représente 360 ÷ 36 = 10°.",
                "Rouge : 9 × 10 = 90°.",
                "Bleu : 12 × 10 = 120°.",
                "Vert : 6 × 10 = 60°.",
                "Jaune : 9 × 10 = 90°.",
                "Vérification : 90 + 120 + 60 + 90 = 360°.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : un club de judo avait 100 adhérents en 2024 et 120 en 2025. Sur l'affiche du club, le diagramme en barres a un axe vertical qui commence à 90. a) Combien de graduations mesure chaque barre au-dessus de 90 ? b) Combien de fois la barre de 2025 paraît-elle plus haute que celle de 2024 ? c) De combien le nombre d'adhérents a-t-il réellement augmenté, en nombre et en pourcentage ? d) Comment corriger le graphique ?",
              hint: "Mesurez chaque barre à partir de 90, puis comparez avec l'augmentation réelle : 20 adhérents de plus sur 100.",
              solution: [
                "a) Barre de 2024 : 100 - 90 = 10 graduations. Barre de 2025 : 120 - 90 = 30 graduations.",
                "b) 30 ÷ 10 = 3 : la barre de 2025 paraît trois fois plus haute.",
                "c) En réalité, le club a gagné 120 - 100 = 20 adhérents, soit 20 sur 100, c'est-à-dire 20 %. Le nombre d'adhérents a été multiplié par 1,2 seulement.",
                "d) Il faut faire commencer l'axe vertical à 0 : les barres mesurent alors 100 et 120 graduations, et la comparaison visuelle devient juste.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les diagrammes.",
            statements: [
              { text: "Dans un diagramme en barres, la hauteur d'une barre est proportionnelle à l'effectif.", true: true, why: "Une barre deux fois plus haute représente un effectif deux fois plus grand." },
              { text: "Dans un diagramme circulaire, la somme des angles vaut 180°.", true: false, why: "Le disque entier fait 360°. C'est dans un diagramme semi-circulaire que la somme vaut 180°." },
              { text: "Une valeur de fréquence 0,5 occupe la moitié du disque.", true: true, why: "0,5 × 360 = 180°, la moitié du disque." },
              { text: "Pour montrer une évolution dans le temps, le diagramme circulaire est le plus adapté.", true: false, why: "On utilise un graphique en ligne brisée, qui montre les hausses et les baisses au fil du temps." },
              { text: "Un axe vertical qui ne commence pas à 0 peut exagérer les différences.", true: true, why: "Les barres paraissent alors beaucoup plus différentes qu'elles ne le sont réellement." },
              { text: "Dans un histogramme, les rectangles sont séparés par des espaces.", true: false, why: "Dans un histogramme, les rectangles sont collés, car les classes se suivent sans trou." },
            ],
          },
          quiz: [
            {
              q: "Sur 20 élèves, 5 aiment le rugby. Quel est l'angle de ce secteur dans un diagramme circulaire ?",
              options: ["5°", "25°", "50°", "90°"],
              answer: 3,
              why: "La fréquence est 5 ÷ 20 = 0,25, et 0,25 × 360 = 90°.",
            },
            {
              q: "Quel graphique choisir pour montrer la température heure par heure ?",
              options: ["Un graphique en ligne brisée", "Un diagramme circulaire avec une part par heure", "Un tableau de mots"],
              answer: 0,
              why: "Une évolution dans le temps se représente par des points reliés, en ligne brisée.",
            },
            {
              q: "Dans un diagramme semi-circulaire, une valeur de fréquence 0,5 occupe :",
              options: ["180°", "90°", "45°"],
              answer: 1,
              why: "Le demi-disque fait 180°, donc 0,5 × 180 = 90°.",
            },
            {
              q: "Dans un diagramme circulaire, un secteur de 120° représente :",
              options: ["un quart de la population", "120 individus", "un tiers de la population", "la moitié de la population"],
              answer: 2,
              why: "120 ÷ 360 = 1/3 : le secteur représente un tiers de la population.",
            },
            {
              q: "Que faut-il regarder en premier pour lire un graphique ?",
              options: ["La couleur des barres", "Le titre et les axes", "La barre la plus haute", "La taille du dessin"],
              answer: 1,
              why: "Le titre, les axes, les unités et la graduation disent ce que le graphique représente vraiment.",
            },
          ],
          trap: "Mesurer les angles d'un diagramme circulaire sur 100 au lieu de 360 : un secteur de 25 % fait 90°, pas 25°. Autre piège : comparer les hauteurs des barres sans vérifier que l'axe commence à 0.",
          method: "Après avoir calculé les angles d'un diagramme circulaire, additionnez-les : vous devez trouver exactement 360°. Pour lire un graphique, posez-vous trois questions : de quoi parle-t-il, quelles sont les unités, où commence la graduation ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'moyenne',
          title: 'Calculer et interpréter une moyenne',
          minutes: 30,
          objectives: [
            "Calculer la moyenne d'une série de données.",
            "Interpréter une moyenne comme un partage équitable.",
            "Comparer deux séries à l'aide de leur moyenne et en connaître les limites.",
          ],
          course: [
            {
              heading: "Calculer une moyenne",
              paragraphs: [
                "La moyenne d'une série de valeurs est le quotient de la somme de toutes les valeurs par le nombre de valeurs. Par exemple, si Lina a obtenu les notes 12, 15, 9, 14 et 10, la somme de ses notes est 12 + 15 + 9 + 14 + 10 = 60, et elle a 5 notes. Sa moyenne est 60 ÷ 5 = 12.",
                "La moyenne s'exprime dans la même unité que les valeurs : une moyenne de températures en degrés, une moyenne de tailles en centimètres, une moyenne de notes en points.",
              ],
              box: { label: "Définition", text: "Moyenne d'une série = somme de toutes les valeurs ÷ nombre de valeurs." },
            },
            {
              heading: "Interpréter une moyenne : le partage équitable",
              paragraphs: [
                "La moyenne est la valeur que chaque individu aurait si l'on partageait le total équitablement. Par exemple, quatre amis ont 3 €, 5 €, 8 € et 4 €, soit 20 € en tout. Si l'on mettait cet argent en commun et qu'on le partageait également, chacun aurait 20 ÷ 4 = 5 € : c'est la moyenne.",
                "La moyenne est toujours comprise entre la plus petite et la plus grande valeur de la série. En revanche, elle n'est pas forcément une des valeurs de la série, ni forcément un nombre entier. Si les familles d'un immeuble ont en moyenne 1,8 enfant (données fictives), cela ne veut pas dire qu'une de ces familles a 1,8 enfant : aucune famille n'a un nombre d'enfants décimal.",
              ],
              box: { label: "À retenir", text: "La moyenne est comprise entre la plus petite et la plus grande valeur, mais ce n'est pas forcément une valeur de la série." },
            },
            {
              heading: "Les limites de la moyenne",
              paragraphs: [
                "Deux séries très différentes peuvent avoir la même moyenne. Un joueur qui marque 12, 13, 14 et 13 points a une moyenne de 13 points, comme un joueur qui marque 2, 30, 18 et 2 points. Le premier est régulier, le second très irrégulier.",
                "Une valeur très grande ou très petite, que l'on appelle une valeur extrême, peut beaucoup modifier la moyenne. Pour bien décrire une série, on ne se contente donc pas de la moyenne : on regarde aussi les valeurs elles-mêmes.",
              ],
            },
          ],
          keyPoints: [
            "Moyenne = somme des valeurs ÷ nombre de valeurs.",
            "La moyenne a la même unité que les valeurs.",
            "C'est la valeur de chacun si le total était partagé équitablement.",
            "Elle est entre la plus petite et la plus grande valeur, sans être forcément une valeur de la série.",
            "Deux séries différentes peuvent avoir la même moyenne ; une valeur extrême peut la fausser.",
          ],
          example: {
            statement: "Données fictives : voici les temps (en minutes) mis par Hugo pour venir au collège pendant une semaine : 14, 18, 15, 12, 16. Calculez le temps moyen.",
            solution: [
              "On additionne les valeurs : 14 + 18 + 15 + 12 + 16 = 75.",
              "On compte les valeurs : il y en a 5.",
              "On divise : 75 ÷ 5 = 15.",
              "On vérifie que le résultat est entre la plus petite valeur (12) et la plus grande (18) : c'est bien le cas.",
              "Hugo met en moyenne 15 minutes pour venir au collège.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives : voici les températures relevées à midi pendant une semaine, en °C : 12, 15, 14, 10, 9, 13, 11. Calculez la température moyenne.",
              hint: "Additionnez les 7 températures, puis divisez par 7.",
              solution: [
                "Somme : 12 + 15 + 14 + 10 + 9 + 13 + 11 = 84.",
                "Il y a 7 valeurs : 84 ÷ 7 = 12.",
                "On vérifie : 12 est entre 9 et 15.",
                "La température moyenne est 12 °C.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : voici les points marqués par deux joueuses de basket lors de quatre matchs. Anna : 10, 14, 12, 16. Bérénice : 8, 30, 6, 8. a) Calculez la moyenne de chaque joueuse. b) Peut-on dire que les deux joueuses jouent de la même façon ? Justifiez.",
              hint: "Calculez les deux moyennes, puis regardez les valeurs une par une.",
              solution: [
                "a) Anna : 10 + 14 + 12 + 16 = 52, et 52 ÷ 4 = 13 points.",
                "Bérénice : 8 + 30 + 6 + 8 = 52, et 52 ÷ 4 = 13 points.",
                "b) Les deux moyennes sont égales, mais les séries sont très différentes.",
                "Anna marque entre 10 et 16 points à chaque match : elle est régulière.",
                "Bérénice a marqué 30 points lors d'un match, mais 8 points ou moins lors des trois autres : ce match exceptionnel fait monter sa moyenne. Elle est beaucoup moins régulière.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : Inès a eu quatre notes sur 20 en mathématiques : 13, 8, 15 et 12. a) Calculez sa moyenne. b) Quelle note doit-elle obtenir au cinquième contrôle pour avoir 13 de moyenne ? c) Peut-elle atteindre 14 de moyenne avec ce cinquième contrôle ?",
              hint: "Avec 5 notes, une moyenne de 13 correspond à une somme de 5 × 13 points.",
              solution: [
                "a) 13 + 8 + 15 + 12 = 48, et 48 ÷ 4 = 12. Sa moyenne est 12.",
                "b) Pour une moyenne de 13 avec 5 notes, la somme doit être 5 × 13 = 65.",
                "Elle a déjà 48 points : il lui manque 65 - 48 = 17. Elle doit obtenir 17.",
                "Vérification : (48 + 17) ÷ 5 = 65 ÷ 5 = 13.",
                "c) Pour 14 de moyenne, il faudrait une somme de 5 × 14 = 70, donc une cinquième note de 70 - 48 = 22.",
                "C'est impossible, car la note maximale est 20. Inès ne peut pas atteindre 14 de moyenne avec ce seul contrôle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer la moyenne des notes 11, 14 et 17.",
            items: [
              "Relever toutes les valeurs de la série : 11, 14 et 17",
              "Les additionner : 11 + 14 + 17 = 42",
              "Compter le nombre de valeurs : 3",
              "Diviser la somme par le nombre de valeurs : 42 ÷ 3 = 14",
              "Vérifier que 14 est entre 11 et 17",
              "Conclure : la moyenne est 14",
            ],
          },
          quiz: [
            {
              q: "Quelle est la moyenne de 6, 8 et 13 ?",
              options: ["27", "9", "8", "13"],
              answer: 1,
              why: "6 + 8 + 13 = 27, et 27 ÷ 3 = 9.",
            },
            {
              q: "La moyenne d'une série dont les valeurs vont de 5 à 15 peut-elle valoir 18 ?",
              options: ["Oui, toujours", "Oui, parfois", "Non, jamais"],
              answer: 2,
              why: "La moyenne est toujours comprise entre la plus petite et la plus grande valeur, donc entre 5 et 15.",
            },
            {
              q: "Trois sacs pèsent 2 kg, 3 kg et 7 kg. Si on répartissait également leur contenu, chaque sac pèserait :",
              options: ["4 kg", "3 kg", "12 kg", "6 kg"],
              answer: 0,
              why: "2 + 3 + 7 = 12 kg, et 12 ÷ 3 = 4 kg : c'est la moyenne.",
            },
            {
              q: "Une série a une moyenne de 10 avec 4 valeurs. Quelle est la somme des valeurs ?",
              options: ["14", "2,5", "10", "40"],
              answer: 3,
              why: "Somme = moyenne × nombre de valeurs = 10 × 4 = 40.",
            },
            {
              q: "Une moyenne est-elle toujours une des valeurs de la série ?",
              options: ["Non", "Oui", "Seulement si elle est entière"],
              answer: 0,
              why: "La moyenne de 1 et 4 est 2,5, qui n'est pas une valeur de la série.",
            },
          ],
          trap: "Oublier une valeur dans la somme, ou diviser par un mauvais nombre de valeurs. Autre erreur : croire que deux séries de même moyenne se ressemblent forcément.",
          method: "Vérifiez toujours votre moyenne : elle doit être entre la plus petite et la plus grande valeur. Pour retrouver une valeur manquante, raisonnez sur la somme : somme = moyenne × nombre de valeurs.",
        },
      ],
    },

    /* ================================================================== */
    /* AIRES, SOLIDES ET VOLUMES                                            */
    /* ================================================================== */
    {
      id: 'aires-volumes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'aires-figures',
          title: 'Aire du parallélogramme, du triangle et du disque',
          minutes: 35,
          objectives: [
            "Identifier une base et la hauteur relative à cette base dans un parallélogramme ou un triangle.",
            "Calculer l'aire d'un parallélogramme, d'un triangle et d'un disque avec la formule adaptée.",
            "Donner la valeur exacte et une valeur approchée d'une aire qui fait intervenir π.",
            "Calculer l'aire d'une figure composée en la découpant en figures simples.",
          ],
          course: [
            {
              heading: "Rappels : aire et unités d'aire",
              paragraphs: [
                "L'aire d'une figure est la mesure de la surface qu'elle occupe. On l'exprime avec une unité d'aire : le cm² est l'aire d'un carré de 1 cm de côté, le m² celle d'un carré de 1 m de côté. Il ne faut pas confondre l'aire avec le périmètre, qui est la longueur du contour et s'exprime en cm ou en m.",
                "Vous connaissez déjà l'aire du rectangle, longueur × largeur, et celle du carré, côté × côté. Pour convertir, on retient que 1 m² = 100 dm² et 1 dm² = 100 cm² : on passe d'une unité d'aire à la suivante en multipliant ou en divisant par 100.",
              ],
            },
            {
              heading: "L'aire du parallélogramme",
              paragraphs: [
                "Dans un parallélogramme, on choisit un côté, appelé base. La hauteur relative à cette base est la longueur d'un segment perpendiculaire à la base, qui va de la base jusqu'au côté opposé. Ce n'est pas la longueur du côté penché : la hauteur se mesure toujours avec l'équerre.",
                "Si l'on découpe le triangle situé d'un côté du parallélogramme et qu'on le recolle de l'autre côté, on obtient un rectangle qui a la même base et la même hauteur. Le parallélogramme et ce rectangle ont donc la même aire : base × hauteur.",
                "Par exemple, un parallélogramme de base 7 cm et de hauteur 4 cm a une aire de 7 × 4 = 28 cm², même si son côté penché mesure 5 cm.",
              ],
              box: { label: "Formule", text: "Aire du parallélogramme = base × hauteur relative à cette base (A = b × h)." },
            },
            {
              heading: "L'aire du triangle",
              paragraphs: [
                "Dans un triangle, la hauteur relative à une base est le segment perpendiculaire à cette base qui part du sommet opposé. Dans un triangle qui a un angle obtus, la hauteur peut tomber à l'extérieur du triangle : on prolonge alors la base en pointillés pour la tracer.",
                "Deux triangles identiques, placés tête-bêche, forment un parallélogramme de même base et de même hauteur. L'aire du triangle est donc la moitié de celle du parallélogramme : base × hauteur ÷ 2.",
                "Dans un triangle rectangle, les deux côtés de l'angle droit sont perpendiculaires : l'un sert de base, l'autre de hauteur. Un triangle rectangle dont les côtés de l'angle droit mesurent 3 cm et 4 cm a une aire de 3 × 4 ÷ 2 = 6 cm².",
              ],
              box: { label: "Formule", text: "Aire du triangle = base × hauteur relative à cette base ÷ 2 (A = b × h ÷ 2)." },
            },
            {
              heading: "L'aire du disque",
              paragraphs: [
                "Le disque de centre O et de rayon r est la surface située à l'intérieur du cercle. Son aire est égale à π × r × r, c'est-à-dire π × r². Le nombre π (pi) vaut environ 3,14 ; ce n'est pas un nombre décimal, on utilise donc la touche π de la calculatrice ou une valeur approchée.",
                "Pour un disque de rayon 3 cm, l'aire est π × 3² = 9π cm². C'est la valeur exacte. Avec la calculatrice, 9π ≈ 28,27 cm² : c'est une valeur approchée au centième.",
                "Attention à deux pièges : si l'énoncé donne le diamètre, il faut d'abord le diviser par 2 pour avoir le rayon ; et il ne faut pas confondre l'aire du disque, π × r², avec la longueur du cercle, 2 × π × r.",
              ],
              box: { label: "Formule", text: "Aire du disque de rayon r = π × r × r = π × r². Longueur du cercle = 2 × π × r." },
            },
          ],
          keyPoints: [
            "Parallélogramme : A = base × hauteur.",
            "Triangle : A = base × hauteur ÷ 2.",
            "Disque : A = π × r² ; si l'on connaît le diamètre, on le divise d'abord par 2.",
            "La hauteur est toujours perpendiculaire à la base ; ce n'est pas le côté penché.",
            "Une aire s'exprime en unités d'aire (cm², m²) ; 1 m² = 100 dm² = 10 000 cm².",
            "Valeur exacte : 9π cm² ; valeur approchée : environ 28,27 cm².",
          ],
          example: {
            statement: "Un triangle ABC a une base [BC] de 8 cm. La hauteur issue de A mesure 5 cm. Calculez son aire.",
            solution: [
              "On utilise la formule de l'aire du triangle : A = base × hauteur ÷ 2.",
              "La base est BC = 8 cm et la hauteur relative à [BC] est 5 cm.",
              "A = 8 × 5 ÷ 2 = 40 ÷ 2 = 20.",
              "L'aire du triangle ABC est 20 cm².",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez l'aire de chaque figure. a) Un parallélogramme de base 7 cm et de hauteur 4 cm. b) Un triangle de base 6 cm et de hauteur 3,5 cm. c) Un disque de rayon 3 cm (valeur exacte, puis arrondie au centième).",
              hint: "Choisissez la bonne formule pour chaque figure. Pour le disque, r² = r × r.",
              solution: [
                "a) A = 7 × 4 = 28 cm².",
                "b) A = 6 × 3,5 ÷ 2 = 21 ÷ 2 = 10,5 cm².",
                "c) A = π × 3² = π × 9 = 9π cm².",
                "Avec la calculatrice, 9π ≈ 28,27 cm².",
              ],
            },
            {
              level: 2,
              statement: "a) Un disque a un diamètre de 10 cm. Calculez son aire, arrondie au centième. b) Un parallélogramme ABCD a pour côtés AB = 6 cm et AD = 4 cm. La hauteur relative à la base [AB] mesure 3 cm. Calculez son aire, puis la hauteur relative à la base [AD].",
              hint: "a) Le rayon est la moitié du diamètre. b) L'aire ne change pas quand on change de base : elle vaut aussi AD × (hauteur relative à [AD]).",
              solution: [
                "a) Le rayon est 10 ÷ 2 = 5 cm. A = π × 5² = 25π ≈ 78,54 cm².",
                "b) Avec la base [AB] : A = 6 × 3 = 18 cm².",
                "Avec la base [AD] : A = 4 × h, où h est la hauteur relative à [AD]. Donc 4 × h = 18.",
                "h = 18 ÷ 4 = 4,5 cm.",
                "L'aire est 18 cm² et la hauteur relative à [AD] mesure 4,5 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : un jardin a la forme d'un rectangle de 10 m sur 6 m, prolongé sur l'un de ses petits côtés par un demi-disque de 6 m de diamètre. a) Calculez l'aire du jardin, arrondie au centième. b) Il faut 1 kg de graines de gazon pour 25 m². Les graines sont vendues par sacs de 1 kg. Combien de sacs faut-il acheter ?",
              hint: "Découpez le jardin en un rectangle et un demi-disque. L'aire d'un demi-disque est la moitié de π × r².",
              solution: [
                "a) Aire du rectangle : 10 × 6 = 60 m².",
                "Le demi-disque a un diamètre de 6 m, donc un rayon de 3 m. Aire du disque entier : π × 3² = 9π m². Aire du demi-disque : 9π ÷ 2 = 4,5π ≈ 14,14 m².",
                "Aire du jardin : 60 + 4,5π ≈ 60 + 14,14 = 74,14 m².",
                "b) Masse de graines nécessaire : 74,14 ÷ 25 ≈ 2,97 kg.",
                "2 sacs ne suffisent pas (2 kg couvrent seulement 50 m²). Il faut acheter 3 sacs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque grandeur à sa formule.",
            pairs: [
              { left: "Aire du rectangle", right: "L × l" },
              { left: "Aire du carré", right: "c × c" },
              { left: "Aire du parallélogramme", right: "b × h" },
              { left: "Aire du triangle", right: "b × h ÷ 2" },
              { left: "Aire du disque", right: "π × r × r" },
              { left: "Longueur du cercle", right: "2 × π × r" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'aire d'un triangle de base 10 cm et de hauteur 6 cm ?",
              options: ["60 cm²", "16 cm²", "30 cm²", "32 cm²"],
              answer: 2,
              why: "A = 10 × 6 ÷ 2 = 30 cm². Le résultat 60 oublie la division par 2.",
            },
            {
              q: "Un parallélogramme a une base de 9 cm, une hauteur de 5 cm et un côté penché de 6 cm. Son aire est :",
              options: ["45 cm²", "54 cm²", "30 cm²"],
              answer: 0,
              why: "On utilise la hauteur, perpendiculaire à la base : 9 × 5 = 45 cm². Le côté penché ne sert pas.",
            },
            {
              q: "L'aire d'un disque de rayon 4 cm vaut :",
              options: ["8π cm²", "4π cm²", "64π cm²", "16π cm²"],
              answer: 3,
              why: "A = π × 4² = 16π cm². Le résultat 8π est la longueur du cercle (en cm), et 64π vient de l'erreur qui consiste à utiliser le diamètre, 8 cm, à la place du rayon.",
            },
            {
              q: "Un disque a un diamètre de 6 m. Son aire exacte est :",
              options: ["36π m²", "9π m²", "6π m²"],
              answer: 1,
              why: "Le rayon est 6 ÷ 2 = 3 m, donc A = π × 3² = 9π m².",
            },
            {
              q: "Combien de cm² y a-t-il dans 1 m² ?",
              options: ["100", "1 000", "10 000", "1 000 000"],
              answer: 2,
              why: "1 m² = 100 dm² et 1 dm² = 100 cm², donc 1 m² = 100 × 100 = 10 000 cm².",
            },
          ],
          trap: "Utiliser la longueur du côté penché au lieu de la hauteur, ou oublier de diviser par 2 pour un triangle. Pour le disque, l'erreur fréquente est de prendre le diamètre à la place du rayon.",
          method: "Avant de calculer, repassez en couleur la base et la hauteur sur la figure, et vérifiez avec l'équerre qu'elles sont perpendiculaires. Écrivez ensuite la formule en toutes lettres, puis remplacez par les nombres.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'prismes-cylindres',
          title: 'Prismes droits et cylindres : représentations et patrons',
          minutes: 30,
          objectives: [
            "Reconnaître un prisme droit et un cylindre, et nommer leurs éléments (bases, faces latérales, arêtes, hauteur).",
            "Représenter un prisme droit ou un cylindre en perspective cavalière.",
            "Construire et compléter le patron d'un prisme droit ou d'un cylindre.",
          ],
          course: [
            {
              heading: "Le prisme droit",
              paragraphs: [
                "Un prisme droit est un solide qui a deux faces parallèles et superposables, appelées les bases, qui sont des polygones. Ses autres faces, les faces latérales, sont des rectangles perpendiculaires aux bases. La hauteur du prisme est la distance entre les deux bases : c'est la longueur d'une arête latérale.",
                "On nomme un prisme d'après la forme de sa base : prisme à base triangulaire, à base pentagonale, à base hexagonale... Le pavé droit est un prisme droit dont les bases sont des rectangles, et le cube en est un cas particulier. Une boîte de chocolats à section triangulaire ou un crayon à six pans ont la forme de prismes droits.",
                "Si la base a n côtés, le prisme a n faces latérales, donc n + 2 faces en tout. Il a 2n sommets (n sur chaque base) et 3n arêtes (n sur chaque base et n arêtes latérales). Par exemple, un prisme à base triangulaire a 5 faces, 6 sommets et 9 arêtes.",
              ],
              box: { label: "Définition", text: "Un prisme droit a deux bases polygonales parallèles et superposables ; ses faces latérales sont des rectangles. Sa hauteur est la longueur d'une arête latérale." },
            },
            {
              heading: "Le cylindre",
              paragraphs: [
                "Un cylindre (de révolution) est un solide qui a deux bases en forme de disques de même rayon, parallèles et superposables. Il est fermé par une surface courbe, la surface latérale. Sa hauteur est la distance entre les deux bases. Une boîte de conserve ou un rouleau de papier ont la forme d'un cylindre.",
                "On peut obtenir un cylindre en faisant tourner un rectangle autour de l'un de ses côtés : c'est pour cela qu'on parle de cylindre de révolution. Le cylindre n'a ni sommet ni arête au sens du polyèdre : ce n'est pas un prisme.",
              ],
            },
            {
              heading: "Représenter en perspective cavalière",
              paragraphs: [
                "La perspective cavalière permet de dessiner un solide sur une feuille plane. Les faces placées de face sont dessinées en vraie grandeur. Les arêtes qui partent vers l'arrière sont dessinées en biais et raccourcies. Des arêtes parallèles dans la réalité restent parallèles sur le dessin.",
                "Les arêtes cachées, que l'on ne verrait pas si l'on regardait le solide, sont tracées en pointillés. Pour un cylindre, les bases sont des disques vus de biais : on les dessine comme des ovales, et l'on trace en pointillés la moitié cachée de la base arrière.",
              ],
              box: { label: "À retenir", text: "Perspective cavalière : face avant en vraie grandeur, arêtes parallèles restées parallèles, arêtes cachées en pointillés." },
            },
            {
              heading: "Les patrons",
              paragraphs: [
                "Un patron est une figure plane qui, une fois découpée et pliée, permet de fabriquer le solide sans chevauchement ni trou. Le patron d'un prisme droit est formé des deux bases et de toutes les faces latérales rectangulaires. Chaque rectangle a pour longueur un côté de la base et pour largeur la hauteur du prisme.",
                "Le patron d'un cylindre est formé de deux disques et d'un rectangle. La hauteur du rectangle est la hauteur du cylindre. L'autre dimension du rectangle doit faire exactement le tour du disque : elle est égale à la longueur du cercle de base, 2 × π × r.",
              ],
              box: { label: "Propriété", text: "Dans le patron d'un cylindre de rayon r et de hauteur h, la surface latérale est un rectangle de dimensions h et 2 × π × r." },
            },
          ],
          keyPoints: [
            "Prisme droit : deux bases polygonales parallèles et superposables, des faces latérales rectangulaires.",
            "Base à n côtés : n + 2 faces, 2n sommets, 3n arêtes.",
            "Cylindre : deux bases en disques de même rayon et une surface latérale courbe.",
            "En perspective cavalière, les arêtes cachées sont en pointillés.",
            "Patron du cylindre : deux disques et un rectangle de dimensions h et 2 × π × r.",
          ],
          example: {
            statement: "On veut construire le patron d'un cylindre de rayon 2 cm et de hauteur 5 cm. Donnez les dimensions du rectangle de la surface latérale, arrondies au dixième.",
            solution: [
              "Le patron est formé de deux disques de rayon 2 cm et d'un rectangle.",
              "Une dimension du rectangle est la hauteur du cylindre : 5 cm.",
              "L'autre dimension est la longueur du cercle de base : 2 × π × 2 = 4π cm.",
              "Avec la calculatrice, 4π ≈ 12,6 cm.",
              "Le rectangle mesure 5 cm sur environ 12,6 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un prisme droit a pour bases des pentagones. Combien a-t-il de faces latérales, de faces en tout, de sommets et d'arêtes ?",
              hint: "Un pentagone a 5 côtés. Utilisez n = 5 dans les formules n + 2, 2n et 3n, ou comptez sur un dessin.",
              solution: [
                "La base a 5 côtés, donc il y a 5 faces latérales rectangulaires.",
                "Faces en tout : 5 + 2 = 7 (les 5 faces latérales et les 2 bases).",
                "Sommets : 5 sur chaque base, soit 2 × 5 = 10.",
                "Arêtes : 5 sur chaque base et 5 arêtes latérales, soit 3 × 5 = 15.",
                "Le prisme a 7 faces, 10 sommets et 15 arêtes.",
              ],
            },
            {
              level: 2,
              statement: "Un prisme droit a pour bases des triangles rectangles dont les côtés mesurent 3 cm, 4 cm et 5 cm. Sa hauteur est 6 cm. a) Décrivez les faces de son patron et leurs dimensions. b) Dans le patron, on place les trois faces latérales côte à côte : quelles sont les dimensions du grand rectangle obtenu ? c) Calculez l'aire totale du patron.",
              hint: "Chaque face latérale a pour dimensions un côté du triangle et la hauteur du prisme. Le triangle est rectangle : ses côtés de l'angle droit mesurent 3 cm et 4 cm.",
              solution: [
                "a) Le patron comprend deux triangles rectangles de côtés 3 cm, 4 cm et 5 cm, et trois rectangles : 3 cm × 6 cm, 4 cm × 6 cm et 5 cm × 6 cm.",
                "b) Côte à côte, les trois rectangles forment un grand rectangle de 6 cm sur 3 + 4 + 5 = 12 cm.",
                "c) Aire des faces latérales : 12 × 6 = 72 cm².",
                "Aire d'une base : 3 × 4 ÷ 2 = 6 cm², donc 12 cm² pour les deux bases.",
                "Aire totale du patron : 72 + 12 = 84 cm².",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Une boîte de conserve cylindrique a un rayon de 4 cm et une hauteur de 11 cm. On veut fabriquer l'étiquette qui fait exactement le tour de la boîte, sur toute sa hauteur. Donnez ses dimensions et son aire (valeur exacte, puis arrondie au dixième). b) Un prisme droit a 12 sommets. Quelle est la forme de sa base ? Combien a-t-il de faces et d'arêtes ?",
              hint: "a) L'étiquette est la surface latérale déroulée : un rectangle. b) Un prisme dont la base a n côtés a 2n sommets.",
              solution: [
                "a) L'étiquette est un rectangle. Sa hauteur est 11 cm. Sa longueur est la longueur du cercle de base : 2 × π × 4 = 8π ≈ 25,1 cm.",
                "Aire de l'étiquette : 11 × 8π = 88π cm², soit environ 276,5 cm².",
                "b) Le prisme a 2n = 12 sommets, donc n = 6 : sa base est un hexagone.",
                "Faces : 6 faces latérales + 2 bases = 8 faces. Arêtes : 3 × 6 = 18 arêtes.",
                "Le prisme a une base hexagonale, 8 faces et 18 arêtes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Prismes et cylindres.",
            statements: [
              { text: "Les faces latérales d'un prisme droit sont des rectangles.", true: true, why: "C'est la définition : les faces latérales sont des rectangles perpendiculaires aux bases." },
              { text: "Un cube est un prisme droit.", true: true, why: "Ses bases sont des carrés, parallèles et superposables, et ses faces latérales sont des carrés, qui sont des rectangles particuliers." },
              { text: "Un prisme à base triangulaire a 6 faces.", true: false, why: "Il a 3 faces latérales et 2 bases, soit 5 faces." },
              { text: "Un cylindre est un prisme dont la base est un disque.", true: false, why: "Un prisme a des bases polygonales. Le disque n'est pas un polygone, donc le cylindre n'est pas un prisme." },
              { text: "Dans le patron d'un cylindre, la longueur du rectangle est égale au rayon.", true: false, why: "Elle est égale à la longueur du cercle de base, 2 × π × r, pour faire exactement le tour du disque." },
              { text: "En perspective cavalière, les arêtes cachées sont tracées en pointillés.", true: true, why: "C'est la convention qui permet de voir la forme du solide tout en sachant ce qui est caché." },
            ],
          },
          quiz: [
            {
              q: "Combien d'arêtes a un prisme droit à base hexagonale ?",
              options: ["12", "18", "8", "6"],
              answer: 1,
              why: "La base a 6 côtés : 6 arêtes sur chaque base et 6 arêtes latérales, soit 3 × 6 = 18.",
            },
            {
              q: "Quelle est la forme des bases d'un cylindre ?",
              options: ["Des rectangles", "Des triangles", "Des disques"],
              answer: 2,
              why: "Le cylindre a deux bases en forme de disques de même rayon.",
            },
            {
              q: "Dans le patron d'un cylindre de rayon 3 cm et de hauteur 10 cm, le rectangle mesure :",
              options: ["10 cm sur 6π cm", "10 cm sur 3 cm", "3 cm sur 6π cm", "10 cm sur 9π cm"],
              answer: 0,
              why: "Une dimension est la hauteur (10 cm), l'autre la longueur du cercle : 2 × π × 3 = 6π cm.",
            },
            {
              q: "La hauteur d'un prisme droit est :",
              options: ["la longueur du plus long côté de la base", "la longueur d'une arête latérale", "le périmètre de la base"],
              answer: 1,
              why: "La hauteur est la distance entre les deux bases, égale à la longueur d'une arête latérale.",
            },
            {
              q: "Combien de faces a un prisme droit dont la base a 7 côtés ?",
              options: ["7", "14", "21", "9"],
              answer: 3,
              why: "7 faces latérales et 2 bases : 7 + 2 = 9 faces.",
            },
          ],
          trap: "Dans le patron d'un cylindre, donner au rectangle une longueur égale au diamètre ou au rayon : il doit faire le tour complet du disque, donc mesurer 2 × π × r. Autre piège : oublier une des deux bases dans un patron.",
          method: "Pour vérifier un patron, imaginez le pliage face par face, ou découpez-le vraiment dans une feuille. Pour compter faces, sommets et arêtes, partez du nombre de côtés de la base et vérifiez sur un dessin en perspective.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'volumes',
          title: 'Calculer un volume, convertir les unités',
          minutes: 35,
          objectives: [
            "Calculer le volume d'un pavé droit, d'un prisme droit et d'un cylindre.",
            "Convertir des unités de volume (m³, dm³, cm³) et de contenance (L, mL).",
            "Faire le lien entre volume et contenance : 1 dm³ = 1 L.",
            "Résoudre un problème concret de volume en choisissant l'unité adaptée.",
          ],
          course: [
            {
              heading: "Les unités de volume",
              paragraphs: [
                "Le volume d'un solide est la mesure de l'espace qu'il occupe. L'unité de base est le volume d'un cube : le cm³ est le volume d'un cube de 1 cm d'arête, le dm³ celui d'un cube de 1 dm d'arête, le m³ celui d'un cube de 1 m d'arête.",
                "Un cube de 1 dm d'arête, c'est-à-dire 10 cm, contient 10 × 10 × 10 = 1 000 petits cubes de 1 cm³. Donc 1 dm³ = 1 000 cm³. De même, 1 m³ = 1 000 dm³. Pour passer d'une unité de volume à la suivante, on multiplie ou on divise par 1 000. Dans un tableau de conversion, chaque unité occupe trois colonnes.",
              ],
              box: { label: "À retenir", text: "1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³ ; 1 cm³ = 1 000 mm³." },
            },
            {
              heading: "Volume et contenance",
              paragraphs: [
                "La contenance d'un récipient est le volume de liquide qu'il peut contenir. On l'exprime souvent en litres (L), en centilitres (cL) ou en millilitres (mL), avec 1 L = 100 cL = 1 000 mL.",
                "Le lien entre les deux systèmes d'unités est essentiel : 1 L = 1 dm³. Une brique de lait de 1 L remplit exactement un cube de 10 cm d'arête. On en déduit que 1 mL = 1 cm³ et que 1 m³ = 1 000 L.",
              ],
              box: { label: "Repère", text: "1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L." },
            },
            {
              heading: "Volume du prisme droit et du pavé droit",
              paragraphs: [
                "Imaginons un prisme droit rempli couche par couche de cubes de 1 cm³. Chaque couche de 1 cm d'épaisseur contient autant de cubes que l'aire de la base en cm². Le nombre de couches est égal à la hauteur. Le volume est donc l'aire de la base multipliée par la hauteur.",
                "Pour un pavé droit, la base est un rectangle : on retrouve la formule V = longueur × largeur × hauteur. Pour un prisme à base triangulaire, on calcule d'abord l'aire du triangle, puis on la multiplie par la hauteur du prisme.",
              ],
              box: { label: "Formule", text: "Volume d'un prisme droit = aire de la base × hauteur. Pavé droit : V = L × l × h." },
            },
            {
              heading: "Volume du cylindre",
              paragraphs: [
                "Le cylindre se remplit lui aussi couche par couche, et chaque couche a la forme de sa base, un disque. Son volume est donc, comme pour le prisme, l'aire de la base multipliée par la hauteur : V = π × r² × h.",
                "Pour une boîte cylindrique de rayon 3 cm et de hauteur 10 cm : V = π × 3² × 10 = 90π cm³, soit environ 282,7 cm³. Avant de calculer, on vérifie que toutes les longueurs sont dans la même unité.",
              ],
              box: { label: "Formule", text: "Volume d'un cylindre de rayon r et de hauteur h : V = π × r² × h." },
            },
          ],
          keyPoints: [
            "Prisme droit : V = aire de la base × hauteur ; pavé droit : V = L × l × h.",
            "Cylindre : V = π × r² × h.",
            "1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³ : on multiplie ou divise par 1 000.",
            "1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L.",
            "Toutes les longueurs doivent être dans la même unité avant le calcul.",
          ],
          example: {
            statement: "Un aquarium a la forme d'un pavé droit de 50 cm de longueur, 30 cm de largeur et 40 cm de hauteur. Quelle est sa contenance en litres ?",
            solution: [
              "Le volume d'un pavé droit est V = L × l × h.",
              "V = 50 × 30 × 40 = 1 500 × 40 = 60 000 cm³.",
              "On convertit : 1 dm³ = 1 000 cm³, donc 60 000 cm³ = 60 dm³.",
              "Comme 1 dm³ = 1 L, on obtient 60 L.",
              "L'aquarium contient 60 litres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent 3 cm et 4 cm. Sa hauteur est 10 cm. Calculez son volume. b) Convertissez : 2,5 L en cm³ ; 750 mL en dm³ ; 3 m³ en L.",
              hint: "a) Calculez d'abord l'aire de la base triangulaire. b) Utilisez 1 L = 1 dm³ = 1 000 cm³ et 1 mL = 1 cm³.",
              solution: [
                "a) Aire de la base : 3 × 4 ÷ 2 = 6 cm².",
                "Volume : 6 × 10 = 60 cm³.",
                "b) 2,5 L = 2,5 dm³ = 2,5 × 1 000 cm³ = 2 500 cm³.",
                "750 mL = 750 cm³ = 750 ÷ 1 000 dm³ = 0,75 dm³.",
                "3 m³ = 3 × 1 000 L = 3 000 L.",
              ],
            },
            {
              level: 2,
              statement: "Un vase cylindrique a un rayon intérieur de 5 cm et une hauteur intérieure de 20 cm. a) Calculez son volume exact, puis arrondi au cm³. b) Peut-on y verser le contenu d'une bouteille de 1,5 L sans qu'il déborde ?",
              hint: "V = π × r² × h. Pour comparer, convertissez le volume en litres : 1 000 cm³ = 1 L.",
              solution: [
                "a) V = π × 5² × 20 = π × 25 × 20 = 500π cm³.",
                "Avec la calculatrice, 500π ≈ 1 571 cm³.",
                "b) 1 571 cm³ ≈ 1,571 dm³, soit environ 1,57 L.",
                "Comme 1,57 L est plus grand que 1,5 L, on peut verser toute la bouteille sans débordement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : une piscine a la forme d'un pavé droit de 8 m de longueur, 4 m de largeur et 1,5 m de profondeur. Une pompe la remplit au débit de 2 000 litres par heure. a) Quel est le volume de la piscine en m³, puis en litres ? b) Combien de temps faut-il pour la remplir entièrement ? c) On ne la remplit que jusqu'à 10 cm sous le bord. Combien de temps faut-il alors, en heures et minutes ?",
              hint: "1 m³ = 1 000 L. Pour c), la hauteur d'eau est 1,5 m - 0,1 m. Pour convertir une partie décimale d'heure en minutes, multipliez par 60.",
              solution: [
                "a) V = 8 × 4 × 1,5 = 32 × 1,5 = 48 m³, soit 48 × 1 000 = 48 000 L.",
                "b) Durée : 48 000 ÷ 2 000 = 24 heures.",
                "c) La hauteur d'eau est 1,5 - 0,1 = 1,4 m. Volume d'eau : 8 × 4 × 1,4 = 32 × 1,4 = 44,8 m³, soit 44 800 L.",
                "Durée : 44 800 ÷ 2 000 = 22,4 heures.",
                "0,4 heure = 0,4 × 60 = 24 minutes. Il faut 22 heures et 24 minutes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Un seau cylindrique a un rayon de 10 cm et une hauteur de 20 cm. Remettez dans l'ordre les étapes pour trouver sa contenance en litres.",
            items: [
              "Relever les données : r = 10 cm et h = 20 cm",
              "Calculer l'aire de la base : π × 10² = 100π cm²",
              "Multiplier par la hauteur : 100π × 20 = 2 000π cm³",
              "Donner une valeur approchée : environ 6 283 cm³",
              "Convertir : 6 283 cm³ ≈ 6,3 dm³, soit 6,3 L",
              "Conclure : le seau contient environ 6,3 L",
            ],
          },
          quiz: [
            {
              q: "Combien de cm³ y a-t-il dans 1 dm³ ?",
              options: ["10", "100", "1 000", "10 000"],
              answer: 2,
              why: "Un cube de 10 cm d'arête contient 10 × 10 × 10 = 1 000 cubes de 1 cm³.",
            },
            {
              q: "1 L est égal à :",
              options: ["1 dm³", "1 cm³", "1 m³"],
              answer: 0,
              why: "Par définition, 1 litre est le volume d'un cube de 1 dm d'arête : 1 L = 1 dm³.",
            },
            {
              q: "Quel est le volume d'un pavé droit de 5 cm sur 4 cm sur 3 cm ?",
              options: ["12 cm³", "60 cm²", "47 cm³", "60 cm³"],
              answer: 3,
              why: "V = 5 × 4 × 3 = 60 cm³. Un volume s'exprime en unités de volume, pas en cm².",
            },
            {
              q: "Le volume d'un cylindre de rayon 2 cm et de hauteur 5 cm est :",
              options: ["10π cm³", "20π cm³", "4π cm³"],
              answer: 1,
              why: "V = π × 2² × 5 = π × 4 × 5 = 20π cm³.",
            },
            {
              q: "Combien de litres contient un bassin de 2 m³ ?",
              options: ["20 L", "200 L", "2 000 L", "20 000 L"],
              answer: 2,
              why: "1 m³ = 1 000 L, donc 2 m³ = 2 000 L.",
            },
          ],
          trap: "Convertir les volumes en multipliant par 10 ou par 100, comme pour les longueurs ou les aires : entre deux unités de volume voisines, le rapport est 1 000. Autre piège : calculer avec des longueurs exprimées dans des unités différentes.",
          method: "Commencez par convertir toutes les longueurs dans la même unité, puis appliquez la formule. Pour passer en litres, convertissez d'abord en dm³ : c'est le pont entre volumes et contenances.",
        },
      ],
    },

    /* ================================================================== */
    /* PREMIÈRES PROBABILITÉS                                               */
    /* ================================================================== */
    {
      id: 'probabilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vocabulaire-probabilites',
          title: 'Expérience aléatoire, issues et événements',
          minutes: 25,
          objectives: [
            "Reconnaître une expérience aléatoire.",
            "Déterminer toutes les issues d'une expérience aléatoire simple.",
            "Décrire un événement et citer les issues qui le réalisent.",
            "Identifier un événement certain, impossible ou élémentaire, et situer des événements sur une échelle de probabilité de 0 à 1.",
          ],
          course: [
            {
              heading: "L'expérience aléatoire",
              paragraphs: [
                "Une expérience est dite aléatoire lorsque l'on connaît tous les résultats possibles, mais que l'on ne peut pas prévoir lequel va se produire. Lancer un dé, lancer une pièce, tirer une carte au hasard dans un paquet ou faire tourner une roue de loterie sont des expériences aléatoires.",
                "Au contraire, calculer 5 × 8 ou lâcher une balle au-dessus du sol ne sont pas des expériences aléatoires : on sait à l'avance ce qui va se passer (on obtient 40, la balle tombe). Le mot « aléatoire » vient du latin alea, qui signifie le jeu de dés.",
              ],
              box: { label: "Définition", text: "Une expérience aléatoire est une expérience dont on connaît tous les résultats possibles, sans pouvoir prévoir lequel se produira." },
            },
            {
              heading: "Les issues",
              paragraphs: [
                "Les résultats possibles d'une expérience aléatoire s'appellent les issues. Quand on lance un dé à six faces, il y a 6 issues : 1, 2, 3, 4, 5 et 6. Quand on lance une pièce, il y a 2 issues : pile et face.",
                "Il faut bien lire l'énoncé pour savoir ce que l'on observe. Si l'on tire une boule dans un sac qui contient 3 boules rouges et 2 boules bleues, et que l'on note sa couleur, il n'y a que 2 issues : rouge et bleu.",
              ],
            },
            {
              heading: "Les événements",
              paragraphs: [
                "Un événement est une condition qui, à la fin de l'expérience, est réalisée ou non. Il est réalisé par une ou plusieurs issues. Avec un dé, l'événement « obtenir un nombre pair » est réalisé par les issues 2, 4 et 6. Si l'on obtient 3, il n'est pas réalisé.",
                "Un événement réalisé par une seule issue est un événement élémentaire, comme « obtenir 5 ». Un événement réalisé par toutes les issues est un événement certain, comme « obtenir un nombre inférieur à 7 ». Un événement qui n'est réalisé par aucune issue est un événement impossible, comme « obtenir 8 ».",
              ],
              box: { label: "Vocabulaire", text: "Événement élémentaire : une seule issue. Événement certain : toujours réalisé. Événement impossible : jamais réalisé." },
            },
            {
              heading: "L'échelle des probabilités",
              paragraphs: [
                "La probabilité d'un événement est un nombre compris entre 0 et 1 qui mesure ses chances de se réaliser. Un événement impossible a une probabilité de 0, un événement certain une probabilité de 1. Un événement qui a « une chance sur deux » de se réaliser, comme obtenir pile avec une pièce équilibrée, a une probabilité de 1/2, c'est-à-dire 0,5.",
                "On peut placer des événements sur une échelle allant de 0 à 1 : plus un événement est proche de 1, plus il a de chances de se réaliser. Avec un dé équilibré, « obtenir 6 » est peu probable, « obtenir un nombre pair » a une chance sur deux, et « obtenir un nombre plus grand que 1 » est très probable.",
              ],
              box: { label: "Repère", text: "Impossible : 0. Une chance sur deux : 0,5. Certain : 1. Une probabilité n'est jamais négative et ne dépasse jamais 1." },
            },
          ],
          keyPoints: [
            "Expérience aléatoire : on connaît les résultats possibles, sans pouvoir prévoir lequel se produira.",
            "Les issues sont les résultats possibles : 6 pour un dé, 2 pour une pièce.",
            "Un événement est réalisé par une ou plusieurs issues.",
            "Élémentaire : une issue ; certain : toutes les issues ; impossible : aucune issue.",
            "Une probabilité est entre 0 (impossible) et 1 (certain).",
          ],
          example: {
            statement: "On lance un dé équilibré à six faces. a) Quelles sont les issues ? b) Quelles issues réalisent l'événement « obtenir un multiple de 3 » ? c) Comment qualifier les événements « obtenir 7 » et « obtenir un nombre inférieur à 7 » ?",
            solution: [
              "a) Les issues sont 1, 2, 3, 4, 5 et 6 : il y en a 6.",
              "b) Parmi ces nombres, les multiples de 3 sont 3 et 6. L'événement est réalisé par les issues 3 et 6.",
              "c) « Obtenir 7 » n'est réalisé par aucune issue : c'est un événement impossible, de probabilité 0.",
              "« Obtenir un nombre inférieur à 7 » est réalisé par toutes les issues : c'est un événement certain, de probabilité 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces expériences, lesquelles sont aléatoires ? Justifiez. a) Lancer une pièce de monnaie. b) Mesurer la longueur d'une table. c) Tirer au hasard une carte dans un jeu de 32 cartes. d) Calculer 7 × 9. e) Tirer au sort le nom d'un élève de la classe.",
              hint: "Demandez-vous à chaque fois : connaît-on le résultat à l'avance ?",
              solution: [
                "a) Aléatoire : on sait que l'on obtiendra pile ou face, mais on ne peut pas prévoir lequel.",
                "b) Pas aléatoire : la longueur de la table ne change pas d'une mesure à l'autre.",
                "c) Aléatoire : on connaît les 32 cartes possibles, mais pas celle qui sera tirée.",
                "d) Pas aléatoire : le résultat est toujours 63.",
                "e) Aléatoire : on connaît la liste des élèves, mais pas le nom qui sera tiré.",
                "Les expériences aléatoires sont a), c) et e).",
              ],
            },
            {
              level: 2,
              statement: "Un sac contient dix jetons numérotés de 1 à 10. On tire un jeton au hasard et on lit son numéro. a) Combien y a-t-il d'issues ? b) Citez les issues qui réalisent l'événement « obtenir un nombre pair ». c) Même question pour « obtenir un multiple de 4 ». d) Donnez un exemple d'événement impossible, d'événement certain et d'événement élémentaire.",
              hint: "Écrivez la liste complète des issues, puis entourez celles qui conviennent pour chaque événement.",
              solution: [
                "a) Les issues sont 1, 2, 3, 4, 5, 6, 7, 8, 9 et 10 : il y en a 10.",
                "b) « Obtenir un nombre pair » : 2, 4, 6, 8 et 10.",
                "c) « Obtenir un multiple de 4 » : 4 et 8.",
                "d) Impossible : « obtenir 11 » (aucun jeton ne porte ce numéro).",
                "Certain : « obtenir un nombre compris entre 1 et 10 » (toutes les issues le réalisent).",
                "Élémentaire : « obtenir 7 » (une seule issue).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une roue est partagée en 8 secteurs de même taille, numérotés de 1 à 8. On la fait tourner et on lit le numéro indiqué par la flèche. On considère les événements A : « obtenir un multiple de 3 » ; B : « obtenir un nombre premier » ; C : « obtenir un nombre supérieur à 8 » ; D : « obtenir un nombre inférieur à 9 » ; E : « obtenir 6 ». a) Citez les issues qui réalisent chaque événement. b) Rangez ces événements du moins probable au plus probable.",
              hint: "Un nombre premier a exactement deux diviseurs : 1 et lui-même. Comme les secteurs ont la même taille, un événement est d'autant plus probable qu'il est réalisé par plus d'issues.",
              solution: [
                "a) A : 3 et 6 (2 issues).",
                "B : 2, 3, 5 et 7 (4 issues). Le nombre 1 n'est pas premier, car il n'a qu'un seul diviseur.",
                "C : aucune issue, c'est un événement impossible.",
                "D : les 8 issues, c'est un événement certain.",
                "E : une seule issue, 6 : c'est un événement élémentaire.",
                "b) Les secteurs ont la même taille, donc on compare les nombres d'issues : 0 pour C, 1 pour E, 2 pour A, 4 pour B, 8 pour D.",
                "Du moins probable au plus probable : C, E, A, B, D.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Expérience aléatoire", right: "On connaît les résultats possibles sans pouvoir prévoir lequel se produira" },
              { left: "Issue", right: "Un résultat possible de l'expérience" },
              { left: "Événement", right: "Une condition réalisée par une ou plusieurs issues" },
              { left: "Événement élémentaire", right: "Un événement réalisé par une seule issue" },
              { left: "Événement certain", right: "Un événement réalisé par toutes les issues" },
              { left: "Événement impossible", right: "Un événement réalisé par aucune issue" },
            ],
          },
          quiz: [
            {
              q: "Combien d'issues a l'expérience « lancer un dé à six faces et lire le nombre obtenu » ?",
              options: ["1", "2", "3", "6"],
              answer: 3,
              why: "Les issues sont 1, 2, 3, 4, 5 et 6 : il y en a 6.",
            },
            {
              q: "Avec un dé à six faces, l'événement « obtenir 0 » est :",
              options: ["impossible", "certain", "élémentaire"],
              answer: 0,
              why: "Aucune face ne porte le nombre 0 : aucune issue ne réalise cet événement.",
            },
            {
              q: "Quelle expérience n'est PAS aléatoire ?",
              options: ["Lancer une pièce", "Tirer une carte au hasard", "Calculer 12 × 3", "Faire tourner une roue"],
              answer: 2,
              why: "Le résultat de 12 × 3 est toujours 36 : on le connaît à l'avance.",
            },
            {
              q: "Quelles issues réalisent « obtenir un nombre impair » avec un dé à six faces ?",
              options: ["2, 4 et 6", "1, 3 et 5", "1 et 3", "5 et 6"],
              answer: 1,
              why: "Les nombres impairs entre 1 et 6 sont 1, 3 et 5.",
            },
            {
              q: "Quelle valeur ne peut pas être une probabilité ?",
              options: ["0", "0,7", "1", "1,2"],
              answer: 3,
              why: "Une probabilité est toujours comprise entre 0 et 1. Le nombre 1,2 est plus grand que 1.",
            },
          ],
          trap: "Confondre une issue et un événement : « obtenir 4 » est une issue (et un événement élémentaire), tandis que « obtenir un nombre pair » est un événement réalisé par trois issues. Autre erreur : oublier des issues en les listant.",
          method: "Commencez toujours par écrire la liste complète des issues, sur une ligne ou dans un tableau. Ensuite, pour chaque événement, soulignez les issues qui le réalisent : vous saurez immédiatement s'il est élémentaire, certain ou impossible.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'calculer-probabilite',
          title: 'Calculer une probabilité dans une situation simple',
          minutes: 30,
          objectives: [
            "Reconnaître une situation d'équiprobabilité.",
            "Calculer la probabilité d'un événement en comptant les issues favorables.",
            "Exprimer une probabilité sous forme de fraction, de nombre décimal ou de pourcentage.",
            "Utiliser le fait que la somme des probabilités de toutes les issues vaut 1.",
          ],
          course: [
            {
              heading: "Les situations d'équiprobabilité",
              paragraphs: [
                "On parle d'équiprobabilité quand toutes les issues d'une expérience ont la même chance de se produire. C'est le cas quand on lance un dé équilibré (chaque face a la même chance), une pièce équilibrée, ou quand on tire au hasard une boule dans un sac où les boules sont indiscernables au toucher.",
                "Les mots « équilibré », « au hasard » ou « indiscernables » dans un énoncé signalent une situation d'équiprobabilité. Un dé truqué, au contraire, ne donne pas la même chance à toutes ses faces.",
              ],
            },
            {
              heading: "Calculer une probabilité",
              paragraphs: [
                "Dans une situation d'équiprobabilité, la probabilité d'un événement A, notée P(A), est le quotient du nombre d'issues qui réalisent A (les issues favorables) par le nombre total d'issues.",
                "Par exemple, avec un dé équilibré, l'événement « obtenir un nombre pair » est réalisé par 3 issues (2, 4 et 6) sur 6. Sa probabilité est 3/6, c'est-à-dire 1/2, ou 0,5, ou 50 %. On simplifie la fraction quand c'est possible.",
                "Si chaque issue a la même chance, la probabilité d'une issue est 1 divisé par le nombre d'issues : avec un dé, chaque face a une probabilité de 1/6.",
              ],
              box: { label: "Formule", text: "En situation d'équiprobabilité : P(A) = nombre d'issues favorables ÷ nombre total d'issues." },
            },
            {
              heading: "Les propriétés d'une probabilité",
              paragraphs: [
                "Une probabilité est toujours comprise entre 0 et 1. Elle vaut 0 pour un événement impossible et 1 pour un événement certain. On peut l'écrire sous forme de fraction (1/4), de nombre décimal (0,25) ou de pourcentage (25 %).",
                "La somme des probabilités de toutes les issues d'une expérience est égale à 1. Avec un dé équilibré : 1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6 = 6/6 = 1. Cette propriété permet de vérifier un calcul ou de trouver une probabilité manquante.",
              ],
              box: { label: "Propriété", text: "0 ≤ P(A) ≤ 1. La somme des probabilités de toutes les issues vaut 1." },
            },
            {
              heading: "Quand les issues ne sont pas équiprobables",
              paragraphs: [
                "Un sac contient 3 boules rouges et 2 boules bleues. Si l'on note la couleur, il y a 2 issues, rouge et bleu, mais elles n'ont pas la même chance : il y a plus de boules rouges. On ne peut donc pas dire que P(rouge) = 1/2.",
                "Pour calculer, on raisonne sur les boules, qui ont toutes la même chance d'être tirées : 3 boules sur 5 sont rouges, donc P(rouge) = 3/5 = 0,6, et P(bleu) = 2/5 = 0,4. On vérifie que 0,6 + 0,4 = 1. Si l'on répète l'expérience un très grand nombre de fois, en remettant la boule à chaque fois, on observe que la fréquence des boules rouges se rapproche de 0,6.",
              ],
            },
          ],
          keyPoints: [
            "Équiprobabilité : toutes les issues ont la même chance (dé équilibré, tirage au hasard...).",
            "P(A) = nombre d'issues favorables ÷ nombre total d'issues.",
            "Une probabilité est entre 0 et 1 ; on la simplifie et on peut l'écrire en décimal ou en pourcentage.",
            "La somme des probabilités de toutes les issues vaut 1.",
            "Si les issues n'ont pas la même chance, on compte les objets (les boules), pas les couleurs.",
          ],
          example: {
            statement: "On lance un dé équilibré à six faces. Calculez la probabilité de l'événement A : « obtenir un nombre supérieur ou égal à 5 ».",
            solution: [
              "Le dé est équilibré : on est dans une situation d'équiprobabilité.",
              "Il y a 6 issues : 1, 2, 3, 4, 5 et 6.",
              "Les issues favorables, supérieures ou égales à 5, sont 5 et 6 : il y en a 2.",
              "P(A) = 2/6 = 1/3.",
              "La probabilité d'obtenir un nombre supérieur ou égal à 5 est 1/3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un sac contient 4 boules rouges et 6 boules vertes, indiscernables au toucher. On tire une boule au hasard. Calculez la probabilité de tirer une boule verte, puis celle de tirer une boule rouge, sous forme de fraction simplifiée et de nombre décimal.",
              hint: "Il y a 10 boules en tout, et chacune a la même chance d'être tirée.",
              solution: [
                "Il y a 4 + 6 = 10 boules, toutes avec la même chance d'être tirées.",
                "P(verte) = 6/10 = 3/5 = 0,6.",
                "P(rouge) = 4/10 = 2/5 = 0,4.",
                "Vérification : 0,6 + 0,4 = 1.",
              ],
            },
            {
              level: 2,
              statement: "On tire au hasard une carte parmi 20 cartes numérotées de 1 à 20. Calculez la probabilité des événements suivants, sous forme de fraction simplifiée. A : « obtenir un multiple de 5 » ; B : « obtenir un multiple de 3 » ; C : « obtenir un nombre premier ».",
              hint: "Écrivez la liste des issues favorables pour chaque événement avant de compter.",
              solution: [
                "Il y a 20 issues équiprobables.",
                "A : les multiples de 5 sont 5, 10, 15 et 20, soit 4 issues. P(A) = 4/20 = 1/5.",
                "B : les multiples de 3 sont 3, 6, 9, 12, 15 et 18, soit 6 issues. P(B) = 6/20 = 3/10.",
                "C : les nombres premiers sont 2, 3, 5, 7, 11, 13, 17 et 19, soit 8 issues. P(C) = 8/20 = 2/5.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Une urne contient 3 boules rouges et 5 boules bleues. Quelle est la probabilité de tirer une boule rouge ? Combien de boules rouges faut-il ajouter pour que cette probabilité devienne 1/2 ? b) Une autre urne contient 5 boules rouges et des boules bleues. La probabilité de tirer une boule rouge est 1/3. Combien y a-t-il de boules bleues ?",
              hint: "a) Une probabilité de 1/2 signifie qu'il y a autant de boules rouges que de bleues. b) Les boules rouges représentent un tiers du total.",
              solution: [
                "a) Il y a 3 + 5 = 8 boules, donc P(rouge) = 3/8.",
                "Pour avoir P(rouge) = 1/2, il faut autant de boules rouges que de boules bleues, soit 5 rouges. Il faut ajouter 5 - 3 = 2 boules rouges.",
                "Vérification : 5 rouges sur 10 boules, 5/10 = 1/2.",
                "b) Les 5 boules rouges représentent 1/3 des boules, donc le nombre total de boules est 5 × 3 = 15.",
                "Il y a 15 - 5 = 10 boules bleues. Vérification : 5/15 = 1/3.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "On tire au hasard une boule dans un sac de 2 boules jaunes et 6 boules noires. Remettez dans l'ordre les étapes pour calculer P(jaune).",
            items: [
              "Vérifier que chaque boule a la même chance d'être tirée",
              "Compter le nombre total de boules : 2 + 6 = 8",
              "Compter les issues favorables : 2 boules jaunes",
              "Écrire le quotient : P(jaune) = 2/8",
              "Simplifier : 2/8 = 1/4",
              "Conclure : P(jaune) = 1/4 = 0,25",
            ],
          },
          quiz: [
            {
              q: "On lance une pièce équilibrée. Quelle est la probabilité d'obtenir face ?",
              options: ["1", "1/2", "2/3", "0"],
              answer: 1,
              why: "Il y a 2 issues équiprobables, pile et face : P(face) = 1/2.",
            },
            {
              q: "On lance un dé équilibré. Quelle est la probabilité d'obtenir 4 ?",
              options: ["1/4", "4/6", "1/6"],
              answer: 2,
              why: "Une seule issue favorable sur 6 issues équiprobables : 1/6.",
            },
            {
              q: "Un sac contient 1 boule blanche et 4 noires. Quelle est la probabilité de tirer la boule blanche ?",
              options: ["1/5", "1/4", "1/2", "4/5"],
              answer: 0,
              why: "Il y a 5 boules en tout et 1 seule blanche : P = 1/5. La réponse 1/2 compte les couleurs au lieu des boules.",
            },
            {
              q: "La probabilité de gagner à un jeu est 0,3. Quelle est la probabilité de ne pas gagner ?",
              options: ["0,3", "0,03", "1,3", "0,7"],
              answer: 3,
              why: "La somme des probabilités vaut 1 : 1 - 0,3 = 0,7.",
            },
            {
              q: "Avec un dé équilibré, quelle est la probabilité d'obtenir un nombre inférieur à 3 ?",
              options: ["1/2", "1/3", "3/6"],
              answer: 1,
              why: "Les issues favorables sont 1 et 2 : P = 2/6 = 1/3. Le nombre 3 n'est pas inférieur à 3.",
            },
          ],
          trap: "Compter les couleurs au lieu des objets : avec 3 boules rouges et 2 bleues, P(rouge) n'est pas 1/2 mais 3/5. Autre erreur : oublier de simplifier la fraction ou donner une probabilité plus grande que 1.",
          method: "Écrivez toujours les deux nombres séparément avant de diviser : « issues favorables : ... ; issues possibles : ... ». Vérifiez ensuite que le résultat est entre 0 et 1, et que les probabilités de toutes les issues ont une somme égale à 1.",
        },
      ],
    },
  ],
}
