import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'emc-tle',
  chapters: [
    /* ==================================================================== */
    /* LA CULTURE DU DÉBAT ET L'ÉTHIQUE DE LA DISCUSSION                     */
    /* ==================================================================== */
    {
      id: 'culture-du-debat',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'debattre-en-democratie',
          title: 'Pourquoi débattre en démocratie ?',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi le débat est au fondement de la vie démocratique.",
            "Identifier les principes juridiques qui garantissent la liberté d'expression et le pluralisme.",
            "Distinguer le débat démocratique, la polémique et le consensus de façade.",
            "Analyser les limites que la loi fixe à la liberté d'expression.",
          ],
          course: [
            {
              heading: "La démocratie, un régime de la discussion",
              paragraphs: [
                "La démocratie ne se réduit pas au vote. Elle suppose que des citoyens égaux en droits puissent confronter leurs opinions sur les affaires communes avant de décider. Le désaccord n'y est pas une anomalie : c'est la matière même de la vie politique. Là où un régime autoritaire impose une vérité officielle et traite l'opposant en ennemi, la démocratie organise le conflit des idées de façon pacifique : on s'affronte par des arguments et par des bulletins de vote, non par la force.",
                "Le philosophe Claude Lefort (1924-2010) a décrit la démocratie moderne comme une société qui accepte de ne pas reposer sur un fondement indiscutable : le pouvoir n'appartient en propre à personne, il est exercé pour un temps par ceux que les citoyens désignent, et ses décisions restent discutables. Le débat y est donc permanent, parce qu'aucune décision n'est définitive et qu'une majorité d'aujourd'hui peut devenir la minorité de demain.",
              ],
              box: { label: "Définition", text: "Le débat démocratique est la confrontation publique et argumentée d'opinions différentes sur une question d'intérêt général, menée entre égaux et selon des règles communes, en vue d'éclairer une décision collective." },
            },
            {
              heading: "Pourquoi débattre ? Trois raisons",
              paragraphs: [
                "Une raison de connaissance d'abord : personne ne détient seul toute la vérité sur des questions complexes comme le climat, la santé ou l'éducation. Dans De la liberté (1859), le philosophe anglais John Stuart Mill soutient que faire taire une opinion est toujours une perte : si elle est vraie, on se prive d'une vérité ; si elle est fausse, on perd l'occasion de mieux comprendre pourquoi la vérité est vraie ; le plus souvent, chaque opinion contient une part de vérité que la confrontation fait apparaître.",
                "Une raison de légitimité ensuite : une décision discutée publiquement, où chacun a pu faire valoir ses arguments, est plus facilement acceptée, y compris par ceux qui ne l'ont pas emporté. Une raison d'égalité enfin : débattre, c'est reconnaître l'autre comme un égal capable de raisonner, dont l'avis compte, et non comme un sujet à qui l'on impose une décision.",
              ],
              box: { label: "À retenir", text: "Débattre sert à mieux connaître (confronter les points de vue), à mieux décider (une décision discutée est plus légitime) et à reconnaître chacun comme un citoyen égal." },
            },
            {
              heading: "Les garanties : liberté d'expression et pluralisme",
              paragraphs: [
                "La Déclaration des droits de l'homme et du citoyen du 26 août 1789 protège la liberté d'opinion, « même religieuse » (article 10), et fait de la libre communication des pensées et des opinions « un des droits les plus précieux de l'Homme » (article 11) : tout citoyen peut parler, écrire et imprimer librement, sauf à répondre de l'abus de cette liberté dans les cas déterminés par la loi. La Convention européenne des droits de l'homme (1950) garantit aussi la liberté d'expression dans son article 10.",
                "Le pluralisme est l'existence et la libre expression de courants d'idées et d'opinions différents. L'article 4 de la Constitution de 1958 dispose que les partis se forment et exercent leur activité librement et, depuis la révision de 2008, que la loi garantit les expressions pluralistes des opinions. Le Conseil constitutionnel a fait du pluralisme des courants d'expression un objectif de valeur constitutionnelle : c'est ce qui justifie, par exemple, les règles sur l'égalité des temps de parole des candidats dans les médias audiovisuels pendant les campagnes électorales.",
              ],
              box: { label: "Repère", text: "1789 : DDHC, articles 10 et 11 (liberté d'opinion et d'expression). 1881 : loi sur la liberté de la presse. 1958 : article 4 de la Constitution (partis politiques), complété en 2008 (pluralisme)." },
            },
            {
              heading: "Les limites fixées par la loi",
              paragraphs: [
                "La liberté d'expression n'est pas absolue. La loi du 29 juillet 1881 sur la liberté de la presse, toujours en vigueur, punit notamment la diffamation (imputer à une personne un fait précis qui porte atteinte à son honneur), l'injure (une expression outrageante qui ne renferme l'imputation d'aucun fait), la provocation à la haine, à la violence ou à la discrimination envers des personnes en raison de leur origine, de leur religion, de leur sexe, de leur orientation sexuelle ou de leur handicap, et l'apologie de crimes. La loi Gayssot du 13 juillet 1990 réprime la contestation des crimes contre l'humanité jugés par le tribunal de Nuremberg.",
                "Ces limites ne visent pas les opinions dérangeantes ou minoritaires. Depuis l'arrêt Handyside contre Royaume-Uni (1976), la Cour européenne des droits de l'homme rappelle que la liberté d'expression vaut aussi pour les idées qui heurtent, choquent ou inquiètent. Ce que la loi exclut, ce sont les propos qui portent atteinte aux personnes ou qui détruisent la condition même du débat : l'égale dignité de ceux qui y participent. En France, il n'existe pas de censure préalable : c'est le juge qui sanctionne les abus, après coup.",
              ],
              box: { label: "Règle", text: "La liberté d'expression est la règle, la restriction l'exception : aucune autorisation préalable, mais une responsabilité devant le juge pour les abus définis par la loi (diffamation, injure, provocation à la haine ou à la violence, apologie de crimes)." },
            },
            {
              heading: "Débat, polémique et consensus de façade",
              paragraphs: [
                "Tout échange d'opinions n'est pas un débat. La polémique (du grec polemos, la guerre) cherche à disqualifier l'adversaire plus qu'à examiner la question ; le clash médiatique vise le spectacle et l'audience. À l'opposé, le consensus de façade évite les sujets qui fâchent sans résoudre les désaccords. Le débat démocratique se situe entre les deux : il assume le désaccord, mais il le soumet à des arguments vérifiables et à des règles partagées (temps de parole, respect des personnes, droit de réponse).",
              ],
            },
          ],
          keyPoints: [
            "La démocratie organise pacifiquement le désaccord : on s'affronte par des arguments et par le vote, non par la force.",
            "Débattre sert à mieux connaître, à rendre les décisions plus légitimes et à reconnaître chacun comme un égal.",
            "DDHC de 1789 : liberté d'opinion (article 10) et libre communication des pensées (article 11), sauf abus déterminé par la loi.",
            "Le pluralisme, mentionné à l'article 4 de la Constitution depuis 2008, est un objectif de valeur constitutionnelle.",
            "La loi de 1881 punit diffamation, injure et provocation à la haine : des limites sanctionnées par le juge, sans censure préalable.",
            "Le débat se distingue de la polémique (disqualifier l'adversaire) et du consensus de façade (éviter le désaccord).",
          ],
          example: {
            statement: "Un élève affirme : « En démocratie, on doit pouvoir tout dire, sinon ce n'est plus la liberté d'expression. » Discutez cette affirmation en vous appuyant sur le droit français.",
            solution: [
              "Reconnaître ce qui est juste : la liberté d'expression est un principe fondamental (DDHC, articles 10 et 11) et elle protège aussi les opinions minoritaires ou choquantes, comme le rappelle la Cour européenne des droits de l'homme depuis l'arrêt Handyside (1976).",
              "Repérer la confusion : « tout dire » suppose une liberté sans limite. Or l'article 11 de la DDHC précise lui-même que chacun doit répondre de l'abus de cette liberté dans les cas déterminés par la loi.",
              "Citer les limites : la loi du 29 juillet 1881 punit la diffamation, l'injure, la provocation à la haine ou à la violence ; la loi Gayssot de 1990 réprime la contestation des crimes contre l'humanité.",
              "Expliquer le sens de ces limites : elles protègent les personnes et l'égale dignité des participants, qui est la condition d'un débat libre ; elles ne visent pas une opinion parce qu'elle déplaît.",
              "Préciser le mécanisme : il n'y a pas de censure préalable ; c'est le juge qui sanctionne après coup, selon la loi.",
              "Conclusion : en démocratie, on peut dire beaucoup, y compris ce qui dérange, mais pas tout. La liberté d'expression est encadrée par la loi pour que le débat reste possible entre égaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque situation dans l'une des trois catégories suivantes : débat démocratique, polémique, propos puni par la loi. a) Deux candidats aux élections municipales comparent leurs projets de transport lors d'une réunion publique, avec le même temps de parole. b) Sur un plateau de télévision, un invité coupe sans cesse son contradicteur et répète qu'il « ne comprend rien », sans jamais répondre à ses arguments. c) Un message publié sur un réseau social appelle à la violence contre les fidèles d'une religion. d) Une tribune publiée dans un journal critique sévèrement une réforme du gouvernement.",
              hint: "Demandez-vous à chaque fois si des arguments sont échangés sur la question, si l'on cherche surtout à disqualifier une personne, et si le propos entre dans les abus définis par la loi de 1881.",
              solution: [
                "a) Débat démocratique : les participants sont à égalité, ils échangent des propositions argumentées sur une question d'intérêt général.",
                "b) Polémique : l'invité vise la personne de son contradicteur et non ses idées ; ce comportement n'est pas puni par la loi, mais il ne fait pas avancer la discussion.",
                "c) Propos puni par la loi : la provocation à la violence envers des personnes en raison de leur religion est un délit prévu par la loi du 29 juillet 1881.",
                "d) Débat démocratique : la critique d'une politique publique, même sévère, fait partie de la liberté d'expression et du pluralisme.",
                "Résultat : a et d relèvent du débat démocratique, b de la polémique, c d'un propos puni par la loi.",
              ],
            },
            {
              level: 2,
              statement: "Le conseil des délégués pour la vie lycéenne doit se prononcer sur une proposition : interdire les téléphones au foyer des élèves. Le président de séance propose de voter immédiatement, sans discussion, « pour gagner du temps ». En vous appuyant sur les trois raisons de débattre vues dans le cours, rédigez une réponse argumentée à cette proposition.",
              hint: "Reprenez une à une la raison de connaissance, la raison de légitimité et la raison d'égalité, et appliquez chacune à la situation du foyer.",
              solution: [
                "Raison de connaissance : sans discussion, les élus ne partagent pas les informations utiles (usages réels du téléphone au foyer, difficultés constatées, solutions intermédiaires comme des zones ou des horaires sans téléphone).",
                "Raison de légitimité : une règle votée sans débat sera moins bien acceptée par les élèves qui la subiront ; un échange préalable permet à chacun de voir que ses arguments ont été entendus, même s'il perd le vote.",
                "Raison d'égalité : chaque délégué représente des camarades ; lui refuser la parole revient à traiter son avis comme négligeable.",
                "On peut ajouter l'argument de Mill : même une position qui paraît mauvaise oblige les autres à préciser leurs raisons, ce qui améliore la décision finale.",
                "Proposition constructive : un débat court mais organisé (tour de parole, temps limité, synthèse des arguments) concilie l'efficacité et la qualité de la décision.",
                "Conclusion : gagner du temps en supprimant le débat ferait perdre en qualité et en légitimité ; mieux vaut un débat bref et réglé, suivi du vote.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Pour garantir des échanges apaisés, une grande plateforme annonce qu'elle supprimera automatiquement tous les messages que son algorithme jugera trop polémiques, y compris les critiques virulentes de responsables politiques. » Question : en vous appuyant sur le document et sur vos connaissances, montrez que cette mesure pose problème au regard des principes du débat démocratique, puis indiquez quelles limites à la liberté d'expression restent légitimes.",
              hint: "Distinguez la critique virulente, protégée même quand elle choque, et les abus définis par la loi. Demandez-vous aussi qui décide, et selon quel critère.",
              solution: [
                "Introduction : la plateforme veut apaiser les échanges, mais sa mesure pose la question de l'équilibre entre ordre du débat et liberté d'expression.",
                "Premier problème : la critique, même virulente, des responsables politiques est protégée. La Cour européenne des droits de l'homme juge depuis l'arrêt Handyside (1976) que la liberté d'expression vaut aussi pour les idées qui heurtent ou choquent ; les limites admises pour la critique des responsables politiques sont même plus larges que pour les simples particuliers.",
                "Deuxième problème : le critère « trop polémique » est vague, et c'est un algorithme privé qui l'applique, sans juge ni débat contradictoire. Le risque est d'appauvrir le pluralisme et de pousser les utilisateurs à l'autocensure.",
                "Limites légitimes : la loi du 29 juillet 1881 définit des abus précis (diffamation, injure, provocation à la haine ou à la violence, apologie de crimes) ; la loi Gayssot de 1990 réprime la contestation des crimes contre l'humanité. Les plateformes doivent retirer les contenus manifestement illicites qui leur sont signalés, et le règlement européen sur les services numériques (DSA) encadre ces procédures.",
                "Synthèse : ce qui est légitime, c'est de retirer des contenus illicites définis par la loi, avec des recours possibles ; ce qui pose problème, c'est de supprimer des opinions parce qu'elles dérangent.",
                "Conclusion : la mesure confond l'apaisement du débat avec sa suppression ; un débat démocratique accepte la vivacité des critiques et ne sanctionne que les abus prévus par la loi.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : liberté d'expression et débat démocratique.",
            statements: [
              { text: "En France, un journal doit faire valider ses articles par l'État avant de les publier.", true: false, why: "Il n'y a pas de censure préalable : depuis la loi de 1881, les abus sont sanctionnés après coup par le juge." },
              { text: "La DDHC fait de la libre communication des pensées et des opinions un des droits les plus précieux de l'Homme.", true: true, why: "C'est l'article 11 de la Déclaration de 1789." },
              { text: "La liberté d'expression ne protège que les opinions qui ne choquent personne.", true: false, why: "La Cour européenne des droits de l'homme protège aussi les idées qui heurtent, choquent ou inquiètent (arrêt Handyside, 1976)." },
              { text: "La diffamation consiste à imputer à une personne un fait précis qui porte atteinte à son honneur.", true: true, why: "C'est la définition de la loi du 29 juillet 1881 ; l'injure, elle, ne contient l'imputation d'aucun fait." },
              { text: "Le pluralisme signifie que tous les citoyens doivent finir par partager la même opinion.", true: false, why: "Le pluralisme est au contraire la coexistence et la libre expression d'opinions différentes." },
              { text: "Dans une démocratie, le désaccord est le signe d'un mauvais fonctionnement.", true: false, why: "Le désaccord est normal : la démocratie l'organise pacifiquement par le débat et le vote." },
              { text: "La provocation à la haine envers des personnes en raison de leur religion est punie par la loi.", true: true, why: "La loi de 1881 réprime la provocation à la haine, à la violence ou à la discrimination pour ce motif." },
            ],
          },
          quiz: [
            {
              q: "Quel article de la Déclaration de 1789 protège la libre communication des pensées et des opinions ?",
              options: ["L'article 1er", "L'article 6", "L'article 11", "L'article 17"],
              answer: 2,
              why: "L'article 11 en fait « un des droits les plus précieux de l'Homme », sauf à répondre de ses abus dans les cas prévus par la loi.",
            },
            {
              q: "Quelle loi, toujours en vigueur, encadre la liberté de la presse en France ?",
              options: ["La loi du 9 décembre 1905 sur la laïcité", "La loi du 29 juillet 1881", "La loi du 1er juillet 1901 sur les associations", "La loi Gayssot du 13 juillet 1990"],
              answer: 1,
              why: "La loi du 29 juillet 1881 proclame la liberté de la presse et définit ses abus : diffamation, injure, provocation à la haine.",
            },
            {
              q: "Qu'est-ce que le pluralisme ?",
              options: ["La libre expression de courants d'opinion différents", "L'obligation pour chaque parti de présenter des candidats partout", "La règle selon laquelle la majorité décide toujours seule de tout", "Le contrôle de tous les médias par une autorité publique"],
              answer: 0,
              why: "Le pluralisme est la coexistence et la libre expression d'opinions différentes ; c'est un objectif de valeur constitutionnelle.",
            },
            {
              q: "Selon John Stuart Mill, pourquoi ne faut-il pas faire taire une opinion même fausse ?",
              options: ["Parce que toutes les opinions se valent", "Parce que la loi interdit en toutes circonstances de limiter l'expression publique", "Parce que la majorité a toujours raison", "Parce que la contredire aide à mieux comprendre la vérité"],
              answer: 3,
              why: "Pour Mill, même une opinion fausse oblige à justifier la vérité, qui sinon devient un préjugé que l'on répète sans le comprendre.",
            },
            {
              q: "Qui sanctionne, en France, les abus de la liberté d'expression ?",
              options: ["Le gouvernement, avant la publication", "Le juge, après coup, selon la loi", "Le Conseil constitutionnel, saisi pour chaque article publié", "Les plateformes numériques, seules et sans recours"],
              answer: 1,
              why: "Il n'existe pas de censure préalable : le juge sanctionne a posteriori les abus définis par la loi.",
            },
          ],
          trap: "Confondre liberté d'expression et absence de limites, ou croire à l'inverse qu'une opinion choquante est interdite : la loi ne sanctionne pas une idée parce qu'elle dérange, mais des abus précis comme la diffamation, l'injure ou la provocation à la haine.",
          method: "Pour toute question sur la liberté d'expression, construisez votre réponse en deux temps : le principe (DDHC, articles 10 et 11, pluralisme), puis les limites légales (loi de 1881), et terminez en expliquant pourquoi ces limites protègent le débat lui-même.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ethique-de-la-discussion',
          title: 'L\'éthique de la discussion : argumenter, écouter, respecter',
          minutes: 30,
          objectives: [
            "Définir l'éthique de la discussion et ses conditions selon Jürgen Habermas.",
            "Construire un argument et le distinguer d'une simple affirmation.",
            "Identifier les principaux sophismes qui faussent un débat.",
            "Pratiquer l'écoute active et la reformulation dans un débat argumenté.",
          ],
          course: [
            {
              heading: "Une éthique pour la discussion : Habermas",
              paragraphs: [
                "Le philosophe allemand Jürgen Habermas, né en 1929, a développé une éthique de la discussion, notamment dans Morale et communication (1983). Son idée centrale : une norme n'est valable que si toutes les personnes concernées pourraient l'approuver au terme d'une discussion libre et rationnelle. La justesse d'une règle ne vient ni de la tradition ni de l'autorité de celui qui l'énonce, mais de l'accord que des participants égaux peuvent atteindre en échangeant des raisons.",
                "Pour cela, la discussion doit tendre vers des conditions idéales, jamais parfaitement réalisées mais qui servent de boussole : toute personne concernée peut y participer ; chacun peut proposer, questionner ou contester n'importe quelle affirmation ; chacun s'exprime sincèrement ; aucune contrainte (menace, pression, manipulation) n'empêche quelqu'un de faire valoir ses arguments. Dans ces conditions, seule doit compter ce que Habermas appelle la force sans contrainte du meilleur argument.",
              ],
              box: { label: "Définition", text: "L'éthique de la discussion est l'ensemble des règles qui permettent à des interlocuteurs égaux de rechercher un accord par l'échange de raisons, sans contrainte ni manipulation : seule compte la force du meilleur argument." },
            },
            {
              heading: "Argumenter : affirmer ne suffit pas",
              paragraphs: [
                "Un argument relie une thèse (ce que l'on soutient) à une raison (ce qui la justifie), souvent appuyée par un exemple ou une donnée vérifiable. « Il faut développer les transports en commun » est une thèse ; « parce que les transports sont le premier secteur émetteur de gaz à effet de serre en France » est une raison ; une statistique sourcée de l'inventaire national des émissions en serait l'appui.",
                "Argumenter, c'est aussi anticiper les objections et y répondre, par exemple par une concession suivie d'une réfutation : « Certes, la voiture reste indispensable dans certaines zones rurales, mais en ville des solutions existent. » On distingue convaincre, qui s'adresse à la raison par des arguments que chacun peut examiner, et persuader, qui agit sur les émotions. Aristote, dans sa Rhétorique, distingue trois moyens de produire l'adhésion : le logos (les arguments), l'ethos (la crédibilité de l'orateur) et le pathos (les émotions du public). L'éthique de la discussion n'interdit pas l'émotion, mais elle refuse qu'elle remplace les raisons.",
              ],
              box: { label: "Repère", text: "Thèse : ce que je soutiens. Argument : la raison qui la justifie. Exemple : le cas concret qui l'illustre. Objection : l'argument adverse, auquel je réponds par une concession (« certes ») puis une réfutation (« mais »)." },
            },
            {
              heading: "Les sophismes : quand l'argument triche",
              paragraphs: [
                "Un sophisme est un raisonnement qui a l'apparence de la validité sans l'être. Les plus fréquents sont l'attaque personnelle (ad hominem), qui critique la personne au lieu de son argument ; l'homme de paille, qui déforme la thèse adverse pour la réfuter plus facilement ; la généralisation hâtive, qui tire une règle d'un ou deux cas ; le faux dilemme, qui présente deux options comme les seules possibles ; l'appel à la popularité, qui tient une idée pour vraie parce que beaucoup y croient ; la pente glissante, qui annonce sans preuve une suite de conséquences catastrophiques.",
                "Repérer ces procédés ne sert pas à humilier l'adversaire, mais à ramener la discussion vers la question posée. On peut le faire calmement : « Vous critiquez mon âge, mais que répondez-vous à mon argument ? » ou « Ce n'est pas ce que j'ai dit : ma position est plus précise. » On doit aussi les traquer dans ses propres raisonnements, car chacun y recourt parfois sans s'en rendre compte.",
              ],
            },
            {
              heading: "Écouter et respecter : une relation entre égaux",
              paragraphs: [
                "Débattre suppose d'écouter vraiment. L'écoute active consiste à laisser l'autre aller au bout de sa pensée, puis à la reformuler (« Si je vous comprends bien, vous pensez que... ») avant d'y répondre. La reformulation vérifie que l'on critique la position réelle de l'autre, et non une caricature ; elle montre aussi qu'on le prend au sérieux, ce qui apaise l'échange.",
                "Respecter ne signifie pas approuver : on peut rejeter fermement une idée tout en respectant la personne qui la défend. La tolérance, que Voltaire défendait dans son Traité sur la tolérance (1763) après l'affaire Calas, consiste à accepter l'existence d'opinions et de croyances différentes des siennes. Elle trouve sa limite dans ce qui nie la dignité d'autrui : on ne peut pas débattre à égalité avec celui qui refuse à d'autres le droit d'être des interlocuteurs.",
              ],
              box: { label: "Règle", text: "Demander la parole et respecter le temps de chacun ; critiquer les idées, jamais les personnes ; reformuler avant de réfuter ; appuyer ses affirmations sur des faits vérifiables ; accepter de changer d'avis devant un meilleur argument." },
            },
          ],
          keyPoints: [
            "Habermas : une norme est valable si toutes les personnes concernées pourraient l'approuver au terme d'une discussion libre.",
            "Conditions : participation de tous, liberté de questionner, sincérité, absence de contrainte ; seule compte la force du meilleur argument.",
            "Un argument relie une thèse à une raison appuyée par un exemple ; on répond aux objections par une concession puis une réfutation.",
            "Convaincre s'adresse à la raison (logos) ; persuader joue sur les émotions (pathos) et l'image de l'orateur (ethos).",
            "Sophismes : attaque personnelle, homme de paille, généralisation hâtive, faux dilemme, appel à la popularité, pente glissante.",
            "Écoute active : reformuler avant de répondre. Respecter la personne n'oblige pas à approuver ses idées.",
          ],
          example: {
            statement: "Dans un débat sur l'interdiction des voitures en centre-ville, Léa déclare : « Les partisans de cette mesure veulent qu'on retourne à l'âge de pierre et qu'on se déplace tous à pied ! » Identifiez le procédé utilisé et proposez une réponse conforme à l'éthique de la discussion.",
            solution: [
              "Rappeler la thèse réelle des partisans : réduire ou interdire la circulation automobile dans une zone précise, en développant d'autres moyens de déplacement (transports en commun, vélo, marche).",
              "Comparer avec ce qu'en dit Léa : elle la transforme en refus de tout progrès et en obligation de marcher partout, position que personne ne défend.",
              "Nommer le procédé : c'est un homme de paille, qui déforme la thèse adverse pour la rendre absurde et la réfuter facilement ; l'image de « l'âge de pierre » y ajoute une forme de pente glissante.",
              "Répondre en reformulant calmement : « Notre proposition ne concerne que le centre-ville et s'accompagne de solutions de transport : que pensez-vous de cette mesure-là ? »",
              "Revenir aux arguments vérifiables : pollution de l'air, sécurité, accès des commerces, déplacements des personnes à mobilité réduite.",
              "Conclusion : le procédé est un homme de paille ; une réponse conforme à l'éthique de la discussion reformule la thèse réelle et ramène l'échange aux arguments.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le sophisme présent dans chaque phrase. a) « Vous ne pouvez pas parler d'écologie, vous avez pris l'avion l'été dernier. » b) « Soit on interdit totalement les réseaux sociaux aux mineurs, soit on accepte qu'ils soient tous harcelés. » c) « Mon voisin a été cambriolé deux fois : la délinquance explose partout en France. » d) « Des millions de personnes ont partagé cette information, elle est forcément vraie. »",
              hint: "Pour chaque phrase, demandez-vous ce qui est attaqué (la personne ou l'idée), combien d'options sont envisagées et sur quoi repose la conclusion.",
              solution: [
                "a) Attaque personnelle (ad hominem) : on reproche à la personne son comportement au lieu de discuter ses arguments sur l'écologie. Une contradiction personnelle ne rend pas un argument faux.",
                "b) Faux dilemme : il existe d'autres options (limite d'âge, contrôle parental, éducation aux médias, modération renforcée).",
                "c) Généralisation hâtive : deux faits isolés ne permettent pas de conclure sur l'ensemble du pays ; il faudrait des statistiques nationales.",
                "d) Appel à la popularité : le nombre de partages ne prouve rien sur la vérité d'une information.",
                "Résultat : a) ad hominem, b) faux dilemme, c) généralisation hâtive, d) appel à la popularité.",
              ],
            },
            {
              level: 2,
              statement: "À partir de la thèse « Il faut rendre le vote obligatoire en France », rédigez un paragraphe argumenté qui contienne une thèse, un argument, un exemple, puis la réponse à une objection (concession et réfutation).",
              hint: "Pensez à un pays qui pratique le vote obligatoire, puis à l'objection la plus forte : voter est une liberté, et l'on peut avoir des raisons de s'abstenir.",
              solution: [
                "Thèse : le vote devrait être obligatoire en France.",
                "Argument : l'obligation réduirait fortement l'abstention, de sorte que les élus seraient désignés par une plus large partie des citoyens, ce qui renforcerait leur légitimité.",
                "Exemple : la Belgique pratique le vote obligatoire depuis 1893 et l'Australie depuis 1924 pour les élections fédérales ; la participation y est nettement plus élevée qu'en France.",
                "Objection et concession : certes, voter est une liberté, et l'abstention peut exprimer un désaccord avec l'offre politique.",
                "Réfutation : mais ce désaccord pourrait s'exprimer par le vote blanc, déjà décompté à part depuis 2014 ; l'obligation porterait sur le déplacement, non sur le choix.",
                "Résultat : le paragraphe articule thèse, argument, exemple, concession et réfutation. Un élève peut aussi défendre la thèse inverse, à condition de respecter la même structure.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (débat argumenté). Votre classe prépare un débat sur la question : « Faut-il interdire les téléphones portables dans l'enceinte du lycée ? » 1) Proposez une charte de cinq règles pour ce débat, en justifiant chacune par un principe de l'éthique de la discussion. 2) Expliquez comment le modérateur doit réagir si un participant attaque personnellement un camarade.",
              hint: "Partez des conditions de Habermas (participation, liberté de questionner, sincérité, absence de contrainte) et des règles d'écoute active vues dans le cours.",
              solution: [
                "Règle 1 : chacun demande la parole et dispose d'un temps égal. Principe : toute personne concernée doit pouvoir participer, et la parole ne doit pas être confisquée par les plus à l'aise.",
                "Règle 2 : on reformule la position précédente avant d'y répondre. Principe : écoute active, pour éviter l'homme de paille.",
                "Règle 3 : toute affirmation factuelle est appuyée sur une source ou un exemple vérifiable. Principe : seule compte la force du meilleur argument.",
                "Règle 4 : on critique les idées, jamais les personnes. Principe : respect de l'interlocuteur comme égal, refus de l'attaque ad hominem.",
                "Règle 5 : chacun peut modifier sa position et le dire. Principe : la discussion vise un accord rationnel, non une victoire.",
                "Réaction du modérateur : interrompre calmement, rappeler la règle 4, demander au participant de reformuler sa remarque sous forme d'argument sur la question, puis redonner la parole à la personne visée ; en cas de récidive, lui retirer la parole pour un tour.",
                "Conclusion : la charte transforme les principes de l'éthique de la discussion en règles concrètes, et le modérateur en garantit l'application sans prendre parti sur le fond.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque sophisme à sa définition.",
            pairs: [
              { left: "Attaque personnelle (ad hominem)", right: "Critiquer la personne au lieu de son argument" },
              { left: "Homme de paille", right: "Déformer la thèse adverse pour la réfuter plus facilement" },
              { left: "Généralisation hâtive", right: "Tirer une règle générale d'un ou deux cas isolés" },
              { left: "Faux dilemme", right: "Présenter deux options comme les seules possibles" },
              { left: "Appel à la popularité", right: "Tenir une idée pour vraie parce que beaucoup y croient" },
              { left: "Pente glissante", right: "Annoncer sans preuve une chaîne de conséquences catastrophiques" },
            ],
          },
          quiz: [
            {
              q: "Selon Habermas, qu'est-ce qui doit seul l'emporter dans une discussion ?",
              options: ["L'avis de la personne la plus experte", "La force du meilleur argument", "La position du plus grand nombre de participants", "L'opinion de celui qui parle le mieux"],
              answer: 1,
              why: "Dans l'éthique de la discussion, seule compte la force sans contrainte du meilleur argument, que chacun peut examiner.",
            },
            {
              q: "Que désigne le pathos dans la rhétorique d'Aristote ?",
              options: ["La crédibilité morale de l'orateur", "La structure logique des arguments", "Les émotions suscitées chez le public", "Le lieu et le moment choisis pour prononcer le discours"],
              answer: 2,
              why: "Le pathos désigne les émotions du public ; l'ethos est la crédibilité de l'orateur et le logos l'argumentation.",
            },
            {
              q: "« Si on autorise les trottinettes sur les trottoirs, demain ce seront les voitures. » Quel sophisme reconnaissez-vous ?",
              options: ["La pente glissante", "L'attaque personnelle", "L'appel à la popularité", "L'homme de paille"],
              answer: 0,
              why: "La phrase annonce sans preuve une suite de conséquences de plus en plus graves : c'est une pente glissante.",
            },
            {
              q: "En quoi consiste la reformulation dans l'écoute active ?",
              options: ["Répéter mot pour mot les propos de l'autre pour gagner du temps", "Corriger les fautes de langue de son interlocuteur", "Changer de sujet quand on manque d'arguments", "Résumer avec ses mots la position de l'autre avant d'y répondre"],
              answer: 3,
              why: "Reformuler permet de vérifier que l'on a compris la position réelle de l'autre, et donc de ne pas réfuter une caricature.",
            },
            {
              q: "Laquelle de ces attitudes respecte l'éthique de la discussion ?",
              options: ["Interrompre l'autre dès qu'il dit quelque chose de faux", "Refuser de répondre à quelqu'un dont on ne partage pas les idées", "Reconnaître un argument adverse juste, puis le discuter", "Chercher à gagner le débat par tous les moyens"],
              answer: 2,
              why: "Reconnaître ce qui est juste chez l'autre, puis le discuter, c'est faire primer les raisons sur la victoire.",
            },
          ],
          trap: "Croire qu'avoir de bons arguments dispense d'écouter : réfuter une position sans l'avoir reformulée conduit souvent à combattre un homme de paille, c'est-à-dire une thèse que l'adversaire ne soutient pas.",
          method: "Avant chaque réponse dans un débat, notez en une ligne la thèse de votre interlocuteur telle que vous la comprenez et vérifiez-la avec lui ; formulez ensuite votre objection sous la forme « certes..., mais... ».",
        },
      ],
    },
    /* ==================================================================== */
    /* PARTIS, SOCIÉTÉ CIVILE ET OPINION PUBLIQUE                             */
    /* ==================================================================== */
    {
      id: 'acteurs-du-debat',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'partis-politiques',
          title: 'Le rôle des partis politiques',
          minutes: 30,
          objectives: [
            "Expliquer le rôle des partis politiques dans la démocratie représentative à partir de l'article 4 de la Constitution.",
            "Identifier les fonctions d'un parti : sélectionner des candidats, proposer un programme, mobiliser, structurer le débat.",
            "Connaître les principales règles du financement de la vie politique.",
            "Analyser les difficultés actuelles des partis et les débats qu'elles suscitent.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un parti politique ?",
              paragraphs: [
                "Un parti politique est une organisation durable qui rassemble des personnes partageant une même vision de la société, dans le but de conquérir et d'exercer le pouvoir par les élections. Il se distingue d'un groupe d'intérêt (syndicat, association, fédération professionnelle), qui cherche à influencer les décisions sans briguer lui-même le pouvoir. Les politistes américains Joseph LaPalombara et Myron Weiner (1966) retiennent quatre critères : une organisation durable, qui survit à ses fondateurs ; une organisation complète, implantée du niveau local au niveau national ; la volonté d'exercer le pouvoir ; la recherche du soutien populaire, notamment par les élections.",
                "Les partis modernes se développent au XIXe siècle avec l'élargissement du suffrage. En France, la loi du 1er juillet 1901 sur les associations leur offre un cadre : le Parti républicain, radical et radical-socialiste est fondé en 1901, la Section française de l'Internationale ouvrière (SFIO) en 1905. Le clivage entre la gauche et la droite est plus ancien : en 1789, lors des débats de l'Assemblée constituante sur le veto royal, les partisans d'un veto fort se regroupent à la droite du président de séance, leurs adversaires à sa gauche.",
              ],
              box: { label: "Définition", text: "Un parti politique est une organisation durable, implantée sur le territoire, qui rassemble des citoyens autour d'un projet commun et cherche à conquérir et à exercer le pouvoir en présentant des candidats aux élections." },
            },
            {
              heading: "Le cadre constitutionnel : l'article 4",
              paragraphs: [
                "La Constitution du 4 octobre 1958 est la première constitution française à mentionner les partis. Son article 4 dispose que « les partis et groupements politiques concourent à l'expression du suffrage », qu'ils se forment et exercent leur activité librement, et qu'ils doivent respecter les principes de la souveraineté nationale et de la démocratie. Depuis la révision constitutionnelle de 2008, ils contribuent à l'égal accès des femmes et des hommes aux mandats électoraux, et la loi garantit les expressions pluralistes des opinions et la participation équitable des partis à la vie démocratique de la Nation.",
                "Le verbe « concourent » est important : les partis ne détiennent pas le monopole de l'expression politique, et des candidats sans étiquette peuvent se présenter. La loi du 6 juin 2000 sur la parité impose l'alternance des femmes et des hommes sur les listes électorales et prévoit une retenue sur le financement public des partis qui ne présentent pas autant de candidates que de candidats aux élections législatives.",
              ],
              box: { label: "Règle", text: "Article 4 de la Constitution : les partis concourent à l'expression du suffrage, se forment librement, respectent la souveraineté nationale et la démocratie, et contribuent à la parité (depuis 2008)." },
            },
            {
              heading: "Les fonctions des partis",
              paragraphs: [
                "Les partis sélectionnent les candidats et forment le personnel politique (investitures, élections primaires). Ils élaborent des programmes qui transforment des attentes diffuses en propositions cohérentes. Ils mobilisent les électeurs pendant les campagnes grâce à leurs militants. Ils structurent enfin le débat : ils simplifient l'offre politique en quelques grandes options lisibles que les électeurs peuvent comparer. Une fois élus, leurs membres forment des groupes parlementaires (au moins 15 députés à l'Assemblée nationale) qui organisent la majorité et l'opposition.",
                "Les partis remplissent aussi une fonction d'intégration : ils initient leurs militants à la vie politique, relient les citoyens aux institutions et canalisent les conflits sociaux vers une compétition électorale pacifique. Sans eux, le débat public risquerait de se fragmenter en une multitude de revendications sans arbitrage ni cohérence d'ensemble.",
              ],
              box: { label: "À retenir", text: "Quatre fonctions principales : sélectionner les candidats, proposer un programme, mobiliser les électeurs, structurer le débat entre majorité et opposition." },
            },
            {
              heading: "Le financement : transparence et égalité",
              paragraphs: [
                "Après plusieurs affaires de financement occulte dans les années 1980, des lois successives ont encadré l'argent de la vie politique : la loi du 11 mars 1988 crée un financement public des partis et impose une transparence du patrimoine des élus ; la loi du 15 janvier 1990 plafonne les dépenses de campagne et crée la Commission nationale des comptes de campagne et des financements politiques (CNCCFP) ; la loi du 19 janvier 1995 interdit les dons des entreprises et de toutes les personnes morales. Aujourd'hui, une personne physique ne peut pas donner plus de 7 500 euros par an à l'ensemble des partis.",
                "L'aide publique est répartie en deux fractions. La première dépend des voix obtenues au premier tour des élections législatives, pour les partis dont les candidats ont obtenu au moins 1 % des suffrages exprimés dans au moins 50 circonscriptions. La seconde dépend du nombre de parlementaires qui déclarent s'y rattacher. Ce système limite l'influence de l'argent privé et donne à chaque courant représentatif des moyens d'exister dans le débat.",
              ],
              box: { label: "Repère", text: "1988 : premier financement public. 1990 : plafonds de dépenses de campagne, création de la CNCCFP. 1995 : interdiction des dons des personnes morales. 2000 : loi sur la parité." },
            },
            {
              heading: "Des partis en question",
              paragraphs: [
                "Les partis traversent une crise de confiance : les adhérents sont peu nombreux, les enquêtes d'opinion montrent une image souvent négative, l'abstention et la volatilité électorale progressent. Depuis les années 2010, de nouvelles formations se présentent comme des « mouvements » plus souples, centrés sur une personnalité et sur l'adhésion en ligne. Ces évolutions posent des questions : comment garantir une démocratie interne, former des militants et produire des idées sans organisations solides ? Les partis restent pourtant difficiles à remplacer, car les institutions représentatives supposent des majorités et des oppositions organisées.",
              ],
            },
          ],
          keyPoints: [
            "Un parti vise à conquérir et exercer le pouvoir par les élections ; un groupe d'intérêt cherche seulement à influencer les décisions.",
            "Article 4 de la Constitution de 1958 : les partis « concourent à l'expression du suffrage » et se forment librement.",
            "Fonctions : sélectionner les candidats, proposer un programme, mobiliser les électeurs, structurer le débat.",
            "Financement encadré : aide publique selon les voix et les élus, dons des personnes morales interdits depuis 1995, dons individuels plafonnés à 7 500 euros par an.",
            "La CNCCFP, créée en 1990, contrôle les comptes de campagne et le financement des partis.",
            "Les partis connaissent une crise de confiance, mais restent essentiels pour organiser majorité et opposition.",
          ],
          example: {
            statement: "Expliquez pourquoi l'article 4 de la Constitution dit que les partis « concourent » à l'expression du suffrage, plutôt qu'ils ne l'expriment.",
            solution: [
              "Citer le texte : selon l'article 4 de la Constitution de 1958, les partis et groupements politiques concourent à l'expression du suffrage.",
              "Définir le verbe : « concourir », c'est contribuer avec d'autres à un résultat, sans en avoir l'exclusivité.",
              "Premier sens : ce sont les citoyens qui expriment le suffrage par leur vote ; les partis les y aident en présentant des candidats et des programmes.",
              "Deuxième sens : les partis n'ont pas de monopole ; des candidats indépendants peuvent se présenter, et d'autres acteurs (associations, syndicats, médias) participent aussi au débat.",
              "Troisième sens : en refusant de donner aux partis un rôle central, les auteurs de la Constitution de 1958, et notamment le général de Gaulle, voulaient éviter le « régime des partis » qu'ils reprochaient à la IVe République.",
              "Conclusion : le mot « concourent » reconnaît l'utilité des partis tout en affirmant que la souveraineté appartient au peuple et que le pluralisme dépasse les seuls partis.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des organisations suivantes, dites s'il s'agit d'un parti politique ou d'un groupe d'intérêt, en justifiant à l'aide du critère de la conquête du pouvoir. a) Une organisation qui présente des candidats dans la plupart des circonscriptions aux élections législatives. b) Un syndicat de salariés qui négocie les salaires dans une branche professionnelle. c) Une association de défense de l'environnement qui lance une pétition contre un projet d'autoroute. d) Une formation qui réunit des élus et prépare un programme pour l'élection présidentielle.",
              hint: "Demandez-vous si l'organisation cherche à exercer elle-même le pouvoir en présentant des candidats, ou seulement à peser sur ceux qui l'exercent.",
              solution: [
                "a) Parti politique : il présente des candidats pour conquérir des sièges, donc pour exercer le pouvoir.",
                "b) Groupe d'intérêt : le syndicat défend les intérêts professionnels des salariés sans présenter de candidats aux élections politiques.",
                "c) Groupe d'intérêt : l'association cherche à influencer une décision publique par la pétition, sans briguer le pouvoir.",
                "d) Parti politique : il prépare un programme et soutient des candidats pour gouverner.",
                "Résultat : a et d sont des partis politiques, b et c des groupes d'intérêt.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. 1) Le parti A a présenté des candidats aux élections législatives qui ont obtenu au moins 1 % des suffrages exprimés dans 62 circonscriptions ; le parti B a obtenu au moins 1 % dans 35 circonscriptions seulement. Lequel peut bénéficier de la première fraction de l'aide publique ? 2) Pour chaque don suivant, dites s'il est légal : a) une entreprise verse 2 000 euros au parti A ; b) une personne verse 5 000 euros au parti A et 4 000 euros au parti B la même année ; c) une personne verse 3 000 euros au parti B.",
              hint: "Rappelez-vous la condition des 50 circonscriptions, l'interdiction des dons des personnes morales et le plafond de 7 500 euros par an, valable pour l'ensemble des partis.",
              solution: [
                "1) La première fraction est réservée aux partis dont les candidats ont obtenu au moins 1 % des suffrages exprimés dans au moins 50 circonscriptions. Le parti A (62 circonscriptions) y a droit ; le parti B (35) n'y a pas droit.",
                "2a) Illégal : depuis la loi du 19 janvier 1995, les entreprises et toutes les personnes morales ne peuvent pas financer un parti.",
                "2b) Illégal : 5 000 + 4 000 = 9 000 euros, ce qui dépasse le plafond de 7 500 euros par an et par personne, qui s'apprécie pour l'ensemble des partis.",
                "2c) Légal : 3 000 euros est inférieur au plafond de 7 500 euros, à condition que la personne n'ait pas fait d'autres dons dépassant ce plafond au total.",
                "Résultat : seul le parti A reçoit la première fraction ; seul le don c est légal.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Les partis politiques sont-ils encore indispensables à la démocratie ? » Rédigez une introduction qui définit les termes et pose le problème, puis proposez un plan en deux parties, avec deux arguments et un exemple par partie, et une conclusion.",
              hint: "Opposez les fonctions que seuls les partis remplissent bien (sélection, programme, organisation de la majorité et de l'opposition) aux signes de leur affaiblissement et aux autres formes de participation.",
              solution: [
                "Introduction : un parti politique est une organisation durable qui cherche à conquérir et exercer le pouvoir par les élections ; l'article 4 de la Constitution affirme qu'ils concourent à l'expression du suffrage. Or la défiance envers eux grandit. Problème : leurs fonctions peuvent-elles être assurées par d'autres acteurs ?",
                "I. Des acteurs encore indispensables. Argument 1 : ils sélectionnent les candidats et élaborent des programmes cohérents qui permettent aux électeurs de choisir entre des projets. Argument 2 : ils organisent la vie parlementaire en groupes, ce qui structure la majorité et l'opposition. Exemple : à l'Assemblée nationale, un groupe doit compter au moins 15 députés et dispose de droits (temps de parole, questions au gouvernement).",
                "II. Des acteurs affaiblis et concurrencés. Argument 1 : les adhérents sont peu nombreux et la confiance faible, ce qui réduit leur capacité à représenter la société. Argument 2 : d'autres formes de participation se développent (associations, pétitions, conventions citoyennes, mobilisations en ligne). Exemple : la Convention citoyenne pour le climat (2019-2020) a réuni 150 citoyens tirés au sort, en dehors des partis.",
                "Conclusion : les partis ne sont plus les seuls acteurs du débat, mais aucune autre organisation ne remplit aussi bien leurs fonctions de sélection et d'organisation du pouvoir ; ils restent nécessaires, à condition de se renouveler (démocratie interne, transparence, parité).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire des partis et de leur encadrement dans l'ordre chronologique.",
            items: [
              "Naissance du clivage entre la gauche et la droite à l'Assemblée constituante",
              "Loi sur la liberté d'association, qui donne un cadre aux partis",
              "Fondation de la SFIO",
              "Première mention des partis dans une constitution française (article 4)",
              "Première loi sur le financement public des partis",
              "Interdiction des dons des entreprises aux partis",
              "Loi sur la parité entre les femmes et les hommes",
            ],
          },
          quiz: [
            {
              q: "Que dispose l'article 4 de la Constitution de 1958 ?",
              options: ["Les partis concourent à l'expression du suffrage", "Les partis détiennent seuls le droit de présenter des candidats aux élections", "Les partis sont financés uniquement par leurs adhérents", "Les partis doivent être autorisés par le gouvernement"],
              answer: 0,
              why: "L'article 4 reconnaît le rôle des partis sans leur donner de monopole : ils concourent à l'expression du suffrage et se forment librement.",
            },
            {
              q: "Depuis 1995, qui ne peut plus financer un parti politique ?",
              options: ["Les adhérents du parti", "Les personnes physiques de nationalité française", "Les entreprises et les autres personnes morales", "L'État"],
              answer: 2,
              why: "La loi du 19 janvier 1995 interdit les dons des personnes morales, pour limiter l'influence des intérêts économiques.",
            },
            {
              q: "D'où vient le clivage entre la gauche et la droite ?",
              options: ["De la création de la SFIO et de son opposition aux radicaux en 1905", "De la place des députés lors des débats de 1789 sur le veto royal", "De la séparation des Églises et de l'État votée à la Chambre en 1905", "De l'élection du président au suffrage universel direct depuis 1965"],
              answer: 1,
              why: "En 1789, les partisans d'un veto royal fort siégeaient à droite du président de l'Assemblée constituante, leurs adversaires à gauche.",
            },
            {
              q: "Quel est le plafond des dons d'une personne physique à l'ensemble des partis ?",
              options: ["1 500 euros par an", "75 000 euros par an", "Il n'y a aucun plafond", "7 500 euros par an"],
              answer: 3,
              why: "Une personne physique ne peut pas donner plus de 7 500 euros par an, tous partis confondus.",
            },
            {
              q: "Laquelle de ces fonctions n'est pas une fonction des partis politiques ?",
              options: ["Sélectionner des candidats", "Élaborer un programme", "Juger les élus qui ont enfreint la loi", "Mobiliser les électeurs lors des campagnes électorales"],
              answer: 2,
              why: "Juger relève des tribunaux ; les partis sélectionnent, proposent, mobilisent et structurent le débat.",
            },
          ],
          trap: "Confondre un parti politique et un groupe d'intérêt : un syndicat ou une association cherche à influencer les décisions, mais seul le parti vise à conquérir et exercer le pouvoir en présentant des candidats aux élections.",
          method: "Pour retenir le cadre juridique des partis, associez chaque date à une règle (1958 : article 4 ; 1988 : financement public ; 1990 : CNCCFP ; 1995 : fin des dons des entreprises ; 2000 : parité), puis récitez la frise de mémoire en cachant la colonne des règles.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'societe-civile',
          title: 'La société civile organisée : associations et syndicats',
          minutes: 30,
          objectives: [
            "Définir la société civile organisée et identifier ses principaux acteurs.",
            "Connaître le cadre juridique de la liberté d'association et de la liberté syndicale.",
            "Expliquer le rôle des syndicats dans le dialogue social et les règles de leur représentativité.",
            "Analyser la place des associations, des syndicats et des groupes d'intérêt dans le débat public.",
          ],
          course: [
            {
              heading: "La société civile organisée",
              paragraphs: [
                "La société civile désigne l'ensemble des citoyens et des groupements qui agissent dans l'espace public en dehors de l'État et des partis politiques. On parle de société civile organisée lorsque ces citoyens se regroupent de façon durable pour défendre une cause ou des intérêts, ou pour rendre un service : associations, syndicats de salariés, organisations d'employeurs, mutuelles, fondations, organisations non gouvernementales (ONG). Elle sert d'intermédiaire entre les individus et les pouvoirs publics : elle exprime des attentes, alerte, propose, conteste, et met parfois elle-même en œuvre des politiques publiques.",
                "La Constitution lui donne une place institutionnelle avec le Conseil économique, social et environnemental (CESE, articles 69 à 71), souvent appelé troisième assemblée. Il réunit des représentants des salariés, des entreprises, des associations et des organisations environnementales, et rend des avis au gouvernement et au Parlement. Depuis la loi organique du 15 janvier 2021, il compte 175 membres, peut associer des citoyens tirés au sort à ses travaux et peut être saisi par une pétition signée par au moins 150 000 personnes âgées de 16 ans ou plus.",
              ],
              box: { label: "Définition", text: "La société civile organisée regroupe les associations, syndicats, organisations professionnelles, mutuelles, fondations et ONG par lesquels des citoyens agissent ensemble dans l'espace public, en dehors de l'État et des partis." },
            },
            {
              heading: "Les associations : une liberté fondamentale",
              paragraphs: [
                "La loi du 1er juillet 1901, portée par Pierre Waldeck-Rousseau, définit l'association comme la convention par laquelle deux personnes ou plus mettent en commun, de façon permanente, leurs connaissances ou leur activité dans un but autre que de partager des bénéfices. Les associations se forment librement, sans autorisation ni déclaration préalable ; mais pour obtenir la capacité juridique (ouvrir un compte, recevoir des subventions, agir en justice), elles doivent être déclarées en préfecture et publiées au Journal officiel.",
                "Par sa décision du 16 juillet 1971, le Conseil constitutionnel a fait de la liberté d'association un principe fondamental reconnu par les lois de la République : le législateur ne peut pas soumettre la création d'une association à un contrôle préalable. Depuis la loi du 27 janvier 2017, un mineur de 16 ans révolus peut librement participer à la création d'une association et à son administration. Les associations agissent dans tous les domaines (sport, culture, solidarité, environnement, droits humains) ; certaines sont reconnues d'utilité publique ou agréées par l'État.",
              ],
              box: { label: "Repère", text: "1901 : loi sur la liberté d'association. 1971 : le Conseil constitutionnel en fait un principe à valeur constitutionnelle. 2017 : les mineurs de 16 ans peuvent créer et administrer une association." },
            },
            {
              heading: "Les syndicats : défendre les intérêts des travailleurs",
              paragraphs: [
                "La loi Le Chapelier (1791) interdisait les groupements de métier et les coalitions. La suppression du délit de coalition en 1864 rend la grève possible, et la loi Waldeck-Rousseau du 21 mars 1884 légalise les syndicats. Le Préambule de la Constitution de 1946, qui a valeur constitutionnelle, affirme que tout homme peut défendre ses droits et ses intérêts par l'action syndicale et adhérer au syndicat de son choix, et que le droit de grève s'exerce dans le cadre des lois qui le réglementent.",
                "Un syndicat est un groupement qui défend les intérêts professionnels de ses membres. Les grandes confédérations de salariés sont notamment la CGT (fondée en 1895), la CFDT, Force ouvrière, la CFE-CGC et la CFTC ; les principales organisations d'employeurs sont le Medef, la CPME et l'U2P. Depuis la loi du 20 août 2008, la représentativité d'un syndicat de salariés dépend surtout de son audience aux élections professionnelles : au moins 10 % des suffrages exprimés dans l'entreprise, 8 % au niveau de la branche ou au niveau national et interprofessionnel.",
                "Les syndicats représentatifs négocient avec les employeurs des accords d'entreprise et des conventions collectives de branche : c'est le dialogue social. Un accord d'entreprise est en principe valide s'il est signé par des syndicats représentatifs ayant recueilli plus de 50 % des suffrages exprimés en faveur des organisations représentatives ; à défaut, des syndicats qui en réunissent plus de 30 % peuvent demander une consultation des salariés.",
              ],
              box: { label: "Règle", text: "Article L1 du code du travail (loi du 31 janvier 2007) : tout projet de réforme du gouvernement sur les relations du travail, l'emploi ou la formation professionnelle fait l'objet d'une concertation préalable avec les partenaires sociaux, en vue d'une éventuelle négociation, sauf urgence." },
            },
            {
              heading: "Groupes d'intérêt, contre-pouvoirs et débat public",
              paragraphs: [
                "Associations, syndicats, fédérations professionnelles et entreprises cherchent à influencer la décision publique : on parle de groupes d'intérêt, ou de lobbies. Leur action peut enrichir le débat en apportant une expertise de terrain, mais elle pose une question d'égalité, car tous les intérêts ne disposent pas des mêmes moyens. Depuis la loi Sapin II du 9 décembre 2016, les représentants d'intérêts doivent s'inscrire sur un répertoire public tenu par la Haute Autorité pour la transparence de la vie publique (HATVP) et déclarer leurs activités.",
                "La société civile mobilise aussi l'opinion et le droit : pétitions, manifestations, campagnes, recours en justice. Dans l'« Affaire du siècle », quatre associations ont obtenu du tribunal administratif de Paris, en 2021, la reconnaissance d'une carence fautive de l'État dans la lutte contre le changement climatique. La société civile joue ainsi un rôle de contre-pouvoir qui complète la représentation politique sans s'y substituer : la loi reste votée par les élus.",
              ],
            },
          ],
          keyPoints: [
            "Société civile organisée : associations, syndicats, organisations d'employeurs, mutuelles, fondations, ONG, entre les citoyens et l'État.",
            "Loi du 1er juillet 1901 : les associations se forment librement ; la déclaration en préfecture leur donne la capacité juridique.",
            "1971 : la liberté d'association devient un principe à valeur constitutionnelle (décision du Conseil constitutionnel).",
            "1884 : légalisation des syndicats ; 1946 : le Préambule garantit l'action syndicale et le droit de grève.",
            "Depuis 2008, la représentativité syndicale dépend de l'audience électorale (10 % dans l'entreprise, 8 % dans la branche).",
            "Le CESE représente la société civile organisée ; la HATVP tient le répertoire des représentants d'intérêts (loi Sapin II, 2016).",
          ],
          example: {
            statement: "Trois lycéens de 16 et 17 ans veulent créer une association pour organiser des concerts au profit d'une cause humanitaire. Expliquez ce que la loi leur permet et les démarches à accomplir.",
            solution: [
              "Vérifier la nature du projet : il s'agit de mettre en commun leur activité de façon durable dans un but autre que de partager des bénéfices ; c'est bien une association au sens de la loi du 1er juillet 1901. Elle peut dégager des recettes, à condition de ne pas les répartir entre ses membres.",
              "Vérifier l'âge : depuis la loi du 27 janvier 2017, un mineur de 16 ans révolus peut participer à la création d'une association et à son administration ; les représentants légaux en sont informés.",
              "Rédiger les statuts : nom, objet, siège, règles de fonctionnement (assemblée générale, bureau, adhésion).",
              "Déclarer l'association en préfecture (ou en ligne), puis obtenir sa publication au Journal officiel : elle acquiert alors la capacité juridique.",
              "Mesurer l'intérêt de la déclaration : ouvrir un compte bancaire pour gérer les recettes des concerts, demander une subvention, signer des contrats avec une salle.",
              "Conclusion : les lycéens peuvent créer et diriger leur association ; aucune autorisation n'est nécessaire, mais la déclaration est indispensable pour agir juridiquement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les acteurs suivants dans les catégories : syndicat de salariés, organisation d'employeurs, association, ONG internationale. CFDT ; Medef ; Les Restos du Cœur ; Amnesty International ; CPME ; Force ouvrière.",
              hint: "Demandez-vous qui l'organisation représente (salariés, entreprises) ou quelle cause elle défend, et à quelle échelle elle agit.",
              solution: [
                "Syndicats de salariés : la CFDT et Force ouvrière, qui défendent les intérêts des salariés.",
                "Organisations d'employeurs : le Medef et la CPME (Confédération des petites et moyennes entreprises), qui représentent les entreprises.",
                "Association : Les Restos du Cœur, association fondée en 1985 à l'initiative de Coluche, qui aide les personnes en difficulté.",
                "ONG internationale : Amnesty International, fondée en 1961, qui défend les droits humains dans le monde.",
                "Résultat : CFDT et FO (syndicats de salariés), Medef et CPME (employeurs), Restos du Cœur (association), Amnesty International (ONG internationale).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Aux élections professionnelles d'une entreprise, il y a eu 600 suffrages exprimés au premier tour : syndicat A 270, syndicat B 150, syndicat C 102, syndicat D 48, syndicat E 30. 1) Calculez le score de chaque syndicat en pourcentage et indiquez lesquels atteignent le seuil d'audience de la représentativité dans l'entreprise. 2) Le syndicat A peut-il signer seul un accord d'entreprise valide ? Et les syndicats B et C ensemble ?",
              hint: "Le seuil est de 10 % des suffrages exprimés. Pour la validité d'un accord, on calcule ensuite le poids de chaque syndicat parmi les seuls suffrages obtenus par les syndicats représentatifs.",
              solution: [
                "1) Scores : A = 270 ÷ 600 = 45 % ; B = 150 ÷ 600 = 25 % ; C = 102 ÷ 600 = 17 % ; D = 48 ÷ 600 = 8 % ; E = 30 ÷ 600 = 5 %. Vérification : 45 + 25 + 17 + 8 + 5 = 100.",
                "Seuls A, B et C atteignent 10 % : ils remplissent la condition d'audience de la représentativité (les autres critères, comme l'indépendance ou la transparence financière, sont supposés remplis).",
                "2) Suffrages des syndicats représentatifs : 270 + 150 + 102 = 522. Poids de A : 270 ÷ 522 ≈ 51,7 %, soit plus de 50 % : A peut signer seul un accord valide.",
                "Poids de B et C ensemble : 252 ÷ 522 ≈ 48,3 %, soit moins de 50 % mais plus de 30 % : leur accord n'est pas valide d'emblée, mais ils peuvent demander une consultation des salariés, qui le validera s'il obtient la majorité des suffrages exprimés.",
                "Résultat : A (45 %), B (25 %) et C (17 %) sont représentatifs ; A peut signer seul un accord majoritaire ; B et C doivent passer par une consultation des salariés.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (analyse de document). Document (rédigé pour l'exercice) : « Notre collectif, qui rassemble douze associations de parents, d'enseignants et d'élèves, demande au ministère d'ouvrir une concertation avant toute réforme des rythmes scolaires. Nous lançons une pétition et organiserons un rassemblement devant le rectorat. » Question : présentez le document, montrez comment la société civile organisée participe au débat démocratique, puis discutez les limites de cette participation.",
              hint: "Identifiez les acteurs et leurs moyens d'action, reliez-les aux libertés étudiées (association, pétition, manifestation), puis interrogez la représentativité et l'égalité entre groupes.",
              solution: [
                "Présentation : un communiqué d'un collectif de douze associations (parents, enseignants, élèves), adressé au ministère et à l'opinion, à propos d'une réforme scolaire.",
                "Participation : le collectif exerce la liberté d'association (loi de 1901, principe constitutionnel depuis 1971) ; il exprime les attentes de personnes directement concernées et apporte une expertise de terrain.",
                "Moyens d'action : la demande de concertation, la pétition (qui mobilise et mesure le soutien) et le rassemblement (droit de manifester, sur déclaration préalable) sont des formes légales d'expression qui nourrissent le débat public.",
                "Limites : le collectif ne représente que ses membres, pas tous les citoyens ; tous les intérêts n'ont pas la même capacité à s'organiser ; enfin, la décision appartient aux autorités élues ou nommées, qui doivent arbitrer entre des demandes contradictoires.",
                "Conclusion : la société civile organisée enrichit et anime le débat démocratique, en complément de la représentation politique, sans la remplacer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la conquête des libertés d'association et syndicale.",
            items: [
              "La loi Le Chapelier interdit les coalitions et les groupements de métier",
              "Le délit de coalition est supprimé, ce qui rend la grève possible",
              "La loi Waldeck-Rousseau légalise les syndicats",
              "La loi sur le contrat d'association garantit la liberté d'association",
              "Le Préambule de la Constitution garantit l'action syndicale et le droit de grève",
              "Le Conseil constitutionnel donne une valeur constitutionnelle à la liberté d'association",
            ],
          },
          quiz: [
            {
              q: "Que permet la déclaration d'une association en préfecture ?",
              options: ["D'exister légalement, car toute association non déclarée est interdite", "D'acquérir la capacité juridique", "De partager les bénéfices entre les membres", "D'être reconnue automatiquement d'utilité publique"],
              answer: 1,
              why: "Une association se forme librement ; la déclaration lui donne la capacité juridique : avoir un compte, recevoir des subventions, agir en justice.",
            },
            {
              q: "Quelle loi a légalisé les syndicats en France ?",
              options: ["La loi Waldeck-Rousseau de 1884", "La loi Le Chapelier de 1791", "La loi du 1er juillet 1901 sur les associations", "La loi Sapin II de 2016"],
              answer: 0,
              why: "La loi du 21 mars 1884 légalise les syndicats ; la loi Le Chapelier de 1791 les interdisait au contraire.",
            },
            {
              q: "Depuis 2008, de quoi dépend principalement la représentativité d'un syndicat de salariés ?",
              options: ["De son ancienneté", "Du nombre de grèves qu'il a organisées dans l'année", "De son audience aux élections professionnelles", "D'une décision du ministre du Travail"],
              answer: 2,
              why: "La loi du 20 août 2008 fonde la représentativité sur l'audience électorale : 10 % dans l'entreprise, 8 % dans la branche.",
            },
            {
              q: "Quelle institution représente la société civile organisée au niveau national ?",
              options: ["Le Conseil supérieur de la magistrature", "Le Conseil d'État", "La Commission nationale des comptes de campagne et des financements politiques", "Le Conseil économique, social et environnemental"],
              answer: 3,
              why: "Le CESE (articles 69 à 71 de la Constitution) réunit des représentants des salariés, des entreprises, des associations et des organisations environnementales.",
            },
            {
              q: "Qui tient le répertoire des représentants d'intérêts créé par la loi Sapin II ?",
              options: ["Le Conseil constitutionnel, saisi par soixante députés", "La HATVP, autorité administrative indépendante", "Le ministère de l'Économie et des Finances", "Les syndicats représentatifs"],
              answer: 1,
              why: "La Haute Autorité pour la transparence de la vie publique tient ce répertoire public, où les lobbies déclarent leurs activités.",
            },
          ],
          trap: "Croire qu'une association doit être autorisée pour exister : depuis 1901, elle se forme librement, et la déclaration en préfecture ne sert qu'à lui donner la capacité juridique.",
          method: "Construisez un tableau à trois colonnes (associations, syndicats, groupes d'intérêt) et remplissez pour chacune : texte fondateur et date, rôle dans le débat, moyens d'action, limites. Révisez-le en le reconstituant de mémoire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'opinion-publique',
          title: 'L\'opinion publique : comment se forme-t-elle ?',
          minutes: 30,
          objectives: [
            "Définir l'opinion publique et situer la naissance de l'espace public.",
            "Expliquer comment se forment les opinions : socialisation, médias, entourage, débat public.",
            "Analyser la fabrication et les limites des sondages d'opinion.",
            "Connaître les règles qui encadrent la publication des sondages électoraux en France.",
          ],
          course: [
            {
              heading: "La naissance de l'opinion publique",
              paragraphs: [
                "L'expression « opinion publique » se diffuse au XVIIIe siècle, quand se développe ce que le philosophe Jürgen Habermas a appelé l'espace public (L'Espace public, 1962) : des lieux (salons, cafés, clubs, académies) et des supports (journaux, gazettes, pamphlets) où des particuliers discutent librement des affaires communes et soumettent le pouvoir à la critique. L'opinion devient alors une autorité que l'on invoque face au roi : dans les années 1780, le ministre Jacques Necker la présente comme une puissance invisible avec laquelle tout gouvernement doit compter.",
                "On peut définir l'opinion publique comme l'ensemble des jugements, attitudes et croyances partagés par une partie importante d'une population sur des questions d'intérêt général, à un moment donné. Elle n'est pas une simple addition d'avis individuels : elle se construit dans l'échange, se transforme au fil des événements, et se divise souvent en plusieurs opinions concurrentes.",
              ],
              box: { label: "Définition", text: "L'opinion publique désigne l'ensemble des jugements et des attitudes partagés par une partie importante de la population sur des questions d'intérêt général, à un moment donné. Elle se forme dans le débat et évolue avec lui." },
            },
            {
              heading: "Comment se forment les opinions",
              paragraphs: [
                "Les opinions se forment d'abord par la socialisation (famille, école, amis, milieu professionnel), puis au contact de l'information et du débat public. Les médias jouent un rôle important mais indirect : selon la théorie de la mise sur agenda, formulée par Maxwell McCombs et Donald Shaw en 1972, ils ne dictent pas ce qu'il faut penser, mais ils influencent fortement les sujets auxquels on pense, en choisissant et en hiérarchisant l'information.",
                "Dès les années 1940, les enquêtes de Paul Lazarsfeld aux États-Unis ont montré que l'influence des médias passe souvent par des leaders d'opinion de l'entourage, qui relaient et interprètent l'information : c'est la communication à deux étages. En 1974, la politologue allemande Elisabeth Noelle-Neumann a proposé la théorie de la spirale du silence : par peur de l'isolement, les personnes qui se croient minoritaires ont tendance à se taire, ce qui renforce l'impression que l'opinion dominante est plus majoritaire qu'elle ne l'est.",
              ],
            },
            {
              heading: "Mesurer l'opinion : les sondages",
              paragraphs: [
                "Un sondage interroge un échantillon, souvent d'environ 1 000 personnes, pour estimer l'opinion d'une population entière. En France, les instituts utilisent surtout la méthode des quotas : l'échantillon reproduit la structure de la population (sexe, âge, profession, région, taille de la commune) d'après les données de l'Insee. Cette méthode s'est imposée après l'élection présidentielle américaine de 1936 : George Gallup prévoit la victoire de Franklin Roosevelt avec un échantillon bien plus petit mais construit avec méthode, alors que le magazine Literary Digest se trompe avec plus de deux millions de réponses. En France, Jean Stoetzel fonde l'Ifop en 1938.",
                "Un sondage n'est qu'une estimation : il donne une photographie à un instant donné, non une prévision, et ses résultats dépendent de la formulation des questions. Le sociologue Pierre Bourdieu, dans une conférence de 1972 publiée sous le titre « L'opinion publique n'existe pas », critique trois postulats implicites des sondages : que tout le monde a une opinion, que toutes les opinions ont le même poids, et qu'il existe un accord sur les questions qui méritent d'être posées.",
              ],
              box: { label: "Formule", text: "Ordre de grandeur de la marge d'erreur d'un sondage aléatoire, pour un résultat proche de 50 % et un niveau de confiance de 95 % : environ 1 ÷ √n, où n est le nombre de personnes interrogées. Pour n = 1 000 : environ 3 points ; pour n = 400 : environ 5 points." },
            },
            {
              heading: "Encadrer les sondages électoraux",
              paragraphs: [
                "Parce qu'ils peuvent influencer les électeurs, par un effet d'entraînement en faveur du favori ou, à l'inverse, par une mobilisation en faveur de l'outsider, les sondages électoraux sont encadrés par la loi du 19 juillet 1977. La Commission des sondages contrôle leur qualité. Toute publication doit mentionner notamment l'institut, le commanditaire, le nombre de personnes interrogées, les dates de l'enquête et, depuis 2016, la marge d'erreur.",
                "La publication et le commentaire de tout sondage électoral sont interdits la veille et le jour de chaque tour de scrutin. Cette interdiction, fixée à une semaine à l'origine, a été réduite en 2002 à la veille et au jour du vote, parce que les sondages circulaient de toute façon par la presse étrangère et par internet.",
              ],
              box: { label: "Règle", text: "Loi du 19 juillet 1977 : contrôle par la Commission des sondages, mentions obligatoires (institut, commanditaire, taille de l'échantillon, dates, marge d'erreur), interdiction de publier un sondage électoral la veille et le jour du scrutin." },
            },
          ],
          keyPoints: [
            "L'opinion publique naît au XVIIIe siècle avec l'espace public (salons, cafés, presse) décrit par Habermas.",
            "Elle est un ensemble de jugements partagés sur des questions d'intérêt général, qui se forme dans l'échange.",
            "Les médias influencent surtout les sujets auxquels on pense (mise sur agenda) ; leur influence passe aussi par des leaders d'opinion.",
            "Sondage : échantillon par quotas, photographie et non prévision, marge d'erreur d'environ 3 points pour 1 000 personnes.",
            "Bourdieu : « L'opinion publique n'existe pas » ; il critique trois postulats implicites des sondages.",
            "Loi de 1977 : Commission des sondages, mentions obligatoires, pas de publication la veille et le jour du vote.",
          ],
          example: {
            statement: "Un sondage (données fictives) réalisé auprès de 1 000 personnes donne, pour le second tour d'une élection, 52 % des intentions de vote au candidat A et 48 % au candidat B. Un journal titre : « A sera élu ! » Ce titre est-il justifié ?",
            solution: [
              "Évaluer la marge d'erreur : pour 1 000 personnes, elle est d'environ 1 ÷ √1 000 ≈ 0,03, soit environ 3 points.",
              "Encadrer les résultats : A se situe probablement entre 49 % et 55 %, B entre 45 % et 51 %.",
              "Comparer : les deux intervalles se chevauchent ; il est donc possible que B soit en réalité devant A.",
              "Rappeler la nature d'un sondage : c'est une photographie de l'opinion à une date donnée, non une prévision ; les électeurs peuvent changer d'avis, et la participation n'est pas connue.",
              "Ajouter une réserve de méthode : avec la méthode des quotas, la marge d'erreur n'est qu'un ordre de grandeur, car le calcul vaut en toute rigueur pour un échantillon aléatoire.",
              "Conclusion : le titre n'est pas justifié ; il faudrait écrire que les deux candidats sont proches, avec un léger avantage pour A dans ce sondage, à l'intérieur de la marge d'erreur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, dites s'il doit obligatoirement figurer lors de la publication d'un sondage électoral en France : a) le nom de l'institut ; b) le nom du commanditaire ; c) le nombre de personnes interrogées ; d) le nom des personnes interrogées ; e) les dates de l'enquête ; f) la marge d'erreur. Peut-on publier un sondage le samedi pour un scrutin le dimanche ?",
              hint: "Les mentions obligatoires servent à juger la fiabilité du sondage ; les personnes interrogées, elles, restent anonymes.",
              solution: [
                "a) Oui : le nom de l'institut permet de savoir qui a réalisé l'enquête.",
                "b) Oui : le commanditaire (journal, parti, entreprise) doit être connu, car il peut avoir un intérêt dans les résultats.",
                "c) Oui : la taille de l'échantillon conditionne la précision du résultat.",
                "d) Non : les personnes interrogées sont anonymes.",
                "e) Oui : les dates situent la photographie dans le temps.",
                "f) Oui : depuis 2016, la marge d'erreur doit être indiquée.",
                "Le samedi est la veille du scrutin : la publication et le commentaire d'un sondage électoral sont interdits ce jour-là et le jour du vote.",
              ],
            },
            {
              level: 2,
              statement: "En utilisant l'ordre de grandeur de la marge d'erreur 1 ÷ √n, calculez la marge d'erreur pour des échantillons de 400, 1 000 et 2 500 personnes. Combien de personnes faut-il interroger pour diviser par deux la marge d'erreur obtenue avec 1 000 personnes ? Qu'en concluez-vous sur le coût de la précision ?",
              hint: "Pour diviser 1 ÷ √n par deux, il faut multiplier √n par deux, donc multiplier n par quatre.",
              solution: [
                "Pour n = 400 : √400 = 20, donc 1 ÷ 20 = 0,05, soit environ 5 points.",
                "Pour n = 1 000 : √1 000 ≈ 31,6, donc 1 ÷ 31,6 ≈ 0,032, soit environ 3 points.",
                "Pour n = 2 500 : √2 500 = 50, donc 1 ÷ 50 = 0,02, soit environ 2 points.",
                "Pour diviser la marge par deux, il faut multiplier √n par 2, donc n par 4 : 4 × 1 000 = 4 000 personnes, ce qui donne 1 ÷ √4 000 ≈ 0,016, soit environ 1,6 point.",
                "Conclusion : la précision coûte cher, car il faut quatre fois plus de personnes pour une marge deux fois plus petite ; c'est pourquoi la plupart des sondages se contentent d'environ 1 000 personnes.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Les sondages éclairent-ils ou déforment-ils le débat démocratique ? » Rédigez une réponse organisée en deux parties, en mobilisant au moins trois notions ou auteurs du cours et un exemple de règle juridique.",
              hint: "Opposez l'utilité des sondages (connaître l'opinion, éclairer les choix) à leurs effets pervers (influence sur le vote, questions imposées, critique de Bourdieu), puis montrez comment la loi tente de concilier les deux.",
              solution: [
                "Introduction : un sondage estime l'opinion d'une population à partir d'un échantillon. Omniprésents dans la vie politique, ils posent un problème : informent-ils le débat ou le faussent-ils ?",
                "I. Des outils qui éclairent le débat. Ils donnent une image de l'opinion entre deux élections et permettent aux citoyens comme aux élus de connaître les préoccupations de la population. Bien construits (quotas, échantillon d'environ 1 000 personnes), ils ont une précision connue d'environ 3 points. Ils peuvent aussi faire apparaître des attentes ignorées par les responsables politiques.",
                "II. Des outils qui peuvent déformer le débat. Selon Bourdieu, ils supposent à tort que tout le monde a une opinion, que toutes se valent et que les questions posées sont les bonnes : le sondeur impose ses problèmes. Ils peuvent aussi produire des effets d'entraînement ou de découragement, et transformer la campagne en course de petits chevaux au détriment des idées.",
                "Règle juridique : la loi du 19 juillet 1977 encadre les sondages électoraux (Commission des sondages, mentions obligatoires dont la marge d'erreur, interdiction de publication la veille et le jour du scrutin).",
                "Conclusion : les sondages éclairent le débat lorsqu'ils sont lus pour ce qu'ils sont, des photographies imparfaites ; ils le déforment lorsqu'on les prend pour des prévisions ou pour l'expression de la volonté générale. L'éducation critique des citoyens compte autant que la loi.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'opinion publique et les sondages.",
            statements: [
              { text: "Un sondage réalisé auprès de 1 000 personnes donne un résultat exact au point près.", true: false, why: "Il comporte une marge d'erreur d'environ 3 points pour un résultat proche de 50 %." },
              { text: "La méthode des quotas reproduit dans l'échantillon la structure de la population.", true: true, why: "L'échantillon respecte la répartition par sexe, âge, profession, région et taille de commune." },
              { text: "Depuis 2016, la publication d'un sondage électoral doit mentionner sa marge d'erreur.", true: true, why: "La loi du 19 juillet 1977, modifiée en 2016, impose cette mention pour que le lecteur juge la précision du résultat." },
              { text: "Selon la théorie de la mise sur agenda, les médias dictent exactement ce que le public doit penser.", true: false, why: "Ils influencent surtout les sujets auxquels on pense, en hiérarchisant l'information." },
              { text: "Plus l'échantillon interrogé est grand, plus la marge d'erreur est faible.", true: true, why: "La marge d'erreur diminue comme 1 ÷ √n : il faut quatre fois plus de personnes pour la diviser par deux." },
              { text: "Pierre Bourdieu considérait que les sondages mesurent fidèlement une opinion qui existe déjà.", true: false, why: "Il soutenait au contraire que les sondages fabriquent en partie l'opinion qu'ils prétendent mesurer." },
              { text: "Un sondage est une prévision certaine du résultat d'une élection.", true: false, why: "C'est une photographie de l'opinion à une date donnée, qui peut évoluer jusqu'au vote." },
            ],
          },
          quiz: [
            {
              q: "Quel philosophe a analysé la naissance de l'espace public au XVIIIe siècle ?",
              options: ["Pierre Bourdieu", "Alexis de Tocqueville", "Jürgen Habermas", "Max Weber"],
              answer: 2,
              why: "Dans L'Espace public (1962), Habermas décrit les salons, cafés et journaux où se forme une opinion critique face au pouvoir.",
            },
            {
              q: "Quelle est la marge d'erreur approximative d'un sondage auprès de 1 000 personnes, pour un résultat proche de 50 % ?",
              options: ["Environ 3 points", "Environ 0,3 point", "Environ 10 points", "Aucune, si l'échantillon est représentatif"],
              answer: 0,
              why: "L'ordre de grandeur est 1 ÷ √1 000 ≈ 0,03, soit environ 3 points de pourcentage.",
            },
            {
              q: "Que critique Pierre Bourdieu dans « L'opinion publique n'existe pas » ?",
              options: ["Le droit de vote des femmes", "La liberté de la presse face aux pouvoirs économiques", "Le secret du vote", "Les postulats implicites des sondages"],
              answer: 3,
              why: "Il conteste l'idée que tout le monde a une opinion, que toutes ont le même poids et que les questions posées vont de soi.",
            },
            {
              q: "Quand la publication d'un sondage électoral est-elle interdite en France ?",
              options: ["Pendant toute la durée de la campagne officielle", "La veille et le jour de chaque tour de scrutin", "Pendant la semaine qui précède le scrutin, comme le prévoit la loi actuelle", "Jamais, la liberté de la presse l'interdit"],
              answer: 1,
              why: "Depuis 2002, l'interdiction ne porte plus que sur la veille et le jour du vote ; elle portait auparavant sur une semaine.",
            },
            {
              q: "Que décrit la théorie de la spirale du silence ?",
              options: ["Des personnes qui se croient minoritaires et se taisent", "Le silence imposé aux journalistes par la censure d'État", "La disparition des débats télévisés pendant les campagnes", "La baisse de la participation aux élections locales"],
              answer: 0,
              why: "Selon Elisabeth Noelle-Neumann, la peur de l'isolement pousse les minoritaires supposés au silence, ce qui renforce l'opinion dominante.",
            },
          ],
          trap: "Lire un sondage comme une prévision ou comme un résultat exact : un écart de 2 points entre deux candidats, avec 1 000 personnes interrogées, reste à l'intérieur de la marge d'erreur et ne permet pas de désigner un vainqueur.",
          method: "Devant un sondage, posez systématiquement quatre questions : qui l'a réalisé et pour qui ? Combien de personnes et quand ? Quelle est la question exacte ? Les écarts dépassent-ils la marge d'erreur ? Notez vos réponses avant de commenter le résultat.",
        },
      ],
    },
    /* ==================================================================== */
    /* PARTICIPER À LA VIE DÉMOCRATIQUE                                      */
    /* ==================================================================== */
    {
      id: 'participer',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'democratie-participative',
          title: 'La démocratie participative',
          minutes: 30,
          objectives: [
            "Distinguer démocratie représentative, démocratie directe, démocratie participative et démocratie délibérative.",
            "Identifier les principaux dispositifs de participation en France, du référendum aux conventions citoyennes.",
            "Analyser les apports et les limites de la démocratie participative.",
          ],
          course: [
            {
              heading: "Au-delà de l'élection : quatre façons de faire vivre la démocratie",
              paragraphs: [
                "Dans la démocratie représentative, les citoyens élisent des représentants qui décident en leur nom : selon l'article 3 de la Constitution, « la souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum ». Dans la démocratie directe, les citoyens décident eux-mêmes, par référendum ou en assemblée ; deux cantons suisses, Glaris et Appenzell Rhodes-Intérieures, réunissent encore chaque année tous leurs citoyens en plein air (la Landsgemeinde) pour voter les lois.",
                "La démocratie participative désigne les dispositifs qui associent les citoyens à l'élaboration des décisions sans qu'ils décident à la place des élus : consultation, concertation, budgets participatifs, conseils de quartier. La démocratie délibérative insiste sur la qualité de la discussion qui précède la décision : des citoyens, souvent tirés au sort, s'informent auprès d'experts, débattent longuement et formulent des propositions argumentées. Ces formes ne s'opposent pas : elles complètent la représentation.",
              ],
              box: { label: "Définition", text: "La démocratie participative regroupe les dispositifs qui associent les citoyens à l'élaboration des décisions publiques, au-delà du vote, sans que la décision finale cesse en principe d'appartenir aux représentants élus." },
            },
            {
              heading: "Les outils de la démocratie directe en France",
              paragraphs: [
                "Le référendum national peut être organisé sur un projet de loi relatif à l'organisation des pouvoirs publics, à des réformes économiques, sociales ou environnementales, ou à la ratification d'un traité (article 11), ou pour réviser la Constitution (article 89). Le dernier référendum national, le 29 mai 2005, a vu le rejet du traité établissant une Constitution pour l'Europe par 54,67 % des suffrages exprimés.",
                "La révision constitutionnelle de 2008, appliquée depuis 2015, a créé le référendum d'initiative partagée (RIP) : il peut être organisé à l'initiative d'un cinquième des membres du Parlement, soutenue par un dixième des électeurs inscrits, soit plus de 4,5 millions de signatures. Si la proposition n'est pas examinée par les deux assemblées dans un délai de six mois, le président de la République la soumet au référendum. Aucun RIP n'a encore abouti : celui de 2019 contre la privatisation des Aéroports de Paris a recueilli un peu plus d'un million de soutiens.",
                "À l'échelle locale, depuis la révision de 2003 (article 72-1), une collectivité peut organiser un référendum local décisionnel : le projet est adopté si au moins la moitié des électeurs inscrits a voté et s'il obtient la majorité des suffrages exprimés ; sinon, le résultat n'a que la valeur d'un avis.",
              ],
              box: { label: "Règle", text: "Référendum d'initiative partagée (article 11) : initiative d'un cinquième des parlementaires (185 sur 925), soutien d'un dixième des électeurs inscrits recueilli en neuf mois, contrôle du Conseil constitutionnel, référendum si le Parlement n'examine pas le texte dans les six mois." },
            },
            {
              heading: "Associer les citoyens : concertation et conventions citoyennes",
              paragraphs: [
                "La Commission nationale du débat public (CNDP), créée par la loi Barnier de 1995 et devenue autorité administrative indépendante en 2002, organise des débats publics sur les grands projets d'aménagement et d'environnement (lignes ferroviaires, ports, centrales). La loi du 27 février 2002 rend obligatoires les conseils de quartier dans les communes de 80 000 habitants et plus. Les budgets participatifs, nés à Porto Alegre (Brésil) en 1989, permettent aux habitants de proposer et de choisir des projets financés par la collectivité ; Paris en organise depuis 2014.",
                "Depuis 2019, la France expérimente les conventions citoyennes. La Convention citoyenne pour le climat (octobre 2019 à juin 2020) a réuni 150 citoyens tirés au sort, chargés de proposer des mesures pour réduire d'au moins 40 % les émissions de gaz à effet de serre d'ici 2030 par rapport à 1990, dans un esprit de justice sociale : elle a adopté 149 propositions, dont une partie a été reprise, souvent modifiée, dans la loi Climat et résilience du 22 août 2021. La Convention citoyenne sur la fin de vie, organisée par le CESE de décembre 2022 à avril 2023, a réuni plus de 180 citoyens tirés au sort.",
              ],
              box: { label: "Repère", text: "1989 : budget participatif de Porto Alegre. 1995 : création de la CNDP. 2002 : conseils de quartier obligatoires (80 000 habitants). 2008 : création du RIP. 2019 : Grand débat national, puis Convention citoyenne pour le climat." },
            },
            {
              heading: "Promesses et limites",
              paragraphs: [
                "La démocratie participative répond à la défiance envers les représentants : elle rapproche les citoyens des décisions, mobilise leur expertise d'usage (ceux qui prennent le bus savent ce qui ne fonctionne pas) et peut rendre les décisions mieux acceptées. Les conventions citoyennes ont montré que des citoyens ordinaires, tirés au sort et bien informés, sont capables de délibérer sérieusement sur des sujets complexes.",
                "Ses limites sont réelles. La participation volontaire attire surtout les citoyens les plus diplômés, les plus disponibles et les plus âgés, au risque de renforcer les inégalités politiques. Lorsque les avis ne sont pas suivis d'effets, elle devient un alibi : en 1969, l'urbaniste américaine Sherry Arnstein classait les dispositifs sur une « échelle de la participation » allant de la manipulation au contrôle citoyen. Enfin, se pose la question de la légitimité : un panel tiré au sort peut-il imposer ses choix à des élus qui, eux, rendent des comptes devant les électeurs ? Après la Convention pour le climat, la promesse présidentielle de reprendre les propositions « sans filtre » a ainsi suscité des déceptions.",
              ],
            },
          ],
          keyPoints: [
            "Représentative : on élit. Directe : on décide soi-même. Participative : on est associé. Délibérative : on discute longuement avant de proposer.",
            "Article 3 de la Constitution : le peuple exerce la souveraineté par ses représentants et par le référendum.",
            "RIP (2008, appliqué depuis 2015) : un cinquième des parlementaires et un dixième des électeurs inscrits ; aucun n'a encore abouti.",
            "Référendum local décisionnel : validité si la moitié des inscrits a voté et majorité des suffrages exprimés.",
            "CNDP (1995), conseils de quartier (2002), budgets participatifs, conventions citoyennes tirées au sort (climat 2019-2020, fin de vie 2022-2023).",
            "Limites : participation socialement sélective, risque d'alibi, tension avec la légitimité des élus.",
          ],
          example: {
            statement: "Une commune (données fictives) veut réaménager sa place centrale. Le maire hésite entre trois solutions : un référendum local, un panel de 30 habitants tirés au sort qui travailleront pendant trois week-ends, ou une consultation en ligne ouverte à tous. Comparez ces trois dispositifs.",
            solution: [
              "Le référendum local relève de la démocratie directe : il donne une décision claire, qui s'impose si la moitié des inscrits vote et si une majorité se dégage. Mais il réduit un projet complexe à un oui ou à un non, et la participation peut être faible.",
              "Le panel tiré au sort relève de la démocratie délibérative : il réunit des habitants variés, y compris ceux qui ne participent jamais, qui s'informent et discutent longuement. Mais 30 personnes ne décident pas pour toute la commune : leur avis doit ensuite être repris par le conseil municipal.",
              "La consultation en ligne relève de la démocratie participative : elle est simple et ouverte à tous. Mais elle attire surtout les habitants les plus connectés et les plus mobilisés, et ses résultats ne sont pas représentatifs.",
              "Combiner les dispositifs est possible : un panel tiré au sort élabore deux ou trois scénarios, une consultation recueille les réactions, puis le conseil municipal ou un référendum tranche.",
              "Conclusion : aucun dispositif n'est parfait ; le choix dépend de ce que l'on cherche (une décision, une délibération de qualité, une large expression) et de l'engagement de la commune à tenir compte des résultats.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque dispositif dans la forme de démocratie qu'il illustre principalement (représentative, directe, participative, délibérative) : a) l'élection des députés ; b) le référendum du 29 mai 2005 ; c) la Convention citoyenne pour le climat ; d) un budget participatif municipal ; e) un conseil de quartier ; f) l'élection du conseil municipal.",
              hint: "Demandez-vous qui décide (les élus, les citoyens eux-mêmes) et si les citoyens sont seulement consultés ou réunis pour délibérer longuement.",
              solution: [
                "a) et f) Démocratie représentative : les citoyens élisent des représentants qui décident en leur nom.",
                "b) Démocratie directe : les citoyens ont tranché eux-mêmes par leur vote sur un traité.",
                "c) Démocratie délibérative : 150 citoyens tirés au sort se sont informés et ont délibéré pendant plusieurs mois avant de formuler des propositions.",
                "d) Démocratie participative : les habitants proposent et choisissent des projets ; le budget global reste fixé par les élus. On peut aussi y voir une part de démocratie directe, puisque les habitants votent.",
                "e) Démocratie participative : le conseil de quartier est consulté et fait des propositions, mais ne décide pas.",
                "Résultat : représentative (a, f), directe (b), délibérative (c), participative (d, e).",
              ],
            },
            {
              level: 2,
              statement: "1) Le Parlement compte 577 députés et 348 sénateurs. Calculez le nombre minimal de parlementaires nécessaires pour lancer un référendum d'initiative partagée. Si les listes électorales comptent 48 millions d'inscrits (donnée arrondie pour l'exercice), combien de soutiens faut-il recueillir ? 2) Données fictives : dans une commune de 12 000 électeurs inscrits, un référendum local réunit 5 400 votants ; il y a 5 000 suffrages exprimés, dont 3 500 « oui ». Le projet est-il adopté de façon décisionnelle ?",
              hint: "Un cinquième des membres du Parlement, un dixième des inscrits. Pour le référendum local, vérifiez d'abord la participation (la moitié des inscrits), puis la majorité des suffrages exprimés.",
              solution: [
                "1) Membres du Parlement : 577 + 348 = 925. Un cinquième : 925 ÷ 5 = 185 parlementaires.",
                "Soutiens : un dixième de 48 millions = 4,8 millions d'électeurs.",
                "2) Condition de participation : la moitié des inscrits = 12 000 ÷ 2 = 6 000 votants. Or il n'y a que 5 400 votants : 5 400 < 6 000, la condition n'est pas remplie.",
                "La majorité est pourtant acquise : 3 500 ÷ 5 000 = 70 % des suffrages exprimés.",
                "Résultat : il faut 185 parlementaires et 4,8 millions de soutiens pour un RIP ; le référendum local n'est pas décisionnel faute de participation suffisante (45 % des inscrits) et ne vaut qu'avis, même si le « oui » l'emporte à 70 %.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Faut-il donner un pouvoir de décision aux conventions citoyennes tirées au sort ? » Rédigez une réponse argumentée en deux parties, en vous appuyant sur au moins deux exemples précis du cours.",
              hint: "Pesez d'un côté la qualité de la délibération et la diversité des participants, de l'autre la légitimité électorale, la responsabilité devant les électeurs et la petite taille des panels.",
              solution: [
                "Introduction : une convention citoyenne réunit des citoyens tirés au sort qui s'informent, délibèrent et formulent des propositions. Aujourd'hui, elles sont seulement consultatives. Faut-il aller plus loin et leur confier la décision ?",
                "I. Des arguments pour. Le tirage au sort donne la parole à des citoyens qui ne participent jamais et produit une assemblée plus diverse que le Parlement ; la Convention pour le climat (150 citoyens, 149 propositions) a montré une vraie capacité de délibération sur un sujet complexe. Leur donner un pouvoir de décision éviterait la déception née lorsque leurs propositions sont abandonnées ou modifiées.",
                "II. Des arguments contre. Les membres tirés au sort ne rendent pas de comptes devant les électeurs et ne peuvent pas être sanctionnés par le vote ; 150 ou 180 personnes ne peuvent pas engager des dizaines de millions d'habitants sans mandat. L'article 3 de la Constitution réserve l'exercice de la souveraineté aux représentants élus et au peuple par référendum.",
                "Voie intermédiaire : les propositions d'une convention pourraient être soumises obligatoirement au Parlement, avec une réponse motivée, ou au peuple par référendum, comme l'a fait l'Irlande : sa convention constitutionnelle, composée en majorité de citoyens tirés au sort, avait recommandé d'ouvrir le mariage aux personnes de même sexe, et la question a été tranchée par référendum en 2015.",
                "Conclusion : plutôt que de remplacer les élus, les conventions citoyennes gagnent à éclairer la décision, à condition que leurs travaux reçoivent une suite claire et justifiée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque dispositif de participation à sa description.",
            pairs: [
              { left: "Référendum d'initiative partagée", right: "Initiative d'un cinquième des parlementaires, soutenue par un dixième des électeurs inscrits" },
              { left: "Convention citoyenne", right: "Citoyens tirés au sort qui s'informent et délibèrent avant de faire des propositions" },
              { left: "Budget participatif", right: "Les habitants proposent et choisissent des projets financés par la collectivité" },
              { left: "Commission nationale du débat public", right: "Organise des débats sur les grands projets d'aménagement et d'environnement" },
              { left: "Conseil de quartier", right: "Instance consultative obligatoire dans les communes de 80 000 habitants et plus" },
              { left: "Landsgemeinde", right: "Assemblée en plein air où tous les citoyens d'un canton suisse votent les lois" },
            ],
          },
          quiz: [
            {
              q: "Quelle forme de démocratie insiste sur la qualité de la discussion menée par des citoyens informés, souvent tirés au sort ?",
              options: ["La démocratie représentative", "La démocratie directe", "La démocratie plébiscitaire", "La démocratie délibérative"],
              answer: 3,
              why: "La démocratie délibérative valorise l'information et l'échange d'arguments avant la décision, comme dans les conventions citoyennes.",
            },
            {
              q: "Qui peut prendre l'initiative d'un référendum d'initiative partagée ?",
              options: ["Un dixième des électeurs inscrits, sans les parlementaires", "Un cinquième des parlementaires, avec un dixième des électeurs", "Le président du Conseil constitutionnel, après avis du gouvernement", "Tout maire d'une commune de plus de 80 000 habitants"],
              answer: 1,
              why: "L'article 11 exige l'initiative d'un cinquième des parlementaires (185), puis le soutien d'un dixième des électeurs inscrits.",
            },
            {
              q: "Combien de citoyens tirés au sort composaient la Convention citoyenne pour le climat ?",
              options: ["150", "577", "1 000", "15"],
              answer: 0,
              why: "150 citoyens tirés au sort ont travaillé d'octobre 2019 à juin 2020 et adopté 149 propositions.",
            },
            {
              q: "À quelle condition un référendum local est-il décisionnel ?",
              options: ["Si le préfet l'approuve après le vote", "S'il obtient au moins 60 % de oui, quel que soit le taux de participation constaté", "Si la moitié des inscrits a voté et si la majorité des exprimés approuve", "S'il est organisé le même jour qu'une élection nationale"],
              answer: 2,
              why: "Le projet est adopté si au moins la moitié des électeurs inscrits a pris part au vote et s'il réunit la majorité des suffrages exprimés.",
            },
            {
              q: "Quelle est la principale limite souvent reprochée aux dispositifs de participation volontaire ?",
              options: ["Ils sont interdits par la Constitution", "Ils attirent surtout les citoyens les plus diplômés et disponibles", "Ils coûtent toujours plus cher à organiser qu'une élection présidentielle", "Ils remplacent obligatoirement le vote des élus locaux"],
              answer: 1,
              why: "La participation volontaire est socialement sélective, ce qui peut renforcer les inégalités politiques au lieu de les réduire.",
            },
          ],
          trap: "Confondre démocratie participative et démocratie directe : dans un dispositif participatif (conseil de quartier, concertation, convention citoyenne), les citoyens proposent et sont consultés, mais la décision finale reste en principe aux élus.",
          method: "Pour analyser un dispositif de participation, répondez à quatre questions : qui participe (volontaires, tirés au sort, tous les électeurs) ? Comment (vote, avis, délibération) ? Avec quel effet sur la décision ? Avec quelle légitimité ? Ce questionnement structure aussi une réponse argumentée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'debat-et-numerique',
          title: 'S\'informer et débattre dans la société numérique',
          minutes: 30,
          objectives: [
            "Identifier les transformations du débat public liées au numérique et aux réseaux sociaux.",
            "Expliquer les notions de bulle de filtre, de chambre d'écho, de mésinformation et de désinformation.",
            "Vérifier une information en appliquant une méthode de recoupement des sources.",
            "Connaître les règles juridiques qui encadrent l'expression en ligne et les plateformes.",
          ],
          course: [
            {
              heading: "Un espace public élargi et transformé",
              paragraphs: [
                "Internet et les réseaux sociaux ont élargi l'espace public : chacun peut publier, commenter, interpeller un élu ou lancer une pétition sans passer par un journal ou une télévision. Des mobilisations se sont organisées en ligne, comme le mouvement #MeToo, lancé à grande échelle en 2017 contre les violences sexuelles. L'accès aux sources (textes de loi, rapports, données publiques) est devenu plus facile qu'il ne l'a jamais été.",
                "Mais les grandes plateformes reposent sur une économie de l'attention : elles sont financées par la publicité et leurs algorithmes de recommandation cherchent à maximiser le temps passé et les réactions (partages, commentaires). Or les contenus qui suscitent l'indignation, la peur ou la moquerie provoquent souvent plus de réactions que les contenus nuancés. Ce fonctionnement peut favoriser la polarisation et la circulation rapide d'informations fausses.",
              ],
              box: { label: "Définition", text: "Un algorithme de recommandation est un programme qui choisit et ordonne les contenus présentés à chaque utilisateur en fonction de son comportement passé (clics, temps de lecture, réactions) et des objectifs de la plateforme." },
            },
            {
              heading: "Bulles de filtre, chambres d'écho et biais cognitifs",
              paragraphs: [
                "En 2011, le militant américain Eli Pariser a popularisé l'expression bulle de filtre : en personnalisant les contenus, les algorithmes enfermeraient chacun dans un univers d'informations conforme à ses goûts et à ses opinions. On parle de chambre d'écho lorsqu'un groupe d'internautes qui pensent de la même façon se renvoient sans cesse les mêmes idées, qui en sortent renforcées.",
                "Ces mécanismes s'appuient sur des biais cognitifs : le biais de confirmation nous pousse à rechercher et à croire plus facilement ce qui confirme ce que nous pensons déjà. Les recherches récentes invitent toutefois à nuancer : beaucoup d'internautes rencontrent aussi des opinions opposées, et l'enfermement dépend autant de nos choix que des algorithmes. Le risque n'est pas une fatalité, mais il demande une vigilance active.",
              ],
            },
            {
              heading: "Mésinformation, désinformation et manipulation",
              paragraphs: [
                "On distingue la mésinformation, une information fausse partagée de bonne foi par quelqu'un qui la croit vraie, et la désinformation, une information fausse diffusée intentionnellement pour tromper, nuire ou manipuler. Les hypertrucages (deepfakes), produits par l'intelligence artificielle générative, permettent désormais de fabriquer des images, des voix ou des vidéos très réalistes de personnes qui n'ont jamais dit ou fait ce qu'on leur prête.",
                "Des États étrangers peuvent mener des campagnes de manipulation de l'information pour influencer une élection ou diviser une société, par exemple avec de faux comptes ou de faux sites d'information imitant des médias réels. En France, le service de vigilance et de protection contre les ingérences numériques étrangères (Viginum), créé en 2021, est chargé de les détecter. La loi du 22 décembre 2018 permet, dans les trois mois qui précèdent une élection nationale, de saisir le juge des référés pour faire cesser la diffusion délibérée, artificielle ou massive de fausses informations de nature à altérer la sincérité du scrutin ; il statue en 48 heures.",
              ],
              box: { label: "Méthode", text: "Avant de partager : identifier l'auteur et son intention ; retrouver la source d'origine et sa date ; recouper avec d'autres sources fiables et indépendantes ; vérifier les images par une recherche inversée ; se méfier des contenus conçus pour indigner." },
            },
            {
              heading: "Réguler les plateformes et protéger le débat",
              paragraphs: [
                "Les règles de la liberté d'expression s'appliquent en ligne comme ailleurs : la diffamation, l'injure, la provocation à la haine ou le harcèlement sont punis, même sous pseudonyme. La loi du 3 août 2018 réprime le harcèlement en meute, lorsque plusieurs personnes s'en prennent à une même victime, même si chacune n'a publié qu'un message. La plateforme Pharos, créée en 2009, permet de signaler aux autorités les contenus illicites.",
                "Depuis la loi pour la confiance dans l'économie numérique (2004), un hébergeur doit retirer promptement un contenu manifestement illicite qui lui est signalé. Le règlement européen sur les services numériques (Digital Services Act ou DSA), adopté en 2022 et applicable à toutes les plateformes depuis février 2024, impose des mécanismes de signalement, la transparence sur les systèmes de recommandation et, pour les très grandes plateformes (plus de 45 millions d'utilisateurs actifs par mois dans l'Union), une évaluation des risques qu'elles font peser sur le débat public et les élections. En France, l'Arcom, créée en 2022, veille à son application.",
              ],
              box: { label: "Repère", text: "2004 : loi pour la confiance dans l'économie numérique. 2018 : loi contre la manipulation de l'information et loi contre le harcèlement en meute. 2021 : création de Viginum. 2022 : création de l'Arcom, adoption du DSA, applicable à toutes les plateformes depuis 2024." },
            },
          ],
          keyPoints: [
            "Le numérique élargit l'espace public, mais les algorithmes fondés sur l'attention favorisent les contenus qui provoquent des réactions.",
            "Bulle de filtre (Pariser, 2011) : contenus personnalisés ; chambre d'écho : un groupe qui se renvoie les mêmes idées.",
            "Mésinformation : erreur de bonne foi. Désinformation : fausse information diffusée intentionnellement pour tromper.",
            "Vérifier : auteur, source d'origine, date, recoupement, recherche inversée d'images.",
            "Loi de 2018 contre la manipulation de l'information en période électorale ; Viginum (2021) contre les ingérences étrangères.",
            "Le DSA européen impose aux plateformes signalement, transparence et évaluation des risques pour le débat public.",
          ],
          example: {
            statement: "Une vidéo circule sur un réseau social : on y voit une foule en colère et la légende indique « Émeutes hier soir dans notre ville après la décision du maire ». Elle a été partagée des milliers de fois. Expliquez comment vérifier cette information avant de la partager.",
            solution: [
              "Prendre du recul : la légende vise à indigner, et le nombre de partages ne prouve rien (c'est un appel à la popularité).",
              "Identifier l'auteur du message : compte connu ou anonyme, récent ou ancien, habitué des contenus polémiques ?",
              "Retrouver l'origine de la vidéo : faire une recherche inversée à partir d'une image extraite ; la même vidéo a peut-être été publiée des années plus tôt, dans un autre pays.",
              "Chercher des indices dans la vidéo : panneaux, langue parlée, météo, bâtiments reconnaissables.",
              "Recouper : un événement de cette ampleur serait rapporté par la presse locale et par les autorités ; vérifier aussi les sites de vérification des faits des grands médias.",
              "Conclusion : tant que l'origine, la date et le lieu ne sont pas confirmés par des sources fiables et indépendantes, on ne partage pas ; si la vidéo est détournée, on peut le signaler et en informer ceux qui l'ont relayée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit de mésinformation ou de désinformation, en justifiant. a) Votre grand-mère partage un faux remède contre la grippe, persuadée qu'il est efficace. b) Un réseau de faux comptes publie des centaines de messages inventés pour faire croire à une fraude électorale. c) Un site imitant l'apparence d'un grand quotidien publie une fausse interview d'un ministre. d) Un élève relaie une rumeur sur la fermeture du lycée, qu'il croit vraie.",
              hint: "La différence ne tient pas au contenu, toujours faux ici, mais à l'intention de la personne qui le diffuse.",
              solution: [
                "a) Mésinformation : l'information est fausse, mais elle est partagée de bonne foi.",
                "b) Désinformation : la campagne est organisée et intentionnelle, avec de faux comptes, pour tromper les électeurs.",
                "c) Désinformation : imiter un média réel et fabriquer une interview suppose une volonté de tromper.",
                "d) Mésinformation : l'élève croit la rumeur vraie et n'a pas l'intention de tromper ; il aurait dû vérifier auprès de l'établissement.",
                "Résultat : a et d relèvent de la mésinformation, b et c de la désinformation.",
              ],
            },
            {
              level: 2,
              statement: "Vous lisez sur un réseau social le message suivant (inventé pour l'exercice), publié par un compte créé il y a deux semaines : « URGENT : une étude prouve que 9 jeunes sur 10 ne sauront plus lire d'ici 2030. Les médias vous le cachent ! Partagez avant que ce soit censuré ! » Relevez les indices qui doivent éveiller votre méfiance, puis indiquez trois vérifications à effectuer.",
              hint: "Observez la forme du message (ton, ponctuation, appel au partage), l'identité de l'auteur et l'absence de précisions sur la source.",
              solution: [
                "Indices de forme : le ton alarmiste (« URGENT »), l'appel à partager vite, la dénonciation des médias qui « cachent » l'information et l'annonce d'une censure, procédés qui jouent sur l'émotion et découragent la vérification.",
                "Indices sur l'auteur : un compte créé récemment, sans historique, qui ne donne ni nom ni qualité.",
                "Indices sur le contenu : « une étude » sans auteur, sans date, sans lien ; un chiffre spectaculaire, et une prévision présentée comme une preuve.",
                "Vérification 1 : chercher l'étude d'origine (organisme, méthode, date) ; si elle est introuvable, l'affirmation n'est pas fondée.",
                "Vérification 2 : consulter les sources institutionnelles sur la lecture des jeunes (évaluations nationales du ministère, enquêtes internationales) et les sites de vérification des faits.",
                "Vérification 3 : regarder si des médias fiables et indépendants en parlent ; s'ils n'en parlent pas, l'hypothèse la plus probable n'est pas la censure, mais la fausseté de l'information.",
                "Résultat : le message cumule les signes d'une fausse information ; on ne le partage pas sans avoir trouvé et lu la source d'origine.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Les réseaux sociaux sont-ils un danger pour le débat démocratique ? » Rédigez une réponse organisée en deux parties, puis proposez deux pistes d'action, l'une juridique, l'autre éducative.",
              hint: "Équilibrez les apports (expression, mobilisation, accès aux sources) et les risques (économie de l'attention, chambres d'écho, désinformation, harcèlement), puis appuyez-vous sur les règles vues dans le cours.",
              solution: [
                "Introduction : les réseaux sociaux sont devenus un lieu central de l'information et du débat. Leur fonctionnement renforce-t-il ou menace-t-il la discussion démocratique ?",
                "I. Des outils qui élargissent le débat : chacun peut s'exprimer et interpeller les responsables sans intermédiaire ; des causes peu visibles accèdent à l'espace public (le mouvement #MeToo en 2017) ; l'accès aux sources et aux données publiques est facilité.",
                "II. Des risques réels : les algorithmes de recommandation fondés sur l'attention favorisent les contenus qui indignent ; les chambres d'écho renforcent les certitudes ; la désinformation, les hypertrucages et les ingérences étrangères visent les élections ; le harcèlement en ligne pousse certains à se taire, ce qui appauvrit le pluralisme.",
                "Piste juridique : appliquer pleinement le règlement européen sur les services numériques (DSA), qui impose la transparence des systèmes de recommandation et l'évaluation des risques pour le débat public, et mobiliser la loi de 2018 contre la manipulation de l'information en période électorale.",
                "Piste éducative : renforcer l'éducation aux médias et à l'information, apprendre à vérifier une source, à reconnaître un hypertrucage et à diversifier ses sources d'information.",
                "Conclusion : les réseaux sociaux ne sont pas en eux-mêmes un danger, mais leur modèle économique crée des risques ; la régulation des plateformes et la formation des citoyens peuvent en faire de véritables espaces de débat.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : s'informer et débattre en ligne.",
            statements: [
              { text: "Un contenu partagé des milliers de fois est forcément vrai.", true: false, why: "Le nombre de partages mesure la popularité, pas la vérité : c'est un appel à la popularité." },
              { text: "La désinformation suppose une intention de tromper.", true: true, why: "C'est ce qui la distingue de la mésinformation, partagée de bonne foi." },
              { text: "Sous un pseudonyme, on ne peut pas être poursuivi pour un propos injurieux.", true: false, why: "Le pseudonyme ne protège pas : l'auteur peut être identifié et poursuivi comme ailleurs." },
              { text: "Les algorithmes de recommandation choisissent les contenus selon le comportement passé de l'utilisateur.", true: true, why: "Ils s'appuient sur les clics, le temps de lecture et les réactions pour ordonner les contenus." },
              { text: "Le DSA est une loi française votée par l'Assemblée nationale.", true: false, why: "C'est un règlement de l'Union européenne, directement applicable dans tous les États membres." },
              { text: "Une recherche inversée d'image permet de retrouver où et quand une photo a déjà été publiée.", true: true, why: "Elle aide à repérer une image ancienne ou sortie de son contexte." },
              { text: "Le biais de confirmation nous pousse à croire plus facilement ce qui conforte nos opinions.", true: true, why: "C'est pourquoi il faut vérifier avec plus de soin les informations qui nous plaisent." },
              { text: "Le harcèlement en ligne n'est puni que si chaque auteur a publié de nombreux messages.", true: false, why: "Depuis 2018, le harcèlement en meute est puni même si chaque personne n'a publié qu'un message." },
            ],
          },
          quiz: [
            {
              q: "Qui a popularisé l'expression « bulle de filtre » ?",
              options: ["Jürgen Habermas", "Pierre Bourdieu", "Eli Pariser", "Elisabeth Noelle-Neumann"],
              answer: 2,
              why: "Eli Pariser l'a popularisée en 2011 pour désigner l'enfermement produit par la personnalisation des contenus.",
            },
            {
              q: "Quelle est la différence entre mésinformation et désinformation ?",
              options: ["L'intention de tromper", "Le support utilisé, papier ou numérique", "Le nombre de personnes touchées par l'information", "La langue dans laquelle l'information est publiée"],
              answer: 0,
              why: "La mésinformation est partagée de bonne foi ; la désinformation est diffusée intentionnellement pour tromper.",
            },
            {
              q: "Que permet la loi du 22 décembre 2018 contre la manipulation de l'information ?",
              options: ["D'interdire tous les réseaux sociaux pendant les élections", "De supprimer le pseudonymat sur internet", "De faire cesser en référé de fausses informations massives avant une élection", "D'obliger chaque citoyen à vérifier lui-même toutes les informations qu'il partage en ligne"],
              answer: 2,
              why: "Dans les trois mois qui précèdent une élection nationale, le juge des référés peut faire cesser leur diffusion en 48 heures.",
            },
            {
              q: "Quel service français est chargé de détecter les ingérences numériques étrangères ?",
              options: ["L'Arcom, régulateur de l'audiovisuel et du numérique", "La CNIL, qui protège les données personnelles", "La Commission des sondages", "Viginum"],
              answer: 3,
              why: "Viginum, créé en 2021 et rattaché au secrétariat général de la défense et de la sécurité nationale, détecte les manipulations venues de l'étranger.",
            },
            {
              q: "Que fait le Digital Services Act (DSA) ?",
              options: ["Il impose aux plateformes des obligations de signalement et de transparence", "Il interdit les réseaux sociaux aux moins de 18 ans dans toute l'Union européenne", "Il crée une police européenne d'internet chargée de juger les auteurs", "Il supprime la responsabilité des hébergeurs pour les contenus illicites"],
              answer: 0,
              why: "Ce règlement européen encadre les plateformes : signalement, transparence des algorithmes, évaluation des risques pour les très grandes plateformes.",
            },
          ],
          trap: "Croire qu'une information est fiable parce qu'elle est très partagée, ou parce qu'elle confirme ce que l'on pense déjà : la popularité et l'accord avec nos opinions ne remplacent jamais la vérification de la source d'origine.",
          method: "Prenez l'habitude d'une règle simple avant tout partage : trente secondes pour identifier l'auteur, la source d'origine et la date. Si l'un des trois manque, ne partagez pas et cherchez une confirmation dans au moins deux sources fiables et indépendantes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'citoyennete-active',
          title: 'Être un citoyen actif',
          minutes: 30,
          objectives: [
            "Identifier les différentes formes d'engagement citoyen, du vote à l'action associative.",
            "Connaître les droits et les dispositifs qui permettent aux jeunes de s'engager.",
            "Distinguer l'engagement légal, la désobéissance civile et la violence politique.",
            "Argumenter sur les devoirs et les responsabilités du citoyen.",
          ],
          course: [
            {
              heading: "La citoyenneté : un statut et une pratique",
              paragraphs: [
                "La citoyenneté est d'abord un statut juridique : le citoyen français jouit de droits civils et politiques (voter, être élu, s'exprimer, s'associer, manifester) et il a des devoirs (respecter la loi, contribuer aux dépenses communes selon ses facultés, comme le prévoit l'article 13 de la DDHC, participer à la défense, siéger dans un jury d'assises s'il est tiré au sort). Le recensement à 16 ans et la journée défense et citoyenneté (JDC) sont obligatoires ; le certificat de la JDC est exigé pour s'inscrire aux examens comme le baccalauréat ou le permis de conduire avant 25 ans.",
                "La citoyenneté est aussi une pratique : être un citoyen actif, c'est s'intéresser aux affaires communes, s'informer, débattre et agir. Le vote en est la forme la plus connue. En France, il n'est pas obligatoire, mais la carte électorale rappelle que voter est un droit et aussi un devoir civique. Depuis une loi de 1997, les jeunes recensés sont inscrits d'office sur les listes électorales à 18 ans ; les citoyens européens résidant en France peuvent voter aux élections municipales et européennes.",
              ],
              box: { label: "Définition", text: "La citoyenneté active désigne la participation volontaire d'un citoyen à la vie de la cité, au-delà du simple respect de la loi : voter, s'informer, débattre, s'engager dans une association, un syndicat, un parti ou un projet d'intérêt général." },
            },
            {
              heading: "Les formes de l'engagement",
              paragraphs: [
                "Le citoyen peut adhérer à un parti, à un syndicat ou à une association, faire du bénévolat, signer ou lancer une pétition (le CESE peut être saisi par 150 000 signataires de 16 ans ou plus), participer à une consultation publique ou à un budget participatif. Il peut aussi manifester : la manifestation sur la voie publique est libre, mais elle doit être déclarée à la mairie ou à la préfecture au moins trois jours francs et au plus quinze jours francs avant, et l'autorité peut l'interdire en cas de menace grave pour l'ordre public.",
                "Les jeunes disposent de nombreux espaces d'engagement : délégués de classe, conseil de la vie lycéenne (CVL), éco-délégués, maison des lycéens ; association dès 16 ans ; service civique, créé par la loi du 10 mars 2010, qui permet aux 16-25 ans (jusqu'à 30 ans pour les jeunes en situation de handicap) d'effectuer une mission d'intérêt général indemnisée de six à douze mois ; engagement comme sapeur-pompier volontaire ou dans la réserve.",
              ],
              box: { label: "Repère", text: "16 ans : recensement, possibilité de créer une association et de signer une pétition au CESE, accès au service civique. 18 ans : droit de vote et inscription d'office sur les listes électorales. Avant 25 ans : certificat de la JDC exigé pour les examens." },
            },
            {
              heading: "Désobéissance civile et lanceurs d'alerte",
              paragraphs: [
                "Que faire lorsqu'une loi paraît injuste ? Dans un essai publié en 1849, connu sous le titre La Désobéissance civile, l'Américain Henry David Thoreau explique pourquoi il a refusé de payer un impôt, ce qui lui a valu une nuit de prison en 1846 : il ne voulait pas financer un État qui tolérait l'esclavage et menait la guerre contre le Mexique. Gandhi (marche du sel, 1930) et Martin Luther King (boycott des bus de Montgomery, 1955-1956) ont fait de la désobéissance non violente une arme politique.",
                "Le philosophe américain John Rawls, dans Théorie de la justice (1971), la définit comme un acte public, non violent, décidé en conscience, contraire à la loi et accompli pour obtenir un changement de la loi ou de la politique du gouvernement. Celui qui désobéit agit à visage découvert et accepte en principe la sanction : il en appelle au sens de la justice de la majorité. La désobéissance civile se distingue ainsi de la délinquance (agir caché, pour son intérêt) et de la violence politique, qui est incompatible avec le débat démocratique. Elle reste illégale et peut être sanctionnée.",
                "Le lanceur d'alerte, lui, agit dans un cadre légal : la loi Sapin II (2016), renforcée par la loi du 21 mars 2022, protège la personne physique qui signale ou divulgue, sans contrepartie financière directe et de bonne foi, des informations sur un crime, un délit, une menace ou un préjudice pour l'intérêt général. Elle ne peut pas être licenciée ou sanctionnée pour ce signalement.",
              ],
              box: { label: "Définition", text: "La désobéissance civile est un refus public, collectif ou individuel, non violent et assumé d'obéir à une loi jugée injuste, au nom de principes supérieurs, dans le but de la faire changer ; ses auteurs acceptent en principe d'en subir les conséquences légales." },
            },
          ],
          keyPoints: [
            "La citoyenneté est un statut (droits et devoirs) et une pratique (participation active à la vie de la cité).",
            "Le vote est un droit et un devoir civique, mais il n'est pas obligatoire en France ; inscription d'office à 18 ans.",
            "Engagements possibles : parti, syndicat, association, bénévolat, pétition, manifestation déclarée, service civique dès 16 ans.",
            "Désobéissance civile (Thoreau, Gandhi, King, Rawls) : publique, non violente, en conscience, pour changer une loi jugée injuste.",
            "Le lanceur d'alerte est protégé par la loi (Sapin II, 2016 ; loi du 21 mars 2022) lorsqu'il signale de bonne foi des faits graves.",
          ],
          example: {
            statement: "Des militants écologistes s'enchaînent, à visage découvert et sans violence, aux grilles d'un ministère pour réclamer l'abandon d'un projet d'aéroport. Ils préviennent la presse et attendent l'arrivée de la police. S'agit-il de désobéissance civile ? Justifiez avec les critères de Rawls.",
            solution: [
              "Acte contraire à la loi : l'action n'a pas été déclarée et elle bloque l'accès à un bâtiment public.",
              "Acte public : les militants agissent à visage découvert et préviennent la presse.",
              "Acte non violent : aucune violence contre les personnes ni dégradation n'est commise.",
              "Acte de conscience à visée politique : ils veulent faire changer une décision publique au nom de l'intérêt général (la protection du climat et de la biodiversité).",
              "Acceptation de la sanction : ils attendent la police et assument les conséquences légales.",
              "Conclusion : tous les critères de Rawls sont réunis ; il s'agit d'un acte de désobéissance civile, qui reste illégal et peut être sanctionné, mais qui se distingue d'une action violente ou clandestine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, dites si elle relève d'un engagement légal, de la désobéissance civile ou de la violence politique : a) signer une pétition adressée au CESE ; b) organiser un sit-in non violent et non déclaré devant une préfecture, à visage découvert, pour protester contre l'expulsion d'une famille ; c) incendier la permanence d'un député ; d) effectuer une mission de service civique dans une association d'aide aux devoirs ; e) participer à une manifestation déclarée en préfecture.",
              hint: "Demandez-vous si l'action respecte la loi, et si elle ne la respecte pas, si elle est publique et non violente.",
              solution: [
                "a) Engagement légal : la pétition est un droit, et le CESE peut être saisi par 150 000 signataires.",
                "b) Désobéissance civile : l'action est illégale (non déclarée), mais publique, non violente et motivée par une cause d'intérêt général.",
                "c) Violence politique : l'incendie porte atteinte aux biens et met des personnes en danger ; c'est un crime incompatible avec le débat démocratique.",
                "d) Engagement légal : le service civique est un dispositif public d'engagement.",
                "e) Engagement légal : la manifestation déclarée est une liberté protégée.",
                "Résultat : a, d et e sont des engagements légaux ; b relève de la désobéissance civile ; c de la violence politique.",
              ],
            },
            {
              level: 2,
              statement: "Inès a 16 ans et demi. Elle veut agir pour l'environnement dans sa ville. Proposez-lui quatre formes d'engagement possibles à son âge, en précisant pour chacune la règle ou le dispositif qui la rend possible, puis indiquez ce qui changera pour elle à 18 ans.",
              hint: "Pensez au lycée, aux associations, au service civique et aux pétitions, puis aux droits politiques acquis à la majorité.",
              solution: [
                "Au lycée : se présenter comme éco-déléguée ou au conseil de la vie lycéenne (CVL), qui donne un avis sur la vie de l'établissement.",
                "Dans une association : adhérer à une association environnementale, ou en créer une avec d'autres jeunes, ce que la loi permet depuis 2017 à partir de 16 ans.",
                "Service civique : effectuer une mission indemnisée de six à douze mois dans une association ou une collectivité, ouverte dès 16 ans par la loi du 10 mars 2010.",
                "Pétition : signer ou lancer une pétition, par exemple au CESE, qui accepte les signataires dès 16 ans et peut être saisi à partir de 150 000 signatures.",
                "À 18 ans : Inès sera inscrite d'office sur les listes électorales si elle a été recensée ; elle pourra voter, se présenter aux élections municipales et adhérer à un parti pour peser sur les décisions.",
                "Résultat : Inès peut déjà s'engager de multiples façons ; la majorité lui ouvrira en plus le vote et l'éligibilité.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « La désobéissance civile peut-elle être une forme légitime d'engagement citoyen dans une démocratie ? » Rédigez une réponse organisée en deux parties, en mobilisant au moins deux auteurs ou exemples historiques.",
              hint: "Distinguez légalité et légitimité. Montrez d'abord ce qui fait la force de la désobéissance civile, puis les objections qu'on peut lui faire dans un État démocratique où existent d'autres moyens d'action.",
              solution: [
                "Introduction : la désobéissance civile est un refus public et non violent d'obéir à une loi jugée injuste. En démocratie, la loi est votée par les représentants du peuple : désobéir peut-il alors être légitime ?",
                "I. Une forme d'engagement qui peut être légitime. Une loi votée peut être injuste : la ségrégation raciale était légale dans le sud des États-Unis, et le boycott des bus de Montgomery (1955-1956), mené notamment par Martin Luther King, a contribué à y mettre fin. Thoreau (1849) affirme que la conscience ne doit pas s'effacer devant la loi. Pour Rawls, la désobéissance civile, publique, non violente et assumée, s'adresse au sens de la justice de la majorité et peut corriger une démocratie.",
                "II. Une forme d'engagement qui doit rester exceptionnelle. En démocratie, d'autres moyens existent : vote, pétition, manifestation, recours devant le juge, saisine du Conseil constitutionnel par les parlementaires. Si chacun désobéissait aux lois qui lui déplaisent, l'égalité devant la loi serait menacée. C'est pourquoi la désobéissance civile doit respecter des conditions strictes : non-violence, publicité, acceptation de la sanction, échec des autres voies.",
                "Conclusion : la désobéissance civile n'est pas légale, mais elle peut être légitime lorsqu'elle respecte ses critères et vise à rendre la loi plus juste ; elle n'est un engagement démocratique que si elle reste non violente et ouverte au débat.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion ou dispositif à ce qu'il désigne.",
            pairs: [
              { left: "Service civique", right: "Mission d'intérêt général indemnisée, ouverte aux 16-25 ans" },
              { left: "Désobéissance civile", right: "Refus public et non violent d'obéir à une loi jugée injuste" },
              { left: "Lanceur d'alerte", right: "Personne protégée qui signale de bonne foi des faits graves" },
              { left: "Journée défense et citoyenneté", right: "Journée obligatoire dont le certificat est exigé pour les examens" },
              { left: "Conseil de la vie lycéenne", right: "Instance où des lycéens élus donnent leur avis sur la vie de l'établissement" },
              { left: "Inscription d'office", right: "Inscription automatique sur les listes électorales des jeunes recensés à 18 ans" },
            ],
          },
          quiz: [
            {
              q: "Le vote est-il obligatoire en France ?",
              options: ["Oui, depuis 1997", "Non, c'est un droit et un devoir civique", "Oui, mais seulement pour l'élection présidentielle", "Oui, sous peine d'amende pour toutes les élections"],
              answer: 1,
              why: "Le vote n'est pas obligatoire ; la carte électorale rappelle qu'il est un droit et un devoir civique. La loi de 1997 a créé l'inscription d'office.",
            },
            {
              q: "Quel auteur a écrit l'essai connu sous le titre La Désobéissance civile ?",
              options: ["John Rawls", "Martin Luther King", "Alexis de Tocqueville", "Henry David Thoreau"],
              answer: 3,
              why: "Thoreau publie ce texte en 1849, après avoir refusé de payer un impôt pour protester contre l'esclavage et la guerre du Mexique.",
            },
            {
              q: "Quel critère ne fait pas partie de la définition de la désobéissance civile selon Rawls ?",
              options: ["L'acte est accompli publiquement, à visage découvert", "L'acte est non violent", "L'acte reste caché pour éviter la sanction", "L'acte vise à obtenir un changement de la loi"],
              answer: 2,
              why: "La désobéissance civile se fait à visage découvert et son auteur accepte en principe la sanction ; agir caché relève d'une autre logique.",
            },
            {
              q: "À partir de quel âge peut-on effectuer un service civique ?",
              options: ["16 ans", "14 ans", "18 ans", "21 ans"],
              answer: 0,
              why: "Le service civique, créé en 2010, est ouvert aux 16-25 ans, et jusqu'à 30 ans pour les jeunes en situation de handicap.",
            },
            {
              q: "Que doivent faire les organisateurs d'une manifestation sur la voie publique ?",
              options: ["Obtenir une autorisation du ministre de l'Intérieur un mois à l'avance", "La déclarer à la mairie ou à la préfecture quelques jours avant", "Réunir au moins 1 000 participants inscrits à l'avance", "Rien, aucune démarche n'est prévue par la loi"],
              answer: 1,
              why: "La manifestation est libre mais soumise à déclaration préalable, entre trois et quinze jours francs avant ; l'autorité peut l'interdire en cas de menace grave pour l'ordre public.",
            },
          ],
          trap: "Confondre désobéissance civile et violence ou délinquance : la désobéissance civile est publique, non violente et assumée, et vise à changer une loi ; elle n'en reste pas moins illégale, donc susceptible de sanction.",
          method: "Pour caractériser une action militante, appliquez une grille en cinq questions : est-elle légale ? publique ? non violente ? motivée par l'intérêt général ? ses auteurs acceptent-ils la sanction ? Les réponses permettent de la classer et d'argumenter sur sa légitimité.",
        },
      ],
    },
    /* ==================================================================== */
    /* PENSER LA DÉLIBÉRATION : ATHÈNES, ROUSSEAU, TOCQUEVILLE               */
    /* ==================================================================== */
    {
      id: 'penser-la-deliberation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'athenes',
          title: 'Athènes : délibérer dans la cité',
          minutes: 30,
          objectives: [
            "Décrire les institutions de la démocratie athénienne et leur fonctionnement à l'époque classique.",
            "Expliquer les principes d'isonomie, d'iségorie et de tirage au sort.",
            "Analyser les limites de la citoyenneté athénienne et les critiques adressées à la démocratie.",
            "Comparer la délibération athénienne et la démocratie représentative contemporaine.",
          ],
          course: [
            {
              heading: "La naissance d'une démocratie",
              paragraphs: [
                "Athènes est une cité-État grecque, dont le territoire couvre l'Attique. Au début du VIe siècle av. J.-C., l'archonte Solon (vers 594 av. J.-C.) abolit l'esclavage pour dettes. En 508-507 av. J.-C., Clisthène réorganise la cité : il répartit les citoyens en dix tribus qui mêlent des habitants de la ville, de la côte et de l'intérieur, pour briser l'influence des grandes familles, et il crée un conseil de 500 membres, la Boulè. Le mot démocratie (dêmos, le peuple ; kratos, le pouvoir) désigne ce régime où le pouvoir appartient à l'ensemble des citoyens.",
                "Au Ve siècle, la démocratie s'approfondit : en 462 av. J.-C., Éphialte retire l'essentiel de ses pouvoirs politiques à l'Aréopage, conseil aristocratique d'anciens magistrats ; Périclès, élu stratège presque chaque année jusqu'à sa mort en 429 av. J.-C., fait instituer une indemnité (le misthos) pour les citoyens qui siègent dans les tribunaux, afin que les plus pauvres puissent y participer. Dans l'oraison funèbre que lui prête l'historien Thucydide, les Athéniens ne voient pas dans la discussion un obstacle à l'action, mais la condition préalable de toute action réfléchie.",
              ],
              box: { label: "Repère", text: "Vers 594 av. J.-C. : réformes de Solon. 508-507 : réformes de Clisthène. 462 : réforme d'Éphialte. 451 : loi de Périclès sur la citoyenneté. 429 : mort de Périclès. 404-403 : régime des Trente puis rétablissement de la démocratie. 399 : condamnation de Socrate." },
            },
            {
              heading: "Les institutions de la délibération",
              paragraphs: [
                "L'Ecclésia est l'assemblée de tous les citoyens. Elle se réunit sur la colline de la Pnyx, environ quarante fois par an au IVe siècle. Elle vote les lois et les décrets, décide de la guerre et de la paix, élit certains magistrats et peut prononcer l'ostracisme, qui exile pour dix ans un citoyen jugé dangereux pour la cité, sans le priver de ses biens ; cette procédure exige au moins 6 000 votants. On vote le plus souvent à main levée.",
                "La Boulè, ou Conseil des Cinq-Cents, réunit 50 citoyens de plus de 30 ans tirés au sort dans chacune des dix tribus, pour un an ; on ne peut y siéger que deux fois dans sa vie. Elle prépare les textes soumis à l'Assemblée (le probouleuma) et gère les affaires courantes ; les 50 membres d'une même tribu assurent à tour de rôle une permanence pendant un dixième de l'année. L'Héliée, le tribunal populaire, s'appuie chaque année sur une liste de 6 000 citoyens de plus de 30 ans tirés au sort, qui forment des jurys de plusieurs centaines de membres.",
                "La plupart des magistrats sont tirés au sort pour un an et doivent rendre des comptes en fin de mandat. Seuls certains postes exigeant une compétence particulière sont pourvus par l'élection : c'est le cas des dix stratèges, qui commandent l'armée et la flotte. Au début du IVe siècle, après le rétablissement de la démocratie en 403, une indemnité est aussi versée aux citoyens qui assistent à l'Assemblée.",
              ],
            },
            {
              heading: "Les principes : isonomie, iségorie, tirage au sort",
              paragraphs: [
                "L'isonomie est l'égalité des citoyens devant la loi ; l'iségorie, leur égal droit à la parole à l'Assemblée. À l'ouverture des débats, le héraut demande : « Qui veut prendre la parole ? » Tout citoyen peut proposer un décret, le défendre ou le combattre. Pour éviter les abus, une procédure, la graphè paranomôn, permet de poursuivre devant les tribunaux l'auteur d'une proposition contraire aux lois.",
                "Le tirage au sort exprime l'égalité : chacun est jugé capable de gouverner et d'être gouverné à son tour, et la rotation rapide des charges empêche la formation d'une caste de professionnels de la politique. Au IVe siècle, les Athéniens utilisent même une machine à tirer au sort, le klérotérion. Aristote, dans la Politique, juge démocratique la désignation des magistrats par le sort, et oligarchique leur désignation par l'élection, qui favorise les plus riches et les plus connus.",
              ],
              box: { label: "Définition", text: "Isonomie : égalité de tous les citoyens devant la loi. Iségorie : égal droit de chaque citoyen à prendre la parole à l'Assemblée. Misthos : indemnité versée aux citoyens qui exercent une charge publique, pour permettre aux plus pauvres de participer." },
            },
            {
              heading: "Limites et critiques",
              paragraphs: [
                "La citoyenneté est très restrictive : seuls les hommes adultes nés de parents athéniens sont citoyens. Depuis la loi de Périclès de 451 av. J.-C., il faut un père et une mère athéniens. Les femmes, les métèques (étrangers résidant à Athènes, souvent artisans ou commerçants) et les esclaves, très nombreux, en sont exclus : les citoyens ne forment qu'une minorité de la population de l'Attique. La démocratie athénienne repose aussi sur la domination exercée sur les cités alliées de la ligue de Délos.",
                "Les critiques sont anciennes. Platon, dans la République et le Gorgias, accuse la démocratie de livrer la cité aux orateurs habiles qui flattent la foule au lieu de rechercher le bien commun. Les Athéniens ont pris des décisions passionnées : en 406, après la bataille navale des Arginuses, l'Assemblée condamne à mort d'un seul vote plusieurs stratèges vainqueurs, en violation des règles ; en 399, un tribunal populaire condamne Socrate à mort. Aristote répond pourtant que la foule, quand chacun apporte sa part de vertu et de jugement, peut décider mieux qu'un petit nombre d'hommes excellents, comme un repas auquel beaucoup contribuent est plus riche qu'un repas offert par un seul.",
                "Les démocraties modernes ont fait un autre choix. Le politiste Bernard Manin (Principes du gouvernement représentatif, 1995) montre que leurs fondateurs, au XVIIIe siècle, ont préféré l'élection, pourtant considérée depuis l'Antiquité comme aristocratique, au tirage au sort. Celui-ci revient aujourd'hui dans les conventions citoyennes et les panels délibératifs.",
              ],
            },
          ],
          keyPoints: [
            "Clisthène (508-507 av. J.-C.) fonde la démocratie : dix tribus, Boulè des Cinq-Cents.",
            "Ecclésia : assemblée de tous les citoyens sur la Pnyx ; Boulè : 500 citoyens tirés au sort qui préparent les décisions ; Héliée : tribunal populaire.",
            "Principes : isonomie (égalité devant la loi), iségorie (égal droit à la parole), tirage au sort et rotation des charges ; seuls les stratèges sont élus.",
            "Le misthos, institué par Périclès pour les juges, permet aux pauvres de participer.",
            "Citoyenneté restreinte : femmes, métèques et esclaves exclus ; loi de Périclès en 451.",
            "Critiques de Platon (démagogie) ; Aristote défend la sagesse de la foule et juge le tirage au sort démocratique.",
          ],
          example: {
            statement: "Pourquoi les Athéniens tiraient-ils au sort les membres de la Boulè, mais élisaient-ils les stratèges ? Que révèle ce choix de leur conception de la démocratie ?",
            solution: [
              "Rappeler les faits : les 500 bouleutes sont tirés au sort, 50 par tribu, pour un an ; les dix stratèges, chefs militaires, sont élus et peuvent être réélus, comme Périclès.",
              "Expliquer le tirage au sort : il traduit l'égalité des citoyens, tous jugés capables de préparer les décisions ; la rotation empêche qu'un petit groupe monopolise le pouvoir.",
              "Expliquer l'élection des stratèges : commander une armée ou une flotte exige une compétence technique ; une erreur peut coûter la guerre, on choisit donc les plus capables.",
              "Ajouter le contrôle : tirés au sort ou élus, les magistrats rendent des comptes en fin de mandat et peuvent être poursuivis.",
              "Interpréter : les Athéniens ne pensent pas que gouverner soit un métier ; ils réservent l'élection aux domaines où la compétence est décisive.",
              "Conclusion : ce double choix révèle une démocratie fondée sur l'égalité politique des citoyens, qui accepte l'élection seulement comme une exception justifiée par la compétence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque institution ou procédure à son rôle : Ecclésia ; Boulè ; Héliée ; stratèges ; ostracisme. Rôles : a) préparer les textes soumis à l'Assemblée ; b) commander l'armée et la flotte ; c) voter les lois, décider de la guerre et de la paix ; d) juger les procès ; e) exiler pour dix ans un citoyen jugé dangereux.",
              hint: "Repérez d'abord l'assemblée de tous les citoyens et le conseil qui prépare son travail, puis les fonctions judiciaire et militaire.",
              solution: [
                "Ecclésia : c) voter les lois, décider de la guerre et de la paix ; c'est l'assemblée de tous les citoyens.",
                "Boulè : a) préparer les textes soumis à l'Assemblée et gérer les affaires courantes.",
                "Héliée : d) juger les procès, avec des jurys de citoyens tirés au sort.",
                "Stratèges : b) commander l'armée et la flotte ; ce sont dix magistrats élus.",
                "Ostracisme : e) exiler pour dix ans un citoyen, par un vote de l'Assemblée réunissant au moins 6 000 votants.",
                "Résultat : Ecclésia-c, Boulè-a, Héliée-d, stratèges-b, ostracisme-e.",
              ],
            },
            {
              level: 2,
              statement: "Hypothèse simplifiée pour l'exercice : Athènes compte 30 000 citoyens de plus de 30 ans, et l'on peut siéger à la Boulè entre 30 et 60 ans. 1) Combien de places de bouleute sont disponibles en 30 ans ? 2) Si chacun ne siégeait qu'une fois, quelle part des citoyens de plus de 30 ans aurait siégé au cours de ces 30 années ? 3) Comparez avec la France : 577 députés pour environ 49 millions d'électeurs inscrits. Que montre ce calcul ?",
              hint: "Multipliez le nombre de bouleutes par le nombre d'années, puis comparez au nombre de citoyens. Pour la France, calculez combien d'électeurs il y a pour un député.",
              solution: [
                "1) 500 bouleutes par an × 30 ans = 15 000 places.",
                "2) 15 000 ÷ 30 000 = 0,5 : dans cette hypothèse, la moitié des citoyens de plus de 30 ans aurait siégé une fois à la Boulè au cours de sa vie.",
                "3) En France : 49 000 000 ÷ 577 ≈ 85 000 électeurs pour un député. La probabilité de devenir député est infime.",
                "Interprétation : à Athènes, exercer une charge publique était une expérience commune à une grande partie des citoyens, alors que dans une démocratie représentative, gouverner est réservé à un petit nombre d'élus.",
                "Résultat : environ la moitié des citoyens athéniens de plus de 30 ans aurait siégé à la Boulè, contre une infime minorité des électeurs français à l'Assemblée nationale ; la démocratie athénienne est une démocratie de participation directe, mais réservée à une minorité de la population.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (analyse de document). Document : paraphrase d'un passage de l'oraison funèbre de Périclès rapportée par Thucydide (Histoire de la guerre du Péloponnèse, livre II, prononcée en 431 av. J.-C.) : les Athéniens s'occupent à la fois de leurs affaires privées et des affaires publiques ; celui qui se tient à l'écart de la vie politique n'est pas considéré comme un homme paisible, mais comme un inutile ; ils jugent par eux-mêmes des affaires et pensent que la discussion, loin de nuire à l'action, est indispensable pour agir de façon réfléchie. Question : présentez le document, montrez ce qu'il révèle de la conception athénienne de la délibération, puis nuancez cet éloge à l'aide de vos connaissances.",
              hint: "Situez l'orateur et le contexte (début de la guerre du Péloponnèse), puis reliez les idées du texte aux institutions (Ecclésia, iségorie). Pour nuancer, pensez aux exclus de la citoyenneté et aux critiques de Platon.",
              solution: [
                "Présentation : il s'agit d'un discours attribué par l'historien athénien Thucydide à Périclès, stratège et principal dirigeant d'Athènes, prononcé en 431 av. J.-C. en l'honneur des soldats morts dans la première année de la guerre du Péloponnèse contre Sparte. C'est un éloge de la démocratie athénienne, reconstruit par l'historien.",
                "Une participation attendue de tous : selon le texte, s'occuper des affaires publiques est un devoir du citoyen ; celui qui s'en désintéresse est jugé inutile. Cela correspond à l'Ecclésia, ouverte à tous les citoyens, et au tirage au sort qui associe beaucoup d'entre eux aux charges.",
                "La discussion comme condition de l'action : le texte affirme que débattre avant de décider rend l'action plus sûre. C'est le principe de l'iségorie : chacun peut prendre la parole à l'Assemblée et proposer ou combattre un décret.",
                "Nuance 1 : cet éloge concerne une minorité ; les femmes, les métèques et les esclaves sont exclus, et la puissance d'Athènes repose sur la domination de ses alliés de la ligue de Délos.",
                "Nuance 2 : la délibération collective a aussi produit des décisions passionnées, comme la condamnation des stratèges après la bataille des Arginuses (406) ou la mort de Socrate (399) ; Platon y voit le règne de la démagogie.",
                "Conclusion : le document exprime un idéal de citoyenneté active et de délibération qui inspire encore les démocraties ; il faut pourtant le lire comme un discours d'éloge, dont la réalité athénienne était plus limitée et plus fragile.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la démocratie athénienne dans l'ordre chronologique.",
            items: [
              "Solon abolit l'esclavage pour dettes",
              "Clisthène crée les dix tribus et la Boulè des Cinq-Cents",
              "Éphialte retire l'essentiel de ses pouvoirs politiques à l'Aréopage",
              "Une loi de Périclès réserve la citoyenneté aux enfants de père et de mère athéniens",
              "Mort de Périclès pendant la guerre du Péloponnèse",
              "Rétablissement de la démocratie après le régime des Trente",
              "Un tribunal populaire condamne Socrate à mort",
            ],
          },
          quiz: [
            {
              q: "Que désigne l'iségorie à Athènes ?",
              options: ["L'égalité devant la loi", "L'égal droit de chaque citoyen à prendre la parole à l'Assemblée", "L'indemnité versée aux juges et aux membres de l'Assemblée", "L'exil de dix ans prononcé par l'Assemblée contre un citoyen jugé dangereux"],
              answer: 1,
              why: "L'iségorie est l'égal droit à la parole ; l'isonomie est l'égalité devant la loi, le misthos l'indemnité, l'ostracisme l'exil.",
            },
            {
              q: "Comment étaient désignés les stratèges athéniens ?",
              options: ["Par tirage au sort parmi tous les citoyens", "Par hérédité dans les grandes familles", "Par élection", "Par l'Aréopage, parmi les anciens archontes"],
              answer: 2,
              why: "Les dix stratèges étaient élus et rééligibles, car le commandement militaire exigeait une compétence particulière.",
            },
            {
              q: "Qui était exclu de la citoyenneté athénienne ?",
              options: ["Les femmes, les métèques et les esclaves", "Les paysans de l'Attique qui ne possédaient pas de terre en ville", "Les hommes nés de père et de mère athéniens", "Les artisans et les marins de la flotte athénienne"],
              answer: 0,
              why: "Seuls les hommes adultes nés de parents athéniens étaient citoyens ; femmes, métèques et esclaves étaient exclus.",
            },
            {
              q: "Selon Aristote, quel mode de désignation des magistrats est démocratique ?",
              options: ["L'élection", "La cooptation par les magistrats sortants", "La naissance", "Le tirage au sort"],
              answer: 3,
              why: "Aristote juge le tirage au sort démocratique et l'élection oligarchique, car elle favorise les plus riches et les plus connus.",
            },
            {
              q: "Quel est le rôle principal de la Boulè ?",
              options: ["Juger les procès criminels", "Préparer les textes soumis à l'Assemblée", "Commander la flotte athénienne en temps de guerre", "Désigner les prêtres des sanctuaires de la cité"],
              answer: 1,
              why: "Le Conseil des Cinq-Cents prépare les décisions de l'Ecclésia (le probouleuma) et gère les affaires courantes.",
            },
          ],
          trap: "Idéaliser Athènes comme une démocratie de tous : la citoyenneté excluait les femmes, les métèques et les esclaves, si bien que la délibération ne concernait qu'une minorité de la population.",
          method: "Pour retenir les institutions athéniennes, construisez un tableau en quatre colonnes (institution, composition, mode de désignation, rôle) pour l'Ecclésia, la Boulè, l'Héliée et les stratèges, puis comparez chaque ligne avec une institution française actuelle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rousseau-volonte-generale',
          title: 'Rousseau : la volonté générale',
          minutes: 30,
          objectives: [
            "Expliquer le problème que veut résoudre le contrat social selon Rousseau.",
            "Distinguer la volonté générale et la volonté de tous.",
            "Analyser la critique rousseauiste de la représentation et ses conséquences pour la délibération.",
            "Mesurer l'héritage de Rousseau dans les textes fondamentaux de la République française.",
          ],
          course: [
            {
              heading: "Le problème du Contrat social",
              paragraphs: [
                "Jean-Jacques Rousseau (1712-1778), né à Genève, publie Du contrat social en 1762. Le livre s'ouvre sur un constat célèbre : « L'homme est né libre, et partout il est dans les fers. » Rousseau ne cherche pas à expliquer comment ce changement s'est produit, mais ce qui peut rendre l'autorité politique légitime. La force ne fonde aucun droit : on cède à la force par nécessité, non par devoir, et l'obligation cesse quand la force disparaît. Seule une convention entre les hommes peut fonder une autorité légitime.",
                "Le problème est alors de trouver une forme d'association qui protège chaque membre de toute la force commune, et par laquelle chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. La solution est le pacte social : chacun se donne entièrement, avec tous ses droits, à la communauté. Comme tous se donnent de la même façon, la condition est égale pour tous, et personne n'a intérêt à la rendre pesante aux autres. Le peuple ainsi formé devient le souverain.",
              ],
              box: { label: "À retenir", text: "Pour Rousseau, la force ne fait pas le droit : seule une convention fonde une autorité légitime. Par le pacte social, chacun s'unit à tous et devient membre du peuple souverain, de sorte qu'en obéissant à la loi commune il n'obéit qu'à lui-même." },
            },
            {
              heading: "Volonté générale et volonté de tous",
              paragraphs: [
                "La volonté générale est la volonté du peuple en tant que corps politique, tournée vers l'intérêt commun. Rousseau la distingue de la volonté de tous, qui n'est que la somme des volontés particulières, chacune tournée vers un intérêt privé. Si chacun vote en se demandant ce qui l'arrange, on obtient la volonté de tous ; s'il se demande ce qui est bon pour la communauté dont il fait partie, il exprime la volonté générale.",
                "Selon Rousseau, la volonté générale est toujours droite, mais le peuple peut se tromper : on veut toujours son bien, on ne le voit pas toujours. Le danger principal vient des « brigues » et des associations partielles (les factions) : quand des groupes se forment, chacun d'eux impose à ses membres une volonté commune au groupe, mais particulière par rapport à l'État. Rousseau souhaite donc que chaque citoyen se prononce d'après lui-même ; s'il doit exister des groupes, mieux vaut qu'ils soient nombreux et égaux.",
              ],
              box: { label: "Définition", text: "Volonté générale : volonté du peuple considéré comme un corps, qui vise l'intérêt commun et s'exprime dans la loi. Volonté de tous : simple addition des volontés particulières, qui visent chacune un intérêt privé." },
            },
            {
              heading: "La loi, la liberté et la règle de la majorité",
              paragraphs: [
                "La loi est l'acte par lequel le peuple statue sur le peuple tout entier : elle est générale par son origine (elle vient de tous) et par son objet (elle s'applique à tous). C'est pourquoi, en obéissant à la loi, le citoyen reste libre : pour Rousseau, l'obéissance à la loi qu'on s'est prescrite est liberté. Il va jusqu'à écrire que celui qui refuse d'obéir à la volonté générale y sera contraint, ce qui signifie qu'on le forcera d'être libre ; la formule a suscité de nombreuses critiques.",
                "Seul le pacte initial exige l'unanimité ; ensuite, la majorité oblige tous les citoyens. Lorsqu'on vote une loi, explique Rousseau, on ne demande pas à chacun s'il approuve ou rejette la proposition, mais si elle est conforme à la volonté générale. Si l'avis contraire au mien l'emporte, cela prouve seulement que je m'étais trompé sur ce qu'était la volonté générale. Benjamin Constant, dans De la liberté des Anciens comparée à celle des Modernes (1819), reprochera à Rousseau de sacrifier l'indépendance individuelle à la souveraineté collective.",
              ],
            },
            {
              heading: "Contre la représentation, et son héritage",
              paragraphs: [
                "Pour Rousseau, la souveraineté ne peut pas être représentée, pour la même raison qu'elle ne peut pas être aliénée : une volonté ne se transmet pas. Les députés du peuple ne sont donc que ses commissaires, et toute loi que le peuple n'a pas ratifiée en personne est nulle. Il ironise sur le peuple anglais, qui se croit libre mais ne l'est, selon lui, que pendant l'élection des membres du Parlement. Rousseau pense surtout à de petits États comme Genève ; dans ses Considérations sur le gouvernement de Pologne, il admet des députés, mais tenus par les instructions de leurs électeurs.",
                "La Révolution reprend l'idée et la transforme. L'article 6 de la DDHC affirme que « la loi est l'expression de la volonté générale », mais ajoute que les citoyens concourent à sa formation personnellement ou par leurs représentants. Sieyès défend au contraire la souveraineté nationale exercée par des représentants. La Constitution de 1958 fait une synthèse : la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum (article 3), et tout mandat impératif est nul (article 27).",
              ],
              box: { label: "Repère", text: "1762 : Du contrat social. 1789 : DDHC, article 6 (la loi, expression de la volonté générale). 1958 : Constitution, article 3 (représentants et référendum) et article 27 (interdiction du mandat impératif)." },
            },
          ],
          keyPoints: [
            "Du contrat social (1762) : la force ne fait pas le droit ; seule une convention fonde l'autorité légitime.",
            "Par le pacte social, chacun se donne à tous ; le peuple devient souverain et, en obéissant à la loi, chacun n'obéit qu'à lui-même.",
            "Volonté générale (intérêt commun) et volonté de tous (somme des intérêts privés) ne se confondent pas.",
            "Rousseau se méfie des factions et refuse que la souveraineté soit représentée.",
            "Héritage : DDHC, article 6 ; Constitution de 1958, article 3 (représentants et référendum) et article 27.",
          ],
          example: {
            statement: "Dans une commune (situation fictive), on vote sur la construction d'une piscine. Chaque habitant vote en fonction de la distance entre la piscine et sa maison. Le résultat exprime-t-il la volonté générale au sens de Rousseau ?",
            solution: [
              "Définir la volonté générale : c'est la volonté du peuple comme corps politique, tournée vers l'intérêt commun.",
              "Définir la volonté de tous : c'est la somme des volontés particulières, chacune guidée par un intérêt privé.",
              "Analyser la situation : chaque habitant se demande ce qui l'arrange personnellement (la distance à sa maison), et non ce qui est bon pour la commune.",
              "Conclure sur la nature du vote : le résultat additionne des intérêts privés ; il exprime la volonté de tous, même s'il est majoritaire.",
              "Montrer ce qu'exigerait Rousseau : chacun devrait se demander où la piscine servira le mieux l'ensemble des habitants (accessibilité, coût, écoles proches).",
              "Conclusion : non, ce vote n'exprime pas la volonté générale ; pour Rousseau, la majorité ne suffit pas, il faut que chaque citoyen vote en visant l'intérêt commun.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases avec les notions qui conviennent (volonté générale, volonté de tous, pacte social, souverain, représentation). a) L'acte par lequel chacun s'unit à tous est le... b) Le peuple ainsi formé est le... c) La volonté tournée vers l'intérêt commun est la... d) La somme des volontés particulières est la... e) Rousseau refuse la... de la souveraineté.",
              hint: "Suivez l'ordre du raisonnement de Rousseau : l'acte fondateur, le corps qu'il crée, la volonté de ce corps, puis la critique des députés.",
              solution: [
                "a) Pacte social : c'est l'acte d'association par lequel chacun se donne entièrement à la communauté.",
                "b) Souverain : le peuple, corps formé par le pacte, détient la souveraineté.",
                "c) Volonté générale : elle vise l'intérêt commun et s'exprime dans la loi.",
                "d) Volonté de tous : elle additionne les intérêts privés.",
                "e) Représentation : pour Rousseau, la souveraineté ne peut être représentée, pas plus qu'aliénée.",
                "Résultat : pacte social, souverain, volonté générale, volonté de tous, représentation.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi Rousseau se méfie des associations partielles (factions) dans l'État. Appliquez ensuite son raisonnement à la vie politique actuelle : que penserait-il, selon vous, des partis politiques ? Quelle objection peut-on lui faire ?",
              hint: "Montrez qu'une association partielle a une volonté générale pour ses membres, mais particulière pour l'État, puis souvenez-vous du rôle que la Constitution donne aux partis.",
              solution: [
                "Raisonnement de Rousseau : une association partielle a une volonté commune à ses membres, mais cette volonté est particulière par rapport à l'État. Quand elles se forment, il n'y a plus autant de votants que d'hommes, mais autant que d'associations.",
                "Conséquence : si une faction devient assez grande pour l'emporter, sa volonté particulière s'impose à tous sous l'apparence de la volonté générale.",
                "Remède proposé : que chaque citoyen se prononce d'après lui-même ; à défaut, que les groupes soient nombreux et égaux, pour qu'aucun ne domine.",
                "Application : Rousseau se méfierait sans doute des partis disciplinés, où l'on vote selon la ligne du groupe plutôt qu'en conscience.",
                "Objection : dans une grande société, les partis permettent d'organiser le débat, de proposer des programmes cohérents et de structurer majorité et opposition ; l'article 4 de la Constitution reconnaît qu'ils concourent à l'expression du suffrage. Le pluralisme des partis peut aussi correspondre à l'idée de groupes nombreux qui s'équilibrent.",
                "Résultat : la méfiance de Rousseau éclaire le risque de capture de l'intérêt général par des intérêts partisans, mais les démocraties modernes ont choisi d'organiser ce pluralisme plutôt que de le supprimer.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « La loi votée par la majorité exprime-t-elle toujours la volonté générale ? » Répondez de façon organisée en mobilisant Rousseau, la DDHC et la Constitution de 1958.",
              hint: "Partez de la thèse de Rousseau sur la majorité, puis montrez ses difficultés : le peuple peut se tromper, les factions peuvent dominer, et le droit contemporain soumet la loi au respect de la Constitution.",
              solution: [
                "Introduction : selon l'article 6 de la DDHC, la loi est l'expression de la volonté générale. Mais une loi est votée par une majorité : peut-on identifier la volonté de la majorité à celle du peuple tout entier ?",
                "I. Oui, en principe. Pour Rousseau, après le pacte, la majorité oblige tous les citoyens : le vote demande si une proposition est conforme à la volonté générale, et la minorité découvre qu'elle s'était trompée. La règle majoritaire permet de décider entre égaux.",
                "II. Non, pas toujours. Rousseau lui-même admet que le peuple peut être trompé et que les factions peuvent faire passer une volonté particulière pour la volonté générale. Si chacun vote selon son intérêt privé, la majorité n'exprime que la volonté de tous.",
                "III. Le droit contemporain encadre la majorité. La Constitution de 1958 confie la souveraineté au peuple, qui l'exerce par ses représentants et par le référendum (article 3), et le Conseil constitutionnel contrôle la conformité des lois à la Constitution. Il a jugé en 1985 que la loi votée n'exprime la volonté générale que dans le respect de la Constitution.",
                "Conclusion : la loi majoritaire prétend exprimer la volonté générale, mais cette prétention suppose que les citoyens visent l'intérêt commun et que la loi respecte les droits fondamentaux garantis par la Constitution.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : Rousseau et la volonté générale.",
            statements: [
              { text: "Pour Rousseau, la volonté générale est la somme des volontés particulières.", true: false, why: "Cette somme est la volonté de tous ; la volonté générale vise l'intérêt commun." },
              { text: "Rousseau refuse que la souveraineté soit représentée.", true: true, why: "Une volonté ne se transmet pas : les députés ne sont que des commissaires du peuple." },
              { text: "Du contrat social a été publié en 1762.", true: true, why: "Rousseau le publie la même année que l'Émile, son traité d'éducation." },
              { text: "Selon Rousseau, la force suffit à fonder le droit.", true: false, why: "Céder à la force est un acte de nécessité, non de devoir : seule une convention fonde l'autorité légitime." },
              { text: "Rousseau se méfie des associations partielles dans l'État.", true: true, why: "Leur volonté, commune à leurs membres, reste particulière par rapport à l'État." },
              { text: "Pour Rousseau, obéir à la loi qu'on s'est prescrite revient à perdre sa liberté.", true: false, why: "C'est au contraire la définition de la liberté civile et morale selon lui." },
              { text: "La Constitution de 1958 permet au peuple d'exercer la souveraineté par ses représentants et par le référendum.", true: true, why: "C'est l'article 3, qui combine représentation et expression directe." },
            ],
          },
          quiz: [
            {
              q: "Quelle phrase ouvre Du contrat social ?",
              options: ["« Je pense, donc je suis. »", "« L'homme est un animal politique. »", "« L'homme est né libre, et partout il est dans les fers. »", "« Les hommes naissent et demeurent libres et égaux en droits. »"],
              answer: 2,
              why: "Rousseau part de ce constat pour chercher ce qui peut rendre légitime l'autorité politique.",
            },
            {
              q: "Qu'est-ce que la volonté de tous selon Rousseau ?",
              options: ["La somme des volontés particulières", "La volonté du peuple tourné vers l'intérêt commun", "La volonté exprimée par les représentants élus au Parlement", "La décision unanime des citoyens réunis en assemblée"],
              answer: 0,
              why: "La volonté de tous additionne les intérêts privés, alors que la volonté générale vise l'intérêt commun.",
            },
            {
              q: "Pourquoi Rousseau refuse-t-il la représentation de la souveraineté ?",
              options: ["Parce que les députés sont trop nombreux", "Parce qu'une volonté ne se transmet pas", "Parce que les élections coûtent trop cher à organiser", "Parce que le roi doit seul gouverner"],
              answer: 1,
              why: "La souveraineté est l'exercice de la volonté générale ; comme elle ne peut être aliénée, elle ne peut être représentée.",
            },
            {
              q: "Quel article de la DDHC reprend l'idée de Rousseau sur la loi ?",
              options: ["L'article 2", "L'article 11", "L'article 17", "L'article 6"],
              answer: 3,
              why: "L'article 6 affirme que la loi est l'expression de la volonté générale, en admettant les représentants.",
            },
            {
              q: "Que se passe-t-il, selon Rousseau, si l'avis contraire au mien l'emporte lors d'un vote ?",
              options: ["Le vote est annulé", "Je peux refuser d'obéir à la loi", "Cela prouve que je m'étais trompé sur la volonté générale", "La minorité peut se retirer et fonder un nouvel État avec ses partisans"],
              answer: 2,
              why: "Le vote ne demande pas ce que veut chacun, mais ce qu'est la volonté générale ; la minorité s'était trompée.",
            },
          ],
          trap: "Confondre volonté générale et opinion majoritaire : pour Rousseau, une majorité qui additionne des intérêts privés n'exprime que la volonté de tous ; la volonté générale suppose que chacun vote en visant l'intérêt commun.",
          method: "Pour expliquer une notion de Rousseau, partez toujours du couple qu'elle forme avec son contraire (volonté générale et volonté de tous, droit et force, souveraineté et représentation), puis illustrez chaque terme par un exemple concret de vote ou de décision.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tocqueville',
          title: 'Tocqueville : la démocratie et ses risques',
          minutes: 30,
          objectives: [
            "Expliquer ce que Tocqueville entend par l'égalité des conditions.",
            "Analyser les risques de la démocratie selon Tocqueville : tyrannie de la majorité, individualisme, despotisme doux.",
            "Identifier les remèdes qu'il propose : associations, libertés locales, presse libre, jury.",
            "Mobiliser la pensée de Tocqueville pour éclairer un débat démocratique actuel.",
          ],
          course: [
            {
              heading: "Un aristocrate observe la démocratie américaine",
              paragraphs: [
                "Alexis de Tocqueville (1805-1859), issu d'une famille de la noblesse normande, est un jeune magistrat lorsqu'il part en 1831 aux États-Unis avec son ami Gustave de Beaumont, officiellement pour étudier le système pénitentiaire américain. De ce voyage de neuf mois naît De la démocratie en Amérique, dont le premier tome paraît en 1835 et le second en 1840. Tocqueville sera ensuite député, brièvement ministre des Affaires étrangères en 1849, et publiera L'Ancien Régime et la Révolution (1856).",
                "Pour Tocqueville, la démocratie n'est pas seulement un régime politique : c'est un état social, caractérisé par l'égalité des conditions. Les hiérarchies héréditaires de la société aristocratique disparaissent ; chacun peut changer de position sociale et se sent semblable aux autres. Tocqueville voit dans ce mouvement vers l'égalité un fait « providentiel », universel et durable, qui gagnera aussi l'Europe. La question n'est donc pas de savoir s'il faut l'accepter, mais comment le rendre compatible avec la liberté.",
              ],
              box: { label: "Définition", text: "L'égalité des conditions est, chez Tocqueville, le fait générateur de la démocratie : la disparition des privilèges de naissance et le sentiment, chez chaque individu, d'être semblable aux autres et de pouvoir changer de position sociale." },
            },
            {
              heading: "Premier risque : la tyrannie de la majorité",
              paragraphs: [
                "Dans une démocratie, la majorité fait les lois, désigne les gouvernants, influence les juges et les jurés. Tocqueville juge dangereuse l'idée qu'en matière de gouvernement la majorité d'un peuple aurait le droit de tout faire : au-dessus de la souveraineté du peuple, il place la justice, qui forme la limite du droit de chaque peuple. Une majorité peut opprimer une minorité aussi sûrement qu'un roi.",
                "Le danger le plus original qu'il décrit est la pression de la majorité sur les esprits. Aux États-Unis, observe-t-il, la majorité trace autour de la pensée un cercle qu'il est risqué de franchir : celui qui s'écarte de l'opinion dominante ne risque pas la prison, mais l'isolement, le dénigrement et l'échec de sa carrière. Il en conclut qu'il connaît peu de pays où règne moins d'indépendance d'esprit qu'en Amérique. Le philosophe anglais John Stuart Mill reprendra l'expression de tyrannie de la majorité dans De la liberté (1859).",
              ],
            },
            {
              heading: "Second risque : individualisme et despotisme doux",
              paragraphs: [
                "Dans le second tome, Tocqueville décrit l'individualisme : un sentiment réfléchi et paisible qui pousse chaque citoyen à se retirer avec sa famille et ses amis et à abandonner la grande société à elle-même. Ce n'est pas l'égoïsme, défaut de toutes les époques, mais un repli propre aux sociétés égalitaires, où chacun croit ne rien devoir à personne et n'attendre rien de personne.",
                "Ce repli prépare une forme nouvelle de servitude, que Tocqueville appelle despotisme doux : un pouvoir immense et tutélaire, qui se charge d'assurer les jouissances des citoyens et de veiller sur leur sort. Ce pouvoir, absolu, détaillé, prévoyant et doux, ressemblerait à l'autorité paternelle s'il préparait les hommes à l'âge adulte ; mais il cherche au contraire à les fixer dans l'enfance. Il ne brise pas les volontés, il les amollit, jusqu'à faire des citoyens un troupeau dont le gouvernement est le berger. Tocqueville craint aussi que les peuples démocratiques, plus attachés à l'égalité qu'à la liberté, acceptent cette dépendance pourvu qu'elle soit égale pour tous.",
              ],
              box: { label: "À retenir", text: "Les trois risques de la démocratie selon Tocqueville : la tyrannie de la majorité (sur les lois et sur les esprits), l'individualisme (le repli sur la sphère privée) et le despotisme doux (un pouvoir tutélaire qui rend les citoyens passifs)." },
            },
            {
              heading: "Les remèdes : apprendre la liberté en la pratiquant",
              paragraphs: [
                "Tocqueville voit aux États-Unis des contrepoids. Les associations d'abord : les Américains s'associent pour tout, fonder une école, construire une route, défendre une cause ; ils apprennent ainsi à agir ensemble sans attendre l'État. Pour lui, dans les pays démocratiques, la science de l'association est la science mère dont dépendent toutes les autres. Les libertés locales ensuite : les institutions communales sont à la liberté ce que les écoles primaires sont à la science, car elles la mettent à la portée du peuple.",
                "S'y ajoutent la liberté de la presse, qui permet à chacun d'appeler à l'aide l'opinion contre l'oppression ; le jury, qu'il décrit comme une école gratuite et toujours ouverte où chaque citoyen apprend à juger et à exercer ses droits ; la décentralisation administrative ; enfin, les mœurs et l'« intérêt bien entendu », qui fait comprendre à chacun que servir l'intérêt commun sert aussi le sien. Ces remèdes ont un point commun : arracher les citoyens au repli privé en les faisant participer aux affaires communes.",
              ],
              box: { label: "Repère", text: "1805 : naissance de Tocqueville. 1831-1832 : voyage aux États-Unis. 1835 et 1840 : les deux tomes de De la démocratie en Amérique. 1849 : ministre des Affaires étrangères. 1856 : L'Ancien Régime et la Révolution. 1859 : mort de Tocqueville." },
            },
          ],
          keyPoints: [
            "De la démocratie en Amérique (1835, 1840) : la démocratie est d'abord un état social, l'égalité des conditions.",
            "Tyrannie de la majorité : oppression des minorités et pression conformiste sur la pensée ; la justice limite le droit du peuple.",
            "Individualisme : repli paisible sur la famille et les amis, distinct de l'égoïsme.",
            "Despotisme doux : pouvoir tutélaire et prévoyant qui maintient les citoyens dans l'enfance.",
            "Remèdes : associations, libertés communales, presse libre, jury, décentralisation, intérêt bien entendu.",
          ],
          example: {
            statement: "Montrez en quoi le despotisme doux décrit par Tocqueville se distingue d'une tyrannie classique.",
            solution: [
              "Définir la tyrannie classique : un pouvoir qui opprime par la violence, la peur, la prison, contre la volonté des sujets.",
              "Définir le despotisme doux : un pouvoir immense et tutélaire qui se charge du bien-être des citoyens et règle leur vie dans le détail.",
              "Première différence, les moyens : le despotisme doux ne brise pas les volontés, il les amollit ; il n'a pas besoin de violence.",
              "Deuxième différence, le consentement : les citoyens l'acceptent, et même le désirent, parce qu'il leur assure sécurité et confort ; ils peuvent continuer à élire leurs gouvernants.",
              "Troisième différence, l'effet : il ne supprime pas les libertés d'un coup, mais il rend les citoyens incapables de les exercer, en les maintenant dans une enfance politique.",
              "Conclusion : le despotisme doux est plus difficile à reconnaître qu'une tyrannie, car il naît du repli individualiste des citoyens eux-mêmes ; c'est pourquoi Tocqueville insiste sur la participation aux affaires communes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez pour chaque phrase s'il s'agit d'un risque ou d'un remède selon Tocqueville, et nommez-le : a) des habitants créent une association pour rénover l'école du village ; b) chacun se retire avec ses proches et se désintéresse des affaires publiques ; c) un écrivain renonce à publier une opinion minoritaire par peur d'être mis à l'écart ; d) des citoyens tirés au sort jugent un procès criminel ; e) un pouvoir central règle tout dans le détail pour le confort des citoyens, qui ne s'occupent plus de rien.",
              hint: "Repérez si la situation pousse les citoyens à agir ensemble ou au contraire à se replier, à se taire ou à dépendre du pouvoir.",
              solution: [
                "a) Remède : l'art de s'associer, qui apprend aux citoyens à agir ensemble sans attendre l'État.",
                "b) Risque : l'individualisme, repli paisible sur la sphère privée.",
                "c) Risque : la tyrannie de la majorité sur les esprits, qui pousse au conformisme.",
                "d) Remède : le jury, école gratuite où les citoyens apprennent à juger et à exercer leurs droits.",
                "e) Risque : le despotisme doux, pouvoir tutélaire qui rend les citoyens passifs.",
                "Résultat : remèdes en a et d ; risques en b (individualisme), c (tyrannie de la majorité) et e (despotisme doux).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi, selon Tocqueville, l'individualisme et le despotisme doux sont liés. Puis montrez comment les associations répondent à ces deux dangers.",
              hint: "Partez du repli des citoyens sur leur vie privée : qui s'occupe alors des affaires communes ?",
              solution: [
                "L'individualisme : dans une société égalitaire, chacun tend à se retirer avec sa famille et ses amis et à laisser la grande société à elle-même.",
                "Le lien : si les citoyens se désintéressent des affaires communes, quelqu'un doit s'en charger ; un pouvoir central prend alors en main tous les aspects de la vie collective.",
                "Le despotisme doux : ce pouvoir tutélaire assure le bien-être des citoyens, mais les rend dépendants et incapables d'agir par eux-mêmes ; l'individualisme le rend possible, et il renforce à son tour l'individualisme.",
                "Réponse des associations au repli : en s'associant, les citoyens sortent de leur sphère privée, apprennent à coopérer et découvrent que leur intérêt est lié à celui des autres (l'intérêt bien entendu).",
                "Réponse des associations à la tutelle : elles accomplissent elles-mêmes des tâches d'intérêt général et forment des contre-pouvoirs face à l'État.",
                "Résultat : individualisme et despotisme doux s'entretiennent mutuellement ; les associations brisent ce cercle en rendant les citoyens actifs.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Les analyses de Tocqueville permettent-elles de comprendre certains risques des démocraties actuelles ? » Appuyez-vous sur au moins deux notions de Tocqueville et sur des exemples contemporains étudiés dans ce chapitre ou dans les précédents.",
              hint: "Mettez en relation la tyrannie de la majorité avec la pression conformiste et la spirale du silence, l'individualisme avec l'abstention, et les remèdes avec la vie associative et la démocratie participative ; montrez aussi ce qui a changé depuis 1835.",
              solution: [
                "Introduction : Tocqueville écrit dans les années 1830 sur une démocratie américaine naissante. Ses analyses gardent-elles une valeur pour comprendre les démocraties du XXIe siècle ?",
                "I. Des analyses éclairantes. La tyrannie de la majorité sur les esprits rappelle la pression conformiste décrite par la spirale du silence (Noelle-Neumann, 1974) et les phénomènes de harcèlement collectif en ligne, qui poussent certains à se taire. L'individualisme éclaire l'abstention et le repli sur la vie privée. Le despotisme doux interroge notre rapport à un État protecteur dont on attend tout.",
                "II. Des remèdes toujours actuels. La vitalité associative, protégée en France depuis 1901, la démocratie locale et participative (conseils de quartier, budgets participatifs), la liberté de la presse et le tirage au sort des jurés reprennent les contrepoids qu'il décrivait.",
                "III. Des limites. Tocqueville ne pouvait pas prévoir les médias de masse, le numérique ou la mondialisation ; sa démocratie américaine excluait les femmes, les esclaves et les Amérindiens, dont il décrit lui-même le sort tragique dans le premier tome. Ses analyses sont des outils de réflexion, non des prédictions.",
                "Conclusion : Tocqueville fournit une grille de lecture précieuse des fragilités démocratiques ; il montre surtout que la liberté ne se conserve que si les citoyens la pratiquent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de Tocqueville à sa définition.",
            pairs: [
              { left: "Égalité des conditions", right: "Disparition des hiérarchies héréditaires, fait générateur de la démocratie" },
              { left: "Tyrannie de la majorité", right: "Pouvoir de la majorité qui opprime les minorités et étouffe l'indépendance d'esprit" },
              { left: "Individualisme", right: "Repli paisible de chacun sur sa famille et ses amis, à l'écart des affaires publiques" },
              { left: "Despotisme doux", right: "Pouvoir tutélaire qui assure le bien-être des citoyens mais les maintient dans l'enfance" },
              { left: "Art de s'associer", right: "Pratique qui apprend aux citoyens à agir ensemble sans attendre l'État" },
              { left: "Intérêt bien entendu", right: "Idée que servir l'intérêt commun sert aussi son propre intérêt" },
            ],
          },
          quiz: [
            {
              q: "Quel est, selon Tocqueville, le fait générateur de la démocratie ?",
              options: ["Le suffrage universel", "La séparation des pouvoirs", "La liberté de la presse", "L'égalité des conditions"],
              answer: 3,
              why: "Pour Tocqueville, la démocratie est d'abord un état social marqué par l'égalité des conditions, dont le régime politique découle.",
            },
            {
              q: "En quelles années paraissent les deux tomes de De la démocratie en Amérique ?",
              options: ["1762 et 1789", "1835 et 1840", "1848 et 1852", "1859 et 1871"],
              answer: 1,
              why: "Le premier tome paraît en 1835, le second en 1840, après le voyage de 1831-1832.",
            },
            {
              q: "Comment Tocqueville distingue-t-il l'individualisme de l'égoïsme ?",
              options: ["L'individualisme est un repli paisible propre aux sociétés égalitaires", "L'individualisme est un vice de toutes les époques et de tous les régimes", "L'individualisme pousse à s'engager davantage dans les affaires publiques", "Il n'y a pour lui aucune différence entre les deux notions"],
              answer: 0,
              why: "L'égoïsme est un vice de tous les temps ; l'individualisme est un sentiment réfléchi et paisible, né de l'égalité des conditions.",
            },
            {
              q: "Lequel de ces éléments n'est pas un remède proposé par Tocqueville ?",
              options: ["Les associations", "Les libertés communales", "La centralisation de toutes les décisions", "Le jury populaire, école gratuite des citoyens"],
              answer: 2,
              why: "Tocqueville redoute la centralisation administrative, qui favorise le despotisme doux ; il défend les libertés locales.",
            },
            {
              q: "Quel auteur reprend l'expression de tyrannie de la majorité dans De la liberté (1859) ?",
              options: ["Jean-Jacques Rousseau", "John Stuart Mill", "Montesquieu", "Benjamin Constant"],
              answer: 1,
              why: "Mill, lecteur et ami de Tocqueville, reprend l'expression pour désigner aussi la pression de l'opinion sur les individus.",
            },
          ],
          trap: "Croire que Tocqueville est hostile à la démocratie : aristocrate de naissance, il juge le mouvement vers l'égalité irréversible et souhaitable ; il veut seulement en prévenir les dérives pour la rendre compatible avec la liberté.",
          method: "Mémorisez Tocqueville sous la forme d'un schéma en trois étages : la cause (l'égalité des conditions), les risques (tyrannie de la majorité, individualisme, despotisme doux), les remèdes (associations, communes, presse, jury). Pour chaque étage, associez un exemple actuel.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉLIBÉRER ET DÉCIDER DANS LES INSTITUTIONS                            */
    /* ==================================================================== */
    {
      id: 'decider-dans-les-institutions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'legitimite',
          title: 'Qu\'est-ce qu\'une décision légitime ?',
          minutes: 30,
          objectives: [
            "Distinguer légalité et légitimité.",
            "Identifier les trois types de domination légitime selon Max Weber.",
            "Expliquer les sources de la légitimité d'une décision démocratique : l'origine, la procédure, les résultats.",
            "Analyser une décision contestée en mobilisant ces critères.",
          ],
          course: [
            {
              heading: "Légal et légitime : deux notions à distinguer",
              paragraphs: [
                "Une décision est légale lorsqu'elle est conforme aux règles de droit en vigueur : elle a été prise par l'autorité compétente, selon la procédure prévue, et respecte les normes supérieures (Constitution, traités, lois). Elle est légitime lorsqu'elle est reconnue comme juste et fondée par ceux à qui elle s'applique, qui acceptent alors de lui obéir sans y être contraints par la seule force.",
                "Les deux notions coïncident souvent, mais pas toujours. Dans la tragédie de Sophocle, Antigone enterre son frère malgré l'interdiction du roi Créon, au nom des lois non écrites des dieux : elle oppose une légitimité supérieure à la légalité du décret. L'histoire de France offre un exemple tragique : la loi du 3 octobre 1940 portant statut des Juifs fut adoptée par le régime de Vichy dans les formes qu'il s'était données ; l'ordonnance du 9 août 1944 rétablissant la légalité républicaine a déclaré nuls les actes de ce régime. Inversement, un acte illégal, comme l'appel du 18 juin 1940 lancé par le général de Gaulle, peut être jugé légitime.",
              ],
              box: { label: "Définition", text: "Légalité : conformité d'une décision aux règles de droit en vigueur. Légitimité : qualité d'un pouvoir ou d'une décision reconnus comme justes et fondés par ceux qui y sont soumis, ce qui leur fait accepter d'obéir." },
            },
            {
              heading: "Max Weber : trois types de domination légitime",
              paragraphs: [
                "Le sociologue allemand Max Weber (1864-1920), notamment dans sa conférence Le Métier et la vocation d'homme politique (1919) et dans Économie et société (publié après sa mort, en 1922), distingue trois fondements de la légitimité. La domination traditionnelle repose sur le respect de la coutume et du passé : on obéit au monarque héréditaire parce qu'il en a toujours été ainsi. La domination charismatique repose sur les qualités exceptionnelles attribuées à un chef (héros, prophète, sauveur) par ceux qui le suivent.",
                "La domination légale-rationnelle repose sur la croyance en la validité de règles impersonnelles : on obéit non à une personne, mais à une fonction définie par le droit, exercée selon des procédures connues de tous. C'est la forme dominante dans les États modernes, avec leur administration (la bureaucratie au sens de Weber). Ces trois types sont des idéaux-types, c'est-à-dire des modèles purs : dans la réalité, ils se combinent, comme lorsqu'un président élu selon la Constitution bénéficie aussi d'un fort charisme.",
              ],
              box: { label: "Repère", text: "Les trois types de domination légitime selon Weber : traditionnelle (la coutume), charismatique (les qualités exceptionnelles d'un chef), légale-rationnelle (des règles impersonnelles et des procédures)." },
            },
            {
              heading: "Ce qui rend légitime une décision démocratique",
              paragraphs: [
                "En démocratie, la légitimité vient d'abord de l'origine de la décision : elle est prise par des représentants élus ou directement par le peuple, conformément au principe de la souveraineté populaire (article 3 de la Constitution). Elle vient aussi de la procédure : une décision est d'autant mieux acceptée qu'elle a été débattue publiquement, que l'opposition a pu s'exprimer et que les droits fondamentaux ont été respectés. Le Conseil constitutionnel a jugé en 1985 que la loi votée n'exprime la volonté générale que dans le respect de la Constitution.",
                "La légitimité dépend enfin des résultats : une décision qui résout efficacement un problème est plus facilement acceptée. Le politiste allemand Fritz Scharpf distingue ainsi la légitimité par les entrées (la participation des citoyens) et la légitimité par les sorties (l'efficacité pour le bien commun). L'historien Pierre Rosanvallon (La Légitimité démocratique, 2008) ajoute des légitimités d'impartialité (autorités indépendantes), de réflexivité (juges constitutionnels qui rappellent les principes) et de proximité (attention portée aux situations particulières).",
              ],
              box: { label: "À retenir", text: "Trois sources de légitimité d'une décision démocratique : l'origine (qui décide ? le peuple ou ses représentants élus), la procédure (comment ? par un débat public, dans le respect des droits), les résultats (pour quoi ? l'efficacité au service du bien commun)." },
            },
            {
              heading: "Quand la légitimité est contestée",
              paragraphs: [
                "Une décision peut être légale et pourtant contestée dans sa légitimité. En 2023, la réforme des retraites, qui recule l'âge légal de départ de 62 à 64 ans, est adoptée sans vote final de l'Assemblée nationale : le 16 mars, la Première ministre engage la responsabilité du gouvernement (article 49, alinéa 3), et la motion de censure la plus soutenue est rejetée à neuf voix près. Le Conseil constitutionnel valide l'essentiel de la loi le 14 avril 2023. La procédure est donc légale ; mais les opposants, dont les principales organisations syndicales réunies en intersyndicale, contestent sa légitimité, faute de vote et face à une large opposition dans l'opinion, tandis que le gouvernement invoque le respect de la Constitution et le mandat issu de l'élection présidentielle.",
                "Autre exemple : en 2005, les Français rejettent par référendum le traité établissant une Constitution pour l'Europe ; en 2008, le traité de Lisbonne, qui en reprend une grande partie, est ratifié par la voie parlementaire après une révision constitutionnelle votée par le Congrès. La procédure est régulière, mais certains y voient un contournement du vote populaire. Ces débats montrent que la légitimité ne se décrète pas : elle se construit par la qualité des procédures et par la confiance.",
              ],
            },
          ],
          keyPoints: [
            "Légal : conforme au droit. Légitime : reconnu comme juste et fondé par ceux qui y sont soumis.",
            "Légalité et légitimité peuvent diverger : Antigone face à Créon ; lois de Vichy légales dans la forme mais illégitimes.",
            "Weber : domination traditionnelle, charismatique, légale-rationnelle (idéaux-types qui se combinent).",
            "Légitimité démocratique : origine (élection, référendum), procédure (débat, droits), résultats (efficacité).",
            "Conseil constitutionnel, 1985 : la loi votée n'exprime la volonté générale que dans le respect de la Constitution.",
            "Exemples de débats : réforme des retraites de 2023 (article 49.3), ratification du traité de Lisbonne en 2008.",
          ],
          example: {
            statement: "Un gouvernement fait adopter une loi en respectant toutes les procédures prévues par la Constitution, mais une majorité de citoyens s'y oppose dans les sondages. Cette loi est-elle légale ? Est-elle légitime ?",
            solution: [
              "Définir la légalité : une loi est légale si elle a été adoptée par l'autorité compétente selon les procédures prévues et si elle respecte la Constitution.",
              "Appliquer : toutes les procédures ont été respectées ; si le Conseil constitutionnel, éventuellement saisi, n'a rien censuré, la loi est légale.",
              "Définir la légitimité : elle dépend de l'origine de la décision, de la procédure suivie et de ses résultats, et se traduit par l'acceptation des citoyens.",
              "Arguments pour sa légitimité : elle a été votée par des représentants élus, détenteurs d'un mandat ; un sondage n'est qu'une photographie de l'opinion et ne remplace pas le vote.",
              "Arguments contre : une opposition durable et majoritaire affaiblit l'acceptation de la loi ; la légitimité démocratique suppose aussi un débat de qualité et la prise en compte des objections.",
              "Conclusion : la loi est légale ; sa légitimité est réelle par son origine, mais fragilisée dans l'opinion. Elle dépendra de la qualité du débat qui a précédé son adoption et de ses résultats.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le type de domination légitime, selon Max Weber, qui correspond à chaque situation : a) un roi succède à son père en vertu de règles de succession anciennes ; b) un chef de guerre est suivi par ses soldats parce qu'ils le croient invincible ; c) un préfet applique une circulaire en vertu de sa fonction ; d) un maire est élu selon les règles du code électoral ; e) le chef d'un mouvement de libération est suivi parce qu'il incarne l'espoir de tout un peuple.",
              hint: "Demandez-vous à chaque fois sur quoi repose l'obéissance : la coutume, les qualités extraordinaires d'une personne, ou des règles impersonnelles.",
              solution: [
                "a) Domination traditionnelle : l'obéissance repose sur la coutume et la succession héréditaire.",
                "b) Domination charismatique : l'obéissance repose sur les qualités exceptionnelles attribuées au chef.",
                "c) Domination légale-rationnelle : on obéit au préfet en raison de sa fonction définie par le droit, et non de sa personne.",
                "d) Domination légale-rationnelle : le maire tient son autorité de règles électorales impersonnelles.",
                "e) Domination charismatique : le chef est suivi pour ce qu'il incarne ; s'il est ensuite élu selon une constitution, sa légitimité deviendra aussi légale-rationnelle.",
                "Résultat : a traditionnelle ; b et e charismatique ; c et d légale-rationnelle.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des situations suivantes, dites si la décision est légale, légitime, les deux, ou si la question fait débat, en justifiant : a) la loi du 3 octobre 1940 portant statut des Juifs ; b) l'appel du 18 juin 1940 lancé de Londres par le général de Gaulle ; c) une loi votée par le Parlement puis validée par le Conseil constitutionnel ; d) la réforme des retraites adoptée en 2023 par l'article 49, alinéa 3.",
              hint: "Pour la légalité, cherchez si l'acte respecte les règles de droit alors en vigueur ; pour la légitimité, demandez-vous s'il est reconnu comme juste et selon quels critères.",
              solution: [
                "a) Légale dans les formes du régime de Vichy, mais illégitime : elle viole les principes républicains d'égalité et de dignité ; l'ordonnance du 9 août 1944 l'a déclarée nulle.",
                "b) Illégale au regard du gouvernement de Vichy (de Gaulle est condamné à mort par contumace en août 1940), mais légitime aux yeux de la Résistance et de l'histoire, car fondée sur la défense de la nation et de la liberté.",
                "c) Légale et, en principe, légitime : votée par des représentants élus, après débat, et conforme à la Constitution.",
                "d) Légale : l'article 49, alinéa 3, est prévu par la Constitution, et le Conseil constitutionnel a validé l'essentiel du texte. Sa légitimité fait débat : absence de vote final et forte opposition sociale d'un côté, mandat présidentiel et respect des procédures de l'autre.",
                "Résultat : a légale mais illégitime ; b illégale mais légitime ; c légale et légitime ; d légale, légitimité discutée.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Suffit-il qu'une décision soit légale pour qu'elle soit légitime ? » Rédigez une réponse organisée en deux parties, en mobilisant Max Weber et au moins deux exemples précis.",
              hint: "Montrez d'abord que, dans un État de droit, la légalité est une source majeure de légitimité (domination légale-rationnelle), puis qu'elle ne suffit pas toujours (exemples historiques et contemporains).",
              solution: [
                "Introduction : une décision légale est conforme au droit ; une décision légitime est reconnue comme juste par ceux qui y sont soumis. Dans un État de droit démocratique, les deux se confondent-elles ?",
                "I. La légalité est une source essentielle de légitimité. Selon Weber, la domination légale-rationnelle, typique des États modernes, repose précisément sur la croyance en la validité de règles impersonnelles. En démocratie, une loi votée par des élus, après un débat public et sous le contrôle du Conseil constitutionnel, cumule légalité et légitimité démocratique.",
                "II. Mais la légalité ne suffit pas. Une règle légale peut être profondément injuste : la loi de Vichy du 3 octobre 1940 portant statut des Juifs était légale dans les formes du régime, mais illégitime. Même dans une démocratie, une décision légale peut voir sa légitimité contestée : la réforme des retraites de 2023, adoptée par l'article 49.3 et validée par le Conseil constitutionnel, a été jugée illégitime par une grande partie des syndicats et de l'opinion.",
                "Synthèse : la légitimité suppose aussi la qualité de la procédure (débat, prise en compte de l'opposition), le respect des droits fondamentaux, et l'acceptation par les citoyens.",
                "Conclusion : la légalité est une condition nécessaire mais non suffisante de la légitimité démocratique ; celle-ci se construit par la délibération, le respect des principes et la confiance.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Légalité", right: "Conformité d'une décision aux règles de droit en vigueur" },
              { left: "Légitimité", right: "Reconnaissance d'un pouvoir ou d'une décision comme juste et fondé" },
              { left: "Domination traditionnelle", right: "Autorité fondée sur la coutume et le respect du passé" },
              { left: "Domination charismatique", right: "Autorité fondée sur les qualités exceptionnelles attribuées à un chef" },
              { left: "Domination légale-rationnelle", right: "Autorité fondée sur des règles impersonnelles et des procédures" },
              { left: "Légitimité par les résultats", right: "Acceptation d'une décision en raison de son efficacité pour le bien commun" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une décision légale ?",
              options: ["Une décision approuvée par une majorité de citoyens dans les sondages", "Une décision conforme aux règles de droit en vigueur", "Une décision juste selon la morale de chacun", "Une décision prise par un chef charismatique"],
              answer: 1,
              why: "La légalité est la conformité au droit ; la légitimité, elle, renvoie à la reconnaissance de la décision comme juste.",
            },
            {
              q: "Selon Weber, sur quoi repose la domination légale-rationnelle ?",
              options: ["Sur la coutume et l'hérédité", "Sur les qualités exceptionnelles d'un chef", "Sur la force armée et la peur", "Sur des règles impersonnelles"],
              answer: 3,
              why: "On obéit à une fonction définie par le droit, et non à une personne : c'est la forme typique de l'État moderne.",
            },
            {
              q: "Quel texte a déclaré nuls les actes du régime de Vichy ?",
              options: ["L'ordonnance du 9 août 1944", "La Constitution du 4 octobre 1958", "La loi du 3 octobre 1940", "Le Préambule de la Constitution de 1946"],
              answer: 0,
              why: "L'ordonnance du 9 août 1944 relative au rétablissement de la légalité républicaine a déclaré nuls les actes de l'autorité de fait de Vichy.",
            },
            {
              q: "Que signifie la légitimité « par les sorties » selon Fritz Scharpf ?",
              options: ["La participation des citoyens à la décision", "Le respect de la tradition", "L'efficacité de la décision pour le bien commun", "La sortie d'un pays d'une organisation internationale"],
              answer: 2,
              why: "Scharpf oppose la légitimité par les entrées (la participation) et la légitimité par les sorties (les résultats).",
            },
            {
              q: "Comment la réforme des retraites de 2023 a-t-elle été adoptée à l'Assemblée nationale ?",
              options: ["Par référendum", "Par l'article 49, alinéa 3, sans vote final", "Par un vote à l'unanimité des députés présents", "Par une ordonnance du président de la République"],
              answer: 1,
              why: "Le gouvernement a engagé sa responsabilité le 16 mars 2023 ; la motion de censure ayant été rejetée, le texte a été considéré comme adopté.",
            },
          ],
          trap: "Confondre légalité et légitimité, ou croire qu'une décision illégitime est forcément illégale : une décision peut être parfaitement légale et voir pourtant sa légitimité contestée, et inversement.",
          method: "Face à une décision contestée, analysez-la toujours en deux colonnes : d'un côté sa légalité (qui a décidé, selon quelle procédure, avec quel contrôle juridictionnel), de l'autre sa légitimité (origine, qualité du débat, résultats, acceptation). Concluez en articulant les deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'consensus-ou-majorite',
          title: 'Décider : consensus ou majorité ?',
          minutes: 30,
          objectives: [
            "Distinguer majorité relative, majorité absolue, majorité qualifiée, unanimité et consensus.",
            "Expliquer les justifications de la règle majoritaire et ses limites, dont le paradoxe de Condorcet.",
            "Identifier les protections des minorités et de l'opposition dans une démocratie.",
            "Choisir et justifier un mode de décision adapté à une situation.",
          ],
          course: [
            {
              heading: "Les modes de décision collective",
              paragraphs: [
                "La majorité relative est obtenue par celui qui recueille plus de voix que chacun des autres, même s'il n'a pas la moitié des voix. La majorité absolue exige plus de la moitié des suffrages exprimés : avec 600 suffrages exprimés, il faut au moins 301 voix. Les suffrages exprimés ne comprennent pas les bulletins blancs ni les bulletins nuls ; depuis une loi de 2014, les votes blancs sont toutefois décomptés à part. La majorité qualifiée fixe un seuil plus élevé : la révision de la Constitution par le Congrès exige les trois cinquièmes des suffrages exprimés (article 89).",
                "L'unanimité exige l'accord de tous : chacun dispose alors d'un droit de veto. Le consensus est différent : la décision est adoptée sans vote, lorsque personne ne s'y oppose formellement, même si tous ne l'approuvent pas avec le même enthousiasme. C'est ainsi que l'accord de Paris sur le climat a été adopté le 12 décembre 2015 à la COP21. Il ne faut pas confondre consensus et compromis : le compromis est un arrangement où chacun renonce à une partie de ses exigences, il peut ensuite être adopté par consensus ou par un vote.",
              ],
              box: { label: "Définition", text: "Majorité relative : plus de voix que chacun des autres. Majorité absolue : plus de la moitié des suffrages exprimés. Majorité qualifiée : un seuil supérieur (trois cinquièmes, deux tiers). Unanimité : accord de tous. Consensus : adoption sans vote, en l'absence d'opposition formelle." },
            },
            {
              heading: "Pourquoi la majorité ?",
              paragraphs: [
                "La règle majoritaire traduit l'égalité des citoyens : chaque voix compte autant, et aucune n'est privilégiée. Elle permet de décider malgré les désaccords, alors que l'unanimité risque de bloquer toute décision. Elle est enfin réversible : la minorité d'aujourd'hui peut convaincre et devenir la majorité de demain, ce qui permet l'alternance. Au XVIIe siècle, John Locke justifiait déjà la majorité en expliquant qu'un corps politique doit se mouvoir dans une direction, et que c'est le consentement du plus grand nombre qui le met en mouvement.",
                "Le marquis de Condorcet, mathématicien et philosophe, a proposé en 1785 un argument de probabilité, connu sous le nom de théorème du jury : si chaque votant a plus d'une chance sur deux de choisir la bonne réponse et si les votants se prononcent de façon indépendante, la probabilité que la majorité ait raison augmente avec le nombre de votants et tend vers la certitude. L'argument a une limite : si chaque votant a moins d'une chance sur deux d'avoir raison, la majorité se trompe presque sûrement.",
              ],
            },
            {
              heading: "Les limites de la majorité",
              paragraphs: [
                "Condorcet a aussi découvert un paradoxe. Soit trois électeurs qui classent trois options : le premier préfère A à B et B à C ; le deuxième, B à C et C à A ; le troisième, C à A et A à B. A bat B par deux voix contre une, B bat C par deux voix contre une, mais C bat A par deux voix contre une : la préférence collective tourne en rond, alors que chaque préférence individuelle est cohérente. Le résultat peut alors dépendre de l'ordre dans lequel on vote. L'économiste Kenneth Arrow a démontré en 1951 qu'aucun mode de scrutin ne peut satisfaire à la fois un petit nombre d'exigences raisonnables.",
                "La majorité peut aussi opprimer la minorité : c'est la tyrannie de la majorité redoutée par Tocqueville. C'est pourquoi les démocraties libérales limitent le pouvoir majoritaire : droits fondamentaux garantis par la Constitution, contrôle du Conseil constitutionnel, qui peut être saisi depuis 1974 par 60 députés ou 60 sénateurs, droits spécifiques reconnus à l'opposition depuis la révision de 2008 (article 51-1), comme la présidence de la commission des finances de l'Assemblée nationale confiée à un député de l'opposition.",
              ],
              box: { label: "Propriété", text: "Paradoxe de Condorcet : des préférences individuelles cohérentes peuvent produire une préférence collective incohérente (A bat B, B bat C, mais C bat A). Le résultat d'un vote peut alors dépendre de l'ordre ou de la méthode de vote." },
            },
            {
              heading: "Le consensus : atouts et risques",
              paragraphs: [
                "Le consensus est fréquent dans les négociations internationales, où des États souverains ne veulent pas se voir imposer une décision : les conférences sur le climat décident par consensus, et le Conseil de l'Union européenne recherche souvent un accord général même lorsque la majorité qualifiée suffirait. Il produit des décisions plus inclusives et plus durables, que chacun a intérêt à appliquer. Il correspond à l'idéal de l'éthique de la discussion : chercher l'accord par la seule force des arguments.",
                "Ses risques sont réels : la lenteur, la pression exercée sur ceux qui hésitent à s'opposer seuls, et surtout le pouvoir de blocage d'un seul participant, qui peut obtenir des concessions en menaçant de rompre l'accord. Il conduit parfois au plus petit dénominateur commun, des textes vagues qui satisfont tout le monde parce qu'ils n'engagent à rien. Le choix d'une règle de décision dépend donc de l'enjeu : la majorité simple pour les décisions courantes, la majorité qualifiée pour les règles fondamentales, le consensus quand l'adhésion de tous est indispensable à l'application.",
              ],
            },
          ],
          keyPoints: [
            "Majorité absolue : plus de la moitié des suffrages exprimés (blancs et nuls exclus) ; majorité relative : plus de voix que chacun des autres.",
            "Majorité qualifiée : seuil supérieur, par exemple trois cinquièmes au Congrès pour réviser la Constitution.",
            "Consensus : adoption sans vote, sans opposition formelle ; à distinguer de l'unanimité et du compromis.",
            "Justifications de la majorité : égalité, efficacité, réversibilité ; théorème du jury de Condorcet (1785).",
            "Paradoxe de Condorcet : la préférence collective peut être cyclique ; Arrow (1951) généralise la difficulté.",
            "Protections des minorités : droits fondamentaux, Conseil constitutionnel (saisine par 60 parlementaires), droits de l'opposition.",
          ],
          example: {
            statement: "Données fictives : neuf amis choisissent une destination de voyage parmi Lisbonne (L), Berlin (B) et Rome (R). Quatre classent L > B > R ; trois classent B > R > L ; deux classent R > B > L. Quelle destination l'emporte avec un vote à un tour à la majorité relative ? Et en comparant les destinations deux à deux ?",
            solution: [
              "Vote à un tour : chacun vote pour son premier choix. L obtient 4 voix, B 3 voix, R 2 voix. Vérification : 4 + 3 + 2 = 9. L l'emporte à la majorité relative, sans majorité absolue (il faudrait au moins 5 voix).",
              "Duel L contre B : L est préféré par les 4 premiers ; B est préféré par les 3 du deuxième groupe et les 2 du troisième, soit 5. B bat L par 5 voix contre 4.",
              "Duel L contre R : L est préféré par 4 ; R est préféré par les 3 du deuxième groupe et les 2 du troisième, soit 5. R bat L par 5 voix contre 4.",
              "Duel B contre R : B est préféré par les 4 premiers et les 3 du deuxième groupe, soit 7 ; R par 2. B bat R par 7 voix contre 2.",
              "Bilan des duels : B bat ses deux concurrents ; c'est le gagnant au sens de Condorcet. L, vainqueur du vote à un tour, est battu par chacun des deux autres.",
              "Conclusion : le vote à un tour désigne Lisbonne, la comparaison deux à deux désigne Berlin. Le résultat dépend de la méthode de vote, ce qui montre que la « volonté de la majorité » n'est pas toujours évidente.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives : dans une circonscription de 1 000 électeurs inscrits, 640 personnes ont voté au premier tour d'une élection législative, dont 40 bulletins blancs ou nuls. Le candidat A obtient 290 voix, B 190 voix, C 120 voix. 1) Calculez le nombre de suffrages exprimés et le seuil de la majorité absolue. 2) Un candidat est-il élu dès le premier tour, sachant qu'il faut la majorité absolue des suffrages exprimés et au moins 25 % des inscrits ? 3) Quels candidats peuvent se maintenir au second tour, sachant qu'il faut avoir obtenu au moins 12,5 % des inscrits ?",
              hint: "Les suffrages exprimés excluent les bulletins blancs et nuls. Les seuils de 25 % et 12,5 % se calculent sur les inscrits, non sur les votants.",
              solution: [
                "1) Suffrages exprimés : 640 - 40 = 600. Vérification : 290 + 190 + 120 = 600. Majorité absolue : plus de la moitié de 600, soit au moins 301 voix.",
                "2) A obtient 290 voix, moins que 301 : il n'a pas la majorité absolue. Il dépasse pourtant 25 % des inscrits (250 voix), mais les deux conditions sont cumulatives. Personne n'est élu au premier tour.",
                "3) Seuil de 12,5 % des inscrits : 1 000 × 0,125 = 125 voix. A (290) et B (190) peuvent se maintenir ; C (120) ne le peut pas.",
                "Au second tour, la majorité relative suffit : le candidat qui obtient le plus de voix est élu.",
                "Résultat : 600 suffrages exprimés, majorité absolue à 301 voix, pas d'élu au premier tour, second tour entre A et B.",
              ],
            },
            {
              level: 2,
              statement: "Reprenez les données de l'exemple corrigé (neuf amis : 4 classent L > B > R, 3 classent B > R > L, 2 classent R > B > L). Appliquez la méthode de Borda : chaque électeur donne 2 points à son premier choix, 1 point au deuxième, 0 au troisième. Quelle destination l'emporte ? Comparez avec les résultats du vote à un tour et des duels, puis concluez.",
              hint: "Calculez les points de chaque destination groupe par groupe, en multipliant les points par le nombre d'électeurs du groupe. Le total de tous les points doit être égal à 9 × 3 = 27.",
              solution: [
                "Lisbonne : 4 × 2 (premier choix du premier groupe) + 3 × 0 + 2 × 0 = 8 points.",
                "Berlin : 4 × 1 + 3 × 2 + 2 × 1 = 4 + 6 + 2 = 12 points.",
                "Rome : 4 × 0 + 3 × 1 + 2 × 2 = 3 + 4 = 7 points.",
                "Vérification : 8 + 12 + 7 = 27 points, ce qui correspond bien à 9 électeurs × 3 points distribués chacun.",
                "Comparaison : le vote à un tour désigne Lisbonne, mais la méthode de Borda et les duels de Condorcet désignent Berlin, deuxième choix de presque tous.",
                "Conclusion : Berlin l'emporte avec la méthode de Borda (12 points). Le choix de la règle de vote n'est pas neutre : il peut changer le résultat, d'où l'importance de fixer les règles avant de voter.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « La règle de la majorité suffit-elle à rendre une décision démocratique ? » Rédigez une réponse organisée en deux parties, en mobilisant au moins deux auteurs et un exemple institutionnel français.",
              hint: "Montrez d'abord les justifications de la majorité (égalité, efficacité, Condorcet), puis ses limites (paradoxe, tyrannie de la majorité) et les garde-fous prévus par les institutions.",
              solution: [
                "Introduction : la règle de la majorité est le mode de décision ordinaire des démocraties. Mais une décision majoritaire est-elle démocratique du seul fait qu'elle est majoritaire ?",
                "I. La majorité, principe démocratique. Elle traduit l'égalité des voix et permet de décider malgré les désaccords ; elle est réversible, ce qui rend possible l'alternance. Condorcet montre, avec le théorème du jury, qu'une majorité de votants éclairés a de fortes chances d'avoir raison. Pour Rousseau, après le pacte social, la majorité oblige tous les citoyens.",
                "II. Une condition nécessaire mais non suffisante. Le paradoxe de Condorcet montre que la volonté majoritaire peut être incohérente et dépendre de la méthode de vote. Tocqueville redoute la tyrannie de la majorité, qui peut opprimer les minorités. C'est pourquoi les institutions françaises limitent la majorité : le Conseil constitutionnel, saisissable depuis 1974 par 60 députés ou 60 sénateurs, peut censurer une loi votée ; l'article 51-1 de la Constitution reconnaît des droits à l'opposition ; une révision constitutionnelle par le Congrès exige les trois cinquièmes des suffrages exprimés.",
                "Conclusion : la majorité ne suffit pas ; une décision est démocratique lorsqu'elle est majoritaire, précédée d'un débat où la minorité a pu s'exprimer, et respectueuse des droits fondamentaux de tous.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les règles de la décision collective.",
            statements: [
              { text: "La majorité absolue correspond à plus de la moitié des suffrages exprimés.", true: true, why: "Avec 600 suffrages exprimés, il faut au moins 301 voix." },
              { text: "Les bulletins blancs sont comptés dans les suffrages exprimés.", true: false, why: "Depuis 2014, ils sont décomptés à part, mais ils ne font pas partie des suffrages exprimés." },
              { text: "Un consensus suppose que tous les participants approuvent la décision avec enthousiasme.", true: false, why: "Le consensus suppose seulement l'absence d'opposition formelle ; certains peuvent garder des réserves." },
              { text: "Une révision de la Constitution par le Congrès exige les trois cinquièmes des suffrages exprimés.", true: true, why: "C'est la majorité qualifiée prévue par l'article 89 de la Constitution." },
              { text: "Le paradoxe de Condorcet montre que des préférences individuelles cohérentes peuvent produire une préférence collective cyclique.", true: true, why: "A peut battre B, B battre C, et C battre A." },
              { text: "Avec l'unanimité, la minorité ne peut jamais bloquer une décision.", true: false, why: "C'est l'inverse : chaque participant dispose d'un droit de veto." },
              { text: "Depuis 1974, 60 députés ou 60 sénateurs peuvent saisir le Conseil constitutionnel.", true: true, why: "Cette réforme a donné à l'opposition un moyen de faire contrôler les lois votées par la majorité." },
            ],
          },
          quiz: [
            {
              q: "Avec 800 suffrages exprimés, combien de voix faut-il au minimum pour obtenir la majorité absolue ?",
              options: ["400", "401", "480", "534"],
              answer: 1,
              why: "La majorité absolue exige plus de la moitié : 800 ÷ 2 = 400, il faut donc au moins 401 voix.",
            },
            {
              q: "Quelle majorité exige une révision de la Constitution par le Congrès ?",
              options: ["La majorité relative", "La majorité absolue des membres de chaque assemblée réunie séparément", "L'unanimité", "Les trois cinquièmes des suffrages exprimés"],
              answer: 3,
              why: "L'article 89 exige une majorité qualifiée des trois cinquièmes des suffrages exprimés au Congrès.",
            },
            {
              q: "Qu'est-ce qu'une décision adoptée par consensus ?",
              options: ["Une décision adoptée sans vote, faute d'opposition formelle", "Une décision approuvée par plus de la moitié des votants", "Une décision imposée par le participant le plus puissant", "Une décision prise par tirage au sort entre plusieurs options"],
              answer: 0,
              why: "Le consensus se constate sans vote : personne ne s'oppose formellement, même si tous ne sont pas pleinement d'accord.",
            },
            {
              q: "Que montre le théorème du jury de Condorcet ?",
              options: ["Que les jurés tirés au sort se trompent toujours", "Que l'unanimité est la seule règle juste", "Qu'une majorité nombreuse a, sous conditions, de bonnes chances d'avoir raison", "Que les votes à main levée sont toujours plus fiables que les votes à bulletin secret"],
              answer: 2,
              why: "Si chaque votant a plus d'une chance sur deux d'avoir raison et vote de façon indépendante, la majorité tend vers la bonne réponse.",
            },
            {
              q: "Lequel de ces éléments protège la minorité face à la majorité parlementaire ?",
              options: ["La règle de la majorité relative au second tour", "La saisine du Conseil constitutionnel par 60 députés", "Le droit de dissolution du président", "La discipline de vote imposée dans les groupes de la majorité"],
              answer: 1,
              why: "Depuis 1974, l'opposition peut faire contrôler la conformité des lois à la Constitution.",
            },
          ],
          trap: "Calculer la majorité absolue sur les votants ou les inscrits au lieu des suffrages exprimés, ou oublier qu'il faut strictement plus de la moitié : avec 600 suffrages exprimés, 300 voix ne suffisent pas, il en faut 301.",
          method: "Pour tout exercice de vote, procédez dans l'ordre : calculez les suffrages exprimés (votants moins blancs et nuls), vérifiez que la somme des voix leur est égale, puis appliquez le seuil demandé en précisant sur quelle base il se calcule (exprimés ou inscrits).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fabrication-de-la-loi',
          title: 'La fabrication de la loi',
          minutes: 35,
          objectives: [
            "Décrire les étapes de la procédure législative ordinaire sous la Ve République.",
            "Distinguer projet de loi et proposition de loi, domaine de la loi et domaine du règlement.",
            "Expliquer le rôle des commissions, des amendements, de la navette et de la commission mixte paritaire.",
            "Analyser les outils qui renforcent le gouvernement dans la procédure, comme l'article 49, alinéa 3.",
          ],
          course: [
            {
              heading: "Qui fait la loi, et sur quoi ?",
              paragraphs: [
                "Selon l'article 24 de la Constitution, le Parlement vote la loi, contrôle l'action du gouvernement et évalue les politiques publiques. Il comprend deux assemblées : l'Assemblée nationale (577 députés élus au suffrage universel direct pour cinq ans) et le Sénat (348 sénateurs élus au suffrage universel indirect pour six ans, renouvelés par moitié tous les trois ans). La loi est l'expression de la volonté générale (article 6 de la DDHC) : elle est délibérée publiquement par les représentants de la Nation.",
                "La Constitution de 1958 délimite le domaine de la loi (article 34) : droits civiques et libertés publiques, nationalité, définition des crimes et délits et de leurs peines, impôts, principes fondamentaux de l'enseignement, du droit du travail, etc. Tout le reste relève du pouvoir réglementaire du gouvernement (article 37), qui agit par décrets. Le gouvernement peut aussi être habilité par le Parlement à prendre des ordonnances dans le domaine de la loi (article 38), qui doivent ensuite être ratifiées.",
              ],
              box: { label: "Règle", text: "Article 34 : la loi fixe notamment les règles concernant les droits civiques, la nationalité, les crimes et délits et leurs peines, l'assiette et le taux des impôts. Article 37 : les autres matières relèvent du règlement (décrets du gouvernement)." },
            },
            {
              heading: "L'initiative et l'examen en commission",
              paragraphs: [
                "L'initiative des lois appartient concurremment au Premier ministre et aux membres du Parlement (article 39). Un projet de loi émane du gouvernement : il est soumis pour avis au Conseil d'État, accompagné d'une étude d'impact, puis délibéré en Conseil des ministres. Une proposition de loi émane d'un ou de plusieurs parlementaires. Le texte est déposé sur le bureau de l'une des deux assemblées ; les projets de loi de finances et de financement de la sécurité sociale sont d'abord soumis à l'Assemblée nationale, ceux qui concernent l'organisation des collectivités territoriales au Sénat.",
                "Le texte est ensuite examiné par l'une des commissions permanentes (huit au plus par assemblée), qui désigne un rapporteur, auditionne des ministres, des experts, des associations, des syndicats, et examine les amendements. Depuis la révision de 2008, la discussion en séance porte, pour la plupart des textes, sur la version adoptée par la commission. Sauf procédure accélérée, un délai de six semaines doit séparer le dépôt du texte de sa discussion en séance dans la première assemblée.",
              ],
            },
            {
              heading: "Le débat en séance et la navette",
              paragraphs: [
                "En séance publique, les députés ou les sénateurs discutent le texte article par article. Le droit d'amendement appartient aux parlementaires et au gouvernement (article 44) ; mais un amendement d'un parlementaire est irrecevable s'il diminue les ressources publiques ou crée ou aggrave une charge publique (article 40). Chaque article est mis aux voix, puis l'ensemble du texte.",
                "Le texte adopté par une assemblée est transmis à l'autre : c'est la navette. Une loi doit être adoptée dans les mêmes termes par les deux assemblées. En cas de désaccord après deux lectures dans chaque assemblée, ou une seule si le gouvernement a engagé la procédure accélérée, une commission mixte paritaire (CMP), composée de sept députés et de sept sénateurs, cherche un texte commun. Si elle échoue, ou si son texte n'est pas adopté, le gouvernement peut demander à l'Assemblée nationale de statuer définitivement : elle a le dernier mot (article 45).",
              ],
              box: { label: "À retenir", text: "Navette : le texte va et vient entre les deux assemblées jusqu'à son adoption dans les mêmes termes. En cas de désaccord persistant : commission mixte paritaire (7 députés, 7 sénateurs), puis, si besoin, dernier mot à l'Assemblée nationale à la demande du gouvernement." },
            },
            {
              heading: "Du vote à l'application, et les armes du gouvernement",
              paragraphs: [
                "Avant la promulgation, la loi peut être déférée au Conseil constitutionnel par le président de la République, le Premier ministre, le président de l'une des deux assemblées, ou 60 députés ou 60 sénateurs (article 61) ; il statue en principe dans un délai d'un mois. Le président de la République promulgue la loi dans les quinze jours (article 10) ; il peut demander au Parlement une nouvelle délibération, qui ne peut être refusée. La loi est publiée au Journal officiel, puis complétée si nécessaire par des décrets d'application. Après son entrée en vigueur, tout justiciable peut encore la contester par une question prioritaire de constitutionnalité (QPC), créée en 2008.",
                "La Constitution de 1958 donne au gouvernement des moyens de faire aboutir ses textes, dans le cadre du parlementarisme rationalisé : maîtrise d'une partie de l'ordre du jour, procédure accélérée, vote bloqué (article 44, alinéa 3) et surtout l'article 49, alinéa 3. Le Premier ministre peut engager la responsabilité du gouvernement sur un projet de loi de finances ou de financement de la sécurité sociale et, depuis 2008, sur un seul autre texte par session : le texte est considéré comme adopté, sauf si une motion de censure, déposée dans les 24 heures, est votée par la majorité absolue des membres de l'Assemblée (289 voix lorsque les 577 sièges sont pourvus).",
              ],
              box: { label: "Repère", text: "Les grandes étapes : dépôt (projet ou proposition) ; commission ; séance publique ; navette ; CMP en cas de désaccord ; contrôle éventuel du Conseil constitutionnel ; promulgation dans les 15 jours ; publication au Journal officiel ; décrets d'application." },
            },
          ],
          keyPoints: [
            "Le Parlement (Assemblée nationale, 577 députés ; Sénat, 348 sénateurs) vote la loi, contrôle le gouvernement et évalue les politiques publiques.",
            "Projet de loi : initiative du gouvernement (avis du Conseil d'État, Conseil des ministres) ; proposition de loi : initiative parlementaire.",
            "Article 34 : domaine de la loi ; article 37 : domaine du règlement ; article 38 : ordonnances.",
            "Commission, séance, navette jusqu'à l'adoption dans les mêmes termes ; CMP de 7 députés et 7 sénateurs ; dernier mot à l'Assemblée.",
            "Contrôle possible du Conseil constitutionnel (60 députés ou sénateurs), promulgation en 15 jours, publication au Journal officiel.",
            "Article 49.3 : texte adopté sans vote sauf motion de censure votée à la majorité absolue des membres de l'Assemblée.",
          ],
          example: {
            statement: "Le gouvernement veut créer un nouveau délit puni d'une amende et d'une peine de prison. Peut-il le faire par décret ? Décrivez ensuite le parcours du texte jusqu'à son entrée en vigueur, en supposant que les deux assemblées ne parviennent pas à s'accorder.",
            solution: [
              "Identifier le domaine : selon l'article 34 de la Constitution, la loi fixe les règles concernant la détermination des crimes et délits et des peines applicables. Un décret ne suffit donc pas : il faut une loi.",
              "Initiative : le gouvernement rédige un projet de loi, accompagné d'une étude d'impact, le soumet pour avis au Conseil d'État, puis le délibère en Conseil des ministres avant de le déposer sur le bureau d'une assemblée, par exemple l'Assemblée nationale.",
              "Première assemblée : la commission compétente (ici, la commission des lois) examine le texte et les amendements, puis le texte de la commission est discuté et voté en séance publique.",
              "Navette : le Sénat examine à son tour le texte et le modifie ; le texte revient à l'Assemblée. Faute d'accord après deux lectures dans chaque assemblée, ou une seule en procédure accélérée, le Premier ministre convoque une commission mixte paritaire (7 députés, 7 sénateurs).",
              "Désaccord persistant : si la CMP échoue, le gouvernement demande à l'Assemblée nationale de statuer définitivement ; elle adopte le texte en lecture définitive.",
              "Fin du parcours : 60 députés ou 60 sénateurs peuvent saisir le Conseil constitutionnel ; si la loi est jugée conforme, le président de la République la promulgue dans les 15 jours, elle est publiée au Journal officiel et entre en vigueur.",
              "Conclusion : la création d'un délit relève de la loi ; le texte suit la procédure législative ordinaire, où l'Assemblée nationale a le dernier mot en cas de désaccord persistant avec le Sénat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque mesure, dites si elle relève du domaine de la loi (article 34) ou du règlement (article 37) : a) créer un nouveau délit et sa peine ; b) fixer le taux d'un impôt ; c) fixer le montant de l'amende d'une contravention au code de la route ; d) modifier les conditions d'acquisition de la nationalité française ; e) fixer les horaires d'ouverture d'un service administratif.",
              hint: "L'article 34 réserve à la loi les libertés, la nationalité, les crimes et délits, les impôts ; les contraventions et l'organisation pratique des services relèvent du règlement.",
              solution: [
                "a) Loi : l'article 34 réserve à la loi la détermination des crimes et délits et des peines.",
                "b) Loi : l'assiette, le taux et les modalités de recouvrement des impôts relèvent de la loi.",
                "c) Règlement : les contraventions, infractions les moins graves, sont définies par décret.",
                "d) Loi : la nationalité figure explicitement à l'article 34.",
                "e) Règlement : l'organisation pratique d'un service relève du pouvoir réglementaire.",
                "Résultat : a, b et d relèvent de la loi ; c et e du règlement.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le Premier ministre engage la responsabilité du gouvernement sur un projet de loi de finances (article 49, alinéa 3). À ce moment, 575 sièges de députés sur 577 sont pourvus. Une motion de censure est déposée dans les 24 heures et recueille 280 voix. 1) Quel est le nombre de voix nécessaire pour qu'elle soit adoptée ? 2) La motion est-elle adoptée ? Quelles en sont les conséquences pour le texte et pour le gouvernement ? 3) Que se serait-il passé si elle avait recueilli 290 voix ?",
              hint: "La motion doit réunir la majorité absolue des membres composant l'Assemblée, calculée sur les sièges effectivement pourvus ; seuls les votes favorables à la motion sont décomptés.",
              solution: [
                "1) Majorité absolue des membres : plus de la moitié de 575, soit 575 ÷ 2 = 287,5 ; il faut donc au moins 288 voix.",
                "2) 280 < 288 : la motion est rejetée. Le projet de loi de finances est considéré comme adopté par l'Assemblée, sans vote sur le texte lui-même, et le gouvernement reste en place.",
                "Seuls les votes favorables à la motion sont comptés : les députés qui ne la votent pas sont considérés comme soutenant le gouvernement.",
                "3) Avec 290 voix (≥ 288), la motion aurait été adoptée : le texte serait rejeté et le Premier ministre devrait remettre au président de la République la démission du gouvernement (article 50).",
                "Résultat : il fallait 288 voix ; avec 280, la motion est rejetée et le texte est adopté ; avec 290, le gouvernement aurait été renversé et le texte rejeté.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Sous la Ve République, la loi est-elle vraiment délibérée par le Parlement ? » Répondez de façon organisée, en mobilisant au moins trois étapes ou outils de la procédure législative.",
              hint: "Montrez d'abord les lieux réels de la délibération (commissions, amendements, navette, CMP), puis les outils qui permettent au gouvernement de limiter le débat (initiative, ordre du jour, procédure accélérée, 49.3), et concluez sur l'équilibre.",
              solution: [
                "Introduction : la loi est l'expression de la volonté générale, délibérée par les représentants de la Nation. Mais la Constitution de 1958 a voulu un gouvernement stable, doté de moyens d'action sur le Parlement. La délibération parlementaire est-elle alors réelle ?",
                "I. Une délibération réelle. Les commissions examinent en détail les textes, auditionnent experts et acteurs de la société civile, et adoptent le texte discuté en séance depuis 2008. Le droit d'amendement permet aux parlementaires de modifier profondément un texte. La navette entre deux assemblées aux majorités parfois différentes et la commission mixte paritaire obligent à des compromis.",
                "II. Une délibération encadrée par le gouvernement. La plupart des lois adoptées sont d'origine gouvernementale ; le gouvernement maîtrise une partie de l'ordre du jour et peut engager la procédure accélérée. L'article 40 limite les amendements qui créent des charges. Surtout, l'article 49, alinéa 3, permet d'adopter un texte sans vote, sauf si une motion de censure est votée ; son usage, par exemple pour la réforme des retraites en 2023, suscite des critiques sur la qualité démocratique de la décision.",
                "III. Des rééquilibrages. La révision de 2008 a limité le 49.3 à un texte par session en dehors des lois financières, partagé l'ordre du jour et reconnu des droits à l'opposition ; le contrôle du Conseil constitutionnel et la QPC complètent la délibération par un contrôle juridique.",
                "Conclusion : la loi est bien délibérée par le Parlement, mais dans un cadre de parlementarisme rationalisé qui donne au gouvernement une influence décisive ; la qualité de la délibération dépend aussi de l'existence ou non d'une majorité stable.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la fabrication d'une loi d'origine gouvernementale.",
            items: [
              "Avis du Conseil d'État et délibération du projet en Conseil des ministres",
              "Examen du texte par une commission de la première assemblée",
              "Discussion et vote en séance publique dans la première assemblée",
              "Examen et vote du texte par la seconde assemblée",
              "Réunion d'une commission mixte paritaire en cas de désaccord persistant",
              "Contrôle de la loi par le Conseil constitutionnel, s'il est saisi",
              "Promulgation par le président de la République et publication au Journal officiel",
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on un texte de loi déposé par des parlementaires ?",
              options: ["Un projet de loi", "Une proposition de loi", "Une ordonnance", "Un décret d'application"],
              answer: 1,
              why: "Le projet de loi vient du gouvernement ; la proposition de loi vient d'un ou de plusieurs parlementaires.",
            },
            {
              q: "Combien de membres compte une commission mixte paritaire ?",
              options: ["14 : 7 députés et 7 sénateurs", "10 : 5 députés et 5 sénateurs", "30 : 15 députés et 15 sénateurs", "577 : tous les députés"],
              answer: 0,
              why: "La CMP réunit sept députés et sept sénateurs pour proposer un texte commun sur les dispositions restant en discussion.",
            },
            {
              q: "Dans quel délai le président de la République doit-il promulguer une loi ?",
              options: ["Huit jours", "Un mois", "Trois mois après l'adoption définitive", "Quinze jours"],
              answer: 3,
              why: "L'article 10 de la Constitution fixe un délai de quinze jours, pendant lequel il peut demander une nouvelle délibération.",
            },
            {
              q: "Quel article de la Constitution permet d'adopter un texte sans vote, sauf motion de censure ?",
              options: ["L'article 16, sur les pouvoirs exceptionnels", "L'article 34", "L'article 49, alinéa 3", "L'article 89"],
              answer: 2,
              why: "L'article 49, alinéa 3, permet au gouvernement d'engager sa responsabilité sur un texte, considéré comme adopté si aucune motion de censure n'est votée.",
            },
            {
              q: "Qui a le dernier mot en cas de désaccord persistant entre les deux assemblées ?",
              options: ["Le Sénat, sur tous les textes", "L'Assemblée nationale, à la demande du gouvernement", "Le Conseil constitutionnel", "Le président de la République, par un décret pris en Conseil des ministres"],
              answer: 1,
              why: "Selon l'article 45, après l'échec de la CMP, le gouvernement peut demander à l'Assemblée nationale de statuer définitivement.",
            },
          ],
          trap: "Croire que le Sénat peut bloquer indéfiniment une loi ordinaire, ou que le Conseil constitutionnel vote la loi : en cas de désaccord persistant, l'Assemblée nationale a le dernier mot à la demande du gouvernement, et le Conseil constitutionnel ne fait que contrôler la conformité du texte à la Constitution.",
          method: "Apprenez la procédure législative comme un trajet : dessinez un schéma fléché (dépôt, commission, séance, navette, CMP, lecture définitive, Conseil constitutionnel, promulgation, publication) et notez sous chaque étape l'article de la Constitution correspondant.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉLIBÉRER AU-DELÀ DE LA NATION                                        */
    /* ==================================================================== */
    {
      id: 'deliberer-au-dela-nation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'droit-europeen',
          title: 'Le droit européen : décider ensemble dans l\'Union',
          minutes: 35,
          objectives: [
            "Identifier les institutions de l'Union européenne et leur rôle dans la décision.",
            "Décrire la procédure législative ordinaire et les règles de vote au Conseil de l'Union européenne.",
            "Distinguer les sources du droit de l'Union : traités, règlements, directives, décisions.",
            "Expliquer les principes de primauté, d'effet direct et de subsidiarité, et les débats sur la légitimité démocratique de l'Union.",
          ],
          course: [
            {
              heading: "Une union d'États et de citoyens",
              paragraphs: [
                "L'Union européenne (UE) compte 27 États membres depuis le départ du Royaume-Uni, le 31 janvier 2020. Elle est née de traités successifs : le traité de Rome (1957) crée la Communauté économique européenne ; le traité de Maastricht (1992) fonde l'Union européenne et institue la citoyenneté européenne ; le traité de Lisbonne, signé en 2007 et entré en vigueur le 1er décembre 2009, organise aujourd'hui son fonctionnement à travers deux textes, le traité sur l'Union européenne (TUE) et le traité sur le fonctionnement de l'Union européenne (TFUE).",
                "L'Union n'agit que dans les domaines que les États lui ont attribués (principe d'attribution). Ses compétences sont exclusives (union douanière, politique commerciale commune, politique monétaire pour les États de la zone euro, règles de concurrence du marché intérieur), partagées avec les États (marché intérieur, environnement, protection des consommateurs, transports...) ou d'appui (culture, éducation, protection de la santé humaine). Dans les compétences partagées, le principe de subsidiarité impose que l'Union n'intervienne que si l'objectif est mieux atteint à son échelle qu'à celle des États ; le principe de proportionnalité, qu'elle n'aille pas au-delà de ce qui est nécessaire (article 5 du TUE).",
              ],
              box: { label: "Définition", text: "Subsidiarité : dans les domaines qui ne relèvent pas de sa compétence exclusive, l'Union n'intervient que si les objectifs de l'action envisagée ne peuvent pas être atteints de manière suffisante par les États membres et peuvent l'être mieux au niveau de l'Union." },
            },
            {
              heading: "Les institutions et la procédure législative ordinaire",
              paragraphs: [
                "Le Conseil européen réunit les chefs d'État ou de gouvernement, son président et la présidente ou le président de la Commission : il donne les impulsions et fixe les grandes orientations, mais n'exerce pas de fonction législative. La Commission européenne, composée d'un commissaire par État, défend l'intérêt général de l'Union : elle détient presque seule l'initiative législative et veille à l'application des traités. Le Parlement européen, élu au suffrage universel direct depuis 1979, représente les citoyens : 720 députés ont été élus en juin 2024, dont 81 en France. Le Conseil de l'Union européenne réunit les ministres des États membres selon les sujets traités.",
                "La procédure législative ordinaire, issue de la codécision créée par le traité de Maastricht et généralisée par le traité de Lisbonne, s'applique à la plupart des textes : la Commission propose, puis le Parlement européen et le Conseil, colégislateurs, doivent adopter le même texte, au terme d'une à trois lectures et, si besoin, d'un comité de conciliation. En pratique, des négociations entre les trois institutions, appelées trilogues, permettent souvent un accord rapide. La Cour de justice de l'Union européenne (CJUE), à Luxembourg, veille au respect du droit de l'Union et en assure l'interprétation uniforme.",
                "Au Conseil, la règle ordinaire est la majorité qualifiée : 55 % des États membres, soit au moins 15 sur 27, représentant au moins 65 % de la population de l'Union ; une minorité de blocage doit réunir au moins quatre États. L'unanimité reste exigée dans des domaines sensibles : fiscalité, politique étrangère et de sécurité commune, adhésion de nouveaux membres, révision des traités. Depuis 2012, une initiative citoyenne européenne signée par au moins un million de citoyens issus d'au moins sept États peut inviter la Commission à proposer un texte, sans l'y obliger.",
              ],
              box: { label: "Règle", text: "Majorité qualifiée au Conseil de l'UE : au moins 55 % des États (15 sur 27) représentant au moins 65 % de la population. Minorité de blocage : au moins 4 États. Unanimité : fiscalité, politique étrangère, adhésion, révision des traités." },
            },
            {
              heading: "Les sources du droit de l'Union",
              paragraphs: [
                "Le droit primaire est formé des traités et de la Charte des droits fondamentaux de l'Union européenne, proclamée en 2000 et dotée de la même valeur juridique que les traités depuis 2009. Le droit dérivé est adopté par les institutions (article 288 du TFUE). Le règlement a une portée générale, il est obligatoire dans tous ses éléments et directement applicable dans tous les États membres, sans transposition : c'est le cas du règlement général sur la protection des données (RGPD), adopté en 2016 et applicable depuis le 25 mai 2018, ou du règlement sur l'intelligence artificielle adopté en 2024.",
                "La directive lie les États quant au résultat à atteindre, mais leur laisse le choix de la forme et des moyens : chaque État doit la transposer dans son droit national avant une date limite, par une loi ou un décret. La décision est obligatoire dans tous ses éléments, et seulement pour ses destinataires lorsqu'elle en désigne (un État, une entreprise). Les recommandations et les avis ne lient pas leurs destinataires.",
              ],
              box: { label: "À retenir", text: "Règlement : obligatoire en entier et directement applicable partout. Directive : obligatoire quant au résultat, à transposer en droit national. Décision : obligatoire pour ses destinataires. Recommandation et avis : non contraignants." },
            },
            {
              heading: "Primauté, effet direct et légitimité démocratique",
              paragraphs: [
                "La Cour de justice a posé deux principes fondamentaux : l'effet direct (arrêt Van Gend en Loos, 1963), qui permet aux particuliers d'invoquer le droit de l'Union devant leurs juges, et la primauté (arrêt Costa contre ENEL, 1964), selon laquelle le droit de l'Union l'emporte sur les lois nationales contraires, même postérieures. En France, l'article 88-1 de la Constitution affirme la participation de la République à l'Union ; la Cour de cassation (arrêt Jacques Vabre, 1975) puis le Conseil d'État (arrêt Nicolo, 1989) font prévaloir les traités sur les lois, même postérieures. Pour les juges français, la Constitution reste toutefois au sommet de l'ordre juridique interne, et le Conseil constitutionnel protège l'« identité constitutionnelle de la France ».",
                "L'Union fait l'objet d'un débat sur son « déficit démocratique » : décisions jugées lointaines et techniques, rôle important de la Commission, qui n'est pas élue directement, faible participation aux élections européennes. Plusieurs réponses ont été apportées : le Parlement européen est devenu colégislateur et investit la Commission ; les parlements nationaux contrôlent le respect de la subsidiarité et peuvent obliger la Commission à réexaminer une proposition (procédure dite du carton jaune) ; l'initiative citoyenne européenne donne un droit d'initiative aux citoyens. Le rejet du traité constitutionnel par les électeurs français en 2005 montre que la question de l'adhésion des peuples reste ouverte.",
              ],
              box: { label: "Repère", text: "1957 : traité de Rome. 1963 : arrêt Van Gend en Loos (effet direct). 1964 : arrêt Costa contre ENEL (primauté). 1979 : première élection du Parlement européen au suffrage universel direct. 1992 : traité de Maastricht. 2009 : entrée en vigueur du traité de Lisbonne." },
            },
          ],
          keyPoints: [
            "L'UE (27 États) agit dans les compétences attribuées par les traités, selon les principes de subsidiarité et de proportionnalité.",
            "Commission (initiative), Parlement européen et Conseil de l'UE (colégislateurs), Conseil européen (orientations), CJUE (respect du droit).",
            "Procédure législative ordinaire : proposition de la Commission, adoption du même texte par le Parlement et le Conseil.",
            "Majorité qualifiée : 55 % des États et 65 % de la population ; unanimité pour la fiscalité, la politique étrangère, l'adhésion.",
            "Règlement : directement applicable. Directive : à transposer. Décision : obligatoire pour ses destinataires.",
            "Effet direct (1963) et primauté (1964) ; débat sur le déficit démocratique et réponses (Parlement, carton jaune, initiative citoyenne).",
          ],
          example: {
            statement: "Données fictives : au Conseil de l'Union européenne, une proposition est soutenue par 16 États représentant 62 % de la population de l'Union. Est-elle adoptée à la majorité qualifiée ? Que faudrait-il pour qu'elle le soit ?",
            solution: [
              "Rappeler la règle : la majorité qualifiée exige au moins 55 % des États, soit 15 sur 27, et au moins 65 % de la population de l'Union. Les deux conditions sont cumulatives.",
              "Vérifier la première condition : 16 États sur 27 représentent 16 ÷ 27 ≈ 59 %, soit plus de 55 % ; la condition des États est remplie (16 ≥ 15).",
              "Vérifier la seconde condition : 62 % de la population, c'est moins que 65 % ; la condition démographique n'est pas remplie.",
              "Conclure : la proposition n'est pas adoptée, car les deux seuils doivent être atteints ensemble.",
              "Trouver la solution : il faudrait rallier au moins un État supplémentaire, ou remplacer un soutien par celui d'un État plus peuplé, de façon à représenter au moins 65 % de la population.",
              "Conclusion : non, la proposition n'est pas adoptée ; le système de double majorité protège à la fois l'égalité des États et le poids des populations.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque institution à son rôle principal : Commission européenne ; Parlement européen ; Conseil de l'Union européenne ; Conseil européen ; Cour de justice de l'Union européenne. Rôles : a) réunir les ministres des États membres et adopter les textes avec le Parlement ; b) proposer les textes législatifs et veiller à l'application des traités ; c) représenter les citoyens et voter les textes avec le Conseil ; d) fixer les grandes orientations politiques de l'Union ; e) veiller au respect et à l'interprétation uniforme du droit de l'Union.",
              hint: "Attention à ne pas confondre le Conseil de l'Union européenne (les ministres) et le Conseil européen (les chefs d'État ou de gouvernement).",
              solution: [
                "Commission européenne : b) elle détient presque seule l'initiative législative et veille à l'application des traités.",
                "Parlement européen : c) élu au suffrage universel direct, il est colégislateur avec le Conseil.",
                "Conseil de l'Union européenne : a) il réunit les ministres compétents des 27 États et adopte les textes avec le Parlement.",
                "Conseil européen : d) il réunit les chefs d'État ou de gouvernement et donne les impulsions, sans légiférer.",
                "Cour de justice de l'Union européenne : e) elle juge le respect du droit de l'Union et en assure l'interprétation uniforme.",
                "Résultat : Commission-b, Parlement-c, Conseil de l'UE-a, Conseil européen-d, CJUE-e.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, identifiez l'acte de droit de l'Union concerné (règlement, directive, décision) et expliquez ses effets en France : a) un texte européen sur la protection des données personnelles s'applique le même jour dans tous les États, sans loi nationale ; b) un texte européen fixe un objectif de réduction des déchets d'emballages et laisse à chaque État deux ans pour adapter sa législation ; c) la Commission inflige une amende à une entreprise désignée pour abus de position dominante.",
              hint: "Demandez-vous si le texte s'applique directement à tous, s'il doit être transposé, ou s'il ne vise qu'un destinataire précis.",
              solution: [
                "a) Règlement : il est obligatoire dans tous ses éléments et directement applicable dans tous les États membres, sans transposition. C'est le cas du RGPD, applicable depuis le 25 mai 2018.",
                "b) Directive : elle lie la France quant au résultat (l'objectif de réduction), mais lui laisse le choix des moyens ; le Parlement ou le gouvernement doit la transposer avant la date limite, faute de quoi la France peut être condamnée par la CJUE.",
                "c) Décision : elle est obligatoire pour son seul destinataire, l'entreprise visée, qui peut la contester devant le juge de l'Union.",
                "Résultat : a) règlement, directement applicable ; b) directive, à transposer ; c) décision, obligatoire pour son destinataire.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « L'Union européenne souffre-t-elle d'un déficit démocratique ? » Rédigez une réponse organisée en deux parties, en mobilisant au moins trois éléments précis du fonctionnement de l'Union.",
              hint: "Présentez d'abord les critiques (distance, complexité, rôle de la Commission, participation électorale, référendum de 2005), puis les mécanismes démocratiques existants (Parlement colégislateur, Conseil composé de ministres responsables devant leurs parlements, subsidiarité, initiative citoyenne).",
              solution: [
                "Introduction : l'Union européenne adopte des règles qui s'appliquent directement dans les États membres et priment sur les lois nationales. Ces décisions sont-elles prises de façon suffisamment démocratique ?",
                "I. Les arguments en faveur d'un déficit démocratique. La Commission, qui détient presque seule l'initiative législative, n'est pas élue directement. Les décisions, souvent techniques et négociées en trilogues, sont peu visibles des citoyens. La participation aux élections européennes est généralement plus faible qu'aux élections nationales. En 2005, les Français ont rejeté le traité constitutionnel, dont une grande partie a pourtant été reprise par le traité de Lisbonne, ratifié par voie parlementaire.",
                "II. Des mécanismes démocratiques réels. Le Parlement européen, élu au suffrage universel direct depuis 1979, est colégislateur dans la procédure ordinaire et investit la Commission. Le Conseil réunit des ministres de gouvernements démocratiquement désignés, responsables devant leurs parlements. Les parlements nationaux contrôlent la subsidiarité, et l'initiative citoyenne européenne (un million de signatures dans au moins sept États) ouvre un droit d'initiative aux citoyens.",
                "Conclusion : l'Union n'est pas dépourvue de légitimité démocratique, puisqu'elle repose sur une double représentation, des citoyens et des États ; mais la complexité de ses procédures et la distance perçue par les citoyens alimentent un sentiment de déficit, qui appelle plus de transparence et de débat public européen.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion du droit de l'Union à sa définition.",
            pairs: [
              { left: "Règlement", right: "Acte obligatoire en entier et directement applicable dans tous les États" },
              { left: "Directive", right: "Acte qui fixe un résultat à atteindre et doit être transposé" },
              { left: "Primauté", right: "Le droit de l'Union l'emporte sur les lois nationales contraires" },
              { left: "Effet direct", right: "Les particuliers peuvent invoquer le droit de l'Union devant leurs juges" },
              { left: "Subsidiarité", right: "L'Union n'agit que si l'objectif est mieux atteint à son échelle" },
              { left: "Majorité qualifiée", right: "55 % des États représentant au moins 65 % de la population" },
            ],
          },
          quiz: [
            {
              q: "Quelle institution détient presque seule l'initiative législative dans l'Union européenne ?",
              options: ["Le Parlement européen", "Le Conseil européen", "La Cour de justice de l'Union européenne", "La Commission européenne"],
              answer: 3,
              why: "La Commission propose les textes ; le Parlement européen et le Conseil de l'UE les adoptent.",
            },
            {
              q: "Qu'est-ce qu'une directive européenne ?",
              options: ["Un acte qui fixe un résultat et doit être transposé", "Un acte directement applicable sans aucune mesure nationale", "Un avis non contraignant adressé aux États membres", "Un arrêt rendu par la Cour de justice de l'Union"],
              answer: 0,
              why: "La directive lie les États quant au résultat à atteindre, mais leur laisse le choix de la forme et des moyens de la transposition.",
            },
            {
              q: "Quel arrêt de la Cour de justice a posé le principe de primauté du droit communautaire ?",
              options: ["Van Gend en Loos (5 février 1963)", "Nicolo (1989)", "Costa contre ENEL (1964)", "Jacques Vabre (1975)"],
              answer: 2,
              why: "L'arrêt Costa contre ENEL affirme la primauté ; Van Gend en Loos l'effet direct ; Nicolo et Jacques Vabre sont des décisions de juges français.",
            },
            {
              q: "Dans quel domaine l'unanimité reste-t-elle exigée au Conseil de l'Union européenne ?",
              options: ["La plupart des textes du marché intérieur", "La protection des consommateurs", "Les règles de concurrence entre les entreprises du marché intérieur", "La fiscalité"],
              answer: 3,
              why: "La fiscalité, comme la politique étrangère, l'adhésion et la révision des traités, exige l'accord de tous les États.",
            },
            {
              q: "Combien de signatures faut-il pour une initiative citoyenne européenne ?",
              options: ["Un million, dans au moins sept États", "Cent mille, dans un seul État", "Dix millions, dans tous les États", "Cinq cent mille, dans au moins trois États"],
              answer: 0,
              why: "Il faut au moins un million de citoyens issus d'au moins sept États membres ; la Commission doit répondre, sans être obligée de proposer un texte.",
            },
          ],
          trap: "Confondre le Conseil de l'Union européenne (les ministres, colégislateur), le Conseil européen (les chefs d'État ou de gouvernement, qui fixent les orientations) et le Conseil de l'Europe, organisation distincte de l'Union, à laquelle se rattache la Cour européenne des droits de l'homme.",
          method: "Pour réviser l'Union, construisez une fiche en deux colonnes : à gauche, qui décide (Commission, Parlement, Conseil de l'UE, Conseil européen, CJUE) avec leur composition ; à droite, comment (procédure ordinaire, majorité qualifiée, unanimité, types d'actes). Récitez-la en partant d'un exemple concret comme le RGPD.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'droit-international',
          title: 'Le droit international : délibérer entre États',
          minutes: 35,
          objectives: [
            "Définir le droit international public et ses sources : traités, coutume, principes généraux.",
            "Expliquer comment les États délibèrent et décident à l'ONU (Assemblée générale, Conseil de sécurité).",
            "Identifier les juridictions internationales et leurs compétences : Cour internationale de justice, Cour pénale internationale, Cour européenne des droits de l'homme.",
            "Analyser les limites du droit international face à la souveraineté des États.",
          ],
          course: [
            {
              heading: "Un droit entre États souverains",
              paragraphs: [
                "Le droit international public est l'ensemble des règles qui régissent les relations entre les États et les organisations internationales. Il n'existe pas de gouvernement mondial au-dessus des États : ceux-ci sont souverains et égaux en droit (principe de l'égalité souveraine, article 2 de la Charte des Nations unies), et ils ne sont liés que par les règles auxquelles ils ont consenti. Le droit international est donc un droit négocié, issu de la délibération entre États.",
                "Ses sources principales sont énumérées par l'article 38 du statut de la Cour internationale de justice : les conventions internationales (traités), la coutume internationale (une pratique générale acceptée comme étant le droit) et les principes généraux du droit ; la jurisprudence et la doctrine servent de moyens auxiliaires. La convention de Vienne de 1969 sur le droit des traités pose la règle fondamentale pacta sunt servanda : tout traité en vigueur lie les parties et doit être exécuté de bonne foi.",
                "Un traité suit plusieurs étapes : négociation, signature, puis ratification, par laquelle l'État s'engage définitivement. En France, le président de la République négocie et ratifie les traités (article 52 de la Constitution), mais les plus importants (traités de paix, de commerce, relatifs aux organisations internationales, aux finances de l'État, à l'état des personnes ou au territoire) ne peuvent être ratifiés qu'en vertu d'une loi (article 53). Selon l'article 55, les traités régulièrement ratifiés ont une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Si un traité est contraire à la Constitution, sa ratification exige une révision constitutionnelle (article 54).",
              ],
              box: { label: "Définition", text: "Le droit international public est l'ensemble des règles, issues principalement des traités et de la coutume, qui régissent les relations entre États souverains et organisations internationales. Il repose sur le consentement des États." },
            },
            {
              heading: "Délibérer à l'ONU",
              paragraphs: [
                "L'Organisation des Nations unies (ONU) est fondée par la Charte signée à San Francisco le 26 juin 1945, entrée en vigueur le 24 octobre 1945. Elle compte 193 États membres. Ses buts sont de maintenir la paix et la sécurité internationales, de développer des relations amicales entre les nations et de promouvoir les droits de l'homme. La Charte interdit le recours à la force dans les relations internationales (article 2, paragraphe 4), sauf en cas de légitime défense (article 51) ou sur autorisation du Conseil de sécurité.",
                "L'Assemblée générale réunit tous les États membres selon le principe « un État, une voix ». Elle adopte des résolutions qui sont en principe des recommandations, sans force obligatoire ; les questions importantes exigent une majorité des deux tiers des membres présents et votants. Le Conseil de sécurité compte 15 membres : 5 permanents (Chine, États-Unis, France, Royaume-Uni, Russie) et 10 non permanents élus pour deux ans par l'Assemblée générale. Ses décisions sur les questions de fond exigent 9 voix sur 15, sans vote contraire d'un membre permanent : c'est le droit de veto, l'abstention ne valant pas veto selon la pratique. Les décisions prises au titre du chapitre VII de la Charte s'imposent à tous les États membres.",
                "Le veto peut paralyser le Conseil. Le 25 février 2022, la Russie oppose son veto à un projet de résolution condamnant son invasion de l'Ukraine ; le 2 mars 2022, l'Assemblée générale adopte une résolution qui exige le retrait des troupes russes, par 141 voix pour, 5 contre et 35 abstentions, mais sans force obligatoire. Depuis 2013, la France propose que les membres permanents renoncent volontairement au veto en cas d'atrocités de masse.",
              ],
              box: { label: "Règle", text: "Conseil de sécurité : 15 membres dont 5 permanents (Chine, États-Unis, France, Royaume-Uni, Russie). Décision de fond : 9 voix sur 15 sans veto d'un membre permanent. Les décisions du chapitre VII sont obligatoires ; les résolutions de l'Assemblée générale sont en principe des recommandations." },
            },
            {
              heading: "Juger : les juridictions internationales",
              paragraphs: [
                "La Cour internationale de justice (CIJ), siégeant à La Haye, est l'organe judiciaire principal de l'ONU. Composée de 15 juges élus pour neuf ans, elle règle les différends entre États, mais seulement si ceux-ci ont accepté sa compétence ; elle rend aussi des avis consultatifs. La Cour pénale internationale (CPI), créée par le statut de Rome (1998) et en fonction depuis le 1er juillet 2002, juge des personnes, et non des États, pour quatre catégories de crimes : génocide, crimes contre l'humanité, crimes de guerre et crime d'agression. Elle n'intervient que si les juridictions nationales ne veulent pas ou ne peuvent pas juger (principe de complémentarité) ; plusieurs grandes puissances, comme les États-Unis, la Russie, la Chine ou l'Inde, n'y sont pas parties.",
                "À l'échelle régionale, la Cour européenne des droits de l'homme, à Strasbourg, veille au respect de la Convention européenne des droits de l'homme (1950), adoptée dans le cadre du Conseil de l'Europe, qui compte 46 États depuis l'exclusion de la Russie en 2022. Tout justiciable peut la saisir après avoir épuisé les recours nationaux. Elle ne fait pas partie de l'Union européenne : il ne faut la confondre ni avec la Cour de justice de l'Union européenne, à Luxembourg, ni avec la CIJ.",
              ],
              box: { label: "Repère", text: "1945 : Charte des Nations unies et création de la CIJ. 1950 : Convention européenne des droits de l'homme. 1969 : convention de Vienne sur le droit des traités. 1998 : statut de Rome (CPI, en fonction depuis 2002). 2015 : accord de Paris sur le climat." },
            },
            {
              heading: "Forces et limites du droit international",
              paragraphs: [
                "Le droit international a des faiblesses évidentes : il n'existe pas de police mondiale pour l'imposer, les États peuvent se retirer des traités, et le veto des membres permanents bloque le Conseil de sécurité lorsque leurs intérêts sont en jeu. Les sanctions dépendent de la volonté des autres États. L'accord de Paris sur le climat, adopté par consensus le 12 décembre 2015, illustre cette logique : il fixe l'objectif de contenir le réchauffement nettement en dessous de 2 °C et de poursuivre les efforts pour le limiter à 1,5 °C, mais chaque État définit lui-même sa contribution, sans sanction en cas de manquement ; les États-Unis s'en sont retirés une première fois en 2020, l'ont rejoint en 2021, puis ont annoncé un nouveau retrait en janvier 2025.",
                "Le droit international n'en est pas moins respecté au quotidien dans une multitude de domaines (aviation civile, télécommunications, commerce, droit de la mer) parce que les États ont intérêt à la réciprocité et à la prévisibilité. Il offre des enceintes où délibérer plutôt que s'affronter, des procédures de règlement pacifique des différends, et il a fait progresser la protection des droits humains et la lutte contre l'impunité des crimes les plus graves. Délibérer entre États, c'est accepter de négocier des compromis entre souverainetés.",
              ],
            },
          ],
          keyPoints: [
            "Le droit international régit les relations entre États souverains et égaux ; il repose sur leur consentement.",
            "Sources : traités, coutume, principes généraux ; pacta sunt servanda (convention de Vienne, 1969).",
            "En France : ratification par le président, parfois autorisée par une loi ; traités supérieurs aux lois (article 55).",
            "ONU (1945, 193 États) : Assemblée générale, un État une voix, résolutions non obligatoires ; Conseil de sécurité, 15 membres dont 5 permanents avec veto.",
            "CIJ : différends entre États consentants. CPI : juge des personnes pour les crimes les plus graves. Cour EDH : Conseil de l'Europe, pas l'UE.",
            "Limites : pas de force propre, veto, retraits ; forces : réciprocité, règlement pacifique, droits humains.",
          ],
          example: {
            statement: "Données fictives : au Conseil de sécurité, un projet de résolution recueille 12 voix pour, 1 voix contre (celle d'un membre permanent) et 2 abstentions. La résolution est-elle adoptée ? Que se passerait-il si le membre permanent s'était abstenu au lieu de voter contre ?",
            solution: [
              "Rappeler la règle : sur une question de fond, il faut au moins 9 voix sur 15 et aucun vote contraire d'un membre permanent.",
              "Vérifier le total : 12 + 1 + 2 = 15 membres ; les 12 voix pour dépassent le seuil de 9.",
              "Appliquer le veto : un membre permanent a voté contre ; ce vote négatif constitue un veto.",
              "Conclure sur le premier cas : la résolution n'est pas adoptée, malgré une large majorité.",
              "Second cas : si le membre permanent s'abstient, il y a 12 voix pour, 0 contre et 3 abstentions ; selon la pratique constante du Conseil, l'abstention d'un membre permanent ne vaut pas veto, et la résolution est adoptée.",
              "Conclusion : la résolution est bloquée par le veto ; elle aurait été adoptée avec une abstention. Le droit de veto donne aux cinq membres permanents un pouvoir de blocage sans équivalent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quelle juridiction est compétente dans chaque situation (Cour internationale de justice, Cour pénale internationale, Cour européenne des droits de l'homme, Cour de justice de l'Union européenne) : a) deux États qui ont accepté sa compétence se disputent le tracé d'une frontière maritime ; b) un chef militaire est poursuivi pour crimes contre l'humanité, son pays refusant de le juger ; c) un citoyen français estime, après avoir épuisé les recours nationaux, que la France a violé son droit à un procès équitable ; d) un juge français s'interroge sur l'interprétation d'une directive européenne.",
              hint: "Demandez-vous qui est jugé (des États, une personne), sur quel texte (Charte de l'ONU, statut de Rome, Convention européenne des droits de l'homme, droit de l'Union) et dans quel cadre.",
              solution: [
                "a) Cour internationale de justice : elle règle les différends entre États qui ont accepté sa compétence.",
                "b) Cour pénale internationale : elle juge des personnes pour les crimes les plus graves, lorsque les juridictions nationales ne veulent pas ou ne peuvent pas le faire.",
                "c) Cour européenne des droits de l'homme : à Strasbourg, elle peut être saisie par tout justiciable après épuisement des recours internes ; le droit à un procès équitable figure à l'article 6 de la Convention.",
                "d) Cour de justice de l'Union européenne : le juge national peut lui poser une question sur l'interprétation du droit de l'Union (renvoi préjudiciel).",
                "Résultat : a) CIJ, b) CPI, c) Cour EDH, d) CJUE.",
              ],
            },
            {
              level: 2,
              statement: "Comparez l'Assemblée générale et le Conseil de sécurité de l'ONU selon quatre critères : la composition, la règle de vote, la portée des décisions, les avantages et les limites de chaque organe pour la délibération entre États. Concluez sur ce que cette comparaison révèle de l'ordre international.",
              hint: "Opposez l'égalité des États à l'Assemblée et la place particulière des grandes puissances au Conseil, puis reliez la règle de vote à la force des décisions.",
              solution: [
                "Composition : l'Assemblée générale réunit les 193 États membres ; le Conseil de sécurité compte 15 membres, dont 5 permanents et 10 élus pour deux ans.",
                "Règle de vote : à l'Assemblée, un État, une voix, avec une majorité des deux tiers pour les questions importantes ; au Conseil, 9 voix sur 15 sans veto d'un membre permanent pour les questions de fond.",
                "Portée : les résolutions de l'Assemblée sont en principe des recommandations ; les décisions du Conseil prises au titre du chapitre VII sont obligatoires pour tous les États.",
                "Avantages et limites : l'Assemblée est l'enceinte la plus représentative et égalitaire, mais ses textes n'obligent pas ; le Conseil peut agir efficacement, mais le veto le paralyse quand un membre permanent est en cause, comme en février 2022 lors de l'invasion de l'Ukraine.",
                "Conclusion : l'ONU combine l'égalité souveraine des États et la reconnaissance du poids des grandes puissances de 1945 ; la délibération la plus égalitaire est la moins contraignante, la plus contraignante est la moins égalitaire, d'où les projets de réforme du Conseil.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (question argumentée). « Le droit international est-il impuissant face à la souveraineté des États ? » Rédigez une réponse organisée en deux parties, en mobilisant au moins trois exemples ou institutions précis.",
              hint: "Montrez d'abord les limites (consentement, veto, absence de force propre, retraits), puis ce que le droit international parvient à faire (règlement pacifique, justice pénale, coopération quotidienne, accords multilatéraux).",
              solution: [
                "Introduction : le droit international régit les relations entre des États souverains qui ne reconnaissent aucune autorité supérieure. Peut-il alors s'imposer à eux ?",
                "I. Un droit limité par la souveraineté. Il repose sur le consentement : un État n'est lié que par les traités qu'il ratifie, et la CIJ ne juge que les États qui acceptent sa compétence. Il n'existe pas de force armée propre à l'ONU, et le veto des membres permanents bloque le Conseil de sécurité, comme en février 2022 lorsque la Russie a empêché la condamnation de son invasion de l'Ukraine. Les États peuvent se retirer des accords, comme les États-Unis à propos de l'accord de Paris.",
                "II. Un droit qui produit pourtant des effets. Les États respectent l'immense majorité de leurs engagements par intérêt pour la réciprocité (aviation, commerce, télécommunications). Des juridictions jugent : la CPI poursuit des personnes pour génocide, crimes contre l'humanité et crimes de guerre ; la Cour européenne des droits de l'homme condamne des États, dont la France, qui modifient alors leur droit. Les résolutions de l'Assemblée générale, même non obligatoires, isolent diplomatiquement un agresseur (141 voix en mars 2022). Les grands accords multilatéraux, comme l'accord de Paris, créent des obligations de transparence et une pression collective.",
                "Conclusion : le droit international n'est pas impuissant, mais sa force dépend de la volonté des États et de la pression collective ; il n'abolit pas la souveraineté, il l'organise par la négociation et le consentement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le droit international et l'ONU.",
            statements: [
              { text: "Les résolutions de l'Assemblée générale de l'ONU sont toutes juridiquement obligatoires.", true: false, why: "Ce sont en principe des recommandations ; seules certaines décisions, comme le budget, s'imposent." },
              { text: "Le Conseil de sécurité compte cinq membres permanents disposant d'un droit de veto.", true: true, why: "Chine, États-Unis, France, Royaume-Uni et Russie peuvent bloquer une décision de fond." },
              { text: "La Cour européenne des droits de l'homme est une institution de l'Union européenne.", true: false, why: "Elle relève du Conseil de l'Europe (46 États) ; la juridiction de l'Union est la CJUE, à Luxembourg." },
              { text: "La Cour pénale internationale juge des personnes et non des États.", true: true, why: "Elle poursuit des individus pour génocide, crimes contre l'humanité, crimes de guerre et crime d'agression." },
              { text: "Un État peut être jugé par la Cour internationale de justice sans avoir accepté sa compétence.", true: false, why: "La compétence de la CIJ repose sur le consentement des États parties au différend." },
              { text: "En France, les traités régulièrement ratifiés ont une autorité supérieure à celle des lois.", true: true, why: "C'est l'article 55 de la Constitution, sous réserve de réciprocité." },
              { text: "L'abstention d'un membre permanent au Conseil de sécurité équivaut à un veto.", true: false, why: "Selon la pratique constante du Conseil, seul un vote contre vaut veto." },
            ],
          },
          quiz: [
            {
              q: "Quand la Charte des Nations unies a-t-elle été signée ?",
              options: ["Le 26 juin 1945, à San Francisco", "Le 10 décembre 1948, au palais de Chaillot à Paris", "Le 4 novembre 1950, à Rome", "Le 28 juin 1919, à Versailles"],
              answer: 0,
              why: "La Charte est signée à San Francisco le 26 juin 1945 et entre en vigueur le 24 octobre 1945.",
            },
            {
              q: "Combien de voix faut-il au Conseil de sécurité pour adopter une décision de fond, en l'absence de veto ?",
              options: ["8 sur 15", "5 sur 15", "15 sur 15", "9 sur 15"],
              answer: 3,
              why: "Il faut 9 voix sur 15, sans vote contraire de l'un des cinq membres permanents.",
            },
            {
              q: "Qui juge la Cour pénale internationale ?",
              options: ["Des États accusés d'avoir violé un traité", "Des personnes accusées des crimes internationaux les plus graves", "Des entreprises multinationales accusées de pollution transfrontalière grave", "Des organisations internationales en conflit"],
              answer: 1,
              why: "La CPI juge des individus pour génocide, crimes contre l'humanité, crimes de guerre et crime d'agression.",
            },
            {
              q: "Que signifie la règle pacta sunt servanda ?",
              options: ["Les traités en vigueur doivent être exécutés de bonne foi", "Seuls les États puissants sont liés par les traités qu'ils signent", "Les traités sont supérieurs à toutes les constitutions nationales", "Un traité peut être abandonné dès qu'il devient gênant"],
              answer: 0,
              why: "Cette règle, inscrite à l'article 26 de la convention de Vienne de 1969, fonde la force obligatoire des traités.",
            },
            {
              q: "Selon l'article 55 de la Constitution, quelle est l'autorité des traités régulièrement ratifiés ?",
              options: ["Ils sont inférieurs aux lois et aux décrets", "Ils n'ont aucune valeur en droit interne", "Ils sont supérieurs à la Constitution elle-même, sans aucune condition", "Ils sont supérieurs aux lois, sous réserve de réciprocité"],
              answer: 3,
              why: "Les traités ont une autorité supérieure à celle des lois, à condition que l'autre partie les applique ; la Constitution reste au sommet de l'ordre interne.",
            },
          ],
          trap: "Croire que l'ONU est un gouvernement mondial dont toutes les décisions s'imposent : les résolutions de l'Assemblée générale sont en principe des recommandations, seules les décisions du Conseil de sécurité prises au titre du chapitre VII sont obligatoires, et le veto peut les bloquer.",
          method: "Pour ne pas confondre les juridictions, retenez pour chacune trois mots : CIJ (La Haye, États, consentement) ; CPI (La Haye, personnes, crimes graves) ; Cour EDH (Strasbourg, Conseil de l'Europe, droits de l'homme) ; CJUE (Luxembourg, Union européenne, droit de l'Union).",
        },
      ],
    },
  ],
}
