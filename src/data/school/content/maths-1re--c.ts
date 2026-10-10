import type { UnitContent } from '../types'

// Notation : un vecteur est noté avec une flèche (u⃗, AB⃗), sa norme ‖u⃗‖,
// l'angle de deux vecteurs (u⃗, v⃗). Tout est écrit en Unicode, sans LaTeX.

export const CONTENT: UnitContent = {
  unit: 'maths-1re',
  chapters: [
    {
      id: 'produit-scalaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'definitions-produit-scalaire',
          title: 'Définitions du produit scalaire',
          minutes: 30,
          objectives: [
            "Calculer le produit scalaire de deux vecteurs à l'aide de leurs normes et d'un angle (formule avec le cosinus).",
            "Calculer un produit scalaire à l'aide d'une projection orthogonale.",
            "Exprimer le produit scalaire à l'aide des normes et l'utiliser dans un triangle dont on connaît les trois côtés.",
          ],
          course: [
            {
              heading: "Norme d'un vecteur et angle de deux vecteurs",
              paragraphs: [
                "La norme d'un vecteur u⃗, notée ‖u⃗‖, est sa longueur : si u⃗ = AB⃗, alors ‖u⃗‖ = AB. Dans un repère orthonormé, si u⃗ a pour coordonnées (x ; y), alors ‖u⃗‖ = √(x² + y²). Par exemple, u⃗(3 ; -4) a pour norme √(9 + 16) = √25 = 5.",
                "Pour parler de l'angle de deux vecteurs non nuls u⃗ et v⃗, on les dessine à partir d'une même origine A : u⃗ = AB⃗ et v⃗ = AC⃗. L'angle (u⃗, v⃗) est alors l'angle géométrique BAC, dont la mesure est comprise entre 0 et π radians (entre 0° et 180°). Comme le cosinus d'un angle et celui de son opposé sont égaux, l'orientation de l'angle n'a pas d'importance pour le produit scalaire.",
              ],
            },
            {
              heading: "Première définition : avec le cosinus",
              paragraphs: [
                "Le produit scalaire de deux vecteurs u⃗ et v⃗ est le nombre réel noté u⃗ · v⃗ (on lit « u scalaire v ») défini par u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗). Si l'un des deux vecteurs est nul, le produit scalaire vaut 0. Attention : le résultat n'est pas un vecteur mais un nombre, d'où le mot « scalaire ».",
                "Exemple : si AB = 4, AC = 3 et que l'angle BAC mesure π/3 (60°), alors AB⃗ · AC⃗ = 4 × 3 × cos(π/3) = 12 × ½ = 6. Une analogie vient de la physique : le travail d'une force constante F⃗ lors d'un déplacement AB⃗ est W = F⃗ · AB⃗. Une force qui tire dans le sens du mouvement travaille beaucoup, une force perpendiculaire au mouvement ne travaille pas du tout.",
                "Le signe du produit scalaire dépend de l'angle : il est strictement positif si l'angle est aigu, nul si l'angle est droit, strictement négatif si l'angle est obtus. Enfin, u⃗ · u⃗ = ‖u⃗‖² (car cos 0 = 1) : c'est le carré scalaire, noté aussi u⃗².",
              ],
              box: { label: "Définition", text: "Pour deux vecteurs non nuls : u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗). Si u⃗ = 0⃗ ou v⃗ = 0⃗, alors u⃗ · v⃗ = 0. En particulier, u⃗ · u⃗ = ‖u⃗‖²." },
            },
            {
              heading: "Deuxième expression : la projection orthogonale",
              paragraphs: [
                "Soit A, B, C trois points avec A ≠ B, et H le projeté orthogonal de C sur la droite (AB). Alors AB⃗ · AC⃗ = AB⃗ · AH⃗. Autrement dit, on peut remplacer C par son « ombre » H sur la droite (AB) : dans le triangle AHC rectangle en H, AH = AC × cos(BAC) lorsque l'angle est aigu.",
                "En pratique : si H est sur la demi-droite [AB), c'est-à-dire du même côté de A que B, alors AB⃗ · AC⃗ = AB × AH. Si H est de l'autre côté de A, alors AB⃗ · AC⃗ = -AB × AH. Exemple : dans un carré ABCD de côté 5, le projeté orthogonal de C sur (AB) est B, donc AB⃗ · AC⃗ = AB × AB = 25.",
              ],
              box: { label: "Propriété", text: "Si H est le projeté orthogonal de C sur (AB), alors AB⃗ · AC⃗ = AB⃗ · AH⃗ : il vaut AB × AH si H est sur [AB), et -AB × AH sinon." },
            },
            {
              heading: "Troisième expression : avec les normes",
              paragraphs: [
                "On démontre (à partir du développement de ‖u⃗ + v⃗‖², vu dans la leçon suivante) que u⃗ · v⃗ = ½(‖u⃗ + v⃗‖² - ‖u⃗‖² - ‖v⃗‖²), et aussi u⃗ · v⃗ = ½(‖u⃗‖² + ‖v⃗‖² - ‖u⃗ - v⃗‖²). Cette formule permet de calculer un produit scalaire sans connaître aucun angle.",
                "Dans un triangle ABC, avec u⃗ = AB⃗ et v⃗ = AC⃗, on a u⃗ - v⃗ = CB⃗, d'où AB⃗ · AC⃗ = ½(AB² + AC² - BC²). Exemple : si AB = 5, AC = 7 et BC = 6, alors AB⃗ · AC⃗ = ½(25 + 49 - 36) = ½ × 38 = 19.",
              ],
              box: { label: "Formule", text: "u⃗ · v⃗ = ½(‖u⃗ + v⃗‖² - ‖u⃗‖² - ‖v⃗‖²) = ½(‖u⃗‖² + ‖v⃗‖² - ‖u⃗ - v⃗‖²). Dans un triangle : AB⃗ · AC⃗ = ½(AB² + AC² - BC²)." },
            },
          ],
          keyPoints: [
            "u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗) : le produit scalaire est un nombre réel, pas un vecteur.",
            "Angle aigu : produit scalaire positif ; angle droit : nul ; angle obtus : négatif.",
            "u⃗ · u⃗ = ‖u⃗‖², le carré scalaire.",
            "Projection : si H est le projeté orthogonal de C sur (AB), AB⃗ · AC⃗ = AB⃗ · AH⃗ = ± AB × AH selon la position de H.",
            "Avec les longueurs : AB⃗ · AC⃗ = ½(AB² + AC² - BC²).",
          ],
          example: {
            statement: "ABC est un triangle équilatéral de côté 6 et I est le milieu de [BC]. Calculer AB⃗ · AC⃗, AB⃗ · AI⃗ et BC⃗ · AI⃗.",
            solution: [
              "Calcul de AB⃗ · AC⃗ : les angles d'un triangle équilatéral mesurent π/3, donc AB⃗ · AC⃗ = AB × AC × cos(π/3) = 6 × 6 × ½ = 18.",
              "Calcul de AB⃗ · AI⃗ : dans un triangle équilatéral, la médiane (AI) est aussi une hauteur, donc (AI) est perpendiculaire à (BC). Le projeté orthogonal de B sur la droite (AI) est donc I.",
              "Par la projection orthogonale, AI⃗ · AB⃗ = AI⃗ · AI⃗ = AI², et le produit scalaire est symétrique, donc AB⃗ · AI⃗ = AI².",
              "Dans le triangle ABI rectangle en I, le théorème de Pythagore donne AI² = AB² - BI² = 36 - 9 = 27. Donc AB⃗ · AI⃗ = 27.",
              "Calcul de BC⃗ · AI⃗ : les vecteurs BC⃗ et AI⃗ sont orthogonaux (angle droit, cos(π/2) = 0), donc BC⃗ · AI⃗ = 0.",
              "Conclusion : AB⃗ · AC⃗ = 18, AB⃗ · AI⃗ = 27 et BC⃗ · AI⃗ = 0.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère deux vecteurs u⃗ et v⃗ tels que ‖u⃗‖ = 3 et ‖v⃗‖ = 4. Calculer u⃗ · v⃗ dans chacun des cas suivants : a) (u⃗, v⃗) = π/3 ; b) (u⃗, v⃗) = π/2 ; c) (u⃗, v⃗) = 3π/4 ; d) (u⃗, v⃗) = π.",
              hint: "Appliquez u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗) avec les valeurs remarquables du cosinus : cos(π/3) = ½, cos(π/2) = 0, cos(3π/4) = -√2/2, cos(π) = -1.",
              solution: [
                "Dans tous les cas, ‖u⃗‖ × ‖v⃗‖ = 3 × 4 = 12, donc u⃗ · v⃗ = 12 × cos(u⃗, v⃗).",
                "a) u⃗ · v⃗ = 12 × ½ = 6.",
                "b) u⃗ · v⃗ = 12 × 0 = 0 : les vecteurs sont orthogonaux.",
                "c) u⃗ · v⃗ = 12 × (-√2/2) = -6√2 : l'angle est obtus, le produit scalaire est négatif.",
                "d) u⃗ · v⃗ = 12 × (-1) = -12 : les vecteurs sont colinéaires de sens contraires.",
              ],
            },
            {
              level: 2,
              statement: "ABCD est un rectangle tel que AB = 6 et AD = 4. Calculer, en justifiant, les produits scalaires suivants : a) AB⃗ · AC⃗ ; b) AD⃗ · AC⃗ ; c) AB⃗ · AD⃗ ; d) AB⃗ · CD⃗.",
              hint: "Pour a) et b), cherchez le projeté orthogonal de C sur la droite (AB), puis sur la droite (AD). Pour d), comparez les vecteurs CD⃗ et AB⃗.",
              solution: [
                "a) Le projeté orthogonal de C sur (AB) est B (car (BC) est perpendiculaire à (AB)). B est sur [AB), donc AB⃗ · AC⃗ = AB × AB = 6 × 6 = 36.",
                "b) Le projeté orthogonal de C sur (AD) est D. D est sur [AD), donc AD⃗ · AC⃗ = AD × AD = 4 × 4 = 16.",
                "c) Les droites (AB) et (AD) sont perpendiculaires, donc AB⃗ · AD⃗ = 0.",
                "d) Dans le rectangle, CD⃗ = -AB⃗ (même direction, même longueur, sens contraire). L'angle (AB⃗, CD⃗) vaut π, donc AB⃗ · CD⃗ = 6 × 6 × cos(π) = -36.",
                "Résultats : 36 ; 16 ; 0 ; -36.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. ABC est un triangle tel que AB = 4, AC = 5 et BC = 6. 1) Calculer AB⃗ · AC⃗. 2) En déduire la valeur exacte de cos(BAC). L'angle BAC est-il aigu ou obtus ? 3) On note H le projeté orthogonal de C sur la droite (AB). Calculer AH. 4) Calculer CA⃗ · CB⃗ puis cos(ACB).",
              hint: "Les trois longueurs sont connues : utilisez AB⃗ · AC⃗ = ½(AB² + AC² - BC²). Pour la question 3, comparez avec l'expression AB⃗ · AC⃗ = AB × AH.",
              solution: [
                "1) AB⃗ · AC⃗ = ½(AB² + AC² - BC²) = ½(16 + 25 - 36) = ½ × 5 = 2,5.",
                "2) On a aussi AB⃗ · AC⃗ = AB × AC × cos(BAC) = 20 cos(BAC). Donc 20 cos(BAC) = 2,5, d'où cos(BAC) = 2,5/20 = 1/8. Le cosinus est positif, donc l'angle BAC est aigu.",
                "3) Le produit scalaire est positif, donc H est sur la demi-droite [AB) et AB⃗ · AC⃗ = AB × AH. Ainsi 4 × AH = 2,5, d'où AH = 2,5/4 = 5/8 = 0,625.",
                "4) De même, CA⃗ · CB⃗ = ½(CA² + CB² - AB²) = ½(25 + 36 - 16) = ½ × 45 = 22,5.",
                "Puis CA⃗ · CB⃗ = CA × CB × cos(ACB) = 30 cos(ACB), donc cos(ACB) = 22,5/30 = 3/4.",
                "Conclusion : AB⃗ · AC⃗ = 2,5 ; cos(BAC) = 1/8 (angle aigu) ; AH = 5/8 ; CA⃗ · CB⃗ = 22,5 et cos(ACB) = 3/4.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation à ce que l'on sait du produit scalaire.",
            pairs: [
              { left: "Angle aigu entre u⃗ et v⃗", right: "u⃗ · v⃗ strictement positif" },
              { left: "Angle droit entre u⃗ et v⃗", right: "u⃗ · v⃗ = 0" },
              { left: "Angle obtus entre u⃗ et v⃗", right: "u⃗ · v⃗ strictement négatif" },
              { left: "u⃗ · u⃗", right: "‖u⃗‖², le carré scalaire" },
              { left: "½(AB² + AC² - BC²)", right: "AB⃗ · AC⃗ calculé avec les trois longueurs" },
              { left: "AB⃗ · AC⃗ quand le projeté de C sur (AB) est B", right: "AB²" },
            ],
          },
          quiz: [
            {
              q: "On donne ‖u⃗‖ = 2, ‖v⃗‖ = 5 et (u⃗, v⃗) = π/3. Que vaut u⃗ · v⃗ ?",
              options: ["5", "10", "5√3", "2,5"],
              answer: 0,
              why: "u⃗ · v⃗ = 2 × 5 × cos(π/3) = 10 × ½ = 5.",
            },
            {
              q: "Le produit scalaire de deux vecteurs est :",
              options: ["un vecteur", "une aire", "un nombre réel", "un angle"],
              answer: 2,
              why: "C'est un nombre réel (un scalaire), qui peut être positif, négatif ou nul.",
            },
            {
              q: "ABCD est un carré de côté 3. Que vaut AB⃗ · AC⃗ ?",
              options: ["9√2", "3", "18", "9"],
              answer: 3,
              why: "Le projeté orthogonal de C sur (AB) est B, donc AB⃗ · AC⃗ = AB × AB = 9.",
            },
            {
              q: "Si AB⃗ · AC⃗ < 0, alors l'angle BAC est :",
              options: ["aigu", "droit", "obtus"],
              answer: 2,
              why: "Un produit scalaire négatif correspond à un cosinus négatif, donc à un angle obtus.",
            },
            {
              q: "Dans un triangle ABC, AB = 3, AC = 4 et BC = 5. Que vaut AB⃗ · AC⃗ ?",
              options: ["12", "0", "6", "-12"],
              answer: 1,
              why: "AB⃗ · AC⃗ = ½(9 + 16 - 25) = 0 : le triangle est rectangle en A.",
            },
          ],
          trap: "Oublier le signe moins dans la méthode de projection : quand le projeté H n'est pas du même côté de A que B, le produit scalaire vaut -AB × AH. Autre erreur fréquente : écrire le produit scalaire comme un vecteur.",
          method: "Choisissez la formule selon les données : un angle connu, prenez le cosinus ; un angle droit ou un projeté visible, prenez la projection ; trois longueurs connues, prenez la formule avec les normes. Vérifiez ensuite que le signe du résultat correspond à l'angle (aigu ou obtus).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'calculs-produit-scalaire',
          title: 'Propriétés, orthogonalité et calcul en repère orthonormé',
          minutes: 30,
          objectives: [
            "Utiliser la symétrie et la bilinéarité du produit scalaire pour développer des expressions.",
            "Caractériser l'orthogonalité de deux vecteurs par un produit scalaire nul.",
            "Calculer un produit scalaire, une norme et un angle à partir des coordonnées dans un repère orthonormé.",
          ],
          course: [
            {
              heading: "Les règles de calcul",
              paragraphs: [
                "Le produit scalaire se manipule presque comme le produit de deux nombres. Pour tous vecteurs u⃗, v⃗, w⃗ et tout réel k : u⃗ · v⃗ = v⃗ · u⃗ (symétrie) ; (ku⃗) · v⃗ = k(u⃗ · v⃗) ; u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗ (distributivité). On résume les deux dernières règles en disant que le produit scalaire est bilinéaire.",
                "On en déduit des identités remarquables, en notant u⃗² = u⃗ · u⃗ = ‖u⃗‖² : (u⃗ + v⃗)² = u⃗² + 2u⃗ · v⃗ + v⃗², (u⃗ - v⃗)² = u⃗² - 2u⃗ · v⃗ + v⃗², et (u⃗ + v⃗) · (u⃗ - v⃗) = u⃗² - v⃗². La première donne ‖u⃗ + v⃗‖² = ‖u⃗‖² + 2u⃗ · v⃗ + ‖v⃗‖², ce qui démontre la formule du produit scalaire avec les normes.",
              ],
              box: { label: "Propriété", text: "u⃗ · v⃗ = v⃗ · u⃗ ; (ku⃗) · v⃗ = k(u⃗ · v⃗) ; u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗. Identités : (u⃗ ± v⃗)² = u⃗² ± 2u⃗ · v⃗ + v⃗² et (u⃗ + v⃗) · (u⃗ - v⃗) = u⃗² - v⃗²." },
            },
            {
              heading: "Orthogonalité",
              paragraphs: [
                "Deux vecteurs non nuls sont orthogonaux lorsque leurs directions sont perpendiculaires. Par convention, le vecteur nul est orthogonal à tout vecteur. Comme cos(π/2) = 0, on obtient une caractérisation très pratique : u⃗ et v⃗ sont orthogonaux si et seulement si u⃗ · v⃗ = 0.",
                "En conséquence, deux droites (AB) et (CD) sont perpendiculaires si et seulement si AB⃗ · CD⃗ = 0. C'est l'outil le plus rapide pour démontrer qu'un triangle est rectangle ou que deux droites sont perpendiculaires. Attention : un produit scalaire nul ne signifie pas que l'un des vecteurs est nul.",
              ],
              box: { label: "Propriété", text: "u⃗ et v⃗ sont orthogonaux si et seulement si u⃗ · v⃗ = 0. Les droites (AB) et (CD) sont perpendiculaires si et seulement si AB⃗ · CD⃗ = 0." },
            },
            {
              heading: "Calcul en repère orthonormé",
              paragraphs: [
                "Dans un repère orthonormé (O ; i⃗, j⃗), les vecteurs de base vérifient i⃗ · i⃗ = 1, j⃗ · j⃗ = 1 et i⃗ · j⃗ = 0. Si u⃗(x ; y) et v⃗(x' ; y'), alors u⃗ = xi⃗ + yj⃗ et v⃗ = x'i⃗ + y'j⃗. En développant par bilinéarité, tous les termes croisés disparaissent et il reste u⃗ · v⃗ = xx' + yy'.",
                "Exemple : u⃗(2 ; -3) et v⃗(4 ; 1) donnent u⃗ · v⃗ = 2 × 4 + (-3) × 1 = 8 - 3 = 5. Pour des points, on calcule d'abord les coordonnées des vecteurs : AB⃗(xB - xA ; yB - yA). Cette formule n'est valable que dans un repère orthonormé (axes perpendiculaires et même unité sur les deux axes).",
              ],
              box: { label: "Formule", text: "Dans un repère orthonormé, si u⃗(x ; y) et v⃗(x' ; y') : u⃗ · v⃗ = xx' + yy' et ‖u⃗‖ = √(x² + y²)." },
            },
            {
              heading: "Calculer un angle",
              paragraphs: [
                "En combinant la définition avec le cosinus et la formule en coordonnées, on obtient, pour deux vecteurs non nuls, cos(u⃗, v⃗) = (u⃗ · v⃗) ÷ (‖u⃗‖ × ‖v⃗‖). On en déduit l'angle, de façon exacte s'il s'agit d'une valeur remarquable, ou à la calculatrice sinon.",
                "Exemple : A(0 ; 0), B(2 ; 0) et C(1 ; 1). On a AB⃗(2 ; 0) et AC⃗(1 ; 1), donc AB⃗ · AC⃗ = 2 × 1 + 0 × 1 = 2, AB = 2 et AC = √2. Ainsi cos(BAC) = 2 ÷ (2√2) = 1/√2 = √2/2, et l'angle BAC mesure π/4, soit 45°.",
              ],
            },
          ],
          keyPoints: [
            "Le produit scalaire est symétrique et bilinéaire : on développe comme avec des nombres.",
            "(u⃗ + v⃗)² = u⃗² + 2u⃗ · v⃗ + v⃗² : ne pas oublier le double produit.",
            "u⃗ ⊥ v⃗ si et seulement si u⃗ · v⃗ = 0 ; (AB) ⊥ (CD) si et seulement si AB⃗ · CD⃗ = 0.",
            "En repère orthonormé : u⃗ · v⃗ = xx' + yy' et ‖u⃗‖ = √(x² + y²).",
            "cos(u⃗, v⃗) = u⃗ · v⃗ ÷ (‖u⃗‖ × ‖v⃗‖) permet de calculer un angle.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on donne A(1 ; 2), B(5 ; 4) et C(0 ; 4). 1) Démontrer que le triangle ABC est rectangle en A. 2) Calculer BA⃗ · BC⃗ puis la valeur exacte de cos(ABC).",
            solution: [
              "1) On calcule AB⃗(5 - 1 ; 4 - 2) = (4 ; 2) et AC⃗(0 - 1 ; 4 - 2) = (-1 ; 2).",
              "AB⃗ · AC⃗ = 4 × (-1) + 2 × 2 = -4 + 4 = 0. Les vecteurs sont orthogonaux, donc (AB) ⊥ (AC) : le triangle ABC est rectangle en A.",
              "2) BA⃗(1 - 5 ; 2 - 4) = (-4 ; -2) et BC⃗(0 - 5 ; 4 - 4) = (-5 ; 0). Donc BA⃗ · BC⃗ = (-4) × (-5) + (-2) × 0 = 20.",
              "BA = √(16 + 4) = √20 = 2√5 et BC = √(25 + 0) = 5.",
              "cos(ABC) = 20 ÷ (2√5 × 5) = 20 ÷ (10√5) = 2/√5 = 2√5/5.",
              "Vérification : dans le triangle rectangle en A, cos(ABC) = AB/BC = 2√5/5. Conclusion : BA⃗ · BC⃗ = 20 et cos(ABC) = 2√5/5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, on donne u⃗(3 ; -2), v⃗(4 ; 6) et w⃗(-1 ; 5). 1) Calculer u⃗ · v⃗, u⃗ · w⃗ et v⃗ · w⃗. 2) Calculer ‖w⃗‖. 3) Parmi ces trois vecteurs, lesquels sont orthogonaux ?",
              hint: "Appliquez xx' + yy' pour chaque couple, puis √(x² + y²) pour la norme.",
              solution: [
                "1) u⃗ · v⃗ = 3 × 4 + (-2) × 6 = 12 - 12 = 0.",
                "u⃗ · w⃗ = 3 × (-1) + (-2) × 5 = -3 - 10 = -13.",
                "v⃗ · w⃗ = 4 × (-1) + 6 × 5 = -4 + 30 = 26.",
                "2) ‖w⃗‖ = √((-1)² + 5²) = √(1 + 25) = √26.",
                "3) Seul le produit scalaire u⃗ · v⃗ est nul : u⃗ et v⃗ sont orthogonaux, et ce sont les seuls.",
              ],
            },
            {
              level: 2,
              statement: "1) Dans un repère orthonormé, on donne u⃗(m ; 3) et v⃗(2 ; m - 5), où m est un réel. Déterminer m pour que u⃗ et v⃗ soient orthogonaux. 2) On considère maintenant deux vecteurs a⃗ et b⃗ tels que ‖a⃗‖ = 4, ‖b⃗‖ = 3 et a⃗ · b⃗ = -2. Calculer ‖a⃗ + b⃗‖ puis (2a⃗ - b⃗) · (a⃗ + 3b⃗).",
              hint: "Pour 1), écrivez que le produit scalaire est nul. Pour 2), développez par bilinéarité en remplaçant a⃗ · a⃗ par 16 et b⃗ · b⃗ par 9.",
              solution: [
                "1) u⃗ · v⃗ = 2m + 3(m - 5) = 5m - 15. Les vecteurs sont orthogonaux si et seulement si 5m - 15 = 0, c'est-à-dire m = 3.",
                "2) ‖a⃗ + b⃗‖² = ‖a⃗‖² + 2a⃗ · b⃗ + ‖b⃗‖² = 16 + 2 × (-2) + 9 = 21, donc ‖a⃗ + b⃗‖ = √21.",
                "(2a⃗ - b⃗) · (a⃗ + 3b⃗) = 2a⃗ · a⃗ + 6a⃗ · b⃗ - b⃗ · a⃗ - 3b⃗ · b⃗ = 2 × 16 + 5 × a⃗ · b⃗ - 3 × 9.",
                "On obtient 32 + 5 × (-2) - 27 = 32 - 10 - 27 = -5.",
                "Résultats : m = 3 ; ‖a⃗ + b⃗‖ = √21 ; (2a⃗ - b⃗) · (a⃗ + 3b⃗) = -5.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. Dans un repère orthonormé, on considère les points A(-1 ; 2), B(3 ; 4), C(4 ; 2) et D(0 ; 0). 1) Démontrer que ABCD est un parallélogramme. 2) Démontrer que ABCD est un rectangle. 3) ABCD est-il un carré ? 4) Calculer la valeur exacte du cosinus de l'angle (AC⃗, BD⃗) formé par les diagonales.",
              hint: "Un parallélogramme vérifie AB⃗ = DC⃗. Un parallélogramme ayant un angle droit est un rectangle. Un rectangle est un carré si ses diagonales sont perpendiculaires.",
              solution: [
                "1) AB⃗(3 - (-1) ; 4 - 2) = (4 ; 2) et DC⃗(4 - 0 ; 2 - 0) = (4 ; 2). Comme AB⃗ = DC⃗, ABCD est un parallélogramme.",
                "2) AD⃗(0 - (-1) ; 0 - 2) = (1 ; -2). AB⃗ · AD⃗ = 4 × 1 + 2 × (-2) = 4 - 4 = 0, donc l'angle DAB est droit. Un parallélogramme ayant un angle droit est un rectangle.",
                "3) AC⃗(5 ; 0) et BD⃗(0 - 3 ; 0 - 4) = (-3 ; -4). AC⃗ · BD⃗ = 5 × (-3) + 0 × (-4) = -15 ≠ 0 : les diagonales ne sont pas perpendiculaires, donc ABCD n'est pas un carré (on peut aussi remarquer que AB = √20 et AD = √5 sont différents).",
                "4) AC = √(25 + 0) = 5 et BD = √(9 + 16) = 5 (les diagonales d'un rectangle ont la même longueur).",
                "cos(AC⃗, BD⃗) = AC⃗ · BD⃗ ÷ (AC × BD) = -15 ÷ 25 = -3/5.",
                "Conclusion : ABCD est un rectangle qui n'est pas un carré, et le cosinus de l'angle des diagonales vaut -3/5.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les propriétés du produit scalaire.",
            statements: [
              { text: "Si u⃗ · v⃗ = 0, alors u⃗ ou v⃗ est le vecteur nul.", true: false, why: "Deux vecteurs non nuls perpendiculaires ont un produit scalaire nul." },
              { text: "Pour tous vecteurs u⃗ et v⃗, u⃗ · v⃗ = v⃗ · u⃗.", true: true, why: "Le produit scalaire est symétrique." },
              { text: "(u⃗ + v⃗)² = u⃗² + v⃗² pour tous vecteurs u⃗ et v⃗.", true: false, why: "Il manque le double produit 2u⃗ · v⃗ ; l'égalité n'est vraie que si u⃗ et v⃗ sont orthogonaux." },
              { text: "Dans un repère orthonormé, u⃗(1 ; 2) et v⃗(-2 ; 1) sont orthogonaux.", true: true, why: "1 × (-2) + 2 × 1 = 0." },
              { text: "La formule u⃗ · v⃗ = xx' + yy' est valable dans n'importe quel repère.", true: false, why: "Elle exige un repère orthonormé : axes perpendiculaires et même unité." },
              { text: "(3u⃗) · v⃗ = 3(u⃗ · v⃗).", true: true, why: "Le produit scalaire est linéaire par rapport à chaque vecteur." },
              { text: "Le vecteur nul est orthogonal à tout vecteur.", true: true, why: "Son produit scalaire avec n'importe quel vecteur vaut 0." },
            ],
          },
          quiz: [
            {
              q: "Dans un repère orthonormé, u⃗(2 ; -1) et v⃗(3 ; 4). Que vaut u⃗ · v⃗ ?",
              options: ["2", "10", "-2", "(6 ; -4)"],
              answer: 0,
              why: "u⃗ · v⃗ = 2 × 3 + (-1) × 4 = 6 - 4 = 2. Le résultat est un nombre, pas un couple.",
            },
            {
              q: "Pour quelle valeur de m les vecteurs u⃗(m ; 2) et v⃗(3 ; -6) sont-ils orthogonaux ?",
              options: ["-4", "1", "4", "12"],
              answer: 2,
              why: "u⃗ · v⃗ = 3m - 12, qui s'annule pour m = 4.",
            },
            {
              q: "On sait que ‖u⃗‖ = 3, ‖v⃗‖ = 2 et u⃗ · v⃗ = 1. Que vaut ‖u⃗ + v⃗‖² ?",
              options: ["13", "11", "25", "15"],
              answer: 3,
              why: "‖u⃗ + v⃗‖² = 9 + 2 × 1 + 4 = 15.",
            },
            {
              q: "(u⃗ + v⃗) · (u⃗ - v⃗) est égal à :",
              options: ["u⃗² - v⃗²", "u⃗² + v⃗²", "u⃗² - 2u⃗ · v⃗ + v⃗²", "0"],
              answer: 0,
              why: "En développant, les termes u⃗ · v⃗ et -v⃗ · u⃗ s'annulent par symétrie : il reste u⃗² - v⃗².",
            },
            {
              q: "Les droites (AB) et (CD) sont perpendiculaires si et seulement si :",
              options: ["AB = CD", "AB⃗ · CD⃗ = 0", "AB⃗ · CD⃗ = 1", "AB⃗ · CD⃗ = AB × CD"],
              answer: 1,
              why: "Deux droites sont perpendiculaires si et seulement si des vecteurs directeurs ont un produit scalaire nul.",
            },
          ],
          trap: "Oublier le double produit en écrivant ‖u⃗ + v⃗‖² = ‖u⃗‖² + ‖v⃗‖², ou croire qu'un produit scalaire nul impose qu'un des vecteurs soit nul.",
          method: "Avant tout calcul en repère, écrivez proprement les coordonnées de chaque vecteur (xB - xA ; yB - yA) sur une ligne à part. Le calcul de xx' + yy' devient alors immédiat et les erreurs de signe se voient tout de suite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'al-kashi',
          title: 'Formule d’Al-Kashi et applications aux triangles',
          minutes: 30,
          objectives: [
            "Démontrer la formule d'Al-Kashi à l'aide du produit scalaire.",
            "Calculer une longueur ou un angle dans un triangle quelconque avec la formule d'Al-Kashi.",
            "Transformer l'expression MA⃗ · MB⃗ à l'aide du milieu I de [AB] et en déduire des ensembles de points.",
          ],
          course: [
            {
              heading: "La formule d'Al-Kashi",
              paragraphs: [
                "Dans un triangle ABC, on note traditionnellement a = BC, b = CA et c = AB : chaque côté porte le nom (en minuscule) du sommet qui lui fait face. La formule d'Al-Kashi relie les trois côtés et un angle : a² = b² + c² - 2bc × cos(Â), où Â désigne l'angle BAC, compris entre les côtés b et c.",
                "Si l'angle Â est droit, cos(Â) = 0 et l'on retrouve a² = b² + c² : c'est le théorème de Pythagore. La formule d'Al-Kashi en est donc une généralisation à tous les triangles. Le terme correctif -2bc cos(Â) est négatif si Â est aigu (le côté a est plus court que dans le cas rectangle) et positif si Â est obtus.",
                "Elle porte le nom du mathématicien et astronome persan Ghiyath al-Kashi, mort en 1429 à Samarcande, qui l'a énoncée sous une forme adaptée aux calculs trigonométriques. Un résultat géométrique équivalent figurait déjà dans les Éléments d'Euclide.",
              ],
              box: { label: "Formule", text: "Dans un triangle ABC avec a = BC, b = CA, c = AB : a² = b² + c² - 2bc cos(Â) ; b² = a² + c² - 2ac cos(B̂) ; c² = a² + b² - 2ab cos(Ĉ)." },
            },
            {
              heading: "La démonstration par le produit scalaire",
              paragraphs: [
                "D'après la relation de Chasles, BC⃗ = BA⃗ + AC⃗ = AC⃗ - AB⃗. On calcule le carré scalaire : BC² = (AC⃗ - AB⃗)² = AC² - 2AB⃗ · AC⃗ + AB².",
                "Or AB⃗ · AC⃗ = AB × AC × cos(BAC) = bc cos(Â). En remplaçant, on obtient a² = b² + c² - 2bc cos(Â). Cette démonstration montre que la formule d'Al-Kashi n'est rien d'autre que l'identité remarquable (u⃗ - v⃗)² = u⃗² - 2u⃗ · v⃗ + v⃗² appliquée aux côtés du triangle.",
              ],
            },
            {
              heading: "Calculer une longueur ou un angle",
              paragraphs: [
                "Premier usage : on connaît deux côtés et l'angle qu'ils forment, on calcule le troisième côté. Exemple : b = 5, c = 8 et Â = π/3. Alors a² = 25 + 64 - 2 × 5 × 8 × ½ = 89 - 40 = 49, donc a = 7.",
                "Second usage : on connaît les trois côtés, on calcule un angle grâce à cos(Â) = (b² + c² - a²) ÷ (2bc). Exemple : un triangle a pour côtés 3, 5 et 7. Le plus grand angle est opposé au plus grand côté, 7 : son cosinus vaut (9 + 25 - 49) ÷ (2 × 3 × 5) = -15 ÷ 30 = -½. Cet angle mesure donc 2π/3, soit 120° : le triangle est obtusangle.",
              ],
              box: { label: "À retenir", text: "Deux côtés et l'angle compris : on calcule le troisième côté. Trois côtés : cos(Â) = (b² + c² - a²) ÷ (2bc). Le plus grand angle est toujours opposé au plus grand côté." },
            },
            {
              heading: "Le produit scalaire MA⃗ · MB⃗ et le milieu de [AB]",
              paragraphs: [
                "Soit I le milieu de [AB] et M un point quelconque. On écrit MA⃗ = MI⃗ + IA⃗ et MB⃗ = MI⃗ + IB⃗ = MI⃗ - IA⃗ (car IB⃗ = -IA⃗). Le produit est de la forme (u⃗ + v⃗) · (u⃗ - v⃗), donc MA⃗ · MB⃗ = MI² - IA² = MI² - AB²/4.",
                "Conséquence : MA⃗ · MB⃗ = 0 équivaut à MI = AB/2. L'ensemble des points M tels que MA⃗ · MB⃗ = 0 est donc le cercle de diamètre [AB]. Plus généralement, l'ensemble des points M tels que MA⃗ · MB⃗ = k est un cercle de centre I, réduit au point I, ou vide, selon le signe de k + AB²/4.",
              ],
              box: { label: "Propriété", text: "Si I est le milieu de [AB], pour tout point M : MA⃗ · MB⃗ = MI² - AB²/4. L'ensemble des points M tels que MA⃗ · MB⃗ = 0 est le cercle de diamètre [AB]." },
            },
          ],
          keyPoints: [
            "Al-Kashi : a² = b² + c² - 2bc cos(Â), où Â est l'angle compris entre les côtés b et c.",
            "Si Â est droit, on retrouve le théorème de Pythagore.",
            "Pour un angle : cos(Â) = (b² + c² - a²) ÷ (2bc).",
            "Démonstration : BC⃗ = AC⃗ - AB⃗, puis on développe le carré scalaire.",
            "I milieu de [AB] : MA⃗ · MB⃗ = MI² - AB²/4 ; MA⃗ · MB⃗ = 0 caractérise le cercle de diamètre [AB].",
          ],
          example: {
            statement: "ABC est un triangle tel que AB = 6, AC = 4 et BAC = 2π/3 (120°). Calculer la valeur exacte de BC, puis celle de cos(ABC).",
            solution: [
              "On applique la formule d'Al-Kashi avec l'angle Â, compris entre les côtés [AB] et [AC] : BC² = AC² + AB² - 2 × AC × AB × cos(2π/3).",
              "cos(2π/3) = -½, donc BC² = 16 + 36 - 2 × 4 × 6 × (-½) = 52 + 24 = 76.",
              "BC = √76 = √(4 × 19) = 2√19 (environ 8,7).",
              "Pour l'angle en B : cos(ABC) = (AB² + BC² - AC²) ÷ (2 × AB × BC) = (36 + 76 - 16) ÷ (2 × 6 × 2√19) = 96 ÷ (24√19).",
              "On simplifie : cos(ABC) = 4/√19 = 4√19/19.",
              "Conclusion : BC = 2√19 et cos(ABC) = 4√19/19.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "ABC est un triangle tel que AB = 5, AC = 3 et BAC = π/3. Calculer la valeur exacte de BC.",
              hint: "L'angle donné est compris entre les côtés [AB] et [AC] : la formule d'Al-Kashi donne directement BC².",
              solution: [
                "D'après la formule d'Al-Kashi : BC² = AB² + AC² - 2 × AB × AC × cos(BAC).",
                "BC² = 25 + 9 - 2 × 5 × 3 × ½ = 34 - 15 = 19.",
                "BC est une longueur, donc BC = √19.",
              ],
            },
            {
              level: 2,
              statement: "ABC est un triangle tel que AB = 7, BC = 8 et CA = 5. 1) Calculer la mesure exacte de l'angle ACB. 2) Le triangle ABC possède-t-il un angle obtus ? 3) On note H le pied de la hauteur issue de A. Calculer AH, puis l'aire du triangle ABC.",
              hint: "L'angle en C est compris entre les côtés [CA] et [CB] et fait face au côté [AB]. Pour la question 2, il suffit d'étudier le plus grand angle, opposé au plus grand côté. Pour la question 3, utilisez le sinus dans le triangle AHC rectangle en H.",
              solution: [
                "1) cos(ACB) = (CA² + CB² - AB²) ÷ (2 × CA × CB) = (25 + 64 - 49) ÷ (2 × 5 × 8) = 40 ÷ 80 = ½. L'angle ACB est compris entre 0 et π, donc ACB = π/3 (60°).",
                "2) Le plus grand côté est [BC], opposé à l'angle en A. cos(BAC) = (AB² + AC² - BC²) ÷ (2 × AB × AC) = (49 + 25 - 64) ÷ 70 = 10/70 = 1/7.",
                "Ce cosinus est positif, donc l'angle en A, le plus grand du triangle, est aigu. Le triangle n'a aucun angle obtus.",
                "3) L'angle en C est aigu, donc H est sur [BC]. Dans le triangle AHC rectangle en H : AH = AC × sin(ACB) = 5 × sin(π/3) = 5√3/2.",
                "Aire = ½ × BC × AH = ½ × 8 × 5√3/2 = 10√3.",
                "Résultats : ACB = π/3 ; pas d'angle obtus ; AH = 5√3/2 et l'aire vaut 10√3.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. A et B sont deux points tels que AB = 6, et I est le milieu de [AB]. 1) Démontrer que, pour tout point M du plan, MA⃗ · MB⃗ = MI² - 9. 2) Déterminer l'ensemble E₁ des points M tels que MA⃗ · MB⃗ = 16. 3) Déterminer l'ensemble E₂ des points M tels que MA⃗ · MB⃗ = -9. 4) Déterminer l'ensemble E₃ des points M tels que MA⃗ · MB⃗ = -10.",
              hint: "Décomposez MA⃗ et MB⃗ en passant par I (relation de Chasles), et utilisez IB⃗ = -IA⃗.",
              solution: [
                "1) MA⃗ = MI⃗ + IA⃗ et MB⃗ = MI⃗ + IB⃗ = MI⃗ - IA⃗. Donc MA⃗ · MB⃗ = (MI⃗ + IA⃗) · (MI⃗ - IA⃗) = MI² - IA².",
                "Comme IA = AB/2 = 3, IA² = 9 et MA⃗ · MB⃗ = MI² - 9.",
                "2) MA⃗ · MB⃗ = 16 équivaut à MI² = 25, soit MI = 5 (une distance est positive). E₁ est le cercle de centre I et de rayon 5.",
                "3) MA⃗ · MB⃗ = -9 équivaut à MI² = 0, soit M = I. E₂ est réduit au point I.",
                "4) MA⃗ · MB⃗ = -10 équivaut à MI² = -1, ce qui est impossible car un carré est positif. E₃ est l'ensemble vide.",
                "Conclusion : E₁ est le cercle de centre I et de rayon 5, E₂ = {I}, E₃ est vide.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démonstration de la formule d'Al-Kashi dans le triangle ABC.",
            items: [
              "On écrit BC⃗ = AC⃗ - AB⃗ grâce à la relation de Chasles.",
              "On passe au carré scalaire : BC² = (AC⃗ - AB⃗)².",
              "On développe : BC² = AC² - 2AB⃗ · AC⃗ + AB².",
              "On remplace AB⃗ · AC⃗ par AB × AC × cos(BAC).",
              "On conclut : BC² = AB² + AC² - 2 × AB × AC × cos(BAC).",
            ],
          },
          quiz: [
            {
              q: "Dans un triangle ABC avec a = BC, b = CA, c = AB, la formule d'Al-Kashi s'écrit :",
              options: ["a² = b² + c² + 2bc cos(Â)", "a² = b² + c² - 2bc cos(Â)", "a² = b² + c² - bc cos(Â)", "a = b + c - 2bc cos(Â)"],
              answer: 1,
              why: "C'est le développement de (AC⃗ - AB⃗)², avec un signe moins devant le double produit.",
            },
            {
              q: "Lorsque l'angle Â est droit, la formule d'Al-Kashi devient :",
              options: ["le théorème de Thalès", "la formule de la médiane", "le théorème de Pythagore"],
              answer: 2,
              why: "cos(π/2) = 0, il reste a² = b² + c².",
            },
            {
              q: "Dans un triangle, b = 2, c = 3 et Â = π/3. Que vaut a ?",
              options: ["√7", "√13", "√19", "7"],
              answer: 0,
              why: "a² = 4 + 9 - 2 × 2 × 3 × ½ = 13 - 6 = 7, donc a = √7.",
            },
            {
              q: "Un triangle a pour côtés 3, 5 et 7. Son plus grand angle mesure :",
              options: ["60°", "90°", "135°", "120°"],
              answer: 3,
              why: "cos = (9 + 25 - 49) ÷ 30 = -½, ce qui correspond à 120°.",
            },
            {
              q: "I est le milieu de [AB] et AB = 4. Pour tout point M, MA⃗ · MB⃗ est égal à :",
              options: ["MI² + 4", "MI² - 16", "MI² - 4", "2MI²"],
              answer: 2,
              why: "MA⃗ · MB⃗ = MI² - AB²/4 = MI² - 16/4 = MI² - 4.",
            },
          ],
          trap: "Utiliser le mauvais angle : dans a² = b² + c² - 2bc cos(Â), l'angle doit être celui qui est compris entre les côtés b et c, donc opposé au côté a que l'on calcule.",
          method: "Faites toujours un schéma rapide en nommant a, b, c face aux sommets A, B, C. Une fois le calcul terminé, vérifiez la cohérence : le plus grand côté doit faire face au plus grand angle, et un angle obtus doit donner un cosinus négatif.",
        },
      ],
    },
    {
      id: 'geometrie-reperee',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vecteur-normal-droite',
          title: 'Vecteur normal et équation cartésienne d’une droite',
          minutes: 30,
          objectives: [
            "Lire un vecteur normal et un vecteur directeur sur une équation cartésienne de droite.",
            "Déterminer une équation cartésienne d'une droite connaissant un point et un vecteur normal.",
            "Déterminer les coordonnées du projeté orthogonal d'un point sur une droite.",
          ],
          course: [
            {
              heading: "Rappel : équation cartésienne et vecteur directeur",
              paragraphs: [
                "Dans un repère, toute droite admet une équation cartésienne de la forme ax + by + c = 0, avec a et b non tous les deux nuls : un point M(x ; y) appartient à la droite si et seulement si ses coordonnées vérifient cette égalité. Le vecteur u⃗(-b ; a) est alors un vecteur directeur de la droite.",
                "Exemple : la droite d'équation 2x - 3y + 5 = 0 a pour vecteur directeur u⃗(3 ; 2). Le point A(-1 ; 1) lui appartient, car 2 × (-1) - 3 × 1 + 5 = 0. Une même droite a une infinité d'équations cartésiennes : en multipliant tous les coefficients par un même réel non nul, on obtient une autre équation de la même droite.",
              ],
            },
            {
              heading: "Vecteur normal à une droite",
              paragraphs: [
                "Un vecteur normal à une droite d est un vecteur non nul orthogonal à un vecteur directeur de d. On peut l'imaginer comme un clou planté perpendiculairement à une règle posée sur la table : il indique la direction perpendiculaire à la droite.",
                "Dans un repère orthonormé, si d a pour équation ax + by + c = 0, alors n⃗(a ; b) est un vecteur normal à d. En effet, n⃗ · u⃗ = a × (-b) + b × a = 0. Réciproquement, toute droite de vecteur normal n⃗(a ; b) a une équation de la forme ax + by + c = 0. Une droite a une infinité de vecteurs normaux, tous colinéaires entre eux.",
                "Conséquence : deux droites d'équations ax + by + c = 0 et a'x + b'y + c' = 0 sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux, c'est-à-dire aa' + bb' = 0. Elles sont parallèles si et seulement si ces vecteurs normaux sont colinéaires.",
              ],
              box: { label: "Propriété", text: "Dans un repère orthonormé, la droite d'équation ax + by + c = 0 admet n⃗(a ; b) comme vecteur normal et u⃗(-b ; a) comme vecteur directeur." },
            },
            {
              heading: "Équation d'une droite donnée par un point et un vecteur normal",
              paragraphs: [
                "Soit A un point et n⃗ un vecteur non nul. Le point M appartient à la droite passant par A et de vecteur normal n⃗ si et seulement si AM⃗ et n⃗ sont orthogonaux, c'est-à-dire AM⃗ · n⃗ = 0. En coordonnées, on obtient directement une équation.",
                "Exemple : A(2 ; -1) et n⃗(3 ; 4). AM⃗(x - 2 ; y + 1), donc AM⃗ · n⃗ = 3(x - 2) + 4(y + 1) = 3x + 4y - 2. Une équation de la droite est 3x + 4y - 2 = 0. Autre méthode : on écrit 3x + 4y + c = 0, puis on remplace par les coordonnées de A : 6 - 4 + c = 0, donc c = -2.",
                "La médiatrice d'un segment [AB] est un cas particulier important : c'est la droite qui passe par le milieu I de [AB] et qui a pour vecteur normal AB⃗.",
              ],
              box: { label: "Méthode", text: "M appartient à la droite passant par A de vecteur normal n⃗ si et seulement si AM⃗ · n⃗ = 0. Avec n⃗(a ; b), on écrit ax + by + c = 0 et on trouve c grâce aux coordonnées de A." },
            },
            {
              heading: "Projeté orthogonal d'un point sur une droite",
              paragraphs: [
                "Le projeté orthogonal d'un point A sur une droite d est le point H de d tel que (AH) soit perpendiculaire à d (si A est sur d, H = A). C'est le point de d le plus proche de A, et la distance AH est appelée distance du point A à la droite d.",
                "Pour calculer ses coordonnées : on détermine une équation de la droite Δ passant par A et perpendiculaire à d (un vecteur directeur de d est un vecteur normal de Δ), puis on résout le système formé par les équations de d et de Δ. On vérifie enfin que H est bien sur d et que AH⃗ est colinéaire à un vecteur normal de d.",
              ],
            },
          ],
          keyPoints: [
            "Droite ax + by + c = 0 : vecteur normal n⃗(a ; b), vecteur directeur u⃗(-b ; a).",
            "M est sur la droite passant par A de vecteur normal n⃗ si et seulement si AM⃗ · n⃗ = 0.",
            "Deux droites sont perpendiculaires si et seulement si aa' + bb' = 0.",
            "La médiatrice de [AB] passe par le milieu de [AB] et a pour vecteur normal AB⃗.",
            "Projeté orthogonal H de A sur d : intersection de d et de la perpendiculaire à d passant par A.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on considère la droite d d'équation x + 2y - 4 = 0 et le point A(3 ; 5). Déterminer les coordonnées du projeté orthogonal H de A sur d, puis la distance AH.",
            solution: [
              "Un vecteur normal à d est n⃗(1 ; 2) et un vecteur directeur de d est u⃗(-2 ; 1).",
              "La droite Δ perpendiculaire à d passant par A a pour vecteur normal u⃗(-2 ; 1). Son équation est -2(x - 3) + 1 × (y - 5) = 0, soit -2x + y + 1 = 0, ou encore y = 2x - 1.",
              "H est sur d et sur Δ : on remplace y par 2x - 1 dans l'équation de d : x + 2(2x - 1) - 4 = 0, soit 5x - 6 = 0, donc x = 6/5.",
              "Alors y = 2 × 6/5 - 1 = 12/5 - 5/5 = 7/5. Donc H(6/5 ; 7/5).",
              "Vérification : 6/5 + 2 × 7/5 - 4 = 20/5 - 4 = 0, H est bien sur d. De plus, AH⃗(6/5 - 3 ; 7/5 - 5) = (-9/5 ; -18/5) = -9/5 × (1 ; 2), colinéaire à n⃗.",
              "AH = (9/5) × ‖n⃗‖ = (9/5) × √5 = 9√5/5. Conclusion : H(6/5 ; 7/5) et AH = 9√5/5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, on considère la droite d d'équation 5x - 2y + 7 = 0. 1) Donner un vecteur normal et un vecteur directeur de d. 2) Le point A(1 ; 6) appartient-il à d ? 3) Déterminer une équation de la droite d' parallèle à d passant par B(0 ; 1).",
              hint: "Lisez les coefficients a et b de l'équation. Deux droites parallèles ont le même vecteur normal.",
              solution: [
                "1) Un vecteur normal est n⃗(5 ; -2) et un vecteur directeur est u⃗(2 ; 5) (on prend (-b ; a) avec a = 5 et b = -2).",
                "2) 5 × 1 - 2 × 6 + 7 = 5 - 12 + 7 = 0 : A appartient à d.",
                "3) d' a aussi pour vecteur normal n⃗(5 ; -2), donc une équation de la forme 5x - 2y + c = 0. B est sur d' : 0 - 2 + c = 0, donc c = 2.",
                "Une équation de d' est 5x - 2y + 2 = 0.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthonormé, on donne A(1 ; 2) et B(5 ; 4). 1) Déterminer une équation cartésienne de la médiatrice m du segment [AB]. 2) Vérifier que le point E(0 ; 9) appartient à m, puis contrôler que EA = EB.",
              hint: "La médiatrice passe par le milieu I de [AB] et a pour vecteur normal AB⃗.",
              solution: [
                "1) Le milieu de [AB] est I((1 + 5)/2 ; (2 + 4)/2) = I(3 ; 3), et AB⃗(4 ; 2).",
                "M(x ; y) est sur m si et seulement si IM⃗ · AB⃗ = 0, soit 4(x - 3) + 2(y - 3) = 0, c'est-à-dire 4x + 2y - 18 = 0.",
                "En divisant par 2 : une équation de m est 2x + y - 9 = 0.",
                "2) 2 × 0 + 9 - 9 = 0 : E est bien sur m.",
                "Contrôle : EA² = (1 - 0)² + (2 - 9)² = 1 + 49 = 50 et EB² = (5 - 0)² + (4 - 9)² = 25 + 25 = 50. Donc EA = EB, ce qui est cohérent avec la définition de la médiatrice.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. Dans un repère orthonormé, on considère les points A(-2 ; 1), B(4 ; 3) et C(1 ; 6). 1) Déterminer une équation cartésienne de la hauteur h issue de C dans le triangle ABC. 2) Déterminer une équation cartésienne de la droite (AB). 3) En déduire les coordonnées du point H, pied de la hauteur issue de C. 4) Calculer CH, puis l'aire du triangle ABC.",
              hint: "La hauteur issue de C passe par C et a pour vecteur normal AB⃗. Pour (AB), un vecteur directeur est AB⃗ : déduisez-en un vecteur normal.",
              solution: [
                "1) AB⃗(6 ; 2). La hauteur h passe par C et a pour vecteur normal AB⃗ : 6(x - 1) + 2(y - 6) = 0, soit 6x + 2y - 18 = 0, ou encore 3x + y - 9 = 0.",
                "2) AB⃗(6 ; 2) est colinéaire à (3 ; 1), qui dirige (AB) ; un vecteur normal à (AB) est donc (1 ; -3). Une équation est x - 3y + c = 0 ; avec A : -2 - 3 + c = 0, donc c = 5. (AB) : x - 3y + 5 = 0 (vérification avec B : 4 - 9 + 5 = 0).",
                "3) H est l'intersection de h et de (AB). De 3x + y - 9 = 0, on tire y = 9 - 3x. Alors x - 3(9 - 3x) + 5 = 0, soit 10x - 22 = 0, donc x = 11/5, puis y = 9 - 33/5 = 12/5. H(11/5 ; 12/5).",
                "4) CH⃗(11/5 - 1 ; 12/5 - 6) = (6/5 ; -18/5). CH² = 36/25 + 324/25 = 360/25, donc CH = √360/5 = 6√10/5.",
                "AB = √(36 + 4) = √40 = 2√10. Aire = ½ × AB × CH = ½ × 2√10 × 6√10/5 = (6 × 10)/5 = 12.",
                "Conclusion : h : 3x + y - 9 = 0 ; (AB) : x - 3y + 5 = 0 ; H(11/5 ; 12/5) ; CH = 6√10/5 et l'aire de ABC vaut 12 unités d'aire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vecteurs normaux et équations de droites (repère orthonormé).",
            statements: [
              { text: "Pour d : 2x - 5y + 1 = 0, le vecteur (2 ; -5) est normal à d.", true: true, why: "On lit les coefficients a = 2 et b = -5." },
              { text: "Pour d : 2x - 5y + 1 = 0, le vecteur (2 ; -5) est un vecteur directeur de d.", true: false, why: "Un vecteur directeur est (-b ; a) = (5 ; 2) ; (2 ; -5) est normal." },
              { text: "Une droite admet un seul vecteur normal.", true: false, why: "Tout multiple non nul d'un vecteur normal est encore normal : il y en a une infinité." },
              { text: "Les droites x + y = 0 et x - y + 3 = 0 sont perpendiculaires.", true: true, why: "Leurs vecteurs normaux (1 ; 1) et (1 ; -1) vérifient 1 × 1 + 1 × (-1) = 0." },
              { text: "Le projeté orthogonal de A sur d est le point de d le plus proche de A.", true: true, why: "Pour tout autre point M de d, le triangle AHM est rectangle en H et AM > AH." },
              { text: "Les droites 2x + y - 1 = 0 et 4x + 2y + 3 = 0 sont perpendiculaires.", true: false, why: "Leurs vecteurs normaux (2 ; 1) et (4 ; 2) sont colinéaires : les droites sont parallèles." },
              { text: "La médiatrice de [AB] a pour vecteur normal AB⃗.", true: true, why: "Elle est perpendiculaire à (AB) et passe par le milieu de [AB]." },
            ],
          },
          quiz: [
            {
              q: "Un vecteur normal à la droite d'équation 3x - y + 4 = 0 est :",
              options: ["(1 ; 3)", "(3 ; 4)", "(3 ; -1)", "(-1 ; 3)"],
              answer: 2,
              why: "On lit n⃗(a ; b) = (3 ; -1). Le vecteur (1 ; 3) est un vecteur directeur.",
            },
            {
              q: "Une équation de la droite passant par A(1 ; 1) et de vecteur normal n⃗(2 ; 3) est :",
              options: ["2x + 3y + 5 = 0", "3x - 2y - 1 = 0", "x + y - 2 = 0", "2x + 3y - 5 = 0"],
              answer: 3,
              why: "On écrit 2x + 3y + c = 0 et A donne 2 + 3 + c = 0, donc c = -5.",
            },
            {
              q: "Laquelle de ces droites est perpendiculaire à d : x - 2y + 1 = 0 ?",
              options: ["2x + y - 3 = 0", "x - 2y = 0", "2x - 4y + 1 = 0", "x + 2y = 0"],
              answer: 0,
              why: "(1 ; -2) · (2 ; 1) = 2 - 2 = 0 : les vecteurs normaux sont orthogonaux.",
            },
            {
              q: "L'ensemble des points M tels que AM⃗ · n⃗ = 0 (avec n⃗ non nul) est :",
              options: ["le cercle de centre A", "la droite passant par A de vecteur normal n⃗", "la droite passant par A de vecteur directeur n⃗"],
              answer: 1,
              why: "AM⃗ est orthogonal à n⃗ : M décrit la droite passant par A perpendiculaire à n⃗.",
            },
            {
              q: "Quel est le projeté orthogonal du point A(0 ; 4) sur la droite d'équation y = x ?",
              options: ["(0 ; 0)", "(4 ; 4)", "(2 ; 2)", "(4 ; 0)"],
              answer: 2,
              why: "H(2 ; 2) est sur la droite et AH⃗(2 ; -2) est orthogonal au vecteur directeur (1 ; 1).",
            },
          ],
          trap: "Confondre vecteur normal et vecteur directeur : pour ax + by + c = 0, (a ; b) est normal et (-b ; a) est directeur, et non l'inverse.",
          method: "Après avoir trouvé une équation, contrôlez-la en deux secondes : remplacez les coordonnées du point donné (vous devez obtenir 0) et relisez les coefficients de x et de y pour vérifier le vecteur normal.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-cercle',
          title: 'Équation d’un cercle',
          minutes: 30,
          objectives: [
            "Déterminer une équation d'un cercle défini par son centre et son rayon.",
            "Reconnaître une équation de cercle et déterminer son centre et son rayon.",
            "Caractériser le cercle de diamètre [AB] par MA⃗ · MB⃗ = 0 et déterminer une tangente à un cercle.",
          ],
          course: [
            {
              heading: "Du cercle à son équation",
              paragraphs: [
                "Dans un repère orthonormé, le cercle C de centre Ω(a ; b) et de rayon r (r > 0) est l'ensemble des points M situés à la distance r de Ω. Comme les distances sont positives, M(x ; y) appartient à C si et seulement si ΩM² = r², c'est-à-dire (x - a)² + (y - b)² = r².",
                "Exemple : le cercle de centre Ω(2 ; -3) et de rayon 5 a pour équation (x - 2)² + (y + 3)² = 25. Le point A(5 ; 1) lui appartient, car (5 - 2)² + (1 + 3)² = 9 + 16 = 25. Attention aux signes : le terme (y + 3)² correspond à b = -3.",
              ],
              box: { label: "Propriété", text: "Dans un repère orthonormé, le cercle de centre Ω(a ; b) et de rayon r a pour équation (x - a)² + (y - b)² = r²." },
            },
            {
              heading: "Reconnaître une équation de cercle",
              paragraphs: [
                "Une équation de cercle peut être donnée sous forme développée, par exemple x² + y² - 4x + 6y - 12 = 0. Pour retrouver le centre et le rayon, on complète les carrés, comme pour la forme canonique d'un trinôme : x² - 4x = (x - 2)² - 4 et y² + 6y = (y + 3)² - 9.",
                "L'équation devient (x - 2)² - 4 + (y + 3)² - 9 - 12 = 0, soit (x - 2)² + (y + 3)² = 25. C'est le cercle de centre (2 ; -3) et de rayon 5. Il faut toujours regarder le nombre k obtenu à droite : si k > 0, c'est un cercle de rayon √k ; si k = 0, l'ensemble est réduit au point (a ; b) ; si k < 0, l'ensemble est vide.",
              ],
              box: { label: "Règle", text: "Compléter un carré : x² + 2px = (x + p)² - p². On obtient (x - a)² + (y - b)² = k : un cercle de rayon √k si k > 0, un point si k = 0, l'ensemble vide si k < 0." },
            },
            {
              heading: "Le cercle de diamètre [AB]",
              paragraphs: [
                "Un point M distinct de A et de B est sur le cercle de diamètre [AB] si et seulement si le triangle AMB est rectangle en M. En incluant A et B, on obtient : M appartient au cercle de diamètre [AB] si et seulement si MA⃗ · MB⃗ = 0. Ce résultat découle aussi de la relation MA⃗ · MB⃗ = MI² - AB²/4, où I est le milieu de [AB].",
                "Exemple : A(1 ; 2) et B(5 ; 0). MA⃗(1 - x ; 2 - y) et MB⃗(5 - x ; -y), donc MA⃗ · MB⃗ = (x - 1)(x - 5) + (y - 2)y = x² - 6x + 5 + y² - 2y. En complétant les carrés : (x - 3)² + (y - 1)² = 5. On retrouve le centre (3 ; 1), milieu de [AB], et le rayon √5, moitié de AB = √20.",
              ],
            },
            {
              heading: "Tangente à un cercle",
              paragraphs: [
                "La tangente au cercle de centre Ω en un point A du cercle est la droite passant par A et perpendiculaire au rayon [ΩA]. Autrement dit, c'est la droite passant par A de vecteur normal ΩA⃗ : on réinvestit la méthode de la leçon précédente.",
                "Exemple : le cercle de centre Ω(1 ; 1) passant par A(4 ; 5) a pour rayon ΩA = √(9 + 16) = 5. La tangente en A a pour vecteur normal ΩA⃗(3 ; 4), donc une équation 3x + 4y + c = 0 avec 12 + 20 + c = 0, soit 3x + 4y - 32 = 0.",
              ],
              box: { label: "À retenir", text: "La tangente en A au cercle de centre Ω est la droite passant par A de vecteur normal ΩA⃗." },
            },
          ],
          keyPoints: [
            "Cercle de centre Ω(a ; b) et de rayon r : (x - a)² + (y - b)² = r².",
            "Forme développée : on complète les carrés avec x² + 2px = (x + p)² - p².",
            "(x - a)² + (y - b)² = k : cercle si k > 0, point si k = 0, ensemble vide si k < 0.",
            "Cercle de diamètre [AB] : ensemble des points M tels que MA⃗ · MB⃗ = 0.",
            "Tangente en A : droite passant par A de vecteur normal ΩA⃗.",
          ],
          example: {
            statement: "Dans un repère orthonormé, on considère l'ensemble C des points M(x ; y) tels que x² + y² + 2x - 8y + 8 = 0. 1) Démontrer que C est un cercle dont on précisera le centre et le rayon. 2) Vérifier que A(2 ; 4) appartient à C. 3) Déterminer une équation de la tangente à C en A.",
            solution: [
              "1) On complète les carrés : x² + 2x = (x + 1)² - 1 et y² - 8y = (y - 4)² - 16.",
              "L'équation devient (x + 1)² - 1 + (y - 4)² - 16 + 8 = 0, soit (x + 1)² + (y - 4)² = 9.",
              "Comme 9 > 0, C est le cercle de centre Ω(-1 ; 4) et de rayon √9 = 3.",
              "2) (2 + 1)² + (4 - 4)² = 9 + 0 = 9 : A appartient bien à C.",
              "3) La tangente en A a pour vecteur normal ΩA⃗(3 ; 0). Son équation est 3(x - 2) + 0 × (y - 4) = 0, soit x = 2.",
              "Conclusion : C est le cercle de centre Ω(-1 ; 4) et de rayon 3, et la tangente en A est la droite verticale d'équation x = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un repère orthonormé, on considère le cercle C de centre Ω(-1 ; 3) et de rayon 4. 1) Écrire une équation de C. 2) Les points B(3 ; 3) et D(1 ; 6) appartiennent-ils à C ? 3) Écrire l'équation de C sous forme développée.",
              hint: "Utilisez (x - a)² + (y - b)² = r² avec a = -1, b = 3 et r = 4. Attention au signe de a.",
              solution: [
                "1) (x - (-1))² + (y - 3)² = 4², soit (x + 1)² + (y - 3)² = 16.",
                "2) Pour B : (3 + 1)² + (3 - 3)² = 16 + 0 = 16, donc B appartient à C.",
                "Pour D : (1 + 1)² + (6 - 3)² = 4 + 9 = 13 ≠ 16, donc D n'appartient pas à C (il est à l'intérieur du cercle, car 13 < 16).",
                "3) x² + 2x + 1 + y² - 6y + 9 = 16, soit x² + y² + 2x - 6y - 6 = 0.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthonormé, déterminer la nature de chacun des ensembles suivants et préciser, le cas échéant, son centre et son rayon : a) x² + y² - 6x + 4y - 3 = 0 ; b) x² + y² + 2x + 10y + 30 = 0 ; c) x² + y² - 10x = 0.",
              hint: "Complétez les carrés en x et en y, puis regardez le signe du nombre obtenu à droite du signe égal.",
              solution: [
                "a) x² - 6x = (x - 3)² - 9 et y² + 4y = (y + 2)² - 4. On obtient (x - 3)² + (y + 2)² = 9 + 4 + 3 = 16 : cercle de centre (3 ; -2) et de rayon 4.",
                "b) x² + 2x = (x + 1)² - 1 et y² + 10y = (y + 5)² - 25. On obtient (x + 1)² + (y + 5)² = 1 + 25 - 30 = -4. Une somme de carrés ne peut pas être négative : l'ensemble est vide.",
                "c) x² - 10x = (x - 5)² - 25. On obtient (x - 5)² + y² = 25 : cercle de centre (5 ; 0) et de rayon 5 (il passe par l'origine).",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. Dans un repère orthonormé, on donne A(-1 ; 1) et B(3 ; 3). 1) Déterminer une équation du cercle C de diamètre [AB]. 2) Vérifier que le point E(2 ; 0) appartient à C. Que peut-on en déduire pour le triangle ABE ? Le vérifier par un calcul de produit scalaire. 3) Déterminer les points d'intersection de C avec l'axe des abscisses. 4) Déterminer une équation de la tangente à C en E.",
              hint: "Le centre de C est le milieu I de [AB] et son rayon vaut AB/2. Sur l'axe des abscisses, y = 0.",
              solution: [
                "1) I((-1 + 3)/2 ; (1 + 3)/2) = I(1 ; 2). AB² = 4² + 2² = 20, donc r² = AB²/4 = 5. C : (x - 1)² + (y - 2)² = 5.",
                "2) (2 - 1)² + (0 - 2)² = 1 + 4 = 5 : E appartient à C. Comme E est sur le cercle de diamètre [AB], le triangle ABE est rectangle en E.",
                "Vérification : EA⃗(-3 ; 1) et EB⃗(1 ; 3), donc EA⃗ · EB⃗ = -3 + 3 = 0.",
                "3) Avec y = 0 : (x - 1)² + 4 = 5, soit (x - 1)² = 1, donc x - 1 = 1 ou x - 1 = -1, c'est-à-dire x = 2 ou x = 0. Les points sont O(0 ; 0) et E(2 ; 0).",
                "4) La tangente en E a pour vecteur normal IE⃗(1 ; -2). Son équation est 1 × (x - 2) - 2(y - 0) = 0, soit x - 2y - 2 = 0 (vérification : 2 - 0 - 2 = 0).",
                "Conclusion : C : (x - 1)² + (y - 2)² = 5 ; ABE est rectangle en E ; C coupe l'axe des abscisses en O et E ; tangente en E : x - 2y - 2 = 0.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la méthode pour reconnaître l'ensemble d'équation x² + y² - 4x + 6y - 12 = 0.",
            items: [
              "Regrouper les termes en x et les termes en y.",
              "Écrire x² - 4x sous la forme (x - 2)² - 4.",
              "Écrire y² + 6y sous la forme (y + 3)² - 9.",
              "Passer les constantes à droite : (x - 2)² + (y + 3)² = 25.",
              "Vérifier que le nombre de droite est strictement positif.",
              "Conclure : cercle de centre (2 ; -3) et de rayon 5.",
            ],
          },
          quiz: [
            {
              q: "Une équation du cercle de centre (3 ; -1) et de rayon 2 est :",
              options: ["(x + 3)² + (y - 1)² = 4", "(x - 3)² + (y + 1)² = 4", "(x - 3)² + (y + 1)² = 2", "(x - 3)² + (y - 1)² = 4"],
              answer: 1,
              why: "On remplace a = 3, b = -1 et r² = 4 dans (x - a)² + (y - b)² = r².",
            },
            {
              q: "L'ensemble d'équation x² + y² - 2x = 3 est :",
              options: ["le cercle de centre (1 ; 0) et de rayon 2", "le cercle de centre (-1 ; 0) et de rayon 2", "le cercle de centre (1 ; 0) et de rayon 4", "le cercle de centre (2 ; 0) et de rayon √3"],
              answer: 0,
              why: "x² - 2x = (x - 1)² - 1, d'où (x - 1)² + y² = 4 : centre (1 ; 0), rayon 2.",
            },
            {
              q: "L'ensemble d'équation x² + y² + 4 = 0 est :",
              options: ["un cercle de rayon 2", "un point", "l'ensemble vide", "une droite"],
              answer: 2,
              why: "x² + y² = -4 est impossible, car une somme de carrés est positive.",
            },
            {
              q: "L'ensemble des points M tels que MA⃗ · MB⃗ = 0 est :",
              options: ["la médiatrice de [AB]", "la droite (AB)", "le segment [AB]", "le cercle de diamètre [AB]"],
              answer: 3,
              why: "MA⃗ · MB⃗ = MI² - AB²/4 s'annule exactement quand MI = AB/2.",
            },
            {
              q: "La tangente en A au cercle de centre Ω a pour vecteur normal :",
              options: ["un vecteur orthogonal à ΩA⃗", "le vecteur ΩA⃗", "le vecteur nul", "un vecteur de norme égale au rayon"],
              answer: 1,
              why: "La tangente est perpendiculaire au rayon [ΩA], donc ΩA⃗ lui est normal.",
            },
          ],
          trap: "Se tromper de signe en lisant le centre : (x + 3)² correspond à a = -3. Autre erreur classique : donner r² comme rayon, par exemple répondre 25 au lieu de 5.",
          method: "Après avoir trouvé le centre et le rayon, redéveloppez rapidement votre équation pour retrouver l'équation de départ, ou testez un point évident du cercle (par exemple le point situé à droite du centre, (a + r ; b)).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'parabole',
          title: 'Parabole représentative d’une fonction du second degré',
          minutes: 25,
          objectives: [
            "Déterminer l'axe de symétrie et le sommet d'une parabole d'équation y = ax² + bx + c.",
            "Relier le signe de a et le signe du discriminant à l'allure de la parabole et à sa position par rapport à l'axe des abscisses.",
            "Déterminer par le calcul les points d'intersection d'une parabole et d'une droite, et leur position relative.",
          ],
          course: [
            {
              heading: "La parabole d'équation y = ax² + bx + c",
              paragraphs: [
                "Dans un repère orthonormé, la courbe représentative de la fonction f définie par f(x) = ax² + bx + c, avec a ≠ 0, est une parabole d'équation y = ax² + bx + c. Si a > 0, la parabole est tournée vers le haut (en forme de U) ; si a < 0, elle est tournée vers le bas.",
                "Plus |a| est grand, plus la parabole est resserrée autour de son axe. Le coefficient c donne l'ordonnée du point d'intersection avec l'axe des ordonnées : la parabole passe toujours par le point (0 ; c).",
              ],
            },
            {
              heading: "Sommet et axe de symétrie",
              paragraphs: [
                "La forme canonique s'écrit f(x) = a(x - α)² + β, avec α = -b/(2a) et β = f(α). Le point S(α ; β) est le sommet de la parabole : c'est le point le plus bas si a > 0 (β est le minimum de f) et le point le plus haut si a < 0 (β est le maximum).",
                "La droite verticale d'équation x = α est un axe de symétrie de la parabole. En effet, pour tout réel h, f(α + h) = ah² + β = f(α - h) : deux points d'abscisses symétriques par rapport à α ont la même ordonnée.",
                "Exemple : pour y = 2x² - 8x + 3, α = 8/4 = 2 et β = 2 × 4 - 16 + 3 = -5. Le sommet est S(2 ; -5), l'axe de symétrie est la droite d'équation x = 2, et la parabole est tournée vers le haut car a = 2 > 0.",
              ],
              box: { label: "Propriété", text: "La parabole d'équation y = ax² + bx + c a pour sommet S(α ; β) avec α = -b/(2a) et β = f(α), et pour axe de symétrie la droite d'équation x = α." },
            },
            {
              heading: "Intersection avec l'axe des abscisses",
              paragraphs: [
                "Les points d'intersection avec l'axe des abscisses ont pour abscisses les solutions de ax² + bx + c = 0. On calcule le discriminant Δ = b² - 4ac. Si Δ > 0, la parabole coupe l'axe en deux points, symétriques par rapport à l'axe de symétrie : α est le milieu des deux racines. Si Δ = 0, elle touche l'axe en un seul point, son sommet. Si Δ < 0, elle ne le coupe pas.",
                "En combinant avec le signe de a, on visualise le signe de f : si a > 0 et Δ < 0, la parabole est entièrement au-dessus de l'axe des abscisses, donc f(x) > 0 pour tout x ; si a < 0 et Δ < 0, elle est entièrement en dessous.",
              ],
              box: { label: "À retenir", text: "Δ > 0 : deux points d'intersection avec l'axe des abscisses ; Δ = 0 : un seul (le sommet) ; Δ < 0 : aucun. Le sommet a pour abscisse le milieu des racines." },
            },
            {
              heading: "Parabole et droite",
              paragraphs: [
                "Pour trouver les points communs à la parabole P d'équation y = ax² + bx + c et à la droite D d'équation y = mx + p, on résout ax² + bx + c = mx + p, soit ax² + (b - m)x + (c - p) = 0. Le nombre de solutions (0, 1 ou 2) donne le nombre de points d'intersection. S'il y a exactement un point commun, la droite non verticale est tangente à la parabole.",
                "La position relative s'obtient par le signe de la différence f(x) - (mx + p). Exemple : P : y = x² et D : y = x + 2. On résout x² - x - 2 = 0, soit (x - 2)(x + 1) = 0 : les points communs sont (-1 ; 1) et (2 ; 4). Entre -1 et 2, x² - x - 2 < 0, donc la droite est au-dessus de la parabole ; ailleurs, elle est en dessous.",
              ],
            },
          ],
          keyPoints: [
            "a > 0 : parabole tournée vers le haut ; a < 0 : tournée vers le bas.",
            "Sommet S(α ; β) avec α = -b/(2a) et β = f(α) ; axe de symétrie : x = α.",
            "La parabole coupe l'axe des ordonnées en (0 ; c).",
            "Le signe de Δ donne le nombre de points d'intersection avec l'axe des abscisses.",
            "Parabole et droite : on résout f(x) = mx + p ; la position relative se lit sur le signe de f(x) - (mx + p).",
          ],
          example: {
            statement: "On considère la parabole P d'équation y = -x² + 4x + 5. Déterminer son sommet, son axe de symétrie et ses points d'intersection avec les axes du repère.",
            solution: [
              "Ici a = -1, b = 4 et c = 5. α = -b/(2a) = -4/(-2) = 2 et β = f(2) = -4 + 8 + 5 = 9.",
              "Le sommet est S(2 ; 9) et l'axe de symétrie est la droite d'équation x = 2. Comme a < 0, la parabole est tournée vers le bas : 9 est le maximum de f.",
              "Axe des ordonnées : f(0) = 5, donc P passe par (0 ; 5).",
              "Axe des abscisses : Δ = 16 - 4 × (-1) × 5 = 16 + 20 = 36 > 0. Les racines sont x₁ = (-4 + 6)/(-2) = -1 et x₂ = (-4 - 6)/(-2) = 5.",
              "Vérification : le milieu de -1 et 5 est 2 = α. Par symétrie, le point (4 ; 5) est aussi sur P (f(4) = -16 + 16 + 5 = 5).",
              "Conclusion : S(2 ; 9), axe x = 2, intersections (0 ; 5), (-1 ; 0) et (5 ; 0).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la parabole P d'équation y = x² - 6x + 5. 1) Déterminer son sommet et son axe de symétrie. 2) Déterminer ses points d'intersection avec l'axe des abscisses et avec l'axe des ordonnées.",
              hint: "Calculez α = -b/(2a), puis f(α). Pour l'axe des abscisses, résolvez x² - 6x + 5 = 0 avec le discriminant.",
              solution: [
                "1) α = 6/2 = 3 et β = 9 - 18 + 5 = -4. Le sommet est S(3 ; -4) et l'axe de symétrie est la droite d'équation x = 3. La parabole est tournée vers le haut (a = 1 > 0).",
                "2) Δ = 36 - 20 = 16 > 0, donc deux racines : x₁ = (6 - 4)/2 = 1 et x₂ = (6 + 4)/2 = 5. P coupe l'axe des abscisses en (1 ; 0) et (5 ; 0) ; leur milieu est bien 3.",
                "f(0) = 5 : P coupe l'axe des ordonnées en (0 ; 5).",
              ],
            },
            {
              level: 2,
              statement: "Une parabole P a pour sommet S(1 ; -2) et passe par le point A(3 ; 6). 1) Déterminer une équation de P sous forme canonique, puis sous forme développée. 2) Déterminer les points d'intersection de P avec l'axe des abscisses.",
              hint: "Partez de y = a(x - α)² + β avec le sommet connu, puis utilisez le point A pour trouver a.",
              solution: [
                "1) Le sommet est S(1 ; -2), donc P a une équation de la forme y = a(x - 1)² - 2.",
                "A est sur P : 6 = a(3 - 1)² - 2, soit 4a = 8, donc a = 2.",
                "Forme canonique : y = 2(x - 1)² - 2. Forme développée : y = 2(x² - 2x + 1) - 2 = 2x² - 4x.",
                "2) 2x² - 4x = 0 équivaut à 2x(x - 2) = 0, soit x = 0 ou x = 2. Les points sont (0 ; 0) et (2 ; 0), symétriques par rapport à l'axe x = 1.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac, sans calculatrice. On considère la parabole P d'équation y = x² - 2x - 3 et la droite D d'équation y = 2x - 7. 1) Déterminer le sommet de P. 2) Déterminer les points d'intersection de P avec l'axe des abscisses. 3) Démontrer que P et D ont un unique point commun, dont on donnera les coordonnées. Interpréter. 4) Étudier la position relative de P et D.",
              hint: "Pour la question 3, ramenez l'équation x² - 2x - 3 = 2x - 7 à une identité remarquable. Pour la question 4, étudiez le signe de la différence.",
              solution: [
                "1) α = 2/2 = 1 et β = 1 - 2 - 3 = -4 : le sommet est S(1 ; -4).",
                "2) Δ = 4 + 12 = 16, racines x₁ = (2 - 4)/2 = -1 et x₂ = (2 + 4)/2 = 3. P coupe l'axe des abscisses en (-1 ; 0) et (3 ; 0).",
                "3) x² - 2x - 3 = 2x - 7 équivaut à x² - 4x + 4 = 0, soit (x - 2)² = 0, donc x = 2. Alors y = 2 × 2 - 7 = -3. L'unique point commun est T(2 ; -3).",
                "Une droite non verticale qui a un seul point commun avec une parabole lui est tangente : D est la tangente à P en T. On peut le confirmer avec la dérivée : f'(x) = 2x - 2, donc f'(2) = 2, qui est bien le coefficient directeur de D.",
                "4) Pour tout x, (x² - 2x - 3) - (2x - 7) = (x - 2)² ≥ 0. Donc P est au-dessus de D, et elles ne se touchent qu'en T.",
                "Conclusion : S(1 ; -4) ; intersections (-1 ; 0) et (3 ; 0) ; D est tangente à P en T(2 ; -3) et P est au-dessus de D.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque parabole à sa description.",
            pairs: [
              { left: "y = 3(x - 1)² + 2", right: "Sommet (1 ; 2), tournée vers le haut" },
              { left: "y = -(x + 2)² + 5", right: "Sommet (-2 ; 5), tournée vers le bas" },
              { left: "y = x² - 4", right: "Coupe l'axe des abscisses en -2 et en 2" },
              { left: "y = (x - 3)²", right: "Touche l'axe des abscisses en un seul point, (3 ; 0)" },
              { left: "y = -2x² + 8x", right: "Axe de symétrie x = 2 et passe par l'origine" },
              { left: "y = x² + 1", right: "Sommet (0 ; 1), ne coupe pas l'axe des abscisses" },
            ],
          },
          quiz: [
            {
              q: "Le sommet de la parabole d'équation y = x² + 4x + 1 est :",
              options: ["(2 ; 13)", "(-2 ; -3)", "(-4 ; 1)", "(-2 ; 5)"],
              answer: 1,
              why: "α = -4/2 = -2 et f(-2) = 4 - 8 + 1 = -3.",
            },
            {
              q: "L'axe de symétrie de la parabole d'équation y = 3x² - 12x + 7 est la droite d'équation :",
              options: ["x = -2", "x = 4", "x = 2", "y = 2"],
              answer: 2,
              why: "α = -b/(2a) = 12/6 = 2, et l'axe est une droite verticale x = α.",
            },
            {
              q: "Si a < 0 et Δ < 0, la parabole d'équation y = ax² + bx + c :",
              options: ["est entièrement située au-dessus de l'axe des abscisses", "coupe l'axe des abscisses en deux points", "est entièrement en dessous de l'axe des abscisses", "est tangente à l'axe des abscisses"],
              answer: 2,
              why: "Δ < 0 : aucun point commun avec l'axe ; a < 0 : la parabole est tournée vers le bas, donc en dessous.",
            },
            {
              q: "La parabole d'équation y = x² et la droite d'équation y = 4 se coupent en :",
              options: ["(2 ; 4) seulement", "(-2 ; 4) et (2 ; 4)", "(4 ; 16) et (-4 ; 16)", "aucun point"],
              answer: 1,
              why: "x² = 4 a deux solutions, -2 et 2.",
            },
            {
              q: "Une parabole coupe l'axe des abscisses en (-1 ; 0) et (5 ; 0). Son axe de symétrie est :",
              options: ["x = 2", "x = 3", "x = -2", "x = 4"],
              answer: 0,
              why: "L'axe passe par le milieu des racines : (-1 + 5)/2 = 2.",
            },
          ],
          trap: "Se tromper de signe sur α = -b/(2a) : pour y = x² + 4x + 1, le sommet a pour abscisse -2 et non 2. De même, le sommet de y = a(x + 3)² + 1 est (-3 ; 1) et non (3 ; 1).",
          method: "Vérifiez toujours votre sommet par la symétrie : l'abscisse α doit être le milieu des racines quand elles existent, et deux abscisses symétriques par rapport à α (par exemple 0 et 2α) doivent donner la même ordonnée.",
        },
      ],
    },
    {
      id: 'variables-aleatoires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-variable-aleatoire',
          title: 'Variable aléatoire et loi de probabilité',
          minutes: 30,
          objectives: [
            "Modéliser une situation aléatoire (jeu, gain, comptage) par une variable aléatoire réelle sur un univers fini.",
            "Interpréter les événements {X = a}, {X ≤ a} et {a ≤ X ≤ b}.",
            "Déterminer la loi de probabilité d'une variable aléatoire et la présenter dans un tableau.",
            "Calculer des probabilités à partir de la loi, en utilisant si besoin l'événement contraire.",
          ],
          course: [
            {
              heading: "Variable aléatoire : un nombre attaché à chaque issue",
              paragraphs: [
                "On considère une expérience aléatoire dont l'univers Ω (l'ensemble des issues) est fini. Une variable aléatoire réelle X est une fonction définie sur Ω et à valeurs dans ℝ : à chaque issue ω, elle associe un nombre réel X(ω). Malgré son nom, X n'est donc pas une inconnue : c'est une règle qui colle une étiquette numérique sur chaque issue, comme un barème qui transforme chaque résultat d'un jeu en un gain.",
                "Exemple : on lance deux fois une pièce équilibrée. L'univers est Ω = {PP ; PF ; FP ; FF}. Si X compte le nombre de « pile » obtenus, alors X(PP) = 2, X(PF) = X(FP) = 1 et X(FF) = 0. L'ensemble des valeurs prises par X, noté X(Ω), est {0 ; 1 ; 2}. Deux issues différentes peuvent avoir la même image : c'est le cas de PF et de FP.",
              ],
              box: { label: "Définition", text: "Une variable aléatoire réelle X définie sur un univers fini Ω est une fonction qui associe à chaque issue de Ω un nombre réel. On note X(Ω) = {x₁ ; x₂ ; ... ; xₙ} l'ensemble des valeurs prises par X." },
            },
            {
              heading: "Les événements définis par X",
              paragraphs: [
                "Pour un réel a, l'événement {X = a} est l'ensemble des issues dont l'image par X est égale à a. On définit de même {X ≤ a}, {X > a} ou {a ≤ X ≤ b}, et l'on note leurs probabilités P(X = a), P(X ≤ a), P(a ≤ X ≤ b). Dans l'exemple des deux pièces, {X = 1} = {PF ; FP} ; les quatre issues étant équiprobables, P(X = 1) = 2/4 = ½.",
                "Exemple de jeu : on lance un dé équilibré à six faces. Le joueur gagne 10 € si le 6 sort, 2 € si le 4 ou le 5 sort, et perd 3 € sinon. Son gain algébrique G est une variable aléatoire, avec G(Ω) = {-3 ; 2 ; 10} : une perte se traduit par une valeur négative. On a {G = 2} = {4 ; 5}, donc P(G = 2) = 2/6 = 1/3, et {G ≥ 2} = {4 ; 5 ; 6}, donc P(G ≥ 2) = 3/6 = ½.",
                "L'événement contraire de {X ≤ a} est {X > a}, et non {X ≥ a}. On a donc P(X > a) = 1 - P(X ≤ a). Soyez attentif aux inégalités strictes et larges : P(X ≥ a) et P(X > a) sont différentes dès que a est une valeur prise par X avec une probabilité non nulle.",
              ],
            },
            {
              heading: "La loi de probabilité de X",
              paragraphs: [
                "Déterminer la loi de probabilité de X, c'est donner chaque valeur xᵢ prise par X avec la probabilité pᵢ = P(X = xᵢ). On la présente dans un tableau à deux lignes : sur la première, les valeurs xᵢ rangées dans l'ordre croissant ; sur la seconde, les probabilités pᵢ correspondantes.",
                "Pour les deux pièces : P(X = 0) = 1/4, P(X = 1) = 1/2 et P(X = 2) = 1/4. Pour le jeu du dé : P(G = -3) = 3/6 = 1/2, P(G = 2) = 1/3 et P(G = 10) = 1/6. Dans chaque cas, la somme des probabilités vaut 1, car les événements {X = xᵢ} sont deux à deux incompatibles et leur réunion est l'univers tout entier.",
              ],
              box: { label: "Propriété", text: "Si X prend les valeurs x₁, ..., xₙ avec les probabilités p₁, ..., pₙ, alors chaque pᵢ est compris entre 0 et 1, et p₁ + p₂ + ... + pₙ = 1. Pour tout réel a, P(X ≤ a) est la somme des pᵢ pour lesquels xᵢ ≤ a." },
            },
            {
              heading: "Calculer avec la loi",
              paragraphs: [
                "Une fois la loi connue, on n'a plus besoin de revenir aux issues : P(X ≤ a) s'obtient en additionnant les probabilités des valeurs inférieures ou égales à a. Exemple : si X prend les valeurs 1, 2, 3, 4 avec les probabilités 0,1 ; 0,2 ; 0,3 ; 0,4, alors P(X ≤ 2) = 0,1 + 0,2 = 0,3 et P(X > 2) = 1 - 0,3 = 0,7.",
                "La condition « somme égale à 1 » sert aussi à trouver une probabilité manquante dans un tableau, ou à contrôler un calcul. Enfin, une probabilité s'interprète comme une fréquence théorique : si l'on répète l'expérience un grand nombre de fois, la fréquence d'apparition de la valeur xᵢ se rapproche de pᵢ.",
              ],
              box: { label: "À retenir", text: "Méthode : 1) décrire l'expérience et son univers ; 2) lister les valeurs prises par X ; 3) calculer P(X = xᵢ) pour chaque valeur ; 4) présenter le tableau et vérifier que la somme des probabilités vaut 1." },
            },
          ],
          keyPoints: [
            "Une variable aléatoire X associe un nombre réel à chaque issue de l'univers : c'est une fonction, pas une inconnue.",
            "{X = a} est l'ensemble des issues dont l'image est a ; plusieurs issues peuvent donner la même valeur.",
            "La loi de X : le tableau des valeurs xᵢ et des probabilités pᵢ = P(X = xᵢ).",
            "Chaque pᵢ est entre 0 et 1, et la somme des pᵢ vaut 1.",
            "P(X ≤ a) : somme des pᵢ tels que xᵢ ≤ a ; contraire : P(X > a) = 1 - P(X ≤ a).",
          ],
          example: {
            statement: "On tire au hasard une carte dans un jeu de 32 cartes (7, 8, 9, 10, valet, dame, roi et as dans chacune des quatre couleurs). Si la carte est un as, le joueur gagne 5 € ; si c'est une figure (valet, dame ou roi), il gagne 2 € ; sinon, il perd 1 €. On note X le gain algébrique du joueur. Déterminer la loi de X, puis calculer P(X > 0).",
            solution: [
              "Le tirage se fait au hasard : les 32 cartes ont la même probabilité d'être tirées, on est en situation d'équiprobabilité.",
              "Valeurs prises par X : X(Ω) = {-1 ; 2 ; 5}.",
              "Il y a 4 as, donc P(X = 5) = 4/32 = 1/8. Il y a 3 × 4 = 12 figures, donc P(X = 2) = 12/32 = 3/8. Les autres cartes (7, 8, 9 et 10) sont au nombre de 4 × 4 = 16, donc P(X = -1) = 16/32 = 1/2.",
              "Loi de X : pour xᵢ = -1 ; 2 ; 5, les probabilités sont pᵢ = 1/2 ; 3/8 ; 1/8.",
              "Vérification : 1/2 + 3/8 + 1/8 = 4/8 + 3/8 + 1/8 = 8/8 = 1.",
              "P(X > 0) = P(X = 2) + P(X = 5) = 3/8 + 1/8 = 4/8 = 1/2. Le joueur gagne de l'argent avec une probabilité de ½.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une variable aléatoire X prend les valeurs -2 ; 0 ; 1 ; 3 avec les probabilités respectives 0,1 ; 0,3 ; a ; 0,2. 1) Déterminer a. 2) Calculer P(X ≤ 0), P(X > 0) et P(-1 ≤ X ≤ 2).",
              hint: "La somme des probabilités d'une loi vaut 1. Pour P(-1 ≤ X ≤ 2), repérez les valeurs de X comprises entre -1 et 2.",
              solution: [
                "1) 0,1 + 0,3 + a + 0,2 = 1, donc 0,6 + a = 1 et a = 0,4.",
                "2) P(X ≤ 0) = P(X = -2) + P(X = 0) = 0,1 + 0,3 = 0,4.",
                "P(X > 0) est la probabilité de l'événement contraire : P(X > 0) = 1 - 0,4 = 0,6 (on vérifie : 0,4 + 0,2 = 0,6).",
                "Les valeurs de X comprises entre -1 et 2 sont 0 et 1, donc P(-1 ≤ X ≤ 2) = 0,3 + 0,4 = 0,7.",
                "Résultats : a = 0,4 ; P(X ≤ 0) = 0,4 ; P(X > 0) = 0,6 ; P(-1 ≤ X ≤ 2) = 0,7.",
              ],
            },
            {
              level: 2,
              statement: "On lance deux dés équilibrés à quatre faces, numérotées de 1 à 4, et on note X la somme des deux numéros obtenus. 1) Combien l'expérience compte-t-elle d'issues ? Quelles sont les valeurs prises par X ? 2) Déterminer la loi de X. 3) Calculer P(X ≥ 6) et la probabilité que la somme soit paire.",
              hint: "Faites un tableau à double entrée : le premier dé en ligne, le second en colonne, et la somme dans chaque case. Les 16 cases sont équiprobables.",
              solution: [
                "1) Chaque dé a 4 faces : il y a 4 × 4 = 16 issues équiprobables, les couples (a ; b). La somme va de 1 + 1 = 2 à 4 + 4 = 8, donc X(Ω) = {2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8}.",
                "2) En comptant les cases du tableau : la somme 2 apparaît 1 fois, 3 apparaît 2 fois, 4 apparaît 3 fois, 5 apparaît 4 fois, 6 apparaît 3 fois, 7 apparaît 2 fois et 8 apparaît 1 fois.",
                "Loi de X : P(X = 2) = 1/16, P(X = 3) = 2/16, P(X = 4) = 3/16, P(X = 5) = 4/16, P(X = 6) = 3/16, P(X = 7) = 2/16, P(X = 8) = 1/16. Vérification : 1 + 2 + 3 + 4 + 3 + 2 + 1 = 16, la somme vaut bien 1.",
                "3) P(X ≥ 6) = (3 + 2 + 1)/16 = 6/16 = 3/8.",
                "La somme est paire pour X = 2, 4, 6 ou 8 : probabilité (1 + 3 + 3 + 1)/16 = 8/16 = 1/2.",
                "Résultats : P(X ≥ 6) = 3/8 et P(« somme paire ») = 1/2.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Une urne contient 10 jetons indiscernables au toucher : 5 blancs, 3 rouges et 2 noirs. Un joueur paie 2 € pour tirer un jeton au hasard. S'il est blanc, il ne reçoit rien ; s'il est rouge, il reçoit 3 € ; s'il est noir, il reçoit 8 €. On note X le gain algébrique du joueur (somme reçue moins la mise). 1) Quelles valeurs X peut-il prendre ? 2) Déterminer la loi de X. 3) Calculer la probabilité que le joueur gagne de l'argent. 4) Le joueur fait deux parties ; le jeton est remis dans l'urne après la première, de sorte que les deux tirages sont indépendants. Calculer la probabilité que son gain total sur les deux parties soit strictement positif.",
              hint: "N'oubliez pas de retirer la mise de 2 €. Pour la question 4, cherchez plutôt les cas où le gain total est négatif ou nul, à l'aide d'un arbre.",
              solution: [
                "1) Blanc : 0 - 2 = -2 ; rouge : 3 - 2 = 1 ; noir : 8 - 2 = 6. Donc X(Ω) = {-2 ; 1 ; 6}.",
                "2) Les jetons sont tirés au hasard : P(X = -2) = 5/10 = 0,5 ; P(X = 1) = 3/10 = 0,3 ; P(X = 6) = 2/10 = 0,2. La somme vaut 0,5 + 0,3 + 0,2 = 1.",
                "3) P(X > 0) = P(X = 1) + P(X = 6) = 0,3 + 0,2 = 0,5.",
                "4) Gains possibles sur deux parties : -2 - 2 = -4 ; -2 + 1 = -1 ; -2 + 6 = 4 ; 1 + 1 = 2 ; 1 + 6 = 7 ; 6 + 6 = 12. Le total est négatif seulement si les deux jetons sont blancs (-4) ou si l'un est blanc et l'autre rouge (-1).",
                "Par indépendance : P(blanc puis blanc) = 0,5 × 0,5 = 0,25. P(un blanc et un rouge) = P(blanc puis rouge) + P(rouge puis blanc) = 0,5 × 0,3 + 0,3 × 0,5 = 0,3.",
                "La probabilité d'un gain total strictement positif est donc 1 - (0,25 + 0,3) = 1 - 0,55 = 0,45.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre compréhension des variables aléatoires.",
            statements: [
              { text: "Une variable aléatoire est une fonction définie sur l'univers.", true: true, why: "Elle associe un nombre réel à chaque issue de Ω." },
              { text: "La somme des probabilités d'une loi de probabilité vaut 1.", true: true, why: "Les événements {X = xᵢ} sont incompatibles et recouvrent tout l'univers." },
              { text: "On peut avoir P(X = 2) = 1,2.", true: false, why: "Une probabilité est toujours comprise entre 0 et 1." },
              { text: "Une variable aléatoire peut prendre des valeurs négatives.", true: true, why: "C'est le cas d'un gain algébrique : une perte est une valeur négative." },
              { text: "P(X > 2) = 1 - P(X < 2).", true: false, why: "Le contraire de {X > 2} est {X ≤ 2} : P(X > 2) = 1 - P(X ≤ 2)." },
              { text: "Deux issues différentes ne peuvent pas avoir la même image par X.", true: false, why: "Avec deux pièces, PF et FP donnent toutes deux X = 1." },
              { text: "Les valeurs xᵢ prises par X doivent être comprises entre 0 et 1.", true: false, why: "Ce sont les probabilités pᵢ qui sont entre 0 et 1, pas les valeurs xᵢ." },
            ],
          },
          quiz: [
            {
              q: "X prend les valeurs 1, 2, 3 avec les probabilités 0,2 ; 0,5 ; p. Que vaut p ?",
              options: ["0,7", "0,5", "0,2", "0,3"],
              answer: 3,
              why: "0,2 + 0,5 + p = 1, donc p = 0,3.",
            },
            {
              q: "On lance deux pièces équilibrées et X est le nombre de « face ». Que vaut P(X = 1) ?",
              options: ["1/2", "1/4", "1/3", "3/4"],
              answer: 0,
              why: "{X = 1} = {PF ; FP} contient 2 des 4 issues équiprobables : 2/4 = 1/2.",
            },
            {
              q: "X prend les valeurs -1 ; 0 ; 2 ; 5 avec les probabilités 0,1 ; 0,4 ; 0,3 ; 0,2. Que vaut P(X ≥ 2) ?",
              options: ["0,3", "0,2", "0,5", "0,9"],
              answer: 2,
              why: "P(X ≥ 2) = P(X = 2) + P(X = 5) = 0,3 + 0,2 = 0,5.",
            },
            {
              q: "L'événement contraire de {X ≤ 3} est :",
              options: ["{X ≥ 3}", "{X > 3}", "{X < 3}", "{X = 3}"],
              answer: 1,
              why: "Une issue qui ne vérifie pas X ≤ 3 vérifie X > 3 : la valeur 3 appartient à {X ≤ 3}.",
            },
            {
              q: "Une variable aléatoire réelle est :",
              options: ["un nombre fixé à l'avance", "une probabilité comprise entre 0 et 1", "un événement de l'univers", "une fonction de Ω dans ℝ"],
              answer: 3,
              why: "Elle associe à chaque issue de l'univers Ω un nombre réel.",
            },
          ],
          trap: "Confondre les valeurs xᵢ prises par X et leurs probabilités pᵢ, ou écrire P(X > a) = 1 - P(X ≥ a) : le contraire de {X > a} est {X ≤ a}, la valeur a comprise.",
          method: "Commencez toujours par écrire X(Ω), la liste des valeurs possibles, avant de calculer la moindre probabilité. Terminez en vérifiant que la somme de la seconde ligne de votre tableau vaut exactement 1 : c'est le contrôle le plus rapide et le plus efficace.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'esperance',
          title: 'Espérance : le gain moyen',
          minutes: 30,
          objectives: [
            "Calculer l'espérance d'une variable aléatoire à partir de sa loi de probabilité.",
            "Interpréter l'espérance comme une valeur moyenne sur un grand nombre de répétitions.",
            "Utiliser la linéarité de l'espérance : E(aX + b) = aE(X) + b.",
            "Déterminer si un jeu est équitable, favorable ou défavorable au joueur.",
          ],
          course: [
            {
              heading: "Définition de l'espérance",
              paragraphs: [
                "Soit X une variable aléatoire qui prend les valeurs x₁, x₂, ..., xₙ avec les probabilités p₁, p₂, ..., pₙ. L'espérance de X est le nombre E(X) = p₁x₁ + p₂x₂ + ... + pₙxₙ. C'est la moyenne des valeurs de X, chacune pondérée par sa probabilité, exactement comme une moyenne de notes est pondérée par les coefficients.",
                "Exemple : on lance un dé équilibré et X est le numéro obtenu. Chaque valeur de 1 à 6 a la probabilité 1/6, donc E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5. L'espérance n'est pas forcément une valeur prise par X : on n'obtient jamais 3,5 avec un dé.",
              ],
              box: { label: "Définition", text: "E(X) = p₁x₁ + p₂x₂ + ... + pₙxₙ, que l'on note aussi Σ pᵢxᵢ. L'espérance est toujours comprise entre la plus petite et la plus grande valeur prise par X." },
            },
            {
              heading: "Interprétation : une moyenne à long terme",
              paragraphs: [
                "Si l'on répète l'expérience un très grand nombre de fois, de façon indépendante, la moyenne des valeurs observées de X se rapproche de E(X). Ce résultat, admis en première, justifie le nom de « valeur moyenne » : avec un dé, la moyenne des numéros obtenus sur des milliers de lancers est proche de 3,5. On peut le constater par une simulation, par exemple en Python avec la fonction randint du module random.",
                "Dans un jeu, on note X le gain algébrique du joueur, c'est-à-dire ce qu'il reçoit moins ce qu'il a misé. Si E(X) > 0, le jeu est favorable au joueur : il gagne en moyenne. Si E(X) < 0, le jeu lui est défavorable : il perd en moyenne, et l'organisateur gagne. Si E(X) = 0, le jeu est dit équitable.",
                "Exemple : pour le jeu du dé de la leçon précédente (gain de 10 € avec le 6, de 2 € avec le 4 ou le 5, perte de 3 € sinon), E(G) = 10 × 1/6 + 2 × 1/3 + (-3) × 1/2 = 5/3 + 2/3 - 3/2 = 7/3 - 3/2 = 5/6 ≈ 0,83 €. Le jeu est favorable au joueur : sur un grand nombre de parties, il gagne en moyenne environ 0,83 € par partie.",
              ],
              box: { label: "Règle", text: "Jeu équitable : E(X) = 0. Jeu favorable au joueur : E(X) > 0. Jeu défavorable au joueur : E(X) < 0. Le gain algébrique X tient toujours compte de la mise." },
            },
            {
              heading: "Linéarité : E(aX + b)",
              paragraphs: [
                "Si a et b sont deux réels, la variable aléatoire aX + b prend les valeurs axᵢ + b avec les mêmes probabilités pᵢ. On a alors E(aX + b) = aE(X) + b. En effet, Σ pᵢ(axᵢ + b) = a Σ pᵢxᵢ + b Σ pᵢ = aE(X) + b, puisque la somme des pᵢ vaut 1.",
                "Cette propriété évite de recalculer toute une loi. Exemple : un joueur reçoit une somme R d'espérance E(R) = 3 € et doit miser 2 € par partie. Son gain algébrique est X = R - 2, donc E(X) = 3 - 2 = 1 €. Si tous les montants sont doublés, mise comprise, le gain devient 2X et son espérance vaut 2 €.",
              ],
              box: { label: "Propriété", text: "Pour tous réels a et b : E(aX + b) = aE(X) + b. En particulier, E(X + b) = E(X) + b et E(aX) = aE(X)." },
            },
          ],
          keyPoints: [
            "E(X) = p₁x₁ + p₂x₂ + ... + pₙxₙ : moyenne des valeurs pondérées par leurs probabilités.",
            "E(X) est la moyenne vers laquelle tendent les résultats quand on répète l'expérience un grand nombre de fois.",
            "Gain algébrique = somme reçue moins mise ; jeu équitable si E(X) = 0.",
            "E(X) > 0 : favorable au joueur ; E(X) < 0 : défavorable au joueur.",
            "Linéarité : E(aX + b) = aE(X) + b.",
            "Contrôle : E(X) est toujours entre la plus petite et la plus grande valeur de X.",
          ],
          example: {
            statement: "On reprend le jeu de 32 cartes : le joueur gagne 5 € s'il tire un as (probabilité 1/8), 2 € s'il tire une figure (probabilité 3/8), et perd 1 € sinon (probabilité 1/2). On note X son gain algébrique. 1) Calculer E(X) et interpréter. 2) L'organisateur veut rendre le jeu équitable en modifiant seulement la perte, notée L euros, subie quand la carte n'est ni un as ni une figure. Déterminer L.",
            solution: [
              "1) E(X) = 5 × 1/8 + 2 × 3/8 + (-1) × 1/2 = 5/8 + 6/8 - 4/8 = 7/8 = 0,875.",
              "E(X) > 0 : le jeu est favorable au joueur. Sur un grand nombre de parties, il gagne en moyenne environ 0,88 € par partie.",
              "2) Avec une perte de L euros, la valeur -1 est remplacée par -L, les probabilités ne changent pas : E(X) = 5/8 + 6/8 - L/2 = 11/8 - L/2.",
              "Le jeu est équitable si E(X) = 0 : 11/8 - L/2 = 0, soit L/2 = 11/8, donc L = 22/8 = 11/4 = 2,75.",
              "Vérification : 5/8 + 6/8 - 2,75 × 1/2 = 1,375 - 1,375 = 0.",
              "Conclusion : E(X) = 0,875 € ; le jeu devient équitable si la perte est fixée à 2,75 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une variable aléatoire X prend les valeurs -3 ; 0 ; 2 ; 4 avec les probabilités respectives 0,2 ; 0,3 ; 0,4 ; 0,1. 1) Calculer E(X). 2) En déduire E(2X - 1) et E(5 - X).",
              hint: "Multipliez chaque valeur par sa probabilité, puis additionnez. Pour la question 2, utilisez E(aX + b) = aE(X) + b sans recalculer de loi.",
              solution: [
                "1) E(X) = (-3) × 0,2 + 0 × 0,3 + 2 × 0,4 + 4 × 0,1 = -0,6 + 0 + 0,8 + 0,4 = 0,6.",
                "Contrôle : 0,6 est bien compris entre -3 et 4.",
                "2) E(2X - 1) = 2E(X) - 1 = 2 × 0,6 - 1 = 1,2 - 1 = 0,2.",
                "5 - X = -1 × X + 5, donc E(5 - X) = -E(X) + 5 = -0,6 + 5 = 4,4.",
                "Résultats : E(X) = 0,6 ; E(2X - 1) = 0,2 ; E(5 - X) = 4,4.",
              ],
            },
            {
              level: 2,
              statement: "Une tombola vend 200 billets à 2 € l'un. Les lots sont : un lot de 100 €, quatre lots de 20 € et quinze lots de 5 € ; les autres billets ne gagnent rien. Un joueur achète un billet, et l'on note X son gain algébrique (valeur du lot moins le prix du billet). 1) Déterminer la loi de X. 2) Calculer E(X) et interpréter. 3) Retrouver ce résultat à partir du bénéfice de l'organisateur, en supposant tous les billets vendus.",
              hint: "Les gains sont 100 - 2, 20 - 2, 5 - 2 et 0 - 2. Comptez les billets perdants : 200 - 1 - 4 - 15.",
              solution: [
                "1) Il y a 200 - 1 - 4 - 15 = 180 billets perdants. Valeurs de X : 98 ; 18 ; 3 ; -2, avec les probabilités 1/200 ; 4/200 ; 15/200 ; 180/200. La somme vaut 200/200 = 1.",
                "2) E(X) = (98 × 1 + 18 × 4 + 3 × 15 - 2 × 180)/200 = (98 + 72 + 45 - 360)/200 = -145/200 = -0,725.",
                "E(X) < 0 : le jeu est défavorable au joueur, qui perd en moyenne 0,725 € par billet.",
                "3) L'organisateur encaisse 200 × 2 = 400 € et distribue 100 + 4 × 20 + 15 × 5 = 100 + 80 + 75 = 255 €. Son bénéfice est 400 - 255 = 145 €, soit 145/200 = 0,725 € par billet.",
                "On retrouve bien le résultat : ce que l'organisateur gagne en moyenne par billet est exactement ce que le joueur perd en moyenne. E(X) = -0,725 €.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Un jeu consiste à lancer un dé équilibré à six faces. Le joueur mise m euros (m > 0). Si le 6 sort, il reçoit 12 € ; si le 4 ou le 5 sort, il reçoit 3 € ; sinon, il ne reçoit rien. On note R la somme reçue et X = R - m le gain algébrique. 1) Déterminer la loi de R et calculer E(R). 2) En déduire E(X) en fonction de m. 3) Pour quelle mise le jeu est-il équitable ? 4) L'organisateur veut gagner en moyenne 0,50 € par partie. Quelle mise doit-il fixer ? 5) Avec cette mise, estimer le bénéfice de l'organisateur sur 200 parties.",
              hint: "Calculez d'abord l'espérance de la somme reçue, qui ne dépend pas de m, puis utilisez E(R - m) = E(R) - m. Le gain moyen de l'organisateur est l'opposé de E(X).",
              solution: [
                "1) R prend les valeurs 0 ; 3 ; 12 avec les probabilités 3/6 = 1/2 ; 2/6 = 1/3 ; 1/6. E(R) = 0 × 1/2 + 3 × 1/3 + 12 × 1/6 = 0 + 1 + 2 = 3.",
                "2) Par linéarité, E(X) = E(R - m) = E(R) - m = 3 - m.",
                "3) Le jeu est équitable si E(X) = 0, c'est-à-dire 3 - m = 0 : la mise doit être de 3 €.",
                "4) L'organisateur gagne ce que le joueur perd : il veut E(X) = -0,5, soit 3 - m = -0,5, donc m = 3,5. La mise doit être de 3,50 €.",
                "5) Sur 200 parties, l'organisateur gagne en moyenne 0,50 € par partie : on peut estimer son bénéfice à 200 × 0,5 = 100 €.",
                "Résultats : E(R) = 3 ; E(X) = 3 - m ; jeu équitable pour m = 3 ; m = 3,50 € pour un bénéfice moyen de 0,50 € par partie, soit environ 100 € sur 200 parties.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour décider si un jeu est équitable.",
            items: [
              "Définir X, le gain algébrique du joueur (somme reçue moins mise).",
              "Lister les valeurs prises par X.",
              "Calculer la probabilité de chaque valeur.",
              "Vérifier que la somme des probabilités vaut 1.",
              "Calculer E(X) = Σ pᵢxᵢ.",
              "Comparer E(X) à 0 et conclure : équitable, favorable ou défavorable.",
            ],
          },
          quiz: [
            {
              q: "X prend la valeur 0 avec la probabilité 0,8 et la valeur 10 avec la probabilité 0,2. Que vaut E(X) ?",
              options: ["2", "5", "0,2", "8"],
              answer: 0,
              why: "E(X) = 0 × 0,8 + 10 × 0,2 = 2.",
            },
            {
              q: "Un jeu est équitable lorsque :",
              options: ["toutes les issues ont la même probabilité", "le gain maximal est égal à la mise", "l'espérance du gain algébrique est nulle", "le joueur gagne une partie sur deux"],
              answer: 2,
              why: "Équitable signifie qu'en moyenne, sur un grand nombre de parties, le joueur ne gagne ni ne perd : E(X) = 0.",
            },
            {
              q: "On sait que E(X) = 4. Que vaut E(3X - 2) ?",
              options: ["12", "14", "4", "10"],
              answer: 3,
              why: "E(3X - 2) = 3E(X) - 2 = 12 - 2 = 10.",
            },
            {
              q: "On lance un dé équilibré à six faces et X est le numéro obtenu. Que vaut E(X) ?",
              options: ["3", "3,5", "4", "21"],
              answer: 1,
              why: "E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5.",
            },
            {
              q: "Le gain algébrique X d'un joueur vérifie E(X) = -0,5 €. Sur un grand nombre de parties :",
              options: ["le joueur perd en moyenne 0,50 € par partie", "le joueur perd à chaque partie", "le joueur gagne 0,50 € par partie", "on ne peut rien prévoir"],
              answer: 0,
              why: "L'espérance est le gain moyen à long terme : il est négatif, mais le joueur peut gagner certaines parties.",
            },
          ],
          trap: "Oublier de retirer la mise : la somme reçue n'est pas le gain algébrique. Autre erreur fréquente : faire la moyenne simple des valeurs (diviser par leur nombre) au lieu de pondérer chaque valeur par sa probabilité.",
          method: "Contrôlez toujours votre espérance : elle doit être comprise entre la plus petite et la plus grande valeur de X, et son signe doit être cohérent avec le jeu (beaucoup de chances de perdre et de petits gains donnent en général une espérance négative).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'variance-ecart-type',
          title: 'Variance et écart type',
          minutes: 30,
          objectives: [
            "Calculer la variance et l'écart type d'une variable aléatoire à partir de sa loi.",
            "Utiliser la formule V(X) = E(X²) - (E(X))² pour simplifier les calculs.",
            "Interpréter l'écart type comme une mesure de dispersion et comparer deux situations de même espérance.",
            "Utiliser les relations V(aX + b) = a²V(X) et σ(aX + b) = |a| σ(X).",
          ],
          course: [
            {
              heading: "Même moyenne, risques différents",
              paragraphs: [
                "L'espérance ne dit pas tout. Comparez deux jeux : dans le jeu A, vous gagnez 1 € à coup sûr ; dans le jeu B, vous gagnez 101 € ou perdez 99 €, avec la même probabilité ½. Les deux jeux ont la même espérance, 1 € (pour B : 101 × ½ - 99 × ½ = 1), mais le jeu B est bien plus risqué : les valeurs de son gain sont très éloignées de la moyenne.",
                "Pour mesurer cet éloignement, appelé dispersion, on utilise la variance et l'écart type, comme en statistique pour une série de données. Ces deux nombres complètent l'espérance : l'espérance indique où se situe la moyenne, l'écart type indique à quel point les valeurs s'en écartent.",
              ],
            },
            {
              heading: "Variance et écart type",
              paragraphs: [
                "Soit X une variable aléatoire qui prend les valeurs xᵢ avec les probabilités pᵢ, d'espérance E(X). La variance de X est V(X) = p₁(x₁ - E(X))² + p₂(x₂ - E(X))² + ... + pₙ(xₙ - E(X))². C'est la moyenne pondérée des carrés des écarts à l'espérance. Les carrés empêchent les écarts positifs et négatifs de se compenser : une variance est toujours positive ou nulle.",
                "L'écart type est σ(X) = √V(X). Il s'exprime dans la même unité que X (des euros si X est un gain), alors que la variance s'exprime dans le carré de cette unité. Plus l'écart type est grand, plus les valeurs de X sont dispersées autour de l'espérance. Pour le jeu B : V = ½(101 - 1)² + ½(-99 - 1)² = ½ × 10 000 + ½ × 10 000 = 10 000, donc σ = 100 €. Pour le jeu A, V = 0 et σ = 0.",
              ],
              box: { label: "Définition", text: "V(X) = Σ pᵢ(xᵢ - E(X))², toujours positive ou nulle, et σ(X) = √V(X), dans l'unité de X. V(X) = 0 signifie que X est constante : elle prend une seule valeur, avec la probabilité 1." },
            },
            {
              heading: "Une formule de calcul plus rapide",
              paragraphs: [
                "En développant les carrés, on obtient la formule de König-Huygens : V(X) = E(X²) - (E(X))², où E(X²) = p₁x₁² + p₂x₂² + ... + pₙxₙ². On la retient ainsi : « la moyenne des carrés moins le carré de la moyenne ». Elle est souvent plus rapide, surtout quand E(X) n'est pas un nombre entier.",
                "Exemple : X prend les valeurs 0, 1, 2 avec les probabilités 1/4, 1/2, 1/4 (nombre de « pile » en deux lancers). E(X) = 0 + 1/2 + 2/4 = 1 et E(X²) = 0 + 1/2 + 4/4 = 3/2. Donc V(X) = 3/2 - 1² = 1/2 et σ(X) = √(1/2) = √2/2 ≈ 0,71. Un tableau à colonnes xᵢ, pᵢ, pᵢxᵢ et pᵢxᵢ² organise bien les calculs.",
              ],
              box: { label: "Formule", text: "V(X) = E(X²) - (E(X))², avec E(X²) = Σ pᵢxᵢ². Attention : on soustrait le carré de l'espérance, pas l'espérance elle-même." },
            },
            {
              heading: "Effet d'une transformation affine",
              paragraphs: [
                "Pour tous réels a et b, V(aX + b) = a²V(X) et σ(aX + b) = |a| × σ(X). Ajouter une constante b décale toutes les valeurs du même montant : la moyenne change, mais pas la dispersion. Multiplier par a multiplie tous les écarts par a, donc les carrés des écarts par a².",
                "Exemple : un gain X a pour espérance 2 € et pour écart type 3 €. On triple tous les montants, puis on retire une mise fixe de 1 € : le nouveau gain Y = 3X - 1 vérifie E(Y) = 3 × 2 - 1 = 5 €, V(Y) = 3² × 3² = 81 et σ(Y) = 3 × 3 = 9 €.",
              ],
              box: { label: "Propriété", text: "V(aX + b) = a²V(X) et σ(aX + b) = |a| σ(X). La constante b n'intervient pas, et un écart type n'est jamais négatif, même si a < 0." },
            },
          ],
          keyPoints: [
            "V(X) = Σ pᵢ(xᵢ - E(X))² : moyenne pondérée des carrés des écarts à l'espérance, toujours ≥ 0.",
            "σ(X) = √V(X), exprimé dans la même unité que X.",
            "König-Huygens : V(X) = E(X²) - (E(X))².",
            "Plus σ est grand, plus les valeurs sont dispersées autour de l'espérance : c'est une mesure du risque.",
            "V(aX + b) = a²V(X) et σ(aX + b) = |a| σ(X).",
          ],
          example: {
            statement: "On compare deux jeux. Dans le jeu A, le gain X vaut -1 €, 1 € ou 3 € avec les probabilités 0,5 ; 0,3 ; 0,2. Dans le jeu B, le gain Y vaut -5 €, 0 € ou 6 € avec les probabilités 0,4 ; 0,2 ; 0,4. Calculer l'espérance et l'écart type de chaque gain, puis comparer les deux jeux.",
            solution: [
              "Jeu A : E(X) = -1 × 0,5 + 1 × 0,3 + 3 × 0,2 = -0,5 + 0,3 + 0,6 = 0,4.",
              "E(X²) = 1 × 0,5 + 1 × 0,3 + 9 × 0,2 = 0,5 + 0,3 + 1,8 = 2,6, donc V(X) = 2,6 - 0,4² = 2,6 - 0,16 = 2,44 et σ(X) = √2,44 ≈ 1,56 €.",
              "Jeu B : E(Y) = -5 × 0,4 + 0 × 0,2 + 6 × 0,4 = -2 + 0 + 2,4 = 0,4.",
              "E(Y²) = 25 × 0,4 + 0 + 36 × 0,4 = 10 + 14,4 = 24,4, donc V(Y) = 24,4 - 0,16 = 24,24 et σ(Y) = √24,24 ≈ 4,92 €.",
              "Comparaison : les deux jeux ont la même espérance, 0,40 € de gain moyen par partie, mais l'écart type du jeu B est environ trois fois plus grand.",
              "Conclusion : les gains du jeu B sont beaucoup plus dispersés ; c'est le jeu le plus risqué. Un joueur prudent préférera le jeu A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une variable aléatoire X prend les valeurs 1 ; 2 ; 4 avec les probabilités respectives 0,5 ; 0,3 ; 0,2. 1) Calculer E(X). 2) Calculer V(X) avec la définition, puis vérifier le résultat avec la formule de König-Huygens. 3) En déduire une valeur approchée de σ(X) à 0,01 près.",
              hint: "Calculez d'abord E(X), puis chaque écart xᵢ - E(X), élevez-le au carré et multipliez par pᵢ. Pour la vérification, calculez E(X²).",
              solution: [
                "1) E(X) = 1 × 0,5 + 2 × 0,3 + 4 × 0,2 = 0,5 + 0,6 + 0,8 = 1,9.",
                "2) Écarts : 1 - 1,9 = -0,9 ; 2 - 1,9 = 0,1 ; 4 - 1,9 = 2,1. Carrés : 0,81 ; 0,01 ; 4,41.",
                "V(X) = 0,5 × 0,81 + 0,3 × 0,01 + 0,2 × 4,41 = 0,405 + 0,003 + 0,882 = 1,29.",
                "Vérification : E(X²) = 1 × 0,5 + 4 × 0,3 + 16 × 0,2 = 0,5 + 1,2 + 3,2 = 4,9, et 4,9 - 1,9² = 4,9 - 3,61 = 1,29. Les deux méthodes concordent.",
                "3) σ(X) = √1,29 ≈ 1,14.",
              ],
            },
            {
              level: 2,
              statement: "Une variable aléatoire X vérifie E(X) = 5 et V(X) = 4. 1) Donner σ(X). 2) On pose Y = 3X - 2. Calculer E(Y), V(Y) et σ(Y). 3) On pose Z = -2X + 7. Calculer E(Z), V(Z) et σ(Z). 4) Calculer E(X²).",
              hint: "Utilisez E(aX + b) = aE(X) + b, V(aX + b) = a²V(X) et σ(aX + b) = |a| σ(X). Pour la question 4, transformez la formule de König-Huygens.",
              solution: [
                "1) σ(X) = √4 = 2.",
                "2) E(Y) = 3 × 5 - 2 = 13 ; V(Y) = 3² × 4 = 36 ; σ(Y) = 3 × 2 = 6 (ou √36 = 6).",
                "3) E(Z) = -2 × 5 + 7 = -3 ; V(Z) = (-2)² × 4 = 16 ; σ(Z) = |-2| × 2 = 4. L'écart type reste positif.",
                "4) V(X) = E(X²) - (E(X))², donc E(X²) = V(X) + (E(X))² = 4 + 25 = 29.",
                "Résultats : σ(X) = 2 ; E(Y) = 13, V(Y) = 36, σ(Y) = 6 ; E(Z) = -3, V(Z) = 16, σ(Z) = 4 ; E(X²) = 29.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac (calculatrice autorisée). Une entreprise hésite entre deux projets. Le bénéfice du projet A, en milliers d'euros, est une variable aléatoire A qui vaut -20, 10 ou 30 avec les probabilités 0,1 ; 0,6 ; 0,3. Le bénéfice du projet B vaut -60, 20 ou 60 avec les probabilités 0,2 ; 0,5 ; 0,3. 1) Calculer E(A) et E(B). 2) Calculer V(A), V(B) puis les écarts types, arrondis au dixième. 3) Quelle est, pour chaque projet, la probabilité de perdre de l'argent ? 4) Quel projet conseiller à une entreprise prudente ? à une entreprise qui cherche le meilleur bénéfice moyen ? 5) Une subvention ajoute 5 milliers d'euros à chaque bénéfice possible du projet A. Que deviennent son espérance et son écart type ?",
              hint: "Utilisez la formule V = E(X²) - (E(X))². Pour la question 5, le nouveau bénéfice s'écrit A + 5.",
              solution: [
                "1) E(A) = -20 × 0,1 + 10 × 0,6 + 30 × 0,3 = -2 + 6 + 9 = 13. E(B) = -60 × 0,2 + 20 × 0,5 + 60 × 0,3 = -12 + 10 + 18 = 16.",
                "2) E(A²) = 400 × 0,1 + 100 × 0,6 + 900 × 0,3 = 40 + 60 + 270 = 370, donc V(A) = 370 - 13² = 370 - 169 = 201 et σ(A) = √201 ≈ 14,2.",
                "E(B²) = 3600 × 0,2 + 400 × 0,5 + 3600 × 0,3 = 720 + 200 + 1080 = 2000, donc V(B) = 2000 - 16² = 2000 - 256 = 1744 et σ(B) = √1744 ≈ 41,8.",
                "3) Le projet A fait perdre de l'argent avec la probabilité P(A = -20) = 0,1 ; le projet B avec la probabilité P(B = -60) = 0,2, et la perte possible est trois fois plus lourde.",
                "4) Le projet B rapporte davantage en moyenne (16 000 € contre 13 000 €), mais son écart type est près de trois fois plus grand : il est beaucoup plus risqué. Une entreprise prudente choisira A ; une entreprise qui privilégie le bénéfice moyen et accepte le risque choisira B.",
                "5) Le nouveau bénéfice est A + 5 : E(A + 5) = 13 + 5 = 18 milliers d'euros, et σ(A + 5) = σ(A) ≈ 14,2, car ajouter une constante ne change pas la dispersion.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa signification ou à sa valeur.",
            pairs: [
              { left: "V(X)", right: "Moyenne pondérée des carrés des écarts à E(X)" },
              { left: "σ(X)", right: "√V(X), dans la même unité que X" },
              { left: "E(X²) - (E(X))²", right: "Autre expression de V(X)" },
              { left: "V(aX + b)", right: "a²V(X)" },
              { left: "σ(aX + b)", right: "|a| σ(X)" },
              { left: "V(X) = 0", right: "X est constante" },
            ],
          },
          quiz: [
            {
              q: "On sait que V(X) = 9. Que vaut σ(X) ?",
              options: ["81", "4,5", "3", "√3"],
              answer: 2,
              why: "σ(X) = √V(X) = √9 = 3.",
            },
            {
              q: "On sait que E(X) = 2 et E(X²) = 7. Que vaut V(X) ?",
              options: ["3", "5", "9", "√3"],
              answer: 0,
              why: "V(X) = E(X²) - (E(X))² = 7 - 4 = 3.",
            },
            {
              q: "On sait que σ(X) = 2. Que vaut σ(-3X + 1) ?",
              options: ["-6", "-5", "7", "6"],
              answer: 3,
              why: "σ(-3X + 1) = |-3| × σ(X) = 3 × 2 = 6 : un écart type n'est jamais négatif.",
            },
            {
              q: "Laquelle de ces affirmations est toujours vraie ?",
              options: ["V(X) peut être négative", "V(X) ≥ 0", "σ(X) = (V(X))²", "V(X + 5) = V(X) + 5"],
              answer: 1,
              why: "La variance est une somme de termes pᵢ(xᵢ - E(X))², tous positifs ou nuls.",
            },
            {
              q: "Deux jeux ont la même espérance de gain, mais le jeu B a un écart type plus grand que le jeu A. Cela signifie que :",
              options: ["le jeu B rapporte plus en moyenne", "le jeu B est le seul équitable", "les gains du jeu B sont plus dispersés", "le jeu B compte moins d'issues"],
              answer: 2,
              why: "L'écart type mesure la dispersion autour de l'espérance : le jeu B est plus risqué, sans rapporter plus en moyenne.",
            },
          ],
          trap: "Oublier d'élever l'espérance au carré dans V(X) = E(X²) - (E(X))², ou écrire V(aX + b) = aV(X) + b : la constante b disparaît et le coefficient a est élevé au carré.",
          method: "Organisez vos calculs dans un tableau à quatre lignes : xᵢ, pᵢ, pᵢxᵢ et pᵢxᵢ². Les sommes des deux dernières lignes donnent E(X) et E(X²). Vérifiez enfin que la variance obtenue est positive : un résultat négatif signale toujours une erreur.",
        },
      ],
    },
    {
      id: 'epreuve-anticipee',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'automatismes-calcul',
          title: 'Automatismes : calcul numérique et algébrique sans calculatrice',
          minutes: 35,
          objectives: [
            "Effectuer sans calculatrice des calculs sur les fractions, les puissances et les racines carrées.",
            "Développer, factoriser et réduire une expression algébrique à l'aide des identités remarquables.",
            "Résoudre rapidement une équation ou une inéquation du premier degré, une équation produit nul ou une équation x² = a.",
            "Contrôler un résultat à l'aide d'un ordre de grandeur ou d'une valeur test.",
          ],
          course: [
            {
              heading: "Les automatismes dans l'épreuve anticipée",
              paragraphs: [
                "L'épreuve anticipée de mathématiques dure 2 heures et se passe sans calculatrice. Elle commence par une partie d'automatismes, notée sur 6 points, sous forme de questions à choix multiples, suivie d'exercices indépendants notés sur 14 points. Les automatismes sont des savoir-faire qui doivent être mobilisés en quelques secondes : calcul numérique et littéral, proportions et pourcentages, évolutions, fonctions et lectures graphiques, statistiques et probabilités.",
                "Comme pour un musicien qui travaille ses gammes, l'objectif n'est pas de découvrir une méthode le jour de l'épreuve, mais de calculer vite et juste parce que l'on s'est entraîné régulièrement. Ces calculs servent aussi dans la seconde partie : une erreur de fraction ou de signe peut fausser tout un exercice.",
              ],
              box: { label: "Repère", text: "Épreuve anticipée de mathématiques : 2 heures, sans calculatrice, coefficient 2. Première partie : automatismes en QCM (6 points). Seconde partie : exercices indépendants (14 points)." },
            },
            {
              heading: "Fractions et puissances",
              paragraphs: [
                "Pour additionner deux fractions, on les réduit au même dénominateur : 2/3 - 5/6 = 4/6 - 5/6 = -1/6. Pour multiplier, on multiplie les numérateurs entre eux et les dénominateurs entre eux, en simplifiant dès que possible : 4/9 × 3/8 = (4 × 3)/(9 × 8) = 12/72 = 1/6. Diviser par une fraction non nulle revient à multiplier par son inverse : (3/5) ÷ (9/10) = 3/5 × 10/9 = 30/45 = 2/3.",
                "Pour les puissances d'un réel a non nul et des entiers n et m : aⁿ × aᵐ = aⁿ⁺ᵐ, aⁿ/aᵐ = aⁿ⁻ᵐ, (aⁿ)ᵐ = aⁿᵐ (exposant n × m), a⁰ = 1 et a⁻ⁿ = 1/aⁿ. Exemples : 2⁵ × 2⁻³ = 2² = 4 ; 10⁴ × 10⁻⁷ = 10⁻³ = 0,001. Attention aux parenthèses : (-2)⁴ = 16, mais -2⁴ = -(2⁴) = -16.",
              ],
              box: { label: "Règle", text: "a/b + c/d = (ad + bc)/(bd) ; (a/b) × (c/d) = (ac)/(bd) ; (a/b) ÷ (c/d) = (a/b) × (d/c). Puissances : aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ/aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿᵐ (exposant n × m) ; a⁻ⁿ = 1/aⁿ." },
            },
            {
              heading: "Racines carrées",
              paragraphs: [
                "Pour a ≥ 0 et b ≥ 0 : √(a × b) = √a × √b, et, si b > 0, √(a/b) = √a/√b. On a aussi (√a)² = a. Ces règles permettent de simplifier : √50 = √(25 × 2) = 5√2 et √12 + √27 = 2√3 + 3√3 = 5√3. Pour simplifier, on cherche dans le nombre sous la racine le plus grand carré parfait possible (4, 9, 16, 25, 36...).",
                "En revanche, il n'existe aucune règle pour la somme : √(a + b) n'est pas égal à √a + √b. Par exemple, √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. On peut aussi faire disparaître une racine d'un dénominateur : 1/√2 = √2/2.",
              ],
            },
            {
              heading: "Calcul littéral : développer et factoriser",
              paragraphs: [
                "Les identités remarquables sont à connaître dans les deux sens : (a + b)² = a² + 2ab + b², (a - b)² = a² - 2ab + b² et (a + b)(a - b) = a² - b². Exemples : (2x - 3)² = 4x² - 12x + 9 et x² - 9 = (x - 3)(x + 3). L'oubli du double produit 2ab est l'erreur la plus fréquente.",
                "Factoriser, c'est écrire une expression sous forme de produit. On cherche d'abord un facteur commun : 3x(x - 1) - 2(x - 1) = (x - 1)(3x - 2). Sinon, on reconnaît une identité remarquable : x² - 10x + 25 = (x - 5)². Pour vérifier un développement ou une factorisation, remplacez x par une valeur simple (0, 1 ou 2) dans les deux expressions : elles doivent donner le même résultat.",
              ],
              box: { label: "Formule", text: "(a + b)² = a² + 2ab + b² ; (a - b)² = a² - 2ab + b² ; (a + b)(a - b) = a² - b²." },
            },
            {
              heading: "Équations et inéquations rapides",
              paragraphs: [
                "Pour une équation du premier degré, on isole x : 3x + 5 = 11 donne 3x = 6, donc x = 2. Dans une inéquation, multiplier ou diviser les deux membres par un nombre strictement négatif change le sens de l'inégalité : -2x < 6 donne x > -3. Un produit est nul si et seulement si l'un de ses facteurs est nul : (x - 2)(3x + 1) = 0 donne x = 2 ou x = -1/3.",
                "Pour x² = a : si a > 0, il y a deux solutions, √a et -√a ; si a = 0, une seule, 0 ; si a < 0, aucune. Ne divisez jamais les deux membres par x sans précaution : dans x² = 5x, on factorise x(x - 5) = 0, ce qui donne x = 0 ou x = 5, alors que diviser par x ferait perdre la solution 0.",
              ],
              box: { label: "À retenir", text: "Diviser par un nombre négatif change le sens d'une inégalité. Produit nul : un des facteurs est nul. x² = a avec a > 0 : deux solutions, √a et -√a. Contrôle : remplacer x par la solution trouvée." },
            },
          ],
          keyPoints: [
            "Fractions : même dénominateur pour additionner ; diviser revient à multiplier par l'inverse.",
            "Puissances : aⁿ × aᵐ = aⁿ⁺ᵐ, a⁻ⁿ = 1/aⁿ ; attention, -2⁴ = -16 mais (-2)⁴ = 16.",
            "√(ab) = √a × √b, mais √(a + b) ≠ √a + √b.",
            "(a + b)² = a² + 2ab + b² : ne jamais oublier le double produit.",
            "Inéquation : diviser par un nombre négatif change le sens de l'inégalité.",
            "Vérifier un calcul littéral en remplaçant x par une valeur simple.",
          ],
          example: {
            statement: "Sans calculatrice, calculer et donner le résultat sous la forme la plus simple : A = (3/4 - 1/6) ÷ (7/12) ; B = (2³ × 10⁻²)/(4 × 10⁻⁵) ; C = √75 - 2√12.",
            solution: [
              "A : on réduit au dénominateur 12 : 3/4 - 1/6 = 9/12 - 2/12 = 7/12.",
              "Puis (7/12) ÷ (7/12) = 1. Donc A = 1.",
              "B : 2³ = 8, donc B = (8/4) × (10⁻²/10⁻⁵). Or 10⁻²/10⁻⁵ = 10 puissance (-2 + 5) = 10³, donc B = 2 × 10³ = 2000.",
              "C : √75 = √(25 × 3) = 5√3 et √12 = √(4 × 3) = 2√3, donc 2√12 = 4√3.",
              "C = 5√3 - 4√3 = √3.",
              "Résultats : A = 1 ; B = 2000 ; C = √3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans calculatrice, calculer : a) 5/6 + 3/4 ; b) (2/5) × (15/8) ; c) -3² + (-2)³ ; d) (10⁴ × 10⁻⁶)/10⁻³ ; e) √18 × √2.",
              hint: "Pour a), le plus petit dénominateur commun est 12. Pour c), la puissance s'applique avant le signe moins quand il n'y a pas de parenthèses.",
              solution: [
                "a) 5/6 + 3/4 = 10/12 + 9/12 = 19/12.",
                "b) (2/5) × (15/8) = 30/40 = 3/4 (on peut simplifier avant : 2/8 = 1/4 et 15/5 = 3).",
                "c) -3² = -9 et (-2)³ = -8, donc -3² + (-2)³ = -9 - 8 = -17.",
                "d) 10⁴ × 10⁻⁶ = 10⁻², puis 10⁻²/10⁻³ = 10⁻²⁺³ = 10¹ = 10.",
                "e) √18 × √2 = √36 = 6.",
                "Résultats : 19/12 ; 3/4 ; -17 ; 10 ; 6.",
              ],
            },
            {
              level: 2,
              statement: "a) Développer et réduire (3x + 2)². b) Développer et réduire (x - 5)(x + 5) - (x - 1)². c) Factoriser 4x² - 25. d) Factoriser (x + 1)(2x - 3) + (x + 1)(x + 4). e) Factoriser x² - 6x + 9.",
              hint: "Pour b), mettez (x - 1)² entre parenthèses avant de soustraire. Pour d), le facteur commun est (x + 1). Pour c) et e), cherchez une identité remarquable.",
              solution: [
                "a) (3x + 2)² = (3x)² + 2 × 3x × 2 + 2² = 9x² + 12x + 4.",
                "b) (x - 5)(x + 5) = x² - 25 et (x - 1)² = x² - 2x + 1. Donc x² - 25 - (x² - 2x + 1) = x² - 25 - x² + 2x - 1 = 2x - 26.",
                "c) 4x² - 25 = (2x)² - 5² = (2x - 5)(2x + 5).",
                "d) (x + 1)[(2x - 3) + (x + 4)] = (x + 1)(3x + 1).",
                "e) x² - 6x + 9 = x² - 2 × x × 3 + 3² = (x - 3)².",
                "Vérification de b) avec x = 0 : (-5)(5) - (-1)² = -25 - 1 = -26, et 2 × 0 - 26 = -26. Le résultat est cohérent.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type épreuve anticipée, sans calculatrice. Résoudre dans ℝ : a) 3 - 2x ≥ 7 ; b) (2x - 1)(x + 3) = 0 ; c) x² - 4x = 0 ; d) 4x² = 9 ; e) 5/(x - 1) = 2, pour x ≠ 1.",
              hint: "Pour a), attention au sens de l'inégalité quand vous divisez par -2. Pour c), factorisez par x au lieu de diviser. Pour e), multipliez les deux membres par (x - 1).",
              solution: [
                "a) 3 - 2x ≥ 7 équivaut à -2x ≥ 4, puis, en divisant par -2 < 0, x ≤ -2. Ensemble des solutions : ]-∞ ; -2].",
                "b) Produit nul : 2x - 1 = 0 ou x + 3 = 0, donc x = 1/2 ou x = -3. S = {-3 ; 1/2}.",
                "c) x² - 4x = x(x - 4) = 0, donc x = 0 ou x = 4. S = {0 ; 4}.",
                "d) 4x² = 9 équivaut à x² = 9/4, donc x = 3/2 ou x = -3/2. S = {-3/2 ; 3/2}.",
                "e) Pour x ≠ 1 : 5 = 2(x - 1), soit 5 = 2x - 2, donc 2x = 7 et x = 7/2, qui est bien différent de 1. Vérification : 7/2 - 1 = 5/2 et 5 ÷ (5/2) = 2. S = {7/2}.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Repérez les pièges classiques du calcul sans calculatrice.",
            statements: [
              { text: "(a + b)² = a² + b²", true: false, why: "Il manque le double produit : (a + b)² = a² + 2ab + b²." },
              { text: "√(9 + 16) = 7", true: false, why: "√(9 + 16) = √25 = 5 : la racine d'une somme n'est pas la somme des racines." },
              { text: "2⁻³ = 1/8", true: true, why: "a⁻ⁿ = 1/aⁿ, donc 2⁻³ = 1/2³ = 1/8." },
              { text: "-2⁴ = 16", true: false, why: "Sans parenthèses, la puissance passe avant le signe : -2⁴ = -16." },
              { text: "Diviser par 2/3 revient à multiplier par 3/2.", true: true, why: "Diviser par une fraction non nulle, c'est multiplier par son inverse." },
              { text: "Si -3x < 6, alors x < -2.", true: false, why: "On divise par -3 < 0, donc le sens change : x > -2." },
              { text: "10³ × 10⁻⁵ = 10⁻²", true: true, why: "On additionne les exposants : 3 + (-5) = -2." },
              { text: "√12 = 2√3", true: true, why: "√12 = √(4 × 3) = √4 × √3 = 2√3." },
            ],
          },
          quiz: [
            {
              q: "Que vaut 7/3 - 1/2 ?",
              options: ["6/1", "11/6", "6/5", "8/5"],
              answer: 1,
              why: "7/3 - 1/2 = 14/6 - 3/6 = 11/6.",
            },
            {
              q: "La forme développée de (2x - 1)² est :",
              options: ["4x² - 1", "2x² - 4x + 1", "4x² + 1", "4x² - 4x + 1"],
              answer: 3,
              why: "(2x - 1)² = (2x)² - 2 × 2x × 1 + 1² = 4x² - 4x + 1.",
            },
            {
              q: "√48 est égal à :",
              options: ["4√3", "3√4", "16√3", "8√6"],
              answer: 0,
              why: "√48 = √(16 × 3) = 4√3.",
            },
            {
              q: "Que vaut (5 × 10³) × (4 × 10⁻⁵) ?",
              options: ["2 × 10⁻¹⁵", "20", "0,2", "2 × 10²"],
              answer: 2,
              why: "5 × 4 = 20 et 10³ × 10⁻⁵ = 10⁻², donc 20 × 10⁻² = 0,2.",
            },
            {
              q: "Quelles sont les solutions de x² = 16 ?",
              options: ["4 seulement", "-4 et 4", "-8 et 8", "aucune"],
              answer: 1,
              why: "16 > 0 : il y a deux solutions, √16 = 4 et -√16 = -4.",
            },
          ],
          trap: "Oublier le double produit dans (a + b)², écrire √(a + b) = √a + √b, ou ne pas changer le sens d'une inégalité après une division par un nombre négatif.",
          method: "Entraînez-vous un peu chaque jour, chronomètre en main, sur des séries courtes de calculs. Après chaque développement ou factorisation, faites un test avec x = 0 ou x = 1 dans les deux expressions : c'est une vérification qui prend dix secondes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'automatismes-qcm',
          title: 'Automatismes : proportions, évolutions, lectures graphiques en QCM',
          minutes: 30,
          objectives: [
            "Calculer une proportion, appliquer un pourcentage et calculer une proportion de proportion.",
            "Passer d'un taux d'évolution à un coefficient multiplicateur, enchaîner des évolutions successives et calculer une évolution réciproque.",
            "Lire graphiquement une image, des antécédents, un coefficient directeur, un extremum ou des variations.",
            "Répondre efficacement à un QCM en éliminant les propositions incohérentes.",
          ],
          course: [
            {
              heading: "Proportions et pourcentages",
              paragraphs: [
                "La proportion d'une sous-population A dans une population E est p = nA/nE, un nombre compris entre 0 et 1 que l'on peut écrire en pourcentage. Exemple : 24 élèves sur 32 font du sport, soit p = 24/32 = 3/4 = 75 %. Inversement, prendre t % d'une quantité revient à la multiplier par t/100 : 35 % de 240 font 0,35 × 240 = 84.",
                "Proportion de proportion : si A est une partie de B, elle-même partie de E, alors la proportion de A dans E est le produit des proportions. Exemple : 60 % des élèves sont des filles et 25 % de ces filles suivent une option ; les filles qui suivent l'option représentent 0,6 × 0,25 = 0,15, soit 15 % de l'ensemble des élèves.",
              ],
              box: { label: "Formule", text: "Proportion : p = nA/nE. Appliquer t % : multiplier par t/100. Proportion de proportion : p(A dans E) = p(A dans B) × p(B dans E)." },
            },
            {
              heading: "Évolutions et coefficients multiplicateurs",
              paragraphs: [
                "Augmenter une quantité de t % revient à la multiplier par le coefficient multiplicateur CM = 1 + t/100 ; la diminuer de t % revient à la multiplier par 1 - t/100. Exemples : une hausse de 20 % correspond à × 1,2 ; une baisse de 15 % à × 0,85. Le taux d'évolution entre une valeur de départ VD et une valeur d'arrivée VA est t = (VA - VD)/VD : de 80 € à 92 €, t = 12/80 = 0,15, soit + 15 %.",
                "Évolutions successives : on multiplie les coefficients, on n'additionne jamais les pourcentages. Une hausse de 10 % suivie d'une baisse de 10 % donne 1,1 × 0,9 = 0,99, soit une baisse globale de 1 %. Évolution réciproque : pour revenir à la valeur initiale, on multiplie par l'inverse 1/CM. Après une hausse de 25 % (× 1,25), il faut multiplier par 1/1,25 = 0,8, soit une baisse de 20 %, et non de 25 %.",
              ],
              box: { label: "Règle", text: "Hausse de t % : × (1 + t/100). Baisse de t % : × (1 - t/100). Évolutions successives : produit des coefficients. Évolution réciproque : coefficient 1/CM." },
            },
            {
              heading: "Lectures graphiques",
              paragraphs: [
                "Sur la courbe d'une fonction f, l'image f(a) se lit sur l'axe des ordonnées, au point de la courbe d'abscisse a. Les antécédents d'un nombre b sont les abscisses des points d'intersection de la courbe avec la droite horizontale d'équation y = b : il peut y en avoir zéro, un ou plusieurs. Résoudre graphiquement f(x) ≥ k, c'est lire les abscisses des points de la courbe situés sur ou au-dessus de cette droite.",
                "Pour une droite passant par A(xA ; yA) et B(xB ; yB) avec xA ≠ xB, le coefficient directeur est m = (yB - yA)/(xB - xA) : il indique de combien monte (ou descend) la droite quand x augmente de 1. Le nombre dérivé f'(a) est le coefficient directeur de la tangente au point d'abscisse a. Enfin, f est croissante là où f' est positive et décroissante là où f' est négative : un tableau de variations se lit en lien avec le signe de la dérivée.",
              ],
            },
            {
              heading: "Stratégie pour les QCM",
              paragraphs: [
                "Lisez la question en entier, puis toutes les propositions avant de calculer : elles indiquent souvent la forme attendue du résultat. Éliminez d'abord les réponses impossibles : une probabilité supérieure à 1, un prix final plus élevé après une baisse, un signe incohérent avec le graphique. Testez une proposition en la remplaçant dans l'énoncé quand c'est plus rapide que de résoudre.",
                "Ne restez pas bloqué : passez à la question suivante et revenez-y à la fin. Lisez la consigne du sujet sur le barème ; lorsque les réponses fausses ne retirent pas de point, il vaut mieux répondre à toutes les questions plutôt que d'en laisser une sans réponse.",
              ],
              box: { label: "À retenir", text: "Lire toutes les propositions, éliminer les incohérentes, vérifier par un ordre de grandeur ou en remplaçant dans l'énoncé, ne pas s'attarder, revenir aux questions laissées de côté." },
            },
          ],
          keyPoints: [
            "Proportion de proportion : on multiplie les proportions (60 % de 25 % = 15 %).",
            "Hausse de t % : × (1 + t/100) ; baisse de t % : × (1 - t/100).",
            "Taux d'évolution : t = (VA - VD)/VD.",
            "Évolutions successives : on multiplie les coefficients ; + 10 % puis - 10 % donne - 1 %.",
            "Évolution réciproque : coefficient 1/CM ; après + 25 %, il faut - 20 % pour revenir.",
            "Antécédents de b : abscisses des points de la courbe d'ordonnée b.",
            "Coefficient directeur : m = (yB - yA)/(xB - xA).",
          ],
          example: {
            statement: "Sans calculatrice. Le prix d'un article augmente de 20 %, puis baisse de 20 %. 1) Quelle est l'évolution globale ? 2) Après la seule hausse de 20 %, quel taux d'évolution faudrait-il appliquer pour revenir au prix initial ?",
            solution: [
              "1) Une hausse de 20 % correspond au coefficient 1,2 ; une baisse de 20 % au coefficient 0,8.",
              "Le coefficient global est le produit : 1,2 × 0,8 = 0,96.",
              "0,96 = 1 - 0,04 : le prix a globalement baissé de 4 %. Les deux évolutions ne se compensent pas, car la baisse s'applique à un prix plus élevé.",
              "2) Pour revenir au prix initial, il faut multiplier par 1/1,2 = 10/12 = 5/6.",
              "5/6 = 1 - 1/6 et 1/6 ≈ 0,167 : il faut une baisse d'environ 16,7 %.",
              "Conclusion : baisse globale de 4 % ; l'évolution réciproque d'une hausse de 20 % est une baisse d'environ 16,7 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans calculatrice. a) Calculer 35 % de 240. b) Dans une classe de 32 élèves, 24 pratiquent un sport. Quelle proportion cela représente-t-il, en pourcentage ? c) Dans un lycée, 60 % des élèves sont des filles et 25 % des filles sont internes. Quel pourcentage des élèves du lycée les filles internes représentent-elles ? d) Un prix passe de 80 € à 92 €. Calculer le taux d'évolution.",
              hint: "Pour c), multipliez les deux proportions. Pour d), divisez la variation par la valeur de départ.",
              solution: [
                "a) 35 % de 240 = 0,35 × 240 = 84 (10 % font 24, donc 30 % font 72, et 5 % font 12 : 72 + 12 = 84).",
                "b) 24/32 = 3/4 = 0,75, soit 75 %.",
                "c) 0,6 × 0,25 = 0,15 : les filles internes représentent 15 % des élèves.",
                "d) t = (92 - 80)/80 = 12/80 = 0,15, soit une hausse de 15 %.",
                "Résultats : 84 ; 75 % ; 15 % ; + 15 %.",
              ],
            },
            {
              level: 2,
              statement: "Sans calculatrice. a) Donner le coefficient multiplicateur associé à une hausse de 3 %, puis à une baisse de 40 %. b) Une population augmente de 10 % deux années de suite. Quelle est l'évolution globale ? c) Après une remise de 25 %, un article coûte 60 €. Quel était son prix initial ? d) Une action perd 50 % de sa valeur. Quelle hausse doit-elle connaître pour retrouver sa valeur initiale ? e) Un loyer augmente de 5 % deux années de suite, puis baisse de 10 %. Quelle est l'évolution globale ?",
              hint: "Traduisez chaque évolution par un coefficient multiplicateur, multipliez les coefficients successifs, et utilisez l'inverse pour revenir en arrière.",
              solution: [
                "a) Hausse de 3 % : × 1,03. Baisse de 40 % : × 0,6.",
                "b) 1,1 × 1,1 = 1,21 : hausse globale de 21 % (et non de 20 %).",
                "c) Prix final = prix initial × 0,75, donc prix initial = 60/0,75 = 60 × 4/3 = 80 €.",
                "d) Coefficient de la baisse : 0,5 ; coefficient réciproque : 1/0,5 = 2, soit une hausse de 100 %.",
                "e) 1,05 × 1,05 = 1,1025, puis 1,1025 × 0,9 = 0,99225. Comme 0,99225 = 1 - 0,00775, le loyer a globalement baissé de 0,775 %.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type épreuve anticipée, partie automatismes : pour chaque question, une seule réponse est exacte. Une fonction f, dérivable sur [-3 ; 5], est décroissante sur [-3 ; 1] de f(-3) = 4 à f(1) = -2, puis croissante sur [1 ; 5] de f(1) = -2 à f(5) = 6. Q1. Sur [-3 ; 5], l'équation f(x) = 0 admet : a) aucune solution ; b) une solution ; c) deux solutions ; d) trois solutions. Q2. Le minimum de f sur [-3 ; 5] est : a) -3 ; b) 1 ; c) -2 ; d) 6. Q3. Pour tout x de ]1 ; 5[ : a) f'(x) ≥ 0 ; b) f'(x) ≤ 0 ; c) f(x) ≤ 0 ; d) f(x) ≥ 0. Q4. La droite passant par A(1 ; 3) et B(3 ; -1) a pour coefficient directeur : a) 2 ; b) -2 ; c) -1/2 ; d) 4. Q5. Après une baisse de 20 %, un article coûte 50 €. Son prix initial était : a) 40 € ; b) 60 € ; c) 62,50 € ; d) 70 €.",
              hint: "Dessinez à main levée l'allure de la courbe à partir des variations. Pour Q5, ne cherchez pas à ajouter 20 % au prix final : divisez par le coefficient multiplicateur.",
              solution: [
                "Q1 : réponse c. Sur [-3 ; 1], f décroît de 4 à -2 et 0 est compris entre -2 et 4 : une solution. Sur [1 ; 5], f croît de -2 à 6 : une autre solution. Il y a donc deux solutions.",
                "Q2 : réponse c. Le minimum est la plus petite valeur prise par f, soit -2, atteint en x = 1. La réponse b donne l'endroit où il est atteint, pas sa valeur.",
                "Q3 : réponse a. f est croissante sur [1 ; 5], donc sa dérivée y est positive ou nulle. La réponse d est fausse : f(x) est négative juste après 1, par exemple f(1) = -2.",
                "Q4 : réponse b. m = (-1 - 3)/(3 - 1) = -4/2 = -2.",
                "Q5 : réponse c. Prix initial × 0,8 = 50, donc prix initial = 50/0,8 = 500/8 = 62,5, soit 62,50 €. Ajouter 20 % à 50 € (réponse b) est l'erreur classique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque évolution au coefficient multiplicateur qui lui correspond.",
            pairs: [
              { left: "Hausse de 5 %", right: "× 1,05" },
              { left: "Baisse de 30 %", right: "× 0,7" },
              { left: "Doublement", right: "× 2, soit une hausse de 100 %" },
              { left: "Hausse de 10 % puis baisse de 10 %", right: "× 0,99, soit une baisse de 1 %" },
              { left: "Évolution réciproque d'une baisse de 20 %", right: "× 1,25, soit une hausse de 25 %" },
              { left: "Deux hausses successives de 10 %", right: "× 1,21, soit une hausse de 21 %" },
            ],
          },
          quiz: [
            {
              q: "Une baisse de 8 % correspond au coefficient multiplicateur :",
              options: ["0,08", "1,08", "0,8", "0,92"],
              answer: 3,
              why: "Baisse de t % : × (1 - t/100) = 1 - 0,08 = 0,92.",
            },
            {
              q: "20 % de 45 % des élèves d'un lycée représentent :",
              options: ["9 % des élèves", "25 % des élèves", "65 % des élèves", "0,9 % des élèves"],
              answer: 0,
              why: "Proportion de proportion : 0,2 × 0,45 = 0,09, soit 9 %.",
            },
            {
              q: "Un prix passe de 40 € à 50 €. Le taux d'évolution est :",
              options: ["+ 10 %", "+ 20 %", "+ 25 %", "+ 50 %"],
              answer: 2,
              why: "t = (50 - 40)/40 = 10/40 = 0,25, soit + 25 %.",
            },
            {
              q: "Une droite passe par les points (0 ; 1) et (2 ; 7). Son coefficient directeur est :",
              options: ["1", "3", "6", "4"],
              answer: 1,
              why: "m = (7 - 1)/(2 - 0) = 6/2 = 3.",
            },
            {
              q: "Sur la courbe d'une fonction f, les antécédents de 2 se lisent comme :",
              options: ["la valeur f(2) lue sur l'axe des ordonnées", "les abscisses des points de la courbe d'ordonnée 2", "les ordonnées des points de la courbe d'abscisse 2"],
              answer: 1,
              why: "Un antécédent de 2 est un x tel que f(x) = 2 : on trace la droite y = 2 et on lit les abscisses des points d'intersection.",
            },
          ],
          trap: "Additionner des pourcentages d'évolutions successives (+ 10 % puis - 10 % ne donne pas 0 %), ou croire que l'évolution réciproque d'une hausse de 20 % est une baisse de 20 %.",
          method: "Traduisez systématiquement chaque pourcentage d'évolution en coefficient multiplicateur avant tout calcul. Vérifiez ensuite le sens du résultat : après une baisse, le prix doit être plus petit ; pour retrouver un prix initial, il doit être plus grand.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'methode-exercices',
          title: 'Méthode des exercices et gestion des deux heures',
          minutes: 30,
          objectives: [
            "Organiser les deux heures de l'épreuve entre la lecture, les automatismes, les exercices et la relecture.",
            "Analyser un énoncé : repérer les données, les verbes de consigne et les liens entre les questions.",
            "Rédiger une réponse justifiée qui cite la propriété utilisée et se termine par une conclusion.",
            "Contrôler ses résultats sans calculatrice.",
          ],
          course: [
            {
              heading: "L'épreuve en bref",
              paragraphs: [
                "L'épreuve anticipée de mathématiques se passe à la fin de la classe de première. Elle dure 2 heures, sans calculatrice, et compte pour le baccalauréat avec un coefficient 2. La première partie, notée sur 6 points, rassemble des questions d'automatismes à choix multiples. La seconde, notée sur 14 points, est composée d'exercices indépendants qui portent sur le programme de première : second degré, suites, dérivation, probabilités, produit scalaire, etc.",
                "Sans calculatrice, les sujets sont conçus pour que les calculs restent faisables à la main : des valeurs simples, des fractions, des racines usuelles. Si vous tombez sur un calcul énorme, c'est souvent le signe d'une erreur en amont ou d'une méthode plus directe à chercher. Pour vous entraîner, utilisez les sujets officiels publiés par le ministère de l'Éducation nationale.",
              ],
              box: { label: "Repère", text: "2 heures, sans calculatrice, coefficient 2. Automatismes en QCM : 6 points. Exercices indépendants : 14 points. Les exercices peuvent être traités dans l'ordre de votre choix, à condition de bien les numéroter." },
            },
            {
              heading: "Gérer les deux heures",
              paragraphs: [
                "Une répartition raisonnable suit le barème : environ 5 minutes pour lire tout le sujet, une trentaine de minutes pour les automatismes, environ 75 minutes pour les exercices, et 10 minutes de relecture. Ce n'est qu'un repère : l'essentiel est de ne pas sacrifier une partie entière faute de temps.",
                "Commencez par la partie où vous vous sentez le plus à l'aise pour prendre confiance. Ne restez pas plus de quelques minutes bloqué sur une question : laissez un espace sur la copie, passez à la suivante, et revenez-y à la fin. Une question non résolue n'empêche presque jamais de traiter la suite d'un exercice.",
              ],
            },
            {
              heading: "Lire un énoncé et enchaîner les questions",
              paragraphs: [
                "Soulignez les données et repérez les verbes de consigne. « Calculer » : donner un résultat avec le calcul qui y mène. « Justifier » ou « démontrer » : appuyer chaque étape sur une propriété ou une définition du cours. « En déduire » : utiliser le résultat de la question précédente, sans tout recommencer. « Interpréter » : traduire le résultat dans le contexte de l'énoncé, avec une phrase et l'unité.",
                "Les questions d'un exercice sont liées : la question 2 prépare souvent la question 3. Lorsque l'énoncé donne le résultat à démontrer (« montrer que f'(x) = 3(x - 1)(x + 1) »), vous pouvez l'admettre si vous n'y parvenez pas et l'utiliser pour la suite : écrivez simplement « en admettant le résultat de la question 2 ».",
              ],
              box: { label: "À retenir", text: "Calculer : résultat et calcul. Justifier, démontrer : citer la propriété. En déduire : réutiliser la question précédente. Interpréter : une phrase dans le contexte, avec l'unité. Un résultat donné peut être admis pour continuer." },
            },
            {
              heading: "Rédiger et vérifier",
              paragraphs: [
                "Une réponse bien rédigée comporte quatre éléments : la formule ou la propriété utilisée, le remplacement par les valeurs, le résultat, et une phrase de conclusion qui répond exactement à la question posée. Par exemple : « La suite est arithmétique de raison 3, donc uₙ = u₀ + 3n. Ainsi u₁₀ = 5 + 30 = 35. »",
                "Avant de passer à la suite, faites un contrôle rapide : une probabilité doit être entre 0 et 1 ; une longueur ou une aire doit être positive ; une solution d'équation doit vérifier l'équation ; un tableau de variations doit être cohérent avec les valeurs calculées ; un ordre de grandeur doit être plausible. Pendant les 10 minutes de relecture, vérifiez en priorité les signes et les questions laissées de côté.",
              ],
            },
          ],
          keyPoints: [
            "2 heures, sans calculatrice : 6 points d'automatismes en QCM, 14 points d'exercices indépendants.",
            "Repère de temps : 5 min de lecture, environ 30 min d'automatismes, 75 min d'exercices, 10 min de relecture.",
            "Ne pas rester bloqué : laisser un espace, avancer, revenir à la fin.",
            "« En déduire » : réutiliser le résultat précédent ; un résultat donné par l'énoncé peut être admis.",
            "Rédaction : propriété, calcul, résultat, phrase de conclusion.",
            "Contrôler : probabilités entre 0 et 1, solutions vérifiées, ordres de grandeur plausibles.",
          ],
          example: {
            statement: "Exercice type épreuve anticipée, sans calculatrice. Soit f la fonction définie sur [-2 ; 2] par f(x) = x³ - 3x + 1. 1) Calculer f'(x) et montrer que f'(x) = 3(x - 1)(x + 1). 2) Étudier le signe de f'(x) et dresser le tableau de variations de f sur [-2 ; 2]. 3) En déduire le maximum de f sur [-2 ; 2].",
            solution: [
              "1) f est une fonction polynôme, dérivable sur [-2 ; 2] : f'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1), d'après l'identité a² - b² = (a - b)(a + b).",
              "2) f'(x) est un trinôme de coefficient 3 > 0 et de racines -1 et 1 : il est positif à l'extérieur des racines et négatif entre elles. Donc f'(x) ≥ 0 sur [-2 ; -1], f'(x) ≤ 0 sur [-1 ; 1] et f'(x) ≥ 0 sur [1 ; 2].",
              "Valeurs utiles : f(-2) = -8 + 6 + 1 = -1 ; f(-1) = -1 + 3 + 1 = 3 ; f(1) = 1 - 3 + 1 = -1 ; f(2) = 8 - 6 + 1 = 3.",
              "Tableau de variations : f est croissante sur [-2 ; -1] (de -1 à 3), décroissante sur [-1 ; 1] (de 3 à -1), puis croissante sur [1 ; 2] (de -1 à 3).",
              "3) D'après le tableau, la plus grande valeur prise par f sur [-2 ; 2] est 3.",
              "Conclusion : le maximum de f sur [-2 ; 2] est 3, atteint en x = -1 et en x = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Vous disposez de 120 minutes. Vous réservez 5 minutes à la lecture du sujet et 10 minutes à la relecture, puis vous répartissez le temps restant entre les automatismes (6 points) et les exercices (14 points), proportionnellement aux points. Calculer, sans calculatrice, le temps consacré à chaque partie.",
              hint: "Calculez d'abord le temps restant, puis la part des automatismes : 6 points sur 20.",
              solution: [
                "Temps restant : 120 - 5 - 10 = 105 minutes.",
                "Part des automatismes : 6/20 = 0,3, donc 0,3 × 105 = 31,5 minutes.",
                "Part des exercices : 14/20 = 0,7, donc 0,7 × 105 = 73,5 minutes.",
                "Vérification : 31,5 + 73,5 = 105.",
                "Conclusion : environ 30 minutes pour les automatismes et environ 75 minutes pour les exercices.",
              ],
            },
            {
              level: 2,
              statement: "Rédiger une réponse complète, sans calculatrice. La suite (uₙ) est arithmétique, de premier terme u₀ = 5 et de raison 3. 1) Exprimer uₙ en fonction de n et calculer u₁₀. 2) Calculer la somme S = u₀ + u₁ + ... + u₁₀. 3) Déterminer le plus petit entier n tel que uₙ > 100.",
              hint: "Pour une suite arithmétique, uₙ = u₀ + nr, et la somme de termes consécutifs vaut (nombre de termes) × (premier terme + dernier terme)/2. Attention : de u₀ à u₁₀, il y a 11 termes.",
              solution: [
                "1) La suite est arithmétique de raison 3, donc pour tout entier n, uₙ = u₀ + 3n = 5 + 3n. Ainsi u₁₀ = 5 + 30 = 35.",
                "2) S est la somme de 11 termes consécutifs d'une suite arithmétique : S = 11 × (u₀ + u₁₀)/2 = 11 × (5 + 35)/2 = 11 × 20 = 220.",
                "3) uₙ > 100 équivaut à 5 + 3n > 100, soit 3n > 95, soit n > 95/3. Or 95/3 = 31 + 2/3, donc n ≥ 32.",
                "Vérification : u₃₁ = 5 + 93 = 98 ≤ 100 et u₃₂ = 5 + 96 = 101 > 100.",
                "Conclusion : u₁₀ = 35, S = 220, et le plus petit entier cherché est n = 32.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type épreuve anticipée, sans calculatrice (données fictives). Dans un lycée, 60 % des élèves de première suivent la spécialité mathématiques. Parmi eux, 75 % s'entraînent régulièrement aux automatismes ; parmi les autres élèves, 25 % s'entraînent régulièrement. On choisit un élève de première au hasard. On note M l'événement « l'élève suit la spécialité mathématiques » et A l'événement « l'élève s'entraîne régulièrement ». 1) Construire un arbre pondéré. 2) Calculer P(M ∩ A). 3) Montrer que P(A) = 0,55. 4) Calculer la probabilité qu'un élève qui s'entraîne régulièrement suive la spécialité, sous forme de fraction irréductible. 5) On choisit au hasard deux élèves de première, de façon indépendante, et l'on note X le nombre d'élèves qui s'entraînent régulièrement parmi eux. Déterminer la loi de X et calculer E(X).",
              hint: "Les branches issues de M portent 0,75 et 0,25 ; celles issues du contraire de M portent 0,25 et 0,75. Pour la question 4, calculez P_A(M) = P(M ∩ A)/P(A). Pour la question 5, X prend les valeurs 0, 1 et 2.",
              solution: [
                "1) Premier niveau : P(M) = 0,6 et P(non M) = 0,4. Deuxième niveau, on note P_M(A) la probabilité de A sachant M : à partir de M, P_M(A) = 0,75 et P_M(non A) = 0,25 ; à partir de non M, la probabilité de A sachant non M vaut 0,25 et celle de non A sachant non M vaut 0,75.",
                "2) P(M ∩ A) = P(M) × P_M(A) = 0,6 × 0,75 = 0,45.",
                "3) Formule des probabilités totales : P(A) = P(M ∩ A) + P(non M ∩ A) = 0,45 + 0,4 × 0,25 = 0,45 + 0,1 = 0,55.",
                "4) P_A(M) = P(M ∩ A)/P(A) = 0,45/0,55 = 45/55 = 9/11.",
                "5) Chaque élève s'entraîne avec la probabilité 0,55 et ne s'entraîne pas avec la probabilité 0,45, indépendamment l'un de l'autre. P(X = 0) = 0,45 × 0,45 = 0,2025 ; P(X = 1) = 2 × 0,55 × 0,45 = 0,495 ; P(X = 2) = 0,55 × 0,55 = 0,3025. Vérification : 0,2025 + 0,495 + 0,3025 = 1.",
                "E(X) = 0 × 0,2025 + 1 × 0,495 + 2 × 0,3025 = 0,495 + 0,605 = 1,1. En moyenne, sur deux élèves choisis, 1,1 s'entraînent régulièrement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour traiter une question d'exercice.",
            items: [
              "Lire l'énoncé en entier et souligner les données.",
              "Repérer le verbe de consigne et ce qui est attendu.",
              "Identifier la notion du cours et choisir la propriété ou la formule.",
              "Écrire la formule, remplacer par les valeurs et calculer.",
              "Contrôler le résultat : signe, ordre de grandeur, cohérence.",
              "Conclure par une phrase qui répond exactement à la question.",
            ],
          },
          quiz: [
            {
              q: "Pendant l'épreuve anticipée de mathématiques, la calculatrice est :",
              options: ["autorisée en mode examen", "autorisée pour la seule partie exercices", "autorisée pour les automatismes", "interdite pendant toute l'épreuve"],
              answer: 3,
              why: "L'épreuve entière se passe sans calculatrice : les calculs sont prévus pour être faits à la main.",
            },
            {
              q: "Dans une question qui commence par « En déduire », on attend que vous :",
              options: ["vous serviez du résultat précédent", "recommenciez tout par une autre méthode", "donniez une valeur approchée", "traciez un graphique"],
              answer: 0,
              why: "« En déduire » signale que la question précédente fournit l'outil ou le résultat à utiliser.",
            },
            {
              q: "Vous n'arrivez pas à démontrer un résultat que l'énoncé vous donne à la question 2. Que faire ?",
              options: ["abandonner tout l'exercice", "l'admettre et traiter la question 3 avec ce résultat", "passer directement à l'exercice suivant sans rien écrire", "recopier la question"],
              answer: 1,
              why: "Un résultat donné par l'énoncé peut être admis : les questions suivantes restent accessibles et rapportent des points.",
            },
            {
              q: "À la fin d'un calcul, vous trouvez une probabilité égale à 1,3. Que concluez-vous ?",
              options: ["un calcul est faux", "l'événement est presque certain", "il suffit d'arrondir le résultat à 1"],
              answer: 0,
              why: "Une probabilité est toujours comprise entre 0 et 1 : il faut reprendre le calcul.",
            },
            {
              q: "Les exercices de la seconde partie :",
              options: ["doivent être traités dans l'ordre imposé par le sujet", "peuvent être traités dans l'ordre de votre choix", "ne demandent jamais de justification"],
              answer: 1,
              why: "Les exercices sont indépendants : vous pouvez commencer par celui que vous maîtrisez le mieux, en les numérotant clairement.",
            },
          ],
          trap: "Passer trop de temps sur une question bloquante et ne pas aborder les questions suivantes, alors qu'un résultat donné par l'énoncé peut être admis. Autre erreur : donner un calcul sans phrase de conclusion.",
          method: "Faites au moins un sujet complet en conditions réelles avant l'épreuve : 2 heures, sans calculatrice, chronomètre posé sur la table. Notez ensuite le temps passé sur chaque partie et ajustez votre répartition pour la fois suivante.",
        },
      ],
    },
  ],
}
