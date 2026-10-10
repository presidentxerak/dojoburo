import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-tle',
  chapters: [
    /* ==================================================================== */
    /* STRATÉGIES DE SYNTHÈSE ORGANIQUE                                       */
    /* ==================================================================== */
    {
      id: 'synthese-organique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'structure-des-molecules',
          title: "Structure des molécules et modifications de chaîne ou de groupe",
          minutes: 30,
          objectives: [
            "Identifier, dans une formule topologique ou semi-développée, le squelette carboné et les groupes caractéristiques, et en déduire la famille fonctionnelle.",
            "Nommer des espèces chimiques simples (alcools, aldéhydes, cétones, acides carboxyliques, esters, amines, amides, halogénoalcanes) à l'aide des règles de nomenclature.",
            "Distinguer des isomères de constitution et identifier le motif d'un polymère.",
            "Classer une transformation selon qu'elle modifie la chaîne carbonée ou le groupe caractéristique, et reconnaître une substitution, une addition ou une élimination.",
          ],
          course: [
            {
              heading: "Formule topologique et squelette carboné",
              paragraphs: [
                "En chimie organique, on représente souvent les molécules par leur formule topologique (dite aussi squelettique). La chaîne carbonée est dessinée en ligne brisée : chaque sommet et chaque extrémité de segment représente un atome de carbone, et les atomes d'hydrogène liés aux carbones ne sont pas dessinés (on les retrouve en sachant que chaque carbone forme quatre liaisons). Les autres atomes (O, N, Cl, Br...) et les hydrogènes qu'ils portent sont écrits explicitement. Une double liaison est représentée par deux traits parallèles.",
                "Le squelette carboné se décrit selon deux critères. Il est saturé s'il ne comporte que des liaisons simples entre atomes de carbone, insaturé s'il contient au moins une liaison multiple C=C ou C≡C. Il est linéaire, ramifié (au moins un carbone lié à trois ou quatre autres carbones) ou cyclique (des carbones forment un cycle).",
                "Exemple : le butan-2-ol, CH₃-CH(OH)-CH₂-CH₃, se dessine comme une ligne brisée à quatre sommets et extrémités, avec un trait vers OH sur le deuxième carbone. Sa chaîne est saturée et linéaire. Le cyclohexane, C₆H₁₂, se dessine comme un hexagone : sa chaîne est saturée et cyclique.",
              ],
              box: { label: "Définition", text: "Formule topologique : la chaîne carbonée est une ligne brisée ; chaque sommet ou extrémité est un atome de carbone ; les H portés par les carbones sont sous-entendus ; les autres atomes, et les H qu'ils portent, sont écrits." },
            },
            {
              heading: "Groupes caractéristiques et familles fonctionnelles",
              paragraphs: [
                "Un groupe caractéristique est un groupe d'atomes, comportant au moins un atome autre que C et H, qui donne des propriétés communes à toute une famille de composés. Familles déjà rencontrées : alcool (groupe hydroxyle -OH porté par un carbone tétragonal, c'est-à-dire lié à quatre atomes), aldéhyde (groupe carbonyle C=O en bout de chaîne, noté -CHO), cétone (groupe carbonyle C=O lié à deux carbones), acide carboxylique (groupe carboxyle -COOH).",
                "Familles ajoutées en terminale : ester (groupe -COO- placé entre deux chaînes carbonées), amine (atome d'azote lié à au moins un atome de carbone et à aucun groupe C=O, par exemple -NH₂), amide (atome d'azote lié au carbone d'un groupe carbonyle, -CO-N<), halogénoalcane (atome d'halogène F, Cl, Br ou I lié à un carbone tétragonal).",
                "La nomenclature suit une logique constante. On repère la chaîne la plus longue contenant le groupe caractéristique ; on la numérote pour que le carbone fonctionnel ait le plus petit numéro ; on ajoute un suffixe : -ol pour un alcool (propan-2-ol), -al pour un aldéhyde (éthanal), -one pour une cétone (propanone), acide ...-oïque pour un acide (acide éthanoïque), -amine pour une amine (éthanamine), -amide pour un amide (éthanamide). Un ester se nomme ...oate de ...yle, d'après l'acide et l'alcool dont il dérive (éthanoate d'éthyle). L'halogène et les ramifications sont des préfixes : 2-chloropropane, 2-méthylbutan-1-ol.",
              ],
              box: { label: "À retenir", text: "-OH : alcool (-ol) ; -CHO : aldéhyde (-al) ; C=O entre deux C : cétone (-one) ; -COOH : acide carboxylique (acide -oïque) ; -COO- : ester (-oate de -yle) ; N lié à des C : amine (-amine) ; -CO-N< : amide (-amide) ; C-X : halogénoalcane (préfixe fluoro, chloro, bromo, iodo)." },
            },
            {
              heading: "Isomères de constitution et polymères",
              paragraphs: [
                "Deux isomères de constitution ont la même formule brute mais des enchaînements d'atomes différents. L'isomérie peut porter sur le squelette (butan-1-ol et 2-méthylpropan-1-ol, tous deux C₄H₁₀O), sur la position du groupe caractéristique (propan-1-ol et propan-2-ol, C₃H₈O) ou sur la fonction (propanal et propanone, C₃H₆O : un aldéhyde et une cétone). Des isomères sont des espèces différentes : leurs températures d'ébullition, leurs solubilités et leur réactivité diffèrent.",
                "Un polymère est une macromolécule formée par la répétition, un très grand nombre de fois, d'un même motif. Dans une polymérisation par addition, des monomères possédant une double liaison C=C s'enchaînent : l'éthène CH₂=CH₂ donne le polyéthylène, de motif -CH₂-CH₂-. Le nombre moyen de motifs par chaîne est l'indice (ou degré) de polymérisation n, et la masse molaire moyenne du polymère vaut M = n × M(motif).",
                "Il existe des polymères naturels (cellulose et amidon, formés de motifs issus du glucose ; protéines ; ADN ; caoutchouc naturel) et des polymères synthétiques (polyéthylène des sacs et films, PVC des canalisations, polyesters des fibres textiles et des bouteilles, polyamides comme le nylon).",
              ],
              box: { label: "Formule", text: "Masse molaire moyenne d'un polymère : M = n × M(motif), où n est l'indice de polymérisation (nombre moyen de motifs par chaîne)." },
            },
            {
              heading: "Modifier une chaîne ou un groupe : les catégories de réactions",
              paragraphs: [
                "Une synthèse organique transforme une molécule de départ en molécule cible. On distingue deux types de modifications. La modification de chaîne allonge la chaîne carbonée (création de liaisons C-C, polymérisation) ou la raccourcit (craquage). La modification de groupe caractéristique change la famille de la molécule sans toucher au squelette : oxydation d'un alcool primaire en aldéhyde puis en acide carboxylique, estérification d'un acide carboxylique.",
                "Selon la façon dont les liaisons sont modifiées, on reconnaît trois catégories. Substitution : un atome ou un groupe d'atomes est remplacé par un autre, par exemple CH₃-CH₂-Br + HO⁻ → CH₃-CH₂-OH + Br⁻. Addition : des atomes se fixent sur les deux atomes d'une liaison multiple, qui devient simple, par exemple CH₂=CH₂ + H₂O → CH₃-CH₂-OH. Élimination : des atomes portés par deux carbones voisins sont retirés et une liaison multiple se forme, par exemple CH₃-CH₂-OH → CH₂=CH₂ + H₂O (déshydratation). Les réactions acide-base et d'oxydo-réduction sont deux autres catégories étudiées dans l'année.",
                "Pour identifier la catégorie, comparez réactifs et produits : si une liaison multiple disparaît, c'est une addition ; si une liaison multiple apparaît en libérant une petite molécule, c'est une élimination ; si le nombre de liaisons multiples ne change pas et qu'un groupe a remplacé un autre, c'est une substitution.",
              ],
              box: { label: "Règle", text: "Addition : une liaison multiple disparaît, deux réactifs donnent un seul produit. Élimination : une liaison multiple apparaît et une petite molécule (H₂O, HBr...) est libérée. Substitution : un atome ou groupe en remplace un autre." },
            },
          ],
          keyPoints: [
            "Formule topologique : sommets et extrémités = atomes de carbone ; H portés par les C sous-entendus ; autres atomes écrits.",
            "Chaîne saturée (liaisons simples) ou insaturée ; linéaire, ramifiée ou cyclique.",
            "Familles : alcool -ol, aldéhyde -al, cétone -one, acide -oïque, ester -oate de -yle, amine -amine, amide -amide, halogénoalcane (préfixe).",
            "Isomères de constitution : même formule brute, enchaînements différents (squelette, position ou fonction).",
            "Polymère : répétition d'un motif ; M = n × M(motif).",
            "Modification de chaîne (allongement, raccourcissement) ou de groupe caractéristique (changement de famille).",
            "Substitution : un groupe en remplace un autre ; addition : une liaison multiple disparaît ; élimination : une liaison multiple apparaît.",
          ],
          example: {
            statement: "On considère l'espèce de formule semi-développée CH₃-CH₂-CO-O-CH₃. a) Identifier le groupe caractéristique et la famille. b) Nommer l'espèce. c) Donner sa formule brute et proposer un isomère de constitution appartenant à la famille des acides carboxyliques.",
            solution: [
              "a) La molécule contient l'enchaînement -CO-O- placé entre deux chaînes carbonées : c'est le groupe ester. L'espèce appartient à la famille des esters.",
              "b) La partie liée au carbone du groupe C=O, CH₃-CH₂-CO-, compte 3 atomes de carbone : elle provient de l'acide propanoïque, d'où le terme « propanoate ». La partie liée à l'oxygène, -CH₃, compte 1 carbone : c'est le groupe méthyle.",
              "Le nom de l'espèce est donc propanoate de méthyle.",
              "c) On compte 4 atomes de carbone, 3 + 2 + 3 = 8 atomes d'hydrogène et 2 atomes d'oxygène : la formule brute est C₄H₈O₂.",
              "L'acide butanoïque CH₃-CH₂-CH₂-COOH contient 4 C, 3 + 2 + 2 + 1 = 8 H et 2 O : il a la même formule brute C₄H₈O₂ avec un enchaînement différent. C'est un isomère de constitution (isomérie de fonction).",
              "Réponse : ester ; propanoate de méthyle ; C₄H₈O₂ ; un isomère acide est l'acide butanoïque.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des espèces suivantes, indiquer la famille et le nom : a) CH₃-CH₂-CH₂-OH ; b) CH₃-CO-CH₂-CH₃ ; c) CH₃-CH₂-CHO ; d) CH₃-CH₂-NH₂ ; e) CH₃-CHCl-CH₃.",
              hint: "Repérez d'abord le groupe caractéristique (il donne le suffixe ou le préfixe), puis comptez les carbones de la chaîne principale et numérotez-la pour donner le plus petit numéro au carbone qui porte le groupe.",
              solution: [
                "a) Groupe -OH sur un carbone tétragonal en bout d'une chaîne de 3 carbones : alcool, propan-1-ol.",
                "b) Groupe C=O lié à deux carbones, chaîne de 4 carbones : cétone, butanone (le C=O est forcément en position 2, on peut écrire butan-2-one).",
                "c) Groupe -CHO en bout d'une chaîne de 3 carbones : aldéhyde, propanal.",
                "d) Azote lié à une chaîne de 2 carbones : amine, éthanamine.",
                "e) Atome de chlore sur le carbone central d'une chaîne saturée de 3 carbones : halogénoalcane, 2-chloropropane.",
                "Réponse : propan-1-ol (alcool), butanone (cétone), propanal (aldéhyde), éthanamine (amine), 2-chloropropane (halogénoalcane).",
              ],
            },
            {
              level: 2,
              statement: "Le polychlorure de vinyle (PVC) est obtenu par polymérisation par addition du chloroéthène CH₂=CHCl. a) Écrire le motif du PVC. b) Un échantillon de PVC a une masse molaire moyenne M = 87 500 g·mol⁻¹. Calculer son indice de polymérisation n. c) La polymérisation est-elle une modification de chaîne ou de groupe caractéristique ? Données : M(C) = 12,0 g·mol⁻¹ ; M(H) = 1,0 g·mol⁻¹ ; M(Cl) = 35,5 g·mol⁻¹.",
              hint: "La double liaison C=C s'ouvre et les monomères s'enchaînent : le motif contient les mêmes atomes que le monomère. Calculez la masse molaire du motif, puis utilisez M = n × M(motif).",
              solution: [
                "a) La double liaison du chloroéthène s'ouvre pour lier les monomères entre eux : le motif est -CH₂-CHCl-.",
                "b) M(motif) = 2 × 12,0 + 3 × 1,0 + 35,5 = 62,5 g·mol⁻¹.",
                "n = M ÷ M(motif) = 87 500 ÷ 62,5 = 1 400.",
                "c) La polymérisation crée des liaisons C-C entre monomères : la chaîne carbonée est considérablement allongée. C'est une modification de chaîne (il s'agit aussi d'une addition, puisque la double liaison disparaît).",
                "Réponse : motif -CH₂-CHCl- ; n = 1 400 ; modification de chaîne (allongement).",
              ],
            },
            {
              level: 3,
              statement: "Une synthèse de l'éthanoate d'éthyle comporte trois étapes. Étape 1 : CH₂=CH₂ + H₂O → CH₃-CH₂-OH. Étape 2 : oxydation d'une partie de l'éthanol en acide éthanoïque CH₃-COOH. Étape 3 : CH₃-COOH + CH₃-CH₂-OH ⇌ CH₃-COO-CH₂-CH₃ + H₂O. 1. Indiquer la catégorie de la réaction de l'étape 1 en justifiant. 2. Les étapes 2 et 3 modifient-elles la chaîne carbonée ou le groupe caractéristique ? 3. Donner la famille du produit de l'étape 3 et justifier son nom. 4. L'éthanoate d'éthyle et l'acide butanoïque CH₃-CH₂-CH₂-COOH sont-ils isomères ? Justifier.",
              hint: "Pour l'étape 1, regardez ce que devient la double liaison. Pour la question 4, établissez les deux formules brutes et comparez les enchaînements d'atomes.",
              solution: [
                "1. Dans l'étape 1, la double liaison C=C disparaît : un H et un groupe OH se fixent sur les deux carbones, et deux réactifs donnent un seul produit. C'est une addition (hydratation de l'éthène).",
                "2. Étape 2 : l'éthanol (famille des alcools) devient un acide carboxylique, la chaîne de 2 carbones est conservée : modification de groupe caractéristique. Étape 3 : l'acide devient un ester, sans création de liaison C-C : modification de groupe caractéristique (estérification).",
                "3. Le produit contient le groupe -COO- entre deux chaînes : c'est un ester. La partie CH₃-CO- (2 carbones) vient de l'acide éthanoïque, d'où « éthanoate » ; la partie -CH₂-CH₃ (2 carbones) est le groupe éthyle : éthanoate d'éthyle.",
                "4. Éthanoate d'éthyle : 4 C, 3 + 2 + 3 = 8 H, 2 O, soit C₄H₈O₂. Acide butanoïque : 4 C, 8 H, 2 O, soit C₄H₈O₂.",
                "Les formules brutes sont identiques et les enchaînements différents (un ester, un acide carboxylique) : ce sont des isomères de constitution (isomérie de fonction).",
                "Réponse : étape 1 = addition ; étapes 2 et 3 = modifications de groupe ; le produit est un ester ; les deux espèces sont isomères de fonction.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque groupe d'atomes à sa famille fonctionnelle.",
            pairs: [
              { left: "-OH porté par un carbone tétragonal", right: "Alcool" },
              { left: "-CHO en bout de chaîne", right: "Aldéhyde" },
              { left: "C=O lié à deux atomes de carbone", right: "Cétone" },
              { left: "-COOH", right: "Acide carboxylique" },
              { left: "-COO- entre deux chaînes carbonées", right: "Ester" },
              { left: "-CO-NH₂", right: "Amide" },
            ],
          },
          quiz: [
            {
              q: "À quelle famille appartient CH₃-CH₂-CO-CH₃ ?",
              options: ["Aldéhyde", "Ester", "Cétone", "Acide carboxylique"],
              answer: 2,
              why: "Le groupe carbonyle C=O est lié à deux atomes de carbone, et non placé en bout de chaîne : c'est une cétone (la butanone).",
            },
            {
              q: "Dans une formule topologique, que représente chaque sommet de la ligne brisée ?",
              options: ["Un atome de carbone", "Un atome d'hydrogène", "Une liaison double", "Un atome d'oxygène"],
              answer: 0,
              why: "Chaque sommet et chaque extrémité représente un atome de carbone ; les hydrogènes portés par les carbones ne sont pas dessinés.",
            },
            {
              q: "Le propan-1-ol et le propan-2-ol sont :",
              options: ["une seule et même molécule", "deux polymères", "des isomères de fonction", "des isomères de position"],
              answer: 3,
              why: "Même formule brute C₃H₈O, même famille (alcool), mais le groupe -OH n'est pas sur le même carbone : isomérie de position.",
            },
            {
              q: "La réaction CH₂=CH₂ + HBr → CH₃-CH₂Br est :",
              options: ["une substitution", "une addition", "une élimination", "une réaction acide-base"],
              answer: 1,
              why: "La double liaison disparaît et deux réactifs donnent un seul produit : H et Br se sont fixés sur les deux carbones, c'est une addition.",
            },
            {
              q: "Un polyéthylène de masse molaire moyenne 56 000 g·mol⁻¹ a pour motif -CH₂-CH₂- (28 g·mol⁻¹). Son indice de polymérisation vaut :",
              options: ["28", "560", "2 000", "1,57 × 10⁶"],
              answer: 2,
              why: "n = M ÷ M(motif) = 56 000 ÷ 28 = 2 000.",
            },
          ],
          trap: "Confondre aldéhyde et cétone (le C=O est en bout de chaîne dans un aldéhyde, entre deux carbones dans une cétone), ou confondre ester (-COO- entre deux chaînes) et acide carboxylique (-COOH).",
          method: "Pour nommer une molécule, suivez toujours le même ordre : repérer le groupe caractéristique (il donne le suffixe), choisir la chaîne la plus longue qui le contient (elle donne le radical), numéroter pour que le carbone fonctionnel ait le plus petit numéro, puis ajouter les ramifications en préfixe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'optimiser-une-synthese',
          title: "Optimiser une synthèse : vitesse, rendement, protection",
          minutes: 30,
          objectives: [
            "Identifier, dans un protocole, les paramètres qui augmentent la vitesse d'une synthèse : température, concentration, catalyseur.",
            "Proposer et justifier des modifications d'un protocole pour améliorer le rendement : excès d'un réactif, élimination d'un produit.",
            "Calculer le rendement d'une synthèse, y compris le rendement global d'une synthèse en plusieurs étapes.",
            "Expliquer le rôle d'une protection et d'une déprotection, et discuter de l'impact environnemental d'une synthèse.",
          ],
          course: [
            {
              heading: "Deux objectifs distincts : aller vite et produire beaucoup",
              paragraphs: [
                "Optimiser une synthèse, c'est chercher à obtenir le produit voulu plus rapidement, en plus grande quantité et avec moins de déchets. Il faut distinguer deux questions. La vitesse concerne la durée nécessaire pour atteindre l'état final ; le rendement concerne la quantité de produit obtenue une fois l'état final atteint. Un catalyseur, par exemple, rend la transformation plus rapide mais ne modifie pas l'état final : il ne change pas le rendement d'un équilibre.",
                "Pour accélérer une transformation, on agit sur les facteurs cinétiques. On augmente la température : le chauffage à reflux permet de chauffer longtemps sans perte de matière, car les vapeurs sont condensées par le réfrigérant et retombent dans le ballon. On augmente la concentration des réactifs. On ajoute un catalyseur, par exemple de l'acide sulfurique pour une estérification : il est régénéré à la fin de la réaction et n'apparaît pas dans l'équation.",
              ],
              box: { label: "Définition", text: "Le rendement η d'une synthèse est le rapport entre la quantité de produit obtenue et la quantité maximale que l'on obtiendrait si la transformation était totale : η = n(obtenu) ÷ n(max). On peut aussi utiliser les masses : η = m(obtenue) ÷ m(max)." },
            },
            {
              heading: "Améliorer le rendement d'une transformation non totale",
              paragraphs: [
                "Beaucoup de synthèses organiques conduisent à un état d'équilibre. C'est le cas de l'estérification : acide carboxylique + alcool ⇌ ester + eau. Avec un alcool primaire et un mélange initial équimolaire, la constante d'équilibre vaut environ 4 et l'avancement final atteint seulement les deux tiers de l'avancement maximal : le rendement plafonne vers 67 %, même avec un catalyseur et une durée très longue.",
                "Pour faire évoluer davantage le système dans le sens de formation de l'ester, deux leviers existent. Le premier consiste à introduire un réactif en excès (souvent le moins cher) : le quotient de réaction est plus petit, et le système évolue plus loin dans le sens direct. Le second consiste à éliminer un produit au fur et à mesure qu'il se forme : distiller l'ester s'il est l'espèce la plus volatile, ou retirer l'eau avec un appareil de Dean-Stark. Le quotient de réaction Qr reste alors inférieur à K et la réaction se poursuit.",
                "Exemple : en partant de 1,0 mol d'acide éthanoïque et 3,0 mol d'éthanol, avec K = 4, l'avancement final vérifie x² ÷ ((1,0 - x)(3,0 - x)) = 4, ce qui donne x ≈ 0,90 mol : le rendement passe de 67 % à environ 90 %.",
              ],
              box: { label: "Propriété", text: "Un excès de réactif ou l'élimination d'un produit au cours de la transformation maintient Qr < K : le système évolue dans le sens direct et le rendement augmente. Un catalyseur accélère la transformation sans modifier l'état final." },
            },
            {
              heading: "Protéger un groupe pour être sélectif",
              paragraphs: [
                "Quand une molécule possède plusieurs groupes caractéristiques susceptibles de réagir, une réaction peut transformer aussi le groupe que l'on voulait conserver. Une réaction est dite chimiosélective lorsqu'elle ne transforme qu'un seul des groupes caractéristiques présents.",
                "Si aucune réaction chimiosélective n'est disponible, on procède en trois temps : protection du groupe à préserver (on le transforme temporairement en un groupe qui ne réagit pas dans les conditions de l'étape suivante), réaction sur le groupe visé, puis déprotection (on régénère le groupe initial). Exemple : pour réduire le groupe ester d'une molécule qui porte aussi une cétone, on protège la cétone sous forme d'acétal par réaction avec un diol, on réduit l'ester, puis on hydrolyse l'acétal en milieu acide pour retrouver la cétone. En synthèse peptidique, on protège de même le groupe amine d'un acide aminé pour imposer l'ordre d'enchaînement.",
                "Ces étapes ont un coût : chacune a son propre rendement, et le rendement global d'une synthèse en plusieurs étapes est le produit des rendements de chaque étape. Trois étapes de rendement 80 % donnent un rendement global de 0,80 × 0,80 × 0,80 ≈ 0,51, soit 51 %.",
              ],
              box: { label: "Formule", text: "Rendement global d'une synthèse en k étapes : η(global) = η₁ × η₂ × ... × ηₖ. Chaque étape de protection ou de déprotection ajoutée diminue le rendement global." },
            },
            {
              heading: "Vers une chimie plus respectueuse de l'environnement",
              paragraphs: [
                "Optimiser une synthèse, c'est aussi réduire son impact environnemental. On compare les protocoles selon plusieurs critères : l'énergie consommée (chauffer moins longtemps ou à plus basse température, grâce à un catalyseur), la nature des solvants (préférer l'eau ou l'éthanol à des solvants toxiques), la toxicité des réactifs, la quantité de sous-produits formés et leur éventuelle valorisation, le nombre d'étapes.",
                "Ces critères rejoignent les principes de la chimie verte formulés à la fin des années 1990 par les chimistes américains Paul Anastas et John Warner : prévenir les déchets plutôt que les traiter, privilégier la catalyse, éviter autant que possible les étapes de protection, utiliser des matières premières renouvelables. Une synthèse plus courte, sans protection, peut ainsi être préférable à une synthèse longue, même si le rendement d'une de ses étapes est un peu plus faible.",
              ],
            },
          ],
          keyPoints: [
            "Vitesse et rendement sont deux questions différentes : un catalyseur accélère sans changer l'état final.",
            "Facteurs cinétiques : température (chauffage à reflux), concentration des réactifs, catalyseur.",
            "η = n(obtenu) ÷ n(max), n(max) étant calculé à partir du réactif limitant, transformation supposée totale.",
            "Équilibre : réactif en excès ou élimination d'un produit (distillation, Dean-Stark) maintient Qr < K et augmente le rendement.",
            "Protection, réaction, déprotection : nécessaire quand la réaction n'est pas chimiosélective.",
            "Rendement global = produit des rendements de chaque étape.",
            "Chimie verte : moins d'énergie, de solvants toxiques, de déchets et d'étapes.",
          ],
          example: {
            statement: "On mélange 0,20 mol d'acide éthanoïque et 0,20 mol de propan-1-ol avec quelques gouttes d'acide sulfurique, puis on chauffe à reflux. On obtient 13,3 g d'éthanoate de propyle (M = 102 g·mol⁻¹). a) Écrire l'équation de la réaction. b) Calculer le rendement. c) Proposer deux modifications du protocole pour augmenter le rendement.",
            solution: [
              "a) CH₃-COOH + CH₃-CH₂-CH₂-OH ⇌ CH₃-COO-CH₂-CH₂-CH₃ + H₂O.",
              "b) Les réactifs sont introduits dans les proportions stœchiométriques (1 pour 1) : si la transformation était totale, on obtiendrait n(max) = 0,20 mol d'ester.",
              "Quantité d'ester obtenue : n = m ÷ M = 13,3 ÷ 102 ≈ 0,130 mol.",
              "Rendement : η = 0,130 ÷ 0,20 ≈ 0,65, soit 65 %.",
              "c) On peut introduire l'un des réactifs en excès (par exemple le propan-1-ol), ou éliminer l'eau au fur et à mesure de sa formation avec un appareil de Dean-Stark : dans les deux cas, Qr reste inférieur à K et le système évolue davantage dans le sens de formation de l'ester.",
              "Remarque : l'acide sulfurique (catalyseur) et le chauffage à reflux accélèrent la transformation mais n'augmentent pas le rendement final.",
              "Réponse : η ≈ 65 % ; mettre un réactif en excès ou éliminer un produit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une synthèse de l'aspirine utilise 5,0 g d'acide salicylique (M = 138 g·mol⁻¹), réactif limitant, qui donne de l'aspirine (M = 180 g·mol⁻¹) mole à mole. Après purification et séchage, on obtient 4,9 g d'aspirine. Calculer le rendement de la synthèse.",
              hint: "Calculez la quantité de réactif limitant, déduisez-en la masse maximale d'aspirine (même quantité de matière), puis comparez avec la masse obtenue.",
              solution: [
                "Quantité d'acide salicylique : n = 5,0 ÷ 138 ≈ 3,62 × 10⁻² mol.",
                "La réaction se fait mole à mole : n(max) d'aspirine = 3,62 × 10⁻² mol, soit m(max) = 3,62 × 10⁻² × 180 ≈ 6,5 g.",
                "Rendement : η = m(obtenue) ÷ m(max) = 4,9 ÷ 6,52 ≈ 0,75.",
                "Réponse : le rendement est d'environ 75 %.",
              ],
            },
            {
              level: 2,
              statement: "Pour transformer un groupe d'une molécule polyfonctionnelle, un chimiste dispose de deux voies. Voie A : protection (rendement 90 %), réaction (80 %), déprotection (90 %). Voie B : une seule réaction chimiosélective de rendement 70 %. a) Calculer le rendement global de la voie A. b) Partant de 0,50 mol de réactif, calculer la quantité de produit obtenue par chaque voie. c) Quelle voie choisir ? Donner deux arguments.",
              hint: "Le rendement global est le produit des rendements de chaque étape. Pensez aussi au nombre d'étapes et aux déchets produits.",
              solution: [
                "a) η(A) = 0,90 × 0,80 × 0,90 = 0,648, soit environ 65 %.",
                "b) Voie A : 0,50 × 0,648 ≈ 0,32 mol. Voie B : 0,50 × 0,70 = 0,35 mol.",
                "c) La voie B donne davantage de produit (0,35 mol contre 0,32 mol).",
                "Elle comporte aussi une seule étape au lieu de trois : moins de réactifs de protection, moins de solvants, d'énergie et de déchets, ce qui va dans le sens de la chimie verte.",
                "Réponse : rendement global de A ≈ 65 % ; on choisit la voie B (meilleur rendement global et synthèse plus économe).",
              ],
            },
            {
              level: 3,
              statement: "On étudie la synthèse de l'éthanoate d'éthyle : CH₃-COOH + C₂H₅-OH ⇌ CH₃-COO-C₂H₅ + H₂O, de constante d'équilibre K = 4,0 (toutes les espèces sont dans le mélange, sans solvant). 1. Mélange initial : 1,0 mol d'acide et 1,0 mol d'éthanol. Montrer que l'avancement final vaut x = 2/3 mol et en déduire le rendement. 2. Mélange initial : 1,0 mol d'acide et 3,0 mol d'éthanol. Montrer que l'avancement final vérifie 3x² - 16x + 12 = 0, puis calculer x et le rendement. 3. Le premier mélange étant à l'équilibre, on y ajoute de l'éthanol. Expliquer, à l'aide du quotient de réaction, pourquoi de l'ester se forme à nouveau.",
              hint: "À l'équilibre, Qr = K avec Qr = [ester][eau] ÷ ([acide][alcool]) ; le volume se simplifie, on peut donc écrire Qr avec les quantités de matière. Pour l'équation du second degré, gardez la seule racine compatible avec x ≤ xmax.",
              solution: [
                "1. À l'équilibre : n(acide) = n(alcool) = 1,0 - x et n(ester) = n(eau) = x. Donc x² ÷ (1,0 - x)² = 4,0, soit x ÷ (1,0 - x) = 2 (on garde la racine positive car 0 < x < 1,0).",
                "x = 2 - 2x, d'où 3x = 2 et x = 2/3 ≈ 0,67 mol. L'avancement maximal vaut 1,0 mol : η = 0,67 ÷ 1,0 ≈ 67 %.",
                "2. À l'équilibre : n(acide) = 1,0 - x, n(alcool) = 3,0 - x, n(ester) = n(eau) = x. Donc x² = 4,0 (1,0 - x)(3,0 - x) = 4,0 (3,0 - 4,0x + x²) = 12 - 16x + 4x², soit 3x² - 16x + 12 = 0.",
                "Discriminant : Δ = 16² - 4 × 3 × 12 = 256 - 144 = 112 ; √112 ≈ 10,58. Racines : x₁ = (16 - 10,58) ÷ 6 ≈ 0,90 mol et x₂ = (16 + 10,58) ÷ 6 ≈ 4,43 mol.",
                "x₂ est supérieur à xmax = 1,0 mol (l'acide est limitant) : on le rejette. Donc x ≈ 0,90 mol et η ≈ 0,90 ÷ 1,0 = 90 %.",
                "3. Ajouter de l'éthanol augmente le dénominateur de Qr : Qr devient inférieur à K. Le système n'est plus à l'équilibre et évolue dans le sens direct, celui de la formation de l'ester, jusqu'à ce que Qr redevienne égal à K.",
                "Réponse : 67 % avec le mélange équimolaire, 90 % avec trois fois plus d'alcool ; l'excès d'un réactif déplace l'équilibre vers l'ester.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Optimiser une synthèse.",
            statements: [
              { text: "Un catalyseur augmente le rendement d'une estérification.", true: false, why: "Il accélère l'atteinte de l'équilibre mais ne modifie pas l'état final, donc pas le rendement." },
              { text: "Le chauffage à reflux permet de chauffer longtemps sans perdre de réactifs ni de produits.", true: true, why: "Les vapeurs sont condensées par le réfrigérant et retombent dans le ballon." },
              { text: "Introduire l'alcool en excès augmente le rendement en ester.", true: true, why: "Qr diminue, le système évolue davantage dans le sens direct." },
              { text: "Le rendement se calcule à partir de la quantité du réactif en excès.", true: false, why: "La quantité maximale de produit se calcule à partir du réactif limitant." },
              { text: "Retirer l'eau formée au cours d'une estérification déplace l'équilibre dans le sens direct.", true: true, why: "Le numérateur de Qr diminue : Qr reste inférieur à K et l'ester continue de se former." },
              { text: "Ajouter une étape de protection augmente le rendement global.", true: false, why: "Chaque étape ajoutée a un rendement inférieur à 1, qui se multiplie aux autres : le rendement global diminue." },
              { text: "Une réaction chimiosélective ne transforme qu'un seul des groupes caractéristiques présents.", true: true, why: "C'est la définition : elle rend inutile la protection des autres groupes." },
            ],
          },
          quiz: [
            {
              q: "Quel est l'effet d'un catalyseur sur une estérification ?",
              options: ["Il augmente la valeur de la constante d'équilibre K", "Il accélère la réaction sans modifier l'état final", "Il déplace l'équilibre vers la formation de l'ester", "Il consomme l'eau formée"],
              answer: 1,
              why: "Un catalyseur agit sur la vitesse uniquement : l'état d'équilibre, donc le rendement, reste le même.",
            },
            {
              q: "On obtient 0,12 mol de produit alors que la quantité maximale est 0,16 mol. Le rendement vaut :",
              options: ["13 %", "1,3 %", "0,75 %", "75 %"],
              answer: 3,
              why: "η = 0,12 ÷ 0,16 = 0,75, soit 75 %.",
            },
            {
              q: "Quel montage permet d'éliminer l'eau au fur et à mesure de sa formation ?",
              options: ["Un appareil de Dean-Stark", "Un chauffage à reflux", "Une filtration sous vide", "Une chromatographie sur couche mince"],
              answer: 0,
              why: "L'appareil de Dean-Stark recueille l'eau condensée hors du milieu réactionnel, ce qui maintient Qr < K.",
            },
            {
              q: "Trois étapes de rendements 90 %, 80 % et 50 % donnent un rendement global de :",
              options: ["220 %", "73 %", "36 %", "50 %"],
              answer: 2,
              why: "η = 0,90 × 0,80 × 0,50 = 0,36, soit 36 % : les rendements se multiplient.",
            },
            {
              q: "Pourquoi protège-t-on un groupe caractéristique au cours d'une synthèse ?",
              options: ["Pour accélérer la réaction", "Pour qu'il ne réagisse pas lors d'une étape", "Pour augmenter la valeur de la constante d'équilibre", "Pour éviter de chauffer"],
              answer: 1,
              why: "La protection rend temporairement ce groupe inerte pendant l'étape qui transforme un autre groupe ; on le régénère ensuite par déprotection.",
            },
          ],
          trap: "Croire qu'un catalyseur ou un chauffage plus long augmente le rendement d'une estérification : ils font atteindre l'équilibre plus vite mais ne le déplacent pas ; seuls l'excès d'un réactif ou l'élimination d'un produit augmentent le rendement.",
          method: "Devant une question « proposer une amélioration », demandez-vous d'abord si l'on cherche à gagner du temps (facteurs cinétiques) ou à obtenir plus de produit (déplacement d'équilibre), puis justifiez avec le bon outil : facteur cinétique d'un côté, comparaison de Qr et de K de l'autre.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉCRIRE ET EXPLIQUER UN MOUVEMENT                                      */
    /* ==================================================================== */
    {
      id: 'mouvement-newton',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-acceleration',
          title: "Vecteurs position, vitesse et accélération",
          minutes: 30,
          objectives: [
            "Définir les vecteurs position, vitesse et accélération d'un point et établir leurs coordonnées par dérivation dans un repère cartésien.",
            "Caractériser un mouvement rectiligne uniforme, rectiligne uniformément varié ou circulaire à partir des vecteurs vitesse et accélération.",
            "Citer et exploiter les coordonnées des vecteurs vitesse et accélération dans le repère de Frenet pour un mouvement circulaire.",
          ],
          course: [
            {
              heading: "Référentiel et vecteur position",
              paragraphs: [
                "Décrire un mouvement suppose de choisir un référentiel, c'est-à-dire un objet de référence muni d'un repère d'espace et d'une horloge : le référentiel terrestre pour une balle lancée dans un gymnase, le référentiel géocentrique pour un satellite, le référentiel héliocentrique pour une planète. Le système étudié est souvent modélisé par un point, son centre de masse G.",
                "Dans un repère orthonormé (O ; i⃗, j⃗, k⃗), la position du point M à la date t est repérée par le vecteur position OM⃗ = x(t) i⃗ + y(t) j⃗ + z(t) k⃗. Les fonctions x(t), y(t) et z(t) sont les équations horaires du mouvement ; l'ensemble des positions successives de M forme sa trajectoire.",
                "Un même mouvement peut être décrit très différemment selon le référentiel : la valve d'une roue de vélo décrit un cercle dans le référentiel du cadre du vélo, mais une courbe en arceaux (une cycloïde) dans le référentiel terrestre.",
              ],
              box: { label: "Définition", text: "Vecteur position : OM⃗(t) = x(t) i⃗ + y(t) j⃗ + z(t) k⃗. Les fonctions x(t), y(t), z(t) sont les équations horaires ; la trajectoire est l'ensemble des positions occupées par M au cours du temps." },
            },
            {
              heading: "Le vecteur vitesse",
              paragraphs: [
                "Le vecteur vitesse est la dérivée du vecteur position par rapport au temps : v⃗ = dOM⃗/dt. Ses coordonnées sont vx = dx/dt, vy = dy/dt et vz = dz/dt. Il est tangent à la trajectoire, orienté dans le sens du mouvement, et sa norme v = √(vx² + vy² + vz²) s'exprime en m·s⁻¹.",
                "Sur une chronophotographie ou un pointage vidéo, on approche la vitesse au point Mᵢ par v⃗ᵢ ≈ MᵢMᵢ₊₁⃗ ÷ Δt, où Δt est la durée entre deux images : plus Δt est petit, meilleure est l'approximation. Avec des équations horaires, on dérive : si x(t) = 3t² + 2t (x en m, t en s), alors vx(t) = 6t + 2 ; à t = 2 s, vx = 14 m·s⁻¹.",
              ],
              box: { label: "Formule", text: "v⃗ = dOM⃗/dt ; vx = dx/dt, vy = dy/dt, vz = dz/dt ; v = √(vx² + vy² + vz²) en m·s⁻¹. Le vecteur vitesse est tangent à la trajectoire et orienté dans le sens du mouvement." },
            },
            {
              heading: "Le vecteur accélération",
              paragraphs: [
                "Le vecteur accélération mesure la variation du vecteur vitesse : a⃗ = dv⃗/dt, de coordonnées ax = dvx/dt, ay = dvy/dt, az = dvz/dt, en m·s⁻². Il est non nul dès que le vecteur vitesse change, que ce soit en norme (on accélère ou on freine) ou en direction (on tourne). Dans l'exemple précédent, ax = d(6t + 2)/dt = 6 m·s⁻² : l'accélération est constante.",
                "On classe les mouvements ainsi. Rectiligne uniforme : v⃗ constant, donc a⃗ = 0⃗. Rectiligne uniformément varié : trajectoire droite et a⃗ constant, colinéaire à v⃗ ; le mouvement est accéléré si a⃗ et v⃗ sont de même sens, ralenti s'ils sont de sens contraires. Selon un axe Ox, un tel mouvement vérifie vx(t) = ax t + v₀ et x(t) = ½ ax t² + v₀ t + x₀.",
              ],
              box: { label: "À retenir", text: "a⃗ = dv⃗/dt, en m·s⁻². Mouvement rectiligne uniforme : a⃗ = 0⃗. Accéléré : a⃗ et v⃗ dans le même sens ; ralenti : sens contraires. Un mouvement de vitesse constante en norme a une accélération non nulle s'il n'est pas rectiligne." },
            },
            {
              heading: "Le mouvement circulaire et le repère de Frenet",
              paragraphs: [
                "Pour un mouvement circulaire de rayon R, on utilise le repère de Frenet, lié au point mobile M : le vecteur unitaire t⃗ est tangent à la trajectoire et orienté dans le sens du mouvement ; le vecteur unitaire n⃗ lui est perpendiculaire et dirigé vers le centre du cercle. Dans ce repère, v⃗ = v t⃗ et l'accélération s'écrit a⃗ = (dv/dt) t⃗ + (v²/R) n⃗.",
                "Si le mouvement est circulaire uniforme (v constante), dv/dt = 0 : l'accélération est uniquement normale, dirigée vers le centre (elle est dite centripète), de norme a = v²/R. Exemple : une voiture qui parcourt un rond-point de rayon 20 m à 36 km·h⁻¹, soit 10 m·s⁻¹, a une accélération a = 10² ÷ 20 = 5 m·s⁻², alors que la valeur de sa vitesse ne change pas. Si le mouvement circulaire est accéléré ou ralenti, la composante tangentielle dv/dt s'ajoute.",
              ],
              box: { label: "Formule", text: "Repère de Frenet, mouvement circulaire de rayon R : v⃗ = v t⃗ et a⃗ = (dv/dt) t⃗ + (v²/R) n⃗. Mouvement circulaire uniforme : a⃗ = (v²/R) n⃗, centripète, de norme v²/R." },
            },
          ],
          keyPoints: [
            "Toujours préciser le référentiel ; le système est modélisé par son centre de masse.",
            "OM⃗ = x i⃗ + y j⃗ + z k⃗ ; v⃗ = dOM⃗/dt, tangent à la trajectoire ; a⃗ = dv⃗/dt.",
            "Approximation expérimentale : v⃗ᵢ ≈ MᵢMᵢ₊₁⃗ ÷ Δt.",
            "Rectiligne uniforme : a⃗ = 0⃗ ; rectiligne uniformément varié : a⃗ constant et colinéaire à v⃗.",
            "Frenet : a⃗ = (dv/dt) t⃗ + (v²/R) n⃗ ; circulaire uniforme : a = v²/R, dirigée vers le centre.",
          ],
          example: {
            statement: "Un mobile se déplace dans un plan ; ses équations horaires sont x(t) = 2,0 t et y(t) = -5,0 t² + 4,0 t (x et y en m, t en s). a) Déterminer les coordonnées du vecteur vitesse et du vecteur accélération. b) Calculer la norme de la vitesse à t = 0,40 s. c) Le mouvement est-il uniforme ? Est-il rectiligne ?",
            solution: [
              "a) On dérive les équations horaires : vx = dx/dt = 2,0 m·s⁻¹ et vy = dy/dt = -10 t + 4,0 (en m·s⁻¹).",
              "On dérive à nouveau : ax = 0 et ay = -10 m·s⁻². Le vecteur accélération est constant, dirigé selon -j⃗, de norme 10 m·s⁻².",
              "b) À t = 0,40 s : vx = 2,0 m·s⁻¹ et vy = -10 × 0,40 + 4,0 = 0. Donc v = √(2,0² + 0²) = 2,0 m·s⁻¹.",
              "c) À t = 0, v = √(2,0² + 4,0²) ≈ 4,5 m·s⁻¹ : la norme de la vitesse varie, le mouvement n'est pas uniforme.",
              "En éliminant le temps (t = x ÷ 2,0), on obtient y = -5,0 (x ÷ 2,0)² + 4,0 (x ÷ 2,0) = -1,25 x² + 2,0 x : la trajectoire est une parabole, le mouvement n'est pas rectiligne.",
              "Réponse : v⃗ (2,0 ; -10t + 4,0) et a⃗ (0 ; -10) ; v = 2,0 m·s⁻¹ à t = 0,40 s ; mouvement parabolique et non uniforme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Au démarrage, un train se déplace en ligne droite ; pendant les 100 premières secondes, sa position est x(t) = 0,25 t² (x en m, t en s). a) Exprimer vx(t) et ax(t). b) Calculer la vitesse à t = 100 s en m·s⁻¹ puis en km·h⁻¹. c) Donner la nature du mouvement.",
              hint: "Dérivez deux fois x(t). Pour passer des m·s⁻¹ aux km·h⁻¹, multipliez par 3,6.",
              solution: [
                "a) vx(t) = dx/dt = 0,50 t (en m·s⁻¹) ; ax(t) = dvx/dt = 0,50 m·s⁻².",
                "b) vx(100) = 0,50 × 100 = 50 m·s⁻¹, soit 50 × 3,6 = 180 km·h⁻¹.",
                "c) La trajectoire est une droite et l'accélération est constante, de même sens que la vitesse : le mouvement est rectiligne uniformément accéléré.",
                "Réponse : vx = 0,50 t ; ax = 0,50 m·s⁻² ; 50 m·s⁻¹ = 180 km·h⁻¹ ; mouvement rectiligne uniformément accéléré.",
              ],
            },
            {
              level: 2,
              statement: "On filme un palet qui glisse en ligne droite sur un plan incliné. Le pointage donne les abscisses suivantes, avec Δt = 40 ms entre deux images : x₁ = 10,0 cm ; x₂ = 12,0 cm ; x₃ = 15,0 cm ; x₄ = 19,0 cm. a) Calculer les vitesses approchées v₁, v₂ et v₃ avec vᵢ ≈ (xᵢ₊₁ - xᵢ) ÷ Δt. b) Calculer les accélérations approchées a₁ ≈ (v₂ - v₁) ÷ Δt et a₂ ≈ (v₃ - v₂) ÷ Δt. c) Conclure sur la nature du mouvement.",
              hint: "Convertissez les distances en mètres et Δt en secondes (40 ms = 0,040 s) avant de calculer.",
              solution: [
                "a) v₁ ≈ (0,120 - 0,100) ÷ 0,040 = 0,020 ÷ 0,040 = 0,50 m·s⁻¹.",
                "v₂ ≈ (0,150 - 0,120) ÷ 0,040 = 0,75 m·s⁻¹ ; v₃ ≈ (0,190 - 0,150) ÷ 0,040 = 1,00 m·s⁻¹.",
                "b) a₁ ≈ (0,75 - 0,50) ÷ 0,040 ≈ 6,3 m·s⁻² ; a₂ ≈ (1,00 - 0,75) ÷ 0,040 ≈ 6,3 m·s⁻² (6,25 m·s⁻² dans les deux cas).",
                "c) La trajectoire est rectiligne, la vitesse augmente et l'accélération est constante : le mouvement est rectiligne uniformément accéléré.",
                "Réponse : v₁ = 0,50 m·s⁻¹, v₂ = 0,75 m·s⁻¹, v₃ = 1,00 m·s⁻¹ ; a ≈ 6,3 m·s⁻², constante ; mouvement rectiligne uniformément accéléré.",
              ],
            },
            {
              level: 3,
              statement: "Une nacelle de manège décrit un cercle de rayon R = 8,0 m. Phase 1 (démarrage, 0 ≤ t ≤ 10 s) : la norme de sa vitesse vaut v(t) = 0,50 t (v en m·s⁻¹, t en s). Phase 2 (t > 10 s) : la vitesse reste constante. 1. Exprimer les coordonnées du vecteur accélération dans le repère de Frenet pendant la phase 1, puis calculer la norme de l'accélération à t = 4,0 s. 2. Pendant la phase 2, déterminer la direction, le sens et la norme de l'accélération. 3. Calculer la durée d'un tour pendant la phase 2.",
              hint: "Dans le repère de Frenet, aₜ = dv/dt et aₙ = v²/R. La norme du vecteur accélération vaut √(aₜ² + aₙ²).",
              solution: [
                "1. Phase 1 : aₜ = dv/dt = 0,50 m·s⁻² et aₙ = v²/R = (0,50 t)² ÷ 8,0.",
                "À t = 4,0 s : v = 2,0 m·s⁻¹, aₜ = 0,50 m·s⁻² et aₙ = 2,0² ÷ 8,0 = 0,50 m·s⁻². Donc a = √(0,50² + 0,50²) ≈ 0,71 m·s⁻².",
                "2. Phase 2 : v = 0,50 × 10 = 5,0 m·s⁻¹ reste constante, donc aₜ = 0. L'accélération est normale, dirigée vers le centre du cercle (centripète), de norme aₙ = 5,0² ÷ 8,0 ≈ 3,1 m·s⁻².",
                "3. Un tour correspond à la distance 2πR parcourue à 5,0 m·s⁻¹ : T = 2π × 8,0 ÷ 5,0 ≈ 10 s.",
                "Réponse : a ≈ 0,71 m·s⁻² à t = 4,0 s ; en phase 2, accélération centripète de 3,1 m·s⁻² ; un tour dure environ 10 s.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vitesse et accélération.",
            statements: [
              { text: "Un objet qui tourne à vitesse constante en norme a une accélération nulle.", true: false, why: "La direction de v⃗ change : l'accélération est centripète, de norme v²/R." },
              { text: "Le vecteur vitesse est toujours tangent à la trajectoire.", true: true, why: "C'est une propriété de la dérivée du vecteur position." },
              { text: "Dans un mouvement rectiligne ralenti, a⃗ et v⃗ sont de sens contraires.", true: true, why: "L'accélération s'oppose au mouvement, la norme de la vitesse diminue." },
              { text: "L'accélération s'exprime en m·s⁻¹.", true: false, why: "C'est une variation de vitesse par unité de temps : m·s⁻²." },
              { text: "Dans le repère de Frenet, le vecteur n⃗ est dirigé vers le centre de la trajectoire circulaire.", true: true, why: "C'est la convention : n⃗ est normal à la trajectoire et orienté vers le centre." },
              { text: "Si x(t) = 4t + 1, l'accélération selon x vaut 4 m·s⁻².", true: false, why: "vx = 4 m·s⁻¹ est constante, donc ax = 0." },
              { text: "Un même mouvement peut être rectiligne dans un référentiel et curviligne dans un autre.", true: true, why: "La trajectoire dépend du référentiel, comme celle de la valve d'une roue de vélo." },
            ],
          },
          quiz: [
            {
              q: "Pour x(t) = 3t² - 2t (x en m, t en s), la vitesse vx à t = 1 s vaut :",
              options: ["4 m·s⁻¹", "1 m·s⁻¹", "6 m·s⁻¹", "-2 m·s⁻¹"],
              answer: 0,
              why: "vx = dx/dt = 6t - 2, donc vx(1) = 6 - 2 = 4 m·s⁻¹.",
            },
            {
              q: "Dans un mouvement circulaire uniforme, l'accélération est :",
              options: ["nulle", "tangente à la trajectoire, dans le sens du mouvement", "centripète, de norme v²/R", "centrifuge, de norme v²/R"],
              answer: 2,
              why: "dv/dt = 0, il ne reste que la composante normale (v²/R) n⃗, dirigée vers le centre.",
            },
            {
              q: "Quelle est l'unité de l'accélération ?",
              options: ["m·s⁻¹", "m²·s⁻¹", "m·s²", "m·s⁻²"],
              answer: 3,
              why: "a = dv/dt : des m·s⁻¹ divisés par des secondes donnent des m·s⁻².",
            },
            {
              q: "Une voiture roule à 20 m·s⁻¹, à vitesse constante, dans un virage circulaire de rayon 100 m. Son accélération vaut :",
              options: ["0,2 m·s⁻²", "4,0 m·s⁻²", "0 m·s⁻²", "2 000 m·s⁻²"],
              answer: 1,
              why: "a = v²/R = 20² ÷ 100 = 400 ÷ 100 = 4,0 m·s⁻², dirigée vers le centre du virage.",
            },
            {
              q: "Un mouvement est rectiligne uniforme lorsque :",
              options: ["le vecteur vitesse est constant", "la norme de la vitesse est constante", "l'accélération est constante et non nulle", "la trajectoire est un cercle"],
              answer: 0,
              why: "Il faut que la direction, le sens et la norme de v⃗ restent les mêmes ; une norme constante seule ne suffit pas.",
            },
          ],
          trap: "Croire qu'une vitesse de valeur constante implique une accélération nulle : dans un virage, la direction du vecteur vitesse change, donc l'accélération n'est pas nulle. Seul un vecteur vitesse constant (norme, direction et sens) donne a⃗ = 0⃗.",
          method: "Pour caractériser un mouvement, répondez à deux questions séparées : la forme de la trajectoire (droite, cercle, parabole) indique s'il est rectiligne ou curviligne ; l'évolution de la norme de v indique s'il est uniforme, accéléré ou ralenti. Vérifiez ensuite la cohérence avec le vecteur a⃗.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'deuxieme-loi-newton',
          title: "Deuxième loi de Newton et mouvement dans un champ uniforme",
          minutes: 35,
          objectives: [
            "Utiliser la deuxième loi de Newton dans un référentiel galiléen pour relier les forces appliquées à un système à l'accélération de son centre de masse.",
            "Établir et exploiter les équations horaires du mouvement d'un système dans un champ de pesanteur uniforme ou dans un champ électrique uniforme.",
            "Établir l'équation de la trajectoire et exploiter les aspects énergétiques du mouvement.",
          ],
          course: [
            {
              heading: "La deuxième loi de Newton",
              paragraphs: [
                "Un référentiel galiléen est un référentiel dans lequel le principe d'inertie est vérifié : un système soumis à des forces qui se compensent y est immobile ou en mouvement rectiligne uniforme. Le référentiel terrestre peut être considéré comme galiléen pour des mouvements de courte durée ; le référentiel géocentrique l'est pour l'étude des satellites de la Terre, le référentiel héliocentrique pour celle des planètes.",
                "Dans un référentiel galiléen, la somme des forces extérieures appliquées à un système de masse m constante est égale au produit de sa masse par l'accélération de son centre de masse : ΣF⃗ext = m a⃗G. Cette loi, publiée par Isaac Newton en 1687, relie la cause (les forces) à la variation du mouvement (l'accélération). Plus généralement, ΣF⃗ext = dp⃗/dt, où p⃗ = m v⃗ est la quantité de mouvement.",
                "Conséquence importante : les forces ne déterminent pas la vitesse, mais sa variation. Une force dirigée vers le bas n'empêche pas un objet de monter (une balle lancée vers le haut monte en ralentissant), elle fait varier sa vitesse vers le bas.",
              ],
              box: { label: "Loi", text: "Deuxième loi de Newton (référentiel galiléen, masse constante) : ΣF⃗ext = m a⃗G. Forces en newtons (N), masse en kilogrammes (kg), accélération en m·s⁻²." },
            },
            {
              heading: "Mouvement dans un champ de pesanteur uniforme",
              paragraphs: [
                "Un projectile de masse m est lancé depuis l'origine O avec une vitesse initiale v⃗₀ faisant un angle α avec l'horizontale ; le référentiel terrestre est supposé galiléen. On néglige les frottements de l'air et la poussée d'Archimède : la seule force est le poids P⃗ = m g⃗, on parle de chute libre. La deuxième loi de Newton donne m a⃗ = m g⃗, soit a⃗ = g⃗ : l'accélération ne dépend pas de la masse.",
                "Avec un axe Ox horizontal et un axe Oy vertical orienté vers le haut : ax = 0 et ay = -g. On cherche des primitives en utilisant les conditions initiales vx(0) = v₀ cos α et vy(0) = v₀ sin α : vx = v₀ cos α et vy = -g t + v₀ sin α. Une nouvelle intégration, avec x(0) = 0 et y(0) = 0, donne les équations horaires x(t) = v₀ cos α × t et y(t) = -½ g t² + v₀ sin α × t.",
                "En éliminant le temps (t = x ÷ (v₀ cos α)), on obtient l'équation de la trajectoire : y = -g x² ÷ (2 v₀² cos² α) + x tan α. C'est une parabole. Le mouvement horizontal est uniforme, le mouvement vertical est uniformément varié. Au sommet de la trajectoire, vy = 0 ; le point de retombée sur le sol horizontal vérifie y = 0 avec x > 0.",
              ],
              box: { label: "Formule", text: "Chute libre (Oy vers le haut, départ en O) : ax = 0, ay = -g ; vx = v₀ cos α, vy = -g t + v₀ sin α ; x = v₀ cos α × t, y = -½ g t² + v₀ sin α × t ; trajectoire parabolique." },
            },
            {
              heading: "Particule chargée dans un champ électrique uniforme",
              paragraphs: [
                "Entre deux plaques planes et parallèles distantes de d, soumises à une tension U, règne un champ électrique uniforme E⃗, perpendiculaire aux plaques, orienté de la plaque positive vers la plaque négative, de norme E = U ÷ d (en V·m⁻¹). Une particule de charge q y subit la force électrique F⃗ = q E⃗ : dans le sens de E⃗ si q > 0, en sens contraire si q < 0.",
                "Pour un électron, le poids (de l'ordre de 10⁻²⁹ N) est complètement négligeable devant la force électrique (de l'ordre de 10⁻¹⁵ N pour un champ de 10⁴ V·m⁻¹). La deuxième loi de Newton donne alors a⃗ = q E⃗ ÷ m : un vecteur constant, comme dans le champ de pesanteur, et la même méthode s'applique. Si la vitesse initiale est parallèle à E⃗, le mouvement est rectiligne uniformément varié : c'est le principe d'un accélérateur linéaire. Si elle est perpendiculaire à E⃗, la trajectoire est un arc de parabole : la particule est déviée.",
              ],
              box: { label: "Formule", text: "Champ entre deux plaques : E = U ÷ d. Force électrique : F⃗ = q E⃗. Poids négligé : a⃗ = q E⃗ ÷ m, vecteur constant." },
            },
            {
              heading: "Aspects énergétiques",
              paragraphs: [
                "Le théorème de l'énergie cinétique, vu en première, complète l'étude : entre deux points A et B, la variation d'énergie cinétique est égale à la somme des travaux des forces appliquées : ½ m vB² - ½ m vA² = ΣW(A→B). Pour une particule de charge q qui va de A à B dans un champ électrique, le travail de la force électrique vaut W = q (VA - VB) = q UAB.",
                "Lorsque seules des forces conservatives travaillent (le poids, la force électrique dans un champ uniforme), l'énergie mécanique Em = Ec + Ep se conserve. Dans le champ de pesanteur, Epp = m g y (axe vertical vers le haut) ; pour un projectile lancé du sol à la vitesse v₀, la conservation donne en tout point d'altitude y : v² = v₀² - 2 g y. Pour un électron accéléré depuis le repos sous une tension U, ½ m v² = e U.",
              ],
              box: { label: "À retenir", text: "Ec = ½ m v² ; Epp = m g y (y vers le haut) ; Em = Ec + Ep se conserve si seules des forces conservatives travaillent. Particule partant du repos, accélérée sous une tension U : ½ m v² = |q| U." },
            },
          ],
          keyPoints: [
            "Référentiel galiléen : le principe d'inertie y est vérifié (terrestre pour des mouvements courts, géocentrique, héliocentrique).",
            "Deuxième loi de Newton : ΣF⃗ext = m a⃗G.",
            "Chute libre : a⃗ = g⃗, indépendante de la masse ; mouvement horizontal uniforme, vertical uniformément varié ; trajectoire parabolique.",
            "Méthode : système, référentiel, forces, loi de Newton, projection, intégrations avec les conditions initiales.",
            "Champ électrique uniforme : E = U ÷ d ; F⃗ = q E⃗ ; a⃗ = q E⃗ ÷ m (poids négligé).",
            "Em = Ec + Ep se conserve si seules des forces conservatives travaillent.",
          ],
          example: {
            statement: "Un ballon est frappé depuis le sol (point O) avec une vitesse v₀ = 15 m·s⁻¹ faisant un angle α = 30° avec l'horizontale. On néglige les frottements ; g = 9,8 m·s⁻². a) Établir les équations horaires x(t) et y(t). b) Déterminer la date et l'altitude du sommet de la trajectoire. c) Déterminer la portée, c'est-à-dire la distance horizontale entre O et le point de retombée au sol.",
            solution: [
              "Système : le ballon, modélisé par son centre de masse ; référentiel terrestre supposé galiléen ; seule force : le poids P⃗ = m g⃗.",
              "Deuxième loi de Newton : m a⃗ = m g⃗, donc a⃗ = g⃗ ; avec Oy vers le haut : ax = 0 et ay = -g = -9,8 m·s⁻².",
              "a) Conditions initiales : vx(0) = v₀ cos 30° ≈ 13,0 m·s⁻¹ et vy(0) = v₀ sin 30° = 7,5 m·s⁻¹. En intégrant : vx = 13,0 et vy = -9,8 t + 7,5. En intégrant encore, avec x(0) = y(0) = 0 : x(t) = 13,0 t et y(t) = -4,9 t² + 7,5 t.",
              "b) Au sommet, vy = 0 : t = 7,5 ÷ 9,8 ≈ 0,77 s. Alors y = -4,9 × 0,765² + 7,5 × 0,765 ≈ 2,9 m.",
              "c) Retombée : y = 0, soit t (-4,9 t + 7,5) = 0. La solution t = 0 correspond au départ ; l'autre est t = 7,5 ÷ 4,9 ≈ 1,53 s. Alors x = 13,0 × 1,53 ≈ 19,9 m.",
              "Réponse : x(t) = 13,0 t et y(t) = -4,9 t² + 7,5 t ; sommet à t ≈ 0,77 s, à 2,9 m de hauteur ; portée d'environ 20 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un électron (masse m = 9,11 × 10⁻³¹ kg, charge -e avec e = 1,60 × 10⁻¹⁹ C) se trouve entre deux plaques parallèles distantes de d = 2,0 cm, soumises à une tension U = 400 V. a) Calculer la norme du champ électrique E. b) Calculer la norme de la force électrique F. c) En négligeant le poids, calculer la norme de l'accélération de l'électron. d) Justifier que le poids est négligeable (g = 9,8 N·kg⁻¹).",
              hint: "E = U ÷ d avec d en mètres ; F = e E ; la deuxième loi de Newton donne a = F ÷ m. Comparez ensuite F au poids m g.",
              solution: [
                "a) E = U ÷ d = 400 ÷ 0,020 = 2,0 × 10⁴ V·m⁻¹.",
                "b) F = e E = 1,60 × 10⁻¹⁹ × 2,0 × 10⁴ = 3,2 × 10⁻¹⁵ N.",
                "c) a = F ÷ m = 3,2 × 10⁻¹⁵ ÷ 9,11 × 10⁻³¹ ≈ 3,5 × 10¹⁵ m·s⁻².",
                "d) Poids : P = m g = 9,11 × 10⁻³¹ × 9,8 ≈ 8,9 × 10⁻³⁰ N, environ 10¹⁴ fois plus petit que F : il est bien négligeable.",
                "Réponse : E = 2,0 × 10⁴ V·m⁻¹ ; F = 3,2 × 10⁻¹⁵ N ; a ≈ 3,5 × 10¹⁵ m·s⁻² ; poids négligeable.",
              ],
            },
            {
              level: 2,
              statement: "Dans un canon à électrons, un électron (m = 9,11 × 10⁻³¹ kg, e = 1,60 × 10⁻¹⁹ C) part du repos et est accéléré entre deux plaques distantes de d = 5,0 cm, sous une tension U = 1,0 × 10³ V ; sa trajectoire est rectiligne, parallèle au champ. a) Calculer la vitesse de l'électron à la sortie à l'aide d'un bilan énergétique. b) Retrouver ce résultat avec la deuxième loi de Newton et les équations horaires. c) Comparer cette vitesse à celle de la lumière, c = 3,00 × 10⁸ m·s⁻¹.",
              hint: "a) Le travail de la force électrique vaut e U. b) Calculez a = e E ÷ m, puis utilisez x = ½ a t² et v = a t pour éliminer t : v² = 2 a d.",
              solution: [
                "a) Théorème de l'énergie cinétique : ½ m v² - 0 = e U, d'où v = √(2 e U ÷ m) = √(2 × 1,60 × 10⁻¹⁹ × 1,0 × 10³ ÷ 9,11 × 10⁻³¹) = √(3,51 × 10¹⁴) ≈ 1,87 × 10⁷ m·s⁻¹.",
                "b) E = U ÷ d = 1,0 × 10³ ÷ 0,050 = 2,0 × 10⁴ V·m⁻¹ ; a = e E ÷ m = 1,60 × 10⁻¹⁹ × 2,0 × 10⁴ ÷ 9,11 × 10⁻³¹ ≈ 3,51 × 10¹⁵ m·s⁻².",
                "Départ du repos : v = a t et x = ½ a t². En éliminant t : v² = 2 a x. À la sortie, x = d : v = √(2 × 3,51 × 10¹⁵ × 0,050) = √(3,51 × 10¹⁴) ≈ 1,87 × 10⁷ m·s⁻¹. On retrouve le même résultat.",
                "c) v ÷ c = 1,87 × 10⁷ ÷ 3,00 × 10⁸ ≈ 0,062 : environ 6 % de la vitesse de la lumière, la mécanique de Newton reste une bonne approximation.",
                "Réponse : v ≈ 1,9 × 10⁷ m·s⁻¹ par les deux méthodes, soit environ 6 % de c.",
              ],
            },
            {
              level: 3,
              statement: "Au lancer du poids, un athlète lâche le poids (masse 7,26 kg) à une hauteur h = 2,0 m au-dessus du sol, avec une vitesse v₀ = 13 m·s⁻¹ faisant un angle α = 40° avec l'horizontale. On néglige les frottements ; g = 9,8 m·s⁻². L'origine O est au sol, à la verticale du point de lâcher ; Oy est vertical vers le haut. 1. Établir les équations horaires x(t) et y(t). 2. En déduire l'équation de la trajectoire. 3. Calculer la hauteur maximale atteinte. 4. Le lancer dépasse-t-il la marque des 18 m ? 5. Par un raisonnement énergétique, calculer la vitesse du poids juste avant l'impact.",
              hint: "Attention à la condition initiale y(0) = h. Pour la question 4, résolvez y(x) = 0 (équation du second degré) en gardant la racine positive. Pour la question 5, écrivez la conservation de l'énergie mécanique entre le lâcher et le sol.",
              solution: [
                "1. Seule force : le poids ; la deuxième loi de Newton donne ax = 0, ay = -g. Avec vx(0) = v₀ cos 40° ≈ 9,96 m·s⁻¹ et vy(0) = v₀ sin 40° ≈ 8,36 m·s⁻¹, puis x(0) = 0 et y(0) = h : x(t) = 9,96 t et y(t) = -4,9 t² + 8,36 t + 2,0.",
                "2. t = x ÷ (v₀ cos α), d'où y = -g x² ÷ (2 v₀² cos² α) + x tan α + h. Numériquement : 2 v₀² cos² 40° ≈ 198 et tan 40° ≈ 0,839, donc y ≈ -0,0494 x² + 0,839 x + 2,0.",
                "3. Au sommet, vy = 0, donc t = 8,36 ÷ 9,8 ≈ 0,853 s et ymax = h + (v₀ sin α)² ÷ (2g) = 2,0 + 8,36² ÷ 19,6 ≈ 2,0 + 3,56 ≈ 5,6 m.",
                "4. y = 0 : -0,0494 x² + 0,839 x + 2,0 = 0. Δ = 0,839² + 4 × 0,0494 × 2,0 ≈ 0,704 + 0,395 = 1,099 ; √Δ ≈ 1,048. Racine positive : x = (0,839 + 1,048) ÷ (2 × 0,0494) ≈ 19,1 m. Le lancer dépasse donc la marque des 18 m.",
                "5. Conservation de l'énergie mécanique entre le lâcher (altitude h) et le sol (altitude 0) : ½ m v₀² + m g h = ½ m v², d'où v = √(v₀² + 2 g h) = √(169 + 39,2) = √208,2 ≈ 14,4 m·s⁻¹. La masse n'intervient pas.",
                "Réponse : x = 9,96 t, y = -4,9 t² + 8,36 t + 2,0 ; hauteur maximale ≈ 5,6 m ; portée ≈ 19,1 m (plus de 18 m) ; vitesse à l'impact ≈ 14 m·s⁻¹.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de résolution d'un problème de mécanique.",
            items: [
              "Définir le système et le référentiel, supposé galiléen",
              "Faire le bilan des forces extérieures appliquées au système",
              "Appliquer la deuxième loi de Newton : ΣF⃗ext = m a⃗",
              "Projeter sur les axes pour obtenir les coordonnées de a⃗",
              "Intégrer avec les conditions initiales pour obtenir v⃗(t)",
              "Intégrer à nouveau pour obtenir les équations horaires x(t) et y(t)",
              "Éliminer t pour obtenir l'équation de la trajectoire",
            ],
          },
          quiz: [
            {
              q: "Dans un référentiel galiléen, un système soumis à des forces qui se compensent est :",
              options: ["forcément immobile", "en mouvement circulaire uniforme autour d'un point fixe", "immobile ou en mouvement rectiligne uniforme", "en mouvement rectiligne uniformément accéléré"],
              answer: 2,
              why: "C'est le principe d'inertie : si ΣF⃗ = 0⃗, alors a⃗ = 0⃗ et le vecteur vitesse est constant (éventuellement nul).",
            },
            {
              q: "En chute libre, l'accélération d'une balle de 50 g comparée à celle d'une boule de 5 kg est :",
              options: ["identique", "100 fois plus grande", "100 fois plus petite", "nulle"],
              answer: 0,
              why: "La deuxième loi de Newton donne a⃗ = g⃗ : la masse se simplifie, l'accélération est la même pour tous les corps.",
            },
            {
              q: "Frottements négligés, la composante horizontale de la vitesse d'un projectile :",
              options: ["augmente", "diminue jusqu'au sommet", "reste constante", "s'annule au sommet"],
              answer: 2,
              why: "ax = 0, donc vx = v₀ cos α reste constante pendant tout le mouvement ; c'est vy qui s'annule au sommet.",
            },
            {
              q: "Deux plaques distantes de 5,0 cm sont soumises à une tension de 200 V. Le champ électrique entre elles vaut :",
              options: ["10 V·m⁻¹", "4,0 × 10³ V·m⁻¹", "40 V·m⁻¹", "1,0 × 10⁴ V·m⁻¹"],
              answer: 1,
              why: "E = U ÷ d = 200 ÷ 0,050 = 4,0 × 10³ V·m⁻¹ (la distance doit être en mètres).",
            },
            {
              q: "Un électron placé dans un champ électrique E⃗ subit une force :",
              options: ["dans le sens de E⃗", "de sens opposé à E⃗", "perpendiculaire à E⃗", "nulle, car sa masse est très faible"],
              answer: 1,
              why: "F⃗ = q E⃗ avec q = -e < 0 : la force est opposée au champ.",
            },
          ],
          trap: "Mal écrire les conditions initiales : vy(0) vaut v₀ sin α et non v₀, et le signe de g dépend de l'orientation de l'axe vertical (ay = -g si l'axe est orienté vers le haut). Une constante d'intégration oubliée fausse tout le reste.",
          method: "Faites systématiquement un schéma avec les axes, le vecteur v⃗₀, l'angle α et les forces, puis écrivez les conditions initiales en coordonnées avant toute intégration. Vérifiez à la fin que les unités et les ordres de grandeur sont cohérents.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gravitation-kepler',
          title: "Mouvement des satellites et des planètes, lois de Kepler",
          minutes: 30,
          objectives: [
            "Énoncer les trois lois de Kepler et les exploiter pour décrire le mouvement d'une planète ou d'un satellite.",
            "Démontrer que, dans l'approximation des trajectoires circulaires, le mouvement d'un satellite ou d'une planète est uniforme, et établir l'expression de sa vitesse et de sa période.",
            "Établir la troisième loi de Kepler dans le cas d'un mouvement circulaire et l'exploiter, notamment pour un satellite géostationnaire.",
          ],
          course: [
            {
              heading: "La loi de la gravitation universelle",
              paragraphs: [
                "Deux corps à répartition sphérique de masse, de masses mA et mB, dont les centres sont séparés d'une distance r, s'attirent mutuellement. La force exercée par A sur B est dirigée de B vers A et a pour norme F = G mA mB ÷ r², où G = 6,67 × 10⁻¹¹ N·m²·kg⁻² est la constante de gravitation universelle. Cette loi, publiée par Newton en 1687, explique à la fois la chute des corps sur Terre et le mouvement des astres.",
                "Pour un satellite de masse m en orbite autour de la Terre (masse MT, rayon RT) à l'altitude h, la distance au centre de la Terre vaut r = RT + h. Vectoriellement : F⃗ = (G MT m ÷ r²) n⃗, où n⃗ est le vecteur unitaire dirigé du satellite vers le centre de la Terre.",
              ],
              box: { label: "Formule", text: "F = G mA mB ÷ r², avec G = 6,67 × 10⁻¹¹ N·m²·kg⁻² et r la distance entre les centres (r = R + h pour un satellite à l'altitude h). Force attractive, portée par la droite qui joint les centres." },
            },
            {
              heading: "Les trois lois de Kepler",
              paragraphs: [
                "Au début du XVIIe siècle, l'astronome Johannes Kepler, en exploitant les observations très précises de Tycho Brahe, énonce trois lois empiriques décrivant le mouvement des planètes dans le référentiel héliocentrique (les deux premières en 1609, la troisième en 1619).",
                "Première loi (loi des orbites) : chaque planète décrit une ellipse dont le Soleil occupe l'un des foyers. Deuxième loi (loi des aires) : le segment qui relie le Soleil à la planète balaie des aires égales pendant des durées égales ; la planète va donc plus vite lorsqu'elle est proche du Soleil (au périhélie) que lorsqu'elle en est loin (à l'aphélie). Troisième loi (loi des périodes) : le rapport T² ÷ a³ est le même pour toutes les planètes du système solaire, où T est la période de révolution et a le demi-grand axe de l'ellipse.",
                "Ces lois s'appliquent à tous les corps en orbite autour d'un même astre attracteur : satellites de la Terre, lunes de Jupiter. La constante T² ÷ a³ ne dépend que de la masse de l'astre attracteur. Un cercle est une ellipse particulière (ses deux foyers sont confondus au centre) : on modélise souvent les orbites par des cercles de rayon r.",
              ],
              box: { label: "À retenir", text: "Kepler 1 : orbite elliptique, l'astre attracteur occupe un foyer. Kepler 2 : aires égales balayées en des durées égales (mouvement plus rapide près de l'astre). Kepler 3 : T² ÷ a³ est constant pour tous les corps qui tournent autour du même astre." },
            },
            {
              heading: "Le mouvement circulaire d'un satellite",
              paragraphs: [
                "Étudions un satellite de masse m sur une orbite circulaire de rayon r autour de la Terre, dans le référentiel géocentrique supposé galiléen. La seule force est l'attraction gravitationnelle de la Terre. La deuxième loi de Newton donne m a⃗ = (G MT m ÷ r²) n⃗, soit a⃗ = (G MT ÷ r²) n⃗ : l'accélération ne dépend pas de la masse du satellite.",
                "Dans le repère de Frenet, a⃗ = (dv/dt) t⃗ + (v²/r) n⃗. Par identification : dv/dt = 0, donc le mouvement est uniforme ; et v²/r = G MT ÷ r², d'où v = √(G MT ÷ r). Plus le satellite est éloigné, plus il est lent.",
                "La période de révolution est la durée d'un tour : T = 2πr ÷ v = 2π √(r³ ÷ (G MT)). En élevant au carré : T² ÷ r³ = 4π² ÷ (G MT). On retrouve la troisième loi de Kepler, avec une constante qui ne dépend que de la masse de l'astre attracteur. Exemple : la Station spatiale internationale, à environ 400 km d'altitude, tourne à environ 7,7 km·s⁻¹ et fait un tour en un peu plus de 90 minutes.",
              ],
              box: { label: "Formule", text: "Orbite circulaire de rayon r autour d'un astre de masse M : mouvement uniforme ; v = √(G M ÷ r) ; T = 2π √(r³ ÷ (G M)) ; T² ÷ r³ = 4π² ÷ (G M)." },
            },
            {
              heading: "Satellite géostationnaire et masse des astres",
              paragraphs: [
                "Un satellite géostationnaire paraît immobile pour un observateur terrestre : il tourne dans le plan de l'équateur, dans le même sens que la Terre, avec une période égale à la période de rotation propre de la Terre (le jour sidéral, environ 23 h 56 min, soit 86 164 s). La troisième loi de Kepler donne r = (G MT T² ÷ (4π²))^(1/3) ≈ 4,22 × 10⁴ km, soit une altitude d'environ 35 800 km. Ces satellites servent aux télécommunications et à la météorologie.",
                "La troisième loi permet aussi de « peser » un astre : en mesurant la période T et le rayon r de l'orbite de l'un de ses satellites, on obtient M = 4π² r³ ÷ (G T²). C'est ainsi que l'on détermine la masse de Jupiter à partir du mouvement de ses lunes, ou celle du Soleil à partir du mouvement des planètes.",
              ],
              box: { label: "Repère", text: "G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; MT ≈ 5,97 × 10²⁴ kg ; RT ≈ 6 370 km. Satellite géostationnaire : plan équatorial, T ≈ 86 164 s, altitude ≈ 35 800 km." },
            },
          ],
          keyPoints: [
            "F = G mA mB ÷ r², attractive, où r est la distance entre les centres (r = R + h).",
            "Kepler 1 : ellipse, l'astre attracteur à un foyer ; Kepler 2 : loi des aires ; Kepler 3 : T² ÷ a³ constant.",
            "Orbite circulaire : mouvement uniforme ; v²/r = G M ÷ r², d'où v = √(G M ÷ r).",
            "T = 2πr ÷ v et T² ÷ r³ = 4π² ÷ (G M) : seule la masse de l'astre attracteur intervient.",
            "Géostationnaire : plan équatorial, même sens et même période que la rotation terrestre, altitude ≈ 35 800 km.",
          ],
          example: {
            statement: "La Station spatiale internationale (ISS) évolue sur une orbite supposée circulaire à l'altitude h = 400 km. Calculer sa vitesse et sa période de révolution. Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; MT = 5,97 × 10²⁴ kg ; RT = 6 370 km.",
            solution: [
              "Système : l'ISS ; référentiel géocentrique supposé galiléen ; seule force : l'attraction gravitationnelle de la Terre.",
              "Rayon de l'orbite : r = RT + h = 6 370 + 400 = 6 770 km = 6,77 × 10⁶ m.",
              "Deuxième loi de Newton, projetée sur n⃗ dans le repère de Frenet : v²/r = G MT ÷ r², d'où v = √(G MT ÷ r).",
              "v = √(6,67 × 10⁻¹¹ × 5,97 × 10²⁴ ÷ 6,77 × 10⁶) = √(5,88 × 10⁷) ≈ 7,67 × 10³ m·s⁻¹.",
              "T = 2πr ÷ v = 2π × 6,77 × 10⁶ ÷ 7,67 × 10³ ≈ 5,55 × 10³ s, soit environ 92 min.",
              "Réponse : v ≈ 7,7 km·s⁻¹ et T ≈ 92 min (un peu plus de 15 tours par jour).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la norme de la force d'attraction gravitationnelle exercée par la Terre sur la Lune. Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; MT = 5,97 × 10²⁴ kg ; masse de la Lune ML = 7,35 × 10²² kg ; distance entre les centres d = 3,84 × 10⁸ m.",
              hint: "Appliquez F = G MT ML ÷ d² en calculant séparément le numérateur et d².",
              solution: [
                "Numérateur : G MT ML = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ≈ 2,927 × 10³⁷ N·m².",
                "d² = (3,84 × 10⁸)² ≈ 1,475 × 10¹⁷ m².",
                "F = 2,927 × 10³⁷ ÷ 1,475 × 10¹⁷ ≈ 1,98 × 10²⁰ N.",
                "Réponse : F ≈ 2,0 × 10²⁰ N, force attractive dirigée de la Lune vers le centre de la Terre.",
              ],
            },
            {
              level: 2,
              statement: "Les satellites du système GPS évoluent sur des orbites supposées circulaires à l'altitude h = 20 200 km. a) Calculer le rayon r de leur orbite. b) Calculer leur vitesse. c) Calculer leur période de révolution en heures et la comparer au jour sidéral (86 164 s). Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; MT = 5,97 × 10²⁴ kg ; RT = 6 370 km.",
              hint: "N'oubliez pas d'ajouter le rayon terrestre à l'altitude et de convertir en mètres. Utilisez v = √(G MT ÷ r) puis T = 2πr ÷ v.",
              solution: [
                "a) r = RT + h = 6 370 + 20 200 = 26 570 km = 2,657 × 10⁷ m.",
                "b) v = √(G MT ÷ r) = √(3,98 × 10¹⁴ ÷ 2,657 × 10⁷) = √(1,50 × 10⁷) ≈ 3,87 × 10³ m·s⁻¹.",
                "c) T = 2πr ÷ v = 2π × 2,657 × 10⁷ ÷ 3,87 × 10³ ≈ 4,31 × 10⁴ s, soit 4,31 × 10⁴ ÷ 3 600 ≈ 12,0 h.",
                "La moitié du jour sidéral vaut 86 164 ÷ 2 = 43 082 s : la période des satellites GPS est environ un demi-jour sidéral, ils font deux tours pendant que la Terre en fait un.",
                "Réponse : r ≈ 2,66 × 10⁷ m ; v ≈ 3,9 km·s⁻¹ ; T ≈ 12 h, la moitié d'un jour sidéral.",
              ],
            },
            {
              level: 3,
              statement: "Io, satellite de Jupiter découvert par Galilée en 1610, décrit autour de Jupiter une orbite quasi circulaire de rayon r = 4,22 × 10⁵ km en T = 1,77 jour. On étudie son mouvement dans un référentiel « jupiterocentrique » supposé galiléen. 1. Montrer que le mouvement d'Io est uniforme et que sa période vérifie T² ÷ r³ = 4π² ÷ (G MJ). 2. En déduire la masse MJ de Jupiter. 3. Europe, autre satellite de Jupiter, a une période de 3,55 jours. Calculer le rayon de son orbite. Donnée : G = 6,67 × 10⁻¹¹ N·m²·kg⁻².",
              hint: "Suivez la démarche du cours dans le repère de Frenet. Pour la question 3, la troisième loi de Kepler permet d'écrire r(Europe)³ ÷ r(Io)³ = T(Europe)² ÷ T(Io)², sans recalculer MJ.",
              solution: [
                "1. Seule force : l'attraction de Jupiter, F⃗ = (G MJ m ÷ r²) n⃗. Deuxième loi de Newton : a⃗ = (G MJ ÷ r²) n⃗. Dans le repère de Frenet, la composante tangentielle est nulle : dv/dt = 0, le mouvement est uniforme. La composante normale donne v²/r = G MJ ÷ r², soit v = √(G MJ ÷ r).",
                "Avec T = 2πr ÷ v : T² = 4π² r² × r ÷ (G MJ), donc T² ÷ r³ = 4π² ÷ (G MJ).",
                "2. MJ = 4π² r³ ÷ (G T²). Conversions : r = 4,22 × 10⁸ m ; T = 1,77 × 86 400 ≈ 1,529 × 10⁵ s.",
                "r³ ≈ 7,52 × 10²⁵ m³ ; T² ≈ 2,34 × 10¹⁰ s². MJ = 39,5 × 7,52 × 10²⁵ ÷ (6,67 × 10⁻¹¹ × 2,34 × 10¹⁰) ≈ 2,97 × 10²⁷ ÷ 1,56 ≈ 1,90 × 10²⁷ kg.",
                "3. r(Europe) = r(Io) × (T(Europe) ÷ T(Io))^(2/3) = 4,22 × 10⁵ × (3,55 ÷ 1,77)^(2/3) ≈ 4,22 × 10⁵ × 1,59 ≈ 6,71 × 10⁵ km.",
                "Réponse : mouvement uniforme ; MJ ≈ 1,9 × 10²⁷ kg (environ 320 fois la masse de la Terre) ; rayon de l'orbite d'Europe ≈ 6,7 × 10⁵ km.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque loi ou notion à son énoncé.",
            pairs: [
              { left: "Première loi de Kepler", right: "Les orbites sont des ellipses dont l'astre attracteur occupe un foyer" },
              { left: "Deuxième loi de Kepler", right: "Des aires égales sont balayées pendant des durées égales" },
              { left: "Troisième loi de Kepler", right: "T² ÷ a³ est le même pour tous les corps en orbite autour d'un même astre" },
              { left: "Vitesse sur une orbite circulaire", right: "v = √(G M ÷ r)" },
              { left: "Satellite géostationnaire", right: "Orbite équatoriale, de période égale à celle de la rotation terrestre" },
              { left: "Constante de gravitation G", right: "6,67 × 10⁻¹¹ N·m²·kg⁻²" },
            ],
          },
          quiz: [
            {
              q: "D'après la loi des aires, une planète se déplace plus vite :",
              options: ["près du Soleil (périhélie)", "loin du Soleil (aphélie)", "toujours à la même vitesse", "uniquement sur une orbite circulaire"],
              answer: 0,
              why: "Pour balayer la même aire dans le même temps quand le segment Soleil-planète est plus court, la planète doit parcourir un arc plus long : elle va plus vite au périhélie.",
            },
            {
              q: "Si la distance entre deux astres double, la force gravitationnelle entre eux est :",
              options: ["doublée", "divisée par 2", "divisée par 4", "multipliée par 4"],
              answer: 2,
              why: "F est inversement proportionnelle à r² : (2r)² = 4r², la force est divisée par 4.",
            },
            {
              q: "La vitesse d'un satellite en orbite circulaire autour de la Terre dépend :",
              options: ["de sa propre masse", "de sa masse et de r", "de MT et de r", "de r seulement, quelle que soit la planète centrale"],
              answer: 2,
              why: "v = √(G MT ÷ r) : la masse du satellite se simplifie, seules la masse de l'astre attracteur et le rayon de l'orbite interviennent.",
            },
            {
              q: "Pour une orbite circulaire, la troisième loi de Kepler s'écrit :",
              options: ["T ÷ r = 2π ÷ (G M)", "T³ ÷ r² = G M ÷ (4π²)", "T² × r³ = G M", "T² ÷ r³ = 4π² ÷ (G M)"],
              answer: 3,
              why: "De T = 2πr ÷ v et v = √(G M ÷ r), on tire T² = 4π² r³ ÷ (G M).",
            },
            {
              q: "La période de révolution d'un satellite géostationnaire vaut environ :",
              options: ["12 h", "23 h 56 min", "90 min", "27 jours"],
              answer: 1,
              why: "Elle est égale à la période de rotation propre de la Terre, le jour sidéral : environ 23 h 56 min.",
            },
          ],
          trap: "Utiliser l'altitude h à la place de la distance r au centre de l'astre dans F = G M m ÷ r² ou dans la troisième loi de Kepler : il faut toujours r = R + h, exprimé en mètres.",
          method: "Pour un satellite, rédigez toujours dans le même ordre : système, référentiel géocentrique (ou héliocentrique) supposé galiléen, force gravitationnelle, deuxième loi de Newton, projection dans le repère de Frenet (composante tangentielle, puis normale). Contrôlez enfin l'ordre de grandeur : quelques km·s⁻¹ pour un satellite de la Terre.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÉCOULEMENT D'UN FLUIDE                                               */
    /* ==================================================================== */
    {
      id: 'ecoulement-fluide',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'poussee-archimede',
          title: "La poussée d'Archimède",
          minutes: 25,
          objectives: [
            "Expliquer qualitativement l'origine de la poussée d'Archimède à partir des forces pressantes exercées par un fluide.",
            "Utiliser l'expression vectorielle de la poussée d'Archimède.",
            "Prévoir si un corps flotte ou coule et calculer la fraction immergée d'un corps qui flotte.",
          ],
          course: [
            {
              heading: "Pression et forces pressantes dans un fluide au repos",
              paragraphs: [
                "Un fluide (liquide ou gaz) au repos exerce sur toute surface en contact avec lui une force pressante perpendiculaire à cette surface, dirigée du fluide vers la surface, de norme F = p × S, où p est la pression (en pascals, Pa) et S l'aire de la surface (en m²).",
                "Dans un fluide incompressible au repos, la pression augmente avec la profondeur selon la loi fondamentale de la statique des fluides : pB - pA = ρ g (zA - zB), où ρ est la masse volumique du fluide et z l'altitude, mesurée sur un axe vertical orienté vers le haut. Dans l'eau (ρ = 1,0 × 10³ kg·m⁻³), la pression augmente d'environ 1,0 × 10⁵ Pa, soit 1 bar, tous les 10 m : c'est ce que ressentent les plongeurs dans leurs oreilles.",
              ],
              box: { label: "Formule", text: "Force pressante : F = p × S. Loi fondamentale de la statique des fluides : pB - pA = ρ g (zA - zB) ; plus on descend dans le fluide, plus la pression est grande." },
            },
            {
              heading: "L'origine de la poussée d'Archimède",
              paragraphs: [
                "Plongeons entièrement un cube d'arête a dans l'eau, faces horizontales. Les forces pressantes sur les faces latérales se compensent deux à deux. La face inférieure est plus profonde que la face supérieure : la pression y est plus grande, donc la force pressante vers le haut sur la face du bas l'emporte sur la force pressante vers le bas sur la face du haut. La résultante des forces pressantes est verticale et dirigée vers le haut : c'est la poussée d'Archimède.",
                "Calculons-la : la différence de pression entre les deux faces vaut ρfluide g a ; la résultante vaut donc ρfluide g a × a² = ρfluide × a³ × g, c'est-à-dire le poids du volume de fluide déplacé par le cube. Ce résultat, établi ici pour un cube, est général : il vaut pour tout corps, quelle que soit sa forme, et dans tout fluide, y compris l'air. C'est la poussée de l'air qui fait monter une montgolfière ou un ballon d'hélium.",
              ],
              box: { label: "Loi", text: "Poussée d'Archimède : Π⃗ = -ρfluide × Vimmergé × g⃗. Elle est verticale, dirigée vers le haut, de norme Π = ρfluide × Vimmergé × g : elle est égale au poids du fluide déplacé." },
            },
            {
              heading: "Flotter ou couler",
              paragraphs: [
                "Un corps entièrement immergé, de volume V et de masse volumique ρcorps, est soumis à son poids P = ρcorps V g et à la poussée Π = ρfluide V g. Si ρcorps > ρfluide, le poids l'emporte et le corps coule. Si ρcorps < ρfluide, la poussée l'emporte et le corps remonte jusqu'à flotter. Si les deux masses volumiques sont égales, le corps reste en équilibre à toute profondeur : c'est ce que recherche un plongeur en réglant son gilet stabilisateur.",
                "Un corps qui flotte à l'équilibre n'est immergé que sur une partie Vimm de son volume, telle que la poussée compense exactement le poids : ρfluide Vimm g = ρcorps V g, soit Vimm ÷ V = ρcorps ÷ ρfluide. Exemple : la glace (ρ ≈ 917 kg·m⁻³) flottant dans l'eau de mer (ρ ≈ 1 025 kg·m⁻³) est immergée à 917 ÷ 1 025 ≈ 0,89, soit environ 89 % de son volume : seule une petite partie d'un iceberg dépasse de l'eau.",
                "Un navire en acier flotte alors que l'acier est près de huit fois plus dense que l'eau : sa coque contient beaucoup d'air, et sa masse volumique moyenne (masse totale divisée par le volume délimité par la coque) est inférieure à celle de l'eau.",
              ],
              box: { label: "Propriété", text: "Corps flottant à l'équilibre : Π = P, d'où Vimmergé ÷ Vtotal = ρcorps ÷ ρfluide. Corps totalement immergé : il coule si ρcorps > ρfluide, il remonte si ρcorps < ρfluide." },
            },
            {
              heading: "Mesurer la poussée d'Archimède",
              paragraphs: [
                "Au laboratoire, on suspend un objet à un dynamomètre. Dans l'air, l'appareil indique le poids P (la poussée de l'air est négligeable). Lorsque l'objet est immergé dans l'eau, il indique une valeur plus faible P', appelée poids apparent. À l'équilibre, la force du dynamomètre et la poussée compensent ensemble le poids : P' + Π = P, d'où Π = P - P'.",
                "On compare ensuite cette valeur à ρeau × V × g, le volume V de l'objet étant mesuré par le déplacement du niveau d'eau dans une éprouvette graduée. On peut aussi vérifier que Π ne dépend pas de la profondeur une fois l'objet totalement immergé, mais qu'elle dépend du liquide : dans l'eau salée, plus dense, la poussée est plus grande.",
              ],
            },
          ],
          keyPoints: [
            "Un fluide au repos exerce des forces pressantes perpendiculaires aux surfaces : F = p S.",
            "La pression augmente avec la profondeur : pB - pA = ρ g (zA - zB).",
            "La poussée d'Archimède est la résultante des forces pressantes : verticale, vers le haut.",
            "Π = ρfluide × Vimmergé × g : le poids du fluide déplacé (ρ du fluide, pas du corps).",
            "Flottaison : Vimm ÷ V = ρcorps ÷ ρfluide ; un corps plus dense que le fluide coule.",
            "Mesure : Π = P - P' (poids réel moins poids apparent).",
          ],
          example: {
            statement: "Un bloc de bois de volume V = 2,0 L et de masse volumique ρb = 650 kg·m⁻³ flotte sur de l'eau douce (ρe = 1,0 × 10³ kg·m⁻³) ; g = 9,8 N·kg⁻¹. a) Calculer le poids du bloc. b) En déduire la norme de la poussée d'Archimède à l'équilibre. c) Calculer le volume immergé. d) Quelle masse minimale faut-il poser sur le bloc pour qu'il soit entièrement immergé ?",
            solution: [
              "a) Masse du bloc : m = ρb V = 650 × 2,0 × 10⁻³ = 1,3 kg. Poids : P = m g = 1,3 × 9,8 ≈ 12,7 N.",
              "b) Le bloc flotte à l'équilibre : la poussée compense le poids, Π = P ≈ 12,7 N.",
              "c) Π = ρe Vimm g, donc Vimm = Π ÷ (ρe g) = m ÷ ρe = 1,3 ÷ 1,0 × 10³ = 1,3 × 10⁻³ m³ = 1,3 L, soit 65 % du volume (650 ÷ 1 000 = 0,65).",
              "d) Entièrement immergé, le bloc subit la poussée maximale Πmax = ρe V g = 1,0 × 10³ × 2,0 × 10⁻³ × 9,8 = 19,6 N, qui peut équilibrer une masse totale de 2,0 kg.",
              "La masse à ajouter (posée sur le bloc, hors de l'eau) vaut donc 2,0 - 1,3 = 0,70 kg.",
              "Réponse : P ≈ 12,7 N ; Π ≈ 12,7 N ; Vimm = 1,3 L ; il faut ajouter au moins 0,70 kg.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une bille d'acier de volume 4,0 cm³ est entièrement immergée dans l'eau (ρeau = 1,0 × 10³ kg·m⁻³). La masse volumique de l'acier vaut 7,8 × 10³ kg·m⁻³ ; g = 9,8 N·kg⁻¹. a) Calculer la poussée d'Archimède. b) Calculer le poids de la bille. c) La bille flotte-t-elle ?",
              hint: "Convertissez le volume en m³ (1 cm³ = 10⁻⁶ m³). La poussée utilise la masse volumique de l'eau, le poids celle de l'acier.",
              solution: [
                "a) V = 4,0 × 10⁻⁶ m³. Π = ρeau V g = 1,0 × 10³ × 4,0 × 10⁻⁶ × 9,8 ≈ 3,9 × 10⁻² N.",
                "b) P = ρacier V g = 7,8 × 10³ × 4,0 × 10⁻⁶ × 9,8 ≈ 0,31 N.",
                "c) Le poids est environ 8 fois plus grand que la poussée (ce qui est le rapport des masses volumiques) : la bille coule.",
                "Réponse : Π ≈ 3,9 × 10⁻² N ; P ≈ 0,31 N ; la bille coule.",
              ],
            },
            {
              level: 2,
              statement: "Un objet métallique est suspendu à un dynamomètre. Dans l'air, le dynamomètre indique 2,65 N ; lorsque l'objet est entièrement immergé dans l'eau (ρeau = 1,0 × 10³ kg·m⁻³), il indique 1,67 N ; g = 9,8 N·kg⁻¹. a) Calculer la poussée d'Archimède. b) En déduire le volume de l'objet. c) Calculer sa masse volumique et identifier le métal parmi : aluminium (2,70 × 10³ kg·m⁻³), fer (7,87 × 10³ kg·m⁻³), cuivre (8,96 × 10³ kg·m⁻³).",
              hint: "La différence entre les deux indications du dynamomètre est la poussée. Le volume s'obtient à partir de Π = ρeau V g, la masse à partir du poids dans l'air.",
              solution: [
                "a) Π = P - P' = 2,65 - 1,67 = 0,98 N.",
                "b) V = Π ÷ (ρeau g) = 0,98 ÷ (1,0 × 10³ × 9,8) = 1,0 × 10⁻⁴ m³, soit 100 cm³.",
                "c) Masse : m = P ÷ g = 2,65 ÷ 9,8 ≈ 0,270 kg. Masse volumique : ρ = m ÷ V = 0,270 ÷ 1,0 × 10⁻⁴ ≈ 2,70 × 10³ kg·m⁻³.",
                "Réponse : Π = 0,98 N ; V = 100 cm³ ; ρ ≈ 2,70 × 10³ kg·m⁻³ : l'objet est en aluminium.",
              ],
            },
            {
              level: 3,
              statement: "Une montgolfière a une enveloppe de volume V = 2 500 m³. L'air extérieur a une masse volumique ρext = 1,22 kg·m⁻³ ; l'air chaud intérieur a une masse volumique ρint = 0,95 kg·m⁻³. La masse de l'enveloppe, de la nacelle, du brûleur et des passagers vaut M = 600 kg. On néglige le volume de la nacelle et des passagers devant celui de l'enveloppe ; g = 9,8 N·kg⁻¹. 1. Calculer la poussée d'Archimède exercée par l'air extérieur. 2. Calculer le poids total du système {montgolfière + air chaud}. 3. La montgolfière peut-elle décoller ? 4. Déterminer la masse volumique maximale de l'air intérieur permettant le décollage, et expliquer pourquoi on chauffe l'air.",
              hint: "Le système comprend l'air chaud contenu dans l'enveloppe : sa masse vaut ρint × V. Le décollage est possible si la poussée dépasse le poids total.",
              solution: [
                "1. Π = ρext V g = 1,22 × 2 500 × 9,8 ≈ 2,99 × 10⁴ N (29 890 N).",
                "2. Masse d'air chaud : ρint V = 0,95 × 2 500 = 2 375 kg. Masse totale : 2 375 + 600 = 2 975 kg. Poids : P = 2 975 × 9,8 ≈ 2,92 × 10⁴ N (29 155 N).",
                "3. Π > P (la résultante vaut environ 735 N vers le haut) : la montgolfière peut décoller.",
                "4. Condition de décollage : ρext V g ≥ (ρint V + M) g, soit ρint ≤ ρext - M ÷ V = 1,22 - 600 ÷ 2 500 = 1,22 - 0,24 = 0,98 kg·m⁻³.",
                "À pression constante, la masse volumique d'un gaz diminue quand sa température augmente : chauffer l'air de l'enveloppe le rend moins dense que l'air extérieur, ce qui permet de satisfaire cette condition.",
                "Réponse : Π ≈ 2,99 × 10⁴ N > P ≈ 2,92 × 10⁴ N : décollage possible ; il faut ρint ≤ 0,98 kg·m⁻³.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La poussée d'Archimède.",
            statements: [
              { text: "La poussée d'Archimède dépend de la masse volumique du corps immergé.", true: false, why: "Elle dépend de la masse volumique du fluide et du volume immergé, pas de la matière du corps." },
              { text: "Un objet placé dans l'air subit lui aussi une poussée d'Archimède.", true: true, why: "L'air est un fluide ; cette poussée est souvent négligeable, sauf pour un ballon ou une montgolfière." },
              { text: "Un objet totalement immergé subit une poussée plus grande quand on l'enfonce plus profondément.", true: false, why: "La poussée ne dépend que du volume immergé et du fluide, pas de la profondeur (fluide incompressible)." },
              { text: "Un corps flotte si sa masse volumique moyenne est inférieure à celle du fluide.", true: true, why: "La poussée sur le corps entièrement immergé dépasserait son poids : il remonte et flotte." },
              { text: "La poussée d'Archimède est verticale et dirigée vers le haut.", true: true, why: "C'est la résultante des forces pressantes, plus fortes sur la partie basse du corps." },
              { text: "Un bateau en acier flotte parce que l'acier est moins dense que l'eau.", true: false, why: "L'acier est bien plus dense ; c'est l'air contenu dans la coque qui rend la masse volumique moyenne plus faible." },
              { text: "Environ 90 % du volume d'un iceberg est immergé.", true: true, why: "Vimm ÷ V = ρglace ÷ ρeau de mer ≈ 917 ÷ 1 025 ≈ 0,89." },
            ],
          },
          quiz: [
            {
              q: "La norme de la poussée d'Archimède exercée sur un corps est égale :",
              options: ["au poids du corps", "au poids du fluide déplacé", "à la masse du fluide déplacé", "à la pression du fluide"],
              answer: 1,
              why: "Π = ρfluide Vimmergé g : c'est le poids du volume de fluide déplacé (une force, pas une masse).",
            },
            {
              q: "Un objet de 1,0 L entièrement immergé dans l'eau (ρ = 1,0 × 10³ kg·m⁻³, g = 9,8 N·kg⁻¹) subit une poussée de :",
              options: ["9,8 × 10³ N", "1,0 N", "0,98 N", "9,8 N"],
              answer: 3,
              why: "Π = 1,0 × 10³ × 1,0 × 10⁻³ × 9,8 = 9,8 N (1 L = 10⁻³ m³).",
            },
            {
              q: "Un objet pèse 5,0 N dans l'air et a un poids apparent de 3,0 N dans l'eau. La poussée d'Archimède vaut :",
              options: ["2,0 N", "8,0 N", "3,0 N", "5,0 N"],
              answer: 0,
              why: "Π = P - P' = 5,0 - 3,0 = 2,0 N.",
            },
            {
              q: "Un bouchon de liège (ρ = 240 kg·m⁻³) flotte sur l'eau douce. La fraction de son volume qui est immergée vaut :",
              options: ["76 %", "100 %", "24 %", "4,2 %"],
              answer: 2,
              why: "Vimm ÷ V = ρliège ÷ ρeau = 240 ÷ 1 000 = 0,24, soit 24 %.",
            },
            {
              q: "Pourquoi la pression augmente-t-elle avec la profondeur dans l'eau ?",
              options: ["Parce que l'eau est plus chaude en profondeur", "Parce que l'eau située au-dessus a un poids", "Parce que la poussée d'Archimède diminue", "Parce que l'eau devient plus salée"],
              answer: 1,
              why: "Chaque couche supporte le poids de la colonne d'eau située au-dessus : c'est le sens de pB - pA = ρ g (zA - zB).",
            },
          ],
          trap: "Utiliser la masse volumique du corps ou son volume total au lieu de la masse volumique du fluide et du volume immergé : Π = ρfluide × Vimmergé × g, et pour un corps qui flotte, Vimmergé est inférieur à V.",
          method: "Avant tout calcul, faites le schéma des forces (poids vers le bas, poussée vers le haut, éventuellement tension d'un fil ou force d'un dynamomètre) et écrivez la condition d'équilibre. Convertissez systématiquement les volumes en m³ : 1 L = 10⁻³ m³ et 1 cm³ = 10⁻⁶ m³.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'debit-bernoulli',
          title: "Débit volumique et relation de Bernoulli",
          minutes: 30,
          objectives: [
            "Définir et calculer le débit volumique d'un fluide en écoulement permanent.",
            "Exploiter la conservation du débit volumique pour déterminer la vitesse d'un fluide incompressible.",
            "Exploiter la relation de Bernoulli, celle-ci étant fournie, pour étudier l'écoulement d'un fluide incompressible et interpréter l'effet Venturi.",
          ],
          course: [
            {
              heading: "Écoulement permanent et débit volumique",
              paragraphs: [
                "Un écoulement est dit permanent (ou stationnaire) lorsque, en chaque point du fluide, la vitesse et la pression ne dépendent pas du temps : l'eau d'un robinet ouvert depuis un moment, une rivière à débit constant. Les lignes de courant, tangentes en chaque point au vecteur vitesse du fluide, permettent de visualiser l'écoulement. Un fluide est dit incompressible si sa masse volumique reste constante : c'est une très bonne approximation pour les liquides, et pour les gaz qui s'écoulent lentement.",
                "Le débit volumique Dv est le volume de fluide qui traverse une section donnée par unité de temps : Dv = V ÷ Δt, en m³·s⁻¹. Si le fluide traverse une section d'aire S avec une vitesse v uniforme sur cette section, il avance de v Δt pendant la durée Δt ; le volume qui a traversé la section est alors S × v Δt. Donc Dv = S × v.",
              ],
              box: { label: "Formule", text: "Débit volumique : Dv = V ÷ Δt = S × v (Dv en m³·s⁻¹, S en m², v en m·s⁻¹). Repère : 1 L·s⁻¹ = 10⁻³ m³·s⁻¹." },
            },
            {
              heading: "La conservation du débit",
              paragraphs: [
                "En écoulement permanent, un fluide incompressible ne peut ni s'accumuler ni disparaître dans une canalisation : le volume qui entre par une section pendant une durée Δt est égal au volume qui sort par une autre section pendant la même durée. Le débit volumique se conserve le long de la conduite : Dv = S₁ v₁ = S₂ v₂.",
                "Conséquence : là où la section diminue, la vitesse augmente. C'est ce que vous observez en pinçant l'extrémité d'un tuyau d'arrosage, ou dans une rivière qui accélère en traversant un passage étroit. Exemple : une conduite de diamètre 4,0 cm, où l'eau circule à 0,50 m·s⁻¹, se rétrécit jusqu'à 2,0 cm de diamètre. La section, proportionnelle au carré du diamètre, est divisée par 4 : la vitesse est multipliée par 4 et vaut v₂ = 2,0 m·s⁻¹.",
              ],
              box: { label: "Propriété", text: "Fluide incompressible en écoulement permanent : S₁ v₁ = S₂ v₂. Pour une conduite circulaire, S = π d² ÷ 4 : diviser le diamètre par 2 multiplie la vitesse par 4." },
            },
            {
              heading: "La relation de Bernoulli",
              paragraphs: [
                "Pour un fluide parfait (on néglige les frottements internes, c'est-à-dire la viscosité), incompressible, en écoulement permanent, la relation de Bernoulli s'écrit le long d'une ligne de courant : p + ½ ρ v² + ρ g z = constante. Chaque terme est homogène à une pression (en Pa) et aussi à une énergie par unité de volume (1 Pa = 1 J·m⁻³). La relation traduit la conservation de l'énergie du fluide : énergie liée aux forces de pression, énergie cinétique volumique ½ ρ v², énergie potentielle de pesanteur volumique ρ g z.",
                "Entre deux points A et B d'une même ligne de courant : pA + ½ ρ vA² + ρ g zA = pB + ½ ρ vB² + ρ g zB. Si le fluide est au repos (v = 0 partout), on retrouve la loi de la statique des fluides : p + ρ g z = constante.",
                "Application : la vidange d'un réservoir (formule de Torricelli). Un réservoir ouvert, de grande section, se vide par un petit orifice situé à une hauteur h sous la surface libre. À la surface et à la sortie de l'orifice, la pression est la pression atmosphérique ; la vitesse de descente de la surface libre est négligeable. Bernoulli donne alors ρ g h = ½ ρ v², d'où v = √(2 g h) : la vitesse d'un objet tombé en chute libre d'une hauteur h. Pour h = 0,80 m, v = √(2 × 9,8 × 0,80) ≈ 4,0 m·s⁻¹.",
              ],
              box: { label: "Formule", text: "Relation de Bernoulli (fluide parfait, incompressible, écoulement permanent, le long d'une ligne de courant) : p + ½ ρ v² + ρ g z = constante. Vidange d'un grand réservoir (Torricelli) : v = √(2 g h)." },
            },
            {
              heading: "L'effet Venturi",
              paragraphs: [
                "Dans une conduite horizontale (z constant), la relation de Bernoulli devient p + ½ ρ v² = constante : là où la vitesse augmente, la pression diminue. Or la conservation du débit impose une vitesse plus grande dans un rétrécissement. La pression est donc plus faible dans un étranglement : c'est l'effet Venturi, du nom du physicien italien Giovanni Battista Venturi, qui l'a étudié à la fin du XVIIIe siècle.",
                "Applications : le tube de Venturi mesure un débit à partir de la différence de pression entre la partie large et l'étranglement ; la trompe à eau du laboratoire utilise la dépression créée par un jet d'eau rapide pour aspirer de l'air et réaliser une filtration sous pression réduite ; dans un vaporisateur, le courant d'air rapide qui passe au-dessus d'un tube crée une dépression qui aspire le liquide.",
              ],
              box: { label: "À retenir", text: "Effet Venturi : dans le rétrécissement d'une conduite horizontale, la vitesse augmente (S v = constante) et la pression diminue (p + ½ ρ v² = constante)." },
            },
          ],
          keyPoints: [
            "Écoulement permanent : vitesse et pression en chaque point indépendantes du temps.",
            "Dv = V ÷ Δt = S × v, en m³·s⁻¹.",
            "Fluide incompressible : S₁ v₁ = S₂ v₂ ; section plus petite, vitesse plus grande.",
            "Bernoulli (fournie) : p + ½ ρ v² + ρ g z = constante le long d'une ligne de courant.",
            "Torricelli : v = √(2 g h) pour la vidange d'un grand réservoir.",
            "Venturi : dans une conduite horizontale, là où la vitesse augmente, la pression diminue.",
          ],
          example: {
            statement: "De l'eau (ρ = 1,0 × 10³ kg·m⁻³) circule dans une conduite horizontale de section S₁ = 20 cm² à la vitesse v₁ = 1,5 m·s⁻¹. La conduite présente un étranglement de section S₂ = 5,0 cm². On considère l'eau comme un fluide parfait incompressible en écoulement permanent. a) Calculer le débit volumique en L·s⁻¹. b) Calculer la vitesse v₂ dans l'étranglement. c) Calculer la différence de pression p₁ - p₂ à l'aide de la relation de Bernoulli.",
            solution: [
              "a) S₁ = 20 cm² = 20 × 10⁻⁴ m² = 2,0 × 10⁻³ m². Dv = S₁ v₁ = 2,0 × 10⁻³ × 1,5 = 3,0 × 10⁻³ m³·s⁻¹, soit 3,0 L·s⁻¹.",
              "b) Conservation du débit : v₂ = Dv ÷ S₂ = 3,0 × 10⁻³ ÷ 5,0 × 10⁻⁴ = 6,0 m·s⁻¹.",
              "c) Conduite horizontale (z₁ = z₂) : p₁ + ½ ρ v₁² = p₂ + ½ ρ v₂², donc p₁ - p₂ = ½ ρ (v₂² - v₁²).",
              "p₁ - p₂ = ½ × 1,0 × 10³ × (6,0² - 1,5²) = 500 × (36 - 2,25) = 500 × 33,75 ≈ 1,7 × 10⁴ Pa.",
              "Réponse : Dv = 3,0 L·s⁻¹ ; v₂ = 6,0 m·s⁻¹ ; la pression est plus faible de 1,7 × 10⁴ Pa dans l'étranglement (effet Venturi).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un robinet remplit un seau de 10 L en 25 s. a) Calculer le débit volumique en L·s⁻¹ puis en m³·s⁻¹. b) L'embout du robinet est circulaire, de diamètre intérieur 1,6 cm. Calculer la vitesse de l'eau à la sortie.",
              hint: "Dv = V ÷ Δt, puis v = Dv ÷ S avec S = π d² ÷ 4, le diamètre étant exprimé en mètres.",
              solution: [
                "a) Dv = 10 ÷ 25 = 0,40 L·s⁻¹ = 4,0 × 10⁻⁴ m³·s⁻¹.",
                "b) S = π × (1,6 × 10⁻²)² ÷ 4 ≈ 2,0 × 10⁻⁴ m².",
                "v = Dv ÷ S = 4,0 × 10⁻⁴ ÷ 2,0 × 10⁻⁴ ≈ 2,0 m·s⁻¹.",
                "Réponse : Dv = 0,40 L·s⁻¹ = 4,0 × 10⁻⁴ m³·s⁻¹ ; v ≈ 2,0 m·s⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "Un tuyau d'arrosage de diamètre intérieur 2,0 cm transporte de l'eau à la vitesse de 1,2 m·s⁻¹. On fixe à son extrémité un embout de diamètre intérieur 0,50 cm. a) Calculer la vitesse de l'eau à la sortie de l'embout. b) Calculer le débit volumique en L·s⁻¹. c) Combien de temps faut-il pour remplir un arrosoir de 12 L ?",
              hint: "Le rapport des sections est le carré du rapport des diamètres. Le débit est le même dans le tuyau et dans l'embout.",
              solution: [
                "a) Le diamètre est divisé par 2,0 ÷ 0,50 = 4, donc la section est divisée par 4² = 16. Par conservation du débit, la vitesse est multipliée par 16 : v₂ = 16 × 1,2 = 19,2 m·s⁻¹ ≈ 19 m·s⁻¹.",
                "b) Section du tuyau : S₁ = π × (2,0 × 10⁻²)² ÷ 4 ≈ 3,14 × 10⁻⁴ m². Dv = S₁ v₁ = 3,14 × 10⁻⁴ × 1,2 ≈ 3,8 × 10⁻⁴ m³·s⁻¹, soit environ 0,38 L·s⁻¹.",
                "c) Δt = V ÷ Dv = 12 ÷ 0,377 ≈ 32 s.",
                "Réponse : v ≈ 19 m·s⁻¹ ; Dv ≈ 0,38 L·s⁻¹ ; environ 32 s. L'embout augmente la vitesse du jet mais pas le débit.",
              ],
            },
            {
              level: 3,
              statement: "Un grand réservoir cylindrique ouvert contient de l'eau jusqu'à une hauteur h = 1,8 m au-dessus d'un orifice circulaire de diamètre 1,0 cm percé au bas de sa paroi. On donne la relation de Bernoulli : p + ½ ρ v² + ρ g z = constante le long d'une ligne de courant ; g = 9,8 m·s⁻². 1. Préciser les hypothèses nécessaires pour l'appliquer. 2. En appliquant cette relation entre un point A de la surface libre et un point B à la sortie de l'orifice, montrer que vB = √(2 g h), puis calculer vB. 3. Calculer le débit initial en L·s⁻¹. 4. Expliquer pourquoi le débit diminue pendant la vidange, puis calculer la vitesse de sortie lorsque la hauteur d'eau n'est plus que de 0,45 m.",
              hint: "En A et en B, la pression est la pression atmosphérique. La section du réservoir étant très grande devant celle de l'orifice, la conservation du débit montre que vA est négligeable devant vB.",
              solution: [
                "1. On suppose l'eau incompressible et parfaite (frottements négligés), et l'écoulement quasi permanent, ce qui est raisonnable tant que le niveau baisse lentement, c'est-à-dire pour un réservoir de grande section.",
                "2. pA = pB = patm ; vA ≈ 0 ; zA - zB = h. Bernoulli : patm + 0 + ρ g zA = patm + ½ ρ vB² + ρ g zB, d'où ½ vB² = g (zA - zB) = g h et vB = √(2 g h).",
                "vB = √(2 × 9,8 × 1,8) = √35,3 ≈ 5,9 m·s⁻¹.",
                "3. S = π × (1,0 × 10⁻²)² ÷ 4 ≈ 7,85 × 10⁻⁵ m². Dv = S vB ≈ 7,85 × 10⁻⁵ × 5,94 ≈ 4,7 × 10⁻⁴ m³·s⁻¹, soit environ 0,47 L·s⁻¹.",
                "4. Au cours de la vidange, h diminue, donc vB = √(2 g h) diminue, et le débit S vB aussi. Pour h = 0,45 m : vB = √(2 × 9,8 × 0,45) = √8,82 ≈ 3,0 m·s⁻¹ ; la hauteur a été divisée par 4, la vitesse par 2.",
                "Réponse : vB ≈ 5,9 m·s⁻¹ ; débit initial ≈ 0,47 L·s⁻¹ ; vB ≈ 3,0 m·s⁻¹ quand h = 0,45 m.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul d'une différence de pression dans un rétrécissement.",
            items: [
              "Vérifier les hypothèses : fluide incompressible, écoulement permanent, frottements négligés",
              "Calculer le débit volumique Dv = S₁ v₁",
              "En déduire la vitesse dans le rétrécissement : v₂ = Dv ÷ S₂",
              "Écrire la relation de Bernoulli entre les points 1 et 2 d'une même ligne de courant",
              "Simplifier les termes ρ g z, égaux si la conduite est horizontale",
              "Calculer p₁ - p₂ = ½ ρ (v₂² - v₁²) et conclure",
            ],
          },
          quiz: [
            {
              q: "L'unité SI du débit volumique est :",
              options: ["m³·s⁻¹", "m·s⁻¹", "kg·s⁻¹", "Pa·s"],
              answer: 0,
              why: "Dv est un volume divisé par une durée : m³·s⁻¹.",
            },
            {
              q: "Le diamètre d'une conduite est divisé par 2. Pour un fluide incompressible, la vitesse d'écoulement est :",
              options: ["divisée par 2", "multipliée par 2", "inchangée", "multipliée par 4"],
              answer: 3,
              why: "La section, proportionnelle à d², est divisée par 4 ; comme S v est constant, v est multipliée par 4.",
            },
            {
              q: "Dans le rétrécissement d'une conduite horizontale, la pression du fluide :",
              options: ["augmente", "diminue", "ne change pas", "s'annule"],
              answer: 1,
              why: "La vitesse y augmente ; avec p + ½ ρ v² constant, la pression diminue : c'est l'effet Venturi.",
            },
            {
              q: "Un réservoir se vide par un orifice situé 5,0 m sous la surface libre (g = 9,8 m·s⁻²). La vitesse de sortie vaut environ :",
              options: ["98 m·s⁻¹", "49 m·s⁻¹", "9,9 m·s⁻¹", "7,0 m·s⁻¹"],
              answer: 2,
              why: "v = √(2 g h) = √(2 × 9,8 × 5,0) = √98 ≈ 9,9 m·s⁻¹.",
            },
            {
              q: "Dans la relation de Bernoulli, le terme ½ ρ v² s'exprime en :",
              options: ["joules", "pascals", "watts", "newtons"],
              answer: 1,
              why: "Tous les termes de la relation sont homogènes à une pression ; ½ ρ v² est aussi une énergie par unité de volume (J·m⁻³ = Pa).",
            },
          ],
          trap: "Croire que la vitesse est proportionnelle au diamètre : c'est la section S = π d² ÷ 4 qui intervient dans Dv = S v, donc diviser le diamètre par 2 multiplie la vitesse par 4. Autre piège : penser que la pression est plus forte là où le fluide va plus vite, alors que c'est l'inverse.",
          method: "Dans un problème d'écoulement, utilisez d'abord la conservation du débit pour trouver toutes les vitesses, puis seulement la relation de Bernoulli pour les pressions. Contrôlez l'homogénéité : chaque terme de la relation doit être en pascals.",
        },
      ],
    },
    /* ==================================================================== */
    /* ÉNERGIE : THERMODYNAMIQUE ET BILANS                                    */
    /* ==================================================================== */
    {
      id: 'thermodynamique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'gaz-parfait',
          title: "Le modèle du gaz parfait",
          minutes: 25,
          objectives: [
            "Relier qualitativement les valeurs des grandeurs macroscopiques mesurées (pression, température, masse volumique) aux propriétés du système à l'échelle microscopique.",
            "Exploiter l'équation d'état du gaz parfait pV = nRT pour décrire le comportement d'un gaz.",
            "Identifier quelques limites du modèle du gaz parfait.",
          ],
          course: [
            {
              heading: "Grandeurs macroscopiques et réalité microscopique",
              paragraphs: [
                "Un système thermodynamique contient un nombre immense d'entités : une mole en compte NA = 6,02 × 10²³ (constante d'Avogadro). Il est impossible de suivre chaque molécule ; on décrit donc le système par des grandeurs macroscopiques mesurables : la pression p, le volume V, la température T, la quantité de matière n, la masse volumique ρ = m ÷ V.",
                "Ces grandeurs ont une interprétation microscopique. La pression résulte des chocs des molécules sur les parois : plus les chocs sont nombreux et violents, plus la pression est grande. La température mesure l'agitation thermique : plus elle est élevée, plus l'énergie cinétique moyenne des molécules est grande. La masse volumique traduit le nombre de molécules par unité de volume et leur masse.",
                "La température thermodynamique, ou absolue, s'exprime en kelvins (K) : T(K) = θ(°C) + 273,15. Le zéro absolu, 0 K soit -273,15 °C, correspond à l'agitation thermique minimale : aucune température ne peut être inférieure.",
              ],
              box: { label: "Repère", text: "T(K) = θ(°C) + 273,15. Pression en pascals : 1 bar = 10⁵ Pa ; pression atmosphérique normale : 1,013 × 10⁵ Pa. Volume en m³ : 1 L = 10⁻³ m³." },
            },
            {
              heading: "Le modèle du gaz parfait",
              paragraphs: [
                "Le gaz parfait est un modèle : les molécules y sont considérées comme ponctuelles (leur volume propre est négligeable devant le volume occupé par le gaz) et sans interaction entre elles, sauf au moment des chocs. Dans ce modèle, les grandeurs d'état sont reliées par l'équation d'état du gaz parfait : pV = nRT, où R = 8,314 J·mol⁻¹·K⁻¹ est la constante des gaz parfaits.",
                "Cette équation contient les lois historiques des gaz. À n et T constants, pV est constant (loi de Boyle-Mariotte, XVIIe siècle) : comprimer un gaz à température constante augmente sa pression. À n et V constants, p est proportionnelle à T : c'est pourquoi la pression d'un pneu augmente quand il s'échauffe.",
                "Elle montre aussi qu'à p et T fixées, une mole de n'importe quel gaz parfait occupe le même volume, le volume molaire Vm = RT ÷ p : environ 22,4 L à 0 °C et 24,1 L à 20 °C, sous 1,013 × 10⁵ Pa.",
              ],
              box: { label: "Formule", text: "Équation d'état du gaz parfait : pV = nRT, avec p en Pa, V en m³, n en mol, T en K et R = 8,314 J·mol⁻¹·K⁻¹. Masse volumique : ρ = m ÷ V = p M ÷ (R T)." },
            },
            {
              heading: "Utiliser et discuter le modèle",
              paragraphs: [
                "Comme m = n M, l'équation d'état donne la masse volumique d'un gaz : ρ = p M ÷ (RT). Pour l'air (M ≈ 29 g·mol⁻¹) à 20 °C sous 1,013 × 10⁵ Pa : ρ = 1,013 × 10⁵ × 0,029 ÷ (8,314 × 293) ≈ 1,2 kg·m⁻³. À pression fixée, un gaz chaud est moins dense qu'un gaz froid : c'est le principe de la montgolfière.",
                "Le modèle du gaz parfait décrit bien les gaz réels à faible pression (au voisinage de la pression atmosphérique ou en dessous) et loin de leur liquéfaction. Il devient imprécis à haute pression, quand les molécules sont si proches que leur volume propre et leurs interactions ne sont plus négligeables, et à basse température, près de la condensation. Il ne s'applique pas aux liquides ni aux solides.",
              ],
              box: { label: "À retenir", text: "Gaz parfait : molécules ponctuelles, sans interaction à distance. Bon modèle pour les gaz à faible pression ; limites : hautes pressions, basses températures, voisinage de la liquéfaction." },
            },
          ],
          keyPoints: [
            "Grandeurs macroscopiques p, V, T, n, ρ : comportement collectif d'un très grand nombre de molécules.",
            "Pression : chocs des molécules sur les parois ; température : agitation thermique.",
            "T(K) = θ(°C) + 273,15.",
            "pV = nRT en unités SI (Pa, m³, mol, K) ; R = 8,314 J·mol⁻¹·K⁻¹.",
            "ρ = pM ÷ (RT) ; volume molaire Vm = RT ÷ p, environ 24,1 L à 20 °C sous 1,013 × 10⁵ Pa.",
            "Limites du modèle : hautes pressions, basses températures, voisinage de la liquéfaction.",
          ],
          example: {
            statement: "Une bouteille de plongée de volume intérieur V = 12 L contient de l'air à la pression p = 2,0 × 10⁷ Pa (200 bar) et à la température θ = 20 °C. On assimile l'air à un gaz parfait de masse molaire M = 29 g·mol⁻¹ ; R = 8,314 J·mol⁻¹·K⁻¹. a) Calculer la quantité de matière d'air. b) En déduire la masse d'air. c) Quel volume occuperait cet air à 20 °C sous 1,0 × 10⁵ Pa ? d) Le modèle du gaz parfait est-il parfaitement fiable ici ?",
            solution: [
              "Conversions : V = 12 × 10⁻³ m³ ; T = 20 + 273,15 = 293,15 K.",
              "a) n = pV ÷ (RT) = 2,0 × 10⁷ × 12 × 10⁻³ ÷ (8,314 × 293,15) = 2,4 × 10⁵ ÷ 2 437 ≈ 98 mol.",
              "b) m = n M = 98,5 × 29 ≈ 2,86 × 10³ g, soit environ 2,9 kg.",
              "c) À n et T constants, pV est constant : V' = pV ÷ p' = 2,0 × 10⁷ × 12 ÷ 1,0 × 10⁵ = 2 400 L, soit 2,4 m³.",
              "d) À 200 bar, les molécules sont beaucoup plus proches qu'à la pression atmosphérique : leur volume propre et leurs interactions ne sont plus tout à fait négligeables, le modèle ne donne qu'une valeur approchée.",
              "Réponse : n ≈ 98 mol ; m ≈ 2,9 kg ; 2,4 m³ d'air à la pression atmosphérique ; résultat approché car la pression est élevée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un ballon contient 0,50 mol d'hélium à 25 °C, sous une pression de 1,0 × 10⁵ Pa. En assimilant l'hélium à un gaz parfait, calculer le volume du ballon en litres. Donnée : R = 8,314 J·mol⁻¹·K⁻¹.",
              hint: "Convertissez la température en kelvins, appliquez V = nRT ÷ p : le résultat est en m³, à convertir en litres.",
              solution: [
                "T = 25 + 273,15 = 298,15 K.",
                "V = nRT ÷ p = 0,50 × 8,314 × 298,15 ÷ 1,0 × 10⁵ ≈ 1,24 × 10⁻² m³.",
                "Réponse : V ≈ 12 L.",
              ],
            },
            {
              level: 2,
              statement: "Avant un trajet, la pression (absolue) de l'air d'un pneu vaut 2,2 × 10⁵ Pa à 15 °C. Après le trajet, la température de l'air du pneu atteint 45 °C ; on suppose que le volume du pneu n'a pas changé et qu'il n'y a pas de fuite. a) Calculer la nouvelle pression. b) Interpréter cette augmentation à l'échelle microscopique. c) Pourquoi conseille-t-on de contrôler la pression des pneus à froid ?",
              hint: "À n et V constants, p ÷ T est constant, avec T en kelvins.",
              solution: [
                "a) T₁ = 288,15 K ; T₂ = 318,15 K. p₂ = p₁ × T₂ ÷ T₁ = 2,2 × 10⁵ × 318,15 ÷ 288,15 ≈ 2,4 × 10⁵ Pa.",
                "b) Les molécules sont plus agitées : elles frappent les parois plus souvent et plus violemment, ce qui augmente la pression.",
                "c) La pression mesurée dépend de la température ; les valeurs recommandées par le constructeur correspondent à des pneus froids. Mesurée à chaud, la pression paraîtrait trop forte et l'on risquerait de dégonfler le pneu à tort.",
                "Réponse : p₂ ≈ 2,4 × 10⁵ Pa, soit une hausse d'environ 10 %.",
              ],
            },
            {
              level: 3,
              statement: "On étudie l'air d'une montgolfière, assimilé à un gaz parfait de masse molaire M = 29 g·mol⁻¹, sous la pression p = 1,013 × 10⁵ Pa ; R = 8,314 J·mol⁻¹·K⁻¹. 1. Établir l'expression de la masse volumique d'un gaz parfait en fonction de p, M, R et T. 2. Calculer la masse volumique de l'air extérieur à 10 °C. 3. L'air de l'enveloppe est chauffé à 100 °C, à la même pression : calculer sa masse volumique. 4. L'enveloppe a un volume de 2 500 m³. La poussée d'Archimède compense le poids de l'air chaud et celui du reste de la montgolfière : quelle masse (enveloppe, nacelle, passagers) peut-elle soulever au maximum ? 5. Interpréter à l'échelle microscopique la différence de masse volumique.",
              hint: "Partez de pV = nRT et de m = nM. Pour la question 4, la masse maximale soulevée vaut (ρext - ρint) × V.",
              solution: [
                "1. pV = nRT et n = m ÷ M, donc pV = (m ÷ M) RT, d'où ρ = m ÷ V = pM ÷ (RT).",
                "2. Text = 283,15 K : ρext = 1,013 × 10⁵ × 0,029 ÷ (8,314 × 283,15) = 2 938 ÷ 2 354 ≈ 1,25 kg·m⁻³.",
                "3. Tint = 373,15 K : ρint = 2 938 ÷ (8,314 × 373,15) = 2 938 ÷ 3 102 ≈ 0,947 kg·m⁻³.",
                "4. Équilibre : ρext V g = ρint V g + Mmax g, donc Mmax = (ρext - ρint) V = (1,248 - 0,947) × 2 500 ≈ 0,301 × 2 500 ≈ 7,5 × 10² kg.",
                "5. À pression égale, les molécules d'air chaud, plus agitées, frappent les parois plus violemment ; pour exercer la même pression, elles doivent être moins nombreuses par unité de volume : l'air chaud est moins dense.",
                "Réponse : ρ = pM ÷ (RT) ; ρext ≈ 1,25 kg·m⁻³ ; ρint ≈ 0,95 kg·m⁻³ ; masse soulevable d'environ 750 kg.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur à son unité dans le Système international.",
            pairs: [
              { left: "Pression p", right: "pascal (Pa)" },
              { left: "Volume V", right: "mètre cube (m³)" },
              { left: "Température thermodynamique T", right: "kelvin (K)" },
              { left: "Quantité de matière n", right: "mole (mol)" },
              { left: "Constante des gaz parfaits R", right: "J·mol⁻¹·K⁻¹" },
              { left: "Masse volumique ρ", right: "kg·m⁻³" },
            ],
          },
          quiz: [
            {
              q: "Une température de 25 °C correspond à :",
              options: ["-248 K", "25 K", "298 K", "373 K"],
              answer: 2,
              why: "T = 25 + 273,15 ≈ 298 K.",
            },
            {
              q: "Dans le modèle du gaz parfait, les molécules sont :",
              options: ["ponctuelles et sans interaction à distance", "immobiles", "liées entre elles par des liaisons covalentes", "de volume égal à celui du récipient"],
              answer: 0,
              why: "On néglige le volume propre des molécules et leurs interactions, sauf au moment des chocs.",
            },
            {
              q: "À volume et quantité de matière constants, si la température absolue double, la pression :",
              options: ["est divisée par 2", "double", "ne change pas", "est multipliée par 4"],
              answer: 1,
              why: "p = nRT ÷ V : à n et V constants, p est proportionnelle à T.",
            },
            {
              q: "Quelle est l'origine microscopique de la pression d'un gaz ?",
              options: ["Le poids des molécules du gaz", "Les liaisons chimiques entre les molécules du gaz", "La couleur et l'odeur du gaz", "Les chocs des molécules sur les parois"],
              answer: 3,
              why: "À chaque choc, une molécule exerce une petite force sur la paroi ; l'effet de très nombreux chocs donne la force pressante.",
            },
            {
              q: "Dans pV = nRT, le volume doit être exprimé en :",
              options: ["m³", "L", "mL", "cm³"],
              answer: 0,
              why: "Avec R = 8,314 J·mol⁻¹·K⁻¹, toutes les grandeurs sont en unités SI : p en Pa, V en m³, T en K.",
            },
          ],
          trap: "Utiliser la température en degrés Celsius ou le volume en litres dans pV = nRT : il faut T en kelvins, V en m³ et p en pascals, sinon le résultat est faux (parfois même négatif).",
          method: "Avant d'utiliser pV = nRT, écrivez une ligne de conversion de toutes les données en unités SI. Pour comparer deux états d'un même gaz, écrivez p₁V₁ ÷ T₁ = p₂V₂ ÷ T₂ : p et V peuvent alors garder la même unité des deux côtés, mais T doit toujours être en kelvins.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'premier-principe',
          title: "Le premier principe de la thermodynamique",
          minutes: 30,
          objectives: [
            "Citer les différentes contributions microscopiques à l'énergie interne d'un système.",
            "Énoncer et appliquer le premier principe de la thermodynamique, ΔU = W + Q, à un système au repos macroscopique.",
            "Exploiter l'expression de la variation d'énergie interne d'un système incompressible, ΔU = C ΔT, et prévoir le sens d'un transfert thermique.",
          ],
          course: [
            {
              heading: "L'énergie interne",
              paragraphs: [
                "L'énergie totale d'un système est la somme de son énergie mécanique macroscopique (énergie cinétique de l'ensemble et énergie potentielle liée à sa position) et de son énergie interne U. L'énergie interne regroupe les énergies à l'échelle microscopique : les énergies cinétiques d'agitation des particules, liées à la température, et les énergies potentielles d'interaction entre particules, liées à l'état physique et aux liaisons chimiques.",
                "Une tasse de thé posée sur une table garde la même énergie mécanique, mais son énergie interne diminue quand elle refroidit. On ne sait pas mesurer U elle-même : seules ses variations ΔU sont accessibles et utiles. L'énergie interne s'exprime en joules (J).",
              ],
              box: { label: "Définition", text: "Énergie interne U : somme des énergies cinétiques microscopiques (agitation thermique) et des énergies potentielles d'interaction microscopiques des particules du système. Énergie totale : E = Em + U." },
            },
            {
              heading: "Deux modes de transfert : travail et transfert thermique",
              paragraphs: [
                "Un système fermé peut échanger de l'énergie avec l'extérieur de deux façons. Le travail W est un transfert d'énergie associé à une action mécanique macroscopique (un piston qui comprime un gaz, un agitateur qui brasse un liquide) ou électrique (le courant qui traverse un conducteur ohmique : We = U I Δt). Le transfert thermique Q, souvent appelé chaleur, est un transfert d'énergie désordonné à l'échelle microscopique, dû à une différence de température : il se fait spontanément du corps le plus chaud vers le corps le plus froid.",
                "Convention de signe : W et Q sont comptés positivement s'ils sont reçus par le système, négativement s'ils sont cédés. Un gaz que l'on comprime reçoit du travail (W > 0) ; une boisson chaude qui refroidit cède de l'énergie par transfert thermique (Q < 0).",
              ],
              box: { label: "Règle", text: "Convention : une énergie reçue par le système est positive, une énergie cédée est négative. Un transfert thermique se fait spontanément du corps le plus chaud vers le corps le plus froid." },
            },
            {
              heading: "Le premier principe",
              paragraphs: [
                "Le premier principe de la thermodynamique exprime la conservation de l'énergie : la variation de l'énergie totale d'un système fermé est égale à l'énergie qu'il échange avec l'extérieur, ΔEm + ΔU = W + Q. Pour un système au repos macroscopique, dont l'énergie mécanique ne varie pas, il s'écrit : ΔU = W + Q.",
                "L'énergie ne se crée pas et ne disparaît pas : elle se transfère ou change de forme. Quand vous frottez vos mains, le travail des forces de frottement augmente leur énergie interne et leur température monte. Quand une voiture freine, son énergie cinétique est convertie en énergie interne des disques et des plaquettes, qui chauffent. Une transformation sans transfert thermique est dite adiabatique : Q = 0 et ΔU = W.",
              ],
              box: { label: "Loi", text: "Premier principe (système fermé au repos macroscopique) : ΔU = W + Q. En général : ΔEm + ΔU = W + Q." },
            },
            {
              heading: "Système incompressible et capacité thermique",
              paragraphs: [
                "Pour un système incompressible (un solide ou un liquide, dont le volume varie très peu) qui ne change pas d'état, la variation d'énergie interne est proportionnelle à la variation de température : ΔU = C × ΔT = m × c × ΔT. C est la capacité thermique du système (en J·K⁻¹) et c la capacité thermique massique du matériau (en J·kg⁻¹·K⁻¹). Une variation de 1 K est égale à une variation de 1 °C : on peut calculer ΔT avec des températures en degrés Celsius.",
                "L'eau a une capacité thermique massique élevée, c ≈ 4,18 × 10³ J·kg⁻¹·K⁻¹ : il faut 4 180 J pour élever de 1 °C la température de 1 kg d'eau. C'est pourquoi les océans modèrent le climat et l'eau est un excellent fluide pour transporter l'énergie dans un chauffage central. Exemple : chauffer 1,5 kg d'eau de 20 °C à 100 °C demande ΔU = 1,5 × 4 180 × 80 ≈ 5,0 × 10⁵ J ; une bouilloire de 2,0 kW fournit cette énergie en 250 s environ, si l'on néglige les pertes.",
              ],
              box: { label: "Formule", text: "Système incompressible sans changement d'état : ΔU = m c ΔT = C ΔT ; c(eau) ≈ 4,18 × 10³ J·kg⁻¹·K⁻¹. ΔT a la même valeur en kelvins et en degrés Celsius." },
            },
          ],
          keyPoints: [
            "U = énergies cinétiques d'agitation + énergies potentielles d'interaction microscopiques ; seules ses variations comptent.",
            "Travail W : transfert ordonné (mécanique, électrique) ; transfert thermique Q : transfert désordonné dû à un écart de température.",
            "Énergie reçue : positive ; énergie cédée : négative.",
            "Premier principe pour un système au repos : ΔU = W + Q.",
            "Système incompressible : ΔU = m c ΔT ; c(eau) ≈ 4 180 J·kg⁻¹·K⁻¹.",
            "Le transfert thermique va spontanément du chaud vers le froid.",
          ],
          example: {
            statement: "Un chauffe-eau électrique contient 150 L d'eau (masse 150 kg), qu'une résistance de puissance 2,2 kW chauffe de 15 °C à 60 °C. On néglige les pertes vers l'extérieur ; c(eau) = 4,18 × 10³ J·kg⁻¹·K⁻¹. a) Calculer la variation d'énergie interne de l'eau. b) Préciser, pour le système {eau}, les valeurs de W et de Q. c) Calculer la durée de la chauffe.",
            solution: [
              "Système : l'eau du ballon, incompressible, sans changement d'état, au repos macroscopique.",
              "a) ΔU = m c ΔT = 150 × 4,18 × 10³ × (60 - 15) ≈ 2,82 × 10⁷ J.",
              "b) L'eau ne reçoit pas de travail (W = 0) ; elle reçoit de l'énergie par transfert thermique de la part de la résistance, plus chaude qu'elle. Premier principe : ΔU = W + Q = Q, donc Q ≈ 2,82 × 10⁷ J, positif car reçu.",
              "c) Sans pertes, toute l'énergie électrique reçue par la résistance est transférée à l'eau : Δt = Q ÷ P = 2,82 × 10⁷ ÷ 2,2 × 10³ ≈ 1,28 × 10⁴ s.",
              "Réponse : ΔU = Q ≈ 2,8 × 10⁷ J ; W = 0 ; la chauffe dure environ 1,3 × 10⁴ s, soit environ 3 h 34 min.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Quelle énergie faut-il transférer à 250 g d'eau pour faire passer sa température de 18 °C à 90 °C ? Donnée : c(eau) = 4,18 × 10³ J·kg⁻¹·K⁻¹.",
              hint: "Convertissez la masse en kilogrammes et utilisez ΔU = m c ΔT ; le système ne reçoit pas de travail, donc Q = ΔU.",
              solution: [
                "m = 0,250 kg ; ΔT = 90 - 18 = 72 °C, soit 72 K.",
                "Q = ΔU = m c ΔT = 0,250 × 4,18 × 10³ × 72 ≈ 7,5 × 10⁴ J.",
                "Réponse : environ 75 kJ.",
              ],
            },
            {
              level: 2,
              statement: "Dans un récipient parfaitement isolé, de capacité thermique négligeable, on mélange 200 g d'eau à 80 °C et 300 g d'eau à 20 °C. Déterminer la température finale du mélange à l'aide du premier principe.",
              hint: "Le système {deux masses d'eau} n'échange ni travail ni transfert thermique avec l'extérieur : sa variation d'énergie interne totale est nulle.",
              solution: [
                "Système : les 500 g d'eau, isolés, au repos : W = 0 et Q = 0, donc ΔU = 0.",
                "ΔU = ΔU₁ + ΔU₂ = m₁ c (Tf - 80) + m₂ c (Tf - 20) = 0.",
                "En simplifiant par c : 0,200 (Tf - 80) + 0,300 (Tf - 20) = 0, soit 0,500 Tf = 16 + 6 = 22.",
                "Tf = 44 °C. L'eau chaude a cédé de l'énergie (ΔU₁ < 0), l'eau froide en a reçu autant (ΔU₂ > 0).",
                "Réponse : la température finale est de 44 °C.",
              ],
            },
            {
              level: 3,
              statement: "Pour identifier un métal, on porte un bloc de ce métal de masse 150 g à 100,0 °C, puis on le plonge dans un calorimètre parfaitement isolé, de capacité thermique négligeable, contenant 200 g d'eau à 20,0 °C. La température finale d'équilibre vaut 31,1 °C. Donnée : c(eau) = 4,18 × 10³ J·kg⁻¹·K⁻¹. 1. Prévoir le sens des transferts thermiques entre le métal et l'eau. 2. Appliquer le premier principe au système {eau + métal} pour établir une relation entre les variations d'énergie interne. 3. En déduire la capacité thermique massique du métal. 4. Identifier le métal à l'aide des valeurs suivantes (en J·kg⁻¹·K⁻¹) : aluminium 897 ; fer 444 ; cuivre 385. 5. En réalité, le calorimètre absorbe un peu d'énergie. La valeur calculée est-elle alors surestimée ou sous-estimée ?",
              hint: "Le système global est isolé : ΔU(eau) + ΔU(métal) = 0. Pour la question 5, demandez-vous quelle part de l'énergie cédée par le métal n'a pas été comptée.",
              solution: [
                "1. Le métal (100 °C) est plus chaud que l'eau (20 °C) : le transfert thermique va spontanément du métal vers l'eau, jusqu'à l'égalité des températures.",
                "2. Système {eau + métal} isolé, au repos : W = 0 et Q = 0, donc ΔU = ΔU(eau) + ΔU(métal) = 0.",
                "3. ΔU(eau) = 0,200 × 4,18 × 10³ × (31,1 - 20,0) = 836 × 11,1 ≈ 9,28 × 10³ J. ΔU(métal) = 0,150 × c × (31,1 - 100,0) = -10,3 × c.",
                "Donc 9,28 × 10³ - 10,3 × c = 0, d'où c = 9,28 × 10³ ÷ 10,3 ≈ 9,0 × 10² J·kg⁻¹·K⁻¹.",
                "4. La valeur la plus proche est celle de l'aluminium (897 J·kg⁻¹·K⁻¹).",
                "5. Si le calorimètre absorbe de l'énergie, le métal a cédé en réalité plus d'énergie que celle reçue par l'eau seule. En ne comptant que l'eau, on sous-estime l'énergie cédée, donc on sous-estime c.",
                "Réponse : c ≈ 9,0 × 10² J·kg⁻¹·K⁻¹, le métal est de l'aluminium ; la valeur est légèrement sous-estimée si l'on néglige le calorimètre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un bilan d'énergie avec le premier principe.",
            items: [
              "Définir précisément le système étudié",
              "Vérifier qu'il est fermé et au repos macroscopique",
              "Identifier les transferts : travail W et transfert thermique Q",
              "Attribuer un signe à chaque transfert (reçu positif, cédé négatif)",
              "Écrire le premier principe : ΔU = W + Q",
              "Exprimer ΔU = m c ΔT pour un système incompressible et conclure",
            ],
          },
          quiz: [
            {
              q: "Le premier principe de la thermodynamique traduit :",
              options: ["la conservation de l'énergie", "la conservation de la température", "l'augmentation de la masse", "la conservation de la pression"],
              answer: 0,
              why: "La variation d'énergie du système est exactement égale à l'énergie échangée avec l'extérieur : l'énergie se conserve.",
            },
            {
              q: "Un gaz reçoit un travail de 300 J et cède 120 J par transfert thermique. Sa variation d'énergie interne vaut :",
              options: ["420 J", "-180 J", "180 J", "-420 J"],
              answer: 2,
              why: "ΔU = W + Q = 300 + (-120) = 180 J.",
            },
            {
              q: "Quelle énergie faut-il pour élever de 10 °C la température de 2,0 kg d'eau (c = 4,18 × 10³ J·kg⁻¹·K⁻¹) ?",
              options: ["4,2 × 10³ J", "2,1 × 10³ J", "8,4 × 10³ J", "8,4 × 10⁴ J"],
              answer: 3,
              why: "Q = m c ΔT = 2,0 × 4,18 × 10³ × 10 ≈ 8,4 × 10⁴ J.",
            },
            {
              q: "Un transfert thermique se produit spontanément :",
              options: ["du corps le plus froid vers le plus chaud", "du corps le plus chaud vers le plus froid", "du corps le plus lourd vers le plus léger", "uniquement entre deux liquides"],
              answer: 1,
              why: "L'énergie d'agitation passe spontanément du corps dont la température est la plus élevée vers celui dont la température est la plus basse.",
            },
            {
              q: "Une transformation adiabatique est une transformation :",
              options: ["à température constante (isotherme)", "à pression constante", "sans travail échangé", "sans transfert thermique"],
              answer: 3,
              why: "Adiabatique signifie Q = 0 ; le premier principe se réduit alors à ΔU = W.",
            },
          ],
          trap: "Se tromper de signe : Q et W sont positifs quand le système reçoit l'énergie. Autre confusion fréquente : assimiler température et transfert thermique ; un système peut recevoir de l'énergie par travail et voir sa température augmenter sans aucun transfert thermique.",
          method: "Commencez toujours par écrire « Système : ... », puis dessinez une flèche pour chaque échange d'énergie, entrante ou sortante : le signe de chaque terme du premier principe se lit directement sur ce schéma.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transferts-thermiques',
          title: "Transferts thermiques et évolution de la température",
          minutes: 35,
          objectives: [
            "Caractériser les trois modes de transfert thermique : conduction, convection et rayonnement.",
            "Exploiter la relation entre flux thermique, résistance thermique et écart de température, et calculer la résistance thermique d'une paroi plane.",
            "Effectuer un bilan d'énergie pour un système incompressible échangeant de l'énergie par transfert thermique modélisé à l'aide de la loi de Newton fournie, et établir l'expression de sa température en fonction du temps.",
          ],
          course: [
            {
              heading: "Trois modes de transfert thermique",
              paragraphs: [
                "La conduction est un transfert d'énergie de proche en proche, sans déplacement global de matière : les particules les plus agitées transmettent une partie de leur énergie à leurs voisines, par chocs ou par vibrations. C'est le mode principal dans les solides. Les métaux sont de bons conducteurs thermiques ; l'air immobile et les matériaux qui en emprisonnent beaucoup (laine de verre, polystyrène expansé) sont de bons isolants.",
                "La convection est un transfert associé à un déplacement global de matière dans un fluide : dans une casserole, l'eau chauffée au fond, moins dense, monte et est remplacée par de l'eau plus froide. Le rayonnement est un transfert par ondes électromagnétiques ; il ne nécessite aucun milieu matériel : c'est ainsi que l'énergie du Soleil nous parvient à travers le vide spatial.",
              ],
              box: { label: "Définition", text: "Conduction : de proche en proche, sans déplacement de matière. Convection : par déplacement de matière dans un fluide. Rayonnement : par ondes électromagnétiques, possible même dans le vide." },
            },
            {
              heading: "Flux thermique et résistance thermique",
              paragraphs: [
                "Le flux thermique Φ est l'énergie transférée par transfert thermique par unité de temps : Φ = Q ÷ Δt, en watts (W). Pour une paroi séparant deux milieux de températures constantes T₁ > T₂, le flux qui la traverse, du milieu 1 vers le milieu 2, est proportionnel à l'écart de température : Φ = (T₁ - T₂) ÷ Rth, où Rth est la résistance thermique de la paroi, en K·W⁻¹. Plus Rth est grande, plus la paroi est isolante.",
                "Pour une paroi plane d'épaisseur e, d'aire S, faite d'un matériau de conductivité thermique λ (en W·m⁻¹·K⁻¹) : Rth = e ÷ (λ S). Ordres de grandeur de λ : cuivre, environ 400 ; verre, environ 1 ; béton, de l'ordre de 1 à 2 ; laine de verre ou polystyrène, environ 0,04. Quand plusieurs couches sont accolées (mur et isolant), leurs résistances thermiques s'additionnent.",
                "Exemple : un mur de briques (λ = 0,84 W·m⁻¹·K⁻¹) d'épaisseur 20 cm et d'aire 10 m² a une résistance Rth = 0,20 ÷ (0,84 × 10) ≈ 2,38 × 10⁻² K·W⁻¹. Avec 20 °C à l'intérieur et 5 °C dehors, le flux perdu vaut Φ = 15 ÷ 2,38 × 10⁻² ≈ 630 W. En ajoutant 10 cm de polystyrène (Rth = 0,10 ÷ (0,04 × 10) = 0,25 K·W⁻¹), la résistance totale passe à environ 0,27 K·W⁻¹ et le flux tombe à environ 55 W.",
              ],
              box: { label: "Formule", text: "Φ = Q ÷ Δt (en W) ; Φ = (T₁ - T₂) ÷ Rth ; paroi plane : Rth = e ÷ (λ S), en K·W⁻¹ ; couches accolées : les résistances thermiques s'additionnent." },
            },
            {
              heading: "La loi phénoménologique de Newton",
              paragraphs: [
                "Considérons un système incompressible de température T, en contact avec un milieu extérieur de température Text constante, appelé thermostat (l'air d'une pièce, l'eau d'un lac). Il échange de l'énergie par transfert thermique à travers sa surface. La loi phénoménologique de Newton modélise le flux thermique reçu par le système : Φ = h S (Text - T), où S est l'aire de la surface d'échange et h le coefficient d'échange (en W·m⁻²·K⁻¹). Si T > Text, Φ < 0 : le système cède de l'énergie et se refroidit.",
                "Bilan d'énergie entre les dates t et t + dt : le système, au repos et sans travail échangé, vérifie dU = Φ dt, avec dU = m c dT. On obtient m c dT/dt = h S (Text - T), que l'on écrit sous la forme dT/dt + T ÷ τ = Text ÷ τ, avec τ = m c ÷ (h S). La grandeur τ est homogène à un temps : c'est le temps caractéristique de l'évolution.",
              ],
              box: { label: "Loi", text: "Loi de Newton (fournie) : Φ = h S (Text - T), flux reçu par le système. Bilan : m c dT/dt = h S (Text - T) ; temps caractéristique τ = m c ÷ (h S)." },
            },
            {
              heading: "L'évolution de la température au cours du temps",
              paragraphs: [
                "Cette équation différentielle linéaire du premier ordre à coefficients constants a pour solutions T(t) = Text + A e^(-t/τ). La condition initiale T(0) = T₀ donne A = T₀ - Text, d'où T(t) = Text + (T₀ - Text) e^(-t/τ). La température tend exponentiellement vers celle du thermostat. Au bout de τ, il reste 37 % de l'écart initial (e⁻¹ ≈ 0,37) ; au bout de 5τ, il en reste moins de 1 % : l'équilibre thermique est pratiquement atteint.",
                "Exemple : un thé à 80 °C refroidit dans une pièce à 20 °C avec τ = 15 min. Il atteint 40 °C lorsque 60 e^(-t/τ) = 20, soit e^(-t/τ) = 1/3 et t = τ ln 3 ≈ 16,5 min. Pour ralentir le refroidissement, il faut augmenter τ : plus grande masse, matériau de grande capacité thermique, surface d'échange plus petite, coefficient h plus faible (tasse isolante, couvercle).",
              ],
              box: { label: "Formule", text: "T(t) = Text + (T₀ - Text) e^(-t/τ), avec τ = m c ÷ (h S). Après τ, il reste 37 % de l'écart initial ; après 5τ, l'équilibre est pratiquement atteint." },
            },
          ],
          keyPoints: [
            "Conduction (de proche en proche), convection (mouvement de fluide), rayonnement (ondes électromagnétiques, même dans le vide).",
            "Flux thermique Φ = Q ÷ Δt, en W ; Φ = (T₁ - T₂) ÷ Rth.",
            "Paroi plane : Rth = e ÷ (λ S) ; couches accolées : résistances additionnées.",
            "Loi de Newton : Φ = h S (Text - T) ; bilan : m c dT/dt = h S (Text - T).",
            "T(t) = Text + (T₀ - Text) e^(-t/τ), avec τ = m c ÷ (h S) ; équilibre pratiquement atteint après 5τ.",
          ],
          example: {
            statement: "Un mur de maison d'aire S = 12 m² est constitué de 20 cm de béton (λ = 1,75 W·m⁻¹·K⁻¹) doublé de 8,0 cm de laine de verre (λ = 0,040 W·m⁻¹·K⁻¹). La température intérieure vaut 19 °C, la température extérieure 4 °C. a) Calculer la résistance thermique de chaque couche. b) En déduire la résistance thermique totale du mur. c) Calculer le flux thermique qui traverse le mur. d) Calculer l'énergie perdue en 24 h, en kWh. e) Quel serait le flux sans la laine de verre ?",
            solution: [
              "a) Béton : R₁ = e ÷ (λ S) = 0,20 ÷ (1,75 × 12) ≈ 9,5 × 10⁻³ K·W⁻¹. Laine de verre : R₂ = 0,080 ÷ (0,040 × 12) ≈ 0,167 K·W⁻¹.",
              "b) Les couches sont accolées : Rth = R₁ + R₂ ≈ 0,0095 + 0,167 ≈ 0,176 K·W⁻¹.",
              "c) Φ = (Tint - Text) ÷ Rth = (19 - 4) ÷ 0,176 ≈ 85 W.",
              "d) Q = Φ × Δt = 85 W × 24 h ≈ 2,0 × 10³ Wh, soit environ 2,0 kWh (ou 85 × 86 400 ≈ 7,3 × 10⁶ J).",
              "e) Sans isolant : Φ = 15 ÷ 9,5 × 10⁻³ ≈ 1,6 × 10³ W, presque vingt fois plus.",
              "Réponse : Rth ≈ 0,18 K·W⁻¹ ; Φ ≈ 85 W ; environ 2 kWh perdus par jour ; l'isolant est décisif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une porte en bois (λ = 0,15 W·m⁻¹·K⁻¹) a une aire de 2,0 m² et une épaisseur de 4,0 cm. Elle sépare une pièce à 20 °C d'un garage à 2 °C. Calculer sa résistance thermique, puis le flux thermique qui la traverse.",
              hint: "Rth = e ÷ (λ S) avec e en mètres ; puis Φ = ΔT ÷ Rth.",
              solution: [
                "Rth = 0,040 ÷ (0,15 × 2,0) = 0,040 ÷ 0,30 ≈ 0,133 K·W⁻¹.",
                "Φ = (20 - 2) ÷ 0,133 = 18 ÷ 0,133 ≈ 135 W.",
                "Réponse : Rth ≈ 0,13 K·W⁻¹ ; Φ ≈ 1,4 × 10² W, de la pièce vers le garage.",
              ],
            },
            {
              level: 2,
              statement: "Une canette à 25 °C est placée dans un réfrigérateur à 4 °C. On admet que sa température suit la loi T(t) = Text + (T₀ - Text) e^(-t/τ), avec τ = 20 min. a) Calculer la température de la canette au bout de 20 min. b) Au bout de combien de temps atteint-elle 8 °C ? c) Au bout de combien de temps peut-on considérer que l'équilibre est atteint ?",
              hint: "Pour la question b), isolez l'exponentielle puis prenez le logarithme népérien : e^(-t/τ) = k donne t = -τ ln k.",
              solution: [
                "a) T(τ) = 4 + (25 - 4) e⁻¹ = 4 + 21 × 0,368 ≈ 4 + 7,7 ≈ 11,7 °C.",
                "b) 8 = 4 + 21 e^(-t/τ), donc e^(-t/τ) = 4 ÷ 21, d'où t = τ ln(21 ÷ 4) = 20 × ln 5,25 ≈ 20 × 1,66 ≈ 33 min.",
                "c) On considère l'équilibre pratiquement atteint au bout de 5τ = 100 min, soit environ 1 h 40 min.",
                "Réponse : environ 11,7 °C après 20 min ; 8 °C après environ 33 min ; équilibre pratiquement atteint après environ 100 min.",
              ],
            },
            {
              level: 3,
              statement: "Une bouillotte contient m = 1,5 kg d'eau (c = 4,18 × 10³ J·kg⁻¹·K⁻¹) à T₀ = 70 °C. Elle est placée dans un lit dont l'environnement est assimilé à un thermostat de température Text = 18 °C. On modélise le flux thermique reçu par l'eau par la loi de Newton Φ = h S (Text - T), avec h S = 0,50 W·K⁻¹. 1. Effectuer un bilan d'énergie pour l'eau entre t et t + dt et établir l'équation différentielle vérifiée par T(t). 2. Vérifier que T(t) = Text + (T₀ - Text) e^(-t/τ) est solution, et donner l'expression puis la valeur de τ. 3. Calculer le flux thermique à l'instant initial et commenter son signe. 4. Calculer la température de l'eau au bout de 8 h.",
              hint: "Premier principe sans travail : dU = Φ dt et dU = m c dT. Pour vérifier une solution, calculez dT/dt et remplacez dans l'équation, sans oublier la condition initiale.",
              solution: [
                "1. Système : l'eau, incompressible, au repos, W = 0. Entre t et t + dt : dU = Φ dt, avec dU = m c dT. Donc m c dT/dt = h S (Text - T), soit dT/dt + (h S ÷ (m c)) T = (h S ÷ (m c)) Text.",
                "2. Avec T(t) = Text + (T₀ - Text) e^(-t/τ) : dT/dt = -(T₀ - Text) e^(-t/τ) ÷ τ = -(T - Text) ÷ τ. L'équation est vérifiée si 1 ÷ τ = h S ÷ (m c), c'est-à-dire τ = m c ÷ (h S). De plus, T(0) = Text + T₀ - Text = T₀ : la condition initiale est respectée.",
                "τ = 1,5 × 4,18 × 10³ ÷ 0,50 ≈ 1,25 × 10⁴ s, soit environ 3,5 h.",
                "3. Φ(0) = h S (Text - T₀) = 0,50 × (18 - 70) = -26 W. Le signe négatif indique que l'eau cède de l'énergie à son environnement : elle se refroidit.",
                "4. t = 8 h = 2,88 × 10⁴ s ; t ÷ τ = 2,88 × 10⁴ ÷ 1,254 × 10⁴ ≈ 2,30 ; e^(-2,30) ≈ 0,10. T = 18 + 52 × 0,10 ≈ 18 + 5,2 ≈ 23 °C.",
                "Réponse : τ = m c ÷ (h S) ≈ 1,25 × 10⁴ s ; Φ(0) = -26 W ; après 8 h, l'eau est à environ 23 °C.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre l'établissement de la loi d'évolution de la température.",
            items: [
              "Définir le système incompressible et le thermostat de température Text",
              "Écrire la loi de Newton : Φ = h S (Text - T)",
              "Appliquer le premier principe entre t et t + dt : m c dT = Φ dt",
              "Obtenir l'équation dT/dt + T ÷ τ = Text ÷ τ, avec τ = m c ÷ (h S)",
              "Écrire les solutions T(t) = Text + A e^(-t/τ)",
              "Déterminer A avec la condition initiale : A = T₀ - Text",
            ],
          },
          quiz: [
            {
              q: "Par quel mode de transfert l'énergie du Soleil traverse-t-elle le vide spatial ?",
              options: ["La conduction", "La convection", "Le rayonnement", "La diffusion de matière"],
              answer: 2,
              why: "Seul le rayonnement, porté par des ondes électromagnétiques, ne nécessite aucun milieu matériel.",
            },
            {
              q: "La résistance thermique d'une paroi plane d'épaisseur e, d'aire S et de conductivité λ vaut :",
              options: ["λ e ÷ S", "e ÷ (λ S)", "λ S ÷ e", "S ÷ (λ e)"],
              answer: 1,
              why: "Une paroi plus épaisse isole mieux, une paroi plus grande ou plus conductrice laisse passer plus d'énergie : Rth = e ÷ (λ S).",
            },
            {
              q: "Un mur de résistance thermique 0,050 K·W⁻¹ sépare un intérieur à 20 °C d'un extérieur à 0 °C. Le flux thermique qui le traverse vaut :",
              options: ["1,0 W", "1,0 × 10³ W", "2,5 × 10⁻³ W", "4,0 × 10² W"],
              answer: 3,
              why: "Φ = ΔT ÷ Rth = 20 ÷ 0,050 = 400 W.",
            },
            {
              q: "Au bout d'une durée égale à 5τ, l'écart T - Text représente environ quelle fraction de l'écart initial ?",
              options: ["0,7 %", "36,8 %", "50 %", "5 %"],
              answer: 0,
              why: "e⁻⁵ ≈ 0,0067, soit moins de 1 % : l'équilibre est pratiquement atteint.",
            },
            {
              q: "Pour qu'un plat reste chaud plus longtemps, il faut :",
              options: ["augmenter la surface d'échange S avec l'air ambiant", "diminuer le temps caractéristique τ", "augmenter τ", "augmenter le coefficient d'échange h"],
              answer: 2,
              why: "Plus τ = m c ÷ (h S) est grand, plus la température évolue lentement : on réduit S ou h, par exemple avec un couvercle.",
            },
          ],
          trap: "Oublier le signe dans la loi de Newton : Φ = h S (Text - T) est le flux reçu par le système, négatif quand le système est plus chaud que l'extérieur. Autre erreur : croire que la température atteint Text au bout de τ, alors qu'il reste encore 37 % de l'écart.",
          method: "Pour vérifier une solution d'équation différentielle, contrôlez deux choses : elle satisfait l'équation (remplacez T et dT/dt) et elle respecte la condition initiale T(0) = T₀. Vérifiez aussi l'unité de τ = m c ÷ (h S) : des J·K⁻¹ divisés par des W·K⁻¹ donnent des secondes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'bilan-radiatif-terre',
          title: "Bilan radiatif de la Terre et effet de serre",
          minutes: 30,
          objectives: [
            "Utiliser la loi de Stefan-Boltzmann, fournie, pour relier la puissance surfacique rayonnée par un corps à sa température.",
            "Effectuer un bilan quantitatif d'énergie pour estimer la température terrestre moyenne.",
            "Discuter qualitativement de l'influence de l'albédo et de l'effet de serre sur la température terrestre moyenne.",
          ],
          course: [
            {
              heading: "Le rayonnement thermique et la loi de Stefan-Boltzmann",
              paragraphs: [
                "Tout corps émet un rayonnement électromagnétique qui dépend de sa température : c'est le rayonnement thermique. Plus le corps est chaud, plus il rayonne d'énergie et plus son rayonnement est décalé vers les courtes longueurs d'onde. Le Soleil, dont la surface est à environ 5 800 K, émet surtout dans le visible ; la surface de la Terre, à environ 288 K (15 °C), émet dans l'infrarouge, autour de 10 µm.",
                "Pour un corps noir, émetteur idéal dont la surface terrestre est un bon modèle dans l'infrarouge, la puissance rayonnée par unité de surface est donnée par la loi de Stefan-Boltzmann : P ÷ S = σ T⁴, avec σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴ et T en kelvins. La dépendance en T⁴ est très forte : doubler la température absolue multiplie la puissance surfacique rayonnée par 2⁴ = 16.",
              ],
              box: { label: "Formule", text: "Loi de Stefan-Boltzmann (fournie) : puissance surfacique rayonnée P ÷ S = σ T⁴, avec σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴ et T en K." },
            },
            {
              heading: "Ce que la Terre reçoit du Soleil",
              paragraphs: [
                "Au-dessus de l'atmosphère, une surface perpendiculaire aux rayons du Soleil reçoit une puissance surfacique d'environ 1 361 W·m⁻² : c'est la constante solaire. La Terre intercepte ce rayonnement sur un disque d'aire πR², mais, en moyenne sur une journée et sur tout le globe, elle le répartit sur sa surface sphérique d'aire 4πR², quatre fois plus grande. La puissance solaire moyenne reçue par mètre carré au sommet de l'atmosphère vaut donc environ 1 361 ÷ 4 ≈ 340 W·m⁻².",
                "Une partie de ce rayonnement est renvoyée vers l'espace sans être absorbée, par les nuages, les glaces, les déserts, l'atmosphère. La fraction réfléchie s'appelle l'albédo, noté A ; pour la Terre, A ≈ 0,30. La puissance surfacique moyenne absorbée vaut donc (1 - A) × 340 ≈ 240 W·m⁻². L'albédo d'une surface enneigée est élevé (de l'ordre de 0,8), celui d'un océan est faible (inférieur à 0,1).",
              ],
              box: { label: "Repère", text: "Constante solaire ≈ 1 361 W·m⁻² ; moyenne sur le globe ≈ 340 W·m⁻² (facteur 4 = 4πR² ÷ πR²) ; albédo terrestre ≈ 0,30 ; puissance surfacique absorbée ≈ 240 W·m⁻²." },
            },
            {
              heading: "Une Terre sans effet de serre",
              paragraphs: [
                "Lorsque la température moyenne est stable, la Terre est à l'équilibre radiatif : elle émet vers l'espace autant d'énergie qu'elle en absorbe. Si l'atmosphère n'absorbait pas l'infrarouge, la surface rayonnerait directement vers l'espace selon la loi de Stefan-Boltzmann, et l'équilibre s'écrirait : σ T⁴ = (1 - A) × 1 361 ÷ 4 ≈ 238 W·m⁻².",
                "On en déduit T⁴ = 238 ÷ (5,67 × 10⁻⁸) ≈ 4,2 × 10⁹ K⁴, soit T ≈ 255 K, environ -18 °C. Or la température moyenne observée à la surface de la Terre est d'environ 15 °C (288 K). L'écart d'environ 33 °C s'explique par l'effet de serre.",
              ],
              box: { label: "À retenir", text: "Équilibre radiatif : puissance absorbée = puissance émise. Sans effet de serre : σ T⁴ = (1 - A) × 340 W·m⁻², d'où T ≈ 255 K (-18 °C), alors que la moyenne observée est d'environ 288 K (15 °C)." },
            },
            {
              heading: "L'effet de serre et l'influence de l'albédo",
              paragraphs: [
                "L'atmosphère est presque transparente au rayonnement solaire visible, mais elle absorbe une grande partie du rayonnement infrarouge émis par la surface, principalement grâce à la vapeur d'eau, au dioxyde de carbone (CO₂), au méthane (CH₄) et au protoxyde d'azote (N₂O). Réchauffée, l'atmosphère rayonne à son tour dans toutes les directions, notamment vers le sol. La surface reçoit donc, en plus du rayonnement solaire, un rayonnement infrarouge venu de l'atmosphère : sa température d'équilibre est plus élevée. C'est l'effet de serre, phénomène naturel sans lequel la Terre serait gelée.",
                "La concentration atmosphérique en CO₂ est passée d'environ 280 ppm avant l'ère industrielle à plus de 420 ppm aujourd'hui, du fait de la combustion des énergies fossiles et de la déforestation. Cela renforce l'effet de serre : une part plus faible du rayonnement infrarouge s'échappe vers l'espace, et la surface doit se réchauffer pour retrouver l'équilibre. Inversement, une hausse de l'albédo (plus de neige, de glace, de nuages bas) tend à refroidir la planète, tandis que sa baisse (fonte des glaces, qui découvre des océans et des sols sombres) tend à la réchauffer : c'est une rétroaction qui amplifie le réchauffement.",
              ],
              box: { label: "Propriété", text: "Un albédo plus grand diminue la puissance absorbée et donc la température d'équilibre. Un effet de serre renforcé diminue la part du rayonnement infrarouge qui s'échappe vers l'espace et augmente la température de surface." },
            },
          ],
          keyPoints: [
            "Stefan-Boltzmann : P ÷ S = σ T⁴, avec T en K et σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴.",
            "Puissance solaire moyenne au sommet de l'atmosphère : 1 361 ÷ 4 ≈ 340 W·m⁻² (rapport des aires du disque et de la sphère).",
            "Albédo A ≈ 0,30 : puissance surfacique absorbée ≈ 240 W·m⁻².",
            "Sans effet de serre : T ≈ 255 K (-18 °C) ; température moyenne observée : environ 288 K (15 °C).",
            "Effet de serre : l'atmosphère (H₂O, CO₂, CH₄, N₂O) absorbe l'infrarouge terrestre et en renvoie une partie vers le sol.",
            "Albédo plus grand : refroidissement ; effet de serre renforcé : réchauffement.",
          ],
          example: {
            statement: "Estimer la température moyenne qu'aurait la surface terrestre sans effet de serre. Données : constante solaire 1 361 W·m⁻² ; albédo terrestre A = 0,30 ; σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴ ; la surface terrestre est assimilée à un corps noir pour son émission, et l'atmosphère est supposée transparente.",
            solution: [
              "Puissance solaire moyenne reçue par mètre carré : 1 361 ÷ 4 ≈ 340 W·m⁻² (le rayonnement intercepté par le disque πR² est réparti sur la sphère d'aire 4πR²).",
              "Puissance surfacique absorbée : (1 - 0,30) × 340 ≈ 238 W·m⁻².",
              "Équilibre radiatif : la puissance surfacique émise σ T⁴ est égale à la puissance surfacique absorbée, donc σ T⁴ = 238 W·m⁻².",
              "T⁴ = 238 ÷ (5,67 × 10⁻⁸) ≈ 4,20 × 10⁹ K⁴, d'où T = (4,20 × 10⁹)^(1/4) ≈ 255 K.",
              "Comparaison : la température moyenne observée, environ 288 K, est supérieure d'environ 33 K ; cet écart est dû à l'effet de serre.",
              "Réponse : environ 255 K, soit -18 °C, sans effet de serre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La température moyenne de la surface terrestre vaut 288 K. En l'assimilant à un corps noir, calculer la puissance surfacique qu'elle rayonne (σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴). Comparer à la puissance surfacique solaire absorbée, environ 240 W·m⁻², et proposer une explication.",
              hint: "Calculez 288⁴ en deux étapes (288² puis le carré du résultat), puis multipliez par σ.",
              solution: [
                "288² = 82 944 ; 288⁴ = 82 944² ≈ 6,88 × 10⁹ K⁴.",
                "P ÷ S = σ T⁴ = 5,67 × 10⁻⁸ × 6,88 × 10⁹ ≈ 390 W·m⁻².",
                "La surface émet environ 390 W·m⁻², davantage que les 240 W·m⁻² de rayonnement solaire absorbé. Ce n'est pas contradictoire : la surface reçoit aussi le rayonnement infrarouge émis par l'atmosphère vers le sol (effet de serre).",
                "Réponse : environ 390 W·m⁻² ; la différence est compensée par le rayonnement infrarouge renvoyé par l'atmosphère.",
              ],
            },
            {
              level: 2,
              statement: "Avec le modèle sans effet de serre (σ T⁴ = (1 - A) × 340 W·m⁻² ; σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴), on étudie l'influence de l'albédo A. a) Calculer la température d'équilibre si l'albédo valait 0,25. b) Calculer la température d'équilibre pour une Terre presque entièrement englacée, d'albédo 0,60. c) Comparer à la valeur de 255 K obtenue pour A = 0,30 et conclure.",
              hint: "Calculez d'abord la puissance absorbée, puis T⁴, puis prenez deux fois la racine carrée.",
              solution: [
                "a) (1 - 0,25) × 340 = 255 W·m⁻² ; T⁴ = 255 ÷ 5,67 × 10⁻⁸ ≈ 4,50 × 10⁹ K⁴ ; T ≈ 259 K.",
                "b) (1 - 0,60) × 340 = 136 W·m⁻² ; T⁴ = 136 ÷ 5,67 × 10⁻⁸ ≈ 2,40 × 10⁹ K⁴ ; T ≈ 221 K.",
                "c) Un albédo plus faible (0,25) réchauffe la planète d'environ 4 K ; un albédo plus fort (0,60) la refroidit d'environ 34 K. Plus la Terre réfléchit le rayonnement solaire, plus sa température d'équilibre est basse.",
                "Réponse : 259 K pour A = 0,25 ; 221 K pour A = 0,60 ; la température d'équilibre diminue quand l'albédo augmente.",
              ],
            },
            {
              level: 3,
              statement: "On modélise l'effet de serre par une atmosphère réduite à une couche de température Ta, transparente au rayonnement solaire mais absorbant tout le rayonnement infrarouge émis par la surface, de température Ts. Cette couche rayonne σ Ta⁴ vers l'espace et σ Ta⁴ vers le sol (puissances surfaciques). La puissance solaire absorbée par la surface vaut 238 W·m⁻² ; σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴. 1. Écrire le bilan radiatif du système {Terre + atmosphère} vu de l'espace et en déduire Ta. 2. Écrire le bilan radiatif de la surface et montrer que σ Ts⁴ = 2 × 238 W·m⁻². 3. Calculer Ts et la comparer à la température moyenne observée, 288 K. 4. Proposer deux raisons pour lesquelles ce modèle surestime la température de surface. 5. Comment évolue Ts si l'atmosphère devient plus absorbante dans l'infrarouge ?",
              hint: "À l'équilibre, pour chaque système, la puissance reçue est égale à la puissance émise. Vue de l'espace, seule la couche atmosphérique rayonne vers l'extérieur.",
              solution: [
                "1. Vu de l'espace, le système reçoit 238 W·m⁻² (solaire absorbé) et émet σ Ta⁴ (seule l'atmosphère rayonne vers l'espace). Équilibre : σ Ta⁴ = 238, d'où Ta ≈ 255 K.",
                "2. La surface reçoit 238 W·m⁻² du Soleil et σ Ta⁴ = 238 W·m⁻² de l'atmosphère ; elle émet σ Ts⁴. Équilibre : σ Ts⁴ = 238 + 238 = 2 × 238 = 476 W·m⁻².",
                "3. Ts⁴ = 476 ÷ 5,67 × 10⁻⁸ ≈ 8,40 × 10⁹ K⁴, d'où Ts ≈ 303 K (soit 2^(1/4) × 255 K). C'est environ 15 K de plus que la température observée de 288 K.",
                "4. L'atmosphère réelle n'absorbe pas tout le rayonnement infrarouge : une partie s'échappe directement vers l'espace (fenêtre atmosphérique). De plus, la surface perd aussi de l'énergie par convection et par évaporation de l'eau, transferts non pris en compte ici.",
                "5. Si l'atmosphère absorbe davantage l'infrarouge (hausse des gaz à effet de serre), une part plus importante du rayonnement de la surface lui est renvoyée : la température de surface augmente, en se rapprochant de la limite de 303 K de ce modèle.",
                "Réponse : Ta ≈ 255 K ; Ts ≈ 303 K, valeur surestimée par rapport aux 288 K observés ; Ts augmente quand l'effet de serre se renforce.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Bilan radiatif et effet de serre.",
            statements: [
              { text: "Sans effet de serre, la température moyenne de la surface terrestre serait d'environ -18 °C.", true: true, why: "Le bilan σ T⁴ = 238 W·m⁻² donne T ≈ 255 K." },
              { text: "L'effet de serre est un phénomène causé uniquement par les activités humaines.", true: false, why: "C'est un phénomène naturel (vapeur d'eau, CO₂...) ; les activités humaines le renforcent." },
              { text: "Un albédo plus élevé conduit à une température d'équilibre plus basse.", true: true, why: "La Terre réfléchit davantage et absorbe moins de puissance solaire." },
              { text: "La surface terrestre émet principalement dans le domaine visible.", true: false, why: "À environ 288 K, elle émet dans l'infrarouge, autour de 10 µm." },
              { text: "Si la température absolue d'un corps double, la puissance qu'il rayonne par m² est multipliée par 16.", true: true, why: "La puissance surfacique est proportionnelle à T⁴ et 2⁴ = 16." },
              { text: "La puissance solaire moyenne reçue par m² de surface terrestre est égale à la constante solaire.", true: false, why: "Elle est quatre fois plus faible : le disque intercepté a une aire πR², la sphère 4πR²." },
              { text: "Le CO₂ absorbe une partie du rayonnement infrarouge émis par la surface terrestre.", true: true, why: "C'est ce qui en fait un gaz à effet de serre." },
            ],
          },
          quiz: [
            {
              q: "Dans la loi de Stefan-Boltzmann, la température doit être exprimée en :",
              options: ["degrés Celsius", "kelvins", "degrés Fahrenheit", "joules"],
              answer: 1,
              why: "La loi P ÷ S = σ T⁴ utilise la température thermodynamique ; en degrés Celsius, le calcul serait faux.",
            },
            {
              q: "Pourquoi divise-t-on la constante solaire par 4 pour obtenir la puissance moyenne reçue par m² ?",
              options: ["En raison du rapport 4πR² ÷ πR² entre sphère et disque", "Parce que l'albédo terrestre vaut environ 0,25", "Parce que l'atmosphère absorbe les trois quarts du rayonnement", "Parce que le Soleil n'éclaire la Terre qu'un quart du temps"],
              answer: 0,
              why: "La Terre intercepte le rayonnement sur un disque d'aire πR² mais le répartit sur toute sa surface 4πR².",
            },
            {
              q: "L'albédo terrestre vaut environ 0,30. Cela signifie que :",
              options: ["30 % du rayonnement solaire incident est absorbé par le sol", "30 % du rayonnement solaire incident est réfléchi", "la surface terrestre émet 30 % de l'énergie qu'elle reçoit", "30 % de l'énergie solaire est convertie en chaleur"],
              answer: 1,
              why: "L'albédo est la fraction du rayonnement incident renvoyée vers l'espace sans être absorbée.",
            },
            {
              q: "Lequel de ces gaz n'est pas un gaz à effet de serre ?",
              options: ["La vapeur d'eau", "Le méthane", "Le dioxyde de carbone", "Le diazote"],
              answer: 3,
              why: "Le diazote N₂, principal constituant de l'air, n'absorbe pas le rayonnement infrarouge terrestre.",
            },
            {
              q: "Si la température absolue d'une surface passe de 300 K à 600 K, sa puissance surfacique rayonnée est :",
              options: ["doublée", "multipliée par 4", "multipliée par 8", "multipliée par 16"],
              answer: 3,
              why: "P ÷ S = σ T⁴ : (600 ÷ 300)⁴ = 2⁴ = 16.",
            },
          ],
          trap: "Oublier le facteur 4 (la constante solaire concerne une surface perpendiculaire aux rayons, pas la moyenne sur toute la sphère) ou oublier l'albédo, ce qui donne une température beaucoup trop élevée ; ou encore utiliser des degrés Celsius dans σ T⁴.",
          method: "Pour un bilan radiatif, écrivez séparément la puissance surfacique absorbée et la puissance surfacique émise, puis égalez-les. Calculez T⁴ d'abord, puis prenez deux fois la racine carrée : c'est plus sûr que de taper un exposant 1/4 sur la calculatrice.",
        },
      ],
    },
  ],
}
