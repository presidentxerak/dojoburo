import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'emc-1re',
  chapters: [
    /* ==================================================================== */
    /* LES VALEURS ET LES PRINCIPES DE LA RÉPUBLIQUE                         */
    /* ==================================================================== */
    {
      id: 'valeurs-republique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'valeurs-principes',
          title: 'Liberté, égalité, fraternité, laïcité : les principes communs',
          minutes: 30,
          objectives: [
            "Identifier les valeurs et les principes de la République dans les textes qui les fondent (DDHC, Préambule de 1946, Constitution de 1958).",
            "Définir la liberté, l'égalité, la fraternité et la laïcité avec un vocabulaire juridique précis.",
            "Expliquer comment ces principes communs permettent à une société diverse de vivre ensemble.",
            "Mobiliser ces principes pour analyser une situation concrète de la vie sociale.",
          ],
          course: [
            {
              heading: "Une République définie par sa Constitution",
              paragraphs: [
                "Les valeurs de la République ne sont pas de simples idéaux : elles sont écrites dans des textes qui ont valeur constitutionnelle, c'est-à-dire qui s'imposent à la loi elle-même. Le « bloc de constitutionnalité » comprend la Constitution du 4 octobre 1958, la Déclaration des droits de l'homme et du citoyen du 26 août 1789 (DDHC), le Préambule de la Constitution de 1946 et la Charte de l'environnement de 2004. Le Conseil constitutionnel vérifie que les lois votées les respectent.",
                "L'article 1er de la Constitution énonce : « La France est une République indivisible, laïque, démocratique et sociale. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Elle respecte toutes les croyances. Son organisation est décentralisée. » L'article 2 fixe la langue (le français), l'emblème (le drapeau tricolore), l'hymne (la Marseillaise), la devise « Liberté, Égalité, Fraternité » et le principe : « gouvernement du peuple, par le peuple et pour le peuple ».",
              ],
              box: { label: "Définition", text: "Une valeur est un idéal qui oriente l'action collective (la liberté, l'égalité, la fraternité). Un principe est une règle juridique qui traduit cette valeur et s'impose à tous (l'égalité devant la loi, la laïcité, l'indivisibilité)." },
            },
            {
              heading: "La liberté et l'égalité, proclamées en 1789",
              paragraphs: [
                "L'article 1er de la DDHC affirme que « les hommes naissent et demeurent libres et égaux en droits ». La liberté est définie à l'article 4 comme le pouvoir de « faire tout ce qui ne nuit pas à autrui » : elle n'est donc pas illimitée, et c'est la loi qui en fixe les bornes. Elle se décline en libertés précises : liberté d'opinion, « même religieuses » (article 10), libre communication des pensées (article 11), droit de propriété et sûreté, puis liberté d'association (loi de 1901) ou liberté syndicale (Préambule de 1946).",
                "L'égalité est d'abord une égalité en droits : la loi « doit être la même pour tous, soit qu'elle protège, soit qu'elle punisse » (article 6). Ce n'est pas l'égalité des situations : la DDHC admet des « distinctions sociales » si elles sont « fondées sur l'utilité commune ». Au XXe siècle, la République ajoute une exigence d'égalité réelle : le Préambule de 1946 garantit aux femmes des droits égaux à ceux des hommes, et des politiques publiques cherchent à corriger les inégalités de fait (bourses, éducation prioritaire).",
              ],
              box: { label: "À retenir", text: "Égalité en droits : tous ont les mêmes droits et la même loi. Égalité des chances : chacun doit pouvoir accéder aux mêmes positions selon ses talents. Égalité réelle : réduire les écarts de situation qui empêchent d'exercer ses droits." },
            },
            {
              heading: "La fraternité, de la devise au principe juridique",
              paragraphs: [
                "Apparue pendant la Révolution, la devise « Liberté, Égalité, Fraternité » est officiellement adoptée sous la Deuxième République, en 1848, puis inscrite dans les Constitutions de 1946 et de 1958. La fraternité désigne le lien qui unit les membres d'une même communauté politique : chacun reconnaît en l'autre un semblable dont le sort le concerne. Elle se traduit dans la solidarité nationale (Sécurité sociale, aide aux plus fragiles) et dans l'engagement des citoyens (associations, bénévolat).",
                "Longtemps considérée comme une simple valeur morale, la fraternité est devenue un principe à valeur constitutionnelle par une décision du Conseil constitutionnel du 6 juillet 2018. Saisi par un agriculteur poursuivi pour avoir aidé des migrants, le Conseil a jugé qu'il découle de ce principe « la liberté d'aider autrui, dans un but humanitaire, sans considération de la régularité de son séjour sur le territoire national ». Cette liberté reste conciliée avec la lutte contre l'immigration irrégulière, qui est un objectif d'ordre public.",
              ],
            },
            {
              heading: "La laïcité : liberté de conscience et neutralité de l'État",
              paragraphs: [
                "La loi du 9 décembre 1905 concernant la séparation des Églises et de l'État pose les deux piliers de la laïcité. Article 1er : « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes » dans les limites de l'ordre public. Article 2 : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » La laïcité est inscrite dans la Constitution depuis 1946. Une exception historique demeure : en Alsace et en Moselle, le régime concordataire antérieur à 1905 continue de s'appliquer.",
                "La laïcité n'est pas une opinion contre les religions : elle garantit à chacun le droit de croire, de ne pas croire ou de changer de religion. Elle impose la neutralité à l'État et à ses agents (un enseignant, un policier ou un agent de mairie ne manifeste pas ses convictions dans son service), mais pas aux usagers, qui restent libres, sauf règle particulière. La loi du 15 mars 2004 interdit ainsi aux élèves des écoles, collèges et lycées publics le port de signes ou tenues par lesquels ils manifestent ostensiblement une appartenance religieuse.",
              ],
              box: { label: "Règle", text: "Neutralité pour l'État et ses agents ; liberté de conscience et de culte pour les citoyens, dans le respect de l'ordre public ; égalité de tous devant la loi, quelles que soient leurs convictions." },
            },
            {
              heading: "Des principes communs pour une société diverse",
              paragraphs: [
                "La société française est diverse par les origines, les croyances, les modes de vie et les territoires. Les principes républicains ne demandent pas à chacun de renoncer à ce qu'il est : ils définissent un cadre commun qui permet aux différences de coexister. La liberté protège les choix de chacun, l'égalité interdit qu'une différence devienne un motif de traitement défavorable, la fraternité rappelle que la diversité n'empêche pas la solidarité, et la laïcité assure la coexistence pacifique des convictions.",
                "Ces principes se renforcent et se limitent mutuellement : la liberté d'expression ne permet pas la provocation à la haine, qui nierait l'égalité ; la liberté religieuse s'exerce dans le respect de l'ordre public. La loi du 24 août 2021 confortant le respect des principes de la République a, par exemple, étendu l'obligation de neutralité aux organismes privés chargés d'un service public et créé un « contrat d'engagement républicain » pour les associations qui reçoivent des subventions publiques.",
              ],
            },
          ],
          keyPoints: [
            "Article 1er de la Constitution : la France est une République indivisible, laïque, démocratique et sociale.",
            "Article 2 : langue française, drapeau tricolore, Marseillaise, devise « Liberté, Égalité, Fraternité ».",
            "DDHC de 1789 : liberté de faire tout ce qui ne nuit pas à autrui (article 4), même loi pour tous (article 6).",
            "La fraternité est un principe constitutionnel depuis la décision du Conseil constitutionnel du 6 juillet 2018.",
            "Loi de 1905 : liberté de conscience et séparation ; neutralité de l'État et de ses agents, liberté des usagers.",
            "Ces principes forment un cadre commun qui permet aux différences de coexister sans devenir des inégalités.",
          ],
          example: {
            statement: "Une mairie souhaite installer une crèche de Noël dans le hall de l'hôtel de ville et, la même semaine, refuser la location d'une salle municipale à une association culturelle musulmane qui organise une conférence ouverte à tous. Analysez ces deux décisions au regard des principes de la République.",
            solution: [
              "Identifier les principes en jeu : la laïcité (neutralité des personnes publiques), l'égalité de traitement des usagers et la liberté de réunion et de conscience.",
              "Première décision : la mairie est une personne publique tenue à la neutralité. Le Conseil d'État a jugé en 2016 qu'une crèche n'est admise dans un bâtiment public que si elle présente un caractère culturel, artistique ou festif, sans exprimer la reconnaissance d'un culte : l'installation est donc risquée et doit être justifiée par un usage local établi.",
              "Deuxième décision : une salle municipale louée aux associations doit l'être à égalité. Refuser une association parce qu'elle est musulmane constituerait une discrimination fondée sur la religion et une atteinte à la neutralité, qui interdit de favoriser ou de défavoriser un culte.",
              "Nuance : la mairie peut refuser pour des motifs objectifs (salle indisponible, menace sérieuse pour l'ordre public), à condition de les appliquer de la même façon à toutes les associations.",
              "Conclusion : la neutralité laïque oblige la mairie à ne manifester aucune préférence religieuse et à traiter tous les usagers de façon égale ; les deux décisions sont donc contestables devant le juge administratif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque situation au principe républicain qu'elle met principalement en œuvre (liberté, égalité, fraternité, laïcité). a) Un citoyen publie dans un journal une tribune critiquant le gouvernement. b) Un concours de la fonction publique est ouvert à tous les candidats remplissant les mêmes conditions de diplôme. c) Une professeure d'un lycée public ne porte aucun signe religieux pendant ses cours. d) La collectivité verse une aide à une personne âgée qui ne peut plus subvenir seule à ses besoins.",
              hint: "Demandez-vous à chaque fois quel droit ou quelle obligation est en jeu : s'exprimer, être traité de la même façon, être aidé par la collectivité, ou rester neutre.",
              solution: [
                "a) Liberté : c'est la liberté d'expression, garantie par l'article 11 de la DDHC.",
                "b) Égalité : l'article 6 de la DDHC prévoit que tous les citoyens sont également admissibles aux emplois publics, sans autre distinction que celle de leurs vertus et de leurs talents.",
                "c) Laïcité : en tant qu'agente du service public, la professeure est soumise à l'obligation de neutralité.",
                "d) Fraternité, traduite par la solidarité nationale : le Préambule de 1946 garantit des moyens convenables d'existence à ceux qui ne peuvent travailler.",
                "Résultat : a liberté, b égalité, c laïcité, d fraternité.",
              ],
            },
            {
              level: 2,
              statement: "Lors d'une sortie scolaire organisée par un lycée public, une mère d'élève accompagnatrice porte un foulard. Un parent affirme : « C'est interdit, la laïcité l'impose. » Expliquez, en distinguant les catégories de personnes concernées par la neutralité, pourquoi cette affirmation est inexacte en l'état du droit, et précisez ce que dit la loi de 2004.",
              hint: "Distinguez les agents du service public, les élèves et les autres usagers ; rappelez à qui s'applique la loi du 15 mars 2004.",
              solution: [
                "Rappeler le principe : la laïcité impose la neutralité à l'État et à ses agents, pas à l'ensemble des citoyens.",
                "Les agents (enseignants, personnels) ne peuvent manifester leurs convictions religieuses dans l'exercice de leurs fonctions.",
                "Les élèves des écoles, collèges et lycées publics sont soumis à une règle particulière : la loi du 15 mars 2004 leur interdit les signes religieux ostensibles.",
                "Une mère accompagnatrice n'est ni une agente publique ni une élève : elle est une usagère qui collabore ponctuellement au service public. Le Conseil d'État, dans une étude de 2013, a estimé qu'elle n'est pas soumise par principe à la neutralité, mais que des restrictions peuvent être justifiées par le bon fonctionnement du service ou l'ordre public.",
                "Conclusion : l'affirmation est inexacte ; la laïcité n'impose pas de façon générale la neutralité aux parents accompagnateurs, et la loi de 2004 ne concerne que les élèves.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Une commune décide de réserver les places de sa nouvelle crèche municipale aux enfants dont les deux parents ont la nationalité française, afin, selon le maire, de « renforcer la cohésion de la communauté locale ». » En vous appuyant sur le document et sur vos connaissances, montrez que cette décision est contraire aux principes de la République, puis expliquez en quoi ces principes favorisent au contraire la cohésion d'une société diverse.",
              hint: "Mobilisez l'égalité (article 1er de la Constitution, article 6 de la DDHC), l'interdiction des discriminations et la fraternité ; puis montrez que la cohésion vient d'un cadre commun et non de l'exclusion.",
              solution: [
                "Introduction : le maire invoque la cohésion, mais réserve un service public à une partie des habitants selon un critère de nationalité des parents.",
                "Atteinte à l'égalité : l'article 1er de la Constitution garantit l'égalité devant la loi sans distinction d'origine ; un service public local doit être accessible dans les mêmes conditions à tous les usagers placés dans la même situation (habitants de la commune). La nationalité des parents n'a aucun rapport avec l'objet d'une crèche.",
                "Discrimination : le refus d'un service en raison de l'origine ou de la nationalité est une discrimination punie par le Code pénal (articles 225-1 et 225-2) ; la délibération serait aussi annulée par le juge administratif.",
                "Atteinte à la fraternité : exclure des enfants du service public revient à refuser de reconnaître leurs familles comme membres de la communauté locale, ce qui contredit le lien de solidarité que suppose la fraternité.",
                "Ce qui fait la cohésion : les principes républicains créent un cadre commun ; l'égalité de traitement permet à chacun de se sentir membre de la communauté, la laïcité fait coexister les convictions, la solidarité relie les générations et les milieux. La cohésion naît de ce cadre partagé, non de l'exclusion d'une partie des habitants.",
                "Conclusion : la décision est contraire à l'égalité, constitue une discrimination et fragilise la cohésion qu'elle prétend renforcer.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque principe à la formule juridique qui l'exprime.",
            pairs: [
              { left: "Liberté", right: "Pouvoir faire tout ce qui ne nuit pas à autrui (DDHC, article 4)" },
              { left: "Égalité", right: "La loi doit être la même pour tous (DDHC, article 6)" },
              { left: "Fraternité", right: "Liberté d'aider autrui dans un but humanitaire (Conseil constitutionnel, 2018)" },
              { left: "Laïcité", right: "La République ne reconnaît, ne salarie ni ne subventionne aucun culte (loi de 1905)" },
              { left: "Indivisibilité", right: "Une seule souveraineté, un seul peuple, une même loi sur tout le territoire" },
              { left: "République sociale", right: "Des moyens convenables d'existence pour qui ne peut travailler (Préambule de 1946)" },
            ],
          },
          quiz: [
            {
              q: "Quel article de la Constitution de 1958 définit la France comme une République indivisible, laïque, démocratique et sociale ?",
              options: ["L'article 3", "L'article 89", "L'article 1er", "L'article 16 (pouvoirs exceptionnels)"],
              answer: 2,
              why: "L'article 1er énonce ces quatre caractères ainsi que l'égalité devant la loi et l'organisation décentralisée.",
            },
            {
              q: "Depuis quand la fraternité est-elle reconnue comme un principe à valeur constitutionnelle ?",
              options: ["Depuis une décision du Conseil constitutionnel de 2018", "Depuis la Déclaration des droits de l'homme et du citoyen de 1789", "Depuis la loi de séparation des Églises et de l'État de 1905", "Depuis la révision constitutionnelle de 2008"],
              answer: 0,
              why: "Le 6 juillet 2018, le Conseil constitutionnel en a déduit la liberté d'aider autrui dans un but humanitaire.",
            },
            {
              q: "À qui la laïcité impose-t-elle une obligation de neutralité religieuse ?",
              options: ["À tous les citoyens dès qu'ils se trouvent dans l'espace public", "Aux seuls élus de la Nation", "À tous les usagers des services publics", "À l'État et à ses agents dans leur service"],
              answer: 3,
              why: "La neutralité pèse sur l'État et ses agents ; les usagers restent libres de manifester leurs convictions, sauf règle particulière comme la loi de 2004.",
            },
            {
              q: "Selon l'article 4 de la DDHC, en quoi consiste la liberté ?",
              options: ["Faire tout ce que l'on désire en toutes circonstances", "Faire tout ce qui ne nuit pas à autrui", "Obéir uniquement aux lois que l'on a soi-même votées", "Échapper à toute forme d'autorité publique"],
              answer: 1,
              why: "La liberté a pour bornes celles qui assurent aux autres la jouissance des mêmes droits, et ces bornes sont fixées par la loi.",
            },
            {
              q: "Que prévoit la loi du 15 mars 2004 ?",
              options: ["L'interdiction de tout signe religieux dans la rue", "La neutralité religieuse imposée à tous les parents qui accompagnent les sorties scolaires", "L'interdiction des signes religieux ostensibles pour les élèves des établissements publics", "La fin du régime concordataire en Alsace et en Moselle"],
              answer: 2,
              why: "Elle concerne les élèves des écoles, collèges et lycées publics, et non les autres usagers ni l'espace public en général.",
            },
          ],
          trap: "Croire que la laïcité impose à tous les citoyens d'effacer leurs convictions dans l'espace public : la neutralité concerne l'État et ses agents, tandis que les usagers restent libres, sauf règle particulière comme la loi de 2004 pour les élèves.",
          method: "Pour analyser une situation, posez trois questions dans l'ordre : quel principe est en jeu, qui est concerné (État, agent, usager, élève), et quel texte précis s'applique (Constitution, DDHC, loi de 1905, loi de 2004).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'solidarite-cohesion-sociale',
          title: 'La solidarité, fondement de la cohésion sociale',
          minutes: 30,
          objectives: [
            "Définir la solidarité et la cohésion sociale, et distinguer la solidarité nationale des solidarités privées.",
            "Identifier les fondements juridiques de la solidarité (Préambule de 1946, Sécurité sociale, impôt).",
            "Expliquer comment la protection sociale et la redistribution renforcent les liens entre les membres de la société.",
            "Analyser les débats sur l'avenir de la solidarité face aux transformations de la société.",
          ],
          course: [
            {
              heading: "Solidarité et cohésion sociale : définitions",
              paragraphs: [
                "La cohésion sociale désigne l'intensité des liens qui unissent les membres d'une société et leur sentiment d'appartenir à un ensemble commun. Une société cohésive limite les exclusions, assure à chacun une place et permet de traverser les crises sans éclater. La solidarité est l'un des moyens de cette cohésion : c'est le lien d'interdépendance qui fait que les membres d'un groupe se sentent responsables les uns des autres et s'entraident.",
                "Le sociologue Émile Durkheim, dans De la division du travail social (1893), distingue deux formes de solidarité. La solidarité mécanique repose sur la ressemblance des individus (mêmes croyances, mêmes modes de vie) dans les sociétés traditionnelles. La solidarité organique repose sur la complémentarité des individus, devenus très différents et spécialisés, dans les sociétés modernes : chacun dépend du travail des autres, comme les organes d'un corps vivant.",
              ],
              box: { label: "Définition", text: "La solidarité est le lien de dépendance réciproque entre les membres d'une société, qui fonde un devoir d'entraide. La cohésion sociale est la force des liens qui maintiennent une société unie et permettent à chacun d'y trouver sa place." },
            },
            {
              heading: "La solidarité, un principe inscrit dans le droit",
              paragraphs: [
                "À la fin du XIXe siècle, l'homme politique radical Léon Bourgeois théorise le « solidarisme » dans son livre Solidarité (1896) : chaque individu, parce qu'il bénéficie de tout ce que la société a accumulé avant lui, a une dette envers elle, qu'il acquitte en contribuant au bien commun. Cette doctrine inspire les premières lois sociales de la Troisième République, comme la loi de 1898 sur les accidents du travail ou les retraites ouvrières et paysannes de 1910.",
                "Le Préambule de la Constitution de 1946 donne à la solidarité une valeur constitutionnelle. La Nation y garantit à tous « la protection de la santé, la sécurité matérielle, le repos et les loisirs », et tout être humain qui ne peut travailler du fait de son âge, de son état physique ou mental ou de la situation économique « a le droit d'obtenir de la collectivité des moyens convenables d'existence » (alinéa 11). L'alinéa 12 proclame « la solidarité et l'égalité de tous les Français devant les charges qui résultent des calamités nationales ».",
              ],
              box: { label: "Repère", text: "1893 : Durkheim, solidarité mécanique et organique. 1896 : Léon Bourgeois, Solidarité. 1945 : ordonnances créant la Sécurité sociale. 1946 : Préambule (alinéas 10, 11 et 12). 1988 : revenu minimum d'insertion. 2009 : revenu de solidarité active." },
            },
            {
              heading: "La solidarité nationale : protection sociale et redistribution",
              paragraphs: [
                "Les ordonnances des 4 et 19 octobre 1945, préparées par Pierre Laroque et mises en œuvre par le ministre du Travail Ambroise Croizat, créent la Sécurité sociale, inspirée du programme du Conseil national de la Résistance. Elle protège contre les grands risques de la vie : maladie, accidents du travail et maladies professionnelles, vieillesse, charges de famille et, depuis la loi du 7 août 2020, perte d'autonomie. Elle repose surtout sur des cotisations sociales prélevées sur les revenus du travail : chacun cotise selon ses moyens et reçoit selon ses besoins.",
                "À côté de cette assurance, l'assistance vient en aide à ceux qui n'ont pas ou plus de ressources, sans contrepartie de cotisation : revenu de solidarité active (RSA, qui a succédé au revenu minimum d'insertion), minimum vieillesse, allocations pour adultes handicapés. Le système fiscal participe aussi à la solidarité : l'article 13 de la DDHC prévoit une contribution commune « également répartie entre tous les citoyens, en raison de leurs facultés », et l'impôt sur le revenu est progressif (créé en 1914), son taux augmentant avec le revenu.",
              ],
              box: { label: "À retenir", text: "Redistribution horizontale : des bien portants vers les malades, des actifs vers les retraités, des ménages sans enfant vers les familles. Redistribution verticale : des ménages aisés vers les ménages modestes, par l'impôt progressif et les prestations sous conditions de ressources." },
            },
            {
              heading: "Les solidarités de proximité et l'engagement",
              paragraphs: [
                "La solidarité ne passe pas seulement par l'État. Les solidarités familiales restent essentielles : aides financières entre générations, garde des petits-enfants, soin d'un parent âgé par un proche aidant. Les associations, régies par la loi du 1er juillet 1901, organisent aussi l'entraide : banques alimentaires, soutien scolaire, accompagnement des personnes isolées, secours en cas de catastrophe. Le bénévolat, c'est-à-dire l'engagement libre et non rémunéré au service des autres, en est une forme majeure.",
                "La République encourage cet engagement. Le service civique, créé par la loi du 10 mars 2010, permet aux jeunes de 16 à 25 ans (30 ans pour les jeunes en situation de handicap) de s'engager plusieurs mois dans une mission d'intérêt général, indemnisée. Ces solidarités de proximité complètent la solidarité nationale : elles créent du lien concret entre des personnes qui ne se seraient pas rencontrées et elles atteignent parfois des situations que l'action publique repère mal.",
              ],
            },
            {
              heading: "Une solidarité à l'épreuve",
              paragraphs: [
                "La solidarité nationale fait l'objet de débats démocratiques. Le vieillissement de la population accroît les dépenses de retraite, de santé et de dépendance, ce qui pose la question de leur financement : faut-il augmenter les prélèvements, travailler plus longtemps ou réduire certaines prestations ? Le chômage de longue durée, la précarité de certains emplois et les inégalités territoriales (quartiers prioritaires, zones rurales éloignées des services publics) fragilisent aussi la cohésion sociale.",
                "Le non-recours aux droits, c'est-à-dire le fait que des personnes éligibles ne demandent pas une aide à laquelle elles ont droit (par méconnaissance, complexité des démarches ou crainte d'être stigmatisées), limite l'efficacité de la solidarité. Pour y répondre, les pouvoirs publics développent le versement automatique ou simplifié de certaines aides. Ces débats portent sur les moyens, mais le principe reste partagé : sans solidarité, l'égalité en droits resterait formelle pour ceux que la vie a fragilisés.",
              ],
            },
          ],
          keyPoints: [
            "La cohésion sociale est la force des liens qui unissent une société ; la solidarité, l'interdépendance qui fonde l'entraide.",
            "Durkheim (1893) : solidarité mécanique (ressemblance) et solidarité organique (complémentarité des individus).",
            "Le Préambule de 1946 garantit santé, sécurité matérielle et moyens convenables d'existence à qui ne peut travailler.",
            "La Sécurité sociale (1945) couvre maladie, accidents du travail, vieillesse, famille et, depuis 2020, autonomie.",
            "Assurance (cotisations) et assistance (RSA, minimum vieillesse) ; impôt progressif et redistribution verticale.",
            "Familles, associations (loi de 1901), bénévolat et service civique complètent la solidarité nationale.",
          ],
          example: {
            statement: "Un camarade affirme : « Je ne vois pas pourquoi je paierais des cotisations pour la retraite des autres ou pour soigner des gens que je ne connais pas. » Répondez-lui de façon argumentée en mobilisant la notion de solidarité.",
            solution: [
              "Reconnaître la part de vérité : les cotisations sont des prélèvements obligatoires, et chacun peut avoir le sentiment de payer pour des inconnus.",
              "Montrer l'interdépendance : comme l'explique Durkheim avec la solidarité organique, chacun dépend du travail des autres ; les retraités d'aujourd'hui ont financé, par leurs cotisations, les retraites de leurs propres aînés et la formation des actifs actuels.",
              "Rappeler la logique d'assurance : personne ne sait s'il sera un jour malade, accidenté ou sans emploi ; mutualiser les risques protège chacun, y compris celui qui cotise aujourd'hui sans rien recevoir.",
              "Invoquer le droit : le Préambule de 1946, à valeur constitutionnelle, fait de la protection de la santé et des moyens convenables d'existence une garantie de la Nation.",
              "Élargir à la cohésion : une société où les malades et les personnes âgées seraient abandonnés serait plus inégalitaire et plus conflictuelle, ce qui nuirait à tous.",
              "Conclusion : les cotisations ne sont pas un don à des inconnus, mais la participation à un système de solidarité dont chacun bénéficie au cours de sa vie et qui fonde la cohésion sociale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque dispositif selon qu'il relève de la solidarité nationale (organisée par la puissance publique) ou d'une solidarité de proximité (familiale ou associative). a) Le remboursement d'une consultation médicale par l'Assurance maladie. b) Une grand-mère qui garde ses petits-enfants le mercredi. c) Le versement du RSA à une personne sans ressources. d) Une collecte de denrées organisée par une banque alimentaire. e) Les allocations familiales.",
              hint: "Demandez-vous qui organise et finance l'aide : la collectivité par des prélèvements obligatoires, ou des personnes et des associations de façon volontaire.",
              solution: [
                "a) Solidarité nationale : l'Assurance maladie est une branche de la Sécurité sociale financée par des prélèvements obligatoires.",
                "b) Solidarité de proximité, familiale : l'aide est volontaire et non organisée par l'État.",
                "c) Solidarité nationale : le RSA est une prestation d'assistance financée par la collectivité.",
                "d) Solidarité de proximité, associative : elle repose sur des dons et sur le bénévolat.",
                "e) Solidarité nationale : les allocations familiales sont versées par la branche famille de la Sécurité sociale.",
                "Résultat : a, c et e relèvent de la solidarité nationale ; b et d d'une solidarité de proximité.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des flux suivants, indiquez s'il s'agit d'une redistribution horizontale ou verticale, en justifiant. a) Les cotisations des actifs financent les pensions des retraités. b) L'impôt sur le revenu, progressif, finance une aide au logement attribuée sous conditions de ressources. c) Une personne en bonne santé cotise et une personne malade est remboursée de ses soins. d) Une bourse de lycée est accordée en fonction des revenus de la famille.",
              hint: "La redistribution horizontale couvre un risque (maladie, vieillesse, famille) quel que soit le revenu ; la redistribution verticale réduit les écarts de revenus entre ménages aisés et modestes.",
              solution: [
                "a) Horizontale : le transfert va des actifs vers les retraités pour couvrir le risque vieillesse, indépendamment du niveau de revenu.",
                "b) Verticale : l'impôt progressif prélève davantage sur les hauts revenus, et l'aide sous conditions de ressources bénéficie aux ménages modestes.",
                "c) Horizontale : le transfert va des bien portants vers les malades, quel que soit leur revenu.",
                "d) Verticale : la bourse est réservée aux familles dont les revenus sont inférieurs à un plafond.",
                "Résultat : a et c sont des redistributions horizontales ; b et d des redistributions verticales.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Dans une commune rurale, la fermeture du dernier cabinet médical oblige les habitants à parcourir quarante kilomètres pour consulter. Une association de bénévoles organise des trajets solidaires, tandis que la région finance une maison de santé. » En vous appuyant sur le document et sur vos connaissances, montrez que la solidarité prend plusieurs formes complémentaires et expliquez pourquoi elle est indispensable à la cohésion sociale.",
              hint: "Distinguez la solidarité de proximité (l'association) et la solidarité organisée par la puissance publique (la région, la Sécurité sociale) ; reliez ensuite l'accès aux soins à l'égalité réelle et au sentiment d'appartenance.",
              solution: [
                "Introduction : le document décrit une inégalité territoriale d'accès aux soins et deux réponses solidaires.",
                "Solidarité de proximité : l'association organise des trajets grâce au bénévolat (loi de 1901) ; elle répond vite à un besoin concret et crée du lien entre habitants.",
                "Solidarité organisée par la puissance publique : la région, collectivité territoriale, finance une maison de santé ; la Sécurité sociale rembourse les soins, ce qui garantit le droit à la protection de la santé proclamé par le Préambule de 1946.",
                "Complémentarité : le bénévolat ne peut à lui seul garantir un égal accès aux soins sur tout le territoire, et l'action publique a besoin des associations pour atteindre les personnes isolées.",
                "Lien avec la cohésion : un territoire où l'accès aux soins disparaît nourrit un sentiment d'abandon ; la solidarité rend l'égalité en droits réelle et permet à chacun de se sentir membre de la Nation.",
                "Conclusion : solidarités de proximité et solidarité nationale se complètent ; ensemble, elles réduisent les fractures territoriales et entretiennent la cohésion sociale.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la solidarité et la protection sociale.",
            statements: [
              { text: "La Sécurité sociale a été créée par des ordonnances d'octobre 1945.", true: true, why: "Les ordonnances des 4 et 19 octobre 1945 en sont l'acte fondateur." },
              { text: "Pour Durkheim, la solidarité organique repose sur la ressemblance des individus.", true: false, why: "C'est la solidarité mécanique ; la solidarité organique repose sur la complémentarité d'individus différents." },
              { text: "Le droit à des moyens convenables d'existence pour qui ne peut travailler figure dans le Préambule de 1946.", true: true, why: "C'est l'alinéa 11, qui a valeur constitutionnelle." },
              { text: "Le bénévolat est une activité rémunérée au service d'une association.", true: false, why: "Le bénévolat est par définition un engagement libre et non rémunéré." },
              { text: "Un impôt progressif est un impôt dont le taux augmente avec le revenu.", true: true, why: "C'est le cas de l'impôt sur le revenu, qui contribue à la redistribution verticale." },
              { text: "La solidarité relève uniquement de l'État.", true: false, why: "Les familles, les associations et les citoyens engagés participent aussi à la solidarité." },
              { text: "Le non-recours désigne le fait de ne pas demander une aide à laquelle on a droit.", true: true, why: "Il s'explique par la méconnaissance, la complexité des démarches ou la peur d'être stigmatisé." },
            ],
          },
          quiz: [
            {
              q: "Quel sociologue a distingué la solidarité mécanique et la solidarité organique ?",
              options: ["Alexis de Tocqueville", "Émile Durkheim", "Max Weber", "Pierre Bourdieu"],
              answer: 1,
              why: "Durkheim développe cette distinction dans De la division du travail social, publié en 1893.",
            },
            {
              q: "Quel texte à valeur constitutionnelle garantit à tous la protection de la santé et la sécurité matérielle ?",
              options: ["La Déclaration des droits de l'homme et du citoyen de 1789", "La Charte de l'environnement de 2004", "La loi du 1er juillet 1901", "Le Préambule de la Constitution de 1946"],
              answer: 3,
              why: "Son alinéa 11 énonce ces garanties, qui fondent la solidarité nationale.",
            },
            {
              q: "Comment la Sécurité sociale est-elle principalement financée ?",
              options: ["Par des cotisations sociales sur les revenus du travail", "Par les dons des associations et des fondations privées", "Par les seules recettes de la taxe sur la valeur ajoutée", "Par des contributions volontaires des entreprises"],
              answer: 0,
              why: "Les cotisations restent la ressource principale, complétées par des impôts comme la contribution sociale généralisée.",
            },
            {
              q: "Quelle est la cinquième branche de la Sécurité sociale, créée en 2020 ?",
              options: ["La branche logement", "La branche éducation", "La branche autonomie", "La branche emploi"],
              answer: 2,
              why: "La loi du 7 août 2020 a créé une branche consacrée à la perte d'autonomie, liée à l'âge ou au handicap.",
            },
            {
              q: "Quel transfert relève de la redistribution verticale ?",
              options: ["Les remboursements de soins des bien portants vers les malades", "Une aide sous conditions de ressources financée par un impôt progressif", "Les pensions de retraite financées par les actifs", "Les indemnités journalières versées à un salarié en arrêt maladie, quel que soit son salaire"],
              answer: 1,
              why: "La redistribution verticale réduit les écarts de revenus, des ménages aisés vers les ménages modestes.",
            },
          ],
          trap: "Réduire la solidarité à la charité ou à la générosité individuelle : en France, elle est aussi un principe juridique (Préambule de 1946) organisé par la Sécurité sociale et l'impôt, et ne dépend donc pas du bon vouloir de chacun.",
          method: "Pour traiter un sujet sur la solidarité, distinguez toujours trois niveaux (solidarité nationale, solidarités associatives, solidarités familiales), donnez pour chacun un dispositif précis, puis reliez-les à la cohésion sociale.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÉGALITÉ À L'ÉPREUVE DES DISCRIMINATIONS                             */
    /* ==================================================================== */
    {
      id: 'egalite-discriminations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'egalite-femmes-hommes',
          title: 'L’égalité entre les femmes et les hommes',
          minutes: 30,
          objectives: [
            "Identifier les grandes étapes juridiques de la conquête de l'égalité entre les femmes et les hommes.",
            "Distinguer l'égalité en droits, la parité et l'égalité réelle.",
            "Analyser des données sur les inégalités qui persistent entre les femmes et les hommes.",
            "Expliquer les politiques publiques qui visent à réduire ces inégalités et à lutter contre les violences sexistes.",
          ],
          course: [
            {
              heading: "Une égalité longtemps refusée",
              paragraphs: [
                "La Déclaration de 1789 proclame que « les hommes naissent et demeurent libres et égaux en droits », mais les femmes restent exclues de la citoyenneté politique. En 1791, Olympe de Gouges rédige une Déclaration des droits de la femme et de la citoyenne qui dénonce cette exclusion ; elle est guillotinée en 1793. Le Code civil de 1804 place la femme mariée sous l'autorité de son mari, et le suffrage dit « universel » de 1848 n'est en réalité qu'un suffrage masculin.",
                "Il faut attendre l'ordonnance du 21 avril 1944, prise à Alger par le Comité français de la Libération nationale présidé par le général de Gaulle, pour que les femmes obtiennent le droit de vote et d'éligibilité ; elles votent pour la première fois aux élections municipales du 29 avril 1945. Le Préambule de la Constitution de 1946 affirme ensuite que « la loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme » (alinéa 3) : l'égalité devient un principe constitutionnel.",
              ],
              box: { label: "Repère", text: "1791 : Déclaration des droits de la femme et de la citoyenne (Olympe de Gouges). 1944 : droit de vote des femmes. 1946 : égalité des droits inscrite dans le Préambule. 1965 : réforme des régimes matrimoniaux. 1975 : loi Veil." },
            },
            {
              heading: "L'égalité dans la famille, le travail et la maîtrise de son corps",
              paragraphs: [
                "Les droits civils des femmes progressent ensuite par étapes. La loi du 13 juillet 1965 permet aux femmes mariées d'exercer une profession et d'ouvrir un compte bancaire sans l'autorisation de leur mari. La loi du 4 juin 1970 remplace la « puissance paternelle » par l'autorité parentale, partagée entre les deux parents. Dans le travail, la loi du 22 décembre 1972 pose le principe « à travail de valeur égale, salaire égal », et la loi Roudy du 13 juillet 1983 étend l'égalité professionnelle à l'embauche, à la formation et à la promotion.",
                "La maîtrise de son corps est un autre enjeu d'égalité. La loi Neuwirth de 1967 autorise la contraception ; la loi Veil du 17 janvier 1975 dépénalise l'interruption volontaire de grossesse (IVG). Depuis la loi constitutionnelle du 8 mars 2024, l'article 34 de la Constitution prévoit que la loi détermine les conditions dans lesquelles s'exerce « la liberté garantie à la femme d'avoir recours à une interruption volontaire de grossesse » : la France est le premier pays à inscrire cette liberté dans sa Constitution.",
              ],
            },
            {
              heading: "De l'égalité en droits à la parité",
              paragraphs: [
                "L'égalité en droits ne suffit pas à produire l'égalité des situations : en 1997, les femmes ne représentaient encore qu'environ un député sur dix. La révision constitutionnelle du 8 juillet 1999 dispose que la loi « favorise l'égal accès des femmes et des hommes aux mandats électoraux et fonctions électives ». La loi du 6 juin 2000 sur la parité impose des listes alternant femmes et hommes pour les scrutins de liste et pénalise financièrement les partis qui ne présentent pas autant de candidates que de candidats aux élections législatives.",
                "La révision de 2008 a déplacé ce principe à l'article 1er et l'a étendu aux « responsabilités professionnelles et sociales ». La loi Copé-Zimmermann du 27 janvier 2011 impose au moins 40 % de personnes de chaque sexe dans les conseils d'administration des grandes entreprises. La loi du 4 août 2014 pour l'égalité réelle entre les femmes et les hommes renforce ces politiques, et, progressivement depuis 2019, les entreprises d'au moins 50 salariés doivent publier chaque année un index de l'égalité professionnelle, sous peine de sanctions.",
              ],
              box: { label: "Définition", text: "La parité est l'égale représentation des femmes et des hommes dans les assemblées élues et les instances de décision. C'est un moyen d'atteindre l'égalité réelle, alors que l'égalité en droits signifie seulement que la loi est la même pour tous." },
            },
            {
              heading: "Des inégalités qui persistent",
              paragraphs: [
                "Malgré l'égalité juridique, des inégalités de fait demeurent. Les femmes gagnent en moyenne moins que les hommes : l'écart s'explique en partie par le temps partiel, plus fréquent chez les femmes, et par la concentration des femmes dans des métiers moins rémunérés, mais une part de l'écart subsiste à poste et temps de travail comparables. On parle de « plafond de verre » pour désigner les obstacles invisibles qui freinent l'accès des femmes aux postes de direction, et de « plancher collant » pour celles qui restent bloquées dans les emplois les moins qualifiés.",
                "Les tâches domestiques et parentales restent inégalement partagées, ce qui pèse sur les carrières des femmes. Les orientations scolaires restent aussi marquées par des stéréotypes de genre : les filles sont moins nombreuses dans les filières d'ingénieurs et de numérique, les garçons dans les métiers du soin. Ces stéréotypes, transmis dès l'enfance par la famille, l'école, les jouets ou les médias, limitent les choix de chacun, filles comme garçons.",
              ],
            },
            {
              heading: "Lutter contre les violences sexistes et sexuelles",
              paragraphs: [
                "Les violences faites aux femmes sont la forme la plus grave de l'inégalité. Elles comprennent les violences conjugales, le harcèlement sexuel, les agressions sexuelles et le viol, qui est un crime jugé par une cour d'assises ou une cour criminelle départementale. La loi du 3 août 2018 a créé l'infraction d'outrage sexiste pour sanctionner le harcèlement de rue et a allongé à trente ans après la majorité de la victime le délai de prescription des crimes sexuels commis sur des mineurs.",
                "Les victimes et les témoins peuvent appeler le 3919, numéro national d'écoute gratuit et anonyme pour les femmes victimes de violences, ou le 17 en cas d'urgence. Des dispositifs protègent les victimes : ordonnance de protection délivrée par le juge aux affaires familiales, téléphone grave danger, bracelet anti-rapprochement. L'égalité entre les femmes et les hommes a été déclarée « grande cause » du quinquennat en 2017, puis de nouveau en 2022, signe que l'égalité réelle reste un objectif à atteindre.",
              ],
              box: { label: "À retenir", text: "Égalité en droits : acquise par étapes (1944, 1946, 1965, 1972, 1983). Parité : principe constitutionnel depuis 1999, étendu en 2008. Égalité réelle : objectif des politiques publiques face aux écarts de salaire, au partage inégal des tâches et aux violences." },
            },
          ],
          keyPoints: [
            "Droit de vote des femmes : ordonnance du 21 avril 1944, premier vote le 29 avril 1945.",
            "Préambule de 1946 : la loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme.",
            "1965 : profession et compte bancaire sans autorisation du mari ; 1972 et 1983 : égalité salariale et professionnelle.",
            "Parité : révision de 1999, loi du 6 juin 2000, extension aux responsabilités professionnelles en 2008.",
            "Depuis 2024, la liberté de recourir à l'IVG est inscrite à l'article 34 de la Constitution.",
            "Inégalités persistantes : écarts de salaire, plafond de verre, tâches domestiques, stéréotypes, violences.",
          ],
          example: {
            statement: "Expliquez pourquoi le législateur a jugé nécessaire d'adopter des lois sur la parité alors que l'égalité des droits entre les femmes et les hommes était déjà reconnue depuis 1946.",
            solution: [
              "Rappeler le principe : depuis 1944, les femmes peuvent voter et être élues, et le Préambule de 1946 garantit l'égalité des droits dans tous les domaines.",
              "Constater l'écart entre le droit et les faits : à la fin des années 1990, les femmes ne représentaient encore qu'environ un député sur dix ; l'égalité formelle n'avait pas produit une égale représentation.",
              "Identifier les causes : les partis politiques investissaient majoritairement des hommes, et des stéréotypes associaient le pouvoir politique aux hommes.",
              "Présenter la réponse : la révision constitutionnelle de 1999 permet à la loi de favoriser l'égal accès aux mandats ; la loi du 6 juin 2000 impose des listes paritaires et des pénalités financières aux partis.",
              "Montrer l'élargissement : en 2008, le principe est étendu aux responsabilités professionnelles et sociales, ce qui permet la loi Copé-Zimmermann de 2011 sur les conseils d'administration.",
              "Conclusion : les lois sur la parité visent à passer de l'égalité en droits à l'égalité réelle, en corrigeant des obstacles que le seul principe d'égalité ne suffisait pas à lever.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'avancée correspondante : 1944, 1965, 1975, 2000, 2024. Avancées : a) la loi sur la parité dans les élections ; b) le droit de vote et d'éligibilité des femmes ; c) l'inscription de la liberté de recourir à l'IVG dans la Constitution ; d) le droit pour une femme mariée d'exercer une profession et d'ouvrir un compte bancaire sans l'autorisation de son mari ; e) la dépénalisation de l'IVG par la loi Veil.",
              hint: "Partez des dates que vous connaissez le mieux (le vote des femmes à la Libération, la loi Veil) et procédez par élimination.",
              solution: [
                "1944 : b) le droit de vote et d'éligibilité, par l'ordonnance du 21 avril 1944.",
                "1965 : d) la loi du 13 juillet 1965 réforme les régimes matrimoniaux.",
                "1975 : e) la loi Veil du 17 janvier 1975 dépénalise l'IVG.",
                "2000 : a) la loi du 6 juin 2000 met en œuvre la parité.",
                "2024 : c) la loi constitutionnelle du 8 mars 2024 inscrit cette liberté à l'article 34.",
                "Résultat : 1944 b, 1965 d, 1975 e, 2000 a, 2024 c.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans une entreprise, le salaire mensuel net moyen des femmes est de 2 100 euros et celui des hommes de 2 500 euros. a) Calculez l'écart de salaire en euros. b) Exprimez cet écart en pourcentage du salaire des hommes (de combien les femmes gagnent-elles moins ?). c) Exprimez-le en pourcentage du salaire des femmes (de combien les hommes gagnent-ils plus ?). d) Expliquez pourquoi ces deux pourcentages sont différents et citez deux facteurs qui peuvent expliquer un tel écart.",
              hint: "Un pourcentage d'écart se calcule en divisant l'écart par la valeur de référence, puis en multipliant par 100 ; la référence change entre les questions b et c.",
              solution: [
                "a) Écart : 2 500 - 2 100 = 400 euros.",
                "b) Par rapport au salaire des hommes : 400 ÷ 2 500 × 100 = 16 %. Les femmes gagnent en moyenne 16 % de moins que les hommes.",
                "c) Par rapport au salaire des femmes : 400 ÷ 2 100 × 100 ≈ 19,0 %. Les hommes gagnent en moyenne environ 19 % de plus que les femmes.",
                "d) Les deux pourcentages diffèrent parce que la valeur de référence n'est pas la même (2 500 euros dans un cas, 2 100 dans l'autre) ; il faut toujours préciser la référence choisie.",
                "Facteurs possibles : un temps partiel plus fréquent chez les femmes, une moindre présence des femmes dans les postes les mieux rémunérés (plafond de verre), et une part d'écart inexpliquée qui peut relever de la discrimination.",
                "Résultat : écart de 400 euros, soit 16 % du salaire des hommes ou environ 19 % du salaire des femmes.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Dans le conseil municipal d'une ville de 20 000 habitants, élu sur une liste paritaire, on compte autant de conseillères que de conseillers. Pourtant, le maire et la majorité des adjoints chargés des finances et de l'urbanisme sont des hommes, tandis que les délégations à la petite enfance et aux affaires sociales sont confiées à des femmes. » En vous appuyant sur le document et sur vos connaissances, montrez que les lois sur la parité ont fait progresser l'égalité, mais qu'elles ne suffisent pas à garantir l'égalité réelle.",
              hint: "Construisez deux parties : ce que la parité a permis (représentation numérique), puis ce qu'elle ne règle pas (répartition des responsabilités, stéréotypes) ; proposez enfin des pistes.",
              solution: [
                "Introduction : la parité vise l'égal accès aux mandats ; le document montre qu'une assemblée paritaire peut rester inégalitaire dans la répartition du pouvoir.",
                "Les progrès : depuis la révision de 1999 et la loi du 6 juin 2000, les scrutins de liste imposent l'alternance femmes et hommes ; les conseils municipaux des communes concernées sont donc paritaires, comme dans le document.",
                "Les limites : la fonction de maire et les délégations jugées stratégiques (finances, urbanisme) restent majoritairement masculines, tandis que les femmes reçoivent des délégations associées au soin et à l'enfance ; c'est l'effet de stéréotypes de genre et du plafond de verre.",
                "Les réponses possibles : l'élection des adjoints au scrutin de liste paritaire existe déjà dans les communes de 1 000 habitants et plus, mais elle ne règle pas l'attribution des délégations ; d'autres leviers relèvent des partis et de la culture politique (formation, réseaux, partage des tâches familiales).",
                "Conclusion : la parité a transformé la composition des assemblées, mais l'égalité réelle suppose aussi un partage égal des responsabilités et la remise en cause des stéréotypes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'égalité entre les femmes et les hommes.",
            items: [
              "Olympe de Gouges rédige la Déclaration des droits de la femme et de la citoyenne",
              "Les femmes obtiennent le droit de vote et d'éligibilité",
              "Une femme mariée peut ouvrir un compte bancaire sans l'autorisation de son mari",
              "La loi Veil dépénalise l'IVG",
              "La loi Roudy étend l'égalité professionnelle à l'embauche et à la promotion",
              "La loi sur la parité impose des listes alternant femmes et hommes",
              "La liberté de recourir à l'IVG est inscrite dans la Constitution",
            ],
          },
          quiz: [
            {
              q: "Par quel texte les femmes obtiennent-elles le droit de vote en France ?",
              options: ["L'ordonnance du 21 avril 1944", "La Constitution du 4 octobre 1958", "La loi du 6 juin 2000 sur la parité", "Le décret du 5 mars 1848 instaurant le suffrage universel"],
              answer: 0,
              why: "Cette ordonnance, prise à Alger, leur accorde le droit de vote et d'éligibilité ; elles votent pour la première fois en 1945.",
            },
            {
              q: "Que permet la loi du 13 juillet 1965 ?",
              options: ["Le droit de vote des femmes aux élections municipales puis à toutes les élections nationales", "La dépénalisation de la contraception", "L'égalité salariale entre femmes et hommes", "L'exercice d'une profession par une femme mariée sans l'accord de son mari"],
              answer: 3,
              why: "Elle réforme les régimes matrimoniaux : la femme mariée peut travailler et ouvrir un compte bancaire librement.",
            },
            {
              q: "Qu'est-ce que la parité ?",
              options: ["L'interdiction de toute différence de salaire", "L'égale représentation des femmes et des hommes dans les instances élues", "La suppression de toute mention du sexe dans les documents administratifs", "Un quota réservant la majorité des postes aux femmes"],
              answer: 1,
              why: "La parité vise l'égal accès aux mandats électoraux et aux responsabilités ; elle est inscrite dans la Constitution depuis 1999.",
            },
            {
              q: "Que désigne l'expression « plafond de verre » ?",
              options: ["Une règle juridique qui limite le salaire des femmes", "Un dispositif de protection des victimes de violences", "Les obstacles invisibles qui freinent l'accès des femmes aux postes de direction", "Le seuil de 40 % de femmes fixé par la loi Copé-Zimmermann dans les conseils d'administration"],
              answer: 2,
              why: "Aucune règle n'interdit l'accès des femmes aux postes de direction, mais des obstacles informels les en écartent.",
            },
            {
              q: "Quel numéro national gratuit et anonyme écoute les femmes victimes de violences ?",
              options: ["Le 3919", "Le 3018", "Le 115", "Le 3020"],
              answer: 0,
              why: "Le 3919 est le numéro national d'écoute ; le 3018 concerne le cyberharcèlement et le 115 l'hébergement d'urgence.",
            },
          ],
          trap: "Confondre égalité en droits et égalité réelle : le fait que la loi soit la même pour les femmes et les hommes ne signifie pas que leurs situations soient égales, comme le montrent les écarts de salaire et de représentation.",
          method: "Apprenez les étapes de l'égalité sous forme de frise en quatre colonnes (droits politiques, droits civils, travail, corps) : vous retrouverez plus facilement une date en la situant dans son domaine.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'discriminations-racisme',
          title: 'Discriminations et racisme : ce que dit le droit',
          minutes: 30,
          objectives: [
            "Définir juridiquement la discrimination et distinguer discrimination directe et indirecte.",
            "Identifier les critères et les sanctions prévus par le Code pénal.",
            "Expliquer comment le droit réprime le racisme, l'antisémitisme et les propos haineux.",
            "Connaître les recours ouverts aux victimes et aux témoins de discriminations.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une discrimination ?",
              paragraphs: [
                "Une discrimination est une différence de traitement défavorable fondée sur un critère interdit par la loi, dans un domaine protégé (emploi, logement, accès à un bien ou à un service, éducation). Toute différence de traitement n'est pas une discrimination : sélectionner un candidat pour ses compétences est légitime. Ce qui est interdit, c'est de le refuser en raison de son origine, de son sexe, de son âge, de son handicap ou d'un autre critère que la loi énumère, sans justification objective.",
                "La discrimination est directe lorsqu'une personne est traitée moins favorablement qu'une autre en raison d'un critère prohibé (« pas de locataire étranger »). Elle est indirecte lorsqu'une règle apparemment neutre désavantage en pratique un groupe de personnes, sans justification légitime : exiger une taille minimale sans lien avec le poste écarte davantage les femmes. La loi du 27 mai 2008 a défini ces deux notions en droit français, en application du droit de l'Union européenne.",
              ],
              box: { label: "Définition", text: "Discrimination : traitement défavorable d'une personne, dans un domaine protégé par la loi, en raison d'un critère interdit (origine, sexe, âge, handicap, religion, orientation sexuelle...). Elle peut être directe (visible dans la décision) ou indirecte (produite par une règle apparemment neutre)." },
            },
            {
              heading: "Ce que dit le Code pénal",
              paragraphs: [
                "L'article 225-1 du Code pénal énumère plus de vingt-cinq critères de discrimination, parmi lesquels l'origine, le sexe, la situation de famille, la grossesse, l'apparence physique, la particulière vulnérabilité économique, le patronyme, le lieu de résidence, l'état de santé, le handicap, les mœurs, l'orientation sexuelle, l'identité de genre, l'âge, les opinions politiques, les activités syndicales, et l'appartenance ou la non-appartenance, vraie ou supposée, à une ethnie, une nation, une prétendue race ou une religion déterminée.",
                "L'article 225-2 punit de trois ans d'emprisonnement et de 45 000 euros d'amende la discrimination qui consiste notamment à refuser la fourniture d'un bien ou d'un service, à refuser d'embaucher, à sanctionner ou à licencier une personne. Les peines sont portées à cinq ans et 75 000 euros lorsque le refus discriminatoire est commis dans un lieu accueillant du public ou vise à en interdire l'accès. Le « testing » (envoi de candidatures identiques ne différant que par un critère) est admis comme moyen de preuve devant le juge pénal (article 225-3-1).",
              ],
              box: { label: "Règle", text: "Discrimination (article 225-2 du Code pénal) : jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende ; 5 ans et 75 000 euros si elle est commise dans un lieu accueillant du public ou pour en interdire l'accès." },
            },
            {
              heading: "Le racisme, une idéologie combattue par la loi",
              paragraphs: [
                "Le racisme est une idéologie qui prétend diviser l'humanité en « races » hiérarchisées et justifie ainsi le mépris, l'exclusion ou la violence envers certains groupes. La biologie a établi que les « races » humaines n'existent pas : la diversité génétique est continue et plus grande à l'intérieur des groupes qu'entre eux. Le racisme est pourtant une réalité sociale : ceux qui le subissent sont traités en fonction d'une origine ou d'une couleur de peau réelle ou supposée. L'antisémitisme, hostilité envers les juifs, en est une forme spécifique, de même que la haine anti-musulmans ou envers les Roms.",
                "La loi Pleven du 1er juillet 1972 a introduit dans la loi de 1881 sur la presse le délit de provocation à la discrimination, à la haine ou à la violence raciale, et réprime la diffamation et l'injure à caractère raciste. La loi Gayssot du 13 juillet 1990 punit la contestation des crimes contre l'humanité. Depuis 2003, le mobile raciste, antisémite ou homophobe est une circonstance aggravante de nombreux crimes et délits (article 132-76 du Code pénal pour le racisme) : une agression commise pour ce motif est punie plus sévèrement.",
              ],
              box: { label: "Repère", text: "1881 : loi sur la liberté de la presse. 1972 : loi Pleven contre le racisme. 1990 : loi Gayssot. 2003 : mobile raciste, circonstance aggravante. 2008 : définition des discriminations directe et indirecte. 2011 : création du Défenseur des droits." },
            },
            {
              heading: "Se défendre et agir",
              paragraphs: [
                "Une victime de discrimination peut porter plainte auprès de la police, de la gendarmerie ou du procureur de la République. Elle peut aussi saisir gratuitement le Défenseur des droits, autorité administrative indépendante inscrite dans la Constitution en 2008 (article 71-1) et installée en 2011, qui a succédé notamment à la Haute Autorité de lutte contre les discriminations et pour l'égalité (HALDE). Il peut enquêter, proposer une médiation ou présenter des observations devant les tribunaux. Il est joignable par le 3928 et le site antidiscriminations.fr.",
                "Devant le juge civil ou le conseil de prud'hommes, la charge de la preuve est aménagée : la victime présente des éléments de fait qui laissent supposer une discrimination, puis c'est à l'auteur présumé de prouver que sa décision repose sur des éléments objectifs. Des associations comme la LICRA ou SOS Racisme accompagnent les victimes et peuvent se constituer partie civile. Les contenus haineux en ligne peuvent être signalés sur la plateforme publique Pharos. Les témoins ont aussi un rôle : conserver des preuves, soutenir la victime, signaler.",
              ],
            },
          ],
          keyPoints: [
            "Discrimination : traitement défavorable fondé sur un critère interdit, dans un domaine protégé (emploi, logement, services).",
            "Directe (visible dans la décision) ou indirecte (règle apparemment neutre qui désavantage un groupe) : loi du 27 mai 2008.",
            "Code pénal : plus de 25 critères (article 225-1) ; jusqu'à 3 ans et 45 000 euros d'amende (article 225-2).",
            "Les « races » humaines n'existent pas biologiquement, mais le racisme existe socialement et la loi le réprime.",
            "Loi Pleven (1972), loi Gayssot (1990), mobile raciste circonstance aggravante depuis 2003.",
            "Recours : plainte, Défenseur des droits (3928, antidiscriminations.fr), associations, signalement sur Pharos.",
          ],
          example: {
            statement: "Samir et Thomas, données fictives, envoient à la même agence immobilière des dossiers de location identiques (mêmes revenus, même âge, même emploi). Seul Thomas obtient une visite. Samir se demande s'il peut agir. Expliquez-lui la situation au regard du droit.",
            solution: [
              "Qualifier les faits : les deux dossiers ne diffèrent que par le prénom, qui peut révéler une origine supposée ; un refus fondé sur ce critère serait une discrimination directe dans l'accès au logement.",
              "Identifier le texte : l'article 225-1 du Code pénal interdit les distinctions fondées sur l'origine, le patronyme ou l'appartenance vraie ou supposée à une ethnie ou une nation ; l'article 225-2 punit le refus de fournir un service.",
              "Montrer la preuve : la comparaison de dossiers identiques est un « testing », admis comme moyen de preuve devant le juge pénal (article 225-3-1).",
              "Indiquer les recours : Samir peut porter plainte, saisir gratuitement le Défenseur des droits (3928) ou se faire accompagner par une association de lutte contre le racisme.",
              "Préciser la sanction encourue par l'agence : jusqu'à trois ans d'emprisonnement et 45 000 euros d'amende pour une personne physique.",
              "Conclusion : Samir a probablement subi une discrimination fondée sur l'origine ; il dispose d'une preuve recevable et de plusieurs recours, dont le Défenseur des droits.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez pour chaque situation s'il s'agit d'une discrimination punie par la loi ou d'une différence de traitement légitime, en précisant le critère en jeu. a) Un restaurant refuse l'entrée à un client en fauteuil roulant alors que la salle est accessible. b) Une entreprise de transport exige le permis poids lourd pour un poste de chauffeur routier. c) Un employeur écarte une candidate parce qu'elle est enceinte. d) Une salle de concert refuse l'entrée à un spectateur qui n'a pas de billet.",
              hint: "Demandez-vous si le motif du refus figure dans la liste des critères de l'article 225-1 et s'il a un lien objectif avec le service ou le poste.",
              solution: [
                "a) Discrimination fondée sur le handicap : le refus n'a aucune justification objective puisque la salle est accessible.",
                "b) Différence légitime : le permis poids lourd est une exigence professionnelle directement liée au poste.",
                "c) Discrimination fondée sur la grossesse, critère expressément prévu par l'article 225-1.",
                "d) Différence légitime : le motif (absence de billet) est objectif et s'applique à tous de la même façon.",
                "Résultat : a et c sont des discriminations punies par la loi ; b et d des différences de traitement légitimes.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise de nettoyage réserve une prime annuelle aux salariés travaillant à temps plein. Or 90 % de ses salariés à temps partiel sont des femmes (données fictives). a) Cette règle mentionne-t-elle le sexe ? b) Peut-elle néanmoins être discriminatoire ? Expliquez en mobilisant la notion adaptée. c) À quelle condition l'entreprise pourrait-elle la maintenir ?",
              hint: "Pensez à la distinction entre discrimination directe et indirecte, et à la notion de justification objective.",
              solution: [
                "a) Non : la règle est formulée de façon neutre, elle ne vise que la durée du travail.",
                "b) Oui, elle peut constituer une discrimination indirecte : une règle apparemment neutre désavantage en pratique un groupe protégé (les femmes, très majoritaires parmi les salariés à temps partiel).",
                "La loi du 27 mai 2008 définit la discrimination indirecte, conformément au droit de l'Union européenne qui a développé cette notion à propos du temps partiel.",
                "c) L'entreprise ne pourrait maintenir la règle que si elle est justifiée par un but légitime, sans lien avec le sexe, et si les moyens employés sont nécessaires et proportionnés ; à défaut, elle doit verser la prime au prorata du temps de travail.",
                "Résultat : la règle risque d'être une discrimination indirecte fondée sur le sexe, sauf justification objective et proportionnée.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Après un match, un supporter publie sur un réseau social des injures racistes visant un joueur. Le message est partagé des milliers de fois. Le club porte plainte, et une association de lutte contre le racisme se constitue partie civile. » En vous appuyant sur le document et sur vos connaissances, expliquez comment le droit réprime ces propos et montrez pourquoi la lutte contre le racisme est une condition de la cohésion sociale.",
              hint: "Mobilisez la loi de 1881 modifiée par la loi Pleven, la distinction entre liberté d'expression et abus, les acteurs (club, association, plateformes, Pharos), puis reliez au principe d'égalité.",
              solution: [
                "Introduction : les propos visent une personne en raison de son origine réelle ou supposée ; ils posent la question des limites de la liberté d'expression.",
                "Qualification : l'injure publique à caractère raciste est un délit prévu par la loi du 29 juillet 1881, renforcée par la loi Pleven de 1972 ; une publication sur un réseau social ouvert au public est une expression publique.",
                "Limites de la liberté d'expression : l'article 11 de la DDHC protège la libre communication des pensées, sauf abus déterminés par la loi ; l'injure raciste en fait partie, car elle nie l'égale dignité d'une personne.",
                "Acteurs : la victime ou le club peuvent porter plainte ; les associations de lutte contre le racisme peuvent se constituer partie civile ; les contenus peuvent être signalés sur Pharos, et les plateformes doivent retirer les contenus manifestement illicites qui leur sont signalés.",
                "Enjeu de cohésion : le racisme exclut une partie des citoyens de la communauté nationale en contradiction avec l'article 1er de la Constitution (égalité sans distinction d'origine) ; le réprimer protège les personnes visées et rappelle à tous que la Nation repose sur des droits égaux.",
                "Conclusion : le droit sanctionne l'injure raciste comme un abus de la liberté d'expression ; cette répression est une condition de la cohésion d'une société diverse.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : discriminations et racisme devant le droit.",
            statements: [
              { text: "Toute différence de traitement est une discrimination.", true: false, why: "Une différence fondée sur un critère objectif (compétence, diplôme exigé) est légitime ; seule celle qui repose sur un critère interdit est une discrimination." },
              { text: "Le lieu de résidence fait partie des critères de discrimination prévus par le Code pénal.", true: true, why: "L'article 225-1 vise notamment le lieu de résidence, le patronyme et la vulnérabilité économique." },
              { text: "Une règle rédigée de façon neutre ne peut jamais être discriminatoire.", true: false, why: "C'est précisément la discrimination indirecte : une règle neutre en apparence qui désavantage un groupe protégé." },
              { text: "Le testing est admis comme moyen de preuve devant le juge pénal.", true: true, why: "L'article 225-3-1 du Code pénal le prévoit expressément." },
              { text: "La science a démontré l'existence de races humaines distinctes.", true: false, why: "La diversité génétique humaine est continue ; les « races » humaines n'ont pas de fondement biologique." },
              { text: "Le Défenseur des droits peut être saisi gratuitement par une victime de discrimination.", true: true, why: "La saisine est gratuite, par le 3928, par courrier ou en ligne." },
              { text: "Le mobile raciste d'une agression n'a aucune incidence sur la peine.", true: false, why: "Depuis 2003, il constitue une circonstance aggravante qui alourdit la peine encourue." },
            ],
          },
          quiz: [
            {
              q: "Quel article du Code pénal énumère les critères de discrimination ?",
              options: ["L'article 222-33", "L'article 434-1", "L'article 225-1", "L'article 121-3"],
              answer: 2,
              why: "L'article 225-1 en dresse la liste ; l'article 225-2 fixe les peines.",
            },
            {
              q: "Qu'est-ce qu'une discrimination indirecte ?",
              options: ["Une règle apparemment neutre qui désavantage un groupe protégé", "Une discrimination commise par un intermédiaire, et non par l'auteur", "Une discrimination commise uniquement en ligne, sans contact direct", "Un refus motivé par un critère objectif lié au poste"],
              answer: 0,
              why: "Elle ne vise pas expressément le critère interdit, mais produit un désavantage particulier pour les personnes concernées.",
            },
            {
              q: "Quelle loi a créé en 1972 le délit de provocation à la haine raciale ?",
              options: ["La loi Gayssot", "La loi Veil", "La loi Roudy", "La loi Pleven"],
              answer: 3,
              why: "La loi Pleven du 1er juillet 1972 a complété la loi de 1881 sur la presse ; la loi Gayssot date de 1990.",
            },
            {
              q: "Quelle autorité indépendante peut être saisie gratuitement par une victime de discrimination ?",
              options: ["Le Conseil constitutionnel", "Le Défenseur des droits", "La Cour des comptes", "Le Conseil économique, social et environnemental"],
              answer: 1,
              why: "Inscrit dans la Constitution en 2008, le Défenseur des droits lutte notamment contre les discriminations.",
            },
            {
              q: "Devant le conseil de prud'hommes, comment la charge de la preuve est-elle répartie ?",
              options: ["La victime doit prouver l'intention de nuire de l'employeur", "Le juge établit seul tous les faits, sans que les parties aient à produire la moindre pièce", "La victime apporte des indices, puis l'employeur justifie objectivement sa décision", "L'employeur est présumé coupable sans pouvoir se défendre"],
              answer: 2,
              why: "La preuve est aménagée : il suffit d'éléments laissant supposer une discrimination pour que l'employeur doive se justifier.",
            },
          ],
          trap: "Confondre l'opinion raciste et la discrimination : une discrimination est un acte (refuser un logement, un emploi, un service) puni par le Code pénal, tandis que les propos racistes publics relèvent de la loi de 1881 sur la presse.",
          method: "Face à un cas pratique, appliquez une grille en quatre questions : quel domaine (emploi, logement, service) ? quel critère ? quelle justification objective éventuelle ? quel texte et quel recours ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'medias-minorites',
          title: 'Médias et représentation des minorités',
          minutes: 25,
          objectives: [
            "Expliquer pourquoi la représentation des minorités dans les médias est un enjeu de cohésion sociale.",
            "Identifier les stéréotypes et les mécanismes d'invisibilisation dans les productions médiatiques.",
            "Connaître le cadre juridique et le rôle de l'Arcom en matière de diversité.",
            "Analyser de façon critique une production médiatique au regard de la représentation des différents groupes sociaux.",
          ],
          course: [
            {
              heading: "Pourquoi la représentation compte",
              paragraphs: [
                "Les médias (presse, télévision, radio, cinéma, séries, publicité, réseaux sociaux) ne se contentent pas de refléter la société : ils contribuent à construire la manière dont nous percevons les autres et nous-mêmes. Dès 1922, le journaliste américain Walter Lippmann, dans Public Opinion, décrit les stéréotypes comme des « images dans nos têtes » qui simplifient une réalité trop complexe. Les médias fournissent une grande partie de ces images, surtout pour des groupes que l'on côtoie peu.",
                "Une minorité, au sens sociologique, n'est pas seulement un groupe numériquement moins nombreux : c'est un groupe qui occupe une position moins favorable ou moins visible dans l'espace public, du fait de son origine, de sa religion, d'un handicap, de son orientation sexuelle, de son âge ou de son territoire. Une représentation absente ou caricaturale peut nourrir les préjugés, décourager ceux qui ne se voient jamais à l'écran et fragiliser le sentiment d'appartenance commune.",
              ],
              box: { label: "Définition", text: "Un stéréotype est une image simplifiée et figée attribuée à un groupe, qui gomme la diversité des individus. Un préjugé est un jugement porté à l'avance, souvent négatif. La discrimination est le passage à un acte défavorable." },
            },
            {
              heading: "Stéréotypes et invisibilisation",
              paragraphs: [
                "Deux mécanismes principaux sont étudiés. L'invisibilisation est la sous-représentation d'un groupe par rapport à sa place dans la société : certaines catégories (personnes handicapées, habitants des territoires ruraux ou d'outre-mer, personnes âgées, ouvriers) apparaissent peu dans les fictions et l'information. La stéréotypisation consiste à montrer un groupe surtout dans des rôles limités ou négatifs, par exemple les habitants des quartiers populaires presque uniquement à travers la délinquance, ou les femmes rarement comme expertes.",
                "Les mesures faites chaque année par le régulateur de l'audiovisuel montrent que ces écarts existent, même s'ils évoluent. Les causes sont multiples : manque de diversité dans les rédactions et les équipes de création, habitudes professionnelles (on invite les experts que l'on connaît), logique de l'audience qui privilégie le spectaculaire. Le problème n'est pas de montrer des réalités difficiles, mais de réduire un groupe entier à ces seules réalités.",
              ],
            },
            {
              heading: "Le cadre juridique et le rôle de l'Arcom",
              paragraphs: [
                "La loi du 30 septembre 1986 relative à la liberté de communication confie au régulateur de l'audiovisuel une mission en matière de cohésion sociale et de lutte contre les discriminations. Depuis la loi du 31 mars 2006 pour l'égalité des chances, il veille à ce que la programmation des chaînes reflète la diversité de la société française (article 3-1) ; depuis la loi du 4 août 2014, il veille aussi à une juste représentation des femmes et des hommes et à l'image des femmes dans les programmes.",
                "Cette mission revient depuis le 1er janvier 2022 à l'Autorité de régulation de la communication audiovisuelle et numérique (Arcom), née de la fusion du Conseil supérieur de l'audiovisuel (CSA) et de la Hadopi. L'Arcom publie un baromètre de la diversité, réalisé depuis 2009, recueille les engagements annuels des chaînes et peut les mettre en demeure ou les sanctionner en cas de manquement à leurs obligations. Elle ne contrôle pas le contenu éditorial à l'avance : la liberté de communication reste la règle.",
              ],
              box: { label: "Repère", text: "1986 : loi sur la liberté de communication. 2006 : mission de diversité confiée au régulateur. 2009 : premier baromètre de la diversité. 2014 : représentation des femmes et des hommes. 2022 : création de l'Arcom (fusion CSA et Hadopi)." },
            },
            {
              heading: "Faire évoluer les représentations",
              paragraphs: [
                "Plusieurs leviers existent. Les médias peuvent diversifier le recrutement des journalistes et des scénaristes (des écoles de journalisme ont créé des classes préparatoires pour les étudiants boursiers), constituer des annuaires d'expertes et d'experts issus de profils variés, ou s'appuyer sur des chartes déontologiques. Des outils simples aident à prendre conscience des biais : le test de Bechdel, issu d'une bande dessinée d'Alison Bechdel (1985), demande si une œuvre montre au moins deux femmes qui parlent ensemble d'autre chose que d'un homme.",
                "Les réseaux sociaux permettent à des groupes peu visibles de se représenter eux-mêmes, sans passer par les médias traditionnels. Mais ils exposent aussi au cyberharcèlement et enferment parfois les utilisateurs dans des contenus qui confirment leurs préjugés. L'éducation aux médias et à l'information, que coordonne en France le CLEMI (créé en 1983), apprend à repérer les stéréotypes, à comparer les sources et à se demander qui parle, de qui, et comment.",
              ],
              box: { label: "À retenir", text: "Analyser une représentation : qui est montré, qui est absent, dans quels rôles, qui a la parole, qui parle à la place de qui ? La diversité à l'écran est un enjeu de cohésion, pas de quota imposé par la loi aux médias." },
            },
          ],
          keyPoints: [
            "Les médias construisent nos représentations ; Lippmann (1922) parle des stéréotypes comme d'« images dans nos têtes ».",
            "Une minorité est un groupe en position moins favorable ou moins visible, pas seulement moins nombreux.",
            "Deux mécanismes : l'invisibilisation (sous-représentation) et la stéréotypisation (rôles limités ou négatifs).",
            "Loi de 1986, article 3-1 : le régulateur veille à ce que les programmes reflètent la diversité de la société (depuis 2006).",
            "L'Arcom (2022, fusion du CSA et de la Hadopi) publie un baromètre de la diversité et peut mettre en demeure les chaînes.",
            "Leviers : diversité des rédactions, outils comme le test de Bechdel, éducation aux médias (CLEMI).",
          ],
          example: {
            statement: "Analysez la situation suivante (rédigée pour l'exercice) : dans une série policière diffusée en première partie de soirée, les personnages de commissaire, de juge et de médecin légiste sont tous des hommes blancs ; les seuls personnages issus de l'immigration sont des suspects, et aucune personne handicapée n'apparaît.",
            solution: [
              "Identifier qui est montré et dans quels rôles : les positions d'autorité et d'expertise sont réservées à un seul profil.",
              "Repérer la stéréotypisation : les personnages issus de l'immigration n'apparaissent qu'en suspects, ce qui associe une origine à la délinquance.",
              "Repérer l'invisibilisation : les femmes en position d'autorité et les personnes handicapées sont absentes, alors qu'elles font partie de la société.",
              "Mesurer les effets possibles : renforcement des préjugés chez les spectateurs, sentiment d'exclusion de ceux qui ne se voient qu'en rôles négatifs, appauvrissement de la fiction.",
              "Rappeler le cadre : la série relève de la liberté de création, mais la chaîne s'est engagée auprès de l'Arcom à refléter la diversité de la société française (article 3-1 de la loi de 1986).",
              "Conclusion : la série cumule stéréotypisation et invisibilisation ; une distribution plus diverse des rôles d'autorité corrigerait ces biais sans renoncer au genre policier.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit d'invisibilisation ou de stéréotypisation. a) Dans un journal télévisé, les reportages sur une banlieue ne portent que sur des violences urbaines. b) Les personnes âgées de plus de 65 ans n'apparaissent presque jamais dans les publicités, sauf pour des produits de santé. c) Les personnes handicapées sont quasiment absentes des fictions diffusées en soirée. d) Dans une émission de débat, les femmes invitées témoignent de leur vécu, tandis que les hommes interviennent comme experts.",
              hint: "Demandez-vous si le groupe est absent ou très rare (invisibilisation), ou présent mais enfermé dans un rôle réducteur (stéréotypisation). Une situation peut combiner les deux.",
              solution: [
                "a) Stéréotypisation : le quartier est présent, mais réduit à la délinquance.",
                "b) Les deux : les personnes âgées sont sous-représentées (invisibilisation) et, quand elles apparaissent, cantonnées à la santé (stéréotypisation).",
                "c) Invisibilisation : le groupe est presque absent.",
                "d) Stéréotypisation : les femmes sont présentes, mais privées du rôle d'expertes.",
                "Résultat : a et d relèvent de la stéréotypisation, c de l'invisibilisation, b des deux mécanismes.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un élève relève sur une semaine les experts invités dans une émission d'information : 40 interventions, dont 12 de femmes. a) Calculez la part des femmes parmi les experts, en pourcentage. b) Sachant que les femmes représentent environ la moitié de la population, que montre ce résultat ? c) Proposez deux explications possibles et deux mesures que la rédaction pourrait prendre.",
              hint: "Une part se calcule en divisant l'effectif du groupe par l'effectif total, puis en multipliant par 100.",
              solution: [
                "a) Part des femmes : 12 ÷ 40 × 100 = 30 %.",
                "b) Les femmes, qui représentent environ 50 % de la population, ne représentent que 30 % des experts invités : elles sont sous-représentées dans le rôle d'expertes (invisibilisation dans un rôle valorisé).",
                "c) Explications possibles : les journalistes sollicitent les experts qu'ils connaissent déjà, souvent des hommes occupant des postes de direction ; les femmes, moins présentes à ces postes (plafond de verre), sont moins repérées.",
                "Mesures possibles : constituer un annuaire d'expertes, fixer un objectif interne de diversité des invités et le mesurer régulièrement.",
                "Résultat : 30 % de femmes parmi les experts, soit une sous-représentation nette par rapport à leur place dans la population.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Les médias doivent-ils refléter la diversité de la société ? » Rédigez une réponse argumentée et nuancée d'une vingtaine de lignes, en mobilisant vos connaissances (cadre juridique, notions, exemples).",
              hint: "Construisez deux temps : pourquoi c'est un enjeu (cohésion, égalité, mission légale), puis les limites et les débats (liberté éditoriale, refus de la caricature inversée, rôle du public) ; terminez par une position argumentée.",
              solution: [
                "Introduction : les médias contribuent à forger nos représentations ; la question est de savoir s'ils ont un devoir de refléter la diversité de la société, et comment le concilier avec leur liberté.",
                "Un enjeu de cohésion et d'égalité : l'invisibilisation et les stéréotypes nourrissent les préjugés et donnent à certains citoyens le sentiment de ne pas compter ; une représentation juste renforce le sentiment d'appartenance commune.",
                "Une obligation pour l'audiovisuel : la loi de 1986 (article 3-1, depuis 2006) charge le régulateur de veiller à ce que les programmes reflètent la diversité de la société française ; l'Arcom publie un baromètre de la diversité et recueille les engagements des chaînes.",
                "Des limites : la liberté de la presse et de création interdit d'imposer un contenu à l'avance ; la diversité ne doit pas devenir une juxtaposition de personnages-symboles, autre forme de stéréotype ; la presse écrite et les réseaux sociaux ne sont pas soumis aux mêmes obligations que les chaînes.",
                "Des leviers plutôt que des contraintes : diversité des rédactions et des équipes de création, outils de mesure, éducation aux médias pour former des publics exigeants.",
                "Conclusion : oui, refléter la diversité est un objectif légitime, fixé par la loi pour l'audiovisuel, qui sert la cohésion ; il se réalise surtout par la diversité de ceux qui fabriquent les médias et par l'esprit critique du public, dans le respect de la liberté éditoriale.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Stéréotype", right: "Image simplifiée et figée attribuée à un groupe" },
              { left: "Invisibilisation", right: "Sous-représentation d'un groupe par rapport à sa place dans la société" },
              { left: "Arcom", right: "Autorité de régulation de l'audiovisuel et du numérique créée en 2022" },
              { left: "Baromètre de la diversité", right: "Mesure annuelle de la représentation des groupes sociaux à la télévision" },
              { left: "Test de Bechdel", right: "Deux femmes qui parlent ensemble d'autre chose que d'un homme" },
              { left: "CLEMI", right: "Organisme chargé de l'éducation aux médias et à l'information dans l'Éducation nationale" },
            ],
          },
          quiz: [
            {
              q: "Quel auteur a décrit dès 1922 les stéréotypes comme des « images dans nos têtes » ?",
              options: ["Pierre Bourdieu", "Walter Lippmann", "Émile Durkheim", "Hannah Arendt"],
              answer: 1,
              why: "Walter Lippmann développe cette idée dans Public Opinion, en 1922.",
            },
            {
              q: "Depuis quelle loi le régulateur de l'audiovisuel veille-t-il à ce que les programmes reflètent la diversité de la société française ?",
              options: ["La loi du 29 juillet 1881 sur la presse", "La loi du 9 décembre 1905", "La loi Gayssot du 13 juillet 1990 contre le racisme et le négationnisme", "La loi du 31 mars 2006 pour l'égalité des chances"],
              answer: 3,
              why: "Elle a introduit cette mission à l'article 3-1 de la loi du 30 septembre 1986.",
            },
            {
              q: "De quelle fusion est née l'Arcom en 2022 ?",
              options: ["Du CSA et de la Hadopi", "De la CNIL et du CSA", "De l'ARCEP et de la Hadopi", "Du CLEMI et de la CNIL"],
              answer: 0,
              why: "Le Conseil supérieur de l'audiovisuel et la Haute Autorité pour la diffusion des œuvres et la protection des droits sur internet ont fusionné.",
            },
            {
              q: "Qu'appelle-t-on l'invisibilisation d'un groupe ?",
              options: ["L'interdiction légale de le montrer à l'écran", "Le fait de le représenter uniquement de façon positive", "Sa faible présence dans les médias par rapport à sa place dans la société", "L'anonymisation systématique des personnes filmées dans les reportages d'actualité télévisés"],
              answer: 2,
              why: "Il ne s'agit pas d'une interdiction, mais d'un effet des pratiques médiatiques qui rendent un groupe peu visible.",
            },
            {
              q: "Quel est le rôle de l'Arcom en matière de diversité ?",
              options: ["Choisir à l'avance les personnages des séries télévisées", "Mesurer la diversité et veiller au respect des engagements des chaînes", "Imposer des quotas d'origine dans les rédactions", "Contrôler l'ensemble de la presse écrite et des sites d'information avant toute publication"],
              answer: 1,
              why: "L'Arcom mesure, recueille les engagements et peut mettre en demeure, sans contrôle préalable des contenus.",
            },
          ],
          trap: "Croire que la loi impose aux médias des quotas de minorités ou un contrôle préalable des programmes : le régulateur mesure et veille au respect d'engagements, mais la liberté de communication interdit toute censure a priori.",
          method: "Pour analyser une production médiatique, posez systématiquement quatre questions : qui est montré, qui est absent, dans quels rôles, et qui a la parole ; appuyez ensuite votre analyse sur un chiffre ou un exemple précis.",
        },
      ],
    },
    /* ==================================================================== */
    /* NATION, NATIONALITÉ, CITOYENNETÉ                                      */
    /* ==================================================================== */
    {
      id: 'nation-citoyennete',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'quest-ce-quune-nation',
          title: 'Qu’est-ce qu’une nation ?',
          minutes: 30,
          objectives: [
            "Définir la nation et la distinguer du peuple et de l'État.",
            "Expliquer comment la Révolution française a fait de la nation le fondement de la souveraineté.",
            "Comparer la conception élective de la nation (Renan) et la conception ethnoculturelle.",
            "Analyser le rôle des symboles et de la mémoire dans la construction du sentiment national.",
          ],
          course: [
            {
              heading: "Nation, peuple, État : trois notions à distinguer",
              paragraphs: [
                "Une nation est une communauté humaine qui a conscience de son unité et la volonté de vivre ensemble, en s'appuyant sur une histoire, une mémoire, une culture ou un projet partagés. L'État, lui, est une organisation politique et juridique qui exerce une autorité souveraine sur une population et un territoire délimité. Le peuple désigne, au sens juridique, l'ensemble des citoyens qui détiennent la souveraineté. Ces notions ne coïncident pas toujours.",
                "On parle d'État-nation lorsqu'un État correspond à une nation, ce qui est le modèle de la France depuis la Révolution. Mais il existe des nations sans État (les Kurdes, répartis entre plusieurs États du Moyen-Orient, en sont un exemple souvent cité) et des États qui regroupent plusieurs nations ou communautés nationales, comme la Belgique, la Suisse ou le Royaume-Uni (Angleterre, Écosse, pays de Galles, Irlande du Nord). La nation est donc d'abord une réalité vécue, avant d'être une réalité juridique.",
              ],
              box: { label: "Définition", text: "Nation : communauté consciente de son unité et désireuse de vivre ensemble. État : organisation politique souveraine sur un territoire et une population. Peuple : ensemble des citoyens titulaires de la souveraineté. État-nation : État dont les frontières coïncident avec une nation." },
            },
            {
              heading: "La nation souveraine, une invention révolutionnaire",
              paragraphs: [
                "Sous la monarchie absolue, la souveraineté appartient au roi. En janvier 1789, l'abbé Sieyès publie le pamphlet Qu'est-ce que le tiers état ?, où il définit la nation comme un corps d'associés vivant sous une loi commune et représentés par la même assemblée. Le 17 juin 1789, les députés du tiers état se proclament Assemblée nationale. La DDHC affirme ensuite, dans son article 3, que « le principe de toute souveraineté réside essentiellement dans la Nation » : le pouvoir ne vient plus de Dieu ni du roi, mais de l'ensemble des citoyens.",
                "La nation se manifeste par des moments de communion : la fête de la Fédération, le 14 juillet 1790, rassemble à Paris des délégations venues de toute la France pour jurer fidélité à la nation, à la loi et au roi. À la bataille de Valmy, le 20 septembre 1792, les soldats de la Révolution combattent aux cris de « Vive la nation ! ». Aujourd'hui, l'article 3 de la Constitution de 1958 dispose que « la souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum ».",
              ],
              box: { label: "Repère", text: "Janvier 1789 : Sieyès, Qu'est-ce que le tiers état ? 17 juin 1789 : Assemblée nationale. 26 août 1789 : DDHC, article 3. 14 juillet 1790 : fête de la Fédération. 1958 : article 3 de la Constitution." },
            },
            {
              heading: "Deux conceptions de la nation",
              paragraphs: [
                "Au début du XIXe siècle, des penseurs allemands comme Herder puis Fichte, dans ses Discours à la nation allemande (1807-1808), insistent sur la langue, la culture et les origines communes : la nation existerait avant la volonté des individus, comme une communauté de culture héritée. Cette conception dite ethnoculturelle a nourri les mouvements d'unification nationale, mais aussi, dans ses formes extrêmes, des nationalismes fondés sur l'exclusion de ceux qui n'appartiendraient pas à la « communauté d'origine ».",
                "Après l'annexion de l'Alsace et d'une partie de la Lorraine par l'Empire allemand en 1871, justifiée notamment par la langue et la culture de leurs habitants, Ernest Renan prononce à la Sorbonne, le 11 mars 1882, la conférence « Qu'est-ce qu'une nation ? ». Il y écarte la race, la langue, la religion et la géographie comme fondements suffisants : la nation repose selon lui sur un riche héritage de souvenirs et sur le consentement actuel à vivre ensemble. Il résume cette idée par une formule célèbre : l'existence d'une nation est « un plébiscite de tous les jours ».",
                "Cette opposition est une simplification utile, à nuancer. Renan accorde une grande place au passé partagé, et la conception française a aussi cherché l'unité culturelle : l'école de la Troisième République a imposé le français au détriment des langues régionales. Les nations réelles combinent toujours un héritage et une volonté.",
              ],
              box: { label: "À retenir", text: "Conception ethnoculturelle : la nation est héritée (langue, culture, origine). Conception élective ou civique (Renan, 1882) : la nation est choisie, fondée sur la mémoire partagée et la volonté de vivre ensemble." },
            },
            {
              heading: "Symboles, mémoire et sentiment national",
              paragraphs: [
                "Une nation se reconnaît dans des symboles. L'article 2 de la Constitution en fixe plusieurs : le drapeau tricolore, né pendant la Révolution ; la Marseillaise, composée par Rouget de Lisle en 1792 et proclamée hymne national en 1795 ; la devise « Liberté, Égalité, Fraternité ». Le 14 juillet est la fête nationale depuis la loi du 6 juillet 1880. Marianne, figure féminine de la République, orne les mairies, les timbres et le sceau de l'État. Ces symboles sont protégés : l'outrage au drapeau ou à l'hymne lors d'une manifestation organisée par une autorité publique est puni par la loi.",
                "Le politologue Benedict Anderson a décrit les nations comme des « communautés imaginées » (1983) : aucun citoyen ne connaîtra jamais la plupart des autres membres de sa nation, mais tous se représentent comme liés par une appartenance commune. L'école, la langue commune, la presse, le service militaire autrefois, les commémorations et le sport contribuent à entretenir ce sentiment. Il faut distinguer le patriotisme, attachement à sa nation compatible avec le respect des autres, et le nationalisme, qui peut devenir exclusif et hostile aux autres nations ou à une partie de sa propre population.",
              ],
            },
          ],
          keyPoints: [
            "La nation est une communauté consciente de son unité ; l'État, une organisation politique souveraine ; le peuple, l'ensemble des citoyens.",
            "DDHC, article 3 : la souveraineté réside essentiellement dans la Nation (fin de la souveraineté royale).",
            "Conception ethnoculturelle (Herder, Fichte) : nation héritée, fondée sur la langue et la culture.",
            "Renan, 11 mars 1882 : la nation repose sur un héritage de souvenirs et le consentement, « un plébiscite de tous les jours ».",
            "Symboles : drapeau, Marseillaise (hymne en 1795), devise, 14 juillet (fête nationale depuis 1880), Marianne.",
            "Patriotisme (attachement compatible avec le respect des autres) et nationalisme (risque d'exclusion).",
          ],
          example: {
            statement: "Expliquez pourquoi Ernest Renan, en 1882, refuse de fonder la nation sur la langue ou l'origine, et montrez le lien entre sa conférence et le contexte historique.",
            solution: [
              "Rappeler le contexte : en 1871, après la défaite française, l'Empire allemand annexe l'Alsace et une partie de la Lorraine, en invoquant notamment la langue et la culture germaniques de nombreux habitants.",
              "Présenter la thèse de Renan : la race, la langue, la religion, les intérêts ou la géographie ne suffisent pas à faire une nation ; la Suisse, par exemple, forme une nation avec plusieurs langues.",
              "Expliquer sa définition : la nation repose sur deux éléments, un passé commun (un héritage de souvenirs) et un présent fait de consentement, la volonté de continuer à vivre ensemble.",
              "Commenter la formule : « un plébiscite de tous les jours » signifie que la nation dépend de l'adhésion renouvelée de ses membres, comme un vote permanent.",
              "Faire le lien : si la nation repose sur le consentement, les Alsaciens et les Lorrains, qui avaient manifesté leur attachement à la France, ne devaient pas être annexés contre leur volonté.",
              "Conclusion : Renan défend une conception élective de la nation, qui répond aussi à un enjeu politique de son temps, l'annexion de l'Alsace-Moselle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque affirmation selon qu'elle relève plutôt de la conception élective (ou civique) de la nation ou de la conception ethnoculturelle. a) « On appartient à la nation parce qu'on en parle la langue depuis des générations. » b) « Est membre de la nation celui qui adhère à ses principes et veut vivre avec ses concitoyens. » c) « La nation existe avant les individus, comme une communauté de sang et de culture. » d) « La nation dépend de la volonté renouvelée de ses membres. »",
              hint: "Demandez-vous si l'appartenance est présentée comme héritée (langue, culture, origine) ou comme choisie (volonté, adhésion).",
              solution: [
                "a) Conception ethnoculturelle : l'appartenance découle de la langue héritée.",
                "b) Conception élective : l'appartenance découle de l'adhésion et de la volonté.",
                "c) Conception ethnoculturelle : la nation précède les individus et repose sur l'origine.",
                "d) Conception élective : c'est l'idée de Renan, la nation comme « plébiscite de tous les jours ».",
                "Résultat : a et c relèvent de la conception ethnoculturelle ; b et d de la conception élective.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez la différence entre nation, État et peuple à partir des trois cas suivants : a) les Kurdes, répartis entre la Turquie, l'Irak, l'Iran et la Syrie ; b) la Suisse, qui compte quatre langues nationales ; c) la France, où l'article 3 de la Constitution confie la souveraineté nationale au peuple.",
              hint: "Pour chaque cas, demandez-vous s'il existe une communauté consciente de son unité, une organisation politique souveraine, et qui détient la souveraineté.",
              solution: [
                "a) Les Kurdes forment une communauté qui se reconnaît une langue, une histoire et une culture, souvent décrite comme une nation, mais ils ne disposent pas d'un État souverain qui leur soit propre : c'est l'exemple d'une nation sans État.",
                "b) La Suisse est un État souverain dont les citoyens parlent plusieurs langues ; elle montre qu'une nation peut reposer sur une volonté commune plutôt que sur une langue unique.",
                "c) En France, l'État-nation repose sur la souveraineté nationale, que le peuple, c'est-à-dire l'ensemble des citoyens, exerce par ses représentants et par le référendum.",
                "Synthèse : la nation est une communauté vécue, l'État une organisation juridique, le peuple le corps des citoyens souverains ; ils coïncident dans l'État-nation, mais pas partout.",
                "Résultat : les trois notions sont distinctes, comme le montrent la nation sans État, l'État plurilingue et l'État-nation français.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Qu'est-ce qui fait aujourd'hui la nation française ? » Rédigez une réponse argumentée d'une vingtaine de lignes, en mobilisant la conférence de Renan, les textes constitutionnels et des exemples précis.",
              hint: "Organisez votre réponse autour de trois éléments : un héritage (histoire, mémoire, langue), des principes et des institutions (souveraineté, devise, Constitution), une volonté renouvelée (participation, adhésion) ; montrez ce qui les relie.",
              solution: [
                "Introduction : la France se pense depuis la Révolution comme une nation politique ; la question est de savoir ce qui unit aujourd'hui des citoyens d'origines, de croyances et de territoires très divers.",
                "Un héritage partagé : une histoire et une mémoire communes (Révolution, Résistance, grandes conquêtes de droits), une langue commune, celle de la République selon l'article 2 de la Constitution ; Renan parle d'un « riche legs de souvenirs ».",
                "Des principes et des institutions : la souveraineté nationale appartient au peuple (article 3) ; la devise, la laïcité et l'égalité devant la loi définissent un cadre commun qui ne dépend pas de l'origine.",
                "Une volonté renouvelée : pour Renan, la nation est « un plébiscite de tous les jours » ; elle se manifeste par la participation civique (vote, engagement associatif, défense) et par l'accès à la nationalité de personnes nées ailleurs qui adhèrent à ses valeurs.",
                "Nuance : ce sentiment est fragilisé par les fractures sociales et territoriales et par des discours qui réduisent la nation à une origine ; il doit donc être entretenu par l'école, la solidarité et l'égalité réelle.",
                "Conclusion : la nation française unit un héritage, des principes communs et une volonté de vivre ensemble ; c'est ce dernier élément, sans cesse renouvelé, qui lui permet d'intégrer la diversité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'histoire de l'idée de nation.",
            items: [
              "Sieyès publie Qu'est-ce que le tiers état ?",
              "La DDHC affirme que la souveraineté réside dans la Nation",
              "La fête de la Fédération rassemble des délégations de toute la France",
              "La Marseillaise est proclamée hymne national",
              "Fichte prononce ses Discours à la nation allemande",
              "Le 14 juillet devient la fête nationale",
              "Renan prononce la conférence « Qu'est-ce qu'une nation ? »",
            ],
          },
          quiz: [
            {
              q: "Selon l'article 3 de la DDHC, où réside le principe de toute souveraineté ?",
              options: ["Dans la personne du roi", "Dans la volonté de Dieu", "Dans l'assemblée des provinces", "Dans la Nation"],
              answer: 3,
              why: "L'article 3 transfère la souveraineté du roi à la Nation, c'est-à-dire à l'ensemble des citoyens.",
            },
            {
              q: "Par quelle formule Renan définit-il l'existence d'une nation ?",
              options: ["Un plébiscite de tous les jours", "Une communauté de sang et de sol transmise par les ancêtres", "Une langue et une religion communes", "Un territoire aux frontières naturelles"],
              answer: 0,
              why: "Pour Renan, la nation dépend du consentement renouvelé de ses membres, comme un vote quotidien.",
            },
            {
              q: "Dans quel contexte Renan prononce-t-il sa conférence de 1882 ?",
              options: ["Juste après la prise de la Bastille", "Pendant la Première Guerre mondiale, au moment de la bataille de Verdun", "Après l'annexion de l'Alsace-Moselle par l'Empire allemand", "Lors de la création de l'Union européenne"],
              answer: 2,
              why: "L'annexion de 1871, justifiée par la langue et la culture, est à l'arrière-plan de sa réflexion sur le consentement.",
            },
            {
              q: "Qu'est-ce qu'une nation sans État ?",
              options: ["Une nation dont l'État a été dissous par un traité de paix signé entre puissances", "Une communauté nationale qui ne dispose pas d'un État souverain propre", "Un État dont la population ne parle pas une langue commune", "Un territoire administré par une organisation internationale"],
              answer: 1,
              why: "C'est le cas des Kurdes, communauté souvent décrite comme une nation, répartie entre plusieurs États.",
            },
            {
              q: "Depuis quand le 14 juillet est-il la fête nationale ?",
              options: ["Depuis 1790", "Depuis 1880", "Depuis 1945", "Depuis 1958"],
              answer: 1,
              why: "La loi du 6 juillet 1880 en fait la fête nationale ; elle commémore à la fois 1789 et la fête de la Fédération de 1790.",
            },
          ],
          trap: "Croire que la nation se confond avec l'État ou qu'elle se définit par une origine commune : en France, la nation est d'abord une communauté politique fondée sur des principes et sur la volonté de vivre ensemble, ce qui la distingue de l'État, organisation juridique.",
          method: "Pour retenir les deux conceptions de la nation, associez chacune à un auteur, une date et un mot-clé : Fichte, 1807-1808, héritage ; Renan, 1882, consentement. Citez ensuite un exemple qui montre que les nations réelles combinent les deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nationalite-citoyennete',
          title: 'Nationalité et citoyenneté',
          minutes: 30,
          objectives: [
            "Distinguer la nationalité, lien juridique avec un État, et la citoyenneté, participation à la vie politique.",
            "Identifier les modes d'attribution et d'acquisition de la nationalité française.",
            "Énumérer les droits et les devoirs du citoyen.",
            "Expliquer la citoyenneté européenne et la place des étrangers dans la vie de la cité.",
          ],
          course: [
            {
              heading: "Deux notions liées mais distinctes",
              paragraphs: [
                "La nationalité est le lien juridique qui rattache une personne à un État. Elle donne des droits (protection de l'État, y compris à l'étranger, droit de résider sur le territoire) et emporte des devoirs. En France, ses règles figurent dans le Code civil (articles 17 et suivants). La citoyenneté est la qualité de celui qui participe à la vie politique de la cité : elle désigne l'ensemble des droits civils et politiques et des devoirs qui permettent de prendre part aux décisions collectives.",
                "Les deux notions se recouvrent largement, mais pas complètement. Un enfant français a la nationalité, mais ne peut pas encore voter : il n'exerce pas tous les droits du citoyen. À l'inverse, un ressortissant d'un autre État de l'Union européenne qui réside en France n'est pas français, mais il peut voter aux élections municipales et européennes. Et un étranger non européen ne vote pas, mais il bénéficie de droits sociaux et peut participer à la vie associative ou syndicale.",
              ],
              box: { label: "Définition", text: "Nationalité : appartenance juridique d'une personne à un État. Citoyenneté : participation à la vie politique, avec des droits (voter, être élu) et des devoirs (respecter la loi, contribuer aux charges publiques, participer à la défense)." },
            },
            {
              heading: "Comment devient-on français ?",
              paragraphs: [
                "La nationalité peut être attribuée dès la naissance. Par le droit du sang (filiation) : est français l'enfant dont au moins l'un des parents est français, quel que soit son lieu de naissance (article 18 du Code civil). Par le double droit du sol : est français l'enfant né en France d'un parent lui-même né en France (article 19-3). Un enfant né en France de parents étrangers nés à l'étranger n'est donc pas français à la naissance.",
                "La nationalité peut aussi être acquise plus tard. L'enfant né en France de parents étrangers devient français à sa majorité s'il réside en France et y a résidé au moins cinq ans depuis l'âge de onze ans (article 21-7) ; il peut la réclamer par anticipation dès 13 ans avec ses parents, ou dès 16 ans par lui-même. Des règles plus strictes, tenant à la résidence régulière des parents, s'appliquent à Mayotte depuis 2018 et ont été renforcées en 2025. Le conjoint étranger d'un Français peut la demander par déclaration après quatre ans de mariage (article 21-2).",
                "Enfin, la naturalisation est accordée par décret, à la discrétion de l'État, à l'étranger majeur qui réside habituellement en France depuis au moins cinq ans (deux ans après des études supérieures réussies en France). Il doit justifier de son assimilation : connaissance suffisante de la langue, dont le niveau exigé a été relevé par la loi du 26 janvier 2024, de l'histoire, de la culture et de la société françaises, et adhésion aux principes et valeurs de la République ; il signe la charte des droits et devoirs du citoyen français. La double nationalité est admise par la France.",
              ],
              box: { label: "À retenir", text: "Attribution à la naissance : droit du sang (un parent français) ou double droit du sol (né en France d'un parent né en France). Acquisition : naissance et résidence en France, mariage (4 ans), naturalisation par décret (5 ans de résidence en principe)." },
            },
            {
              heading: "Les droits et les devoirs du citoyen",
              paragraphs: [
                "Le citoyen dispose de droits civils (liberté d'expression, de réunion, d'association, droit de propriété, égalité devant la justice), de droits politiques (voter dès 18 ans depuis la loi du 5 juillet 1974, se présenter aux élections, signer une pétition, participer à un référendum) et de droits sociaux garantis par le Préambule de 1946 (protection de la santé, éducation, droit de grève). Les jeunes recensés sont inscrits d'office sur les listes électorales à 18 ans. En France, voter est un droit et un devoir civique, mais n'est pas obligatoire.",
                "Les devoirs sont la contrepartie de ces droits : respecter la loi et les droits d'autrui, contribuer aux dépenses publiques selon ses facultés (article 13 de la DDHC), participer à la défense de la Nation. Le parcours de citoyenneté comprend l'enseignement de défense à l'école, le recensement obligatoire à 16 ans et la journée défense et citoyenneté (JDC). Un citoyen peut aussi être tiré au sort pour être juré d'assises. Au-delà des obligations juridiques, la citoyenneté suppose un engagement : s'informer, débattre, s'impliquer dans la vie associative.",
              ],
              box: { label: "Repère", text: "1789 : DDHC. 1944 : droit de vote des femmes. 1974 : majorité électorale à 18 ans. 1992 : citoyenneté européenne (traité de Maastricht). 1997 : inscription d'office des jeunes sur les listes électorales. 2011 : charte des droits et devoirs du citoyen français." },
            },
            {
              heading: "Citoyenneté européenne et place des étrangers",
              paragraphs: [
                "Le traité de Maastricht, signé le 7 février 1992, crée la citoyenneté de l'Union européenne : est citoyen européen toute personne ayant la nationalité d'un État membre. Cette citoyenneté s'ajoute à la citoyenneté nationale sans la remplacer. Elle donne le droit de circuler et de séjourner librement dans l'Union, la protection consulaire de tout État membre hors de l'Union, et le droit de vote et d'éligibilité aux élections municipales et européennes dans l'État de résidence. En France, l'article 88-3 de la Constitution précise qu'un citoyen européen élu conseiller municipal ne peut être ni maire ni adjoint.",
                "Les étrangers non européens résidant en France n'ont pas le droit de vote aux élections politiques, ce qui fait l'objet d'un débat ancien sur leur participation aux élections locales. Ils participent pourtant à la vie de la cité : ils paient des impôts et des cotisations, peuvent créer une association ou en être dirigeants, être élus délégués syndicaux ou représentants des parents d'élèves. La citoyenneté ne se résume donc pas au vote : elle comprend toutes les formes de participation à la vie commune.",
              ],
            },
          ],
          keyPoints: [
            "Nationalité : lien juridique avec un État ; citoyenneté : participation à la vie politique, avec droits et devoirs.",
            "Attribution à la naissance : droit du sang (article 18) ou double droit du sol (article 19-3).",
            "Acquisition : né en France et résidence de 5 ans depuis 11 ans (à 18 ans), mariage (4 ans), naturalisation par décret.",
            "Droits civils, politiques (vote à 18 ans depuis 1974) et sociaux ; devoirs : loi, impôt, défense (recensement, JDC).",
            "Citoyenneté européenne (Maastricht, 1992) : vote aux municipales et aux européennes dans l'État de résidence.",
            "Les étrangers non européens ne votent pas, mais participent à la vie associative, syndicale et scolaire.",
          ],
          example: {
            statement: "Lina est née en France en 2009 de parents marocains nés au Maroc, et vit en France depuis sa naissance. Est-elle française à la naissance ? Comment et quand peut-elle le devenir ? Pourra-t-elle voter dès qu'elle sera française ?",
            solution: [
              "Vérifier le droit du sang : aucun de ses parents n'est français, l'article 18 ne s'applique pas.",
              "Vérifier le double droit du sol : ses parents ne sont pas nés en France, l'article 19-3 ne s'applique pas. Lina n'est donc pas française à la naissance.",
              "Appliquer le droit du sol différé : née en France, elle y réside depuis plus de cinq ans depuis l'âge de onze ans ; elle deviendra française automatiquement à sa majorité, en 2027 (article 21-7).",
              "Mentionner l'anticipation : elle pouvait réclamer la nationalité par déclaration dès 13 ans avec l'accord de ses parents, ou peut le faire elle-même dès 16 ans, puisqu'elle remplit la condition de résidence.",
              "Distinguer nationalité et citoyenneté : si elle devient française avant 18 ans, elle ne pourra voter qu'à sa majorité ; la nationalité ne donne le droit de vote qu'avec la majorité électorale.",
              "Conclusion : Lina n'est pas française à la naissance ; elle le deviendra au plus tard à 18 ans par le droit du sol, et ne votera qu'à partir de sa majorité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez pour chaque personne si elle peut voter aux prochaines élections municipales en France, en justifiant. a) Paul, 19 ans, français, inscrit sur les listes électorales. b) Elena, 30 ans, de nationalité espagnole, résidant à Lyon et inscrite sur la liste complémentaire. c) Karim, 40 ans, de nationalité algérienne, résidant en France depuis vingt ans. d) Zoé, 16 ans, française.",
              hint: "Vérifiez deux conditions : la nationalité (française ou d'un État de l'Union européenne pour les municipales) et l'âge (18 ans).",
              solution: [
                "a) Oui : Paul est français, majeur et inscrit.",
                "b) Oui : citoyenne européenne résidant en France, Elena peut voter aux municipales et aux européennes (traité de Maastricht, article 88-3 de la Constitution).",
                "c) Non : l'Algérie ne fait pas partie de l'Union européenne ; les étrangers non européens n'ont pas le droit de vote, quelle que soit la durée de leur résidence.",
                "d) Non : Zoé est française, mais n'a pas encore atteint la majorité électorale de 18 ans.",
                "Résultat : Paul et Elena peuvent voter ; Karim et Zoé ne le peuvent pas.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des cas suivants, indiquez si l'enfant est français à la naissance et selon quelle règle. a) Hugo naît au Canada d'une mère française et d'un père canadien. b) Mia naît à Marseille d'un père italien né à Marseille et d'une mère italienne née à Rome. c) Noah naît à Lille de parents sénégalais nés au Sénégal. d) Inès naît à Paris de parents inconnus.",
              hint: "Appliquez successivement le droit du sang (un parent français), le double droit du sol (un parent né en France), puis pensez aux cas particuliers prévus pour éviter qu'un enfant soit sans nationalité.",
              solution: [
                "a) Hugo est français à la naissance par le droit du sang : sa mère est française (article 18), peu importe qu'il soit né à l'étranger. Il peut aussi être canadien.",
                "b) Mia est française à la naissance par le double droit du sol : elle naît en France d'un parent lui-même né en France (article 19-3).",
                "c) Noah n'est pas français à la naissance : aucun parent n'est français ni né en France. Il pourra le devenir à 18 ans, ou par anticipation, s'il remplit la condition de résidence.",
                "d) Inès est française : le Code civil attribue la nationalité à l'enfant né en France de parents inconnus, afin d'éviter l'apatridie.",
                "Résultat : Hugo, Mia et Inès sont français à la naissance ; Noah ne l'est pas, mais pourra le devenir par le droit du sol.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Être citoyen, est-ce seulement avoir la nationalité et voter ? » Rédigez une réponse argumentée d'une vingtaine de lignes en mobilisant les notions de nationalité, de citoyenneté nationale et européenne, et des exemples d'engagement.",
              hint: "Montrez d'abord le lien juridique entre nationalité, droits politiques et vote, puis élargissez : citoyenneté européenne, participation des étrangers, engagement au quotidien.",
              solution: [
                "Introduction : on associe souvent la citoyenneté à la carte d'identité et à la carte électorale ; la question invite à se demander si elle se réduit à ce statut juridique.",
                "Le cœur juridique : en France, les droits politiques complets (voter à toutes les élections, être élu député ou président) sont réservés aux nationaux majeurs ; la nationalité, attribuée ou acquise selon le Code civil, est la porte d'entrée de la citoyenneté nationale.",
                "Une citoyenneté qui dépasse la nationalité : depuis le traité de Maastricht (1992), les citoyens européens votent aux municipales et aux européennes dans leur État de résidence ; les étrangers non européens participent à la vie associative, syndicale ou scolaire.",
                "Une citoyenneté qui dépasse le vote : les devoirs (respecter la loi, payer l'impôt, participer à la défense, être juré) et l'engagement (bénévolat, service civique, débat public, pétition) font aussi vivre la citoyenneté.",
                "Nuance : sans les droits politiques, la participation reste incomplète ; c'est pourquoi le droit de vote des étrangers aux élections locales fait débat.",
                "Conclusion : la nationalité et le vote sont le socle juridique de la citoyenneté, mais être citoyen, c'est aussi exercer des devoirs et s'engager dans la vie commune.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : nationalité et citoyenneté.",
            statements: [
              { text: "Tout enfant né en France est automatiquement français à la naissance.", true: false, why: "Le droit du sol simple n'existe pas en France : il faut un parent français ou un parent né en France, sinon la nationalité s'acquiert plus tard." },
              { text: "Un enfant né à l'étranger d'un parent français est français.", true: true, why: "C'est le droit du sang, prévu à l'article 18 du Code civil." },
              { text: "Un citoyen allemand qui vit à Bordeaux peut voter aux élections municipales.", true: true, why: "La citoyenneté européenne, créée par le traité de Maastricht, ouvre ce droit dans l'État de résidence." },
              { text: "Un citoyen européen élu conseiller municipal en France peut devenir maire.", true: false, why: "L'article 88-3 de la Constitution l'interdit : il ne peut être ni maire ni adjoint." },
              { text: "Le vote est obligatoire pour tous les citoyens français.", true: false, why: "Voter est un droit et un devoir civique, mais l'abstention n'est pas sanctionnée, sauf pour les grands électeurs aux sénatoriales." },
              { text: "La naturalisation est accordée par décret.", true: true, why: "C'est une décision de l'État, qui peut la refuser même si les conditions sont remplies." },
              { text: "La France interdit la double nationalité.", true: false, why: "La France admet la double nationalité ; c'est l'autre État qui peut l'interdire." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que la nationalité ?",
              options: ["Le droit de voter à toutes les élections", "L'appartenance à une communauté culturelle", "Le fait de résider en France de façon régulière depuis au moins cinq ans", "Le lien juridique qui rattache une personne à un État"],
              answer: 3,
              why: "La nationalité est un statut juridique défini par le Code civil ; le droit de vote suppose en outre la majorité.",
            },
            {
              q: "Qu'appelle-t-on le double droit du sol ?",
              options: ["La nationalité attribuée à tout enfant dont au moins l'un des deux parents est de nationalité française", "La nationalité attribuée à l'enfant né en France d'un parent lui-même né en France", "La possibilité de posséder deux nationalités", "La naturalisation accordée après deux ans de résidence"],
              answer: 1,
              why: "C'est la règle de l'article 19-3 du Code civil : deux générations successives nées en France.",
            },
            {
              q: "Quel traité a créé la citoyenneté européenne ?",
              options: ["Le traité de Maastricht (1992)", "Le traité de Rome (1957)", "Le traité de Lisbonne (2007), en vigueur en 2009", "Le traité de Paris (1951)"],
              answer: 0,
              why: "Signé le 7 février 1992, il crée une citoyenneté de l'Union qui s'ajoute à la citoyenneté nationale.",
            },
            {
              q: "Depuis quelle année la majorité électorale est-elle fixée à 18 ans en France ?",
              options: ["1944", "1958", "1981", "1974"],
              answer: 3,
              why: "La loi du 5 juillet 1974 a abaissé la majorité de 21 à 18 ans.",
            },
            {
              q: "Quel devoir fait partie du parcours de citoyenneté des jeunes ?",
              options: ["L'adhésion à un parti politique de son choix", "Le vote obligatoire dès l'âge de seize ans", "Le recensement à 16 ans puis la journée défense et citoyenneté", "Un service militaire obligatoire de dix mois pour tous les jeunes de dix-huit ans"],
              answer: 2,
              why: "Le recensement est obligatoire à 16 ans ; il permet la convocation à la JDC et l'inscription d'office sur les listes électorales.",
            },
          ],
          trap: "Croire qu'il suffit de naître en France pour être français à la naissance : le droit français combine droit du sang et double droit du sol, et l'enfant né en France de parents étrangers nés à l'étranger n'acquiert la nationalité qu'ensuite, en principe à sa majorité.",
          method: "Pour résoudre un cas de nationalité, suivez toujours le même ordre : un parent est-il français ? un parent est-il né en France ? sinon, où et depuis quand l'enfant réside-t-il ? Notez à chaque étape l'article du Code civil appliqué.",
        },
      ],
    },
    /* ==================================================================== */
    /* UNE RÉPUBLIQUE INDIVISIBLE ET DÉCENTRALISÉE                           */
    /* ==================================================================== */
    {
      id: 'republique-indivisible',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'indivisibilite',
          title: 'L’indivisibilité de la République',
          minutes: 30,
          objectives: [
            "Expliquer l'origine révolutionnaire du principe d'indivisibilité de la République.",
            "Identifier ses dimensions : unité de la souveraineté, du peuple, du territoire et de la loi.",
            "Analyser la place des langues régionales au regard de ce principe.",
            "Montrer que l'indivisibilité admet des statuts différenciés, notamment outre-mer.",
          ],
          course: [
            {
              heading: "Un principe né de la Révolution",
              paragraphs: [
                "Sous l'Ancien Régime, le royaume était une mosaïque de provinces aux droits, aux coutumes et aux impôts différents, et la société était divisée en ordres inégaux. La Révolution veut au contraire une nation d'individus égaux soumis à la même loi. La Constitution de 1791 proclame que « le royaume est un et indivisible », et la Convention décrète le 25 septembre 1792 que « la République française est une et indivisible ». En 1793, les Girondins sont accusés de « fédéralisme », c'est-à-dire de vouloir diviser la République.",
                "Le principe est repris par la plupart des constitutions républicaines. L'article 1er de la Constitution de 1958 dispose : « La France est une République indivisible, laïque, démocratique et sociale. » L'indivisibilité ne signifie pas seulement que le territoire ne peut être partagé : elle exprime l'idée qu'il n'existe qu'une seule source du pouvoir, un seul peuple souverain et une même loi pour tous les citoyens, quelle que soit leur origine ou leur région.",
              ],
              box: { label: "Définition", text: "L'indivisibilité de la République signifie qu'il n'existe qu'une seule souveraineté, exercée par un seul peuple composé de citoyens égaux, sur un territoire dont l'intégrité est protégée, et soumis à une même loi votée par le Parlement." },
            },
            {
              heading: "Une souveraineté, un peuple, une loi",
              paragraphs: [
                "Selon l'article 3 de la Constitution, la souveraineté nationale appartient au peuple, et « aucune section du peuple ni aucun individu ne peut s'en attribuer l'exercice ». Il n'existe pas en France de parlements régionaux qui feraient la loi à égalité avec le Parlement national, à la différence des États fédéraux comme l'Allemagne ou les États-Unis : la France est un État unitaire. Seul le Parlement vote la loi, applicable en principe sur tout le territoire.",
                "Le peuple français est unique et composé de citoyens, non de communautés. Le 9 mai 1991, le Conseil constitutionnel a censuré la mention d'un « peuple corse, composante du peuple français » dans une loi sur le statut de la Corse : la Constitution ne connaît que le peuple français, « composé de tous les citoyens français sans distinction d'origine, de race ou de religion ». Pour la même raison, la France ne reconnaît pas de droits collectifs à des minorités : elle protège les droits de chaque individu, y compris son droit de vivre sa culture.",
              ],
              box: { label: "Règle", text: "Article 3 de la Constitution : « Aucune section du peuple ni aucun individu ne peut s'en attribuer l'exercice. » Décision du Conseil constitutionnel du 9 mai 1991 : pas de « peuple corse » distinct du peuple français." },
            },
            {
              heading: "Le français, langue de la République, et les langues régionales",
              paragraphs: [
                "L'unité passe aussi par la langue. L'ordonnance de Villers-Cotterêts (1539) impose le français dans les actes de justice et d'administration. Depuis la révision constitutionnelle du 25 juin 1992, l'article 2 dispose que « la langue de la République est le français », et la loi Toubon du 4 août 1994 en garantit l'usage dans les services publics, le travail, l'enseignement et la consommation. Cette règle permet à chaque citoyen de comprendre la loi et de s'adresser à l'administration dans la même langue.",
                "Les langues régionales (breton, basque, occitan, alsacien, corse, catalan, créoles, langues kanak...) ne sont pas interdites. Depuis 2008, l'article 75-1 de la Constitution dispose qu'elles « appartiennent au patrimoine de la France ». Mais le Conseil constitutionnel a jugé en 1999 que la Charte européenne des langues régionales ou minoritaires était contraire à la Constitution, car elle conférait des droits à des groupes de locuteurs. En 2021, il a censuré une partie de la loi Molac, notamment l'enseignement immersif en langue régionale dans les écoles publiques.",
              ],
              box: { label: "Repère", text: "1539 : ordonnance de Villers-Cotterêts. 1792 : République une et indivisible. 1991 : censure du « peuple corse ». 1992 : le français, langue de la République (article 2). 1999 : Charte des langues régionales jugée contraire à la Constitution. 2008 : article 75-1." },
            },
            {
              heading: "Indivisible, mais pas uniforme",
              paragraphs: [
                "L'indivisibilité n'impose pas un traitement identique de tous les territoires. Outre-mer, les départements et régions régis par l'article 73 (Guadeloupe, Guyane, Martinique, La Réunion, Mayotte) appliquent les lois nationales avec des adaptations ; les collectivités de l'article 74 (comme la Polynésie française ou Wallis-et-Futuna) ont un statut d'autonomie propre. La Nouvelle-Calédonie dispose d'un statut particulier (titre XIII de la Constitution), issu des accords de Matignon (1988) et de Nouméa (1998), avec trois référendums sur l'indépendance organisés en 2018, 2020 et 2021, qui ont tous vu la victoire du « non ».",
                "En métropole, la Corse dispose d'un statut particulier depuis 1982 (la collectivité de Corse, créée en 2018, a remplacé l'ancienne collectivité territoriale et les deux départements), et l'Alsace-Moselle conserve un droit local hérité de la période allemande (1871-1918). Ces différences ne rompent pas l'indivisibilité, car elles sont décidées par le souverain national, dans la Constitution ou la loi. L'article 53 précise d'ailleurs que nulle cession ou adjonction de territoire n'est valable sans le consentement des populations intéressées : l'intégrité du territoire est protégée, mais elle repose aussi sur le consentement.",
              ],
              box: { label: "À retenir", text: "L'indivisibilité interdit de diviser la souveraineté ou le peuple, pas d'adapter les règles aux territoires. Les statuts particuliers (outre-mer, Corse, Alsace-Moselle) sont fixés par la Constitution ou la loi nationales." },
            },
          ],
          keyPoints: [
            "Principe révolutionnaire : la République « une et indivisible » (décret du 25 septembre 1792), repris à l'article 1er de 1958.",
            "Unité de la souveraineté : aucune section du peuple ne peut s'en attribuer l'exercice (article 3) ; la France est un État unitaire.",
            "Unité du peuple : pas de « peuple corse » (Conseil constitutionnel, 1991), pas de droits collectifs reconnus aux minorités.",
            "Article 2 : le français est la langue de la République ; article 75-1 (2008) : les langues régionales appartiennent au patrimoine.",
            "Indivisible mais pas uniforme : outre-mer (articles 73, 74, titre XIII), Corse, Alsace-Moselle.",
          ],
          example: {
            statement: "Une région souhaite que sa langue régionale devienne langue officielle sur son territoire, à égalité avec le français, et que son assemblée puisse voter ses propres lois. Expliquez pourquoi ces deux demandes se heurtent au principe d'indivisibilité.",
            solution: [
              "Rappeler le principe : l'article 1er de la Constitution fait de la France une République indivisible, ce qui implique une seule souveraineté, un seul peuple et une même loi.",
              "Première demande : l'article 2 dispose que la langue de la République est le français ; une langue co-officielle sur une partie du territoire reconnaîtrait des droits particuliers à un groupe de locuteurs, ce que le Conseil constitutionnel a refusé en 1999 à propos de la Charte européenne des langues régionales.",
              "Nuancer : les langues régionales peuvent être enseignées et valorisées, puisqu'elles appartiennent au patrimoine de la France (article 75-1), mais sans devenir langues de la République.",
              "Deuxième demande : la loi est votée par le Parlement national, et aucune section du peuple ne peut s'attribuer l'exercice de la souveraineté (article 3) ; une assemblée régionale qui ferait ses propres lois transformerait la France en État fédéral.",
              "Nuancer encore : les collectivités ont un pouvoir réglementaire et peuvent, dans certains cas, expérimenter des règles (article 72) ; seule une révision de la Constitution pourrait aller plus loin, comme pour la Nouvelle-Calédonie.",
              "Conclusion : en l'état de la Constitution, ces deux demandes portent atteinte à l'unité de la langue de la République et à l'unité de la souveraineté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez quelle dimension de l'indivisibilité est en jeu (souveraineté, peuple, territoire ou langue). a) Le Conseil constitutionnel censure en 1991 la mention d'un « peuple corse ». b) L'article 53 exige le consentement des populations pour toute cession de territoire. c) Seul le Parlement national peut voter la loi. d) Les actes administratifs doivent être rédigés en français.",
              hint: "Associez chaque situation à la notion qu'elle protège : qui détient le pouvoir, qui compose la nation, quelles frontières, quelle langue officielle.",
              solution: [
                "a) Le peuple : il n'existe qu'un seul peuple français, composé de tous les citoyens.",
                "b) Le territoire : son intégrité est protégée et ne peut être modifiée sans consentement.",
                "c) La souveraineté : aucune section du peuple ne peut s'en attribuer l'exercice.",
                "d) La langue : l'article 2 fait du français la langue de la République.",
                "Résultat : a peuple, b territoire, c souveraineté, d langue.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi la France est qualifiée d'État unitaire décentralisé, et non d'État fédéral. Comparez avec l'Allemagne, où chaque Land dispose d'un parlement qui vote des lois et d'une constitution propre.",
              hint: "Demandez-vous qui détient le pouvoir de faire la loi dans chaque pays et quelle est la nature des pouvoirs des collectivités françaises.",
              solution: [
                "En France, il n'existe qu'un seul législateur, le Parlement national ; la souveraineté est une et indivisible (articles 1er et 3 de la Constitution).",
                "Les collectivités territoriales françaises s'administrent librement par des conseils élus (article 72), mais elles n'ont qu'un pouvoir réglementaire, dans le cadre fixé par la loi : elles ne votent pas de lois.",
                "En Allemagne, État fédéral, les Länder ont leur propre constitution, leur parlement et leur gouvernement ; ils votent des lois dans leurs domaines de compétence (par exemple l'éducation).",
                "La France est donc un État unitaire, mais décentralisé, car elle confie des compétences de gestion à des collectivités élues (article 1er : « son organisation est décentralisée »).",
                "Résultat : en France, la décentralisation transfère des compétences administratives sans partager la souveraineté législative, à la différence du fédéralisme allemand.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Reconnaître les langues et les identités régionales menace-t-il l'indivisibilité de la République ? » Rédigez une réponse argumentée d'une vingtaine de lignes, en vous appuyant sur les textes constitutionnels et sur des décisions du Conseil constitutionnel.",
              hint: "Distinguez la reconnaissance culturelle (patrimoine, enseignement) et la reconnaissance de droits collectifs ou d'une souveraineté partagée ; appuyez-vous sur les articles 2, 3 et 75-1 et sur les décisions de 1991, 1999 et 2021.",
              solution: [
                "Introduction : la France est une République indivisible, mais elle est riche de langues et de cultures régionales ; la question est de savoir si les reconnaître affaiblit l'unité nationale.",
                "Ce qui est compatible : depuis 2008, l'article 75-1 dispose que les langues régionales appartiennent au patrimoine de la France ; elles peuvent être enseignées, utilisées dans la vie culturelle et sur la signalisation ; les statuts particuliers de la Corse ou de l'outre-mer montrent que l'unité n'exige pas l'uniformité.",
                "Ce qui est refusé : le Conseil constitutionnel a censuré la notion de « peuple corse » (1991), jugé la Charte européenne des langues régionales contraire à la Constitution parce qu'elle reconnaissait des droits à des groupes (1999), et censuré l'enseignement immersif dans l'école publique (2021), au nom de l'article 2.",
                "Le critère : la République reconnaît des cultures et des droits individuels (chacun peut parler, apprendre et transmettre sa langue), mais refuse des droits collectifs qui diviseraient le peuple ou la souveraineté.",
                "Discussion : certains jugent cette conception trop rigide et y voient une menace pour des langues en déclin ; d'autres estiment qu'elle protège l'égalité de tous les citoyens. Le débat peut être tranché par une révision constitutionnelle, comme l'a montré le statut de la Nouvelle-Calédonie.",
                "Conclusion : reconnaître les langues régionales comme patrimoine ne menace pas l'indivisibilité ; c'est la reconnaissance de droits collectifs ou d'une souveraineté partagée qui la remettrait en cause.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de l'unité de la République.",
            items: [
              "L'ordonnance de Villers-Cotterêts impose le français dans les actes officiels",
              "La Convention proclame la République une et indivisible",
              "La Constitution de la Ve République définit la France comme une République indivisible",
              "Le Conseil constitutionnel censure la mention d'un « peuple corse »",
              "Le français devient la langue de la République dans l'article 2 de la Constitution",
              "La Charte européenne des langues régionales est jugée contraire à la Constitution",
              "L'article 75-1 reconnaît les langues régionales comme patrimoine de la France",
            ],
          },
          quiz: [
            {
              q: "Quel texte proclame en 1792 que la République française est une et indivisible ?",
              options: ["Le Code civil", "La Déclaration des droits de l'homme et du citoyen", "Un décret de la Convention", "La Constitution de 1958"],
              answer: 2,
              why: "Le décret du 25 septembre 1792 l'affirme, quelques jours après la proclamation de la République.",
            },
            {
              q: "Pourquoi le Conseil constitutionnel a-t-il censuré en 1991 la mention d'un « peuple corse » ?",
              options: ["Parce que la Corse n'est pas une collectivité territoriale reconnue par la loi", "Parce que la Constitution ne connaît que le peuple français", "Parce que la mention avait été adoptée par référendum", "Parce que la Corse relève du droit local alsacien"],
              answer: 1,
              why: "Le peuple français est unique et composé de tous les citoyens, sans distinction d'origine.",
            },
            {
              q: "Que dispose l'article 75-1 de la Constitution, introduit en 2008 ?",
              options: ["Que les langues régionales deviennent co-officielles avec le français dans leurs régions d'usage", "Que l'enseignement immersif est obligatoire", "Que la Charte européenne des langues régionales est ratifiée", "Que les langues régionales appartiennent au patrimoine de la France"],
              answer: 3,
              why: "L'article reconnaît une valeur patrimoniale aux langues régionales, sans leur donner le statut de langue officielle.",
            },
            {
              q: "Quel type d'État est la France ?",
              options: ["Un État unitaire décentralisé", "Un État fédéral composé de régions souveraines", "Une confédération d'États", "Un État régional à parlements autonomes"],
              answer: 0,
              why: "Un seul Parlement vote la loi, mais des collectivités élues exercent des compétences de gestion.",
            },
            {
              q: "Quelle collectivité dispose d'un statut particulier issu des accords de Matignon et de Nouméa ?",
              options: ["La Guadeloupe", "La Corse", "La Nouvelle-Calédonie", "La Collectivité européenne d'Alsace"],
              answer: 2,
              why: "Le titre XIII de la Constitution lui est consacré ; trois référendums sur l'indépendance y ont été organisés entre 2018 et 2021.",
            },
          ],
          trap: "Confondre indivisibilité et uniformité : l'indivisibilité interdit de partager la souveraineté ou de diviser le peuple, mais elle permet des statuts différents (outre-mer, Corse, Alsace-Moselle) décidés par la Constitution ou la loi nationales.",
          method: "Pour traiter une question sur l'indivisibilité, partez des quatre dimensions (souveraineté, peuple, territoire, langue), associez à chacune un article de la Constitution et une décision du Conseil constitutionnel, puis montrez les adaptations admises.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decentralisation',
          title: 'La décentralisation et les collectivités territoriales',
          minutes: 30,
          objectives: [
            "Distinguer la déconcentration et la décentralisation.",
            "Identifier les grandes étapes de la décentralisation depuis 1982.",
            "Connaître les principales compétences de la commune, du département et de la région.",
            "Analyser les enjeux démocratiques et les débats liés à l'organisation territoriale.",
          ],
          course: [
            {
              heading: "Déconcentration et décentralisation",
              paragraphs: [
                "La France est longtemps restée un État très centralisé : depuis Bonaparte et la loi de 1800, le préfet, nommé par le pouvoir central, administre le département. La déconcentration consiste à confier des pouvoirs de décision à des représentants de l'État installés sur le territoire (préfets, recteurs d'académie, directions régionales) : c'est toujours l'État qui décide, mais plus près du terrain. Le préfet reste aujourd'hui le représentant de l'État dans le département et la région.",
                "La décentralisation va plus loin : elle transfère des compétences de l'État à des collectivités territoriales, qui ont une personnalité juridique, un budget propre et des organes élus par les habitants. Selon l'article 72 de la Constitution, elles « s'administrent librement par des conseils élus ». Depuis la révision constitutionnelle du 28 mars 2003, l'article 1er précise que l'organisation de la République « est décentralisée ».",
              ],
              box: { label: "Définition", text: "Déconcentration : l'État délègue des pouvoirs à ses propres agents locaux (préfet, recteur). Décentralisation : l'État transfère des compétences à des collectivités territoriales autonomes, dotées de conseils élus et de ressources propres." },
            },
            {
              heading: "Les grandes étapes de la décentralisation",
              paragraphs: [
                "L'acte I est porté par les lois Defferre, dont la loi du 2 mars 1982. Elles suppriment la tutelle a priori du préfet sur les décisions locales, remplacée par un contrôle de légalité a posteriori, et transfèrent le pouvoir exécutif du département et de la région du préfet aux présidents des conseils élus. La région devient une collectivité territoriale de plein exercice, dont le conseil est élu au suffrage universel direct pour la première fois en 1986. Des compétences sont transférées à partir de 1983.",
                "L'acte II est marqué par la révision constitutionnelle de 2003, qui inscrit la décentralisation dans la Constitution, le principe de subsidiarité (confier une compétence à l'échelon le plus pertinent), le droit à l'expérimentation, le référendum local et l'autonomie financière des collectivités (article 72-2). L'acte III comprend la loi MAPTAM de 2014 (création des métropoles), la loi du 16 janvier 2015 qui réduit le nombre de régions métropolitaines de 22 à 13 au 1er janvier 2016, et la loi NOTRe du 7 août 2015, qui supprime la clause générale de compétence des départements et des régions. La loi 3DS de 2022 poursuit ce mouvement.",
              ],
              box: { label: "Repère", text: "1800 : création des préfets. 1982 : lois Defferre (acte I). 1986 : premières élections régionales. 2003 : révision constitutionnelle (acte II). 2014-2015 : métropoles, 13 régions métropolitaines, loi NOTRe (acte III). 2022 : loi 3DS." },
            },
            {
              heading: "Qui fait quoi ? Les compétences des collectivités",
              paragraphs: [
                "La commune (près de 35 000 en France) est l'échelon de proximité. Son conseil municipal, élu pour six ans, élit le maire. Elle gère les écoles maternelles et élémentaires (bâtiments, cantine), l'urbanisme (plan local d'urbanisme, permis de construire), la voirie communale, et le maire y est aussi agent de l'État pour l'état civil (naissances, mariages, décès) et l'organisation des élections. Les communes se regroupent en intercommunalités (communautés de communes, d'agglomération, métropoles) pour gérer ensemble les déchets, l'eau ou les transports.",
                "Le département (101) est l'échelon de la solidarité : son conseil départemental verse le RSA et l'allocation personnalisée d'autonomie, gère l'aide sociale à l'enfance, les collèges et les routes départementales. La région (18, dont 13 en métropole en comptant la Corse) est l'échelon de la stratégie : son conseil régional est chargé des lycées, des transports régionaux (trains express régionaux, cars interurbains), du développement économique, de la formation professionnelle et de l'aménagement du territoire. L'État conserve la justice, la défense, la police nationale, la diplomatie et, pour l'éducation, les programmes et les enseignants.",
              ],
              box: { label: "À retenir", text: "Commune : écoles, urbanisme, état civil. Département : action sociale (RSA, autonomie, enfance), collèges. Région : lycées, transports régionaux, économie, formation professionnelle. État : missions régaliennes, programmes scolaires, enseignants." },
            },
            {
              heading: "Contrôle, démocratie locale et débats",
              paragraphs: [
                "Les collectivités restent soumises à la loi. Le préfet exerce un contrôle de légalité a posteriori : s'il estime qu'une délibération est illégale, il peut la déférer au tribunal administratif, qui peut l'annuler. Les chambres régionales des comptes contrôlent la gestion et les budgets locaux. L'article 72-2 prévoit aussi des dispositifs de péréquation, qui transfèrent des ressources des collectivités les plus riches vers les plus pauvres, afin de préserver l'égalité entre territoires.",
                "La décentralisation rapproche les décisions des citoyens et permet d'adapter les politiques aux réalités locales. Mais elle suscite des débats : enchevêtrement des compétences (le « millefeuille territorial »), dépendance financière des collectivités envers les dotations de l'État depuis la suppression de la taxe d'habitation sur les résidences principales, risque d'inégalités entre territoires riches et pauvres, et faible participation aux élections départementales et régionales, marquées par une très forte abstention en 2021.",
              ],
            },
          ],
          keyPoints: [
            "Déconcentration : l'État agit par ses agents locaux (préfet) ; décentralisation : transfert de compétences à des collectivités élues.",
            "Article 72 : les collectivités s'administrent librement par des conseils élus ; article 1er (2003) : organisation décentralisée.",
            "Acte I (lois Defferre, 1982), acte II (révision de 2003), acte III (métropoles, 13 régions, loi NOTRe, 2014-2015).",
            "Commune : écoles, urbanisme, état civil ; département : solidarités, collèges ; région : lycées, transports, économie.",
            "Contrôle de légalité a posteriori par le préfet et le tribunal administratif ; péréquation entre collectivités.",
          ],
          example: {
            statement: "Les habitants d'une ville se plaignent de trois problèmes : le toit de l'école élémentaire fuit, les trains express régionaux sont souvent en retard, et l'aide sociale à l'enfance manque de places d'accueil. À quelle collectivité doivent-ils s'adresser pour chacun, et pourquoi ?",
            solution: [
              "Identifier la compétence en jeu pour chaque problème : bâtiment scolaire du premier degré, transport ferroviaire régional, protection de l'enfance.",
              "Toit de l'école élémentaire : la commune est propriétaire et responsable des bâtiments des écoles maternelles et élémentaires ; il faut s'adresser à la mairie.",
              "Retards des TER : la région est l'autorité organisatrice des transports ferroviaires régionaux ; elle conventionne l'exploitant et peut exiger de meilleures performances.",
              "Places en aide sociale à l'enfance : le département est chef de file de l'action sociale et gère l'aide sociale à l'enfance ; il faut s'adresser au conseil départemental.",
              "Rappeler le cadre : ces compétences ont été transférées par les lois de décentralisation, et chaque collectivité en répond devant ses électeurs.",
              "Conclusion : commune pour l'école, région pour les TER, département pour l'aide sociale à l'enfance ; connaître ces compétences permet d'interpeller le bon élu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quelle collectivité (commune, département, région) est principalement compétente pour chacun des domaines suivants : a) la construction d'un nouveau lycée ; b) le versement du RSA ; c) la délivrance d'un permis de construire, dans une commune dotée d'un plan local d'urbanisme ; d) l'entretien des collèges ; e) l'enregistrement d'une naissance.",
              hint: "Retenez l'association : école élémentaire et urbanisme pour la commune, collège et solidarités pour le département, lycée et transports pour la région.",
              solution: [
                "a) La région : elle construit, entretient et équipe les lycées.",
                "b) Le département : il est chargé du revenu de solidarité active.",
                "c) La commune : le maire délivre le permis de construire lorsque la commune a un plan local d'urbanisme.",
                "d) Le département : il est responsable des collèges.",
                "e) La commune : le maire, en tant qu'officier d'état civil, enregistre les naissances.",
                "Résultat : a région, b département, c commune, d département, e commune.",
              ],
            },
            {
              level: 2,
              statement: "Classez chaque acteur selon qu'il relève de la déconcentration ou de la décentralisation, puis expliquez comment le préfet peut réagir si un conseil municipal adopte une délibération qu'il estime illégale. Acteurs : a) le préfet de région ; b) le conseil régional ; c) le recteur d'académie ; d) le maire, lorsqu'il vote le budget communal avec son conseil.",
              hint: "Demandez-vous si l'acteur est nommé par l'État et agit en son nom, ou s'il est élu et agit au nom d'une collectivité. Pour la seconde question, pensez au contrôle de légalité.",
              solution: [
                "a) Le préfet de région, nommé par le gouvernement, représente l'État : déconcentration.",
                "b) Le conseil régional, élu par les habitants, administre la collectivité régionale : décentralisation.",
                "c) Le recteur, nommé par l'État, dirige les services de l'Éducation nationale dans l'académie : déconcentration.",
                "d) Le maire, élu, qui vote le budget avec le conseil municipal, agit au nom de la commune : décentralisation (il est aussi agent de l'État pour l'état civil).",
                "Réaction du préfet : depuis 1982, il n'approuve plus les décisions à l'avance ; il exerce un contrôle de légalité a posteriori et peut déférer la délibération au tribunal administratif, qui peut l'annuler.",
                "Résultat : a et c relèvent de la déconcentration, b et d de la décentralisation ; le préfet saisit le juge administratif.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Dans un département rural, le conseil départemental ouvre des permanences sociales itinérantes, tandis que la région finance des lignes de cars pour relier les villages aux lycées. Pourtant, aux dernières élections départementales et régionales, moins d'un électeur sur trois s'est déplacé dans ce territoire. » En vous appuyant sur le document et sur vos connaissances, montrez que la décentralisation rapproche la décision publique des citoyens, mais que ce rapprochement reste incomplet.",
              hint: "Construisez deux parties : ce que la décentralisation permet (compétences adaptées au terrain, élus de proximité), puis ses limites (participation, complexité, inégalités) ; proposez une conclusion nuancée.",
              solution: [
                "Introduction : depuis les lois Defferre de 1982, des compétences importantes sont exercées par des collectivités élues ; le document montre à la fois leur utilité et la faible mobilisation des électeurs.",
                "Un rapprochement réel : le département, chargé de l'action sociale, adapte son action à un territoire rural (permanences itinérantes) ; la région, compétente pour les transports et les lycées, organise les dessertes scolaires. Les décisions sont prises par des élus qui connaissent le terrain, selon le principe de subsidiarité inscrit dans la Constitution en 2003.",
                "Des outils de participation : référendum local, consultations, conseils de quartier ou de jeunes permettent aux habitants de s'exprimer entre deux élections.",
                "Des limites : la très faible participation aux élections départementales et régionales montre que beaucoup de citoyens connaissent mal ces collectivités ; l'enchevêtrement des compétences (le « millefeuille territorial ») brouille les responsabilités ; les écarts de ressources entre territoires, seulement en partie corrigés par la péréquation, créent des inégalités.",
                "Des pistes : clarifier les compétences, mieux informer les citoyens sur le rôle de chaque collectivité, développer la participation locale.",
                "Conclusion : la décentralisation rapproche la décision du terrain et des élus de proximité, mais le rapprochement avec les citoyens reste inachevé tant que ceux-ci ne s'approprient pas ces institutions.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque acteur à son rôle.",
            pairs: [
              { left: "Commune", right: "État civil, écoles maternelles et élémentaires, plan local d'urbanisme" },
              { left: "Département", right: "RSA, aide sociale à l'enfance, collèges" },
              { left: "Région", right: "Lycées, trains express régionaux, développement économique" },
              { left: "Intercommunalité", right: "Coopération entre communes pour les déchets, l'eau ou les transports" },
              { left: "Préfet", right: "Représentant de l'État, contrôle de légalité des actes locaux" },
              { left: "Chambre régionale des comptes", right: "Contrôle des budgets et de la gestion des collectivités" },
            ],
          },
          quiz: [
            {
              q: "Quelle loi engage en 1982 l'acte I de la décentralisation ?",
              options: ["La loi Defferre du 2 mars 1982", "La loi NOTRe sur la nouvelle organisation territoriale", "La loi MAPTAM", "La loi 3DS"],
              answer: 0,
              why: "Elle supprime la tutelle a priori du préfet et transfère l'exécutif départemental et régional aux élus.",
            },
            {
              q: "Quelle collectivité est chargée des collèges ?",
              options: ["La commune", "La région", "L'État, par l'intermédiaire du recteur", "Le département"],
              answer: 3,
              why: "Le département construit et entretient les collèges ; la région s'occupe des lycées, la commune des écoles.",
            },
            {
              q: "Qu'est-ce que la déconcentration ?",
              options: ["Le transfert de compétences à des collectivités élues", "La délégation de pouvoirs de l'État à ses propres agents locaux", "La fusion de plusieurs communes voisines en une seule commune nouvelle dotée d'un maire unique", "La suppression des départements au profit des régions"],
              answer: 1,
              why: "Avec la déconcentration, c'est toujours l'État qui décide, par ses représentants sur le territoire comme le préfet.",
            },
            {
              q: "Comment s'exerce aujourd'hui le contrôle de l'État sur les actes des collectivités ?",
              options: ["Par une autorisation préalable du préfet pour chaque décision", "Par un vote du Parlement sur chaque budget local", "Par un contrôle de légalité a posteriori, avec saisine possible du juge", "Par une validation systématique de chaque délibération locale par le Conseil constitutionnel"],
              answer: 2,
              why: "Depuis 1982, la tutelle a priori a disparu ; le préfet peut déférer un acte illégal au tribunal administratif.",
            },
            {
              q: "Combien la France métropolitaine compte-t-elle de régions depuis le 1er janvier 2016 ?",
              options: ["22", "13", "18", "27"],
              answer: 1,
              why: "La loi du 16 janvier 2015 a réduit leur nombre de 22 à 13 ; avec les cinq régions d'outre-mer, la France en compte 18.",
            },
          ],
          trap: "Confondre déconcentration et décentralisation : le préfet et le recteur sont des agents de l'État (déconcentration), tandis que le maire, le président du conseil départemental et celui du conseil régional sont des élus qui dirigent des collectivités autonomes (décentralisation).",
          method: "Construisez un tableau à trois colonnes (commune, département, région) avec, pour chacune, son assemblée élue, son exécutif, et trois compétences ; ajoutez une quatrième colonne pour ce que garde l'État. Un tableau se mémorise mieux qu'une liste.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉFENDRE LA NATION                                                    */
    /* ==================================================================== */
    {
      id: 'defense-securite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'defense-securite-nationale',
          title: 'La défense et la sécurité nationale',
          minutes: 30,
          objectives: [
            "Définir la défense nationale et la sécurité nationale, et expliquer le passage de l'une à l'autre.",
            "Identifier le rôle des institutions dans les décisions de défense (Président, Gouvernement, Parlement).",
            "Décrire les moyens de la défense française : armées, dissuasion nucléaire, alliances.",
            "Expliquer la place du citoyen dans la défense, du recensement à l'engagement.",
          ],
          course: [
            {
              heading: "De la défense nationale à la sécurité nationale",
              paragraphs: [
                "L'ordonnance du 7 janvier 1959 pose une conception globale de la défense : elle a pour objet d'assurer en tout temps, en toutes circonstances et contre toutes les formes d'agression, la sécurité et l'intégrité du territoire ainsi que la vie de la population. La défense n'est donc pas seulement militaire : elle a aussi des dimensions civile (continuité de l'État, protection des populations) et économique (approvisionnement en énergie, industrie de défense).",
                "Le Livre blanc sur la défense et la sécurité nationale de 2008 élargit encore cette approche avec la notion de sécurité nationale, inscrite dans le Code de la défense en 2009. La stratégie de sécurité nationale vise à identifier l'ensemble des menaces et des risques susceptibles d'affecter la vie de la Nation (agressions armées, terrorisme, cyberattaques, pandémies, catastrophes naturelles ou technologiques) et à déterminer les réponses des pouvoirs publics. Elle repose sur l'idée d'un continuum entre sécurité intérieure et sécurité extérieure. La Revue nationale stratégique de 2022, actualisée en 2025, en fixe les orientations.",
              ],
              box: { label: "Définition", text: "La défense nationale protège le territoire, la population et les intérêts de la Nation contre toute agression. La sécurité nationale englobe la défense et la sécurité intérieure pour faire face à l'ensemble des menaces et des risques, militaires ou non, qui pèsent sur la vie de la Nation." },
            },
            {
              heading: "Qui décide ? Les institutions de la défense",
              paragraphs: [
                "La Constitution de 1958 organise les responsabilités. Le Président de la République est « le garant de l'indépendance nationale, de l'intégrité du territoire et du respect des traités » (article 5) ; il est « le chef des armées » et préside les conseils de défense (article 15). Il décide de l'emploi de l'arme nucléaire. Le Gouvernement « dispose de l'administration et de la force armée » (article 20), et le Premier ministre est « responsable de la défense nationale » (article 21). Le Conseil de défense et de sécurité nationale, présidé par le chef de l'État, prend les grandes décisions.",
                "Le Parlement autorise la déclaration de guerre (article 35), vote le budget des armées et les lois de programmation militaire, comme celle de 2023 qui prévoit 413 milliards d'euros pour la période 2024-2030. Depuis la révision constitutionnelle de 2008, le Gouvernement doit l'informer de toute intervention des forces armées à l'étranger au plus tard trois jours après son début ; si l'intervention dure plus de quatre mois, sa prolongation doit être autorisée par le Parlement.",
              ],
              box: { label: "Règle", text: "Article 15 : le Président est le chef des armées. Article 21 : le Premier ministre est responsable de la défense nationale. Article 35 : le Parlement autorise la déclaration de guerre ; il est informé sous trois jours d'une intervention extérieure et autorise sa prolongation au-delà de quatre mois." },
            },
            {
              heading: "Les moyens de la défense française",
              paragraphs: [
                "Les armées comprennent l'armée de Terre, la Marine nationale et l'armée de l'Air et de l'Espace (ainsi nommée depuis 2020), auxquelles s'ajoutent la gendarmerie nationale, force armée placée pour l'essentiel de ses missions sous l'autorité du ministre de l'Intérieur, et des services de renseignement. Les armées protègent le territoire national (opération Sentinelle, lancée en janvier 2015 après les attentats), interviennent à l'extérieur et participent aux secours en cas de catastrophe.",
                "La dissuasion nucléaire, dont le premier essai date de 1960, est la clé de voûte de la défense française. Elle repose sur deux composantes, océanique (sous-marins lanceurs d'engins) et aéroportée (avions Rafale), et vise à dissuader tout État de s'en prendre aux intérêts vitaux de la France. La France agit aussi avec ses alliés : membre fondateur de l'OTAN (1949), elle quitte son commandement intégré en 1966 et le réintègre en 2009 ; au sein de l'Union européenne, elle a invoqué pour la première fois la clause d'assistance mutuelle (article 42.7 du traité sur l'Union européenne) après les attentats du 13 novembre 2015.",
              ],
              box: { label: "Repère", text: "1949 : traité de l'Atlantique Nord. 1959 : ordonnance sur la défense globale. 1960 : premier essai nucléaire. 1966 : retrait du commandement intégré de l'OTAN. 1997 : suspension du service national. 2009 : retour dans le commandement intégré. 2015 : opération Sentinelle." },
            },
            {
              heading: "Le citoyen et la défense",
              paragraphs: [
                "Le service militaire obligatoire n'a pas été supprimé, mais suspendu par la loi du 28 octobre 1997 : les armées sont devenues professionnelles. Il a été remplacé par un parcours de citoyenneté : l'enseignement de défense dans les programmes scolaires, le recensement obligatoire de tous les jeunes Français dans les trois mois qui suivent leurs 16 ans, puis la journée défense et citoyenneté (JDC). L'attestation de recensement, puis le certificat de participation à la JDC, sont exigés jusqu'à 25 ans pour s'inscrire aux examens et concours soumis au contrôle de l'autorité publique, comme le baccalauréat.",
                "Chaque citoyen peut aussi s'engager : comme militaire de carrière ou sous contrat, dans la réserve opérationnelle (des civils formés qui renforcent les forces armées et la gendarmerie, regroupés depuis 2016 dans la Garde nationale), ou par d'autres formes de service à la collectivité. La défense repose enfin sur l'esprit de défense, c'est-à-dire la conscience que la sécurité de la Nation est l'affaire de tous, et sur la résilience de la société, sa capacité à résister à une crise et à se relever.",
              ],
            },
          ],
          keyPoints: [
            "Ordonnance de 1959 : défense globale (militaire, civile, économique) contre toutes les formes d'agression.",
            "Livre blanc de 2008 : la sécurité nationale englobe défense et sécurité intérieure face à tous les risques.",
            "Président chef des armées (article 15), Premier ministre responsable de la défense (article 21), Parlement (article 35).",
            "Dissuasion nucléaire à deux composantes ; OTAN (1949, commandement intégré quitté en 1966, réintégré en 2009).",
            "Service national suspendu en 1997 : recensement à 16 ans, JDC, réserve opérationnelle et Garde nationale.",
          ],
          example: {
            statement: "Expliquez pourquoi on est passé, en France, de la notion de défense nationale à celle de sécurité nationale, en vous appuyant sur un exemple.",
            solution: [
              "Rappeler la notion de départ : depuis l'ordonnance de 1959, la défense est déjà globale, mais elle est pensée d'abord face à une agression armée contre le territoire, dans le contexte de la guerre froide.",
              "Identifier le changement : à partir des années 1990 et 2000, les menaces se diversifient (terrorisme, cyberattaques, pandémies, catastrophes, criminalité organisée) et ne distinguent plus l'intérieur et l'extérieur.",
              "Présenter la réponse : le Livre blanc de 2008 introduit la sécurité nationale, qui englobe la défense et la sécurité intérieure, inscrite dans le Code de la défense en 2009.",
              "Donner un exemple : après les attentats de janvier 2015, l'opération Sentinelle déploie des militaires sur le territoire national, aux côtés des forces de sécurité intérieure ; la menace terroriste, liée à des groupes implantés à l'étranger, frappe en France.",
              "Ajouter un second exemple : une cyberattaque contre un hôpital peut venir de l'étranger et menacer la vie de la population sans aucun acte militaire classique.",
              "Conclusion : la notion de sécurité nationale répond à des menaces qui ne connaissent plus la frontière entre l'intérieur et l'extérieur et qui exigent la mobilisation de tous les moyens de l'État.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque responsabilité à l'institution qui l'exerce selon la Constitution : a) être le chef des armées ; b) autoriser la déclaration de guerre ; c) être responsable de la défense nationale ; d) disposer de la force armée ; e) voter la loi de programmation militaire. Institutions : Président de la République, Premier ministre, Gouvernement, Parlement.",
              hint: "Reprenez les articles 15, 20, 21 et 35 de la Constitution ; une institution peut apparaître deux fois.",
              solution: [
                "a) Le Président de la République (article 15).",
                "b) Le Parlement (article 35).",
                "c) Le Premier ministre (article 21).",
                "d) Le Gouvernement (article 20).",
                "e) Le Parlement, qui vote les lois, dont les lois de programmation militaire et le budget des armées.",
                "Résultat : a Président, b Parlement, c Premier ministre, d Gouvernement, e Parlement.",
              ],
            },
            {
              level: 2,
              statement: "Situation fictive. Le Président de la République décide d'engager des forces armées à l'étranger ; l'intervention commence le 1er mars. a) Avant quelle date le Gouvernement doit-il informer le Parlement ? b) L'information du Parlement donne-t-elle lieu à un vote ? c) À partir de quelle date l'intervention ne peut-elle se poursuivre qu'avec l'autorisation du Parlement ? d) Expliquez ce que cette règle, introduite en 2008, apporte à la démocratie.",
              hint: "Relisez l'article 35 : trois jours pour l'information, quatre mois pour l'autorisation.",
              solution: [
                "a) Au plus tard trois jours après le début de l'intervention, soit le 4 mars au plus tard.",
                "b) Non : l'information peut donner lieu à un débat, mais celui-ci n'est suivi d'aucun vote.",
                "c) Quatre mois après le 1er mars, soit à partir du 1er juillet : la prolongation au-delà de cette durée doit être autorisée par le Parlement.",
                "d) Avant 2008, l'exécutif pouvait engager les forces armées à l'étranger sans contrôle formel du Parlement ; la règle associe les représentants de la Nation aux décisions les plus graves et renforce le contrôle démocratique, tout en laissant à l'exécutif la rapidité de décision.",
                "Résultat : information au plus tard le 4 mars, sans vote ; autorisation parlementaire nécessaire pour poursuivre au-delà du 1er juillet.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Depuis la suspension du service militaire, la défense de la Nation concerne-t-elle encore tous les citoyens ? » Rédigez une réponse argumentée d'une vingtaine de lignes, en mobilisant vos connaissances sur le parcours de citoyenneté, la sécurité nationale et l'engagement.",
              hint: "Partez de la professionnalisation des armées (1997), puis montrez que la défense reste l'affaire de tous : parcours de citoyenneté, réserve, résilience face à des menaces qui touchent toute la société.",
              solution: [
                "Introduction : depuis la loi du 28 octobre 1997, le service militaire est suspendu et les armées sont professionnelles ; on pourrait en conclure que la défense est devenue l'affaire de spécialistes.",
                "Une défense confiée à des professionnels : les opérations militaires, la dissuasion nucléaire et le renseignement exigent des compétences spécialisées ; la majorité des citoyens ne porte plus les armes.",
                "Mais un lien maintenu par le parcours de citoyenneté : enseignement de défense, recensement obligatoire à 16 ans, journée défense et citoyenneté ; le service national n'est que suspendu et pourrait être rétabli par la loi.",
                "Des possibilités d'engagement : la réserve opérationnelle et la Garde nationale (2016) permettent à des civils de renforcer les forces armées et la gendarmerie ; d'autres formes d'engagement servent la résilience (secours, associations).",
                "Des menaces qui touchent toute la société : la sécurité nationale intègre le terrorisme, les cyberattaques et la désinformation ; la vigilance, l'hygiène numérique et l'esprit critique de chaque citoyen deviennent des éléments de défense.",
                "Conclusion : la défense militaire est confiée à des professionnels, mais la sécurité de la Nation reste l'affaire de tous, par le parcours de citoyenneté, l'engagement et la résilience collective.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la défense française.",
            items: [
              "La France est membre fondateur de l'OTAN",
              "Une ordonnance définit la défense globale",
              "La France réalise son premier essai nucléaire",
              "La France quitte le commandement intégré de l'OTAN",
              "Le service militaire obligatoire est suspendu",
              "Un Livre blanc introduit la notion de sécurité nationale",
              "L'opération Sentinelle est lancée sur le territoire national",
            ],
          },
          quiz: [
            {
              q: "Selon la Constitution, qui est le chef des armées ?",
              options: ["Le Président de la République", "Le Premier ministre", "Le ministre des Armées", "Le chef d'état-major des armées"],
              answer: 0,
              why: "L'article 15 en fait le chef des armées ; il préside les conseils de défense et décide de l'emploi de l'arme nucléaire.",
            },
            {
              q: "Quel document a introduit en 2008 la notion de sécurité nationale ?",
              options: ["La Constitution de 1958", "L'ordonnance de 1959 sur l'organisation générale de la défense", "Le Livre blanc sur la défense et la sécurité nationale", "Le traité de l'Atlantique Nord"],
              answer: 2,
              why: "Le Livre blanc de 2008 a élargi la défense à l'ensemble des menaces et des risques ; la notion est entrée dans le Code de la défense en 2009.",
            },
            {
              q: "Que prévoit l'article 35 pour une intervention militaire à l'étranger qui dure plus de quatre mois ?",
              options: ["Un référendum national", "Un avis du Conseil constitutionnel", "Une décision du Conseil de sécurité de l'ONU", "Une autorisation du Parlement"],
              answer: 3,
              why: "Depuis 2008, la prolongation au-delà de quatre mois doit être autorisée par le Parlement.",
            },
            {
              q: "Quel est le statut du service militaire obligatoire depuis la loi de 1997 ?",
              options: ["Il est suspendu", "Il est supprimé de façon définitive par la Constitution", "Il est réservé aux volontaires de plus de 25 ans", "Il a été remplacé par un service de dix-huit mois"],
              answer: 0,
              why: "Il est suspendu et non aboli : la loi pourrait le rétablir ; le recensement et la JDC subsistent.",
            },
            {
              q: "Sur quelles composantes repose la dissuasion nucléaire française ?",
              options: ["Des missiles terrestres implantés sur le plateau d'Albion", "Des sous-marins et des avions", "Des missiles prêtés par les États-Unis", "Des bombardiers stationnés chez les alliés"],
              answer: 1,
              why: "Elle repose sur une composante océanique (sous-marins lanceurs d'engins) et une composante aéroportée (Rafale) ; les missiles du plateau d'Albion ont été démantelés dans les années 1990.",
            },
          ],
          trap: "Croire que le service militaire a été supprimé et que la défense ne concerne plus les civils : il est seulement suspendu depuis 1997, le recensement et la JDC sont obligatoires, et la sécurité nationale mobilise toute la société.",
          method: "Pour réviser les institutions de la défense, mémorisez quatre numéros d'articles avec un verbe : 15 commander (Président), 20 disposer (Gouvernement), 21 être responsable (Premier ministre), 35 autoriser (Parlement).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'menaces-hybrides',
          title: 'Guerres hybrides et nouvelles menaces',
          minutes: 30,
          objectives: [
            "Définir la guerre hybride et la notion de « zone grise ».",
            "Identifier les nouveaux espaces de conflictualité : cyberespace, espace extra-atmosphérique, fonds marins, champ informationnel.",
            "Analyser un exemple d'ingérence ou de manipulation de l'information.",
            "Expliquer les réponses de l'État et le rôle des citoyens face à ces menaces.",
          ],
          course: [
            {
              heading: "Des menaces qui se diversifient",
              paragraphs: [
                "Après la fin de la guerre froide, on a pu croire les guerres entre États appelées à disparaître en Europe. Les menaces se sont pourtant multipliées : le terrorisme jihadiste a frappé la France à plusieurs reprises (attentats de janvier et de novembre 2015, de Nice en 2016, assassinats des professeurs Samuel Paty en 2020 et Dominique Bernard en 2023) ; la Russie a annexé la Crimée en 2014 puis envahi l'Ukraine le 24 février 2022, ramenant en Europe une guerre de haute intensité entre États.",
                "Les armées françaises décrivent désormais les relations entre puissances selon trois états : la compétition, permanente, où chacun cherche à accroître son influence ; la contestation, où un adversaire teste la détermination de l'autre sans franchir le seuil de la guerre ; l'affrontement, c'est-à-dire le conflit armé ouvert. Les menaces hybrides se situent surtout dans les deux premiers états.",
              ],
            },
            {
              heading: "La guerre hybride et la zone grise",
              paragraphs: [
                "La guerre hybride, expression popularisée notamment par l'officier et chercheur américain Frank Hoffman en 2007, désigne la combinaison coordonnée de moyens militaires et non militaires, ouverts et clandestins, pour atteindre des objectifs politiques : cyberattaques, campagnes de désinformation, pressions économiques ou énergétiques, recours à des groupes armés non officiels ou à des sociétés militaires privées, sabotages, utilisation détournée du droit. L'agresseur cherche à rester sous le seuil qui déclencherait une riposte militaire et à brouiller l'attribution de ses actes.",
                "On appelle « zone grise » cet espace entre la paix et la guerre, où il est difficile de qualifier l'agression et donc d'y répondre. L'annexion de la Crimée en 2014, menée par des soldats sans insigne et accompagnée d'une intense campagne de propagande, en est un exemple souvent cité. En 2021, la Biélorussie a organisé l'afflux de migrants vers les frontières de la Pologne et de la Lituanie pour faire pression sur l'Union européenne : on parle d'instrumentalisation des flux migratoires.",
              ],
              box: { label: "Définition", text: "Guerre hybride : stratégie qui combine moyens militaires et non militaires (cyber, information, économie, droit, groupes armés non officiels) pour affaiblir un adversaire en restant sous le seuil du conflit ouvert. Zone grise : espace ambigu entre paix et guerre." },
            },
            {
              heading: "Les nouveaux espaces de conflictualité",
              paragraphs: [
                "Le cyberespace est devenu un champ d'affrontement. Les attaques par rançongiciel, qui chiffrent les données d'une organisation pour exiger une rançon, ont visé des entreprises, des collectivités et des hôpitaux, comme le centre hospitalier sud-francilien de Corbeil-Essonnes en août 2022. D'autres attaques visent l'espionnage ou le sabotage. La France s'est dotée de l'Agence nationale de la sécurité des systèmes d'information (ANSSI, 2009), chargée de la protection, et d'un commandement de la cyberdéfense dans les armées (COMCYBER, 2017).",
                "L'espace extra-atmosphérique, dont dépendent les communications, la navigation par satellite et le renseignement, fait l'objet d'une compétition croissante : la France a créé en 2019 un commandement de l'espace. Les fonds marins, où passent les câbles sous-marins qui transportent l'essentiel des communications internet intercontinentales, sont aussi devenus un enjeu stratégique. Enfin, le champ informationnel est le terrain des manipulations : des puissances étrangères diffusent de fausses informations pour diviser les sociétés démocratiques et peser sur leurs choix.",
              ],
              box: { label: "Repère", text: "2009 : création de l'ANSSI. 2014 : annexion de la Crimée. 2017 : COMCYBER. 2019 : commandement de l'espace. 2021 : création de Viginum. 2022 : invasion de l'Ukraine par la Russie. 2024 : loi visant à prévenir les ingérences étrangères." },
            },
            {
              heading: "Se défendre sans renoncer à ses libertés",
              paragraphs: [
                "Pour détecter les manipulations, la France a créé en 2021 Viginum, service de vigilance et de protection contre les ingérences numériques étrangères, rattaché au Secrétariat général de la défense et de la sécurité nationale (SGDSN). Il a par exemple révélé en 2023 la campagne dite RRN ou « Doppelgänger », qui imitait des sites de grands médias français pour diffuser des contenus prorusses, puis en 2024 le réseau « Portal Kombat ». La loi du 22 décembre 2018 permet de faire cesser en urgence, devant le juge, la diffusion massive de fausses informations pendant les campagnes électorales nationales.",
                "La loi du 25 juillet 2024 visant à prévenir les ingérences étrangères impose aux personnes qui exercent des activités d'influence pour le compte d'un mandant étranger de se déclarer dans un registre public. Au niveau européen, le règlement sur les services numériques (DSA) oblige les très grandes plateformes à évaluer et réduire les risques de manipulation. Ces réponses doivent respecter la liberté d'expression : une démocratie se défend en rendant visibles les manipulations et en formant des citoyens critiques, non en contrôlant toutes les opinions.",
              ],
              box: { label: "À retenir", text: "Réponses de l'État : ANSSI et COMCYBER (cyber), Viginum (ingérences numériques), lois de 2018 (manipulation de l'information) et de 2024 (ingérences étrangères). Rôle du citoyen : vérifier avant de partager, protéger ses comptes, signaler." },
            },
          ],
          keyPoints: [
            "Guerre hybride : combinaison de moyens militaires et non militaires, sous le seuil du conflit ouvert, avec une attribution brouillée.",
            "Zone grise : espace ambigu entre paix et guerre (exemples : Crimée en 2014, instrumentalisation des migrants en 2021).",
            "Nouveaux espaces de conflictualité : cyberespace, espace extra-atmosphérique, fonds marins, champ informationnel.",
            "Institutions : ANSSI (2009), COMCYBER (2017), commandement de l'espace (2019), Viginum (2021, SGDSN).",
            "Lois de 2018 (fausses informations en période électorale) et de 2024 (ingérences étrangères) ; DSA européen.",
            "Se défendre en démocratie : rendre visibles les manipulations et former des citoyens critiques, sans censure des opinions.",
          ],
          example: {
            statement: "Situation fictive. Pendant une campagne électorale, des dizaines de sites imitant parfaitement la présentation de grands journaux français publient de faux articles affirmant qu'un candidat prépare la fermeture de tous les hôpitaux de province. Ces articles sont relayés par des milliers de comptes créés le même mois. En quoi cette situation relève-t-elle d'une menace hybride, et quelles réponses sont possibles ?",
            solution: [
              "Identifier le procédé : il s'agit d'une manipulation de l'information, qui usurpe l'identité de médias reconnus pour donner du crédit à une fausse nouvelle.",
              "Relever les indices d'une campagne coordonnée : sites clonés, comptes créés en même temps, diffusion massive et rapide, sujet choisi pour provoquer la peur et la colère.",
              "Expliquer le caractère hybride : l'action vise un objectif politique (peser sur une élection, diviser la société) sans aucun moyen militaire, en restant sous le seuil d'une agression armée, et l'auteur cherche à rester caché.",
              "Présenter les réponses de l'État : Viginum peut détecter et caractériser la campagne, comme pour la campagne RRN révélée en 2023 ; la loi du 22 décembre 2018 permet de saisir le juge des référés pour faire cesser la diffusion pendant la campagne électorale.",
              "Ajouter les autres acteurs : les plateformes, soumises au DSA, doivent agir contre ces risques ; les médias usurpés peuvent porter plainte ; les citoyens peuvent vérifier l'adresse des sites et éviter de partager.",
              "Conclusion : c'est une menace hybride de type informationnel ; la réponse combine détection publique, action du juge, responsabilité des plateformes et vigilance des citoyens.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque situation dans le domaine de menace correspondant : cyber, informationnel, économique, ou spatial. a) Un rançongiciel paralyse le système informatique d'une mairie. b) Un État coupe ses livraisons de gaz à un pays voisin pour le faire céder. c) Un réseau de faux comptes diffuse des rumeurs sur une épidémie. d) Un satellite étranger s'approche dangereusement d'un satellite militaire français.",
              hint: "Demandez-vous quel est le moyen employé : un logiciel malveillant, une dépendance commerciale, un contenu trompeur ou un objet en orbite.",
              solution: [
                "a) Cyber : une attaque informatique qui chiffre les données pour exiger une rançon.",
                "b) Économique : la dépendance énergétique est utilisée comme arme de pression.",
                "c) Informationnel : une manipulation de l'information par de faux comptes.",
                "d) Spatial : une manœuvre dans l'espace extra-atmosphérique, qui peut viser l'espionnage ou l'intimidation.",
                "Résultat : a cyber, b économique, c informationnel, d spatial.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi les menaces hybrides sont difficiles à contrer pour une démocratie, en développant trois difficultés : l'attribution, le seuil de riposte, et le respect des libertés. Illustrez chaque difficulté par un exemple.",
              hint: "Pour chaque difficulté, demandez-vous : sait-on qui agit ? peut-on répondre par la force ? peut-on interdire sans porter atteinte à une liberté ?",
              solution: [
                "L'attribution : l'agresseur agit par des intermédiaires (pirates, faux comptes, groupes non officiels) et dissimule son identité ; il est difficile d'apporter la preuve qu'un État est derrière une cyberattaque ou une campagne de désinformation.",
                "Le seuil de riposte : chaque action, prise isolément, reste en dessous du niveau d'une agression armée ; répondre par la force serait disproportionné et risquerait l'escalade, comme l'a montré l'ambiguïté de l'intervention des soldats sans insigne en Crimée en 2014.",
                "Le respect des libertés : la lutte contre la désinformation ne doit pas devenir une censure des opinions ; c'est pourquoi la loi de 2018 confie au juge, et non au gouvernement, le soin de faire cesser la diffusion de fausses informations, dans des conditions strictes.",
                "Synthèse : les démocraties répondent donc surtout par la détection (Viginum), la transparence (attribution publique, registre des influences étrangères de 2024), la coopération européenne et l'éducation des citoyens.",
                "Résultat : l'attribution incertaine, l'absence de seuil clair et l'exigence de liberté expliquent la difficulté de la riposte.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « Le service de vigilance Viginum a identifié un réseau de plusieurs centaines de sites et de comptes qui reprennent, traduisent et amplifient les contenus de médias d'État étrangers, en ciblant le public français à l'approche d'une élection. » Question : en vous appuyant sur le document et sur vos connaissances, montrez que les ingérences informationnelles constituent une menace pour la démocratie, puis expliquez comment la démocratie peut s'en protéger sans renoncer à ses principes.",
              hint: "Construisez deux parties : en quoi l'ingérence menace le vote libre et la cohésion, puis quelles réponses respectent la liberté d'expression (détection, juge, transparence, éducation).",
              solution: [
                "Introduction : le document décrit une campagne d'ingérence informationnelle coordonnée, typique des menaces hybrides qui visent les sociétés démocratiques.",
                "Une menace pour le vote libre : en diffusant massivement des contenus trompeurs à l'approche d'une élection, une puissance étrangère cherche à orienter le choix des électeurs, alors que la souveraineté appartient au peuple (article 3 de la Constitution).",
                "Une menace pour la cohésion : ces campagnes exploitent les divisions (sujets sensibles, colère sociale) pour accroître la défiance envers les institutions, les médias et les autres citoyens.",
                "Des réponses fondées sur le droit : Viginum détecte et rend publiques les campagnes ; la loi de 2018 permet au juge de faire cesser rapidement la diffusion de fausses informations pendant les campagnes nationales ; la loi de 2024 impose la transparence des activités d'influence étrangères ; le DSA oblige les grandes plateformes à réduire ces risques.",
                "Des réponses fondées sur les citoyens : l'éducation aux médias, la vérification des sources et le pluralisme de l'information rendent la société plus résistante, sans restreindre la liberté d'expression.",
                "Conclusion : les ingérences menacent la souveraineté et la cohésion démocratiques ; la démocratie s'en protège par la transparence, le contrôle du juge et l'esprit critique, et non par la censure.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion ou institution à sa définition.",
            pairs: [
              { left: "Zone grise", right: "Espace ambigu entre la paix et la guerre, où l'agression est difficile à qualifier" },
              { left: "Rançongiciel", right: "Logiciel qui chiffre des données pour exiger une rançon" },
              { left: "Viginum", right: "Service qui détecte les ingérences numériques étrangères" },
              { left: "ANSSI", right: "Agence chargée de la sécurité des systèmes d'information" },
              { left: "Instrumentalisation des migrants", right: "Pousser des migrants vers une frontière pour faire pression sur un État" },
              { left: "Campagne RRN", right: "Faux sites imitant de grands médias pour diffuser de la propagande" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une guerre hybride ?",
              options: ["Une guerre menée uniquement par des drones et des robots, sans aucun soldat engagé sur le terrain", "Une guerre civile entre deux régions d'un même État", "Une alliance militaire entre deux puissances nucléaires", "Une combinaison de moyens militaires et non militaires sous le seuil du conflit ouvert"],
              answer: 3,
              why: "Elle mêle cyberattaques, désinformation, pressions économiques et parfois groupes armés non officiels, en brouillant l'attribution.",
            },
            {
              q: "Quel service, créé en 2021, détecte les ingérences numériques étrangères ?",
              options: ["L'ANSSI", "Viginum", "L'Arcom", "La CNIL"],
              answer: 1,
              why: "Viginum, rattaché au SGDSN, a notamment révélé la campagne RRN en 2023 et le réseau Portal Kombat en 2024.",
            },
            {
              q: "Quel exemple illustre l'instrumentalisation des flux migratoires ?",
              options: ["L'afflux de migrants organisé par la Biélorussie vers la Pologne en 2021", "L'accueil de réfugiés ukrainiens dans l'Union européenne en 2022 grâce à la protection temporaire", "La création de l'espace Schengen en 1985", "Le droit d'asile prévu par le Préambule de 1946"],
              answer: 0,
              why: "La Biélorussie a utilisé des migrants comme moyen de pression sur l'Union européenne.",
            },
            {
              q: "Que permet la loi du 22 décembre 2018 relative à la manipulation de l'information ?",
              options: ["Interdire tout réseau social étranger en France", "Contrôler à l'avance tous les articles de presse", "Supprimer l'anonymat de tous les utilisateurs des réseaux sociaux et des messageries en ligne", "Saisir le juge pour faire cesser la diffusion de fausses informations en période électorale"],
              answer: 3,
              why: "Le juge des référés peut ordonner l'arrêt de la diffusion massive et artificielle de fausses informations pendant les campagnes nationales.",
            },
            {
              q: "Pourquoi l'attribution d'une cyberattaque est-elle difficile ?",
              options: ["Parce que les attaquants dissimulent leur identité et agissent par intermédiaires", "Parce que la loi interdit d'enquêter sur les attaques informatiques venues de l'étranger", "Parce que les cyberattaques ne laissent jamais aucune trace", "Parce que seule l'ONU peut enquêter"],
              answer: 0,
              why: "Les attaquants utilisent des serveurs relais et des groupes écrans, ce qui rend la preuve de l'implication d'un État difficile.",
            },
          ],
          trap: "Croire que la guerre hybride n'est qu'une affaire de militaires ou, à l'inverse, qualifier de « guerre hybride » toute fausse information : elle suppose une stratégie coordonnée, souvent étatique, combinant plusieurs moyens pour un objectif politique.",
          method: "Pour analyser une menace, posez quatre questions : quel moyen (cyber, information, économie, force) ? quel objectif politique ? qui agit et peut-on l'attribuer ? quelle réponse (institution, loi, citoyen) ? Cette grille structure aussi une réponse rédigée.",
        },
      ],
    },
    /* ==================================================================== */
    /* CITOYENNETÉ ET SOCIÉTÉ NUMÉRIQUE                                      */
    /* ==================================================================== */
    {
      id: 'societe-numerique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'information-desinformation',
          title: 'Information et désinformation dans la société numérique',
          minutes: 30,
          objectives: [
            "Distinguer une information vérifiée d'une opinion, d'une rumeur et d'un contenu promotionnel.",
            "Définir la mésinformation, la désinformation et la malinformation.",
            "Expliquer les mécanismes qui favorisent la circulation des fausses informations en ligne.",
            "Appliquer une méthode de vérification et connaître le cadre juridique de la lutte contre la désinformation.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une information ?",
              paragraphs: [
                "Une information, au sens journalistique, est un fait d'intérêt public, vérifié, sourcé et mis en contexte. Elle se distingue de l'opinion (un point de vue argumenté, comme un éditorial ou une tribune), de la rumeur (un récit qui circule sans source vérifiable), et du contenu promotionnel (publicité, contenu sponsorisé, placement de produit), qui doit être signalé comme tel. Dans une démocratie, l'information permet aux citoyens de se forger une opinion éclairée avant de voter ou de débattre.",
                "Le travail du journaliste consiste à vérifier les faits, à recouper les sources (confirmer une information par plusieurs sources indépendantes), à distinguer les faits des commentaires et à rectifier ses erreurs. Ces exigences sont rappelées par des textes déontologiques comme la Déclaration des devoirs et des droits des journalistes, dite charte de Munich (1971), qui place en tête le respect de la vérité et la protection des sources. La loi du 29 juillet 1881 garantit la liberté de la presse, tout en sanctionnant ses abus.",
              ],
              box: { label: "Définition", text: "Information : fait d'intérêt public, vérifié, sourcé et contextualisé. Opinion : point de vue argumenté. Rumeur : récit non vérifié qui circule de bouche à oreille ou de compte en compte. Recouper : confirmer un fait par plusieurs sources indépendantes." },
            },
            {
              heading: "Les désordres de l'information",
              paragraphs: [
                "Un rapport réalisé pour le Conseil de l'Europe en 2017 par Claire Wardle et Hossein Derakhshan propose de distinguer trois formes de « désordre informationnel ». La mésinformation est une information fausse partagée sans intention de nuire, par erreur ou par crédulité. La désinformation est une information fausse créée ou diffusée délibérément pour tromper, nuire ou en tirer profit. La malinformation est une information vraie, mais diffusée pour nuire, par exemple la publication de données privées pour humilier quelqu'un.",
                "Le terme anglais « fake news » est souvent employé de façon vague ; la Commission d'enrichissement de la langue française recommande depuis 2018 « information fallacieuse » ou le mot-valise « infox ». La satire ou la parodie, qui se présentent clairement comme telles, ne sont pas de la désinformation, mais peuvent tromper si elles sont partagées hors contexte. Les hypertrucages (« deepfakes »), images, vidéos ou voix générées ou modifiées par l'intelligence artificielle, rendent la manipulation plus réaliste et plus facile à produire.",
              ],
              box: { label: "À retenir", text: "Mésinformation : faux, sans intention de nuire. Désinformation : faux, avec intention de tromper. Malinformation : vrai, mais diffusé pour nuire. Ce qui distingue les deux premières, c'est l'intention de celui qui diffuse." },
            },
            {
              heading: "Pourquoi les fausses informations circulent-elles si bien ?",
              paragraphs: [
                "Les plateformes numériques vivent de l'attention de leurs utilisateurs, qu'elles revendent aux annonceurs : c'est l'économie de l'attention. Leurs algorithmes de recommandation mettent en avant les contenus qui suscitent le plus de réactions (clics, partages, commentaires), souvent ceux qui provoquent la colère, la peur ou l'indignation. Une étude publiée dans la revue Science en 2018 (Vosoughi, Roy et Aral) a montré que, sur Twitter, les fausses informations se diffusaient plus loin et plus vite que les vraies, en raison notamment de leur caractère nouveau et surprenant.",
                "Nos propres fonctionnements mentaux y contribuent. Le biais de confirmation nous pousse à croire plus facilement ce qui conforte nos convictions. L'essayiste Eli Pariser a décrit en 2011 la « bulle de filtre » : à force de personnaliser les contenus, les algorithmes nous montrent surtout ce qui correspond à nos goûts et à nos opinions. On parle de « chambre d'écho » lorsqu'un groupe n'entend plus que des opinions semblables à la sienne, qui se renforcent mutuellement. Des faux comptes automatisés (« bots ») peuvent aussi amplifier artificiellement un message.",
              ],
            },
            {
              heading: "Vérifier et réguler",
              paragraphs: [
                "Face à un contenu douteux, une méthode simple s'impose avant tout partage : identifier la source (qui publie, avec quelle réputation et quel intérêt ?), vérifier la date et le contexte, rechercher si d'autres médias fiables rapportent la même information (lecture latérale), examiner les images (une recherche d'image inversée permet de retrouver leur origine) et se méfier des titres qui jouent sur l'émotion. Des rubriques de vérification des faits (« fact-checking ») existent dans de nombreux médias, et l'éducation aux médias et à l'information, coordonnée par le CLEMI, enseigne ces réflexes.",
                "Le droit encadre aussi la désinformation. L'article 27 de la loi de 1881 punit la diffusion de mauvaise foi de fausses nouvelles qui troublent ou peuvent troubler la paix publique. La loi du 22 décembre 2018 permet de saisir le juge en urgence contre la diffusion massive de fausses informations pendant les trois mois qui précèdent une élection nationale. Le règlement européen sur les services numériques (DSA), applicable à toutes les plateformes depuis février 2024, les oblige à traiter les signalements de contenus illicites et, pour les plus grandes, à réduire les risques de manipulation. Le règlement européen sur l'intelligence artificielle de 2024 prévoit que les hypertrucages soient signalés comme tels.",
              ],
              box: { label: "Règle", text: "Avant de partager : qui est la source ? quelle date ? d'autres médias fiables confirment-ils ? l'image est-elle d'origine ? le titre joue-t-il sur l'émotion ? Partager un contenu, c'est en devenir le diffuseur." },
            },
          ],
          keyPoints: [
            "Une information est un fait vérifié, sourcé et contextualisé ; elle se distingue de l'opinion, de la rumeur et de la publicité.",
            "Mésinformation (faux sans intention), désinformation (faux avec intention de tromper), malinformation (vrai mais pour nuire).",
            "L'économie de l'attention et les algorithmes favorisent les contenus qui suscitent des émotions fortes.",
            "Biais de confirmation, bulle de filtre (Pariser, 2011) et chambres d'écho renforcent nos convictions.",
            "Vérifier : source, date, recoupement, origine des images, titre émotionnel ; partager, c'est diffuser.",
            "Droit : loi de 1881 (article 27), loi de 2018 en période électorale, DSA européen, règlement européen sur l'IA.",
          ],
          example: {
            statement: "Situation fictive. Un camarade partage dans un groupe de classe une capture d'écran : « URGENT : le ministère annonce que le bac est annulé cette année ! Partagez vite ! » La capture ne comporte ni lien ni date. Expliquez comment vérifier ce contenu et quelle attitude adopter.",
            solution: [
              "Repérer les signaux d'alerte : un ton d'urgence, un appel à partager, l'absence de lien, de date et de source précise, et une annonce spectaculaire.",
              "Chercher la source officielle : une telle décision serait publiée sur le site du ministère de l'Éducation nationale et reprise par tous les grands médias ; il faut vérifier ces sources directement, et non la capture.",
              "Pratiquer la lecture latérale : rechercher l'information sur un moteur de recherche ; si aucun média fiable n'en parle, elle est très probablement fausse.",
              "Vérifier la date : il peut s'agir d'une ancienne information sortie de son contexte, ou d'une parodie.",
              "Qualifier : si le camarade y croit, c'est de la mésinformation ; si l'auteur initial a fabriqué la capture pour tromper, c'est de la désinformation.",
              "Conclusion : ne pas partager, signaler poliment dans le groupe que l'information n'est confirmée par aucune source officielle, et indiquer où vérifier.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Qualifiez chaque situation : mésinformation, désinformation, malinformation ou satire. a) Un site humoristique connu pour ses fausses dépêches publie : « Les lycéens réclament plus de devoirs. » b) Une grand-mère partage de bonne foi un faux remède contre un virus. c) Un réseau crée de fausses vidéos pour faire croire qu'un candidat a tenu des propos racistes. d) Une personne publie l'adresse personnelle réelle d'un élu pour inciter à le harceler.",
              hint: "Demandez-vous si le contenu est vrai ou faux, et si celui qui le diffuse a l'intention de tromper ou de nuire. La satire se présente comme telle.",
              solution: [
                "a) Satire : le site est connu pour l'humour et ne cherche pas à tromper.",
                "b) Mésinformation : le contenu est faux, mais partagé de bonne foi, sans intention de nuire.",
                "c) Désinformation : un contenu faux est fabriqué délibérément pour tromper les électeurs.",
                "d) Malinformation : l'information (l'adresse) est vraie, mais diffusée dans le but de nuire.",
                "Résultat : a satire, b mésinformation, c désinformation, d malinformation.",
              ],
            },
            {
              level: 2,
              statement: "Une photo montrant une rue inondée circule avec la légende « Paris ce matin ». Décrivez, dans l'ordre, les étapes de vérification que vous appliqueriez, et indiquez pour chacune ce qui permettrait de conclure que la photo est trompeuse.",
              hint: "Pensez à la source, à la recherche d'image inversée, aux indices visibles sur l'image et au recoupement avec des médias fiables.",
              solution: [
                "Étape 1, la source : qui a publié la photo en premier ? Un compte anonyme récent, sans autre publication fiable, doit éveiller la méfiance.",
                "Étape 2, la recherche d'image inversée : si la même photo apparaît sur des sites plus anciens, avec une autre date ou un autre lieu, elle a été sortie de son contexte.",
                "Étape 3, l'examen de l'image : plaques d'immatriculation, panneaux, langue des enseignes, architecture ; des indices incompatibles avec Paris prouvent la tromperie.",
                "Étape 4, le recoupement : si aucun média fiable ni service officiel (préfecture, Météo-France) ne signale d'inondation à Paris ce jour-là, la légende est fausse.",
                "Étape 5, l'hypothèse de la manipulation : une image peut aussi être générée par l'intelligence artificielle ; des détails incohérents (reflets, mains, textes illisibles) en sont des indices.",
                "Résultat : la photo est trompeuse si elle est plus ancienne, prise ailleurs, contredite par les sources fiables ou générée artificiellement ; dans ce cas, il ne faut pas la partager.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Sujet : « Faut-il interdire les fausses informations pour protéger la démocratie ? » Rédigez une réponse argumentée et nuancée d'une vingtaine de lignes, en mobilisant les notions et les textes juridiques étudiés.",
              hint: "Montrez d'abord le danger de la désinformation pour la démocratie, puis le danger d'une interdiction générale pour la liberté d'expression ; présentez enfin les solutions intermédiaires adoptées par le droit.",
              solution: [
                "Introduction : la désinformation menace le débat public, mais qui déciderait de ce qui est vrai ? La question oppose protection de la démocratie et liberté d'expression.",
                "Un danger réel : la désinformation trompe les électeurs, alimente la défiance envers les institutions et les médias, et peut être utilisée par des puissances étrangères pour diviser la société ; les algorithmes accélèrent sa diffusion.",
                "Les risques d'une interdiction générale : confier à l'État le pouvoir de définir la vérité menacerait la liberté d'expression (article 11 de la DDHC) et le pluralisme ; une erreur ou une opinion minoritaire pourrait être censurée ; des régimes autoritaires utilisent les lois contre les « fausses nouvelles » pour faire taire les opposants.",
                "Les solutions du droit français et européen : sanctionner seulement des cas précis (fausses nouvelles diffusées de mauvaise foi qui troublent la paix publique, article 27 de la loi de 1881) ; confier au juge, et non au gouvernement, le soin de faire cesser la diffusion massive de fausses informations en période électorale (loi de 2018) ; imposer aux plateformes des obligations de transparence et de gestion des risques (DSA).",
                "Le rôle des citoyens : l'éducation aux médias, la vérification avant partage et le soutien à un journalisme de qualité sont les meilleures protections durables.",
                "Conclusion : une interdiction générale serait dangereuse pour la démocratie qu'elle prétend protéger ; mieux vaut des sanctions ciblées sous le contrôle du juge, la régulation des plateformes et l'esprit critique des citoyens.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : information et désinformation.",
            statements: [
              { text: "Une information fausse partagée de bonne foi est de la désinformation.", true: false, why: "Sans intention de tromper, c'est de la mésinformation ; la désinformation suppose une intention." },
              { text: "Recouper une information, c'est la confirmer par plusieurs sources indépendantes.", true: true, why: "Le recoupement est une règle de base du travail journalistique." },
              { text: "Les algorithmes de recommandation montrent à chacun les contenus les plus fiables.", true: false, why: "Ils privilégient surtout les contenus qui suscitent de l'engagement, pas nécessairement les plus fiables." },
              { text: "Une information vraie peut être utilisée pour nuire.", true: true, why: "C'est la malinformation, par exemple la divulgation de données privées pour harceler quelqu'un." },
              { text: "Si une information est partagée par beaucoup de personnes, elle est forcément vraie.", true: false, why: "La popularité ne prouve rien ; les fausses informations se diffusent souvent plus vite que les vraies." },
              { text: "Le DSA impose des obligations aux plateformes numériques dans l'Union européenne.", true: true, why: "Le règlement sur les services numériques encadre le traitement des contenus illicites et les risques systémiques." },
              { text: "En France, la loi interdit toute information inexacte publiée sur internet.", true: false, why: "La loi ne sanctionne que des cas précis, comme les fausses nouvelles diffusées de mauvaise foi qui troublent la paix publique." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que la mésinformation ?",
              options: ["Une information vraie diffusée pour nuire", "Une information fausse fabriquée délibérément pour tromper le public", "Une information fausse partagée sans intention de nuire", "Une parodie qui se présente comme telle"],
              answer: 2,
              why: "La mésinformation se distingue de la désinformation par l'absence d'intention de tromper.",
            },
            {
              q: "Qu'appelle-t-on une « bulle de filtre » ?",
              options: ["Un logiciel qui bloque les fausses informations", "Une règle qui oblige les médias à vérifier leurs sources avant toute publication d'article en ligne", "Un réseau de faux comptes automatisés", "L'enfermement dans des contenus conformes à nos goûts et à nos opinions"],
              answer: 3,
              why: "L'expression d'Eli Pariser (2011) décrit l'effet de la personnalisation des contenus par les algorithmes.",
            },
            {
              q: "Que punit l'article 27 de la loi de 1881 ?",
              options: ["Toute erreur factuelle commise par un journaliste dans un article, même corrigée ensuite", "La diffusion de mauvaise foi de fausses nouvelles troublant la paix publique", "Toute critique publique du gouvernement ou de ses membres", "La publication d'opinions minoritaires"],
              answer: 1,
              why: "La sanction suppose la mauvaise foi et un trouble, réel ou possible, à la paix publique.",
            },
            {
              q: "Quel réflexe permet de retrouver l'origine d'une photographie ?",
              options: ["La recherche d'image inversée", "Le nombre de partages de la photo", "La qualité de l'image", "Le nombre d'abonnés du compte qui la publie"],
              answer: 0,
              why: "Elle permet de savoir si l'image a déjà été publiée ailleurs, à une autre date ou dans un autre contexte.",
            },
            {
              q: "Pendant quelle période la loi du 22 décembre 2018 permet-elle de saisir le juge contre la diffusion massive de fausses informations ?",
              options: ["Pendant toute l'année, pour tout type de contenu publié en ligne", "Seulement le jour du scrutin", "Pendant les trois mois qui précèdent une élection nationale", "Pendant les périodes d'état d'urgence"],
              answer: 2,
              why: "Le référé est ouvert pendant les trois mois précédant le premier jour du mois d'une élection générale ou d'un référendum.",
            },
          ],
          trap: "Confondre mésinformation et désinformation, ou croire qu'un contenu très partagé est forcément vrai : c'est l'intention de celui qui diffuse qui distingue les deux notions, et la popularité d'un contenu ne prouve jamais sa véracité.",
          method: "Apprenez la méthode de vérification sous forme de cinq questions (qui ? quand ? qui d'autre le dit ? d'où vient l'image ? quelle émotion le titre cherche-t-il ?) et appliquez-la à un contenu réel chaque semaine pour en faire un réflexe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'citoyen-numerique',
          title: 'Être citoyen dans un espace numérique',
          minutes: 30,
          objectives: [
            "Identifier les libertés et les formes de participation citoyenne que permet le numérique.",
            "Connaître les droits sur ses données personnelles garantis par le RGPD et la loi Informatique et libertés.",
            "Expliquer les responsabilités et les infractions en ligne, notamment le cyberharcèlement.",
            "Adopter une conduite responsable et savoir à qui s'adresser en cas de problème.",
          ],
          course: [
            {
              heading: "Internet, un espace de libertés et de participation",
              paragraphs: [
                "Le numérique élargit l'exercice des libertés. Dans sa décision du 10 juin 2009, le Conseil constitutionnel a jugé que la liberté de communication protégée par l'article 11 de la DDHC implique, compte tenu du développement d'internet, la liberté d'accéder aux services de communication au public en ligne. Chacun peut s'informer, publier, débattre, s'associer ou se mobiliser en ligne, comme dans l'espace public physique.",
                "Le numérique offre aussi de nouvelles formes de participation : pétitions en ligne sur les sites des assemblées (une pétition déposée sur le site de l'Assemblée nationale qui réunit 500 000 signatures, issues d'au moins 30 départements ou collectivités d'outre-mer, peut faire l'objet d'un débat en séance publique), consultations publiques sur des projets de loi, budgets participatifs de collectivités, signalement de problèmes aux services publics. Ces outils complètent le vote sans le remplacer, et leurs effets dépendent de l'usage qu'en font les institutions.",
              ],
              box: { label: "Repère", text: "1978 : loi Informatique et libertés, création de la CNIL. 2009 : le Conseil constitutionnel rattache l'accès à internet à la liberté de communication. 2014 : arrêt de la Cour de justice de l'Union européenne sur le déréférencement. 2018 : entrée en application du RGPD." },
            },
            {
              heading: "Des droits sur ses données personnelles",
              paragraphs: [
                "Une donnée personnelle est toute information qui permet d'identifier une personne, directement ou indirectement : nom, photo, adresse électronique, numéro de téléphone, adresse IP, données de localisation. La loi Informatique et libertés du 6 janvier 1978 a créé la Commission nationale de l'informatique et des libertés (CNIL), autorité administrative indépendante chargée de protéger ces données. Depuis le 25 mai 2018, le règlement général sur la protection des données (RGPD) s'applique dans toute l'Union européenne.",
                "Le RGPD exige que la collecte de données repose sur une base légale (comme le consentement libre et éclairé) et garantit des droits à chacun : droit d'accès (savoir quelles données sont détenues), de rectification, d'effacement, d'opposition et de portabilité (récupérer ses données pour les transférer). Depuis l'arrêt de la Cour de justice de l'Union européenne du 13 mai 2014, on peut demander à un moteur de recherche de déréférencer certains résultats associés à son nom. En France, un mineur peut consentir seul au traitement de ses données par un service en ligne à partir de 15 ans ; en dessous, l'accord d'un parent est aussi requis. Les manquements peuvent être sanctionnés jusqu'à 4 % du chiffre d'affaires mondial d'une entreprise.",
              ],
              box: { label: "À retenir", text: "Droits RGPD : accès, rectification, effacement, opposition, portabilité, auxquels s'ajoute le déréférencement. Majorité numérique pour le consentement au traitement des données : 15 ans en France. Recours : l'entreprise, puis la CNIL." },
            },
            {
              heading: "Les mêmes règles en ligne que hors ligne",
              paragraphs: [
                "Internet n'est pas une zone de non-droit : la loi s'applique en ligne comme ailleurs. L'injure, la diffamation, la provocation à la haine ou le harcèlement sont punis, qu'ils soient commis dans la rue ou sur un réseau social. L'anonymat est d'ailleurs relatif : on parle plutôt de pseudonymat, car les plateformes conservent des données de connexion que la justice peut se faire communiquer pour identifier l'auteur d'une infraction. Partager ou relayer un contenu illicite, c'est aussi participer à sa diffusion.",
                "Le cyberharcèlement est puni par le Code pénal : le harcèlement moral est aggravé lorsqu'il est commis par un service de communication en ligne, et depuis 2018 la loi sanctionne aussi le harcèlement « en meute », lorsque plusieurs personnes s'en prennent de façon concertée à une même victime, même si chacune n'a agi qu'une fois. La loi du 2 mars 2022 a créé un délit de harcèlement scolaire, puni jusqu'à dix ans d'emprisonnement lorsqu'il conduit la victime au suicide ou à une tentative de suicide. Diffuser sans son accord une image à caractère sexuel d'une personne est un délit depuis 2016, et la loi du 21 mai 2024 (SREN) permet au juge de suspendre les comptes en ligne d'une personne condamnée pour cyberharcèlement.",
              ],
              box: { label: "Règle", text: "En cas de cyberharcèlement : ne pas répondre, conserver les preuves (captures d'écran avec la date et l'adresse), bloquer et signaler sur la plateforme, en parler à un adulte, appeler le 3018 (gratuit et confidentiel), porter plainte. Contenus illicites : signalement sur Pharos." },
            },
            {
              heading: "Une citoyenneté numérique à construire",
              paragraphs: [
                "Être citoyen dans l'espace numérique suppose des compétences : savoir protéger ses comptes (mots de passe solides, double authentification), maîtriser ce que l'on publie et l'image que l'on donne de soi (l'identité numérique laisse des traces durables), respecter le droit à l'image et la vie privée d'autrui (article 9 du Code civil), vérifier les informations avant de les partager. Le cadre de référence des compétences numériques, évalué par la certification Pix au collège et au lycée, vise à les développer.",
                "La citoyenneté numérique pose aussi des questions collectives. La dématérialisation des démarches administratives laisse de côté les personnes qui n'ont pas d'équipement ou qui ne maîtrisent pas les outils, ce qu'on appelle l'illectronisme : des lieux d'accompagnement comme les espaces France Services tentent d'y répondre. La puissance des grandes plateformes conduit l'Union européenne à les réguler (DSA pour les contenus, DMA pour la concurrence). Enfin, le respect d'autrui en ligne, ce qu'on appelait autrefois la « nétiquette », reste la condition d'un débat démocratique apaisé.",
              ],
            },
          ],
          keyPoints: [
            "Le Conseil constitutionnel (2009) rattache l'accès à internet à la liberté de communication (article 11 de la DDHC).",
            "Participation en ligne : pétitions (500 000 signatures pour un possible débat à l'Assemblée), consultations, budgets participatifs.",
            "RGPD (2018) et CNIL (1978) : droits d'accès, de rectification, d'effacement, d'opposition, de portabilité ; majorité numérique à 15 ans.",
            "La loi s'applique en ligne : injure, diffamation, haine, harcèlement ; l'anonymat n'est qu'un pseudonymat.",
            "Cyberharcèlement et harcèlement en meute punis ; harcèlement scolaire, délit depuis 2022 ; 3018 et Pharos.",
            "Compétences et enjeux : sécurité des comptes, identité numérique, droit à l'image, illectronisme, régulation des plateformes.",
          ],
          example: {
            statement: "Situation fictive. Léo, élève de première, découvre qu'un compte anonyme publie des photos de lui prises à son insu, accompagnées de moqueries, et que plusieurs élèves du lycée commentent et partagent ces publications. Analysez la situation au regard du droit et indiquez ce que Léo et les témoins peuvent faire.",
            solution: [
              "Qualifier les faits : la diffusion de photos prises sans son accord porte atteinte à son droit à l'image et à sa vie privée (article 9 du Code civil) ; les moqueries répétées constituent un harcèlement.",
              "Préciser l'infraction : le harcèlement commis en ligne est aggravé ; les élèves qui commentent et partagent participent à un harcèlement en meute, punissable même si chacun n'a agi qu'une fois ; entre élèves d'un même établissement, il peut s'agir du délit de harcèlement scolaire (loi du 2 mars 2022).",
              "Rappeler que l'anonymat est relatif : la justice peut obtenir des plateformes les données permettant d'identifier l'auteur du compte.",
              "Ce que Léo peut faire : ne pas répondre, faire des captures d'écran datées, signaler les publications et le compte à la plateforme, en parler à ses parents et à l'équipe du lycée, appeler le 3018, porter plainte.",
              "Ce que les témoins peuvent faire : ne pas commenter ni partager, signaler les contenus, soutenir Léo et alerter un adulte ; se taire ou relayer, c'est laisser le harcèlement continuer.",
              "Conclusion : Léo est victime d'atteintes à son image et d'un cyberharcèlement collectif ; le droit lui offre des recours, et les témoins ont un rôle décisif pour y mettre fin.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quel droit garanti par le RGPD chaque personne exerce. a) Clara demande à un site de vente en ligne la liste de toutes les données qu'il détient sur elle. b) Yanis demande la correction de sa date de naissance, mal enregistrée par une application. c) Inès demande la suppression de son compte et de toutes ses données sur un réseau social qu'elle n'utilise plus. d) Hugo récupère l'historique de ses playlists pour le transférer vers un autre service de musique. e) Sarah refuse que ses données soient utilisées pour lui envoyer des publicités ciblées.",
              hint: "Associez chaque demande à un verbe : savoir, corriger, supprimer, transférer, refuser.",
              solution: [
                "a) Droit d'accès : savoir quelles données sont détenues.",
                "b) Droit de rectification : corriger une donnée inexacte.",
                "c) Droit à l'effacement : obtenir la suppression de ses données.",
                "d) Droit à la portabilité : récupérer ses données pour les transférer.",
                "e) Droit d'opposition : refuser un traitement, notamment à des fins de prospection commerciale.",
                "Résultat : a accès, b rectification, c effacement, d portabilité, e opposition.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, dites si le comportement est légal ou s'il peut constituer une infraction, en justifiant. a) Publier sous pseudonyme une critique argumentée de la politique d'un ministre. b) Publier une vidéo d'un camarade en train de pleurer, filmée sans son accord, pour se moquer de lui. c) Partager, avec une vingtaine d'autres personnes, un même message insultant visant une élève, chacun ne l'ayant envoyé qu'une fois. d) Créer un faux compte au nom d'un professeur pour lui faire tenir des propos ridicules.",
              hint: "Distinguez la liberté d'expression (critique d'idées ou de politiques) et les atteintes aux personnes : droit à l'image, harcèlement, usurpation d'identité.",
              solution: [
                "a) Légal : la critique d'une politique publique relève de la liberté d'expression, et l'usage d'un pseudonyme est permis, tant que les propos ne sont ni injurieux ni diffamatoires.",
                "b) Infraction possible : la diffusion de l'image d'une personne sans son accord porte atteinte à sa vie privée et à son droit à l'image, et la moquerie peut participer d'un harcèlement.",
                "c) Infraction : c'est un harcèlement « en meute », puni depuis 2018 même si chacun n'a agi qu'une fois, dès lors que les messages sont concertés ou que chacun sait qu'il participe à une répétition.",
                "d) Infraction : l'usurpation de l'identité d'un tiers en vue de troubler sa tranquillité ou de porter atteinte à son honneur est un délit, y compris en ligne (article 226-4-1 du Code pénal).",
                "Résultat : seule la situation a est légale ; b, c et d peuvent constituer des infractions.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type évaluation (contrôle continu). Document (rédigé pour l'exercice) : « En quelques semaines, une pétition en ligne contre un projet de loi a recueilli plus de deux millions de signatures. Ses partisans y voient une renaissance de la démocratie ; ses critiques rappellent que signer prend quelques secondes et que de nombreux signataires n'ont pas lu le texte contesté. » Sujet : en vous appuyant sur le document et sur vos connaissances, montrez que le numérique offre de nouvelles possibilités à la citoyenneté, mais qu'il comporte aussi des limites et des risques.",
              hint: "Construisez deux parties : les apports (expression, participation, mobilisation, information) et les limites (engagement superficiel, désinformation, harcèlement, fracture numérique, poids des plateformes) ; concluez sur les conditions d'une citoyenneté numérique éclairée.",
              solution: [
                "Introduction : le document montre la puissance de mobilisation du numérique et pose la question de la qualité de cette participation.",
                "De nouvelles possibilités : l'accès à internet est rattaché à la liberté de communication (Conseil constitutionnel, 2009) ; les pétitions en ligne, consultations publiques et budgets participatifs permettent de participer entre deux élections ; à l'Assemblée nationale, une pétition qui atteint 500 000 signatures issues d'au moins 30 départements ou collectivités d'outre-mer peut être débattue en séance.",
                "Des limites démocratiques : signer en un clic peut rester un engagement superficiel, et une pétition, même massive, ne remplace ni le vote ni la délibération parlementaire ; la popularité d'une cause ne garantit pas que les signataires soient informés.",
                "Des risques : la désinformation, amplifiée par les algorithmes, peut fausser le débat ; le cyberharcèlement fait taire certaines voix ; l'illectronisme exclut une partie des citoyens ; quelques grandes plateformes privées organisent l'espace du débat, d'où leur régulation par l'Union européenne (DSA).",
                "Des conditions : une citoyenneté numérique suppose de s'informer avant de s'engager, de vérifier les sources, de respecter autrui et de protéger ses données ; l'éducation et la régulation y contribuent.",
                "Conclusion : le numérique enrichit la citoyenneté en multipliant les moyens d'expression et de participation, à condition d'être accompagné d'esprit critique, de respect des règles et d'institutions qui prennent en compte ces formes d'engagement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de la citoyenneté numérique à sa définition.",
            pairs: [
              { left: "Donnée personnelle", right: "Information permettant d'identifier une personne, directement ou indirectement" },
              { left: "CNIL", right: "Autorité indépendante chargée de la protection des données personnelles" },
              { left: "Droit à la portabilité", right: "Récupérer ses données pour les transférer à un autre service" },
              { left: "Déréférencement", right: "Retrait de certains résultats associés à son nom dans un moteur de recherche" },
              { left: "Harcèlement en meute", right: "Attaques concertées de plusieurs personnes contre une même victime" },
              { left: "Illectronisme", right: "Difficulté ou incapacité à utiliser les outils numériques" },
            ],
          },
          quiz: [
            {
              q: "Depuis quand le RGPD s'applique-t-il dans l'Union européenne ?",
              options: ["Depuis le 6 janvier 1978", "Depuis le 10 juin 2009", "Depuis le 13 mai 2014", "Depuis le 25 mai 2018"],
              answer: 3,
              why: "Le règlement général sur la protection des données est entré en application le 25 mai 2018.",
            },
            {
              q: "À partir de quel âge un mineur peut-il, en France, consentir seul au traitement de ses données par un service en ligne ?",
              options: ["15 ans", "13 ans", "16 ans", "18 ans"],
              answer: 0,
              why: "La France a fixé ce seuil à 15 ans ; en dessous, le consentement d'un titulaire de l'autorité parentale est aussi requis.",
            },
            {
              q: "Quel numéro gratuit et confidentiel aide les victimes de cyberharcèlement ?",
              options: ["Le 3919", "Le 17", "Le 3018", "Le 115"],
              answer: 2,
              why: "Le 3018 est le numéro national pour les victimes de violences numériques ; il peut aussi faire supprimer des contenus.",
            },
            {
              q: "Pourquoi dit-on que l'anonymat en ligne est relatif ?",
              options: ["Parce que tous les comptes doivent porter le nom réel de leur titulaire selon la loi française", "Parce que la justice peut obtenir des plateformes les données qui identifient un auteur", "Parce que les réseaux sociaux publient l'identité de tous leurs utilisateurs", "Parce que les pseudonymes sont interdits"],
              answer: 1,
              why: "Les plateformes conservent des données de connexion ; il s'agit donc plutôt d'un pseudonymat.",
            },
            {
              q: "Qu'a jugé le Conseil constitutionnel dans sa décision du 10 juin 2009 ?",
              options: ["Que les réseaux sociaux devaient être interdits à tous les mineurs de moins de quinze ans", "Que la CNIL devait être supprimée", "Que le téléchargement était un droit fondamental", "Que l'accès à internet relève de la liberté de communication"],
              answer: 3,
              why: "Il a rattaché la liberté d'accéder aux services en ligne à l'article 11 de la DDHC et censuré la coupure d'accès décidée sans juge.",
            },
          ],
          trap: "Croire qu'internet est une zone de non-droit protégée par l'anonymat : les infractions (injure, harcèlement, atteinte à l'image) y sont punies comme ailleurs, les auteurs peuvent être identifiés, et partager un contenu illicite, c'est participer à sa diffusion.",
          method: "Retenez les droits du RGPD avec cinq verbes (savoir, corriger, effacer, s'opposer, transférer) et, pour le cyberharcèlement, la règle des quatre gestes : ne pas répondre, garder les preuves, signaler, en parler.",
        },
      ],
    },
  ],
}
