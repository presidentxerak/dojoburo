import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-4e',
  chapters: [
    /* ================================================================== */
    /* LE THÉORÈME DE THALÈS DANS LE TRIANGLE                               */
    /* ================================================================== */
    {
      id: 'thales',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'agrandissement-reduction',
          title: "Agrandissement et réduction d'une figure",
          minutes: 25,
          objectives: [
            "Reconnaître un agrandissement ou une réduction d'une figure et déterminer son rapport k.",
            "Calculer des longueurs dans une figure agrandie ou réduite.",
            "Savoir qu'un agrandissement ou une réduction conserve les angles, le parallélisme et la forme de la figure.",
          ],
          course: [
            {
              heading: "Agrandir ou réduire, c'est multiplier toutes les longueurs",
              paragraphs: [
                "Vous rencontrez des agrandissements et des réductions tous les jours : une photo imprimée en grand format, le plan d'un appartement, la carte d'une région, la maquette d'un avion. Dans chaque cas, la nouvelle figure a la même forme que la figure de départ, mais pas la même taille.",
                "Agrandir ou réduire une figure, c'est multiplier toutes ses longueurs par un même nombre k, appelé le rapport (ou le coefficient) de l'agrandissement ou de la réduction. Si k > 1, la figure obtenue est plus grande : c'est un agrandissement. Si 0 < k < 1, elle est plus petite : c'est une réduction. Si k = 1, on obtient une figure de même taille.",
                "Exemple : un rectangle de 4 cm sur 3 cm est agrandi avec le rapport k = 2,5. Les dimensions du nouveau rectangle sont 4 × 2,5 = 10 cm et 3 × 2,5 = 7,5 cm. Avec le rapport k = 0,5, on obtiendrait une réduction : un rectangle de 2 cm sur 1,5 cm.",
              ],
              box: { label: "Définition", text: "Agrandir ou réduire une figure, c'est multiplier toutes ses longueurs par un même nombre k strictement positif. Si k > 1, c'est un agrandissement ; si 0 < k < 1, c'est une réduction." },
            },
            {
              heading: "Trouver le rapport et calculer des longueurs",
              paragraphs: [
                "Les longueurs de la nouvelle figure sont proportionnelles aux longueurs correspondantes de la figure de départ : le rapport k est le coefficient de proportionnalité. On le trouve en divisant une longueur de la nouvelle figure par la longueur qui lui correspond sur la figure de départ : k = nouvelle longueur ÷ longueur de départ.",
                "Exemple : un triangle a des côtés de 6 cm, 8 cm et 10 cm. On le réduit, et le côté de 6 cm devient un côté de 4,5 cm. Le rapport vaut k = 4,5 ÷ 6 = 0,75. Les deux autres côtés mesurent donc 8 × 0,75 = 6 cm et 10 × 0,75 = 7,5 cm.",
                "Un plan à l'échelle est une réduction. Sur un plan à l'échelle 1/100, toutes les longueurs réelles sont multipliées par k = 1/100 = 0,01 : un mur de 5 m, soit 500 cm, est représenté par un segment de 5 cm. Pour retrouver une longueur réelle, on fait l'opération inverse : on divise par k.",
              ],
              box: { label: "Formule", text: "k = longueur sur la nouvelle figure ÷ longueur correspondante sur la figure de départ. Puis : nouvelle longueur = k × longueur de départ, et longueur de départ = nouvelle longueur ÷ k." },
            },
            {
              heading: "Ce qui est conservé, et ce qui ne l'est pas",
              paragraphs: [
                "Un agrandissement ou une réduction conserve la forme de la figure : les angles gardent la même mesure, les droites parallèles restent parallèles, les droites perpendiculaires restent perpendiculaires, et le milieu d'un segment a pour image le milieu du segment correspondant. Un carré reste un carré, un triangle rectangle reste un triangle rectangle.",
                "En revanche, les aires ne sont pas multipliées par k. Un carré de 2 cm de côté a une aire de 4 cm². Agrandi avec le rapport 2, il devient un carré de 4 cm de côté, dont l'aire vaut 16 cm² : l'aire a été multipliée par 4, et non par 2. Vous étudierez en 3e la règle qui permet de prévoir ce changement.",
              ],
              box: { label: "Propriété", text: "Un agrandissement ou une réduction multiplie toutes les longueurs par k, mais conserve les mesures des angles, le parallélisme, la perpendicularité et les milieux." },
            },
            {
              heading: "Une réduction cachée dans un triangle",
              paragraphs: [
                "Soit ABC un triangle, M un point du segment [AB] et N un point du segment [AC], tels que les droites (MN) et (BC) soient parallèles. Le petit triangle AMN est alors une réduction du grand triangle ABC, placée dans le coin A. Ils ont le même angle en A, et les angles AMN et ABC sont égaux, car ce sont des angles correspondants formés par deux droites parallèles.",
                "Le rapport de cette réduction est k = AM ÷ AB. Par exemple, si AM = 3 cm et AB = 6 cm, alors k = 0,5 : tous les côtés du triangle AMN sont deux fois plus courts que les côtés correspondants du triangle ABC, et MN = BC ÷ 2. Cette situation, appelée configuration des triangles emboîtés, est celle du théorème de Thalès, étudié dans la leçon suivante.",
              ],
            },
          ],
          keyPoints: [
            "Agrandir ou réduire une figure, c'est multiplier toutes ses longueurs par un même nombre k.",
            "Si k > 1, c'est un agrandissement ; si 0 < k < 1, c'est une réduction.",
            "k = longueur sur la nouvelle figure ÷ longueur correspondante sur la figure de départ.",
            "Les angles, le parallélisme, la perpendicularité et les milieux sont conservés.",
            "Les aires ne sont pas multipliées par k : un carré dont le côté double a une aire multipliée par 4.",
            "Un plan à l'échelle 1/100 est une réduction de rapport 0,01.",
          ],
          example: {
            statement: "Une photo rectangulaire mesure 10 cm sur 15 cm. On l'agrandit pour en faire une affiche dont le plus grand côté mesure 60 cm. Calculez le rapport d'agrandissement, puis la largeur de l'affiche. Quelle est la mesure des angles de l'affiche ?",
            solution: [
              "Le plus grand côté de la photo, 15 cm, correspond au plus grand côté de l'affiche, 60 cm.",
              "Le rapport d'agrandissement vaut k = 60 ÷ 15 = 4.",
              "La largeur de l'affiche vaut 10 × 4 = 40 cm.",
              "Un agrandissement conserve les angles : l'affiche est un rectangle, ses quatre angles mesurent 90°.",
              "Conclusion : k = 4, et l'affiche mesure 40 cm sur 60 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle EFG a pour côtés EF = 5 cm, FG = 7 cm et EG = 4 cm, et l'angle EFG mesure 48°. On le réduit avec le rapport k = 0,6. Calculez les longueurs des côtés du triangle réduit et la mesure de l'angle qui correspond à l'angle EFG.",
              hint: "Multipliez chaque longueur par 0,6. Rappelez-vous ce qu'une réduction fait aux angles.",
              solution: [
                "Côté correspondant à [EF] : 5 × 0,6 = 3 cm.",
                "Côté correspondant à [FG] : 7 × 0,6 = 4,2 cm.",
                "Côté correspondant à [EG] : 4 × 0,6 = 2,4 cm.",
                "Une réduction conserve les angles : l'angle correspondant mesure toujours 48°.",
                "Conclusion : le triangle réduit a des côtés de 3 cm, 4,2 cm et 2,4 cm, et un angle de 48°.",
              ],
            },
            {
              level: 2,
              statement: "Une maquette de voilier est une réduction du vrai bateau (données fictives). Le mât mesure 12 m en réalité et 30 cm sur la maquette. a) Calculez le rapport de réduction. b) Le bateau mesure 9 m de long. Quelle est la longueur de la maquette ? c) Sur la maquette, la voile mesure 25 cm de haut. Quelle est sa hauteur réelle ?",
              hint: "Exprimez d'abord les deux longueurs du mât dans la même unité, puis calculez k = longueur sur la maquette ÷ longueur réelle.",
              solution: [
                "a) 12 m = 1 200 cm. Le rapport vaut k = 30 ÷ 1 200 = 0,025 (c'est-à-dire 1/40).",
                "b) Longueur de la maquette : 9 m = 900 cm, et 900 × 0,025 = 22,5 cm.",
                "c) Pour revenir à la réalité, on divise par k : 25 ÷ 0,025 = 1 000 cm, soit 10 m.",
                "Conclusion : k = 0,025, la maquette mesure 22,5 cm de long et la voile réelle mesure 10 m de haut.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une photo mesure 10 cm sur 15 cm. a) Un tirage de 20 cm sur 30 cm est-il un agrandissement de cette photo ? b) Et un tirage de 30 cm sur 40 cm ? c) On veut le plus grand agrandissement possible qui tienne dans un cadre de 45 cm sur 60 cm, sans couper l'image. Quel rapport faut-il choisir, et quelles sont les dimensions obtenues ? d) Par combien l'aire de la photo a-t-elle été multipliée dans la question c ?",
              hint: "Pour qu'un tirage soit un agrandissement, il faut que les deux dimensions soient multipliées par le même nombre. Pour la question c, calculez le rapport permis par chaque dimension du cadre.",
              solution: [
                "a) 20 ÷ 10 = 2 et 30 ÷ 15 = 2 : les deux dimensions sont multipliées par 2. C'est un agrandissement de rapport 2.",
                "b) 30 ÷ 10 = 3 mais 40 ÷ 15 ≈ 2,67 : les dimensions ne sont pas multipliées par le même nombre. Ce n'est pas un agrandissement (l'image serait déformée).",
                "c) Pour la largeur, il faut 10 × k ≤ 45, donc k ≤ 4,5. Pour la longueur, il faut 15 × k ≤ 60, donc k ≤ 4. Le plus grand rapport possible est k = 4.",
                "Les dimensions obtenues sont 10 × 4 = 40 cm et 15 × 4 = 60 cm : le tirage de 40 cm sur 60 cm tient dans le cadre.",
                "d) Aire de la photo : 10 × 15 = 150 cm². Aire du tirage : 40 × 60 = 2 400 cm². Or 2 400 ÷ 150 = 16 = 4 × 4.",
                "Conclusion : le rapport est 4, le tirage mesure 40 cm sur 60 cm, et l'aire a été multipliée par 16, pas par 4.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les agrandissements et les réductions.",
            statements: [
              { text: "Une réduction de rapport 0,5 divise toutes les longueurs par 2.", true: true, why: "Multiplier par 0,5, c'est diviser par 2." },
              { text: "Un agrandissement de rapport 3 multiplie les angles par 3.", true: false, why: "Les angles sont conservés : un angle de 40° reste un angle de 40°." },
              { text: "Si l'on agrandit un carré avec le rapport 2, son aire est multipliée par 2.", true: false, why: "Un carré de côté 2 cm (aire 4 cm²) devient un carré de côté 4 cm (aire 16 cm²) : l'aire est multipliée par 4." },
              { text: "Un rapport k = 1,2 correspond à un agrandissement.", true: true, why: "Le rapport est supérieur à 1 : les longueurs augmentent." },
              { text: "Ajouter 2 cm à chaque côté d'un rectangle donne toujours un agrandissement.", true: false, why: "Un rectangle de 2 cm sur 4 cm deviendrait un rectangle de 4 cm sur 6 cm : 4 ÷ 2 = 2 mais 6 ÷ 4 = 1,5. Il faut multiplier, pas ajouter." },
              { text: "Deux droites parallèles restent parallèles après une réduction.", true: true, why: "Un agrandissement ou une réduction conserve le parallélisme." },
              { text: "Un plan à l'échelle 1/100 est un agrandissement.", true: false, why: "Le rapport 0,01 est inférieur à 1 : c'est une réduction." },
            ],
          },
          quiz: [
            { q: "Un segment de 8 cm est réduit avec le rapport 0,25. Quelle est sa nouvelle longueur ?", options: ["32 cm", "2 cm", "7,75 cm", "4 cm"], answer: 1, why: "On multiplie par le rapport : 8 × 0,25 = 2 cm." },
            { q: "Un côté de 5 cm devient un côté de 7,5 cm. Quel est le rapport d'agrandissement ?", options: ["2,5", "0,5", "1,5", "2"], answer: 2, why: "k = nouvelle longueur ÷ longueur de départ = 7,5 ÷ 5 = 1,5." },
            { q: "Un triangle a un angle de 70°. On l'agrandit avec le rapport 3. Que mesure l'angle correspondant ?", options: ["70°", "210°", "73°", "23,3°"], answer: 0, why: "Un agrandissement conserve les angles : l'angle mesure toujours 70°." },
            { q: "Quel rapport correspond à une réduction ?", options: ["k = 1", "k = 4/3", "k = 2,1", "k = 0,8"], answer: 3, why: "Une réduction a un rapport compris entre 0 et 1 : seul 0,8 convient." },
            { q: "Sur un plan à l'échelle 1/200, un mur mesure 3 cm. Quelle est sa longueur réelle ?", options: ["600 cm", "60 cm", "6 000 cm"], answer: 0, why: "On divise par le rapport 1/200, c'est-à-dire qu'on multiplie par 200 : 3 × 200 = 600 cm, soit 6 m." },
          ],
          trap: "Ajouter un même nombre à toutes les longueurs au lieu de les multiplier par le même nombre k, ou croire qu'un agrandissement agrandit aussi les angles.",
          method: "Pour vérifier qu'une figure est un agrandissement ou une réduction d'une autre, calculez le quotient de chaque paire de longueurs correspondantes : ils doivent tous être égaux, et ce quotient commun est le rapport k.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'theoreme-thales',
          title: 'Calculer une longueur avec le théorème de Thalès',
          minutes: 35,
          objectives: [
            "Reconnaître la configuration des triangles emboîtés.",
            "Écrire l'égalité des rapports donnée par le théorème de Thalès.",
            "Calculer une longueur avec le théorème de Thalès et rédiger la démonstration.",
          ],
          course: [
            {
              heading: "La configuration des triangles emboîtés",
              paragraphs: [
                "On considère un triangle ABC, un point M du segment [AB] et un point N du segment [AC], tels que les droites (MN) et (BC) soient parallèles. Le petit triangle AMN est niché dans le coin A du grand triangle ABC : on parle de triangles emboîtés.",
                "Pour reconnaître cette configuration, cherchez trois éléments : un sommet commun (ici A), deux points alignés avec ce sommet sur chaque côté (A, M, B d'une part et A, N, C d'autre part), et deux droites parallèles qui coupent ces côtés ((MN) et (BC)).",
                "Ce théorème porte le nom de Thalès de Milet, savant grec du VIe siècle avant J.-C. La tradition raconte qu'il aurait mesuré la hauteur d'une pyramide d'Égypte à l'aide de son ombre, mais ce récit n'est pas vérifiable.",
              ],
            },
            {
              heading: "L'énoncé du théorème",
              paragraphs: [
                "Vous avez vu dans la leçon précédente que, dans cette configuration, le triangle AMN est une réduction du triangle ABC. Les longueurs de ses côtés sont donc proportionnelles aux longueurs des côtés correspondants du triangle ABC : AM correspond à AB, AN correspond à AC et MN correspond à BC.",
                "Le théorème de Thalès traduit cette proportionnalité par une égalité de trois quotients. Ces quotients sont tous égaux au rapport de réduction k. Par exemple, si AM/AB = 0,4, alors AN = 0,4 × AC et MN = 0,4 × BC.",
              ],
              box: { label: "Théorème de Thalès", text: "Soit ABC un triangle, M un point du segment [AB] et N un point du segment [AC]. Si les droites (MN) et (BC) sont parallèles, alors AM/AB = AN/AC = MN/BC." },
            },
            {
              heading: "Écrire les rapports sans se tromper",
              paragraphs: [
                "Au numérateur, on place les côtés du petit triangle AMN ; au dénominateur, les côtés correspondants du grand triangle ABC, dans le même ordre. On peut s'aider d'un tableau de proportionnalité : première ligne AM, AN, MN ; deuxième ligne AB, AC, BC.",
                "Attention : on compare AM à AB (le côté entier), et non à MB (le morceau restant). Si l'énoncé donne AM = 2 cm et MB = 3 cm, il faut d'abord calculer AB = AM + MB = 5 cm. De même, si l'on cherche NC, on calcule d'abord AC, puis NC = AC - AN.",
              ],
              box: { label: "À retenir", text: "Petit triangle en haut, grand triangle en bas : AM/AB = AN/AC = MN/BC. Les dénominateurs sont des côtés entiers du grand triangle." },
            },
            {
              heading: "Calculer une longueur et rédiger",
              paragraphs: [
                "La méthode tient en quatre étapes : 1) citer les données (M sur [AB], N sur [AC], (MN) et (BC) parallèles) ; 2) citer le théorème de Thalès et écrire l'égalité des trois quotients ; 3) remplacer les longueurs connues par leurs valeurs ; 4) choisir l'égalité de deux quotients qui contient la longueur cherchée, et la calculer par un produit en croix.",
                "Exemple : M est sur [AB], N sur [AC], (MN) // (BC), AM = 4 cm, AB = 10 cm, AN = 3 cm et BC = 7 cm. D'après le théorème de Thalès, AM/AB = AN/AC = MN/BC, donc 4/10 = 3/AC = MN/7. Avec 4/10 = MN/7, on obtient MN = 4 × 7 ÷ 10 = 2,8 cm. Avec 4/10 = 3/AC, on obtient AC = 3 × 10 ÷ 4 = 7,5 cm.",
                "Pour contrôler : le petit triangle doit avoir des côtés plus courts que le grand. Ici MN = 2,8 cm < BC = 7 cm et AN = 3 cm < AC = 7,5 cm : les résultats sont cohérents.",
              ],
            },
          ],
          keyPoints: [
            "Configuration : M sur [AB], N sur [AC] et (MN) // (BC) ; le triangle AMN est une réduction du triangle ABC.",
            "Théorème de Thalès : AM/AB = AN/AC = MN/BC.",
            "Numérateurs : côtés du petit triangle ; dénominateurs : côtés correspondants du grand triangle.",
            "On compare AM à AB, jamais à MB : calculez les côtés entiers si besoin.",
            "On garde l'égalité de deux quotients qui contient la longueur cherchée, puis on fait un produit en croix.",
            "Le théorème ne s'applique que si les droites sont parallèles.",
          ],
          example: {
            statement: "Dans le triangle ABC, M est un point de [AB] et N un point de [AC], et les droites (MN) et (BC) sont parallèles. On donne AM = 4 cm, AB = 10 cm, AN = 3 cm et BC = 7 cm. Calculez AC et MN.",
            solution: [
              "Les points A, M, B sont alignés, ainsi que A, N, C, et les droites (MN) et (BC) sont parallèles.",
              "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.",
              "On remplace : 4/10 = 3/AC = MN/7.",
              "Calcul de AC : 4/10 = 3/AC, donc AC = 3 × 10 ÷ 4 = 7,5 cm.",
              "Calcul de MN : 4/10 = MN/7, donc MN = 4 × 7 ÷ 10 = 2,8 cm.",
              "Conclusion : AC = 7,5 cm et MN = 2,8 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le triangle ABC, M est un point de [AB] et N un point de [AC], tels que (MN) // (BC). On donne AM = 2 cm, AB = 5 cm, AC = 6 cm et BC = 8 cm. Calculez AN et MN.",
              hint: "Écrivez AM/AB = AN/AC = MN/BC, remplacez par les valeurs connues, puis faites deux produits en croix.",
              solution: [
                "M est sur [AB], N est sur [AC] et les droites (MN) et (BC) sont parallèles.",
                "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 2/5 = AN/6 = MN/8.",
                "AN = 2 × 6 ÷ 5 = 2,4 cm.",
                "MN = 2 × 8 ÷ 5 = 3,2 cm.",
                "Conclusion : AN = 2,4 cm et MN = 3,2 cm.",
              ],
            },
            {
              level: 2,
              statement: "Dans le triangle RST, E est un point de [RS] et F un point de [RT], tels que (EF) // (ST). On donne RE = 3 cm, ES = 4,5 cm, EF = 2,4 cm et RF = 2,8 cm. Calculez RS, puis ST, RT et FT.",
              hint: "Le dénominateur doit être le côté entier RS : commencez par RS = RE + ES. Le rapport RE/RS vous servira pour toutes les longueurs.",
              solution: [
                "E est sur [RS], donc RS = RE + ES = 3 + 4,5 = 7,5 cm.",
                "E est sur [RS], F est sur [RT] et (EF) // (ST). D'après le théorème de Thalès : RE/RS = RF/RT = EF/ST, soit 3/7,5 = 2,8/RT = 2,4/ST.",
                "Le rapport vaut 3 ÷ 7,5 = 0,4. Donc ST = 2,4 ÷ 0,4 = 6 cm et RT = 2,8 ÷ 0,4 = 7 cm.",
                "F est sur [RT], donc FT = RT - RF = 7 - 2,8 = 4,2 cm.",
                "Conclusion : RS = 7,5 cm, ST = 6 cm, RT = 7 cm et FT = 4,2 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle tel que AB = 12 cm, AC = 9 cm et BC = 15 cm. M est le point de [AB] tel que AM = 4 cm, et la parallèle à (BC) passant par M coupe [AC] en N. a) Calculez AN et MN. b) Comparez le périmètre du triangle AMN à celui du triangle ABC. c) Où faudrait-il placer M sur [AB] pour que MN mesure 10 cm ? d) Démontrez que le triangle ABC est rectangle en A, et déduisez-en la nature du triangle AMN.",
              hint: "Le rapport AM/AB vous donne toutes les longueurs. Pour la question d, utilisez la réciproque du théorème de Pythagore avec le plus grand côté [BC].",
              solution: [
                "a) M est sur [AB], N est sur [AC] et (MN) // (BC). D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 4/12 = AN/9 = MN/15. Donc AN = 4 × 9 ÷ 12 = 3 cm et MN = 4 × 15 ÷ 12 = 5 cm.",
                "b) Périmètre de AMN : 4 + 3 + 5 = 12 cm. Périmètre de ABC : 12 + 9 + 15 = 36 cm. Or 12 = 36 ÷ 3 : le périmètre est réduit dans le même rapport 4/12 = 1/3 que les longueurs.",
                "c) Il faut AM/AB = MN/BC = 10/15, donc AM/12 = 10/15 et AM = 12 × 10 ÷ 15 = 8 cm.",
                "d) Le plus grand côté est [BC] : BC² = 15² = 225, et AB² + AC² = 144 + 81 = 225. On a BC² = AB² + AC², donc d'après la réciproque du théorème de Pythagore, ABC est rectangle en A.",
                "Le triangle AMN a le même angle en A que le triangle ABC (une réduction conserve les angles), donc AMN est lui aussi rectangle en A. On peut le vérifier : 3² + 4² = 9 + 16 = 25 = 5².",
                "Conclusion : AN = 3 cm, MN = 5 cm, le périmètre est divisé par 3, il faut AM = 8 cm, et AMN est rectangle en A.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la rédaction du calcul de MN avec le théorème de Thalès.",
            items: [
              "M est sur [AB], N est sur [AC] et les droites (MN) et (BC) sont parallèles.",
              "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.",
              "On remplace par les longueurs connues : 4/10 = 3/AC = MN/7.",
              "On garde l'égalité utile : 4/10 = MN/7.",
              "Par produit en croix : MN = 4 × 7 ÷ 10.",
              "Conclusion : MN = 2,8 cm.",
            ],
          },
          quiz: [
            { q: "M est sur [AB], N est sur [AC]. Quelle condition faut-il pour appliquer le théorème de Thalès ?", options: ["ABC est rectangle", "AM = AN", "(MN) et (BC) sont parallèles", "M est le milieu de [AB]"], answer: 2, why: "L'hypothèse du théorème de Thalès est le parallélisme des droites (MN) et (BC)." },
            { q: "Avec M sur [AB], N sur [AC] et (MN) // (BC), quelle égalité est juste ?", options: ["AM/MB = AN/NC = MN/BC", "AM/AB = AN/AC = MN/BC", "AB/AM = AN/AC = MN/BC", "AM/AB = AC/AN = BC/MN"], answer: 1, why: "Les côtés du triangle AMN sont au numérateur et les côtés correspondants du triangle ABC au dénominateur." },
            { q: "On a 3/6 = MN/8. Combien vaut MN ?", options: ["4", "16", "2,25", "5"], answer: 0, why: "Par produit en croix : MN = 3 × 8 ÷ 6 = 4." },
            { q: "On donne AM = 2 cm et MB = 6 cm, avec M sur [AB]. Quel quotient faut-il écrire ?", options: ["AM/AB = 2/6", "AM/AB = 6/8", "AM/MB = 2/6", "AM/AB = 2/8"], answer: 3, why: "AB = AM + MB = 8 cm, et le dénominateur est le côté entier AB : AM/AB = 2/8." },
            { q: "Que faut-il obtenir pour un côté du petit triangle, par rapport au côté correspondant du grand ?", options: ["Une longueur plus grande", "Une longueur plus petite", "La même longueur"], answer: 1, why: "Le triangle AMN est une réduction du triangle ABC : ses côtés sont plus courts. C'est un bon moyen de contrôler un résultat." },
          ],
          trap: "Écrire AM/MB au lieu de AM/AB, c'est-à-dire comparer un morceau de côté à un autre morceau au lieu de comparer le côté du petit triangle au côté entier du grand.",
          method: "Repassez en couleur le petit triangle AMN puis le grand triangle ABC, et écrivez le tableau AM, AN, MN au-dessus de AB, AC, BC avant de remplacer par les valeurs.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'problemes-thales',
          title: 'Résoudre un problème avec le théorème de Thalès',
          minutes: 35,
          objectives: [
            "Modéliser une situation concrète par une configuration de triangles emboîtés.",
            "Justifier le parallélisme de deux droites avant d'appliquer le théorème de Thalès.",
            "Choisir entre le théorème de Thalès et le théorème de Pythagore, et les enchaîner dans un problème.",
          ],
          course: [
            {
              heading: "Repérer les droites parallèles dans une situation réelle",
              paragraphs: [
                "Dans un problème concret, l'énoncé ne dit pas toujours « les droites sont parallèles ». C'est à vous de le justifier. La propriété la plus utile date de la 6e : si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.",
                "Ainsi, deux poteaux verticaux plantés sur un sol horizontal sont perpendiculaires au sol, donc parallèles entre eux. De même, un mur vertical et un piquet vertical sont parallèles, et deux étagères horizontales d'une même bibliothèque sont parallèles. Les rayons du Soleil, qui vient de très loin, sont aussi considérés comme parallèles.",
              ],
              box: { label: "Propriété", text: "Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles." },
            },
            {
              heading: "Un exemple célèbre : mesurer un arbre avec son ombre",
              paragraphs: [
                "Une personne se place de façon que l'extrémité de son ombre coïncide avec l'extrémité S de l'ombre d'un arbre. On note P le point où elle se tient, H le sommet de sa tête, T le pied de l'arbre et A son sommet. Les points S, P, T sont alignés sur le sol, et S, H, A sont alignés sur un même rayon de Soleil.",
                "La personne [PH] et l'arbre [TA] sont verticaux, donc perpendiculaires au sol (ST) : les droites (PH) et (TA) sont parallèles. Dans le triangle STA, P est sur [ST] et H est sur [SA]. D'après le théorème de Thalès : SP/ST = SH/SA = PH/TA.",
                "Avec des données fictives : la personne mesure 1,60 m, SP = 2 m et ST = 15 m. Alors 2/15 = 1,60/TA, donc TA = 1,60 × 15 ÷ 2 = 12 m. On a mesuré l'arbre sans y grimper.",
              ],
            },
            {
              heading: "Enchaîner Pythagore et Thalès",
              paragraphs: [
                "Le théorème de Pythagore relie les trois côtés d'un triangle rectangle ; le théorème de Thalès relie les côtés de deux triangles emboîtés grâce à des droites parallèles. Dans un problème, on a souvent besoin des deux : on calcule d'abord une longueur manquante avec l'un, puis on l'utilise dans l'autre.",
                "Pour choisir : si la figure contient un triangle rectangle dont on connaît deux côtés, pensez à Pythagore. Si elle contient deux droites parallèles qui coupent les côtés d'un triangle, pensez à Thalès. Un schéma à main levée, codé avec les angles droits et les longueurs connues, aide beaucoup à voir les deux configurations.",
              ],
              box: { label: "À retenir", text: "Pythagore : un triangle rectangle et deux côtés connus. Thalès : deux droites parallèles dans un triangle. Un problème peut demander les deux, l'un après l'autre." },
            },
            {
              heading: "Rédiger la solution d'un problème",
              paragraphs: [
                "Une bonne rédaction comporte : un schéma codé ; la justification du parallélisme ; la phrase « D'après le théorème de Thalès » suivie de l'égalité des quotients ; les calculs ; une phrase de conclusion avec l'unité. Si un résultat est arrondi, précisez la précision choisie (au centimètre, au dixième...).",
                "Terminez toujours par un contrôle de vraisemblance : un arbre de 120 m ou une rampe de 2 mm doivent vous alerter. Vérifiez aussi que le petit triangle a bien des côtés plus courts que le grand.",
              ],
            },
          ],
          keyPoints: [
            "Deux droites perpendiculaires à une même droite sont parallèles : poteaux, murs et piquets verticaux sont parallèles.",
            "Les rayons du Soleil sont considérés comme parallèles.",
            "Avant d'appliquer Thalès, il faut justifier le parallélisme.",
            "Pythagore : un triangle rectangle ; Thalès : deux parallèles dans un triangle. On peut les enchaîner.",
            "Conclusion avec l'unité et contrôle de vraisemblance.",
          ],
          example: {
            statement: "Une rampe d'accès [AC] relie le sol au haut d'un muret vertical [BC] de 0,8 m (données fictives). Le triangle ABC est rectangle en B et AB = 4 m. Un poteau vertical [MN] soutient la rampe, avec M sur [AB], N sur [AC] et AM = 1,5 m. a) Calculez la hauteur MN du poteau. b) Calculez la longueur AC de la rampe, au centimètre près.",
            solution: [
              "a) Le poteau [MN] et le muret [BC] sont verticaux, donc tous deux perpendiculaires au sol (AB) : les droites (MN) et (BC) sont parallèles.",
              "M est sur [AB] et N sur [AC]. D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 1,5/4 = AN/AC = MN/0,8.",
              "MN = 1,5 × 0,8 ÷ 4 = 0,3 m, soit 30 cm.",
              "b) Le triangle ABC est rectangle en B. D'après le théorème de Pythagore : AC² = AB² + BC² = 4² + 0,8² = 16 + 0,64 = 16,64.",
              "AC = √16,64 ≈ 4,08 m.",
              "Conclusion : le poteau mesure 30 cm et la rampe mesure environ 4,08 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour estimer la hauteur d'un lampadaire vertical, Inès plante un bâton vertical de 1 m. L'extrémité S de l'ombre du bâton coïncide avec l'extrémité de l'ombre du lampadaire. Le bâton est planté en P avec SP = 1,6 m, et le pied T du lampadaire est à ST = 12 m de S (données fictives). S, P, T sont alignés. Calculez la hauteur du lampadaire.",
              hint: "Le bâton et le lampadaire sont tous deux perpendiculaires au sol. Écrivez SP/ST = hauteur du bâton/hauteur du lampadaire.",
              solution: [
                "Le bâton et le lampadaire sont verticaux, donc perpendiculaires au sol : ils sont parallèles.",
                "On note B le haut du bâton et L le haut du lampadaire. Dans le triangle STL, P est sur [ST], B est sur [SL] et (PB) // (TL).",
                "D'après le théorème de Thalès : SP/ST = SB/SL = PB/TL, soit 1,6/12 = 1/TL.",
                "TL = 1 × 12 ÷ 1,6 = 7,5 m.",
                "Conclusion : le lampadaire mesure 7,5 m de haut.",
              ],
            },
            {
              level: 2,
              statement: "La toile avant d'une tente a la forme d'un triangle ABC isocèle en A, avec AB = AC = 1,5 m et BC = 1,8 m, la base [BC] étant posée sur le sol. Une barre [MN] parallèle au sol est fixée avec M sur [AB], N sur [AC] et AM = 0,5 m. a) Calculez la longueur MN de la barre. b) H est le pied de la hauteur issue de A ; dans ce triangle isocèle, H est aussi le milieu de [BC]. Calculez la hauteur AH de la tente.",
              hint: "a) La barre est parallèle au sol, donc à (BC) : c'est Thalès. b) Le triangle ABH est rectangle en H : c'est Pythagore, avec BH = BC ÷ 2.",
              solution: [
                "a) M est sur [AB], N est sur [AC] et (MN) // (BC). D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 0,5/1,5 = MN/1,8.",
                "MN = 0,5 × 1,8 ÷ 1,5 = 0,6 m.",
                "b) H est le milieu de [BC], donc BH = 1,8 ÷ 2 = 0,9 m. Le triangle ABH est rectangle en H.",
                "D'après le théorème de Pythagore : AB² = AH² + BH², donc AH² = 1,5² - 0,9² = 2,25 - 0,81 = 1,44.",
                "AH = √1,44 = 1,2 m.",
                "Conclusion : la barre mesure 0,6 m et la tente mesure 1,2 m de haut.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour mesurer la largeur d'une rivière aux rives parallèles, Hugo repère un arbre A sur l'autre rive. Sur sa rive, il place le point M juste en face de l'arbre, de sorte que (AM) soit perpendiculaire à la rive, puis un point N sur la rive avec MN = 30 m. Il recule ensuite : il place B sur la droite (AM), à 10 m de la rive (MB = 10 m, M entre A et B), puis C sur la droite (AN), de sorte que (BC) soit parallèle à la rive. Il mesure BC = 36 m (données fictives). Calculez la largeur AM de la rivière.",
              hint: "Dans le triangle ABC, M est sur [AB], N est sur [AC] et (MN) // (BC). Notez x la largeur AM : alors AB = x + 10. Écrivez l'égalité de Thalès qui contient x, puis résolvez l'équation.",
              solution: [
                "La rive (MN) et la droite (BC) sont parallèles. Dans le triangle ABC, M est sur [AB] et N est sur [AC].",
                "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC. On note x = AM ; alors AB = x + 10, et x/(x + 10) = 30/36.",
                "Par produit en croix : 36x = 30(x + 10), soit 36x = 30x + 300.",
                "Donc 6x = 300 et x = 50.",
                "Vérification : AB = 60 m, et 50/60 = 30/36, car les deux quotients valent 5/6.",
                "Conclusion : la rivière mesure 50 m de large.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque situation à la propriété ou au théorème qui permet de la traiter.",
            pairs: [
              { left: "Deux poteaux verticaux sur un sol horizontal", right: "Ils sont parallèles : perpendiculaires à la même droite" },
              { left: "Un triangle rectangle dont on connaît deux côtés", right: "Le théorème de Pythagore donne le troisième côté" },
              { left: "Deux parallèles coupent deux côtés d'un triangle", right: "Le théorème de Thalès donne une longueur" },
              { left: "Vérifier qu'un triangle est rectangle", right: "La réciproque du théorème de Pythagore" },
              { left: "Deux rayons de Soleil", right: "On les considère comme parallèles" },
            ],
          },
          quiz: [
            { q: "Pourquoi deux murs verticaux sont-ils parallèles ?", options: ["Parce qu'ils ont la même hauteur", "Parce qu'ils sont perpendiculaires au même sol", "Parce qu'ils sont proches", "Parce qu'ils sont en briques"], answer: 1, why: "Deux droites perpendiculaires à une même droite sont parallèles entre elles." },
            { q: "Un bâton de 2 m a une ombre de 3 m. Au même moment et au même endroit, un arbre a une ombre de 15 m. Quelle est sa hauteur ?", options: ["22,5 m", "7,5 m", "14 m", "10 m"], answer: 3, why: "La situation est une configuration de Thalès : 2/hauteur = 3/15, donc hauteur = 2 × 15 ÷ 3 = 10 m." },
            { q: "Dans un problème, on connaît deux côtés d'un triangle rectangle et on cherche le troisième. Quel outil utiliser ?", options: ["Le théorème de Pythagore", "Le théorème de Thalès", "Un agrandissement"], answer: 0, why: "Pythagore relie les trois côtés d'un triangle rectangle ; Thalès demande deux droites parallèles." },
            { q: "On trouve qu'un lampadaire mesure 0,04 m. Que faut-il en penser ?", options: ["C'est un résultat normal", "Il faut l'arrondir à 0 m", "Il y a sûrement une erreur, à rechercher"], answer: 2, why: "Un lampadaire de 4 cm n'est pas vraisemblable : il faut vérifier les quotients et les unités." },
            { q: "On a x/(x + 10) = 30/36. Quelle est la valeur de x ?", options: ["25", "40", "50", "60"], answer: 2, why: "36x = 30x + 300, donc 6x = 300 et x = 50. Vérification : 50/60 = 30/36 = 5/6." },
          ],
          trap: "Appliquer le théorème de Thalès sans avoir justifié que les droites sont parallèles, ou confondre la configuration de Thalès avec un triangle rectangle où il faut utiliser Pythagore.",
          method: "Commencez par un schéma à main levée : codez les angles droits, marquez les droites parallèles en couleur et écrivez les longueurs connues. Repérez ensuite quel triangle relève de Pythagore et quels triangles emboîtés relèvent de Thalès.",
        },
      ],
    },

    /* ================================================================== */
    /* LE COSINUS D'UN ANGLE AIGU                                           */
    /* ================================================================== */
    {
      id: 'cosinus',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cosinus-definition',
          title: 'Le cosinus dans un triangle rectangle',
          minutes: 30,
          objectives: [
            "Identifier l'hypoténuse, le côté adjacent et le côté opposé à un angle aigu dans un triangle rectangle.",
            "Écrire le cosinus d'un angle aigu comme le quotient de deux longueurs.",
            "Utiliser la calculatrice pour obtenir une valeur approchée du cosinus d'un angle.",
          ],
          course: [
            {
              heading: "Le vocabulaire du triangle rectangle",
              paragraphs: [
                "Dans un triangle rectangle, le côté situé en face de l'angle droit s'appelle l'hypoténuse. C'est toujours le plus long des trois côtés. Les deux autres angles du triangle sont aigus : ils mesurent chacun moins de 90°.",
                "Pour parler des côtés, on se place sur l'un des angles aigus. Le côté adjacent à cet angle est le côté qui forme l'angle avec l'hypoténuse (adjacent veut dire « qui touche »). Le côté opposé est le côté situé en face de l'angle, celui qui ne le touche pas.",
                "Exemple : ABC est un triangle rectangle en A. L'hypoténuse est [BC]. Pour l'angle ABC, le côté adjacent est [AB] et le côté opposé est [AC]. Pour l'angle ACB, c'est l'inverse : le côté adjacent est [AC] et le côté opposé est [AB]. L'hypoténuse, elle, ne change pas.",
              ],
              box: { label: "Définition", text: "Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit. Pour un angle aigu, le côté adjacent est le côté de l'angle qui n'est pas l'hypoténuse, et le côté opposé est le côté qui ne touche pas cet angle." },
            },
            {
              heading: "La définition du cosinus",
              paragraphs: [
                "Dans un triangle rectangle, le cosinus d'un angle aigu est le quotient de la longueur du côté adjacent à cet angle par la longueur de l'hypoténuse. On note cos(ABC) le cosinus de l'angle ABC.",
                "Exemple : dans le triangle ABC rectangle en A, cos(ABC) = AB/BC et cos(ACB) = AC/BC. Si AB = 3 cm, AC = 4 cm et BC = 5 cm, alors cos(ABC) = 3/5 = 0,6 et cos(ACB) = 4/5 = 0,8.",
                "Pourquoi ce nombre dépend-il seulement de l'angle, et pas de la taille du triangle ? Deux triangles rectangles qui ont un même angle aigu ont la même forme : l'un est un agrandissement ou une réduction de l'autre, comme dans la configuration de Thalès. Leurs longueurs sont proportionnelles, donc le quotient côté adjacent ÷ hypoténuse est le même.",
              ],
              box: { label: "Définition", text: "Dans un triangle rectangle, cosinus d'un angle aigu = longueur du côté adjacent à l'angle ÷ longueur de l'hypoténuse. Dans ABC rectangle en A : cos(ABC) = AB/BC." },
            },
            {
              heading: "Les propriétés du cosinus",
              paragraphs: [
                "L'hypoténuse est le plus long côté, donc le côté adjacent est toujours plus court qu'elle. Le quotient côté adjacent ÷ hypoténuse est donc toujours strictement compris entre 0 et 1. Si vous trouvez un cosinus égal à 1,5, vous avez sûrement inversé les deux longueurs.",
                "Le cosinus est un quotient de deux longueurs exprimées dans la même unité : il n'a pas d'unité. Enfin, plus un angle aigu est grand, plus son cosinus est petit : un angle proche de 0° a un cosinus proche de 1, un angle proche de 90° a un cosinus proche de 0.",
              ],
              box: { label: "Propriété", text: "Le cosinus d'un angle aigu est un nombre sans unité, strictement compris entre 0 et 1. Plus l'angle est grand, plus son cosinus est petit." },
            },
            {
              heading: "Le cosinus à la calculatrice",
              paragraphs: [
                "La calculatrice donne le cosinus de n'importe quel angle aigu grâce à la touche cos. Vérifiez d'abord qu'elle est réglée en mode degré : un petit D ou DEG doit s'afficher à l'écran. Sinon, les résultats seront faux.",
                "Exemples : cos(60°) = 0,5 exactement ; cos(45°) ≈ 0,707 ; cos(30°) ≈ 0,866. On retrouve bien la propriété : quand l'angle grandit de 30° à 60°, le cosinus diminue de 0,866 à 0,5.",
              ],
              box: { label: "Repère", text: "cos(60°) = 0,5 : dans un triangle rectangle qui a un angle de 60°, le côté adjacent à cet angle mesure exactement la moitié de l'hypoténuse." },
            },
          ],
          keyPoints: [
            "L'hypoténuse est le côté opposé à l'angle droit, le plus long côté du triangle rectangle.",
            "Le côté adjacent à un angle aigu est le côté de cet angle qui n'est pas l'hypoténuse.",
            "cos(angle) = côté adjacent ÷ hypoténuse ; dans ABC rectangle en A, cos(ABC) = AB/BC.",
            "Le cosinus d'un angle aigu est sans unité et strictement compris entre 0 et 1.",
            "Le cosinus ne dépend que de l'angle, pas de la taille du triangle.",
            "À la calculatrice, en mode degré : cos(60°) = 0,5.",
          ],
          example: {
            statement: "EFG est un triangle rectangle en F, avec EF = 6 cm, FG = 8 cm et EG = 10 cm. Écrivez le cosinus de l'angle FEG et celui de l'angle FGE, puis calculez leurs valeurs.",
            solution: [
              "Le triangle EFG est rectangle en F : son hypoténuse est le côté opposé à l'angle droit, [EG].",
              "Pour l'angle FEG, le côté adjacent est [EF]. Donc cos(FEG) = EF/EG = 6/10 = 0,6.",
              "Pour l'angle FGE, le côté adjacent est [FG]. Donc cos(FGE) = FG/EG = 8/10 = 0,8.",
              "Contrôle : les deux valeurs sont bien comprises entre 0 et 1.",
              "Conclusion : cos(FEG) = 0,6 et cos(FGE) = 0,8.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "RST est un triangle rectangle en S. a) Nommez son hypoténuse. b) Nommez le côté adjacent à l'angle SRT, puis le côté adjacent à l'angle STR. c) Écrivez cos(SRT) et cos(STR) sous forme de quotients de longueurs.",
              hint: "L'hypoténuse est en face de l'angle droit S. Le côté adjacent à un angle part du sommet de cet angle et n'est pas l'hypoténuse.",
              solution: [
                "a) L'angle droit est en S, donc l'hypoténuse est le côté opposé à S : [RT].",
                "b) L'angle SRT est formé par [RS] et [RT]. Comme [RT] est l'hypoténuse, le côté adjacent est [RS].",
                "L'angle STR est formé par [TS] et [TR]. Le côté adjacent est [ST].",
                "c) cos(SRT) = RS/RT et cos(STR) = ST/RT.",
                "Conclusion : hypoténuse [RT] ; cos(SRT) = RS/RT ; cos(STR) = ST/RT.",
              ],
            },
            {
              level: 2,
              statement: "ABC est un triangle rectangle en A, avec AB = 5 cm et AC = 12 cm. a) Calculez BC. b) Calculez cos(ABC) et cos(ACB), arrondis au centième. c) Sans mesurer, dites lequel des deux angles est le plus grand.",
              hint: "a) Utilisez le théorème de Pythagore. c) Rappelez-vous : plus un angle aigu est grand, plus son cosinus est petit.",
              solution: [
                "a) Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC² = 25 + 144 = 169, donc BC = √169 = 13 cm.",
                "b) Pour l'angle ABC, le côté adjacent est [AB] : cos(ABC) = AB/BC = 5/13 ≈ 0,38.",
                "Pour l'angle ACB, le côté adjacent est [AC] : cos(ACB) = AC/BC = 12/13 ≈ 0,92.",
                "c) cos(ABC) est plus petit que cos(ACB), donc l'angle ABC est le plus grand des deux.",
                "Conclusion : BC = 13 cm, cos(ABC) ≈ 0,38, cos(ACB) ≈ 0,92, et l'angle ABC est le plus grand.",
              ],
            },
            {
              level: 3,
              statement: "Défi. ABC est un triangle rectangle en A, avec AB = 4,5 cm, AC = 6 cm et BC = 7,5 cm. H est le pied de la hauteur issue de A : H est sur [BC] et le triangle ABH est rectangle en H. a) Calculez cos(ABC) dans le triangle ABC. b) Écrivez cos(ABC) dans le triangle ABH. c) Déduisez-en la longueur BH. d) Calculez HC, puis AH.",
              hint: "L'angle ABC est aussi un angle du triangle ABH, et son cosinus est le même dans les deux triangles. Dans le triangle ABH, l'hypoténuse est [AB].",
              solution: [
                "a) Dans le triangle ABC rectangle en A : cos(ABC) = AB/BC = 4,5/7,5 = 0,6.",
                "b) Dans le triangle ABH rectangle en H, l'hypoténuse est [AB] et le côté adjacent à l'angle ABH (qui est le même angle que ABC) est [BH] : cos(ABC) = BH/AB.",
                "c) On a donc BH/4,5 = 0,6, d'où BH = 4,5 × 0,6 = 2,7 cm.",
                "d) H est sur [BC], donc HC = BC - BH = 7,5 - 2,7 = 4,8 cm.",
                "Dans le triangle ABH rectangle en H, d'après le théorème de Pythagore : AH² = AB² - BH² = 20,25 - 7,29 = 12,96, donc AH = √12,96 = 3,6 cm.",
                "Vérification dans le triangle AHC rectangle en H : AH² + HC² = 12,96 + 23,04 = 36 = 6² = AC².",
                "Conclusion : cos(ABC) = 0,6, BH = 2,7 cm, HC = 4,8 cm et AH = 3,6 cm.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot ou chaque expression à ce qu'il désigne.",
            pairs: [
              { left: "Hypoténuse", right: "Le côté opposé à l'angle droit" },
              { left: "Côté adjacent à un angle aigu", right: "Le côté de l'angle qui n'est pas l'hypoténuse" },
              { left: "Côté opposé à un angle aigu", right: "Le côté qui ne touche pas cet angle" },
              { left: "Cosinus d'un angle aigu", right: "Côté adjacent ÷ hypoténuse" },
              { left: "cos(60°)", right: "0,5" },
              { left: "Valeurs possibles d'un cosinus", right: "Entre 0 et 1" },
            ],
          },
          quiz: [
            { q: "Dans le triangle ABC rectangle en A, quelle est l'hypoténuse ?", options: ["[AB]", "[AC]", "[BC]", "Cela dépend de l'angle choisi"], answer: 2, why: "L'hypoténuse est le côté opposé à l'angle droit A : c'est [BC], quel que soit l'angle aigu étudié." },
            { q: "Dans le triangle DEF rectangle en E, cos(EDF) est égal à :", options: ["DE/DF", "EF/DF", "DF/DE", "DE/EF"], answer: 0, why: "L'hypoténuse est [DF] et le côté adjacent à l'angle EDF est [DE] : cos(EDF) = DE/DF." },
            { q: "Le cosinus d'un angle aigu peut-il valoir 1,2 ?", options: ["Oui, si le triangle est très grand", "Oui, si l'angle est très petit", "Oui, pour un angle de 90°", "Non, jamais"], answer: 3, why: "Le côté adjacent est plus court que l'hypoténuse : le cosinus d'un angle aigu est toujours compris entre 0 et 1." },
            { q: "Avec la calculatrice en mode degré, cos(60°) vaut :", options: ["0,6", "0,5", "60", "0,866"], answer: 1, why: "cos(60°) = 0,5 exactement. La valeur 0,866 est une valeur approchée de cos(30°)." },
            { q: "On agrandit un triangle rectangle avec le rapport 3. Que devient le cosinus de l'un de ses angles aigus ?", options: ["Il est multiplié par 3", "Il est divisé par 3", "Il ne change pas", "Il est multiplié par 9"], answer: 2, why: "Les angles sont conservés et le côté adjacent comme l'hypoténuse sont multipliés par 3 : leur quotient ne change pas." },
          ],
          trap: "Mettre l'hypoténuse au numérateur (et trouver un cosinus supérieur à 1), ou confondre le côté adjacent et le côté opposé parce qu'on s'est placé sur le mauvais angle.",
          method: "Avant d'écrire un cosinus, posez le doigt sur l'angle étudié : repassez en couleur l'hypoténuse (en face de l'angle droit), puis le côté qui part de votre angle et n'est pas l'hypoténuse : c'est le côté adjacent.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cosinus-longueur',
          title: 'Calculer une longueur avec le cosinus',
          minutes: 30,
          objectives: [
            "Choisir le cosinus pour calculer une longueur dans un triangle rectangle.",
            "Calculer la longueur du côté adjacent connaissant l'hypoténuse et un angle aigu.",
            "Calculer la longueur de l'hypoténuse connaissant le côté adjacent et un angle aigu.",
            "Arrondir un résultat à la précision demandée.",
          ],
          course: [
            {
              heading: "Quand utiliser le cosinus ?",
              paragraphs: [
                "Le cosinus relie trois informations d'un triangle rectangle : un angle aigu, le côté adjacent à cet angle et l'hypoténuse. Si vous connaissez deux de ces informations, vous pouvez calculer la troisième.",
                "Si vous connaissez déjà deux côtés du triangle rectangle et cherchez le troisième, le théorème de Pythagore suffit. Le cosinus devient utile dès qu'un angle intervient : on connaît un angle aigu et une longueur, et l'on cherche une autre longueur.",
              ],
              box: { label: "À retenir", text: "Triangle rectangle + un angle aigu connu + une longueur connue (côté adjacent ou hypoténuse) : on utilise le cosinus pour trouver l'autre longueur." },
            },
            {
              heading: "Calculer le côté adjacent",
              paragraphs: [
                "On part de la définition : cos(angle) = côté adjacent ÷ hypoténuse. Si l'on connaît l'hypoténuse, on multiplie les deux membres par l'hypoténuse : côté adjacent = hypoténuse × cos(angle).",
                "Exemple : ABC est rectangle en A, BC = 8 cm et l'angle ABC mesure 40°. Le côté adjacent à l'angle ABC est [AB]. On écrit cos(ABC) = AB/BC, soit cos(40°) = AB/8. Donc AB = 8 × cos(40°) ≈ 6,1 cm (au dixième près).",
              ],
              box: { label: "Formule", text: "côté adjacent = hypoténuse × cos(angle)" },
            },
            {
              heading: "Calculer l'hypoténuse",
              paragraphs: [
                "Si c'est le côté adjacent qui est connu, on cherche l'hypoténuse. L'égalité cos(angle) = côté adjacent ÷ hypoténuse donne, par un produit en croix : hypoténuse = côté adjacent ÷ cos(angle).",
                "Exemple : DEF est rectangle en D, DE = 5 cm et l'angle DEF mesure 50°. Le côté adjacent à l'angle DEF est [DE] et l'hypoténuse est [EF]. On écrit cos(50°) = 5/EF, donc EF = 5 ÷ cos(50°) ≈ 7,8 cm. Contrôle : l'hypoténuse (7,8 cm) est bien plus longue que le côté adjacent (5 cm).",
              ],
              box: { label: "Formule", text: "hypoténuse = côté adjacent ÷ cos(angle)" },
            },
            {
              heading: "Rédiger et arrondir",
              paragraphs: [
                "Une rédaction complète comporte : le triangle rectangle et l'angle utilisé ; l'égalité cos(angle) = côté adjacent ÷ hypoténuse avec les noms des points ; le remplacement par les valeurs ; le calcul ; la conclusion avec l'unité.",
                "Tapez le calcul en entier à la calculatrice, par exemple 8 × cos(40), sans arrondir le cosinus avant. Arrondir trop tôt fausse le résultat. Utilisez le signe ≈ dès que le résultat est arrondi, et précisez la précision (au dixième, au millimètre...).",
              ],
            },
          ],
          keyPoints: [
            "Le cosinus relie un angle aigu, son côté adjacent et l'hypoténuse.",
            "Côté adjacent = hypoténuse × cos(angle).",
            "Hypoténuse = côté adjacent ÷ cos(angle).",
            "Si l'on connaît deux côtés et qu'on cherche le troisième, on utilise Pythagore.",
            "Calculatrice en mode degré, calcul tapé en entier, arrondi seulement à la fin.",
            "Contrôle : l'hypoténuse est toujours le plus long côté.",
          ],
          example: {
            statement: "Une échelle de 4 m est posée contre un mur vertical. Elle fait un angle de 70° avec le sol horizontal. À quelle distance du pied du mur se trouve le pied de l'échelle ? Donnez la réponse au centimètre près.",
            solution: [
              "On note E le pied de l'échelle, H son sommet contre le mur et M le pied du mur. Le mur est perpendiculaire au sol, donc le triangle EMH est rectangle en M.",
              "L'hypoténuse est l'échelle [EH], avec EH = 4 m. L'angle MEH mesure 70°, et son côté adjacent est [EM], la distance cherchée.",
              "cos(MEH) = EM/EH, soit cos(70°) = EM/4.",
              "EM = 4 × cos(70°) ≈ 1,368 m.",
              "Conclusion : le pied de l'échelle est à environ 1,37 m du mur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "MNP est un triangle rectangle en N, avec MP = 12 cm et l'angle NMP égal à 25°. Calculez la longueur MN, arrondie au dixième.",
              hint: "Repérez l'hypoténuse (en face de l'angle droit N) et le côté adjacent à l'angle NMP. Lequel des deux est connu ?",
              solution: [
                "Le triangle MNP est rectangle en N : l'hypoténuse est [MP]. Le côté adjacent à l'angle NMP est [MN].",
                "cos(NMP) = MN/MP, soit cos(25°) = MN/12.",
                "MN = 12 × cos(25°) ≈ 10,88 cm.",
                "Conclusion : MN ≈ 10,9 cm.",
              ],
            },
            {
              level: 2,
              statement: "RST est un triangle rectangle en R, avec RS = 7 cm et l'angle RST égal à 62°. a) Calculez ST, arrondi au dixième. b) Calculez RT, arrondi au dixième.",
              hint: "a) Le côté connu [RS] est adjacent à l'angle RST, et [ST] est l'hypoténuse : divisez par le cosinus. b) Utilisez ensuite le théorème de Pythagore, avec la valeur non arrondie de ST.",
              solution: [
                "a) Le triangle RST est rectangle en R : l'hypoténuse est [ST], et le côté adjacent à l'angle RST est [RS].",
                "cos(RST) = RS/ST, soit cos(62°) = 7/ST, donc ST = 7 ÷ cos(62°) ≈ 14,91 cm, soit ST ≈ 14,9 cm.",
                "b) D'après le théorème de Pythagore : ST² = RS² + RT², donc RT² = ST² - RS² ≈ 222,32 - 49 = 173,32.",
                "RT ≈ √173,32 ≈ 13,17 cm.",
                "Conclusion : ST ≈ 14,9 cm et RT ≈ 13,2 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le fil d'un cerf-volant, bien tendu, mesure 50 m. On considère que le fil part du sol et qu'il fait un angle de 35° avec le sol horizontal (données fictives). a) Calculez la distance au sol entre le point de départ du fil et le point situé juste sous le cerf-volant, au dixième de mètre. b) Calculez la hauteur du cerf-volant, au dixième de mètre. c) Le vent forcit et l'angle passe à 50°, avec la même longueur de fil. La distance de la question a) augmente-t-elle ou diminue-t-elle ? Calculez-la.",
              hint: "Faites un schéma : le fil est l'hypoténuse d'un triangle rectangle dont l'angle droit est au sol, juste sous le cerf-volant. La distance au sol est le côté adjacent à l'angle de 35°.",
              solution: [
                "On note D le départ du fil, C le cerf-volant et P le point du sol situé juste sous C. Le triangle DPC est rectangle en P, d'hypoténuse [DC] = 50 m.",
                "a) Le côté adjacent à l'angle PDC est [DP] : cos(35°) = DP/50, donc DP = 50 × cos(35°) ≈ 40,96 m, soit environ 41,0 m.",
                "b) D'après le théorème de Pythagore : PC² = DC² - DP² ≈ 2 500 - 1 677,5 = 822,5, donc PC ≈ √822,5 ≈ 28,7 m.",
                "c) Avec un angle de 50° : DP = 50 × cos(50°) ≈ 32,1 m. L'angle est plus grand, donc son cosinus est plus petit : la distance au sol diminue.",
                "Conclusion : distance au sol ≈ 41,0 m, hauteur ≈ 28,7 m ; avec un angle de 50°, la distance au sol diminue à environ 32,1 m.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul d'une longueur avec le cosinus.",
            items: [
              "Repérer le triangle rectangle et son angle droit.",
              "Repérer l'angle aigu connu, puis nommer l'hypoténuse et le côté adjacent à cet angle.",
              "Écrire la définition : cos(angle) = côté adjacent ÷ hypoténuse.",
              "Remplacer par les valeurs connues.",
              "Isoler la longueur cherchée par un produit en croix.",
              "Calculer à la calculatrice en mode degré, puis arrondir.",
              "Conclure avec l'unité et vérifier que l'hypoténuse est le plus long côté.",
            ],
          },
          quiz: [
            { q: "ABC est rectangle en A. On connaît BC et l'angle ABC. Quelle formule donne AB ?", options: ["AB = BC ÷ cos(ABC)", "AB = BC × cos(ABC)", "AB = cos(ABC) ÷ BC", "AB = BC + cos(ABC)"], answer: 1, why: "[AB] est le côté adjacent à l'angle ABC et [BC] l'hypoténuse : côté adjacent = hypoténuse × cosinus." },
            { q: "Le cosinus d'un angle vaut 0,8 et le côté adjacent à cet angle mesure 4 cm. Combien mesure l'hypoténuse ?", options: ["3,2 cm", "4,8 cm", "0,2 cm", "5 cm"], answer: 3, why: "Hypoténuse = côté adjacent ÷ cosinus = 4 ÷ 0,8 = 5 cm." },
            { q: "Dans un triangle rectangle, on connaît les deux côtés de l'angle droit et on cherche l'hypoténuse. Quel outil est le plus direct ?", options: ["Le théorème de Pythagore", "Le cosinus d'un des angles aigus", "Le théorème de Thalès"], answer: 0, why: "Aucun angle n'est connu : le théorème de Pythagore donne directement l'hypoténuse à partir des deux autres côtés." },
            { q: "Combien vaut 12 × cos(30°), arrondi au dixième ?", options: ["10,3", "13,9", "10,4", "6"], answer: 2, why: "12 × cos(30°) ≈ 12 × 0,866 ≈ 10,392, qui s'arrondit à 10,4 au dixième." },
            { q: "Une échelle de 5 m fait un angle de 60° avec le sol. À quelle distance du mur se trouve son pied ?", options: ["10 m", "2,5 m", "4,33 m", "3 m"], answer: 1, why: "La distance au mur est le côté adjacent à l'angle de 60° : 5 × cos(60°) = 5 × 0,5 = 2,5 m." },
          ],
          trap: "Multiplier par le cosinus alors qu'il fallait diviser (ou l'inverse) : on obtient alors une hypoténuse plus courte que le côté adjacent, ce qui est impossible.",
          method: "Écrivez toujours d'abord l'égalité cos(angle) = côté adjacent ÷ hypoténuse avec les noms des points, puis remplacez : le produit en croix vous dira s'il faut multiplier ou diviser. Terminez en vérifiant que l'hypoténuse est le plus long côté.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cosinus-angle',
          title: 'Calculer la mesure d\'un angle avec le cosinus',
          minutes: 30,
          objectives: [
            "Calculer la mesure d'un angle aigu d'un triangle rectangle connaissant son côté adjacent et l'hypoténuse.",
            "Utiliser la touche de la calculatrice qui donne un angle à partir de son cosinus.",
            "Déduire la mesure de l'autre angle aigu grâce à la somme des angles d'un triangle.",
          ],
          course: [
            {
              heading: "Retrouver un angle à partir de son cosinus",
              paragraphs: [
                "La touche cos de la calculatrice transforme un angle en son cosinus. Pour faire le chemin inverse, c'est-à-dire trouver l'angle dont on connaît le cosinus, on utilise une autre touche, souvent notée cos⁻¹, Arccos ou acs. Elle s'obtient en général avec la touche « seconde » ou « shift » suivie de cos.",
                "Exemple : cos⁻¹(0,5) = 60°, car cos(60°) = 0,5. De même, cos⁻¹(0,8) ≈ 36,9°. Comme pour la touche cos, la calculatrice doit être en mode degré.",
              ],
              box: { label: "Repère", text: "Si cos(Â) = c, alors Â = cos⁻¹(c). La touche cos⁻¹ (ou Arccos, ou acs) fait le chemin inverse de la touche cos." },
            },
            {
              heading: "La méthode en trois temps",
              paragraphs: [
                "1) Dans le triangle rectangle, on repère l'angle cherché, son côté adjacent et l'hypoténuse : il faut connaître ces deux longueurs. 2) On écrit cos(angle) = côté adjacent ÷ hypoténuse et on remplace par les valeurs. 3) On calcule l'angle avec la touche cos⁻¹ et on arrondit.",
                "Exemple : ABC est rectangle en A, AB = 6 cm et BC = 10 cm. Le côté adjacent à l'angle ABC est [AB] et l'hypoténuse [BC]. cos(ABC) = 6/10 = 0,6, donc l'angle ABC = cos⁻¹(0,6) ≈ 53,13°, soit environ 53° au degré près.",
              ],
              box: { label: "À retenir", text: "angle = cos⁻¹(côté adjacent ÷ hypoténuse). On peut taper directement cos⁻¹(6 ÷ 10) à la calculatrice." },
            },
            {
              heading: "Le deuxième angle aigu",
              paragraphs: [
                "La somme des angles d'un triangle vaut 180°. Dans un triangle rectangle, l'angle droit mesure déjà 90°, donc les deux angles aigus ont une somme de 90°.",
                "Dans l'exemple précédent, l'angle ACB mesure donc 90° - 53,13° = 36,87°, soit environ 37°. On peut le vérifier avec le cosinus : AC = 8 cm (d'après Pythagore) et cos⁻¹(8/10) ≈ 36,87°. Pour être précis, faites la soustraction avec la valeur non arrondie du premier angle.",
              ],
              box: { label: "Propriété", text: "Dans un triangle rectangle, les deux angles aigus ont une somme de 90°." },
            },
            {
              heading: "Contrôler son résultat",
              paragraphs: [
                "Avant de taper cos⁻¹, vérifiez que le quotient est compris entre 0 et 1. S'il dépasse 1, la calculatrice affiche une erreur : vous avez sans doute mis l'hypoténuse au numérateur.",
                "Vérifiez aussi la cohérence : un cosinus proche de 1 donne un petit angle, un cosinus proche de 0 donne un angle proche de 90°. Enfin, l'angle obtenu doit être aigu (entre 0° et 90°), et l'on peut comparer avec la figure ou une mesure au rapporteur.",
              ],
            },
          ],
          keyPoints: [
            "Pour calculer un angle, il faut connaître son côté adjacent et l'hypoténuse.",
            "angle = cos⁻¹(côté adjacent ÷ hypoténuse), calculatrice en mode degré.",
            "La touche cos⁻¹ s'appelle aussi Arccos ou acs selon la calculatrice.",
            "Dans un triangle rectangle, les deux angles aigus ont une somme de 90°.",
            "Si le quotient dépasse 1, il y a une erreur : l'hypoténuse va au dénominateur.",
          ],
          example: {
            statement: "Une rampe d'accès mesure 5 m de long. Elle part du sol et s'étend sur 4,8 m à l'horizontale (données fictives). Calculez, au degré près, l'angle que fait la rampe avec le sol.",
            solution: [
              "On note A le bas de la rampe, B son sommet et H le point du sol situé juste sous B. Le triangle AHB est rectangle en H.",
              "L'hypoténuse est la rampe [AB], avec AB = 5 m. Le côté adjacent à l'angle HAB est [AH], avec AH = 4,8 m.",
              "cos(HAB) = AH/AB = 4,8/5 = 0,96.",
              "L'angle HAB = cos⁻¹(0,96) ≈ 16,26°.",
              "Conclusion : la rampe fait un angle d'environ 16° avec le sol.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "KLM est un triangle rectangle en L, avec KL = 4 cm et KM = 9 cm. Calculez la mesure de l'angle LKM, arrondie au degré.",
              hint: "L'hypoténuse est en face de l'angle droit L. Le côté [KL] est-il adjacent à l'angle LKM ?",
              solution: [
                "Le triangle KLM est rectangle en L : l'hypoténuse est [KM]. Le côté adjacent à l'angle LKM est [KL].",
                "cos(LKM) = KL/KM = 4/9 ≈ 0,444.",
                "L'angle LKM = cos⁻¹(4/9) ≈ 63,6°.",
                "Conclusion : l'angle LKM mesure environ 64°.",
              ],
            },
            {
              level: 2,
              statement: "EFG est un triangle rectangle en E, avec EF = 8 cm et EG = 6 cm. a) Calculez FG. b) Calculez la mesure de l'angle EFG, au dixième de degré. c) Déduisez-en la mesure de l'angle EGF.",
              hint: "a) Les deux côtés connus sont ceux de l'angle droit : commencez par Pythagore. c) Les deux angles aigus ont une somme de 90°.",
              solution: [
                "a) Le triangle EFG est rectangle en E. D'après le théorème de Pythagore : FG² = EF² + EG² = 64 + 36 = 100, donc FG = 10 cm.",
                "b) L'hypoténuse est [FG] et le côté adjacent à l'angle EFG est [EF] : cos(EFG) = EF/FG = 8/10 = 0,8.",
                "L'angle EFG = cos⁻¹(0,8) ≈ 36,87°, soit environ 36,9°.",
                "c) Les angles aigus d'un triangle rectangle ont une somme de 90° : l'angle EGF ≈ 90° - 36,87° = 53,13°, soit environ 53,1°.",
                "Conclusion : FG = 10 cm, l'angle EFG ≈ 36,9° et l'angle EGF ≈ 53,1°.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une échelle de 6 m est appuyée contre un mur vertical. La notice indique que l'angle entre l'échelle et le sol doit être compris entre 65° et 75° (données fictives). a) Le pied de l'échelle est à 2 m du mur. L'angle respecte-t-il la notice ? b) Entre quelles distances du mur faut-il placer le pied de l'échelle pour respecter la notice ? Arrondissez au centimètre. c) Avec le pied à 2 m du mur, à quelle hauteur arrive le haut de l'échelle, au centimètre près ?",
              hint: "La distance au mur est le côté adjacent à l'angle avec le sol, et l'échelle est l'hypoténuse. Pour la question b, calculez la distance pour 65° puis pour 75°, en vous souvenant que plus l'angle est grand, plus le cosinus est petit.",
              solution: [
                "Le mur est perpendiculaire au sol : le pied de l'échelle, le pied du mur et le haut de l'échelle forment un triangle rectangle, d'hypoténuse l'échelle (6 m).",
                "a) cos(angle) = 2/6 ≈ 0,333, donc angle = cos⁻¹(2/6) ≈ 70,5°. C'est bien entre 65° et 75° : la notice est respectée.",
                "b) Pour 75° : distance = 6 × cos(75°) ≈ 1,55 m. Pour 65° : distance = 6 × cos(65°) ≈ 2,54 m.",
                "Plus le pied s'éloigne du mur, plus l'angle est petit. Il faut donc placer le pied entre environ 1,55 m et 2,54 m du mur.",
                "c) D'après le théorème de Pythagore : hauteur² = 6² - 2² = 36 - 4 = 32, donc hauteur = √32 ≈ 5,66 m.",
                "Conclusion : angle ≈ 70,5° (conforme) ; pied entre 1,55 m et 2,54 m du mur ; hauteur atteinte ≈ 5,66 m.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur le calcul d'un angle.",
            statements: [
              { text: "cos⁻¹(0,5) = 60°.", true: true, why: "cos(60°) = 0,5, donc l'angle dont le cosinus vaut 0,5 mesure 60°." },
              { text: "Si cos(Â) = 0,9, alors l'angle Â mesure 0,9°.", true: false, why: "Il faut utiliser la touche cos⁻¹ : cos⁻¹(0,9) ≈ 25,8°." },
              { text: "Dans un triangle rectangle, les deux angles aigus ont une somme de 90°.", true: true, why: "La somme des trois angles vaut 180° et l'angle droit en prend déjà 90°." },
              { text: "Si l'on trouve un cosinus égal à 1,25, l'angle existe mais il est très grand.", true: false, why: "Un cosinus d'angle aigu est toujours inférieur à 1 : l'hypoténuse a été placée au numérateur par erreur." },
              { text: "Plus le cosinus est proche de 0, plus l'angle est proche de 90°.", true: true, why: "Le cosinus diminue quand l'angle aigu augmente : cos(89°) ≈ 0,017." },
              { text: "Pour calculer un angle avec le cosinus, il faut déjà connaître un autre angle aigu.", true: false, why: "Il suffit de connaître deux longueurs : le côté adjacent et l'hypoténuse." },
              { text: "La calculatrice doit être réglée en mode degré.", true: true, why: "Sinon, elle donne l'angle dans une autre unité et le résultat est faux." },
            ],
          },
          quiz: [
            { q: "Quelle touche donne un angle à partir de son cosinus ?", options: ["cos", "x²", "√ (racine)", "cos⁻¹"], answer: 3, why: "La touche cos⁻¹ (ou Arccos, ou acs) fait le chemin inverse de la touche cos." },
            { q: "ABC est rectangle en A, avec AB = 3 cm et BC = 6 cm. Combien mesure l'angle ABC ?", options: ["60°", "30°", "0,5°", "45°"], answer: 0, why: "cos(ABC) = AB/BC = 3/6 = 0,5, et cos⁻¹(0,5) = 60°." },
            { q: "Un triangle rectangle a un angle aigu de 35°. Combien mesure l'autre angle aigu ?", options: ["145°", "35°", "55°", "65°"], answer: 2, why: "Les deux angles aigus d'un triangle rectangle ont une somme de 90° : 90° - 35° = 55°." },
            { q: "On calcule côté adjacent ÷ hypoténuse et on obtient 1,4. Que faut-il en conclure ?", options: ["L'angle mesure environ 1,4°", "Il y a une erreur", "L'angle mesure 140°, car il est obtus", "Il faut passer en mode radian"], answer: 1, why: "Le côté adjacent est plus court que l'hypoténuse : le quotient doit être inférieur à 1. Les longueurs ont été inversées." },
            { q: "Deux angles aigus A et B ont pour cosinus cos(A) = 0,2 et cos(B) = 0,7. Lequel est le plus grand ?", options: ["L'angle A", "L'angle B", "On ne peut pas savoir sans la figure"], answer: 0, why: "Plus le cosinus est petit, plus l'angle aigu est grand : l'angle A (environ 78°) est plus grand que l'angle B (environ 46°)." },
          ],
          trap: "Confondre cos et cos⁻¹, par exemple écrire que l'angle mesure 0,6° parce que son cosinus vaut 0,6, ou oublier de vérifier que la calculatrice est en mode degré.",
          method: "Contrôlez votre angle avec un ordre de grandeur : tracez rapidement le triangle à main levée ou mesurez au rapporteur sur la figure. Un angle calculé de 16° sur un triangle presque plat est cohérent ; de 74°, il ne l'est pas.",
        },
      ],
    },

    /* ================================================================== */
    /* STATISTIQUES ET PROBABILITÉS                                         */
    /* ================================================================== */
    {
      id: 'statistiques-probabilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'moyenne-ponderee',
          title: 'Calculer une moyenne, y compris pondérée',
          minutes: 30,
          objectives: [
            "Calculer la moyenne d'une série de données.",
            "Calculer une moyenne pondérée par des effectifs ou par des coefficients.",
            "Interpréter une moyenne dans le contexte d'un problème.",
          ],
          course: [
            {
              heading: "La moyenne d'une série",
              paragraphs: [
                "Une série statistique est une liste de données recueillies sur un sujet : les notes d'un élève, les températures d'une semaine, le nombre de buts marqués à chaque match. Le nombre total de données s'appelle l'effectif total.",
                "Pour calculer la moyenne d'une série, on additionne toutes les valeurs, puis on divise cette somme par l'effectif total. Exemple : les températures relevées à midi pendant cinq jours sont 12 °C, 15 °C, 11 °C, 14 °C et 18 °C. Leur somme vaut 70, donc la moyenne vaut 70 ÷ 5 = 14 °C.",
                "On peut voir la moyenne comme un partage équitable : si l'on mettait toutes les valeurs en commun et qu'on les répartissait également, chaque donnée recevrait la moyenne.",
              ],
              box: { label: "Définition", text: "Moyenne d'une série = somme de toutes les valeurs ÷ effectif total." },
            },
            {
              heading: "La moyenne pondérée par des effectifs",
              paragraphs: [
                "Quand une même valeur apparaît plusieurs fois, on présente souvent la série dans un tableau : chaque valeur est accompagnée de son effectif, c'est-à-dire du nombre de fois où elle apparaît.",
                "Pour calculer la moyenne, on multiplie chaque valeur par son effectif, on additionne ces produits, puis on divise par l'effectif total. Exemple : dans un groupe de 10 élèves (données fictives), 2 élèves chaussent du 36, 5 du 38 et 3 du 40. La moyenne vaut (36 × 2 + 38 × 5 + 40 × 3) ÷ 10 = (72 + 190 + 120) ÷ 10 = 382 ÷ 10 = 38,2.",
                "On dit que c'est une moyenne pondérée : chaque valeur « pèse » plus ou moins lourd selon son effectif.",
              ],
              box: { label: "Formule", text: "Moyenne pondérée = (valeur 1 × effectif 1 + valeur 2 × effectif 2 + ...) ÷ (effectif 1 + effectif 2 + ...)." },
            },
            {
              heading: "La moyenne avec des coefficients",
              paragraphs: [
                "Au collège, certaines évaluations comptent plus que d'autres : un devoir peut avoir le coefficient 2 et une interrogation le coefficient 1. Le coefficient joue le même rôle qu'un effectif : une note de coefficient 2 compte comme si on l'avait obtenue deux fois.",
                "Exemple : une interrogation notée 12 (coefficient 1) et un devoir noté 15 (coefficient 2). La moyenne vaut (12 × 1 + 15 × 2) ÷ (1 + 2) = 42 ÷ 3 = 14. Elle est plus proche de 15 que de 12, car le devoir pèse plus lourd. Attention : on divise par la somme des coefficients (3), et non par le nombre de notes (2).",
              ],
              box: { label: "À retenir", text: "Dans une moyenne pondérée, on divise toujours par la somme des effectifs ou des coefficients." },
            },
            {
              heading: "Interpréter une moyenne",
              paragraphs: [
                "La moyenne est toujours comprise entre la plus petite et la plus grande valeur de la série, mais ce n'est pas forcément l'une des valeurs : la moyenne de 1 et de 2 est 1,5. Un résultat en dehors des valeurs de la série signale une erreur de calcul.",
                "La moyenne est sensible aux valeurs extrêmes. Si quatre amis ont 13 ans et qu'un adulte de 48 ans les rejoint, l'âge moyen du groupe passe de 13 ans à 20 ans, alors que personne n'a 20 ans. Dans ce cas, la moyenne ne décrit pas bien le groupe ; la leçon suivante présente un autre indicateur, la médiane.",
              ],
            },
          ],
          keyPoints: [
            "Moyenne = somme des valeurs ÷ effectif total.",
            "Moyenne pondérée : on multiplie chaque valeur par son effectif ou son coefficient, on additionne, puis on divise.",
            "On divise par la somme des effectifs ou des coefficients, pas par le nombre de valeurs différentes.",
            "La moyenne est comprise entre la plus petite et la plus grande valeur.",
            "La moyenne n'est pas forcément une valeur de la série.",
            "Une valeur extrême peut faire beaucoup varier la moyenne.",
          ],
          example: {
            statement: "Léa a obtenu 14 à une interrogation (coefficient 1), 11 à un devoir (coefficient 2) et 16 à un devoir commun (coefficient 3). Calculez sa moyenne.",
            solution: [
              "On multiplie chaque note par son coefficient : 14 × 1 = 14 ; 11 × 2 = 22 ; 16 × 3 = 48.",
              "Somme des produits : 14 + 22 + 48 = 84.",
              "Somme des coefficients : 1 + 2 + 3 = 6.",
              "Moyenne : 84 ÷ 6 = 14.",
              "Contrôle : 14 est bien compris entre 11 et 16.",
              "Conclusion : la moyenne de Léa est 14 sur 20.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Noé a chronométré son trajet entre la maison et le collège pendant six jours (en minutes) : 12, 15, 9, 14, 20 et 8. Calculez son temps de trajet moyen.",
              hint: "Additionnez les six durées, puis divisez par le nombre de jours.",
              solution: [
                "Somme des durées : 12 + 15 + 9 + 14 + 20 + 8 = 78 minutes.",
                "Effectif total : 6 jours.",
                "Moyenne : 78 ÷ 6 = 13 minutes.",
                "Conclusion : le temps de trajet moyen de Noé est de 13 minutes.",
              ],
            },
            {
              level: 2,
              statement: "On a demandé aux 25 élèves d'une classe combien ils ont de frères et sœurs (données fictives). 4 élèves en ont 0, 10 élèves en ont 1, 7 élèves en ont 2, 3 élèves en ont 3 et 1 élève en a 4. a) Vérifiez l'effectif total. b) Calculez le nombre moyen de frères et sœurs par élève.",
              hint: "Multipliez chaque nombre de frères et sœurs par le nombre d'élèves concernés, additionnez, puis divisez par 25.",
              solution: [
                "a) Effectif total : 4 + 10 + 7 + 3 + 1 = 25 élèves. C'est bien l'effectif de la classe.",
                "b) Produits : 0 × 4 = 0 ; 1 × 10 = 10 ; 2 × 7 = 14 ; 3 × 3 = 9 ; 4 × 1 = 4.",
                "Somme des produits : 0 + 10 + 14 + 9 + 4 = 37.",
                "Moyenne : 37 ÷ 25 = 1,48.",
                "Conclusion : les élèves ont en moyenne 1,48 frère ou sœur (une moyenne n'est pas forcément un nombre entier).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Tom a obtenu 12 (coefficient 2), 9 (coefficient 1) et 14 (coefficient 1). Il lui reste un devoir de coefficient 2. a) Calculez sa moyenne actuelle. b) Quelle note doit-il obtenir au dernier devoir pour avoir exactement 13 de moyenne ? c) Peut-il atteindre 15 de moyenne, les notes étant sur 20 ?",
              hint: "Notez x la note du dernier devoir. La nouvelle moyenne vaut (somme actuelle des produits + 2x) ÷ (somme des coefficients + 2). Écrivez l'équation, puis résolvez-la.",
              solution: [
                "a) Somme des produits : 12 × 2 + 9 × 1 + 14 × 1 = 24 + 9 + 14 = 47. Somme des coefficients : 2 + 1 + 1 = 4. Moyenne actuelle : 47 ÷ 4 = 11,75.",
                "b) Avec la note x de coefficient 2, la moyenne devient (47 + 2x) ÷ 6. On veut (47 + 2x) ÷ 6 = 13, donc 47 + 2x = 78.",
                "Donc 2x = 31 et x = 15,5. Vérification : (47 + 31) ÷ 6 = 78 ÷ 6 = 13.",
                "c) Il faudrait (47 + 2x) ÷ 6 = 15, donc 47 + 2x = 90, 2x = 43 et x = 21,5. Or une note ne dépasse pas 20 : c'est impossible.",
                "Conclusion : moyenne actuelle 11,75 ; il faut 15,5 pour atteindre 13 ; une moyenne de 15 est hors d'atteinte.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur la moyenne.",
            statements: [
              { text: "La moyenne d'une série est toujours l'une des valeurs de la série.", true: false, why: "La moyenne de 1 et de 2 vaut 1,5, qui n'est pas une valeur de la série." },
              { text: "La moyenne est comprise entre la plus petite et la plus grande valeur.", true: true, why: "C'est un bon moyen de contrôler un calcul de moyenne." },
              { text: "Dans une moyenne pondérée par des coefficients, on divise par la somme des coefficients.", true: true, why: "Une note de coefficient 2 compte comme deux notes : il faut en tenir compte au dénominateur." },
              { text: "La moyenne de 10 (coefficient 3) et de 16 (coefficient 1) vaut 13.", true: false, why: "(10 × 3 + 16) ÷ 4 = 46 ÷ 4 = 11,5. Le résultat 13 oublie les coefficients." },
              { text: "Une seule valeur très grande peut faire beaucoup augmenter la moyenne.", true: true, why: "La moyenne est sensible aux valeurs extrêmes." },
              { text: "Si toutes les valeurs augmentent de 2, la moyenne augmente de 2.", true: true, why: "La somme augmente de 2 fois l'effectif total, donc la moyenne augmente de 2." },
              { text: "Dans un tableau de valeurs et d'effectifs, on divise par le nombre de valeurs différentes.", true: false, why: "On divise par l'effectif total, c'est-à-dire la somme des effectifs." },
            ],
          },
          quiz: [
            { q: "Quelle est la moyenne de 8, 11 et 14 ?", options: ["33", "11", "12", "10"], answer: 1, why: "(8 + 11 + 14) ÷ 3 = 33 ÷ 3 = 11." },
            { q: "Une élève a 10 (coefficient 1) et 16 (coefficient 2). Quelle est sa moyenne ?", options: ["13", "12", "16", "14"], answer: 3, why: "(10 × 1 + 16 × 2) ÷ (1 + 2) = 42 ÷ 3 = 14." },
            { q: "Dans une série, la valeur 2 a pour effectif 3 et la valeur 5 a pour effectif 1. Quelle est la moyenne ?", options: ["3,5", "5,5", "2,75", "11"], answer: 2, why: "(2 × 3 + 5 × 1) ÷ (3 + 1) = 11 ÷ 4 = 2,75." },
            { q: "Par quoi divise-t-on dans une moyenne pondérée par des coefficients ?", options: ["Par la somme des coefficients", "Par le nombre de notes", "Par le plus grand coefficient", "Par 20, quel que soit le nombre de notes"], answer: 0, why: "Chaque coefficient compte comme un nombre de notes : on divise par leur somme." },
            { q: "Cinq amis ont 12 ans de moyenne. Un adulte de 42 ans les rejoint. Quel est l'âge moyen du groupe ?", options: ["27 ans", "12 ans", "13 ans", "17 ans"], answer: 3, why: "Somme des âges : 5 × 12 + 42 = 102 ans, pour 6 personnes : 102 ÷ 6 = 17 ans." },
          ],
          trap: "Oublier les coefficients ou les effectifs, c'est-à-dire faire la moyenne des valeurs différentes comme si chacune n'apparaissait qu'une fois, ou diviser par le nombre de notes au lieu de la somme des coefficients.",
          method: "Présentez le calcul dans un tableau à trois lignes : les valeurs, les effectifs (ou coefficients), puis les produits. La somme de la troisième ligne divisée par la somme de la deuxième donne la moyenne ; vérifiez qu'elle tombe entre la plus petite et la plus grande valeur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'mediane-etendue',
          title: 'Médiane et étendue d\'une série',
          minutes: 30,
          objectives: [
            "Déterminer la médiane d'une série de données, d'effectif pair ou impair.",
            "Calculer l'étendue d'une série de données.",
            "Comparer deux séries à l'aide de la moyenne, de la médiane et de l'étendue.",
          ],
          course: [
            {
              heading: "La médiane, la valeur du milieu",
              paragraphs: [
                "La médiane d'une série est une valeur qui partage la série, rangée dans l'ordre croissant, en deux groupes de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales.",
                "Exemple : un élève a obtenu les notes 7, 9, 12, 14 et 18. La note 12 est au milieu : deux notes sont en dessous, deux notes sont au-dessus. La médiane vaut 12. On peut dire : « la moitié des notes sont inférieures ou égales à 12 ».",
              ],
              box: { label: "Définition", text: "La médiane d'une série rangée dans l'ordre croissant est une valeur qui la partage en deux groupes de même effectif." },
            },
            {
              heading: "Trouver la médiane",
              paragraphs: [
                "Première étape, toujours : ranger les valeurs dans l'ordre croissant, sans oublier les valeurs répétées. On compte ensuite l'effectif total N.",
                "Si N est impair, la médiane est la valeur située au rang (N + 1) ÷ 2. Exemple : pour 7 valeurs, c'est la 4e valeur (3 valeurs avant, 3 après).",
                "Si N est pair, il y a deux valeurs au milieu, aux rangs N ÷ 2 et N ÷ 2 + 1. On prend alors en général pour médiane la moyenne de ces deux valeurs. Exemple : la série 3, 6, 10, 15 a pour valeurs centrales 6 et 10, et la médiane vaut (6 + 10) ÷ 2 = 8.",
              ],
              box: { label: "Règle", text: "Ranger, compter N. Si N est impair : médiane = valeur de rang (N + 1) ÷ 2. Si N est pair : médiane = moyenne des valeurs de rangs N ÷ 2 et N ÷ 2 + 1." },
            },
            {
              heading: "L'étendue, une mesure de la dispersion",
              paragraphs: [
                "L'étendue d'une série est la différence entre la plus grande et la plus petite valeur. Elle indique si les valeurs sont regroupées ou au contraire très éloignées les unes des autres.",
                "Exemple : les notes 7, 9, 12, 14 et 18 ont une étendue de 18 - 7 = 11 points. Si un autre élève a les notes 11, 12, 12, 13 et 14, l'étendue vaut seulement 14 - 11 = 3 : ses résultats sont plus réguliers.",
              ],
              box: { label: "Définition", text: "Étendue = plus grande valeur - plus petite valeur." },
            },
            {
              heading: "Comparer deux séries",
              paragraphs: [
                "La moyenne, la médiane et l'étendue apportent des informations différentes. La moyenne et la médiane indiquent autour de quelle valeur se situe la série ; l'étendue indique si les valeurs sont dispersées.",
                "La médiane est peu sensible aux valeurs extrêmes. Si l'on remplace la note 18 par 20 dans la série 7, 9, 12, 14, 18, la moyenne augmente, mais la médiane reste 12. C'est pourquoi on utilise souvent la médiane pour décrire des séries contenant quelques valeurs très grandes, comme des salaires ou des prix de maisons.",
              ],
            },
          ],
          keyPoints: [
            "La médiane partage la série rangée en deux groupes de même effectif.",
            "Toujours ranger les valeurs dans l'ordre croissant avant de chercher la médiane.",
            "N impair : la médiane est la valeur de rang (N + 1) ÷ 2.",
            "N pair : on prend la moyenne des deux valeurs centrales.",
            "Étendue = plus grande valeur - plus petite valeur : elle mesure la dispersion.",
            "La médiane est moins sensible que la moyenne aux valeurs extrêmes.",
          ],
          example: {
            statement: "Une équipe de basket a marqué les points suivants lors de 8 matchs (données fictives) : 54, 61, 48, 70, 66, 59, 75, 52. Déterminez la médiane et l'étendue de cette série.",
            solution: [
              "On range les valeurs dans l'ordre croissant : 48, 52, 54, 59, 61, 66, 70, 75.",
              "L'effectif total est N = 8, nombre pair. Les valeurs centrales sont celles de rangs 4 et 5 : 59 et 61.",
              "Médiane : (59 + 61) ÷ 2 = 60 points.",
              "Étendue : 75 - 48 = 27 points.",
              "Conclusion : la médiane vaut 60 points (l'équipe a marqué 60 points ou moins dans la moitié des matchs) et l'étendue vaut 27 points.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici la hauteur, en centimètres, de 7 plants de tomates (données fictives) : 14, 9, 21, 12, 17, 9, 15. Déterminez la médiane et l'étendue de cette série.",
              hint: "Rangez les 7 valeurs dans l'ordre croissant, sans oublier que 9 apparaît deux fois. La médiane est la 4e valeur.",
              solution: [
                "Valeurs rangées : 9, 9, 12, 14, 15, 17, 21.",
                "N = 7 est impair : la médiane est la valeur de rang (7 + 1) ÷ 2 = 4, soit 14 cm.",
                "Étendue : 21 - 9 = 12 cm.",
                "Conclusion : la médiane vaut 14 cm et l'étendue 12 cm.",
              ],
            },
            {
              level: 2,
              statement: "Voici les notes d'un contrôle dans une classe de 24 élèves (données fictives) : la note 8 a été obtenue par 3 élèves, la note 10 par 5 élèves, la note 12 par 6 élèves, la note 14 par 6 élèves et la note 16 par 4 élèves. a) Déterminez la médiane. b) Calculez l'étendue. c) Calculez la moyenne de la classe.",
              hint: "Les valeurs sont déjà rangées. Comptez les effectifs cumulés (3, puis 3 + 5, puis...) pour trouver les notes de rangs 12 et 13.",
              solution: [
                "a) N = 24 est pair : la médiane est la moyenne des valeurs de rangs 12 et 13.",
                "Effectifs cumulés : les notes 8 occupent les rangs 1 à 3, les notes 10 les rangs 4 à 8, les notes 12 les rangs 9 à 14. Les valeurs de rangs 12 et 13 valent donc 12 toutes les deux, et la médiane vaut 12.",
                "b) Étendue : 16 - 8 = 8 points.",
                "c) Somme des produits : 8 × 3 + 10 × 5 + 12 × 6 + 14 × 6 + 16 × 4 = 24 + 50 + 72 + 84 + 64 = 294. Moyenne : 294 ÷ 24 = 12,25.",
                "Conclusion : médiane 12, étendue 8 points, moyenne 12,25.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux joueurs ont marqué les points suivants lors de 6 matchs (données fictives). Joueur A : 10, 12, 11, 13, 12, 14. Joueur B : 2, 20, 5, 22, 18, 5. a) Calculez la moyenne, la médiane et l'étendue de chaque joueur. b) Lequel est le plus régulier ? Justifiez. c) Le joueur B joue un 7e match et marque 30 points. Calculez sa nouvelle médiane, sa nouvelle étendue et sa nouvelle moyenne (au centième).",
              hint: "Pour chaque joueur, rangez d'abord les 6 valeurs. Avec 6 valeurs, la médiane est la moyenne des 3e et 4e valeurs ; avec 7 valeurs, c'est la 4e.",
              solution: [
                "a) Joueur A : somme 72, moyenne 72 ÷ 6 = 12. Valeurs rangées : 10, 11, 12, 12, 13, 14 ; médiane (12 + 12) ÷ 2 = 12 ; étendue 14 - 10 = 4.",
                "Joueur B : somme 72, moyenne 72 ÷ 6 = 12. Valeurs rangées : 2, 5, 5, 18, 20, 22 ; médiane (5 + 18) ÷ 2 = 11,5 ; étendue 22 - 2 = 20.",
                "b) Les deux joueurs ont la même moyenne, mais l'étendue de A (4) est bien plus petite que celle de B (20) : le joueur A est beaucoup plus régulier.",
                "c) Nouvelle série de B rangée : 2, 5, 5, 18, 20, 22, 30. N = 7 : la médiane est la 4e valeur, 18.",
                "Nouvelle étendue : 30 - 2 = 28. Nouvelle moyenne : (72 + 30) ÷ 7 = 102 ÷ 7 ≈ 14,57.",
                "Conclusion : A et B ont 12 de moyenne, A est plus régulier ; après le 7e match, B a une médiane de 18, une étendue de 28 et une moyenne d'environ 14,57.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion ou chaque calcul à sa définition ou à son résultat.",
            pairs: [
              { left: "Médiane", right: "Valeur qui partage la série rangée en deux groupes de même effectif" },
              { left: "Étendue", right: "Différence entre la plus grande et la plus petite valeur" },
              { left: "Moyenne", right: "Somme des valeurs divisée par l'effectif total" },
              { left: "Effectif total", right: "Nombre total de valeurs de la série" },
              { left: "Médiane de 3, 5, 8, 10", right: "6,5" },
              { left: "Étendue de 3, 5, 8, 10", right: "7" },
            ],
          },
          quiz: [
            { q: "Quelle est la médiane de la série 4, 7, 9, 12, 20 ?", options: ["9", "10,4", "12", "7"], answer: 0, why: "La série est rangée et compte 5 valeurs : la médiane est la 3e, 9. La valeur 10,4 est la moyenne." },
            { q: "Quelle est la médiane de la série 3, 6, 10, 15 ?", options: ["6", "10", "8", "8,5"], answer: 2, why: "Il y a 4 valeurs : la médiane est la moyenne des 2e et 3e, (6 + 10) ÷ 2 = 8. La valeur 8,5 est la moyenne." },
            { q: "Quelle est l'étendue de la série 12, 5, 18, 9 ?", options: ["11", "13", "18", "6"], answer: 1, why: "Étendue = plus grande valeur - plus petite valeur = 18 - 5 = 13." },
            { q: "Quelle est la première étape pour trouver une médiane ?", options: ["Calculer la moyenne", "Additionner les valeurs", "Prendre la valeur du milieu de la liste telle qu'elle est donnée", "Ranger les valeurs dans l'ordre croissant"], answer: 3, why: "La médiane se lit sur la série rangée : sans rangement, la valeur du milieu de la liste ne veut rien dire." },
            { q: "Dans une série de 9 valeurs, on remplace la plus grande par une valeur encore plus grande. Que devient la médiane ?", options: ["Elle augmente un peu", "Elle diminue", "Elle ne change pas", "Elle devient égale à la moyenne"], answer: 2, why: "La médiane reste la 5e valeur de la série rangée, qui n'a pas changé : elle est peu sensible aux valeurs extrêmes." },
          ],
          trap: "Chercher la valeur du milieu sans avoir rangé la série dans l'ordre croissant, ou oublier les valeurs répétées (un effectif de 6 pour la note 12 compte pour six valeurs).",
          method: "Écrivez la série rangée en entier (ou les effectifs cumulés), comptez N, puis entourez la ou les valeurs centrales. Vérifiez qu'il reste autant de valeurs à gauche qu'à droite de votre médiane.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'calculer-probabilite',
          title: 'Expériences aléatoires : calculer une probabilité',
          minutes: 35,
          objectives: [
            "Utiliser le vocabulaire des probabilités : expérience aléatoire, issue, évènement.",
            "Calculer la probabilité d'un évènement dans une situation d'équiprobabilité.",
            "Calculer la probabilité de l'évènement contraire.",
          ],
          course: [
            {
              heading: "Le vocabulaire du hasard",
              paragraphs: [
                "Une expérience aléatoire est une expérience dont on connaît tous les résultats possibles, mais dont on ne peut pas prévoir le résultat à l'avance. Lancer un dé, tirer une carte, tourner une roue de loterie sont des expériences aléatoires.",
                "Les résultats possibles s'appellent les issues. Quand on lance un dé à six faces, il y a six issues : 1, 2, 3, 4, 5 et 6. Un évènement est une condition qui peut être réalisée ou non, par exemple « obtenir un nombre pair ». Cet évènement est réalisé par les issues 2, 4 et 6 : on les appelle les issues favorables.",
              ],
              box: { label: "Définition", text: "Une expérience aléatoire a plusieurs issues possibles, sans qu'on puisse prévoir laquelle se produira. Un évènement est réalisé par certaines issues, appelées issues favorables." },
            },
            {
              heading: "Calculer une probabilité",
              paragraphs: [
                "La probabilité d'un évènement est un nombre qui mesure ses chances de se réaliser. Lorsque toutes les issues ont la même chance de se produire, on dit qu'il y a équiprobabilité. C'est le cas avec un dé équilibré, une pièce équilibrée ou des boules indiscernables au toucher.",
                "Dans ce cas, la probabilité d'un évènement est égale au nombre d'issues favorables divisé par le nombre total d'issues. Exemple : avec un dé équilibré, P(« obtenir un nombre pair ») = 3/6 = 1/2. On peut écrire une probabilité sous forme de fraction, de nombre décimal (0,5) ou de pourcentage (50 %).",
              ],
              box: { label: "Formule", text: "En situation d'équiprobabilité : P(évènement) = nombre d'issues favorables ÷ nombre total d'issues." },
            },
            {
              heading: "Évènements particuliers et évènement contraire",
              paragraphs: [
                "Une probabilité est toujours comprise entre 0 et 1. Un évènement impossible, comme « obtenir 7 » avec un dé à six faces, a une probabilité de 0. Un évènement certain, comme « obtenir un nombre entre 1 et 6 », a une probabilité de 1. La somme des probabilités de toutes les issues vaut 1.",
                "L'évènement contraire d'un évènement A est l'évènement qui est réalisé exactement quand A ne l'est pas. Le contraire de « obtenir 6 » est « ne pas obtenir 6 ». Comme leurs probabilités ont une somme égale à 1, P(non A) = 1 - P(A). Exemple : P(obtenir 6) = 1/6, donc P(ne pas obtenir 6) = 1 - 1/6 = 5/6.",
              ],
              box: { label: "Propriété", text: "0 ≤ P(A) ≤ 1. Évènement impossible : probabilité 0. Évènement certain : probabilité 1. Évènement contraire : P(non A) = 1 - P(A)." },
            },
            {
              heading: "Attention à l'équiprobabilité",
              paragraphs: [
                "Un sac contient 3 boules rouges et 2 boules bleues, indiscernables au toucher. Il y a deux couleurs, mais la probabilité de tirer une boule rouge n'est pas 1/2 : chaque boule a la même chance d'être tirée, et 3 boules sur 5 sont rouges. Donc P(rouge) = 3/5 = 0,6.",
                "Une probabilité ne permet pas de prévoir le résultat d'une seule expérience : avec une probabilité de 1/2 d'obtenir Pile, on peut très bien obtenir Face trois fois de suite. En revanche, si l'on répète l'expérience un très grand nombre de fois, la proportion de Pile obtenus se rapproche de 1/2.",
              ],
            },
          ],
          keyPoints: [
            "Expérience aléatoire : on connaît les issues possibles, pas le résultat à l'avance.",
            "Un évènement est réalisé par des issues favorables.",
            "Équiprobabilité : P = nombre d'issues favorables ÷ nombre total d'issues.",
            "Une probabilité est comprise entre 0 (impossible) et 1 (certain).",
            "Évènement contraire : P(non A) = 1 - P(A).",
            "Compter les objets un par un, pas les catégories : 3 rouges et 2 bleues donnent P(rouge) = 3/5.",
          ],
          example: {
            statement: "Un sac contient 4 boules rouges, 5 boules vertes et 3 boules jaunes, indiscernables au toucher. On tire une boule au hasard. Calculez la probabilité de tirer une boule rouge, puis celle de ne pas tirer une boule verte, puis celle de tirer une boule bleue.",
            solution: [
              "Il y a 4 + 5 + 3 = 12 boules, qui ont toutes la même chance d'être tirées : c'est une situation d'équiprobabilité à 12 issues.",
              "P(rouge) = 4/12 = 1/3.",
              "P(verte) = 5/12, donc P(ne pas tirer une verte) = 1 - 5/12 = 7/12. On retrouve ce résultat en comptant les 4 + 3 = 7 boules qui ne sont pas vertes.",
              "Il n'y a aucune boule bleue : tirer une boule bleue est impossible, P(bleue) = 0.",
              "Conclusion : P(rouge) = 1/3, P(pas verte) = 7/12 et P(bleue) = 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une roue de loterie équilibrée est partagée en 8 secteurs de même taille, numérotés de 1 à 8. On la fait tourner. Calculez la probabilité des évènements : a) « obtenir 5 » ; b) « obtenir un nombre pair » ; c) « obtenir un multiple de 3 » ; d) « obtenir un nombre inférieur ou égal à 8 ».",
              hint: "Il y a 8 issues équiprobables. Pour chaque évènement, écrivez la liste des issues favorables.",
              solution: [
                "a) Une seule issue favorable (5) : P = 1/8.",
                "b) Issues favorables : 2, 4, 6, 8. P = 4/8 = 1/2.",
                "c) Issues favorables : 3 et 6. P = 2/8 = 1/4.",
                "d) Toutes les issues sont favorables : c'est un évènement certain, P = 8/8 = 1.",
                "Conclusion : 1/8 ; 1/2 ; 1/4 ; 1.",
              ],
            },
            {
              level: 2,
              statement: "Un jeu de 32 cartes contient 4 couleurs (pique, cœur, carreau, trèfle), avec dans chaque couleur 8 cartes : 7, 8, 9, 10, valet, dame, roi et as. On tire une carte au hasard. Calculez la probabilité de tirer : a) un cœur ; b) un as ; c) une figure (valet, dame ou roi) ; d) une carte qui n'est pas une figure.",
              hint: "Il y a 32 issues équiprobables. Comptez les cartes favorables dans chaque cas ; pour la question d, pensez à l'évènement contraire.",
              solution: [
                "a) Il y a 8 cœurs : P(cœur) = 8/32 = 1/4.",
                "b) Il y a un as par couleur, soit 4 as : P(as) = 4/32 = 1/8.",
                "c) Il y a 3 figures par couleur, soit 3 × 4 = 12 figures : P(figure) = 12/32 = 3/8.",
                "d) C'est l'évènement contraire de « tirer une figure » : P = 1 - 3/8 = 5/8. Vérification : 32 - 12 = 20 cartes, et 20/32 = 5/8.",
                "Conclusion : 1/4 ; 1/8 ; 3/8 ; 5/8.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une urne contient seulement des boules rouges et des boules bleues, indiscernables au toucher. Elle contient 6 boules rouges, et la probabilité de tirer une boule rouge est 3/8. a) Combien l'urne contient-elle de boules en tout ? de boules bleues ? b) Combien de boules bleues faut-il ajouter pour que la probabilité de tirer une boule rouge devienne 1/4 ? c) Quelle est alors la probabilité de tirer une boule bleue ?",
              hint: "Notez n le nombre total de boules : 6/n = 3/8. Pour la question b, notez x le nombre de boules ajoutées et écrivez 6/(16 + x) = 1/4.",
              solution: [
                "a) On a 6/n = 3/8, donc par produit en croix 3n = 48 et n = 16. L'urne contient 16 boules, dont 16 - 6 = 10 boules bleues.",
                "b) Après l'ajout de x boules bleues, il y a 16 + x boules, dont toujours 6 rouges. On veut 6/(16 + x) = 1/4, donc 16 + x = 24 et x = 8.",
                "Vérification : 6 rouges sur 24 boules, 6/24 = 1/4.",
                "c) Il y a alors 10 + 8 = 18 boules bleues sur 24 : P(bleue) = 18/24 = 3/4, ce qui correspond bien à 1 - 1/4.",
                "Conclusion : 16 boules dont 10 bleues ; il faut ajouter 8 boules bleues ; P(bleue) = 3/4.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "On lance un dé équilibré à six faces. Rangez ces évènements du moins probable au plus probable.",
            items: [
              "Obtenir 7",
              "Obtenir 6",
              "Obtenir un multiple de 3",
              "Obtenir un nombre pair",
              "Obtenir un nombre inférieur à 5",
              "Obtenir un nombre différent de 6",
              "Obtenir un nombre entre 1 et 6",
            ],
          },
          quiz: [
            { q: "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 5 ?", options: ["1/6", "1/3", "5/6", "1/2"], answer: 1, why: "Les issues favorables sont 5 et 6 : P = 2/6 = 1/3." },
            { q: "Quelle est la probabilité d'un évènement impossible ?", options: ["0", "1", "-1", "1/2"], answer: 0, why: "Un évènement impossible n'est réalisé par aucune issue : sa probabilité vaut 0." },
            { q: "La probabilité d'un évènement A vaut 0,35. Quelle est la probabilité de son évènement contraire ?", options: ["0,35", "1,35", "0,7", "0,65"], answer: 3, why: "P(non A) = 1 - P(A) = 1 - 0,35 = 0,65." },
            { q: "Un sac contient 3 boules rouges et 7 boules blanches, indiscernables au toucher. Quelle est la probabilité de tirer une boule rouge ?", options: ["3/7", "1/2", "3/10", "7/10"], answer: 2, why: "Il y a 10 boules équiprobables, dont 3 rouges : P = 3/10." },
            { q: "Laquelle de ces valeurs ne peut pas être une probabilité ?", options: ["0,99", "1,2", "1/3", "0"], answer: 1, why: "Une probabilité est toujours comprise entre 0 et 1 : 1,2 est impossible." },
          ],
          trap: "Compter les catégories au lieu des objets (croire qu'il y a « une chance sur deux » de tirer une boule rouge parce qu'il y a deux couleurs), ou appliquer la formule alors que les issues ne sont pas équiprobables.",
          method: "Commencez toujours par écrire la liste complète des issues et vérifiez qu'elles ont toutes la même chance de se produire. Comptez ensuite les issues favorables, et contrôlez que votre probabilité est bien comprise entre 0 et 1.",
        },
      ],
    },

    /* ================================================================== */
    /* LA TRANSLATION                                                       */
    /* ================================================================== */
    {
      id: 'translation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'image-translation',
          title: 'Construire l\'image d\'une figure par une translation',
          minutes: 30,
          objectives: [
            "Comprendre l'effet d'une translation : un glissement défini par une direction, un sens et une longueur.",
            "Construire l'image d'un point par une translation, sur un quadrillage et à la règle et au compas.",
            "Construire l'image d'une figure par une translation.",
          ],
          course: [
            {
              heading: "Une translation, c'est un glissement",
              paragraphs: [
                "Pensez à un tiroir que l'on ouvre, à une valise posée sur un tapis roulant ou à une pièce que l'on fait glisser sur un plateau de jeu. Chaque point se déplace de la même façon : dans la même direction, dans le même sens et de la même longueur. L'objet ne tourne pas et ne se retourne pas. Ce mouvement s'appelle une translation.",
                "Une translation est définie par un point A et son image B : on parle de « la translation qui transforme A en B ». Elle fait glisser chaque point selon la direction de la droite (AB), dans le sens de A vers B, et d'une longueur égale à AB. On la représente souvent par une flèche qui va de A à B.",
              ],
              box: { label: "Définition", text: "La translation qui transforme A en B fait glisser chaque point du plan selon la direction de la droite (AB), dans le sens de A vers B, et d'une longueur égale à AB." },
            },
            {
              heading: "L'image d'un point et le parallélogramme",
              paragraphs: [
                "Soit M un point. Son image M' par la translation qui transforme A en B est le point obtenu en faisant glisser M exactement comme A a glissé jusqu'à B. Les flèches de A vers B et de M vers M' sont donc parallèles, de même sens et de même longueur.",
                "Cela se traduit par une propriété très utile : le quadrilatère ABM'M est un parallélogramme. Attention à l'ordre des lettres : on lit A, B, puis M', puis M. Si M est sur la droite (AB), ce parallélogramme est « aplati » : les quatre points sont alignés.",
              ],
              box: { label: "Propriété", text: "Dire que M' est l'image de M par la translation qui transforme A en B signifie que ABM'M est un parallélogramme (éventuellement aplati)." },
            },
            {
              heading: "Construire sur un quadrillage",
              paragraphs: [
                "Sur un quadrillage ou dans un repère, on décrit le glissement en comptant les carreaux pour aller de A à B : par exemple 4 carreaux vers la droite et 3 carreaux vers le bas. Pour construire l'image d'un point, on applique exactement le même déplacement à ce point.",
                "Exemple dans un repère : la translation transforme A(1 ; 2) en B(5 ; -1). On ajoute 4 à l'abscisse et on enlève 3 à l'ordonnée. L'image du point C(0 ; 4) est donc C'(4 ; 1), et l'image du point D(2 ; 6) est D'(6 ; 3).",
              ],
            },
            {
              heading: "Construire à la règle et au compas",
              paragraphs: [
                "Sans quadrillage, on utilise le parallélogramme ABM'M : ses côtés opposés ont la même longueur, donc MM' = AB et BM' = AM. On trace un arc de cercle de centre M et de rayon AB, puis un arc de cercle de centre B et de rayon AM. Le point M' est le point d'intersection de ces deux arcs situé du bon côté, celui qui forme le parallélogramme ABM'M.",
                "Pour construire l'image d'une figure, on construit les images de quelques points bien choisis, puis on les relie. L'image d'un segment est un segment de même longueur, l'image d'un polygone est obtenue en déplaçant chaque sommet, et l'image d'un cercle est le cercle de même rayon dont le centre est l'image du centre de départ.",
              ],
              box: { label: "À retenir", text: "Pour construire l'image d'un polygone, construisez l'image de chacun de ses sommets, puis reliez les points obtenus dans le même ordre." },
            },
          ],
          keyPoints: [
            "Une translation est un glissement : direction, sens et longueur sont les mêmes pour tous les points.",
            "La translation qui transforme A en B : direction de (AB), sens de A vers B, longueur AB.",
            "M' image de M : ABM'M est un parallélogramme (éventuellement aplati).",
            "Sur un quadrillage, on reproduit le même déplacement en carreaux pour chaque point.",
            "Au compas : MM' = AB et BM' = AM.",
            "Image d'un polygone : on déplace chaque sommet et on relie dans le même ordre.",
          ],
          example: {
            statement: "Dans un repère, on considère la translation qui transforme A(1 ; 2) en B(5 ; -1). Construisez l'image du triangle CDE, avec C(0 ; 4), D(2 ; 6) et E(3 ; 3), en donnant les coordonnées des sommets images.",
            solution: [
              "Pour aller de A(1 ; 2) à B(5 ; -1), on avance de 4 carreaux vers la droite (5 - 1 = 4) et de 3 carreaux vers le bas (-1 - 2 = -3).",
              "Image de C(0 ; 4) : C'(0 + 4 ; 4 - 3), soit C'(4 ; 1).",
              "Image de D(2 ; 6) : D'(2 + 4 ; 6 - 3), soit D'(6 ; 3).",
              "Image de E(3 ; 3) : E'(3 + 4 ; 3 - 3), soit E'(7 ; 0).",
              "On relie C', D' et E' : le triangle C'D'E' a exactement la même forme et la même taille que CDE, il a simplement glissé.",
              "Conclusion : l'image du triangle CDE est le triangle C'D'E', avec C'(4 ; 1), D'(6 ; 3) et E'(7 ; 0).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère, on considère la translation qui transforme A(2 ; 1) en B(5 ; 3). Donnez les coordonnées des images des points M(0 ; 0), N(-1 ; 4) et P(4 ; -2).",
              hint: "Calculez d'abord le déplacement de A vers B : combien de carreaux vers la droite, combien vers le haut ? Appliquez-le ensuite à chaque point.",
              solution: [
                "De A(2 ; 1) à B(5 ; 3) : 3 carreaux vers la droite (5 - 2 = 3) et 2 carreaux vers le haut (3 - 1 = 2).",
                "M(0 ; 0) a pour image M'(3 ; 2).",
                "N(-1 ; 4) a pour image N'(2 ; 6).",
                "P(4 ; -2) a pour image P'(7 ; 0).",
                "Conclusion : M'(3 ; 2), N'(2 ; 6) et P'(7 ; 0).",
              ],
            },
            {
              level: 2,
              statement: "Tracez un triangle EFG tel que EF = 4 cm, FG = 3 cm et EG = 5 cm. On veut construire son image E'F'G' par la translation qui transforme E en F. a) Quel est le point E' ? b) Comment placer F' ? c) Expliquez comment construire G' à la règle et au compas. d) Quelles sont les longueurs des côtés du triangle E'F'G' ?",
              hint: "a) Relisez le nom de la translation. b) F' est obtenu en faisant glisser F comme E a glissé vers F. c) Utilisez le parallélogramme EFG'G.",
              solution: [
                "a) La translation transforme E en F, donc E' = F.",
                "b) F glisse dans la direction de (EF), dans le sens de E vers F, de 4 cm : F' est sur la demi-droite [EF), au-delà de F, avec FF' = 4 cm (le parallélogramme EFF'F est aplati).",
                "c) EFG'G doit être un parallélogramme, donc GG' = EF = 4 cm et FG' = EG = 5 cm. On trace un arc de centre G et de rayon 4 cm, puis un arc de centre F et de rayon 5 cm. G' est le point d'intersection situé du côté qui forme le parallélogramme EFG'G.",
                "d) La translation fait glisser le triangle sans le déformer : E'F' = 4 cm, F'G' = 3 cm et E'G' = 5 cm.",
                "Conclusion : E' = F, F' est sur [EF) avec FF' = 4 cm, G' s'obtient au compas, et E'F'G' a les mêmes longueurs que EFG.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un repère, le triangle ABC a pour sommets A(1 ; 1), B(4 ; 1) et C(1 ; 3). Une translation transforme A en A'(3 ; 5). a) Décrivez le glissement de cette translation. b) Donnez les coordonnées de B' et de C'. c) Le triangle DEF, avec D(3 ; 5), E(6 ; 5) et F(5 ; 7), est-il l'image du triangle ABC par cette translation ? d) Quel point M a pour image le point O(0 ; 0) par cette translation ?",
              hint: "Pour la question d, faites le chemin inverse : il faut retrouver le point qui, après le glissement, arrive en O.",
              solution: [
                "a) De A(1 ; 1) à A'(3 ; 5) : 2 carreaux vers la droite et 4 carreaux vers le haut.",
                "b) B'(4 + 2 ; 1 + 4), soit B'(6 ; 5), et C'(1 + 2 ; 3 + 4), soit C'(3 ; 7).",
                "c) D = A' et E = B', mais F(5 ; 7) n'est pas C'(3 ; 7). Le triangle DEF n'est donc pas l'image de ABC par cette translation (sa forme est d'ailleurs différente).",
                "d) Il faut un point M qui, en avançant de 2 vers la droite et de 4 vers le haut, arrive en O(0 ; 0). On fait le chemin inverse : M(0 - 2 ; 0 - 4), soit M(-2 ; -4).",
                "Conclusion : glissement de 2 vers la droite et 4 vers le haut ; B'(6 ; 5), C'(3 ; 7) ; DEF n'est pas l'image de ABC ; M(-2 ; -4).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la translation qui transforme A en B à sa description.",
            pairs: [
              { left: "Direction", right: "Celle de la droite (AB)" },
              { left: "Sens", right: "De A vers B" },
              { left: "Longueur du glissement", right: "La distance AB" },
              { left: "M' est l'image de M", right: "ABM'M est un parallélogramme" },
              { left: "Image d'un cercle", right: "Un cercle de même rayon" },
              { left: "Image du point (1 ; 1) pour un glissement de 3 vers la droite et 2 vers le haut", right: "Le point (4 ; 3)" },
            ],
          },
          quiz: [
            { q: "Une translation est :", options: ["un retournement de la figure", "une rotation autour d'un point", "un glissement", "un agrandissement"], answer: 2, why: "Une translation fait glisser la figure, sans la tourner, la retourner ni changer sa taille." },
            { q: "M' est l'image de M par la translation qui transforme A en B. Quel quadrilatère est un parallélogramme ?", options: ["ABM'M", "ABMM'", "AMBM'", "AM'BM"], answer: 0, why: "Les flèches de A vers B et de M vers M' sont parallèles, de même sens et de même longueur : ABM'M est un parallélogramme." },
            { q: "Une translation transforme A(0 ; 0) en B(2 ; 3). Quelle est l'image de C(1 ; 1) ?", options: ["(2 ; 3)", "(1 ; 2)", "(-1 ; -2)", "(3 ; 4)"], answer: 3, why: "Le glissement est de 2 vers la droite et 3 vers le haut : (1 + 2 ; 1 + 3) = (3 ; 4)." },
            { q: "Par une translation, l'image d'un segment de 5 cm est :", options: ["un segment de 10 cm", "un segment de 5 cm", "un point", "un segment de longueur variable"], answer: 1, why: "Une translation fait glisser la figure sans la déformer : les longueurs sont conservées." },
            { q: "Que faut-il connaître pour définir une translation ?", options: ["Un point et son image", "Un centre et un angle", "Un axe de symétrie", "Un rapport d'agrandissement"], answer: 0, why: "Un point A et son image B suffisent : ils donnent la direction, le sens et la longueur du glissement." },
          ],
          trap: "Écrire le parallélogramme dans le mauvais ordre (ABMM' au lieu de ABM'M), ce qui revient à faire glisser M dans le sens contraire, de B vers A.",
          method: "Avant de construire, dessinez la flèche de A vers B, puis tracez au crayon la même flèche en partant de chaque point. Contrôlez à la fin que la figure image a la même forme, la même taille et la même orientation que la figure de départ.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'proprietes-translation',
          title: 'Propriétés de la translation, frises et pavages',
          minutes: 30,
          objectives: [
            "Connaître les propriétés de conservation de la translation : longueurs, angles, aires, alignement, parallélisme.",
            "Utiliser ces propriétés pour justifier une affirmation ou calculer une grandeur.",
            "Reconnaître une translation dans une frise ou un pavage.",
          ],
          course: [
            {
              heading: "Ce que conserve une translation",
              paragraphs: [
                "Une translation fait glisser une figure sans la déformer : la figure image est superposable à la figure de départ. Elle conserve donc les longueurs, les mesures des angles, les périmètres et les aires.",
                "Elle conserve aussi l'alignement (l'image de trois points alignés est formée de trois points alignés), les milieux (l'image du milieu d'un segment est le milieu du segment image) et le parallélisme.",
                "Contrairement à une symétrie axiale, une translation ne retourne pas la figure : un triangle dont les sommets A, B, C se lisent dans le sens des aiguilles d'une montre garde cette orientation après une translation.",
              ],
              box: { label: "Propriété", text: "Une translation conserve les longueurs, les angles, les aires, l'alignement, les milieux et le parallélisme. La figure image est superposable à la figure de départ." },
            },
            {
              heading: "L'image d'une droite",
              paragraphs: [
                "Par une translation, l'image d'une droite est une droite qui lui est parallèle. Si la droite a la même direction que le glissement, elle glisse sur elle-même : son image est la droite elle-même.",
                "Cette propriété permet de justifier un parallélisme. Exemple : si A'B'C'D' est l'image d'un rectangle ABCD par une translation, alors (A'B') est parallèle à (AB), A'B' = AB, et A'B'C'D' est un rectangle de mêmes dimensions.",
              ],
              box: { label: "Propriété", text: "L'image d'une droite par une translation est une droite parallèle à la première (ou confondue avec elle)." },
            },
            {
              heading: "Les frises",
              paragraphs: [
                "Une frise est une bande décorée par un motif qui se répète régulièrement dans une seule direction. On en voit sur les bordures de carrelage, les papiers peints, les tissus ou les monuments antiques, comme les frises grecques.",
                "Chaque motif est l'image du précédent par une même translation. Si le motif mesure 3 cm de large, on passe d'un motif au suivant par une translation de 3 cm le long de la bande. Certaines frises utilisent aussi des symétries, mais toutes reposent sur la répétition par translation.",
              ],
              box: { label: "Définition", text: "Une frise est obtenue en répétant un motif par une même translation, dans une seule direction." },
            },
            {
              heading: "Les pavages",
              paragraphs: [
                "Un pavage recouvre tout le plan avec un ou plusieurs motifs, sans trous et sans chevauchements. On le rencontre dans les carrelages, les parquets ou les alvéoles hexagonales des ruches.",
                "Dans les pavages les plus simples, on obtient tous les motifs à partir d'un seul, par des translations dans deux directions différentes : par exemple vers la droite et vers le haut pour un carrelage de carreaux carrés. L'artiste néerlandais M. C. Escher est célèbre pour ses pavages formés d'oiseaux, de poissons ou de lézards qui s'emboîtent parfaitement.",
              ],
            },
          ],
          keyPoints: [
            "La figure image par une translation est superposable à la figure de départ.",
            "Conservés : longueurs, angles, périmètres, aires, alignement, milieux, parallélisme.",
            "Une translation ne retourne pas la figure, contrairement à une symétrie axiale.",
            "L'image d'une droite est une droite parallèle (ou confondue).",
            "Frise : un motif répété par translation dans une seule direction.",
            "Pavage : le plan recouvert sans trous ni chevauchements, souvent par des translations dans deux directions.",
          ],
          example: {
            statement: "ABCD est un rectangle de longueur AB = 6 cm et de largeur BC = 4 cm. Son image par une translation est le quadrilatère A'B'C'D'. a) Quelle est la nature de A'B'C'D' ? b) Calculez son périmètre et son aire. c) Que peut-on dire des droites (A'B') et (AB) ?",
            solution: [
              "a) Une translation conserve les longueurs et les angles : A'B'C'D' a quatre angles droits, avec A'B' = 6 cm et B'C' = 4 cm. C'est un rectangle de mêmes dimensions.",
              "b) Périmètre : 2 × (6 + 4) = 20 cm. Aire : 6 × 4 = 24 cm². Ce sont les mêmes que pour ABCD, car une translation conserve les périmètres et les aires.",
              "c) L'image d'une droite par une translation est une droite parallèle : (A'B') est parallèle à (AB) (ou confondue avec elle).",
              "Conclusion : A'B'C'D' est un rectangle de 6 cm sur 4 cm, de périmètre 20 cm et d'aire 24 cm², et (A'B') // (AB).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle RST a pour côtés RS = 5 cm et ST = 6 cm, l'angle RST mesure 40° et son aire vaut environ 9,6 cm². Le triangle R'S'T' est son image par une translation. Donnez R'S', S'T', la mesure de l'angle R'S'T' et l'aire du triangle R'S'T'.",
              hint: "Une translation conserve les longueurs, les angles et les aires.",
              solution: [
                "Une translation conserve les longueurs : R'S' = RS = 5 cm et S'T' = ST = 6 cm.",
                "Elle conserve les angles : l'angle R'S'T' mesure 40°.",
                "Elle conserve les aires : l'aire de R'S'T' vaut environ 9,6 cm².",
                "Conclusion : R'S' = 5 cm, S'T' = 6 cm, angle R'S'T' = 40°, aire ≈ 9,6 cm².",
              ],
            },
            {
              level: 2,
              statement: "Les points A, B et C sont alignés, B est le milieu de [AC] et AC = 8 cm. Par une translation, A, B et C ont pour images A', B' et C'. a) Les points A', B' et C' sont-ils alignés ? b) Que représente B' pour le segment [A'C'] ? c) Calculez A'B'. d) Les droites (AA') et (CC') sont-elles parallèles ? Justifiez.",
              hint: "Utilisez les propriétés de conservation. Pour la question d, pensez au parallélogramme qui définit l'image d'un point.",
              solution: [
                "a) Une translation conserve l'alignement : A', B' et C' sont alignés.",
                "b) Elle conserve les milieux : B' est le milieu de [A'C'].",
                "c) A'C' = AC = 8 cm, donc A'B' = 8 ÷ 2 = 4 cm.",
                "d) Les points A et C glissent dans la même direction (celle de la translation) : les droites (AA') et (CC') ont toutes deux cette direction, elles sont donc parallèles (ou confondues si A, C et leurs images sont alignés).",
                "Conclusion : A', B', C' sont alignés, B' est le milieu de [A'C'], A'B' = 4 cm et (AA') // (CC').",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Une frise est formée d'un motif de 3 cm de large, répété par une translation de 3 cm vers la droite, sans espace entre les motifs. Le premier motif commence au bord gauche d'une bande de 1,5 m. Combien de motifs complets la bande contient-elle ? b) Un point P du premier motif est situé à 1 cm du bord gauche. À quelle distance du bord gauche se trouve son image dans le 20e motif ? c) On carrelle une pièce rectangulaire de 4 m sur 3 m avec des carreaux carrés de 25 cm de côté, posés par translations vers la droite et vers le haut. Combien de carreaux faut-il ?",
              hint: "a) Convertissez 1,5 m en centimètres. b) Pour passer du 1er au 20e motif, combien de translations de 3 cm faut-il ? c) Comptez les carreaux dans la longueur, puis dans la largeur.",
              solution: [
                "a) 1,5 m = 150 cm, et 150 ÷ 3 = 50. La bande contient 50 motifs complets.",
                "b) Du 1er au 20e motif, on applique 19 fois la translation de 3 cm, soit 19 × 3 = 57 cm. L'image de P est à 1 + 57 = 58 cm du bord gauche.",
                "c) Dans la longueur : 400 ÷ 25 = 16 carreaux. Dans la largeur : 300 ÷ 25 = 12 carreaux.",
                "Nombre de carreaux : 16 × 12 = 192.",
                "Conclusion : 50 motifs ; l'image de P est à 58 cm du bord ; il faut 192 carreaux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les propriétés de la translation.",
            statements: [
              { text: "Une translation conserve les longueurs.", true: true, why: "La figure glisse sans être déformée : elle est superposable à la figure de départ." },
              { text: "L'image d'un carré par une translation peut être un rectangle qui n'est pas un carré.", true: false, why: "Les longueurs et les angles sont conservés : l'image d'un carré est un carré de même côté." },
              { text: "L'image d'une droite par une translation est une droite parallèle à la première, ou confondue avec elle.", true: true, why: "La droite glisse sans tourner, donc sa direction ne change pas." },
              { text: "Une translation retourne la figure, comme une symétrie axiale.", true: false, why: "Une translation ne retourne pas la figure : elle garde son orientation." },
              { text: "Dans une frise, le motif est répété par translation dans une seule direction.", true: true, why: "C'est ce qui distingue une frise, qui forme une bande, d'un pavage, qui recouvre le plan." },
              { text: "Un pavage peut laisser des trous entre les motifs.", true: false, why: "Un pavage recouvre le plan sans trous et sans chevauchements." },
              { text: "Une translation de 2 cm multiplie l'aire d'une figure par 2.", true: false, why: "Une translation conserve les aires, quelle que soit la longueur du glissement." },
              { text: "L'image du milieu d'un segment est le milieu du segment image.", true: true, why: "Une translation conserve les milieux." },
            ],
          },
          quiz: [
            { q: "Un triangle a un angle de 50°. Par une translation, l'angle image mesure :", options: ["100°", "130°", "40°", "50°"], answer: 3, why: "Une translation conserve les mesures des angles." },
            { q: "Par une translation, l'image d'une droite (d) est :", options: ["une droite perpendiculaire à (d)", "une droite parallèle à (d)", "un segment", "un cercle"], answer: 1, why: "Une translation fait glisser la droite sans la tourner : son image lui est parallèle (ou confondue avec elle)." },
            { q: "Un rectangle de 3 cm sur 5 cm a pour image, par une translation, une figure d'aire :", options: ["30 cm²", "8 cm²", "15 cm²", "16 cm²"], answer: 2, why: "Une translation conserve les aires : 3 × 5 = 15 cm²." },
            { q: "Comment une frise est-elle construite ?", options: ["Par un motif répété par translation", "Par un motif qu'on agrandit de plus en plus", "Par un motif qu'on tourne autour d'un point fixe", "Par des motifs placés au hasard"], answer: 0, why: "Une frise répète un même motif par une même translation, dans une seule direction." },
            { q: "Une translation transforme A en A', avec AA' = 4 cm. Quelle est la distance BB' pour un autre point B et son image B' ?", options: ["Cela dépend de B", "8 cm", "2 cm", "4 cm"], answer: 3, why: "Tous les points glissent de la même longueur : BB' = AA' = 4 cm." },
          ],
          trap: "Confondre translation et symétrie : croire qu'une translation retourne la figure, ou qu'elle change sa taille selon la longueur du glissement.",
          method: "Pour justifier une égalité de longueurs, d'angles ou un parallélisme sur une figure image, citez la propriété de conservation exacte : « Une translation conserve les longueurs, donc... ». Une propriété par phrase, suivie de la conclusion.",
        },
      ],
    },

    /* ================================================================== */
    /* PYRAMIDES ET CÔNES                                                   */
    /* ================================================================== */
    {
      id: 'pyramides-cones',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'representer-pyramide-cone',
          title: 'Reconnaître, représenter et se repérer : pyramides et cônes',
          minutes: 35,
          objectives: [
            "Reconnaître une pyramide et un cône de révolution, et nommer leurs éléments.",
            "Représenter une pyramide et un cône en perspective cavalière, et décrire leur patron.",
            "Se repérer dans un parallélépipède rectangle à l'aide de trois coordonnées.",
          ],
          course: [
            {
              heading: "La pyramide",
              paragraphs: [
                "Une pyramide est un solide formé d'une base, qui est un polygone, et de faces latérales triangulaires qui se rejoignent toutes en un même point : le sommet de la pyramide. Les arêtes qui relient le sommet aux sommets de la base sont les arêtes latérales.",
                "La hauteur d'une pyramide est le segment qui part du sommet et qui est perpendiculaire au plan de la base ; sa longueur est aussi appelée hauteur. On nomme une pyramide d'après sa base : pyramide à base carrée (comme les grandes pyramides d'Égypte), à base triangulaire (on l'appelle aussi un tétraèdre), à base hexagonale...",
                "Une pyramide est dite régulière quand sa base est un polygone régulier (triangle équilatéral, carré...) et que sa hauteur passe par le centre de la base. Ses faces latérales sont alors des triangles isocèles superposables. Si la base a n côtés, la pyramide a n + 1 faces, n + 1 sommets et 2n arêtes.",
              ],
              box: { label: "Définition", text: "Une pyramide a une base polygonale et des faces latérales triangulaires qui se rejoignent au sommet. Sa hauteur est le segment issu du sommet, perpendiculaire au plan de la base." },
            },
            {
              heading: "Le cône de révolution",
              paragraphs: [
                "Faites tourner un triangle rectangle autour de l'un des côtés de son angle droit : il engendre un cône de révolution. Un cornet de glace, un entonnoir ou un chapeau pointu ont cette forme.",
                "Un cône de révolution a une base en forme de disque et un sommet. Sa hauteur est le segment qui joint le sommet au centre du disque de base : elle est perpendiculaire à la base. Une génératrice est un segment qui joint le sommet à un point du cercle de base ; toutes les génératrices ont la même longueur.",
              ],
              box: { label: "Définition", text: "Un cône de révolution est engendré par un triangle rectangle qui tourne autour d'un côté de son angle droit. Il a une base en forme de disque, un sommet, une hauteur et des génératrices." },
            },
            {
              heading: "Représenter et construire un patron",
              paragraphs: [
                "En perspective cavalière, les arêtes visibles sont tracées en traits pleins et les arêtes cachées en pointillés. Les droites parallèles restent parallèles, mais les angles et les longueurs fuyantes ne sont pas respectés : une base carrée est souvent dessinée comme un parallélogramme. La base d'un cône apparaît comme une ellipse, une sorte de cercle aplati.",
                "Un patron est une figure plane que l'on peut plier pour fabriquer le solide. Le patron d'une pyramide est formé de sa base et de ses faces latérales triangulaires attachées autour d'elle : pour une pyramide régulière à base carrée, un carré entouré de quatre triangles isocèles. Le patron d'un cône est formé d'un disque (la base) et d'une portion de disque, appelée secteur, dont l'arc a la même longueur que le cercle de base.",
              ],
            },
            {
              heading: "Se repérer dans un pavé droit",
              paragraphs: [
                "Pour repérer un point dans l'espace, on peut utiliser un parallélépipède rectangle (un pavé droit). On choisit un sommet comme origine et trois arêtes perpendiculaires qui en partent comme axes. Chaque point est alors repéré par trois nombres : son abscisse, son ordonnée et son altitude (aussi appelée cote).",
                "Exemple : le pavé ABCDEFGH a pour face du dessous ABCD et pour face du dessus EFGH, avec E au-dessus de A, F au-dessus de B, G au-dessus de C et H au-dessus de D. On prend A pour origine, avec AB = 4 sur le premier axe, AD = 3 sur le deuxième et AE = 2 sur le troisième. Alors B(4 ; 0 ; 0), D(0 ; 3 ; 0), E(0 ; 0 ; 2) et G(4 ; 3 ; 2). Le centre de la face du dessus EFGH a pour coordonnées (2 ; 1,5 ; 2) : c'est par exemple le sommet de la pyramide de base ABCD qui a la même hauteur que le pavé.",
              ],
              box: { label: "Repère", text: "Dans un pavé droit, un point est repéré par trois coordonnées, dans cet ordre : abscisse, ordonnée, altitude. L'origine a pour coordonnées (0 ; 0 ; 0)." },
            },
          ],
          keyPoints: [
            "Pyramide : une base polygonale, des faces latérales triangulaires, un sommet.",
            "Hauteur : segment issu du sommet, perpendiculaire au plan de la base.",
            "Base à n côtés : n + 1 faces, n + 1 sommets et 2n arêtes.",
            "Cône de révolution : une base en disque, un sommet, des génératrices de même longueur.",
            "Perspective cavalière : arêtes cachées en pointillés ; patron du cône : un disque et un secteur de disque.",
            "Dans un pavé droit, un point a trois coordonnées : abscisse, ordonnée, altitude.",
          ],
          example: {
            statement: "SABCD est une pyramide régulière à base carrée : ABCD est un carré de 6 cm de côté, de centre O, et la hauteur [SO] mesure 4 cm. a) Combien a-t-elle de faces, d'arêtes et de sommets ? b) Quelle est la nature de ses faces latérales ? c) Calculez la longueur de l'arête latérale [SA], au millimètre près.",
            solution: [
              "a) La base a 4 côtés : la pyramide a 4 + 1 = 5 faces, 2 × 4 = 8 arêtes et 4 + 1 = 5 sommets.",
              "b) La pyramide est régulière : ses quatre faces latérales sont des triangles isocèles superposables (SA = SB = SC = SD).",
              "c) O est le milieu de la diagonale [AC]. Dans le triangle ABC rectangle en B : AC² = 6² + 6² = 72, et OA = AC ÷ 2, donc OA² = AC² ÷ 4 = 18.",
              "La hauteur [SO] est perpendiculaire à la base, donc le triangle SOA est rectangle en O. D'après le théorème de Pythagore : SA² = SO² + OA² = 16 + 18 = 34.",
              "SA = √34 ≈ 5,83 cm.",
              "Conclusion : 5 faces, 8 arêtes, 5 sommets ; faces latérales isocèles ; SA ≈ 5,8 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces solides, donnez le nombre de faces, d'arêtes et de sommets : a) une pyramide à base triangulaire ; b) une pyramide à base carrée ; c) une pyramide à base hexagonale.",
              hint: "Si la base a n côtés, il y a n faces latérales plus la base, n arêtes sur la base plus n arêtes latérales, n sommets sur la base plus le sommet de la pyramide.",
              solution: [
                "a) Base à 3 côtés : 4 faces, 6 arêtes, 4 sommets.",
                "b) Base à 4 côtés : 5 faces, 8 arêtes, 5 sommets.",
                "c) Base à 6 côtés : 7 faces, 12 arêtes, 7 sommets.",
                "Conclusion : on trouve à chaque fois n + 1 faces, 2n arêtes et n + 1 sommets.",
              ],
            },
            {
              level: 2,
              statement: "ABCDEFGH est un pavé droit de face du dessous ABCD et de face du dessus EFGH (E au-dessus de A, F au-dessus de B, G au-dessus de C, H au-dessus de D). On prend A pour origine, avec AB = 5 cm sur le premier axe, AD = 4 cm sur le deuxième et AE = 3 cm sur le troisième. a) Donnez les coordonnées de B, C, D, E, F, G et H. b) Donnez les coordonnées du point K, centre de la face EFGH. c) Quelle est la hauteur de la pyramide KABCD ?",
              hint: "Un point de la face du dessous a une altitude 0, un point de la face du dessus a une altitude 3. Le centre d'un rectangle est au milieu de chaque dimension.",
              solution: [
                "a) B(5 ; 0 ; 0), C(5 ; 4 ; 0), D(0 ; 4 ; 0), E(0 ; 0 ; 3), F(5 ; 0 ; 3), G(5 ; 4 ; 3), H(0 ; 4 ; 3).",
                "b) Le centre K de la face EFGH est au milieu de la longueur et de la largeur, à l'altitude 3 : K(2,5 ; 2 ; 3).",
                "c) Le sommet K est à l'altitude 3 et la base ABCD à l'altitude 0 : la hauteur de la pyramide est AE = 3 cm.",
                "Conclusion : coordonnées ci-dessus, K(2,5 ; 2 ; 3), et la pyramide KABCD a une hauteur de 3 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un cône de révolution a un rayon de base de 3 cm et des génératrices de 5 cm. a) Calculez sa hauteur. b) Calculez la longueur du cercle de base, en fonction de π puis arrondie au millimètre. c) Son patron comporte un secteur découpé dans un disque de rayon 5 cm. L'arc du secteur doit avoir la même longueur que le cercle de base. Quelle fraction du disque de rayon 5 cm faut-il garder ? d) Déduisez-en l'angle du secteur.",
              hint: "a) La hauteur, un rayon de base et une génératrice forment un triangle rectangle. c) Comparez la longueur du cercle de base à celle du cercle de rayon 5 cm. d) Un disque entier correspond à 360°.",
              solution: [
                "a) La hauteur, un rayon de la base et une génératrice forment un triangle rectangle dont l'hypoténuse est la génératrice. D'après le théorème de Pythagore : h² = 5² - 3² = 25 - 9 = 16, donc h = 4 cm.",
                "b) Longueur du cercle de base : 2 × π × 3 = 6π ≈ 18,8 cm.",
                "c) Le cercle de rayon 5 cm mesure 2 × π × 5 = 10π cm. La fraction à garder est 6π ÷ 10π = 6/10 = 3/5.",
                "d) L'angle du secteur est proportionnel à la longueur de l'arc : 3/5 × 360° = 216°.",
                "Conclusion : h = 4 cm ; le cercle de base mesure 6π ≈ 18,8 cm ; on garde les 3/5 du disque, soit un secteur de 216°.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Tétraèdre", right: "Pyramide à base triangulaire" },
              { left: "Hauteur d'une pyramide", right: "Segment issu du sommet, perpendiculaire au plan de la base" },
              { left: "Génératrice d'un cône", right: "Segment qui joint le sommet à un point du cercle de base" },
              { left: "Patron d'un cône", right: "Un disque et un secteur de disque" },
              { left: "Altitude d'un point", right: "Sa troisième coordonnée dans un pavé droit" },
              { left: "Faces latérales d'une pyramide", right: "Des triangles qui se rejoignent au sommet" },
            ],
          },
          quiz: [
            { q: "Combien de faces a une pyramide à base pentagonale ?", options: ["5", "6", "10", "7"], answer: 1, why: "La base a 5 côtés : 5 faces latérales plus la base, soit 6 faces." },
            { q: "Quelle est la forme de la base d'un cône de révolution ?", options: ["Un triangle", "Un carré", "Un disque", "Un secteur de disque"], answer: 2, why: "La base d'un cône de révolution est un disque ; le secteur de disque apparaît dans son patron." },
            { q: "Dans une pyramide régulière à base carrée, les faces latérales sont :", options: ["des triangles isocèles superposables", "des carrés", "des triangles rectangles tous différents", "des rectangles"], answer: 0, why: "Le sommet est à la verticale du centre de la base : il est à la même distance des quatre sommets du carré, donc les faces sont isocèles et identiques." },
            { q: "Dans le pavé ABCDEFGH, A est l'origine, AB = 4 sur le premier axe, AD = 3 sur le deuxième et AE = 2 sur le troisième. F est au-dessus de B. Quelles sont les coordonnées de F ?", options: ["(4 ; 3 ; 2)", "(0 ; 0 ; 2)", "(4 ; 2 ; 0)", "(4 ; 0 ; 2)"], answer: 3, why: "F a la même abscisse et la même ordonnée que B(4 ; 0 ; 0), et l'altitude de la face du dessus, 2." },
            { q: "En perspective cavalière, comment trace-t-on une arête cachée ?", options: ["En rouge", "Elle n'est pas tracée", "En pointillés", "En trait plus épais"], answer: 2, why: "Les arêtes cachées sont tracées en pointillés : on les voit, mais on sait qu'elles sont derrière le solide." },
          ],
          trap: "Confondre la hauteur d'une pyramide (perpendiculaire à la base) avec une arête latérale ou avec la hauteur d'une face latérale, qui sont plus longues.",
          method: "Pour compter faces, arêtes et sommets sans erreur, comptez séparément ce qui est sur la base et ce qui part du sommet, puis vérifiez avec la règle n + 1 faces, 2n arêtes, n + 1 sommets.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'volume-pyramide-cone',
          title: 'Calculer le volume d\'une pyramide et d\'un cône',
          minutes: 35,
          objectives: [
            "Calculer le volume d'une pyramide et d'un cône de révolution.",
            "Convertir des unités de volume et de contenance.",
            "Résoudre un problème faisant intervenir des volumes.",
          ],
          course: [
            {
              heading: "Le volume d'une pyramide",
              paragraphs: [
                "Le volume d'une pyramide est égal au tiers du produit de l'aire de sa base par sa hauteur. Autrement dit, une pyramide occupe le tiers de la place d'un prisme droit (ou d'un pavé droit) qui a la même base et la même hauteur. On le constate en remplissant de sable une pyramide creuse : il faut la vider trois fois pour remplir le prisme correspondant.",
                "Un cube peut d'ailleurs être découpé en trois pyramides identiques, qui ont chacune pour base une face du cube et pour sommet le même sommet du cube. Exemple : une pyramide à base carrée de 6 cm de côté et de 5 cm de hauteur a pour volume (6 × 6 × 5) ÷ 3 = 180 ÷ 3 = 60 cm³.",
              ],
              box: { label: "Formule", text: "Volume d'une pyramide : V = (aire de la base × hauteur) ÷ 3." },
            },
            {
              heading: "Le volume d'un cône",
              paragraphs: [
                "De la même façon, le volume d'un cône de révolution est le tiers du volume du cylindre de même base et de même hauteur. La base est un disque de rayon r, d'aire π × r². Avec une hauteur h, le volume vaut donc (π × r² × h) ÷ 3.",
                "Exemple : un cône de rayon 3 cm et de hauteur 10 cm a pour volume (π × 3² × 10) ÷ 3 = (π × 90) ÷ 3 = 30π cm³, soit environ 94,2 cm³. Gardez si possible la valeur exacte avec π le plus longtemps possible, et arrondissez à la fin.",
              ],
              box: { label: "Formule", text: "Volume d'un cône de révolution de rayon r et de hauteur h : V = (π × r² × h) ÷ 3." },
            },
            {
              heading: "Unités de volume et de contenance",
              paragraphs: [
                "Un volume s'exprime en unités cubes : cm³, dm³, m³. Un cube de 1 dm de côté contient 10 × 10 × 10 = 1 000 cubes de 1 cm de côté : 1 dm³ = 1 000 cm³. De même, 1 m³ = 1 000 dm³.",
                "Pour les liquides, on utilise aussi les unités de contenance : le litre (L), le centilitre (cL), le millilitre (mL). Le lien à connaître : 1 L = 1 dm³, et donc 1 mL = 1 cm³. Toutes les longueurs doivent être exprimées dans la même unité avant le calcul : des centimètres donnent des cm³, des mètres donnent des m³.",
              ],
              box: { label: "Repère", text: "1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³ ; 1 L = 1 dm³ ; 1 mL = 1 cm³." },
            },
            {
              heading: "Résoudre un problème de volume",
              paragraphs: [
                "Repérez d'abord la forme du solide et sa base. Calculez l'aire de la base avec la bonne formule : carré (côté × côté), rectangle (longueur × largeur), triangle (base × hauteur ÷ 2), disque (π × r²). Prenez ensuite la hauteur du solide, perpendiculaire à la base, et non une arête latérale ou une génératrice.",
                "Appliquez la formule du volume, n'oubliez pas de diviser par 3, convertissez si nécessaire, puis concluez par une phrase avec l'unité. Si l'énoncé donne le diamètre d'un cône, divisez-le par 2 pour obtenir le rayon.",
              ],
            },
          ],
          keyPoints: [
            "Pyramide : V = (aire de la base × hauteur) ÷ 3.",
            "Cône : V = (π × r² × h) ÷ 3.",
            "Une pyramide ou un cône occupe le tiers du prisme ou du cylindre de même base et même hauteur.",
            "La hauteur est perpendiculaire à la base : ce n'est ni une arête latérale ni une génératrice.",
            "1 dm³ = 1 000 cm³, 1 L = 1 dm³, 1 mL = 1 cm³.",
            "Toutes les longueurs dans la même unité avant de calculer.",
          ],
          example: {
            statement: "Un verre a la forme d'un cône de révolution de rayon 4 cm et de hauteur 9 cm. Calculez son volume en cm³, au dixième près. Peut-il contenir 20 cL de jus de fruit ?",
            solution: [
              "Aire de la base : π × 4² = 16π cm².",
              "Volume : V = (16π × 9) ÷ 3 = 144π ÷ 3 = 48π cm³.",
              "À la calculatrice : 48π ≈ 150,8 cm³.",
              "Conversion : 1 cm³ = 1 mL, donc V ≈ 150,8 mL ≈ 15,1 cL.",
              "Conclusion : le verre contient environ 15 cL ; il ne peut pas contenir 20 cL de jus de fruit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une pyramide a pour base un rectangle de 8 cm sur 5 cm et pour hauteur 9 cm. Calculez son volume.",
              hint: "Calculez d'abord l'aire de la base rectangulaire, puis appliquez V = (aire de la base × hauteur) ÷ 3.",
              solution: [
                "Aire de la base : 8 × 5 = 40 cm².",
                "Volume : V = (40 × 9) ÷ 3 = 360 ÷ 3 = 120 cm³.",
                "Conclusion : la pyramide a un volume de 120 cm³.",
              ],
            },
            {
              level: 2,
              statement: "Un tas de sable a la forme d'un cône de révolution de 3 m de diamètre et de 1,2 m de hauteur (données fictives). a) Calculez son volume en m³, au centième près. b) Exprimez ce volume en litres, à la centaine de litres près. c) Une remorque transporte au plus 2 m³ de sable. Combien de voyages faut-il pour déplacer tout le tas ?",
              hint: "Attention : l'énoncé donne le diamètre. Le rayon vaut la moitié. Pour la conversion, rappelez-vous que 1 m³ = 1 000 L.",
              solution: [
                "a) Rayon : 3 ÷ 2 = 1,5 m. Volume : V = (π × 1,5² × 1,2) ÷ 3 = (π × 2,25 × 1,2) ÷ 3 = 0,9π ≈ 2,83 m³.",
                "b) 1 m³ = 1 000 dm³ = 1 000 L, donc V ≈ 2 827 L, soit environ 2 800 L.",
                "c) 2,83 m³ dépasse 2 m³ : un seul voyage ne suffit pas. Deux voyages permettent de transporter jusqu'à 4 m³.",
                "Conclusion : V ≈ 2,83 m³, soit environ 2 800 L, et il faut 2 voyages.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Un cône de révolution de rayon 5 cm a un volume de 100π cm³. Calculez sa hauteur. b) Une pyramide à base carrée a la même hauteur et le même volume que ce cône. Calculez le côté de sa base, au millimètre près. c) On remplit le cône d'eau aux trois quarts de son volume. Quelle quantité d'eau contient-il, au millilitre près ?",
              hint: "a) Écrivez (π × 5² × h) ÷ 3 = 100π et simplifiez par π. b) L'aire de la base vaut 3 × V ÷ h ; le côté est la racine carrée de cette aire.",
              solution: [
                "a) (π × 25 × h) ÷ 3 = 100π, donc 25 × h ÷ 3 = 100, soit 25 × h = 300 et h = 12 cm.",
                "b) Pour la pyramide : (aire de la base × 12) ÷ 3 = 100π, donc aire de la base = 300π ÷ 12 = 25π ≈ 78,54 cm².",
                "La base est un carré : côté = √(25π) ≈ 8,86 cm, soit environ 8,9 cm.",
                "c) Le volume du cône est 100π ≈ 314,16 cm³. Les trois quarts : 0,75 × 100π = 75π ≈ 235,6 cm³, soit environ 236 mL.",
                "Conclusion : h = 12 cm ; le côté de la base de la pyramide mesure environ 8,9 cm ; le cône contient environ 236 mL d'eau.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul du volume d'un cône, en litres.",
            items: [
              "Repérer le rayon r de la base et la hauteur h du cône.",
              "Vérifier que r et h sont exprimés dans la même unité, en décimètres.",
              "Calculer l'aire de la base : π × r².",
              "Multiplier l'aire de la base par la hauteur h.",
              "Diviser le résultat par 3 pour obtenir le volume en dm³.",
              "Convertir : 1 dm³ = 1 L.",
              "Conclure par une phrase, avec l'unité.",
            ],
          },
          quiz: [
            { q: "Quel est le volume d'une pyramide dont la base a une aire de 30 cm² et dont la hauteur mesure 7 cm ?", options: ["70 cm³", "210 cm³", "37 cm³", "105 cm³"], answer: 0, why: "V = (30 × 7) ÷ 3 = 210 ÷ 3 = 70 cm³. La réponse 210 cm³ oublie de diviser par 3." },
            { q: "1 L est égal à :", options: ["1 m³", "1 cm³", "100 cm³", "1 dm³"], answer: 3, why: "Un litre est le volume d'un cube de 1 dm de côté : 1 L = 1 dm³ = 1 000 cm³." },
            { q: "Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?", options: ["π × r² × h", "(π × r² × h) ÷ 3", "2 × π × r × h", "(2 × π × r × h) ÷ 3"], answer: 1, why: "Le cône occupe le tiers du cylindre de même base (aire π × r²) et de même hauteur." },
            { q: "Une pyramide et un pavé droit ont la même base et la même hauteur. Le volume de la pyramide est :", options: ["le même", "la moitié de celui du pavé", "le tiers de celui du pavé", "le double"], answer: 2, why: "Le volume d'une pyramide est le tiers de celui du prisme ou du pavé de même base et de même hauteur." },
            { q: "Un cône a un volume de 50 cm³. Combien de millilitres d'eau peut-il contenir ?", options: ["50 mL", "5 mL", "500 mL", "0,5 mL"], answer: 0, why: "1 cm³ = 1 mL, donc 50 cm³ = 50 mL." },
          ],
          trap: "Oublier de diviser par 3, ou utiliser le diamètre à la place du rayon, ou prendre une arête latérale (ou une génératrice) à la place de la hauteur.",
          method: "Écrivez la formule avant de remplacer, puis vérifiez l'ordre de grandeur : le volume d'une pyramide ou d'un cône doit être plus petit que celui du pavé ou du cylindre qui l'entoure. Un résultat trop grand signale souvent un « ÷ 3 » oublié.",
        },
      ],
    },

    /* ================================================================== */
    /* ALGORITHMIQUE ET PROGRAMMATION                                       */
    /* ================================================================== */
    {
      id: 'algorithmique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'boucles-conditions',
          title: 'Boucles et instructions conditionnelles',
          minutes: 30,
          objectives: [
            "Écrire une séquence d'instructions et la faire exécuter.",
            "Utiliser une boucle « répéter n fois », « répéter jusqu'à ce que » ou « répéter indéfiniment ».",
            "Utiliser une instruction conditionnelle « si ... alors ... sinon ».",
          ],
          course: [
            {
              heading: "Algorithme, programme et script",
              paragraphs: [
                "Un algorithme est une suite d'instructions précises qui permet de résoudre un problème, comme une recette de cuisine ou un itinéraire. Un programme est un algorithme écrit dans un langage que l'ordinateur comprend.",
                "Au collège, on programme souvent avec Scratch : on assemble des blocs pour donner des ordres à un personnage, appelé lutin. Un ensemble de blocs emboîtés forme un script. Les instructions s'exécutent dans l'ordre, de haut en bas. Le script démarre par exemple avec le bloc « quand le drapeau vert est cliqué ».",
                "Exemple : « avancer de 100 pas », puis « tourner à droite de 90 degrés », puis « avancer de 50 pas ». Avec le stylo en position d'écriture, le lutin trace deux segments perpendiculaires.",
              ],
              box: { label: "Définition", text: "Un algorithme est une suite finie d'instructions qui permet de résoudre un problème. Un programme est un algorithme écrit dans un langage informatique ; dans Scratch, il est formé de scripts." },
            },
            {
              heading: "Les boucles : répéter sans réécrire",
              paragraphs: [
                "Pour tracer un carré, on pourrait écrire huit blocs : quatre fois « avancer de 100 pas » et quatre fois « tourner à droite de 90 degrés ». Il est plus simple d'utiliser une boucle : « répéter 4 fois » contenant « avancer de 100 pas » et « tourner à droite de 90 degrés ». Les instructions placées à l'intérieur de la boucle sont exécutées 4 fois.",
                "Pour un polygone régulier à n côtés, le lutin fait un tour complet (360°) en n virages égaux : il doit tourner de 360 ÷ n degrés à chaque sommet. Triangle équilatéral : 120° ; carré : 90° ; hexagone régulier : 60°.",
                "Il existe trois sortes de boucles : « répéter n fois » (un nombre de répétitions connu), « répéter jusqu'à ce que » (on répète tant que la condition est fausse, et on s'arrête dès qu'elle devient vraie) et « répéter indéfiniment » (la boucle ne s'arrête que si l'on arrête le programme).",
              ],
              box: { label: "Règle", text: "Pour tracer un polygone régulier à n côtés : répéter n fois (avancer de la longueur du côté, puis tourner de 360 ÷ n degrés)." },
            },
            {
              heading: "Les instructions conditionnelles",
              paragraphs: [
                "Une instruction conditionnelle permet au programme de faire un choix. Le bloc « si condition alors » exécute les instructions qu'il contient seulement si la condition est vraie. Le bloc « si condition alors ... sinon ... » exécute le premier groupe d'instructions si la condition est vraie, et le second sinon : un seul des deux groupes est exécuté.",
                "Une condition est une affirmation qui est vraie ou fausse : « réponse > 12 », « touche le bord ? », « x = 0 ». On peut les combiner avec « et », « ou », « non ». Exemple : si (réponse = 42) alors dire « Bravo ! » sinon dire « Perdu ! ».",
              ],
              box: { label: "À retenir", text: "Dans « si ... alors ... sinon », le programme teste la condition : si elle est vraie, il exécute la partie « alors » ; sinon, il exécute la partie « sinon ». Jamais les deux." },
            },
            {
              heading: "Combiner boucles et conditions",
              paragraphs: [
                "Dans un jeu, on place souvent une condition à l'intérieur d'une boucle. Par exemple : « répéter indéfiniment : avancer de 5 pas ; si (touche la couleur rouge) alors dire « Perdu ! » et tout arrêter ». À chaque tour de boucle, le programme vérifie la condition.",
                "Pour comprendre ou corriger un programme, exécutez-le à la main : notez sur une feuille ce que fait le lutin, instruction par instruction, tour de boucle par tour de boucle. C'est la meilleure façon de trouver une erreur.",
              ],
            },
          ],
          keyPoints: [
            "Les instructions d'un script s'exécutent dans l'ordre, de haut en bas.",
            "« répéter n fois » : un nombre de répétitions connu à l'avance.",
            "« répéter jusqu'à ce que » : on s'arrête dès que la condition devient vraie.",
            "Polygone régulier à n côtés : tourner de 360 ÷ n degrés à chaque sommet.",
            "« si ... alors ... sinon » : une seule des deux parties est exécutée.",
            "Exécuter un programme à la main permet de vérifier ce qu'il fait.",
          ],
          example: {
            statement: "On exécute le script suivant : « quand le drapeau vert est cliqué ; stylo en position d'écriture ; répéter 6 fois : avancer de 50 pas, tourner à droite de 60 degrés ». Quelle figure est tracée ? Quelle est la longueur totale du tracé ? Comment modifier le script pour tracer un triangle équilatéral de même côté ?",
            solution: [
              "Le lutin trace 6 segments de 50 pas et tourne 6 fois de 60°, soit 6 × 60 = 360° : il revient à son point de départ.",
              "Les 6 côtés ont la même longueur et les virages sont égaux : la figure est un hexagone régulier de côté 50 pas.",
              "Longueur totale du tracé : 6 × 50 = 300 pas.",
              "Pour un triangle équilatéral, il faut 3 côtés et des virages de 360 ÷ 3 = 120° : « répéter 3 fois : avancer de 50 pas, tourner à droite de 120 degrés ».",
              "Conclusion : un hexagone régulier de 300 pas de périmètre ; pour le triangle, répéter 3 fois avec un virage de 120°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Quelle figure trace le script « stylo en position d'écriture ; répéter 5 fois : avancer de 80 pas, tourner à droite de 72 degrés » ? Quelle est la longueur totale du tracé ? b) Écrivez la boucle qui trace un octogone régulier de côté 40 pas.",
              hint: "Calculez 5 × 72. Pour l'octogone, le nombre de côtés est 8 : divisez 360 par 8.",
              solution: [
                "a) Le lutin trace 5 côtés de 80 pas et tourne au total de 5 × 72 = 360° : c'est un pentagone régulier de côté 80 pas.",
                "Longueur totale : 5 × 80 = 400 pas.",
                "b) Un octogone a 8 côtés : il faut tourner de 360 ÷ 8 = 45° à chaque sommet.",
                "Script : « répéter 8 fois : avancer de 40 pas, tourner à droite de 45 degrés ».",
                "Conclusion : un pentagone régulier de 400 pas de périmètre ; l'octogone demande 8 répétitions avec un virage de 45°.",
              ],
            },
            {
              level: 2,
              statement: "Un programme demande « Quelle est votre note ? » et range la réponse dans « réponse ». Il exécute ensuite : « si (réponse < 10) alors dire « À retravailler » sinon (si (réponse < 15) alors dire « Bien » sinon dire « Très bien ») ». Qu'affiche le lutin pour les notes 8 ; 10 ; 14,5 ; 15 et 18 ?",
              hint: "Testez la première condition. Si elle est fausse, passez à la partie « sinon » et testez la deuxième condition. Attention aux cas d'égalité : 10 n'est pas inférieur à 10.",
              solution: [
                "Note 8 : 8 < 10 est vrai, le lutin dit « À retravailler ».",
                "Note 10 : 10 < 10 est faux ; on teste 10 < 15, qui est vrai : le lutin dit « Bien ».",
                "Note 14,5 : 14,5 < 10 est faux ; 14,5 < 15 est vrai : « Bien ».",
                "Note 15 : 15 < 10 est faux ; 15 < 15 est faux : « Très bien ».",
                "Note 18 : les deux conditions sont fausses : « Très bien ».",
                "Conclusion : 8 donne « À retravailler », 10 et 14,5 donnent « Bien », 15 et 18 donnent « Très bien ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Un lutin part du point d'abscisse x = -200. Son script est : « répéter jusqu'à ce que (abscisse x > 150) : ajouter 30 à x ». Combien de fois la boucle s'exécute-t-elle, et quelle est l'abscisse finale du lutin ? b) Quelle figure trace le script « répéter 5 fois : avancer de 100 pas, tourner à droite de 144 degrés » ? Combien de tours complets le lutin a-t-il faits sur lui-même à la fin ?",
              hint: "a) Après k passages, l'abscisse vaut -200 + 30 × k. Cherchez le premier k pour lequel elle dépasse 150. b) Calculez 5 × 144 et comparez à 360.",
              solution: [
                "a) Après k passages dans la boucle, l'abscisse vaut -200 + 30k. La boucle s'arrête dès que -200 + 30k > 150, c'est-à-dire 30k > 350.",
                "Pour k = 11 : 30 × 11 = 330, qui n'est pas supérieur à 350 (abscisse 130). Pour k = 12 : 30 × 12 = 360 > 350 (abscisse 160). La boucle s'exécute donc 12 fois.",
                "L'abscisse finale est -200 + 360 = 160.",
                "b) Le lutin trace 5 segments de 100 pas en tournant de 144° à chaque fois : la figure obtenue est une étoile à cinq branches.",
                "Il a tourné au total de 5 × 144 = 720° = 2 × 360° : il a fait deux tours complets sur lui-même et revient à son point et à son orientation de départ.",
                "Conclusion : 12 passages et une abscisse finale de 160 ; une étoile à cinq branches, tracée en deux tours complets.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les boucles et les conditions.",
            statements: [
              { text: "Dans « répéter 4 fois », les instructions placées à l'intérieur sont exécutées 4 fois.", true: true, why: "C'est le rôle de la boucle : éviter de réécrire quatre fois les mêmes blocs." },
              { text: "Pour tracer un triangle équilatéral, le lutin doit tourner de 60° à chaque sommet.", true: false, why: "Il doit tourner de 360 ÷ 3 = 120°. L'angle de 60° est l'angle intérieur du triangle, pas le virage du lutin." },
              { text: "Pour un polygone régulier à n côtés, le lutin tourne de 360 ÷ n degrés à chaque sommet.", true: true, why: "En n virages égaux, il fait exactement un tour complet de 360°." },
              { text: "Dans « si ... alors ... sinon », les deux parties sont exécutées l'une après l'autre.", true: false, why: "Une seule partie est exécutée : « alors » si la condition est vraie, « sinon » si elle est fausse." },
              { text: "Une boucle « répéter indéfiniment » ne s'arrête que si l'on arrête le programme.", true: true, why: "Elle n'a pas de condition de sortie." },
              { text: "« répéter jusqu'à ce que » répète tant que la condition est vraie.", true: false, why: "C'est l'inverse : on répète tant que la condition est fausse, et on s'arrête dès qu'elle devient vraie." },
              { text: "Les instructions d'un script s'exécutent dans l'ordre, de haut en bas.", true: true, why: "C'est pourquoi l'ordre des blocs change le résultat." },
            ],
          },
          quiz: [
            { q: "Que trace le script « répéter 3 fois : avancer de 50 pas, tourner à droite de 120 degrés » ?", options: ["un carré de côté 50", "un hexagone régulier", "un triangle équilatéral", "un segment de 150 pas de long"], answer: 2, why: "3 côtés égaux et 3 virages de 120° (3 × 120 = 360°) : c'est un triangle équilatéral de côté 50 pas." },
            { q: "De quel angle le lutin doit-il tourner à chaque sommet pour tracer un octogone régulier ?", options: ["8°", "45°", "60°", "135°"], answer: 1, why: "360 ÷ 8 = 45°. L'angle de 135° est l'angle intérieur de l'octogone, pas le virage du lutin." },
            { q: "Le script est « si (réponse > 12) alors dire « Gagné » sinon dire « Perdu » ». On répond 12. Que dit le lutin ?", options: ["« Gagné »", "Rien du tout", "« Gagné » puis « Perdu »", "« Perdu »"], answer: 3, why: "12 > 12 est faux, donc c'est la partie « sinon » qui est exécutée." },
            { q: "Quelle boucle s'arrête dès qu'une condition devient vraie ?", options: ["« répéter jusqu'à ce que »", "« répéter indéfiniment »", "« répéter 10 fois »", "« si ... alors ... sinon », placé seul"], answer: 0, why: "« répéter jusqu'à ce que » teste sa condition à chaque tour et s'arrête dès qu'elle est vraie." },
            { q: "Combien de fois le lutin avance-t-il avec « répéter 3 fois : (répéter 4 fois : avancer de 10 pas) » ?", options: ["7", "12", "34", "4"], answer: 1, why: "La boucle intérieure fait 4 pas d'avance, et elle est elle-même répétée 3 fois : 3 × 4 = 12." },
          ],
          trap: "Confondre l'angle dont tourne le lutin avec l'angle intérieur de la figure (tourner de 60° au lieu de 120° pour un triangle équilatéral), ou croire que « répéter jusqu'à ce que » répète tant que la condition est vraie.",
          method: "Avant de lancer un programme, prévoyez sur une feuille ce qu'il doit faire, puis exécutez-le à la main, bloc par bloc. Comparez ensuite avec l'exécution réelle : chaque différence vous montre où se trouve l'erreur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'variables',
          title: 'Utiliser des variables dans un programme',
          minutes: 30,
          objectives: [
            "Créer une variable, lui affecter une valeur et la modifier.",
            "Utiliser une variable dans une boucle ou une condition, par exemple comme compteur ou comme score.",
            "Exécuter un programme à la main en suivant les valeurs successives d'une variable.",
          ],
          course: [
            {
              heading: "Une variable, une boîte avec un nom",
              paragraphs: [
                "Une variable est comme une boîte qui porte un nom et qui contient une valeur. Le programme peut lire cette valeur, l'utiliser dans un calcul, ou la remplacer par une autre. Dans un jeu, le score, le nombre de vies ou le temps restant sont des variables.",
                "Dans Scratch, on crée une variable avec le bouton « Créer une variable » et on lui donne un nom clair, par exemple « score ». On utilise ensuite deux blocs principaux : « mettre score à 0 », qui remplace le contenu de la boîte, et « ajouter 1 à score », qui augmente la valeur de 1.",
              ],
              box: { label: "Définition", text: "Une variable est un nom associé à une valeur que le programme peut lire et modifier. Donner une valeur à une variable s'appelle une affectation." },
            },
            {
              heading: "L'affectation, une instruction qui remplace",
              paragraphs: [
                "Quand on exécute « mettre x à 5 », l'ancienne valeur de x est effacée et remplacée par 5. Une variable ne contient qu'une seule valeur à la fois.",
                "L'instruction « mettre x à x + 3 » peut surprendre : on calcule d'abord x + 3 avec l'ancienne valeur de x, puis on range le résultat dans x. Si x valait 5, il vaut ensuite 8. Ce n'est pas une équation de mathématiques : c'est un ordre donné à l'ordinateur, qui se lit « x prend la valeur x + 3 ».",
              ],
              box: { label: "À retenir", text: "« mettre x à x + 3 » : on calcule x + 3 avec l'ancienne valeur, puis ce résultat remplace l'ancienne valeur de x." },
            },
            {
              heading: "À quoi servent les variables ?",
              paragraphs: [
                "Une variable peut servir de compteur : on la met à 0 au départ, puis on lui ajoute 1 à chaque évènement compté (un tour de boucle, une pomme attrapée). Elle peut servir de score, de mémoire d'un résultat intermédiaire, ou de paramètre : une variable « côté » permet de tracer des carrés de tailles différentes avec le même script.",
                "Scratch possède aussi une variable toute prête, « réponse », qui contient ce que l'utilisateur a tapé après le bloc « demander ... et attendre ». On peut ainsi programmer un programme de calcul : demander un nombre, puis mettre résultat à (réponse × 3) + 5, puis dire résultat.",
              ],
            },
            {
              heading: "Suivre un programme à la main",
              paragraphs: [
                "Pour savoir ce que fait un programme, on construit un tableau de suivi : une colonne par variable, une ligne par instruction exécutée. On y écrit la valeur de chaque variable après chaque étape.",
                "Exemple : « mettre n à 0 ; mettre somme à 0 ; répéter 4 fois : ajouter 1 à n, ajouter n à somme ». Après le 1er tour : n = 1, somme = 1. Après le 2e : n = 2, somme = 3. Après le 3e : n = 3, somme = 6. Après le 4e : n = 4, somme = 10. Le programme calcule 1 + 2 + 3 + 4 = 10.",
              ],
            },
          ],
          keyPoints: [
            "Une variable est un nom associé à une valeur, qui peut changer pendant le programme.",
            "« mettre x à ... » remplace la valeur ; « ajouter ... à x » l'augmente.",
            "« mettre x à x + 3 » utilise l'ancienne valeur de x, puis la remplace.",
            "Un compteur est mis à 0 au départ, puis augmenté de 1 à chaque évènement compté.",
            "La variable « réponse » contient ce que l'utilisateur a tapé.",
            "Un tableau de suivi permet de connaître la valeur de chaque variable à chaque étape.",
          ],
          example: {
            statement: "On exécute : « mettre x à 5 ; mettre x à x × 2 ; ajouter 3 à x ; mettre y à x - 4 ». Quelles sont les valeurs finales de x et de y ?",
            solution: [
              "Après « mettre x à 5 » : x = 5.",
              "Après « mettre x à x × 2 » : on calcule 5 × 2 = 10, donc x = 10.",
              "Après « ajouter 3 à x » : x = 10 + 3 = 13.",
              "Après « mettre y à x - 4 » : y = 13 - 4 = 9, et x ne change pas.",
              "Conclusion : à la fin, x = 13 et y = 9.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On exécute : « mettre a à 4 ; mettre b à 7 ; mettre a à a + b ; mettre b à a - b ». Faites le tableau de suivi et donnez les valeurs finales de a et de b.",
              hint: "À chaque ligne, utilisez les valeurs que les variables ont juste avant cette instruction.",
              solution: [
                "Après « mettre a à 4 » : a = 4 (b n'existe pas encore).",
                "Après « mettre b à 7 » : a = 4, b = 7.",
                "Après « mettre a à a + b » : a = 4 + 7 = 11, b = 7.",
                "Après « mettre b à a - b » : b = 11 - 7 = 4, a = 11.",
                "Conclusion : à la fin, a = 11 et b = 4 (b a récupéré l'ancienne valeur de a).",
              ],
            },
            {
              level: 2,
              statement: "Voici un programme de calcul : « demander « Choisissez un nombre » et attendre ; mettre résultat à (réponse - 2) × 4 ; ajouter 8 à résultat ; dire résultat ». a) Qu'affiche le programme si l'on tape 5 ? Et -1 ? b) Notez x le nombre tapé. Exprimez le résultat en fonction de x et simplifiez. Que remarquez-vous ?",
              hint: "a) Suivez les instructions dans l'ordre. b) Le résultat vaut (x - 2) × 4 + 8 : développez, puis réduisez.",
              solution: [
                "a) Avec 5 : (5 - 2) × 4 = 12, puis 12 + 8 = 20. Le programme affiche 20.",
                "Avec -1 : (-1 - 2) × 4 = -3 × 4 = -12, puis -12 + 8 = -4. Le programme affiche -4.",
                "b) Le résultat vaut (x - 2) × 4 + 8 = 4x - 8 + 8 = 4x.",
                "On remarque que le programme renvoie toujours le quadruple du nombre choisi : 5 donne 20, -1 donne -4.",
                "Conclusion : 20 et -4 ; le résultat est toujours 4x.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On exécute : « mettre total à 0 ; mettre n à 1 ; répéter jusqu'à ce que (n > 10) : ajouter n à total, ajouter 2 à n ». a) Faites le tableau de suivi. Combien de tours la boucle fait-elle ? Quelles sont les valeurs finales de total et de n ? b) Comment modifier le programme pour qu'il calcule la somme des nombres pairs de 2 à 20 ? Quel résultat obtient-on ? c) Remarquez la valeur de total dans la question a) : quel lien a-t-elle avec le nombre de tours ?",
              hint: "a) La condition est testée avant chaque tour : la boucle continue tant que n n'est pas strictement supérieur à 10. b) Changez la valeur de départ de n et la condition d'arrêt.",
              solution: [
                "a) Départ : total = 0, n = 1. Tour 1 : total = 1, n = 3. Tour 2 : total = 4, n = 5. Tour 3 : total = 9, n = 7. Tour 4 : total = 16, n = 9. Tour 5 : total = 25, n = 11.",
                "Maintenant n = 11 > 10 : la boucle s'arrête. Elle a fait 5 tours, et à la fin total = 25 et n = 11. Le programme a calculé 1 + 3 + 5 + 7 + 9 = 25.",
                "b) On remplace « mettre n à 1 » par « mettre n à 2 » et la condition par (n > 20). Le programme calcule alors 2 + 4 + 6 + ... + 20.",
                "Résultat : 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20 = 110.",
                "c) La boucle a fait 5 tours et total = 25 = 5 × 5 : la somme des 5 premiers nombres impairs est égale à 5².",
                "Conclusion : 5 tours, total = 25 et n = 11 ; somme des nombres pairs de 2 à 20 : 110 ; et 25 = 5².",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Le programme est : « mettre x à 6 ; répéter 6 fois : si (x est pair) alors mettre x à x ÷ 2, sinon mettre x à 3 × x + 1 ». Remettez dans l'ordre les valeurs successives de x.",
            items: [
              "x = 6 (au départ)",
              "x = 3",
              "x = 10",
              "x = 5",
              "x = 16",
              "x = 8",
              "x = 4 (à la fin)",
            ],
          },
          quiz: [
            { q: "Après « mettre n à 7 » puis « ajouter 3 à n », que vaut n ?", options: ["10", "3", "7", "73"], answer: 0, why: "« ajouter 3 à n » augmente la valeur de n de 3 : 7 + 3 = 10." },
            { q: "Après « mettre x à 4 » puis « mettre x à x × x », que vaut x ?", options: ["8", "4", "16", "44"], answer: 2, why: "On calcule x × x avec l'ancienne valeur : 4 × 4 = 16, qui remplace 4." },
            { q: "Quelle instruction remet un score à zéro ?", options: ["« ajouter 0 à score »", "« ajouter -1 à score »", "« dire score »", "« mettre score à 0 »"], answer: 3, why: "« mettre score à 0 » remplace la valeur, quelle qu'elle soit, par 0. « ajouter 0 » ne change rien." },
            { q: "Où Scratch range-t-il ce que l'utilisateur tape après « demander ... et attendre » ?", options: ["Dans la variable score", "Dans « réponse »", "Dans le lutin", "Nulle part"], answer: 1, why: "La valeur tapée est rangée dans la variable toute prête « réponse »." },
            { q: "On exécute « mettre s à 0 ; répéter 3 fois : ajouter 5 à s ». Quelle est la valeur finale de s ?", options: ["5", "8", "3", "15"], answer: 3, why: "s vaut 5, puis 10, puis 15 : on a ajouté 5 trois fois." },
          ],
          trap: "Lire « mettre x à x + 3 » comme une équation impossible, ou utiliser la nouvelle valeur d'une variable alors que l'instruction utilise encore l'ancienne. Autre erreur fréquente : oublier d'initialiser un compteur à 0 au début du programme.",
          method: "Pour tout programme avec des variables, dressez un tableau de suivi : une colonne par variable, une ligne par instruction ou par tour de boucle. Ne sautez aucune ligne, même quand le calcul paraît évident.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'evenements-messages',
          title: 'Programmer des actions en parallèle : évènements et messages',
          minutes: 30,
          objectives: [
            "Déclencher une action par un évènement : clic sur le drapeau vert, touche pressée, clic sur un lutin.",
            "Écrire plusieurs scripts qui s'exécutent en parallèle.",
            "Coordonner des lutins par l'envoi et la réception de messages.",
          ],
          course: [
            {
              heading: "Les évènements déclenchent les scripts",
              paragraphs: [
                "Un évènement est quelque chose qui se produit pendant l'utilisation du programme : un clic sur le drapeau vert, l'appui sur une touche du clavier, un clic sur un lutin, la réception d'un message. Dans Scratch, chaque script commence par un bloc arrondi en haut, appelé bloc « chapeau », qui attend un évènement.",
                "Exemples de blocs chapeaux : « quand le drapeau vert est cliqué », « quand la touche espace est pressée », « quand ce lutin est cliqué », « quand je reçois message1 ». C'est comme une sonnette : rien ne se passe tant que personne n'appuie, puis l'action se déclenche. On parle de programmation évènementielle.",
              ],
              box: { label: "Définition", text: "Un évènement est une action (clic, touche pressée, message reçu...) qui déclenche l'exécution d'un script. Le bloc « chapeau » placé en haut du script indique quel évènement il attend." },
            },
            {
              heading: "Des scripts en parallèle",
              paragraphs: [
                "Un même lutin peut avoir plusieurs scripts, et un projet peut contenir plusieurs lutins. Quand un évènement se produit, tous les scripts qui l'attendent démarrent en même temps : ils s'exécutent en parallèle.",
                "Exemple : un chat a deux scripts qui commencent par « quand le drapeau vert est cliqué ». Le premier le fait avancer et rebondir sur les bords, en boucle. Le second change son costume toutes les 0,2 seconde pour donner l'impression qu'il marche. Au clic sur le drapeau, le chat se déplace et s'anime à la fois.",
              ],
              box: { label: "À retenir", text: "Tous les scripts déclenchés par le même évènement démarrent en même temps et s'exécutent en parallèle." },
            },
            {
              heading: "Les messages pour se coordonner",
              paragraphs: [
                "Pour qu'un lutin réagisse au bon moment à ce que fait un autre, on utilise des messages. Le bloc « envoyer à tous message » diffuse un message à tous les lutins ; chaque script qui commence par « quand je reçois message » démarre alors.",
                "Exemple : le lutin Chat dit « Bonjour ! » pendant 2 secondes, puis envoie le message « à toi ». Le lutin Chien a un script « quand je reçois à toi : dire « Salut ! » pendant 2 secondes ». Le chien parle donc juste après le chat. Si le chien démarrait aussi au drapeau vert, les deux parleraient en même temps.",
                "Le bloc « envoyer à tous message et attendre » envoie le message puis attend que tous les scripts déclenchés par ce message soient terminés avant de passer à l'instruction suivante.",
              ],
              box: { label: "Règle", text: "« envoyer à tous message » déclenche tous les scripts « quand je reçois message », puis le script continue tout de suite. Avec « et attendre », il ne continue qu'une fois ces scripts terminés." },
            },
            {
              heading: "Concevoir un petit jeu",
              paragraphs: [
                "Un jeu simple combine tout ce qui précède. Par exemple, un panier attrape des pommes : le panier se déplace avec les touches flèches (évènements « quand la touche flèche droite est pressée »), la pomme tombe en boucle (un script en parallèle), et quand la pomme touche le panier, on ajoute 1 au score et on envoie le message « nouvelle pomme » pour la faire réapparaître en haut.",
                "Pour mettre au point un tel programme, testez un script à la fois, donnez des noms clairs aux messages et aux variables, et vérifiez qu'à chaque « envoyer à tous » correspond bien un « quand je reçois » avec exactement le même nom de message.",
              ],
            },
          ],
          keyPoints: [
            "Un bloc chapeau attend un évènement : drapeau vert, touche pressée, clic sur le lutin, message reçu.",
            "Les scripts déclenchés par le même évènement s'exécutent en parallèle.",
            "« envoyer à tous message » déclenche les scripts « quand je reçois message ».",
            "« envoyer à tous message et attendre » attend la fin des scripts déclenchés.",
            "Les messages permettent d'organiser l'ordre des actions entre plusieurs lutins.",
          ],
          example: {
            statement: "Le lutin Chat a le script : « quand le drapeau vert est cliqué ; dire « Bonjour ! » pendant 2 secondes ; envoyer à tous « à toi » ». Le lutin Chien a le script : « quand je reçois « à toi » ; dire « Salut le chat ! » pendant 2 secondes ». Décrivez ce qui se passe quand on clique sur le drapeau vert. Que se passerait-il si le script du chien commençait par « quand le drapeau vert est cliqué » ?",
            solution: [
              "Au clic sur le drapeau vert, seul le script du chat démarre : le chat dit « Bonjour ! » pendant 2 secondes.",
              "Ensuite, le chat envoie le message « à toi » à tous les lutins.",
              "Le chien reçoit ce message : son script démarre et il dit « Salut le chat ! » pendant 2 secondes.",
              "Si le script du chien commençait par « quand le drapeau vert est cliqué », les deux scripts démarreraient en même temps, en parallèle : les deux lutins parleraient simultanément.",
              "Conclusion : le message sert à faire parler le chien après le chat, comme dans un vrai dialogue.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez le bloc chapeau à utiliser. a) Le lutin doit sauter quand le joueur appuie sur la barre d'espace. b) La partie doit commencer quand on lance le programme. c) Un bouton « Rejouer » doit relancer la partie quand on clique dessus. d) Un lutin Porte doit s'ouvrir quand un autre lutin lui envoie le message « ouvrir ».",
              hint: "Demandez-vous pour chaque situation quel évènement déclenche l'action : un clavier, un clic, le lancement ou un message.",
              solution: [
                "a) « quand la touche espace est pressée ».",
                "b) « quand le drapeau vert est cliqué ».",
                "c) Dans le lutin Bouton : « quand ce lutin est cliqué ».",
                "d) Dans le lutin Porte : « quand je reçois « ouvrir » ».",
                "Conclusion : chaque action est attachée au bloc chapeau de l'évènement qui la déclenche.",
              ],
            },
            {
              level: 2,
              statement: "Le lutin Chrono a le script : « quand le drapeau vert est cliqué ; mettre temps à 0 ; répéter 10 fois : attendre 1 seconde, ajouter 1 à temps ; envoyer à tous « fin » ». Le lutin Arbitre a le script : « quand je reçois « fin » ; dire « Temps écoulé ! » pendant 2 secondes ». a) Au bout de combien de secondes environ l'arbitre parle-t-il ? Que vaut alors la variable temps ? b) Que se passerait-il si l'on plaçait « envoyer à tous « fin » » juste après « mettre temps à 0 », avant la boucle ?",
              hint: "La boucle s'exécute 10 fois, et chaque tour dure environ 1 seconde. Le message n'est envoyé qu'une fois la boucle terminée.",
              solution: [
                "a) La boucle fait 10 tours d'environ 1 seconde chacun : elle dure environ 10 secondes. À chaque tour, temps augmente de 1, donc temps = 10 à la fin.",
                "Le message « fin » est envoyé juste après la boucle : l'arbitre dit « Temps écoulé ! » au bout d'environ 10 secondes, quand temps vaut 10.",
                "b) Le message serait envoyé dès le début : l'arbitre dirait « Temps écoulé ! » tout de suite, pendant que le chronomètre continue de compter jusqu'à 10 en parallèle.",
                "Conclusion : environ 10 secondes, avec temps = 10 ; la place de l'envoi du message décide du moment où l'arbitre réagit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un lutin Feu a le script : « quand le drapeau vert est cliqué ; répéter indéfiniment : basculer sur le costume vert, envoyer à tous « vert », attendre 5 secondes, basculer sur le costume orange, attendre 2 secondes, basculer sur le costume rouge, envoyer à tous « rouge », attendre 5 secondes ». a) Combien de temps dure un cycle complet du feu ? b) Entre la seconde 0 et la seconde 59 incluse, combien de fois le message « vert » est-il envoyé, si le premier envoi a lieu à la seconde 0 ? c) On veut qu'un lutin Voiture avance seulement quand le feu est vert. Proposez une solution qui utilise une variable « couleur », les messages et une condition.",
              hint: "a) Additionnez les durées d'attente. b) Listez les instants des envois : 0, puis toutes les durées d'un cycle. c) Faites changer la variable à la réception de chaque message, puis testez-la dans une boucle de la voiture.",
              solution: [
                "a) Un cycle dure 5 + 2 + 5 = 12 secondes (les autres blocs sont presque instantanés).",
                "b) Le message « vert » est envoyé aux secondes 0, 12, 24, 36 et 48. L'envoi suivant aurait lieu à la seconde 60, en dehors de l'intervalle : il y a donc 5 envois.",
                "c) Dans le lutin Voiture, on crée une variable couleur et trois scripts. « quand je reçois « vert » : mettre couleur à vert ». « quand je reçois « rouge » : mettre couleur à rouge ».",
                "Troisième script : « quand le drapeau vert est cliqué ; répéter indéfiniment : si (couleur = vert) alors avancer de 5 pas ». Ce script tourne en parallèle des deux autres.",
                "Pour l'orange, on peut ajouter dans le script du feu « envoyer à tous « orange » » et dans la voiture « quand je reçois « orange » : mettre couleur à orange » : la voiture s'arrête alors dès l'orange.",
                "Conclusion : un cycle dure 12 secondes, « vert » est envoyé 5 fois, et la voiture avance seulement quand la variable couleur vaut vert.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque bloc Scratch à son rôle.",
            pairs: [
              { left: "« quand le drapeau vert est cliqué »", right: "Démarre le script au lancement du programme" },
              { left: "« quand la touche espace est pressée »", right: "Démarre le script quand on appuie sur une touche du clavier" },
              { left: "« quand ce lutin est cliqué »", right: "Démarre le script quand on clique sur le lutin" },
              { left: "« envoyer à tous départ »", right: "Diffuse un message à tous les lutins et continue aussitôt" },
              { left: "« quand je reçois départ »", right: "Démarre le script à la réception d'un message" },
              { left: "« envoyer à tous départ et attendre »", right: "Diffuse un message et attend la fin des scripts qu'il déclenche" },
            ],
          },
          quiz: [
            { q: "À quoi sert un bloc « chapeau » ?", options: ["À répéter un groupe d'instructions plusieurs fois", "À créer une nouvelle variable dans le programme", "À déclencher un script", "À tracer avec le stylo"], answer: 2, why: "Le bloc chapeau, en haut d'un script, attend un évènement et déclenche le script quand il se produit." },
            { q: "Deux scripts commencent par « quand le drapeau vert est cliqué ». Que se passe-t-il au clic ?", options: ["Ils s'exécutent en même temps", "Seul le premier s'exécute", "Le second attend la fin du premier", "Aucun ne s'exécute"], answer: 0, why: "Tous les scripts déclenchés par le même évènement démarrent ensemble et s'exécutent en parallèle." },
            { q: "Quel bloc permet au lutin B de réagir au message « go » ?", options: ["« envoyer à tous go et attendre »", "« quand je reçois go »", "« attendre go »", "« dire go »"], answer: 1, why: "Le bloc chapeau « quand je reçois go » démarre le script dès que le message « go » est envoyé." },
            { q: "Le lutin A dit « Bonjour » pendant 2 secondes, puis envoie « parle ». Le lutin B dit « Salut » quand il reçoit « parle ». Au bout de combien de temps environ B parle-t-il ?", options: ["Tout de suite", "4 secondes", "Jamais", "2 secondes"], answer: 3, why: "Le message n'est envoyé qu'après les 2 secondes pendant lesquelles A parle : B parle environ 2 secondes après le début." },
            { q: "Quel évènement déclenche un script qui commence par « quand ce lutin est cliqué » ?", options: ["Un clic sur le drapeau vert", "Un appui sur la touche espace", "Un clic sur le lutin", "La réception d'un message"], answer: 2, why: "Ce bloc chapeau réagit au clic de la souris sur le lutin lui-même." },
          ],
          trap: "Démarrer tous les scripts au drapeau vert en espérant qu'ils s'exécutent l'un après l'autre : ils s'exécutent en parallèle. Pour imposer un ordre, il faut des messages. Autre erreur : un nom de message différent entre l'envoi et la réception.",
          method: "Avant de programmer, dressez la liste des lutins et, pour chacun, des évènements auxquels il doit réagir. Notez les messages sur une feuille avec une flèche de l'émetteur vers le récepteur : vous verrez tout de suite si un message est envoyé sans être reçu.",
        },
      ],
    },
  ],
}
