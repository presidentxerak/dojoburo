import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-3e',
  chapters: [
    /* ==================================================================== */
    /* DES ATOMES À L'UNIVERS                                                 */
    /* ==================================================================== */
    {
      id: 'atomes-univers',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'structure-atome',
          title: "La structure de l'atome : noyau et électrons",
          minutes: 30,
          objectives: [
            "Décrire la constitution d'un atome : un noyau formé de protons et de neutrons, entouré d'électrons.",
            "Utiliser le numéro atomique Z pour déterminer le nombre de protons et d'électrons d'un atome.",
            "Expliquer pourquoi un atome est électriquement neutre.",
            "Comparer les ordres de grandeur des tailles et des masses de l'atome, du noyau et de l'électron.",
          ],
          course: [
            {
              heading: "Un noyau et des électrons",
              paragraphs: [
                "Toute la matière qui vous entoure (l'air, l'eau, votre stylo, votre corps) est faite d'atomes. Un atome est constitué de deux parties : au centre, un noyau très petit et très dense ; autour, des électrons qui se déplacent en formant ce que l'on appelle le nuage électronique.",
                "Le noyau contient deux sortes de particules, regroupées sous le nom de nucléons : les protons, qui portent une charge électrique positive, et les neutrons, qui ne portent aucune charge (ils sont électriquement neutres, d'où leur nom). Les électrons portent une charge électrique négative.",
                "Ce modèle s'est construit progressivement : l'électron a été découvert par Joseph John Thomson en 1897, le noyau a été mis en évidence par Ernest Rutherford en 1911, et le neutron a été découvert par James Chadwick en 1932.",
              ],
              box: { label: "Définition", text: "Un atome est formé d'un noyau central, qui contient des protons (charge positive) et des neutrons (charge nulle), et d'électrons (charge négative) en mouvement autour du noyau. Protons et neutrons sont appelés nucléons." },
            },
            {
              heading: "Le numéro atomique et la neutralité de l'atome",
              paragraphs: [
                "Le nombre de protons du noyau s'appelle le numéro atomique, noté Z. C'est lui qui caractérise l'atome : tous les atomes de carbone ont 6 protons (Z = 6), tous les atomes d'oxygène en ont 8 (Z = 8), tous les atomes de fer en ont 26 (Z = 26).",
                "La charge d'un proton et celle d'un électron sont opposées : un proton porte la charge +e et un électron la charge -e, où e = 1,6 × 10⁻¹⁹ C (le coulomb, C, est l'unité de charge électrique). Cette valeur e s'appelle la charge élémentaire.",
                "Un atome contient autant d'électrons que de protons. Les charges positives du noyau compensent exactement les charges négatives des électrons : la charge totale de l'atome est nulle. Un atome de carbone possède donc 6 protons et 6 électrons ; un atome de fer, 26 protons et 26 électrons.",
              ],
              box: { label: "Propriété", text: "Un atome est électriquement neutre : il possède Z protons dans son noyau et Z électrons autour. La charge du noyau vaut Z × e et la charge totale des électrons vaut -Z × e." },
            },
            {
              heading: "Le nombre de nucléons et l'écriture du noyau",
              paragraphs: [
                "Le nombre total de nucléons (protons + neutrons) est noté A. Le nombre de neutrons se calcule donc par une soustraction : nombre de neutrons = A - Z. Par exemple, le noyau de l'atome de sodium le plus courant a A = 23 et Z = 11 : il contient 11 protons et 23 - 11 = 12 neutrons.",
                "On représente un noyau par le symbole de l'élément accompagné de A en haut à gauche et de Z en bas à gauche. Le carbone le plus courant s'écrit ainsi ¹²₆C : 6 protons, 12 - 6 = 6 neutrons, et l'atome possède 6 électrons. L'atome d'hydrogène le plus courant, ¹₁H, n'a qu'un proton et aucun neutron.",
              ],
              box: { label: "Formule", text: "Nombre de protons = Z ; nombre d'électrons de l'atome = Z ; nombre de nucléons = A ; nombre de neutrons = A - Z." },
            },
            {
              heading: "Des ordres de grandeur étonnants",
              paragraphs: [
                "Un atome est minuscule : son diamètre est de l'ordre de 10⁻¹⁰ m (un dixième de milliardième de mètre). Le noyau est encore environ 100 000 fois plus petit, de l'ordre de 10⁻¹⁵ m. Si le noyau avait la taille d'une bille de 1 mm de diamètre, l'atome entier aurait un diamètre de 100 m, celui d'un stade de football.",
                "Entre le noyau et les électrons, il n'y a rien : on dit que la matière a une structure lacunaire (elle est surtout faite de vide).",
                "Un proton et un neutron ont presque la même masse, environ 1,67 × 10⁻²⁷ kg. Un électron est environ 2 000 fois plus léger (9,11 × 10⁻³¹ kg). Presque toute la masse de l'atome est donc concentrée dans son noyau : la masse d'un atome est pratiquement égale à A × 1,67 × 10⁻²⁷ kg.",
              ],
              box: { label: "Repère", text: "Diamètre d'un atome : environ 10⁻¹⁰ m. Diamètre d'un noyau : environ 10⁻¹⁵ m. Masse d'un nucléon : environ 1,67 × 10⁻²⁷ kg. Masse d'un électron : environ 9,11 × 10⁻³¹ kg, négligeable devant celle du noyau." },
            },
          ],
          keyPoints: [
            "Un atome = un noyau (protons + neutrons) entouré d'électrons.",
            "Proton : charge +e ; électron : charge -e ; neutron : charge nulle ; e = 1,6 × 10⁻¹⁹ C.",
            "Z = nombre de protons = nombre d'électrons de l'atome : l'atome est électriquement neutre.",
            "A = nombre de nucléons ; nombre de neutrons = A - Z.",
            "Le noyau est environ 100 000 fois plus petit que l'atome : la matière est lacunaire.",
            "La masse de l'atome est presque entièrement concentrée dans le noyau.",
          ],
          example: {
            statement: "Le noyau de l'atome d'aluminium s'écrit ²⁷₁₃Al. Déterminer le nombre de protons, de neutrons et d'électrons de cet atome, puis calculer la charge de son noyau (e = 1,6 × 10⁻¹⁹ C).",
            solution: [
              "Le nombre en bas à gauche est Z = 13 : le noyau contient 13 protons.",
              "Le nombre en haut à gauche est A = 27 : le noyau contient 27 nucléons, donc 27 - 13 = 14 neutrons.",
              "L'atome est électriquement neutre : il possède autant d'électrons que de protons, soit 13 électrons.",
              "Charge du noyau : Q = Z × e = 13 × 1,6 × 10⁻¹⁹ = 2,08 × 10⁻¹⁸ C.",
              "Réponse : 13 protons, 14 neutrons, 13 électrons ; la charge du noyau vaut 2,08 × 10⁻¹⁸ C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le noyau de l'atome d'oxygène le plus courant s'écrit ¹⁶₈O. Donner le numéro atomique Z, le nombre de nucléons A, le nombre de protons, de neutrons et d'électrons de cet atome.",
              hint: "Z est écrit en bas à gauche du symbole et A en haut à gauche ; un atome a autant d'électrons que de protons.",
              solution: [
                "Z = 8 et A = 16.",
                "Nombre de protons = Z = 8.",
                "Nombre de neutrons = A - Z = 16 - 8 = 8.",
                "L'atome est neutre, donc il possède 8 électrons.",
                "Réponse : 8 protons, 8 neutrons et 8 électrons.",
              ],
            },
            {
              level: 2,
              statement: "Le noyau d'un atome porte une charge Q = 2,72 × 10⁻¹⁸ C. Ce noyau contient 35 nucléons. Données : e = 1,6 × 10⁻¹⁹ C ; extrait de la liste des éléments : soufre S (Z = 16), chlore Cl (Z = 17), argon Ar (Z = 18). 1) Calculer le nombre de protons du noyau. 2) Identifier l'élément. 3) Calculer le nombre de neutrons et le nombre d'électrons de l'atome.",
              hint: "Chaque proton porte la charge e : divisez la charge totale du noyau par e.",
              solution: [
                "1) Nombre de protons : Z = Q ÷ e = 2,72 × 10⁻¹⁸ ÷ (1,6 × 10⁻¹⁹) = 17.",
                "2) L'élément de numéro atomique 17 est le chlore, de symbole Cl.",
                "3) Nombre de neutrons = A - Z = 35 - 17 = 18.",
                "L'atome est électriquement neutre : il possède 17 électrons.",
                "Réponse : il s'agit d'un atome de chlore, avec 17 protons, 18 neutrons et 17 électrons.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une feuille de papier d'aluminium a une masse de 2,7 g. Document : le noyau de l'atome d'aluminium s'écrit ²⁷₁₃Al ; masse d'un nucléon : 1,67 × 10⁻²⁷ kg ; masse d'un électron : 9,11 × 10⁻³¹ kg. 1) Calculer la masse d'un noyau d'aluminium. 2) Calculer la masse des 13 électrons d'un atome et justifier que l'on peut négliger la masse des électrons. 3) En déduire le nombre d'atomes d'aluminium contenus dans la feuille.",
              hint: "Pensez à convertir 2,7 g en kilogrammes, puis divisez la masse de la feuille par la masse d'un atome.",
              solution: [
                "1) Le noyau contient A = 27 nucléons : m(noyau) = 27 × 1,67 × 10⁻²⁷ = 4,509 × 10⁻²⁶ kg, soit environ 4,5 × 10⁻²⁶ kg.",
                "2) m(électrons) = 13 × 9,11 × 10⁻³¹ = 1,18 × 10⁻²⁹ kg environ. Le rapport 4,5 × 10⁻²⁶ ÷ 1,18 × 10⁻²⁹ vaut environ 3 800 : les électrons sont des milliers de fois plus légers que le noyau, leur masse est négligeable.",
                "La masse d'un atome d'aluminium est donc pratiquement celle de son noyau : environ 4,5 × 10⁻²⁶ kg.",
                "3) Conversion : 2,7 g = 2,7 × 10⁻³ kg.",
                "Nombre d'atomes : N = 2,7 × 10⁻³ ÷ (4,509 × 10⁻²⁶) ≈ 6,0 × 10²².",
                "Réponse : la feuille contient environ 6,0 × 10²² atomes d'aluminium, soit environ 60 000 milliards de milliards d'atomes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa description.",
            pairs: [
              { left: "Proton", right: "Particule du noyau de charge positive +e" },
              { left: "Neutron", right: "Particule du noyau sans charge électrique" },
              { left: "Électron", right: "Particule de charge -e en mouvement autour du noyau" },
              { left: "Numéro atomique Z", right: "Nombre de protons du noyau" },
              { left: "Nombre de nucléons A", right: "Nombre total de protons et de neutrons" },
              { left: "Structure lacunaire", right: "La matière est surtout faite de vide" },
            ],
          },
          quiz: [
            {
              q: "De quoi est constitué le noyau d'un atome ?",
              options: ["De protons et d'électrons", "De protons et de neutrons", "De neutrons et d'électrons", "Uniquement d'électrons"],
              answer: 1,
              why: "Le noyau contient les nucléons, c'est-à-dire les protons et les neutrons ; les électrons sont autour du noyau.",
            },
            {
              q: "Un atome de magnésium a pour numéro atomique Z = 12. Combien possède-t-il d'électrons ?",
              options: ["24", "6", "0", "12"],
              answer: 3,
              why: "Un atome est électriquement neutre : il possède autant d'électrons que de protons, soit Z = 12.",
            },
            {
              q: "Un noyau s'écrit ⁵⁶₂₆Fe. Combien contient-il de neutrons ?",
              options: ["30", "26", "56", "82"],
              answer: 0,
              why: "Le nombre de neutrons vaut A - Z = 56 - 26 = 30.",
            },
            {
              q: "Où se trouve presque toute la masse d'un atome ?",
              options: ["Dans le nuage électronique", "Dans le vide entre noyau et électrons", "Dans le noyau", "Elle est répartie également partout"],
              answer: 2,
              why: "Les nucléons sont environ 2 000 fois plus lourds que les électrons : la masse est concentrée dans le noyau.",
            },
            {
              q: "Le noyau d'un atome est environ combien de fois plus petit que l'atome lui-même ?",
              options: ["10 fois", "100 000 fois", "1 000 fois", "2 fois"],
              answer: 1,
              why: "Le diamètre de l'atome est de l'ordre de 10⁻¹⁰ m et celui du noyau de l'ordre de 10⁻¹⁵ m, soit un rapport de 100 000.",
            },
          ],
          trap: "Croire que le nombre d'électrons est égal au nombre de nucléons A : dans un atome, le nombre d'électrons est égal au nombre de protons Z, pas à A.",
          method: "Pour chaque atome, construisez un petit tableau à trois colonnes (protons, neutrons, électrons) : remplissez d'abord les protons avec Z, puis les électrons avec Z, et enfin les neutrons avec A - Z. Vérifiez que protons + neutrons redonne bien A.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'elements-tableau-periodique',
          title: "Les éléments chimiques et le tableau périodique",
          minutes: 30,
          objectives: [
            "Définir un élément chimique par son numéro atomique Z.",
            "Utiliser le tableau périodique pour retrouver le symbole, le numéro atomique et la famille d'un élément.",
            "Exploiter la formule chimique d'une molécule pour dénombrer ses atomes et ses éléments.",
            "Savoir que les éléments chimiques se conservent au cours d'une transformation chimique.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un élément chimique ?",
              paragraphs: [
                "Un élément chimique est l'ensemble des atomes (et des ions) qui ont le même numéro atomique Z, c'est-à-dire le même nombre de protons dans leur noyau. L'élément carbone regroupe ainsi tout ce qui possède un noyau à 6 protons, que ce soit dans le diamant, dans le graphite de votre crayon ou dans le dioxyde de carbone de l'air.",
                "Chaque élément est désigné par un symbole : une lettre majuscule, parfois suivie d'une lettre minuscule. H pour l'hydrogène, C pour le carbone, O pour l'oxygène, N pour l'azote, Cl pour le chlore, Ca pour le calcium. Certains symboles viennent du nom latin : Na (natrium) pour le sodium, K (kalium) pour le potassium, Fe (ferrum) pour le fer, Cu (cuprum) pour le cuivre, Ag (argentum) pour l'argent, Au (aurum) pour l'or.",
                "On connaît aujourd'hui 118 éléments. Environ 90 existent à l'état naturel sur Terre ; les autres ont été produits en laboratoire.",
              ],
              box: { label: "Définition", text: "Un élément chimique est caractérisé par son numéro atomique Z (nombre de protons du noyau). Il est représenté par un symbole dont la première lettre est toujours une majuscule." },
            },
            {
              heading: "Le tableau périodique des éléments",
              paragraphs: [
                "En 1869, le chimiste russe Dmitri Mendeleïev classe les éléments connus à son époque (une soixantaine) en un tableau. Il laisse des cases vides et prédit l'existence et les propriétés d'éléments encore inconnus, comme le gallium et le germanium, découverts quelques années plus tard : c'est la preuve que sa classification a du sens.",
                "Dans le tableau actuel, les éléments sont rangés par numéro atomique Z croissant, de l'hydrogène (Z = 1) à l'oganesson (Z = 118). Le tableau comporte 7 lignes, appelées périodes, et 18 colonnes. Chaque case indique au moins le symbole et le numéro atomique de l'élément.",
                "La majorité des éléments sont des métaux (fer, cuivre, zinc, aluminium, or) ; ils occupent la gauche et le centre du tableau. Les non-métaux (carbone, azote, oxygène, soufre, chlore) se trouvent à droite.",
              ],
            },
            {
              heading: "Les familles chimiques",
              paragraphs: [
                "Les éléments d'une même colonne forment une famille : ils ont des propriétés chimiques semblables. La colonne 1 (sauf l'hydrogène) regroupe les métaux alcalins (lithium, sodium, potassium), très réactifs : le sodium réagit vivement avec l'eau.",
                "La colonne 17 regroupe les halogènes (fluor, chlore, brome, iode). La colonne 18 regroupe les gaz nobles (hélium, néon, argon) : ils ne réagissent presque pas avec les autres éléments et existent sous forme d'atomes isolés. C'est pour cela que l'on remplit certains ballons avec de l'hélium et certaines enseignes lumineuses avec du néon.",
              ],
              box: { label: "À retenir", text: "Ligne du tableau = période. Colonne = famille d'éléments aux propriétés chimiques semblables. Exemples : colonne 1 les alcalins, colonne 17 les halogènes, colonne 18 les gaz nobles." },
            },
            {
              heading: "Molécules, formules et conservation des éléments",
              paragraphs: [
                "Les atomes peuvent s'assembler pour former des molécules. La formule d'une molécule indique les éléments présents par leurs symboles et le nombre d'atomes de chaque élément par un indice placé en bas à droite (l'indice 1 ne s'écrit pas). H₂O contient 2 atomes d'hydrogène et 1 atome d'oxygène ; CO₂ contient 1 atome de carbone et 2 atomes d'oxygène ; CH₄ (le méthane) contient 1 atome de carbone et 4 atomes d'hydrogène.",
                "Lors d'une transformation chimique, les atomes se réarrangent pour former de nouvelles espèces, mais aucun atome n'apparaît ni ne disparaît : les éléments chimiques se conservent. Quand le carbone brûle dans le dioxygène, les atomes de carbone se retrouvent dans le dioxyde de carbone formé. De même, l'élément cuivre peut passer du métal cuivre aux ions cuivre II d'une solution bleue, sans jamais disparaître.",
              ],
              box: { label: "Propriété", text: "Au cours d'une transformation chimique, les éléments chimiques se conservent : on retrouve dans les produits exactement les mêmes éléments, et le même nombre d'atomes de chaque élément, que dans les réactifs consommés." },
            },
          ],
          keyPoints: [
            "Un élément chimique est défini par son numéro atomique Z.",
            "Un symbole commence par une majuscule : C, Ca, Cl, Cu sont quatre éléments différents.",
            "Le tableau périodique range les 118 éléments par Z croissant (Mendeleïev, 1869).",
            "Une ligne est une période ; une colonne est une famille aux propriétés chimiques semblables.",
            "Dans une formule, l'indice en bas à droite donne le nombre d'atomes de l'élément qui le précède.",
            "Les éléments chimiques se conservent au cours d'une transformation chimique.",
          ],
          example: {
            statement: "La molécule d'éthanol (l'alcool) a pour formule C₂H₆O. Quels éléments contient-elle, combien d'atomes de chaque élément, et combien d'atomes au total ?",
            solution: [
              "On lit les symboles : C (carbone), H (hydrogène) et O (oxygène). La molécule contient donc 3 éléments différents.",
              "L'indice 2 après C indique 2 atomes de carbone.",
              "L'indice 6 après H indique 6 atomes d'hydrogène.",
              "O n'a pas d'indice : il y a 1 atome d'oxygène.",
              "Total : 2 + 6 + 1 = 9 atomes.",
              "Réponse : 3 éléments (carbone, hydrogène, oxygène) ; 2 atomes C, 6 atomes H, 1 atome O, soit 9 atomes au total.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Extrait du tableau périodique : H (Z = 1), He (Z = 2), C (Z = 6), N (Z = 7), O (Z = 8), Na (Z = 11), Cl (Z = 17), Fe (Z = 26). Identifier l'élément dont le noyau contient : a) 7 protons ; b) 26 protons ; c) 2 protons. Donner son nom et son symbole.",
              hint: "Le nombre de protons est le numéro atomique Z : cherchez la valeur de Z dans l'extrait.",
              solution: [
                "a) Z = 7 : c'est l'azote, de symbole N.",
                "b) Z = 26 : c'est le fer, de symbole Fe.",
                "c) Z = 2 : c'est l'hélium, de symbole He.",
                "Réponse : a) azote N ; b) fer Fe ; c) hélium He.",
              ],
            },
            {
              level: 2,
              statement: "Le glucose, sucre utilisé par nos cellules, a pour formule C₆H₁₂O₆. 1) Nommer les éléments présents. 2) Donner le nombre d'atomes de chaque élément. 3) Calculer le nombre total d'atomes de la molécule. 4) Lors de la respiration, le glucose se transforme en dioxyde de carbone CO₂ et en eau H₂O. Justifier que cela est compatible avec la conservation des éléments.",
              hint: "Lisez chaque symbole suivi de son indice ; pour la question 4, comparez les éléments présents au départ et à l'arrivée (sans oublier le dioxygène de la respiration).",
              solution: [
                "1) Les éléments sont le carbone (C), l'hydrogène (H) et l'oxygène (O).",
                "2) 6 atomes de carbone, 12 atomes d'hydrogène et 6 atomes d'oxygène.",
                "3) Total : 6 + 12 + 6 = 24 atomes.",
                "4) Les réactifs (glucose et dioxygène O₂) contiennent les éléments C, H et O ; les produits (CO₂ et H₂O) contiennent aussi C, H et O. Aucun élément n'apparaît ni ne disparaît.",
                "Réponse : 3 éléments, 24 atomes ; la transformation est compatible avec la conservation des éléments.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : extrait du tableau périodique. Période 2 : Li (3), Be (4), B (5), C (6), N (7), O (8), F (9), Ne (10). Période 3 : Na (11), Mg (12), Al (13), Si (14), P (15), S (16), Cl (17), Ar (18). 1) Combien d'électrons possède un atome de soufre ? 2) Quel élément de l'extrait appartient à la même famille que le fluor ? Que peut-on dire de leurs propriétés chimiques ? 3) Le néon est utilisé dans des enseignes lumineuses. À quelle famille appartient-il et pourquoi le trouve-t-on sous forme d'atomes isolés ? 4) Un atome possède 13 protons et 14 neutrons. Identifier l'élément et donner le nombre de nucléons de son noyau.",
              hint: "Les éléments d'une même famille sont dans la même colonne, donc à la même place dans les périodes 2 et 3.",
              solution: [
                "1) Le soufre a pour numéro atomique Z = 16 : l'atome, neutre, possède 16 électrons.",
                "2) Le fluor est l'avant-dernier de la période 2 ; dans la période 3, l'élément situé dans la même colonne est le chlore (Cl). Fluor et chlore appartiennent à la famille des halogènes : ils ont des propriétés chimiques semblables.",
                "3) Le néon est le dernier élément de la période 2 : il est dans la colonne 18, celle des gaz nobles. Ces éléments ne réagissent presque pas, c'est pourquoi le néon existe sous forme d'atomes isolés.",
                "4) 13 protons signifie Z = 13 : c'est l'aluminium (Al). Nombre de nucléons : A = 13 + 14 = 27.",
                "Réponse : 16 électrons ; le chlore, propriétés semblables ; gaz noble peu réactif ; aluminium avec A = 27.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les éléments.",
            statements: [
              { text: "Un élément chimique est défini par son nombre de neutrons.", true: false, why: "Il est défini par son nombre de protons, le numéro atomique Z." },
              { text: "Co et CO désignent la même chose.", true: false, why: "Co est l'élément cobalt ; CO est la molécule de monoxyde de carbone, formée d'un atome C et d'un atome O." },
              { text: "Dans le tableau périodique actuel, les éléments sont rangés par numéro atomique croissant.", true: true, why: "Le classement moderne suit Z, de 1 (hydrogène) à 118." },
              { text: "Les éléments d'une même colonne ont des propriétés chimiques semblables.", true: true, why: "Une colonne forme une famille chimique, comme les halogènes ou les gaz nobles." },
              { text: "Le symbole du sodium est So.", true: false, why: "C'est Na, du nom latin natrium." },
              { text: "Lors d'une transformation chimique, de nouveaux éléments apparaissent.", true: false, why: "Les éléments se conservent : les atomes se réarrangent seulement en de nouvelles molécules." },
              { text: "La molécule H₂O contient trois atomes.", true: true, why: "Elle contient 2 atomes d'hydrogène et 1 atome d'oxygène." },
            ],
          },
          quiz: [
            {
              q: "Qu'ont en commun tous les atomes d'un même élément chimique ?",
              options: ["Le même nombre de neutrons", "La même masse exacte", "Le même nombre de protons", "Le même état physique"],
              answer: 2,
              why: "Un élément est défini par son numéro atomique Z, c'est-à-dire le nombre de protons du noyau.",
            },
            {
              q: "Quel est le symbole du fer ?",
              options: ["Fe", "F", "Fr", "I"],
              answer: 0,
              why: "Le symbole Fe vient du latin ferrum ; F est le fluor.",
            },
            {
              q: "Comment appelle-t-on une ligne du tableau périodique ?",
              options: ["Une famille", "Une colonne", "Un groupe de gaz", "Une période"],
              answer: 3,
              why: "Les lignes sont les périodes ; les colonnes regroupent les familles.",
            },
            {
              q: "Combien d'atomes d'oxygène contient la molécule de dioxyde de carbone CO₂ ?",
              options: ["1", "2", "3", "0"],
              answer: 1,
              why: "L'indice 2 placé après O indique 2 atomes d'oxygène.",
            },
            {
              q: "Le néon, l'argon et l'hélium sont dans la colonne 18. Quelle propriété partagent-ils ?",
              options: ["Ce sont des métaux", "Ils réagissent violemment avec l'eau", "Ils ne réagissent presque pas", "Ce sont des halogènes"],
              answer: 2,
              why: "Ce sont des gaz nobles, très peu réactifs, présents sous forme d'atomes isolés.",
            },
          ],
          trap: "Confondre la majuscule et la minuscule d'un symbole : Co (cobalt) est un élément, alors que CO est une molécule formée d'un atome de carbone et d'un atome d'oxygène.",
          method: "Pour lire une formule, avancez symbole par symbole : chaque majuscule commence un nouvel élément, et le chiffre en indice juste après donne le nombre d'atomes (aucun chiffre signifie 1). Faites la somme à la fin pour vérifier le total.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'matiere-univers',
          title: "La matière dans l'Univers : formation des éléments",
          minutes: 30,
          objectives: [
            "Décrire la structure de l'Univers et du système solaire avec des ordres de grandeur de distances.",
            "Utiliser l'année-lumière comme unité de distance et relier distance et temps de parcours de la lumière.",
            "Expliquer l'origine des éléments chimiques : Big Bang, étoiles et explosions d'étoiles.",
            "Savoir que les éléments présents sur Terre et dans le vivant sont les mêmes que dans le reste de l'Univers.",
          ],
          course: [
            {
              heading: "Du système solaire aux galaxies",
              paragraphs: [
                "La Terre est l'une des huit planètes qui tournent autour du Soleil, une étoile parmi d'autres. La distance Terre-Soleil vaut environ 150 millions de kilomètres. Le Soleil et ses planètes forment le système solaire, qui appartient à une galaxie, la Voie lactée.",
                "La Voie lactée est un immense ensemble de plus de cent milliards d'étoiles, en forme de disque d'environ 100 000 années-lumière de diamètre. L'Univers contient lui-même des milliards de galaxies ; la grande galaxie la plus proche, Andromède, est située à environ 2,5 millions d'années-lumière.",
                "Comme pour l'atome, la matière dans l'Univers est lacunaire : entre les étoiles et entre les galaxies, il y a surtout du vide.",
              ],
            },
            {
              heading: "L'année-lumière, une unité de distance",
              paragraphs: [
                "La lumière se propage dans le vide à la vitesse c = 300 000 km/s, soit 3,00 × 10⁸ m/s. Une année-lumière (symbole : al) est la distance parcourue par la lumière dans le vide en une année. Ce n'est pas une durée mais une distance : 1 al ≈ 9,46 × 10¹² km, soit près de 10 000 milliards de kilomètres.",
                "La lumière du Soleil met environ 8 minutes et 20 secondes à nous parvenir. L'étoile la plus proche après le Soleil, Proxima du Centaure, est à environ 4,2 al : sa lumière met 4,2 ans pour arriver jusqu'à nous.",
                "Conséquence étonnante : regarder loin, c'est regarder dans le passé. La galaxie d'Andromède nous apparaît telle qu'elle était il y a environ 2,5 millions d'années, quand sa lumière est partie.",
              ],
              box: { label: "Formule", text: "Distance parcourue par la lumière : d = c × t, avec c = 3,00 × 10⁸ m/s. Une année-lumière est la distance parcourue par la lumière en un an : 1 al ≈ 9,46 × 10¹⁵ m ≈ 9,46 × 10¹² km." },
            },
            {
              heading: "Le Big Bang et les premiers éléments",
              paragraphs: [
                "Selon le modèle du Big Bang, l'Univers était il y a environ 13,8 milliards d'années extrêmement chaud et dense ; depuis, il est en expansion et se refroidit. Dans les toutes premières minutes se sont formés les noyaux des éléments les plus légers : l'hydrogène et l'hélium (avec un peu de lithium).",
                "Environ 380 000 ans plus tard, l'Univers s'est assez refroidi pour que les noyaux capturent des électrons et forment les premiers atomes. Aujourd'hui encore, la matière ordinaire de l'Univers est constituée en masse d'environ trois quarts d'hydrogène et d'un quart d'hélium ; tous les autres éléments réunis n'en représentent qu'une petite fraction.",
              ],
              box: { label: "Repère", text: "Big Bang : il y a environ 13,8 milliards d'années. Premiers noyaux (hydrogène, hélium) : dans les premières minutes. Formation du système solaire : il y a environ 4,6 milliards d'années." },
            },
            {
              heading: "Les étoiles, usines à éléments",
              paragraphs: [
                "Les éléments plus lourds que l'hélium ont été fabriqués plus tard, au cœur des étoiles. Une étoile est une boule de gaz très chaud où des noyaux légers fusionnent pour former des noyaux plus lourds, en libérant beaucoup d'énergie : c'est la fusion nucléaire. Le Soleil transforme ainsi de l'hydrogène en hélium.",
                "Les étoiles beaucoup plus massives que le Soleil fabriquent ensuite du carbone, de l'oxygène, du silicium, jusqu'au fer. Les éléments plus lourds que le fer (comme l'or ou l'uranium) se forment lors d'événements violents : l'explosion d'étoiles massives en fin de vie (les supernovae) et la fusion d'étoiles à neutrons. Ces explosions dispersent les éléments dans l'espace.",
                "C'est à partir d'un nuage de gaz et de poussières enrichi par ces générations d'étoiles que le Soleil, la Terre et les autres planètes se sont formés, il y a environ 4,6 milliards d'années. Le carbone de vos cellules, l'oxygène que vous respirez ou le fer de votre sang ont donc été fabriqués dans des étoiles : on dit que nous sommes faits de poussières d'étoiles, expression rendue célèbre par l'astrophysicien Hubert Reeves.",
              ],
              box: { label: "À retenir", text: "Hydrogène et hélium : formés lors du Big Bang. Éléments jusqu'au fer : formés par fusion au cœur des étoiles. Éléments plus lourds que le fer : formés lors des explosions d'étoiles massives et des fusions d'étoiles à neutrons. Les mêmes éléments se retrouvent partout dans l'Univers." },
            },
          ],
          keyPoints: [
            "Système solaire, galaxie (la Voie lactée), Univers : la matière est surtout entourée de vide.",
            "L'année-lumière est une distance : 1 al ≈ 9,46 × 10¹² km. La lumière va à 3,00 × 10⁸ m/s.",
            "Regarder loin, c'est voir les astres tels qu'ils étaient lorsque leur lumière est partie.",
            "Le Big Bang (il y a environ 13,8 milliards d'années) a produit l'hydrogène et l'hélium.",
            "Les autres éléments sont fabriqués dans les étoiles et lors de leurs explosions.",
            "La Terre et les êtres vivants sont faits des mêmes éléments que le reste de l'Univers.",
          ],
          example: {
            statement: "La distance Terre-Soleil vaut environ 1,5 × 10¹¹ m. Calculer la durée que met la lumière du Soleil pour atteindre la Terre (c = 3,0 × 10⁸ m/s). Exprimer le résultat en secondes, puis en minutes et secondes.",
            solution: [
              "On utilise d = c × t, donc t = d ÷ c.",
              "t = 1,5 × 10¹¹ ÷ (3,0 × 10⁸) = 0,5 × 10³ = 500 s.",
              "Conversion : 500 s = 8 × 60 s + 20 s, car 8 × 60 = 480 et 500 - 480 = 20.",
              "Réponse : la lumière du Soleil met environ 500 s, soit 8 min 20 s, pour nous parvenir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer du plus petit au plus grand les objets suivants : la Voie lactée, la Terre, le système solaire, l'Univers observable, le Soleil.",
              hint: "Partez de la planète sur laquelle vous vivez et élargissez progressivement.",
              solution: [
                "La Terre est une planète, plus petite que le Soleil (étoile).",
                "Le système solaire contient le Soleil et ses planètes.",
                "La Voie lactée est une galaxie qui contient le système solaire et plus de cent milliards d'étoiles.",
                "L'Univers observable contient des milliards de galaxies.",
                "Réponse : la Terre, le Soleil, le système solaire, la Voie lactée, l'Univers observable.",
              ],
            },
            {
              level: 2,
              statement: "La Lune est située à environ 384 000 km de la Terre. 1) Convertir cette distance en mètres. 2) Calculer la durée mise par la lumière pour aller de la Lune à la Terre (c = 3,00 × 10⁸ m/s). 3) Proxima du Centaure est à 4,2 al. Sachant que 1 al ≈ 9,46 × 10¹² km, calculer cette distance en kilomètres.",
              hint: "1 km = 1 000 m ; utilisez t = d ÷ c pour la question 2.",
              solution: [
                "1) 384 000 km = 384 000 × 1 000 m = 3,84 × 10⁸ m.",
                "2) t = d ÷ c = 3,84 × 10⁸ ÷ (3,00 × 10⁸) = 1,28 s.",
                "3) d = 4,2 × 9,46 × 10¹² = 39,732 × 10¹² km ≈ 4,0 × 10¹³ km.",
                "Réponse : 3,84 × 10⁸ m ; la lumière met environ 1,28 s ; Proxima est à environ 4,0 × 10¹³ km.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : « Le fer contenu dans l'hémoglobine de notre sang, le calcium de nos os et l'oxygène que nous respirons ont été formés au cœur d'étoiles massives. L'or de nos bijoux provient d'explosions d'étoiles ou de fusions d'étoiles à neutrons. Seul l'hydrogène, présent par exemple dans l'eau de notre corps, date du Big Bang. » 1) Où et quand l'hydrogène s'est-il formé ? 2) Expliquer comment des éléments fabriqués dans des étoiles lointaines ont pu se retrouver sur Terre. 3) La galaxie d'Andromède est à 2,5 millions d'années-lumière. Un élève affirme : « Si Andromède disparaissait aujourd'hui, nous continuerions à la voir. » Justifier cette affirmation.",
              hint: "Rappelez-vous comment le système solaire s'est formé, et ce que signifie une distance exprimée en années-lumière.",
              solution: [
                "1) L'hydrogène s'est formé lors du Big Bang, dans les premières minutes de l'Univers, il y a environ 13,8 milliards d'années.",
                "2) En fin de vie, les étoiles massives explosent (supernovae) et dispersent dans l'espace les éléments qu'elles ont fabriqués. Ces éléments ont enrichi le nuage de gaz et de poussières à partir duquel le Soleil et la Terre se sont formés il y a environ 4,6 milliards d'années.",
                "3) Andromède est à 2,5 millions d'années-lumière : sa lumière met 2,5 millions d'années pour nous parvenir. La lumière que nous recevons aujourd'hui est partie il y a 2,5 millions d'années.",
                "Si la galaxie disparaissait aujourd'hui, la lumière déjà émise continuerait d'arriver pendant encore 2,5 millions d'années.",
                "Réponse : l'affirmation est juste, car nous voyons Andromède telle qu'elle était il y a 2,5 millions d'années.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la matière dans l'ordre chronologique.",
            items: [
              "Big Bang : l'Univers est très chaud et très dense",
              "Formation des noyaux d'hydrogène et d'hélium",
              "Formation des premiers atomes, quand les noyaux capturent des électrons",
              "Naissance des premières étoiles, qui fabriquent des éléments plus lourds",
              "Explosion d'étoiles massives qui dispersent les éléments dans l'espace",
              "Formation du Soleil et de la Terre à partir d'un nuage enrichi",
              "Apparition de la vie sur Terre, faite d'éléments venus des étoiles",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une année-lumière ?",
              options: ["Une durée d'un an", "Une distance", "Une vitesse", "Une énergie"],
              answer: 1,
              why: "C'est la distance parcourue par la lumière dans le vide en un an, environ 9,46 × 10¹² km.",
            },
            {
              q: "Quels éléments se sont formés lors du Big Bang ?",
              options: ["Le fer et l'or", "Le carbone et l'oxygène", "L'uranium et le plomb", "L'hydrogène et l'hélium"],
              answer: 3,
              why: "Les premières minutes ont produit les noyaux légers, essentiellement l'hydrogène et l'hélium.",
            },
            {
              q: "Où le carbone et l'oxygène de notre corps ont-ils été fabriqués ?",
              options: ["Au cœur d'étoiles", "Dans le noyau de la Terre", "Lors du Big Bang", "Dans les océans primitifs"],
              answer: 0,
              why: "Ces éléments sont formés par fusion nucléaire au cœur des étoiles.",
            },
            {
              q: "Combien de temps la lumière du Soleil met-elle environ pour atteindre la Terre ?",
              options: ["8 secondes", "8 heures", "8 minutes et 20 secondes", "1 seconde"],
              answer: 2,
              why: "t = 1,5 × 10¹¹ m ÷ 3,0 × 10⁸ m/s = 500 s, soit 8 min 20 s.",
            },
            {
              q: "Comment s'appelle notre galaxie ?",
              options: ["Andromède", "La Voie lactée", "Proxima", "Le système solaire"],
              answer: 1,
              why: "Notre galaxie est la Voie lactée ; Andromède est une galaxie voisine et Proxima une étoile.",
            },
          ],
          trap: "Prendre l'année-lumière pour une durée : c'est une distance, celle que parcourt la lumière en un an.",
          method: "Pour un calcul de distance ou de durée avec la lumière, écrivez d'abord la relation d = c × t, convertissez toutes les distances en mètres et les durées en secondes, puis utilisez les puissances de 10 sur la calculatrice (touche ×10ˣ ou EXP).",
        },
      ],
    },
    /* ==================================================================== */
    /* IONS, ACIDES ET BASES                                                  */
    /* ==================================================================== */
    {
      id: 'ions-ph',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ions',
          title: "Les ions : des atomes qui ont gagné ou perdu des électrons",
          minutes: 30,
          objectives: [
            "Définir un ion comme un atome ou un groupe d'atomes ayant gagné ou perdu un ou plusieurs électrons.",
            "Distinguer un cation d'un anion à partir de sa formule.",
            "Déterminer le nombre d'électrons d'un ion monoatomique à partir du numéro atomique.",
            "Écrire la formule d'une solution ionique électriquement neutre.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un ion ?",
              paragraphs: [
                "Un atome est électriquement neutre : il possède autant d'électrons que de protons. Mais il peut gagner ou perdre un ou plusieurs électrons ; il devient alors un ion, qui porte une charge électrique. Le noyau, lui, ne change pas : le nombre de protons reste le même, l'élément chimique reste le même.",
                "Si l'atome perd des électrons, il a plus de charges positives (protons) que de charges négatives (électrons) : l'ion est positif, on l'appelle un cation. Si l'atome gagne des électrons, il a plus de charges négatives que de positives : l'ion est négatif, on l'appelle un anion.",
              ],
              box: { label: "Définition", text: "Un ion est un atome (ou un groupe d'atomes) qui a gagné ou perdu un ou plusieurs électrons. Un cation est un ion positif (électrons perdus) ; un anion est un ion négatif (électrons gagnés)." },
            },
            {
              heading: "Écrire la formule d'un ion",
              paragraphs: [
                "La formule d'un ion s'écrit avec le symbole de l'élément, suivi en haut à droite du nombre de charges et du signe. Le chiffre 1 ne s'écrit pas. Na⁺ (ion sodium) est un atome de sodium qui a perdu 1 électron ; Cu²⁺ (ion cuivre II) a perdu 2 électrons ; Fe³⁺ (ion fer III) a perdu 3 électrons ; Cl⁻ (ion chlorure) a gagné 1 électron.",
                "Certains ions sont formés de plusieurs atomes : on les appelle des ions polyatomiques. Par exemple, l'ion hydroxyde HO⁻ (un atome d'oxygène et un atome d'hydrogène, avec un électron en plus), l'ion sulfate SO₄²⁻ ou l'ion nitrate NO₃⁻. L'ion hydrogène H⁺ est un atome d'hydrogène qui a perdu son unique électron : il ne reste qu'un proton.",
              ],
              box: { label: "Règle", text: "Un ion Xⁿ⁺ a perdu n électrons : il a Z - n électrons. Un ion Xⁿ⁻ a gagné n électrons : il a Z + n électrons. Dans les deux cas, il garde ses Z protons." },
            },
            {
              heading: "Compter les électrons d'un ion",
              paragraphs: [
                "Prenons l'atome de sodium (Z = 11) : 11 protons et 11 électrons. L'ion sodium Na⁺ a perdu un électron : il garde 11 protons mais n'a plus que 10 électrons. Sa charge vaut 11 × (+e) + 10 × (-e) = +e, ce qu'indique le signe +.",
                "L'atome de chlore (Z = 17) possède 17 électrons. L'ion chlorure Cl⁻ en a gagné un : 17 protons et 18 électrons, d'où une charge -e. L'atome de cuivre (Z = 29) possède 29 électrons ; l'ion cuivre II Cu²⁺ en a 29 - 2 = 27.",
                "Attention : un ion ne gagne ni ne perd jamais de protons. C'est la variation du nombre d'électrons seule qui crée la charge.",
              ],
            },
            {
              heading: "Les solutions ioniques",
              paragraphs: [
                "Beaucoup de solutions contiennent des ions : l'eau salée, l'eau minérale, l'acide chlorhydrique, les boissons dites isotoniques. Une solution ionique contient toujours des cations et des anions en proportions telles que la solution est électriquement neutre : il y a autant de charges positives que de charges négatives.",
                "On écrit sa formule entre parenthèses, en indiquant les proportions. L'eau salée (solution de chlorure de sodium) s'écrit (Na⁺ + Cl⁻). La solution bleue de sulfate de cuivre s'écrit (Cu²⁺ + SO₄²⁻). La solution de chlorure de fer III s'écrit (Fe³⁺ + 3 Cl⁻) : il faut trois ions Cl⁻ pour compenser les trois charges positives d'un ion Fe³⁺.",
                "Les ions, qui sont chargés et peuvent se déplacer dans la solution, permettent le passage du courant électrique : les solutions ioniques sont conductrices, alors que l'eau pure conduit très mal le courant.",
              ],
              box: { label: "À retenir", text: "Une solution ionique est électriquement neutre. Exemples : (Na⁺ + Cl⁻), (Cu²⁺ + SO₄²⁻), (Fe³⁺ + 3 Cl⁻), (Zn²⁺ + 2 Cl⁻). Les solutions ioniques conduisent le courant électrique." },
            },
          ],
          keyPoints: [
            "Un ion est un atome ou un groupe d'atomes ayant gagné ou perdu des électrons.",
            "Cation : ion positif, a perdu des électrons. Anion : ion négatif, a gagné des électrons.",
            "Le nombre de protons d'un ion ne change jamais : c'est toujours le même élément.",
            "Électrons d'un ion Xⁿ⁺ : Z - n. Électrons d'un ion Xⁿ⁻ : Z + n.",
            "Une solution ionique est électriquement neutre : (Fe³⁺ + 3 Cl⁻) par exemple.",
            "Les solutions ioniques conduisent le courant électrique grâce aux ions.",
          ],
          example: {
            statement: "L'atome de fer a pour numéro atomique Z = 26. Il peut former l'ion fer II, Fe²⁺. Cet ion est-il un cation ou un anion ? Combien possède-t-il de protons et d'électrons ? Calculer sa charge (e = 1,6 × 10⁻¹⁹ C).",
            solution: [
              "Le signe + indique un ion positif : Fe²⁺ est un cation, l'atome de fer a perdu 2 électrons.",
              "Le noyau ne change pas : l'ion possède toujours 26 protons.",
              "L'atome de fer possède 26 électrons ; l'ion en a perdu 2 : 26 - 2 = 24 électrons.",
              "Charge de l'ion : 2 × e = 2 × 1,6 × 10⁻¹⁹ = 3,2 × 10⁻¹⁹ C.",
              "Réponse : Fe²⁺ est un cation de 26 protons et 24 électrons ; sa charge vaut +3,2 × 10⁻¹⁹ C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des ions suivants, indiquer s'il s'agit d'un cation ou d'un anion, et combien d'électrons l'atome a gagnés ou perdus : Mg²⁺, Cl⁻, Al³⁺, O²⁻.",
              hint: "Un signe + signifie des électrons perdus, un signe - des électrons gagnés ; le chiffre donne leur nombre.",
              solution: [
                "Mg²⁺ : cation, l'atome de magnésium a perdu 2 électrons.",
                "Cl⁻ : anion, l'atome de chlore a gagné 1 électron.",
                "Al³⁺ : cation, l'atome d'aluminium a perdu 3 électrons.",
                "O²⁻ : anion, l'atome d'oxygène a gagné 2 électrons.",
                "Réponse : Mg²⁺ et Al³⁺ sont des cations ; Cl⁻ et O²⁻ sont des anions.",
              ],
            },
            {
              level: 2,
              statement: "Compléter, pour chaque ion, le nombre de protons et d'électrons. Données : Z(Na) = 11 ; Z(Al) = 13 ; Z(S) = 16 ; Z(Zn) = 30. Ions : Na⁺, Al³⁺, S²⁻, Zn²⁺. Quels ions ont le même nombre d'électrons ?",
              hint: "Partez de Z (protons et électrons de l'atome), puis retirez les électrons perdus ou ajoutez les électrons gagnés.",
              solution: [
                "Na⁺ : 11 protons ; 11 - 1 = 10 électrons.",
                "Al³⁺ : 13 protons ; 13 - 3 = 10 électrons.",
                "S²⁻ : 16 protons ; 16 + 2 = 18 électrons.",
                "Zn²⁺ : 30 protons ; 30 - 2 = 28 électrons.",
                "Réponse : Na⁺ et Al³⁺ ont le même nombre d'électrons, 10, mais pas le même nombre de protons : ce sont des éléments différents.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. L'étiquette d'une eau minérale indique, parmi les ions présents : calcium Ca²⁺, magnésium Mg²⁺, sodium Na⁺, potassium K⁺, hydrogénocarbonate HCO₃⁻, sulfate SO₄²⁻, chlorure Cl⁻, nitrate NO₃⁻. Données : Z(Ca) = 20 ; Z(K) = 19. 1) Classer ces ions en cations et anions. 2) Citer deux ions polyatomiques et deux ions monoatomiques. 3) Combien d'électrons possède l'ion calcium Ca²⁺ ? Et l'ion potassium K⁺ ? 4) Un élève affirme que l'eau minérale est chargée positivement, car il y a plus de sortes de cations que d'anions. A-t-il raison ? 5) Cette eau conduit-elle mieux le courant que l'eau pure ? Justifier.",
              hint: "Un ion polyatomique contient plusieurs symboles d'éléments. Pour la question 4, rappelez-vous la règle de neutralité d'une solution.",
              solution: [
                "1) Cations (signe +) : Ca²⁺, Mg²⁺, Na⁺, K⁺. Anions (signe -) : HCO₃⁻, SO₄²⁻, Cl⁻, NO₃⁻.",
                "2) Ions polyatomiques : par exemple SO₄²⁻ et NO₃⁻ (aussi HCO₃⁻). Ions monoatomiques : par exemple Ca²⁺ et Cl⁻ (aussi Mg²⁺, Na⁺, K⁺).",
                "3) Ca²⁺ : 20 - 2 = 18 électrons. K⁺ : 19 - 1 = 18 électrons.",
                "4) Non : une solution ionique est toujours électriquement neutre ; les quantités d'ions s'ajustent pour que les charges positives compensent exactement les charges négatives, quel que soit le nombre de sortes d'ions.",
                "5) Oui : elle contient des ions, porteurs de charges mobiles, qui permettent le passage du courant, alors que l'eau pure en contient très peu.",
                "Réponse : 4 cations et 4 anions ; Ca²⁺ et K⁺ ont 18 électrons ; l'eau est neutre ; elle conduit mieux le courant que l'eau pure.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ne vous laissez pas piéger par les ions.",
            statements: [
              { text: "Un cation est un atome qui a gagné des électrons.", true: false, why: "Un cation a perdu des électrons, d'où sa charge positive." },
              { text: "L'ion Cu²⁺ possède le même nombre de protons que l'atome de cuivre.", true: true, why: "Seul le nombre d'électrons change ; le noyau reste identique." },
              { text: "Pour former Na⁺, l'atome de sodium gagne un proton.", true: false, why: "Il perd un électron ; le nombre de protons ne change jamais." },
              { text: "Une solution ionique est électriquement neutre.", true: true, why: "Les charges positives des cations compensent exactement les charges négatives des anions." },
              { text: "L'ion hydroxyde HO⁻ est un ion polyatomique.", true: true, why: "Il est formé de deux atomes : un atome d'oxygène et un atome d'hydrogène." },
              { text: "L'eau salée conduit moins bien le courant que l'eau pure.", true: false, why: "C'est l'inverse : les ions de l'eau salée permettent le passage du courant." },
              { text: "Dans (Fe³⁺ + 3 Cl⁻), il y a trois ions chlorure pour un ion fer III.", true: true, why: "Il faut trois charges négatives pour compenser les trois charges positives de Fe³⁺." },
            ],
          },
          quiz: [
            {
              q: "Que s'est-il passé pour un atome qui devient l'ion O²⁻ ?",
              options: ["Il a perdu 2 électrons", "Il a gagné 2 protons", "Il a gagné 2 électrons", "Il a perdu 2 protons"],
              answer: 2,
              why: "Le signe - indique un anion : l'atome a gagné 2 électrons, son noyau est inchangé.",
            },
            {
              q: "L'atome de zinc a pour numéro atomique 30. Combien d'électrons possède l'ion Zn²⁺ ?",
              options: ["28", "32", "30", "2"],
              answer: 0,
              why: "L'ion a perdu 2 électrons : 30 - 2 = 28 électrons.",
            },
            {
              q: "Lequel de ces ions est un anion ?",
              options: ["Na⁺", "Fe³⁺", "H⁺", "Cl⁻"],
              answer: 3,
              why: "Cl⁻ porte une charge négative : c'est un anion. Les trois autres sont des cations.",
            },
            {
              q: "Quelle est la formule de la solution de chlorure de zinc ?",
              options: ["(Zn²⁺ + Cl⁻)", "(Zn²⁺ + 2 Cl⁻)", "(2 Zn²⁺ + Cl⁻)"],
              answer: 1,
              why: "Il faut deux ions Cl⁻ pour compenser les deux charges positives d'un ion Zn²⁺.",
            },
            {
              q: "Pourquoi une solution ionique conduit-elle le courant électrique ?",
              options: ["Parce qu'elle contient des ions mobiles chargés", "Parce qu'elle est toujours chaude", "Parce qu'elle contient des électrons libres en grand nombre", "Parce qu'elle est chargée positivement"],
              answer: 0,
              why: "Dans une solution, le courant est dû au déplacement des ions, qui portent des charges.",
            },
          ],
          trap: "Penser qu'un ion positif a gagné des charges positives, donc des protons : un cation se forme en perdant des électrons, son noyau ne change pas.",
          method: "Pour un ion, écrivez toujours deux lignes : « protons = Z » (jamais modifié), puis « électrons = Z - n » pour un ion positif ou « Z + n » pour un ion négatif. Vérifiez ensuite que protons moins électrons redonne bien la charge indiquée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tests-ions',
          title: "Identifier des ions par des tests chimiques",
          minutes: 30,
          objectives: [
            "Mettre en œuvre un test caractéristique d'ion en respectant les règles de sécurité.",
            "Identifier les ions cuivre II, fer II, fer III et zinc à l'aide de la soude.",
            "Identifier l'ion chlorure à l'aide du nitrate d'argent.",
            "Exploiter les résultats de tests pour identifier une solution inconnue.",
          ],
          course: [
            {
              heading: "Le principe d'un test caractéristique",
              paragraphs: [
                "Les ions dissous dans l'eau sont invisibles. Pour savoir lesquels une solution contient, on réalise des tests caractéristiques : on verse quelques gouttes d'un réactif dans un petit volume de la solution, dans un tube à essais, et on observe le résultat.",
                "Le plus souvent, le résultat positif est l'apparition d'un précipité : un solide qui se forme dans la solution, qui la rend trouble puis se dépose au fond du tube. La couleur du précipité permet d'identifier l'ion.",
                "Pour être sûr d'une observation, on peut faire un test témoin : on réalise le même test sur une solution dont on connaît la composition, afin de comparer.",
              ],
              box: { label: "Définition", text: "Un précipité est un solide qui apparaît dans une solution lors d'une transformation chimique. Un test caractéristique est une expérience dont le résultat permet d'affirmer la présence d'une espèce chimique précise." },
            },
            {
              heading: "Les tests à la soude",
              paragraphs: [
                "La soude est une solution d'hydroxyde de sodium, de formule (Na⁺ + HO⁻). Les ions hydroxyde HO⁻ réagissent avec plusieurs ions métalliques pour former des précipités de couleurs différentes.",
                "Avec les ions cuivre II Cu²⁺, il se forme un précipité bleu. Avec les ions fer II Fe²⁺, un précipité vert. Avec les ions fer III Fe³⁺, un précipité couleur rouille (orangé-brun). Avec les ions zinc Zn²⁺, un précipité blanc, qui se redissout si l'on ajoute beaucoup de soude.",
                "Remarque : d'autres ions donnent aussi un précipité blanc avec la soude, comme l'ion aluminium Al³⁺. Au collège, les exercices précisent les ions possibles ; il suffit alors de comparer avec le tableau des tests.",
              ],
              box: { label: "À retenir", text: "Test à la soude (Na⁺ + HO⁻) : Cu²⁺ donne un précipité bleu ; Fe²⁺ un précipité vert ; Fe³⁺ un précipité rouille ; Zn²⁺ un précipité blanc." },
            },
            {
              heading: "Le test de l'ion chlorure",
              paragraphs: [
                "Pour détecter les ions chlorure Cl⁻, on utilise une solution de nitrate d'argent (Ag⁺ + NO₃⁻). En présence d'ions chlorure, il se forme un précipité blanc qui noircit à la lumière.",
                "L'eau du robinet contient souvent un peu d'ions chlorure : elle peut donner un léger trouble blanc avec le nitrate d'argent. C'est pour cela que l'on rince la verrerie à l'eau distillée avant un test.",
                "Les ions hydrogène H⁺ et hydroxyde HO⁻ ne se repèrent pas par un précipité : on les met en évidence en mesurant le pH (ce sera l'objet de la leçon suivante).",
              ],
              box: { label: "À retenir", text: "Test au nitrate d'argent (Ag⁺ + NO₃⁻) : les ions chlorure Cl⁻ donnent un précipité blanc qui noircit à la lumière." },
            },
            {
              heading: "Sécurité et démarche d'identification",
              paragraphs: [
                "La soude est corrosive et le nitrate d'argent tache la peau et irrite les yeux : on porte une blouse, des lunettes de protection et des gants, on travaille sur de petites quantités et on ne verse jamais les restes dans l'évier sans consigne.",
                "Pour identifier une solution inconnue, on procède avec méthode : on prélève un peu de solution dans deux tubes ; dans l'un on ajoute de la soude, dans l'autre du nitrate d'argent ; on observe ; on conclut sur le cation (avec la soude) et sur l'anion (avec le nitrate d'argent) ; enfin on écrit la formule de la solution.",
                "Exemple : une solution donne un précipité vert avec la soude et un précipité blanc qui noircit avec le nitrate d'argent. Elle contient des ions Fe²⁺ et Cl⁻ : c'est une solution de chlorure de fer II, de formule (Fe²⁺ + 2 Cl⁻).",
              ],
            },
          ],
          keyPoints: [
            "Un test caractéristique se fait sur un petit volume, avec quelques gouttes de réactif.",
            "Soude + Cu²⁺ : précipité bleu. Soude + Fe²⁺ : précipité vert.",
            "Soude + Fe³⁺ : précipité rouille. Soude + Zn²⁺ : précipité blanc.",
            "Nitrate d'argent + Cl⁻ : précipité blanc qui noircit à la lumière.",
            "Lunettes, gants et blouse sont obligatoires : la soude est corrosive.",
            "On conclut sur le cation avec la soude et sur l'anion avec le nitrate d'argent.",
          ],
          example: {
            statement: "Une solution inconnue donne un précipité rouille quand on ajoute de la soude, et un précipité blanc qui noircit à la lumière quand on ajoute du nitrate d'argent. Identifier les ions présents et écrire la formule de la solution.",
            solution: [
              "Le précipité rouille obtenu avec la soude est caractéristique des ions fer III, Fe³⁺.",
              "Le précipité blanc qui noircit à la lumière avec le nitrate d'argent est caractéristique des ions chlorure, Cl⁻.",
              "La solution est électriquement neutre : un ion Fe³⁺ porte trois charges positives, il faut donc trois ions Cl⁻.",
              "Réponse : la solution contient des ions Fe³⁺ et Cl⁻ ; c'est une solution de chlorure de fer III, de formule (Fe³⁺ + 3 Cl⁻).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On ajoute quelques gouttes de soude dans trois tubes contenant des solutions différentes. Tube A : précipité bleu. Tube B : précipité blanc. Tube C : précipité vert. Quel ion est mis en évidence dans chaque tube ?",
              hint: "Utilisez le tableau des tests à la soude : chaque couleur correspond à un ion.",
              solution: [
                "Tube A : un précipité bleu révèle les ions cuivre II, Cu²⁺.",
                "Tube B : un précipité blanc révèle les ions zinc, Zn²⁺ (parmi les ions étudiés).",
                "Tube C : un précipité vert révèle les ions fer II, Fe²⁺.",
                "Réponse : A contient Cu²⁺, B contient Zn²⁺, C contient Fe²⁺.",
              ],
            },
            {
              level: 2,
              statement: "La solution de sulfate de cuivre a pour formule (Cu²⁺ + SO₄²⁻). 1) Quel test permet de mettre en évidence les ions cuivre II ? Décrire le résultat attendu. 2) Un élève verse du nitrate d'argent dans cette solution et n'observe aucun précipité. Que peut-on en conclure ? 3) Citer deux précautions de sécurité à respecter.",
              hint: "Le nitrate d'argent est le réactif des ions chlorure : la solution en contient-elle ?",
              solution: [
                "1) On ajoute quelques gouttes de soude : il se forme un précipité bleu, caractéristique des ions Cu²⁺.",
                "2) L'absence de précipité avec le nitrate d'argent montre que la solution ne contient pas d'ions chlorure Cl⁻, ce qui est cohérent avec sa formule (les anions sont des ions sulfate).",
                "3) Porter des lunettes de protection et des gants ; travailler sur de petites quantités (la soude est corrosive).",
                "Réponse : test à la soude, précipité bleu ; pas d'ions chlorure ; lunettes et gants.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Trois flacons ont perdu leur étiquette. On sait qu'ils contiennent une solution de chlorure de sodium (Na⁺ + Cl⁻), une solution de chlorure de fer II (Fe²⁺ + 2 Cl⁻) et une solution de sulfate de zinc (Zn²⁺ + SO₄²⁻). Résultats des tests. Flacon 1 : soude, précipité blanc ; nitrate d'argent, aucun précipité. Flacon 2 : soude, aucun précipité ; nitrate d'argent, précipité blanc qui noircit. Flacon 3 : soude, précipité vert ; nitrate d'argent, précipité blanc qui noircit. 1) Identifier le contenu de chaque flacon en justifiant. 2) Pourquoi le flacon 2 ne donne-t-il aucun précipité avec la soude ? 3) Proposer une manière de vérifier le résultat du flacon 3 par un test témoin.",
              hint: "Commencez par le test à la soude, qui distingue les trois cations, puis vérifiez la cohérence avec le nitrate d'argent.",
              solution: [
                "1) Flacon 1 : le précipité blanc avec la soude indique Zn²⁺ et l'absence de précipité avec le nitrate d'argent indique qu'il n'y a pas d'ions Cl⁻ : c'est le sulfate de zinc.",
                "Flacon 3 : le précipité vert indique Fe²⁺ et le précipité blanc qui noircit indique Cl⁻ : c'est le chlorure de fer II.",
                "Flacon 2 : le précipité blanc qui noircit indique Cl⁻ ; c'est donc le chlorure de sodium, la dernière solution.",
                "2) Les ions sodium Na⁺ ne donnent pas de précipité avec la soude (la soude elle-même contient des ions Na⁺) : seuls les ions Cl⁻ sont détectés.",
                "3) On réalise le même test à la soude sur une solution dont on sait qu'elle contient des ions Fe²⁺ (une solution de sulfate de fer II, par exemple) et on compare la couleur des deux précipités.",
                "Réponse : flacon 1, sulfate de zinc ; flacon 2, chlorure de sodium ; flacon 3, chlorure de fer II.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque ion au résultat de son test caractéristique.",
            pairs: [
              { left: "Cu²⁺ (ion cuivre II)", right: "Précipité bleu avec la soude" },
              { left: "Fe²⁺ (ion fer II)", right: "Précipité vert avec la soude" },
              { left: "Fe³⁺ (ion fer III)", right: "Précipité rouille avec la soude" },
              { left: "Zn²⁺ (ion zinc)", right: "Précipité blanc avec la soude" },
              { left: "Cl⁻ (ion chlorure)", right: "Précipité blanc qui noircit avec le nitrate d'argent" },
            ],
          },
          quiz: [
            {
              q: "Quel réactif utilise-t-on pour mettre en évidence les ions chlorure ?",
              options: ["La soude", "Le nitrate d'argent", "L'eau de chaux", "Le sulfate de cuivre"],
              answer: 1,
              why: "Le nitrate d'argent forme avec les ions Cl⁻ un précipité blanc qui noircit à la lumière.",
            },
            {
              q: "On ajoute de la soude à une solution et un précipité vert apparaît. Quel ion est présent ?",
              options: ["Cu²⁺", "Fe³⁺", "Zn²⁺", "Fe²⁺"],
              answer: 3,
              why: "Le précipité vert est caractéristique des ions fer II, Fe²⁺.",
            },
            {
              q: "Qu'est-ce qu'un précipité ?",
              options: ["Un solide qui se forme dans une solution", "Un gaz qui se dégage", "Un changement d'état de l'eau", "Une solution colorée"],
              answer: 0,
              why: "Un précipité est un solide formé lors d'une transformation chimique, qui trouble la solution puis se dépose.",
            },
            {
              q: "Quelle est la couleur du précipité obtenu avec la soude et les ions fer III ?",
              options: ["Bleu", "Blanc", "Rouille", "Vert"],
              answer: 2,
              why: "Les ions Fe³⁺ donnent un précipité rouille (orangé-brun) avec la soude.",
            },
            {
              q: "Pourquoi porte-t-on des lunettes et des gants pour un test à la soude ?",
              options: ["Parce que la soude est colorée", "Parce que la soude est corrosive", "Parce que le précipité est radioactif"],
              answer: 1,
              why: "La soude est une solution corrosive qui attaque la peau et surtout les yeux.",
            },
          ],
          trap: "Confondre fer II et fer III : le précipité vert correspond aux ions Fe²⁺ et le précipité rouille aux ions Fe³⁺ (pensez à la rouille, le fer le plus « oxydé », avec 3 charges).",
          method: "Recopiez le tableau des tests (réactif, ion, couleur du précipité) en haut de votre feuille avant de répondre. Pour chaque flacon, rédigez en trois temps : « J'observe... », « Or ce résultat est caractéristique de... », « Donc la solution contient... ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ph-acides-bases',
          title: "Le pH : solutions acides, neutres et basiques",
          minutes: 30,
          objectives: [
            "Mesurer le pH d'une solution avec du papier pH ou un pH-mètre.",
            "Identifier le caractère acide, neutre ou basique d'une solution à partir de son pH.",
            "Associer le caractère acide ou basique à la présence d'ions H⁺ ou HO⁻.",
            "Prévoir l'effet d'une dilution sur le pH et connaître les règles de sécurité liées aux acides et aux bases.",
          ],
          course: [
            {
              heading: "L'échelle de pH",
              paragraphs: [
                "Le pH est un nombre sans unité, compris le plus souvent entre 0 et 14, qui indique si une solution aqueuse est acide, neutre ou basique. Une solution de pH inférieur à 7 est acide ; une solution de pH égal à 7 est neutre ; une solution de pH supérieur à 7 est basique.",
                "Plus le pH est petit, plus la solution est acide ; plus le pH est grand, plus la solution est basique. Quelques valeurs approchées : suc gastrique de l'estomac, environ 1,5 à 2 ; jus de citron, environ 2,5 ; vinaigre, environ 3 ; eau pure, 7 ; sang, environ 7,4 ; eau savonneuse, environ 10 ; eau de Javel, environ 12 ; soude concentrée, environ 14.",
              ],
              box: { label: "Règle", text: "pH < 7 : solution acide. pH = 7 : solution neutre. pH > 7 : solution basique. Plus on s'éloigne de 7, plus la solution est acide (vers 0) ou basique (vers 14)." },
            },
            {
              heading: "Mesurer le pH",
              paragraphs: [
                "Le papier pH (ou papier indicateur universel) change de couleur selon le pH. On dépose une goutte de solution sur un petit morceau de papier avec un agitateur en verre, puis on compare la couleur obtenue à l'échelle de teintes de la boîte. On n'obtient qu'une valeur approchée, souvent à une unité près.",
                "Le pH-mètre donne une mesure plus précise, souvent au dixième. On plonge la sonde dans la solution après l'avoir rincée à l'eau distillée, on attend que la valeur se stabilise et on la lit.",
                "On utilise aussi des indicateurs colorés : le bleu de bromothymol (BBT) est jaune en milieu acide, vert en milieu neutre et bleu en milieu basique. Le jus de chou rouge change également de couleur selon le pH.",
              ],
            },
            {
              heading: "Les ions H⁺ et HO⁻",
              paragraphs: [
                "Toute solution aqueuse contient à la fois des ions hydrogène H⁺ et des ions hydroxyde HO⁻. Dans l'eau pure et dans une solution neutre, il y en a autant (en très petite quantité). Une solution acide contient plus d'ions H⁺ que d'ions HO⁻ ; une solution basique contient plus d'ions HO⁻ que d'ions H⁺.",
                "L'acide chlorhydrique (H⁺ + Cl⁻) est un exemple de solution acide ; la soude (Na⁺ + HO⁻) est un exemple de solution basique. Plus une solution contient d'ions H⁺, plus son pH est faible : un pH plus petit d'une unité correspond à une solution contenant dix fois plus d'ions H⁺.",
              ],
              box: { label: "À retenir", text: "Solution acide : plus d'ions H⁺ que d'ions HO⁻. Solution neutre : autant d'ions H⁺ que d'ions HO⁻. Solution basique : plus d'ions HO⁻ que d'ions H⁺." },
            },
            {
              heading: "Diluer et manipuler en sécurité",
              paragraphs: [
                "Diluer une solution, c'est lui ajouter de l'eau. Quand on dilue une solution acide, son pH augmente et se rapproche de 7, sans jamais le dépasser : la solution reste acide, mais l'est moins. Quand on dilue une solution basique, son pH diminue et se rapproche de 7, sans descendre en dessous.",
                "Les acides et les bases concentrés sont corrosifs : ils portent le pictogramme de danger « corrosif » (une main et une surface attaquées par un liquide). On les manipule avec blouse, lunettes et gants. Pour diluer un acide concentré, on verse toujours l'acide dans l'eau, et jamais l'eau dans l'acide, car le mélange dégage beaucoup de chaleur et peut provoquer des projections.",
                "Ne mélangez jamais des produits ménagers entre eux : l'eau de Javel mélangée à un détartrant acide dégage un gaz toxique.",
              ],
              box: { label: "Propriété", text: "Diluer une solution rapproche son pH de 7 : le pH d'un acide augmente, celui d'une base diminue, mais une solution acide diluée reste acide et une solution basique diluée reste basique." },
            },
          ],
          keyPoints: [
            "pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.",
            "Le pH se mesure avec du papier pH (valeur approchée) ou un pH-mètre (plus précis).",
            "Acide : plus d'ions H⁺ que d'ions HO⁻. Basique : plus d'ions HO⁻ que d'ions H⁺.",
            "Plus le pH est faible, plus la solution contient d'ions H⁺.",
            "Diluer rapproche le pH de 7, sans jamais franchir cette valeur.",
            "Acides et bases concentrés sont corrosifs ; on verse l'acide dans l'eau, jamais l'inverse.",
          ],
          example: {
            statement: "On mesure le pH de trois liquides : un soda (pH = 2,5), une eau minérale (pH = 7,0) et un produit pour déboucher les canalisations (pH = 13). Indiquer le caractère de chaque liquide et l'ion majoritaire entre H⁺ et HO⁻. Que devient le pH du soda si on lui ajoute beaucoup d'eau ?",
            solution: [
              "Soda : pH = 2,5 < 7, la solution est acide ; elle contient plus d'ions H⁺ que d'ions HO⁻.",
              "Eau minérale : pH = 7,0, la solution est neutre ; elle contient autant d'ions H⁺ que d'ions HO⁻.",
              "Déboucheur : pH = 13 > 7, la solution est basique ; elle contient plus d'ions HO⁻ que d'ions H⁺.",
              "En diluant le soda, son pH augmente et se rapproche de 7, mais reste inférieur à 7.",
              "Réponse : soda acide (H⁺ majoritaires), eau minérale neutre, déboucheur basique (HO⁻ majoritaires) ; le soda dilué reste acide avec un pH plus proche de 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer les solutions suivantes en acides, neutres et basiques : vinaigre (pH = 3), lait (pH = 6,7), eau de mer (pH = 8,1), eau distillée (pH = 7), lessive (pH = 11), jus d'orange (pH = 3,5).",
              hint: "Comparez chaque valeur de pH à 7.",
              solution: [
                "Acides (pH < 7) : vinaigre (3), jus d'orange (3,5), lait (6,7).",
                "Neutre (pH = 7) : eau distillée.",
                "Basiques (pH > 7) : eau de mer (8,1), lessive (11).",
                "Réponse : 3 acides, 1 neutre, 2 basiques ; le plus acide est le vinaigre.",
              ],
            },
            {
              level: 2,
              statement: "On ajoute quelques gouttes de bleu de bromothymol (BBT) dans trois tubes. Tube 1 : la solution devient bleue. Tube 2 : elle devient jaune. Tube 3 : elle devient verte. 1) Indiquer le caractère de chaque solution. 2) Lequel de ces tubes peut contenir de l'acide chlorhydrique ? Et de la soude ? 3) On dilue fortement la solution du tube 2 : peut-elle devenir bleue ?",
              hint: "BBT : jaune en milieu acide, vert en milieu neutre, bleu en milieu basique.",
              solution: [
                "1) Tube 1 (bleu) : solution basique. Tube 2 (jaune) : solution acide. Tube 3 (vert) : solution neutre.",
                "2) L'acide chlorhydrique est acide : il peut être dans le tube 2. La soude est basique : elle peut être dans le tube 1.",
                "3) Non : la dilution rapproche le pH de 7 sans le dépasser. La solution acide diluée reste acide (ou devient pratiquement neutre si on dilue énormément) : elle peut tendre vers le vert, mais ne deviendra jamais bleue.",
                "Réponse : tube 1 basique, tube 2 acide, tube 3 neutre ; une solution acide diluée ne devient jamais basique.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un détartrant pour cafetière a un pH de 2 et porte le pictogramme « corrosif ». Le mode d'emploi indique : « Verser 50 mL de produit dans 1 L d'eau. » Un élève mesure le pH du mélange obtenu et trouve 3. 1) Le détartrant est-il acide ou basique ? Quel ion est majoritaire ? 2) Expliquer pourquoi le pH a augmenté après le mélange avec l'eau. 3) Le mélange est-il devenu neutre ? 4) Pourquoi le mode d'emploi demande-t-il de verser le produit dans l'eau et non l'inverse ? 5) Citer deux précautions à prendre pour manipuler ce produit.",
              hint: "Pensez à l'effet de la dilution sur le pH et à la règle de sécurité sur les acides concentrés.",
              solution: [
                "1) pH = 2 < 7 : le détartrant est acide ; les ions H⁺ y sont majoritaires (plus nombreux que les ions HO⁻).",
                "2) En ajoutant le produit à beaucoup d'eau, on le dilue : les ions H⁺ sont répartis dans un plus grand volume, la solution est moins acide, son pH augmente.",
                "3) Non : le pH vaut 3, il est toujours inférieur à 7. La solution diluée reste acide.",
                "4) Le mélange d'un acide concentré et d'eau dégage de la chaleur ; verser l'acide dans l'eau limite l'échauffement et évite les projections d'acide.",
                "5) Porter des gants et des lunettes de protection ; ne jamais mélanger ce produit avec un autre produit ménager comme l'eau de Javel.",
                "Réponse : le détartrant est acide ; la dilution fait monter le pH de 2 à 3, mais la solution reste acide.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces liquides du plus acide au plus basique.",
            items: [
              "Suc gastrique (environ 1,5 à 2)",
              "Vinaigre (environ 3)",
              "Eau pure (7)",
              "Eau savonneuse (environ 10)",
              "Eau de Javel (environ 12)",
              "Soude concentrée (environ 14)",
            ],
          },
          quiz: [
            {
              q: "Une solution a un pH de 9. Elle est :",
              options: ["acide", "neutre", "basique"],
              answer: 2,
              why: "Son pH est supérieur à 7 : la solution est basique.",
            },
            {
              q: "Quel ion est majoritaire dans une solution acide ?",
              options: ["L'ion hydrogène H⁺", "L'ion hydroxyde HO⁻", "L'ion chlorure Cl⁻", "L'ion sodium Na⁺"],
              answer: 0,
              why: "Une solution acide contient plus d'ions H⁺ que d'ions HO⁻.",
            },
            {
              q: "On dilue une solution d'acide de pH 3. Quel pH peut-on mesurer ensuite ?",
              options: ["2", "8", "4", "3"],
              answer: 2,
              why: "La dilution rapproche le pH de 7 sans dépasser 7 : il augmente, par exemple jusqu'à 4.",
            },
            {
              q: "Quel instrument donne la mesure de pH la plus précise ?",
              options: ["Le papier pH", "Le jus de chou rouge", "Le thermomètre", "Le pH-mètre"],
              answer: 3,
              why: "Le pH-mètre donne une valeur au dixième, alors que le papier pH donne une valeur approchée.",
            },
            {
              q: "Comment dilue-t-on un acide concentré en sécurité ?",
              options: ["On verse l'eau dans l'acide", "On verse l'acide dans l'eau", "On mélange avec de l'eau de Javel", "On le chauffe d'abord"],
              answer: 1,
              why: "Verser l'acide dans l'eau limite l'échauffement brutal et les projections.",
            },
          ],
          trap: "Croire qu'en diluant un acide on peut obtenir une solution basique : la dilution rapproche le pH de 7, mais ne le fait jamais dépasser.",
          method: "Dessinez une flèche horizontale graduée de 0 à 14, avec 7 au milieu : acide à gauche, basique à droite. Placez-y chaque valeur de pH de l'exercice ; pour une dilution, déplacez le point vers 7, jamais au-delà.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES TRANSFORMATIONS CHIMIQUES                                          */
    /* ==================================================================== */
    {
      id: 'transformations-chimiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'acides-metaux',
          title: "La réaction entre un acide et un métal",
          minutes: 30,
          objectives: [
            "Décrire les observations faites lors de la réaction entre l'acide chlorhydrique et le fer.",
            "Identifier les produits de la réaction par des tests caractéristiques (dihydrogène, ions fer II).",
            "Interpréter l'évolution du pH au cours de la réaction.",
            "Écrire le bilan et l'équation de la réaction entre un acide et un métal.",
          ],
          course: [
            {
              heading: "L'expérience : du fer dans l'acide chlorhydrique",
              paragraphs: [
                "On place un peu de poudre de fer (ou de la paille de fer) dans un tube à essais, puis on verse de l'acide chlorhydrique, une solution de formule (H⁺ + Cl⁻). On observe une effervescence : des bulles de gaz se forment. Le fer disparaît progressivement, la solution prend une teinte vert pâle et le tube s'échauffe légèrement.",
                "Ces observations montrent qu'une transformation chimique a lieu : des espèces chimiques (les réactifs) sont consommées et de nouvelles espèces (les produits) apparaissent.",
              ],
            },
            {
              heading: "Identifier les produits",
              paragraphs: [
                "Le gaz : on approche une allumette enflammée de l'ouverture du tube, que l'on a bouché quelques instants pour accumuler le gaz. On entend une petite détonation (un « pop ») : c'est le test caractéristique du dihydrogène, de formule H₂.",
                "Les ions : on prélève un peu de la solution obtenue et on ajoute quelques gouttes de soude. Il se forme un précipité vert, caractéristique des ions fer II, Fe²⁺. Ces ions n'existaient pas au départ : ils se sont formés à partir des atomes de fer, qui ont perdu chacun 2 électrons.",
                "Si l'on ajoute du nitrate d'argent à la solution finale, on obtient un précipité blanc qui noircit : les ions chlorure Cl⁻ sont toujours présents. Ils n'ont pas participé à la réaction : on les appelle des ions spectateurs.",
              ],
              box: { label: "À retenir", text: "Test du dihydrogène H₂ : une petite détonation à l'approche d'une flamme. Test des ions fer II Fe²⁺ : un précipité vert avec la soude." },
            },
            {
              heading: "L'évolution du pH",
              paragraphs: [
                "Avant la réaction, l'acide chlorhydrique a un pH faible, par exemple 1. Pendant la réaction, on mesure un pH qui augmente, par exemple jusqu'à 3 ou 4 : la solution devient moins acide.",
                "Cela s'explique par la consommation des ions hydrogène H⁺ : ils réagissent avec le fer pour former le dihydrogène. Moins il y a d'ions H⁺, plus le pH est élevé. Les réactifs sont donc le fer Fe et les ions hydrogène H⁺.",
              ],
            },
            {
              heading: "Bilan, équation et autres métaux",
              paragraphs: [
                "Le bilan s'écrit : fer + ions hydrogène → ions fer II + dihydrogène. L'équation de la réaction est : Fe + 2 H⁺ → Fe²⁺ + H₂. On vérifie qu'elle est ajustée : 1 atome de fer et 2 atomes d'hydrogène de chaque côté, et une charge totale de +2 à gauche comme à droite.",
                "D'autres métaux réagissent avec l'acide chlorhydrique : le zinc donne des ions zinc Zn²⁺ et du dihydrogène (Zn + 2 H⁺ → Zn²⁺ + H₂) ; l'aluminium donne des ions Al³⁺ et du dihydrogène. En revanche, le cuivre, l'argent et l'or ne réagissent pas avec l'acide chlorhydrique.",
                "Conséquences pratiques : on ne conserve pas un acide dans un récipient en fer, en zinc ou en aluminium ; les canettes de boissons acides sont recouvertes à l'intérieur d'un vernis protecteur. Le dihydrogène formé est inflammable : on réalise ces expériences en petites quantités, loin de toute flamme en dehors du test.",
              ],
              box: { label: "Propriété", text: "Un acide réagit avec certains métaux (fer, zinc, aluminium) : il se forme du dihydrogène et des ions métalliques, et le pH augmente car les ions H⁺ sont consommés. Équation avec le fer : Fe + 2 H⁺ → Fe²⁺ + H₂." },
            },
          ],
          keyPoints: [
            "Fer + acide chlorhydrique : effervescence, le fer disparaît, la solution devient vert pâle.",
            "Le gaz formé est le dihydrogène H₂ : il produit une petite détonation près d'une flamme.",
            "Les ions fer II Fe²⁺ formés donnent un précipité vert avec la soude.",
            "Les ions H⁺ sont consommés : le pH augmente. Les ions Cl⁻ sont spectateurs.",
            "Équation : Fe + 2 H⁺ → Fe²⁺ + H₂.",
            "Le cuivre, l'argent et l'or ne réagissent pas avec l'acide chlorhydrique.",
          ],
          example: {
            statement: "On verse de l'acide chlorhydrique sur de la grenaille de zinc. Un gaz se dégage et produit une détonation à l'approche d'une flamme ; la solution obtenue donne un précipité blanc avec la soude. Le pH passe de 1 à 3. Identifier les produits, les réactifs, et écrire l'équation de la réaction.",
            solution: [
              "La détonation est le test du dihydrogène : le gaz formé est H₂.",
              "Le précipité blanc avec la soude révèle les ions zinc Zn²⁺, formés à partir des atomes de zinc.",
              "Le pH augmente : les ions H⁺ de l'acide sont consommés. Les réactifs sont donc le zinc Zn et les ions H⁺.",
              "Bilan : zinc + ions hydrogène → ions zinc + dihydrogène.",
              "Équation : Zn + 2 H⁺ → Zn²⁺ + H₂ (1 Zn et 2 H de chaque côté ; charge +2 de chaque côté).",
              "Réponse : réactifs Zn et H⁺ ; produits Zn²⁺ et H₂ ; Zn + 2 H⁺ → Zn²⁺ + H₂.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lors de la réaction entre le fer et l'acide chlorhydrique, on fait les observations suivantes : a) des bulles se forment ; b) une allumette enflammée provoque une petite détonation ; c) la solution donne un précipité vert avec la soude. Quelle conclusion tirer de chaque observation ?",
              hint: "Associez chaque observation à un test caractéristique vu en cours.",
              solution: [
                "a) Les bulles montrent qu'un gaz se forme : une transformation chimique a lieu.",
                "b) La détonation est le test du dihydrogène : le gaz est H₂.",
                "c) Le précipité vert révèle la présence d'ions fer II, Fe²⁺.",
                "Réponse : un gaz se forme, c'est du dihydrogène, et des ions Fe²⁺ sont apparus dans la solution.",
              ],
            },
            {
              level: 2,
              statement: "Un élève place des morceaux de trois métaux dans trois tubes contenant de l'acide chlorhydrique : tube 1, cuivre ; tube 2, fer ; tube 3, aluminium. Il observe une effervescence dans les tubes 2 et 3, mais rien dans le tube 1. 1) Interpréter ces observations. 2) Le pH de l'acide est de 1 au départ. Comment évolue-t-il dans le tube 2 ? Et dans le tube 1 ? 3) Pourquoi déconseille-t-on de conserver du vinaigre (acide) dans une casserole en aluminium non protégée ?",
              hint: "Seuls certains métaux réagissent avec un acide ; une réaction consomme des ions H⁺.",
              solution: [
                "1) Le fer et l'aluminium réagissent avec l'acide chlorhydrique (formation de dihydrogène) ; le cuivre ne réagit pas.",
                "2) Tube 2 : les ions H⁺ sont consommés par la réaction avec le fer, le pH augmente. Tube 1 : aucune réaction, le pH reste égal à 1.",
                "3) Le vinaigre étant acide, il attaquerait l'aluminium de la casserole : le métal serait rongé et des ions aluminium passeraient dans l'aliment.",
                "Réponse : fer et aluminium réagissent, pas le cuivre ; le pH augmente seulement dans les tubes où il y a réaction.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : « Dans un tube à essais, on verse 5 mL d'acide chlorhydrique de pH 1 sur 0,2 g de poudre de fer. On bouche le tube quelques secondes puis on approche une flamme : on entend une légère détonation. À la fin, il reste un peu de fer au fond du tube, le pH vaut 4 et la solution donne un précipité vert avec la soude et un précipité blanc qui noircit avec le nitrate d'argent. » 1) Nommer le gaz formé et justifier. 2) Quels ions se sont formés ? Justifier. 3) Expliquer l'évolution du pH. 4) Les ions chlorure ont-ils réagi ? Justifier. 5) Écrire l'équation de la réaction et vérifier qu'elle est ajustée.",
              hint: "Pour la question 4, les ions chlorure sont-ils encore là à la fin ? Un ion encore présent en même quantité n'a pas été consommé.",
              solution: [
                "1) La légère détonation à l'approche d'une flamme est le test du dihydrogène H₂.",
                "2) Le précipité vert avec la soude révèle les ions fer II Fe²⁺, absents au départ : ils se sont formés à partir du fer.",
                "3) Le pH passe de 1 à 4 : la solution est moins acide, car les ions H⁺ ont été consommés par la réaction.",
                "4) Le test au nitrate d'argent montre que les ions Cl⁻ sont toujours présents : ils n'ont pas réagi, ce sont des ions spectateurs.",
                "5) Fe + 2 H⁺ → Fe²⁺ + H₂. Vérification : 1 atome Fe et 2 atomes H de chaque côté ; charge +2 à gauche (2 × +1) et +2 à droite.",
                "Réponse : le fer réagit avec les ions H⁺ pour former des ions Fe²⁺ et du dihydrogène ; les ions Cl⁻ sont spectateurs.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Acides et métaux.",
            statements: [
              { text: "Le gaz formé par le fer dans l'acide chlorhydrique est du dioxygène.", true: false, why: "C'est du dihydrogène, qui produit une petite détonation près d'une flamme." },
              { text: "Pendant la réaction, le pH de la solution augmente.", true: true, why: "Les ions H⁺ sont consommés, la solution devient moins acide." },
              { text: "Les ions chlorure sont consommés par la réaction.", true: false, why: "Ils sont toujours présents à la fin : ce sont des ions spectateurs." },
              { text: "Le cuivre réagit avec l'acide chlorhydrique en dégageant du dihydrogène.", true: false, why: "Le cuivre, comme l'argent et l'or, ne réagit pas avec l'acide chlorhydrique." },
              { text: "Les ions fer II formés donnent un précipité vert avec la soude.", true: true, why: "C'est le test caractéristique des ions Fe²⁺." },
              { text: "L'équation Fe + 2 H⁺ → Fe²⁺ + H₂ conserve les atomes et les charges.", true: true, why: "1 Fe et 2 H de chaque côté, et une charge totale de +2 de chaque côté." },
            ],
          },
          quiz: [
            {
              q: "Quel gaz se dégage lors de la réaction entre le zinc et l'acide chlorhydrique ?",
              options: ["Le dioxyde de carbone", "Le dihydrogène", "Le dioxygène", "Le chlore"],
              answer: 1,
              why: "Les ions H⁺ de l'acide se transforment en dihydrogène H₂, reconnaissable à sa détonation.",
            },
            {
              q: "Comment évolue le pH de l'acide pendant la réaction avec le fer ?",
              options: ["Il diminue", "Il reste constant", "Il devient égal à 14", "Il augmente"],
              answer: 3,
              why: "Les ions H⁺ sont consommés : la solution devient moins acide et son pH augmente.",
            },
            {
              q: "Quelle est l'équation de la réaction entre le fer et les ions hydrogène ?",
              options: ["Fe + 2 H⁺ → Fe²⁺ + H₂", "Fe + H⁺ → Fe²⁺ + H₂", "Fe + 2 Cl⁻ → FeCl₂ + H₂", "Fe²⁺ + H₂ → Fe + 2 H⁺"],
              answer: 0,
              why: "Il faut 2 ions H⁺ pour former une molécule H₂, et les charges sont conservées : +2 de chaque côté.",
            },
            {
              q: "Quel métal ne réagit pas avec l'acide chlorhydrique ?",
              options: ["Le fer", "Le zinc", "Le cuivre", "L'aluminium"],
              answer: 2,
              why: "Le cuivre ne réagit pas avec l'acide chlorhydrique, contrairement au fer, au zinc et à l'aluminium.",
            },
            {
              q: "Comment appelle-t-on les ions chlorure dans cette réaction ?",
              options: ["Des réactifs", "Des produits", "Des précipités", "Des ions spectateurs"],
              answer: 3,
              why: "Ils sont présents mais ne participent pas à la réaction.",
            },
          ],
          trap: "Écrire les ions chlorure parmi les réactifs de l'équation : ils restent dans la solution sans réagir (ions spectateurs) et ne figurent pas dans l'équation Fe + 2 H⁺ → Fe²⁺ + H₂.",
          method: "Pour chaque observation, appliquez le schéma « observation, test, conclusion ». Ensuite, rangez les espèces en deux colonnes : celles qui disparaissent (réactifs) et celles qui apparaissent (produits). Les espèces présentes au début et à la fin sans changement sont spectatrices.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reaction-acide-base',
          title: "La réaction entre un acide et une base",
          minutes: 30,
          objectives: [
            "Décrire la réaction entre une solution acide et une solution basique.",
            "Interpréter la réaction comme la transformation des ions H⁺ et HO⁻ en eau.",
            "Suivre l'évolution du pH et de la température au cours de la réaction.",
            "Citer des applications de la réaction acide-base dans la vie courante.",
          ],
          course: [
            {
              heading: "L'expérience : de la soude dans l'acide",
              paragraphs: [
                "Dans un bécher, on verse de l'acide chlorhydrique (H⁺ + Cl⁻) et quelques gouttes de bleu de bromothymol (BBT) : la solution est jaune, car elle est acide. On ajoute ensuite progressivement de la soude (Na⁺ + HO⁻) en agitant, et on mesure le pH et la température.",
                "Au début, la solution reste jaune et le pH augmente lentement. Puis, pour un certain volume de soude, la solution devient verte : elle est neutre, son pH vaut 7. Si l'on continue à verser de la soude, la solution devient bleue : elle est basique, son pH dépasse 7. On constate aussi que la température du mélange augmente.",
              ],
            },
            {
              heading: "Interpréter : les ions H⁺ et HO⁻ forment de l'eau",
              paragraphs: [
                "Les ions hydrogène H⁺ de l'acide réagissent avec les ions hydroxyde HO⁻ de la base pour former des molécules d'eau H₂O. Comme les ions H⁺ sont consommés, la solution devient de moins en moins acide et son pH augmente.",
                "Les ions sodium Na⁺ et chlorure Cl⁻ ne réagissent pas : ce sont des ions spectateurs. Lorsque l'on a ajouté juste assez de soude pour consommer tous les ions H⁺, la solution obtenue est de l'eau salée, (Na⁺ + Cl⁻), neutre. Si on la fait évaporer, il reste des cristaux de chlorure de sodium, le sel de cuisine.",
              ],
              box: { label: "Formule", text: "Équation de la réaction acide-base : H⁺ + HO⁻ → H₂O. La réaction dégage de la chaleur." },
            },
            {
              heading: "Une réaction qui libère de l'énergie",
              paragraphs: [
                "La réaction entre un acide et une base libère de l'énergie thermique : le mélange s'échauffe. Avec des solutions concentrées, l'échauffement peut être important et provoquer des projections. C'est pourquoi on travaille avec des solutions diluées, en ajoutant la base petit à petit, avec lunettes, gants et blouse.",
                "En cas de projection d'acide ou de base sur la peau, on ne cherche pas à « neutraliser » avec un autre produit : on rince abondamment et longtemps à l'eau, et on prévient un adulte.",
              ],
              box: { label: "À retenir", text: "Quand on ajoute une base à un acide, le pH augmente : la solution passe d'acide à neutre (pH = 7) puis à basique si l'on ajoute trop de base. La réaction est exothermique : elle dégage de la chaleur." },
            },
            {
              heading: "Des applications dans la vie courante",
              paragraphs: [
                "Les médicaments contre les brûlures d'estomac (souvent appelés antiacides ou pansements gastriques) contiennent des espèces basiques qui réagissent avec une partie de l'acide de l'estomac, ce qui diminue l'acidité.",
                "Les agriculteurs épandent de la chaux, une espèce basique, sur les sols trop acides pour les rendre plus favorables aux cultures. Dans une piscine, on ajuste le pH de l'eau avec des produits acides ou basiques pour qu'il reste proche de la neutralité. Dans tous les cas, on utilise la réaction entre les ions H⁺ et HO⁻.",
              ],
            },
          ],
          keyPoints: [
            "Un acide réagit avec une base : les ions H⁺ et HO⁻ forment de l'eau.",
            "Équation : H⁺ + HO⁻ → H₂O.",
            "Le pH augmente quand on verse une base dans un acide ; il vaut 7 quand la solution devient neutre.",
            "Avec le BBT : jaune (acide), vert (neutre), bleu (basique).",
            "La réaction dégage de la chaleur : on travaille avec des solutions diluées.",
            "Acide chlorhydrique + soude en juste quantité : eau salée (Na⁺ + Cl⁻).",
          ],
          example: {
            statement: "On verse progressivement de la soude dans un bécher contenant de l'acide chlorhydrique et du BBT. Décrire l'évolution de la couleur et du pH, écrire l'équation de la réaction, et indiquer ce que contient la solution lorsqu'elle est verte.",
            solution: [
              "Au départ, la solution est acide (pH < 7) : le BBT est jaune.",
              "Les ions HO⁻ de la soude réagissent avec les ions H⁺ de l'acide : H⁺ + HO⁻ → H₂O. Les ions H⁺ disparaissent peu à peu, le pH augmente.",
              "Quand la solution devient verte, elle est neutre : pH = 7. Tous les ions H⁺ en excès ont réagi.",
              "La solution contient alors de l'eau et les ions spectateurs Na⁺ et Cl⁻ : c'est de l'eau salée (Na⁺ + Cl⁻).",
              "Si l'on continue à verser de la soude, les ions HO⁻ deviennent majoritaires : la solution devient bleue et basique (pH > 7).",
              "Réponse : jaune, puis vert à pH 7, puis bleu ; H⁺ + HO⁻ → H₂O ; la solution verte est de l'eau salée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Compléter : la réaction entre une solution acide et une solution basique fait réagir les ions ... de l'acide avec les ions ... de la base ; il se forme de l' ... . Au cours de la réaction, la température du mélange ... .",
              hint: "Rappelez-vous l'équation H⁺ + HO⁻ → H₂O.",
              solution: [
                "Les ions de l'acide sont les ions hydrogène H⁺.",
                "Les ions de la base sont les ions hydroxyde HO⁻.",
                "Ils forment de l'eau H₂O.",
                "La réaction dégage de la chaleur : la température augmente.",
                "Réponse : H⁺ ; HO⁻ ; eau ; augmente.",
              ],
            },
            {
              level: 2,
              statement: "On mélange de l'acide chlorhydrique et de la soude. On mesure le pH du mélange : il vaut 11. 1) Le mélange est-il acide, neutre ou basique ? 2) Quels ions sont majoritaires, H⁺ ou HO⁻ ? 3) Quel réactif a été versé en trop grande quantité ? 4) Que faudrait-il ajouter pour rendre le mélange neutre ?",
              hint: "Comparez le pH à 7, puis demandez-vous quels ions restent quand l'autre sorte a été entièrement consommée.",
              solution: [
                "1) pH = 11 > 7 : le mélange est basique.",
                "2) Les ions HO⁻ sont majoritaires.",
                "3) Tous les ions H⁺ de l'acide ont réagi et il reste des ions HO⁻ : la soude a été versée en excès.",
                "4) Il faudrait ajouter progressivement de l'acide chlorhydrique jusqu'à obtenir un pH de 7 (couleur verte avec le BBT).",
                "Réponse : mélange basique, ions HO⁻ majoritaires, soude en excès ; ajouter de l'acide jusqu'à pH 7.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On verse progressivement de la soude dans 20 mL d'acide chlorhydrique. Mesures : 0 mL de soude, pH = 1,0 ; 5 mL, pH = 1,4 ; 9 mL, pH = 2,2 ; 10 mL, pH = 7,0 ; 11 mL, pH = 11,8 ; 15 mL, pH = 12,5. La température passe de 20,0 °C à 21,0 °C. 1) Pour quel volume de soude le mélange est-il neutre ? 2) Écrire l'équation de la réaction. 3) Pourquoi le pH augmente-t-il entre 0 et 10 mL ? 4) Quelles espèces contient le mélange pour 15 mL de soude versée ? 5) Que révèle l'évolution de la température ? 6) Pourquoi recommande-t-on d'ajouter la soude goutte à goutte près de 10 mL ?",
              hint: "Le pH change très brusquement autour du volume pour lequel tous les ions H⁺ ont été consommés.",
              solution: [
                "1) Le pH vaut 7,0 pour 10 mL de soude : c'est à ce volume que le mélange est neutre.",
                "2) H⁺ + HO⁻ → H₂O.",
                "3) Les ions HO⁻ apportés par la soude consomment les ions H⁺ de l'acide : il y a de moins en moins d'ions H⁺, la solution est de moins en moins acide.",
                "4) Pour 15 mL, tous les ions H⁺ ont réagi et les ions HO⁻ sont en excès : le mélange contient de l'eau, des ions Na⁺, des ions Cl⁻ et des ions HO⁻ en excès ; il est basique (pH = 12,5).",
                "5) La température augmente d'environ 1 °C : la réaction dégage de la chaleur.",
                "6) Autour de 10 mL, le pH varie très brusquement (de 2,2 à 11,8 entre 9 et 11 mL) : il faut verser goutte à goutte pour repérer précisément la neutralité.",
                "Réponse : neutralité pour 10 mL ; la réaction H⁺ + HO⁻ → H₂O consomme les ions H⁺ et dégage de la chaleur.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'expérience de neutralisation suivie au BBT.",
            items: [
              "Mettre des lunettes, des gants et une blouse",
              "Verser l'acide chlorhydrique dans un bécher et ajouter quelques gouttes de BBT : la solution est jaune",
              "Ajouter la soude petit à petit en agitant",
              "Mesurer régulièrement le pH et la température",
              "Verser goutte à goutte quand la couleur commence à changer",
              "S'arrêter quand la solution devient verte : le pH vaut 7",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'équation de la réaction entre un acide et une base ?",
              options: ["H⁺ + Cl⁻ → HCl", "Na⁺ + Cl⁻ → NaCl", "H⁺ + HO⁻ → H₂O", "H₂ + O₂ → H₂O"],
              answer: 2,
              why: "Les ions hydrogène de l'acide et les ions hydroxyde de la base forment de l'eau.",
            },
            {
              q: "On verse une base dans un acide. Comment évolue le pH ?",
              options: ["Il augmente", "Il diminue", "Il reste égal à 7", "Il reste égal à 1"],
              answer: 0,
              why: "Les ions H⁺ sont consommés : la solution devient moins acide et le pH augmente.",
            },
            {
              q: "Avec le BBT, quelle couleur indique que la solution est neutre ?",
              options: ["Jaune", "Bleu", "Rouge", "Vert"],
              answer: 3,
              why: "Le BBT est jaune en milieu acide, vert en milieu neutre et bleu en milieu basique.",
            },
            {
              q: "Que constate-t-on pour la température au cours d'une réaction acide-base ?",
              options: ["Elle baisse", "Elle augmente", "Elle ne change pas"],
              answer: 1,
              why: "La réaction acide-base dégage de la chaleur.",
            },
            {
              q: "Quel rôle jouent les ions Na⁺ et Cl⁻ dans la réaction entre l'acide chlorhydrique et la soude ?",
              options: ["Ils forment l'eau", "Ce sont des ions spectateurs", "Ils produisent un gaz", "Ils rendent la solution acide"],
              answer: 1,
              why: "Ils restent en solution sans réagir ; seuls les ions H⁺ et HO⁻ réagissent.",
            },
          ],
          trap: "Croire qu'en mélangeant un acide et une base on obtient toujours une solution neutre : elle n'est neutre que si l'on a ajouté juste la bonne quantité de base ; sinon elle reste acide ou devient basique.",
          method: "Dans un exercice acide-base, demandez-vous toujours quels ions sont en excès à la fin : s'il reste des H⁺, le mélange est acide (pH < 7) ; s'il reste des HO⁻, il est basique (pH > 7) ; s'il ne reste ni l'un ni l'autre en excès, il est neutre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-reaction',
          title: "Écrire et ajuster une équation de réaction",
          minutes: 35,
          objectives: [
            "Identifier les réactifs et les produits d'une transformation chimique et écrire son bilan.",
            "Écrire l'équation d'une réaction à l'aide des formules chimiques.",
            "Ajuster une équation de réaction en respectant la conservation des atomes et des charges.",
          ],
          course: [
            {
              heading: "Réactifs, produits et bilan",
              paragraphs: [
                "Au cours d'une transformation chimique, des espèces chimiques disparaissent : ce sont les réactifs. De nouvelles espèces apparaissent : ce sont les produits. Le bilan de la réaction s'écrit avec les noms : réactifs à gauche d'une flèche, produits à droite. La flèche se lit « donne » ou « se transforme en ».",
                "Exemple : quand le charbon (carbone) brûle dans l'air, il réagit avec le dioxygène et forme du dioxyde de carbone. Bilan : carbone + dioxygène → dioxyde de carbone. Le signe + se lit « et » ; il ne s'agit pas d'une addition.",
              ],
              box: { label: "Définition", text: "Les réactifs sont les espèces chimiques consommées au cours de la transformation ; les produits sont les espèces chimiques formées. Le bilan s'écrit : réactifs → produits." },
            },
            {
              heading: "L'équation de réaction",
              paragraphs: [
                "L'équation de réaction remplace les noms par les formules chimiques. Pour la combustion du carbone : C + O₂ → CO₂. On compte les atomes de chaque côté : 1 atome de carbone et 2 atomes d'oxygène à gauche, 1 atome de carbone et 2 atomes d'oxygène à droite. Les atomes sont conservés : l'équation est ajustée.",
                "Ce n'est pas toujours le cas. Pour la formation de l'eau à partir de dihydrogène et de dioxygène, on écrit d'abord H₂ + O₂ → H₂O. À gauche, il y a 2 atomes d'oxygène, à droite un seul : l'équation n'est pas ajustée. Il faut placer des nombres devant les formules, appelés coefficients.",
              ],
              box: { label: "Règle", text: "Une équation de réaction est ajustée lorsque, pour chaque élément, il y a le même nombre d'atomes du côté des réactifs et du côté des produits, et lorsque la charge électrique totale est la même des deux côtés." },
            },
            {
              heading: "Ajuster avec des coefficients",
              paragraphs: [
                "Un coefficient placé devant une formule multiplie toute la formule. 2 H₂O signifie deux molécules d'eau, soit 4 atomes d'hydrogène et 2 atomes d'oxygène. Le coefficient 1 ne s'écrit pas.",
                "Reprenons H₂ + O₂ → H₂O. Pour avoir 2 atomes d'oxygène à droite, on écrit 2 H₂O. Il y a maintenant 4 atomes d'hydrogène à droite : on écrit 2 H₂ à gauche. L'équation ajustée est 2 H₂ + O₂ → 2 H₂O. Vérification : 4 H et 2 O de chaque côté.",
                "Interdit : modifier les indices des formules. Écrire H₂O₂ au lieu de H₂O pour équilibrer les oxygènes changerait l'espèce chimique (H₂O₂ est l'eau oxygénée, pas l'eau).",
              ],
              box: { label: "À retenir", text: "On ajuste une équation uniquement en plaçant des coefficients devant les formules. On ne modifie jamais les indices à l'intérieur d'une formule." },
            },
            {
              heading: "Une méthode, et le cas des ions",
              paragraphs: [
                "Méthode : écrire les formules des réactifs et des produits ; compter les atomes de chaque élément de chaque côté ; ajuster d'abord les éléments présents dans une seule espèce de chaque côté (souvent le carbone), puis l'hydrogène, et l'oxygène en dernier ; vérifier à la fin. Pour la combustion du méthane : CH₄ + O₂ → CO₂ + H₂O. Carbone : 1 et 1, c'est bon. Hydrogène : 4 à gauche, il faut 2 H₂O. Oxygène : à droite 2 + 2 = 4, il faut 2 O₂. Résultat : CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
                "Quand des ions interviennent, on vérifie aussi les charges. Dans Fe + 2 H⁺ → Fe²⁺ + H₂, il y a à gauche 1 Fe, 2 H et une charge de 2 × (+1) = +2 ; à droite 1 Fe, 2 H et une charge de +2. Atomes et charges sont conservés.",
              ],
            },
          ],
          keyPoints: [
            "Réactifs : espèces consommées ; produits : espèces formées ; bilan : réactifs → produits.",
            "Dans une équation, on remplace les noms par les formules chimiques.",
            "Une équation ajustée conserve chaque élément et la charge électrique totale.",
            "On ajuste avec des coefficients devant les formules ; le coefficient 1 ne s'écrit pas.",
            "On ne modifie jamais les indices d'une formule.",
            "Exemples : 2 H₂ + O₂ → 2 H₂O ; CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
          ],
          example: {
            statement: "Le butane C₄H₁₀, gaz des briquets, brûle dans le dioxygène en formant du dioxyde de carbone et de l'eau. Écrire et ajuster l'équation de cette combustion.",
            solution: [
              "Équation non ajustée : C₄H₁₀ + O₂ → CO₂ + H₂O.",
              "Carbone : 4 atomes à gauche, il faut 4 CO₂ à droite.",
              "Hydrogène : 10 atomes à gauche, il faut 5 H₂O à droite (5 × 2 = 10).",
              "Oxygène à droite : 4 × 2 + 5 × 1 = 13 atomes. À gauche, O₂ contient 2 atomes : il faudrait 13/2 O₂, ce qui n'est pas un nombre entier.",
              "On multiplie tous les coefficients par 2 : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.",
              "Vérification : C, 8 et 8 ; H, 20 et 20 ; O, 26 à gauche et 16 + 10 = 26 à droite.",
              "Réponse : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lorsque le carbone brûle avec peu de dioxygène, il se forme du monoxyde de carbone CO, un gaz très toxique. 1) Écrire le bilan de la réaction avec les noms. 2) Écrire puis ajuster l'équation : C + O₂ → CO.",
              hint: "Comptez les atomes d'oxygène de chaque côté : à droite, chaque molécule CO n'en contient qu'un.",
              solution: [
                "1) Bilan : carbone + dioxygène → monoxyde de carbone.",
                "2) Dans C + O₂ → CO, il y a 2 atomes O à gauche et 1 à droite : on écrit 2 CO.",
                "Il y a alors 2 atomes C à droite : on écrit 2 C à gauche.",
                "Vérification : 2 C et 2 O de chaque côté.",
                "Réponse : 2 C + O₂ → 2 CO.",
              ],
            },
            {
              level: 2,
              statement: "Ajuster les équations suivantes, puis vérifier en comptant les atomes de chaque élément : a) CH₄ + O₂ → CO₂ + H₂O (combustion du méthane) ; b) Al + O₂ → Al₂O₃ (formation de l'oxyde d'aluminium) ; c) Fe + O₂ → Fe₃O₄ (combustion du fer).",
              hint: "Pour b, cherchez un nombre d'atomes d'oxygène commun à O₂ (2 atomes) et Al₂O₃ (3 atomes) : 6 par exemple.",
              solution: [
                "a) Carbone : 1 et 1. Hydrogène : 4 à gauche, donc 2 H₂O. Oxygène à droite : 2 + 2 = 4, donc 2 O₂. CH₄ + 2 O₂ → CO₂ + 2 H₂O (C : 1 et 1 ; H : 4 et 4 ; O : 4 et 4).",
                "b) Pour avoir 6 atomes O de chaque côté : 3 O₂ et 2 Al₂O₃. Il y a alors 4 atomes Al à droite : 4 Al. 4 Al + 3 O₂ → 2 Al₂O₃ (Al : 4 et 4 ; O : 6 et 6).",
                "c) Fer : 3 atomes à droite, donc 3 Fe. Oxygène : 4 atomes à droite, donc 2 O₂. 3 Fe + 2 O₂ → Fe₃O₄ (Fe : 3 et 3 ; O : 4 et 4).",
                "Réponse : a) CH₄ + 2 O₂ → CO₂ + 2 H₂O ; b) 4 Al + 3 O₂ → 2 Al₂O₃ ; c) 3 Fe + 2 O₂ → Fe₃O₄.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un réchaud de camping fonctionne au propane C₃H₈, qui brûle dans le dioxygène de l'air en formant du dioxyde de carbone et de l'eau. 1) Identifier les réactifs et les produits. 2) Un élève propose l'équation C₃H₈ + O₁₀ → C₃O₆ + H₈O₄. Expliquer pourquoi elle est fausse. 3) Écrire et ajuster correctement l'équation. 4) Sur la plaque de cuisson, du zinc est attaqué par un détartrant acide : Zn + H⁺ → Zn²⁺ + H₂. Ajuster cette équation en vérifiant les atomes et les charges.",
              hint: "Les formules des espèces sont imposées (O₂, CO₂, H₂O) ; seuls les coefficients peuvent changer. Pour l'équation avec des ions, les charges totales doivent être égales.",
              solution: [
                "1) Réactifs : propane C₃H₈ et dioxygène O₂. Produits : dioxyde de carbone CO₂ et eau H₂O.",
                "2) L'élève a modifié les formules : O₁₀, C₃O₆ et H₈O₄ ne sont pas le dioxygène, le dioxyde de carbone et l'eau. On ne doit jamais changer les indices, seulement placer des coefficients.",
                "3) Carbone : 3 à gauche, donc 3 CO₂. Hydrogène : 8 à gauche, donc 4 H₂O. Oxygène à droite : 3 × 2 + 4 × 1 = 10, donc 5 O₂. C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (C : 3 et 3 ; H : 8 et 8 ; O : 10 et 10).",
                "4) Hydrogène : 2 atomes dans H₂, donc 2 H⁺. Zn + 2 H⁺ → Zn²⁺ + H₂. Vérification : 1 Zn et 2 H de chaque côté ; charge +2 à gauche (2 × +1) et +2 à droite.",
                "Réponse : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O et Zn + 2 H⁺ → Zn²⁺ + H₂.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque équation à ses coefficients d'ajustement, dans l'ordre.",
            pairs: [
              { left: "… H₂ + … O₂ → … H₂O", right: "2 ; 1 ; 2" },
              { left: "… C + … O₂ → … CO₂", right: "1 ; 1 ; 1" },
              { left: "… CH₄ + … O₂ → … CO₂ + … H₂O", right: "1 ; 2 ; 1 ; 2" },
              { left: "… Fe + … O₂ → … Fe₃O₄", right: "3 ; 2 ; 1" },
              { left: "… Al + … O₂ → … Al₂O₃", right: "4 ; 3 ; 2" },
              { left: "… Fe + … H⁺ → … Fe²⁺ + … H₂", right: "1 ; 2 ; 1 ; 1" },
            ],
          },
          quiz: [
            {
              q: "Que signifie 3 H₂O dans une équation ?",
              options: ["3 atomes d'hydrogène et 1 d'oxygène", "1 molécule contenant 3 atomes", "3 molécules d'eau, soit 6 H et 3 O", "6 molécules d'eau"],
              answer: 2,
              why: "Le coefficient 3 multiplie toute la formule : 3 × 2 = 6 atomes H et 3 × 1 = 3 atomes O.",
            },
            {
              q: "Laquelle de ces équations est correctement ajustée ?",
              options: ["H₂ + O₂ → H₂O", "2 H₂ + O₂ → 2 H₂O", "H₂ + O₂ → H₂O₂", "2 H₂ + 2 O₂ → 2 H₂O"],
              answer: 1,
              why: "4 H et 2 O de chaque côté ; la troisième change la formule de l'eau, ce qui est interdit.",
            },
            {
              q: "Pour ajuster une équation, que peut-on modifier ?",
              options: ["Les coefficients devant les formules", "Les indices dans les formules", "Les symboles des éléments", "Le sens de la flèche"],
              answer: 0,
              why: "Seuls les coefficients peuvent changer : modifier un indice changerait l'espèce chimique.",
            },
            {
              q: "Quel coefficient faut-il placer devant O₂ dans : C₃H₈ + ... O₂ → 3 CO₂ + 4 H₂O ?",
              options: ["3", "4", "10", "5"],
              answer: 3,
              why: "À droite, il y a 3 × 2 + 4 = 10 atomes d'oxygène, soit 5 molécules O₂.",
            },
            {
              q: "Dans une équation avec des ions, que faut-il vérifier en plus des atomes ?",
              options: ["La couleur des ions", "La conservation des charges électriques", "La masse de chaque ion", "Le nombre de neutrons"],
              answer: 1,
              why: "La charge totale doit être la même du côté des réactifs et du côté des produits.",
            },
          ],
          trap: "Modifier les indices au lieu des coefficients, par exemple écrire H₂O₂ pour équilibrer les oxygènes : cela change l'espèce chimique, l'équation devient fausse.",
          method: "Faites un petit tableau de comptage sous l'équation (une ligne par élément, une colonne pour chaque côté) et mettez-le à jour après chaque coefficient ajouté. Gardez l'oxygène pour la fin et terminez toujours par une vérification complète, charges comprises.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-masse',
          title: "La conservation de la masse et des atomes",
          minutes: 30,
          objectives: [
            "Savoir que la masse totale se conserve au cours d'une transformation chimique.",
            "Interpréter la conservation de la masse par la conservation des atomes.",
            "Calculer une masse de réactif ou de produit en utilisant la conservation de la masse.",
            "Expliquer une variation apparente de masse dans un système ouvert.",
          ],
          course: [
            {
              heading: "Une loi découverte au XVIIIe siècle",
              paragraphs: [
                "À la fin du XVIIIe siècle, le chimiste français Antoine Lavoisier (1743-1794) réalise des expériences en pesant avec soin les substances avant et après une transformation chimique, dans des récipients fermés. Il constate que la masse totale ne change pas.",
                "On résume souvent sa découverte par la formule « Rien ne se perd, rien ne se crée, tout se transforme ». Les espèces chimiques changent, mais la matière n'apparaît pas et ne disparaît pas.",
              ],
              box: { label: "Propriété", text: "Au cours d'une transformation chimique, la masse totale se conserve : la masse des réactifs consommés est égale à la masse des produits formés." },
            },
            {
              heading: "L'explication : les atomes se conservent",
              paragraphs: [
                "Une transformation chimique est un réarrangement d'atomes : les liaisons entre atomes se cassent et d'autres se forment, mais aucun atome n'est créé ni détruit. On retrouve dans les produits exactement les mêmes atomes, en même nombre, que dans les réactifs consommés.",
                "Prenons la combustion du méthane : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Du côté des réactifs, on compte 1 atome de carbone, 4 atomes d'hydrogène et 4 atomes d'oxygène ; du côté des produits, exactement les mêmes. Comme chaque atome garde sa masse, la masse totale est la même avant et après. C'est pour cela qu'une équation doit être ajustée.",
                "Analogie : avec les briques d'un jeu de construction, on peut démonter une maison pour construire une voiture ; la forme change, mais le nombre de briques et donc la masse totale restent les mêmes.",
              ],
            },
            {
              heading: "Calculer une masse",
              paragraphs: [
                "La conservation de la masse permet de calculer une masse inconnue. Quand 12 g de carbone brûlent entièrement avec 32 g de dioxygène, il se forme 12 + 32 = 44 g de dioxyde de carbone. Inversement, si l'on sait que 16 g de méthane brûlent avec 64 g de dioxygène en formant 36 g d'eau, la masse de dioxyde de carbone formé est 16 + 64 - 36 = 44 g.",
                "Attention : seule la masse des réactifs réellement consommés compte. Si l'on fait réagir 10 g de fer avec 4 g de soufre et qu'il reste 3 g de fer à la fin, seuls 7 g de fer ont réagi : la masse de sulfure de fer formé est 7 + 4 = 11 g.",
              ],
              box: { label: "Formule", text: "Masse des réactifs consommés = masse des produits formés. Exemple : m(carbone consommé) + m(dioxygène consommé) = m(dioxyde de carbone formé)." },
            },
            {
              heading: "Système fermé et système ouvert",
              paragraphs: [
                "Si l'on fait réagir du vinaigre avec de l'hydrogénocarbonate de sodium (bicarbonate) dans un bécher ouvert posé sur une balance, on observe une effervescence et la masse affichée diminue. La loi est-elle fausse ? Non : un gaz, le dioxyde de carbone, s'échappe dans l'air et sa masse n'est plus pesée.",
                "Si l'on refait l'expérience dans un flacon fermé par un ballon de baudruche, le gaz est retenu (le ballon se gonfle) et la masse totale reste constante. Pour vérifier la conservation de la masse, il faut donc travailler en système fermé, sans échange de matière avec l'extérieur.",
              ],
              box: { label: "À retenir", text: "Dans un système ouvert, un gaz peut s'échapper (la masse affichée diminue) ou être absorbé depuis l'air (elle augmente). En système fermé, la masse totale reste toujours constante." },
            },
          ],
          keyPoints: [
            "Lors d'une transformation chimique, la masse totale se conserve (Lavoisier, XVIIIe siècle).",
            "Masse des réactifs consommés = masse des produits formés.",
            "Les atomes se réarrangent sans être créés ni détruits : c'est l'origine de la conservation de la masse.",
            "Seule compte la masse des réactifs réellement consommés, pas celle des réactifs en excès.",
            "Une perte de masse apparente vient souvent d'un gaz qui s'échappe d'un système ouvert.",
          ],
          example: {
            statement: "On chauffe un mélange de 10 g de fer et de 4 g de soufre. À la fin, le soufre a entièrement réagi et il reste 3 g de fer qui n'a pas réagi. Quelle masse de sulfure de fer s'est formée ?",
            solution: [
              "Masse de fer consommé : 10 - 3 = 7 g (les 3 g restants n'ont pas réagi).",
              "Masse de soufre consommé : 4 g (il a entièrement réagi).",
              "Conservation de la masse : m(sulfure de fer) = m(fer consommé) + m(soufre consommé).",
              "m(sulfure de fer) = 7 + 4 = 11 g.",
              "Réponse : il s'est formé 11 g de sulfure de fer (et il reste 3 g de fer en excès, soit 14 g au total comme au départ).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La combustion complète de 3 g de carbone consomme 8 g de dioxygène. Quelle masse de dioxyde de carbone est formée ?",
              hint: "La masse des produits formés est égale à la masse des réactifs consommés.",
              solution: [
                "Masse des réactifs consommés : 3 + 8 = 11 g.",
                "Le seul produit est le dioxyde de carbone : sa masse est égale à celle des réactifs consommés.",
                "Réponse : il se forme 11 g de dioxyde de carbone.",
              ],
            },
            {
              level: 2,
              statement: "Expérience 1 : dans un bécher ouvert posé sur une balance, on mélange du vinaigre et du bicarbonate de sodium. La balance affiche 250,0 g au départ et 247,8 g à la fin. Expérience 2 : on refait l'expérience dans un flacon fermé par un ballon ; la balance affiche 262,4 g au départ et 262,4 g à la fin. 1) Pourquoi la masse diminue-t-elle dans l'expérience 1 ? 2) Calculer la masse de gaz qui s'est échappée. 3) Que montre l'expérience 2 ?",
              hint: "Le gaz formé est du dioxyde de carbone : où va-t-il dans chaque expérience ?",
              solution: [
                "1) La réaction produit du dioxyde de carbone gazeux qui s'échappe du bécher ouvert : sa masse n'est plus mesurée par la balance.",
                "2) Masse de gaz échappé : 250,0 - 247,8 = 2,2 g.",
                "3) Dans le flacon fermé, le gaz est retenu dans le ballon : la masse totale reste égale à 262,4 g. La masse se conserve au cours de la transformation chimique.",
                "Réponse : 2,2 g de dioxyde de carbone se sont échappés ; en système fermé, la masse est conservée.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Le méthane CH₄ est le principal constituant du gaz naturel. Document : « La combustion complète de 16 g de méthane consomme 64 g de dioxygène et produit du dioxyde de carbone et 36 g d'eau. » 1) Écrire l'équation ajustée de la combustion du méthane. 2) Montrer, en comptant les atomes, que cette équation respecte la conservation des atomes. 3) Calculer la masse de dioxyde de carbone produite. 4) Une gazinière brûle 48 g de méthane. En utilisant la proportionnalité, calculer la masse de dioxyde de carbone rejetée.",
              hint: "Pour la question 4, cherchez par combien il faut multiplier 16 g pour obtenir 48 g.",
              solution: [
                "1) CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
                "2) Réactifs : 1 C, 4 H, 2 × 2 = 4 O. Produits : 1 C, 2 × 2 = 4 H, 2 + 2 × 1 = 4 O. Chaque élément a le même nombre d'atomes de chaque côté.",
                "3) Masse des réactifs consommés : 16 + 64 = 80 g. Masse de CO₂ : 80 - 36 = 44 g.",
                "4) 48 ÷ 16 = 3 : on brûle 3 fois plus de méthane, on produit donc 3 fois plus de dioxyde de carbone : 3 × 44 = 132 g.",
                "Réponse : 44 g de CO₂ pour 16 g de méthane, et 132 g de CO₂ pour 48 g de méthane.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La conservation de la masse.",
            statements: [
              { text: "Au cours d'une transformation chimique, la masse totale se conserve.", true: true, why: "La masse des réactifs consommés est égale à la masse des produits formés." },
              { text: "Quand une bougie brûle, sa matière disparaît.", true: false, why: "La cire se transforme en dioxyde de carbone et en eau, des gaz qui partent dans l'air." },
              { text: "La masse se conserve parce que les atomes se conservent.", true: true, why: "Les atomes se réarrangent sans être créés ni détruits." },
              { text: "Dans un bécher ouvert, la masse peut sembler diminuer si un gaz s'échappe.", true: true, why: "Le gaz qui part dans l'air n'est plus pesé : c'est une perte apparente." },
              { text: "La masse des produits formés est égale à la masse de tous les réactifs introduits, même ceux qui restent en excès.", true: false, why: "Seuls les réactifs consommés comptent ; la partie en excès n'a pas réagi." },
              { text: "Lavoisier a établi la conservation de la masse au XXe siècle.", true: false, why: "Il a mené ses travaux à la fin du XVIIIe siècle." },
            ],
          },
          quiz: [
            {
              q: "4 g de dihydrogène réagissent entièrement avec 32 g de dioxygène pour former de l'eau. Quelle masse d'eau obtient-on ?",
              options: ["28 g", "36 g", "32 g", "128 g"],
              answer: 1,
              why: "Masse des produits = masse des réactifs consommés : 4 + 32 = 36 g.",
            },
            {
              q: "Quelle est l'origine de la conservation de la masse ?",
              options: ["Les molécules ne changent pas", "La température reste constante", "Les gaz ne pèsent rien", "Les atomes se conservent"],
              answer: 3,
              why: "Les atomes se réarrangent en de nouvelles molécules, mais leur nombre et leur nature ne changent pas.",
            },
            {
              q: "On brûle de la laine de fer à l'air libre sur une balance. La masse augmente. Pourquoi ?",
              options: ["Le fer fixe du dioxygène de l'air", "Le fer se multiplie", "La chaleur pèse sur la balance", "La loi de Lavoisier ne s'applique pas au fer"],
              answer: 0,
              why: "Le dioxygène de l'air, qui n'était pas pesé au départ, se combine au fer pour former de l'oxyde de fer.",
            },
            {
              q: "Qui a établi la loi de conservation de la masse ?",
              options: ["Mendeleïev", "Rutherford", "Lavoisier", "Newton"],
              answer: 2,
              why: "Antoine Lavoisier l'a établie à la fin du XVIIIe siècle grâce à des pesées précises.",
            },
            {
              q: "Pour vérifier la conservation de la masse lors d'une réaction qui produit un gaz, il faut :",
              options: ["travailler dans un récipient ouvert", "travailler dans un récipient fermé", "chauffer très fort", "ajouter de l'eau"],
              answer: 1,
              why: "En système fermé, le gaz formé reste dans le récipient et continue d'être pesé.",
            },
          ],
          trap: "Ajouter la masse de tous les réactifs introduits, y compris ceux qui restent en excès : seule la masse des réactifs réellement consommés est égale à celle des produits.",
          method: "Écrivez toujours la relation en toutes lettres avant de calculer : « masse des réactifs consommés = masse des produits formés ». Repérez ensuite ce qui reste en excès et retirez-le, puis vérifiez que la masse totale avant (y compris l'excès) est égale à la masse totale après.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉCRIRE UN MOUVEMENT                                                   */
    /* ==================================================================== */
    {
      id: 'mouvements',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'referentiel-trajectoire',
          title: "Référentiel, trajectoire et nature du mouvement",
          minutes: 30,
          objectives: [
            "Choisir un référentiel pour décrire le mouvement d'un objet et comprendre la relativité du mouvement.",
            "Identifier la trajectoire d'un objet : rectiligne, circulaire ou curviligne.",
            "Caractériser un mouvement : uniforme, accéléré ou ralenti.",
          ],
          course: [
            {
              heading: "Le mouvement est relatif : le référentiel",
              paragraphs: [
                "Vous êtes assis dans un train qui roule. Par rapport à votre siège, vous êtes immobile ; par rapport au quai de la gare, vous êtes en mouvement, à la vitesse du train. Un même objet peut donc être immobile ou en mouvement selon l'objet par rapport auquel on l'observe : on dit que le mouvement est relatif.",
                "L'objet par rapport auquel on décrit un mouvement s'appelle le référentiel. Pour décrire un mouvement, il faut toujours préciser le référentiel choisi : « le passager est immobile dans le référentiel du train » et « le passager est en mouvement dans le référentiel du quai » sont deux phrases vraies.",
              ],
              box: { label: "Définition", text: "Un référentiel est l'objet de référence par rapport auquel on étudie le mouvement d'un autre objet. Le mouvement d'un objet dépend du référentiel choisi : il est relatif." },
            },
            {
              heading: "Quelques référentiels utiles",
              paragraphs: [
                "Le référentiel terrestre est la Terre, ou tout objet immobile par rapport au sol (un arbre, un bâtiment, le quai). On l'utilise pour étudier les mouvements de la vie courante : une voiture, un ballon, un cycliste.",
                "Pour étudier le mouvement de la Lune ou d'un satellite autour de la Terre, on utilise le référentiel géocentrique, centré sur la Terre. Pour étudier le mouvement des planètes autour du Soleil, on utilise le référentiel héliocentrique, centré sur le Soleil. Dans le référentiel héliocentrique, la Terre décrit en un an une trajectoire presque circulaire autour du Soleil.",
              ],
            },
            {
              heading: "La trajectoire",
              paragraphs: [
                "La trajectoire d'un point d'un objet est l'ensemble des positions successives occupées par ce point au cours du mouvement. On peut l'imaginer comme la trace qu'il laisserait derrière lui, comme la traînée blanche d'un avion dans le ciel.",
                "Si la trajectoire est une droite, le mouvement est rectiligne (une bille qui tombe, une voiture sur une route droite). Si c'est un cercle ou une portion de cercle, le mouvement est circulaire (un point d'une roue de vélo dans le référentiel du vélo, une nacelle de grande roue). Sinon, c'est une courbe quelconque et le mouvement est curviligne (un ballon lancé vers le panier).",
                "La trajectoire dépend aussi du référentiel. La valve d'une roue de vélo décrit un cercle dans le référentiel du vélo, mais une courbe en forme d'arches successives dans le référentiel terrestre.",
              ],
              box: { label: "À retenir", text: "Trajectoire droite : mouvement rectiligne. Trajectoire en cercle : mouvement circulaire. Autre courbe : mouvement curviligne. La trajectoire dépend du référentiel choisi." },
            },
            {
              heading: "La nature du mouvement : comment évolue la vitesse",
              paragraphs: [
                "On décrit aussi le mouvement par l'évolution de la valeur de la vitesse. Si elle reste constante, le mouvement est uniforme. Si elle augmente, le mouvement est accéléré. Si elle diminue, le mouvement est ralenti (on dit aussi décéléré).",
                "On combine les deux descriptions : une voiture qui roule à 90 km/h constants sur une route droite a un mouvement rectiligne uniforme ; une pomme qui tombe d'un arbre a un mouvement rectiligne accéléré ; un vélo qui freine dans un virage a un mouvement curviligne ralenti.",
                "Attention : la vitesse a une valeur, mais aussi une direction et un sens. Dans un mouvement circulaire uniforme (une nacelle de manège qui tourne à vitesse constante), la valeur de la vitesse ne change pas, mais sa direction change à chaque instant : la vitesse n'est donc pas constante, seule sa valeur l'est.",
              ],
              box: { label: "Règle", text: "Valeur de la vitesse constante : mouvement uniforme. Valeur qui augmente : mouvement accéléré. Valeur qui diminue : mouvement ralenti. Un mouvement se décrit par sa trajectoire et par l'évolution de sa vitesse : par exemple « rectiligne uniforme »." },
            },
          ],
          keyPoints: [
            "Le référentiel est l'objet par rapport auquel on décrit un mouvement ; il faut toujours le préciser.",
            "Un objet peut être immobile dans un référentiel et en mouvement dans un autre : le mouvement est relatif.",
            "Référentiels terrestre, géocentrique (centré sur la Terre) et héliocentrique (centré sur le Soleil).",
            "Trajectoire rectiligne, circulaire ou curviligne ; elle dépend du référentiel.",
            "Mouvement uniforme (vitesse constante en valeur), accéléré ou ralenti.",
            "Dans un mouvement circulaire uniforme, la valeur de la vitesse est constante mais sa direction change.",
          ],
          example: {
            statement: "Un skieur descend une piste rectiligne en allant de plus en plus vite. Assis sur un télésiège, son ami le regarde passer. 1) Décrire le mouvement du skieur dans le référentiel terrestre. 2) Le télésiège est-il immobile dans le référentiel terrestre ? 3) L'ami est-il en mouvement par rapport au télésiège ?",
            solution: [
              "1) Dans le référentiel terrestre (la piste), la trajectoire du skieur est une droite et sa vitesse augmente : son mouvement est rectiligne accéléré.",
              "2) Non : le télésiège se déplace le long de son câble par rapport au sol ; il est en mouvement dans le référentiel terrestre.",
              "3) Non : l'ami est assis sur le télésiège, il ne bouge pas par rapport à lui. Il est immobile dans le référentiel du télésiège, mais en mouvement dans le référentiel terrestre.",
              "Réponse : mouvement rectiligne accéléré du skieur ; le télésiège bouge par rapport au sol ; l'ami est immobile par rapport au télésiège.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner la nature de la trajectoire (rectiligne, circulaire ou curviligne) dans le référentiel terrestre pour : a) une balle de tennis lancée par un joueur ; b) une nacelle de grande roue ; c) un ascenseur qui monte ; d) un caillou lâché sans vitesse du haut d'un pont.",
              hint: "Imaginez la trace laissée par l'objet : est-ce une droite, un cercle ou une autre courbe ?",
              solution: [
                "a) La balle décrit une courbe : trajectoire curviligne.",
                "b) La nacelle décrit un cercle : trajectoire circulaire.",
                "c) L'ascenseur monte en ligne droite : trajectoire rectiligne.",
                "d) Le caillou lâché tombe verticalement : trajectoire rectiligne.",
                "Réponse : a) curviligne ; b) circulaire ; c) rectiligne ; d) rectiligne.",
              ],
            },
            {
              level: 2,
              statement: "Une cycliste roule sur une route droite. Phase 1 : elle démarre et sa vitesse passe de 0 à 20 km/h. Phase 2 : elle roule à 20 km/h pendant 10 minutes. Phase 3 : elle freine et s'arrête au feu rouge. 1) Quel référentiel utiliser ? 2) Donner la nature du mouvement dans chaque phase. 3) Dans le référentiel du vélo, la cycliste est-elle en mouvement ?",
              hint: "Pour chaque phase, regardez la forme de la trajectoire puis l'évolution de la valeur de la vitesse.",
              solution: [
                "1) On utilise le référentiel terrestre (la route).",
                "2) La route est droite : la trajectoire est rectiligne dans les trois phases. Phase 1 : la vitesse augmente, mouvement rectiligne accéléré. Phase 2 : la vitesse est constante, mouvement rectiligne uniforme. Phase 3 : la vitesse diminue, mouvement rectiligne ralenti.",
                "3) Non : la cycliste (son buste, par exemple) ne bouge pas par rapport à son vélo ; elle est immobile dans le référentiel du vélo.",
                "Réponse : référentiel terrestre ; accéléré, puis uniforme, puis ralenti ; immobile par rapport au vélo.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : « La Station spatiale internationale (ISS) tourne autour de la Terre sur une trajectoire pratiquement circulaire, à environ 400 km d'altitude. La valeur de sa vitesse reste pratiquement constante, environ 28 000 km/h. À bord, les astronautes flottent dans la station. » 1) Quel référentiel est adapté pour décrire le mouvement de l'ISS ? 2) Caractériser le mouvement de l'ISS dans ce référentiel. 3) Un élève affirme : « Puisque la valeur de la vitesse est constante, la vitesse de l'ISS ne change pas. » Discuter cette affirmation. 4) Un astronaute qui flotte immobile au milieu de la station est-il en mouvement ? Répondre en précisant le référentiel.",
              hint: "Pensez à la différence entre la valeur de la vitesse et sa direction, et précisez toujours un référentiel pour parler d'immobilité.",
              solution: [
                "1) L'ISS tourne autour de la Terre : on utilise le référentiel géocentrique, centré sur la Terre.",
                "2) La trajectoire est circulaire et la valeur de la vitesse est constante : le mouvement est circulaire uniforme.",
                "3) L'affirmation est incorrecte : la valeur de la vitesse est constante, mais sa direction change à chaque instant, puisque la station tourne. La vitesse, qui a une valeur et une direction, n'est donc pas constante.",
                "4) Dans le référentiel de la station, l'astronaute est immobile. Dans le référentiel géocentrique, il est en mouvement circulaire avec la station, à environ 28 000 km/h.",
                "Réponse : référentiel géocentrique ; mouvement circulaire uniforme ; la direction de la vitesse change ; l'astronaute est immobile par rapport à l'ISS mais en mouvement par rapport à la Terre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot du mouvement à sa définition ou à son exemple.",
            pairs: [
              { left: "Référentiel", right: "Objet par rapport auquel on décrit le mouvement" },
              { left: "Trajectoire", right: "Ensemble des positions successives d'un point" },
              { left: "Mouvement rectiligne uniforme", right: "Voiture à 90 km/h constants sur une route droite" },
              { left: "Mouvement rectiligne accéléré", right: "Pomme qui tombe d'un arbre" },
              { left: "Mouvement circulaire uniforme", right: "Nacelle de manège tournant à vitesse constante" },
              { left: "Référentiel héliocentrique", right: "Centré sur le Soleil, pour étudier les planètes" },
            ],
          },
          quiz: [
            {
              q: "Un passager est assis dans un bus qui roule. Dans quel référentiel est-il immobile ?",
              options: ["Le référentiel terrestre", "Le référentiel du bus", "Le référentiel d'un piéton sur le trottoir", "Le référentiel héliocentrique"],
              answer: 1,
              why: "Le passager ne bouge pas par rapport au bus ; il est en mouvement par rapport au sol et au piéton.",
            },
            {
              q: "Une bille lâchée tombe verticalement de plus en plus vite. Son mouvement est :",
              options: ["rectiligne uniforme", "circulaire accéléré", "curviligne ralenti", "rectiligne accéléré"],
              answer: 3,
              why: "La trajectoire est une droite verticale et la vitesse augmente.",
            },
            {
              q: "Quel référentiel utilise-t-on pour étudier le mouvement de la Lune autour de la Terre ?",
              options: ["Le référentiel géocentrique", "Le référentiel héliocentrique", "Le référentiel d'une voiture", "Le référentiel de la Lune"],
              answer: 0,
              why: "Le référentiel géocentrique, centré sur la Terre, sert à étudier la Lune et les satellites.",
            },
            {
              q: "Dans un mouvement ralenti :",
              options: ["la vitesse augmente", "la vitesse reste constante", "la valeur de la vitesse diminue", "la trajectoire est forcément circulaire"],
              answer: 2,
              why: "Un mouvement ralenti est un mouvement dont la valeur de la vitesse diminue, quelle que soit la trajectoire.",
            },
            {
              q: "Dans un mouvement circulaire uniforme, qu'est-ce qui change au cours du temps ?",
              options: ["La valeur de la vitesse", "La direction de la vitesse", "Rien du tout"],
              answer: 1,
              why: "La valeur reste constante, mais la direction de la vitesse change en permanence le long du cercle.",
            },
          ],
          trap: "Dire qu'un objet « est immobile » ou « est en mouvement » sans préciser le référentiel : la réponse n'a de sens que par rapport à un objet de référence choisi.",
          method: "Pour décrire un mouvement, répondez toujours à trois questions dans cet ordre : par rapport à quoi (le référentiel) ? Quelle forme de trajectoire (rectiligne, circulaire, curviligne) ? Comment évolue la valeur de la vitesse (uniforme, accéléré, ralenti) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse',
          title: "Calculer et exploiter une vitesse",
          minutes: 30,
          objectives: [
            "Utiliser la relation v = d / t pour calculer une vitesse moyenne.",
            "Calculer une distance ou une durée à partir de la vitesse.",
            "Convertir une vitesse de m/s en km/h et inversement.",
            "Exploiter la vitesse dans une situation de sécurité routière.",
          ],
          course: [
            {
              heading: "La vitesse moyenne",
              paragraphs: [
                "La vitesse moyenne d'un objet est le quotient de la distance parcourue par la durée du parcours. Elle s'écrit v = d / t, avec v la vitesse, d la distance parcourue et t la durée.",
                "Si la distance est en mètres (m) et la durée en secondes (s), la vitesse est en mètres par seconde (m/s). Si la distance est en kilomètres (km) et la durée en heures (h), la vitesse est en kilomètres par heure (km/h). Exemple : en 2009, Usain Bolt a couru le 100 m en 9,58 s ; sa vitesse moyenne vaut 100 ÷ 9,58 ≈ 10,4 m/s.",
              ],
              box: { label: "Formule", text: "v = d / t, avec d en m et t en s pour v en m/s, ou d en km et t en h pour v en km/h. On en déduit d = v × t et t = d / v." },
            },
            {
              heading: "Calculer une distance ou une durée",
              paragraphs: [
                "La relation v = d / t peut se transformer. Pour calculer une distance : d = v × t. Une voiture qui roule à 90 km/h pendant 2 h parcourt 90 × 2 = 180 km. Pour calculer une durée : t = d / v. Pour parcourir 270 km à 90 km/h, il faut 270 ÷ 90 = 3 h.",
                "Un moyen mnémotechnique : dans un triangle, placez d en haut, v et t en bas. En cachant la grandeur cherchée, on lit la formule : d = v × t, v = d / t, t = d / v.",
                "Attention aux durées : 1 h 30 min ne s'écrit pas 1,30 h mais 1,5 h, car 30 min est la moitié d'une heure. De même, 15 min = 0,25 h et 45 min = 0,75 h. Pour convertir des minutes en heures, on divise par 60.",
              ],
            },
            {
              heading: "Convertir entre m/s et km/h",
              paragraphs: [
                "1 m/s signifie 1 m parcouru chaque seconde. En une heure (3 600 s), on parcourt donc 3 600 m, soit 3,6 km : 1 m/s = 3,6 km/h. Pour passer des m/s aux km/h, on multiplie par 3,6 ; pour passer des km/h aux m/s, on divise par 3,6.",
                "Exemples : 10 m/s = 10 × 3,6 = 36 km/h ; 90 km/h = 90 ÷ 3,6 = 25 m/s ; 130 km/h ≈ 36,1 m/s. Quelques ordres de grandeur : un piéton marche à environ 1 m/s (environ 4 km/h), le son se propage dans l'air à environ 340 m/s, la lumière dans le vide à 300 000 km/s.",
              ],
              box: { label: "Règle", text: "m/s → km/h : multiplier par 3,6. km/h → m/s : diviser par 3,6. Car 1 m/s = 3 600 m/h = 3,6 km/h." },
            },
            {
              heading: "Vitesse et sécurité routière",
              paragraphs: [
                "Le compteur d'une voiture indique la vitesse à chaque instant, appelée vitesse instantanée ; la vitesse moyenne sur un trajet tient compte des arrêts et des ralentissements. Les deux peuvent être très différentes.",
                "Entre le moment où un conducteur voit un obstacle et le moment où il commence à freiner, il s'écoule une durée appelée temps de réaction, de l'ordre de 1 s pour un conducteur attentif (davantage s'il est fatigué, distrait ou sous l'effet de l'alcool). Pendant ce temps, la voiture continue à la même vitesse : c'est la distance de réaction, d = v × t. À 90 km/h, soit 25 m/s, elle parcourt 25 m en 1 s sans freiner.",
              ],
              box: { label: "À retenir", text: "Distance de réaction = vitesse × temps de réaction, avec la vitesse en m/s et le temps en s. Plus la vitesse est grande, plus la distance parcourue avant de commencer à freiner est grande." },
            },
          ],
          keyPoints: [
            "Vitesse moyenne : v = d / t ; on en déduit d = v × t et t = d / v.",
            "Unités cohérentes : m et s donnent des m/s ; km et h donnent des km/h.",
            "1 m/s = 3,6 km/h : multiplier par 3,6 pour passer en km/h, diviser par 3,6 pour passer en m/s.",
            "1 h 30 min = 1,5 h (et non 1,30 h) : diviser les minutes par 60.",
            "Distance de réaction = vitesse (en m/s) × temps de réaction (environ 1 s).",
          ],
          example: {
            statement: "Usain Bolt a couru le 100 m en 9,58 s en 2009. Calculer sa vitesse moyenne en m/s, puis en km/h. Arrondir au dixième.",
            solution: [
              "Données : d = 100 m ; t = 9,58 s.",
              "Formule : v = d / t.",
              "v = 100 ÷ 9,58 ≈ 10,44 m/s, soit environ 10,4 m/s.",
              "Conversion en km/h : on multiplie par 3,6 : 10,44 × 3,6 ≈ 37,6 km/h.",
              "Réponse : sa vitesse moyenne vaut environ 10,4 m/s, soit environ 37,6 km/h.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un cycliste parcourt 30 km en 1 h 30 min. Calculer sa vitesse moyenne en km/h, puis en m/s (arrondir au centième).",
              hint: "Convertissez d'abord 1 h 30 min en heures : 30 min, c'est la moitié d'une heure.",
              solution: [
                "Durée : 1 h 30 min = 1,5 h.",
                "v = d / t = 30 ÷ 1,5 = 20 km/h.",
                "Conversion : 20 ÷ 3,6 ≈ 5,56 m/s.",
                "Réponse : la vitesse moyenne du cycliste est de 20 km/h, soit environ 5,56 m/s.",
              ],
            },
            {
              level: 2,
              statement: "1) Convertir 72 km/h en m/s et 15 m/s en km/h. 2) Un TGV roule à la vitesse moyenne de 300 km/h. Quelle distance parcourt-il en 2 h 15 min ? 3) Une voiture doit parcourir 150 km à la vitesse moyenne de 90 km/h. Calculer la durée du trajet en heures, puis en heures et minutes.",
              hint: "2 h 15 min = 2,25 h ; pour la question 3, convertissez la partie décimale des heures en minutes en la multipliant par 60.",
              solution: [
                "1) 72 ÷ 3,6 = 20 m/s ; 15 × 3,6 = 54 km/h.",
                "2) Durée : 2 h 15 min = 2,25 h. d = v × t = 300 × 2,25 = 675 km.",
                "3) t = d / v = 150 ÷ 90 ≈ 1,67 h. Plus précisément, 150 ÷ 90 = 1 + 60/90 = 1 + 2/3 : le trajet dure 1 h et 2/3 h, et 2/3 × 60 min = 40 min.",
                "Réponse : 20 m/s et 54 km/h ; 675 km ; 1 h 40 min.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : « On admet qu'un conducteur attentif a un temps de réaction de 1 s. Pendant ce temps, le véhicule continue à rouler à vitesse constante. » 1) Convertir 50 km/h et 130 km/h en m/s (arrondir au dixième). 2) Calculer la distance de réaction à 50 km/h et à 130 km/h. 3) Sur autoroute à 130 km/h, un conducteur quitte la route des yeux pendant 3 s pour lire un message. Quelle distance parcourt-il sans regarder la route ? Comparer à la longueur d'un terrain de football (environ 100 m). 4) Expliquer pourquoi la vitesse est limitée à 30 km/h ou 50 km/h près des écoles.",
              hint: "Utilisez d = v × t avec v en m/s et t en s.",
              solution: [
                "1) 50 ÷ 3,6 ≈ 13,9 m/s ; 130 ÷ 3,6 ≈ 36,1 m/s.",
                "2) À 50 km/h : d = 13,9 × 1 ≈ 13,9 m. À 130 km/h : d = 36,1 × 1 ≈ 36,1 m.",
                "3) d = 36,1 × 3 ≈ 108 m : le conducteur parcourt plus que la longueur d'un terrain de football sans regarder la route.",
                "4) Plus la vitesse est faible, plus la distance parcourue pendant le temps de réaction est courte : le conducteur peut s'arrêter plus tôt si un enfant traverse, et le choc éventuel est moins violent.",
                "Réponse : 13,9 m et 36,1 m de distance de réaction ; environ 108 m parcourus en 3 s à 130 km/h.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour résoudre un exercice de calcul de vitesse.",
            items: [
              "Relever les données de l'énoncé (distance, durée)",
              "Convertir les données dans des unités cohérentes",
              "Écrire la formule littérale v = d / t",
              "Remplacer les lettres par les valeurs",
              "Calculer et arrondir le résultat",
              "Conclure par une phrase avec l'unité",
            ],
          },
          quiz: [
            {
              q: "Un coureur parcourt 400 m en 50 s. Quelle est sa vitesse moyenne ?",
              options: ["20 m/s", "8 m/s", "450 m/s", "0,125 m/s"],
              answer: 1,
              why: "v = d / t = 400 ÷ 50 = 8 m/s.",
            },
            {
              q: "Combien vaut 20 m/s en km/h ?",
              options: ["5,6 km/h", "200 km/h", "72 km/h", "23,6 km/h"],
              answer: 2,
              why: "On multiplie par 3,6 : 20 × 3,6 = 72 km/h.",
            },
            {
              q: "Comment écrire 1 h 45 min en heures ?",
              options: ["1,75 h", "1,45 h", "1,4 h", "2,15 h"],
              answer: 0,
              why: "45 min = 45 ÷ 60 = 0,75 h, donc 1 h 45 min = 1,75 h.",
            },
            {
              q: "Quelle relation permet de calculer une durée ?",
              options: ["t = v × d", "t = v / d", "t = d + v", "t = d / v"],
              answer: 3,
              why: "De v = d / t, on déduit t = d / v.",
            },
            {
              q: "Une voiture roule à 25 m/s et le conducteur a un temps de réaction de 1 s. Quelle distance parcourt-elle avant le début du freinage ?",
              options: ["90 m", "2,5 m", "25 m", "1 m"],
              answer: 2,
              why: "Distance de réaction : d = v × t = 25 × 1 = 25 m.",
            },
          ],
          trap: "Écrire 1 h 30 min sous la forme 1,30 h : une heure contient 60 minutes, pas 100 ; 1 h 30 min = 1,5 h.",
          method: "Avant tout calcul, vérifiez que les unités sont cohérentes (m avec s, ou km avec h) et convertissez si besoin. Après le calcul, contrôlez l'ordre de grandeur : un piéton à 50 m/s ou une voiture à 2 km/h doivent vous alerter.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chronophotographie',
          title: "Mouvements uniformes et variés : lire une chronophotographie",
          minutes: 30,
          objectives: [
            "Exploiter une chronophotographie pour identifier la trajectoire d'un objet.",
            "Caractériser un mouvement uniforme, accéléré ou ralenti à partir de l'écart entre les positions.",
            "Calculer une vitesse à partir d'une chronophotographie et de son échelle.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une chronophotographie ?",
              paragraphs: [
                "Une chronophotographie est une image sur laquelle on a enregistré les positions successives d'un objet en mouvement, prises à intervalles de temps égaux. Cette durée constante entre deux positions s'appelle l'intervalle de temps, souvent noté τ (la lettre grecque tau) ; par exemple τ = 40 ms = 0,040 s.",
                "La technique a été mise au point à la fin du XIXe siècle par le physiologiste français Étienne-Jules Marey pour étudier le vol des oiseaux ou la course des chevaux. Aujourd'hui, on l'obtient facilement à partir d'une vidéo, avec un logiciel de pointage.",
              ],
              box: { label: "Définition", text: "Une chronophotographie représente les positions successives d'un point d'un objet à intervalles de temps égaux, de durée τ. Elle montre à la fois la trajectoire et l'évolution de la vitesse." },
            },
            {
              heading: "Lire la trajectoire et la nature du mouvement",
              paragraphs: [
                "La forme du tracé des positions donne la trajectoire : des points alignés indiquent un mouvement rectiligne, des points sur un cercle un mouvement circulaire, des points sur une autre courbe un mouvement curviligne.",
                "L'écart entre deux positions successives est la distance parcourue pendant la même durée τ. Si les écarts sont égaux, l'objet parcourt la même distance pendant chaque intervalle : sa vitesse est constante, le mouvement est uniforme. Si les écarts augmentent, la vitesse augmente : le mouvement est accéléré. Si les écarts diminuent, le mouvement est ralenti.",
                "Exemple : une bille lâchée sans vitesse a des positions alignées verticalement, de plus en plus espacées : son mouvement est rectiligne accéléré.",
              ],
              box: { label: "Règle", text: "Écarts égaux entre les positions : mouvement uniforme. Écarts croissants : mouvement accéléré. Écarts décroissants : mouvement ralenti." },
            },
            {
              heading: "Calculer une vitesse avec l'échelle",
              paragraphs: [
                "Pour calculer la vitesse entre deux positions, on mesure la distance qui les sépare sur l'image, on la convertit en distance réelle grâce à l'échelle, puis on divise par la durée correspondante. Entre deux positions successives, cette durée vaut τ ; entre une position et la n-ième suivante, elle vaut n × τ.",
                "Exemple : sur une chronophotographie à l'échelle 1 cm sur l'image pour 10 cm en réalité, avec τ = 0,1 s, deux positions successives d'une bille sont séparées de 2,0 cm sur l'image. Distance réelle : 2,0 × 10 = 20 cm = 0,20 m. Vitesse : v = 0,20 ÷ 0,1 = 2,0 m/s.",
                "Cette vitesse calculée entre deux positions très proches est une bonne estimation de la vitesse instantanée de l'objet à cet endroit. Calculée entre la première et la dernière position, c'est la vitesse moyenne sur tout le parcours.",
              ],
              box: { label: "Formule", text: "Vitesse entre deux positions séparées de n intervalles : v = d / (n × τ), avec d la distance réelle en m et τ en s." },
            },
          ],
          keyPoints: [
            "Une chronophotographie montre les positions d'un objet à intervalles de temps égaux τ.",
            "La forme du tracé donne la trajectoire : rectiligne, circulaire ou curviligne.",
            "Écarts égaux : uniforme ; écarts croissants : accéléré ; écarts décroissants : ralenti.",
            "On utilise l'échelle pour passer de la distance mesurée sur l'image à la distance réelle.",
            "Vitesse entre deux positions séparées de n intervalles : v = d / (n × τ).",
          ],
          example: {
            statement: "Sur une chronophotographie d'un palet glissant sur une table, les positions sont alignées et séparées de 1,5 cm sur l'image. L'échelle est de 1 cm sur l'image pour 4 cm en réalité, et τ = 0,040 s. Caractériser le mouvement du palet et calculer sa vitesse.",
            solution: [
              "Les positions sont alignées : la trajectoire est rectiligne.",
              "Les écarts entre positions successives sont égaux : la vitesse est constante, le mouvement est uniforme.",
              "Distance réelle entre deux positions : 1,5 × 4 = 6,0 cm = 0,060 m.",
              "Vitesse : v = d / τ = 0,060 ÷ 0,040 = 1,5 m/s.",
              "Réponse : le mouvement du palet est rectiligne uniforme, à la vitesse de 1,5 m/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On décrit trois chronophotographies de mouvements rectilignes. A : les écarts entre positions successives valent 2 cm, 2 cm, 2 cm, 2 cm. B : 1 cm, 2 cm, 3 cm, 4 cm. C : 4 cm, 3 cm, 2 cm, 1 cm. Donner la nature de chaque mouvement.",
              hint: "Les durées entre deux positions sont toutes égales : comparez seulement les écarts.",
              solution: [
                "A : écarts égaux, la vitesse est constante : mouvement rectiligne uniforme.",
                "B : écarts croissants, la vitesse augmente : mouvement rectiligne accéléré.",
                "C : écarts décroissants, la vitesse diminue : mouvement rectiligne ralenti.",
                "Réponse : A uniforme, B accéléré, C ralenti.",
              ],
            },
            {
              level: 2,
              statement: "On filme la chute d'une bille lâchée sans vitesse et on obtient une chronophotographie avec τ = 0,05 s. Les distances réelles entre positions successives sont : M0M1 = 1,2 cm ; M1M2 = 3,7 cm ; M2M3 = 6,1 cm ; M3M4 = 8,6 cm. 1) Quelle est la nature du mouvement ? 2) Calculer la vitesse de la bille sur chaque intervalle, en m/s. 3) Comment évolue cette vitesse ?",
              hint: "Convertissez chaque distance en mètres avant de la diviser par τ.",
              solution: [
                "1) La bille tombe verticalement (trajectoire rectiligne) et les écarts augmentent : mouvement rectiligne accéléré.",
                "2) M0M1 : 0,012 ÷ 0,05 = 0,24 m/s. M1M2 : 0,037 ÷ 0,05 = 0,74 m/s. M2M3 : 0,061 ÷ 0,05 = 1,22 m/s. M3M4 : 0,086 ÷ 0,05 = 1,72 m/s.",
                "3) La vitesse augmente à chaque intervalle, d'environ 0,5 m/s toutes les 0,05 s.",
                "Réponse : mouvement rectiligne accéléré ; vitesses 0,24 ; 0,74 ; 1,22 et 1,72 m/s.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On étudie la chronophotographie d'un skateur sur une piste droite, avec τ = 0,5 s. Les distances réelles entre positions successives sont : M0M1 = 0,5 m ; M1M2 = 1,0 m ; M2M3 = 1,5 m ; M3M4 = 1,5 m ; M4M5 = 1,5 m ; M5M6 = 1,5 m ; M6M7 = 1,5 m ; M7M8 = 1,0 m ; M8M9 = 0,5 m. 1) Découper le mouvement en trois phases et donner la nature du mouvement dans chacune. 2) Calculer la vitesse du skateur pendant la phase uniforme, en m/s puis en km/h. 3) Calculer la distance totale parcourue et la durée totale, puis la vitesse moyenne sur tout le parcours (arrondir au dixième). 4) Pourquoi la vitesse moyenne est-elle inférieure à la vitesse de la phase uniforme ?",
              hint: "Il y a 9 intervalles de 0,5 s entre M0 et M9.",
              solution: [
                "1) De M0 à M2 : écarts croissants (0,5 m puis 1,0 m), mouvement rectiligne accéléré. De M2 à M7 : écarts égaux à 1,5 m, mouvement rectiligne uniforme. De M7 à M9 : écarts décroissants (1,0 m puis 0,5 m), mouvement rectiligne ralenti.",
                "2) v = 1,5 ÷ 0,5 = 3,0 m/s ; en km/h : 3,0 × 3,6 = 10,8 km/h.",
                "3) Distance totale : 0,5 + 1,0 + 5 × 1,5 + 1,0 + 0,5 = 10,5 m. Durée : 9 × 0,5 = 4,5 s. Vitesse moyenne : 10,5 ÷ 4,5 ≈ 2,3 m/s.",
                "4) Pendant les phases de démarrage et de freinage, le skateur va moins vite que 3,0 m/s : la vitesse moyenne sur tout le parcours est donc plus faible.",
                "Réponse : accéléré, uniforme puis ralenti ; 3,0 m/s soit 10,8 km/h ; vitesse moyenne d'environ 2,3 m/s.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Lire une chronophotographie.",
            statements: [
              { text: "Sur une chronophotographie, la durée entre deux positions successives est toujours la même.", true: true, why: "Les positions sont enregistrées à intervalles de temps égaux, de durée τ." },
              { text: "Des positions de plus en plus serrées indiquent un mouvement accéléré.", true: false, why: "Des écarts qui diminuent indiquent que l'objet parcourt moins de distance pendant chaque τ : il ralentit." },
              { text: "Des positions alignées et régulièrement espacées indiquent un mouvement rectiligne uniforme.", true: true, why: "Alignées : trajectoire rectiligne ; écarts égaux : vitesse constante." },
              { text: "Une bille lâchée sans vitesse a un mouvement rectiligne uniforme.", true: false, why: "Sa vitesse augmente pendant la chute : le mouvement est rectiligne accéléré." },
              { text: "Pour calculer une vitesse réelle, il faut utiliser l'échelle de l'image.", true: true, why: "La distance mesurée sur l'image doit être convertie en distance réelle." },
              { text: "Entre M0 et M4, la durée écoulée vaut 4 × τ.", true: true, why: "Il y a 4 intervalles entre M0 et M4." },
              { text: "Entre M0 et M4, la durée écoulée vaut 5 × τ, car il y a 5 positions.", true: false, why: "On compte les intervalles, pas les positions : 5 positions délimitent 4 intervalles." },
            ],
          },
          quiz: [
            {
              q: "Que représente τ sur une chronophotographie ?",
              options: ["La distance entre deux positions", "L'échelle de l'image", "La vitesse de l'objet", "La durée entre deux positions successives"],
              answer: 3,
              why: "τ est l'intervalle de temps constant entre deux prises de vue successives.",
            },
            {
              q: "Les écarts entre les positions d'un objet sont de plus en plus grands. Le mouvement est :",
              options: ["ralenti", "uniforme", "circulaire", "accéléré"],
              answer: 3,
              why: "Pendant une même durée, l'objet parcourt une distance de plus en plus grande : sa vitesse augmente.",
            },
            {
              q: "Deux positions successives sont séparées de 0,30 m réels et τ = 0,1 s. Quelle est la vitesse ?",
              options: ["3 m/s", "0,03 m/s", "30 m/s", "0,3 m/s"],
              answer: 0,
              why: "v = d / τ = 0,30 ÷ 0,1 = 3 m/s.",
            },
            {
              q: "Combien d'intervalles de temps séparent les positions M2 et M7 ?",
              options: ["7", "9", "5", "6"],
              answer: 2,
              why: "7 - 2 = 5 intervalles, donc une durée de 5 × τ.",
            },
            {
              q: "Sur une chronophotographie, l'échelle est 1 cm pour 5 cm réels. Deux positions sont à 3 cm sur l'image. Quelle est la distance réelle ?",
              options: ["15 cm", "8 cm", "0,6 cm", "35 cm"],
              answer: 0,
              why: "On multiplie par l'échelle : 3 × 5 = 15 cm.",
            },
          ],
          trap: "Compter les positions au lieu des intervalles pour calculer une durée : entre M0 et M4, il y a 5 positions mais seulement 4 intervalles, soit une durée de 4 × τ.",
          method: "Procédez toujours dans cet ordre : regarder la forme du tracé (trajectoire), comparer les écarts (nature du mouvement), puis pour un calcul, mesurer, convertir avec l'échelle, passer en mètres et diviser par le bon nombre d'intervalles × τ.",
        },
      ],
    },
  ],
}
