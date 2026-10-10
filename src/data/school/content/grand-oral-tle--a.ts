import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'grand-oral-tle',
  chapters: [
    /* ==================================================================== */
    /* COMPRENDRE L'ÉPREUVE                                                  */
    /* ==================================================================== */
    {
      id: 'comprendre-l-epreuve',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'deroulement',
          title: 'Le Grand oral : préparation, exposé, échange',
          minutes: 25,
          objectives: [
            "Décrire le déroulement du Grand oral : vingt minutes de préparation, dix minutes d'exposé, dix minutes d'échange avec le jury.",
            "Identifier la finalité de l'épreuve et la composition du jury.",
            "Situer le Grand oral dans le baccalauréat général : épreuve finale notée sur 20, au coefficient 8 à partir de la session 2027.",
          ],
          course: [
            {
              heading: "Une épreuve pour montrer que l'on sait raisonner à voix haute",
              paragraphs: [
                "Le Grand oral est l'épreuve orale terminale du baccalauréat général, passée à la fin de l'année de Terminale. Le texte officiel lui donne une double finalité : permettre au candidat de montrer sa capacité à prendre la parole en public de façon claire et convaincante, et lui permettre de mettre les savoirs qu'il a acquis, particulièrement dans ses enseignements de spécialité, au service d'une argumentation.",
                "Ce n'est donc ni une récitation de cours ni un concours d'éloquence. C'est un raisonnement construit à partir de vos spécialités, exposé puis défendu devant deux professeurs. L'épreuve s'appuie sur un travail mené tout au long du cycle terminal : avec l'aide de vos professeurs, vous élaborez deux questions en lien avec vos deux enseignements de spécialité, pris isolément ou abordés de manière transversale.",
                "Le jour de l'épreuve, c'est le jury qui choisit, parmi vos deux questions, celle que vous présenterez. Les deux doivent donc être préparées avec le même soin : il n'existe pas de « question de secours ».",
              ],
              box: { label: "Définition", text: "Le Grand oral est une épreuve orale de 20 minutes, précédée de 20 minutes de préparation. Le candidat y présente l'une de ses deux questions, choisie par le jury, puis échange avec lui." },
            },
            {
              heading: "Le déroulement : une préparation, puis deux temps",
              paragraphs: [
                "La préparation (20 minutes). Vous présentez au jury la feuille portant vos deux questions ; il en retient une. Vous disposez alors de vingt minutes pour mettre en ordre vos idées et réaliser, si vous le souhaitez, un support (un schéma, un plan, quelques mots-clés, un graphique simple) que vous remettrez au jury. Ce support ne fait pas l'objet d'une évaluation.",
                "Premier temps : l'exposé (10 minutes). Debout et sans notes, sauf aménagement prévu pour les candidats à besoins particuliers, vous expliquez pourquoi vous avez choisi de préparer cette question pendant votre formation, puis vous la développez et vous y répondez. C'est une prise de parole en continu : c'est vous qui menez le propos du début à la fin.",
                "Second temps : l'échange (10 minutes). Le jury vous interroge pour vous amener à préciser et à approfondir votre pensée. Ses questions peuvent porter sur toute partie du programme du cycle terminal de vos enseignements de spécialité : elles permettent d'évaluer la solidité de vos connaissances et vos capacités argumentatives.",
              ],
              box: { label: "Repère", text: "20 minutes de préparation, puis 10 minutes d'exposé et 10 minutes d'échange : l'épreuve elle-même dure 20 minutes." },
            },
            {
              heading: "Le jury et la feuille des deux questions",
              paragraphs: [
                "Le jury est composé de deux professeurs de disciplines différentes. L'un représente l'un de vos deux enseignements de spécialité ; l'autre représente l'autre spécialité ou l'un des enseignements communs, ou bien il est professeur-documentaliste. Conséquence pratique : l'un des deux membres du jury n'est pas forcément spécialiste de votre question. Votre exposé doit donc être assez clair pour un non-spécialiste et assez précis pour un spécialiste.",
                "La feuille sur laquelle figurent vos deux questions est visée par vos professeurs de spécialité et porte le cachet de votre établissement. Vous la remettez au jury au début de l'épreuve, avec votre convocation et une pièce d'identité. C'est à partir de cette feuille que le jury choisit la question.",
              ],
            },
            {
              heading: "Ce qui a changé et ce que pèse l'épreuve",
              paragraphs: [
                "Depuis la session 2024, le Grand oral ne comporte plus de partie séparée consacrée au projet d'orientation : l'épreuve se résume à l'exposé et à l'échange, chacun de dix minutes. Le lien entre votre question et votre parcours n'a pas disparu pour autant, puisque l'exposé commence par les raisons qui vous ont conduit à choisir cette question.",
                "L'épreuve est notée sur 20. À partir de la session 2027, elle compte au coefficient 8 sur les 100 coefficients du baccalauréat (note de service publiée au Bulletin officiel spécial n°4 du 17 septembre 2026), contre 10 lors des sessions précédentes. Elle pèse ainsi autant que la philosophie, autre épreuve finale de Terminale.",
              ],
              box: { label: "À retenir", text: "Coefficient 8 sur 100 : le Grand oral représente 8 % de la note finale du baccalauréat, autant que l'épreuve de philosophie." },
            },
          ],
          keyPoints: [
            "Le Grand oral : 20 minutes de préparation, puis 10 minutes d'exposé et 10 minutes d'échange avec le jury.",
            "Vous préparez deux questions liées à vos spécialités ; le jury choisit celle que vous présentez.",
            "L'exposé se fait debout et sans notes ; il commence par les raisons du choix de la question.",
            "Le support réalisé pendant la préparation est remis au jury, mais il n'est pas évalué.",
            "L'échange peut porter sur tout le programme du cycle terminal de vos spécialités.",
            "Jury : deux professeurs de disciplines différentes, dont l'un représente l'une de vos spécialités.",
            "Note sur 20, coefficient 8 à partir de la session 2027 ; plus de partie séparée sur l'orientation depuis 2024.",
          ],
          example: {
            statement: "Un camarade affirme : « Au Grand oral, je présente la question que je préfère, je lis mes fiches pendant cinq minutes, puis le jury m'interroge sur mon projet d'orientation pendant une partie spéciale. » Relevez et corrigez chacune de ses erreurs.",
            solution: [
              "Première erreur : ce n'est pas le candidat qui choisit. Il présente deux questions et c'est le jury qui retient celle qui sera traitée.",
              "Deuxième erreur : l'exposé ne se lit pas. Il se fait debout et sans notes, sauf aménagement ; seul le support préparé pendant les vingt minutes est remis au jury.",
              "Troisième erreur : la durée. L'exposé dure dix minutes, et non cinq.",
              "Quatrième erreur : depuis la session 2024, il n'existe plus de partie séparée consacrée au projet d'orientation. Après l'exposé vient un échange de dix minutes qui porte sur la question et, plus largement, sur le programme des spécialités.",
              "Réponse : le jury choisit l'une des deux questions ; après vingt minutes de préparation, le candidat expose dix minutes debout et sans notes, puis échange dix minutes avec le jury.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le déroulement du Grand oral en indiquant, pour chaque temps, sa durée et ce que fait le candidat : a) le choix de la question ; b) la préparation ; c) l'exposé ; d) l'échange.",
              hint: "Distinguez le temps de préparation, qui ne fait pas partie des 20 minutes de l'épreuve, et les deux temps passés devant le jury.",
              solution: [
                "a) Le choix de la question : au début, le candidat remet la feuille de ses deux questions ; le jury en choisit une.",
                "b) La préparation : 20 minutes ; le candidat met en ordre ses idées et peut réaliser un support remis au jury, non évalué.",
                "c) L'exposé : 10 minutes ; debout et sans notes, le candidat explique pourquoi il a choisi la question, la développe et y répond.",
                "d) L'échange : 10 minutes ; le jury interroge le candidat pour qu'il précise et approfondisse sa pensée, y compris sur le programme de ses spécialités.",
                "Résultat : 20 minutes de préparation, puis une épreuve de 20 minutes (10 + 10).",
              ],
            },
            {
              level: 2,
              statement: "Le baccalauréat est calculé sur 100 coefficients : chaque note sur 20 est multipliée par son coefficient, et le total est divisé par 100. Lors d'un oral blanc, Lina obtient 11/20 (données fictives). Elle espère 15/20 le jour de l'épreuve. a) Combien de points gagnerait-elle dans le total du baccalauréat, avec le coefficient 8 de la session 2027 ? b) De combien sa moyenne générale augmenterait-elle ? c) Comparez avec le même gain de 4 points dans une spécialité de coefficient 16.",
              hint: "Le gain dans le total vaut (nouvelle note - ancienne note) × coefficient ; l'effet sur la moyenne vaut ce gain divisé par 100.",
              solution: [
                "a) Gain de note : 15 - 11 = 4 points sur 20. Gain dans le total : 4 × 8 = 32 points.",
                "b) Effet sur la moyenne générale : 32 ÷ 100 = 0,32 point.",
                "c) Pour une spécialité de coefficient 16 : 4 × 16 = 64 points, soit 64 ÷ 100 = 0,64 point de moyenne.",
                "Vérification : le coefficient 16 étant le double de 8, l'effet est bien doublé (0,64 = 2 × 0,32).",
                "Résultat : 32 points, soit 0,32 point de moyenne générale ; c'est la moitié de l'effet d'une spécialité, mais autant que la philosophie, également au coefficient 8.",
              ],
            },
            {
              level: 3,
              statement: "Question type oral blanc : un élève de Première vous demande si le Grand oral est « un exposé de culture générale où il suffit de bien parler ». Répondez-lui en un paragraphe argumenté de 8 à 10 lignes, en vous appuyant sur la finalité de l'épreuve, sur le second temps et sur la composition du jury.",
              hint: "Reprenez les deux finalités du texte officiel (prise de parole claire et convaincante, savoirs de spécialité au service d'une argumentation), puis montrez ce que l'échange vérifie.",
              solution: [
                "Formuler la thèse : le Grand oral n'est pas un exposé de culture générale ; c'est une argumentation fondée sur les savoirs des enseignements de spécialité.",
                "Premier argument (la finalité) : l'épreuve évalue certes la capacité à prendre la parole de façon claire et convaincante, mais aussi la capacité à mettre au service d'une argumentation des savoirs acquis, particulièrement en spécialité. Bien parler sans contenu ne répond qu'à la moitié de l'attente.",
                "Deuxième argument (l'échange) : pendant dix minutes, le jury interroge le candidat pour qu'il précise et approfondisse sa pensée, et ses questions peuvent porter sur tout le programme du cycle terminal des spécialités. Des connaissances fragiles y apparaissent vite.",
                "Troisième argument (le jury) : l'un des deux professeurs représente une spécialité du candidat ; il attend des notions exactes et un vocabulaire précis. L'autre, souvent non spécialiste, attend de la clarté. Il faut satisfaire les deux.",
                "Nuancer : la qualité de l'expression compte réellement (voix, fluidité, engagement), mais elle sert le raisonnement au lieu de le remplacer.",
                "Conclusion rédigée : « Non, le Grand oral n'est pas un exposé de culture générale : c'est une question de spécialité que l'on explique, que l'on argumente puis que l'on défend face à deux professeurs. Bien parler est nécessaire, mais ne suffit pas. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le déroulement du Grand oral, de l'arrivée devant le jury à la fin de l'épreuve.",
            items: [
              "Remettre au jury la feuille des deux questions, visée par l'établissement",
              "Le jury choisit l'une des deux questions",
              "Préparer pendant 20 minutes, en réalisant éventuellement un support",
              "Remettre le support au jury",
              "Présenter la question pendant 10 minutes, debout et sans notes",
              "Échanger avec le jury pendant 10 minutes",
            ],
          },
          quiz: [
            {
              q: "Qui choisit la question présentée le jour du Grand oral ?",
              options: ["Le candidat, parmi ses deux questions", "Le jury, parmi les deux questions du candidat", "Le professeur de spécialité, la veille de l'épreuve, par courrier", "Un tirage au sort dans une liste nationale"],
              answer: 1,
              why: "Le candidat présente deux questions préparées pendant le cycle terminal ; c'est le jury qui choisit celle qui sera traitée.",
            },
            {
              q: "Combien de temps dure l'exposé, premier temps de l'épreuve ?",
              options: ["5 minutes", "20 minutes", "10 minutes", "15 minutes"],
              answer: 2,
              why: "Après 20 minutes de préparation, l'exposé dure 10 minutes, puis l'échange avec le jury dure 10 minutes.",
            },
            {
              q: "Que devient le support réalisé pendant la préparation ?",
              options: ["Il est remis au jury et n'est pas évalué", "Il est noté sur 4 points dans la grille", "Il doit être projeté sur un écran", "Il est obligatoire pour passer l'épreuve"],
              answer: 0,
              why: "Le support est facultatif ; le candidat le remet au jury, mais il ne fait pas l'objet d'une évaluation.",
            },
            {
              q: "Sur quoi peuvent porter les questions du jury pendant l'échange ?",
              options: ["Uniquement sur les phrases prononcées pendant l'exposé", "Sur le projet d'orientation, dans une partie séparée", "Sur la culture générale, sans aucun lien avec les enseignements de spécialité", "Sur toute partie du programme du cycle terminal des spécialités"],
              answer: 3,
              why: "Le jury cherche à faire préciser et approfondir la pensée du candidat et peut l'interroger sur tout le programme du cycle terminal de ses spécialités.",
            },
            {
              q: "Quel est le coefficient du Grand oral à partir de la session 2027 ?",
              options: ["16", "8", "10", "5"],
              answer: 1,
              why: "Une note de service publiée au BO spécial n°4 du 17 septembre 2026 fixe le coefficient à 8 à partir de la session 2027, contre 10 auparavant.",
            },
          ],
          trap: "Croire que l'on peut se contenter de bien préparer une seule des deux questions : c'est le jury qui choisit, et la question négligée a autant de chances d'être retenue que l'autre.",
          method: "Récitez le déroulement de l'épreuve en une phrase chiffrée (« 20 de préparation, 10 d'exposé, 10 d'échange, jury qui choisit, support non noté ») et vérifiez que chaque répétition chez vous respecte ces durées.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'criteres-du-jury',
          title: 'Ce que le jury évalue',
          minutes: 25,
          objectives: [
            "Identifier les cinq critères de la grille indicative d'évaluation du Grand oral.",
            "Distinguer la qualité orale, la prise de parole en continu, la qualité des connaissances, la qualité de l'interaction et la construction de l'argumentation.",
            "Évaluer une prestation orale à l'aide de la grille et proposer des pistes d'amélioration.",
          ],
          course: [
            {
              heading: "Une grille indicative, une note globale",
              paragraphs: [
                "Le texte officiel du Grand oral est accompagné d'une grille indicative d'évaluation. Elle décrit cinq critères et, pour chacun, quatre niveaux : très insuffisant, insuffisant, satisfaisant, très satisfaisant. Le mot « indicative » est important : le jury s'en sert comme d'un repère commun, mais il attribue une seule note globale sur 20, sans additionner des points critère par critère.",
                "Connaître cette grille, c'est savoir ce que le jury observe. Elle permet aussi de vous entraîner avec précision : au lieu de dire « mon oral était moyen », vous pourrez dire « mes connaissances sont solides, mais mon exposé manque de fluidité et je ne reformule pas les questions ».",
              ],
              box: { label: "À retenir", text: "Cinq critères : qualité orale de l'épreuve, qualité de la prise de parole en continu, qualité des connaissances, qualité de l'interaction, qualité et construction de l'argumentation. Quatre niveaux, une note globale sur 20." },
            },
            {
              heading: "La forme : qualité orale et prise de parole en continu",
              paragraphs: [
                "La qualité orale porte sur la voix et la langue : être audible sur toute la durée, articuler, régler son débit, varier l'intonation pour souligner les idées importantes, employer un vocabulaire riche et précis. Au niveau le plus élevé, la voix soutient le discours et le candidat est pleinement engagé dans sa parole ; au niveau le plus bas, il est difficilement audible et ne parvient pas à capter l'attention.",
                "La prise de parole en continu concerne surtout les dix minutes d'exposé : parler de façon fluide, sans longs silences ni phrases inachevées, et utiliser pleinement le temps disponible pour développer ses idées. Un exposé de six minutes, ou une suite de phrases hachées séparées par de longues pauses, se situe en bas de l'échelle. Un discours fluide et efficace, qui tire profit du temps, se situe en haut.",
              ],
            },
            {
              heading: "Le fond : connaissances et argumentation",
              paragraphs: [
                "La qualité des connaissances porte sur l'exactitude et la maîtrise des savoirs de spécialité, dans l'exposé comme dans les réponses. Le jury attend des notions justes, définies et mobilisées à bon escient, et non une accumulation de termes savants. Une erreur grossière sur une notion centrale pèse lourd ; à l'inverse, savoir expliquer simplement une notion difficile montre une vraie maîtrise.",
                "La qualité et la construction de l'argumentation portent sur la logique du propos : une question clairement posée, des arguments reliés entre eux par des liens explicites, des exemples qui prouvent quelque chose, et une réponse nette à la question. Le jury apprécie la capacité à relier les savoirs, à nuancer et à construire un point de vue personnel argumenté.",
              ],
              box: { label: "Repère", text: "Une connaissance juste mais non reliée à la question ne fait pas un argument. Un argument sans connaissance exacte ne convainc pas. Le jury évalue les deux séparément." },
            },
            {
              heading: "L'échange : la qualité de l'interaction",
              paragraphs: [
                "La qualité de l'interaction concerne surtout le second temps. Le jury observe si vous comprenez les questions, si vous les reformulez quand c'est utile, si vous y répondez vraiment au lieu de réciter un passage préparé, et si vous savez enrichir votre réponse ou reconnaître une limite. Au niveau le plus élevé, le candidat s'empare des questions et l'échange devient un véritable dialogue.",
                "Ne pas savoir répondre à une question n'est pas éliminatoire : ce qui compte est la manière de réagir. Dire « je ne connais pas ce point précis, mais je peux raisonner à partir de ce que je sais sur… » montre une qualité d'interaction bien supérieure à un silence ou à une réponse inventée.",
              ],
            },
          ],
          keyPoints: [
            "La grille du Grand oral est indicative : cinq critères, quatre niveaux, une seule note globale sur 20.",
            "Qualité orale : audibilité, articulation, débit, intonation, vocabulaire précis, engagement.",
            "Prise de parole en continu : fluidité et usage complet des dix minutes d'exposé.",
            "Qualité des connaissances : notions de spécialité exactes, mobilisées à bon escient.",
            "Qualité de l'interaction : comprendre, reformuler, répondre vraiment, dialoguer.",
            "Argumentation : question claire, arguments liés, exemples probants, réponse nette.",
            "Le support et la tenue vestimentaire ne figurent pas parmi les critères de la grille.",
          ],
          example: {
            statement: "Lors d'un oral blanc, Hugo parle d'une voix claire et assurée, mais son exposé dure six minutes. Il confond deux notions importantes de sa spécialité. Pendant l'échange, il répond à chaque question en récitant un passage appris par cœur. Situez sa prestation critère par critère et proposez une priorité de travail.",
            solution: [
              "Qualité orale : point fort. La voix est claire et assurée ; on peut placer ce critère vers « satisfaisant » ou « très satisfaisant ».",
              "Prise de parole en continu : point faible. Six minutes sur dix, c'est un temps mal utilisé ; le développement est trop court.",
              "Qualité des connaissances : point faible. La confusion entre deux notions centrales révèle une maîtrise fragile.",
              "Qualité de l'interaction : point faible. Réciter au lieu de répondre montre qu'il ne s'empare pas des questions.",
              "Argumentation : impossible à juger favorablement si les notions sont confondues et le développement écourté.",
              "Priorité : revoir et définir précisément les notions confondues (le fond conditionne tout le reste), puis enrichir le développement pour atteindre dix minutes, enfin s'entraîner à répondre à des questions imprévues.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque observation d'un jury au critère de la grille qu'elle concerne : a) « On l'entend mal au fond de la salle. » b) « Elle confond inflation et hausse du prix d'un seul bien. » c) « Il reformule la question avant d'y répondre. » d) « Les parties s'enchaînent sans lien logique. » e) « L'exposé s'arrête au bout de sept minutes. »",
              hint: "Demandez-vous si l'observation porte sur la voix, sur la durée et la fluidité de l'exposé, sur l'exactitude des savoirs, sur l'échange ou sur la logique du propos.",
              solution: [
                "a) Qualité orale (audibilité de la voix).",
                "b) Qualité des connaissances (l'inflation est une hausse durable du niveau général des prix, pas celle d'un seul bien).",
                "c) Qualité de l'interaction (comprendre et reformuler la question).",
                "d) Qualité et construction de l'argumentation (absence de liens logiques).",
                "e) Qualité de la prise de parole en continu (temps disponible mal utilisé).",
                "Résultat : a, qualité orale ; b, connaissances ; c, interaction ; d, argumentation ; e, prise de parole en continu.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des cinq critères de la grille, écrivez une phrase décrivant ce que ferait un candidat au niveau « très satisfaisant », avec vos propres mots.",
              hint: "Partez de ce que le jury observe pour chaque critère, puis imaginez la meilleure version de ce comportement.",
              solution: [
                "Qualité orale : le candidat est audible du début à la fin, articule, varie son ton pour mettre en relief les idées clés et emploie un vocabulaire précis.",
                "Prise de parole en continu : l'exposé est fluide, sans blancs ni phrases inachevées, et occupe pleinement les dix minutes.",
                "Qualité des connaissances : les notions de spécialité sont exactes, définies et utilisées à bon escient, y compris dans les réponses.",
                "Qualité de l'interaction : le candidat comprend les questions, les reformule si besoin, répond vraiment et engage un dialogue avec le jury.",
                "Argumentation : la question est clairement posée, les arguments sont reliés par des liens logiques, les exemples prouvent, et la conclusion répond nettement.",
                "Résultat : cinq phrases qui forment une grille d'auto-évaluation utilisable à chaque répétition.",
              ],
            },
            {
              level: 3,
              statement: "Situation type oral blanc : Sarah présente la question « Pourquoi la vaccination d'une partie de la population protège-t-elle aussi les personnes non vaccinées ? ». Son exposé est fluide et dure dix minutes. Elle explique l'immunité collective avec un schéma clair. Pendant l'échange, le jury lui demande ce qu'est un antigène ; elle hésite, puis répond « je ne sais plus exactement ». Rédigez l'appréciation qu'un jury pourrait formuler, critère par critère, puis proposez à Sarah deux conseils précis.",
              hint: "Distinguez ce qui relève de l'exposé (prise de parole, argumentation) et ce qui relève de l'échange (connaissances mobilisées, interaction). Demandez-vous ce qu'elle aurait pu dire au lieu de s'arrêter.",
              solution: [
                "Qualité orale et prise de parole en continu : points forts ; l'exposé est fluide et occupe les dix minutes prévues.",
                "Argumentation : point fort ; le mécanisme de l'immunité collective est expliqué avec clarté et appuyé sur un schéma.",
                "Qualité des connaissances : fragilité ; la notion d'antigène est au cœur du sujet (c'est la molécule reconnue comme étrangère par le système immunitaire, que le vaccin permet de reconnaître).",
                "Qualité de l'interaction : perfectible ; s'arrêter à « je ne sais plus » coupe l'échange au lieu de le poursuivre.",
                "Premier conseil : établir la liste des notions de base liées à la question (antigène, anticorps, lymphocytes, mémoire immunitaire) et savoir définir chacune en une phrase.",
                "Second conseil : en cas d'hésitation, raisonner à voix haute (« un antigène, c'est ce que le système immunitaire reconnaît comme étranger ; le vaccin en présente un sans la maladie ») plutôt que se taire.",
                "Résultat : une prestation solide à l'exposé, pénalisée à l'échange par une notion de base mal maîtrisée et une réaction trop passive.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque critère de la grille du Grand oral à ce que le jury observe.",
            pairs: [
              { left: "Qualité orale", right: "Une voix audible, une bonne articulation, un ton varié et un vocabulaire précis" },
              { left: "Prise de parole en continu", right: "Un exposé fluide qui occupe pleinement les dix minutes" },
              { left: "Qualité des connaissances", right: "Des notions de spécialité exactes, mobilisées à bon escient" },
              { left: "Qualité de l'interaction", right: "Des questions comprises, reformulées et vraiment traitées" },
              { left: "Construction de l'argumentation", right: "Des arguments reliés logiquement qui mènent à une réponse nette" },
            ],
          },
          quiz: [
            {
              q: "Combien de critères compte la grille indicative d'évaluation du Grand oral ?",
              options: ["Trois", "Quatre", "Six", "Cinq"],
              answer: 3,
              why: "La grille décrit cinq critères : qualité orale, prise de parole en continu, connaissances, interaction, argumentation.",
            },
            {
              q: "Que signifie le caractère « indicatif » de la grille ?",
              options: ["Le jury s'en sert comme repère et attribue une note globale", "Chaque critère vaut exactement quatre points, additionnés pour faire la note", "Le candidat la remplit lui-même avant l'épreuve", "Elle ne concerne que les oraux blancs"],
              answer: 0,
              why: "La grille sert de repère commun au jury, qui donne une seule note sur 20 sans additionner des points par critère.",
            },
            {
              q: "Un candidat récite un passage appris au lieu de répondre à la question posée. Quel critère est surtout concerné ?",
              options: ["La qualité orale", "La qualité de l'interaction", "La prise de parole en continu", "La qualité du support remis au jury"],
              answer: 1,
              why: "L'interaction évalue la capacité à comprendre les questions, à y répondre vraiment et à dialoguer avec le jury.",
            },
            {
              q: "Lequel de ces éléments ne fait pas partie des critères de la grille ?",
              options: ["La fluidité de l'exposé", "La justesse des notions de spécialité", "La qualité esthétique du support", "Les liens logiques entre les arguments"],
              answer: 2,
              why: "Le support remis au jury n'est pas évalué ; la fluidité, les connaissances et l'argumentation sont des critères de la grille.",
            },
            {
              q: "Face à une question dont il ignore la réponse, quelle réaction valorise le mieux le candidat ?",
              options: ["Inventer une réponse avec assurance", "Rester silencieux jusqu'à la question suivante", "Revenir tranquillement à son exposé sans tenir compte de la question posée", "Reconnaître la limite et raisonner à partir de ce qu'il sait"],
              answer: 3,
              why: "Reconnaître une limite puis raisonner montre une bonne qualité d'interaction ; inventer ou se taire coupe le dialogue.",
            },
          ],
          trap: "Croire que le jury évalue surtout l'aisance : une voix assurée ne compense pas des notions fausses ou un raisonnement décousu, car connaissances et argumentation sont deux critères à part entière.",
          method: "Après chaque répétition enregistrée, attribuez-vous un niveau (de très insuffisant à très satisfaisant) sur chacun des cinq critères et choisissez un seul critère à améliorer pour la répétition suivante.",
        },
      ],
    },
    /* ==================================================================== */
    /* CHOISIR ET FORMULER SES DEUX QUESTIONS                                */
    /* ==================================================================== */
    {
      id: 'deux-questions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'choisir-ses-questions',
          title: 'Choisir deux questions en lien avec ses spécialités',
          minutes: 25,
          objectives: [
            "Identifier les règles qui encadrent les deux questions : un lien avec les enseignements de spécialité, pris isolément ou abordés de manière transversale.",
            "Choisir deux questions qui permettent un exposé de dix minutes et un échange approfondi avec le jury.",
            "Évaluer la pertinence d'un couple de questions à l'aide de critères explicites.",
          ],
          course: [
            {
              heading: "Ce que prévoit le texte de l'épreuve",
              paragraphs: [
                "Dans la voie générale, le candidat présente au jury deux questions qui portent sur ses deux enseignements de spécialité, soit pris isolément, soit abordés de manière transversale. Une question peut donc relever d'une seule spécialité (par exemple les SES) ou croiser les deux (par exemple les mathématiques et la physique-chimie).",
                "Ces questions ne s'improvisent pas : vous les élaborez et les préparez pendant le cycle terminal, avec l'aide de vos professeurs. La feuille qui les présente est visée par vos professeurs de spécialité et porte le cachet de l'établissement. Le jour de l'épreuve, le jury choisit l'une des deux : chacune doit donc pouvoir tenir seule dix minutes d'exposé et dix minutes d'échange.",
              ],
              box: { label: "Règle", text: "Deux questions, en lien avec vos enseignements de spécialité (pris isolément ou de manière transversale), élaborées pendant le cycle terminal avec vos professeurs, présentées sur une feuille visée. Le jury choisit celle que vous traiterez." },
            },
            {
              heading: "Quatre critères pour juger une question",
              paragraphs: [
                "Premier critère, l'ancrage dans le programme : la question doit mobiliser des notions étudiées en Première ou en Terminale dans vos spécialités. Le jury vous interrogera sur ces notions ; une question qui repose surtout sur des connaissances extérieures au programme vous expose sans vous valoriser.",
                "Deuxième critère, l'intérêt personnel : vous devrez expliquer pourquoi vous avez choisi cette question, et vous passerez des mois avec elle. Une curiosité sincère se voit et s'entend. Troisième critère, la juste ampleur : la question doit être assez riche pour dix minutes et pour un échange, mais assez délimitée pour être réellement traitée. « Le climat » est un thème, pas une question.",
                "Quatrième critère, l'existence d'un vrai problème : la question doit appeler une explication ou une argumentation, et non un simple récit ou une définition. « Qu'est-ce que l'ADN ? » invite à réciter un cours ; « Pourquoi deux cellules qui portent le même ADN peuvent-elles avoir des fonctions différentes ? » invite à raisonner.",
              ],
              box: { label: "À retenir", text: "Une bonne question est ancrée dans le programme, choisie par intérêt, de juste ampleur, et porteuse d'un vrai problème à expliquer ou à discuter." },
            },
            {
              heading: "Composer un couple de questions équilibré",
              paragraphs: [
                "Pensez vos deux questions ensemble. Une configuration courante consiste à choisir une question par spécialité, ce qui montre l'étendue de votre formation. Une question transversale montre votre capacité à relier deux disciplines, à condition que les deux y soient vraiment mobilisées et pas seulement juxtaposées.",
                "Exemples de questions bien construites. En SES : « Pourquoi le chômage peut-il persister alors même que l'économie crée des emplois ? ». En HGGSP : « Pourquoi les océans sont-ils devenus un espace de rivalités entre puissances ? ». En SVT et physique-chimie, de manière transversale : « Pourquoi le carbone 14 ne permet-il pas de dater une roche vieille de plusieurs millions d'années ? » (sa demi-vie, d'environ 5 730 ans, le rend inutilisable au-delà de quelques dizaines de milliers d'années).",
                "Testez enfin vos questions lors des oraux blancs et ajustez-les : une question qui vous laisse à court d'idées au bout de cinq minutes est trop étroite ; une question sur laquelle vous ne savez pas par où commencer est trop large.",
              ],
            },
          ],
          keyPoints: [
            "Deux questions liées aux enseignements de spécialité, pris isolément ou de manière transversale.",
            "Elles sont préparées pendant le cycle terminal avec les professeurs, sur une feuille visée par l'établissement.",
            "Le jury choisit : chaque question doit tenir seule dix minutes d'exposé et dix minutes d'échange.",
            "Quatre critères : ancrage dans le programme, intérêt personnel, juste ampleur, vrai problème.",
            "Une question transversale doit réellement mobiliser les deux spécialités.",
            "Un thème (« le climat ») n'est pas une question ; une définition à réciter non plus.",
          ],
          example: {
            statement: "Malik suit les spécialités SES et mathématiques. Il propose : Q1 « Qu'est-ce que le PIB ? » et Q2 « L'intelligence artificielle va-t-elle changer le monde ? ». Évaluez ce couple de questions à l'aide des quatre critères, puis proposez deux questions améliorées.",
            solution: [
              "Q1 : bien ancrée dans le programme de SES, mais elle n'appelle qu'une définition. Il n'y a pas de problème à résoudre : l'exposé tournerait à la récitation de cours.",
              "Q2 : beaucoup trop large, sans notion de spécialité identifiable ; ni les SES ni les mathématiques n'y sont mobilisées de façon précise.",
              "Bilan : le couple ne permet ni de raisonner (Q1) ni de délimiter le propos (Q2).",
              "Q1 améliorée (SES) : « Pourquoi le PIB est-il un indicateur insuffisant pour mesurer le bien-être d'une population ? ». Elle mobilise une notion du programme et oblige à argumenter.",
              "Q2 améliorée (transversale) : « Pourquoi un faible écart de taux de croissance produit-il, sur longue période, de grands écarts de PIB par habitant ? ». Elle mobilise une notion de SES (la croissance économique) et une notion de mathématiques (les suites géométriques).",
              "Réponse : le couple initial est insuffisant ; le couple amélioré associe une question de SES problématisée et une question transversale qui mobilise réellement les deux spécialités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une élève suit les spécialités mathématiques et physique-chimie. Pour chaque question, indiquez la ou les spécialités mobilisées et précisez si la question est traitée isolément ou de manière transversale : a) « Pourquoi un satellite géostationnaire paraît-il immobile depuis le sol ? » b) « En quoi le raisonnement par récurrence permet-il de démontrer une propriété vraie pour tous les entiers naturels ? » c) « Comment la fonction exponentielle permet-elle de modéliser la décroissance radioactive ? »",
              hint: "Demandez-vous quelles notions du programme chaque question oblige à utiliser : mouvement et gravitation, raisonnement mathématique, modélisation d'un phénomène physique.",
              solution: [
                "a) Physique-chimie, prise isolément : la question mobilise le mouvement des satellites (orbite circulaire dans le plan de l'équateur, période égale à celle de la rotation de la Terre).",
                "b) Mathématiques, prises isolément : la question porte sur un mode de démonstration du programme de Terminale.",
                "c) Transversale : la décroissance radioactive est étudiée en physique-chimie, la fonction exponentielle en mathématiques ; la question relie les deux.",
                "Résultat : a, physique-chimie ; b, mathématiques ; c, transversale (mathématiques et physique-chimie).",
              ],
            },
            {
              level: 2,
              statement: "Évaluez chacune des questions suivantes à l'aide des quatre critères du cours (ancrage, intérêt, ampleur, problème), puis dites laquelle est la mieux construite : a) « Les inégalités. » b) « Quelle est la date de la chute du mur de Berlin ? » c) « Pourquoi l'école ne suffit-elle pas à garantir l'égalité des chances ? » d) « L'histoire de l'informatique de 1940 à nos jours. »",
              hint: "Repérez d'abord les formulations qui ne sont pas des questions, puis celles qui appellent une réponse en un mot.",
              solution: [
                "a) Ce n'est pas une question mais un thème : ampleur démesurée, aucun problème formulé.",
                "b) Question fermée : la réponse tient en une date (le 9 novembre 1989). Aucun raisonnement n'est demandé.",
                "c) Question bien construite : ancrée dans le programme de SES (l'école et la mobilité sociale), délimitée, et porteuse d'un problème (l'école vise l'égalité, pourtant les inégalités de réussite persistent).",
                "d) Sujet de récit chronologique, beaucoup trop vaste, sans problème à résoudre : l'exposé deviendrait une liste de dates.",
                "Résultat : la question c est la mieux construite ; a et d sont trop larges, b est fermée.",
              ],
            },
            {
              level: 3,
              statement: "Situation type Grand oral : vous suivez les spécialités SES et HGGSP. Proposez un couple de deux questions (l'une en SES, l'autre en HGGSP ou transversale). Pour chacune, justifiez son choix à l'aide des quatre critères et rédigez une question que le jury pourrait vous poser pendant l'échange.",
              hint: "Partez d'une notion précise de chaque programme (par exemple le commerce international en SES, les nouveaux espaces de conquête en HGGSP), puis cherchez la tension qui en fait un problème.",
              solution: [
                "Question 1 (SES) : « Pourquoi un pays comme la France importe-t-il des biens qu'il sait lui-même produire ? »",
                "Justification : ancrée dans le programme (les fondements du commerce international), d'ampleur raisonnable, et porteuse d'un paradoxe apparent que la différenciation des produits et la recherche de variété par les consommateurs permettent d'expliquer.",
                "Question possible du jury : « Quelle différence faites-vous entre le commerce entre pays de niveau de développement proche et le commerce fondé sur les avantages comparatifs ? »",
                "Question 2 (HGGSP) : « Pourquoi les océans sont-ils devenus un espace de rivalités entre puissances ? »",
                "Justification : ancrée dans le thème des nouveaux espaces de conquête, délimitée à un espace, et porteuse d'un problème (expliquer des rivalités par les ressources, les routes maritimes et la projection de puissance).",
                "Question possible du jury : « Qu'est-ce qu'une zone économique exclusive, et en quoi peut-elle être source de tensions ? »",
                "Résultat : un couple équilibré, une question par spécialité, chacune problématisée et accompagnée d'une question d'échange anticipée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : idées reçues sur le choix des deux questions.",
            statements: [
              { text: "Les deux questions sont en lien avec les enseignements de spécialité du candidat.", true: true, why: "Elles portent sur les spécialités, prises isolément ou abordées de manière transversale." },
              { text: "Le candidat choisit, le jour de l'épreuve, laquelle des deux questions il présente.", true: false, why: "C'est le jury qui choisit : les deux questions doivent être prêtes." },
              { text: "Une question transversale doit réellement mobiliser les deux spécialités.", true: true, why: "Juxtaposer deux disciplines sans les relier ne montre pas la capacité à croiser les savoirs." },
              { text: "Plus une question est large, plus elle permet de briller.", true: false, why: "Une question trop large ne peut pas être traitée en dix minutes et produit un exposé superficiel." },
              { text: "« Qu'est-ce que la photosynthèse ? » est une bonne question de Grand oral.", true: false, why: "Elle appelle une définition de cours, pas une argumentation : il manque un problème." },
              { text: "Les questions se préparent pendant le cycle terminal, avec l'aide des professeurs.", true: true, why: "Le texte prévoit un travail mené en Première et en Terminale ; la feuille est visée par les professeurs de spécialité." },
              { text: "Une question peut relever d'une seule des deux spécialités.", true: true, why: "Les spécialités peuvent être prises isolément : une question en SES seule est recevable." },
            ],
          },
          quiz: [
            {
              q: "Sur quoi portent les deux questions du Grand oral dans la voie générale ?",
              options: ["Sur un thème libre choisi par le candidat sans contrainte", "Sur les spécialités, prises isolément ou ensemble", "Sur le programme de philosophie", "Sur l'actualité de l'année"],
              answer: 1,
              why: "Le texte de l'épreuve lie les deux questions aux enseignements de spécialité, pris isolément ou abordés de manière transversale.",
            },
            {
              q: "Pourquoi faut-il préparer les deux questions avec le même soin ?",
              options: ["Parce que le jury choisit celle qui sera traitée", "Parce que le candidat les présente toutes les deux", "Parce que la seconde sert de conclusion à la première", "Parce que le support doit porter sur les deux"],
              answer: 0,
              why: "Le candidat ne sait pas laquelle sera retenue : c'est le jury qui choisit le jour de l'épreuve.",
            },
            {
              q: "Laquelle de ces formulations est un thème et non une question ?",
              options: ["Pourquoi le chômage persiste-t-il malgré la croissance ?", "En quoi l'exponentielle modélise-t-elle la radioactivité ?", "Comment expliquer la résistance des bactéries aux antibiotiques ?", "Les énergies renouvelables"],
              answer: 3,
              why: "« Les énergies renouvelables » désigne un domaine, sans délimitation ni problème formulé.",
            },
            {
              q: "Quel est le défaut principal de la question « Qu'est-ce que l'ADN ? » ?",
              options: ["Elle est trop éloignée du programme de SVT", "Elle mobilise trop de spécialités à la fois pour un exposé de dix minutes", "Elle appelle une définition de cours et non un raisonnement", "Elle est trop courte pour figurer sur la feuille"],
              answer: 2,
              why: "Une question qui se résout par une définition ne pose aucun problème à expliquer ou à discuter.",
            },
            {
              q: "À quoi reconnaît-on, lors d'un oral blanc, qu'une question est trop étroite ?",
              options: ["Le jury ne connaît pas le sujet et ne peut donc pas poser de questions", "On est à court d'idées bien avant les dix minutes", "Elle contient le mot « pourquoi »", "Elle mobilise une seule spécialité"],
              answer: 1,
              why: "Une question trop étroite ne fournit pas assez de matière pour dix minutes d'exposé et un échange.",
            },
          ],
          trap: "Choisir une question surtout parce qu'elle « fait sérieux » ou qu'elle est d'actualité, sans vérifier qu'elle repose sur des notions du programme : le jury interroge sur ces notions, et c'est là que l'oral se joue.",
          method: "Pour chaque question envisagée, notez dans un tableau les notions du programme qu'elle mobilise. S'il y en a moins de trois, la question est sans doute mal ancrée ; s'il y en a plus de huit, elle est sans doute trop large.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'formuler-une-question',
          title: 'Formuler une question problématisée',
          minutes: 30,
          objectives: [
            "Distinguer un thème, un sujet et une question problématisée.",
            "Formuler une question ouverte qui appelle une réponse argumentée fondée sur des connaissances de spécialité.",
            "Corriger une question trop large, fermée, descriptive ou orientée.",
          ],
          course: [
            {
              heading: "Du thème à la question",
              paragraphs: [
                "Un thème est un domaine : « les océans », « les inégalités », « l'énergie ». Un sujet est un objet délimité à l'intérieur de ce domaine : « la montée du niveau des océans depuis le début du XXe siècle ». Une question problématisée transforme ce sujet en difficulté à résoudre : « Pourquoi la fonte de la banquise fait-elle à peine monter le niveau des océans, alors que celle des glaciers continentaux le fait monter ? ».",
                "Cette dernière formulation contient un paradoxe apparent. La banquise flotte déjà : comme un glaçon dans un verre, elle déplace une masse d'eau égale à sa propre masse, et sa fonte ne change presque pas le niveau. Les glaciers continentaux, eux, reposent sur la terre : leur eau de fonte s'ajoute à l'océan. Pour répondre, il faut mobiliser des connaissances (la poussée d'Archimède, le cycle de l'eau) et construire une explication : c'est exactement ce qu'attend le jury.",
              ],
              box: { label: "Définition", text: "Une question problématisée est une question ouverte qui fait apparaître une difficulté (paradoxe, tension, débat ou mécanisme à expliquer) et appelle une réponse argumentée, fondée sur des connaissances." },
            },
            {
              heading: "Les qualités d'une bonne formulation",
              paragraphs: [
                "Une bonne question est ouverte : on ne peut pas y répondre par un simple oui, un non ou une date, sans justification. Elle est précise : ses termes peuvent être définis et son cadre est délimité (un phénomène, un espace, une période). Elle est ancrée : elle oblige à utiliser des notions de vos spécialités. Elle est unique : une seule question, en une seule phrase, compréhensible par un non-spécialiste.",
                "Certaines tournures aident à problématiser : « Pourquoi… ? », « Comment expliquer que… ? », « Dans quelle mesure… ? », « En quoi… ? », « Peut-on… ? ». Des connecteurs comme « alors que », « malgré » ou « bien que » font apparaître la tension au cœur de la question. Une question en « Peut-on » se termine certes par un oui ou un non, mais elle reste ouverte si la réponse exige une discussion argumentée.",
              ],
              box: { label: "Repère", text: "Ouverte, précise, ancrée dans les spécialités, unique : quatre qualités à vérifier pour chaque question." },
            },
            {
              heading: "Cinq défauts fréquents et leur correction",
              paragraphs: [
                "Trop large : « L'intelligence artificielle est-elle dangereuse ? » (on ne sait ni de quelle IA ni de quel danger il s'agit). Fermée : « Le chômage a-t-il baissé en France l'an dernier ? » (une donnée suffit à répondre). Descriptive : « Qu'est-ce qu'une suite géométrique ? » (une définition de cours). Ces trois défauts se corrigent en délimitant l'objet et en faisant apparaître un problème.",
                "Orientée : « Pourquoi faut-il interdire les voitures en ville ? » présuppose la réponse et transforme l'exposé en plaidoyer ; mieux vaut « Dans quelle mesure limiter la voiture en ville améliore-t-il la qualité de l'air ? ». Double : « Comment fonctionne un vaccin et faut-il le rendre obligatoire ? » contient deux questions différentes ; il faut en choisir une.",
              ],
            },
            {
              heading: "Tester sa question avant de la garder",
              paragraphs: [
                "Quatre tests simples. Pouvez-vous écrire votre réponse en une ou deux phrases ? Si elle tient en un mot, la question est fermée ; si vous en êtes incapable, elle est trop large. Un ami qui ne suit pas votre spécialité comprend-il la question ? Sinon, simplifiez les termes. La réponse mobilise-t-elle au moins trois notions du programme ? Le jury pourrait-il vous poser cinq questions différentes à partir d'elle ?",
                "Une question n'est pas figée dès le premier jet : on la reformule plusieurs fois au fil de l'année, à mesure que l'on se documente. La version finale est celle qui figure sur la feuille visée par vos professeurs.",
              ],
            },
          ],
          keyPoints: [
            "Thème (un domaine), sujet (un objet délimité), question problématisée (une difficulté à résoudre).",
            "Une question problématisée appelle une réponse argumentée fondée sur des connaissances.",
            "Quatre qualités : ouverte, précise, ancrée dans les spécialités, unique.",
            "Tournures utiles : pourquoi, comment expliquer que, dans quelle mesure, en quoi, peut-on.",
            "Défauts à corriger : trop large, fermée, descriptive, orientée, double.",
            "Test décisif : pouvoir énoncer sa réponse en une ou deux phrases.",
          ],
          example: {
            statement: "À partir du thème « les énergies renouvelables », formulez une question problématisée pour un candidat qui suit la spécialité physique-chimie, en détaillant chaque étape.",
            solution: [
              "Partir du thème : « les énergies renouvelables » est un domaine trop vaste pour dix minutes.",
              "Délimiter un objet : la production d'électricité par les éoliennes et les panneaux solaires.",
              "Repérer une difficulté : cette production dépend du vent et de l'ensoleillement, alors que la consommation d'électricité ne suit pas les mêmes variations. C'est le problème de l'intermittence.",
              "Formuler la question : « Pourquoi l'intermittence de l'éolien et du solaire oblige-t-elle à développer le stockage de l'énergie électrique ? »",
              "Tester : la question est ouverte (il faut expliquer), précise (deux sources, un problème), ancrée (conversion et stockage de l'énergie, puissance, rendement) et compréhensible par un non-spécialiste.",
              "Réponse : « Pourquoi l'intermittence de l'éolien et du solaire oblige-t-elle à développer le stockage de l'énergie électrique ? » est une question problématisée recevable.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque formulation en thème, sujet ou question problématisée : a) « La mondialisation » b) « Le commerce extérieur de la France depuis 2000 » c) « Pourquoi la France importe-t-elle des biens qu'elle sait produire ? » d) « Les trous noirs » e) « En quoi la sélection naturelle explique-t-elle la résistance des bactéries aux antibiotiques ? »",
              hint: "Un thème nomme un domaine ; un sujet délimite un objet sans poser de problème ; une question problématisée fait apparaître une difficulté à expliquer.",
              solution: [
                "a) Thème : un domaine très vaste, sans délimitation.",
                "b) Sujet : l'objet est délimité (un pays, une période), mais aucun problème n'est posé.",
                "c) Question problématisée : elle soulève un paradoxe apparent (importer ce que l'on sait produire) qu'il faut expliquer.",
                "d) Thème : un domaine de l'astrophysique, sans question.",
                "e) Question problématisée : elle demande d'expliquer un mécanisme (la sélection des bactéries résistantes) à l'aide d'une notion du programme.",
                "Résultat : thèmes a et d ; sujet b ; questions problématisées c et e.",
              ],
            },
            {
              level: 2,
              statement: "Nommez le défaut de chaque question, puis réécrivez-la en question problématisée : a) « Qu'est-ce que la fonction exponentielle ? » b) « Pourquoi faut-il taxer davantage les plus riches ? » c) « Le réchauffement climatique est-il réel ? » d) « Comment fonctionne Internet et est-il dangereux pour la démocratie ? »",
              hint: "Cherchez pour chacune ce qui manque : un problème, une neutralité, un débat réel, ou l'unité de la question.",
              solution: [
                "a) Descriptive : elle appelle une définition. Réécriture : « Pourquoi la fonction exponentielle permet-elle de modéliser la croissance d'une population de bactéries ? »",
                "b) Orientée : elle présuppose qu'il faut taxer davantage. Réécriture : « Dans quelle mesure l'impôt progressif permet-il de réduire les inégalités de revenus ? »",
                "c) Fermée et sans débat scientifique réel : le réchauffement actuel est établi. Réécriture : « Pourquoi l'augmentation de la concentration en CO₂ dans l'atmosphère entraîne-t-elle un réchauffement de la surface terrestre ? »",
                "d) Double : deux questions sans lien nécessaire. Réécriture, en en gardant une : « En quoi le routage des paquets permet-il à Internet de fonctionner sans centre unique ? »",
                "Résultat : descriptive, orientée, fermée, double ; chaque réécriture est ouverte, précise, ancrée et unique.",
              ],
            },
            {
              level: 3,
              statement: "Situation type Grand oral : un candidat qui suit les spécialités SVT et physique-chimie propose comme point de départ « Le réchauffement climatique et les océans ». Proposez trois formulations successives (un sujet délimité, une première question, une question problématisée finale), justifiez la dernière à l'aide des quatre tests du cours, puis rédigez la phrase de l'introduction qui l'annonce.",
              hint: "L'océan absorbe une partie du CO₂ émis et l'essentiel de l'excédent de chaleur : cherchez la tension entre ce rôle protecteur et les conséquences qu'il subit.",
              solution: [
                "Sujet délimité : « Le rôle de l'océan face à l'augmentation du CO₂ atmosphérique ».",
                "Première question : « Comment l'océan absorbe-t-il le CO₂ ? » Elle est ancrée, mais encore descriptive.",
                "Question problématisée : « Pourquoi l'océan, qui limite le réchauffement en absorbant du CO₂ et de la chaleur, en subit-il aussi les conséquences ? »",
                "Test 1 (réponse en une phrase) : en absorbant du CO₂, l'océan s'acidifie, et en absorbant de la chaleur, il se dilate et se réchauffe, ce qui menace des écosystèmes et élève son niveau. La réponse est possible et demande une argumentation.",
                "Test 2 (non-spécialiste) : les termes sont courants. Test 3 (notions) : dissolution du CO₂, pH et acidification, dilatation thermique, effets sur les organismes à coquille ou à squelette calcaire. Test 4 (questions possibles du jury) : qu'est-ce que le pH ? pourquoi l'eau se dilate-t-elle en se réchauffant ? quels organismes sont menacés ?",
                "Phrase d'annonce : « L'océan nous rend un service immense en absorbant une partie du CO₂ que nous émettons ; pourquoi alors en subit-il lui-même les conséquences ? »",
                "Résultat : la question finale est ouverte, précise, ancrée dans les deux spécialités et unique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la méthode pour formuler une question problématisée.",
            items: [
              "Partir d'un thème du programme qui vous intéresse",
              "Délimiter un objet précis (un phénomène, un espace, une période)",
              "Repérer une difficulté : paradoxe, débat ou mécanisme à expliquer",
              "Formuler une question ouverte en une seule phrase",
              "Tester la question : réponse en une ou deux phrases, termes compréhensibles, notions du programme",
            ],
          },
          quiz: [
            {
              q: "Quelle formulation est une question problématisée ?",
              options: ["Les inégalités scolaires en France, de la fin du XIXe siècle à nos jours", "Qu'est-ce que l'école ?", "Pourquoi l'école ne suffit-elle pas à effacer les inégalités ?", "L'école a-t-elle été rendue obligatoire en 1882 ?"],
              answer: 2,
              why: "Elle soulève une tension (l'école vise l'égalité, les inégalités persistent) qu'il faut expliquer ; les autres sont un sujet, une définition et une question fermée.",
            },
            {
              q: "Quel est le défaut de « Pourquoi faut-il interdire les voitures en ville ? » ?",
              options: ["Elle est orientée : elle présuppose la réponse", "Elle est trop technique pour un non-spécialiste", "Elle est descriptive", "Elle ne contient aucun verbe"],
              answer: 0,
              why: "La formule « pourquoi faut-il » tient la réponse pour acquise et transforme l'exposé en plaidoyer.",
            },
            {
              q: "Que révèle une question dont la réponse tient en un seul mot ?",
              options: ["Elle est trop large", "Elle est transversale", "Elle est parfaitement délimitée", "Elle est fermée"],
              answer: 3,
              why: "Si un mot ou une date suffit, aucune argumentation n'est nécessaire : la question est fermée.",
            },
            {
              q: "Pourquoi la fonte de la banquise fait-elle à peine monter le niveau des océans ?",
              options: ["Parce que toute l'eau issue de la fonte s'évapore aussitôt au contact de l'air polaire", "Parce que la glace qui flotte déplace déjà une masse d'eau égale à la sienne", "Parce que la banquise se reforme aussitôt chaque nuit", "Parce qu'elle fond uniquement en hiver"],
              answer: 1,
              why: "Comme un glaçon dans un verre, la glace flottante déplace une masse d'eau égale à sa propre masse ; sa fonte change très peu le niveau.",
            },
            {
              q: "Que faire d'une question comme « Comment fonctionne un vaccin et faut-il le rendre obligatoire ? » ?",
              options: ["La garder telle quelle", "N'en garder qu'une des deux questions", "Ajouter une troisième question pour équilibrer", "La transformer en thème"],
              answer: 1,
              why: "C'est une question double : deux problèmes différents ne peuvent pas être traités sérieusement en dix minutes.",
            },
          ],
          trap: "Confondre une question qui commence par « pourquoi » avec une question problématisée : « Pourquoi faut-il… » est orientée, et « Pourquoi le ciel est-il bleu ? » peut se réduire à une définition si aucune difficulté n'est mise en évidence.",
          method: "Écrivez votre question puis, juste en dessous, votre réponse en deux phrases maximum. Si vous n'y parvenez pas, ou si la réponse tient en un mot, reformulez la question avant d'aller plus loin.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'question-et-parcours',
          title: 'Relier ses questions à son parcours et à ses projets',
          minutes: 20,
          objectives: [
            "Expliquer pourquoi l'on a choisi de préparer sa question pendant sa formation, comme le demande le début de l'exposé.",
            "Relier une question à son parcours de formation et, quand c'est pertinent, à son projet de poursuite d'études.",
            "Distinguer une motivation argumentée d'une anecdote ou d'une formule toute faite.",
          ],
          course: [
            {
              heading: "Ce que demande l'épreuve",
              paragraphs: [
                "L'exposé commence par une explication : le candidat dit pourquoi il a choisi de préparer cette question pendant sa formation, avant de la développer et d'y répondre. Ce moment est bref, mais il est le premier que le jury entend : il installe votre légitimité à traiter la question et montre que vous l'avez réellement faite vôtre.",
                "Depuis la session 2024, le Grand oral ne comporte plus de partie séparée consacrée au projet d'orientation. Le lien entre votre question, votre parcours et vos projets n'est donc plus un exercice à part : il se glisse naturellement dans l'explication de votre choix, et le jury peut y revenir pendant l'échange s'il le juge utile.",
              ],
              box: { label: "Repère", text: "Premier temps de l'exposé : pourquoi j'ai choisi cette question pendant ma formation. Une minute environ suffit, à condition qu'elle soit précise et sincère." },
            },
            {
              heading: "Une motivation argumentée : trois éléments",
              paragraphs: [
                "Le déclencheur : ce qui a fait naître votre intérêt, de façon précise et datée dans votre parcours (un chapitre de spécialité, un TP, une lecture, une sortie, un stage, une conférence). « En Première, en étudiant les fonctions de l'État en SES, je me suis demandé pourquoi… » vaut mieux que « Ce sujet m'a toujours passionné ».",
                "L'approfondissement : ce que vous avez fait pour aller plus loin (lectures, recherches au CDI, échanges avec un professeur, travail personnel). Cet élément montre une démarche active et prépare les questions du jury sur vos sources. L'apport : ce que la question vous a appris, ou ce qu'elle a changé dans votre manière de voir votre spécialité.",
              ],
              box: { label: "À retenir", text: "Déclencheur précis, approfondissement personnel, apport de la question : trois éléments qui transforment « j'aime ce sujet » en motivation argumentée." },
            },
            {
              heading: "Relier la question à son projet, sans forcer",
              paragraphs: [
                "Si votre question est liée à votre projet de poursuite d'études, dites-le en une phrase claire : « Cette question m'a confirmé mon envie de suivre une licence de sciences de la vie. » Si elle ne l'est pas, n'inventez pas de lien artificiel : une question peut être choisie par pur intérêt intellectuel, et le jury apprécie la sincérité plus qu'un rapprochement forcé.",
                "Vous pouvez aussi montrer ce que le travail sur la question vous a permis de développer : rigueur, goût de la modélisation, capacité à expliquer à un non-spécialiste. Ce sont des compétences utiles quel que soit le projet. La réflexion que vous menez ici rejoint celle des éléments de motivation rédigés sur Parcoursup : veillez à la cohérence, sans réciter un texte écrit pour un autre usage.",
                "Enfin, un projet peut être encore incertain. Dire que la question vous a aidé à hésiter entre deux voies, ou à en écarter une, est une réponse honnête et recevable.",
              ],
            },
          ],
          keyPoints: [
            "L'exposé commence par les raisons pour lesquelles vous avez choisi la question pendant votre formation.",
            "Depuis 2024, plus de partie séparée sur l'orientation : le lien au projet se glisse dans la motivation et peut revenir à l'échange.",
            "Trois éléments : un déclencheur précis, un approfondissement personnel, un apport de la question.",
            "Évitez les formules creuses (« j'ai toujours été passionné », « c'est d'actualité »).",
            "Ne forcez pas le lien avec le projet : la sincérité vaut mieux qu'un rapprochement artificiel.",
            "Restez cohérent avec ce que vous avez écrit sur Parcoursup, sans le réciter.",
          ],
          example: {
            statement: "Léa présente la question « En quoi la sélection naturelle explique-t-elle la résistance des bactéries aux antibiotiques ? ». Sa motivation actuelle est : « J'ai choisi cette question parce que c'est un sujet d'actualité et que j'ai toujours adoré la biologie. » Réécrivez cette motivation (situation fictive : Léa a réalisé un antibiogramme en TP de SVT en Première et souhaite s'orienter vers des études de pharmacie).",
            solution: [
              "Diagnostiquer : la motivation repose sur deux formules creuses ; elle ne dit rien du parcours de Léa ni de sa démarche.",
              "Le déclencheur : « En Première, lors d'un TP de SVT, j'ai réalisé un antibiogramme : certaines souches résistaient à des antibiotiques efficaces sur d'autres. Je me suis demandé d'où venait cette différence. »",
              "L'approfondissement : « En Terminale, j'ai retrouvé cette question dans le chapitre sur l'évolution, et j'ai lu des articles de vulgarisation sur la sélection des bactéries résistantes. »",
              "L'apport et le lien au projet : « Cette question m'a montré que l'évolution n'est pas seulement une histoire ancienne : elle se déroule sous nos yeux. Elle a renforcé mon envie d'étudier la pharmacie. »",
              "Réponse : une motivation de quatre phrases, précise et sincère, qui annonce naturellement la question.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque phrase d'une motivation en déclencheur, approfondissement, apport, lien avec le projet ou formule creuse : a) « J'ai toujours été fasciné par l'espace. » b) « En Terminale, le chapitre sur les lois de Kepler m'a intrigué. » c) « J'ai lu deux ouvrages de vulgarisation empruntés au CDI. » d) « J'ai compris qu'une loi physique permet de prévoir un mouvement avec une grande précision. » e) « Je souhaite poursuivre en licence de physique. »",
              hint: "Demandez-vous à chaque fois si la phrase dit d'où vient l'intérêt, ce que vous avez fait ensuite, ce que vous avez appris, où vous allez, ou si elle ne dit rien de précis.",
              solution: [
                "a) Formule creuse : elle ne dit rien de précis sur le parcours.",
                "b) Déclencheur : un moment précis de la formation.",
                "c) Approfondissement : une démarche personnelle.",
                "d) Apport : ce que la question a appris au candidat.",
                "e) Lien avec le projet de poursuite d'études.",
                "Résultat : a, formule creuse ; b, déclencheur ; c, approfondissement ; d, apport ; e, projet.",
              ],
            },
            {
              level: 2,
              statement: "Situation fictive : Yanis suit les spécialités SES et HGGSP. Sa question est « Pourquoi les océans sont-ils devenus un espace de rivalités entre puissances ? ». Il a découvert le sujet en HGGSP en Terminale, a lu un atlas géopolitique au CDI et envisage une licence de géographie. Rédigez sa motivation en quatre phrases.",
              hint: "Une phrase par élément : déclencheur, approfondissement, apport, lien avec le projet.",
              solution: [
                "Déclencheur : « En Terminale, le thème des nouveaux espaces de conquête en HGGSP m'a fait découvrir que les océans, que j'imaginais comme des espaces vides, sont disputés. »",
                "Approfondissement : « J'ai approfondi le sujet en consultant au CDI un atlas géopolitique consacré aux espaces maritimes. »",
                "Apport : « J'ai compris que la maîtrise des mers repose à la fois sur le droit, sur les ressources et sur la puissance militaire. »",
                "Lien avec le projet : « Ce travail m'a confirmé mon goût pour l'analyse des territoires, que je souhaite poursuivre en licence de géographie. »",
                "Résultat : une motivation précise d'environ trente secondes à une minute, qui conduit naturellement à la question.",
              ],
            },
            {
              level: 3,
              statement: "Situation type échange avec le jury (fictive) : Inès a présenté la question « Pourquoi un satellite géostationnaire paraît-il immobile depuis le sol ? ». Elle souhaite devenir infirmière. Le jury lui demande : « Quel lien faites-vous entre cette question et votre projet ? » Rédigez une réponse honnête d'environ une minute, sans inventer de lien artificiel.",
              hint: "Il n'y a pas de lien thématique direct : cherchez plutôt ce que le travail sur la question a développé chez Inès, et assumez l'intérêt intellectuel.",
              solution: [
                "Reconnaître simplement l'absence de lien direct : « Je n'ai pas choisi cette question pour mon projet : elle n'a pas de lien direct avec le métier d'infirmière. »",
                "Assumer l'intérêt intellectuel : « Je l'ai choisie parce que la mécanique m'a passionnée en Terminale, et je voulais comprendre un phénomène que l'on observe tous les jours avec les antennes paraboliques. »",
                "Dégager des compétences utiles : « Ce travail m'a appris à expliquer clairement une notion complexe à quelqu'un qui ne la connaît pas, ce que je devrai faire avec des patients. Il m'a aussi habituée à la rigueur, par exemple dans les calculs. »",
                "Conclure : « Ma question et mon projet sont donc différents, mais la démarche que j'ai suivie me servira. »",
                "Résultat : une réponse sincère, structurée, qui transforme une absence de lien en preuve de recul.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément de la motivation à l'exemple qui lui correspond.",
            pairs: [
              { left: "Déclencheur", right: "« En Première, un TP de SVT m'a fait découvrir ce phénomène. »" },
              { left: "Approfondissement", right: "« J'ai lu plusieurs articles et interrogé ma professeure. »" },
              { left: "Apport", right: "« J'ai compris que l'évolution se déroule sous nos yeux. »" },
              { left: "Lien avec le projet", right: "« Cette question a renforcé mon envie d'étudier la pharmacie. »" },
              { left: "Formule creuse", right: "« Ce sujet m'a toujours passionné. »" },
            ],
          },
          quiz: [
            {
              q: "Par quoi commence l'exposé du Grand oral ?",
              options: ["Par la conclusion, pour gagner du temps", "Par une partie de cinq minutes consacrée au projet d'orientation du candidat", "Par les raisons du choix de la question pendant la formation", "Par la lecture du support"],
              answer: 2,
              why: "Le candidat explique d'abord pourquoi il a choisi de préparer cette question, puis il la développe et y répond.",
            },
            {
              q: "Depuis la session 2024, comment le projet d'orientation apparaît-il dans l'épreuve ?",
              options: ["Dans une partie séparée de cinq minutes, placée à la fin de l'épreuve", "Il est interdit d'en parler", "Il est noté à part sur 4 points", "Il peut apparaître dans la motivation et à l'échange"],
              answer: 3,
              why: "Il n'y a plus de partie séparée : le lien au projet se glisse dans l'explication du choix et le jury peut y revenir.",
            },
            {
              q: "Laquelle de ces phrases est un déclencheur précis ?",
              options: ["« En Terminale, le chapitre sur le chômage m'a interrogé. »", "« J'ai toujours aimé l'économie. »", "« C'est un sujet très important aujourd'hui et tout le monde en parle autour de moi. »", "« Je trouve ce thème intéressant. »"],
              answer: 0,
              why: "Elle situe l'origine de l'intérêt dans un moment identifiable du parcours ; les autres sont des formules creuses.",
            },
            {
              q: "Votre question n'a aucun lien avec votre projet. Que faire ?",
              options: ["Inventer un lien avec le projet pour rassurer le jury, même s'il est artificiel", "Assumer l'intérêt intellectuel et dégager les compétences acquises", "Changer de projet", "Refuser de répondre à la question du jury"],
              answer: 1,
              why: "La sincérité est appréciée : on peut montrer ce que le travail sur la question a développé, sans rapprochement artificiel.",
            },
            {
              q: "Quelle durée est raisonnable pour expliquer le choix de la question ?",
              options: ["Environ une minute", "Environ cinq minutes", "Tout l'exposé", "Aucune, ce moment est facultatif"],
              answer: 0,
              why: "C'est un moment bref : il installe la question sans empiéter sur le développement et la réponse.",
            },
          ],
          trap: "Ouvrir l'exposé par une formule creuse (« J'ai toujours été passionné par ce sujet ») ou par un lien artificiel avec un projet : le jury attend un parcours précis et sincère, pas une déclaration d'enthousiasme.",
          method: "Rédigez votre motivation en quatre phrases (déclencheur, approfondissement, apport, projet), puis supprimez tout mot que vous ne pourriez pas justifier par un fait précis de votre parcours si le jury vous le demandait.",
        },
      ],
    },
    /* ==================================================================== */
    /* CONSTRUIRE SON ARGUMENTATION                                          */
    /* ==================================================================== */
    {
      id: 'construire-l-argumentation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'documenter-sa-question',
          title: 'Documenter sa question : sources et références',
          minutes: 30,
          objectives: [
            "Identifier des sources adaptées pour documenter sa question : cours, ouvrages, articles, données d'organismes publics.",
            "Évaluer la fiabilité d'une source à l'aide de critères explicites : auteur, date, nature, intention, recoupement.",
            "Citer une source et une donnée chiffrée de façon exacte et claire à l'oral.",
            "Utiliser une IA générative avec discernement, en vérifiant chaque information dans une source identifiée.",
          ],
          course: [
            {
              heading: "Pourquoi se documenter au-delà du cours",
              paragraphs: [
                "Le cours de spécialité est le socle de votre question : c'est sur ses notions que le jury vous interrogera. Mais un bon exposé a besoin de plus : des exemples précis, une ou deux données chiffrées, une référence à un auteur ou à une étude, un cas concret. Ces éléments rendent l'argumentation convaincante et montrent un travail personnel.",
                "Se documenter prépare aussi l'échange. Le jury peut vous demander d'où vient un chiffre, ce qu'un auteur entend par une notion, ou si vous connaissez un contre-exemple. Celui qui a lu autour de sa question répond avec assurance ; celui qui a recopié une phrase sans savoir d'où elle vient se trouve vite en difficulté.",
              ],
            },
            {
              heading: "Où chercher : du plus sûr au plus délicat",
              paragraphs: [
                "Commencez par vos cours et vos manuels de spécialité, qui fixent les définitions. Poursuivez avec des ouvrages de référence et de vulgarisation, empruntés au CDI : le professeur-documentaliste peut vous aider à les choisir (et il peut aussi siéger dans un jury de Grand oral). Les revues de vulgarisation scientifique et la presse d'information fournissent des articles signés et datés, utiles pour les exemples récents.",
                "Pour les données chiffrées, privilégiez les organismes publics de statistique et les institutions reconnues : l'INSEE pour la France, Eurostat pour l'Union européenne, la Banque mondiale pour les comparaisons internationales, les rapports du GIEC pour le climat. Une encyclopédie collaborative en ligne peut servir de point de départ pour s'orienter, à condition de remonter ensuite aux sources qu'elle cite.",
              ],
              box: { label: "Repère", text: "Cours et manuels pour les définitions, ouvrages et articles pour l'approfondissement, organismes publics pour les chiffres. Une encyclopédie en ligne sert de point de départ, jamais de source finale." },
            },
            {
              heading: "Évaluer la fiabilité d'une source",
              paragraphs: [
                "Cinq questions permettent de juger une source. Qui ? L'auteur est-il identifié et compétent dans ce domaine ? Quand ? La date est-elle indiquée, et les données sont-elles encore pertinentes ? Quoi ? S'agit-il d'un article scientifique, d'un ouvrage de vulgarisation, d'une tribune d'opinion, d'un contenu publicitaire ? Pourquoi ? L'intention est-elle d'informer, de convaincre ou de vendre ?",
                "La cinquième question est celle du recoupement : une information importante doit être confirmée par au moins une autre source indépendante. Une vidéo anonyme, non datée, financée par une marque qui vend le produit dont elle parle, cumule tous les signaux d'alerte. Une publication de l'INSEE, datée et accompagnée de sa méthode, offre au contraire de solides garanties.",
              ],
              box: { label: "Règle", text: "Qui ? Quand ? Quoi ? Pourquoi ? Est-ce recoupé ? Une source qui ne permet pas de répondre aux deux premières questions ne doit pas être citée devant un jury." },
            },
            {
              heading: "Citer à l'oral et utiliser l'IA avec discernement",
              paragraphs: [
                "À l'oral, une citation de source doit être brève et précise : qui, quand, quoi. « Selon l'INSEE, en 2022, … » vaut mieux qu'un vague « des études montrent que ». Arrondissez les chiffres pour qu'ils soient retenus (« près d'un quart » plutôt que « 23,4 % »), mais notez la valeur exacte dans vos fiches au cas où le jury la demande. Un ou deux chiffres bien choisis valent mieux qu'une avalanche. Et une règle absolue : ne jamais inventer un chiffre ou une référence.",
                "Une IA générative peut vous aider à explorer un sujet, à reformuler une notion ou à trouver des pistes de recherche. Mais elle peut produire des erreurs présentées avec assurance, et même citer des articles ou des ouvrages qui n'existent pas. Toute information obtenue ainsi doit être vérifiée dans une source identifiée avant d'être utilisée. Le jour de l'épreuve, c'est vous que le jury interroge : vous devez comprendre et pouvoir justifier tout ce que vous dites.",
              ],
            },
          ],
          keyPoints: [
            "Le cours est le socle ; la documentation apporte exemples, données et références qui convainquent.",
            "Sources sûres pour les chiffres : INSEE, Eurostat, Banque mondiale, rapports du GIEC.",
            "Cinq questions pour juger une source : qui, quand, quoi, pourquoi, est-ce recoupé ?",
            "À l'oral : citer qui, quand, quoi ; arrondir les chiffres ; garder la valeur exacte dans ses fiches.",
            "Ne jamais inventer un chiffre ni une référence.",
            "Une IA générative peut se tromper ou inventer des sources : tout vérifier avant de l'utiliser.",
          ],
          example: {
            statement: "Pour une question sur le chômage des jeunes, Tom a trouvé trois documents (données fictives) : A) un billet de blog anonyme et non daté affirmant que « la moitié des jeunes sont au chômage » ; B) une publication d'un organisme public de statistique, datée de 2023, présentant le taux de chômage des 15-24 ans avec sa méthode ; C) un article de presse signé, daté de 2012, sur le même sujet. Lequel doit-il utiliser, et comment ?",
            solution: [
              "Document A : auteur inconnu, aucune date, aucune source. Il ne répond ni à « qui ? » ni à « quand ? ». De plus, l'affirmation confond probablement le taux de chômage (chômeurs rapportés aux actifs) avec une part de l'ensemble des jeunes. À écarter.",
              "Document B : auteur institutionnel identifié, date récente, méthode explicite. C'est la source à citer.",
              "Document C : fiable par son auteur et sa date, mais ses données sont anciennes. Il peut servir à montrer une évolution, à condition de préciser l'année.",
              "Citation orale possible : « Selon l'organisme public de statistique, en 2023, le taux de chômage des 15-24 ans était de… », avec la valeur arrondie, et la valeur exacte dans les fiches.",
              "Réponse : utiliser B pour la donnée actuelle, éventuellement C pour une comparaison datée, et écarter A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces sources de la plus fiable à la moins fiable pour un exposé de Grand oral, en justifiant brièvement : a) une vidéo d'un influenceur, sponsorisée par une marque ; b) un manuel de spécialité ; c) une publication de l'INSEE ; d) un message anonyme sur un forum ; e) un ouvrage de vulgarisation écrit par un chercheur du domaine.",
              hint: "Appliquez à chacune les questions « qui ? », « quand ? » et « pourquoi ? ».",
              solution: [
                "c) La publication de l'INSEE : auteur institutionnel, données datées, méthode publiée.",
                "b) Le manuel de spécialité : contenu conforme au programme, relu, daté ; il fixe les définitions.",
                "e) L'ouvrage d'un chercheur du domaine : auteur compétent, mais il simplifie et peut défendre un point de vue ; à recouper.",
                "a) La vidéo sponsorisée : l'intention commerciale fragilise l'information.",
                "d) Le message anonyme : ni auteur, ni date, ni source.",
                "Résultat : c, b, e, puis a et d, à ne pas citer. (On peut discuter l'ordre entre c et b, tous deux très fiables.)",
              ],
            },
            {
              level: 2,
              statement: "Transformez ces notes écrites en phrases à prononcer, avec la source et des chiffres arrondis (données fictives) : a) « Enquête nationale 2024, organisme public : 23,4 % des 18-24 ans déclarent s'informer d'abord par les réseaux sociaux. » b) « Même enquête : 1 873 000 personnes interrogées ou concernées. » Indiquez aussi ce que vous gardez dans vos fiches.",
              hint: "Un chiffre arrondi doit rester honnête : comparez-le à une fraction simple ou à un ordre de grandeur.",
              solution: [
                "a) 23,4 % est proche de 25 %, soit un quart. Phrase orale : « Selon une enquête nationale publiée en 2024 par un organisme public, près d'un quart des 18-24 ans s'informent d'abord par les réseaux sociaux. »",
                "b) 1 873 000 arrondi au dixième de million donne 1,9 million. Phrase orale : « … soit près de 1,9 million de personnes. »",
                "Vérification de l'arrondi : 1 873 000 est compris entre 1 850 000 et 1 950 000, donc l'arrondi au dixième de million est bien 1,9 million.",
                "Dans les fiches : les valeurs exactes (23,4 % et 1 873 000), l'organisme, l'année et le titre de l'enquête, pour répondre si le jury demande une précision.",
                "Résultat : « près d'un quart » et « près de 1,9 million » à l'oral, valeurs exactes et référence complète dans les fiches.",
              ],
            },
            {
              level: 3,
              statement: "Situation type échange avec le jury (fictive) : Nour a affirmé dans son exposé qu'« une étude de 2021 montre que 40 % des océans sont pollués par le plastique ». Elle a trouvé cette phrase dans une réponse d'IA générative, sans vérifier. Le jury lui demande : « Quelle est cette étude, et qu'entendez-vous par pollués ? » a) Expliquez ce que Nour aurait dû faire pendant sa préparation. b) Rédigez la réponse la plus honnête et la plus utile qu'elle puisse donner maintenant.",
              hint: "Pensez aux cinq questions d'évaluation d'une source et au risque de références inventées par une IA. Pour la réponse, distinguez ce qu'elle sait de ce qu'elle ne sait pas.",
              solution: [
                "a) Pendant la préparation de sa question, Nour aurait dû chercher l'étude citée (auteur, revue, date). Si elle était introuvable, la phrase devait être abandonnée : une IA générative peut produire des chiffres plausibles et des références qui n'existent pas.",
                "a) Elle aurait aussi dû définir « pollués » : présence de microplastiques détectée, concentration au-delà d'un seuil, zone d'accumulation ? Un chiffre sans définition ne veut rien dire.",
                "a) Enfin, elle aurait dû recouper avec des sources reconnues (rapports d'organismes internationaux, articles scientifiques publiés) et noter la référence exacte.",
                "b) Réponse honnête : « Je dois reconnaître que je n'ai pas vérifié l'origine précise de ce chiffre : je ne peux donc pas le garantir, et je préfère ne pas m'appuyer dessus. »",
                "b) Rebond utile : « Ce que je peux affirmer, c'est que les déchets plastiques se fragmentent en microplastiques, que les courants les concentrent dans certaines zones, et que cela pose un problème pour les organismes marins, ce qui est le cœur de ma question. »",
                "Résultat : reconnaître la limite, retirer le chiffre non vérifié, puis revenir aux connaissances solides ; c'est la seule attitude défendable, et elle montre une bonne qualité d'interaction.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : se documenter et citer ses sources.",
            statements: [
              { text: "Une encyclopédie collaborative en ligne peut servir de point de départ, à condition de remonter à ses sources.", true: true, why: "Elle oriente la recherche, mais la référence citée doit être la source d'origine." },
              { text: "Plus un exposé contient de chiffres, plus il est convaincant.", true: false, why: "Une avalanche de chiffres n'est pas retenue ; un ou deux chiffres bien choisis et sourcés suffisent." },
              { text: "Une IA générative peut citer des articles qui n'existent pas.", true: true, why: "Elle produit un texte plausible, pas forcément exact : toute référence doit être vérifiée." },
              { text: "Une source récente est toujours plus fiable qu'une source ancienne.", true: false, why: "La date compte pour les données, mais un ouvrage ancien de référence peut rester solide pour une théorie." },
              { text: "À l'oral, il vaut mieux dire « près d'un quart » que « 23,4 % ».", true: true, why: "Un chiffre arrondi se retient mieux ; la valeur exacte reste dans les fiches si le jury la demande." },
              { text: "« Des études montrent que… » est une manière suffisante de citer une source.", true: false, why: "Il faut préciser qui, quand et quoi, sinon l'affirmation n'est pas vérifiable." },
              { text: "Le professeur-documentaliste peut aider à trouver et à évaluer des sources.", true: true, why: "C'est son métier ; il peut d'ailleurs aussi être membre d'un jury de Grand oral." },
            ],
          },
          quiz: [
            {
              q: "Quelle source est la plus adaptée pour une donnée sur l'emploi en France ?",
              options: ["Un forum de discussion", "L'INSEE", "Une vidéo sponsorisée sur les métiers d'avenir", "Une réponse d'IA générative non vérifiée"],
              answer: 1,
              why: "L'INSEE est l'organisme public de statistique : ses données sont datées et sa méthode est publiée.",
            },
            {
              q: "Laquelle de ces questions ne fait pas partie de l'évaluation d'une source ?",
              options: ["Qui en est l'auteur ?", "Quand a-t-elle été publiée ?", "Est-elle recoupée par une autre source indépendante ?", "Est-elle agréable à lire ?"],
              answer: 3,
              why: "La fiabilité dépend de l'auteur, de la date, de la nature, de l'intention et du recoupement, pas du plaisir de lecture.",
            },
            {
              q: "Comment citer une donnée à l'oral ?",
              options: ["Selon la source, à telle date, avec un chiffre arrondi", "En lisant le tableau complet des données", "Sans source, pour ne pas alourdir le propos", "En donnant toutes les décimales disponibles pour paraître plus précis"],
              answer: 0,
              why: "Qui, quand, quoi, avec un chiffre arrondi que l'auditeur peut retenir.",
            },
            {
              q: "Que faire d'une information trouvée grâce à une IA générative ?",
              options: ["La citer telle quelle, car l'IA a tout lu", "La vérifier dans une source identifiée", "La garder uniquement si elle contient un chiffre", "La présenter comme une étude scientifique"],
              answer: 1,
              why: "Une IA peut se tromper ou inventer une référence : seule une source vérifiée peut être citée.",
            },
            {
              q: "Le jury demande l'origine d'un chiffre que vous ne pouvez pas justifier. Quelle réaction est la meilleure ?",
              options: ["Inventer une référence crédible", "Changer de sujet", "Reconnaître la limite et revenir à ce qui est établi", "Affirmer avec assurance que ce chiffre est connu de tous les spécialistes"],
              answer: 2,
              why: "Reconnaître une limite et revenir aux connaissances solides montre de l'honnêteté et une bonne qualité d'interaction.",
            },
          ],
          trap: "Citer un chiffre ou une étude sans pouvoir dire d'où ils viennent, souvent repris d'une IA ou d'un site non sourcé : la première question du jury suffit alors à fragiliser tout l'exposé.",
          method: "Tenez une fiche de sources : pour chaque information retenue, notez l'auteur, la date, le titre, la valeur exacte et la façon dont vous la direz à l'oral. Rien n'entre dans l'exposé sans avoir sa ligne dans la fiche.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'plan-de-l-expose',
          title: 'Construire le plan de l\'exposé',
          minutes: 30,
          objectives: [
            "Construire le plan d'un exposé de dix minutes : introduction, développement en deux ou trois parties, conclusion.",
            "Choisir un type de plan adapté à la question : explicatif, analytique, dialectique ou thématique.",
            "Répartir le temps de parole entre les différentes parties de l'exposé.",
          ],
          course: [
            {
              heading: "Partir de la réponse",
              paragraphs: [
                "Un plan n'est pas une liste de tout ce que l'on sait sur un thème : c'est le chemin qui conduit à la réponse. La méthode consiste donc à partir de la réponse, puis à remonter vers les arguments. Elle se déroule en six étapes : écrire sa réponse à la question en une ou deux phrases ; lister les arguments, exemples et données qui la justifient ; regrouper ces éléments en deux ou trois idées directrices ; ordonner ces parties selon une progression logique ; rédiger les transitions ; minuter chaque partie.",
                "Cette méthode évite le défaut le plus fréquent, le plan catalogue, où les parties se suivent sans se répondre (« I. Les causes, II. Les conséquences, III. Les solutions ») et où la question est oubliée en route. Chaque partie doit faire avancer la réponse.",
              ],
              box: { label: "Règle", text: "Réponse, arguments, regroupement, ordre, transitions, minutage : six étapes, dans cet ordre. Le plan découle de la réponse, et non l'inverse." },
            },
            {
              heading: "L'architecture d'un exposé de dix minutes",
              paragraphs: [
                "L'introduction, d'environ une minute et demie, comprend l'explication du choix de la question pendant votre formation (une phrase d'accroche peut l'ouvrir), la définition des termes clés, la question elle-même, clairement posée, et l'annonce du plan. Le jury doit savoir, au bout de deux minutes, de quoi vous allez parler et dans quel ordre.",
                "Le développement, d'environ sept minutes, comporte deux ou trois parties. Chacune repose sur une idée directrice, formulée en une phrase, puis expliquée, illustrée par un exemple ou une donnée, et close par un bref bilan. La conclusion, d'environ une minute et demie, apporte une réponse nette à la question, rappelle le chemin parcouru en une ou deux phrases et peut proposer une ouverture.",
              ],
              box: { label: "Repère", text: "Introduction 1 min 30, développement 7 min, conclusion 1 min 30 : total 10 minutes." },
            },
            {
              heading: "Quatre types de plans",
              paragraphs: [
                "Le plan explicatif convient aux questions en « pourquoi » ou « comment » : on présente le phénomène, puis le mécanisme qui l'explique, enfin ses conséquences ou les limites du modèle. Il est très fréquent en sciences. Le plan analytique décompose un problème en causes, conséquences et réponses possibles ; il est efficace s'il reste centré sur la question.",
                "Le plan dialectique convient aux questions en « dans quelle mesure » ou « peut-on » : une première partie établit ce qui justifie une réponse, une deuxième en montre les limites, une troisième dépasse l'opposition en précisant à quelles conditions la réponse vaut. Le plan thématique examine la question sous plusieurs angles (économique, social, politique) ; il risque de tourner au catalogue si les parties ne sont pas reliées.",
              ],
            },
            {
              heading: "Progression et transitions",
              paragraphs: [
                "L'ordre des parties n'est pas indifférent : on va du simple au complexe, du constat à l'explication, de l'argument le plus évident au plus fin. Une bonne progression se repère ainsi : si l'on inverse deux parties, l'exposé devient moins compréhensible.",
                "Les transitions relient les parties à voix haute : « Nous avons vu que… ; mais cela n'explique pas encore… ; voyons donc… ». Elles aident le jury à suivre et vous aident à vous repérer sans notes. Formulez vos titres de parties comme des phrases qui répondent en partie à la question : « Créer des emplois ne suffit pas à faire baisser le chômage » est plus clair que « Le chômage ».",
              ],
            },
          ],
          keyPoints: [
            "Le plan découle de la réponse : réponse, arguments, regroupement, ordre, transitions, minutage.",
            "Introduction (1 min 30) : choix de la question, termes définis, question posée, plan annoncé.",
            "Développement (7 min) : deux ou trois parties, chacune avec une idée, une explication, un exemple, un bilan.",
            "Conclusion (1 min 30) : réponse nette, bilan bref, ouverture possible.",
            "Plans explicatif, analytique, dialectique, thématique : le choisir selon la question.",
            "Des titres de parties en phrases et des transitions dites à voix haute.",
          ],
          example: {
            statement: "Construisez le plan de l'exposé pour la question de SES « Pourquoi le chômage peut-il persister alors même que l'économie crée des emplois ? », en suivant les six étapes de la méthode.",
            solution: [
              "Réponse en deux phrases : créer des emplois ne fait pas automatiquement baisser le chômage, car le nombre d'actifs évolue aussi et les emplois créés ne correspondent pas toujours aux chômeurs disponibles. Une partie du chômage est structurelle : elle tient au fonctionnement du marché du travail.",
              "Arguments et exemples : évolution de la population active ; inadéquation des qualifications ; inadéquation géographique ; asymétries d'information entre employeurs et candidats ; effets des institutions du marché du travail ; politiques de formation.",
              "Regroupement en trois idées : I. Créer des emplois ne suffit pas à faire baisser le chômage. II. Une partie du chômage vient de problèmes d'appariement entre offres et demandes de travail. III. Les institutions du marché du travail influencent ce chômage structurel, ce qui oriente les politiques publiques.",
              "Ordre : on va du constat (I) au mécanisme (II), puis au rôle des institutions et aux réponses possibles (III). C'est un plan explicatif.",
              "Transition de I à II : « Si les emplois créés ne font pas toujours baisser le chômage, c'est aussi parce qu'ils ne trouvent pas toujours preneur : pourquoi ? »",
              "Minutage : introduction 1 min 30, parties de 2 min 20 environ chacune (7 min au total), conclusion 1 min 30.",
              "Réponse : un plan explicatif en trois parties, du constat au mécanisme puis aux institutions, minuté pour dix minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le type de plan (explicatif, analytique, dialectique ou thématique) : a) « Dans quelle mesure le PIB mesure-t-il le bien-être ? » I. Un indicateur utile ; II. Des limites importantes ; III. Le compléter par d'autres indicateurs. b) « Pourquoi le ciel est-il bleu ? » I. Le phénomène observé ; II. La diffusion de la lumière par l'atmosphère ; III. Pourquoi le ciel rougit au coucher du soleil. c) « Quels effets la mondialisation a-t-elle sur la France ? » I. Effets économiques ; II. Effets sociaux ; III. Effets culturels.",
              hint: "Regardez la forme de la question et la manière dont les parties s'enchaînent : oui puis limites, phénomène puis mécanisme, ou angles successifs.",
              solution: [
                "a) Plan dialectique : une thèse (utile), ses limites, puis un dépassement (le compléter).",
                "b) Plan explicatif : le phénomène, le mécanisme (la diffusion, plus forte pour les courtes longueurs d'onde, donc le bleu), puis une application qui prolonge l'explication.",
                "c) Plan thématique : trois angles d'étude successifs ; il faudra veiller à les relier à une réponse d'ensemble.",
                "Résultat : a, dialectique ; b, explicatif ; c, thématique.",
              ],
            },
            {
              level: 2,
              statement: "Votre introduction dure 1 min 30 et votre conclusion 1 min. a) Combien de temps reste-t-il pour le développement sur dix minutes ? b) Quelle est la durée de chaque partie si le développement en compte trois, de durée égale ? Et s'il en compte deux ? c) On admet, pour l'exercice, un débit de 130 mots par minute (donnée indicative). Combien de mots représente une partie dans le cas de trois parties ?",
              hint: "Convertissez les durées en minutes décimales (1 min 30 = 1,5 min), calculez, puis reconvertissez en minutes et secondes.",
              solution: [
                "a) Développement : 10 - 1,5 - 1 = 7,5 minutes, soit 7 min 30.",
                "b) Trois parties : 7,5 ÷ 3 = 2,5 minutes, soit 2 min 30 chacune. Deux parties : 7,5 ÷ 2 = 3,75 minutes, soit 3 min 45 chacune (0,75 × 60 = 45 secondes).",
                "c) Une partie de 2,5 minutes à 130 mots par minute : 2,5 × 130 = 325 mots.",
                "Vérification : 3 × 2,5 + 1,5 + 1 = 10 minutes.",
                "Résultat : 7 min 30 de développement ; 2 min 30 par partie (ou 3 min 45 avec deux parties) ; environ 325 mots par partie.",
              ],
            },
            {
              level: 3,
              statement: "Sujet type Grand oral : construisez un plan dialectique détaillé pour la question « Dans quelle mesure l'impôt progressif permet-il de réduire les inégalités de revenus ? ». Rédigez la réponse en deux phrases, les titres des trois parties sous forme de phrases, un argument et un exemple par partie, et les deux transitions.",
              hint: "Un impôt est progressif quand son taux augmente avec le revenu. Pensez aux autres prélèvements (comme la TVA), aux transferts sociaux et aux inégalités de patrimoine.",
              solution: [
                "Réponse : l'impôt progressif réduit les écarts de revenus disponibles, car il prélève une part plus élevée des hauts revenus. Mais son effet est limité s'il est considéré seul ; il est surtout efficace au sein d'une redistribution d'ensemble.",
                "I. L'impôt progressif réduit les écarts de revenus. Argument : avec un barème par tranches à taux marginaux croissants, la part du revenu prélevée augmente avec le revenu. Exemple : l'impôt sur le revenu en France, organisé par tranches.",
                "Transition 1 : « L'impôt progressif réduit donc les écarts ; mais il n'est qu'une partie des prélèvements, ce qui limite son effet. »",
                "II. Son effet est limité. Argument : d'autres prélèvements pèsent proportionnellement plus sur les ménages modestes, qui consomment une plus grande part de leur revenu ; la TVA en est l'exemple. Par ailleurs, les possibilités d'optimisation fiscale et la faible imposition de certains patrimoines réduisent sa portée.",
                "Transition 2 : « Si l'impôt seul ne suffit pas, c'est qu'il faut le penser avec les autres instruments de la redistribution. »",
                "III. Il est efficace au sein d'une redistribution d'ensemble. Argument : la réduction des inégalités de niveau de vie résulte à la fois des prélèvements et des prestations sociales, ainsi que des services collectifs gratuits ou peu coûteux (éducation, santé). Exemple : les prestations sous condition de ressources complètent l'effet de l'impôt.",
                "Résultat : un plan dialectique (oui, mais, à quelles conditions) dont chaque partie fait avancer la réponse, relié par deux transitions explicites.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les six étapes de la méthode pour construire le plan de l'exposé.",
            items: [
              "Écrire sa réponse à la question en une ou deux phrases",
              "Lister les arguments, exemples et données qui la justifient",
              "Regrouper ces éléments en deux ou trois idées directrices",
              "Ordonner les parties selon une progression logique",
              "Rédiger les transitions entre les parties",
              "Minuter chaque partie pour tenir dix minutes",
            ],
          },
          quiz: [
            {
              q: "Par quoi commence la méthode de construction du plan ?",
              options: ["Par le choix des titres", "Par la réponse à la question", "Par la conclusion et l'ouverture", "Par le support remis au jury"],
              answer: 1,
              why: "Le plan est le chemin vers la réponse : on écrit d'abord celle-ci, puis on remonte vers les arguments.",
            },
            {
              q: "Quel type de plan convient le mieux à une question en « dans quelle mesure » ?",
              options: ["Le plan thématique", "Le plan chronologique", "Le plan dialectique", "Un plan en une seule partie"],
              answer: 2,
              why: "« Dans quelle mesure » invite à établir une réponse, à en montrer les limites, puis à préciser ses conditions.",
            },
            {
              q: "Combien de temps environ consacrer au développement dans un exposé de dix minutes ?",
              options: ["Environ 7 minutes", "Environ 3 minutes", "Environ 9 minutes et demie", "Environ 5 minutes"],
              answer: 0,
              why: "Avec une introduction et une conclusion d'environ une minute et demie chacune, il reste environ sept minutes.",
            },
            {
              q: "Qu'est-ce qu'un plan catalogue ?",
              options: ["Un plan qui annonce ses parties", "Un plan en trois parties", "Un plan dont chaque partie s'appuie sur un grand nombre d'exemples précis", "Des parties juxtaposées qui ne font pas avancer la réponse"],
              answer: 3,
              why: "Dans un plan catalogue, les parties se suivent sans se répondre et la question se perd en route.",
            },
            {
              q: "Quel titre de partie est le plus efficace à l'oral ?",
              options: ["« Le chômage »", "« Créer des emplois ne suffit pas à réduire le chômage »", "« Première partie »", "« Données et chiffres divers sur le marché du travail en France »"],
              answer: 1,
              why: "Un titre en phrase donne déjà une partie de la réponse et aide le jury à suivre la progression.",
            },
          ],
          trap: "Construire le plan avant de connaître sa réponse : on obtient un plan catalogue (causes, conséquences, solutions) qui accumule des connaissances sans jamais répondre à la question posée.",
          method: "Faites le test de l'inversion : si vous pouvez échanger deux parties sans rien perdre, votre plan ne progresse pas. Réordonnez-le jusqu'à ce que chaque partie ait besoin de la précédente.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-pour-l-oral',
          title: 'Écrire pour l\'oral sans réciter',
          minutes: 25,
          objectives: [
            "Distinguer les exigences de l'écrit et celles de l'oral.",
            "Rédiger des phrases adaptées à l'oral : courtes, structurées, explicitement reliées.",
            "Utiliser les balises du discours : annonces, transitions, récapitulations.",
            "Préparer un exposé sans le réciter, à partir d'un plan en mots-clés.",
          ],
          course: [
            {
              heading: "L'oral n'est pas un écrit lu à voix haute",
              paragraphs: [
                "Le lecteur d'un texte peut relire une phrase difficile, revenir en arrière, s'arrêter. L'auditeur, lui, ne le peut pas : chaque phrase doit être comprise au moment où elle est prononcée. Une phrase longue, riche en subordonnées et en parenthèses, parfaite à l'écrit, devient incompréhensible à l'oral, parce que l'auditeur a oublié le début avant d'en entendre la fin.",
                "Au Grand oral, l'exposé se fait sans notes : il est impossible de lire un texte. La tentation est alors de l'apprendre par cœur. C'est un piège : la récitation rend la voix monotone, un mot oublié peut faire perdre tout le fil, et le passage à l'échange, qui ne se récite pas, devient brutal. Il faut donc écrire pour préparer l'oral, mais pas pour le réciter.",
              ],
            },
            {
              heading: "Les règles d'une phrase orale",
              paragraphs: [
                "Une idée par phrase. Une construction simple : sujet, verbe, complément. Des mots concrets plutôt que des abstractions empilées. Les termes techniques sont indispensables, mais chacun est défini dès sa première apparition : « Le chômage structurel, c'est-à-dire la part du chômage qui ne dépend pas de la conjoncture, … ».",
                "Les chiffres sont arrondis et rendus parlants par une comparaison : « près d'un quart, soit une personne sur quatre ». Les connecteurs logiques sont dits explicitement (d'abord, en effet, pourtant, c'est pourquoi, en revanche), car le jury n'a pas sous les yeux la mise en page qui, à l'écrit, signale les articulations. Enfin, une répétition qui serait maladroite à l'écrit peut être utile à l'oral pour souligner une idée clé.",
              ],
              box: { label: "Règle", text: "À l'oral : une idée par phrase, une construction simple, des termes définis, des chiffres arrondis et comparés, des connecteurs prononcés." },
            },
            {
              heading: "Les balises du discours",
              paragraphs: [
                "Un exposé oral se repère grâce à des balises : l'annonce (« Je montrerai d'abord…, puis… »), la transition (« Nous avons vu que… ; voyons maintenant… ») et la récapitulation (« Retenons donc deux idées… »). On résume souvent ce principe par une formule : dire ce que l'on va dire, le dire, puis dire ce que l'on a dit.",
                "Ces balises ne sont pas des répétitions inutiles : elles permettent au jury de savoir à tout moment où vous en êtes, et elles vous servent de repères sans notes. Une question rhétorique peut aussi relancer l'attention au début d'une partie : « Mais alors, pourquoi ce chômage persiste-t-il ? »",
              ],
            },
            {
              heading: "Préparer sans réciter",
              paragraphs: [
                "Quelques phrases méritent d'être rédigées et sues presque mot pour mot : la première phrase de l'exposé, la question elle-même, les définitions clés et la dernière phrase de la conclusion. Elles assurent un départ et une arrivée solides. Pour tout le reste, préparez un plan en mots-clés : une ligne par idée, quelques mots par ligne, les exemples et chiffres notés en bref.",
                "Répétez ensuite à voix haute à partir de ce plan, en reformulant librement à chaque fois. Au bout de quelques répétitions, le raisonnement est mémorisé, mais pas les phrases : vous pouvez alors parler avec naturel. Si un mot vous échappe le jour de l'épreuve, il suffit de le remplacer par un autre, puisque vous suivez des idées et non un texte.",
              ],
              box: { label: "À retenir", text: "Apprendre par cœur : la première phrase, la question, les définitions clés, la dernière phrase. Tout le reste : retenir les idées, pas les mots." },
            },
          ],
          keyPoints: [
            "L'auditeur ne peut pas relire : chaque phrase doit être comprise immédiatement.",
            "Une idée par phrase, une construction simple, des termes techniques définis.",
            "Chiffres arrondis et comparés ; connecteurs logiques prononcés à voix haute.",
            "Balises : annonce, transition, récapitulation (dire ce que l'on va dire, le dire, dire ce que l'on a dit).",
            "Ne réciter ni tout un texte ni des paragraphes entiers : la récitation rend monotone et fragile.",
            "Savoir par cœur la première phrase, la question, les définitions clés et la dernière phrase seulement.",
          ],
          example: {
            statement: "Réécrivez pour l'oral cette phrase écrite : « La résistance aux antibiotiques, phénomène dont l'ampleur, selon de nombreuses institutions sanitaires qui s'en inquiètent, ne cesse de croître, résulte, pour l'essentiel, de la sélection, par l'usage répété et parfois inapproprié de ces molécules, de bactéries porteuses de mutations qui leur permettent de survivre. »",
            solution: [
              "Repérer les idées : la résistance augmente ; les institutions sanitaires s'en inquiètent ; elle vient d'une sélection ; cette sélection est causée par l'usage répété des antibiotiques ; certaines bactéries portent des mutations qui les font survivre.",
              "Une idée par phrase : « La résistance aux antibiotiques progresse. Les institutions sanitaires s'en inquiètent. »",
              "Expliquer le mécanisme pas à pas : « Pourquoi cette progression ? Parmi les bactéries, certaines portent, par hasard, une mutation qui leur permet de survivre à un antibiotique. »",
              "Relier par un connecteur : « Quand on utilise souvent un antibiotique, il élimine les bactéries sensibles. Les bactéries résistantes, elles, survivent et se multiplient. »",
              "Conclure en nommant la notion : « C'est ce qu'on appelle une sélection naturelle : l'antibiotique ne crée pas la résistance, il la sélectionne. »",
              "Réponse : une phrase de plus de quarante mots devient sept phrases courtes, dont une question rhétorique, reliées par des connecteurs, avec une formule finale facile à retenir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque paire, dites quelle phrase est la mieux adaptée à l'oral et pourquoi : a) « Le PIB, indicateur qui, bien qu'imparfait, demeure central, mesure la production. » / « Le PIB mesure la production. Il est imparfait, mais il reste central. » b) « On observe une hausse de 23,7 %. » / « On observe une hausse de près d'un quart. » c) « Deuxièmement. » / « Nous avons vu pourquoi le chômage persiste ; voyons maintenant comment le réduire. »",
              hint: "Demandez-vous à chaque fois si l'auditeur peut comprendre la phrase du premier coup et savoir où il en est dans l'exposé.",
              solution: [
                "a) La seconde : deux phrases courtes, une idée chacune, au lieu d'une phrase coupée par une incise.",
                "b) La seconde : le chiffre arrondi et comparé à une fraction simple se retient ; 23,7 % est proche de 25 %, d'où « près d'un quart ».",
                "c) La seconde : c'est une transition complète qui récapitule et annonce, alors que « Deuxièmement » ne dit pas de quoi l'on parle.",
                "Résultat : dans les trois cas, la seconde phrase est la mieux adaptée à l'oral.",
              ],
            },
            {
              level: 2,
              statement: "Un candidat a rédigé un texte de 1 900 mots pour son exposé. On admet, pour l'exercice, un débit de 130 mots par minute (donnée indicative). a) Combien de temps durerait ce texte à l'oral ? b) Combien de mots au maximum faut-il pour tenir en 10 minutes ? c) Quel pourcentage du texte faut-il supprimer ? d) Pourquoi cette méthode (rédiger tout le texte puis le couper) reste-t-elle risquée ?",
              hint: "Durée = nombre de mots ÷ débit. Pourcentage supprimé = mots à supprimer ÷ mots initiaux × 100.",
              solution: [
                "a) 1 900 ÷ 130 ≈ 14,6 minutes, soit environ 14 min 37 s : bien au-delà des dix minutes.",
                "b) 10 × 130 = 1 300 mots au maximum.",
                "c) Mots à supprimer : 1 900 - 1 300 = 600. Pourcentage : 600 ÷ 1 900 × 100 ≈ 31,6 %, soit près d'un tiers du texte.",
                "d) Un texte entièrement rédigé pousse à la récitation, alors que l'exposé se fait sans notes ; mieux vaut partir d'un plan en mots-clés et répéter à voix haute en chronométrant.",
                "Résultat : environ 14 min 37 s ; 1 300 mots maximum ; environ 31,6 % à supprimer ; et préférer un plan en mots-clés à un texte intégral.",
              ],
            },
            {
              level: 3,
              statement: "Situation type Grand oral : voici les notes rédigées d'une partie d'exposé sur la question « Pourquoi l'intermittence de l'éolien et du solaire oblige-t-elle à développer le stockage de l'énergie électrique ? » : « La production d'électricité d'origine éolienne et photovoltaïque, dépendante de conditions météorologiques par nature variables et imparfaitement prévisibles, ne coïncide pas nécessairement avec les pics de consommation, lesquels surviennent notamment en soirée, ce qui impose, puisque le réseau doit à chaque instant équilibrer production et consommation, de disposer de moyens de stockage ou de production pilotables. » a) Transformez ces notes en plan de mots-clés (quatre lignes au plus). b) Rédigez la partie telle qu'elle pourrait être dite (cinq à sept phrases courtes), avec une transition d'entrée. c) Expliquez comment réagir si l'on oublie un mot pendant l'exposé.",
              hint: "Repérez les trois idées : la production varie, la consommation suit un autre rythme, le réseau doit être équilibré à chaque instant. Le stockage en découle.",
              solution: [
                "a) Plan en mots-clés : 1. Production variable (vent, soleil, météo). 2. Consommation : autre rythme (pic du soir, soleil couché). 3. Réseau : équilibre production = consommation à chaque instant. 4. Donc : stocker ou produire à la demande.",
                "b) Transition : « Nous avons vu comment fonctionnent les éoliennes et les panneaux solaires ; voyons maintenant pourquoi leur production pose un problème. »",
                "b) Partie dite : « Une éolienne ne produit que s'il y a du vent. Un panneau solaire ne produit que s'il y a du soleil. Or nous consommons beaucoup d'électricité le soir, quand le soleil est couché. Le problème, c'est que le réseau électrique doit, à chaque instant, produire exactement ce que l'on consomme. Il faut donc pouvoir mettre de l'énergie de côté quand on en produit trop, et la restituer quand on en manque : c'est le rôle du stockage. »",
                "c) Si un mot échappe : ne pas s'arrêter ni s'excuser longuement, le remplacer par une périphrase (« ce qu'on peut piloter à la demande ») et poursuivre, puisque l'on suit les idées du plan et non un texte.",
                "Résultat : quatre lignes de mots-clés, une partie orale en phrases courtes reliées par des connecteurs (or, donc), une transition explicite, et une stratégie de reformulation en cas d'oubli.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque défaut d'écriture à la correction qui le rend adapté à l'oral.",
            pairs: [
              { left: "Une phrase de plus de quarante mots", right: "La couper en deux ou trois phrases courtes" },
              { left: "Un terme technique jamais expliqué", right: "Le définir dès sa première apparition" },
              { left: "Un chiffre précis à la décimale près", right: "L'arrondir et le comparer à une fraction simple" },
              { left: "Un passage brusque d'une partie à l'autre", right: "Une transition qui récapitule puis annonce" },
              { left: "Un texte rédigé à apprendre par cœur", right: "Un plan en mots-clés, répété à voix haute" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi une phrase longue passe-t-elle mal à l'oral ?",
              options: ["Parce qu'elle contient trop de mots savants", "Parce que l'auditeur ne peut pas la relire", "Parce qu'elle est interdite par le règlement de l'épreuve", "Parce qu'elle prend trop de temps à écrire"],
              answer: 1,
              why: "L'auditeur doit comprendre au fil de la parole : il oublie le début d'une phrase trop longue avant d'en entendre la fin.",
            },
            {
              q: "Que vaut-il mieux savoir presque mot pour mot ?",
              options: ["Tout l'exposé", "Aucune phrase", "Les exemples chiffrés avec toutes leurs décimales, pour impressionner le jury", "La première phrase, la question et la dernière phrase"],
              answer: 3,
              why: "Ces phrases assurent un départ et une arrivée solides ; le reste se retient sous forme d'idées.",
            },
            {
              q: "Quel est le rôle d'une transition ?",
              options: ["Récapituler et annoncer la suite", "Combler un silence", "Remplacer la conclusion", "Ajouter un exemple supplémentaire"],
              answer: 0,
              why: "La transition indique au jury ce qui a été montré et ce qui va suivre ; elle sert aussi de repère au candidat.",
            },
            {
              q: "Quel est le principal risque d'un exposé appris par cœur ?",
              options: ["Il dure toujours beaucoup plus longtemps que les dix minutes prévues", "Il contient forcément des erreurs", "Il devient monotone et un oubli peut faire perdre le fil", "Il est refusé par le jury"],
              answer: 2,
              why: "La récitation aplatit la voix et rend fragile : un mot oublié peut bloquer toute la suite.",
            },
            {
              q: "Comment rendre un chiffre parlant à l'oral ?",
              options: ["Le donner avec deux décimales", "L'arrondir et le comparer à une fraction simple", "Le répéter trois fois de suite", "L'écrire sur le support remis au jury sans jamais le prononcer"],
              answer: 1,
              why: "« Près d'un quart, soit une personne sur quatre » se comprend et se retient mieux que « 23,7 % ».",
            },
          ],
          trap: "Rédiger tout l'exposé comme une dissertation puis l'apprendre par cœur : la voix devient monotone, le moindre oubli fait perdre le fil, et l'échange, qui ne se récite pas, révèle le décalage.",
          method: "Répétez votre exposé trois fois de suite à partir du seul plan en mots-clés, en vous interdisant de reprendre les mêmes phrases d'une fois sur l'autre : si vous y parvenez, vous avez mémorisé le raisonnement et non un texte.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES VINGT MINUTES DE PRÉPARATION                                      */
    /* ==================================================================== */
    {
      id: 'temps-de-preparation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'organiser-la-preparation',
          title: 'Organiser ses vingt minutes de préparation',
          minutes: 25,
          objectives: [
            "Organiser les vingt minutes de préparation en étapes minutées.",
            "Réactiver une question préparée pendant l'année : retrouver la réponse, reconstituer le plan, fixer l'introduction et la conclusion.",
            "Gérer un imprévu pendant la préparation : oubli, plan à réorganiser, temps qui manque.",
          ],
          course: [
            {
              heading: "À quoi servent les vingt minutes",
              paragraphs: [
                "Une fois la question choisie par le jury, vous disposez de vingt minutes pour mettre en ordre vos idées et réaliser, si vous le souhaitez, un support qui sera remis au jury. Ce temps ne sert pas à découvrir la question : vous l'avez travaillée pendant l'année. Il sert à réactiver ce que vous savez, à fixer la structure de l'exposé et à vous mettre en condition.",
                "Les notes que vous prenez pendant la préparation restent un brouillon : l'exposé se fait sans notes, et seul le support éventuel est remis au jury. Inutile donc de rédiger un texte complet. Ce qui compte, c'est d'avoir en tête, au moment de vous lever, une réponse claire, un plan solide, une première phrase et une dernière phrase.",
              ],
            },
            {
              heading: "Un découpage minuté en cinq étapes",
              paragraphs: [
                "De 0 à 2 minutes : relire la question choisie et écrire sa réponse en une ou deux phrases. Tout le reste en découle. De 2 à 8 minutes : reconstituer le plan détaillé en mots-clés (les parties, les arguments, les exemples, les chiffres et leurs sources).",
                "De 8 à 12 minutes : fixer l'introduction (la première phrase, les raisons du choix de la question, les définitions, la question, l'annonce du plan) et la dernière phrase de la conclusion. De 12 à 17 minutes : réaliser le support à remettre au jury. De 17 à 20 minutes : relire mentalement le plan, respirer calmement et se préparer à prendre la parole ; si le temps le permet, noter deux questions que le jury pourrait poser.",
              ],
              box: { label: "Repère", text: "0-2 min : la réponse. 2-8 min : le plan en mots-clés. 8-12 min : l'introduction et la dernière phrase. 12-17 min : le support. 17-20 min : relecture mentale et mise en condition." },
            },
            {
              heading: "Les erreurs qui font perdre le temps de préparation",
              paragraphs: [
                "Rédiger tout l'exposé : vingt minutes ne suffisent pas, et le texte ne pourra pas être lu. Commencer à écrire sans avoir fixé la réponse : on accumule des idées sans fil directeur. Passer quinze minutes sur un support soigné : il n'est pas évalué, alors que le plan et l'introduction conditionnent tout l'exposé.",
                "Autre erreur : se laisser déstabiliser par la question retenue (« Ce n'est pas celle que je préférais »). Vous avez préparé les deux ; la question choisie est simplement celle que vous allez réussir. Il faut aussi éviter de modifier en profondeur, dans l'urgence, un plan travaillé et répété pendant des semaines : ajustez-le, ne le reconstruisez pas.",
              ],
            },
            {
              heading: "Gérer un imprévu",
              paragraphs: [
                "Un oubli sur une partie ? Repartez de la réponse : quels arguments faut-il pour la justifier ? Le raisonnement retrouve souvent ce que la mémoire a perdu. Un chiffre oublié ? Donnez un ordre de grandeur en le présentant comme tel, ou passez-vous-en : ne l'inventez jamais.",
                "Le temps manque ? Respectez l'ordre des priorités : la réponse, puis le plan, puis l'introduction et la dernière phrase, et seulement ensuite le support, qui est facultatif. Le stress monte ? Quelques respirations lentes, avec une expiration plus longue que l'inspiration, aident à retrouver un rythme calme avant de vous lever.",
              ],
              box: { label: "À retenir", text: "Ordre des priorités : la réponse, le plan, l'introduction et la dernière phrase, puis le support. Un support absent ne coûte rien ; un plan absent coûte beaucoup." },
            },
          ],
          keyPoints: [
            "Les vingt minutes servent à réactiver une question travaillée toute l'année, pas à la découvrir.",
            "Les notes de préparation restent un brouillon : l'exposé se fait sans notes, seul le support est remis.",
            "Découpage : réponse (2 min), plan en mots-clés (6 min), introduction et dernière phrase (4 min), support (5 min), relecture (3 min).",
            "Ne pas rédiger tout l'exposé ; ne pas consacrer l'essentiel du temps au support.",
            "En cas d'imprévu : repartir de la réponse, ne jamais inventer un chiffre, respecter l'ordre des priorités.",
          ],
          example: {
            statement: "Après quatorze minutes de préparation, Emma a reconstitué son plan en mots-clés, mais elle n'a fixé ni son introduction ni sa dernière phrase, et elle n'a pas commencé son support. Il lui reste six minutes. Que doit-elle faire, et dans quel ordre ?",
            solution: [
              "Appliquer l'ordre des priorités : la réponse et le plan sont prêts ; viennent ensuite l'introduction et la dernière phrase, puis le support.",
              "De la 14e à la 17e minute : fixer la première phrase, les raisons du choix, la question et l'annonce du plan, puis la dernière phrase de la conclusion.",
              "De la 17e à la 19e minute : réaliser un support simple (la question et les titres des parties, ou un seul schéma), sans chercher à faire beau.",
              "Dernière minute : relire mentalement le plan, respirer, se lever calmement.",
              "Réponse : introduction et dernière phrase d'abord (environ trois minutes), support minimal ensuite (environ deux minutes), une minute de relecture ; un support simple suffit, puisqu'il n'est pas évalué.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le découpage proposé dans le cours attribue 2 minutes à la réponse, 6 minutes au plan, 4 minutes à l'introduction et à la dernière phrase, 5 minutes au support et 3 minutes à la relecture. a) Vérifiez que le total fait bien 20 minutes. b) Calculez la part (en %) de chaque étape. c) Quelle part du temps est consacrée au contenu de l'exposé (réponse, plan, introduction et conclusion) ?",
              hint: "Part d'une étape = durée de l'étape ÷ 20 × 100.",
              solution: [
                "a) 2 + 6 + 4 + 5 + 3 = 20 minutes.",
                "b) Réponse : 2 ÷ 20 × 100 = 10 %. Plan : 6 ÷ 20 × 100 = 30 %. Introduction et dernière phrase : 4 ÷ 20 × 100 = 20 %. Support : 5 ÷ 20 × 100 = 25 %. Relecture : 3 ÷ 20 × 100 = 15 %.",
                "Vérification : 10 + 30 + 20 + 25 + 15 = 100 %.",
                "c) Contenu de l'exposé : 10 + 30 + 20 = 60 % du temps, soit 12 minutes.",
                "Résultat : total de 20 minutes ; 10 %, 30 %, 20 %, 25 % et 15 % ; 60 % du temps (12 minutes) pour le contenu, contre 25 % pour le support.",
              ],
            },
            {
              level: 2,
              statement: "Lors d'un oral blanc, Bastien a passé ses vingt minutes ainsi : 15 minutes à rédiger intégralement son exposé, phrase après phrase, puis 5 minutes à réaliser un support très détaillé. Arrivé devant le jury, il a perdu le fil au bout de trois minutes. Identifiez trois erreurs d'organisation et proposez-lui un découpage corrigé.",
              hint: "Pensez à ce qui se passe quand on ne peut pas lire son texte, et à ce qui manque pour retrouver le fil sans notes.",
              solution: [
                "Première erreur : rédiger tout l'exposé. L'exposé se fait sans notes ; le texte rédigé ne peut pas servir, et il pousse à réciter.",
                "Deuxième erreur : ne pas commencer par la réponse et le plan. Sans structure claire en tête, il n'a aucun repère pour retrouver le fil quand une phrase lui échappe.",
                "Troisième erreur : un support très détaillé, réalisé en dernier, sans temps de relecture mentale ni de mise en condition.",
                "Découpage corrigé : 0-2 min, la réponse en deux phrases ; 2-8 min, le plan en mots-clés ; 8-12 min, l'introduction et la dernière phrase ; 12-17 min, un support simple ; 17-20 min, relecture mentale et respiration.",
                "Résultat : passer d'un texte à réciter à une structure à suivre ; c'est la structure qui permet de retrouver le fil.",
              ],
            },
            {
              level: 3,
              statement: "Situation type Grand oral : le jury a retenu la question de physique-chimie « Pourquoi un satellite géostationnaire paraît-il immobile depuis le sol ? ». Produisez ce que le candidat doit avoir écrit au terme de ses vingt minutes : a) la réponse en deux phrases ; b) le plan en mots-clés (trois parties) ; c) la première phrase de l'exposé ; d) la dernière phrase de la conclusion. Données : rayon de l'orbite géostationnaire r ≈ 42 200 km (mesuré depuis le centre de la Terre) ; rayon terrestre R ≈ 6 400 km ; période de rotation de la Terre sur elle-même ≈ 23 h 56 min.",
              hint: "Distinguez le référentiel terrestre et le référentiel géocentrique, puis rappelez que, pour une orbite circulaire, la période impose le rayon (troisième loi de Kepler : T² / r³ est constant pour tous les satellites de la Terre).",
              solution: [
                "a) Réponse : le satellite tourne autour de la Terre dans le même sens qu'elle, dans le plan de l'équateur, en exactement le temps qu'elle met à tourner sur elle-même. Il reste donc à la verticale du même point du sol : immobile dans le référentiel terrestre, il est en mouvement dans le référentiel géocentrique.",
                "b) Plan en mots-clés. I. Immobile ou en mouvement ? Référentiel terrestre / géocentrique ; relativité du mouvement. II. Ce qui fait tourner le satellite : gravitation, mouvement circulaire uniforme, v = √(GM/r), T = 2π √(r³/GM). III. Les trois conditions : période ≈ 23 h 56 min, plan équatorial, même sens ; d'où une seule orbite possible (Kepler : la période impose le rayon). Applications : télévision par satellite, antennes fixes.",
                "Calcul de vérification pour la partie III : altitude = r - R ≈ 42 200 - 6 400 = 35 800 km, soit environ 36 000 km au-dessus du sol.",
                "c) Première phrase : « Les antennes paraboliques sur nos toits restent fixes, et pourtant le satellite qu'elles visent file à plus de 3 km par seconde : comment est-ce possible ? »",
                "Vérification du chiffre de la première phrase : v = 2πr ÷ T ≈ 2 × 3,14 × 42 200 km ÷ 86 160 s ≈ 265 000 ÷ 86 160 ≈ 3,1 km/s (23 h 56 min = 86 160 s).",
                "d) Dernière phrase : « Le satellite géostationnaire n'est donc pas immobile : il tourne exactement au rythme de la Terre, et c'est cet accord parfait entre deux mouvements qui le fait paraître arrêté dans notre ciel. »",
                "Résultat : une réponse en deux phrases, un plan explicatif en trois parties, une accroche chiffrée vérifiée et une conclusion qui répond nettement à la question.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les cinq étapes d'une préparation de vingt minutes bien organisée.",
            items: [
              "Relire la question choisie et écrire sa réponse en une ou deux phrases",
              "Reconstituer le plan détaillé en mots-clés",
              "Fixer l'introduction et la dernière phrase de la conclusion",
              "Réaliser le support à remettre au jury",
              "Relire mentalement le plan et se préparer à prendre la parole",
            ],
          },
          quiz: [
            {
              q: "Par quoi commencer la préparation ?",
              options: ["Par le support", "Par l'écriture de la réponse en une ou deux phrases", "Par la rédaction complète de l'introduction", "Par la liste complète des questions que le jury pourrait éventuellement poser"],
              answer: 1,
              why: "La réponse est le fil directeur : le plan, l'introduction et la conclusion en découlent.",
            },
            {
              q: "Pourquoi est-il inutile de rédiger tout l'exposé pendant la préparation ?",
              options: ["Parce que le jury le note à part", "Parce que le texte doit être remis au jury", "Parce que l'exposé se fait sans notes", "Parce que la préparation ne dure que dix minutes"],
              answer: 2,
              why: "Le texte ne pourra pas être lu : seule la structure mémorisée servira pendant l'exposé.",
            },
            {
              q: "Il vous reste trois minutes et vous n'avez ni introduction ni support. Que privilégier ?",
              options: ["L'introduction", "Le support", "Une liste de chiffres", "La relecture du sujet"],
              answer: 0,
              why: "Le support est facultatif et non évalué ; l'introduction conditionne l'entrée dans l'exposé.",
            },
            {
              q: "Vous avez oublié un chiffre pendant la préparation. Que faire ?",
              options: ["En inventer un plausible", "Abandonner entièrement la partie de l'exposé dans laquelle ce chiffre figurait", "Demander au jury de le rappeler", "Donner un ordre de grandeur présenté comme tel, ou s'en passer"],
              answer: 3,
              why: "Un chiffre ne s'invente jamais : on donne un ordre de grandeur honnête ou l'on argumente sans lui.",
            },
            {
              q: "Combien de temps le découpage du cours consacre-t-il au support ?",
              options: ["15 minutes", "2 minutes", "5 minutes", "La totalité du temps restant"],
              answer: 2,
              why: "Environ 5 minutes, entre la 12e et la 17e minute : le support est utile, mais il ne doit pas absorber le temps du plan.",
            },
          ],
          trap: "Passer la majeure partie des vingt minutes à rédiger un texte ou à soigner le support, puis se lever sans réponse claire ni plan mémorisé : c'est la structure, pas le brouillon, qui permet de parler dix minutes sans notes.",
          method: "Entraînez-vous chez vous avec un minuteur réglé sur 20 minutes et une sonnerie à 2, 8, 12 et 17 minutes : au bout de quelques séances, le découpage devient un réflexe, et le jour J vous n'aurez plus à y penser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'support-pour-le-jury',
          title: 'Concevoir le support remis au jury',
          minutes: 25,
          objectives: [
            "Identifier le statut du support : facultatif, réalisé pendant la préparation, remis au jury, non évalué.",
            "Concevoir un support utile et lisible : plan, schéma, graphique simple ou formule clé.",
            "Utiliser le support pendant l'exposé en y renvoyant, sans le lire.",
          ],
          course: [
            {
              heading: "Le statut du support",
              paragraphs: [
                "Le support est facultatif. Vous le réalisez pendant les vingt minutes de préparation, sur les feuilles fournies, et vous le remettez au jury. Il ne fait pas l'objet d'une évaluation : un support superbe n'apporte aucun point, un support absent n'en retire aucun. Il ne remplace pas non plus les notes : l'exposé se fait sans notes, et le support est entre les mains du jury, pas entre les vôtres.",
                "Pourquoi en faire un, alors ? Parce qu'il peut rendre votre exposé plus clair. Certaines choses se comprennent mal à l'oral seul : un schéma de mécanisme, une courbe, une formule, une carte, une comparaison en tableau. Les montrer aide le jury, en particulier le membre qui n'est pas spécialiste de votre question.",
              ],
              box: { label: "Définition", text: "Le support est un document facultatif, réalisé pendant la préparation et remis au jury, qui aide à suivre l'exposé (plan, schéma, graphique, formule). Il n'est pas évalué." },
            },
            {
              heading: "Ce qui rend un support utile",
              paragraphs: [
                "Un bon support tient sur une page, se lit en quelques secondes et apporte ce que la parole ne peut pas donner seule. Selon la question, il peut présenter : la question et les titres des parties, pour que le jury suive la progression ; un schéma de mécanisme (une chaîne de transmission, un cycle, un circuit) ; un graphique simple tracé à main levée, avec des axes nommés et une tendance claire ; une formule clé, avec la signification de chaque lettre ; une carte schématique.",
                "À éviter : un texte rédigé (le jury ne lit pas pendant que vous parlez, et ce n'est pas le rôle du support), une accumulation d'éléments, une écriture illisible, ou une information que vous seriez incapable d'expliquer. Tout ce qui figure sur le support peut en effet servir de point de départ à une question du jury pendant l'échange.",
              ],
              box: { label: "Règle", text: "Une page, lisible, aérée : la question et le plan, ou un schéma, un graphique, une formule. Rien que vous ne sachiez expliquer, car tout ce qui y figure peut faire l'objet d'une question." },
            },
            {
              heading: "Utiliser le support pendant l'exposé",
              paragraphs: [
                "Remettez le support au jury au début de l'exposé et présentez-le en une phrase : « Je vous ai remis un schéma qui résume le mécanisme dont je vais parler. » Pendant l'exposé, renvoyez-y au moment utile, à voix haute : « Comme le montre la courbe que je vous ai remise, … ». Le jury sait alors où regarder.",
                "Ne commentez pas le support ligne à ligne, et ne vous interrompez pas pour le décrire longuement : c'est votre parole qui mène l'exposé, le support l'illustre. Gardez le regard vers le jury, et non vers la feuille. Enfin, anticipez : si vous avez écrit une formule, préparez-vous à expliquer d'où elle vient et ce qu'elle signifie.",
              ],
            },
          ],
          keyPoints: [
            "Le support est facultatif, réalisé pendant la préparation, remis au jury et non évalué.",
            "Il ne remplace pas les notes : l'exposé se fait sans notes.",
            "Il sert à montrer ce que la parole explique mal : schéma, graphique, formule, carte, plan.",
            "Une page lisible et aérée, sans texte rédigé.",
            "Tout ce qui figure sur le support peut donner lieu à une question du jury.",
            "Pendant l'exposé : présenter le support en une phrase, puis y renvoyer au bon moment sans le lire.",
          ],
          example: {
            statement: "Concevez le support pour la question « Pourquoi la vaccination d'une partie de la population protège-t-elle aussi les personnes non vaccinées ? », et rédigez les deux phrases de l'exposé qui y renvoient.",
            solution: [
              "Choisir ce que la parole explique mal : la propagation d'une maladie de personne à personne se comprend beaucoup mieux sur un schéma.",
              "En haut de la page : la question, écrite lisiblement.",
              "Au centre : deux schémas côte à côte. À gauche, une population sans vaccination : une personne malade en contamine plusieurs, qui en contaminent d'autres (chaîne qui s'étend). À droite, la même population avec une majorité de personnes vaccinées, représentées par un symbole différent : les chaînes de transmission sont interrompues, et les personnes non vaccinées entourées de vaccinées ne sont pas atteintes.",
              "En bas : les deux notions clés, « chaîne de transmission » et « immunité collective », et une légende des symboles.",
              "Phrase de présentation : « Je vous ai remis deux schémas qui comparent la propagation d'une maladie dans une population sans vaccination et dans une population largement vaccinée. »",
              "Phrase de renvoi : « Regardez le schéma de droite : les personnes vaccinées interrompent les chaînes de transmission, si bien que le virus n'atteint plus les personnes non vaccinées qui les entourent. »",
              "Réponse : un support d'une page, centré sur deux schémas comparatifs légendés, présenté puis utilisé au moment où il éclaire le raisonnement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces éléments, lesquels ont leur place sur un support de Grand oral ? Justifiez. a) La question. b) Le texte complet de l'introduction. c) Les titres des parties. d) Un schéma légendé du mécanisme étudié. e) Douze chiffres différents. f) Une formule dont vous ne savez pas expliquer l'origine.",
              hint: "Gardez ce qui aide le jury à suivre ou à voir ce que la parole explique mal ; écartez ce qui se lit comme un texte ou ce que vous ne pourriez pas défendre.",
              solution: [
                "a) Oui : elle situe immédiatement le jury.",
                "b) Non : un texte rédigé n'est pas le rôle du support, et le jury ne lit pas pendant que vous parlez.",
                "c) Oui : ils permettent de suivre la progression de l'exposé.",
                "d) Oui : c'est l'usage le plus utile, montrer ce que la parole explique mal.",
                "e) Non : une accumulation de chiffres rend le support illisible ; un ou deux chiffres clés suffisent.",
                "f) Non : tout ce qui figure sur le support peut faire l'objet d'une question, et vous ne pourriez pas l'expliquer.",
                "Résultat : garder a, c et d ; écarter b, e et f.",
              ],
            },
            {
              level: 2,
              statement: "Pour illustrer l'immunité collective, une candidate veut écrire sur son support la formule d'un modèle simplifié : seuil d'immunité collective = 1 - 1/R₀, où R₀ est le nombre moyen de personnes qu'un malade contamine dans une population sans aucune immunité. a) Calculez le seuil pour R₀ = 2, R₀ = 4 et R₀ = 5 (valeurs fictives). b) Que montre la comparaison de ces résultats ? c) Proposez une manière simple de présenter ces résultats sur le support.",
              hint: "Calculez 1/R₀, retirez-le de 1, puis exprimez le résultat en pourcentage.",
              solution: [
                "a) R₀ = 2 : 1 - 1/2 = 1 - 0,5 = 0,5, soit 50 %. R₀ = 4 : 1 - 1/4 = 1 - 0,25 = 0,75, soit 75 %. R₀ = 5 : 1 - 1/5 = 1 - 0,2 = 0,8, soit 80 %.",
                "b) Plus une maladie est contagieuse (R₀ élevé), plus la part de la population à immuniser pour interrompre la propagation est grande.",
                "c) Un petit tableau à deux lignes (R₀ : 2, 4, 5 ; seuil : 50 %, 75 %, 80 %) sous la formule, avec la définition de R₀ en une ligne.",
                "Précaution : la candidate doit pouvoir expliquer d'où vient la formule et préciser qu'il s'agit d'un modèle simplifié, car le jury peut l'interroger dessus.",
                "Résultat : 50 %, 75 % et 80 % ; le seuil augmente avec la contagiosité ; un tableau court et légendé suffit.",
              ],
            },
            {
              level: 3,
              statement: "Situation type Grand oral : pour la question « Pourquoi un satellite géostationnaire paraît-il immobile depuis le sol ? », vous disposez de cinq minutes pour réaliser votre support. a) Décrivez précisément son contenu et sa disposition sur la page. b) Rédigez les deux phrases de l'exposé qui y renvoient. c) Anticipez une question que le jury pourrait poser à partir de ce support, et rédigez votre réponse. Données : altitude ≈ 36 000 km ; période ≈ 23 h 56 min.",
              hint: "Le mouvement d'un satellite et la rotation de la Terre se montrent mieux qu'ils ne se décrivent : vue du dessus du pôle Nord, deux flèches de rotation dans le même sens. Pensez à ce que le jury pourrait demander sur ce qui figure sur le schéma.",
              solution: [
                "a) En haut : la question. Au centre : un schéma vu du dessus du pôle Nord, la Terre au centre avec une flèche indiquant son sens de rotation, l'orbite circulaire dans le plan de l'équateur, le satellite placé au-dessus d'un point P du sol, et une flèche indiquant le même sens de rotation. Un second dessin, quelques heures plus tard, montre que le satellite et le point P ont tourné du même angle.",
                "a) En bas : les trois conditions (période ≈ 23 h 56 min, plan équatorial, même sens que la Terre) et la mention « altitude ≈ 36 000 km ».",
                "b) Présentation : « Je vous ai remis un schéma vu du dessus du pôle Nord, qui montre la Terre et l'orbite du satellite. »",
                "b) Renvoi : « Comparez les deux dessins : en quelques heures, le point P et le satellite ont tourné du même angle ; vu depuis P, le satellite n'a donc pas bougé. »",
                "c) Question probable : « Pourquoi l'orbite doit-elle être dans le plan de l'équateur ? » Réponse : « Le centre de l'orbite est forcément le centre de la Terre. Si l'orbite était inclinée, le satellite passerait alternativement au nord et au sud de l'équateur : vu du sol, il oscillerait au lieu de rester fixe. Seule une orbite équatoriale permet de rester à la verticale du même point. »",
                "Résultat : un support d'une page, centré sur un schéma comparatif légendé et les trois conditions, deux phrases de renvoi, et une question anticipée avec sa réponse argumentée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le support remis au jury.",
            statements: [
              { text: "Le support est noté par le jury.", true: false, why: "Il ne fait pas l'objet d'une évaluation : il n'apporte ni ne retire de points." },
              { text: "Le support est facultatif.", true: true, why: "Le candidat réalise un support s'il le souhaite ; il peut s'en passer." },
              { text: "Le candidat peut lire son support pendant l'exposé.", true: false, why: "L'exposé se fait sans notes ; le support est remis au jury, il ne sert pas d'aide-mémoire." },
              { text: "Un schéma est souvent plus utile sur le support qu'un paragraphe rédigé.", true: true, why: "Le support sert à montrer ce que la parole explique mal ; un texte n'apporte rien de plus que la parole." },
              { text: "Ce qui figure sur le support peut donner lieu à une question du jury.", true: true, why: "Le jury l'a sous les yeux : une formule ou un schéma peut ouvrir l'échange." },
              { text: "Il vaut mieux consacrer la majeure partie des vingt minutes au support.", true: false, why: "La réponse, le plan et l'introduction passent avant : le support n'est pas évalué." },
              { text: "Le support est remis au jury.", true: true, why: "Le candidat le remet au jury, qui peut le consulter pendant l'exposé." },
            ],
          },
          quiz: [
            {
              q: "Quel est le statut du support au Grand oral ?",
              options: ["Obligatoire, réalisé à la maison et noté sur 4 points", "Facultatif, remis au jury et non évalué", "Obligatoire, mais non évalué", "Facultatif et noté en bonus"],
              answer: 1,
              why: "Le candidat réalise un support s'il le souhaite pendant la préparation ; il le remet au jury, sans évaluation.",
            },
            {
              q: "Quel contenu est le plus adapté à un support ?",
              options: ["Le texte complet de l'exposé", "Une liste de quinze chiffres", "Un schéma légendé du mécanisme étudié", "Une citation longue recopiée de mémoire"],
              answer: 2,
              why: "Le support sert à montrer ce que la parole explique mal ; un schéma légendé en est l'usage le plus utile.",
            },
            {
              q: "Comment utiliser le support pendant l'exposé ?",
              options: ["Le présenter puis y renvoyer au bon moment", "Le lire ligne à ligne", "Le garder en main pour s'en servir comme notes", "Ne jamais en parler"],
              answer: 0,
              why: "On le présente en une phrase, puis on y renvoie à voix haute quand il éclaire le raisonnement.",
            },
            {
              q: "Pourquoi éviter d'écrire sur le support une formule que l'on ne sait pas expliquer ?",
              options: ["Parce que les formules sont interdites", "Parce que le support serait trop long", "Parce que le jury n'a pas le droit de lire les formules écrites par le candidat", "Parce qu'elle peut susciter une question du jury"],
              answer: 3,
              why: "Le jury a le support sous les yeux : tout ce qui y figure peut servir de point de départ à une question.",
            },
            {
              q: "Avec R₀ = 4, que vaut le seuil d'immunité collective dans le modèle simplifié 1 - 1/R₀ ?",
              options: ["25 %", "40 %", "75 %", "80 %"],
              answer: 2,
              why: "1 - 1/4 = 1 - 0,25 = 0,75, soit 75 % de la population à immuniser.",
            },
          ],
          trap: "Traiter le support comme un aide-mémoire ou comme une copie notée : il est remis au jury, il n'est pas évalué, et l'exposé se fait sans notes ; un support surchargé fait perdre du temps de préparation sans rapporter de point.",
          method: "Avant de dessiner, demandez-vous : « Qu'est-ce que je n'arriverai pas à faire comprendre avec la seule parole ? » Mettez cela, et seulement cela, sur le support, puis vérifiez que vous savez expliquer chaque élément en une phrase.",
        },
      ],
    },
  ],
}
