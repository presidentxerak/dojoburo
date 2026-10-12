import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-6e',
  chapters: [
    /* ================================================================== */
    /* FIGURES PLANES ET SYMÉTRIE AXIALE                                    */
    /* ================================================================== */
    {
      id: 'figures-symetrie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'triangles-quadrilateres',
          title: 'Construire des triangles et des quadrilatères',
          minutes: 30,
          objectives: [
            "Reconnaître et nommer les triangles particuliers (isocèle, équilatéral, rectangle) et les quadrilatères particuliers (rectangle, losange, carré).",
            "Construire un triangle connaissant les longueurs de ses trois côtés, à la règle et au compas.",
            "Utiliser les propriétés des côtés, des angles et des diagonales pour construire un rectangle, un losange ou un carré.",
          ],
          course: [
            {
              heading: "Le vocabulaire du triangle",
              paragraphs: [
                "Un triangle est un polygone qui a trois côtés. Le triangle ABC a trois sommets (les points A, B et C), trois côtés (les segments [AB], [BC] et [AC]) et trois angles. On dit que le côté [BC] est le côté opposé au sommet A.",
                "Certains triangles ont un nom particulier. Un triangle isocèle a deux côtés de même longueur : le point commun à ces deux côtés s'appelle le sommet principal, et le troisième côté s'appelle la base. Un triangle équilatéral a ses trois côtés de même longueur. Un triangle rectangle a un angle droit : si l'angle droit est en A, on dit que le triangle est rectangle en A.",
                "Un triangle peut être à la fois isocèle et rectangle : c'est le cas d'une équerre en plastique dont les deux côtés de l'angle droit ont la même longueur. Sur une figure, on code les côtés de même longueur par le même petit signe (un trait, deux traits...) et l'angle droit par un petit carré.",
              ],
              box: { label: "Définition", text: "Triangle isocèle : deux côtés de même longueur. Triangle équilatéral : trois côtés de même longueur. Triangle rectangle : un angle droit." },
            },
            {
              heading: "Construire un triangle avec ses trois longueurs",
              paragraphs: [
                "Pour construire le triangle ABC tel que AB = 6 cm, AC = 4 cm et BC = 5 cm, on commence toujours par un croquis à main levée, sur lequel on écrit les longueurs. Il permet de prévoir la figure et de ne pas se tromper de côté.",
                "On trace ensuite à la règle le segment [AB] de 6 cm. Le point C est à 4 cm de A : il se trouve sur le cercle de centre A et de rayon 4 cm. On trace donc un arc de ce cercle avec le compas. Le point C est aussi à 5 cm de B : on trace un arc du cercle de centre B et de rayon 5 cm. Le point C est le point d'intersection des deux arcs. Il ne reste qu'à tracer [AC] et [BC] à la règle, puis à coder la figure.",
                "On peut aussi construire un triangle quand on connaît deux longueurs et l'angle formé par ces deux côtés : on trace le premier côté, puis l'angle au rapporteur, et on reporte la deuxième longueur sur le côté de l'angle.",
              ],
              box: { label: "Méthode", text: "Croquis à main levée, premier côté à la règle, deux arcs de cercle au compas (un rayon par longueur), le troisième sommet à l'intersection des arcs, puis tracé et codage." },
            },
            {
              heading: "Les quadrilatères particuliers",
              paragraphs: [
                "Un quadrilatère est un polygone qui a quatre côtés. Dans le quadrilatère ABCD, les sommets se suivent dans cet ordre : les côtés sont [AB], [BC], [CD] et [DA], et les diagonales sont les segments [AC] et [BD], qui relient deux sommets opposés.",
                "Un rectangle est un quadrilatère qui a quatre angles droits. Ses côtés opposés ont la même longueur, et ses diagonales ont la même longueur et se coupent en leur milieu. Une feuille de cahier ou un écran de téléphone ont la forme d'un rectangle.",
                "Un losange est un quadrilatère qui a quatre côtés de même longueur. Ses diagonales sont perpendiculaires et se coupent en leur milieu. Un carré est à la fois un rectangle et un losange : il a quatre angles droits et quatre côtés de même longueur, et ses diagonales ont la même longueur, sont perpendiculaires et se coupent en leur milieu.",
              ],
              box: { label: "À retenir", text: "Rectangle : 4 angles droits, diagonales de même longueur et de même milieu. Losange : 4 côtés égaux, diagonales perpendiculaires et de même milieu. Carré : rectangle et losange à la fois." },
            },
            {
              heading: "Construire un rectangle, un losange ou un carré",
              paragraphs: [
                "Pour construire un rectangle ABCD de longueur 7 cm et de largeur 3 cm, on trace [AB] de 7 cm, puis, avec l'équerre, les perpendiculaires à (AB) passant par A et par B. On place D sur la première et C sur la seconde, à 3 cm de A et de B, du même côté de (AB). On trace enfin [DC] et on vérifie qu'il mesure bien 7 cm.",
                "Pour construire un losange, on utilise le compas, puisque les quatre côtés ont la même longueur. Par exemple, pour un losange ABCD de côté 4 cm dont la diagonale [AC] mesure 6 cm, on trace [AC], puis deux arcs de rayon 4 cm centrés en A et en C : ils se coupent en deux points, B d'un côté de (AC) et D de l'autre.",
              ],
            },
          ],
          keyPoints: [
            "Triangle isocèle : deux côtés égaux ; équilatéral : trois côtés égaux ; rectangle : un angle droit.",
            "Pour construire un triangle avec ses trois longueurs : un côté à la règle, puis deux arcs de cercle au compas.",
            "Rectangle : quatre angles droits ; ses diagonales ont la même longueur et le même milieu.",
            "Losange : quatre côtés égaux ; ses diagonales sont perpendiculaires et ont le même milieu.",
            "Carré : quatre angles droits et quatre côtés égaux ; c'est à la fois un rectangle et un losange.",
            "Toujours commencer par un croquis à main levée, et finir par le codage de la figure.",
          ],
          example: {
            statement: "Construisez le triangle EFG tel que EF = 7 cm, EG = 5 cm et FG = 4 cm. Décrivez les étapes.",
            solution: [
              "On fait un croquis à main levée d'un triangle EFG et on écrit les trois longueurs sur les côtés correspondants.",
              "On trace à la règle le segment [EF] de 7 cm.",
              "G est à 5 cm de E : on trace au compas un arc de cercle de centre E et de rayon 5 cm.",
              "G est à 4 cm de F : on trace un arc de cercle de centre F et de rayon 4 cm. Le point G est l'intersection des deux arcs.",
              "On trace [EG] et [FG] à la règle, puis on vérifie les mesures : EG = 5 cm et FG = 4 cm. Le triangle EFG est construit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la nature de chaque triangle. a) ABC avec AB = 5 cm, BC = 5 cm et AC = 5 cm. b) DEF avec DE = 4 cm, EF = 6 cm et DF = 4 cm. c) GHI avec un angle droit en H, GH = 3 cm et HI = 3 cm.",
              hint: "Comparez les longueurs des côtés, puis regardez s'il y a un angle droit.",
              solution: [
                "a) Les trois côtés mesurent 5 cm : ABC est un triangle équilatéral.",
                "b) DE = DF = 4 cm : DEF est un triangle isocèle de sommet principal D (le point commun aux deux côtés égaux), et sa base est [EF].",
                "c) GHI a un angle droit en H et GH = HI = 3 cm : c'est un triangle isocèle et rectangle en H.",
              ],
            },
            {
              level: 2,
              statement: "Construisez un losange ABCD de côté 4 cm tel que la diagonale [AC] mesure 6 cm. Décrivez les étapes, puis mesurez la diagonale [BD].",
              hint: "Les quatre côtés mesurent 4 cm : B et D sont tous les deux à 4 cm de A et à 4 cm de C.",
              solution: [
                "On trace à la règle le segment [AC] de 6 cm.",
                "On trace au compas le cercle (ou un grand arc) de centre A et de rayon 4 cm, puis celui de centre C et de rayon 4 cm.",
                "Ces deux arcs se coupent en deux points : on nomme B celui situé d'un côté de (AC) et D celui situé de l'autre côté.",
                "On trace [AB], [BC], [CD] et [DA] : chacun mesure 4 cm, donc ABCD est un losange.",
                "En mesurant, on trouve BD ≈ 5,3 cm. On peut vérifier que les diagonales [AC] et [BD] sont perpendiculaires et se coupent en leur milieu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut construire un rectangle ABCD tel que AB = 8 cm et dont la diagonale [AC] mesure 10 cm. On ne connaît pas la largeur. Proposez une construction, réalisez-la, puis mesurez BC et BD.",
              hint: "L'angle en B est droit : C est sur la perpendiculaire à (AB) passant par B. C est aussi à 10 cm de A.",
              solution: [
                "On trace [AB] de 8 cm, puis, avec l'équerre, la droite perpendiculaire à (AB) passant par B.",
                "Le point C est à 10 cm de A : on trace l'arc de cercle de centre A et de rayon 10 cm. Il coupe la perpendiculaire en C.",
                "En mesurant, on trouve BC = 6 cm : c'est la largeur du rectangle.",
                "On place D sur la perpendiculaire à (AB) passant par A, à 6 cm de A, du même côté que C, et on trace [CD].",
                "Les diagonales d'un rectangle ont la même longueur : on doit trouver BD = 10 cm, ce que la mesure confirme. Le rectangle mesure 8 cm sur 6 cm.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque figure à la propriété qui la définit.",
            pairs: [
              { left: "Triangle isocèle", right: "Deux côtés de même longueur" },
              { left: "Triangle équilatéral", right: "Trois côtés de même longueur" },
              { left: "Triangle rectangle", right: "Un angle droit" },
              { left: "Rectangle", right: "Quatre angles droits" },
              { left: "Losange", right: "Quatre côtés de même longueur" },
              { left: "Carré", right: "Quatre angles droits et quatre côtés égaux" },
            ],
          },
          quiz: [
            {
              q: "Un triangle a des côtés de 3 cm, 5 cm et 3 cm. Il est :",
              options: ["équilatéral", "isocèle", "rectangle", "quelconque"],
              answer: 1,
              why: "Deux côtés mesurent 3 cm : le triangle est isocèle. Il n'est pas équilatéral, car le troisième côté mesure 5 cm.",
            },
            {
              q: "Pour construire un triangle dont on connaît les trois longueurs, on utilise :",
              options: ["la règle et le compas", "seulement l'équerre", "seulement le rapporteur"],
              answer: 0,
              why: "On trace un côté à la règle, puis on place le troisième sommet à l'intersection de deux arcs de cercle tracés au compas.",
            },
            {
              q: "Quelle propriété ont les diagonales d'un losange ?",
              options: ["Elles ont toujours la même longueur", "Elles sont parallèles", "Elles sont perpendiculaires", "Elles ne se coupent pas"],
              answer: 2,
              why: "Les diagonales d'un losange sont perpendiculaires et se coupent en leur milieu. Elles n'ont la même longueur que si le losange est un carré.",
            },
            {
              q: "Un quadrilatère a quatre angles droits et quatre côtés de 5 cm. C'est :",
              options: ["un losange seulement", "un rectangle seulement", "un triangle", "un carré"],
              answer: 3,
              why: "Quatre angles droits et quatre côtés égaux : c'est un carré, qui est à la fois un rectangle et un losange.",
            },
            {
              q: "Dans le quadrilatère ABCD, quelles sont les diagonales ?",
              options: ["[AB] et [CD]", "[AC] et [BD]", "[AD] et [BC]"],
              answer: 1,
              why: "Une diagonale relie deux sommets qui ne se suivent pas : A et C, puis B et D.",
            },
          ],
          trap: "Croire que les diagonales d'un losange ont la même longueur, ou que celles d'un rectangle sont perpendiculaires : ces propriétés ne sont vraies ensemble que pour le carré.",
          method: "Avant de tracer, faites un croquis à main levée avec toutes les longueurs écrites dessus. Après le tracé, mesurez à nouveau chaque côté : un écart de plus d'un millimètre signale une erreur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'mediatrice',
          title: 'La médiatrice d\'un segment et le cercle circonscrit',
          minutes: 30,
          objectives: [
            "Connaître la définition de la médiatrice d'un segment et la coder sur une figure.",
            "Construire la médiatrice d'un segment à la règle et au compas, ou à la règle graduée et à l'équerre.",
            "Utiliser la propriété d'équidistance de la médiatrice pour résoudre un problème.",
            "Construire le cercle circonscrit à un triangle.",
          ],
          course: [
            {
              heading: "Définition de la médiatrice",
              paragraphs: [
                "La médiatrice d'un segment est la droite qui coupe ce segment en son milieu et qui lui est perpendiculaire. Chaque segment a une seule médiatrice. Par exemple, si [AB] mesure 6 cm, sa médiatrice passe par le point I de [AB] tel que AI = IB = 3 cm, et elle forme un angle droit avec [AB].",
                "Sur une figure, on code la médiatrice avec deux signes : les deux petits traits identiques sur [AI] et [IB] montrent que I est le milieu, et le petit carré montre l'angle droit. Sans ces deux codages, rien ne prouve qu'une droite est la médiatrice.",
              ],
              box: { label: "Définition", text: "La médiatrice d'un segment est la droite perpendiculaire à ce segment qui passe par son milieu." },
            },
            {
              heading: "La propriété d'équidistance",
              paragraphs: [
                "Prenez un point M sur la médiatrice de [AB] et mesurez MA et MB : vous trouvez toujours la même longueur. On dit que M est équidistant de A et de B (il est à égale distance des deux points). C'est vrai pour tous les points de la médiatrice.",
                "L'inverse est vrai aussi : si un point est à la même distance de A et de B, alors il est sur la médiatrice de [AB]. La médiatrice est donc exactement l'ensemble des points situés à égale distance des deux extrémités du segment.",
                "Exemple concret : deux amis habitent en A et en B et veulent se retrouver dans un café situé à la même distance de chez eux. Tous les lieux possibles sont sur la médiatrice de [AB].",
              ],
              box: { label: "Propriété", text: "Si un point est sur la médiatrice d'un segment, alors il est à égale distance des extrémités de ce segment. Si un point est à égale distance des extrémités d'un segment, alors il est sur sa médiatrice." },
            },
            {
              heading: "Construire une médiatrice",
              paragraphs: [
                "Au compas : on pointe en A et on trace un arc de part et d'autre du segment, avec un écartement plus grand que la moitié de AB. Sans changer l'écartement, on pointe en B et on trace un arc qui coupe les deux premiers. Les deux points d'intersection sont équidistants de A et de B : ils sont donc sur la médiatrice. On les relie à la règle.",
                "À la règle graduée et à l'équerre : on mesure [AB], on place son milieu I, puis on trace avec l'équerre la droite perpendiculaire à [AB] passant par I. Cette méthode est directe, mais moins précise si la mesure est approximative.",
              ],
            },
            {
              heading: "Le cercle circonscrit à un triangle",
              paragraphs: [
                "Dans un triangle ABC, traçons la médiatrice de [AB] et celle de [BC]. Elles se coupent en un point O. Comme O est sur la médiatrice de [AB], OA = OB. Comme O est sur la médiatrice de [BC], OB = OC. Donc OA = OB = OC : O est à égale distance des trois sommets.",
                "Le cercle de centre O et de rayon OA passe donc par A, par B et par C : on l'appelle le cercle circonscrit au triangle. Comme OA = OC, le point O est aussi sur la médiatrice de [AC] : les trois médiatrices d'un triangle se coupent en un même point. En pratique, deux médiatrices suffisent pour trouver le centre.",
              ],
              box: { label: "À retenir", text: "Les trois médiatrices d'un triangle se coupent en un point O, centre du cercle circonscrit : c'est le seul cercle qui passe par les trois sommets." },
            },
          ],
          keyPoints: [
            "La médiatrice d'un segment est la droite perpendiculaire à ce segment en son milieu.",
            "On la code avec deux traits égaux (le milieu) et un petit carré (l'angle droit).",
            "Tout point de la médiatrice de [AB] est à égale distance de A et de B, et réciproquement.",
            "Au compas : deux paires d'arcs de même rayon, centrés en A et en B, avec un rayon plus grand que la moitié de AB.",
            "Les trois médiatrices d'un triangle se coupent au centre du cercle circonscrit, qui passe par les trois sommets.",
          ],
          example: {
            statement: "Le segment [AB] mesure 6 cm. Le point M est sur la médiatrice de [AB] et MA = 5 cm. Combien mesure MB ? Le point N vérifie NA = 4 cm et NB = 2 cm : est-il sur la médiatrice ?",
            solution: [
              "M est sur la médiatrice de [AB], donc M est à égale distance de A et de B.",
              "On en déduit MB = MA = 5 cm.",
              "Pour N, on compare NA et NB : NA = 4 cm et NB = 2 cm, donc NA ≠ NB.",
              "N n'est pas à égale distance de A et de B : il n'est pas sur la médiatrice de [AB].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Tracez un segment [CD] de 8 cm. Construisez sa médiatrice au compas, puis placez un point P sur cette médiatrice tel que PC = 6 cm. Combien mesure PD ?",
              hint: "Prenez un écartement de compas d'au moins 5 cm (plus que la moitié de 8 cm) pour que les arcs se coupent.",
              solution: [
                "On trace [CD] de 8 cm. Avec un écartement de 5 cm, on trace deux arcs centrés en C, de part et d'autre du segment.",
                "Avec le même écartement, on trace deux arcs centrés en D. Ils coupent les premiers en deux points, que l'on relie : c'est la médiatrice de [CD].",
                "On trace un arc de centre C et de rayon 6 cm : il coupe la médiatrice en P.",
                "P est sur la médiatrice de [CD], donc PD = PC = 6 cm.",
              ],
            },
            {
              level: 2,
              statement: "Construisez le triangle RST tel que RS = 6 cm, ST = 5 cm et RT = 4 cm. Construisez ensuite son cercle circonscrit et mesurez son rayon.",
              hint: "Construisez les médiatrices de deux côtés seulement : leur point d'intersection est le centre du cercle.",
              solution: [
                "On construit le triangle : [RS] de 6 cm, un arc de centre S et de rayon 5 cm, un arc de centre R et de rayon 4 cm, et T à leur intersection.",
                "On construit au compas la médiatrice de [RS], puis celle de [ST]. Elles se coupent en un point O.",
                "O est équidistant de R, de S et de T. On trace le cercle de centre O passant par R : il passe aussi par S et par T.",
                "En mesurant, on trouve un rayon OR ≈ 3 cm (environ 3,02 cm). On peut vérifier que la médiatrice de [RT] passe elle aussi par O.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Construisez le triangle ABC rectangle en A tel que AB = 6 cm et AC = 8 cm. Construisez son cercle circonscrit. Où se trouve son centre ? Mesurez BC et le rayon du cercle : que remarquez-vous ?",
              hint: "Tracez les médiatrices de [AB] et de [AC], puis regardez attentivement le point où elles se coupent.",
              solution: [
                "On trace [AB] de 6 cm, la perpendiculaire à (AB) en A avec l'équerre, et on place C sur cette perpendiculaire à 8 cm de A.",
                "On construit les médiatrices de [AB] et de [AC] : elles se coupent en un point O.",
                "On constate que O est situé sur le côté [BC], exactement en son milieu.",
                "En mesurant, BC = 10 cm et le rayon OB = 5 cm : le rayon est la moitié de BC.",
                "Conclusion : pour ce triangle rectangle, le centre du cercle circonscrit est le milieu du côté opposé à l'angle droit, et ce côté est un diamètre du cercle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction de la médiatrice de [AB] au compas.",
            items: [
              "Tracer le segment [AB].",
              "Régler le compas sur un écartement plus grand que la moitié de AB.",
              "Pointer en A et tracer un arc de chaque côté du segment.",
              "Sans changer l'écartement, pointer en B et tracer deux arcs qui coupent les premiers.",
              "Relier à la règle les deux points d'intersection des arcs.",
              "Coder le milieu et l'angle droit sur la figure.",
            ],
          },
          quiz: [
            {
              q: "La médiatrice d'un segment est une droite :",
              options: ["parallèle au segment", "perpendiculaire au segment en son milieu", "qui passe par une extrémité", "de même longueur que le segment"],
              answer: 1,
              why: "Par définition, la médiatrice est perpendiculaire au segment et passe par son milieu.",
            },
            {
              q: "M est sur la médiatrice de [EF] et ME = 7 cm. Alors :",
              options: ["MF = 7 cm", "MF = 3,5 cm", "MF = 14 cm", "on ne peut pas savoir"],
              answer: 0,
              why: "Tout point de la médiatrice est à égale distance des extrémités du segment : MF = ME = 7 cm.",
            },
            {
              q: "Pour construire la médiatrice au compas, l'écartement doit être :",
              options: ["égal au quart du segment", "quelconque", "plus grand que la moitié du segment"],
              answer: 2,
              why: "Si l'écartement est trop petit, les arcs centrés en A et en B ne se coupent pas.",
            },
            {
              q: "Le centre du cercle circonscrit à un triangle est le point d'intersection :",
              options: ["des côtés", "des diagonales", "des hauteurs", "des médiatrices"],
              answer: 3,
              why: "Le point commun aux médiatrices est à égale distance des trois sommets : c'est le centre du cercle qui passe par eux.",
            },
            {
              q: "Combien de médiatrices faut-il tracer, au minimum, pour trouver le centre du cercle circonscrit ?",
              options: ["Une", "Deux", "Trois"],
              answer: 1,
              why: "Deux médiatrices suffisent : leur point d'intersection est le centre, et la troisième passe aussi par ce point.",
            },
          ],
          trap: "Tracer une droite perpendiculaire au segment sans vérifier qu'elle passe par le milieu, ou une droite qui passe par le milieu sans être perpendiculaire : une médiatrice doit avoir les deux propriétés.",
          method: "Pour vérifier une médiatrice, prenez un point au hasard sur la droite tracée et mesurez sa distance aux deux extrémités du segment : les deux mesures doivent être égales.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'symetrie-axiale',
          title: 'Axes de symétrie et figure symétrique',
          minutes: 35,
          objectives: [
            "Reconnaître une figure qui admet un ou plusieurs axes de symétrie et tracer ces axes.",
            "Construire le symétrique d'un point, d'un segment, d'une figure par rapport à une droite, sur quadrillage et sur papier blanc.",
            "Utiliser les propriétés de la symétrie axiale : conservation des longueurs, des angles, des alignements et des aires.",
          ],
          course: [
            {
              heading: "Deux figures symétriques",
              paragraphs: [
                "Pliez une feuille en deux, faites une tache d'encre d'un côté et refermez : la tache se reproduit de l'autre côté du pli. Les deux taches sont symétriques par rapport à la droite du pli. On dit que deux figures sont symétriques par rapport à une droite d lorsqu'elles se superposent exactement en pliant le long de d.",
                "La droite d s'appelle l'axe de symétrie. Une symétrie par rapport à une droite s'appelle une symétrie axiale. Le symétrique d'une figure est comme son reflet dans un miroir posé sur l'axe : la figure est retournée, mais elle garde sa forme et sa taille.",
              ],
            },
            {
              heading: "Les axes de symétrie d'une figure",
              paragraphs: [
                "Une figure admet un axe de symétrie si, en la pliant le long de cette droite, ses deux moitiés se superposent. Un papillon vu de dessus a un axe de symétrie. Certaines figures en ont plusieurs, d'autres n'en ont aucun.",
                "Un triangle isocèle a un axe de symétrie : la médiatrice de sa base. Un triangle équilatéral en a trois. Un rectangle (qui n'est pas un carré) en a deux : les médiatrices de ses côtés. Un losange (qui n'est pas un carré) en a deux : ses diagonales. Un carré en a quatre : ses deux diagonales et les deux médiatrices de ses côtés. Un cercle en a une infinité : toutes les droites qui passent par son centre.",
                "Attention : les diagonales d'un rectangle ne sont pas des axes de symétrie. Si vous pliez une feuille rectangulaire le long d'une diagonale, les deux moitiés ne se superposent pas.",
              ],
              box: { label: "À retenir", text: "Triangle isocèle : 1 axe. Triangle équilatéral : 3 axes. Rectangle : 2 axes. Losange : 2 axes. Carré : 4 axes. Cercle : une infinité d'axes." },
            },
            {
              heading: "Construire le symétrique d'un point",
              paragraphs: [
                "Le symétrique du point M par rapport à la droite d est le point M' tel que d soit la médiatrice du segment [MM']. Autrement dit, M' est sur la perpendiculaire à d passant par M, de l'autre côté de d, à la même distance de d que M. Si M est sur d, son symétrique est M lui-même.",
                "Sur papier blanc, on trace avec l'équerre la perpendiculaire à d passant par M ; elle coupe d en H. On reporte au compas la longueur HM de l'autre côté de d : on obtient M'. Sur quadrillage, si d suit une ligne du quadrillage, on compte les carreaux : un point situé à 3 carreaux à gauche d'un axe vertical a son symétrique à 3 carreaux à droite, sur la même ligne.",
                "Pour construire le symétrique d'un polygone, on construit le symétrique de chacun de ses sommets, puis on les relie dans le même ordre. Le symétrique du triangle ABC est le triangle A'B'C'.",
              ],
              box: { label: "Définition", text: "Le symétrique d'un point M par rapport à une droite d est le point M' tel que d soit la médiatrice de [MM']." },
            },
            {
              heading: "Ce que conserve la symétrie axiale",
              paragraphs: [
                "La symétrie axiale ne déforme pas les figures. Le symétrique d'un segment est un segment de même longueur. Le symétrique d'une droite est une droite. Le symétrique d'un angle est un angle de même mesure. Le symétrique d'un cercle est un cercle de même rayon, dont le centre est le symétrique du centre.",
                "Elle conserve aussi les alignements (trois points alignés ont des symétriques alignés), les périmètres et les aires. On peut donc trouver des longueurs ou des angles sans mesurer : si A'B'C' est le symétrique de ABC et que AB = 4 cm, alors A'B' = 4 cm.",
              ],
              box: { label: "Propriété", text: "La symétrie axiale conserve les longueurs, les mesures d'angles, les alignements, les périmètres et les aires." },
            },
          ],
          keyPoints: [
            "Deux figures symétriques par rapport à une droite se superposent par pliage le long de cette droite.",
            "M' est le symétrique de M par rapport à d lorsque d est la médiatrice de [MM'].",
            "Un point situé sur l'axe est son propre symétrique.",
            "Axes de symétrie : triangle isocèle 1, équilatéral 3, rectangle 2, losange 2, carré 4, cercle une infinité.",
            "La symétrie axiale conserve les longueurs, les angles, les alignements, les périmètres et les aires.",
            "Pour une figure, on construit le symétrique de chaque sommet, puis on relie dans le même ordre.",
          ],
          example: {
            statement: "Le triangle ABC est tel que AB = 5 cm, BC = 4 cm et l'angle en B mesure 70°. Le triangle A'B'C' est son symétrique par rapport à une droite d. Donnez A'B', B'C' et la mesure de l'angle en B', en justifiant.",
            solution: [
              "La symétrie axiale conserve les longueurs.",
              "Le segment [A'B'] est le symétrique de [AB], donc A'B' = AB = 5 cm.",
              "De même, [B'C'] est le symétrique de [BC], donc B'C' = BC = 4 cm.",
              "La symétrie axiale conserve les mesures d'angles : l'angle en B' mesure, comme l'angle en B, 70°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Combien d'axes de symétrie possède chaque figure ? a) un carré ; b) un rectangle de 6 cm sur 3 cm ; c) un triangle équilatéral ; d) un triangle dont les côtés mesurent 3 cm, 4 cm et 6 cm.",
              hint: "Imaginez que vous pliez la figure : les deux moitiés doivent se superposer exactement.",
              solution: [
                "a) Le carré a 4 axes : ses deux diagonales et les deux médiatrices de ses côtés.",
                "b) Le rectangle a 2 axes : les médiatrices de ses côtés (ses diagonales ne sont pas des axes).",
                "c) Le triangle équilatéral a 3 axes : les médiatrices de ses trois côtés.",
                "d) Les trois côtés ont des longueurs différentes : ce triangle n'a aucun axe de symétrie.",
              ],
            },
            {
              level: 2,
              statement: "Sur un quadrillage, la droite d est une ligne verticale. Le point A est à 2 carreaux à gauche de d, le point B à 5 carreaux à gauche de d sur la même ligne horizontale, et le point C est sur d. Où sont placés A', B' et C', symétriques de A, B et C par rapport à d ? Combien de carreaux mesure [A'B'] ?",
              hint: "Chaque point et son symétrique sont sur la même ligne horizontale, à la même distance de l'axe, de part et d'autre.",
              solution: [
                "A' est sur la même ligne horizontale que A, à 2 carreaux à droite de d.",
                "B' est sur la même ligne horizontale que B, à 5 carreaux à droite de d.",
                "C est sur l'axe : son symétrique est lui-même, C' = C.",
                "AB = 5 - 2 = 3 carreaux. La symétrie conserve les longueurs, donc A'B' = 3 carreaux. On le vérifie : A' et B' sont à 2 et 5 carreaux à droite de d, et 5 - 2 = 3.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On a seulement un compas et une règle non graduée (pas d'équerre). Le point M n'est pas sur la droite d. Expliquez comment construire son symétrique M' par rapport à d, et justifiez votre construction.",
              hint: "Choisissez deux points E et F sur d. Que savez-vous des distances EM et EM', puis FM et FM' ?",
              solution: [
                "On place deux points E et F sur la droite d.",
                "On trace l'arc de centre E qui passe par M, puis l'arc de centre F qui passe par M. Ces deux arcs se recoupent de l'autre côté de d en un point : c'est M'.",
                "Justification : par construction, EM' = EM, donc E est à égale distance de M et de M' : E est sur la médiatrice de [MM'].",
                "De même, FM' = FM, donc F est sur la médiatrice de [MM'].",
                "La médiatrice de [MM'] passe donc par E et par F : c'est la droite d. Par définition, M' est bien le symétrique de M par rapport à d.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la symétrie axiale.",
            statements: [
              { text: "Les diagonales d'un rectangle sont des axes de symétrie.", true: false, why: "En pliant un rectangle (non carré) le long d'une diagonale, les deux moitiés ne se superposent pas." },
              { text: "Un cercle a une infinité d'axes de symétrie.", true: true, why: "Toute droite passant par le centre du cercle est un axe de symétrie." },
              { text: "Le symétrique d'un segment de 4 cm mesure 4 cm.", true: true, why: "La symétrie axiale conserve les longueurs." },
              { text: "Le symétrique d'un point situé sur l'axe est un autre point.", true: false, why: "Un point de l'axe est son propre symétrique." },
              { text: "Un carré a deux axes de symétrie.", true: false, why: "Un carré en a quatre : ses deux diagonales et les deux médiatrices de ses côtés." },
              { text: "L'axe de symétrie est la médiatrice du segment qui joint un point à son symétrique.", true: true, why: "C'est la définition du symétrique d'un point par rapport à une droite." },
              { text: "La symétrie axiale peut agrandir une figure.", true: false, why: "Elle conserve les longueurs et les aires : la figure garde la même taille." },
            ],
          },
          quiz: [
            {
              q: "Combien d'axes de symétrie a un losange qui n'est pas un carré ?",
              options: ["0", "1", "2", "4"],
              answer: 2,
              why: "Les deux diagonales d'un losange sont ses axes de symétrie.",
            },
            {
              q: "M' est le symétrique de M par rapport à d. La droite d est :",
              options: ["la médiatrice de [MM']", "parallèle à (MM')", "de même longueur que [MM']"],
              answer: 0,
              why: "Par définition, d est perpendiculaire à [MM'] et passe par son milieu : c'est sa médiatrice.",
            },
            {
              q: "Un angle mesure 35°. Son symétrique par rapport à une droite mesure :",
              options: ["70°", "145°", "55°", "35°"],
              answer: 3,
              why: "La symétrie axiale conserve les mesures d'angles.",
            },
            {
              q: "Le symétrique d'un cercle de rayon 3 cm est :",
              options: ["un cercle de rayon 6 cm", "un cercle de rayon 3 cm", "un segment de 3 cm", "une droite"],
              answer: 1,
              why: "La symétrie conserve les longueurs : on obtient un cercle de même rayon, centré au symétrique du centre.",
            },
            {
              q: "Combien d'axes de symétrie a un triangle isocèle qui n'est pas équilatéral ?",
              options: ["1", "2", "3"],
              answer: 0,
              why: "Son seul axe est la médiatrice de sa base, qui passe par le sommet principal.",
            },
          ],
          trap: "Reporter le point symétrique « en face » mais pas perpendiculairement à l'axe, surtout quand l'axe est oblique : le segment [MM'] doit toujours être perpendiculaire à l'axe.",
          method: "Après une construction, vérifiez avec un calque : décalquez la figure, retournez le calque le long de l'axe, et contrôlez que le dessin se superpose à votre symétrique.",
        },
      ],
    },

    /* ================================================================== */
    /* PREMIERS PAS VERS L'ALGÈBRE                                          */
    /* ================================================================== */
    {
      id: 'pensee-algebrique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'motifs-evolutifs',
          title: 'Motifs qui évoluent : trouver la règle',
          minutes: 30,
          objectives: [
            "Observer une suite de motifs et décrire ce qui change d'un motif au suivant.",
            "Trouver une règle qui donne le nombre d'éléments d'un motif à partir de son numéro.",
            "Utiliser cette règle pour calculer un motif éloigné ou retrouver le numéro d'un motif.",
          ],
          course: [
            {
              heading: "Observer un motif qui évolue",
              paragraphs: [
                "Avec des allumettes, on construit une rangée de carrés collés les uns aux autres. Le motif 1 est un carré : il faut 4 allumettes. Le motif 2 est formé de 2 carrés côte à côte : il faut 7 allumettes, car le côté commun n'est posé qu'une fois. Le motif 3 est formé de 3 carrés : il faut 10 allumettes.",
                "Pour bien observer, on range les résultats dans un tableau : numéro du motif 1, 2, 3, 4 ; nombre d'allumettes 4, 7, 10, 13. On se demande alors ce qui reste pareil et ce qui change d'un motif au suivant. Ici, à chaque nouveau carré, on ajoute 3 allumettes : deux pour les côtés du haut et du bas, une pour le côté de droite.",
              ],
            },
            {
              heading: "De proche en proche ou directement",
              paragraphs: [
                "Une première façon de décrire la suite est de dire comment on passe d'un motif au suivant : « on commence à 4 et on ajoute 3 à chaque fois ». C'est une règle de proche en proche. Elle est simple, mais pour connaître le motif 100, il faudrait calculer les 99 motifs précédents.",
                "Une deuxième façon est de trouver une règle directe, qui donne le nombre d'allumettes à partir du numéro du motif. Regardons le motif 3 : on pose une première allumette à gauche, puis 3 allumettes pour chacun des 3 carrés. Cela fait 1 + 3 × 3 = 10. Pour n'importe quel motif : nombre d'allumettes = 3 × numéro du motif + 1.",
                "On vérifie toujours la règle sur les motifs connus : 3 × 1 + 1 = 4, 3 × 2 + 1 = 7, 3 × 4 + 1 = 13. Les résultats correspondent au tableau. Deux élèves peuvent trouver deux écritures différentes de la même règle (par exemple 4 + 3 × (numéro - 1)) : si elles donnent les mêmes résultats, elles sont toutes les deux justes.",
              ],
              box: { label: "À retenir", text: "Une règle de proche en proche dit comment passer d'un motif au suivant. Une règle directe donne le nombre d'éléments à partir du numéro du motif. On vérifie toujours une règle sur les premiers motifs." },
            },
            {
              heading: "Utiliser la règle",
              paragraphs: [
                "Avec la règle directe, on calcule un motif éloigné sans dessiner : le motif 100 demande 3 × 100 + 1 = 301 allumettes. C'est tout l'intérêt de la règle directe.",
                "On peut aussi remonter la règle. Quel motif utilise 61 allumettes ? On retire d'abord l'allumette de départ : 61 - 1 = 60. Puis on partage en paquets de 3 : 60 ÷ 3 = 20. C'est le motif 20. Et 50 allumettes ? 50 - 1 = 49, et 49 n'est pas un multiple de 3 : aucun motif n'utilise exactement 50 allumettes.",
              ],
            },
            {
              heading: "Écrire la règle avec une lettre",
              paragraphs: [
                "Pour écrire la règle plus vite, on peut désigner le numéro du motif par une lettre, par exemple n. La règle devient : nombre d'allumettes = 3 × n + 1. La lettre n remplace n'importe quel numéro : quand n vaut 5, on calcule 3 × 5 + 1 = 16.",
                "Cette écriture est très utile, car elle résume en une ligne une infinité de calculs. Elle sert aussi à communiquer : un camarade qui lit 3 × n + 1 peut construire n'importe quel motif sans avoir vu le dessin.",
              ],
              box: { label: "Exemple", text: "Motifs de carrés en allumettes : nombre d'allumettes = 3 × n + 1, où n est le numéro du motif. Pour n = 10 : 3 × 10 + 1 = 31 allumettes." },
            },
          ],
          keyPoints: [
            "On range les premiers motifs dans un tableau : numéro du motif, nombre d'éléments.",
            "On cherche ce qui reste pareil et ce qui change d'un motif au suivant.",
            "Règle de proche en proche : comment passer d'un motif au suivant (par exemple, ajouter 3).",
            "Règle directe : le nombre d'éléments en fonction du numéro (par exemple, 3 × n + 1).",
            "On vérifie toujours la règle sur les premiers motifs avant de l'utiliser.",
            "Pour retrouver un numéro, on remonte les calculs : on retire, puis on divise.",
          ],
          example: {
            statement: "On aligne des tables carrées. Une table seule accueille 4 personnes, deux tables collées accueillent 6 personnes, trois tables collées en accueillent 8. Trouvez une règle directe, puis calculez le nombre de personnes pour 10 tables.",
            solution: [
              "On range les données : 1 table → 4 personnes, 2 tables → 6, 3 tables → 8. À chaque table ajoutée, on gagne 2 places (une de chaque côté de la longueur).",
              "Pour n tables, il y a 2 personnes le long de chaque table, plus une personne à chaque bout : nombre de personnes = 2 × n + 2.",
              "Vérification : 2 × 1 + 2 = 4, 2 × 2 + 2 = 6, 2 × 3 + 2 = 8. La règle est correcte.",
              "Pour 10 tables : 2 × 10 + 2 = 22. On peut placer 22 personnes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici le début d'une suite de nombres : 7 ; 11 ; 15 ; 19. Donnez les deux nombres suivants, puis calculez le 10e nombre de la suite.",
              hint: "Regardez de combien on avance d'un nombre au suivant. Pour aller du 1er au 10e nombre, combien de pas faut-il faire ?",
              solution: [
                "On passe d'un nombre au suivant en ajoutant 4 : 11 - 7 = 4, 15 - 11 = 4, 19 - 15 = 4.",
                "Les deux nombres suivants sont 19 + 4 = 23 et 23 + 4 = 27.",
                "Du 1er au 10e nombre, il y a 9 pas de 4 : 7 + 9 × 4 = 7 + 36 = 43.",
                "Le 10e nombre est 43. On peut aussi écrire la règle directe 4 × n + 3 : 4 × 10 + 3 = 43.",
              ],
            },
            {
              level: 2,
              statement: "On construit des croix avec des carrés de papier. Le motif 1 est une croix de 5 carrés (un au centre et un sur chacune des 4 branches). À chaque nouveau motif, on ajoute un carré au bout de chaque branche. a) Combien de carrés pour les motifs 2 et 3 ? b) Trouvez une règle directe. c) Combien de carrés pour le motif 25 ? d) Quel motif contient 81 carrés ?",
              hint: "Le carré du centre ne change jamais. Combien de carrés y a-t-il sur une branche dans le motif n ?",
              solution: [
                "a) On ajoute 4 carrés à chaque motif : le motif 2 a 5 + 4 = 9 carrés, le motif 3 a 9 + 4 = 13 carrés.",
                "b) Dans le motif n, chacune des 4 branches a n carrés, et il y a le carré du centre : nombre de carrés = 4 × n + 1. Vérification : 4 × 1 + 1 = 5, 4 × 2 + 1 = 9, 4 × 3 + 1 = 13.",
                "c) Motif 25 : 4 × 25 + 1 = 100 + 1 = 101 carrés.",
                "d) On remonte : 81 - 1 = 80, puis 80 ÷ 4 = 20. Le motif 20 contient 81 carrés (vérification : 4 × 20 + 1 = 81).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Léa aligne des triangles en allumettes, tête-bêche, chaque nouveau triangle partageant un côté avec le précédent. Il faut 3 allumettes pour 1 triangle, 5 allumettes pour 2 triangles, 7 allumettes pour 3 triangles. a) Trouvez une règle directe. b) Combien d'allumettes faut-il pour 30 triangles ? c) Léa a une boîte de 100 allumettes. Combien de triangles peut-elle construire au maximum, et combien d'allumettes lui restera-t-il ?",
              hint: "Chaque nouveau triangle demande 2 allumettes. Pour la question c, remontez la règle, puis gardez le plus grand nombre entier possible.",
              solution: [
                "a) On ajoute 2 allumettes par triangle : 3, 5, 7... Pour n triangles, il faut 1 allumette de départ plus 2 allumettes par triangle : nombre d'allumettes = 2 × n + 1. Vérification : 2 × 1 + 1 = 3, 2 × 2 + 1 = 5, 2 × 3 + 1 = 7.",
                "b) Pour 30 triangles : 2 × 30 + 1 = 61 allumettes.",
                "c) On remonte : 100 - 1 = 99, puis 99 ÷ 2 = 49,5. On ne peut pas faire un demi-triangle : Léa peut construire au maximum 49 triangles.",
                "49 triangles demandent 2 × 49 + 1 = 99 allumettes. Il lui restera 100 - 99 = 1 allumette.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque règle à la suite de nombres qu'elle produit.",
            pairs: [
              { left: "Commencer à 2 et ajouter 3", right: "2 ; 5 ; 8 ; 11" },
              { left: "Commencer à 3 et ajouter 2", right: "3 ; 5 ; 7 ; 9" },
              { left: "Commencer à 1 et multiplier par 2", right: "1 ; 2 ; 4 ; 8" },
              { left: "3 × n + 1, pour n = 1, 2, 3, 4", right: "4 ; 7 ; 10 ; 13" },
              { left: "Commencer à 20 et retirer 4", right: "20 ; 16 ; 12 ; 8" },
              { left: "5 × n, pour n = 1, 2, 3, 4", right: "5 ; 10 ; 15 ; 20" },
            ],
          },
          quiz: [
            {
              q: "Quel est le nombre suivant de la suite 6 ; 10 ; 14 ; 18 ?",
              options: ["20", "22", "24", "26"],
              answer: 1,
              why: "On ajoute 4 à chaque fois : 18 + 4 = 22.",
            },
            {
              q: "Le motif numéro n contient 2 × n + 3 jetons. Combien de jetons dans le motif 10 ?",
              options: ["23", "25", "50", "13"],
              answer: 0,
              why: "On remplace n par 10 : 2 × 10 + 3 = 20 + 3 = 23.",
            },
            {
              q: "Le motif 1 a 5 perles et l'on ajoute 5 perles à chaque motif. Combien de perles dans le motif 4 ?",
              options: ["15", "25", "20", "9"],
              answer: 2,
              why: "5, puis 10, 15 et 20 : le motif 4 a 20 perles (5 × 4 = 20).",
            },
            {
              q: "Dans la règle 4 × n + 1, que représente la lettre n ?",
              options: ["le nombre total d'objets", "toujours le nombre 4", "le nombre d'objets ajoutés", "le numéro du motif"],
              answer: 3,
              why: "n remplace le numéro du motif : on lui donne la valeur 1, 2, 3... selon le motif étudié.",
            },
            {
              q: "Avec la règle 3 × n + 1, quel motif utilise 31 allumettes ?",
              options: ["Le motif 9", "Le motif 10", "Le motif 11"],
              answer: 1,
              why: "On remonte : 31 - 1 = 30, puis 30 ÷ 3 = 10. Vérification : 3 × 10 + 1 = 31.",
            },
          ],
          trap: "Croire que le motif 10 contient dix fois plus d'éléments que le motif 1 : avec 4 allumettes au motif 1, le motif 10 n'en demande pas 40 mais 3 × 10 + 1 = 31.",
          method: "Dessinez toujours les trois premiers motifs et rangez les nombres dans un tableau. Après avoir trouvé une règle, testez-la sur chacun de ces motifs : si un seul résultat ne correspond pas, la règle est fausse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'nombre-inconnu',
          title: 'Trouver un nombre inconnu avec une balance ou un schéma',
          minutes: 30,
          objectives: [
            "Trouver un nombre manquant dans une égalité en utilisant les opérations inverses.",
            "Modéliser un problème par une balance en équilibre et le résoudre en gardant l'équilibre.",
            "Représenter un problème par un schéma en barres pour trouver une quantité inconnue.",
            "Vérifier une solution en remplaçant le nombre trouvé dans l'énoncé.",
          ],
          course: [
            {
              heading: "Une égalité avec un nombre caché",
              paragraphs: [
                "Dans l'égalité ? + 8 = 15, un nombre est caché. Pour le trouver, on se demande : que faut-il ajouter à 8 pour obtenir 15 ? On peut aussi utiliser l'opération inverse de l'addition, la soustraction : ? = 15 - 8 = 7. On vérifie : 7 + 8 = 15.",
                "Chaque opération a son opération inverse, qui « défait » ce qu'elle a fait. L'addition et la soustraction sont inverses l'une de l'autre, la multiplication et la division aussi. Pour ? × 6 = 42, on calcule ? = 42 ÷ 6 = 7. Pour ? - 9 = 20, on calcule ? = 20 + 9 = 29.",
              ],
              box: { label: "Règle", text: "Pour défaire une addition, on soustrait ; pour défaire une soustraction, on additionne. Pour défaire une multiplication, on divise ; pour défaire une division, on multiplie." },
            },
            {
              heading: "Le modèle de la balance",
              paragraphs: [
                "Une balance à deux plateaux est en équilibre quand les deux plateaux portent la même masse. C'est comme une égalité : ce qui est à gauche vaut ce qui est à droite. Pour garder l'équilibre, il faut faire la même chose sur les deux plateaux : enlever la même masse de chaque côté, ou partager chaque plateau en un même nombre de parts égales.",
                "Exemple : sur le plateau de gauche, il y a 3 sacs identiques et une masse de 2 kg ; sur celui de droite, une masse de 11 kg. On enlève 2 kg de chaque côté : il reste 3 sacs à gauche et 9 kg à droite. On partage chaque plateau en 3 : un sac pèse 9 ÷ 3 = 3 kg. On vérifie : 3 × 3 + 2 = 11.",
                "On peut écrire cette situation avec un symbole ou une lettre pour la masse d'un sac : 3 × ? + 2 = 11. Résoudre le problème, c'est trouver la valeur qui rend l'égalité vraie.",
              ],
              box: { label: "À retenir", text: "Une balance en équilibre reste en équilibre si l'on fait la même chose sur les deux plateaux : enlever la même masse, ou partager chaque côté en autant de parts égales." },
            },
            {
              heading: "Le schéma en barres",
              paragraphs: [
                "Un schéma en barres représente les quantités par des rectangles dont la longueur montre leur taille. Exemple : Inès a 3 fois plus de billes que Léo, et ils en ont 48 à eux deux. On dessine une barre d'une part pour Léo et une barre de 3 parts identiques pour Inès. Au total, il y a 4 parts égales, qui représentent 48 billes.",
                "Une part vaut donc 48 ÷ 4 = 12 billes. Léo a 12 billes et Inès en a 3 × 12 = 36. On vérifie : 12 + 36 = 48, et 36 est bien le triple de 12. Le schéma permet de voir le calcul à faire avant de compter.",
              ],
            },
            {
              heading: "Remonter un programme de calcul",
              paragraphs: [
                "« Je pense à un nombre, je le multiplie par 4, puis je retire 3. J'obtiens 25. » Pour retrouver le nombre de départ, on remonte les étapes à l'envers, en utilisant les opérations inverses : on ajoute 3 (25 + 3 = 28), puis on divise par 4 (28 ÷ 4 = 7).",
                "Attention à l'ordre : on défait d'abord la dernière opération effectuée, comme on enlève d'abord ses chaussures avant ses chaussettes. Enfin, on vérifie en refaisant le programme dans le bon sens : 7 × 4 = 28, puis 28 - 3 = 25.",
              ],
              box: { label: "Méthode", text: "Pour retrouver le nombre de départ d'un programme de calcul : partir du résultat, défaire les étapes de la dernière à la première avec les opérations inverses, puis vérifier dans le bon sens." },
            },
          ],
          keyPoints: [
            "Addition et soustraction sont des opérations inverses, multiplication et division aussi.",
            "Une égalité est comme une balance en équilibre : on fait toujours la même chose des deux côtés.",
            "Dans un schéma en barres, des parts de même longueur représentent des quantités égales.",
            "Pour remonter un programme de calcul, on défait les étapes de la dernière à la première.",
            "On vérifie toujours la solution en la remplaçant dans l'énoncé.",
          ],
          example: {
            statement: "Un livre et un cahier coûtent ensemble 15 €. Le livre coûte 4 fois plus cher que le cahier. Quel est le prix de chaque article ?",
            solution: [
              "On fait un schéma en barres : une part pour le cahier, quatre parts identiques pour le livre.",
              "Au total, il y a 1 + 4 = 5 parts égales, qui représentent 15 €.",
              "Une part vaut 15 ÷ 5 = 3 € : c'est le prix du cahier.",
              "Le livre coûte 4 × 3 = 12 €.",
              "Vérification : 3 + 12 = 15, et 12 est bien 4 fois 3. Le cahier coûte 3 € et le livre 12 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Trouvez le nombre caché dans chaque égalité, puis vérifiez. a) ? + 27 = 63 ; b) ? × 8 = 72 ; c) 50 - ? = 18 ; d) ? ÷ 5 = 12.",
              hint: "Utilisez l'opération inverse. Pour c, demandez-vous ce qu'il faut retirer à 50 pour obtenir 18.",
              solution: [
                "a) ? = 63 - 27 = 36. Vérification : 36 + 27 = 63.",
                "b) ? = 72 ÷ 8 = 9. Vérification : 9 × 8 = 72.",
                "c) On cherche ce qu'il faut retirer à 50 pour obtenir 18 : ? = 50 - 18 = 32. Vérification : 50 - 32 = 18.",
                "d) ? = 12 × 5 = 60. Vérification : 60 ÷ 5 = 12.",
              ],
            },
            {
              level: 2,
              statement: "Sam dit : « Je pense à un nombre, je le multiplie par 3, puis j'ajoute 7. J'obtiens 40. » À quel nombre Sam a-t-il pensé ? Chloé répond avec le même programme et obtient 22 : à quel nombre a-t-elle pensé ?",
              hint: "Partez du résultat et défaites les étapes à l'envers : d'abord « ajouter 7 », puis « multiplier par 3 ».",
              solution: [
                "Pour Sam, on défait d'abord la dernière étape : 40 - 7 = 33.",
                "Puis on défait la multiplication par 3 : 33 ÷ 3 = 11. Sam a pensé à 11.",
                "Vérification : 11 × 3 = 33, puis 33 + 7 = 40.",
                "Pour Chloé : 22 - 7 = 15, puis 15 ÷ 3 = 5. Vérification : 5 × 3 + 7 = 22. Chloé a pensé à 5.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une balance est en équilibre. Sur le plateau de gauche, il y a 5 billes identiques et une masse de 30 g. Sur le plateau de droite, il y a 2 billes identiques aux premières et une masse de 120 g. Quelle est la masse d'une bille ? Expliquez chaque étape.",
              hint: "Il y a des billes des deux côtés : commencez par enlever le même nombre de billes de chaque plateau.",
              solution: [
                "On enlève 2 billes de chaque plateau : l'équilibre est conservé. Il reste 3 billes et 30 g à gauche, 120 g à droite.",
                "On enlève 30 g de chaque plateau : il reste 3 billes à gauche et 120 - 30 = 90 g à droite.",
                "On partage chaque plateau en 3 parts égales : une bille pèse 90 ÷ 3 = 30 g.",
                "Vérification : à gauche, 5 × 30 + 30 = 180 g ; à droite, 2 × 30 + 120 = 180 g. Les deux plateaux portent bien la même masse.",
                "Une bille pèse 30 g.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Une balance porte 3 sacs identiques et 2 kg à gauche, 11 kg à droite. Remettez dans l'ordre les étapes pour trouver la masse d'un sac.",
            items: [
              "Écrire l'égalité : 3 sacs + 2 kg = 11 kg.",
              "Enlever 2 kg sur chaque plateau.",
              "Lire la nouvelle égalité : 3 sacs = 9 kg.",
              "Partager chaque plateau en 3 parts égales.",
              "Conclure : un sac pèse 3 kg.",
              "Vérifier : 3 × 3 + 2 = 11.",
            ],
          },
          quiz: [
            {
              q: "Quel nombre cache le point d'interrogation dans ? + 15 = 40 ?",
              options: ["55", "25", "35", "15"],
              answer: 1,
              why: "On défait l'addition par une soustraction : 40 - 15 = 25. Vérification : 25 + 15 = 40.",
            },
            {
              q: "Quel nombre cache le point d'interrogation dans ? × 6 = 42 ?",
              options: ["7", "36", "48", "252"],
              answer: 0,
              why: "On défait la multiplication par une division : 42 ÷ 6 = 7.",
            },
            {
              q: "Quelle action garde une balance en équilibre ?",
              options: ["Ajouter 1 kg sur le plateau de gauche seulement", "Retirer 1 kg de chaque plateau", "Vider un seul des deux plateaux"],
              answer: 1,
              why: "Pour garder l'équilibre, on fait la même chose sur les deux plateaux.",
            },
            {
              q: "Je pense à un nombre, je le multiplie par 2, puis j'ajoute 5. J'obtiens 17. Quel est ce nombre ?",
              options: ["11", "24", "6", "8"],
              answer: 2,
              why: "On remonte : 17 - 5 = 12, puis 12 ÷ 2 = 6. Vérification : 6 × 2 + 5 = 17.",
            },
            {
              q: "Pour défaire « multiplier par 4 », on :",
              options: ["ajoute 4", "retire 4", "multiplie par 4", "divise par 4"],
              answer: 3,
              why: "La division est l'opération inverse de la multiplication.",
            },
          ],
          trap: "Remonter un programme de calcul dans le mauvais ordre (diviser avant de retirer) ou avec la mauvaise opération : il faut défaire d'abord la dernière étape, avec son opération inverse.",
          method: "Terminez toujours par une vérification : remplacez le nombre trouvé dans l'énoncé de départ et refaites les calculs. Si vous ne retrouvez pas le résultat annoncé, cherchez l'erreur.",
        },
      ],
    },

    /* ================================================================== */
    /* LA PROPORTIONNALITÉ                                                  */
    /* ================================================================== */
    {
      id: 'proportionnalite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reconnaitre-proportionnalite',
          title: 'Reconnaître une situation de proportionnalité',
          minutes: 30,
          objectives: [
            "Reconnaître une situation de proportionnalité ou de non-proportionnalité.",
            "Compléter et vérifier un tableau de proportionnalité.",
            "Déterminer le coefficient de proportionnalité d'un tableau.",
          ],
          course: [
            {
              heading: "Deux grandeurs proportionnelles",
              paragraphs: [
                "À la boulangerie, un croissant coûte 1,20 € (données fictives). Deux croissants coûtent 2,40 €, cinq croissants coûtent 6 €. Pour trouver le prix, on multiplie toujours le nombre de croissants par le même nombre, 1,20. On dit que le prix payé est proportionnel au nombre de croissants achetés.",
                "Deux grandeurs sont proportionnelles lorsque l'on obtient les valeurs de l'une en multipliant les valeurs de l'autre par un même nombre. Ce nombre s'appelle le coefficient de proportionnalité. Dans l'exemple des croissants, le coefficient vaut 1,20.",
              ],
              box: { label: "Définition", text: "Deux grandeurs sont proportionnelles si l'on obtient les valeurs de la seconde en multipliant celles de la première par un même nombre, appelé coefficient de proportionnalité." },
            },
            {
              heading: "Le tableau de proportionnalité",
              paragraphs: [
                "On range souvent les valeurs dans un tableau à deux lignes. Exemple : masse de pommes (en kg) 2 ; 3 ; 5 et prix (en €) 5 ; 7,50 ; 12,50. Pour savoir si c'est un tableau de proportionnalité, on divise chaque nombre de la deuxième ligne par le nombre placé au-dessus : 5 ÷ 2 = 2,5 ; 7,5 ÷ 3 = 2,5 ; 12,5 ÷ 5 = 2,5.",
                "Les quotients sont tous égaux à 2,5 : le tableau est un tableau de proportionnalité, et son coefficient est 2,5 (le prix d'un kilogramme est 2,50 €). Si un seul quotient est différent des autres, le tableau n'est pas un tableau de proportionnalité.",
              ],
              box: { label: "Méthode", text: "Pour vérifier qu'un tableau est un tableau de proportionnalité, on divise chaque valeur de la deuxième ligne par la valeur correspondante de la première ligne : tous les quotients doivent être égaux." },
            },
            {
              heading: "Des situations qui ne sont pas proportionnelles",
              paragraphs: [
                "Beaucoup de situations ne sont pas proportionnelles. La taille d'un enfant n'est pas proportionnelle à son âge : un enfant de 10 ans ne mesure pas deux fois plus qu'à 5 ans. De même, la température relevée au cours d'une journée n'est pas proportionnelle à l'heure.",
                "Les tarifs avec une partie fixe ne sont pas proportionnels. Un taxi (données fictives) facture 3 € de prise en charge, puis 2 € par kilomètre : 1 km coûte 5 € et 2 km coûtent 7 €. Si le prix était proportionnel, 2 km coûteraient le double de 1 km, soit 10 €. Les offres du type « le troisième article offert » ne sont pas proportionnelles non plus.",
                "Un test rapide : quand on double l'une des grandeurs, l'autre double-t-elle aussi ? Si la réponse est non, la situation n'est pas proportionnelle. Si la réponse est oui, il faut encore vérifier avec d'autres valeurs, ou à l'aide des quotients.",
              ],
              box: { label: "À retenir", text: "Si, en doublant (ou en triplant) une grandeur, l'autre ne double pas (ou ne triple pas), la situation n'est pas une situation de proportionnalité." },
            },
          ],
          keyPoints: [
            "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre.",
            "Ce nombre est le coefficient de proportionnalité.",
            "Dans un tableau de proportionnalité, tous les quotients (deuxième ligne ÷ première ligne) sont égaux.",
            "Âge et taille, tarif avec une partie fixe, offre promotionnelle : ces situations ne sont pas proportionnelles.",
            "Test rapide : si l'une double et que l'autre ne double pas, ce n'est pas proportionnel.",
          ],
          example: {
            statement: "Voici les prix de cahiers (données fictives) : 3 cahiers coûtent 4,50 €, 5 cahiers coûtent 7,50 € et 8 cahiers coûtent 12 €. Le prix est-il proportionnel au nombre de cahiers ? Si oui, donnez le coefficient de proportionnalité.",
            solution: [
              "On range les données dans un tableau : nombre de cahiers 3 ; 5 ; 8 et prix (en €) 4,50 ; 7,50 ; 12.",
              "On calcule les quotients : 4,5 ÷ 3 = 1,5 ; 7,5 ÷ 5 = 1,5 ; 12 ÷ 8 = 1,5.",
              "Les trois quotients sont égaux : c'est un tableau de proportionnalité.",
              "Le prix est proportionnel au nombre de cahiers. Le coefficient est 1,5 : un cahier coûte 1,50 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ces tableaux sont-ils des tableaux de proportionnalité ? Tableau A : première ligne 2 ; 4 ; 7, deuxième ligne 6 ; 12 ; 21. Tableau B : première ligne 3 ; 6 ; 10, deuxième ligne 9 ; 18 ; 25.",
              hint: "Divisez chaque nombre de la deuxième ligne par celui qui est au-dessus, et comparez les résultats.",
              solution: [
                "Tableau A : 6 ÷ 2 = 3 ; 12 ÷ 4 = 3 ; 21 ÷ 7 = 3. Les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient 3.",
                "Tableau B : 9 ÷ 3 = 3 ; 18 ÷ 6 = 3 ; mais 25 ÷ 10 = 2,5.",
                "Un quotient est différent des autres : le tableau B n'est pas un tableau de proportionnalité.",
              ],
            },
            {
              level: 2,
              statement: "Dans chaque cas, les deux grandeurs sont-elles proportionnelles ? Justifiez. a) Le prix payé à la pompe et le nombre de litres d'essence (prix fixe par litre). b) La taille d'un enfant et son âge. c) Le périmètre d'un carré et la longueur de son côté. d) L'aire d'un carré et la longueur de son côté.",
              hint: "Pour chaque cas, cherchez un coefficient multiplicateur, ou testez ce qui se passe quand on double la première grandeur.",
              solution: [
                "a) Oui : le prix s'obtient en multipliant le nombre de litres par le prix d'un litre, qui est toujours le même.",
                "b) Non : un enfant de 10 ans ne mesure pas deux fois plus qu'un enfant de 5 ans.",
                "c) Oui : le périmètre d'un carré s'obtient en multipliant la longueur du côté par 4. Le coefficient est 4.",
                "d) Non : un carré de côté 1 cm a une aire de 1 cm², un carré de côté 2 cm a une aire de 2 × 2 = 4 cm². Le côté double, mais l'aire est multipliée par 4.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Pour faire tirer des photos, le magasin A demande 0,80 € par photo. Le magasin B demande 5 € de frais fixes, plus 0,50 € par photo. a) Calculez le prix dans chaque magasin pour 10, 20 et 40 photos. b) Dans quel magasin le prix est-il proportionnel au nombre de photos ? c) Quel magasin est le moins cher pour 10 photos ? Pour 40 photos ?",
              hint: "Construisez un tableau pour chaque magasin, puis calculez les quotients prix ÷ nombre de photos.",
              solution: [
                "a) Magasin A : 10 × 0,80 = 8 € ; 20 × 0,80 = 16 € ; 40 × 0,80 = 32 €.",
                "Magasin B : 5 + 10 × 0,50 = 10 € ; 5 + 20 × 0,50 = 15 € ; 5 + 40 × 0,50 = 25 €.",
                "b) Pour A, les quotients valent tous 0,8 : le prix est proportionnel. Pour B, 10 ÷ 10 = 1 mais 15 ÷ 20 = 0,75 : le prix n'est pas proportionnel (20 photos ne coûtent pas le double de 10 photos, à cause des frais fixes).",
                "c) Pour 10 photos, A est moins cher (8 € contre 10 €). Pour 40 photos, B est moins cher (25 € contre 32 €).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Proportionnel ou pas ?",
            statements: [
              { text: "Si deux grandeurs sont proportionnelles, quand l'une double, l'autre double aussi.", true: true, why: "On multiplie toujours par le même coefficient : doubler l'une double l'autre." },
              { text: "La taille d'une personne est proportionnelle à son âge.", true: false, why: "On grandit vite quand on est petit, puis on arrête de grandir : ce n'est pas proportionnel." },
              { text: "Dans un tableau de proportionnalité, on passe d'une ligne à l'autre en ajoutant toujours le même nombre.", true: false, why: "On passe d'une ligne à l'autre en multipliant par le même nombre, pas en ajoutant." },
              { text: "Le périmètre d'un carré est proportionnel à la longueur de son côté.", true: true, why: "Le périmètre est égal à 4 fois le côté : le coefficient est 4." },
              { text: "Un tarif avec un abonnement fixe et un prix par séance est proportionnel au nombre de séances.", true: false, why: "La partie fixe empêche la proportionnalité : deux fois plus de séances ne coûtent pas deux fois plus cher." },
              { text: "Dans un tableau de proportionnalité, tous les quotients deuxième ligne ÷ première ligne sont égaux.", true: true, why: "Ce quotient commun est le coefficient de proportionnalité." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces tableaux est un tableau de proportionnalité ?",
              options: ["1 → 3 ; 2 → 5 ; 4 → 10", "1 → 2 ; 2 → 4 ; 4 → 6", "1 → 3 ; 2 → 6 ; 4 → 12"],
              answer: 2,
              why: "On multiplie toujours par 3 : 1 × 3 = 3, 2 × 3 = 6, 4 × 3 = 12.",
            },
            {
              q: "Dans un tableau de proportionnalité, 4 correspond à 10 et 6 correspond à 15. Quel est le coefficient ?",
              options: ["2,5", "6", "0,4", "5"],
              answer: 0,
              why: "10 ÷ 4 = 2,5 et 15 ÷ 6 = 2,5 : on multiplie la première ligne par 2,5.",
            },
            {
              q: "Le prix est proportionnel à la masse. 3 kg coûtent 6 €. Combien coûtent 6 kg ?",
              options: ["9 €", "12 €", "18 €", "8 €"],
              answer: 1,
              why: "La masse double (de 3 kg à 6 kg), donc le prix double : 2 × 6 = 12 €.",
            },
            {
              q: "Laquelle de ces situations n'est pas une situation de proportionnalité ?",
              options: ["Le prix payé et le nombre de baguettes achetées", "L'âge d'un enfant et sa taille", "Le périmètre d'un carré et son côté"],
              answer: 1,
              why: "La taille ne s'obtient pas en multipliant l'âge par un même nombre : un enfant ne mesure pas deux fois plus à 10 ans qu'à 5 ans.",
            },
            {
              q: "Un taxi (données fictives) demande 3 € de prise en charge plus 2 € par kilomètre. Le prix est-il proportionnel à la distance ?",
              options: ["Oui, avec un coefficient de 2", "Oui, avec un coefficient de 5", "Non, 2 km ne coûtent pas 10 €", "Oui, avec un coefficient de 3"],
              answer: 2,
              why: "1 km coûte 5 € et 2 km coûtent 7 €, pas 10 € : la distance double mais le prix ne double pas.",
            },
          ],
          trap: "Conclure qu'un tableau est de proportionnalité après avoir vérifié une seule colonne : il faut que tous les quotients soient égaux, une seule colonne différente suffit à dire non.",
          method: "Face à une situation, posez-vous la question : « si j'en prends deux fois plus, est-ce que je paie (ou j'obtiens) deux fois plus ? ». Puis confirmez par le calcul des quotients dans un tableau.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'resoudre-proportionnalite',
          title: 'Résoudre un problème : passage à l\'unité et linéarité',
          minutes: 35,
          objectives: [
            "Résoudre un problème de proportionnalité par le passage à l'unité.",
            "Utiliser les propriétés de linéarité (multiplicative et additive) pour calculer une quatrième valeur.",
            "Utiliser le coefficient de proportionnalité et choisir la procédure la plus adaptée aux nombres en jeu.",
          ],
          course: [
            {
              heading: "Le passage à l'unité",
              paragraphs: [
                "Problème (données fictives) : 4 cahiers coûtent 6 €. Combien coûtent 7 cahiers ? Le prix est proportionnel au nombre de cahiers. On commence par chercher le prix d'un seul cahier : 6 ÷ 4 = 1,50 €. On multiplie ensuite par le nombre de cahiers voulu : 7 × 1,50 = 10,50 €.",
                "Cette méthode s'appelle le passage à l'unité, car on calcule d'abord la valeur pour une unité (un cahier, un kilogramme, une personne...). Elle marche toujours, mais elle peut faire apparaître des nombres décimaux peu pratiques.",
              ],
              box: { label: "Méthode", text: "Passage à l'unité : on divise pour trouver la valeur d'une unité, puis on multiplie par la quantité demandée." },
            },
            {
              heading: "La linéarité multiplicative",
              paragraphs: [
                "Si deux grandeurs sont proportionnelles, quand on multiplie l'une par un nombre, l'autre est multipliée par le même nombre. Exemple : 3 baguettes coûtent 2,70 €. 6 baguettes, c'est 2 fois plus, donc elles coûtent 2 × 2,70 = 5,40 €. 9 baguettes, c'est 3 fois plus : 3 × 2,70 = 8,10 €.",
                "Cela marche aussi pour diviser : si une recette pour 8 personnes demande 400 g de farine, pour 4 personnes (2 fois moins), il en faut 400 ÷ 2 = 200 g. On choisit cette méthode quand on voit facilement « combien de fois plus » ou « combien de fois moins ».",
              ],
              box: { label: "Propriété", text: "Linéarité multiplicative : si l'on multiplie (ou divise) une grandeur par un nombre, l'autre grandeur est multipliée (ou divisée) par le même nombre." },
            },
            {
              heading: "La linéarité additive",
              paragraphs: [
                "Si deux grandeurs sont proportionnelles, on peut aussi additionner. Exemple : 2 kg de pommes coûtent 5 € et 3 kg coûtent 7,50 €. Comme 5 kg = 2 kg + 3 kg, le prix de 5 kg est 5 + 7,50 = 12,50 €.",
                "On peut de même soustraire : le prix de 1 kg est le prix de 3 kg moins le prix de 2 kg, soit 7,50 - 5 = 2,50 €. Cette méthode est pratique quand la quantité demandée est la somme ou la différence de quantités déjà connues.",
              ],
              box: { label: "Propriété", text: "Linéarité additive : la valeur qui correspond à une somme de quantités est la somme des valeurs correspondantes." },
            },
            {
              heading: "Le coefficient et le choix de la méthode",
              paragraphs: [
                "Quand on connaît le coefficient de proportionnalité, on multiplie directement. Si les pommes coûtent 2,50 € le kilogramme, 4 kg coûtent 4 × 2,50 = 10 € et 1,2 kg coûtent 1,2 × 2,50 = 3 €.",
                "Toutes ces méthodes donnent le même résultat : on choisit celle qui rend les calculs les plus simples. Pour passer de 5 à 15, on multiplie par 3 ; pour passer de 4 à 7, on passe par l'unité ; pour trouver 11 quand on connaît 5 et 6, on additionne. On termine toujours par une phrase réponse avec l'unité.",
              ],
            },
          ],
          keyPoints: [
            "Passage à l'unité : diviser pour trouver la valeur d'une unité, puis multiplier.",
            "Linéarité multiplicative : 2 fois plus d'un côté donne 2 fois plus de l'autre (et de même pour diviser).",
            "Linéarité additive : la valeur pour 2 + 3 est la valeur pour 2 plus la valeur pour 3.",
            "Avec le coefficient de proportionnalité, on multiplie directement.",
            "On choisit la méthode qui donne les calculs les plus simples, puis on rédige une phrase réponse.",
          ],
          example: {
            statement: "Une recette de crêpes pour 4 personnes demande 250 g de farine, 4 œufs et 50 cL de lait. Quelles quantités faut-il pour 6 personnes ?",
            solution: [
              "Les quantités sont proportionnelles au nombre de personnes.",
              "On passe d'abord à 2 personnes (2 fois moins que 4) : 250 ÷ 2 = 125 g de farine, 4 ÷ 2 = 2 œufs, 50 ÷ 2 = 25 cL de lait.",
              "Pour 6 personnes (3 fois plus que 2) : 125 × 3 = 375 g de farine, 2 × 3 = 6 œufs, 25 × 3 = 75 cL de lait.",
              "Vérification par la linéarité additive : 6 = 4 + 2, et 250 + 125 = 375.",
              "Pour 6 personnes, il faut 375 g de farine, 6 œufs et 75 cL de lait.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "5 stylos identiques coûtent 4 € (données fictives). Combien coûtent 15 stylos ? Combien coûte un stylo ? Combien coûtent 8 stylos ?",
              hint: "Pour 15 stylos, cherchez combien de fois 5 est contenu dans 15. Pour 8 stylos, utilisez le prix d'un stylo.",
              solution: [
                "15 stylos, c'est 3 fois plus que 5 stylos : 3 × 4 = 12 €.",
                "Prix d'un stylo : 4 ÷ 5 = 0,80 €.",
                "Prix de 8 stylos : 8 × 0,80 = 6,40 €.",
                "15 stylos coûtent 12 €, un stylo coûte 0,80 € et 8 stylos coûtent 6,40 €.",
              ],
            },
            {
              level: 2,
              statement: "Une voiture consomme 6 L d'essence pour 100 km (données fictives). La consommation est proportionnelle à la distance. Combien consomme-t-elle pour 250 km ? Et pour 30 km ?",
              hint: "250 km = 100 km + 100 km + 50 km. Pour 30 km, passez d'abord par 10 km.",
              solution: [
                "Pour 50 km (2 fois moins que 100 km) : 6 ÷ 2 = 3 L.",
                "Pour 250 km = 100 + 100 + 50 : 6 + 6 + 3 = 15 L (linéarité additive).",
                "Pour 10 km (10 fois moins que 100 km) : 6 ÷ 10 = 0,6 L.",
                "Pour 30 km (3 fois plus que 10 km) : 3 × 0,6 = 1,8 L.",
                "La voiture consomme 15 L pour 250 km et 1,8 L pour 30 km.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour obtenir une certaine teinte de vert, on mélange toujours 3 pots de peinture jaune pour 2 pots de peinture bleue. a) Avec 12 pots de jaune, combien faut-il de pots de bleu ? b) On veut 25 pots de vert en tout : combien de pots de chaque couleur ? c) Tom a 9 pots de jaune et 7 pots de bleu. Combien de pots de vert peut-il préparer au maximum, et que lui restera-t-il ?",
              hint: "Un « paquet » de mélange contient 3 pots de jaune et 2 pots de bleu, soit 5 pots. Comptez combien de paquets vous pouvez faire.",
              solution: [
                "a) 12 pots de jaune, c'est 4 fois 3 pots : il faut 4 × 2 = 8 pots de bleu.",
                "b) Un paquet donne 3 + 2 = 5 pots de vert. 25 pots, c'est 25 ÷ 5 = 5 paquets : il faut 5 × 3 = 15 pots de jaune et 5 × 2 = 10 pots de bleu.",
                "c) Avec 9 pots de jaune, Tom peut faire 9 ÷ 3 = 3 paquets, qui demandent 3 × 2 = 6 pots de bleu. Il en a 7 : c'est suffisant.",
                "Il ne peut pas faire un 4e paquet, car il n'a plus de jaune. Il prépare 3 × 5 = 15 pots de vert, et il lui reste 7 - 6 = 1 pot de bleu.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "6 croissants coûtent 7,20 €. Remettez dans l'ordre la résolution pour trouver le prix de 10 croissants par le passage à l'unité.",
            items: [
              "Le prix est proportionnel au nombre de croissants.",
              "On cherche d'abord le prix d'un croissant.",
              "7,20 ÷ 6 = 1,20 : un croissant coûte 1,20 €.",
              "On multiplie ce prix par 10.",
              "1,20 × 10 = 12.",
              "Réponse : 10 croissants coûtent 12 €.",
            ],
          },
          quiz: [
            {
              q: "4 cahiers coûtent 6 €. Combien coûte un cahier ?",
              options: ["1,50 €", "2 €", "24 €", "1,20 €"],
              answer: 0,
              why: "On divise : 6 ÷ 4 = 1,50 €. C'est le passage à l'unité.",
            },
            {
              q: "3 baguettes coûtent 2,70 €. Combien coûtent 9 baguettes ?",
              options: ["5,40 €", "8,10 €", "8,70 €", "9 €"],
              answer: 1,
              why: "9 baguettes, c'est 3 fois plus que 3 baguettes : 3 × 2,70 = 8,10 €.",
            },
            {
              q: "2 kg coûtent 5 € et 3 kg coûtent 7,50 €. Combien coûtent 5 kg ?",
              options: ["10 €", "12 €", "12,50 €", "15 €"],
              answer: 2,
              why: "5 kg = 2 kg + 3 kg, donc le prix est 5 + 7,50 = 12,50 € (linéarité additive).",
            },
            {
              q: "Une recette pour 4 personnes demande 200 g de sucre. Combien en faut-il pour 2 personnes ?",
              options: ["50 g", "400 g", "150 g", "100 g"],
              answer: 3,
              why: "2 personnes, c'est 2 fois moins que 4 : 200 ÷ 2 = 100 g.",
            },
            {
              q: "Quelle méthode consiste à calculer d'abord la valeur pour une seule unité ?",
              options: ["le passage à l'unité", "la linéarité additive", "le coefficient de proportionnalité"],
              answer: 0,
              why: "Le passage à l'unité commence par une division pour trouver la valeur d'une unité, puis multiplie.",
            },
          ],
          trap: "Ajouter au lieu de multiplier : si 4 cahiers coûtent 6 €, 7 cahiers ne coûtent pas 6 + 3 = 9 €. On ajoute 3 cahiers, mais il faut ajouter le prix de 3 cahiers (4,50 €).",
          method: "Avant de calculer, rangez les données dans un petit tableau et regardez les nombres : multiplier, additionner ou passer par l'unité ? Vérifiez ensuite que le résultat est cohérent (plus d'articles, prix plus élevé).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'pourcentages',
          title: 'Appliquer un pourcentage',
          minutes: 30,
          objectives: [
            "Comprendre qu'un pourcentage exprime une proportion sur 100.",
            "Appliquer un pourcentage simple (50 %, 25 %, 75 %, 10 %) par le calcul mental.",
            "Calculer un pourcentage d'une quantité et l'utiliser dans un problème (réduction, proportion d'un effectif).",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un pourcentage ?",
              paragraphs: [
                "Le symbole % se lit « pour cent ». Dire que 30 % des élèves d'un collège mangent à la cantine, c'est dire que, sur 100 élèves, 30 y mangent. Un pourcentage indique une proportion rapportée à 100.",
                "Un pourcentage s'écrit aussi comme une fraction de dénominateur 100 : 30 % = 30/100, c'est-à-dire 30 centièmes, ou 0,30. 100 % représente la totalité, et 50 % représente la moitié, puisque 50 est la moitié de 100.",
              ],
              box: { label: "Définition", text: "t % signifie « t pour 100 » : c'est la fraction t/100. Par exemple, 30 % = 30/100 = 0,30." },
            },
            {
              heading: "Les pourcentages simples",
              paragraphs: [
                "Certains pourcentages se calculent de tête. 50 % d'une quantité, c'est la moitié : 50 % de 36 € = 18 €. 25 %, c'est le quart : 25 % de 80 = 20. 75 %, ce sont les trois quarts : 75 % de 20 = 15. 10 %, c'est le dixième : 10 % de 230 = 23.",
                "À partir de 10 %, on obtient d'autres pourcentages : 20 % est le double de 10 %, et 5 % en est la moitié. Exemple pour 70 € : 10 % = 7 €, donc 20 % = 14 € et 5 % = 3,50 €. Et 30 % = 3 × 7 = 21 €.",
              ],
              box: { label: "À retenir", text: "50 % = la moitié ; 25 % = le quart ; 75 % = les trois quarts ; 10 % = le dixième ; 100 % = la totalité." },
            },
            {
              heading: "Calculer un pourcentage d'une quantité",
              paragraphs: [
                "Pour calculer t % d'une quantité, on la multiplie par t, puis on divise par 100. Exemple : 30 % de 80, c'est 80 × 30 ÷ 100 = 2 400 ÷ 100 = 24. On peut aussi diviser d'abord par 100, puis multiplier par 30 : 80 ÷ 100 = 0,8, puis 0,8 × 30 = 24.",
                "C'est une situation de proportionnalité : 30 pour 100, c'est comme un tableau où 100 correspond à 30. Pour 80, on obtient 24, pour 200, on obtient 60. Le coefficient est 30 ÷ 100 = 0,3.",
              ],
              box: { label: "Formule", text: "t % d'une quantité = quantité × t ÷ 100." },
            },
            {
              heading: "Appliquer un pourcentage dans la vie courante",
              paragraphs: [
                "Pendant les soldes, un jean à 40 € est affiché « -25 % ». La réduction est 25 % de 40 €, soit le quart de 40 €, c'est-à-dire 10 €. Le nouveau prix est 40 - 10 = 30 €. Attention : le nouveau prix n'est pas 25 €, et la réduction n'est pas 25 € non plus.",
                "On rencontre aussi des pourcentages dans les sondages, les étiquettes alimentaires ou les résultats d'une classe. Exemple : dans une classe de 30 élèves (données fictives), 40 % pratiquent un sport en club. Cela représente 30 × 40 ÷ 100 = 12 élèves.",
              ],
            },
          ],
          keyPoints: [
            "t % signifie t pour 100 : c'est la fraction t/100.",
            "50 % = moitié ; 25 % = quart ; 75 % = trois quarts ; 10 % = dixième.",
            "t % d'une quantité = quantité × t ÷ 100.",
            "À partir de 10 %, on trouve 20 % (le double) et 5 % (la moitié).",
            "Prix soldé = prix de départ - réduction, où la réduction est le pourcentage du prix de départ.",
          ],
          example: {
            statement: "Un pull coûte 45 €. Il est soldé à -20 %. Quel est le montant de la réduction ? Quel est le prix soldé ?",
            solution: [
              "La réduction est 20 % de 45 €.",
              "Calcul : 45 × 20 ÷ 100 = 900 ÷ 100 = 9 €. (De tête : 10 % de 45 = 4,50, donc 20 % = 9.)",
              "Le prix soldé est 45 - 9 = 36 €.",
              "La réduction est de 9 € et le pull coûte 36 € après les soldes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez de tête : a) 50 % de 36 ; b) 25 % de 80 ; c) 10 % de 230 ; d) 75 % de 20.",
              hint: "Traduisez chaque pourcentage par une fraction simple : moitié, quart, dixième, trois quarts.",
              solution: [
                "a) 50 % de 36, c'est la moitié de 36 : 18.",
                "b) 25 % de 80, c'est le quart de 80 : 80 ÷ 4 = 20.",
                "c) 10 % de 230, c'est le dixième de 230 : 23.",
                "d) 75 % de 20, ce sont les trois quarts de 20 : le quart vaut 5, donc les trois quarts valent 3 × 5 = 15.",
              ],
            },
            {
              level: 2,
              statement: "Un collège compte 520 élèves (données fictives). 35 % d'entre eux sont demi-pensionnaires. Combien d'élèves sont demi-pensionnaires ? Combien ne le sont pas ?",
              hint: "Calculez 520 × 35 ÷ 100, ou bien passez par 10 % et 5 %.",
              solution: [
                "Nombre de demi-pensionnaires : 520 × 35 ÷ 100 = 18 200 ÷ 100 = 182.",
                "Vérification de tête : 10 % de 520 = 52, donc 30 % = 156 ; 5 % = 26 ; 35 % = 156 + 26 = 182.",
                "Élèves qui ne sont pas demi-pensionnaires : 520 - 182 = 338.",
                "182 élèves sont demi-pensionnaires et 338 ne le sont pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un jeu de société coûte 60 € dans le magasin A, qui fait une réduction de 30 %. Le même jeu coûte 50 € dans le magasin B, qui fait une réduction de 15 %. Dans quel magasin le jeu est-il le moins cher après réduction, et de combien ?",
              hint: "Calculez d'abord chaque réduction, puis chaque prix soldé. Le plus gros pourcentage ne donne pas forcément le prix le plus bas.",
              solution: [
                "Magasin A : réduction = 60 × 30 ÷ 100 = 18 €. Prix soldé : 60 - 18 = 42 €.",
                "Magasin B : réduction = 50 × 15 ÷ 100 = 750 ÷ 100 = 7,50 €. Prix soldé : 50 - 7,50 = 42,50 €.",
                "On compare : 42 € < 42,50 €.",
                "Le jeu est le moins cher dans le magasin A, de 42,50 - 42 = 0,50 €.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pourcentage à la fraction de la quantité qu'il représente.",
            pairs: [
              { left: "50 %", right: "la moitié" },
              { left: "25 %", right: "le quart" },
              { left: "75 %", right: "les trois quarts" },
              { left: "10 %", right: "le dixième" },
              { left: "100 %", right: "la totalité" },
              { left: "20 %", right: "le cinquième" },
            ],
          },
          quiz: [
            {
              q: "Combien font 10 % de 350 ?",
              options: ["3,5", "350", "35", "45"],
              answer: 2,
              why: "10 %, c'est le dixième : 350 ÷ 10 = 35.",
            },
            {
              q: "25 % d'une quantité, c'est :",
              options: ["le quart", "la moitié", "le tiers", "le dixième"],
              answer: 0,
              why: "25 sur 100, c'est 1 sur 4 : le quart. Le tiers ne correspond pas à 25 %.",
            },
            {
              q: "Un article à 80 € est soldé à -25 %. Combien coûte-t-il après la réduction ?",
              options: ["20 €", "55 €", "75 €", "60 €"],
              answer: 3,
              why: "La réduction est le quart de 80 €, soit 20 €. Le nouveau prix est 80 - 20 = 60 €.",
            },
            {
              q: "Combien font 30 % de 200 ?",
              options: ["30", "60", "170", "600"],
              answer: 1,
              why: "200 × 30 ÷ 100 = 6 000 ÷ 100 = 60.",
            },
            {
              q: "« 40 % des élèves pratiquent un sport » signifie :",
              options: ["40 élèves exactement", "40 élèves sur 1 000", "40 élèves sur 100", "4 élèves sur 100"],
              answer: 2,
              why: "Un pourcentage est une proportion sur 100 : 40 % signifie 40 sur 100.",
            },
          ],
          trap: "Soustraire le pourcentage directement du prix : un article à 80 € soldé à -25 % ne coûte pas 80 - 25 = 55 €. On calcule d'abord la réduction (25 % de 80 € = 20 €), puis on la soustrait.",
          method: "Commencez par une estimation de tête avec 10 % ou 50 %, puis faites le calcul exact. Si les deux résultats sont très différents, refaites le calcul.",
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
          id: 'aires',
          title: 'Aires : unités, conversions et aire du rectangle',
          minutes: 30,
          objectives: [
            "Comparer des surfaces selon leur aire, par comptage, découpage ou recollement.",
            "Distinguer l'aire et le périmètre d'une figure.",
            "Utiliser les unités d'aire (mm², cm², dm², m², km²) et effectuer des conversions.",
            "Calculer l'aire d'un carré, d'un rectangle et d'une figure composée de rectangles.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'aire d'une surface ?",
              paragraphs: [
                "L'aire d'une surface, c'est la mesure de la place qu'elle occupe sur un plan. Quand on compare la taille d'une table et celle d'une feuille, ou la surface de deux chambres, on compare des aires. Pour mesurer une aire, on compte combien de fois une surface choisie comme unité (par exemple un petit carré) tient dans la surface.",
                "Sur du papier quadrillé, une figure qui recouvre 12 carreaux a une aire de 12 carreaux. Si on découpe une figure et qu'on recolle les morceaux autrement, sans les superposer ni en perdre, sa forme change mais son aire reste la même. Deux figures très différentes peuvent donc avoir la même aire.",
              ],
              box: { label: "Définition", text: "L'aire d'une surface est la mesure de son étendue. On l'obtient en comptant combien de fois une unité d'aire (par exemple un carré de 1 cm de côté) recouvre la surface." },
            },
            {
              heading: "Ne pas confondre aire et périmètre",
              paragraphs: [
                "Le périmètre est la longueur du contour d'une figure : c'est ce qu'il faut de clôture pour entourer un jardin. L'aire mesure l'intérieur : c'est ce qu'il faut de gazon pour le recouvrir. Le périmètre s'exprime en cm, en m..., alors que l'aire s'exprime en cm², en m²...",
                "Ces deux grandeurs ne varient pas toujours ensemble. Un rectangle de 5 cm sur 1 cm et un carré de 3 cm de côté ont le même périmètre : 12 cm. Pourtant, le rectangle recouvre 5 carrés de 1 cm de côté, et le carré en recouvre 9 : leurs aires sont différentes.",
              ],
            },
            {
              heading: "Les unités d'aire et les conversions",
              paragraphs: [
                "L'unité principale est le mètre carré (m²) : c'est l'aire d'un carré de 1 m de côté. De même, 1 cm² est l'aire d'un carré de 1 cm de côté, et 1 km² celle d'un carré de 1 km de côté. De la plus grande à la plus petite, les unités d'aire sont : km², hm², dam², m², dm², cm², mm².",
                "Un carré de 1 dm de côté mesure 10 cm sur 10 cm : on peut y ranger 10 rangées de 10 petits carrés de 1 cm², soit 100 cm². Donc 1 dm² = 100 cm². C'est pareil pour toutes les unités : chaque unité d'aire vaut 100 fois l'unité immédiatement plus petite. Ainsi, 1 m² = 100 dm² = 10 000 cm².",
                "Pour convertir, on multiplie (ou on divise) par 100 à chaque changement d'unité, ou on utilise un tableau avec deux colonnes par unité. Exemples : 3 m² = 300 dm² ; 2 500 cm² = 25 dm² = 0,25 m². Pour les terrains et les champs, on utilise aussi l'are (1 a = 100 m²) et l'hectare (1 ha = 10 000 m²).",
              ],
              box: { label: "Règle", text: "1 km² = 100 hm² ; 1 hm² = 100 dam² ; 1 dam² = 100 m² ; 1 m² = 100 dm² ; 1 dm² = 100 cm² ; 1 cm² = 100 mm². Vers une unité plus petite, on multiplie par 100 ; vers une unité plus grande, on divise par 100." },
            },
            {
              heading: "L'aire du rectangle et du carré",
              paragraphs: [
                "Un rectangle de 5 cm de longueur et de 3 cm de largeur peut être rempli par 3 rangées de 5 carrés de 1 cm². Il en contient donc 3 × 5 = 15 : son aire est 15 cm². De façon générale, l'aire d'un rectangle s'obtient en multipliant sa longueur par sa largeur.",
                "Un carré est un rectangle dont la longueur et la largeur sont égales : son aire s'obtient en multipliant le côté par lui-même. Un carré de 6 m de côté a une aire de 6 × 6 = 36 m².",
                "Attention : les deux longueurs doivent être exprimées dans la même unité. Pour un rectangle de 2 m sur 50 cm, on écrit 2 m = 200 cm, puis on calcule 200 × 50 = 10 000 cm², soit 1 m². On aurait aussi pu écrire 50 cm = 0,5 m et calculer 2 × 0,5 = 1 m².",
              ],
              box: { label: "Formule", text: "Aire du rectangle = longueur × largeur. Aire du carré = côté × côté. Les longueurs sont dans la même unité ; si elles sont en cm, l'aire est en cm²." },
            },
            {
              heading: "L'aire d'une figure composée",
              paragraphs: [
                "Beaucoup de surfaces de la vie courante ne sont pas des rectangles, mais on peut les découper en rectangles. L'aire totale est alors la somme des aires des morceaux. Par exemple, une pièce en forme de L peut être coupée en deux rectangles, dont on calcule séparément les aires avant de les additionner.",
                "On peut aussi procéder par soustraction : on calcule l'aire d'un grand rectangle, puis on retire l'aire de la partie qui manque. Un mur de 5 m sur 3 m percé d'une porte de 2 m sur 1 m a une surface à peindre de 15 - 2 = 13 m².",
              ],
            },
          ],
          keyPoints: [
            "L'aire mesure l'étendue d'une surface ; le périmètre mesure la longueur de son contour.",
            "Deux figures de même périmètre peuvent avoir des aires différentes.",
            "1 cm² est l'aire d'un carré de 1 cm de côté ; 1 m² est l'aire d'un carré de 1 m de côté.",
            "Chaque unité d'aire vaut 100 fois la suivante : 1 m² = 100 dm² = 10 000 cm².",
            "Aire du rectangle = longueur × largeur ; aire du carré = côté × côté, avec les longueurs dans la même unité.",
            "Pour une figure composée, on la découpe en rectangles et on additionne, ou on soustrait la partie qui manque.",
          ],
          example: {
            statement: "Une chambre rectangulaire mesure 4,5 m de longueur et 3 m de largeur. a) Calculez son aire en m², puis en dm². b) Le parquet est vendu en paquets qui couvrent chacun 2 m². Combien de paquets faut-il acheter au minimum ?",
            solution: [
              "La chambre est un rectangle : son aire est égale à longueur × largeur.",
              "a) Aire = 4,5 × 3 = 13,5 m².",
              "Pour passer des m² aux dm², on multiplie par 100 : 13,5 m² = 1 350 dm².",
              "b) 6 paquets couvrent 6 × 2 = 12 m² : ce n'est pas assez, car 12 < 13,5.",
              "7 paquets couvrent 7 × 2 = 14 m² : c'est suffisant, car 14 > 13,5.",
              "La chambre a une aire de 13,5 m² (1 350 dm²) et il faut acheter au minimum 7 paquets de parquet.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Calculez l'aire d'un rectangle de 8 cm de longueur et de 5 cm de largeur. b) Calculez l'aire d'un carré de 7 cm de côté. c) Convertissez 3 m² en dm², puis en cm².",
              hint: "Multipliez la longueur par la largeur (ou le côté par lui-même). Pour aller vers une unité d'aire plus petite, multipliez par 100 à chaque étape.",
              solution: [
                "a) Aire du rectangle = 8 × 5 = 40 cm².",
                "b) Aire du carré = 7 × 7 = 49 cm².",
                "c) 3 m² = 3 × 100 dm² = 300 dm².",
                "Puis 300 dm² = 300 × 100 cm² = 30 000 cm². Donc 3 m² = 300 dm² = 30 000 cm².",
              ],
            },
            {
              level: 2,
              statement: "Un jardin rectangulaire mesure 12 m de longueur et 7,5 m de largeur. a) Quelle longueur de grillage faut-il pour en faire le tour ? b) Quelle est l'aire du jardin ? c) Un sac de graines de gazon permet d'ensemencer 25 m². Combien de sacs faut-il acheter au minimum pour tout le jardin ?",
              hint: "Le grillage correspond au périmètre, le gazon à l'aire. Pour la question c, cherchez le plus petit nombre de sacs qui couvre au moins l'aire du jardin.",
              solution: [
                "a) Le grillage fait le tour du jardin : on calcule le périmètre. P = 12 + 7,5 + 12 + 7,5 = 39 m.",
                "b) Le gazon recouvre la surface : on calcule l'aire. A = 12 × 7,5 = 90 m².",
                "c) 3 sacs ensemencent 3 × 25 = 75 m² : c'est trop peu, car 75 < 90.",
                "4 sacs ensemencent 4 × 25 = 100 m² : c'est suffisant, car 100 > 90.",
                "Il faut 39 m de grillage, le jardin a une aire de 90 m², et il faut acheter 4 sacs de graines.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un terrain a la forme d'un rectangle de 10 m sur 8 m auquel on a retiré, dans un coin, un rectangle de 4 m sur 3 m : il a donc la forme d'un L. a) Calculez l'aire du terrain de deux façons différentes. b) Calculez le périmètre du terrain et comparez-le à celui du grand rectangle de 10 m sur 8 m. Que remarquez-vous ?",
              hint: "Faites un croquis et écrivez toutes les longueurs, y compris celles des côtés créés par l'encoche. Pour l'aire, pensez à soustraire, ou à découper le L en deux rectangles.",
              solution: [
                "Croquis : le grand rectangle mesure 10 m de large et 8 m de haut ; l'encoche de 4 m sur 3 m est dans le coin en haut à droite.",
                "a) Première méthode, par soustraction : le grand rectangle a une aire de 10 × 8 = 80 m² et l'encoche de 4 × 3 = 12 m². Aire du terrain : 80 - 12 = 68 m².",
                "Deuxième méthode, par découpage : la partie du bas est un rectangle de 10 m sur 8 - 3 = 5 m, d'aire 10 × 5 = 50 m². La partie du haut est un rectangle de 10 - 4 = 6 m sur 3 m, d'aire 6 × 3 = 18 m². Total : 50 + 18 = 68 m². Les deux méthodes donnent le même résultat.",
                "b) On fait le tour du L : 10 m en bas, 5 m sur le côté droit jusqu'à l'encoche, 4 m vers l'intérieur, 3 m vers le haut, 6 m en haut, 8 m sur le côté gauche. Périmètre : 10 + 5 + 4 + 3 + 6 + 8 = 36 m.",
                "Le grand rectangle a pour périmètre 10 + 8 + 10 + 8 = 36 m : c'est le même périmètre.",
                "Conclusion : en retirant le coin, l'aire a diminué (de 80 m² à 68 m²), mais le périmètre n'a pas changé (36 m). Aire et périmètre ne varient pas toujours ensemble.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux pièges sur les aires.",
            statements: [
              { text: "1 m² = 100 cm².", true: false, why: "Faux : 1 m² = 100 dm² et 1 dm² = 100 cm², donc 1 m² = 10 000 cm²." },
              { text: "1 cm² est l'aire d'un carré de 1 cm de côté.", true: true, why: "C'est la définition du centimètre carré." },
              { text: "Deux rectangles qui ont le même périmètre ont toujours la même aire.", true: false, why: "Faux : un rectangle de 5 cm sur 1 cm et un carré de 3 cm de côté ont le même périmètre (12 cm) mais des aires de 5 cm² et 9 cm²." },
              { text: "Un carré de 4 cm de côté a une aire de 16 cm².", true: true, why: "Aire = côté × côté = 4 × 4 = 16 cm²." },
              { text: "Pour l'aire d'un rectangle de 2 m sur 30 cm, on peut calculer directement 2 × 30.", true: false, why: "Faux : il faut d'abord exprimer les deux longueurs dans la même unité, par exemple 200 cm × 30 cm = 6 000 cm²." },
              { text: "On peut changer la forme d'une figure sans changer son aire.", true: true, why: "En découpant une figure et en recollant les morceaux sans les superposer, on garde la même aire." },
              { text: "Pour passer d'une unité d'aire à l'unité plus petite suivante, on multiplie par 100.", true: true, why: "Chaque unité d'aire vaut 100 fois la suivante : par exemple 1 dm² = 100 cm²." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'aire d'un rectangle de 6 cm sur 4 cm ?",
              options: ["10 cm²", "20 cm²", "24 cm²", "24 cm"],
              answer: 2,
              why: "Aire = longueur × largeur = 6 × 4 = 24 cm². Une aire s'exprime en cm², et non en cm ; 20 est le périmètre.",
            },
            {
              q: "1 m² est égal à :",
              options: ["10 dm²", "100 dm²", "1 000 dm²"],
              answer: 1,
              why: "Un carré de 1 m de côté mesure 10 dm sur 10 dm : il contient 10 × 10 = 100 carrés de 1 dm².",
            },
            {
              q: "Un rectangle de 5 cm sur 1 cm et un carré de 3 cm de côté ont :",
              options: ["le même périmètre et aussi la même aire", "le même périmètre, pas la même aire", "la même aire mais des périmètres différents"],
              answer: 1,
              why: "Les deux périmètres valent 12 cm, mais les aires valent 5 cm² et 9 cm².",
            },
            {
              q: "Combien de cm² y a-t-il dans 1 dm² ?",
              options: ["10", "1 000", "10 000", "100"],
              answer: 3,
              why: "Un carré de 1 dm de côté mesure 10 cm sur 10 cm : il contient 10 × 10 = 100 cm².",
            },
            {
              q: "Un mur rectangulaire mesure 4 m sur 2,5 m. Son aire est :",
              options: ["10 m²", "6,5 m²", "13 m²", "8,5 m²"],
              answer: 0,
              why: "Aire = 4 × 2,5 = 10 m². 6,5 est la somme 4 + 2,5, et 13 m est le périmètre du mur.",
            },
          ],
          trap: "Convertir les aires comme des longueurs : 1 m² ne vaut pas 100 cm² mais 10 000 cm², car on multiplie par 100 à chaque changement d'unité d'aire. Autre erreur fréquente : multiplier deux longueurs exprimées dans des unités différentes.",
          method: "Pour retenir le facteur 100, dessinez un carré de 1 dm de côté découpé en 10 rangées de 10 carrés de 1 cm². Et avant chaque calcul d'aire, écrivez les deux longueurs dans la même unité.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'solides-patrons',
          title: 'Reconnaître les solides et construire un patron',
          minutes: 30,
          objectives: [
            "Reconnaître, nommer et décrire les solides usuels : cube, pavé droit, prisme droit, pyramide, cylindre, cône et boule.",
            "Utiliser le vocabulaire des solides : face, arête, sommet, base.",
            "Reconnaître et construire un patron de cube et de pavé droit.",
            "Lire une représentation en perspective cavalière d'un solide.",
          ],
          course: [
            {
              heading: "Faces, arêtes et sommets",
              paragraphs: [
                "Un solide est un objet de l'espace : il a une longueur, une largeur et une hauteur, contrairement aux figures planes que l'on trace sur une feuille. Une boîte, un dé, un ballon ou une canette ont la forme de solides.",
                "Pour décrire un solide dont les faces sont planes, on utilise trois mots. Les faces sont les surfaces planes qui le limitent. Une arête est un segment où deux faces se rejoignent. Un sommet est un point où plusieurs arêtes se rencontrent. Un dé à jouer, qui a la forme d'un cube, a 6 faces, 12 arêtes et 8 sommets.",
              ],
              box: { label: "Définition", text: "Face : surface plane qui limite le solide. Arête : segment commun à deux faces. Sommet : point où se rejoignent plusieurs arêtes." },
            },
            {
              heading: "Les solides usuels",
              paragraphs: [
                "Le pavé droit (ou parallélépipède rectangle) a 6 faces rectangulaires, comme une boîte à chaussures ; ses faces opposées sont identiques. Le cube est un pavé droit particulier dont les 6 faces sont des carrés identiques. Le prisme droit a deux bases identiques et parallèles, qui sont des polygones (triangles, hexagones...), reliées par des faces rectangulaires : une tente canadienne a souvent la forme d'un prisme droit à base triangulaire.",
                "La pyramide a une base qui est un polygone, et des faces triangulaires qui se rejoignent en un même point, le sommet de la pyramide. Le cylindre (une boîte de conserve) a deux bases en forme de disque et une surface courbe. Le cône (un cornet de glace) a une base en forme de disque, une surface courbe et un sommet. La boule (une bille, un ballon) n'a ni face plane, ni arête, ni sommet.",
              ],
              box: { label: "À retenir", text: "Solides dont toutes les faces sont planes : cube, pavé droit, prisme droit, pyramide. Solides qui ont une surface courbe : cylindre, cône, boule." },
            },
            {
              heading: "Représenter un solide en perspective",
              paragraphs: [
                "Sur une feuille, on ne peut pas dessiner un solide tel qu'on le tient dans la main : on utilise une représentation en perspective cavalière. La face avant est dessinée en vraie grandeur, et les arêtes qui s'éloignent de nous sont tracées en biais et raccourcies.",
                "Dans cette représentation, des arêtes parallèles dans la réalité restent parallèles sur le dessin. Les arêtes que l'on ne voit pas, parce qu'elles sont cachées derrière le solide, sont tracées en pointillés. Attention : sur le dessin, certains angles droits ne paraissent pas droits, et certaines longueurs égales ne paraissent pas égales.",
              ],
            },
            {
              heading: "Le patron d'un solide",
              paragraphs: [
                "Un patron d'un solide est une figure plane, d'un seul morceau, qui permet de fabriquer ce solide par pliage, sans que deux faces se superposent. Il contient toutes les faces du solide, chacune une seule fois. Une boîte de céréales dépliée à plat donne un patron de pavé droit (avec, en plus, des languettes de collage).",
                "Un patron de cube est formé de 6 carrés identiques. Mais toutes les façons d'assembler 6 carrés ne conviennent pas : six carrés alignés, par exemple, ne se referment pas en cube. Il existe exactement 11 patrons différents du cube. Pour vérifier, on imagine le pliage : quatre carrés en bande forment le tour du cube, et les deux derniers doivent fermer l'un le dessus, l'autre le dessous.",
                "Un patron de pavé droit est formé de 6 rectangles, identiques deux à deux. Quand on le trace, deux côtés qui vont se coller l'un contre l'autre au pliage doivent avoir la même longueur : c'est cette règle qui permet de placer chaque rectangle.",
              ],
              box: { label: "Définition", text: "Un patron d'un solide est une figure plane d'un seul tenant qui, après pliage, permet de construire le solide sans que des faces se superposent." },
            },
          ],
          keyPoints: [
            "Face : surface plane ; arête : segment commun à deux faces ; sommet : point où se rejoignent des arêtes.",
            "Cube et pavé droit : 6 faces, 12 arêtes, 8 sommets ; les faces du cube sont des carrés, celles du pavé des rectangles.",
            "Prisme droit : deux bases polygonales identiques et parallèles, des faces latérales rectangulaires.",
            "Pyramide : une base polygonale et des faces triangulaires qui se rejoignent au sommet.",
            "Cylindre, cône et boule ont une surface courbe.",
            "En perspective cavalière, les arêtes cachées sont tracées en pointillés.",
            "Un patron est une figure plane d'un seul tenant qui se plie en solide ; le cube a 11 patrons différents.",
          ],
          example: {
            statement: "Décrivez les faces d'un pavé droit de longueur 4 cm, de largeur 3 cm et de hauteur 2 cm, puis expliquez comment tracer un de ses patrons.",
            solution: [
              "Le pavé droit a 6 faces rectangulaires, identiques deux à deux.",
              "Le dessus et le dessous mesurent 4 cm sur 3 cm ; l'avant et l'arrière mesurent 4 cm sur 2 cm ; les deux côtés mesurent 3 cm sur 2 cm.",
              "On trace d'abord le dessous : un rectangle de 4 cm sur 3 cm.",
              "Le long de ses deux grands côtés (4 cm), on accole l'avant et l'arrière, deux rectangles de 4 cm sur 2 cm. Le long de ses deux petits côtés (3 cm), on accole les deux côtés, des rectangles de 3 cm sur 2 cm.",
              "On accole enfin le dessus (4 cm sur 3 cm) au bord libre de l'arrière, qui mesure 4 cm.",
              "Le patron contient bien 6 rectangles, sans superposition : en le pliant, on obtient le pavé droit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le nombre de faces, d'arêtes et de sommets : a) d'un cube ; b) d'un pavé droit ; c) d'une pyramide à base carrée ; d) d'un prisme droit à base triangulaire.",
              hint: "Imaginez ou dessinez chaque solide et comptez avec méthode : d'abord les faces, puis les arêtes de chaque base et celles qui les relient, enfin les sommets.",
              solution: [
                "a) Cube : 6 faces, 12 arêtes, 8 sommets.",
                "b) Pavé droit : 6 faces, 12 arêtes, 8 sommets, comme le cube.",
                "c) Pyramide à base carrée : 5 faces (la base carrée et 4 triangles), 8 arêtes (4 sur la base et 4 qui montent vers le sommet), 5 sommets (4 sur la base et le sommet de la pyramide).",
                "d) Prisme droit à base triangulaire : 5 faces (2 triangles et 3 rectangles), 9 arêtes (3 sur chaque base et 3 qui les relient), 6 sommets (3 sur chaque base).",
              ],
            },
            {
              level: 2,
              statement: "Voici quatre assemblages de 6 carrés identiques. Figure A : une bande de 4 carrés, avec un carré collé au-dessus du deuxième carré et un carré collé au-dessous du deuxième carré. Figure B : 6 carrés alignés. Figure C : une bande de 4 carrés, avec un carré collé au-dessus du premier et un carré collé au-dessus du quatrième. Figure D : une bande de 4 carrés, avec un carré collé au-dessus du premier et un carré collé au-dessous du quatrième. Lesquels sont des patrons de cube ? Justifiez.",
              hint: "Une bande de 4 carrés se replie pour former le tour du cube. Les deux carrés restants doivent fermer l'un le dessus, l'autre le dessous.",
              solution: [
                "Figure A : la bande de 4 carrés forme le tour du cube ; un carré ferme le dessus et l'autre le dessous. C'est un patron de cube (la forme en croix).",
                "Figure B : 6 carrés alignés s'enroulent en tube, et les deux derniers se superposent aux deux premiers ; rien ne ferme le dessus ni le dessous. Ce n'est pas un patron de cube.",
                "Figure C : les deux carrés supplémentaires sont tous les deux au-dessus de la bande : ils viennent tous les deux fermer le dessus et se superposent, et le dessous reste ouvert. Ce n'est pas un patron de cube.",
                "Figure D : un carré est au-dessus de la bande et l'autre au-dessous : l'un ferme le dessus, l'autre le dessous. C'est un patron de cube.",
                "Conclusion : les figures A et D sont des patrons de cube ; les figures B et C n'en sont pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut fabriquer en carton une boîte fermée en forme de pavé droit de 5 cm de longueur, 3 cm de largeur et 2 cm de hauteur. a) Donnez les dimensions des 6 faces. b) Calculez l'aire totale du patron, sans les languettes de collage. c) On veut renforcer toutes les arêtes de la boîte avec du ruban adhésif. Quelle longueur de ruban faut-il ?",
              hint: "Les faces sont identiques deux à deux. Un pavé droit a 12 arêtes : 4 de chaque longueur.",
              solution: [
                "a) Le dessus et le dessous : 5 cm sur 3 cm. L'avant et l'arrière : 5 cm sur 2 cm. Les deux côtés : 3 cm sur 2 cm.",
                "b) Dessus et dessous : 2 × (5 × 3) = 2 × 15 = 30 cm².",
                "Avant et arrière : 2 × (5 × 2) = 2 × 10 = 20 cm². Les deux côtés : 2 × (3 × 2) = 2 × 6 = 12 cm².",
                "Aire totale du patron : 30 + 20 + 12 = 62 cm².",
                "c) Le pavé a 12 arêtes : 4 de 5 cm, 4 de 3 cm et 4 de 2 cm. Longueur de ruban : 4 × 5 + 4 × 3 + 4 × 2 = 20 + 12 + 8 = 40 cm.",
                "Il faut 62 cm² de carton (sans les languettes) et 40 cm de ruban adhésif.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque solide à sa description.",
            pairs: [
              { left: "Cube", right: "6 faces carrées identiques" },
              { left: "Pavé droit", right: "6 faces rectangulaires, identiques deux à deux" },
              { left: "Pyramide", right: "Une base polygonale et des faces triangulaires qui se rejoignent en un sommet" },
              { left: "Cylindre", right: "Deux bases en forme de disque et une surface courbe" },
              { left: "Cône", right: "Une base en forme de disque, une surface courbe et un sommet" },
              { left: "Boule", right: "Ni face plane, ni arête, ni sommet" },
            ],
          },
          quiz: [
            {
              q: "Combien d'arêtes a un pavé droit ?",
              options: ["6", "8", "12", "24"],
              answer: 2,
              why: "Un pavé droit a 12 arêtes : 4 autour du dessus, 4 autour du dessous et 4 qui les relient. Il a 6 faces et 8 sommets.",
            },
            {
              q: "Quel solide a deux bases en forme de disque ?",
              options: ["le cône", "le cylindre", "la boule", "la pyramide"],
              answer: 1,
              why: "Le cylindre, comme une boîte de conserve, a deux disques pour bases. Le cône n'en a qu'un.",
            },
            {
              q: "Six carrés identiques alignés forment-ils un patron de cube ?",
              options: ["non, jamais", "oui, toujours", "seulement si les carrés sont grands"],
              answer: 0,
              why: "Au pliage, les six carrés alignés s'enroulent en tube : deux faces se superposent et le dessus et le dessous restent ouverts.",
            },
            {
              q: "Quelle est la forme des faces latérales d'un prisme droit ?",
              options: ["des triangles équilatéraux", "des disques", "des losanges quelconques", "des rectangles"],
              answer: 3,
              why: "Dans un prisme droit, les deux bases sont des polygones et les faces latérales qui les relient sont des rectangles.",
            },
            {
              q: "Sur un dessin en perspective cavalière, une arête cachée est tracée :",
              options: ["en trait plein épais", "en pointillés", "en rouge"],
              answer: 1,
              why: "Les arêtes que l'on ne voit pas sont tracées en pointillés, pour comprendre la forme du solide sans confondre l'avant et l'arrière.",
            },
          ],
          trap: "Croire que n'importe quel assemblage de 6 carrés est un patron de cube, sans vérifier qu'aucune face ne se superpose au pliage. Autre erreur : compter deux fois la même arête quand on compte les arêtes d'un solide.",
          method: "Pour compter les arêtes et les sommets sans en oublier, procédez étage par étage : la base du bas, la base du haut, puis ce qui les relie. Pour un patron, nommez les faces (dessus, dessous, avant...) et imaginez le pliage, ou découpez-le pour vérifier.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'volume-pave',
          title: 'Le volume d\'un pavé droit et les contenances',
          minutes: 30,
          objectives: [
            "Comparer des volumes en comptant des cubes unités.",
            "Calculer le volume d'un cube et d'un pavé droit à l'aide d'une formule.",
            "Utiliser les unités de volume (cm³, dm³, m³) et de contenance (L, dL, cL, mL), et passer des unes aux autres.",
            "Résoudre un problème concret de remplissage (aquarium, piscine, bouteille).",
          ],
          course: [
            {
              heading: "Volume et contenance",
              paragraphs: [
                "Le volume d'un solide est la mesure de la place qu'il occupe dans l'espace. La contenance d'un récipient (une bouteille, un aquarium, une piscine) est le volume de liquide qu'il peut contenir. Ces deux mots désignent la même grandeur : on parle plutôt de contenance pour les liquides.",
                "Pour mesurer un volume, on compte combien de cubes unités on peut ranger dedans. Le centimètre cube (cm³) est le volume d'un cube de 1 cm d'arête ; le décimètre cube (dm³) est celui d'un cube de 1 dm d'arête ; le mètre cube (m³) est celui d'un cube de 1 m d'arête.",
              ],
              box: { label: "Définition", text: "1 cm³ est le volume d'un cube de 1 cm d'arête. 1 dm³ est le volume d'un cube de 1 dm d'arête. 1 m³ est le volume d'un cube de 1 m d'arête." },
            },
            {
              heading: "Le volume d'un pavé droit",
              paragraphs: [
                "Prenons une boîte en forme de pavé droit de 4 cm de longueur, 3 cm de largeur et 2 cm de hauteur. Sur le fond, on peut ranger une couche de 4 × 3 = 12 cubes de 1 cm³. La boîte a une hauteur de 2 cm : on peut empiler 2 couches. Elle contient donc 12 × 2 = 24 cubes : son volume est 24 cm³.",
                "Ce raisonnement marche toujours : on multiplie la longueur par la largeur (le nombre de cubes d'une couche), puis par la hauteur (le nombre de couches). Pour un cube, les trois dimensions sont égales. Comme pour les aires, les trois longueurs doivent être exprimées dans la même unité.",
              ],
              box: { label: "Formule", text: "Volume du pavé droit = longueur × largeur × hauteur. Volume du cube = côté × côté × côté. Si les longueurs sont en cm, le volume est en cm³." },
            },
            {
              heading: "Les unités de volume",
              paragraphs: [
                "Un cube de 1 dm d'arête mesure 10 cm de chaque côté. Une couche contient 10 × 10 = 100 cubes de 1 cm³, et il y a 10 couches : en tout 1 000 cubes. Donc 1 dm³ = 1 000 cm³. De la même façon, 1 m³ = 1 000 dm³ et 1 cm³ = 1 000 mm³.",
                "Chaque unité de volume vaut donc 1 000 fois l'unité immédiatement plus petite. Pour convertir, on multiplie ou on divise par 1 000, ou on utilise un tableau avec trois colonnes par unité. Exemples : 2 dm³ = 2 000 cm³ ; 3 500 cm³ = 3,5 dm³ ; 0,4 m³ = 400 dm³.",
              ],
              box: { label: "Règle", text: "1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³ ; 1 cm³ = 1 000 mm³. Vers une unité plus petite, on multiplie par 1 000 ; vers une unité plus grande, on divise par 1 000." },
            },
            {
              heading: "Volumes et litres",
              paragraphs: [
                "Pour les liquides, on utilise le litre (L) et ses sous-multiples : 1 L = 10 dL = 100 cL = 1 000 mL. Une brique de lait contient souvent 1 L, une canette 33 cL, et une cuillère à café contient environ 5 mL.",
                "Le lien entre les deux familles d'unités est simple : un litre est exactement la contenance d'un cube de 1 dm d'arête. Donc 1 L = 1 dm³, 1 mL = 1 cm³ et 1 m³ = 1 000 L. Un aquarium de 60 dm³ contient donc 60 L d'eau.",
              ],
              box: { label: "Repère", text: "1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L. Et 1 L = 10 dL = 100 cL = 1 000 mL." },
            },
          ],
          keyPoints: [
            "Le volume mesure la place occupée par un solide ; la contenance, ce qu'un récipient peut contenir.",
            "Volume du pavé droit = longueur × largeur × hauteur ; volume du cube = côté × côté × côté.",
            "Les trois longueurs doivent être exprimées dans la même unité.",
            "Chaque unité de volume vaut 1 000 fois la suivante : 1 dm³ = 1 000 cm³ et 1 m³ = 1 000 dm³.",
            "1 L = 1 dm³, 1 mL = 1 cm³ et 1 m³ = 1 000 L.",
            "1 L = 10 dL = 100 cL = 1 000 mL.",
          ],
          example: {
            statement: "Un aquarium en forme de pavé droit mesure 50 cm de longueur, 30 cm de largeur et 40 cm de hauteur. Calculez son volume en cm³, puis sa contenance en litres.",
            solution: [
              "Les trois dimensions sont en cm : on peut les multiplier directement.",
              "V = 50 × 30 × 40.",
              "50 × 30 = 1 500, puis 1 500 × 40 = 60 000. Le volume est 60 000 cm³.",
              "On convertit en dm³ en divisant par 1 000 : 60 000 cm³ = 60 dm³.",
              "Comme 1 dm³ = 1 L, l'aquarium a une contenance de 60 L.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Calculez le volume d'un pavé droit de 6 cm de longueur, 4 cm de largeur et 5 cm de hauteur. b) Calculez le volume d'un cube de 3 cm d'arête. c) Convertissez 2 dm³ en cm³, puis 3 500 cm³ en dm³.",
              hint: "Multipliez les trois dimensions. Entre deux unités de volume voisines, le facteur est 1 000.",
              solution: [
                "a) V = 6 × 4 × 5 = 24 × 5 = 120 cm³.",
                "b) V = 3 × 3 × 3 = 9 × 3 = 27 cm³.",
                "c) 2 dm³ = 2 × 1 000 cm³ = 2 000 cm³.",
                "3 500 cm³ = 3 500 ÷ 1 000 dm³ = 3,5 dm³.",
              ],
            },
            {
              level: 2,
              statement: "a) Convertissez : 2,5 L en cL ; 750 mL en L ; 4 dm³ en L ; 1,2 m³ en L. b) Une bouteille contient 1,5 L de jus de fruits. Combien de verres de 25 cL peut-on remplir ?",
              hint: "1 L = 100 cL = 1 000 mL, 1 dm³ = 1 L et 1 m³ = 1 000 L. Pour la question b, exprimez tout en cL.",
              solution: [
                "a) 2,5 L = 2,5 × 100 cL = 250 cL.",
                "750 mL = 750 ÷ 1 000 L = 0,75 L.",
                "4 dm³ = 4 L, car 1 dm³ = 1 L.",
                "1,2 m³ = 1,2 × 1 000 L = 1 200 L.",
                "b) 1,5 L = 150 cL. Or 6 × 25 = 150 : on peut remplir exactement 6 verres de 25 cL.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une piscine gonflable a la forme d'un pavé droit dont le fond mesure 3 m sur 2 m. On la remplit d'eau sur une hauteur de 50 cm. a) Calculez le volume d'eau en m³, puis en litres. b) Le tuyau d'arrosage débite 20 L par minute (données fictives). Combien de temps faut-il pour remplir la piscine ? Donnez la réponse en heures et minutes.",
              hint: "Écrivez d'abord 50 cm en mètres. Cherchez ensuite combien de fois 20 L tient dans le volume en litres, puis convertissez les minutes en heures et minutes.",
              solution: [
                "a) La hauteur d'eau est 50 cm = 0,5 m : toutes les longueurs sont maintenant en mètres.",
                "V = 3 × 2 × 0,5 = 6 × 0,5 = 3 m³.",
                "1 m³ = 1 000 L, donc 3 m³ = 3 000 L.",
                "b) Chaque minute apporte 20 L. Il faut 3 000 ÷ 20 = 150 minutes (vérification : 150 × 20 = 3 000).",
                "150 min = 120 min + 30 min = 2 h 30 min.",
                "La piscine contient 3 m³, soit 3 000 L d'eau, et il faut 2 h 30 min pour la remplir.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer la contenance en litres d'un aquarium en forme de pavé droit.",
            items: [
              "Repérer la longueur, la largeur et la hauteur de l'aquarium",
              "Écrire les trois dimensions dans la même unité",
              "Multiplier longueur × largeur × hauteur",
              "Écrire le volume avec son unité, par exemple en cm³",
              "Convertir ce volume en dm³",
              "Traduire en litres, car 1 dm³ = 1 L",
            ],
          },
          quiz: [
            {
              q: "Quel est le volume d'un cube de 2 cm d'arête ?",
              options: ["4 cm³", "6 cm³", "8 cm³", "12 cm³"],
              answer: 2,
              why: "V = 2 × 2 × 2 = 8 cm³. Le nombre 4 correspond à l'aire d'une face (4 cm²), et 6 au calcul faux 2 + 2 + 2.",
            },
            {
              q: "1 dm³ est égal à :",
              options: ["1 L", "10 L", "1 mL", "100 mL"],
              answer: 0,
              why: "Un litre est exactement la contenance d'un cube de 1 dm d'arête : 1 dm³ = 1 L.",
            },
            {
              q: "Combien de cm³ y a-t-il dans 1 dm³ ?",
              options: ["10", "100", "1 000", "10 000"],
              answer: 2,
              why: "Un cube de 1 dm d'arête contient 10 couches de 10 × 10 = 100 cubes de 1 cm³, soit 1 000 cm³.",
            },
            {
              q: "Une bouteille contient 75 cL, c'est-à-dire :",
              options: ["7,5 L", "0,75 L", "75 L", "0,075 L"],
              answer: 1,
              why: "1 L = 100 cL, donc 75 cL = 75 ÷ 100 L = 0,75 L.",
            },
            {
              q: "Un pavé droit mesure 5 cm sur 2 cm sur 3 cm. Son volume est :",
              options: ["10 cm³", "20 cm³", "30 cm²", "30 cm³"],
              answer: 3,
              why: "5 × 2 × 3 = 30, et un volume s'exprime en cm³ (le cm² est une unité d'aire).",
            },
          ],
          trap: "Utiliser le facteur 10 ou 100 au lieu de 1 000 pour convertir des volumes : 1 dm³ vaut 1 000 cm³, et non 100 cm³. On confond aussi souvent les unités d'aire (cm²) et de volume (cm³).",
          method: "Gardez en tête une image : une brique de lait de 1 L a le même volume qu'un cube de 1 dm d'arête, qui contient 1 000 petits cubes de 1 cm³. Vérifiez toujours qu'un résultat en litres est vraisemblable.",
        },
      ],
    },

    /* ================================================================== */
    /* DONNÉES, HASARD ET ALGORITHMES                                       */
    /* ================================================================== */
    {
      id: 'donnees-probabilites-algo',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'tableaux-diagrammes',
          title: 'Lire et construire des tableaux et des diagrammes',
          minutes: 30,
          objectives: [
            "Lire et interpréter des données présentées dans un tableau, un diagramme en barres, un diagramme circulaire ou une courbe.",
            "Organiser des données brutes dans un tableau d'effectifs.",
            "Construire un diagramme en barres en choisissant une échelle adaptée.",
          ],
          course: [
            {
              heading: "Organiser des données dans un tableau",
              paragraphs: [
                "Quand on mène une enquête (par exemple : « quel est votre sport préféré ? »), on obtient une longue liste de réponses, difficile à lire. Pour y voir clair, on compte combien de fois chaque réponse apparaît. Ce nombre s'appelle l'effectif de la réponse.",
                "On range ensuite les résultats dans un tableau : une ligne (ou une colonne) pour les réponses, une autre pour les effectifs. La somme de tous les effectifs est l'effectif total : elle doit être égale au nombre de personnes interrogées. C'est une vérification très utile.",
                "Un tableau à double entrée croise deux critères, l'un en lignes et l'autre en colonnes. Par exemple, les lignes peuvent indiquer les classes (6e A, 6e B) et les colonnes les moyens de transport (bus, vélo, à pied). Le nombre placé à l'intersection d'une ligne et d'une colonne correspond aux deux critères à la fois : par exemple, les élèves de 6e A qui viennent à vélo.",
              ],
              box: { label: "Définition", text: "L'effectif d'une valeur est le nombre de fois où elle apparaît dans les données. L'effectif total est la somme de tous les effectifs." },
            },
            {
              heading: "Le diagramme en barres",
              paragraphs: [
                "Un diagramme en barres (ou en bâtons) permet de comparer des effectifs d'un coup d'œil. Sur l'axe horizontal, on place les catégories ; sur l'axe vertical, on place les effectifs avec une graduation régulière. Chaque barre a une hauteur proportionnelle à l'effectif, et toutes les barres ont la même largeur.",
                "Pour construire le diagramme, on choisit une échelle adaptée à la feuille, par exemple 1 cm pour 2 élèves : une catégorie d'effectif 8 est alors représentée par une barre de 4 cm. On n'oublie ni le titre, ni le nom des axes, ni l'échelle.",
              ],
              box: { label: "Méthode", text: "Un titre, deux axes nommés, une graduation régulière sur l'axe vertical, une échelle indiquée (1 cm pour ...), des barres de même largeur dont la hauteur correspond à l'effectif." },
            },
            {
              heading: "Diagrammes circulaires et courbes",
              paragraphs: [
                "Un diagramme circulaire représente les parts d'un tout. Le disque entier représente l'effectif total, et chaque secteur représente une catégorie. Si un secteur occupe la moitié du disque, la catégorie représente la moitié de l'effectif total ; s'il en occupe le quart, elle en représente le quart.",
                "Une courbe (ou un graphique) montre comment une grandeur évolue, souvent au cours du temps : la température pendant une journée, la taille d'une plante semaine après semaine. On lit le temps sur l'axe horizontal et la valeur sur l'axe vertical. Pour lire une valeur, on part de l'axe horizontal, on monte jusqu'à la courbe, puis on se déplace horizontalement jusqu'à l'axe vertical.",
              ],
              box: { label: "À retenir", text: "Pour comparer des catégories : un diagramme en barres. Pour montrer les parts d'un tout : un diagramme circulaire. Pour montrer une évolution : une courbe." },
            },
          ],
          keyPoints: [
            "L'effectif d'une valeur est le nombre de fois où elle apparaît ; l'effectif total est la somme des effectifs.",
            "Dans un tableau à double entrée, chaque case correspond à une ligne et à une colonne à la fois.",
            "Diagramme en barres : des barres de même largeur, de hauteur proportionnelle à l'effectif, avec une échelle indiquée.",
            "Diagramme circulaire : le disque entier représente le total ; un demi-disque en représente la moitié.",
            "Une courbe montre une évolution, souvent au cours du temps.",
            "Avant de lire un graphique, on lit son titre, ses axes, ses unités et son échelle.",
          ],
          example: {
            statement: "Dans une classe de 24 élèves, on a demandé le sport préféré de chacun (données fictives) : football 9, natation 6, danse 5, basket 4. a) Vérifiez l'effectif total. b) Expliquez comment construire le diagramme en barres avec une échelle de 1 cm pour 1 élève. c) Combien d'élèves de plus préfèrent le football plutôt que le basket ?",
            solution: [
              "a) 9 + 6 + 5 + 4 = 24 : l'effectif total correspond bien au nombre d'élèves de la classe.",
              "b) On trace un axe horizontal où l'on écrit les quatre sports, et un axe vertical gradué régulièrement de 0 à 10 élèves, à raison de 1 cm pour 1 élève.",
              "On dessine des barres de même largeur : 9 cm pour le football, 6 cm pour la natation, 5 cm pour la danse et 4 cm pour le basket. On ajoute un titre : « Sport préféré des élèves de la classe ».",
              "c) 9 - 4 = 5 : cinq élèves de plus préfèrent le football plutôt que le basket.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici la température relevée à midi pendant une semaine d'école (données fictives) : lundi 12 °C, mardi 15 °C, mercredi 9 °C, jeudi 14 °C, vendredi 18 °C. a) Quel jour a-t-il fait le plus chaud ? le plus froid ? b) Quel est l'écart entre ces deux températures ? c) Quels jours la température a-t-elle dépassé 13 °C ?",
              hint: "Comparez les nombres un par un. L'écart est une différence : la plus grande valeur moins la plus petite.",
              solution: [
                "a) La plus grande température est 18 °C : il a fait le plus chaud vendredi. La plus petite est 9 °C : il a fait le plus froid mercredi.",
                "b) Écart : 18 - 9 = 9 °C.",
                "c) Les températures supérieures à 13 °C sont 15 °C, 14 °C et 18 °C : mardi, jeudi et vendredi.",
              ],
            },
            {
              level: 2,
              statement: "On a demandé leur fruit préféré à 20 élèves (données fictives). Voici leurs réponses : pomme, banane, pomme, fraise, orange, pomme, banane, fraise, pomme, pomme, orange, banane, fraise, pomme, banane, pomme, orange, fraise, banane, pomme. a) Construisez le tableau des effectifs. b) Vérifiez l'effectif total. c) Avec une échelle de 1 cm pour 2 élèves, quelle hauteur aura chaque barre du diagramme ?",
              hint: "Barrez chaque réponse au fur et à mesure que vous la comptez, pour ne pas l'oublier ni la compter deux fois. Avec 1 cm pour 2 élèves, la hauteur en cm est la moitié de l'effectif.",
              solution: [
                "a) En comptant : pomme 8, banane 5, fraise 4, orange 3.",
                "b) 8 + 5 + 4 + 3 = 20 : on retrouve bien les 20 élèves interrogés.",
                "c) Avec 1 cm pour 2 élèves, chaque barre mesure en cm la moitié de l'effectif : pomme 8 ÷ 2 = 4 cm ; banane 5 ÷ 2 = 2,5 cm ; fraise 4 ÷ 2 = 2 cm ; orange 3 ÷ 2 = 1,5 cm.",
                "Le fruit préféré de ce groupe est la pomme, choisie par 8 élèves sur 20.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un diagramme circulaire représente le moyen de transport des 240 élèves d'un collège (données fictives). Le secteur « bus » occupe la moitié du disque, le secteur « à pied » occupe un quart du disque, et les secteurs « vélo » et « voiture » se partagent le reste en deux parts égales. a) Combien d'élèves utilisent chaque moyen de transport ? b) On veut représenter ces données par un diagramme en barres, avec une échelle de 1 cm pour 20 élèves. Quelle est la hauteur de chaque barre ? c) Quel diagramme montre le mieux que la moitié des élèves vient en bus ?",
              hint: "Calculez la moitié, puis le quart de 240. Ce qui reste est partagé en deux. Pour l'échelle, divisez chaque effectif par 20.",
              solution: [
                "a) Bus : la moitié de 240, soit 240 ÷ 2 = 120 élèves.",
                "À pied : le quart de 240, soit 240 ÷ 4 = 60 élèves.",
                "Il reste 240 - 120 - 60 = 60 élèves, partagés en deux parts égales : 30 élèves à vélo et 30 élèves en voiture.",
                "Vérification : 120 + 60 + 30 + 30 = 240.",
                "b) Avec 1 cm pour 20 élèves : bus 120 ÷ 20 = 6 cm ; à pied 60 ÷ 20 = 3 cm ; vélo 30 ÷ 20 = 1,5 cm ; voiture 1,5 cm.",
                "c) Le diagramme circulaire montre directement les parts du total : on voit tout de suite que le secteur « bus » est un demi-disque. Le diagramme en barres, lui, permet surtout de comparer les catégories entre elles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot ou chaque représentation à ce qu'il désigne ou à ce qu'il permet de faire.",
            pairs: [
              { left: "Effectif", right: "Nombre de fois où une valeur apparaît" },
              { left: "Effectif total", right: "Somme de tous les effectifs" },
              { left: "Diagramme en barres", right: "Comparer des quantités entre catégories" },
              { left: "Diagramme circulaire", right: "Montrer les parts d'un tout" },
              { left: "Courbe", right: "Montrer une évolution au cours du temps" },
              { left: "Échelle", right: "Ce que représente 1 cm sur l'axe" },
            ],
          },
          quiz: [
            {
              q: "Dans un diagramme en barres, la hauteur d'une barre représente :",
              options: ["le nom de la catégorie", "l'effectif", "la largeur choisie", "le titre du diagramme"],
              answer: 1,
              why: "La hauteur de chaque barre est proportionnelle à l'effectif de la catégorie ; toutes les barres ont la même largeur.",
            },
            {
              q: "Pour montrer l'évolution de la température heure par heure, on choisit plutôt :",
              options: ["un diagramme circulaire", "un tableau de conversion", "une courbe"],
              answer: 2,
              why: "Une courbe montre comment une grandeur évolue au cours du temps. Un diagramme circulaire montre des parts d'un tout.",
            },
            {
              q: "Avec une échelle de 1 cm pour 5 élèves, une barre de 3 cm représente :",
              options: ["15 élèves", "3 élèves", "8 élèves", "35 élèves"],
              answer: 0,
              why: "Chaque centimètre représente 5 élèves : 3 × 5 = 15 élèves.",
            },
            {
              q: "Dans un diagramme circulaire, une catégorie qui représente la moitié des réponses occupe :",
              options: ["un quart du disque", "un tiers du disque", "tout le disque", "la moitié du disque"],
              answer: 3,
              why: "Le disque entier représente toutes les réponses : la moitié des réponses correspond à un demi-disque.",
            },
            {
              q: "Un tableau d'effectifs indique 7, 5, 9 et 3. L'effectif total est :",
              options: ["21", "24", "25", "9"],
              answer: 1,
              why: "L'effectif total est la somme des effectifs : 7 + 5 + 9 + 3 = 24.",
            },
          ],
          trap: "Lire la hauteur d'une barre sans tenir compte de l'échelle : avec 1 cm pour 5 élèves, une barre de 3 cm représente 15 élèves, et non 3. Il faut aussi graduer l'axe vertical de façon régulière.",
          method: "Avant de répondre à une question sur un graphique, lisez dans l'ordre : le titre, les axes, les unités et l'échelle. Après avoir construit un tableau, vérifiez toujours que l'effectif total correspond au nombre de personnes interrogées.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'probabilites',
          title: 'Le hasard : certain, possible ou impossible ?',
          minutes: 25,
          objectives: [
            "Reconnaître une expérience aléatoire et citer toutes ses issues possibles.",
            "Qualifier un événement : impossible, peu probable, possible, très probable ou certain.",
            "Comparer les chances de deux événements dans des situations simples (pièce, dé, sac de billes, roue).",
            "Exprimer une chance par une expression du type « 1 chance sur 6 ».",
          ],
          course: [
            {
              heading: "Les expériences aléatoires",
              paragraphs: [
                "Une expérience est aléatoire quand on connaît tous les résultats possibles, mais qu'on ne peut pas savoir à l'avance lequel va se produire. Lancer une pièce, lancer un dé, tirer une bille dans un sac sans regarder ou faire tourner une roue de loterie sont des expériences aléatoires.",
                "Les résultats possibles s'appellent les issues. Quand on lance une pièce, il y a deux issues : pile ou face. Quand on lance un dé à 6 faces, il y a six issues : 1, 2, 3, 4, 5 ou 6. En revanche, lâcher une pierre n'est pas une expérience aléatoire : on sait qu'elle va tomber.",
              ],
              box: { label: "Définition", text: "Une expérience aléatoire est une expérience dont on connaît toutes les issues possibles, sans pouvoir prévoir laquelle se produira. Une issue est un résultat possible de l'expérience." },
            },
            {
              heading: "Certain, possible ou impossible",
              paragraphs: [
                "Un événement est une situation qui peut se produire ou non lors de l'expérience. Avec un dé à 6 faces, « obtenir un nombre pair » est un événement : il se produit si l'on obtient 2, 4 ou 6.",
                "Un événement est impossible s'il ne peut jamais se produire : « obtenir 7 » avec un dé à 6 faces. Il est certain s'il se produit à coup sûr : « obtenir un nombre entre 1 et 6 ». Entre les deux, il est possible : « obtenir 5 » peut arriver, ou pas.",
              ],
              box: { label: "À retenir", text: "Impossible : ne se produit jamais. Certain : se produit toujours. Possible : peut se produire ou non. Parmi les événements possibles, certains sont plus probables que d'autres." },
            },
            {
              heading: "Comparer les chances",
              paragraphs: [
                "Avec un dé équilibré, chaque face a la même chance de sortir. Comme il y a 6 faces, on dit qu'on a 1 chance sur 6 d'obtenir 5. Pour « obtenir un nombre pair », trois issues conviennent (2, 4 et 6) : on a 3 chances sur 6, c'est-à-dire 1 chance sur 2.",
                "Dans un sac contenant 7 billes rouges et 3 billes bleues, toutes identiques au toucher, on a 7 chances sur 10 de tirer une rouge et 3 chances sur 10 de tirer une bleue : tirer une rouge est plus probable. Attention, ce qui compte n'est pas seulement le nombre de billes rouges, mais leur part dans le sac : 3 rouges sur 4 billes donnent plus de chances que 6 rouges sur 12 billes.",
                "On peut ranger les événements sur une ligne des chances : à une extrémité l'impossible, à l'autre le certain. Au milieu se trouve « 1 chance sur 2 », comme pile ou face. Un événement peu probable est proche de l'impossible, un événement très probable est proche du certain.",
              ],
            },
            {
              heading: "Le hasard n'a pas de mémoire",
              paragraphs: [
                "Si une pièce équilibrée est tombée cinq fois de suite sur pile, la pièce ne s'en souvient pas : au lancer suivant, il y a toujours 1 chance sur 2 d'obtenir face. Croire que « face doit finir par sortir » est une erreur très répandue.",
                "Quand on répète une expérience un grand nombre de fois, les résultats se rapprochent des chances prévues. Si l'on lance un dé 600 fois, chaque face sort environ 100 fois, mais rarement exactement 100 fois. Sur quelques lancers seulement, tout peut arriver.",
              ],
            },
          ],
          keyPoints: [
            "Une expérience aléatoire a des issues connues, mais on ne peut pas prévoir laquelle se produira.",
            "Un événement impossible ne se produit jamais ; un événement certain se produit toujours.",
            "Avec un dé équilibré à 6 faces, chaque face a 1 chance sur 6 de sortir.",
            "Pour comparer des chances, on compare des parts (3 sur 4 contre 6 sur 12), pas seulement des nombres.",
            "Le hasard n'a pas de mémoire : les lancers précédents ne changent pas les chances du lancer suivant.",
          ],
          example: {
            statement: "Un sac contient 5 billes rouges, 3 billes vertes et 2 billes jaunes, identiques au toucher. On tire une bille au hasard. a) Quelles sont les issues possibles ? b) L'événement « tirer une bille bleue » est-il possible ? Et « tirer une bille rouge, verte ou jaune » ? c) Quelle couleur a le plus de chances de sortir ? Combien de chances a-t-elle ?",
            solution: [
              "a) Les issues possibles sont : rouge, verte ou jaune.",
              "b) Il n'y a aucune bille bleue dans le sac : « tirer une bille bleue » est impossible.",
              "Toutes les billes sont rouges, vertes ou jaunes : « tirer une bille rouge, verte ou jaune » est certain.",
              "c) Le sac contient 5 + 3 + 2 = 10 billes, dont 5 rouges : le rouge est la couleur la plus représentée.",
              "Le rouge a 5 chances sur 10, c'est-à-dire 1 chance sur 2, de sortir : c'est la couleur la plus probable.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On lance un dé équilibré à 6 faces. Pour chaque événement, dites s'il est impossible, possible ou certain, et donnez le nombre de chances quand il est possible. a) Obtenir 4. b) Obtenir 0. c) Obtenir un nombre compris entre 1 et 6. d) Obtenir un nombre impair.",
              hint: "Écrivez d'abord les six issues : 1, 2, 3, 4, 5, 6. Pour chaque événement, comptez les issues qui conviennent.",
              solution: [
                "a) Une seule issue convient (4) : l'événement est possible, avec 1 chance sur 6.",
                "b) Aucune face ne porte le nombre 0 : l'événement est impossible.",
                "c) Toutes les faces portent un nombre compris entre 1 et 6 : l'événement est certain.",
                "d) Trois issues conviennent (1, 3 et 5) : l'événement est possible, avec 3 chances sur 6, c'est-à-dire 1 chance sur 2.",
              ],
            },
            {
              level: 2,
              statement: "Pour gagner, Inès doit tirer une bille rouge sans regarder. Elle peut choisir entre deux sacs. Le sac A contient 3 billes rouges et 1 bille bleue. Le sac B contient 6 billes rouges et 6 billes bleues. Quel sac doit-elle choisir ? Justifiez.",
              hint: "Ne regardez pas seulement le nombre de billes rouges : comparez-le au nombre total de billes de chaque sac.",
              solution: [
                "Sac A : 3 billes rouges sur 3 + 1 = 4 billes, soit 3 chances sur 4. C'est plus de la moitié.",
                "Sac B : 6 billes rouges sur 6 + 6 = 12 billes, soit 6 chances sur 12, c'est-à-dire exactement 1 chance sur 2.",
                "3 chances sur 4, c'est plus que 1 chance sur 2 (qui ferait 2 chances sur 4).",
                "Inès doit choisir le sac A, même s'il contient moins de billes rouges que le sac B.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une roue de loterie est partagée en 8 secteurs identiques : 4 bleus, 2 rouges, 1 vert et 1 jaune. On fait tourner la roue et on regarde la couleur du secteur qui s'arrête devant le repère. a) Quelle couleur a le plus de chances de sortir ? Combien de chances a-t-elle ? b) Comparez les chances des événements « obtenir rouge » et « obtenir vert ou jaune ». c) Léo a obtenu bleu trois fois de suite. A-t-il moins de chances d'obtenir bleu au quatrième tour ? d) Comment colorier la roue pour que « obtenir rouge » devienne certain ? Et pour qu'il devienne impossible ?",
              hint: "Comptez les secteurs de chaque couleur sur les 8. Pour la question c, demandez-vous si la roue a changé entre deux tours.",
              solution: [
                "a) Le bleu occupe 4 secteurs sur 8 : il a 4 chances sur 8, soit 1 chance sur 2. C'est la couleur la plus probable.",
                "b) Rouge : 2 secteurs sur 8, donc 2 chances sur 8. Vert ou jaune : 1 + 1 = 2 secteurs sur 8, donc aussi 2 chances sur 8. Les deux événements ont autant de chances.",
                "c) Non. La roue n'a pas changé et le hasard n'a pas de mémoire : au quatrième tour, le bleu a toujours 4 chances sur 8.",
                "d) « Obtenir rouge » devient certain si les 8 secteurs sont rouges. Il devient impossible si aucun secteur n'est rouge.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Méfiez-vous des idées reçues sur le hasard.",
            statements: [
              { text: "Lancer une pièce équilibrée est une expérience aléatoire.", true: true, why: "On connaît les deux issues (pile, face), mais on ne peut pas prévoir laquelle sortira." },
              { text: "Avec un dé à 6 faces, obtenir 7 est un événement possible.", true: false, why: "Aucune face ne porte 7 : l'événement est impossible." },
              { text: "Après trois « pile » de suite, « face » devient plus probable.", true: false, why: "Le hasard n'a pas de mémoire : il y a toujours 1 chance sur 2 d'obtenir face." },
              { text: "Avec un dé équilibré, il est plus difficile d'obtenir 6 que d'obtenir 1.", true: false, why: "Chaque face a la même chance de sortir : 1 chance sur 6." },
              { text: "Avec un dé à 6 faces, obtenir un nombre pair a 1 chance sur 2.", true: true, why: "Trois issues sur six conviennent (2, 4, 6) : 3 chances sur 6, soit 1 chance sur 2." },
              { text: "Le sac qui contient le plus de billes rouges donne toujours le plus de chances de tirer une rouge.", true: false, why: "Ce qui compte est la part des rouges : 3 rouges sur 4 billes valent mieux que 6 rouges sur 12 billes." },
              { text: "Un événement certain se produit à chaque fois.", true: true, why: "C'est la définition d'un événement certain." },
            ],
          },
          quiz: [
            {
              q: "Avec un dé à 6 faces, « obtenir un nombre plus grand que 6 » est un événement :",
              options: ["certain", "possible", "impossible"],
              answer: 2,
              why: "Le plus grand nombre inscrit sur le dé est 6 : on ne peut jamais obtenir plus. L'événement est impossible.",
            },
            {
              q: "Quelle situation est une expérience aléatoire ?",
              options: ["lâcher une pierre en l'air", "tirer une carte au hasard", "calculer 3 × 4 + 1 de tête"],
              answer: 1,
              why: "On connaît les cartes possibles, mais on ne peut pas prévoir laquelle sera tirée. La pierre retombe toujours, et le calcul donne toujours 13.",
            },
            {
              q: "Un sac contient 2 boules vertes et 8 boules rouges. Tirer une boule verte est :",
              options: ["peu probable", "impossible", "certain", "très probable"],
              answer: 0,
              why: "Il y a 2 chances sur 10 de tirer une verte : c'est possible, mais peu probable.",
            },
            {
              q: "Une pièce équilibrée est tombée 4 fois de suite sur pile. Au 5e lancer :",
              options: ["face est plus probable", "pile est plus probable", "autant de chances", "face est certain"],
              answer: 2,
              why: "Le hasard n'a pas de mémoire : pile et face ont toujours 1 chance sur 2 chacun.",
            },
            {
              q: "Avec un dé équilibré à 6 faces, « obtenir 5 » a :",
              options: ["1 chance sur 5", "5 chances sur 6", "aucune chance", "1 chance sur 6"],
              answer: 3,
              why: "Une seule face porte le 5, sur 6 faces qui ont toutes la même chance : 1 chance sur 6.",
            },
          ],
          trap: "Croire que le hasard a de la mémoire (après plusieurs « pile », « face » serait plus probable), ou comparer des chances avec le seul nombre de billes favorables au lieu de leur part dans le total.",
          method: "Écrivez toujours la liste complète des issues avant de répondre. Comptez ensuite les issues qui conviennent, et formulez la réponse sous la forme « ... chances sur ... ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'algorithmes-programmation',
          title: 'Écrire un algorithme et programmer des déplacements',
          minutes: 30,
          objectives: [
            "Comprendre qu'un algorithme est une suite ordonnée d'instructions précises qui permet de résoudre un problème.",
            "Programmer les déplacements d'un robot ou d'un lutin sur une grille ou dans un logiciel de programmation par blocs.",
            "Utiliser une boucle « répéter » pour programmer une action répétée.",
            "Tester un programme, repérer une erreur et la corriger.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un algorithme ?",
              paragraphs: [
                "Un algorithme est une suite d'instructions, écrites dans un ordre précis, qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine, la notice de montage d'un meuble ou un itinéraire pour aller au collège sont des algorithmes de la vie courante.",
                "Chaque instruction doit être claire et sans ambiguïté : « tourner » ne suffit pas, il faut dire de quel côté et de combien. L'ordre compte aussi : « mettre ses chaussures, puis ses chaussettes » ne donne pas le même résultat que l'inverse. Un programme est un algorithme écrit dans un langage qu'une machine (ordinateur, robot) peut exécuter.",
              ],
              box: { label: "Définition", text: "Un algorithme est une suite finie et ordonnée d'instructions précises qui permet de résoudre un problème. Un programme est la traduction d'un algorithme dans un langage compris par une machine." },
            },
            {
              heading: "Programmer des déplacements sur une grille",
              paragraphs: [
                "Imaginons un robot posé sur une case d'un quadrillage. Il comprend trois instructions : « avancer d'une case », « tourner à gauche » et « tourner à droite » (d'un quart de tour, sans changer de case). « Avancer » le fait toujours avancer dans la direction vers laquelle il regarde.",
                "Attention : la gauche et la droite sont celles du robot, pas celles de la personne qui regarde la feuille. Si le robot descend vers le bas de la feuille, sa gauche est du côté droit de la feuille. Pour ne pas se tromper, on peut tourner la feuille, ou se mettre à la place du robot.",
                "On peut aussi utiliser des directions absolues, comme sur une carte : nord (vers le haut de la feuille), sud (vers le bas), est (vers la droite) et ouest (vers la gauche). Alors « aller vers le nord » signifie toujours monter, quelle que soit l'orientation du robot.",
              ],
            },
            {
              heading: "Programmer avec des blocs",
              paragraphs: [
                "Dans un logiciel de programmation par blocs comme Scratch, on déplace un personnage appelé lutin en assemblant des blocs. Un script commence par un bloc d'événement, comme « quand le drapeau vert est cliqué ». Ensuite, des blocs comme « avancer de 100 pas » ou « tourner de 90 degrés » s'exécutent dans l'ordre, de haut en bas.",
                "Avec les blocs de l'extension Stylo, et notamment « stylo en position d'écriture », le lutin laisse une trace en se déplaçant : on peut alors lui faire dessiner des figures. Pour tracer un carré de côté 100 pas, il faut quatre fois la suite « avancer de 100 pas, tourner de 90 degrés ».",
              ],
            },
            {
              heading: "La boucle « répéter » et la correction des erreurs",
              paragraphs: [
                "Plutôt que d'écrire quatre fois les mêmes instructions, on utilise une boucle : « répéter 4 fois : avancer de 100 pas, tourner de 90 degrés ». Le programme est plus court, plus lisible, et plus facile à modifier : pour changer la taille du carré, on ne change qu'un nombre.",
                "Pour tracer une figure dont tous les côtés et tous les angles sont égaux, le lutin doit faire un tour complet, soit 360 degrés au total. Il tourne donc à chaque sommet de 360 ÷ (nombre de côtés) degrés : 90 degrés pour un carré, 120 degrés pour un triangle équilatéral. Ce n'est pas l'angle de la figure : les angles du triangle équilatéral mesurent 60 degrés, mais le lutin doit tourner de 120 degrés.",
                "Un programme se teste : on l'exécute et on compare le résultat à ce qu'on attendait. Si la figure n'est pas la bonne, on cherche l'instruction fautive (on dit qu'on débogue le programme), on la corrige et on teste à nouveau.",
              ],
              box: { label: "À retenir", text: "Une boucle « répéter n fois » exécute n fois les instructions qu'elle contient. Pour tracer une figure aux côtés et aux angles égaux, le lutin tourne de 360 ÷ (nombre de côtés) degrés à chaque sommet." },
            },
          ],
          keyPoints: [
            "Un algorithme est une suite ordonnée d'instructions précises ; un programme est un algorithme écrit pour une machine.",
            "Sur une grille, la gauche et la droite sont celles du robot, pas celles du lecteur.",
            "Dans Scratch, les blocs s'exécutent dans l'ordre, de haut en bas, après un bloc d'événement.",
            "La boucle « répéter n fois » évite de recopier des instructions identiques.",
            "Pour une figure aux côtés et aux angles égaux, le lutin tourne de 360 ÷ (nombre de côtés) degrés : 90 pour un carré, 120 pour un triangle équilatéral.",
            "On teste toujours un programme, et on corrige les erreurs une par une.",
          ],
          example: {
            statement: "Écrivez un script Scratch qui trace un carré de côté 80 pas, en utilisant une boucle.",
            solution: [
              "Un carré a 4 côtés de même longueur et 4 angles droits : le lutin doit 4 fois avancer de 80 pas, puis tourner d'un quart de tour (90 degrés).",
              "On commence par le bloc « quand le drapeau vert est cliqué ».",
              "On ajoute « effacer tout », puis « stylo en position d'écriture », pour que le lutin laisse une trace.",
              "On place une boucle « répéter 4 fois » qui contient « avancer de 80 pas » et « tourner de 90 degrés ».",
              "On clique sur le drapeau vert pour tester : le lutin trace un carré de côté 80 pas et revient à son point de départ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un robot est posé sur une case d'un quadrillage et regarde vers la droite de la feuille. Il exécute le programme : avancer de 3 cases, tourner à gauche, avancer de 2 cases, tourner à gauche, avancer d'une case. Où se trouve-t-il à la fin, par rapport à sa case de départ, et dans quelle direction regarde-t-il ?",
              hint: "Dessinez un quadrillage et suivez le robot instruction par instruction, en notant à chaque fois la direction vers laquelle il regarde.",
              solution: [
                "Avancer de 3 cases : le robot va de 3 cases vers la droite de la feuille.",
                "Tourner à gauche : il regardait vers la droite de la feuille ; il regarde maintenant vers le haut.",
                "Avancer de 2 cases : il monte de 2 cases.",
                "Tourner à gauche : il regarde maintenant vers la gauche de la feuille.",
                "Avancer d'une case : il revient d'une case vers la gauche.",
                "Bilan : il est 3 - 1 = 2 cases à droite et 2 cases au-dessus de sa case de départ, et il regarde vers la gauche de la feuille.",
              ],
            },
            {
              level: 2,
              statement: "Voici un script : « quand le drapeau vert est cliqué ; stylo en position d'écriture ; répéter 4 fois : avancer de 50 pas, tourner de 90 degrés ». a) Quelle figure le lutin trace-t-il ? b) Modifiez le script pour qu'il trace un rectangle de 100 pas sur 50 pas.",
              hint: "Un rectangle a deux longueurs et deux largeurs qui alternent : quel groupe d'instructions se répète, et combien de fois ?",
              solution: [
                "a) Le lutin avance de 50 pas et tourne d'un quart de tour, quatre fois : il trace un carré de côté 50 pas.",
                "b) Dans un rectangle, on enchaîne une longueur, un angle droit, une largeur, un angle droit, puis on recommence.",
                "Le groupe « avancer de 100 pas, tourner de 90 degrés, avancer de 50 pas, tourner de 90 degrés » doit donc être répété 2 fois.",
                "Script corrigé : « quand le drapeau vert est cliqué ; stylo en position d'écriture ; répéter 2 fois : avancer de 100 pas, tourner de 90 degrés, avancer de 50 pas, tourner de 90 degrés ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Élise veut tracer un triangle équilatéral de côté 100 pas. Elle écrit : « répéter 3 fois : avancer de 100 pas, tourner de 60 degrés ». a) En vous aidant d'un dessin, expliquez ce que trace son script. b) Corrigez le script. c) Écrivez un script qui trace une figure à 6 côtés égaux et 6 angles égaux (un hexagone régulier) de côté 50 pas.",
              hint: "Pour revenir à son point de départ en regardant dans la même direction, le lutin doit avoir fait un tour complet, soit 360 degrés au total.",
              solution: [
                "a) À chaque sommet, le lutin tourne de 60 degrés. Après 3 virages de 60 degrés, il n'a tourné que de 3 × 60 = 180 degrés au total, soit un demi-tour.",
                "Il trace donc trois segments de 100 pas qui ne se referment pas : la figure ressemble à la moitié d'un hexagone, ce n'est pas un triangle.",
                "b) Pour fermer le triangle, le lutin doit tourner de 360 degrés en tout, soit 360 ÷ 3 = 120 degrés à chaque sommet. Script corrigé : « répéter 3 fois : avancer de 100 pas, tourner de 120 degrés ».",
                "Remarque : 120 degrés n'est pas l'angle du triangle (60 degrés) ; c'est l'angle dont le lutin change de direction à chaque sommet.",
                "c) Pour 6 côtés, 360 ÷ 6 = 60 degrés à chaque sommet : « répéter 6 fois : avancer de 50 pas, tourner de 60 degrés ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour écrire un programme qui fonctionne.",
            items: [
              "Lire le problème et décrire le chemin ou la figure à obtenir",
              "Découper la tâche en instructions simples",
              "Repérer les instructions qui se répètent pour utiliser une boucle",
              "Écrire le programme",
              "Exécuter le programme et observer le résultat",
              "Corriger l'erreur si le résultat n'est pas celui attendu",
            ],
          },
          quiz: [
            {
              q: "Un algorithme est :",
              options: ["une suite ordonnée d'instructions", "un langage réservé aux seuls robots", "une figure tracée par un lutin", "un très grand nombre entier"],
              answer: 0,
              why: "Un algorithme est une suite ordonnée d'instructions précises qui permet de résoudre un problème ; il peut être écrit en français, sur papier.",
            },
            {
              q: "Que trace le script « répéter 4 fois : avancer de 60 pas, tourner de 90 degrés » ?",
              options: ["un triangle", "un carré", "un rectangle de 60 sur 90", "un segment"],
              answer: 1,
              why: "Quatre côtés de 60 pas et quatre quarts de tour : c'est un carré de côté 60 pas.",
            },
            {
              q: "Pour tracer un triangle équilatéral, le lutin doit tourner à chaque sommet de :",
              options: ["60 degrés", "90 degrés", "120 degrés", "180 degrés"],
              answer: 2,
              why: "Le lutin doit faire un tour complet en 3 virages : 360 ÷ 3 = 120 degrés. Avec 60 degrés, la figure ne se referme pas.",
            },
            {
              q: "Un robot regarde vers le nord. Il tourne deux fois à droite d'un quart de tour. Il regarde alors vers :",
              options: ["l'est", "l'ouest", "le nord", "le sud"],
              answer: 3,
              why: "Un premier quart de tour à droite le tourne vers l'est, le second vers le sud : deux quarts de tour font un demi-tour.",
            },
            {
              q: "À quoi sert une boucle « répéter » ?",
              options: ["à effacer tout le dessin du lutin", "à refaire plusieurs fois un bloc", "à arrêter le programme au hasard"],
              answer: 1,
              why: "Une boucle exécute plusieurs fois les instructions qu'elle contient, ce qui évite de les recopier.",
            },
          ],
          trap: "Confondre l'angle dont le lutin tourne avec l'angle de la figure : pour un triangle équilatéral, il tourne de 120 degrés, et non de 60. Autre erreur : prendre la gauche et la droite du lecteur au lieu de celles du robot.",
          method: "Exécutez le programme à la main, instruction par instruction, avec un crayon sur du papier quadrillé, en notant la direction du robot après chaque virage. Testez ensuite sur l'ordinateur et comparez.",
        },
      ],
    },
  ],
}
