import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-tle',
  chapters: [
    /* ================================================================== */
    /* RÉACTIONS ACIDE-BASE ET PH                                           */
    /* ================================================================== */
    {
      id: 'acide-base-ph',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'couples-acide-base',
          title: 'Couples acide-base et transfert d\'ion hydrogène',
          minutes: 30,
          objectives: [
            "Identifier, à partir d'une équation de réaction, un acide et une base au sens de Brønsted et les couples acide-base mis en jeu.",
            "Écrire la demi-équation d'un couple acide-base et l'équation d'une réaction acide-base modélisée par un transfert d'ion hydrogène H⁺.",
            "Reconnaître une espèce amphotère, en particulier l'eau, et citer les couples de l'eau.",
            "Représenter le schéma de Lewis des groupes acide carboxylique, ion carboxylate, amine et ion ammonium.",
          ],
          course: [
            {
              heading: "Acide et base selon Brønsted",
              paragraphs: [
                "En 1923, le chimiste danois Johannes Brønsted (et, indépendamment, le Britannique Thomas Lowry) propose une définition des acides et des bases fondée sur l'échange d'une particule. Un acide est une espèce chimique capable de céder un ion hydrogène H⁺ ; une base est une espèce chimique capable de capter un ion hydrogène H⁺. L'ion H⁺ est un proton : c'est un atome d'hydrogène qui a perdu son unique électron.",
                "Un acide et la base obtenue lorsqu'il a cédé H⁺ forment un couple acide-base, noté acide/base. L'acide éthanoïque CH₃COOH cède un ion H⁺ et devient l'ion éthanoate CH₃COO⁻ : le couple est CH₃COOH/CH₃COO⁻. L'ion ammonium NH₄⁺ cède un ion H⁺ et devient l'ammoniac NH₃ : le couple est NH₄⁺/NH₃. On dit que l'acide et la base d'un même couple sont conjugués : ils ne diffèrent que d'un ion H⁺, donc leurs charges diffèrent de 1.",
              ],
              box: { label: "Définition", text: "Un acide de Brønsted est une espèce capable de céder un ion H⁺, une base une espèce capable d'en capter un. Un couple acide/base (AH/A⁻ ou BH⁺/B) est relié par la demi-équation acide = base + H⁺." },
            },
            {
              heading: "Demi-équation et réaction acide-base",
              paragraphs: [
                "Chaque couple est associé à une demi-équation acide-base, écrite avec le signe = car l'échange peut se faire dans les deux sens : CH₃COOH = CH₃COO⁻ + H⁺ ; NH₄⁺ = NH₃ + H⁺. L'ion H⁺ n'existe pas à l'état libre en solution aqueuse : une demi-équation est une écriture formelle, qui ne décrit pas à elle seule une réaction.",
                "Une réaction acide-base est un transfert d'ion H⁺ de l'acide d'un couple 1 vers la base d'un couple 2. On obtient son équation en combinant les deux demi-équations de façon que les ions H⁺ n'apparaissent plus. Exemple : l'acide éthanoïque réagit avec l'ammoniac. CH₃COOH = CH₃COO⁻ + H⁺ et NH₃ + H⁺ = NH₄⁺ donnent CH₃COOH + NH₃ → CH₃COO⁻ + NH₄⁺.",
                "Méthode : repérez dans les réactifs l'espèce qui perd un H⁺ (l'acide) et celle qui en gagne un (la base). Dans les produits, on retrouve leurs espèces conjuguées. Une réaction acide-base fait donc toujours intervenir exactement deux couples, et l'on vérifie à la fin la conservation des éléments et des charges.",
              ],
              box: { label: "Règle", text: "Acide₁ + Base₂ → Base₁ + Acide₂. L'acide d'un couple cède H⁺ à la base de l'autre couple ; les ions H⁺ ne figurent pas dans l'équation de la réaction." },
            },
            {
              heading: "L'eau, une espèce amphotère",
              paragraphs: [
                "Une espèce amphotère (ou ampholyte) est à la fois l'acide d'un couple et la base d'un autre. L'eau en est l'exemple le plus important. Elle est la base du couple H₃O⁺/H₂O (ion oxonium) : H₃O⁺ = H₂O + H⁺. Elle est aussi l'acide du couple H₂O/HO⁻ (ion hydroxyde) : H₂O = HO⁻ + H⁺. Ce sont les deux couples de l'eau.",
                "Lorsqu'on dissout du chlorure d'hydrogène HCl dans l'eau, l'eau joue le rôle de base : HCl + H₂O → Cl⁻ + H₃O⁺. Lorsqu'on dissout de l'ammoniac, l'eau joue le rôle d'acide : NH₃ + H₂O = NH₄⁺ + HO⁻. L'ion hydrogénocarbonate HCO₃⁻, présent dans les eaux minérales et le sang, est un autre ampholyte : il est l'acide du couple HCO₃⁻/CO₃²⁻ et la base du couple CO₂,H₂O/HCO₃⁻.",
                "Même pure, l'eau réagit très faiblement sur elle-même : 2 H₂O = H₃O⁺ + HO⁻. C'est l'autoprotolyse de l'eau. Elle explique que l'eau pure contienne des ions oxonium et hydroxyde en très faible quantité : environ 1,0 × 10⁻⁷ mol·L⁻¹ de chacun à 25 °C.",
              ],
              box: { label: "À retenir", text: "Couples de l'eau : H₃O⁺/H₂O et H₂O/HO⁻. L'eau est amphotère. L'ion hydrogénocarbonate HCO₃⁻ l'est aussi (couples CO₂,H₂O/HCO₃⁻ et HCO₃⁻/CO₃²⁻)." },
            },
            {
              heading: "Acides carboxyliques et amines : les schémas de Lewis",
              paragraphs: [
                "Le groupe carboxyle -COOH caractérise les acides carboxyliques. Dans son schéma de Lewis, l'atome de carbone est lié par une double liaison à un atome d'oxygène et par une liaison simple au groupe -O-H ; chaque atome d'oxygène porte deux doublets non liants. C'est l'hydrogène lié à l'oxygène qui est cédé, car l'oxygène, très électronégatif, attire vers lui le doublet de la liaison O-H. On obtient l'ion carboxylate -COO⁻, dans lequel un atome d'oxygène porte la charge négative et trois doublets non liants.",
                "Les amines dérivent de l'ammoniac : l'atome d'azote, lié à un ou plusieurs groupes carbonés, porte un doublet non liant. C'est ce doublet qui capte l'ion H⁺ : une amine est une base. Par exemple, la méthylamine CH₃-NH₂ capte H⁺ pour donner l'ion méthylammonium CH₃-NH₃⁺, dans lequel l'azote, lié à quatre atomes, n'a plus de doublet non liant et porte une charge positive.",
                "Retenez le lien entre structure et propriété : pour céder H⁺, il faut un atome d'hydrogène lié à un atome électronégatif (O dans -COOH, N dans -NH₃⁺) ; pour capter H⁺, il faut un doublet non liant disponible (sur O⁻ dans -COO⁻, sur N dans -NH₂).",
              ],
              box: { label: "Repère", text: "Couples à connaître : R-COOH/R-COO⁻ (acide carboxylique/ion carboxylate), R-NH₃⁺/R-NH₂ (ion ammonium/amine), NH₄⁺/NH₃, H₃O⁺/H₂O, H₂O/HO⁻." },
            },
          ],
          keyPoints: [
            "Acide de Brønsted : espèce qui cède un ion H⁺. Base : espèce qui capte un ion H⁺.",
            "Un couple acide/base est relié par une demi-équation : acide = base + H⁺.",
            "Une réaction acide-base transfère H⁺ de l'acide d'un couple à la base d'un autre ; H⁺ n'apparaît pas dans l'équation.",
            "Couples de l'eau : H₃O⁺/H₂O et H₂O/HO⁻. L'eau est amphotère, comme l'ion HCO₃⁻.",
            "R-COOH/R-COO⁻ et R-NH₃⁺/R-NH₂ : l'acide porte un H lié à O ou N, la base un doublet non liant qui capte H⁺.",
          ],
          example: {
            statement: "On mélange une solution d'acide méthanoïque HCOOH et une solution contenant des ions hydroxyde HO⁻. Identifier les couples mis en jeu, écrire les demi-équations puis l'équation de la réaction.",
            solution: [
              "L'acide méthanoïque possède un groupe carboxyle : il peut céder un ion H⁺ et devenir l'ion méthanoate HCOO⁻. Couple 1 : HCOOH/HCOO⁻, demi-équation HCOOH = HCOO⁻ + H⁺.",
              "L'ion hydroxyde peut capter un ion H⁺ et devenir une molécule d'eau. Couple 2 : H₂O/HO⁻, demi-équation écrite dans le sens de la capture : HO⁻ + H⁺ = H₂O.",
              "On additionne les deux demi-équations : l'ion H⁺ cédé par l'acide est capté par la base et disparaît de l'écriture.",
              "Équation de la réaction : HCOOH + HO⁻ → HCOO⁻ + H₂O. Vérification : charge -1 de chaque côté, éléments conservés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des espèces suivantes, écrire le couple acide/base auquel elle appartient et la demi-équation correspondante, en précisant si elle y joue le rôle d'acide ou de base : a) l'acide nitreux HNO₂ ; b) l'ion ammonium NH₄⁺ ; c) l'ion carbonate CO₃²⁻ ; d) l'ion éthanoate CH₃COO⁻.",
              hint: "Un acide perd H⁺ (sa charge diminue de 1) ; une base gagne H⁺ (sa charge augmente de 1).",
              solution: [
                "a) HNO₂ peut céder H⁺ : c'est un acide. Couple HNO₂/NO₂⁻ ; demi-équation HNO₂ = NO₂⁻ + H⁺.",
                "b) NH₄⁺ peut céder H⁺ : c'est un acide. Couple NH₄⁺/NH₃ ; demi-équation NH₄⁺ = NH₃ + H⁺.",
                "c) CO₃²⁻ peut capter H⁺ : c'est une base. Couple HCO₃⁻/CO₃²⁻ ; demi-équation HCO₃⁻ = CO₃²⁻ + H⁺.",
                "d) CH₃COO⁻ peut capter H⁺ : c'est une base. Couple CH₃COOH/CH₃COO⁻ ; demi-équation CH₃COOH = CH₃COO⁻ + H⁺.",
                "Vérification des charges, par exemple pour c) : -1 à gauche, -2 + 1 = -1 à droite. Les quatre demi-équations sont équilibrées.",
              ],
            },
            {
              level: 2,
              statement: "On fait réagir l'ammoniac NH₃ avec l'acide éthanoïque CH₃COOH, puis, dans une autre expérience, l'ion hydrogénocarbonate HCO₃⁻ avec l'ion oxonium H₃O⁺. 1. Écrire l'équation de chacune des deux réactions en détaillant les demi-équations. 2. Quel rôle joue HCO₃⁻ dans la deuxième réaction ? Peut-il jouer un autre rôle ? Justifier.",
              hint: "Dans la deuxième réaction, H₃O⁺ ne peut que céder H⁺ pour redonner H₂O. Le couple CO₂,H₂O/HCO₃⁻ fait intervenir le dioxyde de carbone dissous.",
              solution: [
                "1. Première réaction : CH₃COOH = CH₃COO⁻ + H⁺ (l'acide éthanoïque cède H⁺) et NH₃ + H⁺ = NH₄⁺ (l'ammoniac capte H⁺). Équation : CH₃COOH + NH₃ → CH₃COO⁻ + NH₄⁺.",
                "Deuxième réaction : H₃O⁺ = H₂O + H⁺ (l'ion oxonium cède H⁺) et HCO₃⁻ + H⁺ = CO₂,H₂O (l'ion hydrogénocarbonate capte H⁺). Équation : HCO₃⁻ + H₃O⁺ → CO₂,H₂O + H₂O, souvent écrite HCO₃⁻ + H₃O⁺ → CO₂ + 2 H₂O.",
                "2. Dans cette réaction, HCO₃⁻ capte un ion H⁺ : il joue le rôle de base, dans le couple CO₂,H₂O/HCO₃⁻.",
                "Face à une base comme HO⁻, il peut au contraire céder un ion H⁺ : HCO₃⁻ + HO⁻ → CO₃²⁻ + H₂O. Il est alors l'acide du couple HCO₃⁻/CO₃²⁻.",
                "Conclusion : HCO₃⁻ est une espèce amphotère.",
              ],
            },
            {
              level: 3,
              statement: "La glycine, un acide α-aminé, a pour formule semi-développée H₂N-CH₂-COOH. 1. Identifier et nommer les deux groupes caractéristiques présents. 2. Écrire les demi-équations des deux couples acide-base associés à ces groupes. 3. En solution aqueuse, la glycine existe majoritairement sous la forme d'un amphion (ou zwitterion) ⁺H₃N-CH₂-COO⁻. Expliquer sa formation par un transfert d'ion H⁺ interne et justifier que cette forme soit une espèce amphotère. 4. Décrire le schéma de Lewis du groupe -COO⁻ de l'amphion.",
              hint: "Le groupe -COOH peut céder H⁺ ; le groupe -NH₂ peut en capter un grâce au doublet non liant de l'atome d'azote.",
              solution: [
                "1. La glycine porte un groupe carboxyle -COOH (fonction acide carboxylique) et un groupe amine -NH₂ (fonction amine).",
                "2. Groupe carboxyle, couple -COOH/-COO⁻ : H₂N-CH₂-COOH = H₂N-CH₂-COO⁻ + H⁺. Groupe amine, couple -NH₃⁺/-NH₂ : ⁺H₃N-CH₂-COOH = H₂N-CH₂-COOH + H⁺.",
                "3. Le groupe -COOH cède un ion H⁺, que capte le doublet non liant de l'azote du groupe -NH₂ de la même molécule : H₂N-CH₂-COOH → ⁺H₃N-CH₂-COO⁻. L'amphion porte une charge + et une charge - : il est globalement neutre.",
                "L'amphion possède un groupe -NH₃⁺ capable de céder H⁺ (il est l'acide du couple ⁺H₃N-CH₂-COO⁻/H₂N-CH₂-COO⁻) et un groupe -COO⁻ capable de capter H⁺ (il est la base du couple ⁺H₃N-CH₂-COOH/⁺H₃N-CH₂-COO⁻). Il est donc amphotère.",
                "4. Dans le groupe -COO⁻, l'atome de carbone est lié à la chaîne, à un premier atome d'oxygène par une double liaison (cet oxygène porte deux doublets non liants) et à un second atome d'oxygène par une liaison simple ; ce second oxygène porte trois doublets non liants et la charge négative.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque espèce à son espèce conjuguée.",
            pairs: [
              { left: "CH₃COOH", right: "CH₃COO⁻" },
              { left: "NH₄⁺", right: "NH₃" },
              { left: "H₃O⁺", right: "H₂O" },
              { left: "CO₃²⁻", right: "HCO₃⁻" },
              { left: "CH₃-NH₂", right: "CH₃-NH₃⁺" },
              { left: "HCOOH", right: "HCOO⁻" },
            ],
          },
          quiz: [
            {
              q: "Selon Brønsted, une base est une espèce capable de :",
              options: ["céder un ion H⁺", "capter un ion H⁺", "céder un électron", "capter un ion HO⁻"],
              answer: 1,
              why: "Une base de Brønsted capte un ion hydrogène H⁺ ; c'est l'acide qui le cède.",
            },
            {
              q: "Quel est l'acide conjugué de l'ion hydroxyde HO⁻ ?",
              options: ["H₃O⁺", "O²⁻", "H₂O₂", "H₂O"],
              answer: 3,
              why: "HO⁻ + H⁺ = H₂O : l'eau est l'acide du couple H₂O/HO⁻.",
            },
            {
              q: "Dans la réaction NH₃ + H₂O = NH₄⁺ + HO⁻, l'eau joue le rôle :",
              options: ["d'acide", "de base", "de catalyseur", "de spectateur"],
              answer: 0,
              why: "L'eau cède un ion H⁺ à l'ammoniac et devient HO⁻ : elle est l'acide du couple H₂O/HO⁻.",
            },
            {
              q: "Quelle espèce est amphotère ?",
              options: ["NH₄⁺", "Cl⁻", "HCO₃⁻", "H₃O⁺"],
              answer: 2,
              why: "HCO₃⁻ est la base du couple CO₂,H₂O/HCO₃⁻ et l'acide du couple HCO₃⁻/CO₃²⁻.",
            },
            {
              q: "Dans une amine, quel élément de structure permet de capter un ion H⁺ ?",
              options: ["La double liaison C=O", "Le doublet non liant de l'azote", "L'atome d'hydrogène lié au carbone", "La charge positive de l'azote"],
              answer: 1,
              why: "Le doublet non liant de l'atome d'azote forme une liaison avec H⁺ : l'amine devient un ion ammonium.",
            },
          ],
          trap: "Confondre l'acide et la base d'un couple en lisant mal la demi-équation, ou laisser des ions H⁺ dans l'équation de la réaction : une réaction acide-base fait toujours intervenir deux couples, et H⁺ n'y apparaît pas.",
          method: "Pour écrire une réaction acide-base, posez les deux demi-équations l'une sous l'autre, la première dans le sens où l'acide cède H⁺, la seconde dans le sens où la base le capte, puis additionnez-les et vérifiez la conservation des éléments et des charges.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ph-acide-fort',
          title: 'Le pH d\'une solution et la concentration en ions oxonium',
          minutes: 30,
          objectives: [
            "Relier le pH d'une solution aqueuse diluée à la concentration en ions oxonium : pH = -log([H₃O⁺]/c°).",
            "Calculer la concentration en ions oxonium à partir du pH, et inversement, avec un nombre de chiffres significatifs adapté.",
            "Déterminer, à partir du pH mesuré et de la concentration apportée, si un acide réagit totalement avec l'eau.",
            "Prévoir l'effet d'une dilution sur le pH d'une solution d'acide fort.",
          ],
          course: [
            {
              heading: "Définition du pH",
              paragraphs: [
                "Les concentrations en ions oxonium H₃O⁺ rencontrées en solution aqueuse s'étendent sur de nombreuses puissances de dix : de l'ordre de 10⁻² mol·L⁻¹ dans le suc gastrique, 10⁻⁷ mol·L⁻¹ dans l'eau pure, 10⁻¹¹ mol·L⁻¹ dans une solution d'ammoniaque ménagère. Pour manipuler des nombres plus commodes, on utilise une échelle logarithmique : le pH (potentiel hydrogène), introduit en 1909 par le chimiste danois Søren Sørensen.",
                "Pour une solution aqueuse diluée (concentrations inférieures à environ 0,1 mol·L⁻¹), le pH est défini par pH = -log([H₃O⁺]/c°), où c° = 1 mol·L⁻¹ est la concentration standard et log le logarithme décimal. La division par c° rend l'argument du logarithme sans unité : le pH est un nombre sans dimension. Réciproquement, [H₃O⁺] = c° × 10⁻ᵖᴴ.",
                "Le logarithme décimal transforme les multiplications par 10 en additions de 1 : si [H₃O⁺] est divisée par 10, le pH augmente de 1 ; si elle est multipliée par 100, le pH diminue de 2. Plus une solution est acide, plus [H₃O⁺] est grande et plus son pH est petit.",
              ],
              box: { label: "Formule", text: "pH = -log([H₃O⁺]/c°) et [H₃O⁺] = c° × 10⁻ᵖᴴ, avec c° = 1 mol·L⁻¹. Relation valable pour les solutions diluées." },
            },
            {
              heading: "Mesurer le pH, l'échelle de pH",
              paragraphs: [
                "On mesure le pH avec un pH-mètre, constitué d'une sonde (électrode de verre combinée) reliée à un voltmètre électronique. L'appareil doit être étalonné avec deux solutions tampons de pH connu (par exemple 7,0 et 4,0) avant les mesures. Le papier pH et les indicateurs colorés ne donnent qu'une estimation, à environ une unité près.",
                "À 25 °C, une solution est neutre si [H₃O⁺] = [HO⁻] = 1,0 × 10⁻⁷ mol·L⁻¹, soit pH = 7,0. Elle est acide si pH < 7 et basique si pH > 7. Cette valeur 7 dépend de la température : à 37 °C, une solution neutre a un pH voisin de 6,8.",
                "Un pH-mètre courant donne le pH à 0,05 ou 0,1 unité près. Or une incertitude de 0,1 unité de pH correspond à une incertitude relative d'environ 25 % sur [H₃O⁺]. C'est pourquoi on donne [H₃O⁺] avec deux chiffres significatifs au plus lorsqu'on la calcule à partir d'un pH mesuré au dixième.",
              ],
              box: { label: "Repère", text: "À 25 °C : solution acide si pH < 7, neutre si pH = 7, basique si pH > 7. Un pH mesuré au dixième donne [H₃O⁺] avec deux chiffres significatifs." },
            },
            {
              heading: "Acide fort : une réaction totale avec l'eau",
              paragraphs: [
                "Lorsqu'on introduit un acide AH dans l'eau, il réagit avec elle : AH + H₂O → A⁻ + H₃O⁺. Si la quantité d'ions H₃O⁺ formés est égale à la quantité d'acide apportée, la réaction est totale : l'acide est dit fort. Le chlorure d'hydrogène HCl en est l'exemple type : sa solution aqueuse, l'acide chlorhydrique, ne contient plus de molécules HCl mais des ions H₃O⁺ et Cl⁻. L'acide nitrique HNO₃ est également un acide fort.",
                "Pour une solution d'acide fort de concentration apportée c, on a donc [H₃O⁺] = c et pH = -log(c/c°). Ce résultat est valable tant que c est comprise entre environ 10⁻⁶ et 10⁻¹ mol·L⁻¹ : pour des solutions plus diluées, les ions H₃O⁺ issus de l'autoprotolyse de l'eau ne sont plus négligeables.",
                "Si la réaction de l'acide avec l'eau n'est pas totale, l'acide est dit faible : on a alors [H₃O⁺] < c, donc pH > -log(c/c°). C'est le cas de l'acide éthanoïque : une solution à 1,0 × 10⁻² mol·L⁻¹ a un pH voisin de 3,4, et non de 2,0. Comparer le pH mesuré à -log(c/c°) permet donc de savoir si un acide est fort ou faible.",
              ],
              box: { label: "Propriété", text: "Acide fort : réaction totale avec l'eau, [H₃O⁺] = c et pH = -log(c/c°). Acide faible : réaction limitée, [H₃O⁺] < c et pH > -log(c/c°)." },
            },
            {
              heading: "Diluer une solution d'acide fort",
              paragraphs: [
                "Diluer une solution d'acide fort d'un facteur F divise sa concentration, donc [H₃O⁺], par F. Le pH augmente alors de log F : une dilution par 10 fait augmenter le pH de 1, une dilution par 100 de 2. Ainsi, de l'acide chlorhydrique à 1,0 × 10⁻² mol·L⁻¹ (pH = 2,0) dilué 10 fois a un pH de 3,0.",
                "La dilution rapproche le pH de 7 sans jamais le dépasser : une solution acide, même très diluée, reste acide. C'est pourquoi la formule pH = -log(c/c°) ne s'applique plus pour c inférieure à 10⁻⁶ mol·L⁻¹ : elle donnerait par exemple pH = 8 pour c = 10⁻⁸ mol·L⁻¹, ce qui est absurde pour une solution d'acide.",
              ],
              box: { label: "À retenir", text: "Diluer F fois une solution d'acide fort augmente son pH de log F. Le pH d'une solution acide que l'on dilue tend vers 7, sans le dépasser." },
            },
          ],
          keyPoints: [
            "pH = -log([H₃O⁺]/c°) et [H₃O⁺] = c° × 10⁻ᵖᴴ, avec c° = 1 mol·L⁻¹ (solutions diluées).",
            "Quand [H₃O⁺] est divisée par 10, le pH augmente de 1.",
            "À 25 °C : acide si pH < 7, neutre si pH = 7, basique si pH > 7.",
            "Acide fort (HCl, HNO₃) : réaction totale avec l'eau, donc [H₃O⁺] = c et pH = -log(c/c°).",
            "Si le pH mesuré est supérieur à -log(c/c°), l'acide est faible : sa réaction avec l'eau est limitée.",
            "Un pH donné au dixième donne [H₃O⁺] avec deux chiffres significatifs.",
          ],
          example: {
            statement: "Une solution d'acide nitrique (acide fort) a une concentration apportée c = 2,5 × 10⁻³ mol·L⁻¹. 1. Écrire l'équation de la réaction de l'acide nitrique avec l'eau. 2. Calculer le pH de la solution. 3. Quel serait le pH après une dilution d'un facteur 10 ?",
            solution: [
              "1. L'acide nitrique est un acide fort, sa réaction avec l'eau est totale : HNO₃ + H₂O → NO₃⁻ + H₃O⁺.",
              "2. La réaction étant totale, chaque molécule HNO₃ apportée produit un ion H₃O⁺ : [H₃O⁺] = c = 2,5 × 10⁻³ mol·L⁻¹.",
              "pH = -log(2,5 × 10⁻³) = 2,60, soit pH ≈ 2,6.",
              "3. Après une dilution d'un facteur 10, [H₃O⁺] = 2,5 × 10⁻⁴ mol·L⁻¹ et le pH augmente de log 10 = 1 : pH = 3,6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Solutions diluées à 25 °C. a) [H₃O⁺] = 1,0 × 10⁻⁴ mol·L⁻¹ : calculer le pH. b) [H₃O⁺] = 3,2 × 10⁻⁹ mol·L⁻¹ : calculer le pH. c) pH = 5,3 : calculer [H₃O⁺]. d) pH = 11,7 : calculer [H₃O⁺]. Indiquer pour chaque solution si elle est acide, neutre ou basique.",
              hint: "Utilisez pH = -log([H₃O⁺]/c°) dans un sens et [H₃O⁺] = 10^(-pH) mol·L⁻¹ dans l'autre.",
              solution: [
                "a) pH = -log(1,0 × 10⁻⁴) = 4,0 : solution acide.",
                "b) pH = -log(3,2 × 10⁻⁹) = 8,49 ≈ 8,5 : solution basique.",
                "c) [H₃O⁺] = 10^(-5,3) = 5,0 × 10⁻⁶ mol·L⁻¹ : solution acide (pH < 7).",
                "d) [H₃O⁺] = 10^(-11,7) = 2,0 × 10⁻¹² mol·L⁻¹ : solution basique (pH > 7).",
              ],
            },
            {
              level: 2,
              statement: "On dispose d'acide chlorhydrique S₀ de concentration c₀ = 5,0 × 10⁻² mol·L⁻¹. 1. Calculer le pH de S₀. 2. On prélève 10,0 mL de S₀ que l'on complète à 250,0 mL avec de l'eau distillée dans une fiole jaugée. Calculer la concentration c₁ et le pH de la solution S₁ obtenue. 3. Quel volume de S₀ faudrait-il prélever pour préparer 100,0 mL d'une solution de pH = 3,0 ?",
              hint: "Facteur de dilution F = V(solution fille)/V(prélevé) = c₀/c₁ ; pour un acide fort, [H₃O⁺] = c.",
              solution: [
                "1. HCl est un acide fort : [H₃O⁺] = c₀ = 5,0 × 10⁻² mol·L⁻¹, donc pH₀ = -log(5,0 × 10⁻²) = 1,30 ≈ 1,3.",
                "2. Facteur de dilution F = 250,0/10,0 = 25, donc c₁ = c₀/25 = 2,0 × 10⁻³ mol·L⁻¹.",
                "pH₁ = -log(2,0 × 10⁻³) = 2,70 ≈ 2,7. Vérification : le pH a augmenté de log 25 ≈ 1,4, et 1,3 + 1,4 = 2,7.",
                "3. pH = 3,0 correspond à [H₃O⁺] = c = 1,0 × 10⁻³ mol·L⁻¹. Il faut un facteur de dilution F = c₀/c = 5,0 × 10⁻²/1,0 × 10⁻³ = 50.",
                "Volume à prélever : V₀ = 100,0/50 = 2,0 mL de S₀, à compléter à 100,0 mL avec de l'eau distillée.",
              ],
            },
            {
              level: 3,
              statement: "Un élève prépare trois solutions d'un même acide AH de concentrations apportées c₁ = 1,0 × 10⁻¹ mol·L⁻¹, c₂ = 1,0 × 10⁻² mol·L⁻¹ et c₃ = 1,0 × 10⁻³ mol·L⁻¹. Il mesure à 25 °C : pH₁ = 2,9 ; pH₂ = 3,4 ; pH₃ = 3,9. 1. Calculer [H₃O⁺] dans chaque solution. 2. L'acide AH est-il fort ? Justifier à l'aide du rapport τ = [H₃O⁺]/c. 3. Comment évolue τ quand on dilue la solution ? 4. Quel pH aurait la solution 2 si AH était un acide fort ?",
              hint: "Si l'acide était fort, sa réaction avec l'eau serait totale et l'on aurait [H₃O⁺] = c, soit τ = 1.",
              solution: [
                "1. [H₃O⁺] = c° × 10^(-pH) : [H₃O⁺]₁ = 10^(-2,9) = 1,3 × 10⁻³ mol·L⁻¹ ; [H₃O⁺]₂ = 10^(-3,4) = 4,0 × 10⁻⁴ mol·L⁻¹ ; [H₃O⁺]₃ = 10^(-3,9) = 1,3 × 10⁻⁴ mol·L⁻¹.",
                "2. τ₁ = 1,3 × 10⁻³/1,0 × 10⁻¹ = 0,013 ; τ₂ = 4,0 × 10⁻⁴/1,0 × 10⁻² = 0,040 ; τ₃ = 1,3 × 10⁻⁴/1,0 × 10⁻³ = 0,13.",
                "Dans les trois cas τ < 1 : seule une petite partie de l'acide a réagi avec l'eau. La réaction n'est pas totale, l'acide AH est faible.",
                "3. τ augmente quand la concentration diminue (1,3 %, puis 4,0 %, puis 13 %) : plus un acide faible est dilué, plus la proportion d'acide qui réagit avec l'eau est grande.",
                "4. Pour un acide fort, [H₃O⁺] = c₂ = 1,0 × 10⁻² mol·L⁻¹ et pH = 2,0, valeur nettement inférieure au pH mesuré de 3,4.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le pH et les ions oxonium.",
            statements: [
              { text: "Si [H₃O⁺] est multipliée par 10, le pH augmente de 1.", true: false, why: "Le pH diminue de 1 : plus il y a d'ions oxonium, plus la solution est acide et plus son pH est petit." },
              { text: "Le pH est une grandeur sans unité.", true: true, why: "On divise [H₃O⁺] par c° = 1 mol·L⁻¹ avant de prendre le logarithme." },
              { text: "Diluer 100 fois de l'acide chlorhydrique augmente son pH de 2.", true: true, why: "[H₃O⁺] est divisée par 100 et log 100 = 2." },
              { text: "En diluant suffisamment de l'acide chlorhydrique, on peut obtenir un pH égal à 9.", true: false, why: "Le pH d'une solution acide que l'on dilue tend vers 7 sans le dépasser." },
              { text: "Une solution d'acide éthanoïque à 1,0 × 10⁻² mol·L⁻¹ a un pH de 2,0.", true: false, why: "L'acide éthanoïque est faible : [H₃O⁺] < c, et son pH est voisin de 3,4." },
              { text: "Pour un acide fort, la quantité d'ions H₃O⁺ formés est égale à la quantité d'acide apporté.", true: true, why: "Sa réaction avec l'eau est totale." },
              { text: "Une solution de pH 6,8 est forcément acide, quelle que soit la température.", true: false, why: "La neutralité correspond à pH = 7 à 25 °C seulement ; à 37 °C, une solution neutre a un pH voisin de 6,8." },
            ],
          },
          quiz: [
            {
              q: "Le pH d'une solution où [H₃O⁺] = 1,0 × 10⁻³ mol·L⁻¹ vaut :",
              options: ["-3,0", "0,001", "3,0", "11,0"],
              answer: 2,
              why: "pH = -log(1,0 × 10⁻³) = 3,0.",
            },
            {
              q: "Une solution a un pH de 4,6. Sa concentration en ions oxonium vaut environ :",
              options: ["2,5 × 10⁻⁵ mol·L⁻¹", "4,6 × 10⁻¹ mol·L⁻¹", "1,0 × 10⁻⁴ mol·L⁻¹", "4,0 × 10⁻⁵ mol·L⁻¹"],
              answer: 0,
              why: "[H₃O⁺] = 10^(-4,6) ≈ 2,5 × 10⁻⁵ mol·L⁻¹.",
            },
            {
              q: "On dilue 10 fois une solution d'acide chlorhydrique de pH 2,3. Le nouveau pH vaut :",
              options: ["0,23", "23", "2,4", "3,3"],
              answer: 3,
              why: "Pour un acide fort, diviser [H₃O⁺] par 10 augmente le pH de 1 : 2,3 + 1 = 3,3.",
            },
            {
              q: "Une solution d'un acide de concentration apportée 1,0 × 10⁻² mol·L⁻¹ a un pH de 3,1. On en déduit que :",
              options: ["l'acide est fort", "l'acide est faible", "la solution est basique", "le pH-mètre est mal étalonné"],
              answer: 1,
              why: "Si l'acide était fort, le pH vaudrait 2,0 ; un pH plus élevé signifie que [H₃O⁺] < c : la réaction avec l'eau n'est pas totale.",
            },
            {
              q: "Quelle est l'équation de la réaction du chlorure d'hydrogène HCl avec l'eau ?",
              options: ["HCl + HO⁻ → Cl⁻ + H₂O", "HCl + H₂O → ClO⁻ + H₂", "HCl + H₂O → Cl⁻ + H₃O⁺", "Cl⁻ + H₃O⁺ → HCl + H₂O"],
              answer: 2,
              why: "HCl est un acide fort : il cède totalement son ion H⁺ à l'eau, qui joue le rôle de base.",
            },
          ],
          trap: "Oublier le signe moins de la formule, ou croire que le pH augmente quand l'acidité augmente : plus [H₃O⁺] est grande, plus le pH est petit. Autre erreur : appliquer pH = -log(c/c°) à un acide faible, pour lequel [H₃O⁺] est inférieure à c.",
          method: "Avant tout calcul, estimez l'ordre de grandeur : pour [H₃O⁺] = a × 10⁻ⁿ mol·L⁻¹ avec 1 ≤ a < 10, le pH est compris entre n - 1 et n. Si la calculatrice donne une valeur hors de cet intervalle, refaites le calcul.",
        },
      ],
    },
    /* ================================================================== */
    /* ANALYSER UN SYSTÈME CHIMIQUE                                         */
    /* ================================================================== */
    {
      id: 'analyser-un-systeme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'spectroscopies',
          title: 'Spectroscopies UV-visible et infrarouge, loi de Beer-Lambert',
          minutes: 35,
          objectives: [
            "Exploiter la loi de Beer-Lambert pour déterminer la concentration d'une espèce colorée à partir d'une droite d'étalonnage.",
            "Relier la couleur d'une solution à son spectre d'absorption UV-visible et au cercle chromatique.",
            "Identifier, à partir d'un spectre infrarouge et d'une table de données, des liaisons et des groupes caractéristiques.",
          ],
          course: [
            {
              heading: "Absorbance et spectre UV-visible",
              paragraphs: [
                "Lorsqu'une lumière d'intensité I₀ traverse une solution, une partie est absorbée par les espèces dissoutes et il ne ressort qu'une intensité I < I₀. L'absorbance de la solution est définie par A = log(I₀/I). C'est une grandeur sans unité, positive, mesurée avec un spectrophotomètre pour une longueur d'onde λ choisie. Une absorbance de 1 signifie que seulement 10 % de la lumière traverse la solution ; une absorbance de 2, seulement 1 %.",
                "Le spectre d'absorption UV-visible représente A en fonction de λ, en général entre 200 et 800 nm. Il présente une ou plusieurs bandes, dont le maximum est noté λmax. Une solution qui absorbe dans le visible est colorée : sa couleur perçue est la couleur complémentaire de celle qu'elle absorbe le plus. Sur le cercle chromatique, deux couleurs complémentaires sont diamétralement opposées.",
                "Exemples : une solution de sulfate de cuivre(II) absorbe surtout dans le rouge et l'orangé (λmax voisin de 800 nm) : elle paraît bleue. Une solution de permanganate de potassium absorbe dans le vert (λmax ≈ 525 nm) : elle paraît magenta, d'un violet rosé.",
              ],
              box: { label: "Définition", text: "Absorbance : A = log(I₀/I), sans unité. Une solution colorée prend la couleur complémentaire de la couleur qu'elle absorbe le plus (couleurs opposées sur le cercle chromatique)." },
            },
            {
              heading: "La loi de Beer-Lambert",
              paragraphs: [
                "Pour une solution diluée d'une seule espèce absorbante, à une longueur d'onde donnée, l'absorbance est proportionnelle à la concentration c de cette espèce : A = ε × ℓ × c. Ici ℓ est l'épaisseur de solution traversée (la largeur de la cuve, souvent 1,0 cm), c la concentration en mol·L⁻¹ et ε le coefficient d'absorption molaire, en L·mol⁻¹·cm⁻¹, qui dépend de l'espèce, de la longueur d'onde, du solvant et de la température.",
                "En pratique, on écrit souvent A = k × c avec k = ε × ℓ. La loi n'est valable que pour des solutions suffisamment diluées (en général pour A inférieure à environ 2) et pour une lumière monochromatique. Si plusieurs espèces absorbent à la même longueur d'onde, leurs absorbances s'additionnent.",
                "Pour la meilleure précision, on travaille à λmax : c'est là que l'absorbance est la plus grande et varie le plus avec la concentration, et qu'un petit défaut de réglage de λ modifie le moins la mesure, puisque le spectre y présente un sommet.",
              ],
              box: { label: "Formule", text: "Loi de Beer-Lambert : A = ε × ℓ × c (A sans unité, ε en L·mol⁻¹·cm⁻¹, ℓ en cm, c en mol·L⁻¹). Valable pour des solutions diluées, à une longueur d'onde fixée." },
            },
            {
              heading: "Doser par étalonnage",
              paragraphs: [
                "Un dosage par étalonnage détermine une concentration inconnue sans transformer l'espèce dosée. On prépare une gamme de solutions étalons de concentrations connues (par dilutions d'une solution mère), on règle le spectrophotomètre à λmax, on fait le « blanc » avec le solvant seul, puis on mesure l'absorbance de chaque étalon.",
                "On trace A en fonction de c : les points sont alignés sur une droite passant par l'origine, la droite d'étalonnage, dont le coefficient directeur est k = ε × ℓ. On mesure ensuite l'absorbance de la solution inconnue dans les mêmes conditions, et on lit sa concentration sur la droite ou on la calcule par c = A/k. L'absorbance de l'inconnue doit se trouver dans le domaine des étalons ; sinon, on la dilue d'abord et on tient compte du facteur de dilution.",
              ],
              box: { label: "Repère", text: "Étapes : gamme d'étalons, réglage à λmax, blanc avec le solvant, mesures, droite A = k × c, mesure de l'inconnue, c = A/k (multipliée par le facteur de dilution éventuel)." },
            },
            {
              heading: "La spectroscopie infrarouge",
              paragraphs: [
                "Un rayonnement infrarouge ne modifie pas l'état électronique des molécules : il fait vibrer leurs liaisons. Chaque type de liaison absorbe dans un domaine caractéristique. Le spectre IR représente la transmittance T (en %) en fonction du nombre d'onde σ = 1/λ, exprimé en cm⁻¹ et gradué de droite à gauche entre environ 4000 et 400 cm⁻¹. Les bandes d'absorption pointent donc vers le bas.",
                "On exploite surtout la zone σ > 1500 cm⁻¹, à l'aide d'une table. Repères usuels : O-H libre (alcool en phase gazeuse) vers 3600 cm⁻¹, bande fine ; O-H lié par liaison hydrogène (alcool en phase condensée) de 3200 à 3400 cm⁻¹, bande large et forte ; O-H d'acide carboxylique de 2500 à 3200 cm⁻¹, bande très large ; N-H de 3100 à 3500 cm⁻¹ ; C-H de 2800 à 3100 cm⁻¹ ; C=O de 1650 à 1750 cm⁻¹, bande fine et intense ; C=C vers 1650 cm⁻¹, bande moyenne.",
                "La zone σ < 1500 cm⁻¹, appelée empreinte digitale, contient de nombreuses bandes difficiles à attribuer ; elle sert à comparer un spectre à celui d'une référence. Ainsi, l'éthanol présente une large bande vers 3300 cm⁻¹ (O-H lié) et aucune bande C=O, tandis que l'acide éthanoïque présente une bande très large de 2500 à 3200 cm⁻¹ et une bande intense vers 1710 cm⁻¹ (C=O).",
              ],
              box: { label: "À retenir", text: "Spectre IR : transmittance en fonction de σ = 1/λ (cm⁻¹). O-H lié : 3200 à 3400 cm⁻¹, large. O-H d'acide : 2500 à 3200 cm⁻¹, très large. C=O : 1650 à 1750 cm⁻¹, intense. C-H : 2800 à 3100 cm⁻¹." },
            },
          ],
          keyPoints: [
            "A = log(I₀/I), sans unité ; le spectre UV-visible donne A en fonction de λ.",
            "Couleur perçue = couleur complémentaire de la couleur la plus absorbée (cercle chromatique).",
            "Beer-Lambert : A = ε × ℓ × c, valable pour des solutions diluées, à une longueur d'onde fixée.",
            "Dosage par étalonnage : mesures à λmax, droite A = k × c passant par l'origine, puis c = A/k.",
            "IR : nombre d'onde σ = 1/λ en cm⁻¹ ; chaque type de liaison absorbe dans un domaine caractéristique.",
            "Repères IR : O-H lié 3200 à 3400 cm⁻¹ (large), O-H d'acide 2500 à 3200 cm⁻¹, C=O 1650 à 1750 cm⁻¹ (intense).",
          ],
          example: {
            statement: "Une solution d'une espèce colorée X a, à λ = 470 nm, une absorbance A = 0,62 dans une cuve de largeur ℓ = 1,00 cm. Le coefficient d'absorption molaire de X à cette longueur d'onde vaut ε = 7,0 × 10² L·mol⁻¹·cm⁻¹. Calculer la concentration de X.",
            solution: [
              "La loi de Beer-Lambert s'écrit A = ε × ℓ × c, d'où c = A/(ε × ℓ).",
              "Vérification des unités : ε × ℓ s'exprime en L·mol⁻¹·cm⁻¹ × cm = L·mol⁻¹, donc A/(ε × ℓ) s'exprime bien en mol·L⁻¹.",
              "c = 0,62/(7,0 × 10² × 1,00) = 8,9 × 10⁻⁴ mol·L⁻¹.",
              "L'absorbance étant inférieure à 2, la solution est assez diluée pour que la loi s'applique : c = 8,9 × 10⁻⁴ mol·L⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une solution de sulfate de cuivre(II) paraît bleue. 1. Dans quel domaine de couleurs absorbe-t-elle principalement ? 2. À la longueur d'onde de travail, avec une cuve de 1,0 cm, une solution étalon à 2,0 × 10⁻² mol·L⁻¹ a une absorbance de 0,24. Calculer le coefficient k de la relation A = k × c, puis la concentration d'une solution de sulfate de cuivre(II) dont l'absorbance vaut 0,42.",
              hint: "La couleur complémentaire du bleu est l'orangé ; k = A/c pour la solution étalon.",
              solution: [
                "1. Une solution bleue absorbe la couleur complémentaire du bleu, opposée sur le cercle chromatique : elle absorbe principalement dans l'orangé et le rouge.",
                "2. Loi de Beer-Lambert : A = k × c, donc k = A/c = 0,24/(2,0 × 10⁻²) = 12 L·mol⁻¹.",
                "Pour la solution inconnue : c = A/k = 0,42/12 = 3,5 × 10⁻² mol·L⁻¹.",
                "Vérification : 0,42 est un peu moins du double de 0,24, et 3,5 × 10⁻² est un peu moins du double de 2,0 × 10⁻² : la proportionnalité est respectée.",
              ],
            },
            {
              level: 2,
              statement: "Pour doser un colorant bleu (le bleu patenté, λmax = 640 nm) dans une boisson, on mesure à 640 nm l'absorbance de cinq solutions étalons : pour c = 2,0 ; 4,0 ; 6,0 ; 8,0 et 10,0 µmol·L⁻¹, on obtient A = 0,21 ; 0,42 ; 0,62 ; 0,83 et 1,04. La boisson, diluée 5 fois, a une absorbance A = 0,55. 1. Montrer que les mesures vérifient la loi de Beer-Lambert et déterminer k. 2. Calculer la concentration du colorant dans la boisson. 3. Pourquoi a-t-on dilué la boisson avant la mesure ?",
              hint: "Calculez le rapport A/c pour chaque étalon ; n'oubliez pas de multiplier par le facteur de dilution à la fin.",
              solution: [
                "1. Rapports A/c : 0,21/2,0 = 0,105 ; 0,42/4,0 = 0,105 ; 0,62/6,0 = 0,103 ; 0,83/8,0 = 0,104 ; 1,04/10,0 = 0,104 (en L·µmol⁻¹). Ils sont constants : A est proportionnelle à c, la loi de Beer-Lambert est vérifiée, avec k ≈ 0,104 L·µmol⁻¹.",
                "2. Concentration de la solution diluée : c' = A/k = 0,55/0,104 = 5,3 µmol·L⁻¹.",
                "La boisson a été diluée 5 fois : c = 5 × 5,3 = 26 µmol·L⁻¹, soit 2,6 × 10⁻⁵ mol·L⁻¹.",
                "3. Sans dilution, l'absorbance aurait été d'environ 0,104 × 26 ≈ 2,7 : une valeur en dehors du domaine des étalons (A ≤ 1,04) et supérieure à 2, où la loi de Beer-Lambert n'est plus fiable.",
              ],
            },
            {
              level: 3,
              statement: "On cherche à identifier le produit d'une oxydation de l'éthanol CH₃-CH₂-OH. Deux produits sont envisageables : l'éthanal CH₃-CHO et l'acide éthanoïque CH₃-COOH. Le spectre IR du produit, en phase condensée, présente : une bande très large et forte entre 2500 et 3200 cm⁻¹, une bande fine et intense à 1710 cm⁻¹, et des bandes vers 2950 cm⁻¹. Table IR : O-H d'alcool lié 3200 à 3400 cm⁻¹, large ; O-H d'acide carboxylique 2500 à 3200 cm⁻¹, très large ; C-H 2800 à 3100 cm⁻¹ ; C=O 1650 à 1750 cm⁻¹, intense. 1. Quelles liaisons le spectre met-il en évidence ? 2. Identifier le produit en justifiant. 3. Décrire le spectre que l'on aurait obtenu pour l'éthanal.",
              hint: "Cherchez d'abord la bande C=O, puis examinez la forme et la position de la bande O-H éventuelle.",
              solution: [
                "1. La bande fine et intense à 1710 cm⁻¹ appartient au domaine 1650 à 1750 cm⁻¹ : elle signale une liaison C=O. Les bandes vers 2950 cm⁻¹ correspondent aux liaisons C-H. La bande très large entre 2500 et 3200 cm⁻¹ est caractéristique d'une liaison O-H d'acide carboxylique.",
                "2. Le produit possède à la fois une liaison C=O et une liaison O-H de type acide : c'est le groupe carboxyle -COOH. Le produit est l'acide éthanoïque CH₃-COOH.",
                "3. L'éthanal CH₃-CHO possède une liaison C=O mais aucune liaison O-H. Son spectre présenterait la bande intense entre 1700 et 1750 cm⁻¹ et les bandes C-H, mais aucune bande large entre 2500 et 3400 cm⁻¹.",
                "Conclusion : c'est la présence de la bande O-H très large, en plus de la bande C=O, qui distingue ici l'acide carboxylique de l'aldéhyde.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un dosage par étalonnage spectrophotométrique.",
            items: [
              "Préparer une gamme de solutions étalons par dilution d'une solution mère",
              "Tracer le spectre d'un étalon et repérer λmax",
              "Régler le spectrophotomètre à λmax et faire le blanc avec le solvant",
              "Mesurer l'absorbance de chaque solution étalon",
              "Tracer la droite d'étalonnage A = k × c",
              "Mesurer l'absorbance de la solution inconnue dans les mêmes conditions",
              "En déduire c = A/k, en tenant compte d'une éventuelle dilution",
            ],
          },
          quiz: [
            {
              q: "Une solution absorbe principalement dans le vert. Elle paraît :",
              options: ["verte", "jaune", "bleue", "magenta"],
              answer: 3,
              why: "La couleur perçue est la complémentaire de la couleur absorbée ; le magenta est opposé au vert sur le cercle chromatique.",
            },
            {
              q: "Dans la loi de Beer-Lambert A = ε × ℓ × c, l'unité de ε est :",
              options: ["mol·L⁻¹·cm⁻¹", "L·mol⁻¹·cm⁻¹", "sans unité", "cm⁻¹"],
              answer: 1,
              why: "A est sans unité, ℓ en cm et c en mol·L⁻¹ : ε = A/(ℓ × c) s'exprime en L·mol⁻¹·cm⁻¹.",
            },
            {
              q: "On double la concentration d'une solution diluée d'espèce colorée. Son absorbance :",
              options: ["double", "est divisée par deux", "ne change pas", "est élevée au carré"],
              answer: 0,
              why: "D'après la loi de Beer-Lambert, A est proportionnelle à c.",
            },
            {
              q: "Sur un spectre IR, une bande fine et intense vers 1720 cm⁻¹ signale :",
              options: ["une liaison O-H", "une liaison N-H", "une liaison C=O", "une liaison C-C"],
              answer: 2,
              why: "La liaison C=O absorbe entre 1650 et 1750 cm⁻¹ et donne une bande fine et intense.",
            },
            {
              q: "Le nombre d'onde σ utilisé en spectroscopie IR est :",
              options: ["la fréquence de la radiation", "le nombre de bandes visibles du spectre", "la longueur d'onde en cm", "l'inverse de la longueur d'onde"],
              answer: 3,
              why: "σ = 1/λ, exprimé en cm⁻¹.",
            },
          ],
          trap: "Utiliser la loi de Beer-Lambert hors de son domaine de validité (solution trop concentrée, absorbance supérieure à environ 2), ou oublier de multiplier par le facteur de dilution la concentration lue sur la droite d'étalonnage.",
          method: "Pour un spectre IR, procédez dans l'ordre : cherchez d'abord une bande vers 1700 cm⁻¹ (C=O), puis une bande large au-dessus de 2500 cm⁻¹ (O-H), et comparez sa forme et sa position à la table avant de conclure sur le groupe caractéristique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conductimetrie',
          title: 'Conductimétrie et loi de Kohlrausch',
          minutes: 30,
          objectives: [
            "Relier la conductivité d'une solution aux concentrations des ions qu'elle contient et à leurs conductivités molaires ioniques.",
            "Exploiter la loi de Kohlrausch σ = k × c pour déterminer une concentration par étalonnage.",
            "Convertir les concentrations en mol·m⁻³ et effectuer un calcul de conductivité dans les unités du Système international.",
          ],
          course: [
            {
              heading: "Conductance et conductivité",
              paragraphs: [
                "Une solution ionique conduit le courant électrique : sous l'effet d'une tension, les cations se déplacent dans un sens et les anions dans l'autre. On mesure cette aptitude avec un conductimètre, dont la cellule est formée de deux plaques parallèles de surface S séparées d'une distance L. L'appareil impose une tension alternative U, mesure l'intensité I et en déduit la conductance G = I/U, en siemens (S).",
                "La conductance dépend de la cellule utilisée. Pour caractériser la solution seule, on utilise sa conductivité σ, reliée à la conductance par G = σ × S/L. La conductivité s'exprime en siemens par mètre (S·m⁻¹) ; on rencontre aussi le mS·cm⁻¹ ou le µS·cm⁻¹. Le conductimètre est étalonné avec une solution de conductivité connue, et la mesure dépend de la température, qu'il faut maintenir constante.",
              ],
              box: { label: "Définition", text: "Conductance G = I/U, en siemens (S). Conductivité σ, en S·m⁻¹, liée à la conductance par G = σ × S/L. La conductivité ne dépend que de la solution et de la température." },
            },
            {
              heading: "La conductivité dépend des ions présents",
              paragraphs: [
                "Chaque ion Xᵢ contribue à la conductivité en proportion de sa concentration [Xᵢ] et de sa conductivité molaire ionique λᵢ, qui traduit sa mobilité dans la solution. Pour une solution diluée : σ = Σ λᵢ × [Xᵢ]. Dans cette relation, σ s'exprime en S·m⁻¹, λᵢ en S·m²·mol⁻¹ et [Xᵢ] en mol·m⁻³.",
                "Attention à la conversion : 1 mol·L⁻¹ = 1 000 mol·m⁻³, puisque 1 m³ = 1 000 L. Une concentration de 1,0 × 10⁻² mol·L⁻¹ vaut donc 10 mol·m⁻³. De même, les tables donnent souvent λ en mS·m²·mol⁻¹ : 7,63 mS·m²·mol⁻¹ = 7,63 × 10⁻³ S·m²·mol⁻¹.",
                "Les ions H₃O⁺ (λ = 35,0 mS·m²·mol⁻¹ à 25 °C) et HO⁻ (λ = 19,9 mS·m²·mol⁻¹) sont beaucoup plus conducteurs que les autres ions, dont les conductivités molaires sont de l'ordre de 4 à 8 mS·m²·mol⁻¹ (Na⁺ : 5,01 ; K⁺ : 7,35 ; Cl⁻ : 7,63). Ils ne se déplacent pas plus vite au sens habituel : un ion H⁺ passe d'une molécule d'eau à la suivante, comme un témoin dans une course de relais.",
              ],
              box: { label: "Formule", text: "σ = Σ λᵢ × [Xᵢ], avec σ en S·m⁻¹, λᵢ en S·m²·mol⁻¹ et [Xᵢ] en mol·m⁻³ (1 mol·L⁻¹ = 1 000 mol·m⁻³)." },
            },
            {
              heading: "La loi de Kohlrausch et le dosage par étalonnage",
              paragraphs: [
                "Pour une solution d'un soluté ionique de concentration apportée c, par exemple le chlorure de sodium (Na⁺ + Cl⁻), on a [Na⁺] = [Cl⁻] = c, donc σ = (λ(Na⁺) + λ(Cl⁻)) × c. La conductivité est proportionnelle à la concentration : σ = k × c. C'est la loi de Kohlrausch, du nom du physicien allemand Friedrich Kohlrausch (fin du XIXe siècle). Elle n'est valable que pour des solutions diluées (concentrations inférieures à environ 10⁻² mol·L⁻¹).",
                "On l'utilise comme la loi de Beer-Lambert : on mesure la conductivité d'une gamme de solutions étalons du même soluté, on trace σ en fonction de c (une droite passant par l'origine), puis on mesure σ pour la solution inconnue et on en déduit c = σ/k. Cette méthode convient aux espèces ioniques incolores, que la spectrophotométrie ne peut pas doser.",
                "Exemple : le sérum physiologique contient 9 g·L⁻¹ de chlorure de sodium, soit environ 0,15 mol·L⁻¹. Il est trop concentré pour la loi de Kohlrausch : on le dilue d'abord 20 fois, on dose la solution diluée, puis on multiplie le résultat par 20.",
              ],
              box: { label: "Propriété", text: "Loi de Kohlrausch : pour une solution diluée d'un soluté ionique, σ = k × c, où k dépend du soluté et de la température." },
            },
          ],
          keyPoints: [
            "La conductivité σ (en S·m⁻¹) traduit l'aptitude d'une solution ionique à conduire le courant.",
            "σ = Σ λᵢ × [Xᵢ], avec [Xᵢ] en mol·m⁻³ : 1 mol·L⁻¹ = 1 000 mol·m⁻³.",
            "H₃O⁺ et HO⁻ ont des conductivités molaires ioniques bien plus grandes que les autres ions.",
            "Loi de Kohlrausch : σ = k × c pour une solution diluée d'un soluté ionique.",
            "Dosage par étalonnage : droite σ = k × c, puis c = σ/k pour l'inconnue (en tenant compte de la dilution).",
          ],
          example: {
            statement: "Calculer la conductivité d'une solution de chlorure de potassium de concentration c = 2,0 × 10⁻³ mol·L⁻¹. Données à 25 °C : λ(K⁺) = 7,35 mS·m²·mol⁻¹ ; λ(Cl⁻) = 7,63 mS·m²·mol⁻¹.",
            solution: [
              "La dissolution s'écrit KCl(s) → K⁺(aq) + Cl⁻(aq), donc [K⁺] = [Cl⁻] = c.",
              "Conversion : c = 2,0 × 10⁻³ mol·L⁻¹ = 2,0 × 10⁻³ × 10³ mol·m⁻³ = 2,0 mol·m⁻³.",
              "En unités SI : λ(K⁺) = 7,35 × 10⁻³ S·m²·mol⁻¹ et λ(Cl⁻) = 7,63 × 10⁻³ S·m²·mol⁻¹.",
              "σ = (λ(K⁺) + λ(Cl⁻)) × c = (7,35 + 7,63) × 10⁻³ × 2,0 = 3,0 × 10⁻² S·m⁻¹, soit 30 mS·m⁻¹ (ou 0,30 mS·cm⁻¹).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une solution de chlorure de sodium a une concentration c = 5,0 × 10⁻³ mol·L⁻¹. 1. Exprimer c en mol·m⁻³. 2. Calculer sa conductivité. Données : λ(Na⁺) = 5,01 mS·m²·mol⁻¹ ; λ(Cl⁻) = 7,63 mS·m²·mol⁻¹.",
              hint: "Multipliez par 1 000 pour passer des mol·L⁻¹ aux mol·m⁻³, et exprimez λ en S·m²·mol⁻¹.",
              solution: [
                "1. c = 5,0 × 10⁻³ × 1 000 = 5,0 mol·m⁻³.",
                "2. [Na⁺] = [Cl⁻] = c, donc σ = (λ(Na⁺) + λ(Cl⁻)) × c.",
                "σ = (5,01 + 7,63) × 10⁻³ × 5,0 = 12,64 × 10⁻³ × 5,0 = 6,3 × 10⁻² S·m⁻¹.",
                "Résultat : σ ≈ 63 mS·m⁻¹, soit 0,63 mS·cm⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "Pour doser une eau salée, on mesure à 25 °C la conductivité de solutions étalons de chlorure de sodium : pour c = 1,0 ; 2,0 ; 4,0 ; 6,0 et 8,0 mmol·L⁻¹, on obtient σ = 0,126 ; 0,252 ; 0,505 ; 0,758 et 1,01 mS·cm⁻¹. L'eau salée, diluée 50 fois, a une conductivité σ = 0,430 mS·cm⁻¹. 1. Vérifier que la loi de Kohlrausch est respectée et déterminer k. 2. Calculer la concentration en chlorure de sodium de l'eau salée, puis sa concentration en masse. Donnée : M(NaCl) = 58,5 g·mol⁻¹.",
              hint: "k est le rapport σ/c, constant si la loi est vérifiée ; la concentration en masse vaut c × M.",
              solution: [
                "1. Rapports σ/c : 0,126/1,0 = 0,126 ; 0,252/2,0 = 0,126 ; 0,505/4,0 = 0,126 ; 0,758/6,0 = 0,126 ; 1,01/8,0 = 0,126. Le rapport est constant : σ est proportionnelle à c, la loi de Kohlrausch est vérifiée avec k = 0,126 mS·cm⁻¹ par mmol·L⁻¹.",
                "2. Solution diluée : c' = σ/k = 0,430/0,126 = 3,41 mmol·L⁻¹.",
                "Eau salée (diluée 50 fois) : c = 50 × 3,41 = 171 mmol·L⁻¹ = 0,171 mol·L⁻¹.",
                "Concentration en masse : t = c × M = 0,171 × 58,5 = 10,0 g·L⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "On étudie des solutions diluées à 25 °C. Données : λ(H₃O⁺) = 35,0 mS·m²·mol⁻¹ ; λ(Na⁺) = 5,01 mS·m²·mol⁻¹ ; λ(Cl⁻) = 7,63 mS·m²·mol⁻¹. 1. Calculer la conductivité σ₁ d'une solution d'acide chlorhydrique de concentration c = 1,0 × 10⁻³ mol·L⁻¹, puis celle σ₂ d'une solution de chlorure de sodium de même concentration. 2. Expliquer l'écart entre σ₁ et σ₂. 3. Une autre solution d'acide chlorhydrique a une conductivité σ = 21,3 mS·m⁻¹. Déterminer sa concentration, puis son pH.",
              hint: "L'acide chlorhydrique contient les ions H₃O⁺ et Cl⁻ à la concentration c, puisque HCl est un acide fort.",
              solution: [
                "1. HCl est un acide fort : [H₃O⁺] = [Cl⁻] = c = 1,0 mol·m⁻³. σ₁ = (35,0 + 7,63) × 10⁻³ × 1,0 = 4,26 × 10⁻² S·m⁻¹ = 42,6 mS·m⁻¹.",
                "Pour NaCl : [Na⁺] = [Cl⁻] = 1,0 mol·m⁻³. σ₂ = (5,01 + 7,63) × 10⁻³ × 1,0 = 1,26 × 10⁻² S·m⁻¹ = 12,6 mS·m⁻¹.",
                "2. Les deux solutions contiennent les mêmes ions Cl⁻ à la même concentration ; la différence vient du cation. L'ion H₃O⁺ a une conductivité molaire environ 7 fois plus grande que celle de Na⁺ (35,0 contre 5,01), d'où σ₁ ≈ 3,4 × σ₂.",
                "3. Pour l'acide chlorhydrique, σ = (λ(H₃O⁺) + λ(Cl⁻)) × c, donc c = σ/(λ(H₃O⁺) + λ(Cl⁻)) = 21,3 × 10⁻³/(42,63 × 10⁻³) = 0,500 mol·m⁻³ = 5,0 × 10⁻⁴ mol·L⁻¹.",
                "L'acide étant fort, [H₃O⁺] = c et pH = -log(5,0 × 10⁻⁴) = 3,3.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur à son unité dans le Système international.",
            pairs: [
              { left: "Conductivité σ", right: "S·m⁻¹" },
              { left: "Conductance G", right: "S" },
              { left: "Conductivité molaire ionique λ", right: "S·m²·mol⁻¹" },
              { left: "Concentration [Xᵢ] dans σ = Σ λᵢ[Xᵢ]", right: "mol·m⁻³" },
              { left: "Surface S des plaques de la cellule", right: "m²" },
            ],
          },
          quiz: [
            {
              q: "Dans la relation σ = Σ λᵢ × [Xᵢ], les concentrations s'expriment en :",
              options: ["mol·m⁻³", "mol·L⁻¹", "g·L⁻¹", "mmol·L⁻¹"],
              answer: 0,
              why: "Avec λ en S·m²·mol⁻¹ et σ en S·m⁻¹, la concentration doit être en mol·m⁻³ (1 mol·L⁻¹ = 1 000 mol·m⁻³).",
            },
            {
              q: "Une concentration de 2,5 × 10⁻³ mol·L⁻¹ vaut :",
              options: ["2,5 × 10⁻⁶ mol·m⁻³", "2,5 × 10⁻³ mol·m⁻³", "2,5 mol·m⁻³", "25 mol·m⁻³"],
              answer: 2,
              why: "On multiplie par 1 000 : 2,5 × 10⁻³ × 10³ = 2,5 mol·m⁻³.",
            },
            {
              q: "Selon la loi de Kohlrausch, si l'on dilue 4 fois une solution diluée de chlorure de sodium, sa conductivité :",
              options: ["est multipliée par 4", "est divisée par 4", "est divisée par 2", "ne change pas"],
              answer: 1,
              why: "σ = k × c : la conductivité est proportionnelle à la concentration, divisée par 4.",
            },
            {
              q: "Pourquoi une solution d'acide chlorhydrique conduit-elle mieux qu'une solution de chlorure de sodium de même concentration ?",
              options: ["Car elle contient plus d'ions chlorure", "Car l'acide est plus concentré en molécules neutres", "Car HCl est un gaz dissous", "Car λ(H₃O⁺) est bien plus grande que λ(Na⁺)"],
              answer: 3,
              why: "Les deux solutions contiennent autant d'ions Cl⁻ ; l'ion H₃O⁺ est environ 7 fois plus conducteur que l'ion Na⁺.",
            },
            {
              q: "La loi de Kohlrausch σ = k × c est valable :",
              options: ["pour des solutions diluées", "pour toutes les concentrations", "seulement pour les acides", "seulement pour les solutions colorées"],
              answer: 0,
              why: "Au-delà d'environ 10⁻² mol·L⁻¹, les interactions entre ions rompent la proportionnalité.",
            },
          ],
          trap: "Oublier de convertir les concentrations en mol·m⁻³ (ou les conductivités molaires en S·m²·mol⁻¹) : la conductivité obtenue est alors fausse d'un facteur 1 000.",
          method: "Écrivez les unités dans chaque ligne de calcul : si le produit de λ (S·m²·mol⁻¹) par [X] (mol·m⁻³) ne donne pas des S·m⁻¹, une conversion a été oubliée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'titrages',
          title: 'Titrages avec suivi pH-métrique ou conductimétrique',
          minutes: 35,
          objectives: [
            "Établir la relation entre les quantités de matière de réactifs introduites à l'équivalence d'un titrage.",
            "Exploiter une courbe de titrage pH-métrique pour repérer l'équivalence (méthode des tangentes ou de la courbe dérivée) et choisir un indicateur coloré.",
            "Exploiter une courbe de titrage conductimétrique en justifiant l'évolution des pentes.",
            "Déterminer la concentration d'une espèce titrée et la comparer à une valeur de référence.",
          ],
          course: [
            {
              heading: "Le principe d'un titrage",
              paragraphs: [
                "Titrer une espèce, c'est déterminer sa quantité de matière ou sa concentration en la faisant réagir avec une autre espèce, le réactif titrant, de concentration connue. Le réactif titrant est placé dans une burette graduée ; la solution à titrer, de volume V₀ connu prélevé à la pipette jaugée, est dans un bécher. La réaction support du titrage doit être totale, rapide et unique.",
                "L'équivalence est atteinte lorsque les réactifs ont été introduits dans les proportions stœchiométriques de l'équation : avant l'équivalence, le réactif titrant est limitant ; après, c'est le réactif titré qui a été entièrement consommé. Pour la réaction a A + b B → c C + d D, où A est titré et B titrant, on a à l'équivalence n₀(A)/a = néq(B)/b.",
                "Exemple : pour titrer de l'acide chlorhydrique par une solution d'hydroxyde de sodium (soude), la réaction support est H₃O⁺ + HO⁻ → 2 H₂O. À l'équivalence, n₀(H₃O⁺) = néq(HO⁻), soit c₀ × V₀ = c × Véq, d'où c₀ = c × Véq/V₀.",
              ],
              box: { label: "Définition", text: "Équivalence : réactif titré et réactif titrant introduits dans les proportions stœchiométriques. Pour a A + b B → ..., n₀(A)/a = néq(B)/b. Le réactif limitant change à l'équivalence." },
            },
            {
              heading: "Titrage avec suivi pH-métrique",
              paragraphs: [
                "Lors d'un titrage acide-base, on peut mesurer le pH après chaque ajout de titrant. La courbe pH = f(V) présente un saut de pH au voisinage de l'équivalence. Pour un acide fort titré par une base forte, le pH à l'équivalence vaut 7 à 25 °C ; pour un acide faible titré par une base forte, il est supérieur à 7, car la base conjuguée formée rend la solution basique.",
                "Le volume équivalent Véq se repère de deux façons. Méthode des tangentes : on trace deux tangentes à la courbe, parallèles entre elles, de part et d'autre du saut, puis la droite parallèle équidistante de ces deux tangentes ; elle coupe la courbe au point d'équivalence. Méthode de la dérivée : on trace dpH/dV en fonction de V ; son maximum est atteint pour V = Véq. Près de l'équivalence, on resserre les ajouts (0,2 mL ou moins) pour bien décrire le saut.",
                "Pour un titrage rapide, on peut remplacer le pH-mètre par quelques gouttes d'indicateur coloré, un couple acide-base dont les deux formes ont des couleurs différentes. On choisit un indicateur dont la zone de virage contient le pH à l'équivalence : le bleu de bromothymol (zone de virage 6,0 à 7,6) pour un acide fort titré par une base forte, la phénolphtaléine (8,2 à 10,0) pour un acide faible titré par une base forte.",
              ],
              box: { label: "Repère", text: "Point d'équivalence : au milieu du saut de pH (méthode des tangentes) ou au maximum de dpH/dV. Indicateur coloré : sa zone de virage doit contenir le pH à l'équivalence." },
            },
            {
              heading: "Titrage avec suivi conductimétrique",
              paragraphs: [
                "Si la réaction support fait intervenir des ions, on peut suivre la conductivité σ du mélange. La courbe σ = f(V) est formée de deux portions de droite qui se coupent au point d'équivalence. Pour que ces portions soient bien rectilignes, on ajoute au départ un grand volume d'eau dans le bécher, afin de pouvoir négliger la dilution due au titrant.",
                "On interprète les pentes en faisant le bilan des ions qui apparaissent et disparaissent. Titrage de l'acide chlorhydrique (H₃O⁺, Cl⁻) par la soude (Na⁺, HO⁻) : avant l'équivalence, chaque ion HO⁻ versé consomme un ion H₃O⁺, qui est remplacé dans la solution par un ion Na⁺ ; comme λ(Na⁺) est bien plus petite que λ(H₃O⁺), σ diminue. Après l'équivalence, les ions Na⁺ et HO⁻ versés s'accumulent sans réagir : σ augmente.",
                "La méthode conductimétrique ne se limite pas aux réactions acide-base : elle convient aussi à une réaction de précipitation, par exemple le titrage des ions chlorure par les ions argent selon Ag⁺ + Cl⁻ → AgCl(s).",
              ],
              box: { label: "À retenir", text: "Suivi conductimétrique : deux droites dont l'intersection donne Véq. Si un ion consommé est remplacé par un ion de plus faible λ, σ diminue ; si des ions s'accumulent après l'équivalence, σ augmente." },
            },
            {
              heading: "Exploiter le résultat",
              paragraphs: [
                "Une fois Véq déterminé, la relation à l'équivalence donne la quantité de matière, puis la concentration de l'espèce titrée. On en déduit souvent une concentration en masse (c × M) ou un pourcentage massique, que l'on compare à l'indication d'une étiquette ou à une valeur de référence.",
                "Pour juger l'accord, on calcule l'écart relatif |valeur mesurée - valeur de référence|/valeur de référence, ou, si l'incertitude-type u de la mesure est connue, le quotient |valeur mesurée - valeur de référence|/u. Le résultat est jugé compatible avec la référence lorsque ce quotient est inférieur ou égal à 2.",
              ],
              box: { label: "Formule", text: "Titrage de AH par HO⁻ (proportions 1 : 1) : c₀ × V₀ = c × Véq. Écart relatif = |mesure - référence|/référence." },
            },
          ],
          keyPoints: [
            "À l'équivalence, réactif titré et titrant sont dans les proportions stœchiométriques : n₀(A)/a = néq(B)/b.",
            "pH-métrie : Véq au milieu du saut de pH (tangentes parallèles) ou au maximum de dpH/dV.",
            "pH à l'équivalence : 7 pour un acide fort titré par une base forte, supérieur à 7 pour un acide faible titré par une base forte.",
            "Indicateur coloré : sa zone de virage contient le pH à l'équivalence.",
            "Conductimétrie : deux droites qui se coupent à Véq ; les pentes s'expliquent par les λ des ions apparus ou disparus.",
            "On compare le résultat à la référence par l'écart relatif, ou par le quotient |écart|/u ≤ 2.",
          ],
          example: {
            statement: "On titre V₀ = 20,0 mL d'acide chlorhydrique par une solution d'hydroxyde de sodium de concentration c = 1,00 × 10⁻¹ mol·L⁻¹. Le saut de pH donne Véq = 12,4 mL. Déterminer la concentration c₀ de l'acide chlorhydrique.",
            solution: [
              "Réaction support du titrage : H₃O⁺ + HO⁻ → 2 H₂O, réaction totale et rapide.",
              "À l'équivalence, les ions H₃O⁺ initialement présents et les ions HO⁻ versés sont dans les proportions stœchiométriques 1 : 1 : n₀(H₃O⁺) = néq(HO⁻), soit c₀ × V₀ = c × Véq.",
              "c₀ = c × Véq/V₀ = 1,00 × 10⁻¹ × 12,4/20,0 = 6,20 × 10⁻² mol·L⁻¹.",
              "Les volumes peuvent rester en mL car seul leur rapport intervient. Résultat : c₀ = 6,20 × 10⁻² mol·L⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On titre V₀ = 10,0 mL d'une solution d'acide éthanoïque CH₃COOH par une solution d'hydroxyde de sodium de concentration c = 5,00 × 10⁻² mol·L⁻¹. L'équivalence est obtenue pour Véq = 14,6 mL. 1. Écrire l'équation de la réaction support du titrage. 2. Calculer la concentration c₀ de l'acide. 3. Le pH à l'équivalence vaut 8,7 : choisir entre le bleu de bromothymol (zone de virage 6,0 à 7,6) et la phénolphtaléine (8,2 à 10,0) pour réaliser ce titrage sans pH-mètre.",
              hint: "L'acide éthanoïque et l'ion hydroxyde réagissent mole à mole ; la zone de virage doit contenir le pH à l'équivalence.",
              solution: [
                "1. CH₃COOH + HO⁻ → CH₃COO⁻ + H₂O.",
                "2. À l'équivalence, n₀(CH₃COOH) = néq(HO⁻), soit c₀ × V₀ = c × Véq.",
                "c₀ = c × Véq/V₀ = 5,00 × 10⁻² × 14,6/10,0 = 7,30 × 10⁻² mol·L⁻¹.",
                "3. Le pH à l'équivalence, 8,7, appartient à la zone de virage de la phénolphtaléine (8,2 à 10,0) et non à celle du bleu de bromothymol. On choisit la phénolphtaléine.",
              ],
            },
            {
              level: 2,
              statement: "On titre V₀ = 10,0 mL d'une solution de chlorure de sodium par une solution de nitrate d'argent (Ag⁺ + NO₃⁻) de concentration c = 2,00 × 10⁻² mol·L⁻¹, après avoir ajouté 200 mL d'eau distillée dans le bécher. La réaction support est Ag⁺ + Cl⁻ → AgCl(s). La courbe σ = f(V) est formée de deux droites qui se coupent pour V = 8,5 mL. Données en mS·m²·mol⁻¹ : λ(Cl⁻) = 7,63 ; λ(NO₃⁻) = 7,14 ; λ(Ag⁺) = 6,19 ; λ(Na⁺) = 5,01. 1. Pourquoi ajoute-t-on 200 mL d'eau ? 2. Justifier l'allure de la courbe avant et après l'équivalence. 3. Calculer la concentration en ions chlorure de la solution titrée.",
              hint: "Faites le bilan : avant l'équivalence, quel ion disparaît et quel ion le remplace ? Après l'équivalence, quels ions s'accumulent ?",
              solution: [
                "1. Le grand volume d'eau rend négligeable la variation de volume due au titrant versé : les concentrations ne varient que par la réaction, et les portions de courbe sont rectilignes.",
                "2. Avant l'équivalence, chaque ion Ag⁺ versé précipite avec un ion Cl⁻ ; dans la solution, un ion Cl⁻ (λ = 7,63) est remplacé par un ion NO₃⁻ (λ = 7,14), les ions Na⁺ restant inchangés. σ diminue légèrement.",
                "Après l'équivalence, il n'y a plus d'ions Cl⁻ : les ions Ag⁺ et NO₃⁻ versés s'accumulent. σ augmente nettement.",
                "3. À l'équivalence, n₀(Cl⁻) = néq(Ag⁺), soit [Cl⁻]₀ × V₀ = c × Véq.",
                "[Cl⁻]₀ = 2,00 × 10⁻² × 8,5/10,0 = 1,7 × 10⁻² mol·L⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "Un vinaigre porte l'indication « 6° », c'est-à-dire 6,0 g d'acide éthanoïque pour 100 g de vinaigre. Pour le vérifier, on dilue 10 fois le vinaigre (solution S), puis on titre V₀ = 10,0 mL de S par une solution d'hydroxyde de sodium de concentration c = 1,00 × 10⁻¹ mol·L⁻¹, avec un suivi pH-métrique. La courbe dpH/dV présente un maximum pour V = 10,2 mL. Données : M(CH₃COOH) = 60,0 g·mol⁻¹ ; masse volumique du vinaigre ρ = 1,01 g·mL⁻¹. 1. Écrire l'équation de la réaction support. 2. Déterminer la concentration de S, puis celle du vinaigre. 3. Calculer la masse d'acide éthanoïque dans 100 g de vinaigre et la comparer à l'indication de l'étiquette par un écart relatif.",
              hint: "Pensez au facteur de dilution, puis convertissez 100 g de vinaigre en volume grâce à la masse volumique.",
              solution: [
                "1. CH₃COOH + HO⁻ → CH₃COO⁻ + H₂O. Le maximum de dpH/dV donne Véq = 10,2 mL.",
                "2. À l'équivalence, n₀(CH₃COOH) = néq(HO⁻) : cₛ × V₀ = c × Véq, donc cₛ = 1,00 × 10⁻¹ × 10,2/10,0 = 1,02 × 10⁻¹ mol·L⁻¹.",
                "Le vinaigre a été dilué 10 fois : c(vinaigre) = 10 × cₛ = 1,02 mol·L⁻¹, soit une concentration en masse t = 1,02 × 60,0 = 61,2 g·L⁻¹.",
                "3. Volume de 100 g de vinaigre : V = m/ρ = 100/1,01 = 99,0 mL = 9,90 × 10⁻² L. Masse d'acide : m = 61,2 × 9,90 × 10⁻² = 6,06 g.",
                "Écart relatif : |6,06 - 6,0|/6,0 ≈ 0,010, soit 1,0 %. Le résultat est en accord avec l'indication « 6° » de l'étiquette.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les titrages.",
            statements: [
              { text: "À l'équivalence d'un titrage acide-base, le pH vaut toujours 7.", true: false, why: "Seulement pour un acide fort titré par une base forte ; pour un acide faible titré par une base forte, il est supérieur à 7." },
              { text: "Avant l'équivalence, le réactif titrant est le réactif limitant.", true: true, why: "Chaque goutte versée est entièrement consommée par l'espèce titrée encore présente." },
              { text: "La réaction support d'un titrage doit être totale et rapide.", true: true, why: "Sinon, la relation à l'équivalence ne serait pas vérifiée au moment de la mesure." },
              { text: "Dans un titrage conductimétrique, Véq se lit toujours au maximum de σ.", true: false, why: "Véq correspond à l'intersection des deux droites ; pour l'acide chlorhydrique titré par la soude, c'est même un minimum de σ." },
              { text: "On ajoute de l'eau au départ d'un titrage conductimétrique pour pouvoir négliger la dilution.", true: true, why: "Les portions de courbe sont alors des droites." },
              { text: "Le maximum de dpH/dV indique le volume équivalent.", true: true, why: "La pente de la courbe pH = f(V) est la plus forte au point d'équivalence." },
              { text: "Un indicateur coloré convient si sa zone de virage est éloignée du pH à l'équivalence.", true: false, why: "Sa zone de virage doit au contraire contenir le pH à l'équivalence." },
            ],
          },
          quiz: [
            {
              q: "On titre 20,0 mL d'acide chlorhydrique par de la soude à 0,050 mol·L⁻¹ ; Véq = 16,0 mL. La concentration de l'acide vaut :",
              options: ["0,063 mol·L⁻¹", "0,040 mol·L⁻¹", "0,025 mol·L⁻¹", "0,080 mol·L⁻¹"],
              answer: 1,
              why: "c₀ = c × Véq/V₀ = 0,050 × 16,0/20,0 = 0,040 mol·L⁻¹.",
            },
            {
              q: "Lors du titrage de l'acide chlorhydrique par la soude, la conductivité diminue avant l'équivalence car :",
              options: ["les ions Cl⁻ réagissent avec les ions HO⁻ versés", "le volume de la solution augmente à chaque ajout", "les ions HO⁻ versés s'accumulent", "H₃O⁺ est remplacé par Na⁺, de plus faible λ"],
              answer: 3,
              why: "Chaque ion H₃O⁺ consommé est remplacé par un ion Na⁺, environ 7 fois moins conducteur.",
            },
            {
              q: "Pour titrer un acide faible par une base forte, quel indicateur choisir si le pH à l'équivalence vaut 8,8 ?",
              options: ["Hélianthine (3,1 à 4,4)", "Bleu de bromothymol (6,0 à 7,6)", "Phénolphtaléine (8,2 à 10,0)", "Aucun indicateur ne convient"],
              answer: 2,
              why: "Seule la zone de virage de la phénolphtaléine contient la valeur 8,8.",
            },
            {
              q: "On titre l'espèce A par l'espèce B selon la réaction 2 A + B → C. À l'équivalence :",
              options: ["n₀(A) = 2 néq(B)", "2 n₀(A) = néq(B)", "n₀(A) = néq(B)", "n₀(A) = néq(B)/2"],
              answer: 0,
              why: "Les proportions stœchiométriques donnent n₀(A)/2 = néq(B)/1, soit n₀(A) = 2 néq(B).",
            },
            {
              q: "La méthode des tangentes sert à :",
              options: ["tracer la droite d'étalonnage d'un dosage", "repérer l'équivalence sur une courbe de pH", "choisir la concentration du titrant", "calculer la pente d'une courbe de conductivité"],
              answer: 1,
              why: "Elle permet de placer le point d'équivalence au milieu du saut de pH.",
            },
          ],
          trap: "Confondre le volume équivalent avec le volume pour lequel le pH vaut 7, ou oublier le facteur de dilution et les coefficients stœchiométriques dans la relation à l'équivalence.",
          method: "Écrivez toujours la relation à l'équivalence sous la forme littérale n₀(A)/a = néq(B)/b avant de remplacer par c × V. Vérifiez ensuite l'ordre de grandeur : si Véq et V₀ sont voisins, les deux concentrations le sont aussi (pour des proportions 1 : 1).",
        },
      ],
    },
    /* ================================================================== */
    /* ÉVOLUTION TEMPORELLE : CINÉTIQUE ET RADIOACTIVITÉ                    */
    /* ================================================================== */
    {
      id: 'evolution-temporelle',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-de-reaction',
          title: 'Vitesse de réaction et facteurs cinétiques',
          minutes: 30,
          objectives: [
            "Définir la vitesse volumique de disparition d'un réactif et d'apparition d'un produit, et la déterminer graphiquement.",
            "Définir et déterminer un temps de demi-réaction t₁/₂.",
            "Identifier, à partir de données expérimentales, des facteurs cinétiques : température, concentration des réactifs, catalyseur.",
            "Citer des méthodes de suivi temporel d'une transformation chimique.",
          ],
          course: [
            {
              heading: "Transformations lentes et rapides, suivi temporel",
              paragraphs: [
                "Certaines transformations semblent instantanées : la précipitation des ions argent par les ions chlorure, ou la réaction d'un acide fort avec une base forte, sont achevées dès que les réactifs sont mélangés. D'autres sont lentes : leur évolution dure de quelques secondes à plusieurs jours. C'est le cas de l'oxydation des ions iodure I⁻ par l'eau oxygénée H₂O₂, qui forme progressivement du diiode et colore la solution en jaune, puis en brun. D'autres encore sont si lentes qu'elles semblent ne pas avoir lieu : le système est dit cinétiquement inerte.",
                "Pour suivre l'évolution temporelle d'un système, on mesure à intervalles réguliers une grandeur reliée à la concentration d'une espèce : absorbance (spectrophotométrie, si une espèce est colorée), conductivité (si des ions apparaissent ou disparaissent), pression ou volume (si un gaz se forme), ou concentration déterminée par titrage de prélèvements. Dans ce dernier cas, on bloque d'abord l'évolution du prélèvement par une trempe : refroidissement brutal et dilution dans de l'eau glacée.",
              ],
              box: { label: "Repère", text: "Méthodes de suivi temporel : spectrophotométrie, conductimétrie, mesure de pression ou de volume de gaz, titrage de prélèvements après une trempe." },
            },
            {
              heading: "Vitesse volumique de réaction",
              paragraphs: [
                "La vitesse volumique de disparition d'un réactif R est v(R) = -d[R]/dt ; la vitesse volumique d'apparition d'un produit P est v(P) = d[P]/dt. Elles s'expriment en mol·L⁻¹·s⁻¹ (ou mol·L⁻¹·min⁻¹). Le signe moins rend la vitesse de disparition positive, puisque [R] diminue.",
                "Graphiquement, la vitesse à un instant t est égale, en valeur absolue, au coefficient directeur de la tangente à la courbe [R] = f(t) ou [P] = f(t) à cet instant. On trace la tangente, on choisit deux points éloignés sur elle et on calcule Δ[P]/Δt. En général, la vitesse est maximale au début, puis diminue au cours du temps, car les réactifs se raréfient ; elle s'annule lorsque le système n'évolue plus.",
                "Pour une réaction a A + b B → c C, les vitesses ne sont pas toutes égales : v(A)/a = v(B)/b = v(C)/c. Par exemple, pour 2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O, les ions iodure disparaissent deux fois plus vite que le diiode n'apparaît.",
              ],
              box: { label: "Définition", text: "v(R) = -d[R]/dt (disparition d'un réactif), v(P) = d[P]/dt (apparition d'un produit), en mol·L⁻¹·s⁻¹. Elle est égale au coefficient directeur de la tangente à la courbe, en valeur absolue." },
            },
            {
              heading: "Le temps de demi-réaction",
              paragraphs: [
                "Le temps de demi-réaction t₁/₂ est la durée nécessaire pour que l'avancement atteigne la moitié de sa valeur finale : x(t₁/₂) = xf/2. Pour une transformation totale, c'est aussi la durée au bout de laquelle la moitié du réactif limitant a été consommée. Pour le déterminer, on calcule xf/2 (ou la concentration ou l'absorbance correspondante) et on lit l'abscisse du point de la courbe qui a cette ordonnée.",
                "Le temps de demi-réaction donne l'ordre de grandeur de la durée d'une transformation : on la considère pratiquement achevée au bout de quelques t₁/₂ (environ 5 à 10). Il guide aussi le choix de la méthode de suivi : une mesure doit être beaucoup plus rapide que t₁/₂ pour que le système n'évolue pas pendant qu'on l'effectue.",
              ],
              box: { label: "Définition", text: "Temps de demi-réaction t₁/₂ : durée au bout de laquelle l'avancement vaut la moitié de l'avancement final, x(t₁/₂) = xf/2." },
            },
            {
              heading: "Les facteurs cinétiques",
              paragraphs: [
                "Un facteur cinétique est un paramètre qui modifie la vitesse d'une réaction. La température en est un : en général, la vitesse augmente avec la température. C'est pourquoi on conserve les aliments au réfrigérateur, pour ralentir les réactions de dégradation, et pourquoi on chauffe un milieu réactionnel pour accélérer une synthèse. La concentration des réactifs en est un autre : plus elle est grande, plus la réaction est en général rapide.",
                "Ces effets s'interprètent à l'échelle microscopique : une réaction nécessite des chocs entre entités réactives, et seuls certains chocs, assez énergétiques et bien orientés, sont efficaces. Augmenter la concentration augmente le nombre de chocs par unité de temps ; augmenter la température augmente l'agitation des entités, donc le nombre de chocs et surtout la proportion de chocs efficaces.",
                "Un catalyseur est une espèce qui accélère une réaction sans figurer dans son équation : il est consommé puis régénéré. La catalyse est homogène si le catalyseur est dans la même phase que les réactifs (ions Fe³⁺ dans la dismutation de l'eau oxygénée), hétérogène s'il est dans une autre phase (platine des pots catalytiques), enzymatique si c'est une enzyme (la catalase, présente dans le sang, décompose l'eau oxygénée). Un catalyseur ne modifie pas l'état final : il permet seulement de l'atteindre plus vite.",
              ],
              box: { label: "À retenir", text: "Facteurs cinétiques : température, concentration des réactifs, catalyseur (homogène, hétérogène ou enzymatique). Un catalyseur accélère la réaction sans modifier l'état final et sans apparaître dans l'équation." },
            },
          ],
          keyPoints: [
            "v(R) = -d[R]/dt et v(P) = d[P]/dt, en mol·L⁻¹·s⁻¹.",
            "La vitesse à un instant t est le coefficient directeur de la tangente à la courbe (en valeur absolue) ; elle diminue en général au cours du temps.",
            "Temps de demi-réaction t₁/₂ : durée pour atteindre la moitié de l'avancement final.",
            "Facteurs cinétiques : température, concentration des réactifs, catalyseur.",
            "Interprétation : davantage de chocs efficaces quand la température ou la concentration augmente.",
            "Un catalyseur accélère la réaction, est régénéré et ne change pas l'état final.",
          ],
          example: {
            statement: "On suit l'apparition du diiode lors de la réaction 2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O. La concentration finale en diiode vaut [I₂]f = 8,0 mmol·L⁻¹. On lit sur la courbe [I₂] = f(t) que [I₂] = 4,0 mmol·L⁻¹ à t = 150 s. La tangente à la courbe à l'origine passe par les points (0 s ; 0) et (100 s ; 6,0 mmol·L⁻¹). 1. Déterminer le temps de demi-réaction. 2. Calculer la vitesse volumique initiale d'apparition du diiode, puis la vitesse initiale de disparition des ions iodure.",
            solution: [
              "1. Le diiode a pour coefficient stœchiométrique 1 : [I₂] est proportionnelle à l'avancement. À t₁/₂, [I₂] = [I₂]f/2 = 4,0 mmol·L⁻¹, valeur atteinte à t = 150 s. Donc t₁/₂ = 150 s.",
              "2. La vitesse initiale d'apparition est le coefficient directeur de la tangente à l'origine : v₀(I₂) = (6,0 - 0)/(100 - 0) = 6,0 × 10⁻² mmol·L⁻¹·s⁻¹ = 6,0 × 10⁻⁵ mol·L⁻¹·s⁻¹.",
              "Les ions iodure ont pour coefficient 2 : v(I⁻)/2 = v(I₂)/1, donc v₀(I⁻) = 2 × 6,0 × 10⁻⁵ = 1,2 × 10⁻⁴ mol·L⁻¹·s⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un élève réalise trois fois la réaction entre les ions iodure et l'eau oxygénée et mesure la durée nécessaire pour que la solution atteigne une même teinte. Expérience A, à 20 °C (mélange de référence) : 120 s. Expérience B, à 40 °C, mêmes concentrations : 35 s. Expérience C, à 20 °C, concentration initiale en eau oxygénée doublée : 60 s. Quels facteurs cinétiques ces expériences mettent-elles en évidence ? Interpréter à l'échelle microscopique.",
              hint: "Comparez deux expériences qui ne diffèrent que par un seul paramètre.",
              solution: [
                "A et B : seule la température change (20 °C puis 40 °C) ; la durée passe de 120 s à 35 s. La réaction est plus rapide à température plus élevée : la température est un facteur cinétique.",
                "A et C : seule la concentration en eau oxygénée change (doublée) ; la durée passe de 120 s à 60 s. La concentration d'un réactif est un facteur cinétique.",
                "Interprétation : une température plus élevée accroît l'agitation des entités, donc le nombre de chocs et la proportion de chocs efficaces ; une concentration plus grande accroît le nombre de chocs par unité de temps.",
                "Conclusion : la température et la concentration des réactifs sont deux facteurs cinétiques ; leur augmentation accélère ici la réaction.",
              ],
            },
            {
              level: 2,
              statement: "On étudie la décomposition de l'eau oxygénée, 2 H₂O₂ → 2 H₂O + O₂, catalysée par des ions Fe³⁺. Les mesures donnent [H₂O₂] = 0,100 mol·L⁻¹ à t = 0 ; 0,067 mol·L⁻¹ à 5 min ; 0,045 mol·L⁻¹ à 10 min ; 0,030 mol·L⁻¹ à 15 min ; 0,020 mol·L⁻¹ à 20 min. 1. Calculer la vitesse moyenne de disparition de H₂O₂ entre 0 et 5 min, puis entre 15 et 20 min. Commenter. 2. Estimer le temps de demi-réaction. 3. Quel est le rôle des ions Fe³⁺ et de quel type de catalyse s'agit-il ? L'état final serait-il différent sans eux ?",
              hint: "Vitesse moyenne de disparition : -Δ[H₂O₂]/Δt. La réaction est totale : t₁/₂ correspond à [H₂O₂] = 0,050 mol·L⁻¹.",
              solution: [
                "1. Entre 0 et 5 min : v = -(0,067 - 0,100)/(5 - 0) = 6,6 × 10⁻³ mol·L⁻¹·min⁻¹.",
                "Entre 15 et 20 min : v = -(0,020 - 0,030)/(20 - 15) = 2,0 × 10⁻³ mol·L⁻¹·min⁻¹. La vitesse diminue au cours du temps, car la concentration du réactif diminue.",
                "2. t₁/₂ correspond à [H₂O₂] = 0,100/2 = 0,050 mol·L⁻¹. Cette valeur est atteinte entre 5 min (0,067) et 10 min (0,045), plus près de 10 min : t₁/₂ ≈ 9 min.",
                "3. Les ions Fe³⁺ accélèrent la réaction sans apparaître dans son équation : ce sont des catalyseurs. Ils sont dissous dans la même phase (aqueuse) que l'eau oxygénée : la catalyse est homogène.",
                "Un catalyseur ne modifie pas l'état final : sans les ions Fe³⁺, le même état final serait atteint, mais beaucoup plus lentement.",
              ],
            },
            {
              level: 3,
              statement: "On suit par spectrophotométrie la formation du diiode, seule espèce colorée, lors de la réaction totale 2 I⁻ + S₂O₈²⁻ → I₂ + 2 SO₄²⁻, dans un volume V = 100 mL, avec n₀(I⁻) = 2,0 mmol et n₀(S₂O₈²⁻) = 0,50 mmol. L'étalonnage donne A = k × [I₂] avec k = 250 L·mol⁻¹. Mesures : A = 0,37 à t = 4 min ; 0,63 à 8 min ; 0,94 à 16 min ; 1,25 à l'état final. 1. Déterminer le réactif limitant et l'avancement maximal ; vérifier que la valeur finale de A est cohérente. 2. Déterminer le temps de demi-réaction. 3. Comment évoluerait t₁/₂ si l'on réalisait l'expérience à une température plus élevée ? L'absorbance finale changerait-elle ?",
              hint: "A est proportionnelle à [I₂], donc à l'avancement : à t₁/₂, l'absorbance vaut la moitié de l'absorbance finale.",
              solution: [
                "1. Si I⁻ était limitant : 2,0 - 2x = 0 donne x = 1,0 mmol ; si S₂O₈²⁻ était limitant : 0,50 - x = 0 donne x = 0,50 mmol. Le réactif limitant est l'ion peroxodisulfate S₂O₈²⁻ et xmax = 0,50 mmol.",
                "La réaction étant totale, [I₂]f = xmax/V = 0,50 × 10⁻³/0,100 = 5,0 × 10⁻³ mol·L⁻¹, d'où Af = k × [I₂]f = 250 × 5,0 × 10⁻³ = 1,25. C'est bien la valeur mesurée à l'état final.",
                "2. À t₁/₂, x = xf/2, donc A = Af/2 = 0,625. D'après les mesures, A = 0,63 à t = 8 min : t₁/₂ ≈ 8 min.",
                "3. La température est un facteur cinétique : à température plus élevée, les chocs efficaces sont plus fréquents, la réaction est plus rapide et t₁/₂ diminue.",
                "L'état final ne dépend pas de la vitesse : le réactif limitant est toujours entièrement consommé et l'absorbance finale reste égale à 1,25.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la détermination graphique d'une vitesse volumique d'apparition à un instant t₁.",
            items: [
              "Tracer la courbe [P] = f(t) à partir des mesures",
              "Repérer le point de la courbe d'abscisse t₁",
              "Tracer la tangente à la courbe en ce point",
              "Choisir deux points éloignés sur la tangente",
              "Calculer le coefficient directeur Δ[P]/Δt",
              "Exprimer la vitesse avec son unité, en mol·L⁻¹·s⁻¹",
            ],
          },
          quiz: [
            {
              q: "La vitesse volumique de disparition d'un réactif R s'écrit :",
              options: ["d[R]/dt", "[R]/t", "-d[R]/dt", "-d[R]/d[P]"],
              answer: 2,
              why: "[R] diminue, donc d[R]/dt est négative ; le signe moins rend la vitesse de disparition positive.",
            },
            {
              q: "Le temps de demi-réaction est la durée au bout de laquelle :",
              options: ["x atteint la moitié de xf", "la vitesse de réaction a été divisée par deux", "la moitié du temps total de réaction s'est écoulée", "la concentration des produits a doublé"],
              answer: 0,
              why: "Par définition, x(t₁/₂) = xf/2.",
            },
            {
              q: "Pourquoi place-t-on les aliments au réfrigérateur ?",
              options: ["Pour déplacer l'état final des réactions", "Pour augmenter la concentration des réactifs", "Pour catalyser leur conservation", "Pour ralentir les réactions de dégradation"],
              answer: 3,
              why: "La température est un facteur cinétique : à basse température, les réactions de dégradation sont plus lentes.",
            },
            {
              q: "Un catalyseur :",
              options: ["modifie l'état final du système", "accélère la réaction et est régénéré", "est un réactif consommé définitivement", "ralentit toujours la réaction"],
              answer: 1,
              why: "Il est consommé puis régénéré, n'apparaît pas dans l'équation et ne modifie pas l'état final.",
            },
            {
              q: "La catalase, qui décompose l'eau oxygénée dans le sang, réalise une catalyse :",
              options: ["homogène", "hétérogène", "enzymatique", "photochimique"],
              answer: 2,
              why: "La catalase est une enzyme : la catalyse est enzymatique.",
            },
          ],
          trap: "Lire t₁/₂ comme la moitié de la durée totale de l'expérience, alors que c'est la date où l'avancement atteint la moitié de sa valeur finale. Autre confusion : prendre la valeur d'une concentration pour une vitesse.",
          method: "Pour une vitesse lue sur un graphique, tracez la tangente au crayon fin, choisissez deux points très éloignés sur cette droite (et non sur la courbe), et vérifiez le signe : une vitesse de disparition ou d'apparition est toujours positive.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-de-vitesse-mecanisme',
          title: 'Loi de vitesse d\'ordre 1 et mécanisme réactionnel',
          minutes: 35,
          objectives: [
            "Identifier, à partir de données expérimentales, une loi de vitesse d'ordre 1 : v = k × [A].",
            "Exploiter l'évolution exponentielle [A](t) = [A]₀ × e⁻ᵏᵗ et la relation t₁/₂ = ln 2/k.",
            "Identifier, dans un mécanisme réactionnel donné, un intermédiaire réactionnel et un catalyseur.",
            "Représenter les flèches courbes d'un acte élémentaire en utilisant l'électronégativité et les doublets d'électrons.",
          ],
          course: [
            {
              heading: "Loi de vitesse d'ordre 1",
              paragraphs: [
                "Pour de nombreuses réactions, la vitesse de disparition d'un réactif A est proportionnelle à sa concentration : v = -d[A]/dt = k × [A]. On dit que la réaction suit une loi de vitesse d'ordre 1 par rapport à A. La constante de vitesse k est positive, s'exprime en s⁻¹ (ou min⁻¹) et ne dépend que de la température : elle augmente avec elle.",
                "Cette relation est une équation différentielle de la forme y' = -k y. Sa solution, avec [A] = [A]₀ à t = 0, est [A](t) = [A]₀ × e⁻ᵏᵗ : la concentration décroît de façon exponentielle. La décomposition du pentaoxyde de diazote N₂O₅, la dismutation de l'eau oxygénée catalysée par les ions Fe³⁺ ou l'élimination de nombreux médicaments par l'organisme suivent une telle loi.",
              ],
              box: { label: "Propriété", text: "Loi d'ordre 1 : v = k × [A], donc [A](t) = [A]₀ × e⁻ᵏᵗ. La constante de vitesse k, en s⁻¹, ne dépend que de la température." },
            },
            {
              heading: "Reconnaître une loi d'ordre 1",
              paragraphs: [
                "Deux méthodes permettent de vérifier l'ordre 1 à partir de mesures. Méthode des vitesses : on détermine v à plusieurs instants (tangentes) et on trace v en fonction de [A] ; on obtient une droite passant par l'origine, de coefficient directeur k. Méthode du logarithme : comme ln([A]/[A]₀) = -k t, la courbe ln([A]/[A]₀) en fonction de t est une droite passant par l'origine, de coefficient directeur -k.",
                "Le temps de demi-réaction d'une réaction d'ordre 1 se calcule : [A] = [A]₀/2 donne e⁻ᵏᵗ = ½, soit t₁/₂ = ln 2/k. Il ne dépend pas de la concentration initiale. Au bout de 2 t₁/₂, il reste le quart du réactif ; au bout de n t₁/₂, il en reste [A]₀/2ⁿ. Un temps de demi-réaction constant, quelle que soit la concentration de départ, est donc une signature de l'ordre 1.",
              ],
              box: { label: "Formule", text: "Ordre 1 : t₁/₂ = ln 2/k, indépendant de [A]₀. Test graphique : ln([A]/[A]₀) = f(t) est une droite de pente -k, ou v = f([A]) est une droite passant par l'origine." },
            },
            {
              heading: "Le mécanisme réactionnel",
              paragraphs: [
                "L'équation d'une réaction décrit un bilan, pas ce qui se passe à l'échelle des entités. Le mécanisme réactionnel décompose la réaction en une suite d'actes élémentaires, chacun décrivant une seule rencontre (ou une seule transformation) d'entités. La somme des actes élémentaires, après simplification, redonne l'équation de la réaction.",
                "Une espèce formée dans un acte puis consommée dans un acte suivant est un intermédiaire réactionnel : elle n'apparaît pas dans l'équation bilan et sa durée de vie est souvent très courte. Une espèce consommée dans un acte puis régénérée dans un acte suivant est un catalyseur : elle n'apparaît pas non plus dans le bilan. Un catalyseur agit en remplaçant le mécanisme par un autre, plus rapide.",
                "Exemple : la dismutation de l'eau oxygénée catalysée par les ions iodure. Acte 1 : H₂O₂ + I⁻ → H₂O + IO⁻. Acte 2 : H₂O₂ + IO⁻ → H₂O + O₂ + I⁻. Bilan : 2 H₂O₂ → 2 H₂O + O₂. L'ion IO⁻ est un intermédiaire réactionnel (formé puis consommé) ; l'ion I⁻ est un catalyseur (consommé puis régénéré).",
              ],
              box: { label: "Définition", text: "Intermédiaire réactionnel : espèce formée puis consommée. Catalyseur : espèce consommée puis régénérée. Aucun des deux n'apparaît dans l'équation bilan." },
            },
            {
              heading: "Les flèches courbes",
              paragraphs: [
                "Au cours d'un acte élémentaire, des liaisons se forment et se rompent par déplacement de doublets d'électrons. On représente chaque déplacement par une flèche courbe, qui part toujours d'un doublet (doublet non liant ou doublet de liaison) et pointe vers un atome ou vers une liaison. Elle part d'un site donneur de doublet, riche en électrons, et va vers un site accepteur, pauvre en électrons.",
                "Les sites donneurs sont les atomes porteurs de doublets non liants ou d'une charge négative, et les liaisons multiples. Les sites accepteurs sont les atomes porteurs d'une charge positive, partielle ou entière. On les repère grâce à l'électronégativité : dans une liaison C-O ou C=O, l'oxygène, plus électronégatif, porte une charge partielle négative δ- et le carbone une charge partielle positive δ+. Le carbone est alors un site accepteur.",
                "Exemple : lors de l'attaque de l'ion hydroxyde sur le carbone d'un groupe C=O, une flèche part d'un doublet non liant de l'oxygène de HO⁻ et pointe vers le carbone δ+ (formation d'une liaison C-O) ; une seconde flèche part de l'un des deux doublets de la double liaison C=O et pointe vers l'atome d'oxygène (rupture de cette liaison, l'oxygène devenant porteur d'une charge négative).",
              ],
              box: { label: "Règle", text: "Une flèche courbe part d'un doublet d'électrons (site donneur) et pointe vers un site accepteur (atome δ+ ou chargé positivement). Elle traduit la formation ou la rupture d'une liaison." },
            },
          ],
          keyPoints: [
            "Ordre 1 : v = k × [A] ; [A](t) = [A]₀ × e⁻ᵏᵗ.",
            "t₁/₂ = ln 2/k, indépendant de [A]₀ ; il reste [A]₀/2ⁿ au bout de n t₁/₂.",
            "Test graphique : ln([A]/[A]₀) = f(t) est une droite de pente -k.",
            "Mécanisme : suite d'actes élémentaires dont la somme donne l'équation bilan.",
            "Intermédiaire réactionnel : formé puis consommé. Catalyseur : consommé puis régénéré.",
            "Flèche courbe : d'un doublet (site donneur) vers un site accepteur (atome δ+).",
          ],
          example: {
            statement: "La décomposition d'un réactif A suit une loi d'ordre 1 de constante de vitesse k = 2,3 × 10⁻³ s⁻¹, avec [A]₀ = 0,040 mol·L⁻¹. 1. Calculer le temps de demi-réaction. 2. Calculer [A] à t = 10 min.",
            solution: [
              "1. Pour une loi d'ordre 1, t₁/₂ = ln 2/k = 0,693/(2,3 × 10⁻³) = 3,0 × 10² s, soit environ 5,0 min.",
              "2. t = 10 min = 600 s. [A] = [A]₀ × e⁻ᵏᵗ = 0,040 × e^(-2,3 × 10⁻³ × 600) = 0,040 × e^(-1,38).",
              "e^(-1,38) ≈ 0,25, donc [A] ≈ 0,040 × 0,25 = 1,0 × 10⁻² mol·L⁻¹.",
              "Vérification : 600 s représentent environ 2 t₁/₂, il doit donc rester le quart de [A]₀, soit 0,010 mol·L⁻¹. Résultat : [A] ≈ 1,0 × 10⁻² mol·L⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une réaction d'ordre 1 a un temps de demi-réaction t₁/₂ = 12 min. 1. Calculer sa constante de vitesse k. 2. Quelle fraction du réactif reste-t-il au bout de 36 min ? 3. Au bout de combien de temps ne reste-t-il que 1/16 du réactif initial ?",
              hint: "k = ln 2/t₁/₂ ; au bout de n demi-réactions, il reste une fraction 1/2ⁿ du réactif.",
              solution: [
                "1. k = ln 2/t₁/₂ = 0,693/12 = 5,8 × 10⁻² min⁻¹.",
                "2. 36 min = 3 × 12 min = 3 t₁/₂ : il reste 1/2³ = 1/8 du réactif, soit 12,5 %.",
                "3. 1/16 = 1/2⁴ : il faut 4 t₁/₂ = 4 × 12 = 48 min.",
              ],
            },
            {
              level: 2,
              statement: "On étudie à température constante la décomposition du pentaoxyde de diazote N₂O₅ dissous dans un solvant. On mesure [N₂O₅] = 1,00 mmol·L⁻¹ à t = 0 ; 0,71 à 10 min ; 0,50 à 20 min ; 0,35 à 30 min ; 0,25 à 40 min (en mmol·L⁻¹). 1. Calculer ln([N₂O₅]/[N₂O₅]₀) à chaque date et montrer que la réaction est d'ordre 1. 2. En déduire k et t₁/₂. 3. Prévoir [N₂O₅] à t = 60 min.",
              hint: "Si l'ordre est 1, ln([A]/[A]₀) = -k t : les points doivent être alignés sur une droite passant par l'origine.",
              solution: [
                "1. ln(1,00) = 0 ; ln(0,71) = -0,34 ; ln(0,50) = -0,69 ; ln(0,35) = -1,05 ; ln(0,25) = -1,39 (aux dates 0, 10, 20, 30 et 40 min).",
                "Les rapports ln([N₂O₅]/[N₂O₅]₀)/t valent tous environ -0,035 min⁻¹ : les points sont alignés sur une droite passant par l'origine. La loi ln([A]/[A]₀) = -k t est vérifiée, la réaction est d'ordre 1.",
                "2. k ≈ 0,035 min⁻¹ (opposé du coefficient directeur). t₁/₂ = ln 2/k = 0,693/0,035 ≈ 20 min, ce que confirme le tableau : [N₂O₅] passe de 1,00 à 0,50 mmol·L⁻¹ en 20 min, puis de 0,50 à 0,25 mmol·L⁻¹ en 20 min encore.",
                "3. 60 min = 3 t₁/₂ : [N₂O₅] = 1,00/2³ = 0,125 mmol·L⁻¹ ≈ 0,13 mmol·L⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "L'hydrolyse du 2-bromo-2-méthylpropane (CH₃)₃C-Br dans un mélange eau-acétone suit le mécanisme suivant. Acte 1 : (CH₃)₃C-Br → (CH₃)₃C⁺ + Br⁻. Acte 2 : (CH₃)₃C⁺ + H₂O → (CH₃)₃C-OH₂⁺. Acte 3 : (CH₃)₃C-OH₂⁺ + H₂O → (CH₃)₃C-OH + H₃O⁺. Électronégativités : χ(C) = 2,55 ; χ(Br) = 2,96 ; χ(O) = 3,44. 1. Écrire l'équation bilan. 2. Identifier les intermédiaires réactionnels. Y a-t-il un catalyseur ? 3. Justifier la polarisation de la liaison C-Br et décrire la flèche courbe de l'acte 1. 4. Décrire la flèche courbe de l'acte 2 en précisant site donneur et site accepteur. 5. La réaction est d'ordre 1 par rapport au bromoalcane ; on donne, dans les conditions de l'expérience, k = 1,4 × 10⁻⁴ s⁻¹. Calculer t₁/₂.",
              hint: "Additionnez les trois actes et simplifiez les espèces présentes des deux côtés. Une flèche courbe part toujours d'un doublet d'électrons.",
              solution: [
                "1. En additionnant les trois actes et en simplifiant (CH₃)₃C⁺ et (CH₃)₃C-OH₂⁺, présents de part et d'autre, on obtient : (CH₃)₃C-Br + 2 H₂O → (CH₃)₃C-OH + Br⁻ + H₃O⁺.",
                "2. Le carbocation (CH₃)₃C⁺ est formé à l'acte 1 et consommé à l'acte 2 ; l'ion (CH₃)₃C-OH₂⁺ est formé à l'acte 2 et consommé à l'acte 3. Ce sont deux intermédiaires réactionnels. Aucune espèce n'est consommée puis régénérée : il n'y a pas de catalyseur (l'eau est un réactif, consommée deux fois).",
                "3. Le brome est plus électronégatif que le carbone (2,96 contre 2,55) : la liaison C-Br est polarisée, le carbone porte une charge partielle δ+ et le brome δ-. Lors de l'acte 1, le doublet de la liaison C-Br part entièrement sur le brome, qui devient l'ion Br⁻ : la flèche courbe part du doublet de la liaison C-Br et pointe vers l'atome de brome.",
                "4. Acte 2 : l'atome d'oxygène de l'eau porte deux doublets non liants (site donneur) ; le carbone du carbocation porte une charge positive (site accepteur). La flèche courbe part d'un doublet non liant de l'oxygène et pointe vers le carbone : une liaison C-O se forme, et l'oxygène, désormais lié à trois atomes, porte la charge positive.",
                "5. t₁/₂ = ln 2/k = 0,693/(1,4 × 10⁻⁴) = 5,0 × 10³ s, soit environ 83 min.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Acte élémentaire", right: "Étape qui se déroule en une seule rencontre d'entités" },
              { left: "Intermédiaire réactionnel", right: "Espèce formée puis consommée au cours du mécanisme" },
              { left: "Catalyseur", right: "Espèce consommée puis régénérée, absente du bilan" },
              { left: "Site donneur", right: "Atome ou liaison riche en électrons (doublet, charge négative)" },
              { left: "Site accepteur", right: "Atome pauvre en électrons (charge positive ou δ+)" },
              { left: "Constante de vitesse k", right: "Coefficient de v = k[A], en s⁻¹, qui dépend de la température" },
            ],
          },
          quiz: [
            {
              q: "Pour une réaction d'ordre 1, si l'on double [A]₀, le temps de demi-réaction :",
              options: ["double", "est divisé par 2", "est multiplié par 4", "ne change pas"],
              answer: 3,
              why: "t₁/₂ = ln 2/k ne dépend pas de la concentration initiale.",
            },
            {
              q: "Une réaction d'ordre 1 a pour constante de vitesse k = 0,10 min⁻¹. Son temps de demi-réaction vaut environ :",
              options: ["0,069 min", "6,9 min", "10 min", "14 min"],
              answer: 1,
              why: "t₁/₂ = ln 2/k = 0,693/0,10 ≈ 6,9 min.",
            },
            {
              q: "Dans un mécanisme, une espèce formée dans un acte puis consommée dans le suivant est :",
              options: ["un intermédiaire", "un catalyseur", "un réactif de l'équation bilan", "un produit de l'équation bilan"],
              answer: 0,
              why: "Un intermédiaire réactionnel est formé puis consommé ; un catalyseur est consommé puis régénéré.",
            },
            {
              q: "Une flèche courbe part :",
              options: ["d'un atome chargé positivement", "d'un noyau atomique", "d'un doublet d'électrons", "d'un atome d'hydrogène"],
              answer: 2,
              why: "Elle représente le déplacement d'un doublet d'électrons, d'un site donneur vers un site accepteur.",
            },
            {
              q: "Pour vérifier qu'une réaction est d'ordre 1, on peut tracer :",
              options: ["[A] en fonction de t, qui doit être une droite", "1/[A] en fonction de t", "v en fonction de t", "ln([A]/[A]₀) en fonction de t"],
              answer: 3,
              why: "Pour l'ordre 1, ln([A]/[A]₀) = -k t : on obtient une droite de pente -k.",
            },
          ],
          trap: "Confondre catalyseur et intermédiaire réactionnel, ou croire qu'ils figurent dans l'équation bilan : l'intermédiaire est formé puis consommé, le catalyseur est consommé puis régénéré. Pour les flèches courbes, l'erreur classique est de les faire partir d'un atome ou d'une charge positive au lieu d'un doublet.",
          method: "Pour analyser un mécanisme, listez pour chaque acte les espèces formées et les espèces consommées : une espèce qui figure dans les deux listes est un intermédiaire si elle est d'abord formée, un catalyseur si elle est d'abord consommée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decroissance-radioactive',
          title: 'La décroissance radioactive',
          minutes: 35,
          objectives: [
            "Écrire l'équation d'une désintégration radioactive en appliquant les lois de conservation, et identifier son type (α, β⁻, β⁺, émission γ).",
            "Établir et exploiter la loi de décroissance radioactive N(t) = N₀ × e^(-λt), en lien avec le caractère aléatoire de la désintégration.",
            "Relier l'activité, la constante radioactive λ et la demi-vie t₁/₂ = ln 2/λ.",
            "Expliquer le principe d'une datation par radioactivité et déterminer un âge.",
          ],
          course: [
            {
              heading: "Noyaux instables et désintégrations",
              paragraphs: [
                "Un noyau atomique est formé de Z protons et de N = A - Z neutrons ; A est le nombre de masse et Z le numéro atomique. On le note avec A en exposant et Z en indice devant le symbole de l'élément, par exemple ¹⁴₆C pour le carbone 14. Certains noyaux sont instables : ils se transforment spontanément en un noyau plus stable en émettant une particule. Cette transformation, la désintégration radioactive, ne dépend ni de la température, ni de la pression, ni de l'espèce chimique dont l'atome fait partie.",
                "Toute désintégration respecte la conservation du nombre de nucléons A et la conservation de la charge électrique, donc du nombre Z. Selon la particule émise, on distingue la radioactivité α (émission d'un noyau d'hélium ⁴₂He), la radioactivité β⁻ (émission d'un électron ⁰₋₁e, un neutron du noyau se transformant en proton) et la radioactivité β⁺ (émission d'un positon ⁰₁e, un proton se transformant en neutron). Le noyau fils, souvent formé dans un état excité, se désexcite en émettant un rayonnement γ, de nature électromagnétique et de très haute énergie.",
                "Exemples : ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (α) ; ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (β⁻) ; ¹⁸₉F → ¹⁸₈O + ⁰₁e (β⁺, utilisé en imagerie médicale par tomographie par émission de positons).",
              ],
              box: { label: "Règle", text: "Conservation du nombre de nucléons A et du nombre de charge Z. α : émission de ⁴₂He ; β⁻ : émission de ⁰₋₁e ; β⁺ : émission de ⁰₁e ; γ : photon émis lors de la désexcitation du noyau fils." },
            },
            {
              heading: "Une loi statistique : la décroissance exponentielle",
              paragraphs: [
                "La désintégration d'un noyau donné est un phénomène aléatoire : on ne peut pas prévoir l'instant où il se désintégrera. On sait seulement que chaque noyau a, pendant une courte durée dt, une probabilité λ dt de se désintégrer, où λ est la constante radioactive (en s⁻¹), caractéristique du noyau. Ce caractère aléatoire n'empêche pas une loi très précise pour un grand nombre de noyaux, comme pour une pièce lancée : le résultat d'un lancer est imprévisible, mais la proportion de « pile » sur un million de lancers est très proche de ½.",
                "Pour une population de N noyaux, le nombre moyen de désintégrations pendant dt est λ N dt, d'où dN = -λ N dt, soit dN/dt = -λ N. La solution de cette équation différentielle est N(t) = N₀ × e^(-λt), où N₀ est le nombre de noyaux à t = 0. C'est la même forme mathématique qu'une loi de vitesse d'ordre 1 en cinétique chimique.",
              ],
              box: { label: "Propriété", text: "Loi de décroissance radioactive : dN/dt = -λN, donc N(t) = N₀ × e^(-λt). La constante radioactive λ, en s⁻¹, est propre au noyau considéré." },
            },
            {
              heading: "Demi-vie et activité",
              paragraphs: [
                "La demi-vie t₁/₂ d'un noyau radioactif est la durée au bout de laquelle la moitié des noyaux initialement présents se sont désintégrés : N(t₁/₂) = N₀/2, d'où t₁/₂ = ln 2/λ. Au bout de n demi-vies, il reste N₀/2ⁿ noyaux. Les demi-vies vont de fractions de seconde à des milliards d'années : environ 8,0 jours pour l'iode 131, 5 730 ans pour le carbone 14, 4,5 milliards d'années pour l'uranium 238.",
                "L'activité A d'un échantillon est le nombre moyen de désintégrations par seconde. Elle s'exprime en becquerels (1 Bq = 1 désintégration par seconde) et vaut A = -dN/dt = λ N. Elle décroît donc selon la même loi : A(t) = A₀ × e^(-λt). Ordre de grandeur : le corps humain a une activité d'environ 8 000 Bq, due surtout au potassium 40 et au carbone 14 qu'il contient.",
              ],
              box: { label: "Formule", text: "t₁/₂ = ln 2/λ ; activité A = λ × N, en becquerels (Bq) ; A(t) = A₀ × e^(-λt). Au bout de n demi-vies : N = N₀/2ⁿ et A = A₀/2ⁿ." },
            },
            {
              heading: "Applications : datation et radioprotection",
              paragraphs: [
                "Datation au carbone 14 : tant qu'un organisme est vivant, il échange du carbone avec son milieu, et la proportion de carbone 14 dans son carbone reste constante. À sa mort, les échanges cessent et le carbone 14 se désintègre sans être renouvelé. En comparant l'activité A d'un échantillon à l'activité A₀ d'un échantillon vivant de même masse de carbone, on obtient son âge : t = (1/λ) × ln(A₀/A) = (t₁/₂/ln 2) × ln(A₀/A). La méthode s'applique jusqu'à environ 50 000 ans ; au-delà, on utilise d'autres noyaux, comme le couple uranium-plomb pour dater les roches.",
                "Les rayonnements émis sont ionisants et peuvent endommager les cellules vivantes. La radioprotection repose sur trois principes : s'éloigner de la source, réduire la durée d'exposition et interposer des écrans adaptés. Une feuille de papier arrête les particules α, quelques millimètres d'aluminium arrêtent les particules β, et il faut plusieurs centimètres de plomb ou une épaisseur de béton pour atténuer fortement les rayons γ.",
              ],
              box: { label: "À retenir", text: "Âge d'un échantillon : t = (t₁/₂/ln 2) × ln(A₀/A). Radioprotection : distance, durée d'exposition réduite, écrans adaptés." },
            },
          ],
          keyPoints: [
            "Désintégration : conservation de A et de Z ; types α (⁴₂He), β⁻ (⁰₋₁e), β⁺ (⁰₁e), émission γ.",
            "La désintégration d'un noyau est aléatoire ; la loi N(t) = N₀ × e^(-λt) vaut pour un grand nombre de noyaux.",
            "t₁/₂ = ln 2/λ ; au bout de n demi-vies, il reste N₀/2ⁿ noyaux.",
            "Activité A = λN, en becquerels ; elle décroît selon la même loi que N.",
            "Datation : t = (t₁/₂/ln 2) × ln(A₀/A).",
          ],
          example: {
            statement: "L'iode 131 (¹³¹₅₃I), utilisé en médecine nucléaire, est radioactif β⁻, de demi-vie 8,0 jours. 1. Écrire l'équation de sa désintégration, sachant que le noyau fils est un isotope du xénon Xe (Z = 54). 2. Un patient reçoit une dose d'activité A₀ = 4,0 × 10⁸ Bq. Calculer l'activité de cette dose au bout de 24 jours, puis au bout de 30 jours.",
            solution: [
              "1. Émission β⁻ : conservation de A, A = 131 ; conservation de Z, 53 = Z - 1, donc Z = 54 (xénon). Équation : ¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e.",
              "2. 24 jours = 3 demi-vies : A = A₀/2³ = 4,0 × 10⁸/8 = 5,0 × 10⁷ Bq.",
              "Pour 30 jours, on utilise la loi de décroissance : λ = ln 2/t₁/₂ = 0,693/8,0 = 8,7 × 10⁻² jour⁻¹.",
              "A = A₀ × e^(-λt) = 4,0 × 10⁸ × e^(-0,0866 × 30) = 4,0 × 10⁸ × e^(-2,60) ≈ 4,0 × 10⁸ × 0,074 = 3,0 × 10⁷ Bq.",
              "Vérification : 30 jours, c'est un peu plus de 3 demi-vies ; l'activité doit être un peu inférieure à 5,0 × 10⁷ Bq, ce qui est bien le cas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Compléter les équations suivantes et indiquer le type de radioactivité : a) ²²⁶₈₈Ra → ²²²₈₆Rn + ? ; b) ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ? ; c) ³⁰₁₅P → ? + ⁰₁e (silicium Si : Z = 14) ; d) ²¹⁰₈₄Po → ? + ⁴₂He (plomb Pb : Z = 82).",
              hint: "La somme des nombres de masse et la somme des nombres de charge doivent être égales de part et d'autre de la flèche.",
              solution: [
                "a) A : 226 = 222 + A, donc A = 4 ; Z : 88 = 86 + Z, donc Z = 2. La particule est ⁴₂He : radioactivité α.",
                "b) A : 60 = 60 + A, donc A = 0 ; Z : 27 = 28 + Z, donc Z = -1. La particule est ⁰₋₁e : radioactivité β⁻.",
                "c) A = 30 et Z = 15 - 1 = 14 : le noyau fils est ³⁰₁₄Si. Émission d'un positon : radioactivité β⁺.",
                "d) A = 210 - 4 = 206 et Z = 84 - 2 = 82 : le noyau fils est ²⁰⁶₈₂Pb. Radioactivité α.",
              ],
            },
            {
              level: 2,
              statement: "Un échantillon contient N₀ = 6,0 × 10¹⁵ noyaux de cobalt 60, de demi-vie t₁/₂ = 5,27 ans. 1. Calculer la constante radioactive λ en an⁻¹, puis en s⁻¹ (1 an = 3,16 × 10⁷ s). 2. Calculer l'activité initiale A₀. 3. Combien de noyaux de cobalt 60 restera-t-il au bout de 10,0 ans ? Quelle sera alors l'activité ?",
              hint: "λ = ln 2/t₁/₂ ; pour obtenir une activité en becquerels, λ doit être exprimée en s⁻¹.",
              solution: [
                "1. λ = ln 2/t₁/₂ = 0,693/5,27 = 0,132 an⁻¹. En s⁻¹ : λ = 0,1315/(3,16 × 10⁷) = 4,16 × 10⁻⁹ s⁻¹.",
                "2. A₀ = λ × N₀ = 4,16 × 10⁻⁹ × 6,0 × 10¹⁵ = 2,5 × 10⁷ Bq.",
                "3. N = N₀ × e^(-λt) avec λt = 0,1315 × 10,0 = 1,315 : N = 6,0 × 10¹⁵ × e^(-1,315) = 6,0 × 10¹⁵ × 0,268 = 1,6 × 10¹⁵ noyaux.",
                "Activité : A = λ × N = A₀ × e^(-λt) = 2,5 × 10⁷ × 0,268 = 6,7 × 10⁶ Bq.",
              ],
            },
            {
              level: 3,
              statement: "Lors de fouilles, on découvre un fragment de charbon de bois. Pour 1,0 g de carbone, son activité due au carbone 14 correspond à 5,9 désintégrations par minute, alors qu'un bois récent présente 13,6 désintégrations par minute pour 1,0 g de carbone. Donnée : t₁/₂(¹⁴C) = 5 730 ans. 1. Écrire l'équation de désintégration du carbone 14, émetteur β⁻ (azote N : Z = 7). 2. Expliquer pourquoi l'activité du charbon a diminué depuis la mort de l'arbre. 3. Déterminer l'âge du charbon de bois. 4. Pourquoi cette méthode ne permettrait-elle pas de dater un objet de 200 000 ans ?",
              hint: "A = A₀ × e^(-λt) donne t = (1/λ) × ln(A₀/A) avec λ = ln 2/t₁/₂ ; le rapport des activités peut rester en désintégrations par minute.",
              solution: [
                "1. ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.",
                "2. Vivant, l'arbre échangeait du carbone avec l'atmosphère : la proportion de carbone 14 restait constante. Depuis sa mort, le carbone 14 se désintègre sans être renouvelé, donc le nombre de noyaux de carbone 14, et avec lui l'activité, diminue.",
                "3. t = (t₁/₂/ln 2) × ln(A₀/A) = (5 730/0,693) × ln(13,6/5,9) = 8 268 × ln(2,31) = 8 268 × 0,835 ≈ 6,9 × 10³ ans.",
                "Vérification : A₀/A ≈ 2,3, un peu plus que 2 ; l'âge est donc un peu supérieur à une demi-vie (5 730 ans), ce qui est cohérent.",
                "4. 200 000 ans représentent environ 35 demi-vies : l'activité aurait été divisée par 2³⁵ ≈ 3 × 10¹⁰. Elle serait bien trop faible pour être mesurée et distinguée du bruit de fond.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la radioactivité.",
            statements: [
              { text: "On peut prévoir l'instant où un noyau donné va se désintégrer.", true: false, why: "La désintégration d'un noyau est aléatoire ; seule l'évolution d'une grande population est prévisible." },
              { text: "Chauffer un échantillon radioactif accélère sa désintégration.", true: false, why: "La désintégration ne dépend ni de la température ni de l'état chimique de l'atome." },
              { text: "Au bout de deux demi-vies, il ne reste plus aucun noyau radioactif.", true: false, why: "Il en reste le quart, N₀/4." },
              { text: "L'activité d'un échantillon est proportionnelle au nombre de noyaux radioactifs qu'il contient.", true: true, why: "A = λ × N." },
              { text: "Lors d'une désintégration β⁻, le nombre de masse du noyau ne change pas.", true: true, why: "L'électron émis a un nombre de masse nul ; c'est Z qui augmente de 1." },
              { text: "Une feuille de papier suffit à arrêter les particules α.", true: true, why: "Les particules α sont très peu pénétrantes." },
              { text: "Plus la constante radioactive λ est grande, plus la demi-vie est longue.", true: false, why: "t₁/₂ = ln 2/λ : une grande valeur de λ correspond à une demi-vie courte." },
            ],
          },
          quiz: [
            {
              q: "Lors d'une désintégration α, le noyau père perd :",
              options: ["2 nucléons", "4 nucléons dont 2 protons", "2 protons, 2 neutrons et 2 électrons", "1 neutron et 1 électron"],
              answer: 1,
              why: "Il émet un noyau d'hélium ⁴₂He : A diminue de 4 et Z de 2.",
            },
            {
              q: "Le becquerel est l'unité :",
              options: ["de la demi-vie", "de la constante radioactive", "de l'activité", "de la dose reçue"],
              answer: 2,
              why: "1 Bq correspond à une désintégration par seconde.",
            },
            {
              q: "Un échantillon a une activité de 800 Bq. Au bout de 3 demi-vies, son activité vaut :",
              options: ["100 Bq", "200 Bq", "267 Bq", "0 Bq"],
              answer: 0,
              why: "A = A₀/2³ = 800/8 = 100 Bq.",
            },
            {
              q: "La relation entre la constante radioactive λ et la demi-vie est :",
              options: ["t₁/₂ = λ × ln 2", "t₁/₂ = 1/λ", "t₁/₂ = λ/ln 2", "t₁/₂ = ln 2/λ"],
              answer: 3,
              why: "N(t₁/₂) = N₀/2 donne e^(-λt₁/₂) = ½, soit t₁/₂ = ln 2/λ.",
            },
            {
              q: "Le carbone 14 permet de dater des restes organiques :",
              options: ["de plusieurs millions d'années", "jusqu'à environ 50 000 ans", "seulement s'ils sont minéraux", "à partir de 1 million d'années"],
              answer: 1,
              why: "Au-delà d'une dizaine de demi-vies (environ 50 000 ans), l'activité restante est trop faible pour être mesurée.",
            },
          ],
          trap: "Croire qu'au bout de deux demi-vies tous les noyaux ont disparu (il en reste un quart), ou utiliser λ et t dans des unités différentes : λ en s⁻¹ impose t en secondes, λ en an⁻¹ impose t en années.",
          method: "Avant tout calcul exponentiel, estimez le nombre de demi-vies écoulées : t/t₁/₂ = 3 signifie N₀/8. Ce repère permet de vérifier immédiatement le résultat donné par la calculatrice.",
        },
      ],
    },
    /* ================================================================== */
    /* PRÉVOIR L'ÉTAT FINAL D'UNE TRANSFORMATION                            */
    /* ================================================================== */
    {
      id: 'etat-final',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'quotient-et-constante',
          title: 'Quotient de réaction et constante d\'équilibre',
          minutes: 35,
          objectives: [
            "Relier le caractère non total d'une transformation à la présence, à l'état final, de tous les réactifs et produits, et calculer un taux d'avancement final.",
            "Exprimer le quotient de réaction Qr d'une transformation en solution aqueuse.",
            "Prévoir le sens d'évolution spontanée d'un système en comparant la valeur du quotient de réaction à la constante d'équilibre K.",
            "Interpréter l'état d'équilibre comme un état dynamique.",
          ],
          course: [
            {
              heading: "Transformations totales et non totales",
              paragraphs: [
                "Une transformation est totale lorsque l'avancement final xf est égal à l'avancement maximal xmax : le réactif limitant a entièrement disparu. Ce n'est pas toujours le cas. Lorsqu'on dissout de l'acide éthanoïque dans l'eau, la mesure du pH montre que [H₃O⁺] est bien plus petite que la concentration apportée : la réaction CH₃COOH + H₂O = CH₃COO⁻ + H₃O⁺ cesse d'évoluer alors que l'acide est encore présent. On écrit alors l'équation avec le signe =.",
                "On mesure cette limitation par le taux d'avancement final τ = xf/xmax, compris entre 0 et 1. Si τ = 1, la transformation est totale ; si τ < 1, elle est non totale, et l'état final contient à la fois tous les réactifs et tous les produits. On dit que le système a atteint un état d'équilibre chimique.",
              ],
              box: { label: "Définition", text: "Taux d'avancement final : τ = xf/xmax. τ = 1 : transformation totale. τ < 1 : transformation non totale ; tous les réactifs et produits coexistent à l'état final, qui est un état d'équilibre." },
            },
            {
              heading: "Un équilibre dynamique",
              paragraphs: [
                "À l'équilibre, les concentrations ne varient plus, mais la réaction ne s'est pas arrêtée à l'échelle microscopique : la réaction dans le sens direct (réactifs → produits) et la réaction dans le sens inverse (produits → réactifs) se poursuivent à la même vitesse, si bien que leurs effets se compensent. L'équilibre est dynamique. On peut le comparer à une personne qui monte un escalator descendant à la même vitesse que lui : elle reste au même niveau, et pourtant tout bouge.",
                "Ce caractère dynamique a des conséquences : on peut atteindre le même état d'équilibre en partant des réactifs ou en partant des produits ; et si l'on modifie la composition du système, par exemple en ajoutant un réactif, il évolue de nouveau jusqu'à un nouvel état d'équilibre.",
              ],
              box: { label: "À retenir", text: "À l'équilibre, les réactions directe et inverse ont lieu à la même vitesse : les quantités de matière restent constantes, mais les transformations microscopiques continuent." },
            },
            {
              heading: "Le quotient de réaction",
              paragraphs: [
                "Pour une réaction en solution aqueuse a A + b B = c C + d D, le quotient de réaction est Qr = ([C]ᶜ × [D]ᵈ)/([A]ᵃ × [B]ᵇ), où chaque concentration en mol·L⁻¹ est divisée par c° = 1 mol·L⁻¹, de sorte que Qr est sans unité. Par convention, le solvant (l'eau) et les solides n'apparaissent pas dans l'expression : ils comptent pour 1.",
                "Qr dépend de la composition du système à l'instant considéré : il évolue au cours de la transformation. Pour Fe³⁺ + SCN⁻ = FeSCN²⁺, Qr = [FeSCN²⁺]/([Fe³⁺] × [SCN⁻]). Pour Cu²⁺ + Zn(s) = Cu(s) + Zn²⁺, Qr = [Zn²⁺]/[Cu²⁺], les métaux solides n'y figurant pas. Pour CH₃COOH + H₂O = CH₃COO⁻ + H₃O⁺, Qr = [CH₃COO⁻] × [H₃O⁺]/[CH₃COOH], l'eau solvant n'y figurant pas.",
              ],
              box: { label: "Formule", text: "Pour a A + b B = c C + d D en solution : Qr = ([C]ᶜ × [D]ᵈ)/([A]ᵃ × [B]ᵇ), concentrations divisées par c° = 1 mol·L⁻¹. Le solvant et les solides ne sont pas écrits." },
            },
            {
              heading: "Constante d'équilibre et sens d'évolution",
              paragraphs: [
                "À l'équilibre, le quotient de réaction prend une valeur Qr,éq qui ne dépend que de la réaction et de la température, et non de l'état initial : c'est la constante d'équilibre K. On a donc Qr,éq = K(T).",
                "Le critère d'évolution spontanée compare Qr à K. Si Qr < K, le système évolue dans le sens direct : Qr augmente jusqu'à K. Si Qr > K, il évolue dans le sens inverse : Qr diminue jusqu'à K. Si Qr = K, il est à l'équilibre et n'évolue plus à l'échelle macroscopique. Un système évolue donc toujours de façon que Qr tende vers K.",
                "La valeur de K renseigne aussi sur l'avancement : lorsque K est très grande (en pratique au-delà d'environ 10⁴), la transformation peut souvent être considérée comme totale ; lorsque K est très petite (en deçà d'environ 10⁻⁴), elle est très peu avancée. Entre les deux, l'état final dépend fortement des conditions initiales. Pour Cu²⁺ + Zn(s) = Cu(s) + Zn²⁺, K est de l'ordre de 10³⁷ à 25 °C : la réaction est totale.",
              ],
              box: { label: "Règle", text: "Qr < K : évolution dans le sens direct. Qr > K : évolution dans le sens inverse. Qr = K : équilibre. La constante d'équilibre K ne dépend que de la température." },
            },
          ],
          keyPoints: [
            "τ = xf/xmax ; si τ < 1, la transformation est non totale et réactifs et produits coexistent à l'état final.",
            "L'équilibre est dynamique : les réactions directe et inverse ont lieu à la même vitesse.",
            "Qr = ([C]ᶜ × [D]ᵈ)/([A]ᵃ × [B]ᵇ), sans le solvant ni les solides.",
            "À l'équilibre, Qr,éq = K, constante qui ne dépend que de la température.",
            "Qr < K : sens direct ; Qr > K : sens inverse ; Qr = K : équilibre.",
            "K supérieure à environ 10⁴ : transformation pratiquement totale.",
          ],
          example: {
            statement: "On considère la réaction Fe³⁺ + SCN⁻ = FeSCN²⁺, dont on prend pour l'exercice la constante d'équilibre K = 1,0 × 10² à 25 °C. On réalise un mélange tel que, juste après le mélange, [Fe³⁺] = 2,0 × 10⁻² mol·L⁻¹, [SCN⁻] = 1,0 × 10⁻² mol·L⁻¹ et [FeSCN²⁺] = 5,0 × 10⁻² mol·L⁻¹. Dans quel sens le système évolue-t-il ?",
            solution: [
              "Expression du quotient de réaction : Qr = [FeSCN²⁺]/([Fe³⁺] × [SCN⁻]).",
              "Valeur initiale : Qr,i = 5,0 × 10⁻²/(2,0 × 10⁻² × 1,0 × 10⁻²) = 5,0 × 10⁻²/2,0 × 10⁻⁴ = 2,5 × 10².",
              "Comparaison : Qr,i = 2,5 × 10² > K = 1,0 × 10².",
              "Le système évolue dans le sens inverse : une partie des ions FeSCN²⁺ se dissocie en ions Fe³⁺ et SCN⁻, jusqu'à ce que Qr devienne égal à K.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire l'expression du quotient de réaction pour chacune des réactions suivantes, en solution aqueuse : a) NH₃ + H₂O = NH₄⁺ + HO⁻ ; b) Ag⁺ + Cl⁻ = AgCl(s) ; c) 2 I⁻ + S₂O₈²⁻ = I₂ + 2 SO₄²⁻ ; d) Cu(s) + 2 Ag⁺ = Cu²⁺ + 2 Ag(s).",
              hint: "Produits au numérateur, réactifs au dénominateur, chaque concentration élevée à la puissance de son coefficient ; l'eau solvant et les solides ne figurent pas.",
              solution: [
                "a) Qr = [NH₄⁺] × [HO⁻]/[NH₃] (l'eau, solvant, n'apparaît pas).",
                "b) Qr = 1/([Ag⁺] × [Cl⁻]) (le solide AgCl n'apparaît pas).",
                "c) Qr = [I₂] × [SO₄²⁻]²/([I⁻]² × [S₂O₈²⁻]).",
                "d) Qr = [Cu²⁺]/[Ag⁺]² (les métaux solides n'apparaissent pas).",
              ],
            },
            {
              level: 2,
              statement: "On prépare V = 100,0 mL d'une solution d'acide éthanoïque de concentration apportée c = 1,0 × 10⁻² mol·L⁻¹. Son pH mesuré à 25 °C vaut 3,4. 1. Écrire l'équation de la réaction de l'acide avec l'eau et décrire l'état initial et l'état final à l'aide de l'avancement. 2. Calculer xmax, xf et le taux d'avancement final τ. Conclure. 3. Calculer la valeur du quotient de réaction à l'équilibre, c'est-à-dire la constante d'équilibre K de cette réaction.",
              hint: "L'eau est le solvant, en excès ; xf se déduit de [H₃O⁺]f = 10^(-pH) mol·L⁻¹ et du volume.",
              solution: [
                "1. CH₃COOH + H₂O = CH₃COO⁻ + H₃O⁺. État initial : n₀ = c × V = 1,0 × 10⁻³ mol d'acide, eau en excès, pas d'ions éthanoate ni oxonium. État final : n₀ - xf d'acide, xf d'ions éthanoate et xf d'ions oxonium.",
                "2. Si la réaction était totale, l'acide serait entièrement consommé : xmax = 1,0 × 10⁻³ mol.",
                "[H₃O⁺]f = 10^(-3,4) = 4,0 × 10⁻⁴ mol·L⁻¹, donc xf = [H₃O⁺]f × V = 4,0 × 10⁻⁴ × 0,1000 = 4,0 × 10⁻⁵ mol.",
                "τ = xf/xmax = 4,0 × 10⁻⁵/1,0 × 10⁻³ = 0,040, soit 4,0 %. τ < 1 : la transformation n'est pas totale ; l'acide est très majoritairement resté sous la forme CH₃COOH.",
                "3. À l'équilibre, [CH₃COO⁻] = [H₃O⁺] = 4,0 × 10⁻⁴ mol·L⁻¹ et [CH₃COOH] = 1,0 × 10⁻² - 4,0 × 10⁻⁴ = 9,6 × 10⁻³ mol·L⁻¹.",
                "K = Qr,éq = (4,0 × 10⁻⁴)²/(9,6 × 10⁻³) = 1,6 × 10⁻⁷/9,6 × 10⁻³ ≈ 1,7 × 10⁻⁵.",
              ],
            },
            {
              level: 3,
              statement: "On étudie à température constante la réaction d'estérification CH₃COOH + C₂H₅OH = CH₃COOC₂H₅ + H₂O, de constante d'équilibre K = 4,0. La réaction a lieu sans solvant : l'eau est ici un produit et figure donc dans Qr. Les quatre espèces occupant le même volume, Qr = n(ester) × n(eau)/(n(acide) × n(alcool)). 1. On mélange 1,0 mol d'acide et 1,0 mol d'éthanol. Montrer que l'avancement final vaut xf = 2/3 mol et calculer τ. 2. On mélange 1,0 mol de chacune des quatre espèces. Dans quel sens le système évolue-t-il ? 3. On mélange 1,0 mol d'acide et 3,0 mol d'éthanol. Montrer que xf vérifie 3 xf² - 16 xf + 12 = 0, puis calculer xf et τ. Conclure sur l'intérêt d'utiliser un réactif en excès.",
              hint: "À l'équilibre, Qr = K. Pour la question 1, prenez la racine carrée des deux membres ; pour la question 3, résolvez l'équation du second degré et gardez la solution compatible avec xmax.",
              solution: [
                "1. À l'équilibre : n(ester) = n(eau) = xf et n(acide) = n(alcool) = 1,0 - xf. Qr,éq = xf²/(1,0 - xf)² = K = 4,0, donc xf/(1,0 - xf) = 2,0 (quantités positives), soit xf = 2,0 - 2,0 xf et xf = 2/3 mol ≈ 0,67 mol.",
                "Les réactifs sont en proportions stœchiométriques, donc xmax = 1,0 mol et τ = 0,67/1,0 = 0,67 : la transformation est non totale.",
                "2. Qr,i = (1,0 × 1,0)/(1,0 × 1,0) = 1,0 < K = 4,0 : le système évolue dans le sens direct, celui de la formation de l'ester.",
                "3. À l'équilibre : n(ester) = n(eau) = xf, n(acide) = 1,0 - xf, n(alcool) = 3,0 - xf. L'égalité xf²/((1,0 - xf)(3,0 - xf)) = 4,0 donne xf² = 4,0 × (3,0 - 4,0 xf + xf²), d'où 3 xf² - 16 xf + 12 = 0.",
                "Discriminant : Δ = 16² - 4 × 3 × 12 = 256 - 144 = 112. Solutions : xf = (16 - √112)/6 ≈ 0,90 mol ou xf = (16 + √112)/6 ≈ 4,4 mol. La seconde est impossible car supérieure à xmax = 1,0 mol (l'acide est limitant).",
                "Donc xf ≈ 0,90 mol et τ ≈ 0,90. Utiliser un réactif en excès augmente le taux d'avancement final (de 0,67 à 0,90) : on améliore ainsi le rendement de la synthèse.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche pour prévoir le sens d'évolution spontanée d'un système.",
            items: [
              "Écrire l'équation de la réaction avec le signe =",
              "Écrire l'expression littérale de Qr, sans le solvant ni les solides",
              "Calculer les concentrations dans l'état initial",
              "Calculer la valeur initiale Qr,i",
              "Comparer Qr,i à la constante d'équilibre K",
              "Conclure : sens direct si Qr,i < K, sens inverse si Qr,i > K",
            ],
          },
          quiz: [
            {
              q: "Pour la réaction Ag⁺ + Cl⁻ = AgCl(s), le quotient de réaction s'écrit :",
              options: ["[AgCl]/([Ag⁺][Cl⁻])", "[Ag⁺][Cl⁻]", "[Ag⁺][Cl⁻]/[AgCl]", "1/([Ag⁺][Cl⁻])"],
              answer: 3,
              why: "Le solide AgCl n'apparaît pas dans Qr ; il ne reste que les réactifs au dénominateur.",
            },
            {
              q: "Un système a un quotient de réaction initial Qr,i = 3,0 × 10⁻³ et K = 2,0 × 10⁻². Il évolue :",
              options: ["dans le sens direct", "dans le sens inverse", "il n'évolue pas", "d'abord dans un sens puis dans l'autre"],
              answer: 0,
              why: "Qr,i < K : Qr doit augmenter jusqu'à K, donc des produits se forment.",
            },
            {
              q: "Le taux d'avancement final d'une transformation totale vaut :",
              options: ["0", "0,5", "1", "K"],
              answer: 2,
              why: "τ = xf/xmax et, pour une transformation totale, xf = xmax.",
            },
            {
              q: "À l'équilibre chimique :",
              options: ["toutes les réactions sont arrêtées", "les réactions directe et inverse se compensent", "la réaction s'est arrêtée faute de réactif disponible dans le milieu", "Qr est nul"],
              answer: 1,
              why: "L'équilibre est dynamique : les réactions directe et inverse ont lieu à la même vitesse.",
            },
            {
              q: "La constante d'équilibre K d'une réaction dépend :",
              options: ["des concentrations initiales", "du volume de la solution", "de la présence d'un catalyseur", "de la température uniquement"],
              answer: 3,
              why: "K ne dépend que de la réaction et de la température ; un catalyseur ne change pas l'état final.",
            },
          ],
          trap: "Écrire l'eau solvant ou un solide dans le quotient de réaction, ou conclure sur le sens d'évolution en comparant Qr à 1 au lieu de le comparer à K.",
          method: "Rédigez toujours en trois lignes : expression littérale de Qr, valeur numérique de Qr,i, comparaison avec K et conclusion. Vérifiez ensuite la cohérence : une évolution dans le sens direct forme des produits, donc fait augmenter Qr.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'force-acides-bases',
          title: 'Force des acides et des bases : Ka, pKa, prédominance',
          minutes: 35,
          objectives: [
            "Associer la constante d'acidité Ka d'un couple acide-base à la réaction de l'acide avec l'eau, et définir pKa = -log Ka.",
            "Comparer la force de différents acides ou de différentes bases à l'aide de leur Ka ou de leur pKa.",
            "Utiliser le produit ionique de l'eau Ke pour calculer le pH d'une solution de base forte.",
            "Représenter et exploiter un diagramme de prédominance ou de distribution, et citer les propriétés d'une solution tampon.",
          ],
          course: [
            {
              heading: "Constante d'acidité Ka et pKa",
              paragraphs: [
                "La constante d'acidité Ka d'un couple AH/A⁻ est la constante d'équilibre de la réaction de l'acide avec l'eau : AH + H₂O = A⁻ + H₃O⁺, soit Ka = [A⁻]éq × [H₃O⁺]éq/[AH]éq (concentrations divisées par c°). On utilise aussi pKa = -log Ka, c'est-à-dire Ka = 10⁻ᵖᴷᵃ. Comme toute constante d'équilibre, Ka ne dépend que de la température.",
                "Exemples à 25 °C : CH₃COOH/CH₃COO⁻, pKa = 4,8 ; HCOOH/HCOO⁻, pKa = 3,8 ; NH₄⁺/NH₃, pKa = 9,2. Les couples de l'eau ont pour pKa 0 (H₃O⁺/H₂O) et 14 (H₂O/HO⁻) à 25 °C.",
              ],
              box: { label: "Définition", text: "Ka = [A⁻]éq × [H₃O⁺]éq/[AH]éq, constante d'équilibre de AH + H₂O = A⁻ + H₃O⁺. pKa = -log Ka, donc Ka = 10^(-pKa)." },
            },
            {
              heading: "Force des acides et des bases",
              paragraphs: [
                "Un acide est d'autant plus fort qu'il cède facilement H⁺ à l'eau, donc que l'équilibre AH + H₂O = A⁻ + H₃O⁺ est déplacé vers la droite : plus Ka est grand, plus le pKa est petit et plus l'acide est fort. Sa base conjuguée est alors d'autant plus faible. L'acide méthanoïque (pKa = 3,8) est ainsi plus fort que l'acide éthanoïque (pKa = 4,8), et l'ion éthanoate est une base plus forte que l'ion méthanoate.",
                "Un acide fort réagit totalement avec l'eau (HCl, HNO₃) : en solution, il est entièrement remplacé par H₃O⁺, l'acide le plus fort qui puisse exister dans l'eau. De même, une base forte réagit totalement avec l'eau en donnant HO⁻, ou est apportée directement sous forme HO⁻ (hydroxyde de sodium NaOH). Les acides et bases faibles ont, à 25 °C, un pKa compris entre 0 et 14.",
                "Le produit ionique de l'eau Ke est la constante d'équilibre de l'autoprotolyse 2 H₂O = H₃O⁺ + HO⁻ : Ke = [H₃O⁺] × [HO⁻] = 1,0 × 10⁻¹⁴ à 25 °C (pKe = 14). Cette relation est vérifiée dans toute solution aqueuse. Pour une base forte de concentration c, [HO⁻] = c, donc [H₃O⁺] = Ke/c et pH = 14 + log(c/c°) à 25 °C. Une solution d'hydroxyde de sodium à 1,0 × 10⁻² mol·L⁻¹ a ainsi un pH de 12,0.",
              ],
              box: { label: "Propriété", text: "Plus Ka est grand (pKa petit), plus l'acide est fort et sa base conjuguée faible. Ke = [H₃O⁺] × [HO⁻] = 1,0 × 10⁻¹⁴ à 25 °C. Base forte : pH = 14 + log(c/c°)." },
            },
            {
              heading: "Diagrammes de prédominance et de distribution",
              paragraphs: [
                "En prenant le logarithme de l'expression de Ka, on obtient pH = pKa + log([A⁻]/[AH]). Si pH = pKa, [A⁻] = [AH] ; si pH > pKa, [A⁻] > [AH] et la base prédomine ; si pH < pKa, l'acide prédomine. Le diagramme de prédominance est un axe gradué en pH, séparé en deux domaines à la valeur pKa : AH à gauche, A⁻ à droite.",
                "Le diagramme de distribution représente les pourcentages de AH et de A⁻ en fonction du pH : les deux courbes se croisent à 50 % pour pH = pKa. Une espèce représente plus de 90 % du couple dès que le pH s'écarte du pKa de plus d'une unité. C'est le principe des indicateurs colorés : leurs formes acide et basique n'ont pas la même couleur, et la zone de virage s'étend approximativement de pKa - 1 à pKa + 1.",
                "Les acides α-aminés, qui portent deux groupes acido-basiques, ont trois formes selon le pH ; la forme amphion domine entre les deux pKa. Pour la glycine, dont les pKa valent environ 2,3 et 9,6, l'amphion ⁺H₃N-CH₂-COO⁻ prédomine entre pH 2,3 et pH 9,6.",
              ],
              box: { label: "Formule", text: "pH = pKa + log([A⁻]/[AH]). pH < pKa : AH prédomine ; pH = pKa : [AH] = [A⁻] ; pH > pKa : A⁻ prédomine." },
            },
            {
              heading: "Les solutions tampons",
              paragraphs: [
                "Une solution tampon est une solution dont le pH varie peu par ajout modéré d'un acide ou d'une base, ou par une dilution modérée. On l'obtient en mélangeant un acide faible et sa base conjuguée en quantités voisines : son pH est alors proche du pKa du couple. Un mélange équimolaire d'acide éthanoïque et d'ions éthanoate a ainsi un pH voisin de 4,8.",
                "Les milieux biologiques sont tamponnés : le pH du sang est maintenu entre 7,35 et 7,45 environ, notamment grâce au couple CO₂,H₂O/HCO₃⁻. Un écart de quelques dixièmes d'unité peut avoir des conséquences graves (acidose ou alcalose).",
              ],
              box: { label: "À retenir", text: "Solution tampon : pH presque constant malgré un ajout modéré d'acide, de base ou d'eau. Mélange d'un acide faible et de sa base conjuguée en quantités voisines, de pH proche du pKa." },
            },
          ],
          keyPoints: [
            "Ka = [A⁻][H₃O⁺]/[AH] à l'équilibre ; pKa = -log Ka.",
            "Plus le pKa est petit, plus l'acide est fort et plus sa base conjuguée est faible.",
            "Ke = [H₃O⁺][HO⁻] = 1,0 × 10⁻¹⁴ à 25 °C ; base forte : pH = 14 + log(c/c°).",
            "pH = pKa + log([A⁻]/[AH]) : AH prédomine si pH < pKa, A⁻ si pH > pKa.",
            "Zone de virage d'un indicateur coloré : environ de pKa - 1 à pKa + 1.",
            "Solution tampon : acide faible et base conjuguée en quantités voisines, pH proche du pKa et peu sensible aux ajouts modérés.",
          ],
          example: {
            statement: "L'ammoniac NH₃ est une base faible (couple NH₄⁺/NH₃, pKa = 9,2). Une solution d'ammoniac a un pH de 10,6. 1. Quelle est l'espèce prédominante du couple ? 2. Calculer le rapport [NH₃]/[NH₄⁺].",
            solution: [
              "Diagramme de prédominance : NH₄⁺ prédomine pour pH < 9,2, NH₃ pour pH > 9,2.",
              "1. pH = 10,6 > pKa = 9,2 : c'est la base, NH₃, qui prédomine.",
              "2. pH = pKa + log([NH₃]/[NH₄⁺]), donc log([NH₃]/[NH₄⁺]) = 10,6 - 9,2 = 1,4.",
              "[NH₃]/[NH₄⁺] = 10^(1,4) ≈ 25 : il y a environ 25 fois plus d'ammoniac que d'ions ammonium.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer les acides suivants du plus fort au plus faible, puis leurs bases conjuguées de la plus forte à la plus faible : acide fluorhydrique HF (pKa = 3,2), acide hypochloreux HClO (pKa = 7,5), acide benzoïque C₆H₅COOH (pKa = 4,2), ion ammonium NH₄⁺ (pKa = 9,2).",
              hint: "Plus le pKa est petit, plus l'acide est fort ; l'ordre des bases conjuguées est l'ordre inverse.",
              solution: [
                "Acides, du plus fort au plus faible (pKa croissants) : HF (3,2) > C₆H₅COOH (4,2) > HClO (7,5) > NH₄⁺ (9,2).",
                "Bases conjuguées, de la plus forte à la plus faible (pKa décroissants) : NH₃ (9,2) > ClO⁻ (7,5) > C₆H₅COO⁻ (4,2) > F⁻ (3,2).",
                "Plus un acide est fort, plus sa base conjuguée est faible : HF est le plus fort des acides, F⁻ la plus faible des bases.",
              ],
            },
            {
              level: 2,
              statement: "À 25 °C : 1. Calculer le pH d'une solution d'hydroxyde de sodium de concentration c = 5,0 × 10⁻³ mol·L⁻¹. 2. Calculer la concentration en ions HO⁻ d'une solution de pH = 4,5. 3. Une solution contient de l'acide éthanoïque et des ions éthanoate (pKa = 4,8) ; son pH vaut 5,5. Calculer le pourcentage de la forme basique dans le couple.",
              hint: "Utilisez Ke = [H₃O⁺][HO⁻] = 1,0 × 10⁻¹⁴ ; pour la question 3, calculez d'abord r = [A⁻]/[AH], puis le pourcentage r/(1 + r).",
              solution: [
                "1. Base forte : [HO⁻] = c = 5,0 × 10⁻³ mol·L⁻¹. pH = 14 + log(5,0 × 10⁻³) = 14 - 2,3 = 11,7.",
                "2. [H₃O⁺] = 10^(-4,5) = 3,2 × 10⁻⁵ mol·L⁻¹, donc [HO⁻] = Ke/[H₃O⁺] = 1,0 × 10⁻¹⁴/3,2 × 10⁻⁵ = 3,2 × 10⁻¹⁰ mol·L⁻¹.",
                "3. log([A⁻]/[AH]) = pH - pKa = 5,5 - 4,8 = 0,7, donc r = 10^(0,7) = 5,0.",
                "Pourcentage de la forme basique : [A⁻]/([AH] + [A⁻]) = r/(1 + r) = 5,0/6,0 ≈ 0,83, soit 83 %. La base prédomine, ce qui est cohérent avec pH > pKa.",
              ],
            },
            {
              level: 3,
              statement: "Le bleu de bromothymol (BBT) est un indicateur coloré : sa forme acide HIn est jaune, sa forme basique In⁻ est bleue, et l'on prend pKa(HIn/In⁻) = 7,1. 1. Représenter le diagramme de prédominance du couple. 2. On admet qu'une teinte est perçue seule lorsque la concentration de la forme correspondante est au moins 10 fois celle de l'autre. Déterminer la zone de virage. 3. Quelle est la couleur du BBT dans une eau de pH 8,5 ? dans un jus de citron de pH 2,5 ? dans une solution de pH 7,1 ? 4. Peut-on utiliser le BBT pour repérer l'équivalence du titrage de l'acide éthanoïque par la soude, dont le pH à l'équivalence vaut 8,7 ? Justifier.",
              hint: "Utilisez pH = pKa + log([In⁻]/[HIn]) avec un rapport égal à 10 ou à 1/10.",
              solution: [
                "1. Axe de pH : HIn (jaune) prédomine pour pH < 7,1 ; In⁻ (bleu) prédomine pour pH > 7,1.",
                "2. Teinte bleue seule si [In⁻] ≥ 10 [HIn], soit pH ≥ pKa + 1 = 8,1. Teinte jaune seule si [HIn] ≥ 10 [In⁻], soit pH ≤ pKa - 1 = 6,1. Zone de virage estimée : de 6,1 à 8,1. Les tables indiquent 6,0 à 7,6, car l'œil ne perçoit pas les deux couleurs avec la même sensibilité.",
                "3. pH 8,5 : supérieur à 8,1, le BBT est bleu. pH 2,5 : inférieur à 6,1, il est jaune. pH 7,1 : [HIn] = [In⁻], le mélange de jaune et de bleu donne une teinte verte, dite teinte sensible.",
                "4. Le pH à l'équivalence, 8,7, n'est pas compris dans la zone de virage du BBT : le changement de couleur se produirait avant l'équivalence. Le BBT ne convient pas ; on choisit plutôt la phénolphtaléine (zone de virage 8,2 à 10,0).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque situation à ce qu'elle implique.",
            pairs: [
              { left: "pH < pKa", right: "La forme acide AH prédomine" },
              { left: "pH = pKa", right: "[AH] = [A⁻]" },
              { left: "pH > pKa + 1", right: "A⁻ représente plus de 90 % du couple" },
              { left: "Ka grand, pKa petit", right: "Acide relativement fort, base conjuguée faible" },
              { left: "Produit ionique de l'eau Ke", right: "[H₃O⁺] × [HO⁻] = 1,0 × 10⁻¹⁴ à 25 °C" },
              { left: "Solution tampon", right: "pH peu sensible aux ajouts modérés d'acide, de base ou d'eau" },
            ],
          },
          quiz: [
            {
              q: "Parmi ces acides, lequel est le plus fort ?",
              options: ["NH₄⁺ (pKa = 9,2)", "CH₃COOH (pKa = 4,8)", "HCOOH (pKa = 3,8)", "HClO (pKa = 7,5)"],
              answer: 2,
              why: "L'acide le plus fort est celui qui a le plus petit pKa.",
            },
            {
              q: "Le pH d'une solution d'hydroxyde de sodium à 1,0 × 10⁻³ mol·L⁻¹ vaut, à 25 °C :",
              options: ["3,0", "11,0", "7,0", "13,0"],
              answer: 1,
              why: "Base forte : pH = 14 + log(1,0 × 10⁻³) = 14 - 3 = 11,0.",
            },
            {
              q: "Pour le couple CH₃COOH/CH₃COO⁻ (pKa = 4,8), l'espèce prédominante à pH = 3,0 est :",
              options: ["CH₃COO⁻", "les deux à égalité", "aucune des deux", "CH₃COOH"],
              answer: 3,
              why: "pH < pKa : c'est la forme acide qui prédomine.",
            },
            {
              q: "Si pH = pKa, alors :",
              options: ["[AH] = [A⁻]", "[AH] = 10 [A⁻]", "[A⁻] = 0", "[AH] = 0"],
              answer: 0,
              why: "pH = pKa + log([A⁻]/[AH]) impose log([A⁻]/[AH]) = 0, donc [A⁻] = [AH].",
            },
            {
              q: "Une solution tampon :",
              options: ["a toujours un pH égal à 7", "est un acide fort très dilué", "varie peu de pH lors d'ajouts modérés", "contient uniquement un acide faible en solution concentrée"],
              answer: 2,
              why: "Mélange d'un acide faible et de sa base conjuguée, elle résiste aux variations de pH lors d'ajouts modérés d'acide, de base ou d'eau.",
            },
          ],
          trap: "Croire qu'un acide de pKa élevé est fort : c'est l'inverse, plus le pKa est petit, plus l'acide est fort. Autre erreur fréquente : inverser le rapport dans pH = pKa + log([A⁻]/[AH]), où la base est au numérateur.",
          method: "Dessinez le diagramme de prédominance (un axe de pH avec le pKa marqué, AH à gauche, A⁻ à droite) avant de répondre : il suffit ensuite de placer le pH de la solution sur l'axe pour lire l'espèce prédominante.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'piles',
          title: 'Les piles : une transformation spontanée',
          minutes: 35,
          objectives: [
            "Modéliser et schématiser le fonctionnement d'une pile à partir de deux demi-piles, en précisant le sens du courant et le déplacement des porteurs de charge.",
            "Relier le fonctionnement spontané d'une pile à l'évolution de son quotient de réaction vers la constante d'équilibre.",
            "Déterminer la capacité électrique d'une pile, Q = I × Δt = n(e⁻) × F, et la relier aux quantités de matière.",
          ],
          course: [
            {
              heading: "Un transfert spontané d'électrons",
              paragraphs: [
                "Si l'on plonge une lame de zinc dans une solution bleue de sulfate de cuivre(II), du cuivre rouge se dépose sur le zinc et la solution se décolore. La réaction Cu²⁺ + Zn(s) → Cu(s) + Zn²⁺ est une réaction d'oxydoréduction : un transfert d'électrons du réducteur Zn vers l'oxydant Cu²⁺. Sa constante d'équilibre, de l'ordre de 10³⁷ à 25 °C, est immense : au départ Qr est très inférieur à K, et le système évolue spontanément dans le sens direct jusqu'à la disparition quasi totale des ions Cu²⁺.",
                "Dans cette expérience, les électrons passent directement du zinc aux ions cuivre, au contact du métal : l'énergie libérée est perdue sous forme de chaleur. Une pile sépare l'oxydant et le réducteur pour obliger les électrons à transiter par un circuit extérieur : le transfert spontané devient un courant électrique utilisable.",
              ],
              box: { label: "Repère", text: "Oxydant : espèce qui capte des électrons. Réducteur : espèce qui en cède. Un couple Ox/Red est relié par la demi-équation Ox + n e⁻ = Red, par exemple Cu²⁺ + 2 e⁻ = Cu(s)." },
            },
            {
              heading: "Constitution et fonctionnement d'une pile",
              paragraphs: [
                "Une pile est formée de deux demi-piles, chacune constituée d'une électrode conductrice en contact avec les deux espèces d'un couple Ox/Red, le plus souvent un métal plongeant dans une solution contenant son cation. Les deux solutions sont reliées par un pont salin, une solution ionique gélifiée qui assure le passage du courant et la neutralité électrique des solutions. Exemple, la pile Daniell, mise au point par John Frederic Daniell en 1836 : Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s).",
                "À l'électrode de zinc a lieu une oxydation : Zn(s) → Zn²⁺(aq) + 2 e⁻. Cette électrode, siège de l'oxydation, est l'anode ; elle libère des électrons dans le circuit et constitue le pôle négatif. À l'électrode de cuivre a lieu une réduction : Cu²⁺(aq) + 2 e⁻ → Cu(s). Siège de la réduction, elle est la cathode et constitue le pôle positif. Équation de fonctionnement : Cu²⁺ + Zn(s) → Cu(s) + Zn²⁺.",
                "Dans le circuit extérieur, les électrons vont de l'anode (pôle -) vers la cathode (pôle +), et le courant circule en sens inverse, du pôle + vers le pôle -. Dans les solutions et le pont salin, le courant est porté par les ions : les cations se déplacent vers la cathode, les anions vers l'anode. La tension à vide entre les pôles, mesurée avec un voltmètre, est la force électromotrice E de la pile, environ 1,1 V pour la pile Daniell.",
              ],
              box: { label: "Règle", text: "Pile : anode = oxydation = pôle - ; cathode = réduction = pôle +. Électrons de l'anode vers la cathode par le circuit extérieur ; courant en sens inverse ; ions en mouvement dans les solutions et le pont salin." },
            },
            {
              heading: "Évolution, usure et capacité d'une pile",
              paragraphs: [
                "Une pile en fonctionnement est un système hors équilibre qui évolue spontanément : pour la pile Daniell, son quotient de réaction Qr = [Zn²⁺]/[Cu²⁺] augmente au fil du temps vers K. Lorsque Qr atteint K, le système est à l'équilibre et plus aucun courant ne circule : la pile est usée. Le sens d'évolution donné par le critère (Qr < K, sens direct) indique donc quelle espèce est oxydée et quelle espèce est réduite, c'est-à-dire la polarité de la pile.",
                "La quantité d'électricité totale qu'une pile peut débiter, appelée capacité, est liée à la quantité d'électrons échangés : Q = n(e⁻) × F, où F = 9,65 × 10⁴ C·mol⁻¹ est la constante de Faraday, charge d'une mole d'électrons. Si la pile débite un courant d'intensité constante I pendant une durée Δt, Q = I × Δt. Les capacités des piles et batteries sont souvent données en mA·h : 1 mA·h = 3,6 C.",
                "Pour calculer la capacité maximale, on détermine le réactif limitant de l'équation de fonctionnement, puis on relie l'avancement maximal à n(e⁻) grâce aux demi-équations : pour la pile Daniell, deux électrons sont échangés par atome de zinc oxydé, donc n(e⁻) = 2 xmax.",
              ],
              box: { label: "Formule", text: "Q = I × Δt = n(e⁻) × F, avec F = 9,65 × 10⁴ C·mol⁻¹ et Δt en secondes. Pile usée : Qr = K. 1 mA·h = 3,6 C." },
            },
          ],
          keyPoints: [
            "Pile : deux demi-piles reliées par un pont salin ; transfert spontané d'électrons par le circuit extérieur.",
            "Dans une pile : anode = oxydation = pôle - ; cathode = réduction = pôle +.",
            "Électrons de l'anode vers la cathode à l'extérieur ; courant en sens inverse ; ions dans les solutions et le pont salin.",
            "La pile fonctionne tant que Qr < K ; elle est usée quand Qr = K.",
            "Q = I × Δt = n(e⁻) × F, avec F = 9,65 × 10⁴ C·mol⁻¹.",
          ],
          example: {
            statement: "Une pile Daniell débite un courant d'intensité constante I = 50 mA pendant Δt = 2,0 h. Calculer la masse de zinc consommée. Données : F = 9,65 × 10⁴ C·mol⁻¹ ; M(Zn) = 65,4 g·mol⁻¹.",
            solution: [
              "Quantité d'électricité : Q = I × Δt = 50 × 10⁻³ × 2,0 × 3 600 = 3,6 × 10² C.",
              "Quantité d'électrons échangés : n(e⁻) = Q/F = 3,6 × 10²/9,65 × 10⁴ = 3,73 × 10⁻³ mol.",
              "D'après Zn → Zn²⁺ + 2 e⁻, n(Zn) = n(e⁻)/2 = 1,87 × 10⁻³ mol.",
              "m(Zn) = n(Zn) × M(Zn) = 1,87 × 10⁻³ × 65,4 ≈ 0,12 g de zinc consommé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On réalise une pile avec une lame d'argent plongeant dans une solution de nitrate d'argent (Ag⁺) et une lame de cuivre plongeant dans une solution de sulfate de cuivre(II) (Cu²⁺), les deux solutions étant reliées par un pont salin. Un voltmètre indique que la lame d'argent est le pôle positif. 1. Écrire les demi-équations aux électrodes et nommer l'anode et la cathode. 2. Écrire l'équation de fonctionnement de la pile. 3. Indiquer le sens du courant et celui des électrons dans le circuit extérieur.",
              hint: "Au pôle + d'une pile, les électrons arrivent et sont consommés : il s'y produit une réduction.",
              solution: [
                "1. Pôle + (argent) : réduction Ag⁺ + e⁻ → Ag(s) ; c'est la cathode. Pôle - (cuivre) : oxydation Cu(s) → Cu²⁺ + 2 e⁻ ; c'est l'anode.",
                "2. Pour échanger le même nombre d'électrons, on multiplie la première demi-équation par 2 : 2 Ag⁺ + Cu(s) → 2 Ag(s) + Cu²⁺.",
                "3. Dans le circuit extérieur, les électrons vont de la lame de cuivre (pôle -) vers la lame d'argent (pôle +) ; le courant circule en sens inverse, de la lame d'argent vers la lame de cuivre.",
              ],
            },
            {
              level: 2,
              statement: "Une pile Daniell est constituée de deux demi-piles contenant chacune V = 100 mL de solution, avec [Cu²⁺]₀ = [Zn²⁺]₀ = 0,10 mol·L⁻¹, et de lames métalliques en large excès. Pour Cu²⁺ + Zn(s) = Cu(s) + Zn²⁺, K est de l'ordre de 10³⁷. Donnée : F = 9,65 × 10⁴ C·mol⁻¹. 1. Calculer Qr,i et justifier le sens d'évolution. 2. Déterminer l'avancement maximal et la capacité Qmax de la pile, en coulombs puis en mA·h. 3. Quelle serait sa durée de fonctionnement si elle débitait un courant constant I = 20 mA ?",
              hint: "Les métaux sont en excès : le réactif limitant est l'ion Cu²⁺, et deux électrons sont échangés par ion Cu²⁺ réduit.",
              solution: [
                "1. Qr,i = [Zn²⁺]₀/[Cu²⁺]₀ = 0,10/0,10 = 1,0. Qr,i < K : le système évolue spontanément dans le sens direct, Cu²⁺ + Zn(s) → Cu(s) + Zn²⁺.",
                "2. n₀(Cu²⁺) = 0,10 × 0,100 = 1,0 × 10⁻² mol. Le zinc est en excès et K est immense : xmax = 1,0 × 10⁻² mol.",
                "n(e⁻) = 2 xmax = 2,0 × 10⁻² mol, d'où Qmax = n(e⁻) × F = 2,0 × 10⁻² × 9,65 × 10⁴ = 1,93 × 10³ C.",
                "En mA·h : Qmax = 1,93 × 10³/3,6 ≈ 5,4 × 10² mA·h.",
                "3. Δt = Qmax/I = 1,93 × 10³/(20 × 10⁻³) = 9,65 × 10⁴ s, soit environ 27 h.",
              ],
            },
            {
              level: 3,
              statement: "On réalise une pile en associant une demi-pile formée d'une lame de fer (m = 1,0 g) plongeant dans 50,0 mL de solution de sulfate de fer(II) à [Fe²⁺]₀ = 0,20 mol·L⁻¹, et une demi-pile formée d'une lame de cuivre plongeant dans 50,0 mL de solution de sulfate de cuivre(II) à [Cu²⁺]₀ = 0,20 mol·L⁻¹. Un pont salin au nitrate de potassium (K⁺, NO₃⁻) relie les solutions. Pour Cu²⁺ + Fe(s) = Cu(s) + Fe²⁺, K est de l'ordre de 10²⁶ à 25 °C. Données : M(Fe) = 55,8 g·mol⁻¹ ; F = 9,65 × 10⁴ C·mol⁻¹. 1. Calculer Qr,i et prévoir le sens d'évolution spontanée. 2. En déduire les réactions aux électrodes, la polarité de la pile et le sens de déplacement des ions du pont salin. 3. Déterminer la capacité de la pile. 4. Montrer que, lorsque la pile est usée, les ions Cu²⁺ ont pratiquement disparu.",
              hint: "Le critère d'évolution désigne l'espèce oxydée (anode) et l'espèce réduite (cathode). Pour la question 4, écrivez Qr = K à l'état final.",
              solution: [
                "1. Qr,i = [Fe²⁺]₀/[Cu²⁺]₀ = 0,20/0,20 = 1,0. Qr,i < K : le système évolue spontanément dans le sens direct, Cu²⁺ + Fe(s) → Cu(s) + Fe²⁺.",
                "2. Le fer est oxydé : Fe(s) → Fe²⁺ + 2 e⁻ ; l'électrode de fer est l'anode, pôle -. Les ions cuivre sont réduits : Cu²⁺ + 2 e⁻ → Cu(s) ; l'électrode de cuivre est la cathode, pôle +.",
                "Dans le compartiment du fer, des cations Fe²⁺ apparaissent ; dans celui du cuivre, des cations Cu²⁺ disparaissent. Pour maintenir la neutralité, les anions NO₃⁻ du pont salin migrent vers la solution de fer (anode) et les cations K⁺ vers la solution de cuivre (cathode).",
                "3. n(Fe) = 1,0/55,8 = 1,8 × 10⁻² mol ; n(Cu²⁺) = 0,20 × 0,0500 = 1,0 × 10⁻² mol. Les deux réactifs ont pour coefficient 1 : Cu²⁺ est limitant et xmax = 1,0 × 10⁻² mol.",
                "n(e⁻) = 2 xmax = 2,0 × 10⁻² mol, d'où Qmax = n(e⁻) × F = 2,0 × 10⁻² × 9,65 × 10⁴ ≈ 1,9 × 10³ C (environ 5,4 × 10² mA·h).",
                "4. Pile usée : Qr = K. Alors [Fe²⁺] = 0,20 + 1,0 × 10⁻²/0,0500 = 0,40 mol·L⁻¹ et [Cu²⁺] = [Fe²⁺]/K ≈ 0,40/10²⁶ = 4 × 10⁻²⁷ mol·L⁻¹ : les ions Cu²⁺ ont pratiquement disparu, la transformation est totale.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les piles.",
            statements: [
              { text: "Dans une pile, l'anode est le pôle négatif.", true: true, why: "L'oxydation qui s'y produit libère des électrons, qui partent dans le circuit extérieur." },
              { text: "Les électrons traversent le pont salin.", true: false, why: "Dans le pont salin et les solutions, ce sont les ions qui se déplacent ; les électrons circulent seulement dans les électrodes et les fils." },
              { text: "Une pile usée est un système à l'équilibre : Qr = K.", true: true, why: "Le système n'évolue plus, aucun courant ne circule." },
              { text: "Dans le circuit extérieur, le courant va du pôle - vers le pôle +.", true: false, why: "Le courant va du pôle + vers le pôle - ; ce sont les électrons qui vont du pôle - vers le pôle +." },
              { text: "La cathode est le siège d'une réduction.", true: true, why: "C'est la définition de la cathode, valable pour une pile comme pour un électrolyseur." },
              { text: "Plus une pile débite longtemps, plus son quotient de réaction s'éloigne de K.", true: false, why: "Une transformation spontanée fait au contraire tendre Qr vers K." },
              { text: "La capacité d'une pile dépend de la quantité de réactif limitant.", true: true, why: "Q = n(e⁻) × F, et n(e⁻) est fixé par l'avancement maximal." },
            ],
          },
          quiz: [
            {
              q: "Dans une pile, la cathode est :",
              options: ["le pôle négatif, siège d'une oxydation", "le pôle positif, siège d'une réduction", "le pôle positif, siège d'une oxydation", "le pôle négatif, siège d'une réduction"],
              answer: 1,
              why: "Les électrons arrivent à la cathode, où ils sont consommés par une réduction : c'est le pôle +.",
            },
            {
              q: "La constante de Faraday représente :",
              options: ["la charge d'une mole d'électrons", "la tension d'une pile", "la capacité d'une pile", "le nombre d'électrons dans un coulomb"],
              answer: 0,
              why: "F = 9,65 × 10⁴ C·mol⁻¹ est la valeur absolue de la charge d'une mole d'électrons.",
            },
            {
              q: "Une pile débite 0,20 A pendant 1,0 h. La quantité d'électricité débitée vaut :",
              options: ["0,20 C", "12 C", "200 C", "720 C"],
              answer: 3,
              why: "Q = I × Δt = 0,20 × 3 600 = 720 C.",
            },
            {
              q: "Une pile cesse de débiter du courant lorsque :",
              options: ["Qr = 0", "Qr = 1", "Qr = K", "K = 0"],
              answer: 2,
              why: "Le système a atteint l'équilibre : il n'évolue plus, aucun électron n'est transféré.",
            },
            {
              q: "Dans le pont salin d'une pile en fonctionnement :",
              options: ["des électrons circulent vers la cathode", "les cations migrent vers la cathode", "aucune particule ne se déplace", "les anions migrent vers la cathode"],
              answer: 1,
              why: "Les cations compensent la disparition des cations réduits à la cathode ; les anions migrent vers l'anode.",
            },
          ],
          trap: "Faire circuler les électrons dans le pont salin ou dans les solutions, ou transposer les pôles de la pile à l'électrolyse : dans une pile, l'anode est le pôle -, alors que dans un électrolyseur elle est reliée au pôle + du générateur.",
          method: "Pour schématiser une pile, partez du sens d'évolution spontanée donné par le critère Qr < K : il désigne l'espèce oxydée (anode, pôle -) et l'espèce réduite (cathode, pôle +). Placez ensuite les électrons, puis le courant, puis les ions, dans cet ordre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'electrolyse',
          title: 'L\'électrolyse : forcer le sens d\'évolution',
          minutes: 30,
          objectives: [
            "Modéliser et schématiser le fonctionnement d'un électrolyseur : électrodes, sens du courant, réactions aux électrodes.",
            "Justifier qu'une électrolyse est une transformation forcée, qui fait évoluer un système dans le sens inverse de son évolution spontanée.",
            "Relier la quantité d'électricité Q = I × Δt aux quantités de matière formées ou consommées.",
            "Citer des applications de l'électrolyse : production industrielle, galvanoplastie, stockage d'énergie, recharge des accumulateurs.",
          ],
          course: [
            {
              heading: "Une transformation forcée",
              paragraphs: [
                "Un système chimique évolue spontanément de façon que son quotient de réaction Qr tende vers K. Il est cependant possible de le faire évoluer dans l'autre sens, en lui apportant de l'énergie électrique grâce à un générateur : c'est une électrolyse, une transformation forcée. Par exemple, la réaction Cu²⁺ + Zn(s) → Cu(s) + Zn²⁺ est spontanée ; en imposant un courant dans le sens adéquat, on peut réaliser la réaction inverse, Cu(s) + Zn²⁺ → Cu²⁺ + Zn(s), et déposer du zinc.",
                "Dans un électrolyseur, deux électrodes plongent dans une solution ionique (ou un composé ionique fondu) et sont reliées à un générateur de tension continue. Le générateur impose le sens du courant, donc celui de la circulation des électrons : il prélève des électrons à une électrode et les envoie vers l'autre, à la manière d'une pompe.",
              ],
              box: { label: "Définition", text: "Électrolyse : transformation forcée par un générateur électrique, qui fait évoluer le système dans le sens inverse de son évolution spontanée ; Qr s'éloigne alors de K." },
            },
            {
              heading: "Les électrodes d'un électrolyseur",
              paragraphs: [
                "L'électrode reliée au pôle + du générateur perd des électrons, que le générateur prélève : elle est le siège d'une oxydation, c'est l'anode. L'électrode reliée au pôle - reçoit des électrons du générateur : elle est le siège d'une réduction, c'est la cathode. Les définitions restent celles de la pile (anode : oxydation ; cathode : réduction), mais les polarités sont inversées : dans un électrolyseur, l'anode est reliée au pôle +.",
                "Dans le circuit extérieur, le courant sort du pôle + du générateur, et les électrons circulent en sens inverse. Dans la solution, le courant est assuré par les ions : les cations se déplacent vers la cathode, les anions vers l'anode.",
                "Exemple : électrolyse d'une solution de chlorure de zinc. À la cathode (pôle -), réduction : Zn²⁺ + 2 e⁻ → Zn(s), un dépôt de zinc apparaît. À l'anode (pôle +), oxydation : 2 Cl⁻ → Cl₂(g) + 2 e⁻, du dichlore se dégage. Bilan : Zn²⁺ + 2 Cl⁻ → Zn(s) + Cl₂(g), l'inverse de la réaction spontanée entre le zinc et le dichlore.",
              ],
              box: { label: "Règle", text: "Électrolyseur : anode reliée au pôle + du générateur, siège de l'oxydation ; cathode reliée au pôle -, siège de la réduction. Cations vers la cathode, anions vers l'anode." },
            },
            {
              heading: "Bilan de matière d'une électrolyse",
              paragraphs: [
                "Comme pour une pile, la quantité d'électricité qui traverse l'électrolyseur vaut Q = I × Δt, et elle correspond à n(e⁻) = Q/F moles d'électrons échangés. Les demi-équations relient ensuite n(e⁻) aux quantités de matière formées. Pour un dépôt de cuivre, Cu²⁺ + 2 e⁻ → Cu(s), on a n(Cu) = n(e⁻)/2.",
                "Pour un gaz, on utilise le volume molaire : V = n × Vm, avec Vm ≈ 24 L·mol⁻¹ à 20 °C sous une pression de 1,013 bar. Dans l'électrolyse de l'eau, 2 H₂O → 2 H₂(g) + O₂(g), il se forme deux fois plus de dihydrogène que de dioxygène en volume : il faut deux électrons par molécule de H₂ formée et quatre électrons par molécule de O₂.",
              ],
              box: { label: "Formule", text: "Q = I × Δt = n(e⁻) × F ; la quantité de produit se déduit de n(e⁻) par la demi-équation ; pour un gaz, V = n × Vm." },
            },
            {
              heading: "Des applications nombreuses",
              paragraphs: [
                "L'électrolyse est utilisée dans l'industrie pour produire des métaux (zinc, aluminium), pour purifier le cuivre (raffinage électrolytique) et pour fabriquer des espèces comme le dichlore ou l'hydroxyde de sodium. Elle sert à protéger ou décorer des objets par un dépôt métallique fin : c'est la galvanoplastie (chromage, argenture, dorure). Elle permet aussi de produire du dihydrogène par électrolyse de l'eau, ce qui stocke sous forme chimique de l'énergie électrique d'origine renouvelable, restituée ensuite dans une pile à combustible.",
                "Enfin, la recharge d'un accumulateur (batterie de téléphone, batterie au plomb d'une voiture) est une électrolyse : le chargeur force la réaction inverse de celle qui se produit lors de la décharge, et le système revient vers son état initial. Lors de la décharge, l'accumulateur fonctionne en pile ; lors de la charge, en électrolyseur. Pile et électrolyse sont donc les deux sens d'une même conversion entre énergie chimique et énergie électrique.",
              ],
              box: { label: "À retenir", text: "Pile : transformation spontanée, énergie chimique convertie en énergie électrique. Électrolyse : transformation forcée, énergie électrique convertie en énergie chimique. Un accumulateur fonctionne tour à tour dans les deux modes." },
            },
          ],
          keyPoints: [
            "Électrolyse : transformation forcée par un générateur, dans le sens inverse de l'évolution spontanée.",
            "Électrolyseur : anode reliée au pôle + (oxydation), cathode reliée au pôle - (réduction).",
            "Les cations migrent vers la cathode, les anions vers l'anode.",
            "Q = I × Δt = n(e⁻) × F, puis la demi-équation donne les quantités formées.",
            "Applications : production de métaux, galvanoplastie, production de dihydrogène, recharge des accumulateurs.",
          ],
          example: {
            statement: "On réalise le cuivrage d'un objet métallique en le plaçant comme électrode dans une solution de sulfate de cuivre(II). Un courant d'intensité I = 0,50 A circule pendant 30 min. 1. L'objet doit-il être relié au pôle + ou au pôle - du générateur ? 2. Calculer la masse de cuivre déposée. Données : F = 9,65 × 10⁴ C·mol⁻¹ ; M(Cu) = 63,5 g·mol⁻¹.",
            solution: [
              "1. Le cuivre se dépose par réduction : Cu²⁺ + 2 e⁻ → Cu(s). L'objet doit être la cathode, donc relié au pôle - du générateur.",
              "2. Q = I × Δt = 0,50 × 30 × 60 = 9,0 × 10² C.",
              "n(e⁻) = Q/F = 9,0 × 10²/9,65 × 10⁴ = 9,3 × 10⁻³ mol ; d'après la demi-équation, n(Cu) = n(e⁻)/2 = 4,7 × 10⁻³ mol.",
              "m(Cu) = n(Cu) × M(Cu) = 4,66 × 10⁻³ × 63,5 = 0,30 g de cuivre déposé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On électrolyse une solution d'iodure de potassium (K⁺, I⁻). Il se forme du diiode à une électrode et du dihydrogène à l'autre. Couples mis en jeu : I₂/I⁻ et H₂O/H₂, ce dernier ayant pour demi-équation de réduction 2 H₂O + 2 e⁻ → H₂(g) + 2 HO⁻. 1. Écrire la demi-équation de formation du diiode. S'agit-il d'une oxydation ou d'une réduction ? 2. À quelle électrode et à quel pôle du générateur se forme chaque produit ? 3. Écrire l'équation bilan de l'électrolyse.",
              hint: "Une espèce qui perd des électrons est oxydée ; l'oxydation a lieu à l'anode, reliée au pôle + dans un électrolyseur.",
              solution: [
                "1. 2 I⁻ → I₂ + 2 e⁻ : les ions iodure perdent des électrons, c'est une oxydation.",
                "2. Le diiode se forme à l'anode, reliée au pôle + du générateur. Le dihydrogène se forme par réduction à la cathode, reliée au pôle -.",
                "3. Les deux demi-équations échangent chacune 2 électrons ; on les additionne : 2 I⁻ + 2 H₂O → I₂ + H₂(g) + 2 HO⁻.",
              ],
            },
            {
              level: 2,
              statement: "On électrolyse de l'eau acidifiée pendant Δt = 20 min avec un courant I = 1,2 A. Demi-équations : à la cathode, 2 H⁺ + 2 e⁻ → H₂(g) ; à l'anode, 2 H₂O → O₂(g) + 4 H⁺ + 4 e⁻. Données : F = 9,65 × 10⁴ C·mol⁻¹ ; Vm = 24 L·mol⁻¹. 1. Calculer la quantité d'électrons échangés. 2. En déduire les volumes de dihydrogène et de dioxygène formés. 3. Vérifier la cohérence de ces volumes avec l'équation bilan 2 H₂O → 2 H₂(g) + O₂(g).",
              hint: "Δt doit être en secondes ; il faut 2 électrons par molécule de H₂ et 4 électrons par molécule de O₂.",
              solution: [
                "1. Q = I × Δt = 1,2 × 20 × 60 = 1 440 C ; n(e⁻) = Q/F = 1 440/9,65 × 10⁴ = 1,49 × 10⁻² mol.",
                "2. n(H₂) = n(e⁻)/2 = 7,46 × 10⁻³ mol, donc V(H₂) = 7,46 × 10⁻³ × 24 = 0,18 L, soit environ 180 mL.",
                "n(O₂) = n(e⁻)/4 = 3,73 × 10⁻³ mol, donc V(O₂) = 3,73 × 10⁻³ × 24 = 0,090 L, soit environ 90 mL.",
                "3. V(H₂) = 2 × V(O₂) : on retrouve les proportions de l'équation bilan, qui forme 2 moles de H₂ pour 1 mole de O₂.",
              ],
            },
            {
              level: 3,
              statement: "Le zinc est produit industriellement par électrolyse d'une solution acide de sulfate de zinc. Une cuve fonctionne sous I = 1,0 × 10⁵ A pendant 24 h. À la cathode, les ions Zn²⁺ sont réduits en zinc ; à l'anode, l'eau est oxydée en dioxygène selon 2 H₂O → O₂(g) + 4 H⁺ + 4 e⁻. Données : F = 9,65 × 10⁴ C·mol⁻¹ ; M(Zn) = 65,4 g·mol⁻¹ ; la réaction 2 Zn(s) + O₂(g) + 4 H⁺ → 2 Zn²⁺ + 2 H₂O est spontanée, de constante d'équilibre très grande. 1. Écrire la demi-équation à la cathode et l'équation bilan de l'électrolyse. Pourquoi parle-t-on de transformation forcée ? 2. Calculer la masse maximale de zinc produite en 24 h. 3. On obtient en réalité 2,5 t de zinc. Calculer le rendement de l'électrolyse (rapport de la masse obtenue à la masse maximale) et proposer une explication à l'écart.",
              hint: "Calculez Q = I × Δt avec Δt en secondes, puis n(e⁻) = Q/F et n(Zn) = n(e⁻)/2.",
              solution: [
                "1. Cathode : Zn²⁺ + 2 e⁻ → Zn(s). Pour équilibrer les électrons, on double cette demi-équation : 2 Zn²⁺ + 2 H₂O → 2 Zn(s) + O₂(g) + 4 H⁺.",
                "C'est exactement l'inverse de la réaction spontanée 2 Zn(s) + O₂(g) + 4 H⁺ → 2 Zn²⁺ + 2 H₂O : le système évolue dans le sens opposé à son évolution spontanée grâce à l'énergie fournie par le générateur. La transformation est forcée.",
                "2. Q = I × Δt = 1,0 × 10⁵ × 24 × 3 600 = 8,64 × 10⁹ C ; n(e⁻) = Q/F = 8,64 × 10⁹/9,65 × 10⁴ = 8,95 × 10⁴ mol.",
                "n(Zn) = n(e⁻)/2 = 4,48 × 10⁴ mol, d'où m(Zn) = 4,48 × 10⁴ × 65,4 = 2,93 × 10⁶ g, soit environ 2,9 t.",
                "3. Rendement : 2,5/2,93 ≈ 0,85, soit 85 %. Une partie des électrons sert à une autre réduction à la cathode, en particulier celle des ions H⁺ en dihydrogène, et ne produit donc pas de zinc.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul de la masse de métal déposée lors d'une électrolyse.",
            items: [
              "Convertir la durée de l'électrolyse en secondes",
              "Calculer la quantité d'électricité Q = I × Δt",
              "Calculer la quantité d'électrons n(e⁻) = Q/F",
              "Calculer n(métal) en divisant n(e⁻) par le nombre d'électrons de la demi-équation",
              "Calculer la masse m = n(métal) × M",
            ],
          },
          quiz: [
            {
              q: "Dans un électrolyseur, l'anode est :",
              options: ["reliée au pôle - et siège d'une réduction", "reliée au pôle - et siège d'une oxydation", "reliée au pôle + et siège d'une réduction", "reliée au pôle + et siège d'une oxydation"],
              answer: 3,
              why: "Le générateur prélève les électrons libérés par l'oxydation à l'anode, reliée à son pôle +.",
            },
            {
              q: "Une électrolyse est une transformation :",
              options: ["spontanée", "forcée", "nucléaire", "toujours totale"],
              answer: 1,
              why: "Elle fait évoluer le système dans le sens inverse de son évolution spontanée, grâce à un générateur.",
            },
            {
              q: "Pendant une électrolyse, le quotient de réaction Qr :",
              options: ["s'éloigne de K", "se rapproche de K", "reste égal à K", "est toujours nul"],
              answer: 0,
              why: "Le système est forcé à évoluer dans le sens opposé à son évolution spontanée : Qr s'éloigne de K.",
            },
            {
              q: "Lors de sa recharge, une batterie de téléphone fonctionne :",
              options: ["en pile", "comme un condensateur", "en électrolyseur", "sans transformation chimique"],
              answer: 2,
              why: "Le chargeur force la réaction inverse de la décharge : c'est une électrolyse.",
            },
            {
              q: "Une électrolyse de 965 s sous 2,0 A fait circuler :",
              options: ["1,0 × 10⁻² mol d'électrons", "4,8 × 10² mol d'électrons", "2,0 mol d'électrons", "2,0 × 10⁻² mol d'électrons"],
              answer: 3,
              why: "Q = 2,0 × 965 = 1 930 C et n(e⁻) = 1 930/9,65 × 10⁴ = 2,0 × 10⁻² mol.",
            },
          ],
          trap: "Reprendre les polarités de la pile : dans un électrolyseur, l'anode (oxydation) est reliée au pôle + du générateur et la cathode (réduction) au pôle -. Autre erreur fréquente : oublier de convertir la durée en secondes dans Q = I × Δt.",
          method: "Retenez les définitions qui ne changent jamais : « anode » et « oxydation » commencent par une voyelle, « cathode » et « réduction » par une consonne. Déduisez ensuite les polarités selon le dispositif, pile ou électrolyseur.",
        },
      ],
    },
  ],
}
