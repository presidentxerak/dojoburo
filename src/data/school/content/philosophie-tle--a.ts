import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'philosophie-tle',
  chapters: [
    /* ==================================================================== */
    /* ENTRER EN PHILOSOPHIE                                                 */
    /* ==================================================================== */
    {
      id: 'entrer-en-philosophie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'qu-est-ce-que-philosopher',
          title: 'Qu\'est-ce que philosopher ?',
          minutes: 30,
          objectives: [
            "Définir la philosophie comme une démarche réflexive qui interroge ce qui semble aller de soi.",
            "Distinguer l'opinion, le savoir scientifique et la réflexion philosophique.",
            "Identifier les trois gestes du travail philosophique : conceptualiser, problématiser, argumenter.",
            "Situer l'origine de la philosophie dans l'étonnement et dans l'examen socratique.",
          ],
          course: [
            {
              heading: "Amour de la sagesse : un nom qui est déjà un programme",
              paragraphs: [
                "Le mot philosophie vient du grec philosophia, formé de philein (aimer) et de sophia (la sagesse, le savoir). Selon une tradition rapportée notamment par Cicéron, Pythagore aurait refusé le titre de sage (sophos) pour se dire seulement philosophos, ami de la sagesse. L'anecdote est incertaine, mais elle dit l'essentiel : le philosophe n'est pas celui qui possède la sagesse, c'est celui qui la cherche parce qu'il sait qu'il ne l'a pas. La philosophie est d'abord un désir et un chemin, non un stock de réponses.",
                "Dans le Banquet, Platon fait de l'amour (Éros) un intermédiaire entre l'ignorance et le savoir : ni les dieux, qui sont savants, ni les ignorants satisfaits d'eux-mêmes ne philosophent. Philosopher suppose de mesurer ce qui nous manque. C'est pourquoi la philosophie commence souvent par une perte d'assurance plutôt que par un gain de connaissances : on découvre que ce que l'on croyait savoir n'était pas fondé.",
              ],
              box: { label: "Définition", text: "Philosopher, c'est examiner de façon rationnelle et méthodique ce que l'on croit savoir, afin de comprendre ce que sont les choses et ce qui a de la valeur, sans s'en remettre à l'autorité ni à l'habitude." },
            },
            {
              heading: "L'étonnement et l'examen : le geste socratique",
              paragraphs: [
                "Platon (dans le Théétète) et Aristote (au livre A de la Métaphysique) placent tous deux l'origine de la philosophie dans l'étonnement. S'étonner, c'est découvrir qu'une chose familière (le temps, la justice, le simple fait que quelque chose existe) n'est pas comprise. Aristote précise que les hommes ont commencé à philosopher pour échapper à l'ignorance, et non pour une utilité pratique : la philosophie est une recherche libre, menée pour elle-même.",
                "Socrate (vers 470-399 av. J.-C.), qui n'a rien écrit et que nous connaissons surtout par les dialogues de Platon, interroge ses concitoyens sur ce qu'ils prétendent savoir : qu'est-ce que le courage, la piété, la justice ? Par ses questions, il montre que leurs définitions se contredisent (c'est la réfutation, en grec elenchos). Il se dit plus sage qu'eux sur un seul point : il ne croit pas savoir ce qu'il ne sait pas. Il compare son art à celui de sa mère, sage-femme : la maïeutique aide les esprits à accoucher de leurs propres idées.",
                "Dans l'Apologie de Socrate, Platon lui fait dire qu'une vie sans examen ne mérite pas d'être vécue. Condamné à mort en 399 av. J.-C. pour impiété et corruption de la jeunesse, Socrate devient la figure du philosophe qui préfère la vérité à sa propre sécurité.",
              ],
              box: { label: "À retenir", text: "Il y a deux ignorances : croire savoir ce que l'on ne sait pas (ignorance qui s'ignore) et savoir que l'on ne sait pas (ignorance consciente). La philosophie commence quand on passe de la première à la seconde." },
            },
            {
              heading: "Opinion, savoir et réflexion",
              paragraphs: [
                "L'opinion (en grec doxa) est une croyance reçue ou spontanée, que l'on tient pour vraie sans en avoir examiné les raisons : « chacun ses goûts », « on n'arrête pas le progrès ». Elle n'est pas forcément fausse, mais elle n'est pas fondée. La philosophie ne méprise pas l'opinion : elle part d'elle, la formule clairement, puis cherche ses raisons et ses limites.",
                "La philosophie n'est pas non plus une science parmi d'autres. Les sciences portent sur un objet délimité (le vivant, la matière, les sociétés) et disposent de méthodes de preuve propres (expérimentation, démonstration). La philosophie interroge aussi ce que les sciences présupposent : qu'est-ce que prouver, qu'est-ce que la vérité, que vaut une connaissance ? Elle porte enfin sur des questions de valeur (que dois-je faire ? qu'est-ce qu'une vie bonne ?) auxquelles aucune expérience ne suffit à répondre.",
                "Kant résume ce rapport dans la Critique de la raison pure (1781) : on ne peut pas apprendre la philosophie comme un ensemble de résultats acquis, on peut seulement apprendre à philosopher, c'est-à-dire à exercer sa propre raison. Lire les auteurs ne sert donc pas à répéter leurs thèses, mais à penser avec eux, et parfois contre eux.",
              ],
            },
            {
              heading: "Trois gestes : conceptualiser, problématiser, argumenter",
              paragraphs: [
                "Conceptualiser, c'est définir avec précision et distinguer : ne pas confondre la liberté avec le caprice, le droit avec la force, le bonheur avec le plaisir. Un concept n'est pas une image : il rassemble les caractères essentiels d'une chose et la distingue de ses voisines.",
                "Problématiser, c'est montrer qu'une question admet au moins deux réponses défendables qui s'opposent, de sorte qu'on ne peut trancher sans réfléchir. Argumenter, c'est justifier chaque affirmation par des raisons, des exemples analysés et des distinctions, puis répondre aux objections. Ces trois gestes sont exactement ce que l'épreuve du baccalauréat évalue, dans la dissertation comme dans l'explication de texte.",
              ],
              box: { label: "Repère", text: "Conceptualiser : définir et distinguer. Problématiser : faire apparaître une tension entre deux réponses légitimes. Argumenter : justifier par des raisons et examiner les objections." },
            },
          ],
          keyPoints: [
            "Philosophie vient du grec philosophia : amour (philein) de la sagesse (sophia). Le philosophe cherche la sagesse, il ne la possède pas.",
            "Selon Platon et Aristote, la philosophie naît de l'étonnement devant ce qui semblait aller de soi.",
            "Socrate se sait ignorant : il réfute les fausses certitudes (elenchos) et aide les esprits à accoucher de leurs idées (maïeutique).",
            "L'opinion (doxa) est une croyance non examinée ; la philosophie part d'elle pour en chercher les raisons et les limites.",
            "Kant : on n'apprend pas la philosophie, on apprend à philosopher.",
            "Trois gestes : conceptualiser, problématiser, argumenter.",
          ],
          example: {
            statement: "Expliquez en quoi la phrase « Chacun sa vérité » relève de l'opinion, puis montrez comment une démarche philosophique peut l'examiner.",
            solution: [
              "Repérer le statut de la phrase : c'est une formule courante, admise sans examen, souvent employée pour clore une discussion. Elle relève de l'opinion (doxa).",
              "Clarifier les termes : la vérité désigne l'accord d'un jugement avec la réalité ; « chacun sa » suggère que cet accord dépendrait de chaque personne. Il faut donc distinguer la vérité et l'avis personnel.",
              "Chercher ce qui rend la phrase plausible : en matière de goûts (préférer le thé au café), chacun a bien son avis, et aucune preuve ne permet de trancher.",
              "Chercher sa limite : si la phrase était vraie pour tous, elle se contredirait, puisqu'elle prétend énoncer une vérité valable pour chacun. Et sur un fait (l'eau pure bout à 100 °C sous la pression atmosphérique normale), l'avis de chacun ne change rien.",
              "Formuler le problème : faut-il distinguer des domaines où règne l'opinion et des domaines où une vérité commune est possible ? Où passe la frontière ?",
              "Conclusion : la phrase n'est pas absurde, mais elle confond l'opinion et la vérité. Philosopher consiste ici à distinguer, puis à interroger la limite entre les deux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des affirmations suivantes, dites s'il s'agit d'une opinion, d'un savoir scientifique ou d'une question philosophique, en justifiant brièvement : a) « Les jeunes ne lisent plus. » b) « La Terre tourne autour du Soleil. » c) « Peut-on être heureux sans être libre ? » d) « L'argent ne fait pas le bonheur. »",
              hint: "Demandez-vous à chaque fois si la phrase est établie par une méthode de preuve, admise sans examen, ou si elle ouvre une interrogation sur le sens et la valeur.",
              solution: [
                "a) Opinion : c'est une généralisation qui ne précise ni de quels jeunes il s'agit ni ce que « lire » veut dire. Elle pourrait être testée par une enquête, mais telle quelle, elle n'est pas fondée.",
                "b) Savoir scientifique : l'héliocentrisme est établi par l'observation et le calcul astronomiques depuis Copernic, Kepler et Galilée, puis expliqué par la mécanique de Newton.",
                "c) Question philosophique : elle porte sur deux notions du programme (le bonheur, la liberté) et sur leur rapport ; aucune expérience ne suffit à la trancher.",
                "d) Opinion : c'est un proverbe. Il contient peut-être une part de vérité, mais il n'est pas examiné. On peut le transformer en question philosophique : le bonheur dépend-il de conditions matérielles ?",
                "Résultat : a et d sont des opinions, b est un savoir scientifique, c est une question philosophique.",
              ],
            },
            {
              level: 2,
              statement: "Transformez l'opinion « Il faut vivre avec son temps » en question philosophique, puis indiquez deux réponses opposées que l'on peut défendre avec de bonnes raisons.",
              hint: "Commencez par clarifier l'expression « vivre avec son temps » (s'adapter aux usages de son époque), puis demandez-vous si cette adaptation est toujours un bien.",
              solution: [
                "Clarifier : « vivre avec son temps » signifie adopter les manières de penser, les techniques et les usages de son époque.",
                "Question philosophique : doit-on se conformer à son époque pour bien vivre ? Ou encore : être de son temps, est-ce une vertu ?",
                "Première réponse : oui, car refuser son époque isole, empêche d'agir efficacement sur le monde présent, et revient souvent à idéaliser un passé imaginaire.",
                "Seconde réponse : non, car une époque peut se tromper ; l'esprit critique suppose de prendre ses distances avec les opinions dominantes, comme Socrate face aux certitudes des Athéniens.",
                "Résultat : la question oppose l'adaptation et l'esprit critique. C'est cette tension, et non l'opinion de départ, qui en fait une question philosophique.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Philosopher, est-ce douter de tout ? » Analysez les termes du sujet, formulez le problème et proposez un plan en trois parties, avec un argument et une référence par partie.",
              hint: "Distinguez le doute comme méthode (provisoire, au service de la vérité) et le doute comme fin en soi. Pensez à Socrate et à Descartes.",
              solution: [
                "Analyse : « philosopher » désigne la recherche rationnelle de la sagesse ; « douter » signifie suspendre son jugement ; « de tout » pose la question de l'étendue du doute ; « est-ce » demande s'il y a identité entre les deux ou seulement un lien.",
                "Problème : le doute paraît nécessaire pour se libérer des opinions ; mais un doute universel et définitif interdirait toute affirmation, y compris celle qu'il faut douter. Le doute est-il le but de la philosophie ou seulement son moyen ?",
                "I. Philosopher commence par douter : Socrate dissout les fausses certitudes de ses interlocuteurs ; Descartes, dans le Discours de la méthode (1637), décide de rejeter comme faux tout ce en quoi il peut imaginer le moindre doute.",
                "II. Mais un doute qui ne s'arrête jamais se détruit lui-même : affirmer que tout est douteux, c'est déjà affirmer quelque chose. Chez Descartes, le doute est méthodique et provisoire : il conduit à une première certitude, « je pense, donc je suis ».",
                "III. Philosopher, c'est douter à bon escient : examiner les raisons de croire, suspendre son jugement quand elles manquent, affirmer quand elles suffisent. Le doute est un instrument au service de la vérité, non une fin.",
                "Conclusion : philosopher n'est pas douter de tout, mais refuser de croire sans raison. Le doute en est le premier moment, non le dernier.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : idées reçues sur la philosophie.",
            statements: [
              { text: "Le mot philosophie signifie « amour de la sagesse ».", true: true, why: "Il vient du grec philein (aimer) et sophia (la sagesse, le savoir)." },
              { text: "Le philosophe est celui qui possède la sagesse.", true: false, why: "Il la cherche parce qu'il sait qu'il ne la possède pas ; dans le Banquet de Platon, seuls les dieux sont sages." },
              { text: "Socrate a laissé de nombreux livres.", true: false, why: "Socrate n'a rien écrit ; nous le connaissons surtout par les dialogues de Platon et par Xénophon." },
              { text: "En philosophie, toutes les opinions se valent.", true: false, why: "La philosophie examine les raisons des opinions : une thèse justifiée et discutée vaut mieux qu'une opinion non examinée." },
              { text: "Platon et Aristote placent l'origine de la philosophie dans l'étonnement.", true: true, why: "S'étonner, c'est découvrir que l'on ne comprend pas ce qui semblait familier." },
              { text: "Pour Kant, on apprend à philosopher plutôt que la philosophie comme un ensemble de résultats.", true: true, why: "La philosophie est l'exercice de sa propre raison, pas une doctrine à réciter." },
              { text: "Une question philosophique se tranche par une expérience de laboratoire.", true: false, why: "Elle porte sur le sens, la valeur ou les fondements : l'expérience peut nourrir la réflexion, mais ne suffit pas à conclure." },
            ],
          },
          quiz: [
            {
              q: "Que signifie l'étymologie grecque du mot philosophie ?",
              options: ["La science des lois de la nature", "L'amour de la sagesse", "L'art de bien parler en public", "La connaissance des dieux"],
              answer: 1,
              why: "Philosophia est formé de philein, aimer, et de sophia, la sagesse : le philosophe aime et cherche ce qu'il ne possède pas.",
            },
            {
              q: "Qu'est-ce que la maïeutique socratique ?",
              options: ["Une technique pour gagner les débats en séduisant le public par de belles phrases", "Un recueil de règles morales à appliquer", "L'art d'aider un esprit à faire naître ses propres idées", "Une méthode de calcul"],
              answer: 2,
              why: "Socrate compare son art à celui des sages-femmes : par ses questions, il aide ses interlocuteurs à accoucher de leurs propres pensées.",
            },
            {
              q: "Comment appelle-t-on, en grec, l'opinion non examinée ?",
              options: ["La doxa", "L'épistémè", "Le logos", "La sophia"],
              answer: 0,
              why: "La doxa est l'opinion ; l'épistémè désigne la science, le logos la raison ou le discours, la sophia la sagesse.",
            },
            {
              q: "Selon Kant, que peut-on apprendre ?",
              options: ["La philosophie, comme un ensemble de vérités définitives", "Les systèmes des grands auteurs, à réciter fidèlement", "Rien, puisque chacun pense par soi-même dès la naissance", "À philosopher, en exerçant sa propre raison"],
              answer: 3,
              why: "Pour Kant, la philosophie n'est pas un savoir achevé que l'on transmet : on apprend seulement à faire usage de sa raison.",
            },
            {
              q: "Pourquoi Socrate se dit-il plus sage que ceux qu'il interroge ?",
              options: ["Parce qu'il a voyagé plus qu'eux", "Parce qu'il ne croit pas savoir ce qu'il ne sait pas", "Parce qu'il connaît toutes les définitions", "Parce que l'oracle lui a révélé la vérité sur toutes choses"],
              answer: 1,
              why: "Sa supériorité tient à la conscience de son ignorance, alors que les autres croient savoir ce qu'ils ignorent.",
            },
          ],
          trap: "Croire que philosopher consiste à donner son avis personnel : une copie qui enchaîne des opinions sans les définir ni les justifier n'est pas philosophique, même si elle est sincère.",
          method: "Pour chaque affirmation que vous lisez ou écrivez, posez trois questions : que veut dire exactement chaque terme ? Quelles raisons la justifient ? Quelle objection sérieuse peut-on lui faire ? Notez les réponses en trois lignes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lire-le-programme',
          title: 'Notions, perspectives, repères, auteurs : lire le programme',
          minutes: 25,
          objectives: [
            "Identifier les dix-sept notions du programme et les trois perspectives qui les organisent.",
            "Expliquer le rôle des repères dans l'analyse d'un sujet.",
            "Situer les auteurs du programme dans les trois périodes définies par le texte officiel.",
            "Décrire l'épreuve écrite de philosophie du baccalauréat et ce qu'elle évalue.",
          ],
          course: [
            {
              heading: "Dix-sept notions, trois perspectives",
              paragraphs: [
                "Le programme de philosophie de la classe terminale de la voie générale (arrêté du 19 juillet 2019) fixe dix-sept notions : l'art, le bonheur, la conscience, le devoir, l'État, l'inconscient, la justice, le langage, la liberté, la nature, la raison, la religion, la science, la technique, le temps, le travail, la vérité. Les sujets du baccalauréat portent sur ces notions, prises seules ou mises en relation.",
                "Le programme propose aussi trois perspectives qui permettent de relier les notions entre elles : l'existence humaine et la culture, la morale et la politique, la connaissance. Une même notion peut être abordée selon plusieurs perspectives : le travail relève de l'existence humaine (il transforme celui qui travaille), mais aussi de la politique (il pose la question de la justice dans la répartition des richesses). Les perspectives ne sont pas des cases étanches, ce sont des angles d'attaque.",
              ],
              box: { label: "Repère", text: "Le programme comprend des notions (dix-sept), des perspectives (trois : l'existence humaine et la culture, la morale et la politique, la connaissance), des repères (une trentaine de couples ou de groupes de concepts) et une liste d'auteurs." },
            },
            {
              heading: "Les repères : des distinctions pour penser",
              paragraphs: [
                "Les repères sont des couples ou des groupes de concepts que le programme demande de maîtriser : absolu/relatif, croire/savoir, en fait/en droit, légal/légitime, obligation/contrainte, origine/fondement, persuader/convaincre, universel/général/particulier/singulier, et bien d'autres. Ils ne forment pas un chapitre à part : ils servent dans toutes les notions, parce qu'ils permettent de faire des distinctions précises.",
                "Prenons le sujet « Doit-on toujours obéir aux lois ? ». La distinction entre le légal (ce qui est conforme à la loi en vigueur) et le légitime (ce qui est juste, fondé en raison) ouvre aussitôt le problème : une loi peut être légale sans être légitime. Un repère bien employé transforme une question vague en problème précis.",
              ],
              box: { label: "Règle", text: "Un repère s'emploie pour distinguer deux sens et faire avancer l'analyse, jamais comme une étiquette plaquée. Il faut savoir définir chaque terme et donner un exemple où la distinction change la réponse." },
            },
            {
              heading: "Les auteurs : trois périodes",
              paragraphs: [
                "Le programme donne une liste d'auteurs répartis en trois périodes. L'Antiquité et le Moyen Âge : par exemple Platon, Aristote, Épicure, Lucrèce, Sénèque, Épictète, Augustin, Thomas d'Aquin. La période moderne : Machiavel, Montaigne, Hobbes, Descartes, Pascal, Spinoza, Locke, Leibniz, Hume, Rousseau, Kant. La période contemporaine : Hegel, Marx, Nietzsche, Freud, Bergson, Alain, Arendt, Sartre, Simone Weil, Simone de Beauvoir, Foucault, entre autres.",
                "Les textes proposés à l'explication sont tirés d'œuvres d'auteurs comme ceux-ci. Il ne s'agit pas d'apprendre des biographies ni de réciter des doctrines : un auteur est utile dans une copie parce que son argument éclaire le problème posé. Mieux vaut connaître précisément quelques thèses, avec leurs raisons et un exemple, qu'aligner des noms.",
              ],
            },
            {
              heading: "L'épreuve du baccalauréat",
              paragraphs: [
                "L'épreuve écrite de philosophie dure quatre heures. Le candidat choisit l'un des trois sujets proposés : deux sujets de dissertation, le plus souvent formulés comme des questions, et un texte à expliquer. La dissertation demande de construire et de traiter un problème à partir d'une question ; l'explication de texte demande de dégager le problème, la thèse et la démarche d'un auteur, puis d'en évaluer la portée.",
                "Dans les deux exercices, on attend les mêmes compétences : définir les notions, poser un problème, argumenter, et mobiliser des connaissances (repères, auteurs, exemples) au service d'une réflexion personnelle. Le programme ne demande pas de tout savoir sur chaque notion, mais de savoir réfléchir sur une question précise à partir de ce que l'on a appris.",
              ],
              box: { label: "À retenir", text: "Bac : quatre heures, trois sujets au choix (deux dissertations, une explication de texte). On évalue la capacité à problématiser, argumenter et mobiliser des connaissances, non la récitation." },
            },
          ],
          keyPoints: [
            "17 notions : art, bonheur, conscience, devoir, État, inconscient, justice, langage, liberté, nature, raison, religion, science, technique, temps, travail, vérité.",
            "3 perspectives : l'existence humaine et la culture, la morale et la politique, la connaissance.",
            "Les repères (légal/légitime, croire/savoir, en fait/en droit...) sont des distinctions à employer dans toutes les notions.",
            "Les auteurs sont répartis en trois périodes : Antiquité et Moyen Âge, période moderne, période contemporaine.",
            "Bac : quatre heures, au choix une dissertation (deux sujets) ou une explication de texte.",
          ],
          example: {
            statement: "Sujet : « La technique nous rend-elle plus libres ? » Identifiez les notions du programme engagées, les perspectives concernées et deux repères utiles.",
            solution: [
              "Notions : la technique et la liberté, deux notions du programme.",
              "Perspectives : la technique relève surtout de l'existence humaine et la culture (elle transforme notre rapport à la nature), la liberté surtout de la morale et la politique ; le sujet les croise.",
              "Premier repère, en fait/en droit : en fait, la technique libère de nombreuses contraintes (distance, fatigue, maladie) ; en droit, se libérer suppose de rester maître de ses moyens, ce qui n'est pas garanti.",
              "Second repère, principe/cause/fin : la technique est un ensemble de moyens ; elle ne libère que si elle reste au service de fins que nous choisissons.",
              "Résultat : notions technique et liberté, perspectives croisées, repères en fait/en droit et principe/cause/fin.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez la perspective du programme qui correspond le plus directement à chacune des notions suivantes : la vérité, l'État, l'art, le devoir, la science, le temps.",
              hint: "Rappelez-vous les trois perspectives : l'existence humaine et la culture, la morale et la politique, la connaissance.",
              solution: [
                "La connaissance : la vérité, la science.",
                "La morale et la politique : l'État, le devoir.",
                "L'existence humaine et la culture : l'art, le temps.",
                "Remarque : ce classement indique un angle principal ; le programme n'enferme pas une notion dans une seule perspective. L'art peut aussi poser une question de connaissance (l'art nous fait-il connaître le réel ?).",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des sujets suivants, indiquez les notions engagées et un repère utile, en justifiant : a) « Une loi injuste est-elle encore une loi ? » b) « Le travail nous rend-il plus humains ? » c) « Une croyance religieuse peut-elle être raisonnable ? »",
              hint: "Cherchez d'abord les mots du sujet qui renvoient aux dix-sept notions, puis le couple de concepts qui permet de distinguer deux sens dans la question.",
              solution: [
                "a) Notions : la justice et l'État (la loi est l'expression de son autorité). Repère : légal/légitime, car le sujet demande si une loi peut être légale sans être juste.",
                "b) Notions : le travail et la nature (être plus humain, c'est peut-être s'éloigner de sa simple nature). Repère : en fait/en droit, car le travail peut déshumaniser en fait (travail à la chaîne) tout en étant, en droit, ce par quoi l'homme se forme.",
                "c) Notions : la religion et la raison. Repère : croire/savoir, car la croyance religieuse n'est pas un savoir démontré, et il faut se demander si elle peut pourtant avoir des raisons.",
                "Résultat : chaque sujet associe au moins deux notions, et un repère permet d'y faire apparaître une tension.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « La justice n'est-elle qu'une convention ? » Montrez quelles notions et quels repères du programme ce sujet mobilise, puis formulez en quelques phrases le problème qu'il pose.",
              hint: "Le mot « convention » désigne ce qui est établi par un accord entre les hommes. Pensez aux repères origine/fondement et absolu/relatif.",
              solution: [
                "Notions : la justice, au centre du sujet, et l'État, qui fixe les lois positives ; le sujet engage aussi la vérité (y a-t-il un juste vrai pour tous ?).",
                "Repère origine/fondement : que la justice ait pour origine des accords entre les hommes ne dit pas encore si elle a un fondement en raison.",
                "Repère absolu/relatif : si la justice n'est qu'une convention, elle est relative à chaque société ; si elle a un fondement, elle prétend à une valeur absolue ou universelle.",
                "Repère légal/légitime : les conventions forment le légal ; la question est de savoir s'il existe un légitime qui permet de les juger.",
                "Problème : les règles de justice varient selon les époques et les sociétés, ce qui suggère qu'elles sont conventionnelles ; pourtant nous jugeons certaines lois injustes, ce qui suppose un critère supérieur aux conventions. La justice est-elle seulement ce que les hommes ont décidé, ou ce qui permet de juger leurs décisions ?",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément du programme et de l'épreuve à ce qu'il désigne.",
            pairs: [
              { left: "Notion", right: "Un concept central qui fournit la matière des sujets, comme la liberté" },
              { left: "Perspective", right: "Un angle d'étude qui relie plusieurs notions, comme la connaissance" },
              { left: "Repère", right: "Une distinction conceptuelle à employer dans toutes les notions" },
              { left: "Dissertation", right: "Exercice qui construit et traite un problème à partir d'une question" },
              { left: "Explication de texte", right: "Exercice qui dégage le problème, la thèse et la démarche d'un auteur" },
              { left: "Auteur", right: "Penseur de la liste officielle dont on mobilise les arguments" },
            ],
          },
          quiz: [
            {
              q: "Combien de notions le programme de terminale de 2019 compte-t-il ?",
              options: ["Douze", "Vingt-quatre", "Dix-sept", "Trente"],
              answer: 2,
              why: "Le programme compte dix-sept notions, de l'art à la vérité.",
            },
            {
              q: "Laquelle de ces expressions désigne une perspective du programme ?",
              options: ["La morale et la politique", "La logique formelle et ses applications", "L'histoire des idées de l'Antiquité", "Les sciences humaines et sociales"],
              answer: 0,
              why: "Les trois perspectives sont l'existence humaine et la culture, la morale et la politique, la connaissance.",
            },
            {
              q: "Que permet un repère comme légal/légitime ?",
              options: ["De dater un événement historique précisément", "D'éviter de définir les mots du sujet", "De remplacer toute argumentation par une citation d'auteur", "De distinguer deux sens pour préciser un problème"],
              answer: 3,
              why: "Un repère est une distinction : il fait apparaître deux sens d'une question et rend le problème plus précis.",
            },
            {
              q: "Combien de temps dure l'épreuve écrite de philosophie au baccalauréat ?",
              options: ["Deux heures", "Quatre heures", "Trois heures et demie", "Six heures"],
              answer: 1,
              why: "L'épreuve dure quatre heures, quel que soit le sujet choisi.",
            },
            {
              q: "Que choisit le candidat le jour de l'épreuve ?",
              options: ["Une notion qu'il préfère, sur laquelle il rédige librement ce qu'il sait", "Un auteur du programme, dont il doit résumer toute la doctrine", "Un sujet parmi trois : deux dissertations, une explication", "Rien : un seul sujet est imposé à tous"],
              answer: 2,
              why: "Trois sujets sont proposés : deux sujets de dissertation et un texte à expliquer ; le candidat en traite un seul.",
            },
          ],
          trap: "Traiter les repères comme une liste de vocabulaire à réciter : un repère ne vaut que s'il est défini et employé pour faire avancer l'analyse d'un sujet précis.",
          method: "Faites-vous une fiche par repère : les deux termes définis en une phrase chacun, un exemple où la distinction change la réponse, et deux sujets de bac où elle sert. Complétez-la à chaque nouvelle notion étudiée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'du-sujet-au-probleme',
          title: 'D\'une question à un problème philosophique',
          minutes: 30,
          objectives: [
            "Analyser les termes d'un sujet et en dégager les présupposés.",
            "Distinguer une question d'un problème philosophique.",
            "Formuler une problématique sous la forme d'une tension entre deux thèses défendables.",
            "Vérifier qu'une problématique reste fidèle au sujet et annonce un parcours.",
          ],
          course: [
            {
              heading: "Une question n'est pas encore un problème",
              paragraphs: [
                "Une question appelle une réponse ; un problème est une difficulté qui empêche de répondre simplement, parce que deux réponses opposées semblent toutes deux justifiées. « Quelle heure est-il ? » est une question sans problème : on regarde l'horloge. « Peut-on perdre son temps ? » devient un problème dès que l'on remarque que le temps ne semble pas nous appartenir (on ne le possède pas, il passe), alors que nous nous reprochons sans cesse de l'avoir mal employé.",
                "Le travail philosophique consiste à passer de la question au problème : montrer que la réponse spontanée ne suffit pas, que la réponse inverse a elle aussi des raisons, et qu'il faut donc réfléchir pour trancher ou pour dépasser l'opposition. Un sujet de dissertation est toujours une question ; c'est à vous d'en faire un problème.",
              ],
              box: { label: "Définition", text: "Un problème philosophique est une tension entre au moins deux réponses défendables à une même question, qui oblige à examiner les notions et leurs présupposés pour pouvoir conclure." },
            },
            {
              heading: "Analyser les termes et les présupposés",
              paragraphs: [
                "Première étape : définir chaque terme important, en partant du sens courant pour le préciser. Dans « Le travail nous rend-il libres ? », il faut définir le travail (activité de transformation de la nature en vue de satisfaire des besoins, souvent pénible et organisée socialement) et la liberté (absence de contrainte, ou pouvoir de se déterminer soi-même). Les petits mots comptent aussi : « peut-on », « doit-on », « faut-il », « toujours », « seulement ».",
                "Deuxième étape : repérer les présupposés, c'est-à-dire ce que la question tient pour acquis. « Pourquoi le travail aliène-t-il ? » suppose déjà qu'il aliène. « Le travail nous rend-il libres ? » suppose que la liberté n'est pas donnée d'emblée et qu'elle peut se gagner. Mettre au jour un présupposé, c'est souvent trouver le point où le problème se noue.",
              ],
              box: { label: "Règle", text: "Peut-on : possibilité (en fait) ou permission (en droit). Doit-on : obligation morale ou nécessité. Faut-il : nécessité ou opportunité. Toujours, seulement, tout : quantificateurs à interroger." },
            },
            {
              heading: "Faire apparaître la tension",
              paragraphs: [
                "Troisième étape : confronter la réponse spontanée (souvent l'opinion) à une réponse qui la contredit et qui a, elle aussi, de bonnes raisons. Spontanément, le travail semble s'opposer à la liberté : il est contraint, fatigant, imposé par le besoin. Pourtant, en transformant la nature, l'homme se transforme lui-même, acquiert des compétences et une forme d'indépendance, comme le montre Hegel avec la figure du maître et de l'esclave dans la Phénoménologie de l'esprit (1807).",
                "La problématique formule cette tension sous la forme d'une question articulée : « Si le travail est d'abord une contrainte imposée par le besoin, comment pourrait-il être aussi le lieu où l'homme conquiert sa liberté ? » Une bonne problématique ne répète pas le sujet : elle dit pourquoi il fait difficulté et elle laisse voir l'enjeu (ici, savoir si la liberté est donnée ou si elle se conquiert).",
              ],
              box: { label: "À retenir", text: "Problématique : réponse A avec ses raisons, réponse B avec ses raisons, la question qui les oppose, et l'enjeu de cette opposition." },
            },
            {
              heading: "Vérifier sa problématique",
              paragraphs: [
                "Avant de construire le plan, soumettez votre problématique à trois tests. Est-elle fidèle au sujet, c'est-à-dire parle-t-elle bien des notions et de la relation que la question établit entre elles ? Le problème est-il réel, autrement dit une personne raisonnable pourrait-elle défendre chacune des deux réponses ? Annonce-t-elle un parcours, en laissant deviner par où la réflexion va passer ?",
                "Si l'un des tests échoue, revenez à l'analyse des termes : un problème mal posé vient presque toujours d'une définition trop vague ou d'un présupposé non aperçu. Un sujet bien analysé fournit souvent à lui seul la structure de la dissertation.",
              ],
            },
          ],
          keyPoints: [
            "Une question appelle une réponse ; un problème naît quand deux réponses opposées sont défendables.",
            "Analyser : définir chaque terme, du sens courant au sens précis.",
            "Peut-on, doit-on, faut-il, toujours, seulement : chaque mot de la question compte.",
            "Repérer les présupposés : ce que la question tient pour acquis.",
            "La problématique formule la tension et son enjeu, sans recopier le sujet.",
          ],
          example: {
            statement: "Sujet : « Peut-on se mentir à soi-même ? » Analysez le sujet et formulez une problématique.",
            solution: [
              "Définir : mentir, c'est affirmer volontairement ce que l'on sait faux pour tromper autrui. Se mentir à soi-même, ce serait être à la fois le trompeur et le trompé.",
              "Repérer le paradoxe : pour mentir, il faut savoir la vérité ; pour être trompé, il faut l'ignorer. Être les deux en même temps semble impossible.",
              "Interroger « peut-on » : il s'agit ici surtout de possibilité (est-ce concevable ?) plutôt que de permission morale.",
              "Opposer l'expérience : nous nous racontons pourtant des histoires sur nos motifs ou nos échecs, et nous évitons de regarder certaines vérités en face.",
              "Problématique : si le mensonge suppose un trompeur qui sait et une victime qui ignore, comment une même conscience pourrait-elle être les deux à la fois ? Et si l'expérience atteste que nous nous aveuglons sur nous-mêmes, faut-il conclure que la conscience n'est pas transparente à elle-même ?",
              "Enjeu : la transparence de la conscience et notre responsabilité à l'égard de nos illusions (Sartre parlera de mauvaise foi, Freud d'inconscient).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Repérez le présupposé de chacune des questions suivantes : a) « Pourquoi l'art est-il inutile ? » b) « Faut-il se libérer de ses désirs ? » c) « Peut-on être juste avec ses ennemis ? »",
              hint: "Demandez-vous ce que la question considère comme déjà établi avant même qu'on y réponde.",
              solution: [
                "a) La question présuppose que l'art est inutile et ne demande que la cause. Il faut d'abord interroger ce présupposé : inutile pour quoi ? L'art ne sert à rien au sens technique, mais il peut avoir une valeur.",
                "b) Elle présuppose que les désirs nous asservissent (on ne se libère que de ce qui enchaîne) et qu'il est possible de s'en libérer.",
                "c) Elle présuppose que nous avons des ennemis et que nos sentiments pourraient compromettre notre justice : le problème porte sur l'impartialité.",
                "Résultat : repérer le présupposé fournit souvent la matière d'une première partie (l'admettre) et d'une deuxième (le discuter).",
              ],
            },
            {
              level: 2,
              statement: "Pour le sujet « Le bonheur est-il une affaire privée ? », définissez les termes, puis donnez deux réponses opposées avec une raison chacune et formulez le problème.",
              hint: "Le repère public/privé est au cœur du sujet. Demandez-vous si le bonheur dépend seulement de l'individu, ou aussi de la vie commune.",
              solution: [
                "Définitions : le bonheur est un état de satisfaction durable et complète ; une « affaire privée » est ce qui relève de l'individu seul, hors de l'action de l'État ou de la collectivité.",
                "Réponse A : oui, car chacun se fait sa propre idée du bonheur ; Kant le décrit comme un idéal de l'imagination et non de la raison, et un gouvernement qui prétendrait rendre heureux ses sujets selon sa propre idée deviendrait despotique.",
                "Réponse B : non, car le bonheur suppose des conditions communes (paix, sécurité, justice, éducation) ; pour Aristote, l'homme est un animal politique qui ne s'accomplit que dans la cité.",
                "Problème : le bonheur semble relever de chaque individu, mais il dépend de conditions que seule la vie collective peut assurer. Le rôle de la politique est-il de rendre heureux, ou seulement de rendre le bonheur possible ?",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « Avons-nous le devoir de chercher la vérité ? » Rédigez une introduction complète : amorce, analyse des termes, problématique et annonce du plan.",
              hint: "Montrez la tension : la vérité semble une valeur à poursuivre, mais certaines vérités blessent ou détruisent. Le mot « devoir » demande s'il s'agit d'une obligation morale.",
              solution: [
                "Amorce : on reproche aux enfants de mentir, mais on comprend aussi ceux qui préfèrent ne pas connaître certaines nouvelles, comme un diagnostic grave. La recherche de la vérité est-elle alors une obligation ?",
                "Analyse : la vérité est l'accord d'un jugement avec le réel ; la chercher, c'est s'efforcer de l'atteindre ; un devoir est une obligation que l'on reconnaît librement, par opposition à une contrainte. La question n'est pas de savoir si nous désirons la vérité, mais si nous y sommes tenus.",
                "Tension : d'un côté, renoncer à la vérité, c'est renoncer à penser par soi-même et se livrer à l'erreur ou à la manipulation ; de l'autre, certaines vérités font souffrir sans rien apporter, et la vie semble parfois avoir besoin d'illusions, comme le soutient Nietzsche.",
                "Problématique : si la vérité est la condition de notre liberté de pensée, peut-on pour autant l'exiger toujours, même lorsqu'elle nous détruit ? S'agit-il d'un devoir absolu ou d'une valeur à concilier avec d'autres ?",
                "Annonce : nous verrons d'abord que chercher la vérité est une exigence de la raison, puis que cette exigence rencontre des limites vitales et morales, avant de montrer que le devoir porte moins sur la possession de vérités que sur le refus de se mentir.",
                "Résultat : une introduction qui part d'un exemple, définit les termes, oppose deux thèses justifiées et annonce un parcours en trois temps.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui mènent d'un sujet à une problématique.",
            items: [
              "Lire le sujet lentement et souligner chaque terme",
              "Définir les notions, du sens courant au sens précis",
              "Interroger la forme de la question (peut-on, doit-on, faut-il)",
              "Repérer les présupposés du sujet",
              "Formuler la réponse spontanée et ses raisons",
              "Construire la réponse opposée et ses raisons",
              "Rédiger la problématique et son enjeu",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue un problème d'une simple question ?",
              options: ["Il porte toujours sur un auteur célèbre", "Il exige des connaissances historiques précises", "Il se formule obligatoirement avec « peut-on »", "Deux réponses opposées y semblent défendables"],
              answer: 3,
              why: "Un problème naît d'une tension : deux réponses contraires ont chacune de bonnes raisons, ce qui oblige à réfléchir.",
            },
            {
              q: "Dans « Pourquoi l'homme est-il méchant ? », quel est le présupposé ?",
              options: ["Que l'homme est parfois bon", "Que l'homme est méchant", "Que la méchanceté n'existe pas", "Que la question n'a aucune réponse"],
              answer: 1,
              why: "La question ne demande que la cause : elle tient déjà pour acquis que l'homme est méchant, ce qu'il faut discuter.",
            },
            {
              q: "Dans un sujet, « peut-on » interroge d'abord :",
              options: ["une possibilité ou une permission", "un fait historique daté et vérifié", "une préférence personnelle de l'auteur du sujet"],
              answer: 0,
              why: "« Peut-on » a deux sens : est-ce possible (en fait) ? est-ce permis (en droit) ? Les distinguer ouvre souvent le problème.",
            },
            {
              q: "Une bonne problématique :",
              options: ["recopie le sujet mot pour mot avec un point d'interrogation", "donne immédiatement la réponse que l'on défendra jusqu'au bout", "formule la tension entre deux réponses et son enjeu", "énumère les auteurs que l'on va citer"],
              answer: 2,
              why: "La problématique explique pourquoi le sujet fait difficulté et ce qui est en jeu ; elle ne répète pas le sujet et ne le tranche pas d'avance.",
            },
            {
              q: "À quoi sert de repérer les présupposés d'un sujet ?",
              options: ["À éviter d'avoir à définir les termes du sujet un par un", "À trouver le point où le problème se noue", "À allonger l'introduction", "À choisir des citations"],
              answer: 1,
              why: "Ce que la question tient pour acquis est souvent ce qu'il faut discuter : c'est là que se loge le problème.",
            },
          ],
          trap: "Répondre au sujet dès l'introduction, ou se contenter de le reformuler, au lieu de montrer pourquoi il pose problème : une problématique sans tension annonce une copie qui récite au lieu de réfléchir.",
          method: "Au brouillon, tracez deux colonnes : « oui, parce que... » et « non, parce que... ». Ne rédigez votre problématique que lorsque chaque colonne contient au moins une raison sérieuse que vous pourriez défendre devant un contradicteur.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES REPÈRES : DISTINGUER POUR PENSER                                  */
    /* ==================================================================== */
    {
      id: 'reperes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reperes-connaissance',
          title: 'Croire et savoir, expliquer et comprendre, exemple et preuve',
          minutes: 35,
          objectives: [
            "Distinguer croire et savoir à l'aide des critères de justification et de vérité.",
            "Distinguer expliquer et comprendre, et les rapporter aux sciences de la nature et aux sciences humaines.",
            "Distinguer l'exemple et la preuve, et employer un contre-exemple pour réfuter une affirmation universelle.",
            "Mobiliser ces repères dans l'analyse d'un sujet.",
          ],
          course: [
            {
              heading: "Croire et savoir",
              paragraphs: [
                "Croire, c'est tenir une chose pour vraie sans pouvoir en donner une justification suffisante pour tous. Savoir, c'est tenir pour vrai ce qui est vrai, en ayant des raisons qui le justifient et que d'autres peuvent vérifier. Dans le Ménon, Platon montre qu'une opinion vraie guide l'action aussi bien que la science, mais qu'elle reste instable, comme les statues de Dédale qui s'enfuient si on ne les attache pas : la science est une opinion vraie « attachée » par un raisonnement qui en donne la raison.",
                "Kant, dans la Critique de la raison pure (1781), distingue trois degrés de l'assentiment. L'opinion est insuffisante à la fois subjectivement (je n'en suis pas sûr) et objectivement (elle n'est pas prouvée). La croyance, ou foi, est suffisante subjectivement mais pas objectivement : je suis convaincu, mais je ne peux pas le prouver. Le savoir est suffisant des deux côtés. Croire n'est donc pas forcément irrationnel : c'est adhérer sans preuve suffisante.",
                "La distinction n'est pas une simple opposition. Tout savoir humain repose aussi sur des croyances : nous croyons les manuels, les experts, les témoins, sans tout vérifier nous-mêmes. Et croire ne signifie pas seulement ignorer : on peut croire en quelqu'un (la confiance) ou croire à une valeur (l'engagement). La vraie question devient : quand avons-nous le droit de croire ?",
              ],
              box: { label: "Définition", text: "Savoir : croyance vraie et justifiée par des raisons communicables. Croire : adhérer à une idée sans justification objective suffisante. Kant : opinion (insuffisante subjectivement et objectivement), foi (suffisante subjectivement seulement), savoir (suffisant des deux côtés)." },
            },
            {
              heading: "Expliquer et comprendre",
              paragraphs: [
                "Expliquer, c'est rendre raison d'un phénomène en le rattachant à ses causes ou à des lois : on explique la chute d'une pierre par la gravitation, une éclipse par la position des astres. Comprendre, c'est saisir le sens d'une action ou d'une œuvre en se rapportant aux intentions, aux raisons et aux valeurs de ceux qui agissent. On n'a pas à comprendre une éclipse, on l'explique ; on comprend en revanche pourquoi une personne s'est engagée dans la Résistance.",
                "Le philosophe allemand Wilhelm Dilthey, à la fin du XIXe siècle, a fait de cette distinction le critère qui sépare les sciences de la nature, qui expliquent, des sciences de l'esprit (nos sciences humaines), qui comprennent. Le sociologue Max Weber a ensuite défendu une sociologie compréhensive, qui cherche à comprendre le sens que les individus donnent à leurs actions pour en expliquer le déroulement et les effets. Les deux démarches peuvent donc se compléter.",
              ],
              box: { label: "Repère", text: "Expliquer : par les causes et les lois (comment cela se produit-il ?). Comprendre : par le sens et les intentions (que visait celui qui agit ?). On explique la nature, on comprend les actions humaines ; les sciences humaines cherchent à faire les deux." },
            },
            {
              heading: "Exemple et preuve",
              paragraphs: [
                "Un exemple est un cas particulier qui illustre une idée générale : il la rend concrète et compréhensible. Une preuve est ce qui établit qu'une affirmation est vraie : démonstration en mathématiques, expérimentation contrôlée en physique, confrontation de documents en histoire. Accumuler des exemples ne suffit pas à prouver une affirmation universelle : avoir observé mille cygnes blancs ne prouve pas que tous les cygnes sont blancs, et les Européens ont découvert des cygnes noirs en Australie.",
                "En revanche, un seul contre-exemple suffit à réfuter une affirmation universelle. Karl Popper en a tiré un critère : une théorie est scientifique si elle est réfutable, c'est-à-dire si elle indique quelles observations pourraient la contredire (La Logique de la découverte scientifique, 1934). Les confirmations rendent une théorie plus solide ; elles ne la démontrent jamais définitivement.",
                "En dissertation, l'exemple ne doit donc jamais remplacer l'argument. Un bon exemple est analysé : on montre ce qu'il fait voir, puis l'on se demande s'il ne pourrait pas être retourné contre la thèse. Kant remarque d'ailleurs, dans les Fondements de la métaphysique des mœurs (1785), qu'on ne peut pas tirer la moralité d'exemples : pour juger qu'un exemple est bon, il faut déjà posséder un critère du bien.",
              ],
              box: { label: "Règle", text: "Des exemples, même nombreux, ne prouvent pas une affirmation universelle ; un seul contre-exemple suffit à la réfuter. Un exemple doit être analysé, pas seulement cité." },
            },
          ],
          keyPoints: [
            "Savoir : croyance vraie et justifiée ; croire : adhérer sans justification objective suffisante.",
            "Platon (Ménon) : l'opinion vraie est instable ; la science l'attache par un raisonnement.",
            "Kant : opinion, foi, savoir, selon que l'assentiment est suffisant subjectivement et objectivement.",
            "Expliquer par les causes (sciences de la nature), comprendre par le sens (sciences humaines) : distinction de Dilthey.",
            "Un exemple illustre, une preuve établit ; un seul contre-exemple suffit à réfuter (Popper).",
          ],
          example: {
            statement: "Sujet : « Peut-on savoir sans croire ? » Montrez comment les repères croire/savoir et exemple/preuve permettent d'analyser ce sujet.",
            solution: [
              "Définir : savoir, c'est tenir pour vrai ce qui est vrai en ayant des raisons de le tenir pour vrai ; croire, c'est tenir pour vrai sans justification objective suffisante.",
              "Première lecture : le savoir semble exclure la croyance. Quand je sais que 2 + 2 = 4, je n'ai pas besoin de le croire : je peux le démontrer.",
              "Deuxième lecture : savoir, c'est encore tenir quelque chose pour vrai. La croyance apparaît alors comme le genre dont le savoir est une espèce : la croyance vraie et justifiée.",
              "Troisième lecture : la plupart de nos savoirs reposent sur la confiance. Je sais que la Terre a environ 4,5 milliards d'années sans l'avoir vérifié moi-même, parce que je fais confiance aux scientifiques.",
              "Repère exemple/preuve : citer un savant ne prouve rien par soi-même ; ce qui distingue le savoir, c'est que les preuves existent et peuvent être vérifiées, même si je ne les vérifie pas personnellement.",
              "Problème obtenu : si savoir, c'est dépasser la croyance par la preuve, comment expliquer que tout savoir humain repose en partie sur la confiance ? Le savoir abolit-il la croyance, ou la rend-il seulement raisonnable ?",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dites s'il s'agit d'expliquer ou de comprendre, et justifiez : a) « La glace fond parce que la température dépasse 0 °C. » b) « Il a démissionné parce qu'il jugeait la décision injuste. » c) « L'hyperinflation allemande de 1923 s'explique par la création massive de monnaie. » d) « Ce poème exprime le deuil de son auteur. »",
              hint: "Demandez-vous si l'on rattache le fait à des causes et à des lois, ou si l'on cherche le sens et les intentions d'un être humain.",
              solution: [
                "a) Expliquer : le phénomène est rattaché à une cause physique (l'élévation de la température au-delà du point de fusion).",
                "b) Comprendre : on saisit l'action à partir de la raison et de la valeur qui ont guidé l'agent (son jugement d'injustice).",
                "c) Expliquer : même s'il s'agit d'un fait humain, on le rattache à un mécanisme économique causal ; les sciences humaines expliquent aussi.",
                "d) Comprendre : on interprète le sens d'une œuvre et l'intention qui s'y exprime.",
                "Résultat : a et c relèvent de l'explication, b et d de la compréhension.",
              ],
            },
            {
              level: 2,
              statement: "Un élève écrit : « La violence est naturelle chez l'homme : la preuve, il y a toujours eu des guerres. » Évaluez ce raisonnement à l'aide des repères exemple/preuve et en fait/en droit.",
              hint: "Les guerres sont des exemples. Prouvent-elles une nature, c'est-à-dire une nécessité ? Distinguez ce qui arrive souvent de ce qui ne peut pas être autrement.",
              solution: [
                "Identifier la structure : l'élève passe de nombreux cas (les guerres) à une affirmation universelle sur la nature humaine.",
                "Repère exemple/preuve : les guerres illustrent la violence humaine, mais des exemples, même nombreux, ne prouvent pas qu'elle est naturelle ; elle pourrait venir des institutions, des rivalités pour les ressources ou de l'éducation.",
                "Repère en fait/en droit : que la guerre ait été fréquente en fait ne montre pas qu'elle soit inévitable ou légitime en droit. Ce qui est fréquent n'est pas pour autant nécessaire.",
                "Contre-exemples : de longues périodes de paix entre certains peuples et l'existence de sociétés qui règlent leurs conflits par le droit montrent que la violence n'est pas une fatalité.",
                "Résultat : le raisonnement est une généralisation à partir d'exemples, qui confond le fréquent et le naturel ; il faudrait d'autres arguments pour conclure.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « Une expérience peut-elle prouver quelque chose ? » Proposez une problématique et un plan détaillé en trois parties, en mobilisant les repères exemple/preuve et hypothèse/conséquence/conclusion.",
              hint: "Une expérience donne toujours des cas particuliers. Que peut-elle établir à propos d'une loi universelle ? Pensez à la différence entre confirmer et réfuter.",
              solution: [
                "Analyse : une expérience est une observation provoquée et contrôlée qui met une hypothèse à l'épreuve ; prouver, c'est établir la vérité d'une affirmation de manière à emporter l'accord de tous.",
                "Problématique : l'expérience semble la preuve par excellence dans les sciences ; mais elle ne porte que sur des cas particuliers, alors que les lois sont universelles. Que prouve-t-elle exactement ?",
                "I. L'expérience prouve : dans la méthode expérimentale, on tire d'une hypothèse des conséquences observables et l'on vérifie si elles se produisent ; c'est ce qui distingue la science de la simple opinion.",
                "II. Mais elle ne prouve pas l'universel : mille confirmations ne garantissent pas la suivante ; Hume montre déjà que nous passons des cas observés à la loi par habitude, non par démonstration.",
                "III. Elle prouve surtout négativement : un résultat contraire réfute l'hypothèse (Popper) ; une théorie qui résiste aux tests est corroborée, non démontrée définitivement.",
                "Conclusion : l'expérience peut prouver qu'une hypothèse est fausse, et rendre une théorie solide ; elle ne prouve jamais à elle seule une vérité universelle et définitive.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque repère à l'exemple qui l'illustre le mieux.",
            pairs: [
              { left: "Croire", right: "Être convaincu qu'un ami ne trahira jamais, sans pouvoir le prouver" },
              { left: "Savoir", right: "Démontrer qu'en géométrie euclidienne, la somme des angles d'un triangle vaut 180°" },
              { left: "Expliquer", right: "Rendre compte des marées par l'attraction de la Lune et du Soleil" },
              { left: "Comprendre", right: "Saisir pourquoi Antigone brave l'interdit de Créon" },
              { left: "Exemple", right: "Un cas particulier qui rend une idée générale concrète" },
              { left: "Contre-exemple", right: "Le mercure, liquide à température ambiante, face à « tous les métaux sont solides »" },
            ],
          },
          quiz: [
            {
              q: "Selon Kant, la foi (ou croyance) est un assentiment :",
              options: ["suffisant subjectivement mais pas objectivement", "suffisant objectivement mais pas subjectivement", "insuffisant de tous les points de vue, comme l'opinion", "suffisant de tous les points de vue, comme le savoir"],
              answer: 0,
              why: "Celui qui croit est convaincu (suffisance subjective) sans pouvoir fournir de preuve valable pour tous (insuffisance objective).",
            },
            {
              q: "Dans le Ménon, à quoi Platon compare-t-il les opinions vraies ?",
              options: ["À des lampes allumées dans le fond d'une caverne obscure", "Aux statues de Dédale, qu'il faut attacher", "À des graines que l'on sème dans un jardin bien entretenu", "À des pièces de monnaie usées"],
              answer: 1,
              why: "Comme les statues de Dédale, les opinions vraies s'enfuient si on ne les attache pas par un raisonnement : c'est ce qui en fait une science.",
            },
            {
              q: "Que suffit-il pour réfuter « tous les métaux sont solides à température ambiante » ?",
              options: ["Mille exemples de métaux solides", "Un vote des scientifiques", "Une définition plus précise du mot solide", "Un seul contre-exemple, comme le mercure"],
              answer: 3,
              why: "Une affirmation universelle tombe devant un seul cas contraire : le mercure est un métal liquide à température ambiante.",
            },
            {
              q: "Lequel de ces énoncés relève de la compréhension plutôt que de l'explication ?",
              options: ["L'eau bout à 100 °C sous pression normale", "Il a menti pour protéger son frère", "La Lune provoque les marées", "Le fer rouille au contact de l'oxygène et de l'eau"],
              answer: 1,
              why: "On saisit le sens d'une action humaine à partir de son intention (protéger son frère) ; les autres énoncés rattachent un phénomène à des causes.",
            },
            {
              q: "Pour Kant, pourquoi ne peut-on pas tirer la moralité d'exemples ?",
              options: ["Parce que les exemples sont toujours inventés par les philosophes", "Parce que la morale ne concerne pas les actions réelles", "Parce qu'il faut déjà un critère pour juger un exemple", "Parce que les exemples sont trop rares dans l'histoire humaine"],
              answer: 2,
              why: "Pour reconnaître qu'un exemple est moralement bon, il faut déjà savoir ce qu'est le bien : le critère précède l'exemple.",
            },
          ],
          trap: "Croire qu'un exemple prouve : enchaîner des cas qui vont dans le sens de sa thèse ne démontre rien ; il faut analyser l'exemple et se demander s'il existe un contre-exemple.",
          method: "Quand vous utilisez un exemple, écrivez-le en trois temps : le cas précis, ce qu'il montre (lien explicite avec la thèse), puis sa limite (ce qu'il ne montre pas). Ce dernier temps prépare naturellement la partie suivante.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reperes-action',
          title: 'Légal et légitime, obligation et contrainte, public et privé',
          minutes: 30,
          objectives: [
            "Distinguer le légal et le légitime, et identifier un conflit entre eux.",
            "Distinguer l'obligation et la contrainte à partir de la place de la liberté.",
            "Distinguer le public et le privé, et analyser les limites de l'intervention de l'État.",
            "Employer ces repères pour problématiser un sujet de morale ou de politique.",
          ],
          course: [
            {
              heading: "Légal et légitime",
              paragraphs: [
                "Est légal ce qui est conforme à la loi en vigueur dans un État donné, à un moment donné : la légalité est un fait, que l'on constate en lisant les textes. Est légitime ce qui est juste, fondé en raison ou reconnu comme tel : la légitimité est une question de droit, au sens de valeur. Une loi peut être légale sans être légitime : les lois de ségrégation raciale dans le sud des États-Unis, ou le statut des Juifs adopté par le régime de Vichy en octobre 1940, étaient légaux, et profondément injustes.",
                "Dans Antigone, tragédie de Sophocle (Ve siècle av. J.-C.), l'héroïne enterre son frère Polynice malgré l'édit du roi Créon qui l'interdit : elle invoque des lois non écrites, celles des dieux, supérieures aux décrets humains. Elle agit illégalement, mais au nom d'une légitimité plus haute. Le repère permet de penser la désobéissance civile, que défend Henry David Thoreau au XIXe siècle, ou la résistance à l'oppression, que la Déclaration des droits de l'homme et du citoyen de 1789 compte parmi les droits naturels (article 2).",
              ],
              box: { label: "Définition", text: "Légal : conforme à la loi positive (question de fait). Légitime : conforme à ce qui est juste ou fondé en raison (question de droit, au sens de valeur). Le légal n'est pas toujours légitime, et le légitime n'est pas toujours légal." },
            },
            {
              heading: "Obligation et contrainte",
              paragraphs: [
                "Une contrainte est une force extérieure qui s'impose à moi quoi que je veuille : des menottes, la menace d'une arme, la pesanteur. J'y cède par nécessité. Une obligation s'adresse au contraire à ma liberté : je peux ne pas la respecter, mais je reconnais que je le dois. Le contrat que j'ai signé, la promesse que j'ai faite ou la loi que j'estime juste m'obligent sans me forcer.",
                "Rousseau, dans Du contrat social (1762, livre I, chapitre 3), montre que la force ne crée pas le droit : céder à la force est un acte de nécessité, non de volonté, et l'on n'est obligé d'obéir qu'aux puissances légitimes. Si la force faisait le droit, il suffirait de devenir le plus fort pour avoir raison, et ce prétendu droit disparaîtrait dès que la force change de camp. Kant définit de son côté le devoir moral comme une obligation que la raison se donne à elle-même : il suppose un être libre.",
              ],
              box: { label: "Repère", text: "Contrainte : je ne peux pas faire autrement (nécessité extérieure). Obligation : je pourrais faire autrement, mais je reconnais que je dois (liberté et raison). On est contraint par la force, on est obligé par le droit ou le devoir." },
            },
            {
              heading: "Public et privé",
              paragraphs: [
                "Le public désigne ce qui concerne tous les membres d'une communauté et relève de l'autorité commune : les lois, les institutions, l'espace public, les affaires de la cité. Le privé désigne ce qui relève de l'individu ou de la famille et échappe en principe au regard et au pouvoir des autres : la vie intime, les convictions, le domicile. En France, l'article 9 du Code civil dispose que chacun a droit au respect de sa vie privée.",
                "La frontière entre les deux est un enjeu politique. Hannah Arendt, dans Condition de l'homme moderne (1958), décrit la cité grecque où l'espace public est celui de la parole et de l'action entre égaux, tandis que le foyer est le domaine de la nécessité vitale. La laïcité française s'appuie aussi sur cette distinction : depuis la loi de 1905, la République ne reconnaît aucun culte, tandis que chacun reste libre de ses convictions. Les régimes totalitaires se caractérisent, à l'inverse, par l'effacement de la vie privée sous le contrôle de l'État.",
              ],
              box: { label: "À retenir", text: "Public : ce qui concerne tous et relève de l'autorité commune. Privé : ce qui relève de l'individu et doit être protégé. Toute question sur les limites de l'État passe par cette distinction." },
            },
          ],
          keyPoints: [
            "Légal : conforme à la loi en vigueur (un fait) ; légitime : conforme au juste (une valeur).",
            "Antigone désobéit à l'édit de Créon au nom des lois non écrites : illégale, mais légitime à ses yeux.",
            "Contrainte : force extérieure qui s'impose ; obligation : devoir reconnu par une volonté libre.",
            "Rousseau : céder à la force est un acte de nécessité, non de volonté ; la force ne fait pas le droit.",
            "Public : ce qui concerne tous ; privé : ce qui relève de l'individu (article 9 du Code civil).",
          ],
          example: {
            statement: "Sujet : « Peut-on désobéir à une loi au nom de la justice ? » Montrez comment le repère légal/légitime structure l'analyse et le plan.",
            solution: [
              "Définir : désobéir, c'est refuser d'accomplir ce qu'une loi prescrit ; la justice est ici l'idée de ce qui est juste, de ce qui est dû à chacun.",
              "Appliquer le repère : la loi définit le légal, la justice renvoie au légitime. Le sujet demande si le légitime peut l'emporter sur le légal.",
              "Thèse 1 : non, car si chacun désobéit au nom de sa propre idée du juste, la loi commune perd toute autorité ; dans le Criton de Platon, Socrate refuse de s'évader pour ne pas détruire les lois de la cité.",
              "Thèse 2 : oui, car une loi peut être injuste ; Antigone, ou les résistants sous l'Occupation, montrent qu'obéir à une loi injuste peut rendre complice.",
              "Préciser : la désobéissance n'est légitime qu'à certaines conditions (loi gravement injuste, action publique et non violente, acceptation des conséquences), comme dans la désobéissance civile.",
              "Conclusion : on peut désobéir au nom de la justice, mais le repère montre que cela exige de justifier sa légitimité devant tous, et pas seulement devant sa propre conscience.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque situation, contrainte ou obligation, en justifiant : a) Un automobiliste s'arrête parce que la route est barrée par un éboulement. b) Un témoin dit la vérité au tribunal parce qu'il a prêté serment. c) Un otage remet ses clés sous la menace d'une arme. d) Un élève rend un devoir promis à son professeur alors que personne ne le surveille.",
              hint: "Demandez-vous si la personne aurait pu, matériellement, agir autrement : si oui, c'est une obligation ; sinon, une contrainte.",
              solution: [
                "a) Contrainte : l'éboulement rend le passage physiquement impossible ; aucune liberté de choix n'est en jeu.",
                "b) Obligation : le témoin pourrait mentir, mais il est tenu par son serment (et par la loi, qui punit le faux témoignage).",
                "c) Contrainte : l'otage cède à la force, par nécessité, et non par volonté ; il n'a aucun devoir envers son agresseur.",
                "d) Obligation : rien ne l'y force, mais il reconnaît qu'il doit tenir sa promesse ; c'est une obligation morale.",
                "Résultat : a et c sont des contraintes, b et d des obligations.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque cas, dites si l'action est légale, légitime, les deux ou ni l'un ni l'autre, en justifiant : a) En 1955, à Montgomery (Alabama), Rosa Parks refuse de céder sa place à un passager blanc dans un bus. b) Une contribuable paie ses impôts dans une démocratie. c) Sous l'Occupation, un fonctionnaire applique un ordre de déportation conforme aux textes du régime en place.",
              hint: "Examinez séparément les deux questions : l'action est-elle conforme à la loi en vigueur ? Est-elle juste ?",
              solution: [
                "a) Illégale, car la réglementation locale imposait la ségrégation dans les bus ; légitime, car elle défend l'égalité des droits contre une loi injuste. Son geste devient un symbole du mouvement pour les droits civiques.",
                "b) Légale et légitime : l'impôt est fixé par la loi et finance des charges communes ; la Déclaration de 1789 prévoit une contribution commune répartie entre les citoyens selon leurs facultés (article 13).",
                "c) Légale au regard des textes du régime, mais illégitime : participer à un crime ne devient pas juste parce qu'un texte l'ordonne, et obéir aux ordres n'efface pas la responsabilité personnelle.",
                "Résultat : a illégale mais légitime, b légale et légitime, c légale mais illégitime.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « L'État doit-il se mêler de notre vie privée ? » Analysez le sujet, formulez le problème et proposez un plan en trois parties.",
              hint: "Le repère public/privé est central, mais pensez aussi à ce qui se passe dans la sphère privée : violences, protection des plus faibles. « Se mêler » n'est pas la même chose que « protéger ».",
              solution: [
                "Analyse : l'État est l'autorité politique qui détient le pouvoir de faire les lois ; la vie privée est ce qui relève de l'individu (intimité, convictions, famille) ; « se mêler » suggère une intrusion ; « doit-il » demande s'il en a le devoir ou le droit.",
                "Problème : la vie privée semble être précisément ce qui échappe à l'État et garantit la liberté ; mais si l'État ne s'y intéresse jamais, les plus faibles peuvent y être opprimés sans recours.",
                "I. L'État ne doit pas s'en mêler : Locke, dans la Lettre sur la tolérance (1689), limite le pouvoir du magistrat aux intérêts civils ; John Stuart Mill, dans De la liberté (1859), soutient que l'on ne peut contraindre un individu que pour empêcher qu'il nuise à autrui.",
                "II. Mais le privé n'est pas une zone de non-droit : violences conjugales, protection de l'enfance, santé publique ; dans les années 1970, des militantes féministes affirment que « le privé est politique ».",
                "III. L'État doit protéger la vie privée plutôt que la gouverner : il intervient pour garantir les droits de chacun, jamais pour imposer une conception de la vie bonne ; la surveillance généralisée devient alors le danger principal.",
                "Conclusion : l'État ne doit pas se mêler de notre vie privée, mais il doit la protéger, y compris contre ceux qui y exercent une domination.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : légal, légitime, obligation, contrainte, public, privé.",
            statements: [
              { text: "Tout ce qui est légal est légitime.", true: false, why: "Une loi peut être injuste : les lois de ségrégation étaient légales." },
              { text: "On peut être obligé sans être contraint.", true: true, why: "Une promesse m'oblige, mais je reste physiquement libre de ne pas la tenir." },
              { text: "Selon Rousseau, céder à la force est un devoir.", true: false, why: "C'est un acte de nécessité, non de volonté : la force ne crée aucun devoir." },
              { text: "La légalité se constate dans les textes en vigueur.", true: true, why: "C'est une question de fait : il suffit de lire la loi." },
              { text: "Antigone enterre son frère conformément à l'édit de Créon.", true: false, why: "Elle viole l'édit au nom des lois non écrites des dieux." },
              { text: "En France, le respect de la vie privée est un droit reconnu par la loi.", true: true, why: "L'article 9 du Code civil le garantit." },
              { text: "Une obligation supprime la liberté.", true: false, why: "Elle la suppose : seul un être libre peut être obligé, une pierre est seulement contrainte." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui est légitime ?",
              options: ["Ce qui est écrit dans le Code pénal", "Ce que la majorité des gens fait", "Ce qui est puni par une sanction", "Ce qui est juste ou fondé en raison"],
              answer: 3,
              why: "Le légitime relève du droit au sens de la valeur : il désigne ce qui est juste, que la loi le reconnaisse ou non.",
            },
            {
              q: "Dans Antigone, au nom de quoi l'héroïne désobéit-elle à Créon ?",
              options: ["Des lois non écrites des dieux", "De son intérêt financier personnel", "D'un vote du peuple de Thèbes réuni en assemblée", "D'une loi écrite plus récente que l'édit"],
              answer: 0,
              why: "Antigone oppose à l'édit du roi des lois non écrites, divines, qu'elle juge supérieures aux décrets humains.",
            },
            {
              q: "Quelle situation relève d'une contrainte et non d'une obligation ?",
              options: ["Tenir une promesse faite à un ami", "Payer une dette que l'on a reconnue", "Être enfermé à clé", "Respecter un contrat signé librement"],
              answer: 2,
              why: "L'enfermement s'impose quoi que je veuille ; les autres situations s'adressent à ma liberté, que je pourrais refuser d'exercer.",
            },
            {
              q: "Selon Rousseau, céder à la force est :",
              options: ["un devoir moral", "un acte de nécessité, non de volonté", "une preuve de sagesse politique supérieure", "le fondement de tout droit"],
              answer: 1,
              why: "Pour Rousseau, la force ne fait pas le droit : on cède à la force par nécessité, on n'obéit par devoir qu'aux puissances légitimes.",
            },
            {
              q: "Quel texte français protège le droit au respect de la vie privée ?",
              options: ["Le Code civil, article 9", "La loi de 1905 sur la séparation des Églises et de l'État", "Le Code de la route", "Le Code du travail, article premier"],
              answer: 0,
              why: "L'article 9 du Code civil dispose que chacun a droit au respect de sa vie privée.",
            },
          ],
          trap: "Confondre légal et légitime, en tenant la loi pour juste par définition, ou au contraire en croyant qu'il suffit de juger une loi injuste pour avoir le droit de la violer sans justification.",
          method: "Devant un sujet de morale ou de politique, testez systématiquement trois repères : légal/légitime, obligation/contrainte, public/privé. Pour chacun, écrivez une phrase qui montre en quoi la distinction change la réponse, puis gardez celui qui ouvre le problème le plus net.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reperes-concepts',
          title: 'Universel, général, particulier, singulier et autres distinctions',
          minutes: 30,
          objectives: [
            "Distinguer l'universel, le général, le particulier et le singulier.",
            "Distinguer l'essentiel et l'accidentel, le nécessaire et le contingent, l'absolu et le relatif.",
            "Distinguer l'objectif, le subjectif et l'intersubjectif.",
            "Employer ces repères pour préciser la portée d'une affirmation.",
          ],
          course: [
            {
              heading: "Universel, général, particulier, singulier",
              paragraphs: [
                "Ces quatre termes mesurent l'extension d'une affirmation, c'est-à-dire le nombre de cas qu'elle couvre. Est universel ce qui vaut pour tous les cas, sans exception, et en droit : « tous les hommes sont mortels », « la somme des angles d'un triangle euclidien vaut 180° ». Est général ce qui vaut pour la plupart des cas, en fait, et admet des exceptions : « en France, on dîne vers 20 heures ». L'universel ne souffre aucune exception ; le général en tolère.",
                "Le particulier désigne une partie d'un ensemble : « certains hommes sont musiciens ». Le singulier désigne un être unique, que l'on ne peut confondre avec aucun autre : Socrate, cette œuvre, ce moment de ma vie. Le singulier n'est pas seulement un cas parmi d'autres : il a une identité propre. C'est pourquoi on dit que la science cherche des lois générales ou universelles, tandis que l'art ou l'histoire s'intéressent aussi au singulier.",
              ],
              box: { label: "Définition", text: "Universel : vaut pour tous, sans exception, en droit. Général : vaut pour la plupart, en fait, avec des exceptions. Particulier : vaut pour une partie d'un ensemble. Singulier : désigne un être unique." },
            },
            {
              heading: "Essentiel et accidentel, nécessaire et contingent",
              paragraphs: [
                "L'essence d'une chose est ce qui fait qu'elle est ce qu'elle est : si on la retire, la chose disparaît. Est essentiel ce qui appartient à l'essence (pour un triangle, avoir trois côtés) ; est accidentel ce qui pourrait être autrement sans que la chose cesse d'être elle-même (pour un triangle, être tracé en rouge ; pour un être humain, être grand ou petit). Ces termes viennent de la philosophie d'Aristote.",
                "Est nécessaire ce qui ne peut pas ne pas être, ou ne peut pas être autrement : que 2 + 2 fasse 4, qu'un triangle ait trois angles. Est contingent ce qui peut être ou ne pas être : que j'aie choisi telle spécialité, qu'il pleuve demain. Le repère permet d'interroger le destin, la liberté (si tout est nécessaire, suis-je libre ?) ou l'histoire (les événements auraient-ils pu se passer autrement ?).",
              ],
              box: { label: "Repère", text: "Essentiel/accidentel : ce qui définit une chose, ou ce qui lui arrive sans la définir. Nécessaire/contingent : ce qui ne peut pas être autrement, ou ce qui aurait pu ne pas être." },
            },
            {
              heading: "Absolu et relatif ; objectif, subjectif, intersubjectif",
              paragraphs: [
                "Est absolu ce qui ne dépend de rien d'autre, ce qui vaut par soi et sans condition ; est relatif ce qui dépend d'autre chose, d'un point de vue, d'une époque, d'une culture. « Grand » est relatif (grand par rapport à quoi ?) ; une règle morale comme « ne pas torturer un innocent » prétend au contraire valoir absolument. Dire que tout est relatif est une thèse qui se contredit si on la tient elle-même pour absolue.",
                "Est objectif ce qui appartient à l'objet et vaut indépendamment de celui qui juge (la masse d'un corps) ; est subjectif ce qui dépend du sujet, de ses sensations ou de ses préférences (trouver un plat trop salé). Entre les deux, l'intersubjectif désigne ce qui est reconnu par plusieurs sujets à la suite d'un échange et d'un accord : les règles d'un jeu, les conventions d'une langue, ou les résultats scientifiques validés par une communauté de chercheurs.",
                "Kant montre, à propos du jugement de goût, qu'une appréciation peut être subjective tout en prétendant à l'universalité : quand je dis « c'est beau », je n'énonce pas une propriété mesurable de l'objet, mais je demande l'accord de tous (Critique de la faculté de juger, 1790). Les repères se croisent donc, et c'est en les combinant que l'on pense avec finesse.",
              ],
              box: { label: "Définition", text: "Absolu : sans condition ; relatif : qui dépend d'autre chose. Objectif : qui vaut indépendamment du sujet ; subjectif : qui dépend du sujet ; intersubjectif : reconnu par accord entre des sujets." },
            },
          ],
          keyPoints: [
            "Universel : tous, sans exception (en droit). Général : la plupart (en fait). Particulier : certains. Singulier : un seul, unique.",
            "Essentiel : ce qui définit une chose ; accidentel : ce qui pourrait changer sans qu'elle cesse d'être elle-même.",
            "Nécessaire : ne peut pas être autrement ; contingent : aurait pu ne pas être.",
            "Absolu : sans condition ; relatif : qui dépend d'un point de vue ou d'un rapport.",
            "Objectif, subjectif, intersubjectif : selon que la valeur dépend de l'objet, du sujet ou d'un accord entre sujets.",
            "« Tout est relatif » se contredit si on l'affirme comme une vérité absolue.",
          ],
          example: {
            statement: "Analysez l'affirmation « Les goûts et les couleurs, ça ne se discute pas » à l'aide des repères objectif/subjectif/intersubjectif et universel/général.",
            solution: [
              "Sens : l'affirmation soutient que les préférences esthétiques sont purement subjectives et qu'aucun argument ne peut les départager.",
              "Ce qui est juste : l'agrément (aimer le sucré, préférer une couleur) dépend bien de chaque sujet ; il est subjectif et relatif.",
              "Première limite : on discute pourtant sans cesse des œuvres, et il existe des critères partagés (maîtrise, cohérence, originalité), ce qui suggère une dimension intersubjective.",
              "Deuxième limite : Kant distingue l'agréable, subjectif et privé, du beau, subjectif mais qui prétend à l'universalité ; en disant « c'est beau », je demande l'accord de tous.",
              "Repère universel/général : que les goûts divergent en général ne prouve pas qu'aucun jugement de goût ne puisse prétendre, en droit, à l'universel.",
              "Conclusion : la formule vaut pour l'agréable, mais elle confond l'agréable et le beau. On peut discuter du beau, chercher un accord, sans pouvoir le démontrer comme un théorème.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque énoncé est universel, général, particulier ou singulier : a) « Tout nombre pair est divisible par 2. » b) « Les adolescents se couchent tard le week-end. » c) « Napoléon Bonaparte a été sacré empereur en 1804. » d) « Certains métaux sont attirés par un aimant. »",
              hint: "Demandez-vous combien de cas l'énoncé couvre (tous, la plupart, quelques-uns, un seul) et s'il admet des exceptions.",
              solution: [
                "a) Universel : la propriété vaut pour tous les nombres pairs, sans exception possible, par définition.",
                "b) Général : l'énoncé décrit une tendance fréquente, qui admet de nombreuses exceptions.",
                "c) Singulier : il porte sur un individu unique et un événement daté.",
                "d) Particulier : il porte sur une partie seulement des métaux (le fer, le nickel, le cobalt par exemple).",
                "Résultat : a universel, b général, c singulier, d particulier.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque cas, dites ce qui est essentiel et ce qui est accidentel, puis ce qui est nécessaire et ce qui est contingent : a) Pour un cercle : avoir tous ses points à égale distance du centre ; avoir un rayon de 3 cm. b) Pour Socrate : être un homme ; être mort en 399 av. J.-C., condamné par un tribunal athénien.",
              hint: "Une propriété est essentielle si, sans elle, la chose cesserait d'être ce qu'elle est. Un fait est nécessaire s'il ne pouvait pas se produire autrement.",
              solution: [
                "a) Avoir tous ses points à égale distance du centre est essentiel (c'est la définition du cercle) et nécessaire (un cercle ne peut pas ne pas l'avoir).",
                "a) Avoir un rayon de 3 cm est accidentel (un cercle de 5 cm reste un cercle) et contingent (on aurait pu tracer un autre cercle).",
                "b) Être un homme est essentiel pour Socrate, et il est nécessaire qu'un homme meure un jour : tout homme est mortel.",
                "b) En revanche, mourir en 399 av. J.-C. par une condamnation est accidentel et contingent : le procès aurait pu tourner autrement, Socrate aurait pu s'enfuir.",
                "Résultat : la mort de Socrate est nécessaire en tant qu'il est homme, mais ses circonstances sont contingentes ; distinguer les deux évite de confondre destin et nécessité.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « La diversité des cultures rend-elle impossible une morale universelle ? » Formulez le problème et proposez un plan en trois parties, en mobilisant les repères universel/général et absolu/relatif.",
              hint: "La diversité des mœurs est un fait ; l'universalité d'une morale est une exigence de droit. Le passage de l'un à l'autre est-il légitime ?",
              solution: [
                "Problème : les règles morales varient selon les sociétés, ce qui suggère qu'elles sont relatives ; pourtant nous condamnons certaines pratiques partout (l'esclavage, la torture), ce qui suppose une exigence universelle.",
                "I. La diversité semble ruiner l'universel : Montaigne, dans le chapitre « Des cannibales » des Essais, observe que chacun appelle barbarie ce qui n'est pas de son usage ; les mœurs paraissent relatives à chaque culture.",
                "II. Mais la diversité est un fait général, non une preuve en droit : de ce que les hommes pensent différemment, il ne suit pas que tout se vaille. Lévi-Strauss, dans Race et histoire (1952), note que le barbare est d'abord celui qui croit à la barbarie : le relativisme lui-même suppose une exigence universelle de respect.",
                "III. Une morale universelle est possible si elle reste formelle et minimale : respecter la dignité de toute personne (la Déclaration universelle des droits de l'homme de 1948), tout en laissant place à la diversité des manières de vivre.",
                "Conclusion : la diversité des cultures rend impossible une morale universelle qui imposerait partout les mêmes coutumes, mais non une morale qui fixe des limites universelles au respect dû à chacun.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque exemple au repère qu'il illustre.",
            pairs: [
              { left: "Les étés sont chauds dans le sud de la France", right: "Général : vrai le plus souvent, avec des exceptions" },
              { left: "La Joconde, conservée au Louvre", right: "Singulier : un être unique" },
              { left: "Être grand ou petit, pour un être humain", right: "Accidentel : peut changer sans changer l'essence" },
              { left: "Que 7 soit un nombre premier", right: "Nécessaire : ne peut pas être autrement" },
              { left: "Trouver ce café trop amer", right: "Subjectif : dépend de celui qui juge" },
              { left: "Les règles du jeu d'échecs", right: "Intersubjectif : établi par un accord entre sujets" },
            ],
          },
          quiz: [
            {
              q: "Quelle affirmation est générale et non universelle ?",
              options: ["Tout cercle est rond", "Les chats aiment dormir au soleil", "Tout nombre multiplié par zéro donne zéro", "Socrate est né à Athènes"],
              answer: 1,
              why: "C'est une tendance fréquente qui admet des exceptions ; les deux énoncés qui commencent par « tout » valent sans exception, et le dernier est singulier.",
            },
            {
              q: "Qu'est-ce qu'un être singulier ?",
              options: ["Un être bizarre ou étrange", "Un cas représentatif d'une espèce", "Une partie quelconque d'un ensemble", "Un être unique, irremplaçable"],
              answer: 3,
              why: "Le singulier désigne un individu unique, qu'on ne peut confondre avec aucun autre, et non ce qui est bizarre.",
            },
            {
              q: "Est contingent ce qui :",
              options: ["aurait pu ne pas être", "ne peut pas être autrement", "définit l'essence d'une chose", "vaut pour tous sans exception"],
              answer: 0,
              why: "Le contingent s'oppose au nécessaire : il peut être ou ne pas être.",
            },
            {
              q: "Les règles de la grammaire française sont plutôt :",
              options: ["objectives, comme la masse d'un corps", "purement subjectives, propres à chacun", "intersubjectives, fruits d'un accord", "absolues, valables pour toutes les langues"],
              answer: 2,
              why: "Elles ne dépendent ni d'une propriété des choses ni de chaque individu : elles sont établies et reconnues par une communauté de locuteurs.",
            },
            {
              q: "Pourquoi « tout est relatif » pose-t-il problème ?",
              options: ["Parce que c'est une phrase trop courte", "Parce qu'elle n'est vraie que dans la théorie physique d'Einstein", "Parce qu'elle est contraire à la morale", "Parce qu'elle se contredit si on la tient pour absolue"],
              answer: 3,
              why: "Si tout est relatif, cette affirmation l'est aussi ; si elle vaut absolument, alors tout n'est pas relatif.",
            },
          ],
          trap: "Confondre le général et l'universel : écrire « l'homme est égoïste » en s'appuyant sur des cas fréquents, alors qu'une affirmation universelle tombe devant un seul contre-exemple.",
          method: "Relisez chaque phrase de votre copie en vous demandant si elle vaut pour tous, pour la plupart, pour certains ou pour un seul. Ajoutez le mot exact (« toujours », « souvent », « parfois ») : cette précision évite à elle seule beaucoup d'affirmations fausses.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE SUJET : CONSCIENCE, INCONSCIENT, TEMPS                             */
    /* ==================================================================== */
    {
      id: 'le-sujet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-conscience',
          title: 'La conscience : se connaître soi-même ?',
          minutes: 35,
          objectives: [
            "Définir la conscience et distinguer conscience spontanée, conscience réfléchie et conscience morale.",
            "Expliquer le cogito cartésien et la thèse de la transparence de la conscience.",
            "Analyser les limites de la connaissance de soi par la seule conscience.",
            "Construire un problème sur le rapport entre conscience de soi et connaissance de soi.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la conscience ?",
              paragraphs: [
                "Le mot vient du latin conscientia, « savoir avec » : être conscient, c'est savoir ce que l'on fait, pense ou ressent, en même temps qu'on le fait. On distingue la conscience spontanée (ou immédiate), qui accompagne nos actes sans retour sur eux, la conscience réfléchie, par laquelle l'esprit se prend lui-même pour objet, et la conscience morale, qui juge nos actions en termes de bien et de mal.",
                "Husserl, au début du XXe siècle, souligne que toute conscience est conscience de quelque chose : elle est toujours tournée vers un objet (un arbre perçu, un souvenir, une idée). C'est ce qu'il appelle l'intentionnalité. Sartre en tire que la conscience n'est pas une boîte remplie de contenus, mais un mouvement vers le monde.",
                "Hegel souligne que l'homme ne se contente pas d'être, comme une chose : il est aussi pour soi, il se dédouble et se contemple. Il le fait par la pensée, mais aussi en transformant le monde extérieur pour s'y reconnaître : dans son Esthétique, il évoque l'enfant qui jette des pierres dans une rivière et admire les cercles qui se forment à la surface de l'eau, comme une œuvre où il contemple sa propre action.",
              ],
              box: { label: "Définition", text: "Conscience : connaissance, plus ou moins claire, qu'un sujet a de ses états, de ses actes et du monde. Spontanée (elle accompagne), réfléchie (elle se prend pour objet), morale (elle juge le bien et le mal)." },
            },
            {
              heading: "Le cogito : la conscience comme première certitude",
              paragraphs: [
                "Dans le Discours de la méthode (1637) puis dans les Méditations métaphysiques (1641), Descartes cherche un fondement indubitable pour la connaissance. Il doute des sens, qui nous trompent parfois, de l'existence du monde (je pourrais rêver), et même des vérités mathématiques (un malin génie pourrait me tromper). Mais au moment même où je doute, je pense, et pour penser il faut être. La formule du Discours le dit : « je pense, donc je suis ».",
                "La conscience apparaît alors comme la seule réalité que je connais immédiatement et avec certitude : je suis une chose qui pense, c'est-à-dire qui doute, conçoit, affirme, nie, veut, imagine et sent. Dans la deuxième Méditation, l'analyse d'un morceau de cire conduit Descartes à conclure que l'esprit est plus aisé à connaître que le corps. La conscience serait ainsi transparente à elle-même : rien ne se passerait en moi que je ne puisse connaître.",
                "Locke, dans l'Essai sur l'entendement humain (1690), fonde l'identité personnelle sur la conscience : je suis la même personne aussi loin que ma conscience peut s'étendre, par la mémoire, vers mes actions passées. Celui qui ne se souvient plus de ce qu'il a fait est-il encore la même personne ? La question engage directement la responsabilité.",
              ],
              box: { label: "À retenir", text: "Descartes : le cogito est la première vérité certaine ; la conscience se saisit elle-même immédiatement. Locke : l'identité personnelle repose sur la conscience et la mémoire." },
            },
            {
              heading: "Avoir conscience de soi, est-ce se connaître ?",
              paragraphs: [
                "Avoir conscience de soi n'est pas encore se connaître. La conscience m'assure que j'existe, non de ce que je suis : mon caractère, mes motifs réels, mes préjugés peuvent m'échapper. Hume, dans le Traité de la nature humaine (1739), affirme que lorsqu'il entre au plus intime de lui-même, il ne tombe jamais sur un moi stable, mais toujours sur une perception particulière : chaleur, froid, plaisir, douleur. Le moi ne serait qu'un faisceau de perceptions qui se succèdent.",
                "Les autres et nos actes nous révèlent parfois mieux que l'introspection. Nous nous découvrons dans nos choix, dans nos œuvres et dans le regard d'autrui : Sartre, dans L'Être et le Néant (1943), décrit la honte, où je me découvre soudain tel qu'autrui me voit. Nietzsche soupçonne la conscience d'être la partie la plus superficielle de notre vie psychique, et Freud montrera qu'une part décisive de nous-mêmes échappe à la conscience.",
                "Le précepte « Connais-toi toi-même », inscrit au temple d'Apollon à Delphes et que Socrate a fait sien, ne demandait pas d'abord une introspection : il invitait à connaître ses limites et sa condition de mortel, et chez Socrate, à examiner ses opinions dans le dialogue. La connaissance de soi est une tâche, jamais un acquis.",
              ],
              box: { label: "Repère", text: "Médiat/immédiat : la conscience donne une saisie immédiate de soi ; la connaissance de soi est médiate, elle passe par autrui, par les actes, par les œuvres et par la réflexion." },
            },
          ],
          keyPoints: [
            "Conscience : du latin conscientia, « savoir avec » ; spontanée, réfléchie, morale.",
            "Husserl : toute conscience est conscience de quelque chose (intentionnalité).",
            "Descartes : « je pense, donc je suis », première certitude qui résiste au doute.",
            "Locke : l'identité personnelle repose sur la conscience et la mémoire.",
            "Hume : l'introspection ne trouve qu'un faisceau de perceptions, pas un moi stable.",
            "Avoir conscience de soi n'est pas se connaître : la connaissance de soi passe par autrui, les actes, les œuvres.",
          ],
          example: {
            statement: "Sujet : « La conscience que nous avons de nous-mêmes nous permet-elle de nous connaître ? » Analysez le sujet et proposez un plan détaillé.",
            solution: [
              "Analyse : la conscience de soi est le savoir immédiat que j'ai de mes états ; se connaître, c'est savoir ce que l'on est vraiment (caractère, motifs, limites). Le sujet demande si la première suffit à la seconde.",
              "Problème : la conscience semble le meilleur accès à soi, puisque personne n'est mieux placé que moi pour savoir ce que je pense ; mais elle est juge et partie, et peut se tromper sur elle-même.",
              "I. La conscience est un accès privilégié à soi : le cogito de Descartes est la première certitude ; Locke fonde l'identité personnelle sur la conscience.",
              "II. Mais la conscience ne livre pas ce que nous sommes : Hume n'y trouve qu'une suite de perceptions ; nous nous illusionnons sur nos motifs ; Freud soutient qu'une part de notre vie psychique est inconsciente.",
              "III. Se connaître passe par des médiations : les actes, le regard d'autrui (Sartre), les œuvres où l'on se reconnaît (Hegel). La connaissance de soi devient une tâche jamais achevée.",
              "Conclusion : la conscience de soi est la condition de la connaissance de soi, non sa garantie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez de quelle forme de conscience il s'agit (spontanée, réfléchie ou morale), en justifiant : a) Un cycliste voit un trou et l'évite sans s'arrêter de discuter. b) Le soir, une élève se demande pourquoi elle s'est emportée contre son frère. c) Un témoin hésite à dénoncer un ami qui a volé. d) En lisant un roman passionnant, vous suivez l'histoire sans penser à vous-même.",
              hint: "Demandez-vous si la conscience accompagne simplement l'action, si elle revient sur elle-même, ou si elle juge en termes de bien et de mal.",
              solution: [
                "a) Conscience spontanée : le cycliste perçoit le trou et agit en conséquence, sans faire de son acte un objet de réflexion.",
                "b) Conscience réfléchie : l'élève revient sur son propre comportement et en cherche les raisons.",
                "c) Conscience morale : le témoin juge ce qu'il doit faire, entre fidélité à son ami et justice.",
                "d) Conscience spontanée : le lecteur est conscient de l'histoire, tourné vers elle, sans se prendre lui-même pour objet.",
                "Résultat : a et d relèvent de la conscience spontanée, b de la conscience réfléchie, c de la conscience morale.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quatre étapes comment le doute de Descartes conduit au cogito, puis dites ce que cette certitude apprend, et ce qu'elle n'apprend pas, sur le moi.",
              hint: "Partez des raisons de douter (sens, rêve, malin génie), puis cherchez ce qui résiste même au doute le plus extrême.",
              solution: [
                "Étape 1 : Descartes décide de rejeter comme faux tout ce qui laisse place au moindre doute, afin de trouver un fondement certain.",
                "Étape 2 : il doute des sens (ils trompent parfois), du monde extérieur (je pourrais rêver), et même des mathématiques (un malin génie pourrait me tromper).",
                "Étape 3 : mais douter, c'est penser ; et même si je suis trompé, il faut que j'existe pour être trompé.",
                "Étape 4 : d'où la première certitude : je pense, donc je suis ; je suis une chose qui pense.",
                "Portée : le cogito m'apprend que j'existe et que je suis un être pensant ; il ne m'apprend ni mon caractère, ni l'origine de mes désirs, ni ce que les autres voient en moi.",
              ],
            },
            {
              level: 3,
              statement: "Explication de texte (type bac). Texte d'entraînement, rédigé pour l'exercice : « Nous croyons nous connaître parce que nous vivons avec nous-mêmes à chaque instant. Mais cette proximité est justement ce qui nous aveugle : on ne voit bien que ce dont on peut s'éloigner. Je suis toujours trop près de moi pour me juger, trop intéressé à me trouver des excuses. C'est pourquoi l'ami qui me dit ce qu'il voit de moi m'apprend souvent plus que des heures passées à m'observer. Encore faut-il que je consente à l'entendre : la connaissance de soi commence moins par un regard intérieur que par l'acceptation d'un regard extérieur. » Dégagez la thèse, la structure du texte et son enjeu, puis discutez-le.",
              hint: "Repérez l'opinion que le texte critique (première phrase), l'argument central (la proximité aveugle), l'exemple (l'ami) et la condition finale (consentir à entendre).",
              solution: [
                "Thèse : la connaissance de soi ne vient pas d'abord de l'introspection, mais du regard d'autrui, à condition de l'accepter.",
                "Structure, premier moment (phrase 1) : l'opinion commune, selon laquelle la proximité avec soi garantit la connaissance de soi.",
                "Deuxième moment (phrases 2 et 3) : la réfutation ; la proximité aveugle, car on ne voit bien qu'à distance, et l'intérêt nous rend partiaux envers nous-mêmes.",
                "Troisième moment (phrases 4 et 5) : la solution et sa condition ; l'ami offre la distance qui manque, mais encore faut-il consentir à l'entendre.",
                "Enjeu : remettre en cause la transparence de la conscience défendue par Descartes, et faire de la connaissance de soi une affaire de relation et d'humilité.",
                "Discussion : le texte rejoint Sartre (je me découvre dans le regard d'autrui) ; mais autrui peut aussi se tromper ou me juger selon ses propres intérêts, de sorte que son regard doit être lui-même examiné par la réflexion. La connaissance de soi exige donc à la fois le regard extérieur et le travail de la conscience.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la conscience.",
            statements: [
              { text: "Conscience vient du latin conscientia, « savoir avec ».", true: true, why: "Être conscient, c'est savoir ce que l'on fait en même temps qu'on le fait." },
              { text: "Pour Descartes, l'existence du corps est plus certaine que celle de l'esprit.", true: false, why: "C'est l'inverse : l'esprit qui pense est la première certitude, le corps peut être mis en doute." },
              { text: "Avoir conscience de soi, c'est déjà se connaître parfaitement.", true: false, why: "La conscience assure que j'existe, pas ce que je suis : motifs, caractère et préjugés peuvent m'échapper." },
              { text: "Selon Husserl, toute conscience est conscience de quelque chose.", true: true, why: "C'est l'intentionnalité : la conscience est toujours tournée vers un objet." },
              { text: "Hume affirme trouver en lui un moi simple et permanent.", true: false, why: "Il ne trouve que des perceptions particulières, d'où l'idée d'un faisceau de perceptions." },
              { text: "Pour Locke, l'identité personnelle s'étend aussi loin que la conscience peut atteindre le passé.", true: true, why: "La mémoire relie la conscience présente aux actions passées et fonde l'identité de la personne." },
            ],
          },
          quiz: [
            {
              q: "Quelle formule Descartes rend-il célèbre dans le Discours de la méthode ?",
              options: ["Connais-toi toi-même", "Tout est relatif", "Je pense, donc je suis", "Je sais que je ne sais rien"],
              answer: 2,
              why: "« Je pense, donc je suis » est la première certitude qui résiste au doute méthodique.",
            },
            {
              q: "Que désigne l'intentionnalité chez Husserl ?",
              options: ["Le fait que toute conscience vise un objet", "La volonté de bien faire en toute situation", "Une intention cachée, inconsciente et refoulée", "La capacité de prévoir l'avenir avec exactitude"],
              answer: 0,
              why: "Toute conscience est conscience de quelque chose : elle est toujours dirigée vers un objet.",
            },
            {
              q: "Selon Hume, que trouve-t-on quand on regarde au plus intime de soi ?",
              options: ["Une âme immortelle et simple", "Un moi transparent et stable", "Rien du tout, pas même des sensations", "Des perceptions particulières"],
              answer: 3,
              why: "Hume ne rencontre jamais de moi stable, mais toujours une perception particulière : le moi est un faisceau de perceptions.",
            },
            {
              q: "Sur quoi Locke fonde-t-il l'identité personnelle ?",
              options: ["Sur le corps et ses organes", "Sur la conscience et la mémoire", "Sur le nom inscrit à l'état civil", "Sur le jugement d'autrui"],
              answer: 1,
              why: "Je suis la même personne aussi loin que ma conscience peut remonter, par la mémoire, vers mes actions passées.",
            },
            {
              q: "Quelle forme de conscience juge nos actions en termes de bien et de mal ?",
              options: ["La conscience spontanée", "La conscience réfléchie", "La conscience morale", "La conscience perceptive"],
              answer: 2,
              why: "La conscience morale évalue nos actes ; la conscience réfléchie revient sur eux sans forcément les juger moralement.",
            },
          ],
          trap: "Confondre conscience de soi et connaissance de soi : affirmer que nous nous connaissons puisque nous avons conscience de nos pensées, sans voir que la conscience peut se tromper sur ses propres motifs.",
          method: "Retenez chaque thèse avec son argument en une phrase (par exemple : Descartes, douter c'est penser, or penser suppose d'exister). Un nom d'auteur sans argument ne rapporte rien dans une copie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'l-inconscient',
          title: 'L\'inconscient : sommes-nous maîtres de nous-mêmes ?',
          minutes: 35,
          objectives: [
            "Distinguer l'inconscient au sens courant (ce qui n'est pas conscient) et l'inconscient psychique au sens de Freud.",
            "Expliquer le refoulement, le rêve, le lapsus et l'acte manqué comme manifestations de l'inconscient.",
            "Présenter les principales critiques de l'hypothèse de l'inconscient.",
            "Problématiser le rapport entre inconscient, liberté et responsabilité.",
          ],
          course: [
            {
              heading: "Avant Freud : ce qui échappe à la conscience",
              paragraphs: [
                "Au sens courant, est inconscient ce qui n'est pas accompagné de conscience : un automatisme (taper un code sans y penser), un évanouissement, une habitude. Leibniz, dans les Nouveaux essais sur l'entendement humain (rédigés vers 1704), soutient déjà qu'il existe à chaque instant une infinité de petites perceptions dont nous ne nous apercevons pas : le bruit de la mer est fait du bruit de chaque vague, que nous n'entendons pas séparément, mais qui doit bien être perçu pour que le tout le soit.",
                "Spinoza, dans l'Éthique (1677), affirme que les hommes se croient libres parce qu'ils ont conscience de leurs désirs, mais ignorent les causes qui les déterminent. Dans une lettre, il imagine une pierre lancée qui deviendrait consciente : elle croirait se mouvoir librement. La conscience ne garantit donc pas la maîtrise de soi ; elle peut même produire l'illusion de la liberté.",
              ],
              box: { label: "Repère", text: "Inconscient au sens faible : ce qui n'est pas conscient (petites perceptions, automatismes). Inconscient au sens freudien : une part active de la vie psychique, faite de désirs refoulés, qui agit sur nos pensées et nos actes." },
            },
            {
              heading: "L'hypothèse freudienne",
              paragraphs: [
                "Sigmund Freud (1856-1939), médecin viennois, fonde la psychanalyse à partir du traitement des névroses. Il fait l'hypothèse qu'une partie de la vie psychique est inconsciente non par simple oubli, mais parce que des représentations liées à des désirs inacceptables (souvent sexuels, souvent infantiles) ont été repoussées hors de la conscience : c'est le refoulement. Ces désirs restent actifs et cherchent à se satisfaire de manière détournée.",
                "L'inconscient se manifeste par des effets que la conscience seule n'explique pas : le rêve, que Freud appelle la voie royale vers l'inconscient (L'Interprétation des rêves, 1900) ; les lapsus et les actes manqués (Psychopathologie de la vie quotidienne, 1901) ; les symptômes névrotiques. Freud cite le président d'une assemblée qui, au lieu de déclarer la séance ouverte, la déclare close : le lapsus trahit un désir qu'il ne s'avoue pas.",
                "Freud propose deux modèles de l'appareil psychique. La première topique distingue l'inconscient, le préconscient (ce qui peut redevenir conscient, comme un souvenir disponible) et le conscient. La seconde, exposée dans Le Moi et le Ça (1923), distingue le ça (les pulsions), le surmoi (les interdits intériorisés) et le moi, qui cherche à concilier les exigences du ça, du surmoi et de la réalité. Dès 1917, Freud résumait la blessure que la psychanalyse inflige à l'orgueil humain : le moi n'est pas maître dans sa propre maison.",
              ],
              box: { label: "Définition", text: "Refoulement : processus inconscient par lequel des représentations liées à des désirs inacceptables sont repoussées hors de la conscience, où elles restent actives. Ça : les pulsions. Surmoi : les interdits intériorisés. Moi : l'instance qui négocie entre eux et la réalité." },
            },
            {
              heading: "Critiques et enjeux",
              paragraphs: [
                "L'hypothèse de l'inconscient a été vivement discutée. Sartre, dans L'Être et le Néant (1943), objecte que pour refouler un désir, il faut savoir ce que l'on refoule : la censure doit avoir conscience de ce qu'elle cache. Ce que Freud appelle inconscient serait plutôt de la mauvaise foi, une manière de se mentir à soi-même pour fuir sa liberté. Alain refusait de même que l'on fasse de l'inconscient un autre moi qui penserait à notre place.",
                "Karl Popper juge la psychanalyse non scientifique, parce qu'elle peut interpréter tous les comportements, même opposés, et qu'aucune observation ne pourrait la réfuter. Les défenseurs de Freud répondent que la psychanalyse est une pratique d'interprétation et de soin, dont la valeur se mesure aussi à ses effets sur les patients.",
                "L'enjeu est moral : si mes actes viennent de désirs inconscients, suis-je encore responsable ? Freud ne supprime pas la responsabilité : la cure vise à rendre conscient ce qui était inconscient pour que le sujet puisse en répondre. Sa formule « Là où était le ça, le moi doit advenir » fait de la maîtrise de soi une tâche, non un donné.",
              ],
              box: { label: "À retenir", text: "Sartre : l'inconscient serait de la mauvaise foi, et nous restons libres. Popper : la psychanalyse n'est pas réfutable. Freud : rendre conscient l'inconscient, pour que le moi devienne davantage maître de lui." },
            },
          ],
          keyPoints: [
            "Leibniz : des petites perceptions inaperçues composent nos perceptions conscientes.",
            "Spinoza : les hommes se croient libres car conscients de leurs désirs, mais ignorants de leurs causes.",
            "Freud : des désirs refoulés restent actifs et se manifestent par les rêves, les lapsus, les actes manqués et les symptômes.",
            "Seconde topique (1923) : ça, moi, surmoi ; le moi n'est pas maître dans sa propre maison.",
            "Sartre oppose à l'inconscient la mauvaise foi ; Popper juge la psychanalyse irréfutable.",
            "L'inconscient n'abolit pas la responsabilité : il fait de la maîtrise de soi une tâche.",
          ],
          example: {
            statement: "Sujet : « L'hypothèse de l'inconscient nous dispense-t-elle d'être responsables de nos actes ? » Analysez le sujet et proposez un plan.",
            solution: [
              "Analyse : une hypothèse est une supposition qui permet d'expliquer des faits ; être responsable, c'est devoir répondre de ses actes ; « dispenser » signifie libérer d'une obligation.",
              "Problème : si une partie de nos actes vient de désirs inconscients, nous n'en sommes pas pleinement les auteurs ; mais si l'inconscient excuse tout, toute faute devient explicable et plus rien n'est imputable à personne.",
              "I. L'inconscient semble limiter la responsabilité : selon Freud, le moi n'est pas maître dans sa propre maison ; le droit lui-même tient compte des troubles psychiques qui abolissent le discernement (article 122-1 du Code pénal).",
              "II. Mais il ne peut servir d'excuse universelle : Sartre y voit une mauvaise foi qui fuit la liberté, car pour cacher un désir, il faut savoir ce que l'on cache.",
              "III. L'inconscient transforme la responsabilité plutôt qu'il ne la supprime : la cure vise à rendre conscient l'inconscient pour que le sujet puisse en répondre ; être responsable devient l'effort de se connaître.",
              "Conclusion : l'hypothèse de l'inconscient ne nous dispense pas d'être responsables ; elle nous oblige à concevoir la responsabilité comme une conquête.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque situation à la notion freudienne qui l'éclaire le mieux (lapsus, acte manqué, rêve, refoulement), en justifiant : a) Une personne oublie sans cesse un rendez-vous chez un médecin qu'elle redoute. b) À un dîner, un invité dit à son hôte « je suis ravi de vous quitter » au lieu de « de vous rencontrer ». c) Une personne n'a aucun souvenir d'un épisode humiliant de son enfance, qui continue pourtant de l'angoisser. d) Un étudiant qui craint d'échouer à un examen rêve qu'il le réussit brillamment.",
              hint: "Le lapsus est une erreur de parole, l'acte manqué une action qui échoue de façon révélatrice, le rêve la satisfaction déguisée d'un désir, le refoulement l'exclusion d'un contenu hors de la conscience.",
              solution: [
                "a) Acte manqué : l'oubli n'est pas un hasard, il réalise le désir de ne pas aller chez le médecin.",
                "b) Lapsus : l'erreur de parole laisse échapper un désir que l'invité ne s'avoue pas (partir).",
                "c) Refoulement : le souvenir pénible a été écarté de la conscience, mais il reste actif et produit de l'angoisse.",
                "d) Rêve : pour Freud, le rêve est la réalisation, souvent déguisée, d'un désir ; ici le désir de réussir s'exprime directement.",
                "Résultat : a acte manqué, b lapsus, c refoulement, d rêve.",
              ],
            },
            {
              level: 2,
              statement: "Exposez en quatre étapes l'objection de Sartre à l'inconscient freudien, puis indiquez ce que cette objection cherche à préserver.",
              hint: "Partez du mécanisme du refoulement : qui refoule, et que doit savoir celui qui refoule ?",
              solution: [
                "Étape 1 : selon Freud, une censure empêche certains désirs d'accéder à la conscience.",
                "Étape 2 : mais pour écarter un désir, la censure doit le reconnaître et savoir qu'il faut le cacher ; elle est donc consciente de ce qu'elle refoule.",
                "Étape 3 : il n'y a donc pas un inconscient séparé, mais une conscience qui se ment à elle-même : c'est la mauvaise foi.",
                "Étape 4 : la mauvaise foi est une conduite libre, par laquelle je fuis ma responsabilité en me présentant comme déterminé.",
                "Ce que l'objection préserve : la liberté et la responsabilité du sujet ; pour Sartre, nous sommes toujours responsables de ce que nous faisons de nous-mêmes.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « Sommes-nous maîtres de nous-mêmes ? » Formulez la problématique et proposez un plan détaillé en trois parties, en mobilisant au moins trois auteurs.",
              hint: "Distinguez la maîtrise en droit (la volonté peut-elle gouverner les passions ?) et la maîtrise en fait (connaissons-nous les causes de nos actes ?). La maîtrise est-elle donnée ou à conquérir ?",
              solution: [
                "Problématique : nous avons le sentiment de décider librement de nos actes ; pourtant passions, habitudes et désirs inconscients semblent nous gouverner à notre insu. La maîtrise de soi est-elle un fait, une illusion, ou une tâche ?",
                "I. En droit, nous pouvons être maîtres de nous : Épictète, dans le Manuel, invite à distinguer ce qui dépend de nous (nos jugements, nos désirs) de ce qui n'en dépend pas ; Descartes, dans Les Passions de l'âme (1649), soutient qu'une âme bien conduite peut acquérir un empire sur ses passions.",
                "II. En fait, nous sommes déterminés plus que nous ne le croyons : Spinoza dénonce l'illusion du libre arbitre, née de l'ignorance des causes ; Freud montre que le moi n'est pas maître dans sa propre maison.",
                "III. La maîtrise de soi se conquiert par la connaissance : pour Spinoza, la liberté consiste à comprendre les causes qui nous déterminent ; la cure freudienne vise à rendre conscient l'inconscient ; Sartre rappelle que nous restons responsables de ce que nous faisons de ce qui nous détermine.",
                "Conclusion : nous ne sommes pas d'emblée maîtres de nous-mêmes, mais nous pouvons le devenir en partie, par un effort de connaissance de soi qui n'est jamais achevé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la réflexion sur l'inconscient.",
            items: [
              "Spinoza, Éthique (1677) : l'illusion du libre arbitre",
              "Leibniz, Nouveaux essais (rédigés vers 1704) : les petites perceptions",
              "Freud, L'Interprétation des rêves (1900)",
              "Freud, Psychopathologie de la vie quotidienne (1901)",
              "Freud, Le Moi et le Ça (1923) : la seconde topique",
              "Sartre, L'Être et le Néant (1943) : la mauvaise foi",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que le refoulement selon Freud ?",
              options: ["L'oubli banal d'une information sans importance", "Le rejet hors de la conscience de désirs inacceptables", "Le choix volontaire de ne pas penser à quelque chose de pénible", "La perte de mémoire due à un choc"],
              answer: 1,
              why: "Le refoulement est un processus inconscient : des représentations liées à des désirs inacceptables sont écartées de la conscience, mais restent actives.",
            },
            {
              q: "Quelles sont les trois instances de la seconde topique de Freud ?",
              options: ["Conscient, préconscient, inconscient", "Raison, volonté, passion", "Corps, âme, esprit", "Ça, moi, surmoi"],
              answer: 3,
              why: "La seconde topique (1923) distingue le ça, le moi et le surmoi ; conscient, préconscient et inconscient forment la première topique.",
            },
            {
              q: "Selon Freud, quelle est la voie royale vers l'inconscient ?",
              options: ["Le rêve", "Le raisonnement logique", "La perception sensible", "L'introspection attentive"],
              answer: 0,
              why: "Dans L'Interprétation des rêves, Freud fait du rêve, réalisation déguisée d'un désir, l'accès privilégié à l'inconscient.",
            },
            {
              q: "Quelle objection Sartre adresse-t-il à l'inconscient freudien ?",
              options: ["Il serait trop difficile à soigner", "Il n'existerait que chez les malades", "Refouler suppose de savoir ce qu'on refoule", "Il contredirait la physiologie du cerveau humain"],
              answer: 2,
              why: "Pour cacher un désir, la censure doit le reconnaître : il s'agit donc, selon Sartre, de mauvaise foi plutôt que d'inconscient.",
            },
            {
              q: "Que veut montrer Spinoza avec l'image de la pierre consciente ?",
              options: ["Les pierres possèdent une forme de pensée", "Se croire libre vient de l'ignorance des causes", "La conscience nous rend vraiment libres de nos actes", "Le mouvement des corps est imprévisible"],
              answer: 1,
              why: "La pierre consciente de son mouvement, mais ignorante de sa cause, se croirait libre : ainsi font les hommes, conscients de leurs désirs mais non de leurs causes.",
            },
          ],
          trap: "Utiliser l'inconscient comme une excuse universelle (« ce n'est pas ma faute, c'est mon inconscient ») ou le confondre avec le simple oubli, alors que Freud désigne un processus actif de refoulement.",
          method: "Pour chaque auteur de ce chapitre, apprenez l'exemple qui porte sa thèse : le bruit de la mer pour Leibniz, la pierre pour Spinoza, la séance déclarée close pour Freud, la mauvaise foi pour Sartre. Un exemple précis rend une référence crédible et facile à analyser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'le-temps',
          title: 'Le temps : pouvons-nous échapper au temps ?',
          minutes: 35,
          objectives: [
            "Distinguer le temps objectif, mesuré par les horloges, et le temps vécu.",
            "Expliquer les analyses d'Augustin et de Bergson sur le temps de la conscience.",
            "Analyser les attitudes humaines face au temps et à la mort : divertissement, sagesse du présent, quête d'éternité.",
            "Construire un problème sur la possibilité d'échapper au temps.",
          ],
          course: [
            {
              heading: "Qu'est-ce que le temps ?",
              paragraphs: [
                "Augustin, dans les Confessions (livre XI, vers 400), formule la difficulté : si personne ne lui demande ce qu'est le temps, il le sait ; dès qu'il veut l'expliquer, il ne le sait plus. Le passé n'est plus, l'avenir n'est pas encore, et le présent, s'il restait toujours présent sans passer, ne serait plus du temps mais l'éternité. Comment ce qui ne cesse de cesser d'être peut-il exister ?",
                "Aristote, dans la Physique (livre IV), définit le temps comme le nombre du mouvement selon l'avant et l'après : nous percevons le temps quand nous percevons un changement et que nous le mesurons. C'est le temps objectif, celui des horloges et du calendrier, homogène et divisible en unités égales. Kant, dans la Critique de la raison pure (1781), fait du temps une forme a priori de la sensibilité : non une chose que nous percevons, mais la condition sous laquelle nous percevons toute chose, comme successive ou simultanée.",
              ],
              box: { label: "Définition", text: "Temps objectif : temps mesurable, homogène et commun, celui des horloges (Aristote : nombre du mouvement selon l'avant et l'après). Temps vécu : durée telle que la conscience l'éprouve, variable selon l'attente, l'ennui ou la joie." },
            },
            {
              heading: "Le temps de la conscience",
              paragraphs: [
                "Augustin résout son énigme en situant le temps dans l'esprit : il y a trois temps, le présent du passé (la mémoire), le présent du présent (la vision directe, l'attention) et le présent de l'avenir (l'attente). Le temps est une distension de l'âme (distentio animi) : l'esprit se tend vers ce qui vient et retient ce qui passe. Mesurer un temps, c'est mesurer l'impression qu'il laisse en nous.",
                "Bergson, dans l'Essai sur les données immédiates de la conscience (1889), distingue le temps des physiciens, qu'il dit spatialisé (représenté comme une ligne de points juxtaposés), et la durée, temps vécu où les états de conscience se fondent les uns dans les autres, comme les notes d'une mélodie. Dans L'Évolution créatrice (1907), il prend l'exemple du verre d'eau sucrée : si je veux le boire, je dois attendre que le sucre fonde, et cette attente est une durée vécue que je ne peux ni abréger ni réduire à un chiffre.",
              ],
              box: { label: "Repère", text: "Augustin : mémoire, attention, attente ; le temps est distension de l'âme. Bergson : la durée vécue, continue et qualitative, s'oppose au temps spatialisé des horloges." },
            },
            {
              heading: "Fuir le temps ou l'habiter",
              paragraphs: [
                "Le temps nous rappelle notre finitude : tout passe, et nous allons mourir. Pascal, dans les Pensées, décrit le divertissement : nous nous agitons sans cesse pour ne pas penser à notre condition. Nous ne nous tenons jamais au présent, toujours occupés du passé ou de l'avenir, de sorte que nous ne vivons jamais, mais espérons de vivre. Fuir le temps dans l'agitation, c'est encore le subir.",
                "Les sagesses antiques proposent au contraire d'habiter le présent. Épicure, dans la Lettre à Ménécée, soutient que la mort n'est rien pour nous : tant que nous sommes, la mort n'est pas là, et quand la mort est là, nous ne sommes plus. Sénèque, dans De la brièveté de la vie, affirme que la vie n'est pas courte, mais que nous en perdons une grande partie ; il invite à reprendre possession de son temps. Les stoïciens distinguent ce qui dépend de nous (notre jugement présent) de ce qui n'en dépend pas (le passé, l'avenir).",
              ],
            },
            {
              heading: "Dépasser le temps ou l'assumer",
              paragraphs: [
                "D'autres voies cherchent à dépasser le temps : l'éternité promise par les religions, la connaissance des vérités éternelles, l'œuvre qui survit à son auteur, la mémoire collective. Spinoza, dans l'Éthique, affirme que nous sentons et expérimentons que nous sommes éternels, en tant que notre esprit connaît les choses sous l'aspect de l'éternité.",
                "Heidegger, dans Être et Temps (1927), soutient à l'inverse que l'existence humaine est de part en part temporelle : l'homme est un être-pour-la-mort. Fuir cette vérité dans le bavardage et les préoccupations ordinaires (ce qu'il appelle le « on »), c'est exister de manière inauthentique ; l'assumer, c'est se rendre capable de choisir réellement sa vie.",
              ],
              box: { label: "À retenir", text: "Fuir le temps (le divertissement selon Pascal), l'habiter (Épicure, Sénèque, les stoïciens), le dépasser (éternité, œuvre, Spinoza), ou l'assumer comme notre manière d'exister (Heidegger)." },
            },
          ],
          keyPoints: [
            "Aristote : le temps est le nombre du mouvement selon l'avant et l'après (temps objectif).",
            "Augustin : trois présents (mémoire, attention, attente) ; le temps est distension de l'âme.",
            "Kant : le temps est une forme a priori de la sensibilité.",
            "Bergson : la durée vécue s'oppose au temps spatialisé ; il faut attendre que le sucre fonde.",
            "Pascal : le divertissement nous détourne de notre condition ; nous ne vivons jamais au présent.",
            "Épicure : la mort n'est rien pour nous ; Sénèque : la vie n'est pas courte, c'est nous qui la perdons.",
          ],
          example: {
            statement: "Sujet : « Pouvons-nous échapper au temps ? » Rédigez la problématique et proposez un plan détaillé.",
            solution: [
              "Analyse : le temps désigne à la fois la succession objective des instants et l'usure qu'elle nous fait subir (vieillir, mourir) ; « échapper » signifie se soustraire à une emprise ; « pouvons-nous » interroge une possibilité.",
              "Problématique : nous sommes des êtres temporels, nés et mortels, et rien ne semble pouvoir arrêter le temps ; pourtant l'homme ne cesse de chercher à le fuir, à le suspendre ou à le dépasser. Ces tentatives sont-elles des illusions, ou des manières réelles de ne pas être prisonniers du temps ?",
              "I. Nous ne pouvons pas échapper au temps : il est la forme même de notre expérience (Kant) et la marque de notre finitude ; le divertissement (Pascal) n'est qu'une fuite qui nous livre davantage au temps.",
              "II. Nous pouvons cependant nous en affranchir en partie : la sagesse antique apprend à habiter le présent (Épicure, Sénèque) ; la connaissance des vérités éternelles (Spinoza) ou la création d'œuvres ouvre un rapport à ce qui ne passe pas.",
              "III. Plutôt que d'échapper au temps, il s'agit de le faire sien : la durée vécue (Bergson) et l'existence authentique (Heidegger) montrent que le temps n'est pas seulement subi, il est le lieu de notre liberté.",
              "Conclusion : nous ne pouvons pas sortir du temps, mais nous pouvons cesser d'en être seulement les victimes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les situations selon qu'elles relèvent surtout du temps objectif ou du temps vécu, en justifiant : a) Un sprinteur court le 100 mètres en 9,8 secondes. b) Une heure d'attente aux urgences paraît interminable. c) Les vacances passent trop vite. d) Le train part à 14 h 32.",
              hint: "Le temps objectif se mesure de la même façon pour tous ; le temps vécu dépend de ce que la conscience éprouve.",
              solution: [
                "a) Temps objectif : la durée est mesurée par un chronomètre, identique pour tous les observateurs.",
                "b) Temps vécu : l'heure est la même que les autres sur l'horloge, mais l'angoisse et l'attente l'allongent pour la conscience.",
                "c) Temps vécu : la joie et l'absorption dans l'activité donnent l'impression d'un temps qui s'accélère.",
                "d) Temps objectif : c'est une date sur l'horaire commun, fixée par convention et partagée par tous.",
                "Résultat : a et d relèvent du temps objectif, b et c du temps vécu.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez la distinction de Bergson entre la durée et le temps spatialisé, en vous appuyant sur l'exemple du verre d'eau sucrée. Rédigez votre réponse en quatre étapes.",
              hint: "Demandez-vous pourquoi le physicien peut, en théorie, accélérer ou ralentir son temps de calcul, alors que celui qui attend ne le peut pas.",
              solution: [
                "Étape 1 : le temps spatialisé est celui de la science et des horloges : une suite d'instants identiques et juxtaposés, représentée comme une ligne que l'on peut découper et mesurer.",
                "Étape 2 : la durée est le temps vécu par la conscience, où chaque moment se mêle aux précédents et les prolonge, comme les notes d'une mélodie qui ne prennent sens qu'ensemble.",
                "Étape 3 : l'exemple du verre d'eau sucrée : pour le calcul, la dissolution est une quantité de temps ; pour moi qui attends, c'est une durée que je dois vivre, que je ne peux ni abréger ni sauter.",
                "Étape 4 : la durée est donc qualitative et irréversible, alors que le temps spatialisé est quantitatif et homogène.",
                "Conclusion : pour Bergson, mesurer le temps, c'est le traduire en espace et manquer ce qu'il est vraiment pour la conscience.",
              ],
            },
            {
              level: 3,
              statement: "Explication de texte (type bac). Texte d'entraînement, rédigé pour l'exercice : « On se plaint de manquer de temps, et l'on passe ses journées à attendre la suivante. Le présent nous semble toujours une salle d'attente : on y patiente en pensant au moment où la vraie vie commencera, après l'examen, après les vacances, après la promotion. Mais ce moment, quand il arrive, devient à son tour un présent que l'on traverse en regardant ailleurs. Ce n'est pas le temps qui nous manque, c'est notre présence au temps. » Dégagez la thèse et la structure du texte, puis confrontez-le à deux auteurs du programme.",
              hint: "Repérez le paradoxe de départ (se plaindre de manquer de temps tout en le gaspillant), l'image centrale (la salle d'attente) et le renversement final.",
              solution: [
                "Thèse : notre manque de temps n'est pas une question de quantité, mais de manière de vivre ; nous manquons de présence au présent.",
                "Premier moment (phrase 1) : un paradoxe ; nous nous plaignons de manquer de temps, mais nous passons ce temps à attendre autre chose.",
                "Deuxième moment (phrases 2 et 3) : l'analyse ; le présent est vécu comme une salle d'attente, et chaque moment espéré, une fois arrivé, est à son tour vécu comme une attente : le mécanisme se répète sans fin.",
                "Troisième moment (phrase 4) : le renversement ; ce n'est pas le temps qui manque, c'est nous qui manquons au temps.",
                "Confrontation : le texte rejoint Pascal, pour qui nous ne nous tenons jamais au présent et ne vivons jamais, mais espérons de vivre ; il rejoint aussi Sénèque, pour qui la vie n'est pas courte, mais perdue par ceux qui la remettent à plus tard.",
                "Discussion : on peut objecter que se projeter dans l'avenir est aussi ce qui donne sens au présent (un projet, une promesse) ; il ne s'agit donc pas de supprimer l'attente, mais de ne pas lui sacrifier tout le présent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque auteur à sa thèse sur le temps.",
            pairs: [
              { left: "Aristote", right: "Le temps est le nombre du mouvement selon l'avant et l'après" },
              { left: "Augustin", right: "Le temps est une distension de l'âme : mémoire, attention, attente" },
              { left: "Kant", right: "Le temps est une forme a priori de la sensibilité" },
              { left: "Bergson", right: "La durée vécue n'est pas le temps spatialisé des horloges" },
              { left: "Pascal", right: "Le divertissement nous empêche de vivre au présent" },
              { left: "Épicure", right: "La mort n'est rien pour nous" },
            ],
          },
          quiz: [
            {
              q: "Comment Aristote définit-il le temps ?",
              options: ["Comme une illusion de l'esprit", "Comme une forme a priori de la sensibilité", "Comme une durée purement vécue", "Comme le nombre du mouvement"],
              answer: 3,
              why: "Pour Aristote, le temps est le nombre du mouvement selon l'avant et l'après : il n'y a pas de temps sans changement mesurable.",
            },
            {
              q: "Pour Augustin, le présent du passé, c'est :",
              options: ["l'attente", "la mémoire", "l'attention", "l'histoire"],
              answer: 1,
              why: "Le passé n'existe plus que dans la mémoire, qui le rend présent à l'esprit.",
            },
            {
              q: "Quel exemple Bergson donne-t-il pour faire sentir la durée ?",
              options: ["Une montre qui retarde", "Une flèche qui semble immobile en plein vol", "Le sucre qui fond dans l'eau", "Le lever du soleil"],
              answer: 2,
              why: "Il faut attendre que le sucre fonde : cette attente est une durée vécue, qu'on ne peut pas abréger.",
            },
            {
              q: "Que reproche Pascal au divertissement ?",
              options: ["De nous détourner de notre condition", "De nous rendre trop savants et orgueilleux", "D'être interdit par la religion", "D'être réservé aux rois et aux puissants"],
              answer: 0,
              why: "Le divertissement nous empêche de penser à notre condition de mortels ; il nous fait fuir le présent et nous-mêmes.",
            },
            {
              q: "Selon Épicure, pourquoi la mort n'est-elle rien pour nous ?",
              options: ["Parce que l'âme est immortelle et ressuscite", "Parce que les dieux nous protègent de la mort", "Parce que la mort est une punition méritée", "Parce que là où elle est, nous ne sommes plus"],
              answer: 3,
              why: "Tant que nous sommes, la mort n'est pas là ; quand elle est là, nous ne sommes plus : nous ne la rencontrons jamais.",
            },
          ],
          trap: "Traiter le temps uniquement comme une question de physique ou de gestion d'agenda : en philosophie, le sujet porte sur notre rapport au temps (finitude, mémoire, attente, mort), et pas seulement sur sa mesure.",
          method: "Pour chaque sujet sur le temps, demandez-vous de quel temps il s'agit : le temps mesuré, le temps vécu, ou le temps de l'existence (vieillir, mourir, se souvenir). Cette distinction fournit souvent le fil directeur des parties.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA CULTURE : LANGAGE, ART, RELIGION                                   */
    /* ==================================================================== */
    {
      id: 'la-culture',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'le-langage',
          title: 'Le langage : les mots nous permettent-ils de tout dire ?',
          minutes: 35,
          objectives: [
            "Définir le langage et le distinguer de la communication animale.",
            "Expliquer la nature du signe linguistique : signifiant, signifié, arbitraire.",
            "Analyser les limites du langage face à l'indicible, et sa puissance d'action.",
            "Problématiser le rapport entre les mots, la pensée et le réel.",
          ],
          course: [
            {
              heading: "Le langage, propre de l'homme ?",
              paragraphs: [
                "Le langage est la faculté d'exprimer et de communiquer sa pensée au moyen de signes ; une langue est un système particulier de signes partagé par une communauté (le français, le japonais). Aristote, dans la Politique, distingue la voix, que les animaux possèdent et qui exprime le plaisir et la douleur, du langage articulé (logos), propre à l'homme, qui permet de manifester l'utile et le nuisible, le juste et l'injuste : c'est pourquoi l'homme est un animal politique.",
                "Descartes, dans la cinquième partie du Discours de la méthode (1637), remarque que les pies et les perroquets peuvent proférer des paroles sans montrer qu'ils pensent ce qu'ils disent, alors que des hommes privés de l'usage de la parole inventent des signes pour se faire entendre. Le langage humain se reconnaît à sa capacité de répondre à propos à des situations toujours nouvelles.",
                "Le linguiste Émile Benveniste, étudiant la danse des abeilles décrite par Karl von Frisch, montre qu'elle transmet une information précise (direction et distance d'une source de nourriture), mais ne permet ni dialogue ni réponse. Le langage humain, lui, est doublement articulé, selon l'expression du linguiste André Martinet : avec un petit nombre de sons et un nombre fini de mots, il permet de produire une infinité de phrases nouvelles.",
              ],
              box: { label: "Définition", text: "Langage : faculté de communiquer et d'exprimer sa pensée par des signes. Langue : système de signes propre à une communauté. Parole : usage individuel de la langue (distinction de Saussure)." },
            },
            {
              heading: "Le signe et la pensée",
              paragraphs: [
                "Ferdinand de Saussure, dans le Cours de linguistique générale (publié en 1916 par ses élèves), définit le signe linguistique comme l'union d'un signifiant (l'image acoustique, la suite de sons) et d'un signifié (le concept). Le lien entre les deux est arbitraire : rien dans la suite de sons « arbre » ne ressemble à un arbre, la preuve étant que d'autres langues disent tree ou Baum. Le signe est conventionnel, et c'est pourquoi une langue doit s'apprendre.",
                "Les mots ne sont pas de simples étiquettes posées sur des pensées déjà faites. Hegel soutient que c'est dans les mots que nous pensons : vouloir penser sans les mots est une tentative insensée, et ce que l'on croit ineffable n'est qu'une pensée obscure, encore en fermentation, qui ne devient claire qu'en trouvant ses mots. Chaque langue découpe d'ailleurs le réel à sa manière : Saussure remarque que là où le français dit « mouton », l'anglais distingue sheep (l'animal) et mutton (la viande).",
              ],
              box: { label: "Repère", text: "Signe : signifiant (suite de sons) uni à un signifié (concept), par un lien arbitraire (Saussure). Concept/image/métaphore : le concept définit, l'image rend sensible, la métaphore transporte un sens d'un domaine à un autre." },
            },
            {
              heading: "Les mots peuvent-ils tout dire ?",
              paragraphs: [
                "Bergson, dans Le Rire (1900), reproche au langage de ne retenir des choses que leur aspect général et utile : les mots sont comme des étiquettes collées sur les choses. Quand je dis « je suis triste », j'emploie le même mot que tout le monde, alors que ma tristesse est singulière. Le langage, fait pour l'action et la vie sociale, manquerait l'individuel et la nuance de nos états intérieurs ; c'est l'artiste, et notamment le poète, qui cherche à dire ce que les mots ordinaires effacent.",
                "Wittgenstein clôt le Tractatus logico-philosophicus (1921) sur l'idée qu'il faut garder le silence sur ce dont on ne peut parler : l'éthique, l'esthétique ou le sens de la vie se montreraient sans pouvoir se dire dans des propositions vérifiables. Les limites du langage ne sont pourtant pas seulement des défauts : la poésie, la métaphore et le style élargissent sans cesse ce qui peut être dit.",
                "Le langage n'est pas seulement descriptif. Le philosophe anglais John L. Austin, dans Quand dire, c'est faire (1962), décrit les énoncés performatifs, qui accomplissent une action par le seul fait d'être prononcés dans les conditions requises : « je vous déclare unis par les liens du mariage », « je promets », « la séance est ouverte ». Le langage peut aussi manipuler : dans le Gorgias, Platon oppose la rhétorique, qui persuade sans faire savoir, à la philosophie, qui cherche la vérité.",
              ],
              box: { label: "À retenir", text: "Bergson : le mot est une étiquette qui manque le singulier. Hegel : l'ineffable est une pensée obscure. Austin : dire, c'est parfois faire. Persuader (par les passions) n'est pas convaincre (par les raisons)." },
            },
          ],
          keyPoints: [
            "Aristote : la voix exprime plaisir et douleur, le logos manifeste l'utile, le juste et l'injuste.",
            "Descartes : les animaux peuvent proférer des mots, non répondre à propos ; le langage est signe de la pensée.",
            "Saussure : le signe unit un signifiant et un signifié ; leur lien est arbitraire.",
            "Hegel : nous pensons dans les mots ; l'ineffable est une pensée obscure.",
            "Bergson : le mot est une étiquette générale qui manque le singulier.",
            "Austin : les énoncés performatifs accomplissent ce qu'ils disent.",
          ],
          example: {
            statement: "Sujet : « Les mots nous permettent-ils de tout dire ? » Formulez la problématique et proposez un plan détaillé.",
            solution: [
              "Analyse : les mots sont les unités d'une langue ; « tout dire » renvoie à l'exhaustivité (exprimer toutes nos pensées, nos émotions, le réel dans sa singularité) ; « permettent » interroge une capacité.",
              "Problématique : le langage semble l'instrument même de l'expression, puisque toute pensée claire passe par des mots ; mais nous faisons l'expérience de l'indicible (une émotion intense, une douleur, une beauté) que les mots semblent trahir. Le langage est-il la condition de la pensée ou sa limite ?",
              "I. Les mots permettent de dire bien plus que nous ne le croyons : la pensée se forme dans le langage (Hegel) ; la double articulation donne à la langue la capacité d'exprimer une infinité de pensées nouvelles.",
              "II. Pourtant, les mots généralisent : ils manquent le singulier et la nuance (Bergson) ; certaines réalités se montrent sans pouvoir se dire (Wittgenstein).",
              "III. Dire ne se limite pas à décrire : la poésie et la métaphore inventent de nouvelles manières de dire, et le langage agit (Austin) ; le « tout dire » est un horizon que le travail sur la langue ne cesse de déplacer.",
              "Conclusion : les mots ne peuvent pas tout dire d'un coup, mais aucune pensée ne devient claire sans eux ; l'indicible est moins une limite fixe qu'une tâche pour l'expression.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le signifiant et le signifié du mot « chat », puis expliquez en quoi le signe est arbitraire. Donnez enfin un type de mots qui semble faire exception, et discutez-le.",
              hint: "Le signifiant est la suite de sons, le signifié le concept. Pour l'exception, pensez aux mots qui imitent un bruit.",
              solution: [
                "Signifiant : la suite de sons [ʃa], c'est-à-dire l'image acoustique du mot.",
                "Signifié : le concept de chat (petit mammifère carnivore domestique), et non tel chat réel, qui est le référent.",
                "Arbitraire : rien dans les sons [ʃa] ne ressemble à l'animal ; l'anglais dit cat, l'allemand Katze. Le lien est fixé par convention.",
                "Exception apparente : les onomatopées (« cocorico », « miaou ») semblent imiter la chose.",
                "Discussion : Saussure remarque qu'elles sont peu nombreuses et déjà en partie conventionnelles, puisque le coq fait « cocorico » en français et « cock-a-doodle-doo » en anglais. Résultat : le principe de l'arbitraire du signe est maintenu.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des énoncés suivants, dites s'il est descriptif (constatif) ou performatif, et justifiez : a) « Il pleut sur Lyon. » b) « Je baptise ce navire La Liberté », prononcé lors de son lancement. c) « Je promets de venir demain. » d) « La séance est ouverte », prononcé par le président d'une assemblée. e) « Le président a ouvert la séance à 9 heures. »",
              hint: "Un énoncé performatif ne décrit pas une action : il l'accomplit, à condition d'être prononcé par la bonne personne et dans les bonnes circonstances.",
              solution: [
                "a) Constatif : il décrit un état du monde et peut être vrai ou faux.",
                "b) Performatif : prononcer la phrase dans la cérémonie prévue, c'est donner son nom au navire.",
                "c) Performatif : dire « je promets », c'est promettre ; l'énoncé crée un engagement.",
                "d) Performatif : prononcée par le président, la phrase ouvre effectivement la séance ; prononcée par un spectateur, elle échouerait.",
                "e) Constatif : il rapporte une action passée, et peut être vrai ou faux.",
                "Résultat : a et e sont constatifs ; b, c et d sont performatifs, sous réserve des conditions de réussite décrites par Austin.",
              ],
            },
            {
              level: 3,
              statement: "Explication de texte (type bac). Texte d'entraînement, rédigé pour l'exercice : « On croit souvent que la pensée existe d'abord, complète et claire, et que les mots viennent seulement l'habiller pour la transmettre. Mais qu'on essaie de penser sans mots : on ne trouve qu'un sentiment vague, une intention qui se cherche. C'est en écrivant que l'on découvre ce que l'on voulait dire, et souvent l'on découvre qu'on voulait dire autre chose. Le mot n'est pas le vêtement de la pensée, il en est le corps. » Dégagez la thèse et les étapes de l'argument, puis discutez-la à l'aide d'un auteur qui la soutient et d'un auteur qui la nuance.",
              hint: "Repérez la thèse critiquée (le mot comme vêtement), l'expérience proposée (penser sans mots), puis la métaphore finale qui renverse la première.",
              solution: [
                "Thèse : la pensée ne précède pas les mots ; elle se forme et se découvre en eux.",
                "Premier moment (phrase 1) : la thèse adverse, selon laquelle la pensée serait achevée avant d'être dite, et les mots un simple habillage.",
                "Deuxième moment (phrases 2 et 3) : une expérience de pensée et un constat ; sans mots, la pensée reste vague, et l'écriture lui donne forme au point de la modifier.",
                "Troisième moment (phrase 4) : la conclusion par une métaphore ; le mot est le corps de la pensée, non son vêtement : on ne peut pas les séparer.",
                "Auteur qui soutient la thèse : Hegel, pour qui nous pensons dans les mots et l'ineffable n'est qu'une pensée obscure.",
                "Auteur qui la nuance : Bergson, pour qui les mots, généraux et utilitaires, manquent la singularité de nos états intérieurs ; la pensée excède parfois ce que les mots ordinaires peuvent saisir.",
                "Bilan : le texte montre que la pensée claire passe par les mots, mais il reste à savoir si tout ce que nous vivons peut devenir pensée claire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le langage.",
            statements: [
              { text: "Pour Saussure, le lien entre le signifiant et le signifié est naturel.", true: false, why: "Il est arbitraire : rien dans le son ne ressemble au concept, comme le montre la diversité des langues." },
              { text: "La danse des abeilles transmet une information précise sur la direction et la distance de la nourriture.", true: true, why: "C'est ce qu'a établi Karl von Frisch ; mais cette communication ne permet ni dialogue ni réponse." },
              { text: "Selon Descartes, un perroquet qui répète des mots montre qu'il pense.", true: false, why: "Il profère des paroles sans répondre à propos : ce n'est pas un signe de pensée." },
              { text: "Un énoncé performatif accomplit une action par le fait même d'être prononcé.", true: true, why: "Dire « je promets », c'est promettre, si les conditions requises sont réunies." },
              { text: "Pour Hegel, ce qui est ineffable est la pensée la plus haute et la plus claire.", true: false, why: "C'est l'inverse : l'ineffable est une pensée obscure, encore en fermentation." },
              { text: "En philosophie, persuader et convaincre sont synonymes.", true: false, why: "Persuader agit sur les passions et peut tromper ; convaincre s'adresse à la raison par des arguments." },
              { text: "Une langue est un système de signes propre à une communauté.", true: true, why: "Le langage est la faculté ; la langue est l'un des systèmes particuliers qui la réalisent." },
            ],
          },
          quiz: [
            {
              q: "Selon Aristote, qu'est-ce qui distingue le logos de la simple voix ?",
              options: ["Il manifeste le juste et l'injuste", "Il exprime le plaisir et la douleur", "Il est plus fort et plus aigu", "Il n'existe que dans les langues écrites"],
              answer: 0,
              why: "La voix, commune aux animaux, exprime le plaisir et la douleur ; le logos permet de délibérer sur l'utile, le juste et l'injuste.",
            },
            {
              q: "Pour Saussure, le signifié est :",
              options: ["la suite de sons du mot", "l'objet réel désigné par le mot", "le concept associé au mot", "l'orthographe du mot"],
              answer: 2,
              why: "Le signifié est le concept ; la suite de sons est le signifiant, et l'objet réel est le référent.",
            },
            {
              q: "Quel énoncé est performatif ?",
              options: ["« Le ciel est bleu ce matin. »", "« Je vous promets de revenir. »", "« Pierre a promis de revenir. »", "« Les promesses engagent souvent. »"],
              answer: 1,
              why: "Dire « je vous promets », c'est accomplir l'acte de promettre ; les autres énoncés décrivent ou rapportent.",
            },
            {
              q: "Que reproche Bergson aux mots ?",
              options: ["D'être trop nombreux pour être appris", "D'être inventés par les philosophes", "De changer de sens chaque année", "De manquer le singulier"],
              answer: 3,
              why: "Les mots désignent l'aspect général et utile des choses : ce sont des étiquettes qui manquent l'individuel et la nuance.",
            },
            {
              q: "Pourquoi le signe linguistique est-il dit arbitraire ?",
              options: ["Rien ne relie naturellement le son au concept", "Chacun choisit librement ses mots selon son humeur du moment", "Les mots changent de sens d'une année à l'autre", "Les langues n'ont aucune règle"],
              answer: 0,
              why: "Le lien entre signifiant et signifié est conventionnel : il est fixé par la langue, non par une ressemblance naturelle.",
            },
          ],
          trap: "Confondre langue et langage, ou affirmer que les animaux « parlent » parce qu'ils communiquent : il faut préciser ce qui distingue un système de signaux fixes d'un langage capable de répondre et d'inventer.",
          method: "Préparez pour ce chapitre trois exemples analysés et réutilisables : un énoncé performatif, une expérience d'indicible (une émotion ou une douleur), un cas de manipulation par les mots (slogan, euphémisme). Chacun sert dans plusieurs sujets.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'l-art',
          title: 'L\'art : à quoi reconnaît-on une œuvre d\'art ?',
          minutes: 35,
          objectives: [
            "Distinguer l'œuvre d'art, l'objet technique et l'objet naturel.",
            "Expliquer les principales conceptions de l'art : imitation, révélation, expression de l'esprit, institution.",
            "Analyser le jugement de goût selon Kant.",
            "Problématiser les critères qui permettent de reconnaître une œuvre d'art.",
          ],
          course: [
            {
              heading: "Art, technique et nature",
              paragraphs: [
                "Le mot art vient du latin ars, qui traduit le grec technè : il a d'abord désigné tout savoir-faire (on parle encore de l'art du menuisier ou de l'art médical). La distinction entre les beaux-arts et les arts mécaniques s'impose au XVIIIe siècle, par exemple avec l'ouvrage de Charles Batteux, Les Beaux-Arts réduits à un même principe (1746). L'œuvre d'art se distingue de l'objet technique, fabriqué pour un usage, et de l'objet naturel, que personne n'a fabriqué.",
                "Kant distingue l'art de la nature (l'art est produit par une liberté qui se donne des fins), de la science (savoir n'est pas encore savoir faire) et de l'artisanat (travail rémunéré, fait pour son résultat). Le bel art est l'art du génie, ce talent naturel qui donne ses règles à l'art sans pouvoir expliquer comment il procède : l'œuvre de génie est originale et exemplaire, et elle ne s'obtient pas en appliquant des recettes.",
              ],
              box: { label: "Définition", text: "Œuvre d'art : production humaine, sans finalité utilitaire principale, qui s'offre à la contemplation et au jugement esthétique. Objet technique : fabriqué pour un usage. Objet naturel : produit sans intention humaine." },
            },
            {
              heading: "Imiter, révéler, manifester l'esprit",
              paragraphs: [
                "Pour Platon, l'art est imitation (mimèsis). Au livre X de la République, il explique que le peintre qui représente un lit imite le lit fabriqué par le menuisier, qui imite lui-même l'Idée du lit : l'œuvre est éloignée de trois degrés de la vérité et flatte la partie irrationnelle de l'âme. C'est pourquoi Platon se méfie des poètes dans la cité idéale.",
                "Aristote, dans la Poétique, réhabilite l'imitation : l'homme est le plus imitateur des animaux, il apprend d'abord en imitant et prend plaisir à contempler des imitations, même d'objets pénibles à voir dans la réalité. La tragédie, en représentant des actions qui suscitent la pitié et la crainte, opère la purification de ces passions : la catharsis.",
                "Hegel, dans ses Cours d'esthétique, place la beauté artistique au-dessus de la beauté naturelle, parce qu'elle est née de l'esprit : l'art est une manière pour l'esprit de se manifester sous une forme sensible. Bergson ajoute que l'artiste, plus détaché des besoins de l'action, nous fait voir ce que nous ne remarquions plus : l'art ne copie pas le réel, il le révèle.",
              ],
              box: { label: "Repère", text: "Platon : imitation éloignée de la vérité. Aristote : imitation qui instruit et plaît, catharsis. Hegel : manifestation sensible de l'esprit. Bergson : révélation du réel que nous ne voyons plus." },
            },
            {
              heading: "Le jugement de goût",
              paragraphs: [
                "Kant, dans la Critique de la faculté de juger (1790), analyse le jugement « c'est beau ». Il le distingue de l'agréable (ce qui plaît aux sens, et dont chacun juge pour soi) et du bon (ce qui plaît par concept, en raison de son utilité ou de sa valeur morale). Le beau est l'objet d'une satisfaction désintéressée : je n'ai besoin ni de posséder ni de consommer l'objet pour le trouver beau.",
                "Kant ajoute que le beau est ce qui plaît universellement sans concept : je ne peux pas démontrer qu'une œuvre est belle, mais en jugeant, je demande l'accord de tous. Il parle aussi de finalité sans fin : l'œuvre semble organisée comme si elle visait un but, sans servir à rien. Le jugement de goût est donc subjectif, sans être arbitraire.",
              ],
              box: { label: "Définition", text: "Le beau selon Kant : objet d'une satisfaction désintéressée, qui plaît universellement sans concept, et présente une finalité sans fin." },
            },
            {
              heading: "Quand l'art cesse de viser le beau",
              paragraphs: [
                "Au XXe siècle, des artistes remettent en cause ces critères. En 1917, Marcel Duchamp soumet à une exposition new-yorkaise un urinoir de série, renversé, signé « R. Mutt » et intitulé Fontaine : c'est un ready-made. L'objet n'est ni fabriqué par l'artiste ni beau au sens classique ; il devient œuvre par le choix de l'artiste et par le contexte où il est présenté. La question « est-ce de l'art ? » fait alors partie de l'œuvre.",
                "Le philosophe américain Arthur Danto, frappé par les Brillo Boxes d'Andy Warhol (1964), presque identiques aux cartons d'emballage vendus en supermarché, conclut que ce qui fait d'un objet une œuvre ne se voit pas à l'œil nu : c'est une théorie, une histoire de l'art, un « monde de l'art » qui lui donne sens. On reconnaît alors l'œuvre à son statut et à l'interprétation qu'elle appelle, plutôt qu'à sa beauté ou à la virtuosité de son auteur.",
              ],
              box: { label: "À retenir", text: "Critères successifs : l'imitation et la beauté (tradition classique), le génie et le jugement de goût (Kant), l'institution et l'interprétation (Duchamp, Danto). Aucun ne suffit seul : c'est là le problème." },
            },
          ],
          keyPoints: [
            "Art vient de ars, traduction de technè : d'abord tout savoir-faire ; les beaux-arts se distinguent au XVIIIe siècle.",
            "Platon : l'art imite une imitation, à trois degrés de la vérité ; Aristote : l'imitation instruit et plaît, et la tragédie produit la catharsis.",
            "Kant : le beau plaît universellement sans concept, d'une satisfaction désintéressée ; le génie donne ses règles à l'art.",
            "Hegel : le beau artistique est supérieur au beau naturel, car il naît de l'esprit.",
            "Duchamp, Fontaine (1917) : l'objet devient œuvre par le choix de l'artiste et le contexte.",
            "Danto : un « monde de l'art » (théories, histoire) fait d'un objet une œuvre.",
          ],
          example: {
            statement: "Sujet : « À quoi reconnaît-on une œuvre d'art ? » Formulez la problématique et proposez un plan détaillé.",
            solution: [
              "Analyse : reconnaître, c'est identifier à l'aide de critères ; une œuvre d'art est une production humaine destinée à la contemplation ; le pronom « on » pose la question de savoir qui juge (le public, les experts, l'artiste ?).",
              "Problématique : on croit reconnaître l'œuvre à des propriétés visibles (beauté, savoir-faire), mais l'art moderne présente comme œuvres des objets ordinaires. Le critère est-il dans l'objet, dans le regard qui le juge, ou dans l'institution qui le consacre ?",
              "I. Par des propriétés de l'objet : l'imitation réussie (Aristote), la beauté, la virtuosité ; mais ces critères excluent de nombreuses œuvres et incluent de simples objets habiles.",
              "II. Par le jugement de goût : le beau plaît universellement sans concept (Kant) ; l'œuvre appelle un jugement esthétique désintéressé ; mais ce critère vaut aussi pour la beauté naturelle, qui n'est pas une œuvre.",
              "III. Par l'institution et l'interprétation : avec Duchamp et Danto, l'œuvre se reconnaît au statut que lui confère un monde de l'art ; pour éviter l'arbitraire, ce statut doit être justifié par une interprétation.",
              "Conclusion : on reconnaît une œuvre moins à une propriété visible qu'à la manière dont elle exige d'être regardée et interprétée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque objet est d'abord un objet naturel, un objet technique ou une œuvre d'art, en justifiant : a) un coucher de soleil sur la mer ; b) un marteau ; c) La Joconde de Léonard de Vinci ; d) une chaise de jardin ; e) une chaise dessinée par un designer et exposée dans un musée.",
              hint: "Demandez-vous si l'objet a été produit par l'homme, puis s'il est fait d'abord pour servir ou pour être contemplé.",
              solution: [
                "a) Objet naturel : il n'est produit par aucune intention humaine, même s'il peut susciter un jugement de beauté.",
                "b) Objet technique : il est fabriqué pour un usage précis (enfoncer des clous).",
                "c) Œuvre d'art : elle n'a pas de fonction utilitaire principale et s'offre à la contemplation.",
                "d) Objet technique : elle est faite pour s'asseoir.",
                "e) Cas limite : l'objet reste utilisable, mais son exposition au musée le fait regarder comme une œuvre ; le design montre que la frontière entre technique et art n'est pas fixe.",
                "Résultat : a naturel, b et d techniques, c œuvre d'art, e cas intermédiaire qui pose le problème du critère.",
              ],
            },
            {
              level: 2,
              statement: "En vous appuyant sur l'exemple d'un palais que l'on vous demande de juger, expliquez en quatre étapes pourquoi Kant affirme que le jugement de goût est désintéressé et qu'il prétend à l'universalité sans concept.",
              hint: "Kant remarque que l'on peut critiquer la vanité des riches qui font bâtir des palais, ou préférer une auberge confortable. Ces réponses portent-elles sur la beauté du palais ?",
              solution: [
                "Étape 1 : devant un palais, on peut répondre qu'on préfère une maison confortable, ou critiquer la vanité de ceux qui l'ont fait bâtir ; mais ces réponses portent sur l'utilité ou la morale, non sur la beauté.",
                "Étape 2 : pour juger si le palais est beau, il faut ne considérer que sa représentation, indépendamment de tout intérêt pour son existence (le posséder, l'habiter) : la satisfaction est désintéressée.",
                "Étape 3 : puisque mon jugement ne dépend d'aucun intérêt personnel, je suppose qu'il doit valoir pour tous : je demande l'accord de chacun.",
                "Étape 4 : pourtant, aucune démonstration ne peut prouver que le palais est beau, car aucun concept ne détermine le beau : l'universalité est demandée, non prouvée.",
                "Conclusion : le beau plaît universellement sans concept, d'une satisfaction désintéressée ; c'est pourquoi on peut en discuter sans pouvoir trancher par des preuves.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « Une œuvre d'art doit-elle être belle ? » Formulez la problématique et proposez un plan détaillé en trois parties, avec au moins un exemple d'œuvre précis.",
              hint: "Distinguez la beauté de ce qui est représenté et la beauté de la représentation. L'art moderne renonce-t-il au beau, ou en change-t-il le sens ?",
              solution: [
                "Problématique : la tradition a défini les beaux-arts par la recherche du beau ; mais de nombreuses œuvres représentent la laideur, la violence ou la souffrance, et l'art moderne semble parfois refuser la beauté. La beauté est-elle la fin de l'art, ou seulement l'un de ses moyens ?",
                "I. L'œuvre semble devoir être belle : le beau est l'objet propre du jugement esthétique (Kant), et pour Hegel la beauté artistique est la manifestation sensible de l'esprit.",
                "II. Mais l'art peut représenter la laideur et la douleur : Aristote remarque que nous aimons contempler l'imitation d'objets pénibles à voir ; Kant lui-même note que les beaux-arts peuvent donner une belle description de choses laides. Avec Fontaine (1917), Duchamp renonce même à la beauté de l'objet.",
                "III. L'œuvre doit moins être belle que donner à voir et à penser : pour Bergson, l'art révèle ce que nous ne percevions plus ; le tableau Guernica de Picasso (1937) bouleverse par sa représentation de la violence, sans chercher à plaire.",
                "Conclusion : une œuvre n'a pas à représenter de belles choses ni même à plaire, mais elle doit être réussie, c'est-à-dire donner une forme qui fasse voir ; la beauté au sens classique n'est qu'une des manières d'y parvenir.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces moments de la réflexion sur l'art.",
            items: [
              "Platon, République, livre X : l'art comme imitation éloignée de la vérité",
              "Aristote, Poétique : l'imitation et la catharsis",
              "Batteux, Les Beaux-Arts réduits à un même principe (1746)",
              "Kant, Critique de la faculté de juger (1790)",
              "Hegel, Cours d'esthétique (professés à Berlin dans les années 1820)",
              "Duchamp, Fontaine (1917)",
              "Danto, « Le monde de l'art » (1964)",
            ],
          },
          quiz: [
            {
              q: "Selon Platon, pourquoi le peintre est-il éloigné de la vérité ?",
              options: ["Il travaille trop vite et sans méthode", "Il dépend des commandes des riches citoyens", "Il imite une copie de l'Idée", "Il refuse d'imiter la nature"],
              answer: 2,
              why: "Le peintre imite le lit du menuisier, qui imite l'Idée du lit : son œuvre est une imitation d'imitation, à trois degrés de la vérité.",
            },
            {
              q: "Que désigne la catharsis chez Aristote ?",
              options: ["La purification des passions par la tragédie", "L'obligation pour l'artiste d'imiter fidèlement la nature", "Le génie de l'artiste inspiré", "La condamnation des poètes"],
              answer: 0,
              why: "En suscitant la pitié et la crainte, la tragédie purifie le spectateur de ces passions.",
            },
            {
              q: "Pour Kant, le beau est ce qui plaît :",
              options: ["à la majorité, après un vote", "aux sens, comme un bon repas", "par son utilité reconnue", "universellement sans concept"],
              answer: 3,
              why: "Le jugement de goût demande l'accord de tous sans pouvoir le prouver par un concept ; ce qui plaît aux sens relève de l'agréable.",
            },
            {
              q: "En quelle année Duchamp présente-t-il Fontaine ?",
              options: ["1789", "1917", "1945", "1968"],
              answer: 1,
              why: "Fontaine date de 1917 : c'est l'un des ready-made les plus célèbres de Duchamp.",
            },
            {
              q: "Selon Danto, qu'est-ce qui fait d'un objet une œuvre d'art ?",
              options: ["Sa beauté visible par tous", "Son prix sur le marché", "Un monde de l'art qui l'interprète", "Le temps passé par l'artiste à le fabriquer de ses mains"],
              answer: 2,
              why: "Deux objets visuellement identiques peuvent différer : l'un est une œuvre parce qu'une théorie et une histoire de l'art lui donnent ce statut.",
            },
          ],
          trap: "Réduire l'œuvre d'art au beau ou au savoir-faire (« un enfant pourrait le faire ») sans voir que la question des critères est justement ce que l'art moderne met en jeu.",
          method: "Ayez en tête trois œuvres précises que vous pouvez décrire en deux lignes : une œuvre classique, une œuvre moderne comme Fontaine, et une œuvre que vous aimez. Un exemple bien décrit et analysé vaut mieux qu'une liste de noms.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'la-religion',
          title: 'La religion : croire, est-ce renoncer à la raison ?',
          minutes: 35,
          objectives: [
            "Définir la religion et distinguer ses dimensions : croyances, rites, communauté.",
            "Distinguer la foi, la croyance et le savoir à propos de l'existence de Dieu.",
            "Expliquer les principales critiques de la religion (Lucrèce, Marx, Freud) et leurs limites.",
            "Problématiser le rapport entre la foi et la raison.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une religion ?",
              paragraphs: [
                "Deux étymologies latines sont proposées. Cicéron rattache religio à relegere, relire, recueillir avec soin, ce qui souligne le scrupule dans l'accomplissement des rites ; l'écrivain chrétien Lactance la rattache à religare, relier, ce qui souligne le lien entre les hommes et Dieu. Chacune éclaire une dimension de la religion : un ensemble de pratiques réglées, et un lien.",
                "Le sociologue Émile Durkheim, dans Les Formes élémentaires de la vie religieuse (1912), définit la religion comme un système solidaire de croyances et de pratiques relatives à des choses sacrées, c'est-à-dire séparées et interdites, qui unissent en une même communauté morale tous ceux qui y adhèrent. La religion n'est donc pas seulement une croyance individuelle : elle a une fonction sociale, elle fait communauté.",
                "On distingue ainsi les croyances (dogmes, récits), les rites (prières, fêtes, sacrifices) et la communauté (une Église, une assemblée de fidèles). On distingue aussi la religion de la superstition, croyance en des pouvoirs occultes sans doctrine cohérente ni communauté, et de la spiritualité, recherche personnelle de sens qui peut se passer d'institution.",
              ],
              box: { label: "Définition", text: "Religion (Durkheim) : système solidaire de croyances et de pratiques relatives à des choses sacrées, qui unissent en une même communauté morale tous ceux qui y adhèrent. Sacré : ce qui est séparé du profane et entouré d'interdits." },
            },
            {
              heading: "Foi et raison : opposition ou alliance ?",
              paragraphs: [
                "La foi est une adhésion de tout l'être à ce que l'on ne peut démontrer : elle est confiance autant que croyance. Pour Kant, c'est un assentiment subjectivement suffisant mais objectivement insuffisant. Dans la préface de la seconde édition de la Critique de la raison pure (1787), il écrit qu'il a dû limiter le savoir pour faire place à la croyance : Dieu, la liberté et l'immortalité de l'âme ne peuvent être ni prouvés ni réfutés par la raison théorique, mais ce sont des postulats de la raison pratique.",
                "Pascal, dans les Pensées, écrit que le cœur a ses raisons que la raison ne connaît point : le cœur sent ce que la raison ne peut démontrer. Il propose aussi le pari : la raison ne peut décider si Dieu existe, mais il faut parier, car nous sommes embarqués ; or on a peu à perdre et une infinité à gagner à parier que Dieu existe. La foi n'est pas ici contraire à la raison : elle commence là où la raison reconnaît ses limites.",
                "Thomas d'Aquin, au XIIIe siècle, soutient que la foi et la raison ne peuvent se contredire, puisqu'elles viennent toutes deux de Dieu : la raison peut établir certaines vérités (selon lui, l'existence de Dieu), la foi en reçoit d'autres qui dépassent la raison sans la contredire. Spinoza, dans le Traité théologico-politique (1670), sépare au contraire la foi, qui vise l'obéissance et la piété, de la philosophie, qui vise la vérité.",
              ],
              box: { label: "Repère", text: "Croire/savoir : la foi n'est pas un savoir démontré, mais pas nécessairement une opinion irrationnelle. Kant : limiter le savoir pour faire place à la croyance. Pascal : le cœur a ses raisons que la raison ne connaît point." },
            },
            {
              heading: "Les critiques de la religion",
              paragraphs: [
                "Lucrèce, dans De la nature (Ier siècle av. J.-C.), reprenant Épicure, voit dans la crainte des dieux et de la mort la source des malheurs humains, et dans l'explication naturelle des phénomènes le moyen de s'en délivrer. Au XIXe siècle, Marx écrit, dans l'introduction à la Critique de la philosophie du droit de Hegel (1844), que la religion est l'opium du peuple : elle console de la misère réelle au lieu de la combattre, en promettant un bonheur illusoire.",
                "Freud, dans L'Avenir d'une illusion (1927), interprète les croyances religieuses comme des illusions, c'est-à-dire des croyances motivées par un désir : le désir infantile d'être protégé par un père tout-puissant. Il précise qu'une illusion n'est pas nécessairement une erreur : elle se définit par le désir qui la motive, non par sa fausseté. Nietzsche, de son côté, dénonce dans le christianisme une morale hostile à la vie.",
                "Ces critiques expliquent la croyance par ses causes, sociales ou psychologiques. Mais expliquer l'origine d'une croyance ne suffit pas à juger de sa vérité : c'est la distinction entre origine et fondement. Elles laissent aussi ouverte la question du sens de l'existence, que la religion prétend affronter. Bergson, dans Les Deux Sources de la morale et de la religion (1932), distingue d'ailleurs une religion statique, qui protège la société, et une religion dynamique, celle des mystiques.",
              ],
              box: { label: "À retenir", text: "Marx : la religion, opium du peuple. Freud : une illusion née du désir de protection. Repère origine/fondement : expliquer d'où vient une croyance ne prouve pas qu'elle est fausse." },
            },
          ],
          keyPoints: [
            "Religio : relegere (recueillir avec soin, selon Cicéron) ou religare (relier, selon Lactance).",
            "Durkheim : système de croyances et de pratiques relatives au sacré, qui unit une communauté.",
            "Kant : limiter le savoir pour faire place à la croyance ; Dieu est un postulat de la raison pratique.",
            "Pascal : le cœur a ses raisons que la raison ne connaît point ; le pari.",
            "Marx : la religion, opium du peuple ; Freud : une illusion fondée sur le désir de protection.",
            "Origine n'est pas fondement : expliquer une croyance ne suffit pas à la réfuter.",
          ],
          example: {
            statement: "Sujet : « Croire, est-ce renoncer à la raison ? » Formulez la problématique et proposez un plan détaillé.",
            solution: [
              "Analyse : croire, c'est tenir pour vrai sans preuve suffisante, et au sens religieux, avoir foi ; renoncer, c'est abandonner volontairement ; la raison est la faculté de juger selon des principes et des preuves.",
              "Problématique : la croyance semble commencer là où la preuve manque, donc là où la raison abdique ; mais la raison elle-même repose sur des principes qu'elle ne démontre pas, et elle peut reconnaître ses propres limites. La foi est-elle une démission de la raison, ou une réponse à ses limites ?",
              "I. Croire semble renoncer à la raison : les critiques de la religion (Lucrèce, Marx, Freud) y voient une consolation ou une illusion née du désir ; la croyance aveugle peut conduire au fanatisme.",
              "II. Mais croire n'est pas forcément irrationnel : tout savoir comporte une part de confiance ; Pascal montre que la raison, consciente de ses limites, peut parier ; Thomas d'Aquin soutient que la foi et la raison ne se contredisent pas.",
              "III. La raison peut elle-même fixer la place de la croyance : Kant limite le savoir pour faire place à la croyance ; Spinoza sépare la foi, qui vise l'obéissance, de la philosophie, qui vise la vérité. Croire raisonnablement, c'est savoir que l'on croit.",
              "Conclusion : croire n'est pas renoncer à la raison lorsque la croyance connaît ses limites et accepte l'examen ; c'est la crédulité, non la foi, qui y renonce.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, dites s'il relève surtout des croyances, des rites ou de la communauté, au sens de la définition de Durkheim : a) la prière du vendredi à la mosquée ; b) la croyance en la résurrection ; c) l'Église catholique comme institution ; d) le jeûne du Yom Kippour ; e) la croyance en la réincarnation dans l'hindouisme.",
              hint: "Les croyances sont des représentations (ce que l'on tient pour vrai), les rites des pratiques réglées, la communauté le groupe que ces croyances et ces pratiques rassemblent.",
              solution: [
                "a) Rite : une pratique réglée, accomplie en commun, ce qui manifeste aussi la communauté.",
                "b) Croyance : une représentation tenue pour vraie, qui porte sur le sacré.",
                "c) Communauté : l'institution qui rassemble les fidèles en une même communauté morale.",
                "d) Rite : une pratique réglée par le calendrier religieux juif.",
                "e) Croyance : une représentation du devenir de l'âme après la mort.",
                "Résultat : a et d sont des rites, b et e des croyances, c une communauté ; la définition de Durkheim montre que les trois sont liés.",
              ],
            },
            {
              level: 2,
              statement: "Exposez le pari de Pascal en quatre étapes, puis formulez une objection et indiquez ce que Pascal pourrait répondre.",
              hint: "Partez de l'impuissance de la raison à décider, puis comparez ce que l'on gagne ou perd dans chaque cas.",
              solution: [
                "Étape 1 : la raison ne peut ni prouver ni réfuter l'existence de Dieu.",
                "Étape 2 : pourtant, on ne peut pas s'abstenir : ne pas parier revient à parier contre ; selon la formule de Pascal, nous sommes embarqués.",
                "Étape 3 : si l'on parie que Dieu existe et qu'il existe, on gagne une infinité de vie heureuse ; s'il n'existe pas, on perd peu de chose.",
                "Étape 4 : le gain possible étant infini et la perte finie, il est raisonnable de parier que Dieu existe.",
                "Objection : on ne peut pas croire par calcul ; la foi ne se commande pas comme une décision intéressée.",
                "Réponse possible de Pascal : le pari ne donne pas la foi, il montre qu'il est raisonnable de la chercher ; il conseille d'agir comme ceux qui croient, pour diminuer les passions qui empêchent de croire.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de type bac : « La religion n'est-elle qu'une illusion ? » Formulez la problématique et proposez un plan détaillé en trois parties, en employant le repère origine/fondement.",
              hint: "Le mot « que » est décisif : le sujet ne demande pas seulement si la religion comporte des illusions, mais si elle s'y réduit.",
              solution: [
                "Problématique : les critiques modernes expliquent la religion par des besoins sociaux ou psychologiques, ce qui la réduit à une illusion ; mais expliquer l'origine d'une croyance ne suffit pas à juger de sa vérité ni de sa valeur. La religion se réduit-elle aux désirs qui l'expliquent ?",
                "I. La religion peut être comprise comme une illusion : pour Freud, elle naît du désir infantile de protection ; pour Marx, elle console de la misère sociale ; pour Lucrèce, elle entretient la crainte des dieux.",
                "II. Mais elle ne se réduit pas à une illusion : origine n'est pas fondement, et Freud lui-même précise qu'une illusion n'est pas forcément une erreur ; Durkheim montre que la religion a une réalité sociale, celle du lien qu'elle crée ; elle a aussi inspiré une morale, des œuvres et des institutions.",
                "III. La religion pose des questions que la science ne tranche pas (le sens de l'existence, la mort, le mal), mais elle doit accepter l'examen de la raison : Kant cherche ce que la religion peut être dans les limites de la simple raison (1793).",
                "Conclusion : la religion comporte une part d'illusion lorsqu'elle se fonde sur le seul désir, mais elle ne s'y réduit pas ; la philosophie distingue ce qui, en elle, relève de l'illusion et ce qui relève d'une recherche de sens.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la religion.",
            statements: [
              { text: "Pour Durkheim, la religion est seulement une affaire de croyance individuelle.", true: false, why: "Elle unit une communauté morale : la religion a une fonction sociale." },
              { text: "Marx a écrit que la religion est l'opium du peuple.", true: true, why: "La formule figure dans l'introduction à la Critique de la philosophie du droit de Hegel (1844)." },
              { text: "Pour Freud, une illusion est nécessairement une erreur.", true: false, why: "Freud précise qu'une illusion n'est pas forcément fausse : elle se définit par le désir qui la motive." },
              { text: "Kant dit avoir dû limiter le savoir pour faire place à la croyance.", true: true, why: "Dieu, la liberté et l'immortalité ne peuvent être ni prouvés ni réfutés par la raison théorique." },
              { text: "Pour Thomas d'Aquin, la foi et la raison se contredisent nécessairement.", true: false, why: "Il soutient au contraire qu'elles ne peuvent se contredire, puisqu'elles viennent toutes deux de Dieu." },
              { text: "Expliquer l'origine psychologique d'une croyance suffit à prouver qu'elle est fausse.", true: false, why: "Origine n'est pas fondement : la cause d'une croyance ne décide pas de sa vérité." },
              { text: "Pascal soutient que le cœur sent des vérités que la raison ne peut démontrer.", true: true, why: "C'est le sens de sa formule : le cœur a ses raisons que la raison ne connaît point." },
            ],
          },
          quiz: [
            {
              q: "Quelle étymologie du mot religion Lactance propose-t-il ?",
              options: ["relegere, relire avec soin", "religare, relier", "regere, gouverner", "relinquere, abandonner"],
              answer: 1,
              why: "Lactance rattache religio à religare, relier ; c'est Cicéron qui proposait relegere.",
            },
            {
              q: "Selon Durkheim, qu'est-ce qui caractérise le sacré ?",
              options: ["Il est réservé aux prêtres instruits", "Il est toujours lié à un dieu unique", "Il n'existe que dans les religions écrites", "Il est séparé et interdit"],
              answer: 3,
              why: "Les choses sacrées sont séparées du profane et entourées d'interdits ; le sacré ne suppose pas forcément un dieu unique.",
            },
            {
              q: "Que signifie la formule de Marx sur l'opium du peuple ?",
              options: ["Elle console de la misère sans la combattre", "Elle est une drogue interdite par la loi de l'État", "Elle rend les peuples plus savants et plus libres", "Elle est la source de toute richesse"],
              answer: 0,
              why: "Comme un calmant, la religion apaise la souffrance réelle en promettant un bonheur illusoire, au lieu de pousser à transformer la société.",
            },
            {
              q: "Pour Kant, l'existence de Dieu est :",
              options: ["un objet de savoir démontré par la science", "une illusion à abandonner", "un postulat de la raison pratique", "une invention des prêtres"],
              answer: 2,
              why: "La raison théorique ne peut ni la prouver ni la réfuter, mais la raison pratique, c'est-à-dire morale, la postule.",
            },
            {
              q: "Quel repère permet de répondre à l'objection « la religion naît de la peur, donc elle est fausse » ?",
              options: ["Universel et général", "Origine et fondement", "Public et privé", "Légal et légitime"],
              answer: 1,
              why: "L'origine d'une croyance (la peur) ne décide pas de son fondement, c'est-à-dire de ce qui la justifierait ou non.",
            },
          ],
          trap: "Opposer de façon simpliste la foi et la raison, comme si croire était toujours irrationnel ou savoir toujours dépourvu de confiance, sans distinguer la foi, la superstition, la crédulité et le fanatisme.",
          method: "Dans un sujet sur la religion, adoptez le point de vue du philosophe, ni apologiste ni adversaire : exposez chaque position avec ses meilleures raisons, puis employez le repère origine/fondement pour évaluer les critiques.",
        },
      ],
    },
  ],
}
