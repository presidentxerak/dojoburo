import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ia-ecole',
  chapters: [
    {
      id: 'comprendre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-cest-quoi',
          title: "Une IA générative, comment ça marche ?",
          minutes: 25,
          objectives: [
            "Définir une intelligence artificielle générative et la distinguer d'un moteur de recherche.",
            "Expliquer avec le vocabulaire juste (LLM, token, entraînement, prompt) comment une IA produit un texte.",
            "Identifier ce qu'une IA générative sait faire et ce qu'elle ne peut pas savoir.",
          ],
          course: [
            {
              heading: "Qu'appelle-t-on intelligence artificielle ?",
              paragraphs: [
                "L'intelligence artificielle (IA) désigne un ensemble de programmes informatiques capables d'accomplir des tâches que l'on associait autrefois à l'intelligence humaine : reconnaître un visage sur une photo, traduire une phrase, jouer aux échecs, recommander une vidéo. L'expression s'est imposée en 1956, lors d'un séminaire de chercheurs à l'université de Dartmouth, aux États-Unis.",
                "Vous utilisez déjà des IA sans y penser : le déverrouillage du téléphone par le visage, le filtre qui range les messages indésirables, les suggestions d'une plateforme de vidéos. Ces IA classent ou reconnaissent des choses. Une IA générative, elle, fabrique un contenu nouveau : un texte, une image, un son, une vidéo ou du code informatique.",
                "On s'adresse à une IA générative en langage courant, par une demande écrite appelée prompt. Par exemple : « Propose-moi trois idées de titre pour un exposé sur les volcans. » Le programme répond par un texte qu'il rédige à l'instant, mot après mot.",
              ],
              box: { label: "Définition", text: "Une IA générative est un programme qui produit un contenu nouveau (texte, image, son, vidéo, code) à partir d'une demande formulée en langage courant, le prompt." },
            },
            {
              heading: "Un LLM prédit la suite d'un texte",
              paragraphs: [
                "Les assistants qui rédigent du texte reposent sur un LLM (de l'anglais Large Language Model). Le texte y est découpé en petits morceaux appelés tokens : un mot court correspond souvent à un token, un mot long ou rare peut en compter plusieurs.",
                "Le principe est simple à énoncer : à partir de tout le texte déjà présent (votre prompt et le début de sa réponse), le LLM calcule, pour chaque token possible, la probabilité qu'il soit le suivant. Il en choisit un, l'ajoute au texte, puis recommence, des centaines de fois. Après « La capitale de la France est », le token « Paris » est de très loin le plus probable.",
                "Une analogie aide à comprendre : la saisie prédictive du clavier de votre téléphone propose le mot suivant. Un LLM fait la même chose en beaucoup plus puissant, car il tient compte de toute la conversation. Le choix du token comporte aussi une part de hasard : la même question posée deux fois donne souvent deux réponses différentes.",
              ],
            },
            {
              heading: "D'où viennent ses « connaissances » ?",
              paragraphs: [
                "Avant de pouvoir répondre, le LLM a été entraîné : on lui a fait traiter d'immenses quantités de textes (pages web, livres, articles) et il a ajusté des milliards de nombres internes, ses paramètres, pour prédire de mieux en mieux la suite des textes. Ensuite, des personnes ont évalué ses réponses pour qu'il devienne plus utile, plus clair et plus prudent.",
                "Cela a trois conséquences importantes. D'abord, le LLM ne consulte pas une base de faits vérifiés : il produit ce qui est probable, ce qui est souvent juste, mais pas toujours. Ensuite, son apprentissage s'arrête à une date, la date de coupure : il ignore ce qui s'est passé après, sauf si l'outil est relié à une recherche sur Internet. Enfin, il reproduit les erreurs et les stéréotypes présents dans les textes qu'il a traités.",
                "Le LLM ne comprend pas le monde comme vous : il n'a ni expérience vécue, ni intention, ni souvenir de vous d'une conversation à l'autre (sauf si l'outil enregistre l'historique). Il ne connaît pas non plus ce qui n'a jamais été écrit en ligne : le nom de votre professeur, votre note du dernier contrôle ou le cours précis de votre classe.",
              ],
            },
            {
              heading: "IA générative et moteur de recherche : deux outils différents",
              paragraphs: [
                "Un moteur de recherche affiche une liste de pages qui existent déjà, écrites par des auteurs identifiables : vous pouvez ouvrir chaque page, voir qui l'a publiée et juger si elle est fiable. Une IA générative rédige un texte nouveau, qui a l'apparence d'une réponse, sans forcément indiquer d'où viennent les informations.",
                "Certains assistants combinent les deux : ils lancent une recherche, puis rédigent un résumé accompagné de liens. Dans ce cas, ouvrez les liens : le résumé peut déformer ce que disent réellement les pages citées.",
              ],
              box: { label: "À retenir", text: "Une IA générative ne cherche pas la vérité : elle calcule, token après token, la suite la plus probable d'un texte. Sa réponse est souvent juste, parfois fausse, et elle ne sait rien de ce qui n'a pas été écrit avant sa date de coupure." },
            },
          ],
          keyPoints: [
            "Une IA générative produit un contenu nouveau (texte, image, son, code) à partir d'un prompt écrit en langage courant.",
            "Un LLM découpe le texte en tokens et prédit, un token après l'autre, la suite la plus probable.",
            "Le LLM a été entraîné sur d'immenses quantités de textes : il ne consulte pas une base de faits vérifiés.",
            "Il ignore ce qui s'est passé après sa date de coupure et ce qui n'a jamais été écrit (votre classe, vos notes).",
            "Une part de hasard explique qu'une même question donne des réponses différentes.",
            "Un moteur de recherche montre des pages existantes et leurs auteurs ; une IA générative rédige un texte nouveau.",
          ],
          example: {
            statement: "Léa, en 5e, tape deux fois le même prompt : « Donne-moi trois idées d'exposé sur les volcans. » Elle obtient deux listes différentes et pense que l'IA est en panne. Expliquez-lui ce qui se passe.",
            solution: [
              "Rappeler le fonctionnement : l'IA générative repose sur un LLM qui rédige sa réponse token après token, en calculant à chaque fois la probabilité des suites possibles.",
              "Préciser que le choix du token suivant comporte une part de hasard : parmi plusieurs suites probables, l'IA n'en choisit pas toujours la même.",
              "Comme chaque token dépend des précédents, un choix différent au début entraîne une réponse entièrement différente ensuite.",
              "Conclure : l'IA n'est pas en panne. Deux listes différentes sont normales ; Léa peut d'ailleurs s'en servir pour avoir plus d'idées, puis choisir elle-même son sujet.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les outils suivants, lesquels sont des IA génératives ? a) un assistant qui rédige un poème sur demande ; b) une calculatrice ; c) un programme qui crée une image à partir d'une description ; d) un moteur de recherche qui affiche une liste de liens ; e) le filtre qui range les messages indésirables d'une messagerie. Justifiez chaque réponse en une phrase.",
              hint: "Demandez-vous, pour chaque outil, s'il fabrique un contenu nouveau ou s'il se contente de calculer, de classer ou de montrer ce qui existe déjà.",
              solution: [
                "a) Oui : l'assistant rédige un texte nouveau à partir d'une demande, c'est une IA générative.",
                "b) Non : la calculatrice applique des règles de calcul fixes ; ce n'est pas une IA générative.",
                "c) Oui : le programme fabrique une image nouvelle à partir d'un prompt, c'est une IA générative.",
                "d) Non : le moteur de recherche montre des pages qui existent déjà, il ne rédige pas de contenu nouveau.",
                "e) Non : le filtre est une IA, mais elle classe des messages (indésirable ou non) sans rien créer.",
                "Résultat : seuls a) et c) sont des IA génératives.",
              ],
            },
            {
              level: 2,
              statement: "On demande à une IA générative de compléter deux phrases. Phrase 1 : « Le Petit Prince a été écrit par Antoine de... » Phrase 2 : « Mon professeur de mathématiques s'appelle... » Prévoyez ce que l'IA va répondre dans chaque cas et expliquez la différence à l'aide du cours.",
              hint: "Demandez-vous si la suite de chaque phrase apparaît souvent dans les textes sur lesquels le LLM a été entraîné.",
              solution: [
                "Phrase 1 : la suite « Saint-Exupéry » apparaît des milliers de fois dans les textes d'entraînement ; c'est de très loin la suite la plus probable, et l'IA la donnera, avec raison.",
                "Phrase 2 : le nom de votre professeur n'est écrit nulle part dans les textes d'entraînement, et l'IA ne vous connaît pas.",
                "Pourtant, l'IA est faite pour produire une suite probable : elle risque d'écrire un nom quelconque qui « sonne bien », ou au mieux de dire qu'elle ne peut pas le savoir.",
                "Conclusion : l'IA n'a pas de connaissance au sens humain ; elle réussit quand la bonne réponse est fréquente dans ses textes, et elle peut inventer quand l'information lui manque.",
              ],
            },
            {
              level: 3,
              statement: "Un camarade affirme : « L'IA sait tout, puisqu'elle a lu tout Internet. » Rédigez une réponse argumentée d'une dizaine de lignes, avec au moins trois arguments tirés du cours, pour nuancer cette affirmation.",
              hint: "Pensez à la manière dont le LLM produit ses réponses, à sa date de coupure et à ce qui n'est jamais écrit en ligne.",
              solution: [
                "Introduction : il est vrai que le LLM a été entraîné sur d'immenses quantités de textes, ce qui lui permet de répondre correctement à beaucoup de questions. Mais « avoir lu » ne veut pas dire « tout savoir ».",
                "Argument 1 : le LLM ne stocke pas des faits vérifiés, il calcule la suite la plus probable d'un texte. Une suite probable peut être fausse, et l'IA l'énonce avec le même aplomb qu'une réponse juste.",
                "Argument 2 : son apprentissage s'arrête à une date de coupure ; il ignore les événements plus récents, sauf si l'outil fait une recherche en ligne.",
                "Argument 3 : beaucoup d'informations ne sont écrites nulle part en ligne (votre cours, les attentes de votre professeur, votre vie) ; l'IA ne peut pas les connaître.",
                "Argument 4 : Internet contient aussi des erreurs et des stéréotypes, que le LLM peut reproduire.",
                "Conclusion : l'IA est un outil puissant, mais ce n'est pas une source sûre ; ses réponses se vérifient dans le manuel, auprès du professeur ou dans des sources fiables.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "IA générative", right: "Programme qui produit un contenu nouveau à partir d'une demande" },
              { left: "LLM", right: "Programme entraîné sur d'immenses textes pour prédire la suite d'un texte" },
              { left: "Token", right: "Petit morceau de texte, souvent une partie de mot, traité par le LLM" },
              { left: "Prompt", right: "Demande écrite en langage courant par l'utilisateur" },
              { left: "Entraînement", right: "Phase où le programme ajuste ses paramètres en traitant des textes" },
              { left: "Date de coupure", right: "Limite au-delà de laquelle le LLM n'a rien appris" },
            ],
          },
          quiz: [
            {
              q: "Que fait fondamentalement un LLM quand il répond ?",
              options: [
                "Il interroge en direct une base de faits vérifiés par des experts",
                "Il calcule la suite la plus probable du texte, token après token",
                "Il recopie la page web la plus visitée sur le sujet",
              ],
              answer: 1,
              why: "Un LLM produit sa réponse en prédisant le token suivant, encore et encore ; il ne consulte pas une base de faits vérifiés.",
            },
            {
              q: "Qu'est-ce qu'un token ?",
              options: [
                "Une pièce de monnaie virtuelle qui sert à payer l'IA",
                "Le mot de passe d'un compte",
                "Un petit morceau de texte, souvent une partie de mot",
                "Une image générée par l'IA",
              ],
              answer: 2,
              why: "Le LLM découpe le texte en tokens, des morceaux de mots qu'il traite un par un.",
            },
            {
              q: "Vous posez deux fois la même question et obtenez deux réponses différentes. Pourquoi ?",
              options: [
                "Le choix de chaque token comporte une part de hasard",
                "L'IA a appris entre-temps de nouvelles informations sur vous",
                "L'IA est en panne et doit être redémarrée",
              ],
              answer: 0,
              why: "Parmi plusieurs suites probables, l'IA n'en choisit pas toujours la même ; c'est un fonctionnement normal.",
            },
            {
              q: "Quelle différence y a-t-il entre un moteur de recherche et une IA générative ?",
              options: [
                "Il n'y en a aucune, ce sont deux noms pour le même outil",
                "Le moteur de recherche rédige ses pages lui-même, alors que l'IA vérifie les sources",
                "L'IA générative est toujours plus fiable",
                "Le moteur montre des pages existantes, l'IA rédige un texte nouveau",
              ],
              answer: 3,
              why: "Le moteur de recherche affiche des pages écrites par des auteurs identifiables ; l'IA générative rédige un texte qui peut ne citer aucune source.",
            },
            {
              q: "Laquelle de ces informations une IA générative ne peut-elle pas connaître ?",
              options: [
                "La date de la prise de la Bastille par les Parisiens",
                "Votre note au dernier contrôle de français",
                "La formule de l'aire d'un rectangle",
              ],
              answer: 1,
              why: "Votre note n'est écrite dans aucun texte d'entraînement : l'IA ne peut pas la connaître, et elle risque de l'inventer si on la lui demande.",
            },
          ],
          trap: "Croire que l'IA « sait » ou « comprend » comme une personne et qu'elle va chercher la vérité quelque part : elle produit un texte probable, qui peut être juste ou faux.",
          method: "Pour retenir le fonctionnement, expliquez-le à voix haute à quelqu'un de votre famille en trois phrases : l'entraînement sur des textes, la prédiction token par token, la part de hasard. Là où vous bloquez, relisez la partie du cours.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-se-trompe',
          title: "Pourquoi l'IA se trompe avec assurance",
          minutes: 25,
          objectives: [
            "Expliquer pourquoi une IA générative peut produire une réponse fausse présentée avec assurance.",
            "Identifier les principaux types d'erreurs : invention, information périmée, erreur de calcul ou de raisonnement, biais.",
            "Repérer les signaux d'alerte qui imposent de vérifier une réponse.",
          ],
          course: [
            {
              heading: "Une réponse plausible n'est pas une réponse vraie",
              paragraphs: [
                "Un LLM est entraîné à produire un texte qui ressemble à une bonne réponse. Quand l'information juste est fréquente dans ses textes d'entraînement, la réponse probable est aussi la bonne. Mais quand l'information est rare, absente ou ambiguë, le LLM ne se tait pas forcément : il complète avec ce qui « sonne » juste.",
                "Le ton, lui, ne change pas : la phrase reste fluide, bien construite et affirmée sans hésitation, que le contenu soit exact ou inventé. L'IA ne vous signale pas toujours qu'elle n'est pas sûre, car elle n'a pas de moyen fiable de savoir si ce qu'elle écrit est vrai.",
              ],
              box: { label: "Définition", text: "On appelle hallucination une réponse d'IA qui contient une information fausse ou inventée (un fait, un chiffre, une citation, une référence) présentée comme vraie." },
            },
            {
              heading: "Les principales familles d'erreurs",
              paragraphs: [
                "Les inventions : l'IA peut créer des références de livres ou d'articles qui n'existent pas, attribuer à un auteur une citation qu'il n'a jamais écrite, se tromper de date ou de nom propre. Les informations périmées : après sa date de coupure, l'IA ignore ce qui a changé (un record, une loi, un programme scolaire), sauf si l'outil fait une recherche en ligne.",
                "Les erreurs de calcul et de raisonnement : un LLM prédit du texte, il ne calcule pas comme une calculatrice. Il réussit souvent les calculs simples, mais peut se tromper sur des calculs longs ou des énoncés piégés. Certains outils lui ajoutent une calculatrice, mais vous ne savez pas toujours si c'est le cas.",
                "Les biais : l'IA reproduit les stéréotypes présents dans ses textes d'entraînement, par exemple en imaginant spontanément un ingénieur plutôt qu'une ingénieure. Enfin, les sujets locaux ou rares (votre ville, un auteur peu connu, le cours précis de votre classe) sont ceux où elle se trompe le plus.",
              ],
            },
            {
              heading: "Pourquoi l'assurance nous trompe",
              paragraphs: [
                "Entre humains, on associe souvent l'assurance à la compétence : quelqu'un qui répond vite et sans hésiter nous semble savoir. Ce réflexe est trompeur face à une IA, dont le ton est toujours aussi assuré.",
                "L'IA a aussi tendance à aller dans votre sens. Si la question contient une erreur, elle peut la suivre au lieu de la corriger : à la question « Pourquoi Napoléon a-t-il gagné la bataille de Waterloo ? », elle risque d'inventer des raisons, alors que Napoléon a perdu cette bataille le 18 juin 1815. De même, si vous insistez (« Tu es sûr ? »), elle peut changer d'avis sans raison, ce qui prouve qu'insister n'est pas vérifier.",
              ],
            },
            {
              heading: "Les signaux d'alerte",
              paragraphs: [
                "Certaines informations doivent toujours être vérifiées : les chiffres précis, les dates, les noms propres, les citations, les titres d'ouvrages et les références. Il en va de même quand l'enjeu est important (un devoir, une révision d'examen, une question de santé) ou quand la réponse contredit votre manuel ou ce qu'a dit votre professeur.",
                "Vérifier, c'est retrouver l'information dans une source fiable et indépendante : votre manuel, votre cours, le professeur, le CDI, une encyclopédie reconnue, le site d'une institution officielle. Une autre IA ne compte pas comme une vérification : elle peut commettre la même erreur.",
              ],
              box: { label: "Règle", text: "Plus une information est précise et plus l'enjeu est important, plus elle doit être vérifiée dans une source fiable avant d'être réutilisée." },
            },
          ],
          keyPoints: [
            "Une IA produit une réponse plausible, pas une réponse vérifiée : elle peut se tromper avec le même ton assuré.",
            "Une hallucination est une information fausse ou inventée présentée comme vraie.",
            "Quatre familles d'erreurs : inventions, informations périmées, erreurs de calcul ou de raisonnement, biais.",
            "L'IA peut suivre l'erreur contenue dans votre question au lieu de la corriger.",
            "Dates, chiffres, noms, citations et références se vérifient toujours dans une source fiable.",
            "Demander à l'IA si elle est sûre, ou interroger une autre IA, ne remplace pas une vérification.",
          ],
          example: {
            statement: "Pour un exposé sur les abeilles, Hugo (4e) demande à une IA « trois livres sur les abeilles, avec l'auteur et l'éditeur ». Il obtient trois références très précises. Que doit-il faire avant de les inscrire dans sa bibliographie ?",
            solution: [
              "Repérer le risque : des titres d'ouvrages, des auteurs et des éditeurs sont exactement le type d'information qu'une IA peut inventer de façon très convaincante.",
              "Vérifier chaque référence dans une source indépendante : le catalogue du CDI, celui d'une bibliothèque ou le site de l'éditeur.",
              "Si un livre est introuvable, le considérer comme probablement inventé et le retirer.",
              "Pour les livres qui existent, les consulter réellement : on ne cite que ce qu'on a lu.",
              "Conclusion : Hugo ne garde dans sa bibliographie que les références qu'il a vérifiées et consultées.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, nommez le type d'erreur (invention, information périmée, erreur de calcul, biais). a) L'IA cite une phrase de Victor Hugo que vous ne trouvez dans aucune de ses œuvres. b) Elle donne comme détenteur actuel d'un record sportif un athlète battu depuis deux ans. c) Elle affirme que 17 × 24 = 418. d) À qui demande de décrire « un infirmier et une ingénieure », elle répond en parlant d'« une infirmière et un ingénieur ».",
              hint: "Pour c), refaites le calcul vous-même ; pour d), demandez-vous d'où peut venir l'inversion.",
              solution: [
                "a) Invention : une citation introuvable dans l'œuvre de l'auteur est probablement fabriquée (hallucination).",
                "b) Information périmée : le record a changé après la date de coupure de l'IA.",
                "c) Erreur de calcul : 17 × 24 = 17 × 20 + 17 × 4 = 340 + 68 = 408, et non 418.",
                "d) Biais : l'IA reproduit le stéréotype, fréquent dans ses textes d'entraînement, d'infirmières femmes et d'ingénieurs hommes.",
              ],
            },
            {
              level: 2,
              statement: "Un élève demande à une IA : « Explique pourquoi la Lune est plus grosse que la Terre. » Expliquez le problème posé par cette question, la façon dont l'IA risque de réagir, puis reformulez la question de manière honnête.",
              hint: "Vérifiez d'abord l'affirmation contenue dans la question, puis rappelez-vous comment l'IA réagit à une question qui contient une erreur.",
              solution: [
                "Le problème : la question contient une affirmation fausse. La Lune est bien plus petite que la Terre : son diamètre est d'environ 3 474 km, contre environ 12 742 km pour la Terre, soit à peu près le quart.",
                "Le risque : l'IA a tendance à aller dans le sens de la question ; elle peut corriger l'erreur, mais elle peut aussi inventer des « raisons » à un fait faux.",
                "Reformulation honnête : « Quelle est la taille de la Lune comparée à celle de la Terre ? »",
                "Conclusion : on pose des questions ouvertes, sans glisser la réponse dedans, et on vérifie la réponse dans le manuel de sciences.",
              ],
            },
            {
              level: 3,
              statement: "Un élève de 3e obtient d'une IA la réponse suivante : « La loi de séparation des Églises et de l'État a été votée en 1905. Elle a été préparée par Jules Ferry, qui voulait garantir la liberté de conscience. » Indiquez les éléments à vérifier, vérifiez-les à l'aide de vos connaissances, puis tirez une leçon de méthode.",
              hint: "Repérez les dates et les noms propres, puis rappelez-vous à quelle période Jules Ferry a mené ses grandes réformes et à quelle date il est mort.",
              solution: [
                "Éléments à vérifier : la date (1905) et le nom propre (Jules Ferry), ainsi que l'objectif annoncé.",
                "La date est juste : la loi de séparation des Églises et de l'État date du 9 décembre 1905, et elle garantit bien la liberté de conscience.",
                "Le nom est faux : Jules Ferry est mort en 1893 ; il est connu pour les lois scolaires des années 1880. La loi de 1905 est associée notamment à Aristide Briand, son rapporteur.",
                "Leçon de méthode : une réponse d'IA peut mélanger du vrai et du faux dans la même phrase, sur le même ton. Le vrai rend le faux crédible.",
                "Conclusion : chaque date et chaque nom se vérifient dans le manuel d'histoire avant d'être réutilisés.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ?",
            statements: [
              { text: "Si l'IA répond sans hésiter, c'est qu'elle est sûre de sa réponse.", true: false, why: "Son ton est toujours aussi assuré, que la réponse soit juste ou inventée." },
              { text: "Une IA peut inventer une référence de livre qui n'existe pas.", true: true, why: "C'est une hallucination fréquente : titre, auteur et éditeur peuvent être fabriqués." },
              { text: "Demander à une deuxième IA suffit pour vérifier la réponse de la première.", true: false, why: "Une autre IA peut commettre la même erreur ; il faut une source fiable et indépendante." },
              { text: "Une IA peut ignorer un événement récent.", true: true, why: "Son apprentissage s'arrête à sa date de coupure, sauf si l'outil fait une recherche en ligne." },
              { text: "Un LLM calcule toujours aussi sûrement qu'une calculatrice.", true: false, why: "Il prédit du texte ; il peut se tromper, surtout sur des calculs longs." },
              { text: "Si une question contient une erreur, l'IA peut la reprendre au lieu de la corriger.", true: true, why: "L'IA a tendance à aller dans le sens de la question posée." },
              { text: "Une IA ne reproduit jamais de stéréotypes.", true: false, why: "Elle reproduit les biais présents dans les textes qui ont servi à l'entraîner." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on une hallucination d'IA ?",
              options: [
                "Une panne qui empêche l'IA de répondre pendant quelques minutes",
                "Une image volontairement déformée",
                "Une information fausse ou inventée, présentée comme vraie",
                "Une réponse trop courte",
              ],
              answer: 2,
              why: "Une hallucination est un contenu faux (fait, chiffre, citation, référence) que l'IA présente avec assurance.",
            },
            {
              q: "Pourquoi une IA peut-elle se tromper avec assurance ?",
              options: [
                "Elle produit un texte plausible et n'a pas de moyen fiable de savoir s'il est vrai",
                "Elle veut volontairement tromper l'utilisateur",
                "Elle se trompe uniquement quand on lui pose des questions difficiles en mathématiques",
              ],
              answer: 0,
              why: "Le LLM est entraîné à produire une suite probable ; il n'a pas d'intention et ne vérifie pas ce qu'il écrit.",
            },
            {
              q: "Quelle information faut-il vérifier en priorité dans une réponse d'IA ?",
              options: [
                "La politesse de la formule de salutation à la fin de la réponse",
                "La longueur des paragraphes",
                "Le nombre de mots",
                "Les dates, chiffres, noms propres et citations",
              ],
              answer: 3,
              why: "Les informations précises sont celles que l'IA invente le plus facilement et qui comptent le plus dans un devoir.",
            },
            {
              q: "Vous demandez à l'IA : « Tu es sûr ? » et elle change d'avis. Qu'en concluez-vous ?",
              options: [
                "La seconde réponse est forcément la bonne, puisqu'elle a réfléchi",
                "Insister n'est pas vérifier : il faut une source fiable",
                "La première réponse était forcément la bonne",
              ],
              answer: 1,
              why: "L'IA peut changer d'avis simplement parce qu'on insiste ; seule une source fiable et indépendante permet de trancher.",
            },
            {
              q: "Laquelle de ces sources permet de vérifier une date d'histoire ?",
              options: [
                "Une deuxième IA",
                "Un commentaire anonyme sur un réseau social",
                "Votre manuel d'histoire",
              ],
              answer: 2,
              why: "Le manuel est une source fiable, rédigée et relue par des auteurs identifiés, conforme au programme.",
            },
          ],
          trap: "Croire qu'une réponse est juste parce qu'elle est bien rédigée, détaillée et affirmée sans hésitation, ou croire que demander à l'IA si elle est sûre d'elle suffit à vérifier.",
          method: "Dans chaque réponse d'IA, surlignez tout ce qui est vérifiable (dates, chiffres, noms, citations, références), puis vérifiez au moins ces éléments dans le manuel ou une source fiable avant de les réutiliser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-donnees',
          title: "Vos données et votre vie privée face à l'IA",
          minutes: 25,
          objectives: [
            "Identifier les données personnelles et les données sensibles.",
            "Expliquer ce que peut devenir une information confiée à un service d'IA en ligne.",
            "Appliquer des règles simples pour utiliser une IA sans exposer sa vie privée ni celle des autres.",
            "Citer les droits que donne le RGPD et l'autorité qui les protège en France.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une donnée personnelle ?",
              paragraphs: [
                "Une donnée personnelle est une information qui permet d'identifier une personne, directement (son nom, sa photo, sa voix) ou indirectement (son adresse, son numéro de téléphone, un identifiant de compte). Plusieurs informations anodines réunies peuvent aussi suffire : un prénom, le nom d'un collège et une classe permettent souvent de retrouver quelqu'un.",
                "Certaines données sont dites sensibles et bénéficient d'une protection renforcée : les informations sur la santé, les origines, les convictions religieuses, les opinions politiques, la vie sexuelle ou les données biométriques (comme l'empreinte digitale utilisée pour identifier quelqu'un).",
              ],
              box: { label: "Définition", text: "Selon le RGPD, une donnée personnelle est toute information se rapportant à une personne physique identifiée ou identifiable, directement ou indirectement." },
            },
            {
              heading: "Ce que devient ce que vous écrivez",
              paragraphs: [
                "Un service d'IA en ligne ne fonctionne pas dans votre téléphone : votre texte, vos fichiers et vos photos sont envoyés sur les serveurs de l'entreprise qui le propose. Selon le service et ses réglages, les conversations peuvent être conservées, relues par des personnes pour améliorer l'outil, ou utilisées pour entraîner de futures versions.",
                "Une fois une information envoyée, vous n'en avez plus vraiment la maîtrise : elle peut être conservée longtemps, exposée en cas de piratage, ou partagée par erreur (un lien de conversation envoyé à un ami, une capture d'écran publiée). Les conditions d'utilisation et les paramètres de confidentialité expliquent ce que fait le service ; beaucoup fixent aussi un âge minimum : lisez-les avec un parent.",
              ],
            },
            {
              heading: "Les règles d'or",
              paragraphs: [
                "Ne confiez jamais à une IA : votre nom complet, votre adresse, votre numéro de téléphone, vos mots de passe et identifiants (ENT, messagerie), des photos de vous ou d'autres personnes, des informations de santé ou des secrets de famille. La plupart des questions scolaires n'ont besoin d'aucune de ces informations.",
                "Anonymisez : remplacez les noms par des mentions neutres (« un élève », « ma ville », [NOM]) et complétez vous-même, en dehors de l'IA, le document final. Les données des autres ne vous appartiennent pas : n'envoyez ni la copie d'un camarade, ni une photo de classe, ni un message privé reçu.",
                "Une IA n'est pas un confident. Pour un problème personnel (harcèlement, santé, inquiétude), parlez à un adulte de confiance : un parent, le CPE, l'infirmière ou l'infirmier scolaire, un professeur. En cas de cyberharcèlement, le 3018 est un numéro national gratuit et anonyme.",
              ],
              box: { label: "Règle", text: "Avant d'envoyer un texte à une IA, retirez tout ce qui permettrait d'identifier quelqu'un, vous ou une autre personne. Si une information n'est pas nécessaire pour répondre à la question, elle n'a rien à faire dans le prompt." },
            },
            {
              heading: "Vos droits",
              paragraphs: [
                "Dans l'Union européenne, le Règlement général sur la protection des données (RGPD), appliqué depuis le 25 mai 2018, encadre l'usage des données personnelles. Il vous donne notamment le droit d'accéder à vos données, de les faire rectifier, de demander leur effacement et de vous opposer à certains usages. En France, l'autorité chargée de protéger ces droits est la CNIL (Commission nationale de l'informatique et des libertés).",
                "En France, un mineur peut consentir seul au traitement de ses données par un service en ligne à partir de 15 ans ; avant cet âge, l'accord d'un parent est aussi nécessaire. Votre établissement, lorsqu'il propose des outils numériques, doit lui aussi respecter ces règles.",
              ],
              box: { label: "Repère", text: "RGPD : appliqué depuis le 25 mai 2018 dans l'Union européenne. CNIL : l'autorité française de protection des données. 15 ans : l'âge à partir duquel un mineur peut consentir seul, en France, au traitement de ses données en ligne." },
            },
          ],
          keyPoints: [
            "Une donnée personnelle permet d'identifier quelqu'un, directement (nom, photo) ou indirectement (adresse, classe et prénom).",
            "Ce que vous envoyez à une IA en ligne part sur les serveurs d'une entreprise et peut être conservé ou relu.",
            "Jamais de nom complet, d'adresse, de numéro, de mot de passe, de photo ni d'information de santé dans un prompt.",
            "On anonymise et on complète soi-même le document final ; les données des autres ne nous appartiennent pas.",
            "Le RGPD donne des droits (accès, rectification, effacement, opposition) ; la CNIL les protège en France.",
            "Pour un problème personnel, on parle à un adulte de confiance ; en cas de cyberharcèlement, on appelle le 3018.",
          ],
          example: {
            statement: "Inès, en 3e, veut qu'une IA l'aide à améliorer sa lettre de motivation pour son stage d'observation. Elle s'apprête à coller sa lettre complète, avec son nom, son adresse, son numéro de portable, sa date de naissance et le nom de son collège. Que doit-elle faire ?",
            solution: [
              "Repérer les données personnelles : nom, adresse, numéro de portable et date de naissance permettent de l'identifier directement ; le nom du collège l'identifie indirectement.",
              "Se demander si ces informations sont utiles à la question : pour améliorer le style et l'organisation de la lettre, aucune ne l'est.",
              "Les remplacer par des mentions neutres : [NOM], [ADRESSE], [TÉLÉPHONE], « mon collège ».",
              "Envoyer seulement le corps de la lettre anonymisé, avec une demande précise : « Relis ma lettre et signale-moi les maladresses, sans la réécrire à ma place. »",
              "Recopier elle-même les améliorations retenues dans son document, puis compléter les informations personnelles hors de l'IA.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque information en « donnée personnelle » ou « pas une donnée personnelle » : a) « J'habite 12 rue des Lilas, à Tours. » b) l'énoncé du théorème de Pythagore ; c) votre mot de passe de l'ENT ; d) une photo de votre classe ; e) la date de la bataille de Marignan (1515) ; f) votre numéro de portable.",
              hint: "Demandez-vous si l'information permet de retrouver ou de reconnaître une personne précise.",
              solution: [
                "a) Donnée personnelle : une adresse permet de localiser et d'identifier une personne.",
                "b) Pas une donnée personnelle : c'est une connaissance mathématique, qui ne concerne personne en particulier.",
                "c) Donnée personnelle, et même secrète : un mot de passe donne accès à votre compte et ne se confie jamais.",
                "d) Donnée personnelle : chaque visage permet d'identifier un élève ; c'est en plus la donnée d'autres personnes.",
                "e) Pas une donnée personnelle : c'est un fait historique.",
                "f) Donnée personnelle : un numéro permet de vous contacter et de vous identifier.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ce prompt pour qu'il ne contienne plus aucune donnée personnelle inutile, tout en gardant la demande : « Je m'appelle Chloé Martin, je suis en 2nde B au lycée Victor-Hugo de Besançon, ma professeure de SVT, Mme Durand, m'a mis 8/20, j'ai de l'asthme donc je rate souvent le sport, aide-moi à faire un planning de révision. »",
              hint: "Gardez seulement ce dont l'IA a besoin pour construire un planning : la classe, la matière, le besoin. Supprimez tout le reste.",
              solution: [
                "Données à retirer : le nom complet, la classe précise et le lycée (identification), le nom de la professeure (donnée d'une autre personne), l'information de santé (donnée sensible, inutile ici).",
                "Informations utiles à garder : le niveau (seconde), la matière (SVT), le besoin (mieux réviser après une note décevante).",
                "Prompt réécrit : « Je suis en seconde. J'ai eu une note décevante en SVT et je veux mieux réviser. Aide-moi à construire un planning de révision sur deux semaines, avec des séances de 30 minutes. »",
                "Résultat : la demande est aussi efficace, et aucune information ne permet d'identifier Chloé ou sa professeure.",
              ],
            },
            {
              level: 3,
              statement: "Un ami vous propose une application d'IA qui « vieillit » votre visage à partir d'un selfie. Rédigez un paragraphe argumenté d'une dizaine de lignes présentant les questions à se poser avant de l'utiliser, puis votre décision.",
              hint: "Pensez à la nature de la donnée envoyée, à ce que devient le fichier, à vos droits et à l'avis de vos parents.",
              solution: [
                "Nature de la donnée : un visage est une donnée personnelle qui vous identifie directement, et une photo peut être exploitée par des procédés de reconnaissance faciale.",
                "Questions sur le service : qui publie l'application ? Dans quel pays sont envoyées les photos ? Sont-elles conservées, et combien de temps ? Servent-elles à entraîner l'IA ou sont-elles revendues ?",
                "Questions sur vos droits : les conditions d'utilisation permettent-elles de supprimer la photo ? Quel est l'âge minimum ? Avant 15 ans, l'accord d'un parent est nécessaire en France.",
                "Prudence : une fois envoyée, une photo échappe à votre contrôle ; un amusement de quelques secondes ne justifie pas ce risque.",
                "Décision argumentée possible : ne pas utiliser l'application sans avoir lu sa politique de confidentialité avec un parent, et y renoncer si elle conserve ou réutilise les photos.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les vérifications à faire avant d'envoyer un texte à une IA.",
            items: [
              "Relire en entier ce que vous allez envoyer",
              "Repérer les données personnelles, les vôtres et celles des autres",
              "Supprimer ce qui n'est pas utile pour répondre à la question",
              "Remplacer le reste par des mentions neutres comme [NOM] ou « ma ville »",
              "Envoyer le texte anonymisé avec une demande précise",
              "Compléter vous-même, hors de l'IA, les informations retirées",
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces informations est une donnée personnelle ?",
              options: [
                "La formule de l'aire d'un disque",
                "Votre identifiant de connexion à l'ENT",
                "La date du début de la Révolution française",
              ],
              answer: 1,
              why: "Un identifiant de compte permet de vous identifier ; les deux autres informations ne concernent personne en particulier.",
            },
            {
              q: "Votre prompt ne contient pas votre nom, mais votre prénom, votre classe et votre collège. Est-il anonyme ?",
              options: [
                "Oui, car le nom de famille n'y figure pas",
                "Oui, car l'IA ne retient rien",
                "Non, car ces informations réunies permettent souvent de vous identifier",
                "Non, car le prénom suffit toujours à identifier n'importe qui",
              ],
              answer: 2,
              why: "Des informations anodines réunies suffisent souvent à identifier quelqu'un : c'est une identification indirecte.",
            },
            {
              q: "Quelle autorité protège les données personnelles en France ?",
              options: [
                "La CNIL",
                "Le CDI",
                "Le ministère des Sports",
                "Le conseil de classe",
              ],
              answer: 0,
              why: "La CNIL, Commission nationale de l'informatique et des libertés, veille au respect du RGPD en France.",
            },
            {
              q: "Un camarade vous envoie un message privé. Pouvez-vous le coller dans une IA pour lui demander ce qu'elle en pense ?",
              options: [
                "Oui, puisque le message vous a été envoyé",
                "Oui, à condition d'effacer la conversation juste après avoir eu la réponse",
                "Non : ce sont les données d'une autre personne, partagées sans son accord",
              ],
              answer: 2,
              why: "Les données des autres ne vous appartiennent pas ; les transmettre à un service en ligne sans accord ne respecte pas leur vie privée.",
            },
            {
              q: "À partir de quel âge un mineur peut-il, en France, consentir seul au traitement de ses données par un service en ligne ?",
              options: [
                "11 ans",
                "13 ans",
                "18 ans",
                "15 ans",
              ],
              answer: 3,
              why: "La loi française fixe ce seuil à 15 ans ; avant, l'accord d'un parent est aussi nécessaire.",
            },
          ],
          trap: "Croire qu'un texte est anonyme parce que le nom de famille n'y figure pas : la classe, l'établissement, la ville et un détail suffisent souvent à reconnaître quelqu'un.",
          method: "Avant d'envoyer un prompt, posez-vous une question simple : « Accepterais-je que ce message soit affiché au tableau devant toute la classe ? » Si la réponse est non, retirez ou anonymisez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-regles',
          title: "Ce que votre établissement autorise, et pourquoi",
          minutes: 20,
          objectives: [
            "Identifier les textes et les consignes qui encadrent l'usage de l'IA dans votre établissement.",
            "Distinguer un usage autorisé, un usage soumis à l'accord du professeur et un usage interdit.",
            "Expliquer les raisons de ces règles : apprendre, évaluer équitablement, protéger les données.",
          ],
          course: [
            {
              heading: "Qui fixe les règles ?",
              paragraphs: [
                "Le ministère de l'Éducation nationale a publié un cadre d'usage de l'IA en éducation, qui donne des orientations pour toute la France. Chaque établissement précise ensuite ses propres règles, en particulier dans son règlement intérieur et dans sa charte d'usage du numérique, que vous et vos parents acceptez en début d'année.",
                "Enfin, chaque professeur peut donner une consigne pour un travail précis : IA interdite, autorisée pour une seule étape (chercher des idées, se faire relire), ou au contraire demandée pour un exercice sur l'IA elle-même. Cette consigne s'applique au travail concerné ; elle peut donc changer d'une matière à l'autre et d'un devoir à l'autre.",
                "Les règles ne sont donc pas les mêmes partout : ce qui est permis dans un lycée peut être interdit dans un autre, et ce qui est permis pour un exposé peut être interdit pour une rédaction. C'est à vous de lire les règles de votre établissement et de demander en cas de doute.",
              ],
              box: { label: "Règle", text: "En cas de doute sur l'usage de l'IA pour un travail, demandez au professeur avant de commencer, pas après avoir rendu la copie." },
            },
            {
              heading: "Trois situations à distinguer",
              paragraphs: [
                "Selon les établissements et les consignes, on rencontre en général trois cas. Les usages souvent permis : réviser, se faire réexpliquer une notion, s'entraîner avec un quiz, lorsque aucune consigne ne l'interdit. Les usages soumis à l'accord du professeur : s'aider de l'IA pour un devoir à la maison ou un exposé noté, par exemple pour chercher des pistes ou se faire relire.",
                "Les usages interdits : faire produire par une IA tout ou partie d'un travail noté que l'on présente comme le sien, et utiliser une IA pendant une évaluation en classe sans autorisation. Pendant un examen comme le brevet ou le bac, utiliser un appareil ou une aide non autorisée est une fraude, sanctionnée par une commission de discipline ; les sanctions peuvent aller jusqu'à l'interdiction de passer un examen pendant plusieurs années.",
              ],
            },
            {
              heading: "Pourquoi ces règles existent",
              paragraphs: [
                "Pour apprendre : un devoir n'est pas une commande à livrer, c'est un entraînement. Si l'IA le fait, c'est elle qui s'entraîne, pas vous. Regarder quelqu'un soulever des poids ne vous rend pas plus fort ; faire faire sa rédaction ne vous apprend pas à rédiger.",
                "Pour évaluer équitablement : une note doit mesurer ce que vous savez faire. Si certains élèves rendent un travail fait par une IA, les notes ne veulent plus rien dire et la comparaison devient injuste pour ceux qui ont travaillé.",
                "Pour l'honnêteté et la confiance : une copie que vous rendez sous votre nom affirme que c'est votre travail. Et votre professeur ne peut vous aider que s'il voit vos vraies difficultés. Enfin, pour protéger vos données : l'établissement choisit des outils qui respectent la loi et l'âge des élèves.",
              ],
            },
            {
              heading: "Adopter la bonne attitude",
              paragraphs: [
                "Lisez le passage de votre règlement intérieur et de votre charte numérique qui concerne le numérique et l'IA. Pour chaque devoir, notez la consigne du professeur. Si l'IA est permise, dites précisément comment vous l'avez utilisée ; si elle est interdite, ne l'utilisez pas, même pour « juste une phrase ».",
              ],
              box: { label: "À retenir", text: "Trois niveaux de règles : le cadre national publié par le ministère, les règles de votre établissement, la consigne du professeur pour chaque travail. Ce qui n'est pas clairement permis se demande avant." },
            },
          ],
          keyPoints: [
            "Le ministère a publié un cadre d'usage de l'IA en éducation ; chaque établissement fixe ses propres règles.",
            "Le règlement intérieur, la charte numérique et la consigne du professeur s'appliquent à chaque travail.",
            "Réviser et se faire réexpliquer sont souvent permis ; un devoir noté demande l'accord du professeur.",
            "Faire faire un travail noté par une IA ou l'utiliser pendant une évaluation sans autorisation est interdit.",
            "Les règles protègent l'apprentissage, l'équité des notes, l'honnêteté et vos données.",
            "En cas de doute, on demande avant de commencer.",
          ],
          example: {
            statement: "Le professeur de français donne une rédaction à faire à la maison, avec la consigne « sans aide extérieure ». Noah utilise une IA seulement pour trouver un plan, puis rédige tout lui-même. A-t-il respecté la consigne ? Que devait-il faire ?",
            solution: [
              "Lire la consigne : « sans aide extérieure » exclut toute aide, humaine ou numérique ; une IA est une aide extérieure.",
              "Analyser l'usage : le plan fait partie du travail évalué (organiser ses idées) ; même si Noah a rédigé seul, une partie du travail ne vient pas de lui.",
              "Conclure : Noah n'a pas respecté la consigne.",
              "Ce qu'il devait faire : s'appuyer sur ses cours et ses propres idées, ou demander au professeur, avant de commencer, si une aide pour le plan était acceptable.",
              "Ce qu'il peut faire maintenant : le dire honnêtement au professeur, ce qui vaut toujours mieux que d'être découvert.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici l'extrait fictif de la charte d'un collège : « L'usage d'une IA générative est permis pour réviser et s'entraîner. Pour un travail noté fait à la maison, il n'est permis qu'avec l'accord explicite du professeur, et doit être signalé. Il est interdit pendant les évaluations en classe. » Classez chaque situation en « permis », « à demander » ou « interdit » : a) demander un quiz pour réviser l'histoire ; b) utiliser l'IA sur son téléphone pendant un contrôle de maths ; c) se faire aider pour un devoir maison noté de physique, alors que le professeur n'a rien précisé ; d) se faire réexpliquer une leçon de SVT ; e) chercher des idées pour un exposé noté, le professeur ayant autorisé l'IA à cette étape.",
              hint: "Repérez dans l'extrait les trois cas prévus, puis demandez-vous pour chaque situation si elle est notée et si le professeur a donné son accord.",
              solution: [
                "a) Permis : c'est une révision.",
                "b) Interdit : c'est une évaluation en classe.",
                "c) À demander : c'est un travail noté à la maison, et l'accord explicite du professeur manque ; sans cet accord, l'usage n'est pas permis.",
                "d) Permis : se faire réexpliquer une leçon relève de la révision.",
                "e) Permis, à condition de signaler l'usage, comme l'exige la charte.",
              ],
            },
            {
              level: 2,
              statement: "Une professeure interdit l'IA pour une dissertation à rédiger à la maison. Un élève trouve cette règle injuste. Donnez trois raisons, tirées du cours, qui justifient cette interdiction, en une phrase chacune.",
              hint: "Pensez à ce que la dissertation entraîne, à ce que la note mesure et à ce que la professeure doit voir de votre travail.",
              solution: [
                "Raison 1 (apprendre) : la dissertation entraîne à construire un raisonnement et à rédiger ; si l'IA le fait, l'élève ne s'entraîne pas.",
                "Raison 2 (équité) : la note doit mesurer ce que chaque élève sait faire, à égalité ; un texte produit par une IA fausse la comparaison.",
                "Raison 3 (honnêteté et suivi) : la copie rendue sous son nom doit être son travail, et la professeure doit voir ses vraies difficultés pour l'aider à progresser.",
              ],
            },
            {
              level: 3,
              statement: "Vous préparez un exposé noté en histoire-géographie et vous aimeriez utiliser une IA pour vérifier que votre plan est clair. Rédigez le message (cinq à huit lignes) que vous envoyez à votre professeur pour lui demander l'autorisation, en précisant l'usage prévu et la façon dont vous le signalerez.",
              hint: "Un bon message est poli, précis sur l'étape concernée, et propose une façon de rendre l'usage visible.",
              solution: [
                "Formule d'appel : « Bonjour Madame (ou Monsieur), »",
                "Objet de la demande : « Pour l'exposé sur le thème étudié en classe, j'aimerais savoir si je peux utiliser une IA pour une seule étape. »",
                "Usage précis : « J'ai déjà fait mes recherches et écrit mon plan moi-même. Je voudrais seulement demander à l'IA si mon plan est clair et logique, sans lui faire rédiger aucune partie. »",
                "Transparence : « Si vous êtes d'accord, j'indiquerai à la fin de l'exposé l'outil utilisé, la question posée et ce que j'ai modifié grâce à sa réponse. »",
                "Conclusion polie : « Je respecterai votre décision. Merci d'avance pour votre réponse. » suivie de la signature.",
                "Résultat : un message qui demande avant d'agir, limite l'usage à une étape et prévoit de le déclarer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ?",
            statements: [
              { text: "Les règles sur l'IA sont exactement les mêmes dans tous les établissements.", true: false, why: "Le ministère donne un cadre, mais chaque établissement fixe ses propres règles." },
              { text: "Un professeur peut autoriser l'IA pour un devoir et l'interdire pour un autre.", true: true, why: "La consigne du professeur s'applique à chaque travail." },
              { text: "Ce qui n'est pas écrit comme interdit est forcément autorisé.", true: false, why: "En cas de doute, on demande avant ; beaucoup d'usages dépendent de l'accord du professeur." },
              { text: "Utiliser une IA pendant le brevet ou le bac sans autorisation est une fraude.", true: true, why: "C'est une aide non autorisée pendant un examen, sanctionnée par une commission de discipline." },
              { text: "Si l'IA rédige seulement l'introduction, la copie reste entièrement votre travail.", true: false, why: "Toute partie produite par l'IA et présentée comme la vôtre pose problème si ce n'est pas permis." },
              { text: "Les règles sur l'IA servent aussi à rendre les notes équitables.", true: true, why: "Une note doit mesurer ce que chaque élève sait faire, à égalité." },
            ],
          },
          quiz: [
            {
              q: "Où trouvez-vous les règles d'usage de l'IA propres à votre établissement ?",
              options: [
                "Dans le règlement intérieur et la charte du numérique",
                "Dans les réponses d'une IA à qui vous posez la question",
                "Sur le réseau social d'un camarade",
              ],
              answer: 0,
              why: "Chaque établissement précise ses règles dans son règlement intérieur et sa charte d'usage du numérique.",
            },
            {
              q: "Le professeur n'a rien dit sur l'IA pour un devoir maison noté. Que faites-vous ?",
              options: [
                "Vous l'utilisez, puisque ce n'est pas interdit",
                "Vous l'utilisez sans le dire",
                "Vous demandez au professeur avant de commencer",
                "Vous demandez à l'IA si c'est permis",
              ],
              answer: 2,
              why: "Ce qui n'est pas clairement permis se demande avant ; seul le professeur peut fixer la consigne de son devoir.",
            },
            {
              q: "Quelle est la principale raison d'interdire l'IA pour un exercice d'entraînement ?",
              options: [
                "L'IA coûte trop cher à l'établissement",
                "Les professeurs n'aiment pas la technologie",
                "Les réponses de l'IA sont toujours fausses dans les exercices scolaires",
                "L'exercice sert à vous entraîner : si l'IA le fait, vous n'apprenez pas",
              ],
              answer: 3,
              why: "Un exercice est un entraînement ; c'est votre effort qui vous fait progresser.",
            },
            {
              q: "Qu'a publié le ministère de l'Éducation nationale au sujet de l'IA ?",
              options: [
                "Une liste unique d'applications obligatoires pour tous les élèves",
                "Un cadre d'usage de l'IA en éducation",
                "Une interdiction totale de l'IA dans toute la vie des élèves",
              ],
              answer: 1,
              why: "Le ministère a publié un cadre d'usage de l'IA en éducation ; chaque établissement précise ensuite ses règles.",
            },
            {
              q: "L'IA est autorisée pour vous relire. Que faites-vous en rendant votre travail ?",
              options: [
                "Vous indiquez comment vous l'avez utilisée",
                "Vous n'en parlez pas, puisque c'était permis",
                "Vous effacez la conversation",
              ],
              answer: 0,
              why: "Même permis, l'usage se déclare : le professeur sait ainsi ce qui vient de vous.",
            },
          ],
          trap: "Penser que ce qui n'est pas explicitement interdit est forcément autorisé, ou que la règle donnée dans une matière vaut pour tous les devoirs et toutes les matières.",
          method: "En début d'année, relisez dans le règlement intérieur et la charte numérique le passage sur le numérique et l'IA ; puis, pour chaque devoir, notez dans votre agenda la consigne du professeur sur l'IA à côté de la date de remise.",
        },
      ],
    },
    {
      id: 'apprendre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cerveau-apprend',
          title: "Comment votre cerveau apprend vraiment",
          minutes: 30,
          objectives: [
            "Décrire les trois étapes de la mémorisation : encodage, consolidation, récupération.",
            "Distinguer les méthodes de travail efficaces (rappel actif, répétition espacée, élaboration) de celles qui donnent une illusion de maîtrise.",
            "Expliquer le rôle de l'effort, des erreurs et du sommeil dans l'apprentissage.",
            "Expliquer pourquoi faire faire son travail par une IA empêche d'apprendre.",
          ],
          course: [
            {
              heading: "Apprendre, c'est transformer son cerveau",
              paragraphs: [
                "Votre cerveau contient des milliards de neurones reliés entre eux. Quand vous apprenez, certaines connexions se renforcent et de nouvelles se créent : c'est la plasticité cérébrale. Plus un chemin est parcouru souvent, plus il devient solide, comme un sentier qui se trace à force d'être emprunté.",
                "La mémoire de travail, celle qui garde une information quelques secondes (un numéro que l'on vient d'entendre), est très limitée. Apprendre consiste à faire passer les connaissances dans la mémoire à long terme, puis à savoir les y retrouver.",
                "On distingue trois étapes. L'encodage : l'information entre, à condition d'y prêter attention. La consolidation : la trace se stabilise dans les heures et les jours qui suivent, en particulier pendant le sommeil. La récupération : vous allez rechercher l'information quand vous en avez besoin, et chaque récupération réussie renforce la trace.",
              ],
              box: { label: "Définition", text: "Mémoriser se fait en trois étapes : l'encodage (faire entrer l'information, avec attention), la consolidation (la stabiliser, notamment pendant le sommeil) et la récupération (la retrouver, ce qui la renforce)." },
            },
            {
              heading: "L'oubli est normal, et il se combat",
              paragraphs: [
                "Le psychologue allemand Hermann Ebbinghaus a publié en 1885 des expériences sur sa propre mémoire. Il a montré qu'on oublie très vite juste après avoir appris, puis plus lentement : c'est la courbe de l'oubli. Oublier n'est donc pas un signe de faiblesse, c'est le fonctionnement normal de la mémoire.",
                "Chaque révision ralentit l'oubli. D'où la répétition espacée : revoir une notion à intervalles de plus en plus longs, par exemple le lendemain, quelques jours après, une semaine après, puis quelques semaines après. Tout réviser la veille (le bachotage) peut suffire pour le lendemain, mais l'essentiel est vite oublié, alors que les connaissances serviront encore l'année suivante.",
              ],
            },
            {
              heading: "Se tester plutôt que relire",
              paragraphs: [
                "Le rappel actif consiste à essayer de retrouver une information de mémoire, sans la regarder : réciter, répondre à des questions, refaire un exercice sans la correction. Les chercheurs en sciences cognitives ont montré que cet effort de récupération fait mieux retenir que la relecture : on parle d'effet test.",
                "Relire et surligner donnent au contraire une illusion de maîtrise : le cours devient familier, vous le reconnaissez, mais le reconnaître ne prouve pas que vous sauriez le restituer sans le voir. C'est la différence entre reconnaître un visage et retrouver le nom de la personne.",
                "L'élaboration complète le rappel : se demander « pourquoi ? » et « comment ? », relier la notion à ce que l'on sait déjà, l'expliquer avec ses propres mots, trouver un exemple personnel. Mélanger les types d'exercices au lieu de les enchaîner par série (l'entrelacement) aide aussi à reconnaître quelle méthode utiliser.",
              ],
            },
            {
              heading: "L'effort et l'erreur font partie du chemin",
              paragraphs: [
                "Le chercheur américain Robert Bjork a nommé difficultés désirables ces efforts qui rendent l'apprentissage plus lent sur le moment, mais plus solide : chercher avant de lire la solution, se tester, espacer. La sensation d'effort n'est pas le signe que vous apprenez mal ; elle accompagne souvent un apprentissage durable.",
                "Une erreur suivie de sa correction est une occasion d'apprendre : elle montre précisément ce qui n'était pas encore acquis. Le sommeil, l'attention (téléphone loin pendant le travail) et des pauses courtes complètent ces méthodes.",
              ],
              box: { label: "À retenir", text: "Ce qui paraît facile sur le moment (relire, regarder une correction) fait peu apprendre ; ce qui demande un effort (se tester, chercher, espacer, corriger ses erreurs) fait apprendre durablement." },
            },
            {
              heading: "Et l'IA dans tout cela ?",
              paragraphs: [
                "Si une IA rédige votre résumé, résout votre exercice ou écrit votre paragraphe, c'est elle qui fait l'effort d'encodage et de récupération, pas votre cerveau : le travail est rendu, mais rien n'est appris. On n'apprend que ce que l'on fait soi-même, de même que regarder quelqu'un s'entraîner au sport ne vous muscle pas.",
                "L'IA devient utile quand elle vous fait travailler davantage : quand elle vous pose des questions, vous interroge, vous réexplique autrement ou vous signale vos erreurs sans les corriger à votre place. Les leçons suivantes montrent comment.",
              ],
            },
          ],
          keyPoints: [
            "Mémoriser se fait en trois étapes : encodage, consolidation (notamment pendant le sommeil), récupération.",
            "L'oubli est rapide après l'apprentissage (Ebbinghaus, 1885) ; chaque révision espacée le ralentit.",
            "Le rappel actif (se tester sans regarder) fait mieux retenir que la relecture.",
            "Relire et surligner donnent une illusion de maîtrise : reconnaître n'est pas savoir restituer.",
            "L'effort, les erreurs corrigées et l'élaboration (pourquoi, comment, exemples) rendent l'apprentissage durable.",
            "Si l'IA fait l'effort à votre place, le travail est rendu mais rien n'est appris.",
          ],
          example: {
            statement: "Deux élèves de 4e préparent un contrôle d'histoire sur la Révolution française. Sarah relit trois fois sa leçon la veille du contrôle, pendant 45 minutes en tout. Yanis fait, sur la semaine, trois séances de 15 minutes : il ferme son cahier, écrit tout ce dont il se souvient, puis corrige en couleur ce qui manque. Quelle méthode est la plus efficace, et pourquoi ?",
            solution: [
              "Comparer le temps : les deux élèves travaillent 45 minutes au total ; la différence vient donc de la méthode, pas du temps passé.",
              "Analyser Sarah : elle relit (pas de rappel actif) et concentre tout la veille (pas d'espacement). Le cours lui semblera familier, ce qui crée une illusion de maîtrise.",
              "Analyser Yanis : il pratique le rappel actif (écrire de mémoire), la répétition espacée (trois séances sur la semaine) et corrige ses erreurs.",
              "Ajouter le rôle du sommeil : entre les séances de Yanis, plusieurs nuits consolident ce qu'il a appris.",
              "Conclusion : la méthode de Yanis est la plus efficace, pour le contrôle et plus encore pour s'en souvenir des mois plus tard.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque méthode en « efficace » ou « peu efficace seule », en justifiant en une phrase : a) relire son cours en surlignant ; b) fermer son cahier et réciter la leçon ; c) refaire un exercice sans regarder la correction ; d) recopier proprement la leçon ; e) expliquer la notion à voix haute comme à un camarade ; f) lire la correction d'un exercice sans l'avoir cherché.",
              hint: "Demandez-vous à chaque fois si la méthode oblige votre mémoire à retrouver l'information, ou si l'information reste sous vos yeux.",
              solution: [
                "a) Peu efficace seule : relire et surligner rendent le cours familier sans obliger à le retrouver de mémoire.",
                "b) Efficace : c'est du rappel actif.",
                "c) Efficace : chercher sans la correction est un effort de récupération, et l'erreur éventuelle montre ce qu'il faut revoir.",
                "d) Peu efficace seule : recopier se fait en regardant le modèle ; cela peut aider à organiser, mais ne teste pas la mémoire.",
                "e) Efficace : c'est à la fois du rappel actif et de l'élaboration (expliquer avec ses mots).",
                "f) Peu efficace seule : sans recherche préalable, la correction paraît évidente et donne une illusion de maîtrise.",
              ],
            },
            {
              level: 2,
              statement: "Vous apprenez une leçon de SVT le lundi 2 ; le contrôle a lieu le vendredi 20 du même mois. Proposez un calendrier de quatre séances courtes de rappel actif, avec des intervalles de plus en plus longs entre les séances, en indiquant le jour de la semaine et la date de chacune.",
              hint: "Commencez le lendemain, puis augmentez l'écart à chaque fois ; vérifiez les jours de la semaine en comptant à partir du lundi 2.",
              solution: [
                "Séance 1 : mardi 3, le lendemain (intervalle d'un jour après l'apprentissage).",
                "Séance 2 : jeudi 5, deux jours plus tard.",
                "Séance 3 : lundi 9, quatre jours plus tard (le lundi 2 plus 7 jours).",
                "Séance 4 : lundi 16, sept jours plus tard.",
                "Vérification des jours : lundi 2, lundi 9 et lundi 16 sont séparés de 7 jours ; le vendredi 20 vient 4 jours après le lundi 16.",
                "Les intervalles (1, 2, 4 puis 7 jours) augmentent ; un dernier rappel léger le jeudi 19 est possible. Chaque séance commence cahier fermé, puis se termine par la correction des oublis.",
              ],
            },
            {
              level: 3,
              statement: "Un élève affirme qu'en faisant faire ses exercices par une IA, il gagne du temps pour relire ses leçons, et qu'il apprend donc mieux. En vous appuyant sur le cours, rédigez un paragraphe argumenté d'une dizaine de lignes montrant que ce raisonnement est doublement erroné.",
              hint: "Cherchez deux erreurs : l'une porte sur ce que l'exercice apporte, l'autre sur l'efficacité de la relecture.",
              solution: [
                "Thèse : ce raisonnement repose sur deux erreurs, car il supprime ce qui fait apprendre et le remplace par ce qui fait peu apprendre.",
                "Première erreur : l'exercice n'est pas une corvée à éviter, c'est le moment où l'élève retrouve et applique ses connaissances (rappel actif). Si l'IA le fait, c'est elle qui fournit l'effort ; l'élève obtient un résultat sans rien encoder.",
                "Il se prive aussi de ses erreurs, qui lui auraient montré ce qu'il ne maîtrise pas encore.",
                "Seconde erreur : la relecture est l'une des méthodes les moins efficaces ; elle rend le cours familier et donne une illusion de maîtrise.",
                "Conclusion : l'élève échange une méthode efficace contre une méthode peu efficace. Il vaut mieux faire soi-même l'exercice et, si l'on bloque, demander à l'IA un indice plutôt que la solution.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Encodage", right: "Faire entrer une information en mémoire, avec attention" },
              { left: "Consolidation", right: "Stabilisation de la trace en mémoire, notamment pendant le sommeil" },
              { left: "Rappel actif", right: "Retrouver une information de mémoire, sans la regarder" },
              { left: "Répétition espacée", right: "Revoir une notion à intervalles de plus en plus longs" },
              { left: "Élaboration", right: "Relier la notion à ce que l'on sait et l'expliquer avec ses mots" },
              { left: "Illusion de maîtrise", right: "Croire savoir un cours parce qu'il paraît familier après relecture" },
            ],
          },
          quiz: [
            {
              q: "Quelle méthode fait le mieux retenir une leçon ?",
              options: [
                "La relire trois fois de suite en surlignant les mots importants",
                "La recopier proprement en couleur",
                "Fermer le cahier et écrire tout ce dont on se souvient",
              ],
              answer: 2,
              why: "Le rappel actif oblige la mémoire à retrouver l'information, ce qui la renforce bien plus que la relecture.",
            },
            {
              q: "Qu'a montré Hermann Ebbinghaus avec la courbe de l'oubli ?",
              options: [
                "On oublie très vite juste après avoir appris, puis plus lentement",
                "On n'oublie jamais ce qu'on a lu une fois",
                "On oublie plus vite ce qu'on a révisé plusieurs fois",
                "L'oubli ne concerne que les personnes âgées",
              ],
              answer: 0,
              why: "L'oubli est rapide au début puis ralentit ; chaque révision espacée le freine davantage.",
            },
            {
              q: "À quel moment la consolidation de la mémoire se fait-elle notamment ?",
              options: [
                "Pendant la relecture du cours",
                "Pendant le sommeil",
                "Pendant que l'on écoute de la musique",
              ],
              answer: 1,
              why: "Le sommeil joue un rôle important dans la stabilisation des souvenirs ; réviser tard en dormant peu est contre-productif.",
            },
            {
              q: "Après plusieurs relectures, un cours vous paraît facile. Que faut-il en penser ?",
              options: [
                "Vous le savez, inutile de vous tester",
                "Il faut le relire encore une fois en entier, lentement, pour être tout à fait sûr",
                "Il faut arrêter de réviser ce chapitre",
                "C'est peut-être une illusion de maîtrise : testez-vous sans le regarder",
              ],
              answer: 3,
              why: "Reconnaître un cours ne prouve pas qu'on sait le restituer ; seul un test sans le regarder le montre.",
            },
            {
              q: "Pourquoi faire faire un exercice par une IA n'apprend-il rien ?",
              options: [
                "Parce que c'est l'effort de chercher qui fait apprendre",
                "Parce que la réponse de l'IA est toujours fausse",
                "Parce que l'IA refuse de résoudre les exercices de mathématiques",
              ],
              answer: 0,
              why: "On n'apprend que ce que l'on fait soi-même : l'effort de récupération est le cœur de l'apprentissage.",
            },
          ],
          trap: "Confondre reconnaître et savoir : après plusieurs relectures, le cours paraît familier, mais cela ne prouve pas que vous sauriez le restituer sans le voir.",
          method: "Méthode du cahier fermé : après chaque leçon, fermez votre cahier, écrivez ou dites tout ce dont vous vous souvenez, puis comparez avec le cours et complétez en couleur ce qui manquait. Recommencez le lendemain, puis quelques jours plus tard.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-tuteur',
          title: "Faire de l'IA un tuteur qui pose des questions",
          minutes: 30,
          objectives: [
            "Rédiger un prompt qui demande à l'IA de guider par des questions sans donner la réponse.",
            "Conduire un échange en plusieurs étapes : dire où l'on bloque, répondre, demander un indice, vérifier.",
            "Évaluer si l'échange a réellement permis de progresser.",
          ],
          course: [
            {
              heading: "D'un distributeur de réponses à un tuteur",
              paragraphs: [
                "Par défaut, une IA générative répond directement à ce qu'on lui demande : posez-lui un exercice, elle le résout. C'est rapide, mais vous venez de voir que l'effort de chercher est ce qui fait apprendre. Heureusement, le prompt permet de changer son comportement : vous pouvez lui demander de jouer le rôle d'un tuteur qui vous fait trouver la réponse vous-même.",
                "Cette façon d'enseigner est très ancienne. Le philosophe athénien Socrate (Ve siècle avant J.-C.) interrogeait ses interlocuteurs pour les amener à découvrir par eux-mêmes ce qu'ils pensaient ; on appelle cette méthode la maïeutique. Un bon tuteur fait de même : il pose une question à la fois, écoute la réponse et donne un indice seulement quand c'est nécessaire.",
              ],
            },
            {
              heading: "Les ingrédients d'un prompt de tuteur",
              paragraphs: [
                "Un prompt de tuteur efficace contient cinq éléments : le rôle (« Tu es mon tuteur de... »), votre niveau (la classe), le sujet précis (le chapitre, l'exercice), les règles de l'échange (ne pas donner la réponse, une seule question à la fois, attendre votre réponse, donner des indices progressifs) et une vérification finale (un exercice du même type à faire seul).",
                "Plus vous précisez ce que vous savez déjà et ce qui vous bloque, plus les questions du tuteur seront utiles. Vous pouvez aussi lui donner la méthode vue en classe, pour qu'il vous guide avec la même démarche que votre professeur.",
              ],
              box: { label: "Exemple de prompt", text: "« Tu es mon tuteur de mathématiques. Je suis en 4e et je travaille le théorème de Pythagore. Ne me donne jamais la réponse directement : pose-moi une question à la fois, attends ma réponse, et donne-moi un indice seulement si je bloque. À la fin, propose-moi un exercice du même type pour vérifier que j'ai compris. »" },
            },
            {
              heading: "Mener l'échange",
              paragraphs: [
                "Répondez vraiment à chaque question, même si vous n'êtes pas sûr de vous : une réponse fausse permet au tuteur de voir où se situe la difficulté. Expliquez votre raisonnement (« Je pense que..., parce que... ») plutôt que de donner un simple résultat.",
                "Si l'IA finit par donner la solution, rappelez-lui la règle : « Tu m'as donné la réponse, alors que je t'ai demandé de me guider. Repose-moi une question. » Au lycée, la démarche est la même pour une question de physique-chimie, une analyse de document en SES ou un commentaire en français : demandez des questions qui vous aident à construire votre propre raisonnement.",
                "Terminez l'échange en résumant vous-même ce que vous avez compris, et demandez au tuteur de corriger votre résumé. C'est vous qui faites l'effort de formuler : c'est là que l'apprentissage se fixe.",
              ],
            },
            {
              heading: "Garder la main et l'esprit critique",
              paragraphs: [
                "Le tuteur peut se tromper, lui aussi : ses questions peuvent contenir une erreur, ou une méthode différente de celle du cours. Vérifiez avec votre cahier et, en cas de désaccord, retenez la méthode de votre professeur et posez-lui la question en classe.",
                "Le vrai test arrive plus tard : si, le lendemain et sans IA, vous réussissez un exercice du même type, l'échange vous a fait progresser. Sinon, vous avez seulement suivi le raisonnement de quelqu'un d'autre. Enfin, un tuteur IA ne s'utilise que pour s'entraîner, jamais pendant un travail noté où il n'est pas autorisé.",
              ],
              box: { label: "Règle", text: "Un échange avec un tuteur IA est réussi si, le lendemain et sans aide, vous savez refaire seul un exercice du même type." },
            },
          ],
          keyPoints: [
            "Par défaut l'IA donne la réponse ; le prompt peut en faire un tuteur qui pose des questions.",
            "Un prompt de tuteur précise : le rôle, la classe, le sujet, les règles (pas de réponse, une question à la fois, indices) et une vérification finale.",
            "Répondez vraiment, expliquez votre raisonnement et rappelez la règle si l'IA donne la solution.",
            "Terminez en résumant vous-même ce que vous avez compris.",
            "Le test de réussite : refaire seul, le lendemain, un exercice du même type.",
          ],
          example: {
            statement: "Mehdi, en 3e, bloque sur l'équation 3x + 5 = 20. Montrez comment un échange avec un tuteur IA peut l'aider à la résoudre lui-même, puis donnez la solution.",
            solution: [
              "Le prompt : « Tu es mon tuteur de maths, je suis en 3e. Je dois résoudre 3x + 5 = 20 et je bloque. Ne me donne pas la réponse : pose-moi une question à la fois. »",
              "Question du tuteur : « Que peux-tu faire aux deux membres de l'égalité pour que 3x se retrouve seul à gauche ? » Mehdi répond : « Enlever 5 des deux côtés. » Il obtient 3x = 20 - 5, soit 3x = 15.",
              "Question suivante : « Comment passer de 3x à x ? » Mehdi répond : « Diviser les deux membres par 3. » Il obtient x = 15 ÷ 3, soit x = 5.",
              "Vérification demandée par le tuteur : 3 × 5 + 5 = 15 + 5 = 20. L'égalité est vraie.",
              "Résumé fait par Mehdi : « Pour isoler x, j'applique la même opération aux deux membres, en enlevant d'abord ce qui est ajouté, puis en divisant par le coefficient. »",
              "Solution : x = 5. Le lendemain, Mehdi vérifie qu'il sait résoudre seul une équation du même type, par exemple 4x - 3 = 13.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces trois prompts, lequel transforme l'IA en tuteur ? Justifiez, et dites ce qui ne va pas dans les deux autres. a) « Résous cet exercice de physique. » b) « Explique-moi tout le chapitre sur l'énergie. » c) « Je suis en 3e et je bloque sur cet exercice sur l'énergie. Pose-moi des questions, une à la fois, pour m'aider à trouver moi-même, sans me donner la réponse. »",
              hint: "Cherchez le prompt qui donne un rôle, un niveau, un sujet précis et des règles d'échange.",
              solution: [
                "c) transforme l'IA en tuteur : il précise le niveau (3e), le sujet (cet exercice), la règle (pas de réponse) et la forme (une question à la fois).",
                "a) demande la solution : l'IA fait l'exercice à la place de l'élève, qui ne fournit aucun effort.",
                "b) est trop vague et passif : l'élève lit une longue explication sans avoir à chercher, et l'IA ne sait ni son niveau ni ce qui le bloque.",
                "Réponse : le prompt c).",
              ],
            },
            {
              level: 2,
              statement: "Une élève de 1re écrit : « Aide-moi pour mon commentaire de texte. » Réécrivez ce prompt pour que l'IA joue le rôle d'un tuteur, en y intégrant les cinq ingrédients vus dans le cours.",
              hint: "Reprenez la liste du cours : rôle, niveau, sujet précis, règles de l'échange, vérification finale.",
              solution: [
                "Rôle : « Tu es mon tuteur de français. »",
                "Niveau et sujet : « Je suis en 1re et je prépare le commentaire d'un poème de Baudelaire étudié en classe. »",
                "Règles : « Ne rédige rien à ma place. Pose-moi une question à la fois pour m'aider à repérer les procédés d'écriture et à construire mes axes de lecture. Si je bloque, donne-moi seulement un petit indice. »",
                "Vérification finale : « À la fin, demande-moi de formuler mon plan avec mes propres mots et signale-moi ce qui manque de précision. »",
                "Résultat : un prompt complet qui fait travailler l'élève au lieu de lui fournir un commentaire tout fait.",
              ],
            },
            {
              level: 3,
              statement: "Voici un échange entre un élève de 4e et un tuteur IA. Élève : « Un cycliste parcourt 30 km en 1 h 30. Aide-moi à trouver sa vitesse moyenne, sans me donner la réponse. » IA : « Quelle formule relie la distance, la vitesse et la durée ? » Élève : « Je sais pas, donne la réponse. » IA : « v = d ÷ t = 30 ÷ 1,5 = 20 km/h. » L'élève recopie et passe à l'exercice suivant. Relevez trois erreurs dans la conduite de l'échange, puis réécrivez les interventions de l'élève pour en faire un bon échange, jusqu'au résultat.",
              hint: "Observez ce que l'élève fait quand il bloque, comment il réagit quand la règle n'est pas respectée et ce qu'il fait à la fin ; pensez aussi à la conversion de 1 h 30 en heures.",
              solution: [
                "Erreur 1 : l'élève abandonne dès la première question, sans chercher la formule dans son cours.",
                "Erreur 2 : l'IA donne la réponse, et l'élève ne lui rappelle pas la règle qu'il avait lui-même fixée.",
                "Erreur 3 : l'élève recopie sans comprendre ni vérifier, et ne refait aucun exercice seul ; il n'a rien appris, pas même que 1 h 30 s'écrit 1,5 h et non 1,30 h.",
                "Échange réécrit : à la question sur la formule, l'élève regarde son cours et répond « v = d ÷ t ». Quand l'IA demande quelle durée utiliser, il convertit : 1 h 30 = 1 h + 0,5 h = 1,5 h.",
                "Il calcule : v = 30 ÷ 1,5 = 20, et vérifie : 20 × 1,5 = 30. Puis il demande : « Donne-moi un exercice du même type, sans la réponse. »",
                "Résultat : la vitesse moyenne est de 20 km/h, trouvée par l'élève lui-même.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une séance avec un tuteur IA.",
            items: [
              "Chercher seul quelques minutes et noter où vous bloquez",
              "Écrire le prompt : rôle, classe, sujet et règles de l'échange",
              "Expliquer ce que vous avez compris et ce qui vous bloque",
              "Répondre à chaque question avec vos propres mots",
              "Résumer vous-même ce que vous avez appris",
              "Refaire le lendemain, sans IA, un exercice du même type",
            ],
          },
          quiz: [
            {
              q: "Quel élément est indispensable dans un prompt de tuteur ?",
              options: [
                "La consigne de ne pas donner la réponse directement",
                "La demande d'une réponse la plus longue possible",
                "Votre nom complet et votre établissement",
              ],
              answer: 0,
              why: "La règle « pas de réponse directe » oblige l'IA à vous faire chercher ; vos données personnelles, elles, n'ont rien à faire dans le prompt.",
            },
            {
              q: "Comment s'appelle la méthode de Socrate qui fait trouver la réponse par des questions ?",
              options: [
                "La dialectique numérique",
                "Le rappel espacé",
                "La maïeutique",
                "L'entrelacement",
              ],
              answer: 2,
              why: "La maïeutique consiste à faire découvrir à l'interlocuteur, par des questions, ce qu'il est capable de penser lui-même.",
            },
            {
              q: "Le tuteur IA vous donne la solution alors que vous lui avez demandé de vous guider. Que faites-vous ?",
              options: [
                "Vous recopiez la solution, puisqu'elle est là et qu'elle a l'air juste",
                "Vous lui rappelez la règle et lui demandez une nouvelle question",
                "Vous changez d'exercice",
                "Vous fermez l'IA définitivement",
              ],
              answer: 1,
              why: "Rappeler la règle remet l'échange sur de bons rails : c'est votre recherche qui doit produire la réponse.",
            },
            {
              q: "Comment savoir si un échange avec un tuteur IA vous a fait progresser ?",
              options: [
                "L'échange a été long",
                "L'IA vous a félicité",
                "Vous avez tout compris en lisant ses messages",
                "Le lendemain, vous refaites seul un exercice du même type",
              ],
              answer: 3,
              why: "Seule la réussite sans aide, après un délai, montre que vous avez appris et pas seulement suivi.",
            },
            {
              q: "Le tuteur IA propose une méthode différente de celle de votre professeur. Que faites-vous ?",
              options: [
                "Vous adoptez la méthode de l'IA, car elle est plus moderne et plus rapide",
                "Vous mélangez les deux méthodes au hasard",
                "Vous gardez la méthode du cours et posez la question en classe",
              ],
              answer: 2,
              why: "Le cours et le professeur sont la référence pour vos évaluations ; l'IA peut se tromper ou sortir du programme.",
            },
          ],
          trap: "Céder dès la première difficulté et demander la réponse : l'IA la donne volontiers, et l'effort qui faisait apprendre disparaît.",
          method: "Avant d'ouvrir l'IA, cherchez au moins cinq minutes par vous-même et notez précisément où vous bloquez. Votre premier message au tuteur sera plus précis, et vous saurez mesurer ce que l'échange vous a apporté.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-memoriser',
          title: "Réviser avec l'IA : quiz, flashcards et rappel actif",
          minutes: 30,
          objectives: [
            "Utiliser une IA pour produire des questions de révision à partir de son propre cours.",
            "Organiser ses révisions selon le principe de la répétition espacée, avec des flashcards.",
            "Vérifier la justesse des questions et des corrections produites par l'IA.",
          ],
          course: [
            {
              heading: "Le principe : l'IA pose les questions, vous travaillez",
              paragraphs: [
                "Vous savez que le rappel actif (se tester sans regarder) et la répétition espacée sont les méthodes de révision les plus efficaces. Leur difficulté pratique est de disposer de nombreuses questions variées : c'est précisément ce qu'une IA sait produire très vite.",
                "Attention : obtenir des questions n'est pas réviser. L'apprentissage a lieu au moment où vous cherchez la réponse de mémoire, sans la voir. Une liste de questions et de réponses lues d'un seul coup d'œil n'est qu'une relecture déguisée.",
              ],
            },
            {
              heading: "Partir de votre cours, pas de l'IA",
              paragraphs: [
                "Donnez à l'IA votre propre cours (ou un résumé que vous avez écrit), sans aucune donnée personnelle, et demandez-lui de construire ses questions uniquement à partir de ce texte. Vous réduisez ainsi le risque de questions hors programme, d'erreurs ou de vocabulaire différent de celui de votre professeur.",
                "Fixez aussi la forme : une question à la fois, la correction seulement après votre réponse, et à la fin la liste des points à revoir. Vous pouvez demander des types de questions variés : définitions, dates, « pourquoi ? », applications, questions qui mélangent plusieurs chapitres.",
              ],
              box: { label: "Exemple de prompt", text: "« Voici ma leçon de géographie sur les métropoles. Pose-moi 10 questions, uniquement à partir de ce texte, une à la fois. Attends ma réponse avant de corriger. Mélange des questions de vocabulaire, des questions qui demandent d'expliquer et des exemples. À la fin, fais la liste des notions que je dois revoir. »" },
            },
            {
              heading: "Flashcards et boîtes de Leitner",
              paragraphs: [
                "Une flashcard (ou carte mémoire) porte une question au recto et la réponse au verso. On lit le recto, on répond de mémoire, puis on retourne la carte pour vérifier. Une IA peut vous proposer des cartes à partir de votre cours, sous forme de tableau à deux colonnes ; mais les relire, les corriger et les reformuler vous-même est déjà un travail d'élaboration très utile.",
                "La méthode des boîtes de Leitner organise la répétition espacée. On utilise plusieurs boîtes : la boîte 1 est révisée très souvent (par exemple chaque jour), la boîte 2 moins souvent, la boîte 3 plus rarement encore. Une carte réussie avance d'une boîte ; une carte ratée revient dans la boîte 1. Ainsi, vous passez plus de temps sur ce que vous ne savez pas encore.",
              ],
              box: { label: "Méthode", text: "Boîtes de Leitner : toutes les cartes commencent dans la boîte 1. Réussie, une carte avance d'une boîte et sera revue moins souvent ; ratée, elle revient dans la boîte 1, quelle que soit la boîte où elle se trouvait." },
            },
            {
              heading: "Toujours vérifier ce que l'IA a produit",
              paragraphs: [
                "Une IA peut proposer une question mal posée, une réponse fausse ou une correction erronée de votre réponse juste. Apprendre une erreur est pire que ne rien apprendre : elle s'installe dans la mémoire et devra être corrigée plus tard.",
                "Relisez donc chaque carte et chaque correction en la comparant à votre cours. En cas de doute, cochez la question et posez-la à votre professeur. Notez vos erreurs dans un carnet et commencez la séance suivante par elles.",
              ],
            },
          ],
          keyPoints: [
            "L'IA peut produire vite de nombreuses questions ; l'apprentissage a lieu quand vous répondez de mémoire.",
            "Donnez-lui votre propre cours et demandez des questions tirées uniquement de ce texte.",
            "Une question à la fois, la correction après votre réponse : sinon c'est une relecture déguisée.",
            "Boîtes de Leitner : carte réussie, elle avance d'une boîte ; carte ratée, elle revient dans la boîte 1.",
            "Vérifiez chaque question et chaque correction avec le cours : apprendre une erreur est pire que ne rien apprendre.",
          ],
          example: {
            statement: "Jade, en 2nde, colle dans une IA sa leçon de SVT sur la cellule et demande cinq flashcards. L'une d'elles dit : « Recto : Quelle différence entre cellule animale et cellule végétale ? Verso : La cellule végétale ne possède pas de membrane plasmique, elle a une paroi à la place. » Que doit faire Jade ?",
            solution: [
              "Relire chaque carte en la comparant à son cours, avant de commencer à les apprendre.",
              "Repérer l'erreur : la cellule végétale possède bien une membrane plasmique, comme toute cellule ; elle a en plus une paroi, située à l'extérieur de la membrane.",
              "Corriger la carte avec ses propres mots : « Verso : La cellule végétale possède une membrane plasmique, entourée en plus d'une paroi ; elle contient aussi des chloroplastes (dans les parties vertes de la plante). »",
              "Vérifier les quatre autres cartes de la même façon, puis les ranger toutes dans la boîte 1.",
              "Conclusion : Jade ne révise qu'avec des cartes vérifiées ; corriger la carte fausse lui a d'ailleurs fait travailler la notion.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces usages de l'IA, lesquels sont du rappel actif ? a) demander un résumé de la leçon et le lire ; b) demander un quiz, une question à la fois, en répondant avant de voir la correction ; c) demander des flashcards, puis les lire recto et verso en même temps ; d) demander à l'IA de vous interroger sur les dates du chapitre, puis répondre de mémoire.",
              hint: "Le rappel actif suppose de chercher la réponse dans sa mémoire avant de la voir.",
              solution: [
                "a) Non : lire un résumé est une relecture, sans effort de mémoire.",
                "b) Oui : vous cherchez chaque réponse de mémoire avant de voir la correction.",
                "c) Non : lire la réponse en même temps que la question supprime l'effort de récupération.",
                "d) Oui : vous répondez de mémoire aux questions posées.",
                "Résultat : b) et d) sont du rappel actif.",
              ],
            },
            {
              level: 2,
              statement: "Vous utilisez trois boîtes de Leitner. Le jour 1, vos 30 nouvelles cartes sont dans la boîte 1 : vous en réussissez 18 et en ratez 12. Le jour 2, vous révisez à nouveau la boîte 1 : vous réussissez 8 cartes et en ratez 4. a) Combien de cartes y a-t-il dans chaque boîte à la fin du jour 2 ? b) Plus tard, vous ratez une carte de la boîte 2 : où va-t-elle, et pourquoi cette règle est-elle utile ?",
              hint: "Appliquez la règle à chaque séance : une carte réussie avance d'une boîte, une carte ratée va (ou reste) dans la boîte 1. Vérifiez que le total fait toujours 30.",
              solution: [
                "Jour 1 : 18 cartes réussies passent dans la boîte 2 ; 12 cartes ratées restent dans la boîte 1.",
                "Jour 2 : on révise les 12 cartes de la boîte 1. Les 8 réussies passent dans la boîte 2, qui contient alors 18 + 8 = 26 cartes ; les 4 ratées restent dans la boîte 1.",
                "a) Fin du jour 2 : boîte 1 : 4 cartes ; boîte 2 : 26 cartes ; boîte 3 : 0 carte. Vérification : 4 + 26 + 0 = 30.",
                "b) Une carte ratée revient dans la boîte 1, quelle que soit la boîte où elle était.",
                "Cette règle est utile car elle concentre les révisions fréquentes sur ce que vous ne savez pas encore, et espace les révisions de ce que vous savez.",
              ],
            },
            {
              level: 3,
              statement: "Un élève de terminale prépare une épreuve écrite de spécialité. Rédigez le prompt complet qu'il pourrait utiliser pour obtenir un quiz de révision fiable à partir de son cours, puis expliquez les trois vérifications qu'il doit faire pendant et après le quiz.",
              hint: "Pour le prompt, pensez à la source des questions, à la forme de l'échange et au bilan final ; pour les vérifications, pensez aux questions, aux corrections et au suivi des erreurs.",
              solution: [
                "Prompt : « Voici mon cours de spécialité sur le chapitre que je révise. Pose-moi 15 questions de difficulté croissante, uniquement à partir de ce texte, une à la fois. Attends ma réponse avant de corriger. Inclus des questions de définition, des questions qui demandent de justifier et des questions d'application dans le style de l'épreuve. À la fin, fais la liste des notions que j'ai ratées. »",
                "Il veille à ne coller aucune donnée personnelle, seulement le contenu du cours.",
                "Vérification 1 : chaque question porte bien sur le cours et sur le programme ; une question hors sujet est écartée.",
                "Vérification 2 : chaque correction est comparée au cours ; si l'IA juge fausse une réponse qui semble juste (ou l'inverse), il tranche avec le cours ou le professeur, pas avec l'IA.",
                "Vérification 3 : les questions ratées sont notées dans un carnet d'erreurs et reprises lors des séances suivantes, de façon espacée.",
                "Résultat : un quiz qui pratique le rappel actif, sans risque d'apprendre des erreurs.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ?",
            statements: [
              { text: "Lire les questions et les réponses d'un quiz en même temps, c'est du rappel actif.", true: false, why: "Sans effort pour retrouver la réponse de mémoire, c'est une simple relecture." },
              { text: "Donner son propre cours à l'IA réduit le risque de questions hors programme.", true: true, why: "Les questions sont alors tirées du texte que vous devez réellement savoir." },
              { text: "Dans les boîtes de Leitner, une carte ratée recule seulement d'une boîte.", true: false, why: "Une carte ratée revient dans la boîte 1, quelle que soit sa boîte." },
              { text: "Corriger soi-même une flashcard proposée par l'IA aide à apprendre.", true: true, why: "Relire, comparer et reformuler est un travail d'élaboration." },
              { text: "Si l'IA corrige votre réponse, sa correction est forcément juste.", true: false, why: "L'IA peut se tromper : le cours et le professeur restent la référence." },
              { text: "Mélanger des questions de plusieurs chapitres est une bonne pratique.", true: true, why: "L'entrelacement oblige à reconnaître la notion et la méthode à utiliser." },
            ],
          },
          quiz: [
            {
              q: "Quel prompt pratique le mieux le rappel actif ?",
              options: [
                "« Résume-moi ma leçon en dix lignes. »",
                "« Donne-moi la liste des questions avec leurs réponses. »",
                "« Pose-moi une question à la fois et attends ma réponse avant de corriger. »",
              ],
              answer: 2,
              why: "Vous devez chercher chaque réponse de mémoire avant de voir la correction : c'est le principe du rappel actif.",
            },
            {
              q: "Pourquoi donner à l'IA votre propre cours plutôt que le seul titre du chapitre ?",
              options: [
                "Pour obtenir des questions fidèles à ce que vous devez savoir",
                "Pour que l'IA retienne votre nom",
                "Pour que les questions soient plus faciles",
                "Pour que l'IA n'ait plus besoin de vérifier ses réponses",
              ],
              answer: 0,
              why: "Les questions tirées de votre cours correspondent au programme et au vocabulaire de votre professeur.",
            },
            {
              q: "Dans la méthode de Leitner, que devient une carte réussie ?",
              options: [
                "Elle est jetée",
                "Elle avance d'une boîte et sera revue moins souvent",
                "Elle revient dans la boîte 1",
                "Elle reste dans sa boîte",
              ],
              answer: 1,
              why: "Une carte réussie avance d'une boîte ; c'est ce qui espace les révisions de ce que vous savez déjà.",
            },
            {
              q: "Une flashcard produite par l'IA contredit votre cours. Que faites-vous ?",
              options: [
                "Vous apprenez la version de l'IA, car elle a sans doute des informations plus récentes",
                "Vous apprenez les deux versions",
                "Vous supprimez toutes les cartes",
                "Vous la corrigez d'après le cours, et demandez au professeur en cas de doute",
              ],
              answer: 3,
              why: "Le cours et le professeur sont la référence ; apprendre une erreur est pire que ne rien apprendre.",
            },
            {
              q: "Que contient un carnet d'erreurs ?",
              options: [
                "Les questions ratées et leur bonne réponse, à reprendre en priorité",
                "Les fautes d'orthographe de l'IA",
                "Les notes de tous vos contrôles de l'année, classées par matière et par date",
              ],
              answer: 0,
              why: "Reprendre en priorité les questions ratées concentre l'effort sur ce qui n'est pas encore acquis.",
            },
          ],
          trap: "Lire les questions et les réponses produites par l'IA d'un seul coup d'œil : on a l'impression de réviser, mais sans effort de mémoire, c'est encore de la relecture.",
          method: "Tenez un carnet d'erreurs : chaque question ratée y est notée avec la bonne réponse vérifiée dans le cours, et vous commencez chaque séance de révision par ces questions-là.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-comprendre-cours',
          title: "Se faire réexpliquer une notion du cours",
          minutes: 25,
          objectives: [
            "Formuler un prompt précis pour se faire réexpliquer une notion : niveau, ce qui est compris, ce qui bloque.",
            "Demander des explications variées : exemple, analogie, contre-exemple, découpage en étapes.",
            "Vérifier sa compréhension en reformulant soi-même et en confrontant l'explication au cours.",
          ],
          course: [
            {
              heading: "Dire précisément ce qui bloque",
              paragraphs: [
                "« Je comprends pas les fractions » est une demande trop vague : l'IA répondra par une explication générale, souvent trop longue, qui ne vise pas votre difficulté. Une demande précise donne votre classe, le chapitre, la phrase ou l'exemple du cours qui pose problème, ce que vous comprenez déjà et l'endroit exact où vous décrochez.",
                "Préciser ce qui bloque est déjà un travail utile : en cherchant à le formuler, il arrive souvent que l'on trouve la réponse soi-même. Recopiez si besoin la définition de votre cahier dans le prompt (sans donnée personnelle), pour que l'explication parte de votre cours.",
              ],
              box: { label: "Modèle de prompt", text: "« Je suis en 5e. Dans mon cours, il est écrit : [phrase du cours]. Je comprends que..., mais je ne comprends pas pourquoi... Explique-moi avec un exemple simple, en utilisant le vocabulaire de mon cours, puis pose-moi une question pour vérifier que j'ai compris. »" },
            },
            {
              heading: "Changer d'angle",
              paragraphs: [
                "Si une explication ne passe pas, demandez-en une autre forme : un exemple concret, un contre-exemple (un cas où la règle ne s'applique pas), un découpage en petites étapes, une comparaison avec une notion proche, ou une analogie, c'est-à-dire une comparaison avec quelque chose de familier.",
                "Les analogies sont précieuses mais imparfaites. Comparer le courant électrique à de l'eau qui circule dans des tuyaux aide à comprendre, mais un fil électrique coupé ne « fuit » pas comme un tuyau. Demandez donc toujours : « Où cette comparaison ne marche-t-elle plus ? »",
                "Vous pouvez aussi demander une explication plus simple (« explique comme à un élève de 6e »), puis remonter progressivement vers le niveau de votre classe, avec le vocabulaire exact attendu dans une copie.",
              ],
            },
            {
              heading: "Rester fidèle au cours et au programme",
              paragraphs: [
                "L'IA ne connaît ni votre professeur ni votre manuel. Elle peut utiliser une autre méthode, d'autres notations, un vocabulaire différent ou des notions d'un niveau supérieur. Une explication juste mais hors programme peut même vous dérouter.",
                "En cas de différence ou de contradiction, le cours et le professeur sont la référence : ce sont leurs méthodes et leur vocabulaire qui sont attendus en évaluation et à l'examen. Notez la question pour la poser en classe ; c'est souvent une excellente question.",
              ],
            },
            {
              heading: "Vérifier qu'on a vraiment compris",
              paragraphs: [
                "Une explication claire donne vite l'impression d'avoir compris. Pour vérifier, reformulez la notion avec vos mots et soumettez votre reformulation : « Voici ce que j'ai compris : ... Corrige-moi si je me trompe. » Inventez ensuite votre propre exemple, puis refaites seul un exercice du cours sur cette notion.",
              ],
              box: { label: "À retenir", text: "Comprendre, c'est savoir reformuler avec ses mots, donner son propre exemple et réussir seul un exercice. Lire une explication claire ne suffit pas." },
            },
          ],
          keyPoints: [
            "Une demande précise donne la classe, la phrase du cours qui bloque, ce qui est compris et ce qui ne l'est pas.",
            "Si une explication ne passe pas, changez d'angle : exemple, contre-exemple, étapes, comparaison, analogie.",
            "Toute analogie a des limites : demandez où elle ne fonctionne plus.",
            "Le cours et le professeur sont la référence pour la méthode et le vocabulaire attendus.",
            "Vérifiez votre compréhension : reformuler, inventer un exemple, refaire seul un exercice.",
          ],
          example: {
            statement: "Lucas, en 3e, ne comprend pas la différence entre masse et poids. Rédigez un prompt précis, résumez l'explication attendue, puis montrez comment Lucas vérifie sa compréhension avec l'exemple d'un astronaute de 70 kg (on prendra g = 9,8 N/kg sur la Terre et g = 1,6 N/kg sur la Lune).",
            solution: [
              "Prompt : « Je suis en 3e. Mon cours dit que le poids et la masse sont deux grandeurs différentes et que P = m × g. Je ne comprends pas pourquoi ma masse ne change pas sur la Lune alors que mon poids change. Explique-moi avec un exemple, avec le vocabulaire de mon cours, puis pose-moi une question. »",
              "Explication attendue : la masse, en kilogrammes (kg), caractérise la quantité de matière d'un objet ; elle est la même partout. Le poids est une force, l'attraction exercée par un astre sur l'objet ; il se mesure en newtons (N) et dépend de l'astre.",
              "Sur la Terre : P = m × g = 70 × 9,8 = 686 N.",
              "Sur la Lune : P = 70 × 1,6 = 112 N. La masse reste 70 kg, mais le poids est environ six fois plus faible, car l'attraction de la Lune est plus faible.",
              "Vérification par Lucas : il reformule (« La masse ne dépend pas du lieu, le poids dépend de l'astre ») et compare avec la définition de son cahier.",
              "Conclusion : l'astronaute a une masse de 70 kg partout, un poids de 686 N sur la Terre et de 112 N sur la Lune.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un élève de 6e écrit : « Explique les fractions. » Il ne comprend pas, en réalité, pourquoi 2/4 et 1/2 sont égales. Réécrivez son prompt pour qu'il soit précis.",
              hint: "Ajoutez la classe, ce qui bloque exactement, la forme d'explication souhaitée et une vérification.",
              solution: [
                "Niveau : « Je suis en 6e. »",
                "Difficulté précise : « Je ne comprends pas pourquoi les fractions 2/4 et 1/2 sont égales, alors que les nombres sont différents. »",
                "Forme souhaitée : « Explique-moi avec un exemple concret, par exemple une tablette de chocolat ou une pizza, en utilisant le mot quotient. »",
                "Vérification : « Ensuite, pose-moi une question pour vérifier que j'ai compris, sans me donner la réponse. »",
                "Prompt complet : la réunion de ces quatre phrases, qui vise exactement la difficulté de l'élève.",
              ],
            },
            {
              level: 2,
              statement: "Pour expliquer un circuit électrique simple, une IA compare la pile à une pompe, les fils à des tuyaux, le courant électrique à l'eau qui circule et la lampe à un moulin à eau. a) Indiquez ce que représente chaque élément de l'analogie. b) Donnez une limite de cette analogie.",
              hint: "Pour la limite, imaginez ce qui se passe quand on coupe un tuyau, puis quand on ouvre un circuit électrique.",
              solution: [
                "a) La pompe met l'eau en mouvement comme la pile met en mouvement les charges électriques ; les tuyaux guident l'eau comme les fils conduisent le courant ; le moulin utilise le mouvement de l'eau comme la lampe utilise le courant pour éclairer.",
                "L'analogie montre aussi que l'eau n'est pas « consommée » par le moulin : de même, le courant n'est pas consommé par la lampe, il a la même intensité avant et après elle dans un circuit en série.",
                "b) Limite : si l'on coupe un tuyau, l'eau s'échappe ; si l'on ouvre un circuit électrique, le courant ne « coule » pas hors du fil, il cesse simplement de circuler.",
                "Conclusion : l'analogie aide à se représenter le circuit, mais elle ne remplace pas les définitions et les lois du cours.",
              ],
            },
            {
              level: 3,
              statement: "Un élève de 1re demande à une IA ce qu'est le nombre dérivé. Elle répond : « Le nombre dérivé, c'est la vitesse à laquelle la fonction change. » a) Cette phrase est-elle une définition du cours ou une image ? Rappelez la définition géométrique du nombre dérivé f'(a). b) Pour f(x) = x², sachant que f'(x) = 2x, calculez f'(3) et donnez l'équation de la tangente à la courbe au point d'abscisse 3. c) Reformulez la notion en une phrase personnelle.",
              hint: "La tangente au point d'abscisse a a pour équation y = f'(a)(x - a) + f(a) ; calculez d'abord f(3) et f'(3).",
              solution: [
                "a) C'est une image (une interprétation utile, notamment en physique), pas la définition du cours. Le nombre dérivé f'(a) est la limite du taux de variation (f(a + h) - f(a)) ÷ h quand h tend vers 0 ; géométriquement, c'est le coefficient directeur de la tangente à la courbe au point d'abscisse a.",
                "b) f(3) = 3² = 9 et f'(3) = 2 × 3 = 6.",
                "Équation de la tangente : y = f'(3)(x - 3) + f(3) = 6(x - 3) + 9 = 6x - 18 + 9, soit y = 6x - 9.",
                "Vérification : pour x = 3, y = 6 × 3 - 9 = 18 - 9 = 9 = f(3) ; la tangente passe bien par le point (3 ; 9).",
                "c) Reformulation possible : « Le nombre dérivé en a est la pente de la droite qui touche la courbe au point d'abscisse a ; il indique à quel rythme la fonction varie autour de ce point. »",
                "Résultat : f'(3) = 6 et la tangente a pour équation y = 6x - 9.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque demande à ce qu'elle apporte.",
            pairs: [
              { left: "« Donne-moi une analogie »", right: "Relier la notion à quelque chose de familier" },
              { left: "« Donne-moi un contre-exemple »", right: "Voir un cas où la règle ne s'applique pas" },
              { left: "« Découpe en petites étapes »", right: "Suivre le raisonnement pas à pas" },
              { left: "« Utilise le vocabulaire de mon cours »", right: "Rester fidèle à ce qui est attendu en évaluation" },
              { left: "« Voici ce que j'ai compris, corrige-moi »", right: "Vérifier sa compréhension en reformulant" },
              { left: "« Pose-moi une question pour vérifier »", right: "Passer de la lecture au rappel actif" },
            ],
          },
          quiz: [
            {
              q: "Quel prompt a le plus de chances d'obtenir une explication utile ?",
              options: [
                "« Explique les fractions. »",
                "« Je suis en 6e, je ne comprends pas pourquoi 2/4 = 1/2. Donne un exemple. »",
                "« Fais-moi un cours complet et détaillé sur tout le programme de maths de l'année. »",
              ],
              answer: 1,
              why: "Il précise la classe, la difficulté exacte et la forme d'explication souhaitée.",
            },
            {
              q: "L'IA explique une notion avec une méthode différente de celle du cours. Laquelle utilisez-vous en contrôle ?",
              options: [
                "Celle de l'IA, car elle est plus récente",
                "Celle du cours et du professeur",
                "N'importe laquelle, au hasard",
                "Aucune des deux",
              ],
              answer: 1,
              why: "Le cours et le professeur sont la référence pour les méthodes et le vocabulaire attendus en évaluation.",
            },
            {
              q: "Qu'est-ce qu'une analogie ?",
              options: [
                "Une définition officielle",
                "Une erreur de l'IA",
                "Un résumé du chapitre",
                "Une comparaison avec quelque chose de familier",
              ],
              answer: 3,
              why: "Une analogie compare la notion à une situation connue ; elle aide à comprendre mais a toujours des limites.",
            },
            {
              q: "Comment vérifier que vous avez compris une explication ?",
              options: [
                "La relire jusqu'à ce qu'elle semble évidente",
                "Demander à l'IA de vous confirmer que vous avez bien compris",
                "La reformuler avec vos mots et refaire seul un exercice",
              ],
              answer: 2,
              why: "Reformuler et réussir seul un exercice prouvent la compréhension ; une lecture répétée donne seulement une impression.",
            },
            {
              q: "Pourquoi demander « Où cette comparaison ne marche-t-elle plus ? »",
              options: [
                "Pour connaître les limites de l'analogie et éviter les fausses conclusions",
                "Pour obliger l'IA à abandonner l'analogie et à donner directement la définition",
                "Pour obtenir une réponse plus longue",
                "Pour tester la politesse de l'IA",
              ],
              answer: 0,
              why: "Toute analogie est imparfaite ; connaître ses limites évite de transformer une image en erreur.",
            },
          ],
          trap: "Se contenter de l'impression d'avoir compris en lisant une explication claire, sans reformuler ni refaire d'exercice, ou retenir une méthode et un vocabulaire différents de ceux du cours.",
          method: "Terminez chaque réexplication par la règle des trois R : Reformuler la notion avec vos mots, Retrouver le passage correspondant dans votre cours, Refaire seul un exercice sur cette notion.",
        },
      ],
    },
  ],
}
