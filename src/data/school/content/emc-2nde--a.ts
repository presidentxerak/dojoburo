import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'emc-2nde',
  chapters: [
    /* ==================================================================== */
    /* LA LIBERTÉ ET LES LIBERTÉS FONDAMENTALES                             */
    /* ==================================================================== */
    {
      id: 'liberte-libertes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'definir-liberte',
          title: "Qu'est-ce que la liberté ? Liberté et loi",
          minutes: 30,
          objectives: [
            "Définir la liberté et distinguer la liberté naturelle, la liberté civile et l'autonomie.",
            "Expliquer, à partir des articles 4 et 5 de la Déclaration de 1789, pourquoi la loi limite la liberté pour la garantir.",
            "Distinguer la liberté au sens philosophique et les libertés au sens juridique.",
            "Argumenter sur une situation où la liberté de l'un rencontre celle des autres.",
          ],
          course: [
            {
              heading: "Ce que la liberté n'est pas : faire tout ce que l'on veut",
              paragraphs: [
                "Dans le langage courant, être libre, c'est « faire ce que l'on veut ». Cette définition spontanée est fragile. D'abord, nos désirs ne viennent pas toujours de nous : une publicité, une habitude, la pression d'un groupe ou une dépendance peuvent nous pousser à vouloir quelque chose. Ensuite, si chacun faisait absolument tout ce qu'il veut, le plus fort imposerait sa volonté au plus faible, et la liberté de presque tous disparaîtrait.",
                "Les philosophes appellent liberté naturelle cette liberté sans règle que l'on imagine avant toute société. Jean-Jacques Rousseau, dans Du contrat social (1762), explique qu'en entrant dans la société l'homme perd cette liberté naturelle, illimitée mais précaire, et gagne la liberté civile, limitée par la volonté générale mais garantie par elle. Il ajoute une troisième forme, la liberté morale, qui consiste à obéir à la loi que l'on s'est soi-même donnée.",
              ],
              box: { label: "Définition", text: "La liberté est la possibilité d'agir selon sa propre volonté, sans contrainte extérieure illégitime. En société, elle n'est réelle que si elle est garantie à tous de manière égale : la liberté de chacun s'arrête là où elle empêcherait celle des autres." },
            },
            {
              heading: "La liberté selon la Déclaration de 1789",
              paragraphs: [
                "La Déclaration des droits de l'homme et du citoyen (DDHC) du 26 août 1789 place la liberté au premier rang des droits naturels. Son article 4 en donne une définition célèbre : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. Les droits de chacun n'ont donc pour bornes que celles qui assurent aux autres membres de la société la jouissance de ces mêmes droits, et ces bornes ne peuvent être fixées que par la loi.",
                "L'article 5 complète ce principe : la loi n'a le droit d'interdire que les actions nuisibles à la société ; tout ce qui n'est pas interdit par la loi ne peut être empêché, et nul ne peut être contraint à faire ce qu'elle n'ordonne pas. La liberté est donc la règle et l'interdiction l'exception. Un policier, un maire ou un employeur ne peut pas vous interdire un comportement que la loi permet, sauf si une règle légale l'y autorise.",
              ],
              box: { label: "À retenir", text: "Article 4 de la DDHC : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ; ses bornes sont fixées par la loi. Article 5 : tout ce qui n'est pas défendu par la loi ne peut être empêché." },
            },
            {
              heading: "La loi, condition de la liberté",
              paragraphs: [
                "Il peut sembler paradoxal que la loi, qui interdit, protège la liberté. Pourtant, sans le Code de la route, personne ne pourrait circuler librement en sécurité : la règle commune (rouler à droite, s'arrêter au feu rouge) rend possible la liberté de déplacement de tous. De même, l'interdiction du vol garantit la liberté de posséder, et l'interdiction des violences garantit la liberté d'aller et venir sans crainte.",
                "Montesquieu, dans De l'esprit des lois (1748), définit la liberté politique comme le droit de faire tout ce que les lois permettent. Mais cette liberté suppose que les lois soient elles-mêmes justes : c'est pourquoi il défend la séparation des pouvoirs, afin que celui qui fait la loi ne soit pas aussi celui qui l'applique et qui juge. Une loi imposée par un tyran opprime ; une loi votée par les représentants des citoyens et respectueuse des droits fondamentaux libère. Pour Rousseau, l'obéissance à la loi que l'on s'est prescrite est liberté.",
              ],
              box: { label: "Repère", text: "1748 : Montesquieu, De l'esprit des lois (séparation des pouvoirs). 1762 : Rousseau, Du contrat social (liberté civile). 26 août 1789 : DDHC, articles 4 et 5 (la liberté et ses bornes fixées par la loi)." },
            },
            {
              heading: "La liberté et les libertés",
              paragraphs: [
                "Il faut distinguer la liberté, au singulier, idée philosophique qui désigne la capacité d'un être humain à se déterminer lui-même, et les libertés, au pluriel, qui sont des droits précis reconnus par des textes juridiques : liberté d'aller et venir, liberté d'expression, liberté de conscience, liberté de réunion, liberté d'association. Ces libertés sont protégées par l'État et par les juges, mais elles sont aussi encadrées par la loi.",
                "On distingue souvent deux faces de la liberté. La liberté au sens négatif est l'absence d'obstacle ou d'interdiction : personne ne m'empêche de parler. La liberté au sens positif est la capacité réelle d'agir : savoir lire, disposer de ressources, accéder à l'information. Une liberté proclamée mais impossible à exercer reste formelle. C'est pourquoi l'école gratuite et obligatoire ou l'accès aux soins sont aussi des conditions de la liberté.",
              ],
            },
          ],
          keyPoints: [
            "Être libre n'est pas faire tout ce que l'on veut : une liberté sans règle profite au plus fort.",
            "Article 4 de la DDHC (1789) : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui, dans les bornes fixées par la loi.",
            "Article 5 : la loi n'interdit que ce qui nuit à la société ; ce qu'elle n'interdit pas ne peut être empêché.",
            "Rousseau distingue la liberté naturelle (illimitée, précaire) et la liberté civile (limitée, garantie par la loi).",
            "Montesquieu : la liberté politique suppose des lois justes et la séparation des pouvoirs.",
            "La liberté (idée philosophique) se distingue des libertés (droits précis garantis par des textes).",
          ],
          example: {
            statement: "Un lycéen écoute de la musique très fort à 2 heures du matin dans son appartement. Quand un voisin se plaint, il répond : « Je suis chez moi, je suis libre. » A-t-il raison ? Répondez en vous appuyant sur la Déclaration de 1789.",
            solution: [
              "Identifier la liberté invoquée : le lycéen se réfère à sa liberté personnelle et au droit de faire ce qu'il veut dans son logement.",
              "Rappeler la définition de l'article 4 de la DDHC : la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.",
              "Appliquer à la situation : le bruit nocturne empêche les voisins de dormir, il nuit donc à autrui et porte atteinte à leur propre liberté (se reposer chez soi).",
              "Mobiliser la loi : l'article 4 précise que les bornes de la liberté sont fixées par la loi ; en France, le tapage nocturne est une infraction punie d'une amende.",
              "Nuancer : le lycéen reste libre d'écouter de la musique chez lui, mais à un volume qui ne gêne pas les autres ou avec un casque.",
              "Conclusion : il a tort. Sa liberté s'arrête là où commence la nuisance à autrui ; la loi qui la limite garantit la liberté de tous.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque phrase à la notion qu'elle illustre : liberté naturelle, liberté civile, liberté au sens positif. a) Avant toute société, chacun pourrait prendre ce qu'il peut saisir, mais il risquerait à tout moment de le perdre face à un plus fort. b) Un citoyen peut circuler où il veut sur le territoire, dans le respect du Code de la route. c) Grâce à l'école gratuite, un enfant apprend à lire et peut ensuite s'informer par lui-même.",
              hint: "La liberté naturelle n'a pas de règle, la liberté civile est garantie et limitée par la loi, la liberté au sens positif désigne la capacité réelle d'agir.",
              solution: [
                "a) Liberté naturelle : elle est illimitée mais précaire, car rien ne protège le faible contre le fort.",
                "b) Liberté civile : la liberté de circuler est garantie par la loi, qui l'encadre aussi par des règles communes.",
                "c) Liberté au sens positif : l'éducation donne une capacité réelle d'exercer sa liberté (s'informer, juger).",
                "Résultat : a = liberté naturelle, b = liberté civile, c = liberté au sens positif.",
              ],
            },
            {
              level: 2,
              statement: "Le maire d'une commune prend un arrêté interdisant à toute personne de porter un sweat à capuche dans les rues, sans aucune justification. Un habitant conteste cet arrêté. En vous appuyant sur l'article 5 de la DDHC, expliquez pourquoi cet arrêté pose problème.",
              hint: "Demandez-vous si le port d'un vêtement ordinaire nuit à la société, et rappelez ce que dit l'article 5 sur ce que la loi peut interdire.",
              solution: [
                "Rappel de l'article 5 : la loi n'a le droit de défendre que les actions nuisibles à la société, et tout ce qui n'est pas défendu par la loi ne peut être empêché.",
                "Analyse : porter un sweat à capuche est un comportement ordinaire qui ne cause en lui-même aucun dommage à autrui.",
                "Conséquence : une interdiction générale et sans justification limite la liberté sans protéger personne ; elle renverse le principe selon lequel la liberté est la règle et l'interdiction l'exception.",
                "Recours : l'habitant peut saisir le juge administratif, qui vérifie qu'une mesure limitant une liberté est justifiée et proportionnée.",
                "Conclusion : l'arrêté porte une atteinte injustifiée à la liberté individuelle ; il a toutes les chances d'être annulé.",
              ],
            },
            {
              level: 3,
              statement: "Rédigez un paragraphe argumenté (15 à 20 lignes) répondant à la question : « Obéir à la loi, est-ce renoncer à sa liberté ? » Vous mobiliserez au moins deux références du cours (auteur, texte ou article) et un exemple concret.",
              hint: "Partez de l'apparente opposition (la loi interdit), puis montrez que la loi rend la liberté possible, enfin précisez à quelle condition une loi libère au lieu d'opprimer.",
              solution: [
                "Introduction : obéir à la loi semble s'opposer à la liberté, puisque la loi interdit et contraint. On peut pourtant se demander si la liberté est possible sans loi.",
                "Premier temps : une liberté sans règle, que Rousseau appelle liberté naturelle, est précaire : chacun est menacé par le plus fort. Elle profite à quelques-uns et non à tous.",
                "Deuxième temps : la loi garantit la liberté de tous. L'article 4 de la DDHC définit la liberté comme le pouvoir de faire tout ce qui ne nuit pas à autrui, dans des bornes fixées par la loi. Exemple : le Code de la route limite la liberté de chaque conducteur mais rend possible la circulation de tous en sécurité.",
                "Troisième temps : encore faut-il que la loi soit juste. Pour Rousseau, l'obéissance à la loi qu'on s'est prescrite est liberté ; pour Montesquieu, des lois justes supposent la séparation des pouvoirs. Une loi votée par les représentants des citoyens et contrôlée par des juges libère ; une loi imposée par un tyran opprime.",
                "Conclusion : obéir à la loi n'est pas renoncer à sa liberté, à condition que la loi soit démocratique et respecte les droits fondamentaux. C'est alors elle qui transforme une liberté fragile en liberté garantie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la liberté et la loi.",
            statements: [
              { text: "Selon l'article 4 de la DDHC, la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.", true: true, why: "C'est la définition donnée par la Déclaration du 26 août 1789." },
              { text: "Plus il y a de lois, moins il y a de liberté, dans tous les cas.", true: false, why: "Certaines lois garantissent la liberté de tous, comme l'interdiction des violences ou le Code de la route." },
              { text: "Ce que la loi n'interdit pas ne peut pas être empêché.", true: true, why: "C'est le principe posé par l'article 5 de la DDHC : la liberté est la règle." },
              { text: "Pour Rousseau, la liberté civile est plus précaire que la liberté naturelle.", true: false, why: "C'est l'inverse : la liberté naturelle est illimitée mais précaire, la liberté civile est limitée mais garantie." },
              { text: "Montesquieu défend la séparation des pouvoirs pour protéger la liberté.", true: true, why: "Dans De l'esprit des lois (1748), il montre que concentrer les pouvoirs conduit à l'abus." },
              { text: "La liberté d'expression et la liberté d'association sont des exemples de libertés au sens juridique.", true: true, why: "Ce sont des droits précis reconnus par des textes, distincts de la liberté au sens philosophique." },
              { text: "Une liberté proclamée par un texte est toujours réellement exercée par tous.", true: false, why: "Sans moyens concrets (éducation, ressources), une liberté peut rester formelle." },
            ],
          },
          quiz: [
            {
              q: "Quel article de la DDHC définit la liberté comme le pouvoir de faire tout ce qui ne nuit pas à autrui ?",
              options: ["L'article 1er", "L'article 4", "L'article 11", "L'article 17"],
              answer: 1,
              why: "L'article 4 définit la liberté et précise que ses bornes ne peuvent être déterminées que par la loi.",
            },
            {
              q: "Selon l'article 5 de la DDHC, que peut interdire la loi ?",
              options: ["Les actions nuisibles à la société", "Tout ce qui déplaît à la majorité", "Les opinions minoritaires", "Ce que le gouvernement juge inutile"],
              answer: 0,
              why: "La loi n'a le droit de défendre que les actions nuisibles à la société ; le reste relève de la liberté.",
            },
            {
              q: "Quel auteur distingue la liberté naturelle et la liberté civile dans Du contrat social ?",
              options: ["Montesquieu", "Voltaire", "Jean-Jacques Rousseau", "Alexis de Tocqueville"],
              answer: 2,
              why: "Rousseau publie Du contrat social en 1762 et y montre ce que l'homme perd et gagne en entrant dans la société.",
            },
            {
              q: "Pourquoi Montesquieu défend-il la séparation des pouvoirs ?",
              options: ["Pour renforcer l'autorité personnelle du roi", "Pour supprimer toutes les lois du royaume", "Pour confier la justice aux tribunaux de l'Église", "Pour empêcher l'abus de pouvoir"],
              answer: 3,
              why: "Si une même autorité fait la loi, l'applique et juge, rien ne l'empêche d'abuser de son pouvoir.",
            },
            {
              q: "Que désigne la liberté au sens positif ?",
              options: ["L'absence de toute loi", "La capacité réelle d'agir", "Le droit de nuire à autrui", "L'obéissance aveugle"],
              answer: 1,
              why: "La liberté au sens positif suppose des moyens concrets d'agir, comme savoir lire ou accéder à l'information.",
            },
          ],
          trap: "Confondre la liberté avec l'absence de toute règle : la loi n'est pas l'ennemie de la liberté, elle en fixe les bornes pour qu'elle soit garantie à tous de façon égale.",
          method: "Pour chaque situation, posez trois questions dans l'ordre : quelle liberté est en jeu ? nuit-elle à autrui ? que dit la loi ? Votre réponse s'appuie alors naturellement sur les articles 4 et 5 de la DDHC.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'libertes-fondamentales',
          title: "Les libertés fondamentales et les textes qui les garantissent",
          minutes: 30,
          objectives: [
            "Identifier les principales libertés fondamentales et les classer (libertés de la personne, de pensée, d'action collective).",
            "Situer dans le temps les textes nationaux, européens et internationaux qui les garantissent.",
            "Expliquer ce qu'est le bloc de constitutionnalité.",
            "Relier une liberté à la loi ou au texte qui la protège.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une liberté fondamentale ?",
              paragraphs: [
                "Une liberté fondamentale est un droit essentiel reconnu à toute personne et protégé par des textes de valeur supérieure (Constitution, traités internationaux). Elle s'impose au législateur comme à l'administration : une loi ou une décision qui la méconnaît peut être annulée ou écartée par un juge. On parle aussi de libertés publiques, parce que c'est la puissance publique qui doit les reconnaître et les garantir.",
                "On peut les classer en trois familles. Les libertés de la personne : sûreté (ne pas être arrêté ou détenu arbitrairement), liberté d'aller et venir, respect de la vie privée. Les libertés de pensée : liberté de conscience, d'opinion, d'expression, de la presse. Les libertés d'action collective : liberté de réunion, d'association, de manifestation, liberté syndicale et droit de grève.",
              ],
              box: { label: "Définition", text: "Une liberté fondamentale est un droit essentiel de la personne, garanti par la Constitution ou par des engagements internationaux, que ni la loi ni l'administration ne peuvent supprimer, et dont le respect est assuré par des juges." },
            },
            {
              heading: "Les textes français : le bloc de constitutionnalité",
              paragraphs: [
                "La Constitution du 4 octobre 1958 ne contient pas elle-même une longue liste de droits. Son préambule renvoie à trois textes : la Déclaration des droits de l'homme et du citoyen de 1789, qui proclame les droits naturels (liberté, propriété, sûreté, résistance à l'oppression), le Préambule de la Constitution de 1946, qui ajoute des droits économiques et sociaux (droit de grève, liberté syndicale, droit à la protection de la santé, égalité entre les femmes et les hommes), et la Charte de l'environnement de 2004, intégrée en 2005.",
                "Par sa décision du 16 juillet 1971, dite « Liberté d'association », le Conseil constitutionnel a reconnu la valeur constitutionnelle de ce préambule et des textes auxquels il renvoie. Il a censuré une loi qui soumettait la création des associations à un contrôle préalable. L'ensemble formé par la Constitution, la DDHC, le Préambule de 1946 et la Charte de l'environnement est appelé le bloc de constitutionnalité.",
              ],
              box: { label: "À retenir", text: "Bloc de constitutionnalité : Constitution de 1958, DDHC de 1789, Préambule de 1946, Charte de l'environnement de 2004. Sa valeur juridique a été reconnue par le Conseil constitutionnel le 16 juillet 1971." },
            },
            {
              heading: "Les grandes lois de liberté",
              paragraphs: [
                "Sous la Troisième République, plusieurs lois ont organisé concrètement l'exercice des libertés et sont toujours en vigueur, souvent modifiées depuis. La loi du 30 juin 1881 sur la liberté de réunion, la loi du 29 juillet 1881 sur la liberté de la presse, la loi du 21 mars 1884 (loi Waldeck-Rousseau) qui autorise les syndicats, la loi du 1er juillet 1901 sur la liberté d'association et la loi du 9 décembre 1905 de séparation des Églises et de l'État, qui garantit la liberté de conscience.",
                "Ces lois reposent sur le même principe libéral : la liberté s'exerce sans autorisation préalable. Pour créer une association, il suffit de se réunir à deux personnes au moins autour d'un projet ; une déclaration en préfecture n'est nécessaire que pour lui donner la capacité juridique (avoir un compte bancaire, recevoir des subventions). Pour une manifestation sur la voie publique, une simple déclaration préalable est exigée, et l'autorité ne peut l'interdire qu'en cas de menace sérieuse pour l'ordre public.",
              ],
            },
            {
              heading: "Les textes européens et internationaux",
              paragraphs: [
                "Après la Seconde Guerre mondiale, la protection des droits devient internationale. La Déclaration universelle des droits de l'homme est adoptée par l'Assemblée générale des Nations unies à Paris le 10 décembre 1948 ; René Cassin a participé à sa rédaction. C'est un texte de référence majeur, mais il n'est pas directement contraignant devant les juges.",
                "La Convention européenne de sauvegarde des droits de l'homme et des libertés fondamentales, signée à Rome le 4 novembre 1950 dans le cadre du Conseil de l'Europe, est au contraire contraignante. La France l'a ratifiée en 1974. Depuis 1981, toute personne qui a épuisé les recours devant les juridictions françaises peut saisir la Cour européenne des droits de l'homme, à Strasbourg. Dans l'Union européenne, la Charte des droits fondamentaux, proclamée en 2000, a la même valeur juridique que les traités depuis l'entrée en vigueur du traité de Lisbonne, le 1er décembre 2009.",
              ],
              box: { label: "Repère", text: "1789 : DDHC. 1946 : Préambule (droits sociaux). 1948 : Déclaration universelle des droits de l'homme (ONU). 1950 : Convention européenne des droits de l'homme (ratifiée par la France en 1974). 2000 : Charte des droits fondamentaux de l'UE (contraignante depuis 2009)." },
            },
          ],
          keyPoints: [
            "Une liberté fondamentale est garantie par des textes supérieurs et protégée par des juges, contre la loi comme contre l'administration.",
            "Trois familles : libertés de la personne, libertés de pensée, libertés d'action collective.",
            "Le bloc de constitutionnalité réunit la Constitution de 1958, la DDHC, le Préambule de 1946 et la Charte de l'environnement.",
            "Décision du Conseil constitutionnel du 16 juillet 1971 : le préambule a valeur constitutionnelle (liberté d'association).",
            "Grandes lois : réunion et presse (1881), syndicats (1884), associations (1901), séparation des Églises et de l'État (1905).",
            "DUDH (1948), Convention européenne des droits de l'homme (1950), Charte des droits fondamentaux de l'UE (2000).",
          ],
          example: {
            statement: "Trois lycéens veulent créer une association pour organiser des concerts au profit d'une cause humanitaire. Le proviseur leur dit qu'ils doivent d'abord obtenir l'autorisation du préfet. Est-ce exact ? Quels textes garantissent leur liberté ?",
            solution: [
              "Identifier la liberté en jeu : la liberté d'association, liberté d'action collective.",
              "Citer la loi : la loi du 1er juillet 1901 permet de créer une association librement, sans autorisation préalable, à partir de deux personnes.",
              "Préciser la démarche : une déclaration en préfecture n'est pas une autorisation ; elle donne seulement la capacité juridique à l'association (ouvrir un compte, recevoir des dons ou des subventions).",
              "Citer la garantie constitutionnelle : le Conseil constitutionnel a reconnu en 1971 la liberté d'association comme principe à valeur constitutionnelle et a censuré une loi qui voulait instaurer un contrôle préalable.",
              "Ajouter la garantie européenne : l'article 11 de la Convention européenne des droits de l'homme protège la liberté de réunion et d'association.",
              "Conclusion : le proviseur se trompe ; aucune autorisation n'est nécessaire, une simple déclaration suffit pour que l'association ait la capacité juridique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les libertés suivantes dans les trois familles du cours (libertés de la personne, libertés de pensée, libertés d'action collective) : liberté d'aller et venir, liberté de conscience, droit de grève, liberté de la presse, sûreté, liberté de réunion.",
              hint: "Demandez-vous si la liberté concerne le corps et la vie privée de la personne, ce qu'elle pense et exprime, ou ce qu'elle fait avec d'autres.",
              solution: [
                "Libertés de la personne : liberté d'aller et venir, sûreté.",
                "Libertés de pensée : liberté de conscience, liberté de la presse.",
                "Libertés d'action collective : droit de grève, liberté de réunion.",
                "Résultat : deux libertés dans chaque famille.",
              ],
            },
            {
              level: 2,
              statement: "Remettez ces textes dans l'ordre chronologique et indiquez pour chacun s'il est national, européen ou international : Charte des droits fondamentaux de l'Union européenne, Préambule de la Constitution de 1946, Déclaration universelle des droits de l'homme, Déclaration des droits de l'homme et du citoyen, Convention européenne des droits de l'homme, Charte de l'environnement.",
              hint: "Repérez d'abord les deux textes de la période révolutionnaire et de la Libération, puis ceux de l'après-guerre, enfin ceux des années 2000.",
              solution: [
                "1789 : Déclaration des droits de l'homme et du citoyen (national).",
                "1946 : Préambule de la Constitution de 1946 (national).",
                "1948 : Déclaration universelle des droits de l'homme (international, ONU).",
                "1950 : Convention européenne des droits de l'homme (européen, Conseil de l'Europe).",
                "2000 : Charte des droits fondamentaux de l'Union européenne (européen, Union européenne).",
                "2004 : Charte de l'environnement (national, intégrée à la Constitution en 2005).",
              ],
            },
            {
              level: 3,
              statement: "Document (rédigé pour l'exercice) : « En 1971, le gouvernement fait voter une loi qui permet au préfet de refuser l'enregistrement d'une association s'il estime qu'elle poursuit un but illicite. Saisi par le président du Sénat, le Conseil constitutionnel censure cette disposition. » Expliquez, en un développement construit, pourquoi cette décision est considérée comme fondatrice pour la protection des libertés en France.",
              hint: "Expliquez ce que la loi changeait par rapport à la loi de 1901, sur quel texte le Conseil s'est appuyé, et ce que cette décision a changé pour tous les droits du préambule.",
              solution: [
                "Contexte : la loi du 1er juillet 1901 permet de créer une association sans autorisation ; la loi de 1971 introduisait un contrôle préalable par le préfet.",
                "Raisonnement du Conseil : il s'appuie sur le préambule de la Constitution de 1958 et reconnaît la liberté d'association comme un principe fondamental reconnu par les lois de la République ; un contrôle préalable par l'administration y porte atteinte.",
                "Première portée : le Conseil ne se limite plus à vérifier la répartition des compétences entre le Parlement et le gouvernement ; il contrôle le respect des droits et libertés par la loi.",
                "Deuxième portée : en donnant valeur constitutionnelle au préambule, il intègre la DDHC et le Préambule de 1946 à ce que l'on appelle le bloc de constitutionnalité. Toutes les libertés qu'ils proclament s'imposent désormais au législateur.",
                "Conclusion : la décision du 16 juillet 1971 fait du Conseil constitutionnel un protecteur des libertés et rappelle que même une loi votée par la majorité doit respecter les droits fondamentaux.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque liberté au texte qui l'a organisée ou garantie.",
            pairs: [
              { left: "Liberté d'association", right: "Loi du 1er juillet 1901" },
              { left: "Liberté de la presse", right: "Loi du 29 juillet 1881" },
              { left: "Liberté syndicale", right: "Loi Waldeck-Rousseau de 1884" },
              { left: "Liberté de conscience", right: "Loi du 9 décembre 1905" },
              { left: "Droit de grève", right: "Préambule de la Constitution de 1946" },
              { left: "Recours individuel à Strasbourg", right: "Convention européenne des droits de l'homme" },
            ],
          },
          quiz: [
            {
              q: "Quelle décision du Conseil constitutionnel a reconnu la valeur constitutionnelle du préambule ?",
              options: ["La décision du 16 juillet 1971", "La décision du 4 octobre 1958", "La décision du 10 décembre 1948", "La décision du 1er mars 2005"],
              answer: 0,
              why: "La décision « Liberté d'association » du 16 juillet 1971 fonde le bloc de constitutionnalité.",
            },
            {
              q: "Lequel de ces textes ne fait pas partie du bloc de constitutionnalité ?",
              options: ["La DDHC de 1789", "Le Préambule de la Constitution de 1946", "La Charte de l'environnement", "La Déclaration universelle de 1948"],
              answer: 3,
              why: "La DUDH est un texte de l'ONU ; elle inspire le droit mais ne fait pas partie de la Constitution française.",
            },
            {
              q: "Où siège la Cour européenne des droits de l'homme ?",
              options: ["À Bruxelles", "À Strasbourg", "À Genève", "À Luxembourg"],
              answer: 1,
              why: "Elle siège à Strasbourg et relève du Conseil de l'Europe, distinct de l'Union européenne.",
            },
            {
              q: "Que faut-il pour créer une association selon la loi de 1901 ?",
              options: ["Une autorisation écrite du préfet du département", "Au moins dix membres majeurs", "Deux personnes et un projet commun", "Un agrément du ministère de l'Intérieur"],
              answer: 2,
              why: "La création est libre ; la déclaration en préfecture sert seulement à donner la capacité juridique.",
            },
            {
              q: "Quel droit le Préambule de 1946 a-t-il ajouté à ceux de 1789 ?",
              options: ["Le droit de propriété", "La sûreté", "Le droit de grève", "La résistance à l'oppression"],
              answer: 2,
              why: "Le Préambule de 1946 ajoute des droits économiques et sociaux, dont le droit de grève ; les trois autres figurent dans la DDHC.",
            },
          ],
          trap: "Confondre la Convention européenne des droits de l'homme (Conseil de l'Europe, Cour de Strasbourg) avec l'Union européenne, ou croire que la Déclaration universelle de 1948 a la même force juridique que la Constitution.",
          method: "Construisez une frise à trois étages (national, européen, international) et placez-y chaque texte avec sa date et une liberté qu'il protège : vous retiendrez ensemble la chronologie et le niveau de chaque garantie.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÉTAT DE DROIT, GARANT DES LIBERTÉS                                 */
    /* ==================================================================== */
    {
      id: 'etat-de-droit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'hierarchie-normes',
          title: "La hiérarchie des normes et le contrôle de constitutionnalité",
          minutes: 35,
          objectives: [
            "Définir l'État de droit et expliquer en quoi il protège les libertés.",
            "Présenter la hiérarchie des normes en France, de la Constitution aux actes administratifs.",
            "Expliquer le rôle et la composition du Conseil constitutionnel.",
            "Distinguer le contrôle de constitutionnalité a priori et la question prioritaire de constitutionnalité (QPC).",
          ],
          course: [
            {
              heading: "L'État de droit : le pouvoir soumis au droit",
              paragraphs: [
                "Un État de droit est un État dans lequel les gouvernants, comme les gouvernés, sont soumis à des règles de droit connues à l'avance, et où des juges indépendants peuvent sanctionner leur non-respect. Il s'oppose à l'État arbitraire, où le pouvoir décide selon son bon plaisir, et à l'État de police, où l'administration agit sans limite au nom de l'ordre.",
                "L'État de droit repose sur trois piliers : une hiérarchie des normes, qui place les droits fondamentaux au sommet ; la séparation des pouvoirs, qui empêche une même autorité de tout décider ; et un contrôle juridictionnel, qui permet à toute personne de contester devant un juge une décision qui viole une règle supérieure. L'article 16 de la DDHC l'exprime ainsi : une société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de Constitution.",
              ],
              box: { label: "Définition", text: "L'État de droit est un système dans lequel la puissance publique est soumise au droit : chaque règle doit respecter les règles supérieures, et des juges indépendants peuvent écarter ou annuler celles qui ne les respectent pas." },
            },
            {
              heading: "La hiérarchie des normes",
              paragraphs: [
                "Le juriste autrichien Hans Kelsen (1881-1973) a représenté l'ordre juridique comme une pyramide : chaque norme tire sa validité de la norme qui lui est supérieure et doit la respecter. En France, au sommet se trouve le bloc de constitutionnalité (Constitution de 1958, DDHC, Préambule de 1946, Charte de l'environnement). Viennent ensuite les traités internationaux et le droit de l'Union européenne : selon l'article 55 de la Constitution, les traités régulièrement ratifiés ont une autorité supérieure à celle des lois.",
                "Au-dessous se trouvent les lois, votées par le Parlement, puis les règlements adoptés par le pouvoir exécutif : décrets du Président de la République ou du Premier ministre, arrêtés des ministres, des préfets ou des maires. À la base se situent les décisions administratives individuelles, comme un permis de construire ou une sanction disciplinaire. Un arrêté municipal doit donc respecter les décrets, les lois, les traités et la Constitution.",
              ],
              box: { label: "Règle", text: "Bloc de constitutionnalité, puis traités et droit européen, puis lois, puis règlements (décrets, arrêtés), puis actes administratifs individuels. Une norme inférieure doit toujours respecter les normes supérieures." },
            },
            {
              heading: "Le Conseil constitutionnel et le contrôle a priori",
              paragraphs: [
                "Le Conseil constitutionnel, créé par la Constitution de 1958, vérifie que les lois respectent la Constitution. Il compte neuf membres nommés pour neuf ans, non renouvelables : trois par le Président de la République, trois par le président de l'Assemblée nationale et trois par le président du Sénat ; il est renouvelé par tiers tous les trois ans. Les anciens présidents de la République en sont membres de droit.",
                "Le contrôle a priori (article 61) intervient après le vote d'une loi et avant sa promulgation. Il est obligatoire pour les lois organiques et les règlements des assemblées, facultatif pour les lois ordinaires. Il peut être demandé par le Président de la République, le Premier ministre, le président de l'Assemblée nationale, le président du Sénat et, depuis la révision de 1974, par soixante députés ou soixante sénateurs. Cette réforme a permis à l'opposition de saisir le Conseil, qui contrôle depuis très régulièrement les grandes lois.",
              ],
            },
            {
              heading: "La question prioritaire de constitutionnalité (QPC)",
              paragraphs: [
                "Avant 2010, une loi promulguée ne pouvait plus être contestée devant le Conseil constitutionnel. La révision constitutionnelle du 23 juillet 2008 a créé l'article 61-1, entré en application le 1er mars 2010 : lors d'un procès, toute personne peut soutenir qu'une disposition législative qu'on veut lui appliquer porte atteinte aux droits et libertés que la Constitution garantit. C'est la question prioritaire de constitutionnalité.",
                "Le juge saisi du procès vérifie que la question est sérieuse et la transmet au Conseil d'État ou à la Cour de cassation, qui jouent le rôle de filtre et ont trois mois pour décider de la renvoyer. Le Conseil constitutionnel a ensuite trois mois pour statuer. S'il juge la disposition contraire à la Constitution, elle est abrogée, immédiatement ou à une date qu'il fixe pour laisser au Parlement le temps de voter une nouvelle loi. Exemple : par une décision du 30 juillet 2010, le Conseil a jugé contraires à la Constitution les règles de la garde à vue de droit commun, ce qui a conduit à la loi du 14 avril 2011 renforçant le droit à l'assistance d'un avocat.",
              ],
              box: { label: "Repère", text: "1958 : création du Conseil constitutionnel. 1971 : décision « Liberté d'association ». 1974 : saisine par 60 députés ou 60 sénateurs. 2008 : révision créant la QPC. 1er mars 2010 : premières QPC." },
            },
          ],
          keyPoints: [
            "État de droit : les gouvernants sont soumis au droit, sous le contrôle de juges indépendants.",
            "Pyramide de Kelsen : Constitution, traités, lois, règlements, actes individuels ; chaque norme respecte celles du dessus.",
            "Article 55 : les traités régulièrement ratifiés ont une autorité supérieure à celle des lois.",
            "Conseil constitutionnel : 9 membres nommés pour 9 ans (3 par le Président de la République, 3 par chaque président d'assemblée).",
            "Contrôle a priori : avant promulgation, saisine possible par 60 députés ou 60 sénateurs depuis 1974.",
            "QPC (2008, appliquée depuis 2010) : un justiciable conteste une loi déjà en vigueur, après filtrage par le Conseil d'État ou la Cour de cassation.",
          ],
          example: {
            statement: "Un maire prend un arrêté qui contredit un décret du Premier ministre. Par ailleurs, une loi votée l'an dernier semble contraire à la liberté d'expression. Expliquez, pour chacune de ces deux normes, ce qui peut se passer.",
            solution: [
              "Situer l'arrêté dans la hiérarchie : un arrêté municipal est un règlement local, inférieur au décret du Premier ministre ; il doit le respecter.",
              "Indiquer le recours : toute personne intéressée peut saisir le tribunal administratif, qui peut annuler l'arrêté pour illégalité.",
              "Situer la loi : la loi est inférieure à la Constitution, et la liberté d'expression est garantie par l'article 11 de la DDHC, qui fait partie du bloc de constitutionnalité.",
              "Constater que la loi est déjà promulguée : le contrôle a priori n'est plus possible, il fallait saisir le Conseil avant la promulgation.",
              "Indiquer la voie possible : à l'occasion d'un procès où cette loi lui est appliquée, une personne peut poser une question prioritaire de constitutionnalité.",
              "Décrire la suite : après le filtre du Conseil d'État ou de la Cour de cassation, le Conseil constitutionnel statue ; s'il juge la loi contraire à la Constitution, la disposition est abrogée.",
              "Conclusion : l'arrêté relève du juge administratif (contrôle de légalité), la loi du Conseil constitutionnel par la voie de la QPC (contrôle de constitutionnalité).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces normes de la plus élevée à la plus basse : un arrêté du préfet, la Déclaration des droits de l'homme et du citoyen, une loi votée par le Parlement, la Convention européenne des droits de l'homme, un décret du Premier ministre.",
              hint: "Rappelez-vous l'ordre de la pyramide : bloc de constitutionnalité, traités, lois, règlements nationaux, règlements locaux.",
              solution: [
                "1. La DDHC, qui fait partie du bloc de constitutionnalité.",
                "2. La Convention européenne des droits de l'homme, traité ratifié, supérieur aux lois (article 55).",
                "3. La loi votée par le Parlement.",
                "4. Le décret du Premier ministre, règlement national.",
                "5. L'arrêté du préfet, règlement pris à l'échelle du département, qui doit respecter les décrets.",
              ],
            },
            {
              level: 2,
              statement: "Vrai ou faux, en justifiant chaque réponse : a) Un simple citoyen peut saisir directement le Conseil constitutionnel avant la promulgation d'une loi. b) Le Conseil constitutionnel peut abroger une loi déjà en vigueur. c) Soixante sénateurs peuvent saisir le Conseil constitutionnel. d) Les membres du Conseil constitutionnel sont élus par les citoyens.",
              hint: "Distinguez bien qui peut saisir le Conseil avant la promulgation, et par quelle voie un justiciable peut contester une loi après.",
              solution: [
                "a) Faux : le contrôle a priori est réservé au Président de la République, au Premier ministre, aux présidents des deux assemblées et à 60 députés ou 60 sénateurs.",
                "b) Vrai : depuis 2010, par la voie de la QPC, le Conseil peut abroger une disposition législative contraire aux droits et libertés garantis par la Constitution.",
                "c) Vrai : c'est possible depuis la révision constitutionnelle de 1974.",
                "d) Faux : ils sont nommés, trois par le Président de la République et trois par chacun des présidents des deux assemblées.",
                "Résultat : a faux, b vrai, c vrai, d faux.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : montrez en quoi la création de la QPC en 2008 a renforcé l'État de droit en France. Vous présenterez la situation antérieure, le fonctionnement de la QPC et un exemple de ses effets.",
              hint: "Organisez votre réponse en trois temps : ce qui manquait avant 2010, la procédure (qui, devant qui, quels délais), un exemple concret de décision et sa conséquence.",
              solution: [
                "Introduction : l'État de droit suppose que toute norme, y compris la loi, respecte les droits fondamentaux. Jusqu'en 2010, ce contrôle restait incomplet.",
                "Situation antérieure : le Conseil constitutionnel ne pouvait contrôler une loi qu'avant sa promulgation, et seulement s'il était saisi par des autorités politiques. Une loi jamais contrôlée restait applicable même si elle violait une liberté.",
                "Fonctionnement : depuis la révision du 23 juillet 2008 (article 61-1), un justiciable peut, au cours d'un procès, contester une disposition législative. Le juge transmet la question au Conseil d'État ou à la Cour de cassation, qui la renvoient au Conseil constitutionnel si elle est sérieuse ; chacun dispose de trois mois.",
                "Exemple : le 30 juillet 2010, le Conseil a jugé contraires à la Constitution les règles de la garde à vue de droit commun, insuffisamment protectrices des droits de la défense ; la loi du 14 avril 2011 a renforcé l'assistance de l'avocat.",
                "Portée : chaque citoyen devient acteur du contrôle de constitutionnalité, et des lois anciennes peuvent être corrigées.",
                "Conclusion : la QPC complète le contrôle a priori et rapproche la France d'un État de droit où aucune loi n'échappe durablement au respect des libertés.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une question prioritaire de constitutionnalité.",
            items: [
              "Au cours d'un procès, une partie soutient qu'une loi porte atteinte à ses droits et libertés.",
              "Le juge du procès vérifie que la question est sérieuse et la transmet.",
              "Le Conseil d'État ou la Cour de cassation examine la question pendant trois mois au plus.",
              "La question est renvoyée au Conseil constitutionnel.",
              "Le Conseil constitutionnel statue dans un délai de trois mois.",
              "Si la loi est contraire à la Constitution, la disposition est abrogée.",
            ],
          },
          quiz: [
            {
              q: "Selon l'article 55 de la Constitution, les traités régulièrement ratifiés sont :",
              options: ["Inférieurs aux décrets", "Supérieurs aux lois", "Supérieurs à la Constitution", "Égaux aux arrêtés municipaux"],
              answer: 1,
              why: "Les traités ont une autorité supérieure à celle des lois, mais restent soumis à la Constitution dans l'ordre interne.",
            },
            {
              q: "Combien de membres nommés compte le Conseil constitutionnel ?",
              options: ["Sept", "Douze", "Quinze", "Neuf"],
              answer: 3,
              why: "Neuf membres sont nommés pour neuf ans ; les anciens présidents de la République sont en outre membres de droit.",
            },
            {
              q: "Depuis quand soixante députés ou soixante sénateurs peuvent-ils saisir le Conseil constitutionnel ?",
              options: ["Depuis 1974", "Depuis 1958", "Depuis 1971", "Depuis 2008"],
              answer: 0,
              why: "La révision constitutionnelle de 1974 a ouvert la saisine à l'opposition parlementaire.",
            },
            {
              q: "Qui filtre les QPC avant qu'elles parviennent au Conseil constitutionnel ?",
              options: ["Le Parlement et le gouvernement", "Le Président de la République seul", "Le Conseil d'État ou la Cour de cassation", "La Cour européenne des droits de l'homme de Strasbourg"],
              answer: 2,
              why: "Selon l'ordre de juridiction concerné, le Conseil d'État ou la Cour de cassation décide de renvoyer ou non la question.",
            },
            {
              q: "Qui a représenté l'ordre juridique sous la forme d'une pyramide des normes ?",
              options: ["Montesquieu", "Jean-Jacques Rousseau", "Hans Kelsen", "Alexis de Tocqueville"],
              answer: 2,
              why: "Le juriste autrichien Hans Kelsen a théorisé la hiérarchie des normes, chaque norme tirant sa validité de la norme supérieure.",
            },
          ],
          trap: "Croire que le Conseil constitutionnel peut être saisi directement par n'importe quel citoyen : un justiciable n'y accède que par la QPC, au cours d'un procès et après le filtre du Conseil d'État ou de la Cour de cassation.",
          method: "Dessinez la pyramide des normes et, à côté de chaque étage, notez le juge qui contrôle le respect de l'étage supérieur : le Conseil constitutionnel pour la loi, le juge administratif pour les règlements et les décisions administratives.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ordre-public',
          title: "L'ordre public et les limites des libertés",
          minutes: 30,
          objectives: [
            "Définir l'ordre public et ses composantes.",
            "Expliquer pourquoi et comment les autorités peuvent limiter l'exercice d'une liberté.",
            "Appliquer le principe de proportionnalité à une mesure de police administrative.",
            "Identifier les risques que les régimes d'exception font peser sur les libertés.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'ordre public ?",
              paragraphs: [
                "L'ordre public désigne l'état de la société dans lequel la vie collective peut se dérouler paisiblement. Le droit le définit par ses composantes traditionnelles : la sécurité publique (prévenir les accidents, les violences, les attentats), la tranquillité publique (éviter les troubles comme le tapage ou les rixes) et la salubrité publique (protéger la santé, par exemple lors d'une épidémie ou d'une pollution). Le Code général des collectivités territoriales confie ainsi au maire le soin d'assurer le bon ordre, la sûreté, la sécurité et la salubrité publiques.",
                "Le Conseil d'État a ajouté une autre composante : le respect de la dignité de la personne humaine. Dans l'arrêt Commune de Morsang-sur-Orge du 27 octobre 1995, il a admis qu'un maire interdise un spectacle de « lancer de nain », même si la personne concernée était consentante et rémunérée, parce que ce spectacle portait atteinte à la dignité humaine.",
              ],
              box: { label: "Définition", text: "L'ordre public est l'ensemble des conditions nécessaires à une vie sociale paisible : sécurité, tranquillité et salubrité publiques, auxquelles s'ajoute le respect de la dignité de la personne humaine." },
            },
            {
              heading: "La police administrative : prévenir les troubles",
              paragraphs: [
                "La Déclaration de 1789 prévoit elle-même que les libertés peuvent être limitées pour préserver l'ordre public : l'article 10 protège les opinions, même religieuses, pourvu que leur manifestation ne trouble pas l'ordre public établi par la loi. Les autorités de police administrative (le Premier ministre, le ministre de l'Intérieur, les préfets, les maires) peuvent donc prendre des mesures pour prévenir les troubles : interdire une manifestation, fermer un lieu dangereux, réglementer la circulation.",
                "Il ne faut pas confondre la police administrative, qui est préventive et vise à éviter un trouble, et la police judiciaire, qui est répressive : elle constate les infractions déjà commises, en recherche les auteurs et les remet à la justice, sous la direction du procureur de la République ou d'un juge d'instruction. Les mêmes policiers et gendarmes peuvent exercer l'une ou l'autre selon la mission.",
              ],
            },
            {
              heading: "La proportionnalité : la liberté est la règle",
              paragraphs: [
                "Une mesure de police qui limite une liberté n'est légale que si elle est nécessaire, adaptée et proportionnée à la menace. Dans l'arrêt Benjamin du 19 mai 1933, le Conseil d'État a annulé l'interdiction par le maire de Nevers d'une conférence de l'écrivain René Benjamin : les risques de troubles n'étaient pas tels que le maire ne puisse maintenir l'ordre par d'autres moyens, comme la présence de forces de police. Interdire doit rester le dernier recours.",
                "Le juge vérifie donc au cas par cas. Une interdiction générale et absolue est presque toujours illégale ; une mesure limitée dans le temps et dans l'espace, justifiée par des faits précis, peut être admise. Ainsi, par une ordonnance du 26 août 2016, le Conseil d'État a suspendu l'arrêté d'un maire interdisant le port du burkini sur les plages de sa commune, faute de risque avéré pour l'ordre public. En cas d'urgence, toute personne peut saisir le juge administratif par un référé-liberté : il statue en 48 heures.",
              ],
              box: { label: "Règle", text: "Une mesure de police limitant une liberté doit être nécessaire (une menace réelle existe), adaptée (elle permet d'y répondre) et proportionnée (aucune mesure moins contraignante ne suffit). Sinon, le juge l'annule ou la suspend." },
            },
            {
              heading: "Les régimes d'exception",
              paragraphs: [
                "Face à une crise grave, la loi prévoit des régimes qui élargissent temporairement les pouvoirs de l'administration. L'état d'urgence, créé par la loi du 3 avril 1955 pendant la guerre d'Algérie, permet notamment des assignations à résidence et des perquisitions administratives. Déclaré après les attentats du 13 novembre 2015, il a duré jusqu'au 1er novembre 2017. L'état d'urgence sanitaire a été créé par la loi du 23 mars 2020 pour faire face à l'épidémie de Covid-19 (confinements, couvre-feux).",
                "Ces régimes sont encadrés : ils sont déclarés par décret en Conseil des ministres, leur prolongation au-delà de douze jours exige une loi votée par le Parlement, et les juges continuent de contrôler les mesures. Le risque, souligné par de nombreux juristes, est que des mesures d'exception deviennent permanentes en étant transférées dans le droit commun. Le débat porte sur l'équilibre entre sécurité et liberté.",
              ],
              box: { label: "Repère", text: "1933 : arrêt Benjamin (proportionnalité). 1955 : loi sur l'état d'urgence. 1995 : arrêt Morsang-sur-Orge (dignité humaine). 2015-2017 : état d'urgence après les attentats. 2020 : état d'urgence sanitaire." },
            },
          ],
          keyPoints: [
            "L'ordre public comprend la sécurité, la tranquillité, la salubrité publiques et la dignité de la personne humaine (arrêt Morsang-sur-Orge, 1995).",
            "Article 10 de la DDHC : les opinions sont libres pourvu que leur manifestation ne trouble pas l'ordre public établi par la loi.",
            "Police administrative (prévenir) et police judiciaire (réprimer les infractions commises) sont distinctes.",
            "Arrêt Benjamin (1933) : une mesure de police doit être nécessaire, adaptée et proportionnée ; interdire est le dernier recours.",
            "Le référé-liberté permet d'obtenir une décision du juge administratif en 48 heures.",
            "L'état d'urgence (loi de 1955) élargit les pouvoirs de police, sous le contrôle du Parlement et des juges.",
          ],
          example: {
            statement: "Un préfet interdit toute manifestation dans le département pendant un mois, au motif qu'une manifestation précédente a donné lieu à quelques dégradations dans une seule ville. Cette mesure est-elle conforme aux principes de l'État de droit ?",
            solution: [
              "Identifier la liberté en jeu : la liberté de manifester, que le Conseil constitutionnel rattache au droit d'expression collective des idées et des opinions (article 11 de la DDHC), également protégée par la Convention européenne des droits de l'homme.",
              "Identifier le but invoqué : préserver l'ordre public (sécurité des biens et des personnes), but légitime pour une autorité de police administrative.",
              "Tester la nécessité : des dégradations passées dans une seule ville ne prouvent pas une menace sérieuse partout dans le département pendant un mois.",
              "Tester la proportionnalité : des mesures moins contraignantes existaient (encadrement policier, modification du parcours, interdiction ciblée d'un lieu ou d'une date).",
              "Appliquer la jurisprudence : depuis l'arrêt Benjamin (1933), l'interdiction n'est légale que si l'autorité ne peut pas maintenir l'ordre autrement.",
              "Indiquer le recours : les organisateurs peuvent saisir le juge administratif en référé-liberté, qui statue en 48 heures.",
              "Conclusion : la mesure, générale et longue, paraît disproportionnée ; le juge la suspendrait très probablement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque mesure, indiquez la composante de l'ordre public qu'elle protège (sécurité, tranquillité, salubrité, dignité) : a) un maire interdit la baignade sur une plage après une pollution de l'eau ; b) un arrêté limite les horaires d'ouverture d'un bar dont la clientèle fait du bruit chaque nuit ; c) un préfet interdit l'accès à une falaise qui menace de s'effondrer ; d) un maire interdit un spectacle qui consiste à humilier une personne contre rémunération.",
              hint: "La salubrité concerne la santé, la tranquillité l'absence de nuisance, la sécurité l'absence de danger pour les personnes.",
              solution: [
                "a) Salubrité publique : il s'agit de protéger la santé des baigneurs.",
                "b) Tranquillité publique : il s'agit de faire cesser des nuisances sonores nocturnes.",
                "c) Sécurité publique : il s'agit de prévenir un accident grave.",
                "d) Dignité de la personne humaine : c'est la composante reconnue par l'arrêt Morsang-sur-Orge (1995).",
                "Résultat : a salubrité, b tranquillité, c sécurité, d dignité.",
              ],
            },
            {
              level: 2,
              statement: "Le maire d'une commune touristique veut interdire la mendicité. Il hésite entre deux arrêtés : A) interdire la mendicité sur tout le territoire de la commune, toute l'année ; B) interdire la mendicité accompagnée de comportements agressifs, dans trois rues du centre, de juin à septembre, après plusieurs plaintes précises. Lequel a le plus de chances d'être jugé légal ? Justifiez.",
              hint: "Comparez l'étendue de chaque mesure (dans l'espace, dans le temps, dans les comportements visés) et sa justification par des faits.",
              solution: [
                "Rappel : une mesure de police doit être nécessaire, adaptée et proportionnée ; une interdiction générale et absolue est presque toujours illégale.",
                "Arrêté A : il vise toute la commune, toute l'année, et tout comportement de mendicité, même paisible ; il n'est pas justifié par des troubles précis. Il est disproportionné.",
                "Arrêté B : il est limité dans l'espace (trois rues), dans le temps (la saison touristique) et vise un comportement qui trouble l'ordre (l'agressivité), constaté par des plaintes.",
                "Conclusion : l'arrêté B a le plus de chances d'être jugé légal ; l'arrêté A serait très probablement annulé par le juge administratif.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de réflexion : « Pour assurer notre sécurité, faut-il accepter de limiter nos libertés ? » Rédigez un développement construit en deux parties, en vous appuyant sur au moins deux exemples du cours.",
              hint: "Première partie : la sécurité est une condition de la liberté et la loi permet de limiter les libertés pour l'ordre public. Seconde partie : ces limites doivent être encadrées (proportionnalité, juge, Parlement), sinon la sécurité devient un prétexte.",
              solution: [
                "Introduction : la sécurité et la liberté semblent s'opposer, mais la loi du 21 janvier 1995 fait de la sécurité un droit fondamental et l'une des conditions de l'exercice des libertés. Le problème est de savoir jusqu'où limiter les libertés sans les détruire.",
                "Première partie, la sécurité condition de la liberté : sans sécurité, on ne peut ni circuler ni s'exprimer sans crainte. La DDHC admet que la manifestation des opinions ne doit pas troubler l'ordre public (article 10). Exemple : après les attentats du 13 novembre 2015, l'état d'urgence a permis des mesures exceptionnelles face à une menace grave.",
                "Seconde partie, des limites encadrées : en État de droit, toute restriction doit être nécessaire, adaptée et proportionnée (arrêt Benjamin, 1933). Le juge contrôle : en 2016, le Conseil d'État a suspendu un arrêté anti-burkini faute de risque avéré pour l'ordre public. Le Parlement doit voter la prolongation d'un état d'urgence au-delà de douze jours.",
                "Discussion : le danger est que des mesures d'exception deviennent permanentes et que l'on s'habitue à des restrictions qui n'étaient justifiées que par une crise.",
                "Conclusion : il faut parfois accepter des limites, mais seulement temporaires, justifiées et contrôlées par des juges et par le Parlement. Une sécurité obtenue au prix de toutes les libertés ne protégerait plus rien.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque repère à sa signification.",
            pairs: [
              { left: "Arrêt Benjamin (1933)", right: "Interdire n'est légal que si l'ordre ne peut être maintenu autrement" },
              { left: "Arrêt Morsang-sur-Orge (1995)", right: "La dignité humaine est une composante de l'ordre public" },
              { left: "Loi du 3 avril 1955", right: "Création de l'état d'urgence" },
              { left: "Référé-liberté", right: "Le juge administratif statue en 48 heures" },
              { left: "Police judiciaire", right: "Rechercher les auteurs d'infractions déjà commises" },
              { left: "Salubrité publique", right: "Protection de la santé de la population" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces composantes de l'ordre public a été ajoutée par le Conseil d'État en 1995 ?",
              options: ["La sécurité publique des personnes et des biens", "La dignité de la personne humaine", "La tranquillité publique", "La salubrité publique"],
              answer: 1,
              why: "L'arrêt Commune de Morsang-sur-Orge a fait du respect de la dignité humaine une composante de l'ordre public.",
            },
            {
              q: "Que juge le Conseil d'État dans l'arrêt Benjamin de 1933 ?",
              options: ["Qu'un maire peut tout interdire au nom de l'ordre", "Que les conférences publiques sont interdites", "Que l'interdiction de la conférence était illégale", "Que la police judiciaire doit autoriser les réunions"],
              answer: 2,
              why: "Le maire pouvait maintenir l'ordre par d'autres moyens : l'interdiction était disproportionnée et a été annulée.",
            },
            {
              q: "Quelle est la différence entre police administrative et police judiciaire ?",
              options: ["L'une prévient les troubles, l'autre réprime les infractions", "La première est exercée par les juges, la seconde par les maires", "La première est nationale, la seconde locale", "Il n'y a aucune différence"],
              answer: 0,
              why: "La police administrative agit avant le trouble, la police judiciaire après l'infraction, pour en rechercher les auteurs.",
            },
            {
              q: "Au-delà de combien de jours la prolongation de l'état d'urgence exige-t-elle une loi ?",
              options: ["Trois jours", "Trente jours", "Six mois", "Douze jours"],
              answer: 3,
              why: "Déclaré par décret en Conseil des ministres, l'état d'urgence ne peut être prolongé au-delà de douze jours que par la loi.",
            },
            {
              q: "Dans quel délai le juge du référé-liberté se prononce-t-il ?",
              options: ["Un mois", "48 heures", "Une semaine", "Un an"],
              answer: 1,
              why: "Le référé-liberté permet d'obtenir en 48 heures la suspension d'une atteinte grave et manifestement illégale à une liberté.",
            },
          ],
          trap: "Penser que l'ordre public autorise n'importe quelle interdiction : une restriction n'est légale que si elle est nécessaire, adaptée et proportionnée, et une interdiction générale et absolue est presque toujours annulée.",
          method: "Face à une mesure qui limite une liberté, appliquez toujours le test en trois questions : y a-t-il une menace réelle ? la mesure permet-elle d'y répondre ? une mesure moins contraignante aurait-elle suffi ? Concluez ensuite sur la légalité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'justice-libertes',
          title: "La justice, gardienne des droits et des libertés",
          minutes: 30,
          objectives: [
            "Décrire l'organisation de la justice en France : ordre judiciaire et ordre administratif.",
            "Identifier les grands principes qui garantissent un procès équitable.",
            "Expliquer le rôle de l'autorité judiciaire, gardienne de la liberté individuelle (article 66 de la Constitution).",
            "Identifier les recours possibles pour faire respecter ses droits, en France et en Europe.",
          ],
          course: [
            {
              heading: "Deux ordres de juridiction",
              paragraphs: [
                "La justice française est organisée en deux ordres. L'ordre judiciaire juge les litiges entre personnes privées (justice civile : divorce, contrat, héritage, conflit du travail) et sanctionne les infractions (justice pénale). Les infractions sont jugées selon leur gravité : les contraventions par le tribunal de police, les délits par le tribunal correctionnel, les crimes par la cour d'assises, où siègent des jurés tirés au sort, ou par la cour criminelle départementale pour certains crimes. Au sommet se trouve la Cour de cassation.",
                "L'ordre administratif juge les litiges entre les particuliers et l'administration : contester un refus de permis de construire, une sanction infligée par un établissement public, un arrêté municipal. Il comprend les tribunaux administratifs, les cours administratives d'appel et, au sommet, le Conseil d'État. En cas de doute sur l'ordre compétent, le Tribunal des conflits tranche.",
              ],
              box: { label: "À retenir", text: "Ordre judiciaire : litiges entre particuliers et infractions pénales, sommet : Cour de cassation. Ordre administratif : litiges avec l'administration, sommet : Conseil d'État. Le Tribunal des conflits répartit les affaires entre les deux." },
            },
            {
              heading: "Les principes d'une justice qui protège",
              paragraphs: [
                "La DDHC pose des garanties essentielles. Le principe de légalité des délits et des peines (article 8) : nul ne peut être puni qu'en vertu d'une loi établie et promulguée antérieurement au délit ; on ne peut donc pas être condamné pour un acte qui n'était pas interdit au moment où on l'a commis. La présomption d'innocence (article 9) : tout homme est présumé innocent jusqu'à ce qu'il ait été déclaré coupable ; c'est à l'accusation de prouver la culpabilité.",
                "L'article 6 de la Convention européenne des droits de l'homme garantit le droit à un procès équitable : être jugé par un tribunal indépendant et impartial, dans un délai raisonnable, lors d'une audience publique, et bénéficier des droits de la défense (connaître les accusations, être assisté d'un avocat, répondre aux arguments adverses). Le double degré de juridiction permet en principe de faire rejuger son affaire en appel, puis de former un pourvoi en cassation, qui porte sur le respect du droit et non sur les faits.",
              ],
              box: { label: "Règle", text: "Légalité des délits et des peines (DDHC, article 8), présomption d'innocence (article 9), droit à un procès équitable devant un juge indépendant et impartial (CEDH, article 6), droits de la défense, possibilité d'appel." },
            },
            {
              heading: "L'autorité judiciaire, gardienne de la liberté individuelle",
              paragraphs: [
                "L'article 66 de la Constitution dispose que nul ne peut être arbitrairement détenu et que l'autorité judiciaire, gardienne de la liberté individuelle, assure le respect de ce principe. Concrètement, une privation de liberté doit être contrôlée par un magistrat : la garde à vue est placée sous le contrôle du procureur de la République et, au-delà de 48 heures, sa prolongation exceptionnelle relève d'un juge ; la détention provisoire avant un procès est décidée par le juge des libertés et de la détention, créé par la loi du 15 juin 2000 sur la présomption d'innocence.",
                "L'indépendance des juges est une condition de cette protection. Les magistrats du siège, qui jugent, sont inamovibles : ils ne peuvent pas être déplacés sans leur consentement, ce qui les protège des pressions. Le Conseil supérieur de la magistrature intervient dans leur nomination et leur discipline. Les magistrats du parquet, qui représentent la société et engagent les poursuites, sont placés sous l'autorité du ministre de la Justice, mais celui-ci ne peut plus leur adresser d'instructions dans des affaires individuelles depuis une loi de 2013.",
              ],
            },
            {
              heading: "D'autres garanties : Défenseur des droits et Cour européenne",
              paragraphs: [
                "Le Défenseur des droits, inscrit dans la Constitution en 2008 (article 71-1) et installé en 2011, est une autorité indépendante que toute personne peut saisir gratuitement. Il défend les droits des usagers des services publics, les droits de l'enfant, lutte contre les discriminations et veille au respect de la déontologie par les forces de sécurité. Il ne juge pas, mais il peut enquêter, proposer une médiation, formuler des recommandations et présenter des observations devant les tribunaux.",
                "Lorsque toutes les voies de recours nationales sont épuisées, une personne peut saisir la Cour européenne des droits de l'homme si elle estime qu'un de ses droits garantis par la Convention a été violé. Si la Cour constate une violation, l'État est condamné et doit souvent modifier sa législation. La France a ainsi dû réformer plusieurs fois son droit, par exemple sur les conditions de détention ou sur la garde à vue.",
              ],
              box: { label: "Repère", text: "Article 66 de la Constitution (1958) : l'autorité judiciaire, gardienne de la liberté individuelle. 2000 : juge des libertés et de la détention. 2008 : Défenseur des droits inscrit dans la Constitution (installé en 2011)." },
            },
          ],
          keyPoints: [
            "Deux ordres : judiciaire (Cour de cassation) pour les litiges privés et les infractions, administratif (Conseil d'État) pour les litiges avec l'administration.",
            "Contraventions au tribunal de police, délits au tribunal correctionnel, crimes à la cour d'assises ou à la cour criminelle départementale.",
            "DDHC : légalité des délits et des peines (article 8) et présomption d'innocence (article 9).",
            "CEDH, article 6 : procès équitable, juge indépendant et impartial, délai raisonnable, droits de la défense.",
            "Article 66 de la Constitution : nul ne peut être arbitrairement détenu ; l'autorité judiciaire garde la liberté individuelle.",
            "Défenseur des droits (2008) et Cour européenne des droits de l'homme complètent la protection.",
          ],
          example: {
            statement: "Sur un réseau social, de nombreux internautes affirment qu'un homme arrêté la veille est « forcément coupable » et publient son nom. Quels principes de la justice sont ici en jeu ? Que risquent ces internautes ?",
            solution: [
              "Identifier le principe central : la présomption d'innocence (article 9 de la DDHC) ; toute personne est présumée innocente tant qu'un tribunal ne l'a pas déclarée coupable.",
              "Expliquer son sens : seul un juge indépendant, après un procès équitable où la défense a pu s'exprimer, peut établir la culpabilité ; une arrestation n'est pas une condamnation.",
              "Ajouter les droits de la défense : la personne doit pouvoir connaître les accusations et y répondre, assistée d'un avocat, ce qu'un jugement sur les réseaux ne permet pas.",
              "Mesurer les conséquences : la publication de son nom avec l'affirmation de sa culpabilité peut ruiner sa réputation, même s'il est ensuite relaxé ou acquitté.",
              "Indiquer les risques juridiques : la personne peut demander réparation pour atteinte à la présomption d'innocence (article 9-1 du Code civil) et porter plainte pour diffamation.",
              "Conclusion : ces internautes se substituent à la justice et violent la présomption d'innocence ; ils engagent leur responsabilité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quelle juridiction est compétente dans chaque cas : a) un automobiliste conteste une amende pour stationnement (contravention) ; b) une personne est poursuivie pour un vol (délit) ; c) un lycéen conteste devant un juge la sanction d'exclusion prononcée par son lycée public ; d) une personne est accusée d'un meurtre (crime puni de trente ans de réclusion criminelle).",
              hint: "Distinguez d'abord ce qui relève de l'administration et ce qui relève du pénal, puis classez les infractions selon leur gravité.",
              solution: [
                "a) Tribunal de police, compétent pour les contraventions.",
                "b) Tribunal correctionnel, compétent pour les délits.",
                "c) Tribunal administratif, car la décision émane d'un établissement public, donc de l'administration.",
                "d) Cour d'assises, avec des jurés tirés au sort : le meurtre est puni de trente ans de réclusion, alors que la cour criminelle départementale ne juge que des crimes punis de quinze ou vingt ans.",
                "Résultat : a tribunal de police, b tribunal correctionnel, c tribunal administratif, d cour d'assises.",
              ],
            },
            {
              level: 2,
              statement: "Une nouvelle loi, publiée le 1er mars, punit d'une amende le fait d'utiliser une trottinette électrique sur un trottoir. Paul a roulé sur un trottoir le 15 février. Il est poursuivi le 10 mars. Peut-il être condamné en vertu de cette loi ? Quel principe s'applique ? Justifiez.",
              hint: "Comparez la date des faits et la date de la loi, et rappelez l'article 8 de la DDHC.",
              solution: [
                "Rappel du principe : selon l'article 8 de la DDHC, nul ne peut être puni qu'en vertu d'une loi établie et promulguée antérieurement au délit (principe de légalité et de non-rétroactivité de la loi pénale plus sévère).",
                "Comparaison des dates : les faits ont été commis le 15 février, la loi n'a été publiée que le 1er mars.",
                "Application : au moment des faits, ce comportement n'était pas puni par cette loi ; la date des poursuites (10 mars) ne change rien, c'est la date des faits qui compte.",
                "Conclusion : Paul ne peut pas être condamné en vertu de cette loi pour des faits commis le 15 février.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « En quoi la justice est-elle la gardienne des libertés dans un État de droit ? » Vous mobiliserez au moins trois éléments du cours (textes, institutions, principes).",
              hint: "Pensez au contrôle des privations de liberté, aux garanties du procès, au contrôle de l'administration et aux recours européens.",
              solution: [
                "Introduction : dans un État de droit, proclamer des libertés ne suffit pas ; il faut qu'un juge indépendant puisse les faire respecter, y compris contre l'État.",
                "Premier rôle, protéger la liberté individuelle : l'article 66 de la Constitution fait de l'autorité judiciaire la gardienne de la liberté individuelle ; une détention provisoire est décidée par le juge des libertés et de la détention, et une garde à vue est contrôlée par un magistrat.",
                "Deuxième rôle, garantir un procès juste : légalité des délits et des peines, présomption d'innocence (DDHC, articles 8 et 9), procès équitable et droits de la défense (CEDH, article 6), possibilité d'appel.",
                "Troisième rôle, contrôler l'administration : le juge administratif peut annuler une décision illégale, par exemple une interdiction disproportionnée, et suspendre en 48 heures une atteinte grave à une liberté par le référé-liberté.",
                "Condition : l'indépendance des juges (inamovibilité des magistrats du siège, Conseil supérieur de la magistrature) ; en dernier recours, la Cour européenne des droits de l'homme peut condamner l'État.",
                "Conclusion : la justice transforme les libertés proclamées en libertés effectives ; sans juges indépendants, il n'y aurait pas d'État de droit.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la justice et les libertés.",
            statements: [
              { text: "Une personne placée en garde à vue est déjà reconnue coupable.", true: false, why: "La garde à vue est une mesure d'enquête ; seule une condamnation prononcée par un tribunal établit la culpabilité." },
              { text: "Le Conseil d'État est la plus haute juridiction de l'ordre administratif.", true: true, why: "Il est au sommet des tribunaux administratifs et des cours administratives d'appel." },
              { text: "Les crimes sont jugés par le tribunal de police.", true: false, why: "Le tribunal de police juge les contraventions ; les crimes relèvent de la cour d'assises ou de la cour criminelle départementale." },
              { text: "On peut être condamné pour un acte qui n'était pas interdit au moment où on l'a commis.", true: false, why: "L'article 8 de la DDHC exige une loi antérieure aux faits." },
              { text: "Le Défenseur des droits peut être saisi gratuitement par toute personne.", true: true, why: "C'est une autorité indépendante accessible sans frais, inscrite dans la Constitution en 2008." },
              { text: "La Cour de cassation rejuge entièrement les faits de l'affaire.", true: false, why: "Elle vérifie que le droit a été correctement appliqué, sans rejuger les faits." },
              { text: "Les magistrats du siège sont inamovibles.", true: true, why: "Ils ne peuvent être déplacés sans leur consentement, ce qui garantit leur indépendance." },
            ],
          },
          quiz: [
            {
              q: "Quel article de la Constitution fait de l'autorité judiciaire la gardienne de la liberté individuelle ?",
              options: ["L'article 1er", "L'article 16", "L'article 55", "L'article 66"],
              answer: 3,
              why: "L'article 66 dispose que nul ne peut être arbitrairement détenu et confie cette garantie à l'autorité judiciaire.",
            },
            {
              q: "Quelle juridiction juge les délits ?",
              options: ["Le tribunal correctionnel", "Le tribunal administratif", "Le tribunal de police", "Le Conseil constitutionnel"],
              answer: 0,
              why: "Le tribunal correctionnel juge les délits ; le tribunal de police juge les contraventions.",
            },
            {
              q: "Que signifie la présomption d'innocence ?",
              options: ["Que toute personne arrêtée est relâchée", "Qu'un suspect n'a jamais besoin d'être assisté par un avocat pendant l'enquête", "Qu'une personne est innocente tant qu'elle n'est pas jugée coupable", "Qu'aucune enquête ne peut être menée"],
              answer: 2,
              why: "Selon l'article 9 de la DDHC, c'est à l'accusation de prouver la culpabilité devant un tribunal.",
            },
            {
              q: "Quel juge décide de la détention provisoire avant un procès ?",
              options: ["Le maire de la commune", "Le juge des libertés et de la détention", "Le procureur général près la Cour de cassation", "Le Défenseur des droits"],
              answer: 1,
              why: "Créé par la loi du 15 juin 2000, le juge des libertés et de la détention contrôle les privations de liberté les plus graves.",
            },
            {
              q: "Qui tranche les doutes sur la compétence de l'ordre judiciaire ou de l'ordre administratif ?",
              options: ["Le Conseil constitutionnel", "Le Tribunal des conflits", "Le Sénat", "Le ministre de la Justice"],
              answer: 1,
              why: "Le Tribunal des conflits répartit les affaires entre les deux ordres de juridiction.",
            },
          ],
          trap: "Confondre l'ordre judiciaire et l'ordre administratif : un litige avec un lycée public, une mairie ou une préfecture relève du juge administratif, pas du tribunal correctionnel ni de la Cour de cassation.",
          method: "Pour trouver la juridiction compétente, posez deux questions successives : l'adversaire est-il l'administration (ordre administratif) ou un particulier (ordre judiciaire) ? s'il s'agit d'une infraction, est-ce une contravention, un délit ou un crime ?",
        },
      ],
    },
    /* ==================================================================== */
    /* LA LAÏCITÉ, GARANTIE DE LA LIBERTÉ DE CONSCIENCE                     */
    /* ==================================================================== */
    {
      id: 'laicite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'laicite-principes',
          title: "La laïcité : principes et histoire, de 1905 à aujourd'hui",
          minutes: 35,
          objectives: [
            "Définir la laïcité à partir de ses trois principes : liberté de conscience, séparation, égalité.",
            "Situer les grandes étapes de la laïcisation de la France, de la Révolution à la loi de 1905.",
            "Expliquer les articles 1er et 2 de la loi du 9 décembre 1905.",
            "Distinguer la neutralité de l'État et la liberté des citoyens.",
          ],
          course: [
            {
              heading: "Définir la laïcité",
              paragraphs: [
                "La laïcité est le principe d'organisation de la République qui garantit la liberté de conscience de chacun, sépare les institutions publiques et les organisations religieuses, et assure l'égalité de tous devant la loi, quelles que soient leurs convictions. Le mot vient du grec laos, le peuple, par opposition au clergé. La laïcité n'est pas une opinion ni une religion d'État : elle est le cadre qui permet à toutes les convictions, religieuses ou non, de coexister pacifiquement.",
                "Elle repose sur trois principes. La liberté de conscience : chacun est libre de croire, de ne pas croire, de changer de religion, et de pratiquer son culte dans les limites de l'ordre public. La séparation : l'État ne reconnaît officiellement aucune religion, et les religions n'interviennent pas dans le fonctionnement de l'État. L'égalité : l'État est neutre et traite de la même façon tous les citoyens, croyants de toutes les religions et non-croyants.",
              ],
              box: { label: "Définition", text: "La laïcité garantit la liberté de conscience, organise la séparation des institutions publiques et des religions, et impose à l'État une neutralité qui assure l'égalité de tous les citoyens quelles que soient leurs convictions." },
            },
            {
              heading: "Une construction historique, de la Révolution à 1905",
              paragraphs: [
                "Sous l'Ancien Régime, le catholicisme est religion d'État et le roi est sacré. La Révolution rompt avec ce modèle : l'article 10 de la DDHC (1789) affirme que nul ne doit être inquiété pour ses opinions, même religieuses ; protestants (1789) puis juifs (1791) deviennent des citoyens à part entière ; la loi du 20 septembre 1792 confie l'état civil (naissances, mariages, décès) aux mairies et non plus aux paroisses. En 1801, Bonaparte signe avec le pape Pie VII un Concordat : l'État reconnaît le catholicisme comme religion de la grande majorité des Français et rémunère ses prêtres ; les cultes protestants et le culte israélite sont ensuite reconnus et organisés à leur tour.",
                "Sous la Troisième République, les républicains veulent soustraire l'école à l'influence de l'Église. Les lois Jules Ferry de 1881 et 1882 rendent l'école primaire publique gratuite, obligatoire pour les enfants de 6 à 13 ans, et laïque dans ses programmes (l'instruction morale et civique remplace l'instruction religieuse). La loi Goblet de 1886 confie l'enseignement dans les écoles publiques à un personnel exclusivement laïque. Après de violents affrontements entre républicains et catholiques, notamment pendant l'affaire Dreyfus, la loi de séparation est votée en 1905.",
              ],
              box: { label: "Repère", text: "1789 : DDHC, article 10. 1792 : état civil laïque. 1801 : Concordat. 1881-1882 : lois Ferry. 1886 : loi Goblet. 9 décembre 1905 : loi de séparation des Églises et de l'État." },
            },
            {
              heading: "La loi du 9 décembre 1905",
              paragraphs: [
                "Préparée notamment par le député Aristide Briand, rapporteur du texte, et soutenue par Jean Jaurès, la loi de séparation des Églises et de l'État met fin au Concordat. Son article 1er dispose que la République assure la liberté de conscience et garantit le libre exercice des cultes, sous les seules restrictions édictées dans l'intérêt de l'ordre public. Son article 2 précise que la République ne reconnaît, ne salarie ni ne subventionne aucun culte.",
                "La loi est libérale : les cultes s'organisent librement en associations cultuelles ; les églises construites avant 1905 deviennent propriété publique (des communes pour les églises, de l'État pour les cathédrales) mais restent à la disposition des fidèles. La loi prévoit aussi que des aumôneries peuvent être financées pour garantir le libre exercice du culte dans les lieux fermés : lycées avec internat, hôpitaux, prisons, armées. Par la suite, elle a été appliquée à toutes les religions présentes en France.",
              ],
              box: { label: "À retenir", text: "Loi de 1905, article 1er : la République assure la liberté de conscience et garantit le libre exercice des cultes, sous les seules restrictions de l'ordre public. Article 2 : elle ne reconnaît, ne salarie ni ne subventionne aucun culte." },
            },
            {
              heading: "La laïcité aujourd'hui : un principe constitutionnel",
              paragraphs: [
                "Depuis la Constitution de 1946, la laïcité est inscrite au cœur de nos institutions. L'article 1er de la Constitution de 1958 dispose que la France est une République indivisible, laïque, démocratique et sociale, qu'elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion, et qu'elle respecte toutes les croyances. Une exception historique demeure : l'Alsace et la Moselle, qui étaient allemandes en 1905, ont conservé le régime concordataire après leur retour à la France en 1918 ; le Conseil constitutionnel l'a jugé conforme à la Constitution en 2013.",
                "Il faut bien distinguer deux obligations. L'État, ses institutions et ses agents sont neutres : ils ne manifestent aucune préférence religieuse. Les citoyens, eux, sont libres : ils peuvent exprimer leurs convictions dans l'espace public (rue, commerces, médias), porter un signe religieux, débattre, critiquer une religion, dans les limites fixées par la loi. La laïcité ne demande donc pas aux croyants de cacher leur foi, mais elle interdit à l'État de favoriser ou de défavoriser une conviction.",
              ],
            },
          ],
          keyPoints: [
            "Trois principes : liberté de conscience, séparation des institutions publiques et des religions, égalité de tous quelles que soient leurs convictions.",
            "Étapes : DDHC (1789), état civil laïque (1792), Concordat (1801), lois Ferry (1881-1882), loi Goblet (1886), séparation (1905).",
            "Loi de 1905, article 1er : liberté de conscience et libre exercice des cultes, sous réserve de l'ordre public.",
            "Loi de 1905, article 2 : la République ne reconnaît, ne salarie ni ne subventionne aucun culte.",
            "Article 1er de la Constitution de 1958 : République laïque, qui respecte toutes les croyances.",
            "L'État et ses agents sont neutres ; les citoyens sont libres d'exprimer leurs convictions dans les limites de la loi.",
          ],
          example: {
            statement: "Un camarade affirme : « La laïcité, c'est l'interdiction des religions dans l'espace public. » Corrigez cette affirmation en vous appuyant sur la loi de 1905 et sur la Constitution.",
            solution: [
              "Repérer l'erreur : l'affirmation confond la neutralité de l'État avec une interdiction faite aux citoyens.",
              "Citer la loi de 1905 : son article 1er garantit la liberté de conscience et le libre exercice des cultes ; la laïcité protège donc les religions au lieu de les interdire.",
              "Citer la Constitution : son article 1er précise que la République respecte toutes les croyances.",
              "Distinguer les acteurs : ce sont l'État et ses agents qui doivent être neutres ; les citoyens peuvent manifester leur religion dans la rue, porter un signe religieux, organiser une procession déclarée.",
              "Préciser la limite : cette liberté s'exerce dans le respect de l'ordre public et des lois (article 1er de la loi de 1905).",
              "Conclusion : la laïcité n'interdit pas les religions dans l'espace public ; elle garantit la liberté de chacun et impose la neutralité aux institutions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez à quelle date correspond chaque événement : a) l'état civil est confié aux mairies ; b) l'école primaire publique devient gratuite, obligatoire et laïque ; c) l'État reconnaît le catholicisme comme religion de la majorité des Français et rémunère le clergé ; d) la République cesse de reconnaître et de financer les cultes. Dates proposées : 1792, 1801, 1881-1882, 1905.",
              hint: "Rangez les événements dans l'ordre logique : la Révolution, puis Bonaparte, puis la Troisième République à ses débuts, enfin la séparation.",
              solution: [
                "a) 1792 : la loi du 20 septembre 1792 laïcise l'état civil.",
                "b) 1881-1882 : lois Jules Ferry.",
                "c) 1801 : Concordat signé par Bonaparte et le pape Pie VII.",
                "d) 1905 : loi du 9 décembre 1905 de séparation des Églises et de l'État.",
                "Résultat : a 1792, b 1881-1882, c 1801, d 1905.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, dites si elle est conforme à la laïcité et justifiez : a) une commune finance la rénovation de la façade d'une église construite au XVIIe siècle, dont elle est propriétaire ; b) l'État verse un salaire aux responsables d'une religion à Lyon ; c) une association cultuelle organise une procession sur la voie publique après l'avoir déclarée en mairie ; d) un hôpital public rémunère un aumônier pour les patients hospitalisés.",
              hint: "Distinguez les financements interdits par l'article 2 de la loi de 1905 et les exceptions qu'elle prévoit (bâtiments publics, aumôneries).",
              solution: [
                "a) Conforme : l'église, construite avant 1905, est propriété de la commune ; entretenir son patrimoine n'est pas subventionner un culte.",
                "b) Non conforme : l'article 2 interdit de salarier un culte ; Lyon n'est pas en Alsace-Moselle, où le régime concordataire subsiste.",
                "c) Conforme : la liberté de culte s'exerce aussi dans l'espace public, dans le respect de l'ordre public ; la déclaration permet aux autorités de l'encadrer.",
                "d) Conforme : la loi de 1905 prévoit des aumôneries dans les lieux fermés comme les hôpitaux, pour garantir le libre exercice du culte.",
                "Résultat : a, c et d sont conformes ; b ne l'est pas.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « La laïcité est-elle une restriction ou une garantie de liberté ? » Appuyez-vous sur l'histoire de la laïcisation et sur les textes en vigueur.",
              hint: "Montrez d'abord ce que la laïcité a libéré (les minorités religieuses, les non-croyants, l'école), puis expliquez les obligations qu'elle impose et à qui elle les impose.",
              solution: [
                "Introduction : la laïcité est parfois perçue comme une contrainte imposée aux croyants. Son histoire et ses textes montrent pourtant qu'elle est d'abord une garantie de liberté.",
                "Une conquête de liberté : sous l'Ancien Régime, une religion d'État s'imposait à tous. La Révolution reconnaît la liberté d'opinion religieuse (DDHC, article 10) et l'égalité des protestants et des juifs ; la loi de 1792 permet de naître, de se marier et de mourir sans passer par l'Église.",
                "Une garantie juridique : la loi de 1905 assure la liberté de conscience et le libre exercice des cultes (article 1er) ; la Constitution de 1958 affirme que la République respecte toutes les croyances. Chacun peut croire, ne pas croire ou changer de religion.",
                "Des obligations ciblées : la neutralité s'impose à l'État et à ses agents, pour qu'aucun citoyen ne soit favorisé ou défavorisé. Les libertés religieuses sont limitées seulement par l'ordre public.",
                "Nuance : certains débats (signes religieux à l'école, financement des lieux de culte) montrent qu'il faut sans cesse concilier liberté et neutralité.",
                "Conclusion : la laïcité restreint le pouvoir de l'État sur les consciences bien plus qu'elle ne restreint les citoyens ; c'est en ce sens une garantie de liberté.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la laïcisation de la France.",
            items: [
              "La DDHC protège les opinions, même religieuses (1789).",
              "L'état civil est confié aux mairies (1792).",
              "Bonaparte signe le Concordat avec le pape (1801).",
              "Les lois Ferry rendent l'école primaire gratuite, obligatoire et laïque (1881-1882).",
              "La loi Goblet laïcise le personnel des écoles publiques (1886).",
              "La loi de séparation des Églises et de l'État est votée (1905).",
              "La Constitution affirme que la France est une République laïque (1946).",
            ],
          },
          quiz: [
            {
              q: "Que dispose l'article 2 de la loi du 9 décembre 1905 ?",
              options: ["La République reconnaît toutes les religions présentes et les finance à égalité", "La République ne reconnaît, ne salarie ni ne subventionne aucun culte", "Les religions sont interdites dans l'espace public", "Le catholicisme est religion d'État"],
              answer: 1,
              why: "L'article 2 consacre la séparation : l'État ne reconnaît officiellement aucun culte et ne le finance pas.",
            },
            {
              q: "Quel député fut le rapporteur de la loi de séparation de 1905 ?",
              options: ["Jules Ferry", "Georges Clemenceau", "Jean Jaurès", "Aristide Briand"],
              answer: 3,
              why: "Aristide Briand a été le rapporteur du texte, soutenu notamment par Jean Jaurès.",
            },
            {
              q: "Pourquoi l'Alsace et la Moselle ont-elles conservé le régime concordataire ?",
              options: ["Elles étaient allemandes en 1905", "Elles ont refusé la loi par référendum", "Elles n'ont aucune église", "Le pape l'a exigé en 1945"],
              answer: 0,
              why: "Annexées par l'Allemagne de 1871 à 1918, elles n'étaient pas françaises quand la loi de 1905 a été votée.",
            },
            {
              q: "Quel principe ne fait pas partie de la laïcité ?",
              options: ["La liberté de conscience", "La neutralité de l'État", "L'interdiction de croire en public", "L'égalité des citoyens quelles que soient leurs convictions"],
              answer: 2,
              why: "La laïcité garantit la liberté de croire et de manifester sa religion ; c'est l'État qui est neutre, pas les citoyens.",
            },
            {
              q: "Que font les lois Ferry de 1881 et 1882 ?",
              options: ["Elles séparent définitivement les Églises et l'État et suppriment le budget des cultes", "Elles rendent l'école primaire publique gratuite, obligatoire et laïque", "Elles rétablissent le Concordat", "Elles créent l'état civil"],
              answer: 1,
              why: "Les lois Ferry laïcisent l'école primaire publique ; la séparation des Églises et de l'État n'intervient qu'en 1905.",
            },
          ],
          trap: "Croire que la laïcité impose la neutralité religieuse à tous les citoyens : la neutralité s'impose à l'État et à ses agents, alors que les citoyens restent libres de manifester leurs convictions dans le respect de l'ordre public.",
          method: "Retenez la laïcité par une formule à trois termes (liberté de conscience, séparation, égalité) et associez à chaque terme un texte : article 1er de la loi de 1905, article 2 de la loi de 1905, article 1er de la Constitution.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'laicite-ecole',
          title: "La laïcité à l'école et dans les services publics",
          minutes: 30,
          objectives: [
            "Expliquer les règles de la laïcité qui s'appliquent aux élèves, aux personnels et aux usagers.",
            "Présenter la loi du 15 mars 2004 et la Charte de la laïcité à l'école (2013).",
            "Distinguer l'obligation de neutralité des agents publics et la liberté des usagers.",
            "Analyser une situation concrète au regard du principe de laïcité.",
          ],
          course: [
            {
              heading: "La neutralité du service public et de ses agents",
              paragraphs: [
                "Un service public est une activité d'intérêt général assurée ou contrôlée par une personne publique : école, hôpital, mairie, préfecture, transports publics. Il obéit au principe d'égalité des usagers et au principe de neutralité. Tous les agents publics (enseignants, infirmiers des hôpitaux publics, agents de mairie, policiers) ont un devoir de neutralité strict : pendant leur service, ils ne peuvent manifester leurs convictions religieuses, par exemple en portant un signe religieux, quelle que soit leur fonction. Le Conseil d'État l'a rappelé dans un avis du 3 mai 2000.",
                "La loi du 24 août 2021 confortant le respect des principes de la République a étendu cette obligation aux salariés des organismes privés chargés d'exécuter un service public, par exemple une entreprise privée qui gère un réseau de bus pour une collectivité. Les agents publics sont aussi formés à la laïcité, et chaque administration dispose d'un référent laïcité.",
              ],
              box: { label: "Règle", text: "Les agents publics, et les salariés qui exécutent un service public, sont tenus à une stricte neutralité religieuse pendant leur service. Les usagers sont libres de manifester leurs convictions, dans les limites de l'ordre public et du bon fonctionnement du service." },
            },
            {
              heading: "Les usagers : une liberté encadrée",
              paragraphs: [
                "Les usagers des services publics ne sont pas soumis à la neutralité. Un patient à l'hôpital, un étudiant à l'université, une personne qui se rend en mairie peuvent porter un signe religieux. Leur liberté connaît cependant des limites : ils ne peuvent pas troubler l'ordre public ni perturber le fonctionnement du service, ni récuser un agent public en raison de son sexe ou de sa religion. Ils doivent aussi se plier aux exigences d'identification, par exemple montrer leur visage pour un contrôle d'identité.",
                "Les adaptations ne sont ni interdites ni obligatoires. Ainsi, le Conseil d'État a jugé en 2020 que la laïcité n'impose pas aux communes de proposer des repas de substitution à la cantine, mais ne leur interdit pas non plus de le faire. Attention à une confusion fréquente : la loi du 11 octobre 2010, qui interdit de dissimuler son visage dans l'espace public, ne repose pas sur la laïcité mais sur des exigences d'ordre public et de vie en société ; elle vise toute dissimulation, religieuse ou non.",
              ],
            },
            {
              heading: "Les élèves de l'école publique : la loi du 15 mars 2004",
              paragraphs: [
                "Les élèves des écoles, collèges et lycées publics sont dans une situation particulière : ils sont mineurs pour la plupart, l'instruction est obligatoire, et l'école doit les protéger de toute pression. En 1989, après l'exclusion de collégiennes voilées à Creil, le Conseil d'État avait estimé que le port d'un signe religieux n'était pas en soi incompatible avec la laïcité et qu'il fallait juger au cas par cas. Après les travaux de la commission présidée par Bernard Stasi (2003), le législateur a fixé une règle générale.",
                "La loi du 15 mars 2004, inscrite à l'article L141-5-1 du Code de l'éducation, interdit dans les écoles, collèges et lycées publics le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse : voile islamique, kippa, grande croix. Les signes discrets restent autorisés. Toute procédure disciplinaire doit être précédée d'un dialogue avec l'élève. En 2023, le ministre a précisé que l'abaya et le qamis relevaient de cette interdiction ; saisi en référé, le Conseil d'État n'a pas suspendu cette mesure. La loi ne s'applique ni à l'université ni aux établissements privés sous contrat.",
              ],
              box: { label: "À retenir", text: "Loi du 15 mars 2004 : dans les écoles, collèges et lycées publics, les signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse sont interdits. Les signes discrets sont permis. Un dialogue précède toute sanction." },
            },
            {
              heading: "La Charte de la laïcité à l'école",
              paragraphs: [
                "Présentée en septembre 2013 et affichée dans tous les établissements publics, la Charte de la laïcité à l'école compte quinze articles. Elle rappelle que la laïcité garantit la liberté de conscience des élèves, les protège de tout prosélytisme et de toute pression qui les empêcherait de faire leurs propres choix, et assure l'égalité entre filles et garçons. Elle précise que les personnels ont un devoir de stricte neutralité.",
                "Elle affirme aussi qu'aucun sujet n'est a priori exclu du questionnement scientifique et pédagogique, et qu'aucun élève ne peut invoquer une conviction religieuse ou politique pour contester à un enseignant le droit de traiter une question au programme ni pour refuser de participer à un enseignement obligatoire (cours d'éducation physique, de sciences, d'histoire). L'école enseigne le fait religieux comme un objet de connaissance (histoire, arts, littérature), sans jamais demander aux élèves de croire ou de ne pas croire.",
              ],
              box: { label: "Repère", text: "1989 : avis du Conseil d'État après l'affaire de Creil. 2003 : commission Stasi. 15 mars 2004 : loi sur les signes religieux à l'école. 2013 : Charte de la laïcité à l'école. 2021 : loi confortant le respect des principes de la République." },
            },
          ],
          keyPoints: [
            "Les agents publics sont strictement neutres pendant leur service ; depuis 2021, c'est aussi le cas des salariés qui exécutent un service public.",
            "Les usagers sont libres de manifester leurs convictions, sans troubler l'ordre public ni le fonctionnement du service.",
            "Loi du 15 mars 2004 : signes ou tenues religieux ostensibles interdits aux élèves des écoles, collèges et lycées publics.",
            "La loi de 2004 ne s'applique ni aux étudiants des universités ni aux établissements privés sous contrat.",
            "Charte de la laïcité à l'école (2013) : 15 articles ; aucun élève ne peut contester un enseignement au nom de ses convictions.",
            "La loi de 2010 sur la dissimulation du visage repose sur l'ordre public, pas sur la laïcité.",
          ],
          example: {
            statement: "Dans un lycée public, une élève de seconde refuse d'assister à un cours de SVT sur l'évolution des espèces, au motif que ce contenu heurte ses convictions religieuses. Que prévoit le principe de laïcité ?",
            solution: [
              "Identifier le cadre : il s'agit d'un lycée public, donc du service public de l'éducation soumis à la laïcité.",
              "Rappeler la liberté de l'élève : elle est libre de croire et de garder ses convictions ; l'école ne lui demande pas de les abandonner.",
              "Citer la règle : la Charte de la laïcité à l'école précise qu'aucun élève ne peut invoquer une conviction religieuse pour contester le droit d'un enseignant de traiter une question au programme, ni pour refuser un enseignement obligatoire.",
              "Expliquer le sens de la règle : la théorie de l'évolution est un savoir scientifique au programme ; l'école transmet des connaissances, distinctes des croyances, à tous les élèves de la même manière.",
              "Indiquer la démarche : le professeur et l'équipe éducative engagent d'abord un dialogue avec l'élève et sa famille pour expliquer la différence entre savoir et croire.",
              "Conclusion : l'élève doit assister au cours ; la laïcité protège sa liberté de conscience mais ne lui permet pas de se soustraire à un enseignement obligatoire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque personne, indiquez si elle peut porter un signe religieux visible et justifiez : a) une étudiante dans un amphithéâtre de l'université ; b) un professeur dans sa classe d'un collège public ; c) un patient dans un hôpital public ; d) un élève de terminale dans un lycée public.",
              hint: "Demandez-vous si la personne est un agent public, un usager adulte ou un élève de l'enseignement scolaire public.",
              solution: [
                "a) Oui : l'étudiante est une usagère majeure ; la loi de 2004 ne s'applique pas à l'université.",
                "b) Non : l'enseignant est un agent public, soumis à une stricte neutralité pendant son service.",
                "c) Oui : le patient est un usager, libre de manifester ses convictions tant qu'il ne perturbe pas le service.",
                "d) Non, pour un signe ostensible : la loi du 15 mars 2004 s'applique à tous les élèves des lycées publics, même majeurs ; un signe discret reste permis.",
                "Résultat : a oui, b non, c oui, d non pour un signe ostensible.",
              ],
            },
            {
              level: 2,
              statement: "La société privée qui gère, pour le compte d'une métropole, le réseau de tramway de la ville a un conducteur qui veut porter un signe religieux ostensible pendant son service. Un commerçant du centre-ville, lui, veut afficher un symbole religieux dans sa boutique. Ces deux personnes sont-elles soumises à la même règle ? Justifiez.",
              hint: "Demandez-vous qui exécute une mission de service public et appliquez la loi du 24 août 2021.",
              solution: [
                "Le conducteur : il est salarié d'une entreprise privée, mais celle-ci exécute un service public de transport pour la métropole.",
                "Règle applicable : depuis la loi du 24 août 2021 confortant le respect des principes de la République, les salariés qui participent à l'exécution d'un service public sont soumis à la neutralité ; il ne peut donc pas porter de signe religieux ostensible pendant son service.",
                "Le commerçant : il exerce une activité privée qui n'est pas un service public ; il n'est pas soumis au principe de neutralité.",
                "Règle applicable : il peut afficher un symbole religieux dans sa boutique, dans le respect des lois (pas d'incitation à la haine, pas de discrimination envers les clients).",
                "Conclusion : non, la règle n'est pas la même ; la neutralité dépend de la participation au service public, pas du statut public ou privé de l'employeur.",
              ],
            },
            {
              level: 3,
              statement: "Document (rédigé pour l'exercice) : « Le jour de la rentrée, un lycéen se présente avec une tenue qu'il présente comme une simple mode vestimentaire. Le proviseur estime qu'elle manifeste ostensiblement une appartenance religieuse et lui demande de l'enlever. Le lycéen refuse et dit que la laïcité protège sa liberté. » Analysez cette situation : quelles règles s'appliquent, quelle procédure doit suivre le lycée, et comment concilier liberté et neutralité ?",
              hint: "Rappelez la loi de 2004 et son obligation de dialogue, puis distinguez la liberté de conscience (protégée) et la manifestation ostensible à l'école publique (interdite).",
              solution: [
                "Cadre juridique : la loi du 15 mars 2004 interdit aux élèves des établissements publics les signes ou tenues manifestant ostensiblement une appartenance religieuse ; c'est le caractère ostensible de la manifestation, apprécié selon la tenue et le comportement de l'élève, qui compte.",
                "Argument du lycéen : il a raison de dire que la laïcité protège sa liberté de conscience ; il peut croire et pratiquer sa religion. Mais à l'école publique, le législateur a limité la manifestation ostensible de cette appartenance pour protéger tous les élèves des pressions.",
                "Procédure : la loi impose un dialogue avec l'élève avant toute procédure disciplinaire ; le proviseur doit expliquer la règle, entendre l'élève et associer sa famille.",
                "Suite possible : si l'élève persiste après le dialogue, une procédure disciplinaire peut être engagée ; la décision peut être contestée devant le juge administratif, qui contrôle l'appréciation du chef d'établissement.",
                "Conciliation : la règle ne vise ni une religion ni une personne, elle s'applique à tous de la même façon, ce qui garantit l'égalité ; elle s'arrête aux portes de l'établissement et ne concerne pas la vie en dehors du lycée.",
                "Conclusion : la laïcité garantit la liberté de croire, mais à l'école publique elle prévaut sur la manifestation ostensible des convictions ; le dialogue et le respect de la procédure sont essentiels.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la laïcité à l'école et dans les services publics.",
            statements: [
              { text: "Un enseignant de l'école publique peut porter un signe religieux discret pendant ses cours.", true: false, why: "Les agents publics sont tenus à une stricte neutralité, même pour un signe discret." },
              { text: "Une étudiante peut porter le voile à l'université.", true: true, why: "La loi de 2004 ne concerne que les écoles, collèges et lycées publics." },
              { text: "La loi de 2004 interdit aux élèves des lycées publics tout bijou ayant une signification religieuse, même discret.", true: false, why: "Seuls les signes ou tenues ostensibles sont interdits ; les signes discrets restent permis." },
              { text: "Un élève peut refuser le cours d'histoire sur les religions au nom de ses convictions.", true: false, why: "La Charte de 2013 précise qu'aucun élève ne peut contester un enseignement au programme au nom de ses convictions." },
              { text: "Un patient d'un hôpital public peut porter un signe religieux.", true: true, why: "Les usagers ne sont pas soumis à la neutralité, dans la limite du bon fonctionnement du service." },
              { text: "La loi de 2010 sur la dissimulation du visage est une application du principe de laïcité.", true: false, why: "Elle repose sur l'ordre public et les exigences de la vie en société, et vise toute dissimulation." },
              { text: "Avant toute sanction, la loi de 2004 impose un dialogue avec l'élève.", true: true, why: "Le Code de l'éducation prévoit que la procédure disciplinaire est précédée d'un dialogue." },
              { text: "La Charte de la laïcité à l'école compte quinze articles.", true: true, why: "Présentée en 2013, elle est affichée dans les établissements publics." },
            ],
          },
          quiz: [
            {
              q: "À qui s'applique la loi du 15 mars 2004 sur les signes religieux ?",
              options: ["Aux étudiants des universités", "Aux élèves des écoles, collèges et lycées publics", "À tous les citoyens dans la rue", "Aux élèves des établissements privés sous contrat"],
              answer: 1,
              why: "La loi vise les élèves de l'enseignement scolaire public, mineurs pour la plupart et soumis à l'obligation d'instruction.",
            },
            {
              q: "Qui est soumis à une stricte obligation de neutralité religieuse ?",
              options: ["Les agents publics pendant leur service", "Les patients des hôpitaux", "Les commerçants", "Les parents d'élèves à la sortie de l'école"],
              answer: 0,
              why: "Les agents publics représentent l'État : ils ne doivent manifester aucune conviction pendant leur service.",
            },
            {
              q: "Depuis quelle loi les salariés d'une entreprise privée exécutant un service public sont-ils soumis à la neutralité ?",
              options: ["La loi du 9 décembre 1905", "La loi du 15 mars 2004", "La loi du 11 octobre 2010", "La loi du 24 août 2021"],
              answer: 3,
              why: "La loi confortant le respect des principes de la République a étendu la neutralité à ces salariés.",
            },
            {
              q: "En quelle année la Charte de la laïcité à l'école a-t-elle été présentée ?",
              options: ["En 1989", "En 2004", "En 2013", "En 2021"],
              answer: 2,
              why: "La Charte, en quinze articles, a été présentée en septembre 2013 et affichée dans les établissements publics.",
            },
            {
              q: "Sur quel fondement repose la loi de 2010 interdisant de dissimuler son visage dans l'espace public ?",
              options: ["La laïcité", "La liberté de la presse", "L'ordre public et la vie en société", "La séparation des Églises et de l'État"],
              answer: 2,
              why: "Elle vise toute dissimulation du visage, religieuse ou non, au nom de l'ordre public, et non de la laïcité.",
            },
          ],
          trap: "Appliquer à tout le monde la règle des élèves ou des agents : seuls les agents publics (et les salariés exécutant un service public) sont neutres, et seuls les élèves de l'enseignement scolaire public sont visés par la loi de 2004 ; les usagers adultes restent libres.",
          method: "Pour analyser une situation, identifiez d'abord le statut de la personne (agent public, usager adulte, élève de l'école publique), puis appliquez la règle correspondante : neutralité stricte, liberté encadrée ou loi de 2004.",
        },
      ],
    },
    /* ==================================================================== */
    /* LIBERTÉ ET RESPONSABILITÉ : L'INFORMATION                            */
    /* ==================================================================== */
    {
      id: 'information',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'liberte-presse',
          title: "La liberté de la presse, une conquête démocratique",
          minutes: 30,
          objectives: [
            "Retracer les grandes étapes de la conquête de la liberté de la presse en France.",
            "Expliquer les principes de la loi du 29 juillet 1881.",
            "Identifier les garanties actuelles de la liberté de la presse : secret des sources, pluralisme, régulation.",
            "Expliquer le rôle de la presse dans une démocratie et les devoirs des journalistes.",
          ],
          course: [
            {
              heading: "Pourquoi la presse est essentielle à la démocratie",
              paragraphs: [
                "Dans une démocratie, les citoyens choisissent leurs représentants et jugent leur action. Ils ne peuvent le faire que s'ils sont informés de manière libre et pluraliste. La presse (journaux, radio, télévision, sites d'information) remplit trois fonctions : informer sur les faits, permettre le débat entre opinions différentes, et contrôler les pouvoirs en révélant leurs abus. On la surnomme parfois le « quatrième pouvoir », à côté des pouvoirs législatif, exécutif et judiciaire.",
                "L'histoire montre que les régimes autoritaires commencent presque toujours par contrôler la presse : censure, saisie des journaux, emprisonnement des journalistes. À l'inverse, des enquêtes journalistiques ont permis de révéler des injustices. En 1898, l'écrivain Émile Zola publie dans le journal L'Aurore sa lettre ouverte au président de la République, intitulée « J'accuse... ! », pour dénoncer la condamnation injuste du capitaine Dreyfus : la presse devient alors un acteur majeur du combat pour la justice.",
              ],
            },
            {
              heading: "Une longue conquête, de 1789 à 1881",
              paragraphs: [
                "Sous l'Ancien Régime, rien ne peut être imprimé sans autorisation royale, et la censure contrôle les livres et les périodiques ; la Gazette fondée par Théophraste Renaudot en 1631 paraît avec un privilège du roi. L'article 11 de la DDHC (1789) proclame que la libre communication des pensées et des opinions est un des droits les plus précieux de l'Homme : tout citoyen peut parler, écrire, imprimer librement, sauf à répondre de l'abus de cette liberté dans les cas déterminés par la loi.",
                "Au XIXe siècle, la liberté de la presse avance et recule selon les régimes. En juillet 1830, les ordonnances de Charles X qui suspendent la liberté de la presse provoquent la révolution des Trois Glorieuses et la chute du roi. Sous le Second Empire, les journaux doivent obtenir une autorisation préalable, verser une caution et peuvent être suspendus après des avertissements. La Troisième République met fin à ces contrôles avec la grande loi du 29 juillet 1881.",
              ],
              box: { label: "Repère", text: "1631 : la Gazette de Renaudot, sous privilège royal. 1789 : DDHC, article 11. 1830 : les ordonnances contre la presse déclenchent les Trois Glorieuses. 1852 : autorisation préalable sous le Second Empire. 29 juillet 1881 : loi sur la liberté de la presse." },
            },
            {
              heading: "La loi du 29 juillet 1881",
              paragraphs: [
                "Son article 1er pose le principe : l'imprimerie et la librairie sont libres. La loi supprime l'autorisation préalable, la caution et la censure : il suffit de déclarer la publication et de désigner un directeur de la publication, responsable de son contenu. Elle crée aussi un droit de réponse : toute personne nommée ou désignée dans un journal peut obtenir la publication gratuite de sa réponse.",
                "La loi ne rend pas la presse irresponsable : elle définit précisément les abus, jugés après coup par un tribunal. Ce sont notamment la diffamation (imputer à une personne un fait précis qui porte atteinte à son honneur), l'injure (une expression outrageante sans imputation de fait) et, depuis la loi Pleven de 1972, la provocation à la discrimination, à la haine ou à la violence en raison de l'origine ou de la religion. Plus de cent quarante ans après, cette loi, modifiée à de nombreuses reprises, reste le texte de référence.",
              ],
              box: { label: "À retenir", text: "Loi du 29 juillet 1881 : pas d'autorisation préalable ni de censure ; un directeur de la publication responsable ; un droit de réponse ; des abus définis par la loi (diffamation, injure, provocation à la haine) et sanctionnés par le juge." },
            },
            {
              heading: "Les garanties et les devoirs d'aujourd'hui",
              paragraphs: [
                "Plusieurs garanties complètent la loi de 1881. Le secret des sources des journalistes est protégé depuis la loi du 4 janvier 2010 : un journaliste ne peut, en principe, être obligé de révéler qui lui a donné une information. Le pluralisme des courants de pensée est un objectif de valeur constitutionnelle (Conseil constitutionnel, 1984) : des règles limitent la concentration des médias, et l'État aide la presse (taux de TVA réduit, aides à la diffusion). Dans l'audiovisuel, l'Arcom, autorité indépendante créée en 2022 par la fusion du CSA et de la Hadopi, veille notamment au pluralisme et à l'honnêteté de l'information.",
                "Les journalistes ont aussi des devoirs, définis par des chartes professionnelles comme la Charte de Munich (1971) : respecter la vérité, publier seulement des informations dont l'origine est connue, rectifier les erreurs, distinguer les faits et les commentaires, refuser les pressions. La liberté de la presse reste menacée dans le monde, et parfois en France : le 7 janvier 2015, douze personnes ont été assassinées lors de l'attentat contre la rédaction de Charlie Hebdo, journal satirique visé pour ses caricatures.",
              ],
            },
          ],
          keyPoints: [
            "La presse informe, permet le débat et contrôle les pouvoirs : elle est indispensable à la démocratie.",
            "DDHC, article 11 (1789) : libre communication des pensées, sauf abus déterminé par la loi.",
            "XIXe siècle : avancées et reculs ; les ordonnances de 1830 contre la presse provoquent les Trois Glorieuses.",
            "Loi du 29 juillet 1881 : fin de l'autorisation préalable, directeur de la publication responsable, droit de réponse, abus jugés après coup.",
            "Garanties actuelles : secret des sources (2010), pluralisme (objectif constitutionnel), régulation par l'Arcom.",
            "Devoirs des journalistes (Charte de Munich, 1971) : vérité, vérification, distinction des faits et des commentaires.",
          ],
          example: {
            statement: "Un journal local publie un article affirmant, sans preuve, que le maire de la commune a détourné de l'argent public. Le maire est furieux. Quels sont ses recours, et l'article aurait-il pu être interdit avant sa parution ?",
            solution: [
              "Rappeler le principe : depuis la loi du 29 juillet 1881, il n'existe pas d'autorisation préalable ni de censure ; l'article ne pouvait pas être interdit avant sa parution par une autorité administrative.",
              "Identifier l'abus possible : affirmer qu'une personne a détourné de l'argent public, c'est lui imputer un fait précis qui porte atteinte à son honneur : c'est la définition de la diffamation.",
              "Premier recours : le maire peut exercer son droit de réponse ; le journal doit publier gratuitement sa réponse.",
              "Deuxième recours : il peut porter plainte pour diffamation ; le tribunal jugera après coup.",
              "Préciser la défense du journal : il pourra s'exonérer s'il prouve la vérité des faits, ou s'il démontre avoir enquêté sérieusement, avec prudence et dans un but légitime d'information.",
              "Conclusion : l'article ne pouvait pas être censuré à l'avance, mais le journal engage sa responsabilité ; c'est l'équilibre de la loi de 1881 entre liberté et responsabilité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 1789, 1830, 1881, 1898, 2010. Événements : a) Zola publie « J'accuse... ! » dans L'Aurore ; b) la loi protège le secret des sources des journalistes ; c) la DDHC proclame la libre communication des pensées ; d) des ordonnances contre la presse provoquent une révolution ; e) une loi supprime l'autorisation préalable et la censure.",
              hint: "Commencez par les deux dates que vous connaissez le mieux (1789 et 1881), puis placez les autres.",
              solution: [
                "1789 : c) la DDHC proclame la libre communication des pensées (article 11).",
                "1830 : d) les ordonnances de Charles X provoquent les Trois Glorieuses.",
                "1881 : e) la loi du 29 juillet 1881 supprime l'autorisation préalable et la censure.",
                "1898 : a) Zola publie « J'accuse... ! » pendant l'affaire Dreyfus.",
                "2010 : b) la loi du 4 janvier 2010 protège le secret des sources.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, indiquez si elle est conforme à la liberté de la presse telle que l'organise le droit français, et justifiez : a) un préfet exige de relire un article avant sa publication ; b) une personne mise en cause dans un article obtient la publication de sa réponse ; c) un juge condamne un journal qui a insulté une personnalité ; d) la police exige qu'un journaliste révèle le nom de la personne qui lui a transmis un document, sans aucun motif impérieux.",
              hint: "Distinguez le contrôle avant publication (interdit) et la responsabilité après publication (prévue par la loi), et pensez au secret des sources.",
              solution: [
                "a) Non conforme : exiger de relire un article avant publication est une censure préalable, abolie par la loi de 1881.",
                "b) Conforme : c'est le droit de réponse prévu par la loi de 1881.",
                "c) Conforme : l'injure est un abus défini par la loi et sanctionné après coup par un juge.",
                "d) Non conforme : le secret des sources est protégé depuis la loi du 4 janvier 2010 ; il ne peut y être porté atteinte qu'en cas d'impératif prépondérant d'intérêt public.",
                "Résultat : b et c sont conformes ; a et d ne le sont pas.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « La liberté de la presse est-elle une liberté sans responsabilité ? » Vous vous appuierez sur l'histoire de cette liberté, sur la loi de 1881 et sur les devoirs des journalistes.",
              hint: "Montrez d'abord que la presse a conquis sa liberté contre la censure, puis que cette liberté s'accompagne de responsabilités juridiques et déontologiques.",
              solution: [
                "Introduction : la liberté de la presse est une conquête démocratique ; on peut se demander si elle autorise tout ce que publient les journaux.",
                "Une liberté conquise : après la censure de l'Ancien Régime, l'article 11 de la DDHC proclame la libre communication des pensées ; au XIXe siècle, les régimes autoritaires (ordonnances de 1830, Second Empire) la restreignent ; la loi de 1881 supprime l'autorisation préalable et la censure.",
                "Une responsabilité juridique : la loi de 1881 désigne un directeur de la publication responsable et définit les abus (diffamation, injure, provocation à la haine), jugés après publication ; elle crée le droit de réponse.",
                "Une responsabilité déontologique : la Charte de Munich (1971) impose de respecter la vérité, de vérifier ses sources, de rectifier les erreurs et de distinguer les faits des commentaires.",
                "Des garanties en retour : secret des sources (2010), pluralisme reconnu comme objectif constitutionnel, régulation de l'audiovisuel par l'Arcom.",
                "Conclusion : la liberté de la presse n'est pas sans responsabilité ; c'est précisément parce qu'elle est responsable devant la loi et devant ses lecteurs qu'elle peut être libre de toute censure préalable.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'histoire de la liberté de la presse.",
            items: [
              "Théophraste Renaudot fonde la Gazette avec un privilège royal.",
              "La DDHC proclame la libre communication des pensées et des opinions.",
              "Les ordonnances de Charles X contre la presse déclenchent les Trois Glorieuses.",
              "Le Second Empire impose l'autorisation préalable des journaux.",
              "La loi du 29 juillet 1881 proclame que l'imprimerie et la librairie sont libres.",
              "Zola publie « J'accuse... ! » dans L'Aurore.",
              "La loi protège le secret des sources des journalistes.",
            ],
          },
          quiz: [
            {
              q: "Que proclame l'article 1er de la loi du 29 juillet 1881 ?",
              options: ["L'imprimerie et la librairie sont libres", "Les journaux doivent être autorisés par le préfet", "La presse est contrôlée par l'État", "Les journalistes doivent prêter serment"],
              answer: 0,
              why: "La loi de 1881 supprime l'autorisation préalable et la censure ; les abus sont jugés après coup.",
            },
            {
              q: "Qu'est-ce que la diffamation ?",
              options: ["Une critique sévère mais argumentée d'une politique publique", "L'imputation d'un fait précis portant atteinte à l'honneur", "Une expression outrageante sans aucun fait précis", "Une caricature humoristique d'une personnalité"],
              answer: 1,
              why: "La diffamation impute un fait précis ; l'injure est une expression outrageante qui n'impute aucun fait.",
            },
            {
              q: "Quel événement de 1830 est lié à la liberté de la presse ?",
              options: ["La Commune de Paris", "La prise de la Bastille", "Le coup d'État de Louis-Napoléon Bonaparte", "La révolution des Trois Glorieuses"],
              answer: 3,
              why: "Les ordonnances de Charles X suspendant la liberté de la presse provoquent la révolution de juillet 1830.",
            },
            {
              q: "Quelle autorité régule l'audiovisuel en France depuis 2022 ?",
              options: ["Le Conseil constitutionnel", "Le ministère de la Culture", "L'Arcom", "La Cour de cassation"],
              answer: 2,
              why: "L'Arcom, autorité indépendante, est née de la fusion du CSA et de la Hadopi le 1er janvier 2022.",
            },
            {
              q: "Que protège la loi du 4 janvier 2010 ?",
              options: ["Le droit de réponse", "Le secret des sources des journalistes", "Le monopole de l'État sur la télévision", "L'anonymat de tous les internautes"],
              answer: 1,
              why: "Elle protège le secret des sources, condition pour que des informateurs osent révéler des abus.",
            },
          ],
          trap: "Croire que la liberté de la presse signifie l'absence de toute règle : la loi de 1881 supprime le contrôle avant publication, mais elle rend le journal responsable après publication devant le juge.",
          method: "Pour réviser, associez chaque grande étape à un régime politique (Ancien Régime, Révolution, Restauration, Second Empire, Troisième République) : vous comprendrez que la liberté de la presse progresse avec la démocratie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'liberte-expression',
          title: "La liberté d'expression et ses limites",
          minutes: 30,
          objectives: [
            "Définir la liberté d'expression et identifier les textes qui la garantissent.",
            "Identifier les limites fixées par la loi et expliquer leur justification.",
            "Distinguer la critique d'une idée ou d'une religion et l'atteinte aux personnes.",
            "Appliquer ces règles à l'expression en ligne et au lycée.",
          ],
          course: [
            {
              heading: "Une liberté fondamentale",
              paragraphs: [
                "La liberté d'expression est le droit de faire connaître ses opinions et ses idées par tout moyen : parole, écrit, dessin, image, vidéo, publication en ligne. Elle comprend aussi le droit de recevoir des informations. Elle est garantie par l'article 11 de la DDHC (1789), par l'article 10 de la Convention européenne des droits de l'homme et par l'article 19 de la Déclaration universelle des droits de l'homme (1948).",
                "Cette liberté protège aussi les idées qui dérangent. Dans l'arrêt Handyside contre Royaume-Uni (1976), la Cour européenne des droits de l'homme a jugé qu'elle vaut non seulement pour les idées accueillies avec faveur, mais aussi pour celles qui heurtent, choquent ou inquiètent : c'est ce qu'exigent le pluralisme, la tolérance et l'esprit d'ouverture sans lesquels il n'y a pas de société démocratique. Une opinion minoritaire, impopulaire ou provocante n'est donc pas interdite pour autant.",
              ],
              box: { label: "Définition", text: "La liberté d'expression est le droit d'exprimer et de diffuser ses opinions et ses idées, et de recevoir des informations, par tout moyen. Elle protège aussi les idées qui heurtent, choquent ou inquiètent." },
            },
            {
              heading: "Des limites fixées par la loi",
              paragraphs: [
                "La liberté d'expression n'est pas absolue. L'article 10 de la Convention européenne admet des restrictions prévues par la loi et nécessaires dans une société démocratique, par exemple pour protéger la réputation ou les droits d'autrui ou pour prévenir le crime. En France, la loi punit notamment la diffamation et l'injure (loi du 29 juillet 1881), la provocation à la discrimination, à la haine ou à la violence en raison de l'origine, de la religion, du sexe, de l'orientation sexuelle ou du handicap, l'apologie de crimes de guerre ou contre l'humanité, et la contestation des crimes contre l'humanité jugés à Nuremberg (loi Gayssot du 13 juillet 1990).",
                "D'autres limites protègent les personnes : le respect de la vie privée et le droit à l'image (article 9 du Code civil), la présomption d'innocence, l'interdiction du harcèlement, y compris en ligne. Depuis la loi du 3 août 2018, le harcèlement en meute, quand plusieurs personnes s'en prennent à une même victime, est puni même si chaque auteur n'a publié qu'un seul message. L'apologie du terrorisme et la provocation à des actes terroristes sont punies par le Code pénal.",
              ],
              box: { label: "Règle", text: "La liberté d'expression est la règle. Ses limites sont fixées par la loi et contrôlées par le juge : diffamation, injure, provocation à la haine ou à la violence, apologie de crimes, négationnisme, atteinte à la vie privée, harcèlement." },
            },
            {
              heading: "Critiquer une idée, ne pas attaquer une personne",
              paragraphs: [
                "Le critère essentiel est la distinction entre les idées et les personnes. On peut critiquer une politique, une théorie, une religion, se moquer d'un dogme ou d'un responsable politique. Le blasphème n'est pas un délit en France : en 2007, le tribunal correctionnel de Paris a relaxé le journal Charlie Hebdo, poursuivi pour avoir publié des caricatures du prophète de l'islam, en jugeant qu'elles ne visaient pas l'ensemble des musulmans mais les terroristes qui se réclament de cette religion.",
                "En revanche, on ne peut pas injurier ou appeler à la haine contre des personnes en raison de leur religion ou de leur origine. Dire « cette doctrine me paraît fausse » relève de la liberté d'expression ; insulter les fidèles d'une religion ou appeler à les exclure relève de la loi pénale. Cette frontière protège à la fois le débat d'idées et la dignité de chacun.",
              ],
            },
            {
              heading: "En ligne et au lycée : les mêmes règles",
              paragraphs: [
                "Internet n'est pas une zone de non-droit : un message publié sur un réseau social est une expression publique soumise aux mêmes lois qu'un article de journal. L'anonymat n'est que relatif, car la justice peut demander aux plateformes d'identifier l'auteur. Le règlement européen sur les services numériques (DSA), applicable à toutes les plateformes depuis février 2024, les oblige à permettre le signalement des contenus illicites et à les traiter rapidement. Le Conseil constitutionnel veille cependant à ce que la lutte contre la haine en ligne n'aboutisse pas à une censure excessive : en 2020, il a censuré une loi qui obligeait les plateformes à retirer en 24 heures, sans intervention d'un juge, les contenus signalés comme haineux.",
                "Au lycée, le Code de l'éducation reconnaît aux élèves la liberté d'information et d'expression, dans le respect du pluralisme et du principe de neutralité. Ils peuvent créer un journal lycéen, s'exprimer par leurs délégués, se réunir. Cette liberté a les mêmes limites qu'ailleurs : pas d'injure, pas de diffamation, pas d'atteinte à la vie privée, pas de harcèlement, ce qui inclut le cyberharcèlement d'un camarade.",
              ],
              box: { label: "Repère", text: "1789 : DDHC, article 11. 1972 : loi Pleven (provocation à la haine raciale). 1976 : arrêt Handyside. 1990 : loi Gayssot. 2018 : harcèlement en meute puni. 2020 : censure partielle de la loi contre la haine en ligne. 2024 : DSA applicable à toutes les plateformes." },
            },
          ],
          keyPoints: [
            "Garanties : DDHC (article 11), Convention européenne (article 10), DUDH (article 19).",
            "Arrêt Handyside (1976) : la liberté d'expression protège aussi les idées qui heurtent, choquent ou inquiètent.",
            "Limites légales : diffamation, injure, provocation à la haine, apologie de crimes, négationnisme (loi Gayssot, 1990), vie privée, harcèlement.",
            "Le blasphème n'est pas un délit : on peut critiquer une religion, pas injurier ou appeler à la haine contre ses fidèles.",
            "En ligne, les mêmes lois s'appliquent ; le DSA impose aux plateformes de traiter les signalements de contenus illicites.",
            "Au lycée, les élèves ont la liberté d'expression, dans le respect du pluralisme, de la neutralité et des personnes.",
          ],
          example: {
            statement: "Sur un groupe de messagerie de la classe, plusieurs élèves publient chacun un message moqueur et insultant visant le même camarade, accompagné d'une photo de lui prise sans son accord. L'un d'eux se défend : « Je n'ai envoyé qu'un message, et c'est ma liberté d'expression. » Analysez la situation.",
            solution: [
              "Identifier la liberté invoquée : la liberté d'expression, garantie par l'article 11 de la DDHC.",
              "Rappeler qu'elle a des limites fixées par la loi : elle ne protège ni l'injure ni le harcèlement ni l'atteinte à la vie privée.",
              "Qualifier les messages : des propos insultants visant une personne relèvent de l'injure ; leur répétition par plusieurs élèves contre la même victime constitue un harcèlement.",
              "Répondre à l'argument de l'élève : depuis la loi du 3 août 2018, le harcèlement en meute est puni même si chaque auteur n'a publié qu'un seul message, dès lors qu'il sait participer à des agissements répétés.",
              "Ajouter l'atteinte à la vie privée : diffuser la photo d'une personne sans son accord porte atteinte à son droit à l'image (article 9 du Code civil).",
              "Indiquer les conséquences : sanctions disciplinaires au lycée et poursuites pénales possibles ; la victime et ses parents peuvent signaler les faits (au numéro national 3018 contre le cyberharcèlement, à l'établissement, à la police).",
              "Conclusion : l'élève ne peut pas invoquer la liberté d'expression ; il participe à un harcèlement puni par la loi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque propos, indiquez s'il relève de la liberté d'expression ou s'il est puni par la loi, et précisez l'abus le cas échéant : a) « Je trouve que la réforme du gouvernement est injuste et mal pensée. » b) Une affirmation publique, sans preuve, selon laquelle un voisin nommément désigné vole dans les magasins. c) Un message qui appelle à frapper les habitants d'un quartier en raison de leur origine. d) Un dessin satirique qui se moque d'un dogme religieux.",
              hint: "Distinguez la critique d'une idée ou d'une politique, l'imputation d'un fait précis à une personne et l'appel à la violence contre un groupe.",
              solution: [
                "a) Liberté d'expression : la critique d'une politique publique est protégée.",
                "b) Puni : c'est une diffamation, car on impute à une personne désignée un fait précis qui porte atteinte à son honneur.",
                "c) Puni : c'est une provocation à la violence en raison de l'origine, délit prévu par la loi de 1881.",
                "d) Liberté d'expression : le blasphème n'est pas un délit ; la satire d'une croyance est permise tant qu'elle n'appelle pas à la haine contre ses fidèles.",
                "Résultat : a et d relèvent de la liberté d'expression ; b et c sont punis.",
              ],
            },
            {
              level: 2,
              statement: "Le comité de rédaction d'un journal lycéen veut publier : 1) un éditorial critiquant le nouveau règlement intérieur ; 2) un article affirmant, sans vérification, qu'un professeur nommé « favorise ses élèves préférés » ; 3) une enquête sur le gaspillage à la cantine, avec des chiffres relevés par les élèves pendant une semaine. Quels contenus peuvent être publiés tels quels ? Que conseillez-vous pour les autres ?",
              hint: "Rappelez le droit d'expression des lycéens et ses limites, puis vérifiez pour chaque contenu s'il vise une idée ou une personne et s'il est vérifié.",
              solution: [
                "Cadre : le Code de l'éducation reconnaît aux lycéens la liberté d'expression, dans le respect du pluralisme et de la neutralité, et avec les limites prévues par la loi.",
                "1) Publiable : critiquer un règlement est une opinion sur une règle collective, protégée par la liberté d'expression ; il faut rester argumenté et respectueux.",
                "2) À ne pas publier tel quel : accuser un professeur nommé d'un comportement précis sans preuve peut constituer une diffamation ; il faut renoncer à l'article ou enquêter sérieusement, recueillir plusieurs témoignages et donner la parole à la personne mise en cause.",
                "3) Publiable : c'est une enquête d'intérêt général appuyée sur des données ; il faut indiquer la méthode (dates, mode de relevé) et préciser les limites de l'échantillon.",
                "Conclusion : les contenus 1 et 3 peuvent être publiés ; le contenu 2 doit être abandonné ou transformé en véritable enquête vérifiée et contradictoire.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de réflexion : « Peut-on tout dire au nom de la liberté d'expression ? » Rédigez un développement construit en deux parties, avec au moins trois références précises (textes, décisions, lois).",
              hint: "Première partie : l'étendue de la liberté, qui protège aussi ce qui choque. Seconde partie : les limites fixées par la loi pour protéger les personnes, et leur contrôle par le juge.",
              solution: [
                "Introduction : la liberté d'expression est au cœur de la démocratie, mais « tout dire » suppose une liberté sans limite. Il faut se demander jusqu'où elle s'étend.",
                "Première partie, une liberté très large : l'article 11 de la DDHC en fait un des droits les plus précieux ; l'arrêt Handyside (1976) protège les idées qui heurtent, choquent ou inquiètent ; le blasphème n'est pas un délit, et la satire d'une religion est permise, comme l'a jugé le tribunal correctionnel de Paris en 2007 à propos de Charlie Hebdo.",
                "Seconde partie, des limites pour protéger les personnes : la loi de 1881 punit la diffamation, l'injure et la provocation à la haine ; la loi Gayssot (1990) réprime la négation des crimes contre l'humanité ; la loi de 2018 punit le harcèlement en meute en ligne.",
                "Le contrôle des limites : ces restrictions doivent être prévues par la loi, nécessaires et appliquées par un juge ; en 2020, le Conseil constitutionnel a censuré un retrait des contenus en 24 heures sans juge, jugé excessif.",
                "Conclusion : on ne peut pas tout dire, mais on peut dire beaucoup, y compris ce qui dérange ; la limite passe entre la critique des idées, libre, et l'atteinte aux personnes, punie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition ou à son texte de référence.",
            pairs: [
              { left: "Diffamation", right: "Imputer à une personne un fait précis portant atteinte à son honneur" },
              { left: "Injure", right: "Expression outrageante qui n'impute aucun fait précis" },
              { left: "Loi Gayssot (1990)", right: "Punit la contestation des crimes contre l'humanité" },
              { left: "Arrêt Handyside (1976)", right: "Protège aussi les idées qui heurtent, choquent ou inquiètent" },
              { left: "Harcèlement en meute", right: "Puni même pour un seul message dans une attaque collective" },
              { left: "Article 9 du Code civil", right: "Droit au respect de la vie privée" },
            ],
          },
          quiz: [
            {
              q: "Le blasphème est-il un délit en France ?",
              options: ["Oui, il est puni d'une amende par la loi de 1881", "Oui, mais seulement en ligne", "Non, la critique des religions est permise", "Oui, s'il vise la religion majoritaire"],
              answer: 2,
              why: "On peut critiquer ou caricaturer une religion ; ce qui est puni, c'est l'injure ou la provocation à la haine contre des personnes.",
            },
            {
              q: "Quel article de la Convention européenne des droits de l'homme garantit la liberté d'expression ?",
              options: ["L'article 10", "L'article 2", "L'article 6", "L'article 14"],
              answer: 0,
              why: "L'article 10 garantit la liberté d'expression et admet des restrictions prévues par la loi et nécessaires dans une société démocratique.",
            },
            {
              q: "Que punit la loi Gayssot du 13 juillet 1990 ?",
              options: ["La diffamation envers un élu", "Le harcèlement en ligne", "La contestation des crimes contre l'humanité", "Le refus de publier un droit de réponse dans un journal"],
              answer: 2,
              why: "Elle réprime la contestation des crimes contre l'humanité jugés par le tribunal de Nuremberg.",
            },
            {
              q: "Pourquoi le Conseil constitutionnel a-t-il censuré en 2020 une partie de la loi contre la haine en ligne ?",
              options: ["Parce qu'il juge la haine en ligne acceptable", "Parce qu'un retrait en 24 heures sans juge était excessif", "Parce que les plateformes ne sont pas concernées par le droit", "Parce que la loi visait la presse écrite"],
              answer: 1,
              why: "L'obligation de retirer très vite des contenus sans contrôle d'un juge risquait de conduire les plateformes à supprimer des propos licites.",
            },
            {
              q: "Lequel de ces propos est protégé par la liberté d'expression ?",
              options: ["Une insulte visant un camarade nommé", "Un appel à la violence contre les membres d'un groupe religieux", "La diffusion de la photo d'un élève sans son accord", "Une critique argumentée d'une décision du gouvernement"],
              answer: 3,
              why: "Critiquer une décision politique est au cœur de la liberté d'expression ; les trois autres propos portent atteinte à des personnes.",
            },
          ],
          trap: "Confondre la critique d'une idée ou d'une religion, qui est libre, avec l'attaque contre des personnes (injure, provocation à la haine), qui est punie : c'est la cible du propos qui fait la différence.",
          method: "Avant de juger un propos, demandez-vous qui ou quoi il vise (une idée, une institution, une personne, un groupe), puis s'il impute un fait, insulte ou appelle à la haine : vous saurez quelle règle appliquer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'esprit-critique-information',
          title: "S'informer avec esprit critique : sources, réseaux et désinformation",
          minutes: 35,
          objectives: [
            "Distinguer une information, une opinion, une rumeur et un contenu publicitaire.",
            "Évaluer la fiabilité d'une source et vérifier une information par recoupement.",
            "Expliquer comment les réseaux sociaux et les algorithmes influencent l'accès à l'information.",
            "Identifier les procédés de la désinformation et les moyens juridiques de la combattre.",
          ],
          course: [
            {
              heading: "Information, opinion, rumeur : faire la différence",
              paragraphs: [
                "Une information est un fait vérifié, daté et sourcé, que l'on peut confirmer par d'autres moyens : « Le Parlement a adopté tel projet de loi le 12 mars. » Une opinion est un jugement personnel, qui peut être argumenté mais pas vérifié comme vrai ou faux : « Cette loi est une bonne idée. » Une rumeur est une affirmation qui circule sans source identifiable ni vérification. Un contenu publicitaire ou sponsorisé cherche à vendre ou à promouvoir, même s'il prend l'apparence d'un article.",
                "On distingue plusieurs formes de fausses informations. La désinformation est la diffusion volontaire d'une information fausse pour tromper, nuire ou manipuler. La mésinformation est la diffusion d'une information fausse par quelqu'un qui la croit vraie, par exemple un ami qui partage un faux message de bonne foi. On parle aussi d'infox (traduction officielle de fake news) pour désigner une fausse information présentée comme vraie.",
              ],
              box: { label: "Définition", text: "Désinformation : diffusion volontaire d'une information fausse dans le but de tromper. Mésinformation : diffusion involontaire d'une information fausse, par erreur ou de bonne foi. Infox : fausse information présentée comme vraie." },
            },
            {
              heading: "Évaluer une source et vérifier une information",
              paragraphs: [
                "Face à un contenu, posez des questions précises. Qui parle ? Un média identifié, un expert reconnu, une institution, un compte anonyme ? Les mentions légales d'un site indiquent qui le publie. Quand ? Une information ancienne republiée hors de son contexte peut tromper. D'où vient l'information ? Une source primaire (le document original, le témoin direct, le texte de loi) est plus sûre qu'une reprise de reprise. Dans quel but ? Informer, convaincre, vendre, faire réagir ?",
                "Puis vérifiez par recoupement : une information fiable est confirmée par plusieurs sources indépendantes entre elles. Pour une image, une recherche d'image inversée permet de retrouver sa première publication et de voir si elle a été détournée. Les rubriques de vérification des faits (fact-checking) des grands médias, comme AFP Factuel ou Les Décodeurs du journal Le Monde, examinent les contenus viraux. Méfiez-vous des titres sensationnels, des appels à partager « avant que ce soit supprimé » et des contenus qui suscitent une émotion très forte : l'émotion pousse à partager avant de vérifier.",
              ],
              box: { label: "À retenir", text: "Qui parle ? Quand ? D'où vient l'information (source primaire ou reprise) ? Dans quel but ? Est-elle confirmée par plusieurs sources indépendantes ? Sans réponse claire à ces questions, on ne partage pas." },
            },
            {
              heading: "Réseaux sociaux, algorithmes et biais",
              paragraphs: [
                "Les réseaux sociaux sont devenus une source d'information majeure, surtout chez les jeunes. Or leurs algorithmes de recommandation sélectionnent les contenus selon ce qui retient l'attention : ce qui choque, amuse ou indigne est davantage montré. Le militant américain Eli Pariser a décrit en 2011 la bulle de filtre : à force de nous proposer ce qui ressemble à nos goûts, l'algorithme nous enferme dans une vision partielle du monde. Les chambres d'écho désignent les groupes où chacun n'entend que des avis qui confirment le sien.",
                "Nos propres biais aggravent le phénomène. Le biais de confirmation nous pousse à croire plus facilement ce qui confirme ce que nous pensons déjà, et à rejeter ce qui le contredit. Les outils d'intelligence artificielle générative permettent désormais de fabriquer des images, des voix et des vidéos très réalistes, appelées hypertrucages (deepfakes) : une vidéo n'est plus, à elle seule, une preuve. Il faut donc vérifier la source d'un contenu avant de se fier à son apparence.",
              ],
            },
            {
              heading: "Lutter contre la désinformation dans le respect des libertés",
              paragraphs: [
                "La désinformation menace la démocratie : elle peut fausser une élection, inciter à la haine ou mettre la santé en danger. La loi du 22 décembre 2018 relative à la lutte contre la manipulation de l'information permet, pendant les trois mois qui précèdent des élections générales (présidentielle, législatives, sénatoriales, européennes), de saisir le juge des référés pour faire cesser la diffusion massive et artificielle d'informations manifestement fausses de nature à altérer la sincérité du scrutin ; le juge statue en 48 heures. Depuis 2021, le service Viginum, placé auprès du Secrétariat général de la défense et de la sécurité nationale, détecte les ingérences numériques étrangères.",
                "Ces outils doivent rester limités, car l'État ne doit pas devenir l'arbitre de la vérité : la liberté d'expression protège aussi les erreurs et les opinions contestables. C'est pourquoi la réponse la plus durable est l'éducation aux médias et à l'information, assurée à l'école notamment avec le CLEMI (Centre pour l'éducation aux médias et à l'information), et la responsabilité de chacun : vérifier avant de partager, citer ses sources, corriger une erreur quand on l'a relayée.",
              ],
              box: { label: "Repère", text: "2011 : Eli Pariser décrit la bulle de filtre. 22 décembre 2018 : loi contre la manipulation de l'information (référé en période électorale, décision en 48 heures). 2021 : création de Viginum contre les ingérences numériques étrangères." },
            },
          ],
          keyPoints: [
            "Une information est vérifiée, datée et sourcée ; une opinion est un jugement ; une rumeur circule sans source.",
            "Désinformation (volontaire) et mésinformation (involontaire) diffusent des informations fausses.",
            "Vérifier : qui parle, quand, d'où vient l'information, dans quel but, et recouper avec plusieurs sources indépendantes.",
            "Les algorithmes favorisent ce qui retient l'attention et peuvent enfermer dans une bulle de filtre.",
            "Le biais de confirmation et les hypertrucages (deepfakes) imposent de vérifier la source d'un contenu.",
            "Loi du 22 décembre 2018 : référé contre la manipulation de l'information en période électorale, dans le respect de la liberté d'expression.",
          ],
          example: {
            statement: "Vous recevez sur un réseau social une vidéo montrant, selon sa légende, « des émeutes hier soir dans le centre-ville de Lyon ». Elle est partagée des milliers de fois. Comment vérifier cette information avant de la partager ?",
            solution: [
              "Identifier l'auteur : regarder qui a publié la vidéo en premier ; un compte anonyme récent ou sans historique invite à la prudence.",
              "Vérifier la date et le lieu : faire une recherche d'image inversée à partir d'une capture de la vidéo pour retrouver sa première publication ; elle peut dater d'il y a plusieurs années ou venir d'une autre ville.",
              "Observer les indices : panneaux, langue des inscriptions, bâtiments reconnaissables, météo, qui permettent de confirmer ou d'infirmer le lieu.",
              "Recouper : chercher si des médias identifiés (presse locale, agences) ou les autorités évoquent des émeutes à Lyon la veille.",
              "Consulter le fact-checking : vérifier si une rubrique de vérification des faits a déjà examiné cette vidéo virale.",
              "Conclusion : sans confirmation par des sources fiables et indépendantes, on ne partage pas ; si la vidéo est détournée, on peut le signaler et prévenir la personne qui l'a envoyée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque énoncé dans l'une des catégories suivantes : information, opinion, rumeur, contenu publicitaire. a) « Selon un message qui tourne, le lycée serait fermé lundi, mais personne ne sait qui l'a écrit. » b) « Le ministère a publié le calendrier officiel des vacances scolaires le 15 juin. » c) « Je pense que les vacances d'été sont trop longues. » d) « Ce nouveau gel coiffant, testé par une influenceuse rémunérée, va changer votre vie. »",
              hint: "Demandez-vous si l'énoncé est vérifiable et sourcé, s'il exprime un jugement, s'il circule sans auteur, ou s'il cherche à vendre.",
              solution: [
                "a) Rumeur : l'affirmation circule sans auteur identifiable ni vérification.",
                "b) Information : c'est un fait daté, attribué à une source officielle et vérifiable.",
                "c) Opinion : c'est un jugement personnel, discutable mais non vérifiable.",
                "d) Contenu publicitaire : l'influenceuse est rémunérée pour promouvoir un produit.",
                "Résultat : a rumeur, b information, c opinion, d publicité.",
              ],
            },
            {
              level: 2,
              statement: "Un article publié sur un site inconnu affirme qu'« une étude prouve qu'utiliser son téléphone avant de dormir fait perdre 20 points de QI ». Le site n'a pas de mentions légales, l'article n'est pas signé et ne donne ni le nom de l'étude ni celui des chercheurs (données de l'énoncé fictives). Appliquez la méthode de vérification du cours et concluez sur la fiabilité de l'article.",
              hint: "Reprenez une à une les questions du cours : qui parle, quand, d'où vient l'information, dans quel but, est-elle confirmée ailleurs ?",
              solution: [
                "Qui parle : le site est inconnu, sans mentions légales, et l'article n'est pas signé ; on ne peut identifier ni l'auteur ni l'éditeur.",
                "D'où vient l'information : l'étude n'est pas nommée et aucun chercheur n'est cité ; on ne peut pas consulter la source primaire.",
                "Analyse du contenu : le chiffre spectaculaire et le verbe « prouve » sont des signaux d'alerte ; une étude isolée prouve rarement à elle seule un effet aussi précis.",
                "Dans quel but : un titre alarmant attire les clics ; il faut se demander si le site vit de la publicité.",
                "Recoupement : il faudrait rechercher l'étude dans des médias fiables ou des publications scientifiques ; en l'absence de toute trace, l'information doit être considérée comme non vérifiée.",
                "Conclusion : l'article n'est pas fiable en l'état ; on ne le partage pas, même si l'on peut par ailleurs s'informer auprès de sources sérieuses sur les effets des écrans sur le sommeil.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « Faut-il confier à l'État la lutte contre la désinformation ? » Vous montrerez les dangers de la désinformation, les outils juridiques existants et leurs limites au regard de la liberté d'expression, puis la part de responsabilité des citoyens.",
              hint: "Construisez trois temps : pourquoi la désinformation menace la démocratie, ce que fait la loi (2018, Viginum, DSA) et pourquoi elle doit rester limitée, ce que chacun peut faire.",
              solution: [
                "Introduction : la désinformation se diffuse vite sur les réseaux sociaux ; on peut se demander si l'État doit être chargé de dire ce qui est vrai.",
                "Les dangers : la désinformation peut fausser une élection, attiser la haine ou mettre la santé en danger ; les algorithmes, qui favorisent les contenus qui choquent, et le biais de confirmation amplifient sa diffusion.",
                "Les outils de l'État : la loi du 22 décembre 2018 permet au juge des référés de faire cesser, en 48 heures, la diffusion massive et artificielle de fausses informations pendant les trois mois précédant des élections générales ; Viginum détecte depuis 2021 les ingérences numériques étrangères ; le DSA européen oblige les plateformes à traiter les contenus illicites.",
                "Les limites : un État arbitre de la vérité pourrait censurer des opinions dérangeantes ; la liberté d'expression protège aussi les erreurs, et c'est pourquoi la loi de 2018 vise des informations manifestement fausses et confie la décision à un juge.",
                "La responsabilité des citoyens : l'éducation aux médias (CLEMI), la vérification avant partage, le recoupement des sources et le soutien à un journalisme de qualité sont des réponses durables.",
                "Conclusion : l'État a un rôle à jouer, sous le contrôle du juge et dans des limites strictes, mais la lutte contre la désinformation repose d'abord sur l'esprit critique de chaque citoyen.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la vérification d'un contenu viral.",
            items: [
              "Ne pas partager sous le coup de l'émotion.",
              "Identifier qui a publié le contenu en premier.",
              "Vérifier la date et le contexte d'origine du contenu.",
              "Remonter à la source primaire de l'information.",
              "Recouper avec plusieurs sources fiables et indépendantes.",
              "Partager seulement si l'information est confirmée, en citant la source.",
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre désinformation et mésinformation ?",
              options: ["L'une est volontaire, l'autre involontaire", "La désinformation est vraie, la mésinformation est fausse", "La mésinformation est toujours punie par la loi", "Il n'y en a aucune"],
              answer: 0,
              why: "Les deux diffusent une information fausse, mais seule la désinformation vise délibérément à tromper.",
            },
            {
              q: "Qu'est-ce que la bulle de filtre ?",
              options: ["Un logiciel qui bloque les publicités", "Une loi européenne qui filtre automatiquement les contenus illicites", "Un enfermement dans des contenus choisis par un algorithme", "Un réseau social réservé aux journalistes"],
              answer: 2,
              why: "Décrite par Eli Pariser en 2011, elle désigne l'effet des algorithmes qui nous montrent surtout ce qui nous ressemble.",
            },
            {
              q: "Qu'est-ce qu'une source primaire ?",
              options: ["Un article qui reprend une dépêche", "Le document original ou le témoin direct", "Le premier résultat d'un moteur de recherche", "Le message le plus partagé"],
              answer: 1,
              why: "La source primaire est l'origine de l'information ; les reprises successives risquent de la déformer.",
            },
            {
              q: "Que permet la loi du 22 décembre 2018 en période électorale ?",
              options: ["Interdire tous les réseaux sociaux", "Supprimer toute opinion critique envers les candidats ou les partis", "Obliger chaque média à soutenir un candidat", "Saisir le juge des référés contre de fausses informations"],
              answer: 3,
              why: "Dans les trois mois précédant des élections générales, le juge des référés statue en 48 heures sur les informations manifestement fausses.",
            },
            {
              q: "Quel biais nous pousse à croire plus facilement ce qui confirme nos idées ?",
              options: ["Le biais de confirmation", "Le biais de sélection", "L'effet de halo", "L'effet de simple exposition"],
              answer: 0,
              why: "Le biais de confirmation nous fait accepter sans vérifier ce qui va dans notre sens et rejeter ce qui le contredit.",
            },
          ],
          trap: "Considérer qu'une information est vraie parce qu'elle est très partagée, qu'elle vient d'un proche ou qu'elle est accompagnée d'une vidéo : la popularité et l'apparence ne remplacent jamais la vérification de la source et le recoupement.",
          method: "Avant de partager un contenu, appliquez systématiquement les quatre questions (qui, quand, d'où, pourquoi), puis cherchez au moins deux sources indépendantes qui le confirment ; notez-les pour pouvoir les citer.",
        },
      ],
    },
    /* ==================================================================== */
    /* DROITS ET RESPONSABILITÉS FACE À L'ENVIRONNEMENT                      */
    /* ==================================================================== */
    {
      id: 'environnement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'charte-environnement',
          title: "La Charte de l'environnement et le droit à un environnement sain",
          minutes: 30,
          objectives: [
            "Présenter la Charte de l'environnement de 2004 et expliquer sa valeur constitutionnelle.",
            "Identifier les droits et les devoirs qu'elle reconnaît à chacun.",
            "Expliquer les principes de prévention, de réparation et de précaution.",
            "Analyser des décisions de justice qui s'appuient sur le droit de l'environnement.",
          ],
          course: [
            {
              heading: "Une charte intégrée à la Constitution",
              paragraphs: [
                "Au sommet de la Terre de Johannesburg, en 2002, le président Jacques Chirac alerte sur la crise écologique en affirmant que « notre maison brûle ». Il propose ensuite d'inscrire la protection de l'environnement dans la Constitution. La Charte de l'environnement, rédigée en 2004, est adoptée par le Parlement réuni en Congrès à Versailles le 28 février 2005 et promulguée par la loi constitutionnelle du 1er mars 2005. Le préambule de la Constitution de 1958 y fait désormais référence, aux côtés de la DDHC et du Préambule de 1946.",
                "La Charte fait donc partie du bloc de constitutionnalité : elle s'impose au législateur et à l'administration, et ses dispositions peuvent être invoquées devant le Conseil constitutionnel, notamment par la voie de la question prioritaire de constitutionnalité. Elle comprend sept considérants, qui rappellent que l'avenir et l'existence même de l'humanité sont indissociables de son milieu naturel, et dix articles. On parle parfois de droits de troisième génération, après les droits civils et politiques de 1789 et les droits économiques et sociaux de 1946.",
              ],
              box: { label: "Repère", text: "2002 : discours de Johannesburg. 28 février 2005 : adoption par le Congrès. 1er mars 2005 : loi constitutionnelle qui intègre la Charte de l'environnement au préambule de la Constitution de 1958." },
            },
            {
              heading: "Des droits et des devoirs",
              paragraphs: [
                "L'article 1er proclame que chacun a le droit de vivre dans un environnement équilibré et respectueux de la santé. Mais la Charte est originale parce qu'elle associe ce droit à des devoirs qui pèsent sur toute personne : l'article 2 dispose que toute personne a le devoir de prendre part à la préservation et à l'amélioration de l'environnement. L'article 3 impose de prévenir les atteintes que l'on est susceptible de porter à l'environnement ou, à défaut, d'en limiter les conséquences. L'article 4 prévoit que toute personne doit contribuer à la réparation des dommages qu'elle cause à l'environnement.",
                "La Charte reconnaît aussi des droits démocratiques. L'article 7 donne à toute personne le droit d'accéder aux informations relatives à l'environnement détenues par les autorités publiques et de participer à l'élaboration des décisions publiques qui ont une incidence sur l'environnement : enquêtes publiques avant un grand projet, consultations du public. L'article 6 demande aux politiques publiques de promouvoir un développement durable, qui concilie protection de l'environnement, développement économique et progrès social. Les articles 8 et 9 portent sur l'éducation et la recherche, l'article 10 sur l'action européenne et internationale de la France.",
              ],
              box: { label: "À retenir", text: "Article 1er : droit de vivre dans un environnement équilibré et respectueux de la santé. Article 2 : devoir de préserver et d'améliorer l'environnement. Article 4 : contribuer à réparer les dommages causés. Article 7 : droit à l'information et à la participation." },
            },
            {
              heading: "Prévention, réparation, précaution",
              paragraphs: [
                "Trois principes structurent le droit de l'environnement. La prévention (article 3) s'applique aux risques connus : on sait qu'un rejet toxique pollue une rivière, il faut donc l'éviter. La réparation (article 4), souvent résumée par l'idée de « pollueur-payeur », oblige l'auteur d'un dommage à en supporter les conséquences. Après le naufrage du pétrolier Erika en 1999, la Cour de cassation a confirmé en 2012 la condamnation de la société Total et reconnu le préjudice écologique ; la loi du 8 août 2016 l'a inscrit dans le Code civil.",
                "Le principe de précaution (article 5) concerne les risques incertains. Lorsque la réalisation d'un dommage, bien qu'incertaine en l'état des connaissances scientifiques, pourrait affecter de manière grave et irréversible l'environnement, les autorités publiques doivent évaluer les risques et adopter des mesures provisoires et proportionnées. La précaution n'est donc pas une interdiction de tout ce qui comporte un risque : c'est une obligation d'agir avec prudence, d'étudier et de réviser les mesures quand les connaissances progressent.",
              ],
              box: { label: "Définition", text: "Principe de précaution : face à un risque de dommage grave et irréversible pour l'environnement, même incertain scientifiquement, les autorités publiques évaluent ce risque et adoptent des mesures provisoires et proportionnées pour l'éviter." },
            },
            {
              heading: "Un droit invoqué devant les juges",
              paragraphs: [
                "Le Conseil constitutionnel donne une portée croissante à la Charte. Le 31 janvier 2020, il juge que la protection de l'environnement, patrimoine commun des êtres humains, est un objectif de valeur constitutionnelle qui peut justifier des limites à la liberté d'entreprendre : il valide l'interdiction de produire en France des pesticides interdits dans l'Union européenne, même destinés à l'exportation. Le 27 octobre 2023, il reconnaît que le législateur doit tenir compte des droits des générations futures à vivre dans un environnement équilibré. En août 2025, il censure une disposition qui permettait de réautoriser par dérogation un insecticide de la famille des néonicotinoïdes, en s'appuyant sur la Charte.",
                "Les juges administratifs ont aussi été saisis de la responsabilité de l'État face au changement climatique. Dans l'affaire de la commune de Grande-Synthe, le Conseil d'État a enjoint au gouvernement, le 1er juillet 2021, de prendre des mesures supplémentaires pour atteindre ses objectifs de réduction des émissions de gaz à effet de serre. Dans « l'Affaire du siècle », portée par quatre associations, le tribunal administratif de Paris a reconnu en 2021 une carence fautive de l'État dans la lutte contre le changement climatique.",
              ],
            },
          ],
          keyPoints: [
            "Charte de l'environnement : rédigée en 2004, intégrée au bloc de constitutionnalité par la loi constitutionnelle du 1er mars 2005.",
            "Article 1er : droit de vivre dans un environnement équilibré et respectueux de la santé ; article 2 : devoir de le préserver.",
            "Prévention (risque connu), réparation (pollueur-payeur), précaution (risque incertain, grave et irréversible).",
            "Article 7 : droit d'accéder aux informations environnementales et de participer aux décisions publiques.",
            "Conseil constitutionnel : protection de l'environnement objectif de valeur constitutionnelle (2020), générations futures (2023).",
            "Grande-Synthe (2021) et l'Affaire du siècle (2021) : les juges contrôlent l'action climatique de l'État.",
          ],
          example: {
            statement: "Une entreprise veut construire une usine près d'une zone humide. Des habitants souhaitent être informés des risques et donner leur avis. Une association craint en outre des effets encore mal connus d'une substance utilisée par l'usine. Sur quels articles de la Charte de l'environnement peuvent-ils s'appuyer ?",
            solution: [
              "Identifier les droits des habitants : l'article 7 leur donne le droit d'accéder aux informations relatives à l'environnement détenues par les autorités publiques et de participer à l'élaboration des décisions, par exemple lors d'une enquête publique.",
              "Mobiliser le droit fondamental : l'article 1er reconnaît à chacun le droit de vivre dans un environnement équilibré et respectueux de la santé.",
              "Rappeler les devoirs de l'entreprise : l'article 3 l'oblige à prévenir les atteintes qu'elle est susceptible de porter à l'environnement (la zone humide) ou à en limiter les conséquences.",
              "Traiter le risque incertain : pour la substance aux effets mal connus, l'association peut invoquer le principe de précaution (article 5), qui impose aux autorités publiques d'évaluer le risque et de prendre des mesures provisoires et proportionnées s'il peut être grave et irréversible.",
              "Prévoir la suite : en cas de dommage, l'article 4 oblige l'entreprise à contribuer à la réparation.",
              "Conclusion : les habitants et l'association peuvent s'appuyer sur les articles 1er, 3, 4, 5 et 7 de la Charte ; ces droits peuvent être invoqués devant les juges.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque situation au principe qu'elle illustre (prévention, réparation, précaution) : a) une entreprise responsable d'une marée noire doit financer le nettoyage des côtes ; b) les autorités suspendent l'utilisation d'un produit dont les effets graves sur les abeilles sont suspectés mais pas encore démontrés, le temps de mener des études ; c) une usine installe un filtre pour éviter de rejeter des substances dont on sait qu'elles sont toxiques.",
              hint: "Demandez-vous si le dommage a déjà eu lieu, s'il est certain mais évitable, ou s'il est seulement possible en l'état des connaissances.",
              solution: [
                "a) Réparation : le dommage a eu lieu ; l'article 4 oblige son auteur à contribuer à le réparer.",
                "b) Précaution : le risque est incertain mais pourrait être grave ; l'article 5 justifie une mesure provisoire et proportionnée, accompagnée d'études.",
                "c) Prévention : le risque est connu ; l'article 3 impose de l'éviter.",
                "Résultat : a réparation, b précaution, c prévention.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi la Charte de l'environnement est originale par rapport à la DDHC de 1789 et au Préambule de 1946. Vous montrerez ce qu'elle a en commun avec ces textes et ce qui la distingue.",
              hint: "Comparez la valeur juridique des trois textes, puis le type de droits qu'ils proclament, enfin la place des devoirs.",
              solution: [
                "Point commun : comme la DDHC et le Préambule de 1946, la Charte est citée par le préambule de la Constitution de 1958 et fait partie du bloc de constitutionnalité ; elle s'impose à la loi.",
                "Une nouvelle génération de droits : la DDHC proclame surtout des droits civils et politiques (liberté, propriété, sûreté), le Préambule de 1946 des droits économiques et sociaux (grève, santé) ; la Charte ajoute des droits liés à l'environnement, dits de troisième génération.",
                "Une place importante des devoirs : la Charte impose à toute personne de préserver l'environnement (article 2), de prévenir les atteintes (article 3) et de contribuer à réparer les dommages (article 4).",
                "Une dimension dans le temps : ses considérants évoquent les générations futures, ce que le Conseil constitutionnel a repris en 2023.",
                "Conclusion : la Charte prolonge les textes de 1789 et de 1946 en donnant une valeur constitutionnelle à la protection de l'environnement, et elle se distingue par l'importance qu'elle accorde aux devoirs de chacun.",
              ],
            },
            {
              level: 3,
              statement: "Document (rédigé pour l'exercice) : « Une entreprise conteste devant le Conseil constitutionnel une loi qui lui interdit de produire en France des pesticides interdits dans l'Union européenne, même pour les vendre à l'étranger. Elle invoque la liberté d'entreprendre. » En vous appuyant sur la décision du Conseil constitutionnel du 31 janvier 2020, expliquez comment le juge concilie la liberté d'entreprendre et la protection de l'environnement.",
              hint: "Identifiez les deux exigences constitutionnelles en conflit, leur fondement, puis la méthode de conciliation du juge.",
              solution: [
                "Identifier la liberté invoquée : la liberté d'entreprendre, que le Conseil constitutionnel rattache à l'article 4 de la DDHC ; elle n'est pas absolue et peut être limitée pour des motifs d'intérêt général.",
                "Identifier l'exigence opposée : la protection de l'environnement, fondée sur la Charte de l'environnement, dont les considérants font de l'environnement le patrimoine commun des êtres humains.",
                "Le raisonnement du Conseil : il reconnaît que la protection de l'environnement est un objectif de valeur constitutionnelle et relève aussi la protection de la santé ; il en déduit que le législateur peut en tenir compte, y compris pour des effets causés hors de France.",
                "La conciliation : le Conseil vérifie que l'atteinte à la liberté d'entreprendre n'est pas disproportionnée au regard de l'objectif ; il juge que l'interdiction est conforme à la Constitution.",
                "Portée : la décision montre que la protection de l'environnement peut justifier des limites importantes à une liberté économique.",
                "Conclusion : le juge ne fait pas primer automatiquement une exigence sur l'autre ; il les concilie, et en 2020 il a donné un poids fort à la protection de l'environnement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque article de la Charte de l'environnement à son contenu.",
            pairs: [
              { left: "Article 1er", right: "Droit de vivre dans un environnement équilibré et respectueux de la santé" },
              { left: "Article 2", right: "Devoir de prendre part à la préservation de l'environnement" },
              { left: "Article 3", right: "Prévenir les atteintes à l'environnement ou en limiter les conséquences" },
              { left: "Article 4", right: "Contribuer à la réparation des dommages causés" },
              { left: "Article 5", right: "Principe de précaution face à un risque incertain, grave et irréversible" },
              { left: "Article 7", right: "Droit à l'information et à la participation du public" },
            ],
          },
          quiz: [
            {
              q: "Quand la Charte de l'environnement a-t-elle été intégrée à la Constitution ?",
              options: ["En 1958", "En 1971", "En 2005", "En 2015"],
              answer: 2,
              why: "Rédigée en 2004, elle a été intégrée par la loi constitutionnelle du 1er mars 2005.",
            },
            {
              q: "Quel principe s'applique à un risque incertain mais potentiellement grave et irréversible ?",
              options: ["Le principe de précaution", "Le principe de réparation", "Le principe de prévention", "Le principe de neutralité"],
              answer: 0,
              why: "La prévention vise les risques connus ; la précaution vise les risques incertains en l'état des connaissances scientifiques.",
            },
            {
              q: "Quelle valeur le Conseil constitutionnel reconnaît-il à la protection de l'environnement le 31 janvier 2020 ?",
              options: ["Aucune valeur juridique", "Une valeur seulement morale, sans portée juridique", "Une valeur inférieure à celle des décrets", "Un objectif de valeur constitutionnelle"],
              answer: 3,
              why: "Il juge que la protection de l'environnement, patrimoine commun des êtres humains, peut justifier des limites à la liberté d'entreprendre.",
            },
            {
              q: "Que garantit l'article 7 de la Charte ?",
              options: ["Le droit de polluer contre paiement", "Le droit à l'information et à la participation", "L'interdiction de toute activité industrielle en France", "La gratuité de l'énergie"],
              answer: 1,
              why: "Toute personne peut accéder aux informations environnementales détenues par les autorités publiques et participer aux décisions.",
            },
            {
              q: "Quel naufrage a conduit à la reconnaissance du préjudice écologique par la Cour de cassation en 2012 ?",
              options: ["Celui du Titanic", "Celui de l'Amoco Cadiz", "Celui de l'Erika", "Celui du Prestige"],
              answer: 2,
              why: "Après la marée noire de l'Erika (1999), la Cour de cassation a confirmé en 2012 la condamnation de Total et le préjudice écologique.",
            },
          ],
          trap: "Croire que le principe de précaution interdit tout ce qui présente un risque : il impose d'évaluer un risque incertain, grave et irréversible et de prendre des mesures provisoires et proportionnées, pas de bloquer toute innovation.",
          method: "Retenez la Charte en deux colonnes : les droits (article 1er, article 7) et les devoirs (articles 2, 3, 4) ; ajoutez au centre le principe de précaution (article 5), qui s'adresse aux autorités publiques.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'proteger-biodiversite',
          title: "Protéger la biodiversité : responsabilités individuelles et collectives",
          minutes: 30,
          objectives: [
            "Définir la biodiversité et identifier les principales causes de son érosion.",
            "Présenter les politiques de protection de la biodiversité à l'échelle internationale, européenne et nationale.",
            "Distinguer les responsabilités des États, des collectivités, des entreprises et des individus.",
            "Proposer et justifier des formes d'engagement en faveur de la biodiversité.",
          ],
          course: [
            {
              heading: "La biodiversité et son érosion",
              paragraphs: [
                "La biodiversité est la diversité du vivant. Elle s'observe à trois niveaux : la diversité génétique (les différences entre individus d'une même espèce), la diversité des espèces (animaux, plantes, champignons, micro-organismes) et la diversité des écosystèmes (forêts, prairies, zones humides, récifs coralliens). Elle rend des services indispensables aux sociétés humaines : pollinisation des cultures, épuration de l'eau, fertilité des sols, ressources alimentaires et médicinales.",
                "En 2019, la Plateforme intergouvernementale sur la biodiversité et les services écosystémiques (IPBES), souvent présentée comme le « GIEC de la biodiversité », a estimé qu'environ un million d'espèces animales et végétales sont menacées d'extinction. Elle identifie cinq causes principales, par ordre d'importance au niveau mondial : le changement d'usage des terres et des mers (déforestation, artificialisation des sols), l'exploitation directe des êtres vivants (surpêche, braconnage), le changement climatique, les pollutions et les espèces exotiques envahissantes, comme le frelon asiatique arrivé en France au milieu des années 2000.",
              ],
              box: { label: "Définition", text: "La biodiversité est la diversité du vivant à trois niveaux : diversité génétique, diversité des espèces et diversité des écosystèmes, ainsi que les interactions entre eux." },
            },
            {
              heading: "Une responsabilité collective : le rôle des États",
              paragraphs: [
                "La biodiversité ne connaît pas de frontières : sa protection passe par la coopération internationale. La Convention sur le commerce international des espèces menacées (CITES), signée à Washington en 1973, encadre le commerce des espèces protégées. La Convention sur la diversité biologique est adoptée au sommet de la Terre de Rio de Janeiro en 1992. En décembre 2022, la COP15 a adopté le cadre mondial de Kunming-Montréal, qui fixe notamment l'objectif de protéger au moins 30 % des terres et des mers d'ici 2030.",
                "L'Union européenne agit par le réseau Natura 2000, fondé sur les directives Oiseaux (1979) et Habitats (1992), qui protège des sites naturels remarquables tout en y permettant des activités humaines compatibles. En France, la loi du 10 juillet 1976 relative à la protection de la nature pose le principe « éviter, réduire, compenser » les atteintes à l'environnement. La loi du 8 août 2016 pour la reconquête de la biodiversité, de la nature et des paysages inscrit le préjudice écologique dans le Code civil, interdit les insecticides néonicotinoïdes à partir de 2018 et crée une agence devenue en 2020 l'Office français de la biodiversité. La France compte onze parcs nationaux, le premier étant celui de la Vanoise (1963).",
              ],
              box: { label: "Repère", text: "1973 : CITES. 1976 : loi sur la protection de la nature (éviter, réduire, compenser). 1992 : Convention sur la diversité biologique (Rio) et directive Habitats. 2016 : loi pour la reconquête de la biodiversité. 2022 : cadre mondial de Kunming-Montréal (30 % d'espaces protégés d'ici 2030)." },
            },
            {
              heading: "Collectivités, entreprises, citoyens : des responsabilités partagées",
              paragraphs: [
                "Les collectivités territoriales agissent au plus près du terrain : plans locaux d'urbanisme qui limitent l'artificialisation des sols, trames vertes et bleues qui reconnectent les milieux naturels pour permettre aux espèces de circuler, gestion des espaces verts sans pesticides. Les entreprises doivent respecter la séquence « éviter, réduire, compenser » avant un projet d'aménagement et répondre des dommages qu'elles causent.",
                "Les citoyens ont aussi un rôle, comme le rappelle l'article 2 de la Charte de l'environnement, qui fait de la préservation de l'environnement un devoir de toute personne. Ce rôle passe par des choix de consommation (produits de saison, pêche durable), par des gestes concrets (ne pas cueillir d'espèces protégées, ne pas relâcher d'animaux exotiques dans la nature) et par l'engagement : associations de protection de la nature, chantiers de bénévoles, participation à des programmes de sciences participatives comme Vigie-Nature, piloté par le Muséum national d'Histoire naturelle, où chacun peut compter des oiseaux ou des papillons.",
              ],
            },
            {
              heading: "Concilier les intérêts : un débat démocratique",
              paragraphs: [
                "Protéger la biodiversité implique des choix difficiles entre des intérêts légitimes : production agricole, emploi, logement, transports. La réintroduction ou la protection du loup, par exemple, oppose souvent les éleveurs, dont les troupeaux subissent des attaques, et les défenseurs de cette espèce protégée. L'usage de certains pesticides oppose la rentabilité de cultures et la survie des insectes pollinisateurs. Ces arbitrages relèvent du débat démocratique, éclairé par la science.",
                "Le droit fournit des outils de conciliation : participation du public aux décisions (article 7 de la Charte), études d'impact avant les grands projets, recours devant les juges. La responsabilité est à la fois individuelle et collective : les gestes de chacun comptent, mais ils ne suffisent pas sans des politiques publiques ambitieuses, et ces politiques ne réussissent que si les citoyens les comprennent et y participent.",
              ],
              box: { label: "À retenir", text: "La protection de la biodiversité est une responsabilité partagée : États (traités, lois), Union européenne (Natura 2000), collectivités (urbanisme, trames vertes et bleues), entreprises (éviter, réduire, compenser) et citoyens (consommation, gestes, engagement)." },
            },
          ],
          keyPoints: [
            "La biodiversité a trois niveaux : génétique, spécifique (les espèces) et écosystémique.",
            "IPBES (2019) : environ un million d'espèces menacées d'extinction ; cinq causes principales, dont l'usage des terres et l'exploitation directe.",
            "International : CITES (1973), Convention de Rio (1992), cadre de Kunming-Montréal (2022, 30 % d'espaces protégés d'ici 2030).",
            "Europe : réseau Natura 2000 (directives Oiseaux 1979 et Habitats 1992).",
            "France : loi de 1976 (éviter, réduire, compenser), loi biodiversité de 2016, Office français de la biodiversité (2020).",
            "La responsabilité est partagée entre États, collectivités, entreprises et citoyens.",
          ],
          example: {
            statement: "Une commune veut transformer une prairie humide en parking pour un nouveau centre commercial. Montrez quelles responsabilités sont en jeu et quels outils permettent de concilier développement économique et protection de la biodiversité.",
            solution: [
              "Identifier l'enjeu écologique : une prairie humide abrite une biodiversité riche et rend des services (stockage de l'eau, limitation des inondations) ; la transformer en parking, c'est l'artificialiser, première cause d'érosion de la biodiversité selon l'IPBES.",
              "Identifier les intérêts économiques : le centre commercial peut créer des emplois et des services ; ce sont des intérêts légitimes.",
              "Appliquer la séquence « éviter, réduire, compenser » : d'abord chercher à éviter l'atteinte (autre terrain déjà artificialisé, parking à étages), sinon la réduire (parking plus petit, revêtement perméable), et en dernier recours compenser (restaurer une zone humide équivalente).",
              "Mobiliser la participation : l'article 7 de la Charte de l'environnement permet aux habitants d'être informés et de donner leur avis, par exemple lors d'une enquête publique.",
              "Prévoir les recours : des associations peuvent saisir le juge administratif si le projet ne respecte pas le droit de l'environnement.",
              "Conclusion : la responsabilité est partagée entre la commune, l'entreprise et les citoyens ; le droit impose de rechercher d'abord des solutions qui évitent l'atteinte à la biodiversité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque exemple à l'une des cinq causes d'érosion de la biodiversité identifiées par l'IPBES (changement d'usage des terres et des mers, exploitation directe, changement climatique, pollution, espèces exotiques envahissantes) : a) une forêt tropicale est rasée pour planter des palmiers à huile ; b) des stocks de poissons s'effondrent à cause de captures trop nombreuses ; c) des engrais ruissellent dans une rivière et provoquent la prolifération d'algues ; d) le frelon asiatique s'attaque aux abeilles ; e) la hausse de la température de l'eau provoque le blanchissement des coraux.",
              hint: "Pour chaque exemple, demandez-vous si l'on détruit un milieu, si l'on prélève trop, si l'on rejette des substances, si une espèce venue d'ailleurs prolifère ou si le climat change.",
              solution: [
                "a) Changement d'usage des terres : la forêt est transformée en plantation.",
                "b) Exploitation directe : c'est la surpêche.",
                "c) Pollution : les engrais polluent l'eau.",
                "d) Espèce exotique envahissante : le frelon asiatique n'est pas originaire d'Europe.",
                "e) Changement climatique : le réchauffement des océans provoque le blanchissement des coraux.",
              ],
            },
            {
              level: 2,
              statement: "Classez les actions suivantes selon l'acteur qui les mène (État ou Union européenne, collectivité territoriale, entreprise, citoyen), puis dites laquelle vous paraît avoir l'effet le plus large et pourquoi : a) participer à un comptage d'oiseaux de Vigie-Nature ; b) créer une trame verte qui relie deux bois par des haies ; c) adopter une loi interdisant certains insecticides ; d) restaurer une zone humide pour compenser un aménagement.",
              hint: "Identifiez qui a le pouvoir de prendre chaque décision. Pour l'effet le plus large, pensez au territoire et au nombre de personnes concernées.",
              solution: [
                "a) Citoyen : la participation à un programme de sciences participatives aide les chercheurs à suivre l'état de la biodiversité.",
                "b) Collectivité territoriale : la trame verte relève des politiques locales d'aménagement.",
                "c) État : seul le législateur peut interdire une substance sur tout le territoire (comme les néonicotinoïdes en 2018).",
                "d) Entreprise : c'est l'étape « compenser » de la séquence éviter, réduire, compenser.",
                "Effet le plus large : la loi (c), car elle s'impose à tous sur l'ensemble du territoire ; mais elle ne fonctionne bien que si les autres acteurs agissent aussi, ce qui montre que la responsabilité est partagée.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « La protection de la biodiversité est-elle avant tout une affaire de gestes individuels ? » Vous montrerez l'importance des comportements individuels, puis le rôle indispensable des politiques collectives, en vous appuyant sur des exemples précis.",
              hint: "Partez de l'article 2 de la Charte et des gestes de chacun, puis montrez que les causes principales de l'érosion (usage des terres, surpêche, climat) appellent des règles collectives.",
              solution: [
                "Introduction : face à l'érosion de la biodiversité, on insiste souvent sur les gestes de chacun ; il faut se demander s'ils suffisent.",
                "Les gestes individuels comptent : l'article 2 de la Charte de l'environnement fait de la préservation de l'environnement un devoir de toute personne. Consommer des produits de saison, choisir une pêche durable, ne pas relâcher d'animaux exotiques, s'engager dans une association ou dans les sciences participatives sont des actions utiles.",
                "Mais ils ne suffisent pas : les principales causes identifiées par l'IPBES, comme le changement d'usage des terres ou la surpêche, dépendent de choix économiques et politiques qui dépassent l'individu.",
                "Le rôle des politiques collectives : traités internationaux (CITES, Convention de Rio, cadre de Kunming-Montréal), réseau européen Natura 2000, lois françaises (1976, 2016), action des collectivités (trames vertes et bleues) et obligations des entreprises (éviter, réduire, compenser).",
                "Articulation : les politiques publiques n'ont de sens que si les citoyens les comprennent et y participent (article 7 de la Charte, débat démocratique), et les gestes individuels sont plus efficaces dans un cadre collectif.",
                "Conclusion : la protection de la biodiversité n'est pas seulement une affaire de gestes individuels ; elle repose sur une responsabilité partagée, où l'engagement des citoyens soutient et accompagne des politiques collectives ambitieuses.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la biodiversité et sa protection.",
            statements: [
              { text: "La biodiversité désigne seulement le nombre d'espèces animales sur Terre.", true: false, why: "Elle inclut aussi la diversité génétique, les plantes, champignons et micro-organismes, et la diversité des écosystèmes." },
              { text: "Selon l'IPBES (2019), environ un million d'espèces sont menacées d'extinction.", true: true, why: "C'est l'estimation de son rapport mondial d'évaluation publié en 2019." },
              { text: "Le changement climatique est la seule cause de l'érosion de la biodiversité.", true: false, why: "L'IPBES identifie cinq causes ; au niveau mondial, le changement d'usage des terres et des mers est la première." },
              { text: "La séquence « éviter, réduire, compenser » commence par la compensation.", true: false, why: "Il faut d'abord éviter l'atteinte, puis la réduire ; la compensation n'intervient qu'en dernier recours." },
              { text: "Le réseau Natura 2000 est une politique de l'Union européenne.", true: true, why: "Il repose sur les directives Oiseaux (1979) et Habitats (1992)." },
              { text: "Un citoyen peut contribuer à la recherche sur la biodiversité.", true: true, why: "Les programmes de sciences participatives, comme Vigie-Nature, s'appuient sur les observations des citoyens." },
              { text: "Relâcher une tortue exotique de compagnie dans un étang aide la biodiversité.", true: false, why: "Une espèce exotique peut devenir envahissante et menacer les espèces locales." },
            ],
          },
          quiz: [
            {
              q: "Quels sont les trois niveaux de la biodiversité ?",
              options: ["Génétique, espèces, écosystèmes", "Animal, végétal, minéral et microbien", "Local, national, mondial", "Terrestre, marin, aérien"],
              answer: 0,
              why: "La biodiversité comprend la diversité génétique, la diversité des espèces et la diversité des écosystèmes.",
            },
            {
              q: "Quel objectif fixe le cadre mondial de Kunming-Montréal (2022) ?",
              options: ["Interdire toute pêche commerciale dans les océans d'ici 2030", "Planter un milliard d'arbres en France", "Protéger au moins 30 % des terres et des mers d'ici 2030", "Supprimer tous les parcs nationaux"],
              answer: 2,
              why: "Adopté lors de la COP15 en décembre 2022, il fixe notamment cet objectif de 30 % d'espaces protégés d'ici 2030.",
            },
            {
              q: "Quelle est, au niveau mondial, la première cause d'érosion de la biodiversité selon l'IPBES ?",
              options: ["Les espèces exotiques envahissantes", "Le changement d'usage des terres et des mers", "Les pollutions lumineuses et sonores des villes", "Le tourisme spatial"],
              answer: 1,
              why: "La déforestation, l'artificialisation des sols et la transformation des milieux marins viennent en tête des causes.",
            },
            {
              q: "Quel est le premier parc national créé en France ?",
              options: ["Le parc des Cévennes", "Le parc des Calanques", "Le parc des Écrins", "Le parc de la Vanoise"],
              answer: 3,
              why: "Le parc national de la Vanoise, en Savoie, a été créé en 1963, après la loi de 1960 sur les parcs nationaux.",
            },
            {
              q: "Quelle loi française a inscrit le préjudice écologique dans le Code civil ?",
              options: ["La loi du 9 décembre 1905", "La loi du 10 juillet 1976", "La loi du 8 août 2016", "La loi du 29 juillet 1881"],
              answer: 2,
              why: "La loi pour la reconquête de la biodiversité, de la nature et des paysages a consacré le préjudice écologique.",
            },
          ],
          trap: "Réduire la protection de la biodiversité aux seuls gestes individuels, ou au contraire aux seules lois : la responsabilité est partagée, et les causes principales (usage des terres, surpêche) appellent des décisions collectives.",
          method: "Pour un sujet de réflexion, construisez un tableau à quatre lignes (États et Union européenne, collectivités, entreprises, citoyens) et notez pour chacune un outil précis et un exemple : votre développement sera concret et équilibré.",
        },
      ],
    },
    /* ==================================================================== */
    /* ÉGALITÉ ET FRATERNITÉ, FONDEMENTS D'UNE SOCIÉTÉ DÉMOCRATIQUE         */
    /* ==================================================================== */
    {
      id: 'egalite-fraternite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'egalite-discriminations',
          title: "L'égalité devant la loi et la lutte contre les discriminations",
          minutes: 30,
          objectives: [
            "Expliquer le principe d'égalité devant la loi et ses fondements juridiques.",
            "Distinguer égalité en droit, égalité réelle et égalité des chances.",
            "Définir une discrimination, directe ou indirecte, et identifier les critères interdits par la loi.",
            "Identifier les moyens de lutter contre les discriminations et de faire valoir ses droits.",
          ],
          course: [
            {
              heading: "L'égalité, un principe républicain",
              paragraphs: [
                "L'article 1er de la DDHC (1789) proclame que les hommes naissent et demeurent libres et égaux en droits, et que les distinctions sociales ne peuvent être fondées que sur l'utilité commune. L'article 6 précise que la loi doit être la même pour tous, soit qu'elle protège, soit qu'elle punisse, et que tous les citoyens sont également admissibles aux emplois publics selon leur capacité. C'est la fin des privilèges de naissance de l'Ancien Régime.",
                "L'article 1er de la Constitution de 1958 dispose que la République assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Le Préambule de 1946 ajoute que la loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. Le principe d'égalité n'interdit pas toute différence de traitement : selon le Conseil constitutionnel, la loi peut traiter différemment des situations différentes, ou déroger à l'égalité pour des raisons d'intérêt général, à condition que la différence soit en rapport avec l'objet de la loi.",
              ],
              box: { label: "Définition", text: "L'égalité devant la loi signifie que la loi s'applique de la même manière à tous, sans privilège ni discrimination. Elle n'interdit pas de traiter différemment des situations objectivement différentes, si cette différence est justifiée par l'objet de la loi." },
            },
            {
              heading: "De l'égalité en droit à l'égalité réelle : une conquête progressive",
              paragraphs: [
                "L'égalité proclamée en 1789 a mis longtemps à s'appliquer à tous. L'esclavage, aboli en 1794 puis rétabli par Bonaparte en 1802, n'est définitivement aboli dans les colonies françaises que par le décret du 27 avril 1848, préparé par Victor Schœlcher. Le suffrage universel masculin est établi la même année, mais les femmes n'obtiennent le droit de vote et d'éligibilité que par l'ordonnance du 21 avril 1944 et votent pour la première fois le 29 avril 1945.",
                "Même quand les droits sont égaux sur le papier, des inégalités de fait persistent : écarts de salaire entre femmes et hommes, difficultés d'accès à l'emploi pour les personnes handicapées, inégalités scolaires selon le milieu social. On distingue donc l'égalité en droit (les mêmes règles pour tous), l'égalité des chances (permettre à chacun de réussir selon ses capacités) et l'égalité réelle (réduire les écarts effectifs). La loi prévoit donc des mesures correctrices : éducation prioritaire depuis 1981, obligation pour les entreprises d'au moins vingt salariés d'employer 6 % de travailleurs handicapés (loi de 1987), parité inscrite dans la Constitution en 1999, qui oblige notamment les partis à présenter autant de femmes que d'hommes à de nombreuses élections (loi du 6 juin 2000).",
              ],
              box: { label: "Repère", text: "1789 : DDHC, articles 1er et 6. 1848 : abolition définitive de l'esclavage. 1944 : droit de vote des femmes. 1946 : égalité femmes-hommes dans le Préambule. 1999 : révision constitutionnelle sur la parité. 2005 : loi sur le handicap." },
            },
            {
              heading: "Qu'est-ce qu'une discrimination ?",
              paragraphs: [
                "Une discrimination est une différence de traitement défavorable, fondée sur un critère interdit par la loi, dans un domaine prévu par la loi. L'article 225-1 du Code pénal énumère plus de vingt-cinq critères, notamment : l'origine, le sexe, la situation de famille, la grossesse, l'apparence physique, le patronyme, le lieu de résidence, l'état de santé, le handicap, l'orientation sexuelle, l'identité de genre, l'âge, les opinions politiques, les activités syndicales, l'appartenance ou la non-appartenance, vraie ou supposée, à une ethnie, une nation, une prétendue race ou une religion déterminée.",
                "La discrimination est directe lorsqu'une personne est traitée moins favorablement à cause d'un de ces critères : refuser de louer un appartement à quelqu'un en raison de son nom. Elle est indirecte lorsqu'une règle apparemment neutre désavantage particulièrement les personnes ayant une caractéristique, sans justification objective : exiger une taille minimale sans lien avec le poste, ce qui écarte davantage de femmes. Le Code pénal punit la discrimination commise dans certains domaines (refus de fournir un bien ou un service, refus d'embauche, sanction ou licenciement, refus de stage) de trois ans d'emprisonnement et de 45 000 euros d'amende.",
              ],
              box: { label: "Règle", text: "Discrimination : traitement défavorable fondé sur un critère interdit (plus de 25 critères, article 225-1 du Code pénal), dans un domaine prévu par la loi (emploi, logement, accès à un bien ou à un service). Peine : jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende." },
            },
            {
              heading: "Lutter contre les discriminations",
              paragraphs: [
                "La victime d'une discrimination peut porter plainte auprès de la police, de la gendarmerie ou du procureur de la République, ou saisir le conseil de prud'hommes s'il s'agit d'un emploi. Elle peut aussi saisir gratuitement le Défenseur des droits, autorité constitutionnelle indépendante qui a succédé en 2011 à la Haute Autorité de lutte contre les discriminations et pour l'égalité (HALDE) : il peut enquêter, proposer une médiation et présenter des observations devant les tribunaux.",
                "La preuve est souvent difficile à apporter. Le test de situation (testing), qui consiste à comparer le traitement réservé à deux candidatures identiques sauf sur un critère (le nom, l'adresse), est admis comme preuve devant le juge pénal. Au-delà du droit, la lutte contre les discriminations passe par l'éducation, la connaissance des stéréotypes et des préjugés qui les nourrissent, et la vigilance de chacun : un témoin peut soutenir la victime et signaler les faits.",
              ],
            },
          ],
          keyPoints: [
            "DDHC, article 1er : les hommes naissent et demeurent libres et égaux en droits ; article 6 : la loi est la même pour tous.",
            "Constitution, article 1er : égalité devant la loi sans distinction d'origine, de race ou de religion.",
            "On distingue égalité en droit, égalité des chances et égalité réelle ; la loi prévoit des mesures correctrices (éducation prioritaire, parité, handicap).",
            "Discrimination : traitement défavorable fondé sur un critère interdit (plus de 25 critères, article 225-1 du Code pénal).",
            "Discrimination directe (à cause du critère) ou indirecte (règle neutre en apparence qui désavantage un groupe).",
            "Recours : plainte, conseil de prud'hommes, Défenseur des droits ; le testing est admis comme preuve.",
          ],
          example: {
            statement: "Deux candidats aux profils identiques (mêmes diplômes, même expérience) postulent par écrit à un emploi de vendeur. Celui qui porte un nom à consonance étrangère n'est jamais rappelé, l'autre est convoqué à un entretien. S'agit-il d'une discrimination ? Que peut faire le candidat écarté ?",
            solution: [
              "Rappeler la définition : une discrimination est un traitement défavorable fondé sur un critère interdit par la loi, dans un domaine prévu par la loi.",
              "Identifier le critère : la seule différence entre les candidatures est le nom ; le patronyme et l'origine, vraie ou supposée, font partie des critères de l'article 225-1 du Code pénal.",
              "Identifier le domaine : il s'agit d'un refus d'embauche, domaine expressément visé par le Code pénal.",
              "Qualifier : la différence de traitement est directe, car elle repose sur le critère lui-même ; elle constitue une discrimination si elle est établie.",
              "Prouver : la comparaison de deux candidatures identiques sauf sur le nom correspond à la logique du test de situation (testing), admis comme preuve.",
              "Agir : le candidat peut porter plainte, saisir gratuitement le Défenseur des droits ou se faire aider par une association.",
              "Conclusion : il s'agit vraisemblablement d'une discrimination à l'embauche, punie de trois ans d'emprisonnement et de 45 000 euros d'amende.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit d'une discrimination au sens de la loi et justifiez : a) un club de sport refuse l'inscription d'un adolescent en fauteuil roulant à une activité adaptée qu'il propose, au seul motif de son handicap ; b) un employeur refuse un candidat qui n'a pas le diplôme exigé par la loi pour exercer le métier ; c) un propriétaire refuse de louer son appartement à une femme parce qu'elle est enceinte ; d) un lycée réserve une salle d'étude aux élèves de terminale pendant les épreuves du bac.",
              hint: "Cherchez à chaque fois s'il y a un critère interdit par la loi, ou au contraire une justification objective liée à la situation.",
              solution: [
                "a) Discrimination : le refus repose sur le handicap, critère interdit, dans l'accès à un service.",
                "b) Pas de discrimination : le refus repose sur une exigence légale objective (le diplôme), pas sur un critère interdit.",
                "c) Discrimination : la grossesse est un critère interdit, et le logement est un domaine protégé (refus de fournir un bien ou un service).",
                "d) Pas de discrimination : la différence est justifiée par une situation objectivement différente (le passage d'un examen) et n'est pas fondée sur un critère interdit.",
                "Résultat : a et c sont des discriminations ; b et d n'en sont pas.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise de transport exige, pour un poste d'agent d'accueil au guichet, que les candidats mesurent au moins 1,80 m. Aucune explication n'est donnée. Expliquez pourquoi cette exigence peut constituer une discrimination indirecte et ce que l'entreprise devrait faire.",
              hint: "Demandez-vous qui est le plus souvent écarté par ce critère apparemment neutre, et si la taille a un lien réel avec le poste.",
              solution: [
                "Rappel : une discrimination indirecte est une règle apparemment neutre qui désavantage particulièrement les personnes ayant une caractéristique protégée, sans justification objective.",
                "Analyse du critère : la taille minimale ne vise pas un sexe en particulier, mais elle écarte en pratique une proportion beaucoup plus grande de femmes que d'hommes.",
                "Recherche d'une justification : pour un poste d'accueil au guichet, la taille n'a aucun lien avec les compétences requises (accueil, information, vente).",
                "Qualification : l'exigence, injustifiée et défavorable surtout aux femmes, peut constituer une discrimination indirecte fondée sur le sexe.",
                "Solution : l'entreprise doit supprimer ce critère et ne retenir que des exigences liées au poste (qualités relationnelles, connaissance du réseau, langues).",
              ],
            },
            {
              level: 3,
              statement: "Développement construit : « L'égalité devant la loi suffit-elle à garantir l'égalité entre les citoyens ? » Vous vous appuierez sur l'histoire de l'égalité, sur la distinction entre égalité en droit et égalité réelle, et sur la lutte contre les discriminations.",
              hint: "Montrez d'abord ce que l'égalité en droit a apporté, puis ses limites (inégalités de fait, discriminations), enfin les outils qui cherchent à s'en rapprocher.",
              solution: [
                "Introduction : la République proclame l'égalité devant la loi depuis 1789 ; on peut se demander si cette égalité juridique suffit à rendre les citoyens réellement égaux.",
                "Un acquis fondamental : l'article 1er de la DDHC abolit les privilèges de naissance ; l'article 6 fait de la loi la même pour tous. La Constitution de 1958 interdit toute distinction d'origine, de race ou de religion.",
                "Une égalité longtemps incomplète : l'esclavage n'est définitivement aboli qu'en 1848, et les femmes ne votent qu'à partir de 1944-1945 ; l'égalité proclamée ne s'est appliquée que progressivement.",
                "Des inégalités de fait persistantes : écarts de salaire, difficultés des personnes handicapées, discriminations à l'embauche ou au logement que révèlent les tests de situation.",
                "Des outils pour l'égalité réelle : la loi punit les discriminations (article 225-1 du Code pénal), le Défenseur des droits accompagne les victimes, et des mesures correctrices existent (parité depuis 1999, obligation d'emploi des travailleurs handicapés, éducation prioritaire).",
                "Conclusion : l'égalité devant la loi est nécessaire mais ne suffit pas ; elle doit être complétée par la lutte contre les discriminations et par des politiques qui réduisent les inégalités réelles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la conquête de l'égalité.",
            items: [
              "La DDHC proclame que les hommes naissent et demeurent libres et égaux en droits (1789).",
              "L'esclavage est définitivement aboli dans les colonies françaises (1848).",
              "Les femmes obtiennent le droit de vote (1944).",
              "Le Préambule de la Constitution garantit l'égalité des droits entre femmes et hommes (1946).",
              "Une révision constitutionnelle introduit la parité (1999).",
              "Le Défenseur des droits succède à la HALDE (2011).",
            ],
          },
          quiz: [
            {
              q: "Quel article de la DDHC précise que la loi doit être la même pour tous ?",
              options: ["L'article 2", "L'article 11", "L'article 16", "L'article 6"],
              answer: 3,
              why: "L'article 6 dispose que la loi doit être la même pour tous, soit qu'elle protège, soit qu'elle punisse.",
            },
            {
              q: "En quelle année l'esclavage est-il définitivement aboli dans les colonies françaises ?",
              options: ["1848", "1789", "1802", "1905"],
              answer: 0,
              why: "Aboli en 1794, rétabli en 1802, l'esclavage est définitivement aboli par le décret du 27 avril 1848.",
            },
            {
              q: "Qu'est-ce qu'une discrimination indirecte ?",
              options: ["Une insulte prononcée en public", "Un refus fondé ouvertement sur l'origine", "Une règle neutre en apparence qui désavantage un groupe", "Une différence de traitement justifiée par un diplôme exigé par la loi"],
              answer: 2,
              why: "La discrimination indirecte résulte d'une règle apparemment neutre dont les effets désavantagent particulièrement certaines personnes.",
            },
            {
              q: "Quelle autorité indépendante peut-on saisir gratuitement en cas de discrimination ?",
              options: ["Le Conseil constitutionnel", "Le Défenseur des droits", "L'Arcom", "Le Sénat"],
              answer: 1,
              why: "Le Défenseur des droits, qui a succédé à la HALDE en 2011, peut enquêter et accompagner les victimes.",
            },
            {
              q: "Quelle peine maximale le Code pénal prévoit-il pour une discrimination, hors circonstance aggravante ?",
              options: ["Un simple avertissement", "Trois ans d'emprisonnement et 45 000 euros d'amende", "Dix ans de réclusion criminelle et une interdiction de séjour", "Une amende de 100 euros au plus"],
              answer: 1,
              why: "L'article 225-2 du Code pénal prévoit trois ans d'emprisonnement et 45 000 euros d'amende.",
            },
          ],
          trap: "Croire que toute différence de traitement est une discrimination : il n'y a discrimination que si le traitement défavorable repose sur un critère interdit par la loi, sans justification objective ; traiter différemment des situations différentes peut être légitime.",
          method: "Face à un cas, vérifiez trois éléments dans l'ordre : y a-t-il un traitement défavorable ? repose-t-il sur un critère de l'article 225-1 du Code pénal ? existe-t-il une justification objective liée à la situation ? Concluez ensuite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fraternite-solidarite',
          title: "La fraternité : solidarité et engagement",
          minutes: 30,
          objectives: [
            "Définir la fraternité et expliquer sa place dans la devise républicaine.",
            "Expliquer comment la solidarité nationale traduit la fraternité dans le droit.",
            "Identifier les formes d'engagement citoyen accessibles aux jeunes.",
            "Argumenter sur le lien entre liberté, égalité et fraternité.",
          ],
          course: [
            {
              heading: "La fraternité, troisième terme de la devise",
              paragraphs: [
                "La fraternité est le sentiment et le devoir de solidarité qui unit les membres d'une même communauté politique, au-delà de leurs différences : chacun reconnaît en l'autre un égal, avec qui il partage un destin commun. La devise « Liberté, Égalité, Fraternité » naît pendant la Révolution française ; elle est inscrite dans la Constitution de 1848, adoptée officiellement sous la Troisième République, qui la fait graver sur les frontons des édifices publics à partir de 1880. L'article 2 de la Constitution de 1958 en fait la devise de la République.",
                "La fraternité relie les deux autres valeurs. La liberté sans fraternité peut devenir la loi du plus fort ; l'égalité sans fraternité peut rester abstraite. La fraternité rappelle que chacun a une responsabilité envers les autres. L'article 1er de la Déclaration universelle des droits de l'homme (1948) va dans le même sens : tous les êtres humains naissent libres et égaux en dignité et en droits, et doivent agir les uns envers les autres dans un esprit de fraternité.",
              ],
              box: { label: "Définition", text: "La fraternité est le lien de solidarité qui unit les citoyens et, plus largement, les êtres humains : elle conduit chacun à reconnaître l'autre comme un égal et à agir en faveur de ceux qui en ont besoin." },
            },
            {
              heading: "Un principe à valeur constitutionnelle",
              paragraphs: [
                "Longtemps considérée comme une valeur morale, la fraternité a reçu une portée juridique précise. Le 6 juillet 2018, le Conseil constitutionnel, saisi par la voie de la QPC par des personnes poursuivies pour avoir aidé des migrants, a jugé que la fraternité est un principe à valeur constitutionnelle. Il en découle la liberté d'aider autrui, dans un but humanitaire, sans considération de la régularité de son séjour sur le territoire national. Le législateur doit concilier ce principe avec la lutte contre l'immigration irrégulière, qui relève de l'ordre public : l'aide à l'entrée irrégulière reste punie, mais l'aide humanitaire désintéressée au séjour ou à la circulation ne peut plus l'être.",
                "Le droit pénal traduit aussi un devoir minimal de fraternité : l'article 223-6 du Code pénal punit la non-assistance à personne en danger, c'est-à-dire le fait de s'abstenir de porter secours à une personne en péril alors qu'on pouvait le faire sans risque pour soi ou pour les tiers, par une action personnelle ou en appelant les secours. La peine peut aller jusqu'à cinq ans d'emprisonnement et 75 000 euros d'amende.",
              ],
              box: { label: "Repère", text: "1848 : la devise dans la Constitution de la Deuxième République. 1880 : inscription sur les frontons des édifices publics. 1958 : article 2 de la Constitution. 6 juillet 2018 : le Conseil constitutionnel fait de la fraternité un principe à valeur constitutionnelle." },
            },
            {
              heading: "La solidarité nationale, traduction de la fraternité",
              paragraphs: [
                "À la fin du XIXe siècle, l'homme politique Léon Bourgeois, futur prix Nobel de la paix, développe dans Solidarité (1896) l'idée que chaque individu doit beaucoup à la société et contracte ainsi une dette envers les autres. Cette pensée, le solidarisme, inspire les premières lois sociales. Après la Seconde Guerre mondiale, le Préambule de 1946 garantit à tous la protection de la santé, la sécurité matérielle, le repos et les loisirs, et reconnaît à toute personne incapable de travailler le droit d'obtenir de la collectivité des moyens convenables d'existence.",
                "La Sécurité sociale, créée par les ordonnances d'octobre 1945, organise cette solidarité : chacun cotise selon ses moyens et reçoit selon ses besoins en cas de maladie, de vieillesse, d'accident du travail ou pour élever ses enfants. L'impôt progressif applique l'article 13 de la DDHC, selon lequel la contribution commune doit être répartie entre tous les citoyens en raison de leurs facultés. Des minima sociaux, comme le revenu de solidarité active (RSA), créé en 2009, assurent un revenu aux personnes les plus démunies. La solidarité est donc une fraternité organisée par la loi.",
              ],
              box: { label: "À retenir", text: "La solidarité nationale est la fraternité organisée par la loi : Sécurité sociale (1945), impôt réparti selon les facultés de chacun (DDHC, article 13), minima sociaux comme le RSA (2009)." },
            },
            {
              heading: "S'engager : la fraternité en actes",
              paragraphs: [
                "La fraternité ne dépend pas seulement de l'État : elle se vit aussi par l'engagement des citoyens. L'engagement associatif repose sur la loi de 1901 : on peut, dès le lycée, être bénévole dans une association d'aide aux devoirs, de soutien aux personnes âgées, de protection de l'environnement ou d'action humanitaire. Au lycée, être élu délégué de classe ou membre du conseil des délégués pour la vie lycéenne, c'est s'engager au service des autres élèves.",
                "D'autres formes d'engagement existent. Le service civique, créé par la loi du 10 mars 2010, permet aux jeunes de 16 à 25 ans (30 ans pour les jeunes en situation de handicap) de réaliser une mission d'intérêt général indemnisée de six à douze mois. On peut aussi devenir sapeur-pompier volontaire, dès 16 ans, donner son sang à partir de 18 ans, ou rejoindre la réserve civique. Chaque jeune participe par ailleurs à la journée défense et citoyenneté, après son recensement à 16 ans. Ces engagements montrent que la fraternité est à la fois une valeur et une pratique.",
              ],
            },
          ],
          keyPoints: [
            "Liberté, Égalité, Fraternité : devise née sous la Révolution, inscrite dans la Constitution de 1848, devise de la République (article 2 de la Constitution de 1958).",
            "Le 6 juillet 2018, le Conseil constitutionnel fait de la fraternité un principe à valeur constitutionnelle : liberté d'aider autrui dans un but humanitaire.",
            "Non-assistance à personne en danger (article 223-6 du Code pénal) : un devoir minimal de secours.",
            "Solidarité nationale : Sécurité sociale (1945), impôt selon les facultés (DDHC, article 13), minima sociaux (RSA, 2009).",
            "Engagement : associations (loi de 1901), délégués, service civique (16-25 ans, 2010), sapeurs-pompiers volontaires, don du sang.",
          ],
          example: {
            statement: "Un élève affirme : « La fraternité, c'est une belle idée, mais ce n'est pas du droit : personne n'est obligé d'être fraternel. » Discutez cette affirmation en vous appuyant sur des exemples précis.",
            solution: [
              "Reconnaître la part de vérité : la fraternité est d'abord une valeur morale, un sentiment de solidarité que la loi ne peut pas imposer dans les cœurs ; l'engagement bénévole reste un choix libre.",
              "Montrer sa traduction juridique : la fraternité figure dans la devise de la République (article 2 de la Constitution) ; depuis le 6 juillet 2018, c'est un principe à valeur constitutionnelle, dont découle la liberté d'aider autrui dans un but humanitaire.",
              "Citer une obligation précise : l'article 223-6 du Code pénal punit la non-assistance à personne en danger ; chacun doit porter secours, ou appeler les secours, s'il peut le faire sans risque.",
              "Montrer la solidarité organisée : chacun participe, par ses cotisations et ses impôts, à la Sécurité sociale et aux minima sociaux ; c'est une fraternité rendue obligatoire par la loi.",
              "Nuancer : le droit fixe un minimum, mais la fraternité vivante passe aussi par l'engagement volontaire (associations, service civique, délégués).",
              "Conclusion : l'affirmation est inexacte ; la fraternité est à la fois une valeur morale et un principe juridique qui produit des obligations concrètes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 1848, 1880, 1945, 2010, 2018. Événements : a) les ordonnances créant la Sécurité sociale ; b) la devise est gravée sur les frontons des édifices publics ; c) le Conseil constitutionnel reconnaît la valeur constitutionnelle de la fraternité ; d) la devise est inscrite dans la Constitution de la Deuxième République ; e) la création du service civique.",
              hint: "Repérez d'abord les deux dates du XIXe siècle, puis la date de la Libération, enfin les deux dates récentes.",
              solution: [
                "1848 : d) la devise est inscrite dans la Constitution de la Deuxième République.",
                "1880 : b) la Troisième République fait graver la devise sur les frontons des édifices publics.",
                "1945 : a) les ordonnances d'octobre 1945 créent la Sécurité sociale.",
                "2010 : e) la loi du 10 mars 2010 crée le service civique.",
                "2018 : c) le 6 juillet 2018, le Conseil constitutionnel reconnaît le principe de fraternité.",
              ],
            },
            {
              level: 2,
              statement: "Classez les situations suivantes selon qu'elles relèvent de la solidarité organisée par la loi (obligatoire) ou de l'engagement volontaire, puis expliquez en quoi chacune exprime la fraternité : a) un salarié cotise à l'assurance maladie ; b) une lycéenne donne une heure par semaine à une association d'aide aux devoirs ; c) une personne sans ressources perçoit le RSA ; d) un jeune de 17 ans devient sapeur-pompier volontaire.",
              hint: "Demandez-vous si la personne a le choix d'agir ou non, puis dites qui bénéficie de l'action.",
              solution: [
                "a) Solidarité organisée : la cotisation est obligatoire ; elle permet de soigner ceux qui tombent malades, selon leurs besoins.",
                "b) Engagement volontaire : la lycéenne choisit d'aider d'autres élèves ; c'est une fraternité vécue au quotidien.",
                "c) Solidarité organisée : le RSA, financé par la collectivité, garantit des moyens d'existence aux plus démunis, comme le prévoit le Préambule de 1946.",
                "d) Engagement volontaire : le jeune choisit de consacrer du temps à secourir les autres.",
                "Bilan : a et c relèvent de la solidarité organisée par la loi, b et d de l'engagement volontaire ; toutes expriment l'idée que chacun a une responsabilité envers les autres.",
              ],
            },
            {
              level: 3,
              statement: "Document (rédigé pour l'exercice) : « Un agriculteur est poursuivi pour avoir hébergé et transporté gratuitement des personnes étrangères en situation irrégulière, dans un but humanitaire. Il invoque le principe de fraternité. » En vous appuyant sur la décision du Conseil constitutionnel du 6 juillet 2018, expliquez comment le droit concilie la fraternité et l'ordre public.",
              hint: "Présentez les deux exigences en présence, ce que le Conseil a déduit de la fraternité, puis la limite qu'il a maintenue.",
              solution: [
                "Les exigences en présence : d'un côté, la fraternité, inscrite dans la devise de la République (article 2 de la Constitution) ; de l'autre, la lutte contre l'immigration irrégulière, qui relève de la sauvegarde de l'ordre public.",
                "La décision : saisi par la voie de la QPC, le Conseil constitutionnel a jugé le 6 juillet 2018 que la fraternité est un principe à valeur constitutionnelle, dont découle la liberté d'aider autrui, dans un but humanitaire, sans considération de la régularité de son séjour.",
                "La conciliation : le Conseil a jugé que l'aide à l'entrée irrégulière sur le territoire peut rester punie, car elle fait naître une situation illicite ; en revanche, l'aide humanitaire désintéressée au séjour et à la circulation ne peut pas être sanctionnée.",
                "Application : héberger et transporter gratuitement des personnes déjà présentes sur le territoire, dans un but humanitaire, relève de la liberté d'aider autrui ; le juge doit en tenir compte.",
                "Portée : le Parlement a modifié la loi en septembre 2018 pour élargir l'exemption de poursuites pour l'aide humanitaire.",
                "Conclusion : le droit ne fait pas disparaître l'ordre public, mais la fraternité impose désormais une limite au pouvoir de punir : on ne peut pas sanctionner l'aide désintéressée apportée à une personne en détresse.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion ou repère à sa signification.",
            pairs: [
              { left: "Article 2 de la Constitution", right: "Fait de « Liberté, Égalité, Fraternité » la devise de la République" },
              { left: "Décision du 6 juillet 2018", right: "Liberté d'aider autrui dans un but humanitaire" },
              { left: "Article 223-6 du Code pénal", right: "Punit la non-assistance à personne en danger" },
              { left: "Léon Bourgeois", right: "Théoricien du solidarisme" },
              { left: "Ordonnances d'octobre 1945", right: "Création de la Sécurité sociale" },
              { left: "Service civique", right: "Mission d'intérêt général pour les 16-25 ans" },
            ],
          },
          quiz: [
            {
              q: "Quel article de la Constitution de 1958 fait de « Liberté, Égalité, Fraternité » la devise de la République ?",
              options: ["L'article 2", "L'article 1er", "L'article 16", "L'article 66"],
              answer: 0,
              why: "L'article 2 fixe la langue, l'emblème, l'hymne, la devise et le principe de la République.",
            },
            {
              q: "Que reconnaît le Conseil constitutionnel le 6 juillet 2018 ?",
              options: ["L'obligation pour chacun d'adhérer à une association", "La suppression de la Sécurité sociale", "Le droit d'entrer en France sans aucun contrôle aux frontières", "La valeur constitutionnelle du principe de fraternité"],
              answer: 3,
              why: "Il en déduit la liberté d'aider autrui dans un but humanitaire, sans considération de la régularité de son séjour.",
            },
            {
              q: "Quel homme politique a théorisé le solidarisme à la fin du XIXe siècle ?",
              options: ["Jules Ferry", "Léon Bourgeois", "Aristide Briand", "Victor Schœlcher"],
              answer: 1,
              why: "Dans Solidarité (1896), Léon Bourgeois explique que chacun a une dette envers la société.",
            },
            {
              q: "À quel âge peut-on commencer un service civique ?",
              options: ["Dès 16 ans", "Dès 12 ans", "Seulement après 30 ans", "Seulement à la retraite"],
              answer: 0,
              why: "Le service civique est ouvert aux jeunes de 16 à 25 ans, et jusqu'à 30 ans pour les jeunes en situation de handicap.",
            },
            {
              q: "Selon l'article 13 de la DDHC, comment la contribution commune doit-elle être répartie ?",
              options: ["De manière identique pour chacun", "Selon l'âge des citoyens", "Selon le lieu de naissance", "En raison des facultés de chacun"],
              answer: 3,
              why: "La contribution est répartie selon les capacités de chacun : c'est un fondement de l'impôt et de la solidarité nationale.",
            },
          ],
          trap: "Réduire la fraternité à un simple sentiment sans portée juridique : elle est inscrite dans la Constitution, reconnue comme principe à valeur constitutionnelle depuis 2018 et traduite dans la loi par la solidarité nationale.",
          method: "Pour un sujet sur la fraternité, organisez vos exemples en trois niveaux : le principe (devise, décision de 2018), la solidarité organisée par la loi (Sécurité sociale, impôt, RSA) et l'engagement volontaire (associations, service civique, délégués).",
        },
      ],
    },
  ],
}
