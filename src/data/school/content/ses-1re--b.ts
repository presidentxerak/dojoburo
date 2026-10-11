import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-1re',
  chapters: [
    /* ==================================================================== */
    /* LES LIENS SOCIAUX                                                      */
    /* ==================================================================== */
    {
      id: 'liens-sociaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'groupes-sociaux',
          title: 'Groupes sociaux, sociabilités et réseaux',
          minutes: 30,
          objectives: [
            "Définir un groupe social et le distinguer d'une catégorie statistique comme les PCS.",
            "Distinguer groupes primaires et groupes secondaires, groupes d'appartenance et groupes de référence.",
            "Comprendre que les réseaux sociaux constituent une forme spécifique de lien social et distinguer liens forts et liens faibles.",
            "Caractériser les sociabilités, y compris les sociabilités numériques.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un groupe social ?",
              paragraphs: [
                "Un groupe social est un ensemble d'individus qui entretiennent des relations (des interactions) directes ou indirectes, qui partagent des normes, des valeurs ou des intérêts communs, qui ont conscience d'appartenir à ce groupe et qui sont reconnus comme membres par les autres. Une famille, une équipe de handball, une classe de lycée ou un syndicat sont des groupes sociaux : leurs membres agissent les uns par rapport aux autres et se reconnaissent un « nous ».",
                "Il ne faut pas confondre un groupe social avec une catégorie statistique. Une catégorie statistique est un regroupement d'individus opéré par le statisticien à partir d'un ou plusieurs critères communs (âge, revenu, diplôme, profession). Les « 15-24 ans » ou les « ménages dont le revenu dépasse 4 000 euros par mois » partagent une caractéristique, mais ils ne se connaissent pas, n'interagissent pas et n'ont pas forcément conscience de former un ensemble. Une catégorie peut toutefois devenir un groupe lorsque ses membres se mobilisent, par exemple des retraités qui fondent une association pour défendre leurs pensions.",
                "En France, la principale catégorisation de la société est la nomenclature des professions et catégories socioprofessionnelles (PCS) de l'Insee. Créée en 1982 pour remplacer les catégories socioprofessionnelles (CSP) de 1954, elle a été rénovée en 2020. Elle classe les individus selon leur profession, leur statut (salarié ou indépendant), leur qualification et leur position hiérarchique, en six groupes pour les actifs : agriculteurs exploitants ; artisans, commerçants et chefs d'entreprise ; cadres et professions intellectuelles supérieures ; professions intermédiaires ; employés ; ouvriers. Les personnes d'une même PCS ont des chances d'avoir des modes de vie proches, ce qui rend la nomenclature utile pour étudier les comportements, mais une PCS reste une catégorie statistique.",
              ],
              box: { label: "Définition", text: "Groupe social : ensemble d'individus en interaction, qui partagent des normes, des valeurs ou des intérêts, ont conscience d'appartenir au groupe et sont reconnus comme membres par les autres. Catégorie statistique : regroupement d'individus selon des critères communs, défini par le statisticien." },
            },
            {
              heading: "Groupes primaires et secondaires, groupes d'appartenance et de référence",
              paragraphs: [
                "Le sociologue américain Charles Horton Cooley a défini en 1909 les groupes primaires : des groupes de petite taille, fondés sur des relations directes (en face à face), personnelles et affectives, comme la famille, le groupe d'amis ou le voisinage proche. La sociologie a ensuite qualifié de groupes secondaires les groupes de plus grande taille, où les relations sont plus formelles et impersonnelles, organisées autour d'un objectif ou de règles : une entreprise, un parti politique, une fédération sportive nationale. Dans un groupe secondaire, les membres ne se connaissent pas tous.",
                "Un même individu appartient à plusieurs groupes à la fois, et les deux types s'emboîtent souvent : au sein d'une grande entreprise (groupe secondaire), une petite équipe de collègues qui déjeunent ensemble chaque jour peut fonctionner comme un groupe primaire.",
                "Il faut aussi distinguer le groupe d'appartenance, celui dont l'individu fait effectivement partie, et le groupe de référence, celui auquel il se compare, dont il adopte les normes ou auquel il souhaite appartenir. Robert K. Merton a montré, au milieu du XXe siècle, qu'un individu peut intérioriser à l'avance les normes du groupe qu'il aspire à rejoindre : c'est la socialisation anticipatrice. Un lycéen d'origine modeste qui vise une école d'ingénieurs peut ainsi adopter les goûts, le langage et les ambitions des élèves de ces écoles.",
              ],
              box: { label: "À retenir", text: "Groupe primaire : petit, relations directes et affectives (famille, amis). Groupe secondaire : plus large, relations formelles et impersonnelles (entreprise, parti). Groupe d'appartenance : celui dont on fait partie. Groupe de référence : celui auquel on se compare ou on aspire." },
            },
            {
              heading: "Sociabilités et réseaux sociaux",
              paragraphs: [
                "La sociabilité désigne l'ensemble des relations sociales qu'un individu entretient avec les autres et la façon dont il les entretient (fréquence, lieux, forme). On distingue la sociabilité formelle, qui passe par des organisations (associations, clubs, partis), et la sociabilité informelle (rencontres entre amis, voisins, parents). Comme l'a montré François Héran à partir des enquêtes de l'Insee (1988), la sociabilité varie selon l'âge et le milieu social : les jeunes ont une sociabilité amicale intense, tandis que les cadres et les diplômés entretiennent en moyenne des relations plus nombreuses et plus diversifiées.",
                "En sociologie, un réseau social est l'ensemble des relations (les liens) qui relient des individus ou des organisations (les nœuds). On le décrit par sa taille (le nombre de personnes), sa densité (la part des liens qui existent réellement parmi tous les liens possibles) et la force de ses liens. Le réseau social au sens sociologique ne se confond donc pas avec les plateformes numériques, qui ne sont que des outils pour entretenir certaines relations.",
                "Mark Granovetter, dans un article de 1973 intitulé « La force des liens faibles », distingue les liens forts (beaucoup de temps passé ensemble, intensité émotionnelle, intimité, services rendus, comme avec la famille ou les amis proches) et les liens faibles (de simples connaissances : anciens camarades, collègues d'un autre service). En interrogeant des cadres et techniciens de la banlieue de Boston, il a montré qu'une grande partie avait trouvé son emploi grâce à des personnes rencontrées rarement. Les liens faibles relient des cercles sociaux différents et apportent donc des informations nouvelles, alors que les proches, qui fréquentent les mêmes personnes, disposent souvent des mêmes informations.",
              ],
              box: { label: "Définition", text: "Liens forts : relations intenses, intimes et fréquentes (famille, amis proches). Liens faibles : relations peu intenses avec de simples connaissances. Selon Granovetter, les liens faibles font circuler des informations nouvelles entre des cercles différents." },
            },
            {
              heading: "Les sociabilités numériques",
              paragraphs: [
                "Les messageries, les plateformes et les jeux en ligne ont fait apparaître des sociabilités numériques. Les enquêtes montrent qu'elles prolongent surtout des relations déjà existantes hors ligne : on échange d'abord en ligne avec ses amis, sa famille ou ses camarades de classe. Elles permettent aussi de maintenir des liens à distance, par exemple avec des proches partis vivre à l'étranger.",
                "Le numérique facilite également la multiplication des liens faibles et la formation de communautés d'intérêt fondées sur un choix (passionnés d'un jeu, fans d'une série, entraide entre parents). Mais ces sociabilités sont inégales selon l'âge, le diplôme et les compétences numériques, et elles comportent des risques (cyberharcèlement, comparaison permanente avec les autres). Elles transforment donc les liens sociaux sans les remplacer.",
              ],
              box: { label: "À retenir", text: "Les sociabilités numériques prolongent le plus souvent les relations existantes, multiplient les liens faibles et les communautés choisies, mais restent inégalement réparties dans la population." },
            },
          ],
          keyPoints: [
            "Un groupe social réunit des individus en interaction, qui partagent normes ou intérêts, ont conscience d'en faire partie et sont reconnus comme membres.",
            "Une catégorie statistique (comme les PCS de l'Insee) regroupe des individus selon des critères communs, sans interaction ni conscience d'appartenance.",
            "Groupe primaire : petit, relations directes et affectives (famille, amis). Groupe secondaire : plus large, relations formelles et impersonnelles.",
            "Groupe d'appartenance : celui dont on fait partie. Groupe de référence : celui auquel on se compare ou on aspire (socialisation anticipatrice, Merton).",
            "Un réseau social se décrit par sa taille, sa densité et la force de ses liens.",
            "Granovetter (1973) : les liens faibles, qui relient des cercles différents, apportent des informations nouvelles, par exemple pour trouver un emploi.",
            "Les sociabilités numériques prolongent surtout les relations existantes et multiplient les liens faibles.",
          ],
          example: {
            statement: "Pour chacun des ensembles suivants, dites s'il s'agit d'un groupe social ou d'une catégorie statistique, puis, pour les groupes sociaux, s'il s'agit d'un groupe primaire ou secondaire : (a) les ménages dont le revenu est inférieur à 1 500 euros par mois ; (b) une fratrie de trois enfants ; (c) les adhérents d'un syndicat national ; (d) les ouvriers au sens de la PCS de l'Insee.",
            solution: [
              "Rappel des critères : un groupe social suppose des interactions, des normes ou intérêts partagés, une conscience d'appartenance et une reconnaissance par les autres. Une catégorie statistique est définie de l'extérieur par un critère.",
              "(a) Catégorie statistique : le seuil de revenu est fixé par le statisticien ; ces ménages ne se connaissent pas et n'ont pas conscience de former un ensemble.",
              "(b) Groupe social primaire : la fratrie est de petite taille, ses membres interagissent directement et entretiennent des relations personnelles et affectives.",
              "(c) Groupe social secondaire : les adhérents partagent des intérêts, ont conscience d'appartenir au syndicat (adhésion, cotisation) et sont reconnus comme membres, mais ils ne se connaissent pas tous et leurs relations sont organisées par des règles (statuts, élections internes).",
              "(d) Catégorie statistique : il s'agit d'un classement de l'Insee. Nuance : une catégorie peut devenir un groupe si ses membres se mobilisent et développent une conscience commune, comme l'a fait historiquement la classe ouvrière.",
              "Réponse : (a) et (d) sont des catégories statistiques ; (b) est un groupe primaire ; (c) est un groupe secondaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez les trois notions suivantes et illustrez chacune par un exemple tiré de la vie d'un lycéen : (1) groupe primaire ; (2) groupe de référence ; (3) lien faible.",
              hint: "Pour chaque notion, donnez d'abord la définition précise, puis un exemple concret de la vie quotidienne au lycée ou dans les loisirs.",
              solution: [
                "(1) Un groupe primaire est un groupe de petite taille fondé sur des relations directes, personnelles et affectives. Exemple : le petit groupe d'amis avec lequel un lycéen passe ses récréations et ses week-ends.",
                "(2) Un groupe de référence est un groupe auquel l'individu se compare, dont il adopte les normes ou auquel il souhaite appartenir, sans forcément en faire partie. Exemple : les étudiants en médecine pour un lycéen qui veut devenir médecin et adopte déjà leurs méthodes de travail.",
                "(3) Un lien faible est une relation peu intense, peu fréquente et peu intime avec une simple connaissance. Exemple : un ancien camarade de collège croisé de temps en temps, qui peut signaler un emploi saisonnier.",
                "Résultat : trois définitions précises, chacune illustrée par un exemple concret.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le réseau amical de Léa comprend Léa et 5 amis. Léa est liée à ses 5 amis, et parmi ses amis, 4 paires se connaissent. Le réseau de Hugo comprend Hugo et 5 amis ; Hugo est lié à ses 5 amis, mais une seule paire de ses amis se connaît. (1) Calculez le nombre de liens possibles dans un réseau de 6 personnes. (2) Calculez la densité de chaque réseau. (3) Lequel de ces deux réseaux a le plus de chances d'apporter une information nouvelle pour trouver un stage ? Justifiez avec Granovetter.",
              hint: "Dans un réseau de n personnes, le nombre de liens possibles est n × (n - 1) ÷ 2. La densité est le rapport entre les liens existants et les liens possibles.",
              solution: [
                "(1) Liens possibles = 6 × 5 ÷ 2 = 15.",
                "(2) Réseau de Léa : 5 liens (Léa avec ses amis) + 4 liens entre amis = 9 liens. Densité = 9 ÷ 15 = 0,6, soit 60 %.",
                "Réseau de Hugo : 5 liens + 1 lien entre amis = 6 liens. Densité = 6 ÷ 15 = 0,4, soit 40 %.",
                "(3) Le réseau de Léa est dense : ses amis se connaissent entre eux, ils fréquentent les mêmes cercles et disposent probablement des mêmes informations. Ce réseau apporte surtout soutien et cohésion.",
                "Le réseau de Hugo est peu dense : ses amis appartiennent à des cercles différents qui ne communiquent pas. Comme les liens faibles chez Granovetter, ils jouent le rôle de ponts vers d'autres milieux et apportent des informations non redondantes.",
                "Résultat : 15 liens possibles ; densité de 60 % pour Léa et de 40 % pour Hugo ; le réseau de Hugo est le plus susceptible d'apporter une information nouvelle.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives) : mode d'obtention de l'emploi actuel selon le diplôme, en %. Sans diplôme ou brevet : grâce à la famille ou à des amis proches 28 ; grâce à de simples connaissances 12 ; candidature directe ou annonce 45 ; service public de l'emploi 15. Diplômés du supérieur : famille ou amis proches 10 ; simples connaissances 22 ; candidature directe ou annonce 60 ; service public de l'emploi 8. Questions : (1) Présentez la donnée 22. (2) Calculez, pour chaque groupe, la part des emplois obtenus grâce aux relations personnelles. (3) À l'aide du document, montrez que les ressources relationnelles mobilisées pour trouver un emploi diffèrent selon le diplôme.",
              hint: "Les relations personnelles regroupent les liens forts (famille, amis proches) et les liens faibles (simples connaissances). Comparez ensuite le poids de chaque type de lien dans les deux groupes.",
              solution: [
                "(1) Selon ces données fictives, 22 % des diplômés du supérieur ont obtenu leur emploi actuel grâce à de simples connaissances.",
                "(2) Sans diplôme ou brevet : 28 + 12 = 40 %. Diplômés du supérieur : 10 + 22 = 32 %.",
                "(3) Les relations personnelles comptent dans les deux groupes (entre un tiers et deux cinquièmes des emplois), mais leur nature diffère.",
                "Les moins diplômés s'appuient surtout sur des liens forts : 28 % contre 12 % pour les liens faibles. Leur réseau, souvent plus resserré autour de la famille et du voisinage, offre un soutien mais des informations plus limitées.",
                "Les diplômés du supérieur mobilisent davantage les liens faibles : 22 % contre 10 % pour les liens forts. Leur réseau plus large et plus diversifié leur donne accès, comme l'a montré Granovetter, à des informations nouvelles venues d'autres cercles.",
                "Conclusion : la quantité et la nature des liens sociaux sont inégalement réparties selon le diplôme, ce qui contribue à des inégalités d'accès à l'emploi.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Groupe primaire", right: "Petit groupe aux relations directes et affectives, comme la famille" },
              { left: "Groupe secondaire", right: "Groupe plus large aux relations formelles, organisé autour de règles ou d'un but" },
              { left: "Groupe de référence", right: "Groupe auquel un individu se compare ou souhaite appartenir" },
              { left: "Catégorie statistique", right: "Regroupement établi par le statisticien selon un critère commun" },
              { left: "Lien faible", right: "Relation peu intense avec une simple connaissance" },
              { left: "Densité d'un réseau", right: "Part des liens existants parmi tous les liens possibles" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces ensembles est une catégorie statistique ?",
              options: ["Une équipe de volley-ball", "Un club d'échecs", "Les retraités de France", "Une famille recomposée"],
              answer: 2,
              why: "Les retraités forment un ensemble défini par un critère (ne plus exercer d'activité et percevoir une pension), sans interactions ni conscience commune d'appartenance.",
            },
            {
              q: "Qu'est-ce qui caractérise d'abord un groupe primaire ?",
              options: ["Des liens directs et affectifs", "Un grand nombre de membres", "Des règles écrites et une hiérarchie", "Une adhésion payante"],
              answer: 0,
              why: "Le groupe primaire, défini par Cooley, est petit et repose sur des relations en face à face, personnelles et affectives.",
            },
            {
              q: "Selon Granovetter, pourquoi les liens faibles aident-ils à trouver un emploi ?",
              options: ["Ils reposent sur une intimité affective très forte", "Ils créent chez les proches une obligation de rendre service", "Ils se concentrent dans le cercle familial", "Ils donnent accès à des informations nouvelles"],
              answer: 3,
              why: "Les liens faibles relient des cercles sociaux différents : ils font circuler des informations que l'entourage proche ne possède pas.",
            },
            {
              q: "Un lycéen d'origine modeste adopte les goûts et le langage des élèves de classes préparatoires qu'il espère rejoindre. Il s'agit :",
              options: ["d'une socialisation primaire par la famille", "d'une socialisation anticipatrice", "d'une désaffiliation", "d'un lien de citoyenneté"],
              answer: 1,
              why: "Il intériorise à l'avance les normes de son groupe de référence : c'est la socialisation anticipatrice décrite par Merton.",
            },
            {
              q: "La densité d'un réseau de 5 personnes dans lequel 6 liens existent est égale à :",
              options: ["30 %", "50 %", "60 %", "120 %"],
              answer: 2,
              why: "Il y a 5 × 4 ÷ 2 = 10 liens possibles ; la densité vaut 6 ÷ 10 = 60 %.",
            },
          ],
          trap: "Confondre groupe social et catégorie statistique : les ouvriers de la PCS ou les 15-24 ans ne forment pas un groupe tant que leurs membres n'interagissent pas et n'ont pas conscience d'appartenir à un même ensemble. Autre confusion : réduire les réseaux sociaux au sens sociologique aux seules plateformes numériques.",
          method: "Pour classer un ensemble d'individus, testez un à un les critères du groupe social (interactions, conscience d'appartenance, reconnaissance par les autres), puis la taille et la nature des relations : chaque critère vérifié devient un argument de votre réponse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'solidarite-cohesion',
          title: 'Des solidarités en mutation et des liens fragilisés',
          minutes: 30,
          objectives: [
            "Distinguer la solidarité mécanique et la solidarité organique selon Émile Durkheim.",
            "Identifier les différents types de liens sociaux (filiation, participation élective, participation organique, citoyenneté) et ce qu'ils apportent aux individus.",
            "Comprendre comment différents facteurs (précarité, isolement, ségrégation, ruptures familiales) exposent les individus à l'affaiblissement ou à la rupture des liens sociaux.",
          ],
          course: [
            {
              heading: "De la solidarité mécanique à la solidarité organique",
              paragraphs: [
                "Dans De la division du travail social (1893), Émile Durkheim se demande comment une société qui s'industrialise et s'individualise peut rester unie. Il distingue deux formes de solidarité, c'est-à-dire deux formes de cohésion sociale. Dans les sociétés traditionnelles, la division du travail est faible : les individus exercent des activités proches, partagent les mêmes croyances et les mêmes modes de vie. Ils sont unis par leur ressemblance : c'est la solidarité mécanique. La conscience collective (l'ensemble des croyances et sentiments communs) y est forte et englobe presque entièrement les consciences individuelles. Le droit y est surtout répressif : il punit sévèrement ceux qui offensent les valeurs communes.",
                "Dans les sociétés modernes, la division du travail est très poussée : chacun occupe une fonction spécialisée et dépend des autres pour satisfaire ses besoins. Le boulanger, l'infirmière et l'informaticien ont besoin les uns des autres, comme les organes d'un corps vivant. Les individus sont unis par leur complémentarité et leur interdépendance : c'est la solidarité organique. La conscience collective recule et laisse plus de place à l'individualité. Le droit devient surtout restitutif : il cherche à réparer un préjudice et à rétablir les relations (droit civil, droit commercial, droit du travail).",
                "Pour Durkheim, l'individualisation n'est donc pas la disparition du lien social mais sa transformation. Il souligne toutefois un risque : si la division du travail progresse trop vite, sans règles suffisantes pour encadrer les relations, la société peut connaître une situation d'anomie, c'est-à-dire un affaiblissement des normes qui règlent les conduites.",
              ],
              box: { label: "Définition", text: "Solidarité mécanique : cohésion fondée sur la ressemblance des individus et une conscience collective forte (droit répressif). Solidarité organique : cohésion fondée sur la complémentarité et l'interdépendance nées de la division du travail (droit restitutif)." },
            },
            {
              heading: "La diversité des liens sociaux",
              paragraphs: [
                "Le sociologue Serge Paugam (Le lien social, 2008) distingue quatre grands types de liens qui rattachent l'individu à la société. Le lien de filiation unit parents et enfants et, plus largement, les membres d'une famille. Le lien de participation élective naît de relations choisies : le couple, les amis, les groupes auxquels on adhère librement. Le lien de participation organique se noue à l'école puis dans le travail : il repose sur l'apprentissage et l'exercice d'une fonction dans la division du travail. Le lien de citoyenneté rattache l'individu à une communauté politique, la nation, qui lui reconnaît des droits civils, politiques et sociaux.",
                "Chacun de ces liens apporte à l'individu deux ressources : une protection (pouvoir compter sur les autres en cas de difficulté) et une reconnaissance (compter pour les autres, se sentir utile et estimé). Un emploi stable, par exemple, procure un revenu et des droits sociaux (protection), mais aussi une identité et une utilité sociale reconnues par les collègues et la société (reconnaissance).",
                "Ces liens se transforment. La famille est devenue plus élective (unions plus libres et plus fragiles, création du pacte civil de solidarité en 1999, divorces plus fréquents) ; l'emploi est devenu plus instable pour une partie des actifs ; l'État-providence relaie une partie de la protection autrefois assurée par la famille. De nouvelles formes de lien apparaissent aussi (engagement associatif, solidarités organisées en ligne). Les liens sociaux mutent plus qu'ils ne disparaissent.",
              ],
              box: { label: "À retenir", text: "Quatre types de liens selon Paugam : filiation, participation élective, participation organique, citoyenneté. Chacun apporte protection (compter sur) et reconnaissance (compter pour)." },
            },
            {
              heading: "Des facteurs qui fragilisent les liens",
              paragraphs: [
                "La précarité de l'emploi (contrats courts, intérim, temps partiel subi) et le chômage affaiblissent d'abord le lien de participation organique : on perd des collègues, un rythme de vie et une utilité sociale reconnue. La baisse des revenus réduit aussi la sociabilité (moins de sorties, d'activités associatives, d'invitations), si bien que la précarité peut mener progressivement à l'isolement.",
                "L'isolement relationnel désigne la situation de personnes qui n'ont que très peu de contacts dans l'ensemble de leurs réseaux (famille, amis, voisins, collègues). Il touche particulièrement les personnes âgées après un veuvage ou une perte d'autonomie, mais aussi des personnes plus jeunes éloignées de leur famille ou sans emploi. Les ruptures familiales (séparations, divorces, conflits) peuvent distendre le lien de filiation, par exemple lorsque les contacts avec un parent deviennent rares, et elles fragilisent souvent les ressources économiques : les familles monoparentales sont plus exposées à la pauvreté.",
                "La ségrégation résidentielle est la concentration de populations aux caractéristiques sociales proches dans certains quartiers, qu'il s'agisse des quartiers pauvres ou des beaux quartiers où les plus aisés se regroupent. Elle réduit la mixité sociale et les occasions de nouer des liens faibles avec d'autres milieux, qui ouvrent des opportunités d'emploi. Elle peut aussi entraîner une stigmatisation de l'adresse, lorsque le fait d'habiter un quartier réputé difficile pénalise une candidature.",
              ],
              box: { label: "Repère", text: "Quatre facteurs de fragilisation des liens sociaux : la précarité (emploi, revenus), l'isolement, la ségrégation (notamment résidentielle) et les ruptures familiales. Ils se cumulent souvent." },
            },
            {
              heading: "Le cumul des fragilités : désaffiliation et disqualification",
              paragraphs: [
                "Robert Castel (Les Métamorphoses de la question sociale, 1995) analyse la situation des individus selon deux axes : l'intégration par le travail et l'insertion dans des réseaux de relations (famille, entourage). Il distingue une zone d'intégration (emploi stable et relations solides), une zone de vulnérabilité (emploi précaire et relations fragiles) et une zone de désaffiliation, où se cumulent l'absence de travail et l'isolement relationnel. La désaffiliation est un processus : on y glisse par étapes.",
                "Serge Paugam (La disqualification sociale, 1991) étudie les personnes qui dépendent de l'aide sociale. Il décrit un processus en trois phases : la fragilité (difficultés d'insertion professionnelle vécues comme une humiliation), la dépendance à l'égard des services sociaux, puis la rupture, lorsque les liens se défont et que la personne se retrouve en marge. La disqualification tient aussi au regard social : être désigné comme assisté peut être stigmatisant.",
                "Ces analyses montrent que la rupture d'un lien en entraîne souvent d'autres : la perte d'un emploi peut provoquer des tensions dans le couple, une séparation, un déménagement dans un quartier moins cher et un éloignement des amis. C'est pourquoi les politiques d'insertion cherchent à agir sur plusieurs liens à la fois (emploi, logement, accompagnement social).",
              ],
              box: { label: "Définition", text: "Désaffiliation (Robert Castel) : processus de décrochage qui cumule la perte de l'intégration par le travail et la fragilisation de l'insertion relationnelle." },
            },
          ],
          keyPoints: [
            "Durkheim (1893) : la solidarité mécanique repose sur la ressemblance, la solidarité organique sur la complémentarité née de la division du travail.",
            "L'individualisation transforme le lien social sans le faire disparaître ; le risque est l'anomie, l'affaiblissement des normes.",
            "Paugam distingue quatre liens : filiation, participation élective, participation organique, citoyenneté.",
            "Chaque lien apporte protection (compter sur les autres) et reconnaissance (compter pour les autres).",
            "Précarité, isolement, ségrégation et ruptures familiales exposent à l'affaiblissement ou à la rupture des liens.",
            "Castel parle de désaffiliation (perte du travail et isolement relationnel), Paugam de disqualification sociale (fragilité, dépendance, rupture).",
          ],
          example: {
            statement: "Montrez, à l'aide d'un exemple, que la perte d'un emploi peut fragiliser plusieurs types de liens sociaux.",
            solution: [
              "Idée directrice : la perte d'emploi touche d'abord le lien de participation organique, mais ses effets se propagent aux autres liens.",
              "Exemple : un ouvrier de 45 ans perd son emploi après la fermeture de son usine.",
              "Lien de participation organique : il perd ses collègues, son rythme de vie et la reconnaissance attachée à son métier ; il perd aussi la protection d'un salaire régulier.",
              "Lien de participation élective : avec la baisse de ses revenus, il réduit ses sorties et ses activités au club de football où il retrouvait ses amis ; les invitations se raréfient.",
              "Lien de filiation : les difficultés financières et le sentiment d'inutilité créent des tensions dans la famille, qui peuvent aller jusqu'à la séparation.",
              "Lien de citoyenneté : il conserve ses droits (allocation chômage, droit de vote), ce qui maintient une protection, mais il peut se sentir moins reconnu comme citoyen utile et se détourner de la participation politique.",
              "Conclusion : la perte d'emploi peut enclencher un cumul de fragilités, ce que Robert Castel appelle un glissement vers la vulnérabilité, voire la désaffiliation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez pour chaque situation le type de lien social principalement fragilisé (filiation, participation élective, participation organique, citoyenneté) : (a) un adolescent ne voit plus son père depuis la séparation de ses parents ; (b) une salariée perd son emploi après la fermeture de son usine ; (c) un retraité veuf a perdu de vue ses amis du quartier ; (d) un étranger en situation irrégulière n'a ni droit de vote ni accès à la plupart des prestations sociales.",
              hint: "Demandez-vous à chaque fois avec qui le lien est rompu : la famille d'origine, des personnes choisies, le monde du travail ou la communauté politique.",
              solution: [
                "(a) Lien de filiation : c'est la relation entre un parent et son enfant qui se distend.",
                "(b) Lien de participation organique : la salariée perd sa place dans la division du travail, ses collègues et la reconnaissance liée à son activité.",
                "(c) Lien de participation élective : le veuvage fait perdre le conjoint (lien choisi) et les amis du quartier sont eux aussi des relations choisies.",
                "(d) Lien de citoyenneté : la personne n'est pas reconnue comme membre de la communauté politique et ne bénéficie pas de la plupart des droits associés.",
                "Résultat : (a) filiation ; (b) participation organique ; (c) participation élective ; (d) citoyenneté.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des traits suivants, indiquez s'il caractérise plutôt la solidarité mécanique ou la solidarité organique, en justifiant en une phrase : (1) division du travail faible ; (2) droit restitutif ; (3) conscience collective forte ; (4) interdépendance des individus ; (5) individus semblables ; (6) développement de l'individualisme.",
              hint: "Associez « mécanique » à la ressemblance et « organique » aux organes d'un corps, différents mais complémentaires.",
              solution: [
                "(1) Solidarité mécanique : chacun exerce des activités proches, il y a peu de spécialisation.",
                "(2) Solidarité organique : le droit cherche à réparer et à rétablir les relations entre des individus interdépendants.",
                "(3) Solidarité mécanique : les croyances communes englobent presque entièrement les consciences individuelles.",
                "(4) Solidarité organique : la spécialisation rend chacun dépendant des autres pour satisfaire ses besoins.",
                "(5) Solidarité mécanique : la cohésion repose sur la similitude des modes de vie et des croyances.",
                "(6) Solidarité organique : le recul de la conscience collective laisse davantage de place à l'individualité.",
                "Résultat : mécanique pour (1), (3) et (5) ; organique pour (2), (4) et (6).",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives) : part des personnes en situation d'isolement relationnel (presque aucun contact avec la famille, les amis, les voisins ou les collègues) selon la situation, en %. En emploi stable : 6 ; en emploi précaire : 11 ; au chômage : 18 ; vivant en couple : 7 ; vivant seul après une séparation : 16. Questions : (1) Présentez la donnée 18. (2) Comparez la situation des chômeurs et des personnes en emploi stable, puis celle des personnes séparées et des personnes en couple, à l'aide d'un calcul. (3) À l'aide du document et de vos connaissances, montrez que la précarité et les ruptures familiales exposent les individus à l'affaiblissement des liens sociaux.",
              hint: "Utilisez un écart en points de pourcentage et un rapport (combien de fois plus). Dans la question 3, reliez chaque facteur au type de lien qu'il fragilise et pensez à l'effet de cumul.",
              solution: [
                "(1) Selon ces données fictives, 18 % des personnes au chômage sont en situation d'isolement relationnel.",
                "(2) Chômeurs et emploi stable : écart de 18 - 6 = 12 points ; rapport de 18 ÷ 6 = 3. Les chômeurs sont trois fois plus souvent isolés. L'emploi précaire occupe une position intermédiaire (11 %).",
                "Personnes séparées et en couple : écart de 16 - 7 = 9 points ; rapport de 16 ÷ 7 ≈ 2,3. Les personnes vivant seules après une séparation sont environ 2,3 fois plus souvent isolées.",
                "(3) Précarité : plus la situation d'emploi est fragile, plus l'isolement est fréquent (6 %, 11 %, 18 %). Le chômage rompt le lien de participation organique (collègues, reconnaissance) et la baisse de revenu réduit la sociabilité.",
                "Ruptures familiales : la séparation fragilise le lien de participation élective (le conjoint) et souvent les relations avec la belle-famille et les amis communs ; elle s'accompagne parfois d'un déménagement qui éloigne du réseau habituel.",
                "Ces facteurs se cumulent : la perte d'un emploi peut provoquer des tensions conjugales, et une séparation peut fragiliser la situation professionnelle. C'est ce que Castel décrit comme un glissement vers la désaffiliation.",
                "Nuance : le document établit une corrélation ; l'isolement peut aussi être une cause (un réseau pauvre aide moins à retrouver un emploi).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les solidarités et les liens sociaux.",
            statements: [
              { text: "Pour Durkheim, la solidarité organique repose sur la ressemblance des individus.", true: false, why: "C'est la solidarité mécanique qui repose sur la ressemblance ; l'organique repose sur la complémentarité." },
              { text: "Dans les sociétés à solidarité mécanique, le droit est surtout répressif.", true: true, why: "Il punit les atteintes à une conscience collective forte." },
              { text: "Pour Durkheim, l'individualisme signifie la disparition du lien social.", true: false, why: "Il transforme le lien social en interdépendance, il ne le supprime pas." },
              { text: "Selon Paugam, chaque type de lien apporte protection et reconnaissance.", true: true, why: "Compter sur les autres (protection) et compter pour les autres (reconnaissance)." },
              { text: "Le travail procure seulement un revenu, sans créer de lien social.", true: false, why: "Il fonde le lien de participation organique : collègues, identité, utilité reconnue." },
              { text: "La ségrégation résidentielle peut réduire les liens faibles qui ouvrent des opportunités.", true: true, why: "Elle limite les contacts avec d'autres milieux sociaux." },
              { text: "Pour Robert Castel, la désaffiliation combine perte du travail et isolement relationnel.", true: true, why: "C'est le double décrochage qui définit la zone de désaffiliation." },
            ],
          },
          quiz: [
            {
              q: "Chez Durkheim, la solidarité organique repose sur :",
              options: ["la ressemblance des individus", "la complémentarité des rôles", "une religion commune", "la contrainte de l'État"],
              answer: 1,
              why: "Dans les sociétés modernes, la division du travail rend les individus différents mais interdépendants.",
            },
            {
              q: "Le lien qui unit un salarié à son travail correspond, selon Paugam, à un lien :",
              options: ["de filiation", "de participation élective", "de citoyenneté", "de participation organique"],
              answer: 3,
              why: "Le lien de participation organique se noue à l'école puis dans le travail, par l'exercice d'une fonction dans la division du travail.",
            },
            {
              q: "Lequel de ces éléments relève du « compter pour » (la reconnaissance) selon Paugam ?",
              options: ["Être reconnu par ses collègues", "Toucher une allocation chômage", "Bénéficier d'une assurance maladie"],
              answer: 0,
              why: "La reconnaissance consiste à se sentir utile et estimé ; les allocations et l'assurance relèvent de la protection.",
            },
            {
              q: "Robert Castel désigne par désaffiliation :",
              options: ["la fin de l'adhésion à un parti", "la perte du travail et des relations", "un changement de groupe de référence", "le passage à la solidarité organique"],
              answer: 1,
              why: "La désaffiliation cumule le décrochage de l'intégration par le travail et celui de l'insertion relationnelle.",
            },
            {
              q: "Laquelle de ces situations illustre une ségrégation résidentielle ?",
              options: ["Des ménages pauvres concentrés dans un même quartier", "Un divorce suivi d'un déménagement dans une autre ville", "Un contrat d'intérim de trois mois", "Le départ à la retraite d'un salarié"],
              answer: 0,
              why: "La ségrégation résidentielle est la concentration de populations socialement proches dans certains espaces.",
            },
          ],
          trap: "Croire que la solidarité organique est une solidarité « plus faible » ou que l'individualisme détruit le lien social : pour Durkheim, la division du travail transforme le lien social en interdépendance, elle ne le supprime pas. Attention aussi à ne pas inverser mécanique (ressemblance) et organique (complémentarité).",
          method: "Pour mémoriser l'opposition de Durkheim, associez « organique » aux organes d'un corps, différents mais indispensables les uns aux autres. Pour une question sur la fragilisation des liens, partez d'un facteur, nommez le ou les types de liens touchés, puis montrez l'effet de cumul.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE FINANCEMENT DES AGENTS ÉCONOMIQUES                                  */
    /* ==================================================================== */
    {
      id: 'financement-economie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoin-capacite-financement',
          title: 'Épargne, besoin et capacité de financement',
          minutes: 30,
          objectives: [
            "Définir l'épargne et calculer un taux d'épargne.",
            "Comprendre que le financement de l'économie consiste à couvrir des besoins de financement par des capacités de financement.",
            "Calculer et interpréter le solde (capacité ou besoin de financement) d'un agent économique.",
            "Distinguer l'autofinancement et le financement externe, et comprendre comment les administrations publiques financent leur déficit.",
          ],
          course: [
            {
              heading: "Revenu, consommation et épargne",
              paragraphs: [
                "La comptabilité nationale regroupe les agents économiques en secteurs institutionnels : les ménages, les sociétés non financières (les entreprises qui produisent des biens et des services marchands), les sociétés financières (banques, assurances), les administrations publiques (État, collectivités territoriales, Sécurité sociale), les institutions sans but lucratif au service des ménages et le reste du monde. Chacun perçoit des revenus et les utilise.",
                "Pour les ménages, le revenu disponible brut (RDB) est le revenu dont ils disposent après la redistribution : revenus d'activité et du patrimoine, plus les prestations sociales, moins les impôts directs et les cotisations sociales. Ce revenu est soit consommé, soit épargné. L'épargne est donc la part du revenu disponible qui n'est pas consacrée à la consommation finale. Elle peut servir à investir (acheter un logement), à effectuer des placements financiers (livrets, assurance-vie, actions) ou à rembourser des dettes.",
                "Pour les entreprises, l'épargne brute correspond, en simplifiant, à la partie des profits qui n'est pas distribuée (après paiement des salaires, des impôts, des intérêts et des dividendes). Elle constitue leur ressource interne pour investir.",
              ],
              box: { label: "Formule", text: "Épargne des ménages = revenu disponible brut - consommation finale. Taux d'épargne (en %) = épargne brute ÷ revenu disponible brut × 100." },
            },
            {
              heading: "Capacité et besoin de financement",
              paragraphs: [
                "Pour savoir si un agent peut prêter ou doit emprunter, on compare son épargne et son investissement, mesuré par la formation brute de capital fixe (FBCF : achats de machines, de bâtiments, de logiciels, de logements). Si l'épargne est supérieure à l'investissement, l'agent dégage une capacité de financement : il dispose de ressources qu'il peut prêter ou placer. Si l'épargne est inférieure à l'investissement, il a un besoin de financement : il doit trouver des ressources auprès d'autres agents.",
                "En France, les ménages sont traditionnellement en capacité de financement : leur épargne dépasse leurs investissements en logement. Les sociétés non financières sont généralement en besoin de financement, car leurs investissements dépassent leur épargne. Les administrations publiques sont en besoin de financement lorsqu'elles connaissent un déficit, c'est-à-dire lorsque leurs dépenses dépassent leurs recettes, ce qui est le cas en France chaque année depuis le milieu des années 1970.",
                "Le financement de l'économie consiste donc à faire circuler les ressources des agents à capacité de financement vers les agents à besoin de financement. Cette circulation passe par les banques et par les marchés financiers. Au niveau de la nation, si la somme des soldes est positive, le pays prête au reste du monde ; si elle est négative, il emprunte au reste du monde.",
              ],
              box: { label: "Formule", text: "Solde de financement (en simplifiant) = épargne brute - FBCF. Solde positif : capacité de financement. Solde négatif : besoin de financement." },
            },
            {
              heading: "Autofinancement et financement externe",
              paragraphs: [
                "Une entreprise qui finance ses investissements avec sa propre épargne brute (ses profits non distribués) pratique l'autofinancement. On le mesure par le taux d'autofinancement, rapport entre l'épargne brute et la FBCF. Un taux supérieur à 100 % signifie que l'épargne couvre entièrement l'investissement : l'entreprise est alors en capacité de financement. L'autofinancement présente des avantages : il préserve l'indépendance de l'entreprise, n'entraîne pas de paiement d'intérêts et ne modifie pas la répartition du capital. Mais il dépend du niveau des profits et peut être insuffisant pour financer un grand projet.",
                "Lorsque l'autofinancement ne suffit pas, l'agent doit recourir à un financement externe : soit un financement intermédié (un crédit accordé par une banque), soit un financement direct sur les marchés financiers (émission d'actions ou d'obligations). Les ménages recourent eux aussi au financement externe, par exemple au crédit immobilier pour acheter un logement. Ces modes de financement sont étudiés dans la leçon suivante.",
                "Les administrations publiques financent leur déficit par l'emprunt. En France, l'Agence France Trésor émet pour le compte de l'État des titres de dette, notamment les obligations assimilables du Trésor (OAT), achetés par des banques, des assureurs, des fonds ou des investisseurs étrangers. L'accumulation des déficits successifs forme la dette publique. Les règles européennes fixent comme références un déficit public inférieur à 3 % du PIB et une dette publique inférieure à 60 % du PIB.",
              ],
              box: { label: "Définition", text: "Déficit public : écart négatif, sur une année, entre les recettes et les dépenses des administrations publiques (un flux). Dette publique : ensemble des emprunts des administrations publiques restant à rembourser à une date donnée (un stock)." },
            },
          ],
          keyPoints: [
            "L'épargne est la part du revenu disponible non consommée ; taux d'épargne = épargne ÷ revenu disponible brut × 100.",
            "Solde de financement = épargne - investissement (FBCF) : positif, c'est une capacité ; négatif, c'est un besoin de financement.",
            "En France, les ménages sont plutôt en capacité, les entreprises et les administrations publiques plutôt en besoin de financement.",
            "Financer l'économie, c'est faire circuler les ressources des agents à capacité vers les agents à besoin, par les banques et les marchés.",
            "Taux d'autofinancement = épargne brute ÷ FBCF × 100 ; au-delà de 100 %, l'entreprise est en capacité de financement.",
            "Le déficit public (flux annuel) est financé par l'emprunt ; leur accumulation forme la dette publique (stock).",
          ],
          example: {
            statement: "Données fictives. Un ménage dispose d'un revenu disponible brut annuel de 40 000 euros. Il consacre 34 000 euros à sa consommation finale et réalise des travaux d'agrandissement de son logement (FBCF) pour 4 000 euros. Calculez son épargne, son taux d'épargne et son solde de financement, puis interprétez.",
            solution: [
              "Épargne = revenu disponible brut - consommation = 40 000 - 34 000 = 6 000 euros.",
              "Taux d'épargne = 6 000 ÷ 40 000 × 100 = 15 %.",
              "Solde de financement = épargne - FBCF = 6 000 - 4 000 = + 2 000 euros.",
              "Le solde est positif : le ménage dégage une capacité de financement de 2 000 euros.",
              "Interprétation : ce ménage épargne 15 % de son revenu ; après avoir financé lui-même ses travaux, il lui reste 2 000 euros qu'il peut placer (livret, assurance-vie), ressources qui pourront financer d'autres agents. Réponse : épargne de 6 000 euros, taux d'épargne de 15 %, capacité de financement de 2 000 euros.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Un ménage dispose d'un revenu disponible de 2 500 euros par mois et épargne 300 euros par mois. (1) Calculez sa consommation mensuelle. (2) Calculez son taux d'épargne. (3) S'il portait son taux d'épargne à 15 % avec le même revenu, combien épargnerait-il chaque mois ?",
              hint: "Revenu disponible = consommation + épargne. Pour la question 3, multipliez le revenu par 0,15.",
              solution: [
                "(1) Consommation = 2 500 - 300 = 2 200 euros par mois.",
                "(2) Taux d'épargne = 300 ÷ 2 500 × 100 = 12 %.",
                "(3) Épargne = 2 500 × 0,15 = 375 euros par mois, soit 75 euros de plus qu'actuellement.",
                "Résultat : consommation de 2 200 euros, taux d'épargne de 12 %, épargne de 375 euros avec un taux de 15 %.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une entreprise dégage une épargne brute de 1,2 million d'euros et réalise des investissements (FBCF) pour 2 millions d'euros. (1) Calculez son solde de financement et dites de quoi il s'agit. (2) Calculez son taux d'autofinancement. (3) Proposez trois moyens de couvrir ce solde. (4) L'année suivante, son épargne brute atteint 2,4 millions d'euros pour le même investissement : calculez le nouveau taux d'autofinancement et le nouveau solde.",
              hint: "Solde = épargne - FBCF. Taux d'autofinancement = épargne brute ÷ FBCF × 100.",
              solution: [
                "(1) Solde = 1,2 - 2 = - 0,8 million d'euros : l'entreprise a un besoin de financement de 800 000 euros.",
                "(2) Taux d'autofinancement = 1,2 ÷ 2 × 100 = 60 % : l'épargne ne couvre que 60 % de l'investissement.",
                "(3) Elle peut emprunter auprès d'une banque (financement intermédié), émettre des obligations ou émettre des actions nouvelles (financement direct sur les marchés financiers).",
                "(4) Taux d'autofinancement = 2,4 ÷ 2 × 100 = 120 %. Solde = 2,4 - 2 = + 0,4 million d'euros : l'entreprise dégage une capacité de financement de 400 000 euros.",
                "Résultat : besoin de financement de 0,8 million d'euros et taux d'autofinancement de 60 % la première année ; taux de 120 % et capacité de 0,4 million d'euros l'année suivante.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives, en milliards d'euros) : épargne brute et FBCF par secteur institutionnel d'un pays. Ménages : épargne 300, FBCF 140. Sociétés non financières : épargne 240, FBCF 330. Administrations publiques : épargne - 20, FBCF 100. Sociétés financières : épargne 40, FBCF 20. Questions : (1) Calculez le solde de financement de chaque secteur. (2) Calculez le solde de la nation et interprétez-le. (3) À l'aide du document, montrez que le financement de l'économie consiste à couvrir des besoins de financement par des capacités de financement.",
              hint: "Calculez épargne - FBCF pour chaque secteur, puis additionnez les soldes. Vérifiez votre total en faisant la différence entre l'épargne totale et la FBCF totale.",
              solution: [
                "(1) Ménages : 300 - 140 = + 160. Sociétés non financières : 240 - 330 = - 90. Administrations publiques : - 20 - 100 = - 120. Sociétés financières : 40 - 20 = + 20 (en milliards d'euros).",
                "(2) Solde de la nation = 160 - 90 - 120 + 20 = - 30 milliards d'euros. Vérification : épargne totale 300 + 240 - 20 + 40 = 560 ; FBCF totale 140 + 330 + 100 + 20 = 590 ; 560 - 590 = - 30.",
                "Interprétation : le pays a un besoin de financement de 30 milliards d'euros ; il doit emprunter au reste du monde.",
                "(3) Deux secteurs dégagent une capacité de financement : les ménages (160) et les sociétés financières (20), soit 180 milliards de ressources disponibles.",
                "Deux secteurs ont un besoin de financement : les sociétés non financières (90) et les administrations publiques (120), soit 210 milliards. L'épargne négative des administrations publiques signifie que leurs dépenses courantes dépassent déjà leurs recettes.",
                "Les capacités des ménages, transmises par les banques (dépôts, crédits) et les marchés (achat d'obligations et d'actions), financent une grande partie des besoins des entreprises et de l'État ; le reste (30 milliards) est couvert par l'épargne du reste du monde.",
                "Conclusion : le financement de l'économie consiste bien à faire circuler les ressources des agents à capacité de financement vers ceux qui ont un besoin de financement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer la situation de financement d'un ménage.",
            items: [
              "Relever le revenu disponible brut du ménage",
              "Retirer les dépenses de consommation finale",
              "Obtenir l'épargne brute",
              "Retirer l'investissement (FBCF), par exemple l'achat d'un logement",
              "Lire le signe du solde : positif, capacité ; négatif, besoin de financement",
            ],
          },
          quiz: [
            {
              q: "Un ménage dispose d'un revenu disponible de 3 000 euros et consomme 2 550 euros. Son taux d'épargne est de :",
              options: ["15 %", "85 %", "17,6 %", "4,5 %"],
              answer: 0,
              why: "Épargne = 3 000 - 2 550 = 450 euros ; 450 ÷ 3 000 × 100 = 15 %.",
            },
            {
              q: "Un agent a un besoin de financement lorsque :",
              options: ["son épargne dépasse son investissement", "son investissement dépasse son épargne", "sa consommation diminue", "son revenu augmente"],
              answer: 1,
              why: "Si l'investissement est supérieur à l'épargne, l'agent doit trouver des ressources auprès d'autres agents.",
            },
            {
              q: "Quel secteur est traditionnellement en capacité de financement en France ?",
              options: ["Les sociétés non financières", "Les administrations publiques", "Les ménages"],
              answer: 2,
              why: "L'épargne des ménages dépasse leurs investissements en logement, ce qui dégage une capacité de financement.",
            },
            {
              q: "Une entreprise investit 500 000 euros et dégage une épargne brute de 400 000 euros. Son taux d'autofinancement est de :",
              options: ["125 %", "80 %", "20 %", "100 000 euros"],
              answer: 1,
              why: "400 000 ÷ 500 000 × 100 = 80 % ; l'entreprise a un besoin de financement de 100 000 euros.",
            },
            {
              q: "La dette publique correspond :",
              options: ["aux impôts que l'État n'a pas encore perçus", "à l'écart annuel entre dépenses et recettes publiques", "au stock des emprunts publics non remboursés"],
              answer: 2,
              why: "La dette est un stock, issu de l'accumulation des déficits ; l'écart annuel entre dépenses et recettes est le déficit, un flux.",
            },
          ],
          trap: "Confondre épargne et capacité de financement : un ménage qui épargne n'est pas forcément en capacité de financement s'il investit davantage (achat d'un logement) que ce qu'il épargne. De même, ne pas confondre déficit public (flux d'une année) et dette publique (stock accumulé).",
          method: "Avant tout calcul, écrivez la relation de base : solde = épargne - investissement. Vérifiez ensuite le signe et les unités ; un taux d'autofinancement supérieur à 100 % doit toujours correspondre à une capacité de financement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'financement-direct-indirect',
          title: 'Financement direct, financement intermédié et taux d’intérêt',
          minutes: 35,
          objectives: [
            "Distinguer le financement intermédié (crédit bancaire) et le financement direct (marchés financiers).",
            "Distinguer une action et une obligation, ainsi que le marché primaire et le marché secondaire.",
            "Comprendre que le taux d'intérêt est le prix du crédit, à la fois rémunération du prêteur et coût pour l'emprunteur, et distinguer taux nominal et taux réel.",
            "Expliquer comment le taux d'intérêt se fixe sur le marché des fonds prêtables et pourquoi il intègre une prime de risque.",
          ],
          course: [
            {
              heading: "Le financement intermédié : le rôle des banques",
              paragraphs: [
                "Dans le financement intermédié, un intermédiaire financier, le plus souvent une banque, s'interpose entre les agents à capacité et les agents à besoin de financement. La banque accorde un crédit à l'emprunteur, qui a une dette envers la banque et non envers les épargnants. Par exemple, une PME obtient un prêt de 80 000 euros sur cinq ans pour acheter une machine.",
                "Les banques rendent plusieurs services. Elles collectent de l'information sur les emprunteurs et évaluent leur solvabilité, ce que les épargnants ne pourraient pas faire seuls. Elles mutualisent les risques en prêtant à de nombreux emprunteurs. Elles transforment des ressources souvent courtes (des dépôts disponibles à tout moment) en prêts longs : c'est la transformation des échéances. Enfin, comme on le verra dans le chapitre sur la monnaie, elles ne se contentent pas de transmettre l'épargne : en accordant des crédits, elles créent de la monnaie.",
                "Jusqu'au début des années 1980, l'économie française reposait surtout sur le crédit bancaire : on parle d'économie d'endettement. Les réformes du milieu des années 1980 (déréglementation, modernisation des marchés financiers) ont développé le financement direct : c'est la désintermédiation. Le crédit bancaire reste cependant essentiel, en particulier pour les ménages et les petites et moyennes entreprises, qui n'ont pas accès aux marchés financiers.",
              ],
              box: { label: "Définition", text: "Financement intermédié : financement par l'intermédiaire d'une institution financière (banque) qui accorde un crédit à l'agent à besoin de financement et supporte le risque de non-remboursement." },
            },
            {
              heading: "Le financement direct : actions et obligations",
              paragraphs: [
                "Dans le financement direct, l'agent à besoin de financement émet des titres financiers qui sont achetés directement par les agents à capacité de financement sur les marchés financiers. Les deux principaux titres sont les actions et les obligations. Une action est un titre de propriété : elle représente une part du capital d'une société. Elle donne un droit de vote à l'assemblée générale des actionnaires et un droit à une part des bénéfices distribués, le dividende, dont le montant est variable et dépend des résultats. Elle n'est pas remboursée : elle constitue des fonds propres pour l'entreprise.",
                "Une obligation est un titre de créance : elle correspond à une fraction d'un emprunt. Elle rapporte un intérêt (le coupon), généralement fixé à l'émission, et elle est remboursée à son échéance. Elle constitue un endettement pour l'émetteur, qui peut être une entreprise ou un État.",
                "On distingue deux compartiments. Le marché primaire est le marché où sont émis les titres neufs : c'est là que l'émetteur obtient réellement des fonds (par exemple lors d'une introduction en Bourse ou d'une augmentation de capital). Le marché secondaire, souvent appelé la Bourse, est le marché où s'échangent les titres déjà émis, comme un marché de l'occasion. Une vente sur le marché secondaire n'apporte pas de ressources à l'entreprise, mais ce marché est indispensable : il permet aux détenteurs de revendre leurs titres à tout moment, ce qui rend les titres liquides et encourage les épargnants à les acheter sur le marché primaire.",
                "L'action est plus risquée que l'obligation : le dividende peut être nul, le cours peut baisser fortement, et en cas de faillite les actionnaires ne sont remboursés qu'après tous les créanciers. L'obligation est moins risquée, mais l'émetteur peut faire défaut. Seules les grandes entreprises et les États peuvent émettre facilement des titres ; c'est pourquoi le financement direct concerne surtout eux.",
              ],
              box: { label: "Repère", text: "Action : titre de propriété, dividende variable, droit de vote, pas de remboursement (fonds propres). Obligation : titre de créance, intérêt généralement fixe, remboursement à l'échéance (endettement)." },
            },
            {
              heading: "Le taux d'intérêt, prix du crédit",
              paragraphs: [
                "Le taux d'intérêt est le prix payé par l'emprunteur pour disposer d'une somme d'argent pendant une durée donnée ; il s'exprime en pourcentage annuel du capital emprunté. Pour le prêteur, l'intérêt est une rémunération : il renonce à disposer de son argent pendant la durée du prêt et prend le risque de ne pas être remboursé. Pour l'emprunteur, c'est un coût. Par exemple, un emprunt de 10 000 euros pendant un an au taux de 4 % coûte 10 000 × 0,04 = 400 euros d'intérêts.",
                "Le niveau du taux d'intérêt dépend de plusieurs éléments : la durée du prêt (les taux longs sont généralement plus élevés que les taux courts), le risque présenté par l'emprunteur (un emprunteur jugé fragile doit payer une prime de risque, un supplément de taux), les taux directeurs fixés par la banque centrale (voir le chapitre sur la monnaie) et l'inflation anticipée.",
                "Il faut distinguer le taux d'intérêt nominal, celui qui figure dans le contrat, et le taux d'intérêt réel, qui tient compte de l'évolution des prix et mesure le coût véritable du crédit. Par exemple, avec un taux nominal de 5 % et une inflation de 2 %, le taux réel est d'environ 3 %. Lorsque l'inflation dépasse le taux nominal, le taux réel est négatif : la hausse des prix allège la charge réelle de la dette, au bénéfice des emprunteurs et au détriment des prêteurs.",
              ],
              box: { label: "Formule", text: "Intérêts sur un an = capital emprunté × taux d'intérêt. Taux d'intérêt réel ≈ taux d'intérêt nominal - taux d'inflation." },
            },
            {
              heading: "Le marché des fonds prêtables",
              paragraphs: [
                "Le modèle du marché des fonds prêtables représente la rencontre entre ceux qui offrent des fonds et ceux qui en demandent, le taux d'intérêt jouant le rôle de prix. L'offre de fonds prêtables provient de l'épargne des agents à capacité de financement ; elle est croissante avec le taux d'intérêt, car un taux plus élevé rémunère mieux l'épargne. La demande provient des agents à besoin de financement qui veulent investir ; elle est décroissante avec le taux d'intérêt, car un projet n'est entrepris que si son rendement attendu dépasse le coût de l'emprunt. Le taux d'équilibre est celui pour lequel l'offre est égale à la demande.",
                "Ce modèle permet d'analyser des chocs. Si les ménages épargnent davantage, l'offre augmente et le taux d'équilibre baisse. Si les entreprises veulent investir davantage, ou si l'État emprunte massivement pour financer son déficit, la demande augmente et le taux d'équilibre monte, ce qui peut décourager certains investissements privés. Le modèle a des limites : les banques peuvent accorder des crédits sans épargne préalable, puisqu'elles créent de la monnaie, et la banque centrale influence fortement les taux.",
              ],
              box: { label: "À retenir", text: "Sur le marché des fonds prêtables, l'offre (épargne) croît avec le taux d'intérêt et la demande (investissement) décroît avec lui. Le taux d'intérêt d'équilibre égalise l'offre et la demande de fonds." },
            },
          ],
          keyPoints: [
            "Financement intermédié : une banque accorde un crédit et supporte le risque. Financement direct : l'agent émet des titres achetés sur les marchés financiers.",
            "Action : titre de propriété, dividende variable, droit de vote, non remboursée. Obligation : titre de créance, intérêt, remboursée à l'échéance.",
            "Marché primaire : émission de titres neufs (l'émetteur obtient des fonds). Marché secondaire : échange de titres existants (liquidité).",
            "Le taux d'intérêt est le prix du crédit : rémunération du prêteur, coût pour l'emprunteur ; il intègre une prime de risque.",
            "Taux réel ≈ taux nominal - inflation ; un taux réel négatif favorise les emprunteurs.",
            "Marché des fonds prêtables : offre d'épargne croissante et demande d'investissement décroissante en fonction du taux d'intérêt.",
          ],
          example: {
            statement: "Une entreprise emprunte 50 000 euros pour un an à un taux nominal de 6 %. Sur l'année, l'inflation est de 2 %. (1) Calculez le montant des intérêts et la somme totale remboursée. (2) Calculez le taux d'intérêt réel. (3) Interprétez pour l'emprunteur et pour le prêteur.",
            solution: [
              "(1) Intérêts = 50 000 × 0,06 = 3 000 euros. Somme remboursée = 50 000 + 3 000 = 53 000 euros.",
              "(2) Taux réel ≈ taux nominal - inflation = 6 - 2 = 4 %.",
              "(3) Pour l'emprunteur, le coût véritable du crédit est d'environ 4 % : une partie des 6 % ne fait que compenser la baisse du pouvoir d'achat de la monnaie.",
              "Pour le prêteur, la rémunération réelle est d'environ 4 % : c'est ce qu'il gagne en pouvoir d'achat pour avoir renoncé à disposer de son argent pendant un an et accepté un risque.",
              "Réponse : 3 000 euros d'intérêts, 53 000 euros remboursés, taux réel d'environ 4 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque opération : financement intermédié, financement direct, autofinancement, ou opération qui ne finance pas l'émetteur. (a) Une PME obtient un prêt de sa banque pour acheter un camion. (b) Une grande entreprise émet des obligations souscrites par des fonds de pension. (c) Un épargnant achète en Bourse des actions déjà existantes. (d) Une entreprise finance son nouvel entrepôt avec ses bénéfices mis en réserve. (e) L'État émet des obligations assimilables du Trésor.",
              hint: "Demandez-vous d'où viennent les fonds (de l'agent lui-même ou d'un autre agent), puis s'ils passent par une banque ou par l'achat d'un titre neuf.",
              solution: [
                "(a) Financement intermédié : la banque accorde un crédit et porte le risque.",
                "(b) Financement direct : les titres neufs sont achetés directement par des agents à capacité de financement (marché primaire).",
                "(c) Opération qui ne finance pas l'entreprise : les actions changent de propriétaire sur le marché secondaire, l'entreprise ne reçoit aucun fonds.",
                "(d) Autofinancement : l'entreprise utilise sa propre épargne brute.",
                "(e) Financement direct : l'État émet des titres de créance achetés par des investisseurs.",
                "Résultat : (a) intermédié ; (b) et (e) direct ; (c) pas de financement de l'émetteur ; (d) autofinancement.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une entreprise émet 10 000 obligations d'une valeur nominale de 1 000 euros chacune, au taux de 3 %, remboursables dans 5 ans. (1) Quel montant lève-t-elle ? (2) Calculez le coupon annuel versé pour une obligation, puis le total des intérêts versés chaque année. (3) Calculez le coût total des intérêts sur 5 ans et la somme à rembourser à l'échéance. (4) Si elle avait plutôt émis pour 10 millions d'euros d'actions nouvelles, quelles auraient été les différences pour elle ?",
              hint: "Le coupon annuel est égal à la valeur nominale multipliée par le taux. Pour la question 4, pensez au remboursement, à la rémunération et au pouvoir dans l'entreprise.",
              solution: [
                "(1) Montant levé = 10 000 × 1 000 = 10 000 000 euros, soit 10 millions d'euros.",
                "(2) Coupon annuel par obligation = 1 000 × 0,03 = 30 euros. Total annuel = 10 000 × 30 = 300 000 euros.",
                "(3) Intérêts sur 5 ans = 300 000 × 5 = 1 500 000 euros. À l'échéance, l'entreprise rembourse le nominal, soit 10 millions d'euros.",
                "(4) Avec des actions, l'entreprise n'aurait ni intérêts obligatoires ni remboursement : les fonds propres sont permanents. En revanche, les nouveaux actionnaires recevraient des dividendes si des bénéfices sont distribués et disposeraient de droits de vote : le pouvoir des anciens actionnaires serait dilué.",
                "Résultat : 10 millions levés, 300 000 euros d'intérêts par an, 1,5 million d'intérêts sur 5 ans et 10 millions remboursés à l'échéance.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document puis raisonnement). Document (données fictives) : taux d'intérêt nominal moyen des crédits aux entreprises et taux d'inflation dans un pays. Année 1 : 2,0 % et 0,5 %. Année 2 : 2,5 % et 5,0 %. Année 3 : 4,5 % et 5,5 %. Année 4 : 4,5 % et 2,5 %. Questions : (1) Calculez le taux d'intérêt réel de chaque année. (2) Quelle année a été la plus favorable aux emprunteurs ? Justifiez. (3) À l'aide du document et de vos connaissances, expliquez pourquoi une hausse du taux d'intérêt réel peut freiner l'investissement des entreprises.",
              hint: "Taux réel ≈ taux nominal - inflation. Pour la question 3, comparez le rendement attendu d'un projet et le coût réel de son financement.",
              solution: [
                "(1) Année 1 : 2,0 - 0,5 = 1,5 %. Année 2 : 2,5 - 5,0 = - 2,5 %. Année 3 : 4,5 - 5,5 = - 1,0 %. Année 4 : 4,5 - 2,5 = 2,0 %.",
                "(2) L'année 2 est la plus favorable aux emprunteurs : le taux réel est le plus bas (- 2,5 %). L'inflation allège la charge réelle de leur dette plus vite que les intérêts ne l'alourdissent.",
                "(3) Entre l'année 2 et l'année 4, le taux réel passe de - 2,5 % à 2,0 %, soit une hausse de 4,5 points : le coût véritable du crédit augmente fortement.",
                "Une entreprise n'investit que si le rendement attendu de son projet dépasse le coût de son financement. Quand le taux réel monte, des projets qui étaient rentables ne le sont plus et sont abandonnés ou reportés.",
                "Sur le marché des fonds prêtables, la demande de fonds est décroissante avec le taux d'intérêt : une hausse du taux se traduit par une baisse de la quantité de fonds empruntés pour investir.",
                "La hausse des taux réduit aussi l'autofinancement futur, car les intérêts versés sur les dettes existantes à taux variable diminuent les profits.",
                "Conclusion : une hausse du taux d'intérêt réel renchérit le financement externe et diminue la rentabilité nette des projets, ce qui freine l'investissement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Action", right: "Titre de propriété donnant droit à un dividende et à un droit de vote" },
              { left: "Obligation", right: "Titre de créance rapportant un intérêt et remboursé à l'échéance" },
              { left: "Marché primaire", right: "Marché où sont émis les titres neufs" },
              { left: "Marché secondaire", right: "Marché où s'échangent les titres déjà émis" },
              { left: "Taux d'intérêt réel", right: "Taux nominal corrigé de l'inflation" },
              { left: "Prime de risque", right: "Supplément de taux exigé d'un emprunteur jugé peu sûr" },
            ],
          },
          quiz: [
            {
              q: "Une PME obtient un prêt auprès de sa banque. Il s'agit :",
              options: ["d'un financement direct", "d'un autofinancement", "d'un financement intermédié", "d'une augmentation de capital"],
              answer: 2,
              why: "La banque s'interpose entre épargnants et emprunteurs : c'est le financement intermédié.",
            },
            {
              q: "Le détenteur d'une obligation possède :",
              options: ["une part du capital de l'entreprise", "une créance sur l'émetteur", "un droit de vote en assemblée générale"],
              answer: 1,
              why: "L'obligation est un titre de créance : son détenteur a prêté à l'émetteur, qui lui verse des intérêts et le rembourse à l'échéance.",
            },
            {
              q: "Le taux nominal d'un crédit est de 3 % et l'inflation de 4 %. Le taux réel est d'environ :",
              options: ["7 %", "1 %", "-1 %", "0,75 %"],
              answer: 2,
              why: "Taux réel ≈ 3 - 4 = - 1 % : l'inflation dépasse le taux nominal, ce qui avantage l'emprunteur.",
            },
            {
              q: "Sur le marché des fonds prêtables, une hausse de l'épargne des ménages tend à :",
              options: ["faire baisser le taux d'intérêt", "faire monter le taux d'intérêt", "laisser le taux inchangé", "supprimer tout besoin de financement"],
              answer: 0,
              why: "L'offre de fonds augmente : à demande inchangée, le taux d'intérêt d'équilibre baisse.",
            },
            {
              q: "L'achat en Bourse d'actions déjà émises :",
              options: ["apporte des fonds nouveaux à l'entreprise", "se fait sur le marché secondaire", "est un crédit bancaire", "rapporte un coupon fixe"],
              answer: 1,
              why: "Les titres déjà émis s'échangent sur le marché secondaire : ils changent de propriétaire sans financer l'entreprise.",
            },
          ],
          trap: "Croire que tout achat d'actions finance l'entreprise : seules les actions émises sur le marché primaire lui apportent des fonds ; sur le marché secondaire, les titres changent seulement de propriétaire. Autre erreur : confondre action (propriété, dividende variable) et obligation (créance, intérêt et remboursement).",
          method: "Pour identifier un mode de financement, posez deux questions dans l'ordre : les fonds viennent-ils de l'agent lui-même (autofinancement) ou d'un autre agent ? Dans ce second cas, passent-ils par une banque qui prend le risque (intermédié) ou par l'achat d'un titre neuf émis par l'emprunteur (direct) ?",
        },
      ],
    },
    /* ==================================================================== */
    /* LA MONNAIE ET SA CRÉATION                                              */
    /* ==================================================================== */
    {
      id: 'monnaie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-formes-monnaie',
          title: 'Fonctions et formes de la monnaie',
          minutes: 30,
          objectives: [
            "Connaître les trois fonctions de la monnaie : unité de compte, intermédiaire des échanges, réserve de valeur.",
            "Distinguer les formes de la monnaie (monnaie fiduciaire, monnaie scripturale) et les instruments de paiement.",
            "Comprendre que la monnaie repose sur la confiance.",
            "Définir la masse monétaire et les agrégats monétaires, en particulier M1.",
          ],
          course: [
            {
              heading: "Pourquoi la monnaie ? Les trois fonctions",
              paragraphs: [
                "Imaginez une économie de troc, où l'on échange directement un bien contre un autre. Pour échanger, il faut trouver un partenaire qui possède ce que l'on veut et qui veut ce que l'on possède : c'est la double coïncidence des besoins, mise en avant par l'économiste William Stanley Jevons au XIXe siècle. Un boulanger qui veut des chaussures doit trouver un cordonnier qui veut du pain. Ce récit est surtout un raisonnement théorique : les anthropologues ont montré que les sociétés anciennes ne reposaient pas sur le troc généralisé. Mais il fait bien comprendre ce que la monnaie apporte.",
                "La monnaie remplit trois fonctions. Elle est d'abord une unité de compte : elle mesure la valeur de tous les biens dans une même unité, ce qui permet de les comparer. Dans une économie de troc à 100 biens, il faudrait connaître 100 × 99 ÷ 2 = 4 950 prix relatifs (le prix de chaque bien en chacun des autres) ; avec une monnaie, 100 prix suffisent. Elle est ensuite un intermédiaire des échanges : acceptée par tous en paiement, elle décompose l'échange en deux opérations (vendre contre de la monnaie, puis acheter avec cette monnaie) et supprime le problème de la double coïncidence. Elle est enfin une réserve de valeur : on peut la conserver pour dépenser plus tard, elle transporte du pouvoir d'achat dans le temps.",
                "La monnaie est l'actif le plus liquide : elle se transforme immédiatement, sans coût ni perte, en n'importe quel bien. D'autres actifs conservent de la valeur (un logement, des actions), mais ils sont moins liquides, car il faut du temps et parfois accepter une perte pour les vendre. La fonction de réserve de valeur est fragilisée par l'inflation : quand les prix augmentent, une même somme permet d'acheter moins.",
              ],
              box: { label: "Définition", text: "La monnaie est un actif parfaitement liquide, accepté par tous comme moyen de paiement. Elle remplit trois fonctions : unité de compte, intermédiaire des échanges, réserve de valeur." },
            },
            {
              heading: "Des formes de monnaie qui se dématérialisent",
              paragraphs: [
                "Au cours de l'histoire, la monnaie a pris des formes de plus en plus abstraites. Les monnaies-marchandises (bétail, sel, coquillages) avaient une valeur d'usage. Les premières pièces frappées apparaissent en Lydie, en Asie Mineure, au VIIe siècle avant J.-C. : la monnaie métallique tire alors sa valeur du métal précieux qu'elle contient. Les billets de banque se diffusent en Europe à partir du XVIIe siècle ; d'abord convertibles en or ou en argent, ils ont progressivement perdu ce lien.",
                "Aujourd'hui, les billets et les pièces forment la monnaie fiduciaire : leur valeur faciale n'a aucun rapport avec la valeur du papier ou du métal. Dans la zone euro, les billets sont émis par l'Eurosystème (la Banque centrale européenne et les banques centrales nationales, dont la Banque de France) et les pièces par les États. La monnaie scripturale est constituée des dépôts à vue sur les comptes bancaires : c'est une simple écriture dans les comptes d'une banque. Elle représente aujourd'hui l'essentiel de la monnaie en circulation, bien plus que les billets et les pièces.",
                "La monnaie scripturale circule grâce à des instruments de paiement : le chèque, la carte bancaire, le virement, le prélèvement. Ces instruments ne sont pas de la monnaie : ils servent seulement à transférer des dépôts d'un compte à un autre. La monnaie électronique, enfin, correspond à des unités stockées sur un support électronique (une carte prépayée, par exemple).",
                "Les cryptoactifs comme le bitcoin, apparu en 2009, ne sont émis par aucune banque centrale. Leur valeur varie très fortement et ils sont peu acceptés en paiement : ils remplissent mal les fonctions d'unité de compte et de réserve de valeur, ce qui conduit la plupart des économistes à ne pas les considérer comme de véritables monnaies. La Banque centrale européenne prépare par ailleurs un éventuel euro numérique, qui serait une monnaie de banque centrale sous forme électronique.",
              ],
              box: { label: "À retenir", text: "Monnaie fiduciaire : billets et pièces. Monnaie scripturale : dépôts à vue sur des comptes bancaires, l'essentiel de la monnaie. Chèque, carte et virement sont des instruments de paiement, pas de la monnaie." },
            },
            {
              heading: "La monnaie repose sur la confiance",
              paragraphs: [
                "Le mot fiduciaire vient du latin fiducia, la confiance. Une monnaie sans valeur propre n'est acceptée que parce que chacun est sûr que les autres l'accepteront à leur tour. Cette confiance repose sur l'habitude des échanges quotidiens, sur la garantie d'institutions (l'État lui donne cours légal, c'est-à-dire que nul ne peut la refuser en paiement, et la banque centrale veille à sa stabilité) et sur l'adhésion aux valeurs de la société. Les économistes Michel Aglietta et André Orléan parlent de confiance méthodique, hiérarchique et éthique.",
                "Quand la confiance disparaît, la monnaie cesse de fonctionner. Lors des hyperinflations, comme en Allemagne en 1923 ou au Zimbabwe dans les années 2000, les prix augmentent si vite que chacun cherche à se débarrasser de la monnaie au plus vite : on revient au troc ou on utilise une monnaie étrangère. La stabilité de la valeur de la monnaie est donc une condition de la confiance.",
              ],
              box: { label: "Repère", text: "Une monnaie fiduciaire n'a pas de valeur intrinsèque : elle repose sur la confiance des utilisateurs, garantie par le cours légal et par une banque centrale chargée de maintenir la stabilité des prix." },
            },
            {
              heading: "Mesurer la monnaie : la masse monétaire",
              paragraphs: [
                "La masse monétaire est la quantité de monnaie détenue à un moment donné par les agents résidents autres que les institutions qui créent la monnaie (banques et banque centrale) et que l'administration centrale : principalement les ménages et les entreprises. La Banque centrale européenne la mesure par des agrégats emboîtés, classés du plus liquide au moins liquide. M1 comprend les billets et les pièces en circulation et les dépôts à vue. M2 ajoute à M1 les dépôts à terme d'une durée inférieure ou égale à 2 ans et les dépôts remboursables avec un préavis inférieur ou égal à 3 mois, comme les livrets d'épargne. M3 ajoute à M2 des instruments négociables à court terme (titres d'organismes de placement collectif monétaires, pensions, titres de créance d'une durée inférieure ou égale à 2 ans).",
                "Suivre l'évolution de la masse monétaire permet de surveiller l'économie : si la quantité de monnaie augmente beaucoup plus vite que la production de biens et de services, il existe un risque d'inflation.",
              ],
              box: { label: "Repère", text: "M1 = billets et pièces + dépôts à vue. M2 = M1 + dépôts à terme de 2 ans au plus + dépôts avec préavis de 3 mois au plus (livrets). M3 = M2 + instruments négociables à court terme." },
            },
          ],
          keyPoints: [
            "Trois fonctions : unité de compte (mesurer et comparer), intermédiaire des échanges (payer), réserve de valeur (conserver pour plus tard).",
            "La monnaie est l'actif le plus liquide ; l'inflation fragilise sa fonction de réserve de valeur.",
            "Monnaie fiduciaire : billets et pièces. Monnaie scripturale : dépôts à vue, l'essentiel de la monnaie aujourd'hui.",
            "Chèque, carte bancaire, virement et prélèvement sont des instruments de paiement, pas de la monnaie.",
            "La monnaie repose sur la confiance : sans elle (hyperinflation), elle cesse de circuler.",
            "La masse monétaire se mesure par des agrégats : M1 (billets, pièces, dépôts à vue), M2, M3.",
          ],
          example: {
            statement: "Dans une économie de troc comptant 20 biens, combien de prix relatifs faut-il connaître pour pouvoir échanger n'importe quel bien contre n'importe quel autre ? Combien de prix faut-il si l'on utilise une monnaie ? Quelle fonction de la monnaie ce calcul illustre-t-il ?",
            solution: [
              "Sans monnaie, il faut un prix pour chaque paire de biens. Le nombre de paires dans un ensemble de n biens est n × (n - 1) ÷ 2.",
              "Avec 20 biens : 20 × 19 ÷ 2 = 190 prix relatifs.",
              "Avec une monnaie, chaque bien a un seul prix exprimé en monnaie : 20 prix suffisent.",
              "Le nombre d'informations à connaître est divisé par 190 ÷ 20 = 9,5.",
              "Ce calcul illustre la fonction d'unité de compte : la monnaie sert d'étalon commun pour mesurer et comparer la valeur de tous les biens. Réponse : 190 prix relatifs sans monnaie, 20 prix avec une monnaie ; fonction d'unité de compte.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quelle fonction de la monnaie est principalement mobilisée dans chaque situation : (a) Paul met de côté 50 euros par mois pour acheter un vélo dans un an. (b) Le menu d'un restaurant affiche un plat à 14 euros. (c) Un artisan est payé par virement pour des travaux. (d) Une cliente compare le prix de deux téléphones avant de choisir.",
              hint: "Demandez-vous si la personne mesure ou compare des valeurs, si elle paie ou est payée, ou si elle conserve de la monnaie pour plus tard.",
              solution: [
                "(a) Réserve de valeur : Paul conserve du pouvoir d'achat pour le dépenser plus tard.",
                "(b) Unité de compte : la valeur du plat est exprimée en euros.",
                "(c) Intermédiaire des échanges : la monnaie (scripturale) sert à régler les travaux ; le virement est l'instrument de paiement.",
                "(d) Unité de compte : exprimer les deux prix dans la même unité permet de les comparer.",
                "Résultat : (a) réserve de valeur ; (b) et (d) unité de compte ; (c) intermédiaire des échanges.",
              ],
            },
            {
              level: 2,
              statement: "(1) Classez les éléments suivants en monnaie fiduciaire, monnaie scripturale, instrument de paiement, ou placement qui n'appartient pas à M1 : un billet de 20 euros, le solde d'un compte courant, un chèque, un livret A, une carte bancaire, une pièce de 2 euros. (2) Données fictives, en milliards d'euros, pour une économie : billets et pièces 1 500 ; dépôts à vue 8 500 ; dépôts à terme de 2 ans au plus 1 000 ; livrets d'épargne 2 500 ; titres d'organismes de placement collectif monétaires 600. Calculez M1, M2 et M3, puis la part de la monnaie fiduciaire dans M1.",
              hint: "M1 contient la monnaie fiduciaire et les dépôts à vue. M2 ajoute les dépôts à terme courts et les livrets ; M3 ajoute les titres monétaires négociables.",
              solution: [
                "(1) Monnaie fiduciaire : le billet de 20 euros et la pièce de 2 euros. Monnaie scripturale : le solde du compte courant (dépôt à vue). Instruments de paiement : le chèque et la carte bancaire. Placement hors M1 : le livret A, qui fait partie de M2.",
                "(2) M1 = 1 500 + 8 500 = 10 000 milliards d'euros.",
                "M2 = M1 + 1 000 + 2 500 = 13 500 milliards d'euros.",
                "M3 = M2 + 600 = 14 100 milliards d'euros.",
                "Part de la monnaie fiduciaire dans M1 = 1 500 ÷ 10 000 × 100 = 15 % ; la monnaie scripturale en représente donc 85 %.",
                "Résultat : M1 = 10 000, M2 = 13 500, M3 = 14 100 milliards d'euros ; la monnaie fiduciaire représente 15 % de M1.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée. (1) Données fictives : un ménage conserve 10 000 euros sur un compte courant non rémunéré pendant une année où les prix augmentent de 5 %. Calculez ce que vaut cette somme, en fin d'année, en euros du début d'année, puis la perte de pouvoir d'achat en pourcentage (arrondie au centième). (2) Expliquez pourquoi l'inflation fragilise l'une des fonctions de la monnaie. (3) Mobilisation des connaissances : montrez que la monnaie repose sur la confiance.",
              hint: "Pour (1), divisez la somme par le coefficient multiplicateur des prix (1,05). Pour (3), expliquez d'abord pourquoi une monnaie fiduciaire n'a pas de valeur propre, puis ce qui garantit la confiance et ce qui se passe quand elle disparaît.",
              solution: [
                "(1) Valeur réelle = 10 000 ÷ 1,05 ≈ 9 523,81 euros du début d'année. Perte de pouvoir d'achat = (10 000 - 9 523,81) ÷ 10 000 × 100 ≈ 4,76 %.",
                "(2) La fonction de réserve de valeur suppose que la monnaie conserve son pouvoir d'achat dans le temps. Avec 5 % d'inflation, les 10 000 euros ne permettent plus d'acheter que ce que 9 524 euros environ achetaient un an plus tôt : la monnaie transporte mal la valeur dans le temps.",
                "(3) Une monnaie fiduciaire (billets, dépôts) n'a pas de valeur intrinsèque : le papier d'un billet ne vaut presque rien et un dépôt n'est qu'une écriture. Elle n'est acceptée que parce que chacun pense que les autres l'accepteront.",
                "Cette confiance est garantie par des institutions : le cours légal oblige à accepter l'euro en paiement, et la banque centrale veille à la stabilité des prix. Elle repose aussi sur l'habitude et sur l'adhésion aux règles de la société (confiance méthodique, hiérarchique et éthique selon Aglietta et Orléan).",
                "Quand la confiance disparaît, la monnaie ne circule plus : lors de l'hyperinflation allemande de 1923, les agents cherchaient à se débarrasser au plus vite de leurs marks et se tournaient vers le troc ou les monnaies étrangères.",
                "Conclusion : 9 523,81 euros de pouvoir d'achat initial (perte de 4,76 %) ; l'inflation affaiblit la réserve de valeur, et la monnaie n'existe que par la confiance collective qu'elle inspire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'histoire de la monnaie.",
            items: [
              "Usage de monnaies-marchandises (bétail, sel, coquillages)",
              "Premières pièces frappées en Lydie (VIIe siècle av. J.-C.)",
              "Premiers billets de banque européens émis à Stockholm (1661)",
              "Création de la Banque de France (1800)",
              "Mise en circulation des billets et pièces en euros (2002)",
              "Lancement du bitcoin, premier cryptoactif (2009)",
            ],
          },
          quiz: [
            {
              q: "Afficher le prix d'une baguette en euros illustre la fonction :",
              options: ["de réserve de valeur", "d'intermédiaire des échanges", "d'unité de compte"],
              answer: 2,
              why: "Exprimer la valeur d'un bien dans une unité commune relève de la fonction d'unité de compte.",
            },
            {
              q: "Lequel de ces éléments est de la monnaie scripturale ?",
              options: ["Un chèque", "Une carte bancaire", "Un billet de 10 euros", "Un dépôt à vue"],
              answer: 3,
              why: "La monnaie scripturale est constituée des dépôts à vue ; chèque et carte ne sont que des instruments pour la faire circuler.",
            },
            {
              q: "La monnaie fiduciaire désigne :",
              options: ["les billets et les pièces", "les dépôts sur les livrets", "les cryptoactifs", "les virements"],
              answer: 0,
              why: "Billets et pièces ont une valeur faciale sans rapport avec leur valeur matérielle : leur acceptation repose sur la confiance.",
            },
            {
              q: "L'agrégat monétaire M1 comprend :",
              options: ["M2 augmenté des titres d'OPC monétaires", "l'ensemble de l'épargne placée en actions", "les seuls billets de banque", "les billets, pièces et dépôts à vue"],
              answer: 3,
              why: "M1 rassemble les formes les plus liquides de la monnaie : la monnaie fiduciaire et les dépôts à vue.",
            },
            {
              q: "Pourquoi le bitcoin remplit-il mal la fonction d'unité de compte ?",
              options: ["Parce qu'il n'existe que sous forme électronique", "Parce que sa valeur varie fortement", "Parce qu'il est émis par la BCE", "Parce qu'il ne peut pas être échangé"],
              answer: 1,
              why: "Un étalon de mesure doit être stable ; les fortes variations du bitcoin empêchent de s'en servir pour exprimer durablement des prix.",
            },
          ],
          trap: "Confondre la monnaie scripturale avec ses instruments de paiement : le chèque, la carte bancaire ou le virement ne sont pas de la monnaie, ils servent seulement à faire circuler les dépôts à vue d'un compte à un autre.",
          method: "Pour identifier une fonction de la monnaie, demandez-vous ce que fait l'agent : mesurer et comparer (unité de compte), payer (intermédiaire des échanges) ou conserver pour plus tard (réserve de valeur). Un même exemple peut en mobiliser plusieurs : précisez celle qui domine.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'creation-monetaire',
          title: 'Les banques créent la monnaie par le crédit',
          minutes: 30,
          objectives: [
            "Comprendre que la monnaie est créée par les banques commerciales lorsqu'elles accordent des crédits et détruite lors des remboursements.",
            "Représenter une création et une destruction monétaires dans un bilan bancaire simplifié.",
            "Identifier les limites du pouvoir de création monétaire des banques (demande de crédit, solvabilité des emprunteurs, besoin de monnaie banque centrale, réglementation).",
          ],
          course: [
            {
              heading: "Les crédits font les dépôts",
              paragraphs: [
                "L'essentiel de la monnaie en circulation, la monnaie scripturale, est créé par les banques commerciales (on dit aussi banques de second rang) lorsqu'elles accordent des crédits. Quand une banque prête 20 000 euros à Mme Martin pour acheter une voiture, elle ne prélève pas cette somme sur les dépôts d'autres clients : elle inscrit simplement 20 000 euros supplémentaires sur le compte de Mme Martin. Ce dépôt nouveau n'existait pas auparavant : la masse monétaire augmente de 20 000 euros. On résume ce mécanisme par la formule « les crédits font les dépôts ».",
                "La banque transforme ainsi une créance non monétaire (la promesse de remboursement de Mme Martin) en monnaie immédiatement utilisable : on parle de monétisation. Les banques créent aussi de la monnaie lorsqu'elles achètent des titres ou des devises à des agents non financiers en créditant leur compte, par exemple lorsqu'une banque achète des dollars à une entreprise exportatrice.",
                "Cette présentation est aujourd'hui celle des banques centrales elles-mêmes : la Banque d'Angleterre l'a rappelée dans une publication de 2014 consacrée à la création monétaire. L'idée ancienne selon laquelle les banques se contenteraient de prêter l'épargne préalablement déposée est donc incomplète.",
              ],
              box: { label: "Définition", text: "Création monétaire : processus par lequel les banques créent de la monnaie scripturale en accordant des crédits (ou en achetant des titres ou des devises), par une simple écriture sur le compte du client." },
            },
            {
              heading: "La destruction monétaire",
              paragraphs: [
                "Le mouvement inverse a lieu lors du remboursement. Quand Mme Martin rembourse le capital emprunté, son compte est débité et sa dette envers la banque diminue d'autant : la monnaie correspondante est détruite. Les intérêts versés, eux, constituent la rémunération de la banque, qui les utilise pour payer ses charges (salaires, fournisseurs) ou distribuer des dividendes.",
                "La masse monétaire augmente donc lorsque les nouveaux crédits accordés dépassent les remboursements, et diminue dans le cas contraire. Si, au cours d'une année, les banques d'un pays accordent 120 milliards d'euros de nouveaux crédits et reçoivent 100 milliards de remboursements, la masse monétaire augmente, du fait du crédit, de 20 milliards d'euros.",
              ],
              box: { label: "Formule", text: "Variation de la masse monétaire liée au crédit = nouveaux crédits accordés - remboursements du capital emprunté." },
            },
            {
              heading: "Le bilan d'une banque, pas à pas",
              paragraphs: [
                "Le bilan d'une banque comporte deux colonnes qui sont toujours égales. À l'actif figure ce que la banque possède ou ce qu'on lui doit : les crédits accordés aux clients (des créances), ses réserves sur son compte à la banque centrale, les titres qu'elle détient. Au passif figure ce qu'elle doit : les dépôts de ses clients, ses emprunts auprès de la banque centrale ou d'autres banques, ses fonds propres.",
                "Suivons un exemple. Une banque accorde un crédit de 10 000 euros à une entreprise : à l'actif, les crédits augmentent de 10 000 euros ; au passif, les dépôts augmentent de 10 000 euros. L'entreprise retire ensuite 1 000 euros en billets : les dépôts diminuent de 1 000 euros, et la banque doit fournir des billets, qu'elle obtient auprès de la banque centrale en puisant dans ses réserves. Enfin, l'entreprise paie par virement 6 000 euros à un fournisseur client d'une autre banque : son dépôt diminue de 6 000 euros, et sa banque doit transférer 6 000 euros de réserves à l'autre banque.",
              ],
              box: { label: "Repère", text: "Un crédit accordé s'inscrit à l'actif (créance sur le client) et crée un dépôt du même montant au passif. Le bilan reste équilibré." },
            },
            {
              heading: "Un pouvoir de création limité",
              paragraphs: [
                "Le pouvoir de création monétaire des banques n'est pas illimité. Il faut d'abord que des agents veuillent emprunter : la demande de crédit dépend du taux d'intérêt, de la conjoncture et des anticipations des ménages et des entreprises. Il faut ensuite que ces emprunteurs soient solvables : une banque ne prête que si elle pense être remboursée, car un crédit non remboursé est une perte pour elle.",
                "Les banques ont aussi besoin de monnaie banque centrale, c'est-à-dire de la monnaie émise par la banque centrale (billets et réserves sur leur compte à la banque centrale). Elles en ont besoin pour trois raisons : fournir des billets à leurs clients qui en retirent, régler aux autres banques le solde des paiements entre leurs clients (la compensation interbancaire) et constituer les réserves obligatoires imposées par la banque centrale (1 % de certains dépôts dans la zone euro depuis 2012). Elles se procurent cette monnaie sur le marché interbancaire ou auprès de la banque centrale, à un taux que celle-ci fixe : la banque centrale influence ainsi le coût de la création monétaire.",
                "Enfin, la réglementation prudentielle impose aux banques de détenir des fonds propres proportionnés aux risques de leurs crédits. Ces règles, définies au niveau international par les accords de Bâle et renforcées après la crise financière de 2007-2008 (Bâle III), limitent les crédits trop risqués.",
              ],
              box: { label: "À retenir", text: "Trois limites à la création monétaire : la demande de crédit et la solvabilité des emprunteurs ; le besoin de monnaie banque centrale (billets, compensation, réserves obligatoires) ; la réglementation prudentielle (fonds propres)." },
            },
          ],
          keyPoints: [
            "Les banques commerciales créent la monnaie scripturale en accordant des crédits : « les crédits font les dépôts ».",
            "Le remboursement du capital détruit la monnaie ; la masse monétaire augmente si les nouveaux crédits dépassent les remboursements.",
            "Dans le bilan bancaire, le crédit s'inscrit à l'actif et le dépôt créé au passif, pour le même montant.",
            "Déposer des billets sur son compte ne crée pas de monnaie : la monnaie change seulement de forme.",
            "Les banques ont besoin de monnaie banque centrale pour les retraits de billets, la compensation et les réserves obligatoires.",
            "Demande de crédit, solvabilité, coût de la monnaie banque centrale et fonds propres réglementaires limitent la création monétaire.",
          ],
          example: {
            statement: "La banque Alpha accorde un crédit de 15 000 euros à M. Durand pour acheter une voiture. (1) Présentez l'opération dans le bilan simplifié de la banque et indiquez son effet sur la masse monétaire. (2) Trois ans plus tard, M. Durand a remboursé la totalité du capital. Quel est l'effet de ces remboursements ?",
            solution: [
              "(1) À l'actif de la banque Alpha : les crédits à la clientèle augmentent de 15 000 euros (créance sur M. Durand).",
              "Au passif : les dépôts à vue augmentent de 15 000 euros (somme inscrite sur le compte de M. Durand). Le bilan reste équilibré.",
              "Ce dépôt nouveau est de la monnaie scripturale qui n'existait pas : la masse monétaire augmente de 15 000 euros.",
              "(2) À chaque remboursement du capital, le dépôt de M. Durand diminue et la créance de la banque diminue du même montant.",
              "Au total, 15 000 euros de dépôts et 15 000 euros de créances disparaissent du bilan : la monnaie créée est détruite.",
              "Réponse : création de 15 000 euros de monnaie lors du crédit, destruction de 15 000 euros lors des remboursements ; les intérêts payés rémunèrent la banque.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque opération, dites s'il y a création monétaire, destruction monétaire ou aucun effet sur la masse monétaire M1 : (a) une banque accorde un prêt immobilier de 200 000 euros ; (b) un client dépose 500 euros en billets sur son compte courant ; (c) un ménage rembourse 300 euros de capital sur son crédit ; (d) une banque achète des dollars à une entreprise exportatrice en créditant son compte en euros ; (e) un client vire 100 euros à un ami.",
              hint: "Demandez-vous si la quantité totale de billets et de dépôts à vue détenue par les agents non financiers augmente, diminue ou change seulement de forme ou de propriétaire.",
              solution: [
                "(a) Création monétaire : la banque crée un dépôt de 200 000 euros en accordant le crédit.",
                "(b) Aucun effet : les billets (monnaie fiduciaire) deviennent un dépôt (monnaie scripturale) ; M1 est inchangé, seule la forme de la monnaie change.",
                "(c) Destruction monétaire : le dépôt et la créance diminuent de 300 euros.",
                "(d) Création monétaire : la banque monétise des devises en créditant le compte de l'entreprise.",
                "(e) Aucun effet : la monnaie change seulement de propriétaire.",
                "Résultat : création en (a) et (d), destruction en (c), aucun effet en (b) et (e).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Au cours d'une année, les banques d'un pays accordent 85 milliards d'euros de nouveaux crédits et reçoivent 70 milliards d'euros de remboursements de capital. La masse monétaire M1 s'élève à 900 milliards d'euros en début d'année. On suppose que le crédit est la seule source de variation de M1. (1) Calculez la variation de M1. (2) Calculez M1 en fin d'année et son taux de variation (arrondi au centième). (3) Reprenez les calculs si les remboursements atteignaient 95 milliards d'euros.",
              hint: "Variation de M1 = nouveaux crédits - remboursements. Le taux de variation se calcule par rapport à la valeur de début d'année.",
              solution: [
                "(1) Variation = 85 - 70 = + 15 milliards d'euros.",
                "(2) M1 en fin d'année = 900 + 15 = 915 milliards d'euros. Taux de variation = 15 ÷ 900 × 100 ≈ 1,67 %.",
                "(3) Variation = 85 - 95 = - 10 milliards d'euros. M1 en fin d'année = 900 - 10 = 890 milliards d'euros. Taux de variation = - 10 ÷ 900 × 100 ≈ - 1,11 %.",
                "Interprétation : lorsque les remboursements dépassent les nouveaux crédits, les destructions l'emportent sur les créations et la masse monétaire diminue.",
                "Résultat : + 15 milliards (M1 = 915 milliards, + 1,67 %) dans le premier cas ; - 10 milliards (M1 = 890 milliards, - 1,11 %) dans le second.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (raisonnement). Données fictives : la banque Bêta accorde un crédit de 50 000 euros à l'entreprise Gamma. Gamma retire 5 000 euros en billets, puis vire 30 000 euros à un fournisseur client de la banque Delta. La banque centrale impose des réserves obligatoires de 1 % sur les dépôts. (1) Décrivez l'effet de chaque opération sur le bilan de Bêta. (2) Calculez le montant de monnaie banque centrale dont Bêta a besoin à l'issue de ces opérations, réserves obligatoires sur le dépôt restant de Gamma comprises. (3) Montrez que ce besoin de monnaie banque centrale limite le pouvoir de création monétaire des banques.",
              hint: "Calculez d'abord le dépôt qui reste sur le compte de Gamma. Additionnez ensuite les billets à fournir, le montant à transférer à Delta et 1 % du dépôt restant.",
              solution: [
                "(1) Crédit : actif + 50 000 euros (créance sur Gamma) ; passif + 50 000 euros (dépôt de Gamma). Retrait : le dépôt de Gamma diminue de 5 000 euros et Bêta doit fournir 5 000 euros de billets. Virement : le dépôt de Gamma diminue de 30 000 euros et Bêta doit transférer 30 000 euros de réserves à Delta.",
                "(2) Dépôt restant de Gamma = 50 000 - 5 000 - 30 000 = 15 000 euros. Réserves obligatoires = 15 000 × 0,01 = 150 euros.",
                "Besoin total de monnaie banque centrale = 5 000 + 30 000 + 150 = 35 150 euros.",
                "(3) Une banque crée de la monnaie scripturale par une simple écriture, mais elle ne peut pas créer de la monnaie banque centrale, que seule la banque centrale émet. Or chaque crédit entraîne des retraits de billets, des paiements vers d'autres banques et des réserves obligatoires.",
                "Bêta doit donc se procurer ces 35 150 euros sur le marché interbancaire ou auprès de la banque centrale, en payant un taux d'intérêt. Plus ce taux est élevé, plus il est coûteux d'accorder des crédits.",
                "Conclusion : le besoin de monnaie banque centrale (35 150 euros ici) limite la création monétaire et donne à la banque centrale un moyen d'agir sur elle par ses taux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur la création monétaire.",
            statements: [
              { text: "Une banque ne prête que l'argent que d'autres clients ont déposé auparavant.", true: false, why: "En accordant un crédit, la banque crée un dépôt nouveau : les crédits font les dépôts." },
              { text: "Le remboursement du capital d'un crédit détruit de la monnaie.", true: true, why: "Le dépôt et la créance diminuent du même montant." },
              { text: "Déposer des billets sur son compte augmente la masse monétaire M1.", true: false, why: "La monnaie passe de la forme fiduciaire à la forme scripturale : M1 ne change pas." },
              { text: "Une banque a besoin de monnaie banque centrale quand ses clients retirent des billets.", true: true, why: "Seule la banque centrale émet les billets ; la banque doit puiser dans ses réserves." },
              { text: "Les banques peuvent créer de la monnaie sans aucune limite.", true: false, why: "Demande de crédit, solvabilité, monnaie banque centrale et réglementation la limitent." },
              { text: "Les fonds propres exigés par la réglementation limitent les crédits accordés.", true: true, why: "Les accords de Bâle imposent des fonds propres proportionnés aux risques." },
              { text: "Acheter des devises à un exportateur en créditant son compte crée de la monnaie.", true: true, why: "La banque monétise un actif non monétaire, comme lors d'un crédit." },
            ],
          },
          quiz: [
            {
              q: "Quand une banque accorde un crédit de 1 000 euros à un client :",
              options: ["elle crée 1 000 euros de monnaie scripturale", "elle prélève 1 000 euros sur les dépôts d'autres clients", "elle doit d'abord emprunter 1 000 euros à la BCE", "la masse monétaire ne change pas"],
              answer: 0,
              why: "Le crédit fait naître un dépôt nouveau sur le compte du client : la masse monétaire augmente de 1 000 euros.",
            },
            {
              q: "Le remboursement du capital d'un crédit :",
              options: ["crée de la monnaie", "transforme des billets en dépôts", "n'a aucun effet monétaire", "détruit de la monnaie"],
              answer: 3,
              why: "Le dépôt de l'emprunteur et la créance de la banque diminuent ensemble : la monnaie créée lors du crédit disparaît.",
            },
            {
              q: "Dans le bilan d'une banque, les dépôts des clients figurent :",
              options: ["à l'actif", "au passif", "hors bilan"],
              answer: 1,
              why: "Les dépôts sont des dettes de la banque envers ses clients : ils figurent au passif.",
            },
            {
              q: "Laquelle de ces opérations n'oblige pas une banque à se procurer de la monnaie banque centrale ?",
              options: ["Un retrait de billets au guichet par un client", "Un virement vers un client d'une autre banque", "Un virement interne à la banque", "La constitution des réserves obligatoires"],
              answer: 2,
              why: "Un virement entre deux clients de la même banque se règle par un simple jeu d'écritures dans ses comptes.",
            },
            {
              q: "Sur une année, les banques accordent 60 milliards de crédits nouveaux et reçoivent 45 milliards de remboursements. Du fait du crédit, la masse monétaire varie de :",
              options: ["+15 milliards", "+105 milliards", "-15 milliards", "+60 milliards"],
              answer: 0,
              why: "Créations moins destructions : 60 - 45 = + 15 milliards.",
            },
          ],
          trap: "Croire que les banques se contentent de prêter l'épargne déposée par leurs clients : en accordant un crédit, la banque crée un dépôt nouveau, donc de la monnaie. À l'inverse, déposer des billets sur son compte ne crée pas de monnaie : la monnaie change seulement de forme.",
          method: "Pour chaque opération, écrivez les deux lignes du bilan bancaire (actif et passif) et vérifiez qu'il reste équilibré ; demandez-vous ensuite si les billets et dépôts à vue détenus par les agents non financiers ont augmenté (création), diminué (destruction) ou seulement changé de forme.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'banque-centrale',
          title: 'Le rôle de la banque centrale',
          minutes: 35,
          objectives: [
            "Comprendre le rôle de la banque centrale dans le processus de création monétaire (monnaie banque centrale, refinancement, taux directeurs).",
            "Connaître l'objectif principal de la Banque centrale européenne : la stabilité des prix.",
            "Expliquer comment une variation des taux directeurs se transmet au crédit, à l'activité économique et à l'inflation.",
          ],
          course: [
            {
              heading: "La banque des banques",
              paragraphs: [
                "La banque centrale est l'institution qui émet les billets et qui tient les comptes des banques commerciales. La monnaie qu'elle crée, la monnaie banque centrale, comprend les billets en circulation et les réserves que les banques détiennent sur leurs comptes auprès d'elle. Seule la banque centrale peut créer cette monnaie. Le système bancaire est donc hiérarchisé : au sommet, la banque centrale ; en dessous, les banques commerciales, qui créent la monnaie scripturale utilisée par les ménages et les entreprises.",
                "Dans la zone euro, la politique monétaire est conduite par l'Eurosystème, composé de la Banque centrale européenne (BCE), créée en 1998 et installée à Francfort, et des banques centrales nationales des pays de la zone euro, dont la Banque de France. Depuis le traité de Maastricht (1992), la BCE est indépendante : elle ne peut recevoir d'instructions des gouvernements. Les traités européens lui interdisent de financer directement les États, par exemple en leur accordant des crédits ou en achetant leurs titres au moment de leur émission.",
                "La banque centrale joue aussi le rôle de prêteur en dernier ressort : en cas de crise, elle fournit aux banques la monnaie banque centrale dont elles ont besoin pour éviter des faillites en chaîne, comme lors de la crise financière de 2008.",
              ],
              box: { label: "Définition", text: "Monnaie banque centrale : monnaie émise par la banque centrale, composée des billets en circulation et des réserves des banques commerciales sur leurs comptes à la banque centrale." },
            },
            {
              heading: "Le refinancement et les taux directeurs",
              paragraphs: [
                "Comme on l'a vu, les banques commerciales ont besoin de monnaie banque centrale pour fournir des billets à leurs clients, régler la compensation interbancaire et constituer leurs réserves obligatoires. Elles peuvent se la prêter entre elles sur le marché interbancaire, ou l'emprunter à la banque centrale : c'est le refinancement. La banque centrale prête alors pour une durée déterminée, contre des titres apportés en garantie, à un taux d'intérêt qu'elle fixe.",
                "La BCE fixe trois taux directeurs. Le taux des opérations principales de refinancement s'applique à ses prêts à une semaine. Le taux de la facilité de prêt marginal, plus élevé, s'applique aux prêts au jour le jour dont une banque a besoin en urgence. Le taux de la facilité de dépôt, plus bas, rémunère les réserves que les banques déposent au jour le jour auprès d'elle ; c'est aujourd'hui le taux que la BCE utilise surtout pour signaler l'orientation de sa politique. Ces taux encadrent les taux du marché interbancaire.",
                "En modifiant ses taux directeurs, la banque centrale modifie le coût de la monnaie banque centrale pour les banques. Si elle les relève, les banques paient plus cher leur refinancement et répercutent cette hausse sur les taux des crédits qu'elles accordent, ce qui réduit la demande de crédit et donc la création monétaire. Si elle les abaisse, le crédit devient moins cher et la création monétaire est encouragée.",
              ],
              box: { label: "Repère", text: "Les trois taux directeurs de la BCE : taux de la facilité de dépôt (le plus bas), taux des opérations principales de refinancement, taux de la facilité de prêt marginal (le plus élevé)." },
            },
            {
              heading: "L'objectif de stabilité des prix",
              paragraphs: [
                "Les traités européens donnent à la BCE un objectif principal : maintenir la stabilité des prix. Depuis la révision de sa stratégie en 2021, la BCE la définit comme une inflation de 2 % à moyen terme, mesurée par l'indice des prix à la consommation harmonisé ; cet objectif est symétrique, c'est-à-dire qu'un écart à la baisse est jugé aussi indésirable qu'un écart à la hausse. Sans préjudice de cet objectif, elle soutient les politiques économiques générales de l'Union européenne. La banque centrale des États-Unis (la Réserve fédérale) a, elle, un double mandat : la stabilité des prix et le plein emploi.",
                "Pourquoi viser la stabilité des prix ? Une inflation forte réduit le pouvoir d'achat, pénalise les détenteurs de revenus fixes et d'épargne, et crée de l'incertitude qui freine les décisions d'investissement. Mais une baisse durable des prix (la déflation) est aussi dangereuse : les agents reportent leurs achats en attendant des prix plus bas, et la charge réelle des dettes augmente. Viser 2 % plutôt que 0 % donne une marge de sécurité contre la déflation.",
              ],
              box: { label: "À retenir", text: "Objectif principal de la BCE : la stabilité des prix, définie comme une inflation de 2 % à moyen terme (objectif symétrique depuis 2021). La Réserve fédérale américaine a un double mandat : prix et emploi." },
            },
            {
              heading: "La transmission de la politique monétaire",
              paragraphs: [
                "Une politique monétaire restrictive consiste à relever les taux directeurs : le crédit devient plus cher, la consommation financée à crédit et l'investissement ralentissent, la demande de biens et de services progresse moins vite et la hausse des prix se modère. Une politique monétaire expansionniste consiste au contraire à abaisser les taux pour encourager le crédit, soutenir l'activité et éviter la déflation. Ces effets ne sont pas immédiats : ils se diffusent sur plusieurs trimestres.",
                "Exemple : alors que l'inflation dans la zone euro avait dépassé 10 % sur un an à l'automne 2022, la BCE a relevé ses taux directeurs à plusieurs reprises à partir de juillet 2022, jusqu'à porter le taux de la facilité de dépôt à 4 % en septembre 2023. Avec le reflux de l'inflation, elle a commencé à les abaisser en juin 2024.",
                "Quand les taux sont déjà proches de zéro, la banque centrale peut recourir à des instruments dits non conventionnels. Dans les années 2010, le taux de la facilité de dépôt de la BCE a été négatif (de 2014 à 2022) et, à partir de 2015, la BCE a acheté massivement des titres sur les marchés (l'assouplissement quantitatif) pour faire baisser les taux d'intérêt à long terme et soutenir le crédit.",
              ],
              box: { label: "Repère", text: "Chaîne de transmission d'une hausse des taux directeurs : refinancement plus cher, taux des crédits plus élevés, moins de crédits et de création monétaire, ralentissement de la demande, hausse des prix modérée." },
            },
          ],
          keyPoints: [
            "La monnaie banque centrale (billets et réserves des banques) n'est créée que par la banque centrale.",
            "Les banques s'en procurent par le marché interbancaire ou le refinancement, au taux fixé par la banque centrale.",
            "La BCE fixe trois taux directeurs : facilité de dépôt, opérations principales de refinancement, facilité de prêt marginal.",
            "Objectif principal de la BCE : la stabilité des prix, soit une inflation de 2 % à moyen terme.",
            "Hausser les taux directeurs freine le crédit, la création monétaire, la demande et l'inflation ; les baisser les stimule.",
            "La BCE est indépendante des gouvernements et ne peut pas financer directement les États.",
          ],
          example: {
            statement: "Expliquez les effets attendus d'une hausse des taux directeurs de la BCE sur la création monétaire et sur l'inflation.",
            solution: [
              "Point de départ : la BCE relève ses taux directeurs, donc le coût de la monnaie banque centrale.",
              "Les banques commerciales, qui ont besoin de cette monnaie (billets, compensation, réserves), paient plus cher leur refinancement.",
              "Elles répercutent cette hausse sur les taux des crédits accordés aux ménages et aux entreprises.",
              "Le crédit devenant plus coûteux, ménages et entreprises empruntent moins : moins de crédits signifie moins de création monétaire.",
              "La consommation financée à crédit et l'investissement ralentissent : la demande globale progresse moins vite.",
              "Les entreprises ont moins de facilité à augmenter leurs prix : l'inflation se modère, avec un délai de plusieurs trimestres.",
              "Réponse : une hausse des taux directeurs freine la création monétaire et vise à ramener l'inflation vers l'objectif de 2 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(1) Définissez la monnaie banque centrale. (2) Citez les trois raisons pour lesquelles une banque commerciale a besoin de monnaie banque centrale. (3) Quel est l'objectif principal de la BCE et comment est-il chiffré ?",
              hint: "Reprenez la composition de la monnaie banque centrale, puis pensez aux billets, aux paiements entre banques et aux réserves imposées.",
              solution: [
                "(1) La monnaie banque centrale est la monnaie émise par la banque centrale : les billets en circulation et les réserves des banques commerciales sur leurs comptes à la banque centrale.",
                "(2) Une banque en a besoin pour fournir des billets à ses clients qui en retirent, pour régler aux autres banques le solde des paiements entre leurs clients (compensation interbancaire) et pour constituer ses réserves obligatoires.",
                "(3) L'objectif principal de la BCE est la stabilité des prix, définie comme une inflation de 2 % à moyen terme, mesurée par l'indice des prix à la consommation harmonisé.",
                "Résultat : trois réponses précises, dont l'objectif chiffré de 2 % à moyen terme.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. (1) Une banque emprunte 200 millions d'euros de monnaie banque centrale pour 7 jours au taux annuel de 2 %. Les intérêts se calculent ainsi : capital × taux × nombre de jours ÷ 360. Calculez les intérêts versés. (2) Même question si le taux directeur passe à 4 %. (3) Un ménage emprunte 200 000 euros. On calcule simplement les intérêts sur un an pour un capital de 200 000 euros : comparez leur montant avec un taux de crédit de 1,5 % puis de 4 %. (4) Que montrent ces calculs ?",
              hint: "Pour (1) et (2), multipliez 200 000 000 par le taux puis par 7 ÷ 360. Pour (3), multipliez 200 000 par chaque taux.",
              solution: [
                "(1) Intérêts = 200 000 000 × 0,02 × 7 ÷ 360 = 4 000 000 × 7 ÷ 360 ≈ 77 777,78 euros.",
                "(2) Intérêts = 200 000 000 × 0,04 × 7 ÷ 360 = 8 000 000 × 7 ÷ 360 ≈ 155 555,56 euros : le coût du refinancement double.",
                "(3) À 1,5 % : 200 000 × 0,015 = 3 000 euros d'intérêts sur un an. À 4 % : 200 000 × 0,04 = 8 000 euros, soit 5 000 euros de plus.",
                "(4) La hausse du taux directeur renchérit le refinancement des banques, qui relèvent leurs taux de crédit. Pour le ménage, le coût du crédit est multiplié par 8 000 ÷ 3 000 ≈ 2,7 : certains renonceront à emprunter, ce qui réduit la création monétaire et la demande.",
                "Résultat : environ 77 777,78 puis 155 555,56 euros d'intérêts pour la banque ; 3 000 puis 8 000 euros pour le ménage.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives) : taux d'inflation annuel et taux de la facilité de dépôt d'une banque centrale. Année 1 : inflation 1,0 %, taux 0 %. Année 2 : 6,0 % et 1,5 %. Année 3 : 7,5 % et 3,5 %. Année 4 : 3,0 % et 4,0 %. Année 5 : 2,0 % et 3,0 %. Questions : (1) Calculez pour chaque année l'écart entre le taux directeur et l'inflation (taux directeur réel). (2) Décrivez la politique monétaire menée entre l'année 1 et l'année 5. (3) À l'aide du document et de vos connaissances, expliquez comment la banque centrale cherche à ramener l'inflation vers son objectif de 2 %.",
              hint: "Écart = taux directeur - inflation. Observez dans quel sens évolue le taux directeur, et ce qui se passe ensuite pour l'inflation, en tenant compte des délais.",
              solution: [
                "(1) Année 1 : 0 - 1,0 = - 1,0 point. Année 2 : 1,5 - 6,0 = - 4,5 points. Année 3 : 3,5 - 7,5 = - 4,0 points. Année 4 : 4,0 - 3,0 = + 1,0 point. Année 5 : 3,0 - 2,0 = + 1,0 point.",
                "(2) De l'année 1 à l'année 4, la banque centrale relève son taux de 0 % à 4 % : c'est une politique restrictive, menée en réaction à la forte hausse de l'inflation (de 1 % à 7,5 %). L'année 5, l'inflation étant revenue à 2 %, elle abaisse son taux à 3 %.",
                "(3) En relevant ses taux, la banque centrale renchérit le refinancement des banques, qui augmentent leurs taux de crédit. Les ménages et les entreprises empruntent moins : la création monétaire, la consommation et l'investissement ralentissent.",
                "La demande progressant moins vite, les entreprises augmentent moins leurs prix : l'inflation reflue, de 7,5 % l'année 3 à 3 % puis 2 %.",
                "Le document montre un décalage : l'inflation continue de monter l'année 3 malgré les hausses de taux, car la politique monétaire agit avec plusieurs trimestres de retard. Ce n'est qu'après le passage à un taux réel positif (année 4) que l'inflation revient vers 2 %.",
                "Conclusion : la banque centrale agit indirectement, par le coût du crédit ; une fois l'objectif de 2 % atteint, elle peut assouplir sa politique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la transmission d'une hausse des taux directeurs.",
            items: [
              "La banque centrale relève ses taux directeurs",
              "Les banques paient plus cher leur refinancement",
              "Les banques relèvent les taux de leurs crédits",
              "Ménages et entreprises empruntent moins : la création monétaire ralentit",
              "La consommation et l'investissement ralentissent",
              "La hausse des prix se modère",
            ],
          },
          quiz: [
            {
              q: "La monnaie banque centrale comprend :",
              options: ["les dépôts à vue des ménages et des entreprises", "les billets et les réserves des banques", "les livrets d'épargne réglementée", "les actions émises par les banques"],
              answer: 1,
              why: "Elle est formée des billets en circulation et des réserves que les banques détiennent sur leurs comptes à la banque centrale.",
            },
            {
              q: "L'objectif principal de la BCE est :",
              options: ["la stabilité des prix", "le plein emploi", "l'équilibre budgétaire des États", "un euro faible face au dollar"],
              answer: 0,
              why: "Les traités européens fixent la stabilité des prix comme objectif principal de la BCE.",
            },
            {
              q: "La BCE définit la stabilité des prix comme une inflation de :",
              options: ["0 % chaque année", "2 % à moyen terme", "moins de 1 % par an", "3 % au maximum par an"],
              answer: 1,
              why: "Depuis 2021, l'objectif est une inflation de 2 % à moyen terme, de façon symétrique.",
            },
            {
              q: "Une baisse des taux directeurs vise à :",
              options: ["freiner le crédit et la demande", "réduire directement la dette publique", "encourager le crédit"],
              answer: 2,
              why: "Un refinancement moins cher permet aux banques de baisser leurs taux, ce qui stimule le crédit et l'activité.",
            },
            {
              q: "En 2022 et 2023, la BCE a relevé ses taux directeurs parce que :",
              options: ["le chômage atteignait un niveau record", "l'économie de la zone était en déflation", "les banques ne prêtaient plus du tout", "l'inflation avait fortement monté"],
              answer: 3,
              why: "L'inflation de la zone euro avait dépassé 10 % sur un an à l'automne 2022, très loin de l'objectif de 2 %.",
            },
          ],
          trap: "Croire que la banque centrale prête directement aux ménages ou aux entreprises : elle ne prête qu'aux banques (refinancement) et agit sur l'économie de façon indirecte, par le coût du crédit. Autre confusion : penser qu'une hausse des taux directeurs fait monter l'inflation, alors qu'elle vise à la freiner.",
          method: "Pour expliquer une décision de politique monétaire, déroulez la chaîne complète comme un enchaînement de causes : taux directeurs, coût du refinancement, taux des crédits, volume des crédits, demande, prix. Un maillon manquant affaiblit le raisonnement.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA DÉVIANCE                                                            */
    /* ==================================================================== */
    {
      id: 'deviance',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'normes-deviance',
          title: 'Normes, déviance et délinquance',
          minutes: 30,
          objectives: [
            "Définir la déviance comme la transgression des normes et comprendre qu'elle est relative selon les sociétés, les époques et les groupes sociaux.",
            "Distinguer normes sociales et normes juridiques, déviance et délinquance.",
            "Comprendre que la déviance peut s'expliquer par l'anomie, au sens de Durkheim et au sens de Merton.",
            "Connaître les principaux indicateurs de la délinquance (statistiques administratives, enquêtes de victimation) et leurs limites.",
          ],
          course: [
            {
              heading: "Normes, déviance et délinquance",
              paragraphs: [
                "Une norme sociale est une règle de conduite, explicite ou implicite, qui découle des valeurs d'une société ou d'un groupe et dont le respect est attendu : saluer ses voisins, attendre son tour dans une file, adopter une tenue adaptée à la situation. Les normes juridiques sont des règles de droit, écrites, édictées par une autorité légitime et dont le respect est garanti par l'État (Code pénal, Code de la route). Les normes sociales sont sanctionnées de manière diffuse (réprobation, moquerie, mise à l'écart), les normes juridiques par des sanctions prévues par la loi (amende, prison).",
                "La déviance désigne l'ensemble des comportements qui transgressent les normes d'un groupe et qui exposent leur auteur à une sanction, formelle ou informelle. La délinquance est une forme particulière de déviance : c'est la transgression des normes pénales, c'est-à-dire la commission d'infractions. Le droit français distingue trois catégories d'infractions selon leur gravité : les contraventions (jugées par le tribunal de police), les délits (jugés par le tribunal correctionnel) et les crimes (jugés par la cour d'assises ou la cour criminelle départementale).",
                "Toute déviance n'est pas une délinquance : se présenter en pyjama à un entretien d'embauche ou parler fort dans une bibliothèque transgresse des normes sociales sans enfreindre la loi. À l'inverse, certaines infractions sont peu perçues comme déviantes par une partie de la population, comme un léger excès de vitesse.",
              ],
              box: { label: "Définition", text: "Déviance : transgression des normes d'un groupe, exposant à une sanction formelle ou informelle. Délinquance : partie de la déviance qui transgresse les normes pénales (contraventions, délits, crimes)." },
            },
            {
              heading: "Une déviance relative",
              paragraphs: [
                "La déviance n'est pas une propriété d'un comportement en soi : elle se définit toujours par rapport aux normes d'un groupe, à un moment donné. Elle varie dans l'espace (manger avec les doigts est la norme dans certaines sociétés, déviant dans d'autres), dans le temps (l'interruption volontaire de grossesse, punie par la loi pénale, a été dépénalisée en France par la loi Veil de 1975 ; fumer dans les cafés et les restaurants, longtemps toléré, y est interdit depuis 2008) et selon les groupes sociaux au sein d'une même société (un comportement valorisé dans une bande d'amis peut être sanctionné au lycée).",
                "Émile Durkheim, dans Les Règles de la méthode sociologique (1895), affirme que le crime est un phénomène normal, car on le retrouve dans toutes les sociétés. Il lui reconnaît même une utilité : la sanction du crime réaffirme les valeurs communes et renforce la conscience collective ; la déviance peut aussi annoncer des changements de normes (Durkheim prend l'exemple de Socrate, condamné par Athènes mais précurseur d'une morale nouvelle). Le crime ne devient pathologique que lorsque son taux s'écarte fortement de ce qui est habituel.",
              ],
              box: { label: "À retenir", text: "La déviance est relative : elle dépend des normes du groupe de référence, qui varient selon les sociétés, les époques et les groupes sociaux. Pour Durkheim, le crime est normal, car présent dans toute société." },
            },
            {
              heading: "L'anomie : de Durkheim à Merton",
              paragraphs: [
                "Pour Durkheim (De la division du travail social, 1893 ; Le Suicide, 1897), l'anomie est une situation d'affaiblissement des normes qui règlent les conduites et limitent les désirs des individus. Elle apparaît lors des changements rapides, par exemple lors des crises économiques : les individus ne savent plus quelles limites fixer à leurs aspirations, ce qui se traduit par une hausse des suicides qu'il qualifie d'anomiques.",
                "Le sociologue américain Robert K. Merton (« Structure sociale et anomie », 1938) donne un autre sens à l'anomie : c'est le décalage entre les buts culturellement valorisés par une société (la réussite matérielle, dans les États-Unis de son époque) et les moyens légitimes d'y parvenir (les études, le travail), qui sont inégalement accessibles selon la position sociale. Cette tension pousse certains individus vers la déviance.",
                "Merton distingue cinq modes d'adaptation. Le conformisme accepte à la fois les buts et les moyens légitimes. L'innovation accepte les buts mais emploie des moyens illégitimes (fraude, vol). Le ritualisme renonce aux buts mais respecte scrupuleusement les moyens (l'employé qui applique les règles à la lettre sans plus chercher à progresser). L'évasion (ou retrait) rejette les buts et les moyens (individus vivant en marge de la société). La rébellion rejette buts et moyens et cherche à leur en substituer de nouveaux (militants révolutionnaires). Cette analyse explique pourquoi la déviance est plus fréquente dans certaines positions sociales, mais elle rend mal compte de la délinquance des plus favorisés, que Edwin Sutherland a appelée la criminalité en col blanc.",
              ],
              box: { label: "Repère", text: "Les cinq adaptations de Merton : conformisme (buts et moyens acceptés), innovation (buts acceptés, moyens illégitimes), ritualisme (moyens seuls), évasion (rejet des deux), rébellion (rejet et remplacement des deux)." },
            },
            {
              heading: "Mesurer la délinquance : une tâche difficile",
              paragraphs: [
                "Les statistiques administratives recensent les infractions dont les institutions ont connaissance : les faits constatés par la police et la gendarmerie, publiés par le service statistique ministériel de la sécurité intérieure (SSMSI), et les condamnations prononcées par la justice. Elles mesurent autant l'activité des institutions que la délinquance elle-même : elles dépendent des plaintes déposées par les victimes, des priorités fixées à la police (plus de contrôles routiers ou de contrôles de stupéfiants font mécaniquement augmenter les infractions constatées), des changements de la loi et des méthodes d'enregistrement. Les infractions qui échappent aux institutions forment le chiffre noir de la délinquance.",
                "Les enquêtes de victimation interrogent un échantillon représentatif de la population pour savoir si les personnes ont été victimes d'infractions au cours d'une période et si elles ont porté plainte. Elles permettent d'estimer le chiffre noir et le taux de plainte, très variable selon les infractions : il est élevé pour les vols de voiture (la plainte est nécessaire pour être indemnisé par l'assurance), faible pour les violences commises par un proche ou les violences sexuelles. En France, l'enquête Cadre de vie et sécurité de l'Insee a été remplacée au début des années 2020 par l'enquête Vécu et ressenti en matière de sécurité du SSMSI.",
                "Les enquêtes de victimation ont aussi des limites : elles reposent sur la mémoire et les déclarations des personnes, et elles ne saisissent ni les homicides ni les infractions sans victime directe (fraude fiscale, trafic de stupéfiants). Les sociologues utilisent également des enquêtes de délinquance autodéclarée, qui demandent aux personnes, souvent des jeunes, quelles infractions elles ont commises. Ces sources sont complémentaires.",
              ],
              box: { label: "Définition", text: "Chiffre noir de la délinquance : ensemble des infractions commises mais inconnues des services de police et de justice, que les enquêtes de victimation permettent d'estimer." },
            },
          ],
          keyPoints: [
            "Normes sociales (sanctions diffuses) et normes juridiques (règles de droit sanctionnées par l'État).",
            "La déviance est la transgression des normes d'un groupe ; la délinquance est la partie de la déviance qui viole la loi pénale.",
            "La déviance est relative : elle varie selon les sociétés, les époques et les groupes sociaux.",
            "Durkheim : le crime est normal ; l'anomie est l'affaiblissement des normes qui règlent les désirs.",
            "Merton : l'anomie est le décalage entre buts valorisés et moyens légitimes ; cinq adaptations, du conformisme à la rébellion.",
            "Statistiques administratives et enquêtes de victimation mesurent la délinquance de façon partielle et complémentaire ; le chiffre noir échappe aux premières.",
          ],
          example: {
            statement: "Pour chaque comportement, dites s'il relève de la déviance, de la délinquance ou des deux, et précisez le type de sanction encourue : (a) rouler à 140 km/h sur une autoroute limitée à 130 km/h ; (b) venir en pyjama à un dîner de mariage ; (c) commettre un cambriolage ; (d) ne jamais saluer ses voisins.",
            solution: [
              "Rappel : toute délinquance est une déviance, mais toute déviance n'est pas une délinquance. La délinquance transgresse une norme pénale.",
              "(a) Délinquance, donc aussi déviance : c'est une infraction au Code de la route (une contravention), sanctionnée par une amende et un retrait de points. Elle est pourtant peu réprouvée par une partie de la population.",
              "(b) Déviance seulement : la norme vestimentaire transgressée est une norme sociale ; la sanction est informelle (regards, moqueries, mise à l'écart).",
              "(c) Délinquance et déviance : le cambriolage est un vol aggravé, un délit sanctionné par une peine d'amende et d'emprisonnement prononcée par le tribunal correctionnel, et fortement réprouvé socialement.",
              "(d) Déviance seulement : c'est une transgression des règles de politesse, sanctionnée de façon diffuse (réputation, froideur des voisins).",
              "Réponse : (a) et (c) relèvent de la délinquance (et donc de la déviance) avec des sanctions formelles ; (b) et (d) relèvent de la seule déviance avec des sanctions informelles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(1) Définissez norme sociale et norme juridique, et donnez un exemple de chacune. (2) Définissez déviance et délinquance, et donnez un exemple de déviance qui n'est pas une délinquance.",
              hint: "Pour distinguer les deux normes, demandez-vous qui fixe la règle et qui sanctionne sa transgression.",
              solution: [
                "(1) Une norme sociale est une règle de conduite, souvent implicite, issue des valeurs du groupe et sanctionnée de manière diffuse. Exemple : laisser sa place assise à une personne âgée dans le bus.",
                "Une norme juridique est une règle de droit écrite, édictée par une autorité légitime et sanctionnée par l'État. Exemple : l'interdiction de voler, prévue par le Code pénal.",
                "(2) La déviance est la transgression des normes d'un groupe, qui expose à une sanction formelle ou informelle. La délinquance est la transgression des normes pénales.",
                "Exemple de déviance non délinquante : couper la parole systématiquement à ses interlocuteurs, ou porter un maillot de bain à un enterrement.",
                "Résultat : deux définitions précises, chacune illustrée, et un exemple de déviance sans infraction.",
              ],
            },
            {
              level: 2,
              statement: "Associez chaque situation à l'un des modes d'adaptation de Merton (conformisme, innovation, ritualisme, évasion, rébellion), en justifiant : (a) un commerçant fraude le fisc pour s'enrichir plus vite ; (b) une employée applique scrupuleusement le règlement sans plus chercher de promotion ; (c) un militant veut remplacer la société de consommation par un autre modèle de société ; (d) un étudiant travaille pour obtenir un diplôme puis un bon emploi ; (e) un individu abandonne toute ambition sociale et se retire de la vie collective, en marge de la société.",
              hint: "Pour chaque cas, demandez-vous si l'individu accepte les buts valorisés (la réussite) et s'il utilise les moyens légitimes.",
              solution: [
                "(a) Innovation : il accepte le but (s'enrichir) mais utilise un moyen illégitime (la fraude).",
                "(b) Ritualisme : elle a renoncé au but (la réussite, la promotion) mais respecte strictement les moyens (les règles).",
                "(c) Rébellion : il rejette les buts et les moyens existants et veut leur en substituer de nouveaux.",
                "(d) Conformisme : il accepte le but (un bon emploi) et emploie les moyens légitimes (les études).",
                "(e) Évasion : il rejette à la fois les buts et les moyens et se retire de la société.",
                "Résultat : (a) innovation ; (b) ritualisme ; (c) rébellion ; (d) conformisme ; (e) évasion.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives) : résultats d'une enquête de victimation sur une année. Vols de voiture : 100 000 victimes estimées, taux de plainte 80 %. Vols sans violence (téléphone, portefeuille) : 600 000 victimes estimées, taux de plainte 35 %. Violences physiques hors ménage : 400 000 victimes estimées, taux de plainte 25 %. Questions : (1) Calculez, pour chaque type d'infraction, le nombre de victimes ayant porté plainte puis le nombre de victimes n'ayant pas porté plainte. (2) Quelle part de chaque type d'infraction échappe aux statistiques fondées sur les plaintes ? (3) À l'aide du document et de vos connaissances, montrez que les statistiques administratives donnent une image déformée de la délinquance.",
              hint: "Nombre de plaignants = victimes × taux de plainte. La part qui échappe aux plaintes est égale à 100 % moins le taux de plainte.",
              solution: [
                "(1) Vols de voiture : 100 000 × 0,80 = 80 000 plaintes ; 100 000 - 80 000 = 20 000 victimes sans plainte.",
                "Vols sans violence : 600 000 × 0,35 = 210 000 plaintes ; 600 000 - 210 000 = 390 000 victimes sans plainte.",
                "Violences physiques : 400 000 × 0,25 = 100 000 plaintes ; 400 000 - 100 000 = 300 000 victimes sans plainte.",
                "(2) Part qui échappe aux plaintes : 20 % des vols de voiture, 65 % des vols sans violence, 75 % des violences physiques.",
                "(3) Les statistiques administratives reposent en grande partie sur les plaintes : elles sous-estiment donc la délinquance, et cette sous-estimation est très inégale. Les vols de voiture sont presque tous déclarés, car l'assurance exige une plainte ; les violences le sont peu, par peur, honte, résignation ou parce que l'auteur est connu de la victime.",
                "Ainsi, selon ces statistiques, il y aurait autant de plaintes pour violences physiques que de plaintes pour vols de voiture (environ 100 000 contre 80 000), alors que l'enquête estime quatre fois plus de victimes de violences (400 000 contre 100 000). La hiérarchie des infractions est déformée.",
                "Elles dépendent aussi de l'activité des services (priorités, contrôles) : elles mesurent autant l'action des institutions que la délinquance. Conclusion : il faut croiser les statistiques administratives et les enquêtes de victimation, elles-mêmes imparfaites.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Conformisme", right: "Accepter les buts valorisés et les moyens légitimes" },
              { left: "Innovation", right: "Viser les buts valorisés par des moyens illégitimes" },
              { left: "Ritualisme", right: "Renoncer aux buts tout en respectant scrupuleusement les moyens" },
              { left: "Évasion", right: "Rejeter à la fois les buts et les moyens, en se retirant" },
              { left: "Rébellion", right: "Rejeter buts et moyens pour leur en substituer de nouveaux" },
              { left: "Chiffre noir", right: "Infractions commises mais inconnues de la police et de la justice" },
            ],
          },
          quiz: [
            {
              q: "Quelle affirmation est exacte ?",
              options: ["Toute déviance est une délinquance", "Toute délinquance est une forme de déviance", "La délinquance transgresse seulement des normes non écrites", "La déviance est définie une fois pour toutes"],
              answer: 1,
              why: "La délinquance, transgression des normes pénales, est une partie de la déviance ; l'inverse est faux.",
            },
            {
              q: "Pour Durkheim, le crime est un phénomène :",
              options: ["pathologique dans toutes les sociétés", "propre aux sociétés modernes", "inexistant dans les sociétés traditionnelles", "normal, présent dans toute société"],
              answer: 3,
              why: "On le retrouve dans toutes les sociétés ; sa sanction renforce même la conscience collective.",
            },
            {
              q: "Selon Merton, un individu qui recherche la richesse par la fraude adopte :",
              options: ["le ritualisme", "la rébellion", "l'innovation", "l'évasion"],
              answer: 2,
              why: "Il accepte le but valorisé (la richesse) mais utilise un moyen illégitime.",
            },
            {
              q: "Les enquêtes de victimation permettent surtout :",
              options: ["de compter les condamnations prononcées", "d'estimer le chiffre noir", "de mesurer l'activité des tribunaux", "de recenser les homicides"],
              answer: 1,
              why: "En interrogeant directement la population, elles révèlent les infractions non déclarées aux autorités.",
            },
            {
              q: "Fumer dans un café, longtemps toléré, est interdit en France depuis 2008. Ce changement illustre :",
              options: ["la relativité des normes", "l'absence de toute norme dans les cafés", "la stabilité des normes juridiques", "le ritualisme au sens de Merton"],
              answer: 0,
              why: "Un même comportement peut devenir déviant lorsque les normes évoluent : la déviance est relative à une époque.",
            },
          ],
          trap: "Assimiler déviance et délinquance, ou déviance et comportement « anormal » au sens moral : la déviance est seulement l'écart à une norme d'un groupe donné, à un moment donné ; la délinquance n'en est que la partie qui viole la loi pénale.",
          method: "Face à un comportement, posez trois questions : quelle norme est transgressée (sociale ou juridique) ? Aux yeux de quel groupe ? Quelle sanction (formelle ou informelle) est encourue ? Les réponses fournissent la qualification et les arguments.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'controle-etiquetage',
          title: 'Contrôle social et étiquetage',
          minutes: 30,
          objectives: [
            "Distinguer contrôle social formel et contrôle social informel, et comprendre l'évolution de leurs formes.",
            "Comprendre que la déviance peut s'analyser comme le produit d'un processus d'étiquetage (Howard Becker).",
            "Décrire les étapes d'une carrière déviante et le rôle de la stigmatisation (Erving Goffman).",
          ],
          course: [
            {
              heading: "Le contrôle social : formel et informel",
              paragraphs: [
                "Le contrôle social désigne l'ensemble des moyens dont dispose une société ou un groupe pour obtenir de ses membres qu'ils se conforment aux normes. Il agit en amont, par la socialisation qui fait intérioriser les normes, et en aval, par des sanctions positives (récompenses, félicitations) ou négatives (punitions, réprobation).",
                "Le contrôle social formel est exercé par des institutions spécialisées, selon des règles écrites et par des agents mandatés : la police, la justice, l'administration pénitentiaire, mais aussi le règlement intérieur d'un lycée appliqué par le conseil de discipline. Le contrôle social informel est exercé de manière diffuse par l'entourage : famille, amis, voisins, collègues. Il passe par des regards, des remarques, des moqueries, la mise à l'écart, ou au contraire par des compliments.",
              ],
              box: { label: "Définition", text: "Contrôle social : ensemble des moyens (socialisation, sanctions positives et négatives) par lesquels un groupe obtient la conformité de ses membres aux normes. Formel : par des institutions spécialisées. Informel : par l'entourage, de façon diffuse." },
            },
            {
              heading: "Des formes de contrôle qui évoluent",
              paragraphs: [
                "Dans les sociétés rurales traditionnelles, où tout le monde se connaît, le contrôle informel domine : la rumeur et la réputation suffisent souvent à faire respecter les normes. Avec l'urbanisation et l'anonymat des grandes villes, ce contrôle informel s'affaiblit, et le contrôle formel se développe : police, justice, institutions spécialisées prennent une place croissante.",
                "De nouvelles formes de contrôle sont apparues. Le contrôle devient technique et numérique : vidéoprotection, radars automatiques (installés en France à partir de 2003), traces laissées par les paiements par carte ou la géolocalisation des téléphones. Le contrôle informel se déplace aussi en ligne, sur les réseaux sociaux numériques (commentaires, notes, réputation, parfois harcèlement). Enfin, le sociologue Norbert Elias (La civilisation des mœurs, 1939) a montré que, sur le long terme, les individus intériorisent de plus en plus les normes et exercent sur eux-mêmes un autocontrôle.",
                "Ces évolutions suscitent des débats sur l'équilibre entre sécurité et libertés individuelles : en France, la Commission nationale de l'informatique et des libertés (CNIL), créée en 1978, veille à la protection des données personnelles.",
              ],
              box: { label: "À retenir", text: "Le contrôle social évolue : affaiblissement du contrôle informel avec l'anonymat urbain, développement du contrôle formel, essor du contrôle technique et numérique, intériorisation croissante des normes (autocontrôle)." },
            },
            {
              heading: "La déviance comme étiquetage : Howard Becker",
              paragraphs: [
                "Le sociologue interactionniste Howard Becker, dans Outsiders (1963), renverse la perspective. Pour lui, la déviance n'est pas une qualité de l'acte commis : elle est le produit d'une interaction entre celui qui transgresse et ceux qui réagissent à son acte. Les groupes sociaux créent la déviance en instituant des normes et en les appliquant à certaines personnes, qu'ils étiquettent comme déviantes. Le déviant est celui à qui cette étiquette a été appliquée avec succès.",
                "Becker appelle entrepreneurs de morale ceux qui créent les normes (les créateurs de normes, qui mènent une croisade pour faire interdire un comportement) et ceux qui les font appliquer (comme la police). Il étudie par exemple la campagne menée dans les années 1930 par l'administration fédérale américaine chargée des stupéfiants, qui a abouti à une loi de 1937 contre la marijuana.",
                "Becker propose une typologie qui croise le comportement (conforme ou transgressif) et la manière dont il est perçu. L'individu conforme respecte la norme et n'est pas perçu comme déviant. Le faussement accusé respecte la norme mais est perçu comme déviant. Le secrètement déviant transgresse la norme sans être découvert. Le pleinement déviant transgresse la norme et est désigné comme tel. Cette typologie montre que l'étiquette ne correspond pas toujours à l'acte.",
              ],
              box: { label: "Repère", text: "Typologie de Becker : conforme (obéit, non perçu comme déviant), faussement accusé (obéit, perçu comme déviant), secrètement déviant (transgresse, non perçu), pleinement déviant (transgresse, perçu comme déviant)." },
            },
            {
              heading: "Carrière déviante et stigmatisation",
              paragraphs: [
                "À partir de ses enquêtes sur les fumeurs de marijuana et les musiciens de danse, Becker décrit la carrière déviante comme une suite d'étapes. D'abord, l'individu transgresse une norme, parfois sans intention ou par curiosité. Ensuite, au contact d'autres déviants, il apprend les techniques, les plaisirs et les justifications de la pratique, et développe des motivations déviantes. Puis il est pris et désigné publiquement comme déviant : cet étiquetage transforme son identité et lui ferme l'accès à certains groupes conformes. Enfin, il rejoint un groupe déviant organisé, qui lui offre solidarité et justifications, et qui consolide sa carrière.",
                "Erving Goffman, dans Stigmate (1963), définit le stigmate comme un attribut qui jette un discrédit profond sur la personne et la réduit à cette caractéristique. Il distingue les stigmates liés au corps (handicap, malformation), ceux liés au caractère (passé judiciaire, addiction) et les stigmates dits tribaux (origine, religion). La personne discréditée a un stigmate visible ; la personne discréditable cache un stigmate qui pourrait être révélé, et doit gérer l'information sur elle-même.",
                "L'étiquetage peut fonctionner comme une prophétie autoréalisatrice, notion de Robert K. Merton : un jeune désigné comme « délinquant » par son entourage et rejeté par les groupes conformes peut finir par adopter le comportement qu'on lui prête. C'est l'une des raisons pour lesquelles la justice des mineurs donne la priorité aux mesures éducatives.",
              ],
              box: { label: "Définition", text: "Stigmate (Goffman) : attribut qui jette un discrédit profond sur une personne et la réduit à cette caractéristique aux yeux des autres. La stigmatisation peut enfermer l'individu dans la déviance." },
            },
          ],
          keyPoints: [
            "Contrôle social formel (institutions spécialisées, règles écrites) et informel (entourage, sanctions diffuses).",
            "Le contrôle informel recule avec l'anonymat urbain ; le contrôle formel, technique et numérique progresse ; l'autocontrôle s'accroît (Elias).",
            "Becker (Outsiders, 1963) : la déviance est le produit d'un étiquetage, pas une qualité de l'acte.",
            "Les entrepreneurs de morale créent les normes et les font appliquer.",
            "Carrière déviante : transgression, apprentissage, désignation publique, entrée dans un groupe déviant organisé.",
            "Goffman : le stigmate discrédite la personne et peut l'enfermer dans la déviance (prophétie autoréalisatrice).",
          ],
          example: {
            statement: "Situation fictive. Karim, 15 ans, tague un mur par défi un soir avec des amis. Il fréquente ensuite des graffeurs plus âgés qui lui apprennent les techniques et lui expliquent que le graffiti est un art. Surpris par la police, il est convoqué au commissariat ; l'histoire circule au lycée, il passe en conseil de discipline et ses anciens amis s'éloignent. Il rejoint alors un collectif de graffeurs qui revendique cette pratique. Identifiez les étapes de la carrière déviante au sens de Becker.",
            solution: [
              "Étape 1, la transgression : Karim tague un mur par défi, sans projet de devenir graffeur.",
              "Étape 2, l'apprentissage : au contact des graffeurs, il apprend les techniques et les justifications (le graffiti présenté comme un art), et développe des motivations.",
              "Étape 3, la désignation publique : arrêté par la police, puis connu au lycée et sanctionné par le conseil de discipline, il est étiqueté comme déviant ; ses anciens amis s'éloignent, ce qui transforme son identité et ses relations.",
              "Étape 4, l'entrée dans un groupe déviant organisé : il rejoint un collectif qui lui apporte solidarité et justifications, ce qui consolide sa carrière.",
              "Réponse : transgression, apprentissage, étiquetage public, intégration à un groupe déviant ; l'étiquetage a renforcé la déviance au lieu de l'arrêter.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque situation relève du contrôle social formel ou informel, et si la sanction est positive ou négative : (a) un professeur donne une heure de retenue ; (b) des camarades se moquent d'un élève à cause de ses vêtements ; (c) un radar automatique flashe un automobiliste ; (d) une grand-mère félicite son petit-fils d'avoir aidé un voisin ; (e) un juge prononce un travail d'intérêt général.",
              hint: "Le contrôle est formel s'il est exercé par une institution selon des règles écrites ; informel s'il vient de l'entourage.",
              solution: [
                "(a) Formel, sanction négative : la retenue est prévue par le règlement intérieur et appliquée par un agent de l'institution scolaire.",
                "(b) Informel, sanction négative : la moquerie vient des pairs, sans règle écrite.",
                "(c) Formel, sanction négative : le radar est un outil technique au service du contrôle exercé par l'État ; l'amende est prévue par la loi.",
                "(d) Informel, sanction positive : la félicitation vient de la famille et encourage un comportement conforme.",
                "(e) Formel, sanction négative : la peine est prononcée par la justice selon le Code pénal.",
                "Résultat : formel pour (a), (c) et (e) ; informel pour (b) et (d) ; seule (d) est une sanction positive.",
              ],
            },
            {
              level: 2,
              statement: "Classez chaque cas dans la typologie de Becker (conforme, faussement accusé, secrètement déviant, pleinement déviant), puis expliquez ce que montre cette typologie : (a) un élève est accusé à tort d'avoir triché parce que son voisin a copié sur lui ; (b) un salarié gonfle chaque mois ses notes de frais sans être découvert ; (c) une automobiliste respecte toujours les limitations de vitesse et n'est jamais inquiétée ; (d) un voleur est arrêté et condamné.",
              hint: "Croisez deux questions : l'individu a-t-il transgressé la norme ? Est-il perçu comme déviant ?",
              solution: [
                "(a) Faussement accusé : il a respecté la norme mais il est perçu comme déviant.",
                "(b) Secrètement déviant : il transgresse la norme mais n'est pas perçu comme déviant.",
                "(c) Conforme : elle respecte la norme et n'est pas perçue comme déviante.",
                "(d) Pleinement déviant : il a transgressé la norme et il est désigné comme déviant.",
                "Cette typologie montre que la déviance sociale (être désigné comme déviant) ne coïncide pas toujours avec l'acte : on peut être étiqueté sans avoir transgressé, et transgresser sans être étiqueté. Pour Becker, c'est la réaction sociale qui fait le déviant.",
                "Résultat : (a) faussement accusé ; (b) secrètement déviant ; (c) conforme ; (d) pleinement déviant.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (raisonnement appuyé sur un dossier). Document 1 (données fictives) : parmi des jeunes ayant commis une première infraction mineure, 45 % de ceux qui ont fait l'objet d'une procédure publique suivie d'une exclusion scolaire ont récidivé dans les deux ans, contre 20 % de ceux qui ont bénéficié d'une mesure éducative discrète sans exclusion. Document 2 : extrait de vos connaissances sur Becker et Goffman. Question : montrez que l'étiquetage peut contribuer à la déviance.",
              hint: "Exploitez d'abord le document par un calcul (écart en points et rapport), puis expliquez le mécanisme en mobilisant la carrière déviante et le stigmate. Pensez à une nuance sur la lecture du document.",
              solution: [
                "Introduction : pour Howard Becker, la déviance résulte d'une interaction : un acte devient déviant lorsqu'il est désigné et sanctionné comme tel. Cette désignation peut elle-même alimenter la déviance.",
                "Exploitation du document 1 : 45 % de récidive dans le premier cas contre 20 % dans le second, soit un écart de 25 points ; le taux est 45 ÷ 20 = 2,25 fois plus élevé quand le jeune a été publiquement désigné et exclu.",
                "Premier mécanisme, la transformation de l'identité : l'étiquette de délinquant devient un statut principal (Goffman parle de stigmate) ; le jeune est perçu avant tout comme délinquant et finit par se percevoir ainsi : c'est une prophétie autoréalisatrice.",
                "Deuxième mécanisme, la fermeture des groupes conformes : l'exclusion scolaire et la méfiance des anciens amis le privent de relations et d'opportunités légitimes.",
                "Troisième mécanisme, l'entrée dans un groupe déviant : rejeté, le jeune se tourne vers des pairs déviants qui lui offrent solidarité et justifications ; c'est la dernière étape de la carrière déviante selon Becker.",
                "Nuance : le document établit une corrélation ; les jeunes qui ont subi la procédure la plus lourde étaient peut-être déjà les plus engagés dans la délinquance. L'étiquetage contribue à la déviance sans en être la seule cause.",
                "Conclusion : en désignant publiquement et en excluant, le contrôle social peut enfermer dans une carrière déviante, ce qui justifie la priorité donnée aux mesures éducatives pour les mineurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la carrière déviante décrite par Howard Becker.",
            items: [
              "Commettre une première transgression, parfois sans intention",
              "Apprendre, au contact d'autres, les techniques et les justifications de la pratique",
              "Être pris et désigné publiquement comme déviant",
              "Voir son identité et ses relations transformées par l'étiquette",
              "Rejoindre un groupe déviant organisé qui consolide la carrière",
            ],
          },
          quiz: [
            {
              q: "Une remarque désapprobatrice d'un voisin relève du contrôle social :",
              options: ["formel", "informel", "judiciaire", "technique"],
              answer: 1,
              why: "Elle vient de l'entourage, sans règle écrite ni institution spécialisée.",
            },
            {
              q: "Pour Becker, la déviance est avant tout :",
              options: ["une qualité propre à l'acte lui-même", "le résultat d'un étiquetage", "un trouble de la personnalité de l'individu", "une conséquence automatique de la pauvreté"],
              answer: 1,
              why: "Elle naît de l'interaction entre celui qui transgresse et ceux qui le désignent comme déviant.",
            },
            {
              q: "Dans la typologie de Becker, un individu qui transgresse une norme sans être découvert est :",
              options: ["pleinement déviant", "faussement accusé", "conforme", "déviant secret"],
              answer: 3,
              why: "Il a transgressé la norme, mais personne ne l'a désigné comme déviant : il est secrètement déviant.",
            },
            {
              q: "Les entrepreneurs de morale sont, selon Becker :",
              options: ["ceux qui créent ou imposent des normes", "les dirigeants d'entreprises soucieux d'éthique", "les membres d'un groupe déviant organisé", "les seuls juges et policiers"],
              answer: 0,
              why: "Ce sont les créateurs de normes, qui mènent des croisades morales, et ceux qui les font appliquer.",
            },
            {
              q: "Selon Goffman, un stigmate est :",
              options: ["une sanction pénale prononcée par un tribunal", "une norme juridique écrite et codifiée", "un attribut qui discrédite la personne", "un groupe auquel on souhaite appartenir"],
              answer: 2,
              why: "Le stigmate jette un discrédit profond sur la personne et la réduit à cette caractéristique.",
            },
          ],
          trap: "Penser que l'étiquetage « excuse » la déviance ou nie l'existence des actes : Becker montre seulement qu'un acte ne devient déviant que lorsqu'il est désigné et sanctionné comme tel, et que cette désignation peut renforcer la déviance.",
          method: "Pour une question sur le contrôle social, précisez toujours qui contrôle (institution spécialisée ou entourage) et comment (règles écrites ou réactions diffuses). Pour l'étiquetage, citez Becker et décrivez un enchaînement précis : acte, désignation, effets sur l'identité, entrée dans un groupe.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'OPINION PUBLIQUE                                                     */
    /* ==================================================================== */
    {
      id: 'opinion-publique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-opinion',
          title: 'Comment l’opinion publique se forme',
          minutes: 30,
          objectives: [
            "Comprendre que l'opinion publique est une notion historiquement construite et un enjeu politique.",
            "Identifier les acteurs qui contribuent à la formation de l'opinion (médias, leaders d'opinion, partis, groupes d'intérêt) et ses formes d'expression.",
            "Comprendre les principaux mécanismes d'influence : effets limités et communication à deux étages, mise sur agenda, réseaux numériques.",
          ],
          course: [
            {
              heading: "Une notion historiquement construite",
              paragraphs: [
                "L'opinion publique désigne l'ensemble des jugements, attitudes et croyances partagés par une partie significative de la population sur des questions d'intérêt collectif, et exprimés publiquement. Elle se distingue des opinions individuelles, qui peuvent rester privées : l'opinion publique suppose un débat et une expression dans l'espace public.",
                "La notion prend son sens moderne au XVIIIe siècle, au temps des Lumières. Dans les salons, les cafés, les clubs et par la presse, un public éclairé, surtout bourgeois, discute des affaires publiques et critique le pouvoir royal. Le philosophe Jürgen Habermas (L'Espace public, 1962) a appelé ce lieu de discussion l'espace public bourgeois. L'opinion publique devient alors une instance au nom de laquelle on peut contester l'absolutisme. Elle reste cependant limitée à une élite instruite.",
                "Aux XIXe et XXe siècles, l'opinion publique s'élargit à l'ensemble de la population : suffrage universel masculin en 1848, droit de vote des femmes en 1944, scolarisation, presse populaire, puis radio et télévision. À partir des années 1930, les sondages prétendent la mesurer (voir la leçon suivante). Elle devient une référence centrale de la vie démocratique et un enjeu politique : les gouvernants affirment en tenir compte, les opposants l'invoquent, et chacun cherche à l'influencer.",
              ],
              box: { label: "Définition", text: "Opinion publique : ensemble des jugements et attitudes partagés par une partie significative de la population sur des questions d'intérêt collectif et exprimés publiquement. Notion née au XVIIIe siècle avec l'espace public (Habermas)." },
            },
            {
              heading: "Les acteurs et les formes d'expression",
              paragraphs: [
                "Les opinions se forment d'abord par la socialisation : la famille, l'école, le milieu social et les pairs transmettent des valeurs et des préférences politiques. Elles sont ensuite travaillées par de nombreux acteurs : les médias (presse, radio, télévision, sites d'information), qui sélectionnent et présentent l'information ; les partis politiques et les syndicats ; les groupes d'intérêt (associations, organisations professionnelles, organisations non gouvernementales) ; les intellectuels et personnalités ; le gouvernement lui-même, par sa communication.",
                "L'opinion publique s'exprime sous des formes variées : le vote, les manifestations, les pétitions (aujourd'hui souvent en ligne), les grèves, les prises de position sur les réseaux sociaux numériques, et les sondages. Chacune de ces formes fait entendre des fractions différentes de la population : les personnes qui manifestent ou signent des pétitions ne sont pas représentatives de l'ensemble des citoyens.",
              ],
              box: { label: "Repère", text: "Formes d'expression de l'opinion publique : vote, manifestations, pétitions, grèves, prises de position en ligne, sondages." },
            },
            {
              heading: "Les médias influencent-ils l'opinion ?",
              paragraphs: [
                "Dans l'entre-deux-guerres, face à l'essor de la propagande, on prête aux médias des effets très puissants : le message agirait directement sur des individus isolés et passifs. On parle du modèle de la seringue hypodermique, souvent associé aux travaux de Harold Lasswell sur la propagande.",
                "Paul Lazarsfeld, Bernard Berelson et Hazel Gaudet étudient l'élection présidentielle américaine de 1940 dans un comté de l'Ohio (The People's Choice, 1944). Ils montrent que les médias changent rarement les opinions : ils renforcent surtout des préférences déjà formées par l'appartenance sociale et l'entourage. L'influence passe par des leaders d'opinion, des personnes de l'entourage plus attentives à l'information, qui la relaient et l'interprètent pour les autres : c'est la communication à deux étages (médias, puis leaders d'opinion, puis entourage). Elihu Katz et Paul Lazarsfeld approfondissent cette idée dans Personal Influence (1955).",
                "Maxwell McCombs et Donald Shaw (1972) montrent que les médias exercent une influence d'une autre nature : la mise sur agenda. En choisissant les sujets dont ils parlent et la place qu'ils leur donnent, les médias ne disent pas tant au public quoi penser que ce à quoi penser, selon l'idée formulée par Bernard Cohen en 1963. Les médias influencent aussi par le cadrage, c'est-à-dire l'angle sous lequel un sujet est présenté.",
              ],
              box: { label: "Repère", text: "Trois modèles : effets forts (seringue hypodermique, années 1920-1930) ; effets limités et communication à deux étages (Lazarsfeld, 1944) ; mise sur agenda (McCombs et Shaw, 1972)." },
            },
            {
              heading: "Opinion publique et réseaux numériques",
              paragraphs: [
                "Avec les plateformes numériques, l'information circule de façon plus horizontale : chacun peut publier, commenter, partager. Les algorithmes de recommandation sélectionnent les contenus selon les préférences supposées des utilisateurs, ce qui peut les enfermer dans des bulles de filtre (expression d'Eli Pariser, 2011) et des chambres d'écho où ils ne rencontrent que des opinions proches des leurs. L'ampleur de cet enfermement est discutée : de nombreuses études montrent que beaucoup d'utilisateurs restent exposés à des sources variées.",
                "Les réseaux numériques facilitent aussi la diffusion de fausses informations et de nouvelles formes de mobilisation : le mouvement #MeToo en 2017 ou celui des Gilets jaunes en 2018 se sont largement organisés en ligne. Ces transformations posent la question de la régulation des plateformes (règlement européen sur les services numériques adopté en 2022) et de l'éducation aux médias.",
              ],
              box: { label: "À retenir", text: "Les réseaux numériques rendent la circulation de l'information plus horizontale, favorisent de nouvelles mobilisations, mais exposent aux bulles de filtre et aux fausses informations." },
            },
          ],
          keyPoints: [
            "L'opinion publique est l'ensemble des jugements partagés sur des questions d'intérêt collectif et exprimés publiquement.",
            "Elle naît au XVIIIe siècle dans l'espace public bourgeois (Habermas) et s'élargit avec le suffrage universel et les médias de masse.",
            "Elle s'exprime par le vote, les manifestations, les pétitions, les grèves, les réseaux numériques et les sondages.",
            "Lazarsfeld (1944) : effets limités des médias, qui renforcent surtout les opinions ; rôle des leaders d'opinion (communication à deux étages).",
            "McCombs et Shaw (1972) : la mise sur agenda, les médias hiérarchisent les sujets du débat.",
            "Les algorithmes peuvent créer des bulles de filtre ; l'opinion publique est un enjeu politique que de nombreux acteurs cherchent à influencer.",
          ],
          example: {
            statement: "Expliquez comment, selon le modèle de la communication à deux étages, une information diffusée à la télévision peut influencer le vote d'une personne qui ne l'a pas regardée.",
            solution: [
              "Rappel : Lazarsfeld, Berelson et Gaudet (The People's Choice, 1944) montrent que l'influence des médias n'est pas directe mais passe par des relais.",
              "Premier étage : un leader d'opinion, par exemple une collègue très attentive à l'actualité politique, regarde un débat télévisé.",
              "Elle sélectionne, interprète et commente cette information selon ses propres valeurs.",
              "Second étage : à la pause, elle en discute avec ses collègues, qui lui font confiance parce qu'elle est proche d'eux et jugée compétente.",
              "L'un d'eux, qui n'a pas regardé le débat, se forge une opinion à partir de ce qu'elle lui en dit et peut confirmer ou ajuster son choix électoral.",
              "Réponse : l'information passe des médias aux leaders d'opinion, puis de ceux-ci à leur entourage ; l'influence est indirecte et filtrée par les relations interpersonnelles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la notion illustrée par chaque situation (espace public, leader d'opinion, mise sur agenda, bulle de filtre) : (a) pendant des semaines, les journaux télévisés ouvrent sur l'insécurité, et l'insécurité devient la première préoccupation citée par les personnes interrogées ; (b) une syndicaliste respectée explique une réforme à ses collègues, qui adoptent son avis ; (c) un utilisateur d'une plateforme ne voit plus que des vidéos qui confirment ses idées ; (d) au XVIIIe siècle, des bourgeois débattent de la politique royale dans les cafés parisiens.",
              hint: "Demandez-vous à chaque fois qui influence qui, et par quel mécanisme : la hiérarchie des sujets, une personne relais, un algorithme ou un lieu de discussion.",
              solution: [
                "(a) Mise sur agenda : les médias, en hiérarchisant les sujets, influencent ce à quoi le public pense.",
                "(b) Leader d'opinion : la syndicaliste relaie et interprète l'information pour son entourage (communication à deux étages).",
                "(c) Bulle de filtre : l'algorithme de recommandation ne propose que des contenus conformes aux préférences de l'utilisateur.",
                "(d) Espace public : un public éclairé discute des affaires publiques et forme une opinion critique (Habermas).",
                "Résultat : (a) mise sur agenda ; (b) leader d'opinion ; (c) bulle de filtre ; (d) espace public.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Principale source d'information sur l'actualité, selon l'âge, en %. 18-24 ans : réseaux sociaux numériques 55, télévision 20, presse et sites d'information 15, radio 5, autre 5. 65 ans et plus : réseaux sociaux numériques 5, télévision 60, presse et sites d'information 15, radio 15, autre 5. (1) Présentez la donnée 55. (2) Comparez la place des réseaux sociaux numériques dans les deux groupes à l'aide d'un écart et d'un rapport. (3) Quelles conséquences ces différences peuvent-elles avoir sur la formation de l'opinion ?",
              hint: "L'écart s'exprime en points de pourcentage ; le rapport indique combien de fois plus. Pour la question 3, pensez à la mise sur agenda et aux algorithmes.",
              solution: [
                "(1) Selon ces données fictives, 55 % des 18-24 ans déclarent que les réseaux sociaux numériques sont leur principale source d'information sur l'actualité.",
                "(2) Écart : 55 - 5 = 50 points de pourcentage. Rapport : 55 ÷ 5 = 11. Les 18-24 ans citent onze fois plus souvent les réseaux sociaux numériques que les 65 ans et plus, qui privilégient la télévision (60 %).",
                "(3) Les deux groupes ne sont pas exposés aux mêmes sujets ni de la même manière : l'agenda des plus âgés est fixé surtout par les rédactions de télévision, celui des plus jeunes en partie par les algorithmes et leurs contacts.",
                "Les jeunes peuvent être davantage exposés aux bulles de filtre et aux fausses informations, mais aussi à une plus grande diversité de sources et à des formes de mobilisation en ligne.",
                "Résultat : écart de 50 points, rapport de 11 ; la formation de l'opinion passe par des canaux différents selon l'âge.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (mobilisation des connaissances). Montrez que les médias n'ont pas une influence directe et uniforme sur l'opinion publique.",
              hint: "Construisez une réponse en trois temps : la thèse des effets forts que l'on réfute, puis deux ou trois arguments appuyés sur des auteurs, avec un exemple pour chacun.",
              solution: [
                "Introduction : on a longtemps prêté aux médias un pouvoir direct sur des individus passifs (modèle de la seringue hypodermique). La sociologie a nuancé cette vision.",
                "Argument 1, les effets limités : Lazarsfeld, Berelson et Gaudet (1944) montrent que les médias renforcent surtout des opinions déjà formées par la socialisation et l'appartenance sociale. Chacun sélectionne les informations qui confirment ses convictions.",
                "Argument 2, la communication à deux étages : l'influence est indirecte, elle passe par des leaders d'opinion qui relaient et interprètent les messages pour leur entourage (Katz et Lazarsfeld, 1955). Elle dépend donc des réseaux de relations de chacun.",
                "Argument 3, une influence d'une autre nature : selon McCombs et Shaw (1972), les médias influencent moins ce que l'on pense que ce à quoi l'on pense, par la mise sur agenda et le cadrage des sujets.",
                "L'influence n'est pas uniforme : elle varie selon l'âge, le milieu social et les sources utilisées ; les réseaux numériques fragmentent l'audience et les algorithmes personnalisent l'information.",
                "Conclusion : les médias exercent une influence réelle mais indirecte, filtrée par la socialisation, l'entourage et la diversité des publics.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Comment se forme l'opinion publique.",
            statements: [
              { text: "L'opinion publique a toujours existé sous sa forme actuelle.", true: false, why: "C'est une construction historique, née au XVIIIe siècle et élargie ensuite." },
              { text: "Pour Habermas, l'espace public bourgeois naît au XVIIIe siècle dans les salons, les cafés et la presse.", true: true, why: "Un public éclairé y discute des affaires publiques et critique le pouvoir." },
              { text: "Selon The People's Choice (1944), les médias font facilement changer les électeurs d'avis.", true: false, why: "Ils renforcent surtout des opinions déjà formées : ce sont les effets limités." },
              { text: "Un leader d'opinion relaie et interprète l'information pour son entourage.", true: true, why: "C'est le second étage de la communication à deux étages." },
              { text: "La mise sur agenda signifie que les médias dictent ce qu'il faut penser.", true: false, why: "Ils influencent surtout ce à quoi l'on pense, en hiérarchisant les sujets." },
              { text: "Les algorithmes de recommandation peuvent enfermer un utilisateur dans des contenus qui confirment ses opinions.", true: true, why: "C'est l'idée de bulle de filtre, dont l'ampleur reste discutée." },
              { text: "Manifester ou signer une pétition sont des formes d'expression de l'opinion publique.", true: true, why: "À côté du vote et des sondages, ce sont des moyens de faire entendre une opinion." },
            ],
          },
          quiz: [
            {
              q: "L'espace public décrit par Habermas apparaît surtout :",
              options: ["au Moyen Âge, dans les monastères", "au XVIIIe siècle, dans les cafés", "au XXe siècle, avec la télévision"],
              answer: 1,
              why: "Il naît au siècle des Lumières dans les salons, les cafés et la presse.",
            },
            {
              q: "Le modèle de la communication à deux étages souligne le rôle :",
              options: ["des leaders d'opinion", "des instituts de sondage", "de la censure d'État", "des algorithmes"],
              answer: 0,
              why: "L'information passe des médias aux leaders d'opinion, qui la relaient auprès de leur entourage.",
            },
            {
              q: "La mise sur agenda (McCombs et Shaw) désigne la capacité des médias à :",
              options: ["imposer directement le choix électoral", "hiérarchiser les sujets du débat", "mesurer scientifiquement l'opinion", "censurer les partis d'opposition"],
              answer: 1,
              why: "En choisissant les sujets et leur importance, les médias orientent ce à quoi le public pense.",
            },
            {
              q: "Laquelle de ces pratiques n'est pas une forme d'expression de l'opinion publique ?",
              options: ["Une manifestation", "Une pétition", "Un vote", "Le recensement"],
              answer: 3,
              why: "Le recensement compte la population et décrit ses caractéristiques ; il ne recueille pas d'opinions.",
            },
            {
              q: "Lazarsfeld parle d'effets « limités » des médias car :",
              options: ["ils renforcent surtout des opinions déjà là", "la plupart des électeurs n'avaient accès à aucun média", "les journaux étaient soumis à une censure stricte", "ils ne parlaient jamais de politique"],
              answer: 0,
              why: "Les électeurs filtrent les messages selon leurs prédispositions sociales : les médias confirment plus qu'ils ne convertissent.",
            },
          ],
          trap: "Croire que les médias « fabriquent » directement l'opinion : la recherche montre des effets plus indirects (renforcement, mise sur agenda, rôle des leaders d'opinion) qui dépendent de la socialisation et de l'entourage des individus.",
          method: "Pour chaque théorie, retenez un trio : auteur et date, idée centrale en une phrase, exemple actuel. Dans une argumentation, présentez les modèles dans l'ordre historique (effets forts, effets limités, mise sur agenda, réseaux numériques) pour montrer l'évolution de la réflexion.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sondages',
          title: 'Les sondages d’opinion et leurs limites',
          minutes: 35,
          objectives: [
            "Comprendre les principes et les techniques des sondages : échantillon représentatif, méthode des quotas, marge d'erreur, redressement.",
            "Calculer et interpréter une marge d'erreur et un intervalle de confiance simples.",
            "Comprendre les débats relatifs à l'interprétation des sondages et à leur rôle dans la vie démocratique (effets sur le vote, critique de Pierre Bourdieu).",
          ],
          course: [
            {
              heading: "Comment fonctionne un sondage ?",
              paragraphs: [
                "Un sondage d'opinion est une enquête par questionnaire menée auprès d'un échantillon de personnes, afin d'estimer les opinions ou les intentions de l'ensemble d'une population, appelée population mère. L'élection présidentielle américaine de 1936 a marqué l'essor des sondages : le magazine Literary Digest, qui avait recueilli plus de deux millions de réponses auprès de ses lecteurs et de listes d'abonnés au téléphone et de propriétaires d'automobiles, plus aisés que la moyenne, annonçait la défaite de Franklin Roosevelt ; George Gallup, avec un échantillon bien plus petit mais mieux construit, prévoyait sa victoire. La qualité de l'échantillon compte plus que sa taille.",
                "En France, l'Ifop est fondé en 1938 par Jean Stoetzel, et en 1965 il annonce que le général de Gaulle sera mis en ballottage, ce qui se produit.",
                "L'échantillon doit être représentatif, c'est-à-dire reproduire en petit les caractéristiques de la population mère. Deux méthodes existent. La méthode aléatoire (ou probabiliste) tire au sort les personnes interrogées dans une liste complète de la population, chacune ayant la même chance d'être choisie. La méthode des quotas, la plus utilisée par les instituts français, construit un échantillon qui reproduit la structure de la population selon quelques critères (sexe, âge, profession, région, taille de la commune), connus grâce aux données de l'Insee. Les échantillons comptent souvent autour de 1 000 personnes, interrogées aujourd'hui surtout en ligne, mais aussi par téléphone ou en face à face.",
                "Les réponses brutes sont ensuite corrigées par un redressement : on pondère les réponses pour corriger les écarts entre l'échantillon et la population. Pour les intentions de vote, les instituts tiennent aussi compte du vote déclaré aux élections précédentes, afin de corriger la sous-déclaration de certains votes.",
              ],
              box: { label: "Définition", text: "Échantillon représentatif : sous-ensemble de la population mère qui en reproduit les caractéristiques, par tirage aléatoire ou par la méthode des quotas (respect de la structure de la population selon le sexe, l'âge, la profession, etc.)." },
            },
            {
              heading: "La marge d'erreur : un sondage n'est pas une mesure exacte",
              paragraphs: [
                "Le résultat d'un sondage est une estimation, entachée d'une marge d'erreur. Pour un échantillon aléatoire de n personnes, si une proportion p de l'échantillon donne une réponse, la vraie proportion dans la population se situe, avec 95 % de chances, dans l'intervalle de confiance p ± 1,96 × √(p × (1 - p) ÷ n). Pour 1 000 personnes et un résultat de 50 %, la marge d'erreur est d'environ ± 3,1 points. En ordre de grandeur, elle vaut à peu près 1 ÷ √n. Pour diviser la marge d'erreur par deux, il faut multiplier la taille de l'échantillon par quatre.",
                "Supposons qu'un sondage auprès de 1 000 personnes donne 52 % au candidat A et 48 % au candidat B. La marge d'erreur étant d'environ 3,1 points, A se situe entre 48,9 % et 55,1 % et B entre 44,9 % et 51,1 % : les deux intervalles se chevauchent, on ne peut donc pas conclure que A est en tête. Ce calcul n'est rigoureux que pour un échantillon aléatoire ; pour la méthode des quotas, les instituts utilisent cette formule comme approximation. La loi impose aujourd'hui de publier, avec chaque sondage électoral, une notice précisant notamment la taille de l'échantillon, les dates et les marges d'erreur.",
              ],
              box: { label: "Formule", text: "Intervalle de confiance à 95 % : p ± 1,96 × √(p × (1 - p) ÷ n), où p est la proportion observée et n la taille de l'échantillon. Pour n = 1 000 et p = 50 %, la marge est d'environ ± 3 points." },
            },
            {
              heading: "Des biais possibles",
              paragraphs: [
                "Au-delà de la marge d'erreur, plusieurs biais peuvent fausser un sondage. La formulation de la question influence les réponses : une question orientée ou un vocabulaire chargé oriente le répondant. L'ordre des questions compte aussi. L'effet de désirabilité sociale conduit certains répondants à donner la réponse qu'ils jugent socialement acceptable plutôt que leur opinion réelle. Les refus de répondre et les non-réponses, s'ils ne sont pas répartis au hasard, déforment l'échantillon.",
                "Un sondage est une photographie de l'opinion à un moment donné, pas une prédiction. En avril 2002, les sondages plaçaient Lionel Jospin au second tour de l'élection présidentielle ; c'est finalement Jean-Marie Le Pen qui s'est qualifié, avec un écart de moins d'un point. Les intentions de vote évoluent jusqu'au dernier moment, et une partie des électeurs se décide dans les derniers jours.",
              ],
              box: { label: "À retenir", text: "Un sondage est une photographie de l'opinion à un moment donné, entachée d'une marge d'erreur et de biais possibles (formulation, désirabilité sociale, non-réponses), et non une prédiction." },
            },
            {
              heading: "Les sondages dans la vie démocratique : débats",
              paragraphs: [
                "Les sondages pourraient influencer le vote. L'effet bandwagon (ou effet d'entraînement) pousse des électeurs à se rallier au candidat annoncé gagnant ; l'effet underdog pousse au contraire à soutenir le candidat donné perdant. Les sondages favorisent aussi le vote stratégique, dit vote utile. Les études empiriques montrent des effets limités et contradictoires. En France, la loi du 19 juillet 1977 a créé la Commission des sondages et encadré leur publication ; depuis une loi de 2002, la publication de sondages électoraux est interdite la veille et le jour du scrutin.",
                "Dans un exposé de 1972, publié en 1973 sous le titre « L'opinion publique n'existe pas », Pierre Bourdieu critique trois postulats implicites des sondages. Premier postulat : tout le monde peut avoir une opinion ; or les non-réponses sont socialement inégales, les moins diplômés répondant moins souvent aux questions politiques. Deuxième postulat : toutes les opinions se valent ; or certaines sont portées par des groupes mobilisés qui pèsent davantage. Troisième postulat : le simple fait de poser la même question à tous suppose un accord sur les questions qui méritent d'être posées ; or ce sont les commanditaires qui imposent la problématique. Pour Bourdieu, l'opinion publique mesurée par les sondages est donc un artefact et un instrument d'action politique.",
                "Les défenseurs des sondages soulignent qu'ils donnent la parole à des citoyens peu mobilisés et informent les décideurs entre deux élections. Le sociologue Patrick Champagne (Faire l'opinion, 1990) a analysé la manière dont les sondages sont devenus une ressource dans le jeu politique. L'enjeu est d'en faire un usage prudent et transparent.",
              ],
              box: { label: "Repère", text: "Les trois postulats critiqués par Bourdieu : tout le monde a une opinion ; toutes les opinions se valent ; il existe un accord sur les questions qui méritent d'être posées." },
            },
          ],
          keyPoints: [
            "Un sondage interroge un échantillon représentatif pour estimer l'opinion de la population mère ; la qualité de l'échantillon compte plus que sa taille.",
            "Méthode aléatoire (tirage au sort) ou méthode des quotas (structure de la population reproduite), suivie d'un redressement.",
            "Intervalle de confiance à 95 % : p ± 1,96 × √(p(1 - p) ÷ n) ; environ ± 3 points pour 1 000 personnes.",
            "Un sondage est une photographie, pas une prédiction ; biais possibles : formulation, désirabilité sociale, non-réponses.",
            "Effets bandwagon et underdog ; en France, publication interdite la veille et le jour du scrutin.",
            "Bourdieu (« L'opinion publique n'existe pas ») critique trois postulats des sondages.",
          ],
          example: {
            statement: "Un sondage réalisé auprès d'un échantillon aléatoire de 1 000 personnes indique que 30 % d'entre elles sont favorables à une réforme. Calculez la marge d'erreur à 95 % et l'intervalle de confiance, puis interprétez.",
            solution: [
              "On applique la formule : marge = 1,96 × √(p × (1 - p) ÷ n), avec p = 0,30 et n = 1 000.",
              "p × (1 - p) = 0,30 × 0,70 = 0,21 ; 0,21 ÷ 1 000 = 0,00021.",
              "√0,00021 ≈ 0,0145 ; 1,96 × 0,0145 ≈ 0,028, soit environ 2,8 points de pourcentage.",
              "Intervalle de confiance : 30 - 2,8 = 27,2 % et 30 + 2,8 = 32,8 %.",
              "Interprétation : on peut affirmer, avec 95 % de chances de ne pas se tromper, que la part des personnes favorables dans la population se situe entre 27,2 % et 32,8 %. Réponse : marge d'environ ± 2,8 points, intervalle [27,2 % ; 32,8 %].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Un institut veut interroger 1 200 personnes selon la méthode des quotas. Dans la population mère, il y a 52 % de femmes et 48 % d'hommes ; 25 % de 18-34 ans, 50 % de 35-64 ans et 25 % de 65 ans et plus. Calculez le nombre de personnes à interroger dans chaque catégorie de sexe, puis dans chaque tranche d'âge.",
              hint: "Multipliez la taille de l'échantillon par la part de chaque catégorie dans la population mère, puis vérifiez que la somme fait bien 1 200.",
              solution: [
                "Femmes : 1 200 × 0,52 = 624. Hommes : 1 200 × 0,48 = 576. Vérification : 624 + 576 = 1 200.",
                "18-34 ans : 1 200 × 0,25 = 300. 35-64 ans : 1 200 × 0,50 = 600. 65 ans et plus : 1 200 × 0,25 = 300. Vérification : 300 + 600 + 300 = 1 200.",
                "L'échantillon reproduit ainsi la structure de la population selon ces deux critères.",
                "Résultat : 624 femmes et 576 hommes ; 300, 600 et 300 personnes dans les trois tranches d'âge.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un sondage aléatoire auprès de 900 électeurs donne 40 % des intentions de vote au candidat A et 36 % au candidat B. (1) Calculez la marge d'erreur à 95 % et l'intervalle de confiance pour chaque candidat (arrondis au dixième). (2) Peut-on affirmer que A devance B dans la population ? (3) Quelle taille d'échantillon faudrait-il pour diviser par deux la marge d'erreur de A ?",
              hint: "Appliquez 1,96 × √(p × (1 - p) ÷ n) pour chaque candidat. Comparez ensuite les intervalles : s'ils se chevauchent, on ne peut pas conclure.",
              solution: [
                "(1) Candidat A : 0,40 × 0,60 = 0,24 ; 0,24 ÷ 900 ≈ 0,000267 ; √0,000267 ≈ 0,0163 ; 1,96 × 0,0163 ≈ 0,032, soit ± 3,2 points. Intervalle : [36,8 % ; 43,2 %].",
                "Candidat B : 0,36 × 0,64 = 0,2304 ; 0,2304 ÷ 900 = 0,000256 ; √0,000256 = 0,016 ; 1,96 × 0,016 ≈ 0,031, soit ± 3,1 points. Intervalle : [32,9 % ; 39,1 %].",
                "(2) Les intervalles se chevauchent entre 36,8 % et 39,1 % : on ne peut pas affirmer, au seuil de 95 %, que A devance B dans la population.",
                "(3) La marge varie comme 1 ÷ √n : pour la diviser par deux, il faut multiplier n par 4, soit 900 × 4 = 3 600 personnes. Vérification : 1,96 × √(0,24 ÷ 3 600) ≈ 1,96 × 0,00816 ≈ 0,016, soit ± 1,6 point.",
                "Résultat : A entre 36,8 % et 43,2 %, B entre 32,9 % et 39,1 % ; pas de conclusion possible ; 3 600 personnes pour une marge de ± 1,6 point.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style de l'épreuve composée (étude d'un document). Document (données fictives) : sondage aléatoire réalisé auprès de 1 000 personnes inscrites sur les listes électorales, à un mois d'une élection. 820 ont exprimé une intention de vote, 180 n'ont pas répondu. Parmi les 820 : candidat A 27 %, candidat B 25 %, candidat C 18 %, candidat D 30 %. Questions : (1) Combien de personnes de l'échantillon ont déclaré vouloir voter pour D ? (2) Calculez l'intervalle de confiance à 95 % pour D et pour A (n = 820, arrondis au dixième). (3) Peut-on affirmer que D arrivera en tête ? (4) En vous appuyant sur Pierre Bourdieu, discutez la place des 180 non-réponses.",
              hint: "Pour (2), utilisez n = 820, car les pourcentages portent sur les personnes ayant exprimé une intention. Pour (4), rappelez le premier postulat critiqué par Bourdieu.",
              solution: [
                "(1) 820 × 0,30 = 246 personnes ont déclaré vouloir voter pour D.",
                "(2) Pour D : 0,30 × 0,70 = 0,21 ; 0,21 ÷ 820 ≈ 0,000256 ; √0,000256 ≈ 0,0160 ; 1,96 × 0,0160 ≈ 0,031, soit ± 3,1 points. Intervalle : [26,9 % ; 33,1 %].",
                "Pour A : 0,27 × 0,73 = 0,1971 ; 0,1971 ÷ 820 ≈ 0,000240 ; √0,000240 ≈ 0,0155 ; 1,96 × 0,0155 ≈ 0,030, soit ± 3,0 points. Intervalle : [24,0 % ; 30,0 %].",
                "(3) Non : les intervalles de D et de A se chevauchent (entre 26,9 % et 30,0 %). De plus, un sondage réalisé un mois avant l'élection est une photographie à ce moment-là, et 18 % des personnes interrogées n'ont pas exprimé d'intention : l'ordre peut changer.",
                "(4) Les 180 non-réponses représentent 180 ÷ 1 000 = 18 % de l'échantillon. Bourdieu critique le postulat selon lequel tout le monde aurait une opinion : en ne calculant les résultats que sur les réponses exprimées, on fait disparaître ceux qui ne se prononcent pas.",
                "Or ces non-réponses ne sont pas réparties au hasard : selon Bourdieu, elles sont plus fréquentes parmi les moins diplômés et les catégories populaires, qui se sentent moins légitimes pour répondre aux questions politiques. Le sondage donne alors un poids excessif aux opinions des groupes les plus politisés.",
                "Conclusion : 246 personnes ; D entre 26,9 % et 33,1 %, A entre 24,0 % et 30,0 % ; on ne peut pas affirmer que D arrivera en tête, et la forte part de non-réponses invite à interpréter ce sondage avec prudence.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Population mère", right: "Ensemble de la population que l'on veut étudier" },
              { left: "Méthode des quotas", right: "Reproduire dans l'échantillon la structure de la population (sexe, âge, profession)" },
              { left: "Marge d'erreur", right: "Écart possible entre le résultat du sondage et la valeur réelle dans la population" },
              { left: "Redressement", right: "Pondération des réponses pour corriger les écarts de l'échantillon" },
              { left: "Effet bandwagon", right: "Ralliement d'électeurs au candidat annoncé gagnant" },
              { left: "Effet underdog", right: "Soutien accru au candidat annoncé perdant" },
            ],
          },
          quiz: [
            {
              q: "En France, la méthode d'échantillonnage la plus utilisée par les instituts de sondage est :",
              options: ["le tirage aléatoire intégral", "la méthode des quotas", "le recensement exhaustif", "l'appel au volontariat"],
              answer: 1,
              why: "Les instituts français reproduisent la structure de la population selon quelques critères connus grâce à l'Insee.",
            },
            {
              q: "Pour un échantillon aléatoire de 1 000 personnes et un résultat proche de 50 %, la marge d'erreur à 95 % est d'environ :",
              options: ["± 0,5 point", "± 1 point", "± 3 points", "± 10 points"],
              answer: 2,
              why: "1,96 × √(0,5 × 0,5 ÷ 1 000) ≈ 0,031, soit environ 3 points.",
            },
            {
              q: "Pour diviser la marge d'erreur par deux, il faut :",
              options: ["doubler la taille de l'échantillon", "diviser par deux le nombre de questions", "quadrupler l'échantillon"],
              answer: 2,
              why: "La marge d'erreur varie comme 1 ÷ √n : multiplier n par 4 divise la marge par √4 = 2.",
            },
            {
              q: "Selon Bourdieu, l'un des postulats implicites des sondages est que :",
              options: ["les sondages se trompent toujours", "seuls les experts ont une opinion", "l'opinion ne change jamais", "chacun a une opinion sur tout"],
              answer: 3,
              why: "Bourdieu critique l'idée que tout le monde peut avoir une opinion, alors que les non-réponses sont socialement inégales.",
            },
            {
              q: "En France, la loi interdit la publication de sondages électoraux :",
              options: ["pendant toute la durée de la campagne", "la veille et le jour du scrutin", "le mois précédant le scrutin", "dans la presse écrite"],
              answer: 1,
              why: "Depuis 2002, l'interdiction porte sur la veille et le jour du vote ; auparavant, elle couvrait la semaine précédant le scrutin.",
            },
          ],
          trap: "Lire un sondage comme une prédiction exacte : un écart de deux ou trois points entre deux candidats, sur un échantillon d'environ 1 000 personnes, se situe dans la marge d'erreur et ne permet pas de conclure. Un sondage est une photographie de l'opinion à un moment donné.",
          method: "Devant un sondage, lisez d'abord la notice : taille et mode de constitution de l'échantillon, dates, formulation exacte des questions, part des non-réponses. Calculez ensuite les intervalles de confiance avant de comparer deux résultats.",
        },
      ],
    },
  ],
}
