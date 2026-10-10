import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-tle',
  chapters: [
    /* ==================================================================== */
    /* LE TEMPS ET LES ROCHES                                                 */
    /* ==================================================================== */
    {
      id: 'temps-et-roches',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'datation-relative',
          title: 'La datation relative : principes et chronologie',
          minutes: 30,
          objectives: [
            "Appliquer les principes de superposition, de continuité, de recoupement et d'inclusion pour ordonner des événements géologiques.",
            "Utiliser le principe d'identité paléontologique et les fossiles stratigraphiques pour corréler des terrains éloignés.",
            "Identifier une discordance et une lacune de sédimentation dans une coupe ou un paysage.",
            "Rédiger la chronologie relative d'une coupe géologique, de l'événement le plus ancien au plus récent.",
          ],
          course: [
            {
              heading: "Dater sans chiffres : l'idée de chronologie relative",
              paragraphs: [
                "Dater un événement géologique de façon relative, c'est le situer avant ou après un autre, sans lui attribuer d'âge chiffré. On obtient ainsi une succession ordonnée : le dépôt d'une couche, un plissement, le jeu d'une faille, la mise en place d'un granite, une phase d'érosion. Cette démarche, développée dès le XVIIe siècle par Nicolas Sténon puis au XIXe siècle par les géologues stratigraphes, repose sur quelques principes simples, appliqués aux roches et aux structures observées sur le terrain ou sur une coupe.",
                "Ces principes s'appuient sur le principe d'actualisme : les phénomènes qui se déroulent aujourd'hui (sédimentation dans un lac, érosion par une rivière, intrusion d'un magma) se déroulaient de la même manière dans le passé. On peut donc interpréter les roches anciennes en observant les processus actuels.",
              ],
            },
            {
              heading: "Superposition et continuité",
              paragraphs: [
                "Le principe de superposition énonce qu'une couche sédimentaire (une strate) est plus récente que celle qu'elle recouvre et plus ancienne que celle qui la recouvre. Il découle de la façon dont se forment les sédiments : ils se déposent en couches horizontales, les unes sur les autres, au fond d'un bassin. Ce principe ne s'applique qu'à des séries non retournées : un pli couché peut inverser l'ordre des couches. Des figures sédimentaires (rides de courant, granoclassement, fentes de dessiccation) permettent alors de repérer la base et le sommet d'une couche.",
                "Le principe de continuité énonce qu'une même couche, limitée par le même toit et le même mur (sa surface supérieure et sa surface inférieure), a le même âge sur toute son étendue. Il permet de suivre une strate de part et d'autre d'une vallée ou d'une faille. Il trouve ses limites quand la nature du dépôt change latéralement (passage d'un sable côtier à une argile plus au large, au même moment).",
              ],
              box: { label: "Principe", text: "Superposition : une couche est plus récente que celle qu'elle recouvre (en l'absence de renversement). Continuité : une couche délimitée par le même toit et le même mur a le même âge en tout point." },
            },
            {
              heading: "Recoupement et inclusion",
              paragraphs: [
                "Le principe de recoupement énonce qu'une structure qui en recoupe une autre lui est postérieure. Une faille qui décale trois couches est plus récente que ces trois couches. Un filon de basalte qui traverse une série sédimentaire s'est mis en place après le dépôt de celle-ci. Un pluton de granite qui recoupe des couches plissées est postérieur au plissement. Une surface d'érosion qui tronque des couches est, elle aussi, postérieure à ces couches.",
                "Le principe d'inclusion énonce que les éléments inclus dans une roche (galets, fragments, enclaves) sont plus anciens que la roche qui les contient. Un conglomérat qui renferme des galets de granite s'est formé après le granite, qui a dû être mis à l'affleurement puis érodé. Une enclave de roche encaissante dans un granite prouve que l'encaissant existait avant la mise en place du magma.",
              ],
              box: { label: "Principe", text: "Recoupement : une structure (faille, filon, pluton, surface d'érosion) qui recoupe des terrains est plus récente qu'eux. Inclusion : un élément inclus dans une roche est plus ancien que cette roche." },
            },
            {
              heading: "Discordance et lacune",
              paragraphs: [
                "Une discordance angulaire s'observe lorsqu'une série de couches horizontales repose sur des couches inclinées ou plissées, tronquées par une surface d'érosion. Elle enregistre une histoire en quatre temps : dépôt de la série inférieure, déformation (plissement ou basculement) avec émersion, érosion, puis retour de la mer ou du lac et dépôt de la série supérieure. La surface de discordance est souvent soulignée par un conglomérat de base.",
                "Une lacune est une absence de dépôt correspondant à une durée donnée, soit parce que la région était émergée et qu'il n'y avait pas de sédimentation, soit parce que les couches déposées ont été érodées. On la repère quand des fossiles caractéristiques d'une période manquent entre deux couches. Une discordance s'accompagne toujours d'une lacune, mais une lacune peut exister sans discordance visible.",
              ],
            },
            {
              heading: "Le principe d'identité paléontologique",
              paragraphs: [
                "Le principe d'identité paléontologique énonce que deux couches qui contiennent les mêmes fossiles stratigraphiques ont le même âge, même si elles sont très éloignées l'une de l'autre et de nature différente. Il permet de corréler des terrains situés dans des régions ou des continents différents, là où le principe de continuité ne s'applique plus.",
                "Un bon fossile stratigraphique appartient à une espèce qui a vécu peu de temps (quelques centaines de milliers d'années à quelques millions d'années), qui était abondante et largement répartie géographiquement, et qui se fossilisait facilement. Les ammonites du Mésozoïque, les trilobites et les graptolites du Paléozoïque, les foraminifères ou les pollens en sont de bons exemples. À l'inverse, une espèce qui a duré des centaines de millions d'années, comme certains brachiopodes, est un mauvais marqueur de temps.",
              ],
              box: { label: "Définition", text: "Fossile stratigraphique : fossile d'une espèce à courte durée d'existence, à large répartition géographique et abondante, qui permet de dater relativement une couche et de la corréler avec d'autres." },
            },
          ],
          keyPoints: [
            "La datation relative ordonne les événements (avant, après) sans leur donner d'âge chiffré.",
            "Superposition : une couche est plus récente que celle qu'elle recouvre, si la série n'est pas renversée.",
            "Continuité : une couche de même toit et même mur a le même âge partout.",
            "Recoupement : faille, filon, pluton ou surface d'érosion sont postérieurs aux terrains qu'ils recoupent.",
            "Inclusion : un galet ou une enclave est plus ancien que la roche qui le contient.",
            "Identité paléontologique : mêmes fossiles stratigraphiques, même âge, même à grande distance.",
            "Une discordance angulaire traduit dépôt, déformation, érosion puis nouveau dépôt ; elle implique une lacune.",
          ],
          example: {
            statement: "Une coupe montre, de bas en haut, trois couches sédimentaires A, B et C inclinées et décalées par une faille F. Une surface d'érosion tronque A, B, C et la faille F. Au-dessus, une couche D horizontale contient des galets de la couche C. Enfin, un filon de basalte G traverse toutes les couches, D comprise. Établissez la chronologie relative de ces événements.",
            solution: [
              "Superposition : A, B et C se sont déposées dans cet ordre, A étant la plus ancienne.",
              "Les couches sont inclinées : un basculement (déformation) a eu lieu après leur dépôt.",
              "Recoupement : la faille F décale A, B et C, elle est donc postérieure à C. La surface d'érosion tronque la faille F : l'érosion est postérieure au jeu de la faille.",
              "D repose en discordance sur la surface d'érosion et contient des galets de C (inclusion) : D est postérieure à l'érosion et à C.",
              "Recoupement : le filon G traverse D, il est donc le plus récent.",
              "Chronologie : dépôt de A, puis B, puis C ; basculement et jeu de la faille F ; émersion et érosion ; dépôt de D ; mise en place du filon G.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque observation, nommez le principe de datation relative utilisé et concluez. a) Un filon de granite traverse une couche de calcaire. b) Un conglomérat contient des galets de basalte. c) Dans une série non renversée, un grès repose sur une argile. d) Une même ammonite est trouvée dans un calcaire du Jura et dans une marne d'Angleterre.",
              hint: "Demandez-vous à chaque fois : est-ce une couche sur une autre, une structure qui en coupe une autre, un élément contenu dans une roche, ou des fossiles communs ?",
              solution: [
                "a) Principe de recoupement : le filon de granite est postérieur au calcaire qu'il traverse.",
                "b) Principe d'inclusion : le basalte est plus ancien que le conglomérat qui en contient des galets.",
                "c) Principe de superposition : le grès est plus récent que l'argile qu'il recouvre.",
                "d) Principe d'identité paléontologique : si cette ammonite est un fossile stratigraphique, le calcaire du Jura et la marne d'Angleterre ont le même âge.",
              ],
            },
            {
              level: 2,
              statement: "Dans une falaise, des couches de schistes S1 et S2 (S1 en dessous) sont plissées. Un granite γ recoupe les plis et contient des enclaves de schiste. Une surface d'érosion horizontale tronque les schistes plissés et le granite. Au-dessus reposent des grès horizontaux H, dont la base contient des galets de granite. 1) Établissez la chronologie relative. 2) Nommez la structure qui sépare les schistes des grès et expliquez ce qu'elle implique.",
              hint: "Repérez les relations de recoupement (granite, surface d'érosion) et d'inclusion (enclaves, galets), puis remettez tout dans l'ordre.",
              solution: [
                "Superposition : S1 s'est déposé avant S2.",
                "Les schistes sont plissés : le plissement est postérieur au dépôt de S2.",
                "Recoupement et inclusion : le granite recoupe les plis et contient des enclaves de schiste, il s'est donc mis en place après le plissement.",
                "Recoupement : la surface d'érosion tronque schistes et granite ; le granite a donc été mis à l'affleurement puis érodé.",
                "Inclusion : les galets de granite dans la base de H montrent que H s'est déposé après l'érosion du granite.",
                "1) Chronologie : dépôt de S1, dépôt de S2, plissement, mise en place du granite, érosion, dépôt des grès H.",
                "2) C'est une discordance angulaire. Elle implique une lacune : entre la mise en place du granite et le dépôt de H, la région a été émergée et érodée pendant une durée que la coupe ne permet pas de chiffrer.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Deux affleurements distants de 300 km sont étudiés. Affleurement 1, de bas en haut : calcaire à ammonites de l'espèce X, argile à ammonites de l'espèce Y, grès sans fossile. Affleurement 2, de bas en haut : marne à ammonites X, calcaire à ammonites Z, marne à ammonites Y. On sait que X, Y et Z sont de bons fossiles stratigraphiques et que les deux séries ne sont pas renversées. Montrez, à partir de ces données et de vos connaissances, que l'affleurement 1 présente une lacune, et situez-la.",
              hint: "Corrélez les couches de même contenu fossile entre les deux affleurements, puis comparez la succession des espèces.",
              solution: [
                "Identité paléontologique : le calcaire à X (affleurement 1) et la marne à X (affleurement 2) ont le même âge ; de même, l'argile à Y et la marne à Y ont le même âge.",
                "Superposition dans l'affleurement 2 : la couche à Z est située entre les couches à X et à Y ; l'espèce Z a donc vécu après X et avant Y.",
                "Dans l'affleurement 1, la couche à Y repose directement sur la couche à X : aucun dépôt contenant Z n'est présent.",
                "Il manque donc, dans l'affleurement 1, l'intervalle de temps correspondant à l'espèce Z : c'est une lacune, entre le calcaire à X et l'argile à Y.",
                "Cette lacune peut s'expliquer soit par une absence de dépôt (région émergée à cette époque), soit par l'érosion de la couche à Z avant le dépôt de l'argile.",
                "Conclusion : l'affleurement 1 présente une lacune située entre le calcaire à X et l'argile à Y, correspondant à l'époque de l'ammonite Z.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Une coupe montre des couches inclinées A (en bas) et B, tronquées par une surface d'érosion, puis une couche horizontale C, le tout traversé par un filon. Rangez les événements du plus ancien au plus récent.",
            items: [
              "Dépôt de la couche A",
              "Dépôt de la couche B",
              "Basculement des couches A et B",
              "Érosion qui tronque A et B",
              "Dépôt de la couche horizontale C",
              "Mise en place du filon qui traverse A, B et C",
            ],
          },
          quiz: [
            {
              q: "Un filon de basalte traverse une couche de grès. Que peut-on en conclure ?",
              options: ["Le filon est plus ancien que le grès", "Le filon est plus récent que le grès", "Les deux ont le même âge", "On ne peut rien conclure"],
              answer: 1,
              why: "D'après le principe de recoupement, une structure qui en recoupe une autre lui est postérieure.",
            },
            {
              q: "Quelle caractéristique fait un bon fossile stratigraphique ?",
              options: ["Une espèce présente sur une très longue durée", "Une espèce rare, connue dans un seul gisement d'une seule région du monde", "Une espèce abondante, répandue et de courte durée d'existence", "Une espèce encore vivante aujourd'hui"],
              answer: 2,
              why: "Une espèce qui a vécu peu de temps date précisément la couche, et sa large répartition permet des corrélations à grande distance.",
            },
            {
              q: "Dans quel cas le principe de superposition ne peut-il pas être appliqué directement ?",
              options: ["Dans une série renversée par un pli couché", "Dans une série horizontale déposée régulièrement en milieu marin", "Dans une série riche en fossiles", "Dans une série de roches calcaires"],
              answer: 0,
              why: "Un pli couché retourne les couches : la plus ancienne peut alors se trouver au-dessus.",
            },
            {
              q: "Un conglomérat contient des galets de granite. Le granite est :",
              options: ["plus récent que le conglomérat", "du même âge que le conglomérat", "d'âge impossible à situer", "plus ancien que le conglomérat"],
              answer: 3,
              why: "Principe d'inclusion : le granite existait, a été érodé et ses galets ont été incorporés au conglomérat.",
            },
            {
              q: "Que traduit une discordance angulaire ?",
              options: ["Un dépôt continu sans interruption", "Dépôt, déformation, érosion puis nouveau dépôt", "Une simple variation latérale de faciès", "Le simple passage d'une faille récente à travers les couches"],
              answer: 1,
              why: "Des couches horizontales reposent sur des couches déformées et érodées : une longue histoire s'est écoulée entre les deux séries.",
            },
          ],
          trap: "Appliquer la superposition sans vérifier que la série n'est pas renversée, ou oublier qu'une faille ou une surface d'érosion est elle-même un événement à placer dans la chronologie.",
          method: "Sur une coupe, commencez par la série la plus basse non recoupée, puis lisez chaque contact en nommant le principe utilisé (« d'après le principe de recoupement, ... »). Vérifiez à la fin que chaque élément de la coupe, y compris les surfaces d'érosion, figure dans votre chronologie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'datation-absolue',
          title: 'La datation absolue par radiochronologie',
          minutes: 35,
          objectives: [
            "Expliquer le principe de la décroissance radioactive et la notion de demi-vie.",
            "Calculer l'âge d'un échantillon à partir de la loi de décroissance, avec les couples carbone 14, potassium-argon ou rubidium-strontium.",
            "Exploiter une droite isochrone pour déterminer l'âge d'une roche.",
            "Choisir le chronomètre adapté à l'âge supposé et à la nature de l'échantillon, en tenant compte de la fermeture du système.",
          ],
          course: [
            {
              heading: "La décroissance radioactive, une horloge naturelle",
              paragraphs: [
                "Certains atomes ont un noyau instable : ce sont des isotopes radioactifs, ou isotopes pères. Ils se désintègrent spontanément en un autre isotope, l'isotope fils, stable ou non. Ainsi le carbone 14 (¹⁴C) se transforme en azote 14, le potassium 40 (⁴⁰K) en partie en argon 40, le rubidium 87 (⁸⁷Rb) en strontium 87, l'uranium 238 (²³⁸U) en plomb 206 au terme d'une série de désintégrations.",
                "La désintégration d'un atome donné est aléatoire, mais à l'échelle d'un très grand nombre d'atomes, la quantité d'isotope père diminue selon une loi exponentielle, indépendante de la température, de la pression ou de la nature chimique de la roche. Chaque isotope a sa constante de désintégration λ, qui caractérise la vitesse de la désintégration. C'est cette régularité qui fait de la radioactivité un chronomètre.",
              ],
              box: { label: "Formule", text: "N(t) = N₀ × e^(-λt), où N₀ est le nombre d'atomes pères au départ et N(t) le nombre restant après une durée t. Demi-vie : T = ln 2 ÷ λ. On en tire t = (1 ÷ λ) × ln(N₀ ÷ N)." },
            },
            {
              heading: "Demi-vie et choix du chronomètre",
              paragraphs: [
                "La demi-vie (ou période) T est la durée au bout de laquelle la moitié des atomes pères présents s'est désintégrée. Après une demi-vie il en reste ½, après deux demi-vies ¼, après trois ⅛, et ainsi de suite. Au-delà d'une dizaine de demi-vies, il reste trop peu d'isotope père pour une mesure fiable ; à l'inverse, si l'échantillon est très jeune par rapport à T, trop peu d'isotope fils s'est formé.",
                "On choisit donc un chronomètre dont la demi-vie est adaptée à l'âge recherché. Le carbone 14 (T = 5 730 ans) date des restes organiques jusqu'à environ 50 000 ans. Le couple potassium-argon (T du ⁴⁰K ≈ 1,25 milliard d'années) date des roches volcaniques de quelques centaines de milliers d'années à plusieurs milliards d'années. Le couple rubidium-strontium (T ≈ 48,8 milliards d'années) et le couple uranium-plomb (T du ²³⁸U ≈ 4,47 milliards d'années) datent les roches magmatiques et métamorphiques anciennes, jusqu'aux plus vieux minéraux terrestres.",
              ],
            },
            {
              heading: "La fermeture du système : quel événement date-t-on ?",
              paragraphs: [
                "Un chronomètre ne démarre qu'au moment où le système se ferme, c'est-à-dire quand il n'échange plus d'atomes pères ni d'atomes fils avec l'extérieur. Pour un minéral magmatique, la fermeture correspond au refroidissement sous une certaine température, dite température de fermeture : on date alors la cristallisation de la roche. Pour un être vivant, la fermeture correspond à sa mort : il cesse alors d'échanger du carbone avec l'atmosphère.",
                "Le couple potassium-argon en donne un bon exemple. L'argon est un gaz : tant que la lave est liquide, il s'échappe et sa quantité initiale est nulle. Une fois la roche cristallisée, l'argon 40 produit reste piégé. Si la roche est ensuite réchauffée (métamorphisme), l'argon peut s'échapper de nouveau et le chronomètre est remis à zéro : l'âge obtenu est alors celui du dernier refroidissement.",
              ],
              box: { label: "À retenir", text: "La radiochronologie date la fermeture du système : la cristallisation d'un minéral, le refroidissement d'une roche sous sa température de fermeture, ou la mort d'un organisme pour le carbone 14." },
            },
            {
              heading: "Le carbone 14 et le couple potassium-argon",
              paragraphs: [
                "Le carbone 14 est produit en permanence dans la haute atmosphère. Un être vivant échange du carbone avec son milieu et garde, de son vivant, une proportion de ¹⁴C à peu près égale à celle de l'atmosphère, qui sert de valeur N₀. À sa mort, les échanges cessent et le ¹⁴C décroît. En mesurant la proportion restante, on obtient t = (T ÷ ln 2) × ln(N₀ ÷ N). La méthode est utilisée pour les bois, les charbons, les os ou les coquilles.",
                "Pour le couple potassium-argon, la quantité d'argon 40 initiale est nulle et l'on mesure le rapport ⁴⁰Ar/⁴⁰K actuel. Comme le potassium 40 se désintègre aussi en calcium 40, seule une fraction des désintégrations donne de l'argon, ce qu'intègre la formule utilisée : t = (1 ÷ λ) × ln(1 + 9,54 × ⁴⁰Ar/⁴⁰K), avec 1 ÷ λ ≈ 1,804 × 10⁹ ans. La méthode est bien adaptée aux laves et aux cendres volcaniques.",
              ],
            },
            {
              heading: "Le couple rubidium-strontium et la droite isochrone",
              paragraphs: [
                "Une roche magmatique contient au départ une quantité inconnue de strontium 87. On contourne la difficulté en comparant plusieurs minéraux d'une même roche, formés en même temps à partir du même magma. On rapporte tout à un isotope stable non radiogénique, le strontium 86. À la cristallisation, tous les minéraux ont le même rapport ⁸⁷Sr/⁸⁶Sr (le magma est homogène) mais des rapports ⁸⁷Rb/⁸⁶Sr différents, car ils incorporent plus ou moins de rubidium.",
                "Au cours du temps, chaque minéral perd du ⁸⁷Rb et gagne autant de ⁸⁷Sr. Les points représentant les minéraux dans un graphique ⁸⁷Sr/⁸⁶Sr en fonction de ⁸⁷Rb/⁸⁶Sr restent alignés sur une droite, l'isochrone, dont la pente augmente avec le temps. L'ordonnée à l'origine donne le rapport ⁸⁷Sr/⁸⁶Sr initial, et la pente a donne l'âge : a = e^(λt) - 1, donc t = ln(a + 1) ÷ λ, avec λ = 1,42 × 10⁻¹¹ par an. Si les points ne sont pas alignés, le système n'est pas resté fermé et la roche n'est pas datable ainsi.",
              ],
              box: { label: "Formule", text: "Isochrone Rb/Sr : ⁸⁷Sr/⁸⁶Sr = (⁸⁷Sr/⁸⁶Sr)₀ + a × ⁸⁷Rb/⁸⁶Sr, avec a = e^(λt) - 1. L'âge vaut t = ln(a + 1) ÷ λ, λ = 1,42 × 10⁻¹¹ an⁻¹." },
            },
          ],
          keyPoints: [
            "La quantité d'isotope père décroît selon N = N₀ × e^(-λt), indépendamment des conditions du milieu.",
            "Demi-vie T = ln 2 ÷ λ : après n demi-vies, il reste N₀ ÷ 2ⁿ atomes pères.",
            "Carbone 14 (T = 5 730 ans) : restes organiques jusqu'à environ 50 000 ans ; on date la mort de l'organisme.",
            "K/Ar : argon initial nul, adapté aux roches volcaniques ; Rb/Sr et U/Pb : roches anciennes.",
            "On date la fermeture du système : cristallisation ou refroidissement d'une roche, mort d'un être vivant.",
            "Isochrone Rb/Sr : points alignés, pente a, âge t = ln(a + 1) ÷ λ ; ordonnée à l'origine = rapport initial.",
          ],
          example: {
            statement: "Un fragment d'os trouvé dans une grotte contient 30 % de la quantité de carbone 14 présente dans un organisme vivant. Calculez son âge (demi-vie du ¹⁴C : T = 5 730 ans).",
            solution: [
              "La méthode convient : il s'agit d'un reste organique, a priori de moins de 50 000 ans.",
              "La loi de décroissance donne t = (T ÷ ln 2) × ln(N₀ ÷ N).",
              "Ici N ÷ N₀ = 0,30, donc N₀ ÷ N = 1 ÷ 0,30 ≈ 3,33.",
              "T ÷ ln 2 = 5 730 ÷ 0,693 ≈ 8 267 ans, et ln(3,33) ≈ 1,204.",
              "t ≈ 8 267 × 1,204 ≈ 9 950 ans.",
              "Vérification : 30 % est compris entre 50 % (une demi-vie, 5 730 ans) et 25 % (deux demi-vies, 11 460 ans), ce qui est cohérent. L'animal est mort il y a environ 9 950 ans.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un charbon de bois issu d'un foyer préhistorique ne contient plus que 12,5 % du carbone 14 initial. Sans calculatrice, déterminez son âge (T = 5 730 ans). Ce charbon aurait-il pu être daté s'il ne restait que 0,01 % du ¹⁴C initial ?",
              hint: "12,5 % correspond à une fraction simple : ½ × ½ × ½.",
              solution: [
                "12,5 % = 1/8 = (½)³ : il s'est écoulé trois demi-vies.",
                "t = 3 × 5 730 = 17 190 ans.",
                "0,01 % correspond à un facteur 10 000, entre 2¹³ = 8 192 et 2¹⁴ = 16 384 : plus de 13 demi-vies se sont écoulées, soit un âge d’environ 76 000 ans.",
                "À ce niveau, la quantité de ¹⁴C restante est trop faible pour être mesurée de façon fiable : la méthode du carbone 14 n'est utilisable que jusqu'à environ 50 000 ans.",
                "Résultat : le charbon a 17 190 ans ; dans le second cas, il faudrait un autre chronomètre ou une autre méthode.",
              ],
            },
            {
              level: 2,
              statement: "Une coulée de basalte a un rapport ⁴⁰Ar/⁴⁰K = 0,0100. 1) Expliquez pourquoi on peut considérer que la quantité d'argon 40 était nulle lors de la mise en place de la lave. 2) Calculez l'âge de la coulée avec t = 1,804 × 10⁹ × ln(1 + 9,54 × ⁴⁰Ar/⁴⁰K) (t en années). 3) Le basalte a ensuite été chauffé à haute température lors d'un épisode de métamorphisme : quelle conséquence sur l'âge mesuré ?",
              hint: "L'argon est un gaz : que devient-il dans une lave en fusion ? Pour le calcul, commencez par l'intérieur de la parenthèse.",
              solution: [
                "1) L'argon est un gaz : il s'échappe de la lave tant qu'elle est liquide. À la cristallisation, les minéraux ne contiennent donc pas d'argon 40, et tout l'argon mesuré provient de la désintégration du potassium 40 depuis la fermeture du système.",
                "2) 9,54 × 0,0100 = 0,0954 ; 1 + 0,0954 = 1,0954 ; ln(1,0954) ≈ 0,0911.",
                "t ≈ 1,804 × 10⁹ × 0,0911 ≈ 1,64 × 10⁸ ans, soit environ 164 millions d'années.",
                "3) Un réchauffement peut faire perdre de l'argon au minéral : le chronomètre est (partiellement) remis à zéro. L'âge mesuré est alors plus jeune que l'âge de cristallisation ; il peut correspondre à l'âge du métamorphisme si la perte d'argon a été totale.",
                "Résultat : la coulée a environ 164 Ma si le système est resté fermé depuis sa mise en place.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On a mesuré dans quatre minéraux d'un granite du Massif central les rapports isotopiques suivants (⁸⁷Rb/⁸⁶Sr ; ⁸⁷Sr/⁸⁶Sr) : biotite (20 ; 0,7914), feldspath potassique (10 ; 0,7487), muscovite (5 ; 0,7273), plagioclase (2 ; 0,7145). Données : λ(⁸⁷Rb) = 1,42 × 10⁻¹¹ an⁻¹ ; l'isochrone a pour équation ⁸⁷Sr/⁸⁶Sr = (⁸⁷Sr/⁸⁶Sr)₀ + a × ⁸⁷Rb/⁸⁶Sr, avec a = e^(λt) - 1. Montrez que ce granite peut être daté par cette méthode, déterminez son âge et son rapport ⁸⁷Sr/⁸⁶Sr initial, puis situez sa mise en place dans l'histoire de la Terre.",
              hint: "Vérifiez d'abord l'alignement en calculant la pente entre plusieurs paires de points ; puis utilisez t = ln(a + 1) ÷ λ.",
              solution: [
                "Pente entre plagioclase et biotite : (0,7914 - 0,7145) ÷ (20 - 2) = 0,0769 ÷ 18 ≈ 0,00427.",
                "Pente entre muscovite et feldspath : (0,7487 - 0,7273) ÷ (10 - 5) = 0,0214 ÷ 5 ≈ 0,00428. Les pentes sont égales aux arrondis près : les points sont alignés, le système est resté fermé, la roche est datable par cette méthode.",
                "Âge : t = ln(1 + 0,00427) ÷ (1,42 × 10⁻¹¹) ≈ 0,00426 ÷ (1,42 × 10⁻¹¹) ≈ 3,0 × 10⁸ ans, soit environ 300 millions d'années.",
                "Rapport initial : (⁸⁷Sr/⁸⁶Sr)₀ = 0,7145 - 0,00427 × 2 ≈ 0,7060.",
                "Interprétation : un âge d'environ 300 Ma correspond à la fin du Carbonifère, au Paléozoïque, c'est-à-dire à la formation de la chaîne hercynienne (varisque) dont le Massif central est un vestige.",
                "Conclusion : le granite a cristallisé il y a environ 300 Ma, à partir d'un magma de rapport ⁸⁷Sr/⁸⁶Sr initial voisin de 0,706.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque chronomètre à ce qu'il permet de dater.",
            pairs: [
              { left: "Carbone 14 (T = 5 730 ans)", right: "Os, bois ou charbon de moins de 50 000 ans" },
              { left: "Potassium-argon", right: "Laves et cendres volcaniques, argon initial nul" },
              { left: "Rubidium-strontium", right: "Granites anciens, par la méthode des isochrones" },
              { left: "Uranium-plomb", right: "Zircons, jusqu'aux plus vieux minéraux terrestres" },
              { left: "Demi-vie", right: "Durée au bout de laquelle la moitié des atomes pères s'est désintégrée" },
            ],
          },
          quiz: [
            {
              q: "Après trois demi-vies, quelle fraction de l'isotope père reste-t-il ?",
              options: ["1/3", "1/6", "1/8", "1/9"],
              answer: 2,
              why: "Chaque demi-vie divise la quantité par deux : ½ × ½ × ½ = 1/8.",
            },
            {
              q: "Pourquoi ne peut-on pas dater un granite de 300 Ma au carbone 14 ?",
              options: ["Le ¹⁴C date la mort d'organismes et aurait disparu en 300 Ma", "Le carbone 14 ne se désintègre pas dans les roches", "Le granite est trop chaud", "Le carbone 14 ne date que les fossiles marins conservés dans les calcaires"],
              answer: 0,
              why: "Le ¹⁴C date la mort d'êtres vivants, et au bout de 300 Ma (plus de 50 000 demi-vies) il n'en reste plus du tout.",
            },
            {
              q: "Que représente la pente d'une droite isochrone Rb/Sr ?",
              options: ["Le rapport ⁸⁷Sr/⁸⁶Sr initial", "La teneur en rubidium de la roche", "La température de fermeture de chacun des minéraux analysés", "Une grandeur égale à e^(λt) - 1, qui donne l'âge"],
              answer: 3,
              why: "La pente a vaut e^(λt) - 1 : elle augmente avec le temps et permet de calculer t = ln(a + 1) ÷ λ.",
            },
            {
              q: "Quel événement date-t-on avec le couple potassium-argon sur une lave ?",
              options: ["La fusion du manteau", "Le refroidissement et la cristallisation de la lave", "L'érosion de la coulée", "L'apparition du potassium 40 lors de la formation de la Terre"],
              answer: 1,
              why: "L'argon reste piégé à partir de la cristallisation : c'est la fermeture du système qui fait démarrer le chronomètre.",
            },
            {
              q: "La vitesse de désintégration d'un isotope radioactif dépend :",
              options: ["de la température de la roche", "de la pression", "uniquement de l'isotope considéré", "de la profondeur d'enfouissement de la roche"],
              answer: 2,
              why: "La constante λ est propre à chaque isotope ; elle ne dépend pas des conditions physiques ou chimiques, ce qui fait la fiabilité du chronomètre.",
            },
          ],
          trap: "Confondre l'âge de la roche avec l'âge de fermeture du système : un minéral réchauffé lors d'un métamorphisme peut donner un âge plus jeune que sa cristallisation. Autre erreur fréquente : utiliser le carbone 14 pour dater des roches de plusieurs millions d'années.",
          method: "Avant tout calcul, justifiez le choix du chronomètre (nature de l'échantillon, ordre de grandeur de l'âge), puis vérifiez votre résultat par un encadrement en demi-vies : un âge calculé doit tomber entre deux multiples cohérents de T.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'echelle-des-temps',
          title: 'L\'échelle des temps géologiques',
          minutes: 25,
          objectives: [
            "Décrire l'organisation de l'échelle des temps géologiques en éons, ères, périodes et étages.",
            "Expliquer que les grandes limites de l'échelle correspondent à des crises biologiques et à des changements géologiques majeurs.",
            "Montrer que l'échelle combine la datation relative (étages, fossiles) et la datation absolue (âges chiffrés).",
            "Situer quelques repères majeurs : âge de la Terre, début du Phanérozoïque, crises Permien-Trias et Crétacé-Paléogène.",
          ],
          course: [
            {
              heading: "Une échelle emboîtée",
              paragraphs: [
                "L'histoire de la Terre, longue d'environ 4,56 milliards d'années, est découpée en unités emboîtées : les éons, divisés en ères, elles-mêmes divisées en périodes (ou systèmes), puis en époques et en étages. L'étage est l'unité de base : il correspond à un ensemble de couches déposées pendant un intervalle de temps et caractérisé par son contenu fossile. Le nom d'un étage vient souvent d'une localité de référence, son stratotype (le Bajocien de Bayeux, le Toarcien de Thouars, l'Hettangien d'Hettange en Lorraine).",
                "Quatre éons se succèdent : l'Hadéen (de la formation de la Terre à environ 4 milliards d'années), l'Archéen, le Protérozoïque, puis le Phanérozoïque, qui commence il y a environ 540 millions d'années (538,8 Ma selon la charte stratigraphique internationale actuelle). Le Phanérozoïque, l'éon de la vie « visible », est divisé en trois ères : le Paléozoïque (ère primaire), le Mésozoïque (ère secondaire) et le Cénozoïque (ère tertiaire et quaternaire des anciennes classifications).",
              ],
              box: { label: "Repère", text: "Paléozoïque : environ 540 à 252 Ma. Mésozoïque : 252 à 66 Ma (Trias, Jurassique, Crétacé). Cénozoïque : 66 Ma à aujourd'hui (Paléogène, Néogène, Quaternaire depuis 2,58 Ma)." },
            },
            {
              heading: "Les grandes coupures : des crises biologiques",
              paragraphs: [
                "Les limites des ères et de nombreuses périodes ont été placées là où les géologues observaient un changement brutal des faunes et des flores fossiles. On sait aujourd'hui que ces changements correspondent à des crises biologiques : des extinctions massives, en un temps géologiquement bref, d'une grande partie des espèces, suivies d'une diversification des groupes survivants.",
                "La crise Permien-Trias, il y a environ 252 Ma, marque la limite Paléozoïque-Mésozoïque. C'est la plus importante connue : la grande majorité des espèces marines disparaît, dont les derniers trilobites. Elle coïncide avec des épanchements volcaniques gigantesques en Sibérie (les trapps de Sibérie). La crise Crétacé-Paléogène, il y a 66 Ma, marque la limite Mésozoïque-Cénozoïque : disparition des dinosaures non aviens, des ammonites et de nombreux groupes de plancton. Elle coïncide avec la chute d'une météorite (cratère de Chicxulub, au Mexique) et avec le volcanisme des trapps du Deccan, en Inde.",
              ],
              box: { label: "À retenir", text: "Les limites majeures de l'échelle stratigraphique correspondent à des crises biologiques, souvent associées à des événements géologiques exceptionnels (volcanisme massif, impact météoritique)." },
            },
            {
              heading: "Une échelle construite avec deux types de datation",
              paragraphs: [
                "L'échelle a d'abord été construite par la datation relative. Au XIXe siècle, en appliquant les principes de superposition et d'identité paléontologique, les géologues ont ordonné les étages et défini leurs limites à partir des fossiles. Cette échelle relative était cohérente, mais sans durées.",
                "La radiochronologie, développée au XXe siècle, a permis de la chiffrer. On date des roches magmatiques (laves, cendres volcaniques, filons) dont la position par rapport aux couches sédimentaires est connue : une cendre intercalée entre deux couches fossilifères encadre leur âge. Aujourd'hui, chaque limite est définie par un point de référence choisi dans une coupe précise à travers le monde (appelé point stratotypique mondial, ou « clou d'or »), et son âge est régulièrement affiné par la Commission internationale de stratigraphie.",
              ],
            },
            {
              heading: "Prendre la mesure du temps profond",
              paragraphs: [
                "Les durées géologiques dépassent l'intuition. Si l'on ramène l'histoire de la Terre à une année de 365 jours, le Phanérozoïque ne commence que vers le 18 novembre, les dinosaures non aviens disparaissent vers le 26 décembre et Homo sapiens, apparu il y a environ 300 000 ans, n'est présent que dans la dernière demi-heure du 31 décembre. Le Phanérozoïque ne représente qu'environ 12 % de l'histoire de la Terre ; l'essentiel du temps géologique correspond au Précambrien (Hadéen, Archéen et Protérozoïque).",
                "Ces ordres de grandeur expliquent que des processus très lents, comme l'érosion d'une montagne (quelques dixièmes de millimètre par an) ou l'ouverture d'un océan (quelques centimètres par an), puissent produire des effets considérables à l'échelle des temps géologiques.",
              ],
            },
          ],
          keyPoints: [
            "L'échelle est emboîtée : éons, ères, périodes, époques, étages ; l'étage est défini par son contenu fossile.",
            "Âge de la Terre : environ 4,56 milliards d'années ; début du Phanérozoïque : environ 540 Ma.",
            "Trois ères au Phanérozoïque : Paléozoïque, Mésozoïque (252 à 66 Ma), Cénozoïque (depuis 66 Ma).",
            "Les grandes limites correspondent à des crises biologiques : Permien-Trias (252 Ma) et Crétacé-Paléogène (66 Ma).",
            "L'échelle relative (fossiles, étages) a été chiffrée grâce à la radiochronologie.",
            "Chaque limite est fixée par un point de référence mondial et son âge est réévalué au fil des mesures.",
          ],
          example: {
            statement: "Une série sédimentaire contient, de bas en haut : un calcaire à ammonites, une fine couche d'argile riche en iridium, puis des marnes à foraminifères d'un type nouveau, sans ammonites. Une cendre volcanique située juste au-dessus de l'argile est datée à 66,0 Ma. Interprétez cette série.",
            solution: [
              "Superposition : le calcaire à ammonites est le plus ancien, puis l'argile, puis les marnes.",
              "Les ammonites disparaissent au-dessus de l'argile, et une faune de foraminifères nouvelle apparaît : c'est la signature d'une crise biologique.",
              "La cendre datée à 66,0 Ma, juste au-dessus, donne un âge minimal à l'argile et la situe très près de 66 Ma.",
              "L'argile riche en iridium, élément rare dans la croûte mais abondant dans certaines météorites, est compatible avec l'hypothèse d'un impact météoritique.",
              "Conclusion : la série enregistre la crise Crétacé-Paléogène (66 Ma), qui marque la limite entre le Mésozoïque et le Cénozoïque.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la durée du Mésozoïque, puis celle du Cénozoïque jusqu'à aujourd'hui. Citez les trois périodes du Mésozoïque dans l'ordre chronologique.",
              hint: "Le Mésozoïque est encadré par les deux grandes crises biologiques.",
              solution: [
                "Le Mésozoïque commence à 252 Ma (crise Permien-Trias) et se termine à 66 Ma (crise Crétacé-Paléogène).",
                "Durée du Mésozoïque : 252 - 66 = 186 millions d'années.",
                "Durée du Cénozoïque : 66 - 0 = 66 millions d'années.",
                "Périodes du Mésozoïque, de la plus ancienne à la plus récente : Trias, Jurassique, Crétacé.",
              ],
            },
            {
              level: 2,
              statement: "On ramène l'histoire de la Terre (4 560 Ma) à une année de 365 jours. 1) Calculez la place du début du Phanérozoïque (538,8 Ma) dans ce calendrier. 2) Calculez combien de minutes avant minuit le 31 décembre apparaît Homo sapiens (300 000 ans). 3) Quelle part de l'histoire de la Terre le Phanérozoïque représente-t-il ?",
              hint: "Utilisez la proportionnalité : durée réelle ÷ 4 560 Ma = durée dans le calendrier ÷ 365 jours.",
              solution: [
                "1) 538,8 ÷ 4 560 × 365 ≈ 43,1 jours avant la fin de l'année. En retirant les 31 jours de décembre, il reste 12 jours en novembre : le Phanérozoïque commence vers le 18 novembre.",
                "2) 300 000 ans ÷ 4 560 000 000 ans × 365 jours × 24 h × 60 min ≈ 34,6 minutes : Homo sapiens apparaît environ 35 minutes avant minuit.",
                "3) 538,8 ÷ 4 560 ≈ 0,118, soit environ 12 % de l'histoire de la Terre.",
                "Conclusion : les temps fossilifères riches ne représentent qu'une petite partie de l'histoire de la planète.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans une coupe, une couche C1 contient le dernier niveau à trilobites ; elle est surmontée d'une couche C2 sans fossile, puis d'une couche C3 contenant des ammonites primitives et des reptiles d'un type nouveau. Une cendre volcanique intercalée entre C1 et C2 est datée à 252,2 ± 0,1 Ma par le couple uranium-plomb sur zircons. Expliquez comment ces données illustrent la construction de l'échelle des temps géologiques, et identifiez la limite représentée.",
              hint: "Distinguez ce qui relève de la datation relative (ordre, fossiles) et ce qui relève de la datation absolue (âge chiffré).",
              solution: [
                "Datation relative : la superposition ordonne C1, puis C2, puis C3. Les fossiles marquent un changement brutal : les trilobites disparaissent, de nouveaux groupes apparaissent au-dessus.",
                "Ce renouvellement des faunes définit une limite stratigraphique majeure : la disparition des trilobites marque la fin du Paléozoïque.",
                "Datation absolue : la cendre, roche volcanique, contient des zircons datables par uranium-plomb, chronomètre adapté aux roches anciennes. Située entre C1 et C2, elle donne l'âge de la transition, environ 252 Ma.",
                "La combinaison des deux méthodes illustre la construction de l'échelle : les limites sont définies par des crises biologiques (datation relative) puis chiffrées par la radiochronologie (datation absolue).",
                "Conclusion : la coupe enregistre la limite Permien-Trias, soit la limite Paléozoïque-Mésozoïque, il y a environ 252 Ma, la plus importante crise biologique connue.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces divisions et événements du plus ancien au plus récent.",
            items: [
              "Formation de la Terre (environ 4,56 Ga)",
              "Archéen",
              "Protérozoïque",
              "Paléozoïque, l'ère des trilobites",
              "Crise Permien-Trias (252 Ma)",
              "Mésozoïque, l'ère des ammonites et des dinosaures",
              "Crise Crétacé-Paléogène (66 Ma)",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de base de l'échelle stratigraphique, définie par son contenu fossile ?",
              options: ["L'éon", "L'ère", "L'étage", "La période"],
              answer: 2,
              why: "L'étage regroupe des couches caractérisées par leurs fossiles ; ères et périodes sont des regroupements d'étages.",
            },
            {
              q: "À quoi correspond la limite entre le Mésozoïque et le Cénozoïque ?",
              options: ["À la crise Crétacé-Paléogène, il y a 66 Ma", "À la formation de la Terre", "À la crise Permien-Trias", "À l'apparition des premiers Homo sapiens en Afrique"],
              answer: 0,
              why: "La crise Crétacé-Paléogène, avec la disparition des dinosaures non aviens et des ammonites, sépare le Mésozoïque du Cénozoïque.",
            },
            {
              q: "Comment l'échelle relative a-t-elle été chiffrée ?",
              options: ["Par le comptage des couches", "Par une estimation de la vitesse d'évolution moyenne des espèces fossiles", "Par l'épaisseur des sédiments", "Par la datation radiochronologique de roches magmatiques bien situées"],
              answer: 3,
              why: "Des cendres ou des laves intercalées entre des couches fossilifères sont datées par radiochronologie et encadrent l'âge des étages.",
            },
            {
              q: "Quelle part approximative de l'histoire de la Terre représente le Phanérozoïque ?",
              options: ["Environ 50 %", "Environ 12 %", "Environ 90 %", "Environ 1 %"],
              answer: 1,
              why: "540 Ma sur 4 560 Ma représentent environ 12 % : l'essentiel de l'histoire terrestre est précambrien.",
            },
            {
              q: "Quel événement géologique est associé à la crise Permien-Trias ?",
              options: ["L'impact de Chicxulub", "La collision qui a formé la chaîne des Alpes et l'Himalaya", "Les épanchements volcaniques des trapps de Sibérie", "La dernière glaciation"],
              answer: 2,
              why: "La crise Permien-Trias coïncide avec un volcanisme exceptionnel en Sibérie ; Chicxulub est associé à la crise de 66 Ma.",
            },
          ],
          trap: "Confondre les deux grandes crises : la crise Permien-Trias (252 Ma, fin des trilobites, trapps de Sibérie) et la crise Crétacé-Paléogène (66 Ma, fin des dinosaures non aviens et des ammonites, impact de Chicxulub).",
          method: "Construisez une frise à l'échelle avec quelques dates clés (4,56 Ga, 540 Ma, 252 Ma, 66 Ma, 2,58 Ma) : la proportion des durées s'y lit immédiatement et vous évite les confusions d'ordre de grandeur.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES TRACES DU PASSÉ MOUVEMENTÉ DE LA TERRE                             */
    /* ==================================================================== */
    {
      id: 'passe-mouvemente',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ocean-disparu',
          title: 'Les traces d\'un océan disparu dans les montagnes',
          minutes: 30,
          objectives: [
            "Identifier, dans une chaîne de montagnes, les ophiolites comme des fragments de lithosphère océanique.",
            "Reconnaître les traces d'une ancienne marge passive : blocs basculés, failles normales, sédiments anté-rift, syn-rift et post-rift.",
            "Relier les associations minérales des métagabbros (schiste vert, schiste bleu, éclogite) aux conditions de pression et de température de la subduction.",
            "Reconstituer, à partir de ces indices, l'histoire d'un océan disparu, comme l'océan alpin.",
          ],
          course: [
            {
              heading: "Des roches océaniques au sommet des montagnes",
              paragraphs: [
                "Au massif du Chenaillet, près de Montgenèvre dans les Alpes, on trouve vers 2 600 m d'altitude des roches inattendues : des basaltes en coussins (pillow-lavas), qui se forment uniquement quand une lave s'épanche sous l'eau, des gabbros et des péridotites transformées en serpentinites. Ces roches sont parfois surmontées de radiolarites, des sédiments siliceux de fond océanique formés par l'accumulation de squelettes de plancton.",
                "Cette association de roches reproduit la structure de la lithosphère océanique actuelle : sédiments, basaltes, gabbros, puis péridotites du manteau. On l'appelle un complexe ophiolitique, ou ophiolite. Sa présence dans une chaîne de montagnes prouve qu'un océan a existé à cet endroit, puis a disparu. Les ophiolites alpines, datées du Jurassique (environ 165 millions d'années au Chenaillet), sont les témoins de la Téthys alpine, l'océan qui séparait autrefois l'Europe et le bloc apulien (rattaché à l'Afrique).",
              ],
              box: { label: "Définition", text: "Ophiolite : ensemble de roches de la lithosphère océanique (sédiments océaniques, basaltes en coussins, gabbros, péridotites) retrouvé sur un continent, en particulier dans une chaîne de montagnes. C'est la trace d'un océan disparu." },
            },
            {
              heading: "Les traces d'une ancienne marge passive",
              paragraphs: [
                "Avant de s'ouvrir, un océan naît d'un rift continental : la croûte continentale s'étire et s'amincit, découpée par des failles normales. Les blocs de croûte situés entre ces failles basculent et forment des blocs basculés. Lorsque l'océan s'ouvre, cette bordure étirée devient une marge passive, comme les marges actuelles de l'Atlantique.",
                "Dans les Alpes, on retrouve ces blocs basculés du Jurassique, par exemple dans la région de Bourg-d'Oisans. Les sédiments y enregistrent l'histoire de l'étirement : les sédiments anté-rift, déposés avant l'étirement, ont une épaisseur constante et sont basculés avec le bloc ; les sédiments syn-rift, déposés pendant le jeu des failles, forment des couches en éventail, plus épaisses près de la faille ; les sédiments post-rift, déposés après, recouvrent l'ensemble en couches régulières.",
              ],
              box: { label: "À retenir", text: "Blocs basculés limités par des failles normales et sédiments en éventail (syn-rift) sont la signature d'une ancienne marge passive, donc de l'étirement qui a précédé l'ouverture d'un océan." },
            },
            {
              heading: "La lithosphère océanique a été subduite : les roches métamorphiques",
              paragraphs: [
                "Si un océan a disparu, sa lithosphère s'est enfoncée dans le manteau par subduction. Les roches de la croûte océanique en gardent la trace : lorsqu'elles sont enfouies, elles subissent des pressions et des températures nouvelles, et leurs minéraux se transforment à l'état solide. C'est le métamorphisme. Chaque association de minéraux n'est stable que dans un domaine de pression et de température donné : elle sert de témoin des conditions subies.",
                "Un gabbro formé à la dorsale contient du plagioclase et du pyroxène. Près de la dorsale, l'eau de mer qui circule dans la croûte chaude l'hydrate : apparaissent la chlorite et l'actinote (faciès schiste vert). Enfoui en subduction, à forte pression mais à température relativement basse, il se charge de glaucophane, une amphibole bleue (faciès schiste bleu), puis de grenat et de jadéite, un pyroxène sodique (faciès éclogite). Ce métamorphisme haute pression et basse température est caractéristique des zones de subduction, où la plaque froide s'enfonce rapidement.",
              ],
              box: { label: "Repère", text: "Métagabbros de la subduction, du moins au plus profond : schiste vert (chlorite, actinote), schiste bleu (glaucophane), éclogite (grenat, jadéite). Ces transformations libèrent de l'eau." },
            },
            {
              heading: "Lire l'histoire d'un océan dans les Alpes",
              paragraphs: [
                "Dans un transect des Alpes franco-italiennes, on observe des métagabbros de plus en plus transformés d'ouest en est : faiblement métamorphisés au Chenaillet, riches en glaucophane dans le Queyras, éclogitiques au mont Viso. Le Chenaillet est un fragment de lithosphère océanique charrié sur le continent sans avoir été profondément subduit (obduction) ; le Queyras et le mont Viso sont des fragments enfouis à plusieurs dizaines de kilomètres de profondeur, puis remontés à la surface.",
                "L'ensemble de ces indices permet de reconstituer une histoire : étirement continental et formation de marges passives, ouverture de l'océan alpin au Jurassique, puis fermeture de cet océan par subduction à partir du Crétacé, et enfin collision des deux marges continentales. Les ophiolites jalonnent la zone de suture, c'est-à-dire la cicatrice laissée par l'océan disparu entre les deux continents.",
              ],
            },
          ],
          keyPoints: [
            "Une ophiolite (sédiments océaniques, basaltes en coussins, gabbros, péridotites) prouve l'existence d'un océan disparu.",
            "Les basaltes en coussins indiquent un épanchement de lave sous l'eau, au fond d'un océan.",
            "Blocs basculés, failles normales et sédiments syn-rift en éventail sont les traces d'une ancienne marge passive.",
            "En subduction, les métagabbros passent du faciès schiste vert au schiste bleu (glaucophane) puis à l'éclogite (grenat, jadéite).",
            "Le métamorphisme haute pression et basse température est la signature d'une subduction.",
            "Les ophiolites jalonnent la suture, cicatrice de l'océan disparu entre deux continents.",
          ],
          example: {
            statement: "Sur un échantillon prélevé au mont Viso, on observe une roche à grenat rouge et pyroxène vert sodique (jadéite), dont la structure grenue rappelle un gabbro. Que peut-on en déduire ?",
            solution: [
              "La structure grenue héritée suggère que la roche d'origine est un gabbro, roche de la croûte océanique.",
              "L'association grenat et jadéite caractérise le faciès éclogite, stable à haute pression (plus de 1,2 GPa environ, soit plus de 40 km de profondeur) et à température modérée.",
              "Ces minéraux ne sont pas présents dans un gabbro de dorsale : ils se sont formés à l'état solide, par métamorphisme.",
              "Des conditions de haute pression et basse température sont celles d'une zone de subduction.",
              "Conclusion : cette éclogite est un fragment de croûte océanique qui a été subduit à grande profondeur, puis exhumé ; elle témoigne de la disparition d'un océan par subduction.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les roches suivantes de la plus superficielle à la plus profonde dans une lithosphère océanique, puis indiquez celle qui renseigne sur le milieu sous-marin de mise en place : gabbro, radiolarite, péridotite, basalte en coussins.",
              hint: "Pensez à la structure d'une lithosphère océanique au niveau d'une dorsale : où se trouvent les sédiments, la croûte et le manteau ?",
              solution: [
                "De haut en bas : radiolarite (sédiment océanique), basalte en coussins (croûte supérieure), gabbro (croûte inférieure), péridotite (manteau lithosphérique).",
                "Le basalte en coussins renseigne sur le milieu sous-marin : sa forme en boules provient du refroidissement brutal d'une lave au contact de l'eau.",
                "La radiolarite, formée de squelettes siliceux de plancton accumulés en domaine marin profond, confirme ce milieu.",
              ],
            },
            {
              level: 2,
              statement: "Une coupe montre deux blocs de croûte continentale limités par des failles normales à pendage vers l'est. Sur chaque bloc, on observe de bas en haut : des calcaires d'épaisseur constante basculés avec le bloc, des marnes en éventail, épaisses de 400 m contre la faille et de 50 m à l'autre extrémité du bloc, puis des calcaires horizontaux qui recouvrent l'ensemble. Interprétez cette coupe.",
              hint: "Associez chaque groupe de couches à un moment de l'étirement : avant, pendant ou après le jeu des failles.",
              solution: [
                "Les failles normales et les blocs basculés témoignent d'un étirement de la croûte continentale.",
                "Les calcaires inférieurs, d'épaisseur constante et basculés avec le bloc, se sont déposés avant l'étirement : ce sont des sédiments anté-rift.",
                "Les marnes en éventail, plus épaisses près de la faille, se sont déposées pendant le basculement, dans l'espace créé au pied de chaque faille : ce sont des sédiments syn-rift.",
                "Les calcaires horizontaux qui scellent les failles se sont déposés après l'arrêt de leur jeu : ce sont des sédiments post-rift.",
                "Conclusion : la coupe montre une ancienne marge passive, formée lors de l'étirement continental qui a précédé l'ouverture d'un océan.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans les Alpes, trois métagabbros sont étudiés. Au Chenaillet : plagioclase, pyroxène, un peu de chlorite et d'actinote. Dans le Queyras : glaucophane abondant, plagioclase résiduel. Au mont Viso : grenat et jadéite. Données : la chlorite et l'actinote apparaissent par hydratation à faible pression ; le glaucophane est stable entre environ 0,5 et 1,2 GPa à 200-450 °C ; l'association grenat-jadéite au-delà de 1,2 GPa environ et 450 °C ; le gradient de pression est d'environ 1 GPa pour 33 km. Montrez que ces roches retracent l'histoire d'un océan subduit, en précisant les profondeurs atteintes.",
              hint: "Pour chaque roche, convertissez le domaine de pression en profondeur, puis ordonnez les roches de la moins à la plus enfouie.",
              solution: [
                "Les trois roches ont une même origine : des gabbros, roches de la croûte océanique, formés à une dorsale. Leur présence dans les Alpes témoigne d'un ancien océan.",
                "Chenaillet : plagioclase et pyroxène d'origine, avec chlorite et actinote d'hydratation à faible pression. Ce gabbro a été hydraté près de la dorsale mais n'a pas été enfoui profondément.",
                "Queyras : le glaucophane indique 0,5 à 1,2 GPa, soit environ 16 à 40 km de profondeur (0,5 × 33 ≈ 16 km ; 1,2 × 33 ≈ 40 km), à température basse : c'est le faciès schiste bleu.",
                "Mont Viso : grenat et jadéite indiquent plus de 1,2 GPa, soit plus de 40 km, à température encore modérée : c'est le faciès éclogite.",
                "Ces conditions de haute pression et basse température, de plus en plus marquées, sont celles d'une lithosphère océanique froide qui s'enfonce dans une zone de subduction.",
                "Conclusion : ces métagabbros sont des fragments d'une lithosphère océanique subduite à des profondeurs croissantes (faible pour le Chenaillet, environ 16 à 40 km pour le Queyras, plus de 40 km pour le mont Viso), puis exhumés lors de la formation de la chaîne : l'océan alpin a disparu par subduction.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les traces d'un océan disparu.",
            statements: [
              { text: "Les basaltes en coussins se forment lors d'un épanchement de lave sous l'eau.", true: true, why: "Le refroidissement brutal au contact de l'eau donne ces formes arrondies typiques." },
              { text: "Une ophiolite est un fragment de croûte continentale épaissie.", true: false, why: "C'est un fragment de lithosphère océanique (basaltes, gabbros, péridotites) retrouvé sur un continent." },
              { text: "Le glaucophane est un minéral indicateur de haute pression et de basse température.", true: true, why: "Il caractérise le faciès schiste bleu, typique des zones de subduction." },
              { text: "Les sédiments syn-rift ont une épaisseur constante sur tout le bloc basculé.", true: false, why: "Ils forment un éventail, plus épais au pied de la faille, car ils se déposent pendant le basculement." },
              { text: "Le métamorphisme transforme les minéraux à l'état solide.", true: true, why: "Les roches ne fondent pas : leurs minéraux se recristallisent dans de nouvelles conditions de pression et de température." },
              { text: "Une éclogite s'est formée à faible profondeur, près de la dorsale.", true: false, why: "L'association grenat-jadéite exige de fortes pressions, atteintes à plusieurs dizaines de kilomètres en subduction." },
            ],
          },
          quiz: [
            {
              q: "Que prouve la présence d'ophiolites dans une chaîne de montagnes ?",
              options: ["L'existence d'un ancien volcan continental", "L'existence d'un océan disparu", "Une simple érosion intense", "La présence d'un point chaud"],
              answer: 1,
              why: "Les ophiolites sont des fragments de lithosphère océanique : elles témoignent d'un domaine océanique aujourd'hui fermé.",
            },
            {
              q: "Quel type de faille limite les blocs basculés d'une marge passive ?",
              options: ["Des failles normales", "Des failles inverses", "Des chevauchements", "Des failles transformantes uniquement"],
              answer: 0,
              why: "Les failles normales accompagnent l'étirement de la croûte continentale qui précède l'ouverture d'un océan.",
            },
            {
              q: "Quelle association minérale caractérise le faciès éclogite ?",
              options: ["Chlorite et actinote", "Glaucophane seul", "Plagioclase et pyroxène", "Grenat et jadéite"],
              answer: 3,
              why: "Le grenat et la jadéite (pyroxène sodique) sont stables aux très fortes pressions atteintes en profondeur dans une subduction.",
            },
            {
              q: "Les sédiments post-rift sont ceux qui se sont déposés :",
              options: ["avant l'étirement", "pendant le jeu des failles", "après l'arrêt du jeu des failles", "au fond d'une fosse de subduction"],
              answer: 2,
              why: "Ils recouvrent et scellent les blocs basculés et les failles, en couches régulières.",
            },
            {
              q: "Pourquoi le métamorphisme de subduction est-il de type haute pression et basse température ?",
              options: ["Parce que le manteau y est particulièrement chaud", "Parce que la plaque plongeante est froide et s'enfonce rapidement", "Parce que les roches y fondent", "Parce que la pression y est faible"],
              answer: 1,
              why: "La lithosphère océanique ancienne est froide et dense ; elle s'enfonce plus vite qu'elle ne se réchauffe, d'où de fortes pressions à température modérée.",
            },
          ],
          trap: "Croire que le métamorphisme fait fondre les roches : les minéraux se transforment à l'état solide. Autre erreur : confondre les failles normales de la marge passive (étirement) avec les failles inverses de la collision (raccourcissement).",
          method: "Pour chaque roche d'un document, posez trois questions : quelle est la roche d'origine, quels minéraux sont apparus, et dans quelles conditions de pression et de température sont-ils stables ? Convertissez ensuite la pression en profondeur et concluez sur le contexte géodynamique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-chaines-montagnes',
          title: 'Collision et formation d\'une chaîne de montagnes',
          minutes: 30,
          objectives: [
            "Expliquer comment la fermeture d'un océan par subduction conduit à la collision de deux lithosphères continentales.",
            "Identifier les marqueurs de l'épaississement crustal : plis, failles inverses, chevauchements, nappes de charriage, racine crustale.",
            "Relier le métamorphisme et la fusion partielle de la croûte continentale épaissie à la formation de granites.",
            "Décrire le cycle de Wilson et reconnaître, dans une chaîne ancienne aplanie, les traces d'une collision passée.",
          ],
          course: [
            {
              heading: "De la subduction à la collision",
              paragraphs: [
                "Lorsqu'un océan se ferme par subduction, la lithosphère océanique, plus dense que l'asthénosphère sous-jacente quand elle est âgée et froide, s'enfonce dans le manteau. Mais derrière elle arrive la marge continentale qui la prolonge. La croûte continentale, épaisse et peu dense (environ 2,7 g/cm³ contre environ 3,0 pour la croûte océanique), résiste à l'enfoncement : elle ne peut être entraînée que sur une profondeur limitée avant de remonter.",
                "Quand les deux continents se rencontrent, la convergence se poursuit mais se traduit par un raccourcissement et un épaississement de la croûte : c'est la collision. Dans les Alpes, la subduction de l'océan alpin a commencé au Crétacé et la collision entre la marge européenne et le bloc apulien s'est engagée au cours du Cénozoïque (à partir de l'Éocène, il y a quelques dizaines de millions d'années). L'Himalaya résulte de la collision de l'Inde et de l'Asie, débutée il y a environ 50 millions d'années.",
              ],
            },
            {
              heading: "Les marqueurs du raccourcissement",
              paragraphs: [
                "À l'échelle de l'affleurement et du paysage, le raccourcissement se lit dans des structures de compression. Les plis déforment les couches sans les casser ; un pli couché peut renverser une série. Les failles inverses superposent des terrains anciens sur des terrains plus récents. Un chevauchement est une faille inverse à faible pendage qui fait glisser un ensemble de terrains sur un autre.",
                "Lorsque le déplacement atteint plusieurs kilomètres, voire des dizaines de kilomètres, l'ensemble déplacé forme une nappe de charriage : des terrains se retrouvent loin de leur lieu d'origine, posés sur des terrains plus récents. Les Alpes sont formées d'un empilement de nappes. Ces structures montrent que la croûte s'est raccourcie, et donc épaissie, puisque le volume de roches se conserve.",
              ],
              box: { label: "Définition", text: "Faille inverse : faille où le compartiment supérieur est remonté par rapport à l'autre, sous l'effet d'une compression. Nappe de charriage : ensemble de terrains déplacé sur une grande distance au-dessus d'autres terrains, le long d'un chevauchement." },
            },
            {
              heading: "La racine crustale et les données géophysiques",
              paragraphs: [
                "Sous un continent stable, le Moho (limite entre croûte et manteau) se situe vers 30 km de profondeur. Sous les Alpes, les profils sismiques comme ceux du programme ECORS-CROP (années 1980) montrent un Moho qui plonge à environ 50 km, et sous l'Himalaya jusqu'à 70 km environ. La croûte épaissie forme une racine crustale, qui s'enfonce dans le manteau bien plus profondément que les reliefs ne s'élèvent.",
                "Cette situation s'explique par l'isostasie : la croûte continentale, moins dense, « flotte » sur le manteau, un peu comme un iceberg dans l'eau. Plus le relief est haut, plus la racine est profonde. Les chevauchements de la croûte et les profils sismiques montrent aussi que la croûte d'un des continents s'est en partie enfoncée sous l'autre.",
              ],
              box: { label: "À retenir", text: "Une chaîne de collision se caractérise par un épaississement crustal : raccourcissement (plis, failles inverses, nappes) en surface et racine crustale en profondeur, révélée par un Moho anormalement profond." },
            },
            {
              heading: "Métamorphisme et fusion de la croûte épaissie",
              paragraphs: [
                "Enfouie à grande profondeur dans la racine de la chaîne, la croûte continentale se réchauffe peu à peu. Ses roches subissent un métamorphisme : les argiles deviennent des schistes puis des micaschistes, les granites des gneiss. Lorsque la température dépasse environ 650 à 700 °C en présence d'eau, une fusion partielle commence : on obtient des migmatites, roches où coexistent des parties fondues claires et des parties restées solides sombres.",
                "Le liquide produit, riche en silice, peut se rassembler et cristalliser lentement en profondeur sous forme de granites, dits granites d'anatexie. Ces roches, mises à l'affleurement par l'érosion des reliefs, sont des témoins caractéristiques d'une ancienne collision.",
              ],
            },
            {
              heading: "Le cycle de Wilson et les chaînes anciennes",
              paragraphs: [
                "L'ensemble de ces étapes forme le cycle de Wilson, du nom du géologue canadien John Tuzo Wilson : un rift continental s'ouvre ; un océan se forme et s'élargit à partir d'une dorsale, bordé de marges passives ; une subduction s'amorce et l'océan se referme ; les continents entrent en collision et une chaîne de montagnes se forme ; enfin la chaîne est érodée et le supercontinent ainsi construit peut à nouveau se fragmenter.",
                "Une chaîne ancienne a perdu ses reliefs par érosion, mais garde ses roches profondes. Le Massif central et le Massif armoricain sont les vestiges de la chaîne hercynienne (ou varisque), formée par collision il y a environ 380 à 300 millions d'années. On y observe des gneiss, des migmatites, des granites et même des ophiolites et des éclogites : les mêmes indices que dans les Alpes, dans une chaîne aujourd'hui aplanie.",
              ],
              box: { label: "Repère", text: "Cycle de Wilson : rift, ouverture d'un océan et marges passives, expansion, subduction et fermeture, collision et chaîne de montagnes, érosion et aplanissement." },
            },
          ],
          keyPoints: [
            "La croûte continentale, peu dense, résiste à la subduction : la convergence se poursuit par une collision.",
            "Plis, failles inverses, chevauchements et nappes de charriage traduisent un raccourcissement de la croûte.",
            "La croûte épaissie forme une racine crustale : Moho vers 50 km sous les Alpes contre 30 km sous un continent stable.",
            "La croûte enfouie se métamorphise ; vers 650 à 700 °C, elle fond partiellement (migmatites) et forme des granites.",
            "Cycle de Wilson : rift, océan, subduction, collision, érosion.",
            "Les chaînes anciennes aplanies (Massif central) gardent gneiss, migmatites, granites, ophiolites et éclogites.",
          ],
          example: {
            statement: "Sur un profil, une série de calcaires du Jurassique est recouverte par des gneiss plus anciens, séparés par une surface peu inclinée. Ailleurs, des couches du Crétacé sont plissées et un pli est couché. Quelle conclusion tirer sur l'histoire de la région ?",
            solution: [
              "Des gneiss anciens reposent sur des calcaires plus récents : l'ordre normal de superposition est inversé.",
              "Ce contact peu incliné qui superpose de l'ancien sur du récent est un chevauchement, voire une nappe de charriage si le déplacement est important.",
              "Les plis, dont un pli couché, traduisent eux aussi une compression.",
              "Ces structures de compression indiquent un raccourcissement de la croûte, donc un épaississement.",
              "Conclusion : la région a subi une compression postérieure au Crétacé, comme lors de la collision qui a formé les Alpes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les indices suivants selon qu'ils témoignent d'une compression (collision) ou d'une extension (marge passive) : pli couché, faille normale, nappe de charriage, bloc basculé, faille inverse, sédiments en éventail.",
              hint: "Une compression rapproche et empile les terrains ; une extension les écarte.",
              solution: [
                "Compression : pli couché, nappe de charriage, faille inverse.",
                "Extension : faille normale, bloc basculé, sédiments en éventail (syn-rift).",
                "Une chaîne de montagnes peut contenir les deux types d'indices : les traces de l'ancienne marge passive, puis celles de la collision qui l'a déformée.",
              ],
            },
            {
              level: 2,
              statement: "Sous une plaine, le Moho se trouve à 30 km de profondeur. Sous une chaîne de montagnes dont l'altitude moyenne est de 3 km, on mesure un Moho à 50 km. 1) Calculez l'épaisseur de la croûte dans les deux cas. 2) Expliquez cette différence. 3) Que deviendra cette racine si le relief est progressivement érodé ?",
              hint: "L'épaisseur de la croûte va du sommet du relief jusqu'au Moho. Pensez au comportement d'un iceberg qui fond par le dessus.",
              solution: [
                "1) Sous la plaine (altitude voisine de 0) : environ 30 km. Sous la chaîne : 3 + 50 = 53 km.",
                "2) La croûte de la chaîne est épaissie d'environ 23 km. Seule une petite partie (3 km) forme le relief, l'essentiel forme une racine crustale qui s'enfonce dans le manteau : c'est l'équilibre isostatique d'une croûte peu dense qui « flotte » sur le manteau plus dense.",
                "3) Quand l'érosion enlève du relief, la croûte allégée remonte (réajustement isostatique), comme un iceberg qui fond par le dessus remonte. La racine diminue, et des roches formées en profondeur (gneiss, migmatites, granites) arrivent à l'affleurement.",
                "Conclusion : la racine crustale accompagne le relief et disparaît progressivement avec lui ; c'est pourquoi une chaîne ancienne aplanie montre ses roches profondes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans le Massif central, on observe des migmatites et des granites datés d'environ 330 à 300 Ma, des gneiss, quelques éclogites et des fragments de roches basiques et ultrabasiques (anciens gabbros et péridotites). Le relief y est modéré et le Moho se situe vers 30 km de profondeur. En vous appuyant sur ces données et sur vos connaissances, montrez que le Massif central est le vestige d'une chaîne de collision, et expliquez pourquoi elle n'a plus de racine.",
              hint: "Retrouvez dans les données chaque étape du cycle de Wilson, puis expliquez le devenir d'une chaîne au cours du temps.",
              solution: [
                "Les anciens gabbros et péridotites sont des fragments de lithosphère océanique (ophiolites démantelées) : ils témoignent d'un ancien océan.",
                "Les éclogites sont des roches de haute pression et basse température : elles témoignent d'une subduction qui a fermé cet océan.",
                "Les gneiss, les migmatites et les granites d'anatexie indiquent une croûte continentale enfouie, métamorphisée puis partiellement fondue : c'est la signature de l'épaississement crustal d'une collision.",
                "Leur âge (environ 330 à 300 Ma) situe cette collision au Paléozoïque : c'est la chaîne hercynienne.",
                "Aujourd'hui, le relief est modéré et le Moho est à une profondeur normale : depuis 300 Ma, l'érosion a enlevé plusieurs kilomètres de roches et le réajustement isostatique a fait remonter la croûte, supprimant la racine et amenant les roches profondes à l'affleurement.",
                "Conclusion : le Massif central est le vestige érodé d'une chaîne de collision hercynienne ; il illustre la dernière étape du cycle de Wilson.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle de Wilson.",
            items: [
              "Étirement d'un continent et formation d'un rift",
              "Ouverture d'un océan bordé de marges passives",
              "Expansion océanique à partir d'une dorsale",
              "Subduction de la lithosphère océanique et fermeture de l'océan",
              "Collision continentale et formation d'une chaîne de montagnes",
              "Érosion et aplanissement de la chaîne",
            ],
          },
          quiz: [
            {
              q: "Pourquoi la croûte continentale ne s'enfonce-t-elle pas durablement en subduction ?",
              options: ["Parce qu'elle est trop chaude", "Parce qu'elle est trop fine", "Parce qu'elle est peu dense", "Parce qu'elle est trop jeune"],
              answer: 2,
              why: "Sa faible densité (environ 2,7) l'empêche d'être entraînée profondément dans le manteau : la convergence se traduit alors par une collision.",
            },
            {
              q: "Quelle structure superpose des terrains anciens sur des terrains plus récents ?",
              options: ["Une faille normale", "Un chevauchement", "Un bloc basculé", "Une discordance"],
              answer: 1,
              why: "Un chevauchement est une faille inverse peu inclinée : le compartiment qui monte apporte des terrains anciens sur des terrains récents.",
            },
            {
              q: "Sous les Alpes, le Moho se trouve vers :",
              options: ["50 km de profondeur", "10 km de profondeur", "30 km de profondeur", "150 km de profondeur"],
              answer: 0,
              why: "La croûte épaissie forme une racine crustale ; le Moho est donc plus profond que sous un continent stable (environ 30 km).",
            },
            {
              q: "Que sont les migmatites ?",
              options: ["Des laves sous-marines", "Des sédiments de rift", "Des roches du manteau remontées le long d'une faille normale", "Des roches issues d'une fusion partielle de la croûte"],
              answer: 3,
              why: "Elles associent des parties fondues et des parties restées solides : elles témoignent d'une croûte portée à haute température dans une chaîne épaissie.",
            },
            {
              q: "Pourquoi trouve-t-on des roches profondes à l'affleurement dans une chaîne ancienne ?",
              options: ["Elles ont été remontées à la surface par des éruptions volcaniques", "Elles se sont formées en surface", "L'érosion et la remontée isostatique les ont exhumées", "La racine crustale s'est épaissie"],
              answer: 2,
              why: "L'érosion enlève les roches de surface et la croûte allégée remonte : les roches formées en profondeur arrivent à la surface.",
            },
          ],
          trap: "Penser qu'une chaîne de montagnes n'est que du relief : l'essentiel de l'épaississement est en profondeur, dans la racine crustale. Autre confusion fréquente : les ophiolites ne sont pas formées par la collision, elles en sont les témoins hérités de l'océan disparu.",
          method: "Face à une chaîne de montagnes, cherchez systématiquement trois familles d'indices : tectoniques (plis, failles inverses, nappes), pétrographiques (métamorphisme, migmatites, granites, ophiolites) et géophysiques (profondeur du Moho). Chaque famille apporte un argument à votre démonstration.",
        },
      ],
    },
    /* ==================================================================== */
    /* DE LA PLANTE SAUVAGE À LA PLANTE DOMESTIQUÉE                           */
    /* ==================================================================== */
    {
      id: 'plante-domestiquee',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'organisation-plante',
          title: 'L\'organisation fonctionnelle des plantes à fleurs',
          minutes: 30,
          objectives: [
            "Relier l'organisation d'une plante à fleurs à sa vie fixée et à son autotrophie.",
            "Identifier les surfaces d'échange (feuilles, racines, mycorhizes) et expliquer leur rôle dans les échanges avec l'air et le sol.",
            "Distinguer la sève brute et la sève élaborée, le xylème et le phloème, et décrire la circulation des matières dans la plante.",
            "Expliquer la croissance par les méristèmes, la production de molécules organiques et les défenses de la plante face aux agressions et aux saisons.",
          ],
          course: [
            {
              heading: "Une vie fixée et autotrophe",
              paragraphs: [
                "Une plante à fleurs (Angiosperme) vit fixée au sol : elle ne peut ni se déplacer pour chercher sa nourriture, ni fuir un prédateur ou un milieu devenu défavorable. Elle doit trouver sur place tout ce dont elle a besoin, et faire face sur place aux variations de son environnement (sécheresse, froid, herbivores).",
                "La plante est autotrophe : elle fabrique sa matière organique à partir de matière minérale, grâce à l'énergie lumineuse. Elle prélève le dioxyde de carbone dans l'air, l'eau et les ions minéraux (nitrates, phosphates, potassium...) dans le sol. Elle occupe donc deux milieux à la fois : l'atmosphère, par ses parties aériennes, et le sol, par ses racines. Son organisation répond à ce double défi.",
              ],
            },
            {
              heading: "De grandes surfaces d'échange",
              paragraphs: [
                "Les feuilles constituent une très grande surface d'échange avec l'atmosphère. Leur limbe est aplati et mince, ce qui augmente la surface par rapport au volume, capte la lumière et facilite la diffusion des gaz. L'épiderme est couvert d'une cuticule cireuse qui limite les pertes d'eau, et percé de stomates, de petits orifices dont l'ouverture règle les échanges de dioxyde de carbone, de dioxygène et de vapeur d'eau. À l'intérieur, le parenchyme chlorophyllien, riche en chloroplastes, réalise la photosynthèse.",
                "Dans le sol, le système racinaire est très ramifié. Près de l'extrémité des racines, des poils absorbants, de fins prolongements des cellules de l'épiderme, multiplient la surface de contact avec le sol. La plupart des plantes vivent en outre en symbiose avec des champignons du sol : ces associations, les mycorhizes, prolongent considérablement le réseau d'absorption. Le champignon fournit eau et ions minéraux, la plante lui fournit des sucres.",
              ],
              box: { label: "À retenir", text: "Les surfaces d'échange de la plante sont très grandes par rapport à son volume : feuilles minces et nombreuses dans l'air, racines ramifiées, poils absorbants et mycorhizes dans le sol." },
            },
            {
              heading: "Deux systèmes conducteurs : xylème et phloème",
              paragraphs: [
                "La sève brute, composée d'eau et d'ions minéraux, circule des racines vers les feuilles dans le xylème. Le xylème est formé de vaisseaux : des cellules mortes, vides, aux parois épaissies de lignine, mises bout à bout comme des tuyaux. Le moteur principal de cette montée est la transpiration : l'évaporation de l'eau au niveau des stomates crée une aspiration qui tire la colonne d'eau depuis les racines.",
                "La sève élaborée, composée d'eau et de molécules organiques (surtout du saccharose, mais aussi des acides aminés), circule dans le phloème. Le phloème est formé de tubes criblés, des cellules vivantes reliées par des parois percées de pores. La sève élaborée va des organes producteurs, dits organes sources (les feuilles adultes qui font la photosynthèse), vers les organes consommateurs ou de stockage, dits organes puits (racines, bourgeons, jeunes feuilles, fleurs, fruits, tubercules).",
              ],
              box: { label: "Définition", text: "Xylème : tissu conducteur de la sève brute (eau et ions minéraux), des racines vers les feuilles. Phloème : tissu conducteur de la sève élaborée (sucres, acides aminés), des organes sources vers les organes puits." },
            },
            {
              heading: "Croissance par les méristèmes et production de molécules",
              paragraphs: [
                "Une plante grandit pendant toute sa vie grâce à des méristèmes : des massifs de cellules qui se divisent par mitose, situés à l'extrémité des tiges (dans les bourgeons) et des racines. Elle produit sans cesse de nouveaux organes, ce qui lui permet de s'adapter à son milieu : un même plant de pissenlit aura un port très différent en montagne et en plaine. Cette croissance continue compense en partie l'immobilité.",
                "La photosynthèse, dans les chloroplastes, produit du glucose : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l'énergie lumineuse. À partir de ce glucose, la plante fabrique le saccharose (forme de transport), l'amidon (forme de réserve, dans les graines et les tubercules), la cellulose (constituant des parois des cellules) et la lignine (qui rigidifie le bois). Elle produit aussi des molécules dites secondaires, qui ne servent pas directement à sa croissance mais à ses relations avec le milieu : pigments comme les anthocyanes, parfums, molécules toxiques ou répulsives comme les tanins et les alcaloïdes (caféine, nicotine).",
              ],
              box: { label: "Formule", text: "Photosynthèse : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, avec de l'énergie lumineuse captée par la chlorophylle dans les chloroplastes." },
            },
            {
              heading: "Se défendre et traverser les saisons sans bouger",
              paragraphs: [
                "Faute de pouvoir fuir, la plante se défend sur place. Elle possède des défenses mécaniques : épines, poils, cuticule épaisse, écorce. Elle possède aussi des défenses chimiques : beaucoup de molécules secondaires sont toxiques ou ont un goût repoussant pour les herbivores, et certaines plantes en produisent davantage lorsqu'elles sont attaquées.",
                "Face aux variations saisonnières, la plante modifie son fonctionnement. Un arbre à feuilles caduques perd ses feuilles en automne et passe l'hiver sous forme de bourgeons protégés par des écailles, en vivant sur ses réserves. Les plantes vivaces stockent des réserves dans des organes souterrains (bulbe de la tulipe, tubercule de la pomme de terre, rhizome de l'iris) d'où elles repartent au printemps. Les plantes annuelles meurent et ne survivent que sous forme de graines, en vie ralentie.",
              ],
            },
          ],
          keyPoints: [
            "Fixée et autotrophe, la plante prélève CO₂ dans l'air, eau et ions minéraux dans le sol, et utilise la lumière.",
            "Ses surfaces d'échange sont très grandes : feuilles minces à stomates, racines ramifiées, poils absorbants, mycorhizes.",
            "Xylème : sève brute (eau, ions), des racines aux feuilles, tirée par la transpiration.",
            "Phloème : sève élaborée (saccharose, acides aminés), des organes sources vers les organes puits.",
            "Les méristèmes permettent une croissance continue et la production de nouveaux organes toute la vie.",
            "La plante produit saccharose, amidon, cellulose, lignine, et des molécules de défense ou de communication.",
            "Elle se défend sur place (épines, molécules toxiques) et passe la mauvaise saison en vie ralentie (bourgeons, réserves, graines).",
          ],
          example: {
            statement: "On retire un anneau d'écorce de quelques centimètres tout autour du tronc d'un jeune arbre fruitier (annélation), sans toucher au bois. Quelques semaines plus tard, l'écorce gonfle juste au-dessus de l'anneau, les fruits situés au-dessus grossissent davantage, et les racines finissent par dépérir. Expliquez ces résultats.",
            solution: [
              "L'écorce contient le phloème, alors que le bois contient le xylème. L'annélation interrompt donc la circulation de la sève élaborée, mais pas celle de la sève brute.",
              "La sève brute continue de monter des racines vers les feuilles par le xylème : les feuilles restent alimentées en eau et poursuivent la photosynthèse.",
              "Les sucres produits par les feuilles descendent par le phloème ; bloqués par l'anneau, ils s'accumulent au-dessus : l'écorce gonfle et les fruits situés au-dessus reçoivent davantage de sucres.",
              "Les racines, organes puits, ne reçoivent plus de sucres : elles épuisent leurs réserves puis dépérissent.",
              "Conclusion : la sève élaborée circule dans le phloème de l'écorce, des feuilles (organes sources) vers les organes puits, dont les racines.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque structure, indiquez sa fonction : stomate, poil absorbant, vaisseau du xylème, tube criblé du phloème, méristème, mycorhize.",
              hint: "Classez d'abord chaque structure selon qu'elle concerne les échanges, la circulation ou la croissance.",
              solution: [
                "Stomate : orifice de la feuille qui règle les échanges gazeux (entrée du CO₂, sortie de l'O₂ et de la vapeur d'eau).",
                "Poil absorbant : prolongement d'une cellule de la racine qui augmente la surface d'absorption de l'eau et des ions minéraux.",
                "Vaisseau du xylème : conduit formé de cellules mortes lignifiées, qui transporte la sève brute des racines vers les feuilles.",
                "Tube criblé du phloème : conduit formé de cellules vivantes, qui transporte la sève élaborée des organes sources vers les organes puits.",
                "Méristème : groupe de cellules qui se divisent et assurent la croissance continue de la plante.",
                "Mycorhize : association symbiotique entre racine et champignon, qui étend la surface d'absorption.",
              ],
            },
            {
              level: 2,
              statement: "On modélise une feuille par une plaque de 50 cm² de surface et de 0,3 mm d'épaisseur (on compte ses deux faces et l'on néglige les bords). 1) Calculez son volume (en cm³) et sa surface d'échange. 2) Une sphère de même volume aurait un rayon d'environ 0,71 cm. Calculez sa surface (S = 4πr²). 3) Comparez les rapports surface/volume et concluez sur l'intérêt de la forme des feuilles.",
              hint: "Convertissez l'épaisseur en centimètres : 0,3 mm = 0,03 cm.",
              solution: [
                "1) Volume : 50 × 0,03 = 1,5 cm³. Surface d'échange : 2 × 50 = 100 cm².",
                "2) Surface de la sphère : 4 × π × 0,71² ≈ 4 × 3,14 × 0,504 ≈ 6,3 cm².",
                "3) Rapport surface/volume de la feuille : 100 ÷ 1,5 ≈ 67 cm⁻¹ ; celui de la sphère : 6,3 ÷ 1,5 ≈ 4,2 cm⁻¹. À volume égal, la feuille offre environ 16 fois plus de surface (100 ÷ 6,3 ≈ 16).",
                "Conclusion : la forme aplatie et mince des feuilles multiplie la surface d'échange avec l'atmosphère, ce qui favorise la captation de la lumière et les échanges gazeux nécessaires à la photosynthèse d'un organisme fixé.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On fournit à une seule feuille adulte d'un plant de tomate, pendant une heure et à la lumière, du dioxyde de carbone marqué au carbone 14. Six heures plus tard, on détecte la radioactivité dans les cellules du phloème de la tige, dans les jeunes fruits et dans les racines, mais très peu dans les autres feuilles adultes. Dans une seconde expérience, on place un plant dont les racines baignent dans une solution colorée : le colorant apparaît dans les vaisseaux du xylème de la tige puis dans les nervures des feuilles. Exploitez ces deux expériences pour montrer comment la plante assure la distribution de la matière dans tout son organisme.",
              hint: "Distinguez ce qui entre par la feuille (le carbone) de ce qui entre par la racine (l'eau colorée), et suivez le trajet de chacun.",
              solution: [
                "Expérience 1 : le carbone 14 entre dans la feuille sous forme de CO₂ ; à la lumière, il est incorporé dans des molécules organiques par la photosynthèse. La feuille adulte éclairée est un organe source.",
                "La radioactivité se retrouve dans le phloème de la tige : les molécules organiques produites (essentiellement du saccharose) sont transportées par la sève élaborée, dans le phloème.",
                "Elle se retrouve dans les jeunes fruits et les racines, qui ne produisent pas ou peu de matière organique : ce sont des organes puits, en croissance ou de stockage. Les autres feuilles adultes, elles-mêmes sources, en reçoivent très peu.",
                "Expérience 2 : la solution absorbée par les racines monte dans les vaisseaux du xylème jusqu'aux feuilles : c'est le trajet de la sève brute, tirée par la transpiration foliaire.",
                "Conclusion : la plante possède deux circulations complémentaires. Le xylème distribue l'eau et les ions minéraux prélevés dans le sol vers les feuilles ; le phloème distribue la matière organique produite dans les feuilles vers les organes qui en ont besoin. Ces deux systèmes conducteurs relient les surfaces d'échange aériennes et souterraines d'un organisme fixé.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque structure de la plante à sa fonction.",
            pairs: [
              { left: "Stomate", right: "Régler les échanges gazeux de la feuille" },
              { left: "Poil absorbant", right: "Augmenter la surface d'absorption de la racine" },
              { left: "Xylème", right: "Conduire la sève brute vers les feuilles" },
              { left: "Phloème", right: "Distribuer les sucres vers les organes puits" },
              { left: "Méristème", right: "Produire de nouvelles cellules pour la croissance" },
              { left: "Mycorhize", right: "Étendre le réseau d'absorption grâce à un champignon" },
            ],
          },
          quiz: [
            {
              q: "Que contient principalement la sève élaborée ?",
              options: ["De l'eau et des ions minéraux seulement, prélevés dans le sol", "Du dioxygène dissous", "De la lignine", "De l'eau, du saccharose et des acides aminés"],
              answer: 3,
              why: "La sève élaborée transporte la matière organique produite par la photosynthèse, surtout du saccharose, dans le phloème.",
            },
            {
              q: "Quel est le principal moteur de la montée de la sève brute ?",
              options: ["La transpiration au niveau des feuilles", "La contraction des vaisseaux", "La pesanteur", "La photosynthèse réalisée par les cellules des racines"],
              answer: 0,
              why: "L'évaporation d'eau par les stomates crée une aspiration qui tire la colonne d'eau dans le xylème.",
            },
            {
              q: "Lequel de ces organes est un organe puits ?",
              options: ["Une feuille adulte éclairée", "Un stomate ouvert", "Un fruit en croissance", "Un vaisseau du xylème"],
              answer: 2,
              why: "Un fruit en croissance consomme ou stocke la matière organique produite ailleurs : il reçoit la sève élaborée.",
            },
            {
              q: "Sous quelle forme la plante stocke-t-elle principalement ses réserves glucidiques ?",
              options: ["Cellulose", "Amidon", "Lignine", "Saccharose dans le xylème"],
              answer: 1,
              why: "L'amidon est la forme de réserve, accumulée dans les graines, les tubercules ou les racines ; la cellulose et la lignine sont des constituants des parois.",
            },
            {
              q: "Quel est le rôle des mycorhizes ?",
              options: ["Étendre l'absorption racinaire grâce à un champignon", "Produire des graines", "Fixer le CO₂ de l'air", "Transporter la sève élaborée de la tige jusqu'aux racines"],
              answer: 0,
              why: "Les filaments du champignon associé aux racines prolongent la surface d'absorption ; en échange, la plante fournit des sucres.",
            },
          ],
          trap: "Confondre les deux sèves : la sève brute (eau et ions minéraux) monte dans le xylème, alors que la sève élaborée (sucres) circule dans le phloème des organes sources vers les organes puits, donc aussi bien vers le haut que vers le bas.",
          method: "Pour chaque caractéristique de la plante, formulez le lien avec la vie fixée sous la forme « contrainte, puis réponse » : par exemple « la plante ne peut pas se déplacer pour chercher de l'eau, donc elle développe une très grande surface d'absorption racinaire ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reproduction-plante',
          title: 'La reproduction des plantes à fleurs et la vie fixée',
          minutes: 30,
          objectives: [
            "Identifier les pièces florales et leur rôle dans la reproduction sexuée.",
            "Expliquer comment la pollinisation, assurée par le vent ou par des animaux, permet la rencontre des gamètes malgré la vie fixée.",
            "Relier la fécondation à la formation de la graine et du fruit, et expliquer la dissémination des graines.",
            "Comparer reproduction sexuée et reproduction asexuée chez les plantes, et leurs conséquences génétiques.",
          ],
          course: [
            {
              heading: "La fleur, organe de la reproduction sexuée",
              paragraphs: [
                "Une fleur est formée de pièces disposées en cercles concentriques. De l'extérieur vers l'intérieur : les sépales, souvent verts, qui protègent le bouton floral ; les pétales, souvent colorés ; les étamines, pièces reproductrices mâles ; le pistil, pièce reproductrice femelle, formé d'un ou plusieurs carpelles. La plupart des fleurs sont hermaphrodites : elles portent à la fois des étamines et un pistil.",
                "Chaque étamine est formée d'un filet et d'une anthère qui produit les grains de pollen ; chaque grain de pollen contient les gamètes mâles. Le pistil comprend le stigmate (surface collante qui reçoit le pollen), le style, et l'ovaire, qui renferme un ou plusieurs ovules ; chaque ovule contient un gamète femelle, l'oosphère. Les gamètes, issus de la méiose, sont haploïdes.",
              ],
              box: { label: "À retenir", text: "Étamine (anthère) : production des grains de pollen, porteurs des gamètes mâles. Pistil (stigmate, style, ovaire) : l'ovaire contient les ovules, porteurs des gamètes femelles." },
            },
            {
              heading: "La pollinisation : faire voyager le pollen",
              paragraphs: [
                "Les gamètes mâles ne sont pas mobiles et la plante ne se déplace pas : la rencontre des gamètes nécessite que le pollen soit transporté de l'anthère jusqu'au stigmate. C'est la pollinisation. Elle peut se faire au sein d'une même fleur ou d'une même plante (autopollinisation), ou entre deux individus différents (pollinisation croisée), ce qui augmente le brassage génétique.",
                "Le pollen peut être transporté par le vent : les fleurs sont alors souvent petites et peu colorées, sans nectar, et produisent un pollen léger et très abondant (graminées, noisetier, chêne). Il peut aussi être transporté par des animaux, surtout des insectes : les fleurs sont alors colorées, parfumées, et offrent du nectar ou du pollen en récompense (pommier, sauge, orchidées). Chez de nombreuses espèces, des mécanismes favorisent la pollinisation croisée : maturité décalée des étamines et du pistil, auto-incompatibilité (le pollen de la même plante ne peut pas féconder ses ovules), ou séparation des sexes sur des individus différents (kiwi, houx).",
              ],
              box: { label: "Définition", text: "Pollinisation : transport du pollen des étamines jusqu'au stigmate du pistil. Elle est croisée quand le pollen provient d'un autre individu de la même espèce." },
            },
            {
              heading: "Une collaboration entre plantes et pollinisateurs",
              paragraphs: [
                "La relation entre une plante à fleurs et son pollinisateur est souvent un mutualisme : l'animal obtient de la nourriture (nectar, pollen), et la plante obtient le transport de son pollen. Au cours de l'évolution, les caractéristiques des fleurs et celles des pollinisateurs se sont influencées réciproquement : c'est une coévolution.",
                "Un exemple célèbre est celui d'une orchidée de Madagascar, Angraecum sesquipedale, dont le nectar est situé au fond d'un éperon d'environ 30 cm de long. Charles Darwin a prédit en 1862 l'existence d'un insecte doté d'une trompe aussi longue. Un papillon de nuit de ce type, le sphinx Xanthopan morganii praedicta, a été décrit au début du XXe siècle. Une spécialisation aussi étroite garantit un transport efficace du pollen, mais rend chaque partenaire dépendant de l'autre.",
              ],
            },
            {
              heading: "De la fécondation à la graine et au fruit",
              paragraphs: [
                "Déposé sur un stigmate compatible, le grain de pollen germe : il produit un tube pollinique qui s'allonge dans le style jusqu'à un ovule et y apporte deux gamètes mâles. Chez les plantes à fleurs, la fécondation est double : un gamète mâle s'unit à l'oosphère et forme la cellule-œuf, qui donnera l'embryon ; l'autre s'unit à une cellule centrale de l'ovule et forme un tissu de réserve, l'albumen.",
                "Après la fécondation, l'ovule se transforme en graine : elle contient l'embryon, des réserves (dans l'albumen ou dans les cotylédons) et une enveloppe protectrice. La paroi de l'ovaire se transforme en fruit, qui contient la ou les graines. La graine se déshydrate et entre en vie ralentie : elle peut survivre longtemps, jusqu'à ce que les conditions permettent sa germination.",
              ],
              box: { label: "Règle", text: "Après la fécondation : l'ovule devient la graine, la paroi de l'ovaire devient le fruit. Un fruit contient donc des graines, un pépin ou un noyau." },
            },
            {
              heading: "Disperser les graines et se multiplier sans fécondation",
              paragraphs: [
                "La graine et le fruit sont la phase mobile du cycle d'une plante fixée. La dissémination éloigne les descendants de la plante mère, ce qui limite la compétition et permet de coloniser de nouveaux milieux. Elle se fait par le vent (akènes à aigrette du pissenlit, samares ailées de l'érable), par les animaux (fruits charnus mangés dont les graines sont rejetées plus loin, fruits à crochets accrochés au pelage comme ceux de la bardane), par l'eau (noix de coco) ou par la plante elle-même (fruits qui éclatent).",
                "Beaucoup de plantes se reproduisent aussi de façon asexuée, à partir d'un fragment de l'individu : stolons du fraisier, tubercules de la pomme de terre, bulbes, rhizomes. Les individus obtenus sont des clones, génétiquement identiques à la plante mère. Cette multiplication végétative permet une colonisation rapide d'un milieu favorable, mais ne crée pas de diversité génétique. L'humain l'utilise pour reproduire à l'identique une variété intéressante (bouturage, marcottage, greffage).",
              ],
            },
          ],
          keyPoints: [
            "Étamines : pollen porteur des gamètes mâles ; pistil : ovaire contenant les ovules porteurs des gamètes femelles.",
            "La pollinisation transporte le pollen jusqu'au stigmate, grâce au vent ou à des animaux pollinisateurs.",
            "La pollinisation croisée, favorisée par divers mécanismes, augmente le brassage génétique.",
            "Plantes et pollinisateurs forment souvent un mutualisme, résultat d'une coévolution.",
            "Après la fécondation, l'ovule devient la graine et la paroi de l'ovaire devient le fruit.",
            "La dissémination des graines (vent, animaux, eau) est la phase mobile du cycle d'une plante fixée.",
            "La reproduction asexuée (stolons, tubercules, bulbes) produit des clones, sans diversité génétique.",
          ],
          example: {
            statement: "Sur un pommier, on enferme 100 fleurs en bouton dans des sacs à mailles fines qui laissent passer l'air mais pas les insectes, et on laisse 100 autres fleurs libres. À la fin de la saison, 3 fleurs ensachées et 72 fleurs libres ont donné un fruit. Interprétez ces résultats.",
            solution: [
              "Seule différence entre les deux lots : l'accès des insectes aux fleurs.",
              "Fleurs libres : 72 % de fructification ; fleurs ensachées : 3 %.",
              "Sans insectes, la formation de fruits est presque nulle : le pollen n'est pas transporté jusqu'au stigmate, ou le pollen de la même fleur ne permet pas la fécondation.",
              "Or un fruit se forme à partir de l'ovaire après la fécondation, qui nécessite une pollinisation.",
              "Conclusion : chez le pommier, la pollinisation est essentiellement assurée par les insectes ; la plante dépend de ses pollinisateurs pour sa reproduction sexuée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez ce que devient chacun des éléments suivants après la fécondation, ou s'il disparaît : ovule, paroi de l'ovaire, oosphère fécondée, pétales, étamines.",
              hint: "Pensez à une cerise : où se trouvent le fruit, la graine et l'embryon ?",
              solution: [
                "Ovule : il devient la graine.",
                "Paroi de l'ovaire : elle devient le fruit (la chair de la cerise et la coque dure du noyau).",
                "Oosphère fécondée (cellule-œuf) : elle se développe en embryon, à l'intérieur de la graine.",
                "Pétales et étamines : ils fanent et tombent, leur rôle étant terminé.",
              ],
            },
            {
              level: 2,
              statement: "Fleur A : petite, verdâtre, sans parfum ni nectar, étamines longues pendant hors de la fleur, pollen très abondant et léger, stigmates plumeux. Fleur B : grande, pétales jaunes vifs, parfumée, nectar au fond de la corolle, pollen collant en quantité modérée. 1) Déterminez le mode de pollinisation probable de chaque fleur en justifiant. 2) Pourquoi la fleur A produit-elle beaucoup plus de pollen que la fleur B ?",
              hint: "Cherchez, pour chaque fleur, ce qui attire un animal ou ce qui facilite le transport par le vent.",
              solution: [
                "1) Fleur A : absence de couleur, de parfum et de nectar (rien pour attirer un animal) ; étamines exposées, pollen léger et abondant, stigmates plumeux qui captent les grains en suspension dans l'air : pollinisation par le vent.",
                "Fleur B : pétales colorés, parfum et nectar attirent et récompensent les animaux ; pollen collant qui s'accroche à leur corps : pollinisation par les insectes.",
                "2) Le transport par le vent est aléatoire : la très grande majorité des grains de pollen n'atteint jamais un stigmate. Une production massive augmente la probabilité qu'au moins quelques grains arrivent à destination. Un insecte, lui, transporte le pollen directement de fleur en fleur, de façon plus ciblée.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Chez une espèce de tabac sauvage, on dépose sur le stigmate de fleurs soit du pollen de la même plante, soit du pollen d'une autre plante de la même espèce. Avec le pollen de la même plante, les tubes polliniques s'arrêtent dans le style et 0 % des fleurs donnent un fruit. Avec le pollen d'une autre plante, les tubes polliniques atteignent les ovules et 85 % des fleurs donnent un fruit. En exploitant ces résultats et vos connaissances, expliquez comment ce mécanisme, associé aux pollinisateurs, permet à une plante fixée de favoriser la diversité génétique de sa descendance.",
              hint: "Nommez le mécanisme mis en évidence, puis expliquez ce qu'apporte la fécondation entre deux individus différents.",
              solution: [
                "Avec son propre pollen, la plante ne forme aucun fruit car les tubes polliniques s'arrêtent dans le style : la fécondation est impossible. C'est un mécanisme d'auto-incompatibilité.",
                "Avec le pollen d'un autre individu, les tubes atteignent les ovules, la fécondation a lieu et 85 % des fleurs donnent un fruit.",
                "Cette plante ne peut donc se reproduire sexuellement que par pollinisation croisée. Fixée, elle dépend d'un vecteur, ici les pollinisateurs, qui transportent le pollen d'un individu à un autre.",
                "La fécondation entre deux individus différents réunit des gamètes porteurs de combinaisons d'allèles différentes, issues de la méiose chez deux parents distincts : la descendance est génétiquement plus diversifiée qu'avec l'autofécondation.",
                "Conclusion : l'auto-incompatibilité impose la pollinisation croisée, et le transport du pollen par les animaux compense l'immobilité de la plante ; ensemble, ils maintiennent la diversité génétique de l'espèce.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Faites le point sur la reproduction des plantes à fleurs.",
            statements: [
              { text: "Le fruit provient de la transformation de la paroi de l'ovaire.", true: true, why: "Après la fécondation, l'ovaire grossit et sa paroi forme le fruit, autour des graines." },
              { text: "La graine provient de la transformation de l'étamine.", true: false, why: "La graine provient de l'ovule, contenu dans l'ovaire du pistil." },
              { text: "Les fleurs pollinisées par le vent sont en général très colorées et parfumées.", true: false, why: "Couleur, parfum et nectar servent à attirer des animaux ; les fleurs pollinisées par le vent en sont souvent dépourvues." },
              { text: "Une plante issue d'un stolon de fraisier est un clone de la plante mère.", true: true, why: "La reproduction asexuée ne fait pas intervenir de fécondation : les descendants sont génétiquement identiques." },
              { text: "La pollinisation et la fécondation désignent le même événement.", true: false, why: "La pollinisation est le transport du pollen ; la fécondation est l'union des gamètes, qui a lieu ensuite dans l'ovule." },
              { text: "La relation entre une fleur et son pollinisateur est souvent à bénéfice réciproque.", true: true, why: "L'animal se nourrit de nectar ou de pollen, la plante voit son pollen transporté : c'est un mutualisme." },
              { text: "Une plante fixée ne peut pas coloniser de nouveaux milieux.", true: false, why: "Ses graines et ses fruits, dispersés par le vent, l'eau ou les animaux, lui permettent de coloniser de nouveaux milieux." },
            ],
          },
          quiz: [
            {
              q: "Où se trouvent les gamètes femelles d'une plante à fleurs ?",
              options: ["Dans les anthères situées au bout des étamines", "Dans les ovules, à l'intérieur de l'ovaire", "Sur le stigmate", "Dans les pétales"],
              answer: 1,
              why: "Chaque ovule, contenu dans l'ovaire du pistil, renferme un gamète femelle, l'oosphère.",
            },
            {
              q: "Qu'appelle-t-on pollinisation croisée ?",
              options: ["L'union de deux gamètes mâles", "La formation du tube pollinique", "Le passage du pollen d'une fleur à une autre fleur du même pied", "Le transport du pollen d'un individu à un autre de la même espèce"],
              answer: 3,
              why: "La pollinisation croisée unit les gamètes de deux individus différents et augmente le brassage génétique.",
            },
            {
              q: "Quel rôle joue la dissémination des graines pour une plante fixée ?",
              options: ["Elle permet de coloniser de nouveaux milieux", "Elle assure la fécondation", "Elle produit des clones", "Elle protège les fleurs du froid pendant l'hiver"],
              answer: 0,
              why: "Graines et fruits sont la phase mobile du cycle : ils éloignent les descendants de la plante mère.",
            },
            {
              q: "Quelle est la conséquence génétique de la reproduction asexuée ?",
              options: ["Une forte diversité des descendants", "Des descendants haploïdes", "Des descendants identiques à la plante mère", "Un doublement du nombre de chromosomes des cellules"],
              answer: 2,
              why: "Sans méiose ni fécondation, les descendants sont des clones de la plante mère.",
            },
            {
              q: "Comment le pollen atteint-il l'ovule après s'être déposé sur le stigmate ?",
              options: ["Il est transporté par la sève brute", "Il nage dans un liquide du style", "Il est transporté par un insecte dans l'ovaire", "Il germe et forme un tube pollinique"],
              answer: 3,
              why: "Le tube pollinique traverse le style et apporte les gamètes mâles jusqu'à l'ovule.",
            },
          ],
          trap: "Confondre pollinisation et fécondation : la pollinisation est le transport du pollen jusqu'au stigmate, la fécondation est l'union des gamètes dans l'ovule. Autre erreur : croire que la graine vient de la fleur entière, alors qu'elle provient de l'ovule.",
          method: "Pour relier une caractéristique de reproduction à la vie fixée, demandez-vous à chaque étape « qu'est-ce qui se déplace à la place de la plante ? » : le pollen (grâce au vent ou à un animal) pour la rencontre des gamètes, puis la graine ou le fruit pour la dispersion des descendants.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'domestication-des-plantes',
          title: 'La domestication des plantes',
          minutes: 30,
          objectives: [
            "Expliquer ce qu'est la domestication et situer ses principaux foyers dans le temps et l'espace.",
            "Identifier les caractères sélectionnés lors de la domestication (syndrome de domestication), à partir de l'exemple du maïs et du blé.",
            "Décrire les techniques d'amélioration des plantes, de la sélection ancienne aux biotechnologies.",
            "Argumenter sur les enjeux de la diversité génétique des plantes cultivées et de leurs parents sauvages.",
          ],
          course: [
            {
              heading: "Domestiquer : sélectionner sur des générations",
              paragraphs: [
                "La domestication est le processus par lequel des humains cultivent une plante sauvage et sélectionnent, génération après génération, les individus qui présentent les caractères qui les intéressent. Ce faisant, ils modifient la composition génétique de la population cultivée, qui finit par se distinguer nettement de l'espèce sauvage d'origine et par dépendre des humains pour se reproduire.",
                "La domestication des plantes a commencé il y a environ 10 000 à 11 000 ans au Proche-Orient, dans le Croissant fertile (blés, orge, lentille, pois), au début du Néolithique. Elle est apparue indépendamment dans plusieurs autres foyers : en Chine (riz, millets), en Méso-Amérique (maïs, courges, haricots), dans les Andes (pomme de terre, quinoa), en Afrique (sorgho, mil, riz africain) ou en Nouvelle-Guinée (taro, bananier). Elle s'accompagne d'une sédentarisation des populations humaines.",
              ],
              box: { label: "Définition", text: "Domestication : processus de sélection, par les humains et sur de nombreuses générations, de plantes cultivées dont les caractères génétiques se sont éloignés de ceux de l'espèce sauvage d'origine." },
            },
            {
              heading: "Le syndrome de domestication",
              paragraphs: [
                "Les plantes domestiquées partagent un ensemble de caractères appelé syndrome de domestication. Le plus important concerne la dissémination : chez les céréales sauvages, l'épi se désarticule à maturité et les grains tombent au sol ; chez les céréales cultivées, l'axe de l'épi (le rachis) reste solide et les grains restent sur la plante jusqu'à la récolte. Ce caractère, désavantageux dans la nature, a été sélectionné involontairement : ce sont les grains restés sur l'épi qui étaient récoltés puis semés.",
                "D'autres caractères ont été sélectionnés : des graines ou des fruits plus gros, une germination plus rapide et plus homogène (perte de la dormance), une maturité groupée, un port plus compact, et la diminution des défenses chimiques. L'amande sauvage contient par exemple une molécule amère qui libère du cyanure, absente de l'amande douce cultivée. La plante domestiquée, moins défendue et incapable de disséminer ses graines, survit mal sans les humains.",
              ],
              box: { label: "À retenir", text: "Syndrome de domestication : graines qui restent sur la plante, organes récoltés plus gros, germination homogène, maturité groupée, port compact, défenses chimiques réduites." },
            },
            {
              heading: "Deux exemples : le maïs et le blé tendre",
              paragraphs: [
                "Le maïs a été domestiqué il y a environ 9 000 ans au Mexique, à partir d'une graminée sauvage, la téosinte. La téosinte est très ramifiée et porte de nombreux petits épis de quelques grains, chacun enfermé dans une enveloppe dure. Le maïs n'a qu'une tige principale et quelques gros épis portant des centaines de grains nus. Ces différences importantes dépendent d'un petit nombre de gènes ; l'un d'eux, appelé tb1, contrôle la ramification : l'allèle du maïs, plus exprimé, limite le développement des rameaux latéraux.",
                "Le blé tendre, base du pain, est issu d'hybridations successives suivies de doublements du nombre de chromosomes (polyploïdisation). Une espèce de blé sauvage à génome AA (2n = 14) s'est hybridée avec une graminée proche d'Aegilops speltoides, à génome BB (2n = 14), donnant après doublement le blé amidonnier, AABB (2n = 28). Après sa domestication, l'amidonnier cultivé s'est hybridé avec une graminée sauvage, Aegilops tauschii (DD, 2n = 14), ce qui a donné le blé tendre, AABBDD (2n = 42), il y a environ 8 000 à 10 000 ans.",
              ],
            },
            {
              heading: "Les techniques d'amélioration des plantes",
              paragraphs: [
                "Pendant des millénaires, les agriculteurs ont pratiqué une sélection massale : ils gardaient les graines des plus belles plantes pour les semer l'année suivante. Avec la génétique, au XXe siècle, se développent les croisements contrôlés entre variétés choisies, la création de lignées pures (homozygotes) et des hybrides F1 issus du croisement de deux lignées. Ces hybrides présentent souvent une vigueur supérieure à celle des deux parents (effet d'hétérosis), mais leurs descendants sont hétérogènes : l'agriculteur rachète donc ses semences chaque année.",
                "Les biotechnologies ont ajouté de nouveaux outils. La sélection assistée par marqueurs repère dans l'ADN les allèles intéressants dès le stade plantule. La transgenèse introduit un gène d'une autre espèce : le maïs Bt, par exemple, produit une protéine insecticide issue d'une bactérie, Bacillus thuringiensis. L'édition du génome, avec l'outil CRISPR-Cas9 décrit en 2012, modifie une séquence précise d'un gène de la plante. Ces techniques soulèvent des questions scientifiques, économiques, réglementaires et éthiques qui font l'objet de débats.",
              ],
            },
            {
              heading: "La diversité génétique, un patrimoine à préserver",
              paragraphs: [
                "La domestication puis la sélection moderne ont réduit la diversité génétique des plantes cultivées : seuls quelques individus sauvages ont été à l'origine des premières populations cultivées, et les variétés modernes, très productives, sont souvent génétiquement homogènes. Trois céréales, le riz, le blé et le maïs, fournissent à elles seules plus de la moitié des calories d'origine végétale consommées dans le monde, selon la FAO.",
                "Une culture génétiquement uniforme est vulnérable : un même parasite peut la détruire partout à la fois. La grande famine irlandaise de 1845 à 1849 en est un exemple : les pommes de terre cultivées, très peu diverses, ont été ravagées par le mildiou. Pour faire face aux maladies et au changement climatique, il est essentiel de conserver la diversité des variétés anciennes et des espèces sauvages apparentées, qui portent des allèles utiles (résistance, tolérance à la sécheresse). C'est le rôle des banques de graines, comme la réserve mondiale de semences du Svalbard, ouverte en 2008 en Norvège.",
              ],
            },
          ],
          keyPoints: [
            "Domestication : sélection par les humains, sur des générations, de plantes cultivées génétiquement différentes de l'espèce sauvage.",
            "Elle débute il y a environ 10 000 à 11 000 ans dans le Croissant fertile, et dans plusieurs autres foyers indépendants.",
            "Syndrome de domestication : graines non dispersées, organes plus gros, germination homogène, défenses réduites.",
            "Le maïs vient de la téosinte (Mexique) ; le blé tendre (2n = 42) vient d'hybridations et de polyploïdisations.",
            "Techniques : sélection massale, croisements, hybrides F1, sélection assistée par marqueurs, transgenèse, édition du génome.",
            "La perte de diversité génétique rend les cultures vulnérables ; on conserve variétés anciennes et parents sauvages.",
          ],
          example: {
            statement: "Chez l'orge sauvage, l'épi se désarticule à maturité et les grains tombent au sol. Dans les sites archéologiques du Proche-Orient, la proportion d'épis à rachis solide (qui ne se désarticulent pas) passe d'environ 10 % à plus de 90 % en quelques milliers d'années. Expliquez cette évolution.",
            solution: [
              "Le caractère « rachis solide » est rare dans la population sauvage, car les plantes qui ne dispersent pas leurs grains se reproduisent mal dans la nature.",
              "Lors de la récolte, les humains coupent les épis : les grains des épis fragiles sont déjà tombés au sol ou tombent pendant la récolte, alors que ceux des épis à rachis solide sont emportés.",
              "Une partie de la récolte est ressemée l'année suivante : les plantes à rachis solide, porteuses des allèles correspondants, sont donc surreprésentées dans la génération suivante.",
              "Répétée génération après génération, cette sélection, en partie involontaire, augmente la fréquence de ce caractère.",
              "Conclusion : la proportion d'épis à rachis solide augmente sous l'effet de la sélection exercée par les pratiques de culture ; c'est un caractère typique du syndrome de domestication.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le blé tendre a pour formule génomique AABBDD, chaque génome (A, B ou D) apportant 7 chromosomes. 1) Combien de chromosomes possède une cellule de blé tendre ? 2) Combien en possède un gamète ? 3) Combien de chromosomes possède le blé amidonnier, AABB ?",
              hint: "Comptez chaque lettre : chacune correspond à un lot de 7 chromosomes.",
              solution: [
                "1) AABBDD représente 6 lots de 7 chromosomes : 6 × 7 = 42 chromosomes (2n = 42).",
                "2) Un gamète contient un génome de chaque type, ABD : 3 × 7 = 21 chromosomes (n = 21).",
                "3) AABB représente 4 lots de 7 : 4 × 7 = 28 chromosomes (2n = 28).",
              ],
            },
            {
              level: 2,
              statement: "Comparez la téosinte et le maïs pour les caractères suivants : nombre de tiges et de rameaux, nombre et taille des épis, nombre de grains par épi, enveloppe des grains, devenir des grains à maturité (chez la téosinte, l'épi se désarticule et les grains tombent ; chez le maïs, ils restent sur l'épi). Identifiez les caractères du syndrome de domestication et expliquez pourquoi le maïs ne pourrait pas survivre longtemps sans les humains.",
              hint: "Pour chaque caractère, demandez-vous s'il facilite la récolte et la consommation, et s'il favorise ou non la reproduction en milieu naturel.",
              solution: [
                "Téosinte : nombreuses tiges et rameaux, nombreux petits épis, quelques grains par épi, grains enfermés dans une enveloppe dure, épi qui se désarticule à maturité.",
                "Maïs : une tige principale peu ramifiée, quelques gros épis, des centaines de grains nus, grains qui restent sur l'épi.",
                "Caractères de domestication : port compact (facilite la culture et la récolte), épis plus gros et plus riches en grains (rendement), grains nus (consommation facile), grains qui restent sur l'épi (récolte).",
                "Sans les humains, les grains du maïs restent serrés sur l'épi et enveloppés de feuilles (les spathes) : ils ne sont pas dispersés et, s'ils germent sur place, les plantules entrent en concurrence les unes avec les autres. Le maïs dépend donc des humains, qui égrènent et sèment ses grains.",
                "Conclusion : les caractères sélectionnés favorables à l'humain sont souvent défavorables à la survie dans la nature, ce qui rend la plante domestiquée dépendante de la culture.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Un semencier croise deux lignées pures de maïs, L1 (rendement 5 t/ha) et L2 (rendement 4 t/ha). L'hybride F1 obtenu, très homogène, donne 11 t/ha. Un agriculteur qui ressème les grains récoltés sur ses plants F1 obtient une génération F2 hétérogène, dont le rendement moyen est d'environ 7 t/ha (données simplifiées). 1) Expliquez pourquoi les plants F1 sont homogènes et pourquoi les F2 ne le sont pas. 2) Expliquez pourquoi l'agriculteur rachète des semences chaque année. 3) Discutez les avantages et les risques de cultiver partout un petit nombre d'hybrides.",
              hint: "Une lignée pure est homozygote pour tous ses gènes : quels gamètes produit-elle ? Que se passe-t-il ensuite lors de la méiose des F1 ?",
              solution: [
                "1) Une lignée pure est homozygote : chaque lignée ne produit qu'un seul type de gamète. Tous les F1 reçoivent donc le même lot d'allèles de L1 et le même lot de L2 : ils ont tous le même génotype, hétérozygote pour de nombreux gènes, d'où leur homogénéité.",
                "Les F1, hétérozygotes, produisent par méiose (brassages interchromosomique et intrachromosomique) des gamètes très variés. Les F2 ont donc des génotypes différents : la population est hétérogène, et seule une partie des plants conserve les combinaisons d'allèles favorables.",
                "Le rendement du F1 (11 t/ha) dépasse celui des deux parents : c'est l'effet d'hétérosis (vigueur hybride). Il diminue en F2 (environ 7 t/ha) car l'hétérozygotie et les combinaisons favorables se perdent en partie.",
                "2) Pour retrouver chaque année un champ homogène et le rendement maximal du F1, l'agriculteur doit racheter des semences F1, produites à nouveau par le croisement des deux lignées pures.",
                "3) Avantages : rendement élevé, homogénéité qui facilite la récolte et la commercialisation. Risques : une base génétique étroite rend les cultures vulnérables à un même parasite ou à un changement climatique (comme lors de la famine irlandaise), crée une dépendance des agriculteurs aux semenciers et réduit la diversité cultivée.",
                "Conclusion : les hybrides F1 illustrent l'efficacité de la sélection moderne, mais aussi la nécessité de préserver la diversité génétique des variétés anciennes et des espèces sauvages apparentées.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'histoire du blé tendre.",
            items: [
              "Hybridation entre un blé sauvage AA et une graminée proche d'Aegilops speltoides BB",
              "Doublement des chromosomes : formation de l'amidonnier sauvage AABB",
              "Domestication de l'amidonnier dans le Croissant fertile",
              "Hybridation de l'amidonnier cultivé avec Aegilops tauschii DD",
              "Doublement des chromosomes : naissance du blé tendre AABBDD",
              "Sélection de variétés modernes par croisements contrôlés",
            ],
          },
          quiz: [
            {
              q: "Où et quand a commencé la domestication des plantes ?",
              options: ["Au Proche-Orient, il y a environ 10 000 à 11 000 ans", "En Europe, il y a 2 000 ans", "En Amérique, il y a 500 ans", "En Afrique de l'Est, dès l'apparition des premiers humains"],
              answer: 0,
              why: "Les premières traces se situent dans le Croissant fertile au début du Néolithique ; d'autres foyers indépendants sont apparus ensuite.",
            },
            {
              q: "Quel est l'ancêtre sauvage du maïs ?",
              options: ["Le sorgho", "Le blé amidonnier", "La téosinte", "Le riz sauvage"],
              answer: 2,
              why: "Le maïs a été domestiqué au Mexique à partir de la téosinte, une graminée très ramifiée à petits épis.",
            },
            {
              q: "Lequel de ces caractères fait partie du syndrome de domestication ?",
              options: ["Des graines très petites", "Des épis qui se désarticulent à maturité", "Une germination très étalée dans le temps, sur plusieurs années", "Des grains qui restent sur l'épi jusqu'à la récolte"],
              answer: 3,
              why: "Le rachis solide garde les grains sur la plante : c'est le caractère clé sélectionné chez les céréales cultivées.",
            },
            {
              q: "Combien de chromosomes possède le blé tendre (AABBDD) ?",
              options: ["14", "42", "28", "21"],
              answer: 1,
              why: "Six génomes de 7 chromosomes : 6 × 7 = 42.",
            },
            {
              q: "Pourquoi la faible diversité génétique d'une culture est-elle un risque ?",
              options: ["Elle rend la récolte mécanique plus difficile et plus longue", "Elle diminue toujours le rendement", "Un même parasite peut détruire toutes les plantes", "Elle empêche la pollinisation"],
              answer: 2,
              why: "Des plantes génétiquement semblables ont les mêmes sensibilités : une maladie peut toucher toute la culture, comme le mildiou en Irlande.",
            },
          ],
          trap: "Croire que la domestication a été entièrement volontaire et rapide : de nombreux caractères, comme le rachis solide, ont été sélectionnés involontairement par les pratiques de récolte, sur des siècles voire des millénaires.",
          method: "Pour analyser un tableau comparant une plante sauvage et une plante cultivée, construisez deux colonnes : « intérêt pour l'humain » et « conséquence pour la survie dans la nature ». Le contraste entre les deux colonnes résume le syndrome de domestication.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES CLIMATS DE LA TERRE                                                */
    /* ==================================================================== */
    {
      id: 'climats-de-la-terre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reconstituer-climats-passes',
          title: 'Reconstituer les climats passés : les indices',
          minutes: 35,
          objectives: [
            "Distinguer les mesures directes du climat, disponibles depuis environ 1850, et les indices indirects des climats passés.",
            "Exploiter des indices géologiques et biologiques : traces glaciaires, pollens, fossiles, roches sédimentaires.",
            "Utiliser le rapport isotopique δ¹⁸O des glaces et des carbonates de foraminifères comme thermomètre et indicateur du volume des glaces.",
            "Exploiter la composition des bulles d'air piégées dans les glaces pour reconstituer la teneur passée en gaz à effet de serre.",
          ],
          course: [
            {
              heading: "Du climat mesuré au climat reconstitué",
              paragraphs: [
                "Le climat d'une région est la moyenne, sur au moins trente ans, des conditions météorologiques (température, précipitations, vents). Le climat global se décrit notamment par la température moyenne à la surface de la Terre. Des mesures directes à l'aide de thermomètres, réalisées dans un nombre suffisant de stations à travers le monde, n'existent que depuis le milieu du XIXe siècle, vers 1850.",
                "Pour les périodes plus anciennes, on utilise des indices indirects, appelés indicateurs climatiques : des traces laissées dans les roches, les glaces ou les êtres vivants, dont on sait qu'elles dépendent du climat. Leur interprétation repose sur le principe d'actualisme : on compare ces traces à celles que l'on observe aujourd'hui dans des climats connus. Le croisement de plusieurs indices indépendants rend la reconstitution plus solide.",
              ],
            },
            {
              heading: "Les indices géologiques et biologiques",
              paragraphs: [
                "Les glaciers laissent des traces caractéristiques : des moraines (accumulations de débris rocheux transportés par la glace), des blocs erratiques (gros blocs déposés loin de leur région d'origine), des roches polies et striées par le frottement de la glace. Leur présence loin des glaciers actuels montre que ceux-ci ont été beaucoup plus étendus : lors de certaines glaciations du Quaternaire, les glaciers alpins ont atteint la région lyonnaise. Pour des époques très anciennes, des tillites (moraines consolidées) témoignent de glaciations, comme celles de la fin du Carbonifère.",
                "Les grains de pollen se conservent très bien dans les sédiments des lacs et des tourbières. On peut identifier le genre de la plante qui les a produits. La proportion des différents pollens dans une couche, ou spectre pollinique, renseigne sur la végétation de l'époque, donc sur le climat : une dominance de pollens d'armoise, de graminées et de bouleau évoque une steppe froide ; une dominance de chêne, de noisetier et de tilleul une forêt tempérée. D'autres indices complètent ces informations : les récifs coralliens fossiles (eaux chaudes), les charbons (forêts humides), les évaporites (climat chaud et sec), ou la largeur des cernes de croissance des arbres.",
              ],
              box: { label: "À retenir", text: "Moraines, blocs erratiques et roches striées indiquent d'anciennes extensions glaciaires. Les assemblages de pollens fossiles reflètent la végétation, donc le climat, d'après le principe d'actualisme." },
            },
            {
              heading: "Le thermomètre isotopique des glaces",
              paragraphs: [
                "L'oxygène possède deux isotopes stables principaux : l'oxygène 16 (le plus abondant) et l'oxygène 18, plus lourd. On exprime la composition isotopique d'un échantillon par son δ¹⁸O, l'écart en pour mille entre son rapport ¹⁸O/¹⁶O et celui d'une référence, l'eau océanique moyenne actuelle (SMOW).",
                "Les molécules d'eau contenant de l'¹⁶O, plus légères, s'évaporent plus facilement ; celles qui contiennent de l'¹⁸O condensent plus facilement et tombent en premier dans les précipitations. En allant vers les pôles, la vapeur d'eau s'appauvrit donc progressivement en ¹⁸O, et cet appauvrissement est d'autant plus fort que la température est basse. La neige qui tombe sur les calottes polaires a ainsi un δ¹⁸O très négatif, et plus il fait froid, plus il est bas. En forant les calottes (forages de Vostok et d'EPICA Dôme C en Antarctique, ce dernier couvrant environ 800 000 ans), on obtient un enregistrement continu des températures passées.",
              ],
              box: { label: "Formule", text: "δ¹⁸O = [(¹⁸O/¹⁶O) de l'échantillon ÷ (¹⁸O/¹⁶O) de la référence - 1] × 1000, exprimé en ‰. Dans les glaces polaires : δ¹⁸O plus bas = température plus basse." },
            },
            {
              heading: "Les foraminifères et le volume des glaces",
              paragraphs: [
                "Les foraminifères sont des organismes marins unicellulaires qui construisent une coquille de carbonate de calcium avec l'oxygène de l'eau de mer. Leur δ¹⁸O reflète surtout celui de l'océan. Or, pendant une glaciation, l'eau évaporée, enrichie en ¹⁶O, est stockée dans d'immenses calottes de glace : l'océan s'enrichit en ¹⁸O et son δ¹⁸O augmente. De plus, dans une eau plus froide, le carbonate incorpore davantage d'¹⁸O.",
                "Le δ¹⁸O des foraminifères varie donc en sens inverse de celui des glaces : il est élevé pendant les périodes glaciaires, faible pendant les interglaciaires. Ces enregistrements sédimentaires, qui couvrent des millions d'années, montrent au Quaternaire une alternance de périodes glaciaires et interglaciaires. Le dernier maximum glaciaire, il y a environ 21 000 ans, correspondait à un niveau marin plus bas d'environ 120 m qu'aujourd'hui.",
              ],
              box: { label: "À retenir", text: "Pendant une glaciation : δ¹⁸O des glaces polaires plus bas, δ¹⁸O des carbonates de foraminifères plus élevé (l'océan s'enrichit en ¹⁸O car l'¹⁶O est stocké dans les calottes)." },
            },
            {
              heading: "Les bulles d'air, archives de l'atmosphère",
              paragraphs: [
                "Lorsque la neige se tasse et se transforme en glace, elle emprisonne de petites bulles d'air. Ces bulles sont des échantillons de l'atmosphère du passé : on y mesure la concentration en dioxyde de carbone et en méthane. Les forages antarctiques montrent que la teneur en CO₂ oscillait d'environ 180 ppm pendant les périodes glaciaires à environ 280 ppm pendant les interglaciaires, au cours des 800 000 dernières années.",
                "Les variations de CO₂ et de méthane évoluent en parallèle avec celles de la température déduites du δ¹⁸O ou du deutérium de la glace. Ce lien étroit montre que les gaz à effet de serre jouent un rôle majeur dans les variations du climat, ce qui sera étudié dans la leçon suivante.",
              ],
            },
          ],
          keyPoints: [
            "Mesures directes de température depuis environ 1850 ; avant, on utilise des indicateurs climatiques, d'après l'actualisme.",
            "Moraines, blocs erratiques et roches striées révèlent d'anciennes extensions des glaciers.",
            "Les spectres polliniques reflètent la végétation, donc le climat (steppe froide ou forêt tempérée).",
            "Glaces polaires : plus le δ¹⁸O est bas, plus il faisait froid.",
            "Foraminifères : δ¹⁸O élevé pendant les glaciations, car l'océan s'enrichit en ¹⁸O.",
            "Les bulles d'air des glaces montrent un CO₂ d'environ 180 ppm en période glaciaire et 280 ppm en interglaciaire.",
          ],
          example: {
            statement: "Deux échantillons de glace d'Antarctique ont les rapports ¹⁸O/¹⁶O suivants : A = 0,0019250 et B = 0,0019169. Le rapport de la référence (SMOW) est de 0,0020052. Calculez le δ¹⁸O de chaque échantillon et indiquez lequel s'est formé sous le climat le plus froid.",
            solution: [
              "On applique δ¹⁸O = (R échantillon ÷ R référence - 1) × 1000.",
              "Échantillon A : 0,0019250 ÷ 0,0020052 ≈ 0,9600 ; (0,9600 - 1) × 1000 = -40,0 ‰.",
              "Échantillon B : 0,0019169 ÷ 0,0020052 ≈ 0,9560 ; (0,9560 - 1) × 1000 ≈ -44,0 ‰.",
              "Dans les glaces polaires, un δ¹⁸O plus bas traduit une température plus basse au moment de la chute de neige.",
              "Conclusion : l'échantillon B (-44,0 ‰) s'est formé sous un climat plus froid que l'échantillon A (-40,0 ‰).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une vallée du Jura, loin de tout glacier actuel, on observe : un gros bloc de granite posé sur un sol calcaire, alors que le granite le plus proche se trouve dans les Alpes ; une butte allongée formée de débris de toutes tailles mélangés ; une dalle de calcaire polie et parcourue de stries parallèles. Identifiez chaque indice et concluez.",
              hint: "Quel agent naturel peut transporter de très gros blocs sur des dizaines de kilomètres, mélanger des débris de toutes tailles et rayer les roches ?",
              solution: [
                "Le bloc de granite isolé sur un sol calcaire, venu des Alpes, est un bloc erratique : seul un glacier peut transporter un bloc aussi gros aussi loin.",
                "La butte de débris non triés est une moraine, accumulation de matériaux transportés puis déposés par un glacier.",
                "La dalle polie et striée a été usée par le frottement d'un glacier chargé de débris.",
                "Conclusion : un glacier a recouvert cette vallée dans le passé ; le climat était alors nettement plus froid qu'aujourd'hui, lors d'une glaciation du Quaternaire.",
              ],
            },
            {
              level: 2,
              statement: "Dans les sédiments d'un lac du Massif central, on compte les pollens dans deux niveaux. Niveau inférieur, daté d'environ 20 000 ans : 55 % d'herbacées (graminées, armoise), 30 % de pins, 10 % de bouleaux, 5 % de chênes. Niveau supérieur, daté d'environ 7 000 ans : 10 % d'herbacées, 10 % de pins, 5 % de bouleaux, 50 % de chênes, 25 % de noisetiers et de tilleuls. Reconstituez la végétation et le climat à chaque époque, en précisant le raisonnement utilisé.",
              hint: "Associez chaque assemblage de pollens au milieu actuel où l'on trouve les mêmes plantes.",
              solution: [
                "Raisonnement : d'après le principe d'actualisme, on suppose que les plantes avaient les mêmes exigences climatiques qu'aujourd'hui.",
                "Il y a 20 000 ans : dominance des herbacées de steppe (graminées, armoise) avec quelques pins et bouleaux, arbres résistants au froid ; les arbres exigeants en chaleur, comme le chêne, sont presque absents. Végétation de steppe froide, peu boisée : climat froid et sec, cohérent avec le dernier maximum glaciaire.",
                "Il y a 7 000 ans : dominance du chêne, du noisetier et du tilleul, arbres de forêt tempérée. Climat tempéré et plus humide, comparable à l'actuel ou un peu plus doux.",
                "Conclusion : le passage d'une steppe froide à une forêt tempérée traduit le réchauffement qui a suivi la dernière glaciation, à l'entrée dans l'interglaciaire actuel (Holocène).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On dispose de trois enregistrements des 150 000 dernières années. 1) Glace de l'Antarctique : δ¹⁸O minimal (environ -59 ‰) vers -140 000 ans et vers -20 000 ans, maximal (environ -53 ‰) vers -125 000 ans et depuis -10 000 ans. 2) Bulles d'air de cette glace : CO₂ d'environ 190 ppm vers -140 000 ans et -20 000 ans, d'environ 280 ppm vers -125 000 ans et avant l'ère industrielle. 3) Foraminifères d'un sédiment océanique : δ¹⁸O maximal vers -140 000 et -20 000 ans, minimal vers -125 000 ans et actuellement. Montrez que ces données sont cohérentes et reconstituez l'histoire climatique de cette période.",
              hint: "Interprétez séparément chaque enregistrement, en faisant attention au sens de variation du δ¹⁸O des foraminifères, puis comparez-les.",
              solution: [
                "Glace : un δ¹⁸O bas indique une température basse. Les minima vers -140 000 et -20 000 ans correspondent à des périodes froides ; les maxima vers -125 000 ans et depuis -10 000 ans à des périodes chaudes.",
                "CO₂ : faible (190 ppm) pendant les périodes froides, élevé (280 ppm) pendant les périodes chaudes ; il varie dans le même sens que la température.",
                "Foraminifères : un δ¹⁸O élevé traduit un océan enrichi en ¹⁸O, donc un grand volume de glace stocké sur les continents (riche en ¹⁶O) et des eaux plus froides. Les maxima vers -140 000 et -20 000 ans correspondent donc à des glaciations.",
                "Les trois indices, indépendants, s'accordent : périodes glaciaires vers -140 000 ans et vers -20 000 ans (dernier maximum glaciaire), périodes interglaciaires vers -125 000 ans et depuis environ 10 000 ans.",
                "Le δ¹⁸O des glaces et celui des foraminifères varient en sens inverse, ce qui est attendu : pendant une glaciation, l'¹⁶O est stocké dans les calottes, appauvrissant la glace et enrichissant l'océan en ¹⁸O.",
                "Conclusion : au cours des 150 000 dernières années, le climat a alterné entre deux périodes glaciaires et deux interglaciaires, et ces variations de température sont associées à des variations de la teneur atmosphérique en CO₂.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez votre maîtrise des indices climatiques.",
            statements: [
              { text: "Dans les glaces polaires, un δ¹⁸O plus bas indique une période plus froide.", true: true, why: "Plus il fait froid, plus la vapeur d'eau qui arrive aux pôles est appauvrie en ¹⁸O." },
              { text: "Le δ¹⁸O des foraminifères est plus bas pendant les glaciations.", true: false, why: "Il est plus élevé : l'océan s'enrichit en ¹⁸O car l'¹⁶O est stocké dans les calottes de glace." },
              { text: "Un bloc erratique est un bloc transporté loin de son lieu d'origine par un glacier.", true: true, why: "Seul un glacier peut déplacer des blocs aussi gros sur de grandes distances." },
              { text: "Les mesures directes de température couvrent les 800 000 dernières années.", true: false, why: "Elles n'existent que depuis environ 1850 ; les 800 000 ans viennent des forages de glace." },
              { text: "Les bulles d'air piégées dans la glace permettent de mesurer le CO₂ du passé.", true: true, why: "Elles sont des échantillons de l'atmosphère au moment où la neige s'est transformée en glace." },
              { text: "L'interprétation des pollens fossiles repose sur le principe d'actualisme.", true: true, why: "On suppose que les plantes avaient les mêmes exigences climatiques qu'aujourd'hui." },
              { text: "Un seul indicateur suffit toujours à reconstituer le climat passé avec certitude.", true: false, why: "Le croisement de plusieurs indices indépendants est nécessaire pour une reconstitution fiable." },
            ],
          },
          quiz: [
            {
              q: "Depuis quand dispose-t-on de mesures directes de la température à l'échelle du globe ?",
              options: ["Depuis l'Antiquité", "Depuis 10 000 ans", "Depuis environ 1850", "Depuis 1990 seulement"],
              answer: 2,
              why: "Un réseau de stations suffisant pour estimer la température globale n'existe que depuis le milieu du XIXe siècle.",
            },
            {
              q: "Un spectre pollinique dominé par les graminées et l'armoise évoque :",
              options: ["une steppe froide", "une forêt tempérée de chênes", "une forêt tropicale humide", "un désert chaud"],
              answer: 0,
              why: "Ces plantes herbacées dominent aujourd'hui les steppes froides et sèches, comme pendant les périodes glaciaires.",
            },
            {
              q: "Pourquoi l'océan s'enrichit-il en ¹⁸O pendant une glaciation ?",
              options: ["Parce que l'¹⁸O se forme dans l'eau froide", "Parce que l'eau riche en ¹⁶O est stockée dans les calottes de glace", "Parce que les foraminifères produisent de l'¹⁸O", "Parce que les rivières apportent à l'océan de grandes quantités d'¹⁸O dissous"],
              answer: 1,
              why: "L'eau évaporée, enrichie en ¹⁶O, reste piégée dans les calottes ; l'eau restée dans l'océan est donc relativement plus riche en ¹⁸O.",
            },
            {
              q: "Quelle était la teneur en CO₂ de l'atmosphère pendant les périodes glaciaires du dernier million d'années ?",
              options: ["Environ 420 ppm", "Environ 1 000 ppm", "Environ 280 ppm", "Environ 180 ppm"],
              answer: 3,
              why: "Les bulles d'air des glaces antarctiques montrent environ 180 ppm en période glaciaire et 280 ppm en interglaciaire.",
            },
            {
              q: "Qu'est-ce qu'une moraine ?",
              options: ["Une accumulation de débris déposés par un glacier", "Un sédiment de fond de lac riche en pollens", "Une roche formée par évaporation de l'eau de mer", "Une coquille de foraminifère fossile"],
              answer: 0,
              why: "Les moraines sont formées de débris de toutes tailles transportés puis déposés par la glace.",
            },
          ],
          trap: "Interpréter le δ¹⁸O des foraminifères comme celui des glaces : les deux varient en sens inverse. Un δ¹⁸O élevé des carbonates marins signale une période glaciaire, alors qu'un δ¹⁸O élevé de la glace polaire signale une période plus chaude.",
          method: "Avant de lire une courbe de δ¹⁸O, notez en marge quel est l'archive (glace ou carbonate marin) et la règle correspondante (« glace : bas = froid » ; « foraminifères : haut = glaciaire »). Repérez ensuite les extrêmes et confrontez-les à un autre indice indépendant.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'variations-climatiques',
          title: 'Les variations climatiques et leurs causes',
          minutes: 35,
          objectives: [
            "Expliquer le bilan radiatif de la Terre et le rôle de l'effet de serre et de l'albédo dans la température de surface.",
            "Relier les cycles glaciaires du Quaternaire aux variations des paramètres orbitaux de la Terre (cycles de Milankovitch).",
            "Identifier les rétroactions positives et négatives qui amplifient ou atténuent une variation climatique.",
            "Expliquer des variations climatiques à long terme (Mésozoïque, Cénozoïque) par des facteurs géologiques : tectonique, volcanisme, altération des silicates.",
          ],
          course: [
            {
              heading: "Le bilan radiatif et l'effet de serre",
              paragraphs: [
                "La Terre reçoit de l'énergie du Soleil, en moyenne environ 340 W/m² au sommet de l'atmosphère. Environ 30 % de ce rayonnement est réfléchi vers l'espace par les nuages, les aérosols et les surfaces claires : c'est l'albédo, qui vaut environ 0,30 pour la Terre. Le reste est absorbé, surtout par la surface, qui se réchauffe et émet à son tour un rayonnement infrarouge.",
                "Certains gaz de l'atmosphère, dits gaz à effet de serre (vapeur d'eau, dioxyde de carbone, méthane, protoxyde d'azote), absorbent une partie de ce rayonnement infrarouge et en réémettent une partie vers la surface. C'est l'effet de serre naturel : sans lui, la température moyenne à la surface serait d'environ -18 °C, au lieu d'environ +15 °C. La température globale dépend donc de trois grands facteurs : l'énergie solaire reçue, l'albédo et la concentration en gaz à effet de serre.",
              ],
              box: { label: "À retenir", text: "Température globale = équilibre entre énergie solaire absorbée et rayonnement infrarouge émis. Elle dépend de l'énergie reçue, de l'albédo (environ 0,30) et de l'effet de serre." },
            },
            {
              heading: "Les paramètres orbitaux et les cycles glaciaires",
              paragraphs: [
                "Au Quaternaire, les indices montrent une alternance de périodes glaciaires et interglaciaires. Depuis environ 800 000 ans, elle suit un rythme d'environ 100 000 ans : de longues glaciations (environ 80 000 à 90 000 ans) séparées d'interglaciaires plus courts (de l'ordre de 10 000 à 20 000 ans). Avant un million d'années environ, le rythme dominant était de 41 000 ans.",
                "Ces cycles s'expliquent par les variations de l'orbite et de l'axe de rotation de la Terre, décrites par le mathématicien Milutin Milanković. L'excentricité, forme plus ou moins allongée de l'orbite, varie avec des périodes d'environ 100 000 et 400 000 ans. L'obliquité, inclinaison de l'axe de rotation (entre environ 22,1° et 24,5°, aujourd'hui 23,4°), varie avec une période d'environ 41 000 ans. La précession, qui change la saison où la Terre est au plus près du Soleil, a une période d'environ 19 000 à 23 000 ans. Ces paramètres modifient peu l'énergie totale reçue, mais beaucoup sa répartition selon les latitudes et les saisons.",
                "Le facteur clé est l'ensoleillement estival aux hautes latitudes de l'hémisphère Nord, où se trouvent de vastes continents. Si les étés y sont frais, la neige de l'hiver ne fond pas entièrement, s'accumule d'année en année et forme des calottes : une glaciation s'installe. Des étés plus chauds font au contraire fondre les calottes.",
              ],
              box: { label: "Repère", text: "Cycles de Milankovitch : excentricité (environ 100 000 et 400 000 ans), obliquité (41 000 ans), précession (environ 19 000 à 23 000 ans)." },
            },
            {
              heading: "Les rétroactions : amplifier ou atténuer",
              paragraphs: [
                "Les variations d'ensoleillement dues aux paramètres orbitaux sont faibles ; elles sont amplifiées par des rétroactions. Une rétroaction est positive quand la conséquence d'une variation renforce sa cause. Par exemple, un refroidissement étend la glace et la neige, qui réfléchissent beaucoup le rayonnement solaire : l'albédo augmente, l'énergie absorbée diminue et le refroidissement s'accentue.",
                "De même, un océan plus froid dissout davantage de CO₂ (la solubilité d'un gaz augmente quand la température baisse) : la teneur atmosphérique en CO₂ diminue, l'effet de serre baisse, et le refroidissement s'accentue. Un air plus froid contient aussi moins de vapeur d'eau, principal gaz à effet de serre. Ces mécanismes jouent dans l'autre sens lors d'un réchauffement. Une rétroaction négative, au contraire, atténue la variation : une Terre plus chaude émet plus de rayonnement infrarouge vers l'espace, ce qui tend à la refroidir.",
              ],
              box: { label: "Définition", text: "Rétroaction positive : mécanisme qui amplifie la variation initiale (albédo des glaces, solubilité du CO₂ dans l'océan, vapeur d'eau). Rétroaction négative : mécanisme qui l'atténue." },
            },
            {
              heading: "Les variations à long terme : le rôle de la géologie",
              paragraphs: [
                "Sur des dizaines de millions d'années, le climat dépend surtout de la teneur en CO₂, contrôlée par des phénomènes géologiques. Le volcanisme, notamment aux dorsales, libère du CO₂. L'altération chimique des roches silicatées, à l'inverse, en consomme : l'eau de pluie chargée de CO₂ dissout les minéraux, et les ions produits précipitent dans l'océan sous forme de calcaire. Le bilan peut s'écrire CaSiO₃ + CO₂ → CaCO₃ + SiO₂ : le carbone est piégé durablement dans les roches. L'enfouissement de matière organique (charbon, pétrole) piège aussi du carbone.",
                "Au Crétacé, une forte activité des dorsales et des teneurs élevées en CO₂ expliquent un climat chaud, sans grandes calottes polaires permanentes, et un niveau marin élevé. Depuis environ 50 millions d'années, le Cénozoïque connaît au contraire un refroidissement global : la surrection de grandes chaînes comme l'Himalaya a intensifié l'altération des silicates et fait baisser le CO₂, et l'ouverture de passages océaniques autour de l'Antarctique a permis la mise en place d'un courant circumpolaire qui l'isole des eaux chaudes. Une calotte s'y installe vers 34 millions d'années. Plus tôt, à la fin du Carbonifère et au début du Permien, une glaciation a été favorisée par la position d'un vaste continent près du pôle Sud et par l'enfouissement massif de matière organique des forêts, à l'origine du charbon.",
                "À court terme, les grandes éruptions volcaniques peuvent au contraire refroidir le climat pendant un à deux ans : les aérosols soufrés injectés dans la stratosphère réfléchissent le rayonnement solaire. L'éruption du Pinatubo, aux Philippines, en 1991, a ainsi fait baisser la température moyenne globale de quelques dixièmes de degré.",
              ],
            },
          ],
          keyPoints: [
            "La température globale dépend de l'énergie solaire reçue, de l'albédo (environ 0,30) et de l'effet de serre.",
            "Sans effet de serre naturel, la surface serait à environ -18 °C au lieu de +15 °C.",
            "Cycles glaciaires du Quaternaire : excentricité (100 000 et 400 000 ans), obliquité (41 000 ans), précession (19 000 à 23 000 ans).",
            "L'ensoleillement estival aux hautes latitudes nord décide de la croissance ou de la fonte des calottes.",
            "Les rétroactions positives (albédo, CO₂ océanique, vapeur d'eau) amplifient les variations.",
            "À long terme : volcanisme (source de CO₂), altération des silicates et enfouissement de matière organique (puits de CO₂).",
            "Refroidissement cénozoïque depuis environ 50 Ma : altération liée à l'Himalaya, isolement de l'Antarctique.",
          ],
          example: {
            statement: "Expliquez comment une légère diminution de l'ensoleillement estival aux hautes latitudes de l'hémisphère Nord, due aux paramètres orbitaux, peut conduire à une glaciation.",
            solution: [
              "Des étés moins ensoleillés aux hautes latitudes nord ne suffisent plus à faire fondre la neige tombée en hiver sur les continents.",
              "La neige s'accumule d'une année sur l'autre et forme progressivement des calottes de glace.",
              "Rétroaction de l'albédo : les surfaces enneigées réfléchissent davantage le rayonnement solaire ; l'énergie absorbée diminue et le refroidissement s'accentue.",
              "Rétroaction du CO₂ : l'océan refroidi dissout plus de CO₂, l'effet de serre diminue et le refroidissement s'accentue encore ; l'air plus froid contient aussi moins de vapeur d'eau.",
              "Conclusion : une faible variation orbitale, amplifiée par des rétroactions positives, entraîne l'extension des calottes et l'installation d'une glaciation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La Terre reçoit en moyenne 340 W/m² au sommet de l'atmosphère. 1) Calculez la puissance absorbée si l'albédo est de 0,30. 2) Recalculez-la pour un albédo de 0,32, par exemple lors d'une extension des glaces. 3) Quelle est la conséquence attendue sur la température ?",
              hint: "La fraction absorbée est égale à 1 - albédo.",
              solution: [
                "1) Puissance absorbée : 340 × (1 - 0,30) = 340 × 0,70 = 238 W/m².",
                "2) Avec un albédo de 0,32 : 340 × 0,68 = 231,2 W/m², soit 6,8 W/m² de moins.",
                "3) La Terre absorbe moins d'énergie : sa température tend à baisser. Ce refroidissement peut étendre encore les glaces et augmenter l'albédo : c'est une rétroaction positive.",
              ],
            },
            {
              level: 2,
              statement: "L'analyse spectrale de l'enregistrement du δ¹⁸O des foraminifères sur les 800 000 dernières années fait apparaître trois périodicités dominantes : environ 100 000 ans, 41 000 ans et 23 000 ans. 1) Associez chacune à un paramètre orbital. 2) Expliquez pourquoi ce résultat a été considéré comme un argument majeur en faveur de la théorie astronomique des climats.",
              hint: "Rappelez-vous les périodes des trois paramètres de Milankovitch, calculées indépendamment par les astronomes.",
              solution: [
                "1) Environ 100 000 ans : excentricité de l'orbite. 41 000 ans : obliquité de l'axe de rotation. 23 000 ans : précession.",
                "2) Les périodes des paramètres orbitaux sont calculées par la mécanique céleste, indépendamment des données géologiques.",
                "Retrouver exactement ces périodes dans un enregistrement climatique (les sédiments marins) montre que le climat du Quaternaire varie au rythme des paramètres orbitaux.",
                "Conclusion : la concordance entre périodicités astronomiques et climatiques est un argument fort pour attribuer les cycles glaciaires aux variations de l'orbite et de l'axe de la Terre, amplifiées par des rétroactions.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Depuis environ 50 millions d'années, le δ¹⁸O des foraminifères benthiques (qui vivent au fond des océans) augmente globalement, et une calotte se forme sur l'Antarctique vers 34 Ma. Pendant la même période, la collision entre l'Inde et l'Asie forme l'Himalaya et le plateau du Tibet. Données : l'altération des silicates peut se résumer par CaSiO₃ + CO₂ → CaCO₃ + SiO₂ ; masses molaires : CaSiO₃ = 116 g/mol, CO₂ = 44 g/mol. 1) Interprétez l'évolution du δ¹⁸O. 2) Calculez la masse de CO₂ piégée par l'altération de 1 tonne de CaSiO₃. 3) Proposez une explication géologique de l'évolution du climat au Cénozoïque.",
              hint: "D'après l'équation, une mole de CaSiO₃ consomme une mole de CO₂ : raisonnez en moles, puis repassez en masse.",
              solution: [
                "1) Une augmentation du δ¹⁸O des foraminifères traduit des eaux plus froides et un stockage croissant de glace sur les continents : le Cénozoïque est une période de refroidissement global, marquée par l'installation de la calotte antarctique vers 34 Ma.",
                "2) 1 tonne = 1 000 000 g de CaSiO₃, soit 1 000 000 ÷ 116 ≈ 8 620 mol. L'équation indique 1 mol de CO₂ consommée par mole de CaSiO₃, donc environ 8 620 mol de CO₂.",
                "Masse de CO₂ : 8 620 × 44 ≈ 379 000 g, soit environ 0,38 tonne de CO₂ piégée sous forme de calcaire.",
                "3) La surrection de l'Himalaya expose de grandes surfaces de roches silicatées fraîches à une érosion et une altération intenses, favorisées par les pluies de mousson. Cette altération consomme du CO₂ atmosphérique, qui est piégé durablement dans les carbonates océaniques.",
                "La baisse du CO₂ réduit l'effet de serre et refroidit le climat ; l'isolement de l'Antarctique par un courant circumpolaire et les rétroactions (albédo des glaces) favorisent ensuite l'installation de la calotte.",
                "Conclusion : le refroidissement cénozoïque s'explique en grande partie par des facteurs géologiques, la formation de grandes chaînes de montagnes augmentant l'altération des silicates, puits de CO₂ à long terme.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque facteur climatique à son effet ou à son échelle de temps.",
            pairs: [
              { left: "Obliquité", right: "Cycle d'environ 41 000 ans" },
              { left: "Excentricité", right: "Cycles d'environ 100 000 et 400 000 ans" },
              { left: "Albédo des glaces", right: "Rétroaction positive qui amplifie un refroidissement" },
              { left: "Altération des silicates", right: "Consomme du CO₂ sur des millions d'années" },
              { left: "Grande éruption explosive", right: "Refroidissement de un à deux ans par les aérosols" },
              { left: "Volcanisme des dorsales", right: "Source de CO₂ à long terme" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la valeur approximative de l'albédo moyen de la Terre ?",
              options: ["0,05", "0,30", "0,70", "0,95"],
              answer: 1,
              why: "Environ 30 % du rayonnement solaire est réfléchi vers l'espace par les nuages, les aérosols et les surfaces claires.",
            },
            {
              q: "Quel paramètre orbital varie selon une période d'environ 41 000 ans ?",
              options: ["L'excentricité", "La précession", "La distance moyenne Terre-Soleil", "L'obliquité"],
              answer: 3,
              why: "L'inclinaison de l'axe de rotation varie entre environ 22,1° et 24,5° avec une période de 41 000 ans.",
            },
            {
              q: "Pourquoi l'extension des glaces est-elle une rétroaction positive lors d'un refroidissement ?",
              options: ["Elle augmente l'albédo, donc diminue l'énergie absorbée", "Elle libère du CO₂ piégé dans le sol gelé des continents", "Elle augmente l'effet de serre", "Elle réchauffe l'océan"],
              answer: 0,
              why: "La glace réfléchit beaucoup le rayonnement solaire : moins d'énergie est absorbée, ce qui accentue le refroidissement.",
            },
            {
              q: "Quel phénomène consomme du CO₂ atmosphérique sur le long terme ?",
              options: ["Le volcanisme des dorsales", "La respiration des animaux", "L'altération des roches silicatées", "La fonte progressive des calottes polaires"],
              answer: 2,
              why: "L'altération chimique des silicates consomme du CO₂, finalement piégé dans des carbonates océaniques.",
            },
            {
              q: "Depuis environ 800 000 ans, quelle est la durée approximative d'un cycle glaciaire-interglaciaire ?",
              options: ["10 000 ans", "100 000 ans", "1 million d'années", "1 000 ans"],
              answer: 1,
              why: "Le rythme dominant, d'environ 100 000 ans, correspond à la période de l'excentricité, amplifiée par des rétroactions.",
            },
          ],
          trap: "Croire que les paramètres orbitaux changent fortement la quantité totale d'énergie reçue par la Terre : ils modifient surtout sa répartition selon les latitudes et les saisons, et ce sont les rétroactions qui amplifient l'effet.",
          method: "Pour expliquer une variation climatique, identifiez d'abord son échelle de temps : quelques années (volcanisme explosif), des dizaines de milliers d'années (paramètres orbitaux et rétroactions) ou des millions d'années (tectonique, altération, volcanisme). Chaque échelle a ses causes propres.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rechauffement-actuel',
          title: 'Le réchauffement actuel : conséquences et actions',
          minutes: 35,
          objectives: [
            "Décrire le réchauffement climatique actuel à partir des mesures de température, de niveau marin et de concentration en gaz à effet de serre.",
            "Argumenter sur l'origine humaine du réchauffement, en s'appuyant sur les émissions de gaz à effet de serre et les modèles climatiques.",
            "Identifier les conséquences du réchauffement sur l'océan, les glaces, les écosystèmes et les sociétés humaines.",
            "Distinguer atténuation et adaptation, et proposer des actions individuelles et collectives fondées sur des arguments scientifiques.",
          ],
          course: [
            {
              heading: "Un réchauffement mesuré",
              paragraphs: [
                "Les mesures directes montrent une hausse de la température moyenne à la surface de la Terre. D'après le sixième rapport du GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat), publié en 2021, la température moyenne de la décennie 2011-2020 dépassait d'environ 1,1 °C celle de la période 1850-1900, prise comme référence préindustrielle. Le réchauffement est plus marqué sur les continents que sur les océans, et beaucoup plus fort dans l'Arctique.",
                "D'autres observations concordent : le niveau moyen des mers a monté d'environ 20 cm entre 1901 et 2018 ; la plupart des glaciers de montagne reculent ; la surface de la banquise arctique en fin d'été diminue ; l'océan accumule de la chaleur. Cette rapidité est exceptionnelle à l'échelle des derniers millénaires, comparée aux variations naturelles reconstituées par les indicateurs climatiques.",
              ],
            },
            {
              heading: "Une origine humaine",
              paragraphs: [
                "La concentration atmosphérique en CO₂, mesurée en continu depuis 1958 à l'observatoire du Mauna Loa (Hawaï) par Charles David Keeling, est passée d'environ 315 ppm à plus de 420 ppm dans les années 2020, alors qu'elle était d'environ 280 ppm avant l'ère industrielle et n'avait pas dépassé 300 ppm au cours des 800 000 dernières années. La courbe montre aussi une oscillation annuelle, due à la photosynthèse de la végétation de l'hémisphère Nord, qui absorbe du CO₂ au printemps et en été. Celle du méthane a été multipliée par environ 2,5.",
                "Ces gaz proviennent des activités humaines : combustion du charbon, du pétrole et du gaz, déforestation, production de ciment, agriculture et élevage (méthane des ruminants et des rizières, protoxyde d'azote des engrais). Le carbone fossile ne contient plus de carbone 14 : son accumulation dans l'atmosphère se lit dans la baisse de la proportion de ¹⁴C du CO₂ atmosphérique. Enfin, les modèles climatiques ne reproduisent le réchauffement observé depuis 1950 que s'ils incluent les émissions humaines ; avec les seuls facteurs naturels (Soleil, volcans), ils ne le reproduisent pas. Le GIEC conclut que l'influence humaine a réchauffé l'atmosphère, l'océan et les terres de façon sans équivoque.",
              ],
              box: { label: "À retenir", text: "Le réchauffement actuel est dû à l'augmentation des gaz à effet de serre émis par les activités humaines : CO₂ (combustibles fossiles, déforestation), méthane et protoxyde d'azote (agriculture, élevage)." },
            },
            {
              heading: "Des conséquences multiples",
              paragraphs: [
                "La hausse du niveau marin a deux causes principales : la dilatation thermique de l'océan qui se réchauffe, et la fonte des glaces continentales (glaciers de montagne, calottes du Groenland et de l'Antarctique). La fonte de la banquise, glace de mer qui flotte déjà, ne fait pas monter le niveau des mers ; elle réduit en revanche l'albédo de l'Arctique et accélère le réchauffement de cette région. L'océan absorbe aussi une partie du CO₂ émis, ce qui fait baisser son pH : c'est l'acidification, qui gêne les organismes à squelette ou coquille calcaire.",
                "Le réchauffement augmente la fréquence et l'intensité de certains événements extrêmes : vagues de chaleur, sécheresses, pluies intenses. Les aires de répartition de nombreuses espèces se déplacent vers les pôles ou en altitude, et certains écosystèmes, comme les récifs coralliens, sont menacés par le blanchissement. Les sociétés humaines sont touchées : rendements agricoles, ressources en eau, santé, zones côtières. Des rétroactions positives peuvent aggraver le phénomène, comme le dégel du pergélisol qui libère du CO₂ et du méthane.",
              ],
            },
            {
              heading: "Modéliser l'avenir : les scénarios",
              paragraphs: [
                "Les modèles climatiques simulent le système climatique (atmosphère, océan, glaces, végétation) à partir des lois de la physique. Ils ne prédisent pas l'avenir de façon certaine, mais projettent l'évolution du climat selon différents scénarios d'émissions, qui dépendent des choix des sociétés.",
                "Dans son rapport de 2021, le GIEC estime, pour la fin du XXIe siècle (2081-2100) par rapport à 1850-1900, un réchauffement probable d'environ 1,4 °C dans le scénario d'émissions très faibles, et d'environ 4,4 °C dans le scénario d'émissions très élevées. Du fait de la longue durée de vie du CO₂ dans l'atmosphère et de l'inertie de l'océan, certaines conséquences, comme la hausse du niveau marin, se poursuivront pendant des siècles.",
              ],
              box: { label: "Repère", text: "Réchauffement 2011-2020 : environ +1,1 °C par rapport à 1850-1900. CO₂ : environ 280 ppm avant l'ère industrielle, plus de 420 ppm dans les années 2020. Accord de Paris (2015) : rester bien en dessous de +2 °C, viser +1,5 °C." },
            },
            {
              heading: "Agir : atténuation et adaptation",
              paragraphs: [
                "L'atténuation vise à limiter le réchauffement en réduisant les émissions de gaz à effet de serre et en renforçant les puits de carbone. Elle passe par la sobriété (consommer moins d'énergie), l'efficacité énergétique (isolation des bâtiments, moteurs plus économes), le développement des énergies bas carbone, la réduction de la déforestation et la préservation des forêts, des sols et des océans qui stockent du carbone. L'accord de Paris, adopté en 2015, fixe l'objectif de contenir le réchauffement nettement en dessous de 2 °C et de poursuivre les efforts pour le limiter à 1,5 °C ; il suppose d'atteindre la neutralité carbone, c'est-à-dire un équilibre entre émissions et absorptions.",
                "L'adaptation vise à réduire les effets du réchauffement déjà engagé : végétaliser les villes contre les vagues de chaleur, adapter les cultures et la gestion de l'eau, protéger les zones côtières, surveiller les nouvelles maladies. Les deux démarches sont complémentaires : plus l'atténuation est forte, moins l'adaptation sera difficile. Elles relèvent à la fois de choix individuels (transports, alimentation, consommation) et de décisions collectives (politiques énergétiques, urbanisme, accords internationaux).",
              ],
              box: { label: "Définition", text: "Atténuation : actions qui réduisent les émissions ou augmentent les puits de gaz à effet de serre. Adaptation : actions qui réduisent la vulnérabilité aux effets du changement climatique." },
            },
          ],
          keyPoints: [
            "Température 2011-2020 : environ +1,1 °C par rapport à 1850-1900 (GIEC, 2021) ; niveau marin : environ +20 cm depuis 1901.",
            "CO₂ : environ 280 ppm avant l'ère industrielle, plus de 420 ppm dans les années 2020 (courbe de Keeling).",
            "L'origine humaine est établie : émissions fossiles, déforestation, agriculture ; les modèles sans émissions humaines n'expliquent pas le réchauffement.",
            "Niveau marin : dilatation thermique et fonte des glaces continentales ; la fonte de la banquise ne le fait pas monter.",
            "Autres conséquences : acidification de l'océan, événements extrêmes, déplacement des espèces, risques pour les sociétés.",
            "Atténuation (réduire les émissions, préserver les puits) et adaptation (réduire la vulnérabilité) sont complémentaires.",
          ],
          example: {
            statement: "On place un glaçon dans un verre d'eau rempli à ras bord : quand il fond, le verre ne déborde pas. On pose un autre glaçon sur une grille au-dessus d'un second verre plein : quand il fond, le verre déborde. Que modélisent ces deux situations, et quelle conclusion en tirer sur la hausse du niveau des mers ?",
            solution: [
              "Le glaçon qui flotte modélise la banquise : il déplace déjà un volume d'eau égal à la masse de glace (poussée d'Archimède). En fondant, il donne exactement ce volume d'eau : le niveau ne change pas.",
              "Le glaçon posé sur la grille modélise un glacier ou une calotte posés sur un continent : sa fonte ajoute de l'eau à l'océan, et le niveau monte.",
              "La fonte de la banquise ne contribue donc pas à la hausse du niveau marin, alors que celle des glaciers de montagne et des calottes du Groenland et de l'Antarctique y contribue.",
              "Il faut ajouter la dilatation thermique : une eau qui se réchauffe occupe un volume plus grand.",
              "Conclusion : la hausse du niveau marin résulte de la fonte des glaces continentales et de la dilatation thermique de l'océan, pas de la fonte de la banquise.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La concentration atmosphérique en CO₂ mesurée au Mauna Loa était d'environ 315 ppm en 1958 et d'environ 420 ppm en 2023. Avant l'ère industrielle, elle était d'environ 280 ppm. 1) Calculez l'augmentation moyenne annuelle entre 1958 et 2023. 2) De quel pourcentage la concentration de 2023 dépasse-t-elle la valeur préindustrielle ?",
              hint: "Pour le pourcentage, calculez l'augmentation depuis 280 ppm, puis divisez par 280.",
              solution: [
                "1) Augmentation : 420 - 315 = 105 ppm en 2023 - 1958 = 65 ans, soit 105 ÷ 65 ≈ 1,6 ppm par an en moyenne.",
                "2) Augmentation depuis l'ère préindustrielle : 420 - 280 = 140 ppm ; 140 ÷ 280 = 0,5.",
                "Résultat : environ 1,6 ppm par an en moyenne, et une concentration supérieure d'environ 50 % à la valeur préindustrielle.",
              ],
            },
            {
              level: 2,
              statement: "Classez les actions suivantes en atténuation ou en adaptation, en justifiant : a) isoler les bâtiments ; b) planter des arbres dans les cours d'école pour créer de l'ombre ; c) remplacer une centrale à charbon par des éoliennes ; d) construire des digues sur un littoral menacé ; e) limiter la déforestation tropicale ; f) choisir des variétés de cultures résistantes à la sécheresse.",
              hint: "Demandez-vous si l'action agit sur la cause (les émissions et les puits de gaz à effet de serre) ou sur les effets (la vulnérabilité).",
              solution: [
                "a) Atténuation : moins d'énergie consommée pour le chauffage, donc moins d'émissions.",
                "b) Adaptation : l'ombre réduit les effets des vagues de chaleur (les arbres stockent aussi un peu de carbone, mais leur but ici est de protéger).",
                "c) Atténuation : production d'électricité avec beaucoup moins d'émissions de CO₂.",
                "d) Adaptation : protection contre la hausse du niveau marin et les submersions.",
                "e) Atténuation : on évite les émissions liées à la destruction des forêts et on préserve un puits de carbone.",
                "f) Adaptation : les cultures supportent mieux des sécheresses plus fréquentes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Document 1 : la température moyenne globale a augmenté d'environ 1,1 °C entre 1850-1900 et 2011-2020, dont l'essentiel depuis 1950. Document 2 : sur la même période, le CO₂ atmosphérique est passé d'environ 285 à plus de 410 ppm, et la proportion de ¹⁴C dans le CO₂ atmosphérique a diminué (en dehors du pic lié aux essais nucléaires des années 1950-1960). Document 3 : des simulations du climat de 1850 à 2020 avec les seuls facteurs naturels (activité solaire, éruptions volcaniques) donnent une température à peu près stable ; les simulations qui ajoutent les facteurs humains reproduisent la hausse observée. En exploitant ces documents et vos connaissances, montrez que le réchauffement actuel est d'origine humaine, puis proposez deux leviers d'action en précisant s'ils relèvent de l'atténuation ou de l'adaptation.",
              hint: "Utilisez chaque document comme un argument distinct : un constat, une cause possible avec sa signature, puis un test par les modèles.",
              solution: [
                "Document 1 : le réchauffement est réel et rapide, environ 1,1 °C, concentré depuis 1950, ce qui est exceptionnel par rapport aux variations naturelles des derniers millénaires.",
                "Document 2 : le CO₂, gaz à effet de serre, augmente fortement en même temps ; un effet de serre renforcé diminue l'énergie perdue vers l'espace et réchauffe la surface.",
                "La baisse de la proportion de ¹⁴C indique que le CO₂ ajouté provient d'un carbone très ancien, qui ne contient plus de ¹⁴C : celui des combustibles fossiles (charbon, pétrole, gaz) brûlés par les humains.",
                "Document 3 : les facteurs naturels seuls ne reproduisent pas le réchauffement ; il faut ajouter les émissions humaines pour retrouver la hausse observée. C'est un argument décisif : la cause du réchauffement récent est humaine.",
                "Leviers d'action : réduire la combustion d'énergies fossiles par la sobriété, l'efficacité énergétique et les énergies bas carbone (atténuation) ; végétaliser les villes ou adapter les cultures aux sécheresses (adaptation).",
                "Conclusion : le réchauffement actuel s'explique par l'augmentation de l'effet de serre due aux émissions humaines de CO₂ d'origine fossile ; y répondre suppose à la fois de réduire ces émissions et de s'adapter aux changements déjà engagés.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur le réchauffement climatique.",
            statements: [
              { text: "La fonte de la banquise arctique fait monter le niveau des mers.", true: false, why: "La banquise flotte déjà : sa fonte ne change pas le niveau, contrairement à celle des glaciers et des calottes posés sur les continents." },
              { text: "La dilatation thermique de l'océan contribue à la hausse du niveau marin.", true: true, why: "Une eau plus chaude occupe un volume plus grand." },
              { text: "Le CO₂ atmosphérique dépasse aujourd'hui toutes les valeurs des 800 000 dernières années.", true: true, why: "Les glaces montrent des valeurs comprises entre environ 180 et 300 ppm ; on dépasse aujourd'hui 420 ppm." },
              { text: "Le réchauffement actuel s'explique principalement par une hausse de l'activité solaire.", true: false, why: "Les modèles avec les seuls facteurs naturels, Soleil compris, ne reproduisent pas le réchauffement observé." },
              { text: "L'océan absorbe une partie du CO₂ émis, ce qui l'acidifie.", true: true, why: "Le CO₂ dissous forme un acide faible : le pH de l'océan diminue." },
              { text: "Adapter les villes aux canicules est une mesure d'atténuation.", true: false, why: "C'est une mesure d'adaptation : elle réduit la vulnérabilité, pas les émissions." },
              { text: "Le méthane est un gaz à effet de serre émis notamment par l'élevage des ruminants.", true: true, why: "La digestion des ruminants, les rizières et les fuites de gaz naturel en libèrent." },
            ],
          },
          quiz: [
            {
              q: "Quel réchauffement le GIEC estime-t-il pour 2011-2020 par rapport à 1850-1900 ?",
              options: ["Environ 0,1 °C", "Environ 5 °C", "Environ 3 °C", "Environ 1,1 °C"],
              answer: 3,
              why: "Le sixième rapport du GIEC (2021) estime ce réchauffement à environ 1,1 °C.",
            },
            {
              q: "Pourquoi la proportion de ¹⁴C du CO₂ atmosphérique diminue-t-elle ?",
              options: ["Parce que le Soleil en produit moins", "Parce que le carbone fossile ajouté ne contient plus de ¹⁴C", "Parce que les océans libèrent de grandes quantités de ¹⁴C dissous", "Parce que la photosynthèse détruit le ¹⁴C"],
              answer: 1,
              why: "Les combustibles fossiles sont si anciens que leur ¹⁴C a disparu : leur CO₂ dilue le ¹⁴C atmosphérique.",
            },
            {
              q: "Laquelle de ces conséquences ne fait pas monter le niveau des mers ?",
              options: ["La fonte des glaciers de montagne", "La dilatation thermique de l'océan", "La fonte de la banquise", "La fonte de la calotte du Groenland"],
              answer: 2,
              why: "La banquise flotte : elle déplace déjà le volume d'eau correspondant à sa masse.",
            },
            {
              q: "Quel est l'objectif de l'accord de Paris (2015) ?",
              options: ["Contenir le réchauffement nettement en dessous de 2 °C, en visant 1,5 °C", "Stopper toute émission de CO₂ dès 2020", "Revenir aux températures de l'ère préindustrielle de 1850 avant l'année 2030", "Limiter le réchauffement à 4 °C"],
              answer: 0,
              why: "L'accord fixe un plafond bien inférieur à 2 °C et encourage les efforts pour rester à 1,5 °C, ce qui suppose d'atteindre la neutralité carbone.",
            },
            {
              q: "Qu'est-ce que la neutralité carbone ?",
              options: ["L'arrêt total et immédiat de toute utilisation de carbone dans l'économie", "Une taxe sur le carbone", "La disparition des puits de carbone", "L'équilibre entre émissions et absorptions de gaz à effet de serre"],
              answer: 3,
              why: "Atteindre la neutralité carbone, c'est ne pas émettre plus que ce que les puits (forêts, sols, océans, techniques) absorbent.",
            },
          ],
          trap: "Croire que la fonte de la banquise fait monter le niveau des mers, ou confondre atténuation (agir sur les causes, les émissions) et adaptation (agir sur les conséquences, la vulnérabilité).",
          method: "Dans une argumentation sur l'origine du réchauffement, organisez vos arguments en trois temps : le constat (mesures), la cause (gaz à effet de serre et leur signature fossile), et la preuve par les modèles (facteurs naturels seuls contre facteurs naturels et humains). Citez toujours la période de référence des valeurs chiffrées.",
        },
      ],
    },
  ],
}
