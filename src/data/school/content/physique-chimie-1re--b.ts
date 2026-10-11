import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-1re',
  chapters: [
    /* ================================================================== */
    /* LES ESPÈCES CHIMIQUES ORGANIQUES                                     */
    /* ================================================================== */
    {
      id: 'chimie-organique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "squelettes-groupes",
          title: "Squelettes carbonés, groupes caractéristiques et nomenclature",
          minutes: 35,
          objectives: [
            "Identifier, à partir d'une formule semi-développée, les groupes caractéristiques associés aux familles des alcools, des aldéhydes, des cétones et des acides carboxyliques.",
            "Distinguer un squelette carboné saturé ou insaturé, linéaire, ramifié ou cyclique.",
            "Justifier le nom associé à la formule semi-développée de molécules simples possédant un seul groupe caractéristique, et inversement.",
          ],
          course: [
            {
              heading: "Écrire la formule d'une molécule organique",
              paragraphs: [
                "Une espèce chimique organique est constituée de molécules contenant des atomes de carbone liés entre eux et à des atomes d'hydrogène, souvent aussi à des atomes d'oxygène ou d'azote. Dans ces molécules, chaque atome respecte un nombre de liaisons fixé : le carbone en établit quatre (il est tétravalent), l'oxygène deux, l'azote trois et l'hydrogène une seule.",
                "La formule brute indique seulement la nature et le nombre des atomes : C₂H₆O. La formule développée montre toutes les liaisons. La formule semi-développée, la plus utilisée, ne représente plus les liaisons avec les atomes d'hydrogène, qui sont regroupés à côté de l'atome qui les porte : CH₃-CH₂-OH. On rencontre aussi la formule topologique, où la chaîne carbonée est dessinée en zigzag : chaque extrémité et chaque sommet représentent un atome de carbone, les atomes d'hydrogène portés par les carbones ne sont pas écrits, mais les autres atomes (O, N) le sont.",
                "Une même formule brute peut correspondre à plusieurs molécules différentes, appelées isomères. C₂H₆O est la formule de l'éthanol CH₃-CH₂-OH, liquide qui bout à 78 °C, mais aussi celle du méthoxyméthane CH₃-O-CH₃, gaz qui bout vers -24 °C. La formule brute ne suffit donc pas à identifier une espèce : il faut connaître l'enchaînement des atomes.",
              ],
              box: { label: "Définition", text: "Formule semi-développée : formule qui montre l'enchaînement des atomes et toutes les liaisons, sauf celles qui engagent un atome d'hydrogène. Deux isomères ont la même formule brute mais des formules semi-développées différentes, donc des propriétés différentes." },
            },
            {
              heading: "Les squelettes carbonés",
              paragraphs: [
                "Le squelette carboné est l'enchaînement des atomes de carbone de la molécule. Il est saturé s'il ne comporte que des liaisons simples entre atomes de carbone, insaturé s'il contient au moins une liaison double C=C (ou triple). Il est linéaire si les carbones forment une seule chaîne sans embranchement, ramifié si un ou plusieurs carbones sont liés à trois ou quatre autres carbones, cyclique si la chaîne se referme sur elle-même.",
                "Exemples : le butane CH₃-CH₂-CH₂-CH₃ a un squelette saturé et linéaire ; le méthylpropane CH₃-CH(CH₃)-CH₃ a un squelette saturé et ramifié (le groupe entre parenthèses est une ramification portée par le carbone qui le précède) ; le cyclohexane C₆H₁₂ a un squelette saturé cyclique de six carbones ; le but-2-ène CH₃-CH=CH-CH₃ a un squelette insaturé linéaire.",
                "Les alcanes sont les hydrocarbures (molécules formées uniquement de carbone et d'hydrogène) à squelette saturé et non cyclique. Leur formule brute générale est CnH₂n₊₂ : méthane CH₄, éthane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂, hexane C₆H₁₄. Leurs noms servent de base à toute la nomenclature : le préfixe donne le nombre de carbones (méth 1, éth 2, prop 3, but 4, pent 5, hex 6).",
              ],
              box: { label: "Règle", text: "Nommer un alcane ramifié : 1. trouver la chaîne la plus longue (chaîne principale) ; 2. la numéroter pour que les ramifications portent les plus petits numéros ; 3. nommer les ramifications (méthyl, éthyl), précédées de leur numéro, puis l'alcane principal. Exemple : CH₃-CH(CH₃)-CH₂-CH₃ est le 2-méthylbutane." },
            },
            {
              heading: "Groupes caractéristiques et familles fonctionnelles",
              paragraphs: [
                "Un groupe caractéristique est un groupe d'atomes, contenant au moins un atome autre que C et H, qui confère à la molécule des propriétés communes. Les molécules qui possèdent le même groupe caractéristique forment une famille fonctionnelle. Au programme de première : le groupe hydroxyle -OH, le groupe carbonyle C=O et le groupe carboxyle -COOH.",
                "Un alcool possède un groupe hydroxyle -OH lié à un atome de carbone tétragonal, c'est-à-dire lié à quatre atomes par des liaisons simples : CH₃-CH₂-OH (éthanol). Un composé carbonylé possède un groupe carbonyle C=O : si le carbone du groupe est en bout de chaîne, lié à au moins un atome d'hydrogène, c'est un aldéhyde, de terminaison -CHO, comme l'éthanal CH₃-CHO ; s'il est lié à deux atomes de carbone, c'est une cétone, comme la propanone CH₃-CO-CH₃ (l'acétone des dissolvants).",
                "Un acide carboxylique possède un groupe carboxyle -COOH, qui réunit sur le même carbone un C=O et un -OH : l'acide éthanoïque CH₃-COOH donne au vinaigre son goût acide. Attention : ce groupe forme un tout, ce n'est ni un alcool ni une cétone, même s'il contient les atomes d'un groupe hydroxyle et d'un groupe carbonyle.",
              ],
              box: { label: "À retenir", text: "Alcool : -OH sur un carbone tétragonal. Aldéhyde : C=O en bout de chaîne (-CHO). Cétone : C=O entre deux carbones (-CO-). Acide carboxylique : -COOH, groupe carboxyle." },
            },
            {
              heading: "Nommer une molécule à un seul groupe caractéristique",
              paragraphs: [
                "La chaîne principale est la chaîne carbonée la plus longue qui contient le carbone portant le groupe caractéristique. On la numérote de façon que ce carbone porte le plus petit numéro possible. Le nom est formé du nom de l'alcane correspondant, dont on retire le « e » final, suivi d'un suffixe propre à la famille, et précédé des ramifications éventuelles avec leur numéro.",
                "Alcools : suffixe -ol, précédé du numéro du carbone qui porte le -OH : propan-1-ol CH₃-CH₂-CH₂-OH, propan-2-ol CH₃-CH(OH)-CH₃. Aldéhydes : suffixe -al ; le carbone du groupe est forcément le numéro 1, on n'écrit donc pas son numéro : propanal CH₃-CH₂-CHO. Cétones : suffixe -one avec son numéro : pentan-2-one CH₃-CO-CH₂-CH₂-CH₃ (pour la propanone et la butanone, une seule position est possible, le numéro est omis). Acides carboxyliques : acide ...-oïque, carbone du groupe numéro 1 : acide propanoïque CH₃-CH₂-COOH.",
                "Exemple avec ramification : CH₃-CH(CH₃)-CH₂-COOH. La chaîne principale compte quatre carbones et le carbone du groupe carboxyle porte le numéro 1 ; le méthyle est donc porté par le carbone 3. Nom : acide 3-méthylbutanoïque. De même, CH₃-CH(CH₃)-CH₂-OH se nomme 2-méthylpropan-1-ol.",
              ],
              box: { label: "Règle", text: "Nom = [numéro et nom des ramifications] + [alcane sans le « e »] + [suffixe] : -ol (alcool, avec numéro), -al (aldéhyde, toujours en 1), -one (cétone, avec numéro), acide ...-oïque (acide, toujours en 1). Le carbone du groupe reçoit le plus petit numéro." },
            },
          ],
          keyPoints: [
            "Le carbone établit 4 liaisons, l'oxygène 2, l'azote 3, l'hydrogène 1.",
            "Squelette saturé (liaisons simples) ou insaturé (au moins une C=C) ; linéaire, ramifié ou cyclique.",
            "Alcool -OH ; aldéhyde -CHO ; cétone -CO- entre deux carbones ; acide carboxylique -COOH.",
            "Suffixes : -ol, -al, -one, acide ...-oïque ; le carbone du groupe porte le plus petit numéro possible.",
            "Isomères : même formule brute, formules semi-développées différentes, propriétés différentes.",
          ],
          example: {
            statement: "Pour chacune des molécules suivantes, indiquer la famille, la nature du squelette et le nom : (a) CH₃-CH₂-CH(OH)-CH₃ ; (b) CH₃-CH(CH₃)-CHO ; (c) CH₃-CH₂-CO-CH₂-CH₃.",
            solution: [
              "(a) Groupe -OH porté par un carbone tétragonal : c'est un alcool. Squelette saturé linéaire de 4 carbones.",
              "Numérotation : en partant de la droite, le -OH est sur le carbone 2 (en partant de la gauche il serait sur le 3) ; on retient 2. Nom : butan-2-ol.",
              "(b) Groupe -CHO en bout de chaîne : c'est un aldéhyde. Chaîne principale de 3 carbones, avec un méthyle : squelette saturé ramifié.",
              "Le carbone du groupe est le numéro 1, le méthyle est sur le carbone 2. Nom : 2-méthylpropanal.",
              "(c) Groupe C=O lié à deux carbones : c'est une cétone. Squelette saturé linéaire de 5 carbones ; le carbonyle est sur le carbone 3, quel que soit le sens de numérotation.",
              "Réponse : (a) butan-2-ol, alcool ; (b) 2-méthylpropanal, aldéhyde ; (c) pentan-3-one, cétone.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des molécules suivantes, entourer le groupe caractéristique, donner la famille et le nom : (a) CH₃-CH₂-CHO ; (b) CH₃-CO-CH₂-CH₃ ; (c) CH₃-CH₂-CH₂-OH ; (d) CH₃-COOH.",
              hint: "Repérez d'abord s'il y a un -OH seul, un C=O seul, ou les deux sur le même carbone. Pour un C=O seul, regardez s'il est en bout de chaîne ou entre deux carbones.",
              solution: [
                "(a) Groupe -CHO en bout de chaîne : aldéhyde à 3 carbones, le propanal.",
                "(b) Groupe C=O entre deux carbones : cétone à 4 carbones, la butanone (une seule position possible, numéro omis).",
                "(c) Groupe -OH sur un carbone tétragonal en bout de chaîne : alcool, le propan-1-ol.",
                "(d) Groupe -COOH : acide carboxylique à 2 carbones, l'acide éthanoïque.",
                "Réponse : propanal (aldéhyde), butanone (cétone), propan-1-ol (alcool), acide éthanoïque (acide carboxylique).",
              ],
            },
            {
              level: 2,
              statement: "Écrire la formule semi-développée et la formule brute de chacune des molécules suivantes : (a) 3-méthylbutan-2-ol ; (b) 2-méthylpropanal ; (c) pentan-3-one ; (d) acide 2-méthylpropanoïque. Indiquer pour chacune si le squelette est linéaire ou ramifié.",
              hint: "Écrivez d'abord la chaîne principale avec le bon nombre de carbones, numérotez-la, placez le groupe caractéristique puis la ramification, et complétez avec des H pour que chaque carbone ait quatre liaisons.",
              solution: [
                "(a) Chaîne de 4 carbones, -OH sur C2, méthyle sur C3 : CH₃-CH(OH)-CH(CH₃)-CH₃. Formule brute C₅H₁₂O. Squelette ramifié.",
                "(b) Chaîne de 3 carbones, -CHO en C1, méthyle sur C2 : CH₃-CH(CH₃)-CHO. Formule brute C₄H₈O. Squelette ramifié.",
                "(c) Chaîne de 5 carbones, C=O en C3 : CH₃-CH₂-CO-CH₂-CH₃. Formule brute C₅H₁₀O. Squelette linéaire.",
                "(d) Chaîne de 3 carbones, -COOH en C1, méthyle sur C2 : CH₃-CH(CH₃)-COOH. Formule brute C₄H₈O₂. Squelette ramifié.",
                "Vérification : chaque carbone a bien quatre liaisons, chaque oxygène deux.",
              ],
            },
            {
              level: 3,
              statement: "On s'intéresse aux alcools de formule brute C₄H₁₀O. 1. Écrire les formules semi-développées des quatre alcools possibles et les nommer. 2. Préciser pour chacun si son squelette est linéaire ou ramifié. 3. Un élève a nommé la molécule CH₃-CH(OH)-CH₂-CH₃ « 1-méthylpropan-1-ol ». Expliquer son erreur et donner le nom correct. 4. Le méthoxypropane CH₃-O-CH₂-CH₂-CH₃ a aussi pour formule brute C₄H₁₀O. Est-ce un alcool ? Justifier.",
              hint: "Placez le -OH sur toutes les positions possibles d'une chaîne linéaire de 4 carbones, puis d'une chaîne de 3 carbones portant un méthyle. Pour la question 3, cherchez la chaîne la plus longue.",
              solution: [
                "1. Chaîne linéaire : CH₃-CH₂-CH₂-CH₂-OH, butan-1-ol ; CH₃-CH(OH)-CH₂-CH₃, butan-2-ol.",
                "Chaîne ramifiée : CH₃-CH(CH₃)-CH₂-OH, 2-méthylpropan-1-ol ; CH₃-C(OH)(CH₃)-CH₃, 2-méthylpropan-2-ol.",
                "2. Les deux butanols ont un squelette linéaire, les deux méthylpropanols un squelette ramifié.",
                "3. L'élève n'a pas pris la chaîne la plus longue : le « méthyle » en position 1 prolonge en fait la chaîne, qui compte 4 carbones. Le nom correct est butan-2-ol. Une ramification méthyle en position 1 signale toujours une chaîne principale mal choisie.",
                "4. Non : l'oxygène y est lié à deux atomes de carbone, il n'y a pas de groupe -OH. C'est un isomère des alcools, mais d'une autre famille.",
                "Réponse : quatre alcools, butan-1-ol, butan-2-ol, 2-méthylpropan-1-ol, 2-méthylpropan-2-ol ; le nom correct de la molécule de la question 3 est butan-2-ol.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque molécule à sa famille fonctionnelle.",
            pairs: [
              { left: "CH₃-CH₂-OH", right: "Alcool" },
              { left: "CH₃-CH₂-CHO", right: "Aldéhyde" },
              { left: "CH₃-CO-CH₃", right: "Cétone" },
              { left: "CH₃-CH₂-COOH", right: "Acide carboxylique" },
              { left: "CH₃-CH₂-CH₃", right: "Alcane" },
            ],
          },
          quiz: [
            {
              q: "Quel est le nom de CH₃-CH₂-CH₂-CHO ?",
              options: ["Butan-1-ol", "Butanal", "Butanone", "Acide butanoïque"],
              answer: 1,
              why: "Le groupe -CHO en bout de chaîne caractérise un aldéhyde ; la chaîne compte 4 carbones : butanal.",
            },
            {
              q: "Un squelette carboné qui contient une liaison C=C est dit :",
              options: ["ramifié", "cyclique", "saturé", "insaturé"],
              answer: 3,
              why: "Une liaison multiple entre deux carbones rend le squelette insaturé ; saturé signifie uniquement des liaisons simples.",
            },
            {
              q: "Quelle molécule est une cétone ?",
              options: ["CH₃-CO-CH₂-CH₃", "CH₃-CH₂-CHO", "CH₃-CH₂-COOH", "CH₃-CH(OH)-CH₃"],
              answer: 0,
              why: "Dans la butanone, le carbone du groupe carbonyle est lié à deux atomes de carbone : c'est une cétone.",
            },
            {
              q: "Le nom correct de CH₃-CH(CH₃)-CH₂-OH est :",
              options: ["butan-1-ol", "3-méthylpropan-1-ol", "2-méthylpropan-1-ol", "2-méthylpropan-3-ol"],
              answer: 2,
              why: "Chaîne principale de 3 carbones contenant le carbone du -OH, numérotée à partir de ce carbone : le méthyle est en 2.",
            },
            {
              q: "Deux isomères ont :",
              options: ["la même formule semi-développée", "la même formule brute", "les mêmes propriétés physiques", "la même température d'ébullition"],
              answer: 1,
              why: "Les isomères ont la même formule brute mais un enchaînement d'atomes différent, donc des propriétés différentes.",
            },
          ],
          trap: "Confondre aldéhyde et cétone (le C=O d'un aldéhyde est en bout de chaîne, celui d'une cétone entre deux carbones), ou prendre le groupe -COOH pour un alcool parce qu'il contient un -OH.",
          method: "Pour nommer une molécule, suivez toujours le même ordre : famille (quel groupe ?), chaîne principale (la plus longue contenant le groupe), numérotation (le groupe a le plus petit numéro), ramifications, puis suffixe. Pour vérifier un nom, réécrivez la formule à partir de ce nom et comparez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "spectroscopie-ir",
          title: "Identifier une molécule par spectroscopie infrarouge",
          minutes: 30,
          objectives: [
            "Exploiter, à partir de valeurs de référence, un spectre d'absorption infrarouge.",
            "Identifier les liaisons O-H, C=O, C-H et N-H d'une molécule à partir de ses bandes d'absorption caractéristiques.",
            "Déterminer la famille fonctionnelle d'une molécule en croisant sa formule brute et son spectre infrarouge.",
          ],
          course: [
            {
              heading: "Le principe de la spectroscopie infrarouge",
              paragraphs: [
                "Les liaisons d'une molécule ne sont pas rigides : elles vibrent, un peu comme deux boules reliées par un ressort qui s'allongent et se raccourcissent sans cesse. Lorsqu'on éclaire une molécule avec un rayonnement infrarouge, elle absorbe les radiations dont la fréquence correspond aux fréquences de vibration de ses liaisons. Chaque type de liaison (O-H, C=O, C-H...) absorbe ainsi dans un domaine qui lui est propre.",
                "Un spectre infrarouge représente la transmittance T, en pourcentage, en fonction du nombre d'onde σ. Le nombre d'onde est l'inverse de la longueur d'onde : σ = 1 ÷ λ. On l'exprime en cm⁻¹, avec λ en cm. Le domaine étudié va en général de 4000 cm⁻¹ à 400 cm⁻¹, ce qui correspond à des longueurs d'onde de 2,5 µm à 25 µm. Exemple : λ = 5,8 µm = 5,8 × 10⁻⁴ cm donne σ = 1 ÷ (5,8 × 10⁻⁴) ≈ 1,7 × 10³ cm⁻¹.",
              ],
              box: { label: "Formule", text: "Nombre d'onde : σ = 1 ÷ λ, en cm⁻¹ si λ est en cm. Rappel : 1 µm = 10⁻⁴ cm. Plus σ est grand, plus la longueur d'onde est petite." },
            },
            {
              heading: "Lire un spectre infrarouge",
              paragraphs: [
                "Deux particularités surprennent au premier abord. L'axe des abscisses est gradué en nombres d'onde décroissants, de 4000 cm⁻¹ à gauche jusqu'à 400 ou 500 cm⁻¹ à droite. Et une absorption se traduit par une bande orientée vers le bas : quand la molécule absorbe, la lumière transmise diminue, donc la transmittance chute. Une transmittance de 100 % signifie aucune absorption.",
                "Une bande se décrit par trois caractères : sa position (le nombre d'onde de son minimum), son intensité (forte si la transmittance descend beaucoup, moyenne ou faible sinon) et sa largeur (fine ou large). Par exemple, la liaison C=O donne une bande forte et fine vers 1700 cm⁻¹, très facile à repérer.",
                "Le spectre se divise en deux zones. Au-dessus de 1500 cm⁻¹ environ, les bandes sont caractéristiques de types de liaisons : c'est la zone exploitée pour identifier les groupes caractéristiques. En dessous de 1500 cm⁻¹ se trouve l'empreinte digitale de la molécule : de nombreuses bandes difficiles à attribuer, mais propres à chaque molécule, qui permettent de l'identifier par comparaison avec une banque de spectres.",
              ],
            },
            {
              heading: "Les bandes caractéristiques",
              paragraphs: [
                "Une table de référence, toujours fournie, donne les domaines d'absorption des liaisons. Les principales : O-H d'un alcool, bande forte et large entre 3200 et 3400 cm⁻¹ ; O-H d'un acide carboxylique, bande forte et très large entre 2500 et 3200 cm⁻¹, qui se superpose souvent aux bandes C-H ; N-H, bande moyenne entre 3100 et 3500 cm⁻¹ ; C-H d'un carbone tétragonal, bandes fortes entre 2800 et 3000 cm⁻¹ ; C=O, bande forte et fine entre 1650 et 1750 cm⁻¹ ; C=C, bande moyenne entre 1620 et 1690 cm⁻¹.",
                "La largeur de la bande O-H s'explique par les liaisons hydrogène. Dans un alcool liquide, les molécules sont liées entre elles par des liaisons hydrogène qui modifient légèrement la vibration de chaque liaison O-H : on observe une bande large vers 3300 cm⁻¹ (O-H « lié »). En phase gazeuse ou en solution très diluée, les molécules sont isolées et la bande devient fine, vers 3600 cm⁻¹ (O-H « libre »). Dans un acide carboxylique, les liaisons hydrogène sont encore plus fortes, d'où une bande très large et décalée vers les petits nombres d'onde.",
              ],
              box: { label: "Repère", text: "O-H alcool lié : 3200 à 3400 cm⁻¹, large. O-H acide : 2500 à 3200 cm⁻¹, très large. N-H : 3100 à 3500 cm⁻¹. C-H : 2800 à 3000 cm⁻¹. C=O : 1650 à 1750 cm⁻¹, forte et fine. Les valeurs exactes sont toujours données par une table." },
            },
            {
              heading: "Identifier une famille fonctionnelle",
              paragraphs: [
                "La démarche consiste à chercher la présence ou l'absence de quelques bandes. Un alcool présente la bande large O-H vers 3300 cm⁻¹ et aucune bande C=O. Un aldéhyde ou une cétone présente une bande C=O forte vers 1700 cm⁻¹ et aucune bande O-H ; l'aldéhyde se distingue souvent par une ou deux bandes fines de la liaison C-H du groupe -CHO, entre 2700 et 2900 cm⁻¹. Un acide carboxylique présente à la fois la bande C=O et la bande O-H très large.",
                "Exemple d'utilisation : lors de l'oxydation de l'éthanol en acide éthanoïque, on peut suivre la transformation par spectroscopie infrarouge. Au départ, le spectre montre la bande O-H large de l'alcool et aucune bande vers 1700 cm⁻¹. À la fin, une bande C=O forte apparaît vers 1710 cm⁻¹ et la bande O-H s'élargit et se déplace vers 2500 à 3200 cm⁻¹ : l'acide s'est formé.",
                "Un spectre infrarouge renseigne sur les liaisons présentes, mais il ne donne pas à lui seul la formule complète. On le croise donc avec d'autres informations : formule brute, réactifs utilisés, température de fusion ou d'ébullition, ou comparaison avec le spectre d'une espèce de référence.",
              ],
              box: { label: "À retenir", text: "Alcool : O-H large, pas de C=O. Aldéhyde ou cétone : C=O, pas de O-H. Acide carboxylique : C=O et O-H très large. Toujours croiser le spectre avec la formule brute." },
            },
          ],
          keyPoints: [
            "Un spectre IR donne la transmittance en fonction du nombre d'onde σ = 1 ÷ λ, en cm⁻¹, axe décroissant de gauche à droite.",
            "Une absorption apparaît comme une bande dirigée vers le bas ; on la décrit par sa position, son intensité et sa largeur.",
            "C=O : bande forte et fine vers 1650 à 1750 cm⁻¹.",
            "O-H d'alcool : bande large vers 3200 à 3400 cm⁻¹ ; O-H d'acide : bande très large de 2500 à 3200 cm⁻¹.",
            "Sous 1500 cm⁻¹ : empreinte digitale, propre à chaque molécule, exploitée par comparaison.",
          ],
          example: {
            statement: "Une espèce de formule brute C₃H₆O peut être la propanone CH₃-CO-CH₃, le propanal CH₃-CH₂-CHO ou le prop-2-èn-1-ol CH₂=CH-CH₂-OH. Son spectre infrarouge présente une bande forte et fine à 1715 cm⁻¹, des bandes entre 2900 et 3000 cm⁻¹, aucune bande au-dessus de 3100 cm⁻¹ et aucune bande fine entre 2700 et 2800 cm⁻¹. Identifier l'espèce, à l'aide de la table de référence du cours.",
            solution: [
              "La bande forte et fine à 1715 cm⁻¹ est dans le domaine 1650 à 1750 cm⁻¹ : la molécule possède une liaison C=O.",
              "Aucune bande au-dessus de 3100 cm⁻¹ : pas de liaison O-H. Le prop-2-èn-1-ol, qui est un alcool sans C=O, est exclu.",
              "Il reste le propanal et la propanone. Un aldéhyde présente en général une bande fine de la liaison C-H du groupe -CHO entre 2700 et 2800 cm⁻¹ ; elle est absente ici.",
              "Les bandes entre 2900 et 3000 cm⁻¹ correspondent aux liaisons C-H des groupes CH₃.",
              "Réponse : l'espèce est la propanone, une cétone.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le spectre infrarouge d'une espèce présente deux bandes intenses, l'une centrée sur λ₁ = 5,85 µm, fine, l'autre centrée sur λ₂ = 2,99 µm, large. Données : 1 µm = 10⁻⁴ cm ; table de référence du cours. 1. Calculer les nombres d'onde correspondants. 2. Attribuer chaque bande à une liaison.",
              hint: "Convertissez les longueurs d'onde en cm avant d'appliquer σ = 1 ÷ λ.",
              solution: [
                "1. λ₁ = 5,85 µm = 5,85 × 10⁻⁴ cm, donc σ₁ = 1 ÷ (5,85 × 10⁻⁴) ≈ 1709 cm⁻¹.",
                "λ₂ = 2,99 µm = 2,99 × 10⁻⁴ cm, donc σ₂ = 1 ÷ (2,99 × 10⁻⁴) ≈ 3344 cm⁻¹.",
                "2. Une bande fine vers 1709 cm⁻¹ est dans le domaine 1650 à 1750 cm⁻¹ : liaison C=O.",
                "Une bande large vers 3344 cm⁻¹ est dans le domaine 3200 à 3400 cm⁻¹ : liaison O-H d'un alcool, liée par liaisons hydrogène.",
                "Réponse : σ₁ ≈ 1,71 × 10³ cm⁻¹ (C=O) et σ₂ ≈ 3,34 × 10³ cm⁻¹ (O-H lié).",
              ],
            },
            {
              level: 2,
              statement: "On dispose des spectres infrarouges de trois espèces à 4 carbones : le butan-1-ol, le butanal et l'acide butanoïque. Spectre A : bande très large de 2500 à 3200 cm⁻¹ et bande forte à 1710 cm⁻¹. Spectre B : bande forte et large vers 3330 cm⁻¹, bandes vers 2900 cm⁻¹, rien vers 1700 cm⁻¹. Spectre C : bande forte à 1730 cm⁻¹, bandes vers 2900 cm⁻¹ et deux bandes fines vers 2720 et 2820 cm⁻¹, rien au-dessus de 3100 cm⁻¹. Attribuer chaque spectre à son espèce en justifiant.",
              hint: "Pour chaque spectre, notez la présence ou l'absence de la bande C=O et de la bande O-H, puis précisez la forme de la bande O-H.",
              solution: [
                "Spectre A : bande C=O à 1710 cm⁻¹ et bande O-H très large de 2500 à 3200 cm⁻¹ : c'est un acide carboxylique, l'acide butanoïque.",
                "Spectre B : bande O-H large vers 3330 cm⁻¹, sans bande C=O : c'est un alcool, le butan-1-ol.",
                "Spectre C : bande C=O à 1730 cm⁻¹, pas de O-H, et bandes fines vers 2720 et 2820 cm⁻¹ caractéristiques de la liaison C-H du groupe -CHO : c'est un aldéhyde, le butanal.",
                "Réponse : A acide butanoïque, B butan-1-ol, C butanal.",
              ],
            },
            {
              level: 3,
              statement: "Au laboratoire, on oxyde du propan-2-ol CH₃-CH(OH)-CH₃ par une solution acidifiée de permanganate de potassium. Le produit organique obtenu, purifié, a pour formule brute C₃H₆O. Son spectre infrarouge présente une bande forte et fine à 1715 cm⁻¹ et des bandes vers 2950 cm⁻¹ ; il ne présente aucune bande entre 3100 et 3600 cm⁻¹ ni de bande fine vers 2720 cm⁻¹. 1. Décrire l'allure attendue du spectre du réactif dans la zone 1500 à 4000 cm⁻¹. 2. Quelles liaisons du réactif ont disparu ou sont apparues au cours de la transformation ? 3. Un élève affirme que le produit est le propanal. Discuter cette affirmation et identifier le produit. 4. Écrire la formule semi-développée du produit et la comparer à celle du réactif : sur quel atome de carbone la transformation a-t-elle eu lieu ?",
              hint: "Le carbone qui porte le -OH dans le réactif est lié à deux autres carbones. Une oxydation ne modifie pas le squelette carboné.",
              solution: [
                "1. Le propan-2-ol est un alcool : on attend une bande forte et large vers 3200 à 3400 cm⁻¹ (O-H lié), des bandes C-H vers 2800 à 3000 cm⁻¹ et aucune bande vers 1700 cm⁻¹.",
                "2. La bande O-H a disparu ; une bande C=O est apparue à 1715 cm⁻¹. La liaison O-H a été rompue et une double liaison C=O s'est formée.",
                "3. Le produit possède un C=O et pas de O-H : c'est un aldéhyde ou une cétone. L'absence de la bande fine vers 2720 cm⁻¹, caractéristique du C-H d'un aldéhyde, plaide contre le propanal.",
                "De plus, le squelette n'est pas modifié : le carbone fonctionnel, au milieu de la chaîne dans le réactif, est lié à deux carbones ; le C=O ne peut donc pas être en bout de chaîne. L'affirmation de l'élève est fausse.",
                "4. Le produit est la propanone CH₃-CO-CH₃ : la transformation a eu lieu sur le carbone central, qui portait le groupe -OH.",
                "Réponse : le produit est la propanone, une cétone.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : lire un spectre infrarouge.",
            statements: [
              { text: "Sur un spectre IR, les nombres d'onde augmentent de gauche à droite.", true: false, why: "L'axe est gradué en nombres d'onde décroissants : 4000 cm⁻¹ à gauche, 400 à 500 cm⁻¹ à droite." },
              { text: "Une bande d'absorption est dirigée vers le bas.", true: true, why: "Quand la molécule absorbe, la transmittance diminue." },
              { text: "Une bande forte et fine vers 1700 cm⁻¹ signale une liaison C=O.", true: true, why: "La liaison C=O absorbe entre 1650 et 1750 cm⁻¹, avec une bande intense et fine." },
              { text: "La bande O-H d'un acide carboxylique est plus fine que celle d'un alcool.", true: false, why: "Elle est au contraire très large, de 2500 à 3200 cm⁻¹, à cause de liaisons hydrogène fortes." },
              { text: "Le nombre d'onde est l'inverse de la longueur d'onde.", true: true, why: "σ = 1 ÷ λ, en cm⁻¹ si λ est en cm." },
              { text: "La zone située sous 1500 cm⁻¹ sert surtout à repérer les groupes caractéristiques.", true: false, why: "C'est l'empreinte digitale, propre à la molécule ; les groupes se repèrent au-dessus de 1500 cm⁻¹." },
            ],
          },
          quiz: [
            {
              q: "Une radiation de longueur d'onde λ = 2,0 × 10⁻⁴ cm a pour nombre d'onde :",
              options: ["2000 cm⁻¹", "500 cm⁻¹", "5000 cm⁻¹", "2,0 × 10⁴ cm⁻¹"],
              answer: 2,
              why: "σ = 1 ÷ λ = 1 ÷ (2,0 × 10⁻⁴) = 5,0 × 10³ cm⁻¹.",
            },
            {
              q: "Un spectre présente une bande large vers 3300 cm⁻¹ et rien vers 1700 cm⁻¹. L'espèce est :",
              options: ["un alcool", "une cétone", "un aldéhyde", "un acide carboxylique"],
              answer: 0,
              why: "La bande large vers 3300 cm⁻¹ est celle de O-H lié, et l'absence de bande C=O exclut les trois autres familles.",
            },
            {
              q: "Pourquoi la bande O-H d'un alcool liquide est-elle large ?",
              options: ["À cause de la vibration des liaisons C-H voisines du groupe", "À cause des liaisons hydrogène entre molécules", "Parce que la molécule est cyclique", "Parce que la liaison O-H est double"],
              answer: 1,
              why: "Les liaisons hydrogène modifient légèrement la vibration de chaque liaison O-H, ce qui étale l'absorption.",
            },
            {
              q: "Quelle combinaison de bandes caractérise un acide carboxylique ?",
              options: ["C=O seule", "O-H fine vers 3600 cm⁻¹ seule", "C=C et C-H", "C=O et O-H très large"],
              answer: 3,
              why: "Le groupe carboxyle -COOH contient une liaison C=O et une liaison O-H, qui donne une bande très large de 2500 à 3200 cm⁻¹.",
            },
            {
              q: "La zone de l'empreinte digitale se situe :",
              options: ["au-dessus de 3000 cm⁻¹", "entre 2500 et 3200 cm⁻¹", "sous 1500 cm⁻¹ environ", "uniquement vers 1700 cm⁻¹"],
              answer: 2,
              why: "Sous 1500 cm⁻¹, les nombreuses bandes sont propres à la molécule et servent à l'identifier par comparaison.",
            },
          ],
          trap: "Lire l'axe des nombres d'onde comme un axe croissant, ou conclure à un acide carboxylique dès qu'on voit une bande C=O sans vérifier la présence de la bande O-H très large.",
          method: "Lisez un spectre en trois questions dans l'ordre : y a-t-il une bande forte vers 1700 cm⁻¹ (C=O) ? Y a-t-il une bande au-dessus de 3100 cm⁻¹ ou une bande très large entre 2500 et 3200 cm⁻¹ (O-H, N-H) ? Que dit la formule brute ? Concluez seulement quand les trois réponses sont cohérentes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "synthese-rendement",
          title: "Les étapes d’une synthèse et le rendement",
          minutes: 35,
          objectives: [
            "Identifier, dans un protocole, les étapes de transformation des réactifs, d'isolement, de purification et d'analyse du produit synthétisé.",
            "Justifier, à partir des propriétés physico-chimiques des réactifs et des produits, le choix des méthodes d'isolement, de purification ou d'analyse.",
            "Déterminer, à partir d'un protocole et de données expérimentales, le rendement d'une synthèse.",
          ],
          course: [
            {
              heading: "Les quatre étapes d'une synthèse",
              paragraphs: [
                "Une synthèse chimique permet d'obtenir une espèce chimique, naturelle ou non, à partir de réactifs. Tout protocole de synthèse s'organise en quatre étapes : la transformation des réactifs, l'isolement du produit (on le sépare du mélange réactionnel), sa purification (on élimine les impuretés restantes) et son analyse (on vérifie son identité et sa pureté).",
                "La transformation est souvent réalisée par chauffage à reflux. Le mélange réactionnel est placé dans un ballon, chauffé par un chauffe-ballon, et surmonté d'un réfrigérant à boules vertical dans lequel l'eau froide circule de bas en haut. Le chauffage accélère la transformation, car la température est un facteur cinétique ; les vapeurs qui montent se condensent dans le réfrigérant et retombent dans le ballon, si bien qu'aucune espèce n'est perdue. Quelques grains de pierre ponce régularisent l'ébullition.",
              ],
              box: { label: "Définition", text: "Chauffage à reflux : chauffage d'un mélange réactionnel surmonté d'un réfrigérant vertical. Il accélère la transformation sans perte de matière, les vapeurs étant condensées et renvoyées dans le ballon." },
            },
            {
              heading: "Isoler le produit",
              paragraphs: [
                "Si le produit est un solide peu soluble dans le milieu réactionnel, on l'isole par filtration, le plus souvent par filtration sous pression réduite sur un entonnoir Büchner, plus rapide et qui essore mieux les cristaux. On favorise la cristallisation en refroidissant le mélange dans un bain d'eau glacée, car la solubilité d'un solide diminue en général quand la température baisse.",
                "Si le produit est un liquide mélangé à une phase aqueuse, on réalise une extraction liquide-liquide dans une ampoule à décanter. On choisit un solvant extracteur non miscible à l'eau, dans lequel le produit est très soluble. Les deux phases se superposent : la moins dense est au-dessus. Ajouter du chlorure de sodium à la phase aqueuse (relargage) diminue encore la solubilité du produit organique dans l'eau et améliore la séparation.",
                "La phase organique est ensuite lavée, par exemple avec une solution d'hydrogénocarbonate de sodium pour éliminer les traces d'acide (un dégagement de dioxyde de carbone se produit, d'où la nécessité de dégazer), puis séchée avec un desséchant comme le sulfate de magnésium anhydre, qui capte l'eau restante, et enfin filtrée.",
              ],
              box: { label: "Règle", text: "Choix du solvant d'extraction : non miscible avec l'eau, produit très soluble dedans, impuretés peu solubles. Dans l'ampoule à décanter, la phase de plus faible densité surnage." },
            },
            {
              heading: "Purifier et analyser",
              paragraphs: [
                "Un solide se purifie par recristallisation : on le dissout dans un minimum de solvant chaud, choisi pour que le produit y soit très soluble à chaud et peu soluble à froid, tandis que les impuretés restent dissoutes à froid. En refroidissant, le produit recristallise seul ; on le filtre et on le sèche. Un liquide se purifie par distillation, qui sépare les espèces selon leur température d'ébullition.",
                "L'analyse vérifie l'identité et la pureté du produit. Pour un solide, on mesure la température de fusion au banc Kofler : un produit pur fond à la température indiquée par les tables, un produit impur fond plus bas et sur un intervalle. La chromatographie sur couche mince (CCM) compare le produit à une référence : un produit pur donne une seule tache, au même niveau que celle de la référence. On peut aussi mesurer une température d'ébullition, un indice de réfraction, ou enregistrer un spectre infrarouge.",
              ],
              box: { label: "À retenir", text: "Solide : isolement par filtration, purification par recristallisation, analyse par température de fusion et CCM. Liquide : isolement par extraction liquide-liquide, purification par distillation, analyse par température d'ébullition, indice de réfraction, IR ou CCM." },
            },
            {
              heading: "Le rendement d'une synthèse",
              paragraphs: [
                "Le rendement η d'une synthèse est le quotient de la quantité de matière de produit effectivement obtenue par la quantité de matière maximale que l'on pourrait obtenir : η = n(exp) ÷ n(max). La quantité maximale se calcule avec un tableau d'avancement, en supposant la transformation totale : elle est fixée par le réactif limitant. Comme n = m ÷ M pour une même espèce, on a aussi η = m(exp) ÷ m(max). Le rendement est sans unité, compris entre 0 et 1, souvent exprimé en pourcentage.",
                "Un rendement inférieur à 100 % a plusieurs causes : transformation non totale ou trop courte, réactions parasites qui consomment les réactifs, pertes de produit lors des transferts, de la filtration, de l'extraction ou de la purification. On améliore le rendement en utilisant un réactif en excès, en chauffant plus longtemps, ou en soignant les manipulations.",
                "Exemple : 0,100 mol de réactif limitant doit donner au maximum 0,100 mol de produit, de masse molaire 130 g·mol⁻¹, soit m(max) = 13,0 g. Si l'on obtient 9,1 g de produit pur, η = 9,1 ÷ 13,0 = 0,70, soit 70 %.",
              ],
              box: { label: "Formule", text: "η = n(exp) ÷ n(max) = m(exp) ÷ m(max), avec n(max) calculé à partir du réactif limitant, la transformation étant supposée totale. 0 ≤ η ≤ 1." },
            },
          ],
          keyPoints: [
            "Quatre étapes : transformation, isolement, purification, analyse.",
            "Chauffage à reflux : accélère la transformation sans perte de matière.",
            "Solide : filtration sous vide puis recristallisation ; liquide : extraction à l'ampoule à décanter puis distillation.",
            "Analyse : température de fusion au banc Kofler, CCM, température d'ébullition, spectre IR.",
            "Rendement : η = n(exp) ÷ n(max), n(max) étant fixé par le réactif limitant.",
          ],
          example: {
            statement: "On synthétise l'aspirine C₉H₈O₄ en faisant réagir 5,0 g d'acide salicylique C₇H₆O₃ avec 10,0 mL d'anhydride éthanoïque C₄H₆O₃. L'équation est C₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + C₂H₄O₂. Après purification, on obtient 4,6 g d'aspirine (résultat fictif). Données : M(C₇H₆O₃) = 138 g·mol⁻¹ ; M(C₄H₆O₃) = 102 g·mol⁻¹ ; M(C₉H₈O₄) = 180 g·mol⁻¹ ; masse volumique de l'anhydride éthanoïque : 1,08 g·mL⁻¹. Calculer le rendement de la synthèse.",
            solution: [
              "Quantité d'acide salicylique : n₁ = 5,0 ÷ 138 ≈ 3,6 × 10⁻² mol.",
              "Quantité d'anhydride : m = ρ × V = 1,08 × 10,0 = 10,8 g, donc n₂ = 10,8 ÷ 102 ≈ 0,106 mol.",
              "Les réactifs réagissent mole à mole et n₁ < n₂ : l'acide salicylique est le réactif limitant, l'anhydride est en excès.",
              "Quantité maximale d'aspirine : n(max) = n₁ ≈ 3,62 × 10⁻² mol, soit m(max) = 3,62 × 10⁻² × 180 ≈ 6,5 g.",
              "Rendement : η = m(exp) ÷ m(max) = 4,6 ÷ 6,52 ≈ 0,71.",
              "Réponse : le rendement de la synthèse est d'environ 71 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On synthétise du paracétamol C₈H₉NO₂ à partir de 0,050 mol de 4-aminophénol (réactif limitant) et d'un excès d'anhydride éthanoïque. Les deux réactifs réagissent mole à mole et une mole de 4-aminophénol donne une mole de paracétamol. On obtient 5,4 g de paracétamol pur (données fictives). Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; M(N) = 14,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹. 1. Calculer la masse molaire du paracétamol. 2. Calculer la masse maximale de paracétamol, puis le rendement.",
              hint: "La quantité maximale de produit est égale à la quantité initiale du réactif limitant, ici en proportion une pour une.",
              solution: [
                "1. M(C₈H₉NO₂) = 8 × 12,0 + 9 × 1,0 + 14,0 + 2 × 16,0 = 96,0 + 9,0 + 14,0 + 32,0 = 151,0 g·mol⁻¹.",
                "2. n(max) = 0,050 mol, donc m(max) = 0,050 × 151,0 ≈ 7,55 g.",
                "η = 5,4 ÷ 7,55 ≈ 0,72.",
                "Réponse : M = 151,0 g·mol⁻¹ ; m(max) ≈ 7,6 g ; rendement d'environ 72 %.",
              ],
            },
            {
              level: 2,
              statement: "On oxyde 2,0 mL d'alcool benzylique C₇H₈O par un excès d'oxydant pour obtenir de l'acide benzoïque C₇H₆O₂ : une mole d'alcool donne une mole d'acide. L'acide benzoïque, peu soluble dans l'eau froide, précipite quand on refroidit le mélange. Après filtration et séchage, on obtient 1,65 g de cristaux, qui fondent au banc Kofler à 122 °C (résultats fictifs). Données : M(C₇H₈O) = 108 g·mol⁻¹ ; M(C₇H₆O₂) = 122 g·mol⁻¹ ; masse volumique de l'alcool benzylique : 1,04 g·mL⁻¹ ; température de fusion de l'acide benzoïque pur : 122 °C. 1. Pourquoi refroidit-on le mélange avant de filtrer ? 2. Calculer le rendement. 3. Que peut-on conclure de la mesure au banc Kofler ?",
              hint: "Calculez la masse d'alcool avec la masse volumique, puis sa quantité de matière : c'est le réactif limitant.",
              solution: [
                "1. La solubilité de l'acide benzoïque diminue à froid : en refroidissant, on fait cristalliser la plus grande partie du produit, ce qui limite les pertes lors de la filtration.",
                "2. m(alcool) = 1,04 × 2,0 = 2,08 g ; n(alcool) = 2,08 ÷ 108 ≈ 1,93 × 10⁻² mol = n(max) d'acide.",
                "m(max) = 1,93 × 10⁻² × 122 ≈ 2,35 g ; η = 1,65 ÷ 2,35 ≈ 0,70.",
                "3. Les cristaux fondent à 122 °C, la température de fusion de l'acide benzoïque pur : le produit est bien de l'acide benzoïque, et il est pur (une impureté abaisserait la température de fusion).",
                "Réponse : rendement d'environ 70 % ; produit identifié et pur.",
              ],
            },
            {
              level: 3,
              statement: "L'acétate d'isoamyle C₇H₁₄O₂, à l'odeur de banane, est synthétisé ainsi. Étape 1 : dans un ballon, mélanger 20,0 mL d'alcool isoamylique C₅H₁₂O, 30,0 mL d'acide éthanoïque et quelques gouttes d'acide sulfurique ; chauffer à reflux 30 minutes. Étape 2 : refroidir, verser le mélange dans une solution saturée de chlorure de sodium ; transvaser dans une ampoule à décanter et éliminer la phase aqueuse. Étape 3 : laver la phase organique avec une solution d'hydrogénocarbonate de sodium, puis la sécher sur sulfate de magnésium anhydre et filtrer. Étape 4 : enregistrer le spectre infrarouge du liquide obtenu. On obtient 15,0 g d'ester (résultat fictif). Équation : C₅H₁₂O + C₂H₄O₂ → C₇H₁₄O₂ + H₂O. Données : alcool isoamylique, M = 88,0 g·mol⁻¹, ρ = 0,81 g·mL⁻¹, peu soluble dans l'eau ; acide éthanoïque, M = 60,0 g·mol⁻¹, ρ = 1,05 g·mL⁻¹, très soluble dans l'eau ; ester, M = 130,0 g·mol⁻¹, ρ = 0,87 g·mL⁻¹, très peu soluble dans l'eau salée. 1. Nommer chaque étape (transformation, isolement, purification, analyse). 2. Pourquoi verse-t-on le mélange dans de l'eau salée plutôt que dans de l'eau pure ? 3. La phase organique est-elle au-dessus ou au-dessous de la phase aqueuse ? 4. Calculer le rendement.",
              hint: "Pour la question 3, comparez la masse volumique de l'ester à celle de l'eau salée, supérieure à 1,0 g·mL⁻¹. Pour la question 4, déterminez le réactif limitant en comparant les quantités de matière, puisque la réaction se fait mole à mole.",
              solution: [
                "1. Étape 1 : transformation (chauffage à reflux) ; étape 2 : isolement (extraction par décantation) ; étape 3 : purification (lavage et séchage) ; étape 4 : analyse.",
                "2. L'ester est encore moins soluble dans l'eau salée que dans l'eau pure (relargage) : il se sépare mieux de la phase aqueuse, ce qui limite les pertes. L'acide éthanoïque restant, très soluble dans l'eau, passe en phase aqueuse.",
                "3. La phase organique, essentiellement de l'ester (ρ = 0,87 g·mL⁻¹), est moins dense que l'eau salée : elle est au-dessus.",
                "4. n(alcool) = 0,81 × 20,0 ÷ 88,0 = 16,2 ÷ 88,0 ≈ 0,184 mol ; n(acide) = 1,05 × 30,0 ÷ 60,0 = 31,5 ÷ 60,0 = 0,525 mol. L'alcool est le réactif limitant.",
                "n(max) d'ester = 0,184 mol, donc m(max) = 0,1841 × 130,0 ≈ 23,9 g ; η = 15,0 ÷ 23,9 ≈ 0,63.",
                "Réponse : le rendement est d'environ 63 %.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les opérations de la synthèse d'un ester liquide.",
            items: [
              "Chauffer à reflux le mélange des réactifs",
              "Refroidir puis verser le mélange dans de l'eau salée",
              "Séparer les phases dans l'ampoule à décanter",
              "Laver la phase organique à l'hydrogénocarbonate de sodium",
              "Sécher la phase organique sur sulfate de magnésium anhydre",
              "Filtrer pour retirer le desséchant",
              "Enregistrer le spectre infrarouge du produit",
            ],
          },
          quiz: [
            {
              q: "Quel est le rôle du réfrigérant dans un chauffage à reflux ?",
              options: ["Refroidir le mélange réactionnel pendant tout le chauffage", "Condenser les vapeurs pour éviter les pertes", "Accélérer la réaction", "Éliminer l'eau formée"],
              answer: 1,
              why: "Les vapeurs se condensent dans le réfrigérant et retombent dans le ballon : aucune espèce n'est perdue.",
            },
            {
              q: "Pour purifier un solide, on réalise :",
              options: ["une recristallisation", "une extraction liquide-liquide", "un chauffage à reflux", "un séchage sur sulfate de magnésium"],
              answer: 0,
              why: "La recristallisation exploite la différence de solubilité à chaud et à froid du produit et des impuretés.",
            },
            {
              q: "Un produit solide impur, au banc Kofler :",
              options: ["fond à une température plus élevée que le produit pur", "ne fond pas", "fond à la température des tables", "fond à une température plus basse que le produit pur"],
              answer: 3,
              why: "Les impuretés abaissent la température de fusion ; seul un produit pur fond à la valeur des tables.",
            },
            {
              q: "On attend 0,20 mol de produit et on en obtient 0,15 mol. Le rendement vaut :",
              options: ["0,05", "133 %", "75 %", "25 %"],
              answer: 2,
              why: "η = 0,15 ÷ 0,20 = 0,75, soit 75 %.",
            },
            {
              q: "La quantité de matière maximale de produit se calcule à partir :",
              options: ["du réactif en excès", "du réactif limitant", "de la masse de produit obtenue", "du volume du ballon"],
              answer: 1,
              why: "En supposant la transformation totale, c'est l'épuisement du réactif limitant qui fixe la quantité maximale de produit.",
            },
          ],
          trap: "Calculer la quantité maximale de produit à partir du réactif en excès, ou oublier de convertir un volume de liquide en masse (m = ρ × V) avant de calculer sa quantité de matière.",
          method: "Pour un rendement, rédigez toujours les mêmes lignes : quantités initiales des réactifs, réactif limitant (en tenant compte des coefficients), quantité puis masse maximale de produit, enfin η = m(exp) ÷ m(max). Vérifiez que le résultat est inférieur à 1 : sinon, le produit est humide ou impur, ou le calcul est faux.",
        },
      ],
    },
    /* ================================================================== */
    /* COMBUSTIONS ET ÉNERGIE CHIMIQUE                                      */
    /* ================================================================== */
    {
      id: 'combustions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "combustion-equation",
          title: "Écrire et exploiter l’équation d’une combustion",
          minutes: 30,
          objectives: [
            "Citer des exemples de combustibles usuels.",
            "Écrire l'équation de réaction de combustion complète d'un alcane et d'un alcool.",
            "Exploiter l'équation d'une combustion pour calculer les quantités de réactifs consommés et de produits formés.",
            "Citer des applications usuelles qui mettent en œuvre des combustions et les risques associés.",
          ],
          course: [
            {
              heading: "Combustibles et comburant",
              paragraphs: [
                "Une combustion est une transformation chimique entre un combustible et un comburant, le plus souvent le dioxygène de l'air, qui libère de l'énergie, principalement sous forme thermique et lumineuse. Pour qu'elle démarre, trois éléments doivent être réunis : le combustible, le comburant et une source d'énergie qui l'amorce (flamme, étincelle, point chaud). C'est le « triangle du feu » : supprimer l'un des trois côtés éteint le feu.",
                "Les combustibles usuels sont nombreux. Le gaz naturel est constitué essentiellement de méthane CH₄. Le propane C₃H₈ et le butane C₄H₁₀ sont vendus liquéfiés en bouteilles. L'essence, le gazole, le kérosène et le fioul sont des mélanges d'hydrocarbures issus du pétrole ; on modélise souvent l'essence par l'octane C₈H₁₈. S'y ajoutent le charbon, le bois et des alcools comme l'éthanol C₂H₆O, produit par fermentation de végétaux (bioéthanol).",
                "On distingue les combustibles fossiles (pétrole, gaz naturel, charbon), formés en des millions d'années à partir de matière organique enfouie et donc non renouvelables à l'échelle humaine, et les combustibles issus de la biomasse (bois, biocarburants), renouvelables si leur exploitation est maîtrisée.",
              ],
              box: { label: "Définition", text: "Combustion : transformation chimique entre un combustible et un comburant (en général le dioxygène O₂) qui libère de l'énergie thermique. Elle nécessite combustible, comburant et énergie d'activation (triangle du feu)." },
            },
            {
              heading: "La combustion complète d'un alcane ou d'un alcool",
              paragraphs: [
                "Lorsque le dioxygène est en quantité suffisante, la combustion d'un alcane ou d'un alcool est complète : elle ne produit que du dioxyde de carbone CO₂ et de l'eau H₂O. Pour écrire l'équation, on ajuste d'abord les atomes de carbone avec CO₂, puis les atomes d'hydrogène avec H₂O, et enfin les atomes d'oxygène avec O₂, en dernier car le dioxygène ne contient que de l'oxygène. Si le coefficient de O₂ est fractionnaire, on multiplie tous les coefficients par 2.",
                "Méthane : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Butane : un carbone donne un CO₂, donc C₄H₁₀ donne 4 CO₂ et 5 H₂O ; il faut 4 × 2 + 5 = 13 atomes d'oxygène, soit 13/2 O₂. En multipliant par 2 : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O. Vérification : 8 C, 20 H et 26 O de chaque côté.",
                "Pour un alcool, il ne faut pas oublier l'atome d'oxygène de la molécule elle-même. Éthanol : C₂H₆O donne 2 CO₂ et 3 H₂O, soit 7 atomes d'oxygène dans les produits ; l'éthanol en apporte 1, il en faut donc 6 provenant de O₂, soit 3 O₂. Équation : C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O.",
              ],
              box: { label: "Formule", text: "Alcane CnH₂n₊₂ : CnH₂n₊₂ + (3n + 1)/2 O₂ → n CO₂ + (n + 1) H₂O. Alcool CnH₂n₊₂O : CnH₂n₊₂O + 3n/2 O₂ → n CO₂ + (n + 1) H₂O. Ordre d'ajustement : C, puis H, puis O." },
            },
            {
              heading: "Combustion incomplète, risques et enjeux",
              paragraphs: [
                "Si le dioxygène manque (pièce mal aérée, appareil mal réglé, tirage insuffisant), la combustion est incomplète : elle produit aussi du monoxyde de carbone CO et du carbone solide C (les suies). Exemple : 2 CH₄ + 3 O₂ → 2 CO + 4 H₂O. La flamme, bleue lors d'une combustion complète, devient jaune et éclairante, à cause des particules de carbone portées à haute température.",
                "Le monoxyde de carbone est un gaz incolore, inodore et très toxique : il se fixe sur l'hémoglobine du sang à la place du dioxygène. Il provoque chaque hiver des intoxications, d'où l'obligation d'entretenir les chaudières, de ne jamais boucher les aérations et l'intérêt des détecteurs de CO. Les combustions présentent d'autres risques : incendies, explosions de mélanges gazeux, brûlures.",
                "Les combustions sont partout : chauffage, cuisson, production d'électricité dans les centrales thermiques, moteurs des véhicules et des avions. Mais la combustion des combustibles fossiles rejette du CO₂, principal gaz à effet de serre d'origine humaine, ainsi que des polluants (particules fines, oxydes d'azote). Les axes d'étude actuels visent à réduire ces rejets : biocarburants, dihydrogène dont la combustion ne produit que de l'eau (2 H₂ + O₂ → 2 H₂O), amélioration des rendements, captage et stockage du CO₂.",
              ],
              box: { label: "À retenir", text: "Combustion complète : CO₂ et H₂O, flamme bleue. Combustion incomplète (manque de O₂) : CO toxique et suies C, flamme jaune. Aérer, entretenir les appareils, installer un détecteur de CO." },
            },
            {
              heading: "Exploiter l'équation d'une combustion",
              paragraphs: [
                "Les coefficients stœchiométriques indiquent dans quelles proportions les réactifs sont consommés et les produits formés. Pour la combustion complète du butane, 2 mol de butane réagissent avec 13 mol de dioxygène et forment 8 mol de CO₂ et 10 mol d'eau. Si n(butane) est consommé, il se forme n(CO₂) = 4 × n(butane) et il faut n(O₂) = 6,5 × n(butane).",
                "Exemple : combustion complète de 1,0 kg de butane (M = 58,0 g·mol⁻¹). n(butane) = 1000 ÷ 58,0 ≈ 17,2 mol, donc n(CO₂) = 4 × 17,24 ≈ 69,0 mol et m(CO₂) = 69,0 × 44,0 ≈ 3,0 × 10³ g. Brûler 1 kg de butane rejette donc environ 3 kg de CO₂ : la masse de CO₂ dépasse celle du combustible, car chaque atome de carbone s'associe à deux atomes d'oxygène pris dans l'air.",
                "Pour un gaz, on passe des quantités de matière aux volumes avec le volume molaire : à température et pression données, les volumes de gaz sont dans les mêmes proportions que les quantités de matière. Ainsi, brûler 1,0 L de méthane consomme 2,0 L de dioxygène, mesurés dans les mêmes conditions.",
              ],
              box: { label: "Méthode", text: "Pour une réaction a A + b B → c C + d D, consommer n(A) mol de A consomme n(A) × b/a mol de B et forme n(A) × c/a mol de C. Puis m = n × M pour une masse, V = n × Vm pour un gaz." },
            },
          ],
          keyPoints: [
            "Combustion : combustible + comburant (O₂), avec une énergie d'amorçage : triangle du feu.",
            "Combustion complète d'un alcane ou d'un alcool : seulement CO₂ et H₂O.",
            "Ajuster dans l'ordre C, H puis O ; pour un alcool, compter l'oxygène de la molécule.",
            "Combustion incomplète : CO, gaz incolore, inodore et toxique, et suies.",
            "Brûler 1 kg d'hydrocarbure rejette environ 3 kg de CO₂, gaz à effet de serre.",
          ],
          example: {
            statement: "On modélise l'essence par l'octane C₈H₁₈. 1. Écrire l'équation de sa combustion complète. 2. Calculer la masse de CO₂ rejetée par la combustion complète de 1,00 kg d'octane. Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹.",
            solution: [
              "1. Carbone : C₈H₁₈ donne 8 CO₂ ; hydrogène : 18 H donnent 9 H₂O. Oxygène dans les produits : 8 × 2 + 9 = 25 atomes, soit 25/2 O₂.",
              "En multipliant par 2 : 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O. Vérification : 16 C, 36 H, 50 O de chaque côté.",
              "2. M(C₈H₁₈) = 8 × 12,0 + 18 × 1,0 = 114,0 g·mol⁻¹ ; n(octane) = 1000 ÷ 114,0 ≈ 8,77 mol.",
              "D'après l'équation, n(CO₂) = 16/2 × n(octane) = 8 × 8,772 ≈ 70,2 mol.",
              "M(CO₂) = 44,0 g·mol⁻¹, donc m(CO₂) = 70,18 × 44,0 ≈ 3,09 × 10³ g.",
              "Réponse : 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O ; environ 3,09 kg de CO₂ par kilogramme d'octane.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire l'équation de la combustion complète de chacun des combustibles suivants : (a) le propane C₃H₈ ; (b) l'hexane C₆H₁₄ ; (c) le méthanol CH₄O.",
              hint: "Ajustez le carbone, puis l'hydrogène, puis l'oxygène. Pour le méthanol, retranchez l'atome d'oxygène apporté par la molécule.",
              solution: [
                "(a) C₃H₈ donne 3 CO₂ et 4 H₂O, soit 3 × 2 + 4 = 10 O, donc 5 O₂ : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.",
                "(b) C₆H₁₄ donne 6 CO₂ et 7 H₂O, soit 12 + 7 = 19 O, donc 19/2 O₂ ; en multipliant par 2 : 2 C₆H₁₄ + 19 O₂ → 12 CO₂ + 14 H₂O.",
                "(c) CH₄O donne 1 CO₂ et 2 H₂O, soit 4 O ; la molécule en apporte 1, il en faut 3 venant de O₂, soit 3/2 O₂ ; en multipliant par 2 : 2 CH₄O + 3 O₂ → 2 CO₂ + 4 H₂O.",
                "Vérification : (b) 12 C, 28 H, 38 O de chaque côté ; (c) 2 C, 8 H, 8 O de chaque côté.",
              ],
            },
            {
              level: 2,
              statement: "Une cuisinière brûle 1,0 L de méthane, mesuré à 20 °C sous 1,013 bar. Données : volume molaire dans ces conditions : 24,0 L·mol⁻¹ ; l'air contient environ 21 % de dioxygène en volume ; M(CO₂) = 44,0 g·mol⁻¹ ; M(H₂O) = 18,0 g·mol⁻¹. 1. Écrire l'équation de la combustion complète du méthane. 2. Quel volume de dioxygène, puis d'air, est nécessaire ? 3. Calculer les masses de dioxyde de carbone et d'eau formées.",
              hint: "Pour des gaz pris dans les mêmes conditions, les volumes sont proportionnels aux quantités de matière, donc aux coefficients de l'équation.",
              solution: [
                "1. CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
                "2. Il faut deux fois plus de dioxygène que de méthane : V(O₂) = 2,0 L. L'air n'en contient que 21 % : V(air) = 2,0 ÷ 0,21 ≈ 9,5 L.",
                "3. n(CH₄) = 1,0 ÷ 24,0 ≈ 4,17 × 10⁻² mol ; n(CO₂) = n(CH₄) ≈ 4,17 × 10⁻² mol, donc m(CO₂) = 4,17 × 10⁻² × 44,0 ≈ 1,8 g.",
                "n(H₂O) = 2 × n(CH₄) ≈ 8,33 × 10⁻² mol, donc m(H₂O) = 8,33 × 10⁻² × 18,0 ≈ 1,5 g.",
                "Réponse : 2,0 L de dioxygène, soit environ 9,5 L d'air ; environ 1,8 g de CO₂ et 1,5 g d'eau.",
              ],
            },
            {
              level: 3,
              statement: "Un chauffage d'appoint au propane C₃H₈ fonctionne dans une pièce fermée. Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹. 1. Écrire l'équation de la combustion complète du propane et calculer la quantité de dioxygène nécessaire pour brûler complètement 88 g de propane. 2. La pièce étant mal aérée, on suppose que seulement 7,0 mol de dioxygène sont disponibles pour ces 88 g de propane. La combustion devient incomplète et produit du monoxyde de carbone et de l'eau. Écrire l'équation de cette combustion incomplète, puis vérifier que les 7,0 mol de dioxygène correspondent exactement à cette équation. 3. Calculer la masse de monoxyde de carbone formée. 4. Expliquer pourquoi la notice impose une aération permanente et pourquoi un détecteur de CO est recommandé.",
              hint: "Pour l'équation incomplète, remplacez CO₂ par CO : chaque carbone ne prend plus qu'un atome d'oxygène. Ajustez ensuite comme d'habitude, C puis H puis O.",
              solution: [
                "1. C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. M(C₃H₈) = 3 × 12,0 + 8 × 1,0 = 44,0 g·mol⁻¹, donc n(C₃H₈) = 88 ÷ 44,0 = 2,0 mol et n(O₂) = 5 × 2,0 = 10 mol.",
                "2. Avec CO : C₃H₈ donne 3 CO et 4 H₂O, soit 3 + 4 = 7 atomes d'oxygène, donc 7/2 O₂ ; en multipliant par 2 : 2 C₃H₈ + 7 O₂ → 6 CO + 8 H₂O.",
                "Pour 2,0 mol de propane, cette équation demande exactement 7,0 mol de dioxygène : c'est la quantité disponible.",
                "3. n(CO) = 6/2 × n(C₃H₈) = 3 × 2,0 = 6,0 mol ; M(CO) = 28,0 g·mol⁻¹, donc m(CO) = 6,0 × 28,0 = 168 g.",
                "4. Sans aération, le dioxygène s'épuise et la combustion devient incomplète, produisant du CO. Ce gaz incolore et inodore est indétectable par nos sens et très toxique : seul un détecteur peut alerter à temps.",
                "Réponse : 10 mol de O₂ pour la combustion complète ; 2 C₃H₈ + 7 O₂ → 6 CO + 8 H₂O ; environ 1,7 × 10² g de CO.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque combustible ou produit à sa description.",
            pairs: [
              { left: "Méthane CH₄", right: "Constituant principal du gaz naturel" },
              { left: "Butane C₄H₁₀", right: "Vendu liquéfié en bouteilles" },
              { left: "Octane C₈H₁₈", right: "Modèle de l'essence" },
              { left: "Éthanol C₂H₆O", right: "Biocarburant issu de la fermentation de végétaux" },
              { left: "Monoxyde de carbone CO", right: "Gaz toxique d'une combustion incomplète" },
              { left: "Dihydrogène H₂", right: "Sa combustion ne produit que de l'eau" },
            ],
          },
          quiz: [
            {
              q: "Quels sont les produits de la combustion complète d'un alcane ?",
              options: ["CO et H₂O", "CO₂ et H₂", "CO₂ et H₂O", "C et H₂O"],
              answer: 2,
              why: "Une combustion complète transforme le carbone en CO₂ et l'hydrogène en H₂O.",
            },
            {
              q: "Dans l'équation C₂H₆O + x O₂ → 2 CO₂ + 3 H₂O, le coefficient x vaut :",
              options: ["3", "7/2", "2", "4"],
              answer: 0,
              why: "Les produits contiennent 7 atomes d'oxygène ; l'éthanol en apporte 1, il en faut 6, soit 3 O₂.",
            },
            {
              q: "Une flamme jaune et éclairante signale :",
              options: ["une combustion complète", "un excès de dioxygène", "une combustion sans production d'eau", "une combustion incomplète"],
              answer: 3,
              why: "Les particules de carbone (suies) portées à haute température rendent la flamme jaune : le dioxygène manque.",
            },
            {
              q: "Pourquoi le monoxyde de carbone est-il particulièrement dangereux ?",
              options: ["Il est explosif dès qu'il est en contact avec l'air libre", "Il est inodore et se fixe sur l'hémoglobine", "Il est corrosif pour la peau", "Il colore la flamme en bleu"],
              answer: 1,
              why: "Incolore et inodore, il passe inaperçu, et il empêche le sang de transporter le dioxygène.",
            },
            {
              q: "On brûle complètement 2,0 mol de méthane. Quelle quantité de CO₂ se forme ?",
              options: ["1,0 mol", "2,0 mol", "4,0 mol", "6,0 mol"],
              answer: 1,
              why: "D'après CH₄ + 2 O₂ → CO₂ + 2 H₂O, une mole de méthane donne une mole de CO₂.",
            },
          ],
          trap: "Oublier l'atome d'oxygène contenu dans la molécule d'alcool lorsqu'on ajuste le dioxygène, ou ajuster l'oxygène avant le carbone et l'hydrogène, ce qui oblige à tout recommencer.",
          method: "Ajustez toujours dans l'ordre C, H puis O, et terminez par un tableau de vérification : nombre d'atomes de chaque élément à gauche et à droite. Pour exploiter l'équation, écrivez la proportion littérale (par exemple n(CO₂) = 4 × n(butane)) avant de remplacer par les valeurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "energie-combustion",
          title: "Énergie libérée, pouvoir calorifique et énergies de liaison",
          minutes: 35,
          objectives: [
            "Calculer l'énergie libérée par une combustion à partir de l'énergie molaire de réaction ou du pouvoir calorifique massique.",
            "Estimer l'énergie molaire de réaction pour une transformation en phase gazeuse à partir des énergies des liaisons.",
            "Mettre en évidence et exploiter l'effet thermique d'une combustion.",
          ],
          course: [
            {
              heading: "L'énergie molaire de réaction",
              paragraphs: [
                "Une combustion est une transformation exothermique : le système chimique cède de l'énergie au milieu extérieur, principalement par transfert thermique. Pour comparer les combustibles, on définit l'énergie molaire de réaction Er : c'est l'énergie échangée par le système lorsqu'une mole de combustible est consommée (l'équation étant écrite avec le coefficient 1 pour le combustible). Elle s'exprime en J·mol⁻¹ ou en kJ·mol⁻¹.",
                "Par convention, l'énergie cédée par le système est comptée négativement : pour une combustion, Er < 0. Exemple : pour le méthane, Er ≈ -8,0 × 10² kJ·mol⁻¹ (l'eau étant formée à l'état gazeux). L'énergie libérée par la combustion d'une quantité n de combustible est alors Q = n × |Er|. Brûler 0,50 mol de méthane libère environ 0,50 × 8,0 × 10² = 4,0 × 10² kJ.",
              ],
              box: { label: "Formule", text: "Énergie libérée par la combustion de n moles de combustible : Q = n × |Er|, avec Er l'énergie molaire de réaction (Er < 0 pour une combustion, en kJ·mol⁻¹), n en mol et Q en kJ." },
            },
            {
              heading: "Le pouvoir calorifique",
              paragraphs: [
                "Dans la vie courante, on raisonne plutôt en masse. Le pouvoir calorifique massique PC d'un combustible est l'énergie libérée par la combustion complète d'un kilogramme de ce combustible. Il s'exprime en MJ·kg⁻¹ (ou, ce qui revient au même, en kJ·g⁻¹). Il se déduit de l'énergie molaire de réaction : PC = |Er| ÷ M. L'énergie libérée par la combustion d'une masse m vaut Q = m × PC.",
                "Ordres de grandeur (valeurs approchées, eau formée à l'état de vapeur) : dihydrogène environ 120 MJ·kg⁻¹ ; méthane environ 50 MJ·kg⁻¹ ; propane et butane environ 46 MJ·kg⁻¹ ; essence environ 43 MJ·kg⁻¹ ; éthanol environ 27 MJ·kg⁻¹ ; bois sec environ 15 à 18 MJ·kg⁻¹. À masse égale, les hydrocarbures libèrent environ deux fois plus d'énergie que l'éthanol, déjà partiellement oxydé puisque sa molécule contient un atome d'oxygène.",
                "Le choix d'un combustible ne dépend pas que du pouvoir calorifique : il faut aussi considérer la masse de CO₂ rejetée par mégajoule produit, le caractère renouvelable, la facilité de stockage et la sécurité. Le dihydrogène a un pouvoir calorifique massique record et ne rejette que de l'eau, mais c'est un gaz très léger, difficile à stocker, et il est encore surtout produit à partir de gaz naturel.",
              ],
              box: { label: "Formule", text: "Pouvoir calorifique massique : PC = |Er| ÷ M, en kJ·g⁻¹ = MJ·kg⁻¹. Énergie libérée par la combustion d'une masse m : Q = m × PC." },
            },
            {
              heading: "Estimer Er avec les énergies de liaison",
              paragraphs: [
                "L'énergie de liaison D(A-B) est l'énergie qu'il faut fournir pour rompre une mole de liaisons A-B, les espèces étant à l'état gazeux, et obtenir les atomes séparés, eux aussi gazeux. Elle est toujours positive. Inversement, la formation d'une mole de liaisons A-B libère la même énergie D(A-B). Valeurs moyennes, en kJ·mol⁻¹ : C-H 413 ; C-C 348 ; C-O 358 ; O-H 463 ; O=O 498 ; C=O (dans CO₂) 804 ; H-H 436.",
                "Pour une transformation en phase gazeuse, on modélise la réaction en deux temps : toutes les liaisons des réactifs sont rompues, ce qui coûte de l'énergie, puis toutes les liaisons des produits sont formées, ce qui en libère. D'où l'estimation Er ≈ Σ D(liaisons rompues) - Σ D(liaisons formées). Si les liaisons formées sont globalement plus fortes que les liaisons rompues, Er est négative : la réaction est exothermique. C'est le cas des combustions, car les liaisons C=O et O-H des produits sont très solides.",
                "Exemple : H₂ + ½ O₂ → H₂O, en phase gazeuse. Liaisons rompues : une H-H et une demi-liaison O=O, soit 436 + 0,5 × 498 = 685 kJ·mol⁻¹. Liaisons formées : deux O-H, soit 2 × 463 = 926 kJ·mol⁻¹. Er ≈ 685 - 926 = -241 kJ·mol⁻¹ par mole de dihydrogène. Cette méthode donne une estimation, car les énergies de liaison sont des moyennes sur de nombreuses molécules.",
              ],
              box: { label: "Formule", text: "Pour une réaction en phase gazeuse : Er ≈ Σ D(liaisons rompues dans les réactifs) - Σ D(liaisons formées dans les produits). Une énergie de liaison est toujours positive ; Er < 0 pour une réaction exothermique." },
            },
            {
              heading: "Mettre en évidence l'effet thermique",
              paragraphs: [
                "L'énergie libérée par une combustion peut chauffer de l'eau. L'énergie reçue par une masse m d'eau dont la température varie de ΔT vaut Q = m × c × ΔT, où c est la capacité thermique massique de l'eau : c = 4,18 J·g⁻¹·°C⁻¹ (soit 4,18 × 10³ J·kg⁻¹·K⁻¹). Il faut donc 4,18 kJ pour élever de 1 °C la température d'un kilogramme d'eau.",
                "Expérience classique : une lampe à alcool chauffe une canette contenant de l'eau. On mesure la masse d'alcool brûlé (en pesant la lampe avant et après) et l'élévation de température de l'eau. L'énergie reçue par l'eau est toujours inférieure à l'énergie libérée par la combustion, calculée avec Er : une grande partie part dans l'air, dans la canette et dans la flamme elle-même. Le quotient des deux énergies mesure l'efficacité du dispositif.",
              ],
              box: { label: "À retenir", text: "Énergie reçue par l'eau : Q = m × c × ΔT, avec c(eau) = 4,18 J·g⁻¹·°C⁻¹. Elle est inférieure à l'énergie libérée par la combustion à cause des pertes vers l'extérieur." },
            },
          ],
          keyPoints: [
            "Une combustion est exothermique : Er < 0 ; énergie libérée Q = n × |Er|.",
            "Pouvoir calorifique massique : PC = |Er| ÷ M, en MJ·kg⁻¹ ; Q = m × PC.",
            "Énergie de liaison : énergie pour rompre une mole de liaisons à l'état gazeux, toujours positive.",
            "En phase gazeuse : Er ≈ Σ D(rompues) - Σ D(formées).",
            "Chauffage de l'eau : Q = m × c × ΔT, c = 4,18 J·g⁻¹·°C⁻¹ ; des pertes réduisent l'énergie récupérée.",
          ],
          example: {
            statement: "Estimer l'énergie molaire de réaction de la combustion complète du méthane, CH₄ + 2 O₂ → CO₂ + 2 H₂O, toutes les espèces étant gazeuses, puis en déduire le pouvoir calorifique massique du méthane. Données (kJ·mol⁻¹) : D(C-H) = 413 ; D(O=O) = 498 ; D(C=O) dans CO₂ = 804 ; D(O-H) = 463. M(CH₄) = 16,0 g·mol⁻¹.",
            solution: [
              "Liaisons rompues : 4 liaisons C-H dans CH₄ et 2 liaisons O=O, soit 4 × 413 + 2 × 498 = 1652 + 996 = 2648 kJ·mol⁻¹.",
              "Liaisons formées : 2 liaisons C=O dans CO₂ et 2 × 2 = 4 liaisons O-H dans les deux molécules d'eau, soit 2 × 804 + 4 × 463 = 1608 + 1852 = 3460 kJ·mol⁻¹.",
              "Er ≈ 2648 - 3460 = -812 kJ·mol⁻¹ : négative, la combustion est bien exothermique.",
              "Pouvoir calorifique : PC = |Er| ÷ M = 812 ÷ 16,0 ≈ 50,8 kJ·g⁻¹, soit environ 51 MJ·kg⁻¹.",
              "Réponse : Er ≈ -812 kJ·mol⁻¹ ; PC ≈ 51 MJ·kg⁻¹, proche de la valeur tabulée d'environ 50 MJ·kg⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une bouteille de camping contient 500 g de butane. Données : pouvoir calorifique massique du butane : 46 MJ·kg⁻¹ ; de l'éthanol : 27 MJ·kg⁻¹. 1. Calculer l'énergie libérée par la combustion complète de tout le butane. 2. Quelle masse d'éthanol faudrait-il brûler pour libérer la même énergie ?",
              hint: "Convertissez la masse en kilogrammes pour utiliser Q = m × PC avec PC en MJ·kg⁻¹.",
              solution: [
                "1. Q = m × PC = 0,500 × 46 = 23 MJ.",
                "2. m(éthanol) = Q ÷ PC(éthanol) = 23 ÷ 27 ≈ 0,85 kg.",
                "Réponse : 23 MJ ; il faudrait environ 0,85 kg d'éthanol, soit 1,7 fois plus de masse que de butane.",
              ],
            },
            {
              level: 2,
              statement: "On étudie la combustion du dihydrogène, H₂ + ½ O₂ → H₂O, toutes les espèces étant gazeuses. Données (kJ·mol⁻¹) : D(H-H) = 436 ; D(O=O) = 498 ; D(O-H) = 463. M(H₂) = 2,0 g·mol⁻¹. 1. Estimer l'énergie molaire de réaction, par mole de dihydrogène. 2. En déduire le pouvoir calorifique massique du dihydrogène en MJ·kg⁻¹. 3. Le comparer à celui du méthane (environ 51 MJ·kg⁻¹) et citer un avantage environnemental du dihydrogène.",
              hint: "Une molécule d'eau contient deux liaisons O-H ; la demi-mole de dioxygène correspond à une demi-liaison O=O rompue par mole de dihydrogène.",
              solution: [
                "1. Liaisons rompues : 436 + 0,5 × 498 = 436 + 249 = 685 kJ·mol⁻¹. Liaisons formées : 2 × 463 = 926 kJ·mol⁻¹.",
                "Er ≈ 685 - 926 = -241 kJ·mol⁻¹.",
                "2. PC = |Er| ÷ M = 241 ÷ 2,0 ≈ 120 kJ·g⁻¹, soit environ 1,2 × 10² MJ·kg⁻¹.",
                "3. C'est plus du double du pouvoir calorifique du méthane (120 ÷ 51 ≈ 2,4). Sa combustion ne produit que de l'eau, sans rejet de CO₂.",
                "Réponse : Er ≈ -241 kJ·mol⁻¹ ; PC ≈ 1,2 × 10² MJ·kg⁻¹, environ 2,4 fois celui du méthane, sans CO₂ rejeté.",
              ],
            },
            {
              level: 3,
              statement: "Pour mettre en évidence l'effet thermique d'une combustion, un élève chauffe 200 g d'eau contenue dans une canette avec une lampe à éthanol. La température de l'eau passe de 20,0 °C à 45,0 °C ; la lampe a perdu 1,20 g (données fictives). Équation : C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O. Données (kJ·mol⁻¹) : D(C-H) = 413 ; D(C-C) = 348 ; D(C-O) = 358 ; D(O-H) = 463 ; D(O=O) = 498 ; D(C=O) dans CO₂ = 804. M(C₂H₆O) = 46,0 g·mol⁻¹ ; c(eau) = 4,18 J·g⁻¹·°C⁻¹. La formule semi-développée de l'éthanol est CH₃-CH₂-OH. 1. Calculer l'énergie reçue par l'eau. 2. Estimer l'énergie molaire de réaction de la combustion de l'éthanol (on admet que le calcul en phase gazeuse s'applique). 3. Calculer l'énergie libérée par la combustion de l'éthanol brûlé. 4. Calculer le quotient de l'énergie reçue par l'eau par l'énergie libérée et proposer deux explications à l'écart observé.",
              hint: "Dénombrez soigneusement les liaisons de CH₃-CH₂-OH : 5 liaisons C-H, une C-C, une C-O et une O-H. Ne mélangez pas les joules et les kilojoules.",
              solution: [
                "1. Q(eau) = m × c × ΔT = 200 × 4,18 × (45,0 - 20,0) = 20 900 J ≈ 20,9 kJ.",
                "2. Liaisons rompues : 5 × 413 + 348 + 358 + 463 + 3 × 498 = 2065 + 348 + 358 + 463 + 1494 = 4728 kJ·mol⁻¹.",
                "Liaisons formées : 2 CO₂ contiennent 4 liaisons C=O et 3 H₂O contiennent 6 liaisons O-H, soit 4 × 804 + 6 × 463 = 3216 + 2778 = 5994 kJ·mol⁻¹. Er ≈ 4728 - 5994 = -1266 kJ·mol⁻¹.",
                "3. n(éthanol) = 1,20 ÷ 46,0 ≈ 2,61 × 10⁻² mol ; Q(libérée) = n × |Er| = 2,609 × 10⁻² × 1266 ≈ 33,0 kJ.",
                "4. Quotient : 20,9 ÷ 33,0 ≈ 0,63, soit environ 63 %. Une partie de l'énergie chauffe l'air et la canette au lieu de l'eau ; de plus, l'estimation par les énergies de liaison suppose toutes les espèces gazeuses, alors que l'éthanol est liquide (il faut d'abord le vaporiser) et que les énergies de liaison sont des valeurs moyennes.",
                "Réponse : 20,9 kJ reçus par l'eau, Er ≈ -1266 kJ·mol⁻¹, 33,0 kJ libérés ; seulement 63 % environ de l'énergie libérée chauffe l'eau.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'énergie des combustions.",
            statements: [
              { text: "Une énergie de liaison est toujours positive.", true: true, why: "C'est l'énergie qu'il faut fournir pour rompre une mole de liaisons." },
              { text: "Rompre des liaisons libère de l'énergie.", true: false, why: "Rompre des liaisons en consomme ; c'est leur formation qui libère de l'énergie." },
              { text: "Pour une combustion, l'énergie molaire de réaction est négative.", true: true, why: "Le système cède de l'énergie au milieu extérieur, compté négativement." },
              { text: "À masse égale, l'éthanol libère plus d'énergie que le butane.", true: false, why: "Environ 27 MJ·kg⁻¹ pour l'éthanol contre environ 46 MJ·kg⁻¹ pour le butane." },
              { text: "Le pouvoir calorifique massique peut s'exprimer en kJ·g⁻¹.", true: true, why: "1 kJ·g⁻¹ = 1 MJ·kg⁻¹ : les deux unités sont équivalentes." },
              { text: "Toute l'énergie libérée par une lampe à alcool est reçue par l'eau chauffée.", true: false, why: "Une grande partie chauffe l'air, le récipient et se perd par rayonnement." },
              { text: "La méthode des énergies de liaison s'applique à des espèces gazeuses.", true: true, why: "Les énergies de liaison sont définies pour des espèces à l'état gazeux." },
            ],
          },
          quiz: [
            {
              q: "On brûle 0,20 mol d'un combustible dont Er = -2,0 × 10³ kJ·mol⁻¹. L'énergie libérée vaut :",
              options: ["4,0 × 10² kJ", "1,0 × 10⁴ kJ", "2,0 × 10² kJ", "-4,0 × 10³ kJ"],
              answer: 0,
              why: "Q = n × |Er| = 0,20 × 2,0 × 10³ = 4,0 × 10² kJ.",
            },
            {
              q: "Le pouvoir calorifique massique d'un combustible est :",
              options: ["l'énergie qu'il faut fournir pour rompre toutes les liaisons de ses molécules", "l'énergie libérée par la combustion complète d'un kilogramme", "la température de sa flamme", "la masse de CO₂ qu'il rejette"],
              answer: 1,
              why: "Le PC est l'énergie libérée par kilogramme de combustible brûlé complètement, en MJ·kg⁻¹.",
            },
            {
              q: "Pour une réaction en phase gazeuse, l'énergie molaire de réaction est estimée par :",
              options: ["Σ D(formées) + Σ D(rompues)", "Σ D(formées) - Σ D(rompues)", "Σ D(rompues) × Σ D(formées)", "Σ D(rompues) - Σ D(formées)"],
              answer: 3,
              why: "On paie l'énergie des liaisons rompues et on récupère celle des liaisons formées : Er ≈ Σ D(rompues) - Σ D(formées).",
            },
            {
              q: "Quelle énergie faut-il pour chauffer 1,0 kg d'eau de 20 °C à 30 °C ? (c = 4,18 J·g⁻¹·°C⁻¹)",
              options: ["4,18 kJ", "418 J", "41,8 kJ", "125 kJ"],
              answer: 2,
              why: "Q = m × c × ΔT = 1000 × 4,18 × 10 = 41 800 J ≈ 41,8 kJ.",
            },
            {
              q: "Une combustion est exothermique parce que :",
              options: ["les liaisons formées sont globalement plus fortes que les liaisons rompues", "elle ne rompt aucune liaison", "elle consomme de l'énergie thermique prélevée au milieu extérieur pendant la transformation", "elle se fait toujours à haute pression"],
              answer: 0,
              why: "Les liaisons C=O et O-H formées libèrent plus d'énergie que n'en coûte la rupture des liaisons des réactifs.",
            },
          ],
          trap: "Inverser l'ordre dans Er ≈ Σ D(rompues) - Σ D(formées), ce qui donne une valeur positive pour une combustion, ou oublier de multiplier chaque énergie de liaison par le nombre de liaisons et par le coefficient stœchiométrique de la molécule.",
          method: "Avant de calculer Er, dessinez ou écrivez la formule développée de chaque molécule et dressez deux listes : liaisons rompues (réactifs, multipliées par les coefficients) et liaisons formées (produits). Contrôlez le signe à la fin : une combustion doit donner Er < 0.",
        },
      ],
    },
    /* ================================================================== */
    /* INTERACTIONS FONDAMENTALES ET CHAMPS                                 */
    /* ================================================================== */
    {
      id: 'interactions-champs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "loi-coulomb-gravitation",
          title: "Loi de Coulomb et loi de la gravitation universelle",
          minutes: 30,
          objectives: [
            "Interpréter des expériences d'électrisation mettant en jeu l'interaction électrostatique.",
            "Utiliser la loi de Coulomb pour calculer la force électrostatique entre deux charges ponctuelles.",
            "Utiliser l'expression vectorielle de la force de gravitation et celle de la force électrostatique.",
            "Citer les analogies et les différences entre la loi de Coulomb et la loi de la gravitation universelle.",
          ],
          course: [
            {
              heading: "La charge électrique et l'électrisation",
              paragraphs: [
                "La matière est formée d'atomes, eux-mêmes constitués d'un noyau chargé positivement (les protons) et d'électrons chargés négativement. Toute charge électrique est un multiple entier de la charge élémentaire e = 1,6 × 10⁻¹⁹ C (le coulomb, C, est l'unité de charge) : un proton porte la charge +e, un électron la charge -e. Un corps qui contient autant de protons que d'électrons est neutre.",
                "Un corps s'électrise lorsqu'il gagne ou perd des électrons ; les protons, liés aux noyaux, ne se déplacent pas. Une règle en plastique frottée avec un chiffon de laine lui arrache des électrons : la règle devient négative, le chiffon positif. L'électrisation peut aussi se faire par contact avec un corps chargé, ou par influence : une règle chargée approchée de petits morceaux de papier neutres attire leurs charges de signe opposé du côté le plus proche, et les morceaux de papier sont attirés.",
                "L'expérience montre que deux corps portant des charges de même signe se repoussent, et que deux corps portant des charges de signes opposés s'attirent. Deux pendules électrostatiques (petites boules légères suspendues à un fil) chargés de la même façon s'écartent l'un de l'autre.",
              ],
              box: { label: "À retenir", text: "Charge élémentaire : e = 1,6 × 10⁻¹⁹ C. Une charge électrique vaut q = N × e (N entier, positif ou négatif). Charges de même signe : répulsion ; charges de signes opposés : attraction." },
            },
            {
              heading: "La loi de Coulomb",
              paragraphs: [
                "Deux corps ponctuels A et B, de charges qA et qB, séparés d'une distance d, exercent l'un sur l'autre des forces électrostatiques dirigées selon la droite (AB). Leur valeur commune est donnée par la loi de Coulomb, établie expérimentalement par Charles-Augustin Coulomb à la fin du XVIIIe siècle : F = k × |qA × qB| ÷ d², avec k = 9,0 × 10⁹ N·m²·C⁻², les charges en coulombs, la distance en mètres et la force en newtons.",
                "La force est proportionnelle à chacune des charges et inversement proportionnelle au carré de la distance : si la distance double, la force est divisée par 4 ; si elle est divisée par 10, la force est multipliée par 100. Sous forme vectorielle, en notant u le vecteur unitaire dirigé de A vers B, la force exercée par A sur B s'écrit F(A/B) = k × qA × qB ÷ d² × u. Si qA × qB > 0, F(A/B) a le sens de u : B est repoussé. Si qA × qB < 0, F(A/B) est de sens opposé : B est attiré vers A.",
                "D'après le principe des actions réciproques, B exerce sur A une force de même droite d'action, de même valeur et de sens opposé : F(B/A) = -F(A/B).",
              ],
              box: { label: "Formule", text: "Loi de Coulomb : F = k × |qA × qB| ÷ d², k = 9,0 × 10⁹ N·m²·C⁻². Forme vectorielle : F(A/B) = k × qA × qB ÷ d² × u, u unitaire de A vers B. Répulsive si qA et qB sont de même signe, attractive sinon." },
            },
            {
              heading: "La loi de la gravitation universelle",
              paragraphs: [
                "Isaac Newton a publié en 1687 la loi de la gravitation universelle : deux corps ponctuels A et B, de masses mA et mB, séparés d'une distance d, s'attirent avec des forces de valeur F = G × mA × mB ÷ d², où G = 6,67 × 10⁻¹¹ N·m²·kg⁻² est la constante de gravitation universelle, les masses étant en kg et la distance en m. La loi s'applique aussi à deux corps à répartition de masse sphérique (planètes, étoiles), d étant alors la distance entre leurs centres.",
                "Sous forme vectorielle, avec u unitaire de A vers B : F(A/B) = -G × mA × mB ÷ d² × u. Le signe moins traduit le fait que l'interaction gravitationnelle est toujours attractive : la force exercée par A sur B est dirigée de B vers A. Exemple : la force exercée par la Terre (5,97 × 10²⁴ kg) sur un élève de 60 kg à sa surface (d = 6,37 × 10⁶ m) vaut F = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 60 ÷ (6,37 × 10⁶)² ≈ 5,9 × 10² N : c'est, à peu de chose près, son poids.",
              ],
              box: { label: "Formule", text: "Gravitation : F = G × mA × mB ÷ d², G = 6,67 × 10⁻¹¹ N·m²·kg⁻². Forme vectorielle : F(A/B) = -G × mA × mB ÷ d² × u, u unitaire de A vers B. Toujours attractive." },
            },
            {
              heading: "Analogies, différences et ordres de grandeur",
              paragraphs: [
                "Les deux lois se ressemblent : forces portées par la droite qui joint les deux corps, proportionnelles au produit de deux grandeurs caractéristiques des corps (les charges, ou les masses), inversement proportionnelles au carré de la distance, et obéissant au principe des actions réciproques. Elles diffèrent par le sens : l'interaction gravitationnelle est toujours attractive, alors que l'interaction électrostatique peut être attractive ou répulsive, car il existe deux signes de charge.",
                "À l'échelle de l'atome, l'interaction électrostatique domine de très loin : dans l'atome d'hydrogène, elle est environ 10³⁹ fois plus intense que l'interaction gravitationnelle entre le proton et l'électron. C'est elle qui assure la cohésion des atomes, des molécules et des solides. À l'échelle astronomique, c'est l'inverse : les corps étant globalement neutres, les forces électrostatiques se compensent, alors que les masses s'additionnent toujours ; la gravitation gouverne le mouvement des planètes, des étoiles et des galaxies.",
              ],
              box: { label: "À retenir", text: "Même forme mathématique en 1 ÷ d². Gravitation : toujours attractive, domine à grande échelle. Électrostatique : attractive ou répulsive, domine à l'échelle des atomes et des molécules." },
            },
          ],
          keyPoints: [
            "Charge élémentaire e = 1,6 × 10⁻¹⁹ C ; l'électrisation est un transfert d'électrons.",
            "Loi de Coulomb : F = k × |qA × qB| ÷ d², k = 9,0 × 10⁹ N·m²·C⁻².",
            "Gravitation : F = G × mA × mB ÷ d², G = 6,67 × 10⁻¹¹ N·m²·kg⁻², toujours attractive.",
            "Les deux forces varient en 1 ÷ d² : distance doublée, force divisée par 4.",
            "Actions réciproques : F(B/A) = -F(A/B).",
            "Électrostatique dominante à l'échelle atomique, gravitation dominante à l'échelle astronomique.",
          ],
          example: {
            statement: "Dans l'atome d'hydrogène, l'électron et le proton sont séparés en moyenne de d = 5,3 × 10⁻¹¹ m. Données : e = 1,6 × 10⁻¹⁹ C ; k = 9,0 × 10⁹ N·m²·C⁻² ; G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; m(électron) = 9,11 × 10⁻³¹ kg ; m(proton) = 1,67 × 10⁻²⁷ kg. Calculer la valeur de la force électrostatique et celle de la force gravitationnelle entre les deux particules, puis leur rapport.",
            solution: [
              "Force électrostatique : Fe = k × e × e ÷ d² = 9,0 × 10⁹ × (1,6 × 10⁻¹⁹)² ÷ (5,3 × 10⁻¹¹)².",
              "(1,6 × 10⁻¹⁹)² = 2,56 × 10⁻³⁸ et (5,3 × 10⁻¹¹)² = 2,81 × 10⁻²¹, d'où Fe ≈ 9,0 × 10⁹ × 9,11 × 10⁻¹⁸ ≈ 8,2 × 10⁻⁸ N. Les charges étant opposées, la force est attractive.",
              "Force gravitationnelle : Fg = G × me × mp ÷ d² = 6,67 × 10⁻¹¹ × 9,11 × 10⁻³¹ × 1,67 × 10⁻²⁷ ÷ 2,81 × 10⁻²¹ ≈ 3,6 × 10⁻⁴⁷ N.",
              "Rapport : Fe ÷ Fg ≈ 8,2 × 10⁻⁸ ÷ 3,6 × 10⁻⁴⁷ ≈ 2,3 × 10³⁹.",
              "Réponse : Fe ≈ 8,2 × 10⁻⁸ N et Fg ≈ 3,6 × 10⁻⁴⁷ N ; la force électrostatique est environ 10³⁹ fois plus intense : la gravitation est négligeable à l'échelle de l'atome.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Deux petites sphères A et B, considérées comme ponctuelles, portent les charges qA = +2,0 µC et qB = -3,0 µC. Elles sont distantes de d = 30 cm. Donnée : k = 9,0 × 10⁹ N·m²·C⁻². 1. L'interaction est-elle attractive ou répulsive ? 2. Calculer la valeur de la force exercée par A sur B. 3. Que devient cette valeur si la distance est portée à 60 cm ?",
              hint: "Convertissez : 1 µC = 10⁻⁶ C et 30 cm = 0,30 m. Pour la question 3, utilisez la dépendance en 1 ÷ d².",
              solution: [
                "1. Les charges sont de signes opposés : l'interaction est attractive.",
                "2. F = k × |qA × qB| ÷ d² = 9,0 × 10⁹ × (2,0 × 10⁻⁶ × 3,0 × 10⁻⁶) ÷ 0,30² = 9,0 × 10⁹ × 6,0 × 10⁻¹² ÷ 0,090 = 5,4 × 10⁻² ÷ 0,090 = 0,60 N.",
                "3. La distance double, donc la force est divisée par 2² = 4 : F' = 0,60 ÷ 4 = 0,15 N.",
                "Réponse : attraction de 0,60 N, puis de 0,15 N à 60 cm.",
              ],
            },
            {
              level: 2,
              statement: "Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; masse de la Terre : 5,97 × 10²⁴ kg ; masse de la Lune : 7,35 × 10²² kg ; distance entre leurs centres : 3,84 × 10⁸ m. 1. Calculer la valeur de la force d'attraction gravitationnelle exercée par la Terre sur la Lune. 2. Quelle est la valeur de la force exercée par la Lune sur la Terre ? Justifier. 3. Représenter qualitativement ces deux forces sur un schéma (direction et sens).",
              hint: "Le principe des actions réciproques s'applique, même si la Terre est bien plus massive que la Lune.",
              solution: [
                "1. F = G × mT × mL ÷ d² = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ÷ (3,84 × 10⁸)².",
                "Numérateur : 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ≈ 2,93 × 10³⁷ ; dénominateur : (3,84 × 10⁸)² ≈ 1,47 × 10¹⁷. F ≈ 2,0 × 10²⁰ N.",
                "2. D'après le principe des actions réciproques, la Lune attire la Terre avec une force de même valeur, 2,0 × 10²⁰ N, de même droite d'action et de sens opposé.",
                "3. Sur le schéma, la force exercée par la Terre sur la Lune part du centre de la Lune et pointe vers le centre de la Terre ; la force exercée par la Lune sur la Terre part du centre de la Terre et pointe vers la Lune ; les deux flèches ont la même longueur.",
                "Réponse : environ 2,0 × 10²⁰ N dans les deux sens.",
              ],
            },
            {
              level: 3,
              statement: "Le noyau d'hélium contient deux protons et deux neutrons. On considère deux protons distants de d = 2,0 × 10⁻¹⁵ m. Données : e = 1,6 × 10⁻¹⁹ C ; m(proton) = 1,67 × 10⁻²⁷ kg ; k = 9,0 × 10⁹ N·m²·C⁻² ; G = 6,67 × 10⁻¹¹ N·m²·kg⁻². 1. Calculer la valeur de la force électrostatique entre les deux protons et préciser si elle est attractive ou répulsive. 2. Calculer la valeur de la force gravitationnelle entre ces deux protons. 3. Ces deux interactions peuvent-elles expliquer la cohésion du noyau ? Conclure. 4. Comparer la force électrostatique obtenue au poids d'un objet de 5 kg (g = 9,8 N·kg⁻¹) et commenter.",
              hint: "Deux protons portent des charges de même signe. Comparez les deux forces en calculant leur rapport.",
              solution: [
                "1. Fe = k × e² ÷ d² = 9,0 × 10⁹ × 2,56 × 10⁻³⁸ ÷ (2,0 × 10⁻¹⁵)² = 2,30 × 10⁻²⁸ ÷ 4,0 × 10⁻³⁰ ≈ 58 N. Les charges sont de même signe : la force est répulsive.",
                "2. Fg = G × mp² ÷ d² = 6,67 × 10⁻¹¹ × (1,67 × 10⁻²⁷)² ÷ 4,0 × 10⁻³⁰ = 6,67 × 10⁻¹¹ × 2,79 × 10⁻⁵⁴ ÷ 4,0 × 10⁻³⁰ ≈ 4,7 × 10⁻³⁵ N, attractive.",
                "3. La répulsion électrostatique est environ 10³⁶ fois plus intense que l'attraction gravitationnelle : la gravitation ne peut pas retenir les protons. Une autre interaction, attractive et très intense à très courte distance, assure la cohésion du noyau : c'est l'interaction forte.",
                "4. Le poids d'un objet de 5 kg vaut 5 × 9,8 = 49 N : la répulsion entre deux protons, particules minuscules, est du même ordre que le poids d'un objet de 5 kg, parce que la distance est extrêmement petite.",
                "Réponse : Fe ≈ 58 N (répulsive), Fg ≈ 4,7 × 10⁻³⁵ N ; ni l'une ni l'autre n'explique la cohésion du noyau, assurée par l'interaction forte.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa valeur ou à sa conséquence.",
            pairs: [
              { left: "Constante de gravitation G", right: "6,67 × 10⁻¹¹ N·m²·kg⁻²" },
              { left: "Constante de Coulomb k", right: "9,0 × 10⁹ N·m²·C⁻²" },
              { left: "Charge élémentaire e", right: "1,6 × 10⁻¹⁹ C" },
              { left: "Distance multipliée par 2", right: "Force divisée par 4" },
              { left: "Deux charges de même signe", right: "Répulsion" },
              { left: "Deux masses", right: "Attraction, toujours" },
            ],
          },
          quiz: [
            {
              q: "Une règle en plastique frottée devient négative. Que s'est-il passé ?",
              options: ["Elle a perdu des protons", "Elle a gagné des électrons", "Elle a gagné des protons", "Elle a perdu des électrons"],
              answer: 1,
              why: "Seuls les électrons se déplacent lors d'une électrisation ; un gain d'électrons rend le corps négatif.",
            },
            {
              q: "Si la distance entre deux charges est divisée par 3, la force électrostatique est :",
              options: ["divisée par 3", "multipliée par 3", "divisée par 9", "multipliée par 9"],
              answer: 3,
              why: "La force varie en 1 ÷ d² : diviser d par 3 multiplie la force par 3² = 9.",
            },
            {
              q: "Quelle affirmation distingue l'interaction gravitationnelle de l'interaction électrostatique ?",
              options: ["Elle est toujours attractive", "Elle varie en 1 ÷ d²", "Elle respecte les actions réciproques", "Elle s'exerce le long de la droite joignant les corps"],
              answer: 0,
              why: "Les deux lois partagent la forme en 1 ÷ d² et les actions réciproques, mais seule la gravitation est toujours attractive.",
            },
            {
              q: "La Terre attire la Lune avec une force F. La Lune attire la Terre avec une force :",
              options: ["beaucoup plus faible, car la Lune est moins massive", "de même valeur et de sens opposé", "nulle", "beaucoup plus forte"],
              answer: 1,
              why: "Principe des actions réciproques : F(L/T) = -F(T/L), quelles que soient les masses.",
            },
            {
              q: "Quelle interaction assure la cohésion des molécules et des solides ?",
              options: ["L'interaction gravitationnelle", "L'interaction forte", "L'interaction électrostatique", "Aucune interaction"],
              answer: 2,
              why: "À l'échelle des atomes et des molécules, l'interaction électrostatique domine très largement la gravitation.",
            },
          ],
          trap: "Oublier d'élever la distance au carré, ou de convertir les unités (µC en C, cm en m), ce qui fausse le résultat d'un facteur considérable ; croire aussi que le corps le plus massif exerce la force la plus grande, alors que les deux forces ont la même valeur.",
          method: "Avant tout calcul de force d'interaction, convertissez toutes les grandeurs en unités du Système international, écrivez la formule littérale, puis calculez la puissance de 10 séparément des chiffres significatifs. Vérifiez enfin l'ordre de grandeur et le sens (attractif ou répulsif).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "champs-electrique-gravitation",
          title: "Champ électrostatique et champ de gravitation",
          minutes: 35,
          objectives: [
            "Utiliser les expressions vectorielles du champ de gravitation et du champ électrostatique, et les relations F = m × g et F = q × E.",
            "Caractériser localement une ligne de champ électrostatique ou de champ de gravitation.",
            "Exploiter l'expression du champ électrostatique uniforme d'un condensateur plan, E = U ÷ d.",
          ],
          course: [
            {
              heading: "La notion de champ",
              paragraphs: [
                "En physique, un champ est une grandeur définie en chaque point d'une région de l'espace. Sur une carte météorologique, la température est un champ scalaire : en chaque point, un nombre. Le vent est un champ vectoriel : en chaque point, un vecteur, avec une direction, un sens et une valeur. Un champ est uniforme dans une région s'il y a partout la même valeur (et, pour un vecteur, la même direction et le même sens).",
                "La notion de champ change la façon de décrire une interaction. Au lieu de dire que la Terre attire directement la Lune, on dit que la Terre, par sa masse, crée autour d'elle un champ de gravitation, et que la Lune, plongée dans ce champ, subit une force. De même, un corps chargé crée un champ électrostatique, et toute autre charge placée dans ce champ subit une force électrostatique.",
              ],
              box: { label: "Définition", text: "Un champ est une grandeur définie en tout point d'une région de l'espace. Champ scalaire : un nombre en chaque point (température, pression). Champ vectoriel : un vecteur en chaque point (vent, champ de gravitation, champ électrostatique)." },
            },
            {
              heading: "Le champ de gravitation",
              paragraphs: [
                "Un corps de masse m placé en un point où règne le champ de gravitation g subit la force F = m × g. Le champ de gravitation s'exprime donc en N·kg⁻¹ (unité équivalente au m·s⁻²). Créé par un astre à répartition de masse sphérique, de masse M, en un point situé à la distance r de son centre, il vaut g = -G × M ÷ r² × u, où u est le vecteur unitaire dirigé du centre de l'astre vers le point : le champ est dirigé vers le centre de l'astre et sa valeur est g = G × M ÷ r².",
                "À la surface de la Terre (M = 5,97 × 10²⁴ kg, R = 6,37 × 10⁶ m), g = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ ÷ (6,37 × 10⁶)² ≈ 9,8 N·kg⁻¹. À l'altitude h, la distance au centre devient R + h et le champ diminue : g = G × M ÷ (R + h)². Le champ de pesanteur, qui donne le poids P = m × g, se confond pratiquement avec le champ de gravitation terrestre. À l'échelle d'une salle de classe, on le considère comme uniforme : vertical, vers le bas, de valeur 9,8 N·kg⁻¹.",
              ],
              box: { label: "Formule", text: "F = m × g. Champ créé par un astre de masse M à la distance r de son centre : valeur g = G × M ÷ r², direction radiale, sens vers le centre de l'astre. Unité : N·kg⁻¹." },
            },
            {
              heading: "Le champ électrostatique",
              paragraphs: [
                "Une charge q placée en un point où règne le champ électrostatique E subit la force F = q × E. Si q > 0, la force a le sens du champ ; si q < 0, elle est de sens opposé. Le champ électrostatique s'exprime en V·m⁻¹ (unité équivalente au N·C⁻¹).",
                "Une charge ponctuelle Q placée en O crée en un point M, à la distance r, un champ E = k × Q ÷ r² × u, où u est le vecteur unitaire dirigé de O vers M. Sa valeur est E = k × |Q| ÷ r². Si Q > 0, le champ est dirigé vers l'extérieur, en s'éloignant de Q ; si Q < 0, il est dirigé vers Q. On retrouve la loi de Coulomb : une charge q placée en M subit F = q × E = k × Q × q ÷ r² × u.",
              ],
              box: { label: "Formule", text: "F = q × E. Champ d'une charge ponctuelle Q à la distance r : valeur E = k × |Q| ÷ r², radial, sortant si Q > 0, rentrant si Q < 0. Unité : V·m⁻¹ ou N·C⁻¹." },
            },
            {
              heading: "Lignes de champ et condensateur plan",
              paragraphs: [
                "Une ligne de champ est une courbe tangente en chacun de ses points au vecteur champ, orientée dans le sens du champ. Autour d'une charge ponctuelle ou d'un astre sphérique, les lignes de champ sont des demi-droites issues du centre : sortantes pour une charge positive, rentrantes pour une charge négative ou pour le champ de gravitation d'un astre. Là où les lignes se resserrent, le champ est plus intense.",
                "Un condensateur plan est formé de deux plaques conductrices parallèles, séparées d'une distance d, entre lesquelles on applique une tension U. Entre les plaques, loin des bords, le champ électrostatique est uniforme : perpendiculaire aux plaques, dirigé de la plaque positive vers la plaque négative, de valeur E = U ÷ d. Les lignes de champ sont des segments parallèles. On peut les visualiser avec des grains de semoule en suspension dans de l'huile : ils s'alignent le long des lignes de champ.",
                "Exemple : avec U = 1,0 × 10³ V et d = 5,0 cm, E = 1000 ÷ 0,050 = 2,0 × 10⁴ V·m⁻¹. Un électron placé entre les plaques subit F = e × E = 1,6 × 10⁻¹⁹ × 2,0 × 10⁴ = 3,2 × 10⁻¹⁵ N, dirigée vers la plaque positive, puisque sa charge est négative.",
              ],
              box: { label: "Formule", text: "Condensateur plan : champ uniforme entre les plaques, perpendiculaire à celles-ci, de la plaque + vers la plaque -, de valeur E = U ÷ d (U en V, d en m, E en V·m⁻¹)." },
            },
          ],
          keyPoints: [
            "Un champ est défini en tout point de l'espace ; il peut être scalaire ou vectoriel, uniforme ou non.",
            "Gravitation : F = m × g ; g = G × M ÷ r², dirigé vers le centre de l'astre, en N·kg⁻¹.",
            "Électrostatique : F = q × E ; charge ponctuelle E = k × |Q| ÷ r², sortant si Q > 0.",
            "Une ligne de champ est tangente au vecteur champ en chaque point et orientée comme lui.",
            "Condensateur plan : champ uniforme E = U ÷ d, de la plaque + vers la plaque -.",
          ],
          example: {
            statement: "La Station spatiale internationale orbite à environ h = 400 km d'altitude. Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; masse de la Terre M = 5,97 × 10²⁴ kg ; rayon de la Terre R = 6,37 × 10⁶ m. 1. Calculer la valeur du champ de gravitation terrestre à cette altitude. 2. Comparer à sa valeur au sol, 9,8 N·kg⁻¹. 3. Un élève affirme que les astronautes flottent parce qu'il n'y a plus de gravité dans la station. Discuter.",
            solution: [
              "1. Distance au centre : r = R + h = 6,37 × 10⁶ + 0,40 × 10⁶ = 6,77 × 10⁶ m.",
              "g = G × M ÷ r² = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ ÷ (6,77 × 10⁶)² = 3,98 × 10¹⁴ ÷ 4,58 × 10¹³ ≈ 8,7 N·kg⁻¹.",
              "2. 8,7 ÷ 9,8 ≈ 0,89 : le champ n'a diminué que d'environ 11 % par rapport au sol.",
              "3. L'affirmation est fausse : les astronautes et la station sont soumis à un champ de gravitation intense, qui les fait tomber en permanence autour de la Terre. Ils flottent parce qu'ils tombent avec la station, à la même vitesse qu'elle.",
              "Réponse : g ≈ 8,7 N·kg⁻¹ à 400 km d'altitude ; la gravitation y est bien présente.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un condensateur plan est formé de deux plaques distantes de d = 2,0 cm, soumises à une tension U = 200 V. Donnée : e = 1,6 × 10⁻¹⁹ C. 1. Calculer la valeur du champ électrostatique entre les plaques. 2. Préciser sa direction et son sens. 3. Calculer la valeur de la force subie par un électron placé entre les plaques et préciser son sens.",
              hint: "Convertissez d en mètres. La charge de l'électron est négative : la force est de sens opposé au champ.",
              solution: [
                "1. E = U ÷ d = 200 ÷ 0,020 = 1,0 × 10⁴ V·m⁻¹.",
                "2. Le champ est perpendiculaire aux plaques et dirigé de la plaque positive vers la plaque négative.",
                "3. F = |q| × E = 1,6 × 10⁻¹⁹ × 1,0 × 10⁴ = 1,6 × 10⁻¹⁵ N. L'électron étant négatif, la force est de sens opposé au champ : vers la plaque positive.",
                "Réponse : E = 1,0 × 10⁴ V·m⁻¹ ; F = 1,6 × 10⁻¹⁵ N, vers la plaque positive.",
              ],
            },
            {
              level: 2,
              statement: "Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; masse de la Lune : 7,35 × 10²² kg ; rayon de la Lune : 1,74 × 10⁶ m ; champ de pesanteur terrestre : 9,81 N·kg⁻¹. 1. Calculer la valeur du champ de gravitation à la surface de la Lune. 2. Un astronaute équipé a une masse de 120 kg. Calculer son poids sur la Terre puis sur la Lune. 3. Sa masse change-t-elle ? Expliquer pourquoi il peut sauter plus haut sur la Lune.",
              hint: "Le poids est la force P = m × g ; la masse, elle, est une propriété du corps qui ne dépend pas du lieu.",
              solution: [
                "1. g(Lune) = G × M ÷ R² = 6,67 × 10⁻¹¹ × 7,35 × 10²² ÷ (1,74 × 10⁶)² = 4,90 × 10¹² ÷ 3,03 × 10¹² ≈ 1,62 N·kg⁻¹.",
                "2. Sur la Terre : P = 120 × 9,81 ≈ 1,18 × 10³ N. Sur la Lune : P = 120 × 1,62 ≈ 194 N.",
                "3. Sa masse reste 120 kg. Son poids est environ six fois plus faible sur la Lune (9,81 ÷ 1,62 ≈ 6,1) : avec le même effort musculaire, il peut s'élever plus haut.",
                "Réponse : g ≈ 1,62 N·kg⁻¹ ; poids d'environ 1,18 × 10³ N sur la Terre et 194 N sur la Lune, pour une masse inchangée.",
              ],
            },
            {
              level: 3,
              statement: "Une petite sphère, considérée comme ponctuelle, porte la charge Q = +4,0 nC et est placée en un point O. Données : k = 9,0 × 10⁹ N·m²·C⁻² ; 1 nC = 10⁻⁹ C. 1. Calculer la valeur du champ électrostatique créé par Q en un point M situé à 10 cm de O, puis en un point N situé à 20 cm de O, sur la même demi-droite. 2. Représenter, avec une échelle de 1 cm pour 1,0 × 10³ V·m⁻¹, les vecteurs champ en M et en N, et décrire la ligne de champ qui passe par M. 3. On place en M une charge q = -2,0 nC. Calculer la valeur de la force qu'elle subit et préciser son sens. 4. Retrouver ce résultat avec la loi de Coulomb.",
              hint: "Le champ d'une charge positive est radial et sortant. Pour une charge q négative, la force F = q × E est de sens opposé au champ.",
              solution: [
                "1. En M : E = k × Q ÷ r² = 9,0 × 10⁹ × 4,0 × 10⁻⁹ ÷ 0,10² = 36 ÷ 0,010 = 3,6 × 10³ V·m⁻¹. En N, la distance double : E = 3,6 × 10³ ÷ 4 = 9,0 × 10² V·m⁻¹.",
                "2. En M, une flèche de 3,6 cm ; en N, une flèche de 0,9 cm ; toutes deux portées par la droite (OM), orientées en s'éloignant de O. La ligne de champ passant par M est la demi-droite issue de O passant par M, orientée vers l'extérieur.",
                "3. F = |q| × E = 2,0 × 10⁻⁹ × 3,6 × 10³ = 7,2 × 10⁻⁶ N. Comme q < 0, la force est de sens opposé au champ : elle est dirigée de M vers O (attraction).",
                "4. Loi de Coulomb : F = k × |Q × q| ÷ d² = 9,0 × 10⁹ × 4,0 × 10⁻⁹ × 2,0 × 10⁻⁹ ÷ 0,010 = 7,2 × 10⁻⁸ ÷ 0,010 = 7,2 × 10⁻⁶ N, attractive car les charges sont de signes opposés : résultat identique.",
                "Réponse : E(M) = 3,6 × 10³ V·m⁻¹, E(N) = 9,0 × 10² V·m⁻¹ ; F = 7,2 × 10⁻⁶ N, dirigée vers O.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : champs et forces.",
            statements: [
              { text: "Dans la Station spatiale internationale, le champ de gravitation terrestre est nul.", true: false, why: "Il vaut encore environ 8,7 N·kg⁻¹ à 400 km d'altitude ; les astronautes flottent parce qu'ils tombent avec la station." },
              { text: "Une charge négative subit une force de sens opposé au champ électrostatique.", true: true, why: "F = q × E avec q < 0 : la force et le champ sont de sens opposés." },
              { text: "Entre les plaques d'un condensateur plan, le champ est uniforme.", true: true, why: "Loin des bords, il a partout la même direction, le même sens et la même valeur E = U ÷ d." },
              { text: "Le champ électrostatique d'une charge positive est dirigé vers cette charge.", true: false, why: "Il est radial et sortant : il s'éloigne de la charge positive." },
              { text: "Le champ de gravitation de la Terre est dirigé vers son centre.", true: true, why: "La gravitation est attractive : le champ pointe vers le centre de l'astre." },
              { text: "Une ligne de champ est perpendiculaire au vecteur champ en chacun de ses points.", true: false, why: "Elle lui est tangente en chacun de ses points." },
              { text: "Le champ de gravitation s'exprime en N·kg⁻¹.", true: true, why: "g = F ÷ m, en newtons par kilogramme." },
            ],
          },
          quiz: [
            {
              q: "Un objet de masse 2,0 kg est placé dans un champ de gravitation de 9,8 N·kg⁻¹. La force subie vaut :",
              options: ["4,9 N", "9,8 N", "11,8 N", "19,6 N"],
              answer: 3,
              why: "F = m × g = 2,0 × 9,8 = 19,6 N.",
            },
            {
              q: "Si l'on s'éloigne du centre de la Terre jusqu'à une distance double, le champ de gravitation est :",
              options: ["divisé par 4", "divisé par 2", "inchangé", "multiplié par 2"],
              answer: 0,
              why: "g = G × M ÷ r² : doubler r divise g par 4.",
            },
            {
              q: "Un condensateur plan a des plaques distantes de 1,0 cm et une tension de 50 V. Le champ vaut :",
              options: ["50 V·m⁻¹", "5,0 × 10³ V·m⁻¹", "0,50 V·m⁻¹", "5,0 × 10⁻³ V·m⁻¹"],
              answer: 1,
              why: "E = U ÷ d = 50 ÷ 0,010 = 5,0 × 10³ V·m⁻¹.",
            },
            {
              q: "Une ligne de champ électrostatique est :",
              options: ["perpendiculaire au champ en chaque point", "toujours un cercle", "tangente au champ en chaque point", "dirigée vers les charges positives"],
              answer: 2,
              why: "Par définition, une ligne de champ est tangente en chaque point au vecteur champ et orientée dans son sens.",
            },
            {
              q: "Dans le champ d'un condensateur, un proton est poussé :",
              options: ["vers la plaque positive", "vers la plaque négative", "parallèlement aux plaques", "il ne subit aucune force"],
              answer: 1,
              why: "Le proton est positif : la force a le sens du champ, de la plaque + vers la plaque -.",
            },
          ],
          trap: "Oublier que la distance r dans g = G × M ÷ r² se mesure depuis le centre de l'astre (et non depuis sa surface), ou oublier que la force subie par une charge négative est de sens opposé au champ.",
          method: "Pour tout problème de champ, faites un schéma : placez la source (astre, charge, plaques), dessinez le vecteur champ au point étudié, puis la force F = m × g ou F = q × E en tenant compte du signe de q. Calculez ensuite les valeurs en unités SI.",
        },
      ],
    },
    /* ================================================================== */
    /* UN FLUIDE AU REPOS                                                   */
    /* ================================================================== */
    {
      id: 'fluide-au-repos',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "pression-mariotte",
          title: "Pression, force pressante et loi de Mariotte",
          minutes: 30,
          objectives: [
            "Expliquer qualitativement le lien entre les grandeurs macroscopiques de description d'un fluide (masse volumique, température, pression) et le comportement microscopique des entités qui le constituent.",
            "Utiliser la relation F = P × S pour déterminer la force pressante exercée par un fluide sur une surface plane.",
            "Exploiter la loi de Mariotte pour une quantité de gaz donnée à température constante.",
          ],
          course: [
            {
              heading: "Décrire un fluide : du macroscopique au microscopique",
              paragraphs: [
                "Un fluide est un milieu qui peut s'écouler et qui prend la forme du récipient qui le contient : les liquides et les gaz sont des fluides. À l'échelle macroscopique, on le décrit par sa masse volumique ρ = m ÷ V (en kg·m⁻³ : environ 1,0 × 10³ kg·m⁻³ pour l'eau, environ 1,2 kg·m⁻³ pour l'air à 20 °C), par sa température et par sa pression.",
                "À l'échelle microscopique, un fluide est formé d'entités (molécules, atomes) en mouvement incessant et désordonné : c'est l'agitation thermique. La température mesure l'intensité de cette agitation : plus elle est élevée, plus les entités se déplacent vite en moyenne. Dans un gaz, les entités sont très éloignées les unes des autres : le gaz est compressible et sa masse volumique est faible. Dans un liquide, elles sont au contact : le liquide est pratiquement incompressible et beaucoup plus dense.",
                "La pression trouve elle aussi son origine dans ce mouvement. Les entités heurtent sans cesse les parois du récipient ; chaque choc exerce une force minuscule, mais leur nombre est si gigantesque que leur effet global est une force continue sur la paroi. Plus les chocs sont nombreux et violents, plus la pression est grande.",
              ],
              box: { label: "À retenir", text: "Masse volumique : nombre d'entités par unité de volume et masse de chacune. Température : agitation des entités. Pression : effet des chocs des entités sur les parois." },
            },
            {
              heading: "Pression et force pressante",
              paragraphs: [
                "Un fluide exerce sur toute surface en contact avec lui une force pressante. Pour une surface plane, cette force est perpendiculaire à la surface, dirigée du fluide vers la surface, et sa valeur est F = P × S, où P est la pression du fluide (en pascals, Pa) et S l'aire de la surface (en m²). Inversement, P = F ÷ S : 1 Pa = 1 N·m⁻².",
                "Le pascal est une petite unité. On utilise aussi l'hectopascal (1 hPa = 100 Pa) en météorologie et le bar (1 bar = 10⁵ Pa). La pression atmosphérique au niveau de la mer vaut en moyenne 1,013 × 10⁵ Pa, soit 1013 hPa ou environ 1 bar. Attention : un manomètre de pneumatique indique en général la surpression par rapport à l'atmosphère, et non la pression absolue.",
                "Exemple : l'air exerce sur une table de 1,0 m² une force pressante de valeur F = 1,013 × 10⁵ × 1,0 ≈ 1,0 × 10⁵ N, soit le poids d'une masse d'environ 10 tonnes. La table ne s'effondre pas, car l'air exerce une force pressante de même valeur sur sa face inférieure.",
              ],
              box: { label: "Formule", text: "F = P × S : F en N, P en Pa, S en m². La force pressante est perpendiculaire à la surface et dirigée du fluide vers la surface. 1 bar = 10⁵ Pa ; 1 hPa = 10² Pa ; Patm ≈ 1,013 × 10⁵ Pa." },
            },
            {
              heading: "La loi de Mariotte",
              paragraphs: [
                "Au XVIIe siècle, Robert Boyle puis Edme Mariotte ont étudié la compression de l'air. Pour une quantité de gaz donnée, maintenue à température constante, le produit de la pression par le volume reste constant : P × V = constante. Entre deux états 1 et 2 : P₁ × V₁ = P₂ × V₂. Si le volume est divisé par deux, la pression double. Cette loi est bien vérifiée aux pressions usuelles ; elle s'écarte de la réalité aux très fortes pressions.",
                "Interprétation microscopique : si l'on divise le volume par deux sans changer la température, la vitesse moyenne des entités ne change pas, mais elles sont deux fois plus nombreuses par unité de volume ; chaque élément de paroi reçoit donc deux fois plus de chocs par seconde, et la pression double.",
                "Applications : en plongée, l'air des poumons ou d'un ballon se comprime à la descente et se dilate à la remontée. Un plongeur en scaphandre qui remonterait en bloquant sa respiration verrait l'air de ses poumons se dilater dangereusement : c'est pourquoi on apprend à expirer pendant la remontée. Au laboratoire, on vérifie la loi avec une seringue reliée à un capteur de pression.",
              ],
              box: { label: "Loi", text: "Loi de Mariotte : pour une quantité de gaz fixée, à température constante, P × V = constante, soit P₁ × V₁ = P₂ × V₂ (P et V dans les mêmes unités de part et d'autre)." },
            },
          ],
          keyPoints: [
            "Un fluide (liquide ou gaz) se décrit par sa masse volumique, sa température et sa pression.",
            "La température traduit l'agitation des entités ; la pression, leurs chocs sur les parois.",
            "Force pressante : F = P × S, perpendiculaire à la surface, du fluide vers la surface.",
            "1 bar = 10⁵ Pa ; pression atmosphérique moyenne : 1,013 × 10⁵ Pa = 1013 hPa.",
            "Loi de Mariotte : à température constante et quantité de gaz fixée, P × V = constante.",
          ],
          example: {
            statement: "On enferme 60 mL d'air dans une seringue bouchée, à la pression de 1,0 bar. On enfonce lentement le piston (la température reste constante) jusqu'à ce que le volume soit de 20 mL. 1. Calculer la nouvelle pression de l'air. 2. Le piston a une section de 4,0 cm². Calculer la force pressante exercée par l'air enfermé sur le piston dans l'état final. 3. Interpréter l'augmentation de pression à l'échelle microscopique.",
            solution: [
              "1. Loi de Mariotte : P₁ × V₁ = P₂ × V₂, donc P₂ = P₁ × V₁ ÷ V₂ = 1,0 × 60 ÷ 20 = 3,0 bar.",
              "2. P₂ = 3,0 bar = 3,0 × 10⁵ Pa ; S = 4,0 cm² = 4,0 × 10⁻⁴ m².",
              "F = P₂ × S = 3,0 × 10⁵ × 4,0 × 10⁻⁴ = 1,2 × 10² N.",
              "3. Le volume est divisé par 3 à température constante : les entités, animées de la même vitesse moyenne, sont trois fois plus nombreuses par unité de volume et frappent trois fois plus souvent le piston.",
              "Réponse : P₂ = 3,0 bar ; F = 1,2 × 10² N.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une fenêtre rectangulaire mesure 1,20 m sur 0,80 m. La pression atmosphérique vaut 1013 hPa. 1. Convertir cette pression en pascals. 2. Calculer la valeur de la force pressante exercée par l'air extérieur sur la vitre. 3. Préciser la direction et le sens de cette force. 4. Pourquoi la vitre ne se brise-t-elle pas ?",
              hint: "1 hPa = 100 Pa. L'aire d'un rectangle est le produit de sa longueur par sa largeur.",
              solution: [
                "1. P = 1013 hPa = 1013 × 100 = 1,013 × 10⁵ Pa.",
                "2. S = 1,20 × 0,80 = 0,96 m² ; F = P × S = 1,013 × 10⁵ × 0,96 ≈ 9,7 × 10⁴ N.",
                "3. La force est perpendiculaire à la vitre, dirigée de l'air extérieur vers la vitre.",
                "4. L'air de la pièce, à la même pression, exerce sur l'autre face une force de même valeur et de sens opposé : les deux forces se compensent.",
                "Réponse : environ 9,7 × 10⁴ N de chaque côté, qui se compensent.",
              ],
            },
            {
              level: 2,
              statement: "Pour vérifier la loi de Mariotte, on comprime de l'air dans une seringue reliée à un capteur de pression, à température constante. Mesures (données fictives) : V = 60 mL, P = 1010 hPa ; V = 50 mL, P = 1212 hPa ; V = 40 mL, P = 1515 hPa ; V = 30 mL, P = 2020 hPa ; V = 20 mL, P = 3030 hPa. 1. Calculer le produit P × V pour chaque mesure. 2. Ces mesures vérifient-elles la loi de Mariotte ? 3. Prévoir la pression pour un volume de 15 mL. 4. Pourquoi faut-il enfoncer le piston lentement ?",
              hint: "Si la loi est vérifiée, le produit P × V doit être le même pour toutes les mesures. Une compression rapide échauffe le gaz.",
              solution: [
                "1. 1010 × 60 = 60 600 ; 1212 × 50 = 60 600 ; 1515 × 40 = 60 600 ; 2020 × 30 = 60 600 ; 3030 × 20 = 60 600 (en hPa·mL).",
                "2. Le produit P × V est constant : la loi de Mariotte est vérifiée.",
                "3. P = 60 600 ÷ 15 = 4040 hPa.",
                "4. Une compression rapide échauffe l'air ; or la loi de Mariotte suppose la température constante. En comprimant lentement, on laisse le gaz échanger de l'énergie avec l'extérieur et rester à température ambiante.",
                "Réponse : P × V = 60 600 hPa·mL pour toutes les mesures ; P = 4040 hPa pour 15 mL.",
              ],
            },
            {
              level: 3,
              statement: "Un plongeur se trouve à une profondeur où la pression absolue de l'eau vaut 4,0 bar. Il gonfle un parachute de relevage avec 2,0 L d'air à cette pression, puis le lâche. On suppose la température constante et la pression à la surface égale à 1,0 bar. 1. Quel serait le volume de cet air à la surface si le parachute pouvait se dilater librement ? 2. Le masque du plongeur a une vitre de surface 1,5 × 10⁻² m². Calculer la valeur de la force pressante exercée par l'eau sur la vitre à cette profondeur. 3. Expliquer pourquoi la vitre ne s'enfonce pas, sachant que le plongeur souffle de l'air par le nez dans son masque pendant la descente. 4. Expliquer, à l'aide de la loi de Mariotte, pourquoi un plongeur en scaphandre ne doit jamais remonter en bloquant sa respiration.",
              hint: "Convertissez les bars en pascals pour la force pressante. Pour la question 3, pensez à la pression de l'air qui se trouve à l'intérieur du masque.",
              solution: [
                "1. P₁ × V₁ = P₂ × V₂, donc V₂ = P₁ × V₁ ÷ P₂ = 4,0 × 2,0 ÷ 1,0 = 8,0 L : le volume est multiplié par 4.",
                "2. P = 4,0 bar = 4,0 × 10⁵ Pa ; F = P × S = 4,0 × 10⁵ × 1,5 × 10⁻² = 6,0 × 10³ N.",
                "3. En soufflant dans le masque, le plongeur amène l'air intérieur à la même pression que l'eau : cet air exerce sur la face interne de la vitre une force pressante de même valeur, de sens opposé, qui compense celle de l'eau.",
                "4. À la remontée, la pression diminue ; à température constante, le volume de l'air contenu dans les poumons augmenterait (par exemple, il doublerait en passant de 2,0 bar à 1,0 bar). Les poumons ne pouvant pas se dilater autant, ils risquent d'être lésés : il faut expirer pendant la remontée.",
                "Réponse : 8,0 L à la surface ; 6,0 × 10³ N sur la vitre, compensés par l'air du masque ; expirer à la remontée pour éviter la surpression pulmonaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur ou relation à ce qui lui correspond.",
            pairs: [
              { left: "1 bar", right: "10⁵ Pa" },
              { left: "1 hPa", right: "100 Pa" },
              { left: "Pression atmosphérique moyenne", right: "1013 hPa" },
              { left: "Force pressante", right: "F = P × S" },
              { left: "Loi de Mariotte", right: "P × V = constante" },
              { left: "Température d'un fluide", right: "Agitation des entités" },
            ],
          },
          quiz: [
            {
              q: "Une pression de 2,5 bar vaut :",
              options: ["2,5 × 10³ Pa", "2,5 × 10² Pa", "2,5 × 10⁵ Pa", "25 hPa"],
              answer: 2,
              why: "1 bar = 10⁵ Pa, donc 2,5 bar = 2,5 × 10⁵ Pa.",
            },
            {
              q: "La force pressante exercée par un fluide sur une paroi plane est :",
              options: ["perpendiculaire à la paroi", "parallèle à la paroi", "toujours verticale", "dirigée de la paroi vers le fluide"],
              answer: 0,
              why: "Elle est perpendiculaire à la paroi et dirigée du fluide vers la paroi.",
            },
            {
              q: "À température constante, on triple le volume d'un gaz enfermé. Sa pression est :",
              options: ["triplée", "inchangée", "multipliée par 9", "divisée par 3"],
              answer: 3,
              why: "P × V = constante : si V est multiplié par 3, P est divisée par 3.",
            },
            {
              q: "À l'échelle microscopique, la pression d'un gaz est due :",
              options: ["au poids des molécules qui pèsent sur le fond du récipient", "aux chocs des entités sur les parois", "à la couleur du gaz", "à la taille du récipient seulement"],
              answer: 1,
              why: "Les innombrables chocs des entités en mouvement sur les parois produisent la force pressante.",
            },
            {
              q: "Une pression de 2,0 × 10⁵ Pa s'exerce sur 5,0 cm². La force pressante vaut :",
              options: ["1,0 × 10⁹ N", "1,0 × 10⁶ N", "4,0 × 10² N", "1,0 × 10² N"],
              answer: 3,
              why: "S = 5,0 × 10⁻⁴ m², donc F = 2,0 × 10⁵ × 5,0 × 10⁻⁴ = 1,0 × 10² N.",
            },
          ],
          trap: "Oublier de convertir l'aire en m² (1 cm² = 10⁻⁴ m², et non 10⁻² m²) ou la pression en pascals, ou appliquer la loi de Mariotte alors que la température ou la quantité de gaz varie.",
          method: "Avant d'utiliser F = P × S, écrivez systématiquement la conversion de chaque grandeur en unité SI. Pour la loi de Mariotte, vérifiez les deux conditions (quantité de gaz fixée, température constante), puis contrôlez le sens de variation : volume plus petit, pression plus grande.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "statique-des-fluides",
          title: "La loi fondamentale de la statique des fluides",
          minutes: 30,
          objectives: [
            "Utiliser la loi fondamentale de la statique des fluides, P(B) - P(A) = ρ × g × (zA - zB), pour un fluide incompressible au repos.",
            "Tester la loi fondamentale de la statique des fluides à partir de mesures de pression.",
            "Expliquer des situations courantes à l'aide de cette loi : plongée, vases communicants, barrages.",
          ],
          course: [
            {
              heading: "La pression augmente avec la profondeur",
              paragraphs: [
                "Un plongeur ressent une pression croissante sur ses tympans à mesure qu'il descend. Dans un fluide au repos, la pression augmente avec la profondeur, parce que chaque couche de fluide supporte le poids de tout le fluide situé au-dessus d'elle.",
                "Pour un fluide incompressible (masse volumique ρ constante) au repos, dans un champ de pesanteur g, en repérant l'altitude par un axe z vertical orienté vers le haut, la différence de pression entre deux points A et B vaut P(B) - P(A) = ρ × g × (zA - zB). Si B est plus bas que A, zA - zB est positif et P(B) > P(A). Les unités : P en Pa, ρ en kg·m⁻³, g en N·kg⁻¹, z en m.",
                "Cas fréquent : A est à la surface libre d'un liquide, au contact de l'atmosphère, et B est à la profondeur h sous la surface. Alors zA - zB = h et P(B) = Patm + ρ × g × h. Pour l'eau, ρ × g × h vaut 1,0 × 10³ × 9,8 × 10 ≈ 1,0 × 10⁵ Pa pour h = 10 m : la pression augmente d'environ 1 bar tous les 10 m.",
              ],
              box: { label: "Loi", text: "Loi fondamentale de la statique des fluides (fluide incompressible au repos, axe z vers le haut) : P(B) - P(A) = ρ × g × (zA - zB). À la profondeur h sous une surface libre : P = Patm + ρ × g × h." },
            },
            {
              heading: "D'où vient cette loi ?",
              paragraphs: [
                "Considérons, dans un liquide au repos, une colonne verticale de liquide de section S, comprise entre le point A en haut et le point B en bas, de hauteur h = zA - zB. Elle est soumise à son poids, de valeur m × g = ρ × S × h × g, vers le bas, à la force pressante exercée sur sa face supérieure, P(A) × S, vers le bas, et à la force pressante exercée sur sa face inférieure, P(B) × S, vers le haut. Les forces latérales se compensent.",
                "La colonne étant au repos, les forces qui s'exercent sur elle se compensent : P(B) × S = P(A) × S + ρ × S × h × g. En divisant par S, on obtient P(B) - P(A) = ρ × g × h, ce qui est bien la loi fondamentale. La pression au fond ne dépend que de la hauteur de liquide, et pas de la forme du récipient.",
              ],
            },
            {
              heading: "Conséquences et applications",
              paragraphs: [
                "Tous les points d'un même liquide au repos situés à la même altitude ont la même pression : les surfaces de même pression sont des plans horizontaux. Dans des vases communicants contenant un même liquide, la surface libre est donc au même niveau dans chaque branche, quelle que soit leur forme. C'est le principe du niveau à eau des maçons et de la distribution d'eau à partir d'un château d'eau.",
                "Un barrage doit être plus épais à sa base qu'à son sommet : la pression de l'eau, et donc la force pressante sur chaque mètre carré de paroi, croît avec la profondeur. De même, un sous-marin doit résister à plusieurs dizaines de bars à quelques centaines de mètres de profondeur.",
                "Pour un gaz, la masse volumique est environ mille fois plus faible que celle de l'eau : sur quelques mètres, la variation de pression est négligeable, et l'on considère que la pression de l'air est uniforme dans une pièce. Sur plusieurs kilomètres d'altitude, en revanche, la pression atmosphérique diminue nettement, mais l'air, compressible, ne vérifie plus l'hypothèse d'une masse volumique constante.",
              ],
              box: { label: "À retenir", text: "Même altitude dans un même liquide au repos : même pression. Eau : environ +1 bar tous les 10 m. Gaz : pression pratiquement uniforme à l'échelle d'une pièce." },
            },
            {
              heading: "Tester la loi au laboratoire",
              paragraphs: [
                "On plonge dans une éprouvette remplie de liquide la sonde d'un capteur de pression, à différentes profondeurs h, et l'on relève la pression P. Si la loi est vérifiée, la courbe P en fonction de h est une droite d'équation P = Patm + ρ × g × h : son ordonnée à l'origine est la pression atmosphérique et son coefficient directeur vaut ρ × g.",
                "On peut alors déterminer la masse volumique du liquide : ρ = coefficient directeur ÷ g. La comparaison avec une valeur de référence permet d'identifier le liquide ou d'évaluer la qualité des mesures. Attention aux unités : si h est en cm et P en hPa, le coefficient directeur doit être converti en Pa·m⁻¹.",
              ],
              box: { label: "Méthode", text: "P en fonction de la profondeur h : droite de coefficient directeur ρ × g (en Pa·m⁻¹) et d'ordonnée à l'origine Patm. On en déduit ρ = coefficient directeur ÷ g." },
            },
          ],
          keyPoints: [
            "Loi fondamentale (axe z vers le haut) : P(B) - P(A) = ρ × g × (zA - zB).",
            "À la profondeur h sous la surface libre : P = Patm + ρ × g × h.",
            "Dans l'eau, la pression augmente d'environ 1 bar tous les 10 m.",
            "Même liquide au repos, même altitude : même pression ; vases communicants au même niveau.",
            "La courbe P(h) est une droite de coefficient directeur ρ × g.",
          ],
          example: {
            statement: "Un plongeur descend à 25 m de profondeur en mer. Données : masse volumique de l'eau de mer ρ = 1025 kg·m⁻³ ; g = 9,81 N·kg⁻¹ ; pression atmosphérique Patm = 1,013 × 10⁵ Pa. 1. Calculer la pression absolue de l'eau à cette profondeur. 2. L'exprimer en bar et la comparer à la pression atmosphérique.",
            solution: [
              "1. On prend A à la surface (zA = 0) et B au niveau du plongeur (zB = -25 m) ; zA - zB = 25 m.",
              "P(B) = Patm + ρ × g × (zA - zB) = 1,013 × 10⁵ + 1025 × 9,81 × 25.",
              "1025 × 9,81 × 25 ≈ 2,51 × 10⁵ Pa ; P(B) ≈ 1,013 × 10⁵ + 2,514 × 10⁵ ≈ 3,53 × 10⁵ Pa.",
              "2. P(B) ≈ 3,5 bar, soit environ 3,5 fois la pression atmosphérique.",
              "Réponse : environ 3,53 × 10⁵ Pa, soit environ 3,5 bar.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une piscine a une profondeur de 2,0 m. Données : ρ(eau) = 1,00 × 10³ kg·m⁻³ ; g = 9,81 N·kg⁻¹ ; Patm = 1,013 × 10⁵ Pa. 1. Calculer la différence de pression entre le fond et la surface de l'eau. 2. Calculer la pression absolue au fond. 3. La pression est-elle plus grande au fond, au pied du plongeoir ou au fond, au milieu du bassin ?",
              hint: "La différence de pression ne dépend que de la différence d'altitude.",
              solution: [
                "1. P(fond) - P(surface) = ρ × g × h = 1,00 × 10³ × 9,81 × 2,0 ≈ 1,96 × 10⁴ Pa.",
                "2. P(fond) = 1,013 × 10⁵ + 0,196 × 10⁵ ≈ 1,21 × 10⁵ Pa.",
                "3. Si le fond est plat, les deux points sont à la même profondeur : la pression y est la même, quel que soit l'endroit dans le bassin.",
                "Réponse : 1,96 × 10⁴ Pa de différence ; 1,21 × 10⁵ Pa au fond, en tout point du fond plat.",
              ],
            },
            {
              level: 2,
              statement: "Pour identifier un liquide incolore, on mesure la pression à différentes profondeurs h avec un capteur (données fictives) : h = 0 cm, P = 1013,0 hPa ; h = 10 cm, P = 1020,8 hPa ; h = 20 cm, P = 1028,5 hPa ; h = 30 cm, P = 1036,3 hPa ; h = 40 cm, P = 1044,0 hPa. Données : g = 9,81 N·kg⁻¹ ; masses volumiques : éthanol 789 kg·m⁻³ ; huile végétale 920 kg·m⁻³ ; eau 1000 kg·m⁻³. 1. Montrer que la pression augmente régulièrement avec la profondeur. 2. Calculer le coefficient directeur de la droite P = f(h) en Pa·m⁻¹. 3. En déduire la masse volumique du liquide et l'identifier.",
              hint: "Calculez l'augmentation de pression entre h = 0 et h = 40 cm, puis convertissez : 1 hPa = 100 Pa et 40 cm = 0,40 m.",
              solution: [
                "1. Tous les 10 cm, la pression augmente d'environ 7,75 hPa (7,8 ; 7,7 ; 7,8 ; 7,7 hPa, compte tenu des arrondis) : la pression est une fonction affine de la profondeur.",
                "2. Entre h = 0 et h = 0,40 m : ΔP = 1044,0 - 1013,0 = 31,0 hPa = 3100 Pa. Coefficient directeur : 3100 ÷ 0,40 = 7750 Pa·m⁻¹.",
                "3. Coefficient directeur = ρ × g, donc ρ = 7750 ÷ 9,81 ≈ 790 kg·m⁻³.",
                "Cette valeur correspond à celle de l'éthanol (789 kg·m⁻³).",
                "Réponse : ρ ≈ 790 kg·m⁻³ ; le liquide est vraisemblablement de l'éthanol.",
              ],
            },
            {
              level: 3,
              statement: "Partie A. Un tube en U contient de l'eau. On verse de l'huile dans la branche de droite : l'huile ne se mélange pas à l'eau et forme une colonne de 10,0 cm de hauteur au-dessus de la surface de séparation eau-huile. Données : ρ(eau) = 1000 kg·m⁻³ ; ρ(huile) = 920 kg·m⁻³ ; g = 9,81 N·kg⁻¹. 1. Justifier que, dans l'eau, la pression est la même au niveau de la surface de séparation (branche de droite) et au même niveau dans la branche de gauche. 2. En déduire la hauteur de la colonne d'eau, dans la branche de gauche, au-dessus de ce niveau. Partie B. Une pompe aspirante fait le vide au-dessus de l'eau d'un puits : c'est la pression atmosphérique, 1,013 × 10⁵ Pa, qui pousse l'eau vers le haut dans le tuyau. 3. Calculer la hauteur maximale à laquelle l'eau peut ainsi monter et expliquer pourquoi une pompe aspirante placée en surface ne peut pas puiser l'eau d'un puits de 15 m.",
              hint: "Partie A : les deux surfaces libres sont à la pression atmosphérique ; appliquez la loi dans chaque branche. Partie B : au sommet de la colonne d'eau, la pression est nulle (vide).",
              solution: [
                "1. Les deux points sont dans le même liquide (l'eau, continue au fond du tube), au repos, à la même altitude : ils ont la même pression.",
                "2. Branche de droite : P = Patm + ρ(huile) × g × h(huile). Branche de gauche : P = Patm + ρ(eau) × g × h(eau). L'égalité donne ρ(huile) × h(huile) = ρ(eau) × h(eau), donc h(eau) = 920 × 10,0 ÷ 1000 = 9,2 cm.",
                "3. Entre la surface du puits (pression Patm) et le sommet de la colonne (pression nulle) : Patm - 0 = ρ(eau) × g × h(max), donc h(max) = 1,013 × 10⁵ ÷ (1000 × 9,81) ≈ 10,3 m.",
                "L'eau ne peut pas monter plus haut qu'environ 10 m par aspiration : une pompe aspirante en surface ne peut pas puiser l'eau à 15 m. Il faut une pompe immergée qui la refoule vers le haut.",
                "Réponse : h(eau) = 9,2 cm ; hauteur maximale d'aspiration d'environ 10,3 m.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la pression dans un fluide au repos.",
            statements: [
              { text: "La pression au fond d'un récipient dépend de la forme du récipient.", true: false, why: "Elle ne dépend que de la hauteur de liquide au-dessus du point et de la masse volumique." },
              { text: "Dans l'eau, la pression augmente d'environ 1 bar tous les 10 m.", true: true, why: "ρ × g × h = 1000 × 9,8 × 10 ≈ 1 × 10⁵ Pa = 1 bar." },
              { text: "Deux points d'un même liquide au repos, à la même altitude, ont la même pression.", true: true, why: "D'après la loi fondamentale, la différence de pression est nulle si zA = zB." },
              { text: "À 10 m de profondeur dans l'eau, la pression absolue vaut environ 1 bar.", true: false, why: "Elle vaut environ 2 bar : il faut ajouter la pression atmosphérique à la surface." },
              { text: "Dans une pièce, la pression de l'air est pratiquement la même au sol et au plafond.", true: true, why: "La masse volumique de l'air est faible : la différence est de l'ordre de 30 Pa sur 2,5 m, négligeable devant 10⁵ Pa." },
              { text: "Dans la loi P(B) - P(A) = ρ × g × (zA - zB), l'axe z est orienté vers le bas.", true: false, why: "L'axe z est orienté vers le haut : un point plus bas a une altitude plus petite et une pression plus grande." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence de pression entre la surface et un point situé à 5,0 m de profondeur dans l'eau (ρ = 1000 kg·m⁻³, g = 9,8 N·kg⁻¹) ?",
              options: ["4,9 × 10⁴ Pa", "4,9 × 10³ Pa", "5,0 × 10² Pa", "1,5 × 10⁵ Pa"],
              answer: 0,
              why: "ΔP = ρ × g × h = 1000 × 9,8 × 5,0 = 4,9 × 10⁴ Pa.",
            },
            {
              q: "Pourquoi un barrage est-il plus épais à sa base ?",
              options: ["Pour résister au vent", "Parce que le béton coûte moins cher lorsqu'il est coulé en bas de l'ouvrage", "Parce que la pression de l'eau augmente avec la profondeur", "Pour retenir les sédiments"],
              answer: 2,
              why: "La force pressante sur chaque mètre carré de paroi augmente avec la profondeur.",
            },
            {
              q: "Dans des vases communicants contenant un même liquide au repos, les surfaces libres sont :",
              options: ["plus hautes dans la branche la plus large", "plus hautes dans la branche la plus étroite", "à des niveaux qui dépendent de la forme", "au même niveau"],
              answer: 3,
              why: "Les surfaces libres sont à la même pression atmosphérique, donc à la même altitude.",
            },
            {
              q: "La courbe donnant la pression en fonction de la profondeur dans un liquide est une droite de coefficient directeur :",
              options: ["Patm", "ρ × g", "ρ ÷ g", "g ÷ ρ"],
              answer: 1,
              why: "P = Patm + ρ × g × h : le coefficient directeur est ρ × g.",
            },
            {
              q: "La loi fondamentale de la statique des fluides, avec ρ constante, s'applique très bien :",
              options: ["à l'eau d'un lac", "à l'atmosphère sur 10 km d'altitude", "à un liquide en écoulement rapide", "à un gaz en cours de compression"],
              answer: 0,
              why: "Elle suppose un fluide incompressible et au repos, ce qui est le cas de l'eau d'un lac.",
            },
          ],
          trap: "Oublier d'ajouter la pression atmosphérique pour obtenir une pression absolue, ou se tromper de signe en orientant l'axe z vers le bas alors que la loi P(B) - P(A) = ρ × g × (zA - zB) suppose un axe vertical orienté vers le haut.",
          method: "Faites toujours un schéma avec l'axe z vertical vers le haut, placez les points A et B et notez leurs altitudes. Vérifiez ensuite le résultat par le bon sens : le point le plus profond doit avoir la pression la plus grande, et dans l'eau l'ordre de grandeur est d'environ 1 bar par 10 m.",
        },
      ],
    },
    /* ================================================================== */
    /* LE MOUVEMENT D'UN SYSTÈME                                            */
    /* ================================================================== */
    {
      id: 'mouvement-systeme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "vecteur-variation-vitesse",
          title: "Le vecteur variation de vitesse",
          minutes: 30,
          objectives: [
            "Décrire le mouvement d'un système modélisé par un point matériel à l'aide de son vecteur vitesse, dans un référentiel donné.",
            "Construire, à partir d'une chronophotographie, les vecteurs vitesse et le vecteur variation de vitesse Δv entre deux instants voisins.",
            "Caractériser le vecteur variation de vitesse dans des mouvements simples : rectiligne accéléré, ralenti ou uniforme, circulaire uniforme, chute.",
          ],
          course: [
            {
              heading: "Rappels : référentiel, trajectoire et vecteur vitesse",
              paragraphs: [
                "Pour décrire un mouvement, on choisit un système, que l'on modélise souvent par un point matériel (son centre), et un référentiel, c'est-à-dire un objet de référence muni d'un repère et d'une horloge. Le référentiel terrestre (le sol, la salle de classe) convient pour les mouvements de la vie courante. La trajectoire est l'ensemble des positions successives occupées par le point.",
                "Sur une chronophotographie, les positions M₁, M₂, M₃... sont enregistrées à intervalles de temps égaux, de durée τ. Le vecteur vitesse au point M₂ s'obtient de façon approchée à partir du déplacement suivant : v₂ ≈ M₂M₃ ÷ τ (on utilise parfois la moyenne des déplacements de part et d'autre, M₁M₃ ÷ 2τ). Ce vecteur a pour direction la tangente à la trajectoire (approchée par la droite (M₂M₃)), pour sens celui du mouvement et pour valeur v₂ = M₂M₃ ÷ τ, en m·s⁻¹.",
                "On le représente à partir du point M₂ par une flèche dont la longueur est proportionnelle à sa valeur, selon une échelle choisie, par exemple 1 cm pour 0,50 m·s⁻¹.",
              ],
              box: { label: "Formule", text: "Vecteur vitesse au point M₂ : v₂ ≈ M₂M₃ ÷ τ. Direction : tangente à la trajectoire ; sens : celui du mouvement ; valeur : v₂ = M₂M₃ ÷ τ, en m·s⁻¹ si la distance est en m et τ en s." },
            },
            {
              heading: "Le vecteur variation de vitesse",
              paragraphs: [
                "Le vecteur variation de vitesse entre deux instants voisins t₂ et t₃ est la différence des vecteurs vitesse : Δv = v₃ - v₂. Il indique comment le vecteur vitesse a changé, en valeur et en direction, pendant la durée Δt = t₃ - t₂. Il s'exprime en m·s⁻¹.",
                "Pour le construire, on reporte v₂ et v₃ à partir d'une même origine (en les déplaçant parallèlement à eux-mêmes, sans changer leur longueur). Le vecteur Δv va alors de l'extrémité de v₂ à l'extrémité de v₃, puisque v₂ + Δv = v₃. On mesure sa longueur et on la convertit en m·s⁻¹ avec l'échelle des vitesses. On le représente ensuite au point indiqué par l'énoncé, en général M₂ ou M₃.",
                "Attention : la valeur de Δv n'est pas, en général, la différence des valeurs des vitesses. Si la direction du mouvement change, Δv peut être important même si la valeur de la vitesse varie peu, voire pas du tout. C'est pour cette raison qu'il faut construire Δv comme une différence de vecteurs.",
              ],
              box: { label: "Définition", text: "Vecteur variation de vitesse entre deux instants voisins : Δv = v₃ - v₂. Construction : v₂ et v₃ tracés depuis une même origine ; Δv va de l'extrémité de v₂ à l'extrémité de v₃." },
            },
            {
              heading: "Le vecteur variation de vitesse dans des mouvements simples",
              paragraphs: [
                "Mouvement rectiligne uniforme : le vecteur vitesse ne change ni de direction, ni de sens, ni de valeur, donc Δv = 0. Mouvement rectiligne accéléré : Δv a la direction et le sens du mouvement. Mouvement rectiligne ralenti : Δv a la direction du mouvement mais le sens opposé. Dans ces cas rectilignes, et seulement dans ces cas, la valeur de Δv est égale à la variation de la valeur de la vitesse (en valeur absolue).",
                "Mouvement circulaire uniforme : la valeur de la vitesse est constante, mais sa direction tourne en permanence ; Δv n'est pas nul et il est dirigé vers le centre du cercle. Chute d'un objet lancé, quand l'action de l'air est négligeable : Δv est vertical, vers le bas, et sa valeur vaut g × Δt, quelle que soit la direction du lancer.",
                "Le quotient Δv ÷ Δt mesure la rapidité avec laquelle le vecteur vitesse varie ; il s'exprime en m·s⁻². Pour une chute sans frottement, il vaut g ≈ 9,8 m·s⁻². Cette grandeur, étudiée en terminale sous le nom de vecteur accélération, est reliée aux forces dans la leçon suivante.",
              ],
              box: { label: "À retenir", text: "Rectiligne uniforme : Δv = 0. Rectiligne accéléré : Δv dans le sens du mouvement. Rectiligne ralenti : Δv en sens opposé. Circulaire uniforme : Δv vers le centre. Chute libre : Δv vertical vers le bas, de valeur g × Δt." },
            },
          ],
          keyPoints: [
            "Vecteur vitesse : v₂ ≈ M₂M₃ ÷ τ, tangent à la trajectoire, dans le sens du mouvement.",
            "Vecteur variation de vitesse : Δv = v₃ - v₂, construit en reportant les deux vecteurs depuis une même origine.",
            "La valeur de Δv n'est pas la différence des valeurs des vitesses, sauf en mouvement rectiligne.",
            "Rectiligne uniforme : Δv = 0 ; accéléré : Δv dans le sens du mouvement ; ralenti : sens opposé.",
            "Circulaire uniforme : Δv vers le centre ; chute libre : Δv vertical vers le bas, de valeur g × Δt.",
          ],
          example: {
            statement: "Une balle est lancée vers le haut et vers la droite. La chronophotographie, d'intervalle τ = 0,050 s, donne dans un repère (axe x horizontal, axe y vertical vers le haut) les positions M₂ (200 mm ; 251 mm), M₃ (300 mm ; 340 mm) et M₄ (400 mm ; 404 mm). 1. Calculer les coordonnées des vecteurs vitesse v₂ ≈ M₂M₃ ÷ τ et v₃ ≈ M₃M₄ ÷ τ, puis leurs valeurs. 2. Calculer les coordonnées et la valeur du vecteur variation de vitesse Δv = v₃ - v₂, et le caractériser. 3. Calculer Δv ÷ τ et commenter.",
            solution: [
              "1. M₂M₃ a pour coordonnées (0,100 m ; 0,089 m), donc v₂ ≈ (0,100 ÷ 0,050 ; 0,089 ÷ 0,050) = (2,00 ; 1,78) m·s⁻¹, de valeur √(2,00² + 1,78²) ≈ 2,68 m·s⁻¹.",
              "M₃M₄ a pour coordonnées (0,100 m ; 0,064 m), donc v₃ ≈ (2,00 ; 1,28) m·s⁻¹, de valeur √(2,00² + 1,28²) ≈ 2,37 m·s⁻¹.",
              "2. Δv = v₃ - v₂ = (2,00 - 2,00 ; 1,28 - 1,78) = (0 ; -0,50) m·s⁻¹ : Δv est vertical, dirigé vers le bas, de valeur 0,50 m·s⁻¹.",
              "Remarque : la différence des valeurs des vitesses vaut 2,68 - 2,37 = 0,31 m·s⁻¹, et non 0,50 m·s⁻¹ ; la valeur de Δv n'est pas la différence des valeurs.",
              "3. Δv ÷ τ = 0,50 ÷ 0,050 = 10 m·s⁻², proche de g = 9,8 m·s⁻² compte tenu de la précision des mesures (au millimètre).",
              "Réponse : Δv est vertical, vers le bas, de valeur 0,50 m·s⁻¹ ; Δv ÷ τ ≈ g, comme pour une chute où l'action de l'air est négligeable.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une voiture roule sur une route rectiligne. 1. Sa vitesse passe de 12 m·s⁻¹ à 15 m·s⁻¹ en 1,0 s. Caractériser le vecteur variation de vitesse (direction, sens, valeur). 2. Plus tard, en freinant, sa vitesse passe de 15 m·s⁻¹ à 10 m·s⁻¹ en 1,0 s. Même question. 3. Calculer Δv ÷ Δt dans chaque cas.",
              hint: "Le mouvement est rectiligne : la direction de Δv est celle de la route, et sa valeur est la variation de la valeur de la vitesse.",
              solution: [
                "1. Mouvement rectiligne accéléré : Δv a la direction de la route, le sens du mouvement et la valeur 15 - 12 = 3,0 m·s⁻¹.",
                "2. Mouvement rectiligne ralenti : Δv a la direction de la route, le sens opposé au mouvement et la valeur 15 - 10 = 5,0 m·s⁻¹.",
                "3. Accélération : Δv ÷ Δt = 3,0 ÷ 1,0 = 3,0 m·s⁻² ; freinage : 5,0 ÷ 1,0 = 5,0 m·s⁻², dans le sens opposé au mouvement.",
                "Réponse : 3,0 m·s⁻¹ dans le sens du mouvement, puis 5,0 m·s⁻¹ en sens opposé ; 3,0 et 5,0 m·s⁻².",
              ],
            },
            {
              level: 2,
              statement: "Une nacelle de grande roue tourne d'un mouvement circulaire uniforme, à la vitesse de valeur v = 4,0 m·s⁻¹. Pour simplifier la construction, on considère deux instants entre lesquels la nacelle a parcouru un sixième de tour : le vecteur vitesse a tourné de 60°. 1. Les valeurs des vitesses aux deux instants sont-elles différentes ? 2. Construire Δv en reportant les deux vecteurs vitesse depuis une même origine, et déterminer sa valeur. 3. Quel est le sens de Δv ? 4. Le mouvement est uniforme : peut-on dire que le vecteur vitesse est constant ?",
              hint: "Deux vecteurs de même longueur, issus d'un même point et formant un angle de 60°, forment avec le segment qui joint leurs extrémités un triangle équilatéral.",
              solution: [
                "1. Non : le mouvement est uniforme, les deux vitesses ont la même valeur, 4,0 m·s⁻¹.",
                "2. Les deux vecteurs, de longueur 4,0 m·s⁻¹ et formant un angle de 60°, forment avec Δv un triangle isocèle dont l'angle au sommet vaut 60° : il est équilatéral. Donc Δv = 4,0 m·s⁻¹.",
                "3. Δv est dirigé vers l'intérieur de la trajectoire, vers le centre du cercle (au milieu de l'arc parcouru).",
                "4. Non : sa valeur est constante, mais sa direction change sans cesse ; le vecteur vitesse varie, et Δv n'est pas nul.",
                "Réponse : Δv = 4,0 m·s⁻¹, dirigé vers le centre, alors que la valeur de la vitesse n'a pas changé.",
              ],
            },
            {
              level: 3,
              statement: "Un palet glisse en ligne droite sur une piste horizontale. Une chronophotographie d'intervalle τ = 0,20 s donne, sur l'axe du mouvement, les positions successives (données fictives) : x₀ = 0 ; x₁ = 0,80 m ; x₂ = 1,52 m ; x₃ = 2,16 m ; x₄ = 2,72 m. 1. Calculer les valeurs des vitesses v₀, v₁, v₂ et v₃ en utilisant v₀ ≈ (x₁ - x₀) ÷ τ, et de même pour les suivantes. 2. Caractériser les vecteurs variation de vitesse Δv entre deux instants successifs. Quelle est la nature du mouvement ? 3. Calculer Δv ÷ Δt. 4. En supposant que la vitesse continue de diminuer de la même façon, à quelle date le palet s'arrête-t-il ? 5. D'après le principe d'inertie vu en seconde, les forces qui s'exercent sur le palet se compensent-elles ? Justifier.",
              hint: "Calculez les distances parcourues pendant chaque intervalle : elles diminuent régulièrement. Pour la question 4, la vitesse diminue de la même quantité à chaque intervalle de 0,20 s.",
              solution: [
                "1. v₀ = 0,80 ÷ 0,20 = 4,0 m·s⁻¹ ; v₁ = 0,72 ÷ 0,20 = 3,6 m·s⁻¹ ; v₂ = 0,64 ÷ 0,20 = 3,2 m·s⁻¹ ; v₃ = 0,56 ÷ 0,20 = 2,8 m·s⁻¹.",
                "2. Entre deux instants successifs, la vitesse diminue de 0,40 m·s⁻¹ : Δv a la direction du mouvement, le sens opposé, et une valeur constante de 0,40 m·s⁻¹. Le mouvement est rectiligne ralenti, la vitesse diminuant régulièrement.",
                "3. Δv ÷ Δt = 0,40 ÷ 0,20 = 2,0 m·s⁻², dans le sens opposé au mouvement.",
                "4. À t₀ = 0, v = 4,0 m·s⁻¹ et la vitesse diminue de 2,0 m·s⁻¹ par seconde : elle s'annule au bout de 4,0 ÷ 2,0 = 2,0 s.",
                "5. Non : le vecteur vitesse varie (Δv ≠ 0), donc, d'après le principe d'inertie, les forces ne se compensent pas. Une force de frottement, opposée au mouvement, n'est pas compensée.",
                "Réponse : mouvement rectiligne ralenti, Δv ÷ Δt = 2,0 m·s⁻² opposé au mouvement ; arrêt à t = 2,0 s ; les forces ne se compensent pas.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction du vecteur variation de vitesse au point M₂.",
            items: [
              "Repérer les positions M₂, M₃, M₄ et la durée τ entre deux images",
              "Calculer les valeurs v₂ = M₂M₃ ÷ τ et v₃ = M₃M₄ ÷ τ",
              "Tracer v₂ en M₂ et v₃ en M₃ avec l'échelle choisie",
              "Reporter v₂ et v₃ à partir d'une même origine",
              "Tracer Δv de l'extrémité de v₂ à l'extrémité de v₃",
              "Mesurer la longueur de Δv et la convertir avec l'échelle",
            ],
          },
          quiz: [
            {
              q: "Dans un mouvement rectiligne uniforme, le vecteur variation de vitesse est :",
              options: ["dans le sens du mouvement", "nul", "opposé au mouvement", "perpendiculaire à la trajectoire"],
              answer: 1,
              why: "Le vecteur vitesse ne change ni de direction ni de valeur : Δv = 0.",
            },
            {
              q: "Un cycliste freine en ligne droite. Le vecteur Δv est :",
              options: ["nul", "perpendiculaire à la route, vers le bas-côté", "dans le sens du mouvement", "de sens opposé au mouvement"],
              answer: 3,
              why: "La vitesse diminue : v₃ est plus court que v₂, donc Δv = v₃ - v₂ est opposé au mouvement.",
            },
            {
              q: "Dans un mouvement circulaire uniforme, le vecteur Δv est dirigé :",
              options: ["vers le centre du cercle", "vers l'extérieur du cercle", "selon la tangente", "il est nul"],
              answer: 0,
              why: "La direction de la vitesse tourne vers l'intérieur de la courbe : Δv pointe vers le centre.",
            },
            {
              q: "Une balle tombe sans frottement. Pendant Δt = 0,10 s (g = 9,8 m·s⁻²), la valeur de Δv est :",
              options: ["9,8 m·s⁻¹", "0,098 m·s⁻¹", "0,98 m·s⁻¹", "98 m·s⁻¹"],
              answer: 2,
              why: "En chute libre, Δv = g × Δt = 9,8 × 0,10 = 0,98 m·s⁻¹, vertical vers le bas.",
            },
            {
              q: "Le vecteur vitesse v₂, construit sur une chronophotographie, a pour direction :",
              options: ["la verticale", "la droite joignant M₂ à l'origine du repère", "la tangente à la trajectoire", "la droite (M₁M₂) dans tous les cas"],
              answer: 2,
              why: "Le vecteur vitesse est tangent à la trajectoire ; on l'approche par la droite (M₂M₃) pour des positions voisines.",
            },
          ],
          trap: "Calculer la valeur de Δv en soustrayant les valeurs des vitesses alors que la direction du mouvement change : il faut construire la différence des vecteurs, en reportant v₂ et v₃ depuis une même origine.",
          method: "Pour construire Δv, travaillez toujours en deux temps : d'abord les deux vecteurs vitesse tracés à l'échelle, ensuite leur report depuis un même point, en conservant direction, sens et longueur. Vérifiez la cohérence : un mouvement qui ralentit en ligne droite doit donner un Δv opposé au mouvement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "forces-et-mouvement",
          title: "Somme des forces et variation de la vitesse",
          minutes: 35,
          objectives: [
            "Utiliser la relation approchée m × Δv ÷ Δt ≈ ΣF entre la variation du vecteur vitesse d'un système modélisé par un point matériel et la somme des forces qui s'exercent sur lui.",
            "Discuter qualitativement du lien entre la variation du vecteur vitesse, la masse du système et la somme des forces.",
            "Déterminer une force ou prévoir une variation de vitesse dans des cas simples : chute libre, mouvement rectiligne.",
          ],
          course: [
            {
              heading: "Du principe d'inertie aux forces non compensées",
              paragraphs: [
                "En seconde, vous avez étudié le principe d'inertie : dans un référentiel galiléen, comme le référentiel terrestre pour des mouvements de courte durée, si les forces qui s'exercent sur un système se compensent (leur somme vectorielle est nulle), alors le système est immobile ou en mouvement rectiligne uniforme, et réciproquement. Autrement dit, ΣF = 0 si et seulement si Δv = 0.",
                "Par conséquent, si le vecteur vitesse varie, en valeur ou en direction, les forces ne se compensent pas. Une erreur ancienne, défendue depuis Aristote, consiste à croire qu'il faut une force pour entretenir un mouvement : en réalité, une force non compensée ne sert pas à maintenir la vitesse, elle sert à la modifier. Une rondelle de hockey qui glisse sur une glace parfaite continuerait indéfiniment en ligne droite sans aucune force motrice.",
              ],
              box: { label: "Rappel", text: "Principe d'inertie : dans un référentiel galiléen, ΣF = 0 si et seulement si le système est immobile ou en mouvement rectiligne uniforme (Δv = 0). Si Δv ≠ 0, les forces ne se compensent pas." },
            },
            {
              heading: "La relation approchée m × Δv ÷ Δt ≈ ΣF",
              paragraphs: [
                "En première, on précise ce lien. Pour un système de masse m modélisé par un point matériel, entre deux instants voisins séparés de Δt, la variation du vecteur vitesse et la somme des forces sont reliées par m × Δv ÷ Δt ≈ ΣF, soit Δv ≈ ΣF × Δt ÷ m. La relation est d'autant plus précise que Δt est petit ; elle est exacte si la somme des forces reste constante pendant Δt. Elle préfigure la deuxième loi de Newton, étudiée en terminale.",
                "Trois conséquences qualitatives. Le vecteur Δv a la même direction et le même sens que ΣF. Pour une même somme des forces, Δv est d'autant plus grand que Δt est long. Pour une même somme des forces pendant la même durée, Δv est d'autant plus petit que la masse est grande : la masse mesure l'inertie, la difficulté à modifier la vitesse d'un corps. Il est plus difficile de lancer ou d'arrêter un camion qu'un vélo.",
                "Unités : m en kg, Δv en m·s⁻¹, Δt en s, ΣF en N. Ce calcul peut aussi être mené avec un programme en Python : à partir des positions relevées sur une vidéo, le programme calcule les vecteurs vitesse, puis les vecteurs Δv, et les compare à ΣF × Δt ÷ m.",
              ],
              box: { label: "Formule", text: "m × Δv ÷ Δt ≈ ΣF, pour deux instants voisins. Δv a la direction et le sens de ΣF ; à force et durée égales, Δv est inversement proportionnel à la masse." },
            },
            {
              heading: "Le cas de la chute libre",
              paragraphs: [
                "Un objet en chute libre n'est soumis qu'à son poids P = m × g (l'action de l'air est négligée). La relation donne m × Δv ÷ Δt = m × g, soit Δv ÷ Δt = g. Le vecteur variation de vitesse est donc vertical, vers le bas, de valeur g × Δt, et il ne dépend pas de la masse : en l'absence d'air, tous les corps tombent de la même façon, comme l'avait compris Galilée.",
                "Une célèbre démonstration a eu lieu sur la Lune en 1971, lors de la mission Apollo 15 : l'astronaute David Scott a lâché en même temps un marteau et une plume, qui ont touché le sol au même instant, faute d'atmosphère. Sur la Terre, la plume tombe plus lentement à cause des frottements de l'air, qui ne sont pas négligeables devant son poids.",
              ],
              box: { label: "À retenir", text: "Chute libre : seule force, le poids. Δv ÷ Δt = g : Δv vertical, vers le bas, de valeur g × Δt, indépendant de la masse." },
            },
            {
              heading: "Mouvements rectilignes : déterminer une force",
              paragraphs: [
                "Lorsque toutes les forces sont portées par la droite du mouvement, la relation se ramène à des valeurs. Si la vitesse augmente, ΣF est dans le sens du mouvement ; si elle diminue, ΣF est en sens opposé. Exemple : une voiture de 1200 kg freine sur une route horizontale rectiligne ; sa vitesse passe de 20,0 m·s⁻¹ à 14,0 m·s⁻¹ en 2,0 s. Δv = 6,0 m·s⁻¹ dans le sens opposé au mouvement, donc ΣF = m × Δv ÷ Δt = 1200 × 6,0 ÷ 2,0 = 3,6 × 10³ N, opposée au mouvement.",
                "Inversement, connaissant les forces, on prévoit l'évolution de la vitesse. Un objet qui tombe dans l'air subit son poids et une force de frottement opposée au mouvement, qui augmente avec la vitesse. Au début, le frottement est faible et la vitesse augmente vite ; puis Δv diminue à mesure que le frottement grandit ; quand le frottement compense le poids, Δv = 0 : la vitesse est devenue constante. C'est ce qui arrive à un parachutiste ou à une goutte de pluie.",
              ],
            },
          ],
          keyPoints: [
            "Principe d'inertie : ΣF = 0 si et seulement si Δv = 0 (repos ou mouvement rectiligne uniforme).",
            "Relation approchée : m × Δv ÷ Δt ≈ ΣF pour deux instants voisins.",
            "Δv a la direction et le sens de la somme des forces, pas forcément ceux de la vitesse.",
            "À force et durée égales, plus la masse est grande, plus Δv est petit.",
            "Chute libre : Δv ÷ Δt = g, vertical vers le bas, indépendant de la masse.",
          ],
          example: {
            statement: "Un skieur de masse m = 75 kg descend une piste en ligne droite. Entre deux instants séparés de Δt = 0,50 s, sa vitesse passe de 8,0 m·s⁻¹ à 9,2 m·s⁻¹, sans changer de direction. 1. Caractériser le vecteur Δv. 2. En déduire la somme des forces qui s'exercent sur le skieur (direction, sens, valeur). 3. Les forces se compensent-elles ?",
            solution: [
              "1. Le mouvement est rectiligne accéléré : Δv a la direction et le sens du mouvement, de valeur 9,2 - 8,0 = 1,2 m·s⁻¹.",
              "2. ΣF ≈ m × Δv ÷ Δt : même direction et même sens que Δv, soit selon la pente, vers le bas de la piste.",
              "Valeur : ΣF ≈ 75 × 1,2 ÷ 0,50 = 1,8 × 10² N.",
              "3. Non : la somme des forces n'est pas nulle, ce qui est cohérent avec la variation de la vitesse.",
              "Réponse : ΣF ≈ 1,8 × 10² N, dans le sens du mouvement ; les forces ne se compensent pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On lâche une boule de masse 0,50 kg ; l'action de l'air est négligeable. Donnée : g = 9,81 N·kg⁻¹. 1. Quelle est la seule force qui s'exerce sur la boule ? Calculer sa valeur. 2. Calculer la valeur du vecteur variation de vitesse pendant Δt = 0,10 s et préciser sa direction et son sens. 3. Reprendre la question 2 pour une boule de 5,0 kg. Conclure.",
              hint: "Appliquez Δv ≈ ΣF × Δt ÷ m avec ΣF = P = m × g.",
              solution: [
                "1. Seul le poids s'exerce : P = m × g = 0,50 × 9,81 ≈ 4,9 N, vertical, vers le bas.",
                "2. Δv = P × Δt ÷ m = 4,905 × 0,10 ÷ 0,50 ≈ 0,98 m·s⁻¹, vertical, vers le bas.",
                "3. Pour 5,0 kg : P = 49 N, et Δv = 49,05 × 0,10 ÷ 5,0 ≈ 0,98 m·s⁻¹ : même résultat.",
                "Conclusion : en chute libre, Δv = g × Δt ne dépend pas de la masse ; le poids est dix fois plus grand, mais la masse aussi.",
              ],
            },
            {
              level: 2,
              statement: "Un skieur de masse 60 kg, tiré par un téléski sur une piste horizontale rectiligne, avance à 2,0 m·s⁻¹. Pendant 4,0 s, la somme des forces qui s'exercent sur lui vaut 90 N, dans le sens du mouvement, et reste constante. 1. Calculer la variation de la valeur de sa vitesse et sa vitesse finale. 2. Reprendre le calcul pour un skieur de 90 kg soumis à la même somme des forces, à partir de la même vitesse initiale. 3. Quel rôle joue la masse ?",
              hint: "La somme des forces est constante et parallèle au mouvement : Δv = ΣF × Δt ÷ m est exacte et s'ajoute à la vitesse initiale.",
              solution: [
                "1. Δv = ΣF × Δt ÷ m = 90 × 4,0 ÷ 60 = 6,0 m·s⁻¹, dans le sens du mouvement ; vitesse finale : 2,0 + 6,0 = 8,0 m·s⁻¹.",
                "2. Δv = 90 × 4,0 ÷ 90 = 4,0 m·s⁻¹ ; vitesse finale : 2,0 + 4,0 = 6,0 m·s⁻¹.",
                "3. Pour la même somme des forces pendant la même durée, le skieur le plus massif voit sa vitesse varier moins : la masse traduit l'inertie du système.",
                "Réponse : 8,0 m·s⁻¹ pour le skieur de 60 kg, 6,0 m·s⁻¹ pour celui de 90 kg.",
              ],
            },
            {
              level: 3,
              statement: "On filme la chute verticale d'un volant de badminton de masse m = 5,0 g, lâché sans vitesse initiale. Le traitement de la vidéo (données fictives) donne, entre deux images séparées de Δt = 0,040 s : au début de la chute, une variation de vitesse de valeur 0,39 m·s⁻¹ ; un peu plus tard, une variation de vitesse de valeur 0,05 m·s⁻¹ ; à la fin de l'enregistrement, une vitesse constante. Dans tous les cas, Δv est vertical, vers le bas. Donnée : g = 9,81 N·kg⁻¹. 1. Calculer le poids du volant. 2. Au début de la chute, calculer m × Δv ÷ Δt et le comparer au poids. Que peut-on dire de l'action de l'air à ce moment ? 3. Un peu plus tard, calculer la somme des forces, puis en déduire la valeur de la force de frottement de l'air, supposée verticale et vers le haut. 4. Que vaut la force de frottement à la fin de l'enregistrement ? Justifier. 5. Expliquer qualitativement l'évolution du mouvement.",
              hint: "Convertissez la masse en kilogrammes. Le volant est soumis à deux forces verticales, le poids vers le bas et le frottement vers le haut : leur somme vaut P - f, vers le bas.",
              solution: [
                "1. P = m × g = 5,0 × 10⁻³ × 9,81 ≈ 4,9 × 10⁻² N.",
                "2. m × Δv ÷ Δt = 5,0 × 10⁻³ × 0,39 ÷ 0,040 = 5,0 × 10⁻³ × 9,75 ≈ 4,9 × 10⁻² N : c'est la valeur du poids. Au début, la vitesse est faible et l'action de l'air est négligeable : le volant est pratiquement en chute libre.",
                "3. ΣF ≈ 5,0 × 10⁻³ × 0,05 ÷ 0,040 ≈ 6 × 10⁻³ N, vers le bas. ΣF = P - f, donc f = P - ΣF ≈ 4,9 × 10⁻² - 0,6 × 10⁻² ≈ 4,3 × 10⁻² N, vers le haut.",
                "4. La vitesse est constante et rectiligne : Δv = 0, donc ΣF = 0 et le frottement compense exactement le poids : f = P ≈ 4,9 × 10⁻² N.",
                "5. Le frottement de l'air augmente avec la vitesse. La somme des forces, d'abord égale au poids, diminue à mesure que le volant accélère ; Δv diminue donc aussi, jusqu'à s'annuler quand le frottement égale le poids : la vitesse limite est atteinte.",
                "Réponse : P ≈ 4,9 × 10⁻² N ; chute pratiquement libre au départ ; f ≈ 4,3 × 10⁻² N ensuite, puis f = P à vitesse constante.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : forces et variation de vitesse.",
            statements: [
              { text: "Un objet en mouvement est forcément soumis à une force dirigée dans le sens de son mouvement.", true: false, why: "Une force non compensée modifie la vitesse ; elle n'est pas nécessaire pour l'entretenir (principe d'inertie)." },
              { text: "Le vecteur Δv a la même direction et le même sens que la somme des forces.", true: true, why: "D'après m × Δv ÷ Δt ≈ ΣF, Δv et ΣF sont colinéaires et de même sens." },
              { text: "En chute libre, la vitesse d'une boule lourde varie plus vite que celle d'une boule légère.", true: false, why: "Δv ÷ Δt = g pour les deux : la masse n'intervient pas en chute libre." },
              { text: "Pour une même force pendant la même durée, un corps plus massif voit sa vitesse varier moins.", true: true, why: "Δv ≈ ΣF × Δt ÷ m : Δv est inversement proportionnel à la masse." },
              { text: "Dans un mouvement circulaire uniforme, la somme des forces est nulle.", true: false, why: "Le vecteur vitesse change de direction : Δv ≠ 0, donc ΣF ≠ 0, dirigée vers le centre." },
              { text: "Si la somme des forces est nulle, le système est forcément immobile.", true: false, why: "Il peut aussi être en mouvement rectiligne uniforme." },
              { text: "La relation m × Δv ÷ Δt ≈ ΣF est d'autant plus précise que Δt est petit.", true: true, why: "C'est une relation approchée entre deux instants voisins ; elle devient exacte quand Δt tend vers zéro." },
            ],
          },
          quiz: [
            {
              q: "Une voiture de 1000 kg voit sa vitesse augmenter de 2,0 m·s⁻¹ en 1,0 s en ligne droite. La somme des forces vaut :",
              options: ["5,0 × 10² N", "2,0 × 10³ N", "1,0 × 10³ N", "2,0 N"],
              answer: 1,
              why: "ΣF = m × Δv ÷ Δt = 1000 × 2,0 ÷ 1,0 = 2,0 × 10³ N, dans le sens du mouvement.",
            },
            {
              q: "Une même force agit pendant la même durée sur un vélo et sur un camion. La variation de vitesse est :",
              options: ["plus grande pour le camion", "identique pour les deux", "nulle pour les deux", "plus grande pour le vélo"],
              answer: 3,
              why: "Δv ≈ ΣF × Δt ÷ m : la masse la plus faible donne la variation de vitesse la plus grande.",
            },
            {
              q: "Un objet tombe à vitesse constante dans l'air. La force de frottement :",
              options: ["est nulle", "compense exactement le poids", "est plus grande que le poids", "est plus petite que le poids"],
              answer: 1,
              why: "Vitesse constante en ligne droite : Δv = 0, donc ΣF = 0 et le frottement compense le poids.",
            },
            {
              q: "Un palet ralentit en glissant en ligne droite. La somme des forces qui s'exercent sur lui est :",
              options: ["opposée au mouvement", "dans le sens du mouvement", "nulle", "perpendiculaire à la trajectoire"],
              answer: 0,
              why: "Δv est opposé au mouvement lors d'un ralentissement, et ΣF a le sens de Δv.",
            },
            {
              q: "En chute libre, la grandeur Δv ÷ Δt vaut :",
              options: ["m × g", "g ÷ m", "g", "0"],
              answer: 2,
              why: "Seul le poids agit : m × Δv ÷ Δt = m × g, donc Δv ÷ Δt = g, quelle que soit la masse.",
            },
          ],
          trap: "Croire que la somme des forces est dirigée dans le sens de la vitesse : elle est dirigée dans le sens de la variation de la vitesse Δv, par exemple opposée au mouvement lors d'un freinage, ou vers le centre dans un virage à vitesse constante.",
          method: "Pour relier forces et mouvement, procédez dans l'ordre : système et référentiel, bilan des forces avec un schéma, construction ou calcul de Δv, puis comparaison de m × Δv ÷ Δt et de ΣF en direction, sens et valeur. Vérifiez les unités : masse en kg, durée en s.",
        },
      ],
    },
  ],
}
