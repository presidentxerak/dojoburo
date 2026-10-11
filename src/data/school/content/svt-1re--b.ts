import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-1re',
  chapters: [
    /* ==================================================================== */
    /* LES ENZYMES                                                           */
    /* ==================================================================== */
    {
      id: 'enzymes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'enzymes-catalyseurs',
          title: 'Les enzymes, des catalyseurs biologiques spécifiques',
          minutes: 30,
          objectives: [
            "Définir une enzyme comme un catalyseur biologique, le plus souvent de nature protéique, qui accélère une réaction chimique sans être consommé.",
            "Expliquer la double spécificité d'une enzyme (spécificité de substrat et spécificité d'action) par la structure de son site actif et la formation d'un complexe enzyme-substrat.",
            "Relier la structure tridimensionnelle d'une enzyme à la séquence de ses acides aminés, donc à l'information génétique.",
            "Exploiter des résultats expérimentaux (eau iodée, liqueur de Fehling, mesures en ExAO) pour mettre en évidence une catalyse enzymatique.",
          ],
          course: [
            {
              heading: "Le métabolisme, un ensemble de réactions catalysées",
              paragraphs: [
                "Le métabolisme est l'ensemble des réactions chimiques qui se déroulent dans une cellule ou un organisme : dégradation des nutriments, synthèse des molécules du vivant (protéines, ADN, glucides, lipides), production d'énergie. À la température du corps (37 °C chez l'être humain) et au pH à peu près neutre des cellules, la plupart de ces réactions seraient beaucoup trop lentes pour entretenir la vie si elles n'étaient pas accélérées.",
                "Un catalyseur est une substance qui accélère une réaction chimique sans être consommée : on le retrouve intact à la fin de la réaction, il agit en très petite quantité et il ne change ni la nature des produits ni l'état final de la réaction, seulement la vitesse à laquelle on l'atteint. Les catalyseurs du vivant sont les enzymes.",
                "Exemple : le peroxyde d'hydrogène (H₂O₂, l'eau oxygénée), toxique pour les cellules, se décompose spontanément en eau et en dioxygène, mais très lentement. Si l'on dépose un morceau de foie frais dans de l'eau oxygénée, une vive effervescence apparaît aussitôt : la catalase contenue dans les cellules du foie catalyse la réaction 2 H₂O₂ → 2 H₂O + O₂. Avec un morceau de foie préalablement bouilli, l'effervescence n'apparaît pas.",
              ],
              box: { label: "Définition", text: "Une enzyme est un catalyseur biologique : une molécule produite par les cellules, le plus souvent une protéine, qui accélère une réaction chimique précise sans être consommée ni modifiée à la fin de la réaction." },
            },
            {
              heading: "Des protéines à la structure tridimensionnelle précise",
              paragraphs: [
                "La plupart des enzymes sont des protéines. Une protéine est une chaîne d'acides aminés (il en existe 20 sortes) reliés par des liaisons peptidiques. L'ordre des acides aminés, appelé séquence, est déterminé par la séquence des nucléotides du gène correspondant, par l'intermédiaire de la transcription et de la traduction.",
                "La chaîne d'acides aminés ne reste pas étirée : elle se replie dans l'espace et prend une forme tridimensionnelle précise, stabilisée par des liaisons faibles entre les acides aminés. Cette forme dépend de la séquence : deux protéines de même séquence adoptent la même structure. Les logiciels de visualisation moléculaire (comme Libmol ou Rastop) permettent d'observer ces structures et de repérer les acides aminés qui jouent un rôle particulier.",
                "Certaines enzymes sont formées de plusieurs chaînes, et beaucoup ont besoin d'un cofacteur pour fonctionner (un ion métallique ou une petite molécule dérivée d'une vitamine). Enfin, quelques molécules d'ARN possèdent aussi une activité catalytique : on les appelle des ribozymes. Dans le ribosome, par exemple, c'est un ARN qui catalyse la formation des liaisons peptidiques.",
              ],
              box: { label: "À retenir", text: "Gène → séquence d'acides aminés → structure tridimensionnelle → fonction de l'enzyme. Une modification de la séquence peut modifier la forme de l'enzyme, donc son activité." },
            },
            {
              heading: "Le site actif et le complexe enzyme-substrat",
              paragraphs: [
                "La molécule transformée par l'enzyme s'appelle le substrat ; les molécules obtenues sont les produits. Le substrat se fixe sur une petite région de l'enzyme, le site actif, formé de quelques acides aminés seulement. Ces acides aminés sont souvent éloignés les uns des autres dans la séquence, mais le repliement de la chaîne les rapproche dans l'espace. On distingue dans le site actif un site de fixation, qui reconnaît et retient le substrat, et un site catalytique, qui réalise la transformation.",
                "La réaction se déroule en étapes : l'enzyme et le substrat s'associent par des liaisons faibles pour former un complexe enzyme-substrat, le substrat est transformé, puis les produits se détachent et l'enzyme est libérée, intacte, prête à recommencer. Une seule molécule d'enzyme peut ainsi transformer un très grand nombre de molécules de substrat : la catalase décompose plusieurs millions de molécules de H₂O₂ par seconde.",
                "Pour expliquer cette association, Emil Fischer proposa en 1894 le modèle « clé-serrure » : le substrat aurait exactement la forme complémentaire du site actif. Daniel Koshland le compléta en 1958 par le modèle de l'ajustement induit : le site actif est un peu déformable, et la fixation du substrat modifie légèrement sa forme, ce qui rend la complémentarité parfaite au moment de la réaction.",
              ],
              box: { label: "Formule", text: "E + S → ES → E + P (E : enzyme ; S : substrat ; ES : complexe enzyme-substrat ; P : produits). L'enzyme se retrouve inchangée à la fin de la réaction." },
            },
            {
              heading: "Une double spécificité",
              paragraphs: [
                "Une enzyme présente une spécificité de substrat : elle ne reconnaît qu'un substrat, ou quelques substrats de forme très proche, ceux dont la forme est complémentaire de son site actif. L'amylase salivaire hydrolyse l'amidon mais pas le saccharose ; la saccharase hydrolyse le saccharose en glucose et fructose mais pas l'amidon. La glucose oxydase oxyde le glucose mais pas le galactose ni le fructose, pourtant de même formule brute (C₆H₁₂O₆).",
                "Elle présente aussi une spécificité d'action : elle ne catalyse qu'un type de réaction sur son substrat. Le glucose peut être oxydé par la glucose oxydase, ou phosphorylé par l'hexokinase : ce sont deux enzymes différentes qui catalysent deux réactions différentes sur le même substrat. Le nom d'une enzyme se termine le plus souvent par « -ase » et désigne son substrat, sa réaction, ou les deux (lactase, ADN polymérase).",
                "Au laboratoire, on met en évidence l'action de l'amylase en la mélangeant à de l'empois d'amidon à 37 °C. L'eau iodée, qui colore l'amidon en bleu-noir, reste jaune-orangé lorsque l'amidon a disparu ; la liqueur de Fehling, chauffée, forme un précipité rouge brique en présence de sucres réducteurs comme le maltose produit. Des tubes témoins (amidon sans enzyme, enzyme bouillie) sont indispensables pour conclure.",
              ],
              box: { label: "Définition", text: "Spécificité de substrat : une enzyme ne reconnaît que le ou les substrats complémentaires de son site actif. Spécificité d'action : elle ne catalyse qu'un type de réaction sur ce substrat." },
            },
            {
              heading: "Des enzymes au phénotype",
              paragraphs: [
                "Comme chaque enzyme catalyse une réaction précise, l'ensemble des enzymes produites par une cellule détermine une grande partie de ses caractères, c'est-à-dire de son phénotype moléculaire et cellulaire. L'albinisme en est un exemple : la tyrosinase catalyse une étape de la synthèse de la mélanine, le pigment de la peau, des poils et de l'iris. Certaines mutations du gène de la tyrosinase produisent une enzyme non fonctionnelle : la mélanine n'est pas fabriquée.",
                "De même, la phénylcétonurie est due à une enzyme déficiente, la phénylalanine hydroxylase, qui transforme normalement l'acide aminé phénylalanine. Celui-ci s'accumule et devient toxique pour le cerveau en développement. Un dépistage à la naissance permet de proposer un régime pauvre en phénylalanine qui évite les troubles.",
              ],
            },
          ],
          keyPoints: [
            "Une enzyme est un catalyseur biologique, le plus souvent une protéine : elle accélère une réaction sans être consommée.",
            "La structure tridimensionnelle d'une enzyme dépend de sa séquence d'acides aminés, donc du gène qui la code.",
            "Le substrat se fixe sur le site actif (site de fixation et site catalytique) : E + S → ES → E + P.",
            "Spécificité de substrat : l'enzyme ne reconnaît que le substrat complémentaire de son site actif.",
            "Spécificité d'action : l'enzyme ne catalyse qu'un type de réaction sur ce substrat.",
            "Les enzymes déterminent le phénotype : une enzyme non fonctionnelle peut provoquer un caractère comme l'albinisme.",
          ],
          example: {
            statement: "On prépare quatre tubes à 37 °C. A : amidon + amylase. B : amidon + eau. C : amidon + amylase préalablement bouillie. D : saccharose + amylase. Après 20 minutes, on teste chaque tube. Eau iodée : A jaune-orangé, B bleu-noir, C bleu-noir, D jaune-orangé. Liqueur de Fehling chauffée : A rouge brique, B, C et D bleu (aucun précipité). Sachant que le saccharose n'est pas un sucre réducteur, interprétez ces résultats.",
            solution: [
              "Tube B (témoin sans enzyme) : l'amidon est toujours présent (bleu-noir) et aucun sucre réducteur n'est apparu. Sans enzyme, l'amidon n'est pas hydrolysé en 20 minutes.",
              "Tube A : l'amidon a disparu (l'eau iodée reste jaune-orangé) et un sucre réducteur est apparu (précipité rouge brique). L'amylase a donc catalysé l'hydrolyse de l'amidon en sucres réducteurs (du maltose).",
              "Tube C : l'amylase bouillie n'agit plus, car la chaleur a détruit sa structure tridimensionnelle. Cela montre que l'activité est due à une molécule fragile, une protéine, et non à une substance quelconque de la solution.",
              "Tube D : il n'y avait pas d'amidon au départ (eau iodée jaune-orangé) et aucun sucre réducteur n'est apparu : le saccharose n'a pas été hydrolysé (sinon on aurait obtenu du glucose et du fructose, réducteurs).",
              "Conclusion : l'amylase est un catalyseur biologique de nature protéique, qui hydrolyse l'amidon mais pas le saccharose. Elle présente une spécificité de substrat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des réactions suivantes, nommez le substrat et le ou les produits, puis indiquez si le nom de l'enzyme renseigne sur son substrat. (a) Lactase : lactose + eau → glucose + galactose. (b) Amylase : amidon + eau → maltose. (c) Catalase : 2 H₂O₂ → 2 H₂O + O₂.",
              hint: "Le substrat est la molécule transformée (à gauche de la flèche, l'eau mise à part dans une hydrolyse) ; les produits sont à droite.",
              solution: [
                "(a) Substrat : le lactose (le sucre du lait). Produits : le glucose et le galactose. Le nom « lactase » est formé sur le nom du substrat (lactose) suivi de « -ase ».",
                "(b) Substrat : l'amidon (« amylum » en latin). Produits : le maltose. Le nom « amylase » rappelle aussi le substrat.",
                "(c) Substrat : le peroxyde d'hydrogène H₂O₂. Produits : l'eau et le dioxygène. Le nom « catalase » ne désigne pas le substrat : c'est un nom ancien, qui rappelle seulement son activité catalytique.",
                "Résultat : le suffixe « -ase » signale une enzyme ; le reste du nom indique souvent, mais pas toujours, le substrat.",
              ],
            },
            {
              level: 2,
              statement: "Dans une enceinte d'ExAO, on suit la concentration en dioxygène d'une solution de glucose oxydase, une enzyme qui catalyse la réaction : glucose + O₂ → acide gluconique + H₂O₂. Données fictives : de t = 0 à t = 3 min, la concentration en O₂ reste stable à 9,0 mg/L ; on injecte du galactose à t = 1 min. À t = 3 min, on injecte du glucose : la concentration en O₂ diminue alors régulièrement jusqu'à 5,0 mg/L à t = 7 min. (1) Calculez la vitesse de consommation du dioxygène après l'injection de glucose. (2) Quelle propriété de l'enzyme ces résultats montrent-ils ?",
              hint: "Une vitesse de consommation se calcule en divisant la variation de concentration par la durée.",
              solution: [
                "(1) Entre t = 3 min et t = 7 min, la concentration passe de 9,0 à 5,0 mg/L, soit une diminution de 4,0 mg/L en 4 min.",
                "Vitesse de consommation = 4,0 ÷ 4 = 1,0 mg de O₂ par litre et par minute.",
                "(2) Le galactose (C₆H₁₂O₆, comme le glucose) ne provoque aucune consommation de dioxygène : l'enzyme ne le transforme pas. Le glucose, lui, est oxydé, ce qui consomme du O₂.",
                "Résultat : la glucose oxydase présente une spécificité de substrat. Elle reconnaît le glucose, dont la forme est complémentaire de son site actif, mais pas le galactose, qui ne diffère que par l'orientation d'un groupement d'atomes.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données simplifiées). Document 1 : la tyrosinase catalyse la première étape de la synthèse de la mélanine à partir de l'acide aminé tyrosine. Document 2 : chez une personne atteinte d'albinisme, le gène de la tyrosinase présente, sur ses deux allèles, la substitution d'un seul nucléotide ; le codon modifié code un acide aminé différent, situé dans le site actif. Document 3 : on mesure l'activité de la tyrosinase extraite de cellules pigmentaires : 100 % (activité de référence) chez une personne non atteinte, moins de 5 % chez la personne albinos. À partir de ces documents et de vos connaissances, expliquez comment la modification d'un seul nucléotide peut conduire au phénotype albinos.",
              hint: "Raisonnez aux différentes échelles : gène, protéine (séquence puis forme), activité enzymatique, cellule, organisme.",
              solution: [
                "Échelle du gène (document 2) : la substitution d'un nucléotide modifie un codon, ce qui change, après transcription et traduction, un acide aminé de la tyrosinase.",
                "Échelle de la protéine : cet acide aminé fait partie du site actif. Sa modification change la forme ou les propriétés chimiques du site actif, qui n'est plus complémentaire de la tyrosine.",
                "Échelle de l'activité (document 3) : la tyrosine ne se fixe plus, ou mal, et le complexe enzyme-substrat ne se forme pas : l'activité tombe à moins de 5 % de la normale.",
                "Échelle de la cellule (document 1) : la première étape de la synthèse de la mélanine n'est pas catalysée, donc les cellules pigmentaires ne produisent pas de mélanine.",
                "Échelle de l'organisme : la peau, les poils et l'iris sont dépourvus de pigment ; comme les deux allèles sont touchés, aucune tyrosinase fonctionnelle n'est produite.",
                "Conclusion : la modification d'un seul nucléotide suffit à changer la structure du site actif d'une enzyme ; l'enzyme perd son activité catalytique, ce qui modifie le phénotype aux échelles cellulaire et macroscopique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Catalyseur", right: "Accélère une réaction sans être consommé" },
              { left: "Substrat", right: "Molécule transformée par l'enzyme" },
              { left: "Site actif", right: "Région de l'enzyme où le substrat se fixe et réagit" },
              { left: "Complexe enzyme-substrat", right: "Association temporaire de l'enzyme et du substrat" },
              { left: "Spécificité d'action", right: "Un seul type de réaction catalysé" },
              { left: "Ribozyme", right: "ARN doté d'une activité catalytique" },
            ],
          },
          quiz: [
            {
              q: "Que devient une enzyme à la fin de la réaction qu'elle catalyse ?",
              options: ["Elle est transformée en produit", "Elle est libérée intacte", "Elle est détruite par la cellule", "Elle reste fixée au produit"],
              answer: 1,
              why: "Un catalyseur n'est pas consommé : après la libération des produits, l'enzyme est disponible pour une nouvelle réaction.",
            },
            {
              q: "Qu'est-ce qui détermine la forme du site actif d'une enzyme protéique ?",
              options: ["La quantité de substrat présente", "La taille de la cellule", "La température du corps uniquement", "La séquence de ses acides aminés"],
              answer: 3,
              why: "La séquence d'acides aminés, codée par le gène, détermine le repliement de la chaîne et donc la forme tridimensionnelle du site actif.",
            },
            {
              q: "L'amylase hydrolyse l'amidon mais pas le saccharose. Cela illustre :",
              options: ["la spécificité de substrat", "la spécificité d'action seulement", "la dénaturation de l'enzyme", "le modèle de l'ajustement induit"],
              answer: 0,
              why: "L'enzyme ne reconnaît que le substrat dont la forme est complémentaire de son site actif : c'est la spécificité de substrat.",
            },
            {
              q: "Quel test révèle la disparition de l'amidon dans un tube ?",
              options: ["Un précipité rouge brique à la liqueur de Fehling", "Un dégagement de dioxygène", "L'eau iodée qui reste jaune-orangé", "Un trouble de l'eau de chaux"],
              answer: 2,
              why: "L'eau iodée colore l'amidon en bleu-noir ; si elle reste jaune-orangé, l'amidon est absent. La liqueur de Fehling révèle, elle, les sucres réducteurs produits.",
            },
            {
              q: "Selon le modèle de l'ajustement induit (Koshland, 1958) :",
              options: ["le substrat est entièrement détruit avant même de se fixer", "le site actif se déforme un peu au contact du substrat", "l'enzyme change de séquence d'acides aminés pour chaque substrat", "n'importe quelle molécule peut se fixer sur le site actif"],
              answer: 1,
              why: "Le site actif est un peu déformable : la fixation du substrat ajuste sa forme, ce qui complète le modèle clé-serrure de Fischer.",
            },
          ],
          trap: "Croire que l'enzyme est consommée ou fait partie des produits : une enzyme n'apparaît ni dans les réactifs consommés ni dans les produits de l'équation bilan, elle est libérée intacte. Autre confusion fréquente : spécificité de substrat (quelle molécule) et spécificité d'action (quelle réaction).",
          method: "Pour interpréter une série de tubes, commencez toujours par le témoin sans enzyme, puis comparez chaque tube à ce témoin en ne faisant varier qu'un facteur à la fois ; rédigez « je constate que..., or..., donc... » pour chaque tube avant de conclure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'activite-enzymatique',
          title: 'Ce qui fait varier l’activité d’une enzyme',
          minutes: 35,
          objectives: [
            "Définir et déterminer la vitesse initiale d'une réaction enzymatique à partir d'une courbe ou d'un tableau de mesures.",
            "Expliquer l'effet de la concentration en substrat sur la vitesse initiale par la saturation des sites actifs.",
            "Expliquer l'influence de la température et du pH sur l'activité d'une enzyme, en distinguant inactivation réversible et dénaturation irréversible.",
            "Relier une modification de la séquence d'une enzyme ou de son environnement à une variation de son activité et du phénotype.",
          ],
          course: [
            {
              heading: "Mesurer l'activité : la vitesse initiale",
              paragraphs: [
                "L'activité d'une enzyme se mesure par la vitesse de la réaction qu'elle catalyse : la quantité de produit formé, ou de substrat consommé, par unité de temps. On suit par exemple au cours du temps l'apparition d'un produit coloré au spectrophotomètre, ou la concentration en dioxygène dans une enceinte d'ExAO.",
                "La courbe obtenue est d'abord une droite, puis elle s'infléchit et atteint un plateau : le substrat s'épuise peu à peu. Pour comparer des expériences, on utilise donc la vitesse initiale (Vi), mesurée au tout début de la réaction, quand la concentration en substrat est encore celle de départ. Elle correspond à la pente de la tangente à la courbe à l'origine et s'exprime par exemple en mmol·L⁻¹·min⁻¹.",
                "Pour étudier l'effet d'un facteur (concentration, température, pH), on ne fait varier que ce facteur et l'on garde tous les autres identiques. Un témoin sans enzyme permet de vérifier que la réaction spontanée est négligeable.",
              ],
              box: { label: "Définition", text: "La vitesse initiale Vi d'une réaction enzymatique est la quantité de produit formé par unité de temps au début de la réaction. C'est la pente de la partie rectiligne de la courbe à l'origine." },
            },
            {
              heading: "Concentration en substrat et saturation",
              paragraphs: [
                "Pour une même quantité d'enzyme, la vitesse initiale augmente avec la concentration en substrat, d'abord presque proportionnellement, puis de moins en moins, jusqu'à atteindre une valeur maximale, la vitesse maximale (Vmax), qui n'augmente plus même si l'on ajoute du substrat.",
                "Explication : à faible concentration, de nombreux sites actifs sont libres et chaque molécule de substrat supplémentaire augmente le nombre de complexes enzyme-substrat formés. À forte concentration, tous les sites actifs sont occupés en permanence : l'enzyme est saturée, chaque molécule d'enzyme travaille à son rythme maximal. On peut comparer les enzymes aux caisses d'un supermarché : quand peu de clients arrivent, plus de clients donnent plus de passages ; quand toutes les caisses sont occupées, le débit ne progresse plus, sauf si l'on ouvre de nouvelles caisses.",
                "De même, lorsque le substrat est en excès, la vitesse initiale est proportionnelle à la quantité d'enzyme : doubler la concentration en enzyme double la vitesse maximale.",
              ],
              box: { label: "Propriété", text: "Vi augmente avec la concentration en substrat jusqu'à un plateau, Vmax, atteint lorsque tous les sites actifs sont occupés (saturation). Vmax est proportionnelle à la quantité d'enzyme." },
            },
            {
              heading: "La température : activation puis dénaturation",
              paragraphs: [
                "À basse température, l'agitation des molécules est faible : les rencontres entre enzyme et substrat sont rares et l'activité est faible. Cet effet est réversible : une enzyme refroidie retrouve son activité quand on la réchauffe, ce qui explique que le froid conserve les aliments sans détruire leurs enzymes.",
                "Quand la température s'élève, l'activité augmente jusqu'à une température optimale, voisine de 37 à 40 °C pour la plupart des enzymes humaines. Au-delà, l'activité chute rapidement : l'agitation rompt les liaisons faibles qui maintiennent la structure tridimensionnelle, le site actif se déforme et ne reconnaît plus le substrat. Cette dénaturation est le plus souvent irréversible : une enzyme chauffée à 80 °C puis ramenée à 37 °C reste inactive.",
                "L'optimum dépend de l'enzyme et de l'espèce. La Taq polymérase, une ADN polymérase de la bactérie Thermus aquaticus qui vit dans des sources chaudes, fonctionne vers 72 °C et résiste à des passages au-dessus de 90 °C : c'est pourquoi on l'utilise pour copier l'ADN par PCR.",
              ],
              box: { label: "À retenir", text: "Froid : activité faible mais réversible. Optimum : activité maximale. Chaleur excessive : dénaturation de la structure tridimensionnelle, perte d'activité irréversible." },
            },
            {
              heading: "Le pH et les autres facteurs du milieu",
              paragraphs: [
                "Chaque enzyme possède aussi un pH optimal, en accord avec le milieu où elle agit : la pepsine de l'estomac est active vers pH 2, l'amylase salivaire vers pH 7, la trypsine de l'intestin grêle vers pH 8. Loin de l'optimum, les charges électriques de certains acides aminés du site actif changent : la fixation du substrat et la catalyse deviennent moins efficaces. Un pH extrême peut dénaturer l'enzyme. L'amylase salivaire, par exemple, cesse d'agir dans le contenu acide de l'estomac.",
                "D'autres substances modifient l'activité. Certains ions sont des cofacteurs indispensables ; l'amylase salivaire est ainsi activée par les ions chlorure. À l'inverse, des inhibiteurs se fixent sur l'enzyme et bloquent son action : de nombreux médicaments agissent ainsi. L'aspirine, par exemple, bloque des enzymes appelées cyclo-oxygénases, qui produisent des molécules intervenant dans l'inflammation et la douleur.",
              ],
            },
            {
              heading: "Quand la séquence change : mutation et activité",
              paragraphs: [
                "Une mutation du gène qui code une enzyme peut remplacer un acide aminé du site actif ou modifier le repliement de la chaîne. L'enzyme peut alors devenir inactive, moins active, ou plus sensible aux conditions du milieu. Le chat siamois en donne un bel exemple : il porte un allèle du gène de la tyrosinase qui code une enzyme thermosensible, active seulement en dessous d'une certaine température.",
                "Sur le corps, plus chaud, la tyrosinase est inactive et le pelage reste clair ; aux extrémités, plus froides (oreilles, museau, pattes, queue), elle fonctionne et produit de la mélanine : ces zones sont foncées. Le phénotype résulte donc à la fois du génotype et de l'environnement, ici la température, par l'intermédiaire de l'activité d'une enzyme.",
              ],
              box: { label: "À retenir", text: "L'activité d'une enzyme dépend de sa structure (donc de son gène) et des conditions du milieu (température, pH, ions, inhibiteurs). Génotype et environnement agissent ensemble sur le phénotype." },
            },
          ],
          keyPoints: [
            "La vitesse initiale Vi est la pente à l'origine de la courbe de formation du produit.",
            "Vi augmente avec la concentration en substrat jusqu'à Vmax : tous les sites actifs sont alors occupés (saturation).",
            "Chaque enzyme a une température optimale et un pH optimal.",
            "Le froid ralentit l'enzyme de façon réversible ; la chaleur excessive la dénature de façon irréversible.",
            "Un pH éloigné de l'optimum modifie les charges du site actif et réduit l'activité.",
            "Une mutation peut modifier l'activité d'une enzyme, ou sa sensibilité au milieu (tyrosinase thermosensible du chat siamois).",
          ],
          example: {
            statement: "On mesure la vitesse initiale d'une enzyme digestive humaine à différentes températures (données fictives, en unités arbitraires) : 0 °C : 2 ; 20 °C : 18 ; 37 °C : 40 ; 50 °C : 22 ; 70 °C : 0. On refroidit ensuite à 37 °C le tube placé à 0 °C : Vi = 40. On refroidit aussi à 37 °C le tube placé à 70 °C : Vi = 0. Déterminez la température optimale et interprétez l'ensemble des résultats.",
            solution: [
              "La vitesse initiale est maximale (40) à 37 °C : c'est la température optimale de cette enzyme parmi les valeurs testées, ce qui correspond à la température du corps humain.",
              "De 0 à 37 °C, Vi augmente : l'agitation des molécules croît et les rencontres entre enzyme et substrat deviennent plus fréquentes.",
              "Au-delà de 37 °C, Vi diminue puis s'annule à 70 °C : la structure tridimensionnelle de l'enzyme est altérée, le site actif n'est plus complémentaire du substrat.",
              "Le tube refroidi à 0 °C retrouve une Vi de 40 à 37 °C : à basse température, l'enzyme était seulement ralentie, l'effet était réversible.",
              "Le tube chauffé à 70 °C reste inactif à 37 °C : l'enzyme a été dénaturée de façon irréversible.",
              "Conclusion : la température optimale est de 37 °C ; le froid ralentit l'enzyme de façon réversible, la chaleur excessive la dénature de façon irréversible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On suit la formation d'un produit P par une enzyme (données fictives). Concentration en P (mmol/L) : t = 0 min : 0 ; t = 1 min : 0,6 ; t = 2 min : 1,2 ; t = 3 min : 1,8 ; t = 4 min : 2,2 ; t = 5 min : 2,4 ; t = 6 min : 2,5. (1) Déterminez la vitesse initiale. (2) Pourquoi la vitesse diminue-t-elle ensuite ?",
              hint: "Cherchez la partie où la concentration augmente de la même quantité chaque minute : c'est la partie rectiligne de la courbe.",
              solution: [
                "(1) De t = 0 à t = 3 min, la concentration augmente de 0,6 mmol/L chaque minute : la courbe est rectiligne sur cet intervalle.",
                "Vi = 1,8 ÷ 3 = 0,6 mmol·L⁻¹·min⁻¹.",
                "(2) Après 3 min, les augmentations deviennent plus faibles (0,4 puis 0,2 puis 0,1 mmol/L par minute) : le substrat est consommé, sa concentration diminue, donc les complexes enzyme-substrat se forment moins souvent.",
                "Résultat : Vi = 0,6 mmol·L⁻¹·min⁻¹ ; la vitesse diminue ensuite parce que le substrat s'épuise, et non parce que l'enzyme est consommée.",
              ],
            },
            {
              level: 2,
              statement: "Pour une concentration en enzyme fixée, on mesure la vitesse initiale en fonction de la concentration en substrat (données fictives). [S] en mmol/L : 0,5 ; 1 ; 2 ; 4 ; 8 ; 16. Vi en µmol·L⁻¹·min⁻¹ : 1,0 ; 1,8 ; 2,9 ; 3,8 ; 4,0 ; 4,0. (1) Décrivez l'évolution de Vi et donnez la valeur de Vmax. (2) Expliquez l'existence du plateau. (3) Prévoyez la valeur de Vmax si l'on double la concentration en enzyme.",
              hint: "Au plateau, ajouter du substrat ne sert plus à rien : que se passe-t-il au niveau des sites actifs ?",
              solution: [
                "(1) Vi augmente avec [S], fortement d'abord (de 1,0 à 2,9 quand [S] passe de 0,5 à 2 mmol/L), puis de moins en moins, et se stabilise à 4,0 µmol·L⁻¹·min⁻¹ à partir de 8 mmol/L. Vmax = 4,0 µmol·L⁻¹·min⁻¹.",
                "(2) À forte concentration en substrat, tous les sites actifs sont occupés en permanence : l'enzyme est saturée. Chaque molécule d'enzyme fonctionne à sa vitesse maximale, et ajouter du substrat ne crée pas de complexes supplémentaires.",
                "(3) Avec deux fois plus d'enzyme, il y a deux fois plus de sites actifs. À saturation, la vitesse double : Vmax = 2 × 4,0 = 8,0 µmol·L⁻¹·min⁻¹.",
                "Résultat : Vmax = 4,0 µmol·L⁻¹·min⁻¹, due à la saturation des sites actifs ; elle passerait à 8,0 µmol·L⁻¹·min⁻¹ avec une concentration en enzyme doublée.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données simplifiées). Le lapin himalayen a un pelage blanc, sauf aux extrémités (oreilles, museau, pattes, queue), qui sont noires. Document 1 : on mesure l'activité de la tyrosinase (enzyme de la synthèse de la mélanine) extraite de lapins himalayens à différentes températures : 100 % à 25 °C, 60 % à 30 °C, 10 % à 34 °C, 0 % à 37 °C (données fictives) ; chez un lapin à pelage entièrement noir, l'activité varie peu entre 25 et 37 °C. Document 2 : la température de la peau est d'environ 37 °C sur le corps et de 30 °C ou moins aux extrémités. Document 3 : on rase une zone du dos d'un lapin himalayen et on y applique du froid pendant la repousse : les poils repoussent noirs. Expliquez la répartition des couleurs du pelage de ce lapin.",
              hint: "Mettez en relation l'activité de l'enzyme (document 1) avec la température de chaque partie du corps (document 2), puis utilisez le document 3 comme vérification expérimentale.",
              solution: [
                "Document 1 : la tyrosinase du lapin himalayen est thermosensible. Son activité est maximale à 25 °C et nulle à 37 °C, alors que celle du lapin noir est peu sensible à la température. Elle est donc codée par un allèle différent, dont la séquence rend l'enzyme instable à la chaleur.",
                "Document 2 : sur le corps, à 37 °C, l'enzyme est inactive : la mélanine n'est pas produite et les poils sont blancs.",
                "Aux extrémités, à 30 °C ou moins, l'enzyme conserve au moins 60 % de son activité : la mélanine est produite et les poils sont noirs.",
                "Document 3 : en refroidissant une zone du dos, on rend la tyrosinase active à cet endroit, et les poils repoussent noirs. C'est donc bien la température locale qui détermine la couleur, et non la région du corps en elle-même.",
                "Conclusion : le lapin himalayen possède dans toutes ses cellules le même allèle codant une tyrosinase thermosensible. Le phénotype (pelage blanc à extrémités noires) résulte de l'interaction entre ce génotype et l'environnement (la température de la peau), qui contrôle l'activité de l'enzyme.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux idées reçues sur l'activité des enzymes.",
            statements: [
              { text: "Plus il y a de substrat, plus la vitesse initiale augmente, sans limite.", true: false, why: "La vitesse atteint un plateau, Vmax, lorsque tous les sites actifs sont occupés." },
              { text: "Une enzyme placée à 0 °C est détruite.", true: false, why: "Le froid ralentit l'enzyme de façon réversible ; elle retrouve son activité une fois réchauffée." },
              { text: "Une enzyme chauffée à 80 °C puis refroidie reste le plus souvent inactive.", true: true, why: "La chaleur excessive dénature la structure tridimensionnelle : la perte d'activité est irréversible." },
              { text: "Toutes les enzymes ont un pH optimal égal à 7.", true: false, why: "La pepsine de l'estomac est active vers pH 2 et la trypsine de l'intestin vers pH 8." },
              { text: "Doubler la quantité d'enzyme double la vitesse maximale.", true: true, why: "Il y a deux fois plus de sites actifs : à saturation, la vitesse double." },
              { text: "La vitesse diminue au cours d'une réaction parce que l'enzyme s'use.", true: false, why: "Elle diminue parce que le substrat s'épuise ; l'enzyme, elle, n'est pas consommée." },
              { text: "Une mutation peut rendre une enzyme sensible à la température.", true: true, why: "C'est le cas de la tyrosinase thermosensible du chat siamois ou du lapin himalayen." },
            ],
          },
          quiz: [
            {
              q: "Comment détermine-t-on la vitesse initiale d'une réaction enzymatique ?",
              options: ["Par la valeur atteinte au plateau final de la courbe", "Par la pente de la courbe à l'origine", "Par la durée totale de la réaction", "Par la quantité d'enzyme ajoutée"],
              answer: 1,
              why: "La vitesse initiale est la pente de la partie rectiligne de la courbe au début de la réaction, quand le substrat n'est pas encore consommé.",
            },
            {
              q: "Pourquoi la vitesse initiale atteint-elle un plateau quand la concentration en substrat augmente ?",
              options: ["L'enzyme est dénaturée par l'excès de substrat", "Le produit détruit le substrat", "Tous les sites actifs sont occupés", "Le pH devient trop acide"],
              answer: 2,
              why: "À forte concentration en substrat, l'enzyme est saturée : chaque site actif est occupé en permanence.",
            },
            {
              q: "Une enzyme humaine est placée 10 minutes à 90 °C puis ramenée à 37 °C. Son activité :",
              options: ["reste nulle", "redevient normale", "double", "devient maximale à 90 °C"],
              answer: 0,
              why: "À 90 °C, la structure tridimensionnelle est détruite : la dénaturation est irréversible.",
            },
            {
              q: "La pepsine agit dans l'estomac. Son pH optimal est voisin de :",
              options: ["8", "7", "11", "2"],
              answer: 3,
              why: "Le suc gastrique est très acide ; la pepsine, adaptée à ce milieu, a un pH optimal voisin de 2.",
            },
            {
              q: "Pourquoi les extrémités d'un chat siamois sont-elles foncées ?",
              options: ["Leurs cellules contiennent un gène supplémentaire", "Elles sont plus froides", "Elles reçoivent davantage de lumière du soleil", "Elles sont formées de cellules ayant subi une mutation"],
              answer: 1,
              why: "Sa tyrosinase thermosensible est inactive à la température du corps mais fonctionne dans les extrémités, plus froides, où la mélanine est produite.",
            },
          ],
          trap: "Confondre l'effet du froid et celui de la chaleur : le froid ralentit l'enzyme de façon réversible, alors que la chaleur excessive la dénature de façon irréversible. Autre erreur : expliquer la baisse de vitesse en fin de réaction par une « usure » de l'enzyme, alors que c'est le substrat qui s'épuise.",
          method: "Devant un graphique d'activité enzymatique, procédez en trois temps : décrivez la courbe avec des valeurs chiffrées (optimum, plateau, seuils), expliquez chaque phase au niveau moléculaire (rencontres, saturation, dénaturation), puis concluez sur la propriété de l'enzyme mise en évidence.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA STRUCTURE DU GLOBE TERRESTRE                                        */
    /* ==================================================================== */
    {
      id: 'structure-globe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ondes-sismiques',
          title: 'Les ondes sismiques révèlent l’intérieur de la Terre',
          minutes: 30,
          objectives: [
            "Distinguer les ondes sismiques P et S et relier leur vitesse de propagation à l'état et aux propriétés des matériaux traversés.",
            "Calculer une distance ou une profondeur à partir de temps de propagation et de vitesses d'ondes sismiques.",
            "Expliquer comment l'étude des ondes sismiques a permis de mettre en évidence les discontinuités de Mohorovičić, de Gutenberg et de Lehmann.",
            "Interpréter la zone d'ombre et l'absence d'ondes S directes au-delà de 105° comme les signatures d'un noyau externe liquide.",
          ],
          course: [
            {
              heading: "Séismes et ondes sismiques",
              paragraphs: [
                "Un séisme est la rupture brutale de roches en profondeur, le long d'une faille. Le point de départ de la rupture est le foyer (ou hypocentre) ; le point de la surface situé à sa verticale est l'épicentre. L'énergie libérée se propage dans toutes les directions sous forme d'ondes sismiques, enregistrées par des sismomètres sous forme de sismogrammes.",
                "Les ondes P (premières) sont des ondes de compression-dilatation : les particules vibrent dans la direction de propagation, comme les spires d'un ressort que l'on pousse. Elles traversent les solides, les liquides et les gaz, et sont les plus rapides (environ 6 km/s dans la croûte). Les ondes S (secondes) sont des ondes de cisaillement : les particules vibrent perpendiculairement à la direction de propagation, comme une corde que l'on agite. Elles ne se propagent que dans les solides et sont plus lentes (environ 3,5 km/s dans la croûte).",
                "Les ondes de surface arrivent en dernier ; elles ne pénètrent pas en profondeur mais sont les plus destructrices. Pour sonder l'intérieur du globe, on utilise les ondes P et S, dites ondes de volume.",
              ],
              box: { label: "Définition", text: "Ondes P : ondes de compression, les plus rapides, qui traversent solides et liquides. Ondes S : ondes de cisaillement, plus lentes, qui ne traversent que les solides." },
            },
            {
              heading: "La vitesse des ondes renseigne sur les matériaux",
              paragraphs: [
                "La vitesse d'une onde sismique dépend du matériau traversé : de sa rigidité, de sa densité et de son état (solide ou liquide). Elle augmente en général avec la profondeur, car les roches sont de plus en plus comprimées. Lorsqu'une onde atteint la surface de séparation entre deux milieux où sa vitesse est différente, une partie se réfléchit et une autre est réfractée, c'est-à-dire déviée, comme la lumière qui passe de l'air à l'eau. Une variation brutale de vitesse à une certaine profondeur signale donc une discontinuité.",
                "En relevant les temps d'arrivée des ondes dans des centaines de stations situées à des distances différentes de l'épicentre, on construit des courbes temps-distance (hodochrones), puis un modèle de vitesse en fonction de la profondeur. Le modèle de référence PREM, publié par Adam Dziewonski et Don Anderson en 1981, résume ainsi la structure du globe.",
                "Comme les ondes P sont plus rapides que les ondes S, le décalage entre leurs arrivées augmente avec la distance : il permet de calculer à quelle distance s'est produit un séisme. Si une station enregistre un retard Δt des ondes S sur les ondes P, la distance d au foyer vérifie Δt = d/vS - d/vP.",
              ],
              box: { label: "Formule", text: "Vitesse : v = d ÷ t. Distance au foyer à partir du retard Δt des ondes S sur les ondes P : d = Δt × vP × vS ÷ (vP - vS). Profondeur d'une surface réfléchissante atteinte à la verticale : h = v × t ÷ 2 (aller et retour)." },
            },
            {
              heading: "Trois grandes discontinuités",
              paragraphs: [
                "En 1909, le sismologue croate Andrija Mohorovičić étudie un séisme survenu près de Zagreb. Il observe que les stations éloignées enregistrent deux arrivées d'ondes P : l'une directe, à travers la croûte, l'autre qui a été réfractée sur un milieu plus profond où les ondes vont plus vite, et qui arrive la première au-delà d'une certaine distance. Il en déduit une limite où la vitesse des ondes P passe d'environ 6 à 8 km/s : c'est le Moho, limite entre la croûte et le manteau, situé vers 30 km sous les continents en moyenne (jusqu'à 70 km sous les grandes chaînes) et vers 7 km sous le plancher océanique.",
                "Beno Gutenberg localise ensuite, au début du XXe siècle, la limite entre le manteau et le noyau vers 2 900 km de profondeur. À cette discontinuité, la vitesse des ondes P chute brutalement (d'environ 13,7 à 8 km/s) et les ondes S disparaissent.",
                "En 1936, la sismologue danoise Inge Lehmann remarque de faibles ondes P qui arrivent dans une région où l'on n'en attendait pas. Elle les explique par la réflexion des ondes sur une limite interne au noyau : le noyau comprend un noyau externe et une graine (noyau interne), séparés par la discontinuité de Lehmann, vers 5 150 km de profondeur. Le centre de la Terre est à 6 371 km.",
              ],
              box: { label: "Repère", text: "Moho (Mohorovičić, 1909) : croûte / manteau, vers 30 km sous les continents et 7 km sous les océans. Gutenberg : manteau / noyau, 2 900 km. Lehmann (1936) : noyau externe / graine, 5 150 km." },
            },
            {
              heading: "La zone d'ombre et le noyau externe liquide",
              paragraphs: [
                "Repérons la position d'une station par l'angle formé, au centre de la Terre, entre l'épicentre et la station (la distance angulaire). Jusqu'à environ 105°, les stations reçoivent des ondes P et S directes. Entre environ 105° et 142°, elles ne reçoivent pas d'ondes P directes : c'est la zone d'ombre. Au-delà de 142°, les ondes P réapparaissent, mais aucune onde S directe n'est enregistrée au-delà de 105°.",
                "Explication : les ondes P qui atteignent le noyau y ralentissent brusquement et sont fortement réfractées, déviées vers l'intérieur ; elles ressortent donc plus loin, au-delà de 142°, ce qui laisse une bande de surface sans ondes P directes. Les ondes S, elles, ne traversent pas le noyau externe : comme elles ne se propagent pas dans les liquides, le noyau externe est liquide. Les faibles ondes P observées par Inge Lehmann dans la zone d'ombre sont celles réfléchies par la graine, qui est solide.",
              ],
              box: { label: "À retenir", text: "Zone d'ombre des ondes P entre 105° et 142° : déviation des ondes à l'entrée du noyau. Absence d'ondes S au-delà de 105° : le noyau externe est liquide. Ondes P faibles dans la zone d'ombre : présence d'une graine solide." },
            },
          ],
          keyPoints: [
            "Ondes P : compression, les plus rapides, traversent solides et liquides. Ondes S : cisaillement, plus lentes, uniquement dans les solides.",
            "Une variation brutale de la vitesse des ondes signale une discontinuité entre deux milieux différents.",
            "Moho (1909) : croûte / manteau ; Gutenberg : manteau / noyau à 2 900 km ; Lehmann (1936) : noyau externe / graine à 5 150 km.",
            "Zone d'ombre des ondes P entre 105° et 142° ; pas d'ondes S directes au-delà de 105° : le noyau externe est liquide.",
            "Distance au foyer : d = Δt × vP × vS ÷ (vP - vS) ; profondeur par réflexion verticale : h = v × t ÷ 2.",
          ],
          example: {
            statement: "Une station enregistre les ondes P d'un séisme proche, puis les ondes S 12 secondes plus tard. Dans la croûte, vP = 6,0 km/s et vS = 3,5 km/s. Calculez la distance entre la station et le foyer.",
            solution: [
              "Les deux ondes parcourent la même distance d. Durées de trajet : tP = d ÷ vP et tS = d ÷ vS. Le retard vaut Δt = tS - tP = d ÷ vS - d ÷ vP.",
              "On factorise : Δt = d × (vP - vS) ÷ (vP × vS), donc d = Δt × vP × vS ÷ (vP - vS).",
              "Application numérique : vP × vS = 6,0 × 3,5 = 21 ; vP - vS = 6,0 - 3,5 = 2,5 ; 21 ÷ 2,5 = 8,4 km/s.",
              "d = 12 × 8,4 = 100,8 km.",
              "Vérification : tP = 100,8 ÷ 6,0 = 16,8 s et tS = 100,8 ÷ 3,5 = 28,8 s ; le retard est bien de 28,8 - 16,8 = 12 s.",
              "Réponse : le foyer est à environ 101 km de la station.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une station sismique est située à 240 km du foyer d'un séisme. Dans la croûte, vP = 6,0 km/s et vS = 3,5 km/s. (1) Calculez le temps de trajet des ondes P et celui des ondes S. (2) Déduisez-en le retard des ondes S sur les ondes P.",
              hint: "Utilisez t = d ÷ v pour chaque onde, puis faites la différence.",
              solution: [
                "(1) Ondes P : tP = 240 ÷ 6,0 = 40 s.",
                "Ondes S : tS = 240 ÷ 3,5 ≈ 68,6 s.",
                "(2) Retard : Δt = 68,6 - 40 = 28,6 s.",
                "Vérification avec la formule : d = 28,6 × 8,4 ≈ 240 km, ce qui correspond bien à la distance donnée.",
                "Résultat : tP = 40 s, tS ≈ 68,6 s, retard d'environ 28,6 s.",
              ],
            },
            {
              level: 2,
              statement: "Pour mesurer l'épaisseur de la croûte, on provoque une petite vibration en surface et l'on enregistre l'écho des ondes P réfléchies sur le Moho, à la verticale. (1) Sous un continent, l'écho revient au bout de 11,0 s ; la vitesse moyenne des ondes P dans la croûte vaut 6,2 km/s. Calculez la profondeur du Moho. (2) Sous un océan, l'écho réfléchi sur le Moho revient 2,0 s après celui réfléchi sur le plancher océanique ; dans la croûte océanique, vP = 6,5 km/s. Calculez l'épaisseur de la croûte océanique. (3) Comparez.",
              hint: "L'onde fait l'aller et le retour : la distance parcourue vaut deux fois la profondeur.",
              solution: [
                "(1) Distance parcourue : 6,2 × 11,0 = 68,2 km, soit un aller et un retour. Profondeur du Moho : h = 68,2 ÷ 2 = 34,1 km.",
                "(2) Le temps supplémentaire passé dans la croûte océanique (aller et retour) est de 2,0 s. Épaisseur : e = 6,5 × 2,0 ÷ 2 = 6,5 km.",
                "(3) La croûte continentale (environ 34 km ici) est environ cinq fois plus épaisse que la croûte océanique (6,5 km).",
                "Résultat : Moho à 34,1 km sous le continent ; croûte océanique de 6,5 km d'épaisseur ; ces valeurs sont conformes au modèle (environ 30 km et 7 km en moyenne).",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Un fort séisme est enregistré par trois stations. Station A, à 40° de l'épicentre : ondes P et S directes. Station B, à 120° : ni onde P directe, ni onde S, mais de faibles ondes P. Station C, à 160° : ondes P, aucune onde S. Rappel : les ondes P se propagent dans les solides et les liquides, les ondes S dans les solides seulement ; les ondes sont déviées lorsqu'elles changent de milieu. Expliquez ces enregistrements et montrez ce qu'ils révèlent de la structure du noyau.",
              hint: "Traitez séparément les ondes S (absence au-delà de 105°) et les ondes P (zone d'ombre, puis faibles ondes P dans cette zone).",
              solution: [
                "Station A (40°) : les ondes ont traversé uniquement le manteau, solide ; les ondes P et S y arrivent normalement.",
                "Ondes S : elles sont absentes en B et en C. Pour atteindre ces stations, elles auraient dû traverser le noyau. Puisque les ondes S ne se propagent pas dans les liquides, la partie externe du noyau est liquide.",
                "Ondes P en B (120°) : la station est dans la zone d'ombre (105° à 142°). Les ondes P qui entrent dans le noyau y ralentissent et sont déviées ; elles ressortent au-delà de 142°, d'où leur présence en C (160°).",
                "Les faibles ondes P reçues en B ne peuvent pas être des ondes directes : elles ont été réfléchies par une limite située à l'intérieur du noyau. C'est l'observation qui a conduit Inge Lehmann, en 1936, à proposer l'existence d'une graine.",
                "Conclusion : le noyau comprend un noyau externe liquide, qui arrête les ondes S et dévie les ondes P (zone d'ombre), et une graine dont la limite réfléchit des ondes P. Les données sismiques ultérieures ont montré que cette graine est solide.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la découverte de l'intérieur du globe.",
            items: [
              "Mohorovičić découvre la discontinuité entre croûte et manteau (1909)",
              "Gutenberg localise la limite entre manteau et noyau vers 2 900 km",
              "Lehmann met en évidence la graine à l'intérieur du noyau (1936)",
              "Dziewonski et Anderson publient le modèle de référence PREM (1981)",
            ],
          },
          quiz: [
            {
              q: "Quelles ondes sismiques ne traversent pas les liquides ?",
              options: ["Les ondes P", "Les ondes S", "Toutes les ondes de volume", "Aucune onde sismique"],
              answer: 1,
              why: "Les ondes S sont des ondes de cisaillement : un liquide ne transmet pas le cisaillement, elles s'y arrêtent.",
            },
            {
              q: "Que marque la discontinuité de Mohorovičić ?",
              options: ["La limite entre noyau externe et graine", "La limite entre manteau et noyau", "La limite entre croûte et manteau", "La surface de l'asthénosphère"],
              answer: 2,
              why: "Au Moho, la vitesse des ondes P passe d'environ 6 à 8 km/s : on passe de la croûte au manteau.",
            },
            {
              q: "À quelle profondeur se trouve la limite entre le manteau et le noyau ?",
              options: ["Environ 2 900 km", "Environ 100 km", "Environ 5 150 km", "Environ 6 371 km"],
              answer: 0,
              why: "La discontinuité de Gutenberg est à environ 2 900 km ; 5 150 km correspond à la limite de la graine et 6 371 km au centre.",
            },
            {
              q: "Une station sismique située à 130° de l'épicentre n'enregistre pas d'ondes P directes. Pourquoi ?",
              options: ["Les ondes P y arrivent trop tard pour être mesurées", "Les ondes P sont absorbées par la croûte océanique", "Elle est trop proche de l'épicentre", "Les ondes P sont déviées en entrant dans le noyau"],
              answer: 3,
              why: "En entrant dans le noyau, les ondes P ralentissent et sont réfractées : aucune onde directe n'atteint la surface entre 105° et 142°, la zone d'ombre.",
            },
            {
              q: "Une station enregistre un retard de 5 s des ondes S sur les ondes P, avec vP = 6,0 km/s et vS = 3,5 km/s. Le foyer est à :",
              options: ["17,5 km", "42 km", "30 km", "84 km"],
              answer: 1,
              why: "d = Δt × vP × vS ÷ (vP - vS) = 5 × 21 ÷ 2,5 = 5 × 8,4 = 42 km.",
            },
          ],
          trap: "Confondre zone d'ombre et noyau liquide : la zone d'ombre des ondes P s'explique par leur déviation à l'entrée du noyau, alors que la preuve de l'état liquide du noyau externe est l'absence d'ondes S au-delà de 105°. Autre piège : oublier de diviser par 2 le trajet d'une onde réfléchie (aller et retour).",
          method: "Pour un calcul sismique, écrivez d'abord la relation littérale (t = d ÷ v, Δt = d/vS - d/vP), isolez l'inconnue, puis faites l'application numérique avec les unités ; vérifiez enfin votre résultat en recalculant les temps de trajet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'enveloppes-terrestres',
          title: 'Croûtes, manteau, noyau : un modèle du globe',
          minutes: 30,
          objectives: [
            "Décrire le modèle du globe en enveloppes concentriques (croûtes, manteau, noyau) avec leurs profondeurs, leur état physique et leur composition.",
            "Comparer la croûte continentale et la croûte océanique (roches, minéraux, épaisseur, densité, âge).",
            "Identifier les roches principales (granite, basalte, gabbro, péridotite) à partir de leurs minéraux et de leur texture.",
            "Exploiter la densité moyenne de la Terre pour justifier l'existence d'un noyau très dense.",
          ],
          course: [
            {
              heading: "Un modèle en enveloppes concentriques",
              paragraphs: [
                "Les données sismiques, complétées par l'étude des roches et des météorites, conduisent à un modèle du globe formé d'enveloppes concentriques séparées par des discontinuités. De la surface vers le centre : la croûte, le manteau, le noyau externe et la graine (ou noyau interne). Le rayon moyen de la Terre est de 6 371 km.",
                "La croûte est très mince : environ 7 km sous les océans, 30 km en moyenne sous les continents, jusqu'à 70 km sous les grandes chaînes de montagnes. Le manteau s'étend du Moho jusqu'à 2 900 km de profondeur et représente plus de 80 % du volume de la Terre. Le noyau externe va de 2 900 à 5 150 km, la graine de 5 150 km au centre.",
              ],
              box: { label: "Repère", text: "Croûte : 0 à 7 km (océans) ou 0 à 30 km en moyenne (continents). Manteau : jusqu'à 2 900 km, solide. Noyau externe : 2 900 à 5 150 km, liquide. Graine : 5 150 à 6 371 km, solide." },
            },
            {
              heading: "Deux croûtes très différentes",
              paragraphs: [
                "La croûte continentale est formée en profondeur surtout de granitoïdes, comme le granite. Le granite contient du quartz, des feldspaths et des micas ; sa texture est grenue : tous les minéraux sont des cristaux visibles à l'œil nu, signe d'un refroidissement lent du magma en profondeur. En surface s'y ajoutent des roches sédimentaires et métamorphiques. Sa densité est d'environ 2,7. Elle peut être très ancienne : certaines de ses roches dépassent 4 milliards d'années.",
                "La croûte océanique est formée de basalte dans sa partie supérieure et de gabbro en dessous. Ces deux roches ont la même composition chimique et contiennent les mêmes minéraux principaux (pyroxène et feldspath plagioclase, parfois de l'olivine), mais pas la même texture. Le basalte a une texture microlitique : un verre (partie non cristallisée), de petits cristaux en bâtonnets (microlites) et quelques grands cristaux, signe d'un refroidissement rapide en surface. Le gabbro, refroidi lentement en profondeur, a une texture grenue.",
                "La croûte océanique est plus dense (environ 2,9 à 3,0) et beaucoup plus jeune que la croûte continentale : les plus anciens fonds océaniques en place ont environ 180 millions d'années.",
              ],
              box: { label: "À retenir", text: "Croûte continentale : granite (quartz, feldspaths, micas), épaisse, peu dense (2,7), parfois très ancienne. Croûte océanique : basalte et gabbro (pyroxène, plagioclase), mince, plus dense (2,9 à 3,0), jeune." },
            },
            {
              heading: "Le manteau, une enveloppe solide de péridotite",
              paragraphs: [
                "Le manteau est formé de péridotite, une roche grenue composée surtout d'olivine (un minéral vert) et de pyroxènes. Sa densité est d'environ 3,3 sous le Moho et augmente avec la profondeur, sous l'effet de la pression qui compacte la roche et transforme ses minéraux en minéraux plus denses.",
                "On connaît la péridotite grâce à des fragments remontés par certains magmas (des enclaves dans des basaltes) et grâce aux ophiolites, des morceaux de lithosphère océanique charriés sur les continents, comme dans le massif du Chenaillet dans les Alpes ou en Oman. Le manteau est solide : les ondes S le traversent. Il peut cependant se déformer très lentement, comme on le verra avec l'asthénosphère.",
              ],
            },
            {
              heading: "Le noyau, une boule de fer",
              paragraphs: [
                "Connaissant la masse et le volume de la Terre, on calcule sa densité moyenne : environ 5,5. Or les roches de la croûte et du haut du manteau ont une densité de 2,7 à 3,3. L'intérieur du globe contient donc des matériaux beaucoup plus denses : c'est le noyau, dont la densité est comprise entre environ 10 et 13.",
                "Le noyau est formé surtout de fer, avec du nickel et une petite proportion d'éléments plus légers. Cette composition est cohérente avec la vitesse des ondes sismiques qui le traversent et avec celle des météorites de fer, considérées comme des fragments de noyaux d'astres différenciés. Le noyau externe est liquide ; ses mouvements engendrent le champ magnétique terrestre. La graine est solide, bien que plus chaude : l'énorme pression qui y règne élève la température de fusion du fer.",
              ],
              box: { label: "À retenir", text: "Densité moyenne de la Terre : environ 5,5, nettement supérieure à celle des roches de surface (2,7 à 3,3). Le noyau, formé de fer et de nickel, a une densité d'environ 10 à 13." },
            },
          ],
          keyPoints: [
            "De la surface au centre : croûte, manteau (jusqu'à 2 900 km), noyau externe liquide (jusqu'à 5 150 km), graine solide (jusqu'à 6 371 km).",
            "Croûte continentale : granite (quartz, feldspaths, micas), environ 30 km, densité 2,7, jusqu'à plus de 4 milliards d'années.",
            "Croûte océanique : basalte (microlitique) et gabbro (grenu), environ 7 km, densité 2,9 à 3,0, au plus 180 millions d'années.",
            "Manteau : péridotite (olivine, pyroxènes), solide, densité 3,3 sous le Moho, croissante avec la profondeur.",
            "Noyau : fer et nickel, densité 10 à 13 ; la densité moyenne de la Terre (5,5) impose un cœur très dense.",
            "Texture grenue : refroidissement lent en profondeur ; texture microlitique : refroidissement rapide en surface.",
          ],
          example: {
            statement: "On observe quatre roches. A : texture grenue, quartz, feldspaths et micas, densité 2,7. B : texture microlitique, pyroxène et plagioclase, densité 2,9. C : texture grenue, pyroxène et plagioclase, densité 3,0. D : texture grenue, olivine et pyroxènes, densité 3,3. Nommez ces roches et indiquez l'enveloppe où on les trouve.",
            solution: [
              "A : quartz, feldspaths et micas avec une texture grenue caractérisent le granite. Densité faible (2,7) : c'est une roche de la croûte continentale.",
              "B : pyroxène et plagioclase avec une texture microlitique (verre et microlites) : c'est un basalte, refroidi rapidement. Il forme la partie supérieure de la croûte océanique.",
              "C : mêmes minéraux que B, mais texture grenue : c'est un gabbro, refroidi lentement en profondeur. Il forme la partie inférieure de la croûte océanique.",
              "D : olivine et pyroxènes, texture grenue, densité la plus forte (3,3) : c'est une péridotite, la roche du manteau.",
              "Réponse : A granite (croûte continentale), B basalte et C gabbro (croûte océanique), D péridotite (manteau). La densité augmente de la croûte continentale au manteau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À partir des profondeurs du modèle (Moho à 30 km sous un continent, limite manteau-noyau à 2 900 km, limite noyau externe-graine à 5 150 km, centre à 6 371 km), calculez l'épaisseur du manteau sous ce continent, celle du noyau externe et le rayon de la graine.",
              hint: "L'épaisseur d'une enveloppe est la différence entre la profondeur de sa base et celle de son sommet.",
              solution: [
                "Manteau : 2 900 - 30 = 2 870 km.",
                "Noyau externe : 5 150 - 2 900 = 2 250 km.",
                "Graine : 6 371 - 5 150 = 1 221 km de rayon.",
                "Résultat : manteau 2 870 km, noyau externe 2 250 km, graine de 1 221 km de rayon. La croûte (30 km) ne représente que moins de 0,5 % du rayon terrestre (30 ÷ 6 371 ≈ 0,47 %).",
              ],
            },
            {
              level: 2,
              statement: "Voici les vitesses des ondes sismiques en fonction de la profondeur (valeurs arrondies du modèle PREM). De 0 à 30 km : vP = 6,0 km/s, vS = 3,5 km/s. De 30 à 2 900 km : vP passe de 8,0 à 13,7 km/s, vS de 4,5 à 7,3 km/s. De 2 900 à 5 150 km : vP passe de 8,0 à 10,3 km/s, vS = 0. De 5 150 à 6 371 km : vP = 11,0 à 11,3 km/s, vS = 3,5 à 3,7 km/s. Repérez les discontinuités, nommez les enveloppes et déduisez leur état physique.",
              hint: "Une discontinuité correspond à un saut brutal de vitesse ; une vitesse des ondes S nulle signale un liquide.",
              solution: [
                "À 30 km, vP passe brusquement de 6,0 à 8,0 km/s : c'est le Moho, limite entre la croûte et le manteau. Ondes S présentes dans les deux : enveloppes solides.",
                "À 2 900 km, vP chute de 13,7 à 8,0 km/s et vS devient nulle : c'est la discontinuité de Gutenberg, limite entre le manteau (solide) et le noyau externe.",
                "Entre 2 900 et 5 150 km, les ondes S ne se propagent pas : le noyau externe est liquide.",
                "À 5 150 km, vP augmente et les ondes S réapparaissent (3,5 km/s) : c'est la discontinuité de Lehmann ; la graine est solide.",
                "Résultat : croûte solide (0 à 30 km), manteau solide (30 à 2 900 km), noyau externe liquide (2 900 à 5 150 km), graine solide (5 150 à 6 371 km).",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. La densité moyenne de la Terre, calculée à partir de sa masse et de son volume, vaut 5,5. Les roches de surface ont une densité de 2,7 à 3,0. On propose un modèle simplifié à deux enveloppes : un noyau de rayon 3 480 km et de densité moyenne 11, entouré d'un ensemble manteau et croûte de densité moyenne 4,5. Le rayon terrestre vaut 6 371 km. (1) Calculez la fraction du volume terrestre occupée par le noyau. (2) Calculez la densité moyenne de la Terre selon ce modèle. (3) Ce modèle est-il cohérent avec la mesure ? Que peut-on en conclure ?",
              hint: "Le volume d'une sphère est proportionnel au cube de son rayon : la fraction de volume du noyau vaut (3 480 ÷ 6 371)³. La densité moyenne est une moyenne des densités pondérée par les volumes.",
              solution: [
                "(1) Rapport des rayons : 3 480 ÷ 6 371 ≈ 0,546. Fraction de volume : 0,546³ ≈ 0,163, soit environ 16 % du volume terrestre.",
                "Le manteau et la croûte occupent donc 1 - 0,163 = 0,837, soit environ 84 % du volume.",
                "(2) Densité moyenne du modèle : 0,163 × 11 + 0,837 × 4,5 ≈ 1,79 + 3,77 = 5,56, soit environ 5,6.",
                "(3) La valeur obtenue (environ 5,6) est très proche de la densité mesurée (5,5) : le modèle est cohérent.",
                "Si la Terre était entièrement formée de roches semblables à celles de la surface, sa densité moyenne serait voisine de 3. Il faut donc qu'une partie du globe soit très dense : un noyau métallique, de fer et de nickel, occupant environ 16 % du volume mais près d'un tiers de la masse (1,79 ÷ 5,56 ≈ 0,32).",
                "Conclusion : la densité moyenne de la Terre impose l'existence d'un noyau très dense, ce que confirment les données sismiques et la composition des météorites de fer.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque enveloppe du globe au matériau qui la constitue.",
            pairs: [
              { left: "Croûte continentale", right: "Granite : quartz, feldspaths, micas" },
              { left: "Croûte océanique", right: "Basalte et gabbro : pyroxène, plagioclase" },
              { left: "Manteau", right: "Péridotite : olivine, pyroxènes" },
              { left: "Noyau externe", right: "Fer et nickel à l'état liquide" },
              { left: "Graine", right: "Fer et nickel à l'état solide" },
            ],
          },
          quiz: [
            {
              q: "Quelle roche forme l'essentiel du manteau ?",
              options: ["Le granite à micas", "Le basalte en coussins", "Le gabbro océanique", "La péridotite"],
              answer: 3,
              why: "Le manteau est formé de péridotite, une roche à olivine et pyroxènes, plus dense que les roches de la croûte.",
            },
            {
              q: "Le basalte et le gabbro ont la même composition chimique. Ce qui les distingue est :",
              options: ["leur texture, liée à la vitesse de refroidissement", "la présence de quartz dans le basalte", "leur âge, toujours très différent", "leur enveloppe : manteau pour l'un, croûte pour l'autre"],
              answer: 0,
              why: "Le basalte, refroidi vite en surface, est microlitique ; le gabbro, refroidi lentement en profondeur, est grenu. Tous deux appartiennent à la croûte océanique.",
            },
            {
              q: "Quelle est l'épaisseur moyenne de la croûte océanique ?",
              options: ["Environ 70 km", "Environ 30 km", "Environ 7 km", "Environ 700 m"],
              answer: 2,
              why: "La croûte océanique mesure environ 7 km d'épaisseur, contre 30 km en moyenne pour la croûte continentale.",
            },
            {
              q: "Pourquoi affirme-t-on que l'intérieur de la Terre est plus dense que sa surface ?",
              options: ["Parce que les volcans rejettent de grandes quantités de fer fondu", "Parce que sa densité moyenne dépasse celle des roches de surface", "Parce que le manteau est entièrement liquide, donc plus lourd", "Parce que la croûte continentale est très épaisse"],
              answer: 1,
              why: "Les roches de surface ont une densité de 2,7 à 3,3 ; pour obtenir une moyenne de 5,5, l'intérieur doit contenir des matériaux très denses.",
            },
            {
              q: "La graine est solide alors qu'elle est plus chaude que le noyau externe. Pourquoi ?",
              options: ["Elle est formée de roches silicatées, et non de métal comme le noyau externe", "Elle se refroidit plus vite", "La pression y est énorme et élève la température de fusion", "Elle est entourée d'eau"],
              answer: 2,
              why: "Plus la pression est forte, plus la température de fusion d'un matériau est élevée : au centre de la Terre, le fer reste solide malgré la chaleur.",
            },
          ],
          trap: "Croire que le manteau est liquide parce que des magmas en proviennent : le manteau est solide (les ondes S le traversent), seuls de petits volumes fondent localement. Seul le noyau externe est liquide.",
          method: "Pour identifier une roche, procédez toujours dans le même ordre : la texture (grenue ou microlitique, donc lieu de refroidissement), puis les minéraux (quartz ou olivine ?), puis la densité ; ces trois indices ensemble ne laissent aucun doute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lithosphere-asthenosphere',
          title: 'Lithosphère et asthénosphère',
          minutes: 30,
          objectives: [
            "Distinguer la lithosphère, rigide, et l'asthénosphère, ductile, et situer leur limite (zone à moindre vitesse, isotherme 1 300 °C).",
            "Expliquer que la limite lithosphère-asthénosphère est une limite de comportement mécanique liée à la température, et non une limite de composition.",
            "Comparer l'épaisseur des lithosphères océanique et continentale.",
            "Exploiter un géotherme et des images de tomographie sismique pour mettre en évidence la convection du manteau.",
          ],
          course: [
            {
              heading: "Deux façons de découper le globe",
              paragraphs: [
                "Le découpage en croûte, manteau et noyau repose sur la composition des matériaux (granite ou basalte, péridotite, fer). On peut aussi découper le haut du globe selon le comportement mécanique des roches, c'est-à-dire leur façon de réagir aux forces qui s'exercent sur elles.",
                "La lithosphère est l'enveloppe rigide superficielle : elle comprend la croûte et la partie supérieure du manteau, appelée manteau lithosphérique. Rigide, elle se casse lorsqu'elle est soumise à des contraintes, ce qui provoque les séismes. Le Moho se trouve donc à l'intérieur de la lithosphère. En dessous, l'asthénosphère est formée de péridotite solide mais ductile : elle peut se déformer lentement sans se casser, sur des millions d'années.",
                "La glace d'un glacier offre une bonne analogie : elle est solide, se brise si on la frappe, et pourtant elle s'écoule lentement le long de la vallée. De même, l'asthénosphère n'est pas liquide : elle laisse passer les ondes S.",
              ],
              box: { label: "Définition", text: "Lithosphère : enveloppe rigide formée de la croûte et du manteau lithosphérique. Asthénosphère : partie du manteau sous-jacente, solide mais ductile, capable de se déformer lentement." },
            },
            {
              heading: "La zone à moindre vitesse et l'isotherme 1 300 °C",
              paragraphs: [
                "Sous les océans, vers 100 km de profondeur en moyenne, les ondes sismiques ralentissent légèrement : c'est la zone à moindre vitesse, qui marque le sommet de l'asthénosphère. Dans cette zone, la péridotite est proche de sa température de fusion, ce qui la rend plus déformable ; seule une infime fraction de la roche peut y être fondue.",
                "La limite entre lithosphère et asthénosphère correspond approximativement à l'isotherme 1 300 °C : au-dessus, la péridotite est assez froide pour être rigide ; en dessous, elle est assez chaude pour être ductile. Il s'agit donc d'une limite thermique et mécanique, et non d'un changement de roche : le manteau lithosphérique et l'asthénosphère sont faits de la même péridotite.",
                "L'épaisseur de la lithosphère varie. La lithosphère océanique est presque inexistante à l'axe des dorsales et s'épaissit en vieillissant, à mesure qu'elle se refroidit, jusqu'à environ 100 km. La lithosphère continentale mesure environ 150 km en moyenne, et davantage sous les vieux continents.",
              ],
              box: { label: "À retenir", text: "La limite lithosphère-asthénosphère suit l'isotherme 1 300 °C : environ 100 km sous les océans anciens, environ 150 km sous les continents. C'est une limite de comportement (rigide ou ductile), pas de composition." },
            },
            {
              heading: "La chaleur interne et le géotherme",
              paragraphs: [
                "La Terre perd en permanence de la chaleur par sa surface : c'est le flux géothermique. Cette chaleur provient en partie de la désintégration d'éléments radioactifs contenus dans les roches (uranium, thorium, potassium) et en partie de la chaleur initiale accumulée lors de la formation de la planète.",
                "Le géotherme est la courbe qui donne la température en fonction de la profondeur. Dans la lithosphère, la chaleur se transmet par conduction, de proche en proche, et la température augmente vite : environ 30 °C par kilomètre près de la surface des continents (c'est le gradient géothermique). Dans le manteau sous-jacent, la température augmente beaucoup plus lentement, de quelques dixièmes de degré par kilomètre : ce faible gradient indique que la chaleur y est transportée par convection.",
              ],
              box: { label: "Repère", text: "Gradient géothermique : environ 30 °C par km dans la croûte continentale superficielle (transfert par conduction). Gradient de quelques dixièmes de °C par km dans le manteau convectif." },
            },
            {
              heading: "Un manteau animé de mouvements de convection",
              paragraphs: [
                "La convection est un transfert de chaleur par déplacement de matière : la matière chaude, moins dense, monte ; la matière froide, plus dense, descend. Dans le manteau, cette convection se fait à l'état solide, à une vitesse de quelques centimètres par an, comparable à la vitesse de croissance des ongles.",
                "La tomographie sismique permet de la visualiser. En combinant des millions de temps de trajet d'ondes, on cartographie les zones où les ondes vont plus lentement que prévu par le modèle (anomalies négatives : roches plus chaudes) et celles où elles vont plus vite (anomalies positives : roches plus froides). On observe des matériaux chauds, ascendants, sous les dorsales et sous des volcans comme ceux d'Hawaï, et des matériaux froids, descendants, qui plongent sous les fosses océaniques parfois jusque dans le manteau profond.",
                "La lithosphère, froide et rigide, forme la couche supérieure de ce système convectif : elle est découpée en plaques qui se déplacent sur l'asthénosphère, et dont les mouvements sont liés à la convection du manteau.",
              ],
              box: { label: "À retenir", text: "Tomographie : anomalie négative de vitesse = roche plus chaude (ascendante) ; anomalie positive = roche plus froide (descendante). Le manteau, solide, est animé de mouvements de convection lents." },
            },
          ],
          keyPoints: [
            "Lithosphère = croûte + manteau lithosphérique, rigide ; asthénosphère = manteau solide mais ductile.",
            "Leur limite, vers l'isotherme 1 300 °C, est marquée par une zone à moindre vitesse des ondes sismiques.",
            "Lithosphère océanique : presque nulle à la dorsale, environ 100 km quand elle est ancienne ; continentale : environ 150 km.",
            "Le Moho est une limite de composition située à l'intérieur de la lithosphère.",
            "Conduction dans la lithosphère (fort gradient), convection dans le manteau (faible gradient).",
            "Tomographie : zones lentes = chaudes et ascendantes, zones rapides = froides et descendantes.",
          ],
          example: {
            statement: "Sous un océan ancien, la température du plancher océanique est d'environ 0 °C et le gradient géothermique moyen dans la lithosphère vaut 13 °C par km (données simplifiées). Calculez l'épaisseur de la lithosphère, puis indiquez si un point situé à 60 km de profondeur appartient à la lithosphère ou à l'asthénosphère, et s'il se trouve dans la croûte ou dans le manteau (croûte océanique de 7 km).",
            solution: [
              "La base de la lithosphère correspond à l'isotherme 1 300 °C.",
              "Avec un gradient de 13 °C par km à partir de 0 °C, cette température est atteinte à la profondeur h = 1 300 ÷ 13 = 100 km.",
              "La lithosphère a donc une épaisseur d'environ 100 km.",
              "Le point situé à 60 km a une température d'environ 60 × 13 = 780 °C, inférieure à 1 300 °C : il appartient à la lithosphère.",
              "Comme le Moho est à 7 km, ce point se trouve dans le manteau, plus précisément dans le manteau lithosphérique.",
              "Réponse : lithosphère d'environ 100 km ; le point à 60 km est dans le manteau lithosphérique, rigide.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère une lithosphère océanique ancienne de 100 km d'épaisseur (croûte de 7 km) et une lithosphère continentale de 150 km (croûte de 30 km). Pour chaque point, indiquez l'enveloppe selon la composition (croûte ou manteau) et selon le comportement (lithosphère ou asthénosphère). (a) 5 km sous le plancher océanique. (b) 50 km sous l'océan. (c) 120 km sous l'océan. (d) 20 km sous le continent. (e) 120 km sous le continent.",
              hint: "Comparez chaque profondeur d'abord à la profondeur du Moho, puis à l'épaisseur de la lithosphère.",
              solution: [
                "(a) 5 km < 7 km : croûte océanique ; 5 km < 100 km : lithosphère.",
                "(b) 50 km > 7 km : manteau ; 50 km < 100 km : lithosphère (manteau lithosphérique).",
                "(c) 120 km > 100 km : manteau, dans l'asthénosphère.",
                "(d) 20 km < 30 km : croûte continentale ; lithosphère.",
                "(e) 120 km > 30 km : manteau ; 120 km < 150 km : lithosphère (manteau lithosphérique).",
                "Résultat : à la même profondeur de 120 km, on est dans l'asthénosphère sous l'océan mais encore dans la lithosphère sous le continent.",
              ],
            },
            {
              level: 2,
              statement: "Selon un modèle simplifié, l'épaisseur e de la lithosphère océanique (en km) dépend de son âge t (en millions d'années) par la relation e = 10 × √t. (1) Calculez l'épaisseur de la lithosphère âgée de 4 Ma, 25 Ma et 100 Ma. (2) Comment évolue l'épaisseur avec l'âge ? Expliquez ce phénomène à l'aide de l'isotherme 1 300 °C.",
              hint: "√4 = 2, √25 = 5, √100 = 10. Pensez à ce que devient une roche qui s'éloigne de la source de chaleur.",
              solution: [
                "(1) t = 4 Ma : e = 10 × √4 = 10 × 2 = 20 km.",
                "t = 25 Ma : e = 10 × √25 = 10 × 5 = 50 km.",
                "t = 100 Ma : e = 10 × √100 = 10 × 10 = 100 km.",
                "(2) L'épaisseur augmente avec l'âge, de plus en plus lentement (il faut 4 fois plus de temps pour doubler l'épaisseur).",
                "Explication : en s'éloignant de la dorsale, la lithosphère se refroidit par le haut. L'isotherme 1 300 °C, qui marque sa base, descend de plus en plus profondément : le manteau situé sous la lithosphère, en se refroidissant, devient rigide et s'ajoute au manteau lithosphérique.",
                "Résultat : 20 km, 50 km et 100 km ; la lithosphère océanique s'épaissit en vieillissant parce qu'elle se refroidit.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Document 1 : coupe de tomographie sismique du manteau sous le Pacifique ouest. Sous la fosse du Japon, une bande d'anomalies positives de vitesse plonge vers l'ouest à partir de la surface et s'enfonce jusqu'à plus de 600 km de profondeur. Sous une dorsale, on observe à l'inverse des anomalies négatives sur les 200 premiers kilomètres. Document 2 : le géotherme montre une augmentation rapide de la température dans les 100 premiers kilomètres, puis une augmentation très lente dans le manteau sous-jacent. À partir de ces documents et de vos connaissances, montrez que le manteau est animé de mouvements de convection et reliez ces mouvements à la lithosphère.",
              hint: "Traduisez chaque anomalie de vitesse en température, puis en densité et en sens de déplacement ; utilisez le géotherme pour identifier le mode de transfert de la chaleur.",
              solution: [
                "Document 1, sous la fosse : des anomalies positives signalent des roches où les ondes vont plus vite, donc plus froides que le manteau environnant. Cette bande froide part de la surface et plonge : c'est de la lithosphère océanique froide, plus dense, qui s'enfonce dans le manteau.",
                "Document 1, sous la dorsale : des anomalies négatives signalent des roches plus chaudes, donc moins denses : du manteau chaud remonte sous la dorsale.",
                "On a donc des mouvements de matière, descendants là où le matériel est froid et dense, ascendants là où il est chaud et léger : c'est la définition de la convection.",
                "Document 2 : dans les 100 premiers kilomètres (la lithosphère), la température augmente vite, ce qui correspond à un transfert de chaleur par conduction. En dessous, la température augmente très lentement : la chaleur est transportée par le déplacement de la matière, ce qui confirme la convection du manteau.",
                "Conclusion : le manteau, bien que solide, est animé de mouvements de convection lents. La lithosphère en constitue la couche froide supérieure : elle se forme au-dessus des courants ascendants (dorsales) et plonge dans le manteau au niveau des fosses, ce qui relie les mouvements des plaques à la convection.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Lithosphère, asthénosphère et convection.",
            statements: [
              { text: "L'asthénosphère est une couche de roche liquide sur laquelle flottent les plaques.", true: false, why: "L'asthénosphère est solide (les ondes S la traversent) mais ductile : elle se déforme lentement." },
              { text: "La lithosphère comprend la croûte et une partie du manteau.", true: true, why: "Elle est formée de la croûte et du manteau lithosphérique, rigides." },
              { text: "Le Moho marque la limite entre lithosphère et asthénosphère.", true: false, why: "Le Moho sépare la croûte du manteau ; il se trouve à l'intérieur de la lithosphère." },
              { text: "La lithosphère océanique s'épaissit en vieillissant.", true: true, why: "En se refroidissant, elle voit l'isotherme 1 300 °C, sa base, s'enfoncer." },
              { text: "Une anomalie positive de vitesse des ondes indique une zone plus froide.", true: true, why: "Les ondes vont plus vite dans une roche plus froide, donc plus rigide." },
              { text: "Le manteau lithosphérique et l'asthénosphère sont formés de roches différentes.", true: false, why: "Tous deux sont formés de péridotite ; seule leur température, donc leur comportement, diffère." },
              { text: "Une partie de la chaleur interne provient de la désintégration d'éléments radioactifs.", true: true, why: "L'uranium, le thorium et le potassium des roches produisent de la chaleur en se désintégrant." },
            ],
          },
          quiz: [
            {
              q: "Quelle température marque approximativement la base de la lithosphère ?",
              options: ["100 °C", "600 °C", "1 300 °C", "5 000 °C"],
              answer: 2,
              why: "La limite lithosphère-asthénosphère suit à peu près l'isotherme 1 300 °C, au-delà duquel la péridotite devient ductile.",
            },
            {
              q: "Qu'est-ce qui distingue l'asthénosphère du manteau lithosphérique ?",
              options: ["Sa composition chimique, très différente", "Son comportement ductile", "Son état entièrement liquide", "La présence de granite en profondeur"],
              answer: 1,
              why: "Les deux sont faits de péridotite solide ; l'asthénosphère, plus chaude, se déforme lentement au lieu de se casser.",
            },
            {
              q: "À 120 km de profondeur sous un continent, on se trouve en général :",
              options: ["dans la lithosphère", "dans l'asthénosphère", "dans la croûte", "dans le noyau"],
              answer: 0,
              why: "La lithosphère continentale mesure environ 150 km : à 120 km, on est dans le manteau lithosphérique.",
            },
            {
              q: "Sur une image de tomographie, une zone où les ondes sont ralenties correspond :",
              options: ["à une roche plus froide et descendante", "à du noyau liquide remonté en surface", "à une zone de croûte continentale épaisse", "à une roche plus chaude et ascendante"],
              answer: 3,
              why: "Une anomalie négative de vitesse traduit une roche plus chaude, moins dense, qui tend à remonter.",
            },
            {
              q: "Pourquoi le gradient géothermique est-il faible dans le manteau sous la lithosphère ?",
              options: ["Le manteau ne contient aucun élément radioactif", "La chaleur y est transportée par convection", "Le manteau est entièrement liquide", "La pression y empêche toute variation"],
              answer: 1,
              why: "La convection brasse le manteau et répartit la chaleur : la température y augmente lentement avec la profondeur.",
            },
          ],
          trap: "Confondre les deux découpages : croire que la lithosphère est la croûte, ou que le Moho sépare lithosphère et asthénosphère. Le Moho est une limite de composition ; la base de la lithosphère est une limite de comportement, à l'isotherme 1 300 °C.",
          method: "Dessinez une coupe à deux colonnes côte à côte : à gauche les enveloppes de composition (croûte, manteau), à droite les enveloppes de comportement (lithosphère, asthénosphère), avec les profondeurs sous un océan et sous un continent ; vous placerez ainsi n'importe quel point sans erreur.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA DYNAMIQUE DE LA LITHOSPHÈRE                                         */
    /* ==================================================================== */
    {
      id: 'dynamique-lithosphere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mobilite-plaques',
          title: 'Les arguments de la mobilité des plaques',
          minutes: 30,
          objectives: [
            "Présenter les arguments d'Alfred Wegener en faveur de la dérive des continents et les raisons du rejet de son hypothèse.",
            "Expliquer comment les données océanographiques (anomalies magnétiques, âge des fonds océaniques, sédiments) ont conduit à l'expansion océanique puis à la tectonique des plaques.",
            "Calculer une vitesse de déplacement à partir d'anomalies magnétiques, de mesures GPS ou d'un alignement volcanique de point chaud.",
            "Définir une plaque lithosphérique et ses trois types de frontières.",
          ],
          course: [
            {
              heading: "Wegener et la dérive des continents",
              paragraphs: [
                "En 1912, le météorologue allemand Alfred Wegener propose que les continents se déplacent à la surface du globe. Ils auraient formé autrefois un continent unique, la Pangée, qui se serait ensuite fragmenté. Il rassemble plusieurs types d'arguments. Argument morphologique : les côtes de l'Amérique du Sud et de l'Afrique s'emboîtent, et l'ajustement est encore meilleur si l'on suit la bordure des plateaux continentaux, sous la mer.",
                "Argument paléontologique : des fossiles d'êtres vivants incapables de traverser un océan se retrouvent sur des continents aujourd'hui séparés, comme le Mesosaurus, un petit reptile d'eau douce vieux d'environ 280 millions d'années, présent au Brésil et en Afrique australe, ou la plante Glossopteris, présente sur tous les continents de l'hémisphère sud et en Inde. Argument paléoclimatique : des traces d'une glaciation datée d'environ 300 millions d'années existent en Amérique du Sud, en Afrique, en Inde, en Australie et en Antarctique ; elles forment une zone cohérente si l'on rassemble ces continents autour du pôle Sud. Argument géologique : des ensembles de roches de même âge se prolongent d'un continent à l'autre.",
                "L'hypothèse est pourtant rejetée par la majorité des géophysiciens : on ne voit pas comment des continents pourraient se frayer un chemin à travers le plancher océanique rigide, et les forces invoquées par Wegener sont beaucoup trop faibles. Il meurt en 1930 lors d'une expédition au Groenland, sans avoir convaincu.",
              ],
              box: { label: "À retenir", text: "Wegener (1912) : dérive des continents, appuyée sur des arguments morphologiques, paléontologiques, paléoclimatiques et géologiques. Rejet faute de mécanisme convaincant." },
            },
            {
              heading: "L'exploration des océans et l'expansion océanique",
              paragraphs: [
                "Après la Seconde Guerre mondiale, la cartographie des fonds marins au sonar révèle un relief inattendu : des dorsales, chaînes de montagnes sous-marines longues de plus de 60 000 km, parcourues en leur axe par un fossé (le rift), et des fosses océaniques profondes au bord de certains continents.",
                "Le paléomagnétisme apporte un argument décisif. En refroidissant, les laves basaltiques enregistrent l'orientation du champ magnétique terrestre. Or ce champ s'inverse de façon irrégulière au cours du temps (la dernière inversion date d'environ 780 000 ans). Les mesures en mer révèlent des bandes d'anomalies magnétiques parallèles à l'axe des dorsales et symétriques de part et d'autre. Harry Hess avait proposé en 1962 que le plancher océanique se forme à l'axe des dorsales puis s'en écarte ; en 1963, Fred Vine et Drummond Matthews montrent que les bandes symétriques s'expliquent ainsi : chaque bande est un enregistrement du champ magnétique au moment de sa formation.",
                "À partir de 1968, les forages océaniques confirment cette expansion : l'âge des sédiments les plus anciens, déposés directement sur le basalte, augmente avec la distance à la dorsale, de même que l'épaisseur des sédiments. Aucun fond océanique en place n'a plus d'environ 180 millions d'années : le plancher océanique est sans cesse renouvelé.",
              ],
              box: { label: "Définition", text: "Expansion océanique : création continue de plancher océanique à l'axe des dorsales, qui s'écarte ensuite symétriquement de part et d'autre. Les anomalies magnétiques symétriques et l'âge des fonds, croissant avec la distance à l'axe, en sont les preuves." },
            },
            {
              heading: "La tectonique des plaques",
              paragraphs: [
                "En 1967 et 1968, plusieurs chercheurs, dont Jason Morgan, Dan McKenzie et le Français Xavier Le Pichon, réalisent la synthèse : la lithosphère est découpée en une douzaine de grandes plaques rigides, qui se déplacent les unes par rapport aux autres sur l'asthénosphère. Les déformations se concentrent sur leurs frontières, que soulignent la répartition des séismes et celle des volcans.",
                "On distingue trois types de frontières. Aux frontières divergentes (les dorsales), deux plaques s'écartent et de la lithosphère nouvelle se forme : c'est l'accrétion. Aux frontières convergentes, deux plaques se rapprochent : l'une plonge sous l'autre (subduction) ou deux continents se heurtent (collision). Aux frontières transformantes, deux plaques coulissent l'une le long de l'autre, comme le long de la faille de San Andreas en Californie.",
              ],
              box: { label: "Définition", text: "Une plaque lithosphérique est un fragment rigide de lithosphère qui se déplace sur l'asthénosphère. Ses frontières sont divergentes (dorsales), convergentes (subduction, collision) ou transformantes (coulissage)." },
            },
            {
              heading: "Des mouvements mesurés",
              paragraphs: [
                "Les points chauds sont des remontées de matériel chaud venu du manteau profond, à peu près fixes par rapport au manteau. Quand une plaque passe au-dessus, un volcan se forme, puis il est emporté et s'éteint, tandis qu'un nouveau volcan apparaît au-dessus du point chaud. On obtient un alignement de volcans dont l'âge augmente avec la distance au volcan actif. À Hawaï, l'île principale est active et les îles sont de plus en plus anciennes vers le nord-ouest : la plaque Pacifique se déplace vers le nord-ouest.",
                "Depuis les années 1990, la géodésie spatiale (GPS) mesure directement, au millimètre près, le déplacement de stations installées sur les plaques. Les vitesses obtenues sont de l'ordre de 1 à 10 cm par an ; l'Atlantique Nord s'ouvre par exemple d'environ 2 cm par an. Ces vitesses actuelles concordent avec celles calculées sur des millions d'années à partir des anomalies magnétiques ou des points chauds : le mouvement des plaques est continu.",
              ],
              box: { label: "Formule", text: "v = d ÷ t. Conversion utile : 1 km par million d'années (km/Ma) = 1 mm par an ; 10 km/Ma = 1 cm par an. À une dorsale, la vitesse d'expansion totale est le double de la vitesse mesurée d'un seul côté." },
            },
          ],
          keyPoints: [
            "Wegener (1912) : arguments morphologiques, paléontologiques (Mesosaurus, Glossopteris), paléoclimatiques et géologiques ; hypothèse rejetée faute de mécanisme.",
            "Les anomalies magnétiques forment des bandes symétriques de part et d'autre des dorsales (Vine et Matthews, 1963).",
            "L'âge et l'épaisseur des sédiments augmentent avec la distance à la dorsale ; aucun fond océanique n'a plus d'environ 180 Ma.",
            "Tectonique des plaques (1967-1968) : une douzaine de plaques rigides ; frontières divergentes, convergentes et transformantes.",
            "Points chauds et GPS mesurent des vitesses de 1 à 10 cm par an. 10 km/Ma = 1 cm/an.",
          ],
          example: {
            statement: "De part et d'autre d'une dorsale, la limite entre les basaltes de polarité normale actuelle et ceux de polarité inverse, datée de 0,78 Ma, se trouve à 39 km de l'axe (données fictives). Calculez la vitesse d'éloignement de chaque plaque par rapport à l'axe, puis la vitesse d'expansion totale, en cm par an.",
            solution: [
              "Le basalte situé à 39 km de l'axe s'est formé à l'axe il y a 0,78 Ma, puis s'est éloigné de 39 km.",
              "Vitesse d'un côté : v = d ÷ t = 39 ÷ 0,78 = 50 km/Ma.",
              "Conversion : 1 km/Ma = 1 mm/an, donc 50 km/Ma = 50 mm/an = 5 cm/an.",
              "La même distance s'observe de l'autre côté (symétrie) : les deux plaques s'écartent l'une de l'autre à 2 × 5 = 10 cm/an.",
              "Réponse : chaque plaque s'éloigne de l'axe à 5 cm/an ; la vitesse d'expansion totale est de 10 cm/an.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une station GPS installée sur une plaque s'est déplacée de 15 cm vers l'est en 6 ans par rapport à un point de référence. (1) Calculez sa vitesse en cm par an. (2) Combien de temps faudrait-il, à cette vitesse, pour parcourir 1 km ?",
              hint: "1 km = 100 000 cm.",
              solution: [
                "(1) v = 15 ÷ 6 = 2,5 cm/an.",
                "(2) t = d ÷ v = 100 000 ÷ 2,5 = 40 000 ans.",
                "Résultat : 2,5 cm/an ; il faut environ 40 000 ans pour parcourir 1 km, et 40 millions d'années pour 1 000 km. Des déplacements imperceptibles à l'échelle humaine deviennent considérables à l'échelle des temps géologiques.",
              ],
            },
            {
              level: 2,
              statement: "Un alignement d'îles volcaniques s'est formé au-dessus d'un point chaud (données simplifiées). Île A : volcan actif, à 0 km du point chaud. Île B : à 100 km, âge 1,25 Ma. Île C : à 400 km, âge 5 Ma. Les îles sont de plus en plus anciennes vers le nord-ouest. (1) Calculez la vitesse de déplacement de la plaque à partir des îles B et C. (2) Indiquez le sens de déplacement de la plaque. (3) Pourquoi peut-on utiliser un point chaud comme repère ?",
              hint: "Le point chaud est fixe : chaque île s'est formée au-dessus de lui, puis a été emportée par la plaque.",
              solution: [
                "(1) Île B : v = 100 ÷ 1,25 = 80 km/Ma. Île C : v = 400 ÷ 5 = 80 km/Ma. Soit 80 mm/an = 8 cm/an.",
                "(2) Chaque île s'est formée au-dessus du point chaud, puis s'en est éloignée. Les îles les plus anciennes sont au nord-ouest : la plaque se déplace donc vers le nord-ouest.",
                "(3) Le point chaud provient du manteau profond et reste à peu près fixe pendant que la plaque se déplace au-dessus de lui : il sert de repère fixe pour mesurer le mouvement absolu de la plaque.",
                "Résultat : la plaque se déplace vers le nord-ouest à environ 8 cm/an, vitesse constante sur les 5 derniers millions d'années.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Document 1 : des fossiles de Mesosaurus, petit reptile d'eau douce d'environ 280 Ma, sont présents au Brésil et en Afrique australe, et nulle part ailleurs. Document 2 : des traces de glaciation datées d'environ 300 Ma existent en Amérique du Sud, en Afrique, en Inde, en Australie et en Antarctique. Document 3 : forages dans l'Atlantique Sud (données fictives) : âge des sédiments les plus anciens en fonction de la distance à l'axe de la dorsale : 200 km : 10 Ma ; 600 km : 30 Ma ; 1 000 km : 50 Ma ; mêmes valeurs de l'autre côté. Montrez que ces documents appuient l'idée d'une mobilité des continents et des fonds océaniques, puis calculez la vitesse d'ouverture de l'Atlantique Sud.",
              hint: "Les documents 1 et 2 relèvent des arguments de Wegener ; le document 3 relève de l'expansion océanique. Pour le calcul, n'oubliez pas les deux côtés de la dorsale.",
              solution: [
                "Document 1 : un reptile d'eau douce n'a pas pu traverser l'Atlantique. Sa présence au Brésil et en Afrique australe seulement suggère que ces régions étaient réunies il y a 280 Ma.",
                "Document 2 : une glaciation touchant des régions aujourd'hui tropicales, comme l'Inde, s'explique si ces continents étaient rassemblés près du pôle Sud il y a 300 Ma, puis ont dérivé.",
                "Ces deux arguments, avancés par Wegener, montrent que les continents ont changé de position ; ils ne disent rien du mécanisme.",
                "Document 3 : l'âge des sédiments les plus anciens, donc du plancher océanique, augmente avec la distance à la dorsale, symétriquement. Le plancher se forme à l'axe et s'en éloigne : c'est l'expansion océanique, qui fournit le mécanisme manquant.",
                "Calcul : 200 ÷ 10 = 600 ÷ 30 = 1 000 ÷ 50 = 20 km/Ma, soit 2 cm/an de chaque côté. La vitesse d'ouverture totale est de 2 × 2 = 4 cm/an.",
                "Conclusion : continents et fonds océaniques se déplacent ensemble, comme parties d'une même plaque lithosphérique ; l'Atlantique Sud s'ouvre ici d'environ 4 cm par an, à vitesse constante depuis 50 Ma.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la construction de la tectonique des plaques.",
            items: [
              "Wegener propose la dérive des continents (1912)",
              "Hess propose l'expansion des fonds océaniques (1962)",
              "Vine et Matthews expliquent les anomalies magnétiques symétriques (1963)",
              "Morgan, McKenzie et Le Pichon formulent la tectonique des plaques (1967-1968)",
              "Le GPS mesure directement le mouvement des plaques (années 1990)",
            ],
          },
          quiz: [
            {
              q: "Pourquoi l'hypothèse de Wegener a-t-elle été rejetée à son époque ?",
              options: ["Ses fossiles étaient des faux", "Il ne proposait pas de mécanisme convaincant", "Les côtes des continents ne s'emboîtent pas", "On savait déjà mesurer l'immobilité des continents"],
              answer: 1,
              why: "Ses arguments étaient solides, mais on ne voyait pas comment les continents pouvaient traverser le plancher océanique rigide.",
            },
            {
              q: "Comment sont disposées les anomalies magnétiques des fonds océaniques ?",
              options: ["En bandes parallèles à la dorsale, symétriques", "En cercles concentriques autour des volcans sous-marins", "Au hasard sur le plancher océanique", "En bandes perpendiculaires aux côtes"],
              answer: 0,
              why: "Les basaltes formés à l'axe enregistrent le champ magnétique, puis s'écartent des deux côtés : les bandes sont parallèles et symétriques.",
            },
            {
              q: "Que constate-t-on en s'éloignant de l'axe d'une dorsale ?",
              options: ["Les couches de sédiments deviennent de plus en plus minces", "Le plancher océanique rajeunit", "Les volcans deviennent plus actifs", "Les sédiments les plus anciens sont plus vieux"],
              answer: 3,
              why: "Le plancher s'est formé à l'axe : plus on s'en éloigne, plus il est ancien, et plus les premiers sédiments déposés sur lui sont vieux.",
            },
            {
              q: "Une station GPS se déplace de 12 cm en 4 ans. Sa vitesse est de :",
              options: ["48 cm/an", "0,3 cm/an", "3 cm/an", "8 cm/an"],
              answer: 2,
              why: "v = 12 ÷ 4 = 3 cm/an.",
            },
            {
              q: "Le long de la faille de San Andreas, deux plaques coulissent l'une contre l'autre. C'est une frontière :",
              options: ["divergente", "transformante", "de subduction", "de collision"],
              answer: 1,
              why: "Une frontière transformante est une frontière où deux plaques coulissent sans création ni disparition de lithosphère.",
            },
          ],
          trap: "Oublier que la vitesse d'expansion totale d'une dorsale est le double de la vitesse mesurée d'un seul côté, ou se tromper dans les conversions : 1 km/Ma vaut 1 mm/an, et non 1 cm/an.",
          method: "Pour un argument historique, présentez toujours trois éléments : la donnée observée, ce qu'elle suggère, et sa limite (par exemple, les fossiles montrent que les continents étaient réunis, mais pas comment ils se sont séparés).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dorsales',
          title: 'Les dorsales : naissance de la lithosphère océanique',
          minutes: 30,
          objectives: [
            "Décrire les caractéristiques d'une dorsale (relief, rift, failles normales, flux thermique, volcanisme) et les relier à la divergence de deux plaques.",
            "Expliquer la formation du magma des dorsales par la fusion partielle de la péridotite du manteau due à sa décompression.",
            "Relier la structure de la lithosphère océanique (basaltes, gabbros, péridotites) aux conditions de refroidissement du magma.",
            "Expliquer le refroidissement, l'épaississement, l'hydratation et l'augmentation de densité de la lithosphère océanique qui s'éloigne de la dorsale.",
          ],
          course: [
            {
              heading: "Le relief et l'activité des dorsales",
              paragraphs: [
                "Les dorsales sont des reliefs sous-marins qui dominent de 2 à 3 km les plaines abyssales ; leur sommet se trouve en général vers 2 500 m de profondeur. Elles sont le siège de séismes peu profonds, d'un volcanisme effusif de basalte et d'un flux de chaleur élevé à leur axe. On y trouve des sources hydrothermales, comme les fumeurs noirs, où l'eau de mer réchauffée ressort chargée de minéraux dissous.",
                "Les dorsales lentes, comme la dorsale médio-atlantique (quelques centimètres par an), présentent à leur axe un fossé d'effondrement, le rift, bordé de failles normales : ces failles témoignent d'une extension, c'est-à-dire d'un étirement de la lithosphère. Les dorsales rapides, comme celle du Pacifique Est, ont un relief plus doux, sans rift profond. En Islande, la dorsale atlantique émerge et l'on peut observer ces failles à terre.",
              ],
              box: { label: "Définition", text: "Une dorsale est une frontière divergente : deux plaques s'y écartent et de la lithosphère océanique nouvelle s'y forme. Ce phénomène s'appelle l'accrétion." },
            },
            {
              heading: "La fusion partielle du manteau par décompression",
              paragraphs: [
                "Sous une dorsale, le manteau chaud de l'asthénosphère remonte pour combler l'espace laissé par l'écartement des plaques. En montant, la péridotite subit une baisse rapide de pression, alors qu'elle perd peu de chaleur. Or la température à partir de laquelle la péridotite commence à fondre (son solidus) diminue quand la pression diminue.",
                "Vers quelques dizaines de kilomètres de profondeur, la température de la péridotite devient supérieure à celle de son solidus : elle commence à fondre. Cette fusion est partielle : seule une partie des minéraux fond, ce qui produit un liquide de composition basaltique, tandis qu'il reste une péridotite résiduelle appauvrie. Moins dense que les roches qui l'entourent, le magma monte et s'accumule dans une chambre magmatique, à quelques kilomètres sous l'axe de la dorsale.",
              ],
              box: { label: "À retenir", text: "Sous les dorsales, la péridotite du manteau fond partiellement par décompression : sa remontée abaisse la pression, donc sa température de fusion. Le magma obtenu est de composition basaltique." },
            },
            {
              heading: "Du magma à la lithosphère océanique",
              paragraphs: [
                "Dans la chambre magmatique, le magma refroidit lentement et cristallise entièrement : il forme des gabbros, de texture grenue. Une partie du magma monte par des fissures, où il se fige en filons de basalte. Une autre partie atteint le plancher océanique : au contact de l'eau froide, la lave se fige brutalement en formant des basaltes en coussins (pillow-lavas), à la bordure vitreuse et au cœur microlitique.",
                "La lithosphère océanique présente donc, de haut en bas : des sédiments (déposés ensuite), des basaltes en coussins, des filons de basalte, des gabbros (l'ensemble formant la croûte océanique, d'environ 7 km), puis les péridotites du manteau lithosphérique. On retrouve cette succession dans les ophiolites, fragments de lithosphère océanique charriés sur les continents, comme au Chenaillet, dans les Hautes-Alpes, ou en Oman.",
              ],
              box: { label: "À retenir", text: "Lithosphère océanique, de haut en bas : sédiments, basaltes en coussins, filons de basalte, gabbros, puis péridotites. Même magma, textures différentes selon la vitesse de refroidissement." },
            },
            {
              heading: "En s'éloignant de la dorsale : refroidissement et densification",
              paragraphs: [
                "Une fois formée, la lithosphère s'éloigne de part et d'autre de l'axe. L'eau de mer circule dans ses fissures, la refroidit et réagit avec ses minéraux : c'est l'hydrothermalisme. Les roches de la croûte s'enrichissent alors en minéraux hydratés (comme la chlorite ou l'amphibole), qui contiennent de l'eau dans leur structure. Cette eau jouera un rôle essentiel dans les zones de subduction.",
                "En vieillissant, la lithosphère océanique se refroidit : l'isotherme 1 300 °C, qui marque sa base, s'enfonce, et le manteau lithosphérique s'épaissit. La lithosphère devient ainsi plus épaisse et plus dense, et le plancher océanique s'enfonce : la profondeur passe d'environ 2 500 m à l'axe à plus de 5 000 m pour les fonds anciens. Après quelques dizaines de millions d'années, la lithosphère océanique devient plus dense que l'asthénosphère sous-jacente : elle peut alors s'y enfoncer.",
              ],
              box: { label: "À retenir", text: "En s'éloignant de la dorsale, la lithosphère océanique s'hydrate, se refroidit, s'épaissit et devient plus dense, jusqu'à dépasser la densité de l'asthénosphère : elle devient capable de plonger." },
            },
          ],
          keyPoints: [
            "Une dorsale est une frontière divergente : relief sous-marin, rift et failles normales (extension), séismes peu profonds, flux thermique élevé.",
            "La péridotite qui remonte sous la dorsale fond partiellement par décompression et produit un magma basaltique.",
            "Refroidissement lent dans la chambre magmatique : gabbro grenu ; refroidissement rapide au contact de l'eau : basalte microlitique en coussins.",
            "Lithosphère océanique : sédiments, basaltes en coussins, filons, gabbros, péridotites ; les ophiolites la montrent à terre.",
            "En vieillissant, elle s'hydrate, se refroidit, s'épaissit et se densifie, jusqu'à pouvoir plonger dans l'asthénosphère.",
          ],
          example: {
            statement: "Sous l'axe d'une dorsale, on dispose des données simplifiées suivantes. À 80 km de profondeur : température du manteau 1 400 °C, solidus de la péridotite 1 500 °C. À 40 km : température 1 360 °C, solidus 1 300 °C. Indiquez à quelle profondeur la péridotite fond et expliquez pourquoi.",
            solution: [
              "Une roche commence à fondre quand sa température dépasse celle de son solidus.",
              "À 80 km, la température (1 400 °C) est inférieure au solidus (1 500 °C) : la péridotite est entièrement solide.",
              "À 40 km, la température (1 360 °C) est supérieure au solidus (1 300 °C) : la péridotite fond partiellement.",
              "Entre les deux profondeurs, la température de la péridotite qui remonte a très peu baissé (de 1 400 à 1 360 °C), alors que son solidus a fortement baissé (de 1 500 à 1 300 °C) avec la diminution de pression.",
              "Réponse : la fusion partielle commence entre 80 et 40 km de profondeur ; elle est due à la décompression de la péridotite qui remonte, et non à un réchauffement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une ophiolite, on prélève trois roches. A : formes arrondies de quelques dizaines de centimètres à bordure vitreuse, texture microlitique, pyroxène et plagioclase. B : texture grenue, pyroxène et plagioclase. C : texture grenue, olivine et pyroxènes, aspect vert sombre. Nommez chaque roche, expliquez sa texture et placez les trois roches de haut en bas dans la lithosphère océanique.",
              hint: "Les mêmes minéraux peuvent donner deux roches différentes selon la vitesse de refroidissement.",
              solution: [
                "A : basalte en coussins. La lave s'est figée brutalement au contact de l'eau de mer : refroidissement rapide, d'où le verre en bordure et les microlites.",
                "B : gabbro. Même composition que le basalte, mais refroidissement lent dans la chambre magmatique : tous les minéraux ont eu le temps de cristalliser (texture grenue).",
                "C : péridotite, roche du manteau lithosphérique, formée d'olivine et de pyroxènes.",
                "Résultat, de haut en bas : basalte en coussins (A), gabbro (B), péridotite (C). A et B forment la croûte océanique, C le manteau lithosphérique.",
              ],
            },
            {
              level: 2,
              statement: "Pour des fonds océaniques jeunes, la profondeur p du plancher (en mètres) varie avec l'âge t de la lithosphère (en Ma) selon la relation p = 2 500 + 350 × √t. (1) Calculez la profondeur à l'axe (t = 0), pour t = 16 Ma et pour t = 64 Ma. (2) Expliquez pourquoi le plancher océanique s'enfonce en vieillissant.",
              hint: "√16 = 4 et √64 = 8. Pensez à ce qui arrive à une roche qui refroidit.",
              solution: [
                "(1) t = 0 : p = 2 500 + 350 × 0 = 2 500 m.",
                "t = 16 Ma : p = 2 500 + 350 × 4 = 2 500 + 1 400 = 3 900 m.",
                "t = 64 Ma : p = 2 500 + 350 × 8 = 2 500 + 2 800 = 5 300 m.",
                "(2) En s'éloignant de la dorsale, la lithosphère se refroidit. Elle se contracte et devient plus dense, et son manteau lithosphérique s'épaissit car l'isotherme 1 300 °C s'enfonce. Plus lourde, elle s'enfonce dans l'asthénosphère, et le plancher se trouve de plus en plus profond.",
                "Résultat : 2 500 m, 3 900 m et 5 300 m ; le plancher s'approfondit parce que la lithosphère se refroidit et se densifie.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Document 1 : coupe d'une dorsale lente montrant un rift axial de quelques kilomètres de large, bordé de failles normales, et des séismes peu profonds (moins de 10 km). Document 2 : sous l'axe, le manteau remonte ; le géotherme de cette zone croise le solidus de la péridotite vers 60 km de profondeur (données simplifiées). Document 3 : une ophiolite montre de haut en bas des basaltes en coussins, des filons de basalte, des gabbros contenant des amphiboles (minéraux hydratés), puis des péridotites. Expliquez, à partir de ces documents et de vos connaissances, comment se forme la lithosphère océanique à l'axe d'une dorsale.",
              hint: "Organisez votre réponse dans l'ordre des événements : écartement des plaques, remontée et fusion du manteau, mise en place du magma, transformations après la formation.",
              solution: [
                "Document 1 : les failles normales et le rift indiquent une extension : les deux plaques s'écartent. Les séismes peu profonds montrent que seule une lithosphère mince et cassante existe à l'axe.",
                "Document 2 : l'écartement des plaques permet la remontée du manteau. En montant, la péridotite se décomprime, son solidus diminue et, vers 60 km, sa température le dépasse : elle fond partiellement et produit un magma basaltique.",
                "Le magma, moins dense, monte et s'accumule dans une chambre magmatique sous l'axe.",
                "Document 3 : le magma qui refroidit lentement dans la chambre donne les gabbros (grenus) ; celui qui monte par les fissures forme les filons ; celui qui s'épanche sur le fond se fige au contact de l'eau en basaltes en coussins (microlitiques).",
                "Les amphiboles des gabbros sont des minéraux hydratés : elles témoignent de la circulation d'eau de mer dans la croûte après sa formation (hydrothermalisme).",
                "Conclusion : à l'axe des dorsales, l'écartement des plaques provoque la fusion partielle par décompression du manteau ; le magma produit forme la croûte océanique (basaltes et gabbros), au-dessus du manteau lithosphérique. Cette lithosphère nouvelle est ensuite hydratée, puis s'éloigne de l'axe en se refroidissant.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément d'une dorsale à sa description.",
            pairs: [
              { left: "Rift", right: "Fossé central bordé de failles normales" },
              { left: "Basaltes en coussins", right: "Lave figée brutalement au contact de l'eau de mer" },
              { left: "Gabbro", right: "Magma refroidi lentement dans la chambre magmatique" },
              { left: "Péridotite résiduelle", right: "Manteau qui a subi la fusion partielle" },
              { left: "Fumeur noir", right: "Source hydrothermale chaude chargée de minéraux" },
              { left: "Ophiolite", right: "Fragment de lithosphère océanique sur un continent" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la cause de la fusion partielle du manteau sous une dorsale ?",
              options: ["Un réchauffement par le noyau", "La décompression de la péridotite qui remonte", "L'apport d'eau libérée par une plaque qui plonge en dessous", "La fusion de la croûte continentale"],
              answer: 1,
              why: "En remontant, la péridotite subit une baisse de pression qui abaisse sa température de fusion : elle fond partiellement sans être réchauffée.",
            },
            {
              q: "Que révèlent les failles normales qui bordent le rift d'une dorsale lente ?",
              options: ["Une compression", "Un coulissage", "Une subduction", "Une extension"],
              answer: 3,
              why: "Les failles normales traduisent un étirement de la lithosphère, cohérent avec l'écartement des deux plaques.",
            },
            {
              q: "Le gabbro et le basalte de la croûte océanique diffèrent surtout par :",
              options: ["leur vitesse de refroidissement", "leur composition chimique", "leur origine, continentale ou océanique", "leur teneur en quartz"],
              answer: 0,
              why: "Ils proviennent du même magma : le gabbro a refroidi lentement en profondeur (grenu), le basalte rapidement en surface (microlitique).",
            },
            {
              q: "Quelle succession observe-t-on, de haut en bas, dans une ophiolite ?",
              options: ["Gabbros, basaltes, péridotites", "Péridotites, gabbros, basaltes", "Basaltes, gabbros, péridotites", "Basaltes, péridotites, gabbros"],
              answer: 2,
              why: "Les basaltes (en coussins puis en filons) surmontent les gabbros de la chambre magmatique, eux-mêmes au-dessus des péridotites du manteau.",
            },
            {
              q: "Pourquoi la lithosphère océanique devient-elle plus dense en vieillissant ?",
              options: ["Elle se réchauffe au contact du manteau", "Elle perd ses sédiments", "Elle se refroidit et s'épaissit", "Elle se transforme en croûte continentale"],
              answer: 2,
              why: "En s'éloignant de la dorsale, elle se refroidit : elle se contracte et son épaisseur de manteau lithosphérique, dense, augmente.",
            },
          ],
          trap: "Croire que le magma des dorsales provient d'un manteau liquide ou d'un réchauffement : le manteau est solide, et sa fusion est partielle, provoquée par la baisse de pression lors de sa remontée.",
          method: "Pour expliquer une fusion, comparez toujours deux courbes sur le même graphique : le géotherme (température réelle) et le solidus (température de début de fusion). La roche fond là où le géotherme passe à droite du solidus ; cherchez ensuite ce qui a fait bouger l'une ou l'autre courbe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subduction',
          title: 'Les zones de subduction : la lithosphère plonge',
          minutes: 35,
          objectives: [
            "Identifier les marqueurs d'une zone de subduction : fosse océanique, plan de Wadati-Benioff, anomalies thermiques et tomographiques, arc volcanique.",
            "Expliquer pourquoi la lithosphère océanique ancienne, devenue plus dense que l'asthénosphère, plonge dans le manteau.",
            "Expliquer le magmatisme des zones de subduction par la déshydratation de la plaque plongeante et la fusion partielle hydratée de la péridotite du manteau sus-jacent.",
            "Relier ce magmatisme (andésites, granitoïdes) à la production de croûte continentale.",
          ],
          course: [
            {
              heading: "Les marqueurs d'une zone de subduction",
              paragraphs: [
                "Une zone de subduction est une frontière convergente où une lithosphère océanique plonge sous une autre plaque. Elle se repère d'abord à une fosse océanique, dépression allongée très profonde (la fosse des Mariannes dépasse 10 000 m), et à un arc de volcans parallèle à la fosse : la cordillère des Andes, où la plaque Nazca plonge sous l'Amérique du Sud, ou l'arc insulaire des Mariannes, où une lithosphère océanique plonge sous une autre.",
                "Les foyers des séismes sont peu profonds près de la fosse et de plus en plus profonds en s'en éloignant, jusqu'à environ 700 km : ils dessinent un plan incliné, le plan de Wadati-Benioff, qui marque la plaque plongeante. La tomographie sismique montre à cet endroit une bande d'anomalies positives de vitesse : la plaque plongeante est plus froide que le manteau qui l'entoure. Le flux de chaleur est faible au niveau de la fosse, où arrive une lithosphère froide, et élevé sous l'arc volcanique, où des magmas remontent.",
              ],
              box: { label: "Définition", text: "La subduction est le plongement d'une lithosphère océanique sous une autre plaque, dans l'asthénosphère. Marqueurs : fosse, plan de Wadati-Benioff, anomalie froide en tomographie, arc volcanique." },
            },
            {
              heading: "Pourquoi la lithosphère océanique plonge",
              paragraphs: [
                "Formée à la dorsale, la lithosphère océanique se refroidit et s'épaissit en s'éloignant de l'axe : sa densité augmente. Après quelques dizaines de millions d'années, elle devient plus dense que l'asthénosphère sous-jacente et peut s'y enfoncer lorsqu'elle rencontre une autre plaque. Une fois engagée, la partie qui plonge entraîne le reste de la plaque par son poids : cette traction est l'un des principaux moteurs du mouvement des plaques.",
                "La lithosphère continentale, épaisse mais formée d'une croûte peu dense (2,7), reste plus légère que l'asthénosphère : elle ne plonge pas durablement. Lorsque la subduction a fait disparaître tout l'océan qui séparait deux continents, ceux-ci entrent en collision et une chaîne de montagnes se forme.",
              ],
              box: { label: "À retenir", text: "La subduction est due à la densité de la lithosphère océanique âgée, supérieure à celle de l'asthénosphère. Le poids de la plaque plongeante tire la plaque entière." },
            },
            {
              heading: "Un magmatisme riche en eau",
              paragraphs: [
                "Le volcanisme des zones de subduction est le plus souvent explosif : les magmas, visqueux et riches en gaz (surtout de la vapeur d'eau), donnent des explosions, des panaches de cendres et des nuées ardentes, comme lors de l'éruption de la montagne Pelée, en Martinique, en 1902, ou du mont Saint Helens, aux États-Unis, en 1980.",
                "Les laves forment des andésites, roches microlitiques qui contiennent souvent de l'amphibole, un minéral hydraté, témoin de la richesse en eau du magma. La plus grande partie du magma ne parvient pas en surface : il cristallise lentement en profondeur et forme des granitoïdes (par exemple des granodiorites), roches grenues. Ces roches, peu denses, s'ajoutent à la croûte continentale : les zones de subduction sont des lieux majeurs de production de croûte continentale.",
              ],
            },
            {
              heading: "L'origine des magmas : de l'eau qui fait fondre le manteau",
              paragraphs: [
                "La croûte océanique qui arrive à la fosse a été hydratée à la dorsale par l'hydrothermalisme : ses minéraux contiennent de l'eau. En s'enfonçant, elle subit une augmentation de pression et de température : ses minéraux deviennent instables et se transforment, à l'état solide, en nouveaux minéraux de moins en moins hydratés. C'est le métamorphisme. Les gabbros passent ainsi successivement par des associations de minéraux caractéristiques (schistes verts, puis schistes bleus à glaucophane, puis éclogites à grenat et jadéite), en perdant leur eau.",
                "L'eau libérée par la plaque plongeante migre dans la péridotite du manteau situé au-dessus d'elle. Or l'eau abaisse fortement la température de fusion de la péridotite. Vers 100 km de profondeur, sous l'arc volcanique, la péridotite hydratée atteint ainsi sa température de fusion, alors qu'elle resterait solide si elle était sèche : elle fond partiellement. Le magma produit, riche en eau, monte vers la surface.",
              ],
              box: { label: "Règle", text: "Dans les zones de subduction, ce n'est pas la plaque plongeante qui fond, mais la péridotite du manteau situé au-dessus d'elle : l'eau libérée par la déshydratation de la plaque abaisse sa température de fusion." },
            },
          ],
          keyPoints: [
            "Marqueurs de la subduction : fosse, plan de Wadati-Benioff (séismes jusqu'à environ 700 km), anomalie froide en tomographie, arc volcanique.",
            "La lithosphère océanique âgée, plus dense que l'asthénosphère, plonge ; son poids entraîne la plaque.",
            "En profondeur, la plaque plongeante se déshydrate (métamorphisme : schistes verts, schistes bleus, éclogites).",
            "L'eau libérée abaisse la température de fusion de la péridotite sus-jacente, qui fond partiellement vers 100 km.",
            "Volcanisme explosif (andésites) et plutonisme (granitoïdes) : production de croûte continentale.",
          ],
          example: {
            statement: "Dans une zone de subduction, un séisme se produit à 300 km de profondeur, en un point situé, en surface, à 400 km de la fosse. On suppose le plan de Wadati-Benioff plan. Calculez son angle de plongement α.",
            solution: [
              "Le plan de Wadati-Benioff part de la fosse et descend jusqu'au foyer. On forme un triangle rectangle : côté horizontal 400 km (distance à la fosse), côté vertical 300 km (profondeur).",
              "L'angle α entre le plan et l'horizontale vérifie tan α = côté opposé ÷ côté adjacent = 300 ÷ 400 = 0,75.",
              "À la calculatrice : α = arctan(0,75) ≈ 37°.",
              "Vérification : tan(37°) ≈ 0,754, valeur proche de 0,75.",
              "Réponse : la plaque plongeante s'enfonce avec un angle d'environ 37° sous la plaque chevauchante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La plaque Nazca plonge sous l'Amérique du Sud à une vitesse d'environ 7 cm par an (valeur arrondie). (1) Combien de temps faut-il pour que 700 km de lithosphère disparaissent dans la subduction ? (2) Convertissez cette vitesse en km par million d'années.",
              hint: "1 km = 100 000 cm ; 1 cm/an = 10 km/Ma.",
              solution: [
                "(1) 700 km = 700 × 100 000 = 70 000 000 cm.",
                "t = d ÷ v = 70 000 000 ÷ 7 = 10 000 000 ans, soit 10 Ma.",
                "(2) 7 cm/an = 7 × 10 = 70 km/Ma. Vérification : 700 ÷ 70 = 10 Ma.",
                "Résultat : 700 km de lithosphère disparaissent en environ 10 millions d'années ; la vitesse vaut 70 km/Ma.",
              ],
            },
            {
              level: 2,
              statement: "On relève la position de foyers sismiques sous un arc volcanique (données fictives). Distance horizontale à la fosse : 100 km, 200 km, 300 km. Profondeur des foyers : 70 km, 140 km, 210 km. (1) Montrez que les foyers sont alignés et calculez l'angle de plongement du plan de Wadati-Benioff. (2) Les volcans se situent à l'aplomb de la zone où la plaque plongeante atteint environ 100 km de profondeur. À quelle distance de la fosse se trouve l'arc volcanique ?",
              hint: "Calculez le rapport profondeur ÷ distance pour chaque foyer : s'il est constant, les points sont alignés avec la fosse.",
              solution: [
                "(1) Rapports : 70 ÷ 100 = 0,7 ; 140 ÷ 200 = 0,7 ; 210 ÷ 300 = 0,7. Le rapport est constant : les foyers sont alignés sur un plan qui part de la fosse.",
                "tan α = 0,7, donc α = arctan(0,7) ≈ 35°.",
                "(2) La profondeur vaut 0,7 fois la distance à la fosse. Pour une profondeur de 100 km : distance = 100 ÷ 0,7 ≈ 143 km.",
                "Résultat : plan de Wadati-Benioff incliné d'environ 35° ; l'arc volcanique se trouve à environ 143 km de la fosse.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données simplifiées). Document 1 : minéraux de métagabbros prélevés le long d'une zone de subduction ancienne. À la dorsale, après hydrothermalisme : chlorite et actinote (minéraux hydratés). Vers 30 km de profondeur : glaucophane (minéral hydraté). Vers 80 km : grenat et jadéite (minéraux anhydres). Document 2 : teneur en eau de ces roches : 2,5 %, puis 1,5 %, puis 0,2 % de leur masse. Document 3 : à 100 km de profondeur, la péridotite sèche commence à fondre vers 1 500 °C et la péridotite hydratée vers 1 000 °C ; la température du manteau situé au-dessus de la plaque plongeante est d'environ 1 200 °C à cette profondeur. Expliquez l'origine des magmas des zones de subduction.",
              hint: "Suivez la croûte océanique depuis la dorsale jusqu'à 80 km, puis cherchez où va l'eau qu'elle perd et quel est son effet sur le manteau.",
              solution: [
                "Document 1 : au cours de la descente, les minéraux de la croûte océanique changent : la pression et la température augmentent, les minéraux hydratés de la dorsale (chlorite, actinote) laissent place au glaucophane, puis à des minéraux anhydres (grenat, jadéite). C'est un métamorphisme.",
                "Document 2 : la teneur en eau passe de 2,5 % à 0,2 % : la plaque plongeante perd la quasi-totalité de son eau en profondeur. Elle se déshydrate.",
                "Cette eau migre dans la péridotite du manteau situé au-dessus de la plaque plongeante.",
                "Document 3 : à 100 km, la température du manteau (1 200 °C) est inférieure à la température de fusion de la péridotite sèche (1 500 °C) : sans eau, pas de fusion. Mais elle est supérieure à celle de la péridotite hydratée (1 000 °C) : la péridotite hydratée fond partiellement.",
                "Le magma produit, moins dense et riche en eau, remonte : il alimente le volcanisme explosif de l'arc (andésites) et cristallise en partie en profondeur (granitoïdes).",
                "Conclusion : les magmas des zones de subduction proviennent de la fusion partielle de la péridotite du manteau sus-jacent, rendue possible par l'eau libérée lors de la déshydratation métamorphique de la plaque plongeante.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui mènent de la dorsale au volcanisme de subduction.",
            items: [
              "À la dorsale, l'eau de mer hydrate les roches de la croûte océanique",
              "Refroidie et épaissie, la lithosphère océanique devient plus dense que l'asthénosphère",
              "Elle plonge sous une autre plaque au niveau d'une fosse",
              "La hausse de pression et de température déshydrate ses minéraux",
              "L'eau libérée abaisse la température de fusion de la péridotite sus-jacente",
              "La péridotite hydratée fond partiellement vers 100 km de profondeur",
              "Le magma remonte : volcans explosifs en surface, granitoïdes en profondeur",
            ],
          },
          quiz: [
            {
              q: "Que dessinent les foyers sismiques d'une zone de subduction ?",
              options: ["Un plan incliné", "Une ligne horizontale à 10 km de profondeur", "Un cercle autour de la fosse", "Une bande verticale sous l'arc"],
              answer: 0,
              why: "Les foyers sont de plus en plus profonds en s'éloignant de la fosse : ils dessinent le plan de Wadati-Benioff, qui suit la plaque plongeante.",
            },
            {
              q: "Sur une image de tomographie, la plaque plongeante apparaît comme une anomalie positive de vitesse. Cela signifie qu'elle est :",
              options: ["plus chaude que le manteau", "plus froide que le manteau", "en fusion", "formée de croûte continentale"],
              answer: 1,
              why: "Les ondes vont plus vite dans une roche plus froide : la lithosphère qui plonge reste plus froide que le manteau qui l'entoure.",
            },
            {
              q: "Quelle roche fond pour donner les magmas des zones de subduction ?",
              options: ["Le basalte de la plaque plongeante", "Le granite de la croûte continentale", "Les sédiments de la fosse", "La péridotite du manteau sus-jacent"],
              answer: 3,
              why: "C'est la péridotite du manteau situé au-dessus de la plaque plongeante qui fond partiellement, grâce à l'eau libérée par cette plaque.",
            },
            {
              q: "Quel est le rôle de l'eau dans le magmatisme de subduction ?",
              options: ["Elle refroidit le manteau", "Elle abaisse la température de fusion de la péridotite", "Elle rend la plaque plongeante plus légère, ce qui la fait remonter", "Elle dissout les roches du manteau"],
              answer: 1,
              why: "L'eau abaisse la température de fusion de la péridotite : à 100 km, une péridotite hydratée fond à une température où une péridotite sèche reste solide.",
            },
            {
              q: "Pourquoi la lithosphère continentale ne plonge-t-elle pas durablement dans le manteau ?",
              options: ["Elle est beaucoup trop chaude", "Elle est bien trop mince", "Elle est trop peu dense", "Elle est liquide en profondeur"],
              answer: 2,
              why: "Sa croûte épaisse et peu dense (2,7) la rend plus légère que l'asthénosphère : elle ne peut pas s'y enfoncer, d'où la collision.",
            },
          ],
          trap: "Affirmer que c'est la plaque plongeante qui fond : elle se déshydrate seulement. La fusion concerne la péridotite du manteau au-dessus d'elle, rendue fusible par l'eau libérée.",
          method: "Pour un sujet sur la subduction, faites un schéma en coupe annoté avant de rédiger : fosse, plaque plongeante avec le plan de Wadati-Benioff, flèches d'eau libérée, zone de fusion vers 100 km, arc volcanique. Chaque annotation devient une phrase de votre réponse.",
        },
      ],
    },
    /* ==================================================================== */
    /* ÉCOSYSTÈMES ET SERVICES ENVIRONNEMENTAUX                               */
    /* ==================================================================== */
    {
      id: 'ecosystemes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'interactions-ecosysteme',
          title: 'Un écosystème : des interactions entre êtres vivants et milieu',
          minutes: 30,
          objectives: [
            "Définir un écosystème comme l'ensemble formé par une biocénose et son biotope, en interaction.",
            "Identifier les principales interactions entre êtres vivants (prédation, parasitisme, compétition, mutualisme et symbiose) et leurs effets sur les populations.",
            "Décrire les flux d'énergie et les cycles de matière dans un réseau trophique (producteurs, consommateurs, décomposeurs).",
            "Calculer un rendement de transfert d'énergie entre deux niveaux trophiques.",
          ],
          course: [
            {
              heading: "Biotope et biocénose",
              paragraphs: [
                "Un écosystème est formé d'un milieu de vie, le biotope, et de l'ensemble des êtres vivants qui l'occupent, la biocénose, reliés par de multiples interactions. Le biotope regroupe les caractéristiques physiques et chimiques du milieu : climat, lumière, eau, sol, composition de l'air ou de l'eau. La biocénose comprend toutes les populations de toutes les espèces présentes, des bactéries aux arbres et aux mammifères. Un écosystème peut être une mare, une prairie, une forêt ou un récif corallien.",
                "Le biotope conditionne les êtres vivants : la lumière, la température, l'humidité ou l'acidité du sol déterminent quelles espèces peuvent vivre à un endroit. En retour, les êtres vivants modifient leur biotope. Dans une forêt tempérée de chênes et de hêtres, le feuillage crée sous lui un microclimat ombragé, plus frais et plus humide ; la chute des feuilles enrichit le sol en matière organique ; les vers de terre aèrent et mélangent ce sol ; le castor, en construisant des barrages, transforme un cours d'eau en zone humide.",
              ],
              box: { label: "Définition", text: "Écosystème = biotope (milieu physico-chimique) + biocénose (ensemble des êtres vivants), en interaction permanente. Le milieu agit sur les êtres vivants, et les êtres vivants modifient le milieu." },
            },
            {
              heading: "Les interactions entre êtres vivants",
              paragraphs: [
                "Les individus d'une même espèce entrent en compétition pour les ressources (nourriture, lumière, territoire, partenaires), mais peuvent aussi coopérer. Entre espèces différentes, on distingue plusieurs types d'interactions selon leur effet sur chaque partenaire : bénéfique (+), nuisible (-) ou neutre (0). Dans la prédation (+/-), un prédateur tue et consomme une proie. Dans le parasitisme (+/-), un parasite vit aux dépens d'un hôte, en général sans le tuer rapidement, comme la tique sur un chevreuil. Dans la compétition (-/-), deux espèces exploitent une même ressource limitée.",
                "Dans le mutualisme (+/+), les deux partenaires tirent bénéfice de leur association. Lorsqu'elle est durable et intime, on parle de symbiose. Le lichen associe un champignon et une algue (ou une cyanobactérie) : l'algue fournit des sucres issus de la photosynthèse, le champignon de l'eau et des ions minéraux. Les mycorhizes associent les racines de la grande majorité des plantes terrestres à des champignons du sol, qui prolongent le système racinaire. Les nodosités des légumineuses (pois, trèfle, luzerne) abritent des bactéries du genre Rhizobium qui fixent le diazote de l'air et le fournissent à la plante. Enfin, dans le commensalisme (+/0), une espèce profite d'une autre sans lui nuire ni l'aider.",
                "Ces interactions contrôlent l'effectif des populations : un prédateur limite le nombre de ses proies, la compétition limite la croissance des espèces qui partagent une ressource.",
              ],
              box: { label: "À retenir", text: "Prédation (+/-), parasitisme (+/-), compétition (-/-), mutualisme (+/+), commensalisme (+/0). La symbiose est un mutualisme durable et intime (lichen, mycorhizes, nodosités)." },
            },
            {
              heading: "Réseaux trophiques et flux d'énergie",
              paragraphs: [
                "Les relations alimentaires relient les êtres vivants en chaînes, qui s'entrecroisent en réseaux trophiques. Les producteurs primaires (végétaux chlorophylliens, algues, cyanobactéries) fabriquent leur matière organique à partir de dioxyde de carbone, d'eau et d'ions minéraux grâce à l'énergie lumineuse (photosynthèse). Les consommateurs primaires (herbivores) les mangent, les consommateurs secondaires (carnivores) mangent les herbivores. Les décomposeurs (bactéries, champignons, petits animaux du sol) transforment la matière organique morte (feuilles, cadavres, excréments) en matière minérale.",
                "L'énergie entre dans l'écosystème sous forme de lumière, captée par les producteurs, puis passe d'un niveau trophique au suivant. À chaque niveau, l'essentiel de l'énergie est perdu pour le niveau suivant : une partie de la matière n'est pas consommée ou pas digérée, et une grande partie de l'énergie assimilée est utilisée par la respiration et dissipée sous forme de chaleur. En moyenne, seuls 10 % environ de l'énergie d'un niveau se retrouvent dans le niveau suivant (souvent entre 5 et 20 %). C'est pourquoi les chaînes alimentaires comptent rarement plus de quatre ou cinq maillons et que les grands prédateurs sont peu nombreux.",
              ],
              box: { label: "Formule", text: "Rendement de transfert (%) = énergie (ou production de biomasse) du niveau n + 1 ÷ énergie du niveau n × 100. Il vaut en moyenne environ 10 %." },
            },
            {
              heading: "La matière circule en cycles",
              paragraphs: [
                "Contrairement à l'énergie, qui traverse l'écosystème sans retour, la matière est recyclée. Le carbone du dioxyde de carbone est incorporé dans la matière organique par la photosynthèse ; il passe ensuite dans les consommateurs, puis retourne à l'atmosphère sous forme de CO₂ par la respiration de tous les êtres vivants et par l'activité des décomposeurs.",
                "De même, l'azote des matières organiques mortes est transformé par les décomposeurs en ions ammonium, puis par des bactéries du sol en ions nitrate, absorbés par les racines des plantes. Certaines bactéries, comme Rhizobium dans les nodosités, font entrer dans le cycle l'azote de l'air (N₂), que les plantes et les animaux ne savent pas utiliser directement.",
              ],
              box: { label: "À retenir", text: "L'énergie traverse l'écosystème (de la lumière à la chaleur) ; la matière y est recyclée grâce aux décomposeurs (cycles du carbone et de l'azote)." },
            },
          ],
          keyPoints: [
            "Un écosystème = biotope + biocénose, en interaction : le milieu agit sur les êtres vivants et les êtres vivants modifient le milieu.",
            "Interactions : prédation et parasitisme (+/-), compétition (-/-), mutualisme (+/+), commensalisme (+/0).",
            "Symbiose : mutualisme durable et intime (lichen, mycorhizes, nodosités à Rhizobium).",
            "Producteurs, consommateurs et décomposeurs forment des réseaux trophiques.",
            "Rendement de transfert d'énergie d'un niveau trophique au suivant : environ 10 % ; l'énergie est dissipée en chaleur.",
            "La matière est recyclée (cycles du carbone et de l'azote), alors que l'énergie traverse l'écosystème.",
          ],
          example: {
            statement: "Dans une prairie (données fictives), la production annuelle des végétaux représente 20 000 kJ par m², celle des herbivores 1 800 kJ par m² et celle des carnivores 160 kJ par m². Calculez les rendements de transfert entre niveaux trophiques et commentez.",
            solution: [
              "Rendement végétaux → herbivores : 1 800 ÷ 20 000 × 100 = 9 %.",
              "Rendement herbivores → carnivores : 160 ÷ 1 800 × 100 ≈ 8,9 %.",
              "Rendement global végétaux → carnivores : 160 ÷ 20 000 × 100 = 0,8 %.",
              "Ces rendements, proches de 10 %, montrent qu'à chaque niveau environ 90 % de l'énergie n'est pas transmise : matière non consommée ou non digérée, et surtout énergie dissipée en chaleur par la respiration.",
              "Réponse : environ 9 % à chaque transfert ; les carnivores ne disposent que de 0,8 % de l'énergie produite par les végétaux, ce qui explique leur faible effectif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le type d'interaction et indiquez son effet sur chaque partenaire (+, - ou 0). (a) Un renard capture un lapin et le mange. (b) Une tique se nourrit du sang d'un chevreuil. (c) Un champignon s'associe aux racines d'un hêtre et échange des ions minéraux contre des sucres. (d) Deux plantes voisines poussent en hauteur pour capter la même lumière. (e) Un champignon et une algue forment un lichen.",
              hint: "Demandez-vous, pour chaque partenaire, s'il gagne, s'il perd ou s'il n'est pas affecté.",
              solution: [
                "(a) Prédation : + pour le renard, - pour le lapin.",
                "(b) Parasitisme : + pour la tique, - pour le chevreuil, qui n'est pas tué.",
                "(c) Mutualisme, ici une symbiose (mycorhize) : + pour le champignon (sucres), + pour le hêtre (eau et ions minéraux).",
                "(d) Compétition pour la lumière : - pour chacune des deux plantes.",
                "(e) Symbiose : + pour le champignon et + pour l'algue.",
                "Résultat : prédation (+/-), parasitisme (+/-), symbiose (+/+), compétition (-/-), symbiose (+/+).",
              ],
            },
            {
              level: 2,
              statement: "Dans un lac (données fictives), la production annuelle d'énergie de chaque niveau trophique est : phytoplancton 50 000 kJ, zooplancton 6 000 kJ, petits poissons 500 kJ, brochets 40 kJ (par m² et par an). (1) Calculez le rendement de chaque transfert. (2) Quelle fraction de l'énergie produite par le phytoplancton se retrouve dans les brochets ? (3) Pourquoi ce lac ne pourrait-il pas nourrir un niveau trophique supplémentaire important ?",
              hint: "Un rendement se calcule toujours en divisant la valeur du niveau supérieur par celle du niveau inférieur.",
              solution: [
                "(1) Phytoplancton → zooplancton : 6 000 ÷ 50 000 × 100 = 12 %.",
                "Zooplancton → petits poissons : 500 ÷ 6 000 × 100 ≈ 8,3 %.",
                "Petits poissons → brochets : 40 ÷ 500 × 100 = 8 %.",
                "(2) 40 ÷ 50 000 × 100 = 0,08 % de l'énergie du phytoplancton.",
                "(3) Avec un rendement d'environ 10 %, un niveau supplémentaire ne disposerait que d'environ 4 kJ par m² et par an : une énergie trop faible pour entretenir une population viable.",
                "Résultat : 12 %, 8,3 % et 8 % ; seuls 0,08 % de l'énergie initiale atteignent les brochets, ce qui limite la longueur de la chaîne.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Document 1 : des plants de pois sont cultivés dans un sol sans nitrates. Avec des bactéries Rhizobium, les racines portent des nodosités et la masse sèche des plants atteint 12 g ; sans Rhizobium, il n'y a pas de nodosités, les feuilles jaunissent et la masse sèche n'est que de 3 g. Avec des nitrates ajoutés, les deux lots atteignent 12 g. Document 2 : dans les nodosités, les bactéries reçoivent de la plante des sucres issus de la photosynthèse et transforment le diazote de l'air (N₂) en ions ammonium utilisés par la plante. Document 3 : après une culture de pois, la teneur du sol en azote est plus élevée qu'avant la culture. Montrez que l'association pois-Rhizobium est une symbiose et expliquez son intérêt pour l'écosystème et pour l'agriculture.",
              hint: "Cherchez ce que chaque partenaire apporte à l'autre (document 2), puis ce que montre la comparaison des lots du document 1, et enfin ce qui reste dans le sol (document 3).",
              solution: [
                "Document 1 : sans nitrates, le pois ne pousse bien qu'en présence de Rhizobium (12 g contre 3 g). Avec des nitrates, Rhizobium n'est plus nécessaire. Les bactéries fournissent donc à la plante l'azote qui lui manque.",
                "Document 2 : la plante fournit aux bactéries des sucres (source d'énergie et de carbone) ; les bactéries fournissent à la plante de l'azote utilisable, issu du diazote de l'air, que la plante seule ne sait pas utiliser.",
                "Chaque partenaire tire bénéfice de l'association (+/+), et celle-ci est durable et intime, puisque les bactéries vivent dans des organes spécialisés de la racine : c'est une symbiose.",
                "Document 3 : une partie de l'azote fixé reste dans le sol (racines, nodosités, résidus de culture), décomposée en ammonium puis en nitrates : la symbiose fait entrer dans l'écosystème de l'azote venu de l'atmosphère.",
                "Intérêt agricole : faire alterner des légumineuses avec d'autres cultures (rotation) enrichit le sol en azote et permet de réduire les apports d'engrais azotés, dont l'excès pollue les eaux.",
                "Conclusion : l'association pois-Rhizobium est une symbiose mutualiste qui alimente le cycle de l'azote de l'écosystème et peut être utilisée pour une agriculture plus économe en engrais.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque type d'interaction à sa description.",
            pairs: [
              { left: "Prédation", right: "L'un tue l'autre pour s'en nourrir (+/-)" },
              { left: "Parasitisme", right: "L'un vit aux dépens d'un hôte sans le tuer rapidement (+/-)" },
              { left: "Compétition", right: "Les deux exploitent une même ressource limitée (-/-)" },
              { left: "Mutualisme", right: "Les deux partenaires en tirent bénéfice (+/+)" },
              { left: "Commensalisme", right: "L'un en profite, l'autre n'est pas affecté (+/0)" },
              { left: "Symbiose", right: "Association mutualiste durable et intime, comme le lichen" },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on biocénose ?",
              options: ["L'ensemble des êtres vivants d'un écosystème", "L'ensemble formé par le sol, l'eau et le climat d'un milieu", "La chaîne alimentaire principale", "Le cycle du carbone"],
              answer: 0,
              why: "La biocénose regroupe toutes les populations vivantes d'un écosystème ; le sol et le climat font partie du biotope.",
            },
            {
              q: "Les nodosités des racines de légumineuses abritent :",
              options: ["des champignons parasites qui détruisent la racine", "des larves d'insectes", "des réserves d'amidon", "des bactéries qui fixent le diazote"],
              answer: 3,
              why: "Les bactéries Rhizobium des nodosités fixent le N₂ de l'air et le fournissent à la plante, qui leur donne des sucres : c'est une symbiose.",
            },
            {
              q: "Environ quelle part de l'énergie d'un niveau trophique passe au niveau suivant ?",
              options: ["100 %", "50 %", "10 %", "1 ‰"],
              answer: 2,
              why: "Le rendement de transfert est en moyenne d'environ 10 % : le reste est surtout dissipé en chaleur par la respiration.",
            },
            {
              q: "Quel est le rôle des décomposeurs dans un écosystème ?",
              options: ["Transformer la matière organique morte en matière minérale", "Produire de la matière organique à partir de la lumière par photosynthèse", "Capturer les herbivores malades", "Apporter de l'énergie lumineuse au sol"],
              answer: 0,
              why: "Bactéries et champignons du sol minéralisent la matière organique morte : ils rendent les éléments (carbone, azote) de nouveau utilisables par les producteurs.",
            },
            {
              q: "Une tique sur un chevreuil illustre :",
              options: ["le mutualisme", "le commensalisme", "la compétition", "le parasitisme"],
              answer: 3,
              why: "La tique se nourrit aux dépens du chevreuil sans le tuer rapidement : c'est du parasitisme (+/-).",
            },
          ],
          trap: "Dire que l'énergie est « recyclée » comme la matière : la matière circule en cycles grâce aux décomposeurs, mais l'énergie traverse l'écosystème et finit dissipée en chaleur. Autre confusion : appeler « symbiose » toute interaction, alors qu'elle désigne un mutualisme durable et intime.",
          method: "Pour caractériser une interaction, construisez un petit tableau à deux colonnes (partenaire 1, partenaire 2) et notez pour chacun +, - ou 0 avec la justification tirée du document ; le nom de l'interaction découle directement de la combinaison obtenue.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dynamique-ecosystemes',
          title: 'Équilibre dynamique et perturbations d’un écosystème',
          minutes: 30,
          objectives: [
            "Expliquer qu'un écosystème est en équilibre dynamique : ses populations fluctuent autour de valeurs moyennes, régulées par les interactions.",
            "Interpréter des fluctuations conjointes de populations de proies et de prédateurs.",
            "Distinguer les perturbations d'origine naturelle et d'origine humaine, et définir la résilience d'un écosystème.",
            "Relier la biodiversité d'un écosystème à sa capacité de résister aux perturbations et de s'en remettre.",
          ],
          course: [
            {
              heading: "Un équilibre dynamique",
              paragraphs: [
                "Un écosystème n'est jamais figé : des individus naissent et meurent, la matière circule, les effectifs des populations varient d'une saison et d'une année à l'autre. Pourtant, sur une longue période, ces effectifs fluctuent autour de valeurs moyennes et l'écosystème conserve ses grandes caractéristiques : on parle d'équilibre dynamique.",
                "Cet équilibre repose sur des régulations. Quand une population augmente, ses ressources diminuent, la compétition s'intensifie et ses prédateurs deviennent plus nombreux : sa croissance ralentit. Quand elle diminue, ces freins se relâchent. Ces régulations ramènent les effectifs vers leur valeur moyenne.",
                "Au Canada, les registres d'achat de fourrures de la Compagnie de la baie d'Hudson, tenus pendant près d'un siècle, montrent que les effectifs du lynx et de sa proie principale, le lièvre d'Amérique, varient selon des cycles d'environ dix ans, les pics de lynx suivant ceux des lièvres. Quand les lièvres abondent, les lynx se nourrissent bien et se multiplient ; la prédation, ajoutée à l'épuisement de la végétation, fait ensuite chuter les lièvres, puis les lynx, privés de nourriture, déclinent à leur tour, ce qui permet aux lièvres de se reconstituer.",
              ],
              box: { label: "Définition", text: "Équilibre dynamique : état d'un écosystème dont les populations fluctuent en permanence autour de valeurs moyennes, sous l'effet de régulations (ressources, compétition, prédation)." },
            },
            {
              heading: "Des perturbations naturelles ou humaines",
              paragraphs: [
                "Une perturbation est un événement qui modifie brutalement ou durablement un écosystème. Elle peut être naturelle (incendie déclenché par la foudre, tempête, sécheresse, inondation, éruption volcanique, maladie) ou liée aux activités humaines : déforestation, assèchement des zones humides, pollution, surexploitation (comme la surpêche), introduction d'espèces, changement climatique.",
                "L'eutrophisation en est un exemple : un excès de nitrates et de phosphates (engrais, eaux usées) arrivant dans un lac fait proliférer les algues ; à leur mort, leur décomposition par les bactéries consomme le dioxygène de l'eau, et les poissons meurent asphyxiés. Une espèce introduite peut aussi devenir envahissante : le frelon asiatique, arrivé accidentellement dans le sud-ouest de la France vers 2004, s'attaque aux abeilles.",
                "La disparition d'un prédateur peut bouleverser tout l'écosystème. Sur la côte pacifique de l'Amérique du Nord, la chasse intensive des loutres de mer pour leur fourrure a laissé proliférer les oursins, dont elles se nourrissent ; les oursins ont brouté les forêts d'algues géantes (kelp), habitat de nombreuses espèces. À l'inverse, la réintroduction du loup dans le parc de Yellowstone, en 1995, a modifié le comportement et l'effectif des cerfs wapitis, avec des effets sur la végétation dont l'ampleur est encore étudiée.",
              ],
            },
            {
              heading: "Résilience et succession écologique",
              paragraphs: [
                "La résilience d'un écosystème est sa capacité à retrouver sa structure et son fonctionnement après une perturbation. Après un incendie, ou dans un champ abandonné, la végétation se reconstitue par étapes : c'est la succession écologique. Des espèces pionnières (plantes herbacées à croissance rapide) colonisent d'abord le sol nu, puis des arbustes s'installent, puis des arbres pionniers à croissance rapide (bouleaux, pins), enfin des arbres plus exigeants (chênes, hêtres) forment une forêt mature. Chaque étape modifie le sol et le microclimat et prépare la suivante. La succession demande des décennies, voire des siècles.",
                "La résilience a des limites. Si une perturbation est trop forte, trop fréquente ou trop durable, l'écosystème peut franchir un seuil et basculer vers un autre état stable, souvent appauvri : un lac clair devient un lac turbide dominé par les algues, un récif corallien est envahi par les algues après le blanchissement des coraux.",
              ],
              box: { label: "Définition", text: "Résilience : capacité d'un écosystème à retrouver sa structure et son fonctionnement après une perturbation. Au-delà d'un seuil, il peut basculer vers un autre état." },
            },
            {
              heading: "La biodiversité, une assurance pour l'écosystème",
              paragraphs: [
                "Un écosystème riche en espèces résiste mieux aux perturbations et s'en remet plus vite. Plusieurs espèces peuvent y remplir la même fonction (pollinisation, décomposition, production) : si l'une disparaît ou souffre d'une perturbation, une autre prend le relais. Les espèces ne réagissent pas toutes de la même façon à une sécheresse ou à une maladie. Des expériences menées sur des parcelles de prairie aux États-Unis (Cedar Creek, Minnesota) ont montré que les parcelles riches en espèces perdaient moins de biomasse lors d'une sécheresse que les parcelles pauvres en espèces.",
                "La diversité génétique au sein d'une espèce joue un rôle comparable. En Irlande, à partir de 1845, les cultures de pommes de terre, issues de très peu de variétés, ont été ravagées à plusieurs reprises par le mildiou : la grande famine qui a suivi illustre la fragilité d'un système peu diversifié.",
              ],
              box: { label: "À retenir", text: "Plus un écosystème est diversifié (espèces et gènes), plus il a de chances de résister à une perturbation et de s'en remettre : la biodiversité est un facteur de résilience." },
            },
          ],
          keyPoints: [
            "Un écosystème est en équilibre dynamique : ses populations fluctuent autour de valeurs moyennes, sous l'effet de régulations.",
            "Proies et prédateurs présentent des cycles décalés (lynx et lièvre d'Amérique, environ dix ans).",
            "Perturbations naturelles (incendie, tempête) ou humaines (pollution, déforestation, espèces introduites, surexploitation).",
            "Résilience : capacité à retrouver son fonctionnement après une perturbation ; la succession écologique reconstitue la végétation.",
            "Au-delà d'un seuil, l'écosystème peut basculer vers un autre état ; la biodiversité augmente la résilience.",
          ],
          example: {
            statement: "On a relevé, sur dix ans, les effectifs d'une population de lièvres et de leurs prédateurs, les lynx (données fictives, en milliers d'individus). Année 0 : lièvres 20, lynx 2. Année 2 : 60 et 3. Année 4 : 80 et 6. Année 5 : 40 et 8. Année 6 : 15 et 5. Année 8 : 20 et 2. Année 10 : 60 et 3. Décrivez et expliquez l'évolution conjointe des deux populations.",
            solution: [
              "Description : les lièvres atteignent leur maximum à l'année 4 (80), les lynx à l'année 5 (8). Le pic des prédateurs suit donc celui des proies d'environ un an. Les deux effectifs reviennent à l'année 8 à des valeurs proches de l'année 0, puis le cycle recommence.",
              "De l'année 0 à 4 : les lièvres, peu chassés, se multiplient. La nourriture devient abondante pour les lynx, dont l'effectif augmente avec un décalage.",
              "De l'année 4 à 6 : les lynx, nombreux, prélèvent beaucoup de lièvres, dont l'effectif chute fortement.",
              "De l'année 5 à 8 : privés de proies, les lynx déclinent à leur tour ; la prédation diminue et les lièvres peuvent de nouveau se multiplier.",
              "Conclusion : les deux populations fluctuent de façon cyclique autour de valeurs moyennes, chacune régulant l'autre : c'est un équilibre dynamique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les perturbations suivantes selon leur origine (naturelle ou humaine) et donnez pour chacune une conséquence possible sur l'écosystème. (a) Une tempête abat une partie des arbres d'une forêt. (b) Une zone humide est drainée pour être cultivée. (c) Le frelon asiatique s'installe dans une région. (d) La foudre déclenche un incendie de garrigue. (e) Des engrais en excès ruissellent vers un étang.",
              hint: "Une même conséquence (disparition d'espèces, modification du milieu) peut avoir une origine naturelle ou humaine : c'est la cause qu'il faut classer.",
              solution: [
                "(a) Origine naturelle : ouverture de clairières, où la lumière permet le développement d'espèces pionnières.",
                "(b) Origine humaine : disparition des espèces des milieux humides et perte de la capacité de la zone à retenir l'eau et à l'épurer.",
                "(c) Origine humaine (introduction accidentelle) : prédation sur les abeilles, donc risque de baisse de la pollinisation.",
                "(d) Origine naturelle : destruction de la végétation, suivie d'une succession écologique.",
                "(e) Origine humaine : eutrophisation de l'étang, prolifération d'algues et manque de dioxygène pour les poissons.",
                "Résultat : (a) et (d) sont naturelles ; (b), (c) et (e) sont humaines.",
              ],
            },
            {
              level: 2,
              statement: "Dans un lac, la concentration en dioxygène dissous au fond de l'eau était de 9 mg/L en moyenne. Après plusieurs années d'apports d'engrais par ruissellement, elle n'est plus que de 3 mg/L en été, et des algues prolifèrent en surface (données fictives). De nombreuses espèces de poissons ont besoin d'au moins 5 mg/L environ. (1) Calculez le pourcentage de diminution du dioxygène. (2) Expliquez, par une chaîne de causes, comment les engrais conduisent à la mort des poissons.",
              hint: "Les algues ne consomment pas directement tout le dioxygène : pensez à ce qui se passe quand elles meurent.",
              solution: [
                "(1) Diminution : (9 - 3) ÷ 9 × 100 = 6 ÷ 9 × 100 ≈ 66,7 %, soit environ deux tiers.",
                "(2) Les engrais apportent au lac des nitrates et des phosphates en excès.",
                "Ces ions minéraux favorisent la prolifération des algues (producteurs) en surface.",
                "En mourant, les algues tombent au fond, où elles sont décomposées par des bactéries qui respirent et consomment beaucoup de dioxygène.",
                "Le dioxygène descend à 3 mg/L, sous le seuil d'environ 5 mg/L nécessaire à de nombreux poissons, qui meurent asphyxiés.",
                "Résultat : diminution d'environ 67 % ; c'est l'eutrophisation, une perturbation d'origine humaine.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Document 1 : des parcelles de prairie sont semées avec 1, 4 ou 16 espèces de plantes. Lors d'une sécheresse, leur production de biomasse baisse respectivement de 60 %, 35 % et 15 % par rapport à une année normale. Document 2 : le temps nécessaire pour retrouver la production d'avant la sécheresse est de 4 ans, 2 ans et 1 an. Document 3 : dans les parcelles à 16 espèces, certaines espèces à racines profondes, peu productives en année normale, deviennent dominantes pendant la sécheresse. Montrez que ces documents illustrent le rôle de la biodiversité dans la résilience d'un écosystème.",
              hint: "Distinguez deux aspects : la résistance (ampleur de la baisse, document 1) et le rétablissement (durée du retour à la normale, document 2), puis cherchez l'explication dans le document 3.",
              solution: [
                "Document 1 : plus la parcelle compte d'espèces, plus la baisse de production pendant la sécheresse est faible (60 % avec 1 espèce, 15 % avec 16). Les parcelles diversifiées résistent mieux à la perturbation.",
                "Document 2 : plus la parcelle est diversifiée, plus elle retrouve vite sa production (4 ans contre 1 an). Sa résilience est plus grande.",
                "Document 3 : dans les parcelles diversifiées, des espèces adaptées à la sécheresse (racines profondes) compensent la baisse des autres. Des espèces différentes remplissent la même fonction, la production de biomasse, mais réagissent différemment à la perturbation.",
                "Dans une parcelle à une seule espèce, aucune autre espèce ne peut prendre le relais si cette espèce souffre de la sécheresse.",
                "Conclusion : la biodiversité agit comme une assurance. Un écosystème riche en espèces résiste mieux aux perturbations et s'en remet plus vite, car la diversité des réponses des espèces maintient son fonctionnement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Équilibre et perturbations des écosystèmes.",
            statements: [
              { text: "Dans un écosystème en équilibre, l'effectif des populations ne varie pas.", true: false, why: "L'équilibre est dynamique : les effectifs fluctuent en permanence autour de valeurs moyennes." },
              { text: "Le pic d'effectif d'un prédateur suit en général celui de sa proie.", true: true, why: "Les prédateurs se multiplient quand les proies abondent, avec un décalage dans le temps." },
              { text: "Une perturbation est toujours d'origine humaine.", true: false, why: "Incendies dus à la foudre, tempêtes ou éruptions sont des perturbations naturelles." },
              { text: "Dans l'eutrophisation, ce sont surtout les bactéries décomposant les algues mortes qui consomment le dioxygène.", true: true, why: "Leur respiration, très intense quand les algues mortes abondent, épuise le dioxygène de l'eau." },
              { text: "Un écosystème peut toujours revenir à son état initial, quelle que soit la perturbation.", true: false, why: "Au-delà d'un seuil, il peut basculer durablement vers un autre état, souvent appauvri." },
              { text: "Après un incendie, la forêt se reconstitue par étapes, en commençant par des espèces pionnières.", true: true, why: "C'est la succession écologique : herbacées, puis arbustes, puis arbres pionniers, puis forêt mature." },
              { text: "Un écosystème pauvre en espèces résiste mieux aux perturbations.", true: false, why: "C'est l'inverse : la diversité des espèces permet à certaines de prendre le relais des autres." },
            ],
          },
          quiz: [
            {
              q: "Que signifie l'expression « équilibre dynamique » pour un écosystème ?",
              options: ["Les populations fluctuent autour de valeurs moyennes", "Aucun individu n'y naît ni n'y meurt pendant de longues années", "Il change complètement chaque année", "Les prédateurs y ont disparu"],
              answer: 0,
              why: "L'écosystème change sans cesse dans le détail mais garde ses grandes caractéristiques, ses populations oscillant autour de valeurs moyennes.",
            },
            {
              q: "Dans le cycle lynx-lièvre, le pic des lynx survient :",
              options: ["avant celui des lièvres", "en même temps que celui des lièvres", "jamais, les lynx restent constants", "après celui des lièvres"],
              answer: 3,
              why: "Les lynx se multiplient grâce à l'abondance des lièvres : leur pic suit celui de leurs proies.",
            },
            {
              q: "Laquelle de ces perturbations est d'origine naturelle ?",
              options: ["Le drainage d'un marais", "Un incendie dû à la foudre", "L'introduction du frelon asiatique", "L'épandage excessif d'engrais"],
              answer: 1,
              why: "La foudre est un phénomène naturel ; les autres perturbations résultent d'activités humaines.",
            },
            {
              q: "Qu'appelle-t-on résilience d'un écosystème ?",
              options: ["Son nombre total d'espèces", "Sa production annuelle de biomasse végétale et animale", "Sa capacité à se rétablir après une perturbation", "Sa surface"],
              answer: 2,
              why: "La résilience est la capacité à retrouver sa structure et son fonctionnement après une perturbation.",
            },
            {
              q: "Pourquoi la biodiversité augmente-t-elle la résilience d'un écosystème ?",
              options: ["Des espèces différentes peuvent prendre le relais", "Les espèces nombreuses empêchent toute perturbation", "Elle augmente la température du milieu", "Elle supprime la compétition"],
              answer: 0,
              why: "Plusieurs espèces remplissent la même fonction mais réagissent différemment : si l'une souffre, une autre maintient le fonctionnement.",
            },
          ],
          trap: "Confondre équilibre et immobilité : un écosystème en équilibre n'est pas figé, ses populations fluctuent sans cesse. Autre erreur : croire que l'écosystème revient toujours à son état initial, alors qu'il peut basculer au-delà d'un seuil.",
          method: "Pour analyser des courbes de proies et de prédateurs, repérez d'abord les maximums de chaque courbe et mesurez leur décalage, puis découpez la période en phases et expliquez chacune par une phrase du type « quand X augmente, alors Y... » ; concluez sur la régulation mutuelle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'services-ecosystemiques',
          title: 'L’humanité et les services écosystémiques',
          minutes: 30,
          objectives: [
            "Définir un service écosystémique et classer les services en services d'approvisionnement, de régulation, culturels et de soutien.",
            "Identifier, sur les exemples de la forêt et des pollinisateurs, les bénéfices que l'humanité tire du fonctionnement des écosystèmes.",
            "Expliquer comment certaines activités humaines dégradent ces services et comment des pratiques de gestion (protection, agroécologie, ingénierie écologique) peuvent les préserver.",
            "Argumenter un choix de gestion d'un écosystème à partir de documents, en confrontant critères scientifiques, économiques et sociaux.",
          ],
          course: [
            {
              heading: "Des bénéfices tirés des écosystèmes",
              paragraphs: [
                "Les services écosystémiques sont les bénéfices que les sociétés humaines tirent du fonctionnement des écosystèmes. L'Évaluation des écosystèmes pour le millénaire, un vaste bilan international publié en 2005 sous l'égide des Nations unies, les a classés en quatre catégories.",
                "Les services d'approvisionnement fournissent des produits : nourriture, bois, fibres, eau douce, molécules utilisées comme médicaments. Les services de régulation contrôlent des processus naturels : stockage du carbone, qui limite le changement climatique, épuration de l'eau, régulation des crues, pollinisation des cultures, contrôle des ravageurs par leurs prédateurs, protection des sols contre l'érosion. Les services culturels apportent des bénéfices non matériels : loisirs, beauté des paysages, valeurs spirituelles, éducation. Les services de soutien, enfin, sont nécessaires à tous les autres : formation des sols, production de matière organique par la photosynthèse, recyclage des éléments nutritifs.",
              ],
              box: { label: "Définition", text: "Un service écosystémique est un bénéfice que l'humanité tire du fonctionnement d'un écosystème. Quatre catégories : approvisionnement, régulation, culturels, soutien." },
            },
            {
              heading: "Deux exemples : la forêt et les pollinisateurs",
              paragraphs: [
                "Une forêt fournit du bois et des aliments (approvisionnement). Elle stocke du carbone dans le bois et dans le sol, régule l'écoulement de l'eau, la filtre et protège les sols de l'érosion ; en montagne, certaines forêts protègent les villages des avalanches et des chutes de pierres (régulation). Elle offre des lieux de promenade et des paysages (services culturels), et elle abrite une grande partie de la biodiversité terrestre.",
                "La pollinisation par les animaux (abeilles domestiques et sauvages, bourdons, syrphes, papillons) est un service de régulation essentiel à l'agriculture. Selon l'évaluation publiée en 2016 par l'IPBES, la plateforme scientifique internationale sur la biodiversité, plus de 75 % des principaux types de cultures alimentaires mondiales bénéficient, au moins en partie, de la pollinisation animale. Or les pollinisateurs déclinent, sous l'effet de la disparition de leurs habitats, de certains pesticides, de maladies et de parasites.",
              ],
            },
            {
              heading: "Des services menacés par les activités humaines",
              paragraphs: [
                "En 2019, l'IPBES a estimé qu'environ un million d'espèces animales et végétales sont menacées d'extinction. Elle a identifié cinq causes principales de cette érosion de la biodiversité : les changements d'usage des terres et de la mer (déforestation, urbanisation, assèchement des zones humides), l'exploitation directe des êtres vivants (chasse, pêche), le changement climatique, les pollutions et les espèces exotiques envahissantes.",
                "La dégradation des écosystèmes réduit les services qu'ils rendent. La déforestation favorise l'érosion et les inondations et libère du carbone ; l'assèchement d'une zone humide fait perdre sa capacité à épurer l'eau et à amortir les crues. La surpêche peut effondrer une ressource : au large de Terre-Neuve, au Canada, l'effondrement des stocks de morue a conduit en 1992 à un moratoire sur sa pêche, et les stocks peinent à se reconstituer.",
              ],
            },
            {
              heading: "Gérer durablement : protéger, restaurer, remplacer ?",
              paragraphs: [
                "Plusieurs stratégies permettent de préserver les services écosystémiques. On peut protéger des espaces (parcs nationaux, réserves naturelles, aires marines protégées). On peut pratiquer l'agroécologie, qui s'appuie sur les interactions du vivant : des haies abritent des auxiliaires des cultures (oiseaux insectivores, coccinelles et syrphes dont les larves dévorent les pucerons), les rotations avec des légumineuses enrichissent le sol en azote, la couverture permanente du sol limite l'érosion. L'ingénierie écologique restaure des écosystèmes dégradés : remise en eau de zones humides, renaturation de rivières, passes à poissons.",
                "Remplacer un service par une technique est souvent plus coûteux. Dans les années 1990, la ville de New York a choisi de protéger les forêts et les terres agricoles du bassin versant des Catskills, d'où provient une grande partie de son eau potable, plutôt que de construire une usine de filtration, beaucoup plus chère. Donner une valeur économique aux services aide à prendre des décisions, mais a ses limites : la valeur culturelle d'un paysage ou la disparition irréversible d'une espèce se prêtent mal à un prix.",
              ],
              box: { label: "À retenir", text: "Protéger, gérer durablement (agroécologie) ou restaurer (ingénierie écologique) les écosystèmes coûte souvent moins cher que de remplacer leurs services par des techniques. Les décisions de gestion combinent arguments scientifiques, économiques et sociaux." },
            },
          ],
          keyPoints: [
            "Service écosystémique : bénéfice que l'humanité tire du fonctionnement d'un écosystème.",
            "Quatre catégories : approvisionnement (bois, nourriture), régulation (pollinisation, épuration, carbone), culturels (loisirs, paysages), soutien (sols, photosynthèse).",
            "Plus de 75 % des principaux types de cultures alimentaires bénéficient au moins en partie de la pollinisation animale (IPBES, 2016).",
            "Principales causes de dégradation : usage des terres et de la mer, exploitation directe, climat, pollutions, espèces envahissantes (IPBES, 2019).",
            "Gestion durable : aires protégées, agroécologie (haies, rotations), ingénierie écologique ; remplacer un service coûte souvent plus cher.",
          ],
          example: {
            statement: "Une zone humide (un marais de fond de vallée) rend plusieurs services. Classez chacun dans sa catégorie : (a) elle stocke l'eau lors des crues et la restitue lentement ; (b) on y fait paître des bovins ; (c) ses plantes et ses bactéries retiennent une partie des nitrates de l'eau ; (d) des écoles y organisent des sorties d'observation des oiseaux ; (e) la matière organique s'y accumule et forme un sol riche (tourbe).",
            solution: [
              "(a) Régulation des crues : service de régulation.",
              "(b) Production de fourrage pour le bétail : service d'approvisionnement.",
              "(c) Épuration de l'eau : service de régulation.",
              "(d) Éducation et loisirs : service culturel.",
              "(e) Formation du sol et recyclage de la matière : service de soutien.",
              "Réponse : un même écosystème rend des services des quatre catégories ; l'assécher pour le cultiver ferait gagner un service d'approvisionnement mais perdre la plupart des autres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les services suivants dans les quatre catégories (approvisionnement, régulation, culturel, soutien) : (a) production de bois de chauffage ; (b) pollinisation des vergers par les abeilles sauvages ; (c) randonnée en forêt ; (d) formation des sols par les décomposeurs ; (e) pêche en rivière ; (f) stockage du carbone par une tourbière.",
              hint: "Demandez-vous si le service fournit un produit, contrôle un processus, apporte un bénéfice non matériel, ou rend possibles tous les autres.",
              solution: [
                "(a) Approvisionnement : un produit, le bois.",
                "(b) Régulation : contrôle d'un processus, la pollinisation, dont dépend la production de fruits.",
                "(c) Culturel : bénéfice non matériel (loisir, bien-être).",
                "(d) Soutien : la formation des sols est nécessaire à presque tous les autres services.",
                "(e) Approvisionnement : un produit, le poisson.",
                "(f) Régulation : régulation du climat par le stockage du carbone.",
                "Résultat : approvisionnement (a, e), régulation (b, f), culturel (c), soutien (d).",
              ],
            },
            {
              level: 2,
              statement: "Une commune doit réduire la teneur en nitrates de l'eau d'une rivière (données fictives). Option 1 : restaurer une zone humide en amont, pour un coût de 2 millions d'euros, puis 50 000 euros d'entretien par an. Option 2 : construire une station de traitement pour 8 millions d'euros, puis 300 000 euros de fonctionnement par an. Les deux options épurent l'eau de façon comparable. (1) Calculez le coût total de chaque option sur 20 ans. (2) Quels autres arguments peuvent intervenir dans le choix ?",
              hint: "Coût total = coût initial + coût annuel × nombre d'années.",
              solution: [
                "(1) Option 1 : 2 000 000 + 50 000 × 20 = 2 000 000 + 1 000 000 = 3 000 000 euros.",
                "Option 2 : 8 000 000 + 300 000 × 20 = 8 000 000 + 6 000 000 = 14 000 000 euros.",
                "L'option 2 coûte 14 ÷ 3 ≈ 4,7 fois plus cher que l'option 1 sur 20 ans.",
                "(2) La zone humide rend d'autres services que l'épuration : régulation des crues, habitat pour la biodiversité, loisirs et éducation. Il faut aussi considérer la surface de terrain nécessaire (agricole peut-être), le délai avant que la zone humide soit efficace, et l'acceptation par les habitants et les agriculteurs.",
                "Résultat : 3 millions d'euros pour la zone humide contre 14 millions pour la station ; la restauration est plus économique et rend des services supplémentaires, mais le choix dépend aussi de critères sociaux et locaux.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Une région agricole envisage de replanter des haies entre ses champs de blé. Document 1 : nombre moyen de pucerons par épi de blé : 5 à moins de 50 m d'une haie, 30 à plus de 200 m de toute haie. Document 2 : nombre de larves de coccinelles et de syrphes (prédatrices de pucerons) par m² : 12 près des haies, 2 loin des haies. Document 3 : les haies occupent environ 4 % de la surface ; le rendement par hectare cultivé est un peu plus élevé dans les champs bordés de haies, et l'érosion du sol par le ruissellement y est nettement plus faible. Argumentez en faveur ou non de la replantation de haies, en identifiant les services écosystémiques en jeu.",
              hint: "Reliez les documents 1 et 2 par une interaction entre êtres vivants, puis faites le bilan des avantages et des inconvénients avec le document 3.",
              solution: [
                "Documents 1 et 2 : près des haies, les pucerons sont six fois moins nombreux (5 contre 30 par épi), alors que leurs prédateurs, coccinelles et syrphes, sont six fois plus nombreux (12 contre 2 par m²). Les haies abritent ces auxiliaires, qui consomment les pucerons : c'est une relation de prédation utilisée au profit des cultures.",
                "Il s'agit d'un service de régulation (contrôle des ravageurs), qui peut permettre de réduire l'usage d'insecticides.",
                "Document 3 : les haies réduisent l'érosion des sols, autre service de régulation, et préservent la fertilité des champs (service de soutien).",
                "Inconvénient : les haies occupent environ 4 % de la surface, qui n'est plus cultivée. Mais le rendement par hectare cultivé est un peu plus élevé, ce qui compense au moins en partie cette perte.",
                "Les haies offrent en outre un habitat à de nombreuses espèces (pollinisateurs, oiseaux) et embellissent le paysage (service culturel).",
                "Conclusion : d'après ces documents, replanter des haies est une pratique agroécologique favorable : elle mobilise des services de régulation (lutte biologique, protection des sols) pour un faible coût en surface. La décision devra toutefois tenir compte du coût de plantation et d'entretien, et de l'avis des agriculteurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à l'exemple qui l'illustre.",
            pairs: [
              { left: "Service d'approvisionnement", right: "Le bois et les poissons" },
              { left: "Service de régulation", right: "La pollinisation et l'épuration de l'eau" },
              { left: "Service culturel", right: "La randonnée et la beauté des paysages" },
              { left: "Service de soutien", right: "La formation des sols et le recyclage des nutriments" },
              { left: "Agroécologie", right: "Replanter des haies pour abriter des auxiliaires" },
              { left: "Ingénierie écologique", right: "Remettre en eau une zone humide asséchée" },
            ],
          },
          quiz: [
            {
              q: "La pollinisation des cultures par les abeilles est un service :",
              options: ["d'approvisionnement", "culturel", "de soutien", "de régulation"],
              answer: 3,
              why: "La pollinisation est un processus naturel qui contrôle la production de fruits et de graines : c'est un service de régulation.",
            },
            {
              q: "Quelle est, selon l'IPBES (2019), l'une des principales causes de l'érosion de la biodiversité ?",
              options: ["Les changements d'usage des terres et de la mer", "La hausse du nombre de parcs nationaux et de réserves naturelles", "L'augmentation du nombre de haies", "La diminution des pesticides"],
              answer: 0,
              why: "Déforestation, urbanisation, assèchement des zones humides : les changements d'usage des terres et de la mer figurent en tête des causes identifiées.",
            },
            {
              q: "Pourquoi une haie peut-elle réduire les dégâts des pucerons dans un champ voisin ?",
              options: ["Elle produit un insecticide naturel", "Elle abrite des prédateurs des pucerons", "Elle empêche le vent d'apporter de la pluie", "Elle fait de l'ombre aux pucerons"],
              answer: 1,
              why: "Les haies abritent des auxiliaires (coccinelles, syrphes, oiseaux) qui consomment les pucerons : c'est un service de régulation.",
            },
            {
              q: "La formation des sols est classée parmi les services :",
              options: ["culturels", "d'approvisionnement", "de soutien", "de régulation des crues"],
              answer: 2,
              why: "Les services de soutien, comme la formation des sols, sont nécessaires à tous les autres services.",
            },
            {
              q: "Pourquoi la ville de New York a-t-elle protégé le bassin versant des Catskills ?",
              options: ["Pour y construire une grande usine de filtration de l'eau", "Pour y développer l'urbanisation", "Pour y interdire toute présence humaine et agricole", "Pour préserver l'épuration naturelle de l'eau"],
              answer: 3,
              why: "Protéger forêts et terres agricoles qui épurent naturellement l'eau revenait beaucoup moins cher que construire et faire fonctionner une usine de filtration.",
            },
          ],
          trap: "Confondre les catégories de services, en particulier régulation et approvisionnement : un service d'approvisionnement fournit un produit (bois, poisson), un service de régulation contrôle un processus (pollinisation, épuration, crues). Autre erreur : ne voir dans un écosystème qu'un seul service, alors qu'il en rend toujours plusieurs à la fois.",
          method: "Dans une argumentation sur la gestion d'un écosystème, construisez un tableau des avantages et des inconvénients pour chaque option, en nommant les services écosystémiques concernés et en chiffrant ce qui peut l'être ; concluez par un choix justifié qui mentionne aussi ses limites.",
        },
      ],
    },
  ],
}
