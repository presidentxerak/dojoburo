import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-6e',
  chapters: [
    /* ================================================================== */
    /* NOMBRES ENTIERS ET NOMBRES DÉCIMAUX                                  */
    /* ================================================================== */
    {
      id: 'entiers-decimaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'grands-nombres',
          title: 'Lire, écrire et décomposer les grands nombres',
          minutes: 30,
          objectives: [
            "Lire et écrire en chiffres et en lettres les grands nombres entiers, jusqu'aux milliards.",
            "Connaître la valeur de chaque chiffre selon sa position dans l'écriture d'un nombre.",
            "Distinguer le chiffre des centaines (ou des milliers) et le nombre de centaines (ou de milliers).",
            "Décomposer un nombre entier de plusieurs façons.",
          ],
          course: [
            {
              heading: "Chiffres, nombres et classes",
              paragraphs: [
                "On écrit tous les nombres avec seulement dix chiffres : 0, 1, 2, 3, 4, 5, 6, 7, 8 et 9. Un chiffre est un signe, comme une lettre de l'alphabet ; un nombre est une quantité, comme un mot. Le nombre 507 s'écrit avec trois chiffres : 5, 0 et 7.",
                "La valeur d'un chiffre dépend de sa place : c'est la numération de position. Dans 555, le premier 5 vaut 5 centaines, le deuxième 5 dizaines et le dernier 5 unités. Chaque rang vaut dix fois plus que le rang situé à sa droite : 1 dizaine = 10 unités, 1 centaine = 10 dizaines, 1 millier = 10 centaines.",
                "Pour lire facilement un grand nombre, on regroupe ses chiffres par trois en partant de la droite, et l'on laisse un espace entre chaque groupe. Ces groupes s'appellent des classes : la classe des unités, puis celle des milliers, celle des millions et celle des milliards. Dans chaque classe, on trouve des centaines, des dizaines et des unités.",
                "Exemple : 4027305819 s'écrit 4 027 305 819 et se lit classe par classe : 4 milliards, 27 millions, 305 mille, 819. Si une classe est vide, on écrit trois zéros : trois millions six s'écrit 3 000 006.",
              ],
              box: { label: "Repère", text: "1 millier = 1 000. 1 million = 1 000 milliers = 1 000 000 (six zéros). 1 milliard = 1 000 millions = 1 000 000 000 (neuf zéros)." },
            },
            {
              heading: "Le chiffre de... et le nombre de...",
              paragraphs: [
                "Il ne faut pas confondre le chiffre des centaines et le nombre de centaines. Dans 52 734, le chiffre des centaines est 7 : c'est le chiffre placé au rang des centaines. Mais le nombre de centaines est 527 : c'est le nombre de paquets de 100 que l'on peut faire avec 52 734 objets (il reste 34 objets).",
                "Pour trouver le nombre de centaines, on cache les deux derniers chiffres (ceux des dizaines et des unités) et on lit ce qui reste : 52 7|34 donne 527. Pour le nombre de milliers, on cache les trois derniers chiffres : dans 52 734, il y a 52 milliers. Pour le nombre de dizaines, on cache le dernier chiffre : 5 273 dizaines.",
                "Exemple concret : une imprimerie doit livrer 52 734 cahiers en cartons de 100. Elle remplit 527 cartons complets, et il reste 34 cahiers. Le nombre de centaines répond donc à une vraie question de rangement.",
              ],
              box: { label: "À retenir", text: "Le chiffre des centaines est un seul chiffre (de 0 à 9). Le nombre de centaines s'obtient en lisant tous les chiffres situés à gauche du rang des dizaines, chiffre des centaines compris." },
            },
            {
              heading: "Décomposer un nombre",
              paragraphs: [
                "Décomposer un nombre, c'est l'écrire comme une somme qui montre la valeur de chacun de ses chiffres. Par exemple : 3 405 027 = 3 × 1 000 000 + 4 × 100 000 + 5 × 1 000 + 2 × 10 + 7. Les chiffres 0 n'apparaissent pas, car 0 centaine ne vaut rien.",
                "On peut aussi décomposer par classes : 3 405 027 = 3 millions + 405 milliers + 27 unités, ou encore 3 405 027 = 3 405 × 1 000 + 27. Toutes ces écritures désignent le même nombre ; on choisit celle qui aide le plus pour le calcul ou pour la lecture.",
              ],
            },
            {
              heading: "Écrire les nombres en lettres",
              paragraphs: [
                "L'orthographe de référence à l'école est celle de 1990 : on relie par des traits d'union tous les mots qui forment un nombre, par exemple vingt-et-un, cent-trois ou trois-mille-deux-cent-quarante. L'orthographe traditionnelle, qui met moins de traits d'union (cent trois, trois mille), n'est pas fausse pour autant.",
                "Mille est invariable : on écrit trois-mille, jamais « trois-milles ». Cent et vingt prennent un s quand ils sont multipliés et qu'ils terminent le nombre : deux-cents, quatre-vingts. Ils restent sans s quand un autre nombre les suit : deux-cent-trois, quatre-vingt-un, quatre-vingt-mille.",
                "Million et milliard ne sont pas des adjectifs numéraux mais des noms, comme « douzaine » : ils prennent un s au pluriel et ne sont pas reliés par des traits d'union. On écrit ainsi 2 300 450 : deux millions trois-cent-mille-quatre-cent-cinquante.",
              ],
              box: { label: "Règle", text: "Mille : toujours invariable. Cent et vingt : un s s'ils sont multipliés et en fin de nombre (deux-cents, quatre-vingts), pas de s s'ils sont suivis d'un autre nombre (deux-cent-six). Million, milliard : des noms, avec un s au pluriel." },
            },
          ],
          keyPoints: [
            "On regroupe les chiffres par classes de trois, en partant de la droite : unités, milliers, millions, milliards.",
            "Une classe vide s'écrit avec trois zéros : trois millions six = 3 000 006.",
            "Dans 52 734, le chiffre des centaines est 7 mais le nombre de centaines est 527.",
            "Décomposer : 3 405 027 = 3 × 1 000 000 + 4 × 100 000 + 5 × 1 000 + 2 × 10 + 7.",
            "En lettres : mille est invariable, cent et vingt prennent un s seulement s'ils sont multipliés et en fin de nombre ; million et milliard sont des noms.",
          ],
          example: {
            statement: "On considère le nombre 5207040300. a) Écrivez-le en séparant les classes. b) Donnez le chiffre des millions et le nombre de millions. c) Écrivez ce nombre en lettres.",
            solution: [
              "a) On sépare les chiffres par groupes de trois en partant de la droite : 5 207 040 300.",
              "b) La classe des millions est 207 : son chiffre des unités, 7, est le chiffre des millions. Le nombre de millions s'obtient en cachant les six derniers chiffres : 5 207 millions.",
              "c) On lit classe par classe : 5 milliards, 207 millions, 40 mille, 300.",
              "En lettres : cinq milliards deux-cent-sept millions quarante-mille-trois-cents (trois-cents prend un s, car il est multiplié et termine le nombre).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez chaque nombre en séparant les classes, puis donnez son chiffre des millions et son nombre de milliers : a) 45607230 ; b) 3082500100.",
              hint: "Faites des groupes de trois chiffres en partant de la droite. Pour le nombre de milliers, cachez les trois derniers chiffres.",
              solution: [
                "a) 45 607 230. La classe des millions est 45 : le chiffre des millions est 5. En cachant les trois derniers chiffres, on lit 45 607 : il y a 45 607 milliers.",
                "b) 3 082 500 100. La classe des millions est 082 : le chiffre des millions est 2. En cachant les trois derniers chiffres, on lit 3 082 500 : il y a 3 082 500 milliers.",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez en chiffres : douze millions quatre-cent-mille-trente ; deux milliards quarante millions neuf-mille. b) Écrivez en lettres : 1 080 200.",
              hint: "Écrivez une classe après l'autre avec toujours trois chiffres par classe (sauf la première), en complétant avec des zéros.",
              solution: [
                "a) Douze millions : 12 ; quatre-cent-mille : 400 ; trente : 030. On obtient 12 400 030.",
                "Deux milliards : 2 ; quarante millions : 040 ; neuf-mille : 009 ; aucune unité : 000. On obtient 2 040 009 000.",
                "b) 1 080 200 se lit : 1 million, 80 mille, 200.",
                "En lettres : un million quatre-vingt-mille-deux-cents. Vingt n'a pas de s, car il est suivi de mille ; cents a un s, car il est multiplié par deux et termine le nombre.",
              ],
            },
            {
              level: 3,
              statement: "Défi : retrouvez un nombre de huit chiffres grâce aux indices suivants. Son nombre de milliers est 26 304. Son chiffre des centaines est 0. Son chiffre des dizaines est 4. Son chiffre des unités est le double de son chiffre des dizaines. a) Quel est ce nombre ? b) Écrivez-le en lettres. c) Décomposez-le avec des multiplications par 10, 100, 1 000... d) Combien de centaines contient-il ?",
              hint: "Le nombre de milliers donne tous les chiffres sauf les trois derniers. Il reste à trouver les chiffres des centaines, des dizaines et des unités.",
              solution: [
                "a) Le nombre de milliers est 26 304 : le nombre s'écrit 26 304 suivi de trois chiffres. Le chiffre des centaines est 0, celui des dizaines est 4, et celui des unités vaut 2 × 4 = 8. Le nombre est 26 304 048 (il a bien huit chiffres).",
                "b) On lit 26 millions, 304 mille, 48 : vingt-six millions trois-cent-quatre-mille-quarante-huit.",
                "c) 26 304 048 = 2 × 10 000 000 + 6 × 1 000 000 + 3 × 100 000 + 4 × 1 000 + 4 × 10 + 8.",
                "Vérification : 20 000 000 + 6 000 000 + 300 000 + 4 000 + 40 + 8 = 26 304 048.",
                "d) En cachant les deux derniers chiffres, on lit 263 040 : ce nombre contient 263 040 centaines.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque nombre écrit en chiffres à son écriture en lettres.",
            pairs: [
              { left: "80 000", right: "quatre-vingt-mille" },
              { left: "400", right: "quatre-cents" },
              { left: "2 000 000", right: "deux millions" },
              { left: "71", right: "soixante-et-onze" },
              { left: "1 000 000 000", right: "un milliard" },
              { left: "300 005", right: "trois-cent-mille-cinq" },
            ],
          },
          quiz: [
            { q: "Dans 4 528 316, quel est le chiffre des milliers ?", options: ["5", "8", "4 528", "2"], answer: 1, why: "La classe des milliers est 528 : son chiffre des unités, 8, est le chiffre des milliers. 4 528 est le nombre de milliers." },
            { q: "Combien y a-t-il de centaines dans 4 528 316 ?", options: ["3", "4 528", "452 831", "45 283"], answer: 3, why: "On cache les deux derniers chiffres (1 et 6) : il reste 45 283, le nombre de centaines." },
            { q: "Comment s'écrit en chiffres « trois millions vingt-mille-six » ?", options: ["3 020 006", "3 206", "3 200 006", "30 020 006"], answer: 0, why: "Trois millions, puis la classe des milliers 020, puis la classe des unités 006 : 3 020 006." },
            { q: "Quelle est l'écriture correcte du nombre 200 ?", options: ["deux-cent", "deux-centes", "deux-cents", "deux-cent-zéro"], answer: 2, why: "Cent est multiplié par deux et termine le nombre : il prend un s." },
            { q: "Combien de zéros comporte l'écriture en chiffres d'un milliard ?", options: ["6", "9", "12", "3"], answer: 1, why: "1 milliard = 1 000 millions = 1 000 000 000 : neuf zéros, soit trois classes vides." },
          ],
          trap: "Oublier les zéros d'une classe vide, par exemple écrire 3 206 au lieu de 3 020 006 pour « trois millions vingt-mille-six », ou confondre le chiffre des centaines avec le nombre de centaines.",
          method: "Pour écrire un grand nombre en chiffres, tracez d'abord les classes (milliards, millions, milliers, unités) puis remplissez chacune avec exactement trois chiffres, en complétant par des zéros. Relisez ensuite le nombre à voix haute pour vérifier.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'ecriture-decimale',
          title: 'Des fractions décimales à l\'écriture décimale',
          minutes: 30,
          objectives: [
            "Connaître les fractions décimales et les liens entre unité, dixième, centième et millième.",
            "Passer d'une fraction décimale à l'écriture décimale, et inversement.",
            "Connaître la valeur de chaque chiffre de la partie décimale d'un nombre.",
            "Reconnaître différentes écritures d'un même nombre décimal.",
          ],
          course: [
            {
              heading: "Dixièmes, centièmes et millièmes",
              paragraphs: [
                "Partageons une unité (par exemple une tablette de chocolat) en 10 parts égales : chaque part est un dixième de l'unité, que l'on écrit 1/10. Si l'on partage l'unité en 100 parts égales, chaque part est un centième (1/100) ; en 1 000 parts égales, chaque part est un millième (1/1 000).",
                "Ces parts s'emboîtent comme les rangs des nombres entiers, avec un facteur 10 : 1 unité = 10 dixièmes, 1 dixième = 10 centièmes, 1 centième = 10 millièmes. Ainsi 1 = 10/10 = 100/100 = 1 000/1 000.",
                "Une fraction décimale est une fraction dont le dénominateur (le nombre du bas) est 10, 100, 1 000... Par exemple 37/10 (trente-sept dixièmes), 245/100 (deux-cent-quarante-cinq centièmes) ou 9/1 000 (neuf millièmes).",
              ],
              box: { label: "Définition", text: "Une fraction décimale est une fraction dont le dénominateur est 10, 100, 1 000... On a : 1 unité = 10 dixièmes = 100 centièmes = 1 000 millièmes." },
            },
            {
              heading: "De la fraction décimale à l'écriture décimale",
              paragraphs: [
                "Une fraction décimale peut s'écrire avec une virgule. Prenons 37/10 : 37 dixièmes, c'est 30 dixièmes et 7 dixièmes, soit 3 unités et 7 dixièmes. On écrit 37/10 = 3 + 7/10 = 3,7. La virgule sépare la partie entière (3) de la partie décimale (7).",
                "De même, 245/100 = 200/100 + 40/100 + 5/100 = 2 + 4/10 + 5/100 = 2,45. Et 9/1 000 = 0,009 : il n'y a aucune unité, aucun dixième, aucun centième, et 9 millièmes. Astuce : le nombre de zéros du dénominateur donne le nombre de chiffres après la virgule (1 000 a trois zéros, donc trois décimales).",
                "Inversement, on peut transformer une écriture décimale en fraction décimale : 6,08 = 608/100, car 6,08 représente 608 centièmes. Une écriture à virgule est donc une autre façon, plus rapide, d'écrire une fraction décimale.",
              ],
            },
            {
              heading: "La valeur de chaque chiffre",
              paragraphs: [
                "Dans un tableau de numération, les rangs continuent à droite de la virgule : centaines, dizaines, unités, puis virgule, puis dixièmes, centièmes, millièmes. Dans 52,368 : 5 est le chiffre des dizaines, 2 celui des unités, 3 celui des dixièmes, 6 celui des centièmes et 8 celui des millièmes.",
                "On peut donc décomposer : 52,368 = 50 + 2 + 3/10 + 6/100 + 8/1 000. On peut aussi écrire 52,368 = 52 + 368/1 000 : la partie décimale 368 représente 368 millièmes.",
                "Comme pour les entiers, il ne faut pas confondre chiffre et nombre : dans 52,368, le chiffre des dixièmes est 3, mais le nombre de dixièmes est 523 (il y a 523 dixièmes entiers dans 52,368, car 52 unités valent 520 dixièmes).",
              ],
              box: { label: "Repère", text: "Tableau : ... centaines | dizaines | unités , dixièmes | centièmes | millièmes. Le premier chiffre après la virgule est celui des dixièmes, le deuxième celui des centièmes, le troisième celui des millièmes." },
            },
            {
              heading: "Plusieurs écritures pour un même nombre",
              paragraphs: [
                "Un même nombre peut s'écrire de plusieurs façons : 4,5 = 4,50 = 45/10 = 450/100 = 4 + 5/10. Les zéros placés à la fin de la partie décimale ne changent rien : 4,50 = 4,5 (5 dixièmes et 0 centième valent 5 dixièmes). Les zéros placés au début de la partie entière non plus : 07 = 7.",
                "En revanche, un zéro placé entre la virgule et un autre chiffre est indispensable : 4,05 n'est pas égal à 4,5. Dans 4,05, il y a 0 dixième et 5 centièmes, donc 5 centièmes seulement ; dans 4,5, il y a 5 dixièmes, soit 50 centièmes.",
                "Un nombre décimal est un nombre qui peut s'écrire avec une fraction décimale. Tout nombre entier est décimal (7 = 70/10 = 7,0). Certaines fractions simples sont aussi des décimaux : 1/2 = 5/10 = 0,5 et 1/4 = 25/100 = 0,25.",
              ],
              box: { label: "À retenir", text: "Les zéros à la fin de la partie décimale sont inutiles : 4,50 = 4,5. Un zéro entre la virgule et un chiffre est indispensable : 4,05 ≠ 4,5." },
            },
          ],
          keyPoints: [
            "1 unité = 10 dixièmes = 100 centièmes = 1 000 millièmes.",
            "Une fraction décimale a pour dénominateur 10, 100, 1 000... : 37/10 = 3,7 ; 245/100 = 2,45 ; 9/1 000 = 0,009.",
            "La virgule sépare la partie entière de la partie décimale ; après la virgule viennent les dixièmes, les centièmes, puis les millièmes.",
            "52,368 = 50 + 2 + 3/10 + 6/100 + 8/1 000 = 52 + 368/1 000.",
            "4,50 = 4,5 (zéro final inutile), mais 4,05 ≠ 4,5 (zéro indispensable).",
          ],
          example: {
            statement: "a) Écrivez sous forme décimale le nombre 4 + 3/10 + 9/1 000. b) Décomposez 13,07 en utilisant des fractions décimales, puis écrivez-le sous la forme d'une seule fraction décimale.",
            solution: [
              "a) Il y a 4 unités, 3 dixièmes, 0 centième et 9 millièmes.",
              "On n'oublie pas le zéro des centièmes : 4 + 3/10 + 9/1 000 = 4,309.",
              "b) Dans 13,07 : 1 dizaine, 3 unités, 0 dixième et 7 centièmes. Donc 13,07 = 10 + 3 + 7/100 = 13 + 7/100.",
              "13,07 représente 1 307 centièmes : 13,07 = 1 307/100.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'écriture décimale de chaque nombre : a) 58/10 ; b) 307/100 ; c) 6/1 000 ; d) 2 + 4/100.",
              hint: "Le nombre de zéros du dénominateur indique le nombre de chiffres après la virgule.",
              solution: [
                "a) 58/10 = 50/10 + 8/10 = 5 + 8/10 = 5,8.",
                "b) 307/100 = 300/100 + 7/100 = 3 + 7/100 = 3,07 (0 dixième, 7 centièmes).",
                "c) 6/1 000 = 0,006 (0 unité, 0 dixième, 0 centième, 6 millièmes).",
                "d) 2 + 4/100 = 2,04 (le zéro des dixièmes est indispensable).",
              ],
            },
            {
              level: 2,
              statement: "On considère le nombre 607,245. a) Quel est son chiffre des centièmes ? b) Quel est son nombre de dixièmes ? c) Décomposez-le à l'aide de fractions décimales. d) Écrivez-le sous la forme d'une seule fraction décimale.",
              hint: "Placez le nombre dans un tableau de numération. Pour le nombre de dixièmes, lisez tous les chiffres jusqu'au rang des dixièmes inclus.",
              solution: [
                "a) Le premier chiffre après la virgule est 2 (dixièmes), le deuxième est 4 : le chiffre des centièmes est 4.",
                "b) On lit tous les chiffres jusqu'au rang des dixièmes : 6 072. Il y a 6 072 dixièmes dans 607,245.",
                "c) 607,245 = 600 + 7 + 2/10 + 4/100 + 5/1 000, ou encore 607 + 245/1 000.",
                "d) Il y a trois décimales : 607,245 = 607 245/1 000.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Écrivez sous forme décimale : 12 dixièmes + 34 centièmes + 5 millièmes ; 3 unités + 15 centièmes ; 2 dizaines + 7 millièmes. b) Lina affirme : « 3,5 ; 3,50 ; 35/10 ; 350/100 et 3 + 5/100 sont cinq écritures du même nombre. » A-t-elle raison ? Justifiez.",
              hint: "Attention, 12 dixièmes dépasse une unité : 10 dixièmes font 1 unité. Pour b), écrivez chaque nombre sous forme décimale.",
              solution: [
                "a) 12 dixièmes = 1,2 ; 34 centièmes = 0,34 ; 5 millièmes = 0,005. En les regroupant rang par rang : 1 unité, 2 + 3 = 5 dixièmes, 4 centièmes, 5 millièmes, soit 1,545.",
                "3 unités + 15 centièmes = 3 + 0,15 = 3,15.",
                "2 dizaines + 7 millièmes = 20 + 0,007 = 20,007 (deux zéros pour les dixièmes et les centièmes).",
                "b) 3,50 = 3,5 (zéro final inutile) ; 35/10 = 3,5 ; 350/100 = 3,50 = 3,5. Mais 3 + 5/100 = 3,05, qui n'est pas égal à 3,5.",
                "Lina se trompe : seules les quatre premières écritures désignent le même nombre, 3,5.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque égalité ou affirmation sur l'écriture décimale.",
            statements: [
              { text: "0,7 = 7/10", true: true, why: "0,7 se lit sept dixièmes." },
              { text: "3,05 = 3,5", true: false, why: "3,05 contient 5 centièmes, alors que 3,5 contient 5 dixièmes : le zéro est indispensable." },
              { text: "45/100 = 0,45", true: true, why: "45 centièmes, c'est 4 dixièmes et 5 centièmes." },
              { text: "2,40 = 2,4", true: true, why: "Le zéro placé à la fin de la partie décimale est inutile." },
              { text: "1/1 000 s'écrit 0,0001", true: false, why: "Un millième a trois chiffres après la virgule : 0,001." },
              { text: "Dans 8,62, le chiffre 6 est le chiffre des centièmes.", true: false, why: "Le premier chiffre après la virgule est celui des dixièmes : 6 est le chiffre des dixièmes." },
              { text: "Tout nombre entier est un nombre décimal.", true: true, why: "Par exemple 5 = 50/10 = 5,0 : il s'écrit avec une fraction décimale." },
            ],
          },
          quiz: [
            { q: "Comment s'écrit 7/100 en écriture décimale ?", options: ["0,7", "7,00", "0,07", "0,007"], answer: 2, why: "7 centièmes : 0 unité, 0 dixième et 7 centièmes, soit 0,07." },
            { q: "Dans 34,592, quel est le chiffre des centièmes ?", options: ["9", "5", "2", "4"], answer: 0, why: "Après la virgule : 5 dixièmes, 9 centièmes, 2 millièmes." },
            { q: "Quel nombre est égal à 2 + 6/10 + 3/1 000 ?", options: ["2,63", "2,0063", "26,03", "2,603"], answer: 3, why: "2 unités, 6 dixièmes, 0 centième et 3 millièmes : 2,603." },
            { q: "Combien y a-t-il de dixièmes dans une unité ?", options: ["100", "10", "1 000", "1"], answer: 1, why: "Une unité partagée en 10 parts égales donne 10 dixièmes." },
            { q: "Quelle égalité est fausse ?", options: ["5,03 = 5,3", "5,30 = 5,3", "50/10 = 5", "5 = 5,00"], answer: 0, why: "5,03 contient 3 centièmes et 5,3 contient 3 dixièmes : ils sont différents." },
          ],
          trap: "Croire que les zéros après la virgule ne comptent jamais : un zéro final est inutile (4,50 = 4,5), mais un zéro placé avant un autre chiffre est indispensable (4,05 ≠ 4,5).",
          method: "Lisez les nombres décimaux en nommant les rangs : dites « trois unités et cinq centièmes » plutôt que « trois virgule zéro cinq ». Cette lecture évite la plupart des erreurs de zéros.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'comparer-decimaux',
          title: 'Comparer, ranger, encadrer et arrondir des décimaux',
          minutes: 35,
          objectives: [
            "Comparer deux nombres décimaux et utiliser les symboles <, > et =.",
            "Ranger des nombres décimaux dans l'ordre croissant ou décroissant.",
            "Encadrer un nombre décimal et intercaler un nombre entre deux décimaux.",
            "Donner l'arrondi d'un nombre décimal à l'unité, au dixième ou au centième.",
          ],
          course: [
            {
              heading: "Comparer deux nombres décimaux",
              paragraphs: [
                "Pour comparer deux nombres décimaux, on compare d'abord leurs parties entières. Si elles sont différentes, le plus grand nombre est celui qui a la plus grande partie entière : 12,7 > 9,85 car 12 > 9, même si 9,85 a plus de chiffres.",
                "Si les parties entières sont égales, on compare les chiffres des dixièmes, puis, s'ils sont égaux, ceux des centièmes, et ainsi de suite. Par exemple, 4,52 et 4,6 ont la même partie entière ; 5 dixièmes < 6 dixièmes, donc 4,52 < 4,6.",
                "Une astuce sûre : compléter avec des zéros pour avoir le même nombre de décimales. 4,6 = 4,60 ; on compare alors 4,52 et 4,60, c'est-à-dire 452 centièmes et 460 centièmes : 4,52 < 4,60. Le nombre qui a le plus de chiffres après la virgule n'est pas forcément le plus grand.",
              ],
              box: { label: "Règle", text: "On compare d'abord les parties entières, puis les chiffres des dixièmes, puis des centièmes... de gauche à droite. Le symbole < se lit « est inférieur à », le symbole > « est supérieur à »." },
            },
            {
              heading: "Ranger des nombres",
              paragraphs: [
                "Ranger des nombres dans l'ordre croissant, c'est les écrire du plus petit au plus grand, séparés par le symbole <. Les ranger dans l'ordre décroissant, c'est les écrire du plus grand au plus petit, avec le symbole >.",
                "Exemple : pour ranger 3,4 ; 3,09 ; 3,125 ; 3,41 et 3,1 dans l'ordre croissant, on écrit tous les nombres avec trois décimales : 3,400 ; 3,090 ; 3,125 ; 3,410 ; 3,100. On obtient 3,09 < 3,1 < 3,125 < 3,4 < 3,41.",
              ],
            },
            {
              heading: "Encadrer et intercaler",
              paragraphs: [
                "Encadrer un nombre, c'est le placer entre deux nombres, l'un plus petit, l'autre plus grand. L'encadrement de 7,38 à l'unité est 7 < 7,38 < 8 (deux entiers qui se suivent). Au dixième, c'est 7,3 < 7,38 < 7,4 (deux nombres à un chiffre après la virgule qui se suivent).",
                "Entre deux nombres décimaux différents, on peut toujours en intercaler un autre. Entre 2,4 et 2,5, on trouve par exemple 2,45, mais aussi 2,41 ou 2,499. Il y en a même une infinité : on peut toujours ajouter des décimales.",
                "Sur une demi-droite graduée en dixièmes, chaque petite graduation représente 0,1. Le nombre 7,38 se place entre les graduations 7,3 et 7,4, un peu plus près de 7,4 : cela prépare la notion d'arrondi.",
              ],
            },
            {
              heading: "Arrondir un nombre",
              paragraphs: [
                "L'arrondi d'un nombre à l'unité est l'entier le plus proche de ce nombre. 7,38 est entre 7 et 8, plus près de 7 : son arrondi à l'unité est 7. L'arrondi au dixième est le nombre à un chiffre après la virgule le plus proche : 7,38 est plus près de 7,4 que de 7,3, son arrondi au dixième est 7,4.",
                "Pour arrondir sans dessin, on regarde le chiffre qui suit le rang voulu : s'il vaut 0, 1, 2, 3 ou 4, on garde le chiffre du rang ; s'il vaut 5, 6, 7, 8 ou 9, on augmente le chiffre du rang de 1. Exemple : 15,263 arrondi au centième. Le chiffre après les centièmes est 3, on garde : 15,26.",
                "Cas délicat : 2,96 arrondi au dixième. Le chiffre suivant est 6 : on augmente les 9 dixièmes de 1, ce qui donne 10 dixièmes, soit une unité de plus. L'arrondi est 3,0, que l'on peut écrire 3. Les arrondis servent tous les jours : un prix de 19,99 € est presque 20 €.",
              ],
              box: { label: "Règle", text: "Pour arrondir, on regarde le chiffre qui suit le rang demandé : de 0 à 4, on garde le chiffre du rang ; de 5 à 9, on l'augmente de 1. Exemple : 18,647 arrondi au dixième donne 18,6 ; à l'unité, 19." },
            },
          ],
          keyPoints: [
            "On compare d'abord les parties entières, puis les dixièmes, puis les centièmes...",
            "Compléter avec des zéros aide à comparer : 4,6 = 4,60 > 4,52.",
            "Ordre croissant : du plus petit au plus grand (<) ; décroissant : du plus grand au plus petit (>).",
            "Encadrement de 7,38 à l'unité : 7 < 7,38 < 8 ; au dixième : 7,3 < 7,38 < 7,4.",
            "Arrondir : on regarde le chiffre suivant ; de 0 à 4 on garde, de 5 à 9 on augmente de 1.",
          ],
          example: {
            statement: "Rangez dans l'ordre croissant les nombres 3,4 ; 3,09 ; 3,125 ; 3,41 et 3,1, puis donnez l'arrondi au dixième de 3,125.",
            solution: [
              "Tous ces nombres ont la même partie entière, 3. On complète avec des zéros pour avoir trois décimales : 3,400 ; 3,090 ; 3,125 ; 3,410 ; 3,100.",
              "On compare les parties décimales comme des entiers : 090 < 100 < 125 < 400 < 410.",
              "Ordre croissant : 3,09 < 3,1 < 3,125 < 3,4 < 3,41.",
              "Arrondi de 3,125 au dixième : le chiffre qui suit les dixièmes est 2, on garde le chiffre des dixièmes. L'arrondi au dixième de 3,125 est 3,1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec <, > ou = : a) 5,8 ... 5,26 ; b) 0,47 ... 0,5 ; c) 12,30 ... 12,3 ; d) 7,099 ... 7,1.",
              hint: "Complétez avec des zéros pour que les deux nombres aient le même nombre de décimales.",
              solution: [
                "a) 5,80 et 5,26 : 80 centièmes > 26 centièmes, donc 5,8 > 5,26.",
                "b) 0,47 et 0,50 : 47 centièmes < 50 centièmes, donc 0,47 < 0,5.",
                "c) 12,30 = 12,3 : le zéro final ne change rien.",
                "d) 7,099 et 7,100 : 99 millièmes < 100 millièmes, donc 7,099 < 7,1.",
              ],
            },
            {
              level: 2,
              statement: "Pour le nombre 18,647 : a) donnez son encadrement à l'unité, au dixième et au centième ; b) donnez son arrondi à l'unité, au dixième et au centième.",
              hint: "Pour arrondir, regardez à chaque fois le chiffre situé juste après le rang demandé.",
              solution: [
                "a) À l'unité : 18 < 18,647 < 19. Au dixième : 18,6 < 18,647 < 18,7. Au centième : 18,64 < 18,647 < 18,65.",
                "b) À l'unité : le chiffre des dixièmes est 6 (entre 5 et 9), on augmente : l'arrondi est 19.",
                "Au dixième : le chiffre des centièmes est 4 (entre 0 et 4), on garde : l'arrondi est 18,6.",
                "Au centième : le chiffre des millièmes est 7, on augmente : l'arrondi est 18,65.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lors d'un 100 mètres (données fictives), on a relevé les temps suivants : Inès 12,4 s ; Tom 12,38 s ; Malo 12,09 s ; Sara 12,41 s ; Noé 12,1 s. a) Établissez le classement (le plus petit temps gagne). b) Le tableau d'affichage du stade arrondit les temps au dixième. Quels temps affiche-t-il ? Permet-il de départager tous les coureurs ? c) Un sixième coureur est arrivé entre Tom et Inès. Proposez un temps possible.",
              hint: "Écrivez tous les temps avec deux décimales pour les comparer. Pour c), cherchez un nombre compris entre 12,38 et 12,40.",
              solution: [
                "a) Avec deux décimales : 12,40 ; 12,38 ; 12,09 ; 12,41 ; 12,10. Dans l'ordre croissant : 12,09 < 12,10 < 12,38 < 12,40 < 12,41.",
                "Classement : 1er Malo, 2e Noé, 3e Tom, 4e Inès, 5e Sara.",
                "b) Arrondis au dixième : Inès 12,4 ; Tom 12,4 (le chiffre des centièmes, 8, fait monter) ; Malo 12,1 (le 9 fait monter) ; Sara 12,4 ; Noé 12,1.",
                "Le tableau affiche 12,1 pour Malo et Noé, et 12,4 pour Tom, Inès et Sara : il ne permet pas de les départager.",
                "c) Il faut un temps compris entre 12,38 et 12,4, par exemple 12,39 s (ou 12,385 s).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces nombres dans l'ordre croissant, du plus petit au plus grand.",
            items: ["0,089", "0,1", "0,15", "0,2", "0,207", "1,02"],
          },
          quiz: [
            { q: "Quel est le plus grand nombre ?", options: ["4,125", "4,09", "4,2", "4,1999"], answer: 2, why: "Tous ont 4 unités ; 4,2 a 2 dixièmes, plus que les autres (1 ou 0 dixième)." },
            { q: "Quel est l'arrondi au dixième de 6,371 ?", options: ["6,3", "6,4", "6,37", "6"], answer: 1, why: "Le chiffre qui suit les dixièmes est 7, entre 5 et 9 : on augmente le chiffre des dixièmes, ce qui donne 6,4." },
            { q: "Quel nombre peut-on intercaler entre 2,7 et 2,8 ?", options: ["2,75", "2,9", "2,07", "2,69"], answer: 0, why: "2,70 < 2,75 < 2,80. Les autres sont en dehors de l'intervalle." },
            { q: "Quel encadrement de 9,46 au dixième est correct ?", options: ["9 < 9,46 < 10", "9,5 < 9,46 < 9,6", "9,4 < 9,46 < 9,5", "9,45 < 9,46 < 9,47"], answer: 2, why: "Au dixième, on encadre par deux nombres à un chiffre après la virgule qui se suivent : 9,4 et 9,5." },
            { q: "Quel est l'arrondi à l'unité de 14,5 ?", options: ["14", "14,5", "13", "15"], answer: 3, why: "Le chiffre des dixièmes est 5 : on augmente le chiffre des unités, l'arrondi est 15." },
          ],
          trap: "Croire que le nombre qui a le plus de chiffres après la virgule est le plus grand, par exemple penser que 4,125 > 4,2 parce que 125 > 2.",
          method: "Écrivez les nombres les uns sous les autres en alignant les virgules, complétez par des zéros pour avoir le même nombre de décimales, puis comparez chiffre à chiffre, de gauche à droite.",
        },
      ],
    },

    /* ================================================================== */
    /* DROITES, SEGMENTS ET CERCLES                                         */
    /* ================================================================== */
    {
      id: 'droites-cercles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'points-droites-segments',
          title: 'Points, droites, demi-droites et segments',
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire et les notations : point, droite, demi-droite, segment, longueur, milieu.",
            "Reconnaître des points alignés et utiliser les symboles ∈ et ∉.",
            "Tracer une droite, une demi-droite et un segment avec la règle, et reporter une longueur avec le compas.",
          ],
          course: [
            {
              heading: "Le point et la droite",
              paragraphs: [
                "En géométrie, un point indique une position précise. On le représente par une petite croix et on le nomme par une lettre majuscule : le point A, le point B. Le point n'a pas d'épaisseur : c'est l'endroit où les deux traits de la croix se coupent.",
                "Une droite est une ligne parfaitement droite, illimitée des deux côtés : elle ne s'arrête jamais. Sur la feuille, on n'en trace qu'une partie avec la règle. On nomme une droite par une lettre entre parenthèses, comme (d), ou par deux de ses points : la droite passant par A et B se note (AB), ou (BA).",
                "Par deux points distincts passe une seule droite : c'est pourquoi deux points suffisent pour la nommer. Par un seul point, en revanche, on peut faire passer une infinité de droites, dans toutes les directions.",
              ],
              box: { label: "Propriété", text: "Par deux points distincts A et B, il passe une droite et une seule : la droite (AB)." },
            },
            {
              heading: "Appartenance et points alignés",
              paragraphs: [
                "Si le point M est sur la droite (d), on dit que M appartient à (d) et on écrit M ∈ (d). Si le point N n'est pas sur (d), on écrit N ∉ (d), qui se lit « N n'appartient pas à (d) ».",
                "Des points sont alignés lorsqu'ils appartiennent à une même droite. Pour vérifier que trois points A, B et C sont alignés, on place la règle sur A et B, puis on regarde si C est aussi sur le bord de la règle. Deux droites qui se coupent sont dites sécantes : leur point commun est leur point d'intersection.",
              ],
            },
            {
              heading: "La demi-droite et le segment",
              paragraphs: [
                "Une demi-droite est une partie de droite limitée d'un seul côté, par un point appelé son origine. La demi-droite d'origine A passant par B se note [AB) : le crochet est du côté de A, où elle s'arrête, la parenthèse du côté de B, où elle continue. Attention : [AB) et [BA) sont deux demi-droites différentes, car elles n'ont pas la même origine.",
                "Un segment est une partie de droite limitée des deux côtés. Le segment d'extrémités A et B se note [AB] (ou [BA]). Un segment a une longueur, que l'on mesure avec la règle graduée ; la longueur du segment [AB] se note AB, sans crochets. On écrit par exemple AB = 5 cm.",
                "Le milieu d'un segment est le point de ce segment situé à égale distance de ses deux extrémités. I est le milieu de [AB] si I ∈ [AB] et IA = IB. Si AB = 7 cm, alors IA = IB = 3,5 cm.",
              ],
              box: { label: "À retenir", text: "(AB) : la droite passant par A et B. [AB) : la demi-droite d'origine A passant par B. [AB] : le segment d'extrémités A et B. AB : la longueur du segment [AB], un nombre suivi d'une unité." },
            },
            {
              heading: "Reporter une longueur avec le compas",
              paragraphs: [
                "Le compas ne sert pas seulement à tracer des cercles : il permet aussi de reporter une longueur sans la mesurer. On place la pointe sur une extrémité du segment, on ouvre le compas jusqu'à l'autre extrémité, puis on reporte cet écartement ailleurs sur la figure.",
                "Exemple : pour placer sur la demi-droite [Ox) le point M tel que OM = AB, on prend l'écartement AB au compas, on pique en O et on trace un petit arc qui coupe [Ox) : le point d'intersection est M. Cette méthode est souvent plus précise que la règle graduée.",
              ],
            },
          ],
          keyPoints: [
            "Par deux points distincts passe une seule droite.",
            "(AB) est une droite, [AB) une demi-droite d'origine A, [AB] un segment, AB une longueur.",
            "M ∈ (d) : M appartient à la droite (d) ; N ∉ (d) : N n'appartient pas à (d).",
            "Des points alignés appartiennent à une même droite.",
            "I est le milieu de [AB] si I ∈ [AB] et IA = IB.",
          ],
          example: {
            statement: "Les points A, B et C sont alignés dans cet ordre, avec AB = 3 cm et BC = 5 cm. a) Calculez AC. b) Les affirmations suivantes sont-elles vraies : B ∈ [AC] ; C ∈ [AB) ; A ∈ [BC) ?",
            solution: [
              "a) B est entre A et C, donc AC = AB + BC = 3 cm + 5 cm = 8 cm.",
              "b) B est entre A et C : B appartient au segment [AC]. C'est vrai.",
              "La demi-droite [AB) part de A et continue au-delà de B : elle contient C. C ∈ [AB) est vrai.",
              "La demi-droite [BC) part de B et va vers C : A est de l'autre côté de B. A ∈ [BC) est faux, on écrit A ∉ [BC).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez avec la notation qui convient : a) la droite passant par E et F ; b) le segment d'extrémités R et S ; c) la demi-droite d'origine M passant par N ; d) la longueur du segment [KL] ; e) « le point P appartient au segment [RS] ».",
              hint: "Demandez-vous à chaque fois si la figure est limitée des deux côtés, d'un seul côté ou d'aucun côté.",
              solution: [
                "a) La droite n'est limitée d'aucun côté : (EF).",
                "b) Le segment est limité des deux côtés : [RS].",
                "c) La demi-droite est limitée du côté de son origine M : [MN).",
                "d) Une longueur s'écrit sans crochets : KL.",
                "e) P ∈ [RS].",
              ],
            },
            {
              level: 2,
              statement: "Les points A, B, C et D sont alignés dans cet ordre, avec AB = 2 cm, BC = 3 cm et CD = 1 cm. a) Vrai ou faux : B ∈ [AC] ; D ∈ [CB) ; A ∈ [CB) ; (AD) et (BC) désignent la même droite ; [AB) et [AC) désignent la même demi-droite. b) Calculez AD. c) Le milieu de [AD] est-il l'un des points nommés ?",
              hint: "Faites un schéma à main levée : une droite avec les quatre points dans l'ordre et les longueurs indiquées.",
              solution: [
                "a) B est entre A et C : B ∈ [AC] est vrai.",
                "[CB) part de C et va vers B, donc vers A : D est de l'autre côté de C. D ∈ [CB) est faux. En revanche, A est dans la direction de B : A ∈ [CB) est vrai.",
                "Les quatre points sont sur une même droite : (AD) et (BC) sont la même droite. Vrai.",
                "[AB) et [AC) ont la même origine A et partent dans la même direction (C est au-delà de B) : c'est la même demi-droite. Vrai.",
                "b) AD = AB + BC + CD = 2 + 3 + 1 = 6 cm.",
                "c) Le milieu de [AD] est à 6 ÷ 2 = 3 cm de A. Or B est à 2 cm de A et C à 5 cm de A : le milieu est entre B et C, à 1 cm de B. Ce n'est aucun des points nommés.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On place 4 points sur une feuille de façon que trois d'entre eux ne soient jamais alignés. a) Combien de droites différentes peut-on tracer en passant par deux de ces points ? b) Même question avec 5 points. Expliquez votre raisonnement.",
              hint: "Nommez les points A, B, C, D et dressez la liste des droites de façon organisée : d'abord toutes celles qui passent par A, puis celles qui passent par B sans A, et ainsi de suite.",
              solution: [
                "a) Avec A, B, C, D : par A passent (AB), (AC) et (AD) ; par B, sans compter (AB) déjà listée : (BC) et (BD) ; par C, il reste (CD). Total : 3 + 2 + 1 = 6 droites.",
                "Autre raisonnement : chaque point est relié aux 3 autres, ce qui fait 4 × 3 = 12, mais chaque droite est comptée deux fois ((AB) et (BA) sont la même). On obtient 12 ÷ 2 = 6 droites.",
                "b) Avec 5 points : 4 + 3 + 2 + 1 = 10 droites, ou encore 5 × 4 = 20, divisé par 2, soit 10 droites.",
                "Comme trois points ne sont jamais alignés, toutes ces droites sont différentes : on peut tracer 6 droites avec 4 points et 10 droites avec 5 points.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notation à sa signification.",
            pairs: [
              { left: "(AB)", right: "la droite passant par A et B" },
              { left: "[AB]", right: "le segment d'extrémités A et B" },
              { left: "[AB)", right: "la demi-droite d'origine A passant par B" },
              { left: "[BA)", right: "la demi-droite d'origine B passant par A" },
              { left: "AB", right: "la longueur du segment [AB]" },
              { left: "M ∈ (AB)", right: "le point M appartient à la droite (AB)" },
            ],
          },
          quiz: [
            { q: "Que désigne [MN] ?", options: ["la droite illimitée qui passe par M et par N", "le segment d'extrémités M et N", "la longueur entre M et N", "la demi-droite d'origine M"], answer: 1, why: "Deux crochets : la figure est limitée des deux côtés, c'est un segment." },
            { q: "Par deux points distincts A et B, combien passe-t-il de droites ?", options: ["aucune", "une infinité", "deux", "une seule"], answer: 3, why: "Par deux points distincts passe une seule droite, la droite (AB)." },
            { q: "I est le milieu de [AB] et AB = 7 cm. Combien mesure AI ?", options: ["3,5 cm", "7 cm", "14 cm", "3,75 cm"], answer: 0, why: "Le milieu partage le segment en deux longueurs égales : 7 ÷ 2 = 3,5 cm." },
            { q: "Les points A, B, C sont alignés dans cet ordre. Quelle affirmation est vraie ?", options: ["C ∈ [AB]", "A ∈ [BC]", "B ∈ [AC]", "C ∈ [BA)"], answer: 2, why: "B est situé entre A et C, donc sur le segment [AC]." },
            { q: "Quelle différence y a-t-il entre [AB) et [BA) ?", options: ["aucune, ce sont deux noms de la même demi-droite", "elles n'ont pas la même origine", "[AB) est plus longue", "l'une est un segment"], answer: 1, why: "[AB) a pour origine A, [BA) a pour origine B : elles partent dans des directions opposées." },
          ],
          trap: "Mélanger les notations : écrire [AB] = 5 cm au lieu de AB = 5 cm, ou (AB) pour un segment. Un segment est une figure, sa longueur est un nombre.",
          method: "Retenez que le crochet se place du côté où la figure s'arrête et la parenthèse du côté où elle continue. Avant d'écrire une notation, faites un petit schéma à main levée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'perpendiculaires-paralleles',
          title: 'Droites perpendiculaires et droites parallèles',
          minutes: 35,
          objectives: [
            "Reconnaître et tracer des droites perpendiculaires et des droites parallèles avec la règle et l'équerre.",
            "Utiliser les notations ⊥ et // et coder un angle droit sur une figure.",
            "Utiliser les propriétés reliant droites parallèles et perpendiculaires pour justifier une affirmation.",
            "Déterminer la distance d'un point à une droite.",
          ],
          course: [
            {
              heading: "Droites perpendiculaires",
              paragraphs: [
                "Deux droites sont perpendiculaires lorsqu'elles se coupent en formant un angle droit. Elles forment alors quatre angles droits. On écrit (d1) ⊥ (d2), ce qui se lit « la droite (d1) est perpendiculaire à la droite (d2) ». Sur une figure, on code l'angle droit par un petit carré.",
                "Dans la vie courante, les bords d'une feuille, les montants d'une porte et le sol, ou les lignes d'un cahier à petits carreaux forment des angles droits. On vérifie et on trace des droites perpendiculaires avec l'équerre : on place un côté de l'angle droit de l'équerre le long de la première droite, et l'autre côté donne la perpendiculaire.",
                "Attention : deux droites sécantes ne sont pas toujours perpendiculaires. Elles le sont seulement si elles forment un angle droit.",
              ],
              box: { label: "Définition", text: "Deux droites sont perpendiculaires si elles se coupent en formant un angle droit. Notation : (d1) ⊥ (d2)." },
            },
            {
              heading: "Droites parallèles",
              paragraphs: [
                "Deux droites sont parallèles lorsqu'elles ne se coupent pas, aussi loin qu'on les prolonge, comme les deux rails d'une voie ferrée. On écrit (d1) // (d2), qui se lit « la droite (d1) est parallèle à la droite (d2) ». On considère aussi que deux droites confondues (superposées) sont parallèles.",
                "Attention : deux droites qui ne se coupent pas sur la feuille peuvent se couper plus loin, en dehors. Pour tracer la parallèle à une droite (d) passant par un point A, on utilise la règle et l'équerre : on trace d'abord la perpendiculaire à (d) passant par A, puis la perpendiculaire à cette nouvelle droite passant par A.",
              ],
              box: { label: "Définition", text: "Deux droites sont parallèles si elles n'ont aucun point commun, ou si elles sont confondues. Notation : (d1) // (d2)." },
            },
            {
              heading: "Trois propriétés à connaître",
              paragraphs: [
                "Propriété 1 : si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles. C'est elle qui explique la méthode de tracé d'une parallèle avec l'équerre.",
                "Propriété 2 : si deux droites sont parallèles et si une troisième droite est perpendiculaire à l'une, alors elle est perpendiculaire à l'autre. Propriété 3 : si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.",
                "Pour justifier avec une propriété, on rédige en trois temps : « On sait que... » (les données), « Or... » (la propriété), « Donc... » (la conclusion). Exemple : on sait que (d1) ⊥ (d) et (d2) ⊥ (d). Or, si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles. Donc (d1) // (d2).",
              ],
              box: { label: "Propriété", text: "Si (d1) ⊥ (d) et (d2) ⊥ (d), alors (d1) // (d2). Si (d1) // (d2) et (d3) ⊥ (d1), alors (d3) ⊥ (d2). Si (d1) // (d) et (d2) // (d), alors (d1) // (d2)." },
            },
            {
              heading: "La distance d'un point à une droite",
              paragraphs: [
                "Soit une droite (d) et un point A qui n'est pas sur (d). On trace la perpendiculaire à (d) passant par A : elle coupe (d) en un point H, appelé le pied de la perpendiculaire. La distance du point A à la droite (d) est la longueur AH.",
                "C'est le plus court chemin entre A et la droite : si M est un autre point de (d), alors AM est plus grand que AH. Par exemple, pour aller le plus vite possible d'un point du terrain jusqu'à la ligne de touche, on court perpendiculairement à cette ligne.",
              ],
              box: { label: "À retenir", text: "La distance d'un point A à une droite (d) est la longueur AH, où H est le pied de la perpendiculaire à (d) passant par A. C'est la plus courte distance entre A et un point de (d)." },
            },
          ],
          keyPoints: [
            "(d1) ⊥ (d2) : les droites se coupent en formant un angle droit (codé par un petit carré).",
            "(d1) // (d2) : les droites ne se coupent jamais (ou sont confondues).",
            "Deux droites perpendiculaires à une même droite sont parallèles.",
            "Si deux droites sont parallèles, toute perpendiculaire à l'une est perpendiculaire à l'autre.",
            "Deux droites parallèles à une même droite sont parallèles entre elles.",
            "La distance de A à (d) est AH, où H est le pied de la perpendiculaire à (d) passant par A.",
          ],
          example: {
            statement: "On sait que (d1) // (d2) et que (d3) ⊥ (d1). Que peut-on dire des droites (d3) et (d2) ? Rédigez la justification.",
            solution: [
              "On sait que (d1) // (d2) et (d3) ⊥ (d1).",
              "Or, si deux droites sont parallèles et si une troisième droite est perpendiculaire à l'une, alors elle est perpendiculaire à l'autre.",
              "Donc (d3) ⊥ (d2).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "ABCD est un rectangle (ses quatre angles sont droits et ses côtés opposés sont parallèles). Écrivez, avec les symboles ⊥ et //, deux couples de droites parallèles et quatre couples de droites perpendiculaires formés par ses côtés.",
              hint: "Dessinez le rectangle à main levée en nommant les sommets dans l'ordre, puis regardez chaque sommet : chacun donne un angle droit.",
              solution: [
                "Les côtés opposés sont parallèles : (AB) // (DC) et (AD) // (BC).",
                "Chaque sommet est un angle droit : en A, (AB) ⊥ (AD) ; en B, (BA) ⊥ (BC) ; en C, (CB) ⊥ (CD) ; en D, (DC) ⊥ (DA).",
              ],
            },
            {
              level: 2,
              statement: "On sait que (d1) // (d2) et (d3) ⊥ (d1). On trace ensuite une droite (d4) telle que (d4) ⊥ (d3). a) Que peut-on dire de (d3) et (d2) ? b) Que peut-on dire de (d4) et (d1) ? Rédigez chaque justification.",
              hint: "Utilisez d'abord la propriété 2 pour (d3) et (d2), puis la propriété 1 avec deux droites perpendiculaires à (d3).",
              solution: [
                "a) On sait que (d1) // (d2) et (d3) ⊥ (d1). Or, si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre. Donc (d3) ⊥ (d2).",
                "b) On sait que (d1) ⊥ (d3) et (d4) ⊥ (d3). Or, si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles. Donc (d4) // (d1).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Cinq droites (a), (b), (c), (d) et (e) vérifient : (a) ⊥ (b) ; (c) ⊥ (b) ; (c) // (d) ; (e) ⊥ (d). Déterminez la position de (a) par rapport à (c), de (a) par rapport à (d), de (e) par rapport à (c) et de (e) par rapport à (b). Justifiez chaque étape.",
              hint: "Avancez pas à pas, en utilisant chaque résultat obtenu comme une nouvelle donnée. Une figure à main levée aide beaucoup.",
              solution: [
                "(a) ⊥ (b) et (c) ⊥ (b). Or deux droites perpendiculaires à une même droite sont parallèles. Donc (a) // (c).",
                "(a) // (c) et (d) // (c). Or deux droites parallèles à une même droite sont parallèles entre elles. Donc (a) // (d).",
                "(c) // (d) et (e) ⊥ (d). Or, si deux droites sont parallèles, toute perpendiculaire à l'une est perpendiculaire à l'autre. Donc (e) ⊥ (c).",
                "(e) ⊥ (c) et (b) ⊥ (c). Or deux droites perpendiculaires à une même droite sont parallèles. Donc (e) // (b).",
                "Bilan : (a) // (c), (a) // (d), (e) ⊥ (c) et (e) // (b).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les droites parallèles et perpendiculaires.",
            statements: [
              { text: "Deux droites qui ne se coupent pas sur la feuille sont forcément parallèles.", true: false, why: "Elles peuvent se couper plus loin, en dehors de la feuille : il faut le vérifier ou le justifier." },
              { text: "Deux droites perpendiculaires à une même droite sont parallèles.", true: true, why: "C'est la propriété 1, utilisée pour tracer une parallèle avec l'équerre." },
              { text: "Deux droites perpendiculaires forment quatre angles droits.", true: true, why: "Si l'un des angles est droit, les trois autres le sont aussi." },
              { text: "Deux droites sécantes sont toujours perpendiculaires.", true: false, why: "Elles ne sont perpendiculaires que si elles forment un angle droit." },
              { text: "Si (d1) // (d2) et (d3) ⊥ (d1), alors (d3) ⊥ (d2).", true: true, why: "C'est la propriété 2 : une perpendiculaire à l'une de deux parallèles est perpendiculaire à l'autre." },
              { text: "La distance d'un point à une droite se mesure le long de n'importe quel segment qui les relie.", true: false, why: "Elle se mesure le long de la perpendiculaire : c'est le plus court chemin." },
              { text: "Le symbole ⊥ signifie « est perpendiculaire à ».", true: true, why: "Le symbole // signifie, lui, « est parallèle à »." },
            ],
          },
          quiz: [
            { q: "Que signifie (d) // (d') ?", options: ["(d) est perpendiculaire à (d')", "(d) et (d') sont parallèles", "(d) et (d') sont sécantes", "(d) coupe (d') en son milieu"], answer: 1, why: "Le symbole // se lit « est parallèle à »." },
            { q: "(a) ⊥ (c) et (b) ⊥ (c). Que peut-on en déduire ?", options: ["(a) ⊥ (b)", "(a) et (b) sont sécantes", "(a) // (b)", "rien du tout"], answer: 2, why: "Deux droites perpendiculaires à une même droite sont parallèles." },
            { q: "Avec quel instrument vérifie-t-on que deux droites sont perpendiculaires ?", options: ["l'équerre", "le compas", "le rapporteur seulement", "la règle graduée seule"], answer: 0, why: "L'équerre possède un angle droit : on la place le long d'une droite pour vérifier l'autre." },
            { q: "(d1) // (d2) et (d3) // (d2). Que peut-on dire de (d1) et (d3) ?", options: ["elles sont perpendiculaires", "on ne peut rien dire", "elles sont sécantes en un point", "elles sont parallèles"], answer: 3, why: "Deux droites parallèles à une même droite sont parallèles entre elles." },
            { q: "H est le pied de la perpendiculaire à (d) passant par A, et AH = 4 cm. M est un autre point de (d). Que peut-on dire de AM ?", options: ["AM vaut exactement 4 cm", "AM est plus grand que 4 cm", "AM est plus petit que 4 cm"], answer: 1, why: "AH est la plus courte distance entre A et un point de (d) : tout autre point M de (d) est plus loin." },
          ],
          trap: "Conclure que deux droites sont parallèles ou perpendiculaires parce qu'elles en ont l'air sur le dessin, sans vérification aux instruments ni justification par une propriété.",
          method: "Faites une figure à main levée, codez les angles droits, puis rédigez chaque justification en trois temps : « On sait que... », « Or... » (la propriété), « Donc... ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cercle-disque',
          title: 'Le cercle et le disque',
          minutes: 30,
          objectives: [
            "Connaître la définition du cercle comme ensemble des points situés à une même distance du centre.",
            "Utiliser le vocabulaire : centre, rayon, diamètre, corde, arc, disque.",
            "Tracer un cercle avec le compas, connaissant son centre et son rayon ou son diamètre.",
            "Utiliser le compas pour placer des points situés à des distances données.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un cercle ?",
              paragraphs: [
                "Le cercle de centre O et de rayon 3 cm est formé de tous les points situés exactement à 3 cm du point O. On le trace avec le compas : on écarte le compas de 3 cm, on pique la pointe en O et on fait tourner la mine.",
                "Un point situé à moins de 3 cm de O est à l'intérieur du cercle ; un point situé à plus de 3 cm de O est à l'extérieur. Ainsi, pour savoir si un point appartient à un cercle, il suffit de mesurer sa distance au centre.",
              ],
              box: { label: "Définition", text: "Le cercle de centre O et de rayon r est formé de tous les points situés à la distance r du point O. Si un point M appartient à ce cercle, alors OM = r." },
            },
            {
              heading: "Le vocabulaire du cercle",
              paragraphs: [
                "Un rayon est un segment qui joint le centre à un point du cercle, par exemple [OA] si A est sur le cercle. Le mot rayon désigne aussi sa longueur : on dit « le rayon mesure 3 cm ».",
                "Une corde est un segment qui joint deux points du cercle. Un diamètre est une corde qui passe par le centre. Le mot diamètre désigne aussi sa longueur, qui vaut le double du rayon : D = 2 × r. Inversement, r = D ÷ 2. Le diamètre est la plus longue corde du cercle.",
                "Un arc de cercle est une portion de cercle comprise entre deux de ses points. Par exemple, si A et B sont deux points du cercle, ils le partagent en deux arcs. Si [AB] est un diamètre, ces deux arcs sont des demi-cercles.",
              ],
              box: { label: "Formule", text: "Diamètre = 2 × rayon, et rayon = diamètre ÷ 2. Exemple : un cercle de rayon 4 cm a un diamètre de 8 cm." },
            },
            {
              heading: "Le cercle et le disque",
              paragraphs: [
                "Il ne faut pas confondre le cercle et le disque. Le cercle est une ligne : c'est le trait laissé par la mine du compas. Le disque de centre O et de rayon r est la surface formée par le cercle et tout son intérieur, c'est-à-dire tous les points situés à une distance de O inférieure ou égale à r.",
                "Une image pour s'en souvenir : le bord d'une assiette ronde est un cercle, et toute l'assiette, avec sa surface, est un disque. Un point situé à 2 cm du centre d'un cercle de rayon 3 cm n'est pas sur le cercle, mais il appartient au disque.",
              ],
            },
            {
              heading: "Utiliser le compas",
              paragraphs: [
                "Pour tracer un cercle dont on connaît le diamètre, on calcule d'abord le rayon. Pour tracer le cercle de diamètre [AB], on place le milieu I de [AB] : c'est le centre, et le rayon vaut AB ÷ 2. On pique en I et on ouvre le compas jusqu'à A.",
                "Le compas permet aussi de trouver les points situés à une distance donnée de deux points. Les points situés à 4 cm de A sont sur le cercle de centre A et de rayon 4 cm ; ceux situés à 3 cm de B sont sur le cercle de centre B et de rayon 3 cm. Les points qui vérifient les deux conditions sont les points d'intersection des deux cercles.",
              ],
            },
          ],
          keyPoints: [
            "Le cercle de centre O et de rayon r est formé des points M tels que OM = r.",
            "Rayon : du centre à un point du cercle. Corde : entre deux points du cercle. Diamètre : corde passant par le centre.",
            "D = 2 × r et r = D ÷ 2 ; le diamètre est la plus longue corde.",
            "Le cercle est une ligne ; le disque est la surface formée par le cercle et son intérieur.",
            "Pour le cercle de diamètre [AB], le centre est le milieu de [AB].",
          ],
          example: {
            statement: "Le cercle (C) a pour centre O et pour rayon 3 cm. On a OA = 3 cm, OB = 2,5 cm et OC = 4 cm. a) Situez les points A, B et C par rapport au cercle et au disque. b) Quelle est la longueur d'un diamètre de (C) ?",
            solution: [
              "a) OA = 3 cm, égal au rayon : A appartient au cercle (et donc au disque).",
              "OB = 2,5 cm, moins que le rayon : B est à l'intérieur du cercle. Il n'est pas sur le cercle, mais il appartient au disque.",
              "OC = 4 cm, plus que le rayon : C est à l'extérieur ; il n'appartient ni au cercle ni au disque.",
              "b) D = 2 × r = 2 × 3 = 6 cm. Un diamètre de (C) mesure 6 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez : a) un cercle de diamètre 9 cm a un rayon de ... ; b) un cercle de rayon 7,5 cm a un diamètre de ... ; c) un cercle de rayon 2,4 cm a un diamètre de ... ; d) un cercle de diamètre 13 cm a un rayon de ...",
              hint: "Le diamètre est le double du rayon ; le rayon est la moitié du diamètre.",
              solution: [
                "a) r = 9 ÷ 2 = 4,5 cm.",
                "b) D = 2 × 7,5 = 15 cm.",
                "c) D = 2 × 2,4 = 4,8 cm.",
                "d) r = 13 ÷ 2 = 6,5 cm.",
              ],
            },
            {
              level: 2,
              statement: "On trace un segment [AB] de 6 cm, puis le cercle (C) de diamètre [AB]. On place un point M sur (C), différent de A et de B. a) Où se trouve le centre I de (C) ? b) Donnez les longueurs IA, IB et IM. c) [AM] est-il une corde ? Un diamètre ? Justifiez.",
              hint: "Le centre d'un cercle de diamètre [AB] est le milieu de [AB].",
              solution: [
                "a) Le centre I est le milieu du segment [AB].",
                "b) Le rayon vaut 6 ÷ 2 = 3 cm. Comme A, B et M sont sur le cercle : IA = IB = IM = 3 cm.",
                "c) A et M sont deux points du cercle : [AM] est une corde.",
                "Le seul diamètre passant par A est [AB], car il doit passer par le centre I. Comme M est différent de B, [AM] ne passe pas par I : ce n'est pas un diamètre (et AM est plus petit que 6 cm).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur une carte au trésor, 1 cm représente 1 km. Le puits P et l'arbre T sont distants de 5 km. Le trésor est enterré à 3 km du puits et à 4 km de l'arbre (données fictives). a) Expliquez comment trouver sur la carte les emplacements possibles du trésor. Combien y en a-t-il ? b) Si le puits et l'arbre étaient distants de 8 km, que se passerait-il ?",
              hint: "Les points situés à 3 km du puits forment un cercle. Faites de même pour l'arbre.",
              solution: [
                "a) Le trésor est à 3 km du puits : il est sur le cercle de centre P et de rayon 3 cm. Il est à 4 km de l'arbre : il est sur le cercle de centre T et de rayon 4 cm.",
                "On trace [PT] de 5 cm, puis les deux cercles. Ils se coupent en deux points, situés de part et d'autre de la droite (PT).",
                "Il y a donc deux emplacements possibles pour le trésor.",
                "b) Sur le segment [PT] de 8 cm, le premier cercle s'arrête à 3 cm de P et le second à 4 cm de T. Comme 3 + 4 = 7, il reste un écart de 1 cm entre eux : les cercles ne se rencontrent pas.",
                "Aucun point ne vérifierait les deux conditions : les indices seraient impossibles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du vocabulaire du cercle à sa définition.",
            pairs: [
              { left: "Centre", right: "point situé à la même distance de tous les points du cercle" },
              { left: "Rayon", right: "segment qui joint le centre à un point du cercle" },
              { left: "Corde", right: "segment qui joint deux points du cercle" },
              { left: "Diamètre", right: "corde qui passe par le centre" },
              { left: "Arc", right: "portion de cercle comprise entre deux de ses points" },
              { left: "Disque", right: "surface formée par le cercle et son intérieur" },
            ],
          },
          quiz: [
            { q: "Un cercle a un rayon de 6 cm. Quelle est la longueur de son diamètre ?", options: ["3 cm", "12 cm", "6 cm", "36 cm"], answer: 1, why: "Le diamètre est le double du rayon : 2 × 6 = 12 cm." },
            { q: "Le point M est à 5 cm du centre d'un cercle de rayon 4 cm. Où est M ?", options: ["sur le cercle", "à l'intérieur du disque", "à l'extérieur du cercle"], answer: 2, why: "5 cm est plus grand que le rayon (4 cm) : M est à l'extérieur." },
            { q: "Quelle est la plus longue corde d'un cercle ?", options: ["un rayon", "un arc", "une corde qui ne passe pas par le centre", "un diamètre"], answer: 3, why: "Un diamètre est une corde qui passe par le centre ; c'est la plus longue de toutes." },
            { q: "Quelle différence y a-t-il entre un cercle et un disque ?", options: ["le cercle est la ligne, le disque la surface", "aucune, ce sont deux mots pour la même figure", "le disque est plus petit que le cercle"], answer: 0, why: "Le cercle est le trait du compas ; le disque est la surface délimitée par ce trait, bord compris." },
            { q: "Pour tracer le cercle de diamètre [AB], où place-t-on la pointe du compas ?", options: ["en A", "au milieu de [AB]", "en B", "n'importe où sur [AB]"], answer: 1, why: "Le centre du cercle de diamètre [AB] est le milieu de [AB]." },
          ],
          trap: "Ouvrir le compas de la longueur du diamètre au lieu de celle du rayon : le cercle obtenu est alors deux fois trop grand. Autre erreur : confondre le cercle (une ligne) et le disque (une surface).",
          method: "Avant de tracer, écrivez le rayon : si l'énoncé donne le diamètre, calculez r = D ÷ 2. Après le tracé, mesurez un diamètre à la règle pour vérifier.",
        },
      ],
    },

    /* ================================================================== */
    /* CALCULER AVEC LES NOMBRES DÉCIMAUX                                   */
    /* ================================================================== */
    {
      id: 'calcul-decimaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'addition-soustraction',
          title: 'Additionner et soustraire des décimaux',
          minutes: 30,
          objectives: [
            "Calculer la somme et la différence de deux nombres décimaux, mentalement, en ligne et en posant l'opération.",
            "Utiliser les propriétés de l'addition pour calculer de façon astucieuse.",
            "Vérifier un résultat par une opération inverse ou un ordre de grandeur.",
          ],
          course: [
            {
              heading: "Le vocabulaire et les propriétés de l'addition",
              paragraphs: [
                "Le résultat d'une addition s'appelle une somme ; les nombres que l'on additionne sont les termes. Le résultat d'une soustraction s'appelle une différence. Dans 12,5 + 3,2 = 15,7, la somme de 12,5 et 3,2 est 15,7 ; dans 12,5 - 3,2 = 9,3, la différence entre 12,5 et 3,2 est 9,3.",
                "Dans une addition, on peut changer l'ordre des termes et les regrouper comme on veut sans changer le résultat. C'est très utile pour calculer mentalement : 2,7 + 4,6 + 3,3 = (2,7 + 3,3) + 4,6 = 6 + 4,6 = 10,6. On cherche des termes qui « vont bien ensemble », par exemple ceux dont la somme est un nombre entier.",
                "Attention : ce n'est pas vrai pour la soustraction. 10 - 4 = 6, mais 4 - 10 ne donne pas 6. Dans une soustraction, l'ordre des nombres compte.",
              ],
              box: { label: "Propriété", text: "Dans une somme, on peut changer l'ordre des termes et les regrouper différemment sans changer le résultat. Ce n'est pas le cas pour une différence." },
            },
            {
              heading: "Poser une addition",
              paragraphs: [
                "Pour poser une addition de nombres décimaux, on écrit les nombres les uns sous les autres en alignant les virgules : ainsi les unités sont sous les unités, les dixièmes sous les dixièmes, et ainsi de suite. On peut compléter avec des zéros pour avoir le même nombre de chiffres après la virgule.",
                "On calcule ensuite colonne par colonne, de droite à gauche, en n'oubliant pas les retenues, et on place la virgule du résultat sous les autres virgules. Exemple : 37,8 + 5,46. On écrit 37,80 au-dessus de 5,46. Centièmes : 0 + 6 = 6. Dixièmes : 8 + 4 = 12, on écrit 2 et on retient 1. Unités : 7 + 5 + 1 = 13, on écrit 3 et on retient 1. Dizaines : 3 + 1 = 4. Résultat : 43,26.",
              ],
              box: { label: "Règle", text: "Pour poser une addition ou une soustraction de décimaux, on aligne les virgules (chiffres de même rang les uns sous les autres), on complète avec des zéros si besoin, et la virgule du résultat se place sous les autres." },
            },
            {
              heading: "Poser une soustraction",
              paragraphs: [
                "Pour une soustraction, on écrit le plus grand nombre en haut et on aligne aussi les virgules. Ici, les zéros ajoutés sont indispensables pour ne pas oublier de colonne. Exemple : 12 - 4,75 s'écrit 12,00 - 4,75.",
                "On calcule colonne par colonne en partant de la droite. Quand le chiffre du haut est trop petit, on ajoute 10 à ce chiffre et on ajoute une retenue de 1 au chiffre du bas de la colonne suivante. On trouve 12 - 4,75 = 7,25.",
                "On vérifie toujours une soustraction par une addition : si 12 - 4,75 = 7,25, alors 7,25 + 4,75 doit redonner 12. C'est bien le cas.",
              ],
            },
            {
              heading: "Calculer mentalement et en ligne",
              paragraphs: [
                "Quelques astuces de calcul mental : pour ajouter 9,9, on ajoute 10 puis on retire 0,1 (15,6 + 9,9 = 25,6 - 0,1 = 25,5). Pour retirer 1,98, on retire 2 puis on ajoute 0,02. Les compléments à l'unité sont à connaître : 0,4 + 0,6 = 1 ; 0,25 + 0,75 = 1 ; 0,1 + 0,9 = 1.",
                "Pour un calcul de monnaie, on peut aussi compter « en avançant » : pour aller de 6,30 € à 10 €, on ajoute 0,70 € pour atteindre 7 €, puis 3 € pour atteindre 10 € ; le complément est 3,70 €. C'est ainsi que les commerçants rendent souvent la monnaie.",
                "Avant de poser un calcul, il est utile d'estimer le résultat avec des nombres arrondis : 37,8 + 5,46 est proche de 38 + 5 = 43. Le résultat 43,26 est donc vraisemblable, alors qu'un résultat comme 91,8 serait forcément faux.",
              ],
            },
          ],
          keyPoints: [
            "Somme : résultat d'une addition ; différence : résultat d'une soustraction.",
            "Pour poser, on aligne les virgules et on complète avec des zéros : 12 - 4,75 s'écrit 12,00 - 4,75.",
            "Dans une addition, on peut changer l'ordre et regrouper les termes ; pas dans une soustraction.",
            "Ajouter 9,9, c'est ajouter 10 puis retirer 0,1.",
            "On vérifie une soustraction par une addition, et tout calcul par un ordre de grandeur.",
          ],
          example: {
            statement: "Léo achète un livre à 12,90 € et un stylo à 3,45 €. Il paie avec un billet de 20 €. Combien la vendeuse doit-elle lui rendre ?",
            solution: [
              "On calcule d'abord le prix total : 12,90 + 3,45. En alignant les virgules : centièmes 0 + 5 = 5 ; dixièmes 9 + 4 = 13, on écrit 3 et on retient 1 ; unités 2 + 3 + 1 = 6 ; dizaines 1. Total : 16,35 €.",
              "On calcule ensuite la monnaie : 20 - 16,35 = 20,00 - 16,35 = 3,65 €.",
              "Vérification : 16,35 + 3,65 = 20. Ordre de grandeur : 13 + 3 = 16, et 20 - 16 = 4, proche de 3,65.",
              "La vendeuse doit rendre 3,65 € à Léo.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Posez et effectuez : a) 245,7 + 38,56 ; b) 63,2 - 7,48 ; c) 100 - 37,05.",
              hint: "Alignez les virgules et complétez avec des zéros pour que les deux nombres aient autant de chiffres après la virgule.",
              solution: [
                "a) 245,70 + 38,56 = 284,26.",
                "b) 63,20 - 7,48 = 55,72. Vérification : 55,72 + 7,48 = 63,20.",
                "c) 100,00 - 37,05 = 62,95. Vérification : 62,95 + 37,05 = 100.",
              ],
            },
            {
              level: 2,
              statement: "Calculez mentalement en choisissant une méthode astucieuse, et expliquez-la : a) 4,8 + 7,3 + 5,2 ; b) 15,6 + 9,9 ; c) 23,4 - 1,9 ; d) 0,25 + 3,6 + 0,75 + 1,4.",
              hint: "Cherchez des termes dont la somme est un nombre entier, et remplacez 9,9 ou 1,9 par un nombre rond.",
              solution: [
                "a) On regroupe 4,8 et 5,2 : (4,8 + 5,2) + 7,3 = 10 + 7,3 = 17,3.",
                "b) 15,6 + 10 - 0,1 = 25,6 - 0,1 = 25,5.",
                "c) 23,4 - 2 + 0,1 = 21,4 + 0,1 = 21,5.",
                "d) (0,25 + 0,75) + (3,6 + 1,4) = 1 + 5 = 6.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un carré magique, la somme des trois nombres de chaque ligne, de chaque colonne et de chaque diagonale est la même. Complétez ce carré magique. Ligne 1 : 1,2 ; ? ; 1,6. Ligne 2 : ? ; 1,5 ; ?. Ligne 3 : 1,4 ; ? ; 1,8.",
              hint: "Commencez par une ligne, une colonne ou une diagonale déjà complète : elle donne la somme magique.",
              solution: [
                "La diagonale 1,2 ; 1,5 ; 1,8 est complète : la somme magique est 1,2 + 1,5 + 1,8 = 4,5.",
                "Ligne 1 : 4,5 - 1,2 - 1,6 = 1,7. Colonne 1 : 4,5 - 1,2 - 1,4 = 1,9.",
                "Ligne 2 : 4,5 - 1,9 - 1,5 = 1,1. Ligne 3 : 4,5 - 1,4 - 1,8 = 1,3.",
                "Vérification : colonne 2 : 1,7 + 1,5 + 1,3 = 4,5 ; colonne 3 : 1,6 + 1,1 + 1,8 = 4,5 ; autre diagonale : 1,6 + 1,5 + 1,4 = 4,5.",
                "Carré complété : ligne 1 : 1,2 ; 1,7 ; 1,6. Ligne 2 : 1,9 ; 1,5 ; 1,1. Ligne 3 : 1,4 ; 1,3 ; 1,8.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur l'addition et la soustraction des décimaux.",
            statements: [
              { text: "Pour poser une addition de décimaux, on aligne les chiffres de droite.", true: false, why: "On aligne les virgules, pour que les chiffres de même rang soient les uns sous les autres." },
              { text: "12 - 4,75 = 7,25", true: true, why: "On vérifie : 7,25 + 4,75 = 12." },
              { text: "3,5 + 2,8 = 5,13", true: false, why: "5 dixièmes + 8 dixièmes = 13 dixièmes = 1,3 : le résultat est 6,3." },
              { text: "On peut changer l'ordre des termes d'une addition sans changer le résultat.", true: true, why: "Par exemple 2,5 + 7 = 7 + 2,5 = 9,5." },
              { text: "On peut changer l'ordre des nombres d'une soustraction sans changer le résultat.", true: false, why: "10 - 4 = 6, mais 4 - 10 ne donne pas 6." },
              { text: "Ajouter 9,9 revient à ajouter 10 puis à retirer 0,1.", true: true, why: "Car 9,9 = 10 - 0,1." },
              { text: "Pour vérifier que 15,2 - 6,7 = 8,5, on peut calculer 8,5 + 6,7.", true: true, why: "8,5 + 6,7 = 15,2 : la soustraction est juste." },
            ],
          },
          quiz: [
            { q: "Combien vaut 7,6 + 2,57 ?", options: ["9,83", "10,17", "9,13", "10,07"], answer: 1, why: "7,60 + 2,57 = 10,17 : 6 + 5 = 11 dixièmes, on écrit 1 et on retient 1." },
            { q: "Combien vaut 10 - 3,6 ?", options: ["7,4", "13,6", "7,6", "6,4"], answer: 3, why: "10,0 - 3,6 = 6,4. Vérification : 6,4 + 3,6 = 10." },
            { q: "Combien vaut 3,7 + 8,9 + 6,3 ?", options: ["18,9", "17,9", "18,8", "19,9"], answer: 0, why: "On regroupe 3,7 + 6,3 = 10, puis 10 + 8,9 = 18,9." },
            { q: "Pour poser 45,3 - 8,76, que faut-il écrire ?", options: ["8,76 au-dessus de 45,3", "45,3 et 8,76 alignés à droite sur le 3 et le 6", "45,30 au-dessus de 8,76, virgules alignées"], answer: 2, why: "Le plus grand nombre en haut, les virgules alignées, et un zéro pour avoir deux décimales." },
            { q: "Que reste-t-il d'un billet de 50 € après un achat de 23,85 € ?", options: ["27,25 €", "26,15 €", "27,15 €", "26,25 €"], answer: 1, why: "50,00 - 23,85 = 26,15. Vérification : 26,15 + 23,85 = 50." },
          ],
          trap: "Aligner les nombres sur la droite au lieu d'aligner les virgules : on additionne alors des dixièmes avec des centièmes, et le résultat est faux (par exemple 37,8 + 5,46 donnerait 9,26 ou 42,26 au lieu de 43,26).",
          method: "Avant de poser, estimez le résultat avec des nombres arrondis. Après le calcul, vérifiez une soustraction par une addition : vous repérez ainsi les erreurs de virgule ou de retenue.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'multiplication-decimaux',
          title: 'Multiplier des décimaux et estimer un ordre de grandeur',
          minutes: 35,
          objectives: [
            "Multiplier un nombre décimal par 10, 100 ou 1 000.",
            "Calculer le produit de deux nombres décimaux en posant l'opération.",
            "Estimer un ordre de grandeur d'un produit pour contrôler un résultat.",
          ],
          course: [
            {
              heading: "Multiplier par 10, 100 ou 1 000",
              paragraphs: [
                "Le résultat d'une multiplication s'appelle un produit ; les nombres multipliés sont les facteurs. Multiplier un nombre par 10, c'est le rendre dix fois plus grand : chaque chiffre prend une valeur dix fois plus grande, il se décale d'un rang vers la gauche. 3,57 × 10 = 35,7 : les 3 unités deviennent 3 dizaines, les 5 dixièmes deviennent 5 unités.",
                "De même, multiplier par 100 décale chaque chiffre de deux rangs vers la gauche, et multiplier par 1 000 de trois rangs : 3,57 × 100 = 357 et 3,57 × 1 000 = 3 570. Quand il manque des chiffres, on complète par des zéros, comme dans 3 570.",
              ],
              box: { label: "Règle", text: "Multiplier par 10, 100 ou 1 000 décale chaque chiffre de 1, 2 ou 3 rangs vers la gauche. Exemple : 4,08 × 100 = 408 et 2,5 × 1 000 = 2 500." },
            },
            {
              heading: "Le produit de deux décimaux",
              paragraphs: [
                "Pour multiplier deux nombres décimaux, on pose la multiplication sans tenir compte des virgules et on calcule comme avec des nombres entiers. Ensuite, on compte le nombre total de chiffres après la virgule dans les deux facteurs : le produit en a autant. On place la virgule en comptant à partir de la droite.",
                "Exemple : 2,3 × 1,4. On calcule 23 × 14 = 322. Il y a un chiffre après la virgule dans 2,3 et un dans 1,4, soit deux en tout : 2,3 × 1,4 = 3,22. Pourquoi ? Car 2,3 = 23 dixièmes et 1,4 = 14 dixièmes ; des dixièmes multipliés par des dixièmes donnent des centièmes : 322 centièmes, soit 3,22.",
                "On compte les décimales avant de supprimer les zéros inutiles : 2,5 × 0,4 donne 25 × 4 = 100, avec deux décimales, donc 1,00, c'est-à-dire 1. Ainsi, multiplier par 0,1 rend un nombre dix fois plus petit : 45 × 0,1 = 4,5.",
              ],
              box: { label: "Règle", text: "Pour multiplier deux décimaux : on calcule le produit sans les virgules, puis on place la virgule de sorte que le résultat ait autant de chiffres après la virgule que les deux facteurs réunis." },
            },
            {
              heading: "Estimer un ordre de grandeur",
              paragraphs: [
                "Un ordre de grandeur est une valeur approchée simple d'un résultat, obtenue en remplaçant chaque nombre par un nombre proche, facile à calculer de tête. Pour 4,87 × 19,6, on prend 5 × 20 = 100. Le résultat exact, 95,452, est bien proche de 100.",
                "L'ordre de grandeur sert surtout à contrôler la position de la virgule. Si l'on avait trouvé 954,52 ou 9,5452 pour 4,87 × 19,6, on saurait tout de suite qu'il y a une erreur, car ces nombres sont loin de 100.",
              ],
            },
            {
              heading: "Une multiplication peut rendre plus petit",
              paragraphs: [
                "Avec les nombres entiers, une multiplication (par un nombre plus grand que 1) agrandit toujours. Ce n'est plus vrai avec les décimaux : multiplier par un nombre plus petit que 1 rend le résultat plus petit. Par exemple, 8 × 0,5 = 4, la moitié de 8.",
                "Exemple concret : 0,5 kg de cerises à 8 € le kilogramme coûte 8 × 0,5 = 4 €, moins que 8 €, ce qui est logique puisqu'on achète moins d'un kilogramme.",
              ],
              box: { label: "À retenir", text: "Multiplier par un nombre plus grand que 1 agrandit ; multiplier par un nombre compris entre 0 et 1 rend plus petit : 25 × 0,8 = 20." },
            },
          ],
          keyPoints: [
            "× 10, × 100, × 1 000 : chaque chiffre se décale de 1, 2 ou 3 rangs vers la gauche.",
            "Produit de deux décimaux : on calcule sans les virgules, puis le produit a autant de décimales que les deux facteurs réunis.",
            "On compte les décimales avant de supprimer les zéros : 2,5 × 0,4 = 1,00 = 1.",
            "Un ordre de grandeur se calcule avec des nombres simples : 4,87 × 19,6 ≈ 5 × 20 = 100.",
            "Multiplier par un nombre plus petit que 1 rend plus petit : 8 × 0,5 = 4.",
          ],
          example: {
            statement: "Calculez 3,45 × 2,6 en posant l'opération, après avoir estimé un ordre de grandeur du résultat.",
            solution: [
              "Ordre de grandeur : 3,45 est proche de 3 et 2,6 est proche de 3, donc le produit est proche de 3 × 3 = 9.",
              "On calcule sans les virgules : 345 × 26 = 345 × 20 + 345 × 6 = 6 900 + 2 070 = 8 970.",
              "Il y a deux chiffres après la virgule dans 3,45 et un dans 2,6, soit trois en tout. On place la virgule : 8,970.",
              "3,45 × 2,6 = 8,97, ce qui est cohérent avec l'ordre de grandeur 9.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez mentalement : a) 4,08 × 10 ; b) 0,37 × 100 ; c) 2,5 × 1 000 ; d) 61,2 × 100.",
              hint: "Décalez chaque chiffre vers la gauche d'autant de rangs qu'il y a de zéros, et complétez par des zéros si besoin.",
              solution: [
                "a) 4,08 × 10 = 40,8.",
                "b) 0,37 × 100 = 37.",
                "c) 2,5 × 1 000 = 2 500.",
                "d) 61,2 × 100 = 6 120.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque produit, donnez un ordre de grandeur, puis posez et effectuez la multiplication : a) 12,5 × 3,4 ; b) 0,24 × 0,3 ; c) 7,06 × 15.",
              hint: "Calculez d'abord le produit des nombres sans virgule, puis comptez les chiffres après la virgule dans les deux facteurs.",
              solution: [
                "a) Ordre de grandeur : 12 × 3 = 36. Sans virgule : 125 × 34 = 4 250. Deux décimales en tout : 42,50. Donc 12,5 × 3,4 = 42,5.",
                "b) Ordre de grandeur : 0,2 × 0,3 = 0,06. Sans virgule : 24 × 3 = 72. Trois décimales en tout : 0,072. Donc 0,24 × 0,3 = 0,072.",
                "c) Ordre de grandeur : 7 × 15 = 105. Sans virgule : 706 × 15 = 10 590. Deux décimales : 105,90. Donc 7,06 × 15 = 105,9.",
                "Les trois résultats sont proches de leurs ordres de grandeur : les virgules sont bien placées.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Au marché, Jeanne achète 2,5 kg de pommes à 2,40 € le kilogramme, 1,2 kg de tomates à 3,15 € le kilogramme et 3 baguettes à 1,10 € l'une (données fictives). Elle a un billet de 15 €. a) Estimez la dépense : pouvez-vous conclure ? b) Calculez la dépense exacte et la monnaie rendue. c) Jeanne voudrait aussi 0,5 kg de fromage à 18,90 € le kilogramme. Le peut-elle avec son billet ?",
              hint: "Calculez le prix de chaque article (quantité × prix unitaire) avant de faire le total.",
              solution: [
                "a) Estimation : pommes ≈ 2,5 × 2 = 5 € ; tomates ≈ 1 × 3 = 3 € ; baguettes ≈ 3 × 1 = 3 €. Total ≈ 11 €. Comme on a arrondi tous les nombres vers le bas, la dépense réelle est un peu plus grande : il faut calculer exactement.",
                "b) Pommes : 2,5 × 2,40 = 6,00 €. Tomates : 1,2 × 3,15 = 3,78 € (12 × 315 = 3 780, trois décimales). Baguettes : 3 × 1,10 = 3,30 €.",
                "Total : 6 + 3,78 + 3,30 = 13,08 €. Monnaie : 15 - 13,08 = 1,92 €.",
                "c) Fromage : 0,5 × 18,90 = 9,45 €. Il ne lui reste que 1,92 € : elle ne peut pas acheter ce fromage (il lui faudrait 13,08 + 9,45 = 22,53 €).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque produit à son résultat.",
            pairs: [
              { left: "3,2 × 10", right: "32" },
              { left: "0,45 × 100", right: "45" },
              { left: "1,5 × 4", right: "6" },
              { left: "0,3 × 0,2", right: "0,06" },
              { left: "2,5 × 1,2", right: "3" },
              { left: "7 × 0,01", right: "0,07" },
            ],
          },
          quiz: [
            { q: "Combien vaut 0,52 × 1 000 ?", options: ["5 200", "52", "520", "0,520"], answer: 2, why: "Chaque chiffre se décale de trois rangs vers la gauche : 0,52 × 1 000 = 520." },
            { q: "Combien vaut 0,4 × 0,3 ?", options: ["1,2", "0,12", "0,7", "0,012"], answer: 1, why: "4 × 3 = 12, et il faut deux chiffres après la virgule : 0,12." },
            { q: "Quel est un bon ordre de grandeur de 9,8 × 31,2 ?", options: ["300", "30", "3 000", "3"], answer: 0, why: "9,8 est proche de 10 et 31,2 de 30 : 10 × 30 = 300." },
            { q: "On sait que 236 × 14 = 3 304. Combien vaut 2,36 × 1,4 ?", options: ["33,04", "330,4", "0,3304", "3,304"], answer: 3, why: "Deux décimales dans 2,36 et une dans 1,4 : le produit en a trois, 3,304." },
            { q: "Que peut-on dire de 25 × 0,8 ?", options: ["c'est plus grand que 25", "c'est plus petit que 25", "c'est égal à 25"], answer: 1, why: "On multiplie par un nombre plus petit que 1 : le résultat (20) est plus petit que 25." },
          ],
          trap: "Aligner les virgules comme dans une addition, ou placer la virgule du produit en ne comptant que les décimales d'un seul facteur. Autre erreur : croire qu'une multiplication donne toujours un résultat plus grand.",
          method: "Calculez toujours un ordre de grandeur avant de poser la multiplication, puis comparez : si la virgule est mal placée, le résultat sera dix ou cent fois trop grand ou trop petit, et vous le verrez tout de suite.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'problemes-schemas',
          title: 'Résoudre un problème à étapes avec un schéma en barres',
          minutes: 35,
          objectives: [
            "Modéliser une situation par un schéma en barres (partie et tout, comparaison, parts égales).",
            "Résoudre un problème à plusieurs étapes en organisant les calculs intermédiaires.",
            "Rédiger une solution : calculs accompagnés de phrases, vérification et phrase réponse.",
          ],
          course: [
            {
              heading: "Le schéma en barres : partie et tout",
              paragraphs: [
                "Un schéma en barres représente les quantités d'un problème par des rectangles, appelés barres. Il permet de « voir » le problème avant de calculer. Les longueurs n'ont pas besoin d'être exactes, mais une grande quantité doit être dessinée plus longue qu'une petite. On écrit un point d'interrogation sur ce que l'on cherche.",
                "Dans le modèle partie et tout, une longue barre représente le tout, et elle est découpée en morceaux qui représentent les parties. Exemple : une classe a 28 élèves, dont 15 filles. On dessine une barre « 28 élèves » coupée en deux morceaux : « 15 filles » et « ? garçons ». Le schéma montre que l'on cherche une partie : 28 - 15 = 13 garçons.",
              ],
              box: { label: "À retenir", text: "Partie et tout : tout = partie + partie. Pour trouver une partie inconnue, on soustrait l'autre partie du tout." },
            },
            {
              heading: "Le schéma de comparaison",
              paragraphs: [
                "Pour comparer deux quantités, on dessine deux barres l'une sous l'autre, alignées à gauche. La différence entre leurs longueurs représente l'écart. Exemple : Hugo mesure 1,48 m et sa sœur 0,27 m de moins. La barre de la sœur est plus courte que celle d'Hugo de 0,27 m : sa taille est 1,48 - 0,27 = 1,21 m.",
                "Les expressions « de plus » et « de moins » se traduisent par un écart entre deux barres. Mais attention, elles ne disent pas toujours s'il faut additionner ou soustraire : seul le schéma permet de le savoir sans se tromper.",
              ],
            },
            {
              heading: "Le schéma des parts égales",
              paragraphs: [
                "Quand une quantité vaut « 3 fois plus » qu'une autre, on dessine la petite quantité par une barre d'une part, et la grande par une barre de 3 parts identiques. Exemple : Lou a 12 € et Sami a 3 fois plus. La barre de Sami contient 3 parts de 12 € : il a 3 × 12 = 36 €. Ensemble, ils ont 4 parts, soit 48 €.",
                "Le schéma aide aussi à partager. Si on sait seulement qu'ensemble ils ont 48 € et que Sami a 3 fois plus que Lou, le schéma montre 4 parts égales en tout : une part vaut 48 ÷ 4 = 12 €. Lou a 12 € et Sami 36 €.",
              ],
            },
            {
              heading: "Résoudre un problème à étapes",
              paragraphs: [
                "Un problème à étapes demande plusieurs calculs : la réponse à une première question cachée sert à répondre à la suivante. Il faut donc repérer la question finale, puis se demander : « que faut-il savoir d'abord ? ». Chaque étape peut avoir son propre schéma.",
                "Une solution bien rédigée contient, pour chaque étape, une phrase qui dit ce que l'on calcule, le calcul et son résultat avec l'unité. On termine par une vérification (le résultat est-il vraisemblable ?) et par une phrase réponse qui reprend les mots de la question.",
              ],
              box: { label: "Repère", text: "1. Lire l'énoncé et repérer la question. 2. Faire un schéma en barres avec un « ? » sur l'inconnue. 3. Chercher les étapes intermédiaires. 4. Calculer en rédigeant. 5. Vérifier. 6. Écrire la phrase réponse." },
            },
          ],
          keyPoints: [
            "Un schéma en barres représente les quantités par des rectangles ; on met un « ? » sur ce que l'on cherche.",
            "Partie et tout : tout = partie + partie ; une partie = tout - autre partie.",
            "Comparaison : deux barres l'une sous l'autre ; l'écart représente la différence.",
            "« 3 fois plus » : une barre de 3 parts égales ; ensemble, cela fait 4 parts.",
            "Dans un problème à étapes, on cherche d'abord ce qu'il faut savoir avant de répondre à la question finale.",
          ],
          example: {
            statement: "Pour la kermesse du collège, Nora vend des crêpes à 1,50 € et des jus de fruits à 0,80 €. Elle vend 24 crêpes et 15 jus. Elle avait dépensé 18,75 € pour les ingrédients (données fictives). Quel est son bénéfice ?",
            solution: [
              "Question finale : le bénéfice, c'est-à-dire ce qui reste de la recette une fois les dépenses retirées. Il faut donc d'abord connaître la recette.",
              "Étape 1, recette des crêpes : 24 × 1,50 = 36 €. Recette des jus : 15 × 0,80 = 12 €.",
              "Étape 2, recette totale (schéma partie et tout : une barre « recette » formée de 36 € et de 12 €) : 36 + 12 = 48 €.",
              "Étape 3 (schéma : la barre « recette, 48 € » est formée de « dépenses, 18,75 € » et de « bénéfice, ? ») : 48 - 18,75 = 29,25 €.",
              "Vérification : 29,25 + 18,75 = 48. Le bénéfice de Nora est de 29,25 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un livre coûte 8,60 €. Une bande dessinée coûte 4,75 € de plus que le livre. Combien coûtent le livre et la bande dessinée ensemble ? Faites un schéma.",
              hint: "Dessinez deux barres : celle de la bande dessinée est plus longue que celle du livre de 4,75 €. Calculez d'abord le prix de la bande dessinée.",
              solution: [
                "Schéma : une barre « livre, 8,60 € » ; dessous, une barre « bande dessinée » égale à celle du livre plus un morceau de 4,75 €.",
                "Prix de la bande dessinée : 8,60 + 4,75 = 13,35 €.",
                "Prix total : 8,60 + 13,35 = 21,95 €.",
                "Le livre et la bande dessinée coûtent 21,95 € ensemble.",
              ],
            },
            {
              level: 2,
              statement: "Sami a économisé 3 fois plus d'argent que sa sœur Lou. À eux deux, ils ont 84 €. Combien d'argent chacun a-t-il économisé ? Faites un schéma.",
              hint: "La barre de Lou fait une part, celle de Sami trois parts identiques. Combien de parts y a-t-il en tout ?",
              solution: [
                "Schéma : Lou, une barre d'une part ; Sami, une barre de trois parts identiques ; le tout, 84 €, couvre les deux barres.",
                "En tout, il y a 1 + 3 = 4 parts égales. Une part vaut 84 ÷ 4 = 21 €.",
                "Lou a économisé 21 € et Sami 3 × 21 = 63 €.",
                "Vérification : 21 + 63 = 84 € et 63 = 3 × 21. Lou a 21 € et Sami 63 €.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Alice, Bruno et Chloé collectent des bouchons pour une association (données fictives). Bruno en a 15 de plus qu'Alice, et Chloé en a deux fois plus qu'Alice. Ensemble, ils en ont 195. Combien de bouchons chacun a-t-il collectés ?",
              hint: "Représentez la quantité d'Alice par une part. Bruno a une part et 15 bouchons ; Chloé a deux parts. Retirez d'abord les 15 bouchons du total.",
              solution: [
                "Schéma : Alice, une part ; Bruno, une part et un petit morceau de 15 ; Chloé, deux parts. Le tout vaut 195.",
                "En tout, il y a 4 parts égales et 15 bouchons. Sans les 15 bouchons : 195 - 15 = 180 bouchons pour 4 parts.",
                "Une part vaut 180 ÷ 4 = 45 bouchons. Alice en a 45, Bruno 45 + 15 = 60, Chloé 2 × 45 = 90.",
                "Vérification : 45 + 60 + 90 = 195. Alice a collecté 45 bouchons, Bruno 60 et Chloé 90.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Lina achète 3 cahiers à 2,40 € et une trousse à 5,35 €. Elle paie avec un billet de 20 €. Remettez dans l'ordre les étapes de la résolution.",
            items: [
              "Repérer la question : combien la vendeuse rend-elle à Lina ?",
              "Calculer le prix des cahiers : 3 × 2,40 = 7,20 €",
              "Ajouter le prix de la trousse : 7,20 + 5,35 = 12,55 €",
              "Calculer la monnaie : 20 - 12,55 = 7,45 €",
              "Vérifier : 12,55 + 7,45 = 20 €",
              "Rédiger la phrase réponse : la vendeuse rend 7,45 € à Lina.",
            ],
          },
          quiz: [
            { q: "Dans un schéma « partie et tout », comment trouve-t-on une partie inconnue ?", options: ["on additionne le tout et l'autre partie", "on soustrait l'autre partie du tout", "on multiplie les deux parties"], answer: 1, why: "Le tout est la somme des parties : une partie s'obtient en retirant l'autre partie du tout." },
            { q: "Max a 12 €. Jade a 3 fois plus que Max. Combien ont-ils ensemble ?", options: ["36 €", "15 €", "48 €", "24 €"], answer: 2, why: "Jade a 3 × 12 = 36 € ; ensemble : 12 + 36 = 48 €, soit 4 parts de 12 €." },
            { q: "Une barre représente 60 €, partagée en 4 parts égales. Que vaut une part ?", options: ["15 €", "20 €", "240 €", "56 €"], answer: 0, why: "60 ÷ 4 = 15 €, car 4 × 15 = 60." },
            { q: "Un pull coûte 24,90 €. Un pantalon coûte 12,50 € de plus. Combien coûte le pantalon ?", options: ["12,40 €", "36,40 €", "37,40 €", "49,80 €"], answer: 2, why: "La barre du pantalon dépasse celle du pull de 12,50 € : 24,90 + 12,50 = 37,40 €." },
            { q: "Quelle est la première chose à faire dans un problème à étapes ?", options: ["poser un calcul avec les nombres de l'énoncé", "écrire la phrase réponse", "chercher le plus grand nombre", "repérer la question posée"], answer: 3, why: "On ne peut choisir les bons calculs qu'après avoir compris ce que l'on cherche." },
          ],
          trap: "Combiner les nombres de l'énoncé dans l'ordre où ils apparaissent sans comprendre la situation, par exemple répondre 3 × 12 = 36 € quand on demande ce que deux personnes ont ensemble, alors qu'il faut aussi ajouter la part de la première.",
          method: "Dessinez le schéma en barres avant tout calcul et placez un « ? » sur la quantité cherchée. Puis écrivez une phrase avant chaque calcul : « Je calcule le prix des cahiers. » Vous verrez ainsi s'il manque une étape.",
        },
      ],
    },

    /* ================================================================== */
    /* LONGUEURS, PÉRIMÈTRES ET DURÉES                                      */
    /* ================================================================== */
    {
      id: 'longueurs-durees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'unites-longueur',
          title: 'Les unités de longueur et les conversions',
          minutes: 30,
          objectives: [
            "Connaître les unités de longueur du système métrique et les relations entre elles.",
            "Choisir l'unité adaptée pour exprimer une longueur.",
            "Convertir une longueur d'une unité dans une autre, avec un tableau ou par le calcul.",
            "Comparer et additionner des longueurs exprimées dans des unités différentes.",
          ],
          course: [
            {
              heading: "Le mètre, ses multiples et ses sous-multiples",
              paragraphs: [
                "L'unité principale de longueur est le mètre, noté m. Pour mesurer de très grandes ou de très petites longueurs, on utilise d'autres unités, construites à partir du mètre avec des préfixes. Chaque préfixe indique combien de fois l'unité est plus grande ou plus petite que le mètre.",
                "Les multiples du mètre sont plus grands que lui : le kilomètre (km) vaut 1 000 m, l'hectomètre (hm) vaut 100 m, le décamètre (dam) vaut 10 m. Les sous-multiples sont plus petits : le décimètre (dm) vaut un dixième de mètre, soit 0,1 m ; le centimètre (cm) vaut un centième de mètre, soit 0,01 m ; le millimètre (mm) vaut un millième de mètre, soit 0,001 m.",
                "Il y a un point commun très pratique : quand on passe d'une unité à l'unité voisine plus petite, on multiplie par 10. Ainsi 1 m = 10 dm, 1 dm = 10 cm et 1 cm = 10 mm. On retrouve la même organisation que dans l'écriture des nombres décimaux, où chaque rang vaut 10 fois le rang situé à sa droite.",
              ],
              box: { label: "Repère", text: "1 km = 1 000 m ; 1 hm = 100 m ; 1 dam = 10 m ; 1 m = 10 dm = 100 cm = 1 000 mm. Chaque unité vaut 10 fois l'unité située juste à sa droite dans la liste km, hm, dam, m, dm, cm, mm." },
            },
            {
              heading: "Choisir l'unité adaptée",
              paragraphs: [
                "Pour qu'une mesure soit facile à lire, on choisit une unité adaptée à l'objet mesuré. Quelques repères aident à se représenter les unités : 1 mm est l'écart entre deux petits traits d'une règle graduée ; 1 cm est à peu près la largeur d'un ongle ; 1 dm est à peu près la largeur d'une main ; 1 m correspond à un grand pas d'adulte.",
                "1 km, c'est deux fois et demie le tour d'une piste d'athlétisme de 400 m. On mesure donc l'épaisseur d'un livre en millimètres, la longueur d'un crayon en centimètres, la hauteur d'une porte en mètres, et la distance entre deux villes en kilomètres. Dire qu'un crayon mesure 0,00015 km est juste, mais très peu pratique : 15 cm est bien plus clair.",
              ],
            },
            {
              heading: "Convertir avec le tableau de conversion",
              paragraphs: [
                "Le tableau de conversion a sept colonnes : km, hm, dam, m, dm, cm, mm. Pour convertir une longueur, on écrit le nombre dans le tableau en plaçant le chiffre des unités dans la colonne de l'unité de départ, puis un seul chiffre par colonne.",
                "On place ensuite la virgule juste après la colonne de l'unité d'arrivée, et on complète par des zéros les colonnes vides si besoin. Exemple : 3,45 m en cm. Le 3 va dans la colonne m, le 4 dans la colonne dm, le 5 dans la colonne cm. La virgule se place après la colonne cm : 3,45 m = 345 cm.",
                "Autre exemple : 2 500 m en km. Le dernier 0 (le chiffre des unités) va dans la colonne m, donc le 2 arrive dans la colonne km. On place la virgule après la colonne km : 2 500 m = 2,500 km, c'est-à-dire 2,5 km. De même, 7 mm = 0,7 cm : on ajoute un zéro dans la colonne cm avant la virgule.",
              ],
            },
            {
              heading: "Convertir par le calcul",
              paragraphs: [
                "On peut aussi convertir sans tableau, en utilisant la relation entre les deux unités. Si l'on passe à une unité plus petite, il en faut davantage : on multiplie. Comme 1 km = 1 000 m, on a 4,2 km = 4,2 × 1 000 m = 4 200 m.",
                "Si l'on passe à une unité plus grande, il en faut moins : on divise. Comme 1 m = 100 cm, on a 85 cm = 85 ÷ 100 m = 0,85 m. Diviser par 10, 100 ou 1 000 décale chaque chiffre de 1, 2 ou 3 rangs vers la droite.",
                "Pour comparer ou additionner des longueurs, il faut d'abord les exprimer dans la même unité. On ne peut pas additionner directement 1,2 km et 650 m : on écrit 1,2 km = 1 200 m, puis 1 200 m + 650 m = 1 850 m.",
              ],
              box: { label: "Règle", text: "Vers une unité plus petite, le nombre devient plus grand : on multiplie par 10, 100 ou 1 000. Vers une unité plus grande, le nombre devient plus petit : on divise par 10, 100 ou 1 000. Avant de comparer ou d'additionner, on convertit dans la même unité." },
            },
          ],
          keyPoints: [
            "Les unités, de la plus grande à la plus petite : km, hm, dam, m, dm, cm, mm. Chacune vaut 10 fois la suivante.",
            "1 km = 1 000 m ; 1 m = 100 cm ; 1 m = 1 000 mm ; 1 cm = 10 mm.",
            "Dans le tableau, le chiffre des unités va dans la colonne de l'unité de départ ; la virgule se place après la colonne de l'unité d'arrivée.",
            "Unité plus petite : on multiplie (4,2 km = 4 200 m). Unité plus grande : on divise (85 cm = 0,85 m).",
            "On compare et on additionne des longueurs seulement quand elles sont dans la même unité.",
          ],
          example: {
            statement: "Pour s'entraîner, Lina court 1,2 km, puis 650 m, puis 85 dam. Quelle distance a-t-elle parcourue en tout ? Donnez le résultat en mètres, puis en kilomètres.",
            solution: [
              "Les trois longueurs ne sont pas dans la même unité : on les convertit toutes en mètres.",
              "1,2 km = 1,2 × 1 000 m = 1 200 m. 650 m reste 650 m. 85 dam = 85 × 10 m = 850 m.",
              "On additionne : 1 200 + 650 + 850 = 2 700 m.",
              "On convertit en kilomètres (unité plus grande, on divise par 1 000) : 2 700 m = 2,7 km.",
              "Lina a parcouru 2 700 m, soit 2,7 km.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertissez : a) 5,3 m en cm ; b) 2 400 m en km ; c) 75 mm en cm ; d) 0,8 km en m ; e) 46 cm en m.",
              hint: "Demandez-vous si l'unité d'arrivée est plus grande ou plus petite que l'unité de départ, puis utilisez le tableau ou multipliez et divisez par 10, 100 ou 1 000.",
              solution: [
                "a) 1 m = 100 cm, donc 5,3 m = 5,3 × 100 cm = 530 cm.",
                "b) 1 km = 1 000 m, donc 2 400 m = 2 400 ÷ 1 000 km = 2,4 km.",
                "c) 1 cm = 10 mm, donc 75 mm = 75 ÷ 10 cm = 7,5 cm.",
                "d) 0,8 km = 0,8 × 1 000 m = 800 m.",
                "e) 46 cm = 46 ÷ 100 m = 0,46 m.",
              ],
            },
            {
              level: 2,
              statement: "Rangez ces longueurs dans l'ordre croissant : 1,5 m ; 142 cm ; 0,0016 km ; 1 520 mm ; 15,3 dm.",
              hint: "Convertissez toutes les longueurs dans la même unité, par exemple en centimètres, avant de les comparer.",
              solution: [
                "On convertit tout en centimètres.",
                "1,5 m = 150 cm. 142 cm reste 142 cm. 0,0016 km = 1,6 m = 160 cm. 1 520 mm = 152 cm. 15,3 dm = 153 cm.",
                "On range les nombres : 142 < 150 < 152 < 153 < 160.",
                "Ordre croissant : 142 cm < 1,5 m < 1 520 mm < 15,3 dm < 0,0016 km.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour décorer une salle, Hugo dispose d'une bobine de ruban de 25 m (données fictives). Il coupe 12 morceaux de 85 cm et 6 morceaux de 1,2 m. a) Quelle longueur de ruban a-t-il utilisée, en mètres ? b) Quelle longueur reste-t-il sur la bobine, en mètres puis en centimètres ? c) Peut-il encore couper 8 morceaux de 45 cm ? Si oui, combien de ruban restera-t-il ?",
              hint: "Calculez séparément la longueur des petits morceaux et celle des grands, puis mettez tout dans la même unité avant d'additionner.",
              solution: [
                "a) Petits morceaux : 12 × 85 = 1 020 cm, soit 10,2 m. Grands morceaux : 6 × 1,2 = 7,2 m. Total utilisé : 10,2 + 7,2 = 17,4 m.",
                "b) Reste : 25 - 17,4 = 7,6 m, soit 7,6 × 100 = 760 cm.",
                "c) 8 morceaux de 45 cm : 8 × 45 = 360 cm. Comme 360 cm est plus petit que 760 cm, c'est possible.",
                "Il restera 760 - 360 = 400 cm, soit 4 m de ruban.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez les unités de longueur de la plus grande à la plus petite.",
            items: ["le kilomètre (km)", "l'hectomètre (hm)", "le décamètre (dam)", "le mètre (m)", "le décimètre (dm)", "le centimètre (cm)", "le millimètre (mm)"],
          },
          quiz: [
            { q: "Combien de mètres y a-t-il dans 3,7 km ?", options: ["37 m", "370 m", "3 700 m", "0,0037 m"], answer: 2, why: "1 km = 1 000 m, donc 3,7 km = 3,7 × 1 000 m = 3 700 m." },
            { q: "Quelle unité est la mieux adaptée pour mesurer la longueur d'une gomme ?", options: ["km", "cm", "dam", "hm"], answer: 1, why: "Une gomme mesure quelques centimètres : le centimètre donne un nombre simple, par exemple 5 cm." },
            { q: "Combien vaut 450 mm en mètres ?", options: ["45 m", "4,5 m", "0,45 m", "0,045 m"], answer: 2, why: "1 m = 1 000 mm, donc 450 mm = 450 ÷ 1 000 m = 0,45 m." },
            { q: "Laquelle de ces longueurs est la plus grande ?", options: ["2 m", "180 cm", "0,002 km", "2 050 mm"], answer: 3, why: "En mètres : 2 m, 1,8 m, 2 m et 2,05 m. La plus grande est 2 050 mm." },
            { q: "Combien vaut 1 dm ?", options: ["10 cm", "100 cm", "0,01 m", "1 000 mm"], answer: 0, why: "Le centimètre est l'unité juste plus petite que le décimètre : 1 dm = 10 cm (et aussi 0,1 m ou 100 mm)." },
          ],
          trap: "Se tromper de sens dans la conversion : multiplier alors qu'il faut diviser, et écrire par exemple 2 400 m = 2 400 000 km au lieu de 2,4 km. Autre erreur fréquente : additionner des nombres exprimés dans des unités différentes, comme 1,2 km + 650 m = 651,2.",
          method: "Avant de convertir, demandez-vous : l'unité d'arrivée est-elle plus grande ou plus petite ? Plus petite, il en faut davantage, le nombre augmente ; plus grande, le nombre diminue. Vérifiez enfin que le résultat est vraisemblable : une salle de classe ne mesure pas 900 km.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'perimetres',
          title: 'Le périmètre d\'un polygone et la longueur d\'un cercle',
          minutes: 35,
          objectives: [
            "Calculer le périmètre d'un polygone en additionnant les longueurs de ses côtés.",
            "Utiliser les formules du périmètre du carré et du rectangle.",
            "Calculer la longueur d'un cercle avec la formule utilisant le nombre π.",
            "Calculer le périmètre d'une figure composée de segments et d'arcs de cercle.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un périmètre ?",
              paragraphs: [
                "Le périmètre d'une figure est la longueur de son contour, c'est-à-dire la distance parcourue quand on en fait le tour complet. C'est une longueur : il s'exprime donc en mm, cm, m, km... Par exemple, pour savoir quelle longueur de grillage il faut pour clôturer un jardin, on calcule le périmètre du jardin.",
                "Pour un polygone (une figure fermée formée de segments), le périmètre est la somme des longueurs de tous ses côtés. Un triangle de côtés 3 cm, 4 cm et 5 cm a pour périmètre 3 + 4 + 5 = 12 cm. Attention : toutes les longueurs doivent être dans la même unité avant d'additionner.",
                "Il ne faut pas confondre le périmètre et l'aire. Le périmètre mesure le contour (une longueur, comme une ficelle posée autour de la figure) ; l'aire mesure la surface à l'intérieur (comme la peinture qu'il faut pour la recouvrir).",
              ],
              box: { label: "Définition", text: "Le périmètre d'une figure est la longueur de son contour. Pour un polygone, c'est la somme des longueurs de ses côtés, exprimées dans la même unité." },
            },
            {
              heading: "Le carré et le rectangle",
              paragraphs: [
                "Un carré a quatre côtés de même longueur. Si son côté mesure c, son périmètre est c + c + c + c, c'est-à-dire 4 × c. Un carré de côté 6 cm a pour périmètre 4 × 6 = 24 cm. De même, un triangle équilatéral de côté c a pour périmètre 3 × c, et un losange de côté c a pour périmètre 4 × c.",
                "Un rectangle a deux longueurs égales (notées L) et deux largeurs égales (notées l). Son périmètre est L + l + L + l, c'est-à-dire 2 × (L + l), ou encore 2 × L + 2 × l. Un rectangle de 7 cm sur 4 cm a pour périmètre 2 × (7 + 4) = 2 × 11 = 22 cm.",
              ],
              box: { label: "Formule", text: "Périmètre d'un carré de côté c : P = 4 × c. Périmètre d'un rectangle de longueur L et de largeur l : P = 2 × (L + l) = 2 × L + 2 × l." },
            },
            {
              heading: "La longueur d'un cercle et le nombre π",
              paragraphs: [
                "Le périmètre d'un cercle s'appelle aussi la longueur du cercle. On ne peut pas la mesurer avec une règle, mais on peut faire une expérience : on enroule une ficelle autour d'une boîte de conserve, on mesure la ficelle, puis on la compare au diamètre de la boîte. On trouve un peu plus de 3 fois le diamètre.",
                "Les mathématiciens ont démontré que, pour tous les cercles, petits ou grands, la longueur divisée par le diamètre donne toujours le même nombre. Ce nombre s'appelle pi et se note π. Il vaut environ 3,14. Ce n'est pas un nombre décimal : son écriture après la virgule ne s'arrête jamais (3,14159...), c'est pourquoi on utilise une valeur approchée.",
                "La longueur d'un cercle de diamètre d est donc π × d. Comme le diamètre vaut deux fois le rayon r, on peut aussi écrire 2 × π × r. Exemple : une roue de 50 cm de diamètre a une longueur d'environ 3,14 × 50 = 157 cm. En un tour, elle avance donc d'environ 157 cm. Le résultat obtenu avec 3,14 est une valeur approchée : on écrit le signe ≈ ou le mot « environ ».",
              ],
              box: { label: "Formule", text: "Longueur d'un cercle de diamètre d et de rayon r : L = π × d = 2 × π × r, avec π ≈ 3,14. Pour une estimation rapide, la longueur vaut un peu plus de 3 fois le diamètre." },
            },
            {
              heading: "Le périmètre d'une figure composée",
              paragraphs: [
                "Certaines figures sont formées de segments et d'arcs de cercle. Pour calculer leur périmètre, on suit le contour et on additionne la longueur de chaque morceau. Un demi-cercle de diamètre d a une longueur égale à la moitié de π × d.",
                "Exemple : une figure est formée d'un rectangle de 10 m sur 4 m, avec un demi-cercle de diamètre 4 m collé sur chacun des petits côtés. Les petits côtés sont à l'intérieur de la figure : ils ne font pas partie du contour. Le contour est formé des deux grands côtés (2 × 10 = 20 m) et de deux demi-cercles, qui forment ensemble un cercle entier de diamètre 4 m (3,14 × 4 = 12,56 m). Périmètre : 20 + 12,56 = 32,56 m environ.",
              ],
              box: { label: "À retenir", text: "Pour une figure composée, on repasse le contour et on additionne seulement les longueurs qui sont sur le bord, jamais les traits intérieurs." },
            },
          ],
          keyPoints: [
            "Le périmètre est la longueur du contour d'une figure ; il s'exprime dans une unité de longueur.",
            "Polygone : on additionne les longueurs des côtés, toutes dans la même unité.",
            "Carré : P = 4 × c. Rectangle : P = 2 × (L + l).",
            "Cercle : L = π × d = 2 × π × r, avec π ≈ 3,14.",
            "Un demi-cercle mesure la moitié de π × d ; dans une figure composée, on ne compte pas les traits intérieurs.",
            "Ne pas confondre le périmètre (le contour) et l'aire (la surface).",
          ],
          example: {
            statement: "Un jardin rectangulaire mesure 12,5 m de long et 8 m de large. On veut l'entourer d'un grillage vendu 4,50 € le mètre (données fictives). Quelle longueur de grillage faut-il ? Combien coûtera-t-il ?",
            solution: [
              "Le grillage fait le tour du jardin : on calcule le périmètre du rectangle.",
              "P = 2 × (L + l) = 2 × (12,5 + 8) = 2 × 20,5 = 41 m.",
              "Prix : 41 × 4,50 = 184,50 €. Ordre de grandeur : 40 × 4,5 = 180 €, le résultat est vraisemblable.",
              "Il faut 41 m de grillage, qui coûteront 184,50 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez le périmètre de chaque figure : a) un carré de côté 6,5 cm ; b) un rectangle de 9 cm sur 3,5 cm ; c) un triangle dont les côtés mesurent 4 cm, 5,2 cm et 68 mm.",
              hint: "Utilisez les formules du carré et du rectangle. Pour le triangle, convertissez d'abord toutes les longueurs dans la même unité.",
              solution: [
                "a) P = 4 × 6,5 = 26 cm.",
                "b) P = 2 × (9 + 3,5) = 2 × 12,5 = 25 cm.",
                "c) 68 mm = 6,8 cm. P = 4 + 5,2 + 6,8 = 16 cm.",
              ],
            },
            {
              level: 2,
              statement: "On prend π ≈ 3,14. a) Calculez la longueur d'un cercle de diamètre 10 cm. b) Calculez la longueur d'un cercle de rayon 2,5 cm. c) Une roue de vélo a un diamètre de 70 cm (données fictives). Quelle distance parcourt le vélo quand la roue fait 1 tour ? Et 100 tours ? Donnez ce dernier résultat en mètres.",
              hint: "Si l'on connaît le rayon, on calcule d'abord le diamètre (deux fois le rayon), puis on multiplie par 3,14.",
              solution: [
                "a) L ≈ 3,14 × 10 = 31,4 cm.",
                "b) Le diamètre vaut 2 × 2,5 = 5 cm. L ≈ 3,14 × 5 = 15,7 cm.",
                "c) En 1 tour, la roue avance de sa longueur : 3,14 × 70 = 219,8 cm environ.",
                "En 100 tours : 219,8 × 100 = 21 980 cm, soit 21 980 ÷ 100 = 219,8 m environ.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une piste de course est formée de deux lignes droites de 85 m chacune, reliées à leurs extrémités par deux demi-cercles de 60 m de diamètre (données fictives). On prend π ≈ 3,14. a) Calculez la longueur d'un tour de piste. b) Un élève veut parcourir au moins 2 km. Combien de tours complets doit-il faire au minimum ?",
              hint: "Les deux demi-cercles de même diamètre forment ensemble un cercle entier. Pour la question b, convertissez 2 km en mètres et essayez 5 tours, puis 6 tours.",
              solution: [
                "a) Les deux lignes droites mesurent 2 × 85 = 170 m.",
                "Les deux demi-cercles forment un cercle de diamètre 60 m : 3,14 × 60 = 188,4 m.",
                "Un tour mesure environ 170 + 188,4 = 358,4 m.",
                "b) 2 km = 2 000 m. 5 tours : 5 × 358,4 = 1 792 m, c'est moins que 2 000 m. 6 tours : 6 × 358,4 = 2 150,4 m, c'est plus que 2 000 m.",
                "L'élève doit faire au minimum 6 tours complets.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque figure à son périmètre (on prend π ≈ 3,14).",
            pairs: [
              { left: "Carré de côté 5 cm", right: "20 cm" },
              { left: "Rectangle de 6 cm sur 2 cm", right: "16 cm" },
              { left: "Triangle équilatéral de côté 4 cm", right: "12 cm" },
              { left: "Cercle de diamètre 10 cm", right: "31,4 cm" },
              { left: "Cercle de rayon 1 cm", right: "6,28 cm" },
              { left: "Losange de côté 2,5 cm", right: "10 cm" },
            ],
          },
          quiz: [
            { q: "Quel est le périmètre d'un rectangle de 8 cm sur 5 cm ?", options: ["13 cm", "40 cm", "26 cm", "21 cm"], answer: 2, why: "P = 2 × (8 + 5) = 2 × 13 = 26 cm. 40 serait le produit 8 × 5, qui n'est pas un périmètre." },
            { q: "Quelle formule donne la longueur d'un cercle de rayon r ?", options: ["π × r", "2 × π × r", "π × r × r", "4 × r"], answer: 1, why: "La longueur vaut π × d, et le diamètre d vaut 2 × r : on obtient 2 × π × r." },
            { q: "Quelle valeur approchée de π utilise-t-on le plus souvent ?", options: ["3,14", "3,41", "2,14", "31,4"], answer: 0, why: "π vaut environ 3,14 : la longueur d'un cercle est un peu plus de 3 fois son diamètre." },
            { q: "Un carré a un périmètre de 36 cm. Combien mesure son côté ?", options: ["18 cm", "6 cm", "9 cm", "12 cm"], answer: 2, why: "Les 4 côtés sont égaux : 4 × 9 = 36, donc le côté mesure 9 cm." },
            { q: "Quelle est, environ, la longueur d'un cercle de 20 cm de diamètre ?", options: ["31,4 cm", "314 cm", "40 cm", "62,8 cm"], answer: 3, why: "L ≈ 3,14 × 20 = 62,8 cm, un peu plus de 3 fois le diamètre." },
          ],
          trap: "Confondre le rayon et le diamètre : calculer 3,14 × r au lieu de 3,14 × d (ou 2 × 3,14 × r), ce qui donne une longueur deux fois trop petite. Dans une figure composée, on oublie aussi souvent un morceau du contour, ou l'on ajoute un trait intérieur.",
          method: "Repassez le contour de la figure avec le doigt ou un crayon de couleur, et notez chaque morceau rencontré avant de calculer. Contrôlez ensuite : la longueur d'un cercle doit valoir un peu plus de 3 fois son diamètre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'durees',
          title: 'Calculer des durées et des horaires',
          minutes: 30,
          objectives: [
            "Distinguer un horaire et une durée.",
            "Connaître les unités de durée et convertir une durée (heures, minutes, secondes, jours).",
            "Calculer une durée connaissant l'horaire de début et l'horaire de fin.",
            "Calculer un horaire de début ou de fin connaissant une durée.",
          ],
          course: [
            {
              heading: "Horaire ou durée ?",
              paragraphs: [
                "Un horaire indique un moment précis de la journée : « le film commence à 20 h 45 ». Une durée mesure le temps qui s'écoule entre deux moments : « le film dure 1 h 50 min ». On lit 20 h 45 comme un instant sur l'horloge, alors que 1 h 50 min est une quantité de temps, comme une longueur est une quantité d'espace.",
                "Les deux s'écrivent avec les mêmes unités, ce qui peut tromper. Pour les distinguer, on se demande : est-ce que cela répond à la question « à quelle heure ? » (un horaire) ou à la question « combien de temps ? » (une durée) ?",
              ],
              box: { label: "Définition", text: "Un horaire répond à la question « à quelle heure ? » (exemple : 14 h 35). Une durée répond à la question « combien de temps ? » (exemple : 2 h 15 min). Durée = horaire de fin - horaire de début." },
            },
            {
              heading: "Les unités de durée",
              paragraphs: [
                "Les principales unités de durée sont la seconde (s), la minute (min), l'heure (h) et le jour. Contrairement aux unités de longueur, elles ne vont pas de 10 en 10 : 1 min = 60 s, 1 h = 60 min = 3 600 s, et 1 jour = 24 h. On utilise aussi la semaine (7 jours), le mois (28 à 31 jours), l'année (365 jours, ou 366 pour une année bissextile) et le siècle (100 ans).",
                "Il faut connaître les fractions d'heure : une demi-heure (½ h) dure 30 min, un quart d'heure (¼ h) dure 15 min, trois quarts d'heure (¾ h) durent 45 min. Attention à l'écriture décimale : 1,5 h, c'est une heure et demie, donc 1 h 30 min, et non 1 h 50 min.",
                "Pour convertir, on utilise ces égalités. 2 h 15 min = 2 × 60 + 15 = 135 min. Dans l'autre sens, pour écrire 200 min en heures et minutes, on cherche combien de fois 60 min on peut y mettre : 3 × 60 = 180, il reste 200 - 180 = 20, donc 200 min = 3 h 20 min.",
              ],
              box: { label: "Repère", text: "1 min = 60 s ; 1 h = 60 min = 3 600 s ; 1 jour = 24 h ; 1 semaine = 7 jours. ½ h = 30 min ; ¼ h = 15 min ; ¾ h = 45 min." },
            },
            {
              heading: "Calculer une durée",
              paragraphs: [
                "Pour calculer une durée entre deux horaires, la méthode la plus sûre consiste à « avancer par bonds » sur une ligne du temps, en passant par les heures rondes. De 9 h 40 à 11 h 15 : de 9 h 40 à 10 h, il y a 20 min ; de 10 h à 11 h, 1 h ; de 11 h à 11 h 15, 15 min. Au total : 1 h + 20 min + 15 min = 1 h 35 min.",
                "On peut aussi poser une soustraction, en calculant séparément les heures et les minutes. Pour 11 h 15 - 9 h 40, on ne peut pas retirer 40 min de 15 min : on « casse » une heure en 60 minutes. 11 h 15 devient 10 h 75, puis 10 h 75 - 9 h 40 = 1 h 35 min. On trouve bien le même résultat.",
              ],
            },
            {
              heading: "Calculer un horaire",
              paragraphs: [
                "Pour trouver un horaire de fin, on ajoute la durée à l'horaire de début, en additionnant les heures d'un côté et les minutes de l'autre. Le film commence à 20 h 45 et dure 1 h 50 min : 20 h 45 + 1 h 50 min = 21 h 95 min. Comme 95 min = 1 h 35 min, le film finit à 22 h 35.",
                "Pour trouver un horaire de début, on retire la durée à l'horaire de fin. Un cours finit à 17 h 10 et dure 55 min : 17 h 10 devient 16 h 70, et 16 h 70 - 55 min = 16 h 15. Le cours a commencé à 16 h 15.",
                "Quand on dépasse minuit, on retire 24 h et l'on change de jour : un trajet qui part à 23 h 30 et dure 2 h arrive à 25 h 30, c'est-à-dire à 1 h 30 le lendemain.",
              ],
              box: { label: "Règle", text: "On calcule séparément les heures et les minutes. Si l'on obtient 60 min ou plus, on les transforme en heures (95 min = 1 h 35 min). Si l'on ne peut pas soustraire les minutes, on transforme 1 h en 60 min." },
            },
          ],
          keyPoints: [
            "Horaire : « à quelle heure ? » ; durée : « combien de temps ? ».",
            "1 min = 60 s ; 1 h = 60 min = 3 600 s ; 1 jour = 24 h. Les durées ne se comptent pas de 10 en 10.",
            "½ h = 30 min ; ¼ h = 15 min ; ¾ h = 45 min ; 1,5 h = 1 h 30 min.",
            "Pour une durée, on avance par bonds en passant par les heures rondes.",
            "Pour un horaire, on additionne ou on soustrait heures et minutes séparément, puis on convertit 60 min en 1 h.",
          ],
          example: {
            statement: "Un train part de Lyon à 8 h 47 et arrive à Marseille à 10 h 26 (données fictives). Quelle est la durée du trajet ?",
            solution: [
              "On avance par bonds en passant par les heures rondes.",
              "De 8 h 47 à 9 h : 13 min. De 9 h à 10 h : 1 h. De 10 h à 10 h 26 : 26 min.",
              "Total : 1 h + 13 min + 26 min = 1 h 39 min.",
              "Vérification : 8 h 47 + 1 h 39 min = 9 h 86 min = 10 h 26.",
              "Le trajet dure 1 h 39 min.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertissez : a) 3 h en minutes ; b) 4 min 25 s en secondes ; c) 150 min en heures et minutes ; d) une heure et quart en minutes ; e) 2 jours en heures.",
              hint: "Rappelez-vous que 1 h = 60 min, 1 min = 60 s et 1 jour = 24 h, et non 100.",
              solution: [
                "a) 3 h = 3 × 60 = 180 min.",
                "b) 4 min 25 s = 4 × 60 + 25 = 240 + 25 = 265 s.",
                "c) 2 × 60 = 120 et 150 - 120 = 30, donc 150 min = 2 h 30 min.",
                "d) Une heure et quart = 60 + 15 = 75 min.",
                "e) 2 jours = 2 × 24 = 48 h.",
              ],
            },
            {
              level: 2,
              statement: "a) Un film commence à 20 h 50 et dure 1 h 45 min. À quelle heure finit-il ? b) Un cours de musique se termine à 17 h 10 ; il a duré 55 min. À quelle heure a-t-il commencé ? c) Quelle durée s'écoule entre 7 h 35 et 12 h 05 ?",
              hint: "Pour a et b, calculez séparément heures et minutes. Pour c, avancez par bonds jusqu'aux heures rondes.",
              solution: [
                "a) 20 h 50 + 1 h 45 min = 21 h 95 min. Or 95 min = 1 h 35 min, donc le film finit à 22 h 35.",
                "b) 17 h 10 = 16 h 70. 16 h 70 - 55 min = 16 h 15. Le cours a commencé à 16 h 15.",
                "c) De 7 h 35 à 8 h : 25 min. De 8 h à 12 h : 4 h. De 12 h à 12 h 05 : 5 min.",
                "Total : 4 h + 25 min + 5 min = 4 h 30 min.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un car de classe de neige part à 22 h 40 (données fictives). Il roule 3 h 35 min, fait une pause de 25 min, puis roule encore 2 h 50 min. a) Quelle est la durée totale du voyage, en heures et minutes, puis en minutes ? b) À quelle heure le car arrive-t-il ? c) Le chalet ouvre ses portes au groupe à 6 h 15. Combien de temps le groupe attendra-t-il ?",
              hint: "Additionnez d'abord les trois durées. Pour l'heure d'arrivée, n'oubliez pas qu'après 24 h, on recommence à 0 h le lendemain.",
              solution: [
                "a) 3 h 35 min + 25 min = 3 h 60 min = 4 h. Puis 4 h + 2 h 50 min = 6 h 50 min. En minutes : 6 × 60 + 50 = 360 + 50 = 410 min.",
                "b) 22 h 40 + 6 h 50 min = 28 h 90 min = 29 h 30.",
                "On a dépassé minuit : 29 h 30 - 24 h = 5 h 30. Le car arrive à 5 h 30 le lendemain matin.",
                "c) De 5 h 30 à 6 h 15 : 30 min jusqu'à 6 h, puis 15 min. Le groupe attendra 45 min.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les durées et les horaires.",
            statements: [
              { text: "1 h = 100 min", true: false, why: "Une heure dure 60 minutes : les durées ne se comptent pas de 10 en 10." },
              { text: "1,5 h = 1 h 30 min", true: true, why: "0,5 h est une demi-heure, soit 30 min." },
              { text: "2 h 15 min = 135 min", true: true, why: "2 × 60 + 15 = 120 + 15 = 135." },
              { text: "Dans « le cours commence à 14 h 35 », 14 h 35 est une durée.", true: false, why: "C'est un horaire : il répond à la question « à quelle heure ? »." },
              { text: "Un quart d'heure dure 25 minutes.", true: false, why: "Un quart de 60 min, c'est 15 min." },
              { text: "Entre 9 h 50 et 10 h 10, il s'écoule 20 minutes.", true: true, why: "10 min pour aller à 10 h, puis encore 10 min." },
              { text: "200 s = 3 min 20 s", true: true, why: "3 × 60 = 180 s, et il reste 20 s." },
              { text: "Un film qui commence à 21 h 40 et dure 1 h 30 min finit à 22 h 70.", true: false, why: "22 h 70 n'est pas un horaire : 70 min = 1 h 10 min, le film finit à 23 h 10." },
            ],
          },
          quiz: [
            { q: "Combien de minutes y a-t-il dans 3 h 20 min ?", options: ["320 min", "200 min", "180 min", "230 min"], answer: 1, why: "3 h = 3 × 60 = 180 min, et 180 + 20 = 200 min." },
            { q: "Quelle durée s'écoule entre 10 h 45 et 12 h 10 ?", options: ["1 h 65 min", "2 h 25 min", "1 h 25 min", "1 h 35 min"], answer: 2, why: "15 min pour aller à 11 h, 1 h pour aller à 12 h, puis 10 min : 1 h 25 min." },
            { q: "Combien vaut 2,5 h ?", options: ["2 h 50 min", "2 h 05 min", "250 min", "2 h 30 min"], answer: 3, why: "0,5 h est une demi-heure, soit 30 min : 2,5 h = 2 h 30 min." },
            { q: "Un match commence à 20 h 55 et dure 1 h 50 min, pauses comprises. À quelle heure se termine-t-il ?", options: ["22 h 45", "21 h 105", "22 h 05", "21 h 45"], answer: 0, why: "20 h 55 + 1 h 50 min = 21 h 105 min, et 105 min = 1 h 45 min : fin à 22 h 45." },
            { q: "Combien de secondes y a-t-il dans une heure ?", options: ["60 s", "360 s", "3 600 s", "6 000 s"], answer: 2, why: "1 h = 60 min et 1 min = 60 s, donc 1 h = 60 × 60 = 3 600 s." },
          ],
          trap: "Compter les durées comme des nombres décimaux : croire que 1 h = 100 min, lire 1,5 h comme 1 h 50 min, ou laisser un résultat comme 21 h 95 sans transformer les 60 minutes en une heure.",
          method: "Pour une durée, dessinez une ligne du temps et avancez par bonds jusqu'aux heures rondes. Vérifiez ensuite en ajoutant la durée trouvée à l'horaire de départ : vous devez retrouver l'horaire d'arrivée.",
        },
      ],
    },
  ],
}
