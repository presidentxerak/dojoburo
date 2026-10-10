import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-tle',
  chapters: [
    /* ==================================================================== */
    /* VECTEURS, DROITES ET PLANS DE L'ESPACE                                 */
    /* ==================================================================== */
    {
      id: 'espace-vecteurs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vecteurs-espace',
          title: "Vecteurs de l'espace, colinéarité et coplanarité",
          minutes: 30,
          objectives: [
            "Représenter des combinaisons linéaires de vecteurs donnés dans l'espace.",
            "Exploiter une figure pour exprimer un vecteur comme combinaison linéaire d'autres vecteurs.",
            "Utiliser la colinéarité de deux vecteurs pour démontrer un alignement ou un parallélisme.",
            "Démontrer que trois vecteurs, ou quatre points, sont coplanaires.",
          ],
          course: [
            {
              heading: "Des vecteurs du plan aux vecteurs de l'espace",
              paragraphs: [
                "La notion de vecteur s'étend telle quelle du plan à l'espace. À deux points A et B, on associe le vecteur AB⃗, défini par une direction (celle de la droite (AB)), un sens (de A vers B) et une norme (la longueur AB). Comme dans le plan, AB⃗ = CD⃗ signifie que ABDC est un parallélogramme, éventuellement aplati. Pour tout vecteur u⃗ et tout point A, il existe un unique point M tel que AM⃗ = u⃗.",
                "Les règles de calcul sont les mêmes que dans le plan : la relation de Chasles AB⃗ + BC⃗ = AC⃗, la règle du parallélogramme, la multiplication par un réel k (qui conserve la direction, change le sens si k < 0 et multiplie la norme par |k|). Dans le cube ABCDEFGH (face ABCD en bas, E au-dessus de A, F au-dessus de B, G au-dessus de C, H au-dessus de D), on a AB⃗ = DC⃗ = EF⃗ = HG⃗.",
                "Exemple : dans ce cube, AG⃗ = AB⃗ + BC⃗ + CG⃗ = AB⃗ + AD⃗ + AE⃗, car BC⃗ = AD⃗ et CG⃗ = AE⃗. La grande diagonale s'obtient en « avançant » successivement selon les trois arêtes issues de A, comme on se déplace dans une pièce : en longueur, en largeur, puis en hauteur.",
              ],
              box: { label: "Définition", text: "Un vecteur w⃗ est une combinaison linéaire des vecteurs u⃗ et v⃗ s'il existe deux réels a et b tels que w⃗ = a u⃗ + b v⃗. On définit de même une combinaison linéaire de trois vecteurs : a u⃗ + b v⃗ + c w⃗." },
            },
            {
              heading: "Colinéarité : alignement et parallélisme",
              paragraphs: [
                "Deux vecteurs u⃗ et v⃗ sont colinéaires si l'un est le produit de l'autre par un réel : il existe k tel que v⃗ = k u⃗, ou bien u⃗ = 0⃗. Le vecteur nul est donc colinéaire à tout vecteur. Deux vecteurs non nuls colinéaires ont la même direction.",
                "La colinéarité traduit deux situations géométriques. Trois points A, B, C sont alignés si et seulement si AB⃗ et AC⃗ sont colinéaires. Les droites (AB) et (CD) sont parallèles si et seulement si AB⃗ et CD⃗ sont colinéaires. Une droite est ainsi entièrement déterminée par un point A et un vecteur directeur u⃗ non nul : c'est l'ensemble des points M tels que AM⃗ = t u⃗, où t décrit R.",
              ],
              box: { label: "Propriété", text: "A, B, C alignés ⇔ AB⃗ et AC⃗ colinéaires. (AB) // (CD) ⇔ AB⃗ et CD⃗ colinéaires. La droite passant par A de vecteur directeur u⃗ est l'ensemble des points M tels que AM⃗ = t u⃗, avec t réel." },
            },
            {
              heading: "Plans de l'espace et vecteurs coplanaires",
              paragraphs: [
                "Un plan est déterminé par un point A et deux vecteurs u⃗ et v⃗ non colinéaires : c'est l'ensemble des points M tels que AM⃗ = x u⃗ + y v⃗, où x et y décrivent R. On dit que (u⃗, v⃗) est un couple de vecteurs directeurs du plan. Par exemple, le plan (ABC) passe par A et est dirigé par AB⃗ et AC⃗ dès que A, B, C ne sont pas alignés.",
                "Trois vecteurs u⃗, v⃗, w⃗ sont dits coplanaires si, en les représentant à partir d'un même point A (AB⃗ = u⃗, AC⃗ = v⃗, AD⃗ = w⃗), les quatre points A, B, C, D sont dans un même plan. Deux vecteurs sont toujours coplanaires ; trois vecteurs ne le sont pas toujours. Dans le cube, AB⃗, AD⃗ et AE⃗ ne sont pas coplanaires : E n'est pas dans le plan de la face ABCD.",
                "Attention à la différence entre vecteurs et points : dans le cube, EG⃗ = AC⃗ = AB⃗ + AD⃗, donc AB⃗, AD⃗ et EG⃗ sont coplanaires, alors que les points E et G ne sont pas dans le plan (ABD). Des vecteurs coplanaires peuvent être « dessinés » n'importe où ; ce qui compte, c'est qu'on puisse les ramener à un même point dans un même plan.",
              ],
              box: { label: "Propriété", text: "Si u⃗ et v⃗ ne sont pas colinéaires, les vecteurs u⃗, v⃗, w⃗ sont coplanaires si et seulement s'il existe deux réels a et b tels que w⃗ = a u⃗ + b v⃗. Quatre points A, B, C, D sont coplanaires si et seulement si AB⃗, AC⃗, AD⃗ sont coplanaires." },
            },
            {
              heading: "Exploiter une figure",
              paragraphs: [
                "Pour exprimer un vecteur à l'aide de vecteurs donnés, on décompose avec la relation de Chasles en passant par des points bien connus, puis on remplace chaque morceau grâce aux égalités de la figure (faces parallélogrammes, milieux, centres de gravité). Le milieu I de [BC] vérifie par exemple AI⃗ = ½ AB⃗ + ½ AC⃗.",
                "Pour démontrer que des points sont alignés, on exprime deux vecteurs comme AB⃗ et AC⃗ à l'aide des mêmes vecteurs de référence, puis on cherche un réel k tel que AC⃗ = k AB⃗. Pour démontrer que quatre points sont coplanaires, on cherche à écrire l'un des vecteurs comme combinaison linéaire des deux autres.",
              ],
              box: { label: "À retenir", text: "Choisir trois vecteurs de référence non coplanaires (dans un cube : AB⃗, AD⃗, AE⃗), tout exprimer à l'aide de ces trois vecteurs, puis comparer les expressions obtenues." },
            },
          ],
          keyPoints: [
            "Les règles du plan restent valables : relation de Chasles, parallélogramme, multiplication par un réel.",
            "u⃗ et v⃗ colinéaires : v⃗ = k u⃗ pour un réel k, ou u⃗ = 0⃗. Le vecteur nul est colinéaire à tout vecteur.",
            "A, B, C alignés ⇔ AB⃗ et AC⃗ colinéaires ; (AB) // (CD) ⇔ AB⃗ et CD⃗ colinéaires.",
            "Un plan est déterminé par un point et deux vecteurs non colinéaires.",
            "Avec u⃗, v⃗ non colinéaires : u⃗, v⃗, w⃗ coplanaires ⇔ w⃗ = a u⃗ + b v⃗.",
            "Des vecteurs coplanaires ne sont pas forcément portés par des points d'un même plan.",
          ],
          example: {
            statement: "Dans le cube ABCDEFGH, on note I le centre de la face EFGH. Exprimer AI⃗ en fonction de AB⃗, AD⃗ et AE⃗, puis démontrer que les points A, C, I et E sont coplanaires.",
            solution: [
              "I est le centre du carré EFGH, donc le milieu de sa diagonale [EG] : EI⃗ = ½ EG⃗.",
              "ACGE est un rectangle (A et C sont en bas, E et G au-dessus), donc EG⃗ = AC⃗, et AC⃗ = AB⃗ + BC⃗ = AB⃗ + AD⃗.",
              "Par la relation de Chasles : AI⃗ = AE⃗ + EI⃗ = AE⃗ + ½ AC⃗.",
              "En remplaçant AC⃗ : AI⃗ = ½ AB⃗ + ½ AD⃗ + AE⃗.",
              "L'égalité AI⃗ = ½ AC⃗ + AE⃗ montre que AI⃗ est une combinaison linéaire de AC⃗ et AE⃗, qui ne sont pas colinéaires.",
              "Les vecteurs AC⃗, AE⃗, AI⃗ sont donc coplanaires : les points A, C, I, E sont coplanaires (I appartient au plan du rectangle ACGE).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "ABCD est un tétraèdre. Simplifier les vecteurs suivants : u⃗ = AB⃗ + BC⃗ + CD⃗, v⃗ = AD⃗ + DB⃗ - AC⃗ et w⃗ = BA⃗ + CD⃗ + AC⃗.",
              hint: "Utilisez la relation de Chasles, en remarquant que soustraire AC⃗ revient à ajouter CA⃗, et en réordonnant les termes pour enchaîner les lettres.",
              solution: [
                "u⃗ = (AB⃗ + BC⃗) + CD⃗ = AC⃗ + CD⃗ = AD⃗.",
                "v⃗ = (AD⃗ + DB⃗) - AC⃗ = AB⃗ + CA⃗ = CA⃗ + AB⃗ = CB⃗.",
                "w⃗ = BA⃗ + AC⃗ + CD⃗ (on réordonne la somme) = BC⃗ + CD⃗ = BD⃗.",
                "Résultat : u⃗ = AD⃗, v⃗ = CB⃗ et w⃗ = BD⃗.",
              ],
            },
            {
              level: 2,
              statement: "ABCD est un tétraèdre, I est le milieu de [BD] et G est le point défini par AG⃗ = ⅓ AB⃗ + ⅓ AC⃗ + ⅓ AD⃗. Exprimer CG⃗ et CI⃗ en fonction de AB⃗, AC⃗, AD⃗, puis démontrer que les points C, G et I sont alignés.",
              hint: "Écrivez CG⃗ = CA⃗ + AG⃗ et CI⃗ = CA⃗ + AI⃗, avec AI⃗ = ½ AB⃗ + ½ AD⃗ puisque I est le milieu de [BD].",
              solution: [
                "CG⃗ = CA⃗ + AG⃗ = -AC⃗ + ⅓ AB⃗ + ⅓ AC⃗ + ⅓ AD⃗ = ⅓ AB⃗ - ⅔ AC⃗ + ⅓ AD⃗.",
                "I est le milieu de [BD], donc AI⃗ = ½ AB⃗ + ½ AD⃗ et CI⃗ = CA⃗ + AI⃗ = ½ AB⃗ - AC⃗ + ½ AD⃗.",
                "On compare : ⅔ CI⃗ = ⅔ × ½ AB⃗ - ⅔ AC⃗ + ⅔ × ½ AD⃗ = ⅓ AB⃗ - ⅔ AC⃗ + ⅓ AD⃗ = CG⃗.",
                "Ainsi CG⃗ = ⅔ CI⃗ : les vecteurs CG⃗ et CI⃗ sont colinéaires.",
                "Conclusion : C, G et I sont alignés (G est le centre de gravité du triangle BCD, situé aux deux tiers de la médiane [CI] en partant de C).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. ABCDEFGH est un cube d'arête 1 (face ABCD en bas, E au-dessus de A, F au-dessus de B, G au-dessus de C, H au-dessus de D). On note I le milieu de [EH] et K le milieu de [BC]. 1. Exprimer AI⃗ et AK⃗ en fonction de AB⃗, AD⃗ et AE⃗. 2. Exprimer AG⃗ en fonction de AB⃗, AD⃗, AE⃗, puis en fonction de AI⃗ et AK⃗. 3. En déduire que les points A, K, G, I sont coplanaires et que AKGI est un parallélogramme. 4. Démontrer que AKGI est un losange.",
              hint: "Pour la question 3, l'égalité AG⃗ = AK⃗ + AI⃗ est la règle du parallélogramme. Pour la question 4, calculez AK et AI avec le théorème de Pythagore dans les triangles ABK et AEI.",
              solution: [
                "1. AI⃗ = AE⃗ + EI⃗ = AE⃗ + ½ EH⃗ = AE⃗ + ½ AD⃗ (car EH⃗ = AD⃗). AK⃗ = AB⃗ + BK⃗ = AB⃗ + ½ BC⃗ = AB⃗ + ½ AD⃗ (car BC⃗ = AD⃗).",
                "2. AG⃗ = AB⃗ + BC⃗ + CG⃗ = AB⃗ + AD⃗ + AE⃗. Or AK⃗ + AI⃗ = AB⃗ + ½ AD⃗ + ½ AD⃗ + AE⃗ = AB⃗ + AD⃗ + AE⃗. Donc AG⃗ = AK⃗ + AI⃗.",
                "3. AG⃗ est une combinaison linéaire de AK⃗ et AI⃗ (non colinéaires), donc A, K, G, I sont coplanaires. De plus AG⃗ = AK⃗ + AI⃗ est la règle du parallélogramme : AKGI est un parallélogramme (on vérifie aussi IG⃗ = AG⃗ - AI⃗ = AK⃗).",
                "4. Le triangle ABK est rectangle en B : AK² = AB² + BK² = 1 + ¼ = 5/4.",
                "Le triangle AEI est rectangle en E : AI² = AE² + EI² = 1 + ¼ = 5/4.",
                "Donc AK = AI = √5/2 : le parallélogramme AKGI a deux côtés consécutifs de même longueur, c'est un losange.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : colinéarité et coplanarité dans l'espace.",
            statements: [
              { text: "Deux vecteurs quelconques de l'espace sont toujours coplanaires.", true: true, why: "En les représentant à partir d'un même point A, on obtient trois points A, B, C, qui sont toujours dans un même plan." },
              { text: "Trois vecteurs quelconques de l'espace sont toujours coplanaires.", true: false, why: "Dans un cube, AB⃗, AD⃗ et AE⃗ ne sont pas coplanaires : E n'est pas dans le plan (ABD)." },
              { text: "Si w⃗ = 2u⃗ - 3v⃗, alors u⃗, v⃗ et w⃗ sont coplanaires.", true: true, why: "w⃗ est une combinaison linéaire de u⃗ et v⃗, c'est exactement la caractérisation de la coplanarité." },
              { text: "Le vecteur nul est colinéaire à tout vecteur.", true: true, why: "0⃗ = 0 × u⃗ pour tout vecteur u⃗." },
              { text: "Deux droites de l'espace qui n'ont aucun point commun sont parallèles.", true: false, why: "Elles peuvent être non coplanaires, comme (AB) et (CG) dans un cube." },
              { text: "Dans le cube ABCDEFGH, AB⃗, AD⃗ et EG⃗ ne sont pas coplanaires, puisque E et G ne sont pas dans le plan (ABD).", true: false, why: "EG⃗ = AC⃗ = AB⃗ + AD⃗ : ces trois vecteurs sont coplanaires, même si E et G sont hors du plan (ABD)." },
              { text: "Si AB⃗, AC⃗ et AD⃗ sont coplanaires, alors les points A, B, C, D sont coplanaires.", true: true, why: "Les trois vecteurs ont la même origine A : c'est la définition même de la coplanarité de quatre points." },
            ],
          },
          quiz: [
            {
              q: "Dans le cube ABCDEFGH, le vecteur AB⃗ + AD⃗ + AE⃗ est égal à :",
              options: ["AC⃗", "AG⃗", "AH⃗", "AF⃗"],
              answer: 1,
              why: "AB⃗ + AD⃗ = AC⃗, puis AC⃗ + AE⃗ = AC⃗ + CG⃗ = AG⃗.",
            },
            {
              q: "Dans un tétraèdre ABCD, le vecteur AB⃗ - AC⃗ est égal à :",
              options: ["BC⃗", "DA⃗", "CB⃗"],
              answer: 2,
              why: "AB⃗ - AC⃗ = AB⃗ + CA⃗ = CA⃗ + AB⃗ = CB⃗.",
            },
            {
              q: "Les points A, B, C sont alignés si et seulement si :",
              options: ["AB⃗ et AC⃗ sont colinéaires", "AB⃗ et AC⃗ ont la même norme", "AB⃗ + AC⃗ = 0⃗", "AB⃗, AC⃗ et BC⃗ sont coplanaires"],
              answer: 0,
              why: "L'alignement se traduit par la colinéarité. Trois vecteurs comme AB⃗, AC⃗, BC⃗ sont toujours coplanaires, cela ne prouve rien.",
            },
            {
              q: "u⃗ et v⃗ ne sont pas colinéaires. Les vecteurs u⃗, v⃗, w⃗ sont coplanaires si et seulement si :",
              options: ["w⃗ est colinéaire à u⃗", "w⃗ est le vecteur nul", "u⃗ + v⃗ + w⃗ = 0⃗", "w⃗ = a u⃗ + b v⃗ pour deux réels a, b"],
              answer: 3,
              why: "C'est la caractérisation de la coplanarité. Les autres conditions sont des cas particuliers, suffisants mais pas nécessaires.",
            },
            {
              q: "Dans le cube ABCDEFGH, les droites (AB) et (CG) sont :",
              options: ["parallèles", "sécantes en un point", "non coplanaires", "confondues"],
              answer: 2,
              why: "Elles n'ont aucun point commun et leurs vecteurs directeurs AB⃗ et CG⃗ ne sont pas colinéaires : aucun plan ne les contient toutes les deux.",
            },
          ],
          trap: "Confondre la coplanarité de vecteurs et celle de points : AB⃗, AD⃗ et EG⃗ sont coplanaires dans un cube alors que E et G ne sont pas dans le plan (ABD). Autre piège : croire que deux droites sans point commun sont forcément parallèles.",
          method: "Avant tout calcul, choisissez trois vecteurs de référence non coplanaires issus d'un même sommet (AB⃗, AD⃗, AE⃗ dans un cube) et exprimez chaque vecteur utile avec eux par la relation de Chasles : les comparaisons deviennent alors mécaniques.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'bases-et-reperes',
          title: "Bases et repères de l'espace",
          minutes: 30,
          objectives: [
            "Reconnaître trois vecteurs formant une base de l'espace et décomposer un vecteur dans cette base.",
            "Calculer dans un repère les coordonnées d'un vecteur, d'un milieu ou d'un point défini par une relation vectorielle.",
            "Démontrer un alignement ou une coplanarité à l'aide des coordonnées.",
            "Calculer une norme ou une distance dans un repère orthonormé.",
          ],
          course: [
            {
              heading: "Base de l'espace",
              paragraphs: [
                "Dans le plan, deux vecteurs non colinéaires forment une base : tout vecteur s'écrit de façon unique comme combinaison linéaire de ces deux vecteurs. Dans l'espace, il faut un vecteur de plus. Trois vecteurs i⃗, j⃗, k⃗ non coplanaires forment une base de l'espace : tout vecteur u⃗ s'écrit d'une unique façon u⃗ = x i⃗ + y j⃗ + z k⃗.",
                "Les réels x, y, z sont les coordonnées de u⃗ dans la base (i⃗, j⃗, k⃗) ; on note u⃗(x ; y ; z). L'unicité est essentielle : deux vecteurs sont égaux si et seulement s'ils ont les mêmes coordonnées. C'est elle qui permet d'« identifier » les coefficients et de transformer une égalité de vecteurs en trois égalités de nombres.",
              ],
              box: { label: "Propriété", text: "Si i⃗, j⃗, k⃗ ne sont pas coplanaires, pour tout vecteur u⃗ il existe un unique triplet de réels (x ; y ; z) tel que u⃗ = x i⃗ + y j⃗ + z k⃗. On dit que (i⃗, j⃗, k⃗) est une base de l'espace." },
            },
            {
              heading: "Repère de l'espace",
              paragraphs: [
                "Un repère de l'espace est formé d'un point O, l'origine, et d'une base (i⃗, j⃗, k⃗) : on le note (O ; i⃗, j⃗, k⃗). Les coordonnées d'un point M sont celles du vecteur OM⃗ : M(x ; y ; z) signifie OM⃗ = x i⃗ + y j⃗ + z k⃗. On parle d'abscisse, d'ordonnée et de cote.",
                "Dans le cube ABCDEFGH, (A ; AB⃗, AD⃗, AE⃗) est un repère : A(0 ; 0 ; 0), B(1 ; 0 ; 0), D(0 ; 1 ; 0), E(0 ; 0 ; 1), C(1 ; 1 ; 0) et G(1 ; 1 ; 1). Le repère est dit orthonormé lorsque les trois vecteurs de base sont deux à deux orthogonaux et de norme 1 : c'est le cas ici si le cube a pour arête 1.",
              ],
            },
            {
              heading: "Calculer avec les coordonnées",
              paragraphs: [
                "Les règles sont celles du plan, avec une troisième coordonnée. Si A(xA ; yA ; zA) et B(xB ; yB ; zB), alors AB⃗(xB - xA ; yB - yA ; zB - zA) et le milieu de [AB] a pour coordonnées ((xA + xB)/2 ; (yA + yB)/2 ; (zA + zB)/2). La somme de deux vecteurs et le produit par un réel se calculent coordonnée par coordonnée.",
                "Dans un repère orthonormé seulement, la norme de u⃗(x ; y ; z) est ‖u⃗‖ = √(x² + y² + z²), et la distance AB est la norme de AB⃗. Cette formule vient du théorème de Pythagore appliqué deux fois : une fois dans le plan horizontal, une fois dans le plan vertical. Par exemple, la diagonale d'un cube d'arête 1 mesure √(1 + 1 + 1) = √3.",
              ],
              box: { label: "Formule", text: "AB⃗(xB - xA ; yB - yA ; zB - zA). Milieu de [AB] : ((xA + xB)/2 ; (yA + yB)/2 ; (zA + zB)/2). En repère orthonormé : AB = √((xB - xA)² + (yB - yA)² + (zB - zA)²)." },
            },
            {
              heading: "Colinéarité et coplanarité en coordonnées",
              paragraphs: [
                "Deux vecteurs non nuls sont colinéaires si et seulement si leurs coordonnées sont proportionnelles. En pratique, on cherche le réel k avec une coordonnée non nulle, puis on vérifie qu'il convient pour les deux autres. Exemple : u⃗(2 ; -1 ; 4) et v⃗(-6 ; 3 ; -12) vérifient v⃗ = -3u⃗ sur les trois coordonnées : ils sont colinéaires.",
                "Pour savoir si w⃗ est combinaison linéaire de u⃗ et v⃗ (non colinéaires), on écrit w⃗ = a u⃗ + b v⃗ coordonnée par coordonnée : on obtient un système de trois équations à deux inconnues. On résout avec deux équations, puis on teste la troisième. Si elle est vérifiée, les trois vecteurs sont coplanaires ; sinon, ils ne le sont pas et forment une base.",
              ],
              box: { label: "À retenir", text: "Trois équations, deux inconnues : on résout avec deux équations et on vérifie toujours la troisième. C'est elle qui décide." },
            },
          ],
          keyPoints: [
            "Trois vecteurs non coplanaires forment une base : décomposition unique u⃗ = x i⃗ + y j⃗ + z k⃗.",
            "Un repère (O ; i⃗, j⃗, k⃗) : les coordonnées de M sont celles de OM⃗.",
            "AB⃗(xB - xA ; yB - yA ; zB - zA) ; milieu : moyenne des coordonnées.",
            "‖u⃗‖ = √(x² + y² + z²) uniquement dans un repère orthonormé.",
            "Colinéarité : coordonnées proportionnelles, vérifiées sur les trois coordonnées.",
            "Coplanarité : système de trois équations à deux inconnues, la troisième équation sert de test.",
          ],
          example: {
            statement: "Dans un repère de l'espace, on donne A(1 ; 0 ; 2), B(3 ; 1 ; 0), C(0 ; 2 ; 1) et D(1 ; 5 ; -2). Démontrer que les points A, B, C, D sont coplanaires.",
            solution: [
              "AB⃗(2 ; 1 ; -2), AC⃗(-1 ; 2 ; -1) et AD⃗(0 ; 5 ; -4).",
              "AB⃗ et AC⃗ ne sont pas colinéaires : pour passer de la première coordonnée de AB⃗ à celle de AC⃗ il faudrait k = -½, mais 1 × (-½) ≠ 2.",
              "On cherche a et b tels que AD⃗ = a AB⃗ + b AC⃗, c'est-à-dire 2a - b = 0, a + 2b = 5 et -2a - b = -4.",
              "La première équation donne b = 2a ; la deuxième donne alors a + 4a = 5, soit a = 1 et b = 2.",
              "Vérification dans la troisième : -2 × 1 - 2 = -4. Elle est satisfaite.",
              "Donc AD⃗ = AB⃗ + 2AC⃗ : les vecteurs sont coplanaires et les points A, B, C, D sont coplanaires.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, on donne A(2 ; -1 ; 3) et B(4 ; 3 ; -1). Calculer les coordonnées de AB⃗, celles du milieu I de [AB] et la longueur AB.",
              hint: "Coordonnées de AB⃗ : « extrémité moins origine ». Le milieu est la moyenne des coordonnées.",
              solution: [
                "AB⃗(4 - 2 ; 3 - (-1) ; -1 - 3), soit AB⃗(2 ; 4 ; -4).",
                "I((2 + 4)/2 ; (-1 + 3)/2 ; (3 + (-1))/2), soit I(3 ; 1 ; 1).",
                "Le repère est orthonormé : AB = √(2² + 4² + (-4)²) = √(4 + 16 + 16) = √36 = 6.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère de l'espace, on donne A(1 ; 2 ; -1), B(3 ; 5 ; 0), C(7 ; 11 ; 2) et D(0 ; 1 ; 4). 1. Les points A, B, C sont-ils alignés ? 2. Le point D appartient-il à la droite (AB) ?",
              hint: "Calculez AB⃗, AC⃗ et AD⃗, puis cherchez un réel k avec la première coordonnée et testez-le sur les deux autres.",
              solution: [
                "AB⃗(2 ; 3 ; 1), AC⃗(6 ; 9 ; 3) et AD⃗(-1 ; -1 ; 5).",
                "1. 6 = 3 × 2, 9 = 3 × 3 et 3 = 3 × 1 : AC⃗ = 3AB⃗. Les vecteurs sont colinéaires, donc A, B, C sont alignés.",
                "2. Pour AD⃗ = k AB⃗, la première coordonnée impose -1 = 2k, soit k = -½. Mais alors 3k = -3/2 ≠ -1.",
                "AD⃗ et AB⃗ ne sont pas colinéaires : D n'appartient pas à la droite (AB).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un repère de l'espace, on considère les vecteurs u⃗(1 ; 0 ; 2), v⃗(0 ; 1 ; -1) et w⃗(1 ; 1 ; 0). 1. Démontrer que u⃗ et v⃗ ne sont pas colinéaires. 2. Démontrer que (u⃗, v⃗, w⃗) est une base de l'espace. 3. Déterminer les coordonnées du vecteur t⃗(3 ; 2 ; 3) dans cette base.",
              hint: "Pour la question 2, montrez qu'il n'existe pas de réels a, b tels que w⃗ = a u⃗ + b v⃗. Pour la question 3, posez t⃗ = α u⃗ + β v⃗ + γ w⃗ et résolvez le système de trois équations.",
              solution: [
                "1. La deuxième coordonnée de u⃗ est nulle et celle de v⃗ ne l'est pas, alors que la première de v⃗ est nulle et celle de u⃗ ne l'est pas : aucun réel k ne donne v⃗ = k u⃗. Ils ne sont pas colinéaires.",
                "2. Supposons w⃗ = a u⃗ + b v⃗ : sur x, a = 1 ; sur y, b = 1 ; sur z, 2a - b = 0, soit 2 - 1 = 0, ce qui est faux. Donc u⃗, v⃗, w⃗ ne sont pas coplanaires : ils forment une base.",
                "3. t⃗ = α u⃗ + β v⃗ + γ w⃗ donne le système : α + γ = 3, β + γ = 2, 2α - β = 3.",
                "On exprime α = 3 - γ et β = 2 - γ, puis 2(3 - γ) - (2 - γ) = 3, soit 4 - γ = 3, donc γ = 1, α = 2 et β = 1.",
                "Vérification : 2u⃗ + v⃗ + w⃗ = (2 + 0 + 1 ; 0 + 1 + 1 ; 4 - 1 + 0) = (3 ; 2 ; 3).",
                "Dans la base (u⃗, v⃗, w⃗), t⃗ a pour coordonnées (2 ; 1 ; 1).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa formule ou à sa définition.",
            pairs: [
              { left: "Coordonnées de AB⃗", right: "(xB - xA ; yB - yA ; zB - zA)" },
              { left: "Milieu de [AB]", right: "((xA + xB)/2 ; (yA + yB)/2 ; (zA + zB)/2)" },
              { left: "Norme de u⃗(x ; y ; z), repère orthonormé", right: "√(x² + y² + z²)" },
              { left: "Base de l'espace", right: "Trois vecteurs non coplanaires" },
              { left: "Repère de l'espace", right: "Un point origine et une base" },
              { left: "Vecteurs colinéaires non nuls", right: "Coordonnées proportionnelles" },
            ],
          },
          quiz: [
            {
              q: "Avec A(1 ; 2 ; 3) et B(4 ; 0 ; 5), les coordonnées de AB⃗ sont :",
              options: ["(-3 ; 2 ; -2)", "(5 ; 2 ; 8)", "(3 ; -2 ; 2)", "(2,5 ; 1 ; 4)"],
              answer: 2,
              why: "On calcule « extrémité moins origine » : (4 - 1 ; 0 - 2 ; 5 - 3).",
            },
            {
              q: "Dans un repère orthonormé, la norme de u⃗(2 ; -1 ; 2) vaut :",
              options: ["3", "√3", "5", "9"],
              answer: 0,
              why: "‖u⃗‖ = √(4 + 1 + 4) = √9 = 3.",
            },
            {
              q: "u⃗(2 ; -4 ; 6) et v⃗(-1 ; 2 ; m) sont colinéaires pour :",
              options: ["m = 3", "m = -3", "m = 12", "aucune valeur de m"],
              answer: 1,
              why: "Les deux premières coordonnées donnent v⃗ = -½ u⃗, donc m = -½ × 6 = -3.",
            },
            {
              q: "Le milieu de [AB] avec A(2 ; 0 ; -4) et B(0 ; 6 ; 2) est :",
              options: ["(2 ; 6 ; -2)", "(-1 ; 3 ; 3)", "(1 ; 3 ; 3)", "(1 ; 3 ; -1)"],
              answer: 3,
              why: "On fait la moyenne de chaque coordonnée : (2 + 0)/2 = 1, (0 + 6)/2 = 3, (-4 + 2)/2 = -1.",
            },
            {
              q: "Trois vecteurs forment une base de l'espace lorsqu'ils sont :",
              options: ["non nuls et deux à deux distincts", "deux à deux non colinéaires", "non coplanaires"],
              answer: 2,
              why: "Deux à deux non colinéaires ne suffit pas : i⃗, j⃗ et i⃗ + j⃗ sont deux à deux non colinéaires mais coplanaires.",
            },
          ],
          trap: "Utiliser la formule √(x² + y² + z²) dans un repère qui n'est pas orthonormé, ou conclure à la colinéarité (ou à la coplanarité) en ne vérifiant que deux coordonnées sur trois.",
          method: "Dans un système de trois équations à deux inconnues, résolvez avec les deux équations les plus simples, puis écrivez explicitement le test de la troisième : c'est cette ligne de vérification que le correcteur attend.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'positions-relatives',
          title: 'Positions relatives de droites et de plans',
          minutes: 35,
          objectives: [
            "Décrire la position relative de deux droites, d'une droite et d'un plan, de deux plans.",
            "Caractériser ces positions relatives à l'aide de vecteurs directeurs.",
            "Utiliser le théorème du toit pour déterminer l'intersection de deux plans.",
          ],
          course: [
            {
              heading: "Deux droites de l'espace",
              paragraphs: [
                "Deux droites de l'espace sont soit coplanaires, soit non coplanaires. Coplanaires, elles sont sécantes (un seul point commun) ou parallèles (strictement parallèles ou confondues), comme dans le plan. Non coplanaires, elles n'ont aucun point commun et ne sont pas parallèles : aucun plan ne les contient toutes les deux. Dans le cube ABCDEFGH, (AB) et (HG) sont parallèles, (AC) et (BD) sont sécantes, (AB) et (CG) sont non coplanaires.",
                "Avec les vecteurs : si d passe par A et est dirigée par u⃗, et d' passe par B et est dirigée par v⃗, alors d et d' sont parallèles si et seulement si u⃗ et v⃗ sont colinéaires. Si elles ne sont pas parallèles, elles sont sécantes ou non coplanaires : c'est la recherche d'un point commun qui tranche.",
              ],
              box: { label: "À retenir", text: "Deux droites sans point commun ne sont pas forcément parallèles : dans l'espace, elles peuvent être non coplanaires." },
            },
            {
              heading: "Une droite et un plan",
              paragraphs: [
                "Une droite d et un plan P sont soit sécants (un seul point commun), soit parallèles. Dans le second cas, d est contenue dans P ou strictement parallèle à P (aucun point commun). Exemple dans le cube : la droite (EG) est strictement parallèle au plan (ABC) de la face du bas, tandis que la droite (AG) coupe ce plan en A.",
                "Si d est dirigée par u⃗ et P est dirigé par deux vecteurs non colinéaires v⃗ et w⃗, alors d est parallèle à P si et seulement si u⃗, v⃗, w⃗ sont coplanaires. Une droite est parallèle à un plan dès qu'elle est parallèle à une droite de ce plan.",
              ],
              box: { label: "Propriété", text: "d (dirigée par u⃗) est parallèle au plan P (dirigé par v⃗ et w⃗ non colinéaires) si et seulement si u⃗, v⃗, w⃗ sont coplanaires. Sinon, d et P sont sécants en un point." },
            },
            {
              heading: "Deux plans",
              paragraphs: [
                "Deux plans sont soit parallèles (strictement ou confondus), soit sécants : leur intersection est alors une droite. Deux plans sont parallèles si et seulement si deux vecteurs non colinéaires de l'un sont aussi des vecteurs directeurs de l'autre ; il suffit que deux droites sécantes de l'un soient parallèles à l'autre.",
                "Une propriété très utile pour les sections de solides : si un plan coupe deux plans parallèles, les deux droites d'intersection sont parallèles. C'est pourquoi la section d'un cube par un plan a des côtés parallèles sur les faces opposées du cube.",
              ],
            },
            {
              heading: "Le théorème du toit",
              paragraphs: [
                "Imaginez le toit d'une maison : deux pans qui se rencontrent selon la ligne de faîte. Si chaque pan contient une droite et que ces deux droites sont parallèles (par exemple les deux gouttières), alors la ligne de faîte est parallèle aux gouttières.",
                "En pratique, pour trouver l'intersection de deux plans sécants, on cherche un point commun, puis la direction de la droite d'intersection. Si l'on repère dans chacun des plans une droite, ces deux droites étant parallèles, le théorème du toit donne directement cette direction.",
              ],
              box: { label: "Théorème", text: "Théorème du toit : soit d₁ et d₂ deux droites parallèles, d₁ contenue dans un plan P₁ et d₂ dans un plan P₂. Si P₁ et P₂ sont sécants, leur droite d'intersection Δ est parallèle à d₁ et à d₂." },
            },
          ],
          keyPoints: [
            "Deux droites : sécantes, parallèles (coplanaires) ou non coplanaires.",
            "Droites parallèles ⇔ vecteurs directeurs colinéaires.",
            "Droite et plan : sécants en un point, ou parallèles (droite contenue ou strictement parallèle).",
            "Deux plans : parallèles (strictement ou confondus) ou sécants selon une droite.",
            "Un plan qui coupe deux plans parallèles les coupe selon deux droites parallèles.",
            "Théorème du toit : deux plans sécants contenant deux droites parallèles se coupent selon une droite parallèle à ces droites.",
          ],
          example: {
            statement: "ABCD est un tétraèdre, I est le milieu de [AB] et J le milieu de [AC]. Déterminer l'intersection des plans (DIJ) et (DBC).",
            solution: [
              "Le point D appartient aux deux plans. Ces plans sont distincts (I n'est pas dans le plan (DBC)), donc ils sont sécants selon une droite Δ passant par D.",
              "Dans le triangle ABC, I et J sont les milieux de [AB] et [AC] : d'après le théorème des milieux, (IJ) est parallèle à (BC).",
              "La droite (IJ) est contenue dans le plan (DIJ) et la droite (BC) est contenue dans le plan (DBC).",
              "D'après le théorème du toit, Δ est parallèle à (IJ) et à (BC).",
              "Conclusion : l'intersection des plans (DIJ) et (DBC) est la droite passant par D et parallèle à (BC).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le cube ABCDEFGH (face ABCD en bas, E au-dessus de A, F au-dessus de B, G au-dessus de C, H au-dessus de D), donner la position relative de : 1. (AB) et (HG) ; 2. (AC) et (BD) ; 3. (AB) et (CG) ; 4. les plans (ABC) et (EFG) ; 5. la droite (EG) et le plan (ABC).",
              hint: "Utilisez les faces du cube : des arêtes opposées d'une face sont parallèles, les diagonales d'un carré se coupent, et les faces du haut et du bas sont parallèles.",
              solution: [
                "1. AB⃗ = DC⃗ = HG⃗ : les droites (AB) et (HG) sont parallèles (strictement, puisque ABGH est un rectangle non aplati).",
                "2. (AC) et (BD) sont les diagonales du carré ABCD : elles sont sécantes en son centre.",
                "3. (AB) et (CG) n'ont aucun point commun et AB⃗, CG⃗ ne sont pas colinéaires : elles sont non coplanaires.",
                "4. Les plans (ABC) et (EFG) sont ceux des faces du bas et du haut : ils sont strictement parallèles.",
                "5. (EG) est parallèle à (AC), qui est contenue dans (ABC), et E n'est pas dans (ABC) : (EG) est strictement parallèle au plan (ABC).",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère de l'espace, la droite d passe par A(1 ; 2 ; 0) et a pour vecteur directeur u⃗(1 ; 0 ; -1). Le plan P passe par l'origine O et est dirigé par v⃗(1 ; 1 ; 0) et w⃗(0 ; 1 ; 1). 1. Démontrer que d est parallèle à P. 2. La droite d est-elle contenue dans P ?",
              hint: "Cherchez a et b tels que u⃗ = a v⃗ + b w⃗. Pour la question 2, demandez-vous si A appartient à P, c'est-à-dire si OA⃗ est combinaison linéaire de v⃗ et w⃗.",
              solution: [
                "1. v⃗ et w⃗ ne sont pas colinéaires (première coordonnée nulle pour w⃗ seulement). On cherche u⃗ = a v⃗ + b w⃗ : sur x, a = 1 ; sur z, b = -1 ; test sur y : a + b = 0, ce qui est bien la deuxième coordonnée de u⃗.",
                "Donc u⃗ = v⃗ - w⃗ : u⃗, v⃗, w⃗ sont coplanaires et d est parallèle à P.",
                "2. A appartient à P si et seulement s'il existe a, b tels que OA⃗ = a v⃗ + b w⃗, soit (1 ; 2 ; 0) = (a ; a + b ; b).",
                "On obtient a = 1 et b = 0, mais alors a + b = 1 ≠ 2 : A n'appartient pas à P.",
                "Conclusion : d est strictement parallèle au plan P.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. SABCD est une pyramide de sommet S dont la base ABCD est un parallélogramme. On note I le milieu de [SA] et J le milieu de [SB]. 1. Déterminer l'intersection des plans (SAB) et (SCD). 2. Démontrer que (IJ) est parallèle à (CD). 3. En déduire que les points I, J, C, D sont coplanaires, puis préciser la nature du quadrilatère IJCD, section de la pyramide par le plan (IJC).",
              hint: "Pour la question 1, le point S est commun aux deux plans et (AB) // (CD) : pensez au théorème du toit. Pour la question 3, deux droites parallèles sont coplanaires.",
              solution: [
                "1. S appartient aux plans (SAB) et (SCD), qui sont distincts : ils sont sécants selon une droite Δ passant par S. Comme ABCD est un parallélogramme, (AB) // (CD), avec (AB) dans (SAB) et (CD) dans (SCD).",
                "Par le théorème du toit, Δ est la droite passant par S et parallèle à (AB).",
                "2. Dans le triangle SAB, I et J sont les milieux de [SA] et [SB] : (IJ) // (AB) et IJ = ½ AB. Comme (AB) // (CD), on obtient (IJ) // (CD).",
                "3. Deux droites parallèles sont coplanaires : I, J, C, D sont dans un même plan, qui est le plan (IJC). Ce plan coupe la pyramide selon le quadrilatère IJCD.",
                "IJCD a deux côtés opposés parallèles, (IJ) et (CD), de longueurs IJ = ½ AB et CD = AB, donc différentes : c'est un trapèze, de bases [IJ] et [CD], avec IJ = ½ CD.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démonstration : intersection des plans (ABG) et (DCE) dans le cube ABCDEFGH.",
            items: [
              "Comme AB⃗ = HG⃗, le plan (ABG) contient H : c'est le plan du rectangle ABGH.",
              "Comme DC⃗ = EF⃗, le plan (DCE) contient F : c'est le plan du rectangle DCFE.",
              "Le centre O du cube, milieu de [AG] et de [CE], appartient aux deux plans.",
              "Les deux plans sont distincts, donc sécants selon une droite passant par O.",
              "(AB) est contenue dans (ABG), (DC) est contenue dans (DCE), et (AB) // (DC).",
              "Par le théorème du toit, l'intersection est la parallèle à (AB) passant par O.",
            ],
          },
          quiz: [
            {
              q: "Deux droites de l'espace sans point commun sont :",
              options: ["forcément parallèles", "parallèles ou non coplanaires", "forcément non coplanaires", "forcément orthogonales"],
              answer: 1,
              why: "Sans point commun, elles sont strictement parallèles si elles sont coplanaires, non coplanaires sinon.",
            },
            {
              q: "L'intersection de deux plans sécants est :",
              options: ["un point", "une droite", "un segment", "vide"],
              answer: 1,
              why: "Deux plans distincts non parallèles se coupent toujours selon une droite.",
            },
            {
              q: "Un plan coupe deux plans parallèles. Les deux droites d'intersection sont :",
              options: ["parallèles", "sécantes", "non coplanaires"],
              answer: 0,
              why: "C'est une propriété du cours, qui explique que les côtés d'une section situés sur deux faces opposées d'un cube sont parallèles.",
            },
            {
              q: "La droite d est dirigée par u⃗, le plan P par v⃗ et w⃗ non colinéaires. Si u⃗ = 2v⃗ - w⃗, alors :",
              options: ["d et P sont sécants en un point", "d est orthogonale à P", "d est contenue dans P dans tous les cas", "d est parallèle à P"],
              answer: 3,
              why: "u⃗, v⃗, w⃗ sont coplanaires, donc d est parallèle à P : contenue dans P ou strictement parallèle, selon qu'un de ses points est dans P ou non.",
            },
            {
              q: "Le théorème du toit permet de déterminer :",
              options: ["la direction de l'intersection de deux plans sécants", "la longueur d'une arête", "le point d'intersection de deux droites", "l'aire d'une section"],
              answer: 0,
              why: "Il affirme que la droite d'intersection est parallèle aux deux droites parallèles contenues dans chacun des plans.",
            },
          ],
          trap: "Appliquer le théorème du toit sans avoir vérifié que les deux plans sont sécants, ou affirmer que deux droites sans point commun sont parallèles alors qu'elles peuvent être non coplanaires.",
          method: "Pour l'intersection de deux plans, procédez toujours en deux temps : trouver un point commun (souvent un sommet), puis la direction (point commun supplémentaire ou théorème du toit). Faites un schéma en perspective et repassez en couleur les droites utilisées.",
        },
      ],
    },
    /* ==================================================================== */
    /* ORTHOGONALITÉ, DISTANCES ET ÉQUATIONS DANS L'ESPACE                    */
    /* ==================================================================== */
    {
      id: 'espace-orthogonalite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'produit-scalaire-espace',
          title: 'Produit scalaire, orthogonalité et projeté orthogonal',
          minutes: 35,
          objectives: [
            "Calculer un produit scalaire dans l'espace par décomposition ou à l'aide des coordonnées dans une base orthonormée.",
            "Démontrer l'orthogonalité de deux vecteurs, de deux droites, d'une droite et d'un plan.",
            "Déterminer le projeté orthogonal d'un point sur une droite ou sur un plan et en déduire une distance.",
          ],
          course: [
            {
              heading: "Le produit scalaire dans l'espace",
              paragraphs: [
                "Deux vecteurs u⃗ et v⃗ de l'espace sont toujours coplanaires : en les représentant à partir d'un même point, on se ramène à un plan, où l'on sait déjà calculer leur produit scalaire. On définit donc u⃗·v⃗ comme en Première : u⃗·v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(θ), où θ est l'angle géométrique formé par les deux vecteurs (non nuls), et u⃗·v⃗ = 0 si l'un des deux est nul.",
                "Les propriétés sont inchangées : le produit scalaire est symétrique (u⃗·v⃗ = v⃗·u⃗), il se développe comme un produit (u⃗·(v⃗ + w⃗) = u⃗·v⃗ + u⃗·w⃗, (k u⃗)·v⃗ = k(u⃗·v⃗)), et u⃗·u⃗ = ‖u⃗‖². On dispose aussi de la formule de polarisation u⃗·v⃗ = ½(‖u⃗ + v⃗‖² - ‖u⃗‖² - ‖v⃗‖²).",
                "Dans une base orthonormée (i⃗, j⃗, k⃗), comme i⃗·i⃗ = j⃗·j⃗ = k⃗·k⃗ = 1 et que les produits croisés sont nuls, le développement donne une formule très simple, qui est l'outil principal des exercices en coordonnées.",
              ],
              box: { label: "Formule", text: "Dans une base orthonormée, si u⃗(x ; y ; z) et v⃗(x' ; y' ; z'), alors u⃗·v⃗ = xx' + yy' + zz' et ‖u⃗‖² = x² + y² + z²." },
            },
            {
              heading: "Orthogonalité de vecteurs et de droites",
              paragraphs: [
                "Deux vecteurs u⃗ et v⃗ sont orthogonaux si et seulement si u⃗·v⃗ = 0. Deux droites sont orthogonales lorsque leurs vecteurs directeurs sont orthogonaux. Attention au vocabulaire : deux droites orthogonales ne sont pas forcément sécantes. Dans le cube ABCDEFGH, (AB) et (CG) sont orthogonales mais non coplanaires. On réserve le mot « perpendiculaires » à deux droites orthogonales et sécantes.",
                "Exemple : dans un cube d'arête 1 muni du repère orthonormé (A ; AB⃗, AD⃗, AE⃗), on a AG⃗(1 ; 1 ; 1) et BD⃗(-1 ; 1 ; 0), donc AG⃗·BD⃗ = -1 + 1 + 0 = 0 : la grande diagonale (AG) est orthogonale à la diagonale (BD) de la face du bas, sans la couper.",
              ],
            },
            {
              heading: "Droite orthogonale à un plan",
              paragraphs: [
                "Une droite d est orthogonale à un plan P si elle est orthogonale à toutes les droites de P. Il suffit pour cela qu'elle soit orthogonale à deux droites sécantes de P : si n⃗ est orthogonal à deux vecteurs directeurs non colinéaires u⃗ et v⃗ de P, alors il est orthogonal à toute combinaison a u⃗ + b v⃗, donc à tout vecteur du plan.",
                "Dans le cube précédent, BE⃗(-1 ; 0 ; 1) et AG⃗·BE⃗ = -1 + 0 + 1 = 0. La droite (AG) est donc orthogonale à (BD) et à (BE), deux droites sécantes du plan (BDE) : (AG) est orthogonale au plan (BDE).",
              ],
              box: { label: "Propriété", text: "Une droite est orthogonale à un plan si et seulement si elle est orthogonale à deux droites sécantes de ce plan. Orthogonale à deux droites parallèles du plan ne suffit pas." },
            },
            {
              heading: "Projeté orthogonal et distance",
              paragraphs: [
                "Le projeté orthogonal d'un point M sur un plan P est le point H de P tel que la droite (MH) soit orthogonale à P (si M est dans P, H = M). De même, le projeté orthogonal de M sur une droite d est le point H de d tel que MH⃗ soit orthogonal à un vecteur directeur de d. C'est l'« ombre » de M sous une lumière qui tombe perpendiculairement.",
                "H est le point de P le plus proche de M. En effet, pour tout point N de P, le triangle MHN est rectangle en H, donc MN² = MH² + HN² ≥ MH². La distance du point M au plan P (ou à la droite d) est la longueur MH.",
                "Pour trouver le projeté H de M sur une droite (AB), on écrit que H est sur la droite (AH⃗ = t AB⃗) et que MH⃗·AB⃗ = 0 : on obtient une équation d'inconnue t.",
              ],
              box: { label: "À retenir", text: "Projeté orthogonal H de M sur P : H ∈ P et (MH) orthogonale à P. Distance de M à P : MH, plus petite des distances MN pour N dans P." },
            },
          ],
          keyPoints: [
            "Dans une base orthonormée : u⃗·v⃗ = xx' + yy' + zz' et ‖u⃗‖² = x² + y² + z².",
            "u⃗ et v⃗ orthogonaux ⇔ u⃗·v⃗ = 0.",
            "Deux droites orthogonales ne sont pas forcément sécantes ; perpendiculaires signifie orthogonales et sécantes.",
            "Une droite est orthogonale à un plan dès qu'elle est orthogonale à deux droites sécantes de ce plan.",
            "Le projeté orthogonal H de M sur un plan ou une droite réalise la distance minimale : la distance cherchée est MH.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(2 ; 1 ; -1), B(3 ; 1 ; 0), C(3 ; 2 ; -1) et D(1 ; 2 ; 0). 1. Calculer AB⃗·AC⃗ et en déduire la mesure de l'angle BAC. 2. Démontrer que la droite (AD) est orthogonale au plan (ABC). 3. En déduire la distance du point D au plan (ABC).",
            solution: [
              "1. AB⃗(1 ; 0 ; 1) et AC⃗(1 ; 1 ; 0), donc AB⃗·AC⃗ = 1 × 1 + 0 × 1 + 1 × 0 = 1.",
              "AB = √2 et AC = √2, donc cos(BAC) = 1/(√2 × √2) = ½ : l'angle BAC mesure 60°.",
              "2. AB⃗ et AC⃗ ne sont pas colinéaires, ils dirigent le plan (ABC). AD⃗(-1 ; 1 ; 1) : AD⃗·AB⃗ = -1 + 0 + 1 = 0 et AD⃗·AC⃗ = -1 + 1 + 0 = 0.",
              "La droite (AD) est orthogonale aux deux droites sécantes (AB) et (AC) du plan (ABC) : elle est orthogonale à ce plan.",
              "3. A est un point du plan (ABC) et (DA) est orthogonale à ce plan : A est le projeté orthogonal de D sur (ABC).",
              "La distance de D au plan (ABC) est donc DA = √((-1)² + 1² + 1²) = √3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une base orthonormée, on donne u⃗(2 ; -1 ; 3), v⃗(1 ; 5 ; 1) et w⃗(4 ; 1 ; -2). Calculer u⃗·v⃗, u⃗·w⃗, v⃗·w⃗ et ‖u⃗‖. Quels vecteurs sont orthogonaux ?",
              hint: "Multipliez les coordonnées de même rang et additionnez les trois produits.",
              solution: [
                "u⃗·v⃗ = 2 × 1 + (-1) × 5 + 3 × 1 = 2 - 5 + 3 = 0.",
                "u⃗·w⃗ = 2 × 4 + (-1) × 1 + 3 × (-2) = 8 - 1 - 6 = 1.",
                "v⃗·w⃗ = 1 × 4 + 5 × 1 + 1 × (-2) = 4 + 5 - 2 = 7.",
                "‖u⃗‖ = √(4 + 1 + 9) = √14.",
                "Seuls u⃗ et v⃗ sont orthogonaux.",
              ],
            },
            {
              level: 2,
              statement: "Dans une base orthonormée, on donne u⃗(m ; 2 ; -1) et v⃗(m ; m ; 3), où m est un réel. Déterminer les valeurs de m pour lesquelles u⃗ et v⃗ sont orthogonaux.",
              hint: "Écrivez u⃗·v⃗ en fonction de m : vous obtenez une équation du second degré.",
              solution: [
                "u⃗·v⃗ = m × m + 2 × m + (-1) × 3 = m² + 2m - 3.",
                "u⃗ et v⃗ sont orthogonaux si et seulement si m² + 2m - 3 = 0.",
                "Δ = 2² - 4 × 1 × (-3) = 16, donc m = (-2 - 4)/2 = -3 ou m = (-2 + 4)/2 = 1.",
                "Vérification : pour m = 1, 1 + 2 - 3 = 0 ; pour m = -3, 9 - 6 - 3 = 0.",
                "Les vecteurs sont orthogonaux pour m = 1 et pour m = -3.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un repère orthonormé, on donne A(1 ; 0 ; 0), B(3 ; 2 ; 1) et M(6 ; 3 ; 2). 1. Calculer AB. 2. On note H le projeté orthogonal de M sur la droite (AB). Justifier qu'il existe un réel t tel que AH⃗ = t AB⃗, puis déterminer t et les coordonnées de H. 3. En déduire la distance du point M à la droite (AB). 4. Calculer l'aire du triangle MAB.",
              hint: "H a pour coordonnées (1 + 2t ; 2t ; t). Écrivez la condition MH⃗·AB⃗ = 0. Pour l'aire, [AB] est une base et MH la hauteur associée.",
              solution: [
                "1. AB⃗(2 ; 2 ; 1), donc AB = √(4 + 4 + 1) = 3.",
                "2. H appartient à (AB), donc AH⃗ et AB⃗ sont colinéaires : AH⃗ = t AB⃗ et H(1 + 2t ; 2t ; t). Alors MH⃗(2t - 5 ; 2t - 3 ; t - 2).",
                "MH⃗·AB⃗ = 2(2t - 5) + 2(2t - 3) + (t - 2) = 9t - 18. La condition MH⃗·AB⃗ = 0 donne t = 2, donc H(5 ; 4 ; 2).",
                "3. MH⃗(-1 ; 1 ; 0) : on vérifie MH⃗·AB⃗ = -2 + 2 + 0 = 0. La distance de M à (AB) est MH = √(1 + 1 + 0) = √2.",
                "4. Aire(MAB) = ½ × AB × MH = ½ × 3 × √2 = 3√2/2 ≈ 2,12 unités d'aire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : orthogonalité dans l'espace.",
            statements: [
              { text: "Deux droites orthogonales de l'espace sont toujours sécantes.", true: false, why: "Dans un cube, (AB) et (CG) sont orthogonales et non coplanaires. Sécantes et orthogonales, on dit perpendiculaires." },
              { text: "Une droite orthogonale à deux droites sécantes d'un plan est orthogonale à ce plan.", true: true, why: "C'est le critère du cours : deux directions non colinéaires suffisent à diriger le plan." },
              { text: "Une droite orthogonale à deux droites parallèles d'un plan est orthogonale à ce plan.", true: false, why: "Deux droites parallèles ne donnent qu'une seule direction du plan : il en faut deux non colinéaires." },
              { text: "Dans une base orthonormée, u⃗·v⃗ = xx' + yy' + zz'.", true: true, why: "C'est la formule analytique, valable seulement si la base est orthonormée." },
              { text: "Si u⃗·v⃗ = 0, alors u⃗ = 0⃗ ou v⃗ = 0⃗.", true: false, why: "u⃗(1 ; 0 ; 0) et v⃗(0 ; 1 ; 0) sont non nuls et leur produit scalaire est nul : ils sont orthogonaux." },
              { text: "Le projeté orthogonal de M sur un plan est le point de ce plan le plus proche de M.", true: true, why: "Par Pythagore, MN² = MH² + HN² ≥ MH² pour tout point N du plan." },
              { text: "Pour tout vecteur u⃗, u⃗·u⃗ = ‖u⃗‖².", true: true, why: "L'angle de u⃗ avec lui-même est nul et cos 0 = 1." },
            ],
          },
          quiz: [
            {
              q: "Dans une base orthonormée, avec u⃗(1 ; -2 ; 3) et v⃗(2 ; 1 ; 0), u⃗·v⃗ vaut :",
              options: ["4", "-2", "0", "6"],
              answer: 2,
              why: "u⃗·v⃗ = 1 × 2 + (-2) × 1 + 3 × 0 = 2 - 2 + 0 = 0 : les vecteurs sont orthogonaux.",
            },
            {
              q: "‖u⃗‖ = 3, ‖v⃗‖ = 2 et l'angle entre u⃗ et v⃗ mesure 60°. Alors u⃗·v⃗ vaut :",
              options: ["6", "3", "3√3", "1"],
              answer: 1,
              why: "u⃗·v⃗ = 3 × 2 × cos 60° = 6 × ½ = 3.",
            },
            {
              q: "Pour démontrer qu'une droite d est orthogonale à un plan P, il suffit de montrer qu'elle est orthogonale à :",
              options: ["une droite de P", "deux droites parallèles de P", "deux droites sécantes de P", "un point de P"],
              answer: 2,
              why: "Deux droites sécantes fournissent deux directions non colinéaires qui dirigent le plan.",
            },
            {
              q: "Dans un cube ABCDEFGH d'arête 1, le produit scalaire AB⃗·AG⃗ vaut :",
              options: ["√3", "0", "√2", "1"],
              answer: 3,
              why: "AG⃗ = AB⃗ + BC⃗ + CG⃗, et BC⃗, CG⃗ sont orthogonaux à AB⃗ : AB⃗·AG⃗ = AB² = 1.",
            },
            {
              q: "Deux droites de l'espace sont perpendiculaires lorsqu'elles sont :",
              options: ["orthogonales et sécantes", "orthogonales, sécantes ou non", "parallèles à un même plan"],
              answer: 0,
              why: "Perpendiculaires signifie orthogonales et sécantes ; des droites orthogonales peuvent être non coplanaires.",
            },
          ],
          trap: "Confondre « orthogonales » et « perpendiculaires », ou conclure qu'une droite est orthogonale à un plan en ne vérifiant qu'une seule direction du plan (ou deux directions parallèles).",
          method: "Pour une orthogonalité droite-plan, commencez par écrire deux vecteurs directeurs non colinéaires du plan (et justifiez qu'ils ne sont pas colinéaires), puis calculez les deux produits scalaires avec le vecteur directeur de la droite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-cartesienne-plan',
          title: "Vecteur normal et équation cartésienne d'un plan",
          minutes: 35,
          objectives: [
            "Caractériser un plan par un point et un vecteur normal.",
            "Déterminer une équation cartésienne d'un plan connaissant un point et un vecteur normal, ou trois points non alignés.",
            "Étudier la position relative de deux plans à l'aide de leurs vecteurs normaux.",
            "Déterminer les coordonnées du projeté orthogonal d'un point sur un plan donné par une équation cartésienne.",
          ],
          course: [
            {
              heading: "Vecteur normal à un plan",
              paragraphs: [
                "Un vecteur normal à un plan P est un vecteur non nul n⃗ qui dirige une droite orthogonale à P. Il est orthogonal à tous les vecteurs du plan. Un plan admet une infinité de vecteurs normaux, tous colinéaires entre eux : si n⃗ est normal à P, 2n⃗ ou -n⃗ le sont aussi.",
                "Un point A et un vecteur normal n⃗ suffisent à déterminer un plan : c'est l'ensemble des points M tels que AM⃗ soit orthogonal à n⃗. Pensez à un plateau de table posé sur un pied vertical : le pied indique la direction normale, et un seul point du plateau suffit à fixer sa hauteur.",
              ],
              box: { label: "Définition", text: "Le plan passant par A et de vecteur normal n⃗ est l'ensemble des points M de l'espace tels que AM⃗·n⃗ = 0." },
            },
            {
              heading: "Équation cartésienne d'un plan",
              paragraphs: [
                "On travaille dans un repère orthonormé. Si n⃗(a ; b ; c) est normal au plan P passant par A(xA ; yA ; zA), la condition AM⃗·n⃗ = 0 s'écrit a(x - xA) + b(y - yA) + c(z - zA) = 0, c'est-à-dire ax + by + cz + d = 0 avec d = -(a xA + b yA + c zA).",
                "Réciproquement, si a, b, c ne sont pas tous nuls, l'ensemble des points M(x ; y ; z) tels que ax + by + cz + d = 0 est un plan de vecteur normal n⃗(a ; b ; c). Exemple : le plan passant par A(1 ; -2 ; 3) de vecteur normal n⃗(2 ; 1 ; -1) a une équation 2x + y - z + d = 0 ; A appartient au plan, donc 2 - 2 - 3 + d = 0, soit d = 3. Une équation est 2x + y - z + 3 = 0.",
                "Une équation cartésienne n'est pas unique : on peut la multiplier par n'importe quel réel non nul. Un point appartient au plan si et seulement si ses coordonnées vérifient l'équation.",
              ],
              box: { label: "Propriété", text: "Dans un repère orthonormé, un plan de vecteur normal n⃗(a ; b ; c) a une équation de la forme ax + by + cz + d = 0. Réciproquement, avec (a ; b ; c) ≠ (0 ; 0 ; 0), une telle équation définit un plan de vecteur normal n⃗(a ; b ; c)." },
            },
            {
              heading: "Plan défini par trois points ; positions de deux plans",
              paragraphs: [
                "Pour le plan (ABC), on cherche n⃗(a ; b ; c) orthogonal à AB⃗ et à AC⃗ (non colinéaires) : n⃗·AB⃗ = 0 et n⃗·AC⃗ = 0. Ce système de deux équations à trois inconnues a une infinité de solutions : on fixe une inconnue (par exemple c = 1 ou une valeur qui évite les fractions) et on calcule les deux autres. On termine en calculant d avec le point A, puis on vérifie avec B et C.",
                "Deux plans sont parallèles si et seulement si leurs vecteurs normaux sont colinéaires ; ils sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux. Exemple : 2x - y + z - 1 = 0 et -4x + 2y - 2z + 5 = 0 ont des vecteurs normaux colinéaires (le second vaut -2 fois le premier) ; leurs équations ne sont pas proportionnelles, donc les plans sont strictement parallèles.",
              ],
            },
            {
              heading: "Projeté orthogonal d'un point sur un plan",
              paragraphs: [
                "Soit P un plan d'équation ax + by + cz + d = 0, de vecteur normal n⃗(a ; b ; c), et M un point. Le projeté orthogonal H de M sur P vérifie deux conditions : MH⃗ est colinéaire à n⃗, donc MH⃗ = t n⃗ pour un réel t, et H appartient à P.",
                "On écrit les coordonnées de H en fonction de t, on les reporte dans l'équation de P, on obtient une équation du premier degré en t, puis on en déduit H. La distance du point M au plan P est MH = |t| × ‖n⃗‖.",
              ],
              box: { label: "Méthode", text: "H = M + t n⃗ : coordonnées (xM + ta ; yM + tb ; zM + tc). On remplace dans l'équation de P, on trouve t, puis H. Distance : MH = |t| × ‖n⃗‖." },
            },
          ],
          keyPoints: [
            "Vecteur normal : vecteur non nul orthogonal à toutes les directions du plan.",
            "Plan passant par A de vecteur normal n⃗ : AM⃗·n⃗ = 0.",
            "Repère orthonormé : n⃗(a ; b ; c) normal ⇔ équation ax + by + cz + d = 0 ; d se calcule avec un point.",
            "Plan (ABC) : n⃗·AB⃗ = 0 et n⃗·AC⃗ = 0, on fixe une inconnue, puis on vérifie avec B et C.",
            "Plans parallèles ⇔ normaux colinéaires ; plans perpendiculaires ⇔ normaux orthogonaux.",
            "Projeté de M sur P : MH⃗ = t n⃗ et H ∈ P ; distance MH = |t| × ‖n⃗‖.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(1 ; 0 ; 2), B(2 ; 1 ; 0) et C(0 ; 1 ; 1). Déterminer une équation cartésienne du plan (ABC).",
            solution: [
              "AB⃗(1 ; 1 ; -2) et AC⃗(-1 ; 1 ; -1) ne sont pas colinéaires (les premières coordonnées imposeraient k = -1, mais 1 × (-1) ≠ 1) : A, B, C définissent bien un plan.",
              "On cherche n⃗(a ; b ; c) tel que n⃗·AB⃗ = 0 et n⃗·AC⃗ = 0 : a + b - 2c = 0 et -a + b - c = 0.",
              "En additionnant les deux équations : 2b - 3c = 0. On choisit c = 2, d'où b = 3, puis a = 2c - b = 1. Donc n⃗(1 ; 3 ; 2).",
              "Une équation du plan est x + 3y + 2z + d = 0. Avec A : 1 + 0 + 4 + d = 0, donc d = -5.",
              "Vérification : B donne 2 + 3 + 0 - 5 = 0 et C donne 0 + 3 + 2 - 5 = 0.",
              "Une équation cartésienne du plan (ABC) est x + 3y + 2z - 5 = 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, déterminer une équation cartésienne du plan P passant par A(2 ; -1 ; 1) et de vecteur normal n⃗(3 ; -1 ; 2). Les points B(1 ; 0 ; 3) et C(0 ; 0 ; 4) appartiennent-ils à P ?",
              hint: "Les coefficients de x, y, z sont les coordonnées de n⃗ ; d se calcule en écrivant que A vérifie l'équation.",
              solution: [
                "Une équation de P est 3x - y + 2z + d = 0. Avec A : 6 + 1 + 2 + d = 0, donc d = -9.",
                "P : 3x - y + 2z - 9 = 0.",
                "B : 3 - 0 + 6 - 9 = 0, donc B appartient à P.",
                "C : 0 - 0 + 8 - 9 = -1 ≠ 0, donc C n'appartient pas à P.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthonormé, on considère les plans P : 2x - y + z - 1 = 0, Q : x + y - z + 4 = 0 et R : -4x + 2y - 2z + 5 = 0. Étudier la position relative de P et Q, puis celle de P et R.",
              hint: "Lisez un vecteur normal de chaque plan dans son équation, puis testez la colinéarité et l'orthogonalité.",
              solution: [
                "Vecteurs normaux : n⃗P(2 ; -1 ; 1), n⃗Q(1 ; 1 ; -1) et n⃗R(-4 ; 2 ; -2).",
                "n⃗P·n⃗Q = 2 - 1 - 1 = 0 : les vecteurs normaux sont orthogonaux, donc P et Q sont perpendiculaires (sécants selon une droite).",
                "n⃗R = -2 n⃗P : les vecteurs normaux sont colinéaires, donc P et R sont parallèles.",
                "En divisant l'équation de R par -2, on obtient 2x - y + z - 5/2 = 0, qui diffère de celle de P (-1 ≠ -5/2) : par exemple, le point (0 ; 0 ; 1) est dans P mais pas dans R.",
                "Conclusion : P et Q sont perpendiculaires, P et R sont strictement parallèles.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un repère orthonormé, on considère le plan P : x + 2y - 2z + 1 = 0, les points A(-1 ; 0 ; 0), B(-1 ; 1 ; 1), C(-5 ; 1 ; -1) et M(2 ; 4 ; 1). 1. Vérifier que A, B et C appartiennent à P et que M n'appartient pas à P. 2. Démontrer que le triangle ABC est rectangle en A et calculer son aire. 3. Déterminer les coordonnées du projeté orthogonal H de M sur P, puis la distance MH. 4. En déduire le volume du tétraèdre MABC (V = ⅓ × aire de la base × hauteur).",
              hint: "Pour la question 3, écrivez H(2 + t ; 4 + 2t ; 1 - 2t) et reportez dans l'équation de P. Pour la question 4, la hauteur issue de M est MH, car (MH) est orthogonale au plan (ABC) = P.",
              solution: [
                "1. A : -1 + 0 - 0 + 1 = 0 ; B : -1 + 2 - 2 + 1 = 0 ; C : -5 + 2 + 2 + 1 = 0. Les trois points sont dans P. M : 2 + 8 - 2 + 1 = 9 ≠ 0, M n'est pas dans P.",
                "2. AB⃗(0 ; 1 ; 1) et AC⃗(-4 ; 1 ; -1), donc AB⃗·AC⃗ = 0 + 1 - 1 = 0 : le triangle est rectangle en A. AB = √2 et AC = √18 = 3√2, donc aire(ABC) = ½ × √2 × 3√2 = 3.",
                "3. n⃗(1 ; 2 ; -2) est normal à P et MH⃗ = t n⃗, donc H(2 + t ; 4 + 2t ; 1 - 2t). H ∈ P : (2 + t) + 2(4 + 2t) - 2(1 - 2t) + 1 = 0, soit 9 + 9t = 0, donc t = -1.",
                "H(1 ; 2 ; 3). Vérification : 1 + 4 - 6 + 1 = 0. MH⃗(-1 ; -2 ; 2), donc MH = √(1 + 4 + 4) = 3.",
                "4. (MH) est orthogonale au plan (ABC) : MH est la hauteur du tétraèdre issue de M. V = ⅓ × 3 × 3 = 3 unités de volume.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour obtenir une équation cartésienne du plan (ABC).",
            items: [
              "Calculer AB⃗ et AC⃗ et vérifier qu'ils ne sont pas colinéaires.",
              "Écrire que n⃗(a ; b ; c) vérifie n⃗·AB⃗ = 0 et n⃗·AC⃗ = 0.",
              "Résoudre le système en fixant une valeur non nulle pour l'une des inconnues.",
              "Écrire l'équation ax + by + cz + d = 0 avec les valeurs trouvées.",
              "Calculer d en écrivant que les coordonnées de A vérifient l'équation.",
              "Vérifier que les coordonnées de B et de C vérifient aussi l'équation.",
            ],
          },
          quiz: [
            {
              q: "Un vecteur normal au plan d'équation 3x - z + 2 = 0 est :",
              options: ["n⃗(3 ; -1 ; 2)", "n⃗(3 ; 0 ; -1)", "n⃗(3 ; -1 ; 0)", "n⃗(0 ; 3 ; -1)"],
              answer: 1,
              why: "Les coordonnées du vecteur normal sont les coefficients de x, y et z : 3, 0 (y n'apparaît pas) et -1.",
            },
            {
              q: "Le plan passant par A(1 ; 1 ; 1) et de vecteur normal n⃗(1 ; 2 ; 3) a pour équation :",
              options: ["x + 2y + 3z = 0", "x + y + z - 6 = 0", "x + 2y + 3z + 6 = 0", "x + 2y + 3z - 6 = 0"],
              answer: 3,
              why: "On part de x + 2y + 3z + d = 0 ; A donne 1 + 2 + 3 + d = 0, donc d = -6.",
            },
            {
              q: "Les plans d'équations x - y + 2z = 1 et 2x + 4y + z = 3 sont :",
              options: ["perpendiculaires", "parallèles", "confondus"],
              answer: 0,
              why: "(1 ; -1 ; 2)·(2 ; 4 ; 1) = 2 - 4 + 2 = 0 : les vecteurs normaux sont orthogonaux.",
            },
            {
              q: "Pour trouver le projeté orthogonal H de M sur le plan P de vecteur normal n⃗, on écrit :",
              options: ["MH⃗·n⃗ = 0 et H ∈ P", "MH⃗ = t n⃗ et H ∈ P", "MH⃗ = n⃗", "H = M + n⃗"],
              answer: 1,
              why: "(MH) est orthogonale à P, donc dirigée par n⃗ : MH⃗ = t n⃗. On détermine t en écrivant que H est dans P.",
            },
            {
              q: "Le point A(2 ; 0 ; -1) appartient au plan d'équation :",
              options: ["x + y + z = 0", "2x + z - 5 = 0", "x - 2y + z = 3", "x + z - 1 = 0"],
              answer: 3,
              why: "2 + (-1) - 1 = 0. Pour les autres, on obtient 1 ≠ 0, puis 4 - 1 - 5 = -2 ≠ 0, puis 2 - 0 - 1 = 1 ≠ 3.",
            },
          ],
          trap: "Oublier de vérifier que la troisième condition (le point B ou C) satisfait l'équation trouvée, ou lire un vecteur normal en oubliant une coordonnée nulle (dans 3x - z + 2 = 0, n⃗ vaut (3 ; 0 ; -1)).",
          method: "Après avoir trouvé une équation, remplacez systématiquement les coordonnées de chaque point de l'énoncé : ce contrôle de quelques secondes détecte presque toutes les erreurs de signe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'representation-parametrique',
          title: "Représentation paramétrique d'une droite et intersections",
          minutes: 35,
          objectives: [
            "Déterminer une représentation paramétrique d'une droite définie par un point et un vecteur directeur, ou par deux points.",
            "Déterminer si un point appartient à une droite et étudier la position relative de deux droites.",
            "Déterminer l'intersection d'une droite et d'un plan donné par une équation cartésienne.",
          ],
          course: [
            {
              heading: "Représentation paramétrique d'une droite",
              paragraphs: [
                "La droite d passant par A(xA ; yA ; zA) et de vecteur directeur u⃗(a ; b ; c) est l'ensemble des points M tels que AM⃗ = t u⃗, où t décrit R. En traduisant cette égalité coordonnée par coordonnée, on obtient un système qui donne les coordonnées de tous les points de la droite en fonction d'un seul nombre t, appelé paramètre.",
                "On peut voir t comme le temps : un mobile part de A à l'instant t = 0 et se déplace à vitesse constante u⃗. À l'instant t = 1, il est en A + u⃗ ; à l'instant t = -2, il était en A - 2u⃗. Une droite admet une infinité de représentations paramétriques : on peut changer de point de départ et remplacer u⃗ par n'importe quel vecteur colinéaire non nul.",
              ],
              box: { label: "Propriété", text: "La droite passant par A(xA ; yA ; zA) et dirigée par u⃗(a ; b ; c) admet la représentation paramétrique : x = xA + at, y = yA + bt, z = zA + ct, avec t ∈ R." },
            },
            {
              heading: "Appartenance d'un point et position de deux droites",
              paragraphs: [
                "Pour savoir si un point B appartient à d, on cherche t dans l'une des équations, puis on vérifie que cette même valeur convient dans les deux autres. Si une seule valeur de t convient pour les trois, B est sur d ; sinon, il n'y est pas.",
                "Pour deux droites d (paramètre t, vecteur u⃗) et d' (paramètre s, vecteur v⃗), on regarde d'abord les vecteurs directeurs. S'ils sont colinéaires, les droites sont parallèles (strictement ou confondues : on teste un point de l'une sur l'autre). Sinon, on résout le système de trois équations d'inconnues t et s obtenu en égalant les coordonnées : s'il a une solution, les droites sont sécantes ; s'il n'en a pas, elles sont non coplanaires.",
                "Attention : il faut deux paramètres différents (t et s). Utiliser la même lettre pour les deux droites reviendrait à imposer que les deux mobiles passent au même endroit au même instant, ce qui n'a aucune raison d'être.",
              ],
            },
            {
              heading: "Intersection d'une droite et d'un plan",
              paragraphs: [
                "Soit d donnée par une représentation paramétrique et P par une équation cartésienne. On remplace x, y, z dans l'équation de P par leurs expressions en t : on obtient une équation du premier degré en t. Une unique solution donne le point d'intersection. Une égalité impossible (du type 0 = 4) signifie que d est strictement parallèle à P. Une égalité toujours vraie (0 = 0) signifie que d est contenue dans P.",
                "Ce résultat est cohérent avec les vecteurs : d est parallèle à P si et seulement si son vecteur directeur u⃗ est orthogonal au vecteur normal n⃗ de P, c'est-à-dire u⃗·n⃗ = 0. C'est exactement le cas où le coefficient de t s'annule.",
              ],
              box: { label: "À retenir", text: "Droite et plan : on injecte la représentation paramétrique dans l'équation. Une solution : un point d'intersection. Aucune : strictement parallèles. Infinité : droite contenue dans le plan." },
            },
            {
              heading: "Retour au projeté orthogonal",
              paragraphs: [
                "La représentation paramétrique fournit une méthode systématique pour le projeté orthogonal H d'un point M sur un plan P de vecteur normal n⃗ : H est l'intersection de P avec la droite passant par M et dirigée par n⃗. On écrit sa représentation, on l'injecte dans l'équation de P, et la valeur de t obtenue donne H.",
                "C'est un enchaînement très fréquent au baccalauréat : équation d'un plan, droite orthogonale à ce plan passant par un point, point d'intersection, distance du point au plan, puis volume d'un tétraèdre.",
              ],
            },
          ],
          keyPoints: [
            "Droite passant par A dirigée par u⃗(a ; b ; c) : x = xA + at, y = yA + bt, z = zA + ct, t ∈ R.",
            "Une droite a une infinité de représentations paramétriques.",
            "Point sur une droite : la même valeur de t doit convenir dans les trois équations.",
            "Deux droites : un paramètre différent pour chacune (t et s).",
            "Directions non colinéaires : système solvable ⇒ sécantes ; pas de solution ⇒ non coplanaires.",
            "Droite et plan : on injecte x(t), y(t), z(t) dans l'équation du plan et on résout en t.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(1 ; -1 ; 3), B(3 ; 0 ; 2) et le plan P : x + y + z - 9 = 0. Déterminer une représentation paramétrique de la droite (AB), puis les coordonnées de son point d'intersection avec P.",
            solution: [
              "AB⃗(2 ; 1 ; -1) est un vecteur directeur de (AB), et A est un point de la droite.",
              "Représentation paramétrique : x = 1 + 2t, y = -1 + t, z = 3 - t, avec t ∈ R.",
              "Un point de (AB) est dans P si (1 + 2t) + (-1 + t) + (3 - t) - 9 = 0, c'est-à-dire 2t - 6 = 0, donc t = 3.",
              "Pour t = 3 : x = 7, y = 2, z = 0.",
              "Vérification : 7 + 2 + 0 - 9 = 0.",
              "La droite (AB) coupe le plan P au point I(7 ; 2 ; 0).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère de l'espace, déterminer une représentation paramétrique de la droite d passant par A(2 ; 0 ; -1) et de vecteur directeur u⃗(1 ; -3 ; 2). Les points B(4 ; -6 ; 3) et C(3 ; -3 ; 2) appartiennent-ils à d ?",
              hint: "Déterminez t avec la première équation, puis testez cette valeur dans les deux autres.",
              solution: [
                "d : x = 2 + t, y = -3t, z = -1 + 2t, avec t ∈ R.",
                "Pour B : 4 = 2 + t donne t = 2 ; alors y = -6 et z = -1 + 4 = 3. Les trois coordonnées concordent : B appartient à d.",
                "Pour C : 3 = 2 + t donne t = 1 ; alors y = -3 (correct) mais z = -1 + 2 = 1 ≠ 2.",
                "C n'appartient pas à d.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère de l'espace, on considère les droites d : x = 1 + t, y = 2 - t, z = 3 + 2t (t ∈ R) et d' : x = 2 + s, y = 3 + s, z = 2 - s (s ∈ R). 1. Les droites sont-elles parallèles ? 2. Démontrer qu'elles sont sécantes et donner les coordonnées de leur point d'intersection.",
              hint: "Comparez u⃗(1 ; -1 ; 2) et v⃗(1 ; 1 ; -1). Puis égalez les coordonnées : 1 + t = 2 + s, 2 - t = 3 + s, 3 + 2t = 2 - s.",
              solution: [
                "1. u⃗(1 ; -1 ; 2) et v⃗(1 ; 1 ; -1) : les premières coordonnées imposeraient k = 1, mais -1 ≠ 1. Les vecteurs ne sont pas colinéaires, les droites ne sont pas parallèles.",
                "2. On résout 1 + t = 2 + s, 2 - t = 3 + s et 3 + 2t = 2 - s. La première donne t = 1 + s.",
                "Dans la deuxième : 2 - (1 + s) = 3 + s, soit 1 - s = 3 + s, donc s = -1 et t = 0.",
                "Test de la troisième : 3 + 2 × 0 = 3 et 2 - (-1) = 3. Elle est vérifiée.",
                "Les droites sont sécantes. Pour t = 0 dans d (ou s = -1 dans d'), le point d'intersection est I(1 ; 2 ; 3).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un repère orthonormé, on considère le plan P : 2x - y + 2z - 3 = 0, le point M(5 ; -1 ; 5) et la droite Δ : x = t, y = 3 + 2t, z = 4 (t ∈ R). 1. Déterminer une représentation paramétrique de la droite d passant par M et orthogonale à P. 2. En déduire les coordonnées du projeté orthogonal H de M sur P, puis la distance de M au plan P. 3. Démontrer que la droite Δ est strictement parallèle au plan P.",
              hint: "Un vecteur normal de P dirige d. Pour la question 3, calculez le produit scalaire du vecteur directeur de Δ avec le vecteur normal, puis testez un point de Δ.",
              solution: [
                "1. n⃗(2 ; -1 ; 2) est normal à P, donc dirige d : x = 5 + 2t, y = -1 - t, z = 5 + 2t, avec t ∈ R.",
                "2. H est l'intersection de d et P : 2(5 + 2t) - (-1 - t) + 2(5 + 2t) - 3 = 0, soit 18 + 9t = 0, donc t = -2.",
                "H(1 ; 1 ; 1). Vérification : 2 - 1 + 2 - 3 = 0. MH⃗(-4 ; 2 ; -4), donc MH = √(16 + 4 + 16) = 6. La distance de M à P est 6.",
                "3. Δ est dirigée par w⃗(1 ; 2 ; 0) et w⃗·n⃗ = 2 - 2 + 0 = 0 : Δ est parallèle à P.",
                "Le point K(0 ; 3 ; 4) de Δ (t = 0) donne 0 - 3 + 8 - 3 = 2 ≠ 0 : K n'est pas dans P. La droite Δ est donc strictement parallèle à P.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque résultat de calcul à la conclusion qu'il permet.",
            pairs: [
              { left: "Droite et plan : une seule valeur de t", right: "La droite coupe le plan en un point" },
              { left: "Droite et plan : égalité impossible (0 = 5)", right: "Droite strictement parallèle au plan" },
              { left: "Droite et plan : égalité toujours vraie (0 = 0)", right: "Droite contenue dans le plan" },
              { left: "Deux droites : vecteurs directeurs colinéaires", right: "Droites parallèles ou confondues" },
              { left: "Deux droites : système en t et s avec une solution", right: "Droites sécantes" },
              { left: "Directions non colinéaires, système sans solution", right: "Droites non coplanaires" },
            ],
          },
          quiz: [
            {
              q: "Une représentation paramétrique de la droite passant par A(1 ; 0 ; 2) et dirigée par u⃗(3 ; -1 ; 1) est :",
              options: ["x = 3 + t, y = -1, z = 1 + 2t", "x = 1 + 3t, y = -t, z = 2 + t", "x = 1 + 3t, y = t, z = 2 + t", "x = 3t, y = -t, z = t"],
              answer: 1,
              why: "On ajoute aux coordonnées de A le produit de t par celles de u⃗ : (1 + 3t ; 0 - t ; 2 + t).",
            },
            {
              q: "Un vecteur directeur de la droite x = 2 - t, y = 5, z = 1 + 4t est :",
              options: ["(2 ; 5 ; 1)", "(-1 ; 5 ; 4)", "(-1 ; 0 ; 4)", "(1 ; 0 ; 4)"],
              answer: 2,
              why: "On lit les coefficients de t : -1, 0 (y ne dépend pas de t) et 4.",
            },
            {
              q: "La droite x = t, y = 1 + t, z = 2t et le plan x + y - z + 5 = 0 sont :",
              options: ["sécants en un point", "tels que la droite est contenue dans le plan", "strictement parallèles"],
              answer: 2,
              why: "t + 1 + t - 2t + 5 = 0 donne 6 = 0, égalité impossible : aucun point commun, et u⃗·n⃗ = 1 + 1 - 2 = 0.",
            },
            {
              q: "Pour étudier l'intersection de deux droites données par des représentations paramétriques, il faut :",
              options: ["utiliser le même paramètre t pour les deux", "utiliser deux paramètres différents, t et s", "comparer seulement les vecteurs directeurs", "calculer leurs équations cartésiennes"],
              answer: 1,
              why: "Un point commun peut correspondre à des valeurs différentes des paramètres sur chacune des droites.",
            },
            {
              q: "Le point A(3 ; 1 ; 0) appartient-il à la droite x = 1 + t, y = -1 + t, z = 2 - t ?",
              options: ["Oui, pour t = 2", "Non, car z ne convient pas", "Oui, pour t = -2", "On ne peut pas savoir"],
              answer: 0,
              why: "t = 2 donne x = 3, y = 1 et z = 0 : les trois coordonnées concordent.",
            },
          ],
          trap: "Utiliser la même lettre t pour les paramètres de deux droites différentes, ou trouver t avec une seule équation sans vérifier les deux autres.",
          method: "Après avoir trouvé une valeur de paramètre, calculez les coordonnées du point et réinjectez-les dans toutes les équations de l'énoncé (plan et droites) : la vérification finale est rapide et rassure le correcteur.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA FONCTION LOGARITHME NÉPÉRIEN                                        */
    /* ==================================================================== */
    {
      id: 'logarithme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ln-definition-proprietes',
          title: 'Définition et propriétés algébriques du logarithme',
          minutes: 30,
          objectives: [
            "Définir la fonction logarithme népérien comme fonction réciproque de la fonction exponentielle.",
            "Utiliser les relations ln(ab) = ln a + ln b, ln(1/a) = -ln a, ln(a/b) = ln a - ln b, ln(aⁿ) = n ln a et ln(√a) = ½ ln a.",
            "Résoudre des équations du type eˣ = k et ln x = k.",
          ],
          course: [
            {
              heading: "Le logarithme, réciproque de l'exponentielle",
              paragraphs: [
                "La fonction exponentielle est continue et strictement croissante sur R, avec pour limites 0 en -∞ et +∞ en +∞. D'après le théorème des valeurs intermédiaires (cas strictement monotone), pour tout réel a > 0, l'équation eˣ = a admet une unique solution dans R. Cette solution est notée ln a : c'est le logarithme népérien de a.",
                "On définit ainsi la fonction ln sur ]0 ; +∞[ : elle « défait » ce que fait l'exponentielle. Comme une clé et sa serrure, les deux fonctions se compensent : e^(ln a) = a pour tout a > 0, et ln(eˣ) = x pour tout réel x. En particulier ln 1 = 0 (car e⁰ = 1) et ln e = 1 (car e¹ = e).",
                "Dans un repère orthonormé, les courbes de exp et de ln sont symétriques par rapport à la droite d'équation y = x : le point (x ; eˣ) de la première correspond au point (eˣ ; x) de la seconde.",
              ],
              box: { label: "Définition", text: "Pour tout réel a > 0, ln a est l'unique réel dont l'exponentielle vaut a. Pour tout réel x et tout réel y > 0 : y = eˣ ⇔ x = ln y. Ainsi ln 1 = 0, ln e = 1, e^(ln a) = a (a > 0) et ln(eˣ) = x (x réel)." },
            },
            {
              heading: "La relation fonctionnelle",
              paragraphs: [
                "Pour tous réels a > 0 et b > 0, ln(ab) = ln a + ln b. Démonstration : e^(ln a + ln b) = e^(ln a) × e^(ln b) = a × b, donc ln a + ln b est le réel dont l'exponentielle vaut ab, c'est-à-dire ln(ab). Le logarithme transforme les produits en sommes, exactement à l'inverse de l'exponentielle qui transforme les sommes en produits.",
                "C'est cette propriété qui a fait naître les logarithmes : John Napier (Neper en français) publie en 1614 des tables de logarithmes destinées à simplifier les calculs des astronomes et des navigateurs. Pour multiplier deux grands nombres, il suffisait de lire leurs logarithmes dans une table, de les additionner, puis de lire le résultat dans l'autre sens.",
              ],
            },
            {
              heading: "Les conséquences algébriques",
              paragraphs: [
                "De la relation fonctionnelle découlent toutes les règles de calcul. Avec b = 1/a : ln a + ln(1/a) = ln 1 = 0, donc ln(1/a) = -ln a. Puis ln(a/b) = ln(a × 1/b) = ln a - ln b. En itérant, ln(aⁿ) = n ln a pour tout entier relatif n, et comme (√a)² = a, 2 ln(√a) = ln a, d'où ln(√a) = ½ ln a.",
                "Exemple : ln 72 = ln(2³ × 3²) = 3 ln 2 + 2 ln 3. Toutes ces règles exigent des nombres strictement positifs : ln(-2) n'existe pas. Et il n'y a aucune règle pour ln(a + b) : par exemple ln(1 + 1) = ln 2, alors que ln 1 + ln 1 = 0.",
              ],
              box: { label: "Formule", text: "Pour a > 0, b > 0 et n entier relatif : ln(ab) = ln a + ln b ; ln(1/a) = -ln a ; ln(a/b) = ln a - ln b ; ln(aⁿ) = n ln a ; ln(√a) = ½ ln a." },
            },
            {
              heading: "Résoudre eˣ = k et ln x = k",
              paragraphs: [
                "L'équation eˣ = k a une unique solution x = ln k si k > 0, et aucune solution si k ≤ 0, puisqu'une exponentielle est toujours strictement positive. Exemple : e^(2x - 1) = 5 équivaut à 2x - 1 = ln 5, soit x = (1 + ln 5)/2.",
                "L'équation ln x = k, pour tout réel k, a une unique solution x = eᵏ, qui est bien strictement positive. Exemple : ln x = -1 équivaut à x = e⁻¹ = 1/e. Les équations dont l'inconnue est en exposant se résolvent donc avec ln, et celles où l'inconnue est dans un logarithme se résolvent avec exp.",
              ],
              box: { label: "À retenir", text: "eˣ = k (k > 0) ⇔ x = ln k ; eˣ = k (k ≤ 0) : aucune solution. ln x = k ⇔ x = eᵏ." },
            },
          ],
          keyPoints: [
            "ln est définie sur ]0 ; +∞[ : y = eˣ ⇔ x = ln y.",
            "ln 1 = 0, ln e = 1, e^(ln a) = a pour a > 0, ln(eˣ) = x pour x réel.",
            "ln(ab) = ln a + ln b : le logarithme transforme les produits en sommes.",
            "ln(1/a) = -ln a, ln(a/b) = ln a - ln b, ln(aⁿ) = n ln a, ln(√a) = ½ ln a.",
            "Aucune formule pour ln(a + b), et ln d'un nombre négatif ou nul n'existe pas.",
            "eˣ = k a pour solution ln k si k > 0, aucune sinon ; ln x = k a pour solution eᵏ.",
          ],
          example: {
            statement: "Exprimer en fonction de ln 2 et ln 3 les nombres A = ln 72 - 2 ln 6 + ln(1/3) et B = ln(√8) + ln(9/4).",
            solution: [
              "72 = 2³ × 3², donc ln 72 = 3 ln 2 + 2 ln 3.",
              "2 ln 6 = 2 ln(2 × 3) = 2 ln 2 + 2 ln 3, et ln(1/3) = -ln 3.",
              "A = 3 ln 2 + 2 ln 3 - 2 ln 2 - 2 ln 3 - ln 3 = ln 2 - ln 3.",
              "√8 = √(2³), donc ln(√8) = ½ × 3 ln 2 = (3/2) ln 2.",
              "ln(9/4) = ln 9 - ln 4 = 2 ln 3 - 2 ln 2.",
              "B = (3/2) ln 2 - 2 ln 2 + 2 ln 3 = -½ ln 2 + 2 ln 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre dans R les équations : a) eˣ = 7 ; b) e^(3x + 1) = 2 ; c) eˣ = -4 ; d) ln x = 2 (sur ]0 ; +∞[).",
              hint: "Appliquez ln aux deux membres quand le second membre est strictement positif, et exp pour une équation en ln x.",
              solution: [
                "a) 7 > 0, donc eˣ = 7 ⇔ x = ln 7.",
                "b) 2 > 0, donc 3x + 1 = ln 2, soit x = (ln 2 - 1)/3.",
                "c) Une exponentielle est strictement positive : l'équation eˣ = -4 n'a aucune solution.",
                "d) ln x = 2 ⇔ x = e², qui est bien strictement positif. Solution : x = e² ≈ 7,39.",
              ],
            },
            {
              level: 2,
              statement: "Simplifier les nombres suivants : A = ln(e³) - ln(1/e) + e^(ln 4) ; B = 3 ln(e²) - ln(e⁵) ; C = ln(2 + √3) + ln(2 - √3).",
              hint: "Utilisez ln(eˣ) = x, e^(ln a) = a, puis pour C transformez la somme de logarithmes en logarithme d'un produit.",
              solution: [
                "A : ln(e³) = 3, ln(1/e) = -ln e = -1 et e^(ln 4) = 4, donc A = 3 - (-1) + 4 = 8.",
                "B : 3 ln(e²) = 3 × 2 = 6 et ln(e⁵) = 5, donc B = 6 - 5 = 1.",
                "C : 2 - √3 > 0 (car √3 ≈ 1,73), donc C = ln((2 + √3)(2 - √3)).",
                "(2 + √3)(2 - √3) = 4 - 3 = 1, donc C = ln 1 = 0.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. 1. Résoudre dans R l'équation e^(2x) - 3eˣ + 2 = 0 (on pourra poser X = eˣ). 2. Résoudre dans ]2 ; +∞[ l'équation ln x + ln(x - 2) = ln 3.",
              hint: "1. e^(2x) = (eˣ)² : on obtient une équation du second degré en X, avec X > 0. 2. Regroupez en ln(x(x - 2)), puis utilisez le fait que ln a = ln b équivaut à a = b, en vérifiant que les solutions sont dans ]2 ; +∞[.",
              solution: [
                "1. En posant X = eˣ, l'équation devient X² - 3X + 2 = 0, soit (X - 1)(X - 2) = 0, donc X = 1 ou X = 2.",
                "eˣ = 1 donne x = 0 et eˣ = 2 donne x = ln 2. Les solutions sont 0 et ln 2.",
                "2. Pour x > 2, x et x - 2 sont strictement positifs, donc ln x + ln(x - 2) = ln(x(x - 2)).",
                "ln(x(x - 2)) = ln 3 ⇔ x(x - 2) = 3 (en appliquant exp aux deux membres) ⇔ x² - 2x - 3 = 0 ⇔ (x - 3)(x + 1) = 0.",
                "x = 3 ou x = -1 ; seule 3 appartient à ]2 ; +∞[. La solution est x = 3 (vérification : ln 3 + ln 1 = ln 3).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les règles de calcul du logarithme.",
            statements: [
              { text: "Pour tous a > 0 et b > 0, ln(a + b) = ln a + ln b.", true: false, why: "Aucune règle pour une somme : ln(1 + 1) = ln 2 ≈ 0,69 alors que ln 1 + ln 1 = 0." },
              { text: "ln(3²) = 2 ln 3.", true: true, why: "C'est la règle ln(aⁿ) = n ln a." },
              { text: "ln(-2) = -ln 2.", true: false, why: "ln n'est définie que sur ]0 ; +∞[ : ln(-2) n'existe pas. C'est ln(1/2) qui vaut -ln 2." },
              { text: "Pour tout réel x, ln(eˣ) = x.", true: true, why: "eˣ est toujours strictement positif et ln est la réciproque de exp." },
              { text: "Pour tout réel x, e^(ln x) = x.", true: false, why: "Cette égalité n'a de sens que pour x > 0, car ln x n'existe pas sinon." },
              { text: "ln(1/5) = -ln 5.", true: true, why: "C'est la règle ln(1/a) = -ln a." },
              { text: "ln a × ln b = ln(ab).", true: false, why: "Le logarithme d'un produit est une somme : ln(ab) = ln a + ln b." },
            ],
          },
          quiz: [
            {
              q: "Combien vaut ln 1 ?",
              options: ["1", "e", "0", "Ce nombre n'existe pas"],
              answer: 2,
              why: "e⁰ = 1, donc ln 1 = 0.",
            },
            {
              q: "L'équation eˣ = -2 a pour ensemble de solutions :",
              options: ["{ln 2}", "{-ln 2}", "{ln(-2)}", "l'ensemble vide"],
              answer: 3,
              why: "Une exponentielle est toujours strictement positive : elle ne peut pas valoir -2.",
            },
            {
              q: "ln 8 - ln 2 est égal à :",
              options: ["2 ln 2", "ln 6", "4", "ln 16"],
              answer: 0,
              why: "ln 8 - ln 2 = ln(8/2) = ln 4 = ln(2²) = 2 ln 2.",
            },
            {
              q: "La solution de l'équation ln x = 3 est :",
              options: ["x = ln 3", "x = e³", "x = 3e", "x = 3/e"],
              answer: 1,
              why: "ln x = 3 ⇔ x = e³ (on applique exp aux deux membres).",
            },
            {
              q: "Pour a > 0, ln(√a) est égal à :",
              options: ["√(ln a)", "2 ln a", "½ ln a"],
              answer: 2,
              why: "√a = a^(1/2), et 2 ln(√a) = ln((√a)²) = ln a.",
            },
          ],
          trap: "Inventer une règle pour ln(a + b) ou pour ln a × ln b, et oublier que ln n'est définie que pour des nombres strictement positifs (ln(-2) n'existe pas, eˣ = -2 n'a pas de solution).",
          method: "Pour transformer un logarithme, décomposez d'abord le nombre en produit de facteurs premiers (72 = 2³ × 3²), puis appliquez les règles une à une, en écrivant chaque étape : les erreurs de signe se voient alors immédiatement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etude-de-ln',
          title: 'Étude de la fonction ln : limites, dérivée, croissances comparées',
          minutes: 35,
          objectives: [
            "Établir que ln est dérivable sur ]0 ; +∞[ de dérivée x ↦ 1/x et en déduire son sens de variation.",
            "Connaître les limites de ln en 0 et en +∞ et les croissances comparées de ln x et de xⁿ.",
            "Dériver une fonction de la forme ln(u) et étudier une fonction faisant intervenir le logarithme.",
          ],
          course: [
            {
              heading: "Dérivée et sens de variation",
              paragraphs: [
                "On admet que ln est dérivable sur ]0 ; +∞[. Pour tout x > 0, on a e^(ln x) = x. En dérivant les deux membres (dérivée d'une composée), on obtient ln'(x) × e^(ln x) = 1, soit ln'(x) × x = 1, donc ln'(x) = 1/x.",
                "Comme 1/x > 0 sur ]0 ; +∞[, la fonction ln est strictement croissante. On en déduit des équivalences essentielles pour a > 0 et b > 0 : ln a = ln b ⇔ a = b et ln a < ln b ⇔ a < b. Avec ln 1 = 0 : ln x < 0 pour 0 < x < 1, ln x > 0 pour x > 1.",
              ],
              box: { label: "Propriété", text: "ln est dérivable sur ]0 ; +∞[ et ln'(x) = 1/x. Elle est strictement croissante : pour a, b > 0, ln a < ln b ⇔ a < b. ln x < 0 sur ]0 ; 1[, ln 1 = 0, ln x > 0 sur ]1 ; +∞[." },
            },
            {
              heading: "Limites et courbe",
              paragraphs: [
                "lim(x→+∞) ln x = +∞ : pour dépasser un seuil A, il suffit de prendre x > e^A. La croissance est cependant très lente : ln(10⁶) ≈ 13,8 seulement. Et lim(x→0⁺) ln x = -∞ : l'axe des ordonnées est asymptote verticale à la courbe.",
                "La tangente au point d'abscisse 1 a pour équation y = x - 1 (coefficient directeur ln'(1) = 1, passage par (1 ; 0)). La dérivée seconde vaut -1/x² < 0 : ln est concave, sa courbe est au-dessous de ses tangentes. On obtient l'inégalité classique ln x ≤ x - 1 pour tout x > 0.",
                "Enfin, le nombre dérivé de ln en 1 s'écrit comme une limite : lim(h→0) ln(1 + h)/h = 1. Pour h proche de 0, ln(1 + h) est donc proche de h.",
              ],
            },
            {
              heading: "Croissances comparées",
              paragraphs: [
                "En +∞, ln x et x tendent tous deux vers +∞, mais x l'emporte nettement : lim(x→+∞) ln x / x = 0. Plus généralement, pour tout entier n ≥ 1, lim(x→+∞) ln x / xⁿ = 0 : toute puissance de x « écrase » le logarithme.",
                "En 0, x tend vers 0 et ln x vers -∞ : le produit est une forme indéterminée, que la puissance tranche encore : lim(x→0⁺) x ln x = 0, et plus généralement lim(x→0⁺) xⁿ ln x = 0 pour n ≥ 1. Ces résultats se démontrent en posant x = e^X et en utilisant les croissances comparées de l'exponentielle.",
              ],
              box: { label: "À retenir", text: "Pour tout entier n ≥ 1 : lim(x→+∞) ln x / xⁿ = 0 et lim(x→0⁺) xⁿ ln x = 0. En particulier lim(x→+∞) ln x / x = 0 et lim(x→0⁺) x ln x = 0." },
            },
            {
              heading: "La fonction ln(u)",
              paragraphs: [
                "Si u est une fonction dérivable et strictement positive sur un intervalle I, la fonction ln(u) est dérivable sur I et (ln u)' = u'/u, par la formule de dérivation d'une composée. Comme u > 0, la dérivée est du signe de u' : ln(u) a les mêmes variations que u.",
                "Exemple : f(x) = ln(x² + 1) est définie sur R car x² + 1 > 0, et f'(x) = 2x/(x² + 1). Elle est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[, comme x² + 1. Autre exemple : g(x) = ln(3x - 6) est définie sur ]2 ; +∞[ et g'(x) = 3/(3x - 6) = 1/(x - 2).",
              ],
              box: { label: "Formule", text: "Si u est dérivable et strictement positive sur I : (ln u)' = u'/u. En particulier, (ln(ax + b))' = a/(ax + b) là où ax + b > 0." },
            },
          ],
          keyPoints: [
            "ln'(x) = 1/x : ln est strictement croissante sur ]0 ; +∞[.",
            "ln a < ln b ⇔ a < b ; ln x < 0 sur ]0 ; 1[ et ln x > 0 sur ]1 ; +∞[.",
            "lim(x→+∞) ln x = +∞ et lim(x→0⁺) ln x = -∞ (asymptote verticale x = 0).",
            "Croissances comparées : ln x / xⁿ → 0 en +∞ et xⁿ ln x → 0 en 0⁺.",
            "ln est concave : ln x ≤ x - 1 pour tout x > 0.",
            "(ln u)' = u'/u, avec u > 0 : ln(u) a les mêmes variations que u.",
          ],
          example: {
            statement: "Étudier la fonction f définie sur ]0 ; +∞[ par f(x) = x - ln x : limites aux bornes, variations, puis en déduire que ln x < x pour tout x > 0.",
            solution: [
              "En 0⁺ : x tend vers 0 et -ln x vers +∞, donc lim(x→0⁺) f(x) = +∞.",
              "En +∞ : forme indéterminée « ∞ - ∞ ». On factorise : f(x) = x(1 - ln x / x). Par croissances comparées, ln x / x tend vers 0, donc la parenthèse tend vers 1 et lim(x→+∞) f(x) = +∞.",
              "f'(x) = 1 - 1/x = (x - 1)/x. Sur ]0 ; +∞[, x > 0, donc f'(x) est du signe de x - 1.",
              "f est strictement décroissante sur ]0 ; 1] et strictement croissante sur [1 ; +∞[, avec un minimum f(1) = 1 - ln 1 = 1.",
              "Pour tout x > 0, f(x) ≥ 1 > 0, donc x - ln x > 0 : ln x < x pour tout x > 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer les dérivées des fonctions suivantes sur l'intervalle indiqué : f(x) = 3 ln x - x² sur ]0 ; +∞[ ; g(x) = x ln x sur ]0 ; +∞[ ; h(x) = ln(2x + 4) sur ]-2 ; +∞[.",
              hint: "g est un produit (u v)' = u'v + uv'. Pour h, utilisez (ln u)' = u'/u avec u(x) = 2x + 4.",
              solution: [
                "f'(x) = 3 × 1/x - 2x = 3/x - 2x.",
                "g'(x) = 1 × ln x + x × 1/x = ln x + 1.",
                "Sur ]-2 ; +∞[, 2x + 4 > 0 et h'(x) = 2/(2x + 4) = 1/(x + 2).",
              ],
            },
            {
              level: 2,
              statement: "Déterminer les limites suivantes : a) lim(x→+∞) (x - 3 ln x) ; b) lim(x→0⁺) (ln x)/x ; c) lim(x→0⁺) x² ln x.",
              hint: "a) Factorisez par x. b) Vérifiez d'abord s'il s'agit vraiment d'une forme indéterminée. c) Écrivez x² ln x = x × (x ln x).",
              solution: [
                "a) x - 3 ln x = x(1 - 3 ln x / x). Par croissances comparées, ln x / x tend vers 0, donc la parenthèse tend vers 1 et la limite vaut +∞.",
                "b) Quand x tend vers 0⁺, ln x tend vers -∞ et 1/x vers +∞ : ce n'est pas une forme indéterminée. Le produit ln x × 1/x tend vers -∞.",
                "c) x² ln x = x × (x ln x), avec x qui tend vers 0 et x ln x qui tend vers 0 (croissances comparées). La limite vaut 0.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On considère la fonction f définie sur ]0 ; +∞[ par f(x) = (ln x)/x. 1. Déterminer les limites de f en 0 et en +∞ et interpréter graphiquement. 2. Démontrer que f'(x) = (1 - ln x)/x², puis étudier les variations de f. 3. En déduire que, pour tout x > 0, ln x ≤ x/e. 4. Résoudre l'équation f(x) = 0.",
              hint: "Pour la dérivée, utilisez la formule (u/v)' = (u'v - uv')/v². Le signe de 1 - ln x se trouve en résolvant ln x < 1, c'est-à-dire x < e.",
              solution: [
                "1. En 0⁺ : ln x tend vers -∞ et 1/x vers +∞, donc f(x) tend vers -∞ : la droite x = 0 est asymptote verticale. En +∞ : f(x) tend vers 0 par croissances comparées : la droite y = 0 est asymptote horizontale.",
                "2. f'(x) = ((1/x) × x - ln x × 1)/x² = (1 - ln x)/x². Comme x² > 0, f'(x) est du signe de 1 - ln x.",
                "1 - ln x > 0 ⇔ ln x < 1 ⇔ x < e. Donc f est strictement croissante sur ]0 ; e] et strictement décroissante sur [e ; +∞[, avec un maximum f(e) = (ln e)/e = 1/e.",
                "3. Pour tout x > 0, f(x) ≤ 1/e, soit (ln x)/x ≤ 1/e. En multipliant par x > 0 : ln x ≤ x/e.",
                "4. f(x) = 0 ⇔ ln x = 0 ⇔ x = 1. L'unique solution est x = 1.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque limite ou dérivée à sa valeur.",
            pairs: [
              { left: "lim(x→+∞) ln x", right: "+∞" },
              { left: "lim(x→0⁺) ln x", right: "-∞" },
              { left: "lim(x→+∞) ln x / x", right: "0" },
              { left: "ln'(x)", right: "1/x" },
              { left: "(ln u)'", right: "u'/u" },
              { left: "lim(h→0) ln(1 + h)/h", right: "1" },
            ],
          },
          quiz: [
            {
              q: "La dérivée de f(x) = ln(5x) sur ]0 ; +∞[ est :",
              options: ["5/x", "1/(5x)", "1/x", "5 ln x"],
              answer: 2,
              why: "(ln u)' = u'/u = 5/(5x) = 1/x. On peut aussi écrire ln(5x) = ln 5 + ln x.",
            },
            {
              q: "lim(x→0⁺) x ln x vaut :",
              options: ["0", "-∞", "1", "+∞"],
              answer: 0,
              why: "C'est une croissance comparée : la puissance de x l'emporte sur le logarithme.",
            },
            {
              q: "Sur ]0 ; 1[, ln x est :",
              options: ["strictement positif", "strictement négatif", "nul", "de signe variable"],
              answer: 1,
              why: "ln est strictement croissante et ln 1 = 0 : pour 0 < x < 1, ln x < ln 1 = 0.",
            },
            {
              q: "Une équation de la tangente à la courbe de ln au point d'abscisse 1 est :",
              options: ["y = x", "y = x + 1", "y = 1/x", "y = x - 1"],
              answer: 3,
              why: "y = ln'(1)(x - 1) + ln 1 = 1 × (x - 1) + 0.",
            },
            {
              q: "Quelle est la limite de ln(x) / x² quand x tend vers +∞ ?",
              options: ["+∞", "0", "1", "C'est une forme indéterminée sans limite"],
              answer: 1,
              why: "Par croissances comparées, ln x / xⁿ tend vers 0 en +∞ pour tout entier n ≥ 1.",
            },
          ],
          trap: "Croire qu'une expression comme (ln x)/x en 0⁺ est une forme indéterminée (c'est « -∞ × +∞ », qui donne -∞), ou appliquer les croissances comparées sans avoir d'abord identifié une vraie forme indéterminée.",
          method: "Devant une limite, remplacez d'abord mentalement chaque morceau par sa limite. Si vous obtenez une forme indéterminée, factorisez par le terme dominant pour faire apparaître ln x / x ou x ln x, dont vous connaissez la limite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ln-equations-seuils',
          title: 'Équations, inéquations et recherche de seuils avec ln',
          minutes: 30,
          objectives: [
            "Résoudre des équations et des inéquations faisant intervenir ln ou exp, en déterminant d'abord leur domaine de validité.",
            "Déterminer le plus petit entier n tel que qⁿ dépasse un seuil, ou passe sous un seuil, à l'aide du logarithme.",
            "Justifier le changement de sens d'une inégalité lors d'une division par un logarithme négatif.",
          ],
          course: [
            {
              heading: "D'abord le domaine",
              paragraphs: [
                "Une expression ln(u(x)) n'existe que si u(x) > 0. Avant toute résolution, on détermine donc l'ensemble des réels x pour lesquels tous les logarithmes de l'équation sont définis. Les solutions trouvées par le calcul ne sont retenues que si elles appartiennent à ce domaine.",
                "Exemple : pour ln(x - 3) = ln(2x - 10), il faut x > 3 et x > 5, donc x > 5. Le calcul donne x - 3 = 2x - 10, soit x = 7, qui est bien supérieur à 5 : la solution est 7. Si le calcul avait donné 4, il aurait fallu la rejeter.",
              ],
              box: { label: "Règle", text: "Pour a > 0 et b > 0 : ln a = ln b ⇔ a = b et ln a < ln b ⇔ a < b. Pour tout réel k : ln x = k ⇔ x = eᵏ et ln x < k ⇔ 0 < x < eᵏ." },
            },
            {
              heading: "Équations et inéquations avec exp et ln",
              paragraphs: [
                "Les fonctions exp et ln sont strictement croissantes : les appliquer aux deux membres d'une inégalité conserve son sens. Ainsi eˣ < 3 ⇔ x < ln 3, et ln x ≥ 2 ⇔ x ≥ e². Pour une inéquation comme ln(2x - 1) ≤ ln(x + 3), on se place sur le domaine puis on compare directement 2x - 1 et x + 3.",
                "Une puissance de base strictement positive s'écrit avec l'exponentielle : qⁿ = e^(n ln q). Par conséquent ln(qⁿ) = n ln q, ce qui permet de « faire descendre » un exposant inconnu. C'est la clé de la recherche de seuils.",
              ],
            },
            {
              heading: "Recherche de seuil pour une suite géométrique",
              paragraphs: [
                "On cherche souvent le plus petit entier n tel que qⁿ < s (avec 0 < q < 1) ou qⁿ > s (avec q > 1). On applique ln, qui conserve l'ordre : n ln q < ln s. Il faut ensuite diviser par ln q, et son signe décide de tout : si 0 < q < 1, ln q < 0 et le sens de l'inégalité change ; si q > 1, ln q > 0 et le sens est conservé.",
                "Exemple : 0,8ⁿ < 0,01 ⇔ n ln 0,8 < ln 0,01 ⇔ n > ln 0,01 / ln 0,8 (car ln 0,8 < 0). Or ln 0,01 / ln 0,8 ≈ 20,6, donc le plus petit entier est n = 21. Contrôle : 0,8²⁰ ≈ 0,0115 et 0,8²¹ ≈ 0,0092.",
                "Un autre exemple classique : un capital placé à 3 % par an est multiplié par 1,03 chaque année. Il double dès que 1,03ⁿ ≥ 2, soit n ≥ ln 2 / ln 1,03 ≈ 23,4 : il faut 24 ans.",
              ],
              box: { label: "À retenir", text: "Si 0 < q < 1, alors ln q < 0 : diviser par ln q change le sens de l'inégalité. Le seuil est le premier entier qui vérifie l'inégalité obtenue." },
            },
            {
              heading: "Le lien avec l'algorithme de seuil",
              paragraphs: [
                "Le même seuil peut être obtenu par un algorithme : on part de u = u₀ et n = 0, puis tant que la condition d'arrêt n'est pas atteinte, on remplace u par q × u et n par n + 1. La valeur finale de n est le seuil cherché.",
                "Le logarithme donne la réponse exacte en une ligne de calcul, sans boucle. Les deux méthodes doivent concorder : l'algorithme est un excellent moyen de vérifier un résultat obtenu avec ln, et inversement.",
              ],
            },
          ],
          keyPoints: [
            "Toujours déterminer le domaine : ln(u(x)) exige u(x) > 0.",
            "ln a = ln b ⇔ a = b et ln a < ln b ⇔ a < b, pour a, b > 0.",
            "exp et ln sont strictement croissantes : les appliquer conserve le sens d'une inégalité.",
            "ln(qⁿ) = n ln q permet de résoudre qⁿ < s.",
            "Si 0 < q < 1, ln q < 0 : diviser par ln q change le sens de l'inégalité.",
            "Le seuil est un entier : on prend le premier entier qui convient, puis on contrôle à la calculatrice.",
          ],
          example: {
            statement: "Résoudre l'inéquation ln(2x - 1) ≤ ln(x + 3).",
            solution: [
              "Domaine : il faut 2x - 1 > 0 et x + 3 > 0, c'est-à-dire x > ½ et x > -3, soit x > ½.",
              "Sur ]½ ; +∞[, ln est strictement croissante, donc ln(2x - 1) ≤ ln(x + 3) ⇔ 2x - 1 ≤ x + 3.",
              "2x - 1 ≤ x + 3 ⇔ x ≤ 4.",
              "On croise avec le domaine : ½ < x ≤ 4.",
              "L'ensemble des solutions est S = ]½ ; 4].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre : a) ln x = -2 ; b) ln(x - 1) = ln 5 ; c) eˣ ≥ 3.",
              hint: "Commencez par le domaine pour a) et b). Pour c), appliquez ln, qui conserve le sens de l'inégalité.",
              solution: [
                "a) Domaine : x > 0. ln x = -2 ⇔ x = e⁻², qui est bien positif. Solution : e⁻² ≈ 0,135.",
                "b) Domaine : x > 1. ln(x - 1) = ln 5 ⇔ x - 1 = 5 ⇔ x = 6, qui est bien supérieur à 1. Solution : 6.",
                "c) eˣ ≥ 3 ⇔ x ≥ ln 3. S = [ln 3 ; +∞[.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre l'inéquation ln x + ln(x + 1) ≤ ln 6.",
              hint: "Domaine : x > 0 et x + 1 > 0. Regroupez ensuite le membre de gauche en un seul logarithme.",
              solution: [
                "Domaine : x > 0 et x > -1, donc x > 0.",
                "Pour x > 0 : ln x + ln(x + 1) = ln(x(x + 1)) = ln(x² + x).",
                "ln(x² + x) ≤ ln 6 ⇔ x² + x ≤ 6 ⇔ x² + x - 6 ≤ 0 ⇔ (x - 2)(x + 3) ≤ 0.",
                "Le trinôme est négatif ou nul entre ses racines : -3 ≤ x ≤ 2.",
                "Avec le domaine x > 0 : S = ]0 ; 2].",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On injecte à un patient 20 mg d'un médicament. Chaque heure, la quantité présente dans le sang diminue de 15 %. On note uₙ la quantité (en mg) présente au bout de n heures, avec u₀ = 20. 1. Justifier que uₙ = 20 × 0,85ⁿ. 2. Déterminer, à l'aide du logarithme, le plus petit entier n tel que uₙ < 1. 3. Un élève propose l'algorithme suivant : u prend la valeur 20, n prend la valeur 0 ; tant que u ≥ 1, u prend la valeur 0,85 × u et n prend la valeur n + 1 ; afficher n. Quelle valeur affiche-t-il ?",
              hint: "Une diminution de 15 % revient à multiplier par 0,85. Pour la question 2, isolez 0,85ⁿ, appliquez ln, puis attention au signe de ln 0,85.",
              solution: [
                "1. Diminuer de 15 % revient à multiplier par 1 - 0,15 = 0,85 : (uₙ) est géométrique de raison 0,85 et de premier terme 20, donc uₙ = 20 × 0,85ⁿ.",
                "2. uₙ < 1 ⇔ 0,85ⁿ < 1/20 = 0,05 ⇔ n ln 0,85 < ln 0,05 (ln est strictement croissante).",
                "ln 0,85 < 0, donc en divisant le sens change : n > ln 0,05 / ln 0,85 ≈ 18,4.",
                "Le plus petit entier est n = 19. Contrôle : u₁₈ ≈ 1,07 > 1 et u₁₉ ≈ 0,91 < 1.",
                "3. La boucle s'arrête au premier n pour lequel u < 1 : l'algorithme affiche 19, en accord avec le calcul.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la recherche du plus petit entier n tel que 500 × 0,9ⁿ < 50.",
            items: [
              "Écrire l'inégalité à résoudre : 500 × 0,9ⁿ < 50.",
              "Isoler la puissance : 0,9ⁿ < 0,1.",
              "Appliquer ln, strictement croissante : n ln 0,9 < ln 0,1.",
              "Diviser par ln 0,9, qui est négatif, en changeant le sens : n > ln 0,1 / ln 0,9.",
              "Calculer : ln 0,1 / ln 0,9 ≈ 21,9.",
              "Conclure : le plus petit entier qui convient est n = 22.",
            ],
          },
          quiz: [
            {
              q: "Le domaine de l'équation ln(x - 2) = ln(4 - x) est :",
              options: ["]2 ; 4[", "]2 ; +∞[", "]-∞ ; 4[", "R"],
              answer: 0,
              why: "Il faut x - 2 > 0 et 4 - x > 0, c'est-à-dire 2 < x < 4.",
            },
            {
              q: "L'inéquation ln x < 1 a pour ensemble de solutions :",
              options: ["]-∞ ; e[", "]0 ; e[", "]0 ; 1[", "]e ; +∞["],
              answer: 1,
              why: "ln x < 1 = ln e ⇔ 0 < x < e : il faut aussi x > 0 pour que ln x existe.",
            },
            {
              q: "0,7ⁿ < 0,2 équivaut à :",
              options: ["n < ln 0,2 / ln 0,7", "n > ln 0,7 / ln 0,2", "n > ln 0,2 / ln 0,7"],
              answer: 2,
              why: "n ln 0,7 < ln 0,2, puis on divise par ln 0,7 < 0, ce qui change le sens.",
            },
            {
              q: "Le plus petit entier n tel que 2ⁿ > 1000 est :",
              options: ["9", "11", "100", "10"],
              answer: 3,
              why: "n > ln 1000 / ln 2 ≈ 9,97, donc n = 10 (2¹⁰ = 1024).",
            },
            {
              q: "Pour une suite de raison q avec 0 < q < 1, le nombre ln q est :",
              options: ["positif", "négatif", "nul"],
              answer: 1,
              why: "ln est strictement croissante et ln 1 = 0, donc ln q < 0 pour 0 < q < 1.",
            },
          ],
          trap: "Diviser par ln q sans changer le sens de l'inégalité alors que 0 < q < 1 (ln q est négatif), ou garder une solution qui n'appartient pas au domaine de l'équation.",
          method: "Écrivez toujours le domaine en première ligne, et, au moment de diviser par un logarithme, notez son signe entre parenthèses (« car ln 0,85 < 0 »). Terminez par un contrôle à la calculatrice des deux entiers qui encadrent le seuil.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES FONCTIONS SINUS ET COSINUS                                         */
    /* ==================================================================== */
    {
      id: 'sinus-cosinus',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sinus-cosinus-proprietes',
          title: 'Sinus et cosinus : parité, périodicité, dérivées',
          minutes: 30,
          objectives: [
            "Connaître les fonctions sinus et cosinus, leur parité et leur périodicité.",
            "Utiliser les dérivées sin' = cos et cos' = -sin, et dériver x ↦ cos(ax + b) et x ↦ sin(ax + b).",
            "Connaître et utiliser la limite de sin(x)/x en 0.",
          ],
          course: [
            {
              heading: "Rappels : le cercle trigonométrique",
              paragraphs: [
                "Sur le cercle trigonométrique (centre O, rayon 1, orienté dans le sens inverse des aiguilles d'une montre), à tout réel x on associe un point M. Le cosinus de x est l'abscisse de M et le sinus de x est son ordonnée. On définit ainsi deux fonctions sur R, à valeurs dans [-1 ; 1], et pour tout réel x : cos²x + sin²x = 1.",
                "Les valeurs remarquables sont à connaître : cos 0 = 1 et sin 0 = 0 ; cos(π/6) = √3/2 et sin(π/6) = ½ ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = ½ et sin(π/3) = √3/2 ; cos(π/2) = 0 et sin(π/2) = 1 ; cos π = -1 et sin π = 0.",
              ],
            },
            {
              heading: "Parité et périodicité",
              paragraphs: [
                "Les points associés à x et à -x sont symétriques par rapport à l'axe des abscisses : ils ont la même abscisse et des ordonnées opposées. Donc cos(-x) = cos x et sin(-x) = -sin x. La fonction cosinus est paire (sa courbe est symétrique par rapport à l'axe des ordonnées) et la fonction sinus est impaire (sa courbe est symétrique par rapport à l'origine).",
                "Ajouter 2π revient à faire un tour complet du cercle : cos(x + 2π) = cos x et sin(x + 2π) = sin x. Les deux fonctions sont périodiques de période 2π : leurs courbes se reproduisent à l'identique par translation de 2π, comme un motif de papier peint. Il suffit donc de les étudier sur un intervalle de longueur 2π, puis, grâce à la parité, sur [0 ; π].",
              ],
              box: { label: "Propriété", text: "Pour tout réel x : cos(-x) = cos x (cosinus est paire) ; sin(-x) = -sin x (sinus est impaire) ; cos(x + 2π) = cos x et sin(x + 2π) = sin x (période 2π)." },
            },
            {
              heading: "Dérivées de sinus et de cosinus",
              paragraphs: [
                "Les fonctions sinus et cosinus sont dérivables sur R, et pour tout réel x : sin'(x) = cos x et cos'(x) = -sin x. Sur [0 ; π], sin x ≥ 0 donc cosinus est décroissante de 1 à -1 ; cos x ≥ 0 sur [0 ; π/2] et ≤ 0 sur [π/2 ; π], donc sinus croît de 0 à 1 puis décroît de 1 à 0.",
                "Avec la dérivée d'une composée, pour des réels a et b : (cos(ax + b))' = -a sin(ax + b) et (sin(ax + b))' = a cos(ax + b). Plus généralement, si u est dérivable : (cos u)' = -u' sin u et (sin u)' = u' cos u. Exemple : la dérivée de x ↦ sin(3x - 1) est x ↦ 3 cos(3x - 1). Une fonction comme x ↦ cos(ωx) a pour période 2π/ω (ω > 0) : c'est le modèle des phénomènes oscillants (son, courant alternatif, ressort).",
              ],
              box: { label: "Formule", text: "sin' = cos et cos' = -sin. (sin(ax + b))' = a cos(ax + b) ; (cos(ax + b))' = -a sin(ax + b). Plus généralement : (sin u)' = u' cos u et (cos u)' = -u' sin u." },
            },
            {
              heading: "La limite de sin(x)/x en 0",
              paragraphs: [
                "Quand x tend vers 0, sin x et x tendent tous deux vers 0 : sin(x)/x est une forme indéterminée « 0/0 ». On la lève en reconnaissant un taux de variation : sin(x)/x = (sin x - sin 0)/(x - 0). Sa limite est le nombre dérivé de sinus en 0, c'est-à-dire cos 0 = 1.",
                "Ainsi lim(x→0) sin(x)/x = 1 : pour x proche de 0, sin x est proche de x (en radians). De même, (cos x - 1)/x est le taux de variation de cosinus en 0, donc lim(x→0) (cos x - 1)/x = -sin 0 = 0.",
              ],
              box: { label: "À retenir", text: "lim(x→0) sin(x)/x = 1 et lim(x→0) (cos x - 1)/x = 0 : ce sont les nombres dérivés de sin et de cos en 0." },
            },
          ],
          keyPoints: [
            "cos et sin sont définies sur R, à valeurs dans [-1 ; 1], avec cos²x + sin²x = 1.",
            "cos est paire, sin est impaire ; toutes deux sont 2π-périodiques.",
            "sin' = cos et cos' = -sin.",
            "(sin(ax + b))' = a cos(ax + b) et (cos(ax + b))' = -a sin(ax + b).",
            "lim(x→0) sin(x)/x = 1, car c'est le nombre dérivé de sin en 0.",
            "x ↦ cos(ωx) et x ↦ sin(ωx) ont pour période 2π/ω.",
          ],
          example: {
            statement: "On considère la fonction f définie sur R par f(x) = sin(2x). 1. Démontrer que f est impaire et périodique de période π. 2. Calculer f'(x) et donner une équation de la tangente à la courbe de f au point d'abscisse 0.",
            solution: [
              "1. Pour tout réel x : f(-x) = sin(-2x) = -sin(2x) = -f(x), car sinus est impaire. Donc f est impaire.",
              "f(x + π) = sin(2x + 2π) = sin(2x) = f(x), car sinus est 2π-périodique. Donc f est périodique de période π.",
              "2. Avec (sin(ax + b))' = a cos(ax + b) et a = 2 : f'(x) = 2 cos(2x).",
              "f(0) = sin 0 = 0 et f'(0) = 2 cos 0 = 2.",
              "La tangente au point d'abscisse 0 a pour équation y = f'(0)(x - 0) + f(0), soit y = 2x.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la dérivée de chacune des fonctions suivantes, définies sur R : f(x) = 3 sin x - 2 cos x ; g(x) = cos(5x - 1) ; h(x) = x sin x.",
              hint: "Utilisez sin' = cos, cos' = -sin, la formule pour cos(ax + b) et la dérivée d'un produit (uv)' = u'v + uv'.",
              solution: [
                "f'(x) = 3 cos x - 2 × (-sin x) = 3 cos x + 2 sin x.",
                "g'(x) = -5 sin(5x - 1).",
                "h'(x) = 1 × sin x + x × cos x = sin x + x cos x.",
              ],
            },
            {
              level: 2,
              statement: "Étudier la parité des fonctions f(x) = x² cos x et g(x) = x + sin x, définies sur R. Démontrer ensuite que h(x) = cos(3x) est périodique de période 2π/3.",
              hint: "Calculez f(-x) et g(-x) en utilisant la parité de cos et de sin. Pour h, calculez h(x + 2π/3).",
              solution: [
                "f(-x) = (-x)² cos(-x) = x² cos x = f(x) : f est paire.",
                "g(-x) = -x + sin(-x) = -x - sin x = -(x + sin x) = -g(x) : g est impaire.",
                "h(x + 2π/3) = cos(3(x + 2π/3)) = cos(3x + 2π) = cos(3x) = h(x).",
                "Donc h est périodique de période 2π/3.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Déterminer les limites suivantes en justifiant : a) lim(x→0) sin(3x)/x ; b) lim(x→+∞) sin(x)/x ; c) lim(x→+∞) (x + cos x).",
              hint: "a) Faites apparaître sin(X)/X avec X = 3x. b) Encadrez sin x entre -1 et 1 puis utilisez le théorème des gendarmes. c) Minorez cos x par -1.",
              solution: [
                "a) Pour x ≠ 0 : sin(3x)/x = 3 × sin(3x)/(3x). Quand x tend vers 0, X = 3x tend vers 0 et sin(X)/X tend vers 1. La limite vaut 3 × 1 = 3.",
                "b) Pour x > 0 : -1 ≤ sin x ≤ 1, donc -1/x ≤ sin(x)/x ≤ 1/x. Comme -1/x et 1/x tendent vers 0 en +∞, le théorème des gendarmes donne une limite égale à 0.",
                "c) Pour tout réel x : cos x ≥ -1, donc x + cos x ≥ x - 1. Comme x - 1 tend vers +∞, le théorème de comparaison donne lim(x→+∞) (x + cos x) = +∞.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa valeur ou à sa dérivée.",
            pairs: [
              { left: "cos(-x)", right: "cos x (cosinus est paire)" },
              { left: "sin(-x)", right: "-sin x (sinus est impaire)" },
              { left: "sin(x + 2π)", right: "sin x (période 2π)" },
              { left: "Dérivée de x ↦ sin x", right: "x ↦ cos x" },
              { left: "Dérivée de x ↦ cos x", right: "x ↦ -sin x" },
              { left: "Dérivée de x ↦ cos(3x)", right: "x ↦ -3 sin(3x)" },
            ],
          },
          quiz: [
            {
              q: "La dérivée de la fonction x ↦ cos x est :",
              options: ["x ↦ sin x", "x ↦ -cos x", "x ↦ -sin x", "x ↦ 1/cos x"],
              answer: 2,
              why: "cos' = -sin. Le signe moins est l'oubli le plus fréquent.",
            },
            {
              q: "La fonction sinus est :",
              options: ["impaire", "paire", "ni paire ni impaire"],
              answer: 0,
              why: "sin(-x) = -sin x pour tout réel x : sa courbe est symétrique par rapport à l'origine.",
            },
            {
              q: "lim(x→0) sin(x)/x vaut :",
              options: ["0", "+∞", "elle n'existe pas", "1"],
              answer: 3,
              why: "C'est le nombre dérivé de sinus en 0, égal à cos 0 = 1.",
            },
            {
              q: "La dérivée de x ↦ sin(4x + 1) est :",
              options: ["x ↦ cos(4x + 1)", "x ↦ 4 cos(4x + 1)", "x ↦ -4 cos(4x + 1)", "x ↦ 4 sin(4x + 1)"],
              answer: 1,
              why: "(sin(ax + b))' = a cos(ax + b), ici avec a = 4.",
            },
            {
              q: "La fonction x ↦ cos(2x) est périodique de période :",
              options: ["2π", "4π", "π", "π/4"],
              answer: 2,
              why: "cos(2(x + π)) = cos(2x + 2π) = cos(2x) : la période est 2π/2 = π.",
            },
          ],
          trap: "Oublier le signe moins dans cos' = -sin, ou oublier le facteur a dans la dérivée de cos(ax + b) (la dérivée de cos(3x) est -3 sin(3x), pas -sin(3x)).",
          method: "Pour retenir les dérivées, pensez au cycle sin → cos → -sin → -cos → sin : chaque dérivation fait avancer d'un cran. Vérifiez ensuite sur une valeur simple : en 0, sinus croît (pente cos 0 = 1), ce qui confirme sin' = cos.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etude-trigonometrique',
          title: 'Étudier une fonction trigonométrique',
          minutes: 35,
          objectives: [
            "Réduire l'intervalle d'étude d'une fonction trigonométrique à l'aide de la parité et de la périodicité.",
            "Résoudre sur un intervalle des équations et inéquations du type cos x = a ou sin x ≥ a à l'aide du cercle trigonométrique.",
            "Étudier le signe de la dérivée d'une fonction trigonométrique et dresser son tableau de variations.",
          ],
          course: [
            {
              heading: "Réduire l'intervalle d'étude",
              paragraphs: [
                "Si une fonction f est périodique de période T, sa courbe sur R s'obtient à partir de sa courbe sur un intervalle de longueur T, par des translations successives de vecteur T i⃗. Si de plus f est paire ou impaire, il suffit de l'étudier sur [0 ; T/2] : on complète par symétrie (axe des ordonnées si f est paire, origine si f est impaire), puis par translation.",
                "Exemple : f(x) = sin x (1 + cos x) est 2π-périodique (sin et cos le sont) et impaire (sin(-x)(1 + cos(-x)) = -sin x (1 + cos x)). On l'étudie sur [0 ; π] seulement : quatre fois moins de travail que sur [-2π ; 2π].",
              ],
              box: { label: "À retenir", text: "Période T et parité : étude sur [0 ; T/2], puis symétrie (paire : axe des ordonnées ; impaire : origine), puis translations de T." },
            },
            {
              heading: "Équations et inéquations trigonométriques",
              paragraphs: [
                "Pour un réel a, cos x = cos a ⇔ x = a + 2kπ ou x = -a + 2kπ (k entier relatif), et sin x = sin a ⇔ x = a + 2kπ ou x = π - a + 2kπ. Sur un intervalle donné, on ne garde que les valeurs qui lui appartiennent. Exemple : sur [0 ; 2π[, cos x = ½ ⇔ x = π/3 ou x = 5π/3.",
                "Pour une inéquation, on raisonne sur le cercle trigonométrique : on repère les points dont l'abscisse (pour cos) ou l'ordonnée (pour sin) vérifie la condition, puis on lit l'arc correspondant. Exemple : sur [0 ; π], cos x > ½ ⇔ 0 ≤ x < π/3, car l'abscisse du point du cercle dépasse ½ seulement avant π/3. Sur [-π ; π], cos x ≥ ½ ⇔ -π/3 ≤ x ≤ π/3.",
              ],
              box: { label: "Propriété", text: "cos x = cos a ⇔ x = a + 2kπ ou x = -a + 2kπ. sin x = sin a ⇔ x = a + 2kπ ou x = π - a + 2kπ (k entier relatif)." },
            },
            {
              heading: "Le plan d'étude",
              paragraphs: [
                "On procède dans l'ordre : ensemble de définition, parité et périodicité (intervalle réduit), dérivée mise sous forme factorisée, signe de chaque facteur sur l'intervalle réduit (souvent en résolvant une inéquation trigonométrique), tableau de variations avec les valeurs exactes, puis tracé et prolongement de la courbe.",
                "Pour factoriser la dérivée, la relation sin²x = 1 - cos²x permet souvent de tout écrire en fonction de cos x, puis de reconnaître un trinôme en cos x. On peut alors poser X = cos x et factoriser comme un polynôme du second degré.",
              ],
            },
            {
              heading: "Quand la fonction n'est pas périodique",
              paragraphs: [
                "Une fonction comme x ↦ x + sin x ou x ↦ 2 sin x - x n'est pas périodique : on l'étudie directement sur l'intervalle demandé. Les encadrements -1 ≤ sin x ≤ 1 et -1 ≤ cos x ≤ 1 sont alors précieux pour obtenir des limites par comparaison.",
                "Exemple : x - 1 ≤ x + sin x ≤ x + 1 montre que x + sin x tend vers +∞ en +∞ et vers -∞ en -∞. Sa dérivée 1 + cos x est positive ou nulle et ne s'annule qu'en des points isolés (x = π + 2kπ) : la fonction est strictement croissante sur R.",
              ],
            },
          ],
          keyPoints: [
            "Périodique de période T et paire ou impaire : étude sur [0 ; T/2].",
            "cos x = cos a ⇔ x = ±a + 2kπ ; sin x = sin a ⇔ x = a + 2kπ ou π - a + 2kπ.",
            "Les inéquations se résolvent en lisant un arc sur le cercle trigonométrique.",
            "Factoriser la dérivée, en utilisant au besoin sin²x = 1 - cos²x.",
            "Les encadrements -1 ≤ sin x ≤ 1 et -1 ≤ cos x ≤ 1 donnent des limites par comparaison.",
          ],
          example: {
            statement: "On considère la fonction f définie sur R par f(x) = sin x (1 + cos x). 1. Justifier qu'il suffit d'étudier f sur [0 ; π]. 2. Démontrer que f'(x) = (2 cos x - 1)(cos x + 1). 3. Dresser le tableau de variations de f sur [0 ; π].",
            solution: [
              "1. f est 2π-périodique (sin et cos le sont) et impaire : f(-x) = -sin x (1 + cos x) = -f(x). L'étude sur [0 ; π] suffit, on complète par symétrie par rapport à l'origine puis par translation de 2π.",
              "2. Dérivée d'un produit : f'(x) = cos x (1 + cos x) + sin x × (-sin x) = cos x + cos²x - sin²x.",
              "Avec sin²x = 1 - cos²x : f'(x) = 2cos²x + cos x - 1. Or (2 cos x - 1)(cos x + 1) = 2cos²x + 2 cos x - cos x - 1 = 2cos²x + cos x - 1 : l'égalité est démontrée.",
              "3. Sur [0 ; π], cos x + 1 ≥ 0 (nul seulement en π) et 2 cos x - 1 > 0 ⇔ cos x > ½ ⇔ 0 ≤ x < π/3.",
              "Donc f'(x) > 0 sur [0 ; π/3[ et f'(x) ≤ 0 sur ]π/3 ; π] : f est croissante sur [0 ; π/3] et décroissante sur [π/3 ; π].",
              "Valeurs : f(0) = 0, f(π/3) = (√3/2)(1 + ½) = 3√3/4 ≈ 1,30 et f(π) = 0. Le maximum de f sur R est 3√3/4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre dans [0 ; 2π[ les équations : a) cos x = ½ ; b) sin x = -√2/2.",
              hint: "Cherchez une valeur remarquable a telle que cos a = ½ (ou sin a = -√2/2), puis utilisez les formules cos x = cos a et sin x = sin a.",
              solution: [
                "a) cos(π/3) = ½, donc cos x = ½ ⇔ x = π/3 + 2kπ ou x = -π/3 + 2kπ.",
                "Dans [0 ; 2π[ : x = π/3 ou x = -π/3 + 2π = 5π/3.",
                "b) sin(-π/4) = -√2/2, donc sin x = -√2/2 ⇔ x = -π/4 + 2kπ ou x = π + π/4 + 2kπ = 5π/4 + 2kπ.",
                "Dans [0 ; 2π[ : x = 5π/4 ou x = -π/4 + 2π = 7π/4.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction f définie sur [0 ; π] par f(x) = 2 sin x - x. Calculer f'(x), étudier son signe et dresser le tableau de variations de f.",
              hint: "f'(x) = 2 cos x - 1 : résolvez 2 cos x - 1 ≥ 0 sur [0 ; π] à l'aide du cercle.",
              solution: [
                "f'(x) = 2 cos x - 1.",
                "Sur [0 ; π], cosinus est décroissante et cos(π/3) = ½ : 2 cos x - 1 ≥ 0 ⇔ cos x ≥ ½ ⇔ 0 ≤ x ≤ π/3.",
                "f est croissante sur [0 ; π/3] et décroissante sur [π/3 ; π].",
                "f(0) = 0 ; f(π/3) = 2 × √3/2 - π/3 = √3 - π/3 ≈ 0,68 ; f(π) = 0 - π = -π.",
                "Tableau : f croît de 0 à √3 - π/3, puis décroît jusqu'à -π.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On considère la fonction f définie sur R par f(x) = cos(2x) + 2 cos x. On admet que, pour tout réel x, sin(2x) = 2 sin x cos x. 1. Démontrer que f est paire et 2π-périodique, et justifier qu'il suffit de l'étudier sur [0 ; π]. 2. Démontrer que f'(x) = -2 sin x (2 cos x + 1). 3. Étudier le signe de f'(x) sur [0 ; π] et dresser le tableau de variations de f sur [0 ; π]. 4. En déduire le minimum et le maximum de f sur R.",
              hint: "Pour la question 3, sin x ≥ 0 sur [0 ; π], et 2 cos x + 1 > 0 ⇔ cos x > -½ ⇔ x < 2π/3 sur [0 ; π]. N'oubliez pas le facteur -2.",
              solution: [
                "1. f(-x) = cos(-2x) + 2 cos(-x) = cos(2x) + 2 cos x = f(x) : f est paire. f(x + 2π) = cos(2x + 4π) + 2 cos(x + 2π) = f(x) : f est 2π-périodique. On étudie f sur [0 ; π], puis on complète par symétrie d'axe l'axe des ordonnées et par translation.",
                "2. f'(x) = -2 sin(2x) - 2 sin x = -4 sin x cos x - 2 sin x = -2 sin x (2 cos x + 1).",
                "3. Sur [0 ; π], sin x ≥ 0 (nul en 0 et π). 2 cos x + 1 > 0 ⇔ cos x > -½ ⇔ 0 ≤ x < 2π/3. Donc f'(x) = -2 sin x (2 cos x + 1) est négatif ou nul sur [0 ; 2π/3] et positif ou nul sur [2π/3 ; π].",
                "f est décroissante sur [0 ; 2π/3] et croissante sur [2π/3 ; π]. Valeurs : f(0) = 1 + 2 = 3 ; f(2π/3) = cos(4π/3) + 2 cos(2π/3) = -½ - 1 = -3/2 ; f(π) = cos(2π) + 2 cos π = 1 - 2 = -1.",
                "4. Sur [0 ; π], f prend toutes ses valeurs entre -3/2 et 3. Par parité et périodicité, il en est de même sur R : le minimum de f est -3/2 (atteint en 2π/3 + 2kπ et -2π/3 + 2kπ) et le maximum est 3 (atteint en 2kπ).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le plan d'étude d'une fonction trigonométrique.",
            items: [
              "Préciser l'ensemble de définition.",
              "Étudier la parité et la périodicité pour réduire l'intervalle d'étude.",
              "Calculer la dérivée et la factoriser.",
              "Étudier le signe de chaque facteur sur l'intervalle réduit, à l'aide du cercle.",
              "Dresser le tableau de variations avec les valeurs exactes.",
              "Tracer la courbe sur l'intervalle réduit, puis la compléter par symétrie et translation.",
            ],
          },
          quiz: [
            {
              q: "Dans [0 ; 2π[, l'équation sin x = ½ a pour solutions :",
              options: ["π/6 et 5π/6", "π/3 et 2π/3", "π/6 et 11π/6", "π/6 seulement"],
              answer: 0,
              why: "sin(π/6) = ½ et sin x = sin a ⇔ x = a ou π - a (modulo 2π) : π/6 et π - π/6 = 5π/6.",
            },
            {
              q: "Une fonction paire et périodique de période 2π peut être étudiée sur :",
              options: ["[0 ; 2π] seulement", "[0 ; π/2]", "[-π ; 0] ou [0 ; π]", "R tout entier obligatoirement"],
              answer: 2,
              why: "La période ramène à un intervalle de longueur 2π, comme [-π ; π], et la parité à sa moitié, [0 ; π] ou [-π ; 0].",
            },
            {
              q: "Sur [0 ; π], l'inéquation cos x ≥ 0 a pour ensemble de solutions :",
              options: ["[0 ; π]", "[π/2 ; π]", "[0 ; π/3]", "[0 ; π/2]"],
              answer: 3,
              why: "L'abscisse du point du cercle est positive ou nulle tant que x ≤ π/2.",
            },
            {
              q: "La fonction x ↦ x + sin x est :",
              options: ["périodique de période 2π", "strictement croissante sur R", "paire"],
              answer: 1,
              why: "Sa dérivée 1 + cos x est positive ou nulle et ne s'annule qu'en des points isolés. Elle est impaire, pas paire, et n'est pas périodique.",
            },
            {
              q: "Pour tout réel x, sin²x est égal à :",
              options: ["1 - cos²x", "1 + cos²x", "cos²x - 1", "sin(x²)"],
              answer: 0,
              why: "C'est la relation fondamentale cos²x + sin²x = 1.",
            },
          ],
          trap: "Oublier une des deux familles de solutions (par exemple ne garder que π/6 pour sin x = ½ et oublier 5π/6), ou étudier le signe de la dérivée sans tenir compte d'un facteur négatif comme -2.",
          method: "Dessinez systématiquement le cercle trigonométrique pour résoudre une équation ou une inéquation : placez les points, coloriez l'arc solution, puis lisez les bornes. Dans le tableau de signes, réservez une ligne à chaque facteur, y compris les constantes négatives.",
        },
      ],
    },
  ],
}
