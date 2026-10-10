import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-1re',
  chapters: [
    {
      id: 'bac-ecrit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprendre-epreuve-ecrite',
          title: 'Comprendre l’épreuve écrite : commentaire ou dissertation',
          minutes: 25,
          objectives: [
            "Connaître le cadre de l'épreuve écrite anticipée de français : durée, coefficient, sujets proposés.",
            "Distinguer les attentes du commentaire et celles de la dissertation.",
            "Situer un texte ou un sujet dans l'un des quatre objets d'étude du programme de première.",
            "Choisir son sujet le jour de l'épreuve selon des critères réfléchis.",
          ],
          course: [
            {
              heading: "Le cadre de l'épreuve",
              paragraphs: [
                "L'épreuve écrite de français est une épreuve anticipée : vous la passez en juin de l'année de première, mais sa note compte pour le baccalauréat. Elle dure 4 heures, elle est notée sur 20 et elle est affectée du coefficient 5. L'oral de français, passé quelques jours plus tard, a lui aussi le coefficient 5. Les deux épreuves pèsent donc autant l'une que l'autre.",
                "En voie générale, le sujet vous laisse le choix entre deux exercices : le commentaire d'un texte littéraire, ou une dissertation sur une œuvre au programme et son parcours associé. Vous ne traitez qu'un seul sujet. Aucun document n'est autorisé : ni dictionnaire, ni œuvre, ni notes. Tout ce que vous savez des œuvres doit donc être dans votre mémoire, citations comprises.",
                "L'épreuve évalue trois grandes compétences : lire et interpréter un texte ou une œuvre, construire un raisonnement organisé et argumenté, et vous exprimer dans une langue correcte et précise. La qualité de l'expression n'est pas un détail : une copie confuse ou fautive perd des points, même si les idées sont bonnes.",
              ],
              box: { label: "Repère", text: "Écrit de français : 4 heures, noté sur 20, coefficient 5. Un seul exercice au choix : commentaire d'un texte ou dissertation sur une œuvre et son parcours. Aucun document autorisé." },
            },
            {
              heading: "Les quatre objets d'étude, socle des sujets",
              paragraphs: [
                "Le programme de première est organisé en quatre objets d'étude : la poésie du XIXe au XXIe siècle, la littérature d'idées du XVIe au XVIIIe siècle, le roman et le récit du Moyen Âge au XXIe siècle, le théâtre du XVIIe au XXIe siècle. Pour chacun, un programme national fixe trois œuvres, chacune associée à un parcours (un thème de lecture). Votre professeur en a choisi une par objet d'étude.",
                "En 2026-2027, les œuvres sont par exemple, pour la poésie, le « Cahier de Douai » de Rimbaud, « La rage de l'expression » de Ponge et « Mes forêts » d'Hélène Dorion ; pour le théâtre, « Le Menteur » de Corneille, « On ne badine pas avec l'amour » de Musset et « Pour un oui ou pour un non » de Nathalie Sarraute. Les sujets du bac sont construits à partir de ces objets d'étude.",
                "Savoir rattacher un texte à son objet d'étude est un réflexe utile : la date, le genre et la forme suffisent souvent. Un poème en vers libres de 1950 relève de la poésie ; une scène de comédie de 1730 relève du théâtre ; un essai de 1580 relève de la littérature d'idées ; un chapitre de roman de 1857 relève du roman et du récit.",
              ],
            },
            {
              heading: "Le commentaire : interpréter un texte inconnu",
              paragraphs: [
                "Le commentaire porte sur un texte littéraire que vous n'avez pas étudié en classe, en lien avec l'un des objets d'étude. Il peut s'agir d'un poème, d'un extrait de roman, d'une scène de théâtre ou d'un passage argumentatif. En voie générale, le sujet ne vous fournit pas de parcours de lecture : c'est à vous de construire votre interprétation.",
                "Commenter, ce n'est ni résumer, ni paraphraser, ni dresser une liste de procédés. C'est proposer une lecture argumentée du texte, organisée en parties, guidée par une question centrale (le projet de lecture ou problématique). Chaque idée s'appuie sur des citations précises, analysées : le procédé est nommé, puis son effet est interprété.",
              ],
              box: { label: "Définition", text: "Le commentaire est une interprétation organisée et argumentée d'un texte, construite autour d'un projet de lecture et appuyée sur l'analyse précise de ses procédés d'écriture." },
            },
            {
              heading: "La dissertation : réfléchir sur une œuvre et son parcours",
              paragraphs: [
                "La dissertation propose trois sujets portant sur un même objet d'étude, différent de celui du commentaire : un sujet pour chacune des trois œuvres au programme de cet objet. Vous traitez le sujet qui correspond à l'œuvre étudiée en classe. Si votre classe a lu « Pour un oui ou pour un non » et que la dissertation porte sur le théâtre, seul le sujet sur Sarraute vous concerne.",
                "Le sujet prend la forme d'une question ou d'une affirmation à discuter. Vous y répondez par un raisonnement organisé (introduction, deux ou trois parties, conclusion), appuyé sur des exemples précis tirés de l'œuvre, des textes du parcours associé et de votre culture. On n'attend pas un récit de l'œuvre, mais une réflexion qui s'en sert comme preuve.",
                "Comment choisir ? Le commentaire convient à qui aime l'analyse fine d'un texte et maîtrise bien les procédés d'écriture. La dissertation convient à qui connaît très bien son œuvre, dispose de références et de citations, et sait argumenter. Le jour de l'épreuve, lisez les deux sujets en entier avant de choisir, puis tenez-vous à votre choix.",
              ],
              box: { label: "À retenir", text: "Commentaire : un texte inconnu, une interprétation à construire. Dissertation : une question sur l'œuvre étudiée en classe et son parcours, une réflexion argumentée nourrie d'exemples." },
            },
          ],
          keyPoints: [
            "Écrit anticipé de français : 4 heures, noté sur 20, coefficient 5, en juin de la première.",
            "Un seul exercice au choix : commentaire d'un texte inconnu ou dissertation sur une œuvre et son parcours.",
            "Quatre objets d'étude : poésie (XIXe-XXIe), littérature d'idées (XVIe-XVIIIe), roman et récit (Moyen Âge-XXIe), théâtre (XVIIe-XXIe).",
            "Dissertation : trois sujets, un par œuvre d'un même objet d'étude ; on traite celui de l'œuvre étudiée en classe.",
            "Commenter n'est pas paraphraser : on interprète, à partir de procédés nommés et de citations analysées.",
            "Aucun document n'est autorisé : les citations de l'œuvre s'apprennent pendant l'année.",
          ],
          example: {
            statement: "Le jour de l'épreuve, le sujet propose le commentaire d'un poème de 1913 et trois sujets de dissertation sur le théâtre : un sur « Le Menteur », un sur « On ne badine pas avec l'amour », un sur « Pour un oui ou pour un non ». Votre classe a étudié la pièce de Musset. Quels sujets pouvez-vous traiter, et comment choisir ?",
            solution: [
              "Repérer la structure : un commentaire (objet d'étude : la poésie, puisqu'il s'agit d'un poème de 1913) et une dissertation dont les trois sujets portent sur l'objet d'étude du théâtre.",
              "Éliminer ce qui ne vous concerne pas : en dissertation, on traite le sujet de l'œuvre étudiée en classe. Les sujets sur Corneille et sur Sarraute sont donc exclus.",
              "Il reste deux possibilités : le commentaire du poème, ou la dissertation sur « On ne badine pas avec l'amour ».",
              "Lire les deux sujets en entier, puis se demander : ai-je immédiatement des idées et des références précises sur la question posée à propos de Musset ? Le poème m'inspire-t-il un projet de lecture clair ?",
              "Réponse : vous choisissez entre le commentaire et la dissertation sur Musset, en retenant le sujet pour lequel vous pouvez construire le raisonnement le plus solide et le mieux illustré, puis vous vous y tenez.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rattachez chacun de ces textes à son objet d'étude : a) un poème en prose de Baudelaire publié en 1869 ; b) une scène du « Jeu de l'amour et du hasard » de Marivaux (1730) ; c) un chapitre des « Essais » de Montaigne (1580) ; d) un extrait de « Madame Bovary » de Flaubert (1857).",
              hint: "Regardez à la fois le genre du texte et les bornes chronologiques de chaque objet d'étude.",
              solution: [
                "a) Le poème en prose de Baudelaire relève de la poésie du XIXe au XXIe siècle : le poème en prose est une forme poétique, et 1869 entre dans les bornes.",
                "b) La scène de Marivaux relève du théâtre du XVIIe au XXIe siècle : c'est une comédie, écrite au XVIIIe siècle.",
                "c) Les « Essais » de Montaigne relèvent de la littérature d'idées du XVIe au XVIIIe siècle : c'est une réflexion personnelle et argumentée, publiée au XVIe siècle.",
                "d) « Madame Bovary » relève du roman et du récit du Moyen Âge au XXIe siècle.",
                "Résultat : a) poésie, b) théâtre, c) littérature d'idées, d) roman et récit.",
              ],
            },
            {
              level: 2,
              statement: "Inès connaît très bien « Le Menteur », qu'elle a lu deux fois, et elle a appris une dizaine de citations. En revanche, elle a du mal à repérer les procédés d'écriture dans un texte qu'elle découvre. Le jour de l'épreuve, la dissertation porte sur le théâtre. Quel exercice lui conseillez-vous, et à quelle condition ? Justifiez en trois arguments.",
              hint: "Mettez en regard les compétences d'Inès et ce que chaque exercice exige.",
              solution: [
                "Premier argument : la dissertation exige une connaissance précise de l'œuvre ; Inès l'a lue deux fois, elle dispose donc d'exemples.",
                "Deuxième argument : elle a appris des citations, or la dissertation se juge aussi sur la précision des références, sans document.",
                "Troisième argument : le commentaire demande de repérer et d'interpréter les procédés d'un texte inconnu, ce qui est justement sa difficulté.",
                "Condition : elle doit lire attentivement le sujet sur « Le Menteur » et vérifier qu'elle peut y répondre par un raisonnement, et non par un résumé de la pièce.",
                "Conseil : la dissertation sur « Le Menteur », si la question posée lui inspire un plan ; sinon, le commentaire reste possible.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'entraînement, type bac. Vous lisez l'en-tête suivant : « Objet d'étude : la poésie du XIXe siècle au XXIe siècle. Vous traiterez au choix l'un des deux sujets suivants : commentaire (texte de Marceline Desbordes-Valmore) ou dissertation (un sujet au choix selon l'œuvre étudiée parmi trois œuvres de théâtre). » Expliquez précisément ce que l'on attend de vous dans chacun des deux cas, et citez deux erreurs à éviter pour chacun.",
              hint: "Distinguez bien l'objet d'étude du commentaire et celui de la dissertation, puis pensez à la forme attendue.",
              solution: [
                "Le commentaire porte sur un poème de Marceline Desbordes-Valmore (poétesse du XIXe siècle), que vous n'avez pas étudié : on attend une interprétation organisée, en parties, guidée par un projet de lecture, appuyée sur des citations analysées.",
                "Deux erreurs à éviter en commentaire : paraphraser le poème (le redire avec d'autres mots) au lieu de l'interpréter ; aligner des procédés sans dire ce qu'ils produisent.",
                "La dissertation porte sur le théâtre : vous traitez uniquement le sujet de l'œuvre étudiée en classe et vous construisez un raisonnement (introduction, parties, conclusion) qui répond à la question posée.",
                "Deux erreurs à éviter en dissertation : raconter l'intrigue au lieu d'argumenter ; ignorer le parcours associé et se limiter à des généralités sans exemple précis.",
                "Conclusion : dans les deux cas, on attend un devoir construit, rédigé dans une langue correcte, qui répond à une question précise.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez ce que vous savez de l'écrit du bac de français.",
            statements: [
              { text: "L'écrit de français dure 4 heures.", true: true, why: "C'est la durée de l'épreuve, quel que soit l'exercice choisi." },
              { text: "On peut apporter l'œuvre étudiée pour la dissertation.", true: false, why: "Aucun document n'est autorisé : les citations doivent être apprises." },
              { text: "Le texte du commentaire a été étudié en classe.", true: false, why: "C'est un texte inconnu, en lien avec l'un des objets d'étude." },
              { text: "En dissertation, on traite le sujet qui porte sur l'œuvre étudiée en classe.", true: true, why: "Trois sujets sont proposés, un par œuvre au programme de l'objet d'étude concerné." },
              { text: "Un bon commentaire suit le texte ligne à ligne en le reformulant.", true: false, why: "C'est de la paraphrase : le commentaire organise une interprétation en parties." },
              { text: "La qualité de la langue compte dans la note.", true: true, why: "L'expression fait partie des compétences évaluées." },
              { text: "L'écrit et l'oral de français ont le même coefficient.", true: true, why: "Chacune des deux épreuves a le coefficient 5." },
            ],
          },
          quiz: [
            {
              q: "Quel est le coefficient de l'écrit anticipé de français ?",
              options: ["2", "5", "8", "10"],
              answer: 1,
              why: "L'écrit de français a le coefficient 5, comme l'oral.",
            },
            {
              q: "Sur quoi porte la dissertation en voie générale ?",
              options: ["Un texte inconnu", "Un thème libre", "Une question de grammaire", "Une œuvre au programme et son parcours"],
              answer: 3,
              why: "La dissertation porte sur l'une des œuvres au programme, celle étudiée en classe, et sur son parcours associé.",
            },
            {
              q: "Quel texte relève de la littérature d'idées du XVIe au XVIIIe siècle ?",
              options: ["Les « Essais » de Montaigne", "« Madame Bovary » de Flaubert", "Un poème en vers libres de 1950", "Une pièce de Sarraute"],
              answer: 0,
              why: "Les « Essais » (1580) sont une œuvre de réflexion argumentée du XVIe siècle.",
            },
            {
              q: "Qu'est-ce que paraphraser un texte ?",
              options: ["Analyser ses procédés", "Citer l'auteur", "Le répéter avec d'autres mots sans l'interpréter", "Construire un plan"],
              answer: 2,
              why: "La paraphrase redit le texte sans l'expliquer : c'est le défaut principal à éviter en commentaire.",
            },
            {
              q: "Le jour de l'épreuve, que faire avant de choisir son sujet ?",
              options: ["Commencer le premier sujet tout de suite", "Lire les deux sujets en entier", "Choisir le plus court", "Rédiger l'introduction des deux"],
              answer: 1,
              why: "On lit d'abord les deux sujets en entier pour choisir celui où l'on peut construire le raisonnement le plus solide.",
            },
          ],
          trap: "Croire que la dissertation permet de choisir n'importe quelle œuvre de l'objet d'étude : on traite seulement le sujet de l'œuvre étudiée en classe. Autre piège : changer de sujet au bout d'une heure, ce qui fait perdre un temps impossible à rattraper.",
          method: "Dès le début de l'année, préparez pour chaque œuvre une fiche avec dix citations courtes classées par thème : le jour de la dissertation, sans document, c'est elle qui vous fournira vos exemples.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'methode-commentaire',
          title: 'Le commentaire : de la lecture du texte au plan rédigé',
          minutes: 35,
          objectives: [
            "Lire un texte inconnu et en dégager le genre, la situation d'énonciation et les enjeux.",
            "Relever des procédés d'écriture et en interpréter les effets.",
            "Formuler un projet de lecture et construire un plan en deux ou trois parties.",
            "Rédiger une introduction, un paragraphe argumenté et une conclusion de commentaire.",
          ],
          course: [
            {
              heading: "Ce que l'on attend d'un commentaire",
              paragraphs: [
                "Le commentaire est une interprétation organisée d'un texte. Il ne suit pas le texte dans l'ordre, comme le fait l'explication linéaire de l'oral : il le réorganise en grandes idées, appelées axes, qui répondent toutes à une même question, le projet de lecture. Chaque axe forme une partie du devoir, divisée en sous-parties.",
                "Le cœur du commentaire est l'analyse : une citation courte, un procédé nommé avec le mot juste (métaphore, anaphore, rythme ternaire, changement de temps verbal, focalisation interne...), puis une interprétation qui dit ce que ce procédé produit et en quoi il sert l'idée défendue. Un procédé non interprété ne rapporte rien ; une interprétation sans citation n'est pas prouvée.",
              ],
              box: { label: "Règle", text: "Une analyse complète tient en trois temps : je cite (le texte, entre guillemets), je nomme (le procédé), j'interprète (l'effet et le sens, en lien avec l'idée de la sous-partie)." },
            },
            {
              heading: "Lire et travailler au brouillon",
              paragraphs: [
                "Lisez le texte au moins trois fois. À la première lecture, cherchez à comprendre : qui parle, à qui, de quoi, à quelle époque, dans quel genre ? Lisez attentivement le paratexte (auteur, titre, date, présentation), il donne souvent la clé du contexte. Notez votre première impression : ce texte est-il ironique, pathétique, inquiétant, lyrique ?",
                "Aux lectures suivantes, annotez : soulignez les champs lexicaux, les images, les répétitions, les temps verbaux, les modalités de phrase, la ponctuation, les changements de rythme. Pour un poème, observez aussi la versification (mètre, rimes, enjambements, coupes) ; pour une scène, la répartition de la parole et les didascalies ; pour un récit, le point de vue et le rythme de la narration.",
                "Classez ensuite vos remarques dans un tableau à trois colonnes : citation, procédé, interprétation. Ce tableau est la matière première du devoir. Regroupez enfin les lignes qui vont dans le même sens : chaque groupe deviendra une sous-partie, et les groupes proches formeront une partie.",
              ],
            },
            {
              heading: "Le projet de lecture et le plan",
              paragraphs: [
                "Le projet de lecture est la question à laquelle votre commentaire répond. Il doit porter sur ce qui fait la singularité du texte, et non sur une évidence. « Comment l'auteur décrit-il la ville ? » est trop plat ; « Comment une scène de rue banale devient-elle le portrait sensible d'une pauvreté silencieuse ? » ouvre une vraie interprétation.",
                "Le plan compte deux ou trois parties, chacune formulée comme une idée (une phrase avec un verbe, pas un simple mot comme « les images »), avec deux ou trois sous-parties. Les parties progressent : on va du plus visible au plus profond, par exemple de la description à sa signification, ou de l'apparence comique à la critique qu'elle cache.",
              ],
              box: { label: "À retenir", text: "Projet de lecture : une question qui porte sur la singularité du texte. Plan : 2 ou 3 parties formulées comme des idées, 2 ou 3 sous-parties chacune, qui progressent du plus évident au plus profond." },
            },
            {
              heading: "Rédiger : introduction, développement, conclusion",
              paragraphs: [
                "L'introduction comporte cinq étapes, en un seul paragraphe : une amorce (le contexte littéraire ou historique, sans formule creuse), la présentation du texte (auteur, œuvre, date, genre), une brève situation et description du passage, le projet de lecture, puis l'annonce du plan. Rédigez-la entièrement au brouillon.",
                "Chaque sous-partie forme un paragraphe : une phrase qui annonce l'idée, deux ou trois analyses complètes (citation, procédé, interprétation), une phrase de bilan. Entre deux parties, une transition résume ce qui a été montré et annonce la suite. Les titres et les tirets sont interdits dans la copie : tout est rédigé.",
                "La conclusion répond clairement au projet de lecture en reprenant les acquis de chaque partie, puis peut s'ouvrir sur un rapprochement pertinent avec une autre œuvre ou un autre texte. L'ouverture doit être précise et justifiée : mieux vaut pas d'ouverture qu'une ouverture plaquée.",
              ],
            },
          ],
          keyPoints: [
            "Le commentaire réorganise le texte en axes ; il ne le suit pas ligne à ligne.",
            "Analyse complète : citer, nommer le procédé, interpréter son effet.",
            "Au brouillon : tableau citation / procédé / interprétation, puis regroupement des remarques.",
            "Projet de lecture : une question qui porte sur la singularité du texte.",
            "Plan : 2 ou 3 parties formulées comme des idées, qui progressent.",
            "Introduction : amorce, présentation, situation, projet de lecture, annonce du plan.",
          ],
          example: {
            statement: "Texte d'entraînement, écrit pour cet exercice : « La pluie avait cessé vers cinq heures. Dans la rue encore luisante, les réverbères s'allumaient un à un, comme des veilleurs qu'on réveille trop tôt. Marthe marchait vite, son panier contre la hanche, sans regarder les vitrines où brillaient des choses qu'elle n'achèterait jamais. Au coin de la place, elle s'arrêta. Une odeur de pain chaud sortait d'un soupirail, et pendant un instant elle ferma les yeux, comme on ferme une porte sur le froid. » Proposez un projet de lecture et un plan détaillé en deux parties.",
            solution: [
              "Première lecture : un récit au passé, à la troisième personne ; une femme pauvre, Marthe, traverse une rue en fin de journée. Impression dominante : une mélancolie discrète, puis un bref réconfort.",
              "Relevé : comparaison « comme des veilleurs qu'on réveille trop tôt » (personnification des réverbères) ; imparfaits de description, puis passés simples « s'arrêta », « ferma » qui marquent l'événement ; négation et conditionnel à valeur de futur dans le passé « qu'elle n'achèterait jamais » ; sensation olfactive « odeur de pain chaud » ; comparaison finale « comme on ferme une porte sur le froid ».",
              "Projet de lecture : comment une scène de rue ordinaire devient-elle le portrait sensible d'une femme pauvre, pour qui une simple odeur devient un refuge ?",
              "Partie I : une scène urbaine réaliste mais déjà mélancolique. 1) Un décor précis de fin de journée (heure, pluie, rue luisante, imparfaits de description). 2) Une ville personnifiée et lasse (les réverbères comparés à des veilleurs tirés du sommeil).",
              "Partie II : le portrait discret d'une pauvreté et d'un bonheur fugitif. 1) Une femme exclue de la société de consommation (marche rapide, regard détourné, « n'achèterait jamais » qui exprime un renoncement définitif). 2) Un instant suspendu (passage aux passés simples, odeur de pain, comparaison finale : fermer les yeux revient à se protéger du froid du monde).",
              "Réponse : projet de lecture sur la transformation d'une scène banale en portrait sensible ; plan en deux parties, du décor réaliste au portrait intérieur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le texte d'entraînement de l'exemple (Marthe dans la rue après la pluie), analysez complètement la phrase : « Au coin de la place, elle s'arrêta. » Nommez le temps verbal et le procédé de construction, puis interprétez-les.",
              hint: "Comparez ce temps à ceux des phrases précédentes, et observez la longueur de la phrase.",
              solution: [
                "Citation : « elle s'arrêta ».",
                "Procédés : le verbe est au passé simple, alors que les phrases précédentes sont à l'imparfait ; la phrase est très brève, après deux phrases longues.",
                "Interprétation : le passé simple marque un événement de premier plan qui rompt la description ; la brièveté de la phrase mime l'arrêt de la marche.",
                "Lien avec le sens : ce changement prépare le moment clé du texte, l'instant de réconfort devant le soupirail.",
                "Résultat : passé simple et phrase brève créent une rupture qui fait basculer le texte de la description vers l'événement.",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement, écrit pour cet exercice : « Le vieux port dort sous la brume. Les barques, serrées les unes contre les autres, se balancent à peine ; on dirait un troupeau qui attend son berger. Plus loin, un phare cligne, patient, obstiné, fidèle. Personne ne vient. » Formulez un projet de lecture et proposez un plan en deux parties avec deux sous-parties chacune.",
              hint: "Repérez les personnifications et la dernière phrase : quel sentiment le texte laisse-t-il ?",
              solution: [
                "Relevé : présent de description ; personnification « Le vieux port dort » ; comparaison « on dirait un troupeau qui attend son berger » ; rythme ternaire d'adjectifs « patient, obstiné, fidèle » ; phrase finale brève et négative « Personne ne vient ».",
                "Projet de lecture : comment la description d'un port endormi devient-elle l'image d'une attente sans réponse ?",
                "Partie I : un paysage paisible et animé. 1) Un décor calme et estompé (brume, mouvement « à peine »). 2) Des objets personnifiés (le port dort, les barques forment un troupeau, le phare cligne).",
                "Partie II : une attente mélancolique. 1) La fidélité du phare (rythme ternaire qui insiste sur la constance). 2) Une chute qui révèle l'absence (« Personne ne vient » : négation, phrase brève, effet de vide).",
                "Résultat : projet sur l'attente sans réponse ; plan qui va du paysage animé à la mélancolie qu'il exprime.",
              ],
            },
            {
              level: 3,
              statement: "Sujet type bac. À partir du texte d'entraînement de l'exemple (Marthe dans la rue après la pluie), présenté comme un extrait d'un roman fictif intitulé « Les Heures grises » (1932), rédigez l'introduction complète du commentaire, en reprenant le projet de lecture et le plan proposés dans la correction de l'exemple.",
              hint: "Suivez les cinq étapes : amorce, présentation, situation, projet de lecture, annonce du plan, en un seul paragraphe.",
              solution: [
                "Amorce : « Depuis le XIXe siècle, le roman s'attache souvent aux existences modestes et fait de la vie quotidienne une matière littéraire à part entière. »",
                "Présentation : « Dans “Les Heures grises”, roman publié en 1932, l'auteur suit une femme pauvre, Marthe, dans une ville de province. »",
                "Situation et description : « Dans cet extrait, Marthe traverse une rue au sortir de la pluie, sans s'arrêter devant les vitrines, jusqu'à ce qu'une odeur de pain chaud lui offre un instant de répit. »",
                "Projet de lecture : « Nous nous demanderons comment une scène de rue ordinaire devient le portrait sensible d'une femme pauvre, pour qui une simple odeur devient un refuge. »",
                "Annonce du plan : « Nous verrons d'abord que le texte installe une scène urbaine réaliste mais déjà mélancolique, puis qu'il dessine le portrait discret d'une pauvreté traversée par un bonheur fugitif. »",
                "Résultat : ces cinq phrases, enchaînées en un seul paragraphe, forment l'introduction.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du travail de commentaire.",
            items: [
              "Lire le texte et le paratexte pour comprendre la situation",
              "Annoter : champs lexicaux, images, temps, rythme, versification",
              "Remplir le tableau citation, procédé, interprétation",
              "Formuler le projet de lecture",
              "Regrouper les remarques en parties et sous-parties",
              "Rédiger l'introduction au brouillon",
              "Rédiger le développement et la conclusion au propre",
            ],
          },
          quiz: [
            {
              q: "Quelle différence principale entre le commentaire et l'explication linéaire ?",
              options: ["Le commentaire ne cite pas le texte", "Le commentaire est oral", "Le commentaire réorganise le texte en axes", "Le commentaire ne comporte pas d'introduction"],
              answer: 2,
              why: "L'explication linéaire suit l'ordre du texte, alors que le commentaire l'organise en grandes idées.",
            },
            {
              q: "Quelle est la formulation de partie la plus réussie ?",
              options: ["Une ville personnifiée et lasse", "Les images", "Les temps verbaux du texte", "Deuxième partie"],
              answer: 0,
              why: "Une partie se formule comme une idée interprétative, pas comme une simple étiquette de procédé.",
            },
            {
              q: "Que manque-t-il à cette remarque : « Il y a une métaphore ligne 3 » ?",
              options: ["Rien", "Le nom de l'auteur", "Une date", "La citation et l'interprétation"],
              answer: 3,
              why: "Une analyse complète cite le texte, nomme le procédé et interprète son effet.",
            },
            {
              q: "Combien de parties compte en général un commentaire ?",
              options: ["Une seule", "Deux ou trois", "Cinq", "Autant que de paragraphes du texte"],
              answer: 1,
              why: "Le commentaire s'organise en deux ou trois parties, chacune divisée en sous-parties.",
            },
            {
              q: "Quel élément termine l'introduction d'un commentaire ?",
              options: ["L'annonce du plan", "L'ouverture", "Une citation longue", "Le résumé du texte"],
              answer: 0,
              why: "L'introduction se clôt par l'annonce du plan ; l'ouverture appartient à la conclusion.",
            },
          ],
          trap: "Écrire un catalogue de procédés (« il y a une anaphore, puis une métaphore ») sans dire ce qu'ils produisent : la remarque est juste mais ne rapporte presque rien, car le correcteur évalue l'interprétation.",
          method: "Au brouillon, n'écrivez jamais un procédé sans compléter aussitôt la colonne interprétation par une phrase qui commence par « Cela montre que... » : si vous ne trouvez rien, la remarque ne mérite pas d'entrer dans le devoir.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'methode-dissertation',
          title: 'La dissertation sur une œuvre et son parcours',
          minutes: 35,
          objectives: [
            "Analyser un sujet de dissertation et en dégager le problème posé.",
            "Formuler une problématique et construire un plan dialectique ou thématique.",
            "Mobiliser des exemples précis tirés de l'œuvre, du parcours associé et de sa culture.",
            "Rédiger une introduction et des paragraphes argumentatifs de dissertation.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une dissertation sur œuvre ?",
              paragraphs: [
                "La dissertation est une réflexion organisée et argumentée qui répond à une question portant sur une œuvre au programme et sur son parcours associé. Elle ne demande pas de raconter l'œuvre ni de réciter un cours : elle demande de prendre position, de nuancer, et de prouver chaque idée par des exemples précis.",
                "Ces exemples viennent d'abord de l'œuvre étudiée : une scène, un chapitre, un poème, un personnage, une réplique, une citation courte apprise par cœur. Ils peuvent aussi venir des textes du parcours associé, étudiés en classe, et de votre culture personnelle (autres œuvres, mouvements littéraires). Un exemple n'est utile que s'il est analysé.",
              ],
              box: { label: "Définition", text: "La dissertation sur œuvre est une réflexion argumentée, organisée en parties, qui répond à une question sur une œuvre au programme et son parcours, en s'appuyant sur des exemples précis et analysés." },
            },
            {
              heading: "Analyser le sujet",
              paragraphs: [
                "Le sujet prend souvent la forme d'une question (« Le mensonge n'est-il, dans “Le Menteur”, qu'un ressort comique ? ») ou d'une citation suivie d'une consigne (« Vous discuterez ce jugement »). Recopiez-le au brouillon, entourez les mots-clés et définissez chacun. Un mot comme « seulement », « ne... que », « toujours » indique souvent ce qui doit être discuté.",
                "Reformulez ensuite le sujet avec vos propres mots, puis cherchez le problème qu'il pose : quelle tension, quel paradoxe, quelle limite ? La problématique est la question que votre devoir va traiter : elle reprend le sujet en le rendant plus précis. Un devoir hors-sujet, même brillant, est lourdement sanctionné ; l'analyse du sujet est donc l'étape décisive.",
                "Reliez enfin le sujet au parcours associé à l'œuvre. Pour « Le Menteur », par exemple, le parcours s'intitule « mensonge et comédie » ; pour « Pour un oui ou pour un non », « théâtre et dispute ». Le parcours indique l'angle de lecture dans lequel l'œuvre est étudiée, et les sujets s'en inspirent souvent.",
              ],
            },
            {
              heading: "Construire le plan",
              paragraphs: [
                "Le plan dialectique convient aux questions fermées (auxquelles on peut répondre par oui ou par non) et aux citations à discuter. Première partie : on montre en quoi l'affirmation est juste. Deuxième partie : on en montre les limites. Troisième partie : on dépasse l'opposition par une idée plus fine, qui ne se contente pas de couper la poire en deux.",
                "Le plan thématique (ou analytique) convient aux questions ouvertes du type « Comment... ? » ou « En quoi... ? » : chaque partie examine un aspect différent de la réponse, du plus évident au plus profond. Dans les deux cas, chaque partie compte deux ou trois sous-parties, et chaque sous-partie défend un argument appuyé sur un exemple analysé.",
              ],
              box: { label: "Repère", text: "Question fermée ou citation à discuter : plan dialectique (oui, mais, dépassement). Question ouverte « Comment » ou « En quoi » : plan thématique, en parties qui progressent." },
            },
            {
              heading: "Le paragraphe argumentatif",
              paragraphs: [
                "Chaque sous-partie est un paragraphe construit selon un ordre stable : l'argument, formulé en une phrase claire ; l'exemple, situé précisément dans l'œuvre (moment, personnage, scène) et cité brièvement ; l'analyse de l'exemple, qui montre en quoi il prouve l'argument ; une phrase de bilan qui revient au sujet.",
                "Exemple de paragraphe sur « Le Menteur » : « Le mensonge est d'abord le moteur du comique de la pièce. À l'acte I, Dorante invente, devant Alcippe et Philiste, une fête somptueuse qu'il aurait offerte sur l'eau : la précision extravagante du récit amuse le spectateur, qui sait qu'il ment. Le comique naît ici de l'écart entre ce que croient les personnages et ce que sait le public. Le mensonge crée donc le rire. »",
              ],
            },
            {
              heading: "Introduction et conclusion",
              paragraphs: [
                "L'introduction suit cinq étapes : une amorce liée au sujet, la citation ou le rappel du sujet, son analyse (définition des termes, reformulation), la problématique, l'annonce du plan. La conclusion répond à la problématique en reprenant le parcours du raisonnement, puis peut proposer une ouverture justifiée vers une autre œuvre.",
                "Les transitions entre les parties sont indispensables : en une ou deux phrases, elles résument la partie qui s'achève et annoncent la suivante, en montrant pourquoi on doit aller plus loin. Elles rendent visible la progression du raisonnement, que le correcteur évalue autant que les idées.",
              ],
            },
          ],
          keyPoints: [
            "Dissertation : répondre à une question sur l'œuvre et son parcours, sans raconter l'œuvre.",
            "Analyser le sujet : mots-clés définis, reformulation, problème posé ; le hors-sujet coûte très cher.",
            "Question fermée ou citation : plan dialectique ; question ouverte : plan thématique.",
            "Paragraphe : argument, exemple précis et cité, analyse de l'exemple, bilan.",
            "Exemples tirés de l'œuvre d'abord, puis du parcours et de la culture personnelle.",
            "Introduction en cinq étapes ; transitions entre les parties ; conclusion qui répond.",
          ],
          example: {
            statement: "Sujet : « Le mensonge n'est-il, dans “Le Menteur” de Corneille, qu'un ressort comique ? » Vous traiterez ce sujet en vous appuyant sur la pièce et sur le parcours « mensonge et comédie ». Proposez une problématique et un plan détaillé.",
            solution: [
              "Analyse du sujet : « ne... que » signale qu'il faut discuter l'idée d'un mensonge réduit à sa fonction comique. « Ressort comique » : ce qui fait avancer l'intrigue et produit le rire.",
              "Problématique : le mensonge de Dorante sert-il seulement à faire rire, ou fait-il aussi de la pièce une réflexion sur la parole et sur le théâtre lui-même ?",
              "Partie I, le mensonge est bien un ressort comique : 1) il fait rire par l'écart entre ce que savent les personnages et ce que sait le public (le récit de la fête sur l'eau, à l'acte I) ; 2) il produit des quiproquos et des rebondissements (la confusion entre Clarice et Lucrèce ; le mariage imaginaire à Poitiers raconté à Géronte, à l'acte II) ; 3) le valet Cliton souligne avec humour les inventions de son maître.",
              "Partie II, mais il pose aussi une question morale : 1) il trompe la confiance d'un père, Géronte, dont la colère à l'acte V rappelle l'exigence d'honneur ; 2) il expose Dorante au ridicule et aux conséquences de ses fables (la jalousie d'Alcippe, le duel).",
              "Partie III, le mensonge devient enfin une célébration du pouvoir de la parole et du théâtre : 1) Dorante improvise comme un auteur et un acteur, et le public admire sa virtuosité ; 2) la pièce rappelle que le théâtre est lui-même une illusion acceptée, ce qui rejoint le parcours « mensonge et comédie ».",
              "Réponse : un plan dialectique en trois parties, du ressort comique à la réflexion morale, puis au mensonge comme image du théâtre lui-même.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces sujets, indiquez s'il s'agit d'une question fermée ou ouverte, et le type de plan qui convient : a) « En quoi le “Cahier de Douai” de Rimbaud exprime-t-il un désir d'émancipation ? » ; b) « La dispute, dans “Pour un oui ou pour un non”, naît-elle vraiment d'un rien ? » ; c) « Selon un critique, “Ponge s'intéresse moins aux choses qu'aux mots”. Vous discuterez ce jugement. »",
              hint: "Une question fermée appelle une réponse par oui ou par non ; une citation « à discuter » se traite comme une question fermée.",
              solution: [
                "a) « En quoi... ? » est une question ouverte : plan thématique, chaque partie présentant une forme d'émancipation.",
                "b) La question attend oui ou non : question fermée, plan dialectique (oui, la dispute part d'un détail ; mais ce détail révèle une opposition profonde ; dépassement).",
                "c) Une citation à discuter se traite comme une question fermée : plan dialectique (la citation est juste en partie, elle a des limites, on dépasse l'opposition).",
                "Résultat : a) ouverte, thématique ; b) fermée, dialectique ; c) jugement à discuter, dialectique.",
              ],
            },
            {
              level: 2,
              statement: "Sujet : « En quoi le “Cahier de Douai” de Rimbaud exprime-t-il un désir d'émancipation ? » (parcours « émancipations créatrices »). Définissez le mot-clé « émancipation », reformulez le sujet, puis proposez une problématique et trois axes de plan.",
              hint: "S'émanciper, c'est se libérer d'une autorité. Demandez-vous de quelles autorités le jeune poète se libère, et dans quels domaines.",
              solution: [
                "Définition : s'émanciper, c'est se libérer d'une tutelle ou d'une autorité (familiale, sociale, politique, religieuse, artistique).",
                "Reformulation : de quelles contraintes le jeune Rimbaud, qui a seize ans en 1870, se libère-t-il dans ces poèmes, et comment ?",
                "Problématique : comment la poésie du « Cahier de Douai » fait-elle de la révolte et de la liberté du jeune poète une création nouvelle ?",
                "Axe 1 : une émancipation personnelle, la fuite et l'errance (la marche libre et heureuse dans « Ma Bohème », les sensations de la nature).",
                "Axe 2 : une émancipation critique, la révolte contre les autorités (la satire de la guerre dans « Le Mal », celle de Napoléon III dans « Rages de Césars », la critique de l'hypocrisie religieuse).",
                "Axe 3 : une émancipation poétique, qui garde des formes classiques comme le sonnet tout en les bousculant (enjambements, vocabulaire familier, images inattendues).",
                "Résultat : un plan thématique en trois axes, du personnel au politique, puis à la création poétique elle-même.",
              ],
            },
            {
              level: 3,
              statement: "Sujet type bac : « La dispute, dans “Pour un oui ou pour un non” de Nathalie Sarraute, naît-elle vraiment d'un rien ? » Vous traiterez ce sujet en vous appuyant sur la pièce et sur le parcours « théâtre et dispute ». Rédigez la problématique et un plan détaillé en trois parties, avec pour chaque sous-partie un exemple tiré de la pièce.",
              hint: "Partez de la situation de départ (une intonation sur une phrase anodine), puis demandez-vous ce que cette querelle révèle des deux personnages.",
              solution: [
                "Problématique : la querelle entre H1 et H2, qui part d'une intonation, est-elle dérisoire, ou révèle-t-elle ce qui se joue d'essentiel sous les mots ?",
                "Partie I, oui, la dispute naît d'un presque rien : 1) son origine est une phrase banale, « C'est bien... ça », prononcée avec une certaine intonation au moment où H2 lui faisait part de l'un de ses succès ; 2) le titre lui-même souligne la futilité apparente du motif ; 3) l'appel aux voisins pour juger le différend montre le caractère presque comique de la situation.",
                "Partie II, mais ce rien révèle une blessure et une opposition profonde : 1) l'intonation trahit une condescendance que H2 ressent comme un mépris ; 2) la dispute dévoile deux visions du monde, celle d'un homme installé dans la réussite sociale et celle d'un homme attaché à la contemplation, à la simplicité de la vie.",
                "Partie III, le « rien » est en réalité l'objet même du théâtre de Sarraute : 1) elle donne forme à ce qu'elle appelle la sous-conversation, ces mouvements intérieurs qui se cachent sous les paroles ordinaires ; 2) la dispute devient ainsi une exploration du pouvoir des mots, ce qui rejoint le parcours « théâtre et dispute ».",
                "Résultat : un plan dialectique qui montre que le « rien » apparent est en fait le lieu de ce qui compte le plus pour Sarraute, l'infime mouvement de la parole.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de la dissertation à sa définition.",
            pairs: [
              { left: "Problématique", right: "La question précise que le devoir va traiter, issue de l'analyse du sujet" },
              { left: "Plan dialectique", right: "Thèse, limites, puis dépassement de l'opposition" },
              { left: "Plan thématique", right: "Des parties qui examinent des aspects différents de la réponse" },
              { left: "Parcours associé", right: "L'angle de lecture dans lequel l'œuvre est étudiée" },
              { left: "Transition", right: "Une ou deux phrases qui résument une partie et annoncent la suivante" },
              { left: "Hors-sujet", right: "Un devoir qui ne répond pas à la question posée" },
            ],
          },
          quiz: [
            {
              q: "Que signale l'expression « ne... que » dans un sujet ?",
              options: ["Une idée restrictive à discuter", "Une question ouverte", "Un sujet de commentaire", "Une consigne de longueur"],
              answer: 0,
              why: "La restriction invite à examiner si l'œuvre se réduit vraiment à ce que dit le sujet.",
            },
            {
              q: "Quel plan convient à « Comment Musset mêle-t-il comédie et drame dans “On ne badine pas avec l'amour” ? » ?",
              options: ["Un plan dialectique", "Aucun plan", "Un plan thématique", "Un résumé chronologique"],
              answer: 2,
              why: "Une question ouverte en « Comment » appelle un plan thématique, dont les parties examinent des aspects de la réponse.",
            },
            {
              q: "D'où viennent d'abord les exemples d'une dissertation sur œuvre ?",
              options: ["D'Internet", "De l'actualité", "Du dictionnaire", "De l'œuvre étudiée"],
              answer: 3,
              why: "L'œuvre au programme fournit l'essentiel des exemples, complétés par le parcours et la culture personnelle.",
            },
            {
              q: "Quel est l'ordre d'un paragraphe argumentatif ?",
              options: ["Exemple, bilan, argument", "Argument, exemple, analyse, bilan", "Citation longue, résumé", "Bilan, argument"],
              answer: 1,
              why: "On énonce l'argument, on donne l'exemple précis, on l'analyse, puis on revient au sujet.",
            },
            {
              q: "Quel est le parcours associé à « Le Menteur » de Corneille ?",
              options: ["Théâtre et dispute", "Émancipations créatrices", "Mensonge et comédie", "Dans l'atelier du poète"],
              answer: 2,
              why: "« Le Menteur » est étudié dans le parcours « mensonge et comédie ».",
            },
          ],
          trap: "Raconter l'œuvre au lieu d'argumenter : un paragraphe qui résume l'intrigue, même exact, ne prouve rien. L'exemple doit toujours être choisi pour un argument et analysé en fonction du sujet.",
          method: "Pour chaque œuvre, préparez dans l'année un tableau de dix moments clés (scène ou chapitre, personnages, une citation courte, deux thèmes) : le jour de l'épreuve, vous y piochez les exemples qui servent le sujet posé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-gerer-temps',
          title: 'Rédiger, soigner la langue et gérer ses quatre heures',
          minutes: 30,
          objectives: [
            "Organiser les quatre heures de l'épreuve en étapes minutées.",
            "Intégrer correctement des citations dans une phrase rédigée.",
            "Corriger les erreurs de langue les plus fréquentes dans une copie.",
            "Relire sa copie de façon méthodique.",
          ],
          course: [
            {
              heading: "Gérer quatre heures",
              paragraphs: [
                "Quatre heures paraissent longues, mais elles passent vite si l'on n'a pas de plan de travail. L'erreur la plus fréquente est de rédiger trop tôt, sans plan solide, puis de s'arrêter faute d'idées ; l'erreur inverse est de rester trop longtemps au brouillon et de ne pas terminer. Une copie inachevée, sans conclusion, est toujours pénalisée.",
                "Voici un découpage possible : 15 minutes pour lire les sujets et choisir ; 75 minutes de travail au brouillon (analyse, relevé ou recherche d'exemples, plan détaillé) ; 15 minutes pour rédiger l'introduction et préparer la conclusion au brouillon ; 1 heure 55 de rédaction au propre ; 20 minutes de relecture. Le total fait bien 240 minutes. Adaptez ce découpage, mais décidez-le avant l'épreuve.",
              ],
              box: { label: "Repère", text: "15 min de choix + 75 min de brouillon + 15 min d'introduction et conclusion au brouillon + 115 min de rédaction + 20 min de relecture = 240 min, soit 4 heures." },
            },
            {
              heading: "Rédiger une copie claire",
              paragraphs: [
                "La copie est entièrement rédigée : pas de titres, pas de tirets, pas d'abréviations (« ex. », « cf. », « pb »). On marque la structure par la mise en page : un alinéa au début de chaque paragraphe, une ligne sautée entre l'introduction et le développement, entre chaque partie, et avant la conclusion. Une copie aérée se lit mieux et laisse voir le plan.",
                "Les titres d'œuvres sont soulignés à la main (ils sont en italique dans un texte imprimé) ; les titres de poèmes, de chapitres ou de scènes sont mis entre guillemets. On écrit « Le Menteur » souligné, mais « Ma Bohème » entre guillemets, puisque c'est un poème d'un recueil.",
                "Une citation est courte, exacte, placée entre guillemets et intégrée dans la phrase. Si elle modifie la syntaxe, on l'adapte avec des crochets ; si on coupe un passage, on signale la coupe par [...]. En commentaire, on indique la ligne ou le vers entre parenthèses. Une citation n'est jamais posée seule : elle est introduite, puis commentée.",
              ],
              box: { label: "Règle", text: "Citer : des guillemets, quelques mots exacts, une intégration grammaticale dans votre phrase, la référence (ligne, vers, scène), puis l'analyse. Coupure signalée par [...]." },
            },
            {
              heading: "Soigner la langue",
              paragraphs: [
                "Les correcteurs relèvent toujours les mêmes erreurs. Les homophones : a / à, ces / ses / c'est / s'est, leur / leurs, ou / où, quand / quant. L'accord du participe passé : avec être, il s'accorde avec le sujet (« elles sont parties ») ; avec avoir, il s'accorde avec le complément d'objet direct placé avant (« les citations que j'ai apprises »).",
                "L'interrogation indirecte ne garde ni l'inversion ni le point d'interrogation : on écrit « nous nous demanderons comment l'auteur dénonce la guerre », et non « nous nous demanderons comment l'auteur dénonce-t-il la guerre ? ». On évite aussi « qu'est-ce que » dans une interrogation indirecte : « on se demande ce que révèle cette scène ».",
                "Le registre attendu est soutenu et précis : on préfère « le poète dénonce » à « le poète parle de », « l'auteur suggère » à « l'auteur veut dire ». Évitez le « je » d'opinion brutal ; employez « nous » ou des tournures impersonnelles. Variez les verbes d'analyse : souligner, suggérer, mettre en valeur, dénoncer, traduire, révéler.",
              ],
            },
            {
              heading: "Relire avec méthode",
              paragraphs: [
                "Une relecture efficace se fait en plusieurs passages, chacun avec un objectif : d'abord le sens (une phrase claire, des transitions présentes, une conclusion qui répond), puis les accords (repérer chaque verbe et son sujet, chaque participe passé), enfin l'orthographe d'usage et la ponctuation. Lire tout en une fois en cherchant tout ne permet de rien trouver.",
                "Gardez vingt minutes pour cette relecture : c'est souvent là que l'on gagne des points faciles. Corrigez proprement, en barrant d'un trait net et en écrivant au-dessus. Vérifiez aussi que vos copies sont numérotées et que l'en-tête est bien rempli.",
              ],
            },
          ],
          keyPoints: [
            "Décider avant l'épreuve d'un découpage minuté des 240 minutes, relecture comprise.",
            "Copie entièrement rédigée : ni titres, ni tirets, ni abréviations ; alinéas et lignes sautées entre les parties.",
            "Titre d'œuvre souligné à la main ; titre de poème ou de chapitre entre guillemets.",
            "Citation courte, exacte, entre guillemets, intégrée à la phrase, référencée, puis analysée.",
            "Interrogation indirecte : ni inversion, ni point d'interrogation, ni « qu'est-ce que ».",
            "Relire en trois passages : le sens, les accords, l'orthographe et la ponctuation.",
          ],
          example: {
            statement: "Corrigez la phrase suivante, extraite d'une copie, et expliquez chaque correction : « Nous nous demanderons comment est-ce que Rimbaud exprime-t-il sa liberté dans Ma Bohème, ou le poète c'est représenté en marcheur. »",
            solution: [
              "Interrogation indirecte : on supprime « est-ce que » et l'inversion « exprime-t-il », qui appartiennent à l'interrogation directe. On écrit « comment Rimbaud exprime sa liberté ».",
              "Titre : « Ma Bohème » est un poème, son titre se met entre guillemets.",
              "Homophone ou / où : il s'agit d'un lieu (dans le poème), donc « où », avec un accent.",
              "Homophone c'est / s'est : le verbe est pronominal (« se représenter »), donc « s'est ».",
              "Phrase corrigée : « Nous nous demanderons comment Rimbaud exprime sa liberté dans « Ma Bohème », où le poète s'est représenté en marcheur. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez les erreurs de ces phrases : a) « Les arguments que l'auteur a développé sont convainquants. » b) « Les personnages se demandent qu'est-ce qu'ils vont faire. » c) « Ces deux personnages font croire a leur père qu'ils on raison. »",
              hint: "Cherchez un participe passé, une interrogation indirecte et des homophones.",
              solution: [
                "a) « développés » : participe passé avec avoir, accordé avec le complément d'objet direct « que » (mis pour « les arguments »), placé avant. « Convaincants » s'écrit avec « c » (l'adjectif), « convainquant » étant le participe présent.",
                "b) Interrogation indirecte : « Les personnages se demandent ce qu'ils vont faire. »",
                "c) « à leur père » (préposition, avec accent), « ils ont raison » (verbe avoir, pluriel).",
                "Phrases corrigées : a) « Les arguments que l'auteur a développés sont convaincants. » b) « Les personnages se demandent ce qu'ils vont faire. » c) « Ces deux personnages font croire à leur père qu'ils ont raison. »",
              ],
            },
            {
              level: 2,
              statement: "Intégrez correctement la citation suivante, tirée d'un texte d'entraînement (vers 4), dans une phrase d'analyse : « Le vent emporte nos promesses ». Votre phrase doit adapter la citation à la syntaxe si besoin, donner la référence et interpréter l'image.",
              hint: "La citation doit faire partie de votre phrase ; un verbe d'analyse et une interprétation doivent l'accompagner.",
              solution: [
                "Choisir un verbe d'analyse qui introduit la citation : par exemple « Le poète suggère que... ».",
                "Intégrer la citation sans rompre la syntaxe et donner la référence entre parenthèses.",
                "Nommer le procédé : le vent est personnifié, il agit comme un voleur.",
                "Interpréter : l'image traduit la fragilité des engagements humains face au temps.",
                "Phrase possible : « Le poète suggère la fragilité des engagements humains lorsqu'il écrit que “le vent emporte nos promesses” (v. 4) : la personnification du vent, présenté comme un voleur, montre que la parole donnée ne résiste pas au temps. »",
              ],
            },
            {
              level: 3,
              statement: "Vous avez choisi la dissertation à 8 h 15, après 15 minutes de lecture des sujets (l'épreuve a commencé à 8 h 00 et se termine à 12 h 00). Vous voulez garder 20 minutes de relecture, et consacrer 75 minutes au brouillon puis 15 minutes à l'introduction et à la conclusion au brouillon. a) À quelle heure commencez-vous la rédaction au propre, et combien de temps avez-vous pour elle ? b) Le plan compte trois parties de même longueur, plus l'introduction et la conclusion recopiées (10 minutes en tout) : combien de minutes par partie ? c) Rédigez une transition entre une première partie montrant que le mensonge fait rire dans « Le Menteur » et une deuxième partie montrant qu'il pose une question morale.",
              hint: "Additionnez les durées à partir de 8 h 15, puis retirez la relecture de ce qui reste avant 12 h 00.",
              solution: [
                "a) Début du brouillon : 8 h 15. Après 75 minutes : 9 h 30. Après 15 minutes : 9 h 45. La relecture commence à 12 h 00 moins 20 minutes, soit 11 h 40. Rédaction : de 9 h 45 à 11 h 40, soit 1 h 55, c'est-à-dire 115 minutes.",
                "Vérification : 15 + 75 + 15 + 115 + 20 = 240 minutes, soit bien 4 heures.",
                "b) 115 - 10 = 105 minutes pour les trois parties, soit 105 ÷ 3 = 35 minutes par partie.",
                "c) Transition possible : « Le mensonge de Dorante est donc d'abord une source inépuisable de rire, qui nourrit quiproquos et rebondissements. Pourtant, ces fables ne sont pas sans conséquences : elles trompent un père et menacent l'honneur d'un fils, si bien que la comédie soulève aussi une question morale. »",
                "Résultat : rédaction de 9 h 45 à 11 h 40 (115 minutes), 35 minutes par partie, et une transition qui résume puis annonce.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes des quatre heures de l'écrit.",
            items: [
              "Lire les deux sujets en entier et choisir",
              "Analyser le sujet ou le texte au brouillon",
              "Construire le plan détaillé avec les exemples",
              "Rédiger l'introduction et préparer la conclusion au brouillon",
              "Rédiger le développement au propre",
              "Recopier la conclusion",
              "Relire : le sens, les accords, l'orthographe",
            ],
          },
          quiz: [
            {
              q: "Comment présente-t-on le titre d'un poème dans une copie ?",
              options: ["Souligné", "En majuscules", "Sans signe particulier", "Entre guillemets"],
              answer: 3,
              why: "Le titre d'un poème, d'un chapitre ou d'une scène se met entre guillemets ; le titre d'une œuvre entière est souligné à la main.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["On se demande qu'est-ce que l'auteur dénonce.", "On se demande ce que l'auteur dénonce.", "On se demande ce que dénonce-t-il ?", "On se demande, qu'est-ce qu'il dénonce ?"],
              answer: 1,
              why: "L'interrogation indirecte n'a ni « qu'est-ce que », ni inversion du pronom, ni point d'interrogation.",
            },
            {
              q: "Comment signale-t-on une coupure dans une citation ?",
              options: ["[...]", "Un tiret", "Des parenthèses vides", "Rien"],
              answer: 0,
              why: "Les crochets avec points de suspension indiquent qu'un passage a été supprimé.",
            },
            {
              q: "« Les œuvres que nous avons ... » : quelle forme complète correctement la phrase ?",
              options: ["étudié", "étudiés", "étudiées", "étudier"],
              answer: 2,
              why: "Avec avoir, le participe s'accorde avec le complément d'objet direct placé avant : « que », mis pour « les œuvres », féminin pluriel.",
            },
            {
              q: "Quelle est la meilleure façon de relire ?",
              options: ["Une seule lecture rapide", "En plusieurs passages ciblés", "Uniquement l'introduction", "Ne pas relire pour finir à temps"],
              answer: 1,
              why: "Chaque passage a un objectif : le sens, puis les accords, puis l'orthographe et la ponctuation.",
            },
          ],
          trap: "Écrire « nous nous demanderons comment l'auteur dénonce-t-il... ? » dans l'annonce de la problématique : l'interrogation indirecte ne prend ni inversion ni point d'interrogation, et cette faute se voit dès la première page.",
          method: "Lors des devoirs de l'année, notez sur une fiche vos cinq erreurs de langue les plus fréquentes ; le jour de l'épreuve, consacrez un passage de relecture à les chercher une par une.",
        },
      ],
    },
    {
      id: 'bac-oral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'deroule-oral',
          title: 'Le déroulé de l’oral et le récapitulatif des textes',
          minutes: 25,
          objectives: [
            "Connaître le déroulement de l'épreuve orale : préparation, durée, deux parties et barème.",
            "Comprendre le rôle du récapitulatif des œuvres et des textes étudiés.",
            "Organiser ses révisions de l'oral sur l'année.",
          ],
          course: [
            {
              heading: "Le cadre de l'épreuve orale",
              paragraphs: [
                "L'oral de français est, comme l'écrit, une épreuve anticipée passée en fin de première ; il est noté sur 20 et a le coefficient 5. Il a lieu en juin, à une date fixée par votre académie, devant un examinateur qui est un professeur de lettres d'un autre établissement : il ne vous connaît pas, et il découvre votre travail de l'année.",
                "Vous disposez de 30 minutes de préparation, puis l'épreuve dure 20 minutes. Elle se compose de deux parties : une première partie de 12 minutes, notée sur 12 points, consacrée à un texte ; une seconde partie de 8 minutes, notée sur 8 points, consacrée à une œuvre que vous avez choisie. Le temps de préparation sert à préparer la première partie.",
              ],
              box: { label: "Repère", text: "Oral de français : 30 minutes de préparation, 20 minutes d'épreuve, coefficient 5. Première partie : 12 minutes, 12 points. Seconde partie : 8 minutes, 8 points." },
            },
            {
              heading: "Le récapitulatif des œuvres et des textes",
              paragraphs: [
                "Le récapitulatif est le document, établi par votre professeur et visé par le chef d'établissement, qui présente ce que votre classe a étudié dans l'année : les œuvres intégrales, les parcours associés, les textes étudiés en explication linéaire, les lectures cursives. Il est transmis à l'examinateur, qui s'en sert pour choisir le texte de la première partie.",
                "La réglementation fixe un nombre minimal de textes susceptibles de donner lieu à l'explication : en voie générale, il est de l'ordre de quatre à cinq textes par objet d'étude, soit seize à vingt textes selon les sessions. Votre professeur vous indique le nombre exact retenu pour votre session. Chacun de ces textes peut tomber : il faut donc les préparer tous, sans faire d'impasse.",
                "Le récapitulatif mentionne aussi l'œuvre que vous présenterez dans la seconde partie, choisie parmi les œuvres étudiées en classe ou lues en lecture cursive. Le jour de l'oral, suivez les consignes de votre établissement : en général, on se présente avec sa convocation, une pièce d'identité, le récapitulatif et des exemplaires sans annotations des textes et de l'œuvre choisie.",
              ],
            },
            {
              heading: "La première partie : le texte (12 points)",
              paragraphs: [
                "L'examinateur choisit l'un des textes du récapitulatif et vous indique le passage à expliquer ainsi que la question de grammaire, qui porte sur une phrase ou une partie de phrase de ce passage. Pendant les 30 minutes de préparation, vous préparez l'explication et la réponse à la question de grammaire, en notant au brouillon les grandes lignes, et non un texte entièrement rédigé.",
                "Devant l'examinateur, en 12 minutes, vous présentez le texte, vous le lisez à voix haute, vous l'expliquez de façon linéaire, puis vous répondez à la question de grammaire. Le barème est le suivant : la lecture est notée sur 2 points, l'explication sur 8 points, la question de grammaire sur 2 points.",
              ],
              box: { label: "À retenir", text: "Première partie, sur 12 points : lecture à voix haute sur 2, explication linéaire sur 8, question de grammaire sur 2." },
            },
            {
              heading: "La seconde partie : l'œuvre choisie (8 points)",
              paragraphs: [
                "Dans la seconde partie, vous présentez brièvement l'œuvre que vous avez choisie et les raisons de ce choix, puis un entretien s'engage avec l'examinateur. Il vous pose des questions pour vérifier votre connaissance de l'œuvre, vous faire approfondir votre lecture et apprécier votre capacité à défendre un point de vue. Cette partie se prépare dans l'année, et non pendant les 30 minutes.",
                "L'entretien évalue aussi l'expression orale : clarté, correction de la langue, capacité à écouter et à rebondir sur une question. Il ne s'agit pas d'un exposé récité, mais d'un véritable échange, dans lequel votre engagement personnel de lecteur compte.",
              ],
            },
          ],
          keyPoints: [
            "Oral : 30 minutes de préparation, 20 minutes d'épreuve, coefficient 5, devant un examinateur d'un autre établissement.",
            "Première partie (12 min, 12 points) : lecture 2, explication linéaire 8, question de grammaire 2.",
            "Seconde partie (8 min, 8 points) : présentation de l'œuvre choisie et entretien.",
            "Le récapitulatif liste les œuvres et textes étudiés ; l'examinateur y choisit le texte.",
            "En voie générale : de l'ordre de quatre à cinq textes par objet d'étude ; aucun ne doit être négligé.",
          ],
          example: {
            statement: "Vous êtes convoqué à 9 h 00 pour l'oral. Établissez l'horaire précis de votre passage : préparation, fin de la première partie, fin de l'épreuve. Indiquez aussi le total des points de chaque partie.",
            solution: [
              "Préparation : 30 minutes, de 9 h 00 à 9 h 30.",
              "Première partie : 12 minutes, de 9 h 30 à 9 h 42 (lecture, explication, grammaire).",
              "Seconde partie : 8 minutes, de 9 h 42 à 9 h 50 (présentation de l'œuvre choisie et entretien).",
              "Points : première partie sur 12 (2 + 8 + 2), seconde partie sur 8, soit 12 + 8 = 20.",
              "Réponse : préparation de 9 h 00 à 9 h 30, épreuve de 9 h 30 à 9 h 50, première partie terminée à 9 h 42.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un candidat obtient 1,5 sur 2 pour la lecture, 5 sur 8 pour l'explication, 1 sur 2 pour la grammaire et 6 sur 8 pour l'entretien. Calculez sa note sur 12 pour la première partie, puis sa note finale sur 20.",
              hint: "Additionnez d'abord les trois éléments de la première partie.",
              solution: [
                "Première partie : 1,5 + 5 + 1 = 7,5 sur 12.",
                "Seconde partie : 6 sur 8.",
                "Note finale : 7,5 + 6 = 13,5 sur 20.",
                "Vérification : 12 + 8 = 20 points au total, le calcul est cohérent.",
                "Résultat : 7,5 sur 12 pour la première partie, 13,5 sur 20 au total.",
              ],
            },
            {
              level: 2,
              statement: "Votre récapitulatif compte 16 textes (quatre par objet d'étude). Il vous reste 4 semaines avant l'oral, et vous voulez revoir chaque texte deux fois, à raison de 5 jours de travail par semaine. a) Combien de révisions de textes devez-vous faire en tout ? b) Combien par semaine, puis par jour de travail ? c) Proposez une organisation de la première semaine.",
              hint: "Multipliez le nombre de textes par le nombre de révisions, puis divisez par les semaines et par les jours.",
              solution: [
                "a) 16 textes × 2 révisions = 32 révisions.",
                "b) 32 ÷ 4 = 8 révisions par semaine, soit 8 ÷ 5 = 1,6 par jour : on prévoit donc 2 textes certains jours et 1 texte les autres (2 + 2 + 2 + 1 + 1 = 8).",
                "c) Première semaine : lundi, deux textes de poésie ; mardi, les deux autres textes de poésie ; mercredi, deux textes de théâtre ; jeudi et vendredi, un texte de théâtre chacun. Pour chaque texte : relecture à voix haute, reprise du plan de l'explication, révision d'une question de grammaire possible.",
                "Résultat : 32 révisions, 8 par semaine, 1 ou 2 textes par jour de travail.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Un camarade affirme : « Pour l'oral, je prépare seulement les textes que j'ai bien aimés, je rédige mon explication en entier pendant la préparation et je la lirai, et je choisirai l'œuvre de la seconde partie le jour même. » Relevez ses trois erreurs et donnez-lui pour chacune un conseil précis, en vous appuyant sur les règles de l'épreuve.",
              hint: "Reprenez le choix du texte par l'examinateur, la nature de l'explication orale, et le rôle du récapitulatif.",
              solution: [
                "Première erreur : faire des impasses. C'est l'examinateur qui choisit le texte dans le récapitulatif ; chaque texte peut tomber. Conseil : préparer tous les textes, avec une fiche par texte.",
                "Deuxième erreur : rédiger et lire. En 30 minutes, on ne peut pas tout rédiger, et une explication lue est monotone et peu convaincante. Conseil : noter au brouillon l'introduction, le projet de lecture, les mouvements et les remarques principales, puis parler en regardant l'examinateur.",
                "Troisième erreur : choisir l'œuvre le jour même. L'œuvre choisie figure sur le récapitulatif et l'entretien se prépare pendant l'année. Conseil : la choisir tôt, la relire, préparer sa présentation et les raisons de son choix.",
                "Conclusion : l'oral se prépare toute l'année, texte par texte, et l'entretien se prépare autant que l'explication.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le déroulé de l'oral du bac de français.",
            statements: [
              { text: "La préparation dure 30 minutes.", true: true, why: "C'est le temps prévu avant l'épreuve de 20 minutes." },
              { text: "Le candidat choisit lui-même le texte à expliquer.", true: false, why: "C'est l'examinateur qui le choisit parmi les textes du récapitulatif." },
              { text: "La question de grammaire porte sur le texte expliqué.", true: true, why: "Elle porte sur une phrase ou une partie de phrase du passage." },
              { text: "La lecture à voix haute n'est pas notée.", true: false, why: "Elle est notée sur 2 points." },
              { text: "La seconde partie porte sur une œuvre choisie par le candidat.", true: true, why: "Elle est choisie parmi les œuvres étudiées en classe ou lues en lecture cursive." },
              { text: "L'examinateur est en général votre professeur de l'année.", true: false, why: "C'est un professeur d'un autre établissement." },
              { text: "L'explication compte pour 8 points sur 20.", true: true, why: "Lecture 2, explication 8, grammaire 2, entretien 8." },
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure l'épreuve orale, préparation non comprise ?",
              options: ["10 minutes", "20 minutes", "30 minutes", "1 heure"],
              answer: 1,
              why: "L'épreuve dure 20 minutes, après 30 minutes de préparation.",
            },
            {
              q: "Sur combien de points est notée la question de grammaire ?",
              options: ["2", "4", "6", "8"],
              answer: 0,
              why: "Elle vaut 2 points, comme la lecture ; l'explication vaut 8 points.",
            },
            {
              q: "Qui établit le récapitulatif des textes ?",
              options: ["L'examinateur", "Le candidat seul", "Le professeur de la classe", "Le ministère, pour toute la France"],
              answer: 2,
              why: "Le professeur établit le récapitulatif de ce que sa classe a étudié, visé par le chef d'établissement.",
            },
            {
              q: "Que se passe-t-il pendant la seconde partie ?",
              options: ["Une nouvelle explication de texte", "Une question de grammaire", "Une dictée", "La présentation de l'œuvre choisie et un entretien"],
              answer: 3,
              why: "La seconde partie, sur 8 points, est consacrée à l'œuvre choisie et à un échange avec l'examinateur.",
            },
            {
              q: "Combien de points vaut la première partie de l'oral ?",
              options: ["12", "8", "10", "20"],
              answer: 0,
              why: "La première partie vaut 12 points (2 + 8 + 2), la seconde 8 points.",
            },
          ],
          trap: "Faire des impasses sur certains textes du récapitulatif en pensant qu'ils ne tomberont pas : c'est l'examinateur qui choisit, et n'importe lequel peut être retenu.",
          method: "Préparez une fiche par texte du récapitulatif : situation, projet de lecture, mouvements, trois remarques essentielles par mouvement, une question de grammaire possible. Relisez chaque texte à voix haute au moins une fois par semaine pendant le dernier mois.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'explication-lineaire',
          title: 'L’explication linéaire : lecture expressive et analyse',
          minutes: 35,
          objectives: [
            "Présenter un texte et formuler un projet de lecture à l'oral.",
            "Lire un texte à voix haute de façon expressive, en respectant ses règles de diction.",
            "Expliquer un texte de manière linéaire, mouvement par mouvement, en interprétant les procédés.",
            "Conclure une explication en répondant au projet de lecture.",
          ],
          course: [
            {
              heading: "Le principe de l'explication linéaire",
              paragraphs: [
                "L'explication linéaire suit l'ordre du texte, du début à la fin. Le texte est découpé en mouvements, c'est-à-dire en étapes de sens (un changement de sujet, de temps, de locuteur, de ton, une strophe). Chaque mouvement est expliqué dans l'ordre, et toutes les remarques servent un même projet de lecture, annoncé dans l'introduction.",
                "Suivre le texte ne veut pas dire le paraphraser. Pour chaque passage, on cite les mots du texte, on nomme le procédé, on interprète son effet, et on relie l'ensemble au projet de lecture. On ne cherche pas à tout dire : on choisit les remarques qui éclairent le sens et la singularité du texte.",
              ],
              box: { label: "Définition", text: "L'explication linéaire est l'analyse orale d'un texte dans son ordre, mouvement par mouvement, au service d'un projet de lecture : citer, nommer le procédé, interpréter." },
            },
            {
              heading: "Introduction et lecture expressive",
              paragraphs: [
                "L'introduction est brève, environ une minute : situer l'auteur et l'œuvre sans réciter de biographie, situer le passage dans l'œuvre, dire en une phrase de quoi il parle. Vient ensuite la lecture à voix haute, puis l'annonce du projet de lecture et des mouvements. Certains professeurs placent la lecture juste après la présentation du texte : l'essentiel est qu'elle précède l'explication.",
                "La lecture, notée sur 2 points, doit être claire, audible, posée, et montrer que vous avez compris le texte : ton adapté (ironie, colère, émotion), respect de la ponctuation, pauses, liaisons obligatoires. Elle ne doit être ni précipitée, ni théâtralisée à l'excès. Regardez de temps en temps l'examinateur.",
                "En poésie, respectez le compte des syllabes. Le e muet se prononce devant une consonne à l'intérieur du vers, il s'élide devant une voyelle et ne compte pas en fin de vers. Certaines suites de voyelles se prononcent en deux syllabes (diérèse) ou en une seule (synérèse) selon le mètre. Faites la liaison quand le rythme du vers l'exige.",
              ],
            },
            {
              heading: "Expliquer mouvement par mouvement",
              paragraphs: [
                "Pour chaque mouvement, annoncez d'abord son idée principale en une phrase, puis avancez dans le texte : une citation, un procédé, une interprétation, et ainsi de suite. Les outils d'analyse sont ceux de l'écrit : lexique, images, rythme, sonorités, temps verbaux, énonciation, types de phrases, versification. Terminez chaque mouvement par une phrase de bilan qui revient au projet de lecture.",
                "Exemple sur « Le Dormeur du val » de Rimbaud, sonnet écrit en 1870, pendant la guerre franco-prussienne. Premier mouvement, le premier quatrain : la nature est lumineuse et vivante ; dès le premier vers, la rivière « chante » (personnification) dans un « trou de verdure », image d'un paysage accueillant. Le poème installe ainsi un cadre paisible qui rendra la chute plus brutale.",
                "Dernier mouvement, le dernier tercet : le soldat semble dormir « dans le soleil », mais le vers final révèle qu'il a « deux trous rouges au côté droit ». La couleur rouge, qui contraste avec le vert du paysage, et la brièveté de la phrase finale créent une chute : le dormeur est mort. Le poème dénonce la guerre de façon d'autant plus forte qu'il ne la nomme jamais.",
              ],
              box: { label: "Règle", text: "Dans chaque mouvement : une phrase d'annonce, puis des analyses dans l'ordre du texte (citation, procédé, interprétation), enfin une phrase de bilan qui revient au projet de lecture." },
            },
            {
              heading: "Conclure",
              paragraphs: [
                "La conclusion répond au projet de lecture en reprenant ce que chaque mouvement a apporté. Elle peut s'ouvrir sur un rapprochement précis avec un autre texte du parcours ou de l'œuvre. Elle dure moins d'une minute. Pour « Le Dormeur du val », on peut conclure que Rimbaud fait du sonnet une dénonciation indirecte de la guerre, par le contraste entre la nature vivante et le corps du soldat.",
                "Gérez votre temps : la première partie entière, introduction, lecture, explication et grammaire comprises, dure 12 minutes. L'explication proprement dite occupe donc huit minutes environ. Entraînez-vous avec un chronomètre pour sentir cette durée.",
              ],
            },
          ],
          keyPoints: [
            "Suivre l'ordre du texte, mouvement par mouvement, au service d'un projet de lecture.",
            "Introduction brève : auteur, œuvre, situation du passage, sujet du texte.",
            "Lecture notée sur 2 points : claire, posée, expressive, respectueuse de la ponctuation et du mètre.",
            "E muet : prononcé devant consonne, élidé devant voyelle, non compté en fin de vers.",
            "Chaque remarque : citer, nommer, interpréter, relier au projet de lecture.",
            "Conclusion : réponse au projet de lecture, ouverture éventuelle, le tout en moins d'une minute.",
          ],
          example: {
            statement: "Pour « Le Dormeur du val » de Rimbaud (« Cahier de Douai », sonnet écrit en 1870), proposez l'introduction, le projet de lecture et le découpage en mouvements d'une explication linéaire.",
            solution: [
              "Situation : Rimbaud, jeune poète de seize ans, recopie en 1870 un ensemble de poèmes connu sous le nom de « Cahier de Douai ». « Le Dormeur du val » est un sonnet écrit pendant la guerre franco-prussienne.",
              "Sujet du texte : le poème décrit un jeune soldat étendu dans un vallon ensoleillé, qui semble dormir.",
              "Projet de lecture : comment Rimbaud dénonce-t-il la guerre à travers le tableau faussement paisible d'un soldat endormi ?",
              "Premier mouvement, le premier quatrain : un paysage lumineux et vivant, personnifié.",
              "Deuxième mouvement, le second quatrain et le premier tercet : le portrait d'un soldat jeune et fragile, apparemment endormi, dont la pâleur inquiète.",
              "Troisième mouvement, le dernier tercet : la chute, qui révèle la mort par les « deux trous rouges ».",
              "Réponse : introduction en trois phrases, projet de lecture sur la dénonciation indirecte de la guerre, trois mouvements qui vont de l'apparence paisible à la révélation de la mort.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte d'entraînement, écrit pour cet exercice : « (1) Le train ralentit, puis s'arrêta dans une gare minuscule. (2) Paul colla son front à la vitre. (3) Sur le quai désert, une lanterne se balançait au vent. (4) Soudain, une silhouette surgit de l'ombre et courut vers son wagon. (5) C'était sa sœur, qu'il n'avait pas revue depuis dix ans. (6) Il sentit ses mains trembler. » Découpez ce texte en mouvements et donnez un titre à chacun.",
              hint: "Cherchez le mot qui marque une rupture dans le récit.",
              solution: [
                "Premier mouvement, phrases 1 à 3 : l'arrivée dans une gare déserte, un décor d'attente immobile.",
                "Deuxième mouvement, phrases 4 et 5 : l'événement, signalé par l'adverbe « Soudain » ; une silhouette surgit, puis elle est identifiée.",
                "Troisième mouvement, phrase 6 : l'émotion du personnage, traduite par un signe physique.",
                "Résultat : trois mouvements, du décor à l'événement, puis à l'émotion.",
              ],
            },
            {
              level: 2,
              statement: "Transformez cette remarque paraphrastique en véritable analyse, à partir du même texte d'entraînement (la gare et la sœur de Paul) : « Dans la phrase 3, il y a une lanterne qui bouge sur le quai où il n'y a personne. »",
              hint: "Nommez le ou les procédés (adjectif, verbe, temps), puis dites quelle atmosphère ils créent.",
              solution: [
                "Citation : « Sur le quai désert, une lanterne se balançait au vent ».",
                "Procédés : l'adjectif « désert » souligne la solitude ; l'imparfait « se balançait » installe une description d'arrière-plan ; le mouvement régulier de la lanterne est le seul signe de vie.",
                "Interprétation : le décor crée une atmosphère d'attente et de solitude, presque inquiétante, qui prépare la surprise de la phrase suivante.",
                "Analyse rédigée : « L'adjectif “désert” et l'imparfait “se balançait” installent un décor immobile et solitaire, où seule une lanterne bouge au vent : cette atmosphère d'attente prépare l'irruption soudaine de la silhouette. »",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Toujours à partir du texte d'entraînement de la gare, formulez un projet de lecture puis rédigez l'explication complète du deuxième mouvement (phrases 4 et 5), comme vous la diriez à l'oral.",
              hint: "Repérez le passage du passé simple au plus-que-parfait et la construction de la phrase 5.",
              solution: [
                "Projet de lecture : comment ce court récit transforme-t-il une arrivée banale en scène de retrouvailles bouleversantes ?",
                "Annonce du mouvement : « Dans ce deuxième mouvement, l'événement surgit et rompt l'attente. »",
                "Phrase 4 : l'adverbe « Soudain », placé en tête, marque la rupture ; les passés simples « surgit » et « courut » font avancer l'action rapidement ; le mot « silhouette » maintient le mystère, puisque le personnage n'est pas encore identifié.",
                "Phrase 5 : la tournure « C'était sa sœur » lève le mystère ; la relative « qu'il n'avait pas revue depuis dix ans », au plus-que-parfait et à la forme négative, ouvre brusquement un passé de séparation et donne à la scène sa charge émotionnelle.",
                "Bilan : « Ce mouvement fait basculer la scène : l'inconnue devient une sœur perdue, et l'arrivée banale devient des retrouvailles. »",
                "Résultat : un projet de lecture sur la transformation d'une scène banale et une explication qui suit le texte en interprétant chaque procédé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la première partie de l'oral.",
            items: [
              "Présenter brièvement l'auteur, l'œuvre et le passage",
              "Lire le texte à voix haute",
              "Annoncer le projet de lecture et les mouvements",
              "Expliquer le premier mouvement",
              "Expliquer les mouvements suivants dans l'ordre du texte",
              "Conclure en répondant au projet de lecture",
              "Répondre à la question de grammaire",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un mouvement dans une explication linéaire ?",
              options: ["Une figure de style", "Un geste pendant la lecture", "Une étape de sens du texte", "Une partie thématique du commentaire"],
              answer: 2,
              why: "Le texte est découpé en mouvements, c'est-à-dire en étapes de sens, expliquées dans l'ordre.",
            },
            {
              q: "Dans un vers, comment se traite le e muet placé devant une voyelle ?",
              options: ["Il compte toujours", "Il compte double", "Il se prononce fortement", "Il s'élide"],
              answer: 3,
              why: "Devant une voyelle, le e muet s'élide et ne compte pas ; devant une consonne, il se prononce.",
            },
            {
              q: "Sur combien de points est notée la lecture ?",
              options: ["0, elle n'est pas notée", "2", "4", "8"],
              answer: 1,
              why: "La lecture vaut 2 points dans la première partie de l'oral.",
            },
            {
              q: "Quelle remarque est une analyse et non une paraphrase ?",
              options: ["La rivière « chante » : cette personnification rend la nature vivante.", "Le poète parle d'une rivière.", "Il y a une rivière et de l'herbe.", "Le texte décrit un paysage."],
              answer: 0,
              why: "L'analyse cite, nomme le procédé et interprète son effet.",
            },
            {
              q: "Combien de temps environ reste-t-il pour l'explication proprement dite ?",
              options: ["2 minutes", "20 minutes", "Environ 8 minutes", "30 minutes"],
              answer: 2,
              why: "La première partie dure 12 minutes en tout, introduction, lecture et grammaire comprises.",
            },
          ],
          trap: "Paraphraser, c'est-à-dire redire le texte avec d'autres mots (« ensuite, le poète dit que... ») : l'examinateur attend des procédés nommés et interprétés, au service du projet de lecture.",
          method: "Entraînez-vous à voix haute avec un chronomètre : une minute pour l'introduction, une à deux pour la lecture, huit pour l'explication, une pour la grammaire. Enregistrez-vous une fois pour vérifier votre débit et votre ton.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'question-grammaire-oral',
          title: 'Réussir la question de grammaire',
          minutes: 30,
          objectives: [
            "Identifier les propositions d'une phrase complexe et leur nature.",
            "Analyser une subordonnée circonstancielle, une interrogation ou une négation dans un texte.",
            "Répondre à la question de grammaire de façon structurée, avec le vocabulaire grammatical exact.",
          ],
          course: [
            {
              heading: "Ce que l'on attend",
              paragraphs: [
                "La question de grammaire, notée sur 2 points, porte sur une phrase ou une partie de phrase du passage que vous expliquez. Il s'agit d'une analyse syntaxique : identifier les éléments demandés, donner leur nature et leur fonction, justifier par des critères grammaticaux. Elle se traite en une à deux minutes, en général après l'explication.",
                "Les notions sont celles du programme de seconde et de première. En seconde : les accords dans le groupe nominal et entre le verbe et son sujet, les valeurs des temps et des modes, les relations au sein de la phrase complexe. En première : les subordonnées circonstancielles, l'interrogation, l'expression de la négation.",
              ],
              box: { label: "Repère", text: "Programme de grammaire de première : subordonnées circonstancielles, interrogation, négation. S'y ajoutent les notions de seconde : accords, valeurs des temps et des modes, phrase complexe." },
            },
            {
              heading: "Une méthode en quatre temps",
              paragraphs: [
                "Premier temps : relire la phrase et repérer les verbes conjugués ; il y a autant de propositions que de verbes conjugués. Deuxième temps : délimiter les propositions et identifier la principale. Troisième temps : pour chaque élément demandé, donner sa nature (proposition subordonnée circonstancielle de cause, interrogation partielle...), le mot qui l'introduit, sa fonction et le mode du verbe, avec la justification.",
                "Quatrième temps, souvent oublié : dire en une phrase ce que cette construction apporte au sens du texte. Par exemple, une subordonnée de concession souligne une résistance, une négation totale traduit un refus catégorique, une question rhétorique implique le destinataire. Ce lien entre grammaire et interprétation est valorisé.",
              ],
            },
            {
              heading: "Les subordonnées circonstancielles",
              paragraphs: [
                "Une subordonnée circonstancielle est introduite par une conjonction ou une locution conjonctive de subordination et occupe la fonction de complément circonstanciel de la proposition principale. On la classe selon son sens : temps (quand, lorsque, dès que, avant que, après que), cause (parce que, puisque, comme), conséquence (si bien que, de sorte que, si... que), but (pour que, afin que).",
                "Viennent ensuite la concession (bien que, quoique, même si), l'opposition (alors que, tandis que), la condition (si, à condition que, au cas où) et la comparaison (comme, ainsi que, de même que). Le mode est un indice précieux : le but et la concession avec « bien que » appellent le subjonctif ; « après que » se construit avec l'indicatif, « avant que » avec le subjonctif ; « au cas où » avec le conditionnel.",
              ],
              box: { label: "Règle", text: "Subjonctif : pour que, afin que, bien que, quoique, avant que, à condition que. Indicatif : parce que, puisque, si bien que, après que, même si. Conditionnel : au cas où." },
            },
            {
              heading: "L'interrogation et la négation",
              paragraphs: [
                "L'interrogation est totale quand on peut y répondre par oui ou par non (« Viendra-t-il ? »), partielle quand elle porte sur un élément et commence par un mot interrogatif (« Où va-t-il ? »). Directe, elle se construit par l'intonation, par « est-ce que » ou par l'inversion du sujet ; avec un sujet nom, l'inversion est complexe (« Paul viendra-t-il ? »). Indirecte, elle forme une subordonnée complément d'un verbe comme demander, introduite par « si » ou par un mot interrogatif, sans inversion ni point d'interrogation.",
                "La négation totale porte sur toute la phrase (ne... pas, ne... point). La négation partielle porte sur un élément : ne... jamais (le temps), ne... plus, ne... rien, ne... personne, ne... aucun, ne... nulle part. La tournure ne... que est dite restrictive ou exceptive : « Il ne lit que des romans » signifie « il lit seulement des romans », ce n'est pas une vraie négation. Le ne explétif (« je crains qu'il ne pleuve ») n'a pas de valeur négative.",
              ],
            },
          ],
          keyPoints: [
            "Une proposition par verbe conjugué ; repérer d'abord la principale.",
            "Nature, mot introducteur, fonction, mode et justification, puis effet sur le sens du texte.",
            "Circonstancielles : temps, cause, conséquence, but, concession, opposition, condition, comparaison.",
            "But et « bien que » au subjonctif ; « après que » à l'indicatif ; « au cas où » au conditionnel.",
            "Interrogation totale (oui ou non) ou partielle (mot interrogatif) ; directe ou indirecte.",
            "Négation totale, partielle, restrictive (ne... que) ; le ne explétif n'est pas négatif.",
          ],
          example: {
            statement: "Phrase d'entraînement : « Bien qu'il fût épuisé, le messager reprit la route avant que la nuit ne tombe. » Question : analysez les propositions subordonnées de cette phrase.",
            solution: [
              "Verbes conjugués : « fût », « reprit », « tombe » ; la phrase compte donc trois propositions.",
              "Proposition principale : « le messager reprit la route ».",
              "Première subordonnée : « Bien qu'il fût épuisé », proposition subordonnée circonstancielle de concession, introduite par la locution conjonctive « bien que », complément circonstanciel de concession du verbe « reprit » ; verbe au subjonctif imparfait, mode imposé par « bien que ».",
              "Seconde subordonnée : « avant que la nuit ne tombe », proposition subordonnée circonstancielle de temps, introduite par « avant que », complément circonstanciel de temps de « reprit » ; verbe au subjonctif présent, imposé par « avant que » ; le « ne » est explétif et n'a pas de valeur négative.",
              "Effet : la concession souligne la volonté du messager, qui agit malgré la fatigue, et la subordonnée de temps crée une urgence.",
              "Réponse : deux subordonnées circonstancielles, de concession et de temps, toutes deux au subjonctif, compléments circonstanciels du verbe de la principale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le sens (temps, cause, but, conséquence, concession, condition) de chaque subordonnée circonstancielle : a) « Puisque tu refuses, je partirai seule. » b) « Il parla si bas que personne ne l'entendit. » c) « Elle se tait afin qu'on l'oublie. » d) « Si le vent tombe, nous sortirons. »",
              hint: "Appuyez-vous sur la conjonction et sur le mode du verbe.",
              solution: [
                "a) « Puisque tu refuses » : subordonnée de cause, introduite par « puisque », verbe à l'indicatif.",
                "b) « que personne ne l'entendit », annoncée par « si » : subordonnée de conséquence (si... que), verbe à l'indicatif.",
                "c) « afin qu'on l'oublie » : subordonnée de but, introduite par « afin que », verbe au subjonctif.",
                "d) « Si le vent tombe » : subordonnée de condition, introduite par « si », verbe à l'indicatif présent.",
                "Résultat : a) cause, b) conséquence, c) but, d) condition.",
              ],
            },
            {
              level: 2,
              statement: "Analysez l'interrogation et la négation dans ces phrases : a) « Pourquoi ne m'avez-vous jamais écrit ? » b) « Je me demande si elle reviendra. » c) « Il ne reste que des cendres. »",
              hint: "Pour chaque interrogation, précisez totale ou partielle, directe ou indirecte ; pour chaque négation, totale, partielle ou restrictive.",
              solution: [
                "a) Interrogation partielle (elle porte sur la cause et commence par le mot interrogatif « Pourquoi »), directe, construite par l'inversion du sujet « avez-vous » ; négation partielle « ne... jamais », qui porte sur le temps.",
                "b) Interrogation indirecte totale : « si elle reviendra » est une proposition subordonnée interrogative indirecte, introduite par « si », complément d'objet du verbe « demande » ; pas d'inversion ni de point d'interrogation.",
                "c) « ne... que » est une tournure restrictive (ou exceptive) : elle signifie « il reste seulement des cendres » ; ce n'est pas une négation véritable.",
                "Résultat : a) interrogation partielle directe et négation partielle ; b) interrogation totale indirecte ; c) restriction.",
              ],
            },
            {
              level: 3,
              statement: "Question type bac, sur une phrase d'entraînement : « Je ne sais pas pourquoi vous me fuyez, alors que je ne vous ai jamais rien reproché. » Analysez les propositions subordonnées et les négations de cette phrase, puis dites ce que ces constructions apportent au sens.",
              hint: "Commencez par compter les verbes conjugués, puis classez chaque subordonnée ; attention aux négations qui se combinent.",
              solution: [
                "Verbes conjugués : « sais », « fuyez », « ai reproché » ; trois propositions.",
                "Principale : « Je ne sais pas ».",
                "« pourquoi vous me fuyez » : proposition subordonnée interrogative indirecte partielle, introduite par l'adverbe interrogatif « pourquoi », complément d'objet du verbe « sais » ; verbe à l'indicatif, sans inversion.",
                "« alors que je ne vous ai jamais rien reproché » : proposition subordonnée circonstancielle d'opposition, introduite par « alors que », complément circonstanciel de la principale ; verbe à l'indicatif (passé composé).",
                "Négations : « ne... pas » dans la principale, négation totale ; « ne... jamais rien » dans la subordonnée, double négation partielle qui porte sur le temps et sur l'objet, et renforce l'idée d'innocence.",
                "Effet : l'interrogation indirecte exprime l'incompréhension du locuteur, et l'opposition, renforcée par la négation « jamais rien », souligne le contraste entre la fuite de l'autre et sa propre innocence.",
                "Résultat : une interrogative indirecte partielle complément d'objet, une circonstancielle d'opposition, une négation totale et une négation partielle double.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque conjonction au sens de la subordonnée qu'elle introduit.",
            pairs: [
              { left: "puisque", right: "La cause" },
              { left: "afin que", right: "Le but" },
              { left: "si bien que", right: "La conséquence" },
              { left: "bien que", right: "La concession" },
              { left: "à condition que", right: "La condition" },
              { left: "dès que", right: "Le temps" },
            ],
          },
          quiz: [
            {
              q: "« Elle travaille pour que ses enfants réussissent. » Quel est le sens de la subordonnée ?",
              options: ["Le but", "La cause", "La conséquence", "Le temps"],
              answer: 0,
              why: "« pour que » introduit une subordonnée de but, au subjonctif.",
            },
            {
              q: "Quelle interrogation est totale ?",
              options: ["Où vas-tu ?", "Viendrez-vous demain ?", "Qui a parlé ?", "Pourquoi pleure-t-il ?"],
              answer: 1,
              why: "Une interrogation totale appelle une réponse par oui ou par non.",
            },
            {
              q: "Quel mode suit « après que » ?",
              options: ["Le subjonctif", "L'impératif", "L'infinitif", "L'indicatif"],
              answer: 3,
              why: "« Après que » introduit un fait accompli : il se construit avec l'indicatif, contrairement à « avant que ».",
            },
            {
              q: "« Il ne mange que du pain. » Comment nomme-t-on cette tournure ?",
              options: ["Une négation totale", "Une négation partielle", "Une restriction", "Un ne explétif"],
              answer: 2,
              why: "« ne... que » signifie « seulement » : c'est une tournure restrictive ou exceptive.",
            },
            {
              q: "« Je crains qu'il ne soit trop tard. » Quelle est la valeur du « ne » ?",
              options: ["Négation totale", "Explétive, sans valeur négative", "Négation partielle", "Restrictive"],
              answer: 1,
              why: "Après un verbe de crainte, le ne est explétif : la phrase signifie que l'on craint qu'il soit trop tard.",
            },
          ],
          trap: "Prendre « ne... que » pour une négation, ou le ne explétif (« avant qu'il ne parte ») pour une négation totale : dans les deux cas, le sens de la phrase est mal compris et l'analyse est fausse.",
          method: "Pour chaque texte du récapitulatif, repérez à l'avance deux ou trois phrases riches (une subordonnée circonstancielle, une interrogation, une négation) et entraînez-vous à les analyser à voix haute en moins de deux minutes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'entretien-oeuvre-choisie',
          title: 'L’entretien : présenter et défendre l’œuvre choisie',
          minutes: 25,
          objectives: [
            "Présenter brièvement l'œuvre choisie et justifier son choix.",
            "Répondre aux questions de l'examinateur en argumentant et en s'appuyant sur des exemples précis.",
            "Exprimer et défendre une lecture personnelle de l'œuvre dans une langue orale soignée.",
          ],
          course: [
            {
              heading: "Le cadre de la seconde partie",
              paragraphs: [
                "La seconde partie de l'oral dure 8 minutes et est notée sur 8 points. Vous y présentez une œuvre que vous avez choisie parmi celles étudiées en classe ou lues en lecture cursive, et qui figure sur votre récapitulatif. Vous en faites une présentation brève, puis vous dialoguez avec l'examinateur.",
                "Cette partie ne se prépare pas pendant les 30 minutes de préparation, qui servent à l'explication : elle se prépare dans l'année. Choisissez une œuvre que vous connaissez bien et qui vous a vraiment intéressé, car l'examinateur cherche à apprécier votre engagement de lecteur autant que vos connaissances.",
              ],
              box: { label: "Repère", text: "Seconde partie : 8 minutes, 8 points. Une présentation brève de l'œuvre choisie et des raisons du choix, puis un entretien avec l'examinateur." },
            },
            {
              heading: "Préparer la présentation",
              paragraphs: [
                "La présentation dure quelques minutes au plus, sans être récitée. Elle peut suivre ce fil : l'auteur, le titre, la date et le genre ; le sujet de l'œuvre en quelques phrases, sans résumé chapitre par chapitre ; un moment, un personnage ou une citation courte qui vous a marqué ; les raisons de votre choix ; le lien avec l'objet d'étude ou le parcours.",
                "Les raisons du choix doivent être précises et argumentées. « J'ai bien aimé » ne suffit pas ; « j'ai été frappé par la façon dont Musset fait basculer une comédie légère dans le drame, jusqu'à la mort de Rosette » montre une vraie lecture. Préparez deux ou trois raisons, chacune appuyée sur un passage précis.",
              ],
            },
            {
              heading: "Réussir l'échange",
              paragraphs: [
                "L'examinateur pose des questions de natures variées : vérifier votre connaissance de l'œuvre (un personnage, une scène, la fin), vous faire approfondir une idée (« Que voulez-vous dire par là ? »), vous faire relier l'œuvre à d'autres textes, ou vous faire prendre position (« Ce personnage vous paraît-il sympathique ? »). Toutes ces questions sont une occasion de montrer ce que vous savez.",
                "Écoutez la question jusqu'au bout, prenez une seconde pour réfléchir, puis répondez en développant : une idée, un exemple précis, une conclusion. Si vous n'avez pas compris, demandez une reformulation. Si vous ne savez pas, dites-le simplement et proposez ce que vous savez de proche. Vous pouvez nuancer, revenir sur une réponse, défendre un avis argumenté, même différent de celui de l'examinateur.",
              ],
              box: { label: "À retenir", text: "Une bonne réponse à l'entretien : une idée claire, un exemple précis tiré de l'œuvre, une conclusion. On écoute, on réfléchit, on développe, on nuance." },
            },
            {
              heading: "Ce qui est évalué",
              paragraphs: [
                "L'entretien évalue la connaissance de l'œuvre, la capacité à en proposer une lecture personnelle et argumentée, et la qualité de l'expression orale : un vocabulaire précis, des phrases correctes, un registre soutenu sans raideur. On évite les tics de langage (« genre », « du coup », « en mode ») et les réponses par un seul mot.",
                "La posture compte aussi : regarder l'examinateur, parler distinctement, garder une attitude ouverte. L'examinateur n'est pas un adversaire ; il cherche à valoriser ce que vous avez compris. Un candidat qui dialogue avec curiosité et sincérité obtient souvent une meilleure note qu'un candidat qui récite.",
              ],
            },
          ],
          keyPoints: [
            "8 minutes, 8 points : présentation brève de l'œuvre choisie, puis entretien.",
            "L'œuvre est choisie dans l'année, parmi les œuvres étudiées ou les lectures cursives du récapitulatif.",
            "Présentation : auteur, titre, date, genre ; sujet ; un moment marquant ; raisons du choix ; lien avec le parcours.",
            "Raisons du choix précises, appuyées sur des passages, jamais un simple « j'ai aimé ».",
            "Répondre : idée, exemple précis, conclusion ; demander une reformulation si besoin ; nuancer.",
            "Évalués : connaissance de l'œuvre, lecture personnelle argumentée, expression orale.",
          ],
          example: {
            statement: "Vous avez choisi « On ne badine pas avec l'amour » d'Alfred de Musset (1834). Préparez le plan de votre présentation, puis la réponse à la question de l'examinateur : « Camille est-elle responsable du malheur final ? »",
            solution: [
              "Présentation, identité de l'œuvre : une pièce d'Alfred de Musset, publiée en 1834, dont le titre a la forme d'un proverbe ; elle mêle comédie et drame, comme le théâtre romantique.",
              "Sujet : Perdican et sa cousine Camille, destinés à se marier, se retrouvent ; Camille, qui sort du couvent, refuse l'amour par peur d'être trompée ; par dépit, Perdican courtise Rosette, une jeune paysanne, sœur de lait de Camille.",
              "Moment marquant et raison du choix : la fin, où Rosette, qui a entendu Perdican et Camille s'avouer leur amour, meurt ; la pièce bascule alors de la comédie au drame, et ce basculement montre que les jeux de l'amour et de la parole ne sont pas innocents.",
              "Réponse à la question, première idée : Camille porte une part de responsabilité, car son orgueil et sa méfiance, nourris par les récits des religieuses du couvent, la poussent à repousser Perdican.",
              "Nuance : mais Perdican est tout aussi responsable, puisqu'il se sert de Rosette pour rendre Camille jalouse, sans mesurer la souffrance qu'il cause ; les deux jeunes gens jouent avec l'amour, et c'est une innocente qui en paie le prix.",
              "Conclusion de la réponse : la responsabilité est partagée, ce qui justifie le titre : on ne badine pas avec l'amour sans conséquence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Améliorez ces trois justifications du choix d'une œuvre : a) « J'ai choisi ce livre parce que je l'ai bien aimé. » b) « Il est court. » c) « Le personnage principal est intéressant. » Pour chaque phrase, proposez une version argumentée, en prenant comme exemple « Pot-Bouille » d'Émile Zola (1882), roman qui se déroule dans un immeuble bourgeois parisien où s'installe le jeune Octave Mouret.",
              hint: "Remplacez chaque jugement vague par une raison précise et un élément de l'œuvre.",
              solution: [
                "a) « J'ai choisi “Pot-Bouille” parce que Zola y dévoile, derrière la façade respectable d'un immeuble bourgeois, l'hypocrisie et les petites lâchetés de ses habitants. »",
                "b) La brièveté n'est pas une raison littéraire ; on la remplace par : « La structure du roman, qui passe d'un appartement à l'autre, m'a permis d'observer toute une société réunie dans un même lieu. »",
                "c) « Octave Mouret, jeune provincial ambitieux, sert de guide au lecteur : à travers son regard, on découvre les mensonges des familles de l'immeuble. »",
                "Résultat : trois raisons précises, chacune appuyée sur un élément de l'œuvre.",
              ],
            },
            {
              level: 2,
              statement: "Préparez une présentation de l'œuvre choisie d'environ 150 mots, en suivant les cinq étapes du cours, pour « Pour un oui ou pour un non » de Nathalie Sarraute (1982), pièce dans laquelle deux amis, H1 et H2, se disputent à cause d'une intonation.",
              hint: "Identité de l'œuvre, sujet, moment marquant, raisons du choix, lien avec le parcours « théâtre et dispute ».",
              solution: [
                "Identité : « J'ai choisi “Pour un oui ou pour un non”, une pièce courte de Nathalie Sarraute publiée en 1982. »",
                "Sujet : « Deux amis de longue date, désignés seulement par H1 et H2, s'expliquent : H2 s'est éloigné de H1 parce que celui-ci lui a dit un jour “C'est bien... ça”, avec une intonation qu'il a ressentie comme condescendante. »",
                "Moment marquant : « Ce qui m'a frappé, c'est que toute la pièce naît de ce presque rien, et que la querelle révèle peu à peu deux façons opposées de vivre. »",
                "Raisons du choix : « J'ai aimé que Sarraute rende visibles les mouvements intérieurs cachés sous les paroles ordinaires, ce qu'elle appelle la sous-conversation ; cela m'a fait réfléchir au poids des mots dans nos propres disputes. »",
                "Lien avec le parcours : « La pièce illustre le parcours “théâtre et dispute” : la dispute y est à la fois le sujet et la forme même du dialogue. »",
                "Résultat : une présentation structurée, personnelle, qui laisse à l'examinateur des pistes de questions.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. Pendant l'entretien sur « On ne badine pas avec l'amour », l'examinateur vous demande : « Le titre de la pièce vous paraît-il bien choisi ? » Rédigez la réponse que vous donneriez à l'oral, organisée en trois temps (idée, exemples, nuance et conclusion), d'environ 120 mots.",
              hint: "Partez du sens du proverbe (badiner : jouer, plaisanter), puis montrez comment la fin de la pièce lui donne raison.",
              solution: [
                "Idée : « Oui, le titre me paraît très bien choisi, car il a la forme d'un proverbe qui annonce la leçon de la pièce : badiner, c'est plaisanter, jouer avec légèreté, et la pièce montre ce qu'il en coûte de jouer avec l'amour. »",
                "Exemples : « Perdican courtise Rosette pour provoquer la jalousie de Camille, et Camille, de son côté, joue avec les sentiments de Perdican par orgueil. Ces jeux paraissent d'abord comiques, comme les personnages grotesques qui les entourent. »",
                "Nuance et conclusion : « Mais la fin dément cette légèreté : Rosette, qui a tout entendu, meurt. Le titre, qui semble annoncer une comédie, prend alors un sens tragique : la pièce elle-même passe du badinage au drame, et c'est ce qui la rend si forte. »",
                "Résultat : une réponse argumentée, appuyée sur des exemples précis et terminée par une conclusion nette.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La seconde partie de l'oral.",
            statements: [
              { text: "L'œuvre choisie doit figurer sur le récapitulatif.", true: true, why: "Elle est choisie parmi les œuvres étudiées en classe ou lues en lecture cursive." },
              { text: "On prépare l'entretien pendant les 30 minutes de préparation.", true: false, why: "La préparation sert à l'explication ; l'entretien se prépare dans l'année." },
              { text: "Il faut résumer l'œuvre chapitre par chapitre.", true: false, why: "On présente le sujet en quelques phrases, puis un moment marquant et les raisons du choix." },
              { text: "On peut demander à l'examinateur de reformuler une question.", true: true, why: "C'est préférable à une réponse à côté du sujet." },
              { text: "Défendre un avis différent de celui de l'examinateur fait perdre des points.", true: false, why: "Un avis argumenté et nuancé est valorisé, même s'il diffère du sien." },
              { text: "La qualité de l'expression orale est évaluée.", true: true, why: "L'entretien évalue aussi la langue, la clarté et la capacité d'échange." },
            ],
          },
          quiz: [
            {
              q: "Combien de points vaut la seconde partie de l'oral ?",
              options: ["12", "2", "4", "8"],
              answer: 3,
              why: "La seconde partie, présentation et entretien, est notée sur 8 points.",
            },
            {
              q: "Parmi quelles œuvres choisit-on l'œuvre présentée ?",
              options: ["N'importe quel livre lu dans sa vie", "Les œuvres étudiées ou lues en lecture cursive dans l'année", "Uniquement les œuvres du XIXe siècle", "Une œuvre imposée par l'examinateur"],
              answer: 1,
              why: "L'œuvre choisie figure sur le récapitulatif, parmi les œuvres étudiées en classe ou les lectures cursives.",
            },
            {
              q: "Quelle justification du choix est la meilleure ?",
              options: ["Ce livre est court.", "J'ai bien aimé.", "Musset fait basculer une comédie légère dans le drame.", "Mon professeur me l'a conseillé."],
              answer: 2,
              why: "Une raison précise, qui renvoie à un aspect de l'œuvre, montre une vraie lecture personnelle.",
            },
            {
              q: "Que faire si vous ne connaissez pas la réponse à une question ?",
              options: ["Le dire simplement et proposer ce que vous savez de proche", "Inventer une réponse", "Rester silencieux", "Changer de sujet sans prévenir"],
              answer: 0,
              why: "La franchise et la capacité à rebondir sont appréciées ; inventer fait perdre la confiance de l'examinateur.",
            },
            {
              q: "Quelle structure donner à une réponse d'entretien ?",
              options: ["Un seul mot", "Une idée, un exemple précis, une conclusion", "Une longue citation", "Un résumé complet de l'œuvre"],
              answer: 1,
              why: "Une réponse développée et appuyée sur l'œuvre montre la connaissance et la réflexion.",
            },
          ],
          trap: "Réciter une présentation apprise par cœur puis répondre par oui ou par non aux questions : l'entretien est un échange, et l'examinateur attend des réponses développées, appuyées sur des exemples précis de l'œuvre.",
          method: "Préparez pour l'œuvre choisie une fiche de dix questions probables (personnage préféré, scène clé, sens du titre, fin, lien avec le parcours...) et entraînez-vous à y répondre à voix haute devant quelqu'un, en une minute chacune.",
        },
      ],
    },
  ],
}
