import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-5e',
  chapters: [
    /* ================================================================== */
    /* LES TRIANGLES                                                       */
    /* ================================================================== */
    {
      id: 'triangles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'inegalite-triangulaire',
          title: 'L\'inégalité triangulaire et la construction des triangles',
          minutes: 35,
          objectives: [
            "Connaître et utiliser l'inégalité triangulaire.",
            "Déterminer si un triangle est constructible à partir des longueurs de ses trois côtés.",
            "Construire un triangle connaissant trois longueurs, deux longueurs et l'angle qu'elles forment, ou une longueur et deux angles.",
          ],
          course: [
            {
              heading: "La ligne droite est le plus court chemin",
              paragraphs: [
                "Imaginez que vous alliez de chez vous (le point A) au collège (le point B). Si vous passez d'abord par la boulangerie (le point C), votre trajet est en général plus long que le trajet tout droit. Il est de la même longueur seulement si la boulangerie se trouve exactement sur la route directe, c'est-à-dire sur le segment [AB].",
                "En géométrie, cette idée s'écrit avec des longueurs : pour trois points A, B et C quelconques, la longueur AB est inférieure ou égale à la somme AC + CB. Cette inégalité s'appelle l'inégalité triangulaire. Elle est vraie pour n'importe quels points, et donc dans n'importe quel triangle, pour chacun de ses trois côtés.",
                "Le cas d'égalité est très utile : si AB = AC + CB, alors le point C appartient au segment [AB]. Inversement, si C est sur le segment [AB], alors AB = AC + CB. Par exemple, si AC = 3 cm, CB = 4 cm et AB = 7 cm, les trois points sont alignés et C est entre A et B.",
              ],
              box: { label: "Propriété", text: "Inégalité triangulaire : pour trois points A, B et C, on a toujours AB ≤ AC + CB. L'égalité AB = AC + CB est vraie si, et seulement si, le point C appartient au segment [AB]." },
            },
            {
              heading: "Un triangle est-il constructible ?",
              paragraphs: [
                "On donne trois longueurs et l'on se demande si elles peuvent être les côtés d'un triangle. Il suffit de faire un seul test : on repère la plus grande des trois longueurs et on la compare à la somme des deux autres.",
                "Avec 4 cm, 5 cm et 7 cm : la plus grande est 7, et 4 + 5 = 9. Comme 7 < 9, le triangle est constructible. Avec 3 cm, 4 cm et 7 cm : 3 + 4 = 7, il y a égalité, donc les trois sommets sont alignés ; on obtient un « triangle aplati », qui n'est pas un vrai triangle. Avec 2 cm, 3 cm et 8 cm : 2 + 3 = 5 et 8 > 5 ; les deux arcs de cercle ne se coupent pas, le triangle est impossible.",
                "Pourquoi comparer la plus grande longueur ? Parce que les deux autres tests sont alors toujours vrais. Avec 2 cm, 3 cm et 8 cm, on a bien 2 < 3 + 8 et 3 < 2 + 8, et pourtant le triangle n'existe pas : seul le test sur la plus grande longueur permet de conclure.",
              ],
              box: { label: "Règle", text: "Si la plus grande des trois longueurs est strictement inférieure à la somme des deux autres, le triangle est constructible. Si elle est égale à cette somme, les trois points sont alignés. Si elle est plus grande, le triangle n'existe pas." },
            },
            {
              heading: "Construire un triangle avec deux longueurs et un angle",
              paragraphs: [
                "Pour construire le triangle ABC tel que AB = 5 cm, AC = 4 cm et l'angle BAC mesure 50°, on fait d'abord un croquis à main levée sur lequel on écrit les données. On trace ensuite le segment [AB] de 5 cm à la règle.",
                "Avec le rapporteur, centré en A et dont la ligne du zéro suit [AB], on trace la demi-droite issue de A qui forme un angle de 50° avec [AB]. Sur cette demi-droite, on place le point C à 4 cm de A, à la règle graduée ou au compas. Il reste à tracer le segment [BC]. L'angle utilisé doit être celui qui est formé par les deux côtés connus.",
              ],
            },
            {
              heading: "Construire un triangle avec une longueur et deux angles",
              paragraphs: [
                "Pour construire le triangle EFG tel que EF = 6 cm, l'angle FEG mesure 40° et l'angle EFG mesure 70°, on trace d'abord [EF]. On trace ensuite au rapporteur, à partir de E, une demi-droite qui forme un angle de 40° avec [EF], puis, à partir de F et du même côté de [EF], une demi-droite qui forme un angle de 70° avec [FE].",
                "Le point G est le point d'intersection des deux demi-droites. Attention : cette construction n'est possible que si la somme des deux angles donnés est inférieure à 180°. Avec deux angles de 100° et de 90°, par exemple, les deux demi-droites s'écartent l'une de l'autre et ne se rencontrent jamais.",
              ],
              box: { label: "Méthode", text: "Toujours : un croquis à main levée codé, puis un premier côté à la règle. Trois longueurs : deux arcs de cercle au compas. Deux longueurs et un angle : rapporteur, puis report de la longueur. Une longueur et deux angles : deux angles au rapporteur, aux deux extrémités du côté." },
            },
          ],
          keyPoints: [
            "Inégalité triangulaire : pour trois points A, B, C, on a AB ≤ AC + CB.",
            "AB = AC + CB signifie que C est sur le segment [AB] : les trois points sont alignés.",
            "Pour savoir si un triangle existe, on compare la plus grande longueur à la somme des deux autres.",
            "Plus grande longueur < somme des deux autres : triangle constructible ; égale : triangle aplati ; plus grande : impossible.",
            "On construit un triangle avec trois longueurs, ou deux longueurs et l'angle qu'elles forment, ou une longueur et deux angles.",
          ],
          example: {
            statement: "Peut-on construire un triangle ABC tel que AB = 8 cm, BC = 3,5 cm et AC = 4 cm ? Et si AC mesurait 5 cm ?",
            solution: [
              "Premier cas. La plus grande longueur est AB = 8 cm. On calcule la somme des deux autres : BC + AC = 3,5 + 4 = 7,5 cm.",
              "Comme 8 > 7,5, la plus grande longueur dépasse la somme des deux autres : le triangle n'est pas constructible (les deux arcs de cercle ne se coupent pas).",
              "Second cas. La plus grande longueur est toujours AB = 8 cm. On calcule BC + AC = 3,5 + 5 = 8,5 cm.",
              "Comme 8 < 8,5, le triangle est constructible.",
              "Réponse : avec AC = 4 cm le triangle n'existe pas ; avec AC = 5 cm, il existe.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans chaque cas, dites si l'on peut construire un triangle dont les côtés ont les longueurs données, et justifiez : a) 6 cm, 7 cm et 12 cm ; b) 2 cm, 9 cm et 6 cm ; c) 4,5 cm, 2,5 cm et 7 cm.",
              hint: "Repérez d'abord la plus grande longueur, puis comparez-la à la somme des deux autres.",
              solution: [
                "a) La plus grande longueur est 12 cm et 6 + 7 = 13. Comme 12 < 13, le triangle est constructible.",
                "b) La plus grande longueur est 9 cm et 2 + 6 = 8. Comme 9 > 8, le triangle n'est pas constructible.",
                "c) La plus grande longueur est 7 cm et 4,5 + 2,5 = 7. Il y a égalité : les trois points sont alignés, on obtient un triangle aplati, ce n'est pas un vrai triangle.",
                "Réponse : a) oui ; b) non ; c) non (triangle aplati).",
              ],
            },
            {
              level: 2,
              statement: "On veut construire le triangle RST tel que RS = 7 cm, RT = 5 cm et l'angle SRT mesure 60°. a) Écrivez, étape par étape, le programme de construction. b) Une camarade affirme que l'on pourrait aussi construire un triangle RST avec RS = 7 cm, RT = 5 cm et ST = 13 cm. A-t-elle raison ?",
              hint: "Pour le a, l'angle de 60° est formé par les côtés [RS] et [RT] : il se trace au point R. Pour le b, utilisez l'inégalité triangulaire.",
              solution: [
                "a) Étape 1 : faire un croquis à main levée codé avec les trois données.",
                "Étape 2 : tracer le segment [RS] de 7 cm.",
                "Étape 3 : placer le centre du rapporteur en R, la ligne du zéro sur [RS], et tracer la demi-droite issue de R qui forme un angle de 60° avec [RS].",
                "Étape 4 : placer le point T sur cette demi-droite, à 5 cm de R, puis tracer le segment [ST].",
                "b) La plus grande longueur serait ST = 13 cm, et RS + RT = 7 + 5 = 12 cm. Comme 13 > 12, ce triangle n'existe pas.",
                "Réponse : la camarade a tort.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Un triangle a deux côtés de 5 cm et de 8 cm. Son troisième côté mesure un nombre entier de centimètres. Quelles sont toutes les longueurs possibles pour ce troisième côté ? b) Un triangle isocèle a un côté de 4 cm et un côté de 9 cm. Combien mesure son troisième côté ? Justifiez.",
              hint: "Pour le a, distinguez deux cas : le troisième côté est le plus grand, ou bien c'est 8 cm qui est le plus grand. Pour le b, un triangle isocèle a deux côtés égaux : testez les deux possibilités.",
              solution: [
                "a) Notons c la longueur du troisième côté, en cm. Si c est la plus grande longueur, il faut c < 5 + 8, donc c < 13 : c peut aller jusqu'à 12.",
                "Si 8 cm est la plus grande longueur, il faut 8 < 5 + c, donc c doit être plus grand que 3 : c vaut au moins 4.",
                "Les longueurs entières possibles sont donc 4, 5, 6, 7, 8, 9, 10, 11 et 12 cm, soit 9 possibilités.",
                "b) Premier cas : les côtés seraient 4 cm, 4 cm et 9 cm. Or 4 + 4 = 8 et 9 > 8 : ce triangle n'existe pas.",
                "Second cas : les côtés sont 9 cm, 9 cm et 4 cm. La plus grande longueur est 9 et 9 + 4 = 13 : comme 9 < 13, ce triangle existe.",
                "Réponse : a) de 4 cm à 12 cm ; b) le troisième côté mesure 9 cm.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Utilisez l'inégalité triangulaire.",
            statements: [
              { text: "On peut construire un triangle de côtés 3 cm, 4 cm et 5 cm.", true: true, why: "La plus grande longueur est 5 et 3 + 4 = 7 : comme 5 < 7, le triangle existe." },
              { text: "On peut construire un triangle de côtés 2 cm, 3 cm et 6 cm.", true: false, why: "La plus grande longueur est 6 et 2 + 3 = 5 : comme 6 > 5, les arcs ne se coupent pas." },
              { text: "Avec 4 cm, 6 cm et 10 cm, les trois sommets sont alignés.", true: true, why: "4 + 6 = 10 : c'est le cas d'égalité, on obtient un triangle aplati." },
              { text: "Pour savoir si un triangle existe, on peut comparer n'importe laquelle des trois longueurs à la somme des deux autres.", true: false, why: "Il faut tester la plus grande. Avec 2, 3 et 6 : 2 < 3 + 6, et pourtant le triangle n'existe pas." },
              { text: "Pour trois points quelconques M, N et P, on a toujours MN ≤ MP + PN.", true: true, why: "C'est l'inégalité triangulaire : passer par P ne raccourcit jamais le trajet." },
              { text: "On peut construire un triangle dont un côté mesure 5 cm et dont les deux angles adjacents mesurent 100° et 90°.", true: false, why: "100 + 90 = 190, ce qui dépasse 180 : les deux demi-droites ne se rencontrent pas." },
              { text: "Si EF = EG + GF, alors le point G est sur le segment [EF].", true: true, why: "C'est le cas d'égalité de l'inégalité triangulaire." },
            ],
          },
          quiz: [
            { q: "Quelle inégalité est vraie pour trois points A, B et C quelconques ?", options: ["AB ≥ AC + CB", "AB ≤ AC + CB", "AB = AC + CB", "AB < AC - CB"], answer: 1, why: "Le chemin direct de A à B n'est jamais plus long que le détour par C." },
            { q: "Avec quelles longueurs peut-on construire un triangle ?", options: ["3 cm, 3 cm, 7 cm", "5 cm, 6 cm, 12 cm", "4 cm, 8 cm, 4 cm", "6 cm, 7 cm, 9 cm"], answer: 3, why: "La plus grande longueur est 9 et 6 + 7 = 13 : comme 9 < 13, le triangle existe. Dans les autres cas, la plus grande longueur atteint ou dépasse la somme des deux autres." },
            { q: "On sait que AB = 9 cm, BC = 4 cm et AC = 5 cm. Que peut-on dire des points A, B et C ?", options: ["Ils forment un triangle rectangle", "Ils sont alignés", "Ils forment un triangle isocèle"], answer: 1, why: "AC + CB = 5 + 4 = 9 = AB : c'est le cas d'égalité, le point C est sur le segment [AB]." },
            { q: "Pour construire un triangle dont on connaît un côté et les deux angles adjacents à ce côté, il faut :", options: ["règle et rapporteur", "compas seul", "règle graduée et équerre", "compas et équerre"], answer: 0, why: "On trace le côté à la règle, puis les deux angles au rapporteur." },
            { q: "Un triangle a deux côtés de 3 cm et 10 cm. Quelle longueur peut avoir son troisième côté ?", options: ["6 cm", "7 cm", "12 cm", "14 cm"], answer: 2, why: "Avec 12 cm : 12 < 3 + 10 = 13. Avec 6 cm ou 7 cm, 10 atteint ou dépasse la somme des deux autres ; avec 14 cm, 14 > 13." },
          ],
          trap: "Comparer une longueur quelconque, et non la plus grande, à la somme des deux autres : avec 2 cm, 3 cm et 6 cm, on a bien 2 < 3 + 6, et pourtant le triangle n'existe pas.",
          method: "Repérez la plus grande des trois longueurs, additionnez les deux autres, puis comparez et concluez par une phrase. Avant toute construction, faites un croquis à main levée codé : il évite de se tromper de côté ou d'angle.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'somme-angles-triangle',
          title: 'La somme des angles d\'un triangle',
          minutes: 30,
          objectives: [
            "Connaître la propriété de la somme des angles d'un triangle et comprendre sa démonstration.",
            "Calculer la mesure d'un angle d'un triangle connaissant les deux autres.",
            "Utiliser les propriétés des angles des triangles isocèles, équilatéraux et rectangles.",
            "Rédiger une justification en citant la propriété utilisée.",
          ],
          course: [
            {
              heading: "Une propriété vraie pour tous les triangles",
              paragraphs: [
                "En 6e, vous avez découpé les trois coins d'un triangle de papier et vous les avez placés côte à côte : ils formaient un angle plat. Vous avez aussi vérifié au rapporteur que, dans un triangle, la somme des trois angles vaut 180°.",
                "Mais une expérience, même répétée sur cent triangles, ne prouve rien pour tous les triangles : une mesure est toujours un peu imprécise, et l'on ne peut pas tester tous les triangles possibles. En 5e, grâce aux droites parallèles, on peut démontrer cette propriété : on sait alors qu'elle est vraie pour tous les triangles, sans exception.",
              ],
              box: { label: "Propriété", text: "Dans un triangle, la somme des mesures des trois angles est égale à 180°. Dans le triangle ABC : angle BAC + angle ABC + angle ACB = 180°." },
            },
            {
              heading: "La démonstration avec une droite parallèle",
              paragraphs: [
                "Prenons un triangle ABC quelconque. Traçons la droite (d) qui passe par A et qui est parallèle à (BC). Plaçons sur (d) un point D du côté de B et un point E du côté de C.",
                "Les droites (d) et (BC) sont parallèles et coupées par la sécante (AB). Les angles DAB et ABC sont alternes-internes, donc ils ont la même mesure. De même, avec la sécante (AC), les angles EAC et ACB sont alternes-internes, donc ils ont la même mesure.",
                "Or les trois angles DAB, BAC et CAE sont placés côte à côte et forment l'angle plat DAE, qui mesure 180°. En remplaçant DAB par ABC et CAE par ACB, on obtient : angle ABC + angle BAC + angle ACB = 180°. La propriété est démontrée.",
              ],
            },
            {
              heading: "Calculer un angle manquant",
              paragraphs: [
                "Si l'on connaît deux angles d'un triangle, on calcule le troisième : on additionne les deux mesures connues, puis on retire le résultat de 180°. Dans le triangle ABC, si l'angle BAC mesure 48° et l'angle ABC mesure 75°, alors 48 + 75 = 123 et 180 - 123 = 57 : l'angle ACB mesure 57°.",
                "On rédige ainsi : « Dans le triangle ABC, la somme des angles est égale à 180°. Donc l'angle ACB mesure 180° - (48° + 75°) = 57°. » Citer la propriété montre que le résultat est justifié et non mesuré.",
                "Conséquence : un triangle ne peut pas avoir deux angles droits, ni deux angles obtus, ni un angle droit et un angle obtus, car leur somme atteindrait ou dépasserait déjà 180°.",
              ],
            },
            {
              heading: "Les triangles particuliers",
              paragraphs: [
                "Dans un triangle isocèle, les deux angles à la base ont la même mesure. Si l'angle au sommet principal mesure 40°, les deux angles à la base se partagent 180 - 40 = 140°, donc chacun mesure 140 ÷ 2 = 70°. Si un angle à la base mesure 50°, l'angle principal mesure 180 - 2 × 50 = 80°. Réciproquement, un triangle qui a deux angles de même mesure est isocèle.",
                "Un triangle équilatéral a trois angles égaux : chacun mesure 180 ÷ 3 = 60°. Dans un triangle rectangle, l'angle droit mesure 90°, donc les deux angles aigus ont pour somme 90° : si l'un mesure 35°, l'autre mesure 55°. Dans un triangle rectangle isocèle, les deux angles aigus mesurent 45°.",
              ],
              box: { label: "À retenir", text: "Isocèle : deux angles à la base égaux. Équilatéral : trois angles de 60°. Rectangle : les deux angles aigus ont pour somme 90°. Rectangle isocèle : 90°, 45°, 45°." },
            },
          ],
          keyPoints: [
            "Dans tout triangle, la somme des trois angles vaut 180°.",
            "On le démontre en traçant la parallèle à un côté passant par le sommet opposé, avec les angles alternes-internes.",
            "Troisième angle = 180° - (somme des deux angles connus).",
            "Triangle isocèle : les angles à la base sont égaux ; triangle équilatéral : trois angles de 60°.",
            "Triangle rectangle : les deux angles aigus ont pour somme 90°.",
            "Un triangle ne peut avoir qu'un seul angle droit ou obtus.",
          ],
          example: {
            statement: "Le triangle RST est isocèle en R et l'angle RST mesure 52°. Calculez les mesures des angles RTS et SRT.",
            solution: [
              "Le triangle est isocèle en R : son sommet principal est R et sa base est [ST]. Les angles à la base sont RST et RTS.",
              "Dans un triangle isocèle, les angles à la base ont la même mesure, donc l'angle RTS mesure 52°.",
              "Dans le triangle RST, la somme des angles est égale à 180°. Donc l'angle SRT mesure 180° - (52° + 52°) = 180° - 104° = 76°.",
              "Vérification : 52 + 52 + 76 = 180.",
              "Réponse : l'angle RTS mesure 52° et l'angle SRT mesure 76°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la mesure du troisième angle dans chaque cas : a) un triangle ABC où l'angle BAC mesure 35° et l'angle ABC mesure 72° ; b) un triangle DEF rectangle en D où l'angle DEF mesure 28° ; c) un triangle GHI équilatéral.",
              hint: "Utilisez la somme des angles d'un triangle : 180°. Pour le b, l'angle droit mesure 90°.",
              solution: [
                "a) 35 + 72 = 107 et 180 - 107 = 73 : l'angle ACB mesure 73°.",
                "b) L'angle EDF est droit : 90°. Donc l'angle DFE mesure 180 - (90 + 28) = 180 - 118 = 62°.",
                "c) Les trois angles sont égaux : chacun mesure 180 ÷ 3 = 60°.",
                "Réponse : 73° ; 62° ; 60°.",
              ],
            },
            {
              level: 2,
              statement: "a) Le triangle MNP est isocèle en M et l'angle NMP mesure 36°. Calculez les angles MNP et MPN. b) Dans le triangle EFG, l'angle FEG mesure 90° et l'angle EFG mesure 45°. Calculez l'angle EGF, puis donnez la nature précise du triangle EFG.",
              hint: "Pour le a, l'angle de 36° est l'angle au sommet principal : les deux autres angles sont égaux. Pour le b, cherchez deux angles égaux.",
              solution: [
                "a) Les angles à la base MNP et MPN sont égaux. Ils se partagent 180 - 36 = 144°.",
                "Chacun mesure donc 144 ÷ 2 = 72°.",
                "b) Dans le triangle EFG, l'angle EGF mesure 180 - (90 + 45) = 45°.",
                "Le triangle a un angle droit en E : il est rectangle en E. Il a aussi deux angles égaux (en F et en G) : il est isocèle, de sommet principal E.",
                "Réponse : a) 72° et 72° ; b) 45°, le triangle EFG est rectangle isocèle en E.",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle tel que l'angle BAC mesure 50° et l'angle ABC mesure 60°. Le point D est sur le segment [BC] et l'angle BAD mesure 10°. a) Calculez l'angle ACB. b) Calculez l'angle ADB. c) Déduisez-en l'angle ADC. d) Démontrez que le triangle ADC est isocèle et précisez son sommet principal.",
              hint: "Pour le c, les points B, D et C sont alignés : les angles ADB et ADC forment un angle plat. Pour le d, calculez aussi l'angle DAC et cherchez deux angles égaux.",
              solution: [
                "a) Dans le triangle ABC : l'angle ACB mesure 180 - (50 + 60) = 70°.",
                "b) Dans le triangle ABD : l'angle ADB mesure 180 - (10 + 60) = 110°.",
                "c) B, D et C sont alignés, donc les angles ADB et ADC forment un angle plat : l'angle ADC mesure 180 - 110 = 70°.",
                "d) L'angle DAC mesure 50 - 10 = 40°. Vérification dans le triangle ADC : 40 + 70 + 70 = 180.",
                "Dans le triangle ADC, les angles ADC et ACD mesurent tous les deux 70°. Un triangle qui a deux angles égaux est isocèle : le sommet principal est le troisième sommet, A.",
                "Réponse : 70° ; 110° ; 70° ; le triangle ADC est isocèle en A (donc AD = AC).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Deux angles d'un triangle sont connus : reliez-les à la mesure du troisième angle.",
            pairs: [
              { left: "35° et 75°", right: "70°" },
              { left: "90° et 25°", right: "65°" },
              { left: "60° et 60°", right: "60°" },
              { left: "45° et 90°", right: "45°" },
              { left: "100° et 30°", right: "50°" },
              { left: "20° et 40°", right: "120°" },
            ],
          },
          quiz: [
            { q: "Dans un triangle, deux angles mesurent 47° et 68°. Combien mesure le troisième ?", options: ["75°", "65°", "115°", "55°"], answer: 1, why: "47 + 68 = 115 et 180 - 115 = 65." },
            { q: "Dans un triangle isocèle, l'angle au sommet principal mesure 40°. Combien mesure chaque angle à la base ?", options: ["40°", "140°", "70°", "80°"], answer: 2, why: "Les deux angles à la base se partagent 180 - 40 = 140°, soit 70° chacun." },
            { q: "Un triangle peut-il avoir deux angles obtus ?", options: ["Oui, s'il est isocèle et très allongé", "Non, jamais", "Oui, s'il est assez grand"], answer: 1, why: "Deux angles obtus mesurent ensemble plus de 180°, ce qui est impossible dans un triangle." },
            { q: "Dans la démonstration, après avoir tracé la parallèle à (BC) passant par A, quelle propriété utilise-t-on ?", options: ["Angles alternes-internes", "Inégalité triangulaire", "Équidistance de la médiatrice", "Diagonales d'un parallélogramme"], answer: 0, why: "Deux droites parallèles coupées par une sécante forment des angles alternes-internes de même mesure." },
            { q: "Dans un triangle rectangle, un angle aigu mesure 38°. Combien mesure l'autre angle aigu ?", options: ["142°", "62°", "38°", "52°"], answer: 3, why: "Les deux angles aigus d'un triangle rectangle ont pour somme 90° : 90 - 38 = 52." },
          ],
          trap: "Dans un triangle isocèle, confondre l'angle au sommet principal et les angles à la base : avec un angle principal de 40°, chaque angle à la base mesure 70°, et non 40°.",
          method: "Écrivez toujours la phrase de justification : « Dans le triangle ABC, la somme des angles est égale à 180°, donc... ». Vérifiez ensuite que vos trois angles ont bien pour somme 180°.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'hauteurs-mediatrices',
          title: 'Hauteurs et médiatrices d\'un triangle',
          minutes: 35,
          objectives: [
            "Connaître la définition d'une hauteur d'un triangle et la construire à l'équerre.",
            "Utiliser une hauteur pour calculer l'aire d'un triangle.",
            "Connaître la propriété des médiatrices d'un triangle et construire son cercle circonscrit.",
            "Distinguer la hauteur et la médiatrice relatives à un même côté.",
          ],
          course: [
            {
              heading: "La hauteur d'un triangle",
              paragraphs: [
                "Pensez à une tente canadienne vue de face : elle a la forme d'un triangle. Le mât central part du sommet et descend jusqu'au sol en formant un angle droit avec lui. En géométrie, ce mât s'appelle une hauteur du triangle.",
                "Dans un triangle ABC, la hauteur issue de A est la droite qui passe par A et qui est perpendiculaire au côté opposé, (BC). Elle coupe la droite (BC) en un point H, appelé le pied de la hauteur. On dit aussi que c'est la hauteur relative au côté [BC].",
                "Le mot « hauteur » désigne aussi une longueur : la distance AH entre le sommet et le pied de la hauteur. Un triangle a trois sommets, donc trois hauteurs.",
              ],
              box: { label: "Définition", text: "Dans un triangle, la hauteur issue d'un sommet est la droite qui passe par ce sommet et qui est perpendiculaire à la droite qui porte le côté opposé." },
            },
            {
              heading: "Tracer une hauteur, même à l'extérieur du triangle",
              paragraphs: [
                "Pour tracer la hauteur issue de A, on pose un côté de l'angle droit de l'équerre le long de (BC), puis on fait glisser l'équerre le long de cette droite jusqu'à ce que l'autre côté de l'angle droit passe par A. On trace alors la droite et l'on code l'angle droit en H.",
                "Dans un triangle obtus, le pied de certaines hauteurs se trouve en dehors du côté : on prolonge alors le côté en pointillés. Dans un triangle rectangle en A, les côtés de l'angle droit sont eux-mêmes des hauteurs : la hauteur issue de B est la droite (AB), car (AB) est perpendiculaire à (AC).",
              ],
              box: { label: "Repère", text: "On constate, et l'on admet en 5e, que les trois hauteurs d'un triangle (ou leurs prolongements) se coupent en un même point." },
            },
            {
              heading: "Hauteur et aire",
              paragraphs: [
                "L'aire d'un triangle se calcule avec un côté, appelé la base, et la hauteur relative à ce côté : aire = base × hauteur ÷ 2. Par exemple, si BC = 8 cm et AH = 5 cm, l'aire du triangle ABC est 8 × 5 ÷ 2 = 20 cm².",
                "On peut choisir n'importe quel côté comme base, à condition d'utiliser la hauteur qui lui correspond. On trouve toujours la même aire : c'est pourquoi on peut calculer une hauteur inconnue quand on connaît l'aire et la base.",
              ],
              box: { label: "Formule", text: "Aire d'un triangle = base × hauteur relative à cette base ÷ 2." },
            },
            {
              heading: "Les médiatrices et le cercle circonscrit",
              paragraphs: [
                "Rappel de 6e : la médiatrice d'un segment est la droite perpendiculaire à ce segment en son milieu. Tout point de la médiatrice est à égale distance des deux extrémités du segment, et tout point à égale distance des deux extrémités est sur la médiatrice.",
                "Dans un triangle ABC, les médiatrices de [AB] et de [BC] se coupent en un point O. Comme O est sur la médiatrice de [AB], OA = OB ; comme il est sur celle de [BC], OB = OC. Donc OA = OC, et O est aussi sur la médiatrice de [AC] : les trois médiatrices passent par le même point.",
                "Le cercle de centre O et de rayon OA passe par les trois sommets : c'est le cercle circonscrit au triangle. Son centre est à l'intérieur d'un triangle dont les trois angles sont aigus, et à l'extérieur d'un triangle obtus ; dans un triangle rectangle, il est sur le plus grand côté.",
              ],
              box: { label: "Propriété", text: "Les trois médiatrices d'un triangle se coupent en un même point, à égale distance des trois sommets : c'est le centre du cercle circonscrit au triangle." },
            },
            {
              heading: "Ne pas confondre hauteur et médiatrice",
              paragraphs: [
                "La hauteur relative à [BC] et la médiatrice de [BC] sont toutes les deux perpendiculaires à (BC), donc parallèles. Mais la hauteur passe par le sommet opposé A, alors que la médiatrice passe par le milieu de [BC]. En général, ce sont deux droites différentes.",
                "Elles sont confondues dans un cas particulier : quand le triangle est isocèle en A. Le point A est alors à égale distance de B et de C, donc il est sur la médiatrice de [BC], qui est aussi la hauteur issue de A.",
              ],
            },
          ],
          keyPoints: [
            "La hauteur issue de A passe par A et est perpendiculaire à (BC) ; son pied H peut être hors du triangle.",
            "Un triangle a trois hauteurs ; elles se coupent en un même point.",
            "Aire d'un triangle = base × hauteur relative ÷ 2, quel que soit le côté choisi comme base.",
            "Les trois médiatrices se coupent au centre du cercle circonscrit, à égale distance des trois sommets.",
            "La hauteur passe par un sommet, la médiatrice par le milieu d'un côté ; elles coïncident si le triangle est isocèle en ce sommet.",
          ],
          example: {
            statement: "Dans le triangle ABC, BC = 10 cm et AC = 12 cm. La hauteur issue de A coupe (BC) en H, avec AH = 6 cm. a) Calculez l'aire du triangle ABC. b) Calculez la longueur BK de la hauteur issue de B, relative au côté [AC].",
            solution: [
              "a) On prend [BC] comme base, avec la hauteur AH : aire = BC × AH ÷ 2 = 10 × 6 ÷ 2 = 30 cm².",
              "b) On prend maintenant [AC] comme base, avec la hauteur BK : l'aire vaut aussi AC × BK ÷ 2.",
              "On a donc 12 × BK ÷ 2 = 30, soit 12 × BK = 60.",
              "BK = 60 ÷ 12 = 5 cm.",
              "Réponse : l'aire vaut 30 cm² et la hauteur BK mesure 5 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le triangle EFG, le point H est sur [FG] et la droite (EH) est perpendiculaire à (FG). Le point I est le milieu de [EF] et la droite (d) est perpendiculaire à (EF) en I. a) Que représente la droite (EH) pour le triangle ? b) Que représente la droite (d) ? c) On donne FG = 7 cm et EH = 4 cm. Calculez l'aire du triangle EFG.",
              hint: "Une hauteur passe par un sommet ; une médiatrice passe par le milieu d'un côté.",
              solution: [
                "a) (EH) passe par le sommet E et est perpendiculaire au côté opposé : c'est la hauteur issue de E, relative au côté [FG].",
                "b) (d) est perpendiculaire à [EF] en son milieu I : c'est la médiatrice du côté [EF].",
                "c) Aire = FG × EH ÷ 2 = 7 × 4 ÷ 2 = 14 cm².",
                "Réponse : la hauteur issue de E ; la médiatrice de [EF] ; 14 cm².",
              ],
            },
            {
              level: 2,
              statement: "Le triangle RST est obtus en S. a) Où se trouve le pied H de la hauteur issue de R, relative au côté [ST] ? Expliquez comment la tracer. b) On donne ST = 5 cm et RH = 4,2 cm. Calculez l'aire du triangle RST.",
              hint: "Dans un triangle obtus, il faut parfois prolonger un côté pour que la perpendiculaire passant par le sommet le rencontre.",
              solution: [
                "a) Comme l'angle en S est obtus, la perpendiculaire à (ST) passant par R rencontre la droite (ST) en dehors du segment [ST], au-delà du point S.",
                "Pour la tracer, on prolonge [ST] en pointillés du côté de S, on pose l'équerre le long de cette droite et on la fait glisser jusqu'à R. On code l'angle droit en H.",
                "b) La base est [ST] et la hauteur correspondante est RH, même si H est hors du triangle : aire = 5 × 4,2 ÷ 2 = 21 ÷ 2 = 10,5 cm².",
                "Réponse : H est sur le prolongement de [ST] au-delà de S ; l'aire vaut 10,5 cm².",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle rectangle en A tel que AB = 6 cm, AC = 8 cm et BC = 10 cm. a) Quelles sont les hauteurs issues de B et de C ? b) Calculez l'aire du triangle ABC. c) La hauteur issue de A coupe [BC] en H. Calculez AH. d) En quel point se coupent les trois hauteurs de ce triangle ?",
              hint: "Dans un triangle rectangle, chaque côté de l'angle droit est perpendiculaire à l'autre. Pour le c, écrivez l'aire de deux façons.",
              solution: [
                "a) La droite (AB) passe par B et est perpendiculaire à (AC) : c'est la hauteur issue de B. De même, (AC) passe par C et est perpendiculaire à (AB) : c'est la hauteur issue de C.",
                "b) On prend [AC] comme base et AB comme hauteur : aire = 8 × 6 ÷ 2 = 24 cm².",
                "c) Avec la base [BC] et la hauteur AH : 10 × AH ÷ 2 = 24, donc 10 × AH = 48 et AH = 4,8 cm.",
                "d) Les hauteurs issues de B et de C, (AB) et (AC), se coupent en A. La hauteur issue de A passe aussi par A.",
                "Réponse : (AB) et (AC) ; 24 cm² ; AH = 4,8 cm ; les trois hauteurs se coupent au sommet de l'angle droit, A.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Hauteur ou médiatrice ? Vrai ou faux.",
            statements: [
              { text: "Une hauteur d'un triangle passe toujours par un sommet.", true: true, why: "Par définition, la hauteur issue de A passe par A." },
              { text: "La médiatrice d'un côté passe toujours par le sommet opposé.", true: false, why: "Elle passe par le milieu du côté ; elle ne passe par le sommet opposé que si le triangle est isocèle en ce sommet." },
              { text: "Le pied d'une hauteur peut se trouver en dehors du triangle.", true: true, why: "C'est le cas dans un triangle obtus : il faut prolonger un côté." },
              { text: "La hauteur issue de A coupe toujours [BC] en son milieu.", true: false, why: "C'est la médiatrice qui passe par le milieu de [BC] ; la hauteur passe par A." },
              { text: "Le centre du cercle circonscrit est à la même distance des trois sommets.", true: true, why: "Il est sur les trois médiatrices, donc à égale distance de A, de B et de C." },
              { text: "Le centre du cercle circonscrit est toujours à l'intérieur du triangle.", true: false, why: "Dans un triangle obtus, il est à l'extérieur ; dans un triangle rectangle, il est sur un côté." },
              { text: "Un triangle a trois hauteurs.", true: true, why: "Une hauteur part de chaque sommet." },
            ],
          },
          quiz: [
            { q: "Dans le triangle ABC, la hauteur issue de A est la droite :", options: ["qui passe par A et par le milieu du côté [BC]", "passant par A, perpendiculaire à (BC)", "perpendiculaire à [BC] en son milieu"], answer: 1, why: "La hauteur passe par le sommet A et est perpendiculaire au côté opposé ; la droite perpendiculaire à [BC] en son milieu est la médiatrice." },
            { q: "Un triangle a une base de 9 cm et une hauteur relative de 4 cm. Quelle est son aire ?", options: ["36 cm²", "13 cm²", "26 cm²", "18 cm²"], answer: 3, why: "9 × 4 ÷ 2 = 18 cm² : il ne faut pas oublier de diviser par 2." },
            { q: "Le point où se coupent les trois médiatrices d'un triangle est :", options: ["le milieu de son plus grand côté", "le pied de la plus grande hauteur", "le centre du cercle circonscrit", "le sommet de son plus grand angle"], answer: 2, why: "Ce point est à égale distance des trois sommets : c'est le centre du cercle qui passe par A, B et C." },
            { q: "Dans un triangle obtus, où se trouve le pied de la hauteur issue d'un sommet d'angle aigu ?", options: ["Hors du triangle, sur un prolongement", "Au milieu exact du côté opposé, toujours", "Sur le sommet de l'angle obtus"], answer: 0, why: "La perpendiculaire rencontre le prolongement du côté opposé, en dehors du triangle." },
            { q: "O est le centre du cercle circonscrit au triangle ABC, et OA = 5 cm. Combien vaut OC ?", options: ["10 cm", "2,5 cm", "On ne peut pas savoir", "5 cm"], answer: 3, why: "Le centre du cercle circonscrit est à égale distance des trois sommets : OC = OA = 5 cm." },
          ],
          trap: "Confondre la hauteur relative à [BC] et la médiatrice de [BC] : la hauteur passe par le sommet opposé A, la médiatrice passe par le milieu de [BC] ; en général, ce ne sont pas les mêmes droites.",
          method: "Pour tracer une hauteur, posez un côté de l'angle droit de l'équerre sur le côté opposé (prolongé si besoin) et faites glisser l'équerre jusqu'au sommet. Codez toujours l'angle droit ; pour une médiatrice, codez aussi le milieu.",
        },
      ],
    },

    /* ================================================================== */
    /* LES FRACTIONS                                                       */
    /* ================================================================== */
    {
      id: 'fractions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fractions-egales',
          title: 'Fractions égales et simplification',
          minutes: 30,
          objectives: [
            "Utiliser une fraction comme un quotient : b × a/b = a.",
            "Reconnaître et produire des fractions égales.",
            "Simplifier une fraction en utilisant les critères de divisibilité.",
          ],
          course: [
            {
              heading: "Une fraction est un quotient",
              paragraphs: [
                "En 6e, vous avez utilisé les fractions pour partager : 3/4 d'une tablette de chocolat, ce sont 3 parts quand on la coupe en 4 parts égales. Une fraction est aussi le résultat d'une division : 3/4 = 3 ÷ 4 = 0,75. On dit que 3/4 est le quotient de 3 par 4 ; 3 est le numérateur et 4 le dénominateur.",
                "Le quotient a/b est le nombre qui, multiplié par b, donne a. Ainsi 4 × 3/4 = 3 et 7 × 5/7 = 5. Exemple concret : si l'on partage 3 pizzas entre 4 personnes, chacune reçoit 3/4 de pizza ; et 4 parts de 3/4 de pizza redonnent bien les 3 pizzas.",
                "Certains quotients ont une écriture décimale exacte (7/4 = 1,75), d'autres non : 1/3 = 0,333... avec une infinité de chiffres 3. La fraction 1/3 est alors la seule écriture exacte de ce nombre ; 0,33 n'en est qu'une valeur approchée.",
              ],
              box: { label: "Définition", text: "Si a et b sont deux nombres, avec b différent de 0, le quotient a/b est le nombre qui, multiplié par b, donne a : b × a/b = a." },
            },
            {
              heading: "Des fractions égales",
              paragraphs: [
                "Une fraction ne change pas si l'on multiplie, ou si l'on divise, son numérateur et son dénominateur par un même nombre non nul. Par exemple, 2/5 = (2 × 3)/(5 × 3) = 6/15 et 30/42 = (30 ÷ 6)/(42 ÷ 6) = 5/7. On peut le vérifier avec les quotients : 2 ÷ 5 = 0,4 et 6 ÷ 15 = 0,4.",
                "Cette propriété permet aussi de faire disparaître une virgule : 2,5/4 = (2,5 × 10)/(4 × 10) = 25/40. L'écriture 2,5/4 est une écriture fractionnaire ; 25/40 est une fraction, car son numérateur et son dénominateur sont des nombres entiers.",
                "Attention : ajouter ou soustraire le même nombre en haut et en bas ne donne pas une fraction égale. En ajoutant 1, on passe de 1/2 à 2/3, or 1 ÷ 2 = 0,5 alors que 2 ÷ 3 ≈ 0,67 : ces deux fractions ne sont pas égales.",
              ],
              box: { label: "Propriété", text: "Pour tout nombre k non nul : a/b = (a × k)/(b × k) et a/b = (a ÷ k)/(b ÷ k)." },
            },
            {
              heading: "Simplifier une fraction",
              paragraphs: [
                "Simplifier une fraction, c'est écrire une fraction égale avec un numérateur et un dénominateur plus petits. Pour cela, on divise les deux termes par un même diviseur commun. Exemple avec 36/48 : les deux nombres sont pairs, donc 36/48 = 18/24 ; ils sont encore pairs, donc 18/24 = 9/12 ; enfin 9 et 12 sont divisibles par 3, donc 9/12 = 3/4.",
                "On peut aller plus vite en choisissant un plus grand diviseur commun : 36 et 48 sont tous les deux dans la table de 12, donc 36/48 = (36 ÷ 12)/(48 ÷ 12) = 3/4 en une seule étape. Le résultat est le même, quel que soit le chemin suivi.",
                "Quand le numérateur et le dénominateur n'ont plus d'autre diviseur commun que 1, on ne peut plus simplifier : on dit que la fraction est irréductible. C'est le cas de 3/4, de 5/7 ou de 8/15 (les diviseurs de 8 sont 1, 2, 4, 8 et ceux de 15 sont 1, 3, 5, 15 : seul 1 est commun).",
              ],
              box: { label: "Repère", text: "Critères de divisibilité : par 2 si le chiffre des unités est pair ; par 5 s'il est 0 ou 5 ; par 10 s'il est 0 ; par 3 si la somme des chiffres est divisible par 3 ; par 9 si la somme des chiffres est divisible par 9." },
            },
            {
              heading: "À quoi sert de simplifier ?",
              paragraphs: [
                "Une fraction simplifiée est plus facile à lire et à comparer. Un quart d'heure, ce sont 15 minutes sur 60 : 15/60 = 1/4. Si 18 élèves sur 24 ont réussi un exercice, 18/24 = 3/4 : les trois quarts de la classe ont réussi, ce qui se comprend mieux que « dix-huit vingt-quatrièmes ».",
                "En fin de calcul, on donne en général le résultat sous forme simplifiée. Pour vérifier une simplification, on fait le chemin inverse en multipliant : 3/4 = (3 × 12)/(4 × 12) = 36/48.",
              ],
            },
          ],
          keyPoints: [
            "a/b est le quotient de a par b : b × a/b = a, par exemple 4 × 3/4 = 3.",
            "On obtient une fraction égale en multipliant ou en divisant le numérateur et le dénominateur par un même nombre non nul.",
            "Ajouter le même nombre en haut et en bas ne donne pas une fraction égale : 1/2 n'est pas égal à 2/3.",
            "Simplifier : diviser les deux termes par un diviseur commun, en s'aidant des critères de divisibilité.",
            "Une fraction est irréductible quand son numérateur et son dénominateur n'ont pas d'autre diviseur commun que 1.",
          ],
          example: {
            statement: "Simplifiez le plus possible la fraction 84/126.",
            solution: [
              "84 et 126 sont pairs : on divise par 2. 84/126 = 42/63.",
              "La somme des chiffres de 42 est 4 + 2 = 6 et celle de 63 est 6 + 3 = 9 : les deux nombres sont divisibles par 3. 42/63 = 14/21.",
              "14 et 21 sont tous les deux dans la table de 7 : 14/21 = 2/3.",
              "Les diviseurs de 2 sont 1 et 2, ceux de 3 sont 1 et 3 : seul 1 est commun, la fraction 2/3 est irréductible.",
              "Vérification : (2 × 42)/(3 × 42) = 84/126.",
              "Réponse : 84/126 = 2/3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez : a) 3/7 = .../28 ; b) 45/60 = 3/... ; c) 2,4/3 = .../30 ; d) 8 × 5/8 = ...",
              hint: "Cherchez par quel nombre on a multiplié ou divisé le terme connu, et faites la même chose avec l'autre terme. Pour le d, pensez à la définition du quotient.",
              solution: [
                "a) On passe de 7 à 28 en multipliant par 4, donc 3 × 4 = 12 : 3/7 = 12/28.",
                "b) On passe de 45 à 3 en divisant par 15, donc 60 ÷ 15 = 4 : 45/60 = 3/4.",
                "c) On passe de 3 à 30 en multipliant par 10, donc 2,4 × 10 = 24 : 2,4/3 = 24/30.",
                "d) 5/8 est le nombre qui, multiplié par 8, donne 5 : 8 × 5/8 = 5.",
                "Réponse : 12 ; 4 ; 24 ; 5.",
              ],
            },
            {
              level: 2,
              statement: "Simplifiez le plus possible chaque fraction, en indiquant les étapes : a) 18/27 ; b) 60/84 ; c) 75/100 ; d) 135/90.",
              hint: "Utilisez les critères de divisibilité par 2, 3, 5 et 9, et recommencez tant que c'est possible.",
              solution: [
                "a) 1 + 8 = 9 et 2 + 7 = 9 : 18 et 27 sont divisibles par 9. 18/27 = 2/3.",
                "b) 60 et 84 sont pairs : 60/84 = 30/42 = 15/21. Puis 15 et 21 sont divisibles par 3 : 15/21 = 5/7.",
                "c) 75 et 100 sont divisibles par 25 : 75/100 = 3/4.",
                "d) 135 se termine par 5 et 90 par 0 : on divise par 5, 135/90 = 27/18. Puis 27 et 18 sont divisibles par 9 : 27/18 = 3/2.",
                "Réponse : 2/3 ; 5/7 ; 3/4 ; 3/2 (toutes irréductibles).",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Dans un collège, 210 élèves sur 280 mangent à la cantine. a) Écrivez la fraction des élèves qui mangent à la cantine et simplifiez-la le plus possible. b) Dans le collège voisin, la même fraction des 360 élèves mange à la cantine. Combien d'élèves cela représente-t-il ? c) Trouvez une fraction égale à celle du a dont la somme du numérateur et du dénominateur vaut 63.",
              hint: "Pour le b, partagez 360 en autant de parts que l'indique le dénominateur. Pour le c, si l'on multiplie le numérateur et le dénominateur par un même nombre, leur somme est multipliée par ce nombre.",
              solution: [
                "a) La fraction est 210/280. On divise par 10 : 21/28. Puis 21 et 28 sont dans la table de 7 : 21/28 = 3/4.",
                "b) Les 3/4 de 360 : 360 ÷ 4 = 90, puis 90 × 3 = 270 élèves.",
                "c) Dans 3/4, la somme du numérateur et du dénominateur vaut 3 + 4 = 7. En multipliant 3 et 4 par un même nombre, cette somme est multipliée par ce nombre.",
                "Or 63 = 7 × 9 : on multiplie donc par 9. 3/4 = (3 × 9)/(4 × 9) = 27/36, et 27 + 36 = 63.",
                "Réponse : a) 3/4 ; b) 270 élèves ; c) 27/36.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque fraction à sa forme simplifiée au maximum.",
            pairs: [
              { left: "12/16", right: "3/4" },
              { left: "10/25", right: "2/5" },
              { left: "14/21", right: "2/3" },
              { left: "45/50", right: "9/10" },
              { left: "35/14", right: "5/2" },
              { left: "8/56", right: "1/7" },
            ],
          },
          quiz: [
            { q: "Quelle fraction est égale à 4/6 ?", options: ["5/7", "8/10", "2/3", "6/8"], answer: 2, why: "On divise 4 et 6 par 2 : 4/6 = 2/3. Ajouter 1 en haut et en bas (5/7) ne donne pas une fraction égale." },
            { q: "Combien vaut 8 × 5/8 ?", options: ["5", "40", "8/5", "13"], answer: 0, why: "5/8 est le nombre qui, multiplié par 8, donne 5." },
            { q: "Par quel nombre faut-il diviser le numérateur et le dénominateur de 27/36 pour la simplifier au maximum en une seule étape ?", options: ["3", "9", "4", "27"], answer: 1, why: "27 et 36 sont dans la table de 9 : 27/36 = 3/4, qui est irréductible." },
            { q: "Quelle fraction est irréductible ?", options: ["15/21", "22/33", "14/45", "18/30"], answer: 2, why: "14 = 2 × 7 et 45 = 3 × 3 × 5 n'ont pas de diviseur commun autre que 1. Les autres se simplifient par 3, par 11 et par 6." },
            { q: "Laquelle de ces égalités est fausse ?", options: ["3/5 = 9/15", "2/7 = 3/8", "6/4 = 3/2", "1,5/2 = 15/20"], answer: 1, why: "On a ajouté 1 au numérateur et au dénominateur, ce qui ne donne pas une fraction égale." },
          ],
          trap: "Ajouter ou soustraire le même nombre au numérateur et au dénominateur, ou ne diviser qu'un seul des deux termes : 6/8 n'est égal ni à 5/7 ni à 3/8, mais à 3/4.",
          method: "Pour simplifier, testez les critères de divisibilité dans l'ordre (2, 3, 5, 9, puis 7) et recommencez jusqu'à ce que le seul diviseur commun soit 1. Vérifiez ensuite en multipliant en sens inverse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'comparer-fractions',
          title: 'Comparer des fractions',
          minutes: 30,
          objectives: [
            "Comparer une fraction à 1 et l'encadrer entre deux nombres entiers consécutifs.",
            "Comparer deux fractions de même dénominateur ou de même numérateur.",
            "Comparer et ranger des fractions dont les dénominateurs sont multiples l'un de l'autre.",
            "Placer des fractions sur une demi-droite graduée.",
          ],
          course: [
            {
              heading: "Situer une fraction par rapport aux entiers",
              paragraphs: [
                "Une fraction est plus petite que 1 quand son numérateur est plus petit que son dénominateur : il manque des parts pour faire une unité. Un réservoir rempli aux 7/8 n'est pas plein : 7/8 < 1. Une recette qui demande 5/4 de litre de lait en demande plus d'un litre : 5/4 > 1.",
                "On peut aussi encadrer une fraction entre deux entiers consécutifs. Pour 17/5, on cherche les multiples de 5 qui entourent 17 : ce sont 15 et 20. Comme 15/5 = 3 et 20/5 = 4, on a 3 < 17/5 < 4. On peut aussi écrire 17/5 = 15/5 + 2/5 = 3 + 2/5.",
              ],
              box: { label: "Règle", text: "Pour des nombres entiers a et b (b non nul) : a/b < 1 si a < b ; a/b = 1 si a = b ; a/b > 1 si a > b." },
            },
            {
              heading: "Même dénominateur ou même numérateur",
              paragraphs: [
                "Quand deux fractions ont le même dénominateur, leurs parts ont la même taille : il suffit de compter les parts. Ainsi 4/9 < 7/9, car 4 neuvièmes, c'est moins que 7 neuvièmes.",
                "Quand deux fractions ont le même numérateur, on prend le même nombre de parts, mais les parts n'ont pas la même taille. Plus on coupe l'unité en un grand nombre de parts, plus chaque part est petite : un tiers de pizza est plus gros qu'un huitième de la même pizza, donc 1/3 > 1/8. De même, 3/7 > 3/10 : les septièmes sont plus grands que les dixièmes.",
              ],
              box: { label: "Règle", text: "Même dénominateur : la plus grande fraction est celle qui a le plus grand numérateur. Même numérateur : la plus grande fraction est celle qui a le plus petit dénominateur." },
            },
            {
              heading: "Se ramener au même dénominateur",
              paragraphs: [
                "Quand les dénominateurs sont différents, on écrit l'une des fractions avec le dénominateur de l'autre. C'est simple quand un dénominateur est un multiple de l'autre. Pour comparer 5/6 et 7/12 : 12 = 6 × 2, donc 5/6 = 10/12. Comme 10/12 > 7/12, on conclut que 5/6 > 7/12.",
                "Pour ranger plusieurs fractions, on les écrit toutes avec le dénominateur qui est un multiple de tous les autres. Avec 2/3, 5/6 et 7/12, on écrit tout en douzièmes : 8/12, 10/12 et 7/12. Donc 7/12 < 2/3 < 5/6.",
                "On peut contrôler à la calculatrice en calculant les quotients : 5/6 ≈ 0,83 et 7/12 ≈ 0,58. Ce contrôle est utile, mais seule la méthode des dénominateurs donne une comparaison exacte, sans valeur approchée.",
              ],
              box: { label: "Méthode", text: "1. Chercher si un dénominateur est un multiple de l'autre. 2. Écrire l'autre fraction avec ce dénominateur. 3. Comparer les numérateurs. 4. Conclure avec les fractions de départ." },
            },
            {
              heading: "Placer des fractions sur une demi-droite graduée",
              paragraphs: [
                "Pour placer 1/3, 5/6 et 7/12 sur une même demi-droite graduée, on choisit une unité facile à partager en 12, par exemple 12 carreaux. Un douzième correspond alors à 1 carreau : 1/3 = 4/12 est placé à 4 carreaux de l'origine, 7/12 à 7 carreaux et 5/6 = 10/12 à 10 carreaux.",
                "Sur une demi-droite graduée, les nombres sont rangés dans l'ordre croissant de gauche à droite : le point le plus à droite représente la plus grande fraction. Placer des fractions est donc une autre façon de les comparer.",
              ],
            },
          ],
          keyPoints: [
            "Une fraction est plus petite que 1 si son numérateur est plus petit que son dénominateur.",
            "On encadre une fraction entre deux entiers consécutifs : 15/5 = 3 < 17/5 < 20/5 = 4.",
            "Même dénominateur : on compare les numérateurs. Même numérateur : la plus grande fraction a le plus petit dénominateur.",
            "Si un dénominateur est multiple de l'autre, on écrit les deux fractions avec ce dénominateur, puis on compare les numérateurs.",
            "Sur une demi-droite graduée, la plus grande fraction est placée le plus à droite.",
          ],
          example: {
            statement: "Rangez dans l'ordre croissant : 5/6 ; 3/4 ; 7/12 ; 2/3 ; 13/12.",
            solution: [
              "Les dénominateurs sont 6, 4, 12 et 3. Le nombre 12 est un multiple de 6, de 4 et de 3 : on écrit toutes les fractions en douzièmes.",
              "5/6 = (5 × 2)/(6 × 2) = 10/12 ; 3/4 = (3 × 3)/(4 × 3) = 9/12 ; 2/3 = (2 × 4)/(3 × 4) = 8/12.",
              "On range les numérateurs : 7 < 8 < 9 < 10 < 13, donc 7/12 < 8/12 < 9/12 < 10/12 < 13/12.",
              "On revient aux fractions de l'énoncé. Réponse : 7/12 < 2/3 < 3/4 < 5/6 < 13/12.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comparez avec <, > ou =, en justifiant : a) 7/9 et 1 ; b) 4/11 et 4/13 ; c) 13/8 et 11/8 ; d) 6/5 et 5/6.",
              hint: "Regardez d'abord si les fractions ont le même dénominateur, le même numérateur, ou si l'une est plus grande que 1 et l'autre plus petite.",
              solution: [
                "a) 7 < 9 : il manque des parts pour faire l'unité, donc 7/9 < 1.",
                "b) Même numérateur : les onzièmes sont plus grands que les treizièmes, donc 4/11 > 4/13.",
                "c) Même dénominateur et 13 > 11, donc 13/8 > 11/8.",
                "d) 6/5 > 1 car 6 > 5, et 5/6 < 1 car 5 < 6. Donc 6/5 > 5/6.",
                "Réponse : 7/9 < 1 ; 4/11 > 4/13 ; 13/8 > 11/8 ; 6/5 > 5/6.",
              ],
            },
            {
              level: 2,
              statement: "a) Comparez 3/5 et 13/20. b) Comparez 7/3 et 20/9. c) Comparez 11/14 et 4/7. d) Encadrez 23/6 entre deux nombres entiers consécutifs.",
              hint: "Pour a, b et c, un dénominateur est un multiple de l'autre. Pour le d, cherchez les multiples de 6 qui entourent 23.",
              solution: [
                "a) 20 = 5 × 4, donc 3/5 = 12/20. Comme 12/20 < 13/20, on a 3/5 < 13/20.",
                "b) 9 = 3 × 3, donc 7/3 = 21/9. Comme 21/9 > 20/9, on a 7/3 > 20/9.",
                "c) 14 = 7 × 2, donc 4/7 = 8/14. Comme 11/14 > 8/14, on a 11/14 > 4/7.",
                "d) Les multiples de 6 qui entourent 23 sont 18 et 24. Or 18/6 = 3 et 24/6 = 4, donc 3 < 23/6 < 4.",
                "Réponse : 3/5 < 13/20 ; 7/3 > 20/9 ; 11/14 > 4/7 ; 3 < 23/6 < 4.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Trois amies lisent le même roman. Léa en a lu les 3/4, Nora les 5/8 et Sacha les 11/16. a) Rangez les trois amies de celle qui a lu le moins à celle qui a lu le plus. b) Donnez toutes les fractions de dénominateur 16 strictement comprises entre 5/8 et 3/4. c) Donnez trois fractions de dénominateur 32 strictement comprises entre 5/8 et 3/4.",
              hint: "16 est un multiple de 4 et de 8 : écrivez tout en seizièmes. Pour le c, écrivez 5/8 et 3/4 en trente-deuxièmes.",
              solution: [
                "a) En seizièmes : Léa 3/4 = 12/16 ; Nora 5/8 = 10/16 ; Sacha 11/16.",
                "Comme 10/16 < 11/16 < 12/16, l'ordre est : Nora, Sacha, Léa.",
                "b) 5/8 = 10/16 et 3/4 = 12/16. Le seul numérateur entier strictement compris entre 10 et 12 est 11 : la seule fraction est 11/16.",
                "c) 5/8 = 20/32 et 3/4 = 24/32. Les fractions 21/32, 22/32 et 23/32 conviennent (22/32 n'est autre que 11/16).",
                "Réponse : Nora, Sacha, Léa ; 11/16 ; 21/32, 22/32 et 23/32.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces fractions dans l'ordre croissant, de la plus petite à la plus grande.",
            items: ["1/6", "1/3", "5/12", "7/12", "3/4", "5/4"],
          },
          quiz: [
            { q: "Quelle fraction est plus grande que 1 ?", options: ["9/10", "9/9", "1/9", "10/9"], answer: 3, why: "Dans 10/9, le numérateur dépasse le dénominateur : on a plus d'une unité. 9/9 est égal à 1." },
            { q: "Quel signe faut-il placer entre 5/7 et 5/9 ?", options: ["<", ">", "="], answer: 1, why: "Même numérateur : un septième est plus grand qu'un neuvième, donc 5/7 > 5/9." },
            { q: "Pour comparer 7/8 et 13/16, on écrit 7/8 sous la forme :", options: ["14/16", "7/16", "13/8", "15/16"], answer: 0, why: "On multiplie le numérateur et le dénominateur par 2 : 7/8 = 14/16, et 14/16 > 13/16." },
            { q: "Entre quels nombres entiers consécutifs se trouve 17/5 ?", options: ["1 et 2", "5 et 6", "3 et 4", "16 et 17"], answer: 2, why: "15/5 = 3 et 20/5 = 4, et 15 < 17 < 20." },
            { q: "Quel rangement est correct ?", options: ["2/3 < 5/6 < 7/12", "7/12 < 2/3 < 5/6", "5/6 < 2/3 < 7/12", "2/3 < 7/12 < 5/6"], answer: 1, why: "En douzièmes : 7/12 < 8/12 < 10/12." },
          ],
          trap: "Croire que plus le dénominateur est grand, plus la fraction est grande, ou comparer seulement les numérateurs de fractions de dénominateurs différents : 3/4 est plus grand que 5/8, car 3/4 = 6/8.",
          method: "Avant tout calcul, faites trois tests rapides : la comparaison à 1, le même dénominateur, le même numérateur. Si aucun ne suffit, écrivez les fractions avec le même dénominateur, comparez, puis concluez avec les fractions de l'énoncé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'additionner-fractions',
          title: 'Additionner et soustraire des fractions, résoudre des problèmes',
          minutes: 35,
          objectives: [
            "Additionner et soustraire des fractions dont les dénominateurs sont égaux ou multiples l'un de l'autre.",
            "Simplifier le résultat d'un calcul.",
            "Calculer une fraction d'une quantité.",
            "Résoudre un problème faisant intervenir des sommes et des différences de fractions.",
          ],
          course: [
            {
              heading: "Rappel : des fractions de même dénominateur",
              paragraphs: [
                "Pour additionner 2/7 et 3/7, on additionne des septièmes comme on additionne des objets : 2 septièmes + 3 septièmes = 5 septièmes, donc 2/7 + 3/7 = 5/7. Le dénominateur, qui indique la taille des parts, ne change pas. De même : 9/10 - 4/10 = 5/10 = 1/2.",
                "Erreur classique : additionner aussi les dénominateurs. 1/4 + 1/4 n'est pas égal à 2/8, puisque 2/8 = 1/4 : on retrouverait l'une des fractions de départ ! Un quart plus un quart font deux quarts, c'est-à-dire une moitié : 1/4 + 1/4 = 2/4 = 1/2.",
              ],
              box: { label: "Règle", text: "a/d + b/d = (a + b)/d et a/d - b/d = (a - b)/d : on additionne ou l'on soustrait les numérateurs, et l'on garde le dénominateur." },
            },
            {
              heading: "Quand un dénominateur est un multiple de l'autre",
              paragraphs: [
                "Pour calculer 2/3 + 5/12, on remarque que 12 = 3 × 4. On écrit 2/3 avec le dénominateur 12 : 2/3 = 8/12. Alors 2/3 + 5/12 = 8/12 + 5/12 = 13/12.",
                "La méthode est la même pour une soustraction : 7/10 - 1/5 = 7/10 - 2/10 = 5/10 = 1/2. Avec plusieurs fractions, on choisit le dénominateur qui est un multiple de tous les autres : 1/2 + 3/8 + 1/4 = 4/8 + 3/8 + 2/8 = 9/8.",
                "Un nombre entier s'écrit avec n'importe quel dénominateur : 3 = 18/6. Donc 3 - 5/6 = 18/6 - 5/6 = 13/6. En fin de calcul, on simplifie le résultat quand c'est possible.",
              ],
              box: { label: "Méthode", text: "1. Choisir comme dénominateur commun celui qui est un multiple des autres. 2. Écrire chaque fraction avec ce dénominateur. 3. Additionner ou soustraire les numérateurs. 4. Simplifier le résultat si possible." },
            },
            {
              heading: "Prendre une fraction d'une quantité",
              paragraphs: [
                "Prendre les 3/4 de 60 €, c'est partager 60 € en 4 parts égales et en prendre 3 : 60 ÷ 4 = 15, puis 15 × 3 = 45 €. On peut aussi calculer 3 × 60 ÷ 4 = 180 ÷ 4 = 45 €. On écrit : 3/4 × 60 = 45. Prendre une fraction d'une quantité revient à multiplier cette quantité par la fraction.",
                "Exemple : dans un collège de 540 élèves (données fictives), les 2/9 viennent à vélo. On calcule 540 ÷ 9 = 60, puis 60 × 2 = 120 : 120 élèves viennent à vélo. On choisit l'ordre des calculs qui tombe juste : ici, 540 se divise bien par 9.",
              ],
              box: { label: "Formule", text: "Les a/b d'une quantité Q : a/b × Q = (Q ÷ b) × a = (a × Q) ÷ b." },
            },
            {
              heading: "Résoudre un problème avec des fractions",
              paragraphs: [
                "Dans beaucoup de problèmes, la quantité totale (un gâteau, une somme d'argent, un trajet, une journée) représente l'unité : elle vaut 1, que l'on peut écrire 2/2, 3/3, 8/8... La partie qui reste se calcule alors par une soustraction à partir de 1.",
                "Exemple : Léo dépense 1/2 de son argent de poche pour un livre et 1/8 pour un goûter. Il a dépensé 1/2 + 1/8 = 4/8 + 1/8 = 5/8 de son argent. Il lui reste 1 - 5/8 = 8/8 - 5/8 = 3/8. S'il avait 40 €, il lui reste 40 ÷ 8 × 3 = 15 €. Vérification : il a dépensé 20 € + 5 € = 25 €, et 25 + 15 = 40.",
              ],
            },
          ],
          keyPoints: [
            "Même dénominateur : on additionne (ou on soustrait) les numérateurs et l'on garde le dénominateur.",
            "On n'additionne jamais les dénominateurs : 1/4 + 1/4 = 2/4 = 1/2.",
            "Si un dénominateur est multiple de l'autre, on écrit les deux fractions avec ce dénominateur : 2/3 + 5/12 = 8/12 + 5/12 = 13/12.",
            "Un entier s'écrit avec le dénominateur voulu : 3 = 18/6.",
            "Les a/b d'une quantité Q : on divise Q par b, puis on multiplie par a.",
            "Dans un problème, le tout vaut 1 : ce qui reste = 1 - ce qui a été utilisé.",
          ],
          example: {
            statement: "Un jardin de 360 m² (données fictives) est partagé ainsi : 1/3 pour le potager, 1/6 pour les fleurs et 1/12 pour une serre. Le reste est en pelouse. a) Quelle fraction du jardin est en pelouse ? b) Quelle est l'aire de la pelouse ?",
            solution: [
              "a) 12 est un multiple de 3 et de 6 : on écrit tout en douzièmes. 1/3 = 4/12 et 1/6 = 2/12.",
              "Fraction occupée : 4/12 + 2/12 + 1/12 = 7/12.",
              "Le jardin entier vaut 1 = 12/12, donc la pelouse occupe 12/12 - 7/12 = 5/12 du jardin.",
              "b) Les 5/12 de 360 m² : 360 ÷ 12 = 30, puis 30 × 5 = 150 m².",
              "Réponse : la pelouse occupe 5/12 du jardin, soit 150 m².",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez et simplifiez si possible : a) 3/11 + 5/11 ; b) 7/9 - 1/3 ; c) 5/6 + 1/12 ; d) 2 - 3/4.",
              hint: "Écrivez d'abord les deux fractions avec le même dénominateur. Pour le d, écrivez 2 en quarts.",
              solution: [
                "a) Même dénominateur : 3/11 + 5/11 = 8/11.",
                "b) 9 = 3 × 3, donc 1/3 = 3/9 : 7/9 - 3/9 = 4/9.",
                "c) 12 = 6 × 2, donc 5/6 = 10/12 : 10/12 + 1/12 = 11/12.",
                "d) 2 = 8/4 : 8/4 - 3/4 = 5/4.",
                "Réponse : 8/11 ; 4/9 ; 11/12 ; 5/4.",
              ],
            },
            {
              level: 2,
              statement: "Calculez et simplifiez le résultat : a) 1/4 + 3/8 + 5/16 ; b) 11/15 - 2/5 ; c) 7/10 + 3/20 - 1/4.",
              hint: "Cherchez le dénominateur qui est un multiple de tous les autres : 16 pour le a, 15 pour le b, 20 pour le c.",
              solution: [
                "a) 1/4 = 4/16 et 3/8 = 6/16 : 4/16 + 6/16 + 5/16 = 15/16 (irréductible).",
                "b) 2/5 = 6/15 : 11/15 - 6/15 = 5/15 = 1/3.",
                "c) 7/10 = 14/20 et 1/4 = 5/20 : 14/20 + 3/20 - 5/20 = 12/20.",
                "On simplifie par 4 : 12/20 = 3/5.",
                "Réponse : 15/16 ; 1/3 ; 3/5.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Une citerne contient 1 200 L d'eau de pluie. Pour arroser le jardin, on utilise lundi 1/4 de la citerne pleine, mardi 3/8 et mercredi 1/16. a) Quelle fraction de l'eau a été utilisée en trois jours ? b) Quelle fraction de l'eau reste-t-il ? c) Combien de litres reste-t-il ? d) Jeudi, on voudrait utiliser 1/3 de la citerne pleine. Est-ce possible s'il n'a pas plu ?",
              hint: "16 est un multiple de 4 et de 8. Pour le d, calculez le tiers de 1 200 L et comparez avec ce qui reste.",
              solution: [
                "a) 1/4 = 4/16 et 3/8 = 6/16 : 4/16 + 6/16 + 1/16 = 11/16 de l'eau ont été utilisés.",
                "b) La citerne pleine vaut 1 = 16/16 : il reste 16/16 - 11/16 = 5/16 de l'eau.",
                "c) Les 5/16 de 1 200 L : 1 200 ÷ 16 = 75, puis 75 × 5 = 375 L.",
                "Vérification : 1 200 - 375 = 825 L utilisés, et les 11/16 de 1 200 L font bien 75 × 11 = 825 L.",
                "d) 1/3 de 1 200 L : 1 200 ÷ 3 = 400 L. Or il ne reste que 375 L, et 400 > 375.",
                "Réponse : 11/16 ; 5/16 ; 375 L ; ce n'est pas possible, il manquerait 25 L.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Méfiez-vous des additions trop rapides.",
            statements: [
              { text: "1/4 + 1/4 = 2/8", true: false, why: "On n'additionne pas les dénominateurs : 1/4 + 1/4 = 2/4 = 1/2." },
              { text: "2/3 + 1/6 = 5/6", true: true, why: "2/3 = 4/6, et 4/6 + 1/6 = 5/6." },
              { text: "5/7 - 2/7 = 3/7", true: true, why: "Même dénominateur : on soustrait les numérateurs, 5 - 2 = 3." },
              { text: "1 + 2/5 = 3/5", true: false, why: "1 = 5/5, donc 1 + 2/5 = 5/5 + 2/5 = 7/5." },
              { text: "1/2 + 1/4 = 2/4", true: false, why: "1/2 = 2/4, donc 1/2 + 1/4 = 2/4 + 1/4 = 3/4." },
              { text: "Les 2/3 de 30 billes, ce sont 20 billes.", true: true, why: "30 ÷ 3 = 10, puis 10 × 2 = 20." },
              { text: "3/4 - 1/2 = 2/2", true: false, why: "1/2 = 2/4, donc 3/4 - 2/4 = 1/4." },
            ],
          },
          quiz: [
            { q: "Combien vaut 2/9 + 5/9 ?", options: ["7/18", "7/9", "10/9", "3/9"], answer: 1, why: "Même dénominateur : on additionne les numérateurs et l'on garde 9." },
            { q: "Combien vaut 3/4 - 1/8 ?", options: ["2/4", "1/2", "5/8", "2/8"], answer: 2, why: "3/4 = 6/8, et 6/8 - 1/8 = 5/8." },
            { q: "Combien vaut 1 - 3/10 ?", options: ["7/10", "2/10", "3/9", "1/3"], answer: 0, why: "1 = 10/10, et 10/10 - 3/10 = 7/10." },
            { q: "Les 3/5 des 25 élèves d'une classe sont des filles. Combien y a-t-il de filles ?", options: ["5", "10", "18", "15"], answer: 3, why: "25 ÷ 5 = 5, puis 5 × 3 = 15." },
            { q: "Quel est le plus petit dénominateur commun pour calculer 5/6 + 7/18 ?", options: ["6", "24", "18", "12"], answer: 2, why: "18 = 6 × 3 est un multiple de 6 : on écrit 5/6 = 15/18." },
          ],
          trap: "Additionner les numérateurs entre eux et les dénominateurs entre eux : 1/2 + 1/4 n'est pas égal à 2/6. On écrit d'abord 1/2 = 2/4, puis 2/4 + 1/4 = 3/4.",
          method: "Avant de calculer, regardez les dénominateurs et cherchez celui qui est un multiple des autres. Après le calcul, simplifiez, puis contrôlez l'ordre de grandeur : une somme de fractions est plus grande que chacune des fractions ajoutées.",
        },
      ],
    },

    /* ================================================================== */
    /* PROPORTIONNALITÉ ET DÉPENDANCE ENTRE GRANDEURS                       */
    /* ================================================================== */
    {
      id: 'proportionnalite-fonctions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reconnaitre-proportionnalite',
          title: 'Reconnaître une situation de proportionnalité, le coefficient',
          minutes: 35,
          objectives: [
            "Reconnaître une situation de proportionnalité ou de non-proportionnalité.",
            "Calculer un coefficient de proportionnalité et l'interpréter.",
            "Compléter un tableau de proportionnalité par le coefficient, la linéarité ou le passage à l'unité.",
          ],
          course: [
            {
              heading: "Deux grandeurs proportionnelles",
              paragraphs: [
                "Au marché, les pommes coûtent 2,40 € le kilogramme. Pour 2 kg, on paie 2 × 2,40 = 4,80 € ; pour 3 kg, 3 × 2,40 = 7,20 €. Pour trouver le prix, on multiplie toujours la masse par le même nombre, 2,40 : le prix payé est proportionnel à la masse achetée.",
                "Beaucoup de situations ne sont pas de proportionnalité, même si les deux grandeurs augmentent ensemble. Un taxi qui fait payer 4 € de prise en charge, puis 2 € par kilomètre, demande 6 € pour 1 km et 8 € pour 2 km : deux fois plus de kilomètres, mais pas deux fois plus cher. De même, la taille d'un enfant n'est pas proportionnelle à son âge.",
              ],
              box: { label: "Définition", text: "Deux grandeurs sont proportionnelles quand on obtient les valeurs de l'une en multipliant les valeurs de l'autre par un même nombre, appelé coefficient de proportionnalité." },
            },
            {
              heading: "Le tableau et le coefficient",
              paragraphs: [
                "On range souvent les valeurs dans un tableau à deux lignes. Pour savoir s'il s'agit d'un tableau de proportionnalité, on calcule, dans chaque colonne, le quotient de la valeur du bas par la valeur du haut. Si tous les quotients sont égaux, c'est un tableau de proportionnalité, et ce quotient commun est le coefficient.",
                "Exemple : pour 2 kg, 3 kg et 5 kg de pommes, on paie 4,80 €, 7,20 € et 12 €. On calcule 4,80 ÷ 2 = 2,4 ; 7,20 ÷ 3 = 2,4 ; 12 ÷ 5 = 2,4. Tous les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient 2,4. Contre-exemple (données fictives) : 1, 2 et 3 places de cinéma coûtent 8 €, 15 € et 21 €. Or 8 ÷ 1 = 8 mais 15 ÷ 2 = 7,5 : ce n'est pas proportionnel.",
                "Le coefficient a souvent un sens concret : ici, 2,4 est le prix d'un kilogramme (2,40 € par kg). Pour passer de la ligne du bas à la ligne du haut, on divise par le coefficient : avec 9,60 €, on achète 9,60 ÷ 2,4 = 4 kg de pommes.",
              ],
              box: { label: "À retenir", text: "Tableau de proportionnalité : tous les quotients (ligne du bas ÷ ligne du haut) sont égaux. Ligne du haut × coefficient = ligne du bas ; ligne du bas ÷ coefficient = ligne du haut." },
            },
            {
              heading: "Compléter un tableau de proportionnalité",
              paragraphs: [
                "Problème : 6 croissants coûtent 7,20 €. Combien coûtent 9 croissants ? Méthode 1, le passage à l'unité : 1 croissant coûte 7,20 ÷ 6 = 1,20 €, donc 9 croissants coûtent 9 × 1,20 = 10,80 €. Méthode 2, le coefficient : il vaut 7,20 ÷ 6 = 1,2, et 9 × 1,2 = 10,8.",
                "Méthode 3, la linéarité : si l'on multiplie (ou divise) une quantité par un nombre, le prix est multiplié (ou divisé) par le même nombre. 3 croissants, c'est la moitié de 6, donc ils coûtent 7,20 ÷ 2 = 3,60 €. Et comme 9 = 6 + 3, 9 croissants coûtent 7,20 + 3,60 = 10,80 €. Dans un tableau de proportionnalité, on peut additionner deux colonnes.",
                "On choisit la méthode la plus simple selon les nombres : la linéarité est souvent la plus rapide en calcul mental, le passage à l'unité fonctionne toujours. Quelle que soit la méthode, on trouve le même résultat.",
              ],
              box: { label: "Méthode", text: "Coefficient : multiplier toujours par le même nombre. Linéarité : si la première grandeur est multipliée ou divisée par un nombre, la seconde aussi ; on peut additionner deux colonnes. Passage à l'unité : calculer la valeur pour 1, puis multiplier." },
            },
          ],
          keyPoints: [
            "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre : le coefficient.",
            "Tableau de proportionnalité : tous les quotients (ligne du bas ÷ ligne du haut) sont égaux.",
            "Deux grandeurs qui augmentent ensemble ne sont pas forcément proportionnelles (le taxi, la taille selon l'âge).",
            "Pour compléter un tableau : le coefficient, la linéarité (multiplier, additionner des colonnes) ou le passage à l'unité.",
            "Le coefficient a un sens : un prix par kilogramme, une distance par heure, une quantité par personne.",
          ],
          example: {
            statement: "Une recette de crêpes (données fictives) indique la masse de farine selon le nombre de personnes : 300 g pour 4 personnes, 450 g pour 6 personnes, 750 g pour 10 personnes. a) La masse de farine est-elle proportionnelle au nombre de personnes ? b) Quelle masse de farine faut-il pour 14 personnes ?",
            solution: [
              "a) On calcule les quotients masse ÷ nombre de personnes : 300 ÷ 4 = 75 ; 450 ÷ 6 = 75 ; 750 ÷ 10 = 75.",
              "Tous les quotients sont égaux : la masse de farine est proportionnelle au nombre de personnes, avec le coefficient 75 (il faut 75 g de farine par personne).",
              "b) On multiplie par le coefficient : 14 × 75 = 1 050 g.",
              "Vérification par la linéarité : 14 = 4 + 10, donc il faut 300 + 750 = 1 050 g.",
              "Réponse : oui ; il faut 1 050 g de farine pour 14 personnes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ces tableaux sont-ils des tableaux de proportionnalité ? Si oui, donnez le coefficient. Tableau A : ligne du haut 3 ; 5 ; 8 et ligne du bas 12 ; 20 ; 32. Tableau B : ligne du haut 2 ; 4 ; 7 et ligne du bas 5 ; 10 ; 16.",
              hint: "Calculez, dans chaque colonne, le quotient de la valeur du bas par la valeur du haut.",
              solution: [
                "Tableau A : 12 ÷ 3 = 4 ; 20 ÷ 5 = 4 ; 32 ÷ 8 = 4. Les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient 4.",
                "Tableau B : 5 ÷ 2 = 2,5 et 10 ÷ 4 = 2,5, mais 7 × 2,5 = 17,5 et non 16. Les quotients ne sont pas tous égaux : ce n'est pas un tableau de proportionnalité.",
                "Réponse : A est un tableau de proportionnalité (coefficient 4) ; B n'en est pas un.",
              ],
            },
            {
              level: 2,
              statement: "Une voiture consomme 6 L d'essence pour 100 km (données fictives), et la consommation est proportionnelle à la distance parcourue. Calculez la consommation pour 50 km, 250 km, 400 km et 30 km. Quel est le coefficient qui permet de passer de la distance à la consommation ? Que représente-t-il ?",
              hint: "Utilisez la linéarité pour 50 km, 250 km et 400 km (moitié, somme, multiple de 100 km), puis le coefficient pour 30 km.",
              solution: [
                "50 km, c'est la moitié de 100 km : 6 ÷ 2 = 3 L.",
                "250 km = 100 km + 100 km + 50 km : 6 + 6 + 3 = 15 L.",
                "400 km = 4 × 100 km : 4 × 6 = 24 L.",
                "Le coefficient vaut 6 ÷ 100 = 0,06. Pour 30 km : 30 × 0,06 = 1,8 L.",
                "Le coefficient 0,06 représente la consommation pour 1 km : 0,06 L par kilomètre.",
                "Réponse : 3 L ; 15 L ; 24 L ; 1,8 L ; coefficient 0,06 L par km.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Une piscine propose deux tarifs. Tarif A : 4,50 € l'entrée. Tarif B : un abonnement de 30 € pour l'année, puis 2 € l'entrée. a) Calculez le prix payé avec chaque tarif pour 5, 10, 15 et 20 entrées. b) Lequel des deux prix est proportionnel au nombre d'entrées ? Justifiez. c) À partir de combien d'entrées le tarif B devient-il plus avantageux que le tarif A ?",
              hint: "Pour le c, cherchez combien le tarif B fait économiser à chaque entrée, et combien d'entrées il faut pour compenser l'abonnement.",
              solution: [
                "a) Tarif A : 5 × 4,50 = 22,50 € ; 10 × 4,50 = 45 € ; 15 × 4,50 = 67,50 € ; 20 × 4,50 = 90 €.",
                "Tarif B : 30 + 5 × 2 = 40 € ; 30 + 10 × 2 = 50 € ; 30 + 15 × 2 = 60 € ; 30 + 20 × 2 = 70 €.",
                "b) Tarif A : tous les quotients prix ÷ nombre d'entrées valent 4,5, le prix est proportionnel (coefficient 4,5). Tarif B : 40 ÷ 5 = 8 mais 50 ÷ 10 = 5, le prix n'est pas proportionnel, à cause de l'abonnement.",
                "c) À chaque entrée, le tarif B coûte 4,50 - 2 = 2,50 € de moins que le tarif A. L'abonnement de 30 € est compensé au bout de 30 ÷ 2,50 = 12 entrées.",
                "Pour 12 entrées, A coûte 12 × 4,50 = 54 € et B coûte 30 + 12 × 2 = 54 € : les deux tarifs sont égaux. Pour 13 entrées, A coûte 58,50 € et B coûte 56 €.",
                "Réponse : seul le tarif A est proportionnel ; le tarif B devient plus avantageux à partir de 13 entrées.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Chaque situation est une situation de proportionnalité : reliez-la à son coefficient.",
            pairs: [
              { left: "Prix en euros de pommes à 2,40 € le kg, en fonction de la masse en kg", right: "2,4" },
              { left: "Périmètre d'un carré, en fonction de la longueur de son côté", right: "4" },
              { left: "Distance en km parcourue à 90 km/h, en fonction de la durée en heures", right: "90" },
              { left: "Nombre de minutes, en fonction du nombre d'heures", right: "60" },
              { left: "Nombre de roues, en fonction du nombre de tricycles", right: "3" },
              { left: "Masse de farine en g, à raison de 75 g par personne, en fonction du nombre de personnes", right: "75" },
            ],
          },
          quiz: [
            { q: "3 cahiers identiques coûtent 4,50 €. Combien coûtent 6 de ces cahiers ?", options: ["9 €", "7,50 €", "13,50 €", "6 €"], answer: 0, why: "Deux fois plus de cahiers coûtent deux fois plus cher : 2 × 4,50 = 9 €." },
            { q: "Quel est le coefficient du tableau de proportionnalité dont la ligne du haut est 4 ; 10 ; 15 et la ligne du bas 6 ; 15 ; 22,5 ?", options: ["2", "2,5", "0,5", "1,5"], answer: 3, why: "6 ÷ 4 = 1,5 ; 15 ÷ 10 = 1,5 ; 22,5 ÷ 15 = 1,5." },
            { q: "Quelle situation n'est pas une situation de proportionnalité ?", options: ["Le prix de l'essence et le nombre de litres", "La longueur d'un trajet à vitesse constante et sa durée", "Le prix d'un taxi avec prise en charge et la distance", "Le périmètre d'un triangle équilatéral et son côté"], answer: 2, why: "La prise en charge s'ajoute quel que soit le trajet : deux fois plus de kilomètres ne coûtent pas deux fois plus cher." },
            { q: "Dans un tableau de proportionnalité, on passe de la ligne du haut à celle du bas en multipliant par 4. Quel nombre correspond à 7,5 ?", options: ["11,5", "28", "3,5", "30"], answer: 3, why: "7,5 × 4 = 30. Ajouter 4 (11,5) n'est pas multiplier par 4." },
            { q: "5 kg de pommes coûtent 11 €. Combien coûte 1 kg ?", options: ["2,20 €", "55 €", "2,50 €", "6 €"], answer: 0, why: "Passage à l'unité : 11 ÷ 5 = 2,20 €." },
          ],
          trap: "Conclure à la proportionnalité parce que les deux grandeurs augmentent ensemble : le prix d'un taxi ou la taille d'un enfant augmentent, sans être proportionnels. Il faut vérifier que tous les quotients sont égaux.",
          method: "Pour tester un tableau, calculez tous les quotients ligne du bas ÷ ligne du haut : un seul quotient différent suffit pour conclure que ce n'est pas proportionnel. Pour compléter un tableau, cherchez d'abord une relation simple entre les nombres (double, moitié, somme).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'pourcentages-echelles',
          title: 'Appliquer un pourcentage, utiliser une échelle',
          minutes: 35,
          objectives: [
            "Appliquer un pourcentage à une quantité.",
            "Calculer une augmentation ou une réduction exprimée en pourcentage.",
            "Utiliser une échelle pour calculer une distance réelle ou une distance sur un plan.",
          ],
          course: [
            {
              heading: "Un pourcentage est une proportion",
              paragraphs: [
                "Dire que 20 % des élèves d'un collège viennent en bus, c'est dire que, sur 100 élèves, 20 viennent en bus ; sur 200 élèves, 40 ; sur 50 élèves, 10. Le nombre d'élèves qui viennent en bus est proportionnel au nombre total d'élèves. Le symbole % se lit « pour cent » : 20 % = 20/100.",
                "Appliquer un pourcentage t % à une quantité Q, c'est calculer t/100 × Q, c'est-à-dire Q × t ÷ 100. Par exemple, 15 % de 80 € = 80 × 15 ÷ 100 = 1 200 ÷ 100 = 12 €.",
                "Certains pourcentages se calculent de tête : 50 %, c'est la moitié ; 25 %, le quart ; 75 %, les trois quarts ; 10 %, le dixième (on divise par 10) ; 1 %, le centième. Ainsi 10 % de 230 = 23 et, comme 5 % est la moitié de 10 %, 5 % de 230 = 11,5.",
              ],
              box: { label: "Formule", text: "t % d'une quantité Q = t/100 × Q = Q × t ÷ 100." },
            },
            {
              heading: "Augmentation et réduction",
              paragraphs: [
                "Pendant les soldes, un jean à 45 € est affiché à -30 %. La réduction vaut 30 % de 45 € : 45 × 30 ÷ 100 = 13,50 €. Le nouveau prix est 45 - 13,50 = 31,50 €.",
                "Pour une augmentation, on ajoute : un loyer de 1 200 € qui augmente de 5 % augmente de 1 200 × 5 ÷ 100 = 60 €, et devient 1 260 €. Le pourcentage s'applique toujours à la valeur de départ, celle d'avant le changement.",
              ],
              box: { label: "Méthode", text: "1. Calculer le montant du pourcentage : Q × t ÷ 100. 2. L'ajouter à Q pour une augmentation, le retrancher de Q pour une réduction." },
            },
            {
              heading: "L'échelle d'un plan ou d'une carte",
              paragraphs: [
                "Sur une carte, les distances sont proportionnelles aux distances réelles. L'échelle est le coefficient qui les relie : échelle = distance sur la carte ÷ distance réelle, les deux distances étant exprimées dans la même unité. Une échelle de 1/25 000 signifie que 1 cm sur la carte représente 25 000 cm, soit 250 m, dans la réalité.",
                "Sur une carte à 1/25 000, deux villages distants de 4,2 cm sont séparés en réalité de 4,2 × 25 000 = 105 000 cm, soit 1,05 km. Inversement, une distance réelle de 3 km = 300 000 cm est représentée par 300 000 ÷ 25 000 = 12 cm sur la carte.",
              ],
              box: { label: "Définition", text: "Échelle = distance sur le plan ÷ distance réelle, dans la même unité. Avec une échelle 1/n : distance réelle = distance sur le plan × n, et distance sur le plan = distance réelle ÷ n." },
            },
            {
              heading: "Réduire ou agrandir",
              paragraphs: [
                "Le plan d'une maison est souvent à l'échelle 1/100 : 1 cm sur le plan représente 100 cm, c'est-à-dire 1 m. Une maquette de voiture à l'échelle 1/43 est 43 fois plus petite que la vraie voiture. Plus le nombre n de l'échelle 1/n est grand, plus la réduction est forte : une carte à 1/100 000 montre moins de détails qu'une carte à 1/25 000.",
                "Une échelle peut aussi être plus grande que 1, quand on agrandit : le dessin d'une fourmi à l'échelle 10 (ou 10/1) est dix fois plus grand que la fourmi réelle. Une fourmi de 6 mm y mesure 60 mm, soit 6 cm.",
              ],
            },
          ],
          keyPoints: [
            "t % = t/100 ; appliquer t % à une quantité Q : Q × t ÷ 100.",
            "50 % est la moitié, 25 % le quart, 75 % les trois quarts, 10 % le dixième.",
            "Réduction : on retranche le montant de la réduction ; augmentation : on ajoute le montant de l'augmentation.",
            "Le pourcentage s'applique à la valeur de départ.",
            "Échelle = distance sur le plan ÷ distance réelle, dans la même unité ; à 1/25 000, 1 cm représente 250 m.",
          ],
          example: {
            statement: "Un vélo coûte 340 € (données fictives). Pendant les soldes, son prix baisse de 15 %. Quel est son prix soldé ?",
            solution: [
              "On calcule le montant de la réduction : 15 % de 340 € = 340 × 15 ÷ 100 = 5 100 ÷ 100 = 51 €.",
              "Vérification de tête : 10 % de 340 = 34 et 5 % de 340 = 17, donc 15 % de 340 = 34 + 17 = 51.",
              "On retranche la réduction du prix de départ : 340 - 51 = 289 €.",
              "Réponse : le vélo soldé coûte 289 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) 10 % de 230 ; b) 25 % de 64 ; c) 12 % de 350 ; d) 75 % de 48.",
              hint: "Utilisez la formule Q × t ÷ 100, ou les raccourcis : 10 % est le dixième, 25 % le quart, 75 % les trois quarts.",
              solution: [
                "a) 10 % de 230 = 230 ÷ 10 = 23.",
                "b) 25 % de 64, c'est le quart : 64 ÷ 4 = 16.",
                "c) 12 % de 350 = 350 × 12 ÷ 100 = 4 200 ÷ 100 = 42.",
                "d) 75 % de 48, ce sont les trois quarts : 48 ÷ 4 = 12, puis 12 × 3 = 36.",
                "Réponse : 23 ; 16 ; 42 ; 36.",
              ],
            },
            {
              level: 2,
              statement: "Une carte de randonnée est à l'échelle 1/50 000. a) Sur la carte, deux refuges sont à 6,4 cm l'un de l'autre. Quelle est la distance réelle, en km ? b) Un sentier mesure 7,5 km en réalité. Quelle est sa longueur sur la carte ?",
              hint: "Travaillez en centimètres : 1 km = 100 000 cm.",
              solution: [
                "a) 1 cm sur la carte représente 50 000 cm en réalité. 6,4 × 50 000 = 320 000 cm.",
                "320 000 cm = 3 200 m = 3,2 km.",
                "b) 7,5 km = 750 000 cm. Sur la carte : 750 000 ÷ 50 000 = 15 cm.",
                "Réponse : a) 3,2 km ; b) 15 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). a) Un jean coûte 60 €. En janvier, son prix augmente de 10 % ; en février, ce nouveau prix baisse de 10 %. Le jean revient-il à 60 € ? b) Sur le plan d'un collège à l'échelle 1/200, la cour est un rectangle de 9 cm sur 6 cm. Calculez les dimensions réelles de la cour, puis son aire réelle en m².",
              hint: "Pour le a, la baisse de février s'applique au prix de janvier, pas au prix de départ. Pour le b, calculez d'abord les longueurs réelles, puis l'aire.",
              solution: [
                "a) En janvier : 10 % de 60 € = 6 €, le prix devient 60 + 6 = 66 €.",
                "En février : 10 % de 66 € = 6,60 €, le prix devient 66 - 6,60 = 59,40 €.",
                "Le jean ne revient pas à 60 € : la baisse est calculée sur 66 €, un prix plus grand que 60 €, donc elle est plus forte que la hausse.",
                "b) 9 × 200 = 1 800 cm = 18 m et 6 × 200 = 1 200 cm = 12 m.",
                "Aire réelle de la cour : 18 × 12 = 216 m².",
                "Réponse : a) non, il coûte 59,40 € ; b) la cour mesure 18 m sur 12 m, soit 216 m².",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Pourcentages et échelles : vrai ou faux ?",
            statements: [
              { text: "10 % de 70 €, c'est 7 €.", true: true, why: "10 %, c'est le dixième : 70 ÷ 10 = 7." },
              { text: "Après une réduction de 20 %, un article à 50 € coûte 30 €.", true: false, why: "20 % de 50 € font 10 €, donc l'article coûte 40 €. On ne retire pas 20 €." },
              { text: "50 % d'une quantité, c'est sa moitié.", true: true, why: "50 % = 50/100 = 1/2." },
              { text: "Sur une carte à 1/100 000, 1 cm représente 1 km.", true: true, why: "100 000 cm = 1 000 m = 1 km." },
              { text: "Une hausse de 10 % suivie d'une baisse de 10 % ramène toujours au prix de départ.", true: false, why: "La baisse s'applique au prix augmenté : 60 € deviennent 66 €, puis 59,40 €." },
              { text: "Sur un plan à 1/100, une pièce de 4 m de long mesure 40 cm.", true: false, why: "4 m = 400 cm, et 400 ÷ 100 = 4 cm." },
              { text: "Une carte à 1/25 000 montre plus de détails qu'une carte à 1/100 000.", true: true, why: "Elle réduit moins la réalité : 1 cm y représente 250 m au lieu de 1 km." },
            ],
          },
          quiz: [
            { q: "Combien font 20 % de 45 € ?", options: ["9 €", "4,50 €", "25 €", "20 €"], answer: 0, why: "45 × 20 ÷ 100 = 900 ÷ 100 = 9 €." },
            { q: "Un pull à 40 € est soldé à -25 %. Quel est son nouveau prix ?", options: ["15 €", "10 €", "35 €", "30 €"], answer: 3, why: "25 % de 40 €, c'est le quart : 10 €. Le prix devient 40 - 10 = 30 €." },
            { q: "Sur une carte à l'échelle 1/100 000, deux villages sont à 3 cm l'un de l'autre. Quelle est la distance réelle ?", options: ["300 m", "30 km", "3 km", "3 000 km"], answer: 2, why: "3 × 100 000 = 300 000 cm = 3 000 m = 3 km." },
            { q: "Un salaire de 1 500 € augmente de 4 %. Quel est le nouveau salaire ?", options: ["1 560 €", "1 504 €", "1 600 €", "1 540 €"], answer: 0, why: "4 % de 1 500 € = 1 500 × 4 ÷ 100 = 60 €, et 1 500 + 60 = 1 560 €." },
            { q: "Que signifie une échelle de 1/50 sur un plan ?", options: ["Le plan est cinquante fois plus grand que la réalité", "1 cm sur le plan représente 50 m en réalité", "50 cm sur le plan représentent 1 cm en réalité", "1 cm sur le plan représente 50 cm en réalité"], answer: 3, why: "Échelle 1/50 : 1 unité sur le plan pour 50 unités identiques dans la réalité, donc 1 cm pour 50 cm." },
          ],
          trap: "Retrancher le pourcentage lui-même au lieu du montant qu'il représente : un article à 40 € soldé à -25 % ne coûte pas 40 - 25 = 15 €, mais 40 - 10 = 30 €. Avec une échelle, oublier d'exprimer les deux distances dans la même unité.",
          method: "Pour un pourcentage, écrivez d'abord le calcul du montant (Q × t ÷ 100), puis faites l'addition ou la soustraction. Pour une échelle, convertissez tout en centimètres avant de multiplier ou de diviser, puis revenez à l'unité la plus parlante (m ou km).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'en-fonction-de',
          title: 'Une grandeur en fonction d\'une autre : tableaux de valeurs',
          minutes: 30,
          objectives: [
            "Identifier deux grandeurs dont l'une dépend de l'autre.",
            "Produire et utiliser une formule exprimant une grandeur en fonction d'une autre.",
            "Compléter et lire un tableau de valeurs, dans un sens et dans l'autre.",
          ],
          course: [
            {
              heading: "Une grandeur qui dépend d'une autre",
              paragraphs: [
                "Dans la vie courante, beaucoup de grandeurs dépendent d'une autre : le prix payé dépend du nombre de places achetées, la température extérieure dépend de l'heure de la journée, le périmètre d'un carré dépend de la longueur de son côté. On dit que le prix est fonction du nombre de places, ou qu'il varie en fonction du nombre de places.",
                "Dans chacune de ces situations, à chaque valeur de la première grandeur correspond une seule valeur de la seconde : à 9 h, il n'y a qu'une température ; pour un côté de 3 cm, il n'y a qu'un périmètre, 12 cm. En revanche, une même valeur de la seconde grandeur peut correspondre à plusieurs valeurs de la première : il peut faire 15 °C à 10 h et à 18 h.",
              ],
              box: { label: "Vocabulaire", text: "« Le périmètre P est fonction du côté c » signifie que la valeur de P dépend de la valeur de c : quand on connaît c, on peut trouver P." },
            },
            {
              heading: "Une formule pour calculer",
              paragraphs: [
                "Quand la relation est connue, on peut l'écrire avec une formule, en désignant les grandeurs par des lettres. Le périmètre P d'un carré de côté c s'écrit P = 4 × c. Le prix P de n places de cinéma à 8 € s'écrit P = 8 × n. Pour c = 2,5 cm, on remplace la lettre par sa valeur : P = 4 × 2,5 = 10 cm.",
                "Une formule ne traduit pas toujours une proportionnalité. Un taxi fait payer 3 € de prise en charge, puis 1,50 € par kilomètre (données fictives) : le prix P pour d kilomètres est P = 3 + 1,5 × d. Pour d = 4, on respecte les priorités opératoires : P = 3 + 1,5 × 4 = 3 + 6 = 9 €.",
              ],
              box: { label: "Méthode", text: "Pour utiliser une formule : 1. recopier la formule ; 2. remplacer chaque lettre par sa valeur ; 3. calculer en respectant les priorités opératoires ; 4. écrire le résultat avec son unité." },
            },
            {
              heading: "Le tableau de valeurs",
              paragraphs: [
                "Un tableau de valeurs présente, sur la première ligne, des valeurs choisies pour la première grandeur et, sur la deuxième ligne, les valeurs correspondantes de la seconde. Pour le taxi : 2 km, 4 km et 10 km donnent 6 €, 9 € et 18 €. Ce n'est pas un tableau de proportionnalité : 6 ÷ 2 = 3 mais 9 ÷ 4 = 2,25.",
                "Un tableau se lit dans les deux sens. Dans le sens direct, on part d'une valeur de la première ligne : « Combien coûte un trajet de 10 km ? » se lit 18 €. Dans l'autre sens, on part d'une valeur de la deuxième ligne : « Quelle distance pour 9 € ? » se lit 4 km. Si la valeur cherchée n'est pas dans le tableau, on la calcule avec la formule quand on la connaît.",
              ],
              box: { label: "À retenir", text: "Un tableau de valeurs n'est pas forcément un tableau de proportionnalité : pour le savoir, on calcule les quotients." },
            },
          ],
          keyPoints: [
            "« A est fonction de B » : la valeur de A dépend de celle de B ; à chaque valeur de B correspond une seule valeur de A.",
            "Une formule relie deux grandeurs : P = 4 × c, P = 3 + 1,5 × d.",
            "Pour utiliser une formule, on remplace la lettre par sa valeur et l'on respecte les priorités opératoires.",
            "Un tableau de valeurs se lit dans les deux sens.",
            "Un tableau de valeurs n'est pas toujours un tableau de proportionnalité.",
          ],
          example: {
            statement: "Une salle de sport (données fictives) demande 12 € d'inscription, puis 6 € par séance. a) Écrivez une formule donnant le prix P en fonction du nombre n de séances. b) Construisez un tableau de valeurs pour n = 1, 5, 10 et 20. c) Combien de séances peut-on faire avec 102 € ?",
            solution: [
              "a) Le prix comprend 12 € fixes, plus 6 € pour chacune des n séances : P = 12 + 6 × n.",
              "b) n = 1 : P = 12 + 6 × 1 = 18 € ; n = 5 : P = 12 + 30 = 42 € ; n = 10 : P = 12 + 60 = 72 € ; n = 20 : P = 12 + 120 = 132 €.",
              "Tableau : n = 1 ; 5 ; 10 ; 20 et P = 18 ; 42 ; 72 ; 132.",
              "c) On retire d'abord les 12 € d'inscription : 102 - 12 = 90 €. Puis 90 ÷ 6 = 15 séances.",
              "Vérification : 12 + 6 × 15 = 12 + 90 = 102.",
              "Réponse : P = 12 + 6 × n ; on peut faire 15 séances avec 102 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le périmètre P d'un triangle équilatéral de côté c est donné par la formule P = 3 × c. a) Calculez P pour c = 2 cm ; 3,5 cm ; 7 cm et 10 cm, et présentez les résultats dans un tableau de valeurs. b) Quelle longueur de côté faut-il pour obtenir un périmètre de 27 cm ?",
              hint: "Pour le b, cherchez le nombre qui, multiplié par 3, donne 27.",
              solution: [
                "a) 3 × 2 = 6 cm ; 3 × 3,5 = 10,5 cm ; 3 × 7 = 21 cm ; 3 × 10 = 30 cm.",
                "Tableau : c = 2 ; 3,5 ; 7 ; 10 (en cm) et P = 6 ; 10,5 ; 21 ; 30 (en cm).",
                "b) 3 × c = 27, donc c = 27 ÷ 3 = 9 cm.",
                "Réponse : 6 cm, 10,5 cm, 21 cm, 30 cm ; un côté de 9 cm.",
              ],
            },
            {
              level: 2,
              statement: "On a relevé la température dans un village en fonction de l'heure (données fictives) : 6 h : -2 °C ; 8 h : 1 °C ; 10 h : 5 °C ; 12 h : 9 °C ; 14 h : 11 °C ; 16 h : 8 °C ; 18 h : 4 °C. a) Quelle température fait-il à 10 h ? b) À quelle heure du relevé fait-il 8 °C ? c) Quelle est la température la plus haute relevée, et à quelle heure ? d) De combien de degrés la température a-t-elle augmenté entre 6 h et 14 h ? e) La température est-elle proportionnelle à l'heure ?",
              hint: "Pour le a, lisez le tableau dans le sens direct ; pour le b, dans l'autre sens. Pour le d, calculez une différence de nombres relatifs.",
              solution: [
                "a) À 10 h, il fait 5 °C.",
                "b) Il fait 8 °C à 16 h.",
                "c) La température la plus haute est 11 °C, relevée à 14 h.",
                "d) 11 - (-2) = 11 + 2 = 13 : la température a augmenté de 13 °C.",
                "e) Non : 9 ÷ 12 = 0,75 mais 5 ÷ 10 = 0,5. De plus, la température baisse après 14 h alors que l'heure continue d'augmenter.",
                "Réponse : 5 °C ; 16 h ; 11 °C à 14 h ; 13 °C ; non.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On considère tous les rectangles de périmètre 24 cm. On note L la longueur d'un tel rectangle, en cm. a) Expliquez pourquoi la largeur vaut 12 - L. b) Construisez un tableau donnant la largeur et l'aire A en fonction de L, pour L = 6 ; 7 ; 8 ; 9 ; 10 ; 11. c) L'aire est-elle proportionnelle à la longueur ? d) Pour quelle valeur de L du tableau l'aire est-elle la plus grande ? Quelle est alors la forme du rectangle ?",
              hint: "Le périmètre d'un rectangle vaut 2 × (longueur + largeur). L'aire vaut longueur × largeur.",
              solution: [
                "a) Le périmètre vaut 2 × (L + largeur) = 24, donc L + largeur = 24 ÷ 2 = 12, et la largeur vaut 12 - L.",
                "b) L = 6 : largeur 6, A = 36 cm² ; L = 7 : largeur 5, A = 35 cm² ; L = 8 : largeur 4, A = 32 cm².",
                "L = 9 : largeur 3, A = 27 cm² ; L = 10 : largeur 2, A = 20 cm² ; L = 11 : largeur 1, A = 11 cm².",
                "c) Non : 36 ÷ 6 = 6 mais 35 ÷ 7 = 5. D'ailleurs, l'aire diminue quand la longueur augmente.",
                "d) L'aire la plus grande du tableau est 36 cm², pour L = 6 cm. La largeur vaut alors aussi 6 cm : le rectangle est un carré.",
                "Réponse : l'aire n'est pas proportionnelle à L ; le maximum du tableau est obtenu pour le carré de côté 6 cm.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation à la formule qui la traduit.",
            pairs: [
              { left: "Périmètre P d'un carré de côté c", right: "P = 4 × c" },
              { left: "Prix P de n places à 8 € l'une", right: "P = 8 × n" },
              { left: "Prix P d'un taxi : 3 € de prise en charge, puis 2 € par km, pour d km", right: "P = 3 + 2 × d" },
              { left: "Aire A d'un rectangle de longueur 5 cm et de largeur l", right: "A = 5 × l" },
              { left: "Périmètre P d'un rectangle de longueur 5 cm et de largeur l", right: "P = 10 + 2 × l" },
              { left: "Distance d parcourue en t heures à 60 km/h", right: "d = 60 × t" },
            ],
          },
          quiz: [
            { q: "Avec la formule P = 4 × c, que vaut P pour c = 2,5 cm ?", options: ["10 cm", "6,5 cm", "4,25 cm", "42,5 cm"], answer: 0, why: "On remplace c par 2,5 : P = 4 × 2,5 = 10 cm." },
            { q: "Une salle se loue 20 €, plus 5 € par invité. Quelle formule donne le prix P pour n invités ?", options: ["P = 25 × n", "P = 20 × n + 5", "P = 20 + 5 × n", "P = 5 + n"], answer: 2, why: "20 € fixes, plus 5 € multipliés par le nombre n d'invités." },
            { q: "Un relevé donne : 8 h, 3 °C ; 12 h, 9 °C ; 16 h, 7 °C. À quelle heure du relevé fait-il 7 °C ?", options: ["12 h", "16 h", "8 h", "On ne peut pas savoir"], answer: 1, why: "On lit le tableau dans l'autre sens : on part de 7 °C et l'on trouve 16 h." },
            { q: "Avec la formule P = 3 + 1,5 × d, que vaut P pour d = 4 ?", options: ["18", "7,5", "6", "9"], answer: 3, why: "La multiplication est prioritaire : 1,5 × 4 = 6, puis 3 + 6 = 9." },
            { q: "Dans un tableau de valeurs, la seconde grandeur est-elle toujours proportionnelle à la première ?", options: ["Non, pas forcément", "Oui, toujours", "Oui, si les nombres augmentent"], answer: 0, why: "Le prix du taxi ou la température en fonction de l'heure ne sont pas proportionnels : il faut vérifier avec les quotients." },
          ],
          trap: "Ne pas respecter les priorités opératoires dans une formule : avec P = 3 + 1,5 × d et d = 4, on calcule d'abord 1,5 × 4 = 6, puis 3 + 6 = 9, et non (3 + 1,5) × 4 = 18.",
          method: "Écrivez la formule, puis la même ligne avec les nombres à la place des lettres, avant de calculer. Pour lire un tableau, repérez d'abord sur quelle ligne se trouve la valeur donnée : c'est elle qui indique le sens de lecture.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'representation-graphique',
          title: 'Représenter et lire un graphique',
          minutes: 35,
          objectives: [
            "Lire et interpréter un graphique représentant une grandeur en fonction d'une autre.",
            "Représenter graphiquement les données d'un tableau de valeurs.",
            "Choisir des graduations adaptées sur les axes.",
          ],
          course: [
            {
              heading: "Les axes d'un graphique",
              paragraphs: [
                "Un graphique permet de voir d'un coup d'œil comment une grandeur varie en fonction d'une autre. On trace deux axes perpendiculaires qui se coupent à l'origine. Sur l'axe horizontal (l'axe des abscisses), on place la grandeur dont l'autre dépend, par exemple le temps. Sur l'axe vertical (l'axe des ordonnées), on place la grandeur qui en dépend, par exemple la température.",
                "Chaque axe porte un nom, une unité et des graduations régulières : l'écart entre deux graduations représente toujours la même valeur. Chaque point du graphique a deux coordonnées, écrites entre parenthèses : (abscisse ; ordonnée). Le point (14 ; 11) signifie qu'à 14 h, il fait 11 °C.",
              ],
              box: { label: "Repère", text: "Point (a ; b) : a se lit sur l'axe horizontal, b sur l'axe vertical. On écrit toujours l'abscisse en premier." },
            },
            {
              heading: "Lire un graphique dans les deux sens",
              paragraphs: [
                "Pour connaître la température à 10 h, on part de 10 sur l'axe horizontal, on monte verticalement jusqu'à la courbe, puis on se déplace horizontalement jusqu'à l'axe vertical, où l'on lit la valeur. Pour savoir à quelle heure il fait 8 °C, on fait le chemin inverse : on part de 8 sur l'axe vertical, on va horizontalement jusqu'à la courbe, puis verticalement jusqu'à l'axe horizontal.",
                "Une lecture graphique est souvent approchée : on écrit « environ 7 °C » si le point tombe entre deux graduations. Dans le sens inverse, il peut y avoir plusieurs réponses : la même température peut être atteinte le matin et l'après-midi.",
              ],
            },
            {
              heading: "Interpréter la forme du graphique",
              paragraphs: [
                "La forme de la courbe raconte une histoire. Quand elle monte de gauche à droite, la grandeur augmente ; quand elle descend, la grandeur diminue ; quand elle est horizontale, la grandeur ne change pas. Le point le plus haut donne la valeur maximale, le point le plus bas la valeur minimale.",
                "Exemple : le graphique de la distance parcourue par une randonneuse en fonction du temps. Une partie qui monte fortement correspond à une marche rapide ; une partie qui monte doucement, à une marche lente ; une partie horizontale, à une pause : le temps passe, mais la distance parcourue ne change pas.",
              ],
            },
            {
              heading: "Construire un graphique à partir d'un tableau",
              paragraphs: [
                "Pour représenter un tableau de valeurs : on trace les deux axes et on les nomme, avec leurs unités ; on choisit des graduations régulières adaptées aux valeurs (par exemple 1 cm pour 2 h et 1 cm pour 5 °C), pour que le graphique tienne sur la feuille ; on place chaque point grâce à ses deux coordonnées ; enfin, on relie les points si cela a un sens.",
                "On relie les points quand la grandeur varie de façon continue, comme une température ou une hauteur d'eau : entre deux relevés, elle passe par toutes les valeurs intermédiaires. On ne les relie pas quand la première grandeur ne prend que des valeurs entières, comme un nombre de tickets : 2,5 tickets n'a aucun sens, les points restent isolés.",
              ],
              box: { label: "À retenir", text: "Un graphique complet a deux axes nommés, avec leurs unités et des graduations régulières. On relie les points seulement si les valeurs intermédiaires ont un sens." },
            },
          ],
          keyPoints: [
            "Axe horizontal : la grandeur dont l'autre dépend ; axe vertical : la grandeur qui en dépend.",
            "Un point (a ; b) : a se lit sur l'axe horizontal, b sur l'axe vertical.",
            "Pour lire une valeur : partir d'un axe, aller jusqu'à la courbe, puis jusqu'à l'autre axe.",
            "Courbe qui monte : la grandeur augmente ; qui descend : elle diminue ; horizontale : elle ne change pas.",
            "Des graduations régulières, des axes nommés avec leurs unités ; on relie les points seulement si les valeurs intermédiaires ont un sens.",
          ],
          example: {
            statement: "On a mesuré chaque semaine la hauteur d'une plante (données fictives) : semaine 0 : 2 cm ; semaine 1 : 3 cm ; semaine 2 : 5 cm ; semaine 3 : 8 cm ; semaine 4 : 10 cm. a) Expliquez comment représenter ces données par un graphique. b) Entre quelles semaines la plante a-t-elle le plus poussé ? Comment le voit-on sur le graphique ?",
            solution: [
              "a) La hauteur dépend du temps : on place le temps (en semaines) sur l'axe horizontal et la hauteur (en cm) sur l'axe vertical.",
              "On choisit par exemple 2 cm pour 1 semaine sur l'axe horizontal, et 1 cm pour 1 cm de hauteur sur l'axe vertical, gradué de 0 à 10.",
              "On place les points (0 ; 2), (1 ; 3), (2 ; 5), (3 ; 8) et (4 ; 10).",
              "La plante pousse de façon continue, même entre deux mesures : on relie les points.",
              "b) La plante a grandi de 1 cm, puis de 2 cm, puis de 3 cm, puis de 2 cm. La plus forte croissance, 3 cm, a lieu entre la semaine 2 et la semaine 3.",
              "Sur le graphique, c'est la partie de la courbe qui monte le plus fortement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le graphique de la distance parcourue par une cycliste en fonction du temps relie par des segments les points suivants (temps en heures, distance en km, données fictives) : (0 ; 0), (1 ; 18), (2 ; 30), (3 ; 30) et (4 ; 50). a) Quelle distance a-t-elle parcourue au bout de 2 h ? b) Que se passe-t-il entre 2 h et 3 h ? c) Quelle distance a-t-elle parcourue en tout ? d) Pendant quelle heure a-t-elle parcouru la plus grande distance ?",
              hint: "Dans un point (a ; b), a est le temps et b la distance. Pour le d, calculez la distance parcourue pendant chaque heure.",
              solution: [
                "a) Le point (2 ; 30) indique qu'au bout de 2 h, elle a parcouru 30 km.",
                "b) Entre 2 h et 3 h, la distance reste égale à 30 km : la partie du graphique est horizontale, la cycliste fait une pause.",
                "c) Au bout de 4 h, elle a parcouru 50 km en tout.",
                "d) Pendant chaque heure : 18 km, puis 30 - 18 = 12 km, puis 0 km, puis 50 - 30 = 20 km.",
                "Réponse : 30 km ; une pause ; 50 km ; c'est pendant la quatrième heure (de 3 h à 4 h) qu'elle a parcouru le plus, 20 km.",
              ],
            },
            {
              level: 2,
              statement: "Un loueur de kayaks pratique les tarifs suivants (données fictives) ; la location se paie uniquement par heure entière : 1 h : 12 € ; 2 h : 20 € ; 3 h : 26 € ; 4 h : 30 €. a) Quelle grandeur placez-vous sur chaque axe ? Proposez des graduations. b) Donnez les coordonnées des points à placer. c) Faut-il relier les points ? d) Le prix est-il proportionnel à la durée ?",
              hint: "Le prix dépend de la durée. Demandez-vous si une location de 1 h 30 min est possible.",
              solution: [
                "a) Le prix dépend de la durée : la durée (en h) va sur l'axe horizontal, par exemple 1 cm pour 1 h ; le prix (en €) va sur l'axe vertical, par exemple 1 cm pour 5 €, de 0 à 30 €.",
                "b) Les points sont (1 ; 12), (2 ; 20), (3 ; 26) et (4 ; 30).",
                "c) On ne relie pas les points : la location se paie par heure entière, une durée de 1,5 h n'a pas de prix. Les points restent isolés.",
                "d) 12 ÷ 1 = 12 mais 20 ÷ 2 = 10 : les quotients sont différents, le prix n'est pas proportionnel à la durée (l'heure coûte moins cher quand on loue plus longtemps).",
                "Réponse : durée à l'horizontale, prix à la verticale ; quatre points isolés ; pas de proportionnalité.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Anna et Bilal partent ensemble et courent sur le même parcours. Le graphique de la distance parcourue (en km) en fonction du temps (en minutes) relie par des segments, pour Anna, les points (0 ; 0), (10 ; 2), (20 ; 4) et (30 ; 6) ; pour Bilal, les points (0 ; 0), (10 ; 3), (20 ; 4) et (30 ; 6). a) Qui est en tête au bout de 10 minutes, et avec quelle avance ? b) Au bout de combien de minutes se retrouvent-ils côte à côte ? c) Entre la 10e et la 20e minute, quelle distance chacun a-t-il parcourue ? Qui a couru le plus vite ? d) Que peut-on dire de leurs courses entre la 20e et la 30e minute ?",
              hint: "Comparez les ordonnées des points qui ont la même abscisse. Pour le c, calculez des différences de distances.",
              solution: [
                "a) Au bout de 10 minutes, Anna a parcouru 2 km et Bilal 3 km : Bilal est en tête avec 1 km d'avance.",
                "b) Au bout de 20 minutes, les deux ont parcouru 4 km : ils se retrouvent côte à côte. Avant, Bilal était devant : entre 10 et 20 minutes, Anna rattrape peu à peu son retard.",
                "c) Anna parcourt 4 - 2 = 2 km et Bilal 4 - 3 = 1 km : Anna a couru plus vite (elle a parcouru deux fois plus de distance pendant la même durée).",
                "d) Les deux graphiques relient (20 ; 4) à (30 ; 6) : ils courent côte à côte, à la même allure, et ont parcouru 6 km chacun au bout de 30 minutes.",
                "Réponse : Bilal, 1 km d'avance ; à 20 minutes ; Anna 2 km, Bilal 1 km, Anna plus rapide ; ils finissent ensemble.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour lire sur un graphique la valeur qui correspond à une abscisse donnée.",
            items: [
              "Lire le titre du graphique et le nom des deux axes, avec leurs unités.",
              "Repérer la valeur donnée sur l'axe horizontal.",
              "Tracer un trait vertical depuis cette valeur jusqu'à la courbe.",
              "Tracer un trait horizontal depuis ce point de la courbe jusqu'à l'axe vertical.",
              "Lire la valeur sur l'axe vertical, en tenant compte des graduations.",
              "Écrire la réponse dans une phrase, avec l'unité.",
            ],
          },
          quiz: [
            { q: "Sur un graphique donnant la température en fonction de l'heure, où lit-on l'heure ?", options: ["Sur l'axe vertical", "Sur l'axe horizontal", "Sur la courbe seulement"], answer: 1, why: "L'heure est la grandeur dont la température dépend : elle se place sur l'axe horizontal." },
            { q: "Sur le graphique de la distance parcourue en fonction du temps, une partie horizontale signifie que le marcheur :", options: ["est arrêté", "accélère", "fait demi-tour", "monte une côte"], answer: 0, why: "Le temps passe mais la distance parcourue ne change pas : le marcheur fait une pause." },
            { q: "Le point (3 ; 12) appartient au graphique du prix (en €) en fonction de la masse (en kg). Cela signifie que :", options: ["12 kg coûtent 3 €", "1 kg coûte 12 €", "3 kg coûtent 36 €", "3 kg coûtent 12 €"], answer: 3, why: "L'abscisse 3 est la masse, l'ordonnée 12 est le prix correspondant." },
            { q: "Sur l'axe vertical, 1 cm représente 5 €. Quelle longueur représente 35 € ?", options: ["5 cm", "35 cm", "7 cm", "3,5 cm"], answer: 2, why: "35 ÷ 5 = 7 : il faut 7 cm." },
            { q: "Pour représenter le prix de tickets de bus en fonction de leur nombre (1, 2, 3...), on :", options: ["relie les points par une courbe", "laisse les points isolés", "trace une droite verticale"], answer: 1, why: "On ne peut pas acheter 2,5 tickets : les valeurs intermédiaires n'ont pas de sens." },
          ],
          trap: "Inverser les axes en lisant ou en plaçant un point : dans (3 ; 12), 3 se lit sur l'axe horizontal et 12 sur l'axe vertical. Autre piège : choisir des graduations irrégulières, qui déforment le graphique.",
          method: "Commencez toujours par lire le titre, le nom des axes et leurs unités, et calculez ce que représente un carreau sur chaque axe. Pour une lecture, tracez les traits de lecture en pointillés : ils montrent votre raisonnement.",
        },
      ],
    },

    /* ================================================================== */
    /* LES PARALLÉLOGRAMMES                                                */
    /* ================================================================== */
    {
      id: 'parallelogrammes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'proprietes-parallelogramme',
          title: 'Le parallélogramme et ses propriétés',
          minutes: 35,
          objectives: [
            "Connaître la définition du parallélogramme.",
            "Connaître et utiliser les propriétés du parallélogramme relatives à ses côtés, à ses angles et à ses diagonales.",
            "Reconnaître un parallélogramme à partir de ses diagonales ou de ses côtés.",
            "Construire un parallélogramme et rédiger une justification.",
          ],
          course: [
            {
              heading: "Définition",
              paragraphs: [
                "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux. Dans le parallélogramme ABCD, les sommets sont nommés dans l'ordre où l'on fait le tour de la figure : la droite (AB) est parallèle à (CD), et la droite (AD) est parallèle à (BC).",
                "On en rencontre souvent : les mailles d'un grillage, une étagère qui penche sous un poids, l'ombre d'une fenêtre sur le sol, ou les faces d'une boîte dessinée en perspective. Le rectangle, le losange et le carré sont des parallélogrammes particuliers.",
              ],
              box: { label: "Définition", text: "Un parallélogramme est un quadrilatère qui a ses côtés opposés parallèles deux à deux." },
            },
            {
              heading: "Un centre de symétrie et ses conséquences",
              paragraphs: [
                "Les diagonales [AC] et [BD] d'un parallélogramme se coupent en leur milieu O : OA = OC et OB = OD. Ce point O est le centre de symétrie du parallélogramme : le symétrique de A par rapport à O est C, celui de B est D. Si l'on fait tourner la figure d'un demi-tour autour de O, elle se superpose à elle-même.",
                "La symétrie centrale conserve les longueurs et les angles. Le côté [AB] a pour symétrique [CD], donc AB = CD ; de même, AD = BC. L'angle DAB a pour symétrique l'angle BCD : ces deux angles opposés ont la même mesure, comme les angles ABC et CDA.",
                "Deux angles consécutifs (qui ont un côté commun) ont pour somme 180°. En effet, la diagonale [AC] partage le parallélogramme en deux triangles, donc la somme de ses quatre angles vaut 2 × 180 = 360°. Comme les angles opposés sont égaux deux à deux, deux angles consécutifs font la moitié de 360°, soit 180°. Si l'angle DAB mesure 70°, l'angle ABC mesure 110°.",
              ],
              box: { label: "Propriétés", text: "Dans un parallélogramme : les diagonales se coupent en leur milieu, qui est le centre de symétrie ; les côtés opposés ont la même longueur ; les angles opposés ont la même mesure ; deux angles consécutifs ont pour somme 180°." },
            },
            {
              heading: "Reconnaître un parallélogramme",
              paragraphs: [
                "Pour démontrer qu'un quadrilatère est un parallélogramme, on peut utiliser la définition (côtés opposés parallèles), mais aussi des propriétés réciproques. La plus utilisée : si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce quadrilatère est un parallélogramme.",
                "Si un quadrilatère non croisé a ses côtés opposés de même longueur deux à deux, c'est un parallélogramme. Si un quadrilatère non croisé a deux côtés opposés parallèles et de même longueur, c'est aussi un parallélogramme. La condition « non croisé » est indispensable : dans un quadrilatère croisé, deux côtés se coupent, et l'on peut avoir des côtés opposés de même longueur sans avoir de parallélogramme.",
              ],
              box: { label: "Propriété", text: "Un quadrilatère est un parallélogramme si ses diagonales ont le même milieu ; ou s'il est non croisé et que ses côtés opposés ont la même longueur deux à deux ; ou s'il est non croisé et que deux de ses côtés opposés sont parallèles et de même longueur." },
            },
            {
              heading: "Construire et rédiger",
              paragraphs: [
                "Pour construire le parallélogramme ABCD connaissant A, B et C, on peut tracer au compas un arc de centre A et de rayon BC, puis un arc de centre C et de rayon AB : le point D est à leur intersection, de l'autre côté de (AC) par rapport à B. On peut aussi placer le milieu O de [AC], puis construire D, symétrique de B par rapport à O.",
                "Une démonstration se rédige en trois temps : « On sait que [les données]. Or [la propriété du cours]. Donc [la conclusion]. » Par exemple : on sait que les diagonales [EG] et [FH] du quadrilatère EFGH ont le même milieu. Or, si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme. Donc EFGH est un parallélogramme.",
              ],
            },
          ],
          keyPoints: [
            "Parallélogramme : quadrilatère dont les côtés opposés sont parallèles deux à deux.",
            "Ses diagonales se coupent en leur milieu, qui est son centre de symétrie.",
            "Côtés opposés de même longueur ; angles opposés de même mesure ; deux angles consécutifs ont pour somme 180°.",
            "Si les diagonales d'un quadrilatère ont le même milieu, c'est un parallélogramme.",
            "On rédige une démonstration en trois temps : On sait que... Or... Donc...",
          ],
          example: {
            statement: "ABCD est un parallélogramme de centre O tel que AB = 5 cm, BC = 3 cm, AC = 7 cm et l'angle ABC mesure 120°. Donnez, en justifiant, les longueurs CD, AD et AO, et les mesures des angles ADC et BAD.",
            solution: [
              "Dans un parallélogramme, les côtés opposés ont la même longueur : CD = AB = 5 cm et AD = BC = 3 cm.",
              "Les diagonales se coupent en leur milieu O : AO = AC ÷ 2 = 7 ÷ 2 = 3,5 cm.",
              "Les angles opposés ont la même mesure : l'angle ADC mesure 120°, comme l'angle ABC.",
              "Deux angles consécutifs ont pour somme 180° : l'angle BAD mesure 180 - 120 = 60°.",
              "Réponse : CD = 5 cm, AD = 3 cm, AO = 3,5 cm ; angle ADC = 120° et angle BAD = 60°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "EFGH est un parallélogramme de centre K. On sait que EF = 6 cm, FG = 4,5 cm et que l'angle FEH mesure 65°. a) Donnez les longueurs GH et EH. b) Donnez les mesures des angles FGH, EFG et GHE. c) Que représente le point K pour les segments [EG] et [FH] ?",
              hint: "Repérez les côtés opposés et les angles opposés, puis utilisez la somme de deux angles consécutifs.",
              solution: [
                "a) Les côtés opposés ont la même longueur : GH = EF = 6 cm et EH = FG = 4,5 cm.",
                "b) L'angle FGH est opposé à l'angle FEH : il mesure 65°.",
                "L'angle EFG est consécutif à l'angle FEH : il mesure 180 - 65 = 115°. L'angle GHE, opposé à EFG, mesure aussi 115°.",
                "Vérification : 65 + 115 + 65 + 115 = 360.",
                "c) Les diagonales se coupent en leur milieu : K est le milieu de [EG] et le milieu de [FH].",
              ],
            },
            {
              level: 2,
              statement: "a) Les segments [MP] et [NQ] se coupent en I, avec IM = IP = 3 cm et IN = IQ = 5 cm. Quelle est la nature du quadrilatère MNPQ ? Rédigez la justification. b) Le quadrilatère non croisé RSTU vérifie RS = TU = 4 cm et ST = UR = 6 cm. Quelle est sa nature ? Justifiez.",
              hint: "Pour le a, I est sur les deux segments et à égale distance de leurs extrémités. Pour le b, repérez les côtés opposés.",
              solution: [
                "a) I est sur [MP] avec IM = IP : c'est le milieu de [MP]. De même, I est le milieu de [NQ].",
                "On sait que les diagonales [MP] et [NQ] du quadrilatère MNPQ ont le même milieu I. Or, si les diagonales d'un quadrilatère ont le même milieu, c'est un parallélogramme. Donc MNPQ est un parallélogramme.",
                "b) Les côtés opposés [RS] et [TU] ont la même longueur, ainsi que [ST] et [UR].",
                "On sait que le quadrilatère non croisé RSTU a ses côtés opposés de même longueur deux à deux. Or un tel quadrilatère est un parallélogramme. Donc RSTU est un parallélogramme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle tel que l'angle BAC mesure 40° et l'angle ACB mesure 75°. I est le milieu de [AC], et D est le symétrique de B par rapport à I. a) Démontrez que ABCD est un parallélogramme. b) Calculez l'angle ABC. c) Déduisez-en les mesures des angles ADC et BAD. d) On donne AB = 5 cm. Combien mesure CD ?",
              hint: "Pour le a, cherchez le milieu des deux diagonales [AC] et [BD]. Pour le b, utilisez la somme des angles du triangle ABC.",
              solution: [
                "a) I est le milieu de [AC]. Comme D est le symétrique de B par rapport à I, I est aussi le milieu de [BD].",
                "On sait que les diagonales [AC] et [BD] du quadrilatère ABCD ont le même milieu I. Or, si les diagonales d'un quadrilatère ont le même milieu, c'est un parallélogramme. Donc ABCD est un parallélogramme.",
                "b) Dans le triangle ABC, la somme des angles vaut 180° : l'angle ABC mesure 180 - (40 + 75) = 65°.",
                "c) L'angle ADC est opposé à l'angle ABC : il mesure 65°. L'angle BAD est consécutif à l'angle ABC : il mesure 180 - 65 = 115°.",
                "Vérification : l'angle BAD est la somme des angles BAC (40°) et CAD ; or CAD et ACB sont alternes-internes avec (AD) parallèle à (BC), donc CAD mesure 75°, et 40 + 75 = 115.",
                "d) Les côtés opposés ont la même longueur : CD = AB = 5 cm.",
                "Réponse : ABCD est un parallélogramme ; 65° ; 65° et 115° ; CD = 5 cm.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les propriétés du parallélogramme.",
            statements: [
              { text: "Les diagonales d'un parallélogramme ont le même milieu.", true: true, why: "Elles se coupent en leur milieu, qui est le centre de symétrie." },
              { text: "Les diagonales d'un parallélogramme ont toujours la même longueur.", true: false, why: "C'est vrai seulement pour le rectangle (et donc le carré)." },
              { text: "Deux angles opposés d'un parallélogramme ont la même mesure.", true: true, why: "Ils sont symétriques par rapport au centre, et la symétrie centrale conserve les angles." },
              { text: "Deux angles consécutifs d'un parallélogramme ont toujours la même mesure.", true: false, why: "Ils ont pour somme 180° ; ils ne sont égaux (à 90°) que dans un rectangle." },
              { text: "Un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme.", true: true, why: "C'est la propriété réciproque la plus utilisée pour reconnaître un parallélogramme." },
              { text: "Tout parallélogramme a un axe de symétrie.", true: false, why: "Un parallélogramme quelconque a un centre de symétrie, mais aucun axe de symétrie." },
              { text: "Les côtés opposés d'un parallélogramme ont la même longueur.", true: true, why: "Ils sont symétriques par rapport au centre, et la symétrie centrale conserve les longueurs." },
            ],
          },
          quiz: [
            { q: "Quelle est la définition d'un parallélogramme ?", options: ["Un quadrilatère aux côtés opposés parallèles", "Un quadrilatère qui a quatre angles droits", "Un quadrilatère aux diagonales de même longueur", "Un quadrilatère aux quatre côtés égaux"], answer: 0, why: "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux. Les autres propositions décrivent des cas particuliers." },
            { q: "ABCD est un parallélogramme et l'angle ABC mesure 72°. Combien mesure l'angle BCD ?", options: ["72°", "108°", "18°", "288°"], answer: 1, why: "Les angles ABC et BCD sont consécutifs : leur somme vaut 180°, et 180 - 72 = 108." },
            { q: "ABCD est un parallélogramme de centre O et BD = 9 cm. Combien mesure OD ?", options: ["9 cm", "18 cm", "13,5 cm", "4,5 cm"], answer: 3, why: "Les diagonales se coupent en leur milieu : OD = BD ÷ 2 = 4,5 cm." },
            { q: "Dans le quadrilatère MNPQ, les diagonales [MP] et [NQ] ont le même milieu. On peut affirmer que MNPQ est :", options: ["un rectangle", "un quadrilatère croisé", "un parallélogramme", "un losange"], answer: 2, why: "Un quadrilatère dont les diagonales ont le même milieu est un parallélogramme ; rien ne prouve qu'il soit un rectangle ou un losange." },
            { q: "Dans un parallélogramme, un angle mesure 75°. Combien mesure un angle qui lui est consécutif ?", options: ["75°", "15°", "285°", "105°"], answer: 3, why: "Deux angles consécutifs d'un parallélogramme ont pour somme 180° : 180 - 75 = 105." },
          ],
          trap: "Croire que les diagonales d'un parallélogramme ont la même longueur ou sont perpendiculaires : c'est vrai seulement pour certains parallélogrammes particuliers (le rectangle pour la même longueur, le losange pour les diagonales perpendiculaires).",
          method: "Pour justifier, écrivez trois phrases : « On sait que » (les données de l'énoncé), « Or » (la propriété du cours, en entier), « Donc » (la conclusion). Sur la figure, codez les longueurs égales et les milieux avant de chercher.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'parallelogrammes-particuliers',
          title: 'Rectangle, losange, carré : les parallélogrammes particuliers',
          minutes: 35,
          objectives: [
            "Connaître le rectangle, le losange et le carré comme des parallélogrammes particuliers.",
            "Connaître et utiliser les propriétés de leurs diagonales.",
            "Reconnaître un rectangle, un losange ou un carré à partir de ses propriétés, et le justifier.",
          ],
          course: [
            {
              heading: "Le rectangle",
              paragraphs: [
                "Un rectangle est un quadrilatère qui a quatre angles droits. Ses côtés opposés sont perpendiculaires à un même côté, donc parallèles entre eux : un rectangle est un parallélogramme. Il a toutes les propriétés du parallélogramme : côtés opposés de même longueur, diagonales qui se coupent en leur milieu.",
                "Il a en plus une propriété qui lui est propre : ses diagonales ont la même longueur. Réciproquement, pour démontrer qu'un parallélogramme est un rectangle, il suffit de montrer qu'il a un angle droit, ou que ses diagonales ont la même longueur.",
              ],
              box: { label: "Propriétés", text: "Les diagonales d'un rectangle ont le même milieu et la même longueur. Un parallélogramme qui a un angle droit, ou dont les diagonales ont la même longueur, est un rectangle." },
            },
            {
              heading: "Le losange",
              paragraphs: [
                "Un losange est un quadrilatère qui a quatre côtés de même longueur. Ses côtés opposés ont donc la même longueur deux à deux : un losange est un parallélogramme, et ses diagonales se coupent en leur milieu.",
                "Il a en plus une propriété qui lui est propre : ses diagonales sont perpendiculaires (ce sont aussi ses axes de symétrie). Réciproquement, un parallélogramme qui a deux côtés consécutifs de même longueur, ou dont les diagonales sont perpendiculaires, est un losange.",
              ],
              box: { label: "Propriétés", text: "Les diagonales d'un losange ont le même milieu et sont perpendiculaires. Un parallélogramme qui a deux côtés consécutifs de même longueur, ou dont les diagonales sont perpendiculaires, est un losange." },
            },
            {
              heading: "Le carré",
              paragraphs: [
                "Un carré est un quadrilatère qui a quatre angles droits et quatre côtés de même longueur. C'est donc à la fois un rectangle et un losange, et il a toutes leurs propriétés : ses diagonales se coupent en leur milieu, ont la même longueur et sont perpendiculaires.",
                "Pour démontrer qu'un quadrilatère est un carré, on peut montrer que c'est un rectangle qui a deux côtés consécutifs de même longueur, ou un losange qui a un angle droit, ou encore un quadrilatère qui est à la fois un rectangle et un losange.",
              ],
            },
            {
              heading: "Une famille emboîtée",
              paragraphs: [
                "On peut ranger ces figures comme des poupées russes. Tous les carrés sont des rectangles et des losanges ; tous les rectangles et tous les losanges sont des parallélogrammes ; tous les parallélogrammes sont des quadrilatères. Mais l'inverse est faux : un rectangle n'est pas toujours un carré, un parallélogramme n'est pas toujours un rectangle.",
                "Les diagonales permettent de s'y retrouver : on part du parallélogramme (diagonales de même milieu), on ajoute une propriété pour obtenir le rectangle (même longueur) ou le losange (perpendiculaires), et les deux à la fois pour obtenir le carré.",
              ],
              box: { label: "À retenir", text: "Diagonales de même milieu : parallélogramme. En plus de même longueur : rectangle. En plus perpendiculaires : losange. En plus de même longueur et perpendiculaires : carré." },
            },
          ],
          keyPoints: [
            "Le rectangle, le losange et le carré sont des parallélogrammes particuliers.",
            "Rectangle : diagonales de même longueur ; un parallélogramme qui a un angle droit est un rectangle.",
            "Losange : diagonales perpendiculaires ; un parallélogramme qui a deux côtés consécutifs égaux est un losange.",
            "Carré : à la fois rectangle et losange ; diagonales de même milieu, de même longueur et perpendiculaires.",
            "Pour identifier un quadrilatère, on montre d'abord que c'est un parallélogramme, puis on cherche la propriété en plus.",
          ],
          example: {
            statement: "ABCD est un parallélogramme de centre O, avec OA = 4 cm et OB = 4 cm. a) Quelle est la nature de ABCD ? Justifiez. b) On apprend de plus que les droites (AC) et (BD) sont perpendiculaires. Que peut-on conclure ?",
            solution: [
              "a) Les diagonales d'un parallélogramme se coupent en leur milieu : AC = 2 × OA = 8 cm et BD = 2 × OB = 8 cm.",
              "On sait que ABCD est un parallélogramme dont les diagonales ont la même longueur. Or un parallélogramme dont les diagonales ont la même longueur est un rectangle. Donc ABCD est un rectangle.",
              "b) ABCD est aussi un parallélogramme dont les diagonales sont perpendiculaires : c'est donc aussi un losange.",
              "Un quadrilatère qui est à la fois un rectangle et un losange est un carré.",
              "Réponse : a) ABCD est un rectangle ; b) ABCD est un carré.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Quelle est la nature d'un quadrilatère dont les diagonales : a) ont le même milieu ; b) ont le même milieu et sont perpendiculaires ; c) ont le même milieu et la même longueur ; d) ont le même milieu, la même longueur et sont perpendiculaires ?",
              hint: "Partez du parallélogramme (même milieu), puis ajoutez une propriété à la fois.",
              solution: [
                "a) Des diagonales de même milieu : c'est un parallélogramme.",
                "b) Un parallélogramme aux diagonales perpendiculaires : c'est un losange.",
                "c) Un parallélogramme aux diagonales de même longueur : c'est un rectangle.",
                "d) À la fois rectangle et losange : c'est un carré.",
              ],
            },
            {
              level: 2,
              statement: "EFGH est un parallélogramme tel que EF = FG = 5 cm. a) Quelle est sa nature ? Justifiez. b) Ses diagonales se coupent en K. Quelle est la mesure de l'angle EKF ? c) On donne EG = 8 cm et FH = 6 cm. Calculez EK et FK.",
              hint: "Les côtés [EF] et [FG] sont consécutifs. Pensez ensuite aux propriétés des diagonales de la figure obtenue.",
              solution: [
                "a) On sait que EFGH est un parallélogramme dont les côtés consécutifs [EF] et [FG] ont la même longueur. Or un tel parallélogramme est un losange. Donc EFGH est un losange.",
                "b) Les diagonales d'un losange sont perpendiculaires : l'angle EKF est droit, il mesure 90°.",
                "c) Les diagonales se coupent en leur milieu K : EK = EG ÷ 2 = 4 cm et FK = FH ÷ 2 = 3 cm.",
                "Réponse : un losange ; 90° ; EK = 4 cm et FK = 3 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle rectangle en A. M est le milieu de [BC], et D est le symétrique de A par rapport à M. a) Démontrez que ABDC est un parallélogramme. b) Démontrez que ABDC est un rectangle. c) Déduisez-en que AM = BC ÷ 2. d) Calculez AM si BC = 10 cm. e) Quelle condition doit vérifier le triangle ABC pour que ABDC soit un carré ?",
              hint: "Les diagonales de ABDC sont [AD] et [BC]. Pour le b, regardez l'angle en A. Pour le c, utilisez les diagonales du rectangle.",
              solution: [
                "a) M est le milieu de [BC] et, comme D est le symétrique de A par rapport à M, M est aussi le milieu de [AD]. Les diagonales [AD] et [BC] du quadrilatère ABDC ont le même milieu : ABDC est un parallélogramme.",
                "b) L'angle BAC est droit, et c'est un angle du parallélogramme ABDC. Or un parallélogramme qui a un angle droit est un rectangle. Donc ABDC est un rectangle.",
                "c) Les diagonales d'un rectangle ont la même longueur : AD = BC. Comme M est le milieu de [AD], AM = AD ÷ 2 = BC ÷ 2.",
                "d) AM = 10 ÷ 2 = 5 cm.",
                "e) Un rectangle qui a deux côtés consécutifs de même longueur est un carré. Il faut donc que AB = AC : le triangle ABC doit être rectangle et isocèle en A.",
                "Réponse : ABDC est un rectangle ; AM = BC ÷ 2 = 5 cm ; il faut AB = AC.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de cette démonstration : ABCD est un rectangle.",
            items: [
              "On sait que les diagonales [AC] et [BD] du quadrilatère ABCD ont le même milieu O.",
              "Or, un quadrilatère dont les diagonales ont le même milieu est un parallélogramme.",
              "Donc ABCD est un parallélogramme.",
              "On sait aussi que AC = BD.",
              "Or, un parallélogramme dont les diagonales ont la même longueur est un rectangle.",
              "Donc ABCD est un rectangle.",
            ],
          },
          quiz: [
            { q: "Un parallélogramme qui a un angle droit est :", options: ["un losange", "un cerf-volant", "un rectangle", "un trapèze"], answer: 2, why: "Un parallélogramme qui a un angle droit en a quatre : c'est un rectangle." },
            { q: "En plus d'avoir le même milieu, les diagonales d'un losange sont :", options: ["perpendiculaires", "toujours de même longueur", "parallèles"], answer: 0, why: "Les diagonales d'un losange sont perpendiculaires ; elles n'ont la même longueur que si le losange est un carré." },
            { q: "Un rectangle dont deux côtés consécutifs ont la même longueur est :", options: ["un trapèze", "un carré", "un parallélogramme non particulier"], answer: 1, why: "Il a quatre angles droits et quatre côtés de même longueur : c'est un carré." },
            { q: "ABCD est un rectangle de centre O et AC = 10 cm. Combien mesure OB ?", options: ["10 cm", "20 cm", "5 cm", "On ne peut pas savoir"], answer: 2, why: "Les diagonales d'un rectangle ont la même longueur et le même milieu : BD = 10 cm, donc OB = 5 cm." },
            { q: "Quelle affirmation est vraie ?", options: ["Tout losange est un carré", "Tout carré est un losange", "Tout rectangle est un carré", "Tout parallélogramme est un rectangle"], answer: 1, why: "Un carré a quatre côtés de même longueur : c'est un losange. L'inverse est faux." },
          ],
          trap: "Croire qu'un carré n'est ni un rectangle ni un losange, alors qu'il est les deux à la fois ; ou conclure « rectangle » pour un quadrilatère dont on sait seulement que les diagonales ont la même longueur, sans savoir qu'elles ont le même milieu.",
          method: "Pour identifier un quadrilatère, procédez par étapes : montrez d'abord que c'est un parallélogramme, puis cherchez la propriété en plus (angle droit, côtés consécutifs égaux, diagonales de même longueur ou perpendiculaires). Un tableau des propriétés des diagonales est une excellente fiche de révision.",
        },
      ],
    },
  ],
}
