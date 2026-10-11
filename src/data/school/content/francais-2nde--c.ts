import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-2nde',
  chapters: [
    /* ==================================================================== */
    /* LA LITTÉRATURE D'IDÉES : CONVAINCRE, PERSUADER, DÉLIBÉRER             */
    /* ==================================================================== */
    {
      id: 'idees-argumenter',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'convaincre-persuader',
          title: 'Convaincre, persuader, délibérer : les stratégies argumentatives',
          minutes: 35,
          objectives: [
            "Identifier le thème, la thèse, les arguments et les exemples d'un texte argumentatif.",
            "Distinguer convaincre, persuader et délibérer, et reconnaître les trois preuves de la rhétorique : éthos, pathos, logos.",
            "Nommer les principaux types de raisonnement : déductif, inductif, par analogie, concessif, par l'absurde.",
            "Analyser la stratégie argumentative d'un texte et en mesurer l'efficacité.",
          ],
          course: [
            {
              heading: "Les éléments de l'argumentation",
              paragraphs: [
                "Argumenter, c'est chercher à faire partager à un destinataire une opinion sur une question qui fait débat. Le thème est le sujet dont on parle (par exemple : la peine de mort). La thèse est la position défendue sur ce thème (la peine de mort doit être abolie). Un texte peut aussi exposer une thèse adverse, qu'il cherche à réfuter, c'est-à-dire à démontrer fausse ou insuffisante : on distingue alors la thèse soutenue et la thèse réfutée.",
                "Pour soutenir sa thèse, l'auteur avance des arguments, c'est-à-dire des raisons générales qui la justifient (une erreur judiciaire ne peut plus être réparée après l'exécution). Il les illustre par des exemples, cas précis et concrets qui rendent l'argument tangible (le rappel d'un innocent condamné). Il ne faut pas confondre les deux : l'argument est une idée générale, l'exemple est un fait particulier. Un exemple bien choisi peut toutefois avoir une force argumentative propre : on parle alors d'exemple argumentatif.",
                "Toute argumentation suppose une situation d'énonciation : un locuteur (qui argumente), un destinataire (qu'il faut gagner à sa cause) et un contexte (un journal, une assemblée, un livre). Le même argument ne sera pas formulé de la même façon devant des députés, des lecteurs d'un quotidien ou un ami. Identifier ce destinataire est donc la première étape de toute analyse.",
              ],
              box: { label: "Définition", text: "Thème : ce dont on parle. Thèse : l'opinion défendue sur ce thème. Argument : raison générale qui soutient la thèse. Exemple : cas concret qui illustre l'argument. Thèse réfutée : opinion adverse que l'auteur combat." },
            },
            {
              heading: "Convaincre et persuader : la raison et les émotions",
              paragraphs: [
                "Convaincre, c'est obtenir l'adhésion du destinataire en s'adressant à sa raison : on avance des arguments logiques, des faits vérifiables, des raisonnements enchaînés par des connecteurs (donc, car, en effet, par conséquent). Le ton est plutôt neutre et le vocabulaire précis. Persuader, c'est obtenir l'adhésion en s'adressant à la sensibilité : on émeut, on indigne, on fait rire ou peur. Le texte multiplie alors les apostrophes au lecteur, les phrases exclamatives et interrogatives, les images frappantes, le vocabulaire affectif.",
                "Dès l'Antiquité, Aristote, dans sa Rhétorique, distingue trois moyens de gagner un auditoire. Le logos est la preuve par le raisonnement : il correspond à convaincre. Le pathos est la preuve par les émotions suscitées chez l'auditoire : il correspond à persuader. L'éthos est l'image que l'orateur donne de lui-même (sérieux, honnête, compétent, sincère) : un destinataire accorde plus volontiers sa confiance à quelqu'un qui lui paraît digne de foi.",
                "Dans la pratique, les grands textes argumentatifs combinent les trois. Un discours politique peut s'ouvrir par la présentation modeste de l'orateur (éthos), dérouler une démonstration (logos) et se terminer par une évocation pathétique destinée à emporter la décision (pathos). Analyser une stratégie argumentative, c'est repérer ce dosage et se demander pourquoi l'auteur l'a choisi en fonction de son destinataire.",
              ],
              box: { label: "À retenir", text: "Convaincre : faire appel à la raison (logos). Persuader : faire appel aux sentiments (pathos). L'éthos est l'image de lui-même que donne celui qui argumente. La plupart des textes mêlent les trois." },
            },
            {
              heading: "Les types de raisonnement",
              paragraphs: [
                "Le raisonnement déductif part d'une vérité générale pour en tirer une conclusion particulière : tous les êtres humains ont droit à la dignité ; or un condamné est un être humain ; donc il a droit à la dignité. Sa forme la plus rigoureuse est le syllogisme (deux prémisses et une conclusion). Le raisonnement inductif fait l'inverse : il part de plusieurs cas particuliers pour en tirer une loi générale (trois enquêtes successives montrent que…, on peut donc penser que…). Il est plus fragile, car un seul contre-exemple peut le ruiner.",
                "Le raisonnement par analogie rapproche deux réalités pour transférer à l'une ce que l'on admet pour l'autre (on ne confie pas un navire à un passager qui n'a jamais navigué : pourquoi confier l'État à un homme sans expérience ?). Le raisonnement concessif admet d'abord une partie de la thèse adverse pour mieux la dépasser ensuite (certes…, mais…) : il donne une image d'ouverture et rend la réfutation plus forte. Le raisonnement par l'absurde montre que la thèse adverse, poussée jusqu'au bout, mène à une conséquence inacceptable.",
                "Il faut enfin savoir repérer les procédés déloyaux. L'argument ad hominem attaque la personne de l'adversaire au lieu de discuter ses idées. L'argument d'autorité, légitime quand il cite un spécialiste reconnu, devient abusif quand il sert seulement à faire taire la discussion. La généralisation hâtive tire une loi d'un seul cas. Les reconnaître permet de lire avec un esprit critique.",
              ],
              box: { label: "Repère", text: "Déductif : du général au particulier. Inductif : du particulier au général. Analogie : par comparaison. Concessif : certes… mais. Par l'absurde : la thèse adverse mène à une conséquence inacceptable." },
            },
            {
              heading: "Délibérer : peser le pour et le contre",
              paragraphs: [
                "Délibérer, c'est examiner une question en confrontant des points de vue opposés avant de prendre une décision ou de se forger une opinion. La délibération peut être intérieure : au théâtre, le monologue délibératif montre un personnage partagé entre deux choix, comme Rodrigue dans les stances du Cid de Corneille (1637), déchiré entre son amour pour Chimène et le devoir de venger son père. Elle peut aussi réunir plusieurs voix : c'est le cas du dialogue argumentatif, où des interlocuteurs défendent tour à tour des positions différentes.",
                "Les écrivains ont souvent choisi le dialogue pour faire réfléchir le lecteur sans lui imposer une conclusion : Diderot, dans le Supplément au Voyage de Bougainville (écrit en 1772), fait discuter deux personnages sur les mœurs des Tahitiens et celles des Européens. La délibération se termine soit par une décision, soit par une question laissée ouverte, qui confie au lecteur la responsabilité de trancher. Elle repose sur des procédés précis : alternative (ou… ou…), interrogations, hypothèses (si…), objections suivies de réponses.",
              ],
              box: { label: "Définition", text: "Délibérer : examiner le pour et le contre d'une question avant de décider. La délibération peut être intérieure (monologue délibératif) ou partagée entre plusieurs personnages (dialogue argumentatif)." },
            },
          ],
          keyPoints: [
            "Thèse : opinion défendue ; argument : raison générale ; exemple : cas concret qui illustre.",
            "Convaincre s'adresse à la raison (logos), persuader aux émotions (pathos) ; l'éthos est l'image de celui qui parle.",
            "Raisonnements : déductif (général vers particulier), inductif (particulier vers général), analogique, concessif, par l'absurde.",
            "Le raisonnement concessif (certes… mais) accorde un point à l'adversaire pour mieux le réfuter.",
            "Délibérer, c'est peser le pour et le contre : monologue délibératif ou dialogue argumentatif.",
            "Repérer les procédés déloyaux : attaque ad hominem, autorité abusive, généralisation hâtive.",
          ],
          example: {
            statement: "Voici un passage écrit pour l'exercice : « On nous répète que la lecture est un loisir démodé. Certes, les écrans occupent nos soirées. Mais qui n'a jamais senti son cœur battre en tournant la dernière page d'un roman ? Lire, c'est vivre mille vies : c'est pourquoi l'école doit offrir à chaque élève le temps de lire. » Identifiez la thèse réfutée, la thèse soutenue, et dites si le texte cherche à convaincre ou à persuader.",
            solution: [
              "La thèse réfutée est annoncée par « On nous répète » : la lecture serait un loisir démodé. Le pronom « on » désigne un adversaire anonyme dont l'auteur va se démarquer.",
              "Le texte procède par concession : « Certes, les écrans occupent nos soirées » accorde un point à l'adversaire, puis « Mais » introduit la réfutation.",
              "La thèse soutenue apparaît dans la conclusion introduite par « c'est pourquoi » : l'école doit offrir à chaque élève le temps de lire.",
              "La question rhétorique (« qui n'a jamais senti son cœur battre… ? ») et le vocabulaire de l'émotion (« cœur battre ») relèvent de la persuasion : l'auteur s'adresse à la sensibilité du lecteur.",
              "La formule « Lire, c'est vivre mille vies » est une hyperbole, qui frappe l'imagination plus qu'elle ne démontre.",
              "Réponse : le texte réfute l'idée que la lecture est démodée pour soutenir qu'il faut lui donner du temps à l'école ; malgré une structure logique (certes, mais, c'est pourquoi), il cherche surtout à persuader.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune de ces phrases écrites pour l'exercice, dites si elle fait surtout appel au logos (raison), au pathos (émotion) ou à l'éthos (image de celui qui parle) : a) « Médecin depuis trente ans, j'ai vu les ravages du tabac. » b) « Imaginez cet enfant seul, grelottant dans la rue, la nuit de Noël ! » c) « Si chaque foyer réduit sa consommation d'un dixième, la facture collective baissera d'autant. » d) « Je ne suis qu'un simple citoyen, mais je refuse de me taire. »",
              hint: "Demandez-vous si la phrase démontre, si elle émeut, ou si elle met en avant la personne qui parle.",
              solution: [
                "a) Éthos : le locuteur met en avant son expérience professionnelle (« Médecin depuis trente ans ») pour paraître compétent et digne de confiance.",
                "b) Pathos : l'impératif « Imaginez », l'image pitoyable de l'enfant « seul, grelottant » et l'exclamation cherchent à émouvoir.",
                "c) Logos : la phrase présente un raisonnement hypothétique (si…, alors…) fondé sur un calcul ; elle s'adresse à la raison.",
                "d) Éthos : le locuteur se présente comme modeste et courageux ; il construit une image sympathique de lui-même.",
                "Réponse : a) éthos, b) pathos, c) logos, d) éthos.",
              ],
            },
            {
              level: 2,
              statement: "Nommez le type de raisonnement employé dans chacun de ces passages écrits pour l'exercice : a) « Toute loi injuste doit être changée ; or cette loi frappe des innocents ; elle doit donc être changée. » b) « Dans ma ville, dans la vôtre, dans tout le pays, les bibliothèques se vident : les jeunes lisent moins. » c) « Certes, les devoirs prennent du temps ; mais ils fixent ce que l'on a appris. » d) « Si l'on interdisait tout ce qui peut blesser, il faudrait interdire les couteaux de cuisine et les escaliers. » e) « Un jardin qu'on n'arrose plus se dessèche : une démocratie dont les citoyens ne votent plus s'affaiblit de même. »",
              hint: "Repérez les mots-outils : or et donc, certes et mais, si suivi d'une conséquence extrême, une comparaison entre deux domaines.",
              solution: [
                "a) Raisonnement déductif, en forme de syllogisme : une règle générale (« toute loi injuste »), un cas particulier (« or cette loi »), une conclusion (« donc »).",
                "b) Raisonnement inductif : plusieurs constats particuliers (ma ville, la vôtre, le pays) conduisent à une conclusion générale (« les jeunes lisent moins »). On pourrait objecter qu'il s'agit d'une généralisation rapide.",
                "c) Raisonnement concessif : « Certes » accorde un point à l'adversaire, « mais » introduit l'argument principal.",
                "d) Raisonnement par l'absurde : la thèse adverse (tout interdire de ce qui peut blesser) est poussée jusqu'à une conséquence ridicule, ce qui la discrédite.",
                "e) Raisonnement par analogie : le jardin et la démocratie sont rapprochés pour transférer de l'un à l'autre l'idée qu'un manque d'entretien entraîne le déclin.",
                "Réponse : a) déductif, b) inductif, c) concessif, d) par l'absurde, e) par analogie.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (écriture argumentative). Rédigez un paragraphe argumentatif d'une dizaine de lignes répondant à la question : « La lecture de romans aide-t-elle à comprendre le monde ? ». Votre paragraphe devra contenir une thèse explicite, un raisonnement concessif, au moins un argument fondé sur le logos et un passage qui relève du pathos, ainsi qu'un exemple tiré d'une œuvre que vous connaissez.",
              hint: "Construisez d'abord le squelette : thèse, concession (certes…), argument principal (mais…), exemple, phrase de conclusion. Rédigez ensuite.",
              solution: [
                "Thèse retenue : oui, le roman aide à comprendre le monde, parce qu'il fait éprouver de l'intérieur des situations que l'on ne vivra pas.",
                "Concession : on admet que le roman est une fiction et qu'il ne remplace ni l'enquête du journaliste ni l'étude de l'historien.",
                "Argument de logos : le roman donne accès aux pensées des personnages, ce qu'aucun document ne permet ; il éclaire donc les motivations humaines.",
                "Exemple : dans Germinal (1885), Zola fait vivre la condition des mineurs du Nord à travers le personnage d'Étienne Lantier.",
                "Paragraphe rédigé : « Certes, un roman reste une fiction : il ne remplace ni le travail de l'historien ni l'enquête du journaliste. Pourtant, il donne accès à ce qu'aucun document ne montre, la vie intérieure des êtres ; il permet donc de comprendre ce qui fait agir les hommes. Ainsi, dans Germinal, Zola ne se contente pas de décrire le travail de la mine : il nous fait descendre avec Étienne Lantier dans la chaleur et l'obscurité des galeries. Qui pourrait refermer ce livre sans avoir éprouvé la faim et la colère des mineurs ? Lire un roman, c'est apprendre à voir le monde avec les yeux d'un autre. »",
                "Vérification : la thèse est explicite (dernière phrase), la concession est marquée par « Certes » et « Pourtant », le logos par « donc », le pathos par la question rhétorique et le vocabulaire des sensations, l'exemple est précis (auteur, œuvre, personnage).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'argumentation.",
            statements: [
              { text: "Un exemple et un argument, c'est la même chose.", true: false, why: "L'argument est une raison générale ; l'exemple est un cas concret qui l'illustre." },
              { text: "Persuader, c'est agir sur les émotions du destinataire.", true: true, why: "La persuasion fait appel aux sentiments (pathos), alors que la conviction s'adresse à la raison (logos)." },
              { text: "L'éthos désigne l'image que l'orateur donne de lui-même.", true: true, why: "Aristote distingue l'éthos (l'orateur), le pathos (l'auditoire) et le logos (le discours raisonné)." },
              { text: "Un raisonnement inductif part d'une règle générale pour l'appliquer à un cas.", true: false, why: "C'est la définition du raisonnement déductif ; l'induction part de cas particuliers pour en tirer une règle." },
              { text: "Une concession renforce souvent la thèse de celui qui la fait.", true: true, why: "En accordant un point à l'adversaire, on paraît honnête et la réfutation qui suit gagne en force." },
              { text: "Une délibération se termine toujours par une décision.", true: false, why: "Elle peut aussi laisser la question ouverte et confier au lecteur le soin de trancher." },
              { text: "L'argument ad hominem est un procédé loyal qui discute les idées de l'adversaire.", true: false, why: "Il attaque la personne au lieu de ses idées : c'est un procédé déloyal." },
            ],
          },
          quiz: [
            {
              q: "Dans un texte argumentatif, la thèse est :",
              options: ["le sujet général dont parle le texte", "l'opinion défendue par l'auteur sur ce sujet", "un fait précis et concret qui sert à illustrer un argument", "la conclusion d'un syllogisme"],
              answer: 1,
              why: "La thèse est la position soutenue. Le sujet général est le thème, le fait précis est un exemple.",
            },
            {
              q: "Quelle preuve de la rhétorique repose sur les émotions de l'auditoire ?",
              options: ["Le logos", "L'éthos", "Le pathos", "Le syllogisme"],
              answer: 2,
              why: "Le pathos désigne l'appel aux émotions ; le logos est la preuve par le raisonnement, l'éthos l'image de l'orateur.",
            },
            {
              q: "« Certes, la ville est bruyante ; mais elle offre mille occasions de rencontres. » Ce raisonnement est :",
              options: ["concessif", "déductif", "par l'absurde", "par analogie"],
              answer: 0,
              why: "« Certes… mais » accorde un point à la thèse adverse avant de la dépasser : c'est la marque du raisonnement concessif.",
            },
            {
              q: "Quel type de texte met en scène une délibération partagée entre plusieurs voix ?",
              options: ["Le monologue délibératif", "Le dialogue argumentatif", "Le syllogisme", "La tirade pathétique d'un seul personnage"],
              answer: 1,
              why: "Le dialogue argumentatif confronte plusieurs interlocuteurs ; le monologue délibératif montre une délibération intérieure.",
            },
            {
              q: "Un raisonnement qui tire une loi générale de plusieurs cas particuliers est :",
              options: ["déductif", "concessif", "ad hominem", "inductif"],
              answer: 3,
              why: "L'induction va du particulier au général ; la déduction fait le chemin inverse.",
            },
          ],
          trap: "Confondre l'argument et l'exemple : citer un fait précis (« Zola a écrit J'accuse ») ne suffit pas, il faut formuler l'idée générale qu'il illustre (un écrivain peut peser sur le débat public).",
          method: "Pour analyser une stratégie argumentative, posez quatre questions dans l'ordre : qui parle et à qui ? quelle thèse est défendue, contre quelle autre ? par quels raisonnements ? avec quel dosage de logos, de pathos et d'éthos ? Puis concluez sur l'efficacité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'genres-argumentatifs',
          title: "Les formes de l'argumentation : essai, discours, pamphlet, apologue",
          minutes: 30,
          objectives: [
            "Identifier les principaux genres de la littérature d'idées : essai, discours, pamphlet, lettre ouverte, apologue, dialogue.",
            "Distinguer l'argumentation directe et l'argumentation indirecte.",
            "Relier la forme choisie par un auteur à son destinataire et à sa visée.",
          ],
          course: [
            {
              heading: "Argumentation directe et argumentation indirecte",
              paragraphs: [
                "La littérature d'idées regroupe les textes qui défendent une opinion, critiquent une institution ou invitent à réfléchir. On distingue deux grandes manières d'argumenter. Dans l'argumentation directe, l'auteur expose lui-même sa thèse et ses arguments, le plus souvent à la première personne : c'est le cas de l'essai, du discours, du pamphlet ou de la lettre ouverte. Dans l'argumentation indirecte, l'auteur passe par une fiction : un récit, une fable, un conte, dont le lecteur doit dégager la leçon.",
                "Chaque forme a ses avantages. L'argumentation directe est claire et explicite ; elle engage nettement son auteur. L'argumentation indirecte plaît et instruit à la fois : elle séduit le lecteur par une histoire, le fait réfléchir sans qu'il se sente sermonné, et elle a souvent permis de contourner la censure, puisque la critique est déguisée.",
              ],
              box: { label: "À retenir", text: "Argumentation directe : l'auteur défend explicitement sa thèse (essai, discours, pamphlet, lettre ouverte). Argumentation indirecte : la thèse passe par une fiction dont le lecteur tire la leçon (apologue : fable, conte philosophique, utopie)." },
            },
            {
              heading: "L'essai et le discours",
              paragraphs: [
                "L'essai est un texte en prose, de longueur variable, dans lequel un auteur réfléchit librement sur un sujet, en assumant un point de vue personnel. Le mot vient des Essais de Montaigne (1580 pour la première édition), qui y « essaie » son jugement sur les sujets les plus divers. L'essai n'a pas de plan imposé : il avance par digressions, exemples et retours en arrière. Aux XIXe et XXe siècles, il devient l'outil des penseurs et des écrivains : Simone de Beauvoir, dans Le Deuxième Sexe (1949), analyse la condition des femmes ; Albert Camus, dans Le Mythe de Sisyphe (1942), réfléchit à l'absurde.",
                "Le discours est un texte destiné à être prononcé devant un auditoire : une assemblée, un tribunal, une foule. Il obéit aux règles de l'éloquence héritées de l'Antiquité et cherche à agir immédiatement sur ceux qui l'écoutent. On y repère les marques de l'oralité : apostrophes à l'auditoire (« Messieurs », « Citoyens »), questions rhétoriques, répétitions et anaphores, rythme ample des phrases. Victor Hugo, élu député, prononce ainsi à l'Assemblée en 1849 un discours resté célèbre sur la misère, dans lequel il affirme que l'on peut la détruire.",
              ],
              box: { label: "Définition", text: "Essai : réflexion personnelle et libre, en prose, sur un sujet. Discours : texte écrit pour être prononcé devant un auditoire qu'il veut convaincre ou persuader, avec les procédés de l'éloquence." },
            },
            {
              heading: "Le pamphlet et la lettre ouverte",
              paragraphs: [
                "Le pamphlet est un texte court, violent et polémique, qui attaque une personne, un régime ou une institution. Il recourt volontiers à l'ironie, à la caricature, à l'insulte, à l'hyperbole. Après le coup d'État du 2 décembre 1851, Victor Hugo, exilé, publie Napoléon le Petit (1852), pamphlet contre Louis-Napoléon Bonaparte : le titre seul ridiculise l'empereur en le comparant à son oncle. Le registre dominant du pamphlet est polémique : il ne cherche pas à nuancer, mais à combattre.",
                "La lettre ouverte est une lettre adressée à un destinataire précis, souvent une autorité, mais publiée dans la presse pour être lue par tous. Elle a donc un double destinataire : la personne nommée et l'opinion publique, que l'auteur veut prendre à témoin. L'exemple le plus célèbre est « J'accuse… ! », lettre d'Émile Zola au président de la République Félix Faure, publiée à la une du journal L'Aurore le 13 janvier 1898 pour défendre le capitaine Dreyfus.",
              ],
              box: { label: "Repère", text: "Pamphlet : attaque brève et virulente (Hugo, Napoléon le Petit, 1852). Lettre ouverte : lettre publiée, à double destinataire (Zola, « J'accuse… ! », L'Aurore, 13 janvier 1898)." },
            },
            {
              heading: "L'apologue : argumenter par le récit",
              paragraphs: [
                "L'apologue est un récit court, à visée argumentative, dont on peut tirer une leçon morale ou philosophique. La fable en est la forme la plus connue : La Fontaine, au XVIIe siècle, compare l'apologue à un corps, le récit, qui porte une âme, la morale. Celle-ci peut être explicite (formulée au début ou à la fin) ou implicite (le lecteur doit la déduire). Le conte philosophique, illustré par Voltaire avec Candide (1759), fait voyager un héros naïf pour mettre en cause les idées reçues.",
                "L'apologue reste vivant aux XIXe, XXe et XXIe siècles. George Orwell, dans La Ferme des animaux (1945), raconte la révolte d'animaux contre leur fermier pour dénoncer la manière dont une révolution peut tourner à la dictature. Saint-Exupéry, dans Le Petit Prince (1943), fait du voyage d'un enfant une réflexion sur l'amitié et sur les valeurs des adultes. L'utopie, qui décrit une société idéale imaginaire, et la contre-utopie (ou dystopie), qui décrit une société cauchemardesque, sont aussi des fictions argumentatives : elles critiquent le monde réel en lui opposant un autre monde.",
              ],
              box: { label: "Définition", text: "Apologue : récit bref, souvent allégorique, qui illustre une leçon morale ou philosophique, explicite ou implicite. Formes : fable, conte philosophique, utopie et contre-utopie, parabole." },
            },
          ],
          keyPoints: [
            "Argumentation directe (essai, discours, pamphlet, lettre ouverte) ou indirecte (apologue).",
            "Essai : réflexion personnelle et libre ; le mot vient des Essais de Montaigne (1580).",
            "Discours : prononcé devant un auditoire ; apostrophes, questions rhétoriques, anaphores.",
            "Pamphlet : attaque courte et violente, registre polémique (Hugo, Napoléon le Petit, 1852).",
            "Lettre ouverte : double destinataire, la personne nommée et l'opinion (Zola, « J'accuse… ! », 1898).",
            "Apologue : récit + leçon (fable, conte philosophique, utopie) ; il plaît et instruit à la fois.",
          ],
          example: {
            statement: "Un auteur veut dénoncer l'indifférence des puissants envers les pauvres. Proposez deux formes d'argumentation possibles, l'une directe et l'autre indirecte, et expliquez ce que chacune apporte.",
            solution: [
              "Forme directe possible : une lettre ouverte adressée au chef du gouvernement et publiée dans un journal.",
              "Apport de la forme directe : la thèse est explicite, l'auteur s'engage personnellement, et le double destinataire (le dirigeant et les lecteurs) permet de prendre l'opinion à témoin.",
              "Forme indirecte possible : un apologue, par exemple une fable où un lion repu refuse de partager sa proie avec des animaux affamés.",
              "Apport de la forme indirecte : le récit plaît, le lecteur découvre lui-même la leçon et s'en souvient mieux ; la critique, déguisée sous l'allégorie, peut aussi échapper à la censure.",
              "Réponse : la lettre ouverte frappe par sa clarté et l'engagement de son auteur ; l'apologue agit par le plaisir du récit et laisse le lecteur tirer seul la leçon.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque texte au genre argumentatif qui lui correspond (essai, discours, pamphlet, lettre ouverte, apologue) : a) Candide de Voltaire (1759) ; b) « J'accuse… ! » de Zola (1898) ; c) Napoléon le Petit de Hugo (1852) ; d) Les Essais de Montaigne (1580) ; e) une intervention de Victor Hugo à l'Assemblée sur la misère (1849).",
              hint: "Demandez-vous à chaque fois : est-ce une fiction ? une lettre publiée ? une attaque violente ? une parole prononcée ? une réflexion libre ?",
              solution: [
                "a) Candide est un conte philosophique : c'est un apologue (argumentation indirecte par le récit).",
                "b) « J'accuse… ! » est une lettre au président de la République publiée dans L'Aurore : c'est une lettre ouverte.",
                "c) Napoléon le Petit attaque avec violence Louis-Napoléon Bonaparte : c'est un pamphlet.",
                "d) Les Essais sont une réflexion personnelle sur des sujets variés : c'est l'œuvre qui a donné son nom au genre de l'essai.",
                "e) Une intervention prononcée devant des députés est un discours.",
                "Réponse : a) apologue, b) lettre ouverte, c) pamphlet, d) essai, e) discours.",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage écrit pour l'exercice : « Citoyens ! Vous qui m'écoutez, combien d'entre vous ont vu, cet hiver, des familles entières dormir sous les ponts ? Combien ? Et nous resterions immobiles ? Non ! Nous ne pouvons pas, nous ne devons pas, nous ne voulons pas l'accepter. » Identifiez le genre de ce texte et relevez trois procédés qui le justifient.",
              hint: "Cherchez les marques d'un auditoire présent et les procédés propres à l'éloquence.",
              solution: [
                "Genre : il s'agit d'un discours, destiné à être prononcé devant une assemblée.",
                "Premier procédé : l'apostrophe « Citoyens ! » et l'adresse « Vous qui m'écoutez » supposent un auditoire présent.",
                "Deuxième procédé : les questions rhétoriques (« combien d'entre vous… ? », « Et nous resterions immobiles ? ») impliquent l'auditoire et appellent une réponse évidente.",
                "Troisième procédé : la gradation et l'anaphore « nous ne pouvons pas, nous ne devons pas, nous ne voulons pas » créent un rythme ternaire qui va de l'impossibilité à la volonté.",
                "Réponse : un discours, reconnaissable à l'apostrophe, aux questions rhétoriques et au rythme ternaire anaphorique, qui visent à persuader l'auditoire d'agir.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (question de réflexion). « L'apologue est-il plus efficace que l'argumentation directe pour faire réfléchir le lecteur ? » Proposez un plan détaillé en deux parties, avec deux arguments et un exemple par partie.",
              hint: "Partie 1 : les forces de l'apologue. Partie 2 : les forces de l'argumentation directe, ou les limites de l'apologue. Appuyez chaque argument sur une œuvre précise.",
              solution: [
                "Problématique : le détour par la fiction rend-il la réflexion plus forte, ou risque-t-il d'affaiblir le message ?",
                "Partie 1, l'apologue séduit et fait réfléchir. Argument 1 : le récit plaît et retient l'attention ; la leçon s'imprime mieux dans la mémoire (exemple : les fables de La Fontaine, que l'on retient souvent par cœur). Argument 2 : le lecteur découvre lui-même la leçon, ce qui le rend actif ; la critique déguisée peut aussi échapper à la censure (exemple : Candide de Voltaire dénonce la guerre et l'intolérance sous couvert d'un conte).",
                "Partie 2, l'argumentation directe garde des atouts décisifs. Argument 1 : elle est explicite et ne laisse pas de place au contresens, alors qu'un apologue peut être mal compris ou réduit à une simple histoire. Argument 2 : elle engage son auteur, ce qui lui donne une force d'action dans l'urgence (exemple : « J'accuse… ! » de Zola, en 1898, relance l'affaire Dreyfus par la clarté de ses accusations).",
                "Conclusion : l'apologue est très efficace pour faire réfléchir durablement ; l'argumentation directe l'est davantage pour agir dans l'urgence. Les deux formes se complètent selon le destinataire et le moment.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque genre argumentatif à sa définition.",
            pairs: [
              { left: "Essai", right: "Réflexion personnelle et libre, en prose, sur un sujet" },
              { left: "Discours", right: "Texte prononcé devant un auditoire à convaincre" },
              { left: "Pamphlet", right: "Attaque courte et violente contre une personne ou un régime" },
              { left: "Lettre ouverte", right: "Lettre publiée, adressée à une personne et à l'opinion" },
              { left: "Apologue", right: "Récit bref dont on tire une leçon morale" },
              { left: "Contre-utopie", right: "Fiction qui décrit une société cauchemardesque pour critiquer la nôtre" },
            ],
          },
          quiz: [
            {
              q: "Quel genre relève de l'argumentation indirecte ?",
              options: ["Le pamphlet", "La lettre ouverte", "L'essai", "L'apologue"],
              answer: 3,
              why: "L'apologue passe par un récit fictif dont le lecteur tire la leçon ; les autres genres exposent directement la thèse.",
            },
            {
              q: "Le mot « essai », au sens littéraire, vient de l'œuvre :",
              options: ["de Montaigne", "de Voltaire", "de Zola", "de Jean-Jacques Rousseau"],
              answer: 0,
              why: "Montaigne publie ses Essais en 1580 : il y « essaie » son jugement sur des sujets variés.",
            },
            {
              q: "Pourquoi dit-on qu'une lettre ouverte a un double destinataire ?",
              options: ["Parce qu'elle est toujours signée par deux auteurs différents", "Parce qu'elle vise la personne nommée et les lecteurs", "Parce qu'elle doit être envoyée par la poste puis par le journal", "Parce qu'elle mêle des passages en vers et en prose"],
              answer: 1,
              why: "Publiée dans la presse, elle s'adresse à une personne précise tout en prenant l'opinion publique à témoin.",
            },
            {
              q: "Napoléon le Petit (1852), de Victor Hugo, est :",
              options: ["un conte philosophique", "un discours à l'Assemblée", "un pamphlet", "une utopie"],
              answer: 2,
              why: "Écrit en exil après le coup d'État de 1851, c'est une attaque virulente contre Louis-Napoléon Bonaparte : un pamphlet.",
            },
            {
              q: "Quelle marque est la plus caractéristique d'un discours ?",
              options: ["Les apostrophes à l'auditoire", "La présence d'animaux personnifiés", "Une morale en vers à la fin", "Le récit au passé simple"],
              answer: 0,
              why: "Le discours s'adresse à un auditoire présent, qu'il interpelle directement (« Messieurs », « Citoyens »).",
            },
          ],
          trap: "Croire qu'un apologue n'argumente pas parce qu'il raconte une histoire : la fiction est justement le moyen choisi pour défendre une thèse, qu'il faut savoir formuler.",
          method: "Face à un texte inconnu, cherchez trois indices pour identifier son genre : la présence ou non d'une fiction, le destinataire (lecteur, auditoire, autorité nommée) et le registre (polémique, didactique, pathétique). Le genre éclaire ensuite la stratégie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrivain-engage',
          title: "L'écrivain engagé : de Hugo à Zola",
          minutes: 35,
          objectives: [
            "Définir l'engagement de l'écrivain et la figure de l'intellectuel.",
            "Situer les combats de Victor Hugo (peine de mort, misère, opposition au Second Empire) dans leur contexte historique.",
            "Expliquer le rôle d'Émile Zola dans l'affaire Dreyfus et la portée de « J'accuse… ! ».",
            "Analyser les procédés d'un texte engagé.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un écrivain engagé ?",
              paragraphs: [
                "Un écrivain engagé met sa plume et sa notoriété au service d'une cause politique, sociale ou morale. Il ne se contente pas de créer des œuvres : il intervient dans le débat public, prend position et accepte d'en subir les conséquences. Le terme « engagement » sera théorisé plus tard par Jean-Paul Sartre, dans Qu'est-ce que la littérature ? (1948), mais l'attitude est bien plus ancienne : au XVIIIe siècle déjà, Voltaire défend Jean Calas, protestant injustement exécuté à Toulouse en 1762, et obtient sa réhabilitation.",
                "Au XIXe siècle, plusieurs facteurs favorisent l'engagement des écrivains : l'essor de la presse, qui leur offre une tribune (voir le chapitre suivant), les bouleversements politiques (révolutions de 1830 et 1848, coup d'État de 1851, Commune de 1871) et la conviction romantique que le poète a une mission. Victor Hugo et Émile Zola incarnent deux moments de cette histoire : le poète-prophète qui guide le peuple, puis l'intellectuel qui défend la vérité et la justice.",
              ],
              box: { label: "Définition", text: "Écrivain engagé : écrivain qui prend publiquement position sur les questions de son temps et met son œuvre et sa notoriété au service d'une cause. Intellectuel : depuis l'affaire Dreyfus, personne reconnue pour son savoir ou son œuvre qui intervient dans le débat public au nom de valeurs universelles." },
            },
            {
              heading: "Victor Hugo : les combats d'une vie",
              paragraphs: [
                "Victor Hugo (1802-1885) combat d'abord la peine de mort. Dans Le Dernier Jour d'un condamné (1829), il donne la parole à un condamné anonyme qui raconte ses dernières semaines : en ne précisant ni son nom ni son crime, Hugo fait de lui le représentant de tous les condamnés et oblige le lecteur à s'interroger sur la peine elle-même. Il prolonge ce combat avec Claude Gueux (1834), puis comme homme politique.",
                "Élu député sous la Deuxième République, Hugo défend aussi la cause des pauvres : dans son discours sur la misère (1849), il affirme devant l'Assemblée que la misère peut être détruite. Lorsque Louis-Napoléon Bonaparte s'empare du pouvoir par le coup d'État du 2 décembre 1851, Hugo s'y oppose et doit s'exiler, à Bruxelles puis dans les îles anglo-normandes de Jersey et de Guernesey. Il y écrit contre le nouveau régime le pamphlet Napoléon le Petit (1852) et le recueil satirique Les Châtiments (1853).",
                "Refusant l'amnistie accordée en 1859, il ne rentre en France qu'en 1870, après la chute du Second Empire. En exil, il achève Les Misérables (1862), roman qui fait de Jean Valjean, ancien bagnard, et de Fantine, ouvrière tombée dans la misère, les visages d'une société injuste. À sa mort en 1885, des funérailles nationales sont organisées et il est inhumé au Panthéon.",
              ],
              box: { label: "Repère", text: "Hugo : Le Dernier Jour d'un condamné (1829), discours sur la misère (1849), exil de 1851 à 1870, Napoléon le Petit (1852), Les Châtiments (1853), Les Misérables (1862), Panthéon (1885)." },
            },
            {
              heading: "Émile Zola et l'affaire Dreyfus",
              paragraphs: [
                "En 1894, le capitaine Alfred Dreyfus, officier juif, est condamné pour trahison au profit de l'Allemagne, sur la base d'un document (le « bordereau ») qu'il n'a pas écrit. Il est dégradé publiquement en janvier 1895 et déporté au bagne de l'île du Diable, en Guyane. Les éléments qui désignent le véritable coupable, le commandant Esterhazy, sont étouffés par l'état-major, et Esterhazy est acquitté en janvier 1898. L'affaire divise profondément la France entre dreyfusards, partisans de la révision du procès, et antidreyfusards ; l'antisémitisme y joue un rôle majeur.",
                "Romancier célèbre, auteur de la série des Rougon-Macquart, Émile Zola (1840-1902) publie le 13 janvier 1898, à la une de L'Aurore, une lettre ouverte au président de la République Félix Faure, intitulée « J'accuse… ! ». Il y retrace l'affaire et termine par une série de paragraphes commençant par « J'accuse », où il nomme les responsables. Cette anaphore donne au texte la force d'un réquisitoire. Zola sait qu'il s'expose à des poursuites : il est effectivement condamné pour diffamation et doit s'exiler en Angleterre pendant près d'un an.",
                "La lettre relance l'affaire. Dreyfus est rejugé en 1899, condamné de nouveau puis gracié, et enfin réhabilité en 1906. Zola, mort en 1902, n'aura pas vu cette réhabilitation ; ses cendres sont transférées au Panthéon en 1908. C'est à l'occasion de l'affaire que le mot « intellectuel » s'impose pour désigner les écrivains, savants et artistes qui s'engagent publiquement au nom de la vérité et de la justice.",
              ],
              box: { label: "Repère", text: "1894 : condamnation de Dreyfus. 13 janvier 1898 : « J'accuse… ! » dans L'Aurore. 1899 : second procès et grâce. 1906 : réhabilitation de Dreyfus. 1908 : Zola au Panthéon." },
            },
            {
              heading: "Les armes de l'écrivain engagé",
              paragraphs: [
                "L'écrivain engagé utilise toutes les formes vues dans ce chapitre : le roman (Les Misérables), le récit à thèse (Le Dernier Jour d'un condamné), la poésie satirique (Les Châtiments), le discours, le pamphlet, la lettre ouverte. Il joue sur le pathos pour émouvoir (le sort du condamné, des enfants misérables), sur le logos pour démontrer (le récit précis des faits dans « J'accuse… ! ») et sur son éthos : sa célébrité et son courage donnent du poids à sa parole.",
                "Pour analyser un texte engagé, on repère la cause défendue, l'adversaire visé, les registres (polémique, pathétique, ironique, lyrique) et les procédés d'insistance : anaphores, apostrophes, hyperboles, antithèses entre victimes et coupables. On s'interroge aussi sur les risques pris par l'auteur, car l'engagement se mesure à ce qu'il coûte : l'exil pour Hugo, la condamnation et l'exil pour Zola.",
              ],
            },
          ],
          keyPoints: [
            "Écrivain engagé : il prend publiquement position et met son œuvre au service d'une cause.",
            "Hugo contre la peine de mort : Le Dernier Jour d'un condamné (1829), Claude Gueux (1834).",
            "Hugo contre le Second Empire : exil de 1851 à 1870, Napoléon le Petit (1852), Les Châtiments (1853).",
            "Zola, « J'accuse… ! », lettre ouverte dans L'Aurore le 13 janvier 1898 : anaphore et réquisitoire.",
            "Dreyfus est réhabilité en 1906 ; l'affaire fait naître la figure de l'intellectuel.",
            "Le mot « engagement » est théorisé par Sartre (Qu'est-ce que la littérature ?, 1948).",
          ],
          example: {
            statement: "Expliquez en quelques lignes pourquoi l'on peut dire que Victor Hugo et Émile Zola ont pris des risques en s'engageant.",
            solution: [
              "Rappel de la notion : l'engagement se mesure à ce qu'il coûte à l'écrivain.",
              "Pour Hugo : son opposition au coup d'État du 2 décembre 1851 le contraint à l'exil ; il reste près de vingt ans hors de France (1851-1870) et refuse même l'amnistie de 1859.",
              "Pour Zola : en accusant nommément des officiers et des juges dans « J'accuse… ! » (1898), il s'expose volontairement à un procès ; il est condamné pour diffamation et doit s'exiler en Angleterre.",
              "Dans les deux cas, l'écrivain renonce à sa tranquillité et met en jeu sa réputation.",
              "Réponse : Hugo et Zola ont pris des risques réels, l'exil pour l'un, la condamnation et l'exil pour l'autre, ce qui donne à leur parole une grande force morale (éthos).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le bon élément : a) Le Dernier Jour d'un condamné de Victor Hugo est publié en … ; b) « J'accuse… ! » paraît dans le journal … ; c) Le capitaine Dreyfus est réhabilité en … ; d) Hugo s'exile après le coup d'État de … ; e) Le mot « engagement » est théorisé par … dans Qu'est-ce que la littérature ?",
              hint: "Reprenez les deux encadrés Repère du cours.",
              solution: [
                "a) 1829.",
                "b) L'Aurore (le 13 janvier 1898).",
                "c) 1906.",
                "d) 1851 (coup d'État du 2 décembre 1851 de Louis-Napoléon Bonaparte).",
                "e) Jean-Paul Sartre (1948).",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage écrit pour l'exercice, à la manière d'un texte engagé : « J'accuse l'indifférence qui laisse des enfants travailler à l'usine. J'accuse les lois qui ferment les yeux. J'accuse enfin chacun de nous, qui détournons le regard. » Relevez et nommez deux procédés, puis indiquez l'effet produit.",
              hint: "Observez le début de chaque phrase et la manière dont l'accusation s'élargit.",
              solution: [
                "Premier procédé : l'anaphore de « J'accuse » en tête des trois phrases. Elle martèle l'accusation, donne au texte le rythme d'un réquisitoire et rappelle la lettre de Zola.",
                "Second procédé : la gradation des cibles, de l'abstraction (« l'indifférence ») aux institutions (« les lois ») puis au lecteur lui-même (« chacun de nous »).",
                "Effet : le lecteur ne peut plus rester spectateur ; l'emploi du « nous » l'inclut parmi les responsables et le pousse à agir.",
                "Réponse : anaphore et gradation créent un réquisitoire qui culmine en mettant en cause le lecteur, ce qui relève à la fois de la conviction et de la persuasion.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (dissertation, initiation). Sujet : « Un écrivain doit-il s'engager dans les combats de son temps ? » Rédigez l'introduction (amorce, sujet, problématique, annonce du plan) en vous appuyant sur les exemples de Hugo et de Zola.",
              hint: "Partez d'un fait précis pour l'amorce, reformulez le sujet en définissant « s'engager », puis posez la question qui oppose la mission de l'écrivain et la liberté de l'art.",
              solution: [
                "Amorce : le 13 janvier 1898, Émile Zola, romancier célèbre, publie à la une de L'Aurore une lettre ouverte, « J'accuse… ! », qui relance l'affaire Dreyfus et lui vaut une condamnation.",
                "Présentation du sujet : s'engager, c'est prendre publiquement position et mettre son œuvre au service d'une cause. Le sujet demande si cette attitude est un devoir pour l'écrivain.",
                "Problématique : l'écrivain doit-il mettre sa plume au service des combats de son époque, ou la littérature perd-elle quelque chose à se faire militante ?",
                "Annonce du plan : nous verrons d'abord que l'engagement donne à l'écrivain une responsabilité et une efficacité particulières, comme le montrent Hugo et Zola ; puis nous examinerons les limites de cette exigence, l'œuvre risquant de se réduire à un message ; nous montrerons enfin que toute œuvre, même sans thèse, peut changer notre regard sur le monde.",
                "Introduction rédigée : « Le 13 janvier 1898, Émile Zola publie à la une de L'Aurore une lettre ouverte, « J'accuse… ! », qui relance l'affaire Dreyfus et lui vaut une condamnation. Avant lui, Victor Hugo avait choisi l'exil plutôt que de se soumettre au Second Empire. S'engager, c'est prendre publiquement parti et mettre son œuvre au service d'une cause. Mais est-ce un devoir ? L'écrivain doit-il consacrer sa plume aux combats de son temps, ou la littérature risque-t-elle de s'appauvrir en devenant militante ? Nous verrons d'abord que l'engagement confère à l'écrivain une efficacité particulière, puis qu'il comporte des limites, avant de montrer que toute œuvre véritable peut transformer notre regard sur le monde. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "1829 : Hugo publie Le Dernier Jour d'un condamné",
              "1851 : coup d'État de Louis-Napoléon Bonaparte, Hugo part en exil",
              "1862 : publication des Misérables",
              "1894 : condamnation du capitaine Dreyfus",
              "1898 : Zola publie « J'accuse… ! » dans L'Aurore",
              "1906 : réhabilitation de Dreyfus",
            ],
          },
          quiz: [
            {
              q: "À qui la lettre « J'accuse… ! » est-elle adressée ?",
              options: ["Au capitaine Dreyfus", "Au commandant Esterhazy", "Au président de la République Félix Faure", "Aux juges du conseil de guerre qui ont condamné Dreyfus"],
              answer: 2,
              why: "Zola s'adresse au président Félix Faure, mais la lettre, publiée dans L'Aurore, vise aussi l'opinion publique.",
            },
            {
              q: "Dans quelle œuvre Hugo donne-t-il la parole à un condamné anonyme ?",
              options: ["Les Châtiments", "Le Dernier Jour d'un condamné", "Napoléon le Petit", "Notre-Dame de Paris, roman de 1831"],
              answer: 1,
              why: "Dans Le Dernier Jour d'un condamné (1829), le narrateur n'a ni nom ni crime précisé : il représente tous les condamnés.",
            },
            {
              q: "Pourquoi Victor Hugo s'exile-t-il de 1851 à 1870 ?",
              options: ["Il est condamné pour diffamation après un article", "Il fuit une épidémie de choléra qui frappe Paris", "Il cherche le calme pour écrire loin de la capitale", "Il refuse le coup d'État de 1851"],
              answer: 3,
              why: "Opposant au coup d'État du 2 décembre 1851, Hugo doit quitter la France et ne revient qu'à la chute du Second Empire.",
            },
            {
              q: "Quel procédé structure la fin de « J'accuse… ! » ?",
              options: ["Une anaphore", "Une métaphore filée", "Un dialogue"],
              answer: 0,
              why: "Les derniers paragraphes commencent tous par « J'accuse » : cette anaphore donne au texte la force d'un réquisitoire.",
            },
            {
              q: "En quelle année Dreyfus est-il réhabilité ?",
              options: ["1898", "1899", "1902", "1906"],
              answer: 3,
              why: "Après un second procès en 1899 suivi d'une grâce, Dreyfus est réhabilité en 1906, quatre ans après la mort de Zola.",
            },
          ],
          trap: "Croire que « J'accuse… ! » a immédiatement libéré Dreyfus : la lettre relance l'affaire, mais Zola est condamné, Dreyfus est rejugé et condamné de nouveau en 1899, et la réhabilitation n'arrive qu'en 1906.",
          method: "Construisez une frise chronologique personnelle des écrivains engagés (Voltaire et Calas, Hugo, Zola, Sartre) : situer chaque combat dans son contexte historique permet d'en comprendre les enjeux et de nourrir vos introductions de dissertation.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA PRESSE ET LE DÉBAT D'IDÉES DU XIXe AU XXIe SIÈCLE                  */
    /* ==================================================================== */
    {
      id: 'idees-presse',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'essor-presse',
          title: "L'essor de la presse au XIXe siècle et les écrivains journalistes",
          minutes: 30,
          objectives: [
            "Expliquer les causes de l'essor de la presse au XIXe siècle : techniques, alphabétisation, publicité, liberté de la presse.",
            "Situer quelques repères : La Presse de Girardin (1836), Le Petit Journal (1863), la loi du 29 juillet 1881.",
            "Identifier les liens entre littérature et journalisme : roman-feuilleton, chronique, critique, écrivains journalistes.",
            "Analyser la représentation du journalisme dans le roman (Balzac, Maupassant).",
          ],
          course: [
            {
              heading: "Une révolution de la presse",
              paragraphs: [
                "Au début du XIXe siècle, le journal est un objet coûteux, vendu surtout par abonnement à un public restreint de notables. En 1836, Émile de Girardin lance La Presse, un quotidien dont l'abonnement coûte deux fois moins cher que celui de ses concurrents : il compense ce prix réduit par les recettes de la publicité, les annonces payées par des commerçants. Ce modèle économique, qui associe prix bas, grand nombre de lecteurs et publicité, ouvre l'ère de la presse moderne.",
                "En 1863 paraît Le Petit Journal, vendu un sou (cinq centimes) au numéro, dans la rue et dans les kiosques, et non plus seulement par abonnement. Il touche un public populaire avec des faits divers, des feuilletons et des nouvelles brèves. À la fin du siècle, plusieurs quotidiens populaires (Le Petit Journal, Le Petit Parisien, Le Matin, Le Journal) tirent à des centaines de milliers d'exemplaires, et certains dépassent le million : la période qui va de 1881 à 1914 est souvent appelée l'âge d'or de la presse.",
              ],
              box: { label: "Repère", text: "1836 : La Presse d'Émile de Girardin, quotidien à prix réduit financé par la publicité. 1863 : Le Petit Journal, vendu un sou au numéro. 1881-1914 : âge d'or de la presse écrite en France." },
            },
            {
              heading: "Les causes de cet essor",
              paragraphs: [
                "Les progrès techniques transforment la fabrication et la diffusion du journal : la presse rotative imprime beaucoup plus vite, le papier fabriqué à partir de bois coûte moins cher, le télégraphe électrique fait circuler les nouvelles en quelques heures et le chemin de fer transporte les journaux dans toute la France. L'information devient plus rapide et plus abondante.",
                "Le lectorat s'élargit grâce aux progrès de l'alphabétisation, que renforcent les lois Jules Ferry de 1881 et 1882, qui rendent l'école primaire gratuite, obligatoire et laïque. Enfin, le cadre politique change : après des décennies de censure, d'autorisations préalables et de procès (sous la Restauration, la monarchie de Juillet puis le Second Empire, où la presse est étroitement surveillée), la loi du 29 juillet 1881 proclame la liberté de la presse. Elle supprime l'autorisation préalable et ne sanctionne plus que des abus précis, comme la diffamation ; elle reste aujourd'hui le texte de référence en France.",
              ],
              box: { label: "À retenir", text: "Quatre causes : des techniques nouvelles (rotative, télégraphe, chemin de fer), un public plus large (alphabétisation, lois Ferry), un modèle économique (prix bas et publicité) et la liberté de la presse (loi du 29 juillet 1881)." },
            },
            {
              heading: "Le roman-feuilleton et la chronique",
              paragraphs: [
                "Pour fidéliser leurs lecteurs, les journaux publient des romans par épisodes, au bas de la page : c'est le roman-feuilleton. La Vieille Fille de Balzac, publiée dans La Presse en 1836, est souvent présentée comme l'un des premiers. Le genre connaît un immense succès avec Les Mystères de Paris d'Eugène Sue (1842-1843), puis avec Alexandre Dumas, dont Les Trois Mousquetaires paraissent en feuilleton en 1844. Chaque épisode se termine sur un moment de suspense qui donne envie d'acheter le numéro suivant.",
                "Le journal accueille aussi la critique (littéraire, théâtrale, artistique) et la chronique, article régulier dans lequel un auteur commente l'actualité avec un ton personnel. Pour beaucoup d'écrivains, le journalisme est un métier qui leur permet de vivre et de se faire connaître : Théophile Gautier y publie ses critiques, Zola défend dans la presse le peintre Manet, Maupassant écrit des centaines de chroniques et de contes pour Le Gaulois ou le Gil Blas. Littérature et presse se nourrissent l'une l'autre.",
              ],
              box: { label: "Définition", text: "Roman-feuilleton : roman publié par épisodes dans un journal, chaque épisode s'achevant sur un moment de suspense. Chronique : article régulier, signé, où l'auteur commente l'actualité avec un ton personnel." },
            },
            {
              heading: "Écrivains journalistes et regards critiques",
              paragraphs: [
                "La presse devient aussi une arme dans le débat d'idées. Jules Vallès fonde Le Cri du peuple en 1871, journal engagé aux côtés de la Commune. Marguerite Durand fonde en 1897 La Fronde, quotidien entièrement conçu et rédigé par des femmes, qui défend leurs droits. Zola publie « J'accuse… ! » dans L'Aurore en 1898. Le journaliste-écrivain s'impose comme une figure de l'espace public.",
                "Les romanciers portent pourtant un regard sévère sur ce monde. Dans Illusions perdues (1837-1843), Balzac montre le jeune poète Lucien de Rubempré découvrant un journalisme corrompu, où les articles s'achètent et où la critique se vend au plus offrant. Dans Bel-Ami (1885), Maupassant raconte l'ascension de Georges Duroy, ancien sous-officier sans talent, qui réussit grâce au journal La Vie française, à l'intrigue et aux femmes. Ces romans posent une question toujours actuelle : la presse sert-elle la vérité, ou le pouvoir et l'argent ?",
              ],
            },
          ],
          keyPoints: [
            "1836 : La Presse de Girardin, prix réduit financé par la publicité.",
            "1863 : Le Petit Journal, vendu un sou au numéro, presse populaire.",
            "Causes de l'essor : rotative, télégraphe, chemin de fer, alphabétisation (lois Ferry), loi du 29 juillet 1881.",
            "Roman-feuilleton : épisodes à suspense (Sue, Les Mystères de Paris ; Dumas, Les Trois Mousquetaires).",
            "Écrivains journalistes : Gautier, Zola, Maupassant, Vallès ; La Fronde de Marguerite Durand (1897).",
            "Regards critiques : Balzac, Illusions perdues ; Maupassant, Bel-Ami (1885).",
          ],
          example: {
            statement: "Expliquez en quoi le roman-feuilleton répond aux besoins des journaux du XIXe siècle et à ceux des écrivains.",
            solution: [
              "Besoin des journaux : avec des prix bas, ils doivent vendre beaucoup et fidéliser leurs lecteurs pour attirer la publicité.",
              "Le roman-feuilleton répond à ce besoin : publié par épisodes, chaque partie s'achevant sur un suspense, il pousse le lecteur à acheter le numéro suivant (exemple : Les Mystères de Paris d'Eugène Sue, 1842-1843).",
              "Besoin des écrivains : vivre de leur plume et toucher un large public.",
              "Le feuilleton leur assure une rémunération régulière et une grande notoriété, comme pour Alexandre Dumas avec Les Trois Mousquetaires (1844).",
              "Réponse : le roman-feuilleton est un échange gagnant, le journal gagne des lecteurs fidèles, l'écrivain gagne un revenu et un public.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant : 1836, 1863, 1881, 1885, 1897. Événements : a) loi sur la liberté de la presse ; b) création de La Fronde par Marguerite Durand ; c) lancement de La Presse par Émile de Girardin ; d) publication de Bel-Ami de Maupassant ; e) création du Petit Journal, vendu un sou.",
              hint: "Commencez par les dates que vous connaissez le mieux : la loi sur la presse est contemporaine des lois Ferry.",
              solution: [
                "1836 : c) lancement de La Presse par Émile de Girardin.",
                "1863 : e) création du Petit Journal, vendu un sou.",
                "1881 : a) loi du 29 juillet 1881 sur la liberté de la presse.",
                "1885 : d) publication de Bel-Ami de Maupassant.",
                "1897 : b) création de La Fronde par Marguerite Durand.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez, en un paragraphe organisé, pourquoi la presse connaît un essor considérable entre 1836 et 1914. Vous devez mobiliser au moins trois causes différentes et deux exemples précis.",
              hint: "Classez les causes en catégories : techniques, sociales, économiques, politiques. Chaque cause doit être expliquée, pas seulement nommée.",
              solution: [
                "Cause économique : Émile de Girardin, avec La Presse (1836), invente un modèle fondé sur un prix bas compensé par la publicité ; Le Petit Journal (1863), vendu un sou au numéro, va plus loin et conquiert un public populaire.",
                "Cause technique : la presse rotative accélère l'impression, le télégraphe transmet les nouvelles rapidement et le chemin de fer diffuse les journaux dans tout le pays.",
                "Cause sociale : l'alphabétisation progresse, renforcée par les lois Ferry (1881-1882), ce qui crée de nouveaux lecteurs.",
                "Cause politique : la loi du 29 juillet 1881 met fin à l'autorisation préalable et garantit la liberté de la presse.",
                "Paragraphe rédigé : « Entre 1836 et 1914, la presse devient un média de masse sous l'effet de causes multiples. Sur le plan économique, Girardin, en lançant La Presse en 1836, finance un prix réduit par la publicité, et Le Petit Journal, vendu un sou à partir de 1863, gagne le public populaire. Les progrès techniques, de la rotative au télégraphe et au chemin de fer, permettent de produire et de diffuser vite de nombreux exemplaires. Dans le même temps, l'alphabétisation, renforcée par les lois Ferry, élargit le lectorat. Enfin, la loi du 29 juillet 1881 garantit la liberté de la presse : s'ouvre alors un véritable âge d'or. »",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (écrit d'appropriation). Imaginez la courte chronique (une quinzaine de lignes) qu'un journaliste de 1898 aurait pu publier le lendemain de « J'accuse… ! », pour défendre le droit d'un écrivain à intervenir dans la presse. Votre texte respectera les codes de la chronique et utilisera au moins deux procédés argumentatifs étudiés.",
              hint: "Une chronique est signée et personnelle : employez la première personne, un titre accrocheur, et combinez un argument logique et un appel à l'émotion.",
              solution: [
                "Codes de la chronique à respecter : un titre, la première personne, un ton personnel, un lien avec l'actualité du jour (la publication de « J'accuse… ! » le 13 janvier 1898), une signature.",
                "Thèse : un écrivain célèbre a le droit, et même le devoir, de mettre sa notoriété au service de la vérité.",
                "Procédés prévus : une concession (certes, Zola n'est ni juge ni militaire), une question rhétorique, une antithèse entre le silence et la parole.",
                "Proposition de chronique : « Le droit de parler. Certes, M. Zola n'est ni juge ni officier ; on lui reproche d'avoir quitté ses romans pour se mêler d'une affaire qui ne le regarde pas. Mais qui donc a le droit de parler, sinon celui que tout un pays écoute ? Depuis des mois, on se tait ; hier, un homme a parlé. Le silence protège les coupables, la parole seule défend l'innocent. Si la presse est libre depuis 1881, ce n'est pas pour qu'elle se contente des faits divers : c'est pour qu'elle serve la vérité. Je ne sais comment finira cette affaire ; je sais seulement qu'un écrivain vient de nous rappeler à quoi sert un journal. Signé : un chroniqueur. »",
                "Vérification : concession (« Certes… Mais »), question rhétorique (« qui donc a le droit de parler… ? »), antithèse (« Le silence protège les coupables, la parole seule défend l'innocent »), argument logique fondé sur la loi de 1881.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La presse au XIXe siècle.",
            statements: [
              { text: "Émile de Girardin finance le prix réduit de La Presse grâce à la publicité.", true: true, why: "En 1836, il divise par deux le prix de l'abonnement et compense par les annonces payantes." },
              { text: "Le Petit Journal n'était vendu que par abonnement.", true: false, why: "Sa nouveauté était justement la vente au numéro, pour un sou, dans la rue et les kiosques." },
              { text: "La loi du 29 juillet 1881 proclame la liberté de la presse.", true: true, why: "Elle supprime l'autorisation préalable et reste le texte de référence en France." },
              { text: "Le roman-feuilleton paraissait en un seul numéro du journal.", true: false, why: "Il était publié par épisodes, chacun s'achevant sur un suspense." },
              { text: "Dans Bel-Ami, Maupassant montre un journaliste qui réussit grâce à son immense talent d'écrivain.", true: false, why: "Georges Duroy réussit par l'intrigue, l'opportunisme et les femmes, pas par le talent." },
              { text: "La Fronde, fondée en 1897, était un quotidien rédigé par des femmes.", true: true, why: "Marguerite Durand le fonde pour défendre les droits des femmes ; il est conçu et rédigé par des femmes." },
            ],
          },
          quiz: [
            {
              q: "Quelle innovation économique permet à La Presse (1836) de baisser son prix ?",
              options: ["Une subvention de l'État", "Le recours à la publicité", "La suppression des journalistes salariés", "Un papier importé d'Angleterre"],
              answer: 1,
              why: "Girardin compense le prix réduit de l'abonnement par les recettes des annonces publicitaires.",
            },
            {
              q: "Le Petit Journal, créé en 1863, se distingue par :",
              options: ["sa diffusion réservée aux abonnés fortunés", "son absence totale de faits divers", "sa publication uniquement le dimanche", "sa vente au numéro pour un sou"],
              answer: 3,
              why: "Vendu cinq centimes au numéro, il conquiert un large public populaire.",
            },
            {
              q: "Quel roman de Balzac dénonce la corruption du journalisme ?",
              options: ["Illusions perdues", "Le Père Goriot", "Eugénie Grandet", "Le Colonel Chabert"],
              answer: 0,
              why: "Dans Illusions perdues, Lucien de Rubempré découvre un milieu où articles et critiques s'achètent.",
            },
            {
              q: "Qu'est-ce qu'un roman-feuilleton ?",
              options: ["Un roman illustré de gravures en couleurs", "Un roman écrit par plusieurs journalistes à la fois", "Un roman publié par épisodes dans un journal", "Un roman vendu sous forme de feuilles volantes"],
              answer: 2,
              why: "Le roman-feuilleton paraît par épisodes, généralement en bas de page, pour fidéliser les lecteurs.",
            },
            {
              q: "Quelle loi garantit la liberté de la presse en France ?",
              options: ["La loi de séparation des Églises et de l'État (1905)", "La loi du 29 juillet 1881", "La loi Falloux sur l'enseignement (1850)"],
              answer: 1,
              why: "La loi du 29 juillet 1881 proclame la liberté de la presse et reste le texte de référence. La loi de 1905 concerne la séparation des Églises et de l'État.",
            },
          ],
          trap: "Réduire l'essor de la presse à une seule cause (souvent la technique) : il faut combiner les causes techniques, sociales, économiques et politiques, et les dater.",
          method: "Retenez une date-clé par cause : 1836 (modèle économique de Girardin), 1863 (vente au numéro du Petit Journal), 1881 (liberté de la presse et lois Ferry). Ces trois repères suffisent à structurer une réponse organisée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'genres-journalistiques',
          title: "Lire un article : éditorial, chronique, tribune, reportage",
          minutes: 30,
          objectives: [
            "Distinguer les genres d'information et les genres d'opinion dans la presse.",
            "Identifier un éditorial, une chronique, une tribune, un reportage, une enquête, une interview.",
            "Repérer les éléments de la mise en page d'un article : titre, chapeau, attaque, intertitres, chute.",
            "Analyser la visée et les procédés d'un article.",
          ],
          course: [
            {
              heading: "Informer ou commenter : deux familles de genres",
              paragraphs: [
                "Un journal juxtapose des textes de nature différente. Les genres d'information rapportent des faits : ils cherchent l'exactitude et une certaine neutralité, même si le choix des faits et leur présentation ne sont jamais totalement objectifs. Les genres d'opinion, ou de commentaire, donnent un point de vue sur l'actualité : ils argumentent, jugent, critiquent. Le lecteur doit toujours savoir dans quel type de texte il se trouve, pour distinguer le fait de l'opinion.",
                "Plusieurs indices aident à les reconnaître : la rubrique (« Débats », « Idées », « Opinions » annoncent des textes de commentaire), la présence d'une signature et de la première personne, le vocabulaire évaluatif (adjectifs mélioratifs ou péjoratifs, modalisateurs comme sans doute, hélas, il faut), les connecteurs logiques et les questions rhétoriques. Un texte d'information emploie plutôt la troisième personne, des chiffres sourcés, des citations rapportées entre guillemets.",
              ],
              box: { label: "À retenir", text: "Genres d'information : brève, compte rendu, reportage, enquête, interview, portrait. Genres d'opinion : éditorial, chronique, tribune, billet, critique, lettre ouverte, dessin de presse." },
            },
            {
              heading: "Les genres d'information",
              paragraphs: [
                "La brève (ou dépêche, quand elle vient d'une agence de presse) donne une information en quelques lignes. Le compte rendu rapporte un événement précis (un procès, une séance de l'Assemblée, un match). Le reportage est écrit par un journaliste qui s'est rendu sur place : il décrit ce qu'il a vu et entendu, donne la parole aux témoins et fait partager une atmosphère. On y trouve souvent le présent de narration, des détails concrets et des propos rapportés.",
                "L'enquête est un travail de longue haleine : le journaliste recoupe des sources, consulte des documents, interroge de nombreuses personnes pour établir des faits cachés ou complexes. L'interview reproduit, sous forme de questions et de réponses, un entretien avec une personnalité ou un témoin. Le portrait présente une personne à travers son parcours et ses propos. Ces genres informent, mais le regard du journaliste reste présent dans le choix des détails et des témoins.",
              ],
              box: { label: "Définition", text: "Reportage : récit d'un journaliste témoin, sur le terrain, qui fait voir et entendre. Enquête : recherche approfondie qui recoupe les sources pour établir des faits. Interview : entretien restitué en questions et réponses." },
            },
            {
              heading: "Les genres d'opinion",
              paragraphs: [
                "L'éditorial exprime la position du journal sur un sujet d'actualité important. Il est rédigé par le directeur, le rédacteur en chef ou un éditorialiste, et paraît souvent en première page : il engage toute la rédaction. La chronique est une rubrique régulière, confiée à un auteur qui commente l'actualité avec un ton personnel, souvent humoristique ou ironique ; le chroniqueur n'engage que lui. Le billet est une forme encore plus brève, vive et souvent satirique.",
                "La tribune est un texte d'opinion écrit par une personne extérieure au journal (un chercheur, un écrivain, un responsable politique, un collectif de citoyens), publié dans les pages « Débats » ou « Idées ». Le journal ne la reprend pas forcément à son compte : il ouvre ses colonnes au débat. La critique évalue une œuvre (livre, film, spectacle), et le dessin de presse commente l'actualité par l'image, souvent avec humour ou ironie.",
              ],
              box: { label: "Repère", text: "Éditorial : la voix du journal. Chronique : la voix régulière d'un auteur de la rédaction. Tribune : la voix d'une personne extérieure, accueillie par le journal." },
            },
            {
              heading: "La construction d'un article",
              paragraphs: [
                "Un article se lit d'abord par ses éléments de titraille. Le surtitre situe le sujet, le titre accroche le lecteur (parfois par un jeu de mots), le sous-titre précise. Le chapeau (ou chapô), texte court en gras placé sous le titre, résume l'essentiel et donne envie de lire. Les intertitres découpent les articles longs. L'attaque, première phrase du texte, doit capter l'attention ; la chute, dernière phrase, laisse une impression forte.",
                "Les articles d'information suivent souvent le principe de la pyramide inversée : l'essentiel d'abord, les détails ensuite, pour que le lecteur pressé saisisse l'information dès les premières lignes. Cet essentiel répond aux questions de référence : qui ? quoi ? où ? quand ? comment ? pourquoi ? Pour analyser un article, on combine donc l'étude de son genre, de sa construction et de ses procédés d'écriture.",
              ],
            },
          ],
          keyPoints: [
            "Deux familles : genres d'information (faits) et genres d'opinion (commentaire, argumentation).",
            "Éditorial : position du journal ; chronique : rubrique régulière et personnelle ; tribune : auteur extérieur au journal.",
            "Reportage : journaliste sur le terrain, témoins, détails concrets ; enquête : recoupement des sources.",
            "Titraille : surtitre, titre, sous-titre, chapeau ; attaque et chute encadrent le texte.",
            "Pyramide inversée : l'essentiel d'abord (qui, quoi, où, quand, comment, pourquoi).",
            "Indices de l'opinion : première personne, vocabulaire évaluatif, modalisateurs, connecteurs.",
          ],
          example: {
            statement: "Voici le début d'un article écrit pour l'exercice (données fictives) : « Hier, sous une pluie battante, j'ai suivi les bénévoles de l'association du quartier des Tilleuls. Il est six heures. Marie, 62 ans, distribue des cafés brûlants. « On ne lâchera pas », me dit-elle en souriant. » Identifiez le genre de cet article et justifiez.",
            solution: [
              "Le journaliste est présent sur les lieux : il emploie la première personne (« j'ai suivi », « me dit-elle »).",
              "Le texte multiplie les détails concrets qui font voir la scène : la « pluie battante », « six heures », les « cafés brûlants ».",
              "Le passage au présent de narration (« Il est six heures ») fait vivre l'instant au lecteur.",
              "Une témoin prend la parole au discours direct (« On ne lâchera pas »), avec son prénom et son âge.",
              "Le texte rapporte des faits sans argumenter : il appartient aux genres d'information.",
              "Réponse : il s'agit d'un reportage, récit d'un journaliste témoin sur le terrain qui fait voir et entendre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez le genre journalistique décrit : a) un texte signé par le rédacteur en chef qui exprime la position du journal ; b) un entretien publié sous forme de questions et de réponses ; c) un texte d'une chercheuse extérieure au journal, publié dans la rubrique « Débats » ; d) un récit écrit par un journaliste envoyé sur les lieux d'une inondation ; e) une rubrique hebdomadaire où un écrivain commente l'actualité avec humour.",
              hint: "Demandez-vous qui écrit (le journal, un journaliste, une personne extérieure) et si le texte informe ou commente.",
              solution: [
                "a) Éditorial : il exprime la position de toute la rédaction.",
                "b) Interview.",
                "c) Tribune : l'auteure est extérieure au journal.",
                "d) Reportage : le journaliste est témoin sur le terrain.",
                "e) Chronique : rubrique régulière, ton personnel.",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage écrit pour l'exercice : « Faut-il vraiment se réjouir de la fermeture de la dernière librairie du centre-ville ? Certains y voient le progrès. Nous y voyons, hélas, un appauvrissement. Une ville sans librairie est une ville qui renonce à penser. Il est encore temps d'agir. » Ce texte relève-t-il de l'information ou de l'opinion ? Relevez quatre indices précis.",
              hint: "Cherchez la personne grammaticale, les mots qui expriment un jugement, la question et les tournures qui appellent à agir.",
              solution: [
                "Indice 1 : la question rhétorique initiale (« Faut-il vraiment se réjouir… ? ») suggère déjà la réponse négative.",
                "Indice 2 : le pronom « Nous », qui représente la rédaction, prend position contre une thèse adverse (« Certains y voient le progrès »).",
                "Indice 3 : le vocabulaire évaluatif et le modalisateur « hélas » expriment un jugement et un regret ; « appauvrissement » est péjoratif.",
                "Indice 4 : la formule générale (« Une ville sans librairie est une ville qui renonce à penser ») et l'appel à l'action (« Il est encore temps d'agir ») relèvent de l'argumentation.",
                "Réponse : c'est un texte d'opinion ; le « nous » de la rédaction laisse penser qu'il s'agit d'un éditorial.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (écriture d'appropriation). Rédigez l'attaque et le premier paragraphe (environ dix lignes) d'une tribune intitulée « Rendre le goût de lire aux adolescents », que signerait une bibliothécaire. Indiquez ensuite en deux phrases ce qui distingue votre texte d'un éditorial.",
              hint: "Une tribune est signée par une personne extérieure au journal, qui met en avant son expérience (éthos). L'attaque doit capter l'attention.",
              solution: [
                "Contraintes : un auteur extérieur au journal (une bibliothécaire), la première personne, une thèse claire, une attaque frappante, un éthos fondé sur l'expérience.",
                "Attaque possible : une scène concrète, pour capter l'attention, suivie de la thèse.",
                "Proposition rédigée : « Mardi dernier, un garçon de quinze ans est entré dans ma bibliothèque pour la première fois. Il cherchait une prise pour recharger son téléphone ; il est reparti avec un roman. Bibliothécaire depuis vingt ans, je n'ai jamais cru que les adolescents ne lisaient plus : je crois qu'on ne leur laisse ni le temps ni l'occasion de lire. Donnons-leur des lieux ouverts tard, des livres qu'ils choisissent eux-mêmes, et des adultes qui lisent devant eux. Le goût de lire ne s'impose pas, il se transmet. »",
                "Différence avec un éditorial : la tribune est signée par une personne extérieure, qui parle en son nom et s'appuie sur son expérience personnelle ; l'éditorial exprime la position officielle du journal et engage toute la rédaction.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque genre ou élément d'un article à sa définition.",
            pairs: [
              { left: "Éditorial", right: "Texte qui exprime la position de la rédaction" },
              { left: "Tribune", right: "Texte d'opinion d'un auteur extérieur au journal" },
              { left: "Chronique", right: "Rubrique régulière au ton personnel" },
              { left: "Reportage", right: "Récit d'un journaliste témoin sur le terrain" },
              { left: "Chapeau", right: "Court texte en gras qui résume l'article sous le titre" },
              { left: "Pyramide inversée", right: "Construction qui donne l'essentiel dès le début" },
            ],
          },
          quiz: [
            {
              q: "Quel genre exprime la position officielle d'un journal ?",
              options: ["La tribune", "Le reportage", "L'éditorial", "L'interview"],
              answer: 2,
              why: "L'éditorial, écrit par la direction ou un éditorialiste, engage toute la rédaction.",
            },
            {
              q: "Une tribune est écrite :",
              options: ["par une personne extérieure au journal", "toujours par le rédacteur en chef", "par une agence de presse anonyme", "par le dessinateur de presse du journal"],
              answer: 0,
              why: "La tribune donne la parole à un auteur extérieur (chercheur, écrivain, collectif) dans les pages Débats ou Idées.",
            },
            {
              q: "Quel élément d'un article résume l'essentiel juste sous le titre ?",
              options: ["La chute", "L'attaque", "L'intertitre", "Le chapeau"],
              answer: 3,
              why: "Le chapeau (ou chapô), en gras, résume l'article et donne envie de le lire.",
            },
            {
              q: "Lequel de ces indices signale le plus sûrement un texte d'opinion ?",
              options: ["La présence de dates et d'heures précises", "L'emploi de modalisateurs comme « hélas »", "Le nom exact du lieu de l'événement rapporté"],
              answer: 1,
              why: "Les modalisateurs expriment le jugement de l'auteur ; les dates et les lieux relèvent de l'information.",
            },
            {
              q: "Le principe de la pyramide inversée consiste à :",
              options: ["placer l'essentiel au début", "garder la révélation pour la fin", "alterner faits et opinions", "commencer par un dialogue"],
              answer: 0,
              why: "L'essentiel (qui, quoi, où, quand, comment, pourquoi) vient d'abord, les détails ensuite.",
            },
          ],
          trap: "Croire qu'un article d'information est parfaitement objectif : le choix des faits, des témoins, des mots et de l'ordre de présentation reflète toujours un regard, qu'il faut savoir repérer.",
          method: "Avant de lire un article en détail, observez la rubrique, la signature et la titraille : en trente secondes, vous savez s'il informe ou commente, et vous lisez ensuite en conséquence.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'presse-numerique',
          title: "Du journal au numérique : informer et débattre aujourd'hui",
          minutes: 30,
          objectives: [
            "Décrire les grandes transformations des médias du XXe au XXIe siècle : radio, télévision, Internet, réseaux sociaux.",
            "Analyser les effets du numérique sur l'information et le débat d'idées : rapidité, modèle économique, algorithmes.",
            "Identifier une infox et vérifier une information en recoupant les sources.",
            "Construire un point de vue argumenté sur la place des médias dans la démocratie.",
          ],
          course: [
            {
              heading: "Des journaux aux écrans",
              paragraphs: [
                "Au XXe siècle, la presse écrite perd son monopole. La radio se développe à partir des années 1920 et permet de suivre l'actualité en direct ; la télévision entre dans la plupart des foyers français au cours des années 1960 et impose la force de l'image. Les journaux restent pourtant le lieu privilégié de l'analyse et du débat, avec leurs éditoriaux, leurs enquêtes et leurs tribunes.",
                "À partir de la seconde moitié des années 1990, les grands quotidiens créent leurs sites Internet. Des médias nés en ligne, appelés « pure players », apparaissent ensuite, comme Mediapart, fondé en 2008 et financé par les abonnements de ses lecteurs. Au XXIe siècle, les réseaux sociaux et le smartphone transforment encore la circulation de l'information : chacun peut publier, commenter, partager, et beaucoup de lecteurs découvrent les articles par l'intermédiaire de ces plateformes plutôt qu'en ouvrant un journal.",
              ],
              box: { label: "Repère", text: "Années 1920 : essor de la radio. Années 1960 : la télévision gagne la plupart des foyers. Seconde moitié des années 1990 : sites des quotidiens. Années 2000 et 2010 : médias en ligne, réseaux sociaux, smartphone." },
            },
            {
              heading: "Ce que le numérique change",
              paragraphs: [
                "Le numérique apporte des progrès réels : l'information est accessible partout et immédiatement, elle peut être enrichie de vidéos, de cartes, de liens vers les sources, et le lecteur peut réagir. Mais il crée aussi des fragilités. La course à la rapidité pousse parfois à publier avant d'avoir vérifié. Le modèle économique devient incertain : une partie des lecteurs s'est habituée à la gratuité, et les journaux hésitent entre la publicité, qui récompense les contenus les plus cliqués, et l'abonnement payant, qui réserve une partie des articles aux abonnés.",
                "Sur les réseaux sociaux, ce que nous voyons est sélectionné par des algorithmes qui privilégient les contenus susceptibles de nous retenir. Ils tendent à nous montrer ce qui confirme nos opinions, ce que l'on appelle parfois une bulle de filtres, et à favoriser les messages les plus spectaculaires ou les plus indignés. Le débat d'idées peut alors se durcir, chacun restant enfermé dans son camp, alors que la presse des XIXe et XXe siècles organisait au contraire la confrontation des points de vue.",
              ],
              box: { label: "Définition", text: "Algorithme de recommandation : programme qui choisit les contenus montrés à chaque utilisateur selon ses comportements passés. Bulle de filtres : situation où l'on ne voit plus que des contenus qui confirment ses propres opinions." },
            },
            {
              heading: "Infox et vérification",
              paragraphs: [
                "Une infox (terme recommandé en français pour l'anglais fake news) est une information fausse ou trompeuse diffusée volontairement, souvent pour manipuler l'opinion ou pour gagner de l'argent grâce aux clics. Elle joue sur les émotions (peur, colère, indignation), se présente souvent sans source vérifiable, avec une image sortie de son contexte ou un titre racoleur. Les images et les vidéos fabriquées par l'intelligence artificielle rendent la vigilance encore plus nécessaire.",
                "Vérifier une information suppose une méthode. On identifie d'abord la source (qui publie ? un média reconnu, un site inconnu, un compte anonyme ?), on regarde la date, on lit l'article en entier et pas seulement le titre, puis on recoupe : une information sérieuse est reprise par plusieurs médias indépendants. Pour une image, on peut chercher son origine grâce à une recherche d'image inversée. Des rubriques de vérification (fact-checking) tenues par des journalistes font ce travail, et l'éducation aux médias et à l'information l'apprend à l'école.",
              ],
              box: { label: "À retenir", text: "Vérifier : 1) qui publie ? 2) quand ? 3) l'article complet dit-il bien ce qu'annonce le titre ? 4) d'autres médias fiables confirment-ils ? 5) l'image est-elle dans son contexte d'origine ?" },
            },
            {
              heading: "Débattre aujourd'hui : continuités et ruptures",
              paragraphs: [
                "Malgré ces bouleversements, beaucoup de genres du XIXe siècle survivent en ligne : l'éditorial, la chronique, la tribune, le dessin de presse, l'enquête. La loi du 29 juillet 1881 sur la liberté de la presse s'applique toujours, y compris aux propos publiés sur Internet : la diffamation et l'injure restent punies. Le pluralisme, c'est-à-dire l'existence de médias variés et indépendants, demeure une condition de la démocratie.",
                "Le lecteur d'aujourd'hui doit donc être actif : distinguer le fait de l'opinion, identifier le genre d'un texte, vérifier les sources, diversifier ses lectures pour sortir de sa bulle. Les questions posées par Balzac et Maupassant (la presse sert-elle la vérité ou l'argent ?) se posent toujours, sous une forme nouvelle, à l'ère des plateformes et des algorithmes.",
              ],
            },
          ],
          keyPoints: [
            "Radio (années 1920), télévision (années 1960), Internet (fin des années 1990), réseaux sociaux : la presse perd son monopole.",
            "Le numérique : rapidité et richesse, mais vérification parfois négligée et modèle économique fragile.",
            "Algorithmes et bulle de filtres : on voit surtout ce qui confirme ses opinions.",
            "Infox : information fausse diffusée volontairement ; elle joue sur l'émotion et masque sa source.",
            "Vérifier : source, date, article complet, recoupement, origine des images.",
            "La loi de 1881 s'applique aussi en ligne ; le pluralisme reste une condition de la démocratie.",
          ],
          example: {
            statement: "Un camarade partage ce message (données fictives) : « URGENT ! Les cantines vont servir des insectes à tous les élèves dès lundi, partagez avant que ce soit censuré ! », sans lien ni signature, avec la photo d'une assiette. Expliquez pourquoi ce message est suspect et comment le vérifier.",
            solution: [
              "Premier indice : l'appel à l'émotion et à l'urgence (« URGENT ! », points d'exclamation) cherche à faire réagir avant de réfléchir.",
              "Deuxième indice : aucune source n'est donnée (ni média, ni auteur, ni document officiel), et la mention « avant que ce soit censuré » sert à discréditer d'avance tout démenti.",
              "Troisième indice : la photo ne prouve rien, car elle peut venir de n'importe où ; une recherche d'image inversée permettrait de retrouver son origine.",
              "Vérification : chercher si des médias reconnus et indépendants ou le site officiel de l'établissement évoquent cette information, et consulter les rubriques de vérification.",
              "Réponse : le message présente les traits d'une infox (émotion, urgence, absence de source, image non contextualisée) ; il ne faut pas le partager avant de l'avoir vérifié par des sources fiables.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces affirmations en « avantage » ou « risque » de l'information numérique : a) un article peut renvoyer par un lien vers le document qu'il cite ; b) une rumeur peut être partagée des milliers de fois en une heure ; c) les algorithmes nous montrent surtout ce qui nous plaît déjà ; d) on peut suivre un événement en direct où que l'on soit ; e) la course aux clics favorise les titres racoleurs.",
              hint: "Demandez-vous si chaque phrase aide le lecteur à s'informer ou si elle menace la qualité de l'information.",
              solution: [
                "a) Avantage : le lien permet de vérifier la source.",
                "b) Risque : la vitesse de diffusion favorise les rumeurs et les infox.",
                "c) Risque : c'est l'effet de bulle de filtres, qui enferme dans ses opinions.",
                "d) Avantage : l'information est accessible immédiatement et partout.",
                "e) Risque : le modèle publicitaire pousse au sensationnalisme.",
                "Réponse : avantages a) et d) ; risques b), c) et e).",
              ],
            },
            {
              level: 2,
              statement: "Vous lisez sur un réseau social un titre choc (données fictives) : « Une étude prouve que lire sur écran rend incapable de se concentrer ». Décrivez, dans l'ordre, les étapes que vous suivriez pour savoir si cette information est fiable.",
              hint: "Pensez à la source, à la date, au contenu réel de l'article, à l'étude elle-même et au recoupement.",
              solution: [
                "Étape 1 : identifier qui publie le message (un média reconnu, un site inconnu, un compte anonyme).",
                "Étape 2 : vérifier la date, car une information ancienne peut être republiée comme si elle était nouvelle.",
                "Étape 3 : lire l'article complet et pas seulement le titre : « prouve » et « incapable » sont des mots très forts, souvent absents de l'étude elle-même.",
                "Étape 4 : remonter à l'étude citée (qui l'a menée, sur combien de personnes, publiée où) et voir si ses conclusions sont nuancées.",
                "Étape 5 : recouper avec d'autres médias fiables et avec les rubriques de vérification.",
                "Réponse : seule cette démarche (source, date, lecture complète, étude d'origine, recoupement) permet de juger ; un titre aussi catégorique invite d'abord à la prudence.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (dissertation, initiation). Sujet : « Les réseaux sociaux ont-ils remplacé la presse comme lieu du débat d'idées ? » Proposez un plan détaillé en deux ou trois parties, avec des arguments et des exemples précis tirés du chapitre.",
              hint: "Montrez d'abord ce que les réseaux ont changé, puis ce que la presse garde de spécifique, avant de conclure sur leur complémentarité ou sur les conditions d'un vrai débat.",
              solution: [
                "Problématique : les réseaux sociaux, où chacun peut s'exprimer, ont-ils pris la place de la presse dans le débat public, ou ne peuvent-ils pas remplir le même rôle ?",
                "Partie 1, les réseaux sociaux ont profondément transformé le débat. Ils donnent la parole à tous et permettent de réagir immédiatement ; beaucoup de lecteurs découvrent l'actualité par leur intermédiaire plutôt qu'en lisant un journal.",
                "Partie 2, mais ils ne remplissent pas toutes les fonctions de la presse. Les algorithmes enferment dans des bulles de filtres et favorisent les messages les plus indignés ; les infox y circulent vite. La presse garde des genres propres au débat organisé (éditorial, tribune, enquête) et un travail de vérification, hérités du XIXe siècle et encadrés par la loi de 1881.",
                "Partie 3, la presse et les réseaux sont désormais complémentaires. Les journaux utilisent les réseaux pour diffuser leurs articles, et des médias nés en ligne, comme Mediapart (2008), montrent que le journalisme se réinvente ; c'est au lecteur, formé par l'éducation aux médias, de diversifier ses sources.",
                "Conclusion : les réseaux n'ont pas remplacé la presse mais l'ont obligée à se transformer ; un débat d'idées de qualité suppose toujours des textes argumentés, vérifiés et pluralistes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire des médias dans l'ordre chronologique.",
            items: [
              "1836 : La Presse de Girardin, journal financé par la publicité",
              "1863 : Le Petit Journal, vendu un sou au numéro",
              "1881 : loi sur la liberté de la presse",
              "Années 1920 : essor de la radio",
              "Années 1960 : la télévision gagne la plupart des foyers",
              "Fin des années 1990 : les quotidiens ouvrent leurs sites Internet",
              "2008 : création de Mediapart, journal en ligne financé par abonnement",
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on une bulle de filtres ?",
              options: ["Un logiciel qui bloque toutes les publicités sur les pages web", "Le fait de ne voir que des contenus proches de ses opinions", "Une rubrique où des journalistes vérifient les rumeurs", "Un journal en ligne réservé uniquement à ses abonnés"],
              answer: 1,
              why: "Les algorithmes de recommandation sélectionnent ce qui nous ressemble, au risque de nous enfermer dans nos opinions.",
            },
            {
              q: "Quel terme est recommandé en français pour l'anglais fake news ?",
              options: ["Infox", "Canular de presse", "Brève", "Tribune"],
              answer: 0,
              why: "« Infox » est le terme recommandé pour désigner une information fausse diffusée volontairement.",
            },
            {
              q: "Pour vérifier une information, la première question à se poser est :",
              options: ["Combien de fois a-t-elle été partagée ?", "Est-elle drôle ou choquante ?", "Qui la publie ?", "Correspond-elle à ce que je pense déjà ?"],
              answer: 2,
              why: "Identifier la source est le point de départ ; le nombre de partages ou l'accord avec nos idées ne garantit rien.",
            },
            {
              q: "Un « pure player » est :",
              options: ["un journal papier très ancien et toujours imprimé", "une chaîne de télévision sportive", "un réseau social de jeux vidéo", "un média né et diffusé uniquement en ligne"],
              answer: 3,
              why: "On appelle ainsi les médias créés directement sur Internet, comme Mediapart en 2008.",
            },
            {
              q: "La loi du 29 juillet 1881 sur la liberté de la presse :",
              options: ["a été abrogée au moment de l'arrivée d'Internet en France", "s'applique encore, y compris aux contenus en ligne", "ne concerne que les journaux du dimanche", "interdit les dessins de presse"],
              answer: 1,
              why: "Elle reste le texte de référence ; la diffamation et l'injure sont punies aussi sur Internet.",
            },
          ],
          trap: "Juger une information fiable parce qu'elle a été très partagée ou parce qu'elle confirme ce que l'on pense déjà : le nombre de partages et l'accord avec nos idées ne prouvent rien.",
          method: "Adoptez un réflexe en trois temps avant de partager quoi que ce soit : qui publie ? quand ? qui d'autre le confirme ? Si l'une des réponses manque, attendez et vérifiez.",
        },
      ],
    },
    /* ==================================================================== */
    /* GRAMMAIRE : LA PHRASE COMPLEXE ET LE LEXIQUE                         */
    /* ==================================================================== */
    {
      id: 'langue-phrase-complexe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'juxtaposition-coordination',
          title: "Juxtaposition, coordination et subordination",
          minutes: 35,
          objectives: [
            "Distinguer phrase simple et phrase complexe en repérant les verbes conjugués.",
            "Identifier les propositions juxtaposées, coordonnées et subordonnées.",
            "Reconnaître les principales subordonnées : relative, complétive, interrogative indirecte, circonstancielle, infinitive, participiale.",
            "Analyser la construction d'une phrase complexe et son effet dans un texte.",
          ],
          course: [
            {
              heading: "Phrase simple, phrase complexe, proposition",
              paragraphs: [
                "Une phrase simple ne contient qu'un seul verbe conjugué : « Les spectateurs applaudissent longuement. » Une phrase complexe en contient plusieurs : elle se compose alors de plusieurs propositions. Une proposition est un ensemble de mots organisé autour d'un verbe conjugué, en général avec son sujet : « Les spectateurs applaudissent / quand le rideau tombe » compte deux propositions. Pour délimiter les propositions, on commence donc toujours par relever les verbes conjugués.",
                "Les propositions d'une phrase complexe peuvent être reliées de trois façons. Elles peuvent être simplement placées côte à côte, séparées par une ponctuation : c'est la juxtaposition. Elles peuvent être reliées par un mot de liaison qui les met sur le même plan : c'est la coordination. L'une peut enfin dépendre d'une autre : c'est la subordination. Les deux premières relient des propositions de même rang ; la troisième crée une hiérarchie entre une proposition principale et une proposition subordonnée.",
              ],
              box: { label: "Règle", text: "Autant de verbes conjugués, autant de propositions (hors subordonnées infinitives et participiales, qui ont pour noyau un infinitif ou un participe). Trois modes de liaison : juxtaposition, coordination, subordination." },
            },
            {
              heading: "Juxtaposition et coordination",
              paragraphs: [
                "Les propositions juxtaposées sont reliées par une virgule, un point-virgule ou deux-points, sans mot de liaison : « Le vent se lève, la mer grossit, les barques rentrent. » La relation logique entre elles n'est pas exprimée, mais elle existe souvent et le lecteur doit la reconstituer : dans « Il a trop couru : il est épuisé », les deux-points introduisent une conséquence. La juxtaposition (on parle aussi d'asyndète) produit un effet de rapidité, de sécheresse ou d'accumulation.",
                "Les propositions coordonnées sont reliées par une conjonction de coordination : la liste traditionnelle est mais, ou, et, donc, or, ni, car (les grammaires récentes rangent plutôt donc parmi les adverbes). La coordination peut aussi être assurée par un adverbe de liaison : puis, ensuite, pourtant, cependant, en effet, ainsi. Ces mots expriment explicitement la relation : addition (et), opposition (mais), cause (car), conséquence (donc), alternative (ou). La répétition d'une même conjonction (et… et… et…) est une polysyndète, qui crée un effet d'insistance.",
              ],
              box: { label: "À retenir", text: "Juxtaposées : reliées par la ponctuation seule (virgule, point-virgule, deux-points). Coordonnées : reliées par une conjonction de coordination (mais, ou, et, or, ni, car, donc) ou un adverbe de liaison (puis, pourtant, en effet…)." },
            },
            {
              heading: "La subordination et les types de subordonnées",
              paragraphs: [
                "La proposition subordonnée dépend d'une proposition principale et ne peut pas, en général, former une phrase à elle seule. Elle est le plus souvent introduite par un mot subordonnant : un pronom relatif (qui, que, quoi, dont, où, lequel), une conjonction de subordination (que, quand, parce que, si, bien que, pour que…) ou un mot interrogatif (si, qui, quand, pourquoi…). On identifie une subordonnée par sa nature et par sa fonction.",
                "La subordonnée relative complète un nom ou un pronom, appelé antécédent : « Le roman que je lis est captivant. » La subordonnée complétive, introduite par que, est le plus souvent complément d'objet du verbe : « Je crois que la pièce vous plaira. » La subordonnée interrogative indirecte rapporte une question : « Je me demande s'il viendra. » La subordonnée circonstancielle est complément circonstanciel de la principale et exprime le temps, la cause, la conséquence, le but, la concession, la condition ou la comparaison : « Nous partirons quand le jour se lèvera. »",
                "Deux subordonnées n'ont pas de mot subordonnant ni de verbe conjugué. L'infinitive a pour noyau un infinitif qui possède son propre sujet, différent de celui du verbe principal : « J'entends les oiseaux chanter. » La participiale a pour noyau un participe qui possède lui aussi son propre sujet : « Le soleil couché, les promeneurs rentrèrent. » Elle exprime le plus souvent une circonstance (temps, cause).",
              ],
              box: { label: "Repère", text: "Relative : complète un antécédent (qui, que, dont, où). Complétive : introduite par que, souvent COD. Interrogative indirecte : question rapportée (si, qui, pourquoi). Circonstancielle : complément circonstanciel (quand, parce que, bien que, si). Infinitive et participiale : sans subordonnant, avec un sujet propre." },
            },
            {
              heading: "Analyser une phrase complexe et en interpréter l'effet",
              paragraphs: [
                "Pour analyser une phrase complexe, suivez toujours la même démarche : relevez les verbes conjugués, délimitez les propositions, repérez les mots qui les relient, puis donnez la nature et la fonction de chaque subordonnée. Attention aux pièges : que peut être un pronom relatif (« le livre que je lis », il a un antécédent) ou une conjonction de subordination (« je crois qu'il lit », il n'en a pas) ; si peut introduire une circonstancielle de condition ou une interrogative indirecte.",
                "L'analyse grammaticale doit servir l'interprétation. Une suite de propositions juxtaposées et brèves accélère le récit ou traduit une émotion vive. Une longue phrase faite de subordonnées enchâssées, appelée période, donne de l'ampleur à un raisonnement ou à une description, comme chez Proust ou dans l'éloquence de Bossuet. À l'oral du baccalauréat, la question de grammaire porte souvent sur ces relations entre propositions : il faut savoir les nommer avec précision.",
              ],
            },
          ],
          keyPoints: [
            "Proposition : groupe organisé autour d'un verbe conjugué ; phrase complexe = plusieurs propositions.",
            "Juxtaposition : ponctuation seule ; coordination : mais, ou, et, or, ni, car, donc, ou un adverbe de liaison.",
            "Subordination : une principale et une subordonnée qui en dépend.",
            "Relative (antécédent), complétive (que, souvent COD), interrogative indirecte, circonstancielle (CC).",
            "Infinitive et participiale : sans subordonnant, avec un sujet propre.",
            "« Que » relatif a un antécédent ; « que » conjonction n'en a pas.",
          ],
          example: {
            statement: "Analysez la phrase suivante, écrite pour l'exercice : « Quand la nuit tomba, les promeneurs rentrèrent, car le froid devenait vif, et ils allumèrent un feu qui crépita longtemps. »",
            solution: [
              "Verbes conjugués : tomba, rentrèrent, devenait, allumèrent, crépita. La phrase compte donc cinq propositions.",
              "« les promeneurs rentrèrent » est la proposition principale.",
              "« Quand la nuit tomba » est une subordonnée circonstancielle de temps, introduite par la conjonction quand, complément circonstanciel de temps de la principale.",
              "« car le froid devenait vif » est une proposition coordonnée à la principale par la conjonction car, qui exprime la cause.",
              "« et ils allumèrent un feu » est coordonnée par et ; elle contient la subordonnée relative « qui crépita longtemps », introduite par le pronom relatif qui, complément de l'antécédent « feu ».",
              "Réponse : cinq propositions ; une principale, une circonstancielle de temps, deux coordonnées (car, et) et une relative. La phrase enchaîne les actions dans l'ordre chronologique et en donne la cause.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, comptez les propositions et indiquez si elles sont juxtaposées, coordonnées ou subordonnées : a) « Le vent souffle, les volets claquent, la maison tremble. » b) « Elle voulait partir, mais la pluie l'en empêcha. » c) « Je sais que la route sera longue. » d) « Le livre que vous m'avez prêté m'a passionné. » e) « Il travaille ; il réussira. »",
              hint: "Relevez d'abord les verbes conjugués, puis cherchez ce qui relie les propositions : une ponctuation, une conjonction de coordination ou un subordonnant.",
              solution: [
                "a) Trois verbes conjugués (souffle, claquent, tremble) : trois propositions juxtaposées, séparées par des virgules.",
                "b) Deux verbes (voulait, empêcha) : deux propositions coordonnées par mais, qui exprime l'opposition.",
                "c) Deux verbes (sais, sera) : une principale (« Je sais ») et une subordonnée complétive (« que la route sera longue »), COD de « sais ».",
                "d) Deux verbes (avez prêté, a passionné) : une principale (« Le livre m'a passionné ») et une subordonnée relative (« que vous m'avez prêté »), complément de l'antécédent « livre ».",
                "e) Deux verbes (travaille, réussira) : deux propositions juxtaposées par un point-virgule ; la relation implicite est une conséquence (il travaille, donc il réussira).",
              ],
            },
            {
              level: 2,
              statement: "Donnez la nature et la fonction des subordonnées soulignées entre crochets : a) « Nous partirons [dès que le jour se lèvera]. » b) « Je me demande [si elle viendra]. » c) « L'homme [dont je vous ai parlé] est arrivé. » d) « Nous espérons [que la pièce vous plaira]. » e) « J'entends [les enfants rire dans la cour]. » f) « [La pluie ayant cessé], nous sortîmes. »",
              hint: "Cherchez le mot qui introduit la subordonnée ; s'il n'y en a pas, regardez si le noyau est un infinitif ou un participe qui a son propre sujet.",
              solution: [
                "a) Subordonnée circonstancielle de temps, introduite par la locution conjonctive dès que, complément circonstanciel de temps de la principale.",
                "b) Subordonnée interrogative indirecte, introduite par si, COD de « me demande ».",
                "c) Subordonnée relative, introduite par le pronom relatif dont, complément de l'antécédent « homme ».",
                "d) Subordonnée complétive, introduite par la conjonction que, COD de « espérons ».",
                "e) Subordonnée infinitive (noyau : rire ; sujet : les enfants), COD de « entends ».",
                "f) Subordonnée participiale (noyau : ayant cessé ; sujet : la pluie), complément circonstanciel de temps, avec une nuance de cause.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (question de grammaire de l'oral). Analysez la phrase suivante, écrite pour l'exercice, en identifiant toutes les propositions et leurs relations, puis dites en une phrase quel effet produit sa construction : « Bien que le soleil soit déjà haut, le voyageur, qui marche depuis l'aube, ne s'arrête pas, car il veut atteindre le village avant que l'orage éclate. »",
              hint: "Cinq verbes conjugués : identifiez la principale, puis classez les autres propositions (circonstancielles, relative, coordonnée). « atteindre » n'est pas le noyau d'une proposition : son sujet est le même que celui de « veut ».",
              solution: [
                "Verbes conjugués : soit, marche, s'arrête, veut, éclate. Cinq propositions.",
                "Principale : « le voyageur ne s'arrête pas ».",
                "« Bien que le soleil soit déjà haut » : subordonnée circonstancielle de concession, introduite par bien que (suivie du subjonctif soit), complément circonstanciel de la principale.",
                "« qui marche depuis l'aube » : subordonnée relative introduite par qui, complément de l'antécédent « voyageur » ; placée entre virgules, elle est explicative (on pourrait la supprimer sans changer l'identification du voyageur).",
                "« car il veut atteindre le village » : proposition coordonnée à la principale par car, qui exprime la cause. L'infinitif « atteindre » est COD de « veut » : il ne forme pas une proposition.",
                "« avant que l'orage éclate » : subordonnée circonstancielle de temps, introduite par avant que (suivie du subjonctif), complément circonstanciel de la proposition qu'elle complète.",
                "Effet : la phrase encadre l'action principale (le voyageur ne s'arrête pas) par un obstacle surmonté (la concession) et une raison pressante (la cause et la menace de l'orage), ce qui traduit la détermination du personnage.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase au type de liaison ou de subordonnée qu'elle illustre.",
            pairs: [
              { left: "« Il pleut, nous restons. »", right: "Propositions juxtaposées" },
              { left: "« Il pleut, mais nous sortons. »", right: "Propositions coordonnées" },
              { left: "« Le roman que je lis est long. »", right: "Subordonnée relative" },
              { left: "« Je crois qu'il viendra. »", right: "Subordonnée complétive" },
              { left: "« Nous sortirons quand il fera beau. »", right: "Subordonnée circonstancielle" },
              { left: "« Je vois la nuit tomber. »", right: "Subordonnée infinitive" },
            ],
          },
          quiz: [
            {
              q: "Combien de propositions compte la phrase : « Je pense qu'il viendra si le train arrive à l'heure » ?",
              options: ["Deux", "Trois", "Quatre", "Une"],
              answer: 1,
              why: "Trois verbes conjugués (pense, viendra, arrive) : une principale, une complétive et une circonstancielle de condition.",
            },
            {
              q: "Dans « Le film dont tout le monde parle sort demain », la subordonnée est :",
              options: ["une complétive", "une interrogative indirecte", "une circonstancielle de cause", "une relative"],
              answer: 3,
              why: "Elle est introduite par le pronom relatif dont et complète l'antécédent « film ».",
            },
            {
              q: "Deux propositions reliées par un point-virgule sont :",
              options: ["juxtaposées", "coordonnées", "subordonnées"],
              answer: 0,
              why: "La juxtaposition relie les propositions par la seule ponctuation, sans mot de liaison.",
            },
            {
              q: "Dans « Je me demande si elle a raison », la subordonnée est :",
              options: ["une circonstancielle de condition", "une interrogative indirecte", "une relative", "une participiale"],
              answer: 1,
              why: "« si » introduit ici une question rapportée, COD de « me demande » ; ce n'est pas une condition.",
            },
            {
              q: "Quelle subordonnée a pour noyau un participe doté de son propre sujet ?",
              options: ["La circonstancielle de temps", "L'infinitive", "La participiale", "La complétive"],
              answer: 2,
              why: "La participiale, comme dans « Le travail terminé, ils partirent », a pour noyau un participe dont le sujet est propre.",
            },
          ],
          trap: "Confondre « que » pronom relatif et « que » conjonction de subordination : le relatif reprend un antécédent (« le livre que je lis »), la conjonction n'en a pas (« je crois que la pièce plaira »).",
          method: "Soulignez d'abord tous les verbes conjugués et tracez une barre entre les propositions avant de nommer quoi que ce soit : la moitié des erreurs vient d'un découpage fait trop vite.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'relations-logiques',
          title: "Exprimer les relations logiques : cause, conséquence, opposition",
          minutes: 30,
          objectives: [
            "Identifier les relations logiques de cause, de conséquence, de but, d'opposition et de concession.",
            "Varier les moyens de les exprimer : connecteurs, subordonnées, prépositions, ponctuation, lexique.",
            "Employer le mode qui convient après chaque subordonnant (indicatif ou subjonctif).",
            "Analyser le rôle des connecteurs logiques dans un texte argumentatif.",
          ],
          course: [
            {
              heading: "Exprimer la cause",
              paragraphs: [
                "La cause est l'origine d'un fait : elle répond à la question pourquoi ? On l'exprime par une conjonction de coordination (car), un adverbe (en effet), une subordonnée circonstancielle de cause (parce que, puisque, comme, étant donné que, vu que, sous prétexte que), toujours suivie de l'indicatif, ou par une préposition suivie d'un nom ou d'un infinitif (à cause de, grâce à, en raison de, faute de, pour avoir + participe). La juxtaposition avec deux-points peut aussi l'exprimer : « Il reste chez lui : il est malade. »",
                "Ces outils ont des nuances. Parce que donne une cause présentée comme nouvelle pour l'interlocuteur. Puisque présente une cause connue ou admise par lui (« Puisque vous êtes là, commençons »). Comme se place en tête de phrase. Sous prétexte que présente une cause contestée par celui qui parle. Grâce à introduit une cause jugée favorable, à cause de une cause neutre ou défavorable. La proposition introduite par car suit toujours celle qu'elle explique et ne peut pas ouvrir la phrase.",
              ],
              box: { label: "À retenir", text: "Cause : car, en effet ; parce que, puisque, comme, vu que, sous prétexte que (+ indicatif) ; à cause de, grâce à, en raison de, faute de (+ nom) ; deux-points." },
            },
            {
              heading: "Exprimer la conséquence et le but",
              paragraphs: [
                "La conséquence est le résultat d'un fait. On l'exprime par donc, c'est pourquoi, par conséquent, ainsi, aussi (qui entraîne souvent l'inversion du sujet en langue soutenue : « Il pleuvait ; aussi resta-t-il chez lui »), par une subordonnée introduite par si bien que, de sorte que, au point que, ou par les systèmes si… que, tellement… que, tant… que, toujours suivis de l'indicatif : « Il a tant couru qu'il est épuisé. » Le lexique peut aussi l'exprimer : entraîner, provoquer, causer.",
                "Le but est un résultat recherché, mais pas encore atteint. Il s'exprime par pour que, afin que, de sorte que suivis du subjonctif, ou par pour, afin de suivis de l'infinitif quand le sujet est le même. La différence de mode est décisive : « Il parle fort, de sorte que tout le monde l'entend » (indicatif : conséquence réelle) ; « Il parle fort, de sorte que tout le monde l'entende » (subjonctif : but visé).",
              ],
              box: { label: "Règle", text: "Conséquence (résultat réel) : si bien que, de sorte que, si… que, tellement… que + indicatif. But (résultat visé) : pour que, afin que, de sorte que + subjonctif ; pour, afin de + infinitif." },
            },
            {
              heading: "Exprimer l'opposition et la concession",
              paragraphs: [
                "L'opposition met en parallèle deux faits qui contrastent, sans que l'un empêche l'autre : « Mon frère aime la mer, alors que je préfère la montagne. » On l'exprime par alors que, tandis que (+ indicatif), au contraire, en revanche, par contre (usage plus familier), mais. La concession est plus précise : un fait aurait dû empêcher l'autre, mais ne l'a pas fait. « Bien qu'il soit fatigué, il continue » : la fatigue aurait logiquement dû l'arrêter.",
                "La concession s'exprime par bien que, quoique (+ subjonctif), même si (+ indicatif), malgré, en dépit de (+ nom), ou par les adverbes pourtant, cependant, néanmoins, toutefois. Attention : en langue soutenue, on évite « malgré que » et l'on écrit « bien que » ; on distingue quoique (en un mot, synonyme de bien que) et quoi que (en deux mots, qui signifie « quelle que soit la chose que » : « Quoi que vous disiez, je partirai »). Dans l'argumentation, la concession permet d'accorder un point à l'adversaire pour mieux le réfuter.",
              ],
              box: { label: "Règle", text: "Opposition : alors que, tandis que (+ indicatif), en revanche, au contraire. Concession : bien que, quoique (+ subjonctif), même si (+ indicatif), malgré (+ nom), pourtant, cependant, néanmoins." },
            },
            {
              heading: "Varier les moyens et interpréter",
              paragraphs: [
                "Une même relation peut s'exprimer de nombreuses façons : par un connecteur, une subordonnée, un groupe prépositionnel, un simple signe de ponctuation, ou même un verbe (« Son retard a provoqué la colère du professeur »). Varier ces moyens rend une écriture plus précise et plus élégante, et c'est une compétence attendue dans vos commentaires et vos dissertations.",
                "Quand vous analysez un texte argumentatif, les connecteurs logiques révèlent la structure du raisonnement : certes… mais signale une concession, donc une conclusion, en effet une justification. Une relation non exprimée (juxtaposition) oblige le lecteur à la reconstituer, ce qui peut produire un effet de surprise ou d'évidence. Relever les connecteurs sans les interpréter ne suffit pas : il faut montrer comment ils conduisent le lecteur vers la thèse.",
              ],
            },
          ],
          keyPoints: [
            "Cause : car, parce que, puisque, comme (+ indicatif), à cause de, grâce à.",
            "Conséquence : donc, si bien que, si… que, tellement… que (+ indicatif).",
            "But : pour que, afin que (+ subjonctif) ; pour, afin de (+ infinitif).",
            "Opposition : alors que, tandis que, en revanche ; concession : bien que, quoique (+ subjonctif), même si (+ indicatif), malgré.",
            "« De sorte que » + indicatif = conséquence ; + subjonctif = but.",
            "Éviter « malgré que » ; distinguer quoique (bien que) et quoi que (quelle que soit la chose).",
          ],
          example: {
            statement: "Exprimez de quatre manières différentes la relation de cause entre « la route est verglacée » et « la course est annulée ».",
            solution: [
              "Par une subordonnée circonstancielle de cause : « La course est annulée parce que la route est verglacée. »",
              "Par une conjonction de coordination : « La course est annulée, car la route est verglacée. »",
              "Par une préposition suivie d'un nom : « La course est annulée à cause du verglas. »",
              "Par la juxtaposition avec deux-points : « La course est annulée : la route est verglacée. »",
              "On pourrait aussi employer comme en tête de phrase : « Comme la route est verglacée, la course est annulée. »",
              "Réponse : subordonnée (parce que, comme), coordination (car), groupe prépositionnel (à cause de) et ponctuation (deux-points) expriment tous la même cause.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la relation logique exprimée dans chaque phrase (cause, conséquence, but, opposition, concession) : a) « Puisque vous insistez, je viendrai. » b) « Il a tant couru qu'il est épuisé. » c) « Bien qu'il soit fatigué, il continue. » d) « Elle articule pour qu'on la comprenne. » e) « Mon frère aime la mer, alors que je préfère la montagne. » f) « Grâce à votre aide, nous avons réussi. »",
              hint: "Repérez le mot de liaison, puis demandez-vous : est-ce l'origine, le résultat réel, le résultat visé, un contraste ou un obstacle surmonté ?",
              solution: [
                "a) Cause (puisque : cause connue de l'interlocuteur).",
                "b) Conséquence (système tant… que + indicatif).",
                "c) Concession (bien que + subjonctif : la fatigue aurait dû l'arrêter).",
                "d) But (pour que + subjonctif : résultat recherché).",
                "e) Opposition (alors que : deux goûts mis en contraste, sans obstacle).",
                "f) Cause (grâce à + nom : cause jugée favorable).",
              ],
            },
            {
              level: 2,
              statement: "Mettez le verbe entre parenthèses au mode et au temps qui conviennent, puis justifiez : a) « Bien qu'il (pleuvoir), nous sortirons. » b) « Même s'il (pleuvoir), nous sortirons. » c) « Parlez plus fort afin que tout le monde vous (entendre). » d) « Il a parlé si fort que tout le monde l'(entendre, passé composé). » e) Corrigez enfin cette phrase pour la langue soutenue : « Malgré qu'il soit malade, il est venu. »",
              hint: "Bien que et afin que appellent le subjonctif ; même si et si… que appellent l'indicatif.",
              solution: [
                "a) « Bien qu'il pleuve » : bien que, subordonnant de concession, impose le subjonctif.",
                "b) « Même s'il pleut » : même si est suivi de l'indicatif.",
                "c) « afin que tout le monde vous entende » : afin que, subordonnant de but, impose le subjonctif.",
                "d) « si fort que tout le monde l'a entendu » : le système si… que exprime une conséquence réelle, à l'indicatif.",
                "e) « Bien qu'il soit malade, il est venu » ou « Malgré sa maladie, il est venu » : malgré se construit avec un nom, et l'on remplace « malgré que » par bien que en langue soutenue.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (analyse d'un texte argumentatif). Voici un passage écrit pour l'exercice (données fictives) : « On répète que les jeunes ne lisent plus. Pourtant, les ventes de bandes dessinées n'ont jamais été aussi élevées. Certes, le roman classique attire moins ; mais c'est parce qu'on le présente comme une obligation, si bien que beaucoup d'élèves s'en détournent. Changeons donc la manière de le proposer, afin que le goût de lire revienne. » Relevez les connecteurs, nommez la relation que chacun exprime et montrez comment ils construisent l'argumentation.",
              hint: "Suivez le texte phrase après phrase : chaque connecteur correspond à une étape du raisonnement (thèse adverse, réfutation, concession, explication, conséquence, conclusion, but).",
              solution: [
                "« Pourtant » exprime l'opposition (ou la concession) : il réfute la thèse adverse (« les jeunes ne lisent plus ») par un fait contraire.",
                "« Certes… mais » forme un mouvement concessif : l'auteur accorde un point (le roman classique attire moins) avant de le dépasser.",
                "« parce que » exprime la cause : il explique ce désintérêt par la manière dont le roman est présenté.",
                "« si bien que » exprime la conséquence, à l'indicatif : les élèves se détournent réellement du roman.",
                "« donc » introduit la conclusion pratique, et « afin que » (+ subjonctif « revienne ») exprime le but visé.",
                "Interprétation : les connecteurs dessinent un raisonnement complet, de la réfutation à la proposition d'action. Le passage par la concession donne à l'auteur une image de mesure, et l'impératif final (« Changeons ») associe le lecteur à la solution.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les relations logiques.",
            statements: [
              { text: "« Bien que » se construit avec le subjonctif.", true: true, why: "Bien que et quoique, subordonnants de concession, appellent le subjonctif : « bien qu'il soit »." },
              { text: "« Même si » se construit avec le subjonctif.", true: false, why: "Même si est suivi de l'indicatif : « même s'il pleut »." },
              { text: "« Puisque » présente une cause supposée connue de l'interlocuteur.", true: true, why: "« Puisque vous êtes là, commençons » : la cause est admise par les deux parties." },
              { text: "« De sorte que » suivi du subjonctif exprime une conséquence réelle.", true: false, why: "Avec le subjonctif, de sorte que exprime le but ; avec l'indicatif, la conséquence." },
              { text: "Deux propositions juxtaposées peuvent exprimer une relation logique.", true: true, why: "La relation est implicite : « Il a trop couru : il est épuisé » exprime une conséquence." },
              { text: "La proposition introduite par « car » peut être placée avant celle qu'elle explique.", true: false, why: "Car ne peut pas ouvrir la phrase : la proposition qu'il introduit suit toujours celle qu'elle justifie." },
              { text: "« Quoique » en un mot a le même sens que « bien que ».", true: true, why: "Quoique exprime la concession ; quoi que, en deux mots, signifie « quelle que soit la chose que »." },
            ],
          },
          quiz: [
            {
              q: "Quelle relation exprime « Il est si timide qu'il n'ose pas parler » ?",
              options: ["La cause", "Le but recherché", "La concession", "La conséquence"],
              answer: 3,
              why: "Le système si… que + indicatif exprime la conséquence : la timidité a pour résultat le silence.",
            },
            {
              q: "Quelle phrase est correcte en langue soutenue ?",
              options: ["Malgré qu'il pleuve, nous sortons.", "Bien qu'il pleuve, nous sortons.", "Bien qu'il pleut, nous sortons.", "Même s'il pleuve, nous sortons."],
              answer: 1,
              why: "Bien que demande le subjonctif (pleuve) ; malgré que est à éviter, et même si demande l'indicatif.",
            },
            {
              q: "« Elle travaille afin que ses enfants puissent étudier. » La subordonnée exprime :",
              options: ["le but", "la cause", "l'opposition"],
              answer: 0,
              why: "Afin que + subjonctif introduit un résultat recherché, donc un but.",
            },
            {
              q: "Quel connecteur exprime une concession ?",
              options: ["Par conséquent", "En effet", "Néanmoins", "C'est pourquoi"],
              answer: 2,
              why: "Néanmoins, comme pourtant et cependant, marque qu'un fait n'a pas empêché l'autre. Les autres expriment la conséquence ou la cause.",
            },
            {
              q: "« Il est resté, sous prétexte qu'il était malade. » Que suggère « sous prétexte que » ?",
              options: ["Une cause certaine et admise par tous", "Une cause contestée par celui qui parle", "Un but que le personnage veut atteindre", "Une conséquence inattendue de sa maladie"],
              answer: 1,
              why: "Sous prétexte que présente une cause dont le locuteur doute : il laisse entendre que la maladie est une excuse.",
            },
          ],
          trap: "Confondre conséquence et but, et donc l'indicatif et le subjonctif : « de sorte qu'il comprend » (résultat réel) n'a pas le même sens que « de sorte qu'il comprenne » (résultat visé).",
          method: "Pour identifier une relation logique, remplacez le connecteur par un équivalent connu : si « parce que » convient, c'est une cause ; si « donc », une conséquence ; si « pour que », un but ; si « bien que », une concession.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lexique-formation',
          title: "Le lexique : formation des mots et champs lexicaux",
          minutes: 30,
          objectives: [
            "Analyser la formation d'un mot : radical, préfixe, suffixe, dérivation et composition.",
            "Identifier les racines grecques et latines les plus fréquentes et les doublets étymologiques.",
            "Distinguer champ lexical et champ sémantique.",
            "Interpréter le lexique d'un texte pour en dégager le sens.",
          ],
          course: [
            {
              heading: "La dérivation : radical, préfixe, suffixe",
              paragraphs: [
                "La plupart des mots français sont construits. Le radical porte le sens principal ; on peut lui ajouter des affixes : un préfixe avant, un suffixe après. Dans « imprévisible », on reconnaît le préfixe négatif im- (variante de in- devant p, b, m), le préfixe pré- (avant), le radical vis- (voir, du latin videre) et le suffixe -ible (qui peut être). Le mot signifie donc : qu'on ne peut pas voir à l'avance, prévoir. L'ensemble des mots formés sur un même radical constitue une famille de mots.",
                "Le préfixe modifie le sens sans changer la classe grammaticale (faire, défaire, refaire). Le suffixe, lui, change souvent la classe : -tion forme des noms à partir de verbes (créer, création), -able et -ible des adjectifs (laver, lavable), -ment des adverbes à partir d'adjectifs au féminin (lente, lentement). Certains suffixes ajoutent une nuance : diminutive (-ette, maisonnette) ou péjorative (-âtre, rougeâtre ; -ard, chauffard).",
                "Deux cas particuliers sont à connaître. La formation parasynthétique ajoute en même temps un préfixe et un suffixe : « embellir » (em- + bel + -ir), car ni « embel » ni « bellir » n'existent. La conversion (ou dérivation impropre) fait passer un mot d'une classe à une autre sans le modifier : le verbe rire devient un nom (« un rire »), l'adjectif « beau » devient un nom (« le beau »).",
              ],
              box: { label: "Définition", text: "Radical : élément qui porte le sens. Préfixe : placé avant, il modifie le sens. Suffixe : placé après, il change souvent la classe du mot. Famille de mots : mots formés sur le même radical." },
            },
            {
              heading: "La composition et les autres procédés",
              paragraphs: [
                "La composition réunit deux mots ou plus pour en former un nouveau : chou-fleur, pomme de terre, portefeuille, arc-en-ciel. La composition savante assemble des racines grecques ou latines, très présentes dans le vocabulaire scientifique : bio- (vie), chrono- (temps), géo- (terre), hydro- (eau), anthropo- (homme), phil- (qui aime), -logie (étude, discours), -graphie (écriture), -phobe (qui craint), -mètre (mesure) pour le grec ; omni- (tout), -cide (qui tue), -vore (qui mange) pour le latin. Ainsi, « chronomètre » est l'instrument qui mesure le temps.",
                "D'autres procédés enrichissent la langue. La troncation abrège un mot (métro pour métropolitain, télé pour télévision). La siglaison forme un mot avec des initiales, prononcées lettre par lettre (SNCF) ou comme un mot, et l'on parle alors d'acronyme (ovni, pour objet volant non identifié). Le mot-valise fusionne deux mots (courriel, de courrier et électronique). L'emprunt fait venir un mot d'une autre langue (algèbre de l'arabe, football de l'anglais). Le néologisme désigne tout mot nouveau.",
              ],
              box: { label: "Repère", text: "Racines grecques : bio (vie), chrono (temps), géo (terre), hydro (eau), anthropo (homme), philo (aimer), logie (étude), graphie (écrire), phobe (craindre). Racines latines : omni (tout), cide (tuer), vore (manger)." },
            },
            {
              heading: "Étymologie : formation populaire et formation savante",
              paragraphs: [
                "Le français vient en grande partie du latin. Certains mots se sont transformés lentement dans la bouche des locuteurs au fil des siècles : c'est la formation populaire. D'autres ont été repris plus tard directement du latin écrit, par des savants, et ont gardé une forme proche de l'original : c'est la formation savante. Un même mot latin a parfois donné deux mots français, que l'on appelle des doublets.",
                "Ainsi, le latin fragilis a donné « frêle » (forme populaire) et « fragile » (forme savante) ; hospitalis a donné « hôtel » et « hôpital » ; potio a donné « poison » et « potion » ; auscultare a donné « écouter » et « ausculter ». Les deux mots d'un doublet ont souvent pris des sens différents. Connaître l'étymologie aide à comprendre un mot inconnu, à mémoriser son orthographe et à saisir des nuances de sens.",
              ],
              box: { label: "Définition", text: "Doublets : deux mots français issus d'un même mot latin, l'un par formation populaire (frêle, hôtel, écouter), l'autre par formation savante (fragile, hôpital, ausculter)." },
            },
            {
              heading: "Champ lexical et champ sémantique",
              paragraphs: [
                "Le champ lexical est l'ensemble des mots d'un texte qui se rapportent à un même thème. Dans un passage où l'on trouve « vague », « écume », « marée », « rivage », « sel », on relève le champ lexical de la mer. Ces mots peuvent être de classes différentes (noms, verbes, adjectifs). Relever un champ lexical dominant permet de dégager le thème d'un texte ; repérer deux champs lexicaux opposés (la lumière et l'ombre, la vie et la mort) permet souvent d'en dégager l'enjeu.",
                "Le champ sémantique, au contraire, est l'ensemble des sens d'un même mot. Le mot « feu » peut désigner une flamme, un incendie, un signal lumineux (le feu rouge), la passion amoureuse (dans la tragédie classique) ou le combat (« ouvrir le feu ») : c'est un mot polysémique. Il ne faut pas confondre les deux notions : le champ lexical regroupe plusieurs mots autour d'un thème, le champ sémantique déploie plusieurs sens autour d'un mot.",
              ],
              box: { label: "À retenir", text: "Champ lexical : plusieurs mots, un même thème (texte). Champ sémantique : un mot, plusieurs sens (polysémie). Un relevé n'a de valeur que s'il est interprété." },
            },
          ],
          keyPoints: [
            "Mot construit = préfixe + radical + suffixe ; le suffixe change souvent la classe grammaticale.",
            "Parasynthétique : préfixe et suffixe ajoutés ensemble (embellir) ; conversion : changement de classe (le rire).",
            "Composition (chou-fleur), composition savante (chronomètre), troncation, sigle, acronyme, mot-valise, emprunt.",
            "Doublets : frêle et fragile, hôtel et hôpital, poison et potion, écouter et ausculter.",
            "Champ lexical : mots d'un même thème ; champ sémantique : sens d'un même mot.",
          ],
          example: {
            statement: "Décomposez le mot « inexplicable » et expliquez son sens grâce à sa formation.",
            solution: [
              "On repère le préfixe in-, qui exprime la négation.",
              "On repère le radical explic-, celui du verbe expliquer (du latin explicare, déplier, développer).",
              "On repère le suffixe -able, qui forme des adjectifs exprimant une possibilité (qui peut être…).",
              "Le mot « explicable » signifie donc : qui peut être expliqué ; le préfixe in- en inverse le sens.",
              "Réponse : in- + explic- + -able ; « inexplicable » signifie : qu'on ne peut pas expliquer. C'est un adjectif, comme l'indique le suffixe -able.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez chaque mot (préfixe, radical, suffixe) et indiquez sa classe grammaticale : a) déraisonnable ; b) relecture ; c) inoubliable ; d) embellir ; e) lentement.",
              hint: "Cherchez d'abord le mot simple caché à l'intérieur, puis ce qui a été ajouté avant et après.",
              solution: [
                "a) dé- (préfixe négatif) + raison (radical) + -able (suffixe) : adjectif, qui n'est pas raisonnable.",
                "b) re- (préfixe de répétition) + lect- (radical de lire, du latin legere) + -ure (suffixe de nom) : nom, action de lire à nouveau.",
                "c) in- (préfixe négatif) + oubli (radical) + -able (suffixe) : adjectif, qu'on ne peut pas oublier.",
                "d) em- (préfixe) + bel (radical de beau, belle) + -ir (suffixe verbal) : verbe formé par formation parasynthétique, car « embel » et « bellir » n'existent pas.",
                "e) lente (adjectif au féminin, radical) + -ment (suffixe d'adverbe) : adverbe, d'une manière lente.",
              ],
            },
            {
              level: 2,
              statement: "a) Donnez le sens de chaque élément et le sens du mot : chronologie, philanthrope, hydrophobe, téléphone. b) Expliquez la différence de formation et de sens entre « frêle » et « fragile ».",
              hint: "Les quatre mots sont formés de racines grecques : chrono, logie, phil, anthrope, hydro, phobe, télé, phone. Pour la question b, pensez aux deux voies de formation à partir du latin.",
              solution: [
                "Chronologie : chrono- (temps) + -logie (étude, discours) ; science des dates, ordre de succession des événements.",
                "Philanthrope : phil- (qui aime) + -anthrope (homme) ; personne qui aime les hommes et agit pour améliorer leur sort.",
                "Hydrophobe : hydro- (eau) + -phobe (qui craint) ; qui a peur de l'eau ou, en sciences, qui repousse l'eau.",
                "Téléphone : télé- (loin) + -phone (voix, son) ; appareil qui transmet la voix à distance.",
                "b) Les deux mots viennent du latin fragilis. « Frêle » est issu de la formation populaire : il s'est transformé au fil des siècles et désigne ce qui est mince, délicat, peu robuste. « Fragile » est une formation savante, reprise directement du latin : il désigne ce qui se brise facilement, et a un sens plus large (une santé fragile, un équilibre fragile). Ce sont des doublets.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (commentaire). Voici un passage écrit pour l'exercice : « Au bout de la rue, la vieille usine se dressait, noire et muette. Ses vitres brisées laissaient passer le vent ; la rouille rongeait les grilles. Pourtant, entre les pavés disjoints, des herbes folles poussaient, et un cerisier sauvage avait fleuri contre le mur, éclatant de blancheur. » Relevez deux champs lexicaux opposés, puis rédigez un court paragraphe qui interprète leur opposition.",
              hint: "Classez les mots en deux colonnes : ce qui évoque l'abandon et la dégradation, ce qui évoque la vie. Repérez aussi le connecteur qui marque le basculement.",
              solution: [
                "Champ lexical de l'abandon et de la dégradation : « vieille », « noire », « muette », « brisées », « rouille », « rongeait », « disjoints ».",
                "Champ lexical de la vie et de la renaissance : « herbes », « poussaient », « cerisier », « fleuri », « éclatant », « blancheur ».",
                "Le connecteur « Pourtant » marque le basculement d'un champ lexical à l'autre, au milieu du passage.",
                "Paragraphe rédigé : « Le passage repose sur l'opposition de deux champs lexicaux. La première phrase décrit une usine abandonnée, gagnée par la destruction (« vitres brisées », « rouille », « rongeait »), et les adjectifs « noire et muette » la rendent presque funèbre. Le connecteur « Pourtant » introduit un renversement : la nature reprend ses droits, avec des « herbes folles » et un cerisier qui « avait fleuri ». La blancheur éclatante de l'arbre s'oppose à la noirceur de l'usine : le texte suggère que la vie renaît là où l'activité humaine a disparu. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément savant à son sens.",
            pairs: [
              { left: "bio-", right: "vie" },
              { left: "chrono-", right: "temps" },
              { left: "-logie", right: "étude, discours" },
              { left: "anthropo-", right: "être humain" },
              { left: "-phobe", right: "qui craint" },
              { left: "omni-", right: "tout" },
            ],
          },
          quiz: [
            {
              q: "Dans le mot « lavable », le suffixe -able :",
              options: ["forme un adjectif exprimant une possibilité", "forme un adverbe à partir d'un adjectif au féminin", "exprime la répétition", "exprime la négation"],
              answer: 0,
              why: "-able forme des adjectifs : lavable signifie « qui peut être lavé ».",
            },
            {
              q: "« Hôtel » et « hôpital » sont :",
              options: ["des synonymes parfaits, interchangeables partout", "des antonymes", "des doublets issus du même mot latin", "des mots-valises"],
              answer: 2,
              why: "Tous deux viennent du latin hospitalis : hôtel par formation populaire, hôpital par formation savante.",
            },
            {
              q: "Comment appelle-t-on l'ensemble des sens d'un même mot ?",
              options: ["Le champ lexical", "La famille de mots", "Le champ sémantique", "Le registre de langue"],
              answer: 2,
              why: "Le champ sémantique déploie les différents sens d'un mot polysémique ; le champ lexical regroupe des mots autour d'un thème.",
            },
            {
              q: "« Courriel » est formé par :",
              options: ["troncation", "emprunt à l'anglais", "dérivation", "mot-valise"],
              answer: 3,
              why: "Courriel fusionne courrier et électronique : c'est un mot-valise.",
            },
            {
              q: "Le verbe « embellir » est formé par :",
              options: ["composition de deux mots autonomes", "formation parasynthétique", "conversion", "siglaison"],
              answer: 1,
              why: "Le préfixe em- et le suffixe -ir sont ajoutés ensemble à bel : ni « embel » ni « bellir » n'existent.",
            },
          ],
          trap: "Relever un champ lexical sans l'interpréter, ou le confondre avec le champ sémantique : une liste de mots n'est pas une analyse, il faut dire ce que ce lexique révèle du texte.",
          method: "Devant un mot inconnu, cherchez le radical que vous connaissez, puis le sens du préfixe et du suffixe : cette décomposition suffit souvent à retrouver le sens, et le contexte de la phrase permet de vérifier votre hypothèse.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE THÉÂTRE AU XVIIe SIÈCLE : COMÉDIE ET TRAGÉDIE                      */
    /* ==================================================================== */
    {
      id: 'theatre-classique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'texte-representation',
          title: "Le texte théâtral et sa représentation : dialogue, didascalies, mise en scène",
          minutes: 30,
          objectives: [
            "Définir la double énonciation et ses effets sur le spectateur.",
            "Identifier les formes de la parole théâtrale : réplique, tirade, monologue, stichomythie, aparté, récit.",
            "Repérer la structure d'une pièce (actes, scènes, exposition, nœud, dénouement) et le rôle des didascalies.",
            "Analyser les choix d'une mise en scène et justifier une proposition de mise en scène par le texte.",
          ],
          course: [
            {
              heading: "Un texte écrit pour être joué",
              paragraphs: [
                "Le texte de théâtre n'est pas fait d'abord pour être lu, mais pour être joué devant un public : Molière lui-même rappelait, dans un avis au lecteur de L'Amour médecin (1665), que les comédies sont faites pour être représentées. Le texte se compose de deux parties. Le dialogue est constitué des paroles prononcées par les personnages ; les didascalies sont toutes les indications qui ne sont pas destinées à être dites : la liste des personnages, les noms placés devant chaque réplique, les indications de lieu, de gestes, de ton, de décor.",
                "Au XVIIe siècle, les didascalies sont rares : une liste des personnages, une indication de lieu (« La scène est à Paris ») et quelques gestes. Les indications utiles au jeu se trouvent souvent dans les répliques elles-mêmes : on parle de didascalies internes (« Que vois-je ? », « Approchez »). Aux XIXe et XXe siècles, les didascalies deviennent beaucoup plus nombreuses : chez Beckett, elles règlent avec précision les silences, les gestes et les déplacements.",
              ],
              box: { label: "Définition", text: "Dialogue : paroles prononcées par les personnages. Didascalies : indications non prononcées (liste des personnages, lieu, gestes, ton, décor). Didascalie interne : indication de jeu contenue dans une réplique." },
            },
            {
              heading: "La double énonciation et les formes de la parole",
              paragraphs: [
                "Au théâtre, toute parole a deux destinataires : le personnage à qui elle est adressée sur scène et le public qui l'écoute dans la salle. C'est la double énonciation. Elle permet des effets propres au théâtre : le spectateur peut en savoir plus qu'un personnage (on parle d'ironie dramatique), comprendre un double sens, rire d'un malentendu ou trembler pour un héros qui ignore le danger.",
                "La parole théâtrale prend plusieurs formes. La réplique est ce qu'un personnage dit en une fois, avant qu'un autre ne parle. La tirade est une longue réplique, souvent argumentative ou lyrique. La stichomythie est un échange de répliques très brèves, souvent d'un vers chacune, qui traduit un affrontement vif. Le monologue est le discours d'un personnage seul en scène (ou qui se croit seul) : il révèle ses pensées ou sa délibération. L'aparté est une réplique dite à part, que les autres personnages présents sont censés ne pas entendre. Le récit raconte des événements qui se sont passés hors de la scène.",
              ],
              box: { label: "À retenir", text: "Réplique (prise de parole), tirade (longue réplique), stichomythie (répliques brèves en rafale), monologue (personnage seul), aparté (parole que les autres n'entendent pas), récit (événement survenu hors scène)." },
            },
            {
              heading: "La structure de la pièce",
              paragraphs: [
                "Une pièce se divise en actes, eux-mêmes découpés en scènes. Dans le théâtre classique, la tragédie et la grande comédie comptent cinq actes ; on change de scène chaque fois qu'un personnage entre ou sort. Au XXe siècle, beaucoup d'auteurs abandonnent ce découpage au profit de tableaux, de séquences ou d'un acte unique.",
                "L'action suit traditionnellement trois étapes. L'exposition, au début de la pièce, présente les personnages, le lieu, l'époque et la situation de départ : elle doit informer le spectateur tout en l'intéressant. Le nœud est l'ensemble des obstacles et des conflits qui empêchent les personnages d'atteindre leur but ; il est relancé par des péripéties, retournements de situation. Le dénouement résout le conflit : il est heureux dans la comédie (souvent un mariage), malheureux dans la tragédie (souvent la mort).",
              ],
              box: { label: "Repère", text: "Exposition (situation initiale) → nœud et péripéties (conflits, retournements) → dénouement (heureux en comédie, malheureux en tragédie). On change de scène quand un personnage entre ou sort." },
            },
            {
              heading: "De la page à la scène : la mise en scène",
              paragraphs: [
                "Représenter une pièce, c'est faire des choix que le texte ne fixe pas : le décor et l'espace (la scénographie), les costumes, les lumières, la musique et les sons, le rythme, et surtout le jeu des comédiens (voix, gestes, déplacements, silences). Au XVIIe siècle, ces choix revenaient au chef de troupe, comme Molière, à la fois auteur, comédien et directeur. Le metteur en scène, au sens moderne, s'impose à la fin du XIXe siècle : André Antoine fonde le Théâtre-Libre en 1887 et cherche à rendre la scène plus vraie.",
                "Un même texte peut donc donner des spectacles très différents : une tragédie de Racine peut être jouée en costumes d'époque ou dans un décor contemporain dépouillé, un personnage de Molière peut paraître ridicule ou inquiétant. Analyser une mise en scène, c'est décrire ces choix, puis se demander quelle interprétation de la pièce ils proposent. Proposer une mise en scène, c'est justifier chaque choix par un élément précis du texte.",
              ],
            },
          ],
          keyPoints: [
            "Texte de théâtre = dialogue (paroles dites) + didascalies (indications non dites).",
            "Double énonciation : chaque réplique s'adresse à un personnage et au public.",
            "Réplique, tirade, monologue, stichomythie, aparté, récit : les formes de la parole.",
            "Actes et scènes ; exposition, nœud, péripéties, dénouement.",
            "La mise en scène (décor, costumes, lumières, jeu) interprète le texte ; le metteur en scène moderne naît à la fin du XIXe siècle (Antoine, 1887).",
          ],
          example: {
            statement: "Voici un extrait écrit pour l'exercice. « LE VALET, à part. Si mon maître savait que j'ai mangé son dîner… / LE MAÎTRE, entrant. Où est mon repas ? / LE VALET. Un chat, Monsieur ! Un chat énorme ! / LE MAÎTRE. Un chat ? / LE VALET. Gros comme un loup. » Identifiez les didascalies, les formes de parole et expliquez l'effet de la double énonciation.",
            solution: [
              "Didascalies : les noms des personnages (LE VALET, LE MAÎTRE) et les indications « à part » et « entrant », qui ne sont pas prononcées.",
              "La première réplique est un aparté, signalé par « à part » : le maître n'est pas censé l'entendre.",
              "Les répliques suivantes, très brèves, forment un échange rapide qui fait penser à une stichomythie.",
              "Double énonciation : grâce à l'aparté, le public sait que le valet a mangé le dîner, ce que le maître ignore.",
              "Le spectateur, complice du valet, rit du mensonge de plus en plus énorme (« Gros comme un loup ») : c'est un effet d'ironie dramatique.",
              "Réponse : l'aparté crée une complicité entre le valet et le public, qui en sait plus que le maître ; le comique naît de ce décalage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la forme de parole ou l'élément décrit : a) une réplique de trente vers où un roi expose ses projets ; b) l'indication « Il se lève brusquement. » ; c) un personnage seul en scène qui hésite entre deux décisions ; d) des répliques d'un vers chacune entre deux ennemis ; e) une réplique que les autres personnages présents ne sont pas censés entendre ; f) un messager qui raconte une bataille survenue hors de la scène.",
              hint: "Demandez-vous à chaque fois : la parole est-elle dite ? par qui ? à qui ? sur quelle longueur ?",
              solution: [
                "a) Une tirade.",
                "b) Une didascalie (indication de jeu, non prononcée).",
                "c) Un monologue, ici délibératif.",
                "d) Une stichomythie.",
                "e) Un aparté.",
                "f) Un récit.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi une scène d'exposition est difficile à écrire, et dites quels moyens les auteurs utilisent pour la rendre vivante. Appuyez-vous sur la notion de double énonciation.",
              hint: "L'exposition doit donner des informations au public sans que les personnages aient l'air de parler pour lui.",
              solution: [
                "Difficulté : l'exposition doit informer le public (qui sont les personnages, où et quand se passe l'action, quel est le conflit) alors que les personnages, eux, connaissent déjà la situation.",
                "Risque : si un personnage raconte à un autre ce que tous deux savent déjà, la scène paraît artificielle ; la double énonciation devient trop visible.",
                "Premier moyen : faire arriver un personnage qui ignore la situation (un voyageur, un ami de retour) et à qui l'on doit tout expliquer.",
                "Deuxième moyen : commencer par une dispute ou une crise, in medias res, pour que les informations surgissent dans le conflit.",
                "Troisième moyen : utiliser un confident, personnage à qui le héros confie ses sentiments, très fréquent dans la tragédie classique.",
                "Réponse : l'exposition doit concilier information et action ; les auteurs y parviennent en créant un besoin naturel d'explication à l'intérieur même de la fiction.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (écrit d'appropriation). Voici une courte scène écrite pour l'exercice : « ÉLISE. Tu pars donc ? / LÉON. Demain. / ÉLISE. Sans un mot pour moi ? / LÉON. Que dirais-je ? / ÉLISE. Rien. Tu as raison. Rien. » Rédigez une note d'intention de mise en scène (une dizaine de lignes) : choisissez un décor, une lumière, des déplacements et un ton, et justifiez chaque choix par un élément précis du texte.",
              hint: "Partez des indices du texte : la brièveté des répliques, les questions sans réponse, la répétition finale de « Rien ». Chaque choix scénique doit traduire l'un d'eux.",
              solution: [
                "Lecture du texte : la stichomythie, les questions sans réponse et la répétition de « Rien » traduisent une rupture douloureuse et un dialogue impossible.",
                "Décor : un espace presque vide (un banc, une valise), pour concentrer l'attention sur les deux personnages et suggérer le départ annoncé par « Demain ».",
                "Lumière : une lumière froide et faible, qui se resserre peu à peu sur Élise, car c'est elle qui reste et qui souffre.",
                "Déplacements : Léon reste à distance, tourné vers la sortie ; Élise s'avance puis s'arrête à « Rien », comme si elle renonçait à le retenir.",
                "Ton : des répliques dites sans éclat, avec des silences entre elles ; le second « Rien » à peine murmuré, pour faire entendre la résignation.",
                "Note rédigée : « Je souhaite faire entendre le vide qui s'installe entre Élise et Léon. Sur un plateau nu, seuls un banc et une valise annoncent le départ. Une lumière froide se resserre progressivement sur Élise. Léon, déjà tourné vers la coulisse, ne regarde pas sa compagne : ses réponses brèves sont des fuites. Élise s'avance, puis s'immobilise sur le premier « Rien » ; le second sera presque murmuré, après un long silence, comme un renoncement. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le texte théâtral et la scène.",
            statements: [
              { text: "Les didascalies sont prononcées par les comédiens.", true: false, why: "Elles ne sont pas dites : elles indiquent le lieu, les gestes, le ton, le décor." },
              { text: "La double énonciation signifie que chaque réplique s'adresse à la fois à un personnage et au public.", true: true, why: "C'est le principe même de la communication théâtrale." },
              { text: "Dans le théâtre classique, on change de scène quand un personnage entre ou sort.", true: true, why: "La scène correspond à une configuration stable des personnages présents." },
              { text: "Un monologue est une réplique dite à part devant d'autres personnages.", true: false, why: "C'est la définition de l'aparté ; le monologue est prononcé par un personnage seul en scène." },
              { text: "Le dénouement d'une comédie est le plus souvent heureux.", true: true, why: "La comédie se termine souvent par un mariage et la réconciliation des personnages." },
              { text: "Le metteur en scène, au sens moderne, existait déjà à l'époque de Molière.", true: false, why: "Au XVIIe siècle, le chef de troupe dirigeait le spectacle ; le metteur en scène s'impose à la fin du XIXe siècle." },
              { text: "Une stichomythie est un échange de répliques très brèves.", true: true, why: "Souvent un vers par réplique, elle traduit un affrontement vif." },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on une indication de jeu contenue dans une réplique (« Approchez ») ?",
              options: ["Une tirade", "Un aparté adressé au public", "Une didascalie interne", "Un récit"],
              answer: 2,
              why: "La didascalie interne est une indication de jeu intégrée au dialogue, fréquente dans le théâtre classique.",
            },
            {
              q: "Quand le spectateur en sait plus qu'un personnage, on parle :",
              options: ["d'ironie dramatique", "de stichomythie", "de tirade", "de scène d'exposition"],
              answer: 0,
              why: "L'ironie dramatique naît de la double énonciation : le public connaît ce que le personnage ignore.",
            },
            {
              q: "Quel rôle joue la scène d'exposition ?",
              options: ["Résoudre définitivement le conflit par un mariage ou une mort", "Présenter la situation, les personnages et les enjeux", "Raconter une bataille survenue hors scène", "Remercier le public à la fin"],
              answer: 1,
              why: "L'exposition, au début de la pièce, donne au spectateur les informations nécessaires pour comprendre l'action.",
            },
            {
              q: "Qui fonde le Théâtre-Libre en 1887 ?",
              options: ["Sarah Bernhardt", "Jean Vilar", "Victor Hugo", "André Antoine"],
              answer: 3,
              why: "André Antoine, l'un des premiers metteurs en scène modernes, fonde le Théâtre-Libre en 1887.",
            },
            {
              q: "Un personnage seul en scène qui exprime ses pensées prononce :",
              options: ["une stichomythie", "un monologue", "un aparté"],
              answer: 1,
              why: "Le monologue est le discours d'un personnage seul (ou qui se croit seul) ; l'aparté est dit devant d'autres personnages qui ne l'entendent pas.",
            },
          ],
          trap: "Confondre monologue et aparté : le monologue est prononcé par un personnage seul en scène, l'aparté est une parole dite à part en présence d'autres personnages censés ne pas l'entendre.",
          method: "Pour étudier une scène, lisez-la comme un metteur en scène : qui est présent, qui parle le plus, qui se tait, quels gestes le texte impose-t-il ? Ces observations concrètes fournissent les meilleurs arguments d'un commentaire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'comedie-moliere',
          title: "La comédie : Molière et les ressorts du comique",
          minutes: 35,
          objectives: [
            "Situer Molière et son œuvre dans le XVIIe siècle.",
            "Distinguer les formes de la comédie : farce, comédie d'intrigue, de mœurs, de caractère, comédie-ballet.",
            "Identifier les ressorts du comique : mots, gestes, situation, caractère, mœurs, répétition.",
            "Analyser la double visée de la comédie : plaire et corriger.",
          ],
          course: [
            {
              heading: "Molière, homme de théâtre",
              paragraphs: [
                "Jean-Baptiste Poquelin, dit Molière (1622-1673), fils d'un tapissier du roi, choisit très jeune le théâtre. En 1643, il fonde avec la famille Béjart l'Illustre-Théâtre, qui fait faillite ; il parcourt alors les provinces pendant une douzaine d'années avec sa troupe. De retour à Paris en 1658, il obtient la protection de Louis XIV, et sa troupe devient en 1665 la Troupe du Roi. Il est à la fois auteur, comédien et chef de troupe.",
                "Ses principales pièces sont L'École des femmes (1662), Tartuffe (première version en 1664, version définitive autorisée en 1669), Dom Juan (1665), Le Misanthrope (1666), L'Avare (1668), Le Bourgeois gentilhomme (1670), Les Fourberies de Scapin (1671) et Le Malade imaginaire (1673). Le 17 février 1673, pris d'un malaise pendant la quatrième représentation du Malade imaginaire, où il joue le rôle d'Argan, il meurt quelques heures plus tard. En 1680, sa troupe fusionne avec celle de l'Hôtel de Bourgogne pour former la Comédie-Française.",
              ],
              box: { label: "Repère", text: "Molière (1622-1673) : L'École des femmes (1662), Tartuffe (1664-1669), Dom Juan (1665), Le Misanthrope (1666), L'Avare (1668), Le Bourgeois gentilhomme (1670), Les Fourberies de Scapin (1671), Le Malade imaginaire (1673)." },
            },
            {
              heading: "Les formes de la comédie",
              paragraphs: [
                "Molière pratique toutes les formes comiques de son temps. La farce, héritée du Moyen Âge, repose sur un comique simple et physique : coups de bâton, chutes, ruses ; dans Les Fourberies de Scapin, le valet enferme son maître Géronte dans un sac et le roue de coups. La comédie d'intrigue, influencée par la commedia dell'arte italienne, multiplie les rebondissements et les ruses de valets habiles. La comédie de mœurs fait la satire d'un milieu : Les Précieuses ridicules (1659) se moquent des jeunes femmes qui imitent un langage affecté.",
                "La comédie de caractère est centrée sur un personnage dominé par un défaut : l'avarice d'Harpagon dans L'Avare, l'hypocrisie religieuse de Tartuffe, la misanthropie d'Alceste. Les plus ambitieuses, en cinq actes et en vers, comme Tartuffe ou Le Misanthrope, sont appelées « grandes comédies ». Enfin, Molière invente la comédie-ballet, qu'il développe avec le musicien Lully et qui mêle théâtre, musique et danse : Le Bourgeois gentilhomme (1670) en est l'exemple le plus célèbre.",
              ],
              box: { label: "Définition", text: "Farce : comique physique et grossier. Comédie d'intrigue : rebondissements et ruses. Comédie de mœurs : satire d'un milieu social. Comédie de caractère : un personnage dominé par un vice. Comédie-ballet : théâtre, musique et danse." },
            },
            {
              heading: "Les ressorts du comique",
              paragraphs: [
                "Le comique de mots naît du langage : jeux de mots, quiproquos verbaux, jargon (le latin de cuisine des médecins), répétitions. Dans Tartuffe, Orgon, qui n'écoute que lui, répond par la même exclamation, « Le pauvre homme ! », chaque fois qu'on lui parle de Tartuffe, alors que c'est sa femme qui est malade ; dans L'Avare, Harpagon répète « Sans dot ! » à chaque objection. Le comique de gestes repose sur les mouvements : coups, chutes, poursuites, mimiques.",
                "Le comique de situation naît des circonstances : un personnage caché qui entend ce qu'il ne devrait pas (Orgon sous la table au quatrième acte de Tartuffe), un déguisement, un quiproquo. Dans L'Avare, Harpagon accuse Valère d'avoir volé sa cassette, tandis que Valère croit qu'on lui reproche d'aimer Élise : chacun parle d'un trésor différent. Le comique de caractère vient de l'obsession d'un personnage qui le rend aveugle et prévisible ; le comique de mœurs, de la satire des usages d'un groupe social (médecins, précieuses, faux dévots, bourgeois qui singent les nobles).",
              ],
              box: { label: "À retenir", text: "Comique de mots, de gestes, de situation (quiproquo, personnage caché, déguisement), de caractère (obsession d'un personnage), de mœurs (satire d'un milieu), de répétition. Les ressorts se combinent souvent dans une même scène." },
            },
            {
              heading: "Plaire et corriger",
              paragraphs: [
                "Pour Molière, la comédie ne se contente pas de faire rire. Dans son premier placet au roi sur Tartuffe (1664), il affirme que le devoir de la comédie est de corriger les hommes en les divertissant. Une formule latine, castigat ridendo mores (elle corrige les mœurs par le rire), attribuée au poète Santeul, résume cette ambition. En rendant ridicules l'avarice, l'hypocrisie ou la vanité, la comédie invite le spectateur à s'en garder.",
                "Cette satire dérange : Tartuffe, qui dénonce les faux dévots, est interdit en 1664 sous la pression du parti dévot et n'est autorisé qu'en 1669. Certaines comédies frôlent aussi le drame : Alceste, dans Le Misanthrope, finit seul ; Harpagon reste attaché à sa cassette. Les dénouements heureux, souvent artificiels (une reconnaissance inattendue, l'intervention du roi dans Tartuffe), rappellent que l'ordre est rétabli de l'extérieur, et non par la sagesse des personnages ridicules.",
              ],
            },
          ],
          keyPoints: [
            "Molière (1622-1673) : auteur, comédien et chef de troupe, protégé par Louis XIV.",
            "Formes : farce, comédie d'intrigue, de mœurs, de caractère, comédie-ballet (avec Lully).",
            "Comique de mots (« Sans dot ! »), de gestes, de situation (quiproquo), de caractère, de mœurs, de répétition.",
            "Visée : corriger les hommes en les divertissant (placet sur Tartuffe, 1664).",
            "Tartuffe est interdit en 1664 et autorisé en 1669 : la satire dérange.",
          ],
          example: {
            statement: "Dans L'Avare (acte V), Harpagon reproche à Valère le vol de sa cassette ; Valère, qui aime en secret Élise, la fille d'Harpagon, croit qu'on lui reproche cet amour, et les deux hommes parlent longtemps sans se comprendre. Identifiez le procédé comique et expliquez son fonctionnement.",
            solution: [
              "Le procédé est un quiproquo : deux personnages croient parler de la même chose alors qu'ils parlent de deux réalités différentes.",
              "Harpagon pense à sa cassette, Valère à Élise : les mots qu'ils emploient (le « trésor », le fait de l'avoir « pris ») conviennent aux deux sens.",
              "Le spectateur, qui connaît les deux situations, comprend les deux sens à la fois : c'est un effet de double énonciation.",
              "Le comique est renforcé par le caractère d'Harpagon : son obsession de l'argent l'empêche d'imaginer qu'on puisse parler d'autre chose.",
              "Réponse : un comique de situation (quiproquo), soutenu par le comique de mots et le comique de caractère ; il révèle que, pour Harpagon, l'argent compte plus que sa propre fille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le ressort comique principal de chaque situation : a) un valet reçoit des coups de bâton et tombe ; b) un personnage répète la même formule à chaque réplique ; c) deux personnages se comprennent de travers parce qu'ils parlent de choses différentes ; d) un bourgeois prend des leçons ridicules pour imiter les nobles ; e) un médecin parle un latin incompréhensible pour impressionner ses patients.",
              hint: "Demandez-vous si le rire vient d'un mouvement, d'un mot, d'une situation, d'un défaut de personnage ou de la satire d'un milieu.",
              solution: [
                "a) Comique de gestes.",
                "b) Comique de répétition (forme du comique de mots).",
                "c) Comique de situation : un quiproquo.",
                "d) Comique de caractère et de mœurs : la vanité d'un personnage et la satire des bourgeois qui singent la noblesse (Le Bourgeois gentilhomme).",
                "e) Comique de mots (jargon) et de mœurs (satire des médecins).",
              ],
            },
            {
              level: 2,
              statement: "Voici une courte scène écrite pour l'exercice, à la manière de Molière. « GÉRONTE. Ma fille épousera Monsieur Lebrun. / LISETTE. Il a soixante ans ! / GÉRONTE. Il est riche. / LISETTE. Il est avare ! / GÉRONTE. Il est riche. / LISETTE. Il est méchant ! / GÉRONTE. Il est riche, te dis-je ! » Relevez trois procédés comiques et dites ce que la scène dénonce.",
              hint: "Observez ce qui revient dans les répliques de Géronte, la forme de l'échange et le rapport entre maître et servante.",
              solution: [
                "Premier procédé : le comique de répétition. Géronte répond trois fois « Il est riche », quelle que soit l'objection, comme Harpagon avec « Sans dot ! ».",
                "Deuxième procédé : la stichomythie et la gradation des objections de Lisette (âge, avarice, méchanceté), qui rendent la réponse identique de plus en plus absurde.",
                "Troisième procédé : le comique de caractère. L'obsession de l'argent rend Géronte sourd à tout autre argument, donc mécanique et prévisible.",
                "Le personnage de la servante, plus lucide que son maître, renverse la hiérarchie sociale, procédé fréquent chez Molière (Dorine dans Tartuffe, Toinette dans Le Malade imaginaire).",
                "Réponse : la scène dénonce les mariages arrangés par intérêt, où l'avis et le bonheur de la fille ne comptent pas ; elle corrige en faisant rire, selon la visée de la comédie.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (dissertation, initiation). Sujet : « La comédie de Molière n'a-t-elle pour but que de faire rire ? » Proposez un plan détaillé en trois parties, avec deux arguments et des exemples précis par partie.",
              hint: "Montrez d'abord la richesse du rire, puis sa fonction critique, enfin la part d'inquiétude ou de gravité de certaines comédies.",
              solution: [
                "Problématique : le rire est-il une fin en soi chez Molière, ou un moyen au service d'une réflexion sur les hommes et la société ?",
                "Partie 1, une comédie qui veut d'abord faire rire. Argument 1 : Molière, chef de troupe, doit plaire au public et au roi ; il mobilise tous les ressorts du comique, de la farce (le sac des Fourberies de Scapin) au quiproquo (L'Avare, acte V). Argument 2 : la comédie-ballet (Le Bourgeois gentilhomme) offre un divertissement total, avec la musique de Lully et la danse.",
                "Partie 2, un rire qui corrige. Argument 1 : Molière affirme, dans son premier placet sur Tartuffe, que la comédie doit corriger les hommes en les divertissant ; le ridicule frappe les vices (avarice d'Harpagon, hypocrisie de Tartuffe). Argument 2 : la comédie de mœurs critique des groupes sociaux (médecins, précieuses, faux dévots) ; l'interdiction de Tartuffe de 1664 à 1669 prouve que cette satire inquiétait.",
                "Partie 3, un rire parfois grinçant. Argument 1 : certains personnages ne sont pas guéris (Harpagon garde sa cassette, Alceste s'isole dans Le Misanthrope), ce qui laisse une impression amère. Argument 2 : les dénouements artificiels, comme l'intervention du roi dans Tartuffe, montrent que le désordre provoqué par les vices n'est réparé que de l'extérieur.",
                "Conclusion : chez Molière, le rire n'est jamais gratuit ; il divertit, mais il éclaire et inquiète aussi, ce qui explique que ses pièces restent jouées aujourd'hui.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque exemple au ressort comique qu'il illustre.",
            pairs: [
              { left: "Géronte roué de coups dans un sac", right: "Comique de gestes" },
              { left: "« Sans dot ! » répété par Harpagon", right: "Comique de répétition" },
              { left: "Harpagon et Valère qui parlent de deux trésors différents", right: "Comique de situation (quiproquo)" },
              { left: "L'avarice obsédante d'Harpagon", right: "Comique de caractère" },
              { left: "Le jargon latin des médecins", right: "Comique de mots" },
              { left: "La satire des faux dévots", right: "Comique de mœurs" },
            ],
          },
          quiz: [
            {
              q: "Quelle pièce de Molière est une comédie-ballet écrite avec Lully ?",
              options: ["Les Fourberies de Scapin", "Le Bourgeois gentilhomme", "Tartuffe", "L'École des femmes"],
              answer: 1,
              why: "Le Bourgeois gentilhomme (1670) mêle théâtre, musique de Lully et danse.",
            },
            {
              q: "Un quiproquo relève du comique :",
              options: ["de situation", "de gestes", "de caractère"],
              answer: 0,
              why: "Le quiproquo naît d'une situation où les personnages se méprennent sur ce dont ils parlent.",
            },
            {
              q: "Pourquoi Tartuffe est-il interdit en 1664 ?",
              options: ["Parce que Molière vient de mourir", "Parce que la pièce est jugée trop longue", "Parce que Lully refuse d'en écrire la musique", "Parce qu'elle dénonce les faux dévots"],
              answer: 3,
              why: "La satire de l'hypocrisie religieuse provoque l'hostilité du parti dévot ; la pièce n'est autorisée qu'en 1669.",
            },
            {
              q: "Dans quelle comédie Harpagon est-il le personnage principal ?",
              options: ["L'Avare", "Dom Juan", "Le Malade imaginaire", "Les Fourberies de Scapin"],
              answer: 0,
              why: "Harpagon, obsédé par l'argent, est le héros de L'Avare (1668), comédie de caractère.",
            },
            {
              q: "Quelle visée Molière attribue-t-il à la comédie dans son premier placet sur Tartuffe ?",
              options: ["Flatter les puissants", "Raconter l'histoire de France", "Corriger les hommes en les divertissant", "Imiter fidèlement les tragédies antiques"],
              answer: 2,
              why: "Molière affirme que le devoir de la comédie est de corriger les hommes en les divertissant : plaire et instruire.",
            },
          ],
          trap: "Se contenter de dire qu'une scène « est drôle » sans nommer le ressort comique précis (mots, gestes, situation, caractère, mœurs) ni expliquer ce que le rire dénonce.",
          method: "Pour analyser une scène comique, faites deux colonnes : dans la première, le procédé (quiproquo, répétition, coups…) ; dans la seconde, ce qu'il révèle du personnage ou de la société. Un commentaire réussi relie toujours le rire à son sens.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tragedie-racine',
          title: "La tragédie classique : règles et passions chez Racine",
          minutes: 35,
          objectives: [
            "Définir la tragédie et ses origines antiques : terreur, pitié, catharsis.",
            "Expliquer les règles classiques : trois unités, vraisemblance, bienséance.",
            "Analyser la représentation des passions chez Racine, en particulier dans Phèdre.",
            "Comparer le héros cornélien et le héros racinien.",
          ],
          course: [
            {
              heading: "La tragédie, un genre hérité de l'Antiquité",
              paragraphs: [
                "La tragédie naît en Grèce au Ve siècle avant J.-C., avec Eschyle, Sophocle et Euripide. Dans sa Poétique, Aristote la définit comme l'imitation d'une action noble, qui suscite chez le spectateur la terreur et la pitié et produit ainsi une catharsis, c'est-à-dire une purification ou une purgation des passions. Le spectateur, en voyant des personnages souffrir de leurs passions, s'en trouve libéré.",
                "La tragédie classique française reprend ces principes. Ses personnages sont de haut rang (rois, reines, princes, héros), ses sujets viennent de la mythologie ou de l'histoire antique, et son dénouement est malheureux, souvent mortel. Elle est écrite en alexandrins et compte cinq actes. Le héros tragique est pris dans une situation sans issue : une fatalité, qu'elle vienne des dieux, de l'histoire ou de ses propres passions, le conduit à sa perte.",
              ],
              box: { label: "Définition", text: "Tragédie : pièce en cinq actes et en vers, aux personnages illustres, qui représente une action conduisant à un dénouement malheureux. Catharsis (Aristote) : purgation des passions du spectateur par la terreur et la pitié." },
            },
            {
              heading: "Les règles classiques",
              paragraphs: [
                "Au XVIIe siècle, des théoriciens fixent des règles inspirées d'Aristote. La règle des trois unités impose une seule action principale (unité d'action), qui se déroule en vingt-quatre heures au plus (unité de temps) et en un seul lieu (unité de lieu). Boileau, dans son Art poétique (1674), la résume en deux alexandrins célèbres qui réclament « un seul fait accompli », en un lieu et en un jour. Ces règles visent la concentration de l'action et l'illusion du spectateur.",
                "Deux autres exigences s'y ajoutent. La vraisemblance demande que l'action paraisse crédible au public, même si elle n'est pas historiquement vraie. La bienséance interdit de choquer : on ne montre sur scène ni la violence physique ni la mort, qui sont racontées par un personnage dans un récit. Ces règles se sont imposées à la suite de la querelle du Cid (1637) : on reprochait à Corneille d'avoir accumulé trop d'événements en un jour et de laisser entrevoir le mariage de Chimène avec le meurtrier de son père.",
              ],
              box: { label: "Règle", text: "Unité d'action (une intrigue principale), de temps (vingt-quatre heures), de lieu (un seul lieu). Vraisemblance : l'action doit paraître crédible. Bienséance : ne rien montrer qui choque (violence et mort sont racontées)." },
            },
            {
              heading: "Racine, peintre des passions",
              paragraphs: [
                "Jean Racine (1639-1699) est élevé à Port-Royal, foyer du jansénisme, une doctrine sévère selon laquelle l'homme, corrompu, ne peut se sauver par ses propres forces. Ses personnages semblent marqués par cette vision : ils sont les prisonniers de passions qu'ils ne maîtrisent pas. Ses principales tragédies sont Andromaque (1667), Britannicus (1669), Bérénice (1670), Iphigénie (1674) et Phèdre (1677). Il compose plus tard deux tragédies bibliques, Esther (1689) et Athalie (1691).",
                "Chez Racine, l'amour est une passion destructrice qui mène à la jalousie, au crime et à la mort. Andromaque en donne un exemple célèbre, celui d'une chaîne amoureuse : Oreste aime Hermione, qui aime Pyrrhus, qui aime Andromaque, restée fidèle au souvenir de son époux Hector. Personne n'est aimé de celui qu'il aime, et la passion conduit au meurtre et à la folie. Dans la préface de Bérénice, Racine affirme que tout l'art consiste à faire quelque chose de rien : une action simple, concentrée sur la crise intérieure.",
                "On oppose souvent Racine à Corneille (1606-1684). Le héros cornélien affronte un dilemme entre son amour et son devoir (Rodrigue, dans Le Cid, doit venger son père en tuant le père de Chimène) et le surmonte par la volonté : il suscite l'admiration. Le héros racinien est vaincu par sa passion : il suscite la terreur et la pitié. La Bruyère, dans Les Caractères, résume cette différence : Corneille peint les hommes tels qu'ils devraient être, Racine tels qu'ils sont.",
              ],
              box: { label: "À retenir", text: "Héros cornélien : volonté, honneur, dilemme surmonté, admiration. Héros racinien : passion fatale, faiblesse, terreur et pitié. Racine : Andromaque (1667), Britannicus (1669), Bérénice (1670), Phèdre (1677)." },
            },
            {
              heading: "Phèdre (1677), la tragédie de la passion coupable",
              paragraphs: [
                "Phèdre, épouse du roi Thésée, aime en secret Hippolyte, fils que Thésée a eu de l'Amazone Antiope. Elle avoue d'abord cette passion à sa nourrice Œnone, puis, croyant Thésée mort, à Hippolyte lui-même, qui la repousse. Thésée revient : pour sauver sa maîtresse, Œnone accuse Hippolyte d'avoir voulu séduire Phèdre. Thésée maudit son fils et appelle sur lui la vengeance de Neptune ; Hippolyte meurt, tué par un monstre surgi de la mer, et sa mort est racontée par son gouverneur Théramène dans un récit célèbre. Phèdre, qui s'est empoisonnée, avoue la vérité avant de mourir.",
                "Dans sa préface, Racine présente Phèdre comme un personnage qui n'est ni tout à fait coupable ni tout à fait innocent : elle lutte contre une passion qu'elle juge criminelle, imposée selon elle par la colère des dieux. Le langage traduit cette violence : dans la scène d'aveu à Œnone, elle raconte sa première rencontre avec Hippolyte en une suite de verbes brefs (« Je le vis, je rougis, je pâlis »), qui fait de l'amour un trouble physique et soudain. La parole elle-même est tragique : avouer, c'est déjà se perdre.",
              ],
            },
          ],
          keyPoints: [
            "Tragédie : cinq actes en alexandrins, personnages illustres, dénouement malheureux ; terreur, pitié, catharsis (Aristote).",
            "Trois unités : action, temps (vingt-quatre heures), lieu ; vraisemblance et bienséance.",
            "Querelle du Cid (1637) ; Boileau, Art poétique (1674).",
            "Racine (1639-1699) : la passion destructrice ; Andromaque et sa chaîne amoureuse.",
            "Phèdre (1677) : une héroïne ni tout à fait coupable ni tout à fait innocente.",
            "Corneille peint les hommes tels qu'ils devraient être, Racine tels qu'ils sont (La Bruyère).",
          ],
          example: {
            statement: "Pourquoi la mort d'Hippolyte n'est-elle pas montrée sur scène dans Phèdre, et comment le spectateur l'apprend-il ? Expliquez l'effet produit.",
            solution: [
              "La règle de bienséance interdit de montrer la violence physique et la mort sur la scène classique.",
              "La mort d'Hippolyte est donc racontée : au cinquième acte, son gouverneur Théramène fait à Thésée le récit de l'attaque du monstre surgi de la mer.",
              "Ce récit respecte aussi l'unité de lieu, puisque l'événement s'est produit hors du palais où se déroule l'action.",
              "Effet : le récit fait travailler l'imagination du spectateur et donne à la mort une grandeur épique ; il permet surtout d'observer la douleur de Thésée, qui comprend trop tard qu'il a condamné un innocent.",
              "Réponse : la bienséance impose le récit ; loin d'affaiblir la scène, il en concentre l'émotion tragique (terreur et pitié) sur le père.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites quelle règle classique chacune de ces situations imaginaires ne respecte pas : a) une pièce dont l'action dure trois ans ; b) un héros tué d'un coup d'épée sous les yeux du public ; c) une pièce qui suit en parallèle deux intrigues sans lien ; d) une tragédie qui se passe successivement à Rome, à Athènes et en Égypte ; e) un roi qui change d'avis cinq fois en une scène, sans aucune raison.",
              hint: "Les trois unités (action, temps, lieu), la bienséance et la vraisemblance : associez chaque situation à l'une de ces règles.",
              solution: [
                "a) L'unité de temps (l'action doit tenir en vingt-quatre heures).",
                "b) La bienséance (la mort ne doit pas être montrée sur scène).",
                "c) L'unité d'action (une seule intrigue principale).",
                "d) L'unité de lieu (un seul lieu).",
                "e) La vraisemblance (le comportement doit paraître crédible).",
              ],
            },
            {
              level: 2,
              statement: "Dans Phèdre, l'héroïne résume sa première rencontre avec Hippolyte par une suite de verbes : « Je le vis, je rougis, je pâlis ». Analysez la construction de ce fragment (nature des propositions, temps verbal, rythme) et son effet.",
              hint: "Réutilisez le cours de grammaire sur la juxtaposition : combien de propositions, reliées comment ? Puis observez ce que désignent les verbes.",
              solution: [
                "Construction : trois propositions indépendantes juxtaposées, séparées par des virgules, sans mot de liaison (asyndète).",
                "Temps : le passé simple, qui présente chaque action comme ponctuelle et achevée ; leur succession rapide donne l'impression d'un événement instantané.",
                "Rythme : un rythme ternaire, avec la répétition du pronom « je » en tête de chaque proposition (anaphore), qui crée une accélération.",
                "Sens : on passe de la vision (« je le vis ») à deux réactions physiques opposées (rougir, pâlir) : l'amour s'empare du corps avant même que Phèdre puisse le penser.",
                "Effet : la passion apparaît comme un choc soudain, subi, presque une maladie ; la phrase fait éprouver au spectateur la fatalité de cet amour, ce qui suscite la pitié.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (dissertation, initiation). Sujet : « Phèdre est-elle coupable ou victime ? » Rédigez l'introduction complète (amorce, présentation du sujet, problématique, annonce du plan).",
              hint: "Partez de la préface de Racine, qui présente Phèdre comme ni tout à fait coupable ni tout à fait innocente. Le plan peut opposer la culpabilité et la fatalité, puis montrer que leur tension fait la tragédie.",
              solution: [
                "Amorce : rappeler que Racine, dans sa préface, présente lui-même son héroïne comme ni tout à fait coupable ni tout à fait innocente.",
                "Présentation : Phèdre (1677), tragédie de Racine, met en scène l'épouse de Thésée, dévorée par une passion pour Hippolyte, son beau-fils, et dont l'aveu conduit à la mort du jeune homme.",
                "Problématique : faut-il condamner Phèdre pour ses actes, ou la plaindre comme la proie d'une passion qu'elle n'a pas choisie ?",
                "Plan : I. Phèdre est coupable (elle avoue sa passion à Hippolyte, laisse Œnone l'accuser et se tait trop longtemps) ; II. elle est aussi victime (de la colère des dieux, d'une passion qu'elle combat, de sa nourrice) ; III. c'est cette ambiguïté qui fait d'elle une héroïne tragique, capable de susciter terreur et pitié.",
                "Introduction rédigée : « Dans la préface de Phèdre, Racine présente son héroïne comme un personnage qui n'est ni tout à fait coupable ni tout à fait innocent. La tragédie, créée en 1677, montre en effet l'épouse de Thésée dévorée par une passion pour son beau-fils Hippolyte, passion dont l'aveu entraîne la mort du jeune homme. Faut-il alors condamner Phèdre pour ses actes, ou la plaindre comme la proie d'un amour qu'elle n'a pas choisi ? Nous verrons d'abord que Phèdre porte une part réelle de responsabilité, puis qu'elle est aussi la victime des dieux et de son entourage, avant de montrer que cette ambiguïté fait d'elle une héroïne profondément tragique. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces repères du théâtre classique dans l'ordre chronologique.",
            items: [
              "1637 : Le Cid de Corneille et la querelle qui s'ensuit",
              "1664 : première version de Tartuffe, aussitôt interdite",
              "1667 : Andromaque de Racine",
              "1670 : Bérénice de Racine",
              "1674 : L'Art poétique de Boileau",
              "1677 : Phèdre de Racine",
            ],
          },
          quiz: [
            {
              q: "Selon Aristote, la tragédie suscite chez le spectateur :",
              options: ["le rire et la moquerie", "l'admiration et la joie", "la terreur et la pitié", "l'ennui et la colère"],
              answer: 2,
              why: "La terreur et la pitié permettent la catharsis, purgation des passions du spectateur.",
            },
            {
              q: "Que prescrit la règle de bienséance ?",
              options: ["De ne pas montrer sur scène la violence ni la mort", "D'écrire toute la pièce en alexandrins à rimes plates", "De respecter un seul lieu", "De terminer par un mariage"],
              answer: 0,
              why: "La bienséance interdit de choquer le public : la violence et la mort sont racontées dans un récit.",
            },
            {
              q: "Dans Andromaque, qui Hermione aime-t-elle ?",
              options: ["Oreste", "Hector", "Pyrrhus", "Hippolyte"],
              answer: 2,
              why: "Oreste aime Hermione, qui aime Pyrrhus, qui aime Andromaque : c'est la chaîne amoureuse.",
            },
            {
              q: "Le héros cornélien se distingue du héros racinien par :",
              options: ["sa passion fatale qui le détruit", "sa volonté qui surmonte le dilemme", "son origine populaire, loin de la cour", "son goût pour la farce"],
              answer: 1,
              why: "Le héros cornélien triomphe par la volonté et l'honneur, alors que le héros racinien est vaincu par sa passion.",
            },
            {
              q: "Comment le spectateur apprend-il la mort d'Hippolyte dans Phèdre ?",
              options: ["Par une lettre de Neptune", "Par un combat montré sur scène", "Par un songe de Thésée", "Par le récit de Théramène"],
              answer: 3,
              why: "Conformément à la bienséance, la mort d'Hippolyte est racontée par son gouverneur Théramène au cinquième acte.",
            },
          ],
          trap: "Réciter les règles classiques sans les relier au texte : l'important est de montrer ce qu'elles produisent (concentration de la crise, force du récit, tension croissante), pas seulement de les nommer.",
          method: "Pour réviser Racine, fabriquez une fiche par tragédie avec trois lignes : le schéma des passions (qui aime qui), l'obstacle, le dénouement. Ces fiches suffisent à nourrir une dissertation d'exemples précis.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE THÉÂTRE DU XVIIIe AU XXIe SIÈCLE : HÉRITAGES ET RUPTURES            */
    /* ==================================================================== */
    {
      id: 'theatre-moderne',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'theatre-xviiie-xixe',
          title: "De Marivaux et Beaumarchais au drame romantique",
          minutes: 35,
          objectives: [
            "Situer les grandes évolutions du théâtre du XVIIIe et du XIXe siècle : comédie de Marivaux, comédie de Beaumarchais, drame bourgeois, drame romantique.",
            "Expliquer la notion de marivaudage et le rôle du jeu des masques et des conditions sociales.",
            "Analyser la critique sociale dans Le Mariage de Figaro.",
            "Identifier les principes du drame romantique énoncés dans la Préface de Cromwell (1827).",
          ],
          course: [
            {
              heading: "Marivaux : l'amour à l'épreuve des masques",
              paragraphs: [
                "Pierre de Marivaux (1688-1763) écrit la plupart de ses comédies pour les Comédiens-Italiens, revenus à Paris en 1716, dont le jeu vif et léger hérite de la commedia dell'arte. Son sujet de prédilection est la naissance de l'amour : des personnages qui s'aiment sans oser se l'avouer, ou sans le savoir encore, et qui se découvrent à travers des épreuves. On appelle marivaudage ce langage subtil et raffiné de l'analyse amoureuse, fait de nuances, de reprises de mots et de détours.",
                "Dans Le Jeu de l'amour et du hasard (1730), Silvia, promise à Dorante qu'elle ne connaît pas, échange son rôle avec sa servante Lisette pour l'observer ; or Dorante a eu la même idée et se présente déguisé en valet, tandis que son valet Arlequin joue le maître. Monsieur Orgon, le père de Silvia, et son fils Mario connaissent les deux déguisements et s'en amusent : le spectateur aussi. Silvia s'éprend du faux valet, Dorante de la fausse servante ; Dorante finit par révéler son identité, et Silvia prolonge le jeu jusqu'à ce qu'il accepte de l'épouser en la croyant servante.",
                "Marivaux interroge ainsi les hiérarchies sociales : dans L'Île des esclaves (1725), des maîtres athéniens naufragés doivent échanger leur condition avec leurs esclaves pour apprendre ce qu'ils leur font subir. Mais l'ordre est finalement rétabli : à la fin du Jeu, les maîtres épousent les maîtres et les valets les valets. La comédie fait réfléchir sur les conditions sans les renverser.",
              ],
              box: { label: "Définition", text: "Marivaudage : langage raffiné et subtil de l'analyse amoureuse, propre aux comédies de Marivaux, où les personnages découvrent leurs sentiments à travers jeux de mots, détours et épreuves." },
            },
            {
              heading: "Beaumarchais : Figaro et la critique des privilèges",
              paragraphs: [
                "Pierre-Augustin Caron de Beaumarchais (1732-1799) crée le personnage de Figaro, valet ingénieux, dans Le Barbier de Séville (1775), puis dans Le Mariage de Figaro, écrit vers 1778 mais longtemps interdit par Louis XVI et représenté seulement en 1784, enfin dans La Mère coupable (1792). Dans Le Mariage de Figaro, le comte Almaviva veut séduire Suzanne, la fiancée de Figaro : le valet et sa promise, aidés de la comtesse, déjouent les manœuvres du maître au cours d'une « folle journée ».",
                "Au cinquième acte, Figaro, seul en scène, prononce un très long monologue dans lequel il retrace sa vie difficile et s'en prend à la société d'Ancien Régime : la censure, l'arbitraire, les privilèges de la naissance. Il reproche au comte de s'être seulement donné « la peine de naître ». Une telle critique, applaudie par le public aristocratique lui-même, a souvent été lue comme un signe annonciateur de la Révolution. Beaumarchais défend aussi les droits des auteurs : il fonde en 1777 la première société des auteurs dramatiques.",
              ],
              box: { label: "Repère", text: "Beaumarchais : Le Barbier de Séville (1775), Le Mariage de Figaro (représenté en 1784 après des années d'interdiction), La Mère coupable (1792). Monologue de Figaro (acte V) : critique des privilèges et de la censure." },
            },
            {
              heading: "Diderot et le drame bourgeois",
              paragraphs: [
                "Au milieu du XVIIIe siècle, Diderot propose un genre nouveau, entre la comédie et la tragédie : le drame bourgeois, ou genre sérieux. Il met en scène, en prose, des personnages de la bourgeoisie dans des situations familiales et contemporaines, pour émouvoir et instruire le spectateur. Diderot illustre ce genre avec Le Fils naturel (1757) et Le Père de famille (1758), qu'il accompagne de textes théoriques. Beaumarchais le prolonge dans son Essai sur le genre dramatique sérieux (1767).",
                "Diderot réfléchit aussi au jeu de l'acteur et à l'illusion théâtrale : il conseille de jouer comme si un grand mur séparait la scène de la salle, idée que l'on appellera plus tard le « quatrième mur ». Le drame bourgeois a produit peu de chefs-d'œuvre, mais il ouvre la voie au drame romantique : mélange des tons, refus de réserver la tragédie aux rois, recherche du naturel.",
              ],
            },
            {
              heading: "Le drame romantique : la liberté dans l'art",
              paragraphs: [
                "En 1827, Victor Hugo publie la Préface de Cromwell, véritable manifeste du drame romantique. Il y rejette les unités de temps et de lieu, jugées artificielles, mais garde l'unité d'action. Il réclame le mélange des genres et des tons, le grotesque côtoyant le sublime comme dans la vie, et prend Shakespeare pour modèle. Il demande aussi la couleur locale, c'est-à-dire la peinture exacte d'une époque et d'un lieu, souvent empruntés à l'histoire.",
                "Le 25 février 1830, la première d'Hernani à la Comédie-Française déclenche la « bataille d'Hernani » entre partisans des classiques et jeunes romantiques venus soutenir Hugo, parmi lesquels Théophile Gautier. Dès les premiers vers, un enjambement audacieux (« l'escalier / Dérobé ») choque les défenseurs de l'alexandrin classique. Suivent Ruy Blas (1838), où un valet aime la reine d'Espagne, Chatterton de Vigny (1835) et Lorenzaccio de Musset (1834) : écrit pour être lu, ce drame foisonnant, aux dizaines de personnages et de lieux, n'est créé sur scène qu'en 1896, avec Sarah Bernhardt dans le rôle de Lorenzo.",
              ],
              box: { label: "À retenir", text: "Préface de Cromwell (1827) : refus des unités de temps et de lieu, mélange du sublime et du grotesque, couleur locale, modèle de Shakespeare. Hernani (1830) : la bataille. Lorenzaccio (Musset, 1834), Chatterton (Vigny, 1835), Ruy Blas (Hugo, 1838)." },
            },
          ],
          keyPoints: [
            "Marivaux : naissance de l'amour, marivaudage, jeu des masques (Le Jeu de l'amour et du hasard, 1730 ; L'Île des esclaves, 1725).",
            "Beaumarchais : Figaro, valet qui critique les privilèges ; Le Mariage de Figaro représenté en 1784.",
            "Diderot : le drame bourgeois, en prose, entre comédie et tragédie ; l'idée du « quatrième mur ».",
            "Préface de Cromwell (1827) : liberté, mélange des tons, refus des unités de temps et de lieu.",
            "Hernani (1830) : bataille entre classiques et romantiques ; Lorenzaccio (1834), créé en 1896.",
          ],
          example: {
            statement: "Expliquez en quoi le double déguisement du Jeu de l'amour et du hasard crée une situation comique et fait réfléchir le spectateur.",
            solution: [
              "Situation : Silvia se déguise en servante, Dorante en valet ; chacun croit être le seul à jouer un rôle.",
              "Effet comique : le spectateur, comme Monsieur Orgon et Mario, connaît les deux déguisements ; il assiste avec amusement aux efforts de chacun pour résister à un amour qu'il croit impossible. C'est un effet d'ironie dramatique.",
              "Contraste : Lisette et Arlequin, déguisés en maîtres, imitent maladroitement leurs manières, ce qui produit un comique plus franc.",
              "Réflexion : les sentiments de Silvia et de Dorante naissent malgré l'obstacle social qu'ils croient réel ; la pièce suggère que la valeur d'une personne ne tient pas à sa condition.",
              "Limite : à la fin, chacun retrouve son rang et les mariages respectent la hiérarchie.",
              "Réponse : le double déguisement fait rire par l'ironie dramatique et pose la question des conditions sociales, sans pour autant renverser l'ordre établi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque œuvre à son auteur et à sa date : Le Jeu de l'amour et du hasard ; Le Mariage de Figaro ; Le Fils naturel ; Hernani ; Lorenzaccio. Auteurs : Musset, Hugo, Marivaux, Diderot, Beaumarchais. Dates : 1730, 1757, 1784, 1830, 1834.",
              hint: "Suivez l'ordre chronologique : Marivaux au début du XVIIIe siècle, Diderot au milieu, Beaumarchais à la veille de la Révolution, puis les romantiques.",
              solution: [
                "Le Jeu de l'amour et du hasard : Marivaux, 1730.",
                "Le Fils naturel : Diderot, 1757.",
                "Le Mariage de Figaro : Beaumarchais, représenté en 1784.",
                "Hernani : Hugo, 1830.",
                "Lorenzaccio : Musset, 1834.",
              ],
            },
            {
              level: 2,
              statement: "En vous appuyant sur le cours, montrez en un paragraphe que Le Mariage de Figaro est une comédie qui critique la société d'Ancien Régime. Donnez au moins deux éléments précis.",
              hint: "Pensez à l'intrigue (que veut le comte ?), au monologue de Figaro et à l'histoire de la pièce (sa longue interdiction).",
              solution: [
                "Premier élément : l'intrigue elle-même. Le comte Almaviva abuse de son pouvoir de maître pour tenter de séduire Suzanne, la fiancée de son valet ; c'est le valet, aidé des femmes, qui triomphe du grand seigneur.",
                "Deuxième élément : le monologue de Figaro au cinquième acte. Seul en scène, il dénonce la censure, l'arbitraire et les privilèges de la naissance, reprochant au comte de s'être seulement donné « la peine de naître ».",
                "Troisième élément : l'histoire de la pièce. Écrite vers 1778, elle est longtemps interdite par Louis XVI et n'est représentée qu'en 1784, signe qu'elle inquiétait le pouvoir.",
                "Paragraphe rédigé : « Sous les dehors d'une folle journée, Le Mariage de Figaro met en cause l'ordre social de l'Ancien Régime. L'intrigue montre un grand seigneur, le comte Almaviva, qui use de son pouvoir pour tenter de séduire la fiancée de son valet, et qui finit déjoué par ceux qu'il croyait dominer. Au cinquième acte, le long monologue de Figaro dénonce ouvertement la censure et les privilèges de la naissance. La longue interdiction de la pièce par Louis XVI, jusqu'en 1784, prouve combien cette critique paraissait dangereuse. »",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (question d'interprétation). En quoi le drame romantique s'oppose-t-il à la tragédie classique ? Rédigez un développement organisé en trois paragraphes, en vous appuyant sur la Préface de Cromwell et sur des œuvres précises (vous pouvez réutiliser la leçon sur la tragédie classique).",
              hint: "Comparez point par point : les règles (unités), les tons (mélange ou séparation), les personnages et les sujets.",
              solution: [
                "Paragraphe 1, les règles : « La tragédie classique obéit à la règle des trois unités, que Boileau résume dans son Art poétique (1674). Hugo, dans la Préface de Cromwell (1827), rejette les unités de temps et de lieu, qu'il juge artificielles, et ne conserve que l'unité d'action. Lorenzaccio de Musset (1834) multiplie ainsi les lieux de Florence et s'étend sur plusieurs jours. »",
                "Paragraphe 2, les tons : « La tragédie sépare les genres et maintient un ton noble, conforme à la bienséance. Le drame romantique, au contraire, mêle le sublime et le grotesque, comme dans la vie et chez Shakespeare : dans Ruy Blas (1838), un valet aime la reine et devient ministre. La versification elle-même se libère, comme le montre l'enjambement provocateur des premiers vers d'Hernani. »",
                "Paragraphe 3, les sujets et les personnages : « Racine puise ses sujets dans la mythologie et l'Antiquité, et ses héros sont des princes. Les romantiques préfèrent l'histoire moderne, peinte avec une couleur locale précise (l'Espagne de Ruy Blas, la Florence de la Renaissance), et des héros souvent marginaux ou déchirés, comme le bandit Hernani ou Lorenzo. Le drame romantique veut ainsi représenter la vie dans toute sa complexité. »",
                "Bilan : le drame romantique s'oppose à la tragédie classique par la liberté des formes, le mélange des tons et le choix de sujets historiques modernes, tout en gardant l'ambition d'émouvoir profondément le spectateur.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque auteur à l'œuvre qui lui correspond.",
            pairs: [
              { left: "Marivaux", right: "Le Jeu de l'amour et du hasard (1730)" },
              { left: "Diderot", right: "Le Fils naturel, drame bourgeois (1757)" },
              { left: "Beaumarchais", right: "Le Mariage de Figaro (1784)" },
              { left: "Hugo", right: "Hernani (1830)" },
              { left: "Musset", right: "Lorenzaccio (1834)" },
              { left: "Vigny", right: "Chatterton (1835)" },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on le marivaudage ?",
              options: ["Une farce bruyante à coups de bâton et de chutes", "Un langage subtil de l'analyse amoureuse", "Un drame historique en vers", "Une tragédie à sujet biblique"],
              answer: 1,
              why: "Le marivaudage désigne le langage raffiné des sentiments propre aux comédies de Marivaux.",
            },
            {
              q: "Dans Le Jeu de l'amour et du hasard, qui connaît les deux déguisements dès le début ?",
              options: ["Silvia et Dorante", "Lisette et Arlequin", "Dorante seul, qui l'a imaginé", "Monsieur Orgon et Mario"],
              answer: 3,
              why: "Le père de Silvia et son fils savent que Silvia et Dorante se sont déguisés, comme le spectateur.",
            },
            {
              q: "Quel texte de 1827 est le manifeste du drame romantique ?",
              options: ["La Préface de Cromwell", "L'Art poétique", "Le Discours sur la poésie dramatique", "L'Essai sur le genre dramatique sérieux"],
              answer: 0,
              why: "Dans la Préface de Cromwell, Hugo réclame la liberté dans l'art et le mélange du sublime et du grotesque.",
            },
            {
              q: "Que rejette Hugo dans la Préface de Cromwell ?",
              options: ["L'unité d'action", "Les unités de temps et de lieu", "Le recours aux vers", "L'emploi de personnages historiques"],
              answer: 1,
              why: "Hugo rejette les unités de temps et de lieu mais conserve l'unité d'action ; il continue d'écrire des drames en vers.",
            },
            {
              q: "Pourquoi Le Mariage de Figaro n'est-il représenté qu'en 1784 ?",
              options: ["Beaumarchais ne l'a achevé que cette année-là", "Aucun théâtre ne voulait d'une comédie", "Il a été longtemps interdit par Louis XVI", "Les comédiens refusaient de jouer Figaro"],
              answer: 2,
              why: "Écrite vers 1778, la pièce inquiétait le pouvoir par sa critique des privilèges et fut longtemps interdite.",
            },
          ],
          trap: "Croire que le drame romantique abolit toutes les règles : Hugo garde l'unité d'action et écrit souvent en alexandrins ; il refuse surtout les unités de temps et de lieu et la séparation des tons.",
          method: "Pour mémoriser l'évolution du théâtre, construisez un tableau à quatre colonnes (comédie classique, comédie du XVIIIe siècle, drame bourgeois, drame romantique) et remplissez pour chacune : auteurs, dates, règles, visée. Les comparaisons viendront d'elles-mêmes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'theatre-xxe-xxie',
          title: "Le théâtre aux XXe et XXIe siècles : absurde et nouvelles écritures",
          minutes: 35,
          objectives: [
            "Situer les grandes étapes du théâtre des XXe et XXIe siècles : reprise des mythes, théâtre d'idées, théâtre de l'absurde, écritures contemporaines.",
            "Identifier les caractéristiques du théâtre de l'absurde chez Ionesco et Beckett.",
            "Repérer les procédés des écritures contemporaines : fragmentation, adresse au public, parole qui se cherche.",
            "Analyser le rôle croissant de la mise en scène dans le théâtre moderne.",
          ],
          course: [
            {
              heading: "Ruptures et reprises : de Jarry au théâtre d'idées",
              paragraphs: [
                "Le XXe siècle théâtral commence par un scandale : en 1896, Ubu roi d'Alfred Jarry, dont le premier mot est un juron déformé, met en scène un tyran grotesque, lâche et cruel, dans une farce qui se moque de toutes les conventions. Jarry ouvre la voie à un théâtre qui refuse la vraisemblance et la psychologie traditionnelles.",
                "Dans l'entre-deux-guerres et pendant la Seconde Guerre mondiale, de nombreux auteurs reprennent les mythes antiques pour parler de leur temps : Cocteau dans La Machine infernale (1934), Giraudoux dans La guerre de Troie n'aura pas lieu (1935), Anouilh dans Antigone, créée en 1944 dans Paris occupé. Sartre (Les Mouches, 1943 ; Huis clos, 1944) et Camus (Caligula, 1945 ; Les Justes, 1949) écrivent un théâtre d'idées, qui met en scène les questions de la liberté, de la responsabilité et de l'engagement, mais dans une forme encore assez traditionnelle.",
              ],
              box: { label: "Repère", text: "Ubu roi (Jarry, 1896). Reprise des mythes : La Machine infernale (Cocteau, 1934), La guerre de Troie n'aura pas lieu (Giraudoux, 1935), Antigone (Anouilh, 1944). Théâtre d'idées : Huis clos (Sartre, 1944), Les Justes (Camus, 1949)." },
            },
            {
              heading: "Le théâtre de l'absurde",
              paragraphs: [
                "Dans les années 1950, de nouveaux auteurs bouleversent la forme théâtrale elle-même. Le critique Martin Esslin les regroupera en 1961 sous l'expression « théâtre de l'absurde ». Eugène Ionesco fait jouer La Cantatrice chauve en 1950, une « anti-pièce » inspirée des phrases toutes faites d'une méthode d'anglais : deux couples échangent des banalités qui finissent par se dérégler complètement, et la cantatrice du titre n'apparaît jamais. Suivent Les Chaises (1952), Rhinocéros (créé à Paris en 1960) et Le roi se meurt (1962).",
                "Samuel Beckett, écrivain irlandais qui écrit aussi en français, fait créer En attendant Godot en 1953 : deux vagabonds, Vladimir et Estragon, attendent au bord d'une route un certain Godot qui ne vient jamais ; le second acte répète le premier. Ce théâtre exprime l'absurdité de la condition humaine non par des discours, comme chez Camus, mais par la forme même : intrigue réduite ou absente, structure circulaire, langage qui tourne à vide, personnages sans passé ni psychologie, lieu et temps indéterminés. Le rire y côtoie l'angoisse.",
              ],
              box: { label: "À retenir", text: "Théâtre de l'absurde (expression de Martin Esslin, 1961) : Ionesco (La Cantatrice chauve, 1950), Beckett (En attendant Godot, 1953). Intrigue absente, structure circulaire, langage déréglé, personnages sans psychologie, rire et angoisse mêlés." },
            },
            {
              heading: "Les écritures contemporaines",
              paragraphs: [
                "À partir des années 1980, les auteurs explorent de nouvelles formes. Bernard-Marie Koltès écrit de longues répliques au souffle poétique, comme dans Dans la solitude des champs de coton (1986), affrontement verbal entre un dealer et un client. Jean-Luc Lagarce, dans Juste la fin du monde (écrite en 1990), montre Louis revenant dans sa famille pour annoncer sa mort prochaine, puis repartant sans l'avoir dit : la parole des personnages se reprend, se corrige, hésite, comme si dire était impossible.",
                "Les écritures d'aujourd'hui mêlent souvent le récit et le dialogue, s'adressent directement au public, fragmentent l'action en séquences, suppriment parfois la ponctuation ou désignent les personnages par leur fonction. Yasmina Reza (Art, 1994) observe les relations sociales avec ironie ; Wajdi Mouawad (Incendies, 2003) renoue avec la tragédie à travers des histoires de guerre et de filiation ; Joël Pommerat réécrit des contes (Cendrillon, 2011) ou l'histoire de la Révolution (Ça ira (1) Fin de Louis, 2015) en écrivant au plateau, avec ses comédiens.",
              ],
              box: { label: "Repère", text: "Koltès, Dans la solitude des champs de coton (1986). Lagarce, Juste la fin du monde (écrite en 1990). Reza, Art (1994). Mouawad, Incendies (2003). Pommerat, Cendrillon (2011)." },
            },
            {
              heading: "Le siècle de la mise en scène",
              paragraphs: [
                "Au XXe siècle, le metteur en scène devient un créateur à part entière. Jean Vilar fonde en 1947 le Festival d'Avignon et dirige ensuite le Théâtre national populaire, avec l'ambition d'un théâtre de service public, ouvert à tous. Ariane Mnouchkine crée en 1964 le Théâtre du Soleil, qui pratique la création collective ; Peter Brook s'installe en 1974 au théâtre des Bouffes du Nord. L'influence de l'Allemand Bertolt Brecht et de sa distanciation, qui empêche le spectateur de s'identifier aux personnages pour l'inviter à réfléchir, est considérable.",
                "Aujourd'hui, les mises en scène utilisent la vidéo, le son, la danse, adaptent des romans ou des films, et revisitent sans cesse les classiques : une pièce de Molière ou de Racine peut être transposée dans un décor contemporain. Le théâtre reste ainsi un art vivant, où chaque représentation propose une lecture nouvelle du texte, ce qui prolonge la réflexion engagée dès le premier chapitre sur le texte et sa représentation.",
              ],
            },
          ],
          keyPoints: [
            "Ubu roi (1896) ouvre le siècle par la provocation ; reprise des mythes (Cocteau, Giraudoux, Anouilh).",
            "Théâtre d'idées : Sartre (Huis clos, 1944), Camus (Les Justes, 1949).",
            "Absurde (Martin Esslin, 1961) : Ionesco, La Cantatrice chauve (1950) ; Beckett, En attendant Godot (1953).",
            "Traits de l'absurde : pas d'intrigue, circularité, langage déréglé, personnages sans psychologie.",
            "Écritures contemporaines : Koltès, Lagarce (Juste la fin du monde), Reza, Mouawad, Pommerat.",
            "Mise en scène : Vilar et Avignon (1947), Mnouchkine et le Théâtre du Soleil (1964), Brecht et la distanciation.",
          ],
          example: {
            statement: "Montrez que la situation d'En attendant Godot (Beckett, 1953) illustre le théâtre de l'absurde.",
            solution: [
              "Situation : deux vagabonds, Vladimir et Estragon, attendent sur une route un certain Godot dont on ne sait presque rien.",
              "Absence d'intrigue : rien ne se produit vraiment ; Godot ne vient jamais, et l'attente remplit toute la pièce.",
              "Structure circulaire : le second acte répète le premier, avec de légères variations ; un messager annonce à chaque fois que Godot viendra le lendemain.",
              "Langage et personnages : les dialogues tournent souvent à vide, les personnages ont peu de passé et ne parviennent pas à agir (ils décident de partir mais ne bougent pas).",
              "Sens : l'attente sans objet figure la condition humaine, faite d'espoir et de vide ; le comique des échanges se mêle à l'angoisse.",
              "Réponse : par l'absence d'action, la circularité, le langage vidé et le mélange du rire et de l'angoisse, la pièce exprime l'absurde par sa forme même.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque œuvre à son auteur et à sa date : Ubu roi ; Huis clos ; La Cantatrice chauve ; En attendant Godot ; Juste la fin du monde. Auteurs : Beckett, Lagarce, Jarry, Ionesco, Sartre. Dates : 1896, 1944, 1950, 1953, 1990.",
              hint: "Jarry ferme le XIXe siècle ; Sartre écrit pendant la guerre ; Ionesco et Beckett appartiennent aux années 1950 ; Lagarce à la fin du siècle.",
              solution: [
                "Ubu roi : Jarry, 1896.",
                "Huis clos : Sartre, 1944.",
                "La Cantatrice chauve : Ionesco, 1950.",
                "En attendant Godot : Beckett, 1953 (création).",
                "Juste la fin du monde : Lagarce, écrite en 1990.",
              ],
            },
            {
              level: 2,
              statement: "Voici un court dialogue écrit pour l'exercice, à la manière du théâtre de l'absurde : « A. Quelle heure est-il ? / B. Mardi. / A. Déjà ! Alors nous pouvons attendre. / B. Attendre quoi ? / A. Je ne sais pas. Mais c'est mardi. / Silence. Ils ne bougent pas. » Relevez quatre caractéristiques du théâtre de l'absurde et expliquez leur effet.",
              hint: "Observez les noms des personnages, la logique des réponses, l'objet de l'attente et la didascalie finale.",
              solution: [
                "Personnages sans identité : ils sont désignés par des lettres (A, B), sans nom, sans passé ni psychologie.",
                "Logique déréglée : B répond « Mardi » à une question sur l'heure, et A tire de cette réponse une conclusion absurde (« Alors nous pouvons attendre »). Le langage ne sert plus à communiquer.",
                "Attente sans objet : A ne sait pas ce qu'ils attendent, ce qui rappelle En attendant Godot.",
                "Immobilité et circularité : la didascalie « Silence. Ils ne bougent pas. » montre que rien n'avance ; la reprise de « c'est mardi » fait tourner le dialogue en rond.",
                "Effet : le spectateur rit du décalage entre les questions et les réponses, mais ressent aussi le malaise d'une existence vide, sans but ni repère.",
              ],
            },
            {
              level: 3,
              statement: "Vers le bac (dissertation, initiation). Sujet : « Le théâtre des XXe et XXIe siècles a-t-il rompu avec toutes les règles du théâtre classique ? » Proposez un plan détaillé en deux ou trois parties, avec des arguments et des exemples précis tirés du chapitre.",
              hint: "Montrez d'abord les ruptures (intrigue, langage, personnages, découpage), puis ce qui demeure (mythes, tragique, double énonciation, rôle du dialogue).",
              solution: [
                "Problématique : le théâtre moderne a-t-il tout rejeté de l'héritage classique, ou le transforme-t-il en le prolongeant ?",
                "Partie 1, des ruptures profondes. L'intrigue disparaît ou tourne en rond (En attendant Godot, 1953) ; le langage se dérègle (La Cantatrice chauve, 1950) ; les personnages perdent leur psychologie ; le découpage en actes et en scènes cède la place aux séquences ; la bienséance est bafouée dès Ubu roi (1896).",
                "Partie 2, des héritages assumés. Les auteurs reprennent les mythes antiques (Antigone d'Anouilh, 1944 ; La Machine infernale de Cocteau, 1934) ; le tragique demeure, sous une forme nouvelle, chez Lagarce (Juste la fin du monde) ou Mouawad (Incendies) ; Huis clos respecte même une forme d'unité de lieu, de temps et d'action.",
                "Partie 3, une même essence du théâtre. La double énonciation, le dialogue et la représentation restent au cœur du genre ; les metteurs en scène (Vilar, Mnouchkine) continuent de jouer les classiques et de les relire, ce qui montre la continuité entre les époques.",
                "Conclusion : le théâtre moderne a rompu avec les règles formelles du classicisme, mais il en garde l'essentiel, la parole en action devant un public, et il ne cesse de dialoguer avec ses modèles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le théâtre des XXe et XXIe siècles.",
            statements: [
              { text: "L'expression « théâtre de l'absurde » a été inventée par Ionesco lui-même.", true: false, why: "Elle vient du critique Martin Esslin, qui l'emploie en 1961 pour regrouper plusieurs auteurs." },
              { text: "Dans En attendant Godot, Godot finit par arriver au dernier acte.", true: false, why: "Godot ne vient jamais : l'attente sans fin est le sujet même de la pièce." },
              { text: "Samuel Beckett, écrivain irlandais, a écrit En attendant Godot en français.", true: true, why: "Beckett écrit en anglais et en français ; Godot est d'abord écrit en français." },
              { text: "L'Antigone d'Anouilh a été créée en 1944, dans Paris occupé.", true: true, why: "La pièce reprend le mythe antique en pleine Occupation." },
              { text: "Dans La Cantatrice chauve, une cantatrice chauve est le personnage principal.", true: false, why: "Aucune cantatrice n'apparaît : le titre lui-même participe au jeu sur l'absurde." },
              { text: "Jean Vilar a fondé le Festival d'Avignon en 1947.", true: true, why: "Vilar voulait un théâtre populaire, ouvert à tous, et dirigera ensuite le TNP." },
              { text: "Dans Juste la fin du monde, Louis annonce clairement sa mort prochaine à sa famille.", true: false, why: "Louis repart sans avoir rien dit : la pièce montre l'impossibilité de dire." },
            ],
          },
          quiz: [
            {
              q: "Quelle pièce, créée en 1896, fait scandale dès son premier mot ?",
              options: ["Huis clos", "Ubu roi", "Les Chaises", "Antigone"],
              answer: 1,
              why: "Ubu roi d'Alfred Jarry s'ouvre sur un juron déformé et provoque le scandale lors de sa création en 1896.",
            },
            {
              q: "Qui sont les deux personnages qui attendent Godot ?",
              options: ["Vladimir et Estragon", "Hamm et Clov", "Monsieur et Madame Smith", "Louis et Antoine"],
              answer: 0,
              why: "Vladimir et Estragon attendent Godot au bord d'une route ; Hamm et Clov sont les personnages de Fin de partie, du même Beckett.",
            },
            {
              q: "Lequel de ces traits caractérise le théâtre de l'absurde ?",
              options: ["Une intrigue riche en rebondissements", "Le respect strict des trois unités", "Un langage qui tourne à vide", "Des personnages à la psychologie fouillée"],
              answer: 2,
              why: "Le langage déréglé, qui ne permet plus de communiquer, est l'un des traits majeurs de l'absurde, avec la circularité et l'absence d'intrigue.",
            },
            {
              q: "Quel auteur écrit Juste la fin du monde ?",
              options: ["Bernard-Marie Koltès", "Eugène Ionesco", "Wajdi Mouawad", "Jean-Luc Lagarce"],
              answer: 3,
              why: "Jean-Luc Lagarce écrit Juste la fin du monde en 1990 : Louis revient dans sa famille sans parvenir à annoncer sa mort.",
            },
            {
              q: "La distanciation de Brecht vise à :",
              options: ["faire réfléchir le spectateur", "faire pleurer le public à chaque scène", "supprimer les comédiens", "respecter strictement la bienséance classique"],
              answer: 0,
              why: "En empêchant l'identification aux personnages, la distanciation invite le spectateur à juger ce qu'il voit.",
            },
          ],
          trap: "Confondre la philosophie de l'absurde et le théâtre de l'absurde : Camus et Sartre parlent de l'absurde dans une forme classique, alors qu'Ionesco et Beckett l'expriment par la forme même (langage, structure, personnages).",
          method: "Devant un extrait de théâtre contemporain, demandez-vous ce qui manque par rapport au théâtre classique (intrigue, noms, ponctuation, logique) et ce que ce manque fait éprouver : c'est souvent là que se trouve le sens.",
        },
      ],
    },
  ],
}
